// Fonction Supabase « ia » : assistance à la rédaction dans Gestion (version en ligne).
// La clé Anthropic reste ici, côté serveur (secret ANTHROPIC_API_KEY) : elle n'apparaît jamais dans le site ni sur GitHub.
// Seules les personnes inscrites dans la table « editeurs » peuvent l'utiliser.
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const MODELE = Deno.env.get("IA_MODELE") || "claude-sonnet-5-5";
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  try {
    const auth = req.headers.get("Authorization") || "";
    const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
    const { data: ed, error: ee } = await sb.from("editeurs").select("email").limit(1);
    if (ee || !ed || !ed.length) return json({ error: "Réservé aux personnes qui gèrent l'outil." }, 403);

    const body = await req.json().catch(() => ({}));
    const cle = Deno.env.get("ANTHROPIC_API_KEY");
    if (body.ping) return json({ ok: !!cle });
    if (!cle) return json({ error: "Clé Anthropic absente : ajoutez le secret ANTHROPIC_API_KEY." }, 500);
    const prompt = String(body.prompt || "").slice(0, 40000);
    if (!prompt) return json({ error: "Demande vide." }, 400);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": cle, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: MODELE, max_tokens: 1500, messages: [{ role: "user", content: prompt }] }),
    });
    const d = await r.json();
    if (!r.ok) return json({ error: r.status === 429 ? "IA très sollicitée : réessayez dans un instant." : "L'IA n'a pas pu répondre (" + r.status + ")." }, 502);
    const text = (d.content || []).filter((c: { type: string }) => c.type === "text").map((c: { text: string }) => c.text).join("");
    return json({ text });
  } catch (_e) {
    return json({ error: "L'IA n'a pas pu répondre." }, 500);
  }
});
