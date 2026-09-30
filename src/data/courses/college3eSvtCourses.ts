import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_SVT_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 3ÈME - SVT : LEÇON 1 - LES ALIMENTS ET L'HOMME
  // ========================================================
  {
    id: 'svt-3e-aliments-et-homme-nutrition',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : La nutrition chez l\'Homme',
    lessonTitle: 'Les aliments et l\'Homme : Composition, rôles et ration alimentaire',
    objectifs: [
      'Caractériser expérimentalement les aliments simples minéraux (chlorures par le nitrate d\'argent, calcium par l\'oxalate d\'ammonium)',
      'Caractériser expérimentalement les aliments simples organiques (amidon par l\'eau iodée, sucres réducteurs par la liqueur de Fehling à chaud, protides par réaction xanthoprotéique et de Biuret, lipides par frottis sur papier)',
      'Distinguer aliment simple (constitué d\'un seul type de molécule) et aliment composé (contenant plusieurs aliments simples comme le pain et le lait)',
      'Identifier les trois grands rôles des aliments : énergétiques (glucides, lipides), plastiques/bâtisseurs (protides, calcium) et fonctionnels/protecteurs (vitamines, sels minéraux, eau)',
      'Calculer la valeur énergétique d\'un aliment ou d\'un repas en Kilojoules (kJ) et Kilocalories (kcal)',
      'Définir la ration alimentaire et identifier les maladies nutritionnelles (kwashiorkor par carence protidique, marasme par sous-alimentation globale, avitaminoses)'
    ],
    fullCourseContent: `1. Caractérisation expérimentale des aliments simples :
Un aliment simple est formé d'une seule catégorie de molécules. Un aliment composé (comme le pain ou le lait) réunit plusieurs aliments simples.
- Sels minéraux :
  * Sels de chlorures : Réactif caractéristique = Nitrate d'argent ($AgNO_3$). Résultat = précipité blanc qui noircit à la lumière.
  * Sels de calcium : Réactif caractéristique = Oxalate d'ammonium. Résultat = précipité blanc d'oxalate de calcium.
- Glucides :
  * Amidon : Réactif = Eau iodée (lugol). Résultat = coloration bleu-violacée intense (à froid).
  * Sucres réducteurs (glucose, lactose) : Réactif = Liqueur de Fehling. Protocole = ajout de réactif puis chauffage à ébullition. Résultat = précipité rouge brique.
- Protides :
  * Réaction xanthoprotéique : acide nitrique chaud (coloration jaune) puis ammoniaque après rinçage (la coloration vire au jaune-orangé).
  * Réaction de Biuret : sulfate de cuivre (solution bleue) + soude ($NaOH$) -> coloration violette.
  * Coagulation thermique et chimique : le blanc d'œuf ou la caséine coagule sous l'effet de la chaleur, d'un acide (acide acétique) ou de l'alcool.
- Lipides :
  * Frottement sur papier blanc suivi de séchage à la chaleur : apparition d'une tache translucide permanente qui ne disparaît pas à la chaleur. Insolubles dans l'eau mais solubles dans les solvants organiques (éther, benzène, acétone).

2. Rôles physiologiques des aliments simples :
- Aliments énergétiques : Glucides et Lipides. Ils fournissent l'énergie thermique et motrice indispensable aux activités de l'organisme.
- Aliments plastiques (de construction et d'entretien) : Protides et sels minéraux (calcium). Ils assurent la croissance cellulaire, le développement osseux et musculaire ainsi que le renouvellement des tissus usés.
- Aliments fonctionnels et protecteurs : Vitamines, sels minéraux et eau. Ils régulent le métabolisme, facilitent les réactions biochimiques et renforcent les défenses immunitaires.

3. Valeur énergétique des aliments simples :
- $1\\text{ g de glucide}$ libère $17\\text{ kJ}$ ($4\\text{ kcal}$).
- $1\\text{ g de protide}$ libère $17\\text{ kJ}$ ($4\\text{ kcal}$).
- $1\\text{ g de lipide}$ libère $38\\text{ kJ}$ ($9\\text{ kcal}$).

4. Ration alimentaire et équilibre nutritionnel :
La ration alimentaire est la quantité d'aliments qu'un individu doit consommer en un jour (24 h) pour maintenir son poids, sa santé et assurer ses dépenses énergétiques. Elle varie selon l'âge, le sexe, le climat, l'activité physique et l'état physiologique (grossesse, allaitement, convalescence).
- Malnutrition par carence :
  * Kwashiorkor : Carence sévère en protides chez le jeune enfant sevré (alimentation exclusive en manioc/bouillie de maïs). Symptômes : œdèmes (visage bouffi, ventre ballonné), fonte musculaire cachée, cheveux décolorés et roux, enfant triste et apathique (« enfant pleurnichard »), lésions cutanées.
  * Marasme nutritionnel : Carence globale à la fois énergétique et protidique (famine, sous-alimentation totale). Symptômes : fonte musculaire extrême, aspect de "vieillard en miniature", yeux enfoncés dans les orbites, peau plissée et sèche sans œdème.`,
    definitions: [
      {
        term: 'Aliment simple',
        definition: 'Substance nutritive pure constituée d\'une seule espèce moléculaire (ex : glucose, amidon, caséine, chlorure de sodium).'
      },
      {
        term: 'Aliment composé',
        definition: 'Aliment naturel ou préparé formé de l\'association de plusieurs aliments simples (ex : lait, pain, œuf, attiéké).'
      },
      {
        term: 'Ration alimentaire',
        definition: 'Ensemble des aliments consommés par une personne en 24 heures pour couvrir l\'ensemble de ses besoins qualitatifs et quantitatifs.'
      },
      {
        term: 'Kwashiorkor',
        definition: 'Maladie nutritionnelle du sevrage provoquée par une carence spécifique en protides, caractérisée par des œdèmes et des troubles cutanés.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Équivalence énergétique des nutriments organiques',
        statement: 'Glucides = 17 kJ/g ; Protides = 17 kJ/g ; Lipides = 38 kJ/g.',
        explanation: 'Les lipides sont les composés les plus denses en énergie (plus du double des glucides et protides).'
      },
      {
        name: 'Caractérisation du glucose',
        statement: 'Le test à la liqueur de Fehling exige impérativement un chauffage doux à ébullition pour que le précipité rouge brique apparaisse.',
        explanation: 'Sans apport thermique, la réaction de réduction du cuivre cuprique en oxyde cuivreux ne s\'amorce pas.'
      }
    ],
    formulas: [
      {
        name: 'Calcul de la valeur énergétique d\'un repas',
        formula: 'E_{\\text{totale}} (\\text{kJ}) = (m_{\\text{glucides}} \\times 17) + (m_{\\text{protides}} \\times 17) + (m_{\\text{lipides}} \\times 38)',
        explanation: 'Permet de vérifier si le menu proposé couvre les besoins journaliers de l\'élève (ex : 10 000 à 12 000 kJ pour un adolescent de 15 ans).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mise en évidence des constituants d\'un aliment composé',
        procedure: 'Préparer le filtrat de l\'aliment (écraser dans de l\'eau distillée puis filtrer). Tester une portion avec le nitrate d\'argent (chlorures), une avec l\'oxalate d\'ammonium (calcium), une avec la liqueur de Fehling à chaud (sucres réducteurs), une avec l\'eau iodée (amidon) et une au réactif du Biuret (protides).',
        tip: 'Le filtrat permet d\'éliminer les particules solides opaques pour bien observer les précipités et colorations.'
      },
      {
        stepNumber: 2,
        title: 'Calcul de la valeur énergétique à partir d\'un tableau de composition',
        procedure: '1. Calculer la masse réelle de chaque nutriment : m = (pourcentage dans l\'aliment x masse de l\'aliment consommé) / 100. 2. Multiplier chaque masse par son coefficient énergétique respectif. 3. Sommer les apports partiels.',
        tip: 'Vérifiez toujours si le résultat final est demandé en kilojoules (kJ) ou en kilocalories (kcal).'
      }
    ],
    examples: [
      {
        statement: 'Un bol de lait de 200 g contient 10 g de glucides (lactose), 6 g de protides et 8 g de lipides. Calcule l\'apport énergétique total de ce bol de lait en kJ.',
        solution: `Calcul des apports énergétiques :
- Glucides : 10 g x 17 kJ/g = 170 kJ
- Protides : 6 g x 17 kJ/g = 102 kJ
- Lipides : 8 g x 38 kJ/g = 304 kJ
Énergie totale = 170 + 102 + 304 = 576 kJ.`
      }
    ],
    exercises: [
      {
        question: 'Associe chaque réactif au nutriment qu\'il permet de caractériser : 1) Eau iodée, 2) Nitrate d\'argent, 3) Oxalate d\'ammonium, 4) Liqueur de Fehling à chaud.',
        correction: `1) Eau iodée -> Amidon (coloration bleu-violacée)
2) Nitrate d\'argent -> Sels de chlorures (précipité blanc qui noircit à la lumière)
3) Oxalate d\'ammonium -> Sels de calcium (précipité blanc)
4) Liqueur de Fehling à chaud -> Sucres réducteurs / glucose / lactose (précipité rouge brique).`
      },
      {
        question: 'Distingue les symptômes cliniques du kwashiorkor de ceux du marasme nutritionnel.',
        correction: `Le kwashiorkor (dû à un manque de protides) présente des œdèmes caractéristiques (visage enflé, membres et ventre gonflés), une apathie marquée (« enfant pleurnichard »), des cheveux roux et cassants, et des lésions cutanées. Le marasme (dû à un déficit énergétique global) se manifeste par un amaigrissement squelettique extrême, un visage émacié de vieillard, des yeux enfoncés et l\'absence totale d\'œdème.`
      }
    ],
    evaluationSituation: {
      context: 'Au collège moderne de Bonon, la coopérative scolaire sert aux pensionnaires un menu composé de 700 g de pommes de terre, 50 g de lait, 10 g de beurre et 100 g de pain. Un élève de 15 ans craint que cette ration ne couvre pas ses dépenses énergétiques journalières estimées à 3 000 kJ pour ce repas de midi.',
      instructions: [
        '1. Définis la notion de ration alimentaire.',
        '2. Calcule la valeur énergétique totale en kilojoules de ce repas à partir des tables officielles.',
        '3. Justifie si l\'inquiétude de l\'élève est fondée ou non.'
      ],
      solutionGuide: '1. Définition : La ration alimentaire est la quantité journalière d\'aliments couvrant les besoins énergétiques, plastiques et fonctionnels d\'un individu. 2. Calcul : Pomme de terre (1915,2 kJ) + Lait (125,95 kJ) + Beurre (309,5 kJ) + Pain (1068 kJ) = 3418,65 kJ. 3. 3418,65 kJ > 3000 kJ : le repas couvre largement les besoins de midi, l\'élève n\'a aucune raison de s\'inquiéter.'
    },
    examTraps: [
      'Oublier de chauffer la liqueur de Fehling : le test ne réagit pas à froid.',
      'Confondre le nitrate d\'argent (test des chlorures) et l\'oxalate d\'ammonium (test du calcium) : les deux donnent un précipité blanc, mais seul celui des chlorures noircit à la lumière.',
      'Utiliser le coefficient 17 kJ pour les lipides au lieu de 38 kJ.'
    ],
    quickMemo: 'Réactifs clés : Chlorures = Nitrate d\'argent (blanc noircit) | Calcium = Oxalate d\'ammonium (blanc) | Amidon = Eau iodée (bleu-noir) | Glucose = Fehling chaud (rouge brique) | Protides = Biuret (violet) ou Xanthoprotéique (jaune-orangé) | Lipides = Tache translucide.',
    keywords: ['aliments simples', 'aliments composés', 'ration alimentaire', 'kwashiorkor', 'marasme', 'liqueur de Fehling', 'eau iodée', 'nitrate d\'argent', 'valeur énergétique']
  },

  // ========================================================
  // 3ÈME - SVT : LEÇON 2 - LA DIGESTION DES ALIMENTS
  // ========================================================
  {
    id: 'svt-3e-digestion-absorption-intestinale',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : La nutrition chez l\'Homme',
    lessonTitle: 'La digestion des aliments et l\'absorption intestinale des nutriments',
    objectifs: [
      'Différencier les transformations mécaniques (mastication, déglutition, malaxation/brassage) et les transformations chimiques (hydrolyse enzymatique)',
      'Définir une enzyme digestive et identifier ses conditions d\'activité (température optimale 37°C, spécificité de substrat)',
      'Suivre pas à pas la transformation des aliments le long du tube digestif (bouche, estomac, intestin grêle) et identifier les sucs digestifs associés',
      'Identifier les nutriments issus de la digestion : glucose (glucides), acides aminés (protides), acides gras et glycérol (lipides)',
      'Décrire le mécanisme de l\'absorption intestinale et distinguer la voie sanguine de la voie lymphatique à travers les villosités intestinales'
    ],
    fullCourseContent: `1. Les deux dimensions indissociables de la digestion :
- La transformation mécanique : Découpage, concassage et broyage des aliments par les dents dans la bouche (mastication), formation du bol alimentaire imprégné de salive, déglutition à travers l'œsophage, brassage et malaxation énergique par les parois musclées de l'estomac et de l'intestin. Cette action mécanique fragmente les aliments en fines particules pour accroître la surface de contact offerte aux enzymes.
- La transformation chimique : Découpage biochimique (hydrolyse) des macromolécules insolubles en petites molécules solubles (les nutriments) sous l'action catalytique des enzymes digestives.

2. Propriétés des enzymes digestives :
Une enzyme est une macromolécule biologique (protéine) sécrétée par des glandes digestives, capable de catalyser à très faible dose une réaction chimique spécifique.
- Spécificité étroite : chaque enzyme n'agit que sur un substrat déterminé (l'amylase salivaire ne découpe que l'amidon cuit, la trypsine ne découpe que les protéines).
- Sensibilité à la température : active à la température corporelle ($37^\\circ\\text{C}$), inactive et figée à basse température ($0^\\circ\\text{C}$), dénaturée et détruite irréversiblement à haute température ($> 60^\\circ\\text{C}$ / ébullition).

3. Trajet et étapes enzymatiques le long du tube digestif :
A. DANS LA BOUCHE :
- Suc digestif : Salive (sécrétée par les glandes salivaires).
- Enzyme : Amylase salivaire (ou ptyaline).
- Action : Hydrolyse de l'amidon cuit en maltose (sucre réducteur à deux motifs de glucose).
- Résultat : Formation du bol alimentaire.

B. DANS L'ESTOMAC :
- Suc digestif : Suc gastrique (contenant acide chlorhydrique $HCl$, pepsine, lipase gastrique).
- Enzyme majeure : Pepsine (protéase gastrique active en milieu très acide $pH \\approx 2$).
- Action : Découpage des grosses molécules de protides en chaînes plus courtes appelées polypeptides ou peptones.
- Résultat : Le bol alimentaire devient une bouillie acide appelée le chyme stomacal.

C. DANS L'INTESTIN GRÊLE (lieu essentiel de la digestion) :
- Action combinée de trois liquides :
  1. La bile (sécrétée par le foie, stockée dans la vésicule biliaire, sans enzyme) : émulsionne les lipides en fines gouttelettes pour faciliter l'action des lipases.
  2. Le suc pancréatique (déversé par le canal pancréatique) : contient amylase pancréatique (achève la dégradation de l'amidon), trypsine (découpe polypeptides en peptides courts), lipase pancréatique.
  3. Le suc intestinal (sécrété par les glandes de l'intestin) : maltase (maltose -> glucose), protéases/peptidases (peptides -> acides aminés), sucrase/lactase, lipases.
- Résultat : Le chyme devient le chyle, une émulsion laiteuse riche en nutriments directement assimilables.

4. Bilan des produits finis (Les Nutriments) :
- Glucides -> Glucose.
- Protides -> Acides aminés.
- Lipides -> Acides gras + Glycérol.
- Eau, sels minéraux, vitamines : ne subissent aucune transformation, ce sont déjà des nutriments.

5. L'absorption intestinale à travers les villosités :
L'absorption est le passage des nutriments de la lumière intestinale vers le milieu intérieur (sang et lymphe).
La paroi interne de l'intestin grêle présente des replis lamelleux hérissés de millions de villosités intestinales (immense surface d'échange richement vascularisée, épithélium très mince).
- Voie sanguine : Les capillaires sanguins de la villosité absorbent l'eau, les sels minéraux, le glucose, les acides aminés et les vitamines hydrosolubles (vers la veine porte hépatique et le foie).
- Voie lymphatique : Le vaisseau chylifère central de la villosité absorbe les acides gras, le glycérol et les vitamines liposolubles (vers la circulation lymphatique, canal thoracique, puis veine sous-clavière).`,
    definitions: [
      {
        term: 'Enzyme digestive',
        definition: 'Substance biologique protéique sécrétée par les glandes digestives, catalysant spécifiquement l\'hydrolyse des aliments en nutriments à 37°C.'
      },
      {
        term: 'Nutriment',
        definition: 'Molécule simple, soluble et directement assimilable par les cellules de l\'organisme, issue de la digestion des aliments.'
      },
      {
        term: 'Villosité intestinale',
        definition: 'Repli microscopique de la muqueuse intestinale hautement vascularisé, constituant l\'unité fonctionnelle de l\'absorption des nutriments.'
      },
      {
        term: 'Chylifère',
        definition: 'Vaisseau lymphatique situé au centre de chaque villosité intestinale, spécialisé dans l\'absorption des lipides.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Spécificité enzymatique',
        statement: 'Une enzyme digestive agit sur un seul type de liaison chimique et transforme un substrat précis en un produit donné.',
        explanation: 'L\'amylase ne peut pas digérer les protéines, et la trypsine ne peut pas digérer l\'amidon.'
      },
      {
        name: 'Substances non digérées',
        statement: 'L\'eau, les vitamines et les sels minéraux ne subissent aucune hydrolyse enzymatique car ce sont déjà de petites molécules directement absorbables.',
        explanation: 'Elles traversent directement la paroi des villosités sans modification.'
      }
    ],
    formulas: [
      {
        name: 'Bilan de la digestion chimique',
        formula: '\\text{Amidon} \\xrightarrow{\\text{Amylase}} \\text{Maltose} \\xrightarrow{\\text{Maltase}} \\text{Glucose} ; \\quad \\text{Protides} \\xrightarrow{\\text{Protéases}} \\text{Acides aminés}',
        explanation: 'Chaîne séquentielle de dégradation biochimique des aliments le long du tube digestif.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mise en évidence in vitro de la digestion de l\'amidon par la salive',
        procedure: 'Préparer deux tubes à 37°C au bain-marie : Tube A (empois d\'amidon + eau), Tube B (empois d\'amidon + salive fraîche). Après 30 minutes, tester des aliquotes à l\'eau iodée et à la liqueur de Fehling.',
        tip: 'Le tube A reste bleu à l\'eau iodée (amidon présent, pas de digestion). Le tube B donne un précipité rouge brique à la liqueur de Fehling (l\'amidon s\'est transformé en maltose).'
      },
      {
        stepNumber: 2,
        title: 'Identification des deux voies d\'absorption intestinale',
        procedure: 'Distinguer les nutriments empruntant les capillaires sanguins (hydrosolubles : glucose, acides aminés, sels minéraux) de ceux empruntant le chylifère lymphatique (liposolubles : acides gras, glycérol).',
        tip: 'Rappelez-vous que les lipides blanchissent la lymphe en formant le chyle au sein des chylifères.'
      }
    ],
    examples: [
      {
        statement: 'On fait agir de la salive bouillie sur de l\'empois d\'amidon à 37°C. Après 30 minutes, le test à l\'eau iodée est positif (coloration bleue) et le test à la liqueur de Fehling est négatif. Explique ce résultat.',
        solution: `L'ébullition a dénaturé et détruit irréversiblement l'amylase salivaire contenue dans la salive. L'enzyme devenue inactive ne peut plus hydrolyser l'amidon en maltose. L'amidon est donc resté intact (coloration bleue à l'eau iodée) et aucun sucre réducteur n'a été produit (absence de précipité rouge brique).`
      }
    ],
    exercises: [
      {
        question: 'Complète : Dans la bouche, l\'amidon cuit est transformé en .......... par l\'.......... contenue dans la salive. Dans l\'estomac, les protides sont transformés en .......... par la .......... Dans l\'intestin grêle, les lipides sont émulsionnés par la .......... et transformés en .......... et .......... par les ..........',
        correction: `Dans la bouche, l\'amidon cuit est transformé en maltose par l\'amylase salivaire (ou ptyaline). Dans l\'estomac, les protides sont transformés en polypeptides par la pepsine. Dans l\'intestin grêle, les lipides sont émulsionnés par la bile et transformés en acides gras et glycérol par les lipases.`
      }
    ],
    evaluationSituation: {
      context: 'Au cours d\'un repas copieux à midi au collège de Taabo, un élève mange du pain, du lait et des œufs. Rassasié, il pense ne plus avoir faim avant le lendemain matin. Pourtant, six heures plus tard, son estomac gronde et il ressent une vive faim. Il te sollicite pour comprendre comment son repas a disparu.',
      instructions: [
        '1. Cite les trois organes principaux où s\'est effectuée la digestion de ce repas.',
        '2. Nomme les produits finis (nutriments) obtenus à l\'issue de la digestion de ce menu.',
        '3. Précise le phénomène par lequel ces nutriments ont quitté le tube digestif et nomme les deux voies empruntées.',
        '4. Explique pourquoi cet élève a faim six heures plus tard.'
      ],
      solutionGuide: '1. Organes : bouche, estomac, intestin grêle. 2. Nutriments finis : glucose (issu de l\'amidon du pain et du lactose du lait), acides aminés (issus de la caséine du lait et de l\'albumine de l\'œuf), acides gras et glycérol (issus des lipides du lait/beurre), eau et sels minéraux. 3. Phénomène : absorption intestinale à travers les villosités via la voie sanguine (glucose, acides aminés) et lymphatique (lipides). 4. Les nutriments ont été absorbés et distribués aux cellules consommatrices d\'énergie ; l\'estomac et l\'intestin grêle sont vides.'
    },
    examTraps: [
      'Croire que la bile contient des enzymes digestives : la bile ne contient AUCUNE enzyme, elle émulsionne seulement mécaniquement les lipides.',
      'Affirmer que l\'amidon cru est digéré dans la bouche : l\'amylase salivaire n\'agit efficacement que sur l\'amidon CUIT (gélifié en empois).',
      'Confondre le bol alimentaire (bouche), le chyme (estomac) et le chyle (intestin grêle).'
    ],
    quickMemo: 'Digestion = Mécanique (dents, malaxation) + Chimique (enzymes à 37°C) | Amidon -> Maltose -> Glucose | Protides -> Polypeptides -> Acides aminés | Lipides -> Acides gras + Glycérol | Absorption intestinale par les villosités (sang pour glucose/acides aminés, lymphe pour lipides).',
    keywords: ['digestion', 'enzymes digestives', 'amylase salivaire', 'pepsine', 'lipase', 'nutriments', 'villosités intestinales', 'absorption intestinale', 'voie sanguine', 'voie lymphatique']
  },

  // ========================================================
  // 3ÈME - SVT : LEÇON 3 & 4 - LE SANG, LA COAGULATION ET LA TRANSFUSION SANGUINE
  // ========================================================
  {
    id: 'svt-3e-sang-coagulation-transfusion-sanguine',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : La nutrition chez l\'Homme',
    lessonTitle: 'Le sang, la coagulation et les règles de la transfusion sanguine (ABO et Rhésus)',
    objectifs: [
      'Identifier les éléments figurés du sang (hématies/globules rouges, leucocytes/globules blancs : monocytes, lymphocytes, polynucléaires, et plaquettes) et le plasma sur un frottis sanguin',
      'Distinguer le sang sédimenté (avec anticoagulant) du sang coagulé (caillot + sérum)',
      'Expliquer le mécanisme biochimique de la coagulation sanguine (transformation du fibrinogène en filaments de fibrine sous l\'action des plaquettes, du calcium et de la vitamine K)',
      'Maîtriser la détermination des groupes sanguins du système ABO par les sérums tests (anti-A, anti-B, anti-A+B) et le facteur Rhésus (antigène D)',
      'Expliquer le mécanisme de l\'agglutination et appliquer rigoureusement les règles de compatibilité transfusionnelle'
    ],
    fullCourseContent: `1. Les Constituants du sang (Frottis sanguin au microscope) :
Le sang est un tissu conjonctif liquide composé de deux phases :
A. LES ÉLÉMENTS FIGURÉS (cellules sanguines) :
- Les hématies (globules rouges ou érythrocytes) : Cellules anucléées en forme de disques biconcaves (environ 5 millions par $mm^3$). Elles renferment l'hémoglobine ($Hb$), pigment rouge capable de fixer et de transporter l'oxygène ($O_2$) des poumons aux tissus et une partie du dioxyde de carbone ($CO_2$).
- Les leucocytes (globules blancs) : Cellules nucléées assurant l'immunité et la défense de l'organisme (environ 7 000 par $mm^3$) :
  * Le monocyte : le plus volumineux, à cytoplasme abondant et gros noyau en grain de haricot (réniforme), capable de phagocytose.
  * Le lymphocyte : petit leucocyte à gros noyau sphérique occupant presque toute la cellule, responsable de la réponse immunitaire spécifique (production d'anticorps).
  * Le polynucléaire : leucocyte à cytoplasme granuleux et noyau plurilobé (aspect de plusieurs noyaux), intervenant rapidement contre les infections bactériennes.
- Les plaquettes sanguines (thrombocytes ou globulins) : Fragments cellulaires anucléés minuscules indispensables à l'hémostase et à la coagulation.

B. LE PLASMA :
Liquide jaune clair dans lequel baignent les cellules. Il transporte l'eau, les nutriments dissous, les déchets métaboliques (urée, acide urique), les hormones, les anticorps, et des protéines solubles dont le fibrinogène.

2. Sang sédimenté vs Sang coagulé :
- Sang sédimenté : Si l'on ajoute un anticoagulant (oxalate d'ammonium ou citrate de sodium), le sang ne coagule pas. Les éléments figurés s'accumulent au fond par gravité (culot globulaire rouge d'hématies surmonté d'un fin liseré blanchâtre de leucocytes) sous le plasma clair surnageant.
  $$\\text{Sang sédimenté} = \\text{Éléments figurés} + \\text{Plasma}$$
- Sang coagulé : Laissé à l'air libre sans anticoagulant, le sang prend en masse. Il se sépare en une masse rouge gélatineuse (le caillot) et un liquide jaune ambré qui suinte (le sérum).
  $$\\text{Sang coagulé} = \\text{Caillot} + \\text{Sérum}$$
  $$\\text{Sérum} = \\text{Plasma} - \\text{Fibrinogène}$$
  $$\\text{Caillot} = \\text{Éléments figurés emprisonnés} + \\text{Réseau de fibrine}$$

3. Le Mécanisme de la Coagulation du sang :
En cas de blessure ou au contact de l'air :
Les plaquettes sanguines s'activent et libèrent des facteurs de coagulation.
En présence d'ions calcium ($Ca^{2+}$) et de vitamine K, le fibrinogène (protéine soluble du plasma) est converti en filaments de fibrine insolubles.
Ces filaments forment un filet dense qui emprisonne les globules rouges et colmate la brèche vasculaire : c'est la formation du caillot protecteur, empêchant l'hémorragie.

4. Les Groupes sanguins et la Transfusion sanguine (Système ABO & Rhésus) :
- Les hématies portent à leur surface des marqueurs appelés agglutinogènes (antigènes) : A, B, ou aucun.
- Le sérum contient des anticorps naturels appelés agglutinines : anti-A, anti-B, ou aucun.
  * Groupe A : hématies portant l'antigène A ; sérum contenant des agglutinines anti-B.
  * Groupe B : hématies portant l'antigène B ; sérum contenant des agglutinines anti-A.
  * Groupe AB : hématies portant les deux antigènes A et B ; sérum SANS agglutinine (Receveur universel ABO).
  * Groupe O : hématies SANS antigène A ni B ; sérum contenant les deux agglutinines anti-A et anti-B (Donneur universel ABO).
- Le Facteur Rhésus :
  * Présence de l'antigène D à la surface des hématies = Rhésus positif ($Rh^+$).
  * Absence de l'antigène D = Rhésus négatif ($Rh^-$).
  * Règle de compatibilité Rhésus : un sujet $Rh^-$ peut donner à un sujet $Rh^+$, mais un sujet $Rh^+$ ne peut JAMAIS donner de sang à un receveur $Rh^-$ (risque de fabrication d'anticorps anti-Rhésus et d'hémolyse).
- Règle d'or de la transfusion : Les agglutinines du receveur ne doivent JAMAIS détruire les agglutinogènes portés par les hématies du donneur (sinon agglutination mortelle des hématies bloquant les capillaires sanguins).`,
    definitions: [
      {
        term: 'Agglutinogène (Antigène)',
        definition: 'Molécule située sur la membrane des hématies déterminant le groupe sanguin d\'un individu (antigène A, B ou D/Rhésus).'
      },
      {
        term: 'Agglutinine (Anticorps)',
        definition: 'Anticorps présent dans le sérum capable de se fixer spécifiquement sur un agglutinogène étranger et de provoquer l\'agglutination.'
      },
      {
        term: 'Agglutination',
        definition: 'Formation d\'amas d\'hématies soudées entre elles lors de la rencontre entre un antigène et son anticorps homologue (ex : antigène A + anti-A).'
      },
      {
        term: 'Fibrinogène',
        definition: 'Protéine soluble du plasma qui se polymérise en réseau de fibrine insoluble pour constituer le caillot lors de la coagulation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de Landsteiner pour la transfusion',
        statement: 'Ne jamais injecter d\'hématies dont l\'antigène correspondrait à un anticorps présent dans le plasma du receveur.',
        explanation: 'Si un receveur du groupe A (qui possède des anti-B) reçoit du sang du groupe B, ses anti-B vont détruire instantanément les globules rouges du donneur.'
      },
      {
        name: 'Donneur et Receveur universels complets',
        statement: 'Le groupe O négatif (O-) est donneur universel (aucune molécule antigénique A, B, ni Rhésus sur ses hématies). Le groupe AB positif (AB+) est receveur universel (aucun anticorps anti-A, anti-B, ni anti-Rh dans son plasma).',
        explanation: 'Indispensable pour les urgences vitales au centre national de transfusion sanguine (CNTS).'
      }
    ],
    formulas: [
      {
        name: 'Composition du sang',
        formula: '\\text{Sang total} = \\text{Éléments figurés (45\\%)} + \\text{Plasma (55\\%)} ; \\quad \\text{Caillot} = \\text{Cellules} + \\text{Fibrine}',
        explanation: 'Permet de comprendre la séparation de phase lors de la sédimentation et de la coagulation.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Détermination du groupe sanguin par les sérums tests',
        procedure: 'Déposer 3 gouttes de sang de l\'individu sur une plaque. Ajouter sur la 1ère goutte le sérum anti-A, sur la 2e le sérum anti-B, sur la 3e le sérum anti-Rh. Observer s\'il y a agglutination (+) ou non (-).',
        tip: 'S\'il y a agglutination avec anti-A uniquement -> Groupe A. Avec anti-B uniquement -> Groupe B. Avec les deux -> Groupe AB. Avec aucun -> Groupe O. Si anti-Rh agglutine -> Rh+, sinon Rh-.'
      },
      {
        stepNumber: 2,
        title: 'Vérification de la compatibilité transfusionnelle',
        procedure: '1. Identifier les antigènes sur les globules rouges du donneur. 2. Identifier les anticorps dans le sérum du receveur. 3. S\'il y a concordance entre un antigène du donneur et un anticorps du receveur, la transfusion est interdite.',
        tip: 'Pensez toujours à vérifier en même temps le système ABO et le signe Rhésus (+ ou -).'
      }
    ],
    examples: [
      {
        statement: 'Kouadio a besoin d\'une transfusion sanguine d\'urgence. Le test aux sérums donne : avec sérum anti-A = Pas d\'agglutination (-) ; avec sérum anti-B = Agglutination (+) ; avec sérum anti-Rh = Agglutination (+). Détermine son groupe sanguin et les donneurs compatibles.',
        solution: `1. Identification du groupe :
- Pas d\'agglutination avec anti-A : pas d\'antigène A.
- Agglutination avec anti-B : présence de l\'antigène B.
- Agglutination avec anti-Rh : présence de l\'antigène D (Rhésus positif).
Kouadio est donc du groupe B positif (B+).
2. Donneurs compatibles :
En tant que B+, son sérum contient des anticorps anti-A. Il peut donc recevoir du sang de donneurs n'ayant pas d'antigène A, soit les groupes B+, B-, O+, et O-.`
      }
    ],
    exercises: [
      {
        question: 'Établis la différence de composition entre le plasma et le sérum sanguin.',
        correction: `Le plasma est la phase liquide du sang non coagulé (recueillie en présence d\'un anticoagulant), il contient toutes les protéines solubles dont le fibrinogène. Le sérum est le liquide recueilli après coagulation du sang à l\'air libre ; il a la même composition que le plasma sauf qu\'il est totalement dépourvu de fibrinogène (lequel a été consommé pour former le caillot de fibrine).`
      }
    ],
    evaluationSituation: {
      context: 'Au cours d\'une séance de travaux manuels, un élève de 3ème se blesse profondément au pied avec une machette. La blessure saigne abondamment puis s\'arrête spontanément avant son arrivée à l\'infirmerie où le médecin prescrit un bilan sanguin.',
      instructions: [
        '1. Nomme le phénomène d\'arrêt du saignement et cite l\'élément figuré du sang qui en est le principal artisan.',
        '2. Explique le mécanisme biochimique complet de la coagulation du sang.',
        '3. Indique pourquoi une personne hémophile (déficience d\'un facteur de coagulation) court un danger mortel lors d\'une blessure banale.'
      ],
      solutionGuide: '1. Phénomène : la coagulation sanguine (hémostase). Élément figuré : les plaquettes sanguines (thrombocytes). 2. Mécanisme : Au contact de l\'air et des tissus lésés, les plaquettes sanguines associées au calcium et à la vitamine K transforment le fibrinogène soluble du plasma en un réseau filamenteux de fibrine insoluble qui emprisonne les hématies pour former le caillot hémostatique bouchant la blessure. 3. Danger pour l\'hémophile : l\'absence de caillot entraîne la poursuite continue du saignement, provoquant une hémorragie interne ou externe mortelle.'
    },
    examTraps: [
      'Confondre agglutinogène (antigène sur les hématies) et agglutinine (anticorps dans le sérum).',
      'Oublier que les Rhésus négatifs peuvent donner aux Rhésus positifs, mais JAMAIS l\'inverse.',
      'Croire que le sang sédimenté contient du sérum : le sérum n\'apparaît que dans le sang COAGULÉ.'
    ],
    quickMemo: 'Sang = 55% Plasma + 45% Éléments figurés (Hématies, Leucocytes, Plaquettes) | Coagulation : Fibrinogène + Calcium + Vitamine K -> Fibrine (caillot) | Transfusion ABO : O = donneur universel, AB = receveur universel | Sérum = Plasma sans fibrinogène.',
    keywords: ['sang', 'hématies', 'leucocytes', 'plaquettes sanguines', 'coagulation', 'fibrinogène', 'fibrine', 'groupes sanguins', 'système ABO', 'facteur Rhésus', 'transfusion']
  },

  // ========================================================
  // 3ÈME - SVT : LEÇON 5 - LA CIRCULATION SANGUINE ET LA SANTÉ CARDIO-VASCULAIRE
  // ========================================================
  {
    id: 'svt-3e-circulation-sanguine-coeur-sante',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : La nutrition chez l\'Homme',
    lessonTitle: 'La circulation sanguine, le fonctionnement du cœur et la santé cardio-vasculaire',
    objectifs: [
      'Décrire l\'anatomie interne du cœur (4 cavités : oreillettes droite et gauche, ventricules droit et gauche, cloison étanche, valvules auriculo-ventriculaires et sigmoïdes)',
      'Expliquer les trois phases de la révolution cardiaque (systole auriculaire 0,1 s, systole ventriculaire 0,3 s, diastole générale 0,4 s) durant au total 0,8 s',
      'Retracer le double trajet de la circulation du sang : petite circulation (pulmonaire) et grande circulation (générale)',
      'Identifier les facteurs de risque cardio-vasculaire (sédentarité, tabagisme, alcoolisme, alimentation trop grasse ou trop salée)',
      'Expliquer l\'hypertension artérielle, l\'athérosclérose (dépôt de cholestérol), l\'infarctus du myocarde et l\'accident vasculaire cérébral (AVC)'
    ],
    fullCourseContent: `1. Anatomie et organisation interne du cœur :
Le cœur est un muscle creux (le myocarde) fonctionnant comme une double pompe aspirante et refoulante. Il est divisé en deux parties étanches sans communication directe :
- Le cœur droit : Reçoit et propulse du sang riche en dioxyde de carbone ($CO_2$, sang rouge sombre). Il comprend l'oreillette droite (qui reçoit les veines caves supérieure et inférieure) et le ventricule droit (d'où part l'artère pulmonaire munie de valvules sigmoïdes).
- Le cœur gauche : Reçoit et propulse du sang riche en dioxygène ($O_2$, sang rouge vif). Il comprend l'oreillette gauche (qui reçoit les 4 veines pulmonaires) et le ventricule gauche à paroi très épaisse et musclée (d'où part l'artère aorte munie de valvules sigmoïdes).
- Les valvules cardiaques :
  * Valvules auriculo-ventriculaires : empêchent le reflux du sang des ventricules vers les oreillettes.
  * Valvules sigmoïdes (ou artérielles) : situées à la base de l'aorte et de l'artère pulmonaire, empêchent le sang expulsé de revenir dans les ventricules.

2. La Révolution cardiaque (durée totale : $0{,}8\\text{ s}$ pour un rythme de 75 battements/min) :
Un battement cardiaque se décompose en trois phases chronologiques :
  1. La systole auriculaire ($0{,}1\\text{ s}$) : Contraction simultanée des deux oreillettes remplies de sang. Les valvules auriculo-ventriculaires s'ouvrent, chassant le sang dans les ventricules (les valvules sigmoïdes restent fermées).
  2. La systole ventriculaire ($0{,}3\\text{ s}$) : Contraction puissante des deux ventricules. Sous la pression, les valvules auriculo-ventriculaires claquent et se ferment (premier bruit du cœur "toum"), tandis que les valvules sigmoïdes s'ouvrent, propulsant le sang sous haute pression dans les artères (aorte et pulmonaire).
  3. La diastole générale ($0{,}4\\text{ s}$) : Phase de repos généralisé. Le myocarde se relâche. Les valvules sigmoïdes se ferment brusquement (deuxième bruit du cœur "ta"), empêchant le retour du sang dans le cœur. Les valvules auriculo-ventriculaires s'entrouvrent et le sang veineux commence à remplir passivement les oreillettes.

3. La Double circulation sanguine chez l'Homme :
Le sang circule en circuit fermé selon deux boucles complémentaires :
A. LA PETITE CIRCULATION (Circulation pulmonaire) :
- Trajet : Ventricule droit -> Artère pulmonaire -> Poumons (au niveau des alvéoles pulmonaires, hématose : rejet du $CO_2$ et fixation de l'$O_2$, le sang rouge sombre devient rouge vif) -> 4 Veines pulmonaires -> Oreillette gauche.
- Rôle : Réoxygéner le sang et éliminer le dioxyde de carbone.

B. LA GRANDE CIRCULATION (Circulation générale) :
- Trajet : Ventricule gauche -> Artère aorte -> Artères ramifiées -> Capillaires de tous les organes (cerveau, muscles, reins, tube digestif où le sang livre l'$O_2$ et les nutriments, et se charge de $CO_2$ et déchets) -> Veines de plus en plus grosses -> Veines caves (inférieure et supérieure) -> Oreillette droite.
- Rôle : Nourrir et oxygéner l'ensemble des cellules de l'organisme.

4. Facteurs de risque et Santé cardio-vasculaire :
- Athérosclérose : Dépôt progressif de plaques de graisse et de cholestérol sur la paroi interne des artères. Les artères perdent leur élasticité, leur lumière rétrécit, ralentissant le débit sanguin.
- Conséquences majeures :
  * Hypertension artérielle (HTA) : Pression excessive exercée par le sang sur la paroi des artères durcies.
  * Infarctus du myocarde (crise cardiaque) : Obstruction complète d'une artère coronaire nourricière du cœur par un caillot (thrombus), entraînant la nécrose du tissu cardiaque.
  * Accident Vasculaire Cérébral (AVC) : Rupture ou obstruction d'une artère cérébrale privant une zone du cerveau d'oxygène (paralysie, aphasie, décès).
- Règles d'hygiène préventive : Éviter les excès de graisses animales, de sucre et de sel ; pratiquer une activité physique régulière ; proscrire le tabac et l'alcool ; surveiller régulièrement sa tension artérielle.`,
    definitions: [
      {
        term: 'Systole',
        definition: 'Phase active de contraction du muscle cardiaque (auriculaire ou ventriculaire) provoquant l\'expulsion du sang.'
      },
      {
        term: 'Diastole',
        definition: 'Phase de relâchement et de repos du muscle cardiaque durant laquelle les cavités se remplissent de sang.'
      },
      {
        term: 'Athérosclérose',
        definition: 'Maladie des artères caractérisée par l\'accumulation de plaques de lipides (cholestérol) rétrécissant leur diamètre.'
      },
      {
        term: 'Infarctus du myocarde',
        definition: 'Destruction d\'une partie du muscle cardiaque due à l\'obstruction d\'une artère coronaire par un caillot de sang.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Sens de circulation du sang dans le cœur',
        statement: 'Le sang circule toujours à sens unique : Veines -> Oreillettes -> Ventricules -> Artères.',
        explanation: 'Le sens unique est garanti par le jeu mécanique d\'ouverture et de fermeture des valvules.'
      },
      {
        name: 'Différence artère / veine',
        statement: 'Une artère part toujours du cœur vers les organes (paroi épaisse et élastique). Une veine ramène toujours le sang des organes vers le cœur (paroi plus fine munie de valvules anti-reflux).',
        explanation: 'L\'artère pulmonaire transporte du sang rouge sombre (riche en CO2) tandis que les veines pulmonaires transportent du sang rouge vif (riche en O2).'
      }
    ],
    formulas: [
      {
        name: 'Durée de la révolution cardiaque',
        formula: 'T_{\\text{cycle}} = t_{\\text{systole auriculaire}} (0{,}1\\text{ s}) + t_{\\text{systole ventriculaire}} (0{,}3\\text{ s}) + t_{\\text{diastole}} (0{,}4\\text{ s}) = 0{,}8\\text{ s}',
        explanation: 'Correspond à une fréquence cardiaque normale au repos de f = 60 / 0,8 = 75 battements par minute.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Traçage du circuit de la petite circulation',
        procedure: 'Partir du ventricule droit (sang désoxygéné) -> emprunter l\'artère pulmonaire -> traverser le réseau de capillaires pulmonaires (échanges gazeux alvéolaires) -> revenir par les veines pulmonaires (sang oxygéné) -> déboucher dans l\'oreillette gauche.',
        tip: 'Mémorisez : droit = sang riche en CO2 ; gauche = sang riche en O2.'
      },
      {
        stepNumber: 2,
        title: 'Traçage du circuit de la grande circulation',
        procedure: 'Partir du ventricule gauche (sang oxygéné sous forte pression) -> emprunter l\'artère aorte -> irriguer tous les organes -> retourner par les veines caves supérieure et inférieure -> déboucher dans l\'oreillette droite.',
        tip: 'Le ventricule gauche a une paroi trois fois plus musclée que le droit car il doit propulser le sang dans tout le corps.'
      }
    ],
    examples: [
      {
        statement: 'Un élève affirme que toutes les artères transportent du sang rouge vif riche en oxygène et toutes les veines du sang rouge sombre riche en CO2. Cette affirmation est-elle exacte ? Justifie.',
        solution: `Cette affirmation est fausse. Si c'est vrai pour la grande circulation générale, c'est l'inverse dans la petite circulation : l'artère pulmonaire transporte du sang pauvre en O2 et chargé de CO2 vers les poumons, tandis que les quatre veines pulmonaires ramènent au cœur du sang riche en O2 (rouge vif) venant d'être oxygéné dans les poumons.`
      }
    ],
    exercises: [
      {
        question: 'Classe dans l\'ordre chronologique les phases du cycle cardiaque : Diastole générale, Systole ventriculaire, Systole auriculaire.',
        correction: `Ordre chronologique : 1. Systole auriculaire (0,1 s), 2. Systole ventriculaire (0,3 s), 3. Diastole générale (0,4 s).`
      },
      {
        question: 'Établis le lien entre la consommation excessive d\'aliments gras et le risque d\'infarctus du myocarde.',
        correction: `Une alimentation trop riche en graisses saturées élève le taux de mauvais cholestérol dans le sang. Ce cholestérol se dépose sur la paroi interne des artères coronaires (nourricières du cœur), formant des plaques d'athérome (athérosclérose). Le rétrécissement progressif ou le blocage complet de ces artères par un caillot prive le myocarde d'oxygène, entraînant l'asphyxie et la mort des cellules cardiaques : c'est l'infarctus du myocarde.`
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne Bad de N\'douci, lors d\'une activité de jardinage, un élève se blesse et perd du sang par saccades régulières tandis que son cœur s\'accélère vivement.',
      instructions: [
        '1. Explique pourquoi le sang jaillit par saccades lors de la rupture d\'une artère.',
        '2. Décris brièvement le trajet emprunté par le sang depuis le ventricule gauche jusqu\'aux muscles de la main.',
        '3. Propose deux mesures d\'hygiène pour préserver la santé de son système cardio-vasculaire.'
      ],
      solutionGuide: '1. Le jet saccadé est dû à la pression pulsatile engendrée à chaque contraction ventriculaire (systole ventriculaire) qui envoie une onde de pression à travers le réseau artériel. 2. Trajet : Ventricule gauche -> Artère aorte -> Artère sous-clavière -> Artère humérale/radiale -> Capillaires de la main. 3. Mesures d\'hygiène : Pratique régulière du sport d\'endurance, alimentation pauvre en graisses animales et sel, proscription formelle du tabac et de l\'alcool.'
    },
    examTraps: [
      'Confondre la petite circulation (vers les poumons) et la grande circulation (vers tous les organes).',
      'Placer du sang oxygéné dans le cœur droit : le cœur droit ne brasse que du sang désoxygéné (veineux).',
      'Confondre oreillettes (cavités supérieures de réception) et ventricules (cavités inférieures d\'expulsion).'
    ],
    quickMemo: 'Cœur = 4 cavités étanches | Révolution cardiaque = Systole auriculaire (0,1s) + Systole ventriculaire (0,3s) + Diastole (0,4s) = 0,8s | Petite circulation (cœur droit -> poumons -> cœur gauche) | Grande circulation (cœur gauche -> organes -> cœur droit).',
    keywords: ['circulation sanguine', 'cœur', 'myocarde', 'systole', 'diastole', 'artère aorte', 'artère pulmonaire', 'athérosclérose', 'infarctus', 'hypertension']
  },

  // ========================================================
  // 3ÈME - SVT : LEÇON 6 - L'INFECTION AU VIH ET LE SIDA
  // ========================================================
  {
    id: 'svt-3e-vih-sida-reproduction-prevention',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 2 : La reproduction humaine et l\'infection au VIH',
    lessonTitle: 'L\'infection au VIH : Mécanisme d\'action sur les lymphocytes T4, transmission et prévention',
    objectifs: [
      'Définir le VIH (Virus de l\'Immunodéficience Humaine) et le SIDA (Syndrome d\'ImmunoDéficience Acquise)',
      'Décrire les 5 étapes du cycle infectieux du VIH à l\'intérieur du lymphocyte T4 (fixation, injection du matériel génétique, rétrotranscription par la transcriptase inverse, intégration au génome, multiplication virale et destruction cellulaire)',
      'Distinguer la phase de séropositivité asymptomatique et la phase de SIDA déclaré caractérisée par les maladies opportunistes',
      'Identifier les trois voies exclusives de transmission du VIH : voie sexuelle, voie sanguine, et voie mère-enfant (grossesse, accouchement, allaitement)',
      'Proposer des moyens de prévention individuels et collectifs (abstinence, fidélité, préservatifs, dépistage volontaire, traitement antirétroviral / PTME)'
    ],
    fullCourseContent: `1. Définitions fondamentales :
- VIH : Virus de l'Immunodéficience Humaine. C'est un rétrovirus dont le matériel génétique est constitué d'ARN et qui possède une enzyme clé : la transcriptase inverse.
- SIDA : Syndrome d'ImmunoDéficience Acquise. C'est le stade ultime et terminal de l'infection par le VIH, caractérisé par l'effondrement des défenses immunitaires et l'apparition de maladies graves dites opportunistes.

2. Les 5 étapes du mécanisme de l'infection au VIH :
Le virus cible spécifiquement les globules blancs chefs d'orchestre de l'immunité : les lymphocytes T4 (ou CD4).
  - Étape 1 : La Fixation. Le virus reconnaît et se fixe à la surface de la membrane plasmique du lymphocyte T4 grâce à ses glycoprotéines de surface (gp120).
  - Étape 2 : L'Injection (Pénétration). La membrane du virus fusionne avec celle du lymphocyte T4, permettant l'injection de son matériel génétique (ARN viral) et de ses enzymes dans le cytoplasme de la cellule hôte.
  - Étape 3 : La Transformation (Rétrotranscription). L'enzyme virale appelée la transcriptase inverse transforme l'ARN viral en ADN proviral compatible avec le matériel génétique de la cellule hôte.
  - Étape 4 : L'Intégration. L'ADN viral pénètre dans le noyau du lymphocyte T4 et s'intègre de façon permanente dans l'ADN cellulaire de la personne : c'est l'infection. À ce stade, le virus peut rester silencieux pendant des mois ou des années. La personne est dite séropositive (présence d'anticorps anti-VIH dans le sang) et porteuse asymptomatique (elle est en bonne santé apparente mais peut transmettre le virus).
  - Étape 5 : La Multiplication et le Bourgeonnement. Lorsque le virus se réactive, le lymphocyte T4 est détourné pour fabriquer des centaines de nouveaux virus. En sortant par bourgeonnement, ils font éclater et détruisent la cellule hôte. Ces nouveaux virus libres vont infecter d'autres lymphocytes T4.

3. Évolution de l'infection et Stade SIDA :
La destruction massive et continue des lymphocytes T4 abaisse leur taux bien en dessous du seuil critique (moins de 200 cellules/$mm^3$). L'organisme devient incapable de se défendre. Des microbes habituellement inoffensifs prolifèrent et provoquent des maladies opportunistes mortelles :
- Tuberculose pulmonaire tenace ;
- Candidose œsophagienne ;
- Sarcome de Kaposi (tumeur cutanée se traduisant par des plaques noirâtres sur la peau) ;
- Diarrhées chroniques persistantes, fièvre prolongée, sueurs nocturnes abondantes, gonflement important des ganglions et amaigrissement squelettique spectaculaire.

4. Les 3 Voies de transmission du VIH :
- La voie sexuelle (plus de 80% des cas) : Lors de rapports sexuels non protégés avec une personne contaminée (par le sperme et les sécrétions vaginales).
- La voie sanguine :
  * Transfusions sanguines non sécurisées ;
  * Utilisation d'instruments tranchants ou piquants non stérilisés ou souillés : seringues de drogue, lames de rasoir chez le coiffeur, aiguilles de tatouage ou de piercing, scarifications rituelles, circoncisions traditionnelles non aseptisées.
- La voie mère-enfant :
  * Pendant la grossesse (à travers les échanges placentaires) ;
  * Pendant l'accouchement (contact avec le sang maternel) ;
  * Pendant l'allaitement maternel au sein.

5. Les Moyens de prévention et de lutte :
- Prévention sexuelle : Règle ABC (Abstinence, Bonne fidélité mutuelle entre partenaires séronégatifs, Condom / port correct et systématique du préservatif masculin ou féminin).
- Prévention sanguine : Dépistage systématique des poches de sang au CNTS, utilisation exclusive de seringues et lames à usage unique jetables, stérilisation rigoureuse du matériel médical et artisanal.
- Prévention mère-enfant (PTME) : Traitement préventif de la femme enceinte séropositive par des médicaments antirétroviraux (ARV) et accouchement assisté.
- Dépistage volontaire et prise en charge : Le test de dépistage rapide permet de connaître son statut sérologique. Bien qu'il n'existe pas encore de vaccin ni de traitement curatif définitif, les ARV bloquent la multiplication virale et permettent aux personnes vivant avec le VIH de mener une vie normale et prolongée.`,
    definitions: [
      {
        term: 'VIH',
        definition: 'Virus de l\'Immunodéficience Humaine, rétrovirus qui détruit sélectivement les lymphocytes T4 du système immunitaire.'
      },
      {
        term: 'SIDA',
        definition: 'Syndrome d\'ImmunoDéficience Acquise, stade avancé de l\'infection au cours duquel surviennent les maladies opportunistes.'
      },
      {
        term: 'Séropositivité',
        definition: 'État d\'une personne dont le sang contient des anticorps spécifiques dirigés contre le VIH, attestant de son infection.'
      },
      {
        term: 'Maladies opportunistes',
        definition: 'Infections graves provoquées par des micro-organismes profitant de l\'affaiblissement extrême des défenses immunitaires de l\'hôte.'
      },
      {
        term: 'Transcriptase inverse',
        definition: 'Enzyme virale qui convertit l\'ARN viral en ADN proviral dans le cytoplasme du lymphocyte hôte.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Voies de transmission exclusives',
        statement: 'Le VIH ne se transmet QUE par trois voies : sexuelle, sanguine et mère-enfant.',
        explanation: 'Le VIH NE SE TRANSMET PAS par les piqûres de moustiques, la sueur, les larmes, les poignées de main, le partage d\'un repas, des vêtements ou des toilettes.'
      },
      {
        name: 'Rôle de la transcriptase inverse',
        statement: 'La transcriptase inverse est la cible majeure des médicaments antirétroviraux.',
        explanation: 'En bloquant cette enzyme, on empêche la fabrication de l\'ADN viral et l\'intégration au chromosome cellulaire.'
      }
    ],
    formulas: [
      {
        name: 'Chronologie de l\'infection virale',
        formula: '\\text{Fixation} \\to \\text{Injection} \\to \\text{Rétrotranscription (ARN} \\to \\text{ADN)} \\to \\text{Intégration} \\to \\text{Multiplication et lyse}',
        explanation: 'Cycle de réplication lytique du rétrovirus au sein du lymphocyte T4.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Classement ordonné des étapes du cycle du VIH',
        procedure: '1. Reconnaissance membranaire (Fixation sur le récepteur CD4). 2. Pénétration et libération du matériel génétique (Injection). 3. Synthèse de l\'ADN complémentaire par la transcriptase inverse (Transformation). 4. Insertion dans le chromosome de la cellule (Intégration). 5. Production de virions et mort de la cellule (Multiplication).',
        tip: 'Mémorisez le sigle F-I-T-I-M pour retrouver l\'ordre exact aux épreuves du BEPC.'
      }
    ],
    examples: [
      {
        statement: 'Lors d\'une enquête, un élève affirme qu\'on peut contracter le VIH en partageant un repas avec une personne séropositive ou en se faisant piquer par un moustique. Corrige cette fausse croyance.',
        solution: `Ces affirmations sont scientifiquement fausses. Le VIH ne peut pas survivre dans la salive qui contient des enzymes protectrices, ni dans l'estomac où l'acidité gastrique le détruit : manger ensemble ne présente aucun risque. De plus, le moustique n'injecte pas de sang d'une personne à l'autre et le VIH ne peut ni survivre ni se reproduire dans l'organisme du moustique. Les seuls modes de transmission réels sont les rapports sexuels non protégés, le sang et la transmission mère-enfant.`
      }
    ],
    exercises: [
      {
        question: 'Parmi les symptômes suivants, coche uniquement ceux caractéristiques du stade SIDA : règles douloureuses, sarcome de Kaposi, courbatures passagères, gros ganglions au cou, diarrhée chronique, nausée après repas.',
        correction: `Symptômes caractéristiques du stade SIDA :
- Sarcome de Kaposi (cancer de la peau avec taches noires/violacées)
- Gros ganglions persistants (au cou, aisselles, aine)
- Diarrhée chronique durant plus d\'un mois accompagnée d\'un amaigrissement important.`
      }
    ],
    evaluationSituation: {
      context: 'Aline, élève de 16 ans, a eu des rapports sexuels non protégés avec un condisciple. Se sentant fatiguée et très amaigrie, elle effectue des examens médicaux qui révèlent : test de grossesse positif, présence de bacilles de Koch (tuberculose) dans les crachats, et présence d\'anticorps anti-VIH dans le sang.',
      instructions: [
        '1. Nomme la maladie principale contractée par Aline et explique comment elle l\'a attrapée.',
        '2. Nomme le type de grossesse d\'Aline compte tenu de son âge et cite deux risques médicaux associés.',
        '3. Indique le danger majeur couru par le futur bébé et nomme la voie de transmission concernée.',
        '4. Donne un conseil médical urgent à Aline pour épargner son bébé.'
      ],
      solutionGuide: '1. Maladie principale : Infection au VIH / SIDA (stade avancé révélé par la maladie opportuniste qu\'est la tuberculose), contractée par voie sexuelle lors d\'un rapport non protégé. 2. Grossesse précoce (16 ans, mineure scolaire), risques : accouchement dystocique difficile nécessitant une césarienne, hémorragies, risque de fistule obstétricale, déscolarisation. 3. Le bébé risque d\'être infecté par le VIH par la voie mère-enfant (échanges placentaires ou accouchement). 4. Conseil : Consulter immédiatement dans un centre de Prévention de la Transmission Mère-Enfant (PTME) pour recevoir un traitement préventif antirétroviral (ARV) réduisant le risque de transmission à moins de 2%.'
    },
    examTraps: [
      'Confondre séropositif (porteur du virus, sans maladie visible) et malade du SIDA (effondrement immunitaire avec maladies opportunistes).',
      'Penser qu\'il existe un traitement curatif définitif : les ARV bloquent le virus mais ne l\'éliminent pas totalement de l\'organisme.',
      'Croire que le préservatif n\'est utile que pour éviter les grossesses : il constitue le seul moyen efficace de protection contre le VIH et les IST.'
    ],
    quickMemo: 'VIH détruit les lymphocytes T4 | Cycle viral : Fixation -> Injection -> Transformation (transcriptase inverse) -> Intégration -> Multiplication | 3 voies : Sexuelle, Sanguine, Mère-Enfant | Prévention : Règle ABC, matériel stérile, dépistage, ARV/PTME.',
    keywords: ['VIH', 'SIDA', 'lymphocytes T4', 'transcriptase inverse', 'séropositivité', 'maladies opportunistes', 'voie sexuelle', 'transmission mère-enfant', 'préservatif', 'antirétroviraux']
  },

  // ========================================================
  // 3ÈME - SVT : LEÇON 7 & 8 - LES SOLS, RELATIONS SOLS-PLANTES ET PROTECTION
  // ========================================================
  {
    id: 'svt-3e-sols-caracteristiques-degradation-amelioration',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 3 : Dégradation, protection et amélioration des sols',
    lessonTitle: 'Les caractéristiques des sols, relations sols-plantes en Côte d\'Ivoire et protection',
    objectifs: [
      'Mesurer et calculer les propriétés physiques d\'un sol : perméabilité, porosité, capacité de rétention en eau et capacité en air',
      'Identifier les constituants d\'un sol : eau, air, sels minéraux (chlorures, calcium), humus (appareil de Berlèze pour la faune du sol)',
      'Caractériser les trois grands types de sols en Côte d\'Ivoire (sols ferralitiques, sols ferrugineux, sols hydromorphes) et leur adéquation avec les cultures',
      'Identifier les agents (eau de ruissellement, vent) et les facteurs favorisant la dégradation des sols (pente, déboisement, texture sableuse, feux de brousse)',
      'Expliquer et appliquer les techniques culturales de protection et d\'amélioration des sols (reboisement, engazonnement, jachère, paillage, brise-vent, terrassement, assolement, amendements)'
    ],
    fullCourseContent: `1. Propriétés physiques du sol et méthodes de mesure :
Pour comparer des sols (ex : sol A et sol B) :
- Perméabilité : Aptitude d'un sol à se laisser traverser par l'eau. Se mesure par le temps d'infiltration d'un volume d'eau donné. Plus le temps d'infiltration est court, plus le sol est perméable.
- Porosité : Pourcentage du volume total des espaces vides (pores) par rapport au volume total de la boîte de prélèvement ($V$) :
  $$\\text{Porosité } (\\%) = \\frac{1\\text{ cm}^3 \\times (m'_2 - m'_1)}{V} \\times 100$$
  (avec $m'_1$ = masse de la boîte de sol sec, $m'_2$ = masse de la boîte de sol saturé d'eau).
- Capacité de rétention en eau : Quantité d'eau que le sol est capable de retenir après égouttage complet (20 à 30 minutes) :
  $$\\text{Capacité de rétention } (\\%) = \\frac{1\\text{ cm}^3 \\times (m'_3 - m'_1)}{V} \\times 100$$
  (avec $m'_3$ = masse de la boîte de sol égoutté).
- Capacité en air : Volume d'air présent dans les pores du sol après égouttage :
  $$\\text{Capacité en air } (\\%) = \\frac{1\\text{ cm}^3 \\times (m'_2 - m'_3)}{V} \\times 100$$

2. Constituants du sol :
Un sol complet comprend :
- De l'air (mis en évidence par les bulles qui s'échappent lors de l'immersion d'un échantillon dans l'eau).
- De l'eau (mise en évidence par la buée sur les parois d'un tube à essai chauffé).
- Des sels minéraux solubles : chlorures ($AgNO_3$ donne un précipité blanc noircissant à la lumière) et calcium (oxalate d'ammonium donne un précipité blanc).
- Des colloïdes humiques (humus) : floculent sous l'action du chlorure de calcium ($CaCl_2$).
- Des êtres vivants : faune du sol (insectes, vers, acariens) récoltés grâce à l'appareil de Berlèze (la lampe de 40 W chauffe et éclaire la litière, fuyant la chaleur, les petits animaux tombent dans l'alcool).

3. Répartition des sols et relations sols-plantes en Côte d'Ivoire :
A. SOLS FERRALITIQUES (Zone Sud, Sud-Est et Ouest - Forêt dense humide) :
- Caractéristiques : Sols très profonds, épais, de couleur rouge-ocre, lessivés par de fortes pluies ($> 1300\\text{ mm/an}$).
- Végétation & Cultures adaptées : Plantes pérennes à racines longues et pivotantes capables de puiser l'eau en profondeur. Cultures industrielles : cacaoyer, caféier, palmier à huile, hévéa, cocotier. Cultures vivrières : bananier, manioc, riz pluvial. Arbres d'ébénisterie : acajou, niangon, framiré.

B. SOLS FERRUGINEUX (Zone Centre et Nord - Savanes guinéenne et soudanienne) :
- Caractéristiques : Sols moins profonds, sensibles au dessèchement et à l'érosion, formation fréquente de cuirasses latéritiques dures.
- Végétation & Cultures adaptées : Plantes à cycle végétatif court et à racines superficielles/courtes. Cultures de savane : cotonnier, maïs, arachide, mil, sorgho, soja, anacardier, igname. Reboisement : teck.

C. SOLS HYDROMORPHES (Bas-fonds, vallées alluviales, littoral d'Abidjan) :
- Caractéristiques : Sols constamment gorgés d'eau, très riches en matière organique et alluvions fertiles.
- Cultures adaptées : Plantes hydrophiles à racines courtes : riz irrigué, cultures maraîchères, bananier.

4. Dégradation des sols : Agents et Facteurs :
- Agents de dégradation :
  * L'eau de pluie : L'impact des gouttes disloque les mottes de terre ; l'eau de ruissellement arrache et emporte la terre meuble arable.
  * Le vent (érosion éolienne) : En saison sèche, le vent balaie les particules fines fertilisantes.
- Facteurs aggravants : La pente du terrain (augmente la vitesse et l'énergie cinétique de l'eau), l'absence de couvert végétal (sol dénudé), la texture sableuse instable, les feux de brousse et la déforestation.
- Étapes de l'érosion : Destruction du couvert végétal -> Arrachement de la couche arable -> Transport des particules nutritives -> Formation de rigoles -> Creusement de ravins profonds rendant le sol infertile.

5. Techniques de protection et d'amélioration des sols :
- Pour protéger contre l'érosion :
  * Reboisement et engazonnement : Les racines fixent le sol et le feuillage amortit l'impact des pluies.
  * Paillage : Couvrir la terre de résidus végétaux pour limiter le ruissellement et conserver l'humidité.
  * Terrasses et banquettes : Sur les terrains en pente pour casser la vitesse de l'eau.
  * Brise-vent et haies vives : Freiner l'érosion éolienne.
  * Abandon des feux de brousse et de la culture sur brûlis.
- Pour restaurer et améliorer la fertilité :
  * Jachère : Laisser le sol au repos plusieurs années pour qu'il régénère son couvert et sa matière organique.
  * Assolement / Rotation des cultures : Alterner céréales (puisent l'azote) et légumineuses (enrichissent le sol en azote grâce à leurs nodosités bactériennes).
  * Amendements et engrais : Apport de compost, fumier (matière organique) et engrais minéraux N-P-K pour compenser les prélèvements des récoltes.`,
    definitions: [
      {
        term: 'Perméabilité d\'un sol',
        definition: 'Aptitude d\'un sol à se laisser traverser plus ou moins rapidement par l\'eau d\'infiltration.'
      },
      {
        term: 'Porosité d\'un sol',
        definition: 'Volume total des espaces vides occupés par l\'eau et l\'air entre les particules solides d\'un sol, exprimé en pourcentage.'
      },
      {
        term: 'Sol ferralitique',
        definition: 'Sol profond, rouge, riche en oxydes de fer et d\'aluminium, caractéristique des zones forestières humides du Sud ivoirien.'
      },
      {
        term: 'Érosion du sol',
        definition: 'Arrachement et transport des particules superficielles fertiles du sol sous l\'action de l\'eau de pluie ou du vent.'
      },
      {
        term: 'Assolement',
        definition: 'Division d\'un terrain en parcelles recevant alternativement des cultures différentes afin de préserver les réserves nutritives du sol.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relation racine - profondeur du sol',
        statement: 'Les sols ferralitiques profonds conviennent aux plantes à racines longues et pivotantes (cacaoyer, palmier). Les sols ferrugineux moins profonds conviennent aux plantes à cycle court et racines courtes (cotonnier, maïs).',
        explanation: 'Une plante ne peut prospérer que si son système racinaire peut capter l\'eau et les sels minéraux dans la zone humide du profil du sol.'
      },
      {
        name: 'Protection contre l\'érosion sur les collines',
        statement: 'Sur terrain en pente, les billons ou terrasses doivent toujours être tracés perpendiculairement à la pente (courbes de niveau).',
        explanation: 'Tracer les sillons dans le sens de la pente crée des autoroutes d\'eau qui creusent des ravines catastrophiques.'
      }
    ],
    formulas: [
      {
        name: 'Porosité d\'un sol',
        formula: 'P (\\%) = \\frac{m\'_2 - m\'_1}{V} \\times 100',
        explanation: 'm\'2 = masse du sol saturé d\'eau, m\'1 = masse du sol sec, V = volume du cylindre en cm3.'
      },
      {
        name: 'Capacité de rétention en eau',
        formula: 'C_r (\\%) = \\frac{m\'_3 - m\'_1}{V} \\times 100',
        explanation: 'm\'3 = masse du sol égoutté, m\'1 = masse du sol sec.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mise en œuvre de l\'appareil de Berlèze',
        procedure: '1. Disposer un échantillon de litière fraîche dans un entonnoir muni d\'un grillage fin. 2. Placer une lampe de 40 W au-dessus. 3. Mettre un flacon contenant de l\'alcool sous l\'entonnoir. 4. La faune fuit la lumière et la chaleur pour tomber dans l\'alcool.',
        tip: 'L\'appareil de Berlèze repose sur le phototropisme négatif et l\'hygrotropisme des animaux du sol.'
      }
    ],
    examples: [
      {
        statement: 'Un paysan de Soubré (zone forestière à sol ferralitique profond) plante des cotonniers et des cacaoyers. Ses cacaoyers sont très productifs mais ses cotonniers ont un rendement médiocre. Explique pourquoi.',
        solution: `Le sol de Soubré est un sol ferralitique profond avec une pluviométrie abondante (> 1500 mm/an). Le cacaoyer, plante pérenne à longues racines pivotantes, s'y épanouit parfaitement en puisant ses ressources en profondeur. En revanche, le cotonnier est une plante de savane à racines courtes et à cycle court, adaptée aux sols ferrugineux peu profonds et aux climats plus secs. Les fortes pluies et le lessivage de Soubré asphyxient les racines du cotonnier et favorisent les maladies parasitaires.`
      }
    ],
    exercises: [
      {
        question: 'Ordonne chronologiquement les étapes suivantes de la dégradation d\'un sol : a) Formation de ravins, b) Destruction du couvert végétal, c) Formation de rigoles, d) Transport des particules, e) Arrachement de la couche arable.',
        correction: `Ordre chronologique :
1. b) Destruction du couvert végétal (déboisement, feux de brousse)
2. e) Arrachement de la partie arable du sol (par les gouttes de pluie)
3. d) Transport des particules meubles
4. c) Formation de rigoles
5. a) Formation de ravins profonds et crevasses.`
      }
    ],
    evaluationSituation: {
      context: 'La coopérative scolaire d\'un lycée de l\'Ouest ivoirien cultive du maïs sur une pente défrichée par brûlis. Au bout de deux ans, la terre est sillonnée de rigoles et la récolte de maïs chute de 6 t/ha à 1,5 t/ha. Les élèves t\'invitent à proposer des explications et des solutions.',
      instructions: [
        '1. Nomme le phénomène de dégradation observé.',
        '2. Identifie les trois facteurs qui ont accéléré ce phénomène.',
        '3. Propose deux techniques culturales pour stopper l\'érosion et restaurer la fertilité de la parcelle.'
      ],
      solutionGuide: '1. Phénomène : Érosion hydrique des sols par l\'eau de ruissellement. 2. Facteurs aggravants : La pente du terrain (qui accélère le ruissellement), l\'absence de couvert végétal protecteur causée par la culture sur brûlis, et l\'exposition directe aux fortes pluies tropicales. 3. Solutions : Aménager le terrain en terrasses le long des courbes de niveau, pratiquer le paillage et le reboisement des bordures, et restaurer la fertilité par la jachère ou l\'apport de compost/fumier (amendement).'
    },
    examTraps: [
      'Confondre sol ferralitique (Sud forestier, profond, cacao/café) et sol ferrugineux (Nord savanicole, moins profond, coton/céréales).',
      'Confondre porosité (espace vide total) et perméabilité (vitesse de traversée de l\'eau).',
      'Penser qu\'un sol très sableux est fertile : il est très perméable mais retient mal l\'eau et les sels minéraux.'
    ],
    quickMemo: 'Sols CI : Ferralitiques (Sud, profonds, cacao/hévéa) | Ferrugineux (Centre/Nord, peu profonds, coton/maïs) | Hydromorphes (bas-fonds, gorgés d\'eau, riz) | Érosion = Eau + Vent + Pente + Sols nus | Protection = Reboisement, paillage, terrasses, jachère, assolement.',
    keywords: ['sol ferralitique', 'sol ferrugineux', 'sol hydromorphe', 'perméabilité', 'porosité', 'érosion du sol', 'reboisement', 'jachère', 'assolement', 'Berlèze']
  }
];
