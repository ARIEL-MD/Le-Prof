import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_SVT_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. SVT - 5ÈME : LA NUTRITION DES PLANTES VERTES
  // ==========================================
  {
    id: 'svt-5e-nutrition-plantes-vertes',
    discipline: 'svt',
    disciplineLabel: 'SVT (Cinquième)',
    level: '5e',
    levelLabel: 'Cinquième (5e)',
    chapter: "La nutrition et les besoins des végétaux chlorophylliens",
    lessonTitle: "L'absorption de l'eau, des sels minéraux et la synthèse de matière organique à la lumière",
    objectifs: [
      "Identifier la zone pilifère de la racine et le rôle des poils absorbants dans l'absorption de l'eau et des sels minéraux",
      "Démontrer par l'expérience à l'eau iodée que les feuilles vertes fabriquent de l'amidon uniquement en présence de lumière et de dioxyde de carbone",
      "Distinguer la sève brute (eau + sels minéraux montant des racines vers les feuilles) de la sève élaborée (riche en sucres nourrissant toute la plante)",
      "Définir le rôle des stomates foliaires dans les échanges gazeux chlorophylliens et la transpiration"
    ],
    fullCourseContent: `1. Les besoins nutritifs des végétaux chlorophylliens :
Les plantes vertes sont des organismes autotrophes : elles n'ont besoin que de matières minérales puisées dans leur environnement pour vivre et grandir :
- De l'eau et des sels minéraux (azote, phosphore, potassium) puisés dans le sol,
- Du dioxyde de carbone (CO₂) prélevé dans l'air,
- De l'énergie lumineuse captée par la chlorophylle.

2. L'absorption de l'eau et des sels minéraux par les racines :
- Une racine jeune présente 4 zones distinctes de bas en haut : la coiffe protectrice, la zone de croissance, la zone pilifère recouverte de milliers de poils absorbants microscopiques, et la zone subéreuse.
- C'est exclusivement au niveau des poils absorbants que l'eau et les ions minéraux pénètrent dans la plante par osmose.

3. La fabrication de matière organique au niveau des feuilles :
- Expérience de détection de l'amidon à l'eau iodée :
  * On prend une feuille verte éclairée et une feuille maintenue à l'obscurité (ou cachée partiellement par un cache noir).
  * Après décoloration à l'alcool bouillant, on applique de l'eau iodée (jaune/brunâtre).
  * Résultat : Seule la partie exposée à la lumière se colore en bleu-noir intense, prouvant la présence d'amidon.
  * Les feuilles fabriquent des glucides (amidon, sucres) uniquement en présence de lumière, de chlorophylle et de CO₂.

4. La circulation des deux sèves :
- La sève brute : Solution d'eau et de sels minéraux absorbée par les racines, elle monte vers les feuilles à travers les vaisseaux de bois (xylème).
- La sève élaborée : Liquide nourricier riche en matières organiques solubles (sucres, acides aminés) fabriqué par les feuilles lors de la photosynthèse, qui descend et se distribue à tous les organes (tiges, racines, fleurs, fruits, tubercules d'igname ou de manioc) à travers les vaisseaux du liber (phloème).`,
    definitions: [
      {
        term: 'Poil absorbant',
        definition: "Prolongement filiforme d'une cellule de l'épiderme racinaire augmentant considérablement la surface de contact avec le sol pour absorber l'eau et les sels minéraux."
      },
      {
        term: 'Sève brute',
        definition: "Liquide composé d'eau et de sels minéraux dissous, transporté depuis les racines jusqu'aux feuilles par les vaisseaux conducteurs de bois."
      },
      {
        term: 'Stomate',
        definition: "Orifice microscopique situé principalement à la surface inférieure des feuilles permettant les échanges de gaz (CO2, O2) et l'évaporation d'eau (transpiration foliaire)."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test de l\'amidon à l\'eau iodée',
        statement: 'L\'eau iodée de couleur jaune-brun vire au bleu-noir spécifique en présence d\'amidon.'
      },
      {
        name: 'Trajet des sèves',
        statement: 'Sève brute = ascendante (du sol vers les feuilles). Sève élaborée = distributrice (des feuilles vers tous les organes de la plante).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre en évidence la synthèse d\'amidon sur une feuille panachée',
        procedure: '1. Choisir une plante à feuilles panachées (bords blancs sans chlorophylle, centre vert) exposée au soleil.\n2. Bouillir la feuille dans l\'alcool pour dissoudre et extraire la chlorophylle verte.\n3. Rincer à l\'eau tiède pour assouplir la feuille.\n4. Déposer quelques gouttes d\'eau iodée sur toute la surface.\n5. Constater que seul le centre vert vire au bleu-noir.\n6. Conclure : La chlorophylle est indispensable à la synthèse d\'amidon.',
        tip: 'Toujours décolorer la feuille dans l\'alcool pour voir nettement le virage de l\'eau iodée.'
      }
    ],
    examples: [
      {
        statement: "Une plante en pot arrosée régulièrement d'eau déminéralisée pure finit par jaunir et dépérir. Pourquoi ?",
        solution: "L'eau déminéralisée pure ne contient aucun sel minéral (manque d'azote, de potassium, de fer...). Or, la plante a absolument besoin de ces minéraux dissous pour fabriquer ses protéines et sa chlorophylle. Sans minéraux, elle ne peut pas se développer normalement."
      }
    ],
    exercises: [
      {
        question: "Dans quels vaisseaux circule la sève brute ? Dans quels vaisseaux circule la sève élaborée ?",
        correction: "La sève brute circule dans les vaisseaux de bois (ou xylème) de façon ascendante. La sève élaborée circule dans les vaisseaux du liber (ou phloème) pour nourrir l'ensemble de la plante."
      }
    ],
    evaluationSituation: {
      context: "Un jeune agriculteur de Tiassalé cultive du maïs. Pour hâter la récolte, il décide de couper toutes les feuilles supérieures de ses plants de maïs en pensant que la sève ira directement nourrir les épis. Quelques semaines plus tard, les épis restent minuscules et sans grains.",
      instructions: [
        "1. Explique le rôle vital que jouent les feuilles dans la nutrition de la plante.",
        "2. Identifie la sève dont la production a été supprimée suite à la coupe des feuilles.",
        "3. Déduis pourquoi les épis de maïs n'ont pas pu se remplir de réserves nutritives."
      ],
      solutionGuide: "1. Les feuilles sont le siège de la photosynthèse où sont fabriqués les glucides et l'amidon sous l'action de la lumière. 2. La sève élaborée, qui transporte les matières organiques vers les organes de réserve. 3. Sans feuilles, il n'y a plus de synthèse de matière organique ; les grains d'épis de maïs ne reçoivent plus d'amidon pour grossir."
    },
    examTraps: [
      "Confondre sève brute et sève élaborée : la sève brute ne contient aucun sucre, elle vient directement du sol.",
      "Croire que les racines absorbent l'engrais solide : les sels minéraux doivent obligatoirement être dissous dans l'eau du sol pour être absorbés."
    ],
    quickMemo: "Plante verte = poils absorbants (eau + sels minéraux) → sève brute montante. Feuilles + lumière + CO₂ = amidon (eau iodée bleue) → sève élaborée descendante.",
    keywords: ["nutrition végétale", "poils absorbants", "sève brute", "sève élaborée", "amidon", "eau iodée", "stomates", "chlorophylle", "svt 5e"]
  },

  // ==========================================
  // 2. SVT - 5ÈME : LA RESPIRATION CHEZ LES ANIMAUX
  // ==========================================
  {
    id: 'svt-5e-respiration-animaux-milieux',
    discipline: 'svt',
    disciplineLabel: 'SVT (Cinquième)',
    level: '5e',
    levelLabel: 'Cinquième (5e)',
    chapter: "La respiration et l'occupation des milieux de vie",
    lessonTitle: "Les différents organes respiratoires chez les animaux (poumons, branchies, trachées, peau)",
    objectifs: [
      "Montrer que tous les animaux consomment du dioxygène (O₂) et rejettent du dioxyde de carbone (CO₂)",
      "Associer à chaque milieu de vie (aquatique ou aérien) les organes respiratoires adaptés",
      "Décrire le mécanisme de la respiration branchiale chez le poisson (courant d'eau, opercules, branchies rouges richement vascularisées)",
      "Expliquer la respiration trachéenne des insectes et la respiration cutanée/pulmonaire des batraciens"
    ],
    fullCourseContent: `1. La respiration : un phénomène universel chez les animaux :
- Tous les animaux respirent, qu'ils vivent dans l'air ou dans l'eau.
- Respirer consiste à prélever du dioxygène (O₂) dans le milieu et à y rejeter du dioxyde de carbone (CO₂).
- Mise en évidence expérimentale :
  * Le dioxygène est mesuré par une sonde oxymétrique (sa concentration diminue dans une enceinte fermée contenant un être vivant).
  * Le dioxyde de carbone est mis en évidence par l'eau de chaux : limpide au départ, elle se trouble en blanc laiteux au contact du CO₂ expiré.

2. Les différents types d'appareils respiratoires :
- Respiration pulmonaire (milieu aérien) :
  * Chez l'Homme, les mammifères, les oiseaux et les reptiles.
  * L'air entre par les narines, traverse la trachée, les bronches et parvient aux alvéoles pulmonaires, parois très fines et richement vascularisées où le sang se charge en O₂ et libère son CO₂.
- Respiration branchiale (milieu aquatique) :
  * Chez les poissons (comme la carpe ou le tilapia) et les crustacés.
  * Les branchies sont situées sous les opercules. Chaque branchie est formée de filaments branchiaux très fins, de couleur rouge vif car gorgés de sang.
  * Mécanisme du courant d'eau : Le poisson ouvre la bouche (l'eau entre, opercules fermés), puis ferme la bouche et ouvre les opercules pour chasser l'eau à travers les branchies où s'effectuent les échanges gazeux avec l'eau dissoute.
- Respiration trachéenne (milieu aérien chez les insectes) :
  * Chez le criquet, la sauterelle ou le papillon.
  * L'air entre par de petits orifices situés sur l'abdomen appelés stigmates, puis circule dans un réseau de tubes ramifiés microscopiques (les trachées et trachéoles) qui apportent l'O₂ directement aux organes sans passer par le sang !
- Respiration cutanée :
  * Chez le ver de terre et la grenouille (en complément des poumons simples).
  * Les échanges gazeux se font directement à travers la peau humide et très vascularisée.`,
    definitions: [
      {
        term: 'Branchie',
        definition: "Organe respiratoire des animaux aquatiques constitué de très nombreux filaments minces et rouges permettant d'extraire le dioxygène dissous dans l'eau."
      },
      {
        term: 'Trachée d\'insecte',
        definition: "Tube élastique interne conduisant l'air atmosphérique directement des stigmates jusqu'aux cellules de l'insecte sans intervention d'un système circulatoire sanguin."
      },
      {
        term: 'Stigmate',
        definition: "Petit orifice respiratoire percé sur les côtés du corps d'un insecte par lequel entre et sort l'air."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des surfaces d\'échanges respiratoires',
        statement: 'Toute surface respiratoire efficace doit être : très fine, très étendue, constamment humide et richement vascularisée (sauf chez les insectes où l\'air va directement aux cellules).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre en évidence le rejet de dioxyde de carbone chez un animal',
        procedure: '1. Placer un petit animal (ex : criquet ou escargot) dans un bocal hermétiquement fermé.\n2. Disposer à côté un petit récipient contenant de l\'eau de chaux incolore et limpide.\n3. Préparer un bocal témoin identique sans animal.\n4. Attendre 30 à 45 minutes.\n5. Constater que l\'eau de chaux se trouble en blanc dans le bocal avec l\'animal, alors qu\'elle reste limpide dans le bocal témoin.\n6. Conclure : L\'animal rejette du dioxyde de carbone en respirant.',
        tip: 'Le bocal témoin est obligatoire pour prouver que ce n\'est pas l\'air ambiant qui a troublé l\'eau de chaux.'
      }
    ],
    examples: [
      {
        statement: "Une baleine et un dauphin vivent dans la mer. S'ils restent trop longtemps sous l'eau sans remonter à la surface, ils se noient. Pourquoi ?",
        solution: "Parce que la baleine et le dauphin ne sont pas des poissons : ce sont des mammifères marins dotés de poumons. Ils ne peuvent pas respirer le dioxygène dissous dans l'eau et doivent obligatoirement remonter respirer l'air libre à la surface par leur évent."
      }
    ],
    exercises: [
      {
        question: "Pourquoi le sang du criquet (l'hémolymphe) est-il incolore ou verdâtre et ne sert-il pas à transporter les gaz respiratoires ?",
        correction: "Parce que les insectes possèdent un système respiratoire trachéen : les trachées se ramifient en minuscules conduits (trachéoles) qui touchent directement chaque cellule. L'air y circule directement sous forme gazeuse, le sang n'a donc pas besoin de transporter l'O₂ ni le CO₂."
      }
    ],
    evaluationSituation: {
      context: "Un élève du collège d'Abengourou trempe l'abdomen d'un criquet dans de l'eau savonneuse et constate que l'insecte s'arrête de bouger et meurt rapidement, alors que la tête du criquet était pourtant maintenue à l'air libre.",
      instructions: [
        "1. Explique pourquoi le criquet est mort alors que sa tête n'était pas immergée.",
        "2. Nomme les orifices respiratoires situés sur l'abdomen qui ont été bouchés par l'eau savonneuse.",
        "3. Schématise le trajet de l'air depuis l'extérieur jusqu'aux muscles du criquet."
      ],
      solutionGuide: "1. Chez les insectes, la respiration ne passe pas par la bouche ou le nez, mais par l'abdomen. 2. Les stigmates respiratoires ont été obstrués par le liquide savonneux, empêchant l'air d'entrer. 3. Trajet de l'air : Stigmates ➔ Trachées ➔ Trachéoles ➔ Organes et muscles."
    },
    examTraps: [
      "Croire que les poissons respirent la molécule d'eau (H₂O) : ils respirent le dioxygène gazeux O₂ dissous entre les molécules d'eau.",
      "Croire que les grenouilles n'ont que des poumons : la respiration par la peau humide représente l'essentiel de leurs échanges gazeux sous l'eau."
    ],
    quickMemo: "Respiration = prélève O₂ + rejette CO₂ (trouble l'eau de chaux). Poumons = air (Homme). Branchies = eau (Poisson). Trachées = air direct aux cellules (Insectes). Peau = cutanée (Ver de terre).",
    keywords: ["respiration", "dioxygène", "eau de chaux", "branchies", "poumons", "trachées", "stigmates", "poisson", "insecte", "svt 5e"]
  }
];
