/* =====================================================================
   CONTENU DE L'APPLICATION — le seul fichier à modifier (voir README.md).
   - domaines   : nom, financement, certification, ordre des lignes de modules
   - formations : parcours ou formations d'un domaine, avec durée, certification
                  et modules (code, titre, lien vers la fiche CCI)
   - profils    : profils types d'un domaine, leurs parcours possibles
                  (du plus adapté au moins adapté) et leurs formations complémentaires
   Copie de la base au 29/10/2026 (dates 2027, tarifs, positionnement et CPF ajoutés).
   ===================================================================== */
window.CONTENU = {
  "domaines": [
    {
      "id": "ia",
      "certification": "RS7232 CCI France : écrit de 2 h, puis oral de 30 min devant jury.",
      "financement": "Financement possible à partir de 4 jours de formation : le parcours complet est obligatoire.",
      "nom": "Intelligence artificielle",
      "ordre": 1,
      "ordreModules": [
        "M1",
        "M2",
        "M3"
      ],
      "categories": [
        "Administratif et commercial",
        "Accueil et relation client",
        "Ressources humaines",
        "Comptabilité",
        "Communication et marketing",
        "Création et contenus",
        "Formation",
        "Santé et social",
        "Dirigeants et indépendants",
        "Commerce, artisanat, tourisme",
        "Emploi et transition"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative",
        "Accueil et relation client": "accueil, relation client, service client, ADV, SAV, standard, clientèle",
        "Ressources humaines": "RH, ressources humaines, recrutement, paie, administration du personnel, GPEC, formation, manager",
        "Comptabilité": "comptabilité, comptable, finance, chiffres, contrôle de gestion, cabinet comptable",
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant",
        "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi",
        "Santé et social": "santé, social, médical, bien-être, insertion, accompagnement",
        "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce",
        "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant"
      }
    },
    {
      "id": "rs",
      "certification": "RS7643 Alternative digital : épreuve individuelle de 90 min, à distance sur PC.",
      "financement": "Financement possible à partir de 2 jours de formation.",
      "nom": "Réseaux sociaux",
      "ordre": 2,
      "ordreModules": [
        "M1 Socle",
        "M1 Base",
        "M2.1",
        "M2.2",
        "M2.3",
        "M3"
      ],
      "categories": [
        "Administratif et commercial",
        "Ressources humaines",
        "Gestion et management",
        "Communication et marketing",
        "Création et contenus",
        "Santé et social",
        "Dirigeants et indépendants",
        "Commerce, artisanat, tourisme",
        "Emploi et transition"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative",
        "Ressources humaines": "RH, ressources humaines, recrutement, paie, administration du personnel, GPEC",
        "Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation",
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant",
        "Santé et social": "santé, social, médical, bien-être, insertion, accompagnement",
        "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, restaurant, clientèle locale, Google Business Profile",
        "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, jeune diplômé, LinkedIn, recruteurs"
      }
    },
    {
      "id": "pao",
      "certification": "",
      "financement": "",
      "nom": "PAO (graphisme et photo)",
      "ordre": 3,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Communication et marketing",
        "Création et contenus",
        "Commerce, artisanat, tourisme",
        "Emploi et transition"
      ],
      "motsClesCategories": {
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, association, petite structure, logiciel gratuit, sans budget",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, photographe, vidéaste, retouche photo",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, photos produits",
        "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, graphisme, infographie, certification Tosa"
      }
    },
    {
      "id": "paoia",
      "certification": "",
      "financement": "",
      "nom": "PAO & IA",
      "ordre": 4,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Communication et marketing",
        "Création et contenus"
      ],
      "motsClesCategories": {
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, créateur de contenu, auto-entrepreneur créatif, illustrations, IA"
      }
    },
    {
      "id": "video",
      "certification": "",
      "financement": "",
      "nom": "Vidéo",
      "ordre": 5,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Administratif et commercial",
        "Communication et marketing",
        "Création et contenus",
        "Formation",
        "Commerce, artisanat, tourisme"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative",
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant, vidéaste, créateur de contenu, YouTube, montage",
        "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi, vidéo pédagogique, e-learning, avatar IA",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, vidéos produits, TPE, présentation d'entreprise"
      }
    },
    {
      "id": "com",
      "certification": "",
      "financement": "",
      "nom": "Communication digitale (Canva)",
      "ordre": 6,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Administratif et commercial",
        "Communication et marketing",
        "Commerce, artisanat, tourisme"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative",
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, visuels, charte graphique, Canva Pro, association, bénévole, affiches, événements",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce"
      }
    },
    {
      "id": "web",
      "certification": "",
      "financement": "",
      "nom": "Site internet & référencement",
      "ordre": 7,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Communication et marketing",
        "Création et contenus",
        "Dirigeants et indépendants",
        "Commerce, artisanat, tourisme"
      ],
      "motsClesCategories": {
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, webmaster, référencement, SEO, GEO, contenus web, association, collectivité, mairie, site institutionnel, WordPress",
        "Création et contenus": "création, créatif, graphisme, photo, vidéo, contenus, artiste, indépendant",
        "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance",
        "Commerce, artisanat, tourisme": "commerce, commerçant, artisan, artisanat, boutique, tourisme, restauration, e-commerce, boutique en ligne, trafic, référencement"
      }
    },
    {
      "id": "cao",
      "certification": "",
      "financement": "",
      "nom": "CAO-DAO",
      "ordre": 8,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Technique",
        "Emploi et transition"
      ],
      "motsClesCategories": {
        "Technique": "technique, bâtiment, BTP, industrie, bureau d'études, chantier, architecture, aménagement intérieur et extérieur, paysage, plans, 3D, mécanique, conception de pièces, artisan, menuiserie, métallerie, fabrication",
        "Emploi et transition": "demandeur d'emploi, reconversion, transition professionnelle, France Travail, CPF, étudiant, dessin technique, certification ICDL"
      }
    },
    {
      "id": "bur",
      "certification": "",
      "financement": "",
      "nom": "Bureautique (Excel)",
      "ordre": 9,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Administratif et commercial",
        "Comptabilité",
        "Gestion et management"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative, gestion, tableaux répétitifs, reporting, RH, paie, indicateurs",
        "Comptabilité": "comptabilité, comptable, finance, chiffres, contrôle de gestion, cabinet comptable",
        "Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation, logistique, stocks, achats, approvisionnement, ERP, extractions"
      }
    },
    {
      "id": "col",
      "certification": "",
      "financement": "",
      "nom": "Outils collaboratifs",
      "ordre": 10,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Administratif et commercial",
        "Dirigeants et indépendants"
      ],
      "motsClesCategories": {
        "Administratif et commercial": "administratif, assistanat, secrétariat, commercial, vente, gestion administrative, équipe, TPE, association, travail collaboratif, télétravail, mobilité, office manager, organisation, gestion de l'information",
        "Dirigeants et indépendants": "dirigeant, gérant, chef d'entreprise, TPE, PME, auto-entrepreneur, indépendant, freelance, organisation personnelle"
      }
    },
    {
      "id": "prj",
      "certification": "",
      "financement": "",
      "nom": "Gestion de projet",
      "ordre": 11,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Gestion et management",
        "Technique"
      ],
      "motsClesCategories": {
        "Gestion et management": "gestion, management, pilotage, gestion de projet, manager, organisation, planning, chef de projet, équipe, priorités, agilité, association, collectivité, chargé de mission, partenaires",
        "Technique": "technique, bâtiment, BTP, industrie, bureau d'études, chantier, production, délais"
      }
    },
    {
      "id": "ped",
      "certification": "",
      "financement": "",
      "nom": "Conception de formation",
      "ordre": 12,
      "ordreModules": [
        "Formation"
      ],
      "categories": [
        "Communication et marketing",
        "Formation"
      ],
      "motsClesCategories": {
        "Communication et marketing": "communication, marketing, web, réseaux sociaux, image de marque, contenus, présentations interactives, infographies",
        "Formation": "formation, formateur, enseignant, pédagogie, organisme de formation, Qualiopi, e-learning, interactivité, Genially"
      }
    }
  ],
  "formations": [
    {
      "id": "bur-excel-power",
      "certification": "Tosa",
      "domaine": "bur",
      "duree": "4 jours",
      "intitule": "Excel Power Tools : analysez, automatisez & visualisez vos données avec Power Query, Pivot & BI",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/analyse-de-donnees-avec-excel-power-tools-power-bi",
          "titre": "Excel Power Tools : analysez, automatisez & visualisez vos données avec Power Query, Pivot & BI",
          "sessions": [
            {
              "texte": "5-6 et 12-13 avril 2027",
              "debut": "2027-04-05",
              "fin": "2027-04-13"
            },
            {
              "texte": "15-16 juin, 1er et 2 juillet 2027",
              "debut": "2027-06-15",
              "fin": "2027-07-02"
            },
            {
              "texte": "11-12 et 18-19 octobre 2027",
              "debut": "2027-10-11",
              "fin": "2027-10-19"
            },
            {
              "texte": "15-16 et 22-23 novembre 2027",
              "debut": "2027-11-15",
              "fin": "2027-11-23"
            }
          ],
          "tarif": 1680,
          "tarifParcours": 1560,
          "cpf": "Oui (certification Tosa)",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement Excel",
          "questionnaireType": "Formulaire Excel"
        }
      ],
      "nom": "Excel Power Tools",
      "ordre": 1,
      "reference": "Bureau-XLS POWER",
      "tarifCertification": 89
    },
    {
      "id": "bur-vba",
      "certification": "Tosa",
      "domaine": "bur",
      "duree": "3 jours",
      "intitule": "Excel macro VBA - Automatiser des processus dans les applications Microsoft Office avec VBA (Tosa)",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/excel-macro-vba-automatiser-des-processus-dans-les-applications-microsoft-office-avec-vba-tosa",
          "titre": "Excel macro VBA - Automatiser des processus dans les applications Microsoft Office avec VBA (Tosa)",
          "sessions": [
            {
              "texte": "3-4 et 7 juin 2027",
              "debut": "2027-06-03",
              "fin": "2027-06-07"
            },
            {
              "texte": "4-5 et 8 novembre 2027",
              "debut": "2027-11-04",
              "fin": "2027-11-08"
            }
          ],
          "tarif": 1290,
          "cpf": "Oui (certification Tosa)",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement Excel",
          "questionnaireType": "Formulaire Excel"
        }
      ],
      "nom": "Excel macro VBA",
      "ordre": 2,
      "reference": "Bureau-XLS",
      "tarifCertification": 89
    },
    {
      "id": "cao-autocad",
      "certification": "ICDL",
      "domaine": "cao",
      "duree": "4 jours",
      "intitule": "AutoCAD LT : dessinez, cotez et mettez en page vos plans techniques 2D prêts à l'emploi",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/dao-autocad-2d-creer-et-presenter-des-plans-techniques",
          "titre": "AutoCAD LT : dessinez, cotez et mettez en page vos plans techniques 2D prêts à l'emploi",
          "sessions": [
            {
              "texte": "11-12 et 18-19 mars 2027",
              "debut": "2027-03-11",
              "fin": "2027-03-19"
            },
            {
              "texte": "3-4 et 10-11 juin 2027",
              "debut": "2027-06-03",
              "fin": "2027-06-11"
            },
            {
              "texte": "2-3 et 9-10 novembre 2027",
              "debut": "2027-11-02",
              "fin": "2027-11-10"
            }
          ],
          "tarif": 1650,
          "cpf": "Oui (certification ICDL)",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement AutoCAD",
          "questionnaireType": "Formulaire PDF"
        }
      ],
      "nom": "AutoCAD LT",
      "ordre": 1,
      "reference": "CAO 2D -AUTO",
      "tarifCertification": 120
    },
    {
      "id": "cao-sketchup",
      "certification": "ICDL",
      "domaine": "cao",
      "duree": "4 jours",
      "intitule": "SketchUp Pro initiation : concevez et modélisez vos premiers projets en 3D sans compétences techniques",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/sketchup-pro-initiation",
          "titre": "SketchUp Pro initiation : concevez et modélisez vos premiers projets en 3D sans compétences techniques",
          "sessions": [
            {
              "texte": "11-12 et 18-19 février 2027",
              "debut": "2027-02-11",
              "fin": "2027-02-19"
            },
            {
              "texte": "13-14 et 20-21 mai 2027",
              "debut": "2027-05-13",
              "fin": "2027-05-21"
            },
            {
              "texte": "30 septembre, 1er et 7-8 octobre 2027",
              "debut": "2027-09-30",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 1640,
          "cpf": "Oui (certification ICDL)",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement SketchUp Pro",
          "questionnaireType": "Formulaire PDF"
        }
      ],
      "nom": "SketchUp Pro initiation",
      "ordre": 2,
      "reference": "CAO 2 D - SKET",
      "tarifCertification": 120
    },
    {
      "id": "cao-solidworks",
      "certification": "ICDL",
      "domaine": "cao",
      "duree": "4 jours",
      "intitule": "SolidWorks - Maîtrisez la modélisation 3D avec SolidWorks : pièces, assemblages & plans techniques",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/solidworks",
          "titre": "SolidWorks - Maîtrisez la modélisation 3D avec SolidWorks : pièces, assemblages & plans techniques",
          "sessions": [
            {
              "texte": "18-19 et 25-26 janvier 2027",
              "debut": "2027-01-18",
              "fin": "2027-01-26"
            },
            {
              "texte": "24-25 et 31 mai, 1er juin 2027",
              "debut": "2027-05-24",
              "fin": "2027-06-01"
            },
            {
              "texte": "15-16 et 22-23 novembre 2027",
              "debut": "2027-11-15",
              "fin": "2027-11-23"
            }
          ],
          "tarif": 1650,
          "cpf": "Oui (certification ICDL)",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement SolidWorks",
          "questionnaireType": "Formulaire PDF"
        }
      ],
      "nom": "SolidWorks",
      "ordre": 3,
      "reference": "CAO 3D - SOLID",
      "tarifCertification": 120
    },
    {
      "id": "col-workspace",
      "certification": "Tosa",
      "domaine": "col",
      "duree": "2 jours",
      "intitule": "Google Workspace : collaborez, organisez & gagnez en productivité avec Gmail, Drive, Meet & Docs",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/google-workspace-les-outils-collaboratifs-de-google",
          "titre": "Google Workspace : collaborez, organisez & gagnez en productivité avec Gmail, Drive, Meet & Docs",
          "sessions": [
            {
              "texte": "25-26 mars 2027",
              "debut": "2027-03-25",
              "fin": "2027-03-26"
            },
            {
              "texte": "14-15 octobre 2027",
              "debut": "2027-10-14",
              "fin": "2027-10-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "Oui (certification Tosa)"
        }
      ],
      "nom": "Google Workspace",
      "ordre": 1,
      "reference": "C1-Collaboratif",
      "tarifCertification": 89
    },
    {
      "id": "col-notion",
      "certification": "Tosa",
      "domaine": "col",
      "duree": "1 jour",
      "intitule": "Organiser et centraliser son travail avec Notion - De la prise en main à un espace de travail opérationnel",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/creer-un-espace-de-travail-personnalise-et-structure-avec-notion-pour-centraliser-et-piloter-ses-donnees-professionnelles-",
          "titre": "Organiser et centraliser son travail avec Notion - De la prise en main à un espace de travail opérationnel",
          "sessions": [
            {
              "texte": "10 juin 2027",
              "debut": "2027-06-10",
              "fin": "2027-06-10"
            }
          ],
          "tarif": 390,
          "cpf": "Oui (certification Tosa)"
        }
      ],
      "nom": "Notion",
      "ordre": 2,
      "reference": "C2-Collaboratif",
      "tarifCertification": 89
    },
    {
      "id": "com-canva1",
      "certification": "Tosa (à venir)",
      "domaine": "com",
      "duree": "1 jour",
      "intitule": "Canva niveau 1 : concevez des visuels percutants pour votre communication sans compétences graphiques",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/canva-creez-des-visuels-professionnels-et-percutants",
          "titre": "Canva niveau 1 : concevez des visuels percutants pour votre communication sans compétences graphiques",
          "sessions": [
            {
              "texte": "10 mars 2027",
              "debut": "2027-03-10",
              "fin": "2027-03-10"
            },
            {
              "texte": "31 mars 2027",
              "debut": "2027-03-31",
              "fin": "2027-03-31"
            },
            {
              "texte": "12 mai 2027",
              "debut": "2027-05-12",
              "fin": "2027-05-12"
            },
            {
              "texte": "16 juin 2027",
              "debut": "2027-06-16",
              "fin": "2027-06-16"
            },
            {
              "texte": "3 novembre 2027",
              "debut": "2027-11-03",
              "fin": "2027-11-03"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "À venir (Tosa), pas encore de date officielle"
        }
      ],
      "nom": "Canva niveau 1",
      "ordre": 1,
      "reference": "Design M1",
      "tarifCertification": 89
    },
    {
      "id": "com-canva-pro",
      "certification": "Tosa (à venir)",
      "domaine": "com",
      "duree": "2 jours",
      "intitule": "Canva Pro perfectionnement : exploiter la puissance des outils : IA, charte graphique, vidéo et automatisation",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/canva-pro-perfectionnement",
          "titre": "Canva Pro perfectionnement : exploiter la puissance des outils : IA, charte graphique, vidéo et automatisation",
          "sessions": [
            {
              "texte": "16-17 mars 2027",
              "debut": "2027-03-16",
              "fin": "2027-03-17"
            },
            {
              "texte": "1er et 2 juin 2027",
              "debut": "2027-06-01",
              "fin": "2027-06-02"
            },
            {
              "texte": "19-20 octobre 2027",
              "debut": "2027-10-19",
              "fin": "2027-10-20"
            },
            {
              "texte": "23-24 novembre 2027",
              "debut": "2027-11-23",
              "fin": "2027-11-24"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "À venir (Tosa), pas encore de date officielle"
        }
      ],
      "nom": "Canva Pro perfectionnement",
      "ordre": 2,
      "reference": "Design M2",
      "tarifCertification": 89
    },
    {
      "id": "ia-admin",
      "domaine": "ia",
      "duree": "4 jours",
      "intitule": "Utilisez l'IA générative au quotidien pour gagner en efficacité professionnelle & créativité",
      "modules": [
        {
          "code": "M1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/plongez-dans-lia-generative",
          "titre": "IA générative débutant : plongez dans les outils, les méthodes et les usages professionnels",
          "sessions": [
            {
              "texte": "15 janvier 2027",
              "debut": "2027-01-15",
              "fin": "2027-01-15"
            },
            {
              "texte": "9 avril 2027",
              "debut": "2027-04-09",
              "fin": "2027-04-09"
            },
            {
              "texte": "24 juin 2027",
              "debut": "2027-06-24",
              "fin": "2027-06-24"
            },
            {
              "texte": "27 septembre 2027",
              "debut": "2027-09-27",
              "fin": "2027-09-27"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M2",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-generative-niveau-avance-usages-approfondis-prompts-avances-et-optimisation-des-pratiques-professionnelles",
          "titre": "Perfectionnement IA générative : maîtrisez les outils, affinez vos méthodes et sécurisez vos pratiques professionnelles",
          "sessions": [
            {
              "texte": "4-5 février 2027",
              "debut": "2027-02-04",
              "fin": "2027-02-05"
            },
            {
              "texte": "10-11 mai 2027",
              "debut": "2027-05-10",
              "fin": "2027-05-11"
            },
            {
              "texte": "5-6 juillet 2027",
              "debut": "2027-07-05",
              "fin": "2027-07-06"
            },
            {
              "texte": "18-19 novembre 2027",
              "debut": "2027-11-18",
              "fin": "2027-11-19"
            }
          ],
          "tarif": 820,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-intelligence-artificielle-multimedia",
          "titre": "IA multimédia : produisez vos premiers visuels et contenus audio avec l'IA générative",
          "sessions": [
            {
              "texte": "15 février 2027",
              "debut": "2027-02-15",
              "fin": "2027-02-15"
            },
            {
              "texte": "18 mai 2027",
              "debut": "2027-05-18",
              "fin": "2027-05-18"
            },
            {
              "texte": "6 décembre 2027",
              "debut": "2027-12-06",
              "fin": "2027-12-06"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Parcours IA Administratif & commercial",
      "ordre": 1,
      "tarifCertification": 330
    },
    {
      "id": "ia-form",
      "domaine": "ia",
      "duree": "4 jours",
      "intitule": "Transformez vos pratiques pédagogiques avec l'IA générative",
      "modules": [
        {
          "code": "M1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/plongez-dans-lia-generative",
          "titre": "IA générative débutant : plongez dans les outils, les méthodes et les usages professionnels",
          "sessions": [
            {
              "texte": "15 janvier 2027",
              "debut": "2027-01-15",
              "fin": "2027-01-15"
            },
            {
              "texte": "9 avril 2027",
              "debut": "2027-04-09",
              "fin": "2027-04-09"
            },
            {
              "texte": "24 juin 2027",
              "debut": "2027-06-24",
              "fin": "2027-06-24"
            },
            {
              "texte": "27 septembre 2027",
              "debut": "2027-09-27",
              "fin": "2027-09-27"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M2",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-generative-au-service-de-lenseignement-et-des-formateurs",
          "titre": "L'intelligence artificielle au service de l'enseignement et des formateurs - outils, méthodes et pratiques pédagogiques innovantes",
          "sessions": [
            {
              "texte": "25-26 janvier 2027",
              "debut": "2027-01-25",
              "fin": "2027-01-26"
            },
            {
              "texte": "11-12 octobre 2027",
              "debut": "2027-10-11",
              "fin": "2027-10-12"
            }
          ],
          "tarif": 820,
          "tarifParcours": 700,
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-intelligence-artificielle-multimedia",
          "titre": "IA multimédia : produisez vos premiers visuels et contenus audio avec l'IA générative",
          "sessions": [
            {
              "texte": "15 février 2027",
              "debut": "2027-02-15",
              "fin": "2027-02-15"
            },
            {
              "texte": "18 mai 2027",
              "debut": "2027-05-18",
              "fin": "2027-05-18"
            },
            {
              "texte": "6 décembre 2027",
              "debut": "2027-12-06",
              "fin": "2027-12-06"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Parcours IA Formation & enseignement",
      "ordre": 2,
      "tarifCertification": 330
    },
    {
      "id": "ia-rh",
      "domaine": "ia",
      "duree": "4 jours",
      "intitule": "Intégrez l'IA générative au quotidien pour gagner en efficacité, fiabilisez vos pratiques et stimulez votre créativité",
      "modules": [
        {
          "code": "M1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/plongez-dans-lia-generative",
          "titre": "IA générative débutant : plongez dans les outils, les méthodes et les usages professionnels",
          "sessions": [
            {
              "texte": "15 janvier 2027",
              "debut": "2027-01-15",
              "fin": "2027-01-15"
            },
            {
              "texte": "9 avril 2027",
              "debut": "2027-04-09",
              "fin": "2027-04-09"
            },
            {
              "texte": "24 juin 2027",
              "debut": "2027-06-24",
              "fin": "2027-06-24"
            },
            {
              "texte": "27 septembre 2027",
              "debut": "2027-09-27",
              "fin": "2027-09-27"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M2",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-perfectionnement-intelligence-artificielle-pour-les-ressources-humaines",
          "titre": "Intelligence artificielle perfectionnement pour les ressources humaines - maîtrisez les outils, affinez vos méthodes et sécurisez vos pratiques professionnelles",
          "sessions": [
            {
              "texte": "12-13 avril 2027",
              "debut": "2027-04-12",
              "fin": "2027-04-13"
            },
            {
              "texte": "29-30 novembre 2027",
              "debut": "2027-11-29",
              "fin": "2027-11-30"
            }
          ],
          "tarif": 820,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-intelligence-artificielle-multimedia",
          "titre": "IA multimédia : produisez vos premiers visuels et contenus audio avec l'IA générative",
          "sessions": [
            {
              "texte": "15 février 2027",
              "debut": "2027-02-15",
              "fin": "2027-02-15"
            },
            {
              "texte": "18 mai 2027",
              "debut": "2027-05-18",
              "fin": "2027-05-18"
            },
            {
              "texte": "6 décembre 2027",
              "debut": "2027-12-06",
              "fin": "2027-12-06"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Parcours IA Ressources humaines",
      "ordre": 3,
      "tarifCertification": 330
    },
    {
      "id": "ia-graphiste",
      "domaine": "ia",
      "nom": "Parcours IA Graphiste",
      "intitule": "Boostez la performance de vos contenus textes et visuels grâce à l'IA générative",
      "duree": "5 jours",
      "tarifCertification": 330,
      "modules": [
        {
          "code": "M1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/plongez-dans-lia-generative",
          "titre": "IA générative débutant : plongez dans les outils, les méthodes et les usages professionnels",
          "sessions": [
            {
              "texte": "15 janvier 2027",
              "debut": "2027-01-15",
              "fin": "2027-01-15"
            },
            {
              "texte": "9 avril 2027",
              "debut": "2027-04-09",
              "fin": "2027-04-09"
            },
            {
              "texte": "24 juin 2027",
              "debut": "2027-06-24",
              "fin": "2027-06-24"
            },
            {
              "texte": "27 septembre 2027",
              "debut": "2027-09-27",
              "fin": "2027-09-27"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M2",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-generative-niveau-avance-usages-approfondis-prompts-avances-et-optimisation-des-pratiques-professionnelles",
          "titre": "Perfectionnement IA générative : maîtrisez les outils, affinez vos méthodes et sécurisez vos pratiques professionnelles",
          "sessions": [
            {
              "texte": "4-5 février 2027",
              "debut": "2027-02-04",
              "fin": "2027-02-05"
            },
            {
              "texte": "10-11 mai 2027",
              "debut": "2027-05-10",
              "fin": "2027-05-11"
            },
            {
              "texte": "5-6 juillet 2027",
              "debut": "2027-07-05",
              "fin": "2027-07-06"
            },
            {
              "texte": "18-19 novembre 2027",
              "debut": "2027-11-18",
              "fin": "2027-11-19"
            }
          ],
          "tarif": 820,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/developper-sa-creativite-graphique-avec-lia-midjourney-et-ideogram",
          "titre": "IA design graphique : créez des visuels percutants grâce aux solutions IA leaders du design graphique",
          "sessions": [
            {
              "texte": "22-23 février 2027",
              "debut": "2027-02-22",
              "fin": "2027-02-23"
            },
            {
              "texte": "13-14 décembre 2027",
              "debut": "2027-12-13",
              "fin": "2027-12-14"
            }
          ],
          "tarif": 860,
          "tarifParcours": 800,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours IA de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "ordre": 5
    },
    {
      "id": "ia-webmaster",
      "domaine": "ia",
      "nom": "Parcours IA Webmaster",
      "intitule": "Boostez la performance de vos sites web grâce à l'IA générative",
      "duree": "4 jours",
      "tarifCertification": 330,
      "modules": [
        {
          "code": "M1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/plongez-dans-lia-generative",
          "titre": "IA générative débutant : plongez dans les outils, les méthodes et les usages professionnels",
          "sessions": [
            {
              "texte": "15 janvier 2027",
              "debut": "2027-01-15",
              "fin": "2027-01-15"
            },
            {
              "texte": "9 avril 2027",
              "debut": "2027-04-09",
              "fin": "2027-04-09"
            },
            {
              "texte": "24 juin 2027",
              "debut": "2027-06-24",
              "fin": "2027-06-24"
            },
            {
              "texte": "27 septembre 2027",
              "debut": "2027-09-27",
              "fin": "2027-09-27"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M2",
          "titre": "GEO- SEO Référencement naturel & stratégie éditoriale : créez du contenu grâce à l'IA",
          "sessions": [
            {
              "texte": "2 et 16 avril 2027",
              "debut": "2027-04-02",
              "fin": "2027-04-16"
            },
            {
              "texte": "5 et 12 octobre 2027",
              "debut": "2027-10-05",
              "fin": "2027-10-12"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-intelligence-artificielle-multimedia",
          "titre": "IA multimédia : produisez vos premiers visuels et contenus audio avec l'IA générative",
          "sessions": [
            {
              "texte": "15 février 2027",
              "debut": "2027-02-15",
              "fin": "2027-02-15"
            },
            {
              "texte": "18 mai 2027",
              "debut": "2027-05-18",
              "fin": "2027-05-18"
            },
            {
              "texte": "6 décembre 2027",
              "debut": "2027-12-06",
              "fin": "2027-12-06"
            }
          ],
          "tarif": 420,
          "tarifParcours": 350,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "ordre": 4
    },
    {
      "id": "pao-prise-vue",
      "certification": "",
      "domaine": "pao",
      "duree": "2 jours",
      "intitule": "Prise de vue photo et vidéo : de l'exposition au cadrage, les clés pour des prises de vue professionnelles",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/prise-de-vue-photo-et-video",
          "titre": "Prise de vue photo et vidéo : de l'exposition au cadrage, les clés pour des prises de vue professionnelles",
          "sessions": [
            {
              "texte": "16-17 mars 2027",
              "debut": "2027-03-16",
              "fin": "2027-03-17"
            },
            {
              "texte": "25-26 mai 2027",
              "debut": "2027-05-25",
              "fin": "2027-05-26"
            },
            {
              "texte": "5-6 octobre 2027",
              "debut": "2027-10-05",
              "fin": "2027-10-06"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700
        }
      ],
      "nom": "Prise de vue photo et vidéo",
      "ordre": 1,
      "reference": "PAO- 0 PRISE VUE"
    },
    {
      "id": "pao-lightroom",
      "certification": "",
      "domaine": "pao",
      "duree": "1 jour",
      "intitule": "Lightroom initiation : organisez et sublimez vos photos professionnelles",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/lightroom",
          "titre": "Lightroom initiation : organisez et sublimez vos photos professionnelles",
          "sessions": [
            {
              "texte": "18 mars 2027",
              "debut": "2027-03-18",
              "fin": "2027-03-18"
            },
            {
              "texte": "27 mai 2027",
              "debut": "2027-05-27",
              "fin": "2027-05-27"
            },
            {
              "texte": "7 octobre 2027",
              "debut": "2027-10-07",
              "fin": "2027-10-07"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350
        }
      ],
      "nom": "Lightroom initiation",
      "ordre": 2,
      "reference": "PAO 1 TRAITEMENT"
    },
    {
      "id": "pao-photoshop-init",
      "certification": "Tosa",
      "domaine": "pao",
      "duree": "3 jours",
      "intitule": "Photoshop initiation - Réaliser des retouches et des compositions d'images avec Photoshop (Tosa)",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/photoshop-initiation-realiser-des-retouches-et-des-compositions-dimages-avec-photoshop-tosa",
          "titre": "Photoshop initiation - Réaliser des retouches et des compositions d'images avec Photoshop (Tosa)",
          "sessions": [
            {
              "texte": "21-22 et 28 janvier 2027",
              "debut": "2027-01-21",
              "fin": "2027-01-28"
            },
            {
              "texte": "7-8 et 14 juin 2027",
              "debut": "2027-06-07",
              "fin": "2027-06-14"
            },
            {
              "texte": "18 au 20 octobre 2027",
              "debut": "2027-10-18",
              "fin": "2027-10-20"
            }
          ],
          "tarif": 990,
          "tarifParcours": 800,
          "cpf": "Oui (certification Tosa)"
        }
      ],
      "nom": "Photoshop initiation",
      "ordre": 3,
      "reference": "PAO-1.2 Photo Init",
      "tarifCertification": 89
    },
    {
      "id": "pao-photoshop-perf",
      "certification": "Tosa",
      "domaine": "pao",
      "duree": "2 jours",
      "intitule": "Photoshop perfectionnement",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/photoshop-perfectionnement",
          "titre": "Photoshop perfectionnement",
          "sessions": [
            {
              "texte": "13-14 avril 2027",
              "debut": "2027-04-13",
              "fin": "2027-04-14"
            },
            {
              "texte": "9-10 novembre 2027",
              "debut": "2027-11-09",
              "fin": "2027-11-10"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Photoshop perfectionnement",
          "cpf": "Oui (certification Tosa)",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Photoshop perfectionnement",
      "ordre": 4,
      "reference": "PAO-3 Photoshop Perf",
      "tarifCertification": 89
    },
    {
      "id": "pao-illustrator",
      "certification": "Tosa",
      "domaine": "pao",
      "duree": "3 jours",
      "intitule": "Illustrator Initiation : créer des illustrations vectorielles et des graphiques avec Illustrator (Tosa)",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/illustrator-initiation-creer-des-illustrations-vectorielles-et-des-graphiques-avec-illustrator-tosa",
          "titre": "Illustrator Initiation : créer des illustrations vectorielles et des graphiques avec Illustrator (Tosa)",
          "sessions": [
            {
              "texte": "29-30 mars, 5 avril 2027",
              "debut": "2027-03-29",
              "fin": "2027-04-05"
            },
            {
              "texte": "23-24 juin, 1er juillet 2027",
              "debut": "2027-06-23",
              "fin": "2027-07-01"
            },
            {
              "texte": "26-27 octobre, 2 novembre 2027",
              "debut": "2027-10-26",
              "fin": "2027-11-02"
            }
          ],
          "tarif": 990,
          "tarifParcours": 800,
          "cpf": "Oui (certification Tosa)"
        }
      ],
      "nom": "Illustrator initiation",
      "ordre": 5,
      "reference": "PAO 2.2 Illust",
      "tarifCertification": 89
    },
    {
      "id": "pao-indesign",
      "certification": "Tosa",
      "domaine": "pao",
      "duree": "3 jours",
      "intitule": "Concevoir des mises en page et des publications professionnelles avec InDesign (Tosa)",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/indesign-initiation-concevoir-des-mises-en-page-et-des-publications-professionnelles-avec-indesign-tosa",
          "titre": "Concevoir des mises en page et des publications professionnelles avec InDesign (Tosa)",
          "sessions": [
            {
              "texte": "8-9 et 16 avril 2027",
              "debut": "2027-04-08",
              "fin": "2027-04-16"
            },
            {
              "texte": "10-11 et 15 juin 2027",
              "debut": "2027-06-10",
              "fin": "2027-06-15"
            },
            {
              "texte": "1er-2 et 8 juillet 2027",
              "debut": "2027-07-01",
              "fin": "2027-07-08"
            }
          ],
          "tarif": 990,
          "tarifParcours": 800,
          "cpf": "Oui (certification Tosa)"
        }
      ],
      "nom": "InDesign",
      "ordre": 6,
      "reference": "PAO 2 Indi",
      "tarifCertification": 89
    },
    {
      "id": "pao-affinity",
      "certification": "",
      "domaine": "pao",
      "duree": "3 jours",
      "intitule": "Affinity by Canva : formation au logiciel gratuit de retouche photo, illustration vectorielle et mise en page",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/maitriser-affinity-lalternative-professionnelle-gratuite-pour-creer-vos-supports-de-communication",
          "titre": "Affinity by Canva : formation au logiciel gratuit de retouche photo, illustration vectorielle et mise en page",
          "sessions": [
            {
              "texte": "31 mai, 1er et 7 juin 2027",
              "debut": "2027-05-31",
              "fin": "2027-06-07"
            },
            {
              "texte": "24 et 29-30 septembre 2027",
              "debut": "2027-09-24",
              "fin": "2027-09-30"
            }
          ],
          "tarif": 990,
          "tarifParcours": 800
        }
      ],
      "nom": "Affinity by Canva",
      "ordre": 7,
      "reference": "PAO- Affini"
    },
    {
      "id": "paoia-adobe",
      "certification": "",
      "domaine": "paoia",
      "duree": "2 jours",
      "intitule": "Adobe & IA : boostez votre productivité créative avec l'intelligence artificielle de la suite Adobe",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ia-et-logiciels-adobe-aller-plus-loin-dans-ses-projets-",
          "titre": "Adobe & IA : boostez votre productivité créative avec l'intelligence artificielle de la suite Adobe",
          "sessions": [
            {
              "texte": "18-19 février 2027",
              "debut": "2027-02-18",
              "fin": "2027-02-19"
            },
            {
              "texte": "9-10 décembre 2027",
              "debut": "2027-12-09",
              "fin": "2027-12-10"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "Non"
        }
      ],
      "nom": "Adobe & IA",
      "ordre": 1,
      "reference": "PAO IA - 4"
    },
    {
      "id": "paoia-design",
      "certification": "",
      "domaine": "paoia",
      "duree": "2 jours",
      "intitule": "IA design graphique : créez des visuels percutants grâce aux solutions IA leaders du design graphique",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/developper-sa-creativite-graphique-avec-lia-midjourney-et-ideogram",
          "titre": "IA design graphique : créez des visuels percutants grâce aux solutions IA leaders du design graphique",
          "sessions": [
            {
              "texte": "22-23 février 2027",
              "debut": "2027-02-22",
              "fin": "2027-02-23"
            },
            {
              "texte": "13-14 décembre 2027",
              "debut": "2027-12-13",
              "fin": "2027-12-14"
            }
          ],
          "tarif": 860,
          "tarifParcours": 800,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours IA de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "IA design graphique",
      "ordre": 2,
      "reference": "PAO IA - 5"
    },
    {
      "id": "ped-genially",
      "certification": "",
      "domaine": "ped",
      "duree": "2 jours",
      "intitule": "Créer des formations interactives avec Genially : scénarisation et production",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/creer-des-formations-interactives-avec-genially",
          "titre": "Créer des formations interactives avec Genially : scénarisation et production",
          "sessions": [
            {
              "texte": "8-9 juillet 2027",
              "debut": "2027-07-08",
              "fin": "2027-07-09"
            },
            {
              "texte": "25-26 octobre 2027",
              "debut": "2027-10-25",
              "fin": "2027-10-26"
            }
          ],
          "tarif": 840,
          "cpf": "Non"
        }
      ],
      "nom": "Genially",
      "ordre": 1,
      "reference": "FORMATION"
    },
    {
      "id": "prj-agilite",
      "certification": "",
      "domaine": "prj",
      "duree": "2 jours",
      "intitule": "Organiser et piloter ses projets avec agilité — Découverte des méthodes et outils collaboratifs en ligne",
      "modules": [
        {
          "code": "Formation",
          "titre": "Organiser et piloter ses projets avec agilité — Découverte des méthodes et outils collaboratifs en ligne",
          "sessions": [
            {
              "texte": "9-10 mars 2027",
              "debut": "2027-03-09",
              "fin": "2027-03-10"
            },
            {
              "texte": "6-7 juillet 2027",
              "debut": "2027-07-06",
              "fin": "2027-07-07"
            }
          ],
          "tarif": 810,
          "cpf": "Non"
        }
      ],
      "nom": "Gestion de projet agile",
      "ordre": 1,
      "reference": "PROJET AGIL"
    },
    {
      "id": "prj-msproject",
      "certification": "",
      "domaine": "prj",
      "duree": "2 jours",
      "intitule": "MS Project : piloter vos projets en créant votre planning, en gérant vos ressources et en suivant l’avancement",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/ms-project",
          "titre": "MS Project : piloter vos projets en créant votre planning, en gérant vos ressources et en suivant l’avancement",
          "sessions": [
            {
              "texte": "22-23 mars 2027",
              "debut": "2027-03-22",
              "fin": "2027-03-23"
            },
            {
              "texte": "7-8 octobre 2027",
              "debut": "2027-10-07",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 760,
          "tarifParcours": 700,
          "cpf": "Non"
        }
      ],
      "nom": "MS Project",
      "ordre": 2,
      "reference": "PROJET PLANIF"
    },
    {
      "id": "rs-simple",
      "domaine": "rs",
      "duree": "3 jours",
      "intitule": "Réseaux sociaux - Parcours 3 jours",
      "modules": [
        {
          "code": "M1 Base",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/reseaux-sociaux-creer-et-animez-votre-presence-sur-les-reseaux-sociaux",
          "titre": "Créer et animer votre présence sur les réseaux sociaux : de la cible à votre page pro",
          "sessions": [
            {
              "texte": "29 janvier 2027",
              "debut": "2027-01-29",
              "fin": "2027-01-29"
            },
            {
              "texte": "4 juin 2027",
              "debut": "2027-06-04",
              "fin": "2027-06-04"
            },
            {
              "texte": "8 octobre 2027",
              "debut": "2027-10-08",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M2.1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/strategie-de-communication-sur-le-digital-et-les-reseaux-sociaux",
          "titre": "Développez votre stratégie de communication sur le digital et les réseaux sociaux : optimiser vos publications",
          "sessions": [
            {
              "texte": "5 et 12 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-12"
            },
            {
              "texte": "11 et 18 juin 2027",
              "debut": "2027-06-11",
              "fin": "2027-06-18"
            },
            {
              "texte": "5 et 15 novembre 2027",
              "debut": "2027-11-05",
              "fin": "2027-11-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Stratégie de communication réseaux sociaux",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Stratégie réseaux · Parcours simple",
      "ordre": 1,
      "tarifCertification": 330
    },
    {
      "id": "rs-marque",
      "domaine": "rs",
      "duree": "4 jours",
      "intitule": "Développer son image de marque sur les plateformes",
      "modules": [
        {
          "code": "M1 Socle",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/creer-ou-optimiser-son-image-de-marque-du-logo-a-sa-carte-de-visite",
          "titre": "Réseaux sociaux : posez les bases de votre marque digitale - du positionnement à la charte graphique",
          "sessions": [
            {
              "texte": "28 janvier 2027",
              "debut": "2027-01-28",
              "fin": "2027-01-28"
            },
            {
              "texte": "14 avril 2027",
              "debut": "2027-04-14",
              "fin": "2027-04-14"
            },
            {
              "texte": "14 mai 2027",
              "debut": "2027-05-14",
              "fin": "2027-05-14"
            },
            {
              "texte": "1er octobre 2027",
              "debut": "2027-10-01",
              "fin": "2027-10-01"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M1 Base",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/reseaux-sociaux-creer-et-animez-votre-presence-sur-les-reseaux-sociaux",
          "titre": "Créer et animer votre présence sur les réseaux sociaux : de la cible à votre page pro",
          "sessions": [
            {
              "texte": "29 janvier 2027",
              "debut": "2027-01-29",
              "fin": "2027-01-29"
            },
            {
              "texte": "4 juin 2027",
              "debut": "2027-06-04",
              "fin": "2027-06-04"
            },
            {
              "texte": "8 octobre 2027",
              "debut": "2027-10-08",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M2.1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/strategie-de-communication-sur-le-digital-et-les-reseaux-sociaux",
          "titre": "Développez votre stratégie de communication sur le digital et les réseaux sociaux : optimiser vos publications",
          "sessions": [
            {
              "texte": "5 et 12 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-12"
            },
            {
              "texte": "11 et 18 juin 2027",
              "debut": "2027-06-11",
              "fin": "2027-06-18"
            },
            {
              "texte": "5 et 15 novembre 2027",
              "debut": "2027-11-05",
              "fin": "2027-11-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Stratégie de communication réseaux sociaux",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Réseaux & identité de marque",
      "ordre": 2,
      "tarifCertification": 330
    },
    {
      "id": "rs-linkedin",
      "domaine": "rs",
      "duree": "4 jours",
      "intitule": "Professionnaliser sa présence sur les réseaux sociaux",
      "modules": [
        {
          "code": "M1 Base",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/reseaux-sociaux-creer-et-animez-votre-presence-sur-les-reseaux-sociaux",
          "titre": "Créer et animer votre présence sur les réseaux sociaux : de la cible à votre page pro",
          "sessions": [
            {
              "texte": "29 janvier 2027",
              "debut": "2027-01-29",
              "fin": "2027-01-29"
            },
            {
              "texte": "4 juin 2027",
              "debut": "2027-06-04",
              "fin": "2027-06-04"
            },
            {
              "texte": "8 octobre 2027",
              "debut": "2027-10-08",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M2.1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/strategie-de-communication-sur-le-digital-et-les-reseaux-sociaux",
          "titre": "Développez votre stratégie de communication sur le digital et les réseaux sociaux : optimiser vos publications",
          "sessions": [
            {
              "texte": "5 et 12 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-12"
            },
            {
              "texte": "11 et 18 juin 2027",
              "debut": "2027-06-11",
              "fin": "2027-06-18"
            },
            {
              "texte": "5 et 15 novembre 2027",
              "debut": "2027-11-05",
              "fin": "2027-11-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Stratégie de communication réseaux sociaux",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M2.2",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/linkedin-developper-son-activite-btob-et-son-image-de-marque",
          "titre": "LinkedIn : construisez votre réputation professionnelle, créez du contenu et développez votre réseau",
          "sessions": [
            {
              "texte": "22 mars 2027",
              "debut": "2027-03-22",
              "fin": "2027-03-22"
            },
            {
              "texte": "30 juin 2027",
              "debut": "2027-06-30",
              "fin": "2027-06-30"
            },
            {
              "texte": "8 novembre 2027",
              "debut": "2027-11-08",
              "fin": "2027-11-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "positionnement": "Questionnaire de positionnement LinkedIn",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Stratégie réseaux pro · LinkedIn",
      "ordre": 3,
      "tarifCertification": 330
    },
    {
      "id": "rs-local",
      "domaine": "rs",
      "duree": "4 jours",
      "intitule": "Construire sa notoriété locale et digitale",
      "modules": [
        {
          "code": "M1 Base",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/reseaux-sociaux-creer-et-animez-votre-presence-sur-les-reseaux-sociaux",
          "titre": "Créer et animer votre présence sur les réseaux sociaux : de la cible à votre page pro",
          "sessions": [
            {
              "texte": "29 janvier 2027",
              "debut": "2027-01-29",
              "fin": "2027-01-29"
            },
            {
              "texte": "4 juin 2027",
              "debut": "2027-06-04",
              "fin": "2027-06-04"
            },
            {
              "texte": "8 octobre 2027",
              "debut": "2027-10-08",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M2.1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/strategie-de-communication-sur-le-digital-et-les-reseaux-sociaux",
          "titre": "Développez votre stratégie de communication sur le digital et les réseaux sociaux : optimiser vos publications",
          "sessions": [
            {
              "texte": "5 et 12 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-12"
            },
            {
              "texte": "11 et 18 juin 2027",
              "debut": "2027-06-11",
              "fin": "2027-06-18"
            },
            {
              "texte": "5 et 15 novembre 2027",
              "debut": "2027-11-05",
              "fin": "2027-11-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Stratégie de communication réseaux sociaux",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M2.3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/google-business-profile-",
          "titre": "Développez votre visibilité locale avec Google Business Profile et le référencement local",
          "sessions": [
            {
              "texte": "5 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-05"
            },
            {
              "texte": "10 mai 2027",
              "debut": "2027-05-10",
              "fin": "2027-05-10"
            },
            {
              "texte": "9 septembre 2027",
              "debut": "2027-09-09",
              "fin": "2027-09-09"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        }
      ],
      "nom": "Réseaux & ancrage local",
      "ordre": 4,
      "tarifCertification": 330
    },
    {
      "id": "rs-video",
      "domaine": "rs",
      "duree": "5 jours",
      "intitule": "Développer sa stratégie de communication et créer ses propres contenus",
      "modules": [
        {
          "code": "M1 Base",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/reseaux-sociaux-creer-et-animez-votre-presence-sur-les-reseaux-sociaux",
          "titre": "Créer et animer votre présence sur les réseaux sociaux : de la cible à votre page pro",
          "sessions": [
            {
              "texte": "29 janvier 2027",
              "debut": "2027-01-29",
              "fin": "2027-01-29"
            },
            {
              "texte": "4 juin 2027",
              "debut": "2027-06-04",
              "fin": "2027-06-04"
            },
            {
              "texte": "8 octobre 2027",
              "debut": "2027-10-08",
              "fin": "2027-10-08"
            }
          ],
          "tarif": 390,
          "tarifParcours": 350,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        },
        {
          "code": "M2.1",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/strategie-de-communication-sur-le-digital-et-les-reseaux-sociaux",
          "titre": "Développez votre stratégie de communication sur le digital et les réseaux sociaux : optimiser vos publications",
          "sessions": [
            {
              "texte": "5 et 12 février 2027",
              "debut": "2027-02-05",
              "fin": "2027-02-12"
            },
            {
              "texte": "11 et 18 juin 2027",
              "debut": "2027-06-11",
              "fin": "2027-06-18"
            },
            {
              "texte": "5 et 15 novembre 2027",
              "debut": "2027-11-05",
              "fin": "2027-11-15"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "positionnement": "Questionnaire de positionnement Stratégie de communication réseaux sociaux",
          "cpf": "Oui, dans un parcours de 2 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        },
        {
          "code": "M3",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/filmer-et-monter-des-videos-sur-son-smartphone-realiser-des-videos-pour-le-web-et-les-reseaux-sociaux",
          "titre": "Médiatisez-vous : filmer et monter ses vidéos sur smartphone",
          "sessions": [
            {
              "texte": "15-16 mars 2027",
              "debut": "2027-03-15",
              "fin": "2027-03-16"
            },
            {
              "texte": "1er et 2 juin 2027",
              "debut": "2027-06-01",
              "fin": "2027-06-02"
            },
            {
              "texte": "20-21 septembre 2027",
              "debut": "2027-09-20",
              "fin": "2027-09-21"
            },
            {
              "texte": "2-3 décembre 2027",
              "debut": "2027-12-02",
              "fin": "2027-12-03"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "Oui, dans un parcours de 2 jours minimum"
        }
      ],
      "nom": "Réseaux & vidéo",
      "ordre": 5,
      "tarifCertification": 330
    },
    {
      "id": "video-premiere",
      "certification": "",
      "domaine": "video",
      "duree": "3 jours",
      "intitule": "Adobe Premiere : produisez des vidéos engageantes et professionnelles pour booster votre communication",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/creer-et-monter-des-videos-professionnelles-",
          "titre": "Adobe Premiere : produisez des vidéos engageantes et professionnelles pour booster votre communication",
          "sessions": [
            {
              "texte": "27-28 mai, 4 juin 2027",
              "debut": "2027-05-27",
              "fin": "2027-06-04"
            }
          ],
          "tarif": 990,
          "tarifParcours": 900,
          "cpf": "Non"
        }
      ],
      "nom": "Adobe Premiere",
      "ordre": 1,
      "reference": "Montage Vidéo"
    },
    {
      "id": "video-ia-avatar",
      "certification": "",
      "domaine": "video",
      "duree": "2 jours",
      "intitule": "Vidéo IA Avatar - créez des vidéos IA qui propulsent vos produits et votre marque",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/video-ia-avatar",
          "titre": "Vidéo IA Avatar - créez des vidéos IA qui propulsent vos produits et votre marque",
          "sessions": [
            {
              "texte": "18-19 janvier 2027",
              "debut": "2027-01-18",
              "fin": "2027-01-19"
            },
            {
              "texte": "14-15 juin 2027",
              "debut": "2027-06-14",
              "fin": "2027-06-15"
            }
          ],
          "tarif": 890,
          "tarifParcours": 850,
          "positionnement": "Questionnaire de positionnement IA générative niveau 2",
          "cpf": "Oui, dans un parcours de 4 jours minimum",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "Vidéo IA Avatar",
      "ordre": 2,
      "reference": "IA M3 Vidéo"
    },
    {
      "id": "web-wordpress",
      "certification": "Tosa",
      "domaine": "web",
      "duree": "4 jours",
      "intitule": "Créer et gérer des sites web avec WordPress (Tosa)",
      "modules": [
        {
          "code": "Formation",
          "lien": "https://www.cci-formation-bretagne.fr/nos-centres-de-formation/creer-et-gerer-des-sites-web-avec-wordpress-tosa",
          "titre": "Créer et gérer des sites web avec WordPress (Tosa)",
          "sessions": [
            {
              "texte": "25-26 mars, 1er et 2 avril 2027",
              "debut": "2027-03-25",
              "fin": "2027-04-02"
            }
          ],
          "tarif": 1520,
          "positionnement": "Questionnaire de positionnement WordPress",
          "cpf": "Oui (certification Tosa)",
          "questionnaire": true,
          "questionnaireType": "Formulaire en ligne"
        }
      ],
      "nom": "WordPress",
      "ordre": 1,
      "reference": "Site WordPress",
      "tarifCertification": 89
    },
    {
      "id": "web-geo-seo",
      "certification": "",
      "domaine": "web",
      "duree": "2 jours",
      "intitule": "GEO- SEO Référencement naturel & stratégie éditoriale : créez du contenu grâce à l'IA",
      "modules": [
        {
          "code": "Formation",
          "titre": "GEO- SEO Référencement naturel & stratégie éditoriale : créez du contenu grâce à l'IA",
          "sessions": [
            {
              "texte": "2 et 16 avril 2027",
              "debut": "2027-04-02",
              "fin": "2027-04-16"
            },
            {
              "texte": "5 et 12 octobre 2027",
              "debut": "2027-10-05",
              "fin": "2027-10-12"
            }
          ],
          "tarif": 780,
          "tarifParcours": 700,
          "cpf": "Oui, dans un parcours de 4 jours minimum"
        }
      ],
      "nom": "GEO-SEO avec l'IA",
      "ordre": 2,
      "reference": "IA M2 -SEO"
    }
  ],
  "profils": [
    {
      "id": "bur-001",
      "besoin": "Fiabiliser et automatiser ses tableaux de bord.",
      "categorie": "Comptabilité",
      "complements": [
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "bur",
      "nom": "Contrôleur(se) de gestion, comptable",
      "ordre": 1,
      "parcours": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Le plus adapté : analyse et tableaux de bord.",
          "reponses": {
            "Formation": "Importer, nettoyer et croiser ses données avec Power Query, Pivot et BI."
          },
          "argumentaire": "Il apprend à importer, nettoyer et croiser ses données avec Power Query, puis à construire tableaux croisés et tableaux de bord avec Power Pivot et Power BI. Résultat : un reporting qui se met à jour en un clic, sans copier-coller."
        },
        {
          "formation": "bur-vba",
          "pourquoi": "À proposer pour automatiser ses traitements récurrents (mises en forme, imports, éditions) avec des macros VBA, en complément de ses tableaux de bord.",
          "reponses": {
            "Formation": "Macros VBA pour automatiser ses tâches ; certification Tosa."
          }
        }
      ],
      "reponses": {},
      "motsCles": "contrôleur de gestion, comptable, finance, tableaux de bord, reporting, Power Query, tableaux croisés, Power BI, automatiser, management, pilotage",
      "categories": [
        "Comptabilité"
      ],
      "besoinDetail": {
        "situation": "Produit chaque mois tableaux de bord, reportings et analyses à partir de plusieurs exports.",
        "difficulte": "Copier-coller et retraitements manuels, risques d'erreur, fichiers lourds à mettre à jour.",
        "attente": "Des tableaux de bord fiables qui se mettent à jour seuls, et plus de temps pour l'analyse."
      }
    },
    {
      "id": "bur-002",
      "besoin": "Gagner du temps sur des tableaux répétitifs.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        }
      ],
      "domaine": "bur",
      "nom": "Assistant(e) administratif(ve) ou de gestion",
      "ordre": 2,
      "parcours": [
        {
          "formation": "bur-vba",
          "pourquoi": "Le plus adapté : automatiser les tâches répétitives.",
          "reponses": {
            "Formation": "Automatiser mises en forme, imports et éditions ; certification Tosa."
          },
          "argumentaire": "Les macros VBA automatisent mises en forme, imports et éditions répétés chaque semaine ou chaque mois. Résultat : plusieurs heures gagnées et moins d'erreurs."
        },
        {
          "formation": "bur-excel-power",
          "pourquoi": "Pour consolider plusieurs fichiers.",
          "reponses": {
            "Formation": "Regrouper et analyser des données de plusieurs sources."
          },
          "argumentaire": "Power Query les consolide automatiquement."
        }
      ],
      "reponses": {},
      "motsCles": "assistant administratif, assistant de gestion, tableaux répétitifs, macros, VBA, automatisation, Excel avancé",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Prépare régulièrement les mêmes tableaux : suivis, états, extractions mises en forme.",
        "difficulte": "Tâches répétitives et chronophages, refaites à la main chaque semaine ou chaque mois.",
        "attente": "Automatiser ces traitements pour gagner du temps et fiabiliser les résultats."
      }
    },
    {
      "id": "bur-003",
      "besoin": "Des tableaux de bord clairs et à jour sans ressaisie.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Organiser et piloter ses projets en équipe."
        }
      ],
      "domaine": "bur",
      "nom": "Responsable commercial(e), RH ou paie (reporting)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Le plus adapté : tableaux de bord automatisés.",
          "reponses": {
            "Formation": "Tableaux de bord et indicateurs mis à jour en un clic."
          },
          "argumentaire": "Il construit des tableaux de bord et des indicateurs alimentés automatiquement par ses sources (Power Query, tableaux croisés, Power BI). Résultat : des chiffres à jour en un clic, sans ressaisie."
        }
      ],
      "reponses": {},
      "motsCles": "reporting commercial, reporting RH, paie, indicateurs, KPI, tableaux de bord, ressaisie, Excel, ressources humaines",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Suit des indicateurs commerciaux, RH ou de paie pour sa direction ou ses équipes.",
        "difficulte": "Ressaisie des données depuis plusieurs sources, tableaux vite dépassés.",
        "attente": "Des tableaux de bord clairs, à jour en un clic, sans ressaisie."
      }
    },
    {
      "id": "cao-001",
      "besoin": "Produire des plans techniques fiables et des vues en 3D.",
      "categorie": "Technique",
      "complements": [
        {
          "formation": "prj-msproject",
          "pourquoi": "Planifier et suivre ses projets."
        }
      ],
      "domaine": "cao",
      "nom": "Dessinateur(trice) ou technicien(ne) du bâtiment",
      "ordre": 1,
      "parcours": [
        {
          "formation": "cao-autocad",
          "pourquoi": "Le plus adapté : plans 2D cotés et mis en page.",
          "reponses": {
            "Formation": "Dessiner, coter et mettre en page des plans techniques 2D."
          },
          "argumentaire": "Il apprend à dessiner, coter et mettre en page des plans techniques 2D conformes, prêts à transmettre. Résultat : des plans fiables, produits plus vite."
        },
        {
          "formation": "cao-sketchup",
          "pourquoi": "À proposer pour présenter les projets en 3D aux clients et maîtres d'ouvrage.",
          "reponses": {
            "Formation": "Modéliser et présenter ses projets en 3D."
          }
        }
      ],
      "reponses": {},
      "motsCles": "dessinateur, projeteur, technicien du bâtiment, BTP, bureau d'études bâtiment, plans, AutoCAD, 3D, SketchUp, aménagement",
      "categories": [
        "Technique"
      ],
      "besoinDetail": {
        "situation": "Dessine des plans de bâtiment dans un bureau d'études, une entreprise du BTP ou chez un architecte.",
        "difficulte": "Plans à produire vite et sans erreur ; clients et maîtres d'ouvrage qui attendent aussi des vues 3D.",
        "attente": "Produire des plans 2D cotés fiables et présenter les projets en 3D."
      }
    },
    {
      "id": "cao-002",
      "besoin": "Modéliser rapidement des aménagements et les montrer aux clients.",
      "categorie": "Technique",
      "complements": [
        {
          "formation": "paoia-design",
          "pourquoi": "Créer des visuels avec les outils IA du design (Midjourney, Ideogram)."
        }
      ],
      "domaine": "cao",
      "nom": "Architecte d’intérieur, agenceur, cuisiniste",
      "ordre": 2,
      "parcours": [
        {
          "formation": "cao-sketchup",
          "pourquoi": "Le plus adapté : modélisation 3D accessible.",
          "reponses": {
            "Formation": "Modéliser pièces, mobilier et aménagements en 3D."
          },
          "argumentaire": "SketchUp permet de modéliser rapidement pièces, mobilier et aménagements en 3D, sans compétences techniques poussées. Résultat : le client visualise son projet et décide plus vite."
        },
        {
          "formation": "cao-autocad",
          "pourquoi": "À proposer pour produire ensuite les plans 2D cotés destinés à la réalisation et aux artisans.",
          "reponses": {
            "Formation": "Plans 2D cotés pour la réalisation et les artisans."
          }
        }
      ],
      "reponses": {},
      "motsCles": "architecte d'intérieur, agenceur, cuisiniste, décorateur, aménagement, plans 3D, SketchUp, rendus clients, bâtiment",
      "categories": [
        "Technique"
      ],
      "besoinDetail": {
        "situation": "Conçoit des aménagements intérieurs, cuisines ou agencements et les présente aux clients.",
        "difficulte": "Le client a du mal à se projeter sur un plan ; les rendus prennent du temps.",
        "attente": "Modéliser vite en 3D pour convaincre, puis produire les plans de réalisation."
      }
    },
    {
      "id": "cao-003",
      "besoin": "Concevoir des pièces et assemblages et produire les plans.",
      "categorie": "Technique",
      "complements": [],
      "domaine": "cao",
      "nom": "Technicien(ne) de bureau d’études, industrie",
      "ordre": 3,
      "parcours": [
        {
          "formation": "cao-solidworks",
          "pourquoi": "Le plus adapté : conception mécanique 3D.",
          "reponses": {
            "Formation": "Pièces, assemblages et mises en plan avec SolidWorks."
          },
          "argumentaire": "Il apprend à modéliser pièces et assemblages en 3D paramétrique et à produire les mises en plan pour la fabrication."
        },
        {
          "formation": "cao-autocad",
          "pourquoi": "À proposer pour les plans techniques 2D et la reprise de plans existants.",
          "reponses": {
            "Formation": "Plans techniques 2D et reprise de plans existants."
          }
        }
      ],
      "reponses": {},
      "motsCles": "technicien bureau d'études, dessinateur industriel, mécanique, pièces, assemblages, mises en plan, SolidWorks",
      "categories": [
        "Technique"
      ],
      "besoinDetail": {
        "situation": "Conçoit des pièces mécaniques et des assemblages dans un bureau d'études industriel.",
        "difficulte": "Besoin d'un outil 3D paramétrique et de mises en plan conformes pour la fabrication.",
        "attente": "Maîtriser la conception 3D de pièces et d'assemblages et produire les plans."
      }
    },
    {
      "id": "cao-004",
      "besoin": "Dessiner ses réalisations et les montrer à ses clients.",
      "categorie": "Technique",
      "complements": [],
      "domaine": "cao",
      "nom": "Artisan du bois ou du métal (menuisier, métallier…)",
      "ordre": 4,
      "parcours": [
        {
          "formation": "cao-sketchup",
          "pourquoi": "Le plus adapté pour le bois et l’agencement.",
          "reponses": {
            "Formation": "Modéliser ses ouvrages en 3D pour les présenter et les fabriquer."
          },
          "argumentaire": "Modéliser ses ouvrages en 3D pour les présenter au client et préparer leur fabrication."
        },
        {
          "formation": "cao-solidworks",
          "pourquoi": "Pour la métallerie et la fabrication de pièces.",
          "reponses": {
            "Formation": "Concevoir pièces et assemblages précis."
          },
          "argumentaire": "Conception 3D de pièces et d'assemblages."
        },
        {
          "formation": "cao-autocad",
          "pourquoi": "À proposer s'il a surtout besoin de plans de fabrication 2D cotés.",
          "reponses": {
            "Formation": "Plans de fabrication cotés."
          }
        }
      ],
      "reponses": {},
      "motsCles": "menuisier, ébéniste, métallier, serrurier, charpentier, plans de fabrication, 3D, devis clients, commerce, artisanat",
      "categories": [
        "Technique"
      ],
      "besoinDetail": {
        "situation": "Artisan du bois ou du métal qui fabrique sur mesure : menuiserie, agencement, métallerie.",
        "difficulte": "Dessins à la main ou approximatifs, difficile de montrer le résultat au client avant fabrication.",
        "attente": "Dessiner ses ouvrages pour les présenter, les chiffrer et les fabriquer avec précision."
      }
    },
    {
      "id": "cao-005",
      "besoin": "Acquérir un logiciel recherché par les employeurs.",
      "categorie": "Emploi et transition",
      "complements": [],
      "domaine": "cao",
      "nom": "Personne en reconversion vers le dessin technique",
      "ordre": 5,
      "parcours": [
        {
          "formation": "cao-autocad",
          "pourquoi": "Le logiciel de référence du dessin 2D.",
          "reponses": {
            "Formation": "Bases solides du dessin technique 2D."
          },
          "argumentaire": "Le logiciel de référence du dessin technique 2D, le plus demandé dans les offres d'emploi. La certification ICDL rend la compétence visible sur son CV."
        },
        {
          "formation": "cao-sketchup",
          "pourquoi": "Pour l’aménagement et le bâtiment.",
          "reponses": {
            "Formation": "Modélisation 3D accessible et rapide."
          },
          "argumentaire": "Une modélisation 3D accessible et rapide à prendre en main."
        },
        {
          "formation": "cao-solidworks",
          "pourquoi": "Pour l’industrie.",
          "reponses": {
            "Formation": "Conception mécanique 3D."
          },
          "argumentaire": "La conception mécanique 3D de pièces et d'assemblages."
        }
      ],
      "reponses": {},
      "motsCles": "reconversion, dessin technique, dessinateur, DAO, CAO, certification ICDL, emploi, logiciel recherché",
      "categories": [
        "Emploi et transition"
      ],
      "besoinDetail": {
        "situation": "En reconversion vers le dessin technique, le bâtiment ou l'industrie.",
        "difficulte": "Les offres d'emploi exigent la maîtrise d'un logiciel de DAO ou de CAO.",
        "attente": "Acquérir un logiciel de référence et le prouver par une certification reconnue."
      }
    },
    {
      "id": "col-001",
      "besoin": "Partager documents, agendas et visios simplement.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "col",
      "nom": "Équipe ou TPE qui passe aux outils Google",
      "ordre": 1,
      "parcours": [
        {
          "formation": "col-workspace",
          "pourquoi": "Le plus adapté : toute la suite Google.",
          "reponses": {
            "Formation": "Gmail, Drive, Meet et Docs pour travailler à plusieurs."
          },
          "argumentaire": "Toute la suite Google en pratique (Gmail, Drive, Agenda, Meet, Docs, Sheets) pour partager les documents, coéditer et organiser les réunions. Résultat : une équipe qui travaille sur les mêmes fichiers, sans échanges de pièces jointes."
        }
      ],
      "reponses": {},
      "motsCles": "Google Workspace, Gmail, Drive, Agenda, Meet, Docs, Sheets, travail d'équipe, partage de documents, TPE, entreprise, association",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Petite équipe ou TPE qui adopte, ou vient d'adopter, les outils Google.",
        "difficulte": "Documents envoyés par mail, versions multiples, agendas non partagés, visios improvisées.",
        "attente": "Partager documents, agendas et réunions simplement, et travailler à plusieurs sur les mêmes fichiers."
      }
    },
    {
      "id": "col-002",
      "besoin": "Centraliser clients, tâches et notes au même endroit.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Organiser et piloter ses projets en équipe."
        }
      ],
      "domaine": "col",
      "nom": "Indépendant(e) ou auto-entrepreneur qui veut s’organiser",
      "ordre": 2,
      "parcours": [
        {
          "formation": "col-notion",
          "pourquoi": "Le plus adapté : un espace de travail sur mesure.",
          "reponses": {
            "Formation": "Construire son espace Notion : tâches, clients, documents."
          },
          "argumentaire": "Il construit pendant la formation son propre espace Notion (clients, tâches, notes, documents). Résultat : tout son travail centralisé et organisé."
        },
        {
          "formation": "col-workspace",
          "pourquoi": "S’il travaille avec des clients ou partenaires.",
          "reponses": {
            "Formation": "Partager des documents et organiser ses rendez-vous."
          },
          "argumentaire": "Partage de documents et organisation des rendez-vous avec les outils Google."
        }
      ],
      "reponses": {},
      "motsCles": "Notion, organisation, to-do, gestion des tâches, suivi clients, notes, indépendant, centraliser, créatif",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Gère seul(e) clients, projets, tâches et notes.",
        "difficulte": "Informations dispersées entre carnets, mails et fichiers ; oublis et perte de temps.",
        "attente": "Centraliser tout son travail dans un seul espace organisé sur mesure."
      }
    },
    {
      "id": "col-003",
      "besoin": "Organiser l’information et le travail de l’équipe.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Organiser et piloter ses projets en équipe."
        }
      ],
      "domaine": "col",
      "nom": "Office manager, chef(fe) de projet, assistant(e)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "col-notion",
          "pourquoi": "Pour centraliser procédures et suivis.",
          "reponses": {
            "Formation": "Bases de données, pages partagées et suivis d’équipe."
          },
          "argumentaire": "Le plus adapté pour centraliser procédures, bases de connaissances et suivis d'équipe dans des pages et bases de données partagées."
        },
        {
          "formation": "col-workspace",
          "pourquoi": "Si l’entreprise utilise Google.",
          "reponses": {
            "Formation": "Organisation collaborative avec les outils Google."
          },
          "argumentaire": "Organisation collaborative avec Drive, Agenda, Meet et Docs."
        }
      ],
      "reponses": {},
      "motsCles": "office manager, chef de projet, assistant, organisation d'équipe, base de connaissances, Notion, Drive, gestion, management, pilotage",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Organise l'information et le suivi de l'équipe : procédures, projets, documents partagés.",
        "difficulte": "Informations éparpillées, procédures introuvables, suivi d'équipe difficile.",
        "attente": "Centraliser procédures, suivis et documents dans un espace partagé et clair."
      }
    },
    {
      "id": "col-004",
      "besoin": "Travailler à plusieurs à distance, gratuitement.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "col",
      "nom": "Salarié(e) ou bénévole d’association",
      "ordre": 4,
      "parcours": [
        {
          "formation": "col-workspace",
          "pourquoi": "Le plus adapté : outils gratuits et partagés.",
          "reponses": {
            "Formation": "Drive, Docs et Meet pour les bénévoles et le bureau."
          },
          "argumentaire": "Des outils gratuits et partagés (Drive, Docs, Meet) pour faire travailler bureau et bénévoles à distance."
        }
      ],
      "reponses": {},
      "motsCles": "association, bénévoles, travail à distance, gratuit, Google Workspace, partage, visio, entreprise",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Salarié(e) ou bénévole d'une association dont l'équipe travaille souvent à distance.",
        "difficulte": "Peu de moyens, bénévoles dispersés, documents échangés par mail.",
        "attente": "Travailler à plusieurs avec des outils gratuits et simples : documents, agendas, visios."
      }
    },
    {
      "id": "com-001",
      "besoin": "Faire ses visuels soi-même : affiches, publications, flyers.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "com",
      "nom": "Commerçant(e), artisan, auto-entrepreneur",
      "ordre": 1,
      "parcours": [
        {
          "formation": "com-canva1",
          "pourquoi": "Le plus adapté : visuels sans compétences graphiques.",
          "reponses": {
            "Formation": "Affiches, publications et flyers professionnels en 1 jour."
          },
          "argumentaire": "En une journée, il apprend à créer affiches, publications et flyers professionnels à partir de modèles, sans compétences graphiques. Résultat : une communication régulière et soignée."
        }
      ],
      "reponses": {},
      "motsCles": "commerçant, artisan, auto-entrepreneur, affiches, flyers, publications, cartes de visite, Canva gratuit, commerce, artisanat",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Commerçant(e), artisan ou auto-entrepreneur qui communique lui-même.",
        "difficulte": "Pas de graphiste ni de compétences graphiques ; visuels faits à la va-vite ou jamais faits.",
        "attente": "Créer seul(e), rapidement, des affiches, publications et flyers d'aspect professionnel."
      }
    },
    {
      "id": "com-002",
      "besoin": "Produire des visuels cohérents rapidement.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "paoia-design",
          "pourquoi": "Créer des visuels avec les outils IA du design (Midjourney, Ideogram)."
        }
      ],
      "domaine": "com",
      "nom": "Chargé(e) ou assistant(e) de communication",
      "ordre": 2,
      "parcours": [
        {
          "formation": "com-canva1",
          "pourquoi": "S’il débute sur Canva.",
          "reponses": {
            "Formation": "Bases solides pour des visuels professionnels."
          },
          "argumentaire": "Des bases solides pour produire des visuels professionnels."
        },
        {
          "formation": "com-canva-pro",
          "pourquoi": "S’il utilise déjà Canva.",
          "reponses": {
            "Formation": "Charte graphique, vidéo, IA et automatisation dans Canva Pro."
          },
          "argumentaire": "Kit de marque, modèles d'équipe, vidéo, IA et automatisation pour produire plus vite des visuels cohérents."
        }
      ],
      "reponses": {},
      "motsCles": "chargé de communication, assistant de communication, visuels, charte graphique, modèles, Canva",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Produit les visuels de communication de la structure : réseaux sociaux, affiches, supports.",
        "difficulte": "Volume de visuels en hausse, cohérence graphique difficile à tenir.",
        "attente": "Produire plus vite des visuels cohérents avec la charte."
      }
    },
    {
      "id": "com-003",
      "besoin": "Créer affiches et publications pour ses événements.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        }
      ],
      "domaine": "com",
      "nom": "Salarié(e) ou bénévole d’association",
      "ordre": 3,
      "parcours": [
        {
          "formation": "com-canva1",
          "pourquoi": "Le plus adapté : simple et gratuit.",
          "reponses": {
            "Formation": "Affiches, invitations et publications pour les événements."
          },
          "argumentaire": "Simple et gratuit pour les associations ; il crée affiches, invitations et publications pour ses événements."
        }
      ],
      "reponses": {},
      "motsCles": "association, bénévole, affiches d'événements, programmes, publications, Canva gratuit pour les associations, entreprise",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Salarié(e) ou bénévole qui fait la communication des événements de l'association.",
        "difficulte": "Pas de budget ni de graphiste ; supports réalisés avec les moyens du bord.",
        "attente": "Créer soi-même, gratuitement, des affiches et publications attractives."
      }
    },
    {
      "id": "com-004",
      "besoin": "Gagner du temps et garder une image cohérente.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "com",
      "nom": "Utilisateur(trice) régulier(e) de Canva en entreprise",
      "ordre": 4,
      "parcours": [
        {
          "formation": "com-canva-pro",
          "pourquoi": "Le plus adapté : exploiter Canva Pro.",
          "reponses": {
            "Formation": "Kit de marque, modèles, IA et automatisation pour produire plus vite."
          },
          "argumentaire": "Il exploite tout Canva Pro (kit de marque, modèles partagés, vidéo, IA, automatisation des déclinaisons). Résultat : du temps gagné et une image homogène."
        }
      ],
      "reponses": {},
      "motsCles": "Canva Pro, kit de marque, charte, modèles d'équipe, vidéo, IA Canva, automatisation, déclinaisons",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Utilise déjà Canva régulièrement en entreprise.",
        "difficulte": "N'exploite qu'une partie des fonctions ; temps perdu à refaire les mêmes déclinaisons ; image peu homogène.",
        "attente": "Gagner du temps avec le kit de marque, les modèles, la vidéo et l'IA de Canva Pro."
      }
    },
    {
      "id": "ia-001",
      "besoin": "Rédiger plus vite courriers, comptes rendus et synthèses, sans être « technique ».",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "ia",
      "nom": "Assistant(e) de direction ou administratif(ve)",
      "ordre": 1,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Le plus adapté : les écrits du quotidien.",
          "reponses": {
            "M2": "Comptes rendus, synthèses de documents longs et courriers, avec vérification. Paramétrer un agent personnalisé pour les comptes rendus de réunion."
          },
          "argumentaire": "Il part de ses écrits réels. Le M2 lui fait produire comptes rendus, synthèses et courriers, puis créer son propre assistant de comptes rendus de réunion ; le M3 ajoute la mise en forme visuelle de ses supports. Résultat : des modèles réutilisables dès le retour au poste."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Mise en forme de supports et de notes visuelles pour la direction."
      },
      "motsCles": "assistante de direction, secrétaire, assistant administratif, courriers, comptes rendus, synthèses, mails, prise de notes, ChatGPT, Copilot",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Passe une grande partie de ses journées à rédiger : courriers, comptes rendus de réunion, synthèses de documents longs, mails.",
        "difficulte": "Tâches répétitives et chronophages ; peur de mal utiliser l'IA ou d'y confier des informations confidentielles.",
        "attente": "Gagner du temps tout de suite sur ses propres écrits, avec une méthode simple et sûre."
      }
    },
    {
      "id": "ia-002",
      "besoin": "Préparer ses rendez-vous, propositions et relances en moins de temps.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Commercial(e), chargé(e) d'affaires",
      "ordre": 2,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Propositions, relances et préparation de rendez-vous.",
          "reponses": {
            "M2": "Préparation de rendez-vous, propositions commerciales et relances personnalisées sur ses vrais dossiers. Paramétrer un agent personnalisé qui prépare propositions et relances dans son style."
          },
          "argumentaire": "Le M2 travaille sur ses vrais dossiers : préparation de rendez-vous, propositions commerciales, relances et emailings, puis un assistant personnalisé qui rédige dans son style. Le M3 lui permet de créer seul(e) visuels et supports de présentation. Résultat : moins de temps derrière l'écran, plus sur le terrain."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels et supports de présentation sans passer par un graphiste."
      },
      "motsCles": "commercial, chargé d'affaires, vendeur, technico-commercial, prospection, propositions commerciales, relances, emailing, préparation de rendez-vous",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Partage son temps entre prospection, rendez-vous, propositions commerciales et relances.",
        "difficulte": "La préparation et le suivi écrits lui prennent du temps au détriment du terrain ; relances irrégulières.",
        "attente": "Préparer plus vite ses rendez-vous et produire des propositions et relances personnalisées, dans son style."
      }
    },
    {
      "id": "ia-003",
      "besoin": "Répondre plus vite et mieux aux demandes clients, sans exposer leurs données.",
      "categorie": "Accueil et relation client",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        }
      ],
      "domaine": "ia",
      "nom": "Gestionnaire ADV, service client",
      "ordre": 3,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Relation client et sécurisation des données.",
          "reponses": {
            "M2": "Modèles de réponses fiables et règles de sécurisation : données à ne jamais saisir, anonymisation. Paramétrer un agent personnalisé de réponses clients, nourri de ses procédures."
          },
          "argumentaire": "Le M2 construit des réponses types fiables et un assistant nourri de ses procédures, avec les règles RGPD : données à ne jamais saisir, anonymisation, vérification. Résultat : des réponses plus rapides et sûres."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Fiches et visuels d'information client."
      },
      "motsCles": "ADV, administration des ventes, service client, SAV, réclamations, réponses clients, devis, commandes, RGPD",
      "categories": [
        "Accueil et relation client"
      ],
      "besoinDetail": {
        "situation": "Traite chaque jour des demandes clients : commandes, devis, réclamations, suivi de livraison.",
        "difficulte": "Volume de réponses écrites important, ton à ajuster, données clients à protéger.",
        "attente": "Répondre plus vite et plus juste, avec des réponses types fiables et des règles claires sur les données."
      }
    },
    {
      "id": "ia-004",
      "besoin": "Gagner du temps sur la gestion, les devis et la communication de son activité.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        },
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "ia",
      "nom": "Auto-entrepreneur, indépendant(e)",
      "ordre": 4,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Gestion, devis, mails et prospection au quotidien.",
          "reponses": {
            "M2": "Devis, courriers, relances et prospection : des modèles réutilisables dès le lendemain. Paramétrer un agent personnalisé qui connaît son offre et ses tarifs."
          },
          "argumentaire": "Le parcours couvre tout son quotidien d'indépendant : devis, mails, relances et prospection au M2, avec un assistant qui connaît son offre et ses tarifs ; visuels et contenus audio pour communiquer au M3. Résultat : des modèles utilisables dès le lendemain."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels et contenus audio pour communiquer sur son activité."
      },
      "motsCles": "auto-entrepreneur, micro-entrepreneur, freelance, indépendant, devis, factures, communication, gagner du temps, ChatGPT, dirigeant",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Gère seul(e) toute son activité : production, devis, factures, mails, communication, prospection.",
        "difficulte": "Manque de temps pour l'administratif et la communication ; ne sait pas quels outils IA choisir ni quoi leur confier.",
        "attente": "Déléguer une partie de ces tâches à l'IA pour se recentrer sur son métier, sans risque pour ses clients."
      }
    },
    {
      "id": "ia-005",
      "besoin": "Déléguer une partie de l'administratif, de la communication et des sujets RH.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "ia",
      "nom": "Dirigeant(e) de TPE, artisan, commerçant",
      "ordre": 5,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Si sa priorité est l'administratif et la relation client.",
          "reponses": {
            "M2": "Devis, courriers, mails et organisation : des modèles réutilisables dès le lendemain. Paramétrer un agent personnalisé pour devis et mails clients."
          },
          "argumentaire": "Devis, courriers, mails et organisation au M2, avec un assistant personnalisé ; visuels et contenus audio pour communiquer au M3."
        },
        {
          "formation": "ia-rh",
          "pourquoi": "S'il gère lui-même le recrutement et le personnel.",
          "reponses": {
            "M2": "Offres d'emploi, fiches de poste, entretiens et cadre RGPD pour les données des salariés. Paramétrer un agent personnalisé pour les annonces et documents RH."
          },
          "argumentaire": "Offres d'emploi, fiches de poste, entretiens et cadre RGPD au M2, avec un assistant pour les documents RH. Il repart aussi avec les bases d'une charte d'usage de l'IA pour ses salariés."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels et contenus audio pour communiquer sur son activité."
      },
      "motsCles": "dirigeant, gérant, patron, chef d'entreprise, TPE, artisan, commerçant, administratif, recrutement, communication, déléguer, indépendant, commerce, artisanat",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Dirige une petite structure et porte lui-même l'administratif, la relation client, la communication, parfois le recrutement.",
        "difficulte": "Peu de temps et pas de service support ; entend parler de l'IA sans savoir par où commencer ni quels risques elle présente.",
        "attente": "Savoir ce que l'IA peut faire pour l'entreprise et déléguer rapidement des tâches concrètes, en toute sécurité."
      }
    },
    {
      "id": "ia-006",
      "besoin": "Concevoir plus vite et prouver la mise à jour de ses compétences à ses clients.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Formateur(trice) indépendant(e)",
      "ordre": 6,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "Le plus adapté : conception et animation de formations.",
          "reponses": {
            "M2": "Panel d'outils IA pour créer supports de cours, études de cas, quiz et évaluations. Paramétrer des agents personnalisés, par exemple : un assistant de conception de séquences à son image et un générateur de quiz.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 lui apprend à concevoir scénarios, supports, quiz et évaluations avec l'IA, et à créer ses propres assistants de conception. Le M3 ajoute illustrations, voix off et vidéos avec avatar pour ses supports. La certification valorise sa montée en compétence auprès de ses clients."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Illustrations et capsules audio pour ses supports."
      },
      "motsCles": "formateur indépendant, consultant formateur, conception pédagogique, supports de formation, quiz, scénarios pédagogiques, Qualiopi, veille",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Conçoit et anime ses formations pour différents clients, souvent seul(e), avec des délais courts.",
        "difficulte": "La conception de supports, quiz et évaluations prend beaucoup de temps ; ses clients attendent qu'il (elle) maîtrise l'IA.",
        "attente": "Concevoir plus vite et prouver la mise à jour de ses compétences, avec une certification reconnue."
      }
    },
    {
      "id": "ia-007",
      "besoin": "Intégrer l'IA dans ses séquences et savoir répondre aux stagiaires qui l'utilisent.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Formateur(trice) salarié(e) en organisme de formation",
      "ordre": 7,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "Pratiques pédagogiques avec l'IA.",
          "reponses": {
            "M2": "Panel d'outils IA pour concevoir supports, exercices et évaluations, et accompagner des stagiaires qui utilisent l'IA. Paramétrer des agents personnalisés, par exemple : un assistant de préparation de séances et un correcteur avec grille d'évaluation.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 traite exactement ses enjeux : concevoir des séquences avec l'IA, repenser l'évaluation quand les stagiaires utilisent l'IA, reconnaître un travail généré et respecter la propriété intellectuelle. Le M3 enrichit ses supports (visuels, audio, avatar). Résultat : des pratiques à jour et un discours clair face aux stagiaires."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Illustrations et capsules audio pour ses supports."
      },
      "motsCles": "formateur, organisme de formation, OF, séquences pédagogiques, évaluations, stagiaires, supports, avatar vidéo, voix off",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Anime des séquences en organisme de formation, face à des stagiaires qui utilisent déjà l'IA.",
        "difficulte": "Supports à renouveler, évaluations à repenser (travaux produits par l'IA), questions des stagiaires sur les outils.",
        "attente": "Intégrer l'IA dans ses séquences et ses évaluations, et savoir encadrer son usage par les stagiaires."
      }
    },
    {
      "id": "ia-008",
      "besoin": "Préparer cours, exercices et évaluations plus rapidement.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        }
      ],
      "domaine": "ia",
      "nom": "Enseignant(e) ou professeur",
      "ordre": 8,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "Préparation de cours et d'évaluations.",
          "reponses": {
            "M2": "Panel d'outils IA pour préparer cours, exercices et évaluations adaptés au niveau. Paramétrer des agents personnalisés, par exemple : un générateur d'exercices différenciés et un assistant de correction avec barème.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 lui fait produire cours, exercices différenciés et évaluations à partir de ses propres supports, et aborde la détection des travaux faits par l'IA. Résultat : du temps gagné sur la préparation et la correction."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Illustrations et capsules audio pour ses supports."
      },
      "motsCles": "enseignant, professeur, prof, lycée, collège, cours, exercices, évaluations, corrections, différenciation",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Prépare cours, exercices et évaluations pour des classes de niveaux hétérogènes.",
        "difficulte": "Temps de préparation et de correction important ; élèves qui rendent des travaux faits avec l'IA.",
        "attente": "Préparer plus vite des contenus adaptés au niveau, et savoir repérer et encadrer l'usage de l'IA."
      }
    },
    {
      "id": "ia-010",
      "besoin": "Former ses collègues ou accompagner des alternants avec des supports efficaces.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Formateur(trice) interne, tuteur",
      "ordre": 10,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "Concevoir des formations internes.",
          "reponses": {
            "M2": "Panel d'outils IA pour créer supports et évaluations à partir des documents de l'entreprise. Paramétrer des agents personnalisés, par exemple : un assistant de formation interne et un générateur de quiz de validation des acquis.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 lui montre comment transformer les documents de l'entreprise en supports de formation, quiz et évaluations, avec des assistants dédiés. Le M3 ajoute visuels et capsules audio ou vidéo. Résultat : des formations internes prêtes plus vite, sans être formateur de métier."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Illustrations et capsules audio pour ses supports."
      },
      "motsCles": "formateur interne, tuteur, maître d'apprentissage, alternants, intégration, onboarding, supports internes, modes opératoires",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Forme ses collègues ou accompagne des alternants en plus de son poste.",
        "difficulte": "Peu de temps pour créer des supports ; modes opératoires et documents internes à transformer en formation.",
        "attente": "Produire rapidement des supports et des quiz à partir des documents de l'entreprise."
      }
    },
    {
      "id": "ia-011",
      "besoin": "Gagner du temps sur les écrits RH et cadrer l'usage de l'IA par les salariés.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        },
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "ia",
      "nom": "RRH ou RH généraliste en PME",
      "ordre": 11,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Le plus adapté : écrits RH et cadre d'usage.",
          "reponses": {
            "M2": "Écrits RH, plan de formation et règles de sécurisation conformes au RGPD. Paramétrer un agent personnalisé RH, cadré par les règles de l'entreprise."
          },
          "argumentaire": "Le M2 traite les écrits RH à fort enjeu (contrats, notes, communication sensible), le RGPD et l'anonymisation, et la rédaction d'une charte d'usage de l'IA. Il crée aussi des assistants pour le recrutement, l'intégration et les entretiens. Résultat : du temps gagné et un cadre clair pour toute l'entreprise."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Communication interne et supports d'intégration."
      },
      "motsCles": "RRH, DRH, responsable RH, RH généraliste, PME, écrits RH, charte IA, RGPD, entretiens annuels, notes de service",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Porte seul(e) ou presque la fonction RH d'une PME : recrutement, entretiens, notes, plan de formation, relations sociales.",
        "difficulte": "Beaucoup d'écrits à fort enjeu ; salariés qui utilisent déjà l'IA sans cadre ; données personnelles à protéger (RGPD).",
        "attente": "Gagner du temps sur les écrits RH et poser un cadre d'usage de l'IA dans l'entreprise (charte, règles)."
      }
    },
    {
      "id": "ia-012",
      "besoin": "Accélérer annonces, trames d'entretien et synthèses candidats, sans biais.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Chargé(e) de recrutement, cabinet ou agence",
      "ordre": 12,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Recrutement et marque employeur.",
          "reponses": {
            "M2": "Annonces, trames d'entretien et synthèses ; repérer et limiter les biais, la décision reste humaine. Paramétrer un agent personnalisé de rédaction d'annonces et de trames d'entretien."
          },
          "argumentaire": "Le M2 lui fait construire un assistant de recrutement (annonces, trames d'entretien, synthèses) et apprend à repérer les biais et à garder la décision humaine. Le M3 ajoute des contenus de marque employeur (visuels, vidéos). Résultat : un recrutement plus rapide et plus sûr."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Contenus de marque employeur."
      },
      "motsCles": "chargé de recrutement, recruteur, talent acquisition, cabinet de recrutement, annonces, fiches de poste, trames d'entretien, synthèses candidats, biais",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Recrute en continu : annonces, tri des candidatures, entretiens, synthèses pour les managers ou les clients.",
        "difficulte": "Volume de rédaction élevé ; risque de biais et de discrimination si l'IA est mal utilisée.",
        "attente": "Accélérer annonces, trames d'entretien et synthèses, en gardant la décision humaine et sans biais."
      }
    },
    {
      "id": "ia-013",
      "besoin": "Rédiger courriers, notes et procédures plus vite.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        },
        {
          "formation": "bur-vba",
          "pourquoi": "Automatiser les tâches répétitives dans Excel."
        }
      ],
      "domaine": "ia",
      "nom": "Assistant(e) RH, administration du personnel",
      "ordre": 13,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Écrits RH et protection des données personnelles.",
          "reponses": {
            "M2": "Modèles de courriers et procédures ; protection des données personnelles. Paramétrer un agent personnalisé pour courriers et procédures RH."
          },
          "argumentaire": "Modèles de courriers et de procédures RH, anonymisation des données des salariés et vérification des productions au M2, avec une bibliothèque de prompts réutilisable."
        },
        {
          "formation": "ia-admin",
          "pourquoi": "Si son poste est surtout administratif.",
          "reponses": {
            "M2": "Courriers, notes, synthèses et organisation des documents. Paramétrer un agent personnalisé pour les courriers types."
          },
          "argumentaire": "Courriers, notes, synthèses et organisation des documents au M2, avec un assistant pour les courriers types."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Notes et affichages internes plus lisibles."
      },
      "motsCles": "assistant RH, gestionnaire RH, administration du personnel, contrats, courriers RH, procédures, notes, onboarding",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Gère l'administration du personnel : contrats, courriers, attestations, procédures, accueil des nouveaux.",
        "difficulte": "Écrits répétitifs ; données personnelles des salariés à manipuler avec précaution.",
        "attente": "Disposer de modèles fiables et rédiger plus vite, en protégeant les données des salariés."
      }
    },
    {
      "id": "ia-014",
      "besoin": "Construire plan de formation, supports d'intégration et formations internes.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ia",
      "nom": "Responsable formation, développement des compétences",
      "ordre": 14,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Plan de développement des compétences et intégration.",
          "reponses": {
            "M2": "Plan de développement des compétences et parcours d'intégration structurés avec l'IA. Paramétrer un agent personnalisé pour le plan de développement des compétences."
          },
          "argumentaire": "Le M2 l'aide à structurer plan de développement des compétences et parcours d'intégration, avec des assistants dédiés et une veille juridique automatisée. Le M3 produit des supports d'intégration visuels et audio."
        },
        {
          "formation": "ia-form",
          "pourquoi": "S'il conçoit et anime aussi des formations internes.",
          "reponses": {
            "M2": "Panel d'outils IA pour concevoir modules internes, supports et évaluations. Paramétrer des agents personnalisés, par exemple : un assistant de conception de modules et un générateur de questionnaires d'évaluation.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Scénarios pédagogiques, supports, quiz et évaluations au M2."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Supports d'intégration visuels et audio."
      },
      "motsCles": "responsable formation, développement des compétences, plan de développement des compétences, GPEC, parcours d'intégration, formations internes",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Pilote le plan de développement des compétences, l'intégration et parfois des formations internes.",
        "difficulte": "Recueil des besoins, plan, supports d'intégration : beaucoup de production pour peu de ressources.",
        "attente": "Structurer plus vite le plan et l'intégration, et produire des supports de formation internes."
      }
    },
    {
      "id": "ia-015",
      "besoin": "Être autonome sur les sujets RH du quotidien sans être spécialiste.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Organiser et piloter ses projets en équipe."
        }
      ],
      "domaine": "ia",
      "nom": "Manager qui assure la fonction RH",
      "ordre": 15,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Situations RH réelles, sans prérequis RH.",
          "reponses": {
            "M2": "Fiches de poste, entretiens, communications et cadre légal. Paramétrer un agent personnalisé pour ses documents RH courants."
          },
          "argumentaire": "Accessible sans prérequis RH : le M2 part de situations réelles (fiches de poste, entretiens, communications) et rappelle le cadre légal, avec un assistant pour ses documents courants. Résultat : il gagne en autonomie et en assurance sur ses sujets RH."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Communication d'équipe simple et efficace."
      },
      "motsCles": "manager, chef d'équipe, responsable d'équipe, entretiens annuels, recrutement, fonction RH, management, gestion, pilotage",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Manage une équipe et assure lui-même les sujets RH : recrutement, entretiens annuels, communication d'équipe.",
        "difficulte": "Pas de formation RH ; peur de l'erreur sur les aspects juridiques ou la confidentialité.",
        "attente": "Être autonome et sûr de lui sur les situations RH du quotidien, avec des documents fiables."
      }
    },
    {
      "id": "ia-016",
      "besoin": "Acquérir une compétence recherchée et la prouver sur son CV.",
      "categorie": "Emploi et transition",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        }
      ],
      "domaine": "ia",
      "nom": "Demandeur d'emploi, personne en reconversion",
      "ordre": 16,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "S'il vise un poste administratif ou commercial.",
          "reponses": {
            "M2": "Cas professionnels concrets qui préparent aux usages en entreprise. Paramétrer un agent personnalisé, compétence directement valorisable en entreprise."
          },
          "argumentaire": "Le M2 le met en situation sur des cas professionnels concrets (mails, comptes rendus, documents commerciaux, assistant personnalisé). La certification RS7232 rend la compétence visible sur son CV."
        },
        {
          "formation": "ia-form",
          "pourquoi": "S'il se reconvertit vers la formation.",
          "reponses": {
            "M2": "Panel d'outils IA pour créer supports de cours et évaluations, et se positionner comme formateur. Paramétrer des agents personnalisés, par exemple : un assistant de conception pédagogique et un générateur de quiz.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 lui apprend à concevoir des scénarios, supports et évaluations avec l'IA, un atout pour se positionner comme formateur."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Compétence multimédia en plus, valorisable en candidature."
      },
      "motsCles": "demandeur d'emploi, chômeur, France Travail, reconversion, transition professionnelle, CV, lettre de motivation, compétence recherchée, CPF",
      "categories": [
        "Emploi et transition"
      ],
      "besoinDetail": {
        "situation": "En recherche d'emploi ou en reconversion, souhaite renforcer son employabilité.",
        "difficulte": "L'IA est désormais attendue dans de nombreux postes ; difficile de prouver cette compétence sur un CV.",
        "attente": "Acquérir une compétence recherchée, la mettre en pratique sur des cas professionnels et la faire reconnaître par une certification."
      }
    },
    {
      "id": "ia-017",
      "besoin": "Synthèses, courriers aux clients et procédures plus rapides, sans exposer les chiffres.",
      "categorie": "Comptabilité",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        },
        {
          "formation": "bur-vba",
          "pourquoi": "Automatiser les tâches répétitives dans Excel."
        }
      ],
      "domaine": "ia",
      "nom": "Comptable, assistant(e) de gestion",
      "ordre": 17,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Écrits de gestion et sécurisation des données chiffrées.",
          "reponses": {
            "M2": "Courriers, synthèses et procédures ; anonymiser les données financières avant toute saisie. Paramétrer un agent personnalisé pour courriers clients et procédures."
          },
          "argumentaire": "Le M2 travaille courriers, synthèses et procédures, avec une règle centrale : anonymiser les données financières avant toute saisie et vérifier chaque chiffre. Résultat : des écrits plus rapides sans risque pour les clients."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Tableaux et notes plus lisibles pour les clients ou la direction."
      },
      "motsCles": "comptable, aide-comptable, assistant de gestion, cabinet comptable, synthèses financières, courriers clients, procédures, confidentialité",
      "categories": [
        "Comptabilité"
      ],
      "besoinDetail": {
        "situation": "Produit synthèses, courriers aux clients et procédures dans un cabinet ou un service comptable.",
        "difficulte": "Données financières confidentielles ; méfiance envers des outils qui peuvent se tromper sur les chiffres.",
        "attente": "Rédiger plus vite tout en sachant anonymiser les données et vérifier les résultats."
      }
    },
    {
      "id": "ia-018",
      "besoin": "Courriers et comptes rendus plus rapides, avec des données très sensibles.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "ia",
      "nom": "Secrétaire ou assistant(e) en cabinet (médical, juridique, libéral)",
      "ordre": 18,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Écrits du quotidien avec une exigence forte de confidentialité.",
          "reponses": {
            "M2": "Modèles de courriers et de comptes rendus sans données identifiantes ; règles de confidentialité et vérification. Paramétrer un agent personnalisé pour les courriers types, sans données identifiantes."
          },
          "argumentaire": "Le M2 construit des modèles de courriers et de comptes rendus sans données identifiantes, avec des règles de confidentialité strictes et une vérification systématique. Résultat : du temps gagné dans le respect du secret professionnel."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Affichages et documents d'information pour la patientèle ou la clientèle."
      },
      "motsCles": "secrétaire médicale, assistante juridique, cabinet libéral, notaire, avocat, comptes rendus, courriers, données sensibles, secret professionnel, santé, social",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Rédige courriers et comptes rendus dans un cabinet médical, juridique ou libéral.",
        "difficulte": "Données très sensibles, secret professionnel ; aucune erreur ni fuite possible.",
        "attente": "Gagner du temps sur les écrits courants avec des règles strictes : rien d'identifiant dans l'outil, tout est vérifié."
      }
    },
    {
      "id": "ia-019",
      "besoin": "Gérer à la fois l'administratif, l'accueil des salariés et la communication interne.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        },
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "ia",
      "nom": "Responsable administratif(ve) et services généraux (office manager)",
      "ordre": 19,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Si sa priorité est l'administratif et l'organisation.",
          "reponses": {
            "M2": "Courriers, comptes rendus, organisation et suivi des dossiers. Paramétrer un agent personnalisé pour l'organisation et le suivi des dossiers."
          },
          "argumentaire": "Courriers, comptes rendus, suivi des dossiers et pistes d'automatisation au M2, avec un assistant personnalisé."
        },
        {
          "formation": "ia-rh",
          "pourquoi": "S'il gère aussi l'intégration et le suivi des salariés.",
          "reponses": {
            "M2": "Livret d'accueil, communications internes, procédures RH et données personnelles. Paramétrer un agent personnalisé d'accueil des nouveaux salariés."
          },
          "argumentaire": "Livret d'accueil, communication interne, procédures RH et charte d'usage de l'IA au M2."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels et messages audio pour la communication interne."
      },
      "motsCles": "office manager, services généraux, responsable administratif, accueil des salariés, communication interne, achats, organisation",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Gère à la fois l'administratif, les services généraux, l'accueil des salariés et la communication interne.",
        "difficulte": "Tâches très variées et urgentes ; difficulté à tout organiser et documenter.",
        "attente": "Gagner du temps sur les écrits et l'organisation, et diffuser de bonnes pratiques de l'IA en interne."
      }
    },
    {
      "id": "ia-020",
      "besoin": "Notes aux salariés, procédures et réponses aux questions sur la paie.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        },
        {
          "formation": "bur-vba",
          "pourquoi": "Automatiser les tâches répétitives dans Excel."
        }
      ],
      "domaine": "ia",
      "nom": "Gestionnaire de paie",
      "ordre": 20,
      "parcours": [
        {
          "formation": "ia-rh",
          "pourquoi": "Le plus adapté : écrits RH et données personnelles.",
          "reponses": {
            "M2": "Notes d'information, procédures et réponses types ; protection des données des salariés. Paramétrer un agent personnalisé de réponses aux questions de paie."
          },
          "argumentaire": "Notes d'information, procédures et réponses types aux salariés au M2, avec anonymisation des données et vérification systématique sur un sujet réglementé."
        },
        {
          "formation": "ia-admin",
          "pourquoi": "Si son poste est surtout administratif et comptable.",
          "reponses": {
            "M2": "Synthèses, courriers et procédures avec vérification systématique. Paramétrer un agent personnalisé pour procédures et synthèses."
          },
          "argumentaire": "Synthèses, courriers et procédures au M2."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Notes et visuels explicatifs pour les salariés."
      },
      "motsCles": "gestionnaire de paie, paie, bulletins de salaire, notes aux salariés, procédures paie, questions salariés, confidentialité",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Établit la paie et répond aux questions des salariés : notes d'information, procédures, explications.",
        "difficulte": "Sujet réglementé où l'erreur coûte cher ; données personnelles et salariales très sensibles.",
        "attente": "Produire plus vite notes et réponses types, avec une vérification systématique et des données protégées."
      }
    },
    {
      "id": "ia-021",
      "besoin": "Annonces, comptes rendus de visite et relances clients plus rapides.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "ia",
      "nom": "Agent immobilier, négociateur",
      "ordre": 21,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Rédaction commerciale et suivi des clients.",
          "reponses": {
            "M2": "Annonces attractives, comptes rendus de visite, relances et propositions personnalisées. Paramétrer un agent personnalisé de rédaction d'annonces à son style."
          },
          "argumentaire": "Le M2 lui fait produire annonces attractives, comptes rendus de visite et relances, et créer un assistant qui rédige ses annonces dans son style. Le M3 ajoute visuels d'annonces et supports de présentation des biens. Résultat : plus de temps pour les visites et la négociation."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels d'annonces et supports de présentation des biens."
      },
      "motsCles": "agent immobilier, négociateur, mandataire, annonces immobilières, comptes rendus de visite, relances, descriptifs de biens",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Rédige annonces, comptes rendus de visite, relances et propositions pour vendeurs et acquéreurs.",
        "difficulte": "Beaucoup d'écrits commerciaux à personnaliser ; besoin de se démarquer avec des annonces attractives.",
        "attente": "Rédiger plus vite des annonces et un suivi client soignés, dans son propre style."
      }
    },
    {
      "id": "ia-022",
      "besoin": "Répondre par écrit, clairement et rapidement, aux demandes.",
      "categorie": "Accueil et relation client",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "ia",
      "nom": "Chargé(e) d'accueil, conseiller(ère) clientèle",
      "ordre": 22,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Relation client écrite au quotidien.",
          "reponses": {
            "M2": "Réponses types adaptables, reformulation, ton juste et vérification. Paramétrer un agent personnalisé de réponses types, nourri des informations de la structure."
          },
          "argumentaire": "Le M2 construit des réponses types adaptables et un assistant nourri des informations de la structure, avec reformulation et vérification. Le M3 l'aide à créer fiches pratiques et affichages. Résultat : des réponses plus rapides, claires et homogènes."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Fiches pratiques et affichages pour le public."
      },
      "motsCles": "chargé d'accueil, hôte d'accueil, conseiller clientèle, relation client, standard, réponses écrites, mails, FAQ",
      "categories": [
        "Accueil et relation client"
      ],
      "besoinDetail": {
        "situation": "Répond chaque jour par écrit aux demandes du public ou des clients : mails, messages, FAQ.",
        "difficulte": "Demandes répétitives, ton à adapter, informations à ne pas divulguer.",
        "attente": "Répondre plus vite, clairement et avec le bon ton, grâce à des réponses types adaptables."
      }
    },
    {
      "id": "ia-023",
      "besoin": "Procédures, preuves, questionnaires et bilans plus rapides.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        },
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "ia",
      "nom": "Responsable qualité (dont Qualiopi)",
      "ordre": 23,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "En organisme de formation : qualité et pratiques pédagogiques.",
          "reponses": {
            "M2": "Panel d'outils IA pour concevoir questionnaires et évaluations, et analyser les retours. Paramétrer des agents personnalisés, par exemple : un agent qualité nourri des procédures de l'organisme et un assistant d'analyse des questionnaires de satisfaction.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 traite questionnaires, évaluations et analyse des retours, et permet de créer un assistant qualité nourri des procédures de l'organisme, utile pour Qualiopi."
        },
        {
          "formation": "ia-admin",
          "pourquoi": "En entreprise : procédures et documents qualité.",
          "reponses": {
            "M2": "Rédaction et mise à jour de procédures, synthèses et comptes rendus d'audit. Paramétrer un agent personnalisé pour rédiger et mettre à jour les procédures."
          },
          "argumentaire": "Rédaction et mise à jour des procédures, synthèses et comptes rendus d'audit au M2, avec un assistant dédié."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Supports visuels pour présenter procédures et résultats."
      },
      "motsCles": "responsable qualité, Qualiopi, démarche qualité, procédures, preuves, audits, questionnaires de satisfaction, bilans, ISO",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Pilote la démarche qualité (Qualiopi, ISO) : procédures, preuves, questionnaires, bilans, audits.",
        "difficulte": "Production documentaire lourde et à tenir à jour ; analyse des questionnaires de satisfaction chronophage.",
        "attente": "Rédiger et mettre à jour plus vite les documents qualité et analyser les retours, de manière fiable."
      }
    },
    {
      "id": "ia-024",
      "besoin": "Préparer ses entretiens, synthèses et supports d'atelier.",
      "categorie": "Santé et social",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "ia",
      "nom": "Conseiller(ère) en insertion, orientation, bilan de compétences",
      "ordre": 24,
      "parcours": [
        {
          "formation": "ia-form",
          "pourquoi": "Ateliers collectifs et accompagnement.",
          "reponses": {
            "M2": "Panel d'outils IA pour créer supports d'atelier et outils d'évaluation des compétences. Paramétrer des agents personnalisés, par exemple : un assistant de préparation d'ateliers et un générateur d'exercices d'auto-positionnement.",
            "M3": "Illustrations et capsules audio pour ses supports."
          },
          "argumentaire": "Le M2 aide à concevoir supports d'atelier et outils d'auto-positionnement avec l'IA, et à en parler aux bénéficiaires."
        },
        {
          "formation": "ia-rh",
          "pourquoi": "Bilans, projets professionnels et recherche d'emploi.",
          "reponses": {
            "M2": "Synthèses de bilan, CV et lettres travaillés avec les bénéficiaires, sans biais. Paramétrer un agent personnalisé d'aide aux CV et lettres."
          },
          "argumentaire": "Synthèses, CV et lettres travaillés avec les bénéficiaires au M2, en repérant les biais et en protégeant leurs données."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Supports d'atelier visuels et audio."
      },
      "motsCles": "conseiller en insertion, CIP, conseiller d'orientation, bilan de compétences, accompagnement, entretiens, synthèses, ateliers, formation",
      "categories": [
        "Santé et social"
      ],
      "besoinDetail": {
        "situation": "Accompagne des publics en insertion, orientation ou bilan : entretiens, synthèses, ateliers collectifs.",
        "difficulte": "Temps de rédaction important ; données personnelles des bénéficiaires ; risque de biais dans les synthèses.",
        "attente": "Préparer plus vite ateliers et synthèses, et aider les bénéficiaires à utiliser l'IA pour leurs CV et lettres."
      }
    },
    {
      "id": "ia-025",
      "besoin": "Menus, affichages, mails clients et réponses aux avis en ligne.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "ia",
      "nom": "Commerçant(e), restaurateur",
      "ordre": 25,
      "parcours": [
        {
          "formation": "ia-admin",
          "pourquoi": "Gestion et relation client au quotidien.",
          "reponses": {
            "M2": "Réponses aux avis, mails clients, fiches produits et organisation. Paramétrer un agent personnalisé pour répondre aux avis et aux clients."
          },
          "argumentaire": "Le M2 couvre son quotidien : réponses aux avis, mails clients, fiches produits, avec un assistant pour répondre aux clients. Le M3 lui fait créer visuels de menus, d'offres et d'affichages. Résultat : une communication régulière sans y passer ses soirées."
        }
      ],
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données.",
        "M3": "Visuels de menus, d'offres et d'affichages en boutique."
      },
      "motsCles": "commerçant, restaurateur, restaurant, café, bar, menus, affichage, avis en ligne, Google, mails clients, dirigeant, indépendant",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Tient un commerce ou un restaurant et gère seul(e) l'affichage, les menus, les mails et les avis en ligne.",
        "difficulte": "Peu de temps en dehors du service ; avis clients à traiter ; communication souvent laissée de côté.",
        "attente": "Gagner du temps sur la relation client et la communication, avec des modèles réutilisables."
      }
    },
    {
      "id": "pao-001",
      "besoin": "Produire en interne plaquettes, affiches, visuels et photos retouchées.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "paoia-design",
          "pourquoi": "Créer des visuels avec les outils IA du design (Midjourney, Ideogram)."
        },
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        }
      ],
      "domaine": "pao",
      "nom": "Chargé(e) ou assistant(e) de communication",
      "ordre": 1,
      "parcours": [
        {
          "formation": "pao-indesign",
          "pourquoi": "Le plus adapté pour ses plaquettes, affiches et documents imprimés.",
          "reponses": {
            "Formation": "Mettre en page des publications professionnelles prêtes à imprimer ; certification Tosa."
          },
          "argumentaire": "Mise en page professionnelle prête à imprimer, avec certification Tosa."
        },
        {
          "formation": "pao-photoshop-init",
          "pourquoi": "À proposer pour retoucher et composer ses images pour tous ses supports.",
          "reponses": {
            "Formation": "Retouches et compositions d'images pour tous ses supports ; certification Tosa."
          }
        },
        {
          "formation": "pao-illustrator",
          "pourquoi": "À proposer pour créer logos, pictogrammes et illustrations vectorielles nets à toutes les tailles.",
          "reponses": {
            "Formation": "Illustrations vectorielles et graphiques nets à toutes les tailles ; certification Tosa."
          }
        }
      ],
      "reponses": {},
      "motsCles": "chargé de communication, assistant de communication, plaquettes, affiches, flyers, print, retouche photo, Adobe, InDesign, Photoshop, Illustrator",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Produit en interne plaquettes, affiches, visuels et photos pour la communication de la structure.",
        "difficulte": "Outils mal maîtrisés, dépendance à un prestataire, rendu pas toujours professionnel.",
        "attente": "Maîtriser les logiciels de référence pour produire soi-même des supports prêts à imprimer ou à publier."
      }
    },
    {
      "id": "pao-002",
      "besoin": "Des prises de vue maîtrisées et des images retouchées à un niveau professionnel.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "paoia-adobe",
          "pourquoi": "L'IA intégrée à Photoshop et Illustrator pour produire plus vite."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        }
      ],
      "domaine": "pao",
      "nom": "Photographe ou vidéaste indépendant",
      "ordre": 2,
      "parcours": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "À proposer pour maîtriser exposition, lumière et cadrage, en photo comme en vidéo.",
          "reponses": {
            "Formation": "De l'exposition au cadrage : des prises de vue photo et vidéo professionnelles."
          }
        },
        {
          "formation": "pao-lightroom",
          "pourquoi": "À proposer pour trier son catalogue et développer ses séries de photos de façon homogène.",
          "reponses": {
            "Formation": "Organiser son catalogue et développer ses photos de façon homogène."
          }
        },
        {
          "formation": "pao-photoshop-perf",
          "pourquoi": "Pour les retouches avancées.",
          "reponses": {
            "Formation": "Retouches fines, montages et compositions avancées."
          },
          "argumentaire": "Retouches fines, montages et compositions."
        }
      ],
      "reponses": {},
      "motsCles": "photographe, vidéaste, retouche, développement photo, Lightroom, Photoshop, exposition, cadrage, éclairage, indépendant, créatif",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Photographe ou vidéaste indépendant(e) qui veut monter en gamme.",
        "difficulte": "Rendu irrégulier, temps de post-production long, retouches avancées mal maîtrisées.",
        "attente": "Des prises de vue maîtrisées et une post-production efficace, à un niveau professionnel."
      }
    },
    {
      "id": "pao-003",
      "besoin": "De belles photos de produits et des visuels pour vendre, sans budget logiciel.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "pao",
      "nom": "Commerçant(e), artisan, e-commerçant(e)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Le plus adapté : réussir ses photos de produits.",
          "reponses": {
            "Formation": "Photographier ses produits et ses réalisations avec un rendu professionnel."
          },
          "argumentaire": "Il apprend à photographier ses produits et réalisations avec un rendu professionnel (lumière, cadrage, exposition). Résultat : des photos qui font vendre."
        },
        {
          "formation": "pao-lightroom",
          "pourquoi": "À proposer pour retoucher rapidement et de façon cohérente toute une série de photos produits.",
          "reponses": {
            "Formation": "Retouches rapides et cohérentes sur toute une série de photos produits."
          }
        },
        {
          "formation": "pao-affinity",
          "pourquoi": "Pour un logiciel complet et gratuit.",
          "reponses": {
            "Formation": "Retouche, visuels et mise en page avec un logiciel gratuit."
          },
          "argumentaire": "Retouche, visuels et mise en page."
        }
      ],
      "reponses": {},
      "motsCles": "commerçant, artisan, e-commerçant, photos produits, fiches produits, boutique en ligne, logiciel gratuit, Affinity, commerce, artisanat",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Commerçant(e), artisan ou e-commerçant(e) qui photographie lui-même ses produits.",
        "difficulte": "Photos peu valorisantes, pas de budget logiciel ni de photographe.",
        "attente": "De belles photos produits et des visuels qui font vendre, avec des outils accessibles."
      }
    },
    {
      "id": "pao-004",
      "besoin": "Acquérir les logiciels de référence et les prouver sur son CV.",
      "categorie": "Emploi et transition",
      "complements": [
        {
          "formation": "paoia-design",
          "pourquoi": "Créer des visuels avec les outils IA du design (Midjourney, Ideogram)."
        }
      ],
      "domaine": "pao",
      "nom": "Personne en reconversion vers le graphisme",
      "ordre": 4,
      "parcours": [
        {
          "formation": "pao-photoshop-init",
          "pourquoi": "La base du métier : la retouche d’image.",
          "reponses": {
            "Formation": "Retouches et compositions d'images ; certification Tosa reconnue."
          },
          "argumentaire": "La base du métier : retouches et compositions d'images, avec une certification Tosa reconnue par les employeurs."
        },
        {
          "formation": "pao-illustrator",
          "pourquoi": "Pour la création graphique vectorielle.",
          "reponses": {
            "Formation": "Logos, illustrations et graphiques vectoriels ; certification Tosa."
          },
          "argumentaire": "Pour la création graphique vectorielle : logos, illustrations et graphiques, avec certification Tosa."
        },
        {
          "formation": "pao-indesign",
          "pourquoi": "Pour la mise en page professionnelle.",
          "reponses": {
            "Formation": "Mise en page de documents imprimés et numériques ; certification Tosa."
          },
          "argumentaire": "Pour la mise en page professionnelle de documents imprimés et numériques, avec certification Tosa."
        }
      ],
      "reponses": {},
      "motsCles": "reconversion, graphiste, infographiste, PAO, Adobe, certification Tosa, CV, portfolio",
      "categories": [
        "Emploi et transition"
      ],
      "besoinDetail": {
        "situation": "En reconversion vers le graphisme ou l'infographie.",
        "difficulte": "Les employeurs attendent la maîtrise des logiciels Adobe ; difficile de le prouver sans diplôme du métier.",
        "attente": "Maîtriser les logiciels de référence et les faire reconnaître par une certification."
      }
    },
    {
      "id": "pao-005",
      "besoin": "Créer ses affiches, flyers et visuels sans abonnement payant.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "pao",
      "nom": "Association ou petite structure sans budget logiciel",
      "ordre": 5,
      "parcours": [
        {
          "formation": "pao-affinity",
          "pourquoi": "Le plus adapté : un logiciel gratuit et complet.",
          "reponses": {
            "Formation": "Retouche photo, illustration et mise en page avec Affinity, gratuit."
          },
          "argumentaire": "Affinity, logiciel gratuit et complet, couvre retouche photo, illustration et mise en page. Résultat : des supports professionnels sans abonnement."
        },
        {
          "formation": "pao-prise-vue",
          "pourquoi": "À proposer pour réussir les photos et vidéos de ses événements.",
          "reponses": {
            "Formation": "Photos et vidéos d’événements mieux cadrées et mieux exposées."
          }
        }
      ],
      "reponses": {},
      "motsCles": "association, petite structure, sans budget, logiciel gratuit, Affinity, affiches, flyers, alternative à Adobe, entreprise",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Association ou petite structure qui produit ses propres supports.",
        "difficulte": "Pas de budget pour des abonnements logiciels ni pour un graphiste.",
        "attente": "Créer affiches, flyers et visuels avec un logiciel complet et gratuit."
      }
    },
    {
      "id": "paoia-001",
      "besoin": "Gagner du temps sur la création grâce à l’IA, sans quitter ses outils.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "pao-photoshop-perf",
          "pourquoi": "Retouches et compositions avancées."
        },
        {
          "formation": "ia-graphiste",
          "pourquoi": "Parcours IA certifiant : textes et visuels avec les outils IA du design."
        }
      ],
      "domaine": "paoia",
      "nom": "Graphiste ou maquettiste utilisant la suite Adobe",
      "ordre": 1,
      "parcours": [
        {
          "formation": "paoia-adobe",
          "pourquoi": "Le plus adapté : l’IA intégrée à ses logiciels Adobe.",
          "reponses": {
            "Formation": "Fonctions IA de Photoshop, Illustrator et de la suite Adobe pour produire plus vite."
          },
          "argumentaire": "Il apprend à utiliser les fonctions IA de Photoshop, Illustrator et de la suite Adobe (remplissage génératif, Firefly…) dans son travail habituel. Résultat : du temps gagné sans changer d'outils."
        },
        {
          "formation": "paoia-design",
          "pourquoi": "À proposer pour explorer les générateurs d'images IA (Midjourney, Ideogram) et trouver de nouvelles pistes créatives.",
          "reponses": {
            "Formation": "Générer des visuels et des pistes créatives avec les solutions IA du design graphique."
          }
        }
      ],
      "reponses": {},
      "motsCles": "graphiste, maquettiste, directeur artistique, Adobe Firefly, Photoshop IA, Illustrator IA, remplissage génératif, gagner du temps",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Graphiste ou maquettiste qui travaille au quotidien avec Photoshop, Illustrator et la suite Adobe.",
        "difficulte": "Délais serrés ; découvre les fonctions IA d'Adobe sans savoir bien les utiliser.",
        "attente": "Gagner du temps grâce à l'IA intégrée à ses logiciels, sans changer d'outils."
      }
    },
    {
      "id": "paoia-002",
      "besoin": "Produire plus de visuels percutants, plus vite.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        },
        {
          "formation": "ia-graphiste",
          "pourquoi": "Parcours IA certifiant : textes et visuels de communication avec l'IA."
        }
      ],
      "domaine": "paoia",
      "nom": "Chargé(e) de communication ou de marketing",
      "ordre": 2,
      "parcours": [
        {
          "formation": "paoia-design",
          "pourquoi": "Le plus adapté : créer des visuels avec l’IA.",
          "reponses": {
            "Formation": "Visuels de campagne et de réseaux sociaux créés avec les outils IA."
          },
          "argumentaire": "Créer visuels de campagne et de réseaux sociaux avec Midjourney et Ideogram. Résultat : plus de visuels, plus vite."
        },
        {
          "formation": "paoia-adobe",
          "pourquoi": "S’il travaille déjà avec la suite Adobe.",
          "reponses": {
            "Formation": "Automatiser et accélérer ses créations dans Adobe grâce à l’IA."
          },
          "argumentaire": "Accélérer ses créations grâce à l'IA intégrée."
        }
      ],
      "reponses": {},
      "motsCles": "chargé de communication, marketing, visuels de campagne, réseaux sociaux, Midjourney, Ideogram, bannières",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Produit visuels de campagne et contenus pour les réseaux sociaux.",
        "difficulte": "Besoin de beaucoup de visuels, vite, sans graphiste dédié.",
        "attente": "Créer plus de visuels percutants et originaux grâce à l'IA."
      }
    },
    {
      "id": "paoia-003",
      "besoin": "Des visuels originaux pour se démarquer, sans graphiste.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "paoia",
      "nom": "Créateur(trice) de contenu, auto-entrepreneur créatif",
      "ordre": 3,
      "parcours": [
        {
          "formation": "paoia-design",
          "pourquoi": "Le plus adapté : visuels originaux avec l’IA.",
          "reponses": {
            "Formation": "Créer des visuels uniques pour ses contenus grâce à l’IA."
          },
          "argumentaire": "Il apprend à créer des visuels uniques pour ses contenus avec les générateurs d'images IA, sans graphiste."
        }
      ],
      "reponses": {},
      "motsCles": "créateur de contenu, auto-entrepreneur créatif, visuels originaux, illustrations, Midjourney, Ideogram, sans graphiste, indépendant",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Créateur(trice) de contenu ou auto-entrepreneur créatif.",
        "difficulte": "Besoin de visuels originaux pour se démarquer, sans budget graphiste.",
        "attente": "Produire des visuels uniques avec les générateurs d'images IA."
      }
    },
    {
      "id": "ped-001",
      "besoin": "Des modules interactifs qui le démarquent.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ped",
      "nom": "Formateur(trice) indépendant(e)",
      "ordre": 1,
      "parcours": [
        {
          "formation": "ped-genially",
          "pourquoi": "Le plus adapté : contenus interactifs.",
          "reponses": {
            "Formation": "Scénariser et produire des modules interactifs avec Genially."
          },
          "argumentaire": "Scénariser et produire des modules interactifs avec Genially. Résultat : une offre qui se démarque et des apprenants plus impliqués."
        }
      ],
      "reponses": {},
      "motsCles": "formateur indépendant, modules interactifs, Genially, e-learning, scénarisation, se démarquer",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Formateur(trice) indépendant(e) qui conçoit ses propres modules.",
        "difficulte": "Supports classiques peu engageants ; difficile de se démarquer face à la concurrence.",
        "attente": "Créer des modules interactifs qui valorisent son offre et engagent les apprenants."
      }
    },
    {
      "id": "ped-002",
      "besoin": "Former à distance avec des contenus engageants.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "ped",
      "nom": "Formateur(trice) interne, responsable formation",
      "ordre": 2,
      "parcours": [
        {
          "formation": "ped-genially",
          "pourquoi": "Le plus adapté : modules e-learning internes.",
          "reponses": {
            "Formation": "Modules interactifs, quiz et parcours pour la formation interne."
          },
          "argumentaire": "Modules e-learning, quiz et parcours interactifs pour la formation interne, faciles à diffuser à distance."
        }
      ],
      "reponses": {},
      "motsCles": "formateur interne, responsable formation, formation à distance, e-learning, contenus interactifs, Genially",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Formateur(trice) interne ou responsable formation, de plus en plus en distanciel.",
        "difficulte": "Contenus à distance peu engageants ; pas d'outil auteur maîtrisé.",
        "attente": "Produire des modules e-learning, quiz et parcours interactifs pour la formation interne."
      }
    },
    {
      "id": "ped-003",
      "besoin": "Rendre ses cours plus interactifs.",
      "categorie": "Formation",
      "complements": [],
      "domaine": "ped",
      "nom": "Enseignant(e)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "ped-genially",
          "pourquoi": "Le plus adapté : cours et quiz interactifs.",
          "reponses": {
            "Formation": "Supports de cours, jeux et quiz interactifs."
          },
          "argumentaire": "Supports de cours, jeux et quiz interactifs, y compris des escape games pédagogiques."
        }
      ],
      "reponses": {},
      "motsCles": "enseignant, professeur, cours interactifs, Genially, escape game pédagogique, quiz",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Enseignant(e) qui veut renouveler ses supports de cours.",
        "difficulte": "Élèves peu impliqués face à des supports statiques.",
        "attente": "Créer des cours, jeux et quiz interactifs qui captent l'attention."
      }
    },
    {
      "id": "ped-004",
      "besoin": "Créer des présentations et contenus interactifs.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        }
      ],
      "domaine": "ped",
      "nom": "Chargé(e) de communication",
      "ordre": 4,
      "parcours": [
        {
          "formation": "ped-genially",
          "pourquoi": "Pour des contenus qui captent l’attention.",
          "reponses": {
            "Formation": "Présentations, infographies et contenus interactifs."
          },
          "argumentaire": "Pour des présentations, infographies et contenus interactifs qui captent l'attention."
        }
      ],
      "reponses": {},
      "motsCles": "chargé de communication, présentations interactives, infographies, Genially, contenus engageants",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Chargé(e) de communication qui produit présentations et contenus pour le web ou l'interne.",
        "difficulte": "Contenus statiques qui retiennent peu l'attention.",
        "attente": "Créer présentations, infographies et contenus interactifs et engageants."
      }
    },
    {
      "id": "prj-001",
      "besoin": "Planifier, suivre et piloter ses projets.",
      "categorie": "Gestion et management",
      "complements": [
        {
          "formation": "col-notion",
          "pourquoi": "Organiser et centraliser son travail au même endroit."
        }
      ],
      "domaine": "prj",
      "nom": "Chef(fe) de projet, chargé(e) de projet",
      "ordre": 1,
      "parcours": [
        {
          "formation": "prj-msproject",
          "pourquoi": "Le plus adapté pour un planning détaillé.",
          "reponses": {
            "Formation": "Planning, ressources et suivi d’avancement avec MS Project."
          },
          "argumentaire": "Tâches, dépendances, ressources et suivi d'avancement dans MS Project. Résultat : les retards se voient tout de suite."
        },
        {
          "formation": "prj-agilite",
          "pourquoi": "Pour des projets qui évoluent souvent.",
          "reponses": {
            "Formation": "Méthodes agiles et outils collaboratifs en ligne."
          },
          "argumentaire": "Méthodes agiles et outils collaboratifs en ligne."
        }
      ],
      "reponses": {},
      "motsCles": "chef de projet, chargé de projet, planning, Gantt, MS Project, suivi, ressources, pilotage",
      "categories": [
        "Gestion et management"
      ],
      "besoinDetail": {
        "situation": "Pilote un ou plusieurs projets : planning, ressources, suivi d'avancement.",
        "difficulte": "Planning tenu sur Excel ou à la main, difficile à mettre à jour ; retards repérés trop tard.",
        "attente": "Planifier, suivre et piloter ses projets avec une méthode et un outil adaptés."
      }
    },
    {
      "id": "prj-002",
      "besoin": "Organiser le travail de l’équipe et suivre les priorités.",
      "categorie": "Gestion et management",
      "complements": [
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        }
      ],
      "domaine": "prj",
      "nom": "Manager d’équipe",
      "ordre": 2,
      "parcours": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Le plus adapté : piloter en équipe.",
          "reponses": {
            "Formation": "Rituels, tableaux de suivi et priorisation avec les méthodes agiles."
          },
          "argumentaire": "Rituels d'équipe, tableaux de suivi (Kanban, Trello) et priorisation avec les méthodes agiles. Résultat : une équipe qui sait quoi faire et dans quel ordre."
        }
      ],
      "reponses": {},
      "motsCles": "manager, chef d'équipe, agilité, Scrum, Kanban, priorités, Trello, outils collaboratifs",
      "categories": [
        "Gestion et management"
      ],
      "besoinDetail": {
        "situation": "Manage une équipe et répartit le travail au quotidien.",
        "difficulte": "Priorités qui changent, manque de visibilité sur qui fait quoi, réunions peu efficaces.",
        "attente": "Organiser le travail de l'équipe et suivre les priorités avec des méthodes simples et partagées."
      }
    },
    {
      "id": "prj-003",
      "besoin": "Tenir les délais et coordonner les intervenants.",
      "categorie": "Technique",
      "complements": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Analyser et visualiser ses données dans Excel."
        }
      ],
      "domaine": "prj",
      "nom": "Conducteur(trice) de travaux, responsable de production",
      "ordre": 3,
      "parcours": [
        {
          "formation": "prj-msproject",
          "pourquoi": "Le plus adapté : planning et ressources.",
          "reponses": {
            "Formation": "Planning de chantier ou de production et suivi des ressources."
          },
          "argumentaire": "Construire un planning de chantier ou de production, gérer les dépendances et les ressources, suivre l'avancement. Résultat : des délais mieux tenus."
        }
      ],
      "reponses": {},
      "motsCles": "conducteur de travaux, responsable de production, chantier, planning, délais, coordination, MS Project, bâtiment, industrie, gestion, management, pilotage",
      "categories": [
        "Technique"
      ],
      "besoinDetail": {
        "situation": "Coordonne un chantier ou une production avec plusieurs intervenants.",
        "difficulte": "Délais serrés, dépendances entre tâches, ressources à répartir.",
        "attente": "Construire et suivre un planning fiable pour tenir les délais et coordonner les équipes."
      }
    },
    {
      "id": "prj-004",
      "besoin": "Mener ses projets avec des partenaires multiples.",
      "categorie": "Gestion et management",
      "complements": [
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        }
      ],
      "domaine": "prj",
      "nom": "Chargé(e) de mission (association, collectivité)",
      "ordre": 4,
      "parcours": [
        {
          "formation": "prj-agilite",
          "pourquoi": "Le plus adapté : projets partagés et évolutifs.",
          "reponses": {
            "Formation": "Organiser et piloter des projets partenariaux avec des outils en ligne."
          },
          "argumentaire": "Méthodes souples et outils en ligne pour organiser des projets partenariaux qui évoluent."
        }
      ],
      "reponses": {},
      "motsCles": "chargé de mission, association, collectivité, partenaires, projets multi-acteurs, agilité, outils en ligne, entreprise",
      "categories": [
        "Gestion et management"
      ],
      "besoinDetail": {
        "situation": "Mène des projets avec des partenaires multiples (association, collectivité).",
        "difficulte": "Acteurs nombreux, informations dispersées, projets qui évoluent en cours de route.",
        "attente": "Organiser et piloter des projets partagés avec des méthodes souples et des outils en ligne."
      }
    },
    {
      "id": "rs-001",
      "besoin": "Se faire connaître et trouver ses premiers clients, avec peu de temps et sans budget agence.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "rs",
      "nom": "Auto-entrepreneur qui démarre son activité",
      "ordre": 1,
      "parcours": [
        {
          "formation": "rs-simple",
          "pourquoi": "L'essentiel en 3 jours pour être présent et publier régulièrement.",
          "reponses": {},
          "argumentaire": "L'essentiel en 3 jours : choisir les réseaux de sa cible et créer une page pro complète (M1), puis un rythme de publication tenable avec des formats simples (M2.1). Résultat : une présence active dès la fin de la formation."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "S'il n'a pas encore de logo ni de positionnement clair.",
          "reponses": {
            "M1 Socle": "Définir son positionnement et sa charte graphique avant de publier."
          },
          "argumentaire": "Le M1 Socle définit positionnement et charte graphique avant de publier."
        },
        {
          "formation": "rs-local",
          "pourquoi": "Si ses clients sont dans sa ville ou sa zone d'intervention.",
          "reponses": {
            "M2.3": "Fiche Google Business Profile pour être trouvé près de chez lui."
          },
          "argumentaire": "Le M2.3 crée sa fiche Google Business Profile pour être trouvé près de chez lui."
        },
        {
          "formation": "rs-video",
          "pourquoi": "S'il veut se montrer en vidéo pour créer la confiance.",
          "reponses": {
            "M3": "Filmer et monter ses vidéos seul, sur smartphone."
          },
          "argumentaire": "Le M3 apprend à filmer et monter seul sur smartphone."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Un rythme de publication tenable et des formats simples qui font venir des clients."
      },
      "motsCles": "auto-entrepreneur, micro-entrepreneur, création d'activité, premiers clients, se faire connaître, Instagram, Facebook, page pro, petit budget, indépendant",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Vient de créer son activité et doit se faire connaître.",
        "difficulte": "Peu de temps, pas de budget agence, ne sait pas sur quels réseaux aller ni quoi publier.",
        "attente": "Être présent sur les bons réseaux et publier régulièrement pour trouver ses premiers clients."
      }
    },
    {
      "id": "rs-002",
      "besoin": "Montrer ses créations et vendre en direct ou en ligne.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "pao-lightroom",
          "pourquoi": "Trier, retoucher et valoriser ses photos."
        }
      ],
      "domaine": "rs",
      "nom": "Auto-entrepreneur créatif, artisan d'art",
      "ordre": 2,
      "parcours": [
        {
          "formation": "rs-video",
          "pourquoi": "Pour montrer le geste et les coulisses de fabrication.",
          "reponses": {
            "M3": "Vidéos de fabrication et de présentation tournées au smartphone."
          },
          "argumentaire": "Vidéos tournées et montées au smartphone (M3), en plus des bases et de la stratégie de publication."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "Pour un univers de marque reconnaissable.",
          "reponses": {
            "M1 Socle": "Univers visuel et charte qui reflètent son style."
          },
          "argumentaire": "Charte et univers visuel qui reflètent son style (M1 Socle)."
        },
        {
          "formation": "rs-simple",
          "pourquoi": "S'il a déjà une identité et veut surtout mieux publier.",
          "reponses": {},
          "argumentaire": "L'essentiel en 3 jours."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications régulières autour des créations, des coulisses et des ventes."
      },
      "motsCles": "artisan d'art, créateur, céramiste, bijoutier, couturière, vente en ligne, marchés, Instagram, Pinterest, montrer ses créations, indépendant, auto-entrepreneur",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Créateur(trice) ou artisan d'art qui vend en direct, sur des marchés ou en ligne.",
        "difficulte": "Ses créations sont belles mais peu visibles ; publications irrégulières.",
        "attente": "Montrer son travail et son univers pour vendre davantage."
      }
    },
    {
      "id": "rs-003",
      "besoin": "Trouver des clients professionnels et asseoir son expertise.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "rs",
      "nom": "Consultant(e), freelance, auto-entrepreneur en B2B",
      "ordre": 3,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le canal principal pour trouver des clients professionnels.",
          "reponses": {
            "M2.2": "Profil optimisé, publications et réseau ciblé pour générer des contacts."
          },
          "argumentaire": "Le canal principal pour trouver des clients professionnels : profil optimisé, publications d'expertise et réseau ciblé (M2.2), avec une stratégie de contenu (M2.1). Résultat : des contacts qualifiés."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "À proposer s'il doit d'abord clarifier son positionnement et son image d'expert (M1 Socle).",
          "reponses": {
            "M1 Socle": "Positionnement et identité visuelle d'expert."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Une stratégie de contenu qui démontre son expertise."
      },
      "motsCles": "consultant, freelance, coach d'entreprise, B2B, expertise, LinkedIn, prospection, personal branding, indépendant, auto-entrepreneur",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Consultant(e) ou freelance qui vend ses services à des entreprises.",
        "difficulte": "Dépend du bouche-à-oreille ; profil peu visible auprès des décideurs.",
        "attente": "Trouver des clients professionnels et asseoir son expertise, surtout sur LinkedIn."
      }
    },
    {
      "id": "rs-004",
      "besoin": "Faire connaître son activité et rassurer de futurs clients.",
      "categorie": "Santé et social",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "rs",
      "nom": "Praticien(ne) ou coach indépendant(e) (bien-être, cours, accompagnement)",
      "ordre": 4,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Si sa clientèle vient de sa ville.",
          "reponses": {
            "M2.3": "Être trouvé localement et valoriser ses avis clients."
          },
          "argumentaire": "Être trouvé sur Google et valoriser ses avis clients (M2.3)."
        },
        {
          "formation": "rs-video",
          "pourquoi": "Pour se présenter en vidéo avant le premier rendez-vous.",
          "reponses": {
            "M3": "Vidéos de présentation et de conseils tournées au smartphone."
          },
          "argumentaire": "Vidéos de présentation et de conseils au smartphone (M3)."
        },
        {
          "formation": "rs-linkedin",
          "pourquoi": "S'il accompagne aussi des entreprises ou des salariés.",
          "reponses": {
            "M2.2": "Présence LinkedIn pour toucher les entreprises."
          },
          "argumentaire": "Présence LinkedIn (M2.2)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Contenus qui créent la confiance et la proximité."
      },
      "motsCles": "coach, praticien, thérapeute, sophrologue, bien-être, professeur de yoga, cours particuliers, rassurer, avis, Google, indépendant, auto-entrepreneur, dirigeant",
      "categories": [
        "Santé et social"
      ],
      "besoinDetail": {
        "situation": "Praticien(ne), coach ou enseignant(e) indépendant(e) : bien-être, cours, accompagnement.",
        "difficulte": "Activité de confiance : les futurs clients veulent être rassurés avant de réserver.",
        "attente": "Être trouvé localement et inspirer confiance avant le premier rendez-vous."
      }
    },
    {
      "id": "rs-005",
      "besoin": "Définir son image avant de se lancer sur les réseaux.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "rs",
      "nom": "Créateur(trice) d'entreprise qui lance sa marque",
      "ordre": 5,
      "parcours": [
        {
          "formation": "rs-marque",
          "pourquoi": "Le plus adapté : l'identité de marque d'abord.",
          "reponses": {
            "M1 Socle": "Positionnement et charte graphique construits pour son activité."
          },
          "argumentaire": "L'identité d'abord. Le M1 Socle construit positionnement et charte graphique, puis il crée ses pages pro aux couleurs de la marque et publie avec cohérence. Résultat : une marque lancée sur de bonnes bases."
        },
        {
          "formation": "rs-simple",
          "pourquoi": "Si son identité est déjà définie (logo, charte).",
          "reponses": {},
          "argumentaire": "L'essentiel en 3 jours pour publier."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications cohérentes qui installent la marque."
      },
      "motsCles": "créateur d'entreprise, lancement, marque, logo, charte graphique, identité visuelle, positionnement, nom de marque, indépendant, auto-entrepreneur",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Lance son entreprise ou sa marque.",
        "difficulte": "Pas encore de logo, de charte ni de positionnement clair ; risque de communiquer sans cohérence.",
        "attente": "Définir son identité de marque avant de se lancer sur les réseaux."
      }
    },
    {
      "id": "rs-006",
      "besoin": "Remplir son établissement avec les habitants et les visiteurs.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Restaurateur, hébergeur, acteur touristique",
      "ordre": 6,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Pour être choisi sur Google par les visiteurs et les habitants.",
          "reponses": {
            "M2.3": "Fiche Google optimisée et gestion des avis clients."
          },
          "argumentaire": "Fiche Google optimisée et gestion des avis (M2.3), réseaux adaptés à ses clientèles locale et touristique, publications qui donnent envie (M2.1). Résultat : plus de réservations."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour donner envie avec des vidéos du lieu, des plats ou des activités, tournées au smartphone (M3).",
          "reponses": {
            "M3": "Vidéos courtes du lieu, des plats, des activités."
          }
        },
        {
          "formation": "rs-marque",
          "pourquoi": "À proposer pour un établissement en création ou dont l'identité est à affirmer (M1 Socle).",
          "reponses": {
            "M1 Socle": "Positionnement et charte graphique de l'établissement."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications qui donnent envie : plats, lieu, événements, saisons."
      },
      "motsCles": "restaurateur, hôtel, gîte, chambre d'hôtes, camping, tourisme, Google Business Profile, avis clients, Instagram, réservations, commerce, artisanat",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Restaurateur, hébergeur ou acteur touristique.",
        "difficulte": "Les clients choisissent sur Google et Instagram ; avis à gérer ; saisonnalité.",
        "attente": "Être trouvé et choisi par les habitants et les visiteurs, et remplir son établissement."
      }
    },
    {
      "id": "rs-007",
      "besoin": "Attirer la clientèle du quartier et être trouvé sur Google.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "rs",
      "nom": "Commerçant(e) de proximité (boutique, salon, épicerie)",
      "ordre": 7,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Le plus adapté : la visibilité de proximité.",
          "reponses": {
            "M2.3": "Fiche Google Business Profile complète : horaires, photos, avis."
          },
          "argumentaire": "Fiche Google Business Profile complète (horaires, photos, avis) au M2.3, et des publications sur nouveautés, promotions et événements. Résultat : plus de clients du quartier."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour animer sa vitrine en ligne avec des vidéos des produits et de la boutique (M3).",
          "reponses": {
            "M3": "Vidéos des produits et de la boutique au smartphone."
          }
        },
        {
          "formation": "rs-simple",
          "pourquoi": "À proposer s'il a peu de temps et veut l'essentiel en 3 jours.",
          "reponses": {}
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications sur les nouveautés, promotions et événements."
      },
      "motsCles": "commerçant, boutique, salon de coiffure, institut, épicerie, fleuriste, clientèle de quartier, Google Maps, fiche Google, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Tient une boutique, un salon ou une épicerie de quartier.",
        "difficulte": "Concurrence des grandes enseignes et du web ; fiche Google incomplète ou absente.",
        "attente": "Attirer la clientèle du quartier et être trouvé sur Google."
      }
    },
    {
      "id": "rs-008",
      "besoin": "Être trouvé par les clients de sa zone d'intervention.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "Créer et gérer soi-même son site internet."
        }
      ],
      "domaine": "rs",
      "nom": "Artisan ou auto-entrepreneur du bâtiment et des services à domicile",
      "ordre": 8,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Le plus adapté : ses clients cherchent un artisan près de chez eux.",
          "reponses": {
            "M2.3": "Visibilité sur Google Maps et gestion des avis clients."
          },
          "argumentaire": "Ses clients cherchent un artisan près de chez eux. Visibilité sur Google Maps et gestion des avis (M2.3), avant/après et chantiers publiés régulièrement (M2.1). Résultat : plus de demandes de devis."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour montrer son savoir-faire avec des vidéos de chantiers et de réalisations (M3).",
          "reponses": {
            "M3": "Vidéos de chantiers et de réalisations au smartphone."
          }
        },
        {
          "formation": "rs-simple",
          "pourquoi": "À proposer s'il veut l'essentiel en 3 jours.",
          "reponses": {}
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Avant / après et chantiers publiés régulièrement."
      },
      "motsCles": "artisan du bâtiment, plombier, électricien, peintre, menuisier, services à domicile, zone d'intervention, avis Google, chantiers, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Artisan ou auto-entrepreneur du bâtiment ou des services à domicile.",
        "difficulte": "Les clients cherchent « près de chez moi » ; avis et réalisations peu mis en avant.",
        "attente": "Être trouvé dans sa zone d'intervention et rassurer avec ses réalisations et ses avis."
      }
    },
    {
      "id": "rs-009",
      "besoin": "Se démarquer et amener du trafic vers sa boutique.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "pao-lightroom",
          "pourquoi": "Trier, retoucher et valoriser ses photos."
        },
        {
          "formation": "web-geo-seo",
          "pourquoi": "Être bien référencé sur Google et dans les réponses des IA."
        }
      ],
      "domaine": "rs",
      "nom": "E-commerçant(e), créateur(trice) de boutique en ligne",
      "ordre": 9,
      "parcours": [
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une marque reconnaissable face à la concurrence en ligne.",
          "reponses": {
            "M1 Socle": "Identité de marque et univers visuel des produits."
          },
          "argumentaire": "Identité et univers visuel des produits (M1 Socle), reliés à la boutique."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour présenter ses produits en vidéos courtes, tournées et montées au smartphone (M3).",
          "reponses": {
            "M3": "Vidéos produits courtes, tournées et montées au smartphone."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications qui valorisent les produits et génèrent des visites."
      },
      "motsCles": "e-commerce, boutique en ligne, Shopify, WooCommerce, trafic, Instagram, TikTok, publicité, vidéos produits, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Gère une boutique en ligne.",
        "difficulte": "Forte concurrence, trafic insuffisant, marque peu reconnaissable.",
        "attente": "Se démarquer et amener du trafic qualifié vers sa boutique."
      }
    },
    {
      "id": "rs-010",
      "besoin": "Passer de publications au coup par coup à une présence suivie.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Artisan ou TPE présent sur les réseaux mais irrégulier",
      "ordre": 10,
      "parcours": [
        {
          "formation": "rs-simple",
          "pourquoi": "Pour structurer sa présence en 3 jours.",
          "reponses": {},
          "argumentaire": "Bases communes (M1), puis planning éditorial et lecture des statistiques (M2.1). Résultat : une présence régulière et mesurable."
        },
        {
          "formation": "rs-local",
          "pourquoi": "Si sa clientèle est locale.",
          "reponses": {
            "M2.3": "Fiche Google à jour pour compléter les réseaux."
          },
          "argumentaire": "Fiche Google à jour pour compléter les réseaux (M2.3)."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour publier des vidéos courtes qui retiennent l'attention (M3).",
          "reponses": {
            "M3": "Formats vidéo courts réalisés au smartphone."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Planning éditorial et lecture des statistiques."
      },
      "motsCles": "irrégulier, manque de temps, calendrier éditorial, planification, régularité, Meta Business Suite, publications, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Artisan ou TPE déjà présent sur les réseaux.",
        "difficulte": "Publie au coup par coup, sans stratégie ni régularité ; peu de résultats.",
        "attente": "Passer à une présence suivie et efficace, avec un planning tenable."
      }
    },
    {
      "id": "rs-011",
      "besoin": "Prendre en charge les réseaux sans formation en communication.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        }
      ],
      "domaine": "rs",
      "nom": "Salarié(e) à qui l'on confie les réseaux de l'entreprise",
      "ordre": 11,
      "parcours": [
        {
          "formation": "rs-simple",
          "pourquoi": "L'essentiel pour démarrer en 3 jours.",
          "reponses": {},
          "argumentaire": "L'essentiel pour démarrer en 3 jours : cible, plateformes et page professionnelle (M1), puis une méthode pour proposer et tenir une stratégie de publication (M2.1)."
        },
        {
          "formation": "rs-video",
          "pourquoi": "Si l'entreprise attend aussi des vidéos.",
          "reponses": {
            "M3": "Production vidéo autonome au smartphone."
          },
          "argumentaire": "Production autonome au smartphone (M3)."
        },
        {
          "formation": "rs-linkedin",
          "pourquoi": "Si l'entreprise travaille surtout avec des professionnels.",
          "reponses": {
            "M2.2": "Animer la page LinkedIn de l'entreprise."
          },
          "argumentaire": "Animer la page LinkedIn (M2.2)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Méthode pour proposer et tenir une stratégie de publication."
      },
      "motsCles": "community manager, salarié polyvalent, réseaux de l'entreprise, ligne éditoriale, planification, statistiques, association",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Salarié(e) à qui l'entreprise confie les réseaux sociaux, en plus de son poste.",
        "difficulte": "Pas de formation en communication ; ne sait pas par où commencer ni comment mesurer les résultats.",
        "attente": "Prendre en charge les réseaux de l'entreprise avec une méthode claire."
      }
    },
    {
      "id": "rs-012",
      "besoin": "Harmoniser l'image et produire des contenus en interne.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        },
        {
          "formation": "web-geo-seo",
          "pourquoi": "Être bien référencé sur Google et dans les réponses des IA."
        }
      ],
      "domaine": "rs",
      "nom": "Responsable communication ou marketing (TPE-PME, collectivité)",
      "ordre": 12,
      "parcours": [
        {
          "formation": "rs-marque",
          "pourquoi": "Pour harmoniser l'image sur toutes les plateformes.",
          "reponses": {
            "M1 Socle": "Charte graphique de référence pour toutes les prises de parole."
          },
          "argumentaire": "Charte graphique de référence (M1 Socle) et audit de la présence existante."
        },
        {
          "formation": "rs-video",
          "pourquoi": "Pour produire des vidéos en interne.",
          "reponses": {
            "M3": "Prise de vue, son et montage sur smartphone."
          },
          "argumentaire": "Prise de vue, son et montage sur smartphone (M3)."
        },
        {
          "formation": "rs-linkedin",
          "pourquoi": "Pour la communication B2B et institutionnelle.",
          "reponses": {
            "M2.2": "Page entreprise et contenus LinkedIn."
          },
          "argumentaire": "Page entreprise et contenus LinkedIn (M2.2)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Stratégie de publication cohérente et mesurable."
      },
      "motsCles": "responsable communication, chargé de marketing, collectivité, mairie, charte, stratégie de contenus, image de marque, entreprise, association",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Responsable communication ou marketing en TPE-PME ou collectivité.",
        "difficulte": "Image peu homogène d'une plateforme à l'autre ; contenus, surtout vidéo, sous-traités ou absents.",
        "attente": "Harmoniser l'image et produire des contenus en interne."
      }
    },
    {
      "id": "rs-013",
      "besoin": "Incarner son entreprise et gagner en crédibilité.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "rs",
      "nom": "Dirigeant(e) de TPE-PME",
      "ordre": 13,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Pour sa réputation auprès des clients et partenaires professionnels.",
          "reponses": {
            "M2.2": "Prise de parole et réseau du dirigeant sur LinkedIn."
          },
          "argumentaire": "Prise de parole du dirigeant et développement de son réseau sur LinkedIn (M2.2), en lien avec la page de l'entreprise."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "Si l'image de l'entreprise est à revoir.",
          "reponses": {
            "M1 Socle": "Positionnement et identité de l'entreprise."
          },
          "argumentaire": "Positionnement et identité (M1 Socle)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Messages clés et calendrier de publication."
      },
      "motsCles": "dirigeant, gérant, PDG, chef d'entreprise, PME, LinkedIn, crédibilité, incarner l'entreprise, marque employeur, association",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Dirige une TPE ou une PME.",
        "difficulte": "Peu visible personnellement, alors que clients et partenaires regardent qui dirige l'entreprise.",
        "attente": "Incarner son entreprise et gagner en crédibilité auprès des professionnels."
      }
    },
    {
      "id": "rs-014",
      "besoin": "Prospecter et entretenir sa relation client sur les réseaux.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Commercial(e) B2B, business developer",
      "ordre": 14,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le canal de la prospection B2B.",
          "reponses": {
            "M2.2": "Développer et animer son réseau pour prospecter."
          },
          "argumentaire": "Le canal de la prospection B2B : cibler les bons interlocuteurs, développer et animer son réseau, publier des contenus qui ouvrent la conversation (M2.2). Résultat : plus de rendez-vous qualifiés."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Contenus qui ouvrent la conversation."
      },
      "motsCles": "commercial B2B, business developer, prospection, social selling, LinkedIn, relation client, réseau, entreprise, association",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Commercial(e) B2B ou business developer.",
        "difficulte": "La prospection classique s'essouffle ; ses clients sont sur LinkedIn.",
        "attente": "Prospecter et entretenir sa relation client sur les réseaux (social selling)."
      }
    },
    {
      "id": "rs-015",
      "besoin": "Valoriser la marque employeur et attirer des candidats.",
      "categorie": "Ressources humaines",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "rs",
      "nom": "RH, chargé(e) de recrutement",
      "ordre": 15,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le réseau des candidats et des recruteurs.",
          "reponses": {
            "M2.2": "Diffuser les offres et développer son vivier."
          },
          "argumentaire": "Le réseau des candidats : diffuser les offres, développer son vivier et publier régulièrement des contenus de marque employeur (M2.2)."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour des vidéos métiers et des témoignages de salariés tournés au smartphone (M3).",
          "reponses": {
            "M3": "Vidéos de salariés et de métiers au smartphone."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications marque employeur régulières."
      },
      "motsCles": "RH, recruteur, marque employeur, offres d'emploi, attirer des candidats, LinkedIn, vidéos métiers, entreprise, association",
      "categories": [
        "Ressources humaines"
      ],
      "besoinDetail": {
        "situation": "Travaille aux RH ou au recrutement.",
        "difficulte": "Difficultés à recruter ; marque employeur peu visible.",
        "attente": "Valoriser l'entreprise comme employeur et attirer des candidats."
      }
    },
    {
      "id": "rs-016",
      "besoin": "Faire connaître les actions et mobiliser son public.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "col-workspace",
          "pourquoi": "Travailler en équipe avec Gmail, Drive, Meet et Docs."
        }
      ],
      "domaine": "rs",
      "nom": "Salarié(e) ou bénévole d'association",
      "ordre": 16,
      "parcours": [
        {
          "formation": "rs-simple",
          "pourquoi": "L'essentiel en 3 jours, avec peu de moyens.",
          "reponses": {},
          "argumentaire": "L'essentiel en 3 jours, avec peu de moyens : une page claire pour adhérents et partenaires, et des publications qui annoncent et valorisent les événements."
        },
        {
          "formation": "rs-video",
          "pourquoi": "Pour raconter les actions en vidéo.",
          "reponses": {
            "M3": "Vidéos d'événements et de témoignages au smartphone."
          },
          "argumentaire": "Événements et témoignages au smartphone (M3)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications qui annoncent et valorisent les événements."
      },
      "motsCles": "association, bénévole, salarié associatif, événements, mobiliser, adhérents, dons, Facebook, Instagram, entreprise",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Salarié(e) ou bénévole d'association.",
        "difficulte": "Peu de moyens ; actions et événements peu connus du public.",
        "attente": "Faire connaître les actions et mobiliser adhérents, bénévoles et donateurs."
      }
    },
    {
      "id": "rs-017",
      "besoin": "Être visible des recruteurs et valoriser son parcours.",
      "categorie": "Emploi et transition",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Salarié(e) ou demandeur d'emploi en transition",
      "ordre": 17,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le plus adapté pour une recherche d'emploi ou une évolution.",
          "reponses": {
            "M2.2": "Profil optimisé et réseau développé vers son projet."
          },
          "argumentaire": "Profil optimisé, réseau développé vers son projet et contenus qui montrent ses compétences (M2.2)."
        },
        {
          "formation": "rs-simple",
          "pourquoi": "À proposer s'il vise un métier où il gérera des réseaux sociaux.",
          "reponses": {}
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Partager des contenus qui montrent ses compétences."
      },
      "motsCles": "transition professionnelle, demandeur d'emploi, reconversion, profil LinkedIn, CV, visibilité recruteurs, réseau",
      "categories": [
        "Emploi et transition"
      ],
      "besoinDetail": {
        "situation": "Salarié(e) en évolution ou demandeur d'emploi en transition professionnelle.",
        "difficulte": "Profil peu visible des recruteurs ; réseau professionnel limité.",
        "attente": "Être repéré par les recruteurs et valoriser son parcours."
      }
    },
    {
      "id": "rs-018",
      "besoin": "Mettre en avant ses biens et être reconnu dans son secteur.",
      "categorie": "Administratif et commercial",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "rs",
      "nom": "Agent immobilier, mandataire indépendant",
      "ordre": 18,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Le plus adapté : être la référence de son secteur.",
          "reponses": {
            "M2.3": "Fiche Google, avis clients et visibilité dans les recherches locales."
          },
          "argumentaire": "Devenir la référence de son secteur avec une fiche Google, des avis clients et une visibilité dans les recherches locales (M2.3), et des publications de biens et de ventes réalisées."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour des visites et présentations de biens filmées et montées au smartphone (M3).",
          "reponses": {
            "M3": "Visites et présentations de biens filmées et montées au smartphone."
          }
        },
        {
          "formation": "rs-linkedin",
          "pourquoi": "Pour travailler avec des professionnels et investisseurs.",
          "reponses": {
            "M2.2": "Réseau d'apporteurs d'affaires et de partenaires sur LinkedIn."
          },
          "argumentaire": "Réseau d'apporteurs d'affaires sur LinkedIn (M2.2)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications de biens, de ventes réalisées et de conseils locaux."
      },
      "motsCles": "agent immobilier, mandataire, biens à vendre, visites virtuelles, vidéos de biens, notoriété locale, Google, indépendant, auto-entrepreneur, dirigeant",
      "categories": [
        "Administratif et commercial"
      ],
      "besoinDetail": {
        "situation": "Agent immobilier ou mandataire indépendant.",
        "difficulte": "Forte concurrence locale ; besoin d'être reconnu comme la référence de son secteur.",
        "attente": "Mettre en avant ses biens et sa notoriété locale pour décrocher des mandats."
      }
    },
    {
      "id": "rs-019",
      "besoin": "Faire connaître sa ferme, ses points de vente et ses marchés.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Agriculteur, producteur en vente directe",
      "ordre": 19,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Le plus adapté : ses clients sont autour de chez lui.",
          "reponses": {
            "M2.3": "Fiche Google de la ferme ou du magasin, avis et itinéraire."
          },
          "argumentaire": "Ses clients sont autour de chez lui. Fiche Google de la ferme ou du magasin, avis et itinéraire (M2.3), publications de saison et annonces de marchés (M2.1)."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour montrer la ferme, les produits et le travail au quotidien en vidéo (M3).",
          "reponses": {
            "M3": "Vidéos de la ferme, des produits et des coulisses au smartphone."
          }
        },
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une marque de produits reconnaissable.",
          "reponses": {
            "M1 Socle": "Identité de la ferme et de ses produits : nom, logo, couleurs."
          },
          "argumentaire": "Nom, logo et couleurs (M1 Socle)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications de saison, récoltes et annonces de marchés."
      },
      "motsCles": "agriculteur, producteur, maraîcher, vente directe, vente à la ferme, marchés, circuit court, AMAP, Facebook, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Agriculteur ou producteur en vente directe.",
        "difficulte": "Clients locaux à informer (ventes, marchés, horaires) ; peu de temps pour communiquer.",
        "attente": "Faire connaître sa ferme, ses produits et ses points de vente."
      }
    },
    {
      "id": "rs-020",
      "besoin": "Montrer son style et trouver des clients.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "pao-lightroom",
          "pourquoi": "Trier, retoucher et valoriser ses photos."
        },
        {
          "formation": "pao-photoshop-perf",
          "pourquoi": "Retouches et compositions avancées."
        }
      ],
      "domaine": "rs",
      "nom": "Photographe, vidéaste indépendant",
      "ordre": 20,
      "parcours": [
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une signature visuelle reconnaissable.",
          "reponses": {
            "M1 Socle": "Positionnement et identité qui reflètent son style."
          },
          "argumentaire": "Positionnement et identité qui reflètent son style (M1 Socle), et un portfolio en ligne."
        },
        {
          "formation": "rs-video",
          "pourquoi": "Pour des formats courts adaptés aux réseaux.",
          "reponses": {
            "M3": "Formats verticaux et montage rapide sur smartphone pour les réseaux."
          },
          "argumentaire": "Vertical et montage rapide sur smartphone (M3)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Rythme de publication et formats qui valorisent ses réalisations."
      },
      "motsCles": "photographe, vidéaste, portfolio, style, Instagram, clients, mariages, reportages, indépendant, auto-entrepreneur",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Photographe ou vidéaste indépendant(e).",
        "difficulte": "Marché concurrentiel ; style peu identifiable.",
        "attente": "Montrer son style et attirer les bons clients."
      }
    },
    {
      "id": "rs-021",
      "besoin": "Donner envie avec ses réalisations et se démarquer.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        }
      ],
      "domaine": "rs",
      "nom": "Organisateur(trice) d'événements, wedding planner",
      "ordre": 21,
      "parcours": [
        {
          "formation": "rs-video",
          "pourquoi": "Pour faire vivre l'émotion des événements.",
          "reponses": {
            "M3": "Vidéos d'ambiance et de coulisses tournées au smartphone."
          },
          "argumentaire": "Vidéos d'ambiance et de coulisses tournées au smartphone (M3)."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une image haut de gamme et cohérente.",
          "reponses": {
            "M1 Socle": "Positionnement et univers visuel de sa marque."
          },
          "argumentaire": "Positionnement et univers visuel de sa marque (M1 Socle)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications avant, pendant et après les événements."
      },
      "motsCles": "organisateur d'événements, wedding planner, mariage, décoration, événementiel, inspirations, Instagram, Pinterest, indépendant, auto-entrepreneur",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Organisateur(trice) d'événements ou wedding planner.",
        "difficulte": "Activité où l'on achète une émotion ; besoin de se démarquer.",
        "attente": "Donner envie avec ses réalisations et affirmer une image cohérente."
      }
    },
    {
      "id": "rs-022",
      "besoin": "Développer son public et annoncer ses dates ou ses sorties.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        }
      ],
      "domaine": "rs",
      "nom": "Artiste, musicien(ne), auteur(e)",
      "ordre": 22,
      "parcours": [
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une identité d'artiste reconnaissable.",
          "reponses": {
            "M1 Socle": "Univers, positionnement et charte visuelle."
          },
          "argumentaire": "Univers, positionnement et charte visuelle (M1 Socle), avec un calendrier de publications autour des dates et sorties."
        },
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour partager extraits, teasers et coulisses filmés et montés au smartphone (M3).",
          "reponses": {
            "M3": "Extraits, teasers et coulisses filmés et montés au smartphone."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Calendrier de publications autour des dates, sorties et coulisses."
      },
      "motsCles": "artiste, musicien, groupe, auteur, écrivain, concerts, sorties, public, fans, Instagram, YouTube, indépendant, auto-entrepreneur",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Artiste, musicien(ne) ou auteur(e).",
        "difficulte": "Public difficile à construire ; dates et sorties peu relayées.",
        "attente": "Développer son public et annoncer ses dates et sorties."
      }
    },
    {
      "id": "rs-023",
      "besoin": "Attirer la clientèle locale en respectant la charte de l'enseigne.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Gérant(e) de franchise ou de point de vente d'enseigne",
      "ordre": 23,
      "parcours": [
        {
          "formation": "rs-local",
          "pourquoi": "Le plus adapté : la visibilité de son point de vente.",
          "reponses": {
            "M2.3": "Fiche Google du magasin, avis et horaires à jour."
          },
          "argumentaire": "La visibilité de son point de vente. Fiche Google du magasin, avis et horaires à jour (M2.3), et publications locales dans le cadre fixé par l'enseigne."
        },
        {
          "formation": "rs-simple",
          "pourquoi": "Si l'enseigne gère déjà la stratégie globale.",
          "reponses": {},
          "argumentaire": "L'essentiel pour animer sa page locale."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Publications locales : animations, nouveautés, équipe."
      },
      "motsCles": "franchise, franchisé, point de vente, enseigne, magasin, clientèle locale, charte de l'enseigne, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Gère une franchise ou un point de vente d'enseigne.",
        "difficulte": "Doit attirer la clientèle locale dans le cadre fixé par l'enseigne.",
        "attente": "Rendre son point de vente visible localement en respectant la charte."
      }
    },
    {
      "id": "rs-024",
      "besoin": "Recruter des adhérents et animer sa communauté.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "rs",
      "nom": "Salle de sport, club sportif, coach sportif",
      "ordre": 24,
      "parcours": [
        {
          "formation": "rs-video",
          "pourquoi": "À proposer pour des vidéos d'exercices, de cours et de témoignages au smartphone (M3), avec un calendrier de défis et d'événements.",
          "reponses": {
            "M3": "Vidéos d'exercices, de cours et de témoignages au smartphone."
          }
        },
        {
          "formation": "rs-local",
          "pourquoi": "Pour attirer les habitants du secteur.",
          "reponses": {
            "M2.3": "Fiche Google, avis des adhérents et visibilité locale."
          },
          "argumentaire": "Fiche Google, avis des adhérents et visibilité locale (M2.3)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Défis, résultats, événements et conseils publiés régulièrement."
      },
      "motsCles": "salle de sport, club sportif, coach sportif, fitness, adhérents, communauté, vidéos d'exercices, commerce, artisanat, tourisme",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Gère une salle de sport, un club ou exerce comme coach sportif.",
        "difficulte": "Adhérents à recruter et à fidéliser ; concurrence locale.",
        "attente": "Recruter des adhérents et animer sa communauté."
      }
    },
    {
      "id": "rs-025",
      "besoin": "Valoriser un territoire auprès des visiteurs.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        },
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "rs",
      "nom": "Office de tourisme, chargé(e) d'attractivité territoriale",
      "ordre": 25,
      "parcours": [
        {
          "formation": "rs-video",
          "pourquoi": "Pour donner envie de venir avec des images du territoire.",
          "reponses": {
            "M3": "Vidéos de lieux, d'activités et d'événements au smartphone."
          },
          "argumentaire": "Vidéos de lieux, d'activités et d'événements au smartphone (M3), avec un calendrier éditorial au fil des saisons."
        },
        {
          "formation": "rs-local",
          "pourquoi": "À proposer pour la visibilité des lieux et l'accompagnement des acteurs locaux sur leurs fiches Google (M2.3).",
          "reponses": {
            "M2.3": "Fiches Google des lieux et accompagnement des acteurs locaux."
          }
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Calendrier éditorial autour des saisons et des événements du territoire."
      },
      "motsCles": "office de tourisme, attractivité, territoire, destination, visiteurs, patrimoine, événements, collectivité, entreprise, association",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Travaille en office de tourisme ou sur l'attractivité d'un territoire.",
        "difficulte": "Destination à faire connaître ; acteurs locaux à accompagner.",
        "attente": "Donner envie de venir et valoriser les lieux et acteurs du territoire."
      }
    },
    {
      "id": "rs-026",
      "besoin": "Être visible auprès des entreprises et des partenaires.",
      "categorie": "Gestion et management",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        },
        {
          "formation": "prj-agilite",
          "pourquoi": "Organiser et piloter ses projets en équipe."
        }
      ],
      "domaine": "rs",
      "nom": "Chargé(e) de développement économique (collectivité, réseau d'entreprises)",
      "ordre": 26,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le plus adapté : le réseau des entreprises.",
          "reponses": {
            "M2.2": "Animer son réseau professionnel et relayer les actions sur LinkedIn."
          },
          "argumentaire": "Le réseau des entreprises. Animer son réseau professionnel et relayer actions, dispositifs et réussites du territoire sur LinkedIn (M2.2)."
        },
        {
          "formation": "rs-simple",
          "pourquoi": "À proposer si l'objectif est d'abord de structurer la présence existante.",
          "reponses": {}
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Contenus sur les actions, dispositifs et réussites du territoire."
      },
      "motsCles": "développement économique, collectivité, réseau d'entreprises, CCI, partenaires, LinkedIn, événements, association",
      "categories": [
        "Gestion et management"
      ],
      "besoinDetail": {
        "situation": "Chargé(e) de développement économique (collectivité, réseau d'entreprises, chambre consulaire).",
        "difficulte": "Actions et dispositifs mal connus des entreprises.",
        "attente": "Être visible auprès des entreprises et des partenaires et relayer les actions."
      }
    },
    {
      "id": "rs-027",
      "besoin": "Construire une audience régulière.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "video-premiere",
          "pourquoi": "Monter des vidéos professionnelles."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Produire des vidéos avec un avatar IA, sans se filmer."
        }
      ],
      "domaine": "rs",
      "nom": "Créateur(trice) de contenu qui débute",
      "ordre": 27,
      "parcours": [
        {
          "formation": "rs-video",
          "pourquoi": "Le plus adapté : la vidéo est au cœur des réseaux.",
          "reponses": {
            "M3": "Tournage et montage de vidéos au smartphone."
          },
          "argumentaire": "La vidéo est au cœur des réseaux. Tournage et montage au smartphone (M3), ligne éditoriale, régularité et lecture des statistiques (M2.1). Résultat : une audience qui grandit."
        },
        {
          "formation": "rs-marque",
          "pourquoi": "Pour une identité qui le rend reconnaissable.",
          "reponses": {
            "M1 Socle": "Positionnement, ton et charte visuelle."
          },
          "argumentaire": "Positionnement, ton et charte visuelle (M1 Socle)."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Ligne éditoriale, régularité et lecture des statistiques."
      },
      "motsCles": "créateur de contenu, influenceur, YouTube, TikTok, Instagram, audience, vidéos courtes, reels, indépendant, auto-entrepreneur",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Créateur(trice) de contenu qui débute.",
        "difficulte": "Audience faible et irrégulière ; formats vidéo à maîtriser.",
        "attente": "Construire une audience régulière avec des vidéos qui retiennent l'attention."
      }
    },
    {
      "id": "rs-028",
      "besoin": "Être visible des recruteurs pour un premier emploi ou une alternance.",
      "categorie": "Emploi et transition",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "rs",
      "nom": "Étudiant(e), jeune diplômé(e)",
      "ordre": 28,
      "parcours": [
        {
          "formation": "rs-linkedin",
          "pourquoi": "Le réseau des recruteurs et des employeurs.",
          "reponses": {
            "M2.2": "Profil LinkedIn optimisé, réseau et candidatures ciblées."
          },
          "argumentaire": "Le réseau des recruteurs : profil LinkedIn optimisé, réseau et candidatures ciblées (M2.2), et partage de ses projets et compétences. Résultat : il est repéré pour un stage, une alternance ou un premier emploi."
        }
      ],
      "reponses": {
        "M1 Base": "Choisir les réseaux adaptés à sa cible et créer ou optimiser une page professionnelle complète.",
        "M2.1": "Partager projets et compétences de façon professionnelle."
      },
      "motsCles": "étudiant, jeune diplômé, alternance, stage, premier emploi, LinkedIn, profil, recruteurs",
      "categories": [
        "Emploi et transition"
      ],
      "besoinDetail": {
        "situation": "Étudiant(e) ou jeune diplômé(e).",
        "difficulte": "Peu d'expérience, réseau limité, profil invisible des recruteurs.",
        "attente": "Être visible des recruteurs pour décrocher un stage, une alternance ou un premier emploi."
      }
    },
    {
      "id": "video-001",
      "besoin": "Produire des vidéos professionnelles en interne.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "video",
      "nom": "Chargé(e) de communication ou de marketing",
      "ordre": 1,
      "parcours": [
        {
          "formation": "video-premiere",
          "pourquoi": "Le plus adapté : montage vidéo professionnel.",
          "reponses": {
            "Formation": "Monter, habiller et exporter des vidéos professionnelles avec Premiere."
          },
          "argumentaire": "Monter, habiller (titres, sous-titres, musique) et exporter des vidéos professionnelles avec Premiere Pro. Résultat : des vidéos d'entreprise produites en interne."
        },
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Pour produire vite, sans tournage.",
          "reponses": {
            "Formation": "Créer des vidéos de présentation avec un avatar IA."
          },
          "argumentaire": "Vidéos de présentation avec un avatar IA."
        }
      ],
      "reponses": {},
      "motsCles": "chargé de communication, marketing, vidéos d'entreprise, montage, Premiere Pro, sous-titres, réseaux sociaux",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Chargé(e) de communication ou de marketing qui produit des vidéos pour l'entreprise.",
        "difficulte": "Montage mal maîtrisé ou sous-traité ; vidéos au rendu amateur.",
        "attente": "Produire en interne des vidéos professionnelles, montées et habillées."
      }
    },
    {
      "id": "video-002",
      "besoin": "Créer des vidéos pédagogiques sans studio.",
      "categorie": "Formation",
      "complements": [
        {
          "formation": "ped-genially",
          "pourquoi": "Créer des contenus de formation interactifs."
        }
      ],
      "domaine": "video",
      "nom": "Formateur(trice) ou responsable formation",
      "ordre": 2,
      "parcours": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Le plus adapté : vidéos pédagogiques sans se filmer.",
          "reponses": {
            "Formation": "Capsules de formation avec avatar IA, faciles à mettre à jour."
          },
          "argumentaire": "Des capsules de formation avec un avatar IA, sans se filmer, faciles à mettre à jour quand le contenu change."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "Pour monter ses propres captations.",
          "reponses": {
            "Formation": "Monter ses vidéos de cours et tutoriels."
          },
          "argumentaire": "Cours et tutoriels."
        }
      ],
      "reponses": {},
      "motsCles": "formateur, responsable formation, vidéos pédagogiques, e-learning, avatar IA, Synthesia, HeyGen, sans studio",
      "categories": [
        "Formation"
      ],
      "besoinDetail": {
        "situation": "Formateur(trice) ou responsable formation.",
        "difficulte": "Pas de studio ni de temps pour se filmer ; vidéos difficiles à mettre à jour.",
        "attente": "Créer des vidéos pédagogiques sans studio, faciles à modifier."
      }
    },
    {
      "id": "video-003",
      "besoin": "Présenter ses produits et son entreprise en vidéo, sans agence.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "video",
      "nom": "Dirigeant(e) de TPE, e-commerçant(e)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Le plus adapté : vidéos produits sans tournage.",
          "reponses": {
            "Formation": "Vidéos de présentation de produits ou de l’entreprise avec un avatar IA."
          },
          "argumentaire": "Des vidéos de présentation des produits ou de l'entreprise avec un avatar IA, sans tournage ni agence."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "À proposer s'il filme déjà et veut un rendu professionnel pour son site et ses réseaux.",
          "reponses": {
            "Formation": "Monter ses vidéos pour le site et les réseaux."
          }
        }
      ],
      "reponses": {},
      "motsCles": "dirigeant, TPE, e-commerçant, vidéos produits, présentation d'entreprise, avatar, sans agence, commerce, artisanat",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Dirigeant(e) de TPE ou e-commerçant(e).",
        "difficulte": "Besoin de vidéos produits et de présentation, sans budget agence.",
        "attente": "Présenter ses produits et son entreprise en vidéo, rapidement."
      }
    },
    {
      "id": "video-004",
      "besoin": "Un montage plus professionnel pour ses vidéos.",
      "categorie": "Création et contenus",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        },
        {
          "formation": "paoia-design",
          "pourquoi": "Créer des visuels avec les outils IA du design (Midjourney, Ideogram)."
        }
      ],
      "domaine": "video",
      "nom": "Vidéaste ou créateur(trice) de contenu",
      "ordre": 4,
      "parcours": [
        {
          "formation": "video-premiere",
          "pourquoi": "Le plus adapté : le logiciel de montage de référence.",
          "reponses": {
            "Formation": "Montage avancé, son, titrage et export pour chaque plateforme."
          },
          "argumentaire": "Le logiciel de montage de référence. Montage avancé, son, titrage et export adapté à chaque plateforme."
        }
      ],
      "reponses": {},
      "motsCles": "vidéaste, monteur, créateur de contenu, YouTube, montage professionnel, étalonnage, Premiere Pro, indépendant, créatif",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Vidéaste ou créateur(trice) de contenu.",
        "difficulte": "Montage limité par ses outils actuels ; rendu à professionnaliser.",
        "attente": "Maîtriser un logiciel de montage professionnel pour chaque plateforme."
      }
    },
    {
      "id": "web-001",
      "besoin": "Créer et faire vivre son site sans dépendre d’un prestataire.",
      "categorie": "Dirigeants et indépendants",
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer ses visuels soi-même, sans compétences graphiques."
        }
      ],
      "domaine": "web",
      "nom": "Auto-entrepreneur ou TPE qui veut son site",
      "ordre": 1,
      "parcours": [
        {
          "formation": "web-wordpress",
          "pourquoi": "Le plus adapté : créer son site soi-même.",
          "reponses": {
            "Formation": "Créer et gérer un site WordPress complet ; certification Tosa."
          },
          "argumentaire": "Il crée et gère un site WordPress complet, en autonomie, avec certification Tosa. Résultat : plus besoin d'un prestataire pour chaque modification."
        },
        {
          "formation": "web-geo-seo",
          "pourquoi": "Pour être trouvé une fois le site en ligne.",
          "reponses": {
            "Formation": "Référencement naturel et contenus optimisés grâce à l’IA."
          },
          "argumentaire": "Référencement naturel et contenus optimisés grâce à l'IA."
        }
      ],
      "reponses": {},
      "motsCles": "site internet, site vitrine, WordPress, autonomie, sans prestataire, mise à jour, TPE, auto-entrepreneur, indépendant, créatif",
      "categories": [
        "Dirigeants et indépendants"
      ],
      "besoinDetail": {
        "situation": "Auto-entrepreneur ou TPE qui veut son site, ou le reprendre en main.",
        "difficulte": "Dépendance à un prestataire pour la moindre modification ; coûts.",
        "attente": "Créer et faire vivre son site soi-même."
      }
    },
    {
      "id": "web-002",
      "besoin": "Améliorer la visibilité du site et produire du contenu efficace.",
      "categorie": "Communication et marketing",
      "complements": [
        {
          "formation": "com-canva-pro",
          "pourquoi": "Aller plus loin sur Canva : charte, vidéo, IA, automatisation."
        },
        {
          "formation": "ia-webmaster",
          "pourquoi": "Parcours IA certifiant : référencement GEO-SEO et contenus du site avec l'IA."
        }
      ],
      "domaine": "web",
      "nom": "Chargé(e) de communication web, webmaster",
      "ordre": 2,
      "parcours": [
        {
          "formation": "web-geo-seo",
          "pourquoi": "Le plus adapté : référencement et contenus.",
          "reponses": {
            "Formation": "Stratégie éditoriale, SEO et visibilité dans les réponses des IA."
          },
          "argumentaire": "Stratégie éditoriale, SEO et visibilité dans les réponses des IA (GEO), avec des contenus produits grâce à l'IA. Résultat : un site plus visible."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "S’il gère un site WordPress.",
          "reponses": {
            "Formation": "Administration et évolution du site WordPress ; certification Tosa."
          },
          "argumentaire": "Administration et évolution du site, avec certification Tosa."
        }
      ],
      "reponses": {},
      "motsCles": "webmaster, chargé de communication web, référencement, SEO, GEO, contenus web, Google, WordPress",
      "categories": [
        "Communication et marketing"
      ],
      "besoinDetail": {
        "situation": "Gère le site et ses contenus.",
        "difficulte": "Visibilité insuffisante sur Google et dans les réponses des IA.",
        "attente": "Améliorer le référencement et produire des contenus efficaces."
      }
    },
    {
      "id": "web-003",
      "besoin": "Attirer plus de visiteurs sur sa boutique en ligne.",
      "categorie": "Commerce, artisanat, tourisme",
      "complements": [
        {
          "formation": "pao-prise-vue",
          "pourquoi": "Réussir ses photos et vidéos : lumière, cadrage, exposition."
        }
      ],
      "domaine": "web",
      "nom": "E-commerçant(e)",
      "ordre": 3,
      "parcours": [
        {
          "formation": "web-geo-seo",
          "pourquoi": "Le plus adapté : du trafic naturel vers la boutique.",
          "reponses": {
            "Formation": "Fiches produits et contenus optimisés pour Google et les IA."
          },
          "argumentaire": "Fiches produits et contenus optimisés pour Google et les réponses des IA, pour du trafic naturel vers la boutique."
        },
        {
          "formation": "web-wordpress",
          "pourquoi": "À proposer pour gérer et faire évoluer lui-même son site WordPress.",
          "reponses": {
            "Formation": "Gérer et faire évoluer son site WordPress ; certification Tosa."
          }
        }
      ],
      "reponses": {},
      "motsCles": "e-commerce, boutique en ligne, WooCommerce, trafic, référencement, fiches produits, SEO, artisanat",
      "categories": [
        "Commerce, artisanat, tourisme"
      ],
      "besoinDetail": {
        "situation": "Gère une boutique en ligne.",
        "difficulte": "Trafic insuffisant ; fiches produits peu visibles.",
        "attente": "Attirer plus de visiteurs grâce au référencement naturel."
      }
    },
    {
      "id": "web-004",
      "besoin": "Écrire des contenus qui se positionnent bien.",
      "categorie": "Création et contenus",
      "complements": [],
      "domaine": "web",
      "nom": "Rédacteur(trice), créateur(trice) de contenu",
      "ordre": 4,
      "parcours": [
        {
          "formation": "web-geo-seo",
          "pourquoi": "Le plus adapté : rédaction optimisée avec l’IA.",
          "reponses": {
            "Formation": "Rédaction SEO et stratégie éditoriale assistées par l’IA."
          },
          "argumentaire": "Rédaction SEO, mots-clés et stratégie éditoriale assistées par l'IA, pour des contenus visibles sur Google et dans les réponses des IA."
        }
      ],
      "reponses": {},
      "motsCles": "rédacteur web, copywriter, blog, articles, SEO, GEO, mots-clés, stratégie éditoriale, IA, indépendant, créatif",
      "categories": [
        "Création et contenus"
      ],
      "besoinDetail": {
        "situation": "Rédacteur(trice) web ou créateur(trice) de contenu.",
        "difficulte": "Contenus qui ne se positionnent pas ; méthodes SEO en pleine évolution avec l'IA.",
        "attente": "Écrire des contenus bien positionnés, sur Google et dans les réponses des IA."
      }
    },
    {
      "id": "ia-030",
      "domaine": "ia",
      "categorie": "Communication et marketing",
      "nom": "Webmaster, chargé(e) de contenus web",
      "besoin": "Produire plus vite des contenus bien référencés, visibles sur Google et dans les réponses des IA.",
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données."
      },
      "parcours": [
        {
          "formation": "ia-webmaster",
          "pourquoi": "Le plus adapté : référencement et contenus du site.",
          "reponses": {
            "M2": "Stratégie éditoriale et GEO-SEO : des pages et articles optimisés pour Google et pour les réponses des IA.",
            "M3": "Visuels et voix off pour habiller pages, articles et vidéos du site."
          },
          "argumentaire": "Le M2 traite stratégie éditoriale et GEO-SEO, pour des pages et articles optimisés pour Google et pour les réponses des IA ; le M3 ajoute visuels et voix off pour habiller les contenus. Résultat : un site plus visible, alimenté plus vite."
        },
        {
          "formation": "ia-graphiste",
          "pourquoi": "S'il produit aussi les visuels du site.",
          "reponses": {
            "M2": "Prompts avancés, assistants et automatisations pour accélérer la production de contenus.",
            "M3": "Bannières et illustrations créées avec Midjourney ou Ideogram, finalisées dans Photoshop."
          },
          "argumentaire": "Prompts avancés au M2, bannières et illustrations avec Midjourney ou Ideogram, finalisées dans Photoshop, au M3."
        }
      ],
      "complements": [
        {
          "formation": "web-wordpress",
          "pourquoi": "Gérer et faire évoluer le site WordPress ; certification Tosa."
        }
      ],
      "motsCles": "webmaster, rédacteur web, chargé de contenus, SEO, GEO, référencement naturel, articles, blog, site internet, ChatGPT",
      "categories": [
        "Communication et marketing"
      ],
      "ordre": 26,
      "besoinDetail": {
        "situation": "Gère le site et ses contenus : pages, articles, référencement.",
        "difficulte": "La visibilité ne dépend plus seulement de Google mais aussi des réponses des IA ; production de contenus chronophage.",
        "attente": "Produire plus vite des contenus bien référencés, visibles sur Google et dans les réponses des IA."
      }
    },
    {
      "id": "ia-031",
      "domaine": "ia",
      "categorie": "Création et contenus",
      "nom": "Graphiste, chargé(e) de communication visuelle",
      "besoin": "Explorer plus de pistes créatives et livrer plus vite, en gardant la main sur le rendu final.",
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données."
      },
      "parcours": [
        {
          "formation": "ia-graphiste",
          "pourquoi": "Le plus adapté : textes et visuels avec les outils IA du design.",
          "reponses": {
            "M2": "Prompts avancés pour briefs, textes d'accompagnement et déclinaisons de campagnes.",
            "M3": "Générer des pistes visuelles avec Midjourney ou Ideogram et les finaliser dans Photoshop."
          },
          "argumentaire": "Le M3 lui fait générer des pistes visuelles avec Midjourney et Ideogram et les finaliser dans Photoshop ; le M2 traite briefs, textes d'accompagnement et déclinaisons de campagnes. Les droits d'auteur des images générées sont abordés. Résultat : plus de pistes, des délais tenus, la main gardée sur le rendu."
        }
      ],
      "complements": [
        {
          "formation": "paoia-adobe",
          "pourquoi": "L'IA intégrée à Photoshop et Illustrator, sans changer d'outil."
        }
      ],
      "motsCles": "graphiste, infographiste, directeur artistique, maquettiste, Midjourney, Ideogram, Photoshop, création visuelle, pistes créatives",
      "categories": [
        "Création et contenus"
      ],
      "ordre": 27,
      "besoinDetail": {
        "situation": "Crée des visuels et des supports de communication pour des clients ou en interne.",
        "difficulte": "Délais courts, besoin de proposer plusieurs pistes ; inquiétude sur la qualité et les droits des images générées.",
        "attente": "Explorer plus de pistes créatives et livrer plus vite, en gardant la main sur le rendu final."
      }
    },
    {
      "id": "ia-032",
      "domaine": "ia",
      "categorie": "Communication et marketing",
      "nom": "Chargé(e) de communication ou de marketing",
      "besoin": "Produire plus de contenus de campagne, textes et visuels, sans perdre en qualité ni en cohérence.",
      "reponses": {
        "M1": "Comprendre le fonctionnement de l'IA générative, rédiger des prompts efficaces, comparer les outils (ChatGPT, Mistral, Gemini, Claude…) et adopter les bons réflexes : limites, éthique et sécurité des données."
      },
      "parcours": [
        {
          "formation": "ia-graphiste",
          "pourquoi": "Le plus adapté : visuels et contenus de campagne.",
          "reponses": {
            "M2": "Campagnes, emailings et posts : prompts avancés et assistants pour produire plus vite, avec contrôle.",
            "M3": "Visuels de campagne et de réseaux sociaux créés avec l'IA, dans le respect de la charte."
          },
          "argumentaire": "Campagnes, emailings et posts au M2 avec des prompts avancés et des assistants ; visuels de campagne cohérents avec la charte au M3. Résultat : plus de contenus, sans perdre en qualité."
        },
        {
          "formation": "ia-webmaster",
          "pourquoi": "Si le site et le référencement font partie de ses missions.",
          "reponses": {
            "M2": "Articles et pages optimisés pour le référencement naturel et la visibilité dans les IA.",
            "M3": "Visuels et voix off pour enrichir les contenus du site et des réseaux."
          },
          "argumentaire": "Articles et pages optimisés pour Google et les IA au M2."
        }
      ],
      "complements": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Des vidéos avec avatar IA, déclinables en plusieurs langues."
        }
      ],
      "motsCles": "chargé de communication, chargé de marketing, community manager, campagnes, emailing, newsletter, réseaux sociaux, contenus, IA générative",
      "categories": [
        "Communication et marketing"
      ],
      "ordre": 28,
      "besoinDetail": {
        "situation": "Produit les campagnes, emailings, posts et visuels de la structure.",
        "difficulte": "Volume de contenus en hausse, équipe réduite ; cohérence avec la charte à préserver.",
        "attente": "Produire plus de contenus de qualité, textes et visuels, sans perdre en cohérence."
      }
    },
    {
      "id": "pao-006",
      "domaine": "pao",
      "categorie": "Création et contenus",
      "nom": "Maquettiste ou assistant(e) PAO (imprimerie, édition, agence)",
      "besoin": "Monter des documents prêts pour l'impression : catalogues, magazines, plaquettes.",
      "reponses": {},
      "parcours": [
        {
          "formation": "pao-indesign",
          "pourquoi": "Le plus adapté : la mise en page professionnelle.",
          "reponses": {
            "Formation": "Gabarits, styles, longs documents et export PDF pour l'imprimeur ; certification Tosa."
          },
          "argumentaire": "Gabarits, styles, longs documents et export PDF pour l'imprimeur, avec certification Tosa. Résultat : des documents fiables, produits plus vite."
        },
        {
          "formation": "pao-illustrator",
          "pourquoi": "À proposer pour les logos, pictogrammes et illustrations vectorielles intégrés aux mises en page.",
          "reponses": {
            "Formation": "Logos, pictogrammes et illustrations nets à toutes les tailles ; certification Tosa."
          }
        },
        {
          "formation": "pao-photoshop-perf",
          "pourquoi": "S'il maîtrise déjà les bases de Photoshop.",
          "reponses": {
            "Formation": "Détourages, photomontages et retouches avancées pour l'impression."
          },
          "argumentaire": "Détourages, photomontages et retouches avancées pour l'impression."
        }
      ],
      "complements": [
        {
          "formation": "paoia-adobe",
          "pourquoi": "Gagner du temps grâce à l'IA intégrée aux logiciels Adobe."
        }
      ],
      "motsCles": "maquettiste, metteur en page, opérateur PAO, imprimerie, édition, catalogue, magazine, InDesign, impression, PDF",
      "categories": [
        "Création et contenus"
      ],
      "ordre": 6,
      "besoinDetail": {
        "situation": "Monte catalogues, magazines, plaquettes ou documents longs pour l'impression.",
        "difficulte": "Gabarits, styles et exports d'impression mal maîtrisés ; retouches et logos à reprendre.",
        "attente": "Produire des documents prêts pour l'imprimeur, de façon fiable et rapide."
      }
    },
    {
      "id": "bur-004",
      "domaine": "bur",
      "categorie": "Gestion et management",
      "nom": "Gestionnaire de stock, acheteur(se), logisticien(ne)",
      "besoin": "Croiser des extractions (ERP, fournisseurs) et suivre stocks et achats sans ressaisie.",
      "reponses": {},
      "parcours": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Le plus adapté : importer, nettoyer et croiser des données.",
          "reponses": {
            "Formation": "Power Query pour consolider les extractions, tableaux croisés et tableaux de bord de suivi des stocks et achats."
          },
          "argumentaire": "Power Query consolide automatiquement les extractions ERP et fournisseurs, puis tableaux croisés et tableaux de bord donnent un suivi clair des stocks et des achats. Résultat : fini la ressaisie."
        },
        {
          "formation": "bur-vba",
          "pourquoi": "Pour automatiser des traitements répétitifs.",
          "reponses": {
            "Formation": "Macros pour automatiser mises en forme, calculs et exports récurrents ; certification Tosa."
          },
          "argumentaire": "Mises en forme, calculs et exports récurrents."
        }
      ],
      "complements": [],
      "motsCles": "gestionnaire de stock, magasinier, acheteur, approvisionneur, logisticien, supply chain, ERP, inventaire, extractions, Power Query, logistique, achats",
      "categories": [
        "Gestion et management"
      ],
      "ordre": 4,
      "besoinDetail": {
        "situation": "Travaille avec des extractions d'ERP et des fichiers fournisseurs pour suivre stocks et achats.",
        "difficulte": "Données à nettoyer et croiser à la main, erreurs de ressaisie, suivi peu lisible.",
        "attente": "Consolider automatiquement ses données et suivre stocks et achats dans un tableau de bord fiable."
      }
    },
    {
      "id": "bur-005",
      "domaine": "bur",
      "categorie": "Gestion et management",
      "nom": "Dirigeant(e) de TPE-PME qui pilote ses chiffres",
      "besoin": "Suivre chiffre d'affaires, marges et trésorerie dans un tableau de bord fiable.",
      "reponses": {},
      "parcours": [
        {
          "formation": "bur-excel-power",
          "pourquoi": "Le plus adapté : tableaux de bord et indicateurs.",
          "reponses": {
            "Formation": "Indicateurs, tableaux croisés et graphiques mis à jour en un clic à partir de ses exports comptables et commerciaux."
          },
          "argumentaire": "Il apprend à transformer ses exports comptables et commerciaux en indicateurs et graphiques mis à jour en un clic. Résultat : une vision claire de son activité pour décider plus vite."
        }
      ],
      "complements": [
        {
          "formation": "ia-admin",
          "pourquoi": "Déléguer une partie de l'administratif à l'IA (parcours certifiant)."
        }
      ],
      "motsCles": "dirigeant, gérant, chef d'entreprise, TPE, PME, chiffre d'affaires, marges, trésorerie, tableau de bord, pilotage, gestion, finance",
      "categories": [
        "Gestion et management"
      ],
      "ordre": 5,
      "besoinDetail": {
        "situation": "Pilote son entreprise à partir des exports comptables et commerciaux.",
        "difficulte": "Chiffres dispersés, peu de visibilité sur marges et trésorerie, pas de temps pour construire des outils.",
        "attente": "Un tableau de bord simple et fiable pour suivre chiffre d'affaires, marges et trésorerie et décider plus vite."
      }
    },
    {
      "id": "video-005",
      "domaine": "video",
      "categorie": "Administratif et commercial",
      "nom": "Commercial(e) ou chef(fe) de produit à l'international",
      "besoin": "Présenter produits et offres en vidéo, en plusieurs langues, sans tournage.",
      "reponses": {},
      "parcours": [
        {
          "formation": "video-ia-avatar",
          "pourquoi": "Le plus adapté : vidéos avec avatar, déclinées en plusieurs langues.",
          "reponses": {
            "Formation": "Script, avatar et voix, puis déclinaison multilingue de la même vidéo, sans tournage."
          },
          "argumentaire": "Écrire le script, choisir l'avatar et la voix, puis décliner la même vidéo en plusieurs langues, sans tournage. Résultat : des présentations produit pour chaque marché."
        },
        {
          "formation": "video-premiere",
          "pourquoi": "À proposer pour monter des vidéos tournées sur le terrain ou en salon.",
          "reponses": {
            "Formation": "Montage, titrage et export pour le web, les réseaux et les salons."
          }
        }
      ],
      "complements": [],
      "motsCles": "commercial export, chef de produit, international, multilingue, traduction, vidéos produits, salons, avatar IA, HeyGen, Synthesia",
      "categories": [
        "Administratif et commercial"
      ],
      "ordre": 5,
      "besoinDetail": {
        "situation": "Commercial(e) export ou chef(fe) de produit à l'international.",
        "difficulte": "Présenter offres et produits dans plusieurs langues, sans tournage ni traduction coûteuse.",
        "attente": "Produire des vidéos déclinées en plusieurs langues, rapidement."
      }
    },
    {
      "id": "cao-006",
      "domaine": "cao",
      "categorie": "Technique",
      "nom": "Paysagiste, aménagement extérieur",
      "besoin": "Montrer en 3D jardins, terrasses et aménagements avant les travaux.",
      "reponses": {},
      "parcours": [
        {
          "formation": "cao-sketchup",
          "pourquoi": "Le plus adapté : modéliser vite et présenter en 3D.",
          "reponses": {
            "Formation": "Terrain, terrasses, végétation et vues 3D à présenter aux clients ; certification ICDL."
          },
          "argumentaire": "Modéliser terrain, terrasses et végétation et produire des vues 3D à montrer aux clients avant les travaux. Résultat : des projets plus convaincants."
        },
        {
          "formation": "cao-autocad",
          "pourquoi": "À proposer pour fournir aux entreprises des plans d'implantation cotés et mis en page.",
          "reponses": {
            "Formation": "Plans d'implantation cotés et mis en page ; certification ICDL."
          }
        }
      ],
      "complements": [],
      "motsCles": "paysagiste, jardinier, aménagement extérieur, terrasse, jardin, piscine, espaces verts, plans 3D, SketchUp, bâtiment",
      "categories": [
        "Technique"
      ],
      "ordre": 6,
      "besoinDetail": {
        "situation": "Conçoit jardins, terrasses et aménagements extérieurs pour des particuliers ou des entreprises.",
        "difficulte": "Les clients ont du mal à imaginer le résultat ; plans d'implantation à fournir aux entreprises.",
        "attente": "Présenter les projets en 3D pour convaincre, et produire des plans cotés."
      }
    },
    {
      "id": "col-005",
      "domaine": "col",
      "categorie": "Administratif et commercial",
      "nom": "Commercial(e) ou équipe itinérante",
      "besoin": "Partager fichiers, agendas et comptes rendus en déplacement.",
      "reponses": {},
      "parcours": [
        {
          "formation": "col-workspace",
          "pourquoi": "Le plus adapté : Drive, Agenda et Meet sur ordinateur et smartphone.",
          "reponses": {
            "Formation": "Drive partagé, agendas d'équipe, visios Meet et documents co-édités en déplacement ; certification Tosa."
          },
          "argumentaire": "Drive partagé, agendas d'équipe, visios Meet et documents coédités, sur ordinateur comme sur smartphone. Résultat : tout est accessible en déplacement."
        },
        {
          "formation": "col-notion",
          "pourquoi": "Pour suivre ses clients et ses rendez-vous.",
          "reponses": {
            "Formation": "Base clients, suivi des rendez-vous et notes de visite au même endroit ; certification Tosa."
          },
          "argumentaire": "Base clients et notes de visite au même endroit."
        }
      ],
      "complements": [],
      "motsCles": "commercial itinérant, technicien itinérant, équipe terrain, mobilité, smartphone, agenda partagé, Drive, Meet, comptes rendus, entreprise, association",
      "categories": [
        "Administratif et commercial"
      ],
      "ordre": 5,
      "besoinDetail": {
        "situation": "Commercial(e) ou technicien(ne) souvent en déplacement, en lien avec son équipe.",
        "difficulte": "Fichiers restés au bureau, comptes rendus à retaper, agendas non synchronisés.",
        "attente": "Accéder à ses fichiers, partager agendas et comptes rendus depuis son smartphone, en déplacement."
      }
    },
    {
      "id": "web-005",
      "domaine": "web",
      "categorie": "Communication et marketing",
      "nom": "Association ou collectivité qui gère son site",
      "besoin": "Mettre à jour son site soi-même et être bien trouvé.",
      "reponses": {},
      "parcours": [
        {
          "formation": "web-wordpress",
          "pourquoi": "Le plus adapté : prendre la main sur le site.",
          "reponses": {
            "Formation": "Pages, actualités, agenda et médias mis à jour en autonomie ; certification Tosa."
          },
          "argumentaire": "Pages, actualités, agenda et médias mis à jour en autonomie, avec certification Tosa."
        },
        {
          "formation": "web-geo-seo",
          "pourquoi": "Pour être mieux trouvé sur Google et par les IA.",
          "reponses": {
            "Formation": "Des contenus pensés pour le référencement local et les réponses des IA."
          },
          "argumentaire": "Contenus pensés pour le référencement local et les réponses des IA."
        }
      ],
      "complements": [
        {
          "formation": "com-canva1",
          "pourquoi": "Créer les visuels des actualités et des événements."
        }
      ],
      "motsCles": "association, collectivité, mairie, commune, site institutionnel, actualités, agenda, WordPress, mise à jour, entreprise",
      "categories": [
        "Communication et marketing"
      ],
      "ordre": 5,
      "besoinDetail": {
        "situation": "Association ou collectivité qui gère son site.",
        "difficulte": "Mises à jour dépendantes d'un prestataire ; site peu trouvé.",
        "attente": "Mettre à jour le site en autonomie et être bien trouvé."
      }
    },
    {
      "id": "com-005",
      "domaine": "com",
      "categorie": "Administratif et commercial",
      "nom": "Agent immobilier, commercial(e) qui crée ses supports",
      "besoin": "Créer annonces, fiches produits et présentations soignées sans graphiste.",
      "reponses": {},
      "parcours": [
        {
          "formation": "com-canva1",
          "pourquoi": "Le plus adapté : des visuels pros en une journée.",
          "reponses": {
            "Formation": "Modèles d'annonces, de fiches et de posts déclinés à partir de sa charte."
          },
          "argumentaire": "En une journée, il crée des modèles d'annonces, de fiches et de publications déclinés à partir de sa charte."
        },
        {
          "formation": "com-canva-pro",
          "pourquoi": "Pour aller plus loin : charte, vidéo et IA.",
          "reponses": {
            "Formation": "Kit de marque, vidéos courtes et fonctions IA de Canva Pro."
          },
          "argumentaire": "Kit de marque, vidéos courtes et fonctions IA de Canva Pro."
        }
      ],
      "complements": [],
      "motsCles": "agent immobilier, mandataire, commercial, annonces, fiches produits, présentations, supports de vente, Canva, commerce, artisanat",
      "categories": [
        "Administratif et commercial"
      ],
      "ordre": 5,
      "besoinDetail": {
        "situation": "Agent immobilier ou commercial(e) qui crée lui-même ses annonces et supports de vente.",
        "difficulte": "Supports peu soignés ou longs à produire, sans graphiste.",
        "attente": "Créer rapidement des annonces, fiches et présentations soignées, à son image."
      }
    }
  ]
};
