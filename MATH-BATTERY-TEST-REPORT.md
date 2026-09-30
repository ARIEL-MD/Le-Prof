# Audit et batterie massive — moteur mathématique universel

Date : 2026-09-27

## Travail effectué

- Inspection du moteur universel et du routeur déterministe.
- Inspection des solveurs mathématiques et du parseur.
- Ajout de `server/__tests__/mathMassiveBattery.test.ts` couvrant 35 scénarios : calcul, fractions, puissances, racines, algèbre, équations, inéquations, valeur absolue, fonctions, dérivées, variations, signes, limites, tangentes, primitives/intégrales, suites, statistiques, probabilités, trigonométrie, géométrie, coordonnées, matrices, systèmes, exponentielle, logarithme, complexes, devoirs mixtes et formulations libres.
- Vérification de la règle d'absence d'invention dans le moteur.

## Exécution

La suite ne peut pas être exécutée complètement dans cet environnement car l'installation des dépendances npm du ZIP expire avant d'être terminée. Le ZIP contient `package.json` et `package-lock.json`, mais `node_modules` présent dans l'environnement de travail est incomplet : les exécutables `tsx` et plusieurs dépendances nécessaires ne sont pas réellement installés.

Commandes tentées :

- `npm install --ignore-scripts`
- `npm install --ignore-scripts --no-audit --no-fund`
- `npm install --package-lock=false --ignore-scripts --no-audit --no-fund tsx@4.21.0 typescript@5.8.2 mathjs@15.2.0`

Toutes ont expiré dans l'environnement avant de fournir une installation exploitable.

## Ce qui est vérifié par inspection du code

Le moteur universel appelle un pipeline hybride question par question. Les solveurs présents couvrent notamment :

- calcul/arithmetic ;
- fractions ;
- puissances/racines ;
- calcul littéral ;
- factorisation ;
- équations et inéquations ;
- polynômes cubiques ;
- systèmes ;
- fonctions ;
- dérivées ;
- limites/continuité ;
- primitives/intégrales ;
- suites ;
- probabilités ;
- statistiques ;
- trigonométrie ;
- géométrie plane et espace ;
- coordonnées/vecteurs ;
- complexes ;
- matrices.

Le routeur utilise la classification pour prioriser les solveurs mais conserve une cascade de secours, ce qui respecte le principe d'un moteur généraliste unique.

## Points restant à valider réellement

1. Exécuter la suite existante `npm run test:math`.
2. Exécuter `npm test` pour la régression complète.
3. Exécuter la nouvelle batterie `mathMassiveBattery.test.ts`.
4. Mesurer les échecs réels par domaine et par formulation.
5. Tester les entrées issues d'OCR après normalisation.
6. Tester les devoirs longs avec plusieurs exercices et dépendances entre sous-questions.

## Conclusion honnête

L'architecture et les solveurs sont présents et le projet dispose déjà d'une couverture mathématique large. En revanche, aucune statistique de réussite finale ne doit être annoncée tant que les dépendances ne permettent pas d'exécuter réellement la batterie.
