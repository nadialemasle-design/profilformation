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
| `contenu.js` | **Tout le contenu** : domaines, formations, profils. C'est le seul fichier à modifier. |

## Mettre l'application en ligne (GitHub Pages)

1. Sur GitHub, ouvrir le dépôt, puis **Settings** › **Pages**.
2. **Source** : **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
3. Une à deux minutes plus tard : `https://nadialemasle-design.github.io/profilformation/`

## Modifier le contenu

La version Claude de l'application a un onglet **Gestion** avec des formulaires : c'est le plus simple. Il suffit ensuite de demander à Claude de recopier le contenu ici.

Pour modifier directement sur GitHub : ouvrir `contenu.js`, cliquer sur le crayon (**Edit this file**), modifier, puis **Commit changes**.

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

### Les pièges à éviter

- Une virgule entre deux blocs, pas de virgule après le dernier.
- Pas de guillemets doubles `"` dans un texte : utiliser « » ou l'apostrophe.
- Les `id` doivent être identiques partout, au caractère près.
- Si la page devient blanche : touche F12 dans le navigateur, onglet **Console**, qui indique la ligne en erreur.
