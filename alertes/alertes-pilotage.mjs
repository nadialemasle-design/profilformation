// Alertes e-mail du « Pilotage » : lancé chaque matin (lundi au vendredi) par GitHub Actions.
// Lit les formations et la table protégée « pilotage » dans Supabase, puis envoie un récapitulatif par e-mail (Resend).
// Secrets GitHub nécessaires : SUPABASE_SERVICE_KEY (Supabase › Project Settings › API › service_role) et RESEND_API_KEY.
const SUPABASE_URL = "https://epwghwvqdeirtnigyajj.supabase.co";
const KEY = process.env.SUPABASE_SERVICE_KEY, RESEND = process.env.RESEND_API_KEY;
const FROM = process.env.ALERT_FROM || "Pilotage formations <onboarding@resend.dev>";
const FORCE = /^(1|true|oui)$/i.test(process.env.FORCE || "");

const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const MOISN = {jan:1,janv:1,janvier:1,fev:2,fevr:2,fevrier:2,mar:3,mars:3,avr:4,avril:4,mai:5,juin:6,juil:7,juillet:7,aout:8,sep:9,sept:9,septembre:9,oct:10,octobre:10,nov:11,novembre:11,dec:12,decembre:12};
const AG = ["B", "M", "Q"];
const isoD = d => d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
const dateD = s => { const [y, m, j] = s.split("-").map(Number); return new Date(y, m - 1, j); };
const ajouter = (iso, n) => { const d = dateD(iso); d.setDate(d.getDate() + n); return isoD(d); };
const ecart = (a, b) => Math.round((dateD(b) - dateD(a)) / 864e5);
function ouvresAvant(iso, n){ const d = dateD(iso); let k = 0; while(k < n){ d.setDate(d.getDate() - 1); if(d.getDay() % 6) k++; } return isoD(d); }
function joursSession(t){
  const s = norm(t).replace(/(\d+)\s*(?:er)?\s*au\s*(\d+)/g, (x, a, b) => { const r = []; for(let i = +a; i <= +b && r.length < 31; i++) r.push(i); return r.join(" "); });
  let an = null, pend = [], jours = [];
  (s.match(/\d+|[a-z]+/g) || []).forEach(k => {
    if(/^\d{4}$/.test(k)) an = +k; else if(/^\d{1,2}$/.test(k)) pend.push(+k);
    else if(MOISN[k]){ pend.forEach(j => jours.push([MOISN[k], j])); pend = []; }
  });
  if(!an) return [];
  return jours.map(([m, j]) => an + "-" + String(m).padStart(2,"0") + "-" + String(j).padStart(2,"0"));
}
const nomCourt = t => { const [a, ...b] = String(t).split(":"); const x = a.split(" - ")[0].trim();
  return (x.split(/\s+/).length <= 2 && b.length) ? b.join(":").split(/[-–,]/)[0].trim().replace(/^./, c => c.toUpperCase()) : x; };
