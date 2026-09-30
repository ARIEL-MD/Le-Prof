# Le Prof — feuille de route de couverture Côte d'Ivoire

## Objectif
Faire de la Côte d'Ivoire le référentiel scolaire prioritaire par défaut, puis utiliser les ressources francophones et internationales pour les notions absentes ou explicitement demandées.

## Périmètre prioritaire
- Primaire : CP1, CP2, CE1, CE2, CM1, CM2
- Collège : 6e, 5e, 4e, 3e
- Lycée : 2nde, 1re, Tle
- Examens : CEPE, BEPC, BAC
- Disciplines : Français, Mathématiques, Anglais, Espagnol, Allemand, Histoire, Géographie, EDHC, Philosophie, Physique, Chimie, SVT, Informatique, Économie, Éducation artistique, Éducation musicale, EPS.

## Règle de recherche
1. Référentiel ivoirien local.
2. Autres sources pédagogiques ivoiriennes reconnues.
3. Référentiels francophones compatibles.
4. Sources internationales/spécialisées.
5. Encyclopédie externe uniquement en dernier recours et jamais présentée comme « officielle ivoirienne ».

## Règle de vérification
Une notion n'est déclarée « couverte » que si :
- elle appartient à un niveau et une discipline identifiés ;
- le contenu est relié à un chapitre/notion précis ;
- la source est identifiée ;
- la formulation est cohérente avec le programme visé ;
- des tests de recherche passent sur plusieurs formulations et fautes courantes.

## Mesure
Le script `scripts/audit-ci-coverage.ts` mesure la couverture actuelle du corpus local. Il ne transforme jamais une absence de données en « couverture ».
