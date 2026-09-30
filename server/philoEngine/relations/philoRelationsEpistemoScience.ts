import { PhiloRelationEntry } from "../philoRelationsDatabase";

/**
 * RELATIONS PHILOSOPHIQUES : ÉPISTÉMOLOGIE, VÉRITÉ, SCIENCE, LANGAGE & CONSCIENCE
 */
export const PHILO_RELATIONS_EPISTEMO_SCIENCE: PhiloRelationEntry[] = [
  // --------------------------------------------------------------------------
  // 1. FAUT-IL PRÉFÉRER UNE VÉRITÉ QUI BLESSE À UNE ILLUSION QUI CONSOLE ?
  // --------------------------------------------------------------------------
  {
    id: "verite-illusion-morale",
    label: "Vérité & Illusion (Exigence inconditionnelle de vérité vs Valeur vitale de l'illusion)",
    triggerRegex: /(?:v[ée]rit[ée]).*(?:blesse|illusion.*console|bonne\s+[aà]\s+dire|mensonge)|(?:blesse|illusion.*console|bonne\s+[aà]\s+dire|mensonge).*(?:v[ée]rit[ée])/i,
    concept1: "Vérité",
    concept2: "Illusion",
    lexiqueDefinitions: [
      {
        terme: "Vérité",
        definition: "Adéquation de la pensée et du discours avec la réalité objective, fidélité aux faits et refus du mensonge."
      },
      {
        terme: "Illusion",
        definition: "Croyance erronée engendrée par un désir inconscient, apportant un réconfort affectif immédiat au prix d'un aveuglement sur le réel."
      },
      {
        terme: "Préférer / Valeur",
        definition: "Accorder une primauté éthique et existentielle à un principe par rapport à un autre."
      }
    ],
    reformulationPattern: "Il s'agit de décider si l'exigence morale de lucidité et d'authenticité doit prévaloir en toutes circonstances, même au prix de la souffrance, ou si certaines illusions bienveillantes sont nécessaires pour rendre la vie humaine supportable.",
    tensionPhilosophique: "La vérité est la condition de la liberté et de la confiance morale ; pourtant, la dureté brutale de certains faits peut briser les âmes fragiles et détruire l'espérance.",
    problemeCourt: "La lucidité de la vérité vaut-elle le prix de la souffrance ?",
    aspect1: "dans quelle mesure le devoir de vérité s'impose-t-il de façon inconditionnelle ?",
    aspect2: "toutefois, certaines illusions ne sont-elles pas nécessaires à la vie ?",
    axe1: {
      title: "La recherche et l'acceptation de la vérité constituent un impératif moral catégorique et la condition de l'émancipation",
      significance: "vivre dans l'illusion, même dorée, abaisse l'homme au rang d'enfant dupé et dépossédé de sa souveraineté",
      overview: "Affirmer la primauté de la vérité qui blesse revient à poser la dignité de la raison au-dessus du confort sensible. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Le devoir de véracité est un devoir absolu envers l'humanité, sans lequel aucun pacte social ni confiance mutuelle ne sont possibles.",
          author: "Emmanuel Kant",
          work: "D'un prétendu droit de mentir par humanité",
          quote: "La véracité dans les déclarations que l'on ne peut éviter est le devoir formel de l'homme envers chacun, quelque grand inconvénient qu'il puisse en résulter pour lui ou pour un autre.",
          explanation: "Kant soutient que le mensonge, même animé par la compassion la plus sincère (comme pour cacher un ami poursuivi par des assassins), détruit la source même du droit en rendant toute parole suspecte. Tolérer des exceptions à la vérité, c'est saper la confiance universelle sur laquelle repose la dignité morale.",
          analyseIllustration: "Kant démontre avec rigueur que le devoir de vérité ne saurait être marchandé contre le soulagement d'une douleur passagère."
        },
        {
          statement: "La libération philosophique exige de sortir de la caverne des ombres et d'affronter l'éblouissement douloureux de la lumière.",
          author: "Platon",
          work: "La République (Livre VII, Allégorie de la caverne)",
          quote: "Au début, lorsqu'on le détacherait et qu'on le forcerait à se dresser subitement... il souffrirait et l'éblouissement l'empêcherait de regarder les objets dont il voyait autrefois les ombres.",
          explanation: "Platon montre que quitter les illusions rassurantes du conformisme et des croyances populaires provoque d'abord une vive souffrance chez le prisonnier libéré. Pourtant, seul celui qui supporte cette brûlure accède à la réalité des Idées et à la liberté véritable. Les ombres consolaient les esclaves, mais elles les maintenaient dans les fers.",
          analyseIllustration: "Cette allégorie établit que la vérité, bien que blessante à ses débuts, est la seule voie de la délivrance humaine."
        },
        {
          statement: "Le courage de la vérité (le franc-parler de la parrhesia) est l'éthique même du sujet responsable.",
          author: "Michel Foucault",
          work: "Le Courage de la vérité : Le gouvernement de soi et des autres",
          quote: "La parrhesia est le courage de dire toute la vérité en prenant le risque de blesser, d'irriter ou d'indigner son interlocuteur.",
          explanation: "Dans l'Antiquité grecque, le parrhesiaste est celui qui refuse la flatterie hypocrite pour énoncer la vérité crue devant le tyran ou le peuple, dût-il y risquer sa vie ou briser une fausse concorde. Ce courage éthique purifie les relations humaines en chassant la tromperie.",
          analyseIllustration: "Foucault met en évidence que la vérité qui blesse est un acte d'honneur et de loyauté supérieure."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la vérité sans fard émancipe la raison et fonde la responsabilité éthique. Toutefois, l'homme peut-il supporter sans défaillir la nudité absolue du tragique, et n'y a-t-il pas des illusions indispensables à la survie psychique ?",
    axe2: {
      title: "L'illusion protectrice et le ménagement de la vérité répondent à une nécessité vitale et à un devoir élémentaire de compassion",
      significance: "la vérité brutale peut être une arme de cruauté lorsque son annonce détruit l'espérance sans offrir de remède",
      overview: "Dire que l'illusion qui console est parfois préférable revient à reconnaître les limites psychologiques et existentielles de l'homme. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'art et l'illusion sont indispensables pour ne pas périr étouffé par la vérité nue et désespérante de la vie.",
          author: "Friedrich Nietzsche",
          work: "La Naissance de la tragédie & Par-delà bien et mal",
          quote: "Nous avons l'art afin de ne pas mourir de la vérité.",
          explanation: "Pour Nietzsche, la vérité scientifique et métaphysique dévoile un monde dépourvu de finalité divine, indifférent à la douleur humaine et voué au chaos absurde. Si l'homme n'était armé que de cette vérité glaciale, il sombrerait dans le nihilisme et la prostration. L'illusion créatrice, le voile d'Apollon et la transfiguration esthétique sont les gardiens de la volonté de puissance et de la vie.",
          analyseIllustration: "Nietzsche prouve avec éclat que l'illusion a une fonction vitale que la vérité scientiste détruit imprudemment."
        },
        {
          statement: "L'éthique de la sollicitude médicale et de la charité impose de ne pas anéantir un mourant par la violence d'une vérité désespérante.",
          author: "Vladimir Jankélévitch",
          work: "Le Mensonge (Traité des vertus)",
          quote: "La vérité sans amour est une vérité barbare ; il y a des mensonges d'amour qui sont infiniment plus purs que des vérités cruelles.",
          explanation: "Réfutant le rigorisme impitoyable de Kant, Jankélévitch soutient que débiter la vérité comme une massue sur un malade au seuil de l'agonie pour satisfaire sa propre bonne conscience moralisatrice relève du sadisme. L'amour d'autrui et la tendresse commandent parfois de préserver une lueur d'illusion pour apaiser ses derniers instants.",
          analyseIllustration: "Jankélévitch réhabilite le mensonge charitable comme le couronnement de la véritable bonté humaine."
        },
        {
          statement: "L'illusion religieuse ou affective remplit un rôle de consolation protectrice indispensable contre les angoisses existentielles.",
          author: "Sigmund Freud",
          work: "L'Avenir d'une illusion",
          quote: "Les illusions nous sont chères parce qu'elles nous épargnent des souffrances et nous permettent de jouir de satisfactions compensatrices.",
          explanation: "Freud analyse les croyances consolatrices comme des réponses indispensables aux terreurs de la nature, à la précarité de l'existence et à l'énigme de la mort. Vouloir dépouiller brutalement une âme vulnérable de son rempart consolateur avant qu'elle n'ait développé la force psychique de l'affronter revient à la détruire.",
          analyseIllustration: "Freud montre que l'illusion n'est pas une simple bêtise, mais un mécanisme psychologique de survie."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est apparu que la recherche de la vérité demeure la fin la plus noble de l'esprit et le socle de toute responsabilité authentique.",
      reponseDefinitive: "Toutefois, nous affirmons qu'il est erroné de sacraliser une vérité sans cœur : assener une vérité cruelle qui brise sans guérir n'est pas de la grandeur morale, mais de l'insensibilité.",
      elargissement: "En ce qui nous concerne, nous dirons que la véritable sagesse consiste à cultiver le courage de regarder la vérité en face pour soi-même, tout en usant d'une infinie délicatesse et d'une compassion bienveillante envers la vulnérabilité d'autrui."
    }
  },

  // --------------------------------------------------------------------------
  // 2. TOUTE VÉRITÉ PEUT-ELLE ÊTRE DÉMONTRÉE ?
  // --------------------------------------------------------------------------
  {
    id: "verite-demonstration-croyance",
    label: "Vérité & Démonstration (Raison déductive vs Intuition et Principes premiers)",
    triggerRegex: /(?:v[ée]rit[ée]).*(?:d[ée]montr|preuve|ind[ée]montrable)|(?:d[ée]montr|preuve|ind[ée]montrable).*(?:v[ée]rit[ée])/i,
    concept1: "Vérité",
    concept2: "Démonstration",
    lexiqueDefinitions: [
      {
        terme: "Vérité",
        definition: "Propriété d'un énoncé ou d'un jugement conforme au réel ou à la cohérence logique formelle."
      },
      {
        terme: "Démonstration",
        definition: "Raisonnement déductif contraignant qui établit la vérité nécessaire d'une proposition à partir de prémisses admises comme vraies."
      },
      {
        terme: "Intuition / Axiome",
        definition: "Saisie immédiate et évidente d'une vérité par l'esprit sans intermédiaire discursif."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si la certitude rationnelle d'une vérité dépend exclusivement de sa démonstration méthodique par la preuve, ou s'il existe des vérités premières, intuitives ou sensibles que la raison ne peut ni ne doit démontrer.",
    tensionPhilosophique: "La démonstration mathématique et logique est le modèle suprême de la certitude ; pourtant, toute démonstration repose sur des principes de départ qui, sous peine de régression à l'infini, sont indémontrables.",
    problemeCourt: "La vérité se réduit-elle à ce qui est démontrable ?",
    aspect1: "dans quelle mesure la démonstration rationnelle garantit-elle toute vérité ?",
    aspect2: "toutefois, ne saisit-on pas les principes premiers par intuition immédiate ?",
    axe1: {
      title: "La démonstration rigoureuse est le garant indispensable de la vérité objective, protégeant l'esprit de l'erreur et de l'opinion subjective",
      significance: "ce qui n'est pas étayé par une chaîne déductive nécessaire ne possède que la valeur d'une croyance contestable",
      overview: "Affirmer que la vérité exige d'être démontrée revient à exiger la justification rationnelle de tout savoir. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La méthode déductive géométrique garantit une certitude inébranlable en ne recevant rien pour vrai qui n'ait été prouvé pas à pas.",
          author: "René Descartes",
          work: "Discours de la méthode (Deuxième partie)",
          quote: "Ces longues chaînes de raisons, toutes simples et faciles, dont les géomètres ont coutume d'user... m'avaient donné occasion de m'imaginer que toutes les choses qui peuvent tomber sous la connaissance des hommes s'entresuivent de même façon.",
          explanation: "Descartes érige la déduction mathématique en idéal de toute la philosophie. En divisant chaque difficulté en parcelles et en conduisant par ordre ses pensées du plus simple au plus composé, l'esprit ne laisse aucune place au doute. Toute vérité scientifique doit pouvoir être validée par une démarche rationnelle vérifiable.",
          analyseIllustration: "Descartes prouve que la démarche démonstrative est le rempart souverain contre les chimères de l'imagination."
        },
        {
          statement: "Le modèle aristotélicien du syllogisme scientifique démontre la nécessité de la conclusion à partir de la validité formelle des prémisses.",
          author: "Aristote",
          work: "Seconds Analytiques (Livre I)",
          quote: "Nous pensons que nous connaissons une chose de manière absolue... quand nous pensons connaître la cause par laquelle la chose est, et que cette cause ne peut être autrement.",
          explanation: "Aristote montre que le savoir véritable (l'épistémè) n'est pas une simple opinion vraie par hasard, mais la connaissance démontrée par la cause. Le syllogisme démonstratif garantit que la vérité découle nécessairement des relations logiques entre les concepts.",
          analyseIllustration: "Cette logique classique établit que seule la démonstration confère au savoir son caractère universel et nécessaire."
        },
        {
          statement: "La vérification expérimentale et la réfutabilité logique sont les critères contemporains de la vérité scientifique.",
          author: "Karl Popper",
          work: "La Logique de la découverte scientifique",
          quote: "Les théories ne sont jamais vérifiables empiriquement de manière définitive, mais elles doivent pouvoir être réfutées par l'épreuve des faits.",
          explanation: "Popper montre qu'une affirmation qui ne peut être ni démontrée logiquement ni confrontée à des tests empiriques susceptibles de la falsifier relève du dogmatisme ou du mythe. La vérité rationnelle exige des comptes et doit prouver sa robustesse face aux objections.",
          analyseIllustration: "Popper montre que la rationalité scientifique récuse toute vérité proclamée sans mise à l'épreuve."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la démonstration offre la plus haute garantie d'objectivité. Toutefois, si toute vérité devait être démontrée, ne faudrait-il pas démontrer les prémisses de la démonstration, et ainsi de suite à l'infini ?",
    axe2: {
      title: "Les vérités premières, les axiomes logiques et les évidences du cœur sont indémontrables et constituent le socle de toute démonstration",
      significance: "l'esprit dispose d'une faculté intuitive de saisie immédiate des principes sans laquelle le raisonnement ne pourrait jamais commencer",
      overview: "Dire que toute vérité ne peut être démontrée revient à reconnaître les limites internes de la déduction discursive. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Le cœur a ses raisons que la raison ne connaît point, et les principes premiers se sentent plutôt qu'ils ne se prouvent.",
          author: "Blaise Pascal",
          work: "Pensées (Lafuma 110 / Brunschvicg 282)",
          quote: "Nous connaissons la vérité non seulement par la raison, mais encore par le cœur ; c'est de cette dernière sorte que nous connaissons les premiers principes... et c'est sur ces connaissances du cœur et de l'instinct qu'il faut que la raison s'appuie.",
          explanation: "Pascal observe qu'on ne peut pas démontrer qu'il y a trois dimensions dans l'espace, ni que le temps passe, ni que les nombres sont infinis : nous le « sentons » avec une certitude absolue. Vouloir démontrer ces principes d'évidence immédiate est aussi ridicule que vouloir demander au sentiment de démontrer des propositions mathématiques complexes.",
          analyseIllustration: "Pascal prouve de manière magistrale que l'impuissance de la raison à tout démontrer n'est pas le triomphe du doute, mais l'hommage rendu à l'intuition du cœur."
        },
        {
          statement: "La régression à l'infini dans les démonstrations est absurde : il faut nécessairement des principes premiers indémontrables mais évidents.",
          author: "Aristote",
          work: "Métaphysique (Livre Gamma, chapitre 4)",
          quote: "C'est une ignorance que de ne pas savoir de quelles choses il faut chercher une démonstration et de quelles choses il ne le faut pas. Il est absolument impossible de tout démontrer ; car on irait à l'infini, en sorte que même ainsi il n'y aurait pas de démonstration.",
          explanation: "Aristote formule le principe de non-contradiction : « il est impossible qu'un même attribut appartienne et n'appartienne pas en même temps au même sujet sous le même rapport ». Ce principe ne peut être démontré sans être déjà présupposé dans la démonstration même. Il est la condition indémontrable de tout discours cohérent.",
          analyseIllustration: "Aristote démontre logiquement la nécessité de bornes indémontrables à la déduction."
        },
        {
          statement: "Les théorèmes d'incomplétude mathématique démontrent formellement qu'aucun système formel cohérent ne peut démontrer toutes ses vérités.",
          author: "Kurt Gödel",
          work: "Sur les propositions formellement indécidables des Principia Mathematica (1931)",
          quote: "Dans tout système formel consistant contenant l'arithmétique élémentaire, il existe des propositions vraies qui ne sont pas démontrables au sein du système.",
          explanation: "Par un exploit logique décisif au XXe siècle, Gödel a ruiné l'espoir de Hilbert d'un système mathématique autosuffisant. Il y aura toujours des vérités arithmétiques incontestables que la démonstration mécanique interne est incapable de prouver. La vérité dépasse intrinsèquement la démontrabilité.",
          analyseIllustration: "Ce théorème épistémologique fondamental consacre que la vérité est plus vaste que la seule preuve formelle."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît indéniable que la démonstration rationnelle est l'instrument le plus sûr pour valider la justesse de nos thèses et dissiper les illusions.",
      reponseDefinitive: "Toutefois, nous affirmons qu'il est faux de prétendre que toute vérité peut être démontrée : la démonstration elle-même s'enracine dans des principes premiers, des intuitions et des évidences indémontrables mais lumineuses.",
      elargissement: "En ce qui nous concerne, nous dirons que la maturité philosophique consiste à honorer l'intelligence discursive sans mépriser la clarté intuitive qui lui offre son point d'appui."
    }
  },

  // --------------------------------------------------------------------------
  // 3. PEUT-ON PENSER SANS LES MOTS ? / LANGAGE & PENSÉE
  // --------------------------------------------------------------------------
  {
    id: "langage-pensee-indicible",
    label: "Langage & Pensée (Indépendance de la pensée vs Inséparabilité du mot)",
    triggerRegex: /(?:peut-on|est-il\s+possible).*(?:penser.*(?:sans.*mot|sans.*langage)|mot.*penser)|(?:penser.*(?:sans.*mot|sans.*langage)|mot.*penser).*(?:peut-on|est-il\s+possible)|(?:langage.*trahit.*pens[eé]e)/i,
    concept1: "Langage",
    concept2: "Pensée",
    lexiqueDefinitions: [
      {
        terme: "Pensée",
        definition: "Activité de l'esprit formant des concepts, concevant des jugements et organisant des raisonnements réfléchis."
      },
      {
        terme: "Mot / Langage",
        definition: "Système de signes conventionnels articulés permettant de fixer et de communiquer les représentations mentales."
      },
      {
        terme: "Indicible / Ineffable",
        definition: "Ce qui est ressenti avec une plénitude ou une intensité telle que le langage humain s'avère impuissant à l'exprimer fidèlement."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si la pensée préexiste de façon pure et silencieuse dans l'esprit avant de s'incarner dans les mots, ou si elle ne prend consistance, rigueur et existence réelle que par et dans le tissu du langage.",
    tensionPhilosophique: "Nous éprouvons souvent le sentiment douloureux que nos mots trahissent la richesse de nos intuitions intimes ; pourtant, dès que nous tentons d'éclairer une idée, nous sommes contraints de recourir aux mots pour la formuler.",
    problemeCourt: "La pensée peut-elle exister sans le langage ?",
    aspect1: "dans quelle mesure le langage s'avère-t-il impuissant à exprimer notre pensée ?",
    aspect2: "toutefois, n'est-ce pas par les mots que la pensée prend forme et consistance ?",
    axe1: {
      title: "L'expérience intérieure témoigne d'une intuition pure et d'une richesse sensible que les mots communs figent et appauvrissent",
      significance: "le mot général et utilitaire trahit la singularité ineffable de la conscience vivante",
      overview: "Affirmer que l'on peut penser sans les mots revient à défendre la primauté de l'intuition sensible et de l'intériorité psychique. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Les mots du langage social collent une étiquette grossière sur les nuances subtiles et mouvantes de notre conscience intérieure.",
          author: "Henri Bergson",
          work: "Essai sur les données immédiates de la conscience",
          quote: "Nous ne voyons pas les choses mêmes ; nous nous bornons, le plus souvent, à lire des étiquettes collées sur elles... Le mot, aux contours bien arrêtés, le mot brutal, qui emmagasine ce qu'il y a de stable, d'ordinaire et par conséquent d'impersonnel dans les impressions de l'humanité, écrase ou tout au moins recouvre les impressions délicates et fugitives de notre conscience individuelle.",
          explanation: "Bergson distingue le temps spatialisé et mécanique de la durée vécue continue. Le langage a été façonné pour l'action pratique et la communication sociale, non pour l'introspection métaphysique. Quand nous disons « je ressens de l'amour ou de la tristesse », nous utilisons un mot commun qui masque l'originalité unique et ineffable de notre état d'âme.",
          analyseIllustration: "Bergson démontre que l'intuition spirituelle précède le langage et se trouve altérée par son armature rigide."
        },
        {
          statement: "L'expérience esthétique, musicale et poétique touche à des vérités émotionnelles et spirituelles que nul discours rationnel ne saurait décrire.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "La musique est un langage universel au plus haut degré... Elle exprime non pas telle ou telle joie déterminée, mais la joie même en son essence.",
          explanation: "Pour Schopenhauer, les mots n'expriment que des représentations du monde phénoménal, tandis que la musique saisit directement l'essence même du Vouloir-vivre métaphysique. Le compositeur pense par sons purs et harmonies profondes sans avoir besoin du moindre concept verbal.",
          analyseIllustration: "L'art musical prouve l'existence d'une pensée sensible transcendante affranchie des mots articulés."
        },
        {
          statement: "Le silence et la méditation intérieure révèlent une contemplation mystique au-delà de toute articulation verbale.",
          author: "Ludwig Wittgenstein",
          work: "Tractatus logico-philosophicus (Proposition 7)",
          quote: "Sur ce dont on ne peut parler, il faut garder le silence.",
          explanation: "Wittgenstein pose que le langage ne peut décrire que les faits empiriques du monde. Ce qui touche au sens de la vie, au divin, à la morale et à l'éthique ne se dit pas avec des phrases discursives, cela se montre (« das Mystische »). L'essentiel de l'existence humaine habite cette sphère silencieuse que les mots profanent.",
          analyseIllustration: "Wittgenstein établit les limites formelles du dicible face à la profondeur de ce qui est contemplé en silence."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que nous éprouvons la nostalgie d'un indicible pur au-delà des mots. Toutefois, une pensée qui n'a pas trouvé ses mots est-elle véritablement une pensée, ou n'est-elle qu'une vague sensation informe incapable de se juger elle-même ?",
    axe2: {
      title: "C'est dans le mot que la pensée prend forme, clarté et réalité objective : vouloir penser sans langage est une illusion nébuleuse",
      significance: "le langage n'est pas un habit extérieur de la pensée mais le corps vivant sans lequel celle-ci demeure inconsciente",
      overview: "Dire que l'on ne saurait penser sans les mots revient à identifier le concept à son élaboration symbolique. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Vouloir penser sans les mots est une tentative insensée : c'est dans le mot que nous pensons et prenons conscience de nos idées.",
          author: "G.W.F. Hegel",
          work: "Encyclopédie des sciences philosophiques (§ 462)",
          quote: "C'est dans les mots que nous pensons. Nous n'avons conscience de nos pensées déterminées et réelles que lorsque nous leur donnons la forme objective... Vouloir penser sans les mots est une tentative insensée.",
          explanation: "Hegel dénonce la prétention prétentieuse de l'ineffable : celui qui prétend avoir une pensée sublime mais qui ne trouve pas les mots pour l'exprimer n'a en réalité aucune pensée claire, mais seulement une nébuleuse confuse d'émotions. C'est l'effort de mise en mots qui forge la rigueur logique et élève l'esprit à la conscience de soi.",
          analyseIllustration: "Hegel établit de manière définitive que le langage est l'incarnation indispensable de la liberté spirituelle."
        },
        {
          statement: "La pensée et le langage sont inséparables comme le recto et le verso d'une même feuille de papier.",
          author: "Ferdinand de Saussure",
          work: "Cours de linguistique générale",
          quote: "Prise en elle-même, la pensée est comme une nébuleuse où rien n'est nécessairement délimité... La langue peut être comparée à une feuille de papier : la pensée est le recto et le son est le verso ; on ne peut découper le recto sans découper en même temps le verso.",
          explanation: "Le linguiste montre qu'avant l'articulation linguistique, la pensée humaine n'est qu'une masse amorphe et indistincte. Ce sont les découpages signifiants des mots qui structurent les concepts et permettent de distinguer les objets, les nuances et les relations du réel.",
          analyseIllustration: "Saussure prouve scientifiquement la coextensivité structurelle de la pensée et du signe linguistique."
        },
        {
          statement: "La maîtrise du vocabulaire conditionne directement l'amplitude de la pensée critique et de la liberté politique.",
          author: "George Orwell",
          work: "1984 (Appendice sur les principes du Novlangue)",
          quote: "L'objet du Novlangue n'était pas seulement de fournir un mode d'expression aux idées... mais de rendre toute autre pensée impossible.",
          explanation: "Orwell démontre que si l'on détruit les mots de la nuance, de la justice et de la révolte, la pensée elle-même devient incapable de concevoir la contestation. On ne peut penser ce que l'on ne peut nommer. Le vocabulaire n'est pas un accessoire décoratif, mais l'horizon même de notre intelligence du monde.",
          analyseIllustration: "Orwell confirme tragiquement que l'appauvrissement de la langue entraîne inéluctablement l'atrophie de la pensée."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît que la sensation brute et l'émotion esthétique procurent le sentiment d'une intériorité mystérieuse qui déborde le langage utilitaire.",
      reponseDefinitive: "Toutefois, nous affirmons qu'une véritable pensée philosophique ne peut exister sans les mots : penser, c'est concevoir, lier, juger, et toutes ces opérations requièrent l'instrument universel et lumineux du langage.",
      elargissement: "En ce qui nous concerne, nous dirons que la tâche de l'homme n'est pas de rêver d'un silence stérile, mais de travailler sans relâche à enrichir sa langue pour donner aux pensées les plus hautes la plus éclatante clarté."
    }
  },

  // --------------------------------------------------------------------------
  // 4. PEUT-ON DOUTER DE TOUT ? / LE DOUTE ET LA VÉRITÉ
  // --------------------------------------------------------------------------
  {
    id: "doute-certitude-scepticisme",
    label: "Doute & Vérité (Doute radical et méthodique vs Limites du scepticisme et première certitude)",
    triggerRegex: /(?:peut-on|faut-il|doit-on|est-il\s+possible).*(?:douter\s+de\s+tout|douter\s+de\s+chacun|tout\s+remettre\s+en\s+cause)|(?:douter\s+de\s+tout|doute\s+radical|doute\s+hyperbolique)/i,
    concept1: "Doute",
    concept2: "Vérité",
    lexiqueDefinitions: [
      {
        terme: "Doute",
        definition: "Suspension du jugement face à une proposition dont la vérité n'est pas établie avec certitude absolue."
      },
      {
        terme: "Tout / Universalité",
        definition: "L'ensemble exhaustif des connaissances, des perceptions sensibles, des principes logiques et de l'existence même du monde."
      },
      {
        terme: "Certitude",
        definition: "État inébranlable de l'esprit qui adhère fermement à une vérité reconnue comme indubitable."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si le doute peut s'étendre sans exception à l'intégralité de nos représentations, jusqu'à suspendre toute certitude, ou si la démarche même du doute rencontre une limite infranchissable qui fonde la première vérité.",
    tensionPhilosophique: "Le doute est l'instrument critique indispensable pour rejeter les préjugés et les fausses croyances ; pourtant, poussé jusqu'à l'extrême, un doute absolu risquerait de paralyser la pensée et d'interdire toute action humaine.",
    problemeCourt: "Le doute peut-il s'étendre à l'universalité de nos certitudes ?",
    aspect1: "dans quelle mesure l'exigence critique impose-t-elle un doute radical qui n'épargne aucune opinion reçue ?",
    aspect2: "toutefois, l'acte même de douter ne révèle-t-il pas une certitude fondamentale indéracinable ?",
    axe1: {
      title: "L'exercice du doute méthodique et radical est la condition indispensable pour déraciner les préjugés et fonder un savoir solide",
      significance: "accorder créance aveugle aux sens ou aux traditions expose l'esprit à l'erreur permanente et à l'obscurantisme",
      overview: "Affirmer que l'on peut et doit douter de tout revient à poser l'autonomie critique de la raison contre toutes les autorités établies. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Nos sens nous trompent souvent, et il est prudent de ne jamais se fier entièrement à ce qui nous a une fois abusés.",
          author: "René Descartes",
          work: "Méditations métaphysiques (Première Méditation)",
          quote: "Tout ce que j'ai reçu jusqu'à présent pour le plus vrai et assuré, je l'ai appris des sens ou par les sens ; or j'ai quelquefois éprouvé que ces sens étaient trompeurs, et il est de la prudence de ne se fier jamais entièrement à ceux qui nous ont une fois trompés.",
          explanation: "Descartes entreprend de renverser l'édifice vermoulu de ses opinions d'enfance pour bâtir la science sur un roc inébranlable. Il passe au crible de l'hyperbole le témoignage sensible (illusions optiques, rêves où l'on croit être éveillé), et va jusqu'à supposer l'hypothèse d'un Malin Génie omnipotent pour éprouver si quelque certitude résiste à cette tempête.",
          analyseIllustration: "Descartes démontre que la radicalité du doute est l'outil méthodique indispensable pour purifier l'esprit de ses dogmes infantiles."
        },
        {
          statement: "La suspension générale du jugement (l'époché sceptique) délivre l'âme de l'angoisse et du dogmatisme arrogant.",
          author: "Sextus Empiricus",
          work: "Esquisses pyrrhoniennes",
          quote: "Le scepticisme est une faculté qui oppose les choses qui apparaissent et celles qui sont pensées... d'où nous arrivons d'abord à la suspension du jugement, et ensuite à la tranquillité de l'âme (ataraxie).",
          explanation: "Pour les sceptiques grecs, à chaque argument s'oppose un argument de force égale. Prétendre détenir la vérité absolue enferme l'homme dans la querelle stérile et l'inquiétude permanente. En acceptant de douter de tout ce qui dépasse les simples apparences immédiates, le sage atteint la paix de l'esprit.",
          analyseIllustration: "Sextus Empiricus érige le doute universel en art de vivre et en rempart contre le fanatisme."
        },
        {
          statement: "Le doute critique perpétuel est le cœur battant de la démarche scientifique moderne qui refuse les vérités intouchables.",
          author: "Karl Popper",
          work: "La Logique de la découverte scientifique",
          quote: "Une théorie qui n'est réfutable par aucun événement qui se puisse concevoir est dépourvue de caractère scientifique.",
          explanation: "Popper montre qu'une hypothèse scientifique n'est jamais définitivement prouvée : elle n'est que provisoirement corroborée, restant ouverte au doute et à la réfutation expérimentale. Dès qu'un savoir s'interdit d'être mis en doute, il cesse d'être une science vivante pour dégénérer en dogme stérile.",
          analyseIllustration: "Popper prouve que le progrès de la connaissance humaine se nourrit de la vigilance permanente du doute."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que le doute est la force vive de la raison critique qui brise les fausses certitudes. Toutefois, peut-on véritablement douter de tout sans contradiction interne, et le doute universel ne bute-t-il pas sur une vérité première ?",
    axe2: {
      title: "Le doute absolu s'auto-détruit : l'expérience même du doute atteste irréfutablement de l'existence de la conscience pensante",
      significance: "douter suppose un sujet qui doute, de sorte que l'acte du doute engendre simultanément la première et éclatante certitude",
      overview: "Dire que l'on ne peut pas douter de tout revient à reconnaître le point fixe indubitable au fondement de toute pensée. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Pour douter de tout, il faut penser, et pour penser, il faut nécessairement exister : le Cogito résiste victorieusement au doute le plus extrême.",
          author: "René Descartes",
          work: "Discours de la méthode (IVe partie) & Méditations métaphysiques",
          quote: "Mais aussitôt après je pris garde que, pendant que je voulais ainsi penser que tout était faux, il fallait nécessairement que moi qui le pensais fusse quelque chose. Et remarquant que cette vérité : Je pense, donc je suis, était si ferme et si assurée... je jugeai que je pouvais la recevoir sans scrupule pour le premier principe de la philosophie.",
          explanation: "Même si un Malin Génie m'abuse sur l'existence de mon corps, des arbres et des mathématiques, il ne peut faire que je ne sois rien tant que je pense être quelque chose. Le doute s'anéantit lui-même comme incertitude pour se muer en preuve triomphale : douter est un acte de pensée, donc le sujet pensant existe indubitablement.",
          analyseIllustration: "Descartes établit que le doute hyperbolique trouve en lui-même son terme et délivre la vérité fondamentale du sujet."
        },
        {
          statement: "Le scepticisme radical est intenable dans la vie pratique car vivre et agir exigent un socle de certitudes pragmatiques.",
          author: "David Hume",
          work: "Enquête sur l'entendement humain",
          quote: "La nature est toujours trop forte pour les principes... Un pyrrhonien peut bien s'amuser avec ses subtilités spéculatives, mais dès qu'il sort de sa chambre, ses doutes s'évanouissent comme une fumée.",
          explanation: "Hume reconnaît que la raison spéculative ne peut pas prouver rationnellement la causalité ou l'existence continue du monde extérieur. Cependant, l'homme ne peut pas douter que le feu brûle ou que le pain nourrit sous peine de mourir sur-le-champ. La coutume, l'instinct vital et l'action imposent des certitudes d'existence que le doute ne peut dissoudre.",
          analyseIllustration: "Hume démontre les limites naturelles et vitales du doute face aux nécessités de l'existence concrète."
        },
        {
          statement: "Pour que le doute ait un sens, il faut déjà admettre les règles du langage et des certitudes qui ne sont pas remises en question.",
          author: "Ludwig Wittgenstein",
          work: "De la certitude",
          quote: "Le doute qui doute de tout n'est plus un doute... Si tu voulais douter de tout, tu ne pourrais même pas douter de quoi que ce soit, car le jeu du doute présuppose lui-même la certitude.",
          explanation: "Wittgenstein explique que le doute ne flotte pas dans le vide : il n'a de consistance qu'à l'intérieur d'un système de propositions déjà tenues pour certaines (comme le sens des mots que nous employons ou l'existence de la langue). Vouloir douter de tout détruit le sol même sur lequel s'appuie l'interrogation.",
          analyseIllustration: "Wittgenstein prouve logiquement que le doute universel est une impossibilité linguistique et philosophique."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est apparu que le doute constitue la respiration critique de la pensée, sans laquelle l'homme demeurerait le jouet crédule des apparences et de l'autorité.",
      reponseDefinitive: "Toutefois, nous affirmons qu'il est impossible de douter de tout : non seulement l'acte même du doute révèle la certitude inébranlable du Cogito pensant, mais l'action et le langage reposent sur des évidences vitales indispensables.",
      elargissement: "En ce qui nous concerne, nous dirons que la maturité philosophique ne consiste pas à sombrer dans le scepticisme stérile, mais à faire du doute un instrument méthodique au service de la vérité, de la lucidité et de la liberté d'esprit."
    }
  }
];
