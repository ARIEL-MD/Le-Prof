# Le Prof — Upgrade moteur mathématique généraliste

## Objectif
Renforcer le moteur local de mathématiques afin qu'une demande naturelle soit dirigée vers le solveur réellement compatible avec sa structure, sans résultat inventé.

## Changements

### 1. Orchestrateur hybride
`server/exercisePipeline/hybridDeterministicSolver.ts`

- Ajout du solveur avancé généraliste comme couche prioritaire pour les catégories pertinentes.
- Ajout du solveur polynomial du 3e degré dans le chemin général.
- Conservation des solveurs spécialisés existants pour les fonctions, limites, suites, probabilités, complexes, primitives, géométrie, matrices et statistiques.
- Conservation du dernier niveau strict `mathjs`.
- Une question reste non résolue si aucun solveur n'obtient un résultat compatible et vérifié.

### 2. Solveur avancé renforcé
`server/exercisePipeline/genericAdvancedMathSolver.ts`

Ajout de résolution déterministe pour :

- systèmes linéaires 2x2 et 3x3 par élimination de Gauss ;
- factorisation polynomiale lorsqu'elle peut être établie par des racines rationnelles effectivement testées ;
- équations trigonométriques élémentaires `sin(x)=a`, `cos(x)=a`, `tan(x)=a` ;
- équations élémentaires `ln(x)=a` et `e^x=a` ;
- équations et inéquations polynomiales jusqu'au degré 4 déjà prises en charge par le solveur avancé ;
- dérivation symbolique générale déjà disponible ;
- calculs directs réels avec vérification.

## Règle d'exactitude
Aucun de ces chemins ne doit transformer une absence de solution en réponse générique. Les résultats sont retournés uniquement lorsqu'un calcul réel est obtenu et que la vérification prévue passe.

## Couverture restante
Le terme « tous les maths » ne signifie pas qu'un seul algorithme résout toute mathématique possible. Le projet utilise donc une architecture à plusieurs solveurs : chaque domaine scolaire couvert possède son moteur spécialisé, avec une couche avancée commune et un fallback strict.

Les cas qui restent hors périmètre d'un solveur déterministe doivent produire `QUESTION_NON_RESOLUE` plutôt qu'un faux résultat.

## Tests
Le projet contient les tests mathématiques existants et le script `npm run test:math`.

Dans cet environnement, les dépendances npm complètes n'ont pas pu être restaurées avant expiration du délai d'installation. Aucun score de réussite n'est donc inventé dans ce rapport.
