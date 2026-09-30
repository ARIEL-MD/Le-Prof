# Moteur mathématique généraliste — rapport d’implémentation

## Changements réalisés

### 1. Priorité au pipeline hybride vérifié
`/api/analyze-exercise` utilise désormais en priorité `tryHybridDeterministicExerciseResolution()` pour les demandes de mathématiques.

Le pipeline :
- découpe les devoirs en exercices puis sous-questions ;
- traite chaque question séparément ;
- conserve les résultats précédents uniquement lorsqu’une dépendance est explicitement demandée ;
- choisit le solveur adapté ;
- refuse une question non résolue ;
- ne renvoie le devoir que si la complétude est de 100 %.

### 2. Calculs rationnels exacts
Le solveur arithmétique contient maintenant un évaluateur rationnel exact basé sur l’AST mathématique.
Exemple : `2/3 + 1/6` reste sous forme exacte `5/6` au lieu d’être converti en décimal.

### 3. Vérification réelle
Les calculs arithmétiques sont réévalués avant validation.
Les racines polynomiales affichées sont réinjectées dans le polynôme et rejetées si le résidu numérique dépasse le seuil défini.
Les inéquations polynomiales sont contrôlées sur chaque intervalle et les racines sont vérifiées pour les inégalités larges.

### 4. Inéquations polynomiales
Le calcul des bornes ouvertes/fermées a été réécrit afin de respecter strictement `>`, `<`, `>=` et `<=`.

### 5. Batterie de régression
Ajout de `server/__tests__/mathGeneralistRobustness.test.ts` avec :
- devoir multi-question ;
- formulations naturelles ;
- fractions exactes ;
- équation cubique ;
- inéquation polynomiale ;
- refus d’une question réellement non couverte ;
- 100 calculs déterministes.

### 6. Script de test ciblé
Ajout de :
`npm run test:math`

## Limitation de validation dans cet environnement

Les dépendances npm du ZIP n’ont pas pu être installées complètement pendant cette session : `npm ci` a dépassé le délai disponible et le `node_modules` présent est incomplet.

Donc aucun résultat de compilation ou d’exécution de tests n’est déclaré comme réussi. Les modifications ont été inspectées statiquement, mais les résultats runtime doivent être obtenus avec les dépendances installées.

## Règle de sécurité du moteur

Une question non couverte doit rester non résolue (`QUESTION_NON_COUVERTE`) plutôt que recevoir une réponse générique ou inventée.


## Passe suivante — moteur réellement unique

La refonte a été consolidée autour de `server/exercisePipeline/universalMathEngine.ts` comme point d'entrée unique du calcul mathématique.

### Garanties ajoutées
- Les routes mathématiques principales et les anciennes routes `/api/solve-maths-tle-a`, `/api/solve-maths-tle-c`, `/api/solve-maths-tle-d` et `/api/solve-maths-6e` délèguent désormais au même moteur généraliste.
- Les anciens moteurs par niveau ne servent plus de fallback de résolution.
- Une question non couverte retourne explicitement `QUESTION_NON_COUVERTE` / `UNSUPPORTED` au lieu de recevoir une solution d'un autre moteur.
- Le routeur central applique un contrôle sémantique supplémentaire afin de ne pas accepter une réponse calculée mais correspondant à une autre tâche.
- Le parseur expose maintenant une analyse structurée : domaine, tâche, objets mathématiques, données, contraintes et méthodes candidates.
- Ajout d'un test dédié au contrat `SOLVED` / `UNSUPPORTED` du moteur universel.

### Validation effectuée dans cette session
La transpilation syntaxique TypeScript des fichiers modifiés a été contrôlée avec TypeScript 5.8.3 et ne signale aucune erreur de syntaxe.

La suite complète `npm test` n'a pas été exécutée : les dépendances npm du projet ne sont pas installées dans l'environnement de cette session.
