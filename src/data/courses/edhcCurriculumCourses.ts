import { OfficialIvorianCourse } from '../../types';

export const EDHC_CURRICULUM_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. EDHC - COLLÈGE (4E / 3E) : LES DROITS DE L'ENFANT
  // ==========================================
  {
    id: 'edhc-droits-enfant-protection-citoyennete',
    discipline: 'edhc',
    disciplineLabel: 'EDHC (Collège & Lycée)',
    level: '3e',
    levelLabel: 'Troisième (BEPC) & Collège',
    chapter: "Droits de l'Homme et Protection de l'Enfant",
    lessonTitle: "Les droits fondamentaux de l'enfant, la lutte contre les VBG et le travail des mineurs",
    objectifs: [
      "Identifier les quatre principes fondamentaux de la Convention relative aux Droits de l'Enfant (CIDE de 1989) : non-discrimination, intérêt supérieur de l'enfant, droit à la vie et à la survie, participation",
      "Distinguer les droits civils, éducatifs et sanitaires de l'enfant (déclaration de naissance à l'état civil, scolarisation obligatoire, soins de santé)",
      "Caractériser les Violences Basées sur le Genre (VBG) et les pires formes de travail des enfants dans les plantations et ateliers",
      "Connaître les voies de recours et les numéros d'urgence de protection en Côte d'Ivoire (Ligne 116 ou 1308, Police, Centre Social)"
    ],
    fullCourseContent: `1. La Convention Internationale des Droits de l'Enfant (CIDE) :
- Adoptée par l'ONU le 20 novembre 1989 et ratifiée par la Côte d'Ivoire.
- Définition d'un enfant : Tout être humain âgé de moins de 18 ans.
- Les quatre principes cardinaux :
  * La non-discrimination (Article 2) : Tous les enfants ont les mêmes droits sans distinction de race, de sexe, de religion ou d'origine sociale.
  * L'intérêt supérieur de l'enfant (Article 3) : Dans toute décision de justice ou administrative, le bien-être de l'enfant prime.
  * Le droit à la vie, à la survie et au développement (Article 6).
  * Le respect de l'opinion de l'enfant (Article 12) : Droit de s'exprimer librement sur les décisions le concernant.

2. Les droits fondamentaux vitaux :
- Le droit à une identité : Être déclaré à l'état civil dès la naissance et obtenir un extrait d'acte de naissance officiel (obligatoire pour passer les examens nationaux BEPC et BAC).
- Le droit à l'éducation : En Côte d'Ivoire, l'école est obligatoire et gratuite pour tous les enfants de 6 à 16 ans depuis la loi de 2015.
- Le droit à la santé, à une alimentation saine et à un logement digne.

3. La lutte contre les atteintes aux droits de l'enfant et les VBG :
- Le travail des enfants : Interdiction stricte d'employer un mineur dans des travaux dangereux nuisant à sa santé, son développement physique ou sa scolarisation (port de charges lourdes, manipulation de pesticides ou machettes dans les cacaoyères).
- Les Violences Basées sur le Genre (VBG) :
  * Violences physiques, viols et agressions sexuelles.
  * Mariages précoces ou forcés des jeunes filles.
  * Mutilations Génitales Féminines (excision), formellement punies par le code pénal ivoirien.
- Les structures d'assistance et de secours en Côte d'Ivoire :
  * Les Centres Sociaux et la Sous-Direction de la Police des Mœurs.
  * Les numéros verts gratuits d'assistance aux enfants en danger : le 116 (numéro vert national de protection de l'enfance) et le 1308 (lutte contre les VBG).`,
    definitions: [
      {
        term: 'CIDE',
        definition: "Convention Internationale des Droits de l'Enfant adoptée le 20 novembre 1989 par l'Assemblée Générale des Nations Unies."
      },
      {
        term: 'Violences Basées sur le Genre (VBG)',
        definition: "Tout acte préjudiciable perpétré contre le gré d'une personne en raison de son sexe ou de son rôle assigné par la société."
      },
      {
        term: 'Acte de naissance',
        definition: "Document juridique authentique dressé par l'officier d'état civil attestant la naissance, le nom, la filiation et la nationalité d'un individu."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Obligation scolaire en Côte d\'Ivoire',
        statement: 'La scolarisation est obligatoire et universelle pour tous les enfants de 6 à 16 ans sous peine de sanctions pour les parents négligents.'
      },
      {
        name: 'Principe de tolérance zéro VBG',
        statement: 'Les violences faites aux enfants et les viols sont des crimes imprescriptibles sanctionnés sévèrement par la loi ivoirienne.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier et dénoncer un cas de violation des droits de l\'enfant',
        procedure: '1. Constater les faits (maltraitance, non-scolarisation, travail forcé, mariage précoce).\n2. Alerter l\'administration scolaire (Éducateur, Directeur d\'école, Chef d\'établissement).\n3. Contacter le Centre Social le plus proche ou appeler anonymement le numéro vert gratuit 116.\n4. Laisser les services spécialisés (assistantes sociales, police) prendre en charge la victime.',
        tip: 'Garder le secret et la confidentialité pour préserver la sécurité de l\'enfant victime.'
      }
    ],
    examples: [
      {
        statement: "Pourquoi un enfant sans extrait d'acte de naissance risque-t-il l'exclusion scolaire en classe de CM2 ou de 3ème ?",
        solution: "Parce que l'extrait d'acte de naissance est la pièce juridique indispensable pour créer le matricule officiel MENA de l'élève et l'inscrire aux examens officiels d'État (CEPE, BEPC, BAC). Sans cette pièce, l'élève ne peut pas valider son cursus national."
      }
    ],
    exercises: [
      {
        question: "Citez les quatre grands principes directeurs de la Convention Internationale des Droits de l'Enfant (CIDE).",
        correction: "1. La non-discrimination.\n2. L'intérêt supérieur de l'enfant.\n3. Le droit à la vie, à la survie et au développement.\n4. Le droit de participation et d'expression."
      }
    ],
    evaluationSituation: {
      context: "Dans un campement agricole près de Divo, M. Bamba fait travailler son neveu de 11 ans toute la journée dans les plantations de cacao pour désherber et transporter des régimes, privant l'enfant d'aller à l'école primaire du village.",
      instructions: [
        "1. Identifie deux droits fondamentaux de l'enfant bafoués dans cette situation.",
        "2. Rappelle ce que prévoit la loi ivoirienne concernant la scolarité des enfants de 11 ans.",
        "3. Propose une démarche de sensibilisation et d'action citoyenne auprès de ce tuteur pour régulariser la scolarité de l'enfant."
      ],
      solutionGuide: "1. Le droit à l'éducation et la protection contre le travail dangereux des enfants. 2. L'école est strictement obligatoire pour tous les enfants de 6 à 16 ans. 3. Sensibiliser le tuteur aux sanctions légales, l'informer de la gratuité des manuels scolaires et, si nécessaire, saisir le comité villageois de protection de l'enfance ou le Centre Social."
    },
    examTraps: [
      "Confondre l'aide occasionnelle familiale aux tâches ménagères légères avec le travail des enfants qui nuit à la scolarité ou à la santé.",
      "Croire que seuls les garçons ont droit à la scolarisation : la parité et le droit à l'éducation des filles sont des obligations absolues."
    ],
    quickMemo: "CIDE 1989 : Enfant = moins de 18 ans. 4 principes : non-discrimination, intérêt supérieur, survie/développement, participation. École obligatoire 6-16 ans. Numéro vert d'urgence : 116.",
    keywords: ["droits de l'enfant", "CIDE", "état civil", "scolarisation obligatoire", "VBG", "protection de l'enfance", "116", "EDHC", "citoyenneté"]
  },

  // ==========================================
  // 2. EDHC - COLLÈGE & LYCÉE : SYMBOLES RÉPUBLICAINS ET CULTURE DE LA PAIX
  // ==========================================
  {
    id: 'edhc-symboles-republique-culture-paix',
    discipline: 'edhc',
    disciplineLabel: 'EDHC (Secondaire & Terminale)',
    level: 'terminale',
    levelLabel: 'Secondaire & Terminale',
    chapter: "Citoyenneté Républicaine et Vivre Ensemble",
    lessonTitle: "Les symboles de la République de Côte d'Ivoire, les institutions et la culture de la paix",
    objectifs: [
      "Identifier et expliquer la signification civique des symboles officiels de la République de Côte d'Ivoire (l'emblème national tricolore, la devise, l'hymne national, les armoiries)",
      "Reconnaître le rôle des grandes institutions républicaines (Présidence, Assemblée Nationale, Sénat, Conseil Constitutionnel, Médiateur de la République)",
      "Appliquer les règles du dialogue, de la médiation et du règlement pacifique des conflits au sein de la communauté scolaire et sociale",
      "Promouvoir les valeurs de cohésion sociale, de laïcité et de respect mutuel des diversités ethniques et religieuses"
    ],
    fullCourseContent: `1. Les Symboles officiels de la République de Côte d'Ivoire (Constitution ivoirienne) :
- L'Emblème national (le Drapeau tricolore Orange - Blanc - Vert) :
  * Trois bandes verticales d'égales dimensions (l'Orange est toujours placé du côté de la hampe).
  * Signification :
    - L'Orange : symbolise la savane du Nord, la générosité de la terre et la flamme du travail national.
    - Le Blanc : symbolise la paix, la clarté et la pureté des cœurs de tous les Ivoiriens.
    - Le Vert : symbolise la forêt dense du Sud, l'espérance en l'avenir et la nature verdoyante.
- La Devise nationale : « Union - Discipline - Travail » :
  * Union : solidarité et cohésion nationale au-delà de la soixantaine d'ethnies du pays.
  * Discipline : respect des lois de la République, de la hiérarchie et de l'ordre républicain.
  * Travail : source de liberté, d'indépendance économique et de dignité humaine.
- L'Hymne National : « L'Abidjanaise » :
  * Écrit par l'abbé Pierre Coty et composé par l'abbé Pierre-Marie Pango. Chant patriotique exigeant le salut au drapeau au garde-à-vous.
- Les Armoiries de la République :
  * Éléphant d'argent aux défenses dorées (symbole de force, de sagesse et emblème séculaire de la Côte d'Ivoire), surmonté du soleil levant doré, encadré par deux palmiers et un listel portant la devise.

2. Les Institutions de la République :
- Le pouvoir exécutif : Le Président de la République (Chef de l'État) et le Gouvernement dirigé par le Premier Ministre.
- Le pouvoir législatif : Le Parlement bicaméral composé de l'Assemblée Nationale (Députés) et du Sénat (Sénateurs) qui votent les lois et contrôlent l'action du gouvernement.
- Le pouvoir judiciaire : Rendu par les Cours et Tribunaux de manière indépendante.
- Les institutions régulatrices : Le Conseil Constitutionnel (veillant à la constitutionnalité des lois et validant les élections) et le Médiateur de la République (règlement à l'amiable des différends).

3. La culture de la paix et le règlement pacifique des conflits :
- Les fondements du « Vivre Ensemble » en Côte d'Ivoire :
  * Les alliances interethniques de parenté à plaisanterie (Toungan, Toukpê), mécanisme traditionnel ancestral de désamorçage des tensions sociales.
  * La laïcité de l'État : neutralité de la puissance publique garantissant la liberté de culte à toutes les religions dans le respect mutuel.
- Méthodologie de la médiation pacifique :
  * Écouter activement les parties prenantes sans parti pris.
  * Identifier l'origine réelle du désaccord (foncier, scolaire, interpersonnel).
  * Rechercher un compromis gagnant-gagnant (« win-win ») où chacun préserve sa dignité.`,
    definitions: [
      {
        term: 'Laïcité',
        definition: "Principe républicain de neutralité de l'État vis-à-vis de toutes les croyances et religions, assurant l'égalité de tous les citoyens quelle que soit leur foi."
      },
      {
        term: 'Alliances interethniques à plaisanterie',
        definition: "Tradition ivoirienne de parenté sociale consacrée entre différents peuples permettant de se taquiner et de désamorcer pacifiquement les conflits graves."
      },
      {
        term: 'Citoyenneté',
        definition: "Statut conférant à un individu des droits civils et politiques tout en lui imposant des devoirs envers la communauté nationale (respect des lois, vote, paiement des impôts)."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Disposition du drapeau ivoirien',
        statement: 'La bande ORANGE est toujours impérativement fixée contre la hampe (à gauche de l\'observateur lorsque le drapeau est déployé face à lui).'
      },
      {
        name: 'Attitude lors de la montée des couleurs',
        statement: 'Chaque citoyen doit s\'arrêter immédiatement, se tenir droit et immobile, tête découverte, et regarder l\'emblème national monter avec déférence.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre en œuvre la médiation scolaire lors d\'un conflit entre élèves',
        procedure: '1. Isoler les élèves en conflit dans un endroit calme.\n2. Donner la parole à chacun à tour de rôle sans interruption ni insulte.\n3. Reformuler les ressentis pour vérifier la compréhension.\n4. Amener les élèves à proposer eux-mêmes des solutions réparatrices.\n5. Formaliser l\'accord par une poignée de main et veiller au suivi dans le temps.',
        tip: 'Le médiateur ne juge pas et ne punit pas ; il guide vers la réconciliation.'
      }
    ],
    examples: [
      {
        statement: "Quelle est la différence fondamentale entre le drapeau de la Côte d'Ivoire et le drapeau de l'Irlande ?",
        solution: "Le drapeau de la Côte d'Ivoire a ses bandes disposées dans l'ordre : ORANGE - BLANC - VERT (l'orange à la hampe). Le drapeau de l'Irlande a exactement l'ordre inverse : VERT - BLANC - ORANGE (le vert à la hampe)."
      }
    ],
    exercises: [
      {
        question: "Citez la devise nationale de la République de Côte d'Ivoire et expliquez le sens du mot « Discipline ».",
        correction: "Devise : « Union - Discipline - Travail ». La « Discipline » désigne le civisme, la ponctualité, le respect strict des lois républicaines, de l'autorité parentale et de la hiérarchie pour vivre en harmonie."
      }
    ],
    evaluationSituation: {
      context: "Dans la cour d'un lycée d'Abidjan, lors de la sonnerie marquant le début de la cérémonie bimensuelle du salut aux couleurs nationales, deux élèves continuent de rire et de courir en direction du kiosque à beignets.",
      instructions: [
        "1. Qualifie le comportement de ces deux élèves au regard des exigences civiques républicaines.",
        "2. Décris l'attitude conforme que tout citoyen doit adopter pendant l'exécution de l'hymne national.",
        "3. Rédige un message de trois lignes expliquant à ces camarades pourquoi le respect du drapeau est le ciment de l'unité nationale."
      ],
      solutionGuide: "1. Il s'agit d'un acte incivique d'outrage aux symboles de la République. 2. Tout citoyen doit s'arrêter net, adopter une posture droite et digne, le regard tourné vers le drapeau, en observant un silence respectueux ou en chantant l'hymne avec fierté. 3. Le drapeau tricolore représente le sang versé pour notre liberté et l'union de tous nos peuples. Le respecter, c'est honorer la patrie et affirmer notre fierté d'être Ivoiriens unis et solidaires."
    },
    examTraps: [
      "Inverser l'ordre des couleurs du drapeau : le drapeau ivoirien est Orange-Blanc-Vert, et JAMAIS Vert-Blanc-Orange (qui est celui de l'Irlande).",
      "Attribuer la composition de l'hymne national à Félix Houphouët-Boigny : les auteurs sont l'abbé Pierre Coty (paroles) et l'abbé Pierre-Marie Pango (musique)."
    ],
    quickMemo: "Drapeau : Orange (savane, travail), Blanc (paix), Vert (forêt, espérance). Devise : Union - Discipline - Travail. Hymne : L'Abidjanaise. Armoiries : Tête d'éléphant. Alliances à plaisanterie : cohésion sociale.",
    keywords: ["symboles républicains", "drapeau ivoirien", "devise nationale", "L'Abidjanaise", "paix", "médiation", "laïcité", "EDHC", "citoyenneté"]
  }
];
