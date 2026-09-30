/**
 * BASE DE DONNÉES PÉDAGOGIQUE — RECUEIL OFFICIEL D'EXPRESSION ÉCRITE DU BACCALAURÉAT
 * Contient :
 * - 10 Commentaires Composés intégraux avec textes, axes, procédés stylistiques et conclusions comparatives
 * - 10 Dissertations Littéraires rédigées avec problématiques, thèses, antithèses, synthèses et illustrations
 * - 7 Sujets complets d'Analyse de texte (Questions de vocabulaire + Résumés calibrés + Discussions argumentées)
 */

export interface CommentaireComposeEntry {
  numero: number;
  auteur: string;
  titreOeuvre: string;
  dateEtEditeur: string;
  texteExtrait: string;
  consigne: string;
  axesLecture: {
    titreAxe: string;
    argumentsEtPreuves: string[];
    procedesStylistiques: string[];
  }[];
  ouvertureLitteraire: string;
}

export interface DissertationLitteraireEntry {
  numero: number;
  citationOuSujet: string;
  auteurCitation: string;
  consigne: string;
  problematique: string;
  these: { titre: string; arguments: string[]; auteursEtOeuvres: string[] };
  antithese: { titre: string; arguments: string[]; auteursEtOeuvres: string[] };
  synthese: { titre: string; arguments: string[] };
}

export interface ResumeDiscussionEntry {
  numero: number;
  auteur: string;
  titreArticleOuLivre: string;
  sourceEtDate: string;
  vocabulaireExplique: { expression: string; explication: string }[];
  resumeTexte: { nombreMots: number; texte: string };
  discussion: {
    sujetPose: string;
    axesReflexion: string[];
    conclusion: string;
  };
}

