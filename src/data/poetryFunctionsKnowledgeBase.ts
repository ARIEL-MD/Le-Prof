/**
 * Base pédagogique déterministe — Fonctions de la poésie
 * Terminale / Côte d'Ivoire.
 *
 * Les formulations pédagogiques sont originales. Les faits bibliographiques
 * sont conservés séparément afin que la variation ne puisse pas les altérer.
 * Aucune citation textuelle n'est stockée ici : l'élève reçoit une référence
 * d'œuvre vérifiée et peut ajouter une citation seulement si elle est vérifiée.
 */

export type PoetryFunctionKey =
  | 'lyrique'
  | 'esthetique'
  | 'evasive_fictive'
  | 'ludique'
  | 'didactique'
  | 'engagee';

export interface PoetryLiteraryExample {
  author: string;
  work: string;
  detail: string;
  verification: string;
}

export interface PoetryArgument {
  id: string;
  argument: string;
  explanation: string;
  example: PoetryLiteraryExample;
  phraseToRemember: string;
  variants: {
    argument: string[];
    explanation: string[];
    phraseToRemember: string[];
  };
}

export interface PoetryFunction {
  key: PoetryFunctionKey;
  title: string;
  definition: string;
  arguments: PoetryArgument[];
}

const v = (
  argument: string[],
  explanation: string[],
  phraseToRemember: string[],
) => ({ argument, explanation, phraseToRemember });

