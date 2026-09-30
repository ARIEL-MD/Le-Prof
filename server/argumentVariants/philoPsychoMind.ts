import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_PSYCHO_MIND_VARIANTS: Record<string, ArgumentVariant[]> = {
  "inconscient": [
    {
      id: 0,
      label: "Perspectives Psychanalytiques : Découverte de l'Inconscient & Rupture du Cogito",
      perspective: "Première et seconde topiques freudiennes, Pulsions refoulées & Blessure narcissique",
      pedagogicalAdvice: "Le grand socle freudien pour démontrer que la conscience n'est que la surface émergée de l'iceberg psychique.",
      arguments: [
        {
          statement: "L'hypothèse de l'inconscient psychique est scientifiquement nécessaire et légitime pour expliquer les actes manqués, les rêves et les symptômes névrotiques.",
          author: "Sigmund Freud",
          work: "Métapsychologie (L'Inconscient)",
          quote: "L'inconscient est une nécessité et une légitimité... Les données de la conscience sont au plus haut point lacunaires.",
          explanation: "Freud montre que la conscience ne peut expliquer pourquoi nous oublions subitement un nom familier, commettons un lapsus révélateur ou souffrons de phobies irrationnelles. Admettre l'existence de représentations actives mais refoulées donne une cohérence causale rigoureuse à notre vie mentale.",
          category: "Thèse Psychanalytique (Nécessité de l'Inconscient)",
          connector: "De prime abord"
        },
        {
          statement: "La psychanalyse inflige à la vanité humaine sa troisième et plus cuisante blessure narcissique après Copernic et Darwin.",
          author: "Sigmund Freud",
          work: "Une difficulté de la psychanalyse",
          quote: "Le moi n'est pas maître dans sa propre maison.",
          explanation: "Freud rappelle que Copernic a arraché la Terre du centre du monde, Darwin a ôté à l'homme son statut divin pour en faire le descendant d'animaux, et la psychanalyse prouve que le Moi conscient est tiraillé entre les pulsions inconscientes du Ça et les interdits sévères du Surmoi.",
          category: "Blessure Narcissique (Le Moi Détrôné)",
          connector: "En second lieu"
        },
        {
          statement: "Le rêve est la voie royale qui mène à la connaissance des désirs inconscients refoulés de l'esprit.",
          author: "Sigmund Freud",
          work: "L'Interprétation du rêve (Die Traumdeutung)",
          quote: "Le rêve est l'accomplissement déguisé d'un désir refoulé.",
          explanation: "Pendant le sommeil, la censure morale s'assoupit partiellement. Les désirs interdits se travestissent par le travail du rêve (condensation, déplacement) pour franchir le seuil sans réveiller le dormeur sous forme de contenu manifeste symbolique qu'il appartient à l'analyste de décoder.",
          category: "Interprétation Onirique (Accomplissement de Désir)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'inconscient est structuré comme un langage à travers la métaphore et la métonymie du désir.",
          author: "Jacques Lacan",
          work: "Écrits",
          quote: "L'inconscient est structuré comme un langage.",
          explanation: "Lacan relit Freud à la lumière de la linguistique structurale de Saussure. Les symptômes et les lapsus ne sont pas de simples désordres biologiques mais des signifiants qui s'enchaînent selon les lois de la parole pour dire la vérité intime du sujet.",
          category: "Psychanalyse Lacanienne (Le Signifiant & Le Sujet)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques & Rationalistes : Le Refus Moral de l'Inconscient & La Mauvaise Foi",
      perspective: "Critique sartrienne de la mauvaise foi, Alain et l'imagination corporelle & Responsabilité",
      pedagogicalAdvice: "À mobiliser pour contester la thèse freudienne au nom de la liberté, de la lucidité et de la responsabilité morale.",
      arguments: [
        {
          statement: "Invoquer un inconscient tout-puissant est une manœuvre de mauvaise foi pour fuir l'angoisse de notre totale liberté et de notre responsabilité.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant",
          quote: "L'inconscient n'est que le paravent de la mauvaise foi... L'homme est condamné à être libre.",
          explanation: "Sartre dénonce la théorie du refoulement freudien : pour qu'une censure morale inconsciente puisse refouler une pulsion inacceptable, il faut bien qu'elle en ait conscience pour la reconnaître ! La prétendue fatalité inconsciente n'est qu'un mensonge commode que l'on se fait à soi-même.",
          category: "Critique Sartrienne (La Mauvaise Foi)",
          connector: "D'un autre côté"
        },
        {
          statement: "L'inconscient n'est pas un autre moi pensant tapi dans l'ombre mais simplement le mécanisme aveugle de notre corps physiologique.",
          author: "Alain (Émile Chartier)",
          work: "Éléments de philosophie",
          quote: "L'inconscient est une fiction... Il n'y a point d'inconvénient à employer le mot, pourvu qu'on entende par là le corps.",
          explanation: "Alain combat la mythologie d'un double intérieur démoniaque qui nous gouvernerait en sous-main. Les battements du cœur, la digestion ou les mouvements réflexes sont certes inconscients, mais dès qu'il y a pensée ou sentiment, il y a conscience responsable. Créer un inconscient psychique détruit la morale.",
          category: "Critique Rationaliste (Le Corps comme Seul Inconscient)",
          connector: "Cependant"
        },
        {
          statement: "La certitude du Cogito prouve que toute pensée véritable implique la conscience immédiate d'elle-même.",
          author: "René Descartes",
          work: "Réponses aux quatrièmes objections",
          quote: "Par le mot de pensée, j'entends tout ce qui se fait en nous de telle sorte que nous en soyons conscients immédiatement.",
          explanation: "Pour le rationalisme cartésien classique, l'expression « pensée inconsciente » est une contradiction pure dans les termes. Une idée qui ne serait pas perçue par l'esprit n'existe tout simplement pas pour le sujet pensant.",
          category: "Rationalisme Classique (L'Identité de la Pensée et de la Conscience)",
          connector: "Qui plus est"
        },
        {
          statement: "La cure psychanalytique a elle-même pour but ultime d'étendre l'empire de la conscience lucide sur les pulsions obscures.",
          author: "Sigmund Freud",
          work: "Nouvelles conférences d'introduction à la psychanalyse",
          quote: "Là où était le Ça, le Moi doit advenir (Wo Es war, soll Ich werden).",
          explanation: "Freud lui-même n'est pas un apôtre de l'irrationalisme : la psychanalyse ne cherche pas à soumettre l'homme à ses pulsions mais au contraire à éclairer les zones d'ombre pour que le Moi conscient gagne en liberté et en autonomie morale face à ses conflits internes.",
          category: "Émancipation Thérapeutique (L'Avènement du Moi)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Inconscientes Collectives & Symboliques : Archétypes & Mythes",
      perspective: "Inconscient collectif jungien, Mythes universels & Symbolisme spirituel",
      pedagogicalAdvice: "À utiliser pour élargir la notion d'inconscient au-delà du seul refoulement individuel de l'enfance.",
      arguments: [
        {
          statement: "Sous l'inconscient personnel gît un inconscient collectif universel peuplé d'archétypes ancestraux communs à toute l'humanité.",
          author: "Carl Gustav Jung",
          work: "Les Racines de la conscience",
          quote: "L'inconscient collectif est le sédiment de l'expérience humaine accumulée depuis les origines les plus lointaines.",
          explanation: "Jung découvre que des malades mentaux ou des enfants dessinent spontanément des symboles mythologiques (l'Anima, l'Ombre, le Mandala) identiques à ceux des civilisations antiques dont ils ignoraient tout. L'âme humaine hérite d'une structure symbolique transpersonnelle féconde.",
          category: "Psychologie Analytique (L'Inconscient Collectif & Les Archétypes)",
          connector: "En premier lieu"
        },
        {
          statement: "Les structures inconscientes de la parenté et du langage régissent secrètement l'organisation des sociétés humaines.",
          author: "Claude Lévi-Strauss",
          work: "Anthropologie structurale",
          quote: "L'inconscient cesse d'être le refuge des particularités individuelles pour devenir le dépositaire des lois structurales de l'esprit.",
          explanation: "L'anthropologue structuraliste montre que les règles du mariage ou les mythes ne sont pas inventés consciemment par les chefs de tribus : ils sont l'application inconsciente d'une logique combinatoire universelle de l'esprit humain fondée sur la réciprocité de l'échange.",
          category: "Structuralisme Anthropologique (Les Lois Inconscientes de l'Esprit)",
          connector: "Dans le même sens"
        },
        {
          statement: "L'oubli inconscient peut être une force active salvatrice indispensable pour préserver la paix de l'esprit et la capacité d'agir.",
          author: "Friedrich Nietzsche",
          work: "Généalogie de la morale (Deuxième dissertation)",
          quote: "L'oubli n'est pas une simple inertie, mais un pouvoir d'inhibition actif, une gardienne vigilante de l'ordre psychique.",
          explanation: "Nietzsche montre que sans la faculté d'oublier activement les offenses et les blessures passées, l'homme serait incapable de joie, de confiance et d'espérance dans l'avenir. L'inconscient agit ici comme un filtre biologique protecteur.",
          category: "Vitalisme Nietzschéen (L'Oubli Actif Réparateur)",
          connector: "D'autre part"
        },
        {
          statement: "Le sentiment de culpabilité inconsciente engendré par la civilisation constitue le plus grand obstacle au bonheur individuel.",
          author: "Sigmund Freud",
          work: "Le Malaise dans la culture",
          quote: "Le prix payé pour le progrès de la culture réside dans la perte de bonheur par élévation du sentiment de culpabilité.",
          explanation: "Freud démontre que l'inconscient abrite un juge cruel, le Surmoi, qui punit le Moi pour des fautes simplement imaginées ou désirées. Dévoiler cette culpabilité inconsciente est indispensable pour soulager la souffrance humaine.",
          category: "Le Surmoi & L'Analyse du Malaise",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Africaines & Thérapeutiques : La Transe, Les Génies & La Guérison Communautaire",
      perspective: "N'döp lébou, Possession rituelle & Guérison holistique chez Sow et Fanon",
      pedagogicalAdvice: "Indispensable pour aborder les approches non-occidentales de l'inconscient où le trouble psychique est réintégré dans le collectif.",
      arguments: [
        {
          statement: "Dans les médecines traditionnelles africaines, le trouble psychique n'est pas un dysfonctionnement cérébral isolé mais une rupture de l'harmonie avec le cosmos et la communauté.",
          author: "Ibrahima Sow",
          work: "Psychiatrie dynamique africaine",
          quote: "Le fou n'est pas un malade biologique que l'on isole : c'est le signe vivant d'une crise de la relation sociale et ancestrale.",
          explanation: "Sow montre que les rituels de guérison (comme le N'döp au Sénégal ou le culte des orishas) convoquent le village entier. En nommant les esprits ou les ancêtres offensés, la communauté prend en charge collectivement l'angoisse du patient pour réconcilier son âme avec le groupe.",
          category: "Psychiatrie Africaine (La Thérapie Communautaire)",
          connector: "De prime abord"
        },
        {
          statement: "La colonisation produit des névroses collectives et des traumatismes inconscients profonds chez les peuples dominés.",
          author: "Frantz Fanon",
          work: "Peau noire, masques blancs",
          quote: "Il y a une aliénation psychologique du colonisé qui tente inconsciemment de blanchir son âme pour mériter le statut d'être humain.",
          explanation: "Psychiatre à l'hôpital de Blida-Joinville, Fanon montre que les troubles mentaux des colonisés ne sont pas des pathologies individuelles isolées mais le résultat direct de la violence raciale institutionnelle qui instille un sentiment d'infériorité viscéral dans l'inconscient des opprimés.",
          category: "Sociogénèse du Trouble Psychique Décolonial",
          connector: "Aussi"
        },
        {
          statement: "La possession rituelle et la transe sont des dispositifs culturels cathartiques permettant d'exprimer les tensions inconscientes interdites dans la vie profane.",
          author: "Gilbert Rouget",
          work: "La Musique et la Transe",
          quote: "La transe rituelle, loin d'être une crise de folie aveugle, est une mise en scène hautement codée où l'indicible trouve enfin un langage musical et corporel.",
          explanation: "Rouget démontre que la musique rythmée et la danse des initiés permettent à des individus accablés par des pulsions ou des frustrations sociales de les incarner sous le masque d'un esprit, réhabilitant la santé mentale par la grâce du rite sacré.",
          category: "Ethnomusicologie (La Transe comme Catharsis Sociale)",
          connector: "Toutefois"
        },
        {
          statement: "La psychanalyse contemporaine doit s'ouvrir aux épistémologies africaines pour soigner le sujet dans sa pluralité culturelle.",
          author: "Achille Mbembe",
          work: "Critique de la raison nègre",
          quote: "Guérir le sujet postcolonial exige de libérer l'inconscient des spectres de la race et du mépris séculaire.",
          explanation: "Mbembe montre que la reconstruction psychique de l'homme noir passe par la réappropriation poétique de son histoire et l'invention d'un universalisme généreux dégagé de la haine et du ressentiment.",
          category: "Désaliénation Postcoloniale & Restauration de l'Estime de Soi",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "desir": [
    {
      id: 0,
      label: "Perspectives du Manque & de l'Illusion : Le Tonneau des Danaïdes & La Souffrance",
      perspective: "Manque platonicien, Tonneau percé de Calliclès & Douleur schopenhauerienne",
      pedagogicalAdvice: "Le grand axe classique pour poser que le désir est souffrance et privation insatiable.",
      arguments: [
        {
          statement: "Le désir est par essence l'épreuve douloureuse d'un manque qui disparaît aussitôt qu'il est comblé.",
          author: "Platon",
          work: "Le Banquet (Discours de Socrate)",
          quote: "Ce qu'on n'a pas, ce qu'on n'est pas, ce dont on manque, voilà les objets du désir et de l'amour.",
          explanation: "Dans le mythe de la naissance d'Éros (fils de Poros, l'expédient, et de Pénia, la pauvreté), Platon démontre que nul ne désire ce qu'il possède déjà. Le désir prouve l'imperfection humaine : il est une tension inquiète vers un objet extérieur qui nous manque cruellement.",
          category: "Thèse Platonicienne (Le Désir comme Manque Ontologique)",
          connector: "De prime abord"
        },
        {
          statement: "Vouloir assouvir tous ses désirs sans frein condamne l'homme au supplice sans fin du tonneau percé des Danaïdes.",
          author: "Platon",
          work: "Gorgias (Dialogue avec Calliclès)",
          quote: "La partie de l'âme où sont les passions est comme un tonneau percé, et ceux qui sont insatiables sont les plus malheureux.",
          explanation: "Contre Calliclès qui vante la jouissance sans limites des appétits, Socrate compare l'homme intempérant à un malheureux qui s'épuise à verser de l'eau dans un vase fuyant. Plus on satisfait le désir effréné, plus sa soif se creuse, détruisant toute paix intérieure.",
          category: "Allégorie du Tonneau Percé (L'Insatiabilité du Désir)",
          connector: "En second lieu"
        },
        {
          statement: "La souffrance est le fondement positif de tout désir, tandis que la satisfaction n'est qu'un court soulagement négatif.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "Tout désir naît d'un manque, d'un état qui ne nous satisfait pas ; il est donc souffrance tant qu'il n'est pas satisfait.",
          explanation: "Schopenhauer explique que la satisfaction d'un souhait n'engendre qu'un instant de repos éphémère avant de laisser la place à l'ennui accablant ou à un nouveau besoin douloureux. Le vouloir-vivre est une force aveugle et tragique qui broie les individus.",
          category: "Pessimisme Métaphysique (La Volonté Aveugle)",
          connector: "Par ailleurs"
        },
        {
          statement: "La modération calculée des désirs par la raison est la seule voie royale vers la sérénité du corps et de l'esprit.",
          author: "Épicure",
          work: "Lettre à Ménécée",
          quote: "Parmi les désirs, les uns sont naturels et nécessaires, les autres naturels et non nécessaires, d'autres enfin ne sont ni naturels ni nécessaires.",
          explanation: "Épicure montre que pour être heureux, il ne faut pas fuir le plaisir mais apprendre à trier ses désirs. En éliminant les désirs vains nés de l'opinion trompeuse (la gloire, la richesse, le pouvoir), le sage se contente du pain et de l'eau et goûte au bonheur inaltérable des dieux.",
          category: "Typologie Épicurienne (L'Ataraxie & La Frugalité)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Vitalistes & Affirmative : Le Conatus & La Puissance d'Exister",
      perspective: "Conatus spinoziste, Volonté de puissance nietzschéenne & Désir créateur",
      pedagogicalAdvice: "Indispensable pour renverser la conception négative du manque et montrer que le désir est puissance joyeuse d'affirmation.",
      arguments: [
        {
          statement: "Le désir n'est pas la marque d'une privation mais l'essence même de l'homme s'efforçant d'accroître sa puissance d'exister.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre III)",
          quote: "Le désir est l'essence même de l'homme, en tant qu'elle est conçue comme déterminée à faire quelque chose par une quelconque affection d'elle-même.",
          explanation: "Spinoza opère une révolution copernicienne : nous ne désirons pas une chose parce qu'elle est bonne, c'est au contraire parce que nous la désirons et la convoitons que nous la jugeons bonne. Le conatus est cette force vitale affirmative qui cherche sans cesse la joie et la plénitude d'agir.",
          category: "Thèse Spinoziste (Le Désir comme Puissance & Conatus)",
          connector: "D'un autre côté"
        },
        {
          statement: "La grande passion et le désir audacieux sont les moteurs indispensables de toutes les grandes réalisations de l'histoire humaine.",
          author: "G.W.F. Hegel",
          work: "La Raison dans l'histoire",
          quote: "Rien de grand ne s'est accompli dans le monde sans passion.",
          explanation: "Hegel réhabilite la passion contre les moralistes chagrins qui prêchent l'apathie : sans l'énergie dévorante de l'amour, de l'ambition, du dévouement et du désir de justice, l'humanité n'aurait jamais bâti de monuments, fondé de démocraties ni vaincu les tyrannies.",
          category: "Philosophie de l'Histoire (La Fécondité de la Passion)",
          connector: "Cependant"
        },
        {
          statement: "Le désir de puissance est l'instinct vital créateur qui pousse les êtres à se dépasser perpétuellement eux-mêmes.",
          author: "Friedrich Nietzsche",
          work: "Ainsi parlait Zarathoustra",
          quote: "Vouloir libère : telle est la véritable doctrine de la volonté et de la liberté.",
          explanation: "Nietzsche rejette la morale ascétique qui mutile les pulsions corporelles par crainte du péché. Le désir n'est pas une faiblesse honteuse mais l'élan même de la vie montante qui sculpte sa propre destinée avec fougue et magnificence.",
          category: "Vitalisme Nietzschéen (La Volonté de Puissance Créatrice)",
          connector: "Qui plus est"
        },
        {
          statement: "Le désir est une machine productrice et révolutionnaire qui connecte l'individu aux flux vivants de l'univers.",
          author: "Gilles Deleuze & Félix Guattari",
          work: "L'Anti-Œdipe : Capitalisme et Schizophrénie",
          quote: "Le désir ne manque de rien ; il ne manque pas de son objet. Le désir est production, production d'immanence et de réalité.",
          explanation: "Deleuze et Guattari récusent à la fois le manque platonicien et la culpabilisation psychanalytique œdipienne : désirer, c'est construire des mondes, inventer de nouvelles manières d'aimer, de penser et d'habiter la Terre en brisant les carcans institutionnels.",
          category: "Pensée Contemporaine (Le Désir Producteur)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Mimétiques & Sociales : La Convoitise d'Autrui & La Possession",
      perspective: "Désir mimétique girardien, Amour-propre rousseauiste & Consommation aliénante",
      pedagogicalAdvice: "À mobiliser pour analyser la dimension sociale, rivalitaire et marchande du désir contemporain.",
      arguments: [
        {
          statement: "L'homme ne désire pas les objets par lui-même mais imite toujours le désir d'un modèle admiré ou rival.",
          author: "René Girard",
          work: "Mensonge romantique et vérité romanesque",
          quote: "L'homme désire toujours selon le désir de l'Autre.",
          explanation: "Girard révèle le caractère triangulaire du désir mimétique (Sujet ➔ Modèle ➔ Objet). Deux personnes ne convoitent pas une montre ou une personne pour ses qualités propres, mais parce que l'autre la valorise, ce qui engendre inévitablement la rivalité envieuse et la violence sociale.",
          category: "Théorie du Désir Mimétique (Le Piège de la Rivalité)",
          connector: "En premier lieu"
        },
        {
          statement: "La société marchande moderne transforme les désirs superflus en faux besoins impérieux générant une anxiété permanente.",
          author: "Jean-Jacques Rousseau",
          work: "Discours sur l'inégalité",
          quote: "Ces commodités ayant par l'habitude perdu presque tout leur agrément, et étant en même temps dégénérées en de vrais besoins, la privation en devint beaucoup plus cruelle que la possession n'en était douce.",
          explanation: "Rousseau dénonce l'amour-propre suscité par la civilisation : nous voulons posséder non pour satisfaire notre corps, mais pour paraître supérieur aux yeux d'autrui. La société de consommation emprisonne les individus dans une course vaine aux richesses qui ruine la liberté.",
          category: "Critique de l'Amour-Propre (La Tyrannie du Paraître)",
          connector: "Dans le même sens"
        },
        {
          statement: "La société du spectacle fétichise la marchandise et aliène le désir dans la contemplation passive d'images publicitaires.",
          author: "Guy Debord",
          work: "La Société du spectacle",
          quote: "Le spectacle est le capital à un tel degré d'accumulation qu'il devient image.",
          explanation: "Debord montre que dans le capitalisme avancé, la vie authentique (l'être) s'est d'abord dégradée en avoir, puis l'avoir s'est dégradé en simple paraître. Le désir du consommateur est entièrement manipulé par le spectacle pour perpétuer la domination de la marchandise.",
          category: "Critique de la Société du Spectacle (L'Aliénation du Désir)",
          connector: "D'autre part"
        },
        {
          statement: "Le désir authentique de l'autre est une quête de reconnaissance spirituelle qui transcende l'appétit de consommation biologique.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini",
          quote: "Le Désir métaphysique tend vers tout autre chose, vers l'absolument autre... Il ne se nourrit pas de ce qu'il désire, il en a soif sans fin.",
          explanation: "Levinas distingue le besoin physique (qui se comble par la nourriture) du Désir métaphysique de l'Infini suscité par le visage d'autrui. Ce désir noble ne cherche pas à dévorer ou posséder l'autre mais s'exprime dans la bonté, la générosité et l'amour désintéressé.",
          category: "Le Désir Métaphysique de l'Infini",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives de la Sublimation & de l'Éros Spirituel : Amour & Créativité",
      perspective: "Ascension platonicienne vers le Beau, Sublimation freudienne & Éros poétique",
      pedagogicalAdvice: "Indispensable pour aborder le désir comme force de dépassement spirituel, de création artistique et de générosité morale.",
      arguments: [
        {
          statement: "Le désir amoureux peut s'élever par degrés successifs depuis l'attirance charnelle jusqu'à la contemplation mystique du Beau en soi.",
          author: "Platon",
          work: "Le Banquet (Discours de Diotime)",
          quote: "Telle est la vraie voie de l'initiation amoureuse : partir des beautés sensibles et monter sans cesse vers cette beauté souveraine.",
          explanation: "Diotime enseigne à Socrate l'échelle de l'amour : aimer d'abord un beau corps, puis comprendre que la beauté de l'âme surpasse celle du corps, s'élever à la beauté des lois justes et des sciences, pour contempler enfin l'Idée pure et éternelle du Beau qui ne naît ni ne périt.",
          category: "L'Échelle de l'Amour Platonicien (L'Éros Spirituel)",
          connector: "De prime avant"
        },
        {
          statement: "La capacité humaine de sublimation convertit les pulsions sexuelles brutes en œuvres d'art admirables et en conquêtes scientifiques.",
          author: "Sigmund Freud",
          work: "Trois essais sur la théorie sexuelle",
          quote: "La pulsion sexuelle met des quantités d'énergie extraordinairement grandes à la disposition du travail culturel : c'est ce que nous appelons la sublimation.",
          explanation: "Freud démontre que la civilisation repose sur la plasticité de la libido : au lieu de s'épuiser dans la satisfaction corporelle immédiate, l'énergie désirante peut être orientée vers des buts socialement et intellectuellement valorisés (la peinture, la musique, la recherche philosophique).",
          category: "Psychanalyse (La Sublimation Culturelle)",
          connector: "Aussi"
        },
        {
          statement: "L'amour authentique est une alliance fraternelle où deux libertés se reconnaissent et s'encouragent mutuellement à créer.",
          author: "Simone de Beauvoir",
          work: "Le Deuxième Sexe",
          quote: "L'amour authentique devrait être fondé sur la reconnaissance réciproque de deux libertés.",
          explanation: "Beauvoir refuse l'amour aliénant où la femme s'annihile en idole passive pour le confort de l'homme. Le désir véritable est un projet partagé où chacun enrichit son existence en respectant la souveraineté et les ambitions créatrices de l'autre.",
          category: "Éthique Féministe (La Réciprocité des Libertés)",
          connector: "Toutefois"
        },
        {
          statement: "Dans la poétique de la Négritude, le désir ardent de justice transfigure la souffrance de l'oppression en cri de fraternité universelle.",
          author: "Aimé Césaire",
          work: "Cahier d'un retour au pays natal",
          quote: "Faites de mon cœur l'amant de cet unique amour... Donnez-moi la foi sauvage du sorcier pour embrasser le monde blessé.",
          explanation: "Chez Césaire, le désir poétique n'est pas un repli narcissique mais une force tellurique d'amour universel qui s'insurge contre la laideur du racisme pour réconcilier tous les peuples de la Terre dans la dignité retrouvée.",
          category: "Poétique de la Négritude (L'Éros Révolutionnaire)",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
