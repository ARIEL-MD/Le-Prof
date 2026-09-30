/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : FRANÇAIS TERMINALE & DISSERTATION LITTÉRAIRE
 * 
 * Source : Méthodologie officielle canonique de la Dissertation Littéraire (Baccalauréat Séries A, C, D)
 * RÈGLES FORMELLES ABSOLUES :
 * 1. Dans l'introduction de la dissertation littéraire, ON NE MET PAS LA CONSIGNE.
 * 2. Dans le problème (problématisation centrale), IL N'Y A JAMAIS LE MOT « OU » DEDANS.
 * 3. Repérage rigoureux des 9 vocations de l'œuvre littéraire.
 * 4. Structuration stricte des paragraphes du développement : Idée directrice + Explication + Exemple d'œuvre + Citation exacte + Analyse.
 * 5. Conclusion en 3 temps : Bilan + Prise de position personnelle argumentée + Ouverture.
 * 
 * Fichier 100% autonome : zéro dépendance IA, aucun appel réseau requis.
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  topics: string[] | readonly string[];
  formulas: string[] | readonly string[];
  methods: string[] | readonly string[];
};

export interface LiteraryVocation {
  vocation: string;
  definition: string;
  genresPrivilegies: string[];
  argumentsCles: string[];
  auteursEtOeuvres: { auteur: string; oeuvre: string; citation: string; analyse: string }[];
}

