import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_4E_MATHS_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 4ÈME - LEÇON 1 : NOMBRES DÉCIMAUX RELATIFS (CALCULS ALGÉBRIQUES)
  // ========================================================
  {
    id: 'maths-4e-decimaux-relatifs-puissances',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Calculs algébriques : Nombres décimaux relatifs',
    lessonTitle: 'Nombres décimaux relatifs : Puissances de 10, notation scientifique et ordre d\'un décimal',
    objectifs: [
      'Définir et calculer une puissance de 10 d\'exposant entier relatif positif ou négatif',
      'Appliquer les propriétés opératoires sur les puissances de 10 (produit, quotient, puissance de puissance)',
      'Écrire un nombre décimal sous la forme a × 10^p et déterminer sa notation scientifique',
      'Comparer et ranger des nombres décimaux écrits sous la forme d × 10^p',
      'Définir et identifier un nombre décimal d\'ordre n'
    ],
    fullCourseContent: `1. Puissance de 10 d'exposants entiers relatifs :
- Définition : Soit n un entier positif non nul.
  * 10^n = 1 0...0 (avec n zéros après le 1).
  * 10^(-n) = 0,0...01 (avec n zéros au total, soit n-1 zéros entre la virgule et le 1) = 1 / 10^n.
  * Convention : 10^0 = 1.
- Propriétés fondamentales (pour m et n entiers relatifs) :
  * 10^m × 10^n = 10^(m+n)
  * (10^m)^n = 10^(m×n)
  * 10^m / 10^n = 10^(m-n)
  * 10^n × 10^(-n) = 10^0 = 1.

2. Produit de nombres décimaux écrits sous la forme d × 10^p :
- Propriété : Pour a et b décimaux relatifs, p et q entiers relatifs :
  (a × 10^p) × (b × 10^q) = (a × b) × 10^(p+q).
- Exemple : (-7,5 × 10^(-9)) × (2 × 10^10) = (-7,5 × 2) × 10^(-9+10) = -15 × 10 = -150.

3. Notation scientifique d'un nombre décimal relatif :
- Définition : La notation scientifique d'un nombre décimal est son écriture sous la forme :
  a × 10^p, où a est un nombre décimal ayant un seul chiffre non nul avant la virgule (1 ≤ |a| < 10) et p un nombre entier relatif.
- Exemples :
  * 12 000 = 1,2 × 10^4
  * 0,0673 = 6,73 × 10^(-2)
  * -13 074,64 = -1,307464 × 10^4.

4. Comparaison de nombres décimaux relatifs écrits sous la forme d × 10^p :
- Méthode : On écrit A et B en notation scientifique : A = a × 10^m et B = b × 10^n (avec A et B positifs) :
  * Si m ≠ n : A et B sont rangés dans le même ordre que leurs exposants m et n.
  * Si m = n : A et B sont rangés dans le même ordre que les nombres a et b.
  * Si A et B sont négatifs, on compare d'abord -A et -B, puis on inverse l'ordre.

5. Nombre décimal d'ordre n :
- Définition : Soit n un entier naturel. Un nombre décimal d'ordre n est un nombre qui peut s'écrire sous la forme d × 10^(-n), où d est un entier relatif.
- Tout nombre décimal écrit avec n chiffres après la virgule est un décimal d'ordre n (et aussi d'ordre supérieur à n).`,
    definitions: [
      {
        term: 'Notation scientifique',
        definition: 'Écriture d\'un nombre sous la forme a × 10^p où a a un seul chiffre non nul avant la virgule et p est un entier relatif.'
      },
      {
        term: 'Nombre décimal d\'ordre n',
        definition: 'Nombre décimal pouvant s\'écrire sous la forme d × 10^(-n), où d est un entier relatif et n un entier naturel.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règles de calcul sur les puissances de 10',
        statement: '10^m × 10^n = 10^(m+n) ; (10^m)^n = 10^(m×n) ; 10^m / 10^n = 10^(m-n).'
      },
      {
        name: 'Règle de comparaison',
        statement: 'Entre deux puissances de 10 positives, celle qui a le plus grand exposant est la plus grande.'
      }
    ],
    formulas: [
      {
        name: 'Notation scientifique',
        formula: 'x = a × 10^p avec 1 <= |a| < 10 et p ∈ Z',
        explanation: 'Permet d\'exprimer les très grands et très petits nombres.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre un nombre en notation scientifique',
        procedure: '1. Placer la virgule juste après le premier chiffre différent de zéro.\n2. Compter le nombre de rangs de déplacement de la virgule : vers la gauche donne un exposant positif, vers la droite un exposant négatif.\n3. Écrire le produit a × 10^p.',
        tip: 'Le nombre a doit toujours vérifier 1 <= |a| < 10.'
      }
    ],
    examples: [
      {
        statement: 'Donne la notation scientifique de 789 400 000 000 et de 0,000 009 75.',
        solution: '789 400 000 000 = 7,894 × 10^11.\n0,000 009 75 = 9,75 × 10^(-6).'
      }
    ],
    exercises: [
      {
        question: 'Calcule le produit P = (1,45 × 10^3) × (2,4 × 10^2) et donne le résultat en notation scientifique.',
        correction: 'P = (1,45 × 2,4) × 10^(3+2) = 3,48 × 10^5.'
      },
      {
        question: 'Compare A = 13,2 × 10^(-135) et B = 2,5 × 10^(-134).',
        correction: 'Écrivons A en notation scientifique : A = 1,32 × 10^1 × 10^(-135) = 1,32 × 10^(-134).\nLes exposants sont identiques (-134). Comme 1,32 < 2,5, on conclut que A < B.'
      }
    ],
    evaluationSituation: {
      context: 'Au Collège Moderne de Gagnoa, un professeur de SVT informe ses élèves que des cellules microscopiques rectangulaires de longueur 30 micromètres (30 × 10^(-6) m) et de largeur 2 micromètres (2 × 10^(-6) m) recouvrent totalement une lamelle de surface 0,000032568 m².',
      instructions: [
        '1. Écris la surface de la lamelle en notation scientifique.',
        '2. Calcule en m² la surface occupée par une seule cellule.',
        '3. Détermine le nombre total de cellules nécessaires pour recouvrir la lamelle.'
      ],
      solutionGuide: '1. Surface lamelle = 3,2568 × 10^(-5) m².\n2. Surface cellule = (30 × 10^(-6)) × (2 × 10^(-6)) = 60 × 10^(-12) = 6 × 10^(-11) m².\n3. Nombre de cellules = (3,2568 × 10^(-5)) / (6 × 10^(-11)) = (32 568 × 10^(-9)) / (6 × 10^(-11)) = 5428 × 10^2 = 5,428 × 10^5 cellules.'
    },
    examTraps: [
      'Confondre le signe de l\'exposant : déplacer la virgule vers la droite pour un petit nombre donne un exposant négatif.',
      'Écrire 15 × 10^6 en pensant que c\'est de la notation scientifique (15 n\'a pas un seul chiffre avant la virgule).'
    ],
    quickMemo: 'Notation scientifique = un seul chiffre non nul avant la virgule × 10^p.',
    keywords: ['puissances de 10', 'notation scientifique', 'ordre d un decimal', 'comparaison', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 2 : ANGLES ET CERCLE (CONFIGURATIONS DU PLAN)
  // ========================================================
  {
    id: 'maths-4e-angles-et-cercle',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Configurations du plan : Angles et Cercle',
    lessonTitle: 'Angles alternes-internes, angles correspondants, angle au centre et arcs de cercle',
    objectifs: [
      'Identifier et caractériser les angles alternes-internes et correspondants formés par deux droites et une sécante',
      'Démontrer l\'égalité d\'angles ou le parallélisme de deux droites',
      'Définir un angle au centre d\'un cercle et identifier l\'arc intercepté',
      'Calculer la longueur d\'un arc de cercle de rayon r intercepté par un angle au centre',
      'Utiliser les relations entre arcs de cercle et cordes qui les sous-tendent'
    ],
    fullCourseContent: `1. Angles alternes-internes :
- Deux angles alternes-internes sont situés de part et d'autre de la sécante commune et entre les deux droites.
- Propriété 1 : Si deux angles alternes-internes sont formés par deux droites parallèles et une sécante, alors ils ont la même mesure.
- Propriété 2 (Réciproque) : Si deux droites forment avec une sécante deux angles alternes-internes de même mesure, alors elles sont parallèles.

2. Angles correspondants :
- Deux angles correspondants sont situés du même côté de la sécante, l'un à l'intérieur de la bande délimitée par les deux droites, l'autre à l'extérieur.
- Propriété 1 : Si deux angles correspondants sont formés par deux droites parallèles et une sécante, alors ils ont la même mesure.
- Propriété 2 (Réciproque) : Si deux droites forment avec une sécante deux angles correspondants de même mesure, alors ces droites sont parallèles.

3. Angle au centre d'un cercle :
- Définition : On appelle angle au centre d'un cercle tout angle ayant pour sommet le centre de ce cercle.
- Arc intercepté : Deux points A et B d'un cercle (C) déterminent deux arcs. L'angle au centre AÔB intercepte l'arc AB.
- Propriété : Dans un cercle, si deux angles au centre ont la même mesure, alors ils interceptent deux arcs de même longueur (et réciproquement).

4. Longueur d'un arc de cercle :
- La longueur d'un arc de cercle est proportionnelle à la mesure en degrés de l'angle au centre qui l'intercepte.
- Formule : L = pi × r × (mes AÔB / 180°).

5. Cordes et arcs de cercle :
- Une corde est un segment joignant deux points du cercle. La corde [AB] sous-tend l'arc AB.
- Propriété 1 : Dans un cercle, si deux arcs ont la même longueur, alors les deux cordes qui les sous-tendent ont la même longueur.
- Propriété 2 : Dans un cercle, si deux cordes ont la même longueur, alors elles sous-tendent deux arcs de même longueur.`,
    definitions: [
      {
        term: 'Angles alternes-internes',
        definition: 'Angles situés entre deux droites et de part et d\'autre d\'une sécante commune sans être adjacents.'
      },
      {
        term: 'Angle au centre',
        definition: 'Angle dont le sommet coïncide avec le centre d\'un cercle.'
      },
      {
        term: 'Corde',
        definition: 'Segment dont les deux extrémités appartiennent au cercle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Droites parallèles et angles alternes-internes / correspondants',
        statement: 'Deux droites coupées par une sécante sont parallèles si et seulement si elles forment des angles alternes-internes (ou correspondants) de même mesure.'
      },
      {
        name: 'Équivalence arcs et cordes',
        statement: 'Dans un même cercle, deux cordes ont la même longueur si et seulement si elles sous-tendent des arcs de même longueur.'
      }
    ],
    formulas: [
      {
        name: 'Longueur d\'un arc de cercle',
        formula: 'L = pi × r × (alpha / 180°)',
        explanation: 'alpha étant la mesure de l\'angle au centre en degrés, r le rayon.',
        unitOrCondition: 'r et L dans la même unité'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la longueur d\'un arc de cercle',
        procedure: '1. Identifier le rayon r du cercle et la mesure de l\'angle au centre alpha.\n2. Remplacer dans la formule L = pi × r × (alpha / 180°).\n3. Effectuer le calcul numérique (utiliser pi ≈ 3,14).',
        tip: 'Vérifier que le sommet de l\'angle est bien le centre du cercle.'
      }
    ],
    examples: [
      {
        statement: 'Un cercle de rayon 2 cm a un angle au centre de 60°. Calcule la longueur de l\'arc intercepté.',
        solution: 'L = 2 × pi × (60 / 180) = 2pi / 3 cm ≈ 2,09 cm.'
      }
    ],
    exercises: [
      {
        question: 'Dans un cercle de centre O et de rayon 3 cm, calcule la longueur de l\'arc intercepté par un angle au centre de 135°.',
        correction: 'L = 3 × 3,14 × (135 / 180) = 3 × 3,14 × 0,75 = 7,065 cm.'
      }
    ],
    evaluationSituation: {
      context: 'Pour le club de mathématiques, une élève trace un logo constitué d\'un cercle de centre O et de rayon 4 cm contenant un triangle isocèle EFG en E inscrit dans le cercle. On sait que mes FÔG = 140° et la somme des trois angles au centre vaut 360°.',
      instructions: [
        '1. Justifie que les arcs EF et EG ont la même longueur.',
        '2. Calcule la mesure des angles au centre EÔF et EÔG.',
        '3. Calcule la longueur de l\'arc EF.'
      ],
      solutionGuide: '1. Le triangle EFG est isocèle en E, donc les cordes EF et EG sont de même longueur. Par propriété, elles sous-tendent des arcs EF et EG de même longueur.\n2. Puisque les arcs sont de même longueur, les angles au centre associés sont égaux : mes EÔF = mes EÔG. Or mes FÔG + 2 mes EÔF = 360° => 2 mes EÔF = 360 - 140 = 220° => mes EÔF = 110°.\n3. L = pi × r × (110 / 180) = 3,14 × 4 × (110 / 180) ≈ 7,68 cm.'
    },
    examTraps: [
      'Confondre un angle inscrit (sommet sur le cercle) et un angle au centre (sommet au centre du cercle).',
      'Oublier de diviser par 180° dans la formule de la longueur d\'arc.'
    ],
    quickMemo: 'Parallèles + sécante => angles alternes-internes et correspondants égaux. Longueur arc = pi * r * angle / 180°.',
    keywords: ['angles alternes-internes', 'angles correspondants', 'angle au centre', 'arc de cercle', 'corde', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 3 : NOMBRES RATIONNELS (CALCULS ALGÉBRIQUES)
  // ========================================================
  {
    id: 'maths-4e-nombres-rationnels-ppcm-pgcd',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Calculs algébriques : Nombres rationnels',
    lessonTitle: 'Nombres rationnels : PPCM, PGCD, opérations, inverse, approximations et arrondis',
    objectifs: [
      'Déterminer le PPCM et le PGCD de deux entiers par décomposition en produit de facteurs premiers',
      'Définir un nombre rationnel (ensemble Q) et ses différentes écritures (-a/b = a/-b = -(a/b))',
      'Calculer le produit et le quotient de deux nombres rationnels',
      'Déterminer l\'inverse d\'un nombre rationnel non nul',
      'Trouver l\'approximation décimale par défaut et par excès, l\'arrondi et la troncature d\'ordre n d\'un rationnel'
    ],
    fullCourseContent: `1. PPCM et PGCD de deux entiers naturels :
- PPCM (Plus Petit Commun Multiple non nul) :
  * Méthode : Décomposer chaque entier en produit de facteurs premiers. Le PPCM est le produit de tous les facteurs premiers apparus, chacun étant affecté de son plus grand exposant.
  * Exemple : 360 = 2^3 × 3^2 × 5 et 700 = 2^2 × 5^2 × 7 => PPCM(360; 700) = 2^3 × 3^2 × 5^2 × 7 = 12 600.
- PGCD (Plus Grand Commun Diviseur) :
  * Méthode : Produit des facteurs premiers communs affectés de leur plus petit exposant.
  * Exemple : PGCD(360; 700) = 2^2 × 5 = 20.
  * Propriété remarquable : a × b = PPCM(a; b) × PGCD(a; b).

2. Définition et écriture des nombres rationnels :
- Définition : Un nombre rationnel est un nombre égal à une fraction ou à l'opposé d'une fraction. L'ensemble des nombres rationnels est noté Q. Tout décimal est rationnel.
- Forme a/b avec a, b entiers relatifs et b ≠ 0. On a : -a/b = a/(-b) = -(a/b) et (-a)/(-b) = a/b.

3. Opérations sur les rationnels :
- Produit : (a/b) × (c/d) = (a × c) / (b × d).
- Inverse : L'inverse de a/b (a ≠ 0 et b ≠ 0) est b/a. Le nombre 0 n'a pas d'inverse.
- Quotient : Diviser par un rationnel non nul revient à multiplier par son inverse :
  (a/b) ÷ (c/d) = (a/b) / (c/d) = (a/b) × (d/c) = (a × d) / (b × c).

4. Approximations décimales, arrondi et troncature :
- Encadrement à 10^(-n) : u < x < u + 10^(-n).
  * u est l'approximation décimale par défaut d'ordre n.
  * u + 10^(-n) est l'approximation décimale par excès d'ordre n.
- Troncature d'ordre n : On coupe le nombre après le n-ième chiffre après la virgule.
- Arrondi d'ordre n : Si le (n+1)-ième chiffre est 0, 1, 2, 3, 4, l'arrondi est l'approximation par défaut ; si c'est 5, 6, 7, 8, 9, c'est l'approximation par excès.`,
    definitions: [
      {
        term: 'Nombre rationnel',
        definition: 'Nombre qui peut s\'écrire sous la forme d\'un quotient a/b de deux entiers relatifs avec b non nul.'
      },
      {
        term: 'PPCM',
        definition: 'Plus petit entier naturel non nul commun multiple de deux entiers naturels non nuls.'
      },
      {
        term: 'PGCD',
        definition: 'Plus grand entier naturel diviseur commun de deux entiers naturels non nuls.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relation fondamentale PPCM-PGCD',
        statement: 'Pour deux entiers a et b non nuls : a × b = PPCM(a; b) × PGCD(a; b).'
      },
      {
        name: 'Règle de division de fractions',
        statement: '(a/b) ÷ (c/d) = (a/b) × (d/c) = (ad) / (bc).'
      }
    ],
    formulas: [
      {
        name: 'Quotient de rationnels',
        formula: '(a/b) ÷ (c/d) = (a × d) / (b × c)',
        explanation: 'Multiplication par l\'inverse du diviseur.',
        unitOrCondition: 'b ≠ 0, c ≠ 0, d ≠ 0'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer l\'arrondi d\'ordre n d\'un quotient a/b',
        procedure: '1. Poser la division jusqu\'à obtenir n+1 chiffres après la virgule.\n2. Observer le (n+1)-ième chiffre.\n3. S\'il est inférieur à 5, garder les n chiffres (par défaut). S\'il est ≥ 5, ajouter 1 au n-ième chiffre (par excès).',
        tip: 'Ne pas confondre troncature (simple coupe) et arrondi (condition sur le chiffre suivant).'
      }
    ],
    examples: [
      {
        statement: 'Pour 22/7 ≈ 3,142857, donne la troncature d\'ordre 2 et l\'arrondi d\'ordre 2.',
        solution: 'Troncature d\'ordre 2 : 3,14.\nPour l\'arrondi d\'ordre 2 : le 3e chiffre après la virgule est 2 (< 5), donc l\'arrondi d\'ordre 2 est 3,14.'
      }
    ],
    exercises: [
      {
        question: 'Calcule A = (-5/7) ÷ (4/9) sous forme irréductible.',
        correction: 'A = (-5/7) × (9/4) = -45 / 28.'
      },
      {
        question: 'Détermine le PGCD et le PPCM de 126 et 132.',
        correction: '126 = 2 × 3^2 × 7 et 132 = 2^2 × 3 × 11.\nPGCD = 2 × 3 = 6.\nPPCM = 2^2 × 3^2 × 7 × 11 = 2 772.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une course sur un circuit fermé, deux voitures partent ensemble de la ligne de départ. La voiture bleue fait un tour en 36 minutes et la voiture jaune en 30 minutes.',
      instructions: [
        '1. Décompose 36 et 30 en produit de facteurs premiers.',
        '2. Détermine le PPCM de 36 et 30.',
        '3. Déduis au bout de combien de temps et après combien de tours respectifs les deux voitures se croiseront à nouveau sur la ligne de départ.'
      ],
      solutionGuide: '1. 36 = 2^2 × 3^2 et 30 = 2 × 3 × 5.\n2. PPCM(36; 30) = 2^2 × 3^2 × 5 = 180.\n3. Les voitures se croisent au bout de 180 minutes (3 heures). La voiture bleue aura fait 180 / 36 = 5 tours, et la jaune 180 / 30 = 6 tours.'
    },
    examTraps: [
      'Inverser les rôles de plus grand et plus petit exposant entre PPCM et PGCD.',
      'Oublier que 0 n\'a pas d\'inverse.'
    ],
    quickMemo: 'PGCD = facteurs communs avec plus petit exposant. PPCM = tous les facteurs avec plus grand exposant. a × b = PPCM × PGCD.',
    keywords: ['nombres rationnels', 'PPCM', 'PGCD', 'fractions', 'arrondi', 'troncature', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 4 : DISTANCES (GÉOMÉTRIE DU PLAN)
  // ========================================================
  {
    id: 'maths-4e-distances-droites-bissectrices',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Géométrie du plan : Distances',
    lessonTitle: 'Distance d\'un point à une droite, distance de deux droites parallèles et bissectrice d\'un angle',
    objectifs: [
      'Définir et construire la distance d\'un point à une droite',
      'Comparer la distance d\'un point à une droite à la distance de ce point à tout autre point de la droite',
      'Définir et mesurer la distance entre deux droites parallèles',
      'Caractériser la bissectrice d\'un angle comme ensemble des points équidistants des deux côtés',
      'Construire le cercle inscrit dans un triangle comme point de concours des bissectrices'
    ],
    fullCourseContent: `1. Distance d'un point à une droite :
- Définition : Soit (D) une droite et K un point du plan. Soit M le point d'intersection de (D) et de la perpendiculaire à (D) passant par K. La longueur KM est appelée la distance du point K à la droite (D).
- Propriété fondamentale : Pour tout point G de (D) distinct de M, on a : KM < KG. La distance KM est la plus courte distance séparant le point K de la droite (D).
- Si un point appartient à la droite (D), sa distance à (D) est nulle.

2. Distance entre deux droites parallèles :
- Définition : Soient (D) et (L) deux droites parallèles. La distance entre (D) et (L) est la longueur AB d'un segment dont les extrémités A et B appartiennent respectivement à (L) et (D), et tel que la droite (AB) soit perpendiculaire à (D) et (L).

3. Caractérisation de la bissectrice d'un angle :
- Propriété 1 (Sens direct) : Si un point M appartient à la bissectrice d'un angle, alors il est équidistant des supports des côtés de cet angle : d(M; (OA)) = d(M; (OB)).
- Propriété 2 (Sens réciproque) : Si un point M est équidistant des supports des côtés d'un angle, alors ce point appartient à la bissectrice de cet angle.

4. Application au triangle : Centre du cercle inscrit :
- Dans un triangle, les bissectrices des trois angles intérieurs sont concourantes en un point I.
- Le point I est équidistant des trois côtés du triangle : il est le centre du cercle inscrit dans le triangle (tangent aux trois côtés).
- Formule de l'aire du triangle en fonction du rayon inscrit r :
  Aire(ABC) = Aire(AIB) + Aire(BIC) + Aire(AIC) = (AB × r)/2 + (BC × r)/2 + (AC × r)/2 = ((AB + BC + AC) × r) / 2 = p × r (où p est le demi-périmètre).`,
    definitions: [
      {
        term: 'Distance d\'un point à une droite',
        definition: 'Longueur du segment perpendiculaire mené de ce point à la droite (la plus courte distance).'
      },
      {
        term: 'Cercle inscrit',
        definition: 'Cercle intérieur à un triangle, tangent à ses trois côtés, dont le centre est le point de concours des bissectrices.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Propriété de la plus courte distance',
        statement: 'Le projeté orthogonal H d\'un point A sur une droite (D) réalise la distance minimale : AH <= AM pour tout M sur (D).'
      },
      {
        name: 'Caractérisation de la bissectrice',
        statement: 'M appartient à la bissectrice de xÔy si et seulement si M est à égale distance des demi-droites [Ox) et [Oy).'
      }
    ],
    formulas: [
      {
        name: 'Aire du triangle avec le rayon du cercle inscrit',
        formula: 'Aire = (AB + BC + AC) × r / 2 = p × r',
        explanation: 'Permet de lier l\'aire d\'un triangle à son périmètre et au rayon de son cercle inscrit.',
        unitOrCondition: 'p est le demi-périmètre'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construire le centre du cercle inscrit',
        procedure: '1. Tracer à la règle et au compas la bissectrice d\'un premier angle du triangle.\n2. Tracer la bissectrice d\'un second angle.\n3. Marquer le point d\'intersection I des deux bissectrices.\n4. Tracer la perpendiculaire menée de I sur l\'un des côtés pour obtenir le rayon de contact r, puis tracer le cercle de centre I.',
        tip: 'Deux bissectrices suffisent car la troisième passe obligatoirement par le même point.'
      }
    ],
    examples: [
      {
        statement: 'RST est un triangle tel que RS = 6 cm et son aire est de 12 cm². Détermine la distance du point T à la droite (RS).',
        solution: 'Aire = (Base × Hauteur) / 2 => 12 = (RS × h) / 2 => 12 = (6 × h) / 2 = 3h => h = 4 cm.\nLa distance du point T à la droite (RS) est de 4 cm.'
      }
    ],
    exercises: [
      {
        question: 'Un triangle ABC a pour côtés AB = 24 m, AC = 20 m et BC = 16 m. Exprime son aire totale en fonction du rayon r du cercle inscrit.',
        correction: 'Aire = (24r)/2 + (20r)/2 + (16r)/2 = 12r + 10r + 8r = 30r m².'
      }
    ],
    evaluationSituation: {
      context: 'À Bonon, un planteur souhaite raccorder son campement C à la voie rectiligne bitumée passant par Bonon B par la voie la plus courte possible afin de minimiser le coût du bitumage.',
      instructions: [
        '1. Quelle droite géométrique modélise la voie bitumée ?',
        '2. Quelle construction géométrique permet de déterminer le tracé le plus court reliant C à cette route ?',
        '3. Justifie mathématiquement pourquoi ce tracé est le plus économique.'
      ],
      solutionGuide: '1. La voie bitumée est modélisée par une droite (D).\n2. Le tracé le plus court est obtenu en abaissant la perpendiculaire à la droite (D) passant par le point C, aboutissant au point H.\n3. Par propriété géométrique, la distance d\'un point à une droite est la longueur du segment perpendiculaire CH, et pour tout autre point M de la droite, CH < CM. C\'est donc la longueur minimale, ce qui garantit le coût minimal.'
    },
    examTraps: [
      'Mesurer une ligne oblique au lieu de la perpendiculaire pour déterminer la distance d\'un point à une droite.',
      'Confondre centre de gravité (médianes) et centre du cercle inscrit (bissectrices).'
    ],
    quickMemo: 'Distance point-droite = longueur du segment perpendiculaire. Bissectrice = points équidistants des deux côtés.',
    keywords: ['distance point droite', 'droites paralleles', 'bissectrice', 'cercle inscrit', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 5 : CALCUL LITTÉRAL (CALCULS ALGÉBRIQUES)
  // ========================================================
  {
    id: 'maths-4e-calcul-litteral-identites',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Calculs algébriques : Calcul littéral',
    lessonTitle: 'Calcul littéral : Développements, réductions, produits remarquables et factorisations',
    objectifs: [
      'Calculer la valeur numérique d\'une expression littérale',
      'Supprimer correctement des parenthèses précédées d\'un signe + ou d\'un signe -',
      'Développer et réduire des produits simples et doubles : a(x+y) et (a+b)(x+y)',
      'Utiliser les produits remarquables (a+b)^2, (a-b)^2 et (a+b)(a-b) pour développer et factoriser',
      'Factoriser une somme algébrique par la mise en évidence d\'un facteur commun'
    ],
    fullCourseContent: `1. Expressions littérales & Valeur numérique :
- Une expression littérale contient une ou plusieurs lettres représentant des nombres.
- Pour calculer la valeur numérique, on remplace chaque lettre par le nombre donné et on applique l'ordre de priorité des opérations (parenthèses, puissances, multiplications/divisions, additions/soustractions).

2. Règles de suppression des parenthèses :
- Règle 1 : Parenthèse précédée d'un signe "+" (ou sans signe devant) : on supprime les parenthèses sans rien changer aux signes intérieurs.
  Ex : (-7 + a) + (b - 3 + c) = -7 + a + b - 3 + c.
- Règle 2 : Parenthèse précédée d'un signe "-" : on supprime les parenthèses en changeant TOUS les signes des termes intérieurs.
  Ex : a - (b - 3 + c) = a - b + 3 - c.

3. Développement d'un produit :
- Développer, c'est transformer un produit en somme algébrique :
  * a(x + y) = ax + ay
  * a(x - y) = ax - ay
  * (a + b)(x + y) = ax + ay + bx + by.
- Réduire, c'est regrouper les termes semblables (de même puissance de la variable).

4. Produits remarquables (Identités remarquables) :
Pour tous nombres rationnels a et b :
- Carré d'une somme : (a + b)^2 = a^2 + 2ab + b^2.
- Carré d'une différence : (a - b)^2 = a^2 - 2ab + b^2.
- Produit de la somme par la différence : (a + b)(a - b) = a^2 - b^2.

5. Factorisation :
- Factoriser, c'est transformer une somme algébrique en produit de facteurs :
  * Par mise en évidence d'un facteur commun : ka + kb = k(a + b).
  * Par utilisation des produits remarquables dans le sens inverse :
    a^2 + 2ab + b^2 = (a + b)^2
    a^2 - 2ab + b^2 = (a - b)^2
    a^2 - b^2 = (a + b)(a - b).`,
    definitions: [
      {
        term: 'Développer',
        definition: 'Transformer un produit de facteurs en une somme algébrique.'
      },
      {
        term: 'Factoriser',
        definition: 'Transformer une somme algébrique en un produit de facteurs.'
      },
      {
        term: 'Produit remarquable',
        definition: 'Égalité algébrique remarquable permettant de développer ou factoriser directement sans calcul intermédiaire.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Produits remarquables fondamentaux',
        statement: '(a+b)^2 = a^2 + 2ab + b^2 ; (a-b)^2 = a^2 - 2ab + b^2 ; (a+b)(a-b) = a^2 - b^2.'
      },
      {
        name: 'Règle des signes devant parenthèses',
        statement: 'Un signe moins devant une parenthèse inverse le signe de chacun des termes situés à l\'intérieur.'
      }
    ],
    formulas: [
      {
        name: 'Carré d\'une somme',
        formula: '(a + b)^2 = a^2 + 2ab + b^2',
        explanation: 'Ne pas oublier le double produit 2ab.'
      },
      {
        name: 'Différence de deux carrés',
        formula: 'a^2 - b^2 = (a + b)(a - b)',
        explanation: 'Formule clé pour factoriser une différence de deux carrés.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Factoriser avec un facteur commun',
        procedure: '1. Identifier le facteur commun (nombre, lettre ou parenthèse entière).\n2. Écrire le facteur commun devant une grande parenthèse.\n3. Recopier dans la parenthèse les termes restants en respectant leurs signes.\n4. Réduire l\'intérieur de la parenthèse si possible.',
        tip: 'Pour 2x(y - 1) + (y - 1), penser que (y - 1) = 1 × (y - 1).'
      }
    ],
    examples: [
      {
        statement: 'Développe et réduis : W = (x - 1)^2 - (3x - 1)^2.',
        solution: 'W = (x^2 - 2x + 1) - (9x^2 - 6x + 1) = x^2 - 2x + 1 - 9x^2 + 6x - 1 = -8x^2 + 4x.'
      },
      {
        statement: 'Calcule mentalement en utilisant un produit remarquable : 19 × 21.',
        solution: '19 × 21 = (20 - 1)(20 + 1) = 20^2 - 1^2 = 400 - 1 = 399.'
      }
    ],
    exercises: [
      {
        question: 'Factorise : K = (4x^2 - 9) - (2x + 3).',
        correction: '4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3).\nK = (2x + 3)(2x - 3) - (2x + 3) × 1 = (2x + 3)[(2x - 3) - 1] = (2x + 3)(2x - 4) = 2(2x + 3)(x - 2).'
      }
    ],
    evaluationSituation: {
      context: 'La coopérative scolaire d\'un collège dispose d\'un champ composé de deux parcelles rectangulaires contiguës de dimensions : longueur L = x + y et largeur l = z. Ils veulent clôturer le terrain avec un grillage en prévoyant une porte de 1 m. Le mètre de grillage coûte 1 500 FCFA et la porte coûte 10 000 FCFA.',
      instructions: [
        '1. Justifie que le périmètre du champ est P = 2(x + y) + 2z.',
        '2. Calcule P pour x = 15 m, y = 30 m et z = 20 m.',
        '3. Calcule le coût total C des travaux sachant que la longueur de grillage est P - 1.',
        '4. La caisse disposant de 250 000 FCFA, l\'argent est-il suffisant ?'
      ],
      solutionGuide: '1. P = 2L + 2l = 2(x + y) + 2z.\n2. P = 2(15 + 30) + 2(20) = 2(45) + 40 = 90 + 40 = 130 m.\n3. Grillage = 130 - 1 = 129 m. Coût = (129 × 1 500) + 10 000 = 193 500 + 10 000 = 203 500 FCFA.\n4. 250 000 > 203 500 FCFA : les fonds sont suffisants.'
    },
    examTraps: [
      'Écrire (a + b)^2 = a^2 + b^2 en oubliant le double produit 2ab.',
      'Oublier d\'inverser le signe de tous les termes lors de la suppression de parenthèses précédées d\'un signe moins.'
    ],
    quickMemo: '(a+b)^2 = a^2+2ab+b^2 ; (a-b)^2 = a^2-2ab+b^2 ; a^2-b^2 = (a-b)(a+b).',
    keywords: ['calcul litteral', 'produits remarquables', 'developpement', 'factorisation', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 6 : CERCLES ET TRIANGLES (GÉOMÉTRIE DU PLAN)
  // ========================================================
  {
    id: 'maths-4e-cercles-et-triangles-milieux',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Géométrie du plan : Cercles et Triangles',
    lessonTitle: 'Cercle et droite : positions relatives, tangentes, droite des milieux et droites remarquables',
    objectifs: [
      'Déterminer la position relative d\'une droite et d\'un cercle (sécante, tangente, disjointe)',
      'Définir et construire la tangente à un cercle en un point et passant par un point extérieur',
      'Énoncer et appliquer les propriétés de la droite des milieux dans un triangle',
      'Identifier et construire les droites remarquables : hauteurs (orthocentre), médianes (centre de gravité aux 2/3), bissectrices (cercle inscrit)'
    ],
    fullCourseContent: `1. Positions relatives d'une droite et d'un cercle :
Soit (C) un cercle de centre O et de rayon r, et (D) une droite. Soit H le projeté orthogonal de O sur (D) (OH est la distance de O à (D)) :
- Si OH < r : (C) et (D) ont deux points communs. La droite est sécante au cercle.
- Si OH = r : (C) et (D) ont un seul point commun. La droite est tangente au cercle au point H.
- Si OH > r : (C) et (D) n'ont aucun point commun. La droite et le cercle sont disjoints.

2. Tangente à un cercle :
- Définition : La tangente en un point H d'un cercle (C) de centre O est la droite perpendiculaire au rayon [OH] passant par H.
- Construction des tangentes issues d'un point extérieur A :
  * On détermine le milieu I de [OA].
  * On trace le cercle de centre I et de rayon IA.
  * Ce cercle coupe (C) en deux points T et T'. Les droites (AT) et (AT') sont les deux tangentes à (C) issues de A.

3. Droite des milieux dans un triangle :
- Propriété 1 (Parallélisme) : Dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est parallèle au support du troisième côté.
- Propriété 2 (Longueur) : La longueur du segment joignant les milieux de deux côtés est égale à la moitié de la longueur du troisième côté : B'C' = (1/2) BC.
- Propriété 3 (Réciproque) : Dans un triangle, si une droite passe par le milieu d'un côté et est parallèle au support d'un autre côté, alors elle passe par le milieu du troisième côté.

4. Droites particulières et points remarquables du triangle :
- Hauteurs & Orthocentre :
  * Une hauteur est la droite issue d'un sommet et perpendiculaire au côté opposé.
  * Les 3 hauteurs sont concourantes en un point appelé l'orthocentre H.
- Médianes & Centre de gravité :
  * Une médiane joint un sommet au milieu du côté opposé.
  * Les 3 médianes sont concourantes en G, centre de gravité du triangle.
  * Position : G est situé aux 2/3 de chaque médiane à partir du sommet (AG = 2/3 AA').
  * Chaque médiane partage le triangle en deux triangles de même aire.
- Bissectrices & Cercle inscrit :
  * Les 3 bissectrices intérieures se coupent au centre I du cercle inscrit (tangent aux trois côtés).`,
    definitions: [
      {
        term: 'Tangente à un cercle',
        definition: 'Droite qui touche le cercle en un seul point et qui est perpendiculaire au rayon passant par ce point.'
      },
      {
        term: 'Droite des milieux',
        definition: 'Droite qui passe par les milieux de deux côtés d\'un triangle, parallèle au troisième côté.'
      },
      {
        term: 'Centre de gravité',
        definition: 'Point de concours des trois médianes d\'un triangle, situé aux 2/3 de chaque médiane à partir du sommet.'
      },
      {
        term: 'Orthocentre',
        definition: 'Point de concours des trois hauteurs d\'un triangle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème du segment des milieux',
        statement: 'Dans un triangle ABC, si I est le milieu de [AB] et J le milieu de [AC], alors (IJ) // (BC) et IJ = BC / 2.'
      },
      {
        name: 'Propriété métrique du centre de gravité',
        statement: 'AG = (2/3) AA\' où A\' est le milieu de [BC].'
      }
    ],
    formulas: [
      {
        name: 'Longueur du segment des milieux',
        formula: 'IJ = (1/2) × BC',
        explanation: 'Relie la distance entre deux milieux à la longueur de la base opposée.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Démontrer qu\'un point est le milieu d\'un côté à l\'aide d\'une parallèle',
        procedure: '1. Repérer le triangle de travail.\n2. Constater qu\'une droite passe par le milieu d\'un premier côté.\n3. Vérifier qu\'elle est parallèle au support du deuxième côté.\n4. Conclure par la réciproque du théorème des milieux qu\'elle coupe le troisième côté en son milieu.',
        tip: 'Rechercher si deux droites sont perpendiculaires à une même troisième pour prouver le parallélisme.'
      }
    ],
    examples: [
      {
        statement: 'ABC est un triangle avec BC = 15 cm. D est le milieu de [AB] et E le milieu de [AC]. Calcule DE.',
        solution: 'D et E étant les milieux respectifs de [AB] et [AC], par le théorème des milieux : DE = BC / 2 = 15 / 2 = 7,5 cm.'
      }
    ],
    exercises: [
      {
        question: 'Soit un cercle de centre I et de rayon 3 cm. Une droite (L) est située à une distance IK = 5 cm de I. Détermine la position relative de (L) et du cercle.',
        correction: 'La distance IK = 5 cm est supérieure au rayon r = 3 cm. Donc la droite (L) et le cercle sont disjoints (aucun point commun).'
      }
    ],
    evaluationSituation: {
      context: 'Un géomètre relève un triangle ABC rectangle en B pour mesurer la hauteur d\'un immeuble BC. Un repère GF a été placé tel que G est le milieu de [AC] et F le milieu de [AB]. On mesure GF = 24 m.',
      instructions: [
        '1. Justifie que la droite (GF) est parallèle à (BC).',
        '2. Détermine la hauteur de l\'immeuble BC à partir de la longueur GF.'
      ],
      solutionGuide: '1. G et F étant les milieux des côtés [AC] et [AB] du triangle ABC, la droite (GF) est la droite des milieux, donc elle est parallèle au support du troisième côté (BC).\n2. D\'après le théorème de la longueur du segment des milieux : GF = BC / 2 => BC = 2 × GF = 2 × 24 = 48 m. L\'immeuble mesure 48 mètres.'
    },
    examTraps: [
      'Confondre hauteur (perpendiculaire) et médiane (passe par le milieu).',
      'Confondre le centre de gravité (2/3 à partir du sommet, 1/3 à partir de la base) avec le milieu de la médiane.'
    ],
    quickMemo: 'Milieux de 2 côtés => parallèle au 3e côté et longueur moitié. Médianes concourantes en G aux 2/3. Hauteurs concourantes en H.',
    keywords: ['droite des milieux', 'orthocentre', 'centre de gravite', 'tangente cercle', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 7 : ÉQUATIONS ET INÉQUATIONS DANS Q
  // ========================================================
  {
    id: 'maths-4e-equations-inequations-rationnels',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Calculs algébriques : Équations et Inéquations dans Q',
    lessonTitle: 'Équations et inéquations du premier degré dans Q : Principes de résolution et mise en équation',
    objectifs: [
      'Identifier le premier membre, le second membre et l\'inconnue d\'une équation ou inéquation',
      'Résoudre des équations du type x + a = b et ax = b dans l\'ensemble des rationnels Q',
      'Appliquer les règles de transformation des inégalités (addition, multiplication par un nombre positif ou négatif)',
      'Résoudre des inéquations du type x + a < b et ax < b dans Q',
      'Mettre un problème de la vie courante en équation ou inéquation pour le résoudre'
    ],
    fullCourseContent: `1. Équations du premier degré dans Q :
- Définition : Une égalité du type ax + b = c (avec a ≠ 0, x rationnel) est une équation d'inconnue x.
  * ax + b est le premier membre (membre de gauche).
  * c est le second membre (membre de droite).
  * Résoudre l'équation, c'est trouver tous les nombres rationnels qui vérifient l'égalité (les solutions).
- Propriétés de transposition :
  * En ajoutant ou retranchant un même nombre aux deux membres, on obtient une équation équivalente : a + x = b => x = b - a.
  * En multipliant ou divisant chaque membre par un même nombre non nul, on obtient une équation équivalente : ax = b => x = b / a.

2. Inéquations du premier degré dans Q :
- Définition : Une inégalité du type ax + b < c (ou >, ≤, ≥) où a ≠ 0 est une inéquation d'inconnue x.
- Opérations et inégalités :
  * On conserve le sens de l'inégalité en ajoutant ou en soustrayant un même nombre : si a < b alors a + c < b + c.
  * On conserve le sens de l'inégalité en multipliant ou divisant par un nombre STRICTEMENT POSITIF (k > 0) : si a < b alors ka < kb.
  * ATTENTION RÈGLE D'OR : On CHANGE LE SENS de l'inégalité lorsqu'on multiplie ou divise par un nombre STRICTEMENT NÉGATIF (k < 0) :
    Si a < b et k < 0, alors ka > kb !
- Résolution :
  * x + a < b => x < b - a.
  * ax < b avec a > 0 => x < b/a.
  * ax < b avec a < 0 => x > b/a (changement de sens !).`,
    definitions: [
      {
        term: 'Équation du 1er degré',
        definition: 'Égalité comportant une inconnue x élevée à la puissance 1, de la forme ax + b = c.'
      },
      {
        term: 'Inéquation',
        definition: 'Inégalité mathématique comportant une inconnue, dont la résolution détermine un ensemble de valeurs vérifiant la condition.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'inversion du sens de l\'inégalité',
        statement: 'Lorsqu\'on multiplie ou divise les deux membres d\'une inéquation par un nombre négatif non nul, le sens de l\'inégalité est inversé (< devient >, et inversement).'
      }
    ],
    formulas: [
      {
        name: 'Solution de ax = b',
        formula: 'x = b / a (pour a ≠ 0)',
        explanation: 'Solution unique dans Q.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre une inéquation ax + b < c',
        procedure: '1. Isoler le terme en x en soustrayant b des deux côtés : ax < c - b.\n2. Diviser par a :\n   - Si a > 0 : x < (c - b) / a (le sens ne change pas).\n   - Si a < 0 : x > (c - b) / a (inverser le sens !).\n3. Écrire la conclusion : Tout nombre rationnel supérieur (ou inférieur) à cette valeur est solution.',
        tip: 'Toujours vérifier le signe du coefficient de x avant de diviser.'
      }
    ],
    examples: [
      {
        statement: 'Résous dans Q : -3x < -18.',
        solution: 'On divise les deux membres par -3 qui est strictement négatif, donc on inverse le sens de l\'inégalité :\nx > (-18) / (-3) => x > 6.\nConclusion : Tout nombre rationnel supérieur à 6 est solution.'
      }
    ],
    exercises: [
      {
        question: 'Résous l\'équation : 2t - 5 = 10.',
        correction: '2t = 10 + 5 => 2t = 15 => t = 15 / 2. La solution est 15/2.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les congés de Noël, une fête théâtrale réunit 85 spectateurs pour une recette totale de 30 250 FCFA. Les billets assis coûtent 500 FCFA et les billets debout 150 FCFA. Le trésorier veut vérifier le nombre exact de spectateurs assis.',
      instructions: [
        '1. Choisis une inconnue x et traduis la situation par une équation.',
        '2. Résous cette équation.',
        '3. Déduis le nombre de spectateurs assis et le nombre de spectateurs debout.'
      ],
      solutionGuide: '1. Soit x le nombre de spectateurs assis. Le nombre de spectateurs debout est 85 - x.\nRecette = 500x + 150(85 - x) = 30 250.\n2. 500x + 12 750 - 150x = 30 250 => 350x = 30 250 - 12 750 = 17 500 => x = 17 500 / 350 = 50.\n3. Il y avait 50 spectateurs assis et 85 - 50 = 35 spectateurs debout.'
    },
    examTraps: [
      'Oublier d\'inverser le sens du symbole (< ou >) en divisant par un nombre négatif.',
      'Oublier de changer le signe d\'un terme lorsqu\'on le déplace d\'un membre à l\'autre.'
    ],
    quickMemo: 'Multiplication/division par un négatif => inversion du sens (< devient >). ax = b => x = b/a.',
    keywords: ['equations', 'inequations', 'premier degre', 'transposition', 'inversion sens', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 10 : STATISTIQUE (ORGANISATION DES DONNÉES)
  // ========================================================
  {
    id: 'maths-4e-statistiques-mode-moyenne-secteurs',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Organisation et traitement des données : Statistique',
    lessonTitle: 'Statistique : Mode, moyenne pondérée et représentation par diagramme semi-circulaire',
    objectifs: [
      'Définir et déterminer le mode d\'une série statistique',
      'Calculer la moyenne arithmétique simple et la moyenne pondérée',
      'Construire un diagramme semi-circulaire (secteurs proportionnels aux effectifs sur 180°)',
      'Dresser un tableau d\'effectifs et de fréquences à partir d\'un diagramme semi-circulaire'
    ],
    fullCourseContent: `1. Mode d'une série statistique :
- Définition : On appelle mode d'une série statistique toute modalité qui a le plus grand effectif (ou la plus grande fréquence).
- Remarque : Une série peut posséder un seul mode, plusieurs modes (série bimodale), ou aucun mode si tous les effectifs sont égaux.

2. Moyenne d'une série statistique :
- Moyenne simple : Quotient de la somme de toutes les valeurs par l'effectif total N : M = (somme des valeurs) / N.
- Moyenne pondérée (avec effectifs n_i associés aux valeurs x_i) :
  M = (x1 × n1 + x2 × n2 + ... + xk × nk) / (n1 + n2 + ... + nk) = (somme des n_i × x_i) / N.

3. Diagramme semi-circulaire :
- Présentation : Les effectifs (ou fréquences) sont représentés par des secteurs angulaires d'un demi-disque (angle total de 180°).
- Formule de calcul de l'angle en degrés d'un secteur :
  Angle (en degrés) = (180° × effectif de la modalité) / effectif total = 180° × fréquence.
- Propriété : La somme des angles de tous les secteurs angulaires vaut toujours 180°.

4. Fréquence :
- Fréquence f_i = (effectif n_i) / (effectif total N).
- Pourcentage = f_i × 100. La somme des fréquences vaut 1 (ou 100%).`,
    definitions: [
      {
        term: 'Mode',
        definition: 'Valeur de la variable statistique correspondant au plus grand effectif.'
      },
      {
        term: 'Moyenne pondérée',
        definition: 'Somme des produits des valeurs par leurs effectifs respectifs, divisée par l\'effectif total.'
      },
      {
        term: 'Diagramme semi-circulaire',
        definition: 'Représentation graphique dans un demi-cercle où chaque secteur a un angle proportionnel à l\'effectif sur un total de 180°.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Somme des angles d\'un diagramme semi-circulaire',
        statement: 'La somme de tous les angles au centre d\'un diagramme semi-circulaire est égale à 180°.'
      }
    ],
    formulas: [
      {
        name: 'Angle du secteur semi-circulaire',
        formula: 'Angle = (180° × effectif) / effectif_total',
        explanation: 'Donne l\'ouverture du secteur en degrés dans le demi-disque.',
        unitOrCondition: 'Résultat en degrés'
      },
      {
        name: 'Moyenne pondérée',
        formula: 'M = (∑ n_i × x_i) / N',
        explanation: 'n_i est l\'effectif de la valeur x_i, N est l\'effectif total.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construire un diagramme semi-circulaire',
        procedure: '1. Calculer l\'effectif total N.\n2. Pour chaque modalité, calculer l\'angle au rapporteur : alpha = (180 × n_i) / N.\n3. Vérifier que la somme des angles donne exactement 180°.\n4. Tracer un demi-cercle et reporter successivement les angles au rapporteur à partir du centre.',
        tip: 'Vérifier la somme des angles = 180° avant de tracer.'
      }
    ],
    examples: [
      {
        statement: 'Une série comporte les effectifs suivants pour 4 classes : A: 20, B: 10, C: 8, D: 12. Calcule les angles pour un diagramme semi-circulaire.',
        solution: 'Effectif total = 20 + 10 + 8 + 12 = 50.\nAngle A = (180 × 20) / 50 = 72°.\nAngle B = (180 × 10) / 50 = 36°.\nAngle C = (180 × 8) / 50 = 28,8°.\nAngle D = (180 × 12) / 50 = 43,2°.\nVérification : 72 + 36 + 28,8 + 43,2 = 180°.'
      }
    ],
    exercises: [
      {
        question: 'Voici les notes d\'un élève : 12, 9, 11.5, 13, 8.5, 14, 15. Calcule sa moyenne.',
        correction: 'Somme = 12 + 9 + 11,5 + 13 + 8,5 + 14 + 15 = 83.\nMoyenne = 83 / 7 ≈ 11,86.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une enquête pour choisir l\'artiste d\'un bal de fin d\'année parmi 70 élèves de 4ème, les votes sont : L: 11, M: 16, G: 8, A: 17, B: 18.',
      instructions: [
        '1. Dresse le tableau des effectifs.',
        '2. Détermine le mode de cette série et le nom du vainqueur.',
        '3. Calcule l\'angle de chaque secteur pour un diagramme semi-circulaire.'
      ],
      solutionGuide: '1. Effectifs : L=11, M=16, G=8, A=17, B=18 (Total = 70).\n2. Le mode est l\'artiste B (Billy Billy) avec 18 voix (le plus grand effectif).\n3. Angles : L = (180×11)/70 ≈ 28° ; M = (180×16)/70 ≈ 41° ; G = (180×8)/70 ≈ 21° ; A = (180×17)/70 ≈ 44° ; B = (180×18)/70 ≈ 46°. Total = 180°.'
    },
    examTraps: [
      'Confondre le mode (la valeur/modalité) avec son effectif (le nombre de fois où elle apparaît).',
      'Multiplier par 360° (diagramme circulaire complet) au lieu de 180° pour un diagramme semi-circulaire.'
    ],
    quickMemo: 'Mode = valeur la plus fréquente. Moyenne = ∑(valeur × effectif)/N. Semi-circulaire = angle sur 180°.',
    keywords: ['statistique', 'mode', 'moyenne ponderee', 'diagramme semi-circulaire', 'effectifs', 'maths 4e']
  },

  // ========================================================
  // 4ÈME - LEÇON 11 : PERSPECTIVE CAVALIÈRE (GÉOMÉTRIE DANS L'ESPACE)
  // ========================================================
  {
    id: 'maths-4e-perspective-cavaliere',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Géométrie dans l\'espace : Perspective cavalière',
    lessonTitle: 'Perspective cavalière : Vocabulaire, règles de représentation du cube et du pavé droit',
    objectifs: [
      'Définir la perspective cavalière et identifier les plans de face, de profil et horizontaux',
      'Appliquer les 5 règles fondamentales de la perspective cavalière',
      'Calculer la longueur des fuyantes à l\'aide du coefficient de réduction c (c < 1)',
      'Représenter un cube et un pavé droit en perspective cavalière avec angle d\'inclinaison alpha et coefficient c'
    ],
    fullCourseContent: `1. Définition et Vocabulaire de la perspective cavalière :
- La perspective cavalière est une technique de dessin permettant de représenter dans le plan un solide de l'espace tout en rendant visibles les parties cachées.
- Vocabulaire :
  * Plan vertical de face (face avant et face arrière) : faces vues de face.
  * Plan vertical de profil (faces latérales gauche et droite).
  * Plan horizontal (face supérieure / dessus et face inférieure / dessous).
  * Fuyantes : arêtes perpendiculaires au plan vertical de face de l'objet, fuyant vers l'arrière sur le dessin.

2. Les 5 Règles de la perspective cavalière :
- Règle 1 : Les arêtes parallèles sur l'objet réel sont représentées par des segments parallèles sur le dessin.
- Règle 2 : Toute face située dans un plan vertical de face (face frontale) est dessinée en VRAIE GRANDEUR et SANS DÉFORMATION (un carré reste un carré, un rectangle reste un rectangle, les angles droits restent droits).
- Règle 3 : Les arêtes cachées sont représentées par des traits en pointillés. Les arêtes visibles sont en traits pleins continus.
- Règle 4 : Les arêtes perpendiculaires au plan vertical de face (les fuyantes) sont représentées par des segments inclinés faisant un angle alpha fixé avec l'horizontale (généralement 30°, 45° ou 35°).
- Règle 5 : Les longueurs réelles des arêtes fuyantes sont multipliées par un coefficient de réduction c (avec 0 < c < 1, par exemple c = 0,5 ou c = 0,7) :
  Longueur sur le dessin = Longueur réelle × c.`,
    definitions: [
      {
        term: 'Perspective cavalière',
        definition: 'Mode de représentation plane des solides respectant le parallélisme et dessinant la face frontale sans déformation.'
      },
      {
        term: 'Fuyantes',
        definition: 'Segments obliques représentant les arêtes perpendiculaires à la face avant, inclinées d\'un angle alpha et réduites par un coefficient c.'
      },
      {
        term: 'Coefficient de réduction (c)',
        definition: 'Nombre strictement compris entre 0 et 1 par lequel on multiplie la dimension réelle des fuyantes pour les tracer.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Conservation du parallélisme',
        statement: 'Deux droites parallèles dans l\'espace restent parallèles en perspective cavalière.'
      },
      {
        name: 'Règle des faces de face',
        statement: 'La face avant et les faces parallèles à celle-ci conservent leurs formes et leurs dimensions réelles.'
      }
    ],
    formulas: [
      {
        name: 'Longueur des fuyantes',
        formula: 'L_dessin = L_reelle × c',
        explanation: 'c est le coefficient de réduction (0 < c < 1).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Dessiner un pavé droit en perspective cavalière',
        procedure: '1. Dessiner la face avant en vraie grandeur sous forme d\'un rectangle en traits continus.\n2. À partir de chaque sommet de la face avant, tracer les 4 fuyantes parallèles entre elles, inclinées de l\'angle alpha, de longueur L_fuyante = Profondeur × c (tracer en pointillés celle qui est cachée).\n3. Relier les extrémités des fuyantes pour former la face arrière (en traits pleins pour les visibles, en pointillés pour les cachés).',
        tip: 'Les fuyantes cachées et les arêtes arrières cachées doivent impérativement être en pointillés.'
      }
    ],
    examples: [
      {
        statement: 'Une boîte de craie a pour face avant IJ = 9 cm et IF = 6 cm, et une arête fuyante IK = 6 cm. Avec c = 0,5 et alpha = 40°, calcule les dimensions sur le dessin.',
        solution: 'Face avant : IJ = 9 cm et IF = 6 cm (inchangées car frontales).\nFuyante sur le dessin : IK = 6 × 0,5 = 3 cm, inclinée de 40°.'
      }
    ],
    exercises: [
      {
        question: 'Un cube d\'arête 4 cm est représenté en perspective cavalière avec c = 3/4 et alpha = 30°. Quelle est la longueur des fuyantes ?',
        correction: 'Longueur de la fuyante = 4 × (3/4) = 3 cm.'
      }
    ],
    evaluationSituation: {
      context: 'Des élèves d\'un collège en visite dans une savonnerie doivent représenter un savon parallélépipédique (pavé droit) de dimensions 5 cm de longueur, 3 cm de hauteur et 4 cm de profondeur. On choisit un coefficient c = 0,75 et un angle alpha = 35°.',
      instructions: [
        '1. Rappelle les règles de tracé de la face avant.',
        '2. Calcule la longueur de la fuyante sur le dessin.',
        '3. Précise comment doivent être tracées les arêtes non visibles.'
      ],
      solutionGuide: '1. La face avant est un rectangle de 5 cm sur 3 cm tracé en vraie grandeur sans déformation, avec des angles droits.\n2. Longueur de la fuyante = 4 cm × 0,75 = 3 cm.\n3. Les 3 arêtes cachées (une fuyante et deux arêtes de la face arrière) doivent être tracées en traits pointillés.'
    },
    examTraps: [
      'Tracer les arêtes cachées en traits continus au lieu de pointillés.',
      'Réduire la face avant alors que seule la fuyante doit être multipliée par le coefficient de réduction c.'
    ],
    quickMemo: 'Face frontale = vraie grandeur sans déformation. Fuyantes = angle alpha, longueur = réelle × c. Cachées = pointillés.',
    keywords: ['perspective cavaliere', 'fuyantes', 'coefficient de reduction', 'cube', 'pave droit', 'maths 4e']
  }
];
