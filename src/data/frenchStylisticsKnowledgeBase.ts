import { CourseSearchResult, CourseConceptFormula, CourseMethodStep, CourseSolvedExample } from '../types';

export interface TonaliteItem {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  objectif: string;
  indices: string[];
  exemplesOuGenres: string;
}

export interface FocalisationItem {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  perspective: string;
  authorQuote: string;
  authorWork: string;
  analysis: string;
}

export interface ConnecteurCategory {
  id: string;
  categoryLabel: string;
  aliases: string[];
  roleEtFonction: string;
  listeConnecteurs: string[];
}

export interface SemantiqueNotion {
  id: string;
  name: string;
  aliases: string[];
  definition: string;
  exemple: string;
  notes?: string;
}

// =============================================================================
// I. LES 11 TONALITÉS LITTÉRAIRES (OFFICIEL CHAPITRE 4)
// =============================================================================

export const TONALITES_LITTERAIRES_DATABASE: TonaliteItem[] = [
  {
    id: 'satirique',
    name: 'Tonalité satirique',
    aliases: ['tonalite satirique', 'registre satirique', 'satirique', 'la satire'],
    definition: "Un texte a une tonalité satirique lorsque l’auteur dénonce ou critique certaines tares ou maux qui minent la société en utilisant le rire, l'ironie et la dérision.",
    objectif: "Faire prendre conscience au lecteur et corriger les mœurs en les ridiculisant (castigat ridendo mores).",
    indices: [
      "Caricature, portraits déformés ou grotesques",
      "Ironie, antiphrases et exagérations hyperboliques",
      "Champ lexical du ridicule, des défauts moraux et des vices sociaux",
      "Écarts de langage et registre comique grinçant"
    ],
    exemplesOuGenres: "Molière (Le Tartuffe, Les Femmes savantes), Voltaire (Candide), Montesquieu (Lettres persanes), Bernard Dadié (Climbié)."
  },
  {
    id: 'didactique',
    name: 'Tonalité didactique',
    aliases: ['tonalite didactique', 'registre didactique', 'didactique', 'didactisme'],
    definition: "Un texte a une tonalité didactique lorsque le lecteur reçoit un enseignement, c’est-à-dire que le texte lui apporte de la connaissance, l’éduque ou l’informe méthodiquement.",
    objectif: "Instruire, transmettre un savoir théorique, philosophique ou moral avec clarté et rigueur démonstrative.",
    indices: [
      "Vocabulaire précis, technique ou spécialisé",
      "Emploi d'arguments ordonnés, de connecteurs logiques et de définitions",
      "Mode impératif, tournures injonctives ou déontiques (« il faut », « on doit »)",
      "Présence d'exemples démonstratifs ou de maximes morales"
    ],
    exemplesOuGenres: "Les Fables de La Fontaine, les traités philosophiques des Lumières (Diderot, Rousseau), les essais de Montaigne, discours scientifiques."
  },
  {
    id: 'pathetique',
    name: 'Tonalité pathétique',
    aliases: ['tonalite pathetique', 'registre pathetique', 'pathetique', 'le pathetique'],
    definition: "Un texte a une tonalité pathétique lorsqu’il attire la compassion du lecteur, en décrivant des faits et des souffrances qui font pitié et inspirent une vive douleur.",
    objectif: "Émouvoir aux larmes, susciter la commisération et l'empathie envers un être innocent victime du malheur.",
    indices: [
      "Champ lexical de la douleur, des larmes, de l'agonie et de la détresse",
      "Phrases exclamatives et interrogatives, interjections (« Hélas ! », « Ô ciel ! »)",
      "Rythme heurté, figures d'amplification (hyperboles) et d'insistance",
      "Personnages fragiles, démunis, enfants ou victimes innocentes"
    ],
    exemplesOuGenres: "Victor Hugo (Les Misérables, la mort de Fantine ou de Gavroche), Jean Racine (Andromaque), Émile Zola (Germinal)."
  },
  {
    id: 'lyrique',
    name: 'Tonalité lyrique',
    aliases: ['tonalite lyrique', 'registre lyrique', 'lyrique', 'le lyrisme', 'lyrisme'],
    definition: "Un texte a une tonalité lyrique lorsque l’auteur ou le narrateur met en évidence ses propres sentiments intimes (amour, tristesse, nostalgie, communion avec la nature).",
    objectif: "Partager l'intériorité et les émotions personnelles du cœur humain par un chant musical et poétique.",
    indices: [
      "Présence dominante de la 1ère personne du singulier (« je », « me », « moi », « mon »)",
      "Champ lexical de l'affectivité, de la passion amoureuse, de la mélancolie ou du temps qui fuit",
      "Musicalité du vers ou de la prose, assonances, allitérations et anaphores",
      "Métaphores et comparaisons exaltant le lien entre l'âme et la nature"
    ],
    exemplesOuGenres: "Alphonse de Lamartine (Méditations poétiques, « Le Lac »), Marceline Desbordes-Valmore, Charles Baudelaire, Léopold Sédar Senghor (Chants d'ombre)."
  },
  {
    id: 'comique',
    name: 'Tonalité comique',
    aliases: ['tonalite comique', 'registre comique', 'le registre comique', 'registre du comique'],
    definition: "C’est lorsque le texte provoque directement le rire ou le sourire chez le lecteur ou le spectateur.",
    objectif: "Divertir, détendre, amuser le public ou faire réfléchir sous couvert de légèreté.",
    indices: [
      "Comique de mots (calembours, jeux de mots, répétitions bouffonnes)",
      "Comique de geste (coups de bâton, chutes, mimiques grotesques)",
      "Comique de situation (quiproquos, retournements imprévus, malentendus)",
      "Comique de caractère (obsession ridicule d'un personnage : avarice, hypocrisie, pédantisme)"
    ],
    exemplesOuGenres: "Molière (L'Avare, Les Fourberies de Scapin), Beaumarchais (Le Barbier de Séville), Eugène Labiche, Georges Feydeau."
  },
  {
    id: 'polemique',
    name: 'Tonalité polémique',
    aliases: ['tonalite polemique', 'registre polemique', 'polemique', 'le polemique'],
    definition: "Un texte a une tonalité polémique (du grec polemos, la guerre) lorsqu’il confronte violemment deux idées contradictoires et attaque vigoureusement un adversaire pour discréditer sa thèse.",
    objectif: "Combattre une position adverse, indigner le lecteur et emporter son adhésion militante.",
    indices: [
      "Lexique dépréciatif violent, termes péjoratifs et apostrophes virulentes",
      "Questions rhétoriques agressives interpellant l'opposant",
      "Ironie mordante, sarcasmes et antithèses tranchées",
      "Rythme offensif, accumulations et anaphores martelées"
    ],
    exemplesOuGenres: "Voltaire (Traité sur la tolérance), Émile Zola (« J'accuse... ! »), Aimé Césaire (Discours sur le colonialisme), Frantz Fanon (Les Damnés de la terre)."
  },
  {
    id: 'realiste',
    name: 'Tonalité réaliste',
    aliases: ['tonalite realiste', 'registre realiste', 'tonalite du realisme'],
    definition: "Elle vise à présenter, sans souci d'embellissement artificiel, les éléments qui appartiennent à l'univers du réel quotidien.",
    objectif: "Créer l'illusion du vrai (l'effet de réel), dépeindre fidèlement la société, ses milieux sociaux et ses mécanismes.",
    indices: [
      "Lexique précis à effet de réel, détails techniques et matériels minutieux",
      "Noms de lieux réels, dates historiques et toponymie authentique",
      "Description brute des milieux populaires ou bourgeois sans idéalisation",
      "Registre de langue adapté au statut social des personnages (argot, patois, langage populaire)"
    ],
    exemplesOuGenres: "Honoré de Balzac (La Comédie humaine), Gustave Flaubert (Madame Bovary), Guy de Maupassant (Une Vie), Émile Zola (L'Assommoir)."
  },
  {
    id: 'fantastique',
    name: 'Tonalité fantastique',
    aliases: ['tonalite fantastique', 'registre fantastique', 'le registre fantastique'],
    definition: "Elle naît de l'intrusion ou de la pénétration brutale de l'irrationnel et du surnaturel dans un cadre rigoureusement réaliste et quotidien, provoquant le doute et l'hésitation.",
    objectif: "Créer l'angoisse, le vertige métaphysique et l'hésitation entre explication rationnelle et surnaturelle (selon Tzvetan Todorov).",
    indices: [
      "Cadre spatio-temporel nocturne, obscur ou inquiétant (châteaux, ruelles brumeuses)",
      "Verbes de perception incertaine (« sembler », « paraître », « croire voir »)",
      "Modalisation du doute (adverbes « peut-être », conditionnel)",
      "Champ lexical de la peur, de l'étrange, de la folie et du spectre"
    ],
    exemplesOuGenres: "Guy de Maupassant (Le Horla), Théophile Gautier (La Cafetière), Edgar Allan Poe, Prosper Mérimée (La Vénus d'Ille)."
  },
  {
    id: 'epique',
    name: 'Tonalité épique',
    aliases: ['tonalite epique', 'registre epique', 'l epique'],
    definition: "Inspirée des grandes épopées antiques, elle vise à grandir et à exalter les actions des personnages en insistant sur leur bravoure surhumaine, leur héroïsme et la dimension collective du combat.",
    objectif: "Provoquer l'admiration, susciter l'enthousiasme pour un idéal héroïque ou national.",
    indices: [
      "Figures d'amplification : hyperboles, superlatifs, accumulations épiques",
      "Champs lexicaux du combat, des armes, de la gloire, de la force colossale et de la mort héroïque",
      "Comparaisons grandioses assimilant les héros à des forces de la nature ou des dieux",
      "Pluriels majestueux et dimension collective de la lutte (un peuple, une armée)"
    ],
    exemplesOuGenres: "Homère (L'Iliade), La Chanson de Roland, Victor Hugo (La Légende des siècles), L'Épopée de Soundiata Keïta, Aimé Césaire (Cahier d'un retour au pays natal)."
  },
  {
    id: 'ironique',
    name: 'Tonalité ironique',
    aliases: ['tonalite ironique', 'registre ironique', 'l ironie', 'ironie litteraire'],
    definition: "Elle vise à dire le contraire de ce que l'on pense dans une perspective de moquerie, de raillerie ou de dénonciation critique.",
    objectif: "Créer une connivence avec le lecteur intelligent en l'amenant à décoder le second degré et à juger la bêtise ou l'injustice.",
    indices: [
      "Emploi fondamental de l'antiphrase (« Rien n'était si beau, si leste, si brillant que les deux armées » - Candide)",
      "Décalage entre le ton solennel et la réalité dérisoire ou cruelle",
      "Éloges paradoxaux et fausse naïveté du narrateur",
      "Ponctuation expressive (points d'exclamation, guillemets distanciés)"
    ],
    exemplesOuGenres: "Voltaire (Candide, Zadig), Montesquieu (De l'esclavage des nègres), Jonathan Swift (Modeste Proposition), Anatole France."
  },
  {
    id: 'tragique',
    name: 'Tonalité tragique',
    aliases: ['tonalite tragique', 'registre tragique', 'le tragique'],
    definition: "Elle naît de la conjonction de deux éléments fondamentaux : la mort inéluctable d’un personnage et le poids écrasant du destin (la fatalité contre laquelle les efforts humains sont vains).",
    objectif: "Inspirer la terreur et la pitié (la catharsis aristotélicienne) face à la condition humaine vulnérable et vouée au destin.",
    indices: [
      "Champ lexical du destin, de la fatalité, de la malédiction, de l'effroi et de la mort",
      "Sentiment d'impasse, d'injustice divine ou d'enfermement sans issue de secours",
      "Dilemmes déchirants où chaque choix mène au sacrifice",
      "Registre soutenu, noblesse des personnages (rois, reines, héros antiques)"
    ],
    exemplesOuGenres: "Sophocle (Œdipe Roi, Antigone), Jean Racine (Phèdre, Andromaque), Albert Camus (Le Malentendu), Jean Anouilh (Antigone)."
  }
];

