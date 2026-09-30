// ============================================================================
// FASCICULE OFFICIEL DE RÉFÉRENCE — SPÉCIAL PRÉPA BAC 2023-2024
// "TOP PHILO : LE BAC POUR TOUS, LE BAC C'EST NOUS !"
// Auteur : Prof. TRA BI Kouadio Honoré (Côte d'Ivoire)
// Lycée Municipal de Sinematiali, Lycée Moderne 1 de Bouaflé, Lycée Moderne de Zuénoula, Collège MUPES de Hiré (Divo)
// ============================================================================

export interface TraBiSubjectStudy {
  id: string;
  type: 'dissertation' | 'commentaire';
  title: string;
  sourceOrExam?: string;
  theme: string;
  parcellaire?: { [term: string]: string };
  reformulation?: string;
  probleme: string;
  aspectsOuQuestions?: string[];
  theseAuteur?: string;
  antithese?: string;
  intention?: string;
  enjeu?: string;
  structureLogiqueMouvements?: { movement: string; delimitation: string; mainIdea: string }[];
  critiqueInterne?: string;
  critiqueExterneAxes?: {
    axeTitle: string;
    arguments: { arg: string; authorOrQuote?: string }[];
  }[];
  axesDissertation?: {
    axeTitle: string;
    arguments: { arg: string; authorOrQuote?: string }[];
  }[];
  conclusion: string;
}

export interface TraBiLessonOverview {
  competenceNumber: string;
  competenceTitle: string;
  lessonNumber: string;
  lessonTitle: string;
  contents: string[];
  specificObjective: string;
  situationApprentissage: string;
  summary: string;
  keyFormulas: { name: string; formulaOrRule: string; explanation: string }[];
}

export const TRA_BI_HONORE_METHODOLOGY = {
  author: "Prof. TRA BI Kouadio Honoré",
  devise: "La pédagogie, notre métier, l'excellence notre devise",
  motto: "TOP PHILO : LE BAC POUR TOUS, LE BAC C'EST NOUS !",
  dissertationMethod: {
    definition: "Exercice écrit portant sur un sujet, à partir duquel on ressort le problème central en vue de son analyse à travers une argumentation cohérente.",
    etapesPreparatoires: [
      {
        step: 1,
        title: "Compréhension du sujet & Étude parcellaire",
        description: "Identifier les mots et expressions essentiels (indispensables à la compréhension) et les définir rigoureusement selon le contexte philosophique."
      },
      {
        step: 2,
        title: "Reformulation du sujet",
        description: "Donner la signification d'ensemble du sujet en le réécrivant pour le rendre plus explicite sans altérer son sens initial."
      },
      {
        step: 3,
        title: "Problématisation (Problème et ses aspects)",
        description: "Dégager la difficulté centrale issue d'une contradiction ou d'un paradoxe au cœur du sujet. Formuler le problème sous forme interrogative, puis énoncer les aspects (questions courtes annonçant les axes du développement)."
      }
    ],
    redactionDevoir: {
      introduction: "Composée impérativement de 3 éléments : Amorce (Généralité ou constat), Problème central posé sous forme interrogative, et Aspects du problème (questions guidant les axes).",
      developpement: "Résolution structurée du problème en 2 ou 3 axes d'analyse argumentés. Chaque axe s'appuie sur des arguments précis, des références d'auteurs et des illustrations. Les passages d'un argument à un autre et d'un axe à l'autre s'effectuent par des transitions critiques (connecteurs logiques).",
      conclusion: "Réponse claire et précise au problème posé dans l'introduction, précédée du bilan synthétique de la réflexion et achevée par une ouverture pertinente."
    }
  },
  commentaireMethod: {
    definition: "Exercice écrit qui consiste à dégager l'intérêt philosophique d'un texte à partir de son étude ordonnée. Commenter, c'est d'abord expliquer (mettre en évidence son sens) et ensuite évaluer (critique interne et critique externe).",
    structureDevoir: [
      {
        partie: "Introduction",
        elements: "Agencement de trois éléments essentiels : le Thème, le Problème et la Thèse de l'auteur. La structure logique (mouvements du texte) est annoncée à la fin de l'introduction ou au début du développement."
      },
      {
        partie: "Développement - Étude ordonnée",
        elements: "Explication linéaire des différents mouvements du texte : démarche argumentative, arguments, concepts clés, allusions, exemples et figures de style. Éviter paraphrases, contre-sens et non-sens. Élaborer des transitions entre mouvements."
      },
      {
        partie: "Développement - Intérêt philosophique (Partie critique)",
        elements: "1. Critique interne : évaluer la forme (cohérence interne, adéquation entre démarche argumentative et intention de l'auteur, pertinence des arguments). 2. Critique externe : évaluer le fond en confrontant la thèse de l'auteur (Axe 1 : justification et étayage avec d'autres auteurs) puis son dépassement (Axe 2 : limites, objections et doctrines concurrentes)."
      },
      {
        partie: "Conclusion",
        elements: "Prise de position personnelle argumentée par rapport à l'intérêt du texte, précédée du bilan synthétique du débat engagé dans la critique externe."
      }
    ]
  }
};

