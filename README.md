# Profil formation — aide à l'entretien prospect

Outil pour les conseillères formation : on choisit le profil qui ressemble le plus au prospect, et l'application affiche côte à côte tous les parcours possibles, avec pour chacun :

- pourquoi proposer ce parcours ;
- l'argument de chaque module, adapté au profil ;
- le financement et la certification du domaine.

Domaines actuels : **Intelligence artificielle** (certification RS7232) et **Réseaux sociaux** (certification RS7643).

## Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (mise en page, couleurs, fonctionnement). Pas besoin d'y toucher. |
| `contenu.js` | **Tout le contenu** : domaines, parcours, profils, arguments. C'est le seul fichier à modifier. |

## Mettre l'application en ligne (GitHub Pages)

1. Sur GitHub, ouvrir le dépôt, puis **Settings** › **Pages**.
2. Dans **Source**, choisir **Deploy from a branch**.
3. Choisir la branche **main** et le dossier **/ (root)**, puis **Save**.
4. Après une à deux minutes, l'adresse du site s'affiche en haut de la page : `https://nadialemasle-design.github.io/profilformation/`

## Modifier le contenu

Ouvrir `contenu.js` sur GitHub, cliquer sur le crayon (**Edit this file**), modifier, puis **Commit changes**. Le site se met à jour en une à deux minutes.

### Ajouter un profil

Copier un profil existant du même domaine (de `{` à `}` avec sa virgule), le coller juste après, puis changer les textes entre guillemets :

```js
{
  "categorie": "Commerce, artisanat, tourisme",
  "nom": "Fleuriste",
  "besoin": "Montrer ses compositions et attirer la clientèle locale.",
  "reponses": {
    "M1 Base": "Page pro avec ses créations et ses horaires.",
    "M2.1": "Publications autour des fêtes et des saisons."
  },
  "parcours": {
    "rs-local": {
      "pourquoi": "Ses clients sont dans le quartier.",
      "reponses": { "M2.3": "Fiche Google, avis et horaires à jour." }
    },
    "rs-video": {
      "pourquoi": "Pour montrer la création des bouquets.",
      "reponses": { "M3": "Vidéos de compositions au smartphone." }
    }
  }
},
```

- `categorie` : reprendre exactement une catégorie existante, ou en écrire une nouvelle.
- `reponses` : les arguments communs à tous ses parcours.
- `parcours` : du plus adapté au moins adapté ; pour chacun, le « pourquoi » et l'argument des modules propres à ce parcours.
- Codes des parcours : `ia-admin`, `ia-form`, `ia-rh`, `rs-simple`, `rs-marque`, `rs-linkedin`, `rs-local`, `rs-video`.

### Supprimer un profil

Supprimer tout son bloc, de `{` jusqu'à `},` inclus.

### Ajouter un parcours

Dans `formations` du domaine, ajouter un bloc avec un nouveau code `id`, puis relier ce code dans `parcours` des profils concernés. Un nouveau code de module se place aussi dans `ordreModules`.

### Les pièges à éviter

- Une virgule entre deux blocs, pas de virgule après le dernier.
- Pas de guillemets doubles `"` dans un texte : utiliser « » ou l'apostrophe.
- Les codes doivent être identiques partout, au caractère près.
- Si la page devient blanche : touche F12 dans le navigateur, onglet **Console**, qui indique la ligne en erreur.
