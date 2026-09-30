# Le-Prof — Extension mathématique généraliste V9

Cette version élargit le pipeline déterministe sans remplacer les solveurs spécialisés existants.

## Nouvelles familles prises en charge

- puissances numériques et racines carrées ;
- logarithmes népériens et exponentielles dans les équations simples ;
- valeurs trigonométriques remarquables et évaluations numériques ;
- factorielle et combinaisons simples ;
- géométrie analytique : milieu de segment et vecteur AB ;
- dérivation symbolique des fonctions exprimées en x ;
- évaluation/simplification d'expressions numériques ;
- conservation du principe `null = non résolu` : aucune réponse n'est fabriquée si la forme n'est pas comprise.

## Intégration

`genericBroadMathSolver.ts` est appelé au début de `mathResolutionOrchestrator.ts`, avant les couches V8/V7 et les fallbacks génériques.

## Régressions ajoutées

`server/__tests__/mathBroadCoverage.test.ts` couvre :

1. puissance ;
2. logarithme ;
3. trigonométrie ;
4. factorielle ;
5. milieu d'un segment ;
6. dérivée.

## Validation environnementale

La validation TypeScript globale reste limitée par l'environnement fourni : `node_modules` est incomplet/corrompu et l'installation npm n'a pas pu terminer dans le temps disponible. Le compilateur global confirme néanmoins que les nouveaux fichiers atteignent l'étape de résolution des modules sans signaler d'erreur de syntaxe TypeScript ; les erreurs restantes sont liées aux dépendances manquantes.

Cette extension ne prétend pas résoudre littéralement tout problème mathématique imaginable. Elle augmente la couverture déterministe et laisse les cas non compris au niveau `UNSUPPORTED` plutôt que d'inventer un résultat.
