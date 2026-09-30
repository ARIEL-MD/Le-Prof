import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_NATURE_CULTURE_VARIANTS: Record<string, ArgumentVariant[]> = {
  "nature": [
    {
      id: 0,
      label: "Perspectives Finalistes & Cosmiques : Ordre Harmonieux & Modèle Téléologique",
      perspective: "Téléologie aristotélicienne, Ordre cosmique stoïcien & Mère nourricière",
      pedagogicalAdvice: "Le cadre classique pour montrer que la nature est un tout ordonné ayant un sens et une fin propre.",
      arguments: [
        {
          statement: "La nature ne fait rien en vain et réalise toujours le meilleur agencement possible pour chaque être vivant.",
          author: "Aristote",
          work: "De la génération et de la corruption / Les Parties des animaux",
          quote: "La nature ne fait rien d'inutile ni de superflu, mais donne à chacun ce qui convient à sa fin.",
          explanation: "Aristote combat la thèse matérialiste du hasard pur (Démocrite). Chaque organe et chaque être vivant obéit à une finalité interne (téléologie) : les mains de l'homme, loin d'être un hasard biologique, sont l'instrument idéal de son intelligence rationnelle.",
          category: "Thèse Finaliste (La Téléologie Naturelle)",
          connector: "De prime abord"
        },
        {
          statement: "La nature n'est pas une création extérieure mais Dieu lui-même conçu comme la substance infinie et immanente du cosmos.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre I)",
          quote: "Dieu, c'est-à-dire la Nature (Deus sive Natura).",
          explanation: "Spinoza abolit le dualisme judéo-chrétien entre un Dieu créateur transcendant et une création pécheresse. Il n'y a qu'une seule substance éternelle dont l'esprit et la matière sont les deux faces indissociables. Tout découle nécessairement des lois de la nature.",
          category: "Panthéisme Spinoziste (L'Ordre Nécessaire)",
          connector: "En second lieu"
        },
        {
          statement: "Le souverain bien pour l'homme consiste à accorder sa propre raison avec la raison cosmique de la nature.",
          author: "Marc Aurèle",
          work: "Pensées pour moi-même",
          quote: "Vivre en accord avec la nature : voilà la fin souveraine de l'être raisonnable.",
          explanation: "Pour le stoïcisme, la nature universelle (le Cosmos) est animée par un souffle divin bienfaisant (le Logos). Le sage ne se rebelle pas contre les lois biologiques ou les vicissitudes extérieures mais harmonise sa volonté intérieure avec le cours nécessaire du monde.",
          category: "Sagesse Stoïcienne (L'Harmonie avec le Cosmos)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'état de nature rousseauiste montre la bonté et l'innocence originelle de l'homme avant la dépravation de la société d'amour-propre.",
          author: "Jean-Jacques Rousseau",
          work: "Discours sur l'origine et les fondements de l'inégalité parmi les hommes",
          quote: "L'homme naît naturellement bon et heureux, c'est la société qui le déprave et le rend misérable.",
          explanation: "Rousseau forge l'hypothèse de l'homme de la nature, être solitaire guidé par l'amour de soi et la pitié spontanée. La nature n'était pas un état de guerre féroce mais une harmonie paisible qui fut brisée dès que le premier homme déclara : « Ceci est à moi ».",
          category: "Anthropologie Rousseautiste (L'Innocence de l'État de Nature)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives de la Maîtrise & du Mécanisme : La Nature comme Matière Inerte & Ressource",
      perspective: "Mécanisme cartésien, Empirisme baconien & Arrachage de l'homme à l'animalité",
      pedagogicalAdvice: "À mobiliser pour montrer que la culture et la liberté humaine s'affirment en s'arrachant au déterminisme biologique naturel.",
      arguments: [
        {
          statement: "La nature n'est pas un être vivant divin mais une immense machine matérielle soumise à des lois géométriques strictes.",
          author: "René Descartes",
          work: "Traité du monde et de la lumière",
          quote: "Je ne reconnais aucune différence entre les machines que font les artisans et les divers corps que la nature seule compose.",
          explanation: "Descartes désacralise la nature : le corps animal et les végétaux ne possèdent aucune âme végétative mystérieuse mais fonctionnent comme des horloges mécaniques mues par des ressorts et des engrenages. Cette désillusion permet l'essor de la science expérimentale.",
          category: "Mécanisme Cartésien (La Nature Désacralisée)",
          connector: "D'un autre côté"
        },
        {
          statement: "Pour commander souverainement à la nature, l'homme doit d'abord observer et obéir humblement à ses lois physiques.",
          author: "Francis Bacon",
          work: "Novum Organum",
          quote: "On ne triomphe de la nature qu'en lui obéissant.",
          explanation: "Bacon rompt avec la magie stérile : la puissance de l'homme dépend de sa connaissance expérimentale des causes naturelles. Ce n'est qu'en comprenant le fonctionnement du vent, de la gravitation ou des marées que la technique peut les domestiquer.",
          category: "Empirisme Méthodologique (La Maîtrise par la Connaissance)",
          connector: "Cependant"
        },
        {
          statement: "L'homme n'accède à sa véritable humanité que par un arrachement radical aux instincts aveugles de la nature animale.",
          author: "Emmanuel Kant",
          work: "Idée d'une histoire universelle au point de vue cosmopolitique",
          quote: "L'homme est la seule créature qui doive être éduquée... L'homme ne peut devenir homme que par l'éducation.",
          explanation: "Kant démontre que si l'animal naît achevé avec ses instincts génétiquement programmés, l'homme naît nu et indéterminé. La nature n'a rien fait pour son confort : c'est par l'effort de la culture, du travail et de la discipline morale qu'il conquiert son humanité.",
          category: "Thèse Idéaliste (L'Arrachement Éducatif à l'Animalité)",
          connector: "Qui plus est"
        },
        {
          statement: "Dans l'état de nature sans lois instituées, la vie de l'homme est solitaire, indigente, dégoûtante, animale et brève.",
          author: "Thomas Hobbes",
          work: "Léviathan (Chapitre XIII)",
          quote: "La condition de l'homme dans l'état de nature est une guerre de chacun contre chacun.",
          explanation: "Hobbes détruit le mythe poétique du bon sauvage : livrés à la seule nature, la convoitise et la crainte de la mort violente rendent la coopération impossible. Seul le saut artificiel dans l'ordre civil et la loi étatique protège l'homme contre sa propre sauvagerie.",
          category: "Réalisme Politique (La Nature comme Guerre Primitive)",
          connector: "Pour clore cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Écologiques & Éthiques : Le Contrat Naturel & La Vulnérabilité de la Terre",
      perspective: "Contrat naturel de Serres, Écologie profonde de Naess & Principe responsabilité",
      pedagogicalAdvice: "Indispensable pour traiter la crise écologique contemporaine, la biodiversité et les devoirs envers le vivant.",
      arguments: [
        {
          statement: "L'humanité doit conclure un contrat naturel avec la Terre pour reconnaître la nature comme un sujet de droit partenaire.",
          author: "Michel Serres",
          work: "Le Contrat naturel",
          quote: "La nature agit comme un sujet désormais : elle nous rend nos coups sous forme de dérèglements climatiques majeurs.",
          explanation: "Serres montre que le contrat social traditionnel excluait le monde matériel, traité en objet passif d'exploitation indéfinie. L'entrée dans l'anthropocène exige d'accorder à la biosphère le statut d'acteur juridique protégé par un pacte de respect mutuel.",
          category: "Thèse Écologique (Le Contrat Naturel)",
          connector: "En premier lieu"
        },
        {
          statement: "Toute forme de vie possède une valeur intrinsèque indépendante de son utilité économique pour les besoins humains.",
          author: "Arne Naess",
          work: "Écologie, communauté et style de vie",
          quote: "Le bien-être et l'épanouissement des formes de vie humaines et non-humaines sur Terre ont une valeur en soi.",
          explanation: "Le fondateur de l'écologie profonde refuse l'anthropocentrisme arrogant qui réduit les forêts, les océans et les animaux à de simples stocks de marchandises. L'homme doit développer un « soi écologique » en communion respectueuse avec la communauté biotique.",
          category: "Écologie Profonde (La Valeur Intrinsèque du Vivant)",
          connector: "Dans la même perspective"
        },
        {
          statement: "Le respect moral envers la nature procède de l'admiration esthétique et du sentiment mystique de faire corps avec l'univers.",
          author: "Claude Lévi-Strauss",
          work: "Tristes Tropiques",
          quote: "Le monde a commencé sans l'homme et il s'achèvera sans lui.",
          explanation: "L'anthropologue rappelle que l'espèce humaine n'est qu'un phénomène passager dans l'histoire de la planète. L'Occident s'est rendu malade d'un humanisme corrompu qui s'est fondé sur l'anéantissement des autres espèces vivantes et des cultures indigènes harmonieuses.",
          category: "Anthropologie Philosophique (La Leçon de Modestie Cosmique)",
          connector: "D'autre part"
        },
        {
          statement: "La responsabilité éthique commande de transmettre aux générations futures une biosphère habitable et féconde.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Ne compromet pas les conditions de la survie indéfinie de l'humanité sur terre.",
          explanation: "Jonas érige la vulnérabilité du vivant en impératif catégorique contemporain. Notre devoir envers la nature découle de notre puissance technologique asymétrique : parce que nous avons le pouvoir d'anéantir les écosystèmes, nous avons l'obligation morale sacrée de les sauvegarder.",
          category: "Éthique Prospective (Sauvegarde des Écosystèmes)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Africaines & Animistes : Le Sacré de la Forêt & La Parente avec le Vivant",
      perspective: "Animisme éclairé, Forêts sacrées & Solidarité cosmique chez Sarr et Senghor",
      pedagogicalAdvice: "À mobiliser pour enrichir la réflexion par les cosmologies africaines qui ne séparent jamais la nature de la culture.",
      arguments: [
        {
          statement: "Dans la vision africaine du monde, il n'existe aucune rupture ontologique entre l'homme, les animaux, les arbres et les fleuves.",
          author: "Léopold Sédar Senghor",
          work: "Liberté 1 : Négritude et Humanisme",
          quote: "L'Africain ne se coupe pas de la nature pour la contempler de loin comme un paysage étranger : il la vit, il communie avec le rythme cosmique.",
          explanation: "Senghor met en lumière l'harmonie participative : la nature n'est pas un décor inerte ou un gisement minier mais une trame vivante d'énergies spirituelles où l'humain est le frère des éléments et des créatures animales.",
          category: "Cosmologie Africaine (L'Union Ontologique avec le Vivant)",
          connector: "De prime abord"
        },
        {
          statement: "Les forêts sacrées et les totems coutumiers constituaient de véritables régulations écologiques préservant la biodiversité avant la colonisation.",
          author: "Amadou Hampâté Bâ",
          work: "Aspects de la civilisation africaine",
          quote: "La nature est un livre ouvert d'enseignements où chaque plante possède son nom, son esprit et son remède secret.",
          explanation: "Hampâté Bâ rappelle que les interdits rituels (ne pas pêcher dans tel fleuve à telle saison, ne pas abattre tel arbre baobab protecteur) assuraient la reproduction durable des ressources naturelles, alliant spiritualité et gestion écologique remarquable.",
          category: "Écologie Coutumière & Forêts Sacrées",
          connector: "Aussi"
        },
        {
          statement: "La pensée contemporaine africaine propose une éthique de la résonance pour réparer la blessure que le capitalisme prédateur a infligée à la Terre.",
          author: "Felwine Sarr",
          work: "Habiter le monde : Essai de politique relationnelle",
          quote: "Habiter le monde, c'est retisser les liens brisés entre les vivants, restaurer la mesure et inventer une écologie de la relation.",
          explanation: "Sarr plaide pour la fertilisation croisée : puiser dans les sagesses animistes du continent pour concevoir un nouvel humanisme planétaire qui cesse de considérer la nature comme une proie extractiviste.",
          category: "Afrotopia Écologique (La Politique Relationnelle)",
          connector: "Toutefois"
        },
        {
          statement: "La colonisation a introduit la violence de la prédation extractiviste dans des territoires qui vivaient en équilibre millénaire avec leur environnement.",
          author: "Achille Mbembe",
          work: "Brutalisme",
          quote: "Le brutalisme moderne est la transformation systématique de la matière vivante et de la terre en matière inerte calculable.",
          explanation: "Mbembe analyse comment le modèle des plantations coloniales et des mines à ciel ouvert a inauguré la destruction frénétique des sols africains. Sortir du brutalisme impose de réapprendre à honorer le souffle sacré de la Terre.",
          category: "Critique Décoloniale du Brutalisme Extractiviste",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "histoire": [
    {
      id: 0,
      label: "Perspectives Téléologiques & Idéalistes : Raison dans l'Histoire & Progrès Spirituel",
      perspective: "Ruse de la raison hégélienne, Progrès indéfini des Lumières & Fin de l'histoire",
      pedagogicalAdvice: "Le cadre classique pour penser l'histoire comme un déploiement sensé menant à la liberté et à la conscience de soi.",
      arguments: [
        {
          statement: "L'histoire universelle n'est pas un chaos absurde d'événements contingents mais le déploiement rationnel de la liberté de l'Esprit.",
          author: "G.W.F. Hegel",
          work: "La Raison dans l'histoire",
          quote: "L'histoire universelle est le progrès dans la conscience de la liberté.",
          explanation: "Hegel soutient que la Raison gouverne le monde. À travers les empires orientaux (où seul le tyran est libre), le monde gréco-romain (où quelques-uns sont libres) et le monde moderne chrétien-démocratique (où tous sont reconnus libres), l'humanité prend progressivement conscience de sa liberté spirituelle.",
          category: "Thèse Idéaliste (Le Progrès de la Liberté)",
          connector: "De prime abord"
        },
        {
          statement: "La Raison utilise les passions égoïstes des grands hommes pour réaliser ses propres fins universelles à leur insu.",
          author: "G.W.F. Hegel",
          work: "La Raison dans l'histoire",
          quote: "La ruse de la raison fait agir pour elle les passions, en sorte que ce par quoi elle se met en existence paie la perte et subit le dommage.",
          explanation: "Des conquérants comme Alexandre, César ou Napoléon croyaient n'agir que pour leur gloire et leur ambition personnelle. En réalité, ils étaient les instruments historiques inconscients de l'Esprit du monde qui abattait les institutions vermoulues pour faire triompher l'État de droit moderne.",
          category: "La Ruse de la Raison (Passions & Nécessité)",
          connector: "En second lieu"
        },
        {
          statement: "L'antagonisme des intérêts et l'insociable sociabilité des hommes sont le ressort secret par lequel la nature force l'humanité à développer toutes ses facultés.",
          author: "Emmanuel Kant",
          work: "Idée d'une histoire universelle au point de vue cosmopolitique",
          quote: "L'insociable sociabilité des hommes, c'est-à-dire leur penchant à entrer en société, lié toutefois à une répulsion générale qui menace constamment de rompre cette société.",
          explanation: "Kant démontre que sans la rivalité, l'ambition et la jalousie, les hommes mèneraient une vie pastorale d'agneaux indolents et leurs talents resteraient endormis. La discorde sociale les contraint à s'élever à la culture et à instaurer une république de droit universel.",
          category: "Téléologie Naturelle (L'Insociable Sociabilité)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le perfectionnement continu des lumières de la raison garantit le progrès indéfini des libertés et des sciences humaines.",
          author: "Nicolas de Condorcet",
          work: "Esquisse d'un tableau historique des progrès de l'esprit humain",
          quote: "Nos espérances sur l'état futur de l'espèce humaine peuvent se réduire à ces trois points importants : la destruction de l'inégalité entre les nations, les progrès de l'égalité dans un même peuple, et le perfectionnement réel de l'homme.",
          explanation: "Même traqué sous la Terreur révolutionnaire, Condorcet affirme sa foi inébranlable dans le triomphe des Lumières : l'alphabétisation, la médecine et la démocratie feront reculer l'obscurantisme, la guerre et le fanatisme religieux à l'échelle planétaire.",
          category: "Lumières & Progrès Indéfini (L'Espérance Humaine)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Matérialistes & Révolutionnaires : Lutte des Classes & Moteur Économique",
      perspective: "Matérialisme historique marxiste, Infrastructure économique & Révolution",
      pedagogicalAdvice: "Indispensable pour réfuter l'idéalisme abstrait et ancrer l'histoire dans les conditions matérielles d'exploitation.",
      arguments: [
        {
          statement: "L'histoire de toute société jusqu'à nos jours est l'histoire de la lutte des classes entre oppresseurs et opprimés.",
          author: "Karl Marx & Friedrich Engels",
          work: "Manifeste du Parti communiste",
          quote: "Homme libre et esclave, patricien et plébéien, baron et serf, maître de jurande et compagnon, en un mot oppresseurs et opprimés, en opposition constante, ont mené une guerre ininterrompue.",
          explanation: "Marx montre que l'histoire ne progresse pas par de belles idées morales mais par les contradictions objectives entre les classes sociales. Chaque époque voit une classe dominante exploiter le travail d'une classe dominée, jusqu'à ce que la crise révolutionnaire accouche d'un mode de production supérieur.",
          category: "Matérialisme Historique (La Lutte des Classes)",
          connector: "D'un autre côté"
        },
        {
          statement: "Ce n'est pas la conscience des hommes qui détermine leur existence sociale, c'est leur existence sociale matérielle qui détermine leur conscience.",
          author: "Karl Marx",
          work: "Contribution à la critique de l'économie politique (Préface)",
          quote: "Le mode de production de la vie matérielle conditionne le processus de vie social, politique et intellectuel en général.",
          explanation: "Marx inverse l'idéalisme hégélien : l'infrastructure économique (forces productives et rapports de production) constitue le socle réel sur lequel s'érige la superstructure juridique, religieuse, artistique et philosophique. Pour changer les mentalités, il faut d'abord transformer les structures économiques réelles.",
          category: "Infrastructure & Superstructure (Déterminisme Économique)",
          connector: "Cependant"
        },
        {
          statement: "L'État n'est pas l'incarnation de l'intérêt général moral mais l'instrument de violence institutionnelle de la classe dominante.",
          author: "Lénine",
          work: "L'État et la Révolution",
          quote: "L'État est un organe de domination de classe, un organe d'oppression d'une classe par une autre.",
          explanation: "Lénine démonte l'illusion démocratique bourgeoise : l'armée, la police et les tribunaux servent avant tout à protéger la propriété privée capitaliste contre les revendications populaires. L'histoire culminera dans le dépérissement de l'État après l'instauration d'une société communiste sans classes.",
          category: "Théorie de l'État & Révolution Prolétarienne",
          connector: "Qui plus est"
        },
        {
          statement: "La fatalité historique n'existe pas : les hommes font leur propre histoire, mais ils ne la font pas de leur plein gré dans des conditions choisies par eux.",
          author: "Karl Marx",
          work: "Le 18 Brumaire de Louis Bonaparte",
          quote: "Les hommes font leur propre histoire, mais ils ne la font pas arbitrairement, dans des conditions choisies par eux, mais dans des conditions directement données et héritées du passé.",
          explanation: "Marx préserve la liberté et la praxis de l'action humaine contre le fatalisme mécanique. Si les circonstances matérielles et le poids des traditions pèsent d'un poids immense sur les vivants, l'audace politique organisée est capable de faire basculer le cours des événements historiques.",
          category: "Praxis & Action Historique Réelle",
          connector: "Pour clore cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Critiques & Désenchantées : Contingence, Ruines & Mémoire des Vaincus",
      perspective: "L'Ange de l'histoire de Benjamin, Hasard cournotien & Tragédie humaine",
      pedagogicalAdvice: "À mobiliser pour contester le dogme aveugle du progrès linéaire et donner une voix aux victimes de l'histoire.",
      arguments: [
        {
          statement: "Le prétendu progrès historique n'est qu'une tempête dévastatrice accumulant sans trêve ruines sur ruines au détriment des vaincus.",
          author: "Walter Benjamin",
          work: "Thèses sur le concept d'histoire (Thèse IX)",
          quote: "Là où une chaîne d'événements apparaît devant nous, l'Ange de l'Histoire ne voit qu'une seule et unique catastrophe qui ne cesse d'amonceler ruine sur ruine... Cette tempête est ce que nous appelons le progrès.",
          explanation: "En contemplant l'Angelus Novus de Klee, Benjamin fustige l'optimisme béat de la social-démocratie et du capitalisme. L'histoire officielle est toujours écrite par les vainqueurs qui écrasent la mémoire des opprimés. La tâche de la pensée critique est de « brosser l'histoire à rebrousse-poil » pour réveiller les espoirs brisés du passé.",
          category: "Critique de la Croyance au Progrès (L'Ange de l'Histoire)",
          connector: "En premier lieu"
        },
        {
          statement: "L'histoire est traversée par le hasard et la contingence nés de la rencontre fortuite de séries causales indépendantes.",
          author: "Antoine-Augustin Cournot",
          work: "Considérations sur la marche des idées et des événements dans les temps modernes",
          quote: "Le hasard est la rencontre de deux séries causales indépendantes l'une de l'autre.",
          explanation: "Cournot combat le providentialisme religieux et le déterminisme mécanique rigide : si Cléopâtre avait eu le nez plus court, la face du monde en eût été changée (Pascal). Les accidents personnels, les climats imprévus ou une maladie soudaine réorientent souvent le cours des empires sans aucune nécessité rationnelle préalable.",
          category: "Le Hasard & La Contingence dans l'Histoire",
          connector: "Dans la même perspective"
        },
        {
          statement: "La mémoire historique ne doit pas être un fardeau paralysant qui étouffe l'énergie vitale d'agir au présent.",
          author: "Friedrich Nietzsche",
          work: "Considérations inactuelles (De l'utilité et des inconvénients de l'histoire pour la vie)",
          quote: "Il y a un degré d'insomnie, de rumination, de sens historique au-delà duquel l'être vivant est détruit et finalement anéanti.",
          explanation: "Nietzsche met en garde contre l'hypertrophie historique de la culture moderne qui transforme les hommes en spectateurs blasés et impuissants. L'oubli actif est nécessaire à la santé de l'esprit pour créer du neuf et se lancer avec audace dans l'avenir.",
          category: "Vitalisme Nietzschéen (L'Histoire au Service de la Vie)",
          connector: "D'autre part"
        },
        {
          statement: "La conscience historique contemporaine doit intégrer le devoir de mémoire pour conjurer à jamais la répétition des génocides.",
          author: "Paul Ricœur",
          work: "La Mémoire, l'Histoire, l'Oubli",
          quote: "Le devoir de mémoire est le devoir de rendre justice, par le souvenir, à un autre que soi, à la victime de l'injustice.",
          explanation: "Ricœur souligne la responsabilité éthique des historiens et des citoyens face aux crimes imprescriptibles contre l'humanité (Auschwitz, traite négrière, Rwanda). Seule une mémoire critique et partagée peut fonder un pardon authentique et pacifier l'avenir des nations.",
          category: "Éthique de la Mémoire & Réconciliation",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Décoloniales & Histoire Africaine : La Reconquête de la Dignité et du Temps Propre",
      perspective: "Antériorité négro-égyptienne chez Diop, Dénonciation du discours hégélien par Fanon et Mbembe",
      pedagogicalAdvice: "Indispensable pour réfuter le préjugé colonial affirmant que « l'homme noir n'est pas assez entré dans l'histoire ».",
      arguments: [
        {
          statement: "L'Afrique noire a été exclue arbitrairement de l'histoire par les philosophies idéalistes occidentales imprégnées de préjugés raciaux.",
          author: "G.W.F. Hegel & Cheikh Anta Diop",
          work: "Civilisation ou Barbarie",
          quote: "L'Afrique est le berceau de l'humanité et la matrice originelle de la civilisation pharaonique qui a nourri les savoirs méditerranéens.",
          explanation: "Diop déconstruit la célèbre assertion raciste de Hegel (affirmant que l'Afrique est sans histoire ni devenir). Par une démonstration pluridisciplinaire monumentale, Diop rend aux peuples noirs la fierté légitime de leur antériorité historique et scientifique millénaire.",
          category: "Thèse Décoloniale (La Restitution de l'Histoire Africaine)",
          connector: "De prime abord"
        },
        {
          statement: "La libération historique du peuple colonisé ne se quémande pas : elle s'arrache par la décolonisation intégrale des corps et des consciences.",
          author: "Frantz Fanon",
          work: "Les Damnés de la terre",
          quote: "La décolonisation est véritablement création d'hommes nouveaux... Elle transforme des spectateurs écrasés d'inachèvement en acteurs privilégiés de l'histoire.",
          explanation: "Fanon montre que le colonialisme figeait l'histoire indigène dans l'inertie du musée ethnographique. La révolution nationale brise ce carcan pétrifié et propulse les masses populaires au centre de la création politique souveraine de leur destin.",
          category: "Praxis Révolutionnaire (L'Homme Nouveau Décolonial)",
          connector: "Aussi"
        },
        {
          statement: "L'Afrique contemporaine ne doit pas courir après le modèle historique occidental mais inventer sa propre utopie féconde.",
          author: "Felwine Sarr",
          work: "Afrotopia",
          quote: "L'Afrique n'a personne à rattraper. Elle doit marcher sur ses propres sentiers en articulant ses sagesses propres aux promesses de la modernité.",
          explanation: "Sarr pulvérise l'idéologie occidentale du rattrapage économique. L'histoire n'est pas une course unique où certains seraient en retard : chaque civilisation a le droit souverain de déployer son génie singulier pour enrichir la symphonie universelle de l'humanité.",
          category: "Afrotopia (L'Invention d'un Destin Souverain)",
          connector: "Toutefois"
        },
        {
          statement: "Sortir de la grande nuit coloniale exige de réintégrer l'Afrique au cœur des circulations universelles de la mondialisation.",
          author: "Achille Mbembe",
          work: "Sortir de la grande nuit : Essai sur l'Afrique décolonisée",
          quote: "Penser l'histoire depuis l'Afrique, c'est penser le monde dans son devenir planétaire pluriel.",
          explanation: "Mbembe montre que l'Afrique n'est pas une périphérie misérable mais le laboratoire d'avant-garde où se dessinent les nouveaux défis planétaires : la démographie jeune, le métissage culturel, l'économie informelle et la survie écologique.",
          category: "Pensée Globale & Contemporanéité Africaine",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