// =============================================================================
// II. LA FOCALISATION (POINTS DE VUE NARRATIFS - CHAPITRE 4)
// =============================================================================

export const FOCALISATIONS_DATABASE: FocalisationItem[] = [
  {
    id: 'focalisation-zero',
    name: 'La Focalisation Zéro (Point de vue omniscient)',
    aliases: ['focalisation zero', 'point de vue omniscient', 'narrateur omniscient', 'point de vue zero', 'focalisation omnisciente'],
    definition: "On dit qu’un texte est écrit en focalisation zéro lorsque le narrateur connaît TOUT de l’histoire : le passé, le présent, l'avenir des personnages, leurs pensées les plus secrètes, leurs motivations intimes et leur façon d’agir.",
    perspective: "Narrateur > Personnage (le narrateur en sait plus que n'importe quel personnage).",
    authorQuote: "Le père Goriot, vieillard de soixante-neuf ans environ, s’était retiré chez madame Vauquer, en 1813, après avoir quitté les affaires. Il y avait d’abord pris l’appartement occupé par madame Couture, et donnait alors douze cents francs de pension, en homme pour qui cinq louis de plus ou de moins étaient une bagatelle. Madame Vauquer avait rafraîchi les trois chambres de cet appartement moyennant une indemnité préalable qui paya, dit-on, [...]",
    authorWork: "Honoré de Balzac, Le Père Goriot (1835)",
    analysis: "Dans ce texte, l’auteur laisse peu de place à l’imagination du lecteur : il donne tous les éléments sur les personnages, leur âge, l’endroit où ils habitent, leur histoire antérieure, le montant précis du loyer et leurs habitudes intimes."
  },
  {
    id: 'focalisation-externe',
    name: 'La Focalisation Externe (Point de vue objectif)',
    aliases: ['focalisation externe', 'point de vue externe', 'point de vue objectif', 'narrateur externe'],
    definition: "En focalisation externe, le narrateur se place en observateur neutre et extérieur (comme une caméra témoin). Il rapporte uniquement ce qu’il voit et ce qu’il entend, l’action telle qu’elle se passe, sans jamais avoir accès aux pensées ni aux intentions intérieures des personnages.",
    perspective: "Narrateur < Personnage (le narrateur en sait moins que les personnages et observe depuis l'extérieur).",
    authorQuote: "L’un venait de la Bastille, l’autre du Jardin des Plantes. Le plus grand, vêtu de toile, marchait le chapeau en arrière, le gilet déboutonné et sa cravate à la main. Le plus petit, dont le corps disparaissait dans une redingote marron, baissait la tête sous une casquette à visière pointue. Quand ils furent arrivés au milieu du boulevard, ils s’assirent à la même minute, sur le même banc.",
    authorWork: "Gustave Flaubert, Bouvard et Pécuchet (1881)",
    analysis: "Ici, l’auteur nous donne un strict minimum d’informations : il se contente de rapporter les apparences physiques, les vêtements, les gestes et les déplacements visibles depuis la rue, laissant une grande part d'interprétation au lecteur."
  },
  {
    id: 'focalisation-interne',
    name: 'La Focalisation Interne (Point de vue subjectif)',
    aliases: ['focalisation interne', 'point de vue interne', 'point de vue subjectif', 'narrateur interne'],
    definition: "En focalisation interne, le narrateur se glisse dans la peau d’un personnage particulier pour filtrer l'histoire à travers son regard. Il décrit alors ce que voit, entend, ressent et pense uniquement ce personnage-là.",
    perspective: "Narrateur = Personnage (le narrateur sait exactement ce que le personnage sait et ressent à cet instant).",
    authorQuote: "Frédéric, en face, distinguait l’ombre de ses cils. Elle trempait ses lèvres dans son verre, cassait un peu de croûte entre ses doigts ; le médaillon de lapis-lazuli, attaché par une chaînette d’or à son poignet, de temps à autre sonnait contre son assiette. Ceux qui étaient là, pourtant, n’avaient pas l’air de la remarquer. [...]",
    authorWork: "Gustave Flaubert, L’Éducation sentimentale (1869)",
    analysis: "Ici, l’auteur se glisse dans la conscience de Frédéric Moreau pour rapporter ses émotions amoureuses et ses observations subjectives centrées sur Madame Arnoux, ignorant ce que pensent les autres convives."
  }
];

// =============================================================================
// III. LES CONNECTEURS LOGIQUES (TABLEAU OFFICIEL CHAPITRE 4)
// =============================================================================

