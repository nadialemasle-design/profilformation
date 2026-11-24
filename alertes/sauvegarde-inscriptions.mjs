// Sauvegarde quotidienne du « Pilotage » : lancée chaque soir par GitHub Actions.
// Envoie par e-mail (Resend) un tableau récapitulatif des inscriptions, avec deux pièces jointes :
//   - inscriptions-AAAA-MM-JJ.csv  : toutes les sessions et tout ce qui est saisi dans Pilotage (s'ouvre dans Excel) ;
//   - pilotage-AAAA-MM-JJ.json     : copie brute de la table « pilotage », pour pouvoir tout restaurer.
// Mêmes secrets GitHub que les alertes : SUPABASE_SERVICE_KEY et RESEND_API_KEY. Destinataire : l'e-mail de Pilotage › Réglages.
import { sessionsPilotage } from "./alertes-pilotage.mjs";
const SUPABASE_URL = "https://epwghwvqdeirtnigyajj.supabase.co";
const KEY = process.env.SUPABASE_SERVICE_KEY, RESEND = process.env.RESEND_API_KEY;
const FROM = process.env.ALERT_FROM || "Pilotage formations <onboarding@resend.dev>";
const AG = ["B", "M", "Q"];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const csvC = v => { const s = String(v ?? ""); return /[";\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
const frD = iso => iso ? iso.split("-").reverse().join("/") : "";
async function lire(table){
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id,data,updated_at&limit=5000`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } });
  if(!r.ok) throw new Error(`Lecture ${table} impossible (${r.status}) : ${await r.text()}`);
  return (await r.json()).map(x => Object.assign({ id: x.id, _maj: x.updated_at }, x.data || {}));
}
/* colonnes connues de Pilotage, dans l'ordre de l'appli ; les autres champs saisis sont ajoutés à la fin */
const CONNUES = [["lieu", "Lieu"], ["formateur", "Formateur"], ["typeParcours", "Type de parcours"], ["convoc", "Convocation envoyée"], ["salleOk", "Salle OK"], ["licOk", "Licences OK"], ["certOk", "Certif OK"],
  ["qDeroule", "Q. déroulé"], ["qSupport", "Q. support"], ["qProgramme", "Q. programme"], ["annulee", "Annulée"], ["motif", "Motif d'annulation"], ["commentaire", "Commentaire"], ["ancienTitre", "Ancien titre"]];
export function construire(RAW, auj){
  const S = sessionsPilotage(RAW), P = Object.fromEntries((RAW.pilotage || []).map(x => [x.id, x]));
  const reg = P._reglages || {}, agNom = a => ((reg.agences || {})[a] || {}).nom || "Agence " + a;
  const v = (id, k) => (P[id] || {})[k], tot = id => AG.reduce((t, a) => t + (Number(v(id, a)) || 0), 0);
  const vu = new Set(["id", "_maj", ...AG, ...CONNUES.map(c => c[0])]);
  const autres = [...new Set((RAW.pilotage || []).filter(x => x.id !== "_reglages").flatMap(x => Object.keys(x)).filter(k => !vu.has(k)))].sort();
  const val = x => x === true ? "oui" : x === false ? "" : (x ?? "");
  /* CSV : une ligne par session (même sans inscrit), puis les lignes de Pilotage qui ne correspondent plus à aucune session */
  const ent = ["Début", "Fin", "Dates", "Formation", "Titre complet", ...AG.map(agNom), "Total", ...CONNUES.map(c => c[1]), ...autres, "Identifiant", "Dernière modification"];
  const lig = [ent];
  const ligne = (s, id) => [frD(s && s.debut), frD(s && s.fin), s ? s.texte : "", s ? s.nom : "(session introuvable)", s ? s.titre : "", ...AG.map(a => v(id, a) ?? ""), tot(id),
    ...CONNUES.map(c => val(v(id, c[0]))), ...autres.map(k => typeof v(id, k) === "object" ? JSON.stringify(v(id, k)) : val(v(id, k))), id, (P[id] || {})._maj || ""];
  S.forEach(s => lig.push(ligne(s, s.id)));
  const ids = new Set(S.map(s => s.id));
  (RAW.pilotage || []).filter(x => x.id !== "_reglages" && !ids.has(x.id)).forEach(x => lig.push(ligne(null, x.id)));
  const csv = "﻿" + lig.map(r => r.map(csvC).join(";")).join("\r\n");
  /* tableau de l'e-mail : sessions à venir avec au moins un inscrit, puis total général */
  const avenir = S.filter(s => s.fin >= auj), avec = avenir.filter(s => tot(s.id));
  const total = avenir.reduce((t, s) => t + (v(s.id, "annulee") ? 0 : tot(s.id)), 0);
  const th = t => `<th style="background:#12313F;color:#fff;font:600 12px Arial;padding:6px 8px;text-align:left">${t}</th>`;
  const td = (t, x) => `<td style="font:12px Arial;color:#12313F;padding:5px 8px;border-bottom:1px solid #e3e8ee;${x || ""}">${t}</td>`;
  const rows = avec.map(s => { const an = v(s.id, "annulee");
    return `<tr style="${an ? "background:#fdecea" : ""}">${td(esc(s.texte))}${td(`<b>${esc(s.nom)}</b>${an ? ' <span style="color:#c62828">· annulée</span>' : ""}`)}${AG.map(a => td(Number(v(s.id, a)) || "", "text-align:center")).join("")}${td(`<b>${tot(s.id)}</b>`, "text-align:center")}${td(esc(v(s.id, "lieu") || ""))}${td(v(s.id, "convoc") ? "✓" : "", "text-align:center;color:#13866F")}</tr>`; }).join("");
  const html = `<div style="max-width:760px">
  <p style="font:14px Arial;color:#12313F">Bonjour,<br>voici la sauvegarde des inscriptions du ${frD(auj)}.</p>
  <p style="font:14px Arial;color:#12313F"><b>${total}</b> inscrit${total > 1 ? "s" : ""} sur <b>${avec.length}</b> session${avec.length > 1 ? "s" : ""} à venir (${avenir.length} session${avenir.length > 1 ? "s" : ""} programmée${avenir.length > 1 ? "s" : ""}).</p>
  ${avec.length ? `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%"><tr>${th("Dates")}${th("Formation")}${AG.map(a => th(esc(agNom(a)))).join("")}${th("Total")}${th("Lieu")}${th("Convoc")}</tr>${rows}</table>` : `<p style="font:13px Arial;color:#6b7280">Aucun inscrit saisi pour les sessions à venir.</p>`}
  <p style="font:12px Arial;color:#6b7280;margin-top:16px">En pièces jointes : le tableau complet (CSV, à ouvrir avec Excel), sessions passées comprises, et la copie brute de la table « pilotage » (JSON) pour une éventuelle restauration.</p></div>`;
  return { csv, html, json: JSON.stringify(RAW.pilotage || [], null, 1), total, nbSessions: avec.length, email: reg.email || "" };
}
export async function main(){
  if(!KEY || !RESEND){ console.log("Sauvegarde non activée : ajoutez SUPABASE_SERVICE_KEY et RESEND_API_KEY (GitHub › Settings › Secrets and variables › Actions)."); return; }
  const auj = process.env.TODAY || new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
  const RAW = { domaines: await lire("domaines"), formations: await lire("formations"), pilotage: await lire("pilotage") };
  const r = construire(RAW, auj), to = process.env.SAUVEGARDE_EMAIL || r.email;
  if(!to){ console.log("Aucun e-mail renseigné dans Pilotage › Réglages : rien n'est envoyé."); return; }
  const b64 = s => Buffer.from(s, "utf8").toString("base64");
  const res = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject: `Sauvegarde inscriptions du ${frD(auj)} : ${r.total} inscrit${r.total > 1 ? "s" : ""} à venir`, html: r.html,
      attachments: [{ filename: `inscriptions-${auj}.csv`, content: b64(r.csv) }, { filename: `pilotage-${auj}.json`, content: b64(r.json) }] }) });
  if(!res.ok) throw new Error(`Envoi impossible (${res.status}) : ${await res.text()}`);
  console.log(`Sauvegarde envoyée à ${to} (${r.total} inscrits, ${r.nbSessions} sessions).`);
}
if(import.meta.url === `file://${process.argv[1]}`) main().catch(e => { console.error(e.message); process.exit(1); });
