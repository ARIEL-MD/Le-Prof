import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_SCIENCE_LANGAGE_VARIANTS: Record<string, ArgumentVariant[]> = {
  "science": [
    {
      id: 0,
      label: "Perspectives Déterministes & Rationnelles : Méthode Expérimentale & Lois Universelles",
      perspective: "Démarche expérimentale, Mathématisation du réel & Réfutation des illusions",
      pedagogicalAdvice: "Le socle classique pour fonder la rigueur scientifique face à l'opinion et aux superstitions.",
      arguments: [
        {
          statement: "La méthode expérimentale ne subit pas passivement les faits mais force la nature à répondre aux hypothèses formulées par la raison.",
          author: "Claude Bernard",
          work: "Introduction à l'étude de la médecine expérimentale",
          quote: "L'expérimentateur doit douter, fuir les idées fixes et garder toujours sa liberté d'esprit.",
          explanation: "Claude Bernard formalise le triptyque de la découverte scientifique : observation attentive d'un phénomène nouveau, invention d'une hypothèse explicative rationnelle, et mise en place d'un protocole expérimental rigoureux pour la tester sans complaisance.",
          category: "Thèse Expérimentale (Observation & Hypothèse)",
          connector: "De prime abord"
        },
        {
          statement: "Le livre de la nature est écrit en langage mathématique et ne peut être compris sans la rigueur géométrique.",
          author: "Galilée",
          work: "L'Essayeur (Il Saggiatore)",
          quote: "La philosophie est écrite dans ce vaste livre constamment ouvert devant nos yeux (je veux dire l'univers)... mais il est écrit en langue mathématique.",
          explanation: "Galilée opère la rupture fondamentale de la modernité : pour comprendre le mouvement physique des corps, il faut renoncer aux qualités sensibles vagues des scolastiques (le chaud, le lourd) et traduire les phénomènes en grandeurs mesurables et équations géométriques.",
          category: "Révolution Scientifique (Mathématisation du Monde)",
          connector: "En second lieu"
        },
        {
          statement: "L'esprit scientifique se forme en détruisant les connaissances fausses et les préjugés du sens commun.",
          author: "Gaston Bachelard",
          work: "La Formation de l'esprit scientifique",
          quote: "L'opinion ne pense pas ; elle traduit des besoins en connaissances... On ne peut rien fonder sur l'opinion : il faut d'abord la détruire.",
          explanation: "Bachelard démontre que la science n'est pas le prolongement continu de la perception ordinaire mais sa négation vigilante. L'accès à la vérité objective exige de rompre avec l'expérience première trompeuse et de surmonter les obstacles épistémologiques.",
          category: "Épistémologie Critique (Rupture avec l'Opinion)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le déterminisme universel garantit que les mêmes causes produisent toujours rigoureusement les mêmes effets dans la nature.",
          author: "Pierre-Simon de Laplace",
          work: "Essai philosophique sur les probabilités",
          quote: "Une intelligence qui, pour un instant donné, connaîtrait toutes les forces dont la nature est animée... rien ne serait incertain pour elle, et l'avenir comme le passé serait présent à ses yeux.",
          explanation: "Le « démon de Laplace » illustre la foi triomphante du déterminisme classique : la nature n'obéit à aucun miracle ni au hasard aveugle mais à des lois mathématiques inviolables que l'esprit humain peut progressivement déchiffrer.",
          category: "Déterminisme Universel (Lois de la Physique)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques & Falsificationnistes : Réfutabilité & Relativité des Modèles",
      perspective: "Falsificationnisme poppérien, Crises paradigmatiques & Limites du savoir",
      pedagogicalAdvice: "À utiliser pour interroger le dogmatisme scientiste et montrer le caractère provisoire des théories.",
      arguments: [
        {
          statement: "Une théorie ne peut être qualifiée de scientifique que si elle se prête expressément à des tests susceptibles de la réfuter.",
          author: "Karl Popper",
          work: "Conjectures et Réfutations",
          quote: "Les théories ne sont jamais vérifiables empiriquement... Le critère de démarcation de la science réside dans sa falsifiabilité.",
          explanation: "Popper ruine l'illusion de l'induction naïve : accumuler des millions de cas concordants ne prouve jamais définitivement une vérité universelle. La science n'est pas une collection de dogmes immuables mais un édifice audacieux d'hypothèses provisoires toujours menacées de réfutation.",
          category: "Antithèse Épistémologique (Critère de Falsifiabilité)",
          connector: "D'un autre côté"
        },
        {
          statement: "La science n'évolue pas de manière linéaire et cumulative mais par ruptures révolutionnaires bouleversant les paradigmes établis.",
          author: "Thomas Kuhn",
          work: "La Structure des révolutions scientifiques",
          quote: "La science normale est une recherche acharnée pour faire entrer la nature dans les boîtes préformées et inflexibles que fournit le paradigme.",
          explanation: "Kuhn montre que les savants défendent obstinément leur cadre théorique jusqu'à ce que les anomalies inexplicables provoquent une crise généralisée. L'adoption d'un nouveau paradigme relève d'une conversion de la communauté scientifique plutôt que d'une démonstration neutre.",
          category: "Histoire des Idées (Paradigmes & Révolutions)",
          connector: "Cependant"
        },
        {
          statement: "La physique quantique ruine le modèle déterministe absolu en révélant les limites indépassables de la mesure objective.",
          author: "Werner Heisenberg",
          work: "Physique et Philosophie",
          quote: "Ce que nous observons, ce n'est pas la nature elle-même, mais la nature soumise à notre méthode d'investigation.",
          explanation: "Le principe d'incertitude démontre qu'on ne peut connaître simultanément avec une précision infinie la position et la vitesse d'une particule élémentaire. L'instrument de mesure perturbe l'objet observé, dissolvant le rêve d'une description neutre et omnisciente de la matière.",
          category: "Physique Quantique (Principe d'Incertitude)",
          connector: "Qui plus est"
        },
        {
          statement: "La science moderne a désenchanté le monde en expulsant le sens éthique et la finalité de l'univers physique.",
          author: "Max Weber",
          work: "Le Savant et le Politique",
          quote: "Le destin de notre époque est caractérisé par la rationalisation et l'intellectualisation, et surtout par le désenchantement du monde.",
          explanation: "Weber rappelle que si la science explique les mécanismes techniques du « comment », elle est structurellement incapable de répondre à la question essentielle du « pourquoi » et de guider les choix moraux de notre existence. La science ne produit aucun sens de la vie.",
          category: "Sociologie de la Connaissance (Le Désenchantement du Monde)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Éthiques & Pratiques : Responsabilité du Chercheur & Conscience du Progrès",
      perspective: "Science sans conscience, Bioéthique & Responsabilité de la vérité",
      pedagogicalAdvice: "Indispensable pour aborder les enjeux éthiques de la science : armes de destruction massive, manipulation génétique, etc.",
      arguments: [
        {
          statement: "Le développement du savoir scientifique sans élévation morale conduit inévitablement à la ruine de l'humanité.",
          author: "François Rabelais",
          work: "Pantagruel",
          quote: "Science sans conscience n'est que ruine de l'âme.",
          explanation: "Dès la Renaissance, Rabelais avertit que la puissance intellectuelle et l'érudition technique deviennent vénéneuses si elles ne sont pas guidées par la justice, la sagesse éthique et le respect sacré de la dignité humaine.",
          category: "Thèse Humaniste (Science & Conscience Morale)",
          connector: "En premier lieu"
        },
        {
          statement: "Le savant contemporain a la responsabilité imprescriptible d'anticiper les applications néfastes de ses découvertes.",
          author: "Albert Einstein",
          work: "Comment je vois le monde",
          quote: "La préoccupation pour l'homme lui-même et son destin doit toujours constituer l'intérêt principal de tous les efforts techniques.",
          explanation: "Épouvanté par les bombardements atomiques d'Hiroshima et de Nagasaki rendus possibles par la physique nucléaire, Einstein rappelle que les scientifiques ne peuvent se réfugier dans une neutralité académique lâche lorsque l'avenir de l'humanité est en jeu.",
          category: "Responsabilité Morale (Le Savant face à l'Histoire)",
          connector: "Dans le même sens"
        },
        {
          statement: "La biologie moléculaire contemporaine confère à l'homme le pouvoir inédit de modifier son propre génome, exigeant une vigilance éthique absolue.",
          author: "François Jacob",
          work: "La Souris, la Mouche et l'Homme",
          quote: "Ce qui est dangereux, ce n'est pas la science, mais l'usage que les hommes décident d'en faire.",
          explanation: "Le prix Nobel de médecine souligne que le bricolage génétique et le clonage ouvrent des perspectives thérapeutiques admirables mais aussi des dérives eugéniques terrifiantes. C'est à la conscience politique et démocratique de fixer les bornes éthiques de la recherche.",
          category: "Bioéthique & Génétique (Limites de la Manipulation)",
          connector: "D'autre part"
        },
        {
          statement: "La recherche scientifique est l'une des aventures spirituelles les plus désintéressées et nobles de l'espèce humaine.",
          author: "Jacques Monod",
          work: "Le Hasard et la Nécessité",
          quote: "L'éthique de la connaissance assigne comme valeur souveraine la recherche lucide de la vérité objective.",
          explanation: "Monod affirme que le postulat d'objectivité de la nature est le seul fondement authentique d'une morale d'hommes libres. En rejetant l'animisme naïf et les consolations religieuses, la science rend à l'homme l'entière responsabilité de son destin sur terre.",
          category: "Éthique de la Connaissance (L'Objectivité Lucide)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Critiques Décoloniales : Histoire Globale des Sciences & Écologie des Savoirs",
      perspective: "Épistémicide colonial, Savoirs africains & Universalité plurielle",
      pedagogicalAdvice: "À mobiliser pour déconstruire l'eurocentrisme scientifique et valoriser l'apport historique des civilisations non-occidentales.",
      arguments: [
        {
          statement: "L'Afrique pharaonique et nubienne a été la matrice fondatrice des sciences exactes dont la Grèce antique a recueilli l'héritage.",
          author: "Cheikh Anta Diop",
          work: "Antériorité des civilisations nègres : mythe ou vérité historique ?",
          quote: "La Grèce a appris les sciences exactes, la géométrie et l'astronomie dans les sanctuaires d'Égypte noire.",
          explanation: "Par des preuves linguistiques, archéologiques et textuelles rigoureuses, Diop rétablit la filiation africaine de la pensée scientifique primordiale, déconstruisant le mythe d'un « miracle grec » spontané et ex nihilo forgé par l'historiographie coloniale.",
          category: "Histoire des Sciences (Antériorité Africaine)",
          connector: "De prime abord"
        },
        {
          statement: "L'expansion coloniale s'est accompagnée d'un épistémicide massif disqualifiant les systèmes de savoir des peuples dominés.",
          author: "Boaventura de Sousa Santos",
          work: "Épistémologies du Sud",
          quote: "Il n'y a pas de justice sociale globale sans justice cognitive globale.",
          explanation: "Le sociologue dénonce l'arrogance positiviste qui a détruit les savoirs médicaux, agronomiques et écologiques des peuples autochtones en les traitant d'obscurantisme. L'avenir exige une « écologie des savoirs » valorisant le dialogue entre science moderne et sagesses vernaculaires.",
          category: "Épistémologies du Sud & Justice Cognitive",
          connector: "Par ailleurs"
        },
        {
          statement: "L'enseignement des sciences en Afrique doit rompre avec l'extraversion académique pour résoudre les défis concrets du continent.",
          author: "Paulin Hountondji",
          work: "La Rationalité, une ou plurielle ?",
          quote: "La science est universelle dans ses méthodes de validation, mais elle doit s'enraciner dans les besoins vitaux des sociétés qui la pratiquent.",
          explanation: "Hountondji refuse à la fois le relativisme naïf et la dépendance néocoloniale : la méthode scientifique est universellement partageable, mais les chercheurs africains doivent définir souverainement leurs propres priorités de recherche (santé, énergie solaire, agriculture vivrière).",
          category: "Souveraineté Scientifique & Universalisme Critique",
          connector: "Toutefois"
        },
        {
          statement: "Le dialogue fécond entre physique moderne et pensée relationnelle africaine ouvre de nouveaux horizons de compréhension du cosmos.",
          author: "Felwine Sarr",
          work: "Habiter le monde : Essai de politique relationnelle",
          quote: "Les physiques de pointe rejoignent aujourd'hui les ontologies africaines pour concevoir l'univers comme une vaste trame relationnelle.",
          explanation: "Sarr souligne que la thermodynamique des systèmes complexes et la physique quantique confirment ce que les cosmologies africaines soutenaient depuis toujours : la réalité ultime n'est pas faite de substances isolées mais d'interdépendances dynamiques universelles.",
          category: "Pensée Relationnelle & Cosmologie Contemporaine",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "langage": [
    {
      id: 0,
      label: "Perspectives Logiques & Rationalistes : Instrument de Pensée & Distinction de l'Homme",
      perspective: "Logos cartésien, Définition de l'homme comme animal parlant & Clarté du concept",
      pedagogicalAdvice: "Le cadre classique idéal pour affirmer que le langage est le vêtement fidèle et l'instrument d'émancipation de la pensée.",
      arguments: [
        {
          statement: "L'usage créateur de la parole est le critère infaillible qui distingue la conscience humaine du mécanisme aveugle de l'animal.",
          author: "René Descartes",
          work: "Discours de la méthode (Cinquième partie)",
          quote: "Il n'y a point d'hommes si hébétés et si stupides qu'ils ne soient capables d'arranger ensemble diverses paroles pour faire entendre leurs pensées.",
          explanation: "Descartes montre qu'aucun animal, même le plus perfectionné comme le perroquet qui répète des sons, n'est capable d'agencer des mots de manière novatrice pour répondre à l'imprévu d'un dialogue. Le langage atteste la présence d'une âme pensante immatérielle.",
          category: "Thèse Cartésienne (Le Langage, Signe de l'Âme)",
          connector: "De prime abord"
        },
        {
          statement: "Ce qui se conçoit bien dans l'esprit s'énonce avec clarté, prouvant l'harmonie intime entre la pensée et les mots.",
          author: "Nicolas Boileau",
          work: "L'Art poétique",
          quote: "Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.",
          explanation: "Pour le classicisme rationaliste, l'obscurité du langage n'est jamais le signe d'une profondeur géniale mais la preuve d'une pensée confuse et mal dégrossie. Travailler son expression verbale, c'est discipliner la rigueur de son entendement.",
          category: "Clarté Classique (Pensée & Énonciation)",
          connector: "En second lieu"
        },
        {
          statement: "C'est dans les mots seuls que nous pensons véritablement, de sorte que vouloir penser sans les mots est une entreprise insensée.",
          author: "G.W.F. Hegel",
          work: "Encyclopédie des sciences philosophiques (Philosophie de l'esprit)",
          quote: "C'est dans les mots que nous pensons... Vouloir penser sans les mots est une tentative insensée.",
          explanation: "Hegel réfute l'illusion d'une pensée ineffable qui serait trop sublime pour le langage. Une pensée qui ne trouve pas ses mots n'est qu'une brume informe ou une émotion muette ; ce n'est qu'en s'incarnant dans le mot que l'idée accède à l'existence objective et universelle.",
          category: "Idéalisme Hégélien (L'Incarnation du Concept dans le Verbe)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'homme est par nature un animal politique parce qu'il est le seul être doué de la parole capable de distinguer le juste de l'injuste.",
          author: "Aristote",
          work: "Les Politiques (Livre I)",
          quote: "L'homme est le seul parmi les animaux à posséder la parole (logos)... pour manifester l'avantageux et le nuisible, et par suite aussi le juste et l'injuste.",
          explanation: "Aristote distingue la voix animale (phonê), simple cri exprimant la douleur ou le plaisir physique, du discours raisonné (logos). La parole humaine permet aux citoyens de délibérer en commun sur les valeurs morales et de fonder la communauté politique démocratique.",
          category: "Anthropologie Politique (Le Logos & La Cité)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives de l'Inadéquation & Phénoménologiques : L'Ineffable & Les Limites du Sensible",
      perspective: "Limites bergsoniennes du langage, Ineffable poétique & Piège des mots",
      pedagogicalAdvice: "À mobiliser pour contester la toute-puissance du langage et montrer comment les mots trahissent la singularité de nos vécus.",
      arguments: [
        {
          statement: "Le langage commun, créé pour les besoins pratiques de la vie sociale, déforme et fige la singularité fluide de nos émotions intérieures.",
          author: "Henri Bergson",
          work: "Essai sur les données immédiates de la conscience",
          quote: "Le mot aux contours bien arrêtés, le mot brutal, qui emmagasine ce qu'il y a de stable, de commun et par conséquent d'impersonnel dans les impressions de l'humanité, écrase ou tout au moins recouvre les impressions délicates et fugitives de notre conscience individuelle.",
          explanation: "Bergson montre que les mots sont des étiquettes stéréotypées universelles. Quand je dis « j'ai peur » ou « j'aime », j'utilise le même vocable que des millions d'hommes, alors que mon émotion vécue est une nuance unique et ineffable que le langage trahit nécessairement.",
          category: "Antithèse Phénoménologique (Le Mot Écrase la Nuance Intérieure)",
          connector: "D'un autre côté"
        },
        {
          statement: "Les limites de mon langage signifient les limites de mon propre monde intelligible.",
          author: "Ludwig Wittgenstein",
          work: "Tractatus logico-philosophicus",
          quote: "Les limites de mon langage signifient les limites de mon propre monde... Ce dont on ne peut parler, il faut le taire.",
          explanation: "Wittgenstein démontre que les propositions du langage ne peuvent figurer que les faits empiriques du monde physique. Les questions métaphysiques suprêmes (le sens de la vie, Dieu, la beauté, l'éthique) échappent au filet logique du discours articulé : elles relèvent du mystique ineffable qui ne peut que se montrer.",
          category: "Philosophie Analytique (Les Limites du Dire)",
          connector: "Cependant"
        },
        {
          statement: "Les mots ne sont que des métaphores arbitraires et trompeuses qui nous éloignent de la vérité des choses.",
          author: "Friedrich Nietzsche",
          work: "Vérité et mensonge au sens extra-moral",
          quote: "Une feuille ne ressemble jamais entièrement à une autre, et le concept « feuille » n'est formé que par l'abandon arbitraire de ces différences individuelles.",
          explanation: "Nietzsche critique la prétention conceptuelle du langage. Chaque mot égalise abusivement des réalités dissemblables. En croyant décrire la réalité par des concepts fixes, les hommes ne font que se duper eux-mêmes avec leurs propres fictions linguistiques.",
          category: "Critique Généalogique (L'Arbitraire des Mots)",
          connector: "Qui plus est"
        },
        {
          statement: "La poésie pure tente de subvertir le langage utilitaire pour restituer au verbe sa puissance incantatoire originelle.",
          author: "Stéphane Mallarmé",
          work: "Divagations",
          quote: "Donner un sens plus pur aux mots de la tribu.",
          explanation: "Mallarmé refuse de réduire la poésie au bavardage quotidien ou au reportage journalistique. En orchestrant les silences, les blancs typographiques et les résonances phoniques mystérieuses, le poète transmue le langage en joyau musical autonome.",
          category: "Esthétique Poétique (La Transmutation Verbale)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Sociologiques & Politiques : Pouvoir des Mots & Violence Symbolique",
      perspective: "Actes de parole austiniens, Violence symbolique bourdieusienne & Novlangue",
      pedagogicalAdvice: "Indispensable pour examiner le langage comme instrument d'autorité, d'idéologie, de manipulation et de domination sociale.",
      arguments: [
        {
          statement: "Dire, c'est faire : le langage n'a pas seulement pour fonction de décrire le monde mais d'accomplir des actes performatifs irréversibles.",
          author: "John L. Austin",
          work: "Quand dire, c'est faire (How to do things with words)",
          quote: "L'énoncé performatif ne décrit pas un acte : son énonciation constitue l'acte lui-même.",
          explanation: "Austin révolutionne la philosophie du langage en montrant que des déclarations comme « Je vous déclare mari et femme », « Je baptise ce bateau » ou « Je vous promets » ne sont ni vraies ni fausses : elles transforment institutionnellement et juridiquement la réalité sociale par le seul fait d'être prononcées.",
          category: "Théorie des Actes de Parole (Le Performatif)",
          connector: "En premier lieu"
        },
        {
          statement: "L'efficacité de la parole ne réside pas dans sa syntaxe interne mais dans le capital d'autorité institutionnelle de celui qui la prononce.",
          author: "Pierre Bourdieu",
          work: "Ce que parler veut dire : L'économie des échanges linguistiques",
          quote: "L'autorité advient au langage du dehors... C'est le statut social du locuteur qui donne sa force magique aux mots.",
          explanation: "Bourdieu démystifie l'illusion linguistique : un ordre donné par un simple passant est sans effet, tandis que le même mot prononcé par un juge ou un ministre fait trembler. Le langage légitime est le vecteur d'une violence symbolique qui consacre les hiérarchies sociales.",
          category: "Sociologie Critique (La Violence Symbolique du Langage)",
          connector: "Dans le même sens"
        },
        {
          statement: "La falsification délibérée du vocabulaire par le pouvoir totalitaire sert à détruire la capacité même de penser librement.",
          author: "George Orwell",
          work: "1984",
          quote: "La Novlangue a pour but de rétrécir les limites de la pensée en rendant littéralement impossible tout crime de l'esprit.",
          explanation: "Orwell montre le péril terrifiant de la manipulation sémantique : en éliminant les nuances lexicales et en inversant le sens des termes (« La guerre c'est la paix », « La liberté c'est l'esclavage »), l'État prive les individus des instruments linguistiques indispensables pour concevoir la contestation politique.",
          category: "Critique Politique (Novlangue & Destruction du Sens)",
          connector: "D'autre part"
        },
        {
          statement: "L'éthique de la délibération démocratique exige une situation idéale de parole exempte de toute contrainte ou manipulation asymétrique.",
          author: "Jürgen Habermas",
          work: "Théorie de l'agir communicationnel",
          quote: "Dans l'agir communicationnel, les acteurs recherchent une entente mutuelle par la force du meilleur argument.",
          explanation: "Habermas montre que tout acte de parole sincère présuppose idéalement quatre prétentions à la validité : la compréhensibilité, la vérité des faits, la justesse morale et la sincérité du locuteur. Le dialogue rationnel est le rempart suprême contre la barbarie.",
          category: "Éthique de la Discussion (L'Agir Communicationnel)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Décoloniales & Tradition Orale : La Parole Vivante Africaine & Les Langues Maternelles",
      perspective: "Parole sacrée chez Hampâté Bâ, Glissant & Décolonisation de l'esprit par Thiong'o",
      pedagogicalAdvice: "À mobiliser pour aborder la puissance ontologique de la parole dans la tradition orale et la reconquête des langues africaines.",
      arguments: [
        {
          statement: "Dans la tradition orale africaine, la parole n'est pas un simple code informatif mais un souffle sacré doté d'une force créatrice ou destructrice réelle.",
          author: "Amadou Hampâté Bâ",
          work: "Aspects de la civilisation africaine",
          quote: "La parole est un souffle sacré qui lie l'homme au cosmos... Elle peut créer ou détruire l'harmonie du monde.",
          explanation: "Hampâté Bâ enseigne que chez les Bambaras et Peuls, la parole proférée engage l'être tout entier. L'art de la palabre sous l'arbre à palabres n'est pas un vain bavardage mais un rituel sacré de réconciliation collective où l'écoute patiente précède la parole sage.",
          category: "Tradition Orale (La Puissance Créatrice du Verbe)",
          connector: "De prime abord"
        },
        {
          statement: "L'émancipation véritable de l'Afrique passe impérativement par la décolonisation linguistique et la valorisation littéraire des langues maternelles.",
          author: "Ngugi wa Thiong'o",
          work: "Décoloniser l'esprit (Decolonising the Mind)",
          quote: "La langue est le vecteur de la culture, et la culture véhicule l'image de soi. Imposer la langue du colonisateur au détriment des langues maternelles est une aliénation spirituelle.",
          explanation: "L'écrivain kényan montre comment l'école coloniale a brisé la relation affective des enfants avec leur propre imaginaire en punissant l'usage des langues africaines. Écrire et penser dans ses langues nationales (kikuyu, swahili, baoulé, wolof) est un acte d'affranchissement fondamental.",
          category: "Pensée Décoloniale (Décolonisation de l'Esprit)",
          connector: "Aussi"
        },
        {
          statement: "Le plurilinguisme et le créole enrichissent le langage mondial en faisant dialoguer toutes les mémoires et toutes les poétiques de la Terre.",
          author: "Édouard Glissant",
          work: "Introduction à une poétique du divers",
          quote: "J'écris en présence de toutes les langues du monde.",
          explanation: "Glissant refuse le monolinguisme autoritaire et impérialiste. Le créole naît de la résistance poétique des esclaves et invente une syntaxe imprévisible. Habiter plusieurs langues protège l'esprit contre l'arrogance dogmatique de l'universel abstrait.",
          category: "Poétique du Divers & Plurilinguisme",
          connector: "Toutefois"
        },
        {
          statement: "La traduction loyale entre cultures différentes est l'hospitalité langagière suprême qui tisse la fraternité entre les peuples.",
          author: "Paul Ricœur",
          work: "Sur la traduction",
          quote: "L'hospitalité langagière consiste à loger la parole de l'étranger dans sa propre langue.",
          explanation: "Ricœur surmonte le fantasme d'une langue universelle parfaite : la diversité des langues est une chance féconde. Traduire exige le renoncement au repli ethnocentrique pour accueillir fidèlement la pensée d'autrui dans sa propre demeure verbale.",
          category: "Éthique de la Traduction (L'Hospitalité Langagière)",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "philosophie": [
    {
      id: 0,
      label: "Perspectives Socratiques & Fondatrices : Étonnement, Examen de Soi & Amour de la Sagesse",
      perspective: "Maïeutique socratique, Étonnement aristotélicien & Quête du souverain bien",
      pedagogicalAdvice: "Le cadre originel pour poser la philosophie comme éveil critique, rupture avec les fausses certitudes et recherche de la vie bonne.",
      arguments: [
        {
          statement: "La philosophie commence par l'étonnement qui arrache l'esprit à l'indifférence et suscite le désir insatiable de savoir.",
          author: "Aristote",
          work: "Métaphysique (Livre A)",
          quote: "C'est l'étonnement qui poussa les premiers hommes à philosopher, comme il les y pousse encore aujourd'hui.",
          explanation: "Aristote montre que le philosophe ne prend rien pour allant de soi. Devant le mystère de l'univers et les énigmes de l'existence, il prend conscience de son ignorance et se met en quête des causes premières et des principes rationnels désintéressés.",
          category: "Thèse Fondatrice (L'Étonnement Philosophiquement Fécond)",
          connector: "De prime abord"
        },
        {
          statement: "Une vie sans examen critique ne vaut pas la peine d'être vécue par un être doué de raison.",
          author: "Platon",
          work: "Apologie de Socrate",
          quote: "Une vie sans examen ne vaut pas d'être vécue (Ho de anexetastos bios ou biôtos anthrôpôi).",
          explanation: "Socrate préfère boire la ciguë plutôt que de renoncer à interpeller ses concitoyens sur l'Agora. La philosophie n'est pas un savoir livresque abstrait mais une hygiène de vie quotidienne qui démasque les faux savoirs prétentieux pour éveiller les âmes à la vertu.",
          category: "L'Examen Socratique (La Maïeutique & Le Savoir de son Ignorance)",
          connector: "En second lieu"
        },
        {
          statement: "La philosophie est comme un arbre majestueux dont les racines sont la métaphysique, le tronc la physique et les branches la morale la plus haute.",
          author: "René Descartes",
          work: "Les Principes de la philosophie (Lettre-préface)",
          quote: "C'est proprement avoir les yeux fermés, sans tâcher jamais de les ouvrir, que de vivre sans philosopher.",
          explanation: "Descartes affirme que la philosophie est l'étude de la sagesse universelle pour la conduite de la vie, la conservation de la santé et l'invention des techniques. Un peuple est d'autant plus civilisé qu'il cultive avec soin la libre pensée rationnelle.",
          category: "L'Arbre de la Sagesse Cartésienne",
          connector: "Par ailleurs"
        },
        {
          statement: "Philosopher, c'est apprendre à mourir en délivrant l'âme des servitudes angoissantes du corps et de la peur de la fin.",
          author: "Michel de Montaigne",
          work: "Essais (Livre I)",
          quote: "Philosopher, c'est apprendre à mourir.",
          explanation: "Reprenant la maxime antique de Cicéron et de Platon, Montaigne montre que la réflexion philosophique domestique l'angoisse de la mort en nous apprenant à la regarder en face avec familiarité et sérénité. La lucidité devant notre finitude est la clé de la vraie liberté de vivre.",
          category: "Sagesse Humaniste (Apprendre à Mourir pour Savoir Vivre)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives de la Critique & du Soupçon : Inutilité Prétendue, Idéologie & Servitude",
      perspective: "Calliclès et l'homme d'action, Critique matérialiste marxiste & Chien de garde nizanien",
      pedagogicalAdvice: "À utiliser pour affronter les objections courantes : la philosophie est-elle un bavardage oiseux ? Sert-elle à justifier l'ordre établi ?",
      arguments: [
        {
          statement: "Pour l'homme d'action et le pragmatique, la philosophie prolongée au-delà de la jeunesse rend l'homme maladroit et impuissant dans la vie politique réelle.",
          author: "Platon",
          work: "Gorgias (Discours de Calliclès)",
          quote: "La philosophie est une chose charmante lorsqu'on s'y adonne modérément dans la jeunesse... mais si on y passe plus de temps qu'il ne faut, c'est la ruine d'un homme.",
          explanation: "Calliclès incarne le mépris du sens commun et des ambitieux face aux spéculations abstraites. En restant cloîtré dans un coin à chuchoter avec de jeunes disciples, le philosophe ignore les lois de la cité, ne sait pas se défendre devant les tribunaux et passe pour un être ridicule.",
          category: "Objection Réaliste (L'Inutilité selon Calliclès)",
          connector: "D'un autre côté"
        },
        {
          statement: "Les philosophes se sont bornés à interpréter diversement le monde, alors qu'il s'agit désormais de le transformer par la praxis révolutionnaire.",
          author: "Karl Marx",
          work: "Thèses sur Feuerbach (Onzième thèse)",
          quote: "Les philosophes n'ont fait qu'interpréter le monde de différentes manières ; ce qui importe, c'est de le transformer.",
          explanation: "Marx reproche à la philosophie idéaliste (notamment hégélienne) de contempler le réel comme une construction d'idées pures en ignorant les rapports de production matériels et la lutte des classes. La véritable vérité d'une pensée se prouve dans son action concrète d'émancipation.",
          category: "Critique Révolutionnaire (De l'Interprétation à la Transformation)",
          connector: "Cependant"
        },
        {
          statement: "La philosophie universitaire académique fonctionne souvent comme un appareil idéologique justifiant l'ordre bourgeois établi.",
          author: "Paul Nizan",
          work: "Les Chiens de garde",
          quote: "Pendant que les hommes meurent dans les usines et dans les tranchées, les philosophes officiels enseignent une morale abstraite coupée des souffrances réelles du siècle.",
          explanation: "Nizan fustige les penseurs idéalistes qui détournent la jeunesse des luttes sociales en prêchant le culte des vérités éternelles inoffensives. Une philosophie qui n'inquiète pas les puissants n'est qu'un chien de garde de la domination de classe.",
          category: "Dénonciation Idéologique (Les Chiens de Garde)",
          connector: "Qui plus est"
        },
        {
          statement: "La philosophie ne produit aucun résultat scientifique vérifiable et ses adeptes se contredisent interminablement depuis des millénaires.",
          author: "Claude Bernard",
          work: "Introduction à l'étude de la médecine expérimentale",
          quote: "La philosophie ne donne rien ; elle s'enferme dans des systèmes a priori qui empêchent l'observation libre de la nature.",
          explanation: "Du point de vue du positivisme scientifique triomphant, la spéculation philosophique apparaît stérile comparée à la médecine et à la physique qui découvrent des lois objectives et transforment concrètement les conditions matérielles d'existence de l'humanité.",
          category: "Objection Scientiste (Stérilité des Systèmes Métaphysiques)",
          connector: "Pour clore cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives de la Lucidité Critique & de la Désaliénation : Penser par Soi-même",
      perspective: "Sapere aude kantien, Marteau nietzschéen & Vigilance alainienne",
      pedagogicalAdvice: "Indispensable pour affirmer que la philosophie est l'arme maîtresse de la liberté de l'esprit contre la soumission aux dogmes.",
      arguments: [
        {
          statement: "Les Lumières et la philosophie sont la sortie de l'homme hors de l'état de tutelle dont il est lui-même responsable.",
          author: "Emmanuel Kant",
          work: "Qu'est-ce que les Lumières ?",
          quote: "Sapere aude ! Aie le courage de te servir de ton propre entendement ! Telle est la devise des Lumières.",
          explanation: "Kant démontre que la paresse intellectuelle et la lâcheté poussent les hommes à se laisser diriger aveuglément par des tuteurs (livres, prêtres, gouvernants). Philosopher, c'est conquérir son autonomie spirituelle en osant penser par soi-même sans tutelle extérieure.",
          category: "Thèse des Lumières (Le Sapere Aude Kantien)",
          connector: "En premier lieu"
        },
        {
          statement: "La philosophie a pour fonction souveraine de nuire à la bêtise et de démasquer les idoles vénérées par les foules.",
          author: "Gilles Deleuze",
          work: "Nietzsche et la Philosophie",
          quote: "La philosophie ne sert ni à l'État ni à la religion... Elle sert à nuire à la bêtise, elle fait de la bêtise quelque chose de honteux.",
          explanation: "Reprenant Nietzsche, Deleuze affirme la puissance subversive de la philosophie au marteau. Elle ne cherche pas à consoler les cœurs craintifs mais traque sans pitié les mensonges confortables, le ressentiment et les servitudes volontaires qui empoisonnent la culture.",
          category: "Pensée Critique au Marteau (Nuire à la Bêtise)",
          connector: "Dans le même sens"
        },
        {
          statement: "Penser, c'est dire non : la philosophie est le refus vigilant d'adhérer passivement aux opinions toutes faites et au pouvoir établi.",
          author: "Alain (Émile Chartier)",
          work: "Propos sur les pouvoirs",
          quote: "Penser, c'est dire non. Remarquez que le signe du oui est d'un homme qui s'endort ; au contraire, le réveil secoue la tête et dit non.",
          explanation: "Alain montre que l'intelligence commence par le doute et la résistance civique. L'obéissance aux autorités doit être stricte dans l'action pour éviter le désordre, mais le jugement intérieur du citoyen philosophe doit rester souverain et incorruptible.",
          category: "Vigilance Citoyenne (Penser, c'est Dire Non)",
          connector: "D'autre part"
        },
        {
          statement: "La philosophie n'est pas un système de doctrines figées mais une activité vivante d'élucidation logique de nos pensées.",
          author: "Ludwig Wittgenstein",
          work: "Tractatus logico-philosophicus",
          quote: "La philosophie n'est pas une théorie, mais une activité... Le résultat de la philosophie n'est pas un nombre de « propositions philosophiques », mais le fait que des propositions s'éclaircissent.",
          explanation: "Wittgenstein dégonfle la baudruche des faux mystères métaphysiques : la tâche du philosophe est thérapeutique. Elle consiste à nettoyer le langage des confusions grammaticales qui font naître d'inutiles angoisses intellectuelles chez les hommes.",
          category: "Activité d'Élucidation Logique (Thérapie du Langage)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Africaines & Décoloniales : Désaliénation Épistémique & Renaissance",
      perspective: "Critique de l'ethnophilosophie par Hountondji & Towa, Pensée de la renaissance africaine",
      pedagogicalAdvice: "Indispensable pour traiter la philosophie en Afrique : dépasser le mythe d'une pensée collective unanime pour fonder le débat rationnel critique.",
      arguments: [
        {
          statement: "La philosophie en Afrique doit briser le piège de l'ethnophilosophie qui figeait la pensée dans des croyances coutumières anonymes et sans débat critique.",
          author: "Paulin Hountondji",
          work: "Sur la « philosophie africaine »",
          quote: "La philosophie n'existe sous aucune latitude comme un système de croyances partagées inconsciemment par tous les membres d'une communauté : elle est une littérature critique et individuelle.",
          explanation: "Hountondji mène un combat fondateur : assimiler la philosophie africaine aux proverbes traditionnels ou aux mythes ancestraux relève d'un racisme épistémologique condescendant. La véritable philosophie africaine est un débat théorique rigoureux, écrit et contradictoire entre penseurs libres.",
          category: "Thèse Épistémologique (Critique Radicale de l'Ethnophilosophie)",
          connector: "De prime abord"
        },
        {
          statement: "Pour s'affranchir de la domination occidentale, la pensée africaine doit assimiler le secret de la rationalité critique moderne pour révolutionner ses sociétés.",
          author: "Marcien Towa",
          work: "Essai sur la problématique philosophique dans l'Afrique actuelle",
          quote: "Notre devoir n'est pas de contempler avec dévotion notre passé précolonial, mais de nous approprier les armes conceptuelles de la modernité pour transformer notre destin.",
          explanation: "Towa affirme que l'urgence historique n'est pas le repli identitaire passéiste mais la pratique courageuse de la critique sans concession : interroger sans tabou nos coutumes anachroniques comme les idéologies impérialistes pour promouvoir le progrès scientifique et démocratique.",
          category: "Critique Révolutionnaire Africaine (L'Audace de Penser)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'oralité philosophique traditionnelle africaine recelait d'authentiques sages critiques capables de disputer rationnellement sur le cosmos et l'éthique.",
          author: "Henry Odera Oruka",
          work: "Sage Philosophy : Indigenous Thinkers and Modern Debate on African Philosophy",
          quote: "La philosophie des sages (Sage philosophy) prouve l'existence d'individus libres au sein des sociétés traditionnelles capables d'évaluer les coutumes avec une lucidité philosophique remarquable.",
          explanation: "Le philosophe kényan répond à Hountondji en prouvant, enquêtes orales à l'appui, que les villages africains comptaient de véritables philosophes populaires qui ne répétaient pas aveuglément les mythes mais les critiquaient avec une profonde sagacité conceptuelle.",
          category: "Sage Philosophy (La Sagacité Critique Traditionnelle)",
          connector: "Toutefois"
        },
        {
          statement: "La philosophie du XXIe siècle doit s'ouvrir à l'universel latéral où chaque civilisation apporte sa pierre à la dignité de l'humanité.",
          author: "Souleymane Bachir Diagne",
          work: "En quête d'Afrique(s) : Universalisme et pensée décoloniale",
          quote: "L'universel ne doit plus être le surplomb conquérant d'une seule culture sur les autres, mais un carrefour de traductions et de résonances mutuelles.",
          explanation: "Diagne récuse à la fois l'impérialisme universaliste occidental et le repli identitaire tribal. La philosophie authentique est ce mouvement de tissage patient où la pensée de Léopold Senghor, d'Ibn Rushd (Averroès), de Bergson et de Kant se rencontrent pour éclairer la condition humaine.",
          category: "Universel Latéral & Hospitalité Philosophique",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
