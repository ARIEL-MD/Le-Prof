import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_RAISON_DROIT_MORALE_VARIANTS: Record<string, ArgumentVariant[]> = {
  "raison": [
    {
      id: 0,
      label: "Perspectives Fondatrices : Rationalisme Classique, Méthode & Lumières",
      perspective: "Doute méthodique, Idées claires et distinctes & Universalisme rationnel",
      pedagogicalAdvice: "Idéal pour poser la raison comme faculté souveraine de discernement du vrai et guide de la liberté humaine.",
      arguments: [
        {
          statement: "La raison ou bon sens est universellement partagée par tous les hommes et permet d'atteindre la certitude par une méthode rigoureuse.",
          author: "René Descartes",
          work: "Discours de la méthode",
          quote: "Le bon sens est la chose du monde la mieux partagée... la puissance de bien juger et distinguer le vrai d'avec le faux, qui est proprement ce qu'on nomme le bon sens ou la raison, est naturellement égale en tous les hommes.",
          explanation: "Descartes établit l'égalité intellectuelle de principe entre tous les êtres humains. Ce n'est pas le manque d'intelligence qui égare les hommes, mais l'absence d'une méthode ordonnée pour conduire leur pensée et se libérer des préjugés d'enfance.",
          category: "Thèse (Universalité de la Raison)",
          connector: "De prime abord"
        },
        {
          statement: "Les Lumières se définissent par le courage d'user de son propre entendement sans la tutelle d'une autorité extérieure.",
          author: "Emmanuel Kant",
          work: "Qu'est-ce que les Lumières ?",
          quote: "Sapere aude ! Aie le courage de te servir de ton propre entendement ! Telle est la devise des Lumières.",
          explanation: "Kant montre que l'état de minorité intellectuelle n'est pas dû à une incapacité naturelle de la raison, mais à la paresse et à la lâcheté qui conduisent les hommes à s'en remettre aveuglément aux dogmes religieux ou aux gouvernants autoritaires. Penser par soi-même est le premier devoir d'un être libre.",
          category: "Émancipation Intellectuelle (Sapere Aude)",
          connector: "En second lieu"
        },
        {
          statement: "La raison permet à l'homme de comprendre la nécessité universelle de la nature et de triompher des passions aveugles.",
          author: "Baruch Spinoza",
          work: "Éthique",
          quote: "Plus nous nous efforçons de vivre sous la conduite de la Raison, plus nous nous efforçons de dépendre moins de la Fortune.",
          explanation: "Pour Spinoza, les passions naissent d'idées inadéquates et confuses qui nous rendent passifs et esclaves des événements extérieurs. En comprenant par la raison les causes réelles de nos désirs et l'ordre éternel de la nature, l'homme accède à la véritable liberté et à la paix de l'âme (la béatitude).",
          category: "Rationalisme Libérateur (Maîtrise des Passions)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'usage vigilant de la raison critique est le seul rempart efficace contre le fanatisme et la superstition intolérante.",
          author: "Voltaire",
          work: "Dictionnaire philosophique (Article Fanatisme)",
          quote: "Le fanatisme est à la superstition ce que le délire est à la fièvre... Il n'y a d'autre remède à cette maladie épidémique que l'esprit philosophique.",
          explanation: "Voltaire démontre que le fanatisme aveugle étouffe l'humanité et conduit aux pires massacres lorsque des dogmes invérifiables se substituent à la vérification rationnelle. Seule la lumière de la raison tolérante peut pacifier la vie collective.",
          category: "Combat des Lumières contre l'Obscurantisme",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques : Limites de la Raison, Scepticisme & Logique du Cœur",
      perspective: "Finitude cognitive, Préséance du cœur & Déconstruction du dogmatisme",
      pedagogicalAdvice: "À mobiliser pour nuancer l'arrogance d'un rationalisme absolu et analyser le rôle de l'intuition, du sentiment et de l'expérience.",
      arguments: [
        {
          statement: "La raison géométrique est incapable de fonder ses propres principes premiers sans le secours immédiat du cœur et du sentiment.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Le cœur a ses raisons que la raison ne connaît point... C'est le cœur qui sent Dieu, et non la raison. Voilà ce que c'est que la foi : Dieu sensible au cœur, non à la raison.",
          explanation: "Pascal démontre la double impuissance du rationalisme dogmatique : la raison ne peut ni prouver l'existence de l'espace, du temps et du mouvement (connus intuitivement par le cœur), ni apporter la certitude salutaire face à l'angoisse existentielle de la mort et de l'infini.",
          category: "Thèse des Deux Ordres (Raison & Cœur)",
          connector: "Toutefois"
        },
        {
          statement: "La raison pure est incapable de connaître les réalités nouménales (Dieu, l'âme, le monde) qui dépassent l'expérience sensible possible.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pure",
          quote: "J'ai donc dû supprimer le savoir pour lui substituer la croyance.",
          explanation: "Kant ruine la métaphysique dogmatique traditionnelle : la raison théorique ne produit de connaissances valides que lorsqu'elle applique ses catégories a priori aux intuitions de l'expérience sensible. Vouloir démontrer scientifiquement l'immortalité de l'âme ou l'existence de Dieu aboutit à des antinomies insolubles.",
          category: "Criticisme & Finitude de la Connaissance",
          connector: "Dans le même sens"
        },
        {
          statement: "La raison n'est pas le moteur suprême de nos actes : elle est et ne doit être que l'esclave de nos passions.",
          author: "David Hume",
          work: "Traité de la nature humaine",
          quote: "La raison est, et ne doit qu'être l'esclave des passions ; elle ne peut jamais prétendre à d'autre rôle qu'à les servir et à leur obéir.",
          explanation: "L'empiriste Hume démontre que la pure rationalité calcule les moyens techniques pour atteindre un but, mais est incapable à elle seule d'engendrer un désir d'agir ou un sentiment moral. C'est l'affectivité, la sympathie et le désir qui impulsent la volonté.",
          category: "Critique Empiriste du Primat de la Raison",
          connector: "D'autre part"
        },
        {
          statement: "Vouloir tout enfermer dans la seule rationalité abstraite mutile la vie intérieure et conduit à la folie du doute stérile.",
          author: "Søren Kierkegaard",
          work: "Crainte et Tremblement",
          quote: "La foi commence précisément là où la raison s'arrête... c'est un saut dans l'absurde qui transcende la morale générale.",
          explanation: "Le père de l'existentialisme chrétien montre que le paradoxe de l'existence singulière et le choix éthique ou religieux ne peuvent être résolus par les équations de la dialectique hégélienne. La vérité authentique est subjective, passionnée et assumée dans l'angoisse.",
          category: "Existentialisme & Saut de la Foi",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Dialectiques & Épistémologiques : Raison Historique & Rectification Scientifique",
      perspective: "Ruse de la raison, Dialectique, Ruptures épistémologiques & Réfutabilité",
      pedagogicalAdvice: "Indispensable pour aborder les sujets liant raison, histoire, progrès scientifique et révision critique permanente.",
      arguments: [
        {
          statement: "La Raison universelle gouverne le monde historique à travers les passions des hommes par la « ruse de la raison ».",
          author: "Georg Wilhelm Friedrich Hegel",
          work: "La Raison dans l'histoire",
          quote: "Ce qu'on peut appeler la ruse de la raison, c'est que celle-ci fait agir les passions pour elle-même... et le particulier en paie le prix.",
          explanation: "Hegel dépasse l'opposition stérile entre rationalité et passions : l'histoire humaine n'est pas un chaos absurde, mais le déploiement dialectique progressif de l'Esprit vers la conscience de sa liberté. Les grands personnages historiques croient agir pour leur gloire personnelle, mais accomplissent sans le savoir les fins supérieures de la Raison.",
          category: "Téléologie & Ruse de la Raison",
          connector: "En premier lieu"
        },
        {
          statement: "La raison scientifique ne progresse pas par accumulation passive mais par la rectification permanente de ses propres erreurs.",
          author: "Gaston Bachelard",
          work: "La Formation de l'esprit scientifique",
          quote: "La science s'oppose absolument à l'opinion... On connaît contre une connaissance antérieure, en détruisant des connaissances mal faites, en surmontant ce qui, dans l'esprit même, fait obstacle à la spiritualisation.",
          explanation: "Bachelard montre que la raison n'est pas un ensemble de règles figées données une fois pour toutes : elle doit surmonter les obstacles épistémologiques (l'opinion naïve, l'expérience première, les fausses analogies). L'esprit scientifique est une rationalité appliquée en perpétuelle réorganisation dialectique.",
          category: "Épistémologie & Obstacles Épistémologiques",
          connector: "Aussi"
        },
        {
          statement: "Le critère de la rationalité scientifique réside dans la testabilité empirique et la réfutabilité des hypothèses.",
          author: "Karl Popper",
          work: "La Logique de la découverte scientifique",
          quote: "Une théorie qui n'est réfutable par aucun événement qui se puisse concevoir est dépourvue de caractère scientifique.",
          explanation: "Popper démontre qu'aucune accumulation d'exemples favorables ne peut prouver définitivement la vérité absolue d'une théorie rationnelle. La démarche rationnelle authentique consiste à formuler des conjectures audacieuses et à tenter impitoyablement de les réfuter par des tests rigoureux.",
          category: "Rationalisme Critique & Falsifiabilité",
          connector: "Par ailleurs"
        },
        {
          statement: "La raison occidentale dominante s'est aliénée en se réduisant à une rationalité purement instrumentale et dominatrice.",
          author: "Max Horkheimer et Theodor Adorno",
          work: "La Dialectique de la raison",
          quote: "La terre entièrement éclairée resplendit sous le signe d'un désastre triomphant... La raison devenue instrumentale détruit sa propre fin émancipatrice.",
          explanation: "Les philosophes de l'École de Francfort dévoilent le revers sombre des Lumières : lorsqu'elle cesse d'interroger la justice des fins humaines pour ne s'intéresser qu'à l'efficacité calculatrice des moyens techniques, la raison se transforme en instrument de domination technocratique et de destruction du vivant.",
          category: "Critique de la Raison Instrumentale",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Penseurs Africains & Décoloniales : Ratiocination Critique & Démystification",
      perspective: "Rationalité critique, Rupture avec l'obscurantisme & Universalisme décolonial",
      pedagogicalAdvice: "À mobiliser pour illustrer l'appropriation africaine de la rationalité philosophique et le refus de tout ethnocentrisme.",
      arguments: [
        {
          statement: "L'émancipation véritable de l'Afrique exige l'adoption sans complexe d'une rationalité critique et scientifique sans concessions.",
          author: "Marcien Towa",
          work: "Essai sur la problématique philosophique en Afrique",
          quote: "La philosophie commence par la décision de soumettre l'ensemble de l'héritage traditionnel à l'examen sans complaisance de la raison critique.",
          explanation: "Towa rejette avec force toute tentative d'assigner l'Africain à l'émotion ou à la mystique. La philosophie est une pratique rationnelle universelle qui refuse de sacraliser le passé pour examiner lucidement les causes des défaites historiques et conquérir les moyens techniques de l'autonomie.",
          category: "Raison Critique & Démystification Africaine",
          connector: "De prime abord"
        },
        {
          statement: "La rationalité ne saurait être le monopole exclusif d'aucune civilisation : elle s'exprime dans le dialogue rigoureux des esprits.",
          author: "Paulin Hountondji",
          work: "Sur la « philosophie africaine »",
          quote: "La science et la philosophie sont des démarches universelles dont l'Afrique ne saurait être exclue au nom d'un particularisme trompeur.",
          explanation: "Hountondji dénonce l'ethnophilosophie qui fige la pensée africaine dans une vision du monde collective et inconsciente. Pour lui, la philosophie africaine est une littérature scientifique et réflexive produite par des auteurs identifiables débattant rationnellement entre pairs.",
          category: "Défense de l'Universalisme Critique",
          connector: "En outre"
        },
        {
          statement: "La pensée philosophique égyptienne antique prouve que l'Afrique noire a été l'un des premiers foyers historiques de la rationalité scientifique.",
          author: "Cheikh Anta Diop",
          work: "Civilisation ou Barbarie",
          quote: "L'histoire des sciences et de la philosophie montre que les Grecs ont été les disciples studieux des savants de la vallée du Nil.",
          explanation: "Cheikh Anta Diop déconstruit le mythe du « miracle grec » surgi du néant : en établissant les emprunts massifs de la géométrie, de l'astronomie et de la cosmologie helléniques à l'Égypte antique négro-africaine, il rend à l'humanité la mémoire partagée des sources de la raison.",
          category: "Généalogie de la Rationalité Africaine",
          connector: "Par ailleurs"
        },
        {
          statement: "Le dialogue délibératif de la palabre traditionnelle illustre une rationalité communicationnelle orientée vers l'entente et la réconciliation.",
          author: "Kwasi Wiredu",
          work: "Philosophy and an African Culture",
          quote: "La recherche du consensus par la discussion prolongée suppose une foi inébranlable dans la capacité de la raison humaine à triompher des différends.",
          explanation: "Wiredu montre que la sagesse démocratique africaine met en œuvre une forme éminente de rationalité pratique : loin d'imposer la volonté du plus fort ou la tyrannie d'une majorité numérique éphémère, elle poursuit le consensus jusqu'à ce que chaque participant reconnaisse la justesse de l'accord commun.",
          category: "Rationalité Communicationnelle & Consensus",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "droit": [
    {
      id: 0,
      label: "Perspectives Fondatrices : Droit Naturel, Droits Inaliénables & Justice Idéale",
      perspective: "Droit naturel, Droits de l'homme & Supériorité de la morale",
      pedagogicalAdvice: "Idéal pour poser que la loi écrite n'a de validité morale que si elle est conforme aux principes imprescriptibles du droit naturel.",
      arguments: [
        {
          statement: "Il existe une loi naturelle universelle, conforme à la droite raison, antérieure et supérieure à toutes les lois positives promulguées par les hommes.",
          author: "Cicéron",
          work: "Des Lois (De Legibus)",
          quote: "Il est une loi véritable, la droite raison, conforme à la nature, immuable et éternelle, qui appelle les hommes au devoir par ses commandements.",
          explanation: "Cicéron démontre que si la volonté d'un tyran ou le vote d'une majorité populaire suffisait à créer le droit, le vol ou l'assassinat pourraient être décrétés justes. Le droit authentique trouve sa racine dans la raison universelle de l'homme, non dans l'arbitraire des décrets humains.",
          category: "Thèse du Droit Naturel Antique",
          connector: "De prime abord"
        },
        {
          statement: "Les individus possèdent des droits naturels inaliénables (vie, liberté, propriété) que le gouvernement civil a pour mandat strict de garantir.",
          author: "John Locke",
          work: "Second traité du gouvernement civil",
          quote: "L'état de nature a une loi de la nature qui le gouverne, et qui s'impose à chacun : la raison, qui est cette loi, enseigne à tous les hommes qu'étant tous égaux et indépendants, nul ne doit nuire à un autre.",
          explanation: "Locke fonde l'État de droit moderne : les lois civiles ne créent pas les droits de l'homme, elles les consacrent. Tout régime politique qui viole arbitrairement la liberté ou les biens de ses citoyens rompt le contrat social et autorise le peuple à exercer son droit légitime de résistance à l'oppression.",
          category: "Droits Inaliénables & Libéralisme Politique",
          connector: "En second lieu"
        },
        {
          statement: "L'obéissance à la loi civile n'est pas servitude mais accomplissement de la liberté lorsque le citoyen concourt à sa rédaction.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté.",
          explanation: "Rousseau surmonte l'opposition naïve entre contrainte juridique et liberté : dans l'État républicain authentique, la loi est l'expression de la volonté générale. En se soumettant à la loi commune, le citoyen n'obéit qu'à lui-même et s'affranchit de la tyrannie des volontés particulières.",
          category: "Légalité Républicaine & Souveraineté du Peuple",
          connector: "Par ailleurs"
        },
        {
          statement: "Le droit se distingue rigoureusement de la morale par sa faculté de contraindre extérieurement pour harmoniser la liberté de chacun avec celle de tous.",
          author: "Emmanuel Kant",
          work: "Doctrine du droit (Métaphysique des mœurs)",
          quote: "Le droit est l'ensemble des conditions par lesquelles l'arbitre de l'un peut s'accorder avec l'arbitre de l'autre selon une loi universelle de la liberté.",
          explanation: "Kant précise la spécificité de la sphère juridique : la morale exige la pureté intérieure de l'intention, tandis que le droit règle uniquement les actions extérieures entre les hommes. Le droit autorise l'usage légitime de la contrainte pour empêcher que la liberté d'un individu n'écrase celle de ses concitoyens.",
          category: "Définition Critique du Droit",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Positivistes & Réalistes : Droit Positif, Force Légitime & Convention",
      perspective: "Positivisme juridique, Illusion du droit naturel & Monopole de la contrainte",
      pedagogicalAdvice: "À mobiliser pour analyser le droit tel qu'il existe concrètement dans les institutions et dissiper les illusions moralisatrices.",
      arguments: [
        {
          statement: "Sans le glaive et la force publique du souverain pour l'imposer, le droit n'est qu'un mot vide et inefficace.",
          author: "Thomas Hobbes",
          work: "Léviathan",
          quote: "Les pactes sans l'épée ne sont que des mots, et n'ont pas la force de mettre un homme en sécurité.",
          explanation: "Hobbes démontre que le juste et l'injuste n'existent pas dans l'état de nature sans État. C'est uniquement l'érection d'une puissance publique souveraine, disposant de la force coercitive, qui institue les lois positives et rend possible l'existence effective du droit.",
          category: "Réalisme Politique & Positivisme",
          connector: "Toutefois"
        },
        {
          statement: "La justice sans la force est impuissante, la force sans la justice est tyrannique : il faut donc mettre ensemble la justice et la force.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "La justice sans la force est impuissante ; la force sans la justice est tyrannique... Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste.",
          explanation: "Pascal dévoile avec lucidité le compromis tragique sur lequel reposent les institutions humaines : les hommes ne pouvant s'accorder universellement sur ce qui est juste par nature, les pouvoirs établis ont conféré l'apparence du droit à la force victorieuse afin de préserver la paix civile de la guerre civile.",
          category: "Lucidité Tragique sur la Force et le Droit",
          connector: "Dans le même sens"
        },
        {
          statement: "La validité d'une norme juridique dépend exclusivement de sa conformité procédurale à une norme supérieure, et non de son contenu moral.",
          author: "Hans Kelsen",
          work: "Théorie pure du droit",
          quote: "Le droit est un ordre normatif de la conduite humaine... Une norme juridique est valable parce qu'elle a été créée d'une certaine façon, déterminée par une norme supérieure.",
          explanation: "Kelsen fonde le positivisme normativiste moderne (la pyramide des normes) : le juriste doit analyser le droit tel qu'il est, indépendamment de toute appréciation éthique ou politique subjective. Une loi est juridiquement valide si elle a été votée selon la procédure constitutionnelle régulière.",
          category: "Positivisme Juridique Pur",
          connector: "D'autre part"
        },
        {
          statement: "L'expression « droit du plus fort » est une contradiction dans les termes : la force est une puissance physique dont ne découle aucune obligation morale.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "Le plus fort n'est jamais assez fort pour être toujours le maître, s'il ne transforme sa force en droit et l'obéissance en devoir.",
          explanation: "Rousseau réfute l'idée que la force brute puisse fonder un droit légitime. Céder à la force est un acte de nécessité ou de prudence, non un devoir volontaire. Sitôt que la force cesse, l'obligation disparaît ; seul un accord légitime librement consenti crée un véritable lien de droit.",
          category: "Réfutation du Droit du Plus Fort",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Critiques : Droit comme Instrument de Classe & Domination",
      perspective: "Critique marxiste du droit bourgeois, Illusion formelle & Violence d'État",
      pedagogicalAdvice: "Indispensable pour examiner les limites de l'égalité formelle en droit et dévoiler comment la loi protège les intérêts des dominants.",
      arguments: [
        {
          statement: "Le droit bourgeois n'est que la volonté de la classe dominante érigée en loi pour perpétuer l'exploitation économique.",
          author: "Karl Marx et Friedrich Engels",
          work: "Manifeste du parti communiste",
          quote: "Votre droit n'est que la volonté de votre classe érigée en loi, une volonté dont le contenu est déterminé par les conditions matérielles de vie de votre classe.",
          explanation: "Marx démontre que le droit prétendu universel masque des rapports d'exploitation réels. En proclamant l'égalité abstraite devant la loi et le caractère sacré de la propriété privée, le système juridique protège les détenteurs de capitaux contre les revendications des prolétaires.",
          category: "Critique Matérialiste du Droit",
          connector: "En premier lieu"
        },
        {
          statement: "L'égalité proclamée par le droit est une égalité formelle dérisoire face aux inégalités matérielles criantes de la société.",
          author: "Anatole France",
          work: "Le Lys rouge",
          quote: "La loi, dans un souci majestueux d'égalité, interdit aux riches comme aux pauvres de coucher sous les ponts, de mendier dans les rues et de voler du pain.",
          explanation: "Cette formule célèbre met en lumière l'hypocrisie d'un droit abstrait : interdire la mendicité aux riches et aux pauvres de façon identique ne constitue pas une véritable justice, car seul le déshérité souffre de la misère matérielle. Le droit sans justice sociale est une arme d'oppression.",
          category: "Critique de l'Égalité Abstraite",
          connector: "Aussi"
        },
        {
          statement: "L'appareil judiciaire et les lois disciplinaires ont pour fonction réelle de surveiller, trier et punir les classes populaires.",
          author: "Michel Foucault",
          work: "Surveiller et punir",
          quote: "La loi et la justice ne sanctionnent pas des actes interdits selon des principes immuables, mais gèrent les illégalismes différentiels de la société.",
          explanation: "Foucault montre que le système pénal moderne ne traite pas équitablement toutes les infractions : il réprime impitoyablement les délits commis par les classes dominées tout en aménageant la tolérance et l'impunité pour les fraudes économiques et financières des élites au pouvoir.",
          category: "Microphysique du Pouvoir & Illégalismes",
          connector: "Par ailleurs"
        },
        {
          statement: "L'État se réserve le monopole de la violence légitime pour écraser toute contestation radicale de l'ordre établi.",
          author: "Max Weber",
          work: "Le Savant et le Politique",
          quote: "L'État est cette communauté humaine qui revendique avec succès pour son propre compte le monopole de la violence physique légitime.",
          explanation: "Weber rappelle la dimension fondamentale de contrainte inhérente à l'ordre juridique : ce qui distingue la violence étatique du simple brigandage n'est pas sa douceur, mais sa légitimité reconnue par les citoyens. Cependant, cette frontière peut basculer dans la tyrannie si le contrôle démocratique disparaît.",
          category: "Sociologie du Pouvoir & Violence Légitime",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Contemporaines & Désobéissance Civile : Droits de l'Homme & Justice Universelle",
      perspective: "Désobéissance civile, Justice comme équité (Rawls) & Résistance aux lois iniques",
      pedagogicalAdvice: "Recommandé pour les sujets interrogeant le devoir d'obéissance, la résistance aux lois injustes et les droits humains.",
      arguments: [
        {
          statement: "La conscience morale a le devoir sacré de désobéir ouvertement et pacifiquement à une loi injuste pour en exiger l'abrogation.",
          author: "Henry David Thoreau",
          work: "La Désobéissance civile",
          quote: "Si la loi est d'une nature telle qu'elle exige de vous que vous soyez l'agent de l'injustice envers autrui, alors, je vous le dis, enfreignez la loi.",
          explanation: "Thoreau théorise la désobéissance civile : le citoyen ne doit jamais aliéner sa conscience au profit de la majorité parlementaire. Face à des lois monstrueuses comme l'esclavage ou des guerres impérialistes injustes, refuser de payer l'impôt ou enfreindre la règle scélérate est un impératif d'honneur civique.",
          category: "Théorie de la Désobéissance Civile",
          connector: "De prime abord"
        },
        {
          statement: "Une loi injuste qui dégrade la personnalité humaine n'est pas une loi véritable, mais un acte de violence institutionnelle.",
          author: "Martin Luther King",
          work: "Lettre de la prison de Birmingham",
          quote: "Une loi injuste n'est pas une loi du tout... Toute loi qui élève la personnalité humaine est juste ; toute loi qui dégrade la personnalité humaine est injuste.",
          explanation: "S'inspirant de Saint Thomas d'Aquin et de Gandhi, Martin Luther King justifie la lutte non-violente contre la ségrégation raciale : désobéir publiquement à une loi inique tout en acceptant la sanction légale témoigne du plus haut respect pour l'idéal suprême du droit.",
          category: "Combat des Droits Civiques & Non-Violence",
          connector: "En outre"
        },
        {
          statement: "Dans une société juste, les libertés de base égales pour tous sont absolues et ne peuvent être sacrifiées à l'intérêt économique global.",
          author: "John Rawls",
          work: "Théorie de la justice",
          quote: "Chaque personne possède une inviolabilité fondée sur la justice qui, même au nom du bien-être de la société tout entière, ne peut être enfreinte.",
          explanation: "Rawls réfute l'utilitarisme qui accepterait le sacrifice des droits d'une minorité si cela augmentait le bonheur de la majorité. Sous le « voile d'ignorance », des individus rationnels choisiraient prioritairement l'égalité absolue des libertés fondamentales et le principe de différence qui maximise le sort des plus défavorisés.",
          category: "Justice comme Équité & Droits Inviolables",
          connector: "Par ailleurs"
        },
        {
          statement: "Les luttes de libération africaines démontrent que le droit véritable s'arrache par la mobilisation courageuse pour la dignité universelle.",
          author: "Nelson Mandela",
          work: "Un long chemin vers la liberté",
          quote: "Être libre, ce n'est pas seulement se débarrasser de ses chaînes, c'est vivre d'une façon qui respecte et renforce la liberté des autres.",
          explanation: "Mandela incarne la transition historique d'une résistance héroïque contre le système juridique criminel de l'Apartheid à l'instauration d'un État constitutionnel moderne fondé sur l'égalité raciale, le pardon et la réconciliation nationale.",
          category: "Émancipation Démocratique & Réconciliation",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "morale": [
    {
      id: 0,
      label: "Perspectives Déontologiques : Devoir Pur, Impératif Catégorique & Autonomie de la Volonté",
      perspective: "Devoir inconditionnel, Respect de la personne & Dignité humaine",
      pedagogicalAdvice: "Idéal pour fonder l'obligation morale inconditionnelle au-delà de tout calcul d'intérêt ou de bonheur personnel.",
      arguments: [
        {
          statement: "L'acte moral authentique n'est pas guidé par la recherche du bonheur ou de l'intérêt, mais par le devoir accompli pour lui-même.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle.",
          explanation: "Kant établit le critère universel de la moralité (l'impératif catégorique). Une action n'est bonne que si son principe peut être érigé en règle universelle sans contradiction. Agir par devoir exige de rejeter les mobiles sensibles égoïstes pour n'obéir qu'à la loi pure de la raison pratique.",
          category: "Thèse Déontologique (Universalité)",
          connector: "De prime abord"
        },
        {
          statement: "Tout être humain possède une dignité absolue et doit être traité comme une fin en soi, jamais comme un simple moyen.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans la personne de tout autre, toujours en même temps comme une fin, et jamais simplement comme un moyen.",
          explanation: "Kant distingue radicalement les choses, qui ont un prix marchand et sont interchangeables, des personnes, qui possèdent une dignité inaliénable. L'impératif moral interdit l'esclavage, l'exploitation, le mensonge et la manipulation, car ils réduisent autrui à un instrument au service de nos désirs.",
          category: "Dignité Humaine & Fin en Soi",
          connector: "En second lieu"
        },
        {
          statement: "La conscience morale est un sentiment divin et infaillible gravé dans le cœur de l'homme pour le guider vers le bien.",
          author: "Jean-Jacques Rousseau",
          work: "Émile ou De l'éducation",
          quote: "Conscience ! Conscience ! Instinct divin, immortelle et céleste voix, juge infaillible du bien et du mal, qui rends l'homme semblable à Dieu.",
          explanation: "Rousseau s'oppose aux rationalistes froids : avant même de savoir philosopher ou raisonner, l'homme éprouve spontanément la pitié face à la souffrance de son semblable et l'amour de la justice. La morale est une voix intérieure du cœur qui résiste aux sophismes de l'égoïsme social.",
          category: "Sentiment Moral Inné & Pitié",
          connector: "Par ailleurs"
        },
        {
          statement: "Le devoir moral ne tolère aucun compromis ni dérobade : il exige le don de soi et le pardon absolu.",
          author: "Vladimir Jankélévitch",
          work: "Le Traité des vertus",
          quote: "Le devoir est inconditionnel : faire son devoir, c'est faire plus que son devoir, c'est aller jusqu'à l'extrême limite de l'exigence morale.",
          explanation: "Jankélévitch rappelle que la morale commence précisément là où s'arrêtent les obligations juridiques minimales. L'intention pure du pardon ou de l'amour du prochain refuse tout marchandage calculé, incarnant la gratuité et la générosité infinie de la conscience éthique.",
          category: "Morale de l'Inconditionnalité",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Téléologiques & Antiques : Éthique des Vertus, Souverain Bien & Sagesse",
      perspective: "Téléologie morale, Juste milieu (mésotès), Eudémonisme & Ataraxie",
      pedagogicalAdvice: "À mobiliser pour les sujets liant la morale au bonheur, à l'excellence du caractère et à la sagesse de vie.",
      arguments: [
        {
          statement: "La vertu morale consiste dans un juste milieu entre deux extrêmes vicieux, l'un par excès et l'autre par défaut.",
          author: "Aristote",
          work: "Éthique à Nicomaque",
          quote: "La vertu est donc une disposition acquise volontaire, consistant par rapport à nous en un juste milieu déterminé par la raison.",
          explanation: "Pour Aristote, la morale n'est pas une soumission doloriste à des interdits abstraits, mais l'art d'exceller dans l'action. Par exemple, le courage est le juste milieu entre la lâcheté (défaut) et la témérité insensée (excès). La vertu s'acquiert par l'habitude et procure le bonheur authentique (eudaimonia).",
          category: "Éthique Aristotélicienne du Juste Milieu",
          connector: "En premier lieu"
        },
        {
          statement: "La sagesse morale réside dans la maîtrise rigoureuse des désirs pour préserver la paix de l'âme exempte de douleur.",
          author: "Épicure",
          work: "Lettre à Ménécée",
          quote: "Quand nous disons que le plaisir est le but de la vie, nous ne parlons pas des plaisirs des débauchés... mais de l'absence de douleur dans le corps et de trouble dans l'âme.",
          explanation: "L'éthique épicurienne n'est pas une jouissance débridée mais une ascèse rationnelle : en distinguant les désirs naturels et nécessaires (boire, manger sobrement, philosopher entre amis) des désirs vains (gloire, richesse infinie), le sage atteint l'ataraxie (tranquillité de l'esprit) et vit semblable à un dieu parmi les hommes.",
          category: "Épicurisme & Ataraxie Sobre",
          connector: "Aussi"
        },
        {
          statement: "La liberté morale commence par la distinction stoïcienne inébranlable entre ce qui dépend de nous et ce qui n'en dépend pas.",
          author: "Épictète",
          work: "Manuel",
          quote: "Il y a des choses qui dépendent de nous, et d'autres qui ne dépendent pas de nous... Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.",
          explanation: "Épictète enseigne que le vice et le malheur naissent de notre prétention insensée à vouloir changer le cours du monde ou éviter la maladie et la mort. La vertu stoïcienne consiste à maîtriser nos pensées, nos désirs et notre volonté, tout en acceptant avec dignité le destin extérieur.",
          category: "Stoïcisme & Citadelle Intérieure",
          connector: "Par ailleurs"
        },
        {
          statement: "Le bien suprême consiste dans la joie de comprendre la nature par la raison et de vivre en harmonie avec le Tout.",
          author: "Baruch Spinoza",
          work: "Éthique",
          quote: "La béatitude n'est pas le prix de la vertu, mais la vertu elle-même ; et nous n'en jouissons pas parce que nous réprimons nos penchants, mais au contraire c'est parce que nous en jouissons que nous pouvons réprimer nos penchants.",
          explanation: "Spinoza congédie la morale culpabilisante du remords et du péché : la véritable vertu est puissance d'agir et d'exister (conatus). L'homme vertueux n'agit pas par peur du châtiment divin, mais parce que la connaissance rationnelle de la vérité remplit son être d'une joie sereine et inaltérable.",
          category: "Béatitude & Connaissance Rationnelle",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Conséquentialistes & Utilitaristes : Le Plus Grand Bonheur pour le Plus Grand Nombre",
      perspective: "Calcul des plaisirs, Utilité sociale, Conséquences des actes & Altruisme pragmatique",
      pedagogicalAdvice: "Indispensable pour examiner les dilemmes éthiques modernes où l'on juge de la moralité d'un acte d'après ses résultats concrets.",
      arguments: [
        {
          statement: "La moralité d'une action se mesure exclusivement à sa capacité de produire le plus grand bonheur pour le plus grand nombre d'êtres sensibles.",
          author: "Jeremy Bentham",
          work: "Introduction aux principes de morale et de législation",
          quote: "Par principe d'utilité, on entend ce principe qui approuve ou désapprouve toute action... selon la tendance qu'elle paraît avoir à augmenter ou diminuer le bonheur de la partie dont l'intérêt est en question.",
          explanation: "Bentham rompt avec la morale du devoir abstrait : une action n'est pas bonne « en soi », mais par ses conséquences tangibles. Le bien moral s'identifie à la maximisation du plaisir et à la minimisation des souffrances physiques et morales dans la société.",
          category: "Utilitarisme Quantitatif Classique",
          connector: "D'un point de vue utilitariste"
        },
        {
          statement: "Les plaisirs de l'esprit, de l'art et de la solidarité morale possèdent une dignité qualitative infiniment supérieure aux satisfactions corporelles brutes.",
          author: "John Stuart Mill",
          work: "L'Utilitarisme",
          quote: "Il vaut mieux être un homme insatisfait qu'un porc satisfait ; il vaut mieux être Socrate insatisfait qu'un imbécile satisfait.",
          explanation: "Mill affine l'utilitarisme contre l'accusation d'hédonisme vulgaire : les facultés supérieures de l'homme lui permettent d'apprécier la beauté, la vérité et la générosité morale. Ces plaisirs nobles concilient l'épanouissement individuel avec le dévouement désintéressé pour le bien public.",
          category: "Utilitarisme Qualitatif & Humaniste",
          connector: "En outre"
        },
        {
          statement: "L'extension du cercle de la considération morale doit impérativement inclure tous les êtres capables de ressentir la douleur, y compris les animaux.",
          author: "Peter Singer",
          work: "La Libération animale",
          quote: "La question n'est pas : Peuvent-ils raisonner ? ni : Peuvent-ils parler ? mais : Peuvent-ils souffrir ?",
          explanation: "Singer fustige le « spécisme » comme une discrimination arbitraire semblable au racisme ou au sexisme. Si la morale conséquentialiste vise à réduire la souffrance dans le monde, nous avons l'obligation éthique d'épargner aux animaux les tortures de l'élevage intensif et de l'exploitation industrielle.",
          category: "Éthique Animale & Antispécisme",
          connector: "Par ailleurs"
        },
        {
          statement: "Dans les dilemmes tragiques de l'action politique, le responsable moral doit assumer l'éthique de responsabilité en anticipant les conséquences de ses choix.",
          author: "Max Weber",
          work: "Le Savant et le Politique",
          quote: "L'éthique de la responsabilité commande de répondre des conséquences prévisibles de nos actes, tandis que l'éthique de conviction rejette la responsabilité sur autrui ou sur Dieu.",
          explanation: "Weber oppose l'éthique de conviction (qui applique aveuglément des principes sans se soucier du désastre réel) à l'éthique de responsabilité : l'homme d'action lucide sait qu'il doit parfois user de moyens impurs pour éviter le triomphe du pire malheur sur son peuple.",
          category: "Éthique de Responsabilité vs Conviction",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Critiques & Altruistes : Déconstruction Nietzschéenne & Visage d'Autrui",
      perspective: "Généalogie de la morale, Ressentiment, Responsabilité infinie & Principe responsabilité",
      pedagogicalAdvice: "À mobiliser pour aborder le soupçon philosophique sur les origines de la morale et l'exigence contemporaine pour les générations futures.",
      arguments: [
        {
          statement: "La morale chrétienne et bourgeoise est née du ressentiment des esclaves et des faibles pour désarmer les hommes forts et nobles.",
          author: "Friedrich Nietzsche",
          work: "Généalogie de la morale",
          quote: "La rébellion des esclaves dans la morale commence lorsque le ressentiment lui-même devient créateur et enfante des valeurs.",
          explanation: "Nietzsche dynamite l'illusion d'une morale universelle désintéressée : incapable d'affirmer la force créatrice de la vie, la caste des prêtres et des faibles a inventé les notions coupables de « faute », de « péché » et d'« humilité » pour culpabiliser les pulsions vitales de l'homme supérieur.",
          category: "Critique Généalogique du Ressentiment",
          connector: "Toutefois"
        },
        {
          statement: "L'obligation éthique ne naît pas d'une règle abstraite mais de l'appel impératif de la vulnérabilité gravée sur le visage d'Autrui.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini",
          quote: "Le visage s'impose à moi sans que je puisse rester sourd à son appel, ni l'oublier... Le visage me commande : Tu ne tueras point.",
          explanation: "Levinas renverse la tradition philosophique occidentale : l'éthique est la philosophie première, antérieure à toute métaphysique. La vulnérabilité sans défense d'autrui désarme mon égoïsme spontané et m'impose une responsabilité infinie et asymétrique : je suis l'otage de l'autre homme.",
          category: "Éthique de l'Altérité Absolue",
          connector: "Sous un angle éthique fondamental"
        },
        {
          statement: "La puissance technologique démesurée de l'homme moderne exige une nouvelle éthique de la prudence pour protéger l'avenir de la terre et des générations futures.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre.",
          explanation: "Jonas montre que les morales traditionnelles étaient faites pour des actions à courte portée entre contemporains. Face au péril nucléaire et au désastre écologique, l'homme acquiert pour la première fois le pouvoir d'anéantir toute vie. L'heuristique de la peur doit nous guider pour préserver la dignité des générations non encore nées.",
          category: "Principe Responsabilité & Éthique Écologique",
          connector: "Par ailleurs"
        },
        {
          statement: "L'éthique véritable consiste à viser la « vie bonne, avec et pour les autres, dans des institutions justes ».",
          author: "Paul Ricœur",
          work: "Soi-même comme un autre",
          quote: "Viser la vie bonne avec et pour autrui dans des institutions justes : voilà ce qui résume la visée éthique fondamentale.",
          explanation: "Ricœur réconcilie l'héritage d'Aristote et de Kant : la visée éthique du bonheur partagé a besoin de l'épreuve de la norme morale universelle, mais celle-ci doit s'incarner dans des institutions politiques démocratiques capables de garantir l'équité pour tous les citoyens.",
          category: "Synthèse Éthique Contemporaine",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
