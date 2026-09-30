# V10 — Renforcement de la dissertation littéraire : fonctions de la poésie

## Ajouts
- Base dédiée aux 6 fonctions : lyrique, esthétique, évasive/fictive, ludique, didactique, engagée.
- 24 arguments distincts.
- Pour chaque argument : argument, explication, exemple littéraire, œuvre, auteur, phrase à retenir.
- Variantes pédagogiques validées pour argument, explication et phrase à retenir.
- Faits bibliographiques séparés des formulations afin d'empêcher qu'une variation altère une référence.
- Routage déterministe dans le moteur de français pour les demandes portant explicitement sur les fonctions de la poésie.
- Réexport depuis `src/data/francaisDissertationMethodoBase.ts` pour conserver la cohérence avec la base française existante.

## Références vérifiées avant intégration
Victor Hugo, Charles Baudelaire, Guillaume Apollinaire, Jean de La Fontaine, Aimé Césaire, Léopold Sédar Senghor, Bernard Binlin-Dadié et Tommy David Gole Bi Gnamien.

## Vérification technique
- La base contient 6 fonctions et 24 arguments.
- Chaque argument possède au moins 3 variantes d'argument, 3 variantes d'explication et 3 variantes de phrase à retenir.
- Les tests dédiés sont dans `server/__tests__/poetryFunctions.test.ts`.
- La compilation TypeScript complète reste bloquée dans cet environnement par l'absence de `node_modules`/types Node, comme sur les versions précédentes ; aucune erreur de type ciblée n'a été signalée pour les nouveaux fichiers.
