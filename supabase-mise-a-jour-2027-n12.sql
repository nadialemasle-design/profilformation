-- =====================================================================
-- Mise à jour n°12 du 04/11/2026 : onglet « Pilotage » (bêta)
--   Table protégée « pilotage » : inscrits par agence (B, M, Q), formateur, lieu, Convoc OK,
--   Salle OK, Licences OK, Certif OK pour chaque session, et les réglages (contacts, e-mail des alertes).
--   PAS de lecture publique : seules les éditrices connectées lisent et modifient.
--   (Le script d'alertes e-mail lit cette table avec la clé secrète « service_role », qui passe outre ces règles.)
-- À coller dans Supabase › SQL Editor › New query, puis « Run » (sans rien sélectionner).
-- Ne supprime rien ; le relancer ne change rien de plus.
-- =====================================================================
create table if not exists public.pilotage (id text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
alter table public.pilotage enable row level security;
revoke all on public.pilotage from anon;
drop policy if exists "pilotage editeurs" on public.pilotage;
create policy "pilotage editeurs" on public.pilotage for all to authenticated using (public.est_editeur()) with check (public.est_editeur());
grant select, insert, update, delete on public.pilotage to authenticated;

-- Vérification : la table existe et la lecture publique est fermée (doit afficher « true | false »)
select (select relrowsecurity from pg_class where oid = 'public.pilotage'::regclass) as protection_active,
       has_table_privilege('anon', 'public.pilotage', 'select') as lecture_publique;
