import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_MATHS_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 6ÈME - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-6e-nombres-decimaux-operations',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    chapter: 'Nombres décimaux et Opérations fondamentales',
    lessonTitle: 'Écritures décimales, comparaisons et calculs posés',
    objectifs: [
      'Identifier la partie entière et la partie décimale d\'un nombre',
      'Comparer, ranger et encadrer des nombres décimaux',
      'Effectuer avec rigueur les additions, soustractions et multiplications de décimaux',
      'Calculer la division décimale et déterminer la valeur approchée par défaut ou par excès'
    ],
    fullCourseContent: `1. Structure du nombre décimal :
Un nombre décimal est composé d'une partie entière et d'une partie décimale séparées par une virgule.
Exemple : Dans 345,789 :
- 3 est le chiffre des centaines, 4 des dizaines, 5 des unités (Partie entière = 345).
- 7 est le chiffre des dixièmes (1/10), 8 des centièmes (1/100), 9 des millièmes (1/1000).

2. Comparaison et Rangement :
Pour comparer deux nombres décimaux :
- On compare d'abord leurs parties entières. Si elles sont différentes, le plus grand est celui qui a la plus grande partie entière (ex : 12,3 > 9,87).
- Si les parties entières sont égales, on compare les chiffres de même rang de la partie décimale de gauche à droite : dixièmes, puis centièmes, etc. (ex : 4,50 > 4,09 car 5 dixièmes > 0 dixième).

3. Multiplication et Division décimale :
- Pour multiplier deux nombres décimaux, on effectue la multiplication comme avec des entiers sans tenir compte de la virgule, puis on place la virgule dans le produit final de sorte qu'il comporte autant de chiffres après la virgule que la somme des chiffres après la virgule des deux facteurs.
- Pour diviser un décimal par 10, 100, 1000, on déplace la virgule de 1, 2, 3 rangs vers la gauche.`,
    definitions: [
      {
        term: 'Nombre décimal',
        definition: 'Nombre qui possède un nombre fini de chiffres après la virgule, pouvant s\'écrire sous la forme a / 10^n où a est un entier et n un entier naturel.'
      },
      {
        term: 'Ordre de grandeur',
        definition: 'Valeur approchée simple (arrondie) permettant d\'estimer rapidement le résultat d\'un calcul avant de poser l\'opération.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des zéros inutiles',
        statement: 'On peut ajouter ou supprimer des zéros à droite de la partie décimale sans modifier la valeur du nombre (ex : 3,4 = 3,40 = 3,400).'
      },
      {
        name: 'Priorité des calculs simples en 6e',
        statement: 'Dans une suite d\'additions et de soustractions sans parenthèses, on calcule de la gauche vers la droite.'
      }
    ],
    formulas: [
      {
        name: 'Périmètre d\'un polygone',
        formula: 'P = somme des longueurs des côtés',
        explanation: 'Addition des dimensions exprimées dans la même unité.',
        unitOrCondition: 'Unité de longueur (m, cm, mm)'
      },
      {
        name: 'Périmètre d\'un cercle (circonférence)',
        formula: 'P = 2 × π × R = π × D',
        explanation: 'R est le rayon et D le diamètre du cercle. π ≈ 3,14.',
        unitOrCondition: 'Longueur en mètre ou centimètre'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Aligner verticalement les virgules pour l\'addition et la soustraction',
        procedure: 'Placer la virgule sous la virgule, les unités sous les unités, les dixièmes sous les dixièmes. Compléter si besoin avec des zéros.',
        tip: 'Ne jamais décaler les colonnes de chiffres.'
      },
      {
        stepNumber: 2,
        title: 'Poser la multiplication',
        procedure: 'Calculer le produit sans virgule. Compter le nombre total de décimales des deux facteurs et placer la virgule.',
        tip: 'Vérifier la cohérence par un ordre de grandeur mental.'
      }
    ],
    examples: [
      {
        statement: 'Calculer : A = 45,6 + 7,89 et B = 12,4 × 3,5.',
        solution: 'Pour A : 45,60 + 07,89 = 53,49.\nPour B : 124 × 35 = 4340. Deux décimales au total -> B = 43,40 = 43,4.'
      }
    ],
    exercises: [
      {
        question: 'Un commerçant au marché d\'Adjamé vend 4,5 kg de riz à 650 FCFA le kilogramme et 2 bouteilles d\'huile à 1250 FCFA l\'unité. Calcule la dépense totale.',
        correction: '1. Prix du riz : 4,5 × 650 = 2 925 FCFA.\n2. Prix de l\'huile : 2 × 1 250 = 2 500 FCFA.\n3. Total dépense : 2 925 + 2 500 = 5 425 FCFA.'
      }
    ],
    evaluationSituation: {
      context: 'M. Koffi veut clôturer son terrain rectangulaire de 25,5 m de longueur et 14,2 m de largeur à Bouaké. Le grillage coûte 1 500 FCFA le mètre.',
      instructions: [
        '1. Calcule le périmètre du terrain.',
        '2. Détermine la longueur de grillage nécessaire en prévoyant une ouverture de 3,5 m pour le portail.',
        '3. Calcule le coût total du grillage.'
      ],
      solutionGuide: '1. Périmètre = 2 × (L + l) = 2 × (25,5 + 14,2) = 2 × 39,7 = 79,4 m.\n2. Grillage nécessaire = 79,4 - 3,5 = 75,9 m.\n3. Coût du grillage = 75,9 × 1 500 = 113 850 FCFA.'
    },
    examTraps: [
      'Aligner les nombres à droite dans une addition décimale au lieu d\'aligner les virgules.',
      'Oublier de compter toutes les décimales dans une multiplication.'
    ],
    quickMemo: 'Virgule sous virgule pour + et -. Produit : compte le total des chiffres après la virgule.',
    keywords: ['décimal', 'addition', 'multiplication', 'périmètre', 'ordre de grandeur', '6e']
  },

  // ==========================================
  // 5ÈME - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-5e-priorite-operatoire-fractions',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Priorités opératoires, Fractions & Nombres relatifs',
    lessonTitle: 'Calcul avec parenthèses, égalité de fractions et nombres décimaux relatifs',
    objectifs: [
      'Appliquer les règles officielles de priorité opératoire (parenthèses, × et ÷ avant + et -)',
      'Développer ou factoriser une expression simple en utilisant la distributivité',
      'Reconnaître des fractions égales et simplifier une fraction pour la rendre irréductible',
      'Additionner et soustraire des fractions ayant le même dénominateur ou des dénominateurs multiples'
    ],
    fullCourseContent: `1. Règles de priorité opératoire :
Règle 1 : Dans une expression sans parenthèses, les multiplications et divisions sont prioritaires sur les additions et soustractions.
Règle 2 : Dans une expression contenant des parenthèses, on effectue d'abord les calculs situés à l'intérieur des parenthèses les plus intérieures.
Règle 3 : Si une expression ne comporte que des additions et soustractions (ou que des multiplications et divisions), on calcule de gauche à droite.

2. Distributivité de la multiplication par rapport à l'addition :
Pour tous nombres k, a et b :
- Développement : k × (a + b) = k × a + k × b  et  k × (a - b) = k × a - k × b.
- Factorisation : k × a + k × b = k × (a + b) (k est le facteur commun).

3. Fractions :
- Égalité : a/b = (a × k)/(b × k) et a/b = (a ÷ k)/(b ÷ k) avec b ≠ 0 et k ≠ 0.
- Addition/Soustraction de fractions de même dénominateur : a/c + b/c = (a + b)/c.
- Si les dénominateurs sont différents mais multiples : on réduit au même dénominateur commun avant d'additionner ou soustraire.

4. Nombres relatifs (Introduction 5e) :
- Un nombre relatif est formé d'un signe (+ ou -) et d'une distance à zéro.
- Pour additionner deux nombres de même signe : on garde le signe commun et on additionne les distances à zéro.
- Pour additionner deux nombres de signes contraires : on prend le signe de celui qui a la plus grande distance à zéro et on soustrait la plus petite distance à zéro de la plus grande.`,
    definitions: [
      {
        term: 'Fraction irréductible',
        definition: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun autre que 1 (ils sont premiers entre eux).'
      },
      {
        term: 'Nombres opposés',
        definition: 'Deux nombres relatifs ayant la même distance à zéro mais des signes contraires (ex : +7 et -7). Leur somme est égale à 0.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distributivité simple',
        statement: 'k(a + b) = ka + kb et k(a - b) = ka - kb.'
      },
      {
        name: 'Règle des signes d\'addition relative',
        statement: '(+a) + (+b) = +(a + b) ; (-a) + (-b) = -(a + b) ; (+a) + (-b) = signe du plus grand en valeur absolue.'
      }
    ],
    formulas: [
      {
        name: 'Aire d\'un triangle',
        formula: 'A = (Base × Hauteur) / 2',
        explanation: 'La hauteur est relative à la base choisie et lui est perpendiculaire.',
        unitOrCondition: 'Unité d\'aire (m², cm²)'
      },
      {
        name: 'Aire d\'un parallélogramme',
        formula: 'A = Base × Hauteur',
        explanation: 'Produit de la longueur d\'un côté par la hauteur correspondante.',
        unitOrCondition: 'Unité d\'aire (m², cm²)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Évaluer une chaîne d\'opérations',
        procedure: 'Repérer les parenthèses -> calculer leur contenu. Repérer les multiplications et divisions -> les calculer. Terminer par les additions et soustractions de gauche à droite.',
        tip: 'Souligner l\'opération prioritaire à chaque étape.'
      },
      {
        stepNumber: 2,
        title: 'Additionner deux fractions à dénominateurs différents',
        procedure: 'Identifier le plus grand dénominateur. Multiplier le numérateur et dénominateur de l\'autre fraction pour obtenir le même dénominateur, puis additionner les numérateurs.',
        tip: 'Ne JAMAIS additionner les dénominateurs entre eux.'
      }
    ],
    examples: [
      {
        statement: 'Calculer : A = 15 + 4 × (8 - 3) et B = 3/4 + 5/12.',
        solution: 'A = 15 + 4 × 5 = 15 + 20 = 35.\nB = (3 × 3)/(4 × 3) + 5/12 = 9/12 + 5/12 = 14/12 = 7/6 (fraction irréductible).'
      }
    ],
    exercises: [
      {
        question: 'Calculer l\'expression : C = (-8) + (+15) + (-7) + (+4).',
        correction: 'On regroupe les positifs et les négatifs :\nPositifs : (+15) + (+4) = +19.\nNégatifs : (-8) + (-7) = -15.\nSomme totale : (+19) + (-15) = +4.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un contrôle de mathématiques au Collège Moderne de Yamoussoukro, Awa dispose de 12 000 FCFA. Elle dépense 1/3 de son argent pour acheter des cahiers et 2/5 pour un livre de sciences.',
      instructions: [
        '1. Calcule la fraction totale de son argent dépensée.',
        '2. Calcule le montant restant en FCFA.'
      ],
      solutionGuide: '1. Fraction dépensée = 1/3 + 2/5 = 5/15 + 6/15 = 11/15.\n2. Montant dépensé = 12 000 × 11/15 = 8 800 FCFA.\nMontant restant = 12 000 - 8 800 = 3 200 FCFA (ou 12 000 × 4/15 = 3 200 FCFA).'
    },
    examTraps: [
      'Calculer l\'addition avant la multiplication dans 5 + 3 × 2 (faux résultat 16 au lieu de 11).',
      'Additionner les dénominateurs : 1/2 + 1/3 = 2/5 (ARCHI-FAUX : le vrai résultat est 5/6).'
    ],
    quickMemo: 'Parenthèses d\'abord, puis × et ÷, enfin + et -. Pour les fractions : même dénominateur obligatoire pour + et -.',
    keywords: ['priorités opératoires', 'fractions', 'nombres relatifs', 'distributivité', '5e']
  },

  // ==========================================
  // 4ÈME - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-4e-pythagore-puissances-calcul-litteral',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    chapter: 'Théorème de Pythagore, Puissances & Calcul littéral',
    lessonTitle: 'Théorème de Pythagore, puissances relatives et développement littéral',
    objectifs: [
      'Énoncer et appliquer le théorème de Pythagore pour calculer la longueur d\'un côté dans un triangle rectangle',
      'Utiliser la réciproque du théorème de Pythagore pour démontrer qu\'un triangle est rectangle',
      'Manipuler les puissances d\'exposant entier relatif et la notation scientifique a × 10^p',
      'Développer et réduire des expressions algébriques (double distributivité)'
    ],
    fullCourseContent: `1. Le Théorème de Pythagore :
Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés.
Soit ABC un triangle rectangle en A : BC² = AB² + AC².
Conséquence pour calculer un côté de l'angle droit : AB² = BC² - AC².

2. Réciproque du Théorème de Pythagore :
Dans un triangle, si le carré de la longueur du plus grand côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est rectangle (le côté le plus long est l'hypoténuse).

3. Puissances d'un nombre relatif :
Pour tout nombre a non nul et n entier positif :
- a^n = a × a × ... × a (n facteurs)
- a^0 = 1, a^1 = a
- a^(-n) = 1 / a^n
Règles de calcul :
- a^m × a^n = a^(m+n)
- a^m / a^n = a^(m-n)
- (a^m)^n = a^(m×n)
- (a × b)^n = a^n × b^n

4. Notation scientifique :
L'écriture scientifique d'un nombre décimal positif est de la forme a × 10^p où 1 ≤ a < 10 et p est un entier relatif.
Exemple : 45 000 000 = 4,5 × 10^7  et  0,00038 = 3,8 × 10^(-4).

5. Calcul littéral et Double distributivité :
(a + b)(c + d) = ac + ad + bc + bd.
Suppression des parenthèses :
- Précédées du signe + : on supprime les parenthèses sans changer les signes : +(a - b) = a - b.
- Précédées du signe - : on supprime les parenthèses en changeant TOUS les signes à l'intérieur : -(a - b) = -a + b.`,
    definitions: [
      {
        term: 'Hypoténuse',
        definition: 'Le côté opposé à l\'angle droit dans un triangle rectangle. C\'est toujours le côté le plus long du triangle.'
      },
      {
        term: 'Notation scientifique',
        definition: 'Écriture standard d\'un nombre sous la forme a × 10^p avec a compris entre 1 inclus et 10 exclu, et p entier relatif.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Égalité de Pythagore',
        statement: 'Si ABC est rectangle en A, alors BC² = AB² + AC².'
      },
      {
        name: 'Règle de la double distributivité',
        statement: '(a + b)(c + d) = ac + ad + bc + bd.'
      }
    ],
    formulas: [
      {
        name: 'Théorème de Pythagore',
        formula: 'BC = √(AB² + AC²)',
        explanation: 'Calcul de l\'hypoténuse connaissant les côtés AB et AC dans un triangle rectangle en A.',
        unitOrCondition: 'Longueur positive > 0'
      },
      {
        name: 'Multiplication de puissances de même base',
        formula: 'a^m × a^n = a^(m+n)',
        explanation: 'On conserve la base a et on additionne les exposants.',
        unitOrCondition: 'a ≠ 0'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la longueur d\'un côté avec Pythagore',
        procedure: '1. Vérifier et citer : "Le triangle ABC est rectangle en A, donc d\'après le théorème de Pythagore :" \n2. Écrire la relation littérale : BC² = AB² + AC²\n3. Remplacer par les valeurs numériques et isoler l\'inconnue.\n4. Prendre la racine carrée positive.',
        tip: 'Toujours rédiger la phrase d\'introduction citant le triangle rectangle et le théorème.'
      },
      {
        stepNumber: 2,
        title: 'Écrire un nombre en notation scientifique',
        procedure: 'Placer la virgule juste après le premier chiffre non nul pour obtenir a (entre 1 et 9,99...). Compter le nombre de rangs de déplacement de la virgule pour trouver la puissance de 10.',
        tip: 'Si le nombre est petit (< 1), l\'exposant est négatif. S\'il est grand (> 10), l\'exposant est positif.'
      }
    ],
    examples: [
      {
        statement: 'Soit EFG un triangle rectangle en E tel que EF = 6 cm et EG = 8 cm. Calcule FG.',
        solution: 'Le triangle EFG est rectangle en E. D\'après le théorème de Pythagore :\nFG² = EF² + EG²\nFG² = 6² + 8² = 36 + 64 = 100\nFG = √100 = 10 cm.'
      }
    ],
    exercises: [
      {
        question: 'Développe et réduis l\'expression : A = (2x + 3)(x - 4) - (3x - 5).',
        correction: '1. Double distributivité : (2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12.\n2. Suppression des parenthèses avec le signe moins : -(3x - 5) = -3x + 5.\n3. Réduction : A = 2x² - 5x - 12 - 3x + 5 = 2x² - 8x - 7.'
      }
    ],
    evaluationSituation: {
      context: 'Un maçon à San Pedro doit vérifier si le mur d\'une maison qu\'il construit forme un angle parfaitement droit avec le sol. Il mesure 3 m sur le sol à partir du coin, 4 m sur le mur en hauteur, et la diagonale reliant ces deux points mesure exactement 5 m.',
      instructions: [
        '1. Modélise la situation par un triangle.',
        '2. Applique la réciproque du théorème de Pythagore pour dire si le mur est parfaitement perpendiculaire au sol.'
      ],
      solutionGuide: 'Soit ABC le triangle formé par le coin (A), le point au sol (B) et le point au mur (C). AB = 3 m, AC = 4 m, BC = 5 m.\nLe côté le plus long est BC.\nBC² = 5² = 25.\nAB² + AC² = 3² + 4² = 9 + 16 = 25.\nOn constate que BC² = AB² + AC².\nD\'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en A.\nConclusion : Le mur est parfaitement perpendiculaire au sol (angle droit vérifié).'
    },
    examTraps: [
      'Oublier de mettre au carré les côtés lors de l\'utilisation de Pythagore (écrire BC = AB + AC est une faute éliminatoire).',
      'Changer seulement le premier signe lors du retrait de parenthèses précédées de "-" : -(2x - 3) devient -2x - 3 (FAUX, c\'est -2x + 3).'
    ],
    quickMemo: 'Pythagore : Hypoténuse² = Côté1² + Côté2². Puissances : a^m × a^n = a^(m+n). Scientifique : a × 10^n avec 1 ≤ a < 10.',
    keywords: ['Pythagore', 'puissances', 'notation scientifique', 'double distributivité', 'racine carrée', '4e']
  },

  // ==========================================
  // 3ÈME / BEPC - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-3e-thales-trigonometrie-identites-equations',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (BEPC)',
    level: '3e',
    levelLabel: '3ème / BEPC',
    chapter: 'Théorème de Thalès, Trigonométrie, Calcul littéral & Systèmes d\'équations',
    lessonTitle: 'Théorème et réciproque de Thalès, trigonométrie du triangle rectangle, identités remarquables et systèmes linéaires',
    objectifs: [
      'Appliquer le théorème de Thalès direct pour calculer des longueurs et sa réciproque pour prouver le parallélisme de droites',
      'Calculer cosinus, sinus et tangente d\'un angle aigu dans un triangle rectangle et déterminer des mesures d\'angles',
      'Maîtriser les 3 identités remarquables pour développer et factoriser',
      'Résoudre des équations produits nuls et des systèmes de deux équations à deux inconnues par substitution et combinaison'
    ],
    fullCourseContent: `1. Le Théorème de Thalès et sa réciproque :
Configuration : Deux droites (d) et (d') sécantes en A. B et M sont deux points de (d) distincts de A ; C et N sont deux points de (d') distincts de A.
- Théorème direct : Si les droites (BC) et (MN) sont parallèles, alors :
  AM / AB = AN / AC = MN / BC.
- Réciproque de Thalès : Si les points A, M, B d'une part et A, N, C d'autre part sont alignés dans le même ordre, et si AM/AB = AN/AC, alors les droites (MN) et (BC) sont parallèles.

2. Trigonométrie dans le triangle rectangle :
Soit ABC un triangle rectangle en A, et B̂ un angle aigu :
- Cosinus : cos(B̂) = Côté Adjacent / Hypoténuse = AB / BC.
- Sinus : sin(B̂) = Côté Opposé / Hypoténuse = AC / BC.
- Tangente : tan(B̂) = Côté Opposé / Côté Adjacent = AC / AB = sin(B̂) / cos(B̂).
Relations fondamentales :
- cos²(x) + sin²(x) = 1 pour tout angle aigu x.
- 0 < cos(x) < 1  et  0 < sin(x) < 1.

3. Les Identités Remarquables :
Pour tous nombres réels a et b :
- Identité 1 : (a + b)² = a² + 2ab + b²
- Identité 2 : (a - b)² = a² - 2ab + b²
- Identité 3 : (a + b)(a - b) = a² - b²

4. Équations produits et Systèmes linéaires :
- Règle du produit nul : A × B = 0 équivaut à A = 0 ou B = 0.
- Système de 2 équations à 2 inconnues :
  { ax + by = c
  { a'x + b'y = c'
  Résolution par combinaison linéaire (éliminer une inconnue en multipliant par des coefficients) ou par substitution (exprimer x en fonction de y).`,
    definitions: [
      {
        term: 'Théorème de Thalès',
        definition: 'Théorème de géométrie établissant l\'égalité des rapports de longueurs découpées sur deux sécantes par des droites parallèles.'
      },
      {
        term: 'Système d\'équations linéaires',
        definition: 'Ensemble de deux équations du premier degré à deux inconnues (x et y) que l\'on doit satisfaire simultanément.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la réciproque de Thalès',
        statement: 'Exige deux conditions obligatoires : l\'égalité des rapports (AM/AB = AN/AC) ET l\'alignement des points dans le même ordre.'
      },
      {
        name: 'Relation trigonométrique fondamentale',
        statement: 'cos²(x) + sin²(x) = 1 et tan(x) = sin(x) / cos(x).'
      }
    ],
    formulas: [
      {
        name: 'Théorème de Thalès',
        formula: 'AM / AB = AN / AC = MN / BC',
        explanation: 'Rapports égaux de longueurs lorsque (MN) // (BC).',
        unitOrCondition: 'Points alignés et droites parallèles'
      },
      {
        name: 'Cosinus, Sinus, Tangente (Moyen mnémotechnique : SOH CAH TOA)',
        formula: 'sin = Opp/Hyp | cos = Adj/Hyp | tan = Opp/Adj',
        explanation: 'Définitions trigonométriques dans le triangle rectangle.',
        unitOrCondition: 'Triangle rectangle, angle compris entre 0° et 90°'
      },
      {
        name: 'Différence de deux carrés',
        formula: 'a² - b² = (a - b)(a + b)',
        explanation: 'Factorisation immédiate indispensable au BEPC.',
        unitOrCondition: 'Tous réels a et b'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Démontrer le parallélisme avec la réciproque de Thalès',
        procedure: '1. Calculer séparément les deux rapports numériques : AM/AB d\'une part, et AN/AC d\'autre part.\n2. Constater l\'égalité : AM/AB = AN/AC.\n3. Préciser : "Les points A, M, B et A, N, C sont alignés dans le même ordre."\n4. Conclure : "D\'après la réciproque du théorème de Thalès, les droites (MN) et (BC) sont parallèles."',
        tip: 'Ne JAMAIS écrire l\'égalité dès la première ligne : calculer séparément chaque fraction.'
      },
      {
        stepNumber: 2,
        title: 'Résoudre un système par combinaison linéaire',
        procedure: '1. Multiplier les lignes par des coefficients appropriés pour obtenir des coefficients opposés devant x (ou y).\n2. Additionner membre à membre les deux lignes pour faire disparaître l\'inconnue.\n3. Trouver la valeur de la première inconnue, puis la remplacer dans l\'une des équations initiales.',
        tip: 'Présenter la solution sous la forme S = {(x ; y)}.'
      }
    ],
    examples: [
      {
        statement: 'Factoriser l\'expression : E = (2x + 1)² - 9.',
        solution: 'On reconnaît l\'identité remarquable a² - b² avec a = (2x + 1) et b = 3 car 9 = 3².\nE = [(2x + 1) - 3][(2x + 1) + 3]\nE = (2x - 2)(2x + 4) = 2(x - 1) × 2(x + 2) = 4(x - 1)(x + 2).'
      }
    ],
    exercises: [
      {
        question: 'Résous dans R × R le système suivant : \n{ 2x + 3y = 21\n{ 5x - y = 10',
        correction: '1. De la 2e équation, on tire : y = 5x - 10.\n2. On remplace y dans la 1ère équation :\n   2x + 3(5x - 10) = 21\n   2x + 15x - 30 = 21\n   17x = 51 => x = 51 / 17 = 3.\n3. On calcule y : y = 5(3) - 10 = 15 - 10 = 5.\n4. Conclusion : L\'ensemble des solutions est S = {(3 ; 5)}.'
      }
    ],
    evaluationSituation: {
      context: 'Pour financer une sortie pédagogique à Grand-Bassam, la coopérative scolaire d\'un collège de Yopougon vend 150 tickets au total. Il y a des tickets "Élève" à 500 FCFA et des tickets "Adulte" à 1 000 FCFA. La recette totale s\'élève à 105 000 FCFA.',
      instructions: [
        '1. En désignant par x le nombre de tickets élève et par y le nombre de tickets adulte, traduis la situation par un système de 2 équations à 2 inconnues.',
        '2. Résous ce système pour trouver le nombre exact de tickets vendus pour chaque catégorie.'
      ],
      solutionGuide: '1. Mise en équations :\n   { x + y = 150 (nombre total de tickets)\n   { 500x + 1000y = 105 000 (recette totale)\n   En divisant la 2e ligne par 500 : x + 2y = 210.\n2. Résolution :\n   (x + 2y) - (x + y) = 210 - 150\n   y = 60 tickets adulte.\n   x = 150 - 60 = 90 tickets élève.\n3. Vérification : 90 × 500 + 60 × 1000 = 45 000 + 60 000 = 105 000 FCFA.\nConclusion : 90 tickets élève et 60 tickets adulte ont été vendus.'
    },
    examTraps: [
      'Dans la réciproque de Thalès, oublier de mentionner l\'alignement des points dans le même ordre.',
      'Confondre sin et cos : le sinus utilise le côté opposé, le cosinus le côté adjacent.',
      'Oublier le double produit 2ab dans (a + b)² = a² + 2ab + b².'
    ],
    quickMemo: 'Thalès : droites parallèles -> fractions égales. Trigonométrie : SOH CAH TOA. Identités : a² - b² = (a - b)(a + b).',
    keywords: ['Thalès', 'trigonométrie', 'cosinus', 'sinus', 'tangente', 'identités remarquables', 'systèmes', '3e', 'BEPC']
  }
];
