# Batterie de tests exercices — V47

## Objectif
Vérifier que le moteur détermine correctement la matière et la tâche d'un exercice avant de choisir un moteur de résolution.

## Matières testées
- Mathématiques
- Physique-Chimie
- SVT
- Français
- Philosophie
- Histoire-Géographie
- Anglais
- Espagnol
- Allemand
- EDHC
- Informatique
- Économie-Gestion

## Tests réalisés
- 12 tests avec discipline explicitement fournie
- 12 tests par détection lexicale sans discipline explicite
- 12 tests d'intégration `parseStatement → universalRoute`

## Corrections découvertes pendant le test
1. `pH` était trop permissif et reconnaissait `ph` dans des mots comme `philosophie` ou `phrase` : remplacé par `\\bpH\\b`.
2. Une discipline explicitement fournie est maintenant prioritaire sur les indices lexicaux.
3. EDHC est évalué avant les notions philosophiques afin que `démocratie` ne force pas une route Philosophie.
4. Les exercices mathématiques simples comme `Résoudre 2x + 3 = 7` sont reconnus même sans écrire « mathématiques ».
5. Le parseur conserve désormais `universalRoute` au niveau de chaque question et au niveau global de l'énoncé.
6. `Analysez`, `Expliquez` et `Étudiez` sont reconnus comme tâches d'analyse.

## Résultat
**36/36 tests de routage et d'intégration réussis.**

Cette batterie vérifie le routage déterministe. Elle ne prétend pas que chaque matière possède déjà un solveur déterministe complet pour tous ses types d'exercices : lorsqu'un solveur spécialisé n'existe pas, le moteur doit rester honnête et ne pas inventer une correction.
