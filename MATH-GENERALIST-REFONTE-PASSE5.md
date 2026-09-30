# Le Prof — refonte moteur maths généraliste — passe 5

## Objectif
Faire traiter au moteur le plus grand éventail possible de devoirs/exercices de mathématiques du corpus Le Prof, sans dépendre d'une phrase exacte.

## Changement principal
L'orchestrateur ne dépend plus uniquement de `detectedType` pour choisir les solveurs.

Après la branche spécialisée, une **cascade mathématique générale** essaie successivement les solveurs locaux pertinents :
- algèbre avancée/polynômes ;
- calcul arithmétique ;
- cubiques ;
- limites/continuité ;
- fonctions ;
- suites ;
- probabilités ;
- hypergéométrique ;
- complexes ;
- primitives/intégrales ;
- géométrie plane et spatiale ;
- matrices ;
- statistiques ;
- ancien moteur Tle A comme compatibilité locale.

Chaque résultat reste soumis au contrôle de compatibilité et de vérification. Un solveur qui échoue est ignoré et le suivant est essayé.

## Algèbre avancée ajoutée/élargie
- équations polynomiales jusqu'au degré couvert par le solveur numérique ;
- inéquations polynomiales ;
- systèmes linéaires 2x2/3x3 ;
- valeurs absolues ;
- équations rationnelles ;
- factorisation par racines vérifiées ;
- équations trigonométriques élémentaires ;
- équations logarithmiques ;
- équations exponentielles ;
- calcul symbolique et dérivation.

## Règle de sécurité mathématique
Aucune réponse générique ne doit être utilisée comme preuve qu'une question est résolue. Une question sans solution locale vérifiée reste non résolue.

## Vérification
Les fichiers modifiés ont passé une vérification de syntaxe TypeScript par transpilation (`transpileModule`).

Le type-check complet et les tests d'exécution n'ont pas pu être exécutés car l'installation des dépendances npm du ZIP est incomplète et `npm ci` a expiré dans l'environnement de travail. Aucun taux de réussite n'est donc inventé.
