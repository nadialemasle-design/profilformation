-- =====================================================================
-- Mise à jour n°9 du 30/10/2026 : gestion des comptes conseillères depuis l'onglet Gestion › Conseillères
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne change rien de plus.
-- À lancer après la n°7 (qui crée la table des conseillères).
-- =====================================================================
-- Les éditrices voient, ajoutent et retirent les adresses des conseillères
drop policy if exists "editeurs gerent conseilleres" on public.conseilleres;
create policy "editeurs gerent conseilleres" on public.conseilleres for all to authenticated using (public.est_editeur()) with check (public.est_editeur());
grant select, insert, delete on public.conseilleres to authenticated;

-- Adresses toujours enregistrées en minuscules
create or replace function public.conseillere_minuscules() returns trigger language plpgsql as $$
begin new.email := lower(trim(new.email)); return new; end $$;
drop trigger if exists conseillere_minuscules on public.conseilleres;
create trigger conseillere_minuscules before insert or update on public.conseilleres for each row execute function public.conseillere_minuscules();

-- Vérification : nombre de conseillères autorisées
select count(*) as conseilleres from public.conseilleres;
