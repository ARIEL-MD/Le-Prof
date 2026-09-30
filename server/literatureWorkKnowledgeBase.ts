/**
 * BASE DE CONNAISSANCES OFFICIELLE : ŒUVRES & AUTEURS LITTÉRAIRES DU BACCALAURÉAT
 * ==============================================================================
 * 
 * Spécifiquement conçue pour la Dissertation de Français (Terminale & Concours).
 * 
 * Intègre rigoureusement pour chaque œuvre :
 *  1. Les thèmes et notions liés à l'œuvre
 *  2. Les arguments utilisables en dissertation (formulés pour l'examen)
 *  3. Les explications approfondies des arguments
 *  4. Les citations pertinentes et vérifiées
 *  5. Les personnages et leurs rôles démonstratifs
 *  6. Les procédés littéraires et figures stylistiques
 *  7. Les passages ou scènes d'anthologie servant d'exemples
 *  8. Le contexte littéraire et historique
 *  9. Les rapprochements avec d'autres œuvres ou auteurs
 * 
 * 100% local, déterministe et conforme aux exigences officielles d'examen.
 */

import { CourseConceptFormula, CourseMethodStep, CourseSearchResult } from "../src/types";
import { differentiateArgumentItem, hashStringToInt } from "./argumentReformulator";
import { findExtendedLiteraryWork } from "./scribd854LiteraryCorpus";
import { argumentIllustrationsAsWorks } from "./scribd861ArgumentIllustrations";

export interface LiteraryWorkItem {
  id: string;
  title: string;
  author: string;
  genre: "Roman" | "Théâtre" | "Poésie" | "Essai" | "Roman / conte philosophique";
  periodAndMovement: string;
  aliases: string[];
  themes: string[];
  summaryContext: string;
  characters: { name: string; role: string; dissertationUtility: string }[];
  literaryDevices: { device: string; explanation: string; exampleInText: string }[];
  keyScenes: { sceneTitle: string; description: string; examApplication: string }[];
  comparisons: { otherWork: string; otherAuthor: string; comparisonPoint: string }[];
  arguments: {
    category: string;
    statement: string;
    explanation: string;
    quote: string;
    alternateStatements?: string[];
    alternateExplanations?: string[];
    connector?: string;
  }[];
  keyQuotes: { quote: string; context: string; scope: string }[];
}