export const TRA_BI_HONORE_LESSONS: TraBiLessonOverview[] = [
  {
    competenceNumber: "Compétence II",
    competenceTitle: "Traiter une situation relative aux conditions de l'homme dans la société",
    lessonNumber: "Leçon 1",
    lessonTitle: "La connaissance de l'homme (Conscience, Inconscient, Mémoire, Violence, Liberté)",
    contents: [
      "La conscience comme essence de l'homme (Descartes, Cogito, substance pensante, Lalande, Rousseau instinct divin)",
      "La conscience psychologique (jugement de réalité, Feuerbach) vs morale (jugement de valeur, bien et mal)",
      "L'intentionnalité de la conscience (Husserl 'toute conscience est conscience de quelque chose', Sartre 'la conscience n'a pas de dedans')",
      "La conscience comme signe d'élévation (Jankélévitch, Bergson choix, Kant le 'Je' dans sa représentation, Hegel double existence)",
      "L'homme, un être de mémoire (Bergson mémoire-habitude vs mémoire pure dans Matière et mémoire)",
      "Les limites de la conscience (Kant Critique de la raison pure, Leibniz petites perceptions, Marx conditions matérielles)",
      "L'inconscient freudien (Ça/Moi/Surmoi, refoulement, actes manqués, lapsus, rêves voie royale, névroses)",
      "L'inconscient, siège de la violence et de l'animalité (Hobbes l'homme est un loup pour l'homme, Freud Malaise dans la civilisation agressivité native, Camus l'homme sécrète de l'inhumain)",
      "Critique de l'inconscient : Sartre l'inconscient comme mauvaise foi vs Alain l'inconscient comme idolâtrie du corps et mythe dangereux"
    ],
    specificObjective: "Montrer la complexité de la nature humaine à travers la dialectique conscience / inconscient / mémoire.",
    situationApprentissage: "Au Lycée Moderne 1 de Bouaflé, en Terminale D3, un élève calme agresse subitement sa camarade en cours d'EPS. Les élèves cherchent à comprendre les déterminismes psychologiques et la part de responsabilité.",
    summary: "L'homme est un être spirituel et conscient doué de liberté morale. Cependant, l'inconscient démontre que le Moi n'est pas maître dans sa propre maison (Freud), bien que pour Sartre et Alain, l'inconscient ne doive jamais devenir un alibi pour fuir sa responsabilité morale.",
    keyFormulas: [
      {
        name: "Définition de la conscience selon André Lalande",
        formulaOrRule: "« La faculté qu'a l'homme de connaître son existence et de la juger. »",
        explanation: "Distingue la conscience psychologique (connaître son existence) de la conscience morale (juger ses actes)."
      },
      {
        name: "Le Cogito cartésien",
        formulaOrRule: "« Cogito ergo sum » / « Je pense donc je suis » (Discours de la méthode, 1637).",
        explanation: "La pensée est la première certitude indubitable qui fonde l'existence de l'homme comme substance pensante."
      },
      {
        name: "L'inconscient selon Freud",
        formulaOrRule: "« Le moi n'est pas maître dans sa propre maison » (Essais de psychanalyse appliquée).",
        explanation: "La conscience est lacunaire face aux forces pulsionnelles refoulées du Ça censurées par le Surmoi."
      },
      {
        name: "Réfutation sartrienne du déterminisme psychologique",
        formulaOrRule: "« L'inconscient est la mauvaise foi de la conscience » (L'Être et le Néant).",
        explanation: "L'homme est condamné à être libre ; prétexter l'inconscient est une fuite lâche de sa responsabilité intégrale."
      }
    ]
  },
  {
    competenceNumber: "Compétence II",
    competenceTitle: "Traiter une situation relative aux conditions de l'homme dans la société",
    lessonNumber: "Leçon 2",
    lessonTitle: "La vie en société (Société, Droit, Justice, État, Violence, Autrui)",
    contents: [
      "Sociabilité naturelle (Aristote 'l'homme est un animal politique', Platon) vs Société conventionnelle par contrat (Hobbes état de guerre permanente, Rousseau bonté originelle et contrat social)",
      "Le droit comme fondement de l'État (Alain 'le droit est un système de contrainte')",
      "Justice institutionnelle (tribunaux, lois positives) vs justice normative (principe inné dans le cœur, Rousseau, Aristote justice distributive et commutative)",
      "Machiavel : 'La loi n'est pas loi parce qu'elle est juste, mais c'est parce qu'elle est juste qu'elle est loi'",
      "L'État comme facteur d'aliénation : Appareils Idéologiques et Répressifs d'État (Althusser), Anarchistes (Stirner 'l'État ne poursuit qu'un but : assujettir', Bakounine), Nietzsche ('le plus froid des monstres froids'), Marx ('instrument d'oppression')",
      "L'État comme garant de liberté : Max Weber (monopole de la violence physique légitime), Spinoza ('la fin de l'État est en réalité la liberté'), Hegel ('le plus haut devoir du citoyen')",
      "Relation à autrui : facteur d'aliénation (Sartre 'l'enfer c'est les autres', Machiavel rivalité, Freud agressivité) vs facteur d'humanisation et de liberté (Malson, Garaudy 'l'enfer c'est l'absence des autres', Badian 'l'homme n'est rien sans les hommes', Sartre 'autrui est le médiateur indispensable entre moi et moi-même')"
    ],
    specificObjective: "Comprendre les fondements de la société, le rôle régulateur du droit et de la justice, la nature ambivalente de l'État et la dialectique constitutive d'autrui.",
    situationApprentissage: "Au Lycée Moderne de Zuénoula, les élèves de Tle A3 s'interrogent sur les violences et conflits récurrents en société et sur la légitimité du pouvoir étatique.",
    summary: "Si l'État use de la contrainte et risque la bureaucratie aliénante, il demeure indispensable contre l'anarchie barbare. De même, autrui, bien que rivalisant sous son regard, est le miroir nécessaire par lequel l'homme accède à la pleine conscience de son humanité.",
    keyFormulas: [
      {
        name: "Max Weber sur l'État",
        formulaOrRule: "« L'État détient le monopole de la violence physique légitime. » (Le Savant et le Politique)",
        explanation: "La violence exercée par la force publique est légale et nécessaire pour garantir l'ordre et le droit des citoyens."
      },
      {
        name: "Spinoza sur la fin de l'État",
        formulaOrRule: "« La fin de l'État est donc en réalité la liberté. » (Traité théologico-politique)",
        explanation: "L'État n'a pas pour but de dominer par la peur, mais de libérer l'homme de la crainte mutuelle pour qu'il use de sa raison."
      },
      {
        name: "Seydou Badian sur autrui",
        formulaOrRule: "« L'homme n'est rien sans les hommes, il vient dans leur main et s'en va dans leur main. » (Sous l'orage)",
        explanation: "Ancrage communautaire africain : l'existence individuelle n'a de sens et de réalité que par la solidarité sociale."
      }
    ]
  },
  {
    competenceNumber: "Compétence II",
    competenceTitle: "Traiter une situation relative aux conditions de l'homme dans la société",
    lessonNumber: "Leçon 3",
    lessonTitle: "Dieu et la religion (Foi, Morale, Cohésion sociale vs Aliénation et Fanatisme)",
    contents: [
      "Définition étymologique : religare (relier verticalement et horizontalement), Durkheim, Voltaire",
      "L'homme comme animal religieux (Bergson Les deux sources, Gabriel Marcel, Hegel, Feuerbach)",
      "Rôle social positif : facteur de moralisation (Martin Gray 'si Dieu n'existait pas, il faudrait m'expliquer la morale'), facteur de cohésion sociale (Ibn Khaldun Les Prolégomènes, Bergson assurance contre la désorganisation)",
      "Facteur d'aliénation et d'illusion : Spinoza ('asile de l'ignorance'), Feuerbach (projection aliénante), Marx ('opium du peuple', soupir de la créature opprimée), Freud ('névrose obsessionnelle')",
      "Le fanatisme religieux : Alain ('le plus redoutable des maux'), François Jacob, Rousseau (Lettre à d'Alembert), Khomeini et la guerre sainte",
      "Liberté religieuse et devoir : Gandhi ('vie sans principes = bateau sans gouvernail'), Kant ('la religion est la connaissance de tous nos devoirs comme commandements divins')"
    ],
    specificObjective: "Analyser la double dimension de la religion : boussole éthique et sociale d'une part, risque d'obscurantisme dogmatique et d'aliénation d'autre part.",
    situationApprentissage: "Face à la prolifération des communautés religieuses et aux tensions fanatiques, les candidats cherchent à évaluer l'impact réel de la foi sur l'émancipation de l'homme.",
    summary: "La religion offre un supplément de transcendance et consolide les valeurs de fraternité et de respect, mais elle doit être constamment éclairée par la raison pour ne pas verser dans le fanatisme intolérant.",
    keyFormulas: [
      {
        name: "Marx sur la religion",
        formulaOrRule: "« La religion est le soupir de la créature opprimée, l'âme d'un monde sans cœur (...) elle est l'opium du peuple. » (Critique de la philosophie du droit de Hegel)",
        explanation: "La religion masque les conditions réelles d'exploitation socio-économique en promettant un paradis chimérique."
      },
      {
        name: "Gandhi sur la religion",
        formulaOrRule: "« Une vie sans religion est une vie sans principes et une vie sans principes est comme un bateau sans gouvernail. »",
        explanation: "La foi apporte un cap moral indispensable à la conduite équilibrée de l'existence humaine."
      }
    ]
  },
  {
    competenceNumber: "Compétence III",
    competenceTitle: "Traiter une situation relative aux conditions d'épanouissement de l'homme",
    lessonNumber: "Leçon 2 & 3",
    lessonTitle: "La valeur de la philosophie, Progrès, Travail et Bonheur",
    contents: [
      "Définition de la philosophie : amour de la sagesse (Pythagore, Descartes), réflexion critique perpétuelle",
      "Critique de l'inutilité de la philosophie : Karl Jaspers (absence de résultats apodictiques), Marx (Thèse XI sur Feuerbach : 'les philosophes n'ont fait qu'interpréter le monde, il s'agit de le transformer')",
      "Nécessité de la philosophie : Aristote (échapper à l'ignorance), Descartes ('vivre sans philosopher c'est avoir les yeux fermés'), Russell (sortir des préjugés étroits), Platon (philosophes rois dans la République)",
      "Paulin Hountondji : la philosophie comme débat sans cesse rebondissant et démystification de l'ethnophilosophie",
      "Progrès matériel vs spirituel : Épicure (ataraxie, Lettre à Ménécée), Épictète, Platon (monde intelligible), Aristote (vie contemplative)",
      "Travail et technique : facteurs de libération (Descartes maîtres et possesseurs, Voltaire Candide éloigne ennui, vice et besoin, Dadie Climbié indépendance et dignité, Bergson réduction des heures de peine) vs facteurs d'aliénation (tripalium torture, Genèse punition divine, Marx travail aliéné dans les Manuscrits de 1844, Heidegger et Valéry esclavage de la machine, Hans Jonas Le principe responsabilité)",
      "Le supplément d'âme de Bergson et 'Science sans conscience n'est que ruine de l'âme' (Rabelais)"
    ],
    specificObjective: "Établir le lien vital entre philosophie, travail, maîtrise technique et quête du bonheur authentique.",
    situationApprentissage: "En période de révision intensive du Baccalauréat, les élèves confrontent l'utilité des sciences pratiques aux exigences de la réflexion critique philosophique.",
    summary: "La technique accroît la puissance matérielle de l'homme mais exige impérativement un guide éthique et philosophique sous peine de destruction écologique et humaine.",
    keyFormulas: [
      {
        name: "Thèse XI de Marx sur Feuerbach",
        formulaOrRule: "« Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe, c'est de le transformer. »",
        explanation: "Appel à une philosophie pratique et révolutionnaire ancrée dans les conditions matérielles du prolétariat."
      },
      {
        name: "Supplément d'âme de Bergson",
        formulaOrRule: "« À une culture technologique extrêmement poussée, il faut un supplément d'âme. » (Les deux sources de la morale et de la religion)",
        explanation: "L'essor matériel démesuré sans élévation spirituelle et morale conduit à la catastrophe humaine."
      }
    ]
  },
  {
    competenceNumber: "Compétence IV",
    competenceTitle: "Traiter une situation relative aux conditions de la connaissance",
    lessonNumber: "Leçon 1 & 2",
    lessonTitle: "Le langage, la vérité et la connaissance scientifique",
    contents: [
      "Vérité formelle (cohérence logique interne, syllogisme d'Aristote) vs vérité matérielle (adéquation pensée et objet sensible, Kant)",
      "Critères de la vérité : évidence cartésienne (clarté et distinction), pragmatisme anglo-saxon (William James : ce qui réussit)",
      "Langage : outil social de communication (Bergson), expression de la pensée (Hegel 'c'est dans les mots que nous pensons', Platon Cratyle) vs limites du langage (Diderot, Bergson 'le langage nous trompe', Wittgenstein 'ce dont on ne peut parler, il faut le taire')",
      "Brice Parrain : 'Les mots sont des pistolets chargés' ; vérité éthique vs mensonge",
      "Connaissance vulgaire (opinion subjective) vs philosophique (doute méthodique) vs scientifique (rationnelle, déterministe, spécialisée)",
      "Démarche expérimentale : Observation -> Hypothèse -> Expérimentation/Vérification (Claude Bernard)",
      "Sciences formelles déductives (mathématiques, Leibniz, Descartes mathématique universelle) vs inductives (chimie, physique)",
      "Obstacles épistémologiques et rectification continue : Bachelard ('l'opinion pense mal, elle ne pense pas', 'les vérités d'aujourd'hui sont les erreurs de demain'), Karl Popper (falsifiabilité, réfutabilité)",
      "Limites de la science devant le vivant et l'humain : Kant (téléologie du vivant), Edgar Morin, subjectivité de l'histoire (Fénelon)"
    ],
    specificObjective: "Maîtriser les critères de la vérité, les dynamiques du langage et les exigences rigoureuses de l'esprit scientifique contemporain.",
    situationApprentissage: "Les candidats de séries scientifiques et littéraires étudient la portée et les limites du savoir scientifique face aux vérités philosophiques et existentielles.",
    summary: "La science progresse par rectification d'erreurs et falsifiabilité (Bachelard, Popper). Elle ne saurait répondre aux questions métaphysiques du sens qui relèvent de la philosophie.",
    keyFormulas: [
      {
        name: "Bachelard sur l'opinion et la vérité",
        formulaOrRule: "« L'opinion pense mal ; elle ne pense pas (...) En science, les vérités d'aujourd'hui sont les erreurs de demain. » (La Formation de l'esprit scientifique)",
        explanation: "La vérité scientifique n'est pas un donné passif mais une conquête permanente contre les préjugés sensibles."
      },
      {
        name: "Hegel sur la pensée et le langage",
        formulaOrRule: "« C'est dans les mots que nous pensons (...) Vouloir penser sans les mots est une tentative insensée. » (Philosophie de l'Esprit)",
        explanation: "L'ineffable n'est qu'une pensée obscure en fermentation ; la pensée n'atteint sa plénitude que dans l'objectivité du mot."
      }
    ]
  }
];

