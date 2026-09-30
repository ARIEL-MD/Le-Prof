# V7 — résumé technique

Cette version ajoute une couche de généralisation déterministe au routeur existant.

## Couverture ajoutée
- systèmes linéaires 2x2/3x3 + vérification ;
- équations rationnelles simples + valeurs interdites ;
- intégration par parties sur formes scolaires usuelles ;
- changement de variable sur puissances affines ;
- géométrie analytique (distance/milieu) ;
- simplification symbolique ;
- exploitation contrôlée des résultats précédents pour les questions explicitement dépendantes.

## Tests
`server/__tests__/mathUniversalV7Final.test.ts`

La compilation complète n'est pas exécutée dans l'archive car `node_modules` n'est pas livré. `npm ci` doit être exécuté avant la batterie runtime.
