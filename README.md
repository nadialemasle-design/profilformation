# Profil formation — aide à l'entretien prospect

Outil pour les conseillères formation. On choisit un domaine, puis le profil qui ressemble le plus au prospect. L'application affiche côte à côte toutes les formations ou tous les parcours possibles, avec pour chacun :

- pourquoi le proposer ;
- l'argument de chaque module, adapté au profil, avec un lien vers la fiche CCI ;
- la durée, le financement et la certification ;
- des formations complémentaires venant d'autres domaines.

Domaines : Intelligence artificielle, Réseaux sociaux, PAO, PAO & IA, Vidéo, Communication digitale (Canva), Site internet & référencement, CAO-DAO, Bureautique (Excel), Outils collaboratifs, Gestion de projet, Conception de formation.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (mise en page, couleurs, fonctionnement). Pas besoin d'y toucher. |
| `docx.iife.js` | Bibliothèque « docx » (licence MIT, version 9.15.0) qui fabrique le document Word de la proposition. Pas besoin d'y toucher. |
| `contenu.js` | Copie de secours du contenu, utilisée seulement si la base Supabase ne répond pas. |
| `supabase-installation.sql` | Script d'installation de la base Supabase. |
| `supabase-mise-a-jour-2027.sql` | Mise à jour du 29/10/2026 : dates 2027, tarifs, positionnement, CPF et certifications. À lancer une fois dans Supabase ; ne remplace rien d'autre. |
| `supabase-mise-a-jour-2027-n2.sql` | Mise à jour n°2 : parcours IA Webmaster et IA Graphiste, coût de certification (330 €). À lancer après la précédente. |
| `supabase-mise-a-jour-2027-n3.sql` | Mise à jour n°3 : coût des certifications (parcours IA et réseaux 330 €, Tosa 89 €, ICDL 120 €). |
| `supabase-mise-a-jour-2027-n4.sql` | Mise à jour n°4 : Excel macro VBA, 3 jours, 1 290 €. |
| `supabase-mise-a-jour-2027-n5.sql` | Mise à jour n°5 : 11 nouveaux sous-profils, mots-clés de recherche des sous-profils et des catégories. Ne remplace rien de ce qui a été saisi dans Gestion. |
| `supabase-mise-a-jour-2027-n6.sql` | Mise à jour n°6 : les catégories de profils deviennent 13 familles de métiers communes à tous les domaines ; secteur et statut passent en mots-clés. Les sous-profils créés dans Gestion gardent leur catégorie. |
| `supabase-mise-a-jour-2027-n7.sql` | Mise à jour n°7 : questionnaires de positionnement (case, type de document, lien ou document) et comptes « conseillère ». Les liens quittent la table publique et ne sont visibles qu'après connexion. |

## Mettre l'application en ligne (GitHub Pages)

1. Sur GitHub, ouvrir le dépôt, puis **Settings** › **Pages**.
2. **Source** : **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
3. Une à deux minutes plus tard : `https://nadialemasle-design.github.io/profilformation/`

## Base en ligne et gestion (Supabase)

Le contenu est lu dans une base Supabase. Sur le site, le bouton **Connexion** (en haut à droite) donne accès à l'onglet **Gestion** pour ajouter, modifier ou supprimer domaines, formations et profils. Les modifications sont visibles tout de suite par tout le monde.

- Seules les adresses e-mail inscrites dans la table `editeurs` de Supabase peuvent modifier. Pour ajouter une collègue : créer son compte dans Supabase (**Authentication** › **Users** › **Add user**), puis ajouter son e-mail dans la table `editeurs` (**Table Editor**).
- Le fichier `supabase-installation.sql` crée les tables, les règles d'accès et le contenu de départ. Attention : le relancer remet le contenu de départ à la place de vos modifications.
- **Comptes conseillères** (voir les liens des questionnaires de positionnement, sans pouvoir modifier) : créer le compte dans **Authentication** › **Users** › **Add user** (e-mail + mot de passe, cocher *Auto Confirm User*), puis ajouter l'e-mail dans la table `conseilleres` (**Table Editor** › `conseilleres` › **Insert row**). La conseillère se connecte avec le bouton **Connexion**.
- Les liens et documents des questionnaires sont rangés dans la table `questionnaires` et l'espace de stockage privé `questionnaires` : ils ne sont jamais publics et ne figurent pas dans les fichiers de ce dépôt.
- Si la base ne répond pas (par exemple mise en veille), le site affiche la copie de secours `contenu.js`, en lecture seule. Pour réactiver la base : tableau de bord Supabase › projet › **Resume project**.
- La tâche `.github/workflows/garder-supabase-actif.yml` consulte la base chaque jour pour éviter la mise en veille.

