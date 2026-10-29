-- =====================================================================
-- Mise à jour n°6 du 29/10/2026 : les catégories de profils deviennent 13 « familles de métiers » communes à tous les domaines
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne change rien de plus.
-- Les sous-profils que vous avez créés vous-même dans Gestion gardent leur catégorie : elle reste affichée.
-- =====================================================================
-- 1. Chaque sous-profil reçoit sa famille ; le secteur ou le statut de l'ancienne catégorie s'ajoute à ses mots-clés (sans doublon)
update public.profils p set data = p.data || jsonb_build_object(
    'categorie', m.fam,
    'categories', jsonb_build_array(m.fam),
    'motsCles', coalesce((select concat_ws(', ', nullif(p.data->>'motsCles', ''), string_agg(w, ', '))
                            from unnest(string_to_array(m.ajout, ', ')) as w
                           where m.ajout <> '' and position(lower(w) in lower(coalesce(p.data->>'motsCles', ''))) = 0),
                         p.data->>'motsCles', '')),
  updated_at = now()
from (values
  ('bur-001', 'Comptabilité', 'management, pilotage'),
  ('bur-002', 'Administratif et commercial', ''),
  ('bur-003', 'Administratif et commercial', 'ressources humaines'),
  ('cao-001', 'Technique', 'aménagement'),
  ('cao-002', 'Technique', 'bâtiment'),
  ('cao-003', 'Technique', ''),
  ('cao-004', 'Technique', 'commerce, artisanat'),
  ('cao-005', 'Emploi et transition', ''),
  ('col-001', 'Administratif et commercial', 'entreprise, association'),
  ('col-002', 'Dirigeants et indépendants', 'créatif'),
  ('col-003', 'Administratif et commercial', 'gestion, management, pilotage'),
  ('col-004', 'Administratif et commercial', 'entreprise'),
  ('com-001', 'Commerce, artisanat, tourisme', 'commerce, artisanat'),
  ('com-002', 'Communication et marketing', ''),
  ('com-003', 'Communication et marketing', 'entreprise'),
  ('com-004', 'Communication et marketing', ''),
  ('ia-001', 'Administratif et commercial', ''),
  ('ia-002', 'Administratif et commercial', ''),
  ('ia-003', 'Accueil et relation client', ''),
  ('ia-004', 'Dirigeants et indépendants', 'dirigeant'),
  ('ia-005', 'Dirigeants et indépendants', 'indépendant, commerce, artisanat'),
  ('ia-006', 'Formation', ''),
  ('ia-007', 'Formation', ''),
  ('ia-008', 'Formation', ''),
  ('ia-010', 'Formation', ''),
  ('ia-011', 'Ressources humaines', ''),
  ('ia-012', 'Ressources humaines', ''),
  ('ia-013', 'Ressources humaines', ''),
  ('ia-014', 'Ressources humaines', ''),
  ('ia-015', 'Ressources humaines', 'gestion, pilotage'),
  ('ia-016', 'Emploi et transition', ''),
  ('ia-017', 'Comptabilité', ''),
  ('ia-018', 'Administratif et commercial', 'santé, social'),
  ('ia-019', 'Administratif et commercial', ''),
  ('ia-020', 'Ressources humaines', ''),
  ('ia-021', 'Administratif et commercial', ''),
  ('ia-022', 'Accueil et relation client', ''),
  ('ia-023', 'Formation', ''),
  ('ia-024', 'Santé et social', 'formation'),
  ('ia-025', 'Commerce, artisanat, tourisme', 'dirigeant, indépendant'),
  ('pao-001', 'Communication et marketing', ''),
  ('pao-002', 'Création et contenus', 'indépendant, créatif'),
  ('pao-003', 'Commerce, artisanat, tourisme', 'commerce, artisanat'),
  ('pao-004', 'Emploi et transition', ''),
  ('pao-005', 'Communication et marketing', 'entreprise'),
  ('paoia-001', 'Création et contenus', ''),
  ('paoia-002', 'Communication et marketing', ''),
  ('paoia-003', 'Création et contenus', 'indépendant'),
  ('ped-001', 'Formation', ''),
  ('ped-002', 'Formation', ''),
  ('ped-003', 'Formation', ''),
  ('ped-004', 'Communication et marketing', ''),
  ('prj-001', 'Gestion et management', ''),
  ('prj-002', 'Gestion et management', ''),
  ('prj-003', 'Technique', 'bâtiment, industrie, gestion, management, pilotage'),
  ('prj-004', 'Gestion et management', 'entreprise'),
  ('rs-001', 'Dirigeants et indépendants', 'indépendant'),
  ('rs-002', 'Commerce, artisanat, tourisme', 'indépendant, auto-entrepreneur'),
  ('rs-003', 'Dirigeants et indépendants', 'indépendant, auto-entrepreneur'),
  ('rs-004', 'Santé et social', 'indépendant, auto-entrepreneur, dirigeant'),
  ('rs-005', 'Dirigeants et indépendants', 'indépendant, auto-entrepreneur'),
  ('rs-006', 'Commerce, artisanat, tourisme', 'commerce, artisanat'),
  ('rs-007', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-008', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-009', 'Commerce, artisanat, tourisme', 'artisanat, tourisme'),
  ('rs-010', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-011', 'Communication et marketing', 'association'),
  ('rs-012', 'Communication et marketing', 'entreprise, association'),
  ('rs-013', 'Dirigeants et indépendants', 'association'),
  ('rs-014', 'Administratif et commercial', 'entreprise, association'),
  ('rs-015', 'Ressources humaines', 'entreprise, association'),
  ('rs-016', 'Communication et marketing', 'entreprise'),
  ('rs-017', 'Emploi et transition', ''),
  ('rs-018', 'Administratif et commercial', 'indépendant, auto-entrepreneur, dirigeant'),
  ('rs-019', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-020', 'Création et contenus', 'indépendant, auto-entrepreneur'),
  ('rs-021', 'Dirigeants et indépendants', 'indépendant, auto-entrepreneur'),
  ('rs-022', 'Création et contenus', 'indépendant, auto-entrepreneur'),
  ('rs-023', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-024', 'Commerce, artisanat, tourisme', 'commerce, artisanat, tourisme'),
  ('rs-025', 'Communication et marketing', 'entreprise, association'),
  ('rs-026', 'Gestion et management', 'association'),
  ('rs-027', 'Création et contenus', 'indépendant, auto-entrepreneur'),
  ('rs-028', 'Emploi et transition', ''),
  ('video-001', 'Communication et marketing', ''),
  ('video-002', 'Formation', ''),
  ('video-003', 'Commerce, artisanat, tourisme', 'commerce, artisanat'),
  ('video-004', 'Création et contenus', 'indépendant, créatif'),
  ('web-001', 'Dirigeants et indépendants', 'indépendant, créatif'),
  ('web-002', 'Communication et marketing', ''),
  ('web-003', 'Commerce, artisanat, tourisme', 'artisanat'),
  ('web-004', 'Création et contenus', 'indépendant, créatif'),
  ('ia-030', 'Communication et marketing', ''),
  ('ia-031', 'Création et contenus', ''),
  ('ia-032', 'Communication et marketing', ''),
  ('pao-006', 'Création et contenus', ''),
  ('bur-004', 'Gestion et management', 'logistique, achats'),
  ('bur-005', 'Gestion et management', 'gestion, finance'),
  ('video-005', 'Administratif et commercial', ''),
  ('cao-006', 'Technique', 'bâtiment'),
  ('col-005', 'Administratif et commercial', 'entreprise, association'),
  ('web-005', 'Communication et marketing', 'entreprise'),
  ('com-005', 'Administratif et commercial', 'commerce, artisanat')
) as m(id, fam, ajout)
where p.id = m.id;

-- 2. Chaque domaine : liste ordonnée des familles (plus les catégories encore utilisées par vos propres sous-profils),
--    mots-clés des familles ; les mots-clés des anciennes catégories sont retirés
update public.domaines d set data = jsonb_set(jsonb_set(d.data, '{categories}',
    (select jsonb_agg(c order by o) from (
       select c, min(o) as o from (
         select e.value as c, e.ordinality as o from jsonb_array_elements_text(m.cats::jsonb) with ordinality as e
         union all
         select x.c, 1000 from public.profils p,
                jsonb_array_elements_text(coalesce(p.data->'categories', jsonb_build_array(p.data->>'categorie'))) as x(c)
          where p.data->>'domaine' = d.id and coalesce(x.c, '') <> ''
       ) t group by c) u)),
    '{motsClesCategories}', (coalesce(d.data->'motsClesCategories', '{}'::jsonb) - m.anciennes) || m.mc::jsonb),
  updated_at = now()
from (values
  ('ia', $j$["Administratif et commercial", "Accueil et relation client", "Ressources humaines", "Comptabilité", "Communication et marketing", "Création et contenus", "Formation", "Santé et social", "Dirigeants et indépendants", "Commerce, artisanat, tourisme", "Emploi et transition"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative", "Accueil et relation client": "accueil, relation client, service client, ADV, SAV, standard, clientèle", "Ressources humaines": "RH, ressources humaines, recrutement, paie, administration du personnel, GPEC, formation, manager", "Comptabilité": "comptabilité, comptable, finance, chiffres, contrôle de gestion, cabinet comptable", "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant", "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi", "Santé et social": "santé, social, médical, bien-être, insertion, accompagnement", "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce", "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant"}$j$, array['Communication, web et création','Fonctions administratives et commerciales','Formation et enseignement']::text[]),
  ('rs', $j$["Administratif et commercial", "Ressources humaines", "Gestion et management", "Communication et marketing", "Création et contenus", "Santé et social", "Dirigeants et indépendants", "Commerce, artisanat, tourisme", "Emploi et transition"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative", "Ressources humaines": "RH, ressources humaines, recrutement, paie, administration du personnel, GPEC", "Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation", "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant", "Santé et social": "santé, social, médical, bien-être, insertion, accompagnement", "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, restaurant, clientèle locale, Google Business Profile", "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, jeune diplômé, LinkedIn, recruteurs"}$j$, array['Entreprises et associations','Indépendants et auto-entrepreneurs']::text[]),
  ('pao', $j$["Communication et marketing", "Création et contenus", "Commerce, artisanat, tourisme", "Emploi et transition"]$j$, $j${"Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, association, petite structure, logiciel gratuit, sans budget", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, photographe, vidéaste, retouche photo", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, photos produits", "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, graphisme, infographie, certification Tosa"}$j$, array['Commerce et artisanat','Entreprises et associations','Indépendants et créatifs']::text[]),
  ('paoia', $j$["Communication et marketing", "Création et contenus"]$j$, $j${"Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, créateur de contenu, auto-entrepreneur créatif, illustrations, IA"}$j$, array['Indépendants et créatifs']::text[]),
  ('video', $j$["Administratif et commercial", "Communication et marketing", "Création et contenus", "Formation", "Commerce, artisanat, tourisme"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative", "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, vidéaste, créateur de contenu, YouTube, montage", "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi, vidéo pédagogique, e-learning, avatar IA", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, vidéos produits, TPE, présentation d'entreprise"}$j$, array['Commerce et artisanat','Indépendants et créatifs']::text[]),
  ('com', $j$["Administratif et commercial", "Communication et marketing", "Commerce, artisanat, tourisme"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative", "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, visuels, charte graphique, Canva Pro, association, bénévole, affiches, événements", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce"}$j$, array['Commerce et artisanat','Entreprises et associations']::text[]),
  ('web', $j$["Communication et marketing", "Création et contenus", "Dirigeants et indépendants", "Commerce, artisanat, tourisme"]$j$, $j${"Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, webmaster, référencement, SEO, GEO, contenus web, association, collectivité, mairie, site institutionnel, WordPress", "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant", "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance", "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, boutique en ligne, trafic, référencement"}$j$, array['Commerce et artisanat','Entreprises et associations','Indépendants et créatifs']::text[]),
  ('cao', $j$["Technique", "Emploi et transition"]$j$, $j${"Technique": "technique, bâtiment, BTP, industrie, bureau d'études, chantier, architecture, aménagement intérieur et extérieur, paysage, plans, 3D, mécanique, conception de pièces, artisan, menuiserie, métallerie, fabrication", "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, dessin technique, certification ICDL"}$j$, array['Bâtiment et aménagement','Commerce et artisanat','Industrie']::text[]),
  ('bur', $j$["Administratif et commercial", "Comptabilité", "Gestion et management"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative, gestion, tableaux répétitifs, reporting, RH, paie, indicateurs", "Comptabilité": "comptabilité, comptable, finance, chiffres, contrôle de gestion, cabinet comptable", "Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation, logistique, stocks, achats, approvisionnement, ERP, extractions"}$j$, array['Fonctions administratives','Fonctions commerciales et RH','Gestion et finance','Logistique et achats']::text[]),
  ('col', $j$["Administratif et commercial", "Dirigeants et indépendants"]$j$, $j${"Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative, équipe, TPE, association, travail collaboratif, télétravail, mobilité, office manager, organisation, gestion de l'information", "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance, organisation personnelle"}$j$, array['Entreprises et associations','Fonctions administratives','Indépendants et créatifs']::text[]),
  ('prj', $j$["Gestion et management", "Technique"]$j$, $j${"Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation, planning, chef de projet, équipe, priorités, agilité, association, collectivité, chargé de mission, partenaires", "Technique": "technique, bâtiment, BTP, industrie, bureau d'études, chantier, production, délais"}$j$, array['Bâtiment et industrie','Entreprises et associations','Gestion de projet','Management']::text[]),
  ('ped', $j$["Communication et marketing", "Formation"]$j$, $j${"Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, présentations interactives, infographies", "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi, e-learning, interactivité, Genially"}$j$, array[]::text[])
) as m(id, cats, mc, anciennes)
where d.id = m.id;

-- Vérification : une ligne par famille, avec son nombre de sous-profils (103 en tout pour les sous-profils d'origine)
select data->>'categorie' as famille, count(*) as sous_profils from public.profils group by 1 order by 2 desc;
