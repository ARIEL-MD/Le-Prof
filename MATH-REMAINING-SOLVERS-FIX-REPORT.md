# Correctifs — solveurs mathématiques restants

## Corrigé
- Équations du premier degré avec formulations naturelles : `Résoudre`, `Trouver x`, `Déterminer la solution`, `Calculer x`.
- Équations rationnelles simples du type `1/(ax+b)=c`, avec contrôle du dénominateur.
- Somme des premiers termes d'une suite arithmétique.
- Calcul de pourcentage, notamment `20% de 150`.
- Pythagore/hypoténuse avec formulation `côtés 3 et 4` sans le mot `mesurant`.
- Activation des couches `genericUniversalCompletionSolver` et `genericUniversalFinalSolver` dans le pipeline hybride, après V7.
- Ajout de tests de régression ciblés dans `mathUniversalV7Final.test.ts`.

## Principe de sécurité
Les solveurs restent déterministes : lorsqu'une forme n'est pas reconnue ou ne peut pas être vérifiée, ils renvoient `null` au lieu d'inventer une solution.

## Vérification
Une exécution complète des tests n'a pas pu être menée dans cet environnement car les dépendances npm (`tsx`, `mathjs` et les types associés) ne sont pas installées correctement dans le ZIP extrait. Le contrôle TypeScript a néanmoins été utilisé comme contrôle syntaxique ciblé ; les diagnostics restants concernent les dépendances/modules absents, pas une erreur de syntaxe signalée dans les fichiers modifiés.
