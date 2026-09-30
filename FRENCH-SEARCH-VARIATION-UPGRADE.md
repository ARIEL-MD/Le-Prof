# Variation des recherches Français — V14

Le moteur conserve les connaissances et références vérifiées, mais ne renvoie plus systématiquement la même rédaction lorsqu'une recherche est répétée.

- Même connaissance pédagogique ; formulations/angles différents.
- Rotation automatique à chaque recherche si `variant` et `searchIteration` ne sont pas fournis.
- `searchIteration` permet au front-end de piloter explicitement la rotation par utilisateur/session.
- `variant` reste disponible pour les tests et scénarios contrôlés.
- Aucun appel à une IA générative n'est nécessaire.
- Le `userSeed` reste bucketé pour éviter un million de clés de cache distinctes.
- Les auteurs, œuvres et faits ne sont pas inventés par le moteur de variation.
