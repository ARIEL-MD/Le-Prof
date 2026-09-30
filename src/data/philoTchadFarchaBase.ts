/**
 * BASE DE DONNÉES PÉDAGOGIQUE — 20 SUJETS DE PHILO TYPE BAC (TCHAD - FARCHA)
 * Source : Fomesoutra.com
 * Auteur étudiant : Saleh Mahamat Addimi (Lycée Adventiste de Farcha, N'Djaména, Tchad)
 * Révision & Correction : M. Allah Hogoum Bessalé
 * Année scolaire : 2021-2022
 * 
 * Contient les 20 sujets types du Baccalauréat traités avec :
 * - Définitions contextuelles des termes essentiels
 * - Problématique et question directrice
 * - Thèse et antithèse argumentées avec corpus d'auteurs (Descartes, Sartre, Bergson, Freud, Benveniste, Hölderlin, Hegel, Jean Lacroix, Aristote, Gandhi, Max Weber, Marx, Bakounine, Thomas Sankara, François Tombalbaye / Ngarta, Lamartine, Platon, Rabelais, Machiavel)
 * - Synthèse / Bilan conclusif
 */

export interface PhiloSujetTchad {
  numero: number;
  sujet: string;
  sessionBac?: string;
  theme: string;
  notions: string[];
  problemeCentral: string;
  these: {
    orientation: string;
    arguments: string[];
    auteursCites: string[];
  };
  antithese: {
    orientation: string;
    arguments: string[];
    auteursCites: string[];
  };
  conclusionSynthese: string;
}

