import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_MATHS_PART2_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // LEÇON 8 : ÉQUATIONS ET INÉQUATIONS DANS ℝ (4 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon8-equations-inequations-r',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Calculs Algébriques : Équations et inéquations dans ℝ',
    lessonTitle: 'Équations et inéquations dans ℝ : Équations du 1er degré, produit nul, équations x² = a, inéquations et systèmes d\'inéquations',
    objectifs: [
      'Résoudre des équations du premier degré du type x + a = b, ax = b et ax + b = cx + d dans ℝ',
      'Résoudre des équations produit nul du type (ax + b)(cx + d) = 0',
      'Résoudre des équations du type x² = a (deux solutions √a et -√a si a > 0, 0 si a = 0, aucune solution si a < 0)',
      'Résoudre des inéquations du premier degré ax + b > 0 (ou ≥, <, ≤) et représenter graphiquement les solutions sur une droite graduée et sous forme d\'intervalle',
      'Résoudre des systèmes de deux inéquations à une inconnue en déterminant l\'intersection des ensembles solutions S = S1 ∩ S2',
      'Mettre en équation ou inéquation un problème concret, le résoudre et interpréter le résultat'
    ],
    fullCourseContent: `I. Équations du 1er degré dans ℝ :
1. Équations élémentaires :
- x + a = b ⟺ x = b - a.
- ax = b (avec a ≠ 0) ⟺ x = b / a.
- Cas particuliers :
  * 0x = 0 admet une infinité de solutions (tout réel est solution, S = ℝ).
  * 0x = b (avec b ≠ 0) n'admet aucune solution (impossible, S = ∅).
2. Équations du type ax + b = cx + d :
On regroupe les termes en x d'un côté et les termes constants de l'autre :
(a - c)x = d - b, puis x = (d - b) / (a - c) si a ≠ c.
3. Équations produit nul (ax + b)(cx + d) = 0 :
Règle : ab = 0 ⟺ a = 0 ou b = 0.
(ax + b)(cx + d) = 0 ⟺ ax + b = 0 ou cx + d = 0.
4. Équations du type x² = a :
- Si a > 0 : x² - a = 0 ⟺ (x - √a)(x + √a) = 0. Deux solutions : x = √a ou x = -√a.
- Si a = 0 : une solution unique x = 0.
- Si a < 0 : un carré étant toujours positif ou nul dans ℝ, l'équation n'a aucune solution dans ℝ (S = ∅).

II. Inéquations du 1er degré dans ℝ :
1. Définition et Règles :
- Inéquation du type ax + b > 0 ou ax + b ≥ 0 (ou <, ≤).
- Règle fondamentale : Lorsqu'on multiplie ou divise les deux membres d'une inéquation par un nombre réel strictement négatif, on INVERSE le sens de l'inégalité.
Exemple : -3x ≥ 6 ⟺ x ≤ 6 / (-3) ⟺ x ≤ -2. L'ensemble solution est ]← ; -2].
2. Représentation graphique :
Sur une droite graduée, on hachure l'ensemble des solutions avec un crochet ouvert ou fermé selon que l'inégalité est stricte ou large.

III. Systèmes d'inéquations dans ℝ :
Un système de deux inéquations à une inconnue se présente sous la forme :
{ ax + b ≥ 0
{ cx + d < 0
Méthode de résolution :
1. Résoudre séparément la première inéquation et trouver son ensemble solution S1.
2. Résoudre séparément la deuxième inéquation et trouver son ensemble solution S2.
3. Déterminer l'intersection des deux solutions : S = S1 ∩ S2.
Exemple : { 2x - 3 < 0 ⟹ x < 3/2 (S1 = ]← ; 3/2[)
          { 4x + 5 ≥ 0 ⟹ x ≥ -5/4 (S2 = [-5/4 ; →[)
          S = S1 ∩ S2 = [-5/4 ; 3/2[.

IV. Résolution de problèmes concrets :
Méthode en 4 étapes :
1. Choix et désignation de l'inconnue x.
2. Mise en équation ou inéquation des données de l'énoncé.
3. Résolution mathématique de l'équation ou inéquation.
4. Interprétation du résultat et réponse à la question posée.`,
    definitions: [
      {
        term: 'Équation produit nul',
        definition: 'Équation où l\'un des membres est un produit de facteurs du premier degré et l\'autre membre est zéro.'
      },
      {
        term: 'Système d\'inéquations à une inconnue',
        definition: 'Ensemble de plusieurs inéquations à une seule variable dont la solution est l\'intersection des solutions de chaque inéquation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Solutions de x² = a',
        statement: 'Si a > 0, deux solutions : √a et -√a. Si a = 0, solution 0. Si a < 0, aucune solution.'
      },
      {
        name: 'Règle du signe dans les inéquations',
        statement: 'Multiplier ou diviser les deux membres par un nombre négatif change le sens de l\'inégalité (ex: > devient <).'
      }
    ],
    formulas: [
      {
        name: 'Produit nul',
        formula: 'A × B = 0 ⟺ A = 0 ou B = 0',
        explanation: 'Décomposition en équations simples du premier degré.'
      },
      {
        name: 'Solution de ax = b',
        formula: 'x = b / a (pour a ≠ 0)',
        explanation: 'Division par le coefficient de l\'inconnue.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre un système de deux inéquations',
        procedure: '1. Isoler x dans la première inéquation pour obtenir S1 sous forme d\'intervalle.\n2. Isoler x dans la deuxième inéquation pour obtenir S2 sous forme d\'intervalle.\n3. Tracer une droite graduée pour visualiser la zone commune aux deux intervalles.\n4. Écrire la solution finale sous la forme S = S1 ∩ S2.',
        tip: 'Si les deux intervalles sont disjoints, la solution du système est l\'ensemble vide S = ∅.'
      }
    ],
    examples: [
      {
        statement: 'Résous dans ℝ l\'équation (3x + 4)(-x - 7) = 0.',
        solution: '(3x + 4)(-x - 7) = 0 ⟺ 3x + 4 = 0 ou -x - 7 = 0.\n3x = -4 ⟺ x = -4/3 ; -x = 7 ⟺ x = -7.\nLes solutions sont x = -4/3 et x = -7. S = {-7 ; -4/3}.'
      }
    ],
    exercises: [
      {
        question: 'Résous l\'inéquation 3 - 4x > 2x - 1 et donne la solution sous forme d\'intervalle.',
        correction: '3 - 4x > 2x - 1 ⟺ -4x - 2x > -1 - 3 ⟺ -6x > -4.\nEn divisant par -6 (nombre négatif, on inverse le sens) : x < (-4)/(-6) = 2/3.\nL\'ensemble des solutions est S = ]← ; 2/3[.'
      }
    ],
    evaluationSituation: {
      context: 'Un club vidéo propose deux formules : Formule A : abonnement de 1500 F + 200 F par cassette louée. Formule B : sans abonnement, 320 F par cassette louée. À partir de quel nombre de cassettes louées la formule A est-elle plus avantageuse ?',
      instructions: [
        '1. Pose l\'inconnue x représentant le nombre de cassettes louées.',
        '2. Traduis la condition d\'avantage de la formule A par une inéquation.',
        '3. Résous cette inéquation et conclus par une phrase claire.'
      ],
      solutionGuide: '1. Soit x le nombre de cassettes louées (x entier naturel).\n2. Coût Formule A = 1500 + 200x. Coût Formule B = 320x.\nLa formule A est plus avantageuse si son coût est strictement inférieur : 1500 + 200x < 320x.\n3. 200x - 320x < -1500 ⟺ -120x < -1500 ⟺ x > 1500 / 120 = 12,5.\nConclusion : Le nombre de cassettes étant un entier, c\'est à partir de 13 cassettes louées que la première formule devient plus avantageuse.'
    },
    examTraps: [
      'Oublier d\'inverser le sens de l\'inégalité lors de la division par un nombre négatif.',
      'Croire que x² = 9 n\'a pour solution que 3 (la solution -3 est obligatoire : S = {-3 ; 3}).',
      'Confondre "et" (intersection ∩) et "ou" (réunion ∪) dans les solutions.'
    ],
    quickMemo: 'ax+b=0 ⟹ x=-b/a ; x²=a (a>0) ⟹ x=±√a ; Division par négatif ⟹ inverser le signe d\'inégalité ; Système ⟹ S = S1 ∩ S2.',
    keywords: ['equations 3e', 'inequations 3e', 'produit nul', 'systeme inequations', 'droite graduee', 'bepc maths']
  },

  // =========================================================================
  // LEÇON 9 : COORDONNÉES D'UN VECTEUR (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon9-coordonnees-vecteur',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie du plan : Coordonnées d\'un vecteur',
    lessonTitle: 'Coordonnées d\'un vecteur : Repères du plan, calculs de coordonnées, milieu, distance orthonormée, colinéarité et orthogonalité',
    objectifs: [
      'Distinguer les repères du plan : quelconque, orthogonal ((OI) ⊥ (OJ) et OI ≠ OJ) et orthonormé ((OI) ⊥ (OJ) et OI = OJ)',
      'Déterminer les coordonnées d\'un point A(x ; y) et la condition d\'égalité de couples (x ; y) = (x\' ; y\')',
      'Définir le couple de coordonnées d\'un vecteur AB : AB = xOI + yOJ, noté AB(x ; y)',
      'Calculer les coordonnées du vecteur AB connaissant A(xA ; yA) et B(xB ; yB) : AB(xB - xA ; yB - yA)',
      'Calculer les coordonnées du milieu K d\'un segment [AB] : K((xA + xB)/2 ; (yA + yB)/2)',
      'Calculer la distance de deux points dans un repère orthonormé : AB = √[(xB - xA)² + (yB - yA)²]',
      'Appliquer la condition de colinéarité : u(x ; y) et v(x\' ; y\') colinéaires ⟺ xy\' - x\'y = 0',
      'Appliquer la condition d\'orthogonalité dans un repère orthonormé : u(x ; y) et v(x\' ; y\') orthogonaux ⟺ xx\' + yy\' = 0'
    ],
    fullCourseContent: `I. Repères du Plan et Coordonnées d'un Point :
1. Définition d'un repère (O, I, J) :
Un repère du plan est défini par trois points non alignés (O, I, J).
- Repère quelconque : (OI) et (OJ) sécantes.
- Repère orthogonal : (OI) ⊥ (OJ) avec longueurs OI ≠ OJ.
- Repère orthonormé : (OI) ⊥ (OJ) avec longueurs OI = OJ = 1 unité.
L'axe (OI) est l'axe des abscisses, l'axe (OJ) est l'axe des ordonnées.
2. Égalité de couples :
(x ; y) = (x' ; y') équivaut à x = x' et y = y'.

II. Coordonnées d'un Vecteur :
1. Définition :
Le couple de coordonnées du vecteur AB dans le repère (O, I, J) est le couple de réels (x ; y) tel que :
AB = x × OI + y × OJ. On note AB(x ; y) ou en colonne AB(x / y).
Vecteur nul : 0(0 ; 0).
2. Calcul des coordonnées à partir de deux points :
Si A(xA ; yA) et B(xB ; yB), alors :
AB a pour coordonnées (xB - xA ; yB - yA).
Attention à l'ordre : c'est toujours "Extrémité B - Origine A" !

III. Opérations sur les Coordonnées de Vecteurs :
1. Somme : Si u(x ; y) et v(x' ; y'), alors (u + v) a pour coordonnées (x + x' ; y + y').
2. Produit par un scalaire : Pour k réel, k × u a pour coordonnées (kx ; ky).
3. Coordonnées du milieu K d'un segment [AB] :
K a pour coordonnées :
xK = (xA + xB) / 2   et   yK = (yA + yB) / 2.

IV. Distance de Deux Points dans un Repère Orthonormé :
Dans un repère ORTHONORMÉ exclusivement :
AB = √[(xB - xA)² + (yB - yA)²].
Exemple : A(2 ; -2) et B(5 ; -1) ⟹ AB = √[(5 - 2)² + (-1 - (-2))²] = √[3² + 1²] = √10.

V. Critères Fondamentaux de Colinéarité et d'Orthogonalité :
1. Condition de Colinéarité (dans tout repère) :
Deux vecteurs u(x ; y) et v(x' ; y') sont colinéaires si et seulement si :
x × y' - x' × y = 0.
Conséquence : Droites (AB) et (CD) parallèles ⟺ vecteurs AB et CD colinéaires ⟺ xAB × yCD - xCD × yAB = 0.
2. Condition d'Orthogonalité (dans un repère orthonormé) :
Deux vecteurs non nuls u(x ; y) et v(x' ; y') sont orthogonaux (noté u ⊥ v) si et seulement si :
x × x' + y × y' = 0.
Conséquence : Droites (AB) et (CD) perpendiculaires ⟺ vecteurs AB et CD orthogonaux ⟺ xAB × xCD + yAB × yCD = 0.`,
    definitions: [
      {
        term: 'Repère orthonormé',
        definition: 'Repère (O, I, J) formé de deux axes perpendiculaires ayant la même unité de longueur (OI ⊥ OJ et OI = OJ = 1).'
      },
      {
        term: 'Condition de colinéarité',
        definition: 'Relation xy\' - x\'y = 0 vérifiée par deux vecteurs ayant la même direction.'
      },
      {
        term: 'Condition d\'orthogonalité',
        definition: 'Relation xx\' + yy\' = 0 caractérisant deux vecteurs directeurs de droites perpendiculaires dans un repère orthonormé.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Formule des coordonnées de vecteur',
        statement: 'AB(xB - xA ; yB - yA). Toujours soustraire les coordonnées de l\'origine de celles de l\'extrémité.'
      },
      {
        name: 'Critère de colinéarité analytique',
        statement: 'u(x ; y) et v(x\' ; y\') sont colinéaires ⟺ xy\' - x\'y = 0.'
      },
      {
        name: 'Critère d\'orthogonalité analytique',
        statement: 'u(x ; y) et v(x\' ; y\') sont orthogonaux ⟺ xx\' + yy\' = 0 (dans repère orthonormé).'
      }
    ],
    formulas: [
      {
        name: 'Vecteur AB',
        formula: 'AB(xB - xA ; yB - yA)',
        explanation: 'Coordonnées de l\'extrémité moins coordonnées de l\'origine.'
      },
      {
        name: 'Milieu de [AB]',
        formula: 'xK = (xA + xB) / 2  et  yK = (yA + yB) / 2',
        explanation: 'Moyenne arithmétique des coordonnées des extrémités.'
      },
      {
        name: 'Distance euclidienne',
        formula: 'AB = √[(xB - xA)² + (yB - yA)²]',
        explanation: 'Distance entre deux points dans un repère orthonormé.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Démontrer que deux droites sont parallèles ou perpendiculaires',
        procedure: '1. Calculer les coordonnées des vecteurs directeurs AB et CD à l\'aide de (xB - xA ; yB - yA).\n2. Pour le parallélisme : calculer le déterminant D = xy\' - x\'y. Si D = 0, conclure (AB) // (CD).\n3. Pour la perpendicularité (repère orthonormé) : calculer le produit scalaire P = xx\' + yy\'. Si P = 0, conclure (AB) ⊥ (CD).',
        tip: 'Vérifier attentivement les signes des coordonnées négatives dans les calculs (- par - donne +).'
      }
    ],
    examples: [
      {
        statement: 'Dans un repère orthonormé, on donne AB(-2 ; 4) et CD(2 ; 1). Montre que AB et CD sont orthogonaux.',
        solution: 'Calculons xx\' + yy\' :\nxx\' + yy\' = (-2) × 2 + 4 × 1 = -4 + 4 = 0.\nLe repère étant orthonormé et xx\' + yy\' = 0, les vecteurs AB et CD sont orthogonaux. Les droites (AB) et (CD) sont donc perpendiculaires.'
      }
    ],
    exercises: [
      {
        question: 'On donne A(1 ; -1), B(-2 ; 0), C(-3 ; -3) et D(4 ; -2). Les droites (AC) et (ED) avec E(4 ; -2) ... vérifions si AB(2 ; 1) et CD(6 ; 3) sont colinéaires.',
        correction: 'Calculons xy\' - x\'y :\n2 × 3 - 6 × 1 = 6 - 6 = 0.\nComme xy\' - x\'y = 0, les vecteurs AB et CD sont colinéaires.'
      }
    ],
    evaluationSituation: {
      context: 'À l\'occasion du BEPC, on donne dans un repère A(1 ; -1), B(-2 ; 0), C(-3 ; -3) et E(4 ; -2). D est le symétrique de B par rapport à A. On cherche à savoir si les droites (AC) et (ED) sont parallèles.',
      instructions: [
        '1. Justifie que le point D a pour coordonnées (4 ; -2).',
        '2. Détermine les coordonnées des vecteurs AC et ED.',
        '3. Conclus sur le parallélisme des droites (AC) et (ED).'
      ],
      solutionGuide: '1. D est le symétrique de B par rapport à A ⟺ A est le milieu de [BD].\nOn a xA = (xB + xD) / 2 ⟹ 1 = (-2 + xD) / 2 ⟹ xD - 2 = 2 ⟹ xD = 4.\nyA = (yB + yD) / 2 ⟹ -1 = (0 + yD) / 2 ⟹ yD = -2.\nDonc D a pour coordonnées (4 ; -2).\n2. AC(xC - xA ; yC - yA) = (-3 - 1 ; -3 - (-1)) = (-4 ; -2).\nSi E a pour coordonnées (4 ; -2) et D(4 ; -2) alors ED = 0. Dans l\'énoncé corrigé : E(-4 ; 2) ⟹ ED(4 - (-4) ; -2 - 2) = (8 ; 4).\n3. Test de colinéarité : (-4) × 4 - (-2) × 8 = -16 + 16 = 0. Les vecteurs directeurs sont colinéaires, donc les droites (AC) et (ED) sont parallèles.'
    },
    examTraps: [
      'Calculer xA - xB au lieu de xB - xA (attention à l\'ordre : arrivée moins départ).',
      'Confondre la condition de colinéarité (xy\' - x\'y = 0 avec soustraction) et d\'orthogonalité (xx\' + yy\' = 0 avec addition).',
      'Utiliser la formule de distance AB = √[(xB-xA)² + (yB-yA)²] dans un repère qui n\'est pas orthonormé.'
    ],
    quickMemo: 'AB(xB - xA ; yB - yA) ; Milieu : ((xA+xB)/2 ; (yA+yB)/2) ; Distance : √[(Δx)² + (Δy)²] ; Colinéaires : xy\' - x\'y = 0 ; Orthogonaux : xx\' + yy\' = 0.',
    keywords: ['coordonnees vecteur 3e', 'repere orthonorme', 'distance entre deux points', 'milieu segment', 'colinearite orthogonalite', 'bepc']
  },

  // =========================================================================
  // LEÇON 10 : ÉQUATIONS DE DROITES (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon10-equations-droites',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie du plan : Équations de droites',
    lessonTitle: 'Équations de droites : Équation générale, équation réduite, coefficient directeur, droites parallèles et perpendiculaires',
    objectifs: [
      'Reconnaître l\'équation générale d\'une droite : ax + by + c = 0 où (a ; b) ≠ (0 ; 0)',
      'Déterminer l\'équation réduite d\'une droite non verticale : y = ax + b, où a est le coefficient directeur et b l\'ordonnée à l\'origine',
      'Calculer le coefficient directeur d\'une droite passant par deux points A(xA ; yA) et B(xB ; yB) : a = (yB - yA) / (xB - xA)',
      'Déterminer l\'équation d\'une droite passant par un point et parallèle à une droite donnée, ou passant par un point et perpendiculaire à une droite donnée',
      'Construire une droite dont on connaît une équation ou un point et son coefficient directeur',
      'Énoncer et appliquer les conditions de parallélisme (a = a\') et de perpendicularité (a × a\' = -1 dans un repère orthonormé)'
    ],
    fullCourseContent: `I. Équation d'une Droite :
1. Propriété générale :
Dans le plan muni d'un repère (O, I, J) :
- Toute droite (D) a une équation cartésienne de la forme ax + by + c = 0, où a, b et c sont des réels avec (a ; b) ≠ (0 ; 0).
- Réciproquement, toute équation ax + by + c = 0 avec (a ; b) ≠ (0 ; 0) est l'équation d'une droite.
2. Équation d'une droite passant par deux points A et B :
Un point M(x ; y) appartient à la droite (AB) si et seulement si les vecteurs AM et AB sont colinéaires :
AM(x - xA ; y - yA) et AB(xB - xA ; yB - yA) colinéaires ⟺ (x - xA)(yB - yA) - (xB - xA)(y - yA) = 0.

II. Le Coefficient Directeur d'une Droite :
1. Droite passant par deux points A et B (avec xA ≠ xB) :
Le coefficient directeur a est la pente de la droite, donné par :
a = (yB - yA) / (xB - xA).
2. Équation réduite :
Toute droite non parallèle à l'axe des ordonnées peut s'écrire sous la forme réduite :
y = ax + b.
- a est le coefficient directeur de la droite ;
- b est l'ordonnée à l'origine (point d'intersection avec l'axe des ordonnées : (0 ; b)).
Exemple : 6x + 2y - 5 = 0 ⟺ 2y = -6x + 5 ⟺ y = -3x + 5/2.
Le coefficient directeur est -3, l'ordonnée à l'origine est 5/2.

III. Positions Relatives de Deux Droites :
1. Droites parallèles :
Deux droites (D) et (D') de coefficients directeurs a et a' sont parallèles si et seulement si leurs coefficients directeurs sont égaux :
(D) // (D') ⟺ a = a'.
2. Droites perpendiculaires :
Dans un repère orthonormé, deux droites (D) et (D') de coefficients directeurs a et a' sont perpendiculaires si et seulement si le produit de leurs coefficients directeurs est égal à -1 :
(D) ⊥ (D') ⟺ a × a' = -1.
Exemple : (D) : y = 3x - 3 (a = 3) et (D') : y = (-1/3)x - 4 (a' = -1/3).
Comme 3 × (-1/3) = -1, (D) et (D') sont perpendiculaires.

IV. Droites Particulières :
- Droite parallèle à l'axe des abscisses (horizontale) : y = k (coefficient directeur a = 0).
- Droite parallèle à l'axe des ordonnées (verticale) : x = k (pas de coefficient directeur sous forme y = ax + b).`,
    definitions: [
      {
        term: 'Coefficient directeur',
        definition: 'Pente de la droite mesurant sa variation d\'ordonnée par unité d\'abscisse : a = (yB - yA) / (xB - xA).'
      },
      {
        term: 'Ordonnée à l\'origine',
        definition: 'Valeur de y au point où la droite coupe l\'axe vertical des ordonnées (x = 0), notée b dans y = ax + b.'
      },
      {
        term: 'Équation réduite',
        definition: 'Écriture explicite d\'une droite non verticale sous la forme y = ax + b.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition de parallélisme',
        statement: 'Deux droites non verticales sont parallèles si et seulement si elles ont le même coefficient directeur : a = a\'.'
      },
      {
        name: 'Condition de perpendicularité',
        statement: 'Dans un repère orthonormé, deux droites non verticales sont perpendiculaires si et seulement si le produit de leurs pentes vaut -1 : a × a\' = -1.'
      }
    ],
    formulas: [
      {
        name: 'Coefficient directeur',
        formula: 'a = (yB - yA) / (xB - xA)',
        explanation: 'Pente d\'une droite passant par A et B (avec xA ≠ xB).'
      },
      {
        name: 'Condition d\'orthogonalité des pentes',
        formula: 'a × a\' = -1',
        explanation: 'Perpendicularité de deux droites de pentes a et a\' en repère orthonormé.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Trouver l\'équation réduite d\'une droite passant par deux points',
        procedure: '1. Calculer le coefficient directeur a = (yB - yA) / (xB - xA).\n2. Écrire l\'équation partielle : y = ax + b.\n3. Remplacer x et y par les coordonnées du point A (ou B) pour calculer b : b = yA - a × xA.\n4. Écrire l\'équation réduite finale : y = ax + b.',
        tip: 'Toujours vérifier en injectant les coordonnées du deuxième point !'
      }
    ],
    examples: [
      {
        statement: 'Trouve le coefficient directeur et l\'ordonnée à l\'origine de la droite d\'équation 3x + 2y + 8 = 0.',
        solution: 'Isolons y : 2y = -3x - 8 ⟺ y = (-3/2)x - 4.\nLe coefficient directeur est a = -3/2 et l\'ordonnée à l\'origine est b = -4.'
      }
    ],
    exercises: [
      {
        question: 'Les droites (D1) : y = 2x + 3 et (D2) : -2x + y = 1 sont-elles parallèles ?',
        correction: 'Pour (D1), le coefficient directeur est a1 = 2.\nPour (D2), -2x + y = 1 ⟺ y = 2x + 1, donc le coefficient directeur est a2 = 2.\nComme a1 = a2 = 2, les droites (D1) et (D2) ont le même coefficient directeur, elles sont donc strictement parallèles.'
      }
    ],
    evaluationSituation: {
      context: 'Dans un repère orthonormé (A, I, J) d\'unité 1 hm, une parcelle carrée de cacao de 9 ha (côté 3 hm) est partagée entre deux veuves par les droites (KD) et (IC). K(0 ; 2), D(3 ; 0), I(1 ; 0), C(3 ; 3). Elles se croisent en H(21/13 ; 12/13).',
      instructions: [
        '1. Détermine les équations réduites des droites (KD) et (IC).',
        '2. Vérifie si les droites (KD) et (IC) sont perpendiculaires.',
        '3. Calcule l\'aire de la parcelle CDI et dis si le partage est équitable.'
      ],
      solutionGuide: '1. Droite (KD) : a = (0 - 2) / (3 - 0) = -2/3 et ordonnée à l\'origine b = 2 ⟹ y = (-2/3)x + 2.\nDroite (IC) : a\' = (3 - 0) / (3 - 1) = 3/2 et b\' = 0 - (3/2)(1) = -3/2 ⟹ y = (3/2)x - 3/2.\n2. On a a × a\' = (-2/3) × (3/2) = -1. Le repère étant orthonormé, les droites (KD) et (IC) sont perpendiculaires en H.\n3. Aire du triangle CDI = (CD × DI) / 2 = (3 × 2) / 2 = 3 ha.\nComme l\'aire totale est 9 ha, l\'autre partie mesure 9 - 3 = 6 ha (ou 3,78 ha selon le découpage intérieur BCHK). Les deux superficies étant différentes, le partage n\'est pas équitable.'
    },
    examTraps: [
      'Inverser x et y dans le calcul du coefficient directeur : écrire (xB - xA)/(yB - yA) au lieu de (yB - yA)/(xB - xA).',
      'Appliquer la règle a × a\' = -1 dans un repère qui n\'est PAS orthonormé.',
      'Oublier qu\'une droite verticale x = c n\'a pas de coefficient directeur défini.'
    ],
    quickMemo: 'ax+by+c=0 (générale) ; y=ax+b (réduite) ; a=(yB-yA)/(xB-xA) ; Parallèles ⟺ a=a\' ; Perpendiculaires ⟺ a×a\'=-1 (orthonormé).',
    keywords: ['equations de droites 3e', 'coefficient directeur', 'ordonnee a l origine', 'droites paralleles', 'droites perpendiculaires', 'bepc maths']
  },

  // =========================================================================
  // LEÇON 11 : STATISTIQUE (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon11-statistique',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Organisation des données : Statistique',
    lessonTitle: 'Statistique : Mode, effectifs et fréquences cumulés croissants, moyenne pondérée, médiane, regroupement en classes et diagrammes circulaires',
    objectifs: [
      'Identifier le mode ou les modes d\'une série statistique (modalité ayant le plus grand effectif)',
      'Calculer les effectifs cumulés croissants (ECC) et les fréquences cumulées croissantes (FCC)',
      'Calculer la moyenne simple et la moyenne pondérée d\'une série statistique quantitative',
      'Déterminer la médiane d\'une série ordonnée de valeurs discrètes (cas de l\'effectif total pair ou impair)',
      'Regrouper des données en classes d\'égale amplitude [a ; b[ (déterminer l\'amplitude b-a, le centre (a+b)/2 et la classe modale)',
      'Calculer la moyenne d\'une série regroupée en classes en utilisant les centres de classe',
      'Construire et interpréter un diagramme circulaire (secteurs angulaires proportionnels : α = (n/N) × 360°)',
      'Construire le polygone des effectifs cumulés croissants et déterminer graphiquement la médiane'
    ],
    fullCourseContent: `I. Organisation des Données et Paramètres Statistiques :
1. Le Mode :
Le mode d'une série statistique est la modalité dont l'effectif est maximal. Une série peut avoir plusieurs modes.
2. Fréquence :
Fréquence d'une modalité = Effectif de la modalité / Effectif total N.
En pourcentage : Fréq (%) = (Effectif / N) × 100.
3. Moyenne pondérée :
La moyenne M est égale à la somme des produits de chaque modalité xi par son effectif ni, divisée par l'effectif total N :
M = ∑(ni × xi) / N.
4. Effectifs cumulés croissants (ECC) et Fréquences cumulées croissantes (FCC) :
- L'ECC d'une modalité est la somme des effectifs de toutes les modalités inférieures ou égales à celle-ci.
- La FCC est le quotient de l'ECC par l'effectif total (ou la somme des fréquences correspondantes).

II. Médiane d'une Série Statistique :
Définition : La médiane est la valeur qui partage la série ordonnée en deux sous-groupes de même effectif (50% au moins des valeurs sont inférieures ou égales à la médiane, et 50% au moins sont supérieures ou égales).
Méthode de calcul :
- Ranger préalablement les valeurs par ordre croissant.
- Si N est impair : N = 2p + 1 ⟹ La médiane est la valeur de rang (N + 1) / 2.
  Exemple : N = 11 ⟹ rang (11+1)/2 = 6e valeur.
- Si N est pair : N = 2p ⟹ La médiane est la moyenne entre la (N/2)-ième valeur et la (N/2 + 1)-ième valeur.
  Exemple : N = 8 ⟹ moyenne entre la 4e et la 5e valeur.

III. Séries Regroupées en Classes d'Égale Amplitude :
1. Classes d'intervalles [a ; b[ :
- Amplitude de la classe : b - a.
- Centre de la classe : (a + b) / 2.
2. Classe modale :
C'est la classe qui possède le plus grand effectif.
3. Moyenne d'une série continue en classes :
On remplace chaque classe par son centre ci :
M = ∑(ni × ci) / N.

IV. Représentations Graphiques :
1. Diagramme circulaire :
Chaque classe ou modalité est représentée par un secteur angulaire d'angle α proportionnel à son effectif :
α (en degrés) = (Effectif ni / Effectif total N) × 360°.
La somme totale des angles est égale à 360°.
2. Polygone des Effectifs Cumulés Croissants (PECC) :
Dans un repère orthogonal :
- On place les points ayant pour abscisse la borne supérieure de chaque classe et pour ordonnée l'ECC correspondant (en commençant par la borne inférieure de la première classe avec une ordonnée 0).
- On relie ces points par des segments de droite.
- Détermination graphique de la médiane : On repère l'ordonnée N/2 sur l'axe vertical, on trace l'horizontale jusqu'au polygone, puis on lit l'abscisse correspondante.`,
    definitions: [
      {
        term: 'Mode / Classe modale',
        definition: 'Valeur ou classe qui a le plus grand effectif dans la série statistique.'
      },
      {
        term: 'Médiane',
        definition: 'Valeur du caractère qui partage l\'effectif total ordonné en deux parties égales de 50%.'
      },
      {
        term: 'Centre de classe',
        definition: 'Milieu de l\'intervalle [a ; b[, calculé par (a + b) / 2.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Calcul de l\'angle du secteur circulaire',
        statement: 'La mesure de l\'angle en degrés est proportionnelle à l\'effectif : α = (effectif / total) × 360°.'
      },
      {
        name: 'Position de la médiane',
        statement: 'Sur la liste ordonnée : si N impair, rang = (N+1)/2 ; si N pair, moyenne des rangs N/2 et N/2 + 1.'
      }
    ],
    formulas: [
      {
        name: 'Moyenne pondérée',
        formula: 'M = (∑ ni × xi) / N',
        explanation: 'Somme des produits des valeurs par leurs effectifs divisée par l\'effectif total.'
      },
      {
        name: 'Angle de secteur circulaire',
        formula: 'α = (ni / N) × 360°',
        explanation: 'Mesure de l\'angle en degrés du diagramme circulaire.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la moyenne d\'une série en classes',
        procedure: '1. Calculer le centre de chaque classe : ci = (borne inf + borne sup) / 2.\n2. Multiplier chaque centre par l\'effectif correspondant : ni × ci.\n3. Faire la somme de tous ces produits : S = ∑(ni × ci).\n4. Diviser cette somme par l\'effectif total N : M = S / N.',
        tip: 'Vérifier que la moyenne obtenue se situe bien entre la plus petite et la plus grande valeur.'
      }
    ],
    examples: [
      {
        statement: 'Détermine la médiane de la série de 8 notes : 28 ; 33 ; 34 ; 35 ; 37 ; 37 ; 39 ; 40.',
        solution: 'La série est déjà ordonnée. L\'effectif total N = 8 est pair.\nN / 2 = 4 (la 4e valeur est 35) et N / 2 + 1 = 5 (la 5e valeur est 37).\nLa médiane est la moyenne de ces deux valeurs : Médiane = (35 + 37) / 2 = 72 / 2 = 36.'
      }
    ],
    exercises: [
      {
        question: 'Pour une classe d\'effectif 20 sur un total de 60 élèves, calcule l\'angle du secteur circulaire correspondant.',
        correction: 'Angle α = (20 / 60) × 360° = (1 / 3) × 360° = 120°.'
      }
    ],
    evaluationSituation: {
      context: 'Une enquête de satisfaction porte sur 50 internautes notant un site sur 20 : Note 6 (1), Note 8 (5), Note 10 (7), Note 12 (8), Note 14 (12), Note 15 (9), Note 17 (8). L\'enquête est jugée satisfaisante si au moins 55% des internautes ont donné une note supérieure ou égale à la note médiane.',
      instructions: [
        '1. Dresse le tableau des effectifs cumulés croissants.',
        '2. Justifie que la note médiane est 14.',
        '3. Dis si l\'enquête est jugée satisfaisante.'
      ],
      solutionGuide: '1. ECC : Note 6 ⟹ 1 ; Note 8 ⟹ 6 ; Note 10 ⟹ 13 ; Note 12 ⟹ 21 ; Note 14 ⟹ 33 ; Note 15 ⟹ 42 ; Note 17 ⟹ 50.\n2. N / 2 = 50 / 2 = 25. La 25e valeur se situe dans la modalité 14 (car 21 < 25 ≤ 33). Donc la note médiane est 14.\n3. Nombre d\'internautes ayant donné une note ≥ 14 : effectif des notes 14, 15 et 17 = 12 + 9 + 8 = 29 personnes.\nPourcentage = (29 / 50) × 100 = 58%.\nComme 58% ≥ 55%, l\'enquête est jugée satisfaisante.'
    },
    examTraps: [
      'Chercher la médiane sans avoir au préalable rangé les valeurs dans l\'ordre croissant.',
      'Confondre l\'effectif le plus grand (qui donne le mode) et la médiane (qui sépare en deux effectifs égaux de 50%).',
      'Calculer l\'angle d\'un diagramme circulaire sur 100° au lieu de 360°.'
    ],
    quickMemo: 'Mode = modalité de plus grand effectif ; Médiane = valeur du milieu (50%) ; Moyenne = ∑(ni×xi)/N ; Angle = (ni/N)×360°.',
    keywords: ['statistique 3e', 'moyenne ponderee', 'mediane', 'effectifs cumules croissants', 'diagramme circulaire', 'bepc']
  },

  // =========================================================================
  // LEÇON 12 : ÉQUATIONS ET INÉQUATIONS DANS ℝ×ℝ (8 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon12-equations-inequations-rxr',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Calculs Algébriques : Équations et inéquations dans ℝ×ℝ',
    lessonTitle: 'Équations et inéquations dans ℝ×ℝ : Systèmes linéaires à deux inconnues (substitution, combinaison, graphique) et demi-plans solutions',
    objectifs: [
      'Définir une équation du 1er degré dans ℝ×ℝ : ax + by = c et vérifier si un couple (x0 ; y0) est solution',
      'Résoudre un système de deux équations du 1er degré à deux inconnues par la méthode de substitution',
      'Résoudre un système par la méthode de combinaison linéaire (élimination d\'une inconnue)',
      'Résoudre graphiquement un système d\'équations (droites sécantes = solution unique, parallèles disjointes = aucune solution, confondues = infinité)',
      'Résoudre graphiquement une inéquation du 1er degré dans ℝ×ℝ en déterminant le demi-plan solution à l\'aide d\'un point test (ex: O(0 ; 0))',
      'Résoudre graphiquement un système d\'inéquations dans ℝ×ℝ par l\'intersection des demi-plans hachurés',
      'Modéliser et résoudre un problème de la vie courante conduisant à un système linéaire'
    ],
    fullCourseContent: `I. Équation du 1er degré dans ℝ×ℝ :
1. Définition :
Une équation de la forme ax + by = c (avec (a ; b) ≠ (0 ; 0)) est une équation du premier degré dans ℝ×ℝ à deux inconnues x et y.
Un couple (x0 ; y0) est solution si a × x0 + b × y0 = c.
Exemple : Dans 3x + 5y = 2, le couple (4 ; -2) est solution car 3(4) + 5(-2) = 12 - 10 = 2.

II. Systèmes de Deux Équations du 1er degré dans ℝ×ℝ :
Forme générale :
{ ax + by = c
{ a'x + b'y = c'
1. Méthode par substitution :
- Isoler une inconnue dans l'une des équations (ex : x en fonction de y) ;
- Remplacer cette inconnue dans la deuxième équation pour obtenir une équation à une seule inconnue en y ;
- Résoudre cette équation pour trouver y ;
- Remplacer la valeur de y trouvée pour calculer x ;
- Conclure en donnant le couple solution S = {(x ; y)}.
2. Méthode par combinaison linéaire (élimination) :
- Multiplier l'une ou les deux équations par des nombres convenablement choisis pour que les coefficients d'une même inconnue deviennent opposés ;
- Additionner membre à membre les deux équations : l'inconnue s'élimine ;
- Résoudre l'équation obtenue à une inconnue ;
- Répéter pour l'autre inconnue (ou substituer) ;
- Conclure : S = {(x ; y)}.
3. Méthode graphique :
On trace les droites (D) et (D') correspondant aux deux équations.
- Si (D) et (D') sont sécantes en un point A(x0 ; y0) ⟹ solution unique S = {(x0 ; y0)}.
- Si (D) et (D') sont parallèles disjointes ⟹ aucune solution S = ∅.
- Si (D) et (D') sont confondues ⟹ infinité de solutions (tous les points de la droite).

III. Inéquations et Systèmes d'Inéquations dans ℝ×ℝ :
1. Demi-plan solution d'une inéquation ax + by + c > 0 (ou <, ≥, ≤) :
- La droite frontière (D) d'équation ax + by + c = 0 partage le plan en deux demi-plans.
- Méthode du point test : On choisit un point n'appartenant pas à (D), typiquement l'origine O(0 ; 0).
- On calcule a(0) + b(0) + c = c :
  * Si l'inégalité est vérifiée par (0 ; 0), le demi-plan contenant O est la solution.
  * Si l'inégalité n'est pas vérifiée, la solution est le demi-plan opposé ne contenant pas O.
2. Système d'inéquations dans ℝ×ℝ :
L'ensemble des solutions d'un système de plusieurs inéquations est l'intersection des demi-plans solutions de chaque inéquation (zone restant non hachurée ou hachurée par toutes les couleurs).`,
    definitions: [
      {
        term: 'Système d\'équations linéaires',
        definition: 'Ensemble de deux équations du 1er degré à deux inconnues à vérifier simultanément par un couple (x ; y).'
      },
      {
        term: 'Demi-plan frontière',
        definition: 'Chacune des deux régions du plan délimitées par une droite (D) d\'équation ax + by + c = 0.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Méthode du point test',
        statement: 'Pour déterminer le demi-plan solution, tester les coordonnées de l\'origine O(0 ; 0) si la droite ne passe pas par l\'origine.'
      },
      {
        name: 'Positions relatives et nombre de solutions',
        statement: 'Sécantes ⟹ 1 couple solution ; Parallèles strictes ⟹ 0 solution ; Confondues ⟹ infinité de solutions.'
      }
    ],
    formulas: [
      {
        name: 'Système linéaire 2×2',
        formula: '{ ax + by = c ; a\'x + b\'y = c\'',
        explanation: 'Système de deux équations à deux inconnues dans ℝ×ℝ.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre un système par combinaison linéaire',
        procedure: '1. Multiplier la ligne 1 par a\' et la ligne 2 par (-a) pour annuler x lors de l\'addition.\n2. Additionner membre à membre pour obtenir une équation ne contenant que y.\n3. Calculer y.\n4. Multiplier de façon analogue pour éliminer y et calculer x.\n5. Écrire le couple solution S = {(x ; y)}.',
        tip: 'Toujours vérifier les valeurs trouvées dans les DEUX équations initiales avant de conclure.'
      }
    ],
    examples: [
      {
        statement: 'Résous par combinaison : { 3x - y = 7 ; 4x + 7y = 1.',
        solution: 'Multiplions la 1ère équation par 7 : 21x - 7y = 49.\nAdditionnons avec la 2e : (21x - 7y) + (4x + 7y) = 49 + 1 ⟹ 25x = 50 ⟹ x = 2.\nRemplaçons x = 2 dans la 1ère : 3(2) - y = 7 ⟹ 6 - y = 7 ⟹ y = -1.\nLa solution est S = {(2 ; -1)}.'
      }
    ],
    exercises: [
      {
        question: 'Résous par substitution : { x + y = 35 ; 8x + 7y = 260.',
        correction: 'De la 1ère ligne : x = 35 - y.\nDans la 2e ligne : 8(35 - y) + 7y = 260 ⟹ 280 - 8y + 7y = 260 ⟹ -y = 260 - 280 = -20 ⟹ y = 20.\nOn en déduit x = 35 - 20 = 15.\nLa solution est le couple S = {(15 ; 20)}.'
      }
    ],
    evaluationSituation: {
      context: 'Un spectacle propose deux tarifs : 1 000 F pour les adultes et 500 F pour les enfants. La recette totale est de 120 000 F pour 205 tickets vendus.',
      instructions: [
        '1. Pose les inconnues x (adultes) et y (enfants).',
        '2. Traduis l\'énoncé par un système de deux équations à deux inconnues.',
        '3. Résous le système et donne le nombre d\'adultes et d\'enfants ayant assisté au spectacle.'
      ],
      solutionGuide: '1. Soit x le nombre d\'adultes et y le nombre d\'enfants.\n2. Nombre total de tickets : x + y = 205.\nRecette totale : 1000x + 500y = 120 000, soit en divisant par 500 : 2x + y = 240.\nOn obtient le système : { x + y = 205 ; 2x + y = 240.\n3. Par soustraction membre à membre (L2 - L1) : (2x + y) - (x + y) = 240 - 205 ⟹ x = 35.\nPuis y = 205 - 35 = 170.\nConclusion : Il y avait 35 adultes et 170 enfants au spectacle.'
    },
    examTraps: [
      'Donner les solutions séparées au lieu d\'un couple ordonné : écrire x = 2 et y = -1 au lieu de S = {(2 ; -1)}.',
      'Inverser l\'ordre x et y dans le couple solution (écrire (y ; x) au lieu de (x ; y)).',
      'Hachurer le mauvais demi-plan lors d\'une résolution graphique.'
    ],
    quickMemo: 'Substitution : isoler puis remplacer ; Combinaison : coefficients opposés puis addition ; Graphique : point d\'intersection des 2 droites.',
    keywords: ['systemes equations 3e', 'equations dans rxr', 'inequations dans rxr', 'demi plan solution', 'combinaison substitution', 'bepc maths']
  },

  // =========================================================================
  // LEÇON 13 : APPLICATIONS AFFINES (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon13-applications-affines',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Fonctions : Applications affines et linéaires',
    lessonTitle: 'Applications affines et linéaires : Définition, images, antécédents, détermination algébrique, représentation graphique, sens de variation et proportionnalité',
    objectifs: [
      'Définir une application affine f(x) = ax + b (a = coefficient, b = terme constant)',
      'Définir une application linéaire f(x) = ax (terme constant b = 0)',
      'Calculer l\'image d\'un nombre réel par une application affine ou linéaire f(t) = at + b',
      'Déterminer l\'antécédent x d\'un réel y en résolvant l\'équation ax + b = y',
      'Déterminer l\'expression algébrique d\'une application affine connaissant deux nombres et leurs images',
      'Représenter graphiquement une application affine (droite ne passant pas nécessairement par l\'origine) et linéaire (droite passant par l\'origine O(0 ; 0))',
      'Déterminer le sens de variation d\'une application affine selon le signe de a : a > 0 croissante, a < 0 décroissante, a = 0 constante',
      'Utiliser les propriétés de linéarité : f(m + n) = f(m) + f(n) et f(km) = k × f(m) pour calculer des images sans déterminer f(x)'
    ],
    fullCourseContent: `I. Applications Affines :
1. Définition :
Soient a et b deux nombres réels fixés.
On appelle application affine de coefficient a et de terme constant b, la fonction f qui à tout réel x associe le réel ax + b :
f : x ⟼ ax + b.
- f(x) est l'image de x par f.
- Si f(x) = y, x est l'antécédent de y par f.
2. Calcul d'images et d'antécédents :
- Image : Pour calculer l'image d'un nombre t, on calcule a × t + b.
- Antécédent : Pour trouver x tel que f(x) = y, on résout l'équation ax + b = y.
3. Détermination de l'expression de f à partir de deux nombres et de leurs images :
Si f(x1) = y1 et f(x2) = y2 :
On pose le système { ax1 + b = y1 ; ax2 + b = y2, puis on détermine a et b.
Formule directe de la pente : a = (f(x2) - f(x1)) / (x2 - x1).

II. Représentation Graphique et Sens de Variation :
1. Représentation graphique :
Dans un repère (O, I, J), la représentation graphique d'une application affine f(x) = ax + b est la droite (D) d'équation y = ax + b.
- Le coefficient a est le coefficient directeur (pente) de la droite.
- Le terme constant b est l'ordonnée à l'origine (f(0) = b).
2. Sens de variation :
- Si a > 0 : f est strictement croissante (droite montante de gauche à droite). Si m > n, alors f(m) > f(n).
- Si a < 0 : f est strictement décroissante (droite descendante de gauche à droite). Si m > n, alors f(m) < f(n).
- Si a = 0 : f est constante : f(x) = b pour tout x (droite horizontale parallèle à l'axe des abscisses).

III. Applications Linéaires :
1. Définition :
Une application linéaire est une application affine dont le terme constant est nul :
f(x) = ax.
Propriété graphique : La représentation graphique d'une application linéaire est une droite qui passe TOUJOURS par l'origine du repère O(0 ; 0).
2. Propriétés de linéarité :
Pour tous nombres réels m, n et k :
- f(m + n) = f(m) + f(n)
- f(k × m) = k × f(m)
3. Modélisation d'une situation de proportionnalité :
Toute situation de proportionnalité de coefficient a se traduit mathématiquement par l'application linéaire f(x) = ax.`,
    definitions: [
      {
        term: 'Application affine',
        definition: 'Fonction de la forme f(x) = ax + b où a est le coefficient et b le terme constant.'
      },
      {
        term: 'Application linéaire',
        definition: 'Application affine particulière où b = 0 : f(x) = ax, traduisant une situation de proportionnalité.'
      },
      {
        term: 'Propriété de linéarité',
        definition: 'Règles d\'additivité f(x+y) = f(x) + f(y) et d\'homogénéité f(kx) = kf(x) vérifiées par toute application linéaire.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Sens de variation d\'une fonction affine',
        statement: 'Le sens de variation dépend uniquement du signe du coefficient a : a > 0 ⟹ croissante ; a < 0 ⟹ décroissante ; a = 0 ⟹ constante.'
      },
      {
        name: 'Passage par l\'origine',
        statement: 'La représentation graphique d\'une fonction linéaire passe TOUJOURS par le point (0 ; 0).'
      }
    ],
    formulas: [
      {
        name: 'Application affine',
        formula: 'f(x) = ax + b',
        explanation: 'Image d\'un réel x avec coefficient a et constante b.'
      },
      {
        name: 'Calcul du coefficient a',
        formula: 'a = [f(x2) - f(x1)] / (x2 - x1)',
        explanation: 'Taux d\'accroissement ou pente de l\'application affine.'
      },
      {
        name: 'Linéarité',
        formula: 'f(m + n) = f(m) + f(n)  et  f(km) = k × f(m)',
        explanation: 'Propriétés de conservation des sommes et des produits scalaires pour les fonctions linéaires.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer l\'expression d\'une fonction affine f connaissant deux images',
        procedure: '1. Poser les deux équations : f(x1) = a × x1 + b et f(x2) = a × x2 + b.\n2. Soustraire pour éliminer b et trouver a = [f(x2) - f(x1)] / (x2 - x1).\n3. Remplacer a dans l\'une des équations pour trouver b.\n4. Écrire l\'expression finale f(x) = ax + b.',
        tip: 'Si l\'application est linéaire, b = 0 directement : il suffit d\'un seul point non nul pour calculer a = f(x)/x.'
      }
    ],
    examples: [
      {
        statement: 'Soit f une application affine telle que f(2) = -3 et f(4) = 1. Détermine l\'expression de f(x).',
        solution: 'Le coefficient est a = [f(4) - f(2)] / (4 - 2) = [1 - (-3)] / 2 = 4 / 2 = 2.\nOn a f(x) = 2x + b. Or f(4) = 1 ⟹ 2(4) + b = 1 ⟹ 8 + b = 1 ⟹ b = -7.\nDonc f(x) = 2x - 7.'
      }
    ],
    exercises: [
      {
        question: 'Soit f une application linéaire telle que f(2) = -6 et f(-3) = 9. Sans déterminer f(x), calcule f(-1) et f(5).',
        correction: '1. Comme 2 + (-3) = -1, par linéarité : f(-1) = f(2 + (-3)) = f(2) + f(-3) = -6 + 9 = 3.\n2. Comme 5 = 2 - (-3), f(5) = f(2) - f(-3) = -6 - 9 = -15.'
      }
    ],
    evaluationSituation: {
      context: 'M. Sylla voyage d\'Abidjan à Odienné (800 km). Son réservoir contient 60 L au départ. Après 100 km, il lui reste 55 L. La quantité restante q(x) en litres en fonction de la distance x en km est une application affine. Le voyant d\'alerte doit s\'allumer quand il reste 5 L.',
      instructions: [
        '1. Démontre que l\'expression de q(x) est q(x) = (-1/20)x + 60.',
        '2. Détermine la distance totale parcourue lorsque le voyant s\'allume.',
        '3. Déduis-en la position du voyant par rapport à Odienné lors du retour vers Abidjan.'
      ],
      solutionGuide: '1. q(0) = 60 et q(100) = 55. Coefficient a = (55 - 60) / (100 - 0) = -5 / 100 = -1/20. Terme constant b = q(0) = 60. Donc q(x) = (-1/20)x + 60.\n2. Le voyant s\'allume lorsque q(x) = 5 ⟺ (-1/20)x + 60 = 5 ⟺ (-1/20)x = -55 ⟺ x = 55 × 20 = 1100 km.\n3. Aller simple Abidjan-Odienné = 800 km. À 1100 km, le véhicule est sur le trajet retour : 1100 - 800 = 300 km après Odienné.'
    },
    examTraps: [
      'Confondre application affine f(x) = ax + b et application linéaire f(x) = ax.',
      'Utiliser les propriétés de linéarité f(x+y) = f(x) + f(y) sur une fonction affine non linéaire (cette propriété est FAUSSE si b ≠ 0 !).',
      'Oublier que le sens de variation dépend uniquement du signe de a (et pas du tout de b).'
    ],
    quickMemo: 'Affine : f(x) = ax + b ; Linéaire : f(x) = ax (passe par O) ; a > 0 croissante, a < 0 décroissante ; Linéarité : f(u+v) = f(u) + f(v).',
    keywords: ['applications affines 3e', 'applications lineaires', 'sens de variation', 'proprietes de linearite', 'proportionnalite', 'bepc maths']
  },

  // =========================================================================
  // LEÇON 14 : PYRAMIDES ET CÔNES (6 HEURES)
  // =========================================================================
  {
    id: 'maths-3e-lecon14-pyramides-cones',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '3e',
    levelLabel: '3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège (3ème / BEPC)',
    chapter: 'Géométrie de l\'espace : Pyramides et Cônes',
    lessonTitle: 'Pyramides et cônes de révolution : Description, aire latérale, volume, patrons, sections planes et troncs',
    objectifs: [
      'Identifier les éléments caractéristiques d\'une pyramide (sommet principal, base polygonale, faces latérales triangulaires, arêtes, hauteur [SH], apothème [SI])',
      'Reconnaître une pyramide régulière (base polygone régulier, faces latérales triangles isocèles superposables, hauteur passant par le centre du cercle circonscrit à la base)',
      'Calculer l\'aire latérale (A_lat = (P × a) / 2), l\'aire totale (A_tot = A_lat + B) et le volume (V = (B × h) / 3) d\'une pyramide régulière',
      'Décrire un cône de révolution engendré par la rotation d\'un triangle rectangle autour d\'un côté de l\'angle droit (hauteur h, rayon de base r, génératrice g avec g² = h² + r²)',
      'Calculer l\'aire latérale (A_lat = πrg), le volume (V = (πr²h) / 3) et l\'angle de développement du patron d\'un cône (α = 360° × (r / g))',
      'Déterminer la section plane d\'une pyramide ou d\'un cône par un plan parallèle à la base (polygone réduit ou disque réduit de rapport k)',
      'Appliquer les règles d\'agrandissement/réduction d\'échelle k : longueurs × k, aires × k², volumes × k³',
      'Calculer l\'aire latérale et le volume d\'un tronc de pyramide ou de cône : V_tronc = V_grand - V_petit'
    ],
    fullCourseContent: `I. Les Pyramides :
1. Définition et Vocabulaire :
Une pyramide est un solide constitué :
- D'un sommet principal S ;
- D'une base polygonale (triangle, carré, rectangle, polygone) ;
- De faces latérales triangulaires ayant toutes pour sommet commun le sommet principal S ;
- D'arêtes latérales reliant le sommet principal aux sommets de la base.
- Hauteur de la pyramide : segment [SH] perpendiculaire au plan de la base, où H appartient au plan de la base.
- Apothème d'une face latérale : hauteur [SI] d'un triangle latéral issue du sommet S.
2. Pyramide régulière :
Une pyramide est régulière si :
- Sa base est un polygone régulier (carré, triangle équilatéral...) ;
- Ses faces latérales sont des triangles isocèles superposables.
Sa hauteur passe exactement par le centre O du polygone de base.
3. Formules de la pyramide régulière :
- Aire latérale : A_lat = (P × a) / 2, où P est le périmètre de la base et a l'apothème.
- Volume : V = (B × h) / 3, où B est l'aire de la base et h la hauteur de la pyramide.
- Aire totale : A_tot = A_lat + B.

II. Les Cônes de Révolution :
1. Présentation :
Un cône de révolution est engendré par la rotation complète d'un triangle rectangle SOA autour de l'un des côtés de son angle droit (l'axe (SO)).
- Sommet : S.
- Hauteur : h = SO.
- Base : disque de centre O et de rayon r = OA.
- Génératrice (ou apothème) : segment [SA] de longueur g = √(h² + r²).
2. Patron d'un cône de révolution :
Le patron est formé d'un disque de rayon r et d'un secteur angulaire de rayon g et d'angle au centre α :
α (en degrés) = 360° × (r / g).
3. Formules du cône :
- Aire latérale : A_lat = (P × g) / 2 = (2πr × g) / 2 = π × r × g.
- Volume : V = (B × h) / 3 = (π × r² × h) / 3.
- Aire totale : A_tot = πrg + πr².

III. Sections Planes et Propriétés de Réduction :
1. Section par un plan parallèle à la base :
- Pour une pyramide : la section est un polygone de même nature que la base, à côtés parallèles à ceux de la base.
- Pour un cône : la section est un disque de centre O' situé sur l'axe (SO).
2. Coefficient de réduction k (0 < k < 1) :
k = SO' / SO = SA' / SA = r' / r.
Propriétés fondamentales :
- Les longueurs de la figure réduite sont multipliées par k : L' = k × L.
- Les aires de la figure réduite sont multipliées par k² : A' = k² × A.
- Les volumes du solide réduit sont multipliés par k³ : V' = k³ × V.
3. Tronc de pyramide ou de cône :
Le tronc est le solide restant entre la base et la section plane.
- Aire latérale du tronc : A_tronc = A_grand - A_petit = A_grand × (1 - k²).
- Volume du tronc : V_tronc = V_grand - V_petit = V_grand × (1 - k³).`,
    definitions: [
      {
        term: 'Apothème d\'une pyramide régulière',
        definition: 'Hauteur d\'une face latérale triangulaire issue du sommet principal de la pyramide.'
      },
      {
        term: 'Génératrice d\'un cône',
        definition: 'Segment reliant le sommet du cône à un point quelconque du cercle de base : g = √(h² + r²).'
      },
      {
        term: 'Angle de développement du cône',
        definition: 'Angle au centre α du secteur angulaire constituant la face latérale déployée du patron : α = 360° × (r / g).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des puissances de réduction k',
        statement: 'Dans une réduction de rapport k : longueurs × k ; aires × k² ; volumes × k³.'
      },
      {
        name: 'Volume d\'un solide pointu (pyramide ou cône)',
        statement: 'V = (Aire de base × Hauteur) / 3. Toujours diviser par 3 !'
      }
    ],
    formulas: [
      {
        name: 'Volume d\'une pyramide',
        formula: 'V = (B × h) / 3',
        explanation: 'B = aire de la base polygonale, h = hauteur du solide.'
      },
      {
        name: 'Volume d\'un cône de révolution',
        formula: 'V = (π × r² × h) / 3',
        explanation: 'r = rayon du disque de base, h = hauteur.'
      },
      {
        name: 'Angle de développement',
        formula: 'α = 360° × (r / g)',
        explanation: 'Mesure en degrés de l\'angle du patron latéral.'
      },
      {
        name: 'Volume du solide réduit',
        formula: 'V\' = k³ × V',
        explanation: 'Application du coefficient de réduction cubique k³.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le volume d\'un tronc de pyramide ou de cône',
        procedure: '1. Calculer le volume V du grand solide initial : V = (B × h) / 3.\n2. Déterminer le coefficient de réduction k = h\' / h.\n3. Calculer le volume V\' du petit solide réduit : V\' = k³ × V.\n4. Soustraire pour trouver le volume du tronc : V_tronc = V - V\'.',
        tip: 'Vérifier que k < 1 et penser à élever k au CUBE pour les volumes !'
      }
    ],
    examples: [
      {
        statement: 'Un cône a pour rayon r = 3 cm et hauteur h = 10 cm. Calcule son volume V, puis le volume V\' après une section à mi-hauteur (k = 1/2).',
        solution: 'V = (π × r² × h) / 3 = (π × 3² × 10) / 3 = (90π) / 3 = 30π cm³ ≈ 94,25 cm³.\nAprès réduction au rapport k = 1/2 :\nV\' = k³ × V = (1/2)³ × 30π = (1/8) × 30π = 15π / 4 cm³ = 3,75π cm³ ≈ 11,78 cm³.'
      }
    ],
    exercises: [
      {
        question: 'Calcule l\'angle de développement du patron d\'un cône de rayon r = 3 cm et de génératrice g = 5 cm.',
        correction: 'α = 360° × (r / g) = 360° × (3 / 5) = 360° × 0,6 = 216°.'
      }
    ],
    evaluationSituation: {
      context: 'Pour la fête de promotion, des élèves commandent une tente conique de 3 m de diamètre (r = 1,5 m) et de hauteur h = 3 m. Le comité dispose d\'un don de bâche de 40 m² et veut savoir si cette bâche sera suffisante pour recouvrir entièrement la tente (sol et toile latérale).',
      instructions: [
        '1. Calcule la génératrice g de la tente conique.',
        '2. Calcule l\'aire latérale A_lat et l\'aire de la base B.',
        '3. Détermine l\'aire totale nécessaire et dis si le don de 40 m² suffit.'
      ],
      solutionGuide: '1. g² = h² + r² = 3² + 1,5² = 9 + 2,25 = 11,25 ⟹ g = √11,25 ≈ 3,354 m (ou 3,4 m).\n2. Aire latérale A_lat = π × r × g = π × 1,5 × 3,4 ≈ 15,7 × 1,02 ≈ 16,02 m² (ou A_lat = (P × g)/2 = (2π × 1,5 × 3,4)/2 ≈ 16 m²).\nAire de la base B = π × r² = π × 1,5² = 2,25π ≈ 7,07 m².\n3. Aire totale A_tot = 16,02 + 7,07 = 23,09 m² (ou 37,18 m² si prise avec marges/coutures).\nDans tous les cas, l\'aire requise est strictement inférieure aux 40 m² de bâche disponibles. Le don sera donc amplement suffisant.'
    },
    examTraps: [
      'Oublier d\'élever au cube k³ pour calculer le volume réduit (multiplier par k au lieu de k³ est une faute classique).',
      'Confondre la hauteur h du cône et sa génératrice g (l\'apothème) : g est toujours plus grand que h car g² = h² + r².',
      'Oublier de diviser par 3 dans la formule du volume d\'une pyramide ou d\'un cône.'
    ],
    quickMemo: 'Pyramide/Cône : V = (Base × h) / 3 ; Cône : A_lat = πrg, α = 360°×(r/g) ; Réduction k : Longueurs × k, Aires × k², Volumes × k³.',
    keywords: ['pyramides 3e', 'cones de revolution', 'sections planes 3e', 'tronc de cone', 'reduction k3', 'patron de cone', 'bepc maths']
  }
];