export const TRA_BI_HONORE_CORPUS_SUBJECTS: TraBiSubjectStudy[] = [
  {
    id: "trabi-dissert-1",
    type: "dissertation",
    title: "Doit-on condamner le progrès technique ?",
    theme: "La technique, le progrès et la morale",
    parcellaire: {
      "Doit-on": "A-t-on le droit, est-il normal, faut-il, est-il légitime de...",
      "Condamner": "Blâmer, rejeter, désapprouver, sanctionner négativement",
      "Le progrès technique": "Les avancées, inventions et exploits réalisés par l'outillage technoscientifique"
    },
    reformulation: "Faut-il blâmer les avancées réalisées par la technique ?",
    probleme: "La technique est-elle nuisible à l'humanité ?",
    aspectsOuQuestions: [
      "En quoi le progrès technique suscite-t-il des inquiétudes légitimes ?",
      "Le progrès technique n'est-il pas au contraire un facteur d'émancipation et de développement ?"
    ],
    axesDissertation: [
      {
        axeTitle: "Axe 1 : Le progrès technique suscite de vives inquiétudes et des menaces",
        arguments: [
          {
            arg: "La technique transforme l'homme en esclave de ses propres objets et automatismes.",
            authorOrQuote: "Martin Heidegger (Sérénité) : 'Nous sommes, à notre insu, devenus leurs esclaves' ; Paul Valéry : 'La machine gouverne'."
          },
          {
            arg: "La puissance technique déchaînée menace la survie écologique et humaine de la planète.",
            authorOrQuote: "Hans Jonas (Le principe responsabilité) : 'La promesse de la technique s'est inversée en menace' ; Einstein : 'comme une hache dans les mains d'un psychopathe'."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : Le progrès technique est un puissant facteur de libération et de bien-être",
        arguments: [
          {
            arg: "Il libère l'homme des servitudes physiques et de la pénibilité du travail.",
            authorOrQuote: "Henri Bergson (L'évolution créatrice) : 'La machine procure à l'ouvrier un grand nombre d'heures de repos'."
          },
          {
            arg: "Il permet la maîtrise rationnelle de la nature et le recul des maladies.",
            authorOrQuote: "Descartes (Discours de la méthode) : 'Maîtres et possesseurs de la nature' ; Louis de Broglie sur les bienfaits de la pharmacie."
          }
        ]
      }
    ],
    conclusion: "Il ne faut pas condamner la technique en elle-même, mais son usage dévoyé. Tout progrès technique exige un progrès moral et spirituel régulateur (le supplément d'âme de Bergson)."
  },
  {
    id: "trabi-dissert-2",
    type: "dissertation",
    title: "Le travail humanise-t-il ?",
    theme: "Le travail et la condition humaine",
    parcellaire: {
      "Travail": "Activité consciente de transformation de la nature et de production de biens utiles",
      "Humanise": "Confère de la dignité et de la valeur, soustrait l'homme à l'animalité et aux instincts primaires"
    },
    reformulation: "L'activité laborieuse confère-t-elle à l'homme sa véritable dignité humaine ?",
    probleme: "Le travail, activité consciente de production, soustrait-il l'homme à l'animalité ?",
    aspectsOuQuestions: [
      "Dans quelle mesure le travail est-il facteur d'humanisation et d'élévation ?",
      "Toutefois, sous ses formes modernes et industrielles, n'est-il pas source d'aliénation et de dégradation ?"
    ],
    axesDissertation: [
      {
        axeTitle: "Axe 1 : Le travail, facteur d'humanisation et de libération",
        arguments: [
          {
            arg: "Activité consciente qui transforme en même temps la nature de l'homme.",
            authorOrQuote: "Karl Marx (Le Capital) : 'En même temps qu'il modifie la nature extérieure, il modifie sa propre nature et développe les facultés qui y sommeillent'."
          },
          {
            arg: "Source de vertu morale, d'autonomie financière et de refus de la paresse.",
            authorOrQuote: "Voltaire (Candide) : 'Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin' ; Bernard Dadié (Climbié) : 'N'être à la charge de personne'."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : Le travail comme aliénation, exploitation et déshumanisation",
        arguments: [
          {
            arg: "Dans le système capitaliste et le machinisme, l'ouvrier est chosifié et réduit à une marchandise.",
            authorOrQuote: "Karl Marx (Manuscrits de 1844) : 'Le travail produit l'ouvrier en tant que marchandise'."
          },
          {
            arg: "Activité pénible (tripalium) qui déforme le corps et fatigue l'esprit.",
            authorOrQuote: "Platon (La République) : 'Tout ce qui est artisanal et manœuvrier porte honte et déforme l'âme en même temps que le corps' ; Simone Weil (La Condition ouvrière)."
          }
        ]
      }
    ],
    conclusion: "Le travail est l'essence active de l'homme qui humanise par vocation créatrice, à condition d'être arraché à l'exploitation capitaliste pour redevenir une activité libre et digne."
  },
  {
    id: "trabi-dissert-3",
    type: "dissertation",
    title: "L'inconscient n'est-il qu'un mythe ?",
    sourceOrExam: "Bac Côte d'Ivoire",
    theme: "La conscience et l'inconscient",
    parcellaire: {
      "L'inconscient": "Ensemble des désirs, pulsions et actes psychiques refoulés qui échappent à la conscience",
      "N'est-il que": "Se réduit exclusivement à",
      "Un mythe": "Une fiction imaginaire, une illusion sans fondement réel, une invention sans consistance"
    },
    reformulation: "L'hypothèse psychanalytique de l'inconscient est-elle une pure vue de l'esprit sans réalité effective ?",
    probleme: "L'inconscient existe-t-il réellement dans le psychisme humain ?",
    aspectsOuQuestions: [
      "En quel sens les rationalistes peuvent-ils considérer l'inconscient comme une illusion trompeuse ?",
      "Cependant, l'inconscient n'est-il pas une réalité indiscutable attestée par ses manifestations concrètes ?"
    ],
    axesDissertation: [
      {
        axeTitle: "Axe 1 : L'inconscient perçu comme un mythe et une négation de la responsabilité",
        arguments: [
          {
            arg: "Pour le rationalisme, l'homme est une substance pensante consciente ; admettre l'inconscient relève de la déresponsabilisation.",
            authorOrQuote: "Jean-Paul Sartre (L'Être et le Néant) : 'Admettre l'idée de l'inconscient c'est faire preuve de mauvaise foi' ; Alain : 'L'inconscient est un mythe dangereux'."
          },
          {
            arg: "La conscience fait la dignité morale unique de l'homme au-dessus de l'animal.",
            authorOrQuote: "Emmanuel Kant (Anthropologie du point de vue pragmatique) : 'Posséder le Je dans sa représentation élève l'homme au-dessus de tous les êtres vivants'."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : L'inconscient comme réalité psychique incontournable",
        arguments: [
          {
            arg: "Les défaillances de la conscience (actes manqués, lapsus, rêves, symptômes névrotiques) prouvent l'action de pulsions refoulées.",
            authorOrQuote: "Sigmund Freud (Métapsychologie) : 'Les données de la conscience sont extrêmement lacunaires' ; Essais de psychanalyse : 'Le moi n'est pas maître dans sa propre maison'."
          },
          {
            arg: "La permanence de la violence sociale et des guerres révèle l'empire de Thanatos et des forces pulsionnelles obscures.",
            authorOrQuote: "Freud (Malaise dans la civilisation) : 'L'homme doit porter au compte de ses données instinctives une bonne somme d'agressivité' ; Paul Valéry : 'La conscience règne mais ne gouverne pas'."
          }
        ]
      }
    ],
    conclusion: "Loin d'être un mythe, l'inconscient éclaire la complexité du psychisme humain sans pour autant devoir servir de prétexte à la démission morale du sujet conscient."
  },
  {
    id: "trabi-dissert-4",
    type: "dissertation",
    title: "Peut-on qualifier l'État d'immoral ?",
    sourceOrExam: "Bac Côte d'Ivoire",
    theme: "L'État, la société et la justice",
    parcellaire: {
      "Peut-on": "Est-il possible, légitime de",
      "Qualifier": "Juger, affirmer, désigner",
      "Immoral": "Contraire aux valeurs éthiques, à la justice et au respect de la personne humaine"
    },
    reformulation: "L'autorité politique étatique agit-elle fondamentalement contre la morale et le bien commun ?",
    probleme: "L'État est-il par nature une institution corruptrice et oppressive ou l'instrument même de la liberté civile ?",
    aspectsOuQuestions: [
      "En quoi l'État peut-il mériter le qualificatif d'immoral à travers ses dérives répressives et machiavéliques ?",
      "Toutefois, n'est-il pas la condition indispensable de la justice et de la paix civile ?"
    ],
    axesDissertation: [
      {
        axeTitle: "Axe 1 : L'État qualifié d'immoral en raison de sa violence et de son exploitation",
        arguments: [
          {
            arg: "L'État opprime les citoyens par ses appareils répressifs et défend les intérêts de la classe dominante.",
            authorOrQuote: "Lénine (L'État et la Révolution) : 'L'État est l'organisation spéciale de la violence destinée à mater une certaine classe' ; Karl Marx : 'Instrument d'exploitation'."
          },
          {
            arg: "L'État use du mensonge politique et détruit les libertés individuelles.",
            authorOrQuote: "Nietzsche (Ainsi parlait Zarathoustra) : 'L'État, c'est le plus froid de tous les monstres froids ; il ment froidement : moi l'État, je suis le peuple' ; Max Stirner (L'Unique et sa propriété)."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : L'État guidé par la raison, garant du droit et de la concorde",
        arguments: [
          {
            arg: "L'État sort les hommes de la barbarie et de la violence de l'état de nature pour établir la sécurité.",
            authorOrQuote: "Spinoza (Traité théologico-politique) : 'La fin de l'État c'est donc en réalité la liberté' ; Hobbes (Léviathan) ; Bossuet."
          },
          {
            arg: "L'État incarne le règne de la loi et la volonté générale qui élève le citoyen.",
            authorOrQuote: "Hegel (Principes de la philosophie du droit) : 'L'État c'est le rationnel en soi' ; Rousseau : 'Le respect de la loi qu'on s'est prescrite est liberté'."
          }
        ]
      }
    ],
    conclusion: "L'État devient immoral lorsqu'il est confisqué par une oligarchie despotique, mais dans son essence républicaine et démocratique, il demeure le socle nécessaire de la vie morale et du droit."
  },
  {
    id: "trabi-dissert-5",
    type: "dissertation",
    title: "La démarche scientifique exclut-elle tout recours à la foi ?",
    sourceOrExam: "Baccalauréat Séries C-D-E 2011 (Côte d'Ivoire)",
    theme: "La science, la vérité et la foi",
    parcellaire: {
      "Démarche scientifique": "Méthode rationnelle, expérimentale et hypothético-déductive d'élaboration des connaissances",
      "Exclure": "Rejeter totalement, être incompatible avec, proscrire",
      "Recours à la foi": "Adhésion à des croyances ou postulats admis sans vérification sensible préalable"
    },
    reformulation: "La méthode de la science peut-elle s'édifier en éliminant toute forme de croyance ou de confiance ?",
    probleme: "La rigueur de la preuve scientifique s'oppose-t-elle radicalement à toute forme de foi ?",
    aspectsOuQuestions: [
      "Dans quelle mesure la démarche scientifique rompt-elle avec les dogmes religieux ?",
      "Toutefois, la science elle-même ne repose-t-elle pas sur une certaine foi dans ses axiomes, ses hypothèses et sa méthode ?"
    ],
    axesDissertation: [
      {
        axeTitle: "Axe 1 : La science comme refus méthodique du dogme et de la croyance aveugle",
        arguments: [
          {
            arg: "La science exige la vérification expérimentale et le doute constructif là où la foi exige l'obéissance.",
            authorOrQuote: "Gaston Bachelard (La Formation de l'esprit scientifique) : 'L'opinion pense mal ; elle ne pense pas' ; Freud : 'Pour la vérité, il faut nous en tenir à la science'."
          },
          {
            arg: "L'héliocentrisme galiléen a dû triompher contre les interdits dogmatiques de l'Inquisition.",
            authorOrQuote: "Galilée face au géocentrisme ; Karl Popper sur le critère de réfutabilité."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : La foi et la conviction au cœur même de la recherche scientifique",
        arguments: [
          {
            arg: "Le savant doit croire à l'intelligibilité de la nature et à la validité du principe de causalité.",
            authorOrQuote: "Claude Bernard (Introduction à l'étude de la médecine expérimentale) : 'Il ne faut point être sceptique, il faut croire à la science' ; Nietzsche (Le Gai Savoir) : 'La science, elle aussi, repose sur la foi'."
          },
          {
            arg: "Toute théorie scientifique s'enracine dans des hypothèses anticipées et des axiomes postulés.",
            authorOrQuote: "Robert Blanché (L'Axiomatique) ; Leibniz et la démonstration axiomatique."
          }
        ]
      }
    ],
    conclusion: "Si la science récuse la foi aveugle aux dogmes surnaturels, elle exige la foi rationnelle du chercheur dans la méthode expérimentale et dans la quête collective de la vérité."
  }
];

export const TRA_BI_HONORE_TEXT_EXPLICATIONS: TraBiSubjectStudy[] = [
  {
    id: "trabi-text-spinoza",
    type: "commentaire",
    title: "Texte Spinoza — Obéissance à l'État de droit et Liberté véritable",
    sourceOrExam: "Traité Théologico-politique, Paris, A. Delpeuch, 1927, p. 280",
    theme: "La liberté et l'État",
    probleme: "Qu'est-ce qu'être libre en société ?",
    theseAuteur: "Être libre, ce n'est pas agir selon son bon plaisir, mais obéir à un État fondé sur la raison dont la loi vise le salut de tout le peuple.",
    antithese: "L'État et ses commandements sont par essence destructeurs de la liberté individuelle.",
    intention: "Montrer que la véritable liberté réside dans l'obéissance civile aux lois de la raison.",
    enjeu: "L'épanouissement moral et la sécurité politique de l'homme.",
    structureLogiqueMouvements: [
      {
        movement: "1er mouvement (L1-L5)",
        delimitation: "« On pense que l'esclave (...) la seule conduite de la raison »",
        mainIdea: "Être libre, ce n'est pas être captif de ses désirs et plaisirs, mais vivre sous la conduite éclairée de la raison."
      },
      {
        movement: "2ème mouvement (L5-L11)",
        delimitation: "« Quant à l'action (...) mais un sujet »",
        mainIdea: "L'obéissance à un commandement ne fait pas un esclave si la loi a pour finalité l'intérêt général du peuple."
      },
      {
        movement: "3ème mouvement (L11-L13)",
        delimitation: "« Ainsi, cet État (...) la conduite de la Raison »",
        mainIdea: "L'État le plus libre est celui dont les lois sont fondées en droite raison car chacun y est sujet de sa propre liberté."
      }
    ],
    critiqueInterne: "Démarche déductive rigoureuse et cohérente qui part de la critique du préjugé vulgaire sur la liberté-licence pour définir le sujet libre dans l'État républicain rationnel.",
    critiqueExterneAxes: [
      {
        axeTitle: "Axe 1 : L'État rationnel comme condition sine qua non de la liberté",
        arguments: [
          {
            arg: "La fin de l'État est la sécurité et la liberté contre la barbarie de l'état de nature.",
            authorOrQuote: "Spinoza : 'L'État est institué pour libérer l'individu, pour qu'il vive en sécurité' ; Hegel : 'C'est seulement dans l'État que l'homme a une existence conforme à la raison'."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : Les dérives répressives de l'État réel",
        arguments: [
          {
            arg: "L'État réel est souvent un instrument de domination de classe et d'oppression liberticide.",
            authorOrQuote: "Max Stirner (L'Unique et sa propriété) : 'L'État ne poursuit qu'un seul but : assujettir l'individu' ; Karl Marx (Le Manifeste du parti communiste)."
          }
        ]
      }
    ],
    conclusion: "Spinoza démontre que la véritable liberté n'est pas l'anarchie pulsionnelle, mais la citoyenneté responsable sous la protection des lois justes."
  },
  {
    id: "trabi-text-bergson-conscience",
    type: "commentaire",
    title: "Texte Henri Bergson — Différence de nature entre conscience humaine et animale",
    sourceOrExam: "L'évolution créatrice, PUF, 1907, pp. 264-265",
    theme: "La conscience, la liberté et l'animalité",
    probleme: "En quoi la conscience humaine diffère-t-elle radicalement de la conscience animale ?",
    theseAuteur: "La conscience humaine est capable d'invention et de liberté illimitée, tandis que la conscience animale demeure captive de l'automatisme et de la routine de l'espèce.",
    antithese: "La conscience humaine et la conscience animale ne présenteraient qu'une simple différence de degré.",
    intention: "Établir la supériorité ontologique de l'homme sur l'animal par la puissance de choix et de création.",
    enjeu: "La dignité et la liberté de la condition humaine.",
    structureLogiqueMouvements: [
      {
        movement: "1er mouvement (L1-L4)",
        delimitation: "« Radicale aussi (...) de liberté. »",
        mainIdea: "La conscience correspond à la puissance de choix : elle est synonyme d'invention et de liberté."
      },
      {
        movement: "2ème mouvement (L5-L10)",
        delimitation: "« Or, chez l'animal (...) elle se libère. »",
        mainIdea: "L'animal reste prisonnier des automatismes de son espèce, alors que l'homme brise la chaîne et accède à la libération créatrice."
      }
    ],
    critiqueInterne: "Démarche comparative et antithétique d'une grande rigueur stylistique, utilisant l'image saisissante de la chaîne qui s'allonge pour l'animal mais se brise pour l'homme.",
    critiqueExterneAxes: [
      {
        axeTitle: "Axe 1 : La conscience humaine comme principe de liberté et d'élévation",
        arguments: [
          {
            arg: "L'homme doué de conscience pose des actes volontaires et transcende l'instinct.",
            authorOrQuote: "Hegel (Leçons sur l'esthétique) : 'L'homme doué de conscience fait de lui un être pour soi' ; Alexandre Kojève."
          }
        ]
      },
      {
        axeTitle: "Axe 2 : Les limites et les faiblesses de la conscience humaine",
        arguments: [
          {
            arg: "La conscience humaine est lacunaire et souvent dominée par l'inconscient et les pulsions animales résiduelles.",
            authorOrQuote: "Leibniz (petites perceptions inaperçues) ; Freud (Métapsychologie) ; Albert Camus (Le Mythe de Sisyphe : 'Les hommes aussi secrètent l'inhumain')."
          }
        ]
      }
    ],
    conclusion: "La conscience arrache l'homme à la routine animale en lui offrant la capacité de créer, mais cette liberté reste un combat perpétuel contre ses propres déterminismes."
  }
];
