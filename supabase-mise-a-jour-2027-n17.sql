-- =====================================================================
-- Mise à jour n°17 du 21/11/2026 : encadré « Certification » des modules IA
--   Pour tous les modules des parcours IA (domaine ia) qui n'ont pas encore de conditions :
--   case CPF cochée + texte des conditions (CPF sur parcours de 4 jours minimum, épreuves de certification).
--   Les modules où vous avez déjà saisi des conditions ne sont pas modifiés.
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne change rien.
-- =====================================================================
update public.formations f
set data = jsonb_set(f.data, '{modules}', (
      select jsonb_agg(case when coalesce(m->>'financementTexte', '') <> '' then m
                            else m || jsonb_build_object('financements', jsonb_build_array('cpf'), 'financementTexte', $t$CPF uniquement sur un parcours de 4 jours minimum.
A l'issue du parcours le passage à la certification : 
-  Une épreuve écrite (2 h), date à déterminer ensemble : vous traitez une étude de cas professionnelle à l'aide d'outils d'IA générative. 
- Un oral (30 min), en présentiel ou à distance : vous présentez votre travail pendant 10 à 15 min (contexte, objectifs, choix effectués), puis vous échangez 15 à 20 min avec le jury$t$) end
             order by o)
      from jsonb_array_elements(f.data->'modules') with ordinality t(m, o))),
    updated_at = now()
where f.data->>'domaine' = 'ia'
  and jsonb_typeof(f.data->'modules') = 'array'
  and exists (select 1 from jsonb_array_elements(f.data->'modules') m where coalesce(m->>'financementTexte', '') = '');

-- Vérification : chaque parcours IA et ses modules avec conditions
select id, data->>'nom' as parcours,
       (select string_agg(m->>'code' || case when coalesce(m->>'financementTexte','') <> '' then ' ✓' else ' ✗' end, ', ') from jsonb_array_elements(data->'modules') m) as modules
from public.formations where data->>'domaine' = 'ia' order by id;