export const PHILO_TCHAD_FARCHA_SUJETS: PhiloSujetTchad[] = [
  {
    numero: 1,
    sujet: "L’existence de l’inconscient est une certitude ou une hypothèse ?",
    theme: "L'inconscient psychique",
    notions: ["Conscience", "Inconscient", "Vérité", "Doute"],
    problemeCentral: "L'inconscient est-il une réalité psychologique irréfutable ou une simple conjecture explicative ?",
    these: {
      orientation: "L'inconscient comme certitude indéniable manifestée par les actes involontaires",
      arguments: [
        "Les lapsus, les actes manqués, les oublis répétés et les rêves traduisent une activité psychique non contrôlée.",
        "L'esprit humain échappe souvent à la pleine volonté de son auteur.",
        "Sartre qualifie parfois cette échappatoire de mauvaise foi, mais reconnaît son omniprésence dans le comportement."
      ],
      auteursCites: ["Sigmund Freud", "Jean-Paul Sartre"]
    },
    antithese: {
      orientation: "La souveraineté de la conscience rationnelle cartésienne",
      arguments: [
        "La conscience est une lumière naturelle réflexive qui éclaire l'appareil psychique sans laisser de zone d'ombre.",
        "Pour Descartes, l'homme est une substance pensante pleinement transparente à elle-même par le cogito."
      ],
      auteursCites: ["René Descartes"]
    },
    conclusionSynthese: "L'inconscient constitue une réalité clinique avérée qui dévoile la faillibilité de la conscience, sans pour autant abolir la responsabilité morale du sujet."
  },
  {
    numero: 2,
    sujet: "Paul Valéry déclare que : « La conscience règne mais ne gouverne pas ». Commentez.",
    theme: "La conscience et ses limites",
    notions: ["Conscience", "Inconscient", "Liberté", "Souveraineté"],
    problemeCentral: "La conscience est-elle la maîtresse réelle de nos actes ou un simple témoin impuissant face aux pulsions ?",
    these: {
      orientation: "La conscience comme souveraine théorique de l'homme",
      arguments: [
        "La conscience permet à l'homme le retour sur soi-même et la responsabilité morale.",
        "Bergson démontre que la conscience est synonyme de choix et de décision délibérée face à l'action."
      ],
      auteursCites: ["Henri Bergson", "René Descartes"]
    },
    antithese: {
      orientation: "L'impuissance pratique de la conscience gouvernée par l'inconscient",
      arguments: [
        "L'homme pose des actes contradictoires, des erreurs et des dérapages immoraux en dépit de ses bonnes intentions.",
        "Freud énonce la blessure narcissique : « Le moi n'est pas maître dans sa propre maison »."
      ],
      auteursCites: ["Sigmund Freud", "Paul Valéry"]
    },
    conclusionSynthese: "La conscience possède le titre de noblesse et la dignité morale du règne, mais les pulsions inconscientes dictent trop souvent le gouvernement effectif du comportement."
  },
  {
    numero: 3,
    sujet: "Peut-on vivre sans autrui ?",
    theme: "Autrui et la société",
    notions: ["Autrui", "Société", "Solitude", "Liberté"],
    problemeCentral: "L'être humain peut-il s'accomplir et exister dans l'isolement complet ou est-il ontologiquement dépendant d'autrui ?",
    these: {
      orientation: "Autrui, condition indispensable à l'humanisation et à la réalisation de soi",
      arguments: [
        "L'homme ne peut se réaliser, apprendre le langage ou se soigner sans la médiation d'autrui.",
        "Seydou Badian dans 'Sous l'orage' martèle : « L'homme n'est rien sans les autres ».",
        "Sartre rappelle qu'autrui est le médiateur indispensable entre moi et moi-même pour m'auto-évaluer."
      ],
      auteursCites: ["Seydou Badian", "Jean-Paul Sartre"]
    },
    antithese: {
      orientation: "Autrui comme rival, frein à la liberté et source d'aliénation",
      arguments: [
        "Le regard d'autrui juge, paralyse, suscite la gêne, la jalousie et l'hypocrisie sociale.",
        "Sartre écrit dans Huis-clos : « L'enfer, c'est les autres » lorsque le regard d'autrui fige nos possibilités."
      ],
      auteursCites: ["Jean-Paul Sartre"]
    },
    conclusionSynthese: "L'homme ne peut jamais vivre sans autrui car sa survie et son identité en dépendent, même si la vie sociale exige un effort permanent pour surmonter la discorde."
  },
  {
    numero: 4,
    sujet: "Le langage est-il propre à l'homme ?",
    theme: "Le langage",
    notions: ["Langage", "Animalité", "Pensée", "Culture"],
    problemeCentral: "La faculté de communiquer par des signes conventionnels est-elle l'apanage exclusif de l'être humain ?",
    these: {
      orientation: "Le langage articulé et symbolique est spécifiquement humain",
      arguments: [
        "Seul l'homme combine des mots arbitraires et conventionnels pour exprimer une pensée abstraite et conceptuelle.",
        "Descartes affirme que la parole est le seul signe certain d'une pensée enfermée dans le corps."
      ],
      auteursCites: ["René Descartes"]
    },
    antithese: {
      orientation: "La communication et les signaux chez les animaux",
      arguments: [
        "Les animaux vivent en groupe et émettent des signaux (cris d'alerte, danse des abeilles étudiée par Karl von Frisch et Benveniste).",
        "Mais le code animal est inné, rigide et univoque, dépourvu de dialogue et d'évolution créatrice."
      ],
      auteursCites: ["Émile Benveniste", "René Descartes"]
    },
    conclusionSynthese: "Si les animaux disposent d'un code de transmission héréditaire, seul l'homme possède un langage au sens strict : créateur, syntaxique, polysémique et historique."
  },
  {
    numero: 5,
    sujet: "Hölderlin déclare que : « Le langage est le bien le plus précieux en même temps le plus dangereux donné à l'homme ». Qu'en pensez-vous ?",
    theme: "Le pouvoir et les dérives du langage",
    notions: ["Langage", "Vérité", "Violence", "Communication"],
    problemeCentral: "En quoi le langage constitue-t-il à la fois le vecteur suprême de la paix et le plus redoutable instrument de destruction ?",
    these: {
      orientation: "Le langage comme bien inestimable : transmission du savoir et lien social",
      arguments: [
        "Le langage permet l'expression des sentiments, l'enseignement, la prière et la réconciliation.",
        "Hegel montre que c'est dans les mots que la pensée s'objective et devient consciente d'elle-même."
      ],
      auteursCites: ["Friedrich Hölderlin", "G.W.F. Hegel"]
    },
    antithese: {
      orientation: "Le langage comme arme corrosive : mensonge, malédiction et propagande",
      arguments: [
        "Les calomnies, les insultes, la haine ethnique et la manipulation politique utilisent la parole pour détruire.",
        "Sartre avertit : « Les mots sont des pistolets chargés » capables de blesser mortellement les individus."
      ],
      auteursCites: ["Jean-Paul Sartre", "Friedrich Hölderlin"]
    },
    conclusionSynthese: "Le langage n'a pas de moralité propre : il est le miroir de l'âme humaine, instrument d'élévation éthique ou arme de guerre civile selon l'intention de celui qui l'articule."
  },
  {
    numero: 6,
    sujet: "Jean Lacroix affirme que : « Le travail est le signe d'aliénation en même temps remède à cette aliénation ». Discutez.",
    theme: "Le travail et la technique",
    notions: ["Travail", "Aliénation", "Liberté", "Humanisation"],
    problemeCentral: "Le travail est-il une servitude douloureuse ou le moteur par excellence de l'émancipation humaine ?",
    these: {
      orientation: "Le travail comme corvée et peine aliénante",
      arguments: [
        "Dans l'Antiquité gréco-latine, le labeur physique était réservé aux esclaves méprisés.",
        "Dans la Genèse biblique, le travail est conçu comme une punition : « Tu mangeras ton pain à la sueur de ton front »."
      ],
      auteursCites: ["Jean Lacroix", "Tradition biblique (Genèse)"]
    },
    antithese: {
      orientation: "Le travail comme libération, maîtrise de soi et transformation de la nature",
      arguments: [
        "Dans la dialectique du maître et de l'esclave de Hegel, c'est l'esclave qui se libère en transformant le monde par son travail.",
        "Voltaire rappelle que le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin."
      ],
      auteursCites: ["G.W.F. Hegel", "Voltaire", "René Descartes"]
    },
    conclusionSynthese: "Le travail commence comme nécessité pénible imposée par la nature, mais devient par l'ingéniosité humaine la condition sine qua non de la culture et de la liberté."
  },
  {
    numero: 7,
    sujet: "Toutes les cultures se valent-elles ?",
    theme: "La diversité des cultures",
    notions: ["Culture", "Nature", "Ethnocentrisme", "Égalité", "Relativisme"],
    problemeCentral: "Existe-t-il une hiérarchie objective entre les civilisations ou chaque culture est-elle également digne de respect ?",
    these: {
      orientation: "L'illusion de la supériorité culturelle et l'ethnocentrisme",
      arguments: [
        "Historiquement, Aristote justifiait la servitude naturelle en prétendant que certains peuples étaient faits pour commander.",
        "L'impérialisme occidental et la traite négrière ont forgé des théories racistes pour justifier l'exploitation coloniale."
      ],
      auteursCites: ["Aristote", "Critique anticoloniale"]
    },
    antithese: {
      orientation: "L'égale dignité de toutes les cultures humaines",
      arguments: [
        "Toute culture est une réponse singulière et intelligente aux défis de l'existence.",
        "La Déclaration universelle des droits de l'homme et la philosophie des Lumières proclament l'égalité universelle de la famille humaine."
      ],
      auteursCites: ["Claude Lévi-Strauss", "Déclaration universelle des droits de l'homme"]
    },
    conclusionSynthese: "Le jugement de supériorité relève du préjugé ethnocentrique : les cultures ne sont pas comparables sur une échelle unique, elles sont plurielles et complémentaires."
  },
  {
    numero: 8,
    sujet: "L'homme est un être culturel ou naturel ?",
    theme: "Nature et culture",
    notions: ["Nature", "Culture", "Éducation", "Hérédité"],
    problemeCentral: "L'homme est-il façonné par ses déterminismes biologiques ou entièrement institué par l'apprentissage social ?",
    these: {
      orientation: "L'homme comme être intégralement culturel",
      arguments: [
        "Seul l'homme crée des institutions, des lois, des arts, des techniques et transmet un patrimoine historique.",
        "Hegel souligne que la culture arrache l'homme à l'immédiateté animale pour en faire un être de liberté."
      ],
      auteursCites: ["G.W.F. Hegel", "Lucien Malson"]
    },
    antithese: {
      orientation: "Le socle biologique indépassable de l'homme naturel",
      arguments: [
        "L'homme demeure soumis aux lois physiologiques : naissance, faim, sommeil, maladie, mort et reproduction génétique.",
        "Aristote rappelle la substance première et les fonctions corporelles nécessaires à la vie."
      ],
      auteursCites: ["Aristote"]
    },
    conclusionSynthese: "L'homme est une synthèse indissociable : un être biologiquement naturel dont la nature même est d'être un créateur de culture."
  },
  {
    numero: 9,
    sujet: "Est-il normal de faire usage de la violence pour défendre ses droits ?",
    theme: "La violence et le droit",
    notions: ["Droit", "Violence", "Justice", "Légitimité"],
    problemeCentral: "La fin juridique de justice peut-elle justifier le moyen immoral et destructeur de la violence ?",
    these: {
      orientation: "Le refus absolu de la violence au nom de la suprématie du droit",
      arguments: [
        "Le droit a été institué précisément pour substituer l'arbitrage pacifique des lois à la brutalité sauvage.",
        "Mahatma Gandhi a démontré que la non-violence active est l'arme spirituelle suprême qui triomphe de toute force matérielle."
      ],
      auteursCites: ["Mahatma Gandhi"]
    },
    antithese: {
      orientation: "La violence révolutionnaire comme ultime recours face à la tyrannie",
      arguments: [
        "Face à un État oppresseur qui confisque les libertés et bafoue la dignité, la force devient le levier de libération des peuples.",
        "Marx et Bakounine considèrent la violence comme l'accoucheuse de l'histoire détruisant les structures figées de l'injustice.",
        "Max Weber rappelle que tout État repose en dernier ressort sur le monopole de la violence physique légitime."
      ],
      auteursCites: ["Karl Marx", "Mikhaïl Bakounine", "Max Weber"]
    },
    conclusionSynthese: "Dans un État de droit régulier, la violence est condamnable ; elle ne peut être légitimée qu'à titre de résistance ultime contre une tyrannie insurmontable par les voies légales."
  },
  {
    numero: 10,
    sujet: "L'État a-t-il pour but d'assurer le bonheur aux hommes ?",
    theme: "L'État et le citoyen",
    notions: ["État", "Bonheur", "Sécurité", "Liberté"],
    problemeCentral: "La mission de l'autorité politique est-elle de procurer la félicité intime des sujets ou simplement de garantir leur sécurité ?",
    these: {
      orientation: "L'État protecteur, pourvoyeur des conditions collectives du bien-être",
      arguments: [
        "L'État construit les infrastructures vitales : hôpitaux, écoles, routes, sécurité publique et assistance sociale.",
        "Hegel élève l'État au rang d'accomplissement éthique permettant aux citoyens de réaliser leur liberté concrète."
      ],
      auteursCites: ["G.W.F. Hegel"]
    },
    antithese: {
      orientation: "L'État oppresseur et l'impossibilité de décréter le bonheur privé",
      arguments: [
        "Vouloir faire le bonheur des hommes malgré eux dérive vers le paternalisme totalitaire.",
        "Bakounine dénonce l'État comme un vaste cimetière broyant les libertés individuelles au nom de l'ordre."
      ],
      auteursCites: ["Mikhaïl Bakounine", "Friedrich Nietzsche"]
    },
    conclusionSynthese: "L'État ne peut décréter le bonheur individuel (affaire privée de liberté), mais il a le devoir impérieux d'en assurer les conditions matérielles, juridiques et sécuritaires."
  },
  {
    numero: 13,
    sujet: "Comment peut-on avoir une paix durable dans un État ?",
    theme: "La paix politique et la bonne gouvernance",
    notions: ["Paix", "Justice", "État", "Gouvernance"],
    problemeCentral: "Quelles sont les conditions éthiques, institutionnelles et politiques d'une concorde civile pérenne ?",
    these: {
      orientation: "La justice impartiale, la réconciliation nationale et le patriotisme éclairé",
      arguments: [
        "Une paix durable exige une justice équitable sans discrimination ethnique ni religieuse, et une commission de réconciliation sincère.",
        "Thomas Sankara soulignait : « Dans une république, il faut des hommes éclairés qui ont l'amour de leur patrie ».",
        "François Tombalbaye (Ngarta) affirmait qu'un véritable chef d'État est celui qui apaise la soif et les besoins réels de son peuple."
      ],
      auteursCites: ["Thomas Sankara", "François Tombalbaye (Ngarta)"]
    },
    antithese: {
      orientation: "Les obstacles structurels : corruption, prédation et mal-gouvernance",
      arguments: [
        "Lorsque les élites détournent les deniers publics pour leurs familles et confisquent le pouvoir, l'injustice génère inéluctablement les conflits armés et le terrorisme.",
        "La paix n'est pas le simple silence des armes, mais l'éradication des causes profondes de la rancœur sociale."
      ],
      auteursCites: ["Analyse politique contemporaine africaine"]
    },
    conclusionSynthese: "La paix n'est jamais acquise par décret militaire : elle se construit par la justice sociale, l'intégrité des dirigeants et l'adhésion patriotique des citoyens."
  },
  {
    numero: 14,
    sujet: "La démocratie est-elle préférable ?",
    theme: "Les régimes politiques",
    notions: ["Démocratie", "Souveraineté", "Justice", "Tyrannie"],
    problemeCentral: "Le gouvernement du peuple par le peuple est-il le modèle politique le plus juste ou un régime instable ?",
    these: {
      orientation: "La démocratie comme consécration de la liberté et du suffrage universel",
      arguments: [
        "La démocratie assure l'alternance politique pacifique, l'égalité des droits et l'expression citoyenne.",
        "Lamartine proclamait : « La voix universelle, c'est la démocratie »."
      ],
      auteursCites: ["Alphonse de Lamartine", "Jean-Jacques Rousseau"]
    },
    antithese: {
      orientation: "Les dérives de la démocratie : démagogie et tyrannie de la majorité",
      arguments: [
        "Platon dans la République critiquait sévèrement la démocratie athénienne qui donne la parole à l'incompétence et engendre l'anarchie préparant la tyrannie."
      ],
      auteursCites: ["Platon"]
    },
    conclusionSynthese: "Bien qu'exigeante et faillible, la démocratie demeure, selon le mot de Churchill, le pire des régimes à l'exception de tous les autres déjà essayés."
  },
  {
    numero: 15,
    sujet: "Est-ce que la science favorise toujours le bonheur aux hommes ?",
    theme: "La science et la technique",
    notions: ["Science", "Technique", "Bonheur", "Éthique"],
    problemeCentral: "Le progrès des connaissances et des techniques engendre-t-il automatiquement le bien-être moral de l'humanité ?",
    these: {
      orientation: "La science, instrument de soulagement des peines humaines",
      arguments: [
        "La médecine, la communication moderne, l'énergie et l'agriculture industrielle ont libéré l'homme de la faim et des épidémies.",
        "Descartes préconisait que la science nous rende « maîtres et possesseurs de la nature »."
      ],
      auteursCites: ["René Descartes"]
    },
    antithese: {
      orientation: "La technoscience dévastatrice et la menace d'autodestruction",
      arguments: [
        "Les armes chimiques et nucléaires, les désastres écologiques et la déshumanisation montrent les périls de la technique aveugle.",
        "Rabelais avertissait : « Science sans conscience n'est que ruine de l'âme »."
      ],
      auteursCites: ["François Rabelais"]
    },
    conclusionSynthese: "La science apporte la puissance matérielle mais ne fournit pas le sens moral : le bonheur dépend de la sagesse éthique qui encadre l'usage de ses découvertes."
  },
  {
    numero: 18,
    sujet: "Selon René Descartes : « Il n'y a pas de philosophie que l'on puisse apprendre mais on ne peut apprendre qu'à philosopher ». Que pensez-vous de cette conception ?",
    theme: "La nature de la philosophie",
    notions: ["Philosophie", "Connaissance", "Méthode", "Réflexion"],
    problemeCentral: "La philosophie est-elle un ensemble de doctrines théoriques figées ou une démarche vivante de questionnement critique ?",
    these: {
      orientation: "La philosophie comme exercice autonome de la raison",
      arguments: [
        "La philosophie n'est pas une récitation dogmatique mais l'apprentissage de l'esprit critique et du doute méthodique.",
        "Descartes écrit : « C'est proprement avoir les yeux fermés, sans tâcher jamais de les ouvrir, que de vivre sans philosopher »."
      ],
      auteursCites: ["René Descartes", "Emmanuel Kant"]
    },
    antithese: {
      orientation: "La nécessité d'étudier l'histoire des doctrines pour alimenter la réflexion",
      arguments: [
        "On ne peut philosopher dans le vide sans dialoguer avec les grands penseurs (Platon, Aristote, Kant, Hegel, Marx) qui ont forgé les concepts fondamentaux."
      ],
      auteursCites: ["G.W.F. Hegel"]
    },
    conclusionSynthese: "Apprendre à philosopher est l'objectif suprême, mais cet apprentissage suppose la fréquentation rigoureuse des œuvres et des concepts légués par l'histoire de la philosophie."
  },
  {
    numero: 20,
    sujet: "« Ce n'est pas la violence qui restaure, mais la violence qui ruine, qu'il faut condamner ». Commentez ce point de vue de Machiavel.",
    sessionBac: "Baccalauréat 2021",
    theme: "Violence et politique",
    notions: ["Violence", "Politique", "État", "Restauration"],
    problemeCentral: "La violence politique peut-elle être justifiée lorsqu'elle refonde l'ordre social ou doit-elle être inconditionnellement bannie ?",
    these: {
      orientation: "La condamnation sans appel de la violence aveugle et destructrice",
      arguments: [
        "La violence sauvage sème le chaos, détruit les vies innocentes et ruine l'économie et la stabilité des nations.",
        "Gandhi affirme la supériorité absolue de l'ahimsa (non-violence) sur toutes les armes matérielles du monde."
      ],
      auteursCites: ["Mahatma Gandhi", "Nicolas Machiavel"]
    },
    antithese: {
      orientation: "La force chirurgicale nécessaire pour restaurer la cité en péril",
      arguments: [
        "Machiavel dans Le Prince distingue la violence désordonnée des factieux de la force fondatrice du législateur rétablissant l'ordre de la cité.",
        "Max Weber rappelle que le politique doit assumer l'éthique de responsabilité incluant le monopole de la contrainte pour éviter la ruine collective."
      ],
      auteursCites: ["Nicolas Machiavel", "Max Weber", "Karl Marx"]
    },
    conclusionSynthese: "La violence anarchique qui détruit doit être condamnée sans réserve ; seule la force régulatrice soumise au salut public et au droit peut prétendre restaurer la paix civile."
  }
];
