# Le Prof — couverture du moteur mathématique généraliste

## Objectif

Le moteur doit traiter des devoirs complets et des exercices formulés naturellement, sans dépendre d'une liste de phrases exactes.

Pipeline visé :

Énoncé → découpage exercices/questions → détection de notions → choix de méthode → calcul réel → vérification → correction structurée.

## Familles prises en charge par l'architecture

- calcul numérique et algébrique
- fractions, puissances, racines, simplification et développement
- équations et inéquations polynomiales
- factorisation et polynômes
- systèmes linéaires
- valeurs absolues
- fonctions, domaines, limites, dérivées, variations, signes, tangentes, asymptotes
- primitives et intégrales via les solveurs dédiés
- suites
- logarithmes et exponentielles
- trigonométrie élémentaire
- nombres complexes
- matrices et déterminants via solveurs dédiés
- statistiques et probabilités
- géométrie plane et spatiale via solveurs dédiés
- arithmétique via solveurs dédiés
- exercices mixtes et dépendances entre sous-questions

## Règle d'exactitude

Aucun résultat ne doit être affiché comme solution si aucun solveur n'a réellement effectué le calcul ou le raisonnement requis.

Les résultats doivent être vérifiés lorsque le domaine permet une vérification automatique. En cas d'échec ou d'ambiguïté, la question reste non résolue plutôt que de recevoir une réponse inventée.

## Important

« Tous les exercices de mathématiques » ne peut pas être garanti par une simple compilation. Le projet contient maintenant une architecture généraliste et plusieurs couches de résolution, mais une couverture absolue exige l'exécution de la batterie de tests prévue dans le cahier des charges.

La batterie étendue a été ajoutée, mais son exécution dépend de l'installation complète des dépendances Node du projet.