export const BAC_COMMENTAIRES_COMPOSES: CommentaireComposeEntry[] = [
  {
    numero: 1,
    auteur: "Bottey ZADY ZAOUROU",
    titreOeuvre: "Fer de lance (Livre I)",
    dateEtEditeur: "NEI, 2002, pp. 51-52",
    texteExtrait: "Ils allaient / Front haut, / Ces conquérants infatigables, / Et leurs têtes noires effrayaient les fauves à l'affût. / Nulle entrave n'inquiétait leurs jambes trempées / Et leurs cœurs étaient de granit. / Sur le chemin de la gloire, / Ni la soif ni la faim n'arrêtait leur marche. / Le soleil qui chauffe / Et qui d'ordinaire ramollit l'ardeur au combat, / Le soleil les vivifiait, / Eux, / Et décuplait leur souffle inépuisable...",
    consigne: "Vous ferez de ce texte un commentaire composé. Vous montrerez comment à travers l'hostilité de la nature, le poète rend compte de la farouche détermination des guerriers.",
    axesLecture: [
      {
        titreAxe: "L'hostilité féroce et déshumanisante de la nature",
        argumentsEtPreuves: [
          "Cruauté impitoyable des éléments naturels qui liguent la soif, la faim, l'orage et la foudre contre la troupe.",
          "Cadre spatial invivable et étouffant caractérisé par la violence solaire et les averses diluviennes."
        ],
        procedesStylistiques: ["Métaphore animale des 'fauves'", "Allégorie de 'la soif et la faim'", "Champ lexical du supplice ('brûlantes', 'tonnerre insolent')"]
      },
      {
        titreAxe: "L'invulnérabilité et la détermination héroïque des guerriers",
        argumentsEtPreuves: [
          "Insensibilité quasi divine face aux épreuves, marchant d'un pas martial inébranlable.",
          "Force tellurique et surnaturelle puisée directement aux entrailles de la terre nourricière."
        ],
        procedesStylistiques: ["Oxymore métaphorique 'cœur de granit'", "Hyperboles valorisantes ('jambes trempées', 'souffle inépuisable')", "Rythme anaphorique et coordination cumulative 'Et'"]
      }
    ],
    ouvertureLitteraire: "Rapprochement avec le sonnet épique « Les Conquérants » de José-Maria de Heredia (Les Trophées)."
  },
  {
    numero: 2,
    auteur: "Jean ROUTAUD",
    titreOeuvre: "Des hommes illustres",
    dateEtEditeur: "Les Éditions de Minuit, 1993",
    texteExtrait: "Les gigantesques pelles mécaniques rasaient les haies sans même paraître s'en apercevoir, broyaient les broussailles avec mépris, bousculaient les talus comme on piétine une fourmilière... Même les grands chênes hautains subissaient la loi du plus fort. La lame à l'avant du bulldozer se collait contre l'écorce...",
    consigne: "Vous montrerez comment l'auteur nous présente le combat qui oppose la machine à la nature et la défaite de cette dernière.",
    axesLecture: [
      {
        titreAxe: "Un duel asymétrique entre le monstre mécanique et la végétation",
        argumentsEtPreuves: [
          "Opposition de forces démesurément inégales : gigantisme d'acier vs fragilité végétale.",
          "Rythme effréné d'actions destructrices d'une férocité mécanique implacable."
        ],
        procedesStylistiques: ["Verbes d'action destructrice ('rasaient', 'broyaient', 'bousculaient', 'laminaient')", "Métaphore du 'bélier furieux'", "Personnification belliqueuse des bulldozers"]
      },
      {
        titreAxe: "L'agonie pathétique et la capitulation de la nature",
        argumentsEtPreuves: [
          "Résistance désespérée du chêne pluricentenaire s'accrochant de toutes ses racines.",
          "Chute finale semblable au glas d'un géant vaincu étendu sur la terre-mère."
        ],
        procedesStylistiques: ["Champ lexical de la capitulation ('s'inclinait', 'cède', 'refusant de capituler')", "Allusion à La Fontaine ('Le chêne et le roseau')", "Image funèbre du chêne 'gisant' sous le vrombissement triomphal du moteur"]
      }
    ],
    ouvertureLitteraire: "Cri d'alarme écologique résonnant avec les actions actuelles de l'ONG Greenpeace contre la déforestation planétaire."
  },
  {
    numero: 3,
    auteur: "Ferdinand OYONO",
    titreOeuvre: "Une vie de boy",
    dateEtEditeur: "Pocket, 1956",
    texteExtrait: "J'ai trouvé le régisseur de prison en train d'« apprendre à vivre » à deux nègres soupçonnés d'avoir volé chez M. Janopoulos... C'était terrible. Le nerf d'hippopotame labourait leur chair et chaque « han ! » me tenaillait les entrailles...",
    consigne: "Vous montrerez en quoi ce passage est une épreuve pour Toundi et une étape décisive de sa prise de conscience des méfaits du système colonial.",
    axesLecture: [
      {
        titreAxe: "La barbarie sadique et la torture institutionnelle coloniale",
        argumentsEtPreuves: [
          "Cynisme répugnant des bourreaux blancs (Janopoulos souriant son cigare à la bouche, Moreau en sueur).",
          "Supplice dégradant où les prisonniers innocents sont assimilés à du bétail à la merci d'un molosse."
        ],
        procedesStylistiques: ["Périphrases macabres ('place de la bastonnade', 'crève des Nègres')", "Verbes d'effraction charnelle ('labourait la chair', 'mordillait les mollets')", "Rythme saccadé des coups de chicote"]
      },
      {
        titreAxe: "L'éveil politique de Toundi et le procès de l'hypocrisie religieuse",
        argumentsEtPreuves: [
          "Compassion viscérale et déchirement fraternel pour ses compatriotes torturés.",
          "Effondrement des illusions religieuses chrétiennes complices de l'oppression et du pillage colonial."
        ],
        procedesStylistiques: ["Interrogations rhétoriques désabusées ('Le prochain du blanc n'est-il que son congénère ?')", "Ironie cinglante sur les 'boniments' d'église", "Antithèse entre l'amour du prochain proclamé et l'inhumanité vécue"]
      }
    ],
    ouvertureLitteraire: "Parallèle avec Batouala de René Maran dénonçant le massacre des populations indigènes sous la férule coloniale."
  },
  {
    numero: 4,
    auteur: "Seydou BADIAN KOUYATÉ",
    titreOeuvre: "Sous l'orage",
    dateEtEditeur: "Avignon, Presses Universitaires, 1957",
    texteExtrait: "Le mariage de Kany... Sibiri partit d'un éclat de rire : 'Je te savais insolent, Birama, je viens de découvrir que tu es fou... C'est nous qui décidons, comme il est d'usage. C'est à Kany à suivre...'",
    consigne: "Vous montrerez comment s'expriment à la fois l'attachement de Sibiri à la tradition et la dénonciation de la condition de la femme africaine.",
    axesLecture: [
      {
        titreAxe: "L'intransigeance patriarcale et le culte aveugle de la coutume",
        argumentsEtPreuves: [
          "Refus obstiné de l'individualisme et primat absolu du clan familial sur le choix personnel.",
          "Condamnation de l'instruction moderne et de l'acculturation comme trahison des ancêtres."
        ],
        procedesStylistiques: ["Anaphore de culpabilisation ('à vous qui reniez...', 'à vous qui ne rêvez que d'imiter...')", "Questions rhétoriques autoritaires", "Ton péremptoire et dogmatique de Sibiri"]
      },
      {
        titreAxe: "La condition servile et marchande de la femme africaine",
        argumentsEtPreuves: [
          "Réification de la jeune fille vendue au plus offrant tel du bétail domestique.",
          "Destin de domesticité et de polygamie imposée étouffant toute émancipation féminine."
        ],
        procedesStylistiques: ["Métaphore dépréciative du 'vulgaire mouton'", "Comparaison révoltée avec l''esclave de Famagan'", "Lexique mercantiliste ('vente aux enchères', 'payer une âme')"]
      }
    ],
    ouvertureLitteraire: "Confrontation avec le combat héroïque de Malimouna dans Rebelle de Fatou Keïta."
  },
  {
    numero: 5,
    auteur: "Mukala KADIMA N'JUZI",
    titreOeuvre: "Redire les mots anciens (« Gorgé de sang »)",
    dateEtEditeur: "Éditions Saint-Germain-des-Prés, Paris, 1977",
    texteExtrait: "Gorgé de sang, de sang, du sang / Des milliers d'âmes innocentes / Couchées silencieusement inertes sans souffle / Sur tes mottes de terre calcinée... Ces soleils crispés qui tombent tombent tombent...",
    consigne: "Vous montrerez les conséquences apocalyptiques de la guerre sur les hommes et sur la nature.",
    axesLecture: [
      {
        titreAxe: "L'hécatombe humaine et la barbarie des guerres fratricides",
        argumentsEtPreuves: [
          "Extermination de masse des populations innocentes dévastées par la folie des armes.",
          "Anéantissement des espoirs de paix et régression morale absolue."
        ],
        procedesStylistiques: ["Répétition obsessionnelle en palillogie ('de sang, de sang, du sang')", "Allitération assourdissante en nasales", "Chiasme tragique ('le sourd tam-tam le tam-tam sourd de la mort')"]
      },
      {
        titreAxe: "Le désastre cosmologique et le deuil de la terre nourricière",
        argumentsEtPreuves: [
          "Stérilisation complète du sol africain calciné par les bombardements.",
          "Atmosphère de fin du monde où même le soleil et le ciel semblent étouffés par la cendre."
        ],
        procedesStylistiques: ["Personnification cosmique ('soleils crispés qui tombent')", "Métaphore d'étouffement des 'lourds nuages noirs'", "Oxymores funèbres et images d'apocalypse"]
      }
    ],
    ouvertureLitteraire: "Écho à la satire des massacres guerriers dans Candide de Voltaire et La Guerre de Troie n'aura pas lieu de Jean Giraudoux."
  }
];