export function sessionsPilotage(RAW){ /* même calcul que l'onglet Pilotage de l'appli */
  const map = new Map(), doms = Object.fromEntries((RAW.domaines || []).map(d => [d.id, d]));
  (RAW.formations || []).forEach(f => {
    const par = (f.modules || []).length > 1;
    (f.modules || []).forEach(m => (m.sessions || []).forEach(s => {
      const jours = joursSession(s.texte); if(!jours.length) return;
      const id = norm(m.titre || "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) + "__" + jours[0];
      const certSeule = !par && f.certification && !/venir/i.test(f.certification);
      const certParc = par && ((f.domaine === "ia" && /^M3$/i.test(m.code)) || (f.domaine === "rs" && /^M[23]/i.test(m.code))); /* réseaux : certification possible dès le 2e module */
      const certVid = f.id === "video-ia-avatar";
      const cnom = certSeule ? String(f.certification).replace(/\s*\(.*\)\s*$/, "") : (certParc || certVid) ? (String((doms[certVid ? "ia" : f.domaine] || {}).certification || "").split(":")[0].trim() || "Certification") : "";
      const x = map.get(id) || { id, titre: m.titre, nom: par ? nomCourt(m.titre) : f.nom, texte: s.texte, jours, debut: jours[0], fin: jours[jours.length - 1], cert: "" };
      if(cnom && !x.cert) x.cert = cnom;
      map.set(id, x);
    }));
  });
  return [...map.values()].sort((a, b) => a.debut.localeCompare(b.debut) || a.nom.localeCompare(b.nom));
}
async function lire(table){
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id,data&limit=5000`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } });
  if(!r.ok) throw new Error(`Lecture ${table} impossible (${r.status}) : ${await r.text()}`);
  return (await r.json()).map(x => Object.assign({ id: x.id }, x.data || {}));
}
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const jourFr = iso => dateD(iso).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: "Europe/Paris" });

export async function calculer(RAW, auj){
  const S = sessionsPilotage(RAW), P = Object.fromEntries((RAW.pilotage || []).map(x => [x.id, x]));
  const v = (id, k) => (P[id] || {})[k];
  const tot = id => AG.reduce((t, a) => t + (Number(v(id, a)) || 0), 0);
  const ins = s => tot(s.id) ? `${tot(s.id)} inscrit${tot(s.id) > 1 ? "s" : ""} (${AG.map(a => a + " " + (Number(v(s.id, a)) || 0)).join(" · ")})` : "aucun inscrit saisi";
  /* fenêtre des nouvelles alertes : aujourd'hui, et le lundi le week-end écoulé */
  const lundi = dateD(auj).getDay() === 1, debutFen = lundi ? ajouter(auj, -2) : auj;
  const dans = d => d >= debutFen && d <= auj;
  const nouv = [], attente = [];
  S.forEach(s => {
    const j = ecart(auj, s.debut);
    const items = [
      { k: "salle", ok: v(s.id, "salleOk"), dec: ajouter(s.debut, -25), actif: j >= 0 && j <= 25, txt: `Prévoir la salle · J-${j}` },
      { k: "lic", ok: v(s.id, "licOk"), dec: ajouter(s.debut, -15), actif: j >= 0 && j <= 15, txt: `Prévoir les licences · J-${j}` },
    ];
    if(s.cert){
      const lib = `Prévoir la certification ${s.cert} · examen le ${dateD(s.fin).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}`;
      const actif = auj >= ajouter(s.fin, -10) && auj <= s.fin;
      items.push({ k: "cert", ok: v(s.id, "certOk"), dec: ajouter(s.fin, -10), actif, txt: lib + " · relance J-10" });
      items.push({ k: "cert", ok: v(s.id, "certOk"), dec: ouvresAvant(s.fin, 2), actif, txt: lib + " · relance J-2 ouvrés", rel: true });
    }
    items.forEach(it => {
      if(it.ok || !it.actif) return;
      const ligne = { k: it.k, j: ecart(auj, s.debut), titre: it.txt, detail: `${s.nom} · ${s.texte} · ${ins(s)}${v(s.id, "lieu") ? " · " + v(s.id, "lieu") : ""}` };
      if(dans(it.dec)) nouv.push(ligne); else if(!it.rel) attente.push(ligne);
    });
  });
  nouv.sort((a, b) => a.j - b.j); attente.sort((a, b) => a.j - b.j);
  return { nouv, attente, lundi };
}
function html({ nouv, attente, lundi }, auj){
  const coul = { salle: "#e8590c", lic: "#0b4f9c", cert: "#c62828" };
  const bloc = (titre, l) => l.length ? `<h3 style="font:600 15px Arial;color:#0b4f9c;margin:18px 0 6px">${titre}</h3>` + l.map(a =>
    `<div style="border-left:4px solid ${coul[a.k]};background:#f6f8fb;padding:7px 10px;margin:6px 0;font:13px Arial;color:#1f2a44"><b>${esc(a.titre)}</b><br>${esc(a.detail)}</div>`).join("") : "";
  return `<div style="max-width:640px">
    <p style="font:14px Arial;color:#1f2a44">Bonjour,<br>voici ce qu'il faut prévoir, ${esc(jourFr(auj))}.</p>
    ${bloc("Nouvelles alertes", nouv)}${lundi ? bloc("Toujours à prévoir (récapitulatif du lundi)", attente) : ""}
    <p style="font:12px Arial;color:#6b7280;margin-top:18px">Pour arrêter une alerte, cochez « Salle OK », « Licences OK » ou « Certif OK » dans l'onglet Pilotage de l'appli.</p></div>`;
}
export async function main(){
  /* alertes pas encore activées (clés secrètes non enregistrées) : on s'arrête sans erreur, pour éviter un e-mail d'échec de GitHub chaque matin */
  if(!KEY || !RESEND){ console.log("Alertes e-mail non activées : ajoutez SUPABASE_SERVICE_KEY et RESEND_API_KEY (GitHub › Settings › Secrets and variables › Actions)."); return; }
  const auj = process.env.TODAY || new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
  const RAW = { domaines: await lire("domaines"), formations: await lire("formations"), pilotage: await lire("pilotage") };
  const reg = RAW.pilotage.find(x => x.id === "_reglages") || {};
  if(!reg.email) { console.log("Aucun e-mail renseigné dans Pilotage › Réglages : rien n'est envoyé."); return; }
  const r = await calculer(RAW, auj);
  console.log(`${auj} : ${r.nouv.length} nouvelle(s) alerte(s), ${r.attente.length} en attente.`);
  if(!r.nouv.length && !(r.lundi && r.attente.length) && !FORCE){ console.log("Rien à envoyer aujourd'hui."); return; }
  if(FORCE && !r.lundi) r.lundi = true; /* envoi de test : montre aussi tout ce qui est en attente */
  const n = r.nouv.length + (r.lundi ? r.attente.length : 0);
  const res = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [reg.email], subject: `Pilotage formations : ${n} point${n > 1 ? "s" : ""} à prévoir (${auj.split("-").reverse().join("/")})`, html: html(r, auj) }) });
  if(!res.ok) throw new Error(`Envoi impossible (${res.status}) : ${await res.text()}`);
  console.log("E-mail envoyé à " + reg.email);
}
if(import.meta.url === `file://${process.argv[1]}`) main().catch(e => { console.error(e.message); process.exit(1); });