export const LITERARY_VOCATIONS: LiteraryVocation[] = [
  {
    vocation: "Vocation Lyrique",
    definition: "Exprime les sentiments intimes et les émotions personnelles de l'auteur (l'amour, la joie, la tristesse, le deuil, la nostalgie et la fuite du temps).",
    genresPrivilegies: ["Poésie", "Roman autobiographique / épistolaire", "Drame"],
    argumentsCles: [
      "La littérature est un espace privilégié pour confier ses sentiments intimes et exprimer sa sensibilité.",
      "Le poète partage sa propre souffrance pour toucher le cœur de tous les lecteurs.",
      "La poésie permet de surmonter la tristesse et de garder vivant le souvenir des moments précieux."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Alphonse de Lamartine",
        oeuvre: "Méditations poétiques (Le Lac)",
        citation: "Ô temps ! suspends ton vol, et vous, heures propices ! / Suspendez votre cours !",
        analyse: "Le poète supplie le temps de s'arrêter pour garder à jamais le souvenir d'un amour heureux."
      },
      {
        auteur: "Victor Hugo",
        oeuvre: "Les Contemplations (Demain, dès l'aube...)",
        citation: "Je marcherai les yeux fixés sur mes pensées, / Sans rien voir au dehors, sans entendre aucun bruit...",
        analyse: "Hugo transforme la douleur de la mort de sa fille en un poème simple et très émouvant sur le deuil."
      }
    ]
  },
  {
    vocation: "Vocation Émotive",
    definition: "Cherche à toucher le lecteur en plein cœur et à éveiller en lui des émotions intenses : la pitié, la tristesse, l'admiration ou l'inquiétude.",
    genresPrivilegies: ["Tragédie", "Mélodrame", "Roman réaliste / social", "Poésie pathétique"],
    argumentsCles: [
      "L'œuvre littéraire éveille la pitié et la solidarité en montrant les grandes épreuves de la vie humaine.",
      "Comme l'explique Aristote avec la catharsis, voir les malheurs des héros sur scène permet au spectateur de libérer ses propres peurs.",
      "L'émotion partagée rapproche l'auteur et le lecteur dans une même sensibilité humaine."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Aristote",
        oeuvre: "Poétique",
        citation: "La tragédie, par le moyen de la terreur et de la pitié, opère la purgation de telles émotions.",
        analyse: "Le spectacle des souffrances héroïques permet aux spectateurs d'apaiser leurs propres peurs intérieures."
      },
      {
        auteur: "Jean Racine",
        oeuvre: "Phèdre",
        citation: "Ce n'est plus une ardeur dans mes veines cachée : / C'est Vénus tout entière à sa proie attachée.",
        analyse: "Racine suscite la pitié du public face à une héroïne déchirée par une passion qu'elle ne peut pas contrôler."
      }
    ]
  },
  {
    vocation: "Vocation Morale",
    definition: "Corrige les défauts des hommes, encourage les bonnes actions et combat l'égoïsme en montrant le danger de la méchanceté et la valeur de la justice.",
    genresPrivilegies: ["Comédie de mœurs et de caractère", "Apologue / Fable", "Conte philosophique", "Roman d'apprentissage"],
    argumentsCles: [
      "La littérature a pour but d'éveiller les consciences et d'aider les hommes à mieux vivre ensemble.",
      "La célèbre devise « corriger les mœurs en riant » montre que la comédie utilise le rire pour corriger les mauvais comportements.",
      "L'écrivain met en garde le lecteur contre l'hypocrisie, la cupidité et l'orgueil."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Molière",
        oeuvre: "Tartuffe (Premier placet au Roi)",
        citation: "Le devoir de la comédie étant de corriger les hommes en les divertissant, j'ai cru que, dans l'emploi où je me trouvais, je n'avais rien de mieux à faire que d'attaquer par des peintures ridicules les vices de mon siècle.",
        analyse: "Molière affirme que la comédie doit amuser le public pour lui faire détester l'hypocrisie et les mauvais penchants."
      },
      {
        auteur: "Jean de La Fontaine",
        oeuvre: "Fables (Préface)",
        citation: "Les fables ne sont pas ce qu'elles semblent être ; / Le plus simple animal nous y tient lieu de maître.",
        analyse: "Les histoires d'animaux servent à donner des leçons claires de sagesse et de justice."
      }
    ]
  },
  {
    vocation: "Vocation Didactique",
    definition: "Transmet des connaissances utiles, fait réfléchir et combat l'ignorance et les préjugés.",
    genresPrivilegies: ["Essai", "Traité", "Roman à thèse", "Poésie didactique", "Théâtre engagé"],
    argumentsCles: [
      "L'écriture a pour mission d'instruire le lecteur et de développer son esprit critique.",
      "Les auteurs des Lumières utilisent les livres pour faire reculer l'ignorance grâce au raisonnement.",
      "Le théâtre éducatif pousse le spectateur à réfléchir activement aux problèmes de son époque."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Voltaire",
        oeuvre: "Candide ou l'Optimisme",
        citation: "Il faut cultiver notre jardin.",
        analyse: "Voltaire enseigne au lecteur qu'il ne faut pas attendre passivement, mais agir concrètement par le travail."
      },
      {
        auteur: "Denis Diderot",
        oeuvre: "L'Encyclopédie (Article 'Encyclopédie')",
        citation: "Le but d'une encyclopédie est de rassembler les connaissances éparses sur la surface de la terre [...] afin que nos neveux, devenant plus instruits, deviennent en même temps plus vertueux et plus heureux.",
        analyse: "Diderot montre que le partage du savoir est le meilleur moyen de rendre les êtres humains plus libres et plus heureux."
      }
    ]
  },
  {
    vocation: "Vocation Ludique",
    definition: "Procure un plaisir immédiat, amuse, divertit, fait rire ou sourire et libère des soucis quotidiens par le jeu des mots, les farces et les situations amusantes.",
    genresPrivilegies: ["Farce", "Comédie de situation / vaudeville", "Conte amusant", "Roman d'aventures comique"],
    argumentsCles: [
      "Le public va au spectacle ou ouvre un livre d'abord pour se détendre et s'amuser dans la bonne humeur.",
      "Le rire est le propre de l'homme : il permet de chasser la tristesse et de déstresser facilement.",
      "Les malentendus comiques et les farces théâtrales offrent un vrai moment de détente partagée."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Molière",
        oeuvre: "Les Fourberies de Scapin",
        citation: "Que diable allait-il faire dans cette galère ?",
        analyse: "Les ruses de Scapin font rire le public dans un pur esprit d'amusement et de détente théâtrale."
      },
      {
        auteur: "Hyacinthe Kacou",
        oeuvre: "On se chamaille pour un siège",
        citation: "Le jeu endiablé des prétendants autour du tabouret traditionnel suscite le rire franc du public.",
        analyse: "L'auteur ivoirien utilise des disputes amusantes pour faire rire immédiatement les spectateurs."
      },
      {
        auteur: "François Rabelais",
        oeuvre: "Gargantua (Aux lecteurs)",
        citation: "Mieux est de ris que de larmes écrire, / Pour ce que rire est le propre de l'homme.",
        analyse: "Rabelais montre que le rire est une vraie force pour faire face aux difficultés de la vie."
      }
    ]
  },
  {
    vocation: "Vocation Satirique",
    definition: "Dénonce clairement les injustices, les abus de pouvoir et la corruption en utilisant l'humour, la moquerie et la caricature.",
    genresPrivilegies: ["Satire", "Pamphlet", "Théâtre critique", "Roman engagé", "Fable satirique"],
    argumentsCles: [
      "L'écrivain utilise une ironie piquante pour réveiller les consciences endormies face à l'injustice.",
      "La caricature dévoile l'hypocrisie des dirigeants et l'orgueil des puissants en les rendant ridicules.",
      "Le rire satirique est une arme efficace pour critiquer les abus et encourager le changement."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Bernard Binlin Dadié",
        oeuvre: "Monsieur Tôgôgnini",
        citation: "Tôgôgnini : 'L'argent n'a pas d'odeur, mais il a une couleur : celle du bonheur !'",
        analyse: "Dadié se moque de la cupidité et de la malhonnêteté de ceux qui cherchent à s'enrichir à tout prix."
      },
      {
        auteur: "Beaumarchais",
        oeuvre: "Le Mariage de Figaro (Acte V, scène 3)",
        citation: "Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !... Noblesse, fortune, un rang, des places, tout cela rend si fier ! Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus.",
        analyse: "Figaro dénonce avec courage les privilèges injustes des nobles qui profitent de leur rang sans mérite."
      },
      {
        auteur: "Ahmadou Kourouma",
        oeuvre: "Les Soleils des indépendances",
        citation: "Bâtard de bâtardise ! Les soleils des indépendances s'étaient annoncés comme un orage de bonheur...",
        analyse: "Kourouma dénonce avec un humour percutant les dérives et les promesses non tenues des régimes au pouvoir."
      }
    ]
  },
  {
    vocation: "Vocation Esthétique",
    definition: "Recherche la beauté des mots, l'harmonie des sons et le plaisir du style, sans chercher une utilité pratique immédiate.",
    genresPrivilegies: ["Poésie", "Prose poétique", "Contes littéraires"],
    argumentsCles: [
      "L'art littéraire tire toute sa valeur de la beauté de la langue et du plaisir de créer, même sans message politique.",
      "Le travail soigné sur les rimes, le rythme et les mots transforme l'expérience quotidienne en une œuvre d'art durable.",
      "Comme le rappelle Théophile Gautier, la recherche du beau a une valeur en elle-même."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Théophile Gautier",
        oeuvre: "Émaux et Camées (L'Art)",
        citation: "Oui, l'œuvre sort plus belle / D'une forme au travail / Rebelle, / Vers, marbre, onyx, émail.",
        analyse: "Le poète explique que la beauté naît de l'effort et de la patience pour bien travailler les mots."
      },
      {
        auteur: "Charles Baudelaire",
        oeuvre: "Les Fleurs du Mal (L'Invitation au voyage)",
        citation: "Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté.",
        analyse: "Baudelaire crée un poème musical et harmonieux où les mots font naître un univers de douceur et de beauté."
      }
    ]
  },
  {
    vocation: "Vocation Fictive / Évasive",
    definition: "Permet au lecteur d'oublier les soucis du quotidien pour voyager dans des mondes imaginaires, merveilleux ou passionnants.",
    genresPrivilegies: ["Roman d'aventures", "Récit fantastique / science-fiction", "Conte merveilleux", "Épopée"],
    argumentsCles: [
      "Face aux épreuves du quotidien, la fiction offre un refuge réconfortant qui fait rêver.",
      "En suivant des personnages extraordinaires, le lecteur vit par l'esprit des aventures palpitantes.",
      "Comme le remarque Albert Camus, le roman invente des histoires passionnantes qui donnent un sens captivant aux événements."
    ],
    auteursEtOeuvres: [
      {
        auteur: "Antoine de Saint-Exupéry",
        oeuvre: "Le Petit Prince",
        citation: "S'il vous plaît... dessine-moi un mouton !",
        analyse: "L'histoire poétique du Petit Prince fait voyager le lecteur et réveille en lui la fraîcheur de son regard d'enfant."
      },
      {
        auteur: "Jules Verne",
        oeuvre: "Vingt Mille Lieues sous les mers",
        citation: "La traversée sous-marine à bord du Nautilus ouvre les portes d'un monde insoupçonné d'abîmes et de merveilles.",
        analyse: "Le voyage sous les mers emmène le lecteur à la découverte de mondes mystérieux et fascinants."
      }
    ]
  },
  {
    vocation: "Vocation Réaliste",
    definition: "Montre la réalité de la vie telle qu'elle est, sans rien cacher ni déguiser, comme un miroir fidèle de la société.",
    genresPrivilegies: ["Roman réaliste et naturaliste", "Témoignage documentaire", "Théâtre réaliste"],
    argumentsCles: [
      "L'écrivain réaliste décrit la vie quotidienne avec franchise pour faire comprendre le fonctionnement réel de la société.",
      "Le roman est une observation attentive qui raconte la vérité sur les relations humaines et les difficultés sociales.",
      "Stendhal résume cette idée : « Le roman est un miroir que l'on promène le long d'une route. »"
    ],
    auteursEtOeuvres: [
      {
        auteur: "Honoré de Balzac",
        oeuvre: "Le Père Goriot",
        citation: "Ah ! sachez-le : ce drame n'est ni une fiction, ni un roman. All is true, il est si véritable, que chacun peut en reconnaître les éléments chez soi, dans son cœur peut-être.",
        analyse: "Balzac explique que son roman s'inspire directement de la vie réelle de son temps."
      },
      {
        auteur: "Émile Zola",
        oeuvre: "Germinal",
        citation: "Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur...",
        analyse: "Zola décrit avec fidélité les conditions de travail très difficiles des mineurs pour éveiller la sensibilité du public."
      },
      {
        auteur: "Ferdinand Oyono",
        oeuvre: "Une vie de boy",
        citation: "À travers le journal intime de Toundi, le lecteur découvre la vérité crue et violente du système colonial camerounais.",
        analyse: "Le récit montre avec franchise et clarté les injustices de la période coloniale à travers les yeux d'un témoin direct."
      }
    ]
  }
];

