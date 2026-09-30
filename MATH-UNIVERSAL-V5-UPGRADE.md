# Le Prof Maths — V5 couverture universelle déterministe

Cette V5 poursuit la refonte en parallèle au lieu d'ajouter uniquement un solveur isolé.

## Ajouts
- systèmes linéaires 2x2 par déterminant;
- inégalités affines avec inversion du sens;
- suites arithmétiques et géométriques fréquentes;
- quartiles, mode et étendue;
- distance entre deux points et cercle/disque;
- simplification/développement symbolique via mathjs;
- dérivation symbolique générique de secours;
- problèmes rédigés simples vitesse/distance/temps et remises;
- branchement centralisé avant les solveurs spécialisés;
- conservation de l'architecture sans IA générative ni appel réseau.

## Principe de sécurité
Chaque nouvelle branche retourne `null` lorsqu'elle ne reconnaît pas suffisamment l'exercice. Elle ne fabrique donc pas une solution à partir d'un énoncé ambigu.

## Limite honnête
La couverture totale de tous les exercices imaginables n'est pas garantie : les démonstrations libres, OCR manuscrit et certaines intégrales/équations symboliques très avancées nécessitent encore des règles supplémentaires. La V5 augmente la couverture sans prétendre avoir une capacité non vérifiée.
