-- =====================================================================
-- Mise à jour n°7 du 30/10/2026 : questionnaires de positionnement et comptes « conseillère »
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne crée pas de doublon.
-- Les liens des questionnaires quittent la table publique « formations » pour une table protégée :
-- ils ne sont visibles qu'après connexion (éditrices et conseillères).
-- =====================================================================
-- 1. Structure
-- Conseillères : peuvent se connecter pour voir les liens des questionnaires (sans pouvoir modifier)
create table if not exists public.conseilleres (email text primary key);
alter table public.conseilleres enable row level security;
drop policy if exists "conseillere se reconnait" on public.conseilleres;
create policy "conseillere se reconnait" on public.conseilleres for select to authenticated using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));
grant select on public.conseilleres to authenticated;

create or replace function public.est_lecteur() returns boolean
language sql stable security definer set search_path = public as $$
  select public.est_editeur() or exists (select 1 from public.conseilleres c where lower(c.email) = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;
revoke all on function public.est_lecteur() from public;
grant execute on function public.est_lecteur() to authenticated;

-- Liens et documents des questionnaires de positionnement : PAS de lecture publique
create table if not exists public.questionnaires (id text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
alter table public.questionnaires enable row level security;
revoke all on public.questionnaires from anon;
drop policy if exists "lecture conseilleres" on public.questionnaires;
create policy "lecture conseilleres" on public.questionnaires for select to authenticated using (public.est_lecteur());
drop policy if exists "ecriture editeurs" on public.questionnaires;
create policy "ecriture editeurs" on public.questionnaires for all to authenticated using (public.est_editeur()) with check (public.est_editeur());
grant select, insert, update, delete on public.questionnaires to authenticated;

-- Espace privé pour les documents déposés (PDF, Excel…) : lecture réservée aux personnes autorisées
insert into storage.buckets (id, name, public) values ('questionnaires', 'questionnaires', false) on conflict (id) do update set public = false;
drop policy if exists "questionnaires lecture" on storage.objects;
create policy "questionnaires lecture" on storage.objects for select to authenticated using (bucket_id = 'questionnaires' and public.est_lecteur());
drop policy if exists "questionnaires depot" on storage.objects;
create policy "questionnaires depot" on storage.objects for insert to authenticated with check (bucket_id = 'questionnaires' and public.est_editeur());
drop policy if exists "questionnaires modif" on storage.objects;
create policy "questionnaires modif" on storage.objects for update to authenticated using (bucket_id = 'questionnaires' and public.est_editeur());
drop policy if exists "questionnaires suppr" on storage.objects;
create policy "questionnaires suppr" on storage.objects for delete to authenticated using (bucket_id = 'questionnaires' and public.est_editeur());

-- 2. Les liens existants passent dans la table protégée (un lien déjà présent n'est pas remplacé)
insert into public.questionnaires (id, data)
select f.id || '__' || regexp_replace(m.e->>'code', '[^A-Za-z0-9_-]', '_', 'g'), jsonb_build_object('lien', m.e->>'positionnementLien')
from public.formations f, jsonb_array_elements(f.data->'modules') as m(e)
where coalesce(m.e->>'positionnementLien', '') <> ''
on conflict (id) do nothing;

-- 3. Dans les formations : case « questionnaire » cochée, type « Formulaire en ligne » par défaut, lien public retiré
update public.formations f set data = jsonb_set(f.data, '{modules}', (
    select jsonb_agg(case when coalesce(e->>'positionnement', '') <> '' or coalesce(e->>'positionnementLien', '') <> ''
                          then (e - 'positionnementLien') || jsonb_build_object('questionnaire', true, 'questionnaireType', coalesce(nullif(e->>'questionnaireType', ''), 'Formulaire en ligne'))
                          else e end order by o)
    from jsonb_array_elements(f.data->'modules') with ordinality as t(e, o))), updated_at = now()
where exists (select 1 from jsonb_array_elements(f.data->'modules') as x(e) where x.e ? 'positionnementLien' or (coalesce(x.e->>'positionnement', '') <> '' and not (x.e ? 'questionnaire')));

-- 4. Nouveaux questionnaires : Excel (formulaire Excel), AutoCAD, SketchUp Pro, SolidWorks (formulaire PDF), IA formation M2
update public.formations f set data = jsonb_set(f.data, '{modules}', (
    select jsonb_agg(case when e->>'code' = n.code and not coalesce((e->>'questionnaire')::boolean, false)
                          then e || jsonb_build_object('questionnaire', true, 'positionnement', coalesce(nullif(e->>'positionnement', ''), n.nom), 'questionnaireType', n.typ)
                          else e end order by o)
    from jsonb_array_elements(f.data->'modules') with ordinality as t(e, o))), updated_at = now()
from (values
  ('bur-excel-power', 'Formation', 'Questionnaire de positionnement Excel', 'Formulaire Excel'),
  ('bur-vba', 'Formation', 'Questionnaire de positionnement Excel', 'Formulaire Excel'),
  ('cao-autocad', 'Formation', 'Questionnaire de positionnement AutoCAD', 'Formulaire PDF'),
  ('cao-sketchup', 'Formation', 'Questionnaire de positionnement SketchUp Pro', 'Formulaire PDF'),
  ('cao-solidworks', 'Formation', 'Questionnaire de positionnement SolidWorks', 'Formulaire PDF'),
  ('ia-form', 'M2', 'Questionnaire de positionnement IA générative niveau 2', 'Formulaire en ligne')
) as n(id, code, nom, typ)
where f.id = n.id;
insert into public.questionnaires (id, data) select 'ia-form__M2', data from public.questionnaires where id = 'ia-admin__M2' on conflict (id) do nothing;

-- Vérification : nombre de modules avec questionnaire, liens restés publics (doit être 0), liens protégés
select (select count(*) from public.formations f, jsonb_array_elements(f.data->'modules') e where (e->>'questionnaire')::boolean) as modules_avec_questionnaire,
       (select count(*) from public.formations f, jsonb_array_elements(f.data->'modules') e where e ? 'positionnementLien') as liens_encore_publics,
       (select count(*) from public.questionnaires) as liens_proteges;
