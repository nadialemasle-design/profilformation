-- =====================================================================
-- Mise à jour n°13 du 09/11/2026 : Réseaux sociaux, CPF à partir de 3 jours (au lieu de 2)
--   - chaque parcours Réseaux sociaux : champ « CPF à partir de (jours) » = 3
--   - mention CPF des modules : « … 2 jours minimum » devient « … 3 jours minimum »
--   - texte « Financement » du domaine Réseaux sociaux : « à partir de 2 jours » devient « à partir de 3 jours »
-- À coller dans Supabase › SQL Editor › New query, puis « Run » (sans rien sélectionner).
-- Ne touche à rien d'autre (tarifs, dates, textes…). Le relancer ne change rien.
-- =====================================================================

-- 1. Parcours Réseaux sociaux : minimum de 3 jours + mentions CPF des modules
update public.formations f set data = jsonb_set(f.data, '{modules}', (
    select jsonb_agg(case when m ? 'cpf' then jsonb_set(m, '{cpf}', to_jsonb(regexp_replace(m->>'cpf', '\m2 jours minimum', '3 jours minimum', 'g'))) else m end order by o)
    from jsonb_array_elements(f.data->'modules') with ordinality as t(m, o)))
  || jsonb_build_object('cpfMinJours', 3),
  updated_at = now()
where f.data->>'domaine' = 'rs'
  and jsonb_array_length(coalesce(f.data->'modules', '[]'::jsonb)) > 0
  and exists (select 1 from jsonb_array_elements(f.data->'modules') m where m->>'cpf' ~* 'jours? minimum')
  and (coalesce(f.data->>'cpfMinJours', '') <> '3'
       or exists (select 1 from jsonb_array_elements(f.data->'modules') m where m->>'cpf' ~ '\m2 jours minimum'));

-- 2. Texte « Financement » du domaine
update public.domaines d set data = jsonb_set(d.data, '{financement}', to_jsonb(regexp_replace(d.data->>'financement', 'à partir de 2 jours', 'à partir de 3 jours', 'g'))),
  updated_at = now()
where d.id = 'rs' and d.data->>'financement' ~ 'à partir de 2 jours';

-- Vérification
select id, data->>'nom' as formation, data->>'cpfMinJours' as cpf_des_jours,
       (select string_agg(distinct m->>'cpf', ' | ') from jsonb_array_elements(data->'modules') m) as mentions_cpf
from public.formations where data->>'domaine' = 'rs' order by id;
select data->>'financement' as financement_reseaux_sociaux from public.domaines where id = 'rs';
