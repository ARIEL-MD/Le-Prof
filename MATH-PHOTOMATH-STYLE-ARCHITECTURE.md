# Le Prof — architecture de résolution mathématique généraliste

Le moteur est organisé autour d'une résolution en cascade et non autour d'une
liste de réponses prédéfinies.

## Pipeline

1. Entrée : texte, saisie mathématique ou texte issu d'une photo/OCR.
2. Normalisation : signes, puissances, fractions, notation mathématique.
3. Découpage : exercices et sous-questions.
4. Analyse : données, inconnues, contraintes et notions détectées.
5. Planification : sélection des solveurs probables.
6. Résolution réelle : calcul symbolique ou numérique par solveur spécialisé.
7. Vérification : contrat de résultat + contrôles du solveur.
8. Fallback : autres familles mathématiques si la classification initiale est incomplète.
9. Correction : étapes et résultat final.
10. Si aucun solveur ne produit une réponse vérifiée : question non résolue, jamais une réponse inventée.

## Solveurs derrière le routeur

- calcul/arithmetic
- polynômes et algèbre
- équations/inéquations
- fonctions, limites et analyse
- suites
- primitives/intégrales
- probabilités et hypergéométrique
- statistiques
- nombres complexes
- matrices
- géométrie plane/espace
- solveurs avancés symboliques
- fallback mathjs strict

## Principe important

La classification est une **priorité**, pas une prison. Une question mal formulée ou mal classée peut donc être essayée par les autres solveurs compatibles.

Aucun résultat textuel générique n'est accepté comme solution mathématique.
