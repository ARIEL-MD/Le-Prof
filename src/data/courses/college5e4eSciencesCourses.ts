import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_4E_SCIENCES_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - PHYSIQUE-CHIMIE (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'pc-5e-circuit-electrique-intensite-tension',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Électricité : Circuits en série et avec dérivation & Grandeurs électriques',
    lessonTitle: 'Circuit série, circuit avec dérivation, intensité du courant électrique (A) et tension électrique (V)',
    objectifs: [
      'Distinguer un circuit en série (une seule boucle) d\'un circuit avec dérivations (plusieurs boucles)',
      'Définir et mesurer l\'intensité du courant électrique à l\'aide d\'un ampèremètre branché en série',
      'Définir et mesurer la tension électrique à l\'aide d\'un voltmètre branché en dérivation',
      'Énoncer et appliquer la loi d\'unicité et d\'additivité des intensités et des tensions'
    ],
    fullCourseContent: `1. Types de Circuits Électriques :
- Circuit en Série : Les dipôles sont branchés les uns à la suite des autres, formant une seule boucle de courant.
  * Si une lampe est dévissée ou grillée, le circuit est ouvert et toutes les autres lampes s'éteignent.
- Circuit avec Dérivation (en parallèle) : Le circuit comporte plusieurs boucles.
  * Il comporte des nœuds (points de jonction d'au moins 3 conducteurs) et des branches (branche principale contenant le générateur, branches dérivées contenant les récepteurs).
  * Si une lampe tombe en panne dans une branche dérivée, les autres continuent de fonctionner normalement. C'est le montage utilisé dans les maisons en Côte d'Ivoire !

2. L'Intensité du Courant Électrique (I) :
- Grandeur : Quantité d'électricité (débit d'électrons) traversant la section d'un conducteur par unité de temps.
- Unité : L'Ampère (symbole A) ; sous-multiple : milliampère (1 A = 1000 mA).
- Appareil de mesure : L'Ampèremètre, qui se branche TOUJOURS en SÉRIE dans le circuit (le courant entre par la borne A ou mA et sort par la borne COM).
- Lois des Intensités :
  * Dans un circuit en série : L'intensité du courant est la même en tout point du circuit (Loi d'unicité des intensités : I = I1 = I2 = ...).
  * Dans un circuit avec dérivation : L'intensité du courant dans la branche principale est égale à la somme des intensités dans les branches dérivées (Loi des nœuds : I_principale = I1 + I2).

3. La Tension Électrique (U) :
- Grandeur : Différence d'état électrique (différence de potentiel) existant entre les deux bornes d'un dipôle.
- Unité : Le Volt (symbole V) ; multiples : kilovolt (1 kV = 1000 V), millivolt (1 V = 1000 mV).
- Appareil de mesure : Le Voltmètre, qui se branche TOUJOURS en DÉRIVATION (en parallèle) aux bornes du dipôle (borne V reliée au potentiel positif, borne COM au potentiel négatif).
- Lois des Tensions :
  * Dans un circuit en série : La tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs (Loi d'additivité des tensions : U_générateur = U1 + U2).
  * Dans un circuit avec dérivation : La tension est identique aux bornes de toutes les branches dérivées branchées en parallèle sur le générateur (Loi d'unicité des tensions : U_générateur = U1 = U2).`,
    definitions: [
      {
        term: 'Nœud électrique',
        definition: 'Point de jonction où se rejoignent au moins trois fils conducteurs dans un circuit avec dérivation.'
      },
      {
        term: 'Intensité du courant (I)',
        definition: 'Débit de charges électriques circulant dans un conducteur, mesuré en Ampères (A) par un ampèremètre branché en série.'
      },
      {
        term: 'Tension électrique (U)',
        definition: 'Différence de potentiel électrique existant entre deux points d\'un circuit, mesurée en Volts (V) par un voltmètre en dérivation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi des nœuds (Intensité en dérivation)',
        statement: 'La somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en partent.'
      },
      {
        name: 'Loi d\'additivité des tensions (Série)',
        statement: 'Dans un circuit en série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des différents dipôles récepteurs.'
      }
    ],
    formulas: [
      {
        name: 'Loi des nœuds',
        formula: 'I_principale = I1 + I2 + ... + In',
        explanation: 'Additivité des intensités dans les branches dérivées.',
        unitOrCondition: 'Intensités en Ampères (A) ou milliampères (mA)'
      },
      {
        name: 'Loi d\'additivité des tensions en série',
        formula: 'U_générateur = U_L1 + U_L2',
        explanation: 'Partage de la tension du générateur entre les dipôles en série.',
        unitOrCondition: 'Tensions en Volts (V)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mesurer une tension électrique avec un voltmètre',
        procedure: '1. Choisir le calibre le plus élevé en tension continue (DC / V=).\n2. Brancher le voltmètre en dérivation aux bornes du dipôle à mesurer (borne V côté pôle +, borne COM côté pôle -).\n3. Diminuer progressivement le calibre pour obtenir la mesure la plus précise possible sans dépasser la valeur maximale.',
        tip: 'Ne JAMAIS brancher un ampèremètre en dérivation aux bornes d\'une pile sous peine de créer un court-circuit destructeur.'
      }
    ],
    examples: [
      {
        statement: 'Une pile de 9 V alimente deux lampes L1 et L2 montées en série. Le voltmètre mesure une tension U1 = 3,8 V aux bornes de L1. Calcule la tension U2 aux bornes de L2.',
        solution: 'Dans un circuit en série, la loi d\'additivité des tensions s\'applique :\nU_pile = U1 + U2\n9 V = 3,8 V + U2\nU2 = 9 V - 3,8 V = 5,2 V.\nLa tension aux bornes de la lampe L2 est de 5,2 V.'
      }
    ],
    exercises: [
      {
        question: 'Un générateur alimente deux moteurs M1 et M2 branchés en dérivation. L\'ampèremètre placé sur la branche principale indique I = 0,85 A et l\'ampèremètre de la branche de M1 indique I1 = 0,50 A. Calcule l\'intensité I2 traversant le moteur M2.',
        correction: 'D\'après la loi des nœuds pour un circuit avec dérivation :\nI_principale = I1 + I2\n0,85 A = 0,50 A + I2\nI2 = 0,85 A - 0,50 A = 0,35 A (ou 350 mA).\nL\'intensité traversant le moteur M2 est de 0,35 A.'
      }
    ],
    evaluationSituation: {
      context: 'Dans une maison à Cocody, le disjoncteur principal délivre une tension de 220 V. Le salon comprend un climatiseur et un téléviseur branchés sur la même multiprise murale.',
      instructions: [
        '1. Indique le type de montage électrique reliant le climatiseur et le téléviseur (série ou dérivation) et justifie ta réponse par un argument d\'usage quotidien.',
        '2. Donne la valeur de la tension électrique reçue par chacun des deux appareils.',
        '3. Si le climatiseur consomme un courant de 8,5 A et le téléviseur 0,5 A, calcule l\'intensité totale débitée par la prise murale.'
      ],
      solutionGuide: '1. Les appareils sont branchés en dérivation car si l\'on éteint le téléviseur, le climatiseur continue de fonctionner de façon autonome.\n2. Dans un circuit avec dérivation, la tension est la même aux bornes de chaque récepteur (Loi d\'unicité des tensions). Chaque appareil reçoit donc une tension nominale de 220 V.\n3. D\'après la loi des nœuds : I_totale = I_clim + I_tv = 8,5 A + 0,5 A = 9,0 A.\nLa prise murale délivre une intensité totale de 9,0 A.'
    },
    examTraps: [
      'Brancher le voltmètre en série ou l\'ampèremètre en dérivation.',
      'Additionner les tensions dans un circuit en dérivation alors qu\'elles sont égales.',
      'Oublier de convertir les milliampères (mA) en ampères (A) avant les calculs.'
    ],
    quickMemo: 'SÉRIE : I est la même partout (I = I1 = I2), les tensions s\'additionnent (U = U1 + U2). DÉRIVATION : U est la même partout (U = U1 = U2), les intensités s\'additionnent (I = I1 + I2).',
    keywords: ['circuit série', 'circuit dérivation', 'intensité', 'tension', 'ampère', 'volt', 'loi des nœuds', '5e', 'physique-chimie']
  },

  // ========================================================
  // 4ÈME - PHYSIQUE-CHIMIE (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'pc-4e-chimie-atomes-molecules-reactions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    chapter: 'Chimie : De l\'infiniment petit à la transformation chimique',
    lessonTitle: 'Structure de l\'atome, molécules, formules chimiques, conservation de la matière et équilibrage des équations-bilans',
    objectifs: [
      'Distinguer atome, molécule et ion',
      'Connaître les symboles des principaux atomes (C, H, O, N, Cl, Fe, Cu, S)',
      'Écrire et interpréter la formule chimique d\'une molécule (H2O, CO2, O2, CH4, etc.)',
      'Énoncer la loi de Lavoisier et équilibrer une équation-bilan de réaction chimique'
    ],
    fullCourseContent: `1. Les Constituants de la Matière : Atomes et Molécules :
- L'Atome : Plus petite particule constitutive de la matière, électriquement neutre.
  * Chaque atome est représenté par un symbole chimique (première lettre majuscule, parfois suivie d'une minuscule) :
    Carbone (C), Hydrogène (H), Oxygène (O), Azote (N), Chlore (Cl), Fer (Fe), Cuivre (Cu), Soufre (S).
- La Molécule : Ensemble d'atomes identiques ou différents liés entre eux par des liaisons chimiques.
  * Formule chimique : Elle indique la nature et le nombre de chaque atome grâce à des indices en bas à droite.
    Exemples : Eau (H2O = 2 atomes H + 1 atome O), Dioxyde de carbone (CO2 = 1 C + 2 O), Méthane (CH4 = 1 C + 4 H), Dioxygène (O2 = 2 O).

2. La Réaction Chimique et la Loi de Conservation (Lavoisier) :
- Transformation chimique : Processus au cours duquel des espèces chimiques (les réactifs) disparaissent pour former de nouvelles espèces (les produits).
- Loi de Lavoisier (1789) : "Rien ne se perd, rien ne se crée, tout se transforme."
  * Au cours d'une réaction chimique, la masse totale se conserve : Masse des réactifs = Masse des produits.
  * Il y a conservation du nombre et de la nature de chaque atome.

3. Écriture et Équilibrage des Équations-Bilans :
- On écrit les réactifs à gauche d'une flèche et les produits à droite : Réactifs -> Produits.
- On place des coefficients stœchiométriques (nombres entiers devant les formules) pour assurer la conservation des atomes.
- Exemples majeurs au programme de 4e :
  * Combustion complète du carbone : C + O2 -> CO2
  * Combustion complète du méthane : CH4 + 2 O2 -> CO2 + 2 H2O
  * Synthèse de l'eau : 2 H2 + O2 -> 2 H2O
  * Combustion du fer : 3 Fe + 2 O2 -> Fe3O4 (oxyde magnétique)`,
    definitions: [
      {
        term: 'Atome',
        definition: 'Entité élémentaire microscopique constitutive de toute matière, constituée d\'un noyau central et d\'électrons.'
      },
      {
        term: 'Molécule',
        definition: 'Groupe d\'atomes unis entre eux par des liaisons chimiques stables.'
      },
      {
        term: 'Réactif',
        definition: 'Espèce chimique présente au début d\'une transformation chimique et qui est consommée au cours de la réaction.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de conservation de Lavoisier',
        statement: 'Dans toute réaction chimique en système fermé, la masse totale des produits formés est égale à la masse totale des réactifs disparus.'
      },
      {
        name: 'Règle d\'or de l\'équilibrage',
        statement: 'On ne modifie JAMAIS les indices à l\'intérieur d\'une formule chimique (ex: ne pas changer H2O en H2O2) ; on ajuste uniquement les coefficients placés devant les molécules.'
      }
    ],
    formulas: [
      {
        name: 'Conservation de la masse (Lavoisier)',
        formula: 'm(réactifs disparus) = m(produits apparus)',
        explanation: 'La masse globale reste invariable au cours d\'une réaction chimique.',
        unitOrCondition: 'Masses en grammes (g) ou kilogrammes (kg)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Équilibrer une équation-bilan chimique',
        procedure: '1. Écrire la formule brute correcte de chaque réactif à gauche et de chaque produit à droite.\n2. Faire l\'inventaire du nombre d\'atomes de chaque élément des deux côtés.\n3. Ajuster en premier les atomes autres que H et O en plaçant des coefficients multiplicateurs devant les formules.\n4. Équilibrer les atomes d\'Hydrogène, puis terminer par les atomes d\'Oxygène.\n5. Vérifier le compte final pour chaque élément.',
        tip: 'Toujours utiliser les plus petits nombres entiers possibles.'
      }
    ],
    examples: [
      {
        statement: 'Équilibre l\'équation de combustion du propane : C3H8 + O2 -> CO2 + H2O.',
        solution: '1. Atomes de Carbone : 3 C à gauche -> On place 3 devant CO2 : C3H8 + O2 -> 3 CO2 + H2O.\n2. Atomes d\'Hydrogène : 8 H à gauche -> On place 4 devant H2O car 4 × 2 = 8 : C3H8 + O2 -> 3 CO2 + 4 H2O.\n3. Atomes d\'Oxygène : À droite, on a (3 × 2) + (4 × 1) = 6 + 4 = 10 O -> On place 5 devant O2 car 5 × 2 = 10.\nÉquation équilibrée finale : C3H8 + 5 O2 -> 3 CO2 + 4 H2O.'
      }
    ],
    exercises: [
      {
        question: 'Lors de la combustion complète de 12 g de carbone pur dans du dioxygène, on obtient 44 g de dioxyde de carbone gazeux. Calcule la masse de dioxygène qui a réagi.',
        correction: 'D\'après la loi de conservation de la masse de Lavoisier :\nm(Carbone) + m(Dioxygène) = m(Dioxyde de carbone)\n12 g + m(Dioxygène) = 44 g\nm(Dioxygène) = 44 g - 12 g = 32 g.\nLa masse de dioxygène consommée est de 32 grammes.'
      }
    ],
    evaluationSituation: {
      context: 'Dans une cuisine à Yamoussoukro fonctionnant au gaz butane (C4H10), le brûleur de la cuisinière produit une flamme jaune fuligineuse et noircit les casseroles. L\'élève de 4e explique à sa mère que le dioxygène est insuffisant et propose d\'aérer la pièce pour rétablir une combustion complète.',
      instructions: [
        '1. Rappelle la formule du gaz butane et écris l\'équation-bilan de sa combustion complète produisant du dioxyde de carbone (CO2) et de l\'eau (H2O).',
        '2. Équilibre cette équation chimique.',
        '3. Justifie scientifiquement pourquoi l\'apport d\'air évite la formation de suie toxique (monoxyde de carbone et carbone solide).'
      ],
      solutionGuide: '1. Formule du butane : C4H10. Réactifs : C4H10 et O2 ; Produits : CO2 et H2O.\n2. Équilibrage : 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O.\n3. En cas de manque de dioxygène (combustion incomplète), le butane ne brûle pas totalement et produit du carbone sous forme de fumée noire (suie) et du monoxyde de carbone (gaz toxique inodore). Aérer la pièce apporte le dioxygène nécessaire à la combustion complète propre (flamme bleue).'
    },
    examTraps: [
      'Modifier les chiffres en indice dans les formules (ex: écrire O3 au lieu de 3 O2).',
      'Confondre atome (ex: O) et molécule de corps simple (ex: O2).',
      'Oublier de compter l\'oxygène présent dans plusieurs molécules du membre de droite (ex: dans CO2 ET dans H2O).'
    ],
    quickMemo: 'Lavoisier : m(réactifs) = m(produits). On équilibre en plaçant des coefficients devant les molécules pour conserver chaque type d\'atome.',
    keywords: ['atomes', 'molécules', 'réaction chimique', 'Lavoisier', 'équilibrage', 'combustion', '4e', 'chimie']
  }
];