export const francaisTleDissertationKnowledgeBase = {
  name: "LE PROF — Méthodologie Complète de la Dissertation Littéraire",
  version: "2026.2",
  level: "Terminale (Séries A, C, D) & Concours",
  country: "Espace Francophone / Côte d'Ivoire (MENA)",
  runtimePolicy: {
    primarySource: "knowledge_base_local",
    apiRequired: false,
    apiRole: "fallback_only"
  },

  reglesCardinales: {
    regle1_pasDeConsigneDansIntro: {
      titre: "Règle d'or 1 : Jamais de consigne dans l'introduction",
      explication: "Dans l'introduction de la dissertation littéraire, l'élève doit amener le sujet et citer fidèlement le sujet ou la pensée de l'auteur. En revanche, IL EST FORMELLEMENT INTERDIT D'Y COPIER LA CONSIGNE (ex: 'Expliquez et discutez cette affirmation', 'Commentez et discutez', 'Partagez-vous ce point de vue ?', etc.). La consigne est une directive de travail pour l'élève au brouillon, elle ne fait JAMAIS partie du texte rédigé de l'introduction.",
      piegeAEviter: "Écrire dans l'introduction : « C'est pourquoi on nous demande d'expliquer et de discuter cette affirmation » -> ÉNORME FAUTE MÉTHODOLOGIQUE À BANNIR !"
    },
    regle2_pasDeOuDansProbleme: {
      titre: "Règle d'or 2 : Aucun mot « ou » dans le problème (problématisation)",
      explication: "Le problème (ou problématisation centrale) doit être posé sous la forme d'une interrogation directe ou indirecte, profonde, unifiée et percutante. IL EST FORMELLEMENT INTERDIT D'Y INSÉRER LE MOT « OU » ! Une formulation avec 'ou' (ex: 'Le théâtre est-il ceci ou cela ?') réduit le débat à une fausse alternative binaire superficielle au lieu de faire jaillir la véritable tension dialectique.",
      formulationsRecommandees: [
        "Dans quelle mesure [thèse du sujet] alors même que [nuance / dépassement] ?",
        "En quoi l'action de [thème] dépasse-t-elle la seule dimension de [thèse] pour s'affirmer comme un instrument de [nuance] ?",
        "[Genre littéraire] ne se réduit-il qu'à [thèse] ?",
        "Dans quelle mesure la création littéraire parvient-elle à concilier [vocation 1] et [vocation 2] ?"
      ],
      piegeAEviter: "Formuler : « Le théâtre sert-il à rire OU à réfléchir ? » -> STRICTEMENT INTERDIT !"
    },
    regle3_structureQuintupleParagraphe: {
      titre: "Règle d'or 3 : La formule d'or du paragraphe argumentatif",
      etapes: [
        "1. Idée directrice (Argument clair formulé en une phrase affirmée)",
        "2. Explication / Démonstration (Justification conceptuelle des raisons de cet argument)",
        "3. Exemple tiré d'une œuvre littéraire (Titre exact de l'œuvre et auteur précis)",
        "4. Citation textuelle authentique (Entre guillemets, intégrée harmonieusement)",
        "5. Analyse / Commentaire critique (Montrer explicitement en quoi l'exemple et la citation prouvent l'argument)"
      ]
    },
    regle4_conclusionEnTroisTemps: {
      titre: "Règle d'or 4 : La conclusion rigoureuse en 3 étapes",
      etapes: [
        "1. Bilan du développement (Synthèse objective, équilibrée et concise des axes explorés)",
        "2. Prise de position personnelle motivée (Réponse nette, nuancée et argumentée au problème posé)",
        "3. Ouverture prospective (Élargissement vers un autre genre, une autre époque ou une question esthétique globale)"
      ]
    }
  },

  poetryFunctions: {
    source: "src/data/poetryFunctionsKnowledgeBase.ts",
    description: "Base spécialisée des six fonctions de la poésie pour la dissertation : lyrique, esthétique, évasive/fictive, ludique, didactique et engagée.",
    policy: "Les faits bibliographiques sont fixes ; les variantes ne modifient que la formulation pédagogique."
  },

  chapters: [
    {
      id: "dissert-methodo-definition",
      lessonNumber: 1,
      title: "A. Définition et Esprit de la Dissertation Littéraire",
      topics: [
        "Définition canonique : Analyse méthodique et critique portant sur un sujet de réflexion littéraire ou général.",
        "C'est une réponse ordonnée, argumentée et illustrée à une question d'ordre littéraire (portant sur le roman, la poésie, le théâtre ou la littérature en général).",
        "C'est un travail rigoureux d'organisation de la pensée et de mobilisation de connaissances littéraires solides, précises et authentiques."
      ],
      formulas: [
        "Dissertation = Problématisation lucide + Plan dialectique/thématique cohérent + Paragraphes argumentés (Idée + Explication + Exemple + Citation + Analyse) + Langue châtiée et claire."
      ],
      methods: [
        "Respecter l'unité de la réflexion du début à la fin.",
        "Bannir le remplissage creux, les formules passe-partout et les observateurs fictifs.",
        "Privilégier la clarté, l'honnêteté intellectuelle et la précision des références littéraires."
      ]
    },
    {
      id: "dissert-methodo-preliminaire",
      lessonNumber: 2,
      title: "B. Le Travail Préliminaire au Brouillon",
      topics: [
        "1. Analyser le sujet : cerner ses caractéristiques, repérer et définir tous les mots-clés, identifier la thèse de l'auteur et isoler la consigne.",
        "2. Isoler la consigne pour la respecter au brouillon, tout en se rappelant qu'ON NE LA RECOPIE JAMAIS DANS L'INTRODUCTION.",
        "3. Rechercher les idées : mentionner au brouillon toutes les idées capables d'étayer ou de nuancer la thèse, associer à chaque idée une œuvre illustrative et une citation exacte.",
        "4. Localiser les orientations et repérer le type de plan à élaborer (Plan dialectique : Thèse / Antithèse ou Thèse / Antithèse / Synthèse ; Plan thématique : plusieurs facettes complémentaires d'un même phénomène).",
        "5. Repérer la vocation (les fonctions de l'œuvre littéraire) parmi les 9 vocations officielles (Lyrique, Émotive, Morale, Didactique, Ludique, Satirique, Esthétique, Fictive, Réaliste)."
      ],
      formulas: [
        "Brouillon efficace = Mots-clés définis + Thèse dégagée + Consigne isolée hors de l'intro + Vocations identifiées + Boîte à idées avec Auteurs/Citations + Tableau du plan."
      ],
      methods: [
        "Ne jamais se précipiter dans la rédaction sans avoir posé les colonnes du plan au brouillon.",
        "Classer les arguments du moins fort au plus percutant à l'intérieur de chaque axe.",
        "Vérifier qu'aucun argument ne contredit la démarche globale de l'axe."
      ]
    },
    {
      id: "dissert-methodo-introduction",
      lessonNumber: 3,
      title: "C. L'Introduction Méthodique",
      topics: [
        "L'introduction est le premier contact avec le correcteur : elle doit être irréprochable et rédigée en un seul paragraphe continu.",
        "Elle se compose obligatoirement de quatre étapes rigoureusement ordonnées :",
        "1. Amener le sujet : partir d'une généralité littéraire, historique ou thématique en lien étroit avec le sujet (pas de généralités cosmiques comme 'Depuis que le monde est monde' !).",
        "2. Poser le sujet : citer textuellement le sujet entre guillemets si c'est une citation courte, ou le reformuler fidèlement sans trahir sa pensée.",
        "⚠️ RÈGLE FORMELLE ABSOLUE : ON NE MET PAS LA CONSIGNE DANS L'INTRODUCTION ! Jamais de 'Expliquez et discutez', 'Commentez', etc.",
        "3. Poser le problème : dégager la difficulté centrale, la contradiction ou la tension dialectique soulevée par le sujet.",
        "⚠️ RÈGLE FORMELLE ABSOLUE : IL N'Y A AUCUN 'OU' DEDANS ! Formuler une question unifiée, profonde et stimulante sans alternative binaire avec 'ou'.",
        "4. Annoncer le plan : énoncer clairement les grandes articulations (axes) qui guideront le développement, avec élégance et fluidité."
      ],
      formulas: [
        "Introduction = Amorce contextuelle + Citation du sujet (SANS consigne) + Problème (SANS 'ou') + Annonce du plan."
      ],
      methods: [
        "Rédiger l'introduction entièrement au brouillon avant de la recopier sur la copie propre.",
        "Faire un alinéa net au début de l'introduction et sauter 2 lignes avant le développement."
      ]
    },
    {
      id: "dissert-methodo-developpement",
      lessonNumber: 4,
      title: "D. Le Développement et la Structuration des Axes",
      topics: [
        "Le développement s'organise en 2 ou 3 axes majeurs selon le sujet.",
        "Chaque axe débute par un chapeau introductif (phrase annonçant l'idée générale de la partie).",
        "Chaque axe comprend 2 ou 3 paragraphes argumentatifs nettement distincts (avec alinéa).",
        "Chaque paragraphe suit la structure quintuple : Idée -> Explication -> Exemple littéraire -> Citation -> Analyse.",
        "Entre deux axes, une transition explicite est obligatoire : elle dresse le bilan partiel de l'axe achevé et pose la question charnière ouvrant sur l'axe suivant."
      ],
      formulas: [
        "Paragraphe = Connecteur + Idée directrice + Explication + Exemple d'œuvre + Citation textuelle + Analyse critique.",
        "Transition = [Bilan synthétique Axe 1] + [Cependant / Toutefois / Néanmoins...] + [Question ouvrant l'Axe 2]."
      ],
      methods: [
        "Sauter 1 ligne entre les deux grands axes pour aérer la copie.",
        "Ne jamais écrire 'Première partie', 'Axe I' ou 'Transition' dans la copie d'examen."
      ]
    },
    {
      id: "dissert-methodo-conclusion",
      lessonNumber: 5,
      title: "E. La Conclusion",
      topics: [
        "La conclusion met un point final au devoir ; elle doit être rédigée avec un soin particulier et sans précipitation.",
        "Elle se divise en 3 moments indispensables :",
        "1. Le bilan du développement : récapitule de manière concise et objective les réponses apportées par les différents axes.",
        "2. La prise de position personnelle argumentée : l'élève donne son avis motivé, sans user du 'je' familier (utiliser 'nous' ou des tournures neutres), en répondant clairement au problème posé.",
        "3. L'ouverture : élargit la perspective vers un autre genre littéraire, un prolongement contemporain, un débat esthétique ou philosophique plus vaste."
      ],
      formulas: [
        "Conclusion = Bilan des axes + Point de vue motivé + Élargissement / Ouverture."
      ],
      methods: [
        "Sauter 2 lignes entre la fin du développement et la conclusion.",
        "Ne jamais introduire un nouvel argument imprévu dans la conclusion."
      ]
    }
  ],

  sujetModeleExemplaire: {
    enonce: "« Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. »",
    consigneReelle: "Expliquez et discutez cette affirmation en vous appuyant sur des œuvres théâtrales lues ou étudiées.",
    avertissementMethodologique: "À RETENIR POUR LE BAC : La consigne ci-dessus sert pour le travail préparatoire, mais ON NE LA MET PAS DANS L'INTRODUCTION. De plus, le problème doit être formulé SANS AUCUN MOT 'OU'.",
    travailPreliminaire: {
      analyseDuSujet: {
        motsCles: [
          { mot: "Au théâtre", sens: "Désigne l'art dramatique, la représentation sur scène avec des comédiens, une histoire et un public réuni dans une salle." },
          { mot: "Point n'est besoin de réfléchir, de penser", sens: "Refus de faire un effort intellectuel ; idée que le spectacle n'a pas besoin de donner de leçon pour être réussi." },
          { mot: "Tout est dans l'hilarité", sens: "Le rire franc, joyeux et immédiat constitue le seul but du spectacle (amusement et détente totale)." }
        ],
        consigneIsolee: "Expliquez et discutez cette affirmation...",
        rappelConsigne: "RAPPEL STRICT : Cette consigne commande un plan dialectique (I. Expliquer la part de vérité de la thèse ; II. Discuter ses limites et montrer le rôle de la réflexion au théâtre). CETTE CONSIGNE NE SERA PAS MENTIONNÉE DANS L'INTRODUCTION.",
        reformulation: "Pour l'auteur de cette citation, le théâtre sert uniquement à faire rire et à divertir, sans obliger le spectateur à réfléchir ou à se poser des questions sérieuses.",
        vocationsMobilisees: [
          "Vocation Ludique (le rire, la farce, l'amusement, la détente)",
          "Vocation Morale et Didactique (corriger les défauts, instruire, dénoncer l'hypocrisie)",
          "Vocation Satirique et Politique (critiquer les abus de pouvoir, réveiller la citoyenneté)",
          "Vocation Émotive et Cathartique (la tragédie, la pitié et l'admiration devant le courage)"
        ]
      },
      problematisationSansOu: {
        problemeFormule: "Dans quelle mesure le théâtre dépasse-t-il le simple divertissement comique pour devenir un puissant moyen de réflexion sur la vie humaine ?",
        verificationConformite: "CONFORME AUX RÈGLES DE L'INSPECTEUR : Aucun mot 'ou' présent dans le problème. La tension dialectique entre rire et réflexion est posée avec clarté."
      },
      planRetenu: {
        type: "Plan dialectique (Expliquer / Discuter)",
        axe1: "Le théâtre comme fête du rire et lieu privilégié de divertissement (Vocation ludique)",
        transition: "Certes, le théâtre est un lieu formidable d'amusement et de détente. Cependant, peut-on limiter cet art à une simple distraction sans reconnaître son rôle essentiel pour éveiller les consciences ?",
        axe2: "Le théâtre comme moyen de réflexion, miroir des défauts humains et critique de la société (Vocations morale, didactique et satirique)"
      }
    },
    redactionIntegrale: {
      introduction: {
        amorce: "Depuis l'Antiquité jusqu'à nos jours, le théâtre est un art vivant où les hommes se rassemblent pour regarder sur scène le spectacle de leur propre vie.",
        citationSansConsigne: "C'est dans cette perspective qu'on a pu affirmer : « Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. »",
        explicationCitation: "Selon cette idée, la pièce de théâtre a pour seul but de faire rire franchement le public, sans lui demander d'effort de réflexion.",
        problemeSansOu: "Dès lors, une question essentielle se pose : dans quelle mesure le théâtre dépasse-t-il le simple rire pour devenir un puissant moyen de réflexion sur la condition humaine ?",
        annoncePlan: "Pour répondre à cette question, nous verrons d'abord que le théâtre est un lieu formidable de rire et de divertissement. Puis, dans un second temps, nous montrerons qu'il a aussi pour mission d'instruire, de corriger les défauts et de dénoncer les injustices.",
        texteComplet: `Depuis l'Antiquité jusqu'à nos jours, le théâtre est un art vivant où les hommes se rassemblent pour regarder sur scène le spectacle de leur propre vie. C'est dans cette perspective qu'on a pu affirmer : « Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. » Selon cette idée, la pièce de théâtre a pour seul but de faire rire franchement le public, sans lui demander d'effort de réflexion. Dès lors, une question essentielle se pose : dans quelle mesure le théâtre dépasse-t-il le simple rire pour devenir un puissant moyen de réflexion sur la condition humaine ? Pour répondre à cette question, nous verrons d'abord que le théâtre est un lieu formidable de rire et de divertissement. Puis, dans un second temps, nous montrerons qu'il a aussi pour mission d'instruire, de corriger les défauts et de dénoncer les injustices.`
      },
      developpement: {
        axe1: {
          titre: "Axe I : Le spectacle théâtral comme fête du rire et du divertissement",
          chapeau: "Tout d'abord, il faut reconnaître que le théâtre attire un très large public grâce au plaisir du rire et à l'amusement qu'il procure.",
          paragraphes: [
            {
              numero: 1,
              argument: "Le théâtre est d'abord une fête joyeuse où les gestes comiques et les farces apportent une détente immédiate.",
              explication: "Le spectateur va au théâtre pour oublier les soucis de sa journée et rire sans contrainte. L'énergie des comédiens, les malentendus amusants et les farces libèrent l'esprit de toute fatigue.",
              oeuvre: "Les Fourberies de Scapin",
              auteur: "Molière",
              citation: "« Que diable allait-il faire dans cette galère ? »",
              analyse: "Dans cette comédie très vive, Molière multiplie les bastonnades comiques et les ruses de serviteur. Le public n'a pas besoin de faire de grands calculs : il rit franchement des tours de Scapin qui trompe l'avare Géronte. Le plaisir du spectacle est ici direct et joyeux."
            },
            {
              numero: 2,
              argument: "Dans la comédie populaire et le théâtre africain, la farce fait rire tout le monde en se moquant des petits défauts de la vie quotidienne.",
              explication: "Le théâtre réussit à plaire en montrant les disputes de voisinage et les petites vanités de tous les jours, où le rire devient le meilleur remède contre les soucis.",
              oeuvre: "On se chamaille pour un siège",
              auteur: "Hyacinthe Kacou",
              citation: "Les personnages se disputent avec énergie autour d'un simple tabouret, offrant une scène très drôle et vivante.",
              analyse: "L'auteur ivoirien met en scène une dispute amusante. Le rire provoqué par les gestes et les querelles des personnages détend l'atmosphère et offre au public un grand moment de joie partagée."
            }
          ],
          transition: "Nous venons de voir que le théâtre est un lieu privilégié d'amusement et de détente. Cependant, peut-on réduire le théâtre à une simple distraction sans intérêt ? Le rire n'est-il pas souvent une façon habile d'amener les spectateurs à réfléchir sur eux-mêmes et sur la société ?"
        },
        axe2: {
          titre: "Axe II : Le rôle éducatif, moral et politique du théâtre : faire réfléchir et corriger les défauts",
          chapeau: "En réalité, loin d'empêcher de réfléchir, le théâtre aide depuis toujours les hommes à mieux comprendre la société et à corriger leurs erreurs.",
          paragraphes: [
            {
              numero: 1,
              argument: "Le théâtre a une mission morale et éducative très forte, résumée par la devise classique : corriger les mœurs en riant.",
              explication: "Le rire n'est pas seulement un jeu : c'est aussi un moyen très efficace pour faire réfléchir. En montrant sur scène l'hypocrisie, l'avarice ou la méchanceté, l'auteur pousse le spectateur à prendre conscience de ses propres défauts.",
              oeuvre: "Tartuffe (Premier placet au Roi)",
              auteur: "Molière",
              citation: "« Le devoir de la comédie étant de corriger les hommes en les divertissant [...] le plus beau trait d'une sérieuse morale est moins puissant le plus souvent que ceux de la satire. »",
              analyse: "À travers le personnage du faux dévot Tartuffe, Molière ne cherche pas seulement à faire sourire : il dénonce l'hypocrisie religieuse et invite la société de son époque à faire preuve de discernement et de sincérité."
            },
            {
              numero: 2,
              argument: "Sur le plan citoyen et politique, la scène de théâtre dénonce l'injustice, combat la tyrannie et réveille la conscience du peuple.",
              explication: "Dans le théâtre engagé, l'auteur refuse d'amuser bêtement son public. Il l'interpelle sur ses responsabilités et dénonce les abus de pouvoir.",
              oeuvre: "Monsieur Tôgôgnini",
              auteur: "Bernard Binlin Dadié",
              citation: "« L'argent n'a pas d'odeur, mais il a une couleur : celle du bonheur ! »",
              analyse: "En se moquant du personnage cupide de Tôgôgnini, Dadié utilise le rire pour ouvrir les yeux du public sur les dangers de la corruption et l'amour excessif de l'argent après les indépendances."
            },
            {
              numero: 3,
              argument: "Enfin, dans la tragédie, le théâtre confronte l'homme aux grandes épreuves de la vie sans chercher à faire rire.",
              explication: "La tragédie montre bien que le théâtre ne se résume pas à l'amusement : elle fait ressentir de la pitié et de l'admiration devant le courage et la douleur humaine.",
              oeuvre: "Antigone",
              auteur: "Sophocle / Jean Anouilh",
              citation: "« Je suis là pour dire non et pour mourir. » (Anouilh)",
              analyse: "Devant Antigone, le public ne rit pas : il est ému et admire le courage d'une jeune fille qui préfère mourir plutôt que d'obéir à une loi injuste."
            }
          ]
        }
      },
      conclusion: {
        bilan: "En conclusion, il serait incomplet de réduire le théâtre à un simple divertissement sans pensée. Bien sûr, la comédie fait rire et aide à oublier les difficultés de la vie quotidienne. Cependant, la force du théâtre vient aussi de sa capacité à faire réfléchir le public sur les valeurs morales et les problèmes de la société.",
        pointDeVuePersonnel: "Pour notre part, nous pensons que le rire et la réflexion se complètent parfaitement. Comme le montrent Molière ou Bernard Dadié, le divertissement permet d'instruire sans ennuyer.",
        ouverture: "Dès lors, ne retrouve-t-on pas cette même force dans le cinéma et le roman d'aujourd'hui, où une histoire divertissante reste le meilleur moyen de transmettre un message fort ?",
        texteComplet: `En conclusion, il serait incomplet de réduire le théâtre à un simple divertissement sans pensée. Bien sûr, la comédie fait rire et aide à oublier les difficultés de la vie quotidienne. Cependant, la force du théâtre vient aussi de sa capacité à faire réfléchir le public sur les valeurs morales et les problèmes de la société. Pour notre part, nous pensons que le rire et la réflexion se complètent parfaitement. Comme le montrent Molière ou Bernard Dadié, le divertissement permet d'instruire sans ennuyer. Dès lors, ne retrouve-t-on pas cette même force dans le cinéma et le roman d'aujourd'hui, où une histoire divertissante reste le meilleur moyen de transmettre un message fort ?`
      }
    }
  }
};

