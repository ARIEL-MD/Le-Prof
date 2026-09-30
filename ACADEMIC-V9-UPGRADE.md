# Le Prof — V9 : renforcement des moteurs des autres matières

## Objectif
Renforcer le moteur local déterministe pour que les disciplines non mathématiques ne dépendent pas systématiquement d'un moteur générique ou d'une réponse externe.

## Ajouts

### SES
- taux de chômage
- taux d'emploi
- inflation
- croissance
- élasticité
- productivité
- part de marché
- revenu disponible / épargne
- mode méthodologique pour définitions et notions

### Informatique / NSI
- conversions décimal/binaire
- logique booléenne
- analyse de complexité
- traçage d'algorithmes et programmes
- bases de données / SQL

### Droit / Gestion
- cas pratique et responsabilité
- contrats et obligations
- TVA / prix TTC
- marge commerciale
- résultat de gestion
- bilan et équilibre actif/passif

### Sciences de l'ingénieur
- loi d'Ohm
- puissance électrique
- énergie électrique
- rendement
- couple / moment
- cinématique de rotation
- chaîne d'information
- chaîne d'énergie

## Routage
La discipline explicite reste prioritaire. En l'absence de discipline, seules des signatures fortes permettent de détecter SES, Informatique, Droit-Gestion ou SI.

## Principe
- local
- déterministe
- sans IA générative
- aucune donnée inventée
- réponse structurée avec méthode, étapes et vérification

## Validation
Le projet ne contient pas `node_modules` dans l'archive. Une vérification TypeScript complète nécessite donc l'installation des dépendances du projet. Des tests ciblés V9 ont été ajoutés dans `server/__tests__/academicDeterministicEngine.test.ts`.