export const CONNECTEURS_LOGIQUES_DATABASE: ConnecteurCategory[] = [
  {
    id: 'but',
    categoryLabel: 'Connecteurs de but',
    aliases: ['connecteurs de but', 'connecteur de but', 'connecteurs logiques de but', 'liaison de but'],
    roleEtFonction: "Exprimer l’objectif ou l’intention d’une action dans la démonstration.",
    listeConnecteurs: [
      "Afin de", "à cette fin", "dans ce but", "pour cela", "afin que", "pour que",
      "dans l’optique de", "en vue de"
    ]
  },
  {
    id: 'cause',
    categoryLabel: 'Connecteurs de cause',
    aliases: ['connecteurs de cause', 'connecteur de cause', 'connecteurs logiques de cause', 'liaison de cause'],
    roleEtFonction: "Indiquer la raison ou l’origine explicative d’un fait ou d'une thèse.",
    listeConnecteurs: [
      "Parce que", "car", "à force de", "en raison de", "faute de", "comme",
      "du fait que", "étant donné que", "puisque", "sous prétexte que", "attendu que",
      "c’est que", "grâce à", "à cause de"
    ]
  },
  {
    id: 'consequence',
    categoryLabel: 'Connecteurs de conséquence',
    aliases: ['connecteurs de consequence', 'connecteur de consequence', 'connecteurs logiques de consequence', 'liaison de consequence'],
    roleEtFonction: "Exprimer le résultat ou l'aboutissement logique d’un fait.",
    listeConnecteurs: [
      "Ainsi", "alors", "c’est pourquoi", "dès lors", "d’où", "par conséquent",
      "de sorte que", "de telle manière que", "si bien que", "à un tel point que",
      "jusqu’à ce que", "faute de quoi", "de ce fait", "ce qui explique pourquoi"
    ]
  },
  {
    id: 'opposition',
    categoryLabel: "Connecteurs d’opposition et de nuance",
    aliases: ['connecteurs d opposition', 'connecteur d opposition', 'connecteurs de nuance', 'connecteurs de concession', 'connecteurs logiques d opposition', 'liaison d opposition'],
    roleEtFonction: "Exprimer une idée contraire, introduire une antithèse ou nuancer un propos.",
    listeConnecteurs: [
      "Mais", "toutefois", "cependant", "par contre", "néanmoins", "à l’opposé",
      "au contraire", "d’ailleurs", "du reste", "en revanche", "pourtant", "au demeurant",
      "du moins", "alors que", "même si", "nul doute que", "quand bien même", "quoique",
      "tandis que", "en admettant que", "au lieu que", "malgré", "en dépit de",
      "à l’exception de", "Il est certain que… mais il faut aussi noter que",
      "Bien que… il n’en demeure pas moins que", "Certes… mais", "Il est vrai que… mais"
    ]
  },
  {
    id: 'synthese-transition',
    categoryLabel: 'Connecteurs de synthèse et de transition',
    aliases: ['connecteurs de synthese', 'connecteur de synthese', 'connecteurs de transition', 'connecteur de transition', 'connecteurs logiques de synthese', 'liaison de transition'],
    roleEtFonction: "Résumer un axe d'analyse ou introduire une conclusion partielle entre les parties.",
    listeConnecteurs: [
      "De ce qui précède, nous pouvons retenir que",
      "À mi-parcours de notre réflexion, retenons que",
      "Résumons-nous pour dire que",
      "Tout cet ensemble justifie l’idée selon laquelle",
      "À ce niveau de notre réflexion, notons que"
    ]
  },
  {
    id: 'explication-reformulation',
    categoryLabel: "Connecteurs d’explication et de reformulation",
    aliases: ['connecteurs d explication', 'connecteur d explication', 'connecteurs de reformulation', 'connecteur de reformulation', 'connecteurs logiques d explication'],
    roleEtFonction: "Clarifier, préciser ou reformuler une idée pour approfondir l'argumentation.",
    listeConnecteurs: [
      "En effet", "en clair", "en fait", "en réalité", "plus exactement", "notons que",
      "soulignons que", "précisons que", "en d’autres termes", "mieux", "autrement dit",
      "c’est-à-dire", "il apparaît donc que", "pour dire que", "ce qui signifie que",
      "ce qui sous-entend que", "il faut entendre par là que", "tout le sens de cette pensée est que",
      "on retient de cette pensée que", "cette affirmation révèle que", "de cette pensée, il en découle que"
    ]
  },
  {
    id: 'enumeration',
    categoryLabel: "Connecteurs d’énumération et d'ordre",
    aliases: ['connecteurs d enumeration', 'connecteur d enumeration', 'connecteurs d ordre', 'connecteur d ordre', 'connecteurs logiques d enumeration', 'connecteurs logiques ordre'],
    roleEtFonction: "Structurer et ordonner les idées et paragraphes dans un discours suivi.",
    listeConnecteurs: [
      "D’abord… ensuite… de plus… enfin…",
      "Premièrement… deuxièmement… troisièmement…",
      "En premier lieu… en second lieu… en dernier lieu…",
      "D’une part… d’autre part…",
      "Aussi… en outre… par ailleurs…"
    ]
  },
  {
    id: 'illustration-exemple',
    categoryLabel: "Connecteurs d’illustration et d’exemple",
    aliases: ['connecteurs d illustration', 'connecteur d illustration', 'connecteurs d exemple', 'connecteur d exemple', 'connecteurs logiques d illustration', 'connecteurs pour introduire un exemple'],
    roleEtFonction: "Introduire un exemple littéraire précis ou une illustration concrète.",
    listeConnecteurs: [
      "Nous pouvons citer par exemple", "C’est le cas de", "Citons en particulier",
      "En l’occurrence", "Illustrons-nous à travers le cas de",
      "En guise d’illustration, nous pouvons citer", "Corroborons nos propos avec"
    ]
  },
  {
    id: 'appui-citation',
    categoryLabel: "Connecteurs d’appui et de citation d’auteur",
    aliases: ['connecteurs d appui', 'connecteur d appui', 'connecteurs de citation', 'connecteur de citation', 'connecteurs logiques de citation', 'connecteurs pour introduire une citation'],
    roleEtFonction: "Introduire ou appuyer une citation ou une doctrine littéraire.",
    listeConnecteurs: [
      "C’est justement ce que pense…", "C’est à juste titre que… affirme ceci",
      "C’est dans cette optique que… affirme ceci", "… s’inscrit dans cette vision des choses quand il affirme ceci",
      "… n’a donc pas tort d’affirmer que", "C’est ce que pense…"
    ]
  },
  {
    id: 'conclusion',
    categoryLabel: 'Connecteurs de conclusion',
    aliases: ['connecteurs de conclusion', 'connecteur de conclusion', 'connecteurs pour conclure', 'connecteurs logiques de conclusion', 'liaison de conclusion'],
    roleEtFonction: "Clôturer ou terminer une réflexion générale ou un devoir académique.",
    listeConnecteurs: [
      "En conclusion", "En définitive", "Pour finir", "En somme", "En guise de conclusion",
      "Pour conclure", "Au final", "Pour mettre un terme à notre réflexion",
      "Au terme de notre analyse", "Au crépuscule de notre réflexion", "Au terme de notre investigation", "Finalement"
    ]
  },
  {
    id: 'addition',
    categoryLabel: 'Connecteurs d’addition',
    aliases: ['connecteurs d addition', 'connecteur d addition', 'connecteurs logiques d addition', 'liaison d addition'],
    roleEtFonction: "Ajouter un nouvel argument ou une idée supplémentaire dans le paragraphe.",
    listeConnecteurs: [
      "De plus", "en outre", "également", "de surcroît", "par ailleurs"
    ]
  }
];

// =============================================================================
// IV. SÉMANTIQUE – SENS ET RELATIONS (TABLEAU DES 26 NOTIONS OFFICIELLES)
// =============================================================================

