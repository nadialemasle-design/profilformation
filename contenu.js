/* =====================================================================
   CONTENU DE L'APPLICATION — modifiable sans toucher au reste du code.
   Un domaine contient :
   - financement, certification : affichés une fois pour tout le domaine ;
   - ordreModules : l'ordre des lignes du tableau ;
   - formations : les parcours et leurs modules (code : titre) ;
   - profils : chaque profil liste ses parcours possibles, du plus adapté au moins adapté,
     avec « pourquoi » et l'argument des modules propres à ce parcours.
     Les arguments communs à plusieurs parcours sont dans « reponses » du profil.
   Mode d'emploi détaillé : voir README.md.
   ===================================================================== */
const DOMAINES = [
  {
    "id": "ia",
    "nom": "Intelligence artificielle",
    "financement": "Financement possible à partir de 4 jours de formation : le parcours complet est obligatoire.",
    "certification": "RS7232 CCI France : écrit de 2 h, puis oral de 30 min devant jury.",
    "ordreModules": [
      "M1",
      "M2",
      "M3"
    ],
    "formations": [
      {
        "id": "ia-admin",
        "nom": "Parcours IA Administratif & commercial",
        "intitule": "Utilisez l'IA générative au quotidien pour gagner en efficacité professionnelle & créativité",
        "duree": "4 jours",
        "modules": {
          "M1": "Socle · Fonctionnement de l'IA, bases pratiques, éthique et sécurité",
          "M2": "Perfectionnement IA générative · agents personnalisés",
          "M3": "Visuels et audio avec l'IA"
        }
      },
      {
        "id": "ia-form",
        "nom": "Parcours IA Formation & enseignement",
        "intitule": "Transformez vos pratiques pédagogiques avec l'IA générative",
        "duree": "4 jours",
        "modules": {
          "M1": "Socle · Fonctionnement de l'IA, bases pratiques, éthique et sécurité",
          "M2": "IA générative pour les formateurs · agents personnalisés",
          "M3": "Visuels et audio avec l'IA"
        }
      },
      {
        "id": "ia-rh",
        "nom": "Parcours IA Ressources humaines",
        "intitule": "Intégrez l'IA générative au quotidien pour gagner en efficacité, fiabilisez vos pratiques et stimulez votre créativité",
        "duree": "4 jours",
        "modules": {
          "M1": "Socle · Fonctionnement de l'IA, bases pratiques, éthique et sécurité",
          "M2": "Perfectionnement IA générative pour les RH · agents personnalisés",
          "M3": "Visuels et audio avec l'IA"
        }
      }
    ],
    "profils": [
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Assistant(e) de direction ou administratif(ve)",
        "besoin": "Rédiger plus vite courriers, comptes rendus et synthèses, sans être « technique ».",
        "reponses": {
          "M1": "Comprendre comment fonctionne l'IA, pratiquer les bases sur ses propres écrits, et savoir quelles informations ne jamais confier à un outil.",
          "M3": "Mise en forme de supports et de notes visuelles pour la direction."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Le plus adapté : les écrits du quotidien.",
            "reponses": {
              "M2": "Comptes rendus, synthèses de documents longs et courriers, avec vérification. Paramétrer un agent personnalisé pour les comptes rendus de réunion."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Commercial(e), chargé(e) d'affaires",
        "besoin": "Préparer ses rendez-vous, propositions et relances en moins de temps.",
        "reponses": {
          "M1": "Comprendre comment l'IA produit ses réponses pour mieux les cadrer ; bases pratiques ; éthique et sécurité des données clients.",
          "M3": "Visuels et supports de présentation sans passer par un graphiste."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Propositions, relances et préparation de rendez-vous.",
            "reponses": {
              "M2": "Préparation de rendez-vous, propositions commerciales et relances personnalisées sur ses vrais dossiers. Paramétrer un agent personnalisé qui prépare propositions et relances dans son style."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Gestionnaire ADV, service client",
        "besoin": "Répondre plus vite et mieux aux demandes clients, sans exposer leurs données.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et limites à connaître en relation client ; bases pratiques ; sécurité des données clients.",
          "M3": "Fiches et visuels d'information client."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Relation client et sécurisation des données.",
            "reponses": {
              "M2": "Modèles de réponses fiables et règles de sécurisation : données à ne jamais saisir, anonymisation. Paramétrer un agent personnalisé de réponses clients, nourri de ses procédures."
            }
          }
        }
      },
      {
        "categorie": "Dirigeants et indépendants",
        "nom": "Auto-entrepreneur, indépendant(e)",
        "besoin": "Gagner du temps sur la gestion, les devis et la communication de son activité.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA et choisir ses outils ; bases pratiques ; règles de sécurité pour protéger son activité et ses clients.",
          "M3": "Visuels et contenus audio pour communiquer sur son activité."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Gestion, devis, mails et prospection au quotidien.",
            "reponses": {
              "M2": "Devis, courriers, relances et prospection : des modèles réutilisables dès le lendemain. Paramétrer un agent personnalisé qui connaît son offre et ses tarifs."
            }
          }
        }
      },
      {
        "categorie": "Dirigeants et indépendants",
        "nom": "Dirigeant(e) de TPE, artisan, commerçant",
        "besoin": "Déléguer une partie de l'administratif, de la communication et des sujets RH.",
        "reponses": {
          "M1": "Comprendre ce qu'est l'IA et ce qu'elle change pour l'entreprise ; bases pratiques ; enjeux éthiques, juridiques et de sécurité.",
          "M3": "Visuels et contenus audio pour communiquer sur son activité."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Si sa priorité est l'administratif et la relation client.",
            "reponses": {
              "M2": "Devis, courriers, mails et organisation : des modèles réutilisables dès le lendemain. Paramétrer un agent personnalisé pour devis et mails clients."
            }
          },
          "ia-rh": {
            "pourquoi": "S'il gère lui-même le recrutement et le personnel.",
            "reponses": {
              "M2": "Offres d'emploi, fiches de poste, entretiens et cadre RGPD pour les données des salariés. Paramétrer un agent personnalisé pour les annonces et documents RH."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Formateur(trice) indépendant(e)",
        "besoin": "Concevoir plus vite et prouver la mise à jour de ses compétences à ses clients.",
        "reponses": {
          "M1": "Fonctionnement de l'IA pour l'expliquer à ses apprenants ; bases pratiques ; éthique, droits d'auteur et sécurité des contenus.",
          "M3": "Illustrations et capsules audio pour ses supports."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "Le plus adapté : conception et animation de formations.",
            "reponses": {
              "M2": "Panel d'outils IA pour créer supports de cours, études de cas, quiz et évaluations. Paramétrer des agents personnalisés, par exemple : un assistant de conception de séquences à son image et un générateur de quiz.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Formateur(trice) salarié(e) en organisme de formation",
        "besoin": "Intégrer l'IA dans ses séquences et savoir répondre aux stagiaires qui l'utilisent.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA pour en parler aux apprenants ; bases pratiques ; éthique, triche et sécurité.",
          "M3": "Illustrations et capsules audio pour ses supports."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "Pratiques pédagogiques avec l'IA.",
            "reponses": {
              "M2": "Panel d'outils IA pour concevoir supports, exercices et évaluations, et accompagner des stagiaires qui utilisent l'IA. Paramétrer des agents personnalisés, par exemple : un assistant de préparation de séances et un correcteur avec grille d'évaluation.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Enseignant(e) ou professeur",
        "besoin": "Préparer cours, exercices et évaluations plus rapidement.",
        "reponses": {
          "M1": "Comment fonctionne l'IA, en termes simples ; bases pratiques ; enjeux éthiques, évaluation et protection des données des élèves.",
          "M3": "Illustrations et capsules audio pour ses supports."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "Préparation de cours et d'évaluations.",
            "reponses": {
              "M2": "Panel d'outils IA pour préparer cours, exercices et évaluations adaptés au niveau. Paramétrer des agents personnalisés, par exemple : un générateur d'exercices différenciés et un assistant de correction avec barème.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Formateur(trice) interne, tuteur",
        "besoin": "Former ses collègues ou accompagner des alternants avec des supports efficaces.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA ; bases pratiques ; éthique et confidentialité des informations de l'entreprise.",
          "M3": "Illustrations et capsules audio pour ses supports."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "Concevoir des formations internes.",
            "reponses": {
              "M2": "Panel d'outils IA pour créer supports et évaluations à partir des documents de l'entreprise. Paramétrer des agents personnalisés, par exemple : un assistant de formation interne et un générateur de quiz de validation des acquis.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "RRH ou RH généraliste en PME",
        "besoin": "Gagner du temps sur les écrits RH et cadrer l'usage de l'IA par les salariés.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques ; enjeux éthiques, RGPD et sécurité pour définir ce que l'IA peut faire dans l'entreprise.",
          "M3": "Communication interne et supports d'intégration."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Le plus adapté : écrits RH et cadre d'usage.",
            "reponses": {
              "M2": "Écrits RH, plan de formation et règles de sécurisation conformes au RGPD. Paramétrer un agent personnalisé RH, cadré par les règles de l'entreprise."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "Chargé(e) de recrutement, cabinet ou agence",
        "besoin": "Accélérer annonces, trames d'entretien et synthèses candidats, sans biais.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA et l'origine des biais ; bases pratiques ; éthique et non-discrimination.",
          "M3": "Contenus de marque employeur."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Recrutement et marque employeur.",
            "reponses": {
              "M2": "Annonces, trames d'entretien et synthèses ; repérer et limiter les biais, la décision reste humaine. Paramétrer un agent personnalisé de rédaction d'annonces et de trames d'entretien."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "Assistant(e) RH, administration du personnel",
        "besoin": "Rédiger courriers, notes et procédures plus vite.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques sur ses écrits ; sécurité des données personnelles des salariés.",
          "M3": "Notes et affichages internes plus lisibles."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Écrits RH et protection des données personnelles.",
            "reponses": {
              "M2": "Modèles de courriers et procédures ; protection des données personnelles. Paramétrer un agent personnalisé pour courriers et procédures RH."
            }
          },
          "ia-admin": {
            "pourquoi": "Si son poste est surtout administratif.",
            "reponses": {
              "M2": "Courriers, notes, synthèses et organisation des documents. Paramétrer un agent personnalisé pour les courriers types."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "Responsable formation, développement des compétences",
        "besoin": "Construire plan de formation, supports d'intégration et formations internes.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques ; enjeux éthiques et de sécurité pour accompagner ensuite les équipes.",
          "M3": "Supports d'intégration visuels et audio."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Plan de développement des compétences et intégration.",
            "reponses": {
              "M2": "Plan de développement des compétences et parcours d'intégration structurés avec l'IA. Paramétrer un agent personnalisé pour le plan de développement des compétences."
            }
          },
          "ia-form": {
            "pourquoi": "S'il conçoit et anime aussi des formations internes.",
            "reponses": {
              "M2": "Panel d'outils IA pour concevoir modules internes, supports et évaluations. Paramétrer des agents personnalisés, par exemple : un assistant de conception de modules et un générateur de questionnaires d'évaluation.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "Manager qui assure la fonction RH",
        "besoin": "Être autonome sur les sujets RH du quotidien sans être spécialiste.",
        "reponses": {
          "M1": "Comprendre comment fonctionne l'IA, sans prérequis ; bases pratiques ; éthique et confidentialité des données des collaborateurs.",
          "M3": "Communication d'équipe simple et efficace."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Situations RH réelles, sans prérequis RH.",
            "reponses": {
              "M2": "Fiches de poste, entretiens, communications et cadre légal. Paramétrer un agent personnalisé pour ses documents RH courants."
            }
          }
        }
      },
      {
        "categorie": "Emploi et transition",
        "nom": "Demandeur d'emploi, personne en reconversion",
        "besoin": "Acquérir une compétence recherchée et la prouver sur son CV.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA ; bases pratiques accessibles à tous ; usages responsables et sécurisés.",
          "M3": "Compétence multimédia en plus, valorisable en candidature."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "S'il vise un poste administratif ou commercial.",
            "reponses": {
              "M2": "Cas professionnels concrets qui préparent aux usages en entreprise. Paramétrer un agent personnalisé, compétence directement valorisable en entreprise."
            }
          },
          "ia-form": {
            "pourquoi": "S'il se reconvertit vers la formation.",
            "reponses": {
              "M2": "Panel d'outils IA pour créer supports de cours et évaluations, et se positionner comme formateur. Paramétrer des agents personnalisés, par exemple : un assistant de conception pédagogique et un générateur de quiz.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Comptable, assistant(e) de gestion",
        "besoin": "Synthèses, courriers aux clients et procédures plus rapides, sans exposer les chiffres.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et risques d'erreur sur les chiffres ; bases pratiques ; confidentialité des données financières.",
          "M3": "Tableaux et notes plus lisibles pour les clients ou la direction."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Écrits de gestion et sécurisation des données chiffrées.",
            "reponses": {
              "M2": "Courriers, synthèses et procédures ; anonymiser les données financières avant toute saisie. Paramétrer un agent personnalisé pour courriers clients et procédures."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Secrétaire ou assistant(e) en cabinet (médical, juridique, libéral)",
        "besoin": "Courriers et comptes rendus plus rapides, avec des données très sensibles.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA ; bases pratiques ; secret professionnel et données qui ne doivent jamais être saisies.",
          "M3": "Affichages et documents d'information pour la patientèle ou la clientèle."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Écrits du quotidien avec une exigence forte de confidentialité.",
            "reponses": {
              "M2": "Modèles de courriers et de comptes rendus sans données identifiantes ; règles de confidentialité et vérification. Paramétrer un agent personnalisé pour les courriers types, sans données identifiantes."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Responsable administratif(ve) et services généraux (office manager)",
        "besoin": "Gérer à la fois l'administratif, l'accueil des salariés et la communication interne.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques pour toutes ses tâches ; règles d'éthique et de sécurité à diffuser en interne.",
          "M3": "Visuels et messages audio pour la communication interne."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Si sa priorité est l'administratif et l'organisation.",
            "reponses": {
              "M2": "Courriers, comptes rendus, organisation et suivi des dossiers. Paramétrer un agent personnalisé pour l'organisation et le suivi des dossiers."
            }
          },
          "ia-rh": {
            "pourquoi": "S'il gère aussi l'intégration et le suivi des salariés.",
            "reponses": {
              "M2": "Livret d'accueil, communications internes, procédures RH et données personnelles. Paramétrer un agent personnalisé d'accueil des nouveaux salariés."
            }
          }
        }
      },
      {
        "categorie": "Ressources humaines",
        "nom": "Gestionnaire de paie",
        "besoin": "Notes aux salariés, procédures et réponses aux questions sur la paie.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et limites sur des sujets réglementés ; bases pratiques ; confidentialité des données de paie.",
          "M3": "Notes et visuels explicatifs pour les salariés."
        },
        "parcours": {
          "ia-rh": {
            "pourquoi": "Le plus adapté : écrits RH et données personnelles.",
            "reponses": {
              "M2": "Notes d'information, procédures et réponses types ; protection des données des salariés. Paramétrer un agent personnalisé de réponses aux questions de paie."
            }
          },
          "ia-admin": {
            "pourquoi": "Si son poste est surtout administratif et comptable.",
            "reponses": {
              "M2": "Synthèses, courriers et procédures avec vérification systématique. Paramétrer un agent personnalisé pour procédures et synthèses."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Agent immobilier, négociateur",
        "besoin": "Annonces, comptes rendus de visite et relances clients plus rapides.",
        "reponses": {
          "M1": "Comprendre le fonctionnement de l'IA ; bases pratiques ; sécurité des données des vendeurs et acquéreurs.",
          "M3": "Visuels d'annonces et supports de présentation des biens."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Rédaction commerciale et suivi des clients.",
            "reponses": {
              "M2": "Annonces attractives, comptes rendus de visite, relances et propositions personnalisées. Paramétrer un agent personnalisé de rédaction d'annonces à son style."
            }
          }
        }
      },
      {
        "categorie": "Fonctions administratives et commerciales",
        "nom": "Chargé(e) d'accueil, conseiller(ère) clientèle",
        "besoin": "Répondre par écrit, clairement et rapidement, aux demandes.",
        "reponses": {
          "M1": "Comment fonctionne l'IA, en termes simples ; bases pratiques ; éthique et protection des données du public.",
          "M3": "Fiches pratiques et affichages pour le public."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Relation client écrite au quotidien.",
            "reponses": {
              "M2": "Réponses types adaptables, reformulation, ton juste et vérification. Paramétrer un agent personnalisé de réponses types, nourri des informations de la structure."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Responsable qualité (dont Qualiopi)",
        "besoin": "Procédures, preuves, questionnaires et bilans plus rapides.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques ; enjeux éthiques et de sécurité pour encadrer son usage dans l'organisme.",
          "M3": "Supports visuels pour présenter procédures et résultats."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "En organisme de formation : qualité et pratiques pédagogiques.",
            "reponses": {
              "M2": "Panel d'outils IA pour concevoir questionnaires et évaluations, et analyser les retours. Paramétrer des agents personnalisés, par exemple : un agent qualité nourri des procédures de l'organisme et un assistant d'analyse des questionnaires de satisfaction.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          },
          "ia-admin": {
            "pourquoi": "En entreprise : procédures et documents qualité.",
            "reponses": {
              "M2": "Rédaction et mise à jour de procédures, synthèses et comptes rendus d'audit. Paramétrer un agent personnalisé pour rédiger et mettre à jour les procédures."
            }
          }
        }
      },
      {
        "categorie": "Formation et enseignement",
        "nom": "Conseiller(ère) en insertion, orientation, bilan de compétences",
        "besoin": "Préparer ses entretiens, synthèses et supports d'atelier.",
        "reponses": {
          "M1": "Fonctionnement de l'IA et bases pratiques ; éthique, biais et protection des données des bénéficiaires.",
          "M3": "Supports d'atelier visuels et audio."
        },
        "parcours": {
          "ia-form": {
            "pourquoi": "Ateliers collectifs et accompagnement.",
            "reponses": {
              "M2": "Panel d'outils IA pour créer supports d'atelier et outils d'évaluation des compétences. Paramétrer des agents personnalisés, par exemple : un assistant de préparation d'ateliers et un générateur d'exercices d'auto-positionnement.",
              "M3": "Illustrations et capsules audio pour ses supports."
            }
          },
          "ia-rh": {
            "pourquoi": "Bilans, projets professionnels et recherche d'emploi.",
            "reponses": {
              "M2": "Synthèses de bilan, CV et lettres travaillés avec les bénéficiaires, sans biais. Paramétrer un agent personnalisé d'aide aux CV et lettres."
            }
          }
        }
      },
      {
        "categorie": "Dirigeants et indépendants",
        "nom": "Commerçant(e), restaurateur",
        "besoin": "Menus, affichages, mails clients et réponses aux avis en ligne.",
        "reponses": {
          "M1": "Comprendre ce qu'est l'IA et comment elle fonctionne ; bases pratiques ; bons réflexes de sécurité.",
          "M3": "Visuels de menus, d'offres et d'affichages en boutique."
        },
        "parcours": {
          "ia-admin": {
            "pourquoi": "Gestion et relation client au quotidien.",
            "reponses": {
              "M2": "Réponses aux avis, mails clients, fiches produits et organisation. Paramétrer un agent personnalisé pour répondre aux avis et aux clients."
            }
          }
        }
      }
    ]
  },
  {
    "id": "rs",
    "nom": "Réseaux sociaux",
    "financement": "Financement possible à partir de 2 jours de formation.",
    "certification": "RS7643 Alternative digital : épreuve individuelle de 90 min, à distance sur PC.",
    "ordreModules": [
      "M1 Socle",
      "M1 Base",
      "M2.1",
      "M2.2",
      "M2.3",
      "M3"
    ],
    "formations": [
      {
        "id": "rs-simple",
        "nom": "Stratégie réseaux · Parcours simple",
        "intitule": "Réseaux sociaux - Parcours 3 jours",
        "duree": "3 jours",
        "modules": {
          "M1 Base": "Créer et animer sa présence : de la cible à la page pro",
          "M2.1": "Stratégie de communication digitale : optimiser ses publications"
        }
      },
      {
        "id": "rs-marque",
        "nom": "Réseaux & identité de marque",
        "intitule": "Développer son image de marque sur les plateformes",
        "duree": "4 jours",
        "modules": {
          "M1 Socle": "Bases de la marque digitale : du positionnement à la charte graphique",
          "M1 Base": "Créer et animer sa présence : de la cible à la page pro",
          "M2.1": "Stratégie de communication digitale : optimiser ses publications"
        }
      },
      {
        "id": "rs-linkedin",
        "nom": "Stratégie réseaux pro · LinkedIn",
        "intitule": "Professionnaliser sa présence sur les réseaux sociaux",
        "duree": "4 jours",
        "modules": {
          "M1 Base": "Créer et animer sa présence : de la cible à la page pro",
          "M2.1": "Stratégie de communication digitale : optimiser ses publications",
          "M2.2": "LinkedIn : réputation professionnelle, contenus et réseau"
        }
      },
      {
        "id": "rs-local",
        "nom": "Réseaux & ancrage local",
        "intitule": "Construire sa notoriété locale et digitale",
        "duree": "4 jours",
        "modules": {
          "M1 Base": "Créer et animer sa présence : de la cible à la page pro",
          "M2.1": "Stratégie de communication digitale : optimiser ses publications",
          "M2.3": "Visibilité locale : Google Business Profile et référencement local"
        }
      },
      {
        "id": "rs-video",
        "nom": "Réseaux & vidéo",
        "intitule": "Développer sa stratégie de communication et créer ses propres contenus",
        "duree": "5 jours",
        "modules": {
          "M1 Base": "Créer et animer sa présence : de la cible à la page pro",
          "M2.1": "Stratégie de communication digitale : optimiser ses publications",
          "M3": "Médiatisez-vous : filmer et monter ses vidéos sur smartphone"
        }
      }
    ],
    "profils": [
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Auto-entrepreneur qui démarre son activité",
        "besoin": "Se faire connaître et trouver ses premiers clients, avec peu de temps et sans budget agence.",
        "reponses": {
          "M1 Base": "Choisir les réseaux de sa cible et créer une page pro complète pendant la formation.",
          "M2.1": "Un rythme de publication tenable et des formats simples qui font venir des clients."
        },
        "parcours": {
          "rs-simple": {
            "pourquoi": "L'essentiel en 3 jours pour être présent et publier régulièrement.",
            "reponses": {}
          },
          "rs-marque": {
            "pourquoi": "S'il n'a pas encore de logo ni de positionnement clair.",
            "reponses": {
              "M1 Socle": "Définir son positionnement et sa charte graphique avant de publier."
            }
          },
          "rs-local": {
            "pourquoi": "Si ses clients sont dans sa ville ou sa zone d'intervention.",
            "reponses": {
              "M2.3": "Fiche Google Business Profile pour être trouvé près de chez lui."
            }
          },
          "rs-video": {
            "pourquoi": "S'il veut se montrer en vidéo pour créer la confiance.",
            "reponses": {
              "M3": "Filmer et monter ses vidéos seul, sur smartphone."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Auto-entrepreneur créatif, artisan d'art",
        "besoin": "Montrer ses créations et vendre en direct ou en ligne.",
        "reponses": {
          "M1 Base": "Page pro qui met en valeur ses créations.",
          "M2.1": "Publications régulières autour des créations, des coulisses et des ventes."
        },
        "parcours": {
          "rs-video": {
            "pourquoi": "Pour montrer le geste et les coulisses de fabrication.",
            "reponses": {
              "M3": "Vidéos de fabrication et de présentation tournées au smartphone."
            }
          },
          "rs-marque": {
            "pourquoi": "Pour un univers de marque reconnaissable.",
            "reponses": {
              "M1 Socle": "Univers visuel et charte qui reflètent son style."
            }
          },
          "rs-simple": {
            "pourquoi": "S'il a déjà une identité et veut surtout mieux publier.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Consultant(e), freelance, auto-entrepreneur en B2B",
        "besoin": "Trouver des clients professionnels et asseoir son expertise.",
        "reponses": {
          "M1 Base": "Identifier sa cible professionnelle et soigner sa présence.",
          "M2.1": "Une stratégie de contenu qui démontre son expertise."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le canal principal pour trouver des clients professionnels.",
            "reponses": {
              "M2.2": "Profil optimisé, publications et réseau ciblé pour générer des contacts."
            }
          },
          "rs-marque": {
            "pourquoi": "S'il doit d'abord clarifier son positionnement et son image.",
            "reponses": {
              "M1 Socle": "Positionnement et identité visuelle d'expert."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Praticien(ne) ou coach indépendant(e) (bien-être, cours, accompagnement)",
        "besoin": "Faire connaître son activité et rassurer de futurs clients.",
        "reponses": {
          "M1 Base": "Page pro claire sur l'offre et la prise de rendez-vous.",
          "M2.1": "Contenus qui créent la confiance et la proximité."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Si sa clientèle vient de sa ville.",
            "reponses": {
              "M2.3": "Être trouvé localement et valoriser ses avis clients."
            }
          },
          "rs-video": {
            "pourquoi": "Pour se présenter en vidéo avant le premier rendez-vous.",
            "reponses": {
              "M3": "Vidéos de présentation et de conseils tournées au smartphone."
            }
          },
          "rs-linkedin": {
            "pourquoi": "S'il accompagne aussi des entreprises ou des salariés.",
            "reponses": {
              "M2.2": "Présence LinkedIn pour toucher les entreprises."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Créateur(trice) d'entreprise qui lance sa marque",
        "besoin": "Définir son image avant de se lancer sur les réseaux.",
        "reponses": {
          "M1 Base": "Pages pro créées dès le départ aux couleurs de la marque.",
          "M2.1": "Publications cohérentes qui installent la marque."
        },
        "parcours": {
          "rs-marque": {
            "pourquoi": "Le plus adapté : l'identité de marque d'abord.",
            "reponses": {
              "M1 Socle": "Positionnement et charte graphique construits pour son activité."
            }
          },
          "rs-simple": {
            "pourquoi": "Si son identité est déjà définie (logo, charte).",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Restaurateur, hébergeur, acteur touristique",
        "besoin": "Remplir son établissement avec les habitants et les visiteurs.",
        "reponses": {
          "M1 Base": "Réseaux adaptés à ses clientèles locale et touristique.",
          "M2.1": "Publications qui donnent envie : plats, lieu, événements, saisons."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Pour être choisi sur Google par les visiteurs et les habitants.",
            "reponses": {
              "M2.3": "Fiche Google optimisée et gestion des avis clients."
            }
          },
          "rs-video": {
            "pourquoi": "Pour donner envie avec des vidéos du lieu et de l'expérience.",
            "reponses": {
              "M3": "Vidéos courtes du lieu, des plats, des activités."
            }
          },
          "rs-marque": {
            "pourquoi": "Pour un établissement en création ou à l'identité à affirmer.",
            "reponses": {
              "M1 Socle": "Positionnement et charte graphique de l'établissement."
            }
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Commerçant(e) de proximité (boutique, salon, épicerie)",
        "besoin": "Attirer la clientèle du quartier et être trouvé sur Google.",
        "reponses": {
          "M1 Base": "Pages pro tournées vers la clientèle locale.",
          "M2.1": "Publications sur les nouveautés, promotions et événements."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Le plus adapté : la visibilité de proximité.",
            "reponses": {
              "M2.3": "Fiche Google Business Profile complète : horaires, photos, avis."
            }
          },
          "rs-video": {
            "pourquoi": "Pour animer sa vitrine en ligne avec des vidéos.",
            "reponses": {
              "M3": "Vidéos des produits et de la boutique au smartphone."
            }
          },
          "rs-simple": {
            "pourquoi": "S'il a peu de temps et veut l'essentiel en 3 jours.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Artisan ou auto-entrepreneur du bâtiment et des services à domicile",
        "besoin": "Être trouvé par les clients de sa zone d'intervention.",
        "reponses": {
          "M1 Base": "Page pro qui montre ses réalisations.",
          "M2.1": "Avant / après et chantiers publiés régulièrement."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Le plus adapté : ses clients cherchent un artisan près de chez eux.",
            "reponses": {
              "M2.3": "Visibilité sur Google Maps et gestion des avis clients."
            }
          },
          "rs-video": {
            "pourquoi": "Pour montrer son savoir-faire en vidéo.",
            "reponses": {
              "M3": "Vidéos de chantiers et de réalisations au smartphone."
            }
          },
          "rs-simple": {
            "pourquoi": "S'il veut l'essentiel en 3 jours.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "E-commerçant(e), créateur(trice) de boutique en ligne",
        "besoin": "Se démarquer et amener du trafic vers sa boutique.",
        "reponses": {
          "M1 Base": "Réseaux adaptés à sa clientèle et pages reliées à la boutique.",
          "M2.1": "Publications qui valorisent les produits et génèrent des visites."
        },
        "parcours": {
          "rs-marque": {
            "pourquoi": "Pour une marque reconnaissable face à la concurrence en ligne.",
            "reponses": {
              "M1 Socle": "Identité de marque et univers visuel des produits."
            }
          },
          "rs-video": {
            "pourquoi": "Pour présenter ses produits en vidéo.",
            "reponses": {
              "M3": "Vidéos produits courtes, tournées et montées au smartphone."
            }
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Artisan ou TPE présent sur les réseaux mais irrégulier",
        "besoin": "Passer de publications au coup par coup à une présence suivie.",
        "reponses": {
          "M1 Base": "Audit de la page existante et corrections prioritaires.",
          "M2.1": "Planning éditorial et lecture des statistiques."
        },
        "parcours": {
          "rs-simple": {
            "pourquoi": "Pour structurer sa présence en 3 jours.",
            "reponses": {}
          },
          "rs-local": {
            "pourquoi": "Si sa clientèle est locale.",
            "reponses": {
              "M2.3": "Fiche Google à jour pour compléter les réseaux."
            }
          },
          "rs-video": {
            "pourquoi": "Pour publier des vidéos qui retiennent l'attention.",
            "reponses": {
              "M3": "Formats vidéo courts réalisés au smartphone."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Salarié(e) à qui l'on confie les réseaux de l'entreprise",
        "besoin": "Prendre en charge les réseaux sans formation en communication.",
        "reponses": {
          "M1 Base": "Bases solides : cible, plateformes, page professionnelle.",
          "M2.1": "Méthode pour proposer et tenir une stratégie de publication."
        },
        "parcours": {
          "rs-simple": {
            "pourquoi": "L'essentiel pour démarrer en 3 jours.",
            "reponses": {}
          },
          "rs-video": {
            "pourquoi": "Si l'entreprise attend aussi des vidéos.",
            "reponses": {
              "M3": "Production vidéo autonome au smartphone."
            }
          },
          "rs-linkedin": {
            "pourquoi": "Si l'entreprise travaille surtout avec des professionnels.",
            "reponses": {
              "M2.2": "Animer la page LinkedIn de l'entreprise."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Responsable communication ou marketing (TPE-PME, collectivité)",
        "besoin": "Harmoniser l'image et produire des contenus en interne.",
        "reponses": {
          "M1 Base": "Audit de la présence existante, plateforme par plateforme.",
          "M2.1": "Stratégie de publication cohérente et mesurable."
        },
        "parcours": {
          "rs-marque": {
            "pourquoi": "Pour harmoniser l'image sur toutes les plateformes.",
            "reponses": {
              "M1 Socle": "Charte graphique de référence pour toutes les prises de parole."
            }
          },
          "rs-video": {
            "pourquoi": "Pour produire des vidéos en interne.",
            "reponses": {
              "M3": "Prise de vue, son et montage sur smartphone."
            }
          },
          "rs-linkedin": {
            "pourquoi": "Pour la communication B2B et institutionnelle.",
            "reponses": {
              "M2.2": "Page entreprise et contenus LinkedIn."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Dirigeant(e) de TPE-PME",
        "besoin": "Incarner son entreprise et gagner en crédibilité.",
        "reponses": {
          "M1 Base": "Articuler page entreprise et présence du dirigeant.",
          "M2.1": "Messages clés et calendrier de publication."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Pour sa réputation auprès des clients et partenaires professionnels.",
            "reponses": {
              "M2.2": "Prise de parole et réseau du dirigeant sur LinkedIn."
            }
          },
          "rs-marque": {
            "pourquoi": "Si l'image de l'entreprise est à revoir.",
            "reponses": {
              "M1 Socle": "Positionnement et identité de l'entreprise."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Commercial(e) B2B, business developer",
        "besoin": "Prospecter et entretenir sa relation client sur les réseaux.",
        "reponses": {
          "M1 Base": "Cibler les bons interlocuteurs.",
          "M2.1": "Contenus qui ouvrent la conversation."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le canal de la prospection B2B.",
            "reponses": {
              "M2.2": "Développer et animer son réseau pour prospecter."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "RH, chargé(e) de recrutement",
        "besoin": "Valoriser la marque employeur et attirer des candidats.",
        "reponses": {
          "M1 Base": "Présence pensée pour les candidats.",
          "M2.1": "Publications marque employeur régulières."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le réseau des candidats et des recruteurs.",
            "reponses": {
              "M2.2": "Diffuser les offres et développer son vivier."
            }
          },
          "rs-video": {
            "pourquoi": "Pour des vidéos métiers et des témoignages de salariés.",
            "reponses": {
              "M3": "Vidéos de salariés et de métiers au smartphone."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Salarié(e) ou bénévole d'association",
        "besoin": "Faire connaître les actions et mobiliser son public.",
        "reponses": {
          "M1 Base": "Page claire, adaptée aux adhérents et partenaires.",
          "M2.1": "Publications qui annoncent et valorisent les événements."
        },
        "parcours": {
          "rs-simple": {
            "pourquoi": "L'essentiel en 3 jours, avec peu de moyens.",
            "reponses": {}
          },
          "rs-video": {
            "pourquoi": "Pour raconter les actions en vidéo.",
            "reponses": {
              "M3": "Vidéos d'événements et de témoignages au smartphone."
            }
          }
        }
      },
      {
        "categorie": "Emploi et transition",
        "nom": "Salarié(e) ou demandeur d'emploi en transition",
        "besoin": "Être visible des recruteurs et valoriser son parcours.",
        "reponses": {
          "M1 Base": "Définir sa cible : secteurs, entreprises, recruteurs.",
          "M2.1": "Partager des contenus qui montrent ses compétences."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le plus adapté pour une recherche d'emploi ou une évolution.",
            "reponses": {
              "M2.2": "Profil optimisé et réseau développé vers son projet."
            }
          },
          "rs-simple": {
            "pourquoi": "S'il vise un métier où il gérera des réseaux sociaux.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Agent immobilier, mandataire indépendant",
        "besoin": "Mettre en avant ses biens et être reconnu dans son secteur.",
        "reponses": {
          "M1 Base": "Choisir les réseaux de ses acheteurs et vendeurs, page pro complète.",
          "M2.1": "Publications de biens, de ventes réalisées et de conseils locaux."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Le plus adapté : être la référence de son secteur.",
            "reponses": {
              "M2.3": "Fiche Google, avis clients et visibilité dans les recherches locales."
            }
          },
          "rs-video": {
            "pourquoi": "Pour des visites vidéo des biens.",
            "reponses": {
              "M3": "Visites et présentations de biens filmées et montées au smartphone."
            }
          },
          "rs-linkedin": {
            "pourquoi": "Pour travailler avec des professionnels et investisseurs.",
            "reponses": {
              "M2.2": "Réseau d'apporteurs d'affaires et de partenaires sur LinkedIn."
            }
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Agriculteur, producteur en vente directe",
        "besoin": "Faire connaître sa ferme, ses points de vente et ses marchés.",
        "reponses": {
          "M1 Base": "Page pro avec produits, horaires et lieux de vente.",
          "M2.1": "Publications de saison, récoltes et annonces de marchés."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Le plus adapté : ses clients sont autour de chez lui.",
            "reponses": {
              "M2.3": "Fiche Google de la ferme ou du magasin, avis et itinéraire."
            }
          },
          "rs-video": {
            "pourquoi": "Pour montrer la ferme et le travail au quotidien.",
            "reponses": {
              "M3": "Vidéos de la ferme, des produits et des coulisses au smartphone."
            }
          },
          "rs-marque": {
            "pourquoi": "Pour une marque de produits reconnaissable.",
            "reponses": {
              "M1 Socle": "Identité de la ferme et de ses produits : nom, logo, couleurs."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Photographe, vidéaste indépendant",
        "besoin": "Montrer son style et trouver des clients.",
        "reponses": {
          "M1 Base": "Choisir les réseaux où se trouvent ses clients, portfolio en ligne.",
          "M2.1": "Rythme de publication et formats qui valorisent ses réalisations."
        },
        "parcours": {
          "rs-marque": {
            "pourquoi": "Pour une signature visuelle reconnaissable.",
            "reponses": {
              "M1 Socle": "Positionnement et identité qui reflètent son style."
            }
          },
          "rs-video": {
            "pourquoi": "Pour des formats courts adaptés aux réseaux.",
            "reponses": {
              "M3": "Formats verticaux et montage rapide sur smartphone pour les réseaux."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Organisateur(trice) d'événements, wedding planner",
        "besoin": "Donner envie avec ses réalisations et se démarquer.",
        "reponses": {
          "M1 Base": "Page pro qui présente ses prestations et ses réalisations.",
          "M2.1": "Publications avant, pendant et après les événements."
        },
        "parcours": {
          "rs-video": {
            "pourquoi": "Pour faire vivre l'émotion des événements.",
            "reponses": {
              "M3": "Vidéos d'ambiance et de coulisses tournées au smartphone."
            }
          },
          "rs-marque": {
            "pourquoi": "Pour une image haut de gamme et cohérente.",
            "reponses": {
              "M1 Socle": "Positionnement et univers visuel de sa marque."
            }
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Artiste, musicien(ne), auteur(e)",
        "besoin": "Développer son public et annoncer ses dates ou ses sorties.",
        "reponses": {
          "M1 Base": "Choisir ses réseaux selon son public, page artiste complète.",
          "M2.1": "Calendrier de publications autour des dates, sorties et coulisses."
        },
        "parcours": {
          "rs-marque": {
            "pourquoi": "Pour une identité d'artiste reconnaissable.",
            "reponses": {
              "M1 Socle": "Univers, positionnement et charte visuelle."
            }
          },
          "rs-video": {
            "pourquoi": "Pour partager extraits, concerts et coulisses.",
            "reponses": {
              "M3": "Extraits, teasers et coulisses filmés et montés au smartphone."
            }
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Gérant(e) de franchise ou de point de vente d'enseigne",
        "besoin": "Attirer la clientèle locale en respectant la charte de l'enseigne.",
        "reponses": {
          "M1 Base": "Page du point de vente, dans le cadre fixé par l'enseigne.",
          "M2.1": "Publications locales : animations, nouveautés, équipe."
        },
        "parcours": {
          "rs-local": {
            "pourquoi": "Le plus adapté : la visibilité de son point de vente.",
            "reponses": {
              "M2.3": "Fiche Google du magasin, avis et horaires à jour."
            }
          },
          "rs-simple": {
            "pourquoi": "Si l'enseigne gère déjà la stratégie globale.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Commerce, artisanat, tourisme",
        "nom": "Salle de sport, club sportif, coach sportif",
        "besoin": "Recruter des adhérents et animer sa communauté.",
        "reponses": {
          "M1 Base": "Page pro avec offres, horaires et inscriptions.",
          "M2.1": "Défis, résultats, événements et conseils publiés régulièrement."
        },
        "parcours": {
          "rs-video": {
            "pourquoi": "Pour des vidéos d'exercices et de séances.",
            "reponses": {
              "M3": "Vidéos d'exercices, de cours et de témoignages au smartphone."
            }
          },
          "rs-local": {
            "pourquoi": "Pour attirer les habitants du secteur.",
            "reponses": {
              "M2.3": "Fiche Google, avis des adhérents et visibilité locale."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Office de tourisme, chargé(e) d'attractivité territoriale",
        "besoin": "Valoriser un territoire auprès des visiteurs.",
        "reponses": {
          "M1 Base": "Réseaux adaptés aux visiteurs et aux habitants.",
          "M2.1": "Calendrier éditorial autour des saisons et des événements du territoire."
        },
        "parcours": {
          "rs-video": {
            "pourquoi": "Pour donner envie de venir avec des images du territoire.",
            "reponses": {
              "M3": "Vidéos de lieux, d'activités et d'événements au smartphone."
            }
          },
          "rs-local": {
            "pourquoi": "Pour la visibilité des lieux et des acteurs locaux.",
            "reponses": {
              "M2.3": "Fiches Google des lieux et accompagnement des acteurs locaux."
            }
          }
        }
      },
      {
        "categorie": "Entreprises et associations",
        "nom": "Chargé(e) de développement économique (collectivité, réseau d'entreprises)",
        "besoin": "Être visible auprès des entreprises et des partenaires.",
        "reponses": {
          "M1 Base": "Cibler entreprises, partenaires et porteurs de projet.",
          "M2.1": "Contenus sur les actions, dispositifs et réussites du territoire."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le plus adapté : le réseau des entreprises.",
            "reponses": {
              "M2.2": "Animer son réseau professionnel et relayer les actions sur LinkedIn."
            }
          },
          "rs-simple": {
            "pourquoi": "Si l'objectif est d'abord de structurer la présence existante.",
            "reponses": {}
          }
        }
      },
      {
        "categorie": "Indépendants et auto-entrepreneurs",
        "nom": "Créateur(trice) de contenu qui débute",
        "besoin": "Construire une audience régulière.",
        "reponses": {
          "M1 Base": "Choisir sa cible et ses plateformes.",
          "M2.1": "Ligne éditoriale, régularité et lecture des statistiques."
        },
        "parcours": {
          "rs-video": {
            "pourquoi": "Le plus adapté : la vidéo est au cœur des réseaux.",
            "reponses": {
              "M3": "Tournage et montage de vidéos au smartphone."
            }
          },
          "rs-marque": {
            "pourquoi": "Pour une identité qui le rend reconnaissable.",
            "reponses": {
              "M1 Socle": "Positionnement, ton et charte visuelle."
            }
          }
        }
      },
      {
        "categorie": "Emploi et transition",
        "nom": "Étudiant(e), jeune diplômé(e)",
        "besoin": "Être visible des recruteurs pour un premier emploi ou une alternance.",
        "reponses": {
          "M1 Base": "Définir sa cible : secteurs, entreprises, écoles.",
          "M2.1": "Partager projets et compétences de façon professionnelle."
        },
        "parcours": {
          "rs-linkedin": {
            "pourquoi": "Le réseau des recruteurs et des employeurs.",
            "reponses": {
              "M2.2": "Profil LinkedIn optimisé, réseau et candidatures ciblées."
            }
          }
        }
      }
    ]
  }
];
