# Le Prof Maths — moteur universel V3

## Modifications réalisées

Cette version poursuit la généralisation du moteur sans ajouter d'IA générative ni d'appel à un LLM.

### 1. Routeur universel renforcé
- Le `universalLocalSolver` est désormais appelé directement dans le routeur central.
- Il est également utilisé dans le pipeline hybride avant les cascades spécialisées.
- Une question mal classée peut donc être récupérée par une stratégie déterministe locale.

### 2. Trigonométrie
Ajout de formes élémentaires avec argument affine :
- `sin(ax+b)=c`
- `cos(ax+b)=c`
- `tan(ax+b)=c`
- coefficient multiplicatif devant la fonction trigonométrique, par exemple `2sin(x+1)=1`.

### 3. Logarithmes / exponentielles
Ajout de formes affines déterministes :
- `ln(ax+b)=c`
- `a^(bx+c)=d`

Les contraintes de domaine de base sont prises en compte.

### 4. Normalisation mathématique
Le parseur normalise maintenant certaines écritures LaTeX usuelles vers une forme canonique exploitable :
- `\\frac{a}{b}` → `(a)/(b)`
- `\\sqrt{x}` → `sqrt(x)`
- `\\left` / `\\right` superflus retirés.

Les formes Unicode existantes (indices, exposants, fractions usuelles) restent prises en charge.

### 5. Batterie de régression
Ajout de `server/__tests__/mathUniversalUpgrade.test.ts` avec des cas de :
- trigonométrie affine ;
- logarithme affine ;
- normalisation des suites Unicode.

Le script `test:math` inclut désormais cette nouvelle batterie.

## Vérification environnementale

Le code a été modifié directement dans le projet. L'exécution complète des tests n'a pas pu être finalisée dans l'environnement de construction : l'installation des dépendances Node (`npm ci`) dépasse le délai disponible et le binaire local `tsx` n'est pas présent.

Aucun test n'est donc déclaré « passé » uniquement sur la base d'une inspection statique.

## Limite importante

Cette V3 augmente sensiblement la couverture, mais « tout exercice de mathématiques imaginable » ne peut toujours pas être garanti. Les démonstrations libres, l'OCR manuscrit, certaines intégrales/équations avancées et les problèmes nécessitant un raisonnement mathématique inédit restent des domaines à étendre progressivement.
