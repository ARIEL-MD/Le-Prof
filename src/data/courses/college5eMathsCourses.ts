import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_MATHS_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 1 - NOMBRES PREMIERS ET PUISSANCES
  // ========================================================
  {
    id: 'maths-5e-nombres-premiers-puissances-priorites',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 1 : Calculs Algébriques',
    lessonTitle: 'Nombres premiers, puissances entières, priorités opératoires et division euclidienne',
    objectifs: [
      'Définir et calculer les puissances entières d\'un entier naturel a^n',
      'Appliquer les règles de priorité opératoire : parenthèses, puissances, multiplications/divisions, additions/soustractions',
      'Utiliser les propriétés des puissances : a^n * b^n = (a * b)^n et a^n * a^m = a^(n+m)',
      'Effectuer la division euclidienne a = b * q + r avec r < b et encadrer un nombre par deux multiples consécutifs',
      'Identifier les nombres premiers (définition, 2 seul nombre pair premier, liste des premiers < 50)',
      'Décomposer un entier naturel en produit de facteurs premiers'
    ],
    fullCourseContent: `1. Puissances entières d'un nombre entier naturel :
- Définition : a est un entier naturel et n un entier naturel strictement supérieur à 1.
  a^n désigne le produit de n facteurs égaux au nombre a :
  a^n = a * a * a * ... * a (n facteurs égaux à a).
- Vocabulaire :
  * a^n est une puissance du nombre a ; n est l'exposant.
  * a^n se lit "a exposant n".
  * a^2 se lit "a au carré" ou "a exposant 2".
  * a^3 se lit "a au cube" ou "a exposant 3".
- Cas particuliers :
  * Si n est un entier naturel non nul, alors 0^n = 0 et 1^n = 1.
  * Pour tout entier naturel a, a^1 = a.
  * Par convention, pour tout a non nul : a^0 = 1.

2. Nouvelle règle de priorité opératoire :
Dans une suite d'opérations :
- En présence de parenthèses, les calculs entre parenthèses sont strictement prioritaires.
- En l'absence de parenthèses, on effectue les calculs dans l'ordre suivant :
  1. Les puissances.
  2. Les multiplications et les divisions (de gauche à droite).
  3. Les additions et les soustractions (de gauche à droite).

3. Propriétés de calcul avec les puissances :
- Propriété 1 (puissance d'un produit) : a^n * b^n = (a * b)^n.
  Exemple : 7^4 * 8^4 = (7 * 8)^4 = 56^4.
- Propriété 2 (produit de puissances de même base) : a^n * a^m = a^(n+m).
  Exemple : 2^2 * 2^3 = 2^(2+3) = 2^5 = 32.

4. Division euclidienne dans N :
- Propriété fondamentale : Pour tous entiers naturels a et b (b non nul), il existe un unique couple d'entiers naturels (q ; r) tels que :
  a = b * q + r  avec  r < b.
  a est le dividende, b le diviseur, q le quotient et r le reste.
- Si a est un multiple de b, alors le reste r est nul et a = b * q.
- Encadrement par deux multiples consécutifs : Si a n'est pas un multiple de b, alors :
  b * q < a < b * (q + 1).

5. Nombres premiers :
- Définition : Un nombre premier est un entier naturel non nul qui admet exactement deux diviseurs : 1 et lui-même.
- Remarques fondamentales :
  * 1 n'est pas un nombre premier car il n'admet qu'un seul diviseur (lui-même).
  * 2 est le seul nombre premier pair.
  * Nombres premiers inférieurs à 50 : 2 ; 3 ; 5 ; 7 ; 11 ; 13 ; 17 ; 19 ; 23 ; 29 ; 31 ; 37 ; 41 ; 43 ; 47.
- Règle pour reconnaître si un nombre a est premier :
  On effectue les divisions euclidiennes de a par les nombres premiers successifs dans l'ordre croissant (2, 3, 5, 7, 11, ...) jusqu'à ce que :
  * Soit on trouve un reste nul (le nombre n'est pas premier) ;
  * Soit on obtient un quotient inférieur ou égal au diviseur premier testé sans reste nul (alors le nombre est premier).
- Décomposition en produit de facteurs premiers : Tout entier naturel composé (non premier) supérieur à 1 s'écrit de façon unique comme un produit de puissances de facteurs premiers.
  Exemple : 40 = 2^3 * 5 ; 56 = 2^3 * 7 ; 45 = 3^2 * 5.`,
    definitions: [
      {
        term: 'Puissance entière',
        definition: 'Écriture a^n représentant le produit de n facteurs tous égaux au nombre a.'
      },
      {
        term: 'Division euclidienne',
        definition: 'Opération associant à deux entiers naturels a et b (b != 0) un quotient q et un reste r vérifiant a = b * q + r et r < b.'
      },
      {
        term: 'Nombre premier',
        definition: 'Entier naturel non nul possédant exactement deux diviseurs distincts dans N : 1 et lui-même.'
      },
      {
        term: 'Décomposition en facteurs premiers',
        definition: 'Écriture d\'un entier sous la forme d\'un produit où tous les facteurs sont des nombres premiers affectés d\'exposants.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Priorités opératoires',
        statement: '1. Parenthèses, 2. Puissances, 3. Multiplications et divisions, 4. Additions et soustractions.'
      },
      {
        name: 'Produit de puissances de même base',
        statement: 'Pour tous entiers naturels non nuls n et m : a^n * a^m = a^(n+m).'
      },
      {
        name: 'Puissance d\'un produit',
        statement: 'Pour tout entier non nul n : a^n * b^n = (a * b)^n.'
      },
      {
        name: 'Test de primalité',
        statement: 'Si un entier n\'est divisible par aucun nombre premier dont le carré est inférieur ou égal à cet entier (quotient <= diviseur), alors il est premier.'
      }
    ],
    formulas: [
      {
        name: 'Égalité euclidienne',
        formula: 'a = b \\times q + r \\quad (0 \\le r < b)',
        explanation: 'a est le dividende, b le diviseur, q le quotient entier et r le reste.'
      },
      {
        name: 'Encadrement par deux multiples',
        formula: 'b \\times q < a < b \\times (q + 1)',
        explanation: 'Encadrement strict d\'un nombre a non multiple de b.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tester si 71 est un nombre premier',
        procedure: '1. 71 = 2 * 35 + 1 (non divisible par 2). 2. 71 = 3 * 23 + 2 (non divisible par 3). 3. 71 = 5 * 14 + 1 (non divisible par 5). 4. 71 = 7 * 10 + 1 (non divisible par 7). 5. 71 = 11 * 6 + 5. Comme le quotient 6 est inférieur au diviseur 11 et le reste n\'est pas nul, on arrête : 71 est premier.',
        tip: 'Dès que le quotient devient strictement inférieur au diviseur premier essayé, inutile de continuer.'
      }
    ],
    examples: [
      {
        statement: 'Calcule l\'expression A = 7 + 5^2 - 2 - 3 * (2^3 + 1) en respectant les priorités opératoires.',
        solution: `1. Calcul de la parenthèse avec puissance : 2^3 + 1 = 8 + 1 = 9.
2. Puissance restante : 5^2 = 25.
L'expression devient : 7 + 25 - 2 - 3 * 9.
3. Multiplication prioritaire : 3 * 9 = 27.
L'expression devient : 7 + 25 - 2 - 27.
4. Additions et soustractions de gauche à droite :
(7 + 25) - 2 - 27 = 32 - 2 - 27 = 30 - 27 = 3.`
      }
    ],
    exercises: [
      {
        question: 'Décompose 258 en produit de facteurs premiers.',
        correction: `258 est pair : 258 / 2 = 129.
129 : somme des chiffres 1+2+9 = 12 (divisible par 3) : 129 / 3 = 43.
43 est un nombre premier (non divisible par 2, 3, 5 car 43 = 7*6 + 1 avec 6 < 7).
Donc 258 = 2 * 3 * 43.`
      }
    ],
    evaluationSituation: {
      context: 'La bibliothèque du Lycée Moderne 2 d\'Abobo a reçu 170 livres. La bibliothécaire veut les ranger sur des étagères pouvant recevoir 28 livres chacune. Elle souhaite savoir combien d\'étagères seront complètes et combien de livres manquent pour remplir la dernière étagère.',
      instructions: [
        '1. Effectue la division euclidienne de 170 par 28.',
        '2. Détermine le nombre d\'étagères complètes et le nombre de livres sur l\'étagère incomplète.',
        '3. Calcule le nombre de livres supplémentaires à recevoir pour remplir cette dernière étagère.'
      ],
      solutionGuide: '1. 170 = 28 * 6 + 2 avec 2 < 28. 2. Le quotient est 6 (6 étagères complètes). Le reste est 2 (2 livres sur l\'étagère incomplète). 3. Pour compléter l\'étagère de 28 livres, il faut ajouter 28 - 2 = 26 livres (ou 28 * 7 - 170 = 196 - 170 = 26 livres).'
    },
    examTraps: [
      'Penser que 1 est premier : 1 n\'a qu\'un seul diviseur, or un nombre premier en a exactement 2.',
      'Oublier la priorité des puissances avant la multiplication (calculer 3 * 2^3 comme (3*2)^3 = 6^3 au lieu de 3 * 8 = 24).',
      'Dans la division euclidienne a = b*q + r, oublier la condition obligatoire r < b.'
    ],
    quickMemo: 'a^n = a * ... * a (n fois) | Priorités : () puis puissances puis * / puis + - | Premier : exactement 2 diviseurs (2 seul pair) | a = b*q + r avec r < b.',
    keywords: ['nombres premiers', 'puissances entières', 'priorité des calculs', 'division euclidienne', 'décomposition facteurs premiers', 'multiples consécutifs']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 2 - FIGURES SYMÉTRIQUES PAR RAPPORT À UNE DROITE
  // ========================================================
  {
    id: 'maths-5e-symetrie-axiale-figures',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 2 : Transformation du Plan',
    lessonTitle: 'Figures symétriques par rapport à une droite (Symétrie axiale) et axes de symétrie',
    objectifs: [
      'Définir le symétrique d\'un point par rapport à une droite (D) comme médiatrice de [AB]',
      'Construire le symétrique d\'un point, segment, droite, angle et cercle à la règle et à l\'équerre ou au compas',
      'Appliquer les propriétés de conservation : alignement, longueurs de segments, milieux, mesures d\'angles, parallélisme et orthogonalité',
      'Définir et identifier l\'axe de symétrie d\'une figure géométrique (segment, droite, triangle isocèle, triangle équilatéral, rectangle, losange, carré, cercle)'
    ],
    fullCourseContent: `1. Symétrique d'un point par rapport à une droite :
- Définition : Deux points A et B sont symétriques par rapport à une droite (D) signifie que la droite (D) est la médiatrice du segment [AB].
  C'est-à-dire : (D) est perpendiculaire à (AB) et coupe [AB] en son milieu I (AI = IB).
- Remarque : Tout point appartenant à la droite (D) est son propre symétrique par rapport à (D).
- Construction : Pour construire le symétrique M' de M par rapport à (D) :
  1. On trace la perpendiculaire à (D) passant par M ; elle coupe (D) en H.
  2. Sur la demi-droite [MH), on reporte la distance HM' = MH. M' est le symétrique cherché.

2. Propriétés des figures symétriques par rapport à une droite :
- Conservation de l'alignement : Les symétriques de trois points alignés par rapport à une droite sont trois points alignés.
- Symétrique d'une droite et d'une demi-droite : Le symétrique d'une droite par rapport à une droite est une droite. Le symétrique d'une demi-droite est une demi-droite.
- Conservation des longueurs : Le symétrique d'un segment [AB] par rapport à une droite est un segment [A'B'] de même longueur : A'B' = AB.
- Conservation des milieux : Le symétrique du milieu I de [AB] est le milieu I' du segment symétrique [A'B'].
- Conservation des angles : Le symétrique d'un angle ABC par rapport à une droite est un angle A'B'C' de même mesure : mes(A'B'C') = mes(ABC).
- Symétrique d'un cercle : Le symétrique d'un cercle C(O ; r) par rapport à une droite est un cercle C'(O' ; r) de même rayon r, où O' est le symétrique du centre O.
- Conservation des droites perpendiculaires : Les symétriques de deux droites perpendiculaires sont deux droites perpendiculaires. Le symétrique d'un triangle rectangle est un triangle rectangle.
- Conservation des droites parallèles : Les symétriques de deux droites parallèles sont deux droites parallèles.

3. Axe de symétrie d'une figure :
- Définition : Une droite (D) est un axe de symétrie d'une figure (F) signifie que le symétrique de chaque point de (F) par rapport à (D) est un point de (F). Plier la figure le long de (D) fait coïncider les deux moitiés.
- Inventaire des axes de symétrie des figures usuelles :
  * Segment : 2 axes de symétrie (sa médiatrice et la droite support du segment).
  * Droite : Une infinité d'axes (la droite elle-même et toute droite qui lui est perpendiculaire).
  * Triangle isocèle : 1 axe de symétrie (la médiatrice de la base, qui est aussi hauteur, médiane et bissectrice principale).
  * Triangle équilatéral : 3 axes de symétrie (les 3 médiatrices des côtés).
  * Rectangle : 2 axes de symétrie (les médiatrices de ses côtés ; attention, les diagonales ne sont pas des axes de symétrie).
  * Losange : 2 axes de symétrie (les droites supports de ses diagonales).
  * Carré : 4 axes de symétrie (les 2 médiatrices des côtés et les 2 supports des diagonales).
  * Cercle : Une infinité d'axes de symétrie (toute droite passant par son centre).`,
    definitions: [
      {
        term: 'Symétrie axiale',
        definition: 'Transformation géométrique par pliage le long d\'une droite (D), où chaque point a pour image un point situé à égale distance de l\'autre côté.'
      },
      {
        term: 'Médiatrice d\'un segment',
        definition: 'Droite perpendiculaire à ce segment en son milieu, constituant l\'axe de symétrie échangeant les deux extrémités.'
      },
      {
        term: 'Axe de symétrie',
        definition: 'Droite (D) telle que la figure se superpose exactement à elle-même par la symétrie axiale d\'axe (D).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Isométrie de la symétrie axiale',
        statement: 'La symétrie axiale conserve les distances : AB = A\'B\'.'
      },
      {
        name: 'Conservation des angles et des aires',
        statement: 'Deux figures symétriques par rapport à une droite ont exactement la même forme, les mêmes angles et la même aire.'
      },
      {
        name: 'Axes de symétrie des quadrilatères',
        statement: 'Rectangle : 2 axes (médiatrices des côtés). Losange : 2 axes (diagonales). Carré : 4 axes (2 médiatrices + 2 diagonales).'
      }
    ],
    formulas: [
      {
        name: 'Égalité des segments symétriques',
        formula: 'A\'B\' = AB',
        explanation: 'La longueur d\'un segment est invariante par réflexion axiale.'
      },
      {
        name: 'Égalité des mesures d\'angles',
        formula: '\\text{mes}\\,\\widehat{A\'B\'C\'} = \\text{mes}\\,\\widehat{ABC}',
        explanation: 'L\'angle image a la même ouverture en degrés que l\'angle initial.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Trouver l\'emplacement d\'une gare à égale distance de deux villes A et B',
        procedure: '1. Tracer le segment [AB] reliant les deux villes. 2. Tracer la médiatrice (L) du segment [AB] (à la règle et au compas). 3. L\'intersection de (L) avec la ligne ferroviaire (F) donne le point N recherché. 4. Justifier : N étant sur la médiatrice de [AB], NA = NB.',
        tip: 'Tout point de la médiatrice est à égale distance des extrémités.'
      }
    ],
    examples: [
      {
        statement: 'ABC est un triangle isocèle en A. Justifie que le symétrique du triangle ABC par rapport à la droite (AC) est un triangle isocèle en A.',
        solution: `Les symétriques des points A, B et C par rapport à la droite (AC) sont respectivement :
- A (car A appartient à l'axe (AC)) ;
- C (car C appartient à l'axe (AC)) ;
- B' (symétrique de B par rapport à (AC)).
Le symétrique du segment [AB] est [AB']. La symétrie axiale conservant les longueurs, AB' = AB.
Or le triangle ABC est isocèle en A, donc AB = AC.
Par transitivité, AB' = AC. Le triangle AB'C possède donc deux côtés de même longueur AB' et AC : il est isocèle en A.`
      }
    ],
    exercises: [
      {
        question: 'Parmi le rectangle et le losange, lequel admet ses diagonales comme axes de symétrie ?',
        correction: 'C\'est le losange dont les diagonales sont portées par ses deux axes de symétrie. Pour le rectangle, les deux axes de symétrie sont les médiatrices de ses côtés, et non ses diagonales.'
      }
    ],
    evaluationSituation: {
      context: 'Le club littéraire d\'un collège veut concevoir un logo constitué d\'un rectangle et de deux étoiles symétriques par rapport à une droite (EF). Les élèves doivent vérifier la position exacte des sommets.',
      instructions: [
        '1. Rappelle la définition de deux points symétriques par rapport à une droite (EF).',
        '2. Si un sommet de l\'étoile est à 4 cm de (EF), à quelle distance de (EF) se trouve son symétrique ?',
        '3. Si l\'angle à la pointe mesure 36°, quelle est la mesure de l\'angle de la pointe symétrique ?'
      ],
      solutionGuide: '1. Deux points A et B sont symétriques par rapport à (EF) si (EF) est la médiatrice de [AB]. 2. Le symétrique est à la même distance de l\'axe, soit 4 cm de l\'autre côté. 3. La symétrie conserve les angles, donc l\'angle mesure également 36°.'
    },
    examTraps: [
      'Croire que les diagonales d\'un rectangle sont des axes de symétrie (faux, sauf si c\'est un carré).',
      'Confondre médiatrice (perpendiculaire au milieu) et hauteur (passe par un sommet).',
      'Oublier que tout point situé sur l\'axe de symétrie est invariant (son propre symétrique).'
    ],
    quickMemo: 'Symétrie axiale = pliage le long de (D) | (D) médiatrice de [AB] | Conserve distances, angles, alignement, aires | Triangle isocèle : 1 axe | Équilatéral : 3 | Rectangle : 2 | Losange : 2 | Carré : 4.',
    keywords: ['symétrie axiale', 'médiatrice', 'axe de symétrie', 'conservation des longueurs', 'conservation des angles', 'isométrie']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 3 - ANGLES
  // ========================================================
  {
    id: 'maths-5e-angles-adjacents-opposes-somme-triangle',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 3 : Géométrie du Plan',
    lessonTitle: 'Angles adjacents, complémentaires, supplémentaires, opposés par le sommet et somme des angles d\'un triangle',
    objectifs: [
      'Identifier et caractériser deux angles adjacents (même sommet, côté commun, de part et d\'autre)',
      'Définir et calculer les angles complémentaires (somme = 90°) et supplémentaires (somme = 180°)',
      'Définir les angles opposés par le sommet et appliquer la propriété fondamentale : ils ont la même mesure',
      'Appliquer le théorème fondamental : la somme des mesures des angles d\'un triangle vaut 180°',
      'Calculer des angles inconnus dans des figures composées et justifier la nature rectangle d\'un triangle'
    ],
    fullCourseContent: `1. Angles adjacents :
- Définition : Deux angles sont adjacents lorsqu'ils remplissent trois conditions simultanées :
  1. Ils ont le même sommet ;
  2. Ils ont un côté commun (une demi-droite commune) ;
  3. Ils sont situés de part et d'autre de ce côté commun.
- Propriété d'addition : Si deux angles SRO et ORT sont adjacents de côté commun [RO), alors :
  mes(SRT) = mes(SRO) + mes(ORT).

2. Angles complémentaires et angles supplémentaires :
- Angles complémentaires : Deux angles sont dits complémentaires lorsque la somme de leurs mesures est égale à 90°.
  Exemple : Si mes(A) = 53° et mes(B) = 37°, alors mes(A) + mes(B) = 90° (A et B sont complémentaires).
  Dans un triangle rectangle, les deux angles aigus sont toujours complémentaires.
- Angles supplémentaires : Deux angles sont dits supplémentaires lorsque la somme de leurs mesures est égale à 180°.
  Exemple : Si mes(C) = 65° et mes(D) = 115°, alors mes(C) + mes(D) = 180° (C et D sont supplémentaires).
  Deux angles adjacents formant un angle plat (180°) sont supplémentaires.

3. Angles opposés par le sommet :
- Définition : Deux angles sont dits opposés par le sommet lorsqu'ils ont le même sommet et que les côtés de l'un sont les demi-droites opposées (dans le prolongement) des côtés de l'autre.
- Propriété fondamentale : Deux angles opposés par le sommet ont toujours la même mesure.
  Exemple : Si deux droites (AB) et (CD) se coupent en O, alors mes(AOC) = mes(BOD) et mes(AOD) = mes(BOC).

4. Somme des mesures des angles d'un triangle :
- Théorème universel : Dans tout triangle, la somme des mesures des trois angles est égale à 180° :
  mes(A) + mes(B) + mes(C) = 180°.
- Conséquences directes :
  * Pour calculer le 3ème angle connaissant les deux autres : mes(C) = 180° - (mes(A) + mes(B)).
  * Triangle rectangle : Il possède un angle droit (90°) et deux angles aigus complémentaires dont la somme vaut 90°.
  * Triangle équilatéral : Ses trois angles sont égaux, chacun mesure 180° / 3 = 60°.
  * Triangle isocèle : Les deux angles à la base ont la même mesure. Si l'angle au sommet principal mesure a, chaque angle à la base mesure (180° - a) / 2.`,
    definitions: [
      {
        term: 'Angles adjacents',
        definition: 'Deux angles ayant le même sommet, un côté en commun et situés de part et d\'autre de ce côté.'
      },
      {
        term: 'Angles complémentaires',
        definition: 'Deux angles dont la somme des mesures est égale à 90° (forment un angle droit lorsqu\'ils sont adjacents).'
      },
      {
        term: 'Angles supplémentaires',
        definition: 'Deux angles dont la somme des mesures est égale à 180° (forment un angle plat lorsqu\'ils sont adjacents).'
      },
      {
        term: 'Angles opposés par le sommet',
        definition: 'Deux angles ayant le même sommet et dont les côtés sont formés par deux droites sécantes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Égalité des angles opposés par le sommet',
        statement: 'Deux angles opposés par le sommet ont toujours la même mesure.'
      },
      {
        name: 'Théorème des 180° dans un triangle',
        statement: 'Dans tout triangle ABC : mes(Â) + mes(B̂) + mes(Ĉ) = 180°.'
      },
      {
        name: 'Angles du triangle rectangle',
        statement: 'Si un triangle est rectangle, alors ses deux angles aigus sont complémentaires (somme = 90°).'
      }
    ],
    formulas: [
      {
        name: 'Somme des angles d\'un triangle',
        formula: '\\text{mes}\\,\\widehat{A} + \\text{mes}\\,\\widehat{B} + \\text{mes}\\,\\widehat{C} = 180^\\circ',
        explanation: 'Permet de trouver le 3ème angle : mes(C) = 180° - (mes(A) + mes(B)).'
      },
      {
        name: 'Angles complémentaires',
        formula: '\\text{mes}\\,\\widehat{A} + \\text{mes}\\,\\widehat{B} = 90^\\circ',
        explanation: 'mes(B) = 90° - mes(A).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Démontrer qu\'un triangle est rectangle grâce aux angles',
        procedure: '1. Calculer ou identifier deux angles du triangle (par exemple via des angles opposés par le sommet ou supplémentaires). 2. Calculer le troisième angle en faisant 180° - (somme des deux autres). 3. Si la mesure trouvée est 90°, conclure que le triangle est rectangle.',
        tip: 'Vérifier aussi si deux angles ont pour somme 90° : alors le troisième vaut forcément 90°.'
      }
    ],
    examples: [
      {
        statement: 'Dans une figure, deux droites sécantes en C forment les angles opposés par le sommet ACB et ECD avec mes(ECD) = 52°. Dans le triangle ABC, mes(BAC) = 38°. Démontre que ABC est rectangle en B.',
        solution: `1. Les angles ACB et ECD sont opposés par le sommet, donc ils ont la même mesure :
mes(ACB) = mes(ECD) = 52°.
2. Dans le triangle ABC, la somme des angles vaut 180° :
mes(CBA) = 180° - (mes(ACB) + mes(BAC))
mes(CBA) = 180° - (52° + 38°) = 180° - 90° = 90°.
Puisque mes(CBA) = 90°, le triangle ABC est un triangle rectangle en B.`
      }
    ],
    exercises: [
      {
        question: 'RST est un triangle tel que mes(S) = 110° et mes(R) = 60°. Détermine la mesure de l\'angle T.',
        correction: 'Dans le triangle RST : mes(T) = 180° - (mes(S) + mes(R)) = 180° - (110° + 60°) = 180° - 170° = 10°.'
      }
    ],
    evaluationSituation: {
      context: 'Un menuisier trace deux droites (MI) et (NJ) sécantes en un point O masqué. Sur la droite (MN), l\'angle IMN mesure 55° et l\'angle de sommet N opposé par le sommet à MNJ mesure 30°. Il souhaite trouver l\'angle MON sans faire de tracé extérieur.',
      instructions: [
        '1. Détermine la mesure de l\'angle MNJ.',
        '2. Justifie que dans le triangle MNO, la mesure de l\'angle MON est égale à 95°.'
      ],
      solutionGuide: '1. L\'angle MNJ et l\'angle de 30° sont opposés par le sommet, donc mes(MNJ) = 30°. 2. Dans le triangle MNO : mes(MON) = 180° - (mes(IMN) + mes(MNJ)) = 180° - (55° + 30°) = 180° - 85° = 95°.'
    },
    examTraps: [
      'Confondre angles complémentaires (somme 90°) et supplémentaires (somme 180°).',
      'Déclarer que deux angles sont adjacents alors qu\'ils ont un côté commun mais pas le même sommet.',
      'Croire que deux angles sont opposés par le sommet simplement parce qu\'ils ont le même sommet (leurs côtés doivent être dans le prolongement l\'un de l\'autre).'
    ],
    quickMemo: 'Adjacents = même sommet + côté commun + de part et d\'autre | Complémentaires = 90° | Supplémentaires = 180° | Opposés par le sommet = même mesure | Triangle = 180°.',
    keywords: ['angles adjacents', 'angles complémentaires', 'angles supplémentaires', 'angles opposés par le sommet', 'somme angles triangle', 'angle plat']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 4 - NOMBRES DÉCIMAUX RELATIFS
  // ========================================================
  {
    id: 'maths-5e-decimaux-relatifs-operations-equations',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 4 : Calculs Algébriques',
    lessonTitle: 'Nombres décimaux relatifs : Définition, comparaison, sommes algébriques, produit et équations x + a = b',
    objectifs: [
      'Identifier l\'ensemble des nombres décimaux relatifs D, D+ (positifs) et D- (négatifs)',
      'Comparer et ranger des nombres décimaux relatifs (distance à zéro, ordre des opposés)',
      'Calculer la différence de deux décimaux relatifs : a - b = a + opp(b)',
      'Calculer une somme algébrique en regroupant les termes de même signe',
      'Effectuer le produit de deux ou plusieurs décimaux relatifs (règle des signes)',
      'Résoudre une équation du type x + a = b (solution : x = b - a)'
    ],
    fullCourseContent: `1. Présentation et notations :
- Un nombre décimal relatif est un nombre qui peut s'écrire avec un nombre fini de chiffres après la virgule, précédé d'un signe (+) ou (-).
  Exemples : (+7,5) ; (-152,047) ; (+23) ; (-4).
- L'ensemble des décimaux relatifs se note D.
  * Décimaux relatifs positifs : D+ (ex : +7,5 ou 7,5).
  * Décimaux relatifs négatifs : D- (ex : -152,047 ou -150).
- Le nombre 0 est le seul nombre décimal relatif qui est à la fois positif et négatif.
- Distance à zéro : La distance à zéro d'un nombre relatif est sa valeur sans son signe (ex : distance à zéro de -110 est 110 ; de +13,5 est 13,5).

2. Règles de comparaison :
- Deux nombres de signes contraires : Le plus petit est toujours le nombre négatif (-3 < 1,5).
- Deux nombres positifs : Le plus petit est celui qui a la plus petite distance à zéro (+9 < +13,5).
- Deux nombres négatifs : Le plus petit est celui qui a la plus grande distance à zéro (-110 < -2,5 car 110 > 2,5).
- Ordre des opposés : Si deux nombres sont rangés dans un ordre, leurs opposés sont rangés dans l'ordre inverse :
  a < b  <=>  -a > -b.

3. Opérations sur les décimaux relatifs :
- Différence : Soustraire un nombre relatif, c'est ajouter son opposé :
  a - b = a + opp(b).
  Exemples : (+2) - (+7) = (+2) + (-7) = -5 ; (-3) - (-5) = (-3) + (+5) = +2.
- Somme algébrique : Suite d'additions et de soustractions. Méthode efficace :
  1. Transformer toutes les soustractions en additions de l'opposé.
  2. Regrouper tous les nombres positifs entre eux, et tous les nombres négatifs entre eux.
  3. Calculer la somme des positifs et la somme des négatifs, puis faire la somme finale.
  Exemple : A = (+2,03) + (+7) - (+3) + (+5,8) - (+9)
            A = (+2,03) + (+7) + (-3) + (+5,8) + (-9)
            A = [(+2,03) + (+7) + (+5,8)] + [(-3) + (-9)]
            A = (+14,83) + (-12) = +2,83.
- Produit de deux décimaux relatifs :
  * Si les deux facteurs ont le même signe, le produit est positif (+) : (+7) * (+9) = +63 ; (-5) * (-6) = +30.
  * Si les deux facteurs ont des signes contraires, le produit est négatif (-) : (-5) * (+3,4) = -17.
- Produit de plusieurs décimaux relatifs :
  * On compte le nombre de facteurs négatifs :
    - Si le nombre de facteurs négatifs est PAIR, le produit est POSITIF.
    - Si le nombre de facteurs négatifs est IMPAIR, le produit est NÉGATIF.
  * On multiplie ensuite les distances à zéro.
  * Si l'un des facteurs est 0, le produit est nul : T = (2,1) * 0 * (-45) = 0.

4. Équation du type x + a = b :
- Définition : Égalité comportant une inconnue x et deux nombres décimaux relatifs connus a et b.
- Propriété de résolution : L'équation x + a = b d'inconnue x admet pour unique solution le nombre :
  x = b - a = b + opp(a).
  Exemple : Résoudre x + (-5) = -2
            x = (-2) - (-5) = (-2) + (+5) = +3.
            Vérification : (+3) + (-5) = -2 (Vrai). Conclusion : +3 est la solution.`,
    definitions: [
      {
        term: 'Nombre décimal relatif',
        definition: 'Nombre comportant un nombre fini de chiffres après la virgule, muni d\'un signe positif (+) ou négatif (-).'
      },
      {
        term: 'Somme algébrique',
        definition: 'Suite d\'additions et de soustractions portant sur des nombres relatifs.'
      },
      {
        term: 'Équation x + a = b',
        definition: 'Égalité algébrique dont on recherche la valeur de l\'inconnue x satisfaisant la relation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la différence',
        statement: 'a - b = a + (-b).'
      },
      {
        name: 'Règle des signes pour la multiplication',
        statement: '(+) * (+) = (+) ; (-) * (-) = (+) ; (+) * (-) = (-) ; (-) * (+) = (-).'
      },
      {
        name: 'Produit de plusieurs facteurs',
        statement: 'Nombre de facteurs négatifs pair -> résultat positif. Nombre impair -> résultat négatif.'
      },
      {
        name: 'Solution de x + a = b',
        statement: 'x = b - a.'
      }
    ],
    formulas: [
      {
        name: 'Différence de relatifs',
        formula: 'a - b = a + \\text{opp}(b)',
        explanation: 'Transformation de la soustraction en addition de l\'opposé.'
      },
      {
        name: 'Résolution d\'équation',
        formula: 'x + a = b \\iff x = b - a',
        explanation: 'Formule explicite de la solution.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le produit P = (-2) * (+5) * (-4) * (-2)',
        procedure: '1. Compter les facteurs négatifs : il y a 3 facteurs négatifs (-2, -4, -2). 2. 3 est impair, donc le signe du produit est NÉGATIF (-). 3. Multiplier les distances à zéro : 2 * 5 * 4 * 2 = 80. 4. Conclure : P = -80.',
        tip: 'Compter d\'abord les signes "moins" avant de faire les calculs numériques.'
      }
    ],
    examples: [
      {
        statement: 'Résous l\'équation 8,5 = x + (-4,9).',
        solution: `L'équation s'écrit x + (-4,9) = 8,5.
x = 8,5 - (-4,9)
x = 8,5 + (+4,9)
x = 13,4.
Vérification : 13,4 + (-4,9) = 8,5.
Conclusion : 13,4 est la solution.`
      }
    ],
    exercises: [
      {
        question: 'Le philosophe grec Platon, qui a vécu 80 ans, est mort en 348 avant Jésus-Christ (-348). Détermine son année de naissance.',
        correction: `Soit x l'année de naissance de Platon.
Son âge à sa mort donne l'équation : x + 80 = -348.
x = -348 - 80 = -428.
Platon est donc né en 428 avant Jésus-Christ.`
      }
    ],
    evaluationSituation: {
      context: 'Les températures suivantes ont été relevées dans six villes : Besançon (-15°C), Calais (-12°C), Dieppe (-8°C), Evian (-17°C), Grenoble (-20°C), Strasbourg (-7°C), Paris (-2°C). Une personne en convalescence souhaite séjourner dans la ville où il fait le moins froid.',
      instructions: [
        '1. Range ces températures par ordre croissant.',
        '2. Identifie la ville que doit choisir cette personne.'
      ],
      solutionGuide: '1. Ordre croissant : -20 < -17 < -15 < -12 < -8 < -7 < -2. 2. La température la plus élevée est -2°C, correspondant à Paris.'
    },
    examTraps: [
      'Comparer deux nombres négatifs en croyant que le plus grand est celui qui a le plus grand chiffre (-20 > -2 est faux, -20 < -2).',
      'Confondre la règle des signes de l\'addition (garde le signe du plus fort) et celle de la multiplication (moins par moins donne plus).',
      'Oublier de changer le signe lors du passage de a de l\'autre côté du signe égal dans x + a = b.'
    ],
    quickMemo: 'a - b = a + opp(b) | Négatifs : plus la distance à zéro est grande, plus il est petit (-10 < -2) | Multiplications : pair de (-) donne (+), impair donne (-) | x + a = b => x = b - a.',
    keywords: ['décimaux relatifs', 'somme algébrique', 'distance à zéro', 'règle des signes', 'opposé', 'équation x + a = b']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 5 - SEGMENTS ET MÉDIATRICE
  // ========================================================
  {
    id: 'maths-5e-segments-caracterisation-mediatrice-compas',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 5 : Géométrie du Plan',
    lessonTitle: 'Caractérisation d\'un segment, propriété métrique et médiatrice au compas',
    objectifs: [
      'Caractériser l\'appartenance d\'un point à un segment par la relation métrique : M in [AB] <=> AM + MB = AB',
      'Caractériser la médiatrice d\'un segment par l\'équidistance : M appartient à la médiatrice de [AB] <=> MA = MB',
      'Construire la médiatrice et le milieu d\'un segment à la règle graduée et au compas',
      'Démontrer l\'alignement ou l\'appartenance de points à la médiatrice'
    ],
    fullCourseContent: `1. Caractérisation d'un segment :
- Propriété 1 (sens direct) : A, B et M sont trois points du plan.
  Si M appartient au segment [AB], alors AM + MB = AB.
- Propriété 2 (sens réciproque) : A, B et M sont trois points du plan.
  Si AM + MB = AB, alors le point M appartient au segment [AB] (et les points A, M, B sont alignés dans cet ordre).
  Exemple : Si PR = 5, RQ = 3 et PQ = 8, comme PR + RQ = 5 + 3 = 8 = PQ, alors R appartient au segment [PQ].
  Si PR = 3, RQ = 7 et PQ = 4, PR + RQ = 10 != 4, donc R n'appartient pas à [PQ].

2. Caractérisation de la médiatrice d'un segment :
- Définition : La médiatrice d'un segment [AB] est la droite perpendiculaire à (AB) passant par le milieu de [AB].
- Propriété 1 (équidistance - sens direct) :
  Si un point M appartient à la médiatrice de [AB], alors il est équidistant des extrémités A et B : MA = MB.
- Propriété 2 (sens réciproque) :
  Si un point M est équidistant des extrémités A et B (MA = MB), alors M appartient à la médiatrice de [AB].
- Conséquence : Pour prouver qu'une droite (D) est la médiatrice de [AB], il suffit de prouver que deux points distincts de (D) sont équidistants de A et B.

3. Construction de la médiatrice au compas et à la règle :
Programme de construction :
1. Tracer le segment [AB].
2. Prendre un écartement de compas strictement supérieur à la moitié de la longueur AB.
3. Piquer le compas en A et tracer un arc de cercle de part et d'autre de la droite (AB).
4. En conservant le même écartement, piquer en B et tracer un arc de cercle de part et d'autre de (AB) coupant les premiers arcs en deux points P et Q.
5. Tracer la droite (PQ) à la règle : (PQ) est la médiatrice de [AB], et elle coupe [AB] en son milieu M.`,
    definitions: [
      {
        term: 'Segment [AB]',
        definition: 'Ensemble des points situés sur la droite (AB) entre A et B inclusivement, caractérisé par AM + MB = AB.'
      },
      {
        term: 'Médiatrice d\'un segment',
        definition: 'Lieu géométrique des points du plan situés à égale distance des deux extrémités du segment.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Caractérisation métrique du segment',
        statement: 'M in [AB] <=> AM + MB = AB.'
      },
      {
        name: 'Caractérisation de la médiatrice',
        statement: 'M appartient à la médiatrice de [AB] <=> MA = MB.'
      },
      {
        name: 'Point de concours des médiatrices',
        statement: 'Les médiatrices des côtés d\'un triangle sont concourantes en un point équidistant des trois sommets.'
      }
    ],
    formulas: [
      {
        name: 'Équidistance de la médiatrice',
        formula: 'MA = MB',
        explanation: 'Distance de M à A égale à la distance de M à B.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construction au compas de la médiatrice d\'un segment [CK] de 6 cm',
        procedure: '1. Tracer le segment [CK] de 6 cm. 2. Écarter le compas à 4 cm (> 3 cm). 3. Tracer un arc depuis C au-dessus et en-dessous de [CK]. 4. Tracer un arc depuis K avec le même rayon coupant les arcs précédents. 5. Relier les deux intersections à la règle.',
        tip: 'Ne jamais modifier l\'écartement du compas entre les tracés depuis C et depuis K.'
      }
    ],
    examples: [
      {
        statement: 'Les droites (D1) et (D2) sont les médiatrices respectives des segments [AB] et [AC] d\'un triangle ABC. Elles se coupent au point E. Justifie que la médiatrice (D3) du segment [BC] passe aussi par E.',
        solution: `E appartient à la médiatrice de [AB], donc EA = EB.
E appartient à la médiatrice de [AC], donc EA = EC.
Par suite : EB = EA = EC, d'où EB = EC.
Comme EB = EC, le point E est équidistant de B et C, donc E appartient à la médiatrice de [BC].
Par conséquent, la médiatrice (D3) du segment [BC] passe par E.`
      }
    ],
    exercises: [
      {
        question: '[AB] est un segment de longueur 7 cm et M in [AB] avec AM = 4 cm. Calcule MB.',
        correction: 'Puisque M in [AB], AM + MB = AB. Donc MB = AB - AM = 7 - 4 = 3 cm.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une réunion, on propose de construire un point d\'eau O situé à égale distance de trois bâtiments E, F et G d\'un établissement.',
      instructions: [
        '1. Justifie que si O appartient à la médiatrice de [EF] et à celle de [FG], alors OE = OF = OG.',
        '2. Conclus sur la position du point d\'eau O.'
      ],
      solutionGuide: '1. O in médiatrice de [EF] => OE = OF. O in médiatrice de [FG] => OF = OG. Donc OE = OF = OG. 2. Le point d\'eau O est bien situé à égale distance des trois bâtiments E, F et G (centre du cercle circonscrit au triangle EFG).'
    },
    examTraps: [
      'Prendre un écartement de compas inférieur à la moitié du segment (les arcs ne se couperont jamais).',
      'Confondre M in [AB] (AM + MB = AB) et M milieu de [AB] (AM = MB et AM + MB = AB).'
    ],
    quickMemo: 'M in [AB] <=> AM + MB = AB | Médiatrice = perpendiculaire au milieu <=> MA = MB | 3 médiatrices se coupent au centre du cercle circonscrit.',
    keywords: ['caractérisation du segment', 'médiatrice', 'équidistance', 'compas et règle', 'milieu', 'cercle circonscrit']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 6 - FRACTIONS
  // ========================================================
  {
    id: 'maths-5e-fractions-operations-puissances-encadrements',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 6 : Calculs Algébriques',
    lessonTitle: 'Fractions : Différence, produit par un entier et par une fraction, puissances et encadrements décimaux',
    objectifs: [
      'Calculer la différence de deux fractions de même dénominateur ou de dénominateurs différents',
      'Calculer le produit d\'une fraction par un nombre entier naturel k * (a/b) = (k*a)/b',
      'Calculer le produit de deux fractions (a/b) * (c/d) = (a*c)/(b*d)',
      'Définir et calculer la puissance entière d\'une fraction (a/b)^n = a^n / b^n',
      'Encadrer une fraction par deux nombres décimaux consécutifs d\'ordre 0 (unité), 1 (dixième), 2 (centième), 3 (millième)'
    ],
    fullCourseContent: `1. Différence de deux fractions :
- Cas 1 : Même dénominateur
  Pour soustraire deux fractions de même dénominateur, on soustrait les numérateurs et on conserve le dénominateur commun :
  a/c - b/c = (a - b) / c  (avec a >= b et c != 0).
  Exemple : 7/5 - 4/5 = (7 - 4) / 5 = 3/5.
- Cas 2 : Dénominateurs différents
  On réduit les fractions au même dénominateur (en cherchant un multiple commun), puis on applique la règle précédente.
  Exemple : 9/4 - 5/3 = (9*3)/(4*3) - (5*4)/(3*4) = 27/12 - 20/12 = 7/12.
  Exemple 2 : 7/5 - 4/15 = 21/15 - 4/15 = 17/15.

2. Produit de fractions :
- Produit d'une fraction par un nombre entier naturel :
  k * (a/b) = (k * a) / b.
  Exemple : 7 * (11/20) = 77/20 ; (8/5) * 3 = 24/5.
- Produit de deux fractions :
  Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux :
  (a/b) * (c/d) = (a * c) / (b * d).
  Exemple : (7/4) * (5/3) = (7*5)/(4*3) = 35/12.
  Exemple avec simplification : (8/21) * (12/4) = (8 * 12) / (21 * 4) = 96/84 = 8/7.

3. Puissance entière d'une fraction :
- Définition : (a/b)^n désigne le produit de n fractions égales à a/b :
  (a/b)^n = (a/b) * (a/b) * ... * (a/b) (n facteurs).
- Propriété fondamentale : (a/b)^n = a^n / b^n.
  Exemples : (4/9)^2 = 4^2 / 9^2 = 16/81.
             (3/2)^5 = 3^5 / 2^5 = 243/32.
             (7/5)^2 = 49/25 ; (1/2)^4 = 1/16 ; (5/4)^3 = 125/64.
- Conventions : (a/b)^0 = 1 et (a/b)^1 = a/b.

4. Encadrement d'une fraction par des nombres décimaux :
Pour encadrer une fraction a/b par deux décimaux consécutifs d'un ordre donné :
1. On effectue la division décimale de a par b jusqu'à l'ordre souhaité (1 chiffre après la virgule pour le dixième, 2 pour le centième, 3 pour le millième).
2. On prend la valeur approchée par défaut et celle par excès.
Exemple pour 48/7 : 48 / 7 = 6,857...
- À l'unité (ordre 0) : 6 < 48/7 < 7.
- Au dixième (ordre 1) : 6,8 < 48/7 < 6,9.
- Au centième (ordre 2) : 6,85 < 48/7 < 6,86.
- Au millième (ordre 3) : 6,857 < 48/7 < 6,858.`,
    definitions: [
      {
        term: 'Fraction',
        definition: 'Écriture a/b représentant le quotient exact de deux entiers naturels avec b non nul.'
      },
      {
        term: 'Puissance d\'une fraction',
        definition: '(a/b)^n = a^n / b^n, obtenue en élevant séparément le numérateur et le dénominateur à l\'exposant n.'
      },
      {
        term: 'Encadrement d\'ordre n',
        definition: 'Encadrement par deux nombres décimaux consécutifs ayant n chiffres après la virgule (écart de 10^(-n)).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Différence de fractions',
        statement: 'a/c - b/c = (a-b)/c. Si dénominateurs différents, réduire au même dénominateur.'
      },
      {
        name: 'Multiplication de fractions',
        statement: '(a/b) * (c/d) = (a*c)/(b*d).'
      },
      {
        name: 'Puissance d\'un quotient',
        statement: '(a/b)^n = a^n / b^n.'
      }
    ],
    formulas: [
      {
        name: 'Produit de fractions',
        formula: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
        explanation: 'Multiplication directe des numérateurs et dénominateurs.'
      },
      {
        name: 'Puissance d\'une fraction',
        formula: '\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}',
        explanation: 'Élévation des deux termes à la puissance n.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer (3/2) * (7/5) - 2/10',
        procedure: '1. Produit prioritaire : (3*7)/(2*5) = 21/10. 2. Soustraction avec même dénominateur 10 : 21/10 - 2/10 = (21 - 2)/10 = 19/10.',
        tip: 'Effectuer toujours les multiplications avant les additions et soustractions.'
      }
    ],
    examples: [
      {
        statement: 'Dans un collège de 64 élèves de 5ème, l\'effectif augmente chaque année de façon à représenter 3/2 de l\'effectif de l\'année précédente. Calcule l\'effectif après 2 ans (en 2018 par rapport à 2016).',
        solution: `1. Proportion au bout de 2 ans : (3/2) * (3/2) = (3/2)^2 = 9/4.
2. Effectif en 2018 : 64 * (9/4) = (64 * 9) / 4 = 16 * 9 = 144 élèves.`
      }
    ],
    exercises: [
      {
        question: 'Un restaurant sert 3/7 des clients avec le plat A, et 1/4 avec le plat B. Détermine la proportion de clients ayant choisi le plat C.',
        correction: `Somme des parts A et B : 3/7 + 1/4 = 12/28 + 7/28 = 19/28.
Part du plat C : 1 - 19/28 = 28/28 - 19/28 = 9/28.`
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances, deux élèves voyagent à vélo. Ils parcourent 9/13 du trajet reliant la sous-préfecture à leur village lorsque leur pneu crève. Ils poursuivent le reste du trajet à pied.',
      instructions: [
        '1. Écris l\'expression permettant de trouver la fraction du trajet parcouru à pied.',
        '2. Calcule cette fraction sous forme irréductible.'
      ],
      solutionGuide: '1. Le trajet total représente l\'unité 1 = 13/13. La fraction restante à pied est 1 - 9/13. 2. 1 - 9/13 = 13/13 - 9/13 = 4/13 du trajet.'
    },
    examTraps: [
      'Additionner ou soustraire les dénominateurs (ex: 7/5 - 4/5 = 3/0 est une aberration mathématique grave).',
      'Oublier de réduire au même dénominateur avant d\'effectuer une soustraction.',
      'Pour (a/b)^n, élever seulement le numérateur à la puissance n en oubliant le dénominateur.'
    ],
    quickMemo: 'a/c - b/c = (a-b)/c | (a/b) * (c/d) = (ac)/(bd) | (a/b)^n = a^n / b^n | Encadrement au centième : 2 chiffres après la virgule.',
    keywords: ['fractions', 'soustraction de fractions', 'produit de fractions', 'puissance de fraction', 'encadrement décimal', 'proportion']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 7 - TRIANGLES ET DROITES REMARQUABLES
  // ========================================================
  {
    id: 'maths-5e-triangles-droites-remarquables-inegalites',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 7 : Géométrie du Plan',
    lessonTitle: 'Triangles : Droites particulières (médiane, médiatrice, hauteur, bissectrice), triangles particuliers et inégalités triangulaires',
    objectifs: [
      'Définir et construire les 4 droites particulières d\'un triangle : médiane, médiatrice, hauteur et bissectrice',
      'Identifier et utiliser les propriétés des triangles isocèle, équilatéral et rectangle',
      'Reconnaître un triangle particulier à partir de ses axes de symétrie ou de ses angles',
      'Énoncer et appliquer l\'inégalité triangulaire pour tester l\'existence d\'un triangle'
    ],
    fullCourseContent: `1. Droites particulières d'un triangle :
- La Médiane : Droite passant par un sommet et par le milieu du côté opposé.
  Un triangle possède 3 médianes concourantes en son centre de gravité G.
- La Médiatrice : Droite perpendiculaire à un côté en son milieu.
  Un triangle possède 3 médiatrices concourantes au centre O du cercle circonscrit.
- La Hauteur : Droite passant par un sommet et perpendiculaire au support du côté opposé.
  Un triangle possède 3 hauteurs concourantes en son orthocentre H.
- La Bissectrice : Demi-droite (ou droite) passant par un sommet et partageant l'angle en deux angles de même mesure.
  Un triangle possède 3 bissectrices concourantes au centre I du cercle inscrit.

2. Triangles particuliers et leurs propriétés :
- Triangle isocèle :
  * Possède 2 côtés de même longueur.
  * Les angles à la base ont la même mesure : mes(B) = mes(C).
  * Possède 1 axe de symétrie : la médiatrice de la base, qui est simultanément la hauteur, la médiane et la bissectrice issues du sommet principal.
- Triangle équilatéral :
  * Possède 3 côtés de même longueur.
  * Ses 3 angles ont la même mesure, égale à 60°.
  * Possède 3 axes de symétrie : les 3 médiatrices des côtés (qui sont aussi les 3 hauteurs, médianes et bissectrices).
- Triangle rectangle :
  * Possède un angle droit (90°).
  * Ses deux angles aigus sont complémentaires : mes(B) + mes(C) = 90°.
  * Le cercle circonscrit a pour diamètre son hypoténuse ; son centre est le milieu de l'hypoténuse.

3. Règles pour reconnaître un triangle particulier :
- Si un triangle a un axe de symétrie -> c'est un triangle isocèle.
- Si un triangle a deux angles de même mesure -> c'est un triangle isocèle.
- Si un triangle a trois axes de symétrie -> c'est un triangle équilatéral.
- Si un triangle a trois angles de même mesure (60°) -> c'est un triangle équilatéral.
- Si un triangle isocèle possède un angle de 60° -> c'est un triangle équilatéral.
- Si un triangle a deux angles complémentaires -> c'est un triangle rectangle.

4. Inégalités triangulaires :
- Propriété fondamentale : Dans tout triangle, la longueur de chaque côté est strictement inférieure à la somme des longueurs des deux autres côtés :
  Dans ABC : AB < AC + BC  et  AC < AB + BC  et  BC < AB + AC.
- Règle pratique de constructibilité : Pour savoir si l'on peut construire un triangle à partir de 3 longueurs données, il suffit de vérifier que la plus grande longueur est strictement inférieure à la somme des deux plus petites.
  * Exemple 1 : 7 cm, 4 cm, 5 cm. Le plus grand est 7. Or 4 + 5 = 9 > 7. Le triangle existe et est constructible.
  * Exemple 2 : 9 cm, 3 cm, 5 cm. Le plus grand est 9. Or 3 + 5 = 8 < 9. Le triangle est impossible à construire.
  * Exemple 3 : Si AB = AC + CB, les points A, C, B sont alignés (triangle aplati).`,
    definitions: [
      {
        term: 'Médiane',
        definition: 'Droite reliant un sommet d\'un triangle au milieu du côté opposé.'
      },
      {
        term: 'Hauteur',
        definition: 'Droite passant par un sommet et perpendiculaire au côté opposé.'
      },
      {
        term: 'Inégalité triangulaire',
        definition: 'Condition géométrique stipulant que la plus grande longueur doit être inférieure à la somme des deux autres pour former un triangle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Axe de symétrie du triangle isocèle',
        statement: 'Dans un triangle isocèle, la hauteur, la médiane, la bissectrice issues du sommet principal et la médiatrice de la base sont confondues en une seule droite qui est l\'axe de symétrie.'
      },
      {
        name: 'Angles de l\'équilatéral',
        statement: 'Chaque angle d\'un triangle équilatéral mesure exactement 60°.'
      },
      {
        name: 'Critère de constructibilité',
        statement: 'Un triangle est constructible si et seulement si la plus grande dimension est inférieure à la somme des deux autres.'
      }
    ],
    formulas: [
      {
        name: 'Inégalité triangulaire',
        formula: 'BC < AB + AC',
        explanation: 'Tout côté est strictement inférieur à la somme des deux autres.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tester si un triangle de côtés 3,9 cm, 1,2 cm et 2,7 cm est constructible',
        procedure: '1. Identifier le plus grand côté : 3,9 cm. 2. Faire la somme des deux autres : 1,2 + 2,7 = 3,9 cm. 3. Comparer : 3,9 n\'est pas strictement inférieur à 3,9 (égalité). 4. Conclure : On ne peut pas construire un vrai triangle, les points sont alignés (triangle aplati).',
        tip: 'La somme des deux plus petits doit être STRICTEMENT supérieure au plus grand.'
      }
    ],
    examples: [
      {
        statement: 'Dans un triangle ABC isocèle en A, l\'angle B mesure 65°. Détermine la mesure de l\'angle C et celle de l\'angle A.',
        solution: `1. ABC étant isocèle en A, les angles à la base ont la même mesure :
mes(C) = mes(B) = 65°.
2. La somme des angles d'un triangle vaut 180° :
mes(A) = 180° - (mes(B) + mes(C)) = 180° - (65° + 65°) = 180° - 130° = 50°.`
      }
    ],
    exercises: [
      {
        question: 'Un triangle possède des angles de 42° et 48°. Quelle est sa nature exacte ?',
        correction: 'La somme de ces deux angles vaut 42° + 48° = 90°. Les deux angles sont donc complémentaires. Le troisième angle mesure 180° - 90° = 90°. Ce triangle est donc un triangle rectangle.'
      }
    ],
    evaluationSituation: {
      context: 'Un trésor est caché au pied d\'un ancien baobab disparu dans le village de Langossou. Le chef se souvient que ce baobab était situé à égale distance de la marre (M), du puits (P) et du rocher (R).',
      instructions: [
        '1. Nomme les droites particulières du triangle PMR qu\'il faut tracer pour retrouver l\'emplacement exact du trésor.',
        '2. Justifie ta réponse par les propriétés géométriques.'
      ],
      solutionGuide: '1. Il faut tracer les médiatrices des côtés du triangle PMR. 2. Le point de concours des trois médiatrices d\'un triangle est le centre du cercle circonscrit, qui est équidistant des trois sommets (P, M et R).'
    },
    examTraps: [
      'Confondre médiane (milieu) et hauteur (perpendiculaire) : elles ne sont confondues que dans les triangles isocèles ou équilatéraux.',
      'Oublier que les angles d\'un triangle équilatéral valent toujours 60°.',
      'Tenter de construire un triangle dont la plus grande longueur dépasse la somme des deux autres.'
    ],
    quickMemo: 'Médiane = vers le milieu | Hauteur = perpendiculaire | Bissectrice = coupe l\'angle en 2 | Médiatrice = perpendiculaire au milieu | Isocèle : 1 axe, angles base égaux | Équilatéral : 3 axes, 60° | Inégalité : c < a + b.',
    keywords: ['médiane', 'hauteur', 'bissectrice', 'médiatrice', 'triangle isocèle', 'triangle équilatéral', 'inégalité triangulaire']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 8 - CERCLE ET DISQUE
  // ========================================================
  {
    id: 'maths-5e-cercle-disque-circonscrit-triangle-rectangle',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 8 : Géométrie du Plan',
    lessonTitle: 'Cercle et Disque : Positions de points, cercle circonscrit et théorème du triangle rectangle inscrit',
    objectifs: [
      'Caractériser les positions relatives d\'un point par rapport à un cercle C(O ; r) : intérieur OM < r, sur le cercle OM = r, extérieur OM > r',
      'Définir le disque D(O ; r) : ensemble des points M tels que OM <= r',
      'Définir et construire le cercle circonscrit à un triangle (concours des 3 médiatrices)',
      'Énoncer et appliquer le théorème du triangle rectangle inscrit dans un demi-cercle'
    ],
    fullCourseContent: `1. Cercle et positions de points :
Soit C un cercle de centre O et de rayon r, et M un point quelconque du plan :
- Point intérieur au cercle : M est à l'intérieur de C <=> OM < r.
- Point sur le cercle : M appartient au cercle C <=> OM = r.
- Point extérieur au cercle : M est à l'extérieur de C <=> OM > r.

2. Disque :
- Définition : Le disque de centre A et de rayon r, noté D(A, r), est l'ensemble des points M du plan situés à une distance inférieure ou égale à r de A :
  M in D(A, r) <=> AM <= r (c'est-à-dire AM < r ou AM = r).
- Remarque : Tout point appartenant au cercle C(A, r) appartient également au disque D(A, r). Le cercle est la frontière du disque.

3. Cercle circonscrit à un triangle :
- Définition : Le cercle qui passe par les trois sommets d'un triangle ABC est appelé le cercle circonscrit à ce triangle. On dit aussi que le triangle ABC est inscrit dans le cercle.
- Propriété du centre : Le centre du cercle circonscrit est le point de concours des trois médiatrices des côtés du triangle.
  (En pratique, le tracé de deux médiatrices suffit pour trouver ce centre).

4. Cercle circonscrit à un triangle rectangle (Théorème fondamental) :
- Propriété 1 (triangle rectangle -> cercle) :
  Si un triangle ABC est rectangle en A, alors son cercle circonscrit a pour diamètre son hypoténuse [BC].
  Son centre est le milieu de l'hypoténuse [BC], et le rayon vaut BC / 2.
- Propriété 2 (réciproque : cercle de diamètre un côté -> triangle rectangle) :
  Si un triangle ABC est inscrit dans un cercle de diamètre l'un de ses côtés [BC], alors ce triangle est rectangle au sommet opposé A.`,
    definitions: [
      {
        term: 'Cercle C(O, r)',
        definition: 'Ensemble de tous les points du plan situés exactement à la distance r du centre O (OM = r).'
      },
      {
        term: 'Disque D(O, r)',
        definition: 'Ensemble de tous les points du plan situés à une distance inférieure ou égale à r du centre O (OM <= r).'
      },
      {
        term: 'Cercle circonscrit',
        definition: 'Unique cercle passant par les trois sommets d\'un triangle, ayant pour centre l\'intersection des médiatrices.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Position d\'un point par rapport au cercle',
        statement: 'OM < r : intérieur ; OM = r : sur le cercle ; OM > r : extérieur.'
      },
      {
        name: 'Triangle rectangle et cercle',
        statement: 'ABC rectangle en A <=> ABC inscrit dans le cercle de diamètre [BC].'
      },
      {
        name: 'Médiane issue de l\'angle droit',
        statement: 'Dans un triangle rectangle, la longueur de la médiane issue de l\'angle droit vaut la moitié de la longueur de l\'hypoténuse.'
      }
    ],
    formulas: [
      {
        name: 'Rayon du cercle circonscrit au triangle rectangle',
        formula: 'R = \\frac{\\text{Hypoténuse}}{2} = \\frac{BC}{2}',
        explanation: 'Le centre est le milieu de l\'hypoténuse.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tracer le cercle circonscrit à un triangle rectangle ABC en A',
        procedure: '1. Repérer l\'angle droit en A et identifier l\'hypoténuse [BC]. 2. Déterminer le milieu O du segment [BC] (à la règle ou au compas). 3. Pointer le compas en O avec un écartement OB = OC = OA. 4. Tracer le cercle : il passe automatiquement par A, B et C.',
        tip: 'Inutile de tracer les 3 médiatrices pour un triangle rectangle, le milieu de l\'hypoténuse est directement le centre.'
      }
    ],
    examples: [
      {
        statement: 'Un cercle C a pour centre I et rayon 6 cm. Où se situent les points E (IE = 6 cm), F (IF = 5,9 cm) et G (IG = 7 cm) ?',
        solution: `- IE = 6 cm = r, donc E est situé sur le cercle C.
- IF = 5,9 cm < 6 cm, donc F est situé à l'intérieur du cercle C.
- IG = 7 cm > 6 cm, donc G est situé à l'extérieur du cercle C.`
      }
    ],
    exercises: [
      {
        question: '(C) est un cercle de diamètre [BC]. H est un point de (C) distinct de B et C. Quelle est la nature du triangle BCH ?',
        correction: 'BCH est un triangle inscrit dans le cercle (C) ayant pour diamètre son côté [BC]. D\'après la propriété du cercle circonscrit, le triangle BCH est rectangle en H.'
      }
    ],
    evaluationSituation: {
      context: 'Trois villages de la Mé, Assikoi (A), Bassazin (B) et Nyan (N) sont distants de AB = 6 km, BN = 4 km et NA = 5 km. Les chefs conviennent d\'implanter une maternité à égale distance des trois villages.',
      instructions: [
        '1. Nomme et construis le point I représentant l\'emplacement de la maternité.',
        '2. Justifie que les trois villages appartiennent à un même cercle centré en I.'
      ],
      solutionGuide: '1. Le point I est le point de concours des médiatrices du triangle ABN. 2. I étant sur la médiatrice de [AB], IA = IB. I étant sur la médiatrice de [BN], IB = IN. Donc IA = IB = IN = R. Les trois villages sont situés sur le cercle circonscrit de centre I et de rayon R.'
    },
    examTraps: [
      'Confondre cercle (ligne fermée OM = r) et disque (surface pleine OM <= r).',
      'Penser que le centre du cercle circonscrit est toujours à l\'intérieur du triangle (si le triangle a un angle obtus, le centre est à l\'extérieur ; si rectangle, il est sur l\'hypoténuse).'
    ],
    quickMemo: 'Cercle : OM = r | Disque : OM <= r | Cercle circonscrit = concours des médiatrices | Triangle rectangle <=> inscrit dans un cercle de diamètre son hypoténuse.',
    keywords: ['cercle', 'disque', 'cercle circonscrit', 'triangle rectangle inscrit', 'hypoténuse', 'médiatrices']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 9 - PROPORTIONNALITÉ
  // ========================================================
  {
    id: 'maths-5e-proportionnalite-vitesse-debit-masse-volumique-reperage',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 9 : Organisation et Traitement de Données',
    lessonTitle: 'Proportionnalité : Coefficients (vitesse, débit, masse volumique) et représentation graphique dans un repère',
    objectifs: [
      'Définir et calculer la vitesse moyenne v = d / t et convertir les unités (km/h <-> m/s)',
      'Définir et calculer le débit moyen D = V / t (L/min, m3/s)',
      'Définir et calculer la masse volumique Mv = m / V (g/cm3, kg/m3)',
      'Repérer un point dans le plan par ses coordonnées (abscisse, ordonnée) dans un repère (O, I, J)',
      'Reconnaître graphiquement une situation de proportionnalité (droite passant par l\'origine)'
    ],
    fullCourseContent: `1. Exemples de coefficients de proportionnalité :
- Vitesse moyenne : Quotient de la distance parcourue (d) par la durée du parcours (t) :
  v = d / t  <=>  d = v * t  <=>  t = d / v.
  Unités usuelles : km/h, m/s, m/min.
  Règle de conversion : Pour passer de km/h en m/s, on divise par 3,6. Pour passer de m/s en km/h, on multiplie par 3,6.
  Exemple : 42 km en 3 h -> v = 42/3 = 14 km/h = 42000 m / (3 * 3600 s) = 3,89 m/s.
- Débit moyen : Quotient du volume de liquide écoulé (V) par la durée de l'écoulement (t) :
  D = V / t  <=>  V = D * t  <=>  t = V / D.
  Unités usuelles : L/min, L/s, m3/s. (Rappel : 1 m3 = 1 000 L).
  Exemple : Une pompe remplit une cuve de 15 000 L en 5 min -> D = 15 000 / 5 = 3 000 L/min.
- Masse volumique : Quotient de la masse d'un corps (m) par son volume (V) :
  Mv = m / V  <=>  m = Mv * V  <=>  V = m / Mv.
  Unités usuelles : g/cm3, kg/dm3, kg/m3.
  Exemple : Un corps de masse 85 g occupe 10 cm3 -> Mv = 85 / 10 = 8,5 g/cm3.

2. Repérage dans le plan :
- Repère (O, I, J) :
  * O est l'origine du repère.
  * L'axe horizontal (OI) est l'axe des abscisses.
  * L'axe vertical (OJ) est l'axe des ordonnées.
- Tout point A du plan est repéré par un couple unique de coordonnées (x ; y) :
  x est l'abscisse (sur l'axe horizontal) et y est l'ordonnée (sur l'axe vertical). On note A(x ; y).

3. Représentation graphique d'une situation de proportionnalité :
- Règle caractéristique fondamentale : Une situation de proportionnalité est représentée graphiquement par des points alignés sur une droite passant par l'origine O(0 ; 0) du repère.
- Réciproquement, si la courbe n'est pas une droite ou si la droite ne passe pas par l'origine, la situation n'est pas proportionnelle.`,
    definitions: [
      {
        term: 'Vitesse moyenne',
        definition: 'Distance parcourue divisée par la durée du parcours (v = d / t).'
      },
      {
        term: 'Débit moyen',
        definition: 'Volume de fluide écoulé divisé par le temps d\'écoulement (D = V / t).'
      },
      {
        term: 'Masse volumique',
        definition: 'Masse d\'une substance par unité de volume (Mv = m / V).'
      },
      {
        term: 'Repère du plan',
        definition: 'Système formé par deux axes sécants en une origine O, gradués à partir des points unités I et J.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Caractérisation graphique de la proportionnalité',
        statement: 'Un tableau représente une situation de proportionnalité si et seulement si ses points sont alignés sur une droite passant par l\'origine.'
      },
      {
        name: 'Conversion km/h et m/s',
        statement: '1 m/s = 3,6 km/h. Vitesse en m/s = Vitesse en km/h divisée par 3,6.'
      }
    ],
    formulas: [
      {
        name: 'Vitesse moyenne',
        formula: 'v = \\frac{d}{t}',
        explanation: 'd en km et t en h donne v en km/h ; d en m et t en s donne v en m/s.'
      },
      {
        name: 'Débit moyen',
        formula: 'D = \\frac{V}{t}',
        explanation: 'V en litres et t en minutes donne D en L/min.'
      },
      {
        name: 'Masse volumique',
        formula: 'M_v = \\frac{m}{V}',
        explanation: 'm en g et V en cm3 donne Mv en g/cm3.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le temps de remplissage d\'une citerne',
        procedure: '1. Calculer le volume en m3 : V = Longueur * Largeur * Hauteur. 2. Convertir en litres (1 m3 = 1000 L). 3. Appliquer t = V / D. 4. Convertir les secondes en minutes et heures (diviser par 60).',
        tip: 'Vérifier toujours l\'homogénéité des unités (litres avec L/s, mètres avec m3).'
      }
    ],
    examples: [
      {
        statement: 'Un avion effectue un vol de 1 200 km à la vitesse moyenne de 800 km/h. Calcule la durée de son vol.',
        solution: `Formule : t = d / v.
t = 1200 / 800 = 1,5 h.
0,5 h = 0,5 * 60 min = 30 min.
La durée du vol est de 1 h 30 min.`
      }
    ],
    exercises: [
      {
        question: 'Une citerne pavé droit de 2,5 m sur 1,5 m et 0,8 m de hauteur est remplie par un robinet de débit 0,5 L/s. Quel est le temps de remplissage ?',
        correction: `Volume = 2,5 * 1,5 * 0,8 = 3 m3 = 3 000 L.
Temps t = Volume / Débit = 3 000 / 0,5 = 6 000 s.
En minutes : 6 000 / 60 = 100 min = 1 h 40 min.`
      }
    ],
    evaluationSituation: {
      context: 'La famille Yapo (6 personnes) prend 2 douches de 5 min par personne chaque jour. Le robinet classique a un débit de 15 L/min. On leur propose un robinet économique de débit 6 L/min. Ils veulent connaître l\'économie d\'eau sur un trimestre de 91 jours.',
      instructions: [
        '1. Calcule la consommation trimestrielle avec le robinet classique.',
        '2. Calcule la consommation trimestrielle avec le robinet économique.',
        '3. Détermine l\'économie d\'eau réalisée en litres.'
      ],
      solutionGuide: '1. Nombre total de douches = 6 pers * 2 douches * 91 j = 1092 douches. Durée totale = 1092 * 5 = 5460 min. Volume classique Q1 = 5460 * 15 = 81 900 L. 2. Volume éco Q2 = 5460 * 6 = 32 760 L. 3. Économie = Q1 - Q2 = 81 900 - 32 760 = 49 140 litres d\'eau économisés.'
    },
    examTraps: [
      'Croire que 1,5 h équivaut à 1 h 50 min au lieu de 1 h 30 min (0,5 h = 30 min).',
      'Confondre abscisse (x, axe horizontal) et ordonnée (y, axe vertical) dans la lecture de coordonnées A(x ; y).',
      'Oublier qu\'une droite ne passant pas par l\'origine ne représente pas une situation de proportionnalité.'
    ],
    quickMemo: 'v = d / t | D = V / t | Mv = m / V | 1 m/s = 3,6 km/h | 1 m3 = 1000 L | Graphique proportionnel = droite passant par l\'origine O(0; 0).',
    keywords: ['proportionnalité', 'vitesse moyenne', 'débit', 'masse volumique', 'repérage du plan', 'abscisse et ordonnée']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 10 - PARALLÉLOGRAMMES PARTICULIERS
  // ========================================================
  {
    id: 'maths-5e-parallelogrammes-particuliers-rectangle-losange-carre',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 10 : Géométrie du Plan',
    lessonTitle: 'Parallélogrammes particuliers : Propriétés, reconnaissance, périmètre et aire du losange',
    objectifs: [
      'Rappeler les propriétés générales du parallélogramme (angles opposés égaux, consécutifs supplémentaires, diagonales se coupent au milieu)',
      'Caractériser et reconnaître le rectangle (4 angles droits, diagonales égales se coupant au milieu)',
      'Caractériser et reconnaître le losange (4 côtés égaux, diagonales perpendiculaires se coupant au milieu)',
      'Caractériser et reconnaître le carré (à la fois rectangle et losange)',
      'Calculer le périmètre P = 4*c et l\'aire A = (a * b) / 2 d\'un losange'
    ],
    fullCourseContent: `1. Propriétés générales du parallélogramme :
Soit ABCD un parallélogramme :
- Les côtés opposés sont parallèles et ont la même longueur deux à deux : (AB)//(CD), (AD)//(BC) et AB = CD, AD = BC.
- Les angles opposés ont la même mesure : mes(A) = mes(C) et mes(B) = mes(D).
- Deux angles consécutifs sont supplémentaires (leur somme vaut 180°) :
  mes(A) + mes(B) = 180° ; mes(B) + mes(C) = 180° ; mes(C) + mes(D) = 180° ; mes(D) + mes(A) = 180°.
- Les diagonales se coupent en leur milieu commun.

2. Le Rectangle :
- Définition : Un rectangle est un quadrilatère qui a quatre angles droits.
- Propriété des diagonales : Si un quadrilatère est un rectangle, alors ses diagonales ont la même longueur et se coupent en leur milieu : AC = BD.
- Règles pour reconnaître un rectangle :
  * Si un parallélogramme a ses diagonales de même longueur, alors c'est un rectangle.
  * Si un parallélogramme a un angle droit, alors c'est un rectangle.
  * Si un quadrilatère a trois angles droits, alors c'est un rectangle.

3. Le Losange :
- Définition : Un losange est un quadrilatère dont les quatre côtés ont la même longueur.
- Propriété des diagonales : Si un quadrilatère est un losange, alors ses diagonales sont de supports perpendiculaires et se coupent en leur milieu : (AC) perpendiculaire à (BD).
- Règles pour reconnaître un losange :
  * Si un quadrilatère a 4 côtés de même longueur, alors c'est un losange.
  * Si un parallélogramme a ses diagonales perpendiculaires, alors c'est un losange.
  * Si un parallélogramme a deux côtés consécutifs de même longueur, alors c'est un losange.
- Formules du losange :
  * Périmètre : P = 4 * c  (où c est la longueur d'un côté).
  * Aire : A = (a * b) / 2  (où a et b sont les longueurs des deux diagonales).

4. Le Carré :
- Définition : Un carré est un quadrilatère qui a quatre angles droits et ses quatre côtés de même longueur.
- Double nature : Un carré est à la fois un rectangle et un losange.
- Propriété des diagonales : Si un quadrilatère est un carré, alors ses diagonales ont la même longueur, sont de supports perpendiculaires et se coupent en leur milieu.
- Règles pour reconnaître un carré :
  * Si un rectangle a ses diagonales perpendiculaires, alors c'est un carré.
  * Si un rectangle a deux côtés consécutifs de même longueur, alors c'est un carré.
  * Si un losange a un angle droit, alors c'est un carré.
  * Si un losange a ses diagonales de même longueur, alors c'est un carré.`,
    definitions: [
      {
        term: 'Rectangle',
        definition: 'Parallélogramme possédant un angle droit (ou des diagonales de même longueur).'
      },
      {
        term: 'Losange',
        definition: 'Parallélogramme possédant deux côtés consécutifs égaux (ou des diagonales perpendiculaires).'
      },
      {
        term: 'Carré',
        definition: 'Quadrilatère régulier étant simultanément un rectangle et un losange.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Diagonales du rectangle',
        statement: 'Les diagonales d\'un rectangle ont la même longueur et le même milieu.'
      },
      {
        name: 'Diagonales du losange',
        statement: 'Les diagonales d\'un losange sont perpendiculaires et se coupent en leur milieu.'
      },
      {
        name: 'Angles consécutifs d\'un parallélogramme',
        statement: 'Deux angles consécutifs d\'un parallélogramme ont toujours pour somme 180°.'
      }
    ],
    formulas: [
      {
        name: 'Périmètre du losange',
        formula: '\\mathcal{P} = 4 \\times c',
        explanation: 'c est la longueur d\'un côté.'
      },
      {
        name: 'Aire du losange',
        formula: '\\mathcal{A} = \\frac{a \\times b}{2}',
        explanation: 'a et b sont les longueurs respectives des deux diagonales.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer l\'aire d\'un cerf-volant en losange de diagonales 60 cm et 80 cm',
        procedure: '1. Identifier les longueurs des diagonales : a = 60 cm et b = 80 cm. 2. Appliquer la formule de l\'aire du losange : A = (a * b) / 2. 3. Calculer : A = (60 * 80) / 2 = 4800 / 2 = 2400 cm2.',
        tip: 'Toujours diviser par 2 le produit des diagonales pour obtenir l\'aire d\'un losange.'
      }
    ],
    examples: [
      {
        statement: 'EFGH est un parallélogramme avec mes(E) = 60°. Détermine les mesures des angles F, G et H.',
        solution: `- Les angles opposés sont égaux : mes(G) = mes(E) = 60°.
- Deux angles consécutifs sont supplémentaires : mes(F) = 180° - mes(E) = 180° - 60° = 120°.
- L'angle opposé à F a la même mesure : mes(H) = mes(F) = 120°.`
      }
    ],
    exercises: [
      {
        question: 'Un losange PERS a pour diagonales PR = 8 cm et ES = 6 cm, et pour côté EP = 5 cm. Calcule son périmètre et son aire.',
        correction: `Périmètre P = 4 * côté = 4 * 5 = 20 cm.
Aire A = (PR * ES) / 2 = (8 * 6) / 2 = 48 / 2 = 24 cm2.`
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une journée de salubrité au collège, les élèves de 5ème plantent du gazon sur une surface en forme de losange de diagonales 8 m et 10 m. Au centre, ils laissent un parterre circulaire blanc de rayon r = 1 m non gazonné (prendre pi = 3).',
      instructions: [
        '1. Justifie que l\'aire du losange est de 40 m2.',
        '2. Calcule l\'aire du disque blanc central.',
        '3. Détermine l\'aire de la surface gazonnée.'
      ],
      solutionGuide: '1. Aire du losange Al = (8 * 10) / 2 = 80 / 2 = 40 m2. 2. Aire du disque Ab = pi * r^2 = 3 * 1^2 = 3 m2. 3. Aire gazonnée Ah = Al - Ab = 40 - 3 = 37 m2.'
    },
    examTraps: [
      'Confondre aire du losange (a * b)/2 et aire du rectangle (L * l).',
      'Affirmer qu\'un losange est un carré sans vérifier qu\'il possède un angle droit ou des diagonales égales.',
      'Affirmer qu\'un quadrilatère ayant des diagonales perpendiculaires est un losange (il faut d\'abord qu\'elles se coupent en leur milieu).'
    ],
    quickMemo: 'Parallélogramme : diagonales au milieu, consécutifs = 180° | Rectangle : 4 angles droits ou diagonales égales | Losange : 4 côtés égaux ou diagonales perpendiculaires, Aire = (a*b)/2 | Carré = Rectangle + Losange.',
    keywords: ['parallélogramme', 'rectangle', 'losange', 'carré', 'diagonales', 'aire du losange', 'périmètre']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 11 - STATISTIQUES
  // ========================================================
  {
    id: 'maths-5e-statistiques-population-caractere-effectifs-frequences-diagrammes',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 11 : Organisation et Traitement de Données',
    lessonTitle: 'Statistique : Vocabulaire, tableaux d\'effectifs, fréquences et diagrammes en bâtons ou en bandes',
    objectifs: [
      'Définir le vocabulaire statistique : population, caractère, modalité, effectif, effectif total',
      'Distinguer un caractère qualitatif (non mesurable : couleur, sport) d\'un caractère quantitatif (mesurable : note, taille)',
      'Calculer la fréquence d\'une modalité (quotient effectif / effectif total, en écriture décimale ou en %)',
      'Construire et interpréter un tableau d\'effectifs et de fréquences',
      'Construire et lire un diagramme en bâtons et un diagramme en bandes'
    ],
    fullCourseContent: `1. Vocabulaire statistique de base :
- Population : L'ensemble des individus ou objets sur lesquels porte l'étude statistique (ex : les élèves d'une classe de 5ème, les touristes interrogés).
- Caractère : La propriété ou le sujet étudié chez les individus de la population (ex : groupe sanguin, sport préféré, taille, note en mathématiques).
- Nature du caractère :
  * Caractère qualitatif : Les réponses ne sont pas des nombres mesurables (ex : nationalité, couleur préférée, groupe sanguin A, B, AB, O).
  * Caractère quantitatif : Les réponses sont des nombres mesurables ou dénombrables (ex : âge, nombre d'appels, note sur 20).
- Modalité : Les différentes valeurs ou réponses possibles que peut prendre le caractère (ex : pour le groupe sanguin, O, A, B et AB sont les 4 modalités).
- Effectif d'une modalité : Le nombre de fois où cette modalité apparaît dans la série statistique.
- Effectif total (N) : La somme des effectifs de toutes les modalités. C'est le nombre total d'individus de la population :
  Effectif total = somme des effectifs de chaque modalité.

2. Fréquence d'une modalité :
- Définition : La fréquence d'une modalité est le quotient de son effectif par l'effectif total :
  Fréquence = Effectif de la modalité / Effectif total.
- Propriétés :
  * La fréquence est un nombre compris entre 0 et 1 : 0 <= Fréquence <= 1.
  * La somme des fréquences de toutes les modalités est toujours égale à 1.
- Fréquence en pourcentage : Fréquence (%) = (Effectif / Effectif total) * 100.
  La somme des pourcentages de toutes les modalités vaut 100%.

3. Représentations graphiques :
- Diagramme en bâtons :
  * En abscisse : les différentes modalités.
  * En ordonnée : les effectifs (ou les fréquences).
  * Chaque modalité est représentée par un trait vertical (bâton) dont la hauteur est proportionnelle à l'effectif.
- Diagramme en bandes (ou en barres) :
  * Chaque modalité est représentée par un rectangle (bande).
  * Tous les rectangles ont la même largeur.
  * La longueur (ou hauteur) de chaque rectangle correspond à l'effectif ou à la fréquence de la modalité.`,
    definitions: [
      {
        term: 'Population',
        definition: 'Ensemble des individus soumis à l\'enquête statistique.'
      },
      {
        term: 'Caractère qualitatif / quantitatif',
        definition: 'Qualitatif si non mesurable (mots, catégories) ; quantitatif si mesurable par des valeurs numériques.'
      },
      {
        term: 'Effectif',
        definition: 'Nombre d\'apparitions d\'une modalité donnée au sein de la population.'
      },
      {
        term: 'Fréquence',
        definition: 'Rapport de l\'effectif d\'une modalité à l\'effectif total de la population.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Somme des effectifs',
        statement: 'La somme de tous les effectifs partiels est égale à l\'effectif total N.'
      },
      {
        name: 'Somme des fréquences',
        statement: 'La somme des fréquences vaut 1 (ou 100% si exprimée en pourcentage).'
      }
    ],
    formulas: [
      {
        name: 'Fréquence d\'une modalité',
        formula: 'f = \\frac{n_i}{N}',
        explanation: 'n_i est l\'effectif de la modalité et N l\'effectif total.'
      },
      {
        name: 'Fréquence en pourcentage',
        formula: 'f(\\%) = \\frac{n_i}{N} \\times 100',
        explanation: 'Conversion de la fréquence en pourcentage.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Retrouver les effectifs à partir des fréquences en %',
        procedure: '1. Identifier l\'effectif total N (par exemple 60 élèves). 2. Pour chaque modalité ayant une fréquence p %, calculer : Effectif = (p / 100) * N. 3. Vérifier que la somme des effectifs trouvés donne bien l\'effectif total N.',
        tip: 'Effectif = (Fréquence en % * Effectif total) / 100.'
      }
    ],
    examples: [
      {
        statement: 'Dans une cabine de 300 appels, 45 appels utilisent le préfixe 66. Calcule la fréquence en pourcentage de cette modalité.',
        solution: `Fréquence = Effectif / Effectif total = 45 / 300 = 0,15.
En pourcentage : 0,15 * 100 = 15%.`
      }
    ],
    exercises: [
      {
        question: 'Une enquête sur 80 élèves indique 25% de musique et 40% de sport. Calcule les effectifs de ces deux loisirs.',
        correction: `Musique : (25 * 80) / 100 = 20 élèves.
Sport : (40 * 80) / 100 = 32 élèves.`
      }
    ],
    evaluationSituation: {
      context: 'Un éducateur a interrogé 60 élèves de 5ème sur leurs loisirs : Lecture (25%), Musique (40%), Cinéma (15%), Sport (20%). Chaque élève n\'a choisi qu\'un seul loisir.',
      instructions: [
        '1. Dresse le tableau des effectifs pour chaque loisir.',
        '2. Vérifie que l\'effectif total est égal à 60.',
        '3. Indique le type de diagramme recommandé pour présenter ces résultats.'
      ],
      solutionGuide: '1. Lecture : 25/100 * 60 = 15 élèves. Musique : 40/100 * 60 = 24 élèves. Cinéma : 15/100 * 60 = 9 élèves. Sport : 20/100 * 60 = 12 élèves. 2. Somme = 15 + 24 + 9 + 12 = 60 élèves (vérifié). 3. Diagramme en bandes ou en bâtons.'
    },
    examTraps: [
      'Confondre modalité (la valeur observée, ex: note 15) et effectif (combien d\'élèves ont eu 15).',
      'Donner une fréquence supérieure à 1 ou à 100%.',
      'Confondre caractère qualitatif (couleur, avis) et quantitatif (notes, mesures numériques).'
    ],
    quickMemo: 'Population = groupe étudié | Modalités = réponses | Effectif = nombre de réponses | Effectif total = somme | Fréquence = effectif / total (entre 0 et 1, ou en %).',
    keywords: ['statistique', 'population', 'caractère qualitatif', 'caractère quantitatif', 'modalité', 'effectif total', 'fréquence', 'diagramme en bâtons']
  },

  // ========================================================
  // 5ÈME - MATHÉMATIQUES : LEÇON 12 - PRISMES DROITS
  // ========================================================
  {
    id: 'maths-5e-prismes-droits-patrons-aires-volumes',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Thème 12 : Géométrie de l\'Espace',
    lessonTitle: 'Prismes droits : Description, représentation en perspective, patrons, aire latérale, aire totale et volume',
    objectifs: [
      'Définir un prisme droit (2 bases polygonales superposables et parallèles, faces latérales rectangulaires)',
      'Identifier les arêtes latérales (parallèles, de même longueur égale à la hauteur h) et les sommets',
      'Construire et reconnaître le patron d\'un prisme droit',
      'Calculer l\'aire latérale Alat = Pbase * h et l\'aire totale Atot = 2 * Abase + Alat',
      'Calculer le volume V = Abase * h'
    ],
    fullCourseContent: `1. Définition et description d'un prisme droit :
- Définition : Un prisme droit est un solide de l'espace dont :
  * Deux faces sont des polygones parallèles et superposables, appelées les bases du prisme ;
  * Toutes les autres faces sont des rectangles, appelées les faces latérales.
- Éléments remarquables :
  * Les arêtes reliant les deux bases sont appelées les arêtes latérales. Elles sont parallèles entre elles et ont toutes la même longueur : cette longueur commune est la hauteur (h) du prisme droit.
  * Le nombre de faces latérales est égal au nombre de côtés d'une base.
  * Cas particuliers :
    - Si la base est un triangle -> prisme droit à base triangulaire (5 faces : 2 bases + 3 rectangles latéraux, 6 sommets, 9 arêtes).
    - Si la base est un rectangle -> pavé droit (parallélépipède rectangle).
    - Si la base est un carré et h = côté -> cube.

2. Représentation en perspective cavalière :
- Les arêtes visibles sont tracées en traits pleins.
- Les arêtes cachées sont obligatoirement tracées en traits pointillés.
- Les bases horizontales ou obliques subissent une déformation de perspective, mais les arêtes verticales (hauteurs) restent verticales et parallèles.

3. Patron d'un prisme droit :
- Définition : Figure plane d'un seul tenant qui, pliée convenablement, permet de reconstituer le prisme dans l'espace.
- Conditions pour qu'une figure soit le patron d'un prisme :
  1. Elle possède deux polygones superposables (les bases) ;
  2. Elle possède autant de rectangles que la base a de côtés ;
  3. Les arêtes qui se recollent lors du pliage ont exactement la même longueur ;
  4. La dimension commune à tous les rectangles latéraux est la hauteur h du prisme.

4. Formules d'aire et de volume :
- Aire latérale (somme des aires des rectangles latéraux) :
  Alat = Pbase * h
  (où Pbase est le périmètre d'une base et h la hauteur du prisme).
- Aire totale (aire de toutes les faces réunies) :
  Atot = 2 * Abase + Alat
  (où Abase est l'aire d'une des deux bases).
- Volume :
  V = Abase * h
  (le volume d'un prisme droit est le produit de l'aire d'une base par sa hauteur).`,
    definitions: [
      {
        term: 'Prisme droit',
        definition: 'Solide de l\'espace possédant deux bases polygonales parallèles et superposables et des faces latérales rectangulaires.'
      },
      {
        term: 'Hauteur du prisme',
        definition: 'Distance constante séparant les deux bases, égale à la longueur des arêtes latérales.'
      },
      {
        term: 'Patron',
        definition: 'Développement plan à plat d\'un solide pouvant être plié sans chevauchement pour reconstituer le solide.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Arêtes latérales',
        statement: 'Toutes les arêtes latérales d\'un prisme droit sont parallèles entre elles et ont la même longueur h.'
      },
      {
        name: 'Faces latérales',
        statement: 'Les faces latérales d\'un prisme droit sont toujours des rectangles perpendiculaires aux deux bases.'
      }
    ],
    formulas: [
      {
        name: 'Aire latérale',
        formula: '\\mathcal{A}_{\\text{lat}} = \\mathcal{P}_{\\text{base}} \\times h',
        explanation: 'Produit du périmètre de la base par la hauteur.'
      },
      {
        name: 'Aire totale',
        formula: '\\mathcal{A}_{\\text{tot}} = 2 \\times \\mathcal{A}_{\\text{base}} + \\mathcal{A}_{\\text{lat}}',
        explanation: 'Somme des aires des deux bases et de l\'aire latérale.'
      },
      {
        name: 'Volume',
        formula: '\\mathcal{V} = \\mathcal{A}_{\\text{base}} \\times h',
        explanation: 'Produit de l\'aire d\'une base par la hauteur.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le volume d\'un prisme droit à base triangle rectangle',
        procedure: '1. Calculer l\'aire de la base triangulaire : Abase = (côté1 * côté2) / 2. 2. Repérer la hauteur h du prisme. 3. Multiplier l\'aire de la base par la hauteur : V = Abase * h. 4. Exprimer le résultat en cm3 ou m3.',
        tip: 'Ne pas confondre la hauteur du triangle de base avec la hauteur du prisme dans l\'espace.'
      }
    ],
    examples: [
      {
        statement: 'Un prisme droit de hauteur 5 cm a pour base un triangle rectangle dont les côtés de l\'angle droit mesurent 3 cm et 4 cm. Calcule son volume.',
        solution: `1. Aire de la base : Abase = (3 * 4) / 2 = 12 / 2 = 6 cm2.
2. Volume du prisme : V = Abase * h = 6 * 5 = 30 cm3.`
      }
    ],
    exercises: [
      {
        question: 'Un prisme droit a pour base un carré de côté 3 cm et pour hauteur 9 cm. Calcule son aire totale.',
        correction: `Aire d'une base = 3 * 3 = 9 cm2.
Périmètre de base = 4 * 3 = 12 cm.
Aire latérale Alat = Pbase * h = 12 * 9 = 108 cm2.
Aire totale Atot = 2 * Abase + Alat = 2 * 9 + 108 = 18 + 108 = 126 cm2.`
      }
    ],
    evaluationSituation: {
      context: 'Une niche pour chien est formée d\'un pavé droit (1,7 m sur 1 m, hauteur 0,9 m) surmonté d\'un prisme droit à base triangulaire (hauteur du toit 0,6 m, arêtes obliques 0,8 m et 1 m, longueur 1,7 m). Le propriétaire veut tapisser l\'intérieur avec du papier peint à 1 500 F/m2.',
      instructions: [
        '1. Calcule la surface totale de papier peint nécessaire.',
        '2. Calcule le montant de la dépense.',
        '3. Dis si un budget de 15 000 FCFA est suffisant.'
      ],
      solutionGuide: '1. Aire latérale du pavé = 2 * (1 + 1,7) * 0,9 = 4,86 m2. Aire latérale du prisme = (0,6 + 0,8 + 1) * 1,7 = 4,08 m2. Aire totale = 4,86 + 4,08 = 8,94 m2. 2. Dépense = 8,94 * 1 500 = 13 410 FCFA. 3. 13 410 < 15 000 FCFA, donc la somme de 15 000 FCFA suffira largement.'
    },
    examTraps: [
      'Confondre aire latérale (sans les bases) et aire totale (avec les 2 bases).',
      'Calculer l\'aire d\'une base triangulaire comme un rectangle en oubliant de diviser par 2.',
      'Dessiner les arêtes cachées en traits pleins au lieu de traits pointillés en perspective cavalière.'
    ],
    quickMemo: 'Prisme droit = 2 bases identiques parallèles + faces rectangles | Alat = Pbase * h | Atot = 2*Abase + Alat | V = Abase * h | 1 m3 = 1000 L.',
    keywords: ['prisme droit', 'base polygonale', 'face latérale', 'patron de prisme', 'aire latérale', 'volume du prisme', 'perspective cavalière']
  }
];