export const SEMANTIQUE_DATABASE: SemantiqueNotion[] = [
  {
    id: 'polysemie',
    name: 'La Polysémie',
    aliases: ['polysemie', 'polysemique', 'mot polysemique'],
    definition: "Propriété d'un mot qui possède plusieurs sens différents selon le contexte dans lequel il est employé.",
    exemple: "Le mot « feuille » : feuille d'arbre (biologie) vs feuille de papier (écriture/bureau)."
  },
  {
    id: 'champ-semantique',
    name: 'Le Champ sémantique',
    aliases: ['champ semantique', 'champs semantiques'],
    definition: "Ensemble de toutes les significations et acceptions différentes que peut prendre un même mot dans la langue.",
    exemple: "Le mot « chien » : animal domestique / personne méprisable / cran mécanique d'une arme à feu."
  },
  {
    id: 'champ-lexical',
    name: 'Le Champ lexical',
    aliases: ['champ lexical', 'champs lexicaux'],
    definition: "Ensemble de mots de différentes natures grammaticales (noms, verbes, adjectifs, adverbes) qui renvoient à une même idée, à un même thème ou à un même domaine de la réalité.",
    exemple: "Pour le thème de l'activité physique : « courir, sauter, marcher, vitesse, effort, essoufflé »."
  },
  {
    id: 'sens-propre',
    name: 'Le Sens propre',
    aliases: ['sens propre', 'sens premier', 'sens litteral'],
    definition: "Le sens premier, littéral, concret ou le plus courant d’un mot, tel qu'il est défini en tête d'article de dictionnaire.",
    exemple: "« Courir » = se déplacer rapidement à pied en prenant appui alternativement sur chaque jambe."
  },
  {
    id: 'sens-figure',
    name: 'Le Sens figuré',
    aliases: ['sens figure', 'sens image', 'metaphorique'],
    definition: "Usage imagé, métaphorique ou abstrait d’un mot par transfert analogique de son sens propre.",
    exemple: "« Un cœur de pierre » = une personne insensible, dure et sans pitié."
  },
  {
    id: 'mots-melioratifs',
    name: 'Les Mots mélioratifs (ou laudatifs)',
    aliases: ['melioratif', 'mots melioratifs', 'laudatif', 'vocabulaire melioratif'],
    definition: "Vocabulaire positif exprimant un jugement favorable, valorisant ou approbateur de la part de l'énonciateur.",
    exemple: "« Brillant, admirable, vertueux, chef-d'œuvre, éclatant, génie »."
  },
  {
    id: 'mots-pejoratifs',
    name: 'Les Mots péjoratifs (ou dépréciatifs)',
    aliases: ['pejoratif', 'mots pejoratifs', 'depreciatif', 'vocabulaire pejoratif'],
    definition: "Vocabulaire dépréciatif exprimant un jugement défavorable, négatif, méprisant ou critique.",
    exemple: "« Médiocre, vulgaire, infâme, gribouillage, ignoble, nullité »."
  },
  {
    id: 'enonce-explicite',
    name: 'L’Énoncé explicite',
    aliases: ['enonce explicite', 'sens explicite', 'vocabulaire explicite'],
    definition: "Énoncé clairement et formellement exprimé dans le texte, sans ambiguïté ni sous-entendu.",
    exemple: "« Il fait froid dans cette salle. »"
  },
  {
    id: 'enonce-implicite',
    name: 'L’Énoncé implicite (sous-entendu ou présupposé)',
    aliases: ['enonce implicite', 'sens implicite', 'l implicite en francais', 'sous-entendu litteraire'],
    definition: "Information non formulée directement mais que le destinataire doit déduire du contexte d'énonciation ou des présupposés linguistiques.",
    exemple: "« Il frissonne et claque des dents » suggère implicitement : il a extrêmement froid."
  },
  {
    id: 'denotation',
    name: 'La Dénotation',
    aliases: ['denotation', 'sens denotatif'],
    definition: "Sens premier, objectif, stable, neutre et partagé par l'ensemble des locuteurs d'une langue (la définition brute du dictionnaire).",
    exemple: "« Chat » dénote un félin mammifère carnivore domestique."
  },
  {
    id: 'connotation',
    name: 'La Connotation',
    aliases: ['connotation', 'sens connotatif'],
    definition: "Ensemble des valeurs affectives, culturelles, symboliques ou subjectives qui viennent s'ajouter au sens dénotatif dans un contexte donné.",
    exemple: "« Chat » connote l'agilité, le mystère, l'indépendance, la douceur ou la superstition (chat noir)."
  },
  {
    id: 'synonyme',
    name: 'Les Synonymes',
    aliases: ['synonyme', 'synonymes', 'synonymie'],
    definition: "Mots ou expressions de même classe grammaticale qui possèdent un sens identique ou très voisin.",
    exemple: "« Fatigué » / « Épuisé » / « Harassé »."
  },
  {
    id: 'antonyme',
    name: 'Les Antonymes',
    aliases: ['antonyme', 'antonymes', 'antonymie'],
    definition: "Mots de même classe grammaticale qui expriment des sens rigoureusement contraires ou opposés.",
    exemple: "« Grand » vs « Petit » ; « Courage » vs « Lâcheté »."
  },
  {
    id: 'homonyme',
    name: 'Les Homonymes',
    aliases: ['homonyme', 'homonymes', 'homonymie'],
    definition: "Mots qui se prononcent de la même manière (homophones) ou s'écrivent de la même façon (homographes) mais possèdent des sens totalement différents et des étymologies distinctes.",
    exemple: "« Mer » (océan) / « Mère » (parent) / « Maire » (élu communal)."
  },
  {
    id: 'paronyme',
    name: 'Les Paronymes',
    aliases: ['paronyme', 'paronymes', 'paronymie'],
    definition: "Mots dont la prononciation et la graphie sont très proches (se différenciant par un seul phonème ou une lettre), mais dont les sens sont totalement différents.",
    exemple: "« Conjecture » (supposition, hypothèse) vs « Conjoncture » (situation économique et politique à un moment donné)."
  },
  {
    id: 'mots-famille',
    name: 'Les Mots de même famille',
    aliases: ['famille de mots', 'mots de meme famille', 'radical lexical'],
    definition: "Mots formés à partir d'un même radical étymologique par adjonction de préfixes, de suffixes ou par dérivation.",
    exemple: "Radical « pauvre » → « appauvrir », « appauvrissement », « pauvreté », « paupérisation »."
  },
  {
    id: 'hyperonyme',
    name: 'L’Hyperonyme',
    aliases: ['hyperonyme', 'hyperonymes'],
    definition: "Mot au sens générique et large dont l'extension englobe le sens d’autres mots plus spécifiques.",
    exemple: "« Animal » est l'hyperonyme de « chat », « chien » et « oiseau »."
  },
  {
    id: 'hyponyme',
    name: 'L’Hyponyme',
    aliases: ['hyponyme', 'hyponymes'],
    definition: "Mot au sens spécifique et restreint dont la signification est incluse dans celle d’un terme générique (l'hyperonyme).",
    exemple: "« Chat » est un hyponyme de « félin » et de « animal »."
  },
  {
    id: 'homographes-non-homophones',
    name: 'Les Homographes non homophones',
    aliases: ['homographes', 'homographes non homophones'],
    definition: "Mots qui s'écrivent de manière rigoureusement identique mais qui se prononcent différemment selon leur sens grammatical.",
    exemple: "« Les poules du couvent » [ku.vɑ̃] / « Elles couvent leurs œufs » [kuv]."
  },
  {
    id: 'polysemie-contexte',
    name: 'Le Mot polysémique dans son contexte',
    aliases: ['mot polysemique dans son contexte', 'contexte polysemie'],
    definition: "C'est le contexte linguistique d'énonciation qui permet d'actualiser l'acception précise d'un mot à multiples sens.",
    exemple: "« La feuille tombe » (arbre) vs « La feuille est rendue au professeur » (copie d'examen)."
  },
  {
    id: 'figures-sens',
    name: 'Les Figures de style liées au sens (Tropes)',
    aliases: ['figures liees au sens', 'tropes litteraires', 'figures de sens'],
    definition: "Procédés de style qui modifient ou déplacent le sens habituel des mots (métaphore, métonymie, synecdoque, antonomase).",
    exemple: "« Un cœur de pierre » (métaphore modifiant le sens matériel du mot « pierre »)."
  },
  {
    id: 'synonymie-partielle',
    name: 'La Synonymie partielle',
    aliases: ['synonymie partielle', 'synonymes partiels'],
    definition: "Deux mots ont un sens très proche mais ne sont pas interchangeables dans tous les contextes stylistiques ou de registre.",
    exemple: "« Maison » et « Demeure » sont synonymes, mais « demeure » ajoute une connotation de noblesse et de grandeur."
  },
  {
    id: 'antonymie-graduelle',
    name: 'L’Antonymie graduelle (ou scalaire)',
    aliases: ['antonymie graduelle', 'antonymes graduels'],
    definition: "Relation d'opposition qui comporte des degrés et des termes intermédiaires mesurables.",
    exemple: "« Glacé » ↔ « Tiède » ↔ « Brûlant » ; « Petit » ↔ « Moyen » ↔ « Grand »."
  },
  {
    id: 'antonymie-complementaire',
    name: 'L’Antonymie complémentaire (ou contradictoire)',
    aliases: ['antonymie complementaire', 'antonymes complementaires'],
    definition: "Opposition binaire totale et absolue sans intermédiaire possible : la négation de l'un implique obligatoirement l'affirmation de l'autre.",
    exemple: "« Vivant » vs « Mort » ; « Vrai » vs « Faux » ; « Présent » vs « Absent »."
  },
  {
    id: 'antonymie-reciproque',
    name: 'L’Antonymie réciproque (ou converse)',
    aliases: ['antonymie reciproque', 'antonymes reciproques'],
    definition: "Opposition qui traduit une inversion symétrique de relation ou de perspective entre deux actants.",
    exemple: "« Vendre » vs « Acheter » ; « Prêter » vs « Emprunter » ; « Parent » vs « Enfant »."
  },
  {
    id: 'connotation-affective',
    name: 'La Connotation affective (positive / négative / neutre)',
    aliases: ['connotation affective', 'valeur affective des mots'],
    definition: "Tonalité émotionnelle particulière transmise par un terme selon le niveau de langue et l'intention du locuteur.",
    exemple: "« Enfant » (neutre) vs « Chérubin » (affectueux valorisant) vs « Mioche / Gamin » (dépréciatif)."
  }
];

