# Moteur mathématique généraliste — Upgrade V2

Cette version renforce le pipeline déterministe sans IA générative ni appel de service distant.

## Ajouts

- Intégration directe dans le routeur universel des solveurs appliqués déjà présents :
  - cinématique ;
  - loi d'Ohm ;
  - stœchiométrie ;
  - gravitation ;
  - oscillateurs ;
  - TEC / énergie cinétique.
- Nouveau `genericAppliedMathSolver.ts` comme façade unique pour ces solveurs.
- Résolution déterministe de problèmes numériques de pourcentage :
  - p % de N ;
  - part/base → pourcentage ;
  - augmentation de p % ;
  - diminution de p %.
- Première couverture déterministe de formulations simples de proportion/règle de trois.
- Vérification stricte du contrat de sortie : aucune réponse appliquée n'est acceptée si le solveur n'a pas réellement calculé une réponse.
- Tests de régression dédiés dans `mathAppliedCoverage.test.ts`.

## Architecture

Entrée → parseur → question → couche appliquée → routeur mathématique → solveur spécialisé → vérification → correction LaTeX.

La résolution reste locale et déterministe. Aucun LLM n'est utilisé.

## Limite importante

Cette V2 ne transforme pas magiquement le moteur en solutionneur de toutes les mathématiques. Les domaines comme démonstrations géométriques libres, OCR manuscrit, raisonnement visuel sur figures, intégration symbolique très générale et problèmes rédigés complexes restent des chantiers distincts.

## Tests

L'environnement de génération ne disposait pas d'une installation complète de `tsx`/des dépendances runtime du projet ; les tests runtime complets doivent donc être relancés après `npm ci` sur la machine de développement/CI.
