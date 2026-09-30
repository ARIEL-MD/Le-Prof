# Le Prof Maths — V7

V7 renforce le moteur universel déterministe en privilégiant la combinaison des solveurs existants.

## Nouvelles capacités
- systèmes linéaires 2x2/3x3 avec élimination de Gauss et vérification ;
- équations rationnelles simples avec exclusion des valeurs interdites ;
- intégration par parties pour plusieurs formes scolaires classiques ;
- changement de variable pour primitives de formes affines ;
- évaluation de fonctions depuis une définition présente dans l'énoncé ;
- géométrie analytique : distance et milieu de deux points ;
- simplification/réduction symbolique via mathjs ;
- exploitation déterministe d'un résultat précédent pour les questions explicitement dépendantes ;
- branchement de cette couche avant les solveurs historiques afin de ne pas bloquer les classifications imparfaites ;
- nouveaux tests de non-régression.

## Principe
Aucun LLM, aucune API distante et aucun résultat pré-écrit. Les calculs sont effectués localement par règles déterministes, mathjs et les solveurs déjà présents.

## Validation
Le projet ne contient pas `node_modules` dans l'archive. La validation runtime complète doit être faite après `npm ci` dans l'environnement de développement/deploiement. Les tests V7 sont fournis dans `server/__tests__/mathUniversalV7Final.test.ts`.