// =============================================================================
// FONCTIONS DE RECHERCHE DÉDIÉES DU CHAPITRE 4
// =============================================================================

function normalizeText(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Recherche d'une tonalité littéraire isolée (ex: "tonalité tragique", "tonalité lyrique", "satirique")
 */
export function findTonaliteItem(query: string): TonaliteItem | null {
  const norm = normalizeText(query);
  for (const t of TONALITES_LITTERAIRES_DATABASE) {
    for (const alias of t.aliases) {
      const normAlias = normalizeText(alias);
      const re = new RegExp(`(?:^|\\b)${escapeRegExp(normAlias)}(?:\\b|$)`, 'i');
      if (re.test(norm)) {
        return t;
      }
    }
  }
  return null;
}

/**
 * Détecte si la requête porte sur les Tonalités Littéraires en général
 */
export function isTonalitesCatalogQuery(query: string): boolean {
  const norm = normalizeText(query);
  return /\b(?:tonalites?|registres?)\s+litteraires?\b/i.test(norm) ||
    /\b(?:les\s+11\s+tonalites|toutes\s+les\s+tonalites|tonalites\s+francais|tableau\s+des\s+tonalites)\b/i.test(norm) ||
    norm === "tonalite" || norm === "tonalites" || norm === "registre" || norm === "registres";
}

/**
 * Recherche d'une focalisation isolée (ex: "focalisation zéro", "focalisation externe", "focalisation interne")
 */
export function findFocalisationItem(query: string): FocalisationItem | null {
  const norm = normalizeText(query);
  for (const f of FOCALISATIONS_DATABASE) {
    for (const alias of f.aliases) {
      const normAlias = normalizeText(alias);
      const re = new RegExp(`(?:^|\\b)${escapeRegExp(normAlias)}(?:\\b|$)`, 'i');
      if (re.test(norm)) {
        return f;
      }
    }
  }
  return null;
}

/**
 * Détecte si la requête porte sur la Focalisation en général
 */
export function isFocalisationCatalogQuery(query: string): boolean {
  const norm = normalizeText(query);
  return /\b(?:focalisation|focalisations|point\s+de\s+vue\s+narratif|points\s+de\s+vue\s+narratifs|narrateur\s+et\s+point\s+de\s+vue)\b/i.test(norm) ||
    norm === "focalisation" || norm === "focalisations" || norm === "point de vue";
}

/**
 * Recherche des connecteurs logiques par catégorie ou requête globale
 */
export function findConnecteurCategory(query: string): ConnecteurCategory | null {
  const norm = normalizeText(query);
  for (const c of CONNECTEURS_LOGIQUES_DATABASE) {
    for (const alias of c.aliases) {
      const normAlias = normalizeText(alias);
      const re = new RegExp(`(?:^|\\b)${escapeRegExp(normAlias)}(?:\\b|$)`, 'i');
      if (re.test(norm)) {
        return c;
      }
    }
  }
  return null;
}

/**
 * Détecte si la requête porte sur les Connecteurs Logiques en général
 */
export function isConnecteursCatalogQuery(query: string): boolean {
  const norm = normalizeText(query);
  return /\b(?:connecteurs?\s+logiques?|mots?\s+de\s+liaison|articulations?\s+logiques?|table\s+des\s+connecteurs|tableau\s+des\s+connecteurs|connecteurs?\s+dissertation)\b/i.test(norm);
}

/**
 * Recherche d'une notion de sémantique isolée (ex: "champ lexical", "polysémie", "dénotation", "connotation")
 */
export function findSemantiqueItem(query: string): SemantiqueNotion | null {
  const norm = normalizeText(query);
  for (const s of SEMANTIQUE_DATABASE) {
    for (const alias of s.aliases) {
      const normAlias = normalizeText(alias);
      const re = new RegExp(`(?:^|\\b)${escapeRegExp(normAlias)}(?:\\b|$)`, 'i');
      if (re.test(norm)) {
        return s;
      }
    }
  }
  return null;
}

/**
 * Détecte si la requête porte sur la Sémantique en général
 */
export function isSemantiqueCatalogQuery(query: string): boolean {
  const norm = normalizeText(query);
  return /\b(?:semantique|sens\s+et\s+relations|lexique\s+semantique|relations\s+de\s+sens)\b/i.test(norm) ||
    norm === "semantique";
}

// =============================================================================
// CONSTRUCTEURS DE COURSERESULTRESULT POUR CHAQUE DOMAINE DU CHAPITRE 4
// =============================================================================

/**
 * 1. Fiche globale des 11 Tonalités Littéraires
 */
export function buildTonalitesCatalogCourseResult(originalQuery: string): CourseSearchResult {
  const directContent = `**Les 11 Tonalités Littéraires (Registres) au Baccalauréat :**\n\n` +
    `La **tonalité** (ou registre) est l'impression ou l'émotion dominante qui se dégage d'un texte littéraire selon l'objectif visé par l'auteur :\n\n` +
    TONALITES_LITTERAIRES_DATABASE.map((t, idx) =>
      `• **${idx + 1}. ${t.name}**\n` +
      `  - *Définition :* ${t.definition}\n` +
      `  - *Objectif :* ${t.objectif}\n` +
      `  - *Indices stylistiques :* ${t.indices.join(' ; ')}.\n` +
      `  - *Auteurs & Œuvres :* ${t.exemplesOuGenres}`
    ).join('\n\n') +
    `\n\n**Conseil méthodologique pour le Bac :** Ne confondez pas le genre littéraire (roman, poésie, théâtre) et la tonalité (tragique, comique, lyrique...). Un roman peut comporter des scènes pathétiques, satiriques ou épiques.`;

  const concepts: CourseConceptFormula[] = TONALITES_LITTERAIRES_DATABASE.map(t => ({
    name: t.name,
    formulaOrRule: t.definition,
    explanation: `Objectif : ${t.objectif} | Procédés : ${t.indices.slice(0, 2).join(' ; ')}.`,
    contextOrApplication: `Repères : ${t.exemplesOuGenres}`
  }));

  const method: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: "Repérer l'émotion ou l'effet dominant sur le lecteur",
      whatToDo: "S'interroger : l'auteur cherche-t-il à faire rire (comique/satirique), à émouvoir aux larmes (pathétique), à impressionner par l'héroïsme (épique) ou à effrayer par le destin (tragique) ?",
      reflexOrTip: "Noter la réaction immédiate ressentie à la première lecture du texte."
    },
    {
      stepNumber: 2,
      title: "Relever le faisceau d'indices formels",
      whatToDo: "Identifier le champ lexical dominant, la ponctuation expressive (!, ?), les figures de style associées (hyperboles pour l'épique, antiphrases pour l'ironique) et le système d'énonciation.",
      reflexOrTip: "Une tonalité ne repose jamais sur un seul mot isolé, mais sur une convergence de procédés."
    },
    {
      stepNumber: 3,
      title: "Formuler l'analyse dans le commentaire composé",
      whatToDo: "Lier la tonalité au sens du texte : « En employant une tonalité [X], caractérisée par [procédés précis], l'auteur entend [dénoncer/exalter/émouvoir]... »",
      reflexOrTip: "Bannir l'étiquetage gratuit sans citation du texte."
    }
  ];

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Stylistique (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale Baccalauréat',
    chapterTitle: 'Les 11 Tonalités Littéraires : Définitions, Objectifs & Indices Stylistiques',
    directContent,
    definitionAndScope: "La tonalité (ou registre littéraire) correspond à la couleur affective ou intellectuelle donnée à un texte pour susciter une réaction émotionnelle précise chez le destinataire. Le Chapitre 4 officiel en recense 11 fondamentales.",
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: method,
    solvedExample: {
      problemStatement: "Comment identifier et justifier la tonalité d'un extrait de Candide de Voltaire décrivant la bataille ?",
      solutionStepByStep: "1. Relevé : « Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées. »\n2. Analyse : L'admiration feinte pour l'appareil militaire contraste violemment avec le massacre sanglant décrit la phrase suivante (« canons renversèrent environ six mille hommes »).\n3. Déduction : C'est une tonalité ironique reposant sur l'antiphrase, au service d'une visée satirique et polémique contre l'absurdité de la guerre.",
      finalAnswer: "Le passage conjugue tonalités ironique et polémique pour dénoncer la barbarie du conflit."
    },
    classicExamTraps: [
      "Ne pas confondre Tonalité Tragique (mort inéluctable causée par la fatalité sans espoir) et Tonalité Pathétique (souffrance inspirant la compassion et les larmes).",
      "Ne pas confondre Tonalité Satirique (critique moqueuse des travers de la société par le rire) et Tonalité Polémique (combat violent et frontal d'idées contre un adversaire)."
    ],
    selfCheckChecklist: [
      "Ai-je identifié le bon registre parmi les 11 officiels ?",
      "Ai-je cité au moins 2 indices textuels précis (champ lexical, figures, ponctuation) ?",
      "L'effet visé sur le lecteur est-il clairement explicité ?"
    ],
    quickRevisionMemo: "Les 11 Tonalités : Satirique (moquerie sociale), Didactique (leçon), Pathétique (compassion), Lyrique (sentiments intimes), Comique (rire), Polémique (combat d'idées), Réaliste (effet de réel brut), Fantastique (doute irrationnel), Épique (héroïsme grandiose), Ironique (dire l'inverse), Tragique (fatalité mortelle).",
    certificationNote: "Conforme au cours officiel du Guide de Révision — Chapitre 4 (p. 21-25)."
  };
}

