import { CourseConceptFormula, CourseMethodStep, CourseSearchResult, CourseSolvedExample } from '../types';
import { differentiateArgumentItem, hashStringToInt } from '../../server/argumentReformulator';

export interface FrenchWorkStudy {
  id: string;
  title: string;
  author: string;
  genre: 'Roman' | 'Poésie' | 'Théâtre' | 'Conte philosophique' | 'Essai';
  publicationYear: string;
  literaryMovement: string;
  aliases: string[];
  context: string;
  summaryAndScope: string;
  mainThemes: string[];
  characters: { name: string; role: string; dissertationUtility: string }[];
  literaryDevices: { device: string; explanation: string; exampleText: string }[];
  keyPassages: { title: string; summary: string; usability: string }[];
  comparisons: { author: string; work: string; reason: string }[];
  arguments: {
    category: string;
    statement: string;
    explanation: string;
    quote: string;
    sceneOrExample: string;
    dissertationLink: string;
    alternateStatements?: string[];
    alternateExplanations?: string[];
  }[];
}

export const FRENCH_STUDIED_WORKS: FrenchWorkStudy[] = [
  {
    id: "les-soleils-des-independances",
    title: "Les Soleils des Indépendances",
    author: "Ahmadou Kourouma",
    genre: "Roman",
    publicationYear: "1968",
    literaryMovement: "Littérature Négro-Africaine (Courant du Désenchantement Post-Indépendance)",
    aliases: [
      "les soleils des independances", "soleils des independances", "soleils des indépendances",
      "kourouma", "ahmadou kourouma", "fama", "fama doumbouya", "salimata"
    ],
    context: "Publié en 1968, le roman marque un tournant radical dans les lettres africaines. Après l'euphorie des indépendances (1960), les nouveaux régimes du parti unique instaurent l'autoritarisme, la bureaucratie corrompue et la misère du peuple. Kourouma brise le tabou de la critique interne et dynamite le français classique.",
    summaryAndScope: "Chronique tragique de la déchéance de Fama Doumbouya, dernier prince légitime du Horodougou, réduit à mendier aux funérailles dans la république des Ébènes. Le roman explore l'amertume des promesses trahies, la stérilité du couple Fama-Salimata et la disparition de l'ordre traditionnel.",
    mainThemes: [
      "Le désenchantement post-colonial et la critique des régimes du parti unique",
      "Le conflit tragique entre tradition féodale et modernité politique aliénante",
      "La stérilité, la malédiction du destin et la déchéance sociale",
      "La condition féminine et les violences coutumières (l'excision de Salimata)",
      "La renaissance linguistique : la malinkisation du français"
    ],
    characters: [
      {
        name: "Fama Doumbouya",
        role: "Dernier prince du Horodougou, orgueilleux et ruiné, vivant d'aumônes funéraires.",
        dissertationUtility: "Incarne la tragédie de l'ordre traditionnel broyé par les soleils des indépendances et l'amertume du déclassement politique."
      },
      {
        name: "Salimata",
        role: "Épouse dévouée de Fama, commerçante courageuse, hantée par son excision traumatique et sa stérilité.",
        dissertationUtility: "Symbolise la résilience et la dignité de la femme africaine face aux traumatismes coutumiers et aux déceptions conjugales."
      },
      {
        name: "Tiécoura",
        role: "Féticheur et devin garant des croyances ancestrales.",
        dissertationUtility: "Témoigne de l'ancrage profond du mysticisme et de la cosmogonie animiste dans la psychologie des personnages."
      }
    ],
    literaryDevices: [
      {
        device: "Malinkisation de la langue française",
        explanation: "Kourouma plie la syntaxe et le lexique français aux rythmes, proverbes et tournures de la langue malinké.",
        exampleText: "« Les indépendances, rien dans le ventre, tout dans la gueule ! », « Bâtard de bâtardise ! »"
      },
      {
        device: "Ironie tragique et registre satirique",
        explanation: "Caricature féroce des ministres arrivistes, des cercles du parti et de la courtisanerie politique.",
        exampleText: "La description des dignitaires du parti unique engraissés par la prévarication."
      },
      {
        device: "Oralité romanesque et apostrophes au lecteur",
        explanation: "Adoption du ton du griot africain qui prend à témoin son auditoire.",
        exampleText: "« Qu'on me dise si Fama méritait pareil sort ! »"
      }
    ],
    keyPassages: [
      {
        title: "La scène d'ouverture : les funérailles d'Ibrahima Koné",
        summary: "Fama mendie sa part d'argent et de viande sur la place du marché d'Abidjan.",
        usability: "Illustration parfaite de la clochardisation des princes traditionnels et du réalisme urbain impitoyable."
      },
      {
        title: "Le retour à Togobala",
        summary: "Fama redécouvre sa concession ancestrale délabrée, désertée et vouée à la ruine.",
        usability: "Métaphore éclatante de la faillite matérielle et spirituelle du monde féodal."
      },
      {
        title: "La mort tragique de Fama à la frontière",
        summary: "Blessé par les crocodiles sacrés du fleuve en bravant les barrages militaires du parti unique.",
        usability: "Achèvement héroïque et sacrificiel affirmant la fidélité de Fama à son honneur ancestral jusqu'à la mort."
      }
    ],
    comparisons: [
      {
        author: "Henri Lopes",
        work: "Le Pleurer-Rire (1982)",
        reason: "Prolonge la satire des dictatures postcoloniales avec le tyran Bwakamabé Na Sakkader."
      },
      {
        author: "Sony Labou Tansi",
        work: "La Vie et demie (1979)",
        reason: "Radicalisation poétique et baroque de la dénonciation de la monstruosité autocratique en Katamalanasie."
      },
      {
        author: "Ferdinand Oyono",
        work: "Une vie de boy (1956)",
        reason: "Parallèle entre la démythification du maître colonial et celle des nouveaux maîtres africains du parti unique."
      }
    ],
    arguments: [
      {
        category: "Axe Réaliste & Témoignage Historique",
        statement: "Le roman dresse le bilan lucide des désillusions historiques et de la faillite politique des indépendances.",
        explanation: "Loin de toute propagande lénifiante, le romancier se fait le secrétaire critique des espérances trahies de son peuple, dénonçant l'accaparement des richesses nationales par une nouvelle bourgeoisie bureaucratique.",
        quote: "Les soleils des indépendances s'étaient annoncés comme une ère de liberté, ils n'apportèrent que la misère et les cartes du parti.",
        sceneOrExample: "Dans *Les Soleils des Indépendances*, Fama Doumbouya, jadis prince héritier, est réduit à vivre des aumônes funéraires dans la jungle urbaine d'Abidjan.",
        dissertationLink: "À mobiliser pour prouver la vocation documentaire, réaliste et testimoniale du roman africain.",
        alternateStatements: [
          "Le roman brise les mythes officiels pour exposer la détresse concrète des populations marginalisées.",
          "L'œuvre romanesque témoigne des ruptures historiques où les promesses d'émancipation tournent à l'amertume collective.",
          "Le roman se constitue en mémoire vivante des désenchantements d'une génération sacrifiée."
        ],
        alternateExplanations: [
          "Kourouma refuse le piège de l'idéalisation rétrospective : le roman montre comment les mécanismes du parti unique écrasent l'homme ordinaire sous la misère matérielle.",
          "À travers une radiographie implacable de la société postcoloniale, l'écrivain documente la fin d'un monde et l'émergence d'une tyrannie technocratique.",
          "L'analyse sociologique du récit dévoile l'écart insupportable entre les discours patriotiques de façade et la corruption des élites au pouvoir."
        ]
      },
      {
        category: "Axe Esthétique & Révolution Stylistique",
        statement: "L'écrivain révolutionne l'art romanesque en hybridant le français classique avec l'oralité et l'imaginaire malinké.",
        explanation: "Kourouma ne se contente pas d'écrire en français : il force la langue académique à porter la syntaxe brisée, les proverbes, l'imprécation et la verve poétique de sa culture ancestrale.",
        quote: "Bâtard de bâtardise ! Fama ne pouvait pas s'habituer à cette vie d'hyène et de charognard.",
        sceneOrExample: "L'introduction de jurons, d'apostrophes orales et de proverbes malinkés dans le tissu narratif.",
        dissertationLink: "À citer pour réfuter l'idée que le roman engagé négligerait l'innovation esthétique et stylistique.",
        alternateStatements: [
          "Le renouvellement du genre romanesque passe par l'insoumission créatrice de la langue et le métissage verbal.",
          "La puissance du roman réside dans sa capacité à inventer un idiome poétique inédit défiant les normes académiques.",
          "L'esthétique romanesque se régénère en insufflant les ressources rythmiques de l'oralité africaine dans l'écriture romanesque."
        ],
        alternateExplanations: [
          "En 'malinkisant' le français, Kourouma invente une écriture plurielle où la langue de l'ancien colonisateur devient l'instrument libéré de l'affirmation identitaire.",
          "Le style kouroumien prouve que la forme romanesque n'est pas un moule figé : la vivacité des métaphores et le rythme de l'oralité subliment la dénonciation politique.",
          "L'écrivain accomplit un geste de décolonisation esthétique intégrale en adaptant le verbe français à la vision cosmologique de son terroir."
        ]
      },
      {
        category: "Axe Tragique & Destin Humain",
        statement: "Le roman élève la déchéance individuelle au rang de tragédie universelle sur la fatalité du temps et la fin d'une civilisation.",
        explanation: "Au-delà de la critique politique conjoncturelle, l'itinéraire de Fama incarne l'angoisse intemporelle de l'homme déraciné, incapable de s'adapter aux mutations d'un monde dont il ne comprend plus les lois.",
        quote: "Fama était né dans l'or, le manger gras et le commandement, et il mourait mendiant à la frontière du Horodougou.",
        sceneOrExample: "La mort sacrificielle de Fama sous les crocs des crocodiles sacrés du fleuve frontalier.",
        dissertationLink: "Idéal pour l'axe de dépassement montrant que le grand roman transcende l'anecdote historique pour interroger la condition humaine.",
        alternateStatements: [
          "Le personnage romanesque devient le symbole universel de l'inadaptation tragique face au cours implacable de l'Histoire.",
          "Le roman sonde la douleur existentielle de l'homme confronté à la perte irréversible de ses repères et de sa dignité.",
          "L'épopée de la déchéance royale prend la dimension métaphysique d'un combat perdu contre le destin."
        ],
        alternateExplanations: [
          "Fama n'est pas seulement un prince ivoirien déchu : il est l'incarnation d'un Œdipe africain aveuglé par son orgueil, poursuivi par la malédiction ancestrale et vaincu par la marche du temps.",
          "Le dénouement tragique confirme que le roman pose des questions métaphysiques fondamentales : comment préserver son honneur quand tout ce qui fondait notre identité s'effondre ?",
          "La force émotionnelle du récit tient à cette résonance poignante : la chute de Fama résume la fragilité de toute grandeur humaine confrontée au néant."
        ]
      }
    ]
  },

  {
    id: "une-si-longue-lettre",
    title: "Une si longue lettre",
    author: "Mariama Bâ",
    genre: "Roman",
    publicationYear: "1979",
    literaryMovement: "Littérature Négro-Africaine Féminine (Émancipation & Réalisme Introspectif)",
    aliases: [
      "une si longue lettre", "mariama ba", "mariama bâ", "ramatoulaye", "aissatou", "aïssatou", "modou fall"
    ],
    context: "Publié en 1979 au Sénégal, premier roman de Mariama Bâ, couronné par le prestigieux prix Noma à Francfort. L'œuvre constitue un jalon décisif dans l'émergence d'une voix féminine africaine autonome, courageuse et lucide, dans une société patriarcale tiraillée entre islam traditionnel et modernité.",
    summaryAndScope: "Roman épistolaire intime où Ramatoulaye, recluse pendant la période de veuvage coutumier (le mirasse), écrit à sa confidente Aïssatou. Elle y dresse le bilan sans fard de son mariage brisé par la polygamie subie, analyse les hypocrisies familiales et revendique le droit inaliénable de la femme à l'éducation, à l'amour choisi et à la dignité citoyenne.",
    mainThemes: [
      "La polygamie dévoyée et la trahison affective du serment conjugal",
      "L'émancipation féminine par l'instruction scolaire et l'indépendance économique",
      "La solidarité et l'amitié sororale comme refuge contre l'injustice patriarcale",
      "La critique des pesanteurs de la belle-famille et du parasitisme social (le mirasse)",
      "L'engagement des femmes dans l'édification de la nation démocratique"
    ],
    characters: [
      {
        name: "Ramatoulaye Fall",
        role: "Institutrice dévouée, mère de douze enfants, abandonnée après trente ans de mariage pour une jeune camarade de sa fille.",
        dissertationUtility: "Incarne la fidélité douloureuse aux devoirs maternels conjuguée à une lucidité intellectuelle intransigeante face aux hypocrisies masculines."
      },
      {
        name: "Aïssatou Ba",
        role: "Amie intime de Ramatoulaye, fille de forgeron, qui a refusé la polygamie de Mawdo Bâ pour s'émanciper seule par les études aux USA.",
        dissertationUtility: "Symbole de la rupture radicale avec les compromissions patriarcales et triomphe de la méritocratie féminine."
      },
      {
        name: "Modou Fall",
        role: "Époux défunt de Ramatoulaye, avocat brillant devenu opportuniste politique, ayant ruiné son foyer pour épouser la jeune Binetou.",
        dissertationUtility: "Représente la trahison morale des intellectuels africains cédant au mirage de la jeunesse artificielle et au reniement de leurs idéaux de jeunesse."
      }
    ],
    literaryDevices: [
      {
        device: "Forme épistolaire et monologue rétrospectif",
        explanation: "La lettre unique permet une confidence intime poignante et une réflexion sociologique universelle.",
        exampleText: "« Amie, amie, amie ! Je t'appelle trois fois... Mon cœur a tant de choses à te confier. »"
      },
      {
        device: "Lyrisme élégiaque et dignité du verbe",
        explanation: "Élévation de la souffrance personnelle au rang de méditation philosophique sereine sans rancœur destructrice.",
        exampleText: "Les descriptions des deuils intérieurs et de la renaissance spirituelle de l'héroïne."
      },
      {
        device: "Plaidoyer sociologique et rhétorique argumentative",
        explanation: "Intégration d'apostrophes vives et d'analyses politiques rigoureuses au cœur de la confidence intime.",
        exampleText: "« Les instruments de l'émancipation de la femme sont dans l'école et le travail. »"
      }
    ],
    keyPassages: [
      {
        title: "L'épreuve du Mirasse",
        summary: "Déballage forcé des biens et des dettes du défunt sous les yeux avides de la belle-famille.",
        usability: "Illustration chirurgicale de la cupidité sociale et du poids étouffant des coutumes maritales dévoyées."
      },
      {
        title: "La lettre de rupture d'Aïssatou",
        summary: "Aïssatou claque la porte du foyer sans esclandre après le remariage de Mawdo : « Je m'efface, je ne me diviserai point ».",
        usability: "Modèle héroïque de dignité et d'affirmation de soi par le refus du compromis polygamique avilissant."
      },
      {
        title: "Le refus de la demande en mariage de Daouda Dieng",
        summary: "Ramatoulaye refuse la sécurité matérielle auprès d'un député épris d'elle par respect pour l'amour pur et pour la première épouse de ce dernier.",
        usability: "Preuve absolue que la libération féminine chez Mariama Bâ ne s'achète pas au détriment d'une autre femme."
      }
    ],
    comparisons: [
      {
        author: "Fatou Keïta",
        work: "Rebelle (1998)",
        reason: "Radicalise le combat contre l'excision et le mariage forcé à travers le parcours de Malimouna."
      },
      {
        author: "Simone de Beauvoir",
        work: "Le Deuxième Sexe (1949)",
        reason: "Résonance philosophique : 'On ne naît pas femme, on le devient', illustré dans le contexte africain."
      },
      {
        author: "Madame de La Fayette",
        work: "La Princesse de Clèves (1678)",
        reason: "Parallèle sur la maîtrise morale, la confession intérieure et le refus du remariage compromettant."
      }
    ],
    arguments: [
      {
        category: "Axe Émancipation Féminine & Combat Social",
        statement: "Le roman s'affirme comme un manifeste pionnier pour la dignité de la femme africaine et le refus des compromissions patriarcales.",
        explanation: "Mariama Bâ démontre que la femme n'est pas un objet d'ornement ou une servante docile : par l'instruction et le travail, elle accède à la souveraineté de sa conscience et devient un pilier indispensable de la nation.",
        quote: "L'école a arraché nos sœurs à l'obscurantisme coutumier ; elle est notre seule arme pour vaincre la servitude séculaire.",
        sceneOrExample: "Dans *Une si longue lettre*, le parcours d'Aïssatou Ba, fille de forgeron devenue diplomate autonome après avoir refusé la polygamie.",
        dissertationLink: "À utiliser pour illustrer la vocation didactique, réformatrice et émancipatrice de la littérature féminine.",
        alternateStatements: [
          "L'écriture romanesque devient le porte-voix des revendications féminines pour l'égalité des droits et de la dignité.",
          "Le roman déconstruit le carcan patriarcal en célébrant l'indépendance intellectuelle et financière des femmes.",
          "La plume de Mariama Bâ érige la liberté de choisir son destin en impératif éthique pour toute la société."
        ],
        alternateExplanations: [
          "À travers la correspondance intime, l'auteure transforme une blessure conjugale privée en un combat politique public pour les générations futures.",
          "Le roman montre que la soumission passive n'est pas une fatalité culturelle : l'accès au savoir universel émancipe la femme sans renier ses racines.",
          "Mariama Bâ prouve que le véritable progrès d'une nation se mesure à la place et au respect accordés à la moitié féminine de sa population."
        ]
      },
      {
        category: "Axe Réalisme Psychologique & Polyphonie Émotionnelle",
        statement: "La forme épistolaire permet d'explorer avec pudeur et subtilité les tourments du cœur humain blessé par la trahison.",
        explanation: "Loin du pamphlet agressif ou simpliste, le récit sonde la complexité des sentiments : la tendresse persistante pour les souvenirs heureux, la douleur de l'abandon et la difficile reconquête de la paix intérieure.",
        quote: "Un cœur blessé ne s'apaise pas par des cris : il lui faut le silence pour recueillir les lambeaux de son amour brisé.",
        sceneOrExample: "Ramatoulaye méditant seule dans sa chambre durant sa réclusion de deuil sur les lettres passionnées de sa jeunesse.",
        dissertationLink: "À insérer dans l'axe démontrant la puissance du roman intimiste, élégiaque et psychologique.",
        alternateStatements: [
          "Le roman offre un espace privilégié d'introspection où s'expriment les déchirements et la résilience de l'âme humaine.",
          "La confession littéraire permet de sublimer la souffrance intime par la lucidité et la beauté du verbe.",
          "L'œuvre de Mariama Bâ sonde les ambiguïtés du sentiment amoureux avec une profondeur psychologique digne des plus grands classiques."
        ],
        alternateExplanations: [
          "La pudeur de Ramatoulaye ne masque aucune complaisance : chaque mot est pesé pour faire de la douleur un instrument de clairvoyance et de dépassement moral.",
          "L'écriture intime fonctionne comme une catharsis spirituelle permettant à l'héroïne de se reconstruire sans haine envers l'époux infidèle.",
          "Le roman évite l'écueil du ressentiment stérile pour atteindre une sérénité philosophique inspirée par le sens du devoir et l'amour maternel."
        ]
      }
    ]
  },

  {
    id: "l-etranger",
    title: "L'Étranger",
    author: "Albert Camus",
    genre: "Roman",
    publicationYear: "1942",
    literaryMovement: "Philosophie de l'Absurde & Existentialisme camusien",
    aliases: [
      "l'etranger", "l etranger", "letranger", "camus", "albert camus", "meursault"
    ],
    context: "Rédigé durant la Seconde Guerre mondiale et publié en 1942 sous l'occupation par Gallimard, premier volet du 'Cycle de l'absurde' de Camus (avec *Le Mythe de Sisyphe* et *Caligula*). Le roman bouscule la tradition psychologique classique par son écriture blanche (degrés zéro) et son antihéros radicalement insensible aux conventions bourgeoises.",
    summaryAndScope: "Histoire de Meursault, modeste employé de bureau à Alger. Après avoir enterré sa mère sans verser de larmes et vécu une brève idylle avec Marie, il tue un Arabe sur une plage écrasée de soleil sans mobile prémédité. Son procès tourne autour de son insensibilité aux codes sociaux plutôt que de son acte, le condamnant à la guillotine. En prison, il refuse la religion et embrasse la tendre indifférence du monde.",
    mainThemes: [
      "Le sentiment de l'absurde : rupture entre l'homme en quête de sens et le silence déraisonnable du monde",
      "Le refus obstiné du mensonge social et des faux-semblants bourgeois",
      "La fatalité physique, la tyrannie des sensations et l'aveuglement solaire",
      "La critique de l'appareil judiciaire et de la comédie des tribunaux",
      "L'accord lucide avec la nature et le bonheur tragique devant la mort"
    ],
    characters: [
      {
        name: "Meursault",
        role: "Protagoniste et narrateur, homme sincère, laconique, guidé par ses sensations corporelles.",
        dissertationUtility: "Incarne l'homme absurde qui refuse de simuler des émotions conventionnelles qu'il ne ressent pas, devenant un étranger au tribunal des hommes."
      },
      {
        name: "Marie Cardona",
        role: "Amante lumineuse de Meursault, incarnant la jeunesse, le désir solaire et la fidélité spontanée.",
        dissertationUtility: "Symbolise l'ancrage charnel dans le plaisir de l'instant présent sans projections métaphysiques angoissées."
      },
      {
        name: "Le Procureur",
        role: "Magistrat accusateur représentant l'ordre moral, la religion et l'hypocrisie sociétale bourgeoise.",
        dissertationUtility: "Met en scène la fabrique judiciaire de la culpabilité morale : condamner un homme parce qu'il n'a pas pleuré à l'enterrement de sa mère."
      }
    ],
    literaryDevices: [
      {
        device: "Écriture blanche et passé composé objectif",
        explanation: "Style dépouillé, parataxe (phrases courtes juxtaposées sans conjonction de subordination) traduisant l'équivalence absurde des événements.",
        exampleText: "« Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. »"
      },
      {
        device: "Sensorialité étouffante et tragique du soleil",
        explanation: "Le soleil n'est pas source de vie mais d'oppression physique, d'éblouissement et d'agression.",
        exampleText: "« C'était le même soleil que le jour où j'avais enterré maman... La gâchette a cédé. »"
      },
      {
        device: "Ironie de la double énonciation judiciaire",
        explanation: "Meursault écoute son propre procès comme un spectacle étranger où l'on parle de lui sans lui.",
        exampleText: "« En quelque sorte, on avait l'air de traiter cette affaire en dehors de moi. »"
      }
    ],
    keyPassages: [
      {
        title: "L'enterrement à l'hospice de Marengo",
        summary: "Meursault fume une cigarette, boit du café au lait et refuse d'ouvrir le cercueil de sa mère.",
        usability: "Scène matricielle prouvant le refus de la comédie des conventions de deuil hypocrites."
      },
      {
        title: "Le meurtre sur la plage",
        summary: "Quatre coups tirés après une première balle sous la brûlure du soleil algérien.",
        usability: "Illustration du geste involontaire et absurde : l'homme agi par la matière plutôt que par une volonté criminelle préméditée."
      },
      {
        title: "La révolte contre l'aumônier et l'apaisement final",
        summary: "Meursault saisit le prêtre au collet pour refuser l'illusion divine et s'ouvre à la « tendre indifférence du monde ».",
        usability: "Sommet philosophique de la révolte absurde : le courage d'assumer son destin terrestre sans transcendance consolatrice."
      }
    ],
    comparisons: [
      {
        author: "Franz Kafka",
        work: "Le Procès (1925)",
        reason: "Parenté sur l'engrenage absurde et inhumain d'un appareil judiciaire jugeant un accusé désemparé."
      },
      {
        author: "Jean-Paul Sartre",
        work: "La Nausée (1938)",
        reason: "Confrontation avec la contingence nue de l'existence et l'inauthenticité des 'salauds' bourgeois."
      },
      {
        author: "Ahmadou Kourouma",
        work: "Les Soleils des Indépendances (1968)",
        reason: "Parallèle sur le personnage d'antihéros déclassé étranger aux règles du monde nouveau qui l'entoure."
      }
    ],
    arguments: [
      {
        category: "Axe Absurde & Condition Humaine",
        statement: "Le roman met à nu l'absurdité de la condition humaine en dépouillant l'existence des fictions rassurantes de la morale bourgeoise.",
        explanation: "Camus démontre que le monde est étranger à nos désirs d'harmonie et d'éternité. Meursault incarne la lucidité de celui qui refuse d'inventer des justifications surnaturelles ou des repentirs mensongers pour échapper à sa vérité terrestre.",
        quote: "Pour que tout soit consommé, pour que je me sente moins seul, il me restait à souhaiter qu'il y ait beaucoup de spectateurs le jour de mon exécution et qu'ils m'accueillent avec des cris de haine.",
        sceneOrExample: "Dans *L'Étranger*, l'explosion de colère de Meursault refusant les prières de l'aumônier dans sa cellule de condamné à mort.",
        dissertationLink: "À utiliser pour illustrer la fonction philosophique et existentielle du roman moderne.",
        alternateStatements: [
          "Le roman se fait laboratoire métaphysique pour confronter l'homme au silence déraisonnable de l'univers.",
          "Camus déconstruit les conventions sociales en montrant que l'attachement à la vérité nue conduit à la condamnation par les conformismes.",
          "L'antihéros camusien incarne le courage tragique d'assumer sa finitude sans le secours de consolations illusoires."
        ],
        alternateExplanations: [
          "L'écriture dépouillée de Camus traduit une rupture radicale avec les prétentions moralisatrices du roman traditionnel : le sens n'est pas donné, il est à vivre dans l'instant.",
          "Le procès de Meursault prouve que la société condamne moins le meurtre physique que le refus obstiné de jouer le jeu des hypocrisies rituelles.",
          "La révolte finale de Meursault affirme la valeur sacrée de la vie vécue : mourir lucide est la suprême victoire de l'homme sur l'absurdité du monde."
        ]
      }
    ]
  },

  {
    id: "sous-l-orage",
    title: "Sous l'orage",
    author: "Seydou Badian",
    genre: "Roman",
    publicationYear: "1957",
    literaryMovement: "Littérature Négro-Africaine (Tradition vs Modernité & Roman d'Éducation Civique)",
    aliases: [
      "sous l'orage", "sous l orage", "sous lorage", "seydou badian", "badian", "kany", "samou", "pere benfa", "tieman"
    ],
    context: "Publié en 1957 au Mali à la veille des indépendances, *Sous l'orage* (sous-titré *Kany*) est l'un des romans les plus étudiés dans les lycées d'Afrique francophone. Il aborde de manière frontale le conflit de générations né de la scolarisation occidentale face aux structures matrimoniales coutumières.",
    summaryAndScope: "Kany et Samou, deux jeunes lycéens amoureux, voient leur projet contrarié par le père Benfa, patriarche autoritaire qui décide de marier sa fille à Famagan, riche commerçant polygame illettré. Envoyée au village auprès de ses grands-parents pour être ramenée à la raison, Kany y redécouvre la richesse des valeurs ancestrales tandis que le sage père Tiéman tente une conciliation entre héritage et émancipation.",
    mainThemes: [
      "Le conflit de générations et le choc entre traditions coutumières et modernité scolaire",
      "Le mariage forcé face à la liberté du choix sentimental",
      "La réconciliation dialectique : enracinement culturel et ouverture au progrès",
      "La solidarité communautaire et le rôle de l'arbre à palabres",
      "Le rôle des aînés éclairés comme médiateurs sociaux"
    ],
    characters: [
      {
        name: "Kany",
        role: "Jeune lycéenne instruite, déchirée entre son amour pour Samou et le respect sacré dû à ses parents.",
        dissertationUtility: "Incarne la jeunesse africaine moderne cherchant à concilier son épanouissement personnel sans rompre brutalement avec sa famille."
      },
      {
        name: "Père Benfa",
        role: "Chef de famille autoritaire, gardien jaloux de la tradition et des prérogatives paternelles.",
        dissertationUtility: "Symbolise la peur légitime des anciens de voir leur autorité et leurs repères séculaires dissous par l'école des Blancs."
      },
      {
        name: "Père Tiéman / Sibiri",
        role: "Anciens lucides prônant l'écoute mutuelle et le dialogue à la palabre.",
        dissertationUtility: "Démontre que la sagesse africaine n'est pas obscurantiste mais capable d'évoluer par la palabre pacifique."
      }
    ],
    literaryDevices: [
      {
        device: "Usage méthodique des maximes et proverbes bambaras",
        explanation: "Les dialogues sont rythmés par des proverbes traditionnels qui condensent des siècles d'expérience humaine.",
        exampleText: "« L'homme n'est rien sans les autres ; il vient dans leurs mains et s'en va dans leurs mains. »"
      },
      {
        device: "Structure dialectique et palabre démocratique",
        explanation: "Chaque camp (les jeunes et les anciens) expose ses arguments avec dignité sans caricature manichéenne.",
        exampleText: "Les réunions familiales sous l'arbre à palabres débattant du sort des enfants scolarisés."
      }
    ],
    keyPassages: [
      {
        title: "La dispute entre Benfa et ses enfants scolarisés",
        summary: "Le père Benfa reproche aux jeunes instruits de mépriser les coutumes de leurs pères.",
        usability: "Illustration magistrale de l'incompréhension culturelle engendrée par l'école coloniale."
      },
      {
        title: "Le séjour initiatique de Kany au village traditionnel",
        summary: "Kany découvre la beauté du travail champêtre, la solidarité villageoise et la dignité des femmes rurales.",
        usability: "Démontre que l'instruction moderne ne doit pas engendrer le mépris de ses propres racines."
      }
    ],
    comparisons: [
      {
        author: "Cheikh Hamidou Kane",
        work: "L'Aventure ambiguë (1961)",
        reason: "Approfondissement philosophique et métaphysique du même dilemme entre l'école coranique et l'école occidentale."
      },
      {
        author: "Bernard Dadié",
        work: "Climbié (1956)",
        reason: "Parcours autobiographique d'un jeune scolarisé confronté aux préjugés de son milieu et de l'administration."
      }
    ],
    arguments: [
      {
        category: "Axe Médiation Culturelle & Dialogue des Générations",
        statement: "Le roman prône la conciliation harmonieuse entre les valeurs pérennes de la tradition et les exigences légitimes de la modernité.",
        explanation: "Seydou Badian refuse la rupture suicidaire tout autant que le conservatisme aveugle. Il démontre que l'Afrique doit assimiler le progrès scientifique et la liberté individuelle sans renoncer à la solidarité communautaire et au respect des aînés.",
        quote: "L'homme n'est rien sans les autres ; il vient dans leurs mains et s'en va dans leurs mains.",
        sceneOrExample: "Dans *Sous l'orage*, la résolution pacifique du conflit matrimonial grâce à la médiation des anciens éclairés.",
        dissertationLink: "Indispensable pour les sujets de dissertation sur tradition et modernité, culture et progrès social.",
        alternateStatements: [
          "L'œuvre romanesque devient le lieu d'un débat civique fécond sur l'avenir et l'identité des sociétés en transition.",
          "Le roman démontre que le véritable progrès n'est pas négation des racines ancestrales mais fécondation réciproque.",
          "Seydou Badian érige la palabre africaine en modèle universel de résolution pacifique des conflits de générations."
        ],
        alternateExplanations: [
          "En refusant le manichéisme, l'auteur donne une voix équitable aux craintes des parents tout en validant les aspirations légitimes de la jeunesse.",
          "Le séjour au village permet à l'héroïne de dépasser l'arrogance intellectuelle pour réconcilier son savoir moderne avec la sagesse ancestrale.",
          "Le roman affirme que la cohésion sociale repose sur la solidarité organique : l'individualisme forcené détruit la fraternité humaine sans laquelle aucun bonheur n'est durable."
        ]
      }
    ]
  },

  {
    id: "l-aventure-ambigue",
    title: "L'Aventure ambiguë",
    author: "Cheikh Hamidou Kane",
    genre: "Roman",
    publicationYear: "1961",
    literaryMovement: "Roman Philosophique & Déchirement Spirituel Négro-Africain",
    aliases: [
      "l'aventure ambigue", "l aventure ambigue", "laventure ambigue", "cheikh hamidou kane", "kane", "samba diallo", "maitre des diallobe", "grande royale"
    ],
    context: "Publié en 1961 au Sénégal, Grand Prix littéraire d'Afrique noire en 1962. Chef-d'œuvre de la littérature universelle, le roman transcende le récit d'apprentissage pour devenir un grand dialogue philosophique et métaphysique entre l'Orient spirituel (l'islam des Diallobé) et l'Occident rationaliste et matérialiste.",
    summaryAndScope: "Samba Diallo, brillant élève de l'école coranique sous la férule ascétique du Maître Thierno, est contraint par sa tante, la Grande Royale, d'entrer à l'école des Blancs pour « apprendre à lier le bois au bois ». Parti étudier la philosophie à Paris, il s'y sent écartelé, ayant perdu sa foi originelle sans pouvoir adhérer au matérialisme occidental. Revenu au pays, il est poignardé par le Fou et rejoint la paix de l'Être dans la mort.",
    mainThemes: [
      "Le déchirement culturel et l'angoisse de l'assimilation (« Nous sommes devenus des hybrides »)",
      "L'affrontement entre la spiritualité mystique et le triomphe de la technique matérialiste",
      "Le sacrifice nécessaire des traditions pour la survie politique et matérielle du peuple",
      "La nostalgie de l'unité perdue et la quête métaphysique de Dieu",
      "La mort comme réconciliation mystique suprême"
    ],
    characters: [
      {
        name: "Samba Diallo",
        role: "Jeune aristocrate peul d'une foi ardente, déchiré entre la pureté spirituelle du Foyer des Diallobé et la rationalité occidentale.",
        dissertationUtility: "Figure universelle du métis culturel et spirituel supplicié, incapable de survivre à la fragmentation de son âme."
      },
      {
        name: "La Grande Royale",
        role: "Femme d'État lucide et pragmatique, cheffe des Diallobé, ordonnant l'envoi des enfants à l'école étrangère.",
        dissertationUtility: "Incarne la lucidité politique impitoyable : accepter la blessure de l'école occidentale pour ne pas être anéanti militairement et matériellement."
      },
      {
        name: "Le Maître des Diallobé (Thierno)",
        role: "Guide spirituel ascétique, enseignant le mépris du corps et l'amour absolu de Dieu.",
        dissertationUtility: "Symbole de la pureté mystique intemporelle pour qui l'Occident triomphant prépare la mort de Dieu et de l'âme."
      }
    ],
    literaryDevices: [
      {
        device: "Dialogue philosophique platonicien",
        explanation: "Les échanges entre Samba, son père et le philosophe Paul Lacroix relèvent de la disputatio métaphysique de haut vol.",
        exampleText: "Les débats passionnés sur le sens du progrès technique et le silence de Dieu."
      },
      {
        device: "Chant mystique et prose poétique soufie",
        explanation: "La conclusion du roman abandonne la narration pour une polyphonie mystique célébrant la fusion avec l'Éternel.",
        exampleText: "« Tu m'as manqué, je viens... Tu m'as ouvert ton sein, je m'y abîme. »"
      }
    ],
    keyPassages: [
      {
        title: "Le discours de la Grande Royale",
        summary: "La Grande Royale rassemble le peuple pour lui ordonner d'envoyer leurs enfants à l'école des colons : « L'école où je pousse nos enfants tuera en eux ce qu'aujourd'hui nous aimons... Mais pour vaincre, il faut apprendre chez eux l'art de vaincre sans avoir raison. »",
        usability: "Morceau d'éloquence politique et pédagogique majeur sur le sacrifice consenti pour la survie historique d'un peuple."
      },
      {
        title: "Le dialogue entre Samba Diallo et Paul Lacroix à Paris",
        summary: "Samba critique la technique occidentale qui rend l'homme maître des objets mais le sépare du mystère de la vie.",
        usability: "Illustration décisive pour les sujets croisant science, technique, religion et valeurs spirituelles."
      }
    ],
    comparisons: [
      {
        author: "Platon",
        work: "Phédon",
        reason: "Méditation sur la libération de l'âme affranchie des servitudes corporelles par la contemplation philosophique."
      },
      {
        author: "Albert Camus",
        work: "Le Mythe de Sisyphe (1942)",
        reason: "Confrontation avec la perte des certitudes transcendantes dans un monde dédivinisé."
      }
    ],
    arguments: [
      {
        category: "Axe Roman Philosophique & Tragédie Métaphysique",
        statement: "Le roman s'élève au-delà de la chronique coloniale pour interroger le péril de la déshumanisation matérialiste de la civilisation moderne.",
        explanation: "Cheikh Hamidou Kane démontre que la véritable tragédie de la colonisation n'est pas seulement économique ou militaire, mais spirituelle : en imposant son culte de la rentabilité technique, l'Occident étouffe le recueillement de l'âme et la ferveur mystique de l'homme.",
        quote: "L'ère des destins singuliers est révolue. Mais en apprenant leur art de vaincre sans avoir raison, prendrons-nous le risque de perdre notre âme ?",
        sceneOrExample: "Dans *L'Aventure ambiguë*, l'exil intérieur de Samba Diallo errant sur les quais de Seine à Paris, submergé par le vide spirituel des foules modernes.",
        dissertationLink: "À mobiliser pour démontrer que le grand roman africain porte une méditation philosophique universelle sur la modernité.",
        alternateStatements: [
          "Le roman devient le théâtre d'une quête métaphysique poignante où se joue le salut de la conscience humaine.",
          "L'œuvre de Kane interroge le prix existentiel que l'humanité paie au triomphe sans âme de la techno-science.",
          "Le destin de Samba Diallo symbolise l'écartèlement tragique de l'homme moderne privé d'absolu."
        ],
        alternateExplanations: [
          "Kane refuse de réduire la rencontre des cultures à un enrichissement facile : elle est une aventure ambiguë, porteuse de promesses mais aussi de déracinement irréparable.",
          "Le dialogue avec Paul Lacroix révèle que la maîtrise matérielle du monde ne comble pas l'angoisse de la mort : sans foi spirituelle, la civilisation s'autodétruit.",
          "La conclusion mystique du roman prouve que l'art littéraire peut atteindre la plus haute contemplation métaphysique en réconciliant l'homme avec l'Être."
        ]
      }
    ]
  },

  {
    id: "cahier-d-un-retour-au-pays-natal",
    title: "Cahier d'un retour au pays natal",
    author: "Aimé Césaire",
    genre: "Poésie",
    publicationYear: "1939",
    literaryMovement: "La Négritude (Poésie Engagée & Surréalisme Révolutionnaire)",
    aliases: [
      "cahier d'un retour au pays natal", "cahier d un retour au pays natal", "cahier dun retour",
      "cesaire", "aimé césaire", "aime cesaire", "negritude", "négritude"
    ],
    context: "Publié en 1939 dans la revue *Volontés*, texte fondateur du concept de 'Négritude' forgé par Césaire avec Senghor et Damas. Écrit à la veille de son retour en Martinique, le poème est salué par André Breton comme 'le plus grand monument lyrique de ce temps'.",
    summaryAndScope: "Long poème en prose et en vers libres où Césaire entreprend un voyage initiatique et politique : constat douloureux de la misère matérielle et de la léthargie morale de la Martinique sous le joug colonial, revendication fière de l'identité noire ('ma négritude n'est pas une pierre...'), acceptation de l'histoire tragique de la traite et sursaut révolutionnaire universel pour la fraternité des peuples.",
    mainThemes: [
      "La naissance et la définition poétique de la Négritude",
      "La dénonciation virulente de l'aliénation coloniale et de la soumission ('le bon nègre')",
      "Le poète comme porte-voix des opprimés ('la bouche des malheurs qui n'ont point de bouche')",
      "La subversion libératrice du verbe français par le surréalisme",
      "L'universalisme humaniste : la conquête de la liberté pour tous les proscrits de la terre"
    ],
    characters: [
      {
        name: "Le Poète / Prophète",
        role: "Voix lyrique révoltée refusant la lâcheté, embrassant le destin de son peuple pour l'éveiller à la dignité debout.",
        dissertationUtility: "Incarne la vocation suprême du poète engagé : éveiller les consciences engourdies par la servitude."
      },
      {
        name: "Le vieux Nègre dans le tramway",
        role: "Homme noir humilié, décharné et passif rencontré dans un tramway parisien, provoquant d'abord la honte du poète avant son repentir éthique.",
        dissertationUtility: "Révèle le piège de la mauvaise conscience bourgeoise et la nécessité d'assumer sans fard la misère de ses frères opprimés."
      }
    ],
    literaryDevices: [
      {
        device: "Verbe incandescent et fureur surréaliste",
        explanation: "Accumulation d'images fulgurantes, anaphores puissantes et néologismes poétiques ('négritude').",
        exampleText: "« Ma négritude n'est point un crachat de chair morte sur le cœur du monde. »"
      },
      {
        device: "Anaphores incantatoires et rythme de transe",
        explanation: "Répétition obsédante de formules au départ de chaque strophe pour créer une montée dramatique irréversible.",
        exampleText: "« Au bout du petit matin... »"
      }
    ],
    keyPassages: [
      {
        title: "La prise de parole pour les sans-voix",
        summary: "Le poète refuse la poésie pure pour embrasser la souffrance collective : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix la liberté de celles qui s'affaissent au cachot du désespoir. »",
        usability: "Citation matricielle indispensable pour toute dissertation sur la fonction engagée, civique et militante de la poésie."
      },
      {
        title: "L'éloge des peuples qui n'ont rien conquis",
        summary: "Césaire valorise la communion des peuples noirs avec le cosmos : « Éia pour ceux qui n'ont jamais rien inventé / pour ceux qui n'ont jamais rien exploré... »",
        usability: "Preuve poétique que la grandeur d'une civilisation ne se mesure pas à ses conquêtes militaires destructrices mais à son humanité."
      }
    ],
    comparisons: [
      {
        author: "David Diop",
        work: "Coups de pilon (1956)",
        reason: "Poésie de combat anticoloniale directe et martiale (poème *Afrique*)."
      },
      {
        author: "Léopold Sédar Senghor",
        work: "Chants d'ombre (1945)",
        reason: "Autre pôle de la Négritude, plus mélodieux, fondé sur la réconciliation et le dialogue des cultures."
      },
      {
        author: "Victor Hugo",
        work: "Les Châtiments (1853)",
        reason: "Tradition de la parole poétique fustigeant la tyrannie et prophétisant la liberté des peuples."
      }
    ],
    arguments: [
      {
        category: "Axe Poésie Militante & Éveil des Consciences",
        statement: "La poésie n'est pas un ornement gratuit mais une arme de combat spirituel pour réhabiliter la dignité des opprimés.",
        explanation: "Césaire arrache le poème aux salons feutrés de l'art pour l'art : le verbe devient incendie et prise de conscience politique, pulvérisant les complexes d'infériorité séculaires inculqués par la colonisation.",
        quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir.",
        sceneOrExample: "Dans *Cahier d'un retour au pays natal*, le refus solennel de la poésie pure au profit de l'immersion totale dans les tourments de la Martinique.",
        dissertationLink: "À mobiliser pour toute question interrogeant la mission sociale, militante ou politique du poète.",
        alternateStatements: [
          "Le poète s'érige en guide civique et éthique qui prête sa voix souveraine aux peuples bâillonnés par l'Histoire.",
          "L'écriture poétique transcende le plaisir formel pour devenir l'instrument d'une révolution identitaire et humaine.",
          "Césaire démontre que la véritable poésie naît de l'indignation sacrée face à l'injustice et à la dégradation humaine."
        ],
        alternateExplanations: [
          "Pour Césaire, composer des vers dans une société asservie constitue une désertion si le langage ne se met pas au service de la libération collective.",
          "Le *Cahier* prouve que la force du lyrisme engagé ne nuit jamais à la perfection artistique : l'exigence politique décuple l'inventivité verbale.",
          "En nommant avec fureur ce que l'histoire coloniale a refoulé, le poème accomplit une véritable résurrection morale pour l'humanité entière."
        ]
      }
    ]
  },

  {
    id: "madame-bovary",
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    genre: "Roman",
    publicationYear: "1857",
    literaryMovement: "Le Réalisme (Rupture avec l'Idéalisme Romantique)",
    aliases: [
      "madame bovary", "flaubert", "gustave flaubert", "emma bovary", "bovarysme", "charles bovary"
    ],
    context: "Publié en 1857 après avoir subi un procès retentissant pour outrage à la morale publique et aux bonnes mœurs (dont Flaubert sort acquitté). Le roman fonde la modernité narrative par son exigence d'impersonnalité, son culte du mot juste et sa démythification sans pitié des chimères romantiques.",
    summaryAndScope: "Emma Rouault, fille de paysan élevée au couvent où elle s'est gavée de romans d'amour sentimentaux, épouse Charles Bovary, brave médecin de campagne médiocre. Déçue par la fadeur du mariage bourgeois en Normandie, elle cherche l'exaltation dans l'adultère avec Rodolphe puis Léon, s'endette lourdement auprès de l'usurier Lheureux, et finit par s'empoisonner à l'arsenic face à la ruine et au vide de ses rêves.",
    mainThemes: [
      "Le bovarysme : décalage tragique entre les fantasmes imaginaires nourris par la lecture et la médiocrité étouffante du réel",
      "La critique impitoyable de la bêtise bourgeoise (incarnée par le pharmacien Homais)",
      "L'impersonnalité narrative et l'art du point de vue (focalisation interne et discours indirect libre)",
      "La tyrannie de la société marchande, de la dette et du déclassement provincial"
    ],
    characters: [
      {
        name: "Emma Bovary",
        role: "Héroïne romanesque hantée par la quête d'un amour idéal, incapable d'accepter la platitude du réel.",
        dissertationUtility: "Figure canonique de la victime des illusions littéraires et de l'insatisfaction existentielle tragique."
      },
      {
        name: "Charles Bovary",
        role: "Époux d'une bonté passive, dénué d'ambition et de génie, incapable de comprendre le mal-être de sa femme.",
        dissertationUtility: "Symbolise la médiocrité rassurante et ennuyeuse du quotidien bourgeois."
      },
      {
        name: "Monsieur Homais",
        role: "Pharmacien suffisant, bavard, anticlérical et arriviste, triomphant à la fin du roman avec la légion d'honneur.",
        dissertationUtility: "Incarnation indépassable de la bêtise satisfaite et du scientisme bourgeois du XIXe siècle."
      }
    ],
    literaryDevices: [
      {
        device: "Le discours indirect libre",
        explanation: "Flaubert fusionne la voix du narrateur et la subjectivité d'Emma sans marque de subordination.",
        exampleText: "« Elle se demandait s'il n'y aurait pas eu moyen, par d'autres combinaisons du hasard, de rencontrer un autre homme... »"
      },
      {
        device: "Le contrepoint ironique (scène des comices agricoles)",
        explanation: "Superposition alternée des discours officiels pompeux sur les engrais et des déclarations d'amour séductrices de Rodolphe.",
        exampleText: "Les tirades de séduction entrecoupées par les cris de « Des fumiers ! » décernés aux lauréats agricoles."
      }
    ],
    keyPassages: [
      {
        title: "Les Comices agricoles d'Yonville",
        summary: "Rodolphe séduit Emma dans la salle de la mairie pendant qu'en bas le conseiller préfectoral vante l'agriculture.",
        usability: "Chef-d'œuvre de satire polyphonique démontrant l'art flaubertien du montage ironique."
      },
      {
        title: "L'agonie d'Emma après l'arsenic",
        summary: "Description clinique, médicale et affreuse des souffrances physiques de l'empoisonnement.",
        usability: "Preuve irréfutable du refus de l'idéalisation romantique : le réalisme peint la laideur crue de la mort sans fard."
      }
    ],
    comparisons: [
      {
        author: "Honoré de Balzac",
        work: "Le Père Goriot (1835)",
        reason: "Autre monument réaliste disséquant les ambitions provinciales et la corruption parisienne."
      },
      {
        author: "Mariama Bâ",
        work: "Une si longue lettre (1979)",
        reason: "Contraste entre l'impasse narcissique d'Emma et la dignité morale courageuse de Ramatoulaye."
      }
    ],
    arguments: [
      {
        category: "Axe Réalisme Psychologique & Critique des Illusions",
        statement: "Le roman dissèque sans complaisance les ravages des chimères imaginaires confrontées à la prose impitoyable du quotidien.",
        explanation: "Flaubert invente le bovarysme pour montrer comment la mauvaise littérature peut aliéner une conscience en lui faisant mépriser la réalité vécue. L'enquête réaliste démasque la tragique vanité des passions idéalisées.",
        quote: "Elle retrouvait dans l'adultère toutes les platitudes du mariage.",
        sceneOrExample: "Dans *Madame Bovary*, la déconvenue progressive d'Emma constatant que ses amants Rodolphe et Léon finissent par lui débiter les mêmes clichés fades que son mari.",
        dissertationLink: "À utiliser pour soutenir l'axe de la lucidité psychologique, de l'enquête clinique et de la démythification du roman.",
        alternateStatements: [
          "Le roman opère une déconstruction méthodique des idéaux romanesques au nom de la vérité nue des comportements humains.",
          "L'écrivain explore la tragédie de l'insatisfaction moderne nourrie par le décalage entre rêves et réalité matérielle.",
          "Flaubert élève la peinture du quotidien provincial au rang d'une impitoyable réflexion sur la médiocrité universelle."
        ],
        alternateExplanations: [
          "En refusant de juger moralement son héroïne, Flaubert laisse le lecteur face à la cruauté objective des faits : c'est le style qui crée la distance critique.",
          "Le destin d'Emma prouve que la littérature peut devenir un poison mortel lorsqu'elle enferme l'individu dans des attentes chimériques irréalisables.",
          "Le réalisme flaubertien ne se résume pas à l'observation passive : il est une leçon suprême de désenchantement et de rigueur esthétique."
        ]
      }
    ]
  },

  {
    id: "germinal",
    title: "Germinal",
    author: "Émile Zola",
    genre: "Roman",
    publicationYear: "1885",
    literaryMovement: "Le Naturalisme (Roman Expérimental & Épopée Sociale)",
    aliases: [
      "germinal", "zola", "emile zola", "étienne lantier", "etienne lantier", "les maheu", "le voreux"
    ],
    context: "Publié en 1885, treizième volume des *Rougon-Macquart*. Zola descend lui-même au fond de la fosse à Anzin lors de la grande grève des mineurs de 1884 pour enquêter sur le terrain. L'œuvre allie la rigueur de l'enquête documentaire à la puissance du mythe épique.",
    summaryAndScope: "Étienne Lantier, machineur au chômage, est embauché à la fosse du Voreux dans le bassin minier du Nord. Confronté à la misère effroyable des familles de mineurs (les Maheu), aux cadences inhumaines et aux baisses de salaires, il organise la résistance ouvrière et déclenche une grève générale. Malgré la répression sanglante par l'armée, le sabotage de Souvarine et la défaite apparente, le roman se clôt sur la germination prophétique des luttes futures.",
    mainThemes: [
      "La lutte des classes et l'affrontement titanesque entre le Travail ouvrier et le Capital anonyme",
      "Le déterminisme du milieu, de l'hérédité et de la misère physiologique",
      "La bête humaine : la dégradation bestiale de l'homme par l'exploitation minière",
      "L'éveil de la conscience syndicale et politique du prolétariat",
      "L'espérance messianique d'une révolution sociale inéluctable (germination)"
    ],
    characters: [
      {
        name: "Étienne Lantier",
        role: "Ouvrier instruit, leader syndical idéaliste menant la grève des mineurs.",
        dissertationUtility: "Figure de l'éveilleur de conscience guidant le peuple vers la conquête de ses droits sociaux."
      },
      {
        name: "La Maheude",
        role: "Mère courage de sept enfants, incarnant la dignité paysanne et ouvrière broyée par la faim.",
        dissertationUtility: "Symbole de la souffrance des familles de prolétaires et de la conversion inébranlable à la justice sociale."
      },
      {
        name: "Le Voreux",
        role: "Puits de mine personnifié sous la forme d'un monstre dévorateur de chair humaine.",
        dissertationUtility: "Exemple parfait de la transfiguration mythique du réel par l'écriture naturaliste épique."
      }
    ],
    literaryDevices: [
      {
        device: "Personnification épique et mythification du décor",
        explanation: "La mine est décrite comme un monstre vorace qui avale et digère des générations d'ouvriers.",
        exampleText: "« Le Voreux, accroupi dans son creux, respirait d'une haleine plus lente et plus profonde, comme repu de chair humaine. »"
      },
      {
        device: "Scènes de foule et polyphonie insurrectionnelle",
        explanation: "Zola peint le soulèvement des mineurs comme une force tellurique irrésistible de la nature.",
        exampleText: "Le défilé des mineurs affamés hurlant « Du pain ! Du pain ! » sous les yeux terrifiés des bourgeois."
      }
    ],
    keyPassages: [
      {
        title: "La marche des grévistes affamés",
        summary: "Cinq cents mineurs en haillons envahissent les routes de campagne en chantant la révolte.",
        usability: "Illustration magistrale de l'épopée révolutionnaire et de la prise de parole collective du prolétariat."
      },
      {
        title: "La conclusion prophétique : les semailles futures",
        summary: "Étienne quitte la mine au printemps, entendant sous ses pas les coups de pioche des mineurs qui germent pour les récoltes du siècle futur.",
        usability: "Image universelle de l'espérance sociale indomptable qui donne son titre au roman."
      }
    ],
    comparisons: [
      {
        author: "Ousmane Sembène",
        work: "Les Bouts de bois de Dieu (1960)",
        reason: "Parallèle direct avec la grève des cheminots du Dakar-Niger et la solidarité ouvrière collective."
      },
      {
        author: "Victor Hugo",
        work: "Les Misérables (1862)",
        reason: "Plaidoyer social contre la misère, avec la même compassion pour les proscrits mais une méthode scientifique d'enquête."
      }
    ],
    arguments: [
      {
        category: "Axe Roman Social & Engagement Révolutionnaire",
        statement: "Le roman naturaliste se fait l'avocat passionné des travailleurs en dévoilant les injustices structurelles du capitalisme.",
        explanation: "Zola ne se contente pas de raconter une histoire : il utilise le roman comme un dossier d'instruction expérimental pour forcer la société à reconnaître les droits imprescriptibles du prolétariat à la dignité et au partage équitable des richesses.",
        quote: "Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur.",
        sceneOrExample: "Dans *Germinal*, la grève héroïque des mineurs du Voreux bravant la faim et les fusils pour réclamer un salaire décent.",
        dissertationLink: "Indispensable pour défendre la thèse de l'utilité politique, de l'engagement civique et de la dénonciation sociale du roman.",
        alternateStatements: [
          "Le roman naturaliste met la force du récit au service de l'émancipation des classes laborieuses.",
          "Zola transforme le document sociologique en une épopée grandiose de la révolte des exploités.",
          "L'œuvre romanesque démontre que les luttes sociales ouvrent la voie au progrès démocratique inéluctable."
        ],
        alternateExplanations: [
          "En descendant au fond du puits avec les ouvriers, Zola confère à sa dénonciation une véracité scientifique et morale irréfutable.",
          "Le roman prouve que l'art ne trahit pas sa mission esthétique en prenant le parti des opprimés : il atteint au contraire le sublime épique.",
          "La métaphore finale de la germination affirme avec force que les sacrifices des travailleurs d'aujourd'hui préparent la libération de l'humanité de demain."
        ]
      }
    ]
  },

  {
    id: "antigone",
    title: "Antigone",
    author: "Jean Anouilh",
    genre: "Théâtre",
    publicationYear: "1944",
    literaryMovement: "Théâtre Moderne & Réécriture Mytho-Tragique",
    aliases: [
      "antigone", "anouilh", "jean anouilh", "creon", "créon", "hemon", "hémon", "ismene", "ismène"
    ],
    context: "Créée à Paris en février 1944 sous l'Occupation allemande au théâtre de l'Atelier. Réécriture moderne du mythe sophocléen, la pièce fut lue par la Résistance comme un appel courageux à dire « non » à l'oppresseur, tandis que la censure allemande crut y voir une justification de l'ordre imposé par Créon.",
    summaryAndScope: "Après la guerre fratricide entre Étéocle et Polynice, Créon décrète que le cadavre du traître Polynice sera laissé sans sépulture aux chiens et aux vautours. Antigone brave l'interdit par fidélité filiale et pureté morale. Capturée, elle s'oppose dans un affrontement dialectique magistral à son oncle Créon, refusant les compromissions du petit bonheur bourgeois pour choisir la mort debout.",
    mainThemes: [
      "Le refus héroïque du compromis et la pureté intransigeante de l'enfance : le courage de dire « NON »",
      "L'opposition irréconciliable entre la conscience morale et les impératifs froids de la raison d'État",
      "La fatalité tragique moderne dénuée de transcendance divine",
      "La critique du conformisme bourgeois et du bonheur tiède",
      "La solitude du pouvoir et la tragédie du devoir politique ingrat"
    ],
    characters: [
      {
        name: "Antigone",
        role: "Jeune fille frêle, noiraude, rebelle sublime refusant de grandir pour ne pas accepter la laideur du monde adulte.",
        dissertationUtility: "Symbole universel de la résistance éthique intransigeante face à l'arbitraire et au compromis moral avilissant."
      },
      {
        name: "Créon",
        role: "Roi pragmatique de Thèbes, travailleur politique fatigué qui a dit « oui » au pouvoir pour maintenir l'ordre public.",
        dissertationUtility: "Incarne la raison d'État réaliste, convaincu que gouverner exige de se salir les mains pour éviter l'anarchie."
      },
      {
        name: "Le Chœur / Le Prologue",
        role: "Instance lucide commentant l'action en habits modernes, explicitant la mécanique inexorable de la tragédie.",
        dissertationUtility: "Démontre le renouvellement formel du théâtre moderne par la distanciation et la désacralisation des conventions."
      }
    ],
    literaryDevices: [
      {
        device: "Anachronisme délibéré et langage familier moderne",
        explanation: "Anouilh dépouille le mythe antique de ses toges pour introduire des cartes à jouer, des fusils et un langage familier.",
        exampleText: "Les gardes parlent de belote, de prime de fin de mois et de gnole."
      },
      {
        device: "L'affrontement dialectique (le grand duel Antigone-Créon)",
        explanation: "Créon tente d'abord de sauver sa nièce par des arguments de bon sens avant que le débat n'atteigne une hauteur métaphysique.",
        exampleText: "« Vous me dégoûtez tous avec votre bonheur ! Avec votre vie qu'il faut aimer coûte que coûte. »"
      }
    ],
    keyPassages: [
      {
        title: "La tirade du Chœur sur la mécanique de la tragédie",
        summary: "Le Chœur explique la différence entre le drame bourgeois où l'on débat et la tragédie où tout est noué d'avance : « C'est propre, la tragédie. C'est reposant, parce qu'on sait qu'il n'y a plus d'espoir... Le ressort est bandé. »",
        usability: "Texte théorique fondamental pour toute dissertation sur l'essence et la fonction de la tragédie théâtrale."
      },
      {
        title: "Le refus du bonheur bourgeois par Antigone",
        summary: "Quand Créon lui promet le mariage et le bonheur domestique, Antigone explose de révolte : « Quel sera-t-il, mon bonheur ? Quelles pauvretés faudra-t-il que je fasse pour le grappiller ? »",
        usability: "Illustration poignante de l'exigence morale absolue qui préfère la mort à la soumission tiède."
      }
    ],
    comparisons: [
      {
        author: "Sophocle",
        work: "Antigone (-441 av. J.-C.)",
        reason: "Le modèle antique original fondé sur le respect des lois sacrées des dieux vs les édits mortels."
      },
      {
        author: "Albert Camus",
        work: "Les Justes (1949)",
        reason: "Le débat sur la pureté morale de l'action terroriste et le refus de sacrifier des enfants innocents."
      }
    ],
    arguments: [
      {
        category: "Axe Révolte Éthique & Refus du Pouvoir",
        statement: "Le théâtre tragique donne corps à l'insoumission héroïque de la conscience individuelle face à la tyrannie de la raison d'État.",
        explanation: "À travers la confrontation entre Antigone et Créon, Anouilh montre que la grandeur de l'homme réside dans sa capacité spirituelle à dire 'Non' aux compromissions indignes, même lorsque ce refus implique la certitude de la mort.",
        quote: "Je ne veux pas comprendre. Moi, je suis là pour vous dire non et pour mourir.",
        sceneOrExample: "Dans *Antigone* d'Anouilh, la confrontation suprême où la jeune fille balaie les promesses de bonheur bourgeois de Créon.",
        dissertationLink: "À utiliser pour illustrer la fonction cathartique, morale et politique du théâtre tragique.",
        alternateStatements: [
          "La scène théâtrale devient l'arène universelle où la pureté morale défie la violence politique de l'ordre établi.",
          "La tragédie moderne réinvente le mythe antique pour faire entendre le cri inconditionnel de la liberté contre les compromis serviles.",
          "Anouilh prouve que le théâtre purifie l'âme du spectateur en l'élevant au-dessus des lâchetés du quotidien."
        ],
        alternateExplanations: [
          "Le duel dialectique entre Créon et sa nièce transcende le conflit familial : il oppose l'éthique de conviction à l'éthique de responsabilité politique.",
          "Antigone choisit la mort pour ne pas voir son idéal flétri par le temps : sa fin tragique est un hymne immortel à la pureté de la jeunesse.",
          "La pièce rappelle au public de toute époque que la dignité humaine commence à l'instant précis où l'on refuse d'obéir à des ordres iniques."
        ]
      }
    ]
  }
];

