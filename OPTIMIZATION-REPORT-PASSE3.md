# LE PROF — Recherche de Cours & Notions — Passe 3 finale

## Fonctionnalités appliquées

### Recherche naturelle de dissertation littéraire
Le moteur reconnaît les formulations naturelles autour des demandes d'arguments (`arguments sur le roman`, `arguments roman`, formulation de dissertation, etc.) sans créer une liste de requêtes exactes.

Pour le corpus littéraire, les résultats suivent la structure pédagogique :
- Argument
- explication développée
- Exemple / auteur / œuvre / citation lorsque disponible
- catégorie ou fonction littéraire

### Diversification déterministe entre utilisateurs
Le moteur accepte `userSeed` et calcule une variation déterministe. Le même utilisateur retrouve une sélection stable ; deux seeds peuvent recevoir des angles ou formulations différents. Le seed est bucketisé afin d'éviter de créer environ un million de clés de cache distinctes.

### Voir plus
Le moteur peut charger les perspectives complémentaires avec `appendVariants`. Le frontend fusionne désormais les nouveaux éléments avec ceux déjà présentés et déduplique les fiches avant affichage : le premier résultat personnalisé n'est donc pas remplacé brutalement au clic sur « Voir plus ».

### Optimisation du moteur
- pool de candidats fortement réduit par l'index inversé et les tokens discriminants ;
- intersection des buckets les plus sélectifs lorsqu'elle est non vide ;
- RegExp de scoring précompilées / réutilisées ;
- maintien d'un fallback pour préserver le rappel.

### Scaling horizontal
`server-cluster.ts` utilise Node `cluster`, avec :
- nombre de workers configurable par `LE_PROF_CLUSTER_WORKERS` ;
- jusqu'à 8 workers par défaut ;
- remplacement automatique d'un worker arrêté ;
- arrêt propre SIGINT/SIGTERM.

## Vérifications disponibles dans cette session

Les fichiers modifiés ont été inspectés statiquement et les blocs ajoutés ont été vérifiés pour leur équilibre syntaxique de délimiteurs. Le ZIP source précédent contenait également les mesures ciblées documentées ci-dessous.

### Mesures moteur de la passe précédente
Catalogue : 541 fiches officielles.

| Requête | Pool | Moyenne | p50 | p95 |
|---|---:|---:|---:|---:|
| `guerre froide` | 9 | ~1.95 ms | ~1.34 ms | ~3.15 ms |
| `oxydation des corps purs simples` | 8 | ~2.95 ms | ~2.84 ms | ~3.57 ms |

### `searchAcademicCourseUnified`, cache contourné

| Requête | Moyenne | p50 | p95 |
|---|---:|---:|---:|
| `guerre froide` | ~49.5 ms | ~44.4 ms | ~88.6 ms |
| `oxydation des corps purs simples` | ~14.8 ms | ~14.7 ms | ~15.9 ms |

### Charge mono-processus documentée précédemment
- 100 utilisateurs, cache contourné : ~2.06 s de mur, ~48.6 req/s.
- 1000 utilisateurs, cache contourné : ~19.0 s, ~52.6 req/s.
- 100 utilisateurs, cache actif : ~2.19 s, ~45.8 req/s, hit-rate ~17 %.
- 1000 utilisateurs, cache actif : ~15.65 s, ~63.9 req/s, hit-rate ~82.8 %.

Le palier 10 000 n'a pas été validé dans la fenêtre d'exécution disponible.

## Limitation de validation

`npm ci` n'a pas pu être terminé dans cet environnement : le réseau / registre npm a expiré lors de l'installation et le mode hors-ligne ne disposait pas de tous les tarballs nécessaires. Le ZIP final n'embarque donc pas de `node_modules` partiel.

Par conséquent, `npm test`, le build Vite complet et le benchmark HTTP multi-worker n'ont pas été revendiqués comme exécutés dans cette session. Les modifications de recherche et de frontend ont été appliquées directement au projet, et les tests ciblés ajoutés sont :

`server/__tests__/romanArgumentsScaling.test.ts`

Ils couvrent :
- plusieurs formulations de « arguments sur le roman » ;
- stabilité du même seed ;
- diversification entre seeds ;
- absence de doublons après `Voir plus`.