export const POETRY_FUNCTIONS_KNOWLEDGE_BASE: PoetryFunction[] = [
  {
    key: 'lyrique',
    title: 'Fonction lyrique',
    definition: "La poésie permet au poète d'exprimer ses sentiments, ses souvenirs, ses émotions et son expérience personnelle.",
    arguments: [
      {
        id: 'lyrique-douleur',
        argument: 'La poésie permet d’exprimer la tristesse et la douleur.',
        explanation: "Le poète transforme une épreuve personnelle, comme un deuil ou une séparation, en paroles qui peuvent toucher tous les lecteurs.",
        example: { author: 'Victor Hugo', work: 'Les Contemplations — « Demain, dès l’aube »', detail: 'Le poème exprime la douleur du poète après la mort de sa fille Léopoldine et accompagne son pèlerinage vers sa tombe.', verification: 'Recueil Les Contemplations ; poème placé dans le livre IV, Pauca meae.' },
        phraseToRemember: 'La poésie transforme la douleur personnelle en émotion partagée.',
        variants: v([
          'Le poème permet au poète de mettre sa souffrance en mots.',
          'Les vers donnent une forme à la peine et au deuil.',
          'La poésie peut faire entendre une douleur intime avec une portée universelle.'
        ], [
          'En écrivant ce qu’il ressent, le poète rend son expérience compréhensible et sensible pour le lecteur.',
          'Le travail poétique permet de donner une forme durable à une épreuve personnelle.',
          'Une souffrance individuelle peut ainsi devenir une émotion que d’autres lecteurs reconnaissent.'
        ], [
          'Le poème donne une voix à la souffrance.',
          'La douleur personnelle devient une émotion littéraire.',
          'La poésie fait du deuil une parole partageable.'
        ])
      },
      {
        id: 'lyrique-amour',
        argument: 'La poésie permet d’exprimer l’amour et l’admiration.',
        explanation: "Le poète peut célébrer une personne aimée en exprimant l'attachement, le désir, l'admiration ou l'émotion provoquée par une rencontre.",
        example: { author: 'Charles Baudelaire', work: 'Les Fleurs du mal — « À une passante »', detail: 'Une rencontre fugitive dans la ville provoque une émotion intense qui est transformée en expérience poétique.', verification: '« À une passante » appartient aux Fleurs du mal.' },
        phraseToRemember: 'La poésie permet de transformer l’émotion amoureuse en langage poétique.',
        variants: v([
          'Le poème peut devenir une déclaration d’amour ou d’admiration.',
          'Le langage poétique permet de célébrer la personne aimée.',
          'La poésie donne une forme durable aux émotions provoquées par l’amour.'
        ], [
          'Les images et les rythmes permettent au poète de rendre l’émotion plus forte.',
          'Le sentiment amoureux devient une matière artistique travaillée par les mots.',
          'Même une rencontre brève peut prendre une dimension durable grâce au poème.'
        ], [
          'La poésie fait de l’amour une expérience artistique.',
          'Les vers permettent de célébrer l’être aimé.',
          'Le sentiment amoureux peut devenir une œuvre durable.'
        ])
      },
      {
        id: 'lyrique-nostalgie',
        argument: 'La poésie permet d’exprimer la nostalgie et l’attachement au passé.',
        explanation: 'Le poète revient sur un lieu, une époque, une personne ou une culture qui lui est chère et fait revivre ce passé par les mots.',
        example: { author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', detail: 'Le recueil fait une place importante à la mémoire, à l’Afrique, à l’enfance et à l’attachement au pays natal.', verification: 'Chants d’ombre est un recueil de poésie de Senghor, publié en 1945.' },
        phraseToRemember: 'La poésie fait revivre le passé par la mémoire et le souvenir.',
        variants: v([
          'Le poème peut devenir un lieu de mémoire.',
          'Grâce aux vers, le poète retrouve symboliquement un passé qui lui manque.',
          'La poésie permet de conserver vivants les souvenirs importants.'
        ], [
          'Le souvenir personnel ou collectif est reconstruit à travers des images et des sensations.',
          'Le poète utilise la mémoire pour maintenir un lien avec ce qui est absent.',
          'Le texte poétique donne une durée nouvelle à des souvenirs menacés par le temps.'
        ], [
          'La poésie conserve la mémoire.',
          'Le poème fait revivre ce qui est absent.',
          'Le souvenir devient une matière poétique.'
        ])
      },
      {
        id: 'lyrique-nature',
        argument: 'La poésie permet au poète de partager son émotion devant la nature.',
        explanation: 'Un paysage peut devenir le miroir d’un état intérieur : joie, paix, mélancolie, émerveillement ou inquiétude.',
        example: { author: 'Alphonse de Lamartine', work: 'Méditations poétiques — « Le Lac »', detail: 'Le paysage du lac est lié au souvenir amoureux et à la méditation sur le temps qui passe.', verification: '« Le Lac » appartient aux Méditations poétiques.' },
        phraseToRemember: 'La nature peut devenir le miroir des émotions du poète.',
        variants: v([
          'Le paysage poétique peut refléter l’état d’âme du poète.',
          'La nature sert parfois à exprimer indirectement les sentiments.',
          'Le poète transforme un paysage en espace d’émotion et de réflexion.'
        ], [
          'Les éléments naturels prennent une valeur affective parce qu’ils sont associés à un souvenir.',
          'Le lecteur découvre ainsi la nature à travers la sensibilité du poète.',
          'Le paysage devient plus qu’un décor : il participe à l’expression intérieure.'
        ], [
          'Le paysage peut refléter l’âme.',
          'La nature devient un langage des sentiments.',
          'Le décor naturel prend une valeur émotionnelle.'
        ])
      }
    ]
  },
  {
    key: 'esthetique',
    title: 'Fonction esthétique',
    definition: 'La poésie recherche la beauté et produit un effet artistique par le travail des mots, des sons, du rythme, des images et de la forme.',
    arguments: [
      {
        id: 'esthetique-musicalite',
        argument: 'La poésie donne une dimension musicale au langage.',
        explanation: 'Le poète travaille les sonorités, le rythme, les répétitions et les rimes pour créer une harmonie qui agit sur l’oreille du lecteur.',
        example: { author: 'Victor Hugo', work: 'Les Contemplations — « Demain, dès l’aube »', detail: 'La régularité des alexandrins et le rythme du texte accompagnent la marche du poète et renforcent la gravité du poème.', verification: 'Le poème est composé en alexandrins.' },
        phraseToRemember: 'La poésie transforme les mots en musique.',
        variants: v([
          'Le poète utilise les sons et le rythme pour rendre le texte musical.',
          'La beauté d’un poème repose aussi sur ce que l’on entend.',
          'Le travail sonore donne au langage poétique une force particulière.'
        ], [
          'Les répétitions et les sonorités peuvent créer une impression d’harmonie, de lenteur ou de mouvement.',
          'La forme sonore accompagne souvent le sens du poème.',
          'Le lecteur reçoit donc le texte à la fois par son sens et par sa musique.'
        ], [
          'Le rythme et les sons participent à la beauté du poème.',
          'La poésie se lit aussi avec l’oreille.',
          'La musicalité renforce le pouvoir des mots.'
        ])
      },
      {
        id: 'esthetique-images',
        argument: 'La poésie crée des images qui rendent le monde plus sensible.',
        explanation: 'Métaphores, comparaisons, symboles et autres figures permettent au poète de représenter une idée ou une sensation de manière frappante.',
        example: { author: 'Charles Baudelaire', work: 'Les Fleurs du mal — « Correspondances »', detail: 'Le poème rapproche les sensations et présente la nature comme un ensemble de signes que le poète cherche à interpréter.', verification: 'La BnF documente les épreuves corrigées de « Correspondances » dans Les Fleurs du mal.' },
        phraseToRemember: 'La poésie transforme les idées et les sensations en images.',
        variants: v([
          'Les figures de style permettent au poète de faire voir ce qu’il veut exprimer.',
          'L’image poétique donne une forme concrète aux sensations et aux idées.',
          'Le poète renouvelle notre regard grâce aux métaphores et aux symboles.'
        ], [
          'Une idée abstraite devient plus facile à ressentir lorsqu’elle est présentée sous forme d’image.',
          'Le langage figuré crée des rapprochements inattendus entre les choses.',
          'Le lecteur est ainsi invité à regarder la réalité autrement.'
        ], [
          'L’image poétique change notre manière de voir le monde.',
          'Les figures de style donnent une forme sensible aux idées.',
          'La poésie renouvelle le regard sur la réalité.'
        ])
      },
      {
        id: 'esthetique-langage',
        argument: 'La poésie fait du choix des mots un véritable travail artistique.',
        explanation: 'Le poète sélectionne les mots, leur ordre et leurs sonorités pour produire une impression précise et construire une œuvre travaillée.',
        example: { author: 'Charles Baudelaire', work: 'Les Fleurs du mal', detail: 'Les manuscrits et épreuves conservés montrent l’attention portée à la rédaction, à la ponctuation et à la présentation des poèmes.', verification: 'La BnF documente le travail de correction de Baudelaire sur plusieurs épreuves des Fleurs du mal.' },
        phraseToRemember: 'En poésie, les mots sont choisis autant pour leur sens que pour leur effet.',
        variants: v([
          'Le poète travaille chaque mot pour obtenir un effet précis.',
          'La poésie transforme le vocabulaire ordinaire en matière artistique.',
          'Le choix des mots participe directement à la construction de la beauté poétique.'
        ], [
          'Un mot peut être choisi pour sa signification, sa sonorité, son image ou sa valeur affective.',
          'Le poète ne se contente donc pas de transmettre une information : il construit une forme.',
          'Le travail sur la langue devient une partie essentielle de la création.'
        ], [
          'Le poète fait de la langue une matière artistique.',
          'Chaque mot peut participer à la beauté du poème.',
          'La poésie est aussi un travail minutieux sur la langue.'
        ])
      },
      {
        id: 'esthetique-visuelle',
        argument: 'La poésie peut devenir une œuvre visuelle grâce à la disposition des mots.',
        explanation: 'Certains poètes jouent avec la mise en page afin que la forme graphique participe elle aussi au sens du texte.',
        example: { author: 'Guillaume Apollinaire', work: 'Calligrammes', detail: 'Apollinaire associe écriture et dessin dans des poèmes dont la disposition typographique participe à la création artistique.', verification: 'La BnF présente les calligrammes comme une rencontre entre innovation poétique et beauté plastique.' },
        phraseToRemember: 'Avec le calligramme, la forme du poème devient elle-même une image.',
        variants: v([
          'La disposition graphique peut participer au sens du poème.',
          'Le poème peut être regardé autant qu’il est lu.',
          'Apollinaire montre que la poésie peut unir les mots et la forme visuelle.'
        ], [
          'La page devient un espace de création où la position des mots produit un effet supplémentaire.',
          'Le lecteur découvre alors une poésie qui associe langage, dessin et espace.',
          'La forme graphique complète le message verbal.'
        ], [
          'La poésie peut aussi se construire avec l’espace de la page.',
          'Le calligramme fait dialoguer texte et image.',
          'La forme visuelle devient une partie du poème.'
        ])
      }
    ]
  },
  {
    key: 'evasive_fictive',
    title: 'Fonction évasive / fictive',
    definition: 'La poésie peut éloigner momentanément du quotidien en faisant rêver, en imaginant d’autres lieux et en créant des univers différents du monde ordinaire.',
    arguments: [
      {
        id: 'evasion-voyage',
        argument: 'La poésie permet de voyager par l’imagination.',
        explanation: 'Le poète peut créer un lieu rêvé qui offre au lecteur une échappée hors de la réalité quotidienne.',
        example: { author: 'Charles Baudelaire', work: 'Les Fleurs du mal — « L’Invitation au voyage »', detail: 'Le poème construit un espace idéal associé au voyage, à l’harmonie et à la beauté.', verification: 'La BnF identifie « L’Invitation au voyage » comme un poème des Fleurs du mal.' },
        phraseToRemember: 'La poésie peut faire voyager sans quitter sa place.',
        variants: v([
          'Le poème ouvre un espace de voyage intérieur.',
          'Grâce à l’imagination, le lecteur peut s’éloigner du quotidien.',
          'La poésie offre une évasion par les images et les rêves.'
        ], [
          'Le lieu imaginé par le poète devient un refuge contre les contraintes ordinaires.',
          'Le lecteur est transporté par les descriptions, les sensations et les images.',
          'L’évasion est donc créée par le pouvoir de l’imagination et du langage.'
        ], [
          'Le poème peut devenir un voyage imaginaire.',
          'L’imagination permet d’échapper momentanément au quotidien.',
          'La poésie ouvre des horizons nouveaux.'
        ])
      },
      {
        id: 'evasion-monde-ideal',
        argument: 'La poésie permet de rêver d’un monde idéal.',
        explanation: 'Le poète peut imaginer un univers plus harmonieux, plus beau ou plus paisible que la réalité qu’il connaît.',
        example: { author: 'Charles Baudelaire', work: 'Les Fleurs du mal — « L’Invitation au voyage »', detail: 'Le poème construit un idéal de calme, de beauté et d’harmonie qui contraste avec la réalité quotidienne.', verification: 'Le poème appartient aux Fleurs du mal et est présenté par la BnF dans l’exposition Baudelaire.' },
        phraseToRemember: 'La poésie permet d’imaginer un monde différent de la réalité.',
        variants: v([
          'Le poète peut créer par les mots un univers idéal.',
          'L’écriture poétique offre un refuge dans un monde imaginé.',
          'Le rêve poétique permet de dépasser les limites du réel.'
        ], [
          'Le monde créé par le poète ne correspond pas forcément à la réalité observée.',
          'Cette distance avec le réel permet de faire naître une vision plus harmonieuse.',
          'Le lecteur peut ainsi comparer le monde rêvé au monde qu’il connaît.'
        ], [
          'Le rêve poétique propose une autre manière d’habiter le monde.',
          'L’imaginaire permet de dépasser les limites du réel.',
          'La poésie peut construire un idéal.'
        ])
      },
      {
        id: 'evasion-mythe',
        argument: 'La poésie peut s’évader du quotidien grâce aux mythes et aux figures imaginaires.',
        explanation: 'Le poète réutilise des personnages, récits et symboles anciens pour construire un univers qui dépasse la réalité immédiate.',
        example: { author: 'Guillaume Apollinaire', work: 'Le Bestiaire ou cortège d’Orphée', detail: 'Apollinaire mobilise notamment la figure mythologique d’Orphée et construit une poésie nourrie de références symboliques.', verification: 'Le Bestiaire ou cortège d’Orphée est une œuvre poétique d’Apollinaire.' },
        phraseToRemember: 'Les mythes permettent à la poésie de dépasser le monde quotidien.',
        variants: v([
          'Le recours aux mythes enrichit l’univers imaginaire du poème.',
          'Le poète peut s’appuyer sur des figures anciennes pour créer un monde symbolique.',
          'Les légendes donnent à la poésie une dimension qui dépasse le présent immédiat.'
        ], [
          'Un personnage mythique peut représenter une idée ou une expérience humaine.',
          'Le lecteur entre ainsi dans un univers où le réel et l’imaginaire se rencontrent.',
          'La référence au mythe élargit le sens du poème.'
        ], [
          'Le mythe ouvre la poésie sur l’imaginaire.',
          'Les figures légendaires permettent de dépasser le quotidien.',
          'Le poème peut transformer un mythe en nouvelle expérience poétique.'
        ])
      }
    ]
  },
  {
    key: 'ludique',
    title: 'Fonction ludique',
    definition: 'La poésie peut procurer du plaisir en jouant avec les mots, les sons, les formes, les personnages et les situations.',
    arguments: [
      {
        id: 'ludique-fable',
        argument: 'La poésie peut divertir grâce à des récits vivants et amusants.',
        explanation: 'Les personnages, les actions et les situations peuvent rendre la lecture agréable tout en laissant une place à la réflexion.',
        example: { author: 'Jean de La Fontaine', work: 'Fables — « Le Corbeau et le Renard »', detail: 'La fable met en scène deux animaux et une situation de flatterie qui rend le récit vivant et plaisant.', verification: 'La Fontaine est l’auteur des Fables et « Le Corbeau et le Renard » en fait partie.' },
        phraseToRemember: 'La poésie peut instruire tout en procurant le plaisir du récit.',
        variants: v([
          'Le récit poétique peut divertir le lecteur par son action et ses personnages.',
          'La fable associe souvent plaisir de lecture et réflexion.',
          'Une histoire en vers peut rendre une leçon plus agréable à découvrir.'
        ], [
          'Le mouvement du récit et les comportements des personnages créent l’intérêt du lecteur.',
          'Le divertissement facilite l’entrée dans la réflexion morale.',
          'Le plaisir de lire n’empêche donc pas la portée éducative du texte.'
        ], [
          'Le récit poétique peut divertir et faire réfléchir.',
          'Le plaisir de lire accompagne parfois la leçon.',
          'La fable rend la réflexion plus vivante.'
        ])
      },
      {
        id: 'ludique-jeu-mots',
        argument: 'La poésie peut jouer avec les mots et les sonorités.',
        explanation: 'Les répétitions, les rapprochements de sons, les rythmes et les associations inattendues peuvent produire un plaisir de langage.',
        example: { author: 'Guillaume Apollinaire', work: 'Calligrammes', detail: 'L’œuvre expérimente avec la disposition des mots et les formes poétiques, ce qui renouvelle la manière de lire.', verification: 'La BnF documente l’innovation formelle et graphique des calligrammes d’Apollinaire.' },
        phraseToRemember: 'La poésie peut faire du langage un jeu créatif.',
        variants: v([
          'Le poète transforme les mots en terrain de jeu.',
          'Les sonorités et les formes peuvent créer un plaisir ludique.',
          'Jouer avec la langue permet de surprendre le lecteur.'
        ], [
          'Le lecteur prend plaisir à découvrir des rapprochements inattendus entre les mots.',
          'La poésie ne sert donc pas uniquement à transmettre une idée : elle invite aussi à jouer avec le langage.',
          'La créativité formelle renouvelle l’expérience de lecture.'
        ], [
          'Le langage devient un espace de jeu.',
          'La poésie surprend par ses jeux de mots et de formes.',
          'Le jeu verbal peut rendre la lecture plus vivante.'
        ])
      },
      {
        id: 'ludique-plaisir-forme',
        argument: 'La forme poétique peut procurer un plaisir de lecture.',
        explanation: 'Le rythme, les images, les sonorités et la disposition du texte peuvent rendre la lecture agréable même lorsque le poème ne cherche pas directement à faire rire.',
        example: { author: 'Guillaume Apollinaire', work: 'Calligrammes', detail: 'La diversité des formes et la dimension visuelle des textes offrent une expérience de lecture originale.', verification: 'Les Calligrammes sont associés à une recherche formelle et visuelle documentée par la BnF.' },
        phraseToRemember: 'Le plaisir poétique naît aussi de la forme du texte.',
        variants: v([
          'Le lecteur peut prendre plaisir à la musique et aux images du poème.',
          'La poésie divertit parfois simplement par sa manière de jouer avec la forme.',
          'La beauté formelle peut être une source de plaisir en elle-même.'
        ], [
          'Le plaisir ne vient pas seulement de l’histoire racontée mais aussi de la manière dont les mots sont organisés.',
          'Le lecteur devient attentif aux sons, aux rythmes et à la disposition du texte.',
          'La forme participe donc pleinement à l’expérience poétique.'
        ], [
          'La forme peut être une source de plaisir.',
          'Lire un poème, c’est aussi prendre plaisir à sa construction.',
          'La poésie divertit par la créativité de sa forme.'
        ])
      }
    ]
  },
  {
    key: 'didactique',
    title: 'Fonction didactique',
    definition: 'La poésie peut transmettre une leçon, faire réfléchir, partager une vision du monde ou contribuer à la transmission d’une culture.',
    arguments: [
      {
        id: 'didactique-morale',
        argument: 'La poésie peut transmettre une morale.',
        explanation: 'Le poète raconte une situation ou met en scène des personnages pour amener le lecteur à comprendre une leçon de conduite.',
        example: { author: 'Jean de La Fontaine', work: 'Fables — « Le Lièvre et la Tortue »', detail: 'La course entre les deux animaux conduit à une leçon sur la constance et les limites d’une confiance excessive.', verification: 'La fable est répertoriée comme une œuvre de Jean de La Fontaine ; elle appartient au Livre VI des Fables.' },
        phraseToRemember: 'La poésie peut transmettre une leçon en racontant une histoire.',
        variants: v([
          'La fable utilise le récit pour faire comprendre une leçon.',
          'Le poème peut conduire le lecteur à réfléchir sur son comportement.',
          'Une histoire en vers peut porter un enseignement moral.'
        ], [
          'Le lecteur découvre la leçon à travers les actions et les conséquences vécues par les personnages.',
          'Le récit rend l’enseignement concret et facile à mémoriser.',
          'La morale peut ainsi être associée au plaisir de la lecture.'
        ], [
          'La poésie peut apprendre en racontant.',
          'Le récit poétique peut devenir une leçon de vie.',
          'La fable rend la morale concrète.'
        ])
      },
      {
        id: 'didactique-comportements',
        argument: 'La poésie peut aider le lecteur à réfléchir aux comportements humains.',
        explanation: 'Les personnages et les situations servent à montrer des défauts, des qualités et des rapports de force présents dans la société.',
        example: { author: 'Jean de La Fontaine', work: 'Fables', detail: 'Les animaux représentent fréquemment des comportements humains comme la flatterie, la ruse, la vanité ou l’abus de pouvoir.', verification: 'Les Fables de La Fontaine utilisent largement la personnification animale pour réfléchir aux comportements humains.' },
        phraseToRemember: 'La poésie peut utiliser des personnages pour faire réfléchir sur les hommes.',
        variants: v([
          'Le poème peut présenter les défauts humains pour aider le lecteur à les reconnaître.',
          'Les personnages de la poésie servent parfois de miroir aux comportements sociaux.',
          'La poésie peut transformer une situation imaginaire en leçon sur la vie réelle.'
        ], [
          'Le lecteur observe les conséquences d’un comportement et peut ensuite porter un regard critique sur la société.',
          'La représentation indirecte rend certaines critiques plus faciles à comprendre.',
          'Le texte poétique devient ainsi un moyen de réflexion sur les relations humaines.'
        ], [
          'Le poème peut être un miroir des comportements humains.',
          'La poésie aide à réfléchir sur la société.',
          'Les personnages poétiques peuvent représenter des défauts humains.'
        ])
      },
      {
        id: 'didactique-culture',
        argument: 'La poésie peut transmettre une culture et une mémoire collective.',
        explanation: 'Le poète peut faire connaître une histoire, des valeurs, une langue, des traditions et une manière de voir le monde.',
        example: { author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', detail: 'Le recueil valorise la mémoire africaine, l’attachement au continent et des éléments de l’héritage culturel noir.', verification: 'Chants d’ombre est un recueil de Senghor publié en 1945 et consacré notamment à la mémoire et à la culture africaines.' },
        phraseToRemember: 'La poésie peut conserver et transmettre la mémoire d’un peuple.',
        variants: v([
          'Le poète peut devenir un gardien de la mémoire culturelle.',
          'Un recueil de poésie peut faire connaître les valeurs et les traditions d’un peuple.',
          'La poésie contribue parfois à transmettre un héritage culturel aux générations suivantes.'
        ], [
          'Les images, les thèmes et les références culturelles permettent au lecteur de découvrir une identité collective.',
          'Le poème devient alors un espace où la mémoire personnelle rejoint la mémoire d’un peuple.',
          'La transmission culturelle donne au texte une portée qui dépasse le seul auteur.'
        ], [
          'La poésie peut être une mémoire vivante.',
          'Le poème peut transmettre un héritage culturel.',
          'La poésie contribue à préserver la mémoire collective.'
        ])
      },
      {
        id: 'didactique-vision',
        argument: 'La poésie peut transmettre une vision du monde.',
        explanation: 'Le poète ne se contente pas de décrire : il propose une manière particulière de regarder l’homme, la nature, la société ou l’histoire.',
        example: { author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', detail: 'Le recueil porte une vision de l’Afrique et de son héritage culturel, liée à la réflexion de Senghor sur la négritude.', verification: 'La BnF référence Chants d’ombre comme recueil de Senghor et documente son ancrage africain.' },
        phraseToRemember: 'Le poète peut transmettre sa manière de comprendre le monde.',
        variants: v([
          'Un poème peut proposer au lecteur un regard nouveau sur le monde.',
          'La poésie partage parfois une conception de l’homme et de la société.',
          'Le poète peut utiliser les vers pour défendre une manière de voir la réalité.'
        ], [
          'Les images et les idées du poème orientent la réflexion du lecteur.',
          'Le texte poétique devient alors une forme de connaissance personnelle et collective.',
          'Le lecteur ne reçoit pas seulement des informations : il découvre un regard.'
        ], [
          'La poésie transmet aussi une manière de voir.',
          'Le poème peut devenir une réflexion sur le monde.',
          'Le poète partage un regard sur la réalité.'
        ])
      }
    ]
  },
  {
    key: 'engagee',
    title: 'Fonction engagée',
    definition: 'La poésie peut prendre position face aux problèmes de son époque, dénoncer une injustice, défendre une cause ou donner une voix aux personnes opprimées.',
    arguments: [
      {
        id: 'engagee-misere',
        argument: 'La poésie peut dénoncer la misère et les injustices sociales.',
        explanation: 'Le poète attire l’attention sur des situations de pauvreté ou d’exploitation afin de provoquer une prise de conscience.',
        example: { author: 'Victor Hugo', work: 'Les Contemplations — « Melancholia »', detail: 'Le poème dénonce le travail des enfants et met en lumière une injustice sociale.', verification: '« Melancholia » appartient aux Contemplations et est associé à la dénonciation du travail des enfants.' },
        phraseToRemember: 'La poésie peut utiliser les mots pour dénoncer l’injustice sociale.',
        variants: v([
          'Le poète peut prendre la défense des victimes de la misère.',
          'La poésie peut révéler des injustices que la société tend à oublier.',
          'Le poème engagé attire l’attention sur les souffrances sociales.'
        ], [
          'En donnant une place aux victimes, le poète oblige le lecteur à regarder une réalité difficile.',
          'La poésie transforme un problème social en sujet de réflexion et de conscience.',
          'Le texte cherche ainsi à provoquer une réaction morale chez le lecteur.'
        ], [
          'La poésie peut devenir une voix contre la misère.',
          'Le poème engagé rend visibles les injustices.',
          'Les vers peuvent servir à défendre les victimes.'
        ])
      },
      {
        id: 'engagee-colonisation',
        argument: 'La poésie peut dénoncer la colonisation et défendre la dignité des peuples dominés.',
        explanation: 'Le poète engagé montre les effets de la domination et affirme la valeur, la dignité et la liberté des peuples colonisés.',
        example: { author: 'Aimé Césaire', work: 'Cahier d’un retour au pays natal', detail: 'Césaire exprime l’expérience d’un homme colonisé, dénonce la domination coloniale et affirme la dignité noire.', verification: 'La BnF présente le Cahier comme l’expression de l’expérience d’un homme colonisé et de la négritude.' },
        phraseToRemember: 'La poésie engagée peut combattre la domination et affirmer la dignité des peuples.',
        variants: v([
          'Le poète peut utiliser son œuvre pour dénoncer la domination coloniale.',
          'La poésie devient une parole de résistance face à l’oppression.',
          'Le poème engagé peut réaffirmer la dignité d’un peuple dominé.'
        ], [
          'L’écriture permet de transformer l’expérience de la domination en parole de refus et d’affirmation.',
          'Le poète donne une visibilité à une histoire et à une identité méprisées.',
          'La littérature devient ainsi un moyen de résister symboliquement à la domination.'
        ], [
          'La poésie peut devenir une parole de résistance.',
          'Le poème engagé affirme la dignité des peuples dominés.',
          'Écrire peut aussi être une manière de refuser la domination.'
        ])
      },
      {
        id: 'engagee-identite',
        argument: 'La poésie peut défendre une identité et une culture africaines.',
        explanation: 'Le poète peut valoriser l’histoire, la mémoire et les cultures africaines face au mépris et aux représentations négatives.',
        example: { author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', detail: 'Le recueil participe à l’affirmation de la négritude et valorise la mémoire et la culture africaines.', verification: 'Chants d’ombre est un recueil de Senghor ; la notice BnF confirme l’auteur et l’œuvre.' },
        phraseToRemember: 'La poésie peut servir à affirmer une identité culturelle.',
        variants: v([
          'Le poème peut devenir un moyen de valoriser une culture longtemps dépréciée.',
          'Le poète peut défendre la mémoire et l’identité de son peuple.',
          'La poésie peut participer à la reconnaissance d’une culture et d’une histoire.'
        ], [
          'En célébrant une culture, le poète s’oppose aux représentations qui la dévalorisent.',
          'Le texte transforme la mémoire culturelle en force d’affirmation.',
          'L’œuvre poétique peut ainsi participer à une reconquête symbolique de l’identité.'
        ], [
          'La poésie peut être un lieu d’affirmation culturelle.',
          'Le poème peut défendre une identité collective.',
          'La mémoire culturelle devient une force poétique.'
        ])
      },
      {
        id: 'engagee-corruption',
        argument: 'La poésie peut dénoncer la corruption et les comportements qui fragilisent la société.',
        explanation: 'Le poète peut utiliser la satire et l’ironie pour mettre en évidence les mécanismes de la corruption et appeler à une prise de conscience.',
        example: { author: 'Tommy David Gole Bi Gnamien', work: 'Les Vers de Corrupthius : ou Comment déparasiter l’humanité', detail: 'L’œuvre est présentée comme une œuvre poético-politique qui critique la corruption et ses conséquences sociales.', verification: 'Référence bibliographique vérifiée : Éditions Publibook, 2013 ; auteur Tommy David Gole Bi Gnamien.' },
        phraseToRemember: 'La poésie peut dénoncer les pratiques qui menacent la société.',
        variants: v([
          'Le poète peut utiliser la satire pour combattre la corruption.',
          'La poésie engagée peut révéler les dégâts provoqués par la corruption.',
          'L’écriture poétique peut devenir un moyen de dénoncer les abus sociaux.'
        ], [
          'L’ironie permet de montrer les comportements condamnables sans transformer le poème en simple discours administratif.',
          'Le poète rend visible un problème collectif en le transformant en matière littéraire.',
          'Le lecteur est invité à prendre conscience des conséquences de ces pratiques.'
        ], [
          'La satire poétique peut dénoncer la corruption.',
          'Le poème peut transformer un problème social en combat littéraire.',
          'La poésie peut éveiller les consciences face aux abus.'
        ])
      },
      {
        id: 'engagee-liberte',
        argument: 'La poésie peut défendre la liberté et appeler à la résistance.',
        explanation: 'Dans les périodes de crise, le poète peut faire de son texte une parole collective qui affirme la liberté et encourage la résistance.',
        example: { author: 'Paul Éluard', work: 'Poésie et vérité 1942 — « Liberté »', detail: 'Écrit pendant l’Occupation, le poème place la liberté au centre d’une parole de résistance.', verification: '« Liberté » est publié dans Poésie et vérité 1942 et est associé à la Résistance.' },
        phraseToRemember: 'La poésie peut devenir une parole de liberté et de résistance.',
        variants: v([
          'Le poète peut mettre ses vers au service de la liberté.',
          'Dans un contexte d’oppression, le poème peut devenir une parole de résistance.',
          'La poésie peut rassembler autour d’une valeur défendue collectivement.'
        ], [
          'Le texte poétique donne une dimension humaine et symbolique à la lutte pour la liberté.',
          'Le poème peut transformer une valeur politique en émotion partagée.',
          'La parole poétique contribue ainsi à maintenir l’espoir et la conscience collective.'
        ], [
          'Le poème peut devenir un appel à la liberté.',
          'La poésie peut soutenir la résistance.',
          'Les vers peuvent porter une valeur collective.'
        ])
      },
      {
        id: 'engagee-guerre',
        argument: 'La poésie peut témoigner des violences et des bouleversements de la guerre.',
        explanation: 'Le poète peut transformer son expérience d’un conflit en témoignage et montrer ses effets sur les individus et la société.',
        example: { author: 'Guillaume Apollinaire', work: 'Calligrammes', detail: 'Le recueil comprend des textes liés à l’expérience de la Première Guerre mondiale et associe cette expérience à une recherche poétique novatrice.', verification: 'La BnF présente Apollinaire comme un poète-combattant et documente ses manuscrits et calligrammes.' },
        phraseToRemember: 'La poésie peut garder la trace d’une époque marquée par la guerre.',
        variants: v([
          'Le poème peut devenir un témoignage sur la guerre.',
          'Le poète transforme son expérience historique en parole poétique.',
          'La poésie peut conserver la mémoire des bouleversements vécus par une génération.'
        ], [
          'L’expérience individuelle permet de rendre sensible un événement historique.',
          'Le texte fait entrer le lecteur dans la réalité humaine du conflit.',
          'La poésie devient ainsi un lieu de mémoire autant qu’une création artistique.'
        ], [
          'La poésie peut témoigner de l’histoire.',
          'Le poème conserve la mémoire d’une époque.',
          'L’expérience de guerre peut devenir une matière poétique.'
        ])
      }
    ]
  }
];

export const POETRY_FUNCTIONS_BY_KEY = Object.fromEntries(
  POETRY_FUNCTIONS_KNOWLEDGE_BASE.map((item) => [item.key, item])
) as Record<PoetryFunctionKey, PoetryFunction>;

export function getPoetryFunction(key: PoetryFunctionKey): PoetryFunction {
  return POETRY_FUNCTIONS_BY_KEY[key];
}

export function getAllPoetryArguments(): PoetryArgument[] {
  return POETRY_FUNCTIONS_KNOWLEDGE_BASE.flatMap((item) => item.arguments);
}
