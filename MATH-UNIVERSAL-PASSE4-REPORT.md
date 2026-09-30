# Moteur Maths — Passe 4

## Objectif
Rendre le chemin « devoir de maths » réellement universel dans l'architecture locale : chaque question est classée puis envoyée au solveur compatible, avec un dernier niveau de calcul symbolique réel. Aucun fallback mathématique ne doit fabriquer une correction générique.

## Changements
- Le pipeline hybride devient la voie principale du devoir de mathématiques.
- Ajout d'un solveur mathématique générique strict basé sur `mathjs` pour les calculs/simplifications et dérivées symboliques lorsqu'une expression exploitable est réellement extraite.
- Ajout du routage statistiques dans le pipeline de devoirs, via le solveur statistiques existant.
- Extension de la détection vers statistiques, variance, écart-type, trigonométrie, vecteurs, droites, distances, angles, etc.
- Le chemin `localTutorEngine` n'utilise plus `solveAllExercisesWithPapaMethod` comme premier moteur de devoir de maths : il passe d'abord par le pipeline hybride strict.
- Le chemin `internationalMathSolver` passe lui aussi par le pipeline hybride strict.
- Le chemin `internationalUniversalSolver` utilise le pipeline hybride strict lorsqu'il s'agit de mathématiques.
- Si aucun solveur ne peut produire une réponse vérifiable, le moteur refuse de fabriquer une solution et laisse le niveau supérieur gérer l'absence de couverture.
- Ajout de tests de couverture : calcul, dérivée générale, statistiques, devoir mixte.

## Vérification effectuée
- Transpilation TypeScript syntaxique des 7 fichiers modifiés : OK.
- `npm ci --ignore-scripts` a été lancé mais a expiré dans l'environnement.
- `tsc --noEmit` n'a pas pu terminer car `node_modules` est partiellement installé et plusieurs définitions `@types/*` manquent.
- La suite de tests runtime n'a pas pu démarrer : l'installation présente un paquet `tsx` incomplet (`node_modules/tsx/index.js` absent).

Ces limitations d'environnement sont indiquées explicitement : aucun résultat de test runtime n'est inventé.

## Important
« Universel » signifie ici que le moteur n'est plus limité à une petite liste de formulations et qu'il orchestre tous les solveurs mathématiques locaux déjà présents, avec extension symbolique générale et refus des faux résultats. Pour un problème mathématique réellement hors capacité des solveurs disponibles, il est préférable de signaler l'absence de résolution automatique que d'inventer une démonstration.
