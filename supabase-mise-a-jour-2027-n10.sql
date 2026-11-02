-- =====================================================================
-- Mise à jour n°10 du 02/11/2026 : 6 parcours PAO (5 certifiants Tosa + 1 non certifiant)
--   - De Photoshop à l'IA · Photoshop et InDesign · Photoshop et Illustrator
--   - Prise de vue et retouche photo · Photo Pro · Création visuelle et IA (PAO & IA)
--   Chaque module est copié depuis la formation seule correspondante (titre, lien, dates, tarif,
--   questionnaire) telle qu'elle est AUJOURD'HUI dans votre base ; prix « en parcours » et CPF selon le tableau.
--   Seul le module certifiant passe en dossier CPF (+ certification Tosa 89 €).
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Ne supprime rien ;
-- un parcours qui existe déjà n'est pas modifié, donc le relancer ne change rien.
-- =====================================================================
insert into public.formations (id, data)
select 'pao-p-ia', $j${"domaine": "pao", "nom": "Parcours PAO : de Photoshop à l'IA", "intitule": "De Photoshop à l'IA : révolutionnez vos créations graphiques et supports de communication", "duree": "5 jours", "ordre": 8, "certification": "Tosa Photoshop RS6959", "tarifCertification": 89}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 800, 'cpf', $j$Oui (certification Tosa Photoshop RS6959)$j$) from public.formations s where s.id = 'pao-photoshop-init'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 700, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'paoia-adobe')))
where exists (select 1 from public.formations where id = 'pao-photoshop-init') and exists (select 1 from public.formations where id = 'paoia-adobe')
on conflict (id) do nothing;
insert into public.formations (id, data)
select 'pao-p-indesign', $j${"domaine": "pao", "nom": "Parcours PAO : Photoshop et InDesign", "intitule": "Maîtrisez Photoshop et InDesign : créez vos publications, catalogues et supports de communication de A à Z", "duree": "6 jours", "ordre": 9, "certification": "Tosa InDesign RS6957", "tarifCertification": 89}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 800, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'pao-photoshop-init'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 800, 'cpf', $j$Oui (certification Tosa InDesign RS6957)$j$) from public.formations s where s.id = 'pao-indesign')))
where exists (select 1 from public.formations where id = 'pao-indesign') and exists (select 1 from public.formations where id = 'pao-photoshop-init')
on conflict (id) do nothing;
insert into public.formations (id, data)
select 'pao-p-illustrator', $j${"domaine": "pao", "nom": "Parcours PAO : Photoshop et Illustrator", "intitule": "Concevez vos visuels print et digitaux de A à Z avec Photoshop et Illustrator", "duree": "6 jours", "ordre": 10, "certification": "Tosa Illustrator RS6956", "tarifCertification": 89}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 800, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'pao-photoshop-init'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 800, 'cpf', $j$Oui (certification Tosa Illustrator RS6956)$j$) from public.formations s where s.id = 'pao-illustrator')))
where exists (select 1 from public.formations where id = 'pao-illustrator') and exists (select 1 from public.formations where id = 'pao-photoshop-init')
on conflict (id) do nothing;
insert into public.formations (id, data)
select 'pao-p-photo', $j${"domaine": "pao", "nom": "Parcours prise de vue et retouche photo", "intitule": "Prise de vue et Photoshop : capturez et valorisez vos photos avec Photoshop", "duree": "5 jours", "ordre": 11, "certification": "Tosa Photoshop RS6959", "tarifCertification": 89}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 700, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'pao-prise-vue'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 800, 'cpf', $j$Oui (certification Tosa Photoshop RS6959)$j$) from public.formations s where s.id = 'pao-photoshop-init')))
where exists (select 1 from public.formations where id = 'pao-photoshop-init') and exists (select 1 from public.formations where id = 'pao-prise-vue')
on conflict (id) do nothing;
insert into public.formations (id, data)
select 'pao-p-photopro', $j${"domaine": "pao", "nom": "Parcours Photo Pro", "intitule": "Prise de vue, Lightroom, Photoshop : maîtrisez la chaîne complète, de l'appareil à l'image finalisée", "duree": "6 jours", "ordre": 12, "certification": "Tosa Photoshop RS6959", "tarifCertification": 89}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 700, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'pao-prise-vue'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 350, 'cpf', $j$Non (hors dossier CPF dans ce parcours)$j$) from public.formations s where s.id = 'pao-lightroom'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M3', 'tarifParcours', 800, 'cpf', $j$Oui (certification Tosa Photoshop RS6959)$j$) from public.formations s where s.id = 'pao-photoshop-init')))
where exists (select 1 from public.formations where id = 'pao-lightroom') and exists (select 1 from public.formations where id = 'pao-photoshop-init') and exists (select 1 from public.formations where id = 'pao-prise-vue')
on conflict (id) do nothing;
insert into public.formations (id, data)
select 'paoia-p-creation', $j${"domaine": "paoia", "nom": "Parcours création visuelle et IA", "intitule": "Création visuelle et IA : propulsez votre productivité avec Adobe et les solutions leaders", "duree": "4 jours", "ordre": 3}$j$::jsonb || jsonb_build_object('modules', jsonb_build_array(
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M1', 'tarifParcours', 700, 'cpf', $j$Non (parcours non certifiant)$j$) from public.formations s where s.id = 'paoia-adobe'),
      (select (s.data->'modules'->0) || jsonb_build_object('code', 'M2', 'tarifParcours', 800, 'cpf', $j$Non (parcours non certifiant)$j$) from public.formations s where s.id = 'paoia-design')))
where exists (select 1 from public.formations where id = 'paoia-adobe') and exists (select 1 from public.formations where id = 'paoia-design')
on conflict (id) do nothing;

-- lignes de modules M1, M2, M3 des domaines PAO et PAO & IA
update public.domaines d set data = jsonb_set(d.data, '{ordreModules}',
    coalesce(d.data->'ordreModules', '[]'::jsonb) || coalesce((select jsonb_agg(c) from jsonb_array_elements_text(v.codes) c
      where not coalesce(d.data->'ordreModules', '[]'::jsonb) ? c), '[]'::jsonb)), updated_at = now()
from (values ('pao', '["M1","M2","M3"]'::jsonb), ('paoia', '["M1","M2"]'::jsonb)) as v(id, codes)
where d.id = v.id;

-- questionnaire de positionnement : le M2 « IA design graphique » du parcours reprend celui de la formation seule
insert into public.questionnaires (id, data)
select 'paoia-p-creation__M2', data from public.questionnaires where id = 'paoia-design__Formation'
on conflict (id) do nothing;

-- Vérification : 6 parcours créés, et leur nombre de modules
select id, data->>'nom' as parcours, jsonb_array_length(data->'modules') as modules
from public.formations where id in ('pao-p-ia', 'pao-p-indesign', 'pao-p-illustrator', 'pao-p-photo', 'pao-p-photopro', 'paoia-p-creation') order by id;