/**
 * 2. Fiche d'une Tonalité Littéraire isolée
 */
export function buildSingleTonaliteCourseResult(tonalite: TonaliteItem, originalQuery: string): CourseSearchResult {
  const directContent = `**${tonalite.name} (Stylistique & Baccalauréat) :**\n\n` +
    `• **Définition :** ${tonalite.definition}\n` +
    `• **Objectif poursuivi par l'auteur :** ${tonalite.objectif}\n` +
    `• **Indices et procédés stylistiques majeurs :**\n` +
    tonalite.indices.map(i => `  - ${i}`).join('\n') + `\n` +
    `• **Auteurs et œuvres emblématiques :** ${tonalite.exemplesOuGenres}\n\n` +
    `**Formule d'insertion au Bac :** « En adoptant une tonalité ${tonalite.id}, mise en relief par [citer procédés et lignes], l'auteur réussit à ${tonalite.objectif.toLowerCase()} »`;

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Stylistique (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale',
    chapterTitle: `${tonalite.name} : Définition, Indices et Analyse`,
    directContent,
    definitionAndScope: tonalite.definition,
    coreConceptsAndFormulas: [
      {
        name: tonalite.name,
        formulaOrRule: tonalite.definition,
        explanation: `Objectif : ${tonalite.objectif}`,
        contextOrApplication: `Indices : ${tonalite.indices.join(' ; ')}`
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Relever les indices spécifiques",
        whatToDo: `Chercher dans le texte les marques caractéristiques : ${tonalite.indices.slice(0, 2).join(', ')}.`,
        reflexOrTip: "Souligner les mots précis et la ponctuation expressive."
      },
      {
        stepNumber: 2,
        title: "Lier la forme au fond",
        whatToDo: `Démontrer en quoi cette tonalité sert le propos de l'écrivain : ${tonalite.objectif}.`,
        reflexOrTip: "Relier toujours la tonalité au message moral, politique ou affectif de l'œuvre."
      }
    ],
    solvedExample: {
      problemStatement: `Comment commenter la ${tonalite.name.toLowerCase()} dans un devoir ?`,
      solutionStepByStep: `1. Nommer précisément la tonalité (${tonalite.name}).\n2. Citer les passages textuels révélateurs.\n3. Expliquer l'impact sur la sensibilité ou la réflexion du lecteur.`,
      finalAnswer: `L'analyse confirme que la ${tonalite.name.toLowerCase()} accentue la portée du texte.`
    },
    classicExamTraps: [
      "Ne pas plaquer une tonalité sans relever des citations et des procédés précis.",
      "Vérifier qu'il ne s'agit pas d'une tonalité voisine."
    ],
    selfCheckChecklist: [
      "Les indices relevés sont-ils probants ?",
      "L'objectif de l'auteur est-il explicité ?"
    ],
    quickRevisionMemo: `${tonalite.name} : ${tonalite.definition} Objectif : ${tonalite.objectif}`,
    certificationNote: "Fiche officielle conforme au Guide de Révision Chapitre 4."
  };
}

/**
 * 3. Fiche globale de la Focalisation (Points de vue narratifs)
 */
