import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_HUMAN_CONDITION_VARIANTS: Record<string, ArgumentVariant[]> = {
  "bonheur": [
    {
      id: 0,
      label: "Perspectives Antiques & Eudémonistes : Sagesse, Tempérance & Ataraxie",
      perspective: "Épicurisme, Stoïcisme & Souverain bien aristotélicien",
      pedagogicalAdvice: "Le socle classique pour démontrer que le bonheur réside dans la maîtrise de soi et la modération des désirs.",
      arguments: [
        {
          statement: "Le souverain bien de l'homme consiste dans l'activité de l'âme conforme à la raison et à la vertu.",
          author: "Aristote",
          work: "Éthique à Nicomaque",
          quote: "Le bonheur est une activité de l'âme en accord avec la vertu parfaite dans une vie accomplie.",
          explanation: "Pour Aristote, le bonheur (eudaimonia) n'est pas un plaisir fugitif ou une chance passive, mais la réalisation pleine de la nature rationnelle de l'homme. La pratique constante du juste milieu entre l'excès et le défaut produit la félicité durable.",
          category: "Thèse Eudémoniste (Vertu & Juste Milieu)",
          connector: "De prime abord"
        },
        {
          statement: "Le bonheur authentique réside dans l'ataraxie, c'est-à-dire la tranquillité de l'âme obtenue par la limitation des désirs.",
          author: "Épicure",
          work: "Lettre à Ménécée",
          quote: "Quand nous disons que le plaisir est la fin suprême, nous ne parlons pas des plaisirs des débauchés, mais de l'absence de douleur dans le corps et de trouble dans l'âme.",
          explanation: "Épicure classe les désirs et montre que seuls les désirs naturels et nécessaires (boire à sa soif, philosopher entre amis) procurent un plaisir stable (catastématique). Se délivrer de la vaine ambition et de la peur de la mort garantit une paix inaltérable.",
          category: "Sagesse Épicurienne (L'Ataraxie & Le Tétrapharmakos)",
          connector: "En outre"
        },
        {
          statement: "La paix intérieure s'obtient en distinguant rigoureusement ce qui dépend de nous de ce qui n'en dépend pas.",
          author: "Épictète",
          work: "Manuel",
          quote: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.",
          explanation: "Le stoïcisme enseigne que la fortune, les honneurs, la maladie et la mort ne dépendent pas de notre volonté. Le sage accepte l'ordre nécessaire du cosmos et concentre toute son énergie morale sur ce qui dépend de lui : ses jugements, ses désirs et ses volontés vertueuses.",
          category: "Discipline Stoïcienne (La Maîtrise des Représentations)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le bonheur est le but universel de toutes les actions humaines, même les plus contradictoires.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Tous les hommes recherchent d'être heureux ; cela est sans exception ; quelques différents moyens qu'ils y emploient, ils tendent tous à ce but.",
          explanation: "Pascal constate la quête universelle et inextinguible du bonheur chez tous les êtres humains. Toutefois, pour Pascal, ce désir infini ne peut trouver sa plénitude dans les plaisirs terrestres finis et trahit la nostalgie d'une perfection divine perdue.",
          category: "Constat Anthropologique (Le Désir Infini de Félicité)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Tragiques & Critiques : L'Inaccessible Bonheur & Le Malaise du Désir",
      perspective: "Pessimisme schopenhauerien, Illusion kantienne & Malaise freudien",
      pedagogicalAdvice: "À mobiliser pour contester l'illusion d'un bonheur total et dévoiler les contradictions de la condition humaine.",
      arguments: [
        {
          statement: "Le bonheur terrestre est une chimère car la vie humaine oscille perpétuellement comme un pendule entre la souffrance du manque et l'ennui de la satiété.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "La vie oscille, comme un pendule, de droite à gauche, de la souffrance à l'ennui.",
          explanation: "Schopenhauer explique que le désir est par essence une privation douloureuse. Dès qu'un souhait est satisfait, le plaisir s'évanouit aussitôt pour faire place à un vide accablant et à l'ennui, jusqu'à ce qu'un nouveau désir insatiable recommence le cycle de la souffrance.",
          category: "Antithèse Tragique (L'Oscillation Schopenhauerienne)",
          connector: "D'un autre côté"
        },
        {
          statement: "Le bonheur est un idéal non de la raison mais de l'imagination, rendant impossible toute recette universelle pour l'atteindre.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Le concept de bonheur est un concept si indéterminé que, malgré le désir qu'a tout homme d'y parvenir, personne ne peut jamais dire en termes précis et cohérents ce qu'il désire véritablement.",
          explanation: "Kant démontre que l'homme est incapable de déterminer avec certitude ce qui le rendra durablement heureux, car tout ce qu'il convoite (la richesse, la gloire, le savoir) recèle des peines imprévisibles. La morale ne promet pas le bonheur mais enseigne à s'en rendre digne par le devoir.",
          category: "Critique Rationaliste (L'Idéal de l'Imagination)",
          connector: "Cependant"
        },
        {
          statement: "La civilisation exige le sacrifice d'une part de notre satisfaction pulsionnelle, condamnant l'homme civilisé à un malaise psychique irréductible.",
          author: "Sigmund Freud",
          work: "Le Malaise dans la culture",
          quote: "L'intention que l'homme soit « heureux » n'est pas contenue dans le plan de la Création.",
          explanation: "Freud démontre que le principe de plaisir de l'inconscient se heurte constamment aux exigences impitoyables du principe de réalité et de la vie en société. Pour vivre en paix collective, les individus doivent refouler leurs pulsions agressives et sexuelles, ce qui génère une culpabilité inconsciente permanente.",
          category: "Psychanalyse (Le Conflit Pulsionnel & Le Malaise)",
          connector: "Qui plus est"
        },
        {
          statement: "Le divertissement superficiel est une tentative désespérée de fuir la prise de conscience de notre misère existentielle et de notre mortalité.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre.",
          explanation: "Pascal dévoile l'agitation sociale (jeux, affaires, guerres) comme une diversion inventée pour détourner l'esprit du sentiment angoissant de son propre vide intérieur et de sa mort inéluctable. Ce faux bonheur de fuite ne fait qu'approfondir la perte de soi.",
          category: "Critique du Divertissement (Le Vide Intérieur)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives d'Action & d'Affirmation : La Joie Créatrice & La Béatitude Active",
      perspective: "Béatitude spinoziste, Amor fati nietzschéen & Bonheur conquis dans l'effort",
      pedagogicalAdvice: "Indispensable pour surmonter le pessimisme et penser un bonheur fondé sur la puissance d'agir et la joie vitale.",
      arguments: [
        {
          statement: "La béatitude n'est pas la récompense de la vertu mais la vertu elle-même vécue comme expansion suprême de notre puissance de penser et d'agir.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre V)",
          quote: "La joie est le passage de l'homme d'une moindre à une plus grande perfection.",
          explanation: "Spinoza définit la joie comme l'affect actif qui accompagne l'accroissement de notre puissance d'exister (le conatus). Par la connaissance rationnelle de la nature et de nos affects, l'esprit s'affranchit des passions tristes (peur, haine, remords) pour accéder à l'amour intellectuel de Dieu ou de la Nature.",
          category: "Thèse Spinoziste (Béatitude & Conatus)",
          connector: "En premier lieu"
        },
        {
          statement: "Le bonheur n'est pas un état passif de repos indolent mais la joie d'agir et de surmonter les obstacles par la volonté.",
          author: "Alain (Émile Chartier)",
          work: "Propos sur le bonheur",
          quote: "Le bonheur n'est pas une récompense qui vient à la fin de la vie : il faut vouloir son bonheur et le faire.",
          explanation: "Alain refuse le fatalisme plaintif : la mauvaise humeur et la tristesse sont le produit de l'abandon mécanique du corps, tandis que la joie est une œuvre délibérée de la volonté et du courage. Il est du devoir de chacun d'éclairer son esprit par l'action optimiste.",
          category: "Philosophie de l'Action (Le Devoir d'Être Heureux)",
          connector: "Aussi"
        },
        {
          statement: "Le grand bonheur s'éprouve dans l'amour inconditionnel du destin et la capacité d'affirmer la totalité de la vie, y compris ses douleurs.",
          author: "Friedrich Nietzsche",
          work: "Le Crépuscule des idoles",
          quote: "Ma formule pour la grandeur de l'homme est l'amor fati : ne rien vouloir d'autre, ni dans le passé, ni dans l'avenir, ni dans toute l'éternité.",
          explanation: "Nietzsche rejette le bonheur fade du « dernier homme » (qui ne cherche que le petit confort tiède et la sécurité). Le bonheur héroïque réside dans la surabondance de la volonté de puissance qui embrasse le tragique de l'existence avec reconnaissance et enthousiasme.",
          category: "Affirmation Tragique (L'Amor Fati)",
          connector: "D'autre part"
        },
        {
          statement: "Le bonheur s'enracine dans la lucidité face à l'absurde et la révolte vécue au cœur de l'action présente.",
          author: "Albert Camus",
          work: "Le Mythe de Sisyphe",
          quote: "La lutte elle-même vers les sommets suffit à remplir un cœur d'homme. Il faut imaginer Sisyphe heureux.",
          explanation: "Même condamné à rouler éternellement son rocher qui retombe sans cesse, Sisyphe est le héros absurde qui refuse la résignation et le suicide. Sa conscience lucide fait de son destin sa propre propriété et transfigure son labeur en victoire éclatante de l'esprit.",
          category: "Lucidité Absurde & Bonheur Terrestre",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Utilitaristes, Sociales & Communautaires : Le Plus Grand Bonheur Partagé",
      perspective: "Utilitarisme, Justice sociale & Éthique de l'Ubuntu",
      pedagogicalAdvice: "À mobiliser pour lier le bonheur individuel au bonheur collectif, à la solidarité et à la responsabilité politique.",
      arguments: [
        {
          statement: "La morale et la politique doivent viser la maximisation du bien-être pour le plus grand nombre possible d'individus.",
          author: "John Stuart Mill",
          work: "L'Utilitarisme",
          quote: "Les actions sont bonnes dans la mesure où elles tendent à promouvoir le bonheur, mauvaises dans la mesure où elles tendent à produire le contraire du bonheur.",
          explanation: "Mill affine l'utilitarisme de Bentham en introduisant une hiérarchie qualitative des plaisirs : les joies de l'intellect et de la générosité surpassent infiniment les plaisirs purement corporels. Le bonheur véritable d'un individu est indissociable du bonheur de la communauté dans laquelle il vit.",
          category: "Thèse Utilitariste (Le Plus Grand Bonheur Partagé)",
          connector: "De prime abord"
        },
        {
          statement: "Le bonheur individuel ne peut s'épanouir dans une société régie par l'injustice et l'exploitation de l'homme par l'homme.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "Il n'y a point de vrai bonheur pour celui qui ne voit autour de lui que des visages tristes et des cœurs révoltés.",
          explanation: "Rousseau montre que dans une société corrompue par l'amour-propre et l'inégalité de fortune, le riche est anxieux et le pauvre humilié. Le bonheur sain ne peut fleurir que sous des lois justes garantissant l'égalité civique et la fraternité citoyenne.",
          category: "Éthique Politique (Société Juste & Épanouissement)",
          connector: "Par ailleurs"
        },
        {
          statement: "Dans la pensée philosophique africaine, le bonheur n'est pas une conquête solitaire mais s'accomplit dans la relation communautaire de l'Ubuntu.",
          author: "Desmond Tutu",
          work: "Il n'y a pas d'avenir sans pardon",
          quote: "Une personne est une personne à travers les autres personnes (Ubuntu : Umuntu ngumuntu ngabantu).",
          explanation: "La sagesse de l'Ubuntu pose que nul ne peut être authentiquement heureux si son voisin souffre ou est opprimé. Le bien-être subjectif est organiquement tissé dans la bienveillance mutuelle, la réconciliation et la solidarité intergénérationnelle du groupe.",
          category: "Philosophie Africaine (L'Éthique de l'Ubuntu)",
          connector: "Toutefois"
        },
        {
          statement: "L'accès au bonheur exige la satisfaction des besoins matériels fondamentaux et le développement des capabilités humaines réelles.",
          author: "Amartya Sen",
          work: "Un nouveau modèle économique : Développement, Justice, Liberté",
          quote: "Le développement ne se mesure pas au produit national brut, mais à l'élargissement des libertés réelles dont jouissent les individus pour construire une vie digne et épanouie.",
          explanation: "Sen prouve que disserter abstraitement sur le bonheur reste dérisoire tant que la faim, l'analphabétisme et la maladie privent les populations des moyens élémentaires d'exercer leur libre arbitre. La justice économique est le terreau nourricier indispensable de la félicité.",
          category: "Économie & Droits Humains (Capabilités & Vie Digne)",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "art": [
    {
      id: 0,
      label: "Perspectives Classiques & Idéalistes : Mimesis, Idée du Beau & Génie Créateur",
      perspective: "Imitation épurée, Jugement de goût désintéressé & Don de la nature",
      pedagogicalAdvice: "Le fondement philosophique de l'esthétique classique pour penser la beauté universelle et la spécificité du jugement de goût.",
      arguments: [
        {
          statement: "Le jugement de goût esthétique se caractérise par une satisfaction pure et désintéressée exempte de tout désir de possession.",
          author: "Emmanuel Kant",
          work: "Critique de la faculté de juger",
          quote: "Le beau est ce qui plaît universellement sans concept.",
          explanation: "Kant distingue l'agréable (qui relève des sens), l'utile (qui relève de l'intérêt) et le beau. Devant une véritable œuvre d'art, notre esprit éprouve le jeu libre et harmonieux de l'imagination et de l'entendement, suscitant un plaisir pur que tout être humain a vocation à partager.",
          category: "Thèse Esthétique (Le Beau Désintéressé & L'Harmonie)",
          connector: "De prime abord"
        },
        {
          statement: "L'art est l'incarnation sensible de l'Idée spirituelle, élevant la matière brute à la manifestation de la vérité divine.",
          author: "G.W.F. Hegel",
          work: "Esthétique",
          quote: "Le beau artistique est le beau engendré et régénéré par l'esprit ; et autant l'esprit est supérieur à la nature, autant le beau artistique est supérieur au beau naturel.",
          explanation: "Hegel affirme la supériorité absolue de l'art sur la nature. La nature est aveugle et inconsciente, tandis que l'œuvre humaine exprime les interrogations les plus profondes de l'esprit à une époque donnée, matérialisant la conscience humaine dans la pierre, le son ou la couleur.",
          category: "Idéalisme Esthétique (L'Esprit dans la Matière)",
          connector: "En second lieu"
        },
        {
          statement: "Les beaux-arts sont l'œuvre du génie, cette disposition innée par laquelle la nature donne ses règles à l'art.",
          author: "Emmanuel Kant",
          work: "Critique de la faculté de juger",
          quote: "Le génie est le talent de produire ce dont on ne saurait donner aucune règle déterminée : l'originalité doit être sa première propriété.",
          explanation: "Kant montre qu'on ne peut devenir un grand artiste par simple apprentissage mécanique de recettes techniques. Le génie artistique crée des œuvres exemplaires et novatrices sans pouvoir lui-même déduire rationnellement comment son inspiration a jailli.",
          category: "Théorie du Génie (Originalité Exemplaire)",
          connector: "Par ailleurs"
        },
        {
          statement: "La tragédie théâtrale opère la catharsis, c'est-à-dire la purgation bienfaisante des passions destructrices par la terreur et la pitié.",
          author: "Aristote",
          work: "Poétique",
          quote: "La tragédie, par le moyen de la pitié et de la frayeur, accomplit la purgation (catharsis) de telles émotions.",
          explanation: "Aristote réhabilite l'art contre la méfiance de Platon. En contemplant sur scène le destin pathétique des héros sans courir de danger réel, le spectateur purifie ses propres pulsions violentes et accède à une compréhension apaisée de la condition humaine.",
          category: "Théorie Dramatique (La Catharsis Aristotélicienne)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives de Dévoilement & Phénoménologiques : L'Art comme Vérité du Réel",
      perspective: "Dévoilement heideggérien, Perception bergsonienne & Sensibilité merleau-pontyenne",
      pedagogicalAdvice: "À utiliser pour montrer que l'art ne copie pas passivement la nature mais en révèle la vérité cachée et inaperçue.",
      arguments: [
        {
          statement: "L'art n'a d'autre objet que d'écarter les symboles utilitaires pour nous mettre face à la réalité même dans sa fraîcheur vierge.",
          author: "Henri Bergson",
          work: "Le Rire",
          quote: "L'art n'est sûrement qu'une vision plus directe de la réalité.",
          explanation: "Bergson explique que dans la vie quotidienne, nos besoins pratiques et le langage courant interposent un voile conventionnel entre les choses et nous : nous ne voyons que des étiquettes utiles. L'artiste, doté d'une perception désintéressée, brise ce voile pour nous faire contempler le réel dans son originalité intime.",
          category: "Thèse Phénoménologique (L'Art comme Dévoilement du Réel)",
          connector: "En premier lieu"
        },
        {
          statement: "L'œuvre d'art ouvre un monde et met en œuvre la vérité de l'étant en montrant l'essence des choses ordinaires.",
          author: "Martin Heidegger",
          work: "L'Origine de l'œuvre d'art",
          quote: "L'essence de l'art, c'est la mise en œuvre de la vérité de l'étant.",
          explanation: "En contemplant le tableau des souliers de paysan de Van Gogh, Heidegger montre que l'œuvre ne livre pas une simple image descriptive mais fait surgir l'appel silencieux de la terre, la fatigue des pas et l'inquiétude du pain quotidien. L'art fonde la vérité d'un peuple.",
          category: "Ontologie de l'Art (Ouverture d'un Monde)",
          connector: "Dans le même sens"
        },
        {
          statement: "Le peintre ne reproduit pas le visible : il rend visible les forces secrètes et invisibles de la nature.",
          author: "Paul Klee",
          work: "Théorie de l'art moderne",
          quote: "L'art ne reproduit pas le visible ; il rend visible.",
          explanation: "Klee réfute l'imitation servile : le créateur ne cherche pas à concurrencer la photographie, mais capte les dynamiques énergétiques, la lumière mouvante, les rythmes et les tensions spirituelles qui animent l'univers en gestation.",
          category: "Création Visuelle (Rendre Visible l'Invisible)",
          connector: "D'autre part"
        },
        {
          statement: "L'art moderne nous délivre du joug de la volonté égoïste en nous offrant la contemplation pure des Idées éternelles.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "L'art est la fleur de la vie. Celui qui s'absorbe dans la contemplation esthétique cesse pour un instant d'être un individu soumis à la souffrance du vouloir.",
          explanation: "Pour Schopenhauer, l'expérience artistique est une trêve miraculeuse dans la douleur de l'existence. Devant la tragédie ou la symphonie musicale, le sujet s'oublie lui-même pour devenir le miroir pur et serein de l'essence du monde.",
          category: "Libération Esthétique (La Trêve Schopenhauerienne)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Transgressives & Vitalistes : Volonté de Puissance & Beauté Tragique",
      perspective: "Apollon et Dionysos, Sublimation pulsionnelle & Énergie créatrice",
      pedagogicalAdvice: "Indispensable pour aborder la création artistique comme pulsion de vie, défi aux conventions et transfiguration du réel.",
      arguments: [
        {
          statement: "L'art est la plus haute tâche de la vie car il transfigure la souffrance et nous empêche de périr de la vérité aride.",
          author: "Friedrich Nietzsche",
          work: "La Naissance de la tragédie",
          quote: "Nous avons l'art afin de ne pas périr de la vérité.",
          explanation: "Nietzsche démontre que la tragédie grecque est née du mariage fécond de l'ivresse dionysiaque (puissance vitale tellurique sans frein) et de la mesure apollinienne (beauté sereine des formes). L'art affirme la vie dans toute sa démesure contre le nihilisme desséchant.",
          category: "Thèse Vitaliste (Apollon, Dionysos & La Puissance de l'Art)",
          connector: "De prime abord"
        },
        {
          statement: "La création esthétique est une puissante opération de sublimation qui transforme les pulsions inconscientes en chefs-d'œuvre reconnus.",
          author: "Sigmund Freud",
          work: "Un souvenir d'enfance de Léonard de Vinci",
          quote: "L'artiste est un homme qui se détourne de la réalité pour investir son énergie libidinale dans les créations de son imagination.",
          explanation: "Freud montre que l'artiste puise sa fécondité dans ses conflits psychiques intimes. Au lieu de sombrer dans la névrose, il transpose ses désirs interdits dans une matière noble, offrant au public une source collective de plaisir et de réconciliation avec ses propres pulsions.",
          category: "Psychanalyse de l'Art (Sublimation & Libido)",
          connector: "Aussi"
        },
        {
          statement: "La poésie moderne extrait la beauté sidérante de la boue et du mal pour métamorphoser la laideur du monde en splendeur verbale.",
          author: "Charles Baudelaire",
          work: "Les Fleurs du Mal",
          quote: "Tu m'as donné ta boue et j'en ai fait de l'or.",
          explanation: "Baudelaire révolutionne l'esthétique en rompant avec le beau mièvre et convenu. Le poète moderne plonge au fond de l'inconnu, du spleen urbain et de la décomposition cadavérique pour en extraire une musicalité et une grandeur tragique inédites.",
          category: "Esthétique Moderne (Alchimie Poétique & Modernité)",
          connector: "Toutefois"
        },
        {
          statement: "L'art contemporain déplace le centre de gravité de l'œuvre d'art de l'objet physique vers le concept et l'acte de provocation intellectuelle.",
          author: "Marcel Duchamp",
          work: "Écrits (Duchamp du signe)",
          quote: "Ce sont les regardeurs qui font les tableaux.",
          explanation: "Avec ses « ready-mades » (comme la Fontaine de 1917), Duchamp ruine le culte artisanal du beau académique. N'importe quel objet manufacturé peut devenir œuvre d'art si le geste de l'artiste et le regard critique du spectateur lui confèrent un sens intellectuel nouveau.",
          category: "Rupture Conceptuelle (Ready-made & Rôle du Spectateur)",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Politiques, Critiques & Décoloniales : Art Engagé & Résistance des Peuples",
      perspective: "Art engagé, Réification capitaliste & Restitution des œuvres spoliées",
      pedagogicalAdvice: "À mobiliser pour les sujets traitant de l'art comme instrument de combat politique, de libération des peuples et de mémoire collective.",
      arguments: [
        {
          statement: "L'écrivain et l'artiste engagés doivent mettre la liberté de leur création au service de la libération concrète de tous les hommes.",
          author: "Jean-Paul Sartre",
          work: "Qu'est-ce que la littérature ?",
          quote: "L'art d'écrire est lié à la liberté des hommes : on n'écrit pas pour des esclaves. L'œuvre d'art est un acte de confiance dans la liberté d'autrui.",
          explanation: "Sartre refuse l'art pour l'art, qu'il juge complice de l'injustice bourgeoise. Toute œuvre est un acte posé dans l'histoire qui éclaire les choix éthiques de son époque. L'auteur écrit pour susciter l'indignation et inciter le lecteur à transformer la société.",
          category: "Thèse sartrienne (L'Art Engagé & La Liberté)",
          connector: "De prime abord"
        },
        {
          statement: "La reproduction industrielle de masse détruit l'aura sacrée de l'œuvre d'art traditionnelle tout en lui conférant une fonction politique révolutionnaire.",
          author: "Walter Benjamin",
          work: "L'Œuvre d'art à l'époque de sa reproductibilité technique",
          quote: "À l'instant où le critère d'authenticité cesse d'être applicable à la production artistique, la fonction sociale de l'art se trouve bouleversée : au lieu de reposer sur le rituel, elle se fonde sur la politique.",
          explanation: "Benjamin analyse la disparition de « l'aura » (le sentiment d'unicité et de distance) causée par le cinéma et la photographie. Si ce déclin favorise la propagande totalitaire, il permet aussi une émancipation critique des masses populaires en démocratisant la culture visuelle.",
          category: "Critique Matérialiste (L'Aura & La Reproductibilité)",
          connector: "En outre"
        },
        {
          statement: "La poésie de la Négritude est une arme miraculeuse pour désaliéner le colonisé et crier au monde la dignité bafouée des peuples noirs.",
          author: "Aimé Césaire",
          work: "Cahier d'un retour au pays natal",
          quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir.",
          explanation: "Césaire s'approprie la langue du colonisateur pour la subvertir poétiquement par des rythmes syncopés et des métaphores telluriques. Le poème n'est pas un ornement mondain, mais le cri libérateur qui restitue aux opprimés leur fierté historique et leur force vive.",
          category: "Poétique de la Négritude & Émancipation",
          connector: "Par ailleurs"
        },
        {
          statement: "La restitution des œuvres d'art spoliées pendant la colonisation est un impératif de justice pour restaurer la mémoire vivante de l'Afrique.",
          author: "Felwine Sarr & Bénédicte Savoy",
          work: "Rapport sur la restitution du patrimoine culturel africain",
          quote: "Restituer les œuvres, c'est réamorcer une relation féconde des sociétés africaines avec leur propre créativité et leur propre imaginaire.",
          explanation: "Sarr et Savoy soulignent que les statues et masques exposés dans les musées occidentaux ne sont pas de simples bibelots exotiques, mais des réservoirs spirituels, rituels et philosophiques vitaux dont l'absence continue de blesser la conscience historique du continent.",
          category: "Patrimoine & Justice Décoloniale",
          connector: "Enfin"
        }
      ]
    }
  ]
};