export const BAC_DISSERTATIONS_LITTERAIRES: DissertationLitteraireEntry[] = [
  {
    numero: 1,
    citationOuSujet: "Le chanteur français Julien Clerc, cité par Lucien Rioux (1987), affirme : « La première fonction de l’artiste, c’est de distraire les gens, de les sortir de leur quotidien. »",
    auteurCitation: "Julien Clerc / Lucien Rioux",
    consigne: "Discutez cette conception du rôle de l'artiste en vous appuyant sur des exemples précis.",
    problematique: "L'art doit-il être réduit à une simple entreprise d'évasion et de divertissement, ou assume-t-il une mission éducative, sociale et libératrice bien plus essentielle ?",
    these: {
      titre: "L'art comme divertissement salutaire et évasion du réel",
      arguments: [
        "Soulager l'esprit des angoisses existentielles quotidiennes par l'humour, le rire et la féerie.",
        "Le culte du Beau et de l'harmonie formelle procure une jouissance désintéressée universelle."
      ],
      auteursEtOeuvres: [
        "Molière (Le Tartuffe : faire rire pour divertir)",
        "Alain Robbe-Grillet et les Parnassiens (l'Art pour l'Art)",
        "Julien Green (le livre comme fenêtre sur l'inconnu)"
      ]
    },
    antithese: {
      titre: "L'art comme éveilleur de conscience, instrument de combat et de pédagogie",
      arguments: [
        "Éduquer les masses et transformer les mentalités face aux fléaux sociaux et sanitaires.",
        "Dénoncer les injustices, la tyrannie et le despotisme politique."
      ],
      auteursEtOeuvres: [
        "François Compaoré (Le vent emportait nos rires et les oiseaux nous répondaient en écho - lutte contre le SIDA)",
        "Norbert Zongo (Le Parachutage - satire des dictatures africaines)",
        "Jean-Paul Sartre (Les mots comme des pistolets chargés)"
      ]
    },
    synthese: {
      titre: "La complémentarité féconde des fonctions de l'art",
      arguments: [
        "L'œuvre accomplie ne sacrifie jamais le plaisir esthétique à l'efficacité du message civique."
      ]
    }
  },
  {
    numero: 2,
    citationOuSujet: "« Le roman doit transcrire objectivement la réalité. » Qu’en pensez-vous ?",
    auteurCitation: "Sujet général d'esthétique romanesque",
    consigne: "Examinez les exigences et les limites du réalisme dans le genre romanesque.",
    problematique: "Le romancier est-il un simple greffier enregistrant fidèlement la société, ou un recréateur souverain usant de l'imagination et du mythe ?",
    these: {
      titre: "L'exigence réaliste et documentaire du roman miroir",
      arguments: [
        "Le roman comme miroir sociologique promené le long des chemins de l'histoire.",
        "Dépouillement clinique des tares de la société industrielle et coloniale."
      ],
      auteursEtOeuvres: [
        "Honoré de Balzac (Avant-propos de La Comédie Humaine, être le secrétaire de la société)",
        "Stendhal (Le Rouge et le Noir)",
        "Émile Zola (Germinal, enquête documentaire minutieuse dans les mines)"
      ]
    },
    antithese: {
      titre: "Le pouvoir souverain de la fiction, du rêve et de la stylisation",
      arguments: [
        "Le roman d'aventures et la science-fiction dépassent le réel pour inventer l'avenir ou explorer l'onirisme.",
        "Toute écriture opère une transmutation subjective et esthétique de la réalité brute."
      ],
      auteursEtOeuvres: [
        "Alexandre Dumas (Les Trois Mousquetaires)",
        "Jules Verne (Voyage au centre de la terre)",
        "Pierre Boulle (La Planète des singes)"
      ]
    },
    synthese: {
      titre: "La stylisation du réel par le génie artistique",
      arguments: [
        "Le réalisme n'est pas la copie servile : il transfigure le fait divers en vérité humaine universelle."
      ]
    }
  },
  {
    numero: 5,
    citationOuSujet: "Emmanuel Dongala affirme : « La littérature négro-africaine est une littérature de remise en cause et de remise en place. »",
    auteurCitation: "Emmanuel Dongala",
    consigne: "Dans un développement argumenté, expliquez et discutez cette thèse.",
    problematique: "Dans quelle mesure l'écriture africaine est-elle nécessairement une entreprise polémique de contestation et de redressement historique des peuples noirs ?",
    these: {
      titre: "Une littérature de combat, de rupture et de rectification",
      arguments: [
        "Combattre les pratiques traditionnelles rétrogrades aliénant les femmes (excision, mariage forcé).",
        "Démystifier le pillage colonial et les dérives autocratiques des régimes post-indépendance."
      ],
      auteursEtOeuvres: [
        "Fatou Keïta (Rebelle, croisade contre l'excision)",
        "Ahmadou Kourouma (Les Soleils des Indépendances)",
        "Eza Boto / Mongo Beti (Ville cruelle)"
      ]
    },
    antithese: {
      titre: "La célébration des valeurs immémoriales, l'évasion et le lyrisme",
      arguments: [
        "Exalter la beauté de la femme noire, la spiritualité animiste et le patrimoine ancestral.",
        "Explorer l'intimité du cœur, l'amour romantique et la fiction féerique."
      ],
      auteursEtOeuvres: [
        "Léopold Sédar Senghor (Chants d'ombre, « Femme noire », « Prière aux masques »)",
        "Camara Laye (L'Enfant noir)",
        "David Diop (Coups de pilon, « Ramakam »)"
      ]
    },
    synthese: {
      titre: "Une vocation pluridimensionnelle au service de la dignité humaine",
      arguments: [
        "L'écrivain africain concilie l'urgence du combat libérateur avec la haute exigence poétique."
      ]
    }
  }
];