export const CANONICAL_LITERARY_WORKS: LiteraryWorkItem[] = [
  {
    id: "soleils_des_independances",
    title: "Les Soleils des Indépendances",
    author: "Ahmadou Kourouma",
    genre: "Roman",
    periodAndMovement: "Roman africain du désenchantement (1968)",
    aliases: [
      "les soleils des independances", "soleils des independances", "kourouma", "ahmadou kourouma",
      "fama doumbouya", "salimata", "horodougou", "soleil des independances"
    ],
    themes: [
      "La désillusion et la bâtardise des indépendances africaines",
      "La déchéance tragique de la chefferie traditionnelle face à la bureaucratie",
      "La condition de la femme et le drame intime de la stérilité",
      "L'hybridation linguistique et la subversion de la langue coloniale",
      "Le choc entre coutumes ancestrales et régime de parti unique"
    ],
    summaryContext: "Publié en 1968, ce roman fondateur rompt avec l'optimisme des indépendances africaines. À travers la déchéance de Fama Doumbouya, dernier prince de la dynastie des Horodougou réduit à mendier lors des funérailles dans la capitale, Ahmadou Kourouma dénonce la confiscation du pouvoir par une bourgeoisie bureaucratique corrompue et invente une langue romanesque révolutionnaire en coulant la syntaxe malinké dans le moule français.",
    characters: [
      {
        name: "Fama Doumbouya",
        role: "Dernier prince légitime du Horodougou, symbole de la noblesse féodale déchue.",
        dissertationUtility: "Incarne l'inadaptation tragique des chefs traditionnels dans une société moderne régie par la politique de parti unique et l'argent."
      },
      {
        name: "Salimata",
        role: "Épouse loyale de Fama, marquée par le traumatisme de l'excision et le viol du sorcier Tiécoura.",
        dissertationUtility: "Représente la résilience et la souffrance de la femme africaine, confrontée à l'opprobre social de la stérilité malgré son travail acharné."
      },
      {
        name: "Mariam",
        role: "Seconde épouse de Fama, héritée selon la tradition du lévirat.",
        dissertationUtility: "Symbolise l'opportunisme et la dégradation morale de la cellule familiale urbaine, trahissant rapidement la mémoire de Fama."
      }
    ],
    literaryDevices: [
      {
        device: "Malinkisation de la langue française",
        explanation: "Traduction littérale des tournures, proverbes et insultes imagées de la langue malinké pour désaliéner le français.",
        exampleInText: "« Les soleils des indépendances s'étaient annoncés comme un orage lointain... » ou « Il n'avait pas d'enfant parce que son sang était froid. »"
      },
      {
        device: "Ironie tragique et distanciation narrative",
        explanation: "Le narrateur commente les malheurs de Fama avec une verve truculente qui mêle dérision amère et compassion poignante.",
        exampleInText: "L'évocation de Fama comme « un prince de sang royal réduit à chasser les charognes de funérailles »."
      },
      {
        device: "Symbolique cosmique et animiste",
        explanation: "Les événements politiques sont associés aux astres (les soleils), aux météores et aux fleuves sacrés gardés par les génies totémiques.",
        exampleInText: "Le passage fatidique de la frontière fluviale où Fama est attaqué par les caïmans sacrés de ses ancêtres."
      }
    ],
    keyScenes: [
      {
        sceneTitle: "L'incipit et les funérailles d'Ibrahima Koné",
        description: "Fama assiste aux funérailles pour recevoir sa part de riz et de piécettes, illustrant sa dégradation matérielle et morale.",
        examApplication: "À utiliser pour illustrer l'Axe de la désillusion politique et sociale : le prince est devenu parasite urbain."
      },
      {
        sceneTitle: "L'arrestation absurde et le procès politique de Fama",
        description: "Fama est jeté en prison pour un complot imaginaire qu'il n'a jamais compris, victime de la paranoïa du parti unique.",
        examApplication: "Exemple parfait de la dénonciation de l'arbitraire totalitaire et de la parodie de justice des nouveaux régimes postcoloniaux."
      },
      {
        sceneTitle: "Le retour au Horodougou et la mort aux frontières",
        description: "Fama refuse de se soumettre aux gardes-frontières et se jette dans le fleuve habité par les caïmans protecteurs de son clan.",
        examApplication: "Symbole du refus héroïque de l'abaissement : la mort restitue au prince sa dignité originelle par-delà les frontières artificielles."
      }
    ],
    comparisons: [
      {
        otherWork: "Une vie de boy",
        otherAuthor: "Ferdinand Oyono",
        comparisonPoint: "Même regard lucide et désabusé sur l'oppression et l'hypocrisie des systèmes politiques qui écrasent l'homme simple."
      },
      {
        otherWork: "Le monde s'effondre (Things Fall Apart)",
        otherAuthor: "Chinua Achebe",
        comparisonPoint: "Okonkwo et Fama partagent la même incapacité tragique à négocier avec un monde nouveau qui a balayé leurs repères séculaires."
      },
      {
        otherWork: "La Grève des bàttu",
        otherAuthor: "Aminata Sow Fall",
        comparisonPoint: "Confrontation directe entre la mendicité urbaine ritualisée et l'ambition technocratique des élites dirigeantes."
      }
    ],
    arguments: [
      {
        category: "Axe I : Témoignage et Critique Sociale",
        statement: "Le roman postcolonial démasque sans complaisance les dérives autocratiques et la corruption des régimes issus des indépendances.",
        alternateStatements: [
          "Le roman se fait l'écho douloureux de la désillusion populaire face aux promesses trahies de la souveraineté nationale.",
          "À travers la fiction, l'écrivain documente la tragédie de la chefferie ancestrale spoliée par l'appareil bureaucratique moderne.",
          "L'œuvre romanesque agit comme un miroir critique des tares politiques qui ont gangrené l'espoir des peuples africains."
        ],
        explanation: "En dépeignant un Fama réduit à vivre des miettes des cérémonies funéraires, Kourouma prouve que l'indépendance n'a pas apporté la libération économique attendue, mais a substitué à la domination blanche une caste de fonctionnaires prédateurs.",
        alternateExplanations: [
          "Dans Les Soleils des Indépendances, Kourouma montre que le mot 'indépendance' est devenu un soleil brûlant qui calcine les valeurs de solidarité pour n'enrichir qu'une minorité cupide affiliée au parti unique.",
          "D'un point de vue sociologique, l'auteur démontre le désenchantement d'un peuple qui constate avec amertume que les nouveaux maîtres de la république reproduisent l'arbitraire colonial sous le masque du nationalisme.",
          "L'analyse littéraire met en évidence la violence subie par les déshérités urbains dont les traditions séculaires sont broyées sans qu'aucun progrès social véritable ne leur soit offert en échange."
        ],
        quote: "Les soleils des indépendances s'étaient annoncés comme un orage lointain et dès les premiers éclairs, Fama avait tout balayé...",
        connector: "De prime abord,"
      },
      {
        category: "Axe II : Rénovation Esthétique & Rupture Stylistique",
        statement: "L'écrivain africain révolutionne la création romanesque en hybridant le français classique avec le génie oratoire de sa langue maternelle.",
        alternateStatements: [
          "La puissance littéraire de l'œuvre repose sur une appropriation subversive de la langue française régénérée par l'oralité malinké.",
          "Loin de se soumettre aux canons académiques étroits, le roman invente une langue métisse qui restitue l'authenticité de l'imaginaire populaire.",
          "L'émancipation politique trouve son prolongement légitime dans une décolonisation formelle de l'écriture romanesque."
        ],
        explanation: "Ahmadou Kourouma refuse de brider sa pensée dans la syntaxe rigide imposée par la colonisation. Il tord le français pour lui faire porter le rythme, les métaphores animalières et la sagesse proverbiale du terroir malinké.",
        alternateExplanations: [
          "En intégrant proverbes rythmés, jurons rituels et syntaxes inversées, l'auteur invente un style inédit où le lecteur entend palpiter la voix vivante des griots au sein de la forme romanesque occidentale.",
          "Cette subversion poétique démontre que le véritable créateur littéraire ne copie pas servilement la langue de l'autre, mais la refaçonne pour en faire l'instrument souverain de sa propre vision du monde.",
          "Kourouma prouve ainsi que la littérature africaine conquiert sa pleine maturité esthétique lorsqu'elle refuse l'imitation servile pour affirmer son identité formelle singulière."
        ],
        quote: "Bâtard de bâtardise ! Fama était né dans l'or, le manger, la fierté et le fer...",
        connector: "Toutefois,"
      },
      {
        category: "Axe III : Portée Existentielle & Tragique Humain",
        statement: "Au-delà du constat politique immédiat, l'œuvre atteint une dimension universelle en méditant sur la finitude et la dignité inaliénable de l'homme.",
        alternateStatements: [
          "La tragédie de Fama dépasse le cadre africain pour figurer le drame universel de tout homme confronté à la perte irrémédiable de son monde.",
          "La quête héroïque de dignité jusqu'au sacrifice final confère au protagoniste la stature grandiose des héros tragiques de l'antiquité.",
          "L'œuvre s'élève à une réflexion métaphysique sur le destin, la fertilité et le devoir de mémoire envers les ancêtres."
        ],
        explanation: "En choisissant de mourir dignement les armes à la main face aux caïmans sacrés de sa terre ancestrale plutôt que de ramper devant les geôliers du pouvoir, Fama rachète ses faiblesses et accède à la sublimité du héros tragique.",
        alternateExplanations: [
          "Le sacrifice ultime de Fama scelle la victoire de l'éthique de l'honneur sur la compromission matérielle, démontrant que la grandeur de l'homme réside dans sa fidélité à son être profond face au néant.",
          "Cette conclusion pathétique montre que même dépossédé de tout pouvoir temporel, l'être humain préserve sa souveraineté morale lorsqu'il choisit en conscience l'heure et le sens de sa propre mort.",
          "La portée humaniste de l'œuvre rappelle que toute civilisation qui renie ses racines spirituelles au nom d'une modernité factice court inéluctablement à sa propre perte morale."
        ],
        quote: "Il fallait mourir dans la terre où les aïeux avaient commandé et reposaient.",
        connector: "Enfin,"
      }
    ],
    keyQuotes: [
      {
        quote: "Les soleils des indépendances s'étaient annoncés comme un orage lointain et dès les premiers éclairs, Fama avait tout balayé...",
        context: "Ouverture du roman évoquant la rupture historique des années 1960.",
        scope: "Citation maîtresse pour l'Axe de la déception et de la faillite politique."
      },
      {
        quote: "Bâtard de bâtardise ! Qu'avaient apporté les indépendances à Fama ? Rien que la carte d'identité et celle du parti unique.",
        context: "Cri de révolte de Fama prenant conscience de son exclusion du banquet républicain.",
        scope: "À mobiliser pour dénoncer la dépossession du citoyen et la caricature démocratique."
      },
      {
        quote: "Il n'y a pas de nuit si longue qu'elle ne finisse par un jour.",
        context: "Proverbe malinké intégré dans la bouche de Salimata pour conjurer le désespoir.",
        scope: "Exemple parfait d'insertion de la sagesse proverbiale populaire dans l'argumentation."
      }
    ]
  },

  {
    id: "une_si_longue_lettre",
    title: "Une si longue lettre",
    author: "Mariama Bâ",
    genre: "Roman",
    periodAndMovement: "Roman épistolaire et féminisme africain (1979 - Prix Noma 1980)",
    aliases: [
      "une si longue lettre", "mariama ba", "mariama bâ", "ramatoulaye", "aissatou",
      "modou fall", "binetou", "mirasse"
    ],
    themes: [
      "La condition féminine et le cri contre la polygamie humiliante",
      "L'amitié sororale comme refuge et force d'émancipation",
      "L'éducation et le savoir comme clés de la libération de la femme",
      "Le deuil, la dignité et la mémoire face à l'ingratitude conjugale",
      "Le déchirement entre traditions patriarcales et modernité démocratique"
    ],
    summaryContext: "Couronné par le premier Prix Noma en 1980, ce chef-d'œuvre épistolaire retrace la confession de Ramatoulaye, veuve sénégalaise cloîtrée pendant les quarante jours de deuil rituel (le mirasse). Elle écrit à son amie d'enfance Aïssatou pour exorciser sa souffrance : après trente ans de mariage et douze enfants, son mari Modou Fall l'a trahie en épousant secrètement Binetou, la camarade de classe de leur fille. Mariama Bâ livre ainsi un vibrant plaidoyer pour la dignité de la femme africaine et l'avènement d'une société juste.",
    characters: [
      {
        name: "Ramatoulaye Fall",
        role: "Narratrice épistolaire, institutrice digne, mère courage de douze enfants.",
        dissertationUtility: "Incarne la fidélité douloureuse aux devoirs familiaux tout en menant un combat intellectuel lucide pour l'égalité des sexes."
      },
      {
        name: "Aïssatou Bâ",
        role: "Amie intime de Ramatoulaye, femme de rupture ayant rejeté le compromis polygamique.",
        dissertationUtility: "Figure de l'émancipation radicale par l'étude et le travail autonome, refusant de partager son mari avec une seconde épouse imposée par la belle-mère."
      },
      {
        name: "Modou Fall",
        role: "Époux de Ramatoulaye, haut cadre intellectuel cédant au mirage du rajeunissement artificiel.",
        dissertationUtility: "Symbole de la duplicité masculine et de l'irresponsabilité morale des élites occidentalisées qui délaissent leur famille légitime."
      },
      {
        name: "Binetou",
        role: "Jeune seconde épouse, sacrifiée par sa mère avide d'ascension sociale matérielle.",
        dissertationUtility: "Témoigne de la vulnérabilité de la jeunesse féminine instrumentalisée par les calculs matrimoniaux mercantiles des familles."
      }
    ],
    literaryDevices: [
      {
        device: "Forme épistolaire intime et cathartique",
        explanation: "L'écriture à la première personne permet une confidence poignante où la douleur privée acquiert une résonance collective universelle.",
        exampleInText: "« Aïssatou, mon amie, j'ai reçu ton mot. En guise de réponse, j'ouvre ce cahier, point d'appui dans mon désarroi... »"
      },
      {
        device: "Polyphonie féminine contrastée",
        explanation: "La confrontation entre le choix de Ramatoulaye (résignation digne) et celui d'Aïssatou (rupture souveraine) montre la pluralité des voies d'émancipation.",
        exampleInText: "La lettre cinglante d'Aïssatou à Mawdo Bâ : « Si l'homme peut procréer sans aimer, la femme n'admet point la division. »"
      },
      {
        device: "Plaidoyer oratoire et interrogation rhétorique",
        explanation: "Ramatoulaye interpelle la société, les législateurs et les hommes à travers des questions oratoires percutantes.",
        exampleInText: "« Quand donc les femmes cesseront-elles d'être les victimes expiatoires de traditions pétrifiées ? »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le rituel humiliant du Mirasse",
        description: "Les proches du défunt étalent les secrets matériels et intimes de Modou Fall, révélant ses dettes pour entretenir Binetou.",
        examApplication: "Démonstration exemplaire de la satire des dérives hypocrites des cérémonies de deuil où le mercantilisme étouffe le recueillement."
      },
      {
        sceneTitle: "La lettre d'adieu d'Aïssatou à Mawdo Bâ",
        description: "Aïssatou refuse la seconde épouse noble imposée par la tante Nabou et quitte le foyer conjugal la tête haute.",
        examApplication: "À citer pour prouver que le savoir et l'indépendance financière confèrent à la femme la force de briser l'aliénation polygamique."
      },
      {
        sceneTitle: "Le refus digne de la demande en mariage de Daouda Dieng",
        description: "Ramatoulaye refuse d'épouser le député Daouda Dieng pour ne pas faire subir à la première épouse de celui-ci ce qu'elle-même a enduré.",
        examApplication: "Illustration magistrale de l'éthique de la solidarité féminine : Ramatoulaye refuse d'accéder au pouvoir en détruisant un autre foyer."
      }
    ],
    comparisons: [
      {
        otherWork: "La Grève des bàttu",
        otherAuthor: "Aminata Sow Fall",
        comparisonPoint: "Même regard critique sur la polygamie comme instrument de paraître social pour les hommes de pouvoir au Sénégal."
      },
      {
        otherWork: "Le Deuxième Sexe",
        otherAuthor: "Simone de Beauvoir",
        comparisonPoint: "Convergence philosophique sur l'idée que la libération féminine passe impérativement par l'autonomie économique et l'éducation."
      },
      {
        otherWork: "Sous l'orage",
        otherAuthor: "Seydou Badian",
        comparisonPoint: "Kany et Ramatoulaye partagent la même revendication du droit d'aimer librement contre les mariages imposés par le patriarcat."
      }
    ],
    arguments: [
      {
        category: "Axe I : Combat Civique & Dénonciation du Patriarcat",
        statement: "La littérature féminine brise le tabou de la résignation imposée pour ériger la plume en arme de revendication égalitaire.",
        alternateStatements: [
          "Le roman se fait le réquisitoire passionné de la souffrance des épouses reléguées au second plan par le caprice polygamique masculin.",
          "À travers l'intimité du deuil, l'écrivaine dévoile les rouages hypocrites d'une société patriarcale qui instrumentalise la coutume.",
          "L'écriture romanesque donne une voix puissante à toutes les mères silencieuses broyées par l'arbitraire conjugal."
        ],
        explanation: "Dans Une si longue lettre, Mariama Bâ ne se contente pas de raconter un chagrin intime ; elle démonte méthodiquement l'injustice d'une polygamie de convenance qui jette au rebut la compagne des jours difficiles pour flatter la vanité d'un homme mûr.",
        alternateExplanations: [
          "L'analyse lucide de Ramatoulaye prouve que la polygamie moderne a perdu toute fonction protectrice traditionnelle pour devenir une insulte à l'amour et au respect mutuel des conjoints.",
          "En révélant l'abandon matériel et affectif des douze enfants de Ramatoulaye après le remariage de Modou, l'œuvre démontre l'impact destructeur de l'égoïsme masculin sur l'équilibre des générations futures.",
          "Ce roman manifeste établit que le véritable progrès d'une nation africaine moderne reste illusoire tant que la moitié féminine de sa population demeure privée de considération juridique et morale."
        ],
        quote: "La polygamie ne s'accorde point avec l'amour authentique ; elle le mutile, elle le souille.",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : Le Savoir comme Instrument d'Émancipation",
        statement: "L'instruction et l'autonomie matérielle constituent pour la femme le rempart indispensable contre la dépendance et l'humiliation.",
        alternateStatements: [
          "L'itinéraire triomphal d'Aïssatou prouve que l'accès au savoir procure à la femme la force souveraine de refuser l'abaissement.",
          "L'école moderne se révèle être le vecteur décisif de la libération féminine face aux pesanteurs de la tradition rétrograde.",
          "L'indépendance financière conférée par le travail intellectuel permet à la femme d'échapper au chantage du mariage forcé."
        ],
        explanation: "Grâce à ses diplômes et à sa détermination, Aïssatou s'élève au rang de diplomate aux États-Unis après avoir rejeté la polygamie de son époux, prouvant par les actes que la dignité de la femme ne dépend d'aucun tuteur masculin.",
        alternateExplanations: [
          "Mariama Bâ oppose à la résignation passive de l'ancienne génération la figure radieuse d'Aïssatou, qui transforme la blessure de la rupture en tremplin d'élévation personnelle et professionnelle.",
          "Ce contraste saisissant démontre aux lectrices que l'éducation n'est pas un luxe futile mais l'unique garant de la souveraineté existentielle dans le monde moderne.",
          "L'exemple d'Aïssatou offre ainsi un modèle émancipateur d'une valeur pédagogique inestimable pour les jeunes filles scolarisées d'Afrique."
        ],
        quote: "Les instruments d'apprentissage que l'école met à notre disposition ne sont pas des ornements futiles, mais les armes de notre survie.",
        connector: "D'un autre côté,"
      },
      {
        category: "Axe III : Espérance & Éthique de la Complémentarité",
        statement: "Loin de prôner une haine stérile contre l'homme, le véritable féminisme littéraire aspire à une réconciliation fraternelle fondée sur le respect réciproque.",
        alternateStatements: [
          "Le message ultime de l'œuvre dépasse le ressentiment pour célébrer la foi inébranlable dans la beauté du couple harmonieux.",
          "Ramatoulaye refuse de céder au cynisme et continue de croire en l'amour vrai comme pilier fondamental de l'épanouissement humain.",
          "L'œuvre invite hommes et femmes à bâtir ensemble une communauté solidaire purgée des archaïsmes avilissants."
        ],
        explanation: "Dans les dernières pages du roman, Ramatoulaye prépare l'avenir de ses enfants avec sérénité et affirme son espérance : le bonheur reste possible si l'homme et la femme s'unissent en partenaires égaux et conscients.",
        alternateExplanations: [
          "Le refus de Ramatoulaye d'épouser Daouda Dieng par respect pour sa première femme témoigne d'une haute exigence morale qui refuse de bâtir son triomphe sur les larmes d'une autre femme.",
          "Cette vision humaniste élève le féminisme africain au rang d'une sagesse universelle qui cherche l'harmonie sociale plutôt que la confrontation destructrice des sexes.",
          "La conclusion du roman retentit comme un hymne vibrant à la vie, affirmant que le cœur blessé peut toujours se rouvrir à la tendresse lorsque celle-ci respecte la dignité sacrée de la personne."
        ],
        quote: "Le couple est l'harmonie de deux êtres qui se complètent, s'épaulent et se respectent dans la vérité de leurs sentiments.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Je ne renonce pas à mon espoir. C'est de l'humus du désespoir que naît la volonté ardente d'espérer.",
        context: "Méditation finale de Ramatoulaye ouvrant sa maison à l'avenir.",
        scope: "Citation indispensable pour la conclusion ou pour l'Axe de l'espérance et du dépassement de la souffrance."
      },
      {
        quote: "Si l'homme peut procréer sans aimer, la femme n'admet point la division. Elle donne tout ou elle reprend tout.",
        context: "Lettre de rupture d'Aïssatou adressée à son époux Mawdo Bâ.",
        scope: "Formule clé pour l'Axe du refus de la polygamie et de l'affirmation de la dignité féminine."
      },
      {
        quote: "Une femme est comme une branche dans le vent, elle plie mais ne se brise pas.",
        context: "Allégorie de la résilience maternelle face aux épreuves familiales.",
        scope: "À mobiliser pour illustrer le courage héroïque des mères de famille africaines."
      }
    ]
  },

  {
    id: "etranger_camus",
    title: "L'Étranger",
    author: "Albert Camus",
    genre: "Roman",
    periodAndMovement: "Philosophie de l'Absurde & Existentialisme (1942)",
    aliases: [
      "l'etranger", "letranger", "camus", "albert camus", "meursault", "marie cardona",
      "raymond sintes", "le mythe de sisyphe"
    ],
    themes: [
      "Le sentiment de l'absurde et l'étrangeté de l'homme face au monde",
      "Le refus de mentir et de jouer la comédie des sentiments sociaux",
      "Le procès des apparences et la condamnation de la marginalité morale",
      "La force sensorielle de la nature et le soleil comme déclencheur du drame",
      "La révolte lucide face à la mort et l'ouverture à la sereine indifférence du monde"
    ],
    summaryContext: "Paru en 1942, L'Étranger inaugure le Cycle de l'Absurde d'Albert Camus. Meursault, modeste employé de bureau à Alger, vit dans l'immédiateté des sensations corporelles sans chercher à justifier ses actes par des conventions sociales. Après avoir enterré sa mère sans verser les larmes attendues par la société, il tue un Arabe sur une plage écrasée de soleil lors d'une rixe impliquant son voisin. Lors de son procès, la justice des hommes le condamne à mort moins pour son crime de sang que pour son incapacité à manifester du remords et à se plier aux hypocrisies bourgeoises.",
    characters: [
      {
        name: "Meursault",
        role: "Narrateur et protagoniste, homme sincère refusant de simuler des émotions qu'il ne ressent pas.",
        dissertationUtility: "Incarne l'homme absurde qui dit la vérité nue, devenant un monstre intolérable aux yeux d'une société fondée sur le faux-semblant."
      },
      {
        name: "Marie Cardona",
        role: "Ancienne collègue devenue amante spontanée de Meursault.",
        dissertationUtility: "Représente le bonheur simple, charnel et sans arrière-pensée de la vie méditerranéenne (les bains de mer, le rire, le cinéma)."
      },
      {
        name: "L'Aumônier des prisons",
        role: "Représentant de l'ordre divin et moral cherchant à faire capituler la conscience de Meursault.",
        dissertationUtility: "Déclenche la révolte finale sublime de Meursault, qui refuse les consolations illusoires de l'au-delà pour assumer la plénitude de sa vie terrestre."
      },
      {
        name: "Le Procureur",
        role: "Magistrat théâtral construisant un roman accusatoire artificiel.",
        dissertationUtility: "Symbole de la justice hypocrite qui juge un homme sur sa psychologie supposée et sur son comportement à l'enterrement de sa mère."
      }
    ],
    literaryDevices: [
      {
        device: "L'écriture blanche ou le degré zéro de l'écriture",
        explanation: "Emploi presque exclusif du passé composé, syntaxe paratactique (phrases courtes juxtaposées sans liens de cause à effet) traduisant l'absurdité du réel.",
        exampleInText: "« Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : 'Mère décédée. Enterrement demain. Sentiments distingués.' Cela ne veut rien dire. »"
      },
      {
        device: "Focalisation interne sensorielle omniprésente",
        explanation: "Le monde n'est pas perçu à travers des jugements abstraits mais par des sensations physiques aiguës : l'aveuglement du soleil, l'odeur du goudron, la tiédeur de l'eau.",
        exampleInText: "« Toute une plage vibrante de soleil se pressait derrière moi. [...] La gâchette a cédé... »"
      },
      {
        device: "Structure binaire en miroir",
        explanation: "La première partie raconte la vie sensorielle libre de Meursault ; la seconde est la déformation intellectuelle et morale de cette même vie par le tribunal.",
        exampleInText: "Le contraste saisissant entre la joie innocente des bains de mer avec Marie et la requalification de cet acte en « liaison coupable au lendemain du deuil » par l'accusation."
      }
    ],
    keyScenes: [
      {
        sceneTitle: "L'enterrement de la mère à Marengo",
        description: "Meursault souffre de la chaleur écrasante et refuse de voir le corps de sa mère, fumant une cigarette devant la bière.",
        examApplication: "Scène clé du malentendu social : l'honnêteté biologique est interprétée par les bourgeois comme une insensibilité criminelle."
      },
      {
        sceneTitle: "Le meurtre sur la plage écrasée de soleil",
        description: "Aveuglé par la réverbération de la lame et consumé par la chaleur, Meursault tire un coup de revolver, puis quatre autres « comme quatre coups brefs sur la porte du malheur ».",
        examApplication: "À analyser pour démontrer la tragédie de la fatalité sensorielle : l'acte absurde n'a pas de mobile rationnel machiavélique."
      },
      {
        sceneTitle: "L'explosion contre l'aumônier et l'apaisement final",
        description: "Meursault empoigne le prêtre par le collet dans sa cellule et revendique la vérité de sa vie avant de contempler la nuit étoilée.",
        examApplication: "Moment sublime de la prise de conscience et de la révolte : Meursault refuse la grâce céleste pour communier avec la liberté lucide."
      }
    ],
    comparisons: [
      {
        otherWork: "Le Procès",
        otherAuthor: "Franz Kafka",
        comparisonPoint: "Joseph K. et Meursault sont tous deux victimes d'une machine judiciaire absurde qui exige la soumission à une culpabilité indéfinie."
      },
      {
        otherWork: "La Nausée",
        otherAuthor: "Jean-Paul Sartre",
        comparisonPoint: "Roquentin et Meursault découvrent la contingence nue de l'existence dépouillée de tout ordre divin ou téléologique préétabli."
      },
      {
        otherWork: "Meursault, contre-enquête",
        otherAuthor: "Kamel Daoud",
        comparisonPoint: "Réécriture postcoloniale redonnant un nom (Moussa) et une voix à la victime anonyme de la plage d'Alger."
      }
    ],
    arguments: [
      {
        category: "Axe I : La Dénonciation du Mensonge Social",
        statement: "Le héros camusien dérange la société non par perversité, mais parce qu'il refuse de simuler les émotions que la comédie sociale impose.",
        alternateStatements: [
          "Le roman met en scène la condamnation implacable d'un individu dont le seul véritable délit est son authenticité radicale.",
          "À travers le procès de Meursault, l'auteur fustige une justice hypocrite incapable de tolérer la vérité nue d'un être sans artifice.",
          "L'œuvre révèle la terreur que suscite chez les hommes conformistes quiconque refuse de jouer le jeu des faux-semblants collectifs."
        ],
        explanation: "Comme Camus l'a précisé lui-même dans sa préface, Meursault est condamné parce qu'il refuse de jouer le jeu et n'accepte pas de pleurer sur commande à l'enterrement de sa mère.",
        alternateExplanations: [
          "L'institution judiciaire préfère juger l'absence de larmes filiales plutôt que d'examiner les faits matériels de la rixe, démontrant que l'ordre bourgeois exige la soumission morale avant le respect des lois.",
          "Cette démonstration romanesque établit que la société civilisée repose sur un pacte d'hypocrisie collective : celui qui refuse de mentir sur ses sentiments devient instantanément un bouc émissaire à éliminer.",
          "Le procès kafkaïen de Meursault prouve que l'appareil judiciaire a besoin d'inventer des monstres moraux pour masquer sa propre incapacité à comprendre la nudité tragique de la condition humaine."
        ],
        quote: "Dans notre société, tout homme qui ne pleure pas à l'enterrement de sa mère risque d'être condamné à mort.",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : L'Esthétique Sensorielle et la Révolte Absurde",
        statement: "Le style épuré traduit la primauté des sensations physiques sur les discours métaphysiques abstraits et trompeurs.",
        alternateStatements: [
          "L'écriture blanche camusienne dépouille le récit de toute rhétorique superficielle pour épouser l'immédiateté du réel sensible.",
          "L'omniprésence du soleil et de la mer souligne que l'homme est d'abord un être de chair ancré dans la sensualité du monde terrestre.",
          "La parataxe syntaxique reflète directement la philosophie de l'absurde en refusant de créer des liens de causalité artificiels."
        ],
        explanation: "En refusant les métaphores alambiquées et les analyses psychologiques traditionnelles, Camus invente une prose directe où chaque geste physique acquiert une vérité minérale et indéniable.",
        alternateExplanations: [
          "Le meurtre de la plage n'est pas le fruit d'une préméditation calculée mais d'un aveuglement sensoriel causé par le feu du ciel, illustrant la vulnérabilité de l'homme face aux éléments naturels déchaînés.",
          "Cette esthétique du constat sans emphase permet au lecteur d'éprouver viscéralement le vertige de l'absurde, où les événements se succèdent sans logique providentielle bienveillante.",
          "La modernité formelle de L'Étranger démontre que le roman du XXe siècle ne cherche plus à expliquer omnisciente le monde, mais à en restituer l'énigme et la fascinante opacité."
        ],
        quote: "C'était le même soleil que le jour où j'avais enterré maman et, comme alors, le front surtout me faisait mal...",
        connector: "Par ailleurs,"
      },
      {
        category: "Axe III : La Sérénité Conquise & Le Bonheur de l'Homme Lucide",
        statement: "La prise de conscience de la mort inéluctable n'aboutit pas au nihilisme désespéré, mais libère l'homme pour un bonheur terrestre authentique.",
        alternateStatements: [
          "L'affrontement avec la certitude de la guillotine conduit le condamné à une illumination sereine sur la beauté sacrée de la vie.",
          "En rejetant le secours chimérique d'un au-delà mystique, le héros conquiert la souveraineté absolue de sa conscience lucide.",
          "L'apaisement final sous le ciel étoilé scelle la réconciliation magnifique entre l'homme révolté et la tendre indifférence de la nature."
        ],
        explanation: "Dans sa cellule, Meursault comprend que le bonheur réside dans la lucidité même : ayant purgé son âme de tout espoir trompeur, il s'ouvre pour la première fois à la tendre indifférence du monde et s'affirme pleinement heureux.",
        alternateExplanations: [
          "La colère salutaire contre l'aumônier déchire les derniers voiles de l'illusion pour révéler à Meursault le prix inestimable de chaque souffle vécu dans la vérité du présent.",
          "Cette conclusion solaire rejoint la morale du Mythe de Sisyphe : il n'y a pas de destin qui ne se surmonte par le mépris et par l'adhésion joyeuse à notre condition terrestre.",
          "Loin d'être un éloge de la morbidité, le roman d'Albert Camus s'achève sur une victoire spirituelle magistrale où la liberté intérieure triomphe définitivement de la prison des hommes."
        ],
        quote: "Comme si cette grande colère m'avait purgé du mal, vidé d'espoir, devant cette nuit chargée de signes et d'étoiles, je m'ouvrais pour la première fois à la tendre indifférence du monde.",
        connector: "Dès lors,"
      }
    ],
    keyQuotes: [
      {
        quote: "Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas.",
        context: "Incipit célèbre marquant le refus de la dramatisation factice.",
        scope: "Citation indispensable pour analyser la rupture stylistique et l'écriture blanche."
      },
      {
        quote: "J'avais été heureux, et je l'étais encore. Pour que tout soit consommé, pour que je me sente moins seul, il me restait à souhaiter qu'il y ait beaucoup de spectateurs le jour de mon exécution...",
        context: "Dernières lignes du roman résumant la sérénité et le défi lucide de Meursault.",
        scope: "À citer pour couronner l'Axe de la révolte triomphante et de l'affirmation existentielle."
      },
      {
        quote: "La gâchette a cédé, j'ai touché le ventre poli de la crosse et c'est là, dans le bruit à la fois sec et assourdissant, que tout a commencé.",
        context: "Instant fatal du meurtre sous le soleil d'Alger.",
        scope: "Illustration parfaite de la fatalité absurde et du basculement tragique."
      }
    ]
  },

  {
    id: "sous_l_orage",
    title: "Sous l'orage",
    author: "Seydou Badian",
    genre: "Roman",
    periodAndMovement: "Roman du choc des cultures & Négritude (1957)",
    aliases: [
      "sous l'orage", "sous lorage", "seydou badian", "kany", "samou", "benfa",
      "pere djigui", "sibiri", "birama"
    ],
    themes: [
      "Le conflit des générations entre anciens dépositaires de la tradition et jeunes scolarisés",
      "Le choc culturel violent entre l'Afrique ancestrale et les modèles occidentaux",
      "Le problème du mariage arrangé face au libre choix de l'amour moderne",
      "La réconciliation dialectique par le respect de la sagesse des aînés",
      "Le rôle de l'intellectuel africain comme pont entre deux civilisations"
    ],
    summaryContext: "Paru en 1957, Sous l'orage de l'écrivain et homme d'État malien Seydou Badian est l'un des romans les plus étudiés au Baccalauréat francophone. Il met en scène le drame de Kany, jeune lycéenne instruite amoureuse de son camarade Samou. Son père, le vieux Benfa, gardien intransigeant des coutumes, entend lui imposer comme époux le riche et polygame Famagan. Envoyée au village natal pour être rééduquée dans la tradition, Kany y découvre la profondeur de ses racines grâce au vieux Djigui, tandis que la communauté cherche les voies d'une réconciliation féconde entre fidélité ancestrale et progrès moderne.",
    characters: [
      {
        name: "Kany",
        role: "Jeune héroïne moderne et instruite, éprise de liberté et amoureuse de Samou.",
        dissertationUtility: "Représente la jeunesse africaine scolarisée qui revendique le droit de choisir sa vie affective sans renier son attachement filial."
      },
      {
        name: "Le vieux Benfa",
        role: "Père autoritaire de Kany, garant rigide de la coutume et de l'autorité patriarcale.",
        dissertationUtility: "Symbolise l'angoisse des aînés face à la perte d'autorité et leur réflexe de repli dogmatique pour protéger l'ordre ancien."
      },
      {
        name: "Père Djigui",
        role: "Ancien du village, patriarche vénérable doté d'une profonde sagesse humaine.",
        dissertationUtility: "Incarne la tradition vivante et intelligente qui comprend l'inévitable marche du temps et prône la conciliation plutôt que la violence."
      },
      {
        name: "Samou",
        role: "Compagnon de Kany, jeune intellectuel lucide et respectueux des aînés.",
        dissertationUtility: "Montre que la modernité africaine authentique ne cherche pas la provocation stérile mais la reconnaissance légitime de l'amour."
      }
    ],
    literaryDevices: [
      {
        device: "Structure dramatique polyphonique et dialoguée",
        explanation: "Le roman progresse par de longues confrontations verbales où chaque camp expose ses arguments avec gravité et dignité.",
        exampleInText: "Les réunions solennelles de la cour de Benfa et les débats passionnés des jeunes dans les clubs culturels de Bamako."
      },
      {
        device: "Métaphore orageuse et symbolique cosmique",
        explanation: "Le titre « Sous l'orage » file la métaphore de la crise sociale et culturelle comme une tourmente naturelle nécessaire avant le retour du ciel pur.",
        exampleInText: "L'orage qui éclate sur la concession familiale fait écho aux cris de colère des pères et aux pleurs de Kany."
      },
      {
        device: "Recours aux paraboles et proverbes initiatiques",
        explanation: "La parole des anciens s'exprime par le détour de fables animalières et de maximes morales qui forcent le respect de l'auditoire.",
        exampleInText: "« L'arbre ne s'élève haut dans les cieux que si ses racines plongent profondément dans le sein de la terre. »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le conseil de famille et l'interrogatoire de Kany",
        description: "Benfa et ses frères convoquent Kany pour lui signifier son mariage avec Famagan, condamnant son refus comme une hérésie.",
        examApplication: "À utiliser pour illustrer la violence psychologique du mariage forcé et le poids de la communauté sur l'individu."
      },
      {
        sceneTitle: "Le séjour initiatique au village traditionnel",
        description: "Envoyée en brousse pour être pliée aux coutumes, Kany découvre la beauté du travail communautaire et la noblesse des paysans.",
        examApplication: "Preuve décisive que la modernité ne doit pas être un mépris de la terre : Kany réapprend à aimer et respecter ses racines."
      },
      {
        sceneTitle: "La médiation apaisante du Père Djigui",
        description: "Le vieil homme rappelle aux pères que le fleuve ne remonte jamais vers sa source et qu'il faut accompagner la jeunesse.",
        examApplication: "Modèle parfait de la résolution dialectique en dissertation : la tradition n'est pas pétrification mais adaptation harmonieuse."
      }
    ],
    comparisons: [
      {
        otherWork: "L'Aventure ambiguë",
        otherAuthor: "Cheikh Hamidou Kane",
        comparisonPoint: "Même déchirement existentiel de l'intellectuel africain pris en étau entre l'école d'Occident et la fidélité aux ancêtres."
      },
      {
        otherWork: "L'Enfant noir",
        otherAuthor: "Camara Laye",
        comparisonPoint: "Éloge vibrant de la transmission paternelle et de la chaleur du foyer africain traditionnel."
      },
      {
        otherWork: "Le Mariage de Figaro",
        otherAuthor: "Beaumarchais",
        comparisonPoint: "Revendication du libre choix du cœur contre l'abus de pouvoir patriarcal et féodal."
      }
    ],
    arguments: [
      {
        category: "Axe I : Le Choc des Valeurs & La Révolte Légitime",
        statement: "L'accès des jeunes générations à l'instruction moderne rend intolérable le maintien de coutumes archaïques privant l'individu de son libre arbitre.",
        alternateStatements: [
          "Le roman expose la déchirure douloureuse d'une jeunesse instruite qui ne peut plus tolérer l'arbitraire matrimonial des aînés.",
          "À travers la résistance de Kany, l'œuvre revendique le droit fondamental de la jeunesse à disposer souverainement de son destin affectif.",
          "La confrontation générationnelle révèle l'obsolescence d'une autorité patriarcale qui confond respect filial et soumission aveugle."
        ],
        explanation: "En refusant d'épouser Famagan par amour pour Samou, Kany ne cherche pas à humilier sa famille mais affirme qu'une union sans consentement mutuel est une aliénation indigne de l'être humain civilisé.",
        alternateExplanations: [
          "Seydou Badian démontre avec force que l'école coloniale a semé dans l'esprit des jeunes Africains l'exigence de liberté individuelle, rendant inévitable l'affrontement avec le traditionalisme rigide.",
          "Ce conflit dramatique illustre le malaise d'une époque de transition où les anciennes certitudes matrimoniales fondées sur les alliances matérielles sont balayées par l'idéal de l'amour partagé.",
          "L'œuvre prouve ainsi que la résistance des enfants scolarisés n'est pas un caprice ingrat mais l'expression nécessaire du renouveau social indispensable à toute communauté vivante."
        ],
        quote: "Nous ne voulons plus de ces mariages où la femme est cédée comme une marchandise sans que son cœur soit consulté.",
        connector: "De prime abord,"
      },
      {
        category: "Axe II : La Richesse Inaliénable du Patrimoine Ancestral",
        statement: "L'apprentissage des sciences occidentales ne doit jamais conduire au reniement méprisant des racines culturelles africaines.",
        alternateStatements: [
          "Le séjour initiatique au village rappelle que l'intellectuel sans ancrage culturel n'est qu'un arbre desséché sans sève ni mémoire.",
          "Loin de glorifier une occidentalisation aveugle, l'auteur rappelle la profonde noblesse morale des valeurs de solidarité villageoise.",
          "La tradition africaine authentique recèle une sagesse spirituelle que le rationalisme matérialiste moderne est impuissant à fournir."
        ],
        explanation: "En découvrant la générosité des paysans et la dignité des rites au village, Kany prend conscience que l'Afrique traditionnelle possède des trésors d'humanisme que l'instruction citadine risquait de lui faire oublier.",
        alternateExplanations: [
          "Seydou Badian met en garde la jeunesse contre le péril de l'assimilation culturelle servile : acquérir des diplômes étrangers ne doit jamais signifier rougir de la case paternelle.",
          "La description émouvante de la vie communautaire montre que le sentiment du sacré, l'hospitalité et le respect des aînés constituent le socle indépassable de l'identité africaine.",
          "Cette étape fondamentale du récit enseigne que la véritable émancipation n'est pas la fuite hors de soi, mais l'enracinement lucide dans le terreau des valeurs immortelles de la race."
        ],
        quote: "Les jeunes sont les branches de l'arbre ; pour qu'elles reverdissent et portent des fruits, il faut que la sève monte des racines.",
        connector: "Cependant,"
      },
      {
        category: "Axe III : La Synthèse Dialectique & Le Progrès Harmonieux",
        statement: "L'avenir du continent repose sur une greffe féconde mariant harmonieusement la sagesse séculaire des anciens et le dynamisme éclairé de la jeunesse.",
        alternateStatements: [
          "La résolution du drame par la médiation du Père Djigui prouve que l'Afrique peut surmonter ses contradictions par le dialogue pacificateur.",
          "Le roman s'achève sur une vision d'espérance où l'évolution des mœurs s'accomplit dans la concorde sans déchirement irréversible.",
          "La leçon magistrale de Seydou Badian réside dans l'art du compromis sage où le nouveau prolonge l'ancien sans le détruire."
        ],
        explanation: "La parole bienveillante du Père Djigui désamorce l'orage familial : il convainc les pères d'écouter les aspirations de leurs enfants tout en invitant ces derniers à s'incliner avec gratitude devant leurs géniteurs.",
        alternateExplanations: [
          "Cette conclusion lumineuse offre au lecteur de dissertation un modèle parfait de synthèse : la tradition n'est pas un musée immobile mais un fleuve continu qui absorbe les affluents de la modernité.",
          "Seydou Badian prouve que l'intellectuel africain accompli est celui qui sait être à la fois disciple des Blancs dans la technique et enfant de ses pères dans l'éthique de la vie.",
          "Le message de Sous l'orage retentit comme un vibrant appel à l'unité nationale, affirmant que l'orage des temps nouveaux fécondera la terre pourvu que la solidarité fraternelle demeure préservée."
        ],
        quote: "Le fleuve coule vers la mer, il ne remonte jamais vers sa source. Accompagnons nos enfants avec notre bénédiction plutôt que de vouloir retenir l'eau qui s'écoule.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Les jeunes sont les feuilles de l'arbre, mais ce sont les vieillards qui en sont les racines profondes.",
        context: "Parole proverbiale rappelant l'interdépendance des générations.",
        scope: "Citation idéale pour l'Axe de la réconciliation et du respect de la tradition."
      },
      {
        quote: "Nous avons le devoir d'apprendre pour être forts, mais nous ne devons jamais cesser d'être nous-mêmes.",
        context: "Profession de foi de Samou devant ses camarades du club de jeunesse.",
        scope: "À citer pour illustrer la vocation de l'intellectuel africain enraciné."
      },
      {
        quote: "L'orage passe, la pluie féconde le champ et le ciel redevient bleu pour tous.",
        context: "Dernière phrase méditative soulignant l'apaisement après la crise.",
        scope: "Excellente formule pour l'ouverture ou la conclusion d'une dissertation littéraire."
      }
    ]
  },

  {
    id: "aventure_ambigue",
    title: "L'Aventure ambiguë",
    author: "Cheikh Hamidou Kane",
    genre: "Roman",
    periodAndMovement: "Roman philosophique et spirituel (1961 - Grand Prix d'Afrique Noire 1962)",
    aliases: [
      "l'aventure ambigue", "laventure ambigue", "cheikh hamidou kane", "samba diallo",
      "la grande royale", "maitre des diallobe", "thierno", "le fou"
    ],
    themes: [
      "La tragédie spirituelle de l'assimilation et la perte de la foi mystique",
      "L'école étrangère comme nécessité politique et péril existentiel",
      "L'art de vaincre sans avoir raison : le paradoxe de la puissance occidentale",
      "Le déchirement entre contemplation religieuse et action matérielle",
      "La mort comme délivrance et réconciliation dans l'éternité divine"
    ],
    summaryContext: "Paru en 1961 et récompensé par le Grand Prix littéraire d'Afrique Noire, L'Aventure ambiguë est le sommet de la méditation philosophique et théologique du roman africain. Samba Diallo, jeune aristocrate peul d'une dévotion mystique éclatante, est arraché au Foyer ardent de son maître spirituel Thierno par la Grande Royale, qui ordonne aux Diallobé d'aller à l'école des Blancs pour « apprendre l'art de vaincre sans avoir raison ». Brillant étudiant à Paris, Samba Diallo perd peu à peu la chaleur vivante de sa foi au contact du rationalisme cartésien. Déchiré entre deux univers inconciliables, il revient au pays natal où son refus de prier déclenche le coup fatal d'un fou, scellant sa réintégration mystique dans l'Absolu.",
    characters: [
      {
        name: "Samba Diallo",
        role: "Héros spirituel tragique, prodige mystique devenu hybride culturel écartelé.",
        dissertationUtility: "Incarne la tragédie de l'élite colonisée qui gagne la puissance intellectuelle occidentale au prix terrible de l'assèchement de son âme religieuse."
      },
      {
        name: "Thierno (Le Maître des Diallobé)",
        role: "Maître soufi d'une rigueur absolue, consumé par l'amour de Dieu et le mépris des biens terrestres.",
        dissertationUtility: "Symbole de la pureté mystique islamique précoloniale qui façonne les âmes dans l'humilité et la conscience aiguë de la mort."
      },
      {
        name: "La Grande Royale",
        role: "Sœur aînée du chef des Diallobé, femme d'État lucide et pragmatique.",
        dissertationUtility: "Représente le réalisme politique suprême qui accepte le risque mortel de l'école des Blancs pour empêcher l'anéantissement de son peuple."
      },
      {
        name: "Le Fou",
        role: "Ancien soldat traumatisé par l'Occident machinisé, ombre protectrice de la tombe du Maître.",
        dissertationUtility: "Instrument tragique de la destinée qui tue Samba Diallo pour le délivrer de son ambiguïté et lui restituer l'éternité."
      }
    ],
    literaryDevices: [
      {
        device: "Dialogue philosophique et méditation théologique",
        explanation: "Le roman élève la conversation à la hauteur des grands dialogues platoniciens où la foi confronte le matérialisme.",
        exampleInText: "Les débats nocturnes de Samba Diallo avec Paul Lacroix sur l'existence de Dieu et la finitude de l'homme."
      },
      {
        device: "Prose poétique et lyrisme de l'ineffable",
        explanation: "L'écriture use d'une langue solennelle, musicale et habitée par les métaphores de l'ombre, du soleil et de la nuit.",
        exampleInText: "« L'homme est cette parcelle de cendre qui brûle d'un feu divin avant de retourner à la poussière. »"
      },
      {
        device: "Chant cosmique final et dissolution du temps",
        explanation: "Le dernier chapitre abandonne la narration classique pour un chant mystique où la voix de l'Être accueille l'âme du héros.",
        exampleInText: "« Tu es délivré du temps. Goûte au fleuve d'éternité où rien ne meurt... »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le supplice ascétique du Foyer ardent",
        description: "Thierno pince la chair de Samba Diallo pour chaque hésitation dans la récitation du Coran, lui apprenant la gloire divine dans la douleur de la chair.",
        examApplication: "À utiliser pour illustrer l'éducation spirituelle traditionnelle qui forme l'homme à l'intériorité et à la transcendance."
      },
      {
        sceneTitle: "Le discours historique de la Grande Royale",
        description: "Devant le peuple assemblé, elle compare l'école étrangère à la graine que l'on enterre dans la boue pour avoir la récolte de demain.",
        examApplication: "Exemple magistral de plaidoyer politique pour l'apprentissage des sciences modernes comme condition de survie nationale."
      },
      {
        sceneTitle: "Le meurtre mystique au crépuscule",
        description: "Devant la tombe de Thierno, Samba Diallo refuse de prier car il ne peut plus feindre la foi ; le Fou le frappe d'un coup mortel.",
        examApplication: "Démonstration éclatante du tragique existentiel : l'hybride culturel ne peut survivre dans le monde terrestre, sa mort est une délivrance."
      }
    ],
    comparisons: [
      {
        otherWork: "Pensées",
        otherAuthor: "Blaise Pascal",
        comparisonPoint: "Même angoisse métaphysique devant le silence éternel des espaces infinis et la misère de l'homme sans Dieu."
      },
      {
        otherWork: "Les Soleils des Indépendances",
        otherAuthor: "Ahmadou Kourouma",
        comparisonPoint: "Kourouma aborde le désenchantement sur le plan politique et social, tandis que Kane le sonde sur le plan théologique et spirituel."
      },
      {
        otherWork: "Cahier d'un retour au pays natal",
        otherAuthor: "Aimé Césaire",
        comparisonPoint: "Deux œuvres fondatrices proclamant le refus de l'assimilation assassine de l'âme noire par la rationalité occidentale."
      }
    ],
    arguments: [
      {
        category: "Axe I : Le Paradoxe Douloureux de l'Assimilation",
        statement: "L'apprentissage de la rationalité technique étrangère s'avère indispensable pour résister à la conquête, mais menace d'anéantir l'âme spirituelle du colonisé.",
        alternateStatements: [
          "Le roman met en scène l'inévitable drame d'une civilisation contrainte d'adopter les armes de son vainqueur au péril de son identité sacrée.",
          "À travers le dilemme des Diallobé, Cheikh Hamidou Kane expose la terrible rançon de l'instruction moderne qui désenchante le monde.",
          "L'école nouvelle se révèle être un instrument à double tranchant : elle délivre de la servitude matérielle mais engendre l'exil intérieur."
        ],
        explanation: "Comme le formule la Grande Royale avec une lucidité terrifiante, il faut envoyer les enfants à l'école des Blancs pour apprendre l'art de lier le bois au bois, même si ce que l'on y apprend tue ce que l'on aime.",
        alternateExplanations: [
          "Le drame de Samba Diallo prouve que la technique occidentale repose sur la manipulation d'objets inertes qui coupe l'homme de sa communion avec le Créateur et avec l'harmonie du cosmos.",
          "En devenant un brillant maître de la dialectique cartésienne, le protagoniste perd la capacité d'adhésion spontanée à la prière, illustrant l'assèchement intérieur de l'intellectuel occidentalisé.",
          "Cette œuvre monumentale avertit les peuples du Sud que l'adoption sans discernement du modèle consumériste étranger conduit à la ruine spirituelle de l'humanité."
        ],
        quote: "L'école où nous poussons nos enfants fera d'eux des bâtards. Mais l'arbre ne grandit qu'en s'enfonçant dans la terre.",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : Le Conflit Métaphysique entre Foi & Rationalisme",
        statement: "L'œuvre confronte deux visions irréconciliables de l'existence : la civilisation du cœur tournée vers l'Éternité et la civilisation de la matière asservie à l'instant.",
        alternateStatements: [
          "Le débat entre Samba Diallo et les intellectuels parisiens éclaire l'abîme séparant l'angoisse sacrée de la mort et le confort technique superficiel.",
          "Cheikh Hamidou Kane critique avec acuité l'illusion d'une modernité marchande qui prétend étouffer la soif d'Absolu de l'homme.",
          "Le roman réhabilite la profondeur du mysticisme soufi face au désert moral engendré par la société industrielle contemporaine."
        ],
        explanation: "À Paris, Samba Diallo ne s'émerveille pas du machinisme urbain ; il est horrifié par le fait que les Occidentaux ont chassé Dieu et la pensée de la mort de leur quotidien pour s'étourdir dans l'activité frénétique.",
        alternateExplanations: [
          "L'auteur rappelle par cette confrontation magistrale que la vraie grandeur de l'homme ne se mesure pas au nombre de machines qu'il fabrique, mais à la pureté de son recueillement devant le mystère divin.",
          "En opposant la ferveur ascétique du Foyer ardent au rationalisme froid des facultés de philosophie, le roman dénonce la mutilation d'une modernité qui mutile la dimension mystique de l'âme.",
          "Cette méditation métaphysique donne à l'œuvre sa portée universelle, invitant tout être humain à refuser que l'accumulation matérielle n'étouffe sa dignité spirituelle."
        ],
        quote: "L'Occident a conquis le monde par sa science, mais en conquérant la terre, il a perdu le sens de la lumière divine.",
        connector: "D'un autre côté,"
      },
      {
        category: "Axe III : La Mort Mystique comme Réconciliation dans l'Absolu",
        statement: "Le dénouement tragique n'est pas un échec absurde, mais le retour triomphant de la goutte d'eau dans l'océan infini de la Transcendance.",
        alternateStatements: [
          "La disparition de Samba Diallo marque le dépassement glorieux des déchirements terrestres dans la plénitude de l'éternité retrouvée.",
          "Le roman philosophique s'achève sur une symphonie cosmique où l'âme libérée des contradictions historiques réintègre la patrie divine.",
          "La mort violente causée par le Fou apparaît comme l'acte d'amour providentiel qui soustrait le héros au poison de l'ambiguïté stérile."
        ],
        explanation: "Dans le sublime chant final, le temps se dissout et les antinomies s'effacent : Samba Diallo ne regrette rien car il rejoint enfin Thierno dans la lumière infinie où la foi ne connaît plus de doute.",
        alternateExplanations: [
          "Cette issue sacrificielle scelle le destin des êtres d'exception qui ont exploré les frontières extrêmes de deux mondes et qui ne peuvent trouver la paix que dans le sein de l'Inconditionné.",
          "Cheikh Hamidou Kane affirme ainsi la souveraineté ultime de la grâce spirituelle : l'aventure humaine n'a de sens que parce qu'elle s'ouvre sur l'Éternité bienveillante de Dieu.",
          "L'Aventure ambiguë s'impose dès lors comme l'une des plus pures méditations sur l'espérance, proclamant que le mystère divin réconciliera un jour les enfants divisés de la terre."
        ],
        quote: "Tu es le lieu où s'abolissent les contraires. Goûte à la paix où il n'y a plus ni jour ni nuit, mais la présence éternelle.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Apprendre l'art de vaincre sans avoir raison.",
        context: "Parole politique célèbre de la Grande Royale définissant l'objectif pragmatique de l'école nouvelle.",
        scope: "Citation phare pour traiter la dialectique du savoir technique vs savoir spirituel."
      },
      {
        quote: "Il n'y a que Dieu. Le monde n'est qu'un mirage qui passe, une illusion éphémère devant la grandeur du Tout-Puissant.",
        context: "Enseignement mystique fondamental de Thierno au Foyer ardent.",
        scope: "À mobiliser pour illustrer l'ascèse religieuse et le détachement des biens temporels."
      },
      {
        quote: "Je ne suis pas un homme libre. Je suis un être déchiré, un être ambigu entre la foi de mes pères et la science de mes maîtres.",
        context: "Aveu douloureux de Samba Diallo constatant l'exil irrémédiable de son âme.",
        scope: "Formule clé pour l'Axe du déchirement identitaire et de l'hybridation culturelle tragique."
      }
    ]
  },

  {
    id: "cahier_retour_cesaire",
    title: "Cahier d'un retour au pays natal",
    author: "Aimé Césaire",
    genre: "Poésie",
    periodAndMovement: "Mouvement de la Négritude & Surréalisme antillais (1939)",
    aliases: [
      "cahier d'un retour au pays natal", "cahier dun retour au pays natal", "aime cesaire", "cesaire",
      "negritude", "la tragedie du roi christophe", "roi christophe"
    ],
    themes: [
      "La Négritude comme cri de dignité, refus de l'assimilation et réhabilitation de l'homme noir",
      "La dénonciation féroce de la misère coloniale et de la servilité aliénante aux Antilles",
      "La transfiguration poétique de la souffrance par une langue volcanique et surréaliste",
      "Le poète comme prophète et voix des sans-voix (« ma bouche sera la bouche des malheurs »)",
      "La solidarité cosmique avec tous les opprimés et tous les colonisés de la terre"
    ],
    summaryContext: "Chef-d'œuvre fondateur publié en 1939, le Cahier d'un retour au pays natal forge le concept immortel de Négritude. De retour en Martinique, Aimé Césaire contemple la détresse de sa terre natale gangrenée par la faim et la honte coloniale. Dans un poème fleuve d'une puissance tellurique inouïe, il rejette l'assimilation servile et proclame la beauté indomptable de l'identité noire, appelant son peuple à se lever debout contre toutes les formes d'asservissement.",
    characters: [
      {
        name: "Le Poète-Porte-Parole",
        role: "Voix prophétique incarnant la conscience collective de son peuple opprimé.",
        dissertationUtility: "Illustre la mission sacrée de l'écrivain engagé qui met son verbe au service des damnés de la terre."
      },
      {
        name: "Le Nègre du tramway",
        role: "Passager misérable et ridicule croisé à Paris, objet de risée pour les bourgeois.",
        dissertationUtility: "Révèle l'étape cruciale de la culpabilité surmontée : le poète s'accuse d'avoir eu honte de ce frère pour mieux embrasser sa fraternité absolue."
      }
    ],
    literaryDevices: [
      {
        device: "Lyrisme tellurique et surréalisme incantatoire",
        explanation: "Emploi d'images fulgurantes, de rythmes syncopés et de métaphores minérales et végétales qui font exploser la rigidité de la langue classique.",
        exampleInText: "« Ma négritude n'est pas une pierre, sa surdité ruée contre le jour... elle plonge dans la chair rouge du sol. »"
      },
      {
        device: "Anaphores véhémentes et amplifications épiques",
        explanation: "La répétition martelée de refrains scandés comme des battements de tambour imprime au poème une force de transe émancipatrice.",
        exampleInText: "« Au bout du petit matin... Au bout du petit matin bourgeonnant d'anses frêles les Antilles qui ont faim... »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le refus de la résignation et la définition de la Négritude",
        description: "Césaire rejette la pitié occidentale et définit la Négritude non comme un repli biologique mais comme une énergie vivante créatrice.",
        examApplication: "À citer pour démontrer que la poésie est l'arme suprême de la reconquête de l'estime de soi pour les peuples dominés."
      },
      {
        sceneTitle: "La vision de l'homme debout dans la nef caraïbe",
        description: "Le navire négrier brise ses chaînes et le peuple autrefois courbé se dresse souverain dans l'histoire universelle.",
        examApplication: "Symbole magnifique de l'émancipation collective et de la finitude de toute tyrannie."
      }
    ],
    comparisons: [
      {
        otherWork: "Chants d'ombre",
        otherAuthor: "Léopold Sédar Senghor",
        comparisonPoint: "Deux voix majeures de la Négritude : Senghor privilégie la réconciliation et le métissage culturel, Césaire le cri volcanique et la rupture intransigeante."
      },
      {
        otherWork: "Les Misérables",
        otherAuthor: "Victor Hugo",
        comparisonPoint: "Même engagement prophétique de la poésie prenant le parti des humiliés et des bafoués contre l'ordre injuste."
      }
    ],
    arguments: [
      {
        category: "Axe I : La Vocation Libératrice de la Parole Poétique",
        statement: "La poésie cesse d'être un divertissement esthétique gratuit pour s'ériger en arme volcanique de libération des peuples asservis.",
        alternateStatements: [
          "Le verbe poétique se métamorphose en instrument de combat pour rendre leur fierté aux colonisés dépossédés de leur histoire.",
          "À travers le cri de Césaire, la littérature devient le réceptacle des souffrances collectives et le catalyseur de la révolte.",
          "L'écriture poétique brise les chaînes de l'aliénation pour restituer aux opprimés leur dignité souveraine."
        ],
        explanation: "Aimé Césaire affirme que son rôle d'écrivain est de porter le fardeau des muets de l'histoire : en criant l'injustice du système colonial, sa poésie forge la conscience de la liberté.",
        alternateExplanations: [
          "Dans le Cahier d'un retour au pays natal, Césaire prouve que les mots sont des pistolets chargés capables d'ébranler les citadelles de la certitude colonialiste.",
          "Loin de tout repli narcissique, le poète s'identifie viscéralement à la détresse de son île natale pour la transfigurer en un chant universel de résurrection.",
          "L'engagement césairien démontre que l'art authentique ne sépare jamais la beauté du langage de l'exigence morale de justice et de vérité."
        ],
        quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix la liberté de celles qui s'affaissent au cachot du désespoir.",
        connector: "De prime abord,"
      },
      {
        category: "Axe II : La Réhabilitation Glorieuse de l'Identité Noire",
        statement: "La Négritude retourne l'insulte colonialiste pour en faire le blason glorieux d'un humanisme régénéré.",
        alternateStatements: [
          "Loin de renier la couleur de sa peau, le poète en fait le symbole de la communion ardente avec les énergies secrètes de la nature.",
          "La poésie célèbre les civilisations qui ont privilégié la fraternité et le sacré plutôt que l'exploitation forcenée de la matière.",
          "L'œuvre déconstruit le mythe de la suprématie technique occidentale pour rappeler la grandeur spirituelle des cultures premières."
        ],
        explanation: "Césaire glorifie ceux qui n'ont rien inventé de destructeur mais qui vivent en résonance profonde avec le souffle de la terre et de l'univers, opposant la vitalité de l'Afrique au machinisme désincarné de l'Europe.",
        alternateExplanations: [
          "En proclamant que sa négritude plonge dans la chair rouge du sol, Césaire rend à l'homme noir son statut de créateur et de partenaire légitime dans le banquet de l'universel.",
          "Cette fierté retrouvée pulvérise le complexe d'infériorité distillé par des siècles d'esclavage et de traite négrière.",
          "Le poème affirme que l'humanité a un besoin urgent de la chaleur spirituelle noire pour ne pas périr dans la glaciation de son propre égoïsme technique."
        ],
        quote: "Eia pour ceux qui n'ont jamais inventé rien / pour ceux qui n'ont jamais exploré rien / pour ceux qui n'ont jamais dompté rien / mais ils s'abandonnent, saisis, à l'essence de toute chose...",
        connector: "Par ailleurs,"
      },
      {
        category: "Axe III : L'Humanisme Universel & L'Éveil de Tous les Hommes",
        statement: "Le combat pour la dignité noire débouche sur une fraternité sans frontière englobant la souffrance de tous les déshérités du globe.",
        alternateStatements: [
          "Le cri de Césaire n'est pas un racisme inversé mais un vibrant appel à l'avènement d'un monde fraternel libéré du joug de l'oppression.",
          "La Négritude se veut une passerelle d'amour et de réconciliation unissant tous les peuples dans l'égale dignité humaine.",
          "L'œuvre s'achève sur une vision triomphale où la rédemption des Antilles annonce l'émancipation universelle de l'homme."
        ],
        explanation: "Le poète refuse expressément d'enfermer son combat dans la haine de l'autre : il prie son cœur de ne pas concevoir de ressentiment stérile et de demeurer ouvert à l'amour universel.",
        alternateExplanations: [
          "Césaire insiste sur le fait que la libération de l'homme noir est la condition sine qua non de la purification morale du monde entier.",
          "Cette conclusion grandiose prouve que la grande poésie ne détruit pas mais régénère : elle appelle tous les hommes à se lever ensemble pour bâtir la cité de l'équité.",
          "L'héritage d'Aimé Césaire demeure ainsi l'un des phares les plus éclatants de la littérature mondiale, rappelant que tout poème d'espérance féconde l'avenir."
        ],
        quote: "Faites de moi l'exécuteur de ces œuvres hautes. Donnez-moi à ne pas me taire quand le silence est un crime... Et surtout mon corps aussi bien que mon âme, gardez-vous de vous croiser les bras en l'attitude stérile du spectateur.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Ma négritude n'est pas une pierre, sa surdité ruée contre le jour ; ma négritude n'est pas une taie d'eau morte sur l'œil mort de la terre...",
        context: "Définition célèbre et dynamique de la Négritude.",
        scope: "Citation incontournable pour l'Axe de l'affirmation identitaire et de l'énergie créatrice."
      },
      {
        quote: "Et nous sommes debout maintenant, mon pays et moi, les cheveux dans le vent, ma main petite maintenant dans son poing énorme...",
        context: "Moment sublime du redressement collectif de la Martinique.",
        scope: "À mobiliser pour illustrer l'élan émancipateur et la victoire de l'espérance."
      }
    ]
  },

  {
    id: "pere_goriot_balzac",
    title: "Le Père Goriot",
    author: "Honoré de Balzac",
    genre: "Roman",
    periodAndMovement: "Réalisme français & La Comédie humaine (1835)",
    aliases: [
      "le pere goriot", "pere goriot", "balzac", "honore de balzac", "rastignac",
      "vautrin", "pension vauquer", "delphine de nucingen", "anastasie de restaud"
    ],
    themes: [
      "L'ambition sociale et la corruption morale dans le Paris de la Restauration",
      "La paternité sacrificielle poussée jusqu'à la déchéance et la folie mystique",
      "Le pouvoir absolu et corrupteur de l'argent roi au XIXe siècle",
      "La perte de l'innocence provinciale et l'apprentissage du cynisme mondain",
      "L'observation quasi scientifique de la société humaine par le roman-miroir"
    ],
    summaryContext: "Pilier magistral de La Comédie humaine paru en 1835, Le Père Goriot suit l'apprentissage impitoyable du jeune provincial Eugène de Rastignac dans le Paris des années 1819. Dans la sordide pension Vauquer se croisent deux destinées hors normes : Jean-Joachim Goriot, ancien vermicellier richissime ruiné et abandonné par ses deux filles nobles (Anastasie et Delphine) pour lesquelles il a tout sacrifié, et Vautrin, forçat évadé incarnant la révolte cynique contre l'hypocrisie des lois bourgeoises. Balzac y dissèque avec une lucidité féroce les mécanismes de la cupidité, du mariage d'intérêt et de l'ingratitude filiale.",
    characters: [
      {
        name: "Jean-Joachim Goriot",
        role: "Ancien négociant, père sacrificiel surnommé le « Christ de la paternité ».",
        dissertationUtility: "Incarne la passion absolue poussée jusqu'au sublime et au monstrueux, mourant dans la misère après avoir tout vendu pour le luxe de ses filles ingrates."
      },
      {
        name: "Eugène de Rastignac",
        role: "Jeune noble provincial sans fortune, étudiant en droit découvrant les réalités parisiennes.",
        dissertationUtility: "Modèle canonique du héros d'apprentissage qui enterre ses scrupules moraux pour conquérir les salons aristocratiques par la ruse et l'ambition."
      },
      {
        name: "Vautrin (Jacques Collin)",
        role: "Forçat évadé dissimulé sous un masque jovial, tentateur méphistophélique de Rastignac.",
        dissertationUtility: "Dévoile crûment l'envers du décor social : pour réussir dans un monde corrompu, il faut « entrer dans cette masse d'hommes comme un boulet de canon, ou s'y glisser comme une peste »."
      }
    ],
    literaryDevices: [
      {
        device: "Description réaliste minutieuse et symbolique",
        explanation: "Balzac décrit l'espace physique (la pension Vauquer) de manière à ce qu'il reflète fidèlement la déchéance morale de ses habitants.",
        exampleInText: "« Cette pièce pue le renfermé, le moisi, le rance ; elle donne froid ; elle est humide au nez, elle pénètre les vêtements... »"
      },
      {
        device: "Théorie du personnage récurrent",
        explanation: "Rastignac et Vautrin traversent de multiples romans, donnant à l'univers balzacien la profondeur et la vérité d'une véritable société vivante.",
        exampleInText: "Rastignac réapparaît dans de nombreux volumes de La Comédie humaine, devenu ministre richissime et blasé."
      }
    ],
    keyScenes: [
      {
        sceneTitle: "La leçon de cynisme de Vautrin dans le jardin",
        description: "Vautrin propose à Rastignac un pacte criminel pour épouser Victorine Taillefer après avoir fait tuer son frère.",
        examApplication: "À citer pour démontrer la fonction démystificatrice du roman : démasquer la tartufferie des lois qui ne punissent que les petits voleurs."
      },
      {
        sceneTitle: "L'agonie solitaire du Père Goriot",
        description: "Goriot meurt dans une mansarde infâme, n'ayant à son chevet que Rastignac et Bianchon, tandis que ses filles dansent au bal.",
        examApplication: "Illustration magistrale du drame familial provoqué par l'idolâtrie de l'argent et du rang social."
      },
      {
        sceneTitle: "Le défi final de Rastignac du haut du Père-Lachaise",
        description: "Après avoir enterré Goriot avec ses dernières pièces, Rastignac contemple Paris scintillant et lance : « À nous deux maintenant ! »",
        examApplication: "Formule mythique de l'entrée triomphale et sans pitié dans la jungle de la compétition sociale."
      }
    ],
    comparisons: [
      {
        otherWork: "Madame Bovary",
        otherAuthor: "Gustave Flaubert",
        comparisonPoint: "Deux chefs-d'œuvre réalistes fustigeant la médiocrité bourgeoise et la faillite des illusions romantiques."
      },
      {
        otherWork: "Le Rouge et le Noir",
        otherAuthor: "Stendhal",
        comparisonPoint: "Julien Sorel et Eugène de Rastignac incarnent l'ambition fiévreuse des jeunes gens pauvres sous la Restauration."
      }
    ],
    arguments: [
      {
        category: "Axe I : Le Roman comme Miroir Sociologique sans Fard",
        statement: "Le romancier réaliste accomplit une mission documentaire essentielle en peignant avec une fidélité quasi clinique les rouages de la cupidité humaine.",
        alternateStatements: [
          "L'œuvre balzacienne agit comme une radiographie impitoyable des mœurs et des rapports de force fondés sur le pouvoir de l'argent.",
          "En devenant le secrétaire de la société française, l'écrivain élève le roman au rang d'une véritable science de l'homme.",
          "Le Père Goriot démasque la faillite morale de l'aristocratie et de la haute finance où l'amour n'est plus qu'une marchandise négociable."
        ],
        explanation: "Balzac prouve que l'argent est le véritable moteur de la Restauration : les filles de Goriot n'embrassent leur père que pour lui soutirer ses dernières rentes afin de payer leurs toilettes de bal.",
        alternateExplanations: [
          "Dans Le Père Goriot, Balzac formule sa devise historique : la société allait être l'historien, le romancier n'était que le secrétaire dressant l'inventaire des vices et des passions.",
          "L'observation minutieuse des contrats de mariage et des faillites bancaires démontre que la littérature réaliste s'enracine dans le concret matériel pour mieux en dégager les lois morales universelles.",
          "Cette démonstration implacable établit que le roman est le révélateur le plus lucide des tares d'une époque qui a substitué le culte de l'or au culte de l'honneur."
        ],
        quote: "L'argent, c'est la vie. Monnaye fait tout. [...] Il faut entrer dans cette masse d'hommes comme un boulet de canon...",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : La Tragédie de la Paternité Sacrifiée",
        statement: "L'amour absolu, lorsqu'il est dépourvu de discernement, devient une passion dévorante qui conduit inéluctablement à la ruine et à l'ingratitude.",
        alternateStatements: [
          "Goriot incarne la dérive monstrueuse d'un sentiment paternel qui a acheté l'affection de ses enfants au lieu de leur inculquer la vertu.",
          "Le destin pathétique de Goriot offre au lecteur une méditation bouleversante sur le martyr d'un père dépouillé par son propre sang.",
          "L'écrivain montre que la complaisance aveugle engendre le mépris chez ceux-là mêmes pour qui l'on a consenti tous les sacrifices."
        ],
        explanation: "En pardonnant tout à Anastasie et Delphine jusqu'à bénir leurs infamies sur son lit de mort, Goriot atteint une grandeur christique sublime tout en illustrant l'abîme où plonge l'amour devenu idolâtrie.",
        alternateExplanations: [
          "Balzac qualifie son héros de 'Christ de la paternité' car Goriot boit le calice de la trahison filiale jusqu'à la lie sans jamais cesser d'aimer ses bourreaux.",
          "Cette mort atroce dans la solitude d'une mansarde glacée avertit le lecteur des dangers d'une passion exclusive qui aliène la raison et détruit la dignité humaine.",
          "La puissance dramatique de l'œuvre fait de ce bourgeois ordinaire une figure mythique digne des héros shakespeariens tels que le Roi Lear."
        ],
        quote: "Mes filles, c'était mon vice à moi ; elles étaient mes maîtresses, enfin tout ! J'avais plus soif de leurs baisers que le cerf de l'eau claire.",
        connector: "D'un autre côté,"
      },
      {
        category: "Axe III : L'Apprentissage du Cynisme & La Fin des Illusions",
        statement: "L'ascension dans une société corrompue exige le renoncement douloureux à la pureté morale de la jeunesse.",
        alternateStatements: [
          "L'itinéraire de Rastignac symbolise le passage tragique de la candeur provinciale à l'ambition impitoyable de l'homme du monde.",
          "Face à la pourriture des salons, le jeune héros comprend que la vertu sans fortune est condamnée à l'écrasement.",
          "Le roman d'apprentissage balzacien avertit la jeunesse que le triomphe social a pour prix l'assèchement inéluctable du cœur."
        ],
        explanation: "En lançant son fameux défi à la capitale depuis le cimetière du Père-Lachaise, Rastignac tourne définitivement le dos à l'idéalisme pour devenir à son tour un prédateur social redoutable.",
        alternateExplanations: [
          "La leçon de Vautrin et la mort de Goriot ont achevé l'éducation d'Eugène : il sait désormais que pour vaincre les hommes, il faut mépriser leurs faiblesses.",
          "Cette conclusion grandiose clôt la formation du héros tout en ouvrant le cycle infini de ses manœuvres politiques dans les volumes suivants de La Comédie humaine.",
          "Balzac démontre ainsi que le roman moderne n'est pas un conte moralisant pour enfants sages, mais le récit viril et lucide des compromissions inhérentes à l'existence."
        ],
        quote: "À nous deux maintenant !",
        connector: "Enfin,"
      }
    ],
    keyQuotes: [
      {
        quote: "La société française allait être l'historien, je ne devais être que le secrétaire.",
        context: "Avant-propos de La Comédie humaine définissant le projet réaliste.",
        scope: "Citation indispensable pour justifier la vocation documentaire et scientifique du roman."
      },
      {
        quote: "À nous deux maintenant !",
        context: "Cri de défi lancé par Eugène de Rastignac à Paris du haut du Père-Lachaise.",
        scope: "À mobiliser pour illustrer l'ambition sociale et la fin des illusions de jeunesse."
      }
    ]
  },

  {
    id: "germinal_zola",
    title: "Germinal",
    author: "Émile Zola",
    genre: "Roman",
    periodAndMovement: "Naturalisme & Les Rougon-Macquart (1885)",
    aliases: [
      "germinal", "zola", "emile zola", "etienne lantier", "maheu", "la maheude",
      "le voreux", "souvarine", "chaval", "catherine maheu"
    ],
    themes: [
      "La lutte des classes et l'exploitation inhumaine du prolétariat minier",
      "La grève comme éveil héroïque de la conscience collective et politique",
      "Le déterminisme social, physiologique et l'hérédité chez Zola",
      "La transformation du monstre industriel (le Voreux) en idole dévoratrice de chair humaine",
      "L'espérance prophétique d'une révolution régénératrice pour les siècles futurs"
    ],
    summaryContext: "Chef-d'œuvre absolu du naturalisme publié en 1885, Germinal est le treizième volume des Rougon-Macquart. Émile Zola y dépeint la condition atroce des mineurs de fond dans le nord de la France au XIXe siècle. Étienne Lantier, ouvrier mécanicien renvoyé pour rébellion, descend dans la fosse du Voreux et s'éprend de Catherine Maheu. Révolté par la faim, la misère et les amendes infligées par la Compagnie des mines, Étienne pousse les ouvriers à une grève historique. Malgré la répression sanglante par l'armée et le sabotage anarchiste de Souvarine, l'échec immédiat porte en germe la récolte d'une justice sociale inéluctable.",
    characters: [
      {
        name: "Étienne Lantier",
        role: "Ouvrier instruit, meneur visionnaire de la grève porteur des idéaux socialistes.",
        dissertationUtility: "Incarne l'éveil politique de la classe ouvrière et la difficulté de guider une foule affamée sans basculer dans la tragédie."
      },
      {
        name: "Toussaint Maheu",
        role: "Chef de famille exemplaire, mineur courageux respecté de tous.",
        dissertationUtility: "Représente la noblesse d'âme et la dignité du travailleur honnête abattu par les balles de la troupe au service du capital."
      },
      {
        name: "La Maheude",
        role: "Mère de sept enfants, incarnation de la force invincible et de la douleur maternelle.",
        dissertationUtility: "Symbolise la métamorphose de la résignation en cri de révolte farouche : après la mort de son mari et de ses enfants, elle redescend à la mine la tête haute."
      },
      {
        name: "Souvarine",
        role: "Machineur russe, anarchiste partisan de la destruction totale par le néant.",
        dissertationUtility: "Figure de l'extrémisme nihiliste qui sabote la mine, montrant les périls d'une colère aveugle déconnectée de l'amour des hommes."
      }
    ],
    literaryDevices: [
      {
        device: "Amplification mythologique et métaphores animistes",
        explanation: "La fosse du Voreux est décrite comme une bête monstrueuse et gloutonne qui dévore des générations de travailleurs pour engraisser des actionnaires invisibles.",
        exampleInText: "« Le Voreux, accroupi dans son pli de terrain, avec ses allures de bête méchante, respirait d'une haleine plus lente et plus profonde... engloutissant des cargaisons d'hommes. »"
      },
      {
        device: "Tableaux épiques de foule et dynamique collective",
        explanation: "Zola excelle à peindre la psychologie des masses en mouvement, transformant les mineurs en grève en un fleuve humain mugissant.",
        exampleInText: "La marche des grévistes déguenillés à travers la plaine glacée hurlant : « Du pain ! du pain ! du pain ! »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "La descente infernale dans les boyaux de la terre",
        description: "Étienne découvre le travail suffocant au fond de la fosse, plié en deux dans la chaleur humide et la poussière de charbon.",
        examApplication: "Démonstration exemplaire de la force d'immersion du naturalisme pour éveiller la compassion du lecteur."
      },
      {
        sceneTitle: "Le massacre des mineurs par les soldats",
        description: "Face aux mineurs désarmés demandant du travail et du pain, la troupe fait feu, tuant Maheu et plusieurs enfants.",
        examApplication: "À citer pour illustrer la dénonciation de la collusion violente entre la force publique de l'État et les intérêts capitalistes."
      },
      {
        sceneTitle: "La fin prophétique et la germination des germes futurs",
        description: "Étienne quitte la mine un matin de printemps ; sous ses pieds, il entend la rumeur sourde des camarades qui creusent pour la moisson des temps nouveaux.",
        examApplication: "Passage magistral pour conclure une dissertation sur l'espérance sociale et la portée émancipatrice de la littérature."
      }
    ],
    comparisons: [
      {
        otherWork: "Les Misérables",
        otherAuthor: "Victor Hugo",
        comparisonPoint: "Même pitié infinie pour les réprouvés et même foi inébranlable dans le triomphe futur de la fraternité humaine."
      },
      {
        otherWork: "Une vie de boy",
        otherAuthor: "Ferdinand Oyono",
        comparisonPoint: "Peinture sans concession de l'exploitation brutale des corps par un système d'oppression économique et politique."
      }
    ],
    arguments: [
      {
        category: "Axe I : L'Engagement de l'Écrivain comme Juge d'Instruction Social",
        statement: "L'enquête naturaliste plonge au cœur de la misère prolétarienne pour interpeller la conscience collective et hâter les réformes de justice.",
        alternateStatements: [
          "Le roman se fait l'avocat passionné des masses ouvrières étouffées dans l'obscurité des fosses minières.",
          "Zola applique la méthode expérimentale pour prouver que les vices des opprimés sont le produit direct d'un milieu dégradant.",
          "L'œuvre dénonce sans fard l'abîme moral séparant le dividende insolent des actionnaires de la famine quotidienne des mineurs."
        ],
        explanation: "En descendant lui-même au fond des puits d'Anzin pendant la grève de 1884, Zola accumule les preuves vécues pour démontrer que la révolte ouvrière n'est pas un caprice criminel mais une exigence vitale de survie.",
        alternateExplanations: [
          "Dans Le Roman expérimental, Zola rappelle que les écrivains sont les juges d'instruction des hommes et de leurs passions : Germinal instruit le procès sans appel du capitalisme sauvage.",
          "La peinture de la déchéance de la famille Maheu prouve que tant qu'un système réduit les êtres humains à l'état de bêtes de somme, la civilisation court vers des explosions de violence cataclysmiques.",
          "Cette œuvre immortelle illustre avec éclat la vocation morale et sociale du roman moderne, qui ne peut demeurer neutre devant l'injustice institutionnalisée."
        ],
        quote: "Nous autres romanciers, nous sommes les juges d'instruction des hommes et de leurs passions. [...] Germinal est une œuvre de pitié et de vérité.",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : La Force Épique du Collectif & L'Éveil de la Conscience",
        statement: "Le véritable héros de l'œuvre n'est pas un individu solitaire mais le peuple en marche prenant conscience de sa force historique souveraine.",
        alternateStatements: [
          "Zola renouvelle le genre romanesque en conférant à la masse des travailleurs la stature grandiose des héros de l'épopée antique.",
          "La grève agit comme le révélateur spirituel qui arrache les ouvriers à l'hébétude pour leur insuffler l'idéal de la dignité partagée.",
          "La solidarité ouvrière transcende les rivalités égoïstes pour faire jaillir l'espérance d'une humanité réconciliée."
        ],
        explanation: "La faim partagée et la marche commune transforment les bêtes de somme de la fosse en citoyens conscients de leurs droits, prouvant que l'union des faibles est capable de faire trembler les puissants.",
        alternateExplanations: [
          "En peignant la marée humaine des grévistes chantant et réclamant du pain, Zola montre que le peuple porte en lui une énergie colossale qui façonnera l'histoire du XXe siècle.",
          "L'échec militaire de la grève ne détruit pas la victoire morale des mineurs : ils ont prouvé au monde entier que leur labeur soutient toute la société et exige le respect absolu.",
          "Le roman célèbre ainsi la naissance de la conscience de classe comme une étape fondamentale et irréversible de l'émancipation humaine."
        ],
        quote: "C'était la vision rouge de la révolution qui les emporterait tous, fatalement, par une nuit sanglante de cette fin de siècle.",
        connector: "Toutefois,"
      },
      {
        category: "Axe III : L'Espérance Prophétique de la Moisson Future",
        statement: "L'échec tragique du présent n'est que l'enfouissement nécessaire de la graine qui mûrira dans les sillons triomphants de l'avenir.",
        alternateStatements: [
          "La conclusion de Germinal s'élève au-delà du deuil pour proclamer la certitude inébranlable de la victoire finale de la justice.",
          "Le symbole végétal de la germination affirme que nulle oppression armée ne saurait empêcher la terre de porter ses fruits de liberté.",
          "L'écrivain lègue à la postérité un hymne impérissable à l'espérance, assurant que le sacrifice des générations passées fécondera les siècles futurs."
        ],
        explanation: "Le titre même du roman fait référence au mois du printemps dans le calendrier républicain : sous la terre labourée par la douleur, les germes d'une armée vengeresse grandissent pour la moisson du siècle nouveau.",
        alternateExplanations: [
          "En quittant la fosse sous le soleil d'avril qui rayonne, Étienne Lantier n'est plus un fugitif brisé mais le semeur lucide des temps nouveaux.",
          "Cette vision messianique donne à l'œuvre une portée universelle qui console les opprimés de toutes les époques et de tous les continents.",
          "Zola prouve ainsi que la grande littérature n'enferme jamais l'homme dans le désespoir, mais lui ouvre toujours la perspective lumineuse de son propre relèvement."
        ],
        quote: "Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur, et dont la germination allait bientôt faire éclater la terre.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Des hommes poussaient, une armée noire, vengeresse, qui germait lentement dans les sillons, grandissant pour les récoltes du siècle futur...",
        context: "Dernière phrase immortelle du roman consacrant le titre Germinal.",
        scope: "Citation maîtresse absolue pour l'Axe de l'espérance révolutionnaire et de la justice future."
      },
      {
        quote: "Du pain ! du pain ! du pain ! Rien que ces trois mots scandés sur les routes glacées.",
        context: "Cri de ralliement des grévistes défilant dans la plaine.",
        scope: "À mobiliser pour illustrer la faim élémentaire et la légitimité vitale de la révolte ouvrière."
      }
    ]
  },

  {
    id: "tartuffe_moliere",
    title: "Tartuffe (ou l'Imposteur)",
    author: "Molière",
    genre: "Théâtre",
    periodAndMovement: "Classicisme français & Comédie de mœurs (1664/1669)",
    aliases: [
      "tartuffe", "l'imposteur", "limposteur", "moliere", "molière", "orgon",
      "elmire", "dorine", "cleante", "damis", "le misanthrope"
    ],
    themes: [
      "La satire féroce de l'hypocrisie et de la fausse dévotion religieuse",
      "L'aveuglement fanatique et la tyrannie patriarcale au sein du foyer",
      "Le rôle de la comédie classique : « corriger les mœurs en riant » (castigat ridendo mores)",
      "La ruse et l'intelligence féminine pour démasquer l'imposture des puissants",
      "Le triomphe de la raison éclairée et de l'autorité royale pacificatrice"
    ],
    summaryContext: "Présentée en 1664 puis interdite sous la pression de la cabale des dévots (la Compagnie du Saint-Sacrement) avant d'être autorisée en 1669 par Louis XIV, Tartuffe est l'un des sommets de la comédie moliéresque. Orgon, riche bourgeois parisien aveuglé par une piété fanatique, a recueilli chez lui Tartuffe, un faux dévot et escroc machiavélique qui feint une sainteté outrancière pour capter son héritage et séduire sa femme Elmire. Malgré les mises en garde de sa famille et de la servante Dorine, Orgon déshérite son fils et donne la main de sa fille à l'imposteur, jusqu'à ce qu'Elmire ne piège Tartuffe sous une table, démasquant sa concupiscence aux yeux du mari enfin dessillé.",
    characters: [
      {
        name: "Tartuffe",
        role: "Faux dévot, hypocrite sensuel et manipulateur sans scrupule.",
        dissertationUtility: "Type littéraire immortel incarnant l'usage cynique de la religion comme masque pour assouvir des appétits matériels et charnels."
      },
      {
        name: "Orgon",
        role: "Bourgeois autoritaire crédule, aveuglé par sa fascination pour Tartuffe.",
        dissertationUtility: "Symbole de la dérive sectaire et de la bêtise fanatique qui détruit l'harmonie familiale par obsession d'un salut factice."
      },
      {
        name: "Elmire",
        role: "Épouse vertueuse, intelligente et lucide d'Orgon.",
        dissertationUtility: "Représente la modération classique et l'ingéniosité féminine capable de démasquer l'escroc par un stratagème théâtral ingénieux."
      },
      {
        name: "Dorine",
        role: "Suivante franche, courageuse et pleine de bon sens populaire.",
        dissertationUtility: "Voix de la lucidité populaire qui ose braver la tyrannie du maître pour défendre les jeunes amants et dénoncer le ridicule du fanatisme."
      }
    ],
    literaryDevices: [
      {
        device: "Double énonciation théâtrale et ironie dramatique",
        explanation: "Le spectateur sait dès l'ouverture que Tartuffe est un hypocrite, ce qui rend chaque acte de crédulité d'Orgon irrésistiblement comique.",
        exampleInText: "Le célèbre dialogue : « Et Tartuffe ? — Il est gros et gras, le teint frais, et la bouche vermeille. — Le pauvre homme ! »"
      },
      {
        device: "Scène de la table et comique de situation",
        explanation: "Orgon caché sous la table entend Tartuffe faire une cour assidue à sa propre femme, faisant éclater la vérité de manière visuelle et indiscutable.",
        exampleInText: "L'acte IV où Tartuffe déclare à Elmire : « Le scandale du monde est ce qui fait l'offense, / Et ce n'est pas pécher que pécher en silence. »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "L'entrée théâtrale retardée de Tartuffe (Acte III, scène 2)",
        description: "Tartuffe n'apparaît qu'au troisième acte, inaugurant sa présence par l'ordre hypocrite à son valet : « Laurent, serrez ma haire avec ma discipline... »",
        examApplication: "À citer pour prouver la maîtrise dramaturgique de Molière qui fait monter l'attente du spectateur avant de faire surgir le masque comique."
      },
      {
        sceneTitle: "La tentative de séduction d'Elmire par Tartuffe",
        description: "L'hypocrite use d'une casuistique perverse pour justifier son désir physique en prétendant aimer Dieu à travers la beauté de sa créature.",
        examApplication: "Exemple parfait de la dénonciation du dévoiement de la théologie au service des instincts bas."
      },
      {
        sceneTitle: "Le dénouement par le coup de théâtre royal (Deus ex machina)",
        description: "L'exempt du Roi vient arrêter Tartuffe au moment où celui-ci croyait chasser Orgon de sa propre maison.",
        examApplication: "Illustre l'hommage politique rendu au Roi éclairé qui discerne le vice sous le masque et protège ses sujets innocents."
      }
    ],
    comparisons: [
      {
        otherWork: "Le Mariage de Figaro",
        otherAuthor: "Beaumarchais",
        comparisonPoint: "Deux comédies subversives utilisant le rire et la sagacité des valets pour battre en brèche l'arbitraire des puissants."
      },
      {
        otherWork: "Les Caractères",
        otherAuthor: "Jean de La Bruyère",
        comparisonPoint: "Le portrait d'Onuphre chez La Bruyère fait écho direct à la figure du Tartuffe moliéresque."
      }
    ],
    arguments: [
      {
        category: "Axe I : La Mission Morale et Civique de la Comédie",
        statement: "Le théâtre classique remplit une vocation essentielle d'assainissement des mœurs en rendant le vice haïssable par la force du ridicule.",
        alternateStatements: [
          "Molière prouve que le rire est l'instrument le plus redoutable pour désarmer les imposteurs que la gravité des sermons n'effraie pas.",
          "La comédie ne cherche pas simplement à divertir la galerie, mais à guérir la société de ses passions aveugles et perverses.",
          "Le précepte « corriger les mœurs en riant » confère au dramaturge le rôle éminent d'éveilleur de la lucidité publique."
        ],
        explanation: "Dans ses Placets au Roi, Molière rappelle avec force que l'hypocrisie religieuse est l'un des vices les plus dangereux pour l'État car elle arme les coquins de la sainteté même pour dépouiller les âmes pieuses.",
        alternateExplanations: [
          "En peignant Tartuffe sous des traits grotesques et odieux, l'auteur protège la vraie foi contre les parasites qui l'instrumentalisent à des fins de pouvoir.",
          "Cette fonction cathartique et critique démontre que la scène de théâtre est une tribune citoyenne où la liberté de pensée combat le dogmatisme.",
          "La persécution subie par la pièce pendant cinq ans témoigne de la panique des dévots voyant leurs masques réduits en miettes par le génie comique."
        ],
        quote: "Le devoir de la comédie étant de corriger les hommes en les divertissant, j'ai cru que [...] je n'avais rien de mieux à faire que d'attaquer par des peintures ridicules les vices de mon siècle.",
        connector: "De prime abord,"
      },
      {
        category: "Axe II : La Critique du Fanatisme et de la Bêtise Bourgeoise",
        statement: "L'imposteur ne prospère que parce qu'il rencontre la complicité naïve d'esprits faibles fascinés par les apparences de la piété.",
        alternateStatements: [
          "Le véritable coupable désigné par Molière est la crédulité fanatique d'Orgon qui abdique sa raison pour idolâtrer un charlatan.",
          "La pièce montre comment l'obsession religieuse mal comprise dénature les sentiments les plus sacrés de la vie de famille.",
          "Le ridicule d'Orgon sert de mise en garde contre tous les maîtres abusifs qui sacrifient le bonheur de leurs proches à des chimères sectaires."
        ],
        explanation: "Orgon avoue lui-même que Tartuffe lui a enseigné à n'avoir d'affection pour personne et qu'il verrait mourir frère, enfants et femme sans s'en soucier, illustrant la déshumanisation produite par le fanatisme.",
        alternateExplanations: [
          "Molière dissèque avec finesse le mécanisme psychologique de l'emprise mentale : le faux gourou flatte l'orgueil de sa victime pour mieux régner en tyran sur son foyer.",
          "En opposant la sagesse tolérante de Cléante à la déraison d'Orgon, la pièce fait l'éloge de la juste mesure et du bon sens humaniste.",
          "Cette analyse intemporelle éclaire tous les phénomènes contemporains d'embrigadement où des individus instruits se soumettent aveuglément à des manipulateurs sans scrupule."
        ],
        quote: "Il m'enseigne à n'avoir affection pour rien, / De toutes amitiés il détache mon âme ; / Et je verrais mourir frère, enfants, mère et femme, / Que je m'en soucierais autant que de cela.",
        connector: "Toutefois,"
      },
      {
        category: "Axe III : Le Triomphe de la Raison Éclairée & De la Vérité",
        statement: "L'intelligence pratique et le courage de la vérité finissent toujours par triompher des machinations les plus ténébreuses.",
        alternateStatements: [
          "Le courage de Dorine et la finesse d'Elmire prouvent que la lucidité et la liberté de parole sont les meilleurs antidotes à l'oppression.",
          "Le dénouement théâtral réaffirme la foi classique dans un ordre juste où les méchants sont confondus et les innocents rétablis dans leurs droits.",
          "La pièce s'achève sur la célébration de l'harmonie sociale restaurée grâce à la défaite éclatante de la fourberie."
        ],
        explanation: "Le piège tendu par Elmire oblige Tartuffe à révéler sa concupiscence animale, démontrant que le vice finit toujours par se trahir lui-même sous le regard attentif de la raison.",
        alternateExplanations: [
          "L'intervention finale de l'exempt royal consacre la victoire de la justice souveraine sur les procès d'intention et les chantages hypocrites.",
          "Molière offre ainsi aux spectateurs un spectacle réjouissant et rassurant où la vérité dissipe les ténèbres pour faire triompher la fête du mariage légitime des amants.",
          "L'immortalité de Tartuffe confirme que le génie littéraire réside dans cette capacité souveraine à transformer le combat pour la vérité en un chef-d'œuvre de beauté et d'allégresse."
        ],
        quote: "Nous vivons sous un prince ennemi de la fraude, / Un prince dont les yeux se font jour dans les cœurs, / Et que ne peut tromper tout l'art des imposteurs.",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Couvrez ce sein que je ne saurois voir : / Par de pareils objets les âmes sont blessées, / Et cela fait venir de coupables pensées.",
        context: "Première réplique de Tartuffe à Dorine à l'Acte III.",
        scope: "Citation emblématique de la tartufferie et de la fausse pudeur outrancière."
      },
      {
        quote: "Le scandale du monde est ce qui fait l'offense, / Et ce n'est pas pécher que pécher en silence.",
        context: "Argument jésuitique de Tartuffe pour convaincre Elmire de céder à ses avances.",
        scope: "À citer pour dénoncer la morale élastique des hypocrites qui ne craignent que le qu'en-dira-t-on."
      }
    ]
  },

  {
    id: "fleurs_du_mal_baudelaire",
    title: "Les Fleurs du mal",
    author: "Charles Baudelaire",
    genre: "Poésie",
    periodAndMovement: "Modernité poétique & Symbolisme (1857)",
    aliases: [
      "les fleurs du mal", "fleurs du mal", "charles baudelaire", "baudelaire",
      "albatros", "spleen et ideal", "correspondances", "l'albatros"
    ],
    themes: [
      "Le drame existentiel du déchirement entre Spleen (angoisse, déchéance) et Idéal (élévation spirituelle)",
      "L'alchimie poétique transformant la boue et la laideur du monde en or esthétique",
      "La condition du poète maudit, exilé parmi les hommes et incompris de ses contemporains",
      "La théorie des Correspondances et les synesthésies entre parfums, couleurs et sons",
      "La beauté moderne de la grande ville industrielle et la figure du passant mélancolique"
    ],
    summaryContext: "Condamné en 1857 pour outrage à la morale publique, Les Fleurs du mal de Charles Baudelaire marque l'acte de naissance de la modernité poétique. Rompant avec l'épanchement romantique naïf, Baudelaire explore les abîmes de la conscience humaine écartelée entre le Spleen (poids étouffant du temps, de l'ennui et de la pourriture) et l'Idéal (quête désespérée de pureté et d'infini). Par une perfection formelle rigoureuse et une alchimie verbale inédite, le poète extrait la beauté des charognes, du remords et de la fange urbaine pour offrir à la littérature un trésor esthétique impérissable.",
    characters: [
      {
        name: "L'Albatros",
        role: "Oiseau royal des tempêtes capturé par les marins pour en faire un jouet ridicule.",
        dissertationUtility: "Allégorie sublime du poète : souverain dans les cieux de l'imagination et de l'art, mais infirme, boiteux et raillé par la foule lorsqu'il marche sur le sol vulgaire."
      },
      {
        name: "La Passante",
        role: "Silhouette fugitive croisée dans la cohue parisienne, incarnation de la beauté foudroyante et perdue.",
        dissertationUtility: "Symbolise l'érotisme mélancolique de la ville moderne où l'amour n'est plus qu'un éclair déchirant voué à l'éternité du regret."
      }
    ],
    literaryDevices: [
      {
        device: "Synesthésie et Correspondances horizontales et verticales",
        explanation: "Mise en réseau sensoriel des perceptions où les odeurs, les sons et les teintes communiquent avec le monde invisible des Idées.",
        exampleInText: "« Les parfums, les couleurs et les sons se répondent. / Il est des parfums frais comme des chairs d'enfants... »"
      },
      {
        device: "Oxymores saisissants et alchimie des contraires",
        explanation: "Association paradoxale de termes antinomiques pour faire jaillir une beauté vénéneuse et ténébreuse.",
        exampleInText: "« Ô beauté ! monstre énorme, effrayant, ingénu ! » ou « Une charogne infâme et superbe »."
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le poème « L'Albatros »",
        description: "Les matelots se moquent de l'oiseau géant dont les ailes blanches de géant l'empêchent de marcher sur le pont du navire.",
        examApplication: "À mobiliser pour traiter le statut de l'artiste dans la société marchande moderne : l'inadaptation sociale est la rançon de la supériorité spirituelle."
      },
      {
        sceneTitle: "Le tableau scandaleux d'« Une charogne »",
        description: "Au détour d'un sentier d'été, le poète contemple un cadavre en décomposition grouillant de vermine et le transfigure en œuvre d'art immortelle.",
        examApplication: "Exemple canonique de l'alchimie poétique : la poésie n'a pas besoin de sujets nobles, elle extrait la beauté divine de la décomposition même."
      }
    ],
    comparisons: [
      {
        otherWork: "Les Contemplations",
        otherAuthor: "Victor Hugo",
        comparisonPoint: "Hugo croit au progrès moral de l'humanité et à la bonté divine ; Baudelaire sonde la culpabilité, le remords et la tentation du mal."
      },
      {
        otherWork: "Cahier d'un retour au pays natal",
        otherAuthor: "Aimé Césaire",
        comparisonPoint: "Deux poètes révolutionnaires qui refusent la mièvrerie pour forger une langue nouvelle capable d'exprimer la blessure existentielle."
      }
    ],
    arguments: [
      {
        category: "Axe I : L'Alchimie Esthétique & La Beauté Nouvelle",
        statement: "La modernité poétique récuse l'obligation d'imiter le beau traditionnel pour révéler la splendeur ténébreuse de la laideur et de la douleur.",
        alternateStatements: [
          "Baudelaire accomplit une révolution copernicienne en arrachant la beauté à la fange du mal et de la déchéance physique.",
          "Le poète démontre que l'art possède le pouvoir quasi divin de transmuter le déchet en trésor d'or pur par la magie du verbe.",
          "Loin des conventions académiques mièvres, la poésie moderne explore les zones d'ombre les plus ténébreuses de l'âme humaine."
        ],
        explanation: "Dans le projet d'épilogue des Fleurs du mal, Baudelaire s'adresse à Paris pour résumer sa démarche d'alchimiste : « Tu m'as donné ta boue et j'en ai fait de l'or. »",
        alternateExplanations: [
          "En décrivant une charogne grouillante de vers avec la perfection mélodieuse du sonnet classique, l'auteur prouve que la forme artistique transcende la laideur du sujet pour lui conférer l'immortalité.",
          "Cette esthétique du paradoxe enseigne que le rôle du créateur n'est pas d'édulcorer la réalité, mais de sonder avec courage la tragédie de la corruption charnelle.",
          "Baudelaire libère ainsi l'art de toute obligation moralisatrice étroite, affirmant la souveraineté absolue de l'émotion esthétique pure."
        ],
        quote: "Car j'ai de chaque chose extrait la quintessence, / Tu m'as donné ta boue et j'en ai fait de l'or.",
        connector: "En premier lieu,"
      },
      {
        category: "Axe II : Le Drame du Spleen & La Déchirure de l'Homme",
        statement: "L'œuvre traduit avec une acuité poignante la torture de l'esprit aspirant à la pureté mais sans cesse précipité dans l'abîme du remords.",
        alternateStatements: [
          "Le Spleen baudelairien figure le cauchemar de l'angoisse temporelle qui étouffe l'âme sous le couvercle bas d'un ciel de plomb.",
          "L'être humain apparaît comme un champ de bataille déchiré entre la soif d'élévation spirituelle et l'attraction fatale de la chute.",
          "La poésie donne une forme sonore inoubliable au cri du damné luttant contre le néant et la morsure de l'Ennui dévorateur."
        ],
        explanation: "Dans les poèmes intitulés Spleen, le poète peint l'Ennui comme un monstre qui ferait volontiers de la terre un débris et engloutirait le monde dans un bâillement, illustrant la paralysie morbide de la volonté.",
        alternateExplanations: [
          "Cette exploration sans fard de la mélancolie contemporaine fait résonner la crise spirituelle de l'homme occidental privé des certitudes consolantes de la foi.",
          "En donnant une consistance charnelle au Temps qui ronge et dévore la vie, Baudelaire dresse le constat tragique de la finitude humaine.",
          "L'acuité de ce diagnostic existentiel donne aux Fleurs du mal une résonance éternelle dans laquelle tout être tourmenté reconnaît sa propre vérité intime."
        ],
        quote: "Quand le ciel bas et lourd pèse comme un couvercle / Sur l'esprit gémissant en proie aux longs ennuis...",
        connector: "Toutefois,"
      },
      {
        category: "Axe III : La Quête Mystique de l'Infini par le Voyage de l'Art",
        statement: "Devant l'épuisement du monde réel, la poésie s'affirme comme l'ultime vaisseau pour plonger au fond de l'Inconnu afin d'y trouver du nouveau.",
        alternateStatements: [
          "Le poème final « Le Voyage » résume l'héroïsme baudelairien qui accepte même la mort pourvu qu'elle ouvre les portes de l'Inédit.",
          "La création artistique constitue la seule délivrance authentique capable d'arracher l'homme à la prison du réel étriqué.",
          "L'alchimie baudelairienne réenchante l'existence en invitant la conscience à voguer vers les rivages de l'imagination souveraine."
        ],
        explanation: "Dans « L'Invitation au voyage », le poète célèbre un univers idéal où règnent le calme et la volupté, offrant au cœur las de ce monde un sanctuaire d'harmonie et de paix éternelle.",
        alternateExplanations: [
          "Cette tension constante vers l'au-delà des apparences fait de Baudelaire le père spirituel de Rimbaud et de Mallarmé, précurseur de l'aventure poétique moderne.",
          "La mort elle-même n'est plus envisagée avec terreur, mais saluée comme le vieux capitaine bienveillant qui lève l'ancre vers les rivages secrets de la Beauté absolue.",
          "Les Fleurs du mal triomphent ainsi de la décomposition et de la boue pour léguer à l'humanité un phare flamboyant guidant les esprits libres vers la lumière de l'Art."
        ],
        quote: "Plonger au fond du gouffre, Enfer ou Ciel, qu'importe ? / Au fond de l'Inconnu pour trouver du nouveau !",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Tu m'as donné ta boue et j'en ai fait de l'or.",
        context: "Épigraphe du poème à la gloire de Paris résumant le génie baudelairien.",
        scope: "Citation indispensable absolue pour l'Axe de l'alchimie poétique et de la transmutation de la douleur."
      },
      {
        quote: "Le Poète est semblable au prince des nuées / Qui hante la tempête et se rit de l'archer ; / Exilé sur le sol au milieu des huées, / Ses ailes de géant l'empêchent de marcher.",
        context: "Dernière strophe de « L'Albatros ».",
        scope: "Formule maîtresse pour analyser la condition et le drame de l'artiste dans la société."
      }
    ]
  },

  {
    id: "vie_de_boy_oyono",
    title: "Une vie de boy",
    author: "Ferdinand Oyono",
    genre: "Roman",
    periodAndMovement: "Roman anticolonial & Satire grinçante (1956)",
    aliases: [
      "une vie de boy", "vie de boy", "ferdinand oyono", "oyono", "toundi",
      "le commandant", "madame la commandante", "kalisia", "le vieux negre et la medaille"
    ],
    themes: [
      "Le démasquage cruel de l'illusion coloniale et de la fausse mission civilisatrice",
      "Le viol de l'intimité des maîtres blancs révélant leur médiocrité morale et leur lâcheté",
      "La condition du domestique noir comme témoin indiscret et victime expiatoire",
      "L'usage subversif du journal intime et de la naïveté feinte",
      "La tragédie sanglante de la répression coloniale broyant le loyal serviteur"
    ],
    summaryContext: "Publié en 1956, Une vie de boy de Ferdinand Oyono est le réquisitoire le plus grinçant et percutant contre l'hypocrisie de la colonisation au Cameroun. À travers les cahiers intimes du jeune Toundi Ondoua, boy dévoué au service du Commandant blanc de Dangan, le roman fait pénétrer le lecteur dans l'intimité la plus crue des colons. En découvrant que les Blancs ne sont ni des dieux ni des êtres supérieurs, mais des êtres mesquins, menteurs et adultères (Madame la Commandante trompant son mari avec le régisseur M. Moreau), Toundi commet le crime impardonnable d'avoir vu la nudité morale des maîtres. Faussement accusé de complicité de vol, il est torturé à mort par la police coloniale.",
    characters: [
      {
        name: "Joseph Toundi Ondoua",
        role: "Narrateur et boy du Commandant, esprit naïf dont le regard lucide démasque les maîtres.",
        dissertationUtility: "Incarne la figure tragique du colonisé zélé qui meurt d'avoir découvert la bassesse morale de ceux qu'il vénérait comme des dieux."
      },
      {
        name: "Le Commandant",
        role: "Chef de la circonscription coloniale, mari trompé colérique et impuissant.",
        dissertationUtility: "Symbole du pouvoir colonial autoritaire à l'extérieur mais ridicule et bafoué au sein de son propre foyer domestique."
      },
      {
        name: "Madame la Commandante (Suzy)",
        role: "Épouse infidèle, frivole et cruelle.",
        dissertationUtility: "Dévoile l'hypocrisie des vertus bourgeoises occidentales : pour cacher son adultère, elle fait massacrer le boy qui connaît son secret."
      },
      {
        name: "Kalisia",
        role: "Cuisinière perspicace et avertie des périls de la cour des Blancs.",
        dissertationUtility: "Voix de la lucidité populaire qui avertit Toundi : « Tant que tu leur serviras de torche pour voir leur saleté, ils te haïront. »"
      }
    ],
    literaryDevices: [
      {
        device: "Focalisation interne naïve et ironie dévastatrice",
        explanation: "Toundi raconte ce qu'il voit avec une candeur d'enfant, mais cette simplicité même fait ressortir avec une violence insoutenable le ridicule et la cruauté des Blancs.",
        exampleInText: "« Le chien du Commandant est comme les chrétiens : il a une place au paradis des chiens blancs. Moi, je suis le chien du Roi des chiens. »"
      },
      {
        device: "Forme du journal intime dérobé (manuscrit trouvé)",
        explanation: "Le prologue présente les cahiers rédigés en ewondo retrouvés dans la poche d'un agonisant en Guinée espagnole, conférant au récit le statut irréfutable de témoignage historique authentique.",
        exampleInText: "« Que sont tous ces Blancs qui nous commandent ? Rien que des hommes comme les autres, avec de la crasse sous les ongles... »"
      }
    ],
    keyScenes: [
      {
        sceneTitle: "Le lavement des pieds et la découverte de l'humanité du maître",
        description: "En lavant les pieds du Commandant, Toundi s'aperçoit que les Blancs sentent mauvais des pieds et ont des orteils difformes comme les Noirs.",
        examApplication: "À utiliser pour illustrer l'écroulement du mythe de la divinité blanche dans l'imaginaire du colonisé."
      },
      {
        sceneTitle: "La découverte du préservatif et de l'adultère de Madame",
        description: "En faisant le ménage sous le lit, Toundi ramasse les preuves matérielles de l'infidélité de Madame avec M. Moreau.",
        examApplication: "Scène pivot de la tragédie : le boy devient le témoin intolérable de la honte de la maîtresse blanche, signant son arrêt de mort."
      },
      {
        sceneTitle: "L'agonie sanglante et la question finale de Toundi",
        description: "Broyé par les coups de crosse dans le cachot avant de s'enfuir mourir dans la forêt, Toundi murmure son ultime interrogation : « Mon Dieu, seigneur, qu'est-ce que nous sommes ? »",
        examApplication: "Formule déchirante résumant la crise existentielle et la déshumanisation infligée par la domination coloniale."
      }
    ],
    comparisons: [
      {
        otherWork: "Les Soleils des Indépendances",
        otherAuthor: "Ahmadou Kourouma",
        comparisonPoint: "Même regard lucide et grinçant dénonçant l'arbitraire institutionnel et l'écrasement des humbles."
      },
      {
        otherWork: "Le Vieux Nègre et la médaille",
        otherAuthor: "Ferdinand Oyono",
        comparisonPoint: "Le vieux Meka et le jeune Toundi paient tous deux de leur sang et de leur honneur l'illusion d'avoir cru en l'amitié des maîtres coloniaux."
      }
    ],
    arguments: [
      {
        category: "Axe I : La Démystification du Pouvoir Colonial",
        statement: "Le roman satirique déconstruit sans ménagement le mythe de la supériorité raciale et civilisatrice des maîtres coloniaux.",
        alternateStatements: [
          "Oyono pulvérise l'illusion de l'infaillibilité blanche en exposant au grand jour la lâcheté et la mesquinerie des administrateurs.",
          "À travers les yeux du boy, la littérature coloniale s'inverse pour devenir l'observation impitoyable de la décadence des colons.",
          "L'œuvre prouve avec éclat que la prétendue mission civilisatrice n'était que le paravent d'une violence gratuite et de vices sordides."
        ],
        explanation: "En pénétrant dans la chambre à coucher du Commandant et de sa femme, Toundi découvre que les colons sont vulnérables, jaloux, mesquins et hypocrites, détruisant à jamais le dogme de leur perfection transcendante.",
        alternateExplanations: [
          "Dans Une vie de boy, Ferdinand Oyono use de l'ironie pour retourner l'ethnographie occidentale contre ses propres inventeurs : ce sont désormais les Blancs qui sont examinés et disséqués dans leurs travers les plus ridicules.",
          "Cette démystification lucide a joué un rôle historique décisif dans l'éveil de la conscience anticoloniale, montrant que les maîtres ne régnaient que par la terreur des fusils et non par une autorité morale naturelle.",
          "La satire féroce d'Oyono rappelle que toute domination impérialiste repose sur une mise en scène théâtrale que le regard d'un serviteur attentif suffit à faire s'effondrer comme un château de cartes."
        ],
        quote: "Les Blancs disent que nous sommes des sauvages, mais quand on voit leurs querelles et leurs mensonges dans l'ombre des cases, on se demande qui est le vrai sauvage.",
        connector: "De prime abord,"
      },
      {
        category: "Axe II : Le Savoir Interdit & Le Danger de la Lucidité",
        statement: "Dans un système oppresseur fondé sur le faux-semblant, la possession de la vérité devient un crime mortel que le tyran ne saurait pardonner.",
        alternateStatements: [
          "Toundi ne meurt pas d'avoir volé, mais d'avoir vu et compris ce que l'orgueil des maîtres exigeait de garder secret.",
          "Le regard lucide de l'esclave constitue une menace insupportable pour le dominant dont il révèle la fragilité honteuse.",
          "La tragédie du héros démontre que la clairvoyance est la plus périlleuse des vertus en régime de terreur dictatoriale."
        ],
        explanation: "Comme l'auteure Kalisia l'explique avec clairvoyance, le Commandant et sa femme ne pardonnent pas à Toundi de savoir qu'ils sont trompés et lâches ; son supplice est le prix exigé pour laver leur propre déshonneur conjugal.",
        alternateExplanations: [
          "La torture infligée au boy innocent prouve la perversité d'un appareil colonial prêt à assassiner un témoin gênant pour préserver la réputation de l'épouse d'un chef.",
          "Ce drame illustre la vulnérabilité absolue du travailleur domestique noir, dont l'existence ne pèse rien face à la vanité blessée d'une bourgeoise occidentale.",
          "L'œuvre élève ainsi le sort de Toundi au rang d'une parabole universelle sur le sort réservé aux lanceurs d'alerte et aux témoins lucides dans les sociétés totalitaires."
        ],
        quote: "Tant que tu seras là, ils penseront à ce que tu sais. Tu es le témoin de leur pourriture, et cela, ils ne te le pardonneront jamais.",
        connector: "Toutefois,"
      },
      {
        category: "Axe III : Le Cri Métaphysique et la Quête de Dignité Humaine",
        statement: "Au-delà du réquisitoire historique, le roman pose la question existentielle fondamentale de la condition humaine spoliée de son droit à exister.",
        alternateStatements: [
          "L'interrogation agonisante de Toundi retentit comme le sanglot universel de tout être réduit à l'esclavage et à la réification.",
          "La fin tragique arrache le récit à la seule satire politique pour en faire un chant funèbre d'une bouleversante intensité humaniste.",
          "Le sacrifice de Toundi accuse à jamais l'humanité civilisée d'avoir sacrifié des millions d'âmes pures à l'idole de la conquête."
        ],
        explanation: "En expirant loin de sa terre, Toundi demande à son compagnon : « Que sont tous les nègres qu'on dit être des Français ? », posant le problème indépassable de l'identité bafouée par l'assimilation menteuse.",
        alternateExplanations: [
          "Cette ultime prière brise le cœur du lecteur et consacre le chef-d'œuvre de Ferdinand Oyono comme l'un des textes les plus poignants de la littérature mondiale.",
          "La mort de Toundi n'est pas vaine : ses cahiers intimes franchissent les frontières pour porter son témoignage devant le tribunal de l'histoire et réveiller la fraternité des peuples.",
          "Une vie de boy demeure ainsi un monument de courage littéraire, affirmant que la vérité écrite d'un humble serviteur est plus puissante que toutes les armées coloniales de la terre."
        ],
        quote: "Mon Dieu, seigneur, qu'est-ce que nous sommes ? Que sont tous ces Noirs que l'on dit Français ?",
        connector: "En définitive,"
      }
    ],
    keyQuotes: [
      {
        quote: "Mon Dieu, seigneur, qu'est-ce que nous sommes ? Que sont tous ces Noirs que l'on dit Français ?",
        context: "Dernière parole déchirante de Toundi agonisant en forêt.",
        scope: "Citation phare absolue pour l'Axe de la désillusion coloniale et du déchirement identitaire."
      },
      {
        quote: "Tant que tu leur serviras de torche pour voir leur saleté, ils te haïront. Sauve-toi avant qu'ils ne te tuent !",
        context: "Mise en garde prophétique de Kalisia à Toundi.",
        scope: "À citer pour analyser le péril de la lucidité face au pouvoir despotique."
      }
    ]
  }
];