export function buildFocalisationCatalogCourseResult(originalQuery: string): CourseSearchResult {
  const directContent = `**La Focalisation (Point de vue narratif) au Baccalauréat :**\n\n` +
    `La **focalisation**, encore appelée **point de vue narratif**, c’est l’angle sous lequel le narrateur raconte une histoire et filtre les informations transmises au lecteur. On distingue ainsi 3 types fondamentaux :\n\n` +
    FOCALISATIONS_DATABASE.map((f, idx) =>
      `### ${idx + 1}. ${f.name}\n` +
      `• **Principe narratif :** ${f.perspective}\n` +
      `• **Définition :** ${f.definition}\n` +
      `• **Extrait officiel d'application :**\n` +
      `  > « ${f.authorQuote} »\n` +
      `  — *${f.authorWork}*\n` +
      `• **Analyse du texte :** ${f.analysis}`
    ).join('\n\n---\n\n') +
    `\n\n**Synthèse des équations narratives :**\n` +
    `1. **Focalisation Zéro :** Narrateur > Personnage (Omniscience totale : passé, pensées, avenir).\n` +
    `2. **Focalisation Externe :** Narrateur < Personnage (Observation neutre caméra : extérieur pur, gestes, apparence).\n` +
    `3. **Focalisation Interne :** Narrateur = Personnage (Subjectivité d'une conscience : perception, sentiments intimes).`;

  const concepts: CourseConceptFormula[] = FOCALISATIONS_DATABASE.map(f => ({
    name: f.name,
    formulaOrRule: f.perspective,
    explanation: f.definition,
    contextOrApplication: `Exemple canonique : ${f.authorWork} | ${f.analysis}`
  }));

  const method: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: "Identifier qui voit et qui sait dans l'extrait",
      whatToDo: "Distinguer le narrateur (celui qui raconte) du personnage (celui qui perçoit l'action).",
      reflexOrTip: "Se poser la question : le narrateur sait-il des choses que le personnage ne peut pas savoir ?"
    },
    {
      stepNumber: 2,
      title: "Analyser le degré d'accès à la vie intérieure",
      whatToDo: "Si le narrateur sonde les pensées de tous les personnages = Zéro ; si le narrateur ne sonde que la pensée d'un seul individu = Interne ; si le narrateur ne décrit que des gestes et apparences sans sonder aucune pensée = Externe.",
      reflexOrTip: "Attention aux variations de focalisation au sein d'un même chapitre."
    },
    {
      stepNumber: 3,
      title: "Interpréter l'effet de lecture produit",
      whatToDo: "La focalisation externe crée le mystère et l'objectivité ; la focalisation interne crée l'empathie et l'identification ; la focalisation zéro offre une vision surplombante du monde social.",
      reflexOrTip: "Relier le point de vue au projet d'écriture de l'auteur (réalisme balzacien vs flaubertien)."
    }
  ];

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Stylistique (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale Baccalauréat',
    chapterTitle: 'La Focalisation (Points de Vue Narratifs) : Zéro, Externe & Interne (Balzac, Flaubert)',
    directContent,
    definitionAndScope: "La focalisation détermine le point de vue par lequel les événements sont présentés au lecteur dans un récit de fiction. Elle règle la quantité et la nature des informations délivrées par le narrateur.",
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: method,
    solvedExample: {
      problemStatement: "Déterminer la focalisation du début de Bouvard et Pécuchet de Gustave Flaubert.",
      solutionStepByStep: "1. Extrait : « L'un venait de la Bastille, l'autre du Jardin des Plantes... Le plus grand vêtu de toile... Le plus petit dont le corps disparaissait... »\n2. Observation : Le narrateur ne nomme pas les personnages au départ, il ignore leurs pensées et leurs noms, ne décrivant que leur silhouette et leur habillement.\n3. Conclusion : Il s'agit d'une focalisation externe où le narrateur agit en témoin oculaire neutre.",
      finalAnswer: "Focalisation externe laissant une grande part à la curiosité et à l'imagination du lecteur."
    },
    classicExamTraps: [
      "Ne pas confondre l'auteur (personne réelle), le narrateur (voix qui raconte) et le personnage (acteur de l'histoire).",
      "Ne pas croire qu'un récit à la 1ère personne est obligatoirement en focalisation interne : un narrateur peut raconter avec recul rétrospectif ce qu'il a appris plus tard (omniscience rétrospective)."
    ],
    selfCheckChecklist: [
      "Ai-je vérifié le degré d'accès aux pensées des personnages ?",
      "Ai-je cité les indices de perception (verbes de regard, sentiments ou simple description matérielle) ?",
      "L'effet produit sur le lecteur est-il analysé ?"
    ],
    quickRevisionMemo: "Focalisation Zéro = narrateur omniscient (Balzac). Focalisation Externe = caméra neutre sans pensées (Flaubert, Bouvard). Focalisation Interne = regard subjectif d'un personnage (Flaubert, Frédéric Moreau).",
    certificationNote: "Conforme aux cours officiels du Guide de Révision Chapitre 4 (p. 23-24)."
  };
}

/**
 * 4. Fiche d'une Focalisation isolée
 */
export function buildSingleFocalisationCourseResult(item: FocalisationItem, originalQuery: string): CourseSearchResult {
  const directContent = `**${item.name} (Analyse Narrative) :**\n\n` +
    `• **Principe :** ${item.perspective}\n` +
    `• **Définition :** ${item.definition}\n\n` +
    `**Extrait d'illustration officiel :**\n` +
    `> « ${item.authorQuote} »\n` +
    `— *${item.authorWork}*\n\n` +
    `• **Explication littéraire :** ${item.analysis}`;

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Narratologie (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale',
    chapterTitle: `${item.name} : Définition, Extrait d'Application et Analyse`,
    directContent,
    definitionAndScope: item.definition,
    coreConceptsAndFormulas: [
      {
        name: item.name,
        formulaOrRule: item.perspective,
        explanation: item.definition,
        contextOrApplication: `Illustration : ${item.authorWork}`
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Examiner la source de l'information",
        whatToDo: `Vérifier si les informations données correspondent à la formule : ${item.perspective}.`,
        reflexOrTip: "Observer si le narrateur pénètre ou non l'esprit des personnages."
      },
      {
        stepNumber: 2,
        title: "Commenter l'effet littéraire",
        whatToDo: `Démontrer ce que ce point de vue apporte au récit : ${item.analysis}.`,
        reflexOrTip: "Citer des détails précis de l'extrait."
      }
    ],
    solvedExample: {
      problemStatement: `Comment justifier la ${item.name.toLowerCase()} dans un texte de bac ?`,
      solutionStepByStep: `1. Relever les verbes d'observation ou de pensée.\n2. Montrer la correspondance avec l'équation narrative.\n3. Conclure sur le choix de l'auteur.`,
      finalAnswer: `L'analyse textuelle démontre l'emploi de la ${item.name.toLowerCase()}.`
    },
    classicExamTraps: [
      "Vérifier si la focalisation reste constante ou si le narrateur passe d'une focalisation à une autre."
    ],
    selfCheckChecklist: [
      "Le point de vue est-il justifié par le texte ?",
      "L'exemple canonique est-il maîtrisé ?"
    ],
    quickRevisionMemo: `${item.name} : ${item.perspective}. ${item.definition}`,
    certificationNote: "Conforme au Guide de Révision Chapitre 4."
  };
}

/**
 * 5. Fiche des Connecteurs Logiques (Tableau exhaustif Chapitre 4)
 */
export function buildConnecteursCatalogCourseResult(originalQuery: string, categoryFilter?: ConnecteurCategory | null): CourseSearchResult {
  const categoriesToShow = categoryFilter ? [categoryFilter] : CONNECTEURS_LOGIQUES_DATABASE;

  const directContent = `**Tableau des Connecteurs Logiques (Français & Dissertation Bac) :**\n\n` +
    `Les connecteurs logiques sont les outils grammaticaux indispensables pour structurer la pensée, articuler les arguments et assurer la fluidité démonstrative en dissertation et commentaire composé :\n\n` +
    categoriesToShow.map(cat =>
      `### • ${cat.categoryLabel}\n` +
      `  - *Rôle / Fonction :* ${cat.roleEtFonction}\n` +
      `  - *Connecteurs à employer :* ${cat.listeConnecteurs.map(c => `« ${c} »`).join(', ')}.`
    ).join('\n\n') +
    `\n\n**Règle d'or de la dissertation :** Ne commencez jamais un paragraphe sans connecteur logique. Variez les formules d'un axe à l'autre pour éviter toute redondance (ex: alterner « En premier lieu », « D'emblée », « Aussi », « Par ailleurs »).`;

  const concepts: CourseConceptFormula[] = categoriesToShow.map(cat => ({
    name: cat.categoryLabel,
    formulaOrRule: cat.roleEtFonction,
    explanation: `Connecteurs clés : ${cat.listeConnecteurs.slice(0, 5).join(', ')}...`,
    contextOrApplication: "Emploi impératif en dissertation et commentaire composé."
  }));

  const method: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: "Choisir le connecteur adapté au lien logique exact",
      whatToDo: "Distinguer soigneusement la cause (parce que, car), la conséquence (ainsi, par conséquent), l'opposition (toutefois, néanmoins) et l'addition (en outre, de surcroît).",
      reflexOrTip: "Ne jamais utiliser un connecteur d'opposition pour une simple addition d'arguments."
    },
    {
      stepNumber: 2,
      title: "Varier les formules stylistiques",
      whatToDo: "Remplacer les répétitions de « mais » par « toutefois », « cependant » ou « il n'en demeure pas moins que ».",
      reflexOrTip: "Les connecteurs de transition sont particulièrement valorisés au changement d'axe."
    },
    {
      stepNumber: 3,
      title: "Appuyer les citations d'auteurs",
      whatToDo: "Utiliser la batterie des connecteurs d'appui : « C'est à juste titre que... affirme », « C'est dans cette optique que... »",
      reflexOrTip: "Insérer le nom de l'auteur et le titre de l'œuvre dans la formule d'appui."
    }
  ];

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Langue (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale Baccalauréat',
    chapterTitle: categoryFilter ? `${categoryFilter.categoryLabel} : Répertoire et Usages en Dissertation` : 'Tableau Intégral des Connecteurs Logiques pour la Dissertation Littéraire',
    directContent,
    definitionAndScope: "Les connecteurs logiques (ou mots de liaison) matérialisent les articulations de la pensée dans un texte argumentatif. Ils explicitent les relations de cause, conséquence, but, opposition, transition et conclusion.",
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: method,
    solvedExample: {
      problemStatement: "Comment articuler une transition entre la thèse (utilité sociale du roman) et l'antithèse (recherche esthétique pure) ?",
      solutionStepByStep: "1. Formule de synthèse de l'axe 1 : « De ce qui précède, nous pouvons retenir que le roman constitue une arme de combat politique efficace. »\n2. Connecteur d'opposition et de relance : « Toutefois, une œuvre littéraire peut-elle se réduire à un simple manifeste engagé ? Ne tire-t-elle pas également sa valeur de sa perfection formelle ? »\n3. Lancement de l'axe 2 : « Il apparaît dès lors indispensable d'examiner la dimension proprement esthétique de la création romanesque. »",
      finalAnswer: "La transition combine connecteur de synthèse et connecteur d'opposition pour relancer le problème avec élégance."
    },
    classicExamTraps: [
      "Accumuler les connecteurs de manière artificielle sans réelle progression de pensée.",
      "Oublier les virgules après les adverbes de liaison en début de phrase (« En effet, », « Par ailleurs, », « En définitive, »)."
    ],
    selfCheckChecklist: [
      "Chaque paragraphe commence-t-il par un connecteur logique adapté ?",
      "Les transitions entre les grandes parties sont-elles soignées ?",
      "Le répertoire de connecteurs est-il varié et précis ?"
    ],
    quickRevisionMemo: "11 Catégories : But (afin de), Cause (parce que), Conséquence (ainsi, dès lors), Opposition (toutefois, en revanche), Synthèse/Transition (de ce qui précède), Explication (en effet, c'est-à-dire), Énumération (d'abord, ensuite), Illustration (c'est le cas de), Appui (c'est à juste titre que), Conclusion (en définitive), Addition (de surcroît).",
    certificationNote: "Conforme au Guide de Révision Chapitre 4 (p. 24-25)."
  };
}

