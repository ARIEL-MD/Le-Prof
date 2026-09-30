import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_MATHS_PART1_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // LEÇON 1 : CALCUL LITTÉRAL (8 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon1-calcul-litteral',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Calculs Algébriques : Calcul littéral',
    lessonTitle: 'Calcul littéral : Quotients, puissances relatives, identités remarquables, factorisations et fractions rationnelles',
    objectifs: [
      'Utiliser l\'égalité de deux quotients : a/b = c/d équivaut à ad = bc (produit en croix)',
      'Appliquer les propriétés des puissances à exposants entiers relatifs : a^n × b^n = (ab)^n, a^n × a^m = a^(n+m), (a^m)^n = a^(mn), a^m / a^n = a^(m-n) et a^(-n) = 1/a^n',
      'Développer et réduire des expressions algébriques en utilisant les 3 égalités remarquables : (a+b)², (a-b)² et (a+b)(a-b)',
      'Factoriser des expressions littérales par mise en évidence d\'un facteur commun ou par utilisation des égalités remarquables',
      'Résoudre des équations produit nul (ab = 0 équivaut à a = 0 ou b = 0) et équations de même carré (a² = b² équivaut à a = b ou a = -b)',
      'Reconnaître un monôme (coefficient et degré) et ordonner un polynôme selon les puissances décroissantes',
      'Déterminer la condition d\'existence d\'une fraction rationnelle A/B (B ≠ 0) et simplifier une fraction rationnelle après factorisation'
    ],
    fullCourseContent: `I. Quotients et Égalité de deux quotients :
Propriété fondamentale : Pour tous nombres a, b, c et d avec b ≠ 0 et d ≠ 0 :
a/b = c/d équivaut à a × d = b × c (produit des extrêmes égal au produit des moyens).
Exemple : a/3 = 2/5 équivaut à 5 × a = 3 × 2 = 6, soit a = 6/5 = 1,2.

II. Puissances à exposant entier relatif :
1. Définition et notations :
Pour a rationnel non nul et n entier naturel non nul :
- a^(-n) est l'inverse de a^n, c'est-à-dire a^(-n) = 1 / a^n et a^(-n) × a^n = 1.
Exemple : 5^(-3) = 1 / 5^3 = 1 / 125.
2. Propriétés opératoires :
- a^n × b^n = (a × b)^n
- a^n × a^m = a^(n+m)
- (a^m)^n = a^(m×n)
- a^m / a^n = a^(m-n)

III. Développements, Réductions et Égalités Remarquables :
1. Suppression de parenthèses et priorités :
- a + (b - c) = a + b - c
- a - (b + c) = a - b - c
- a - (b - c) = a - b + c
La puissance prime sur la multiplication, qui prime sur l'addition et la soustraction.
2. Développement d'un produit :
- a(x + y) = ax + ay
- (a + b)(x + y) = ax + ay + bx + by
3. Les 3 Égalités Remarquables :
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²
- (a + b)(a - b) = a² - b²

IV. Factorisations :
1. Mise en évidence d'un facteur commun :
Exemple : 3x(2x + 1) - 17(2x + 1) = (2x + 1)(3x - 17).
2. Utilisation des égalités remarquables :
Exemple : 9a² + 24a + 16 = (3a)² + 2 × 3a × 4 + 4² = (3a + 4)².
3. Combinaison de techniques :
Exemple : 9a² + 24a + 16 - a(3a + 4) = (3a + 4)² - a(3a + 4) = (3a + 4)[(3a + 4) - a] = (3a + 4)(2a + 4) = 2(3a + 4)(a + 2).

V. Produit nul et Nombres de même carré :
1. Produit nul :
a × b = 0 équivaut à a = 0 ou b = 0.
2. Nombres de même carré :
a² = b² équivaut à a = b ou a = -b.
Exemple : x² = 49 = 7² équivaut à x = 7 ou x = -7.

VI. Polynômes et Fractions Rationnelles :
1. Monôme : Expression littérale ax^n (a = coefficient, n = degré).
2. Polynôme : Somme de monômes. Le degré du polynôme est le plus grand degré de ses monômes après réduction.
3. Fraction rationnelle A/B :
- Condition d'existence : A/B existe si et seulement si son dénominateur B ≠ 0.
- Méthode de simplification :
  * Factoriser le numérateur et le dénominateur ;
  * Poser la condition d'existence (valeurs interdites) ;
  * Simplifier les facteurs communs.`,
    definitions: [
      {
        term: 'Égalité de quotients',
        definition: 'Équivalence entre a/b = c/d et l\'égalité des produits en croix a × d = b × c (avec b ≠ 0 et d ≠ 0).'
      },
      {
        term: 'Fraction rationnelle',
        definition: 'Quotient de deux polynômes A/B avec B non nul. Elle n\'existe que pour les valeurs de la variable qui n\'annulent pas B.'
      },
      {
        term: 'Degré d\'un polynôme',
        definition: 'Plus haute puissance de la variable x apparaissant dans la forme réduite du polynôme.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du produit nul',
        statement: 'Un produit est nul si et seulement si l\'un au moins de ses facteurs est nul : A × B = 0 ⟺ A = 0 ou B = 0.'
      },
      {
        name: 'Règle des nombres de même carré',
        statement: 'Pour tous réels a et b : a² = b² ⟺ a = b ou a = -b.'
      },
      {
        name: 'Condition d\'existence d\'une fraction rationnelle',
        statement: 'Une fraction rationnelle A/B n\'a de sens mathématique que si le dénominateur B est strictement différent de zéro (B ≠ 0).'
      }
    ],
    formulas: [
      {
        name: 'Carré d\'une somme',
        formula: '(a + b)² = a² + 2ab + b²',
        explanation: 'Développement avec le double produit positif.'
      },
      {
        name: 'Carré d\'une différence',
        formula: '(a - b)² = a² - 2ab + b²',
        explanation: 'Développement avec le double produit négatif.'
      },
      {
        name: 'Différence de deux carrés',
        formula: '(a + b)(a - b) = a² - b²',
        explanation: 'Produit de la somme par la différence.'
      },
      {
        name: 'Puissance négative',
        formula: 'a^(-n) = 1 / a^n',
        explanation: 'Inverse de la puissance positive (a ≠ 0).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Simplifier une fraction rationnelle',
        procedure: '1. Factoriser complètement le numérateur et le dénominateur.\n2. Écrire la condition d\'existence : poser dénominateur ≠ 0 et résoudre l\'équation associée pour trouver les valeurs interdites.\n3. Simplifier les facteurs communs au numérateur et au dénominateur.\n4. Donner l\'expression simplifiée précédée des conditions d\'existence.',
        tip: 'Toujours poser la condition d\'existence AVANT de barrer le moindre facteur commun !'
      }
    ],
    examples: [
      {
        statement: 'Simplifie la fraction F = (x² - 9) / [(x + 3)(x - 1)].',
        solution: 'Numérateur : x² - 9 = x² - 3² = (x - 3)(x + 3).\nCondition d\'existence : (x + 3)(x - 1) ≠ 0 ⟺ x ≠ -3 et x ≠ 1.\nPour x ≠ -3 et x ≠ 1 : F = [(x - 3)(x + 3)] / [(x + 3)(x - 1)] = (x - 3) / (x - 1).'
      }
    ],
    exercises: [
      {
        question: 'Résous dans ℝ l\'équation (3x - 4)(2x + 1) = 0.',
        correction: 'D\'après la règle du produit nul :\n3x - 4 = 0 ou 2x + 1 = 0\n3x = 4 ou 2x = -1\nx = 4/3 ou x = -1/2.\nL\'ensemble des solutions est S = {-1/2 ; 4/3}.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les grandes vacances, des élèves de 3ème vendent des objets d\'une coopérative à 2000 F l\'unité. Le coût de fabrication de x objets est C = 2090x - x² (x > 0). La présidente cherche le nombre d\'articles pour lequel les dépenses et la recette s\'équilibrent.',
      instructions: [
        '1. Exprime en fonction de x la recette R de x objets vendus.',
        '2. Sachant que le bénéfice est B = R - C, démontre que B = x(x - 90).',
        '3. Déduis-en le nombre d\'articles pour lequel les dépenses et la recette s\'équilibrent.'
      ],
      solutionGuide: '1. Recette : R = 2000x.\n2. Bénéfice B = R - C = 2000x - (2090x - x²) = 2000x - 2090x + x² = x² - 90x = x(x - 90).\n3. L\'équilibre correspond à un bénéfice nul B = 0 :\nx(x - 90) = 0 ⟺ x = 0 ou x - 90 = 0 ⟺ x = 0 ou x = 90.\nComme x > 0, le nombre d\'articles recherché est 90.'
    },
    examTraps: [
      'Oublier le double produit 2ab dans le développement de (a + b)².',
      'Oublier la solution négative de x² = a (ex : x² = 25 donne x = 5 ou x = -5).',
      'Simplifier une fraction rationnelle sans préciser au préalable les valeurs interdites.'
    ],
    quickMemo: '(a±b)² = a² ± 2ab + b² ; a² - b² = (a-b)(a+b) ; ab = 0 ⟺ a = 0 ou b = 0 ; Fraction A/B : B ≠ 0 obligatoire.',
    keywords: ['calcul litteral 3e', 'identites remarquables', 'fractions rationnelles', 'produit nul', 'puissances negatives', 'factorisation']
  },

  // =========================================================================
  // LEÇON 2 : PROPRIÉTÉS DE THALÈS DANS LE TRIANGLE (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon2-proprietes-thales-triangle',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie du plan : Propriétés de Thalès dans le triangle',
    lessonTitle: 'Propriétés de Thalès dans le triangle : Propriété directe, conséquence, réciproque et partage de segment',
    objectifs: [
      'Reconnaître les trois configurations de Thalès (triangle classique, points extérieurs, sablier/nœud papillon)',
      'Énoncer et appliquer la propriété directe de Thalès : si (MN) // (BC), alors AM/AB = AN/AC',
      'Appliquer la conséquence de la propriété de Thalès : MN/BC = AM/AB = AN/AC pour calculer la longueur des segments parallèles',
      'Énoncer et appliquer la réciproque de la propriété de Thalès avec vérification de l\'alignement dans le même ordre des points pour démontrer le parallélisme de deux droites',
      'Partager un segment [AB] en n segments de même longueur à l\'aide d\'une demi-droite graduée au compas et de droites parallèles'
    ],
    fullCourseContent: `I. Propriété directe de Thalès et Configurations :
1. Propriété :
Soit ABC un triangle. M est un point de la droite (AB) et N un point de la droite (AC).
Si la droite (MN) est parallèle à la droite (BC), alors :
AM / AB = AN / AC.
2. Les trois configurations de Thalès :
- Configuration 1 (points intérieurs) : M ∈ [AB] et N ∈ [AC].
- Configuration 2 (points extérieurs) : A ∈ [MB] et A ∈ [NC].
- Configuration 3 (croisée / sablier) : A est situé entre M et B, et entre N et C (droites sécantes en A).
Dans tous les cas, si (MN) // (BC), le rapport AM/AB = AN/AC reste vérifié.

II. Conséquence de la propriété de Thalès :
Propriété :
ABC est un triangle, M ∈ (AB) et N ∈ (AC).
Si (MN) // (BC), alors :
MN / BC = AM / AB = AN / AC.
Utilité pratique : La conséquence de la propriété de Thalès permet de calculer la longueur des segments portés par les droites parallèles (MN et BC).

III. Réciproque de la propriété de Thalès :
Propriété :
Soit ABC un triangle, M un point de la droite (AB) et N un point de la droite (AC) tels que la position de M par rapport à A et B soit la même que celle de N par rapport à A et C (points alignés dans le même ordre).
Si AM / AB = AN / AC, alors les droites (MN) et (BC) sont parallèles.
Méthode :
- Calculer séparément les deux quotients numériques AM/AB et AN/AC ;
- Constater leur égalité ;
- Préciser la condition d'alignement des points dans le même ordre ;
- Conclure au parallélisme des droites.

IV. Partage d'un segment en n segments de même longueur :
Méthode géométrique à la règle et au compas :
Pour partager un segment [AB] en n parties égales :
1. Tracer une demi-droite [AX) non portée par (AB).
2. Choisir un écartement de compas fixe et reporter n graduations régulières sur [AX) à partir de A : A1, A2, ..., An.
3. Relier le dernier point An au point B.
4. Tracer les parallèles à la droite (AnB) passant par chacune des graduations A1, A2, ...
D'après la propriété de Thalès, ces parallèles découpent le segment [AB] en n segments de même longueur.`,
    definitions: [
      {
        term: 'Propriété de Thalès',
        definition: 'Théorème géométrique établissant la proportionnalité des longueurs découpées sur les côtés d\'un triangle par une droite parallèle à l\'un des côtés.'
      },
      {
        term: 'Réciproque de Thalès',
        definition: 'Règle permettant d\'établir le parallélisme de deux droites lorsque deux quotients de longueurs sont égaux et que les points sont placés dans le même ordre.'
      },
      {
        term: 'Configuration en sablier (nœud papillon)',
        definition: 'Configuration où le sommet commun A se trouve entre les segments parallèles, les droites sécantes se croisant en A.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Égalité des trois rapports (Conséquence de Thalès)',
        statement: 'Si (MN) // (BC) dans le triangle ABC, alors MN/BC = AM/AB = AN/AC.'
      },
      {
        name: 'Condition d\'ordre de la réciproque',
        statement: 'L\'égalité numérique AM/AB = AN/AC ne suffit pas : il faut obligatoirement que M et N soient situés du même côté de A (alignement dans le même ordre).'
      }
    ],
    formulas: [
      {
        name: 'Rapports de Thalès',
        formula: 'AM / AB = AN / AC = MN / BC',
        explanation: 'Rapports égaux entre longueurs du petit triangle et du grand triangle.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer une distance avec la conséquence de Thalès',
        procedure: '1. Identifier le triangle principal et les deux droites sécantes.\n2. Justifier que deux droites sont parallèles (données ou perpendiculaires à une même troisième).\n3. Écrire la chaîne d\'égalités de Thalès : AM/AB = AN/AC = MN/BC.\n4. Remplacer par les valeurs connues et effectuer un produit en croix pour calculer la longueur inconnue.',
        tip: 'Bien repérer les sommets correspondants pour ne pas inverser numérateur et dénominateur.'
      }
    ],
    examples: [
      {
        statement: 'Dans le triangle ABK, F ∈ [AK] et E ∈ [BK] avec (AB) // (EF). On donne AK = 8, KF = 3 et EF = 6. Calcule AB.',
        solution: 'Les droites (AF) et (BE) sont sécantes en K avec (AB) // (EF).\nD\'après la conséquence de Thalès : KF / KA = EF / AB.\n3 / 8 = 6 / AB ⟺ 3 × AB = 8 × 6 = 48 ⟺ AB = 48 / 3 = 16.'
      }
    ],
    exercises: [
      {
        question: 'Soit ABC un triangle tel que AB = 6, AC = 9 et BC = 3. Soit D ∈ [AB] tel que AD = 2 et E ∈ [AC] tel que AE = 3. Démontre que (DE) // (BC).',
        correction: 'Calculons séparément les quotients :\nAD / AB = 2 / 6 = 1/3.\nAE / AC = 3 / 9 = 1/3.\nOn a AD/AB = AE/AC. De plus, D appartient à [AB] et E appartient à [AC] (les points A, D, B et A, E, C sont alignés dans le même ordre).\nD\'après la réciproque de la propriété de Thalès, les droites (DE) et (BC) sont parallèles.'
      }
    ],
    evaluationSituation: {
      context: 'Yéo a dans son jardin un manguier de 6,7 m et un anacardier. Pour trouver la hauteur de l\'anacardier, son neveu se place à un endroit où ses yeux Y (à 1,6 m du sol) sont alignés avec la cime E de l\'anacardier et la cime O du manguier. Les deux arbres sont distants de 30 m et la distance entre le neveu et l\'anacardier est 20 m. Les troncs (OW) et (EA) sont perpendiculaires à la ligne du sol (YW).',
      instructions: [
        '1. Justifie que les droites (OW) et (EA) sont parallèles.',
        '2. Calcule la hauteur EA de l\'anacardier au-dessus de la ligne des yeux.',
        '3. Déduis-en la hauteur totale de l\'anacardier.'
      ],
      solutionGuide: '1. Les droites (OW) et (EA) sont toutes deux perpendiculaires à la droite (YW), donc elles sont parallèles entre elles : (OW) // (EA).\n2. Dans le triangle YOW, E ∈ (YO), A ∈ (YW) et (EA) // (OW). D\'après la conséquence de Thalès : YA / YW = EA / WO.\nOn a YA = 20 m, YW = 20 + 30 = 50 m, et WO = 6,7 - 1,6 = 5,1 m.\nDonc EA = (YA × WO) / YW = (20 × 5,1) / 50 = 102 / 50 = 2,04 m.\n3. Hauteur totale de l\'anacardier = 2,04 + 1,60 = 3,64 m.'
    },
    examTraps: [
      'Écrire directement l\'égalité AM/AB = AN/AC pour démontrer que les droites sont parallèles (il faut calculer chaque quotient SÉPARÉMENT avant de conclure).',
      'Confondre le rapport des côtés parallèles MN/BC avec le rapport de segments non issus du sommet comme MB/NC (Thalès ne donne pas MB/NC).'
    ],
    quickMemo: 'Thalès direct : parallèles ⟹ AM/AB = AN/AC = MN/BC. Réciproque : rapports égaux + même ordre ⟹ droites parallèles.',
    keywords: ['thales 3e', 'propriete de thales', 'reciproque de thales', 'consequence de thales', 'partage de segment', 'bepc maths']
  },

  // =========================================================================
  // LEÇON 3 : RACINES CARRÉES (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon3-racines-carrees',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Calculs Algébriques : Racines carrées',
    lessonTitle: 'Racines carrées : Définition, valeur absolue, opérations, puissances et élimination du radical au dénominateur',
    objectifs: [
      'Définir la racine carrée d\'un nombre positif a : nombre positif noté √a dont le carré est égal à a',
      'Reconnaître l\'ensemble des nombres réels ℝ (réunion des rationnels et des irrationnels)',
      'Utiliser la valeur absolue d\'un réel : |a| = a si a ≥ 0 et |a| = -a si a < 0, et la propriété fondamentale √(a²) = |a|',
      'Appliquer les règles opératoires du produit et du quotient : √(a × b) = √a × √b et √(a/b) = √a / √b',
      'Calculer les puissances de racines carrées : √(a^(2n)) = a^n et √(a^(2n+1)) = a^n√a',
      'Écrire un quotient sans radical au dénominateur en multipliant par √b ou par l\'expression conjuguée (b - c√d)'
    ],
    fullCourseContent: `I. Définition et Généralités :
1. Définition :
Pour tout nombre réel positif a, la racine carrée de a est l'unique nombre positif, noté √a, dont le carré est a.
Le symbole √ est appelé radical.
Conséquences :
- Pour tout a ≥ 0 : √a ≥ 0 et (√a)² = a.
- Pour tout a ≥ 0 et b ≥ 0 : √a = b équivaut à a = b².
Exemples : √0 = 0 ; √1 = 1 ; √25 = 5 car 5² = 25 ; (√7)² = 7.

2. Ensemble des nombres réels ℝ :
- Les nombres qui ne peuvent pas s'écrire sous forme de fraction sont appelés nombres irrationnels (ex : √2, √3, π).
- L'ensemble formé par tous les nombres rationnels et irrationnels est appelé ensemble des nombres réels, noté ℝ.

3. Valeur absolue d'un nombre réel et propriété du carré :
- Définition : La valeur absolue d'un nombre réel a, notée |a|, est sa distance à zéro sur la droite graduée.
  * Si a ≥ 0, alors |a| = a.
  * Si a < 0, alors |a| = -a.
- Propriété fondamentale : Pour tout nombre réel a (positif ou négatif) :
  √(a²) = |a|.
  Exemples : √((-2,3)²) = |-2,3| = 2,3 ; √((-π)²) = |-π| = π ; √(6,1²) = 6,1.

II. Opérations sur les Racines Carrées :
1. Produit : Pour tous réels positifs a et b :
   √(a × b) = √a × √b.
   Exemple : √8 × √2 = √(8 × 2) = √16 = 4.
   Forme a√b : √75 = √(25 × 3) = √25 × √3 = 5√3.
2. Quotient : Pour a ≥ 0 et b > 0 :
   √(a / b) = √a / √b.
   Exemple : √(25/9) = √25 / √9 = 5/3 ; √75 / √3 = √(75/3) = √25 = 5.
3. Attention cruciale (Faux amis) :
   En général, √(a + b) ≠ √a + √b et √(a - b) ≠ √a - √b.
   Contre-exemple : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7 (5 ≠ 7).

III. Puissances et Racines Carrées :
Pour tout réel a > 0 et n entier relatif :
- √(a^(2n)) = a^n (ex : √(3^8) = 3^4 = 81).
- √(a^(2n+1)) = a^n√a (ex : √(7^11) = 7^5√7).

IV. Écriture d'un quotient sans radical au dénominateur :
1. Type a / √b (dénominateur monôme) :
On multiplie le numérateur et le dénominateur par √b :
a / √b = (a × √b) / (√b × √b) = (a√b) / b.
Exemple : 4 / √15 = (4√15) / 15.
2. Type a / (b + c√d) (dénominateur binôme) :
On multiplie par l'expression conjuguée (b - c√d) en utilisant (x+y)(x-y) = x² - y² :
a / (b + c√d) = [a(b - c√d)] / [(b + c√d)(b - c√d)] = [a(b - c√d)] / [b² - c²d].
Exemple : 3 / (3 + √5) = [3(3 - √5)] / (3² - 5) = (9 - 3√5) / 4.`,
    definitions: [
      {
        term: 'Radical',
        definition: 'Symbole mathématique √ désignant la racine carrée d\'un nombre positif.'
      },
      {
        term: 'Valeur absolue |a|',
        definition: 'Distance à zéro d\'un nombre réel a : |a| = a si a ≥ 0 et |a| = -a si a < 0.'
      },
      {
        term: 'Expression conjuguée',
        definition: 'L\'expression conjuguée de (b + c√d) est (b - c√d). Leur produit fait disparaître le radical : (b + c√d)(b - c√d) = b² - c²d.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Racine du carré',
        statement: 'Pour tout réel a : √(a²) = |a|. Le résultat est TOUJOURS positif.'
      },
      {
        name: 'Produit et quotient de radicaux',
        statement: 'Pour a ≥ 0 et b > 0 : √(ab) = √a × √b et √(a/b) = √a / √b.'
      },
      {
        name: 'Non-distributivité sur la somme',
        statement: 'Il est formellement interdit d\'écrire √(a+b) = √a + √b.'
      }
    ],
    formulas: [
      {
        name: 'Règle du produit',
        formula: '√(a × b) = √a × √b',
        explanation: 'Permet d\'extraire les carrés parfaits sous la forme a√b.'
      },
      {
        name: 'Suppression du radical par le conjugué',
        formula: '(b + c√d)(b - c√d) = b² - c²d',
        explanation: 'Application de l\'identité remarquable (x+y)(x-y) = x² - y².'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Écrire un quotient sans radical avec le conjugué',
        procedure: '1. Repérer le binôme au dénominateur : b + c√d.\n2. Former son expression conjuguée : b - c√d.\n3. Multiplier le haut et le bas par cette expression conjuguée.\n4. Développer le dénominateur avec (x+y)(x-y) = x² - y².\n5. Simplifier la fraction obtenue.',
        tip: 'Mettre des parenthèses autour des binômes avant de multiplier !'
      }
    ],
    examples: [
      {
        statement: 'Écris le nombre B = (√5 - 2) / (√5 + 2) sans radical au dénominateur.',
        solution: 'Conjugué de (√5 + 2) est (√5 - 2).\nB = [(√5 - 2)(√5 - 2)] / [(√5 + 2)(√5 - 2)] = (√5 - 2)² / [5 - 4] = [5 - 4√5 + 4] / 1 = 9 - 4√5.'
      }
    ],
    exercises: [
      {
        question: 'Écris sous la forme a√b avec b le plus petit entier possible : E = 3√8 - 5√18 + 2√50.',
        correction: '√8 = √(4 × 2) = 2√2 ⟹ 3√8 = 6√2.\n√18 = √(9 × 2) = 3√2 ⟹ 5√18 = 15√2.\n√50 = √(25 × 2) = 5√2 ⟹ 2√50 = 10√2.\nE = 6√2 - 15√2 + 10√2 = (6 - 15 + 10)√2 = 1√2 = √2.'
      }
    ],
    evaluationSituation: {
      context: 'M. TIENE a un champ carré de côté 30√5 m (figure MNPQ). Il nettoie un carré intérieur ABCM de côté x = 30 m. Il dispose de 32 000 F CFA pour nettoyer le reste du champ. Un manœuvre propose de nettoyer la partie restante à 10 F CFA le m². On donne 2,23 < √5 < 2,24.',
      instructions: [
        '1. Démontre que l\'aire restante à nettoyer est Ar = (60√5x - x²) m².',
        '2. Pour x = 30 m, justifie que 3114 m² < Ar < 3132 m².',
        '3. Dis si M. TIENE dispose d\'une somme suffisante pour payer le manœuvre.'
      ],
      solutionGuide: '1. Aire totale du champ MNPQ = (30√5)² = 900 × 5 = 4500 m².\nAire nettoyée ABCM = (30√5 - (30√5 - x))² ... ou par différence : côté MC = 30√5 - x, aire nettoyée A = (30√5 - x)² = 4500 - 60√5x + x².\nAire restante Ar = 4500 - (4500 - 60√5x + x²) = (60√5x - x²) m².\n2. Pour x = 30 : Ar = 60√5(30) - 30² = 1800√5 - 900.\nAvec 2,23 < √5 < 2,24 :\n1800 × 2,23 < 1800√5 < 1800 × 2,24 ⟺ 4014 < 1800√5 < 4032.\nEn retranchant 900 : 3114 < Ar < 3132 m².\n3. Coût du nettoyage = 10 × Ar, donc 31 140 F < Montant < 31 320 F.\nComme M. TIENE dispose de 32 000 F, qui est supérieur à la borne maximale 31 320 F, sa somme sera largement suffisante.'
    },
    examTraps: [
      'Écrire √((-5)²) = -5 au lieu de |-5| = 5 (une racine carrée ne peut JAMAIS être négative).',
      'Affirmer que √(a + b) = √a + √b.',
      'Oublier de changer le signe dans l\'expression conjuguée : le conjugué de 3 + √5 est 3 - √5.'
    ],
    quickMemo: '√(a²) = |a| ; √(ab) = √a√b ; a/√b = a√b/b ; a/(b+c√d) ⟹ multiplier par (b - c√d). Toujours positif.',
    keywords: ['racines carrees 3e', 'radical', 'valeur absolue', 'expression conjuguee', 'simplification de radicaux', 'bepc']
  },

  // =========================================================================
  // LEÇON 4 : TRIANGLE RECTANGLE & TRIGONOMÉTRIE (10 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon4-triangle-rectangle-trigonometrie',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Théorème de Pythagore & Triangle rectangle',
    lessonTitle: 'Triangle rectangle : Propriété et réciproque de Pythagore, construction de √a, propriété métrique et trigonométrie (sin, cos, tan)',
    objectifs: [
      'Énoncer et appliquer la propriété de Pythagore : dans un triangle ABC rectangle en A, BC² = AB² + AC²',
      'Utiliser la réciproque de la propriété de Pythagore pour démontrer qu\'un triangle est rectangle',
      'Construire géométriquement à la règle et au compas un segment de longueur √a (a > 0) par la méthode de l\'hypoténuse ou du demi-cercle',
      'Appliquer la propriété métrique déduite de l\'aire : AB × BC = BH × AC dans un triangle rectangle en B de hauteur [BH]',
      'Définir et calculer le sinus, le cosinus et la tangente d\'un angle aigu dans un triangle rectangle',
      'Utiliser les propriétés : 0 < sin < 1, 0 < cos < 1, sin² + cos² = 1, tan = sin / cos et angles complémentaires (sin A = cos B)',
      'Lire et encadrer la mesure d\'un angle à l\'aide d\'un extrait de table trigonométrique'
    ],
    fullCourseContent: `I. Propriétés de Pythagore :
1. Propriété directe :
Si un triangle ABC est rectangle en A, alors le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :
BC² = AB² + AC².
2. Réciproque de Pythagore :
Dans un triangle ABC, si BC² = AB² + AC², alors ce triangle est rectangle en A (BC étant le plus grand côté).

II. Construction géométrique d'un segment de longueur √a (a > 0) :
- Méthode 1 (Somme de carrés : a = x² + y²) :
  Construire deux demi-droites perpendiculaires en A. Placer B sur l'une tel que AB = x, et C sur l'autre tel que AC = y. Le segment [BC] a pour longueur BC = √(x² + y²) = √a.
  Exemple : pour √13, 13 = 3² + 2² (côtés 3 et 2).
- Méthode 2 (Différence de carrés : a = c² - b²) :
  Tracer un demi-cercle de diamètre [NA] de longueur c. Avec le compas, placer Q sur le demi-cercle tel que AQ = b. Le triangle NAQ est rectangle en Q, donc NQ = √(c² - b²) = √a.
  Exemple : pour √65, 65 = 9² - 4² (diamètre 9, côté 4).

III. Propriété métrique déduite de l'aire :
Propriété : Dans un triangle rectangle, le produit des longueurs des côtés de l'angle droit est égal au produit de la longueur de l'hypoténuse par la hauteur issue du sommet de l'angle droit :
Si ABC est rectangle en B et H est le pied de la hauteur issue de B, alors :
AB × BC = BH × AC.

IV. Trigonométrie dans le triangle rectangle :
1. Définitions pour un angle aigu Â :
- Sinus : sin(Â) = Côté opposé à Â / Hypoténuse
- Cosinus : cos(Â) = Côté adjacent à Â / Hypoténuse
- Tangente : tan(Â) = Côté opposé à Â / Côté adjacent à Â
2. Propriétés fondamentales :
Pour tout angle aigu de mesure a° :
- 0 < sin(a°) < 1  et  0 < cos(a°) < 1
- sin²(a°) + cos²(a°) = 1
- tan(a°) = sin(a°) / cos(a°)
3. Angles complémentaires :
Lorsque deux angles aigus Â et B̂ sont complémentaires (mes Â + mes B̂ = 90°) :
sin(Â) = cos(B̂)  et  cos(Â) = sin(B̂).
Exemple : sin(67°) = cos(23°) car 67° + 23° = 90°.

V. Utilisation de la table trigonométrique :
La table trigonométrique permet de :
- Trouver la valeur décimale approchée du sinus, cosinus ou tangente d'un angle donné ;
- Encadrer la mesure d'un angle entre deux entiers consécutifs connaissant son rapport trigonométrique.`,
    definitions: [
      {
        term: 'Hypoténuse',
        definition: 'Le côté opposé à l\'angle droit dans un triangle rectangle. C\'est le plus long côté du triangle.'
      },
      {
        term: 'Sinus d\'un angle aigu',
        definition: 'Rapport de la longueur du côté opposé à cet angle par la longueur de l\'hypoténuse.'
      },
      {
        term: 'Cosinus d\'un angle aigu',
        definition: 'Rapport de la longueur du côté adjacent à cet angle par la longueur de l\'hypoténuse.'
      },
      {
        term: 'Tangente d\'un angle aigu',
        definition: 'Rapport du côté opposé au côté adjacent, égal également au quotient sin / cos.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Égalité de Pythagore',
        statement: 'Dans un triangle rectangle en A : BC² = AB² + AC².'
      },
      {
        name: 'Propriété métrique déduite de l\'aire',
        statement: 'AB × BC = BH × AC où [BH] est la hauteur relative à l\'hypoténuse [AC].'
      },
      {
        name: 'Relation fondamentale de la trigonométrie',
        statement: 'Pour tout angle aigu : sin²(x) + cos²(x) = 1 et tan(x) = sin(x) / cos(x).'
      },
      {
        name: 'Règle des angles complémentaires',
        statement: 'Si mes Â + mes B̂ = 90°, alors sin(Â) = cos(B̂) et cos(Â) = sin(B̂).'
      }
    ],
    formulas: [
      {
        name: 'Formules trigonométriques (SOH CAH TOA)',
        formula: 'sin = Opp/Hyp ; cos = Adj/Hyp ; tan = Opp/Adj',
        explanation: 'Définitions dans le triangle rectangle.'
      },
      {
        name: 'Relation métrique de l\'aire',
        formula: 'AB × BC = BH × AC',
        explanation: 'Égalité entre double de l\'aire par les côtés de l\'angle droit et par l\'hypoténuse.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la hauteur relative à l\'hypoténuse',
        procedure: '1. Vérifier que le triangle ABC est rectangle (en B).\n2. Calculer l\'hypoténuse AC avec Pythagore si nécessaire.\n3. Poser la relation métrique : AB × BC = BH × AC.\n4. Isoler BH : BH = (AB × BC) / AC.\n5. Écrire le résultat sous forme simplifiée (sans radical au dénominateur).',
        tip: 'Vérifier que BH est toujours strictement inférieure à AB et à BC.'
      }
    ],
    examples: [
      {
        statement: 'ABC est un triangle rectangle en A avec AB = 6, AC = 8 et BC = 10. Calcule sin B̂, cos B̂ et tan B̂.',
        solution: 'sin B̂ = AC / BC = 8 / 10 = 4/5 = 0,8.\ncos B̂ = AB / BC = 6 / 10 = 3/5 = 0,6.\ntan B̂ = AC / AB = 8 / 6 = 4/3.'
      }
    ],
    exercises: [
      {
        question: 'Sachant que sin Â = 3/5 et que Â est un angle aigu, calcule cos Â puis tan Â.',
        correction: 'On sait que sin² Â + cos² Â = 1.\ncos² Â = 1 - sin² Â = 1 - (3/5)² = 1 - 9/25 = 16/25.\nComme Â est aigu, cos Â > 0, donc cos Â = √(16/25) = 4/5.\ntan Â = sin Â / cos Â = (3/5) / (4/5) = 3/4.'
      }
    ],
    evaluationSituation: {
      context: 'Pour le tournoi communal de basket, on installe un panneau à 6 m du sol sur un mur vertical. On dispose d\'une échelle de 6,5 m. Le maçon indique que le panier sera bien placé si l\'angle formé par l\'échelle et le sol est compris entre 60° et 70°. Extrait de table : sin 67° ≈ 0,921 ; sin 68° ≈ 0,927.',
      instructions: [
        '1. Détermine la distance entre le pied du mur et le pied de l\'échelle.',
        '2. Calcule le sinus de l\'angle formé par l\'échelle et le sol.',
        '3. Encadre la mesure de cet angle et dis si le panier sera bien placé.'
      ],
      solutionGuide: '1. Soit ABC rectangle en B (sol et mur). AC = 6,5 m (échelle) et AB = 6 m (mur). D\'après Pythagore : BC² = AC² - AB² = 6,5² - 6² = 42,25 - 36 = 6,25. Donc BC = √6,25 = 2,5 m.\n2. sin(ACB) = AB / AC = 6 / 6,5 = 60 / 65 = 12 / 13 ≈ 0,923.\n3. On constate que 0,921 < 0,923 < 0,927, ce qui correspond à sin 67° < sin(ACB) < sin 68°.\nDonc 67° < mes(ACB) < 68°. L\'angle est bien compris entre 60° et 70°, le panier sera parfaitement placé.'
    },
    examTraps: [
      'Inverser sinus et cosinus : le sinus utilise le côté OPPOSÉ, le cosinus le côté ADJACENT.',
      'Oublier d\'élever au carré lors de l\'application de Pythagore : écrire BC = AB + AC est une faute éliminatoire.',
      'Utiliser la trigonométrie dans un triangle qui n\'est PAS rectangle.'
    ],
    quickMemo: 'Pythagore : Hyp² = Côté1² + Côté2² ; SOH CAH TOA ; sin² + cos² = 1 ; tan = sin/cos ; sin(90°-x) = cos(x).',
    keywords: ['theoreme de pythagore', 'theoreme pythagore', 'propriete de pythagore', 'egalite de pythagore', 'pythagore', 'reciproque pythagore', 'triangle rectangle', 'trigonometrie', 'sinus cosinus tangente', 'propriete metrique aire']
  },

  // =========================================================================
  // LEÇON 5 : CALCUL NUMÉRIQUE (10 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon5-calcul-numerique',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Calculs Algébriques : Calcul numérique',
    lessonTitle: 'Calcul numérique : Inégalités, intervalles, réunion, intersection, comparaison de carrés/inverses et encadrements',
    objectifs: [
      'Maîtriser les inégalités larges (≤, ≥) et strictes (<, >)',
      'Définir et représenter graphiquement les 8 types d\'intervalles de ℝ, déterminer leur amplitude |a-b| et leur centre (a+b)/2',
      'Déterminer l\'intersection A ∩ B (éléments communs) et la réunion A ∪ B (éléments de l\'un ou de l\'autre) d\'intervalles',
      'Comparer des nombres réels par l\'addition, la multiplication, la comparaison de leurs carrés ou de leurs inverses',
      'Encadrer rigoureusement une somme (a+b), une différence (a-b = a + (-b)), un produit (ab) et un quotient (a/b = a × (1/b))',
      'Déterminer l\'arrondi d\'un nombre réel à l\'ordre 0, 1, 2 ou 3'
    ],
    fullCourseContent: `I. Intervalles de ℝ :
1. Définitions et Vocabulaire :
Pour deux réels a et b avec a < b :
- [a ; b] : intervalle fermé, ensemble des réels x tels que a ≤ x ≤ b.
- ]a ; b[ : intervalle ouvert, a < x < b.
- [a ; b[ : fermé en a, ouvert en b, a ≤ x < b.
- ]a ; b] : ouvert en a, fermé en b, a < x ≤ b.
- [a ; →[ : réels x tels que x ≥ a.
- ]a ; →[ : réels x tels que x > a.
- ]← ; b] : réels x tels que x ≤ b.
- ]← ; b[ : réels x tels que x < b.
- Amplitude de l'intervalle : |a - b| = b - a.
- Centre de l'intervalle : (a + b) / 2.

2. Réunion et Intersection :
- L'intersection A ∩ B est l'ensemble des éléments appartenant à la fois à A et à B (zone où les deux hachures se superposent). Si aucun élément commun, A ∩ B = ∅.
- La réunion A ∪ B est l'ensemble des éléments appartenant à A ou à B (zone couverte par au moins l'un des intervalles).

II. Comparaison de nombres réels :
1. Rappels sur les inégalités :
- Si a < b et c > 0, alors ac < bc (le sens ne change pas).
- Si a < b et c < 0, alors ac > bc (le sens s'inverse !).
- Si a < b, alors a + c < b + c.
2. Comparaison des carrés :
- Deux nombres positifs sont rangés dans le même ordre que leurs carrés : pour a ≥ 0 et b ≥ 0, a < b ⟺ a² < b².
- Deux nombres négatifs sont rangés dans l'ordre contraire de leurs carrés : pour a ≤ 0 et b ≤ 0, a < b ⟺ a² > b².
3. Comparaison des racines et des inverses :
- Pour a ≥ 0 et b ≥ 0 : a < b ⟺ √a < √b.
- Deux nombres de même signe sont rangés dans l'ordre contraire de leurs inverses : a < b ⟺ 1/a > 1/b.

III. Encadrements :
1. Somme : Si a < x < b et c < y < d, alors a + c < x + y < b + d.
2. Différence (Règle d'or) : On n'effectue JAMAIS de soustraction membre à membre ! On écrit : x - y = x + (-y).
   - Étape 1 : Encadrer (-y) en multipliant par -1 et en inversant le sens.
   - Étape 2 : Additionner membre à membre l'encadrement de x et celui de (-y).
3. Produit : Pour des réels positifs, on multiplie membre à membre : si a < x < b et c < y < d (tous positifs), alors ac < xy < bd.
4. Quotient : On écrit x / y = x × (1/y). On encadre d'abord 1/y puis on effectue le produit membre à membre.
5. Arrondis décimaux :
- Ordre 0 (à l'unité), ordre 1 (au dixième : 1 chiffre après la virgule), ordre 2 (au centième), ordre 3 (au millième).
Règle : si le chiffre suivant est 0, 1, 2, 3, 4 ⟹ on tronque ; s'il est 5, 6, 7, 8, 9 ⟹ on ajoute 1 au dernier chiffre conservé.`,
    definitions: [
      {
        term: 'Amplitude d\'un intervalle',
        definition: 'La longueur de l\'intervalle, égale à |a - b| (distance entre les deux bornes).'
      },
      {
        term: 'Intersection A ∩ B',
        definition: 'Ensemble des éléments qui appartiennent simultanément aux deux ensembles A et B.'
      },
      {
        term: 'Réunion A ∪ B',
        definition: 'Ensemble des éléments qui appartiennent à l\'un au moins des ensembles A ou B.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'encadrement d\'une différence',
        statement: 'Ne jamais soustraire membre à membre. Toujours transformer x - y en x + (-y).'
      },
      {
        name: 'Règle de l\'inversion de sens',
        statement: 'Multiplier par un nombre négatif ou prendre les inverses de deux nombres de même signe inverse le sens de l\'inégalité.'
      }
    ],
    formulas: [
      {
        name: 'Centre d\'un intervalle',
        formula: 'c = (a + b) / 2',
        explanation: 'Milieu ou point central de l\'intervalle.'
      },
      {
        name: 'Amplitude',
        formula: 'L = b - a (avec a < b)',
        explanation: 'Distance séparant les deux bornes.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Encadrer une différence a - b',
        procedure: '1. Partir de l\'encadrement de b : m < b < n.\n2. Multiplier par -1 pour encadrer (-b) : -n < -b < -m.\n3. Poser sous forme de somme : a - b = a + (-b).\n4. Additionner membre à membre l\'encadrement de a et celui de (-b).',
        tip: 'Ne JAMAIS faire d\'opération soustraction colonne par colonne !'
      }
    ],
    examples: [
      {
        statement: 'Sachant que 1,41 < √2 < 1,42 et 1,73 < √3 < 1,74, encadre √3 - √2 au dixième près.',
        solution: 'Encadrons (-√2) : -1,42 < -√2 < -1,41.\nAdditionnons avec √3 : 1,73 + (-1,42) < √3 - √2 < 1,74 + (-1,41) ⟺ 0,31 < √3 - √2 < 0,33.\nEncadrement par deux décimaux consécutifs d\'ordre 1 : 0,3 < √3 - √2 < 0,4.'
      }
    ],
    exercises: [
      {
        question: 'Compare 2√3 et 3√2 en comparant leurs carrés.',
        correction: '(2√3)² = 4 × 3 = 12 et (3√2)² = 9 × 2 = 18.\nComme 12 < 18 et que ces nombres sont positifs, 2√3 < 3√2.'
      }
    ],
    evaluationSituation: {
      context: 'M. Diaby possède un terrain triangulaire dont l\'aire est A = 20√7(x + 5) m². L\'architecte exige que l\'aire soit comprise entre 360 m² et 430 m². On donne 2,645 < √7 < 2,646 et 2 < x < 3.',
      instructions: [
        '1. Encadre l\'expression 20√7 et l\'expression (x + 5).',
        '2. Déduis-en un encadrement de l\'aire A.',
        '3. Dis si M. Diaby pourra réaliser son projet.'
      ],
      solutionGuide: '1. 20 × 2,645 < 20√7 < 20 × 2,646 ⟺ 52,9 < 20√7 < 52,92.\nEt 2 + 5 < x + 5 < 3 + 5 ⟺ 7 < x + 5 < 8.\n2. En multipliant membre à membre (nombres positifs) :\n52,9 × 7 < 20√7(x + 5) < 52,92 × 8 ⟺ 370,3 < A < 423,36 m².\n3. L\'aire A est garantie entre 370,3 m² et 423,36 m², elle est donc strictement incluse dans l\'intervalle exigé [360 ; 430]. M. Diaby pourra parfaitement réaliser son projet.'
    },
    examTraps: [
      'Soustraire membre à membre deux inégalités (faute très fréquente sanctionnée par zéro).',
      'Diviser membre à membre au lieu de multiplier par l\'inverse.',
      'Oublier d\'inverser le sens de l\'inégalité lors de la multiplication par un nombre négatif.'
    ],
    quickMemo: 'a - b = a + (-b) ; a/b = a × (1/b) ; × par négatif ⟹ sens inversé ; Positifs : même ordre que les carrés ; Négatifs : ordre contraire.',
    keywords: ['calcul numerique 3e', 'intervalles', 'reunion intersection', 'comparaison de carres', 'encadrement produit quotient', 'arrondis']
  },

  // =========================================================================
  // LEÇON 6 : ANGLES INSCRITS (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon6-angles-inscrits',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie du plan : Angles inscrits',
    lessonTitle: 'Angles inscrits : Définition, angle au centre associé, propriétés des mesures et angles interceptant le même arc',
    objectifs: [
      'Définir un angle inscrit dans un cercle et identifier l\'arc de cercle intercepté',
      'Définir l\'angle au centre associé à un angle inscrit (même arc intercepté)',
      'Énoncer et appliquer le théorème de l\'angle inscrit : la mesure d\'un angle aigu inscrit est la moitié de celle de l\'angle au centre associé (mes AMB = 1/2 mes AOB)',
      'Énoncer et appliquer la propriété des angles inscrits interceptant le même arc : deux angles inscrits interceptant le même arc ont la même mesure',
      'Calculer les mesures d\'angles dans des polygones et figures géométriques circulaires complexes'
    ],
    fullCourseContent: `I. Définitions et Vocabulaire :
1. Angle inscrit :
Un angle inscrit dans un cercle est un angle dont le sommet est un point du cercle et dont les côtés coupent le cercle en deux points distincts du sommet.
Exemple : L'angle AMB a son sommet M sur le cercle et ses côtés coupent le cercle en A et B. Il intercepte l'arc AB.

2. Angle au centre et angle associé :
- Un angle au centre est un angle dont le sommet est le centre O du cercle (ex : AOB).
- Un angle inscrit et un angle au centre sont dits associés lorsqu'ils interceptent le même arc de cercle.

II. Propriétés des Angles Inscrits :
1. Mesure d'un angle aigu inscrit et de l'angle au centre associé :
Propriété fondamentale :
Dans un cercle, la mesure d'un angle aigu inscrit est égale à la moitié de la mesure de l'angle au centre associé :
mes(AMB) = (1/2) × mes(AOB)   ⟺   mes(AOB) = 2 × mes(AMB).
Exemple : Si l'angle au centre AOB mesure 120°, l'angle inscrit associé AMB mesure 120° / 2 = 60°.

2. Angles inscrits interceptant le même arc :
Propriété :
Si deux angles inscrits dans un cercle interceptent le même arc de cercle, alors ils ont la même mesure.
Exemple : Si AMB et ANB sont deux angles inscrits interceptant tous deux l'arc AB, alors mes(AMB) = mes(ANB).

3. Cas particulier du triangle rectangle (angle droit inscrit) :
Si l'arc intercepté est un demi-cercle (l'angle au centre est un angle plat de 180°), alors l'angle inscrit mesure 180° / 2 = 90°.
Tout triangle inscrit dans un cercle ayant pour côté un diamètre est un triangle rectangle.`,
    definitions: [
      {
        term: 'Angle inscrit',
        definition: 'Angle dont le sommet appartient au cercle et dont les côtés coupent le cercle.'
      },
      {
        term: 'Angle au centre',
        definition: 'Angle dont le sommet est le centre même du cercle.'
      },
      {
        term: 'Arc intercepté',
        definition: 'Portion de cercle comprise entre les deux côtés de l\'angle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème de l\'angle au centre',
        statement: 'La mesure de l\'angle au centre est le double de celle de l\'angle inscrit associé : mes(AOB) = 2 × mes(AMB).'
      },
      {
        name: 'Égalité des angles inscrits',
        statement: 'Deux angles inscrits qui interceptent le même arc ont exactement la même mesure.'
      }
    ],
    formulas: [
      {
        name: 'Mesure de l\'angle inscrit',
        formula: 'mes(AMB) = (1/2) × mes(AOB)',
        explanation: 'Moitié de l\'angle au centre interceptant le même arc.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer un angle inscrit ou au centre',
        procedure: '1. Repérer le cercle, son centre O et l\'arc intercepté.\n2. Vérifier que l\'angle inscrit et l\'angle au centre interceptent rigoureusement le même arc.\n3. Appliquer la formule : angle inscrit = (angle au centre) / 2 ou angle au centre = 2 × (angle inscrit).\n4. Si deux angles inscrits interceptent le même arc, affirmer directement leur égalité.',
        tip: 'Toujours nommer explicitement l\'arc intercepté pour justifier la relation.'
      }
    ],
    examples: [
      {
        statement: 'Sur un cercle de centre O et de diamètre [SR], l\'angle UOS mesure 62°. Calcule mes UOR puis l\'angle inscrit UCR.',
        solution: 'R, O, S sont alignés donc ROS est un angle plat (180°).\nmes(UOR) = 180° - 62° = 118°.\nL\'angle inscrit UCR intercepte le même arc UR que l\'angle au centre UOR.\nDonc mes(UCR) = (1/2) × mes(UOR) = 118° / 2 = 59°.'
      }
    ],
    exercises: [
      {
        question: 'Deux angles inscrits BMC et BAC interceptent le même arc BC. Si mes BAC = 30°, que vaut mes BMC ?',
        correction: 'Les deux angles inscrits BMC et BAC interceptent le même arc BC dans le même cercle. D\'après la propriété du cours, ils ont la même mesure : mes(BMC) = mes(BAC) = 30°.'
      }
    ],
    evaluationSituation: {
      context: 'Un artisan doit réaliser une nappe circulaire de diamètre 3 m. La commande exige que l\'angle AOB au centre soit strictement inférieur à 60°. Le schéma montre un angle inscrit ADC mesurant 66° et un angle BOC mesurant 78°. L\'angle ADC et l\'angle AOC interceptent le même arc AC.',
      instructions: [
        '1. Calcule la mesure de l\'angle au centre AOC.',
        '2. Déduis-en la mesure de l\'angle AOB.',
        '3. Dis si l\'artisan peut satisfaire la commande du client.'
      ],
      solutionGuide: '1. L\'angle inscrit ADC est associé à l\'angle au centre AOC. Donc mes(AOC) = 2 × mes(ADC) = 2 × 66° = 132°.\n2. D\'après la figure, mes(AOB) = mes(AOC) - mes(BOC) = 132° - 78° = 54°.\n3. L\'angle AOB mesure 54°, ce qui est strictement inférieur à 60° (54° < 60°). L\'artisan peut donc parfaitement satisfaire le client.'
    },
    examTraps: [
      'Associer un angle inscrit et un angle au centre qui n\'interceptent pas le même arc.',
      'Diviser par 2 l\'angle inscrit au lieu de multiplier par 2 pour trouver l\'angle au centre.'
    ],
    quickMemo: 'Angle inscrit = (Angle au centre) / 2 ; Même arc intercepté ⟹ angles inscrits égaux ; Diamètre ⟹ angle droit de 90°.',
    keywords: ['angles inscrits 3e', 'angle au centre', 'arc intercepte', 'cercle', 'geometrie 3e', 'bepc']
  },

  // =========================================================================
  // LEÇON 7 : VECTEURS (10 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon7-vecteurs',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie du plan : Vecteurs',
    lessonTitle: 'Vecteurs : Caractérisation, égalité, somme (Chasles), produit par un réel, colinéarité et langage géométrique',
    objectifs: [
      'Caractériser un vecteur AB par sa direction (droite (AB)), son sens (de A vers B) et sa longueur (norme AB)',
      'Définir des vecteurs égaux (même direction, même sens, même longueur) et vecteurs opposés (AB = -BA)',
      'Appliquer l\'égalité de Chasles pour la somme de vecteurs : AB + BC = AC et réduire des sommes vectorielles',
      'Définir la différence de vecteurs : AB - CD = AB + DC',
      'Définir et construire le produit d\'un vecteur par un nombre réel k (k > 0 même sens, k < 0 sens contraire)',
      'Définir des vecteurs colinéaires (u = kv) et faire le pont entre langage géométrique et langage vectoriel (milieu, alignement, parallélisme)'
    ],
    fullCourseContent: `I. Caractérisation d'un vecteur :
1. Les 3 caractéristiques d'un vecteur non nul AB :
- Sa direction : la droite (AB) et toutes les droites parallèles à (AB).
- Son sens : de l'origine A vers l'extrémité B.
- Sa longueur (ou norme) : la distance AB.
2. Vecteurs égaux et opposés :
- AB = CD équivaut à dire que AB et CD ont la même direction, le même sens et la même longueur (équivaut à ABDC est un parallélogramme).
- Le vecteur opposé de AB est BA, noté -AB. On a AB = -BA et AB + BA = 0 (vecteur nul).

II. Somme et Différence de vecteurs :
1. Relation de Chasles :
Pour tous points A, B et C du plan :
AB + BC = AC.
2. Règle du parallélogramme :
Si ABCD est un parallélogramme, alors AB + AD = AC.
3. Différence de deux vecteurs :
AB - CD = AB + DC.
4. Réduction d'une somme vectorielle :
Méthode : transformer les différences en sommes en inversant les lettres, regrouper les vecteurs consécutifs et appliquer Chasles en chaîne.
Exemple : BC + DE - BA + CD + EF = AB + BC + CD + DE + EF = AF.

III. Produit d'un vecteur par un nombre réel :
1. Définition :
Soit AB un vecteur non nul et k un réel non nul. Le vecteur u = k × AB est tel que :
- u et AB ont la même direction ;
- u et AB ont le même sens si k > 0, des sens contraires si k < 0 ;
- Longueur de u = |k| × AB.
Conventions : 0 × AB = 0 et k × 0 = 0.
2. Propriétés algébriques :
- k(h × AB) = (kh) × AB
- k × AB + h × AB = (k + h) × AB
- k(AB + CD) = k × AB + k × CD

IV. Vecteurs colinéaires et Langage géométrique :
1. Définition de la colinéarité :
Deux vecteurs non nuls sont dits colinéaires s'ils ont la même direction (c'est-à-dire qu'il existe un réel k non nul tel que u = kv). Le vecteur nul est colinéaire à tout vecteur.
2. Équivalences fondamentales (Traduction géométrique ⟷ vectorielle) :
- Milieu d'un segment :
  I est le milieu de [AB] ⟺ AB = 2AI  ⟺  IA + IB = 0.
- Points alignés :
  Les points A, B et M sont alignés ⟺ les vecteurs AM et AB sont colinéaires (il existe k tel que AM = kAB).
- Droites parallèles :
  Les droites (AB) et (CD) sont parallèles ⟺ les vecteurs AB et CD sont colinéaires (il existe k non nul tel que CD = kAB).`,
    definitions: [
      {
        term: 'Vecteur',
        definition: 'Objet géométrique défini par une direction, un sens de parcours et une longueur.'
      },
      {
        term: 'Relation de Chasles',
        definition: 'Propriété fondamentale de la somme vectorielle : AB + BC = AC pour tous points A, B, C.'
      },
      {
        term: 'Vecteurs colinéaires',
        definition: 'Vecteurs ayant la même direction, proportionnels par un coefficient réel k : u = k × v.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relation de Chasles',
        statement: 'AB + BC = AC. L\'extrémité du premier vecteur doit coïncider avec l\'origine du second.'
      },
      {
        name: 'Caractérisation vectorielle du milieu',
        statement: 'I milieu de [AB] ⟺ IA + IB = 0 ⟺ AB = 2AI.'
      },
      {
        name: 'Critère d\'alignement et de parallélisme',
        statement: 'Points alignés ou droites parallèles se démontrent par la colinéarité vectorielle u = kv.'
      }
    ],
    formulas: [
      {
        name: 'Relation de Chasles',
        formula: 'AB + BC = AC',
        explanation: 'Somme de deux vecteurs consécutifs.'
      },
      {
        name: 'Différence de vecteurs',
        formula: 'AB - CD = AB + DC',
        explanation: 'Transformer la soustraction en addition de l\'opposé.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Réduire une chaîne vectorielle avec Chasles',
        procedure: '1. Remplacer les signes moins par des signes plus en inversant les lettres (ex: -CD devient +DC).\n2. Réorganiser l\'ordre des termes pour juxtaposer les lettres communes (AB + BC).\n3. Appliquer Chasles : fusionner les vecteurs consécutifs.\n4. Conclure par le vecteur résultant unique.',
        tip: 'Toujours transformer les soustractions en additions avant toute manipulation !'
      }
    ],
    examples: [
      {
        statement: 'ABCD est un parallélogramme. Simplifie : S = AB - AD + BC.',
        solution: 'ABCD est un parallélogramme, donc AD = BC et -AD = DA.\nS = AB + DA + BC = DA + AB + BC = DB + BC = DC.\nAutre méthode : AB - AD = AB + DA = DA + AB = DB. Donc S = DB + BC = DC.'
      }
    ],
    exercises: [
      {
        question: 'Démontre que si 3BI = AC - AB, alors le point I appartient à la droite (BC).',
        correction: '3BI = AC - AB = AC + BA = BA + AC = BC (d\'après la relation de Chasles).\nOn a donc 3BI = BC, soit BI = (1/3)BC.\nLes vecteurs BI et BC ont la même origine B et sont colinéaires, donc les points B, I et C sont alignés. Le point I appartient bien à la droite (BC).'
      }
    ],
    evaluationSituation: {
      context: 'ABCD est un parallélogramme. On définit les points E et F par : ED = DA et BF = AB. Un élève affirme que le point C est le milieu du segment [EF].',
      instructions: [
        '1. Justifie que EC = DB.',
        '2. Justifie que CF = DB.',
        '3. Déduis-en si l\'affirmation de l\'élève est vraie.'
      ],
      solutionGuide: '1. On a ED = DA ⟺ EC + CD = DA ⟺ EC = DA - CD = DA + DC. Comme ABCD est un parallélogramme, DC = AB. Donc EC = DA + AB = DB.\n2. On a BF = AB ⟺ BC + CF = AB ⟺ CF = AB - BC = AB + CB. Comme CB = DA dans le parallélogramme, CF = AB + DA = DA + AB = DB.\n3. On a EC = DB et CF = DB, donc EC = CF. Les vecteurs EC et CF étant égaux, C est le milieu du segment [EF]. L\'élève a parfaitement raison.'
    },
    examTraps: [
      'Confondre direction (la droite support) et sens (vers où pointe la flèche : gauche, droite...).',
      'Écrire AB + AC = BC (FAUX : Chasles exige que l\'extrémité du premier soit l\'origine du second : AB + BC = AC).'
    ],
    quickMemo: 'Chasles : AB + BC = AC ; AB - CD = AB + DC ; k > 0 même sens, k < 0 sens contraire ; u = kv ⟺ colinéaires (parallèles / alignés).',
    keywords: ['vecteurs 3e', 'relation de chasles', 'vecteurs colineaires', 'milieu segment', 'points alignes', 'bepc maths']
  }
];