/**
 * Recherche une œuvre littéraire ou un auteur de référence dans la base dédiée.
 */
export function findCanonicalLiteraryWork(query: string): LiteraryWorkItem | null {
  const cleanQ = query.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/^(?:sur|le|la|les|l'|un|une|des|qui\s+est|c'est\s+quoi|dans)\s+/i, '')
    .trim();

  for (const work of CANONICAL_LITERARY_WORKS) {
    if (cleanQ.includes(work.id.toLowerCase())) return work;
    if (cleanQ.includes(work.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) return work;
    if (cleanQ.includes(work.author.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) return work;

    for (const alias of work.aliases) {
      const cleanAlias = alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (cleanQ.includes(cleanAlias) || cleanAlias.includes(cleanQ)) {
        return work;
      }
    }
  }

  // Corpus étendu ajouté sans modifier le comportement des œuvres canoniques déjà présentes.
  const extended = findExtendedLiteraryWork(query);
  if (extended) return extended;

  const argumentWork = argumentIllustrationsAsWorks().find(work => {
    const q = cleanQ;
    const hay = [work.title, work.author, ...(work.aliases || []), ...(work.themes || [])]
      .join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return q && hay.includes(q);
  });
  if (argumentWork) return argumentWork;

  return null;
}

/**
 * Construit un résultat académique d'excellence pour la dissertation de français
 * axé sur une œuvre ou un auteur du programme.
 */
export function buildLiteraryWorkCourseResult(params: {
  work: LiteraryWorkItem;
  originalQuery: string;
  variantIndex?: number;
  userSeed?: string;
  appendVariants?: boolean;
}): CourseSearchResult {
  const { work, originalQuery, variantIndex = 0, userSeed, appendVariants = false } = params;

  const totalVariants = work.arguments.length || 3;
  const userSeedHash = userSeed ? hashStringToInt(userSeed) : 0;
  const safeVariantIdx = (Math.abs(variantIndex) + (userSeed ? userSeedHash % totalVariants : 0)) % totalVariants;

  const concepts: CourseConceptFormula[] = [];

  // 1. Thèmes & Notions clés
  concepts.push({
    name: `Thèmes Majeurs & Enjeux de Dissertation : *${work.title}* (${work.author})`,
    formulaOrRule: `Genre : ${work.genre} | Mouvement : ${work.periodAndMovement} | Thèmes dominants : ${work.themes.join(" • ")}`,
    explanation: work.summaryContext,
    contextOrApplication: `Cadrage littéraire pour l'introduction (accroche historique, cadrage de l'auteur et définition des notions).`
  });

  // 2. Arguments réutilisables d'examen (variés selon l'élève et la recherche)
  // On ordonne les arguments à partir de safeVariantIdx pour varier l'angle prioritaire
  const orderedArgs = [...work.arguments];
  if (orderedArgs.length > 1) {
    const shift = safeVariantIdx % orderedArgs.length;
    const rotated = orderedArgs.slice(shift).concat(orderedArgs.slice(0, shift));
    orderedArgs.length = 0;
    orderedArgs.push(...rotated);
  }

  // Si appendVariants est activé, on prend tous les arguments, sinon les 2-3 premiers
  const selectedArgs = appendVariants ? orderedArgs : orderedArgs.slice(0, 3);

  selectedArgs.forEach((arg, idx) => {
    const diff = differentiateArgumentItem({
      arg: {
        statement: arg.statement,
        explanation: arg.explanation,
        quote: arg.quote,
        author: work.author,
        work: work.title,
        category: arg.category,
        connector: arg.connector
      },
      argIndex: idx,
      variantIndex: safeVariantIdx,
      topicKey: work.id,
      seed: userSeed || `${originalQuery}_${safeVariantIdx}_${idx}`
    });

    concepts.push({
      name: `Argument #${idx + 1} [${arg.category}] : ${diff.statement}`,
      formulaOrRule: `Auteur : ${work.author} | Œuvre : *${work.title}* | Citation : « ${diff.quote} »`,
      explanation: diff.explanation,
      contextOrApplication: `Modèle d'insertion en paragraphe : ${diff.connector || 'En premier lieu'}, ${diff.statement.toLowerCase().replace(/\.$/, '')}. En effet, ${diff.explanation} C'est ainsi que dans *${work.title}*, ${work.author} écrit : « ${diff.quote} ». Cette référence prouve rigoureusement l'argument selon la règle Idée ➔ Explication ➔ Exemple ➔ Citation ➔ Analyse.`
    });
  });

  // 3. Personnages Clés et Rôles en Dissertation
  work.characters.forEach((char, cIdx) => {
    concepts.push({
      name: `Personnage & Rôle Démonstratif #${cIdx + 1} : ${char.name}`,
      formulaOrRule: `Rôle dans l'intrigue : ${char.role}`,
      explanation: char.dissertationUtility,
      contextOrApplication: `Exemple concret à mobiliser dans le corps d'un paragraphe pour prouver l'impact psychologique et social de la thèse.`
    });
  });

  // 4. Procédés Littéraires & Stylistiques
  work.literaryDevices.forEach((dev, dIdx) => {
    concepts.push({
      name: `Procédé Littéraire #${dIdx + 1} : ${dev.device}`,
      formulaOrRule: `Exemple dans le texte : ${dev.exampleInText}`,
      explanation: dev.explanation,
      contextOrApplication: `Analyse stylistique indispensable pour lier le fond et la forme dans l'explication du paragraphe littéraire.`
    });
  });

  // 5. Scènes d'Anthologie & Passages Clés
  work.keyScenes.forEach((scene, sIdx) => {
    concepts.push({
      name: `Scène Clé #${sIdx + 1} : ${scene.sceneTitle}`,
      formulaOrRule: `Description de la scène : ${scene.description}`,
      explanation: scene.examApplication,
      contextOrApplication: `Passage d'anthologie à convoquer en dissertation pour appuyer une argumentation précise.`
    });
  });

  // 6. Rapprochements et Intertextualité
  work.comparisons.forEach((comp, compIdx) => {
    concepts.push({
      name: `Rapprochement Littéraire #${compIdx + 1} : *${comp.otherWork}* de ${comp.otherAuthor}`,
      formulaOrRule: `Point de comparaison : ${comp.comparisonPoint}`,
      explanation: `Mise en perspective féconde montrant la maîtrise du corpus et l'intertextualité entre les œuvres du programme.`,
      contextOrApplication: `Idéal pour enrichir un paragraphe de nuance, une antithèse ou l'ouverture de la conclusion.`
    });
  });

  // 7. Citations vérifiées majeures
  work.keyQuotes.forEach((kq, qIdx) => {
    concepts.push({
      name: `Citation Majeure #${qIdx + 1} : « ${kq.quote} »`,
      formulaOrRule: `Auteur : ${work.author} | Œuvre : *${work.title}* | Contexte : ${kq.context}`,
      explanation: `Portée dans la dissertation : ${kq.scope}`,
      contextOrApplication: `Citation authentifiée à insérer entre guillemets pour valider la démonstration selon la méthode officielle.`
    });
  });

  const method: CourseMethodStep[] = [
    {
      stepNumber: 1,
      title: `Intégration de l'œuvre (*${work.title}*) dans l'Introduction`,
      whatToDo: `Mobiliser l'auteur (${work.author}), son époque (${work.periodAndMovement}) et la problématique centrale du sujet sans jamais recopier la consigne brute.`,
      reflexOrTip: "Soulignez toujours le titre de l'œuvre complète à la règle dans votre copie."
    },
    {
      stepNumber: 2,
      title: "Structure Quinquennale Canonique du Paragraphe Argumentatif",
      whatToDo: `Respecter strictement les 5 étapes : 1. Idée directrice affirmée ➔ 2. Explication conceptuelle du mécanisme ➔ 3. Exemple tiré de *${work.title}* ➔ 4. Citation exacte entre guillemets ➔ 5. Commentaire d'analyse critique montrant comment l'exemple prouve l'idée.`,
      reflexOrTip: "La citation ne remplace jamais l'argument : elle vient couronner une explication préalable solide de 2 à 3 phrases."
    },
    {
      stepNumber: 3,
      title: "Exploitation fine des Procédés Littéraires",
      whatToDo: `Ne pas se contenter de raconter l'histoire : nommer les procédés stylistiques (${work.literaryDevices.map(d => d.device).slice(0, 2).join(', ')}) pour prouver comment l'écriture soutient le sens.`,
      reflexOrTip: "Formule canonique : « Par l'usage de [procédé], l'auteur rend sensible que... »"
    },
    {
      stepNumber: 4,
      title: "Rapprochement et Élargissement en Conclusion",
      whatToDo: `Établir un pont avec une autre œuvre majeure (${work.comparisons[0]?.otherWork || 'un autre texte classique'}) pour enrichir le bilan et formuler une ouverture prospective pertinente.`,
      reflexOrTip: "L'ouverture ne doit pas être une question gratuite mais un élargissement esthétique ou philosophique motivé."
    }
  ];

  const firstArg = orderedArgs[0] || work.arguments[0];

  return {
    query: originalQuery,
    discipline: "francais",
    disciplineLabel: "Français & Littérature (Terminale A, C, D & Concours)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: `Dissertation Littéraire : ${work.title} (${work.author}) — Thèmes, Arguments, Procédés & Citations`,
    definitionAndScope: `Fiche complète de dissertation sur l'œuvre canonique « ${work.title} » de ${work.author}.\n\nCadre d'analyse :\n${work.summaryContext}\n\nThèmes essentiels au Baccalauréat :\n${work.themes.map(t => `• ${t}`).join('\n')}`,
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: method,
    solvedExample: {
      problemStatement: `Comment rédiger un paragraphe de dissertation d'excellence en mobilisant « ${work.title} » de ${work.author} ?`,
      solutionStepByStep: `1. Idée directrice : ${firstArg.connector || 'En premier lieu'}, ${firstArg.statement.toLowerCase().replace(/\.$/, '')}.\n` +
        `2. Explication préalable approfondie : ${firstArg.explanation}\n` +
        `3. Exemple d'œuvre précis : C'est ce que met en lumière ${work.author} dans son roman *${work.title}*, à travers la figure emblématique de ${work.characters[0]?.name || 'son protagoniste'} qui ${work.characters[0]?.role.toLowerCase() || 'illustre ce déchirement'}.\n` +
        `4. Citation exacte insérée avec élégance : L'auteur le formule de manière décisive : « ${firstArg.quote} ».\n` +
        `5. Commentaire et analyse d'impact : Par cette écriture percutante, l'œuvre dépasse la simple anecdote pour démontrer que la littérature accomplit sa mission d'éveil des consciences face aux tragédies de son temps.`,
      finalAnswer: `Paragraphe d'excellence rédigé selon la règle canonique Idée ➔ Explication ➔ Exemple ➔ Citation ➔ Analyse.`
    },
    classicExamTraps: [
      "Faire un simple résumé de l'intrigue au lieu de construire une argumentation démonstrative.",
      "Oublier de souligner le titre de l'œuvre à la règle dans la copie d'examen.",
      "Parachuter une citation sans explication préalable : la citation doit couronner une idée déjà explicitée.",
      "Ignorer les procédés stylistiques de l'auteur en réduisant l'œuvre à un document sociologique brut."
    ],
    selfCheckChecklist: [
      `Le titre complet de l'œuvre (*${work.title}*) et le nom de l'auteur (${work.author}) sont-ils exacts ?`,
      "L'idée directrice est-elle formulée sans citer immédiatement le texte ?",
      "L'explication précède-t-elle la citation entre guillemets ?",
      "Les procédés littéraires et la portée critique sont-ils clairement analysés ?"
    ],
    quickRevisionMemo: `Mémo révision *${work.title}* (${work.author}) : Mouvement = ${work.periodAndMovement}. Thème central = ${work.themes[0]}. Personnage clé = ${work.characters[0]?.name}. Citation phare = « ${work.keyQuotes[0]?.quote || firstArg.quote} ».`,
    certificationNote: "Fiche officielle conforme aux exigences de notation de la Dissertation Littéraire au Baccalauréat (0 appel IA)."
  };
}
