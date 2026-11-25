-- =====================================================================
-- Mise à jour n°20 du 25/11/2026 : compteur de connexions (onglet Gestion › Statistiques)
--   Une ligne par jour, par onglet (consult / admin / pilot) et par type d'utilisateur
--   (visiteur sans connexion / conseillère connectée / éditeur), avec un compteur.
--   Aucune donnée personnelle : ni nom, ni e-mail, ni adresse IP.
--   Tout le monde peut incrémenter le compteur (fonction compter_visite) ; seuls les éditeurs peuvent le lire.
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne change rien.
-- =====================================================================
create table if not exists public.visites (
  jour date not null,
  onglet text not null,
  profil text not null default 'visiteur',
  nb integer not null default 0,
  primary key (jour, onglet, profil)
);
alter table public.visites enable row level security;
drop policy if exists "visites lecture editeurs" on public.visites;
create policy "visites lecture editeurs" on public.visites for select using (public.est_editeur());

create or replace function public.compter_visite(p_onglet text, p_profil text default 'visiteur') returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_onglet not in ('consult', 'admin', 'pilot') then return; end if;
  if p_profil not in ('visiteur', 'conseillere', 'editeur') then p_profil := 'visiteur'; end if;
  insert into public.visites (jour, onglet, profil, nb) values ((now() at time zone 'Europe/Paris')::date, p_onglet, p_profil, 1)
  on conflict (jour, onglet, profil) do update set nb = public.visites.nb + 1;
end $$;
revoke all on function public.compter_visite(text, text) from public;
grant execute on function public.compter_visite(text, text) to anon, authenticated;

-- Vérification : la table existe et est vide (ou contient déjà des compteurs)
select count(*) as lignes, coalesce(sum(nb), 0) as ouvertures from public.visites;
