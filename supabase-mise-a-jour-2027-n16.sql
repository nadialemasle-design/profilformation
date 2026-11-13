-- =====================================================================
-- Mise à jour n°16 du 13/11/2026 : réparation de l'enregistrement du Pilotage
--   Crée (ou remet en état) la table protégée « pilotage », ses règles d'accès
--   et la fonction qui reconnaît les éditrices. Ne touche à aucune autre donnée.
--   Le relancer ne change rien.
-- À coller dans Supabase › SQL Editor › New query, puis « Run ».
-- =====================================================================
create table if not exists public.editeurs (email text primary key);
alter table public.editeurs enable row level security;

create or replace function public.est_editeur() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.editeurs e where lower(e.email) = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;
revoke all on function public.est_editeur() from public;
grant execute on function public.est_editeur() to anon, authenticated;

create table if not exists public.pilotage (id text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
alter table public.pilotage enable row level security;
revoke all on public.pilotage from anon;
drop policy if exists "pilotage editeurs" on public.pilotage;
create policy "pilotage editeurs" on public.pilotage for all to authenticated using (public.est_editeur()) with check (public.est_editeur());
grant select, insert, update, delete on public.pilotage to authenticated;

-- Vérification : la table existe, est protégée, et votre adresse figure bien parmi les éditrices
select (select relrowsecurity from pg_class where oid = 'public.pilotage'::regclass) as pilotage_protegee,
       (select count(*) from public.pilotage) as lignes_pilotage,
       (select string_agg(email, ', ') from public.editeurs) as editrices;