/**
 * Recherche une œuvre ou un auteur littéraire étudié
 */
export function findStudiedFrenchWork(query: string): FrenchWorkStudy | null {
  const qNorm = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  for (const work of FRENCH_STUDIED_WORKS) {
    if (work.aliases.some(alias => {
      const aNorm = alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return qNorm.includes(aNorm) || aNorm.includes(qNorm);
    })) {
      return work;
    }
  }
  return null;
}

/**
 * Construit un résultat de recherche certifié et différencié pour une œuvre littéraire étudiée au Bac
 */
export function buildFrenchWorkCourseResult(params: {
  work: FrenchWorkStudy;
  query: string;
  variantIndex?: number;
  userSeed?: string;
  appendVariants?: boolean;
}): CourseSearchResult {
  const { work, query, variantIndex = 0, userSeed, appendVariants = false } = params;

  const totalVariants = work.arguments.length || 3;
  const userSeedHash = userSeed ? hashStringToInt(userSeed) : 0;
  const safeIdx = (Math.abs(variantIndex) + (userSeed ? userSeedHash % totalVariants : 0)) % totalVariants;
  const effectiveSeed = userSeed || `${query}_v${variantIndex}_${Date.now()}`;

  // Récupération des arguments : ordonnés selon safeIdx pour que chaque élève voie un angle différent d'abord
  const orderedArgs = [...work.arguments];
  if (orderedArgs.length > 1) {
    const rotated = orderedArgs.slice(safeIdx).concat(orderedArgs.slice(0, safeIdx));
    orderedArgs.length = 0;
    orderedArgs.push(...rotated);
  }

  // Si appendVariants est activé (clic sur "Voir plus"), on inclut tous les arguments disponibles
  const concepts: CourseConceptFormula[] = [];

  orderedArgs.forEach((argData, idx) => {
    // Différenciation de formulation de l'argument et de son explication
    let statement = argData.statement;
    let explanation = argData.explanation;

    const seedNum = hashStringToInt(`${effectiveSeed}_arg${idx}`);

    if (argData.alternateStatements && argData.alternateStatements.length > 0) {
      const sIdx = (seedNum + idx) % argData.alternateStatements.length;
      statement = argData.alternateStatements[sIdx];
    }
    if (argData.alternateExplanations && argData.alternateExplanations.length > 0) {
      const eIdx = (seedNum * 2 + idx + 1) % argData.alternateExplanations.length;
      explanation = argData.alternateExplanations[eIdx];
    }

    concepts.push({
      name: `Argument #${idx + 1} [${argData.category}] : ${statement}`,
      formulaOrRule: `Auteur : ${work.author} | Œuvre : *${work.title}* | Citation : « ${argData.quote} »`,
      explanation: `${explanation}\n\nExemple textuel : ${argData.sceneOrExample}`,
      contextOrApplication: `${argData.dissertationLink} Modèle d'insertion au Bac : Comme l'illustre ${work.author} dans *${work.title}*, ${statement.toLowerCase().replace(/\.$/, '')}. En effet, ${explanation}`
    });
  });

  // Section Personnages Clés & Rôles dans la Dissertation
  work.characters.forEach((char, cIdx) => {
    concepts.push({
      name: `Personnage & Ressort Dramatique #${cIdx + 1} : ${char.name}`,
      formulaOrRule: `Rôle dans l'œuvre : ${char.role}`,
      explanation: `Portée dans la démonstration de dissertation : ${char.dissertationUtility}`,
      contextOrApplication: `À mobiliser comme preuve concrète et exemple incarné pour donner du relief à votre paragraphe argumentatif.`
    });
  });

  // Section Procédés Littéraires & Stylistique
  work.literaryDevices.forEach((dev, dIdx) => {
    concepts.push({
      name: `Procédé Littéraire & Style #${dIdx + 1} : ${dev.device}`,
      formulaOrRule: `Illustration textuelle : ${dev.exampleText}`,
      explanation: dev.explanation,
      contextOrApplication: `À mobiliser dans les dissertations portant sur le style, la langue de l'écrivain ou le commentaire composé.`
    });
  });

  // Section Scènes et Passages Clés
  work.keyPassages.forEach((pas, pIdx) => {
    concepts.push({
      name: `Scène Clé d'Exemple #${pIdx + 1} : ${pas.title}`,
      formulaOrRule: `Événement / Intrigue : ${pas.summary}`,
      explanation: `Exploitation au Bac : ${pas.usability}`,
      contextOrApplication: `Exemple précis à raconter brièvement (2 lignes) pour valider une idée directrice.`
    });
  });

  // Section Rapprochements avec d'autres Auteurs
  work.comparisons.forEach((comp, kIdx) => {
    concepts.push({
      name: `Rapprochement Littéraire #${kIdx + 1} : ${comp.author} (*${comp.work}*)`,
      formulaOrRule: `Confrontation d'œuvres : *${work.title}* (${work.author}) ⟷ *${comp.work}* (${comp.author})`,
      explanation: comp.reason,
      contextOrApplication: `Idéal pour enrichir un paragraphe de dissertation en ouvrant sur d'autres références canoniques du programme.`
    });
  });

  const methodSteps: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: `Cadrer l'œuvre « ${work.title} » dans son contexte littéraire`,
      whatToDo: `Situer l'œuvre (${work.publicationYear}, ${work.literaryMovement}) et rappeler sa thèse fondamentale dès l'amorce ou le premier paragraphe.`,
      reflexOrTip: "Soulignez toujours le titre complet de l'œuvre et ne l'abrégez jamais."
    },
    {
      stepNumber: 2,
      title: "Mobiliser les personnages comme arguments et non comme simple résumé d'intrigue",
      whatToDo: "Ne racontez jamais l'histoire pour le plaisir de raconter : analysez le rôle du personnage au service de l'idée défendue.",
      reflexOrTip: "Formule clé : « À travers la trajectoire de [Personnage], l'auteur met en lumière que... »"
    },
    {
      stepNumber: 3,
      title: "Articuler thèmes sociaux et procédés d'écriture",
      whatToDo: "Conjuguez l'analyse du fond (les thèmes) avec l'analyse de la forme (le style, l'ironie, le registre, les métaphores).",
      reflexOrTip: "Les correcteurs valorisent particulièrement l'attention portée aux procédés formels de l'écrivain."
    }
  ];

  const solvedExample: CourseSolvedExample = {
    problemStatement: `Comment mobiliser « ${work.title} » de ${work.author} dans un paragraphe de dissertation littéraire ?`,
    solutionStepByStep: `1. Idée directrice : ${work.arguments[0]?.statement || 'Poser la thèse'}.\n` +
      `2. Explication approfondie : ${work.arguments[0]?.explanation || 'Expliciter le mécanisme littéraire'}.\n` +
      `3. Exemple d'œuvre précis : Dans *${work.title}* de ${work.author}, ${work.characters[0]?.name || "le personnage"} illustre cette idée (${work.characters[0]?.dissertationUtility || ''}).\n` +
      `4. Citation exacte : « ${work.arguments[0]?.quote || ''} ».\n` +
      `5. Commentaire critique : Analyser la portée de l'illustration en la reliant directement au sujet.`,
    finalAnswer: `Paragraphe argumentatif d'excellence rédigé selon la méthode Idée ➔ Explication ➔ Exemple précis ➔ Citation vérifiée ➔ Commentaire critique.`
  };

  return {
    query,
    discipline: "francais",
    disciplineLabel: `Français & Littérature (${work.genre} — Baccalauréat)`,
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Première & Terminale (Toutes Séries)",
    chapterTitle: `Monographie & Arguments de Dissertation : « ${work.title} » de ${work.author}`,
    definitionAndScope: `Étude complète et méthodique pour la dissertation littéraire sur « ${work.title} » (${work.publicationYear}) de ${work.author}.\n\nMouvement & Contexte : ${work.literaryMovement}.\n${work.context}\n\nEnjeux au Baccalauréat : Cette fiche regroupe les thèmes essentiels, les arguments utilisables en dissertation, les citations vérifiées, le rôle des personnages, les procédés d'écriture caractéristiques et les rapprochements littéraires pertinents.`,
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: methodSteps,
    solvedExample,
    classicExamTraps: [
      `Raconter toute l'histoire de « ${work.title} » sans relier les faits aux termes précis du sujet.`,
      "Oublier de citer le nom précis des personnages et des scènes clés.",
      "Confondre la voix de l'auteur avec celle des personnages ou du narrateur.",
      "Omettre d'analyser le style et les procédés littéraires de l'auteur."
    ],
    selfCheckChecklist: [
      `Le titre « ${work.title} » et l'auteur « ${work.author} » sont-ils exacts et soulignés ?`,
      "Les citations retenues sont-elles fidèles au texte et encadrées de guillemets ?",
      "Le rôle des personnages est-il exploité comme argument démonstratif ?",
      "Un rapprochement pertinent avec une autre œuvre au programme est-il établi ?"
    ],
    quickRevisionMemo: `Mémo « ${work.title} » : Retenir les thèmes (${work.mainThemes.slice(0, 3).join(", ")}) et les personnages clés : ${work.characters.map(c => c.name).join(", ")}.`,
    certificationNote: "Monographie officielle certifiée conforme aux programmes de Français du Baccalauréat (0 appel IA).",
    activeVariant: safeIdx,
    totalVariants,
    argumentVariantsAvailable: work.arguments.map((a, idx) => ({ id: idx, label: a.category, perspective: a.statement })),
    isDirectAnswer: true
  };
}
