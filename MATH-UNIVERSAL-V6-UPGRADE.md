# Le Prof Maths — V6

V6 = extension déterministe multi-domaines sans IA générative.

## Nouvelles couches
- valeurs trigonométriques remarquables ;
- primitives usuelles et quelques intégrales polynomiales ;
- sommes de suites arithmétiques et géométriques ;
- Pythagore et aire de triangle ;
- problèmes d'augmentation/diminution en pourcentage ;
- fallback de dérivation symbolique ;
- branchement de la couche finale dans le routeur universel ;
- tests de non-régression dédiés.

## Principe
Aucun LLM, aucun appel réseau et aucune réponse pré-écrite : les résultats sont calculés par règles déterministes et les solveurs existants.

## Limite de validation
La batterie runtime complète doit être exécutée dans un environnement où les dépendances npm du projet sont installées (`npm ci`).