/**
 * Fonctions de recherche et de contextualisation pour le pipeline local RAG
 */
export function findFrancaisDissertationChapters(query: string) {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return francaisTleDissertationKnowledgeBase.chapters.filter(ch => {
    const hay = (ch.title + " " + ch.topics.join(" ") + " " + ch.methods.join(" ")).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return hay.includes(q) || q.split(/\s+/).some(w => w.length > 4 && hay.includes(w));
  });
}

export function buildFrancaisDissertationContext(query: string): string {
  const matched = findFrancaisDissertationChapters(query);
  const selected = matched.length > 0 ? matched : francaisTleDissertationKnowledgeBase.chapters;
  
  let ctx = `=== RÉFÉRENTIEL MÉTHODOLOGIQUE DE LA DISSERTATION LITTÉRAIRE ===\n`;
  ctx += `RÈGLES D'OR DE L'INSPECTEUR :\n`;
  ctx += `1. ON NE MET PAS LA CONSIGNE DANS L'INTRODUCTION (isoler la pensée de l'auteur, supprimer toute formule de consigne comme 'Expliquez et discutez').\n`;
  ctx += `2. IL N'Y A AUCUN MOT 'OU' DANS LE PROBLÈME (formuler une interrogation ouverte, profonde et unifiée).\n`;
  ctx += `3. REPÉRER LES VOCATIONS EN JEU (Lyrique, Émotive, Morale, Didactique, Ludique, Satirique, Esthétique, Fictive, Réaliste).\n`;
  ctx += `4. PARAGRAPHE = Idée directrice + Explication + Exemple tiré d'une œuvre + Citation exacte + Analyse du procédé.\n`;
  ctx += `5. CONCLUSION = Bilan + Prise de position personnelle argumentée + Ouverture.\n\n`;

  selected.forEach(ch => {
    ctx += `[${ch.title}]\n`;
    ctx += `Concepts & Règles :\n${ch.topics.map(t => `- ${t}`).join("\n")}\n`;
    ctx += `Démarche : ${ch.methods.join(" | ")}\n\n`;
  });

  return ctx;
}
