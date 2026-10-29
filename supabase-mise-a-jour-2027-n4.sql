-- =====================================================================
-- Mise à jour n°4 du 29/10/2026 : Excel macro VBA = 3 jours, tarif 1 290 €
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne casse rien.
-- =====================================================================
update public.formations f
set data = jsonb_set(f.data || '{"duree":"3 jours"}'::jsonb, '{modules}',
  (select jsonb_agg(case when m->>'code' = 'Formation' then (m - 'tarifParcours') || '{"tarif":1290}'::jsonb else m end order by o)
   from jsonb_array_elements(f.data->'modules') with ordinality as t(m, o))),
  updated_at = now()
where id = 'bur-vba';

-- Vérification : doit afficher 1290
select m->>'tarif' as tarif_vba from public.formations, jsonb_array_elements(data->'modules') m where id = 'bur-vba';