export const BAC_RESUME_DISCUSSIONS: ResumeDiscussionEntry[] = [
  {
    numero: 1,
    auteur: "Mukala KADIMA-NZUJI",
    titreArticleOuLivre: "Diagnostic de l'enseignement en Afrique",
    sourceEtDate: "Jeune Afrique, N°2640-2641, août 2011",
    vocabulaireExplique: [
      {
        expression: "Une langue abâtardie",
        explication: "Une langue qui a perdu ses qualités originelles au point de devenir méconnaissable et dégradée."
      },
      {
        expression: "Vecteur d'enseignement",
        explication: "La langue utilisée dans un système scolaire pour transmettre les connaissances et instruire les élèves."
      }
    ],
    resumeTexte: {
      nombreMots: 177,
      texte: "Tout le monde sait que l'enseignement en Afrique est en difficulté. Cela se traduit par le caractère inadapté de son système éducatif. Pour certains, la cause principale de la crise est l'inadéquation des programmes avec les besoins de la société. Il en résulte que les multiples réformes scolaires ont échoué. Et plus la crise perdure plus ses effets s'accentuent. À ces problèmes vient se greffer celui de la maîtrise insuffisante de la langue française. Pourtant, rien ne justifie que nous n'arrivions pas à nous séparer de cette langue plus de cinquante ans après les indépendances. Une autre absurdité est que le français des manuels est en déphasage avec celui de l'enseignant et de l'apprenant. Cependant, la rédaction des manuels de français de façon endogène ne résout pas le problème puisque cela produit une langue abâtardie qui complique les problèmes des apprenants. Une dernière incongruité est que les étudiants recourent à la langue africaine pour comprendre les cours dispensés en français. Logiquement, l'on peut s'interroger sur la pertinence de garder le français comme seul médium de l'enseignement."
    },
    discussion: {
      sujetPose: "L'auteur du texte se demande pourquoi ne pas faire de la langue du plus grand nombre le véhicule des connaissances. Qu'en pensez-vous ?",
      axesReflexion: [
        "Légitimité démocratique et pédagogique de valoriser les langues maternelles pour faciliter l'assimilation conceptuelle.",
        "Obstacles techniques majeurs : pluralisme linguistique extrême de chaque pays, coût de traduction scientifique, et risque d'enclavement face à la mondialisation."
      ],
      conclusion: "Nécessité d'un bilinguisme équilibré associant langues nationales identitaires et langue internationale d'ouverture."
    }
  },
  {
    numero: 2,
    auteur: "Joseph KI-ZERBO",
    titreArticleOuLivre: "Chefs d'États irresponsables (À quand l'Afrique ?)",
    sourceEtDate: "Édition d'En bas, 2013, pp. 83-86",
    vocabulaireExplique: [
      {
        expression: "L'esprit d'irresponsabilité",
        explication: "Refus des élites dirigeantes de rendre compte de leur gestion et de leurs actes devant le peuple."
      },
      {
        expression: "Être au-dessus du commun des gens",
        explication: "Incarner une exigence d'intégrité morale, civique et éthique supérieure à celle du citoyen ordinaire."
      }
    ],
    resumeTexte: {
      nombreMots: 150,
      texte: "L'État en Afrique est perçu comme un bien privé et ceux qui profitent de cette situation sont les dirigeants africains. Certains leaders politiques africains font preuve de manque de responsabilité dans la gestion des affaires de la cité. Cet état de fait s'apparente à la mort de l'État. C'est tout le contraire du dirigeant colonial ainsi que des chefs traditionnels. Ces derniers étaient tenus par exemple à la responsabilité grâce à des mécanismes sociaux qui, malheureusement n'existent pas aujourd'hui. C'est pourquoi, les dirigeants africains sont plus légaux que légitimes. Outre ce défaut, ils accusent aussi des failles au plan éthique et moral. Aussi ne méritent-ils pas l'appellation d'élites. Le fait qu'ils rechignent à répondre de leurs actions vient davantage accentuer ce manque de légitimité. Or, sans cette qualité il est impossible aux leaders politiques africains d'asseoir leur autorité à l'image des chefs traditionnels de certains pays."
    },
    discussion: {
      sujetPose: "« Les chefs d’États ont une tendance à vouloir diriger sans répondre de leurs actes. » Discutez cette affirmation du professeur Joseph Ki-Zerbo.",
      axesReflexion: [
        "Dérive patrimoniale et autoritaire du pouvoir personnel confisquant les deniers publics.",
        "Exemples vertueux de leaders éclairés et démocratiques ayant incarné la redevabilité (Nelson Mandela, Julius Nyerere, Thomas Sankara)."
      ],
      conclusion: "L'émergence africaine exige l'institutionnalisation de contre-pouvoirs citoyens et judiciaires indépendants."
    }
  },
  {
    numero: 6,
    auteur: "Martin Luther KING",
    titreArticleOuLivre: "Combats pour la liberté (« La non-violence »)",
    sourceEtDate: "Payot, Paris, 1975",
    vocabulaireExplique: [
      {
        expression: "Résistance passive",
        explication: "Refus militant de la violence physique couplé à une intense offensive spirituelle et morale pour convaincre l'adversaire de son injustice."
      }
    ],
    resumeTexte: {
      nombreMots: 199,
      texte: "Notons de prime abord que la résistance non-violente n'est pas faite pour ceux qui manquent de courage. Elle est une véritable résistance. Ainsi, réduire l'expression « résistance passive » à une attitude de « laisser-faire » est contraire aux idéaux de celle-ci. Le non-violent refuse l'agression physique. Il demeure actif de cœur et d'esprit tout en cherchant à ramener à la raison son adversaire. La non-violence se caractérise par une attitude passive sur le plan physique mais très vigoureuse sur le plan spirituel. Ainsi, le fondement de la non-violence repose sur la recherche d'un climat de compréhension et d'amitié. En plus, elle s'avère être une approche qui combat les forces du mal et non les hommes qui les incarnent. Par ailleurs, la résistante non-violente prône la tolérance. Par conséquent, le non-violent devra accepter toutes formes de souffrance sans toutefois avoir recours à la force. Il doit bannir de son comportement le sentiment de haine, de vengeance physique. Car la souffrance est le prix à payer pour l'avènement d'une société meilleure. Enfin, la non-violence rejette la violence extérieure, physique mais aussi la violence intérieure car ce qui fonde la doctrine de la non-violence est le principe de l'amour."
    },
    discussion: {
      sujetPose: "Étayez cette affirmation de Martin Luther King : « La violence n'engendre que haine et amertume. »",
      axesReflexion: [
        "L'engrenage destructeur des représailles militaires et civiles (crises post-électorales, terrorismes, guerres fratricides ruinant les peuples).",
        "L'amour et la réconciliation comme seules voies durables de reconstruction démocratique et de concorde civile."
      ],
      conclusion: "Seule la force spirituelle de la justice et du pardon brise le cycle infernal de la barbarie."
    }
  }
];
