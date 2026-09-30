# Correctif présentation des résultats de recherche

## Changements
- Les préfixes `Leçon X`, `Chapitre X`, `Thème X`, `Unité X` et `Module X` sont masqués dans le titre d'un résultat de recherche.
- Le contenu Markdown brut n'est plus affiché tel quel dans la réponse.
- `**texte**` est rendu en gras, `*texte*` en italique et les titres/listes sont présentés comme des éléments visuels normaux.
- Les recherches ciblées restent centrées sur la réponse demandée, sans transformer automatiquement le résultat en fiche de leçon.
- Le nettoyage est appliqué à l'affichage même si un ancien résultat conservé en session contient encore l'ancien titre ou le Markdown brut.

## Vérifications
- Test du titre : `Leçon 1, 2 & 3 : ...` -> `...`
- Test du contenu : aucun `**` n'est visible dans le texte rendu.
- Transpilation syntaxique de `src/App.tsx` : OK.