## Modifier le contenu

Le plus simple : se connecter sur le site et utiliser l'onglet **Gestion** (formulaires). Inutile de toucher aux fichiers.

Le format ci-dessous sert de référence : c'est celui des documents de la base, et celui de la copie de secours `contenu.js`.

`contenu.js` contient trois listes : `domaines`, `formations` et `profils`. Chaque élément a un `id` unique, utilisé pour les relier entre eux.

### Exemple de profil

```js
{
  "id": "rs-030",
  "domaine": "rs",
  "categorie": "Commerce, artisanat, tourisme",
  "nom": "Fleuriste",
  "besoin": "Montrer ses compositions et attirer la clientèle locale.",
  "reponses": {
    "M1 Base": "Page pro avec ses créations et ses horaires.",
    "M2.1": "Publications autour des fêtes et des saisons."
  },
  "parcours": [
    { "formation": "rs-local", "pourquoi": "Ses clients sont dans le quartier.",
      "reponses": { "M2.3": "Fiche Google, avis et horaires à jour." } },
    { "formation": "rs-video", "pourquoi": "Pour montrer la création des bouquets.",
      "reponses": { "M3": "Vidéos de compositions au smartphone." } }
  ],
  "complements": [
    { "formation": "com-canva1", "pourquoi": "Créer ses visuels soi-même." }
  ],
  "ordre": 30
},
```

- `domaine` : l'`id` du domaine (`ia`, `rs`, `pao`, `paoia`, `video`, `com`, `web`, `cao`, `bur`, `col`, `prj`, `ped`).
- `reponses` : les arguments communs à tous ses parcours, par code de module.
- `parcours` : du plus adapté au moins adapté ; `formation` est l'`id` d'une formation du même domaine.
- `complements` : formations d'autres domaines à suggérer en plus.

### Exemple de formation

```js
{
  "id": "pao-lightroom",
  "domaine": "pao",
  "nom": "Lightroom initiation",
  "intitule": "Lightroom initiation : organisez et sublimez vos photos professionnelles",
  "duree": "1 jour",
  "certification": "",
  "modules": [
    { "code": "Formation", "titre": "Lightroom initiation : …", "lien": "https://www.cci-formation-bretagne.fr/…" }
  ],
  "ordre": 2
},
```

### Dates, tarifs, positionnement et CPF (par module)

Chaque module peut porter, en plus de `code`, `titre` et `lien` :

```js
"sessions": [ { "texte": "18-19 et 25-26 janvier 2027", "debut": "2027-01-18", "fin": "2027-01-26" } ],
"tarif": 1650,                 // tarif normal
"tarifParcours": 1500,         // tarif dans un parcours (affiché seulement dans un parcours)
"positionnement": "Questionnaire de positionnement …",   // seulement si niveau 2 sans niveau 1 (masqué dans un parcours qui contient un M1)
"positionnementLien": "https://forms.cloud.microsoft/…",
"cpf": "Oui (certification Tosa)"
```

- Dans **Gestion**, il suffit d'écrire une session par ligne, en texte, avec l'année : premier et dernier jour sont calculés automatiquement.
- Les sessions dont le dernier jour est passé sont masquées automatiquement.
- Les dates, tarifs, positionnement et CPF d'un module sont reportés dans tous les parcours qui contiennent le même module (même titre).

### Les pièges à éviter

- Une virgule entre deux blocs, pas de virgule après le dernier.
- Pas de guillemets doubles `"` dans un texte : utiliser « » ou l'apostrophe.
- Les `id` doivent être identiques partout, au caractère près.
- Si la page devient blanche : touche F12 dans le navigateur, onglet **Console**, qui indique la ligne en erreur.

## Proposition commerciale (document Word)

Sur la fiche d'un sous-profil, chaque module et chaque formation complémentaire a une case « Ajouter à la proposition » et le choix de la session. La barre du bas récapitule : tarifs (préférentiels dans un parcours), certification, plafond CPF de 1 500 € et participation forfaitaire de 150 € par dossier CPF, incluse dans le reste à charge (le CPF paie au plus le prix moins 150 €, et au plus 1 500 € ; case « exonéré(e) »), part hors CPF, reste à charge, jours et coût par jour. Chaque ligne peut passer en « CPF » ou « Hors CPF ». « Générer le document Word » télécharge le tableau, avec des champs à compléter (nom, entreprise, conseiller, date, droits CPF). Dans la version Claude, une fenêtre de confirmation s'ouvre avant l'enregistrement ; « Copier le tableau » reste possible.
