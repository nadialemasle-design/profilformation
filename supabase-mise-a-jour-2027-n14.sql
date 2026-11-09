-- =====================================================================
-- Mise à jour n°14 du 09/11/2026 : correction des mentions CPF saisies sous forme de simple nombre
--   Exemple : « Éligibilité CPF » = « 4 » sur le M3 du Parcours IA Administratif & commercial,
--   ce qui rendait le module non éligible et faisait passer tout le parcours hors CPF.
--   Un nombre seul N devient « Oui, dans un parcours de N jours minimum », et le champ
--   « CPF à partir de (jours) » de la formation est réglé sur N s'il était vide.
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Ne touche à rien d'autre. Le relancer ne change rien.
-- =====================================================================
update public.formations f set data = jsonb_set(f.data, '{modules}', (
    select jsonb_agg(case when m->>'cpf' ~ '^\s*\d+\s*(j|jours?)?\s*$'
                          then jsonb_set(m, '{cpf}', to_jsonb('Oui, dans un parcours de ' || (substring(m->>'cpf' from '\d+'))::int || ' jours minimum'))
                          else m end order by o)
    from jsonb_array_elements(f.data->'modules') with ordinality as t(m, o)))
  || case when coalesce(f.data->>'cpfMinJours', '') = '' then jsonb_build_object('cpfMinJours', (
        select max((substring(m->>'cpf' from '\d+'))::int) from jsonb_array_elements(f.data->'modules') m where m->>'cpf' ~ '^\s*\d+\s*(j|jours?)?\s*$'))
     else '{}'::jsonb end,
  updated_at = now()
where exists (select 1 from jsonb_array_elements(coalesce(f.data->'modules', '[]'::jsonb)) m where m->>'cpf' ~ '^\s*\d+\s*(j|jours?)?\s*$');

-- Vérification : il ne doit plus y avoir de mention CPF réduite à un nombre
select f.id, f.data->>'nom' as formation, m->>'code' as module, m->>'cpf' as mention_cpf, f.data->>'cpfMinJours' as cpf_des_jours
from public.formations f, jsonb_array_elements(f.data->'modules') m
where f.id = 'ia-admin' or m->>'cpf' ~ '^\s*\d+' order by 1, 3;