/**
 * 6. Fiche globale de la Sémantique (26 notions officielles)
 */
export function buildSemantiqueCatalogCourseResult(originalQuery: string): CourseSearchResult {
  const directContent = `**Sémantique – Sens et Relations (Chapitre 4 officiel du Bac) :**\n\n` +
    `Répertoire exhaustif des 26 notions de sémantique et de relations lexicales fondamentales au programme de Français :\n\n` +
    SEMANTIQUE_DATABASE.map((s, idx) =>
      `• **${idx + 1}. ${s.name}**\n` +
      `  - *Définition :* ${s.definition}\n` +
      `  - *Exemple canonique :* « ${s.exemple} »`
    ).join('\n\n') +
    `\n\n**Rappel pour les épreuves de Français :** La maîtrise de la dénotation, de la connotation et des champs lexicaux est la clé d'un commentaire composé réussi et d'une étude textuelle précise.`;

  const concepts: CourseConceptFormula[] = SEMANTIQUE_DATABASE.slice(0, 15).map(s => ({
    name: s.name,
    formulaOrRule: s.definition,
    explanation: `Exemple : ${s.exemple}`,
    contextOrApplication: "Analyse sémantique et lexicale au Bac."
  }));

  const method: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: "Repérer la nature de la relation de sens",
      whatToDo: "Distinguer si la question porte sur le sens interne d'un mot (polysémie, sens propre/figuré), sur une association thématique (champ lexical) ou sur une opposition binaire (antonymie).",
      reflexOrTip: "Prendre toujours appui sur le contexte d'énonciation de la phrase."
    },
    {
      stepNumber: 2,
      title: "Distinguer Dénotation et Connotation",
      whatToDo: "Dénotation = définition neutre du dictionnaire ; Connotation = résonance affective, symbolique ou culturelle transmise par le mot dans le texte.",
      reflexOrTip: "Analyser toujours la connotation pour dégager la tonalité du passage."
    }
  ];

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Sémantique (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale Baccalauréat',
    chapterTitle: 'Sémantique – Sens et Relations : Les 26 Notions Officielles du Programme',
    directContent,
    definitionAndScope: "La sémantique est la branche de la linguistique qui étudie le sens des mots, leurs relations mutuelles et leurs évolutions contextuelles dans le texte littéraire.",
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: method,
    solvedExample: {
      problemStatement: "Analyser la dénotation et les connotations du mot « nuit » dans un poème romantique.",
      solutionStepByStep: "1. Dénotation : Période obscure comprise entre le coucher et le lever du soleil.\n2. Connotations : Mélancolie, mystère, angoisse existentielle, solitude, propice à la confidence amoureuse ou au recueillement mystique.\n3. Conclusion : Le mot « nuit » dépasse sa valeur descriptive pour devenir le symbole de l'âme tourmentée du poète.",
      finalAnswer: "La connotation transforme la réalité nocturne en espace spirituel subjectif."
    },
    classicExamTraps: [
      "Ne pas confondre Champ Lexical (mots de différentes natures renvoyant à un même thème) et Champ Sémantique (toutes les significations d'un même mot).",
      "Ne pas confondre Paronymes (mots de forme voisine mais de sens différents : conjoncture / conjecture) et Homonymes (mots de son identique : mer / mère / maire)."
    ],
    selfCheckChecklist: [
      "La définition académique est-elle scrupuleusement respectée ?",
      "L'exemple canonique est-il pertinent et clair ?"
    ],
    quickRevisionMemo: "Sémantique clé : Polysémie (plusieurs sens), Champ lexical (mots d'un même thème), Dénotation (sens dictionnaire), Connotation (valeur subjective/affective), Paronyme (formes voisines : conjecture/conjoncture).",
    certificationNote: "Conforme au Guide de Révision Chapitre 4 (p. 25)."
  };
}

/**
 * 7. Fiche d'une notion de Sémantique isolée
 */
export function buildSingleSemantiqueCourseResult(item: SemantiqueNotion, originalQuery: string): CourseSearchResult {
  const directContent = `**${item.name} (Sémantique & Langue) :**\n\n` +
    `• **Définition académique :** ${item.definition}\n` +
    `• **Exemple canonique du programme :** ${item.exemple}\n\n` +
    `**Conseil pour le Baccalauréat :** Définissez toujours la notion avant d'en relever les occurrences dans le texte soumis à l'évaluation.`;

  return {
    query: originalQuery,
    discipline: 'francais',
    disciplineLabel: 'Français & Sémantique (Chapitre 4)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Première & Terminale',
    chapterTitle: `${item.name} : Définition, Règles et Exemples`,
    directContent,
    definitionAndScope: item.definition,
    coreConceptsAndFormulas: [
      {
        name: item.name,
        formulaOrRule: item.definition,
        explanation: `Illustration canonique : ${item.exemple}`,
        contextOrApplication: "Programme officiel de Français au Baccalauréat."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Appliquer la définition au texte",
        whatToDo: `Vérifier que l'élément textuel répond exactement à la définition : ${item.definition}.`,
        reflexOrTip: "Citer fidèlement le mot ou l'expression étudiée."
      },
      {
        stepNumber: 2,
        title: "Dégager l'effet de sens",
        whatToDo: `Expliquer ce que ce choix sémantique révèle sur l'intention de l'auteur.`,
        reflexOrTip: "Relier la sémantique à l'atmosphère globale de l'extrait."
      }
    ],
    solvedExample: {
      problemStatement: `Comment expliquer la notion de ${item.name.toLowerCase()} ?`,
      solutionStepByStep: `1. Rappeler la définition : ${item.definition}\n2. Donner l'exemple : ${item.exemple}\n3. Analyser la nuance contextuelle.`,
      finalAnswer: `La notion de ${item.name.toLowerCase()} est clairement établie et illustrée.`
    },
    classicExamTraps: [
      "Veiller à ne pas confondre avec des notions sémantiques voisines."
    ],
    selfCheckChecklist: [
      "La définition est-elle exacte ?",
      "L'exemple est-il conforme au programme ?"
    ],
    quickRevisionMemo: `${item.name} : ${item.definition} Exemple : ${item.exemple}`,
    certificationNote: "Conforme au Guide de Révision Chapitre 4."
  };
}
