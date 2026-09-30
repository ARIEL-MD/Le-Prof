import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_4E_MATHS_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - MATHÉMATIQUES (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'maths-5e-symetrie-centrale-parallelogramme',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Géométrie plane : Symétrie centrale & Parallélogrammes',
    lessonTitle: 'Symétrie centrale, propriétés de conservation et caractérisation du parallélogramme',
    objectifs: [
      'Construire le symétrique d\'un point, d\'un segment, d\'une droite et d\'un cercle par rapport à un point O (centre de symétrie)',
      'Utiliser les propriétés de conservation de la symétrie centrale (longueurs, alignement, angles, aires)',
      'Définir et caractériser un parallélogramme par ses côtés, ses angles et ses diagonales',
      'Identifier et construire les parallélogrammes particuliers : Rectangle, Losange et Carré'
    ],
    fullCourseContent: `1. Symétrie Centrale (Demi-tour autour d'un point) :
- Définition : Le symétrique d'un point M par rapport à un point O est le point M' tel que O soit le milieu du segment [MM']. Le point O est son propre symétrique.
- Propriétés de conservation :
  * Le symétrique d'un segment [AB] est un segment [A'B'] de même longueur : A'B' = AB (conservation des distances).
  * Le symétrique d'une droite (D) est une droite (D') qui lui est parallèle : (D) // (D').
  * La symétrie centrale conserve l'alignement des points, les mesures d'angles et les aires des figures.

2. Le Parallélogramme (Quadrilatère fondamental) :
- Définition : Un parallélogramme est un quadrilatère dont les côtés opposés sont parallèles deux à deux.
- Propriétés caractéristiques (équivalences) :
  * Ses diagonales se coupent en leur milieu (le point d'intersection est le centre de symétrie du parallélogramme).
  * Ses côtés opposés ont deux à deux la même longueur : AB = CD et AD = BC.
  * Ses angles opposés ont la même mesure : Â = Ĉ et B̂ = D̂. Deux angles consécutifs sont supplémentaires (leur somme vaut 180°).
  * Si un quadrilatère non croisé a deux côtés opposés parallèles et de même longueur, alors c'est un parallélogramme.

3. Parallélogrammes Particuliers :
- Le Rectangle : Parallélogramme ayant un angle droit (ou des diagonales de même longueur).
- Le Losange : Parallélogramme ayant deux côtés consécutifs de même longueur (ou des diagonales perpendiculaires).
- Le Carré : Parallélogramme à la fois rectangle et losange (4 côtés égaux, 4 angles droits, diagonales égales et perpendiculaires).`,
    definitions: [
      {
        term: 'Symétrie centrale',
        definition: 'Transformation géométrique par rapport à un point fixe O qui fait tourner toute figure d\'un demi-tour (180°) autour de O.'
      },
      {
        term: 'Centre de symétrie',
        definition: 'Point O tel que pour tout point M de la figure, son symétrique M\' par rapport à O appartient également à la figure.'
      },
      {
        term: 'Parallélogramme',
        definition: 'Quadrilatère plan dont les côtés opposés sont portés par des droites parallèles deux à deux.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Propriété des diagonales du parallélogramme',
        statement: 'Un quadrilatère est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.'
      },
      {
        name: 'Conservation des longueurs',
        statement: 'Si A\' et B\' sont les symétriques respectifs de A et B par rapport à un point O, alors la longueur A\'B\' est égale à la longueur AB.'
      }
    ],
    formulas: [
      {
        name: 'Aire du parallélogramme',
        formula: 'Aire = Base × Hauteur = b × h',
        explanation: 'La hauteur est la distance perpendiculaire entre les deux bases parallèles.',
        unitOrCondition: 'Unités cohérentes (m², cm²)'
      },
      {
        name: 'Aire du losange',
        formula: 'Aire = (Grande diagonale × Petite diagonale) / 2 = (D × d) / 2',
        explanation: 'Produit des longueurs des diagonales divisé par 2.',
        unitOrCondition: 'cm² ou m²'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construire le symétrique d\'un point M par rapport à O',
        procedure: '1. Tracer la demi-droite [MO).\n2. À l\'aide du compas, reporter la distance OM sur la demi-droite à partir de O pour placer M\'.\n3. Coder la figure pour indiquer que O est le milieu de [MM\'].',
        tip: 'Le centre O se trouve toujours exactement au milieu des deux points homologues.'
      },
      {
        stepNumber: 2,
        title: 'Démontrer qu\'un quadrilatère ABCD est un parallélogramme',
        procedure: 'Méthode 1 : Montrer que les diagonales [AC] et [BD] ont le même milieu I.\nMéthode 2 : Montrer que les côtés opposés (AB) et (CD) sont parallèles et de même longueur AB = CD.',
        tip: 'Vérifier toujours que le quadrilatère est nommé dans l\'ordre circulaire (ABCD et non ABDC).'
      }
    ],
    examples: [
      {
        statement: 'Soit un triangle ABC et I le milieu de [BC]. On construit le point D symétrique de A par rapport à I. Quelle est la nature du quadrilatère ABDC ?',
        solution: 'Par hypothèse, I est le milieu de [BC].\nDe plus, D étant le symétrique de A par rapport à I, I est aussi le milieu de [AD].\nLes diagonales [BC] et [AD] du quadrilatère ABDC se coupent en leur milieu commun I.\nOr, un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme.\nConclusion : ABDC est un parallélogramme.'
      }
    ],
    exercises: [
      {
        question: 'Un parallélogramme ABCD a pour dimensions AB = 8 cm et la hauteur relative au côté [AB] mesure h = 4,5 cm. Calcule son aire.',
        correction: 'Formule : Aire = Base × Hauteur = AB × h = 8 cm × 4,5 cm = 36 cm².\nL\'aire du parallélogramme ABCD est de 36 cm².'
      }
    ],
    evaluationSituation: {
      context: 'Un paysan à Bouaké possède une parcelle de terrain ayant la forme d\'un quadrilatère ABCD. Pour clôturer sa parcelle, il constate que les allées diagonales reliant les piquets opposés se croisent exactement en un puits central O situé à égale distance des sommets opposés.',
      instructions: [
        '1. Justifie que le puits O est le milieu des deux diagonales [AC] et [BD].',
        '2. Déduis-en la nature géométrique exacte du terrain ABCD.',
        '3. Sachant que AB = 45 m et BC = 30 m, calcule la longueur totale de grillage nécessaire pour entourer toute la parcelle.'
      ],
      solutionGuide: '1. O étant à égale distance de A et C sur la diagonale [AC], O est le milieu de [AC]. De même, O est le milieu de [BD].\n2. Les diagonales [AC] et [BD] se coupent en leur milieu commun O, donc le quadrilatère ABCD est un parallélogramme.\n3. Dans un parallélogramme, les côtés opposés ont la même longueur : CD = AB = 45 m et AD = BC = 30 m.\nPérimètre = 2 × (45 + 30) = 2 × 75 = 150 m.\nIl faudra 150 mètres de grillage pour clôturer le terrain.'
    },
    examTraps: [
      'Ne pas confondre symétrie centrale (demi-tour / point) et symétrie axiale (pliage / droite).',
      'Dans la formule de l\'aire du losange, ne pas oublier de diviser le produit des diagonales par 2.'
    ],
    quickMemo: 'Symétrie centrale : O est le milieu de [MM\']. Parallélogramme : diagonales de même milieu, côtés opposés // et de même longueur.',
    keywords: ['symétrie centrale', 'parallélogramme', 'losange', 'rectangle', 'carré', 'diagonales', '5e', 'milieu']
  },
  {
    id: 'maths-5e-triangles-hauteurs-mediatrices-angles',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Triangles : Droites remarquables & Somme des angles',
    lessonTitle: 'Somme des angles d\'un triangle, médiatrices, hauteurs, bissectrices et inégalité triangulaire',
    objectifs: [
      'Appliquer le théorème de la somme des angles d\'un triangle (180°)',
      'Utiliser l\'inégalité triangulaire pour déterminer si un triangle est constructible',
      'Construire les 4 droites remarquables du triangle : Médiatrices, Hauteurs, Bissectrices, Médianes',
      'Identifier les points de concours associés : Centre du cercle circonscrit, Orthocentre, Centre du cercle inscrit, Centre de gravité'
    ],
    fullCourseContent: `1. Somme des angles d'un triangle :
- Théorème fondamental : Dans tout triangle, la somme des mesures des trois angles est toujours égale à 180°.
  Â + B̂ + Ĉ = 180°.
- Conséquences :
  * Triangle rectangle : La somme des deux angles aigus est égale à 90° (angles complémentaires).
  * Triangle équilatéral : Chacun des 3 angles mesure exactement 60° (180° / 3 = 60°).
  * Triangle isocèle : Les deux angles à la base ont la même mesure.

2. Inégalité Triangulaire (Condition d'existence d'un triangle) :
- Dans un triangle non aplati, la longueur de chaque côté est strictement inférieure à la somme des longueurs des deux autres côtés.
- Règle pratique : Pour vérifier si 3 longueurs a, b, c (avec c la plus grande) permettent de construire un triangle, il suffit de vérifier que :
  Plus grand côté < Somme des deux autres côtés (c < a + b).
- Cas d'égalité : Si c = a + b, alors les points sont alignés et le point B appartient au segment [AC].

3. Les Droites Remarquables du Triangle :
- Les Médiatrices : Droites perpendiculaires aux côtés passant par leur milieu.
  * Point de concours : Le centre O du cercle circonscrit au triangle (qui passe par les 3 sommets).
- Les Hauteurs : Droites passant par un sommet et perpendiculaires au côté opposé.
  * Point de concours : L'Orthocentre H du triangle.
- Les Bissectrices : Demi-droites qui partagent un angle en deux angles de même mesure.
  * Point de concours : Le centre I du cercle inscrit dans le triangle (tangent aux 3 côtés).
- Les Médianes : Droites passant par un sommet et le milieu du côté opposé.
  * Point de concours : Le Centre de gravité G, situé aux 2/3 de chaque médiane à partir du sommet (AG = 2/3 AA').`,
    definitions: [
      {
        term: 'Médiatrice',
        definition: 'Droite perpendiculaire à un segment en son milieu. C\'est l\'ensemble des points équidistants des deux extrémités du segment.'
      },
      {
        term: 'Hauteur',
        definition: 'Droite passant par un sommet d\'un triangle et perpendiculaire à la droite qui porte le côté opposé.'
      },
      {
        term: 'Orthocentre',
        definition: 'Point d\'intersection commun (point de concours) des trois hauteurs d\'un triangle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème des 180°',
        statement: 'Dans un triangle quelconque ABC, on a : Mes(Â) + Mes(B̂) + Mes(Ĉ) = 180°.'
      },
      {
        name: 'Caractérisation de la médiatrice',
        statement: 'Un point M appartient à la médiatrice du segment [AB] si et seulement si MA = MB.'
      }
    ],
    formulas: [
      {
        name: 'Aire d\'un triangle',
        formula: 'Aire = (Base × Hauteur) / 2 = (b × h) / 2',
        explanation: 'Produit de la longueur d\'un côté par la hauteur correspondante, divisé par 2.',
        unitOrCondition: 'Longueur en cm, aire en cm²'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la mesure du troisième angle d\'un triangle',
        procedure: '1. Additionner les mesures des deux angles connus.\n2. Soustraire cette somme de 180° : Mes(Â) = 180° - (Mes(B̂) + Mes(Ĉ)).\n3. Écrire la phrase de conclusion avec l\'unité en degrés (°).',
        tip: 'Dans un triangle rectangle, il suffit de faire 90° - l\'angle aigu connu.'
      }
    ],
    examples: [
      {
        statement: 'Soit un triangle ABC isocèle en A tel que l\'angle au sommet Â = 40°. Calcule la mesure des angles B̂ et Ĉ.',
        solution: 'Dans le triangle ABC, la somme des angles vaut 180°.\nComme le triangle est isocèle en A, les angles à la base ont la même mesure : Mes(B̂) = Mes(Ĉ).\nMes(B̂) + Mes(Ĉ) = 180° - 40° = 140°.\nDonc Mes(B̂) = Mes(Ĉ) = 140° / 2 = 70°.'
      }
    ],
    exercises: [
      {
        question: 'Peut-on construire un triangle dont les côtés mesurent 4 cm, 7 cm et 12 cm ? Justifie.',
        correction: 'Le plus grand côté mesure 12 cm.\nLa somme des deux autres côtés est : 4 cm + 7 cm = 11 cm.\nComme 12 > 11 (le plus grand côté est supérieur à la somme des deux autres), l\'inégalité triangulaire n\'est pas respectée.\nConclusion : Il est impossible de construire ce triangle.'
      }
    ],
    evaluationSituation: {
      context: 'Trois villages en Côte d\'Ivoire (A, B et C) souhaitent construire un château d\'eau commun situé exactement à la même distance de chacun des trois villages pour alimenter équitablement les populations.',
      instructions: [
        '1. Modélise la position des villages par les sommets d\'un triangle ABC.',
        '2. Nomme la droite remarquable dont tous les points sont à égale distance de deux villages.',
        '3. Précise le point géométrique exact où doit être implanté le château d\'eau et explique comment le construire.'
      ],
      solutionGuide: '1. Les villages forment un triangle ABC.\n2. La médiatrice d\'un segment est l\'ensemble des points équidistants de ses extrémités.\n3. Le château d\'eau doit être situé à l\'intersection des médiatrices des côtés du triangle ABC, c\'est-à-dire au centre du cercle circonscrit au triangle ABC. On le construit en traçant les médiatrices d\'au moins deux côtés et en repérant leur point de concours O.'
    },
    examTraps: [
      'Penser que la hauteur passe toujours par le milieu du côté opposé (ce n\'est vrai que dans les triangles isocèles ou équilatéraux).',
      'Oublier de vérifier l\'inégalité triangulaire avant d\'affirmer qu\'un triangle existe.'
    ],
    quickMemo: 'Somme des angles = 180°. Médiatrices -> Cercle circonscrit. Hauteurs -> Orthocentre. Bissectrices -> Cercle inscrit. Médianes -> Centre de gravité.',
    keywords: ['triangle', 'somme des angles', '180°', 'médiatrice', 'hauteur', 'orthocentre', 'cercle circonscrit', '5e']
  },

  // ========================================================
  // 4ÈME - MATHÉMATIQUES (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'maths-4e-theoreme-droite-des-milieux-cercle',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    chapter: 'Géométrie du triangle : Droite des milieux & Triangle rectangle et cercle',
    lessonTitle: 'Théorèmes des milieux, caractérisation du triangle rectangle inscrit et distance d\'un point à une droite',
    objectifs: [
      'Énoncer et appliquer le 1er théorème des milieux (droite parallèle)',
      'Énoncer et appliquer le 2e théorème des milieux (longueur moitié)',
      'Démontrer qu\'un triangle est rectangle grâce à son cercle circonscrit (hypoténuse comme diamètre)',
      'Utiliser la médiane relative à l\'hypoténuse pour calculer des longueurs ou prouver un angle droit'
    ],
    fullCourseContent: `1. Théorèmes de la Droite des Milieux :
- Théorème 1 (Parallélisme) : Dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est strictement parallèle au troisième côté.
  Si I est milieu de [AB] et J milieu de [AC], alors (IJ) // (BC).
- Théorème 2 (Longueur) : Dans un triangle, la longueur du segment joignant les milieux de deux côtés est égale à la moitié de la longueur du troisième côté.
  IJ = BC / 2 (ou BC = 2 × IJ).
- Théorème 3 (Réciproque / Milieu du 3e côté) : Dans un triangle, si une droite passe par le milieu d'un côté et est parallèle à un deuxième côté, alors elle coupe le troisième côté en son milieu.

2. Triangle Rectangle et Cercle Circonscrit :
- Propriété directe : Si un triangle ABC est rectangle en A, alors son cercle circonscrit a pour diamètre son hypoténuse [BC], et son centre O est le milieu de l'hypoténuse [BC].
  On a donc : OA = OB = OC = BC / 2.
- Médiane relative à l'hypoténuse : Dans un triangle rectangle, la longueur de la médiane issue du sommet de l'angle droit est égale à la moitié de la longueur de l'hypoténuse.
- Propriété réciproque (Démontrer qu'un triangle est rectangle) :
  * Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors ce triangle est rectangle (le côté diamètre est son hypoténuse).
  * Si dans un triangle, la longueur de la médiane relative à un côté est égale à la moitié de la longueur de ce côté, alors ce triangle est rectangle.

3. Tangente à un Cercle :
- La tangente à un cercle (C) de centre O en un point A est la droite perpendiculaire au rayon [OA] passant par le point A.`,
    definitions: [
      {
        term: 'Hypoténuse',
        definition: 'Le côté le plus long d\'un triangle rectangle, opposé à l\'angle droit.'
      },
      {
        term: 'Tangente à un cercle',
        definition: 'Droite qui a un unique point de contact avec le cercle et qui est perpendiculaire au rayon en ce point.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème direct de la droite des milieux',
        statement: 'Dans un triangle ABC, si I est le milieu de [AB] et J le milieu de [AC], alors (IJ) // (BC) et IJ = BC / 2.'
      },
      {
        name: 'Caractérisation du triangle rectangle par le cercle',
        statement: 'Si un triangle ABC est inscrit dans un cercle dont le diamètre est le côté [BC], alors ABC est rectangle en A.'
      }
    ],
    formulas: [
      {
        name: 'Longueur du segment des milieux',
        formula: 'IJ = (1/2) × BC',
        explanation: 'Le segment joignant les milieux mesure la moitié du côté opposé.',
        unitOrCondition: 'Triangle quelconque'
      },
      {
        name: 'Médiane de l\'hypoténuse',
        formula: 'AO = BC / 2',
        explanation: 'Dans le triangle ABC rectangle en A, O étant le milieu de [BC].',
        unitOrCondition: 'Triangle rectangle en A'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Prouver le parallélisme avec la droite des milieux',
        procedure: '1. Identifier le triangle de travail.\n2. Citer les deux milieux : "Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]."\n3. Citer le théorème : "D\'après le théorème de la droite des milieux, la droite (IJ) est parallèle à la droite (BC)."\n4. Conclure : "(IJ) // (BC)".',
        tip: 'Ne pas oublier de vérifier que les points sont bien les milieux des côtés.'
      }
    ],
    examples: [
      {
        statement: 'Dans un triangle EFG, I est le milieu de [EF] et J est le milieu de [EG]. Sachant que FG = 14 cm, calcule la longueur IJ.',
        solution: 'Dans le triangle EFG, I est le milieu de [EF] et J est le milieu de [EG].\nD\'après le théorème de la droite des milieux : IJ = FG / 2.\nIJ = 14 cm / 2 = 7 cm.\nLa longueur du segment [IJ] est de 7 cm.'
      }
    ],
    exercises: [
      {
        question: 'Soit un cercle de diamètre [AB] mesurant 10 cm. Soit M un point quelconque de ce cercle distinct de A et B. Quelle est la nature du triangle AMB et que vaut la distance entre le centre O du cercle et le point M ?',
        correction: '1. Le triangle AMB est inscrit dans le cercle de diamètre [AB], donc le triangle AMB est rectangle en M.\n2. O étant le centre du cercle et M un point du cercle, [OM] est un rayon.\nOM = Diamètre / 2 = 10 cm / 2 = 5 cm.'
      }
    ],
    evaluationSituation: {
      context: 'Sur un plan d\'urbanisme à San-Pédro, une zone triangulaire ABC doit être traversée par une nouvelle canalisation rectiligne reliant le milieu I de la route [AB] au milieu J de la route [AC]. La route principale [BC] mesure 680 mètres.',
      instructions: [
        '1. Démontre que la canalisation (IJ) sera strictement parallèle à la route principale (BC).',
        '2. Calcule la longueur totale de tuyauterie nécessaire pour poser la canalisation [IJ].'
      ],
      solutionGuide: '1. Dans le triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]. D\'après le théorème de la droite des milieux, la droite (IJ) est parallèle à la droite (BC).\n2. D\'après le théorème de la droite des milieux, IJ = BC / 2 = 680 m / 2 = 340 mètres.\nIl faudra 340 mètres de tuyauterie.'
    },
    examTraps: [
      'Confondre le théorème de la droite des milieux (en 4e) avec le théorème général de Thalès (en 3e).',
      'Oublier que pour qu\'un triangle soit rectangle dans un cercle, l\'un de ses côtés doit impérativement être un diamètre.'
    ],
    quickMemo: 'Milieux de 2 côtés -> Parallèle au 3e côté et Longueur = Moitié. Triangle rectangle -> Hypoténuse = Diamètre du cercle circonscrit.',
    keywords: ['droite des milieux', 'triangle rectangle', 'cercle circonscrit', 'hypoténuse', 'médiane', 'tangente', '4e']
  },
  {
    id: 'maths-4e-nombres-rationnels-equations-1er-degre',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    chapter: 'Algèbre : Nombres rationnels & Équations du 1er degré à une inconnue',
    lessonTitle: 'Opérations sur les nombres rationnels relatifs, puissances et résolution d\'équations ax + b = c',
    objectifs: [
      'Additionner, soustraire, multiplier et diviser des nombres rationnels sous forme de fractions positives et négatives',
      'Calculer avec les puissances d\'exposant entier relatif (règles de calcul et notation scientifique)',
      'Développer et réduire des expressions algébriques simples avec distributivité',
      'Résoudre des équations du premier degré de type ax + b = c et ax + b = cx + d'
    ],
    fullCourseContent: `1. Nombres Rationnels (Fractions relatives a/b avec b ≠ 0) :
- Égalité de quotients : a/b = c/d si et seulement si a × d = b × c (produit en croix).
- Règle des signes : -a/b = a/(-b) = -(a/b) et (-a)/(-b) = a/b.
- Addition et Soustraction :
  * Même dénominateur : a/d + b/d = (a + b)/d.
  * Dénominateurs différents : Trouver un dénominateur commun (PPCM), réduire au même dénominateur, puis additionner les numérateurs.
- Multiplication : (a/b) × (c/d) = (a × c) / (b × d). On simplifie avant d'effectuer les multiplications !
- Division : Diviser par une fraction non nulle revient à multiplier par son inverse.
  (a/b) ÷ (c/d) = (a/b) × (d/c) = (a × d) / (b × c).

2. Puissances d'un nombre relatif :
- Définition : Pour a ≠ 0 et n entier positif, a^n = a × a × ... × a (n facteurs) et a^(-n) = 1 / a^n. Par convention, a^0 = 1.
- Règles de calcul :
  * a^m × a^n = a^(m+n)
  * a^m / a^n = a^(m-n)
  * (a^m)^n = a^(m×n)
  * (a × b)^n = a^n × b^n
- Notation scientifique d'un nombre : Écriture sous la forme a × 10^p où 1 ≤ |a| < 10 et p est un entier relatif.

3. Équations du 1er Degré à une Inconnue :
- Équation de type ax + b = c (avec a ≠ 0) :
  1. Isoler le terme en x : ax = c - b.
  2. Diviser par le coefficient a : x = (c - b) / a.
- Équation de type ax + b = cx + d :
  1. Regrouper les termes en x à gauche et les constantes à droite : ax - cx = d - b.
  2. Factoriser x : (a - c)x = d - b.
  3. Conclure : x = (d - b) / (a - c).`,
    definitions: [
      {
        term: 'Nombre rationnel',
        definition: 'Nombre pouvant s\'écrire sous la forme d\'un quotient a/b de deux entiers relatifs avec b non nul.'
      },
      {
        term: 'Notation scientifique',
        definition: 'Écriture d\'un nombre décimal sous la forme a × 10^n avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule) et n entier relatif.'
      },
      {
        term: 'Équation',
        definition: 'Égalité comportant une ou plusieurs lettres appelées inconnues, vraie seulement pour certaines valeurs appelées solutions.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de transposition dans une équation',
        statement: 'Quand un terme change de membre (passe de l\'autre côté du signe égal), son signe change (+ devient - et - devient +).'
      },
      {
        name: 'Inverse d\'un nombre rationnel',
        statement: 'L\'inverse de la fraction non nulle a/b est la fraction b/a car (a/b) × (b/a) = 1.'
      }
    ],
    formulas: [
      {
        name: 'Division de fractions',
        formula: '(a/b) / (c/d) = (a/b) × (d/c)',
        explanation: 'Multiplier par la fraction inversée.',
        unitOrCondition: 'b ≠ 0, c ≠ 0, d ≠ 0'
      },
      {
        name: 'Produit de puissances de même base',
        formula: 'a^n × a^m = a^(n+m)',
        explanation: 'On additionne les exposants.',
        unitOrCondition: 'a non nul'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre l\'équation ax + b = cx + d',
        procedure: '1. Transposer les termes en x à gauche : ax - cx = d - b.\n2. Réduire chaque membre : (a - c)x = d - b.\n3. Diviser par (a - c) : x = (d - b) / (a - c).\n4. Vérifier la solution en remplaçant x dans l\'équation d\'origine.\n5. Écrire l\'ensemble des solutions : S = {valeur}.',
        tip: 'Attention aux erreurs de signe lors des déplacements de termes.'
      }
    ],
    examples: [
      {
        statement: 'Résous l\'équation : 4x - 7 = 2x + 5.',
        solution: '4x - 2x = 5 + 7\n2x = 12\nx = 12 / 2 = 6.\nVérification : Membre gauche = 4(6) - 7 = 24 - 7 = 17. Membre droit = 2(6) + 5 = 12 + 5 = 17. Égalité vérifiée !\nConclusion : S = {6}.'
      }
    ],
    exercises: [
      {
        question: 'Calcule et donne le résultat sous forme de fraction irréductible : A = (3/4 - 1/2) ÷ (5/6 + 1/3).',
        correction: '1. Numérateur : 3/4 - 2/4 = 1/4.\n2. Dénominateur : 5/6 + 2/6 = 7/6.\n3. Division : A = (1/4) ÷ (7/6) = (1/4) × (6/7) = 6 / 28 = 3 / 14.\nConclusion : A = 3/14.'
      }
    ],
    evaluationSituation: {
      context: 'Un commerçant d\'Adjamé achète 3 sacs de riz et un carton d\'huile à 15 000 FCFA. Son voisin achète 1 sac de riz et 3 cartons d\'huile identiques pour 35 000 FCFA. Ils cherchent à déterminer le prix exact d\'un sac de riz.',
      instructions: [
        '1. Traduis le problème par une équation en posant x comme prix d\'un sac de riz sachant qu\'un carton d\'huile coûte 10 000 FCFA.',
        '2. Résous l\'équation pour déterminer la valeur de x.',
        '3. Rédige une conclusion claire pour le commerçant.'
      ],
      solutionGuide: '1. Le carton d\'huile coûtant 10 000 FCFA, l\'achat du premier commerçant s\'écrit : 3x + 10 000 = [prix total]. D\'après la 2e donnée, 1 sac + 3(10 000) = 35 000 => x + 30 000 = 35 000.\n2. Résolution : x = 35 000 - 30 000 = 5 000 FCFA.\n3. Conclusion : Le prix d\'un sac de riz est exactement de 5 000 FCFA.'
    },
    examTraps: [
      'Multiplier les dénominateurs lors d\'une addition de fractions au lieu de chercher un dénominateur commun.',
      'Oublier d\'inverser la 2e fraction lors d\'une division.',
      'Confondre 10^(-3) (qui vaut 0,001, positif) avec un nombre négatif.'
    ],
    quickMemo: 'Addition fractions -> Dénominateur commun. Division -> Multiplier par l\'inverse. Équation -> Isoler x en changeant les signes.',
    keywords: ['nombres rationnels', 'fractions', 'puissances', 'notation scientifique', 'équations', 'premier degré', '4e']
  }
];
