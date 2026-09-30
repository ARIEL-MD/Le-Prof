/**
 * BASE DE DONNÉES RELATIONNELLE DES CONCEPTS PHILOSOPHIQUES
 * =========================================================
 * Associe des couples conceptuels réels (plutôt que des mots isolés)
 * à une analyse rigoureuse :
 * - Lexique contextuel précis
 * - Tension philosophique réelle (pourquoi ce sujet fait-il difficulté ?)
 * - Problème sous forme de question courte et directe
 * - Deux aspects canoniques (« dans quelle mesure... ?, toutefois, ... ? »)
 * - Deux axes dialectiques complets avec au moins 3 arguments par axe
 * - Auteurs majeurs, œuvres précises, citations textuelles et analyses critiques
 * - Transition charnière et conclusion tripartite
 */

export interface PhiloArgumentData {
  statement: string;
  author: string;
  work: string;
  quote: string;
  explanation: string;
  analyseIllustration: string;
}

export interface PhiloRelationEntry {
  id: string;
  label: string;
  triggerRegex: RegExp;
  concept1: string;
  concept2?: string;
  lexiqueDefinitions: { terme: string; definition: string }[];
  reformulationPattern: string;
  tensionPhilosophique: string;
  introAmorces?: {
    definition?: string;
    constat?: string;
    citation?: {
      auteur: string;
      oeuvre: string;
      citation: string;
      explication: string;
      contreConstat: string;
    };
  };
  disambiguation?: {
    term: string;
    possibleMeanings: string[];
    retainedMeaning: string;
    justification: string;
  };
  problemeCourt: string;
  aspect1: string;
  aspect2: string;
  axe1: {
    title: string;
    significance: string;
    overview: string;
    arguments: PhiloArgumentData[];
  };
  transition: string;
  axe2: {
    title: string;
    significance: string;
    overview: string;
    arguments: PhiloArgumentData[];
  };
  conclusion: {
    bilanSynthese: string;
    reponseDefinitive: string;
    elargissement: string;
  };
}

export const PHILO_RELATIONS_DATABASE: PhiloRelationEntry[] = [
  // --------------------------------------------------------------------------
  // 1. TRAVAIL & LIBERTÉ / ALIÉNATION
  // --------------------------------------------------------------------------
  {
    id: "travail-liberte-alienation",
    label: "Travail & Liberté (Contrainte ou Émancipation)",
    triggerRegex: /(?:travail|ouvrier|labeur).*(?:lib[eé]r|libre|alien|contraint|esclav|servitude|affranchi|souffr)|(?:lib[eé]r|libre|alien|contraint|esclav|servitude|affranchi).*(?:travail|ouvrier|labeur)/i,
    concept1: "Travail",
    concept2: "Liberté",
    lexiqueDefinitions: [
      {
        terme: "Travail",
        definition: "Activité consciente, méthodique et transformatrice par laquelle l'être humain façonne la matière naturelle pour subvenir à ses besoins vitaux et réaliser ses facultés."
      },
      {
        terme: "Liberté",
        definition: "Pouvoir d'autonomie et de libre détermination de la volonté, s'arrachant aux déterminismes de la contrainte physique et de la servitude sociale."
      },
      {
        terme: "Aliénation / Contrainte",
        definition: "État de dépossession et d'asservissement où l'individu est assujetti à une puissance étrangère qui lui ôte la maîtrise de son existence."
      }
    ],
    reformulationPattern: "Il s'agit de savoir si l'activité laborieuse constitue par nature une servitude aliénante qui brise l'autonomie de l'homme, ou si elle représente le moyen fondamental par lequel il dompte la nature et s'émancipe.",
    tensionPhilosophique: "Le travail impose l'effort pénible, la fatigue corporelle et des contraintes économiques strictes qui font éprouver la perte de liberté ; pourtant, sans le travail, l'homme demeurerait esclave de la nature sauvage et de ses propres pulsions primitives.",
    introAmorces: {
      definition: "Défini comme l'activité consciente et méthodique par laquelle l'homme façonne la matière pour subvenir à ses besoins, le travail apparaît comme l'instrument par lequel l'homme s'arrache à la nature et conquiert son autonomie. Cependant, lorsqu'il est assujetti à l'exploitation économique ou à la répétition machinique, le labeur risque de devenir le lieu même de l'aliénation.",
      constat: "Dans l'organisation des sociétés humaines, l'effort laborieux est universellement célébré comme le ferment de l'émancipation matérielle et de la dignité morale. Pourtant, l'expérience concrète de la pénibilité corporelle et des servitudes sociales fait souvent ressentir le travail comme un fardeau aliénant.",
      citation: {
        auteur: "G.W.F. Hegel",
        oeuvre: "Phénoménologie de l'esprit",
        citation: "Le travail forme : c'est par le travail que la conscience accède à l'existence pour soi",
        explication: "Hegel établit que la transformation de la matière permet à l'esprit humain d'objectiver sa liberté et d'acquérir une autonomie véritable.",
        contreConstat: "Toutefois, la réalité historique du salariat et de la division capitaliste du travail rappelle que le labeur peut déposséder l'homme de son humanité."
      }
    },
    problemeCourt: "Le travail rend-il véritablement l'homme libre ?",
    aspect1: "dans quelle mesure le travail constitue-t-il un moyen d'émancipation humaine ?",
    aspect2: "toutefois, ne peut-il pas devenir une source d'aliénation ?",
    axe1: {
      title: "Le travail est la médiation indispensable par laquelle l'homme transforme la nature, discipline ses facultés et s'émancipe",
      significance: "l'activité laborieuse arrache le sujet à l'animalité pour forger sa liberté réelle dans la transformation du monde",
      overview: "Affirmer que le travail émancipe l'homme revient à reconnaître son rôle humanisant et formateur. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Par le travail et le service de la matière, la conscience servile prend conscience de son autonomie créatrice et dépasse le maître oisif.",
          author: "G.W.F. Hegel",
          work: "Phénoménologie de l'esprit (Dialectique du maître et de l'esclave)",
          quote: "Le travail est un désir refréné, une disparition retardée : le travail forme. La forme imprimée à l'objet extérieur devient la certitude de la propre conscience de soi.",
          explanation: "Tandis que le maître se borne à consommer passivement les objets préparés par l'esclave sans rien produire, l'esclave, par son travail transformateur, imprime sa pensée dans la matière brute. En voyant le monde transformé par ses mains, il découvre sa puissance créatrice et conquiert une liberté bien plus réelle que celle du maître.",
          analyseIllustration: "Hegel prouve ainsi que la véritable liberté ne réside pas dans l'oisiveté stérile mais dans l'objectivation active de l'esprit à travers la tâche laborieuse."
        },
        {
          statement: "Le travail discipline la nature animale en l'homme et l'arrache à la passivité morbide de l'ennui et des vices.",
          author: "Voltaire",
          work: "Candide ou l'Optimisme",
          quote: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.",
          explanation: "Voltaire conclut son conte philosophique en affirmant que l'homme doit 'cultiver son jardin' : le travail organise l'effort de la volonté, régule les passions destructrices et fournit à la société une prospérité morale et matérielle sans laquelle aucune paix durable n'est possible.",
          analyseIllustration: "Cette leçon voltairienne rappelle avec clarté que l'activité féconde prémunit l'être humain contre la déchéance et l'inconsistance éthique."
        },
        {
          statement: "Le travail confère à l'homme le sentiment sacré de sa dignité en lui permettant de participer à la création continue du monde.",
          author: "Emmanuel Mounier",
          work: "Manifeste au service du personnalisme",
          quote: "Tout travail travaille à faire un homme en même temps qu'une chose.",
          explanation: "Le personnalisme montre que même les activités manuelles les plus modestes possèdent une dimension spirituelle inaliénable : en travaillant avec conscience, le travailleur ne façonne pas seulement un objet extérieur, il forge son propre caractère, affirme sa responsabilité et sert la communauté humaine.",
          analyseIllustration: "Mounier élève ainsi le travail au rang d'un devoir d'accomplissement personnel et d'élévation fraternelle."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que le travail constitue un moyen privilégié d'émancipation humaine. Toutefois, ne peut-il pas devenir une source d'aliénation ?",
    axe2: {
      title: "Le travail peut cependant s'éprouver comme une pénible contrainte et dégénérer en aliénation destructrice de la liberté",
      significance: "l'effort laborieux impose une sujétion physique et sociale qui dépossède le sujet de sa liberté spontanée",
      overview: "Reconnaître que le travail peut aliéner l'homme suppose d'admettre la lourdeur des servitudes matérielles et l'exploitation économique. Plusieurs raisons fondent cette affirmation.",
      arguments: [
        {
          statement: "L'étymologie même du travail et la malédiction biblique originelle l'associent à la souffrance, au supplice et à la peine physique.",
          author: "Tradition philosophique & théologique",
          work: "Genèse (Ancien Testament)",
          quote: "Tu mangeras ton pain à la sueur de ton front jusqu'à ce que tu retournes à la terre.",
          explanation: "Dérivé du latin 'tripalium' (instrument d'entrave et de torture à trois pieux), le travail n'apparaît pas comme une joie spontanée mais comme une punition infligée à l'humanité pour réparer la rupture avec l'état d'innocence.",
          analyseIllustration: "Ce constat montre que le travail s'impose d'abord comme un fardeau inévitable imposé par la précarité biologique plutôt que comme un choix souverain."
        },
        {
          statement: "Dans les rapports de production capitalistes, le travail salarié dépossède l'ouvrier de son produit, de son humanité et de sa dignité.",
          author: "Karl Marx",
          work: "Manuscrits de 1844 (Premier manuscrit, « Le travail aliéné »)",
          quote: "L'ouvrier ne s'affirme pas dans son travail mais se nie, il ne s'y sent pas à l'aise mais malheureux ; il n'y déploie pas une libre énergie physique et spirituelle, mais mortifie son corps et ruine son esprit.",
          explanation: "Marx démontre que sous la division capitaliste du travail, l'ouvrier ne reconnaît plus le fruit de son activité qui devient une puissance hostile confisquée par le capital. Le travailleur ne se sent libre que dans ses fonctions purement animales (boire, manger, dormir) et animalisé dans ce qui devrait être son activité humaine fondamentale.",
          analyseIllustration: "Cette analyse marxiste établit de manière décisive que loin de libérer spontanément l'homme, le travail subordonné le dégrade en marchandise vivante."
        },
        {
          statement: "Le travail répétitif et mécanisé de l'ère industrielle vide l'existence de toute signification poétique et créatrice.",
          author: "Simone Weil",
          work: "La Condition ouvrière",
          quote: "La matière est dure, l'usine est un lieu où l'on brise la pensée pour n'obtenir que des gestes machinaux commandés par le chronomètre.",
          explanation: "Ayant elle-même partagé la condition des usines Renault, la philosophe met en évidence le sentiment de déréliction et d'écrasement moral provoqué par la cadence imposée par les machines, annihilant toute possibilité de méditation ou de liberté intérieure.",
          analyseIllustration: "Le témoignage de Simone Weil confirme que l'organisation scientifique du travail tend à asservir l'intelligence de l'homme au lieu de l'élever."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît que le travail, par l'effort méthodique de transformation du réel, arrache l'homme à la nécessité biologique et forge son autonomie.",
      reponseDefinitive: "Toutefois, force est de reconnaître que soumis à la contrainte servile ou à l'exploitation économique, le travail dépossède le sujet et aliène son humanité.",
      elargissement: "En ce qui nous concerne, nous dirons que le travail ne libère véritablement que s'il est subordonné à la dignité de la personne et à l'épanouissement moral de la communauté."
    }
  },

  // --------------------------------------------------------------------------
  // 2. ÉTAT & LIBERTÉ / LOI / VIOLENCE
  // --------------------------------------------------------------------------
  {
    id: "etat-liberte-loi",
    label: "État & Liberté (Obstacle ou Condition de la Liberté)",
    triggerRegex: /(?:etat|gouvernement|pouvoir politique|loi|lois).*(?:lib[eé]r|libre|menace|ennemi|opprim|obstacle|garant)|(?:lib[eé]r|libre).*(?:etat|gouvernement|pouvoir politique|loi|lois)/i,
    concept1: "État",
    concept2: "Liberté",
    lexiqueDefinitions: [
      {
        terme: "État",
        definition: "Organisation politique souveraine qui exerce son autorité juridique et administrative sur une population déterminée et un territoire délimité."
      },
      {
        terme: "Liberté",
        definition: "Droit pour chaque individu de penser et d'agir conformément à la raison sans être assujetti à l'arbitraire ou à la tyrannie d'autrui."
      },
      {
        terme: "Loi",
        definition: "Règle générale, impersonnelle et obligatoire promulguée par l'autorité légitime pour instaurer l'ordre et l'équité au sein de la cité."
      }
    ],
    reformulationPattern: "La question posée examine si l'appareil étatique et ses lois coercitives constituent une entrave fatale à l'indépendance de l'individu, ou s'ils représentent au contraire le rempart sans lequel aucune liberté effective ne saurait exister.",
    tensionPhilosophique: "D'un côté, l'État ordonne, interdit et dispose du monopole de la violence légitime, ce qui bride les impulsions spontanées ; de l'autre, sans l'État, la loi du plus fort règnerait, plongeant les hommes dans une insécurité meurtrière où nul ne serait libre.",
    problemeCourt: "L'État est-il l'ennemi de la liberté ?",
    aspect1: "dans quelle mesure l'État peut-il sembler attentatoire à la liberté individuelle ?",
    aspect2: "toutefois, la loi n'est-elle pas la condition même de la liberté de tous ?",
    axe1: {
      title: "L'État exerce une domination coercitive qui menace l'autonomie individuelle et peut dégénérer en appareil d'oppression",
      significance: "l'institution étatique centralise la contrainte et subordonne les consciences à une puissance souveraine redoutable",
      overview: "Affirmer que l'État s'oppose à la liberté s'appuie sur la mise en évidence de ses dérives autoritaires et de sa nature contraignante. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La pensée anarchiste démontre que l'État repose consubstantiellement sur la dépossession de la souveraineté du peuple au profit de gouvernants autoritaires.",
          author: "Mikhaïl Bakounine",
          work: "Étatisme et Anarchie",
          quote: "L'État est un vaste cimetière où viennent s'enterrer toutes les manifestations de la vie individuelle.",
          explanation: "Pour les anarchistes, même démocratique, l'État demeure une machine bureaucratique et militaire qui impose l'obéissance aveugle. Sous couvert de maintenir l'ordre public, il étouffe les libertés réelles, militarise les esprits et confisque la liberté d'initiative des citoyens.",
          analyseIllustration: "Bakounine met ainsi en garde contre l'illusion d'un pouvoir étatique bienveillant qui ne ferait que masquer l'oppression institutionnalisée."
        },
        {
          statement: "Dans la doctrine marxiste, l'État n'est pas un arbitre neutre mais l'instrument répressif d'une classe pour dominer la majorité exploitée.",
          author: "Karl Marx & Friedrich Engels",
          work: "Manifeste du Parti communiste",
          quote: "Le gouvernement moderne n'est qu'un comité qui gère les affaires communes de toute la classe bourgeoise.",
          explanation: "Marx dévoile que l'appareil d'État (justice, police, armée) a pour véritable fonction historique de protéger les privilèges de propriété des puissants, maintenant les prolétaires dans une servitude économique déguisée en égalité juridique fictive.",
          analyseIllustration: "Cette critique matérialiste montre que la liberté promise par l'État bourgeois n'est bien souvent qu'un leurre formel sans portée concrète."
        },
        {
          statement: "L'État moderne tend à développer une surveillance tentaculaire et un contrôle total sur l'existence intime des individus.",
          author: "Friedrich Nietzsche",
          work: "Ainsi parlait Zarathoustra (De la nouvelle idole)",
          quote: "L'État, c'est le plus froid des monstres froids. Il ment froidement ; et voici le mensonge qui rampe de sa bouche : « Moi, l'État, je suis le peuple ».",
          explanation: "Nietzsche dénonce l'État comme un fétiche moderne qui uniformise les esprits, détruit les individualités vigoureuses et s'arroge le droit de régenter la morale des hommes pour les transformer en troupeaux dociles.",
          analyseIllustration: "Le diagnostic nietzschéen alerte l'humanité contre la dévotion servile portée à la puissance publique au détriment de la souveraineté de l'esprit."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que l'État dispose d'une puissance redoutable capable d'étouffer l'indépendance des citoyens. Toutefois, sans la puissance publique et la loi commune, la liberté individuelle ne serait-elle pas livrée à l'arbitraire sauvage de la violence mutuelle ?",
    axe2: {
      title: "L'État de droit est le garant indispensable de la liberté authentique en substituant la justice à la loi brutale du plus fort",
      significance: "l'ordre juridique étatique institue la paix civile et garantit les droits fondamentaux de chaque citoyen",
      overview: "Dire que l'État protège et fonde la liberté revient à reconnaître qu'il n'y a nulle liberté concevable sans lois protectrices. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Dans l'état de nature sans puissance commune, la liberté sauvage n'est qu'un droit précaire voué à la terreur et à la guerre perpétuelle.",
          author: "Thomas Hobbes",
          work: "Léviathan (Chapitre XIII)",
          quote: "À l'état de nature, la vie de l'homme est solitaire, indigente, dégoûtante, animale et brève, car c'est la guerre de chacun contre chacun.",
          explanation: "Hobbes démontre avec une rigueur implacable que lorsque chaque homme a le droit de tout faire, nul n'est véritablement en sécurité. C'est en déléguant leur droit de se gouverner eux-mêmes au souverain que les hommes créent l'État protecteur, échangeant une liberté illusoire et mortifère contre une paix civile durable.",
          analyseIllustration: "Hobbes prouve ainsi que l'État n'est pas le destructeur de la liberté, mais la digue indispensable qui préserve l'humanité du chaos fratricide."
        },
        {
          statement: "En se soumettant à la loi républicaine issue de la volonté générale, le citoyen n'obéit qu'à lui-même et accède à la véritable liberté civile et morale.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social (Livre I, Chapitre VIII)",
          quote: "L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté.",
          explanation: "Rousseau opère une distinction lumineuse entre l'indépendance animale (faire ce qui plaît sur le moment) et la liberté politique (participer à l'élaboration de la loi commune). En obéissant à des lois justes que tous ont consenties, nul n'est soumis à la volonté particulière d'un tyran.",
          analyseIllustration: "Rousseau fonde ainsi la démonstration incontestable que la loi démocratique n'entrave point la liberté, elle en est la consécration sublime."
        },
        {
          statement: "La fin ultime et la raison d'être véritable de l'État sont d'émanciper les esprits de la peur et de cultiver la libre pensée des citoyens.",
          author: "Baruch Spinoza",
          work: "Traité théologico-politique (Chapitre XX)",
          quote: "La fin de l'État est en réalité la liberté.",
          explanation: "Spinoza réfute l'idée d'un État fondé sur la terreur ou le dressage. Pour lui, l'État a pour devoir d'assurer la sécurité physique des citoyens afin que leurs facultés intellectuelles et rationnelles puissent s'épanouir librement dans le respect des croyances d'autrui.",
          analyseIllustration: "Cette conception spinoziste démontre avec noblesse que l'État n'atteint sa légitimité suprême qu'en favorisant l'autonomie critique et la dignité de chacun."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est établi que l'État, s'il dévie vers le despotisme ou la toute-puissance aveugle, peut constituer un danger mortel pour les droits fondamentaux.",
      reponseDefinitive: "Toutefois, nous affirmons qu'un État républicain fondé sur la séparation des pouvoirs et la souveraineté de la loi est le seul garant de la liberté civile et de l'équité.",
      elargissement: "En ce qui nous concerne, nous dirons que la liberté ne s'épanouit pas dans le rejet stérile des lois, mais dans la vigilance citoyenne qui veille sans cesse à ce que l'État demeure le serviteur du bien commun."
    }
  },

  // --------------------------------------------------------------------------
  // 3. ART & NATURE / IMITATION / VÉRITÉ
  // --------------------------------------------------------------------------
  {
    id: "art-nature-imitation",
    label: "Art & Nature (Simple Imitation ou Dévoilement de la Vérité)",
    triggerRegex: /(?:art|artiste|oeuvre d.art|esthetique).*(?:imitation|nature|imiter|copie|refl|reproduct)|(?:imitation|nature|imiter|copie).*(?:art|artiste|oeuvre d.art)/i,
    concept1: "Art",
    concept2: "Nature",
    lexiqueDefinitions: [
      {
        terme: "Art",
        definition: "Création esthétique désintéressée par laquelle la conscience humaine exprime des formes sensibles harmonieuses porteuses de signification spirituelle."
      },
      {
        terme: "Imitation (Mimêsis)",
        definition: "Reproduction fidèle, copie conforme ou duplication passive des apparences visibles de la réalité extérieure."
      },
      {
        terme: "Nature",
        definition: "Ordre physique spontané et vivant de l'univers matériel, antérieur et extérieur à la fabrication intentionnelle humaine."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si la création artistique se réduit à un exercice stérile de reproduction mimétique des éléments de la nature, ou si elle constitue une invention spirituelle qui révèle ce que la nature ne peut exprimer d'elle-même.",
    tensionPhilosophique: "Si l'art ne fait que reproduire la nature, il reste toujours inférieur à son modèle vivant et apparaît inutile ; mais s'il s'éloigne totalement du réel, il risque de sombrer dans l'incompréhension et l'arbitraire sans repère.",
    problemeCourt: "L'art est-il une simple imitation de la nature ?",
    aspect1: "dans quelle mesure l'art se réduit-il à l'imitation de la nature ?",
    aspect2: "toutefois, l'œuvre d'art ne dévoile-t-elle pas une vérité supérieure ?",
    axe1: {
      title: "L'art s'est longtemps pensé comme imitation du réel, mais cette reproduction mimétique s'avère superficielle et décevante",
      significance: "la thèse de l'art-imitation subordonne le génie créateur à la répétition passive des données de la perception sensible",
      overview: "Affirmer que l'art n'est qu'une imitation conduit à constater la vanité d'une copie qui demeure toujours en retrait face à la perfection vivante de la nature. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Platon condamne l'imitation artistique comme une illusion trompeuse, une copie d'ombre éloignée de trois degrés de la vérité intelligible.",
          author: "Platon",
          work: "La République (Livre X)",
          quote: "L'art d'imiter est donc bien éloigné du vrai, et s'il produit tant de choses, c'est qu'il ne touche qu'à une petite partie de chaque objet, et cette partie n'est qu'un fantôme.",
          explanation: "Platon prend l'exemple du lit : le lit idéal est créé par le démiurge, le lit matériel par le menuisier, et le peintre ne fait que peindre l'apparence sensible de ce lit matériel. En dupant les yeux par la perspective, l'artiste flatte la partie la plus irrationnelle de l'âme humaine et nous éloigne de l'Idée véritable.",
          analyseIllustration: "Platon démontre ainsi les limites épistémologiques et morales de la pure imitation sensible, incapable de nous élever au savoir véritable."
        },
        {
          statement: "La reproduction mécanique ou technique des formes de la nature est une tâche superflue qui ne peut égaler la vitalité du modèle réel.",
          author: "G.W.F. Hegel",
          work: "Esthétique (Introduction)",
          quote: "L'art, quand il se borne à imiter, ne peut rivaliser avec la nature et ressemble à un ver qui s'efforce de ramper derrière un éléphant.",
          explanation: "Hegel dénonce la vanité du réalisme naïf : même le peintre le plus habile, s'il ne cherche qu'à copier un raisin pour tromper des oiseaux comme dans la légende antique de Zeuxis, ne produit qu'une parodie sans âme. La vraie nature possède le mouvement, la sève et la vie que la toile inanimée ne pourra jamais capter par le seul calque.",
          analyseIllustration: "Hegel établit avec vigueur que l'imitation pure est un jeu stérile indigne des hautes aspirations de l'esprit humain."
        },
        {
          statement: "Copier la nature enferme l'artiste dans un naturalisme servile qui bride la liberté et l'imagination poétique.",
          author: "Charles Baudelaire",
          work: "Curiosités esthétiques (Le Salon de 1859)",
          quote: "La poésie et le progrès sont deux ambitieux qui se haïssent... L'artiste doit être le traducteur, l'interprète de la nature, et non son esclave photographe.",
          explanation: "Baudelaire s'insurge contre la mode montante de la photographie réaliste qui prétend substituer le relevé mécanique à la puissance sacrée de l'imagination créatrice. Pour le poète, l'art véritable invente un univers intérieur supérieur aux banalités empiriques du quotidien.",
          analyseIllustration: "Baudelaire montre ainsi que l'art commence précisément là où s'arrête la copie passive du monde visible."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que réduire l'art à une simple imitation de la nature revient à mutiler sa vocation spirituelle. Toutefois, si l'art n'imite pas la nature, n'a-t-il pas pour mission sublime de la transfigurer et d'en révéler l'essence cachée ?",
    axe2: {
      title: "L'art est une recréation autonome du réel où l'esprit extériorise sa liberté et dévoile l'invisible",
      significance: "l'acte artistique invente de nouvelles formes sensibles pour donner corps aux profondeurs de la conscience",
      overview: "Dire que l'art dépasse l'imitation revient à reconnaître son pouvoir de révélation ontologique et poétique. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'art ne reproduit pas le visible extérieur mais rend visible ce que l'œil accoutumé ne sait pas percevoir.",
          author: "Paul Klee",
          work: "Théorie de l'art moderne",
          quote: "L'art ne reproduit pas le visible ; il rend visible.",
          explanation: "L'artiste n'est pas un miroir mécanique tourné vers le monde ; par le choix des lignes, des rythmes et des harmonies chromatiques, il donne consistance à des forces imperceptibles, à des émotions cosmiques et à des vérités métaphysiques que le regard banal ignore.",
          analyseIllustration: "Klee formule ici la vérité indépassable de l'art moderne : créer de nouvelles perspectives pour éclairer la condition humaine."
        },
        {
          statement: "Le génie artistique est le don inné par lequel la nature elle-même donne ses règles à l'art à travers la libre inspiration du sujet.",
          author: "Emmanuel Kant",
          work: "Critique de la faculté de juger (Paragraphe 46)",
          quote: "Le génie est le talent de produire ce dont on ne saurait donner de règle déterminée ; l'originalité doit être sa première propriété.",
          explanation: "Kant démontre que les chefs-d'œuvre de l'art ne naissent pas de recettes techniques apprises par cœur dans les académies, mais d'une impulsion créatrice souveraine. Les productions du génie s'imposent comme des modèles exemplaires sans qu'aucune règle préalable n'ait pu les prescrire mécaniquement.",
          analyseIllustration: "Kant prouve avec éclat que l'art authentique est création pure et non décalque servile de préceptes extérieurs."
        },
        {
          statement: "L'artiste nous délivre de la perception utilitaire ordinaire pour nous faire contempler la réalité dans sa pureté vierge.",
          author: "Henri Bergson",
          work: "Le Rire (Chapitre III)",
          quote: "L'art n'a d'autre objet que d'écarter les symboles pratiquement utiles, les généralités conventionnellement et socialement acceptées, enfin tout ce qui nous masque la réalité, pour nous mettre face à face avec la réalité même.",
          explanation: "Dans la vie quotidienne, nous ne voyons pas les choses comme elles sont réellement : nous n'apercevons que des étiquettes utiles pour agir et consommer. Le poète ou le peintre brise ce voile conventionnel pour nous réapprendre à voir, entendre et sentir avec une virginité retrouvée.",
          analyseIllustration: "Bergson consacre le rôle irremplaçable de l'art comme émancipation perceptive et élévation de l'âme."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est avéré que concevoir l'art comme une copie mécanique de la nature est un contre-sens qui condamne l'œuvre à l'insignifiance.",
      reponseDefinitive: "Toutefois, nous soutenons que l'art entretient avec la nature un dialogue fécond : il en puise la sève pour enfanter des formes nouvelles nées de la liberté de l'esprit.",
      elargissement: "En ce qui nous concerne, nous dirons que l'art atteint sa plus haute grandeur lorsqu'il nous réconcilie avec le monde, éveillant en chaque homme le sens de l'émerveillement et de la dignité universelle."
    }
  },

  // --------------------------------------------------------------------------
  // 4. AUTRUI & LIBERTÉ / MENACE / RECONNAISSANCE
  // --------------------------------------------------------------------------
  {
    id: "autrui-liberte-menace",
    label: "Autrui & Liberté (Menace ou Condition de la Réalisation de Soi)",
    triggerRegex: /(?:autrui|l.autre|alter ego).*(?:menace|obstacle|danger|ennemi|entrave|detruit|opprim|lib[eé]r|libre)|(?:lib[eé]r|libre).*(?:autrui|l.autre|alter ego)/i,
    concept1: "Autrui",
    concept2: "Liberté",
    lexiqueDefinitions: [
      {
        terme: "Autrui",
        definition: "Un autre moi-même, un être humain semblable à moi dans son essence de sujet conscient, mais distinct de moi dans sa singularité irréductible."
      },
      {
        terme: "Liberté",
        definition: "Capacité pour une conscience d'agir, de penser et d'inventer son existence sans être asservie au jugement ou à la force tyrannique d'un autre."
      },
      {
        terme: "Menace / Obstacle",
        definition: "Danger extérieur, force hostile ou regard chosifiant qui limite l'indépendance de l'individu et remet en cause sa souveraineté."
      }
    ],
    reformulationPattern: "La réflexion examine si la présence d'autrui représente un péril permanent et une atteinte aliénante à mon indépendance intime, ou si elle constitue le miroir incontournable sans lequel ma propre liberté ne saurait advenir.",
    tensionPhilosophique: "Le regard d'autrui me juge, m'épie et ses désirs entrent en concurrence avec les miens, créant friction et dépendance ; néanmoins, l'homme isolé dans le solipsisme ne prendrait jamais conscience de sa liberté et demeurerait prisonnier de l'animalité.",
    problemeCourt: "Autrui est-il une menace pour ma liberté ?",
    aspect1: "dans quelle mesure la présence d'autrui menace-t-elle ma liberté ?",
    aspect2: "toutefois, autrui n'est-il pas la condition de mon accomplissement ?",
    axe1: {
      title: "Autrui constitue une menace pour la liberté du moi par la chosification du regard, la rivalité des désirs et la pression sociale",
      significance: "l'altérité fait effraction dans l'univers intime du sujet et lui impose des contraintes qui déstabilisent sa souveraineté",
      overview: "Affirmer qu'autrui menace la liberté prend appui sur l'épreuve existentielle du regard d'autrui et la défiance spontanée entre les consciences. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Le regard chosifiant d'autrui aliène ma liberté originelle en me figeant sous son jugement en un objet manipulable.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant & Huis clos",
          quote: "L'enfer, c'est les autres.",
          explanation: "Sartre décrit la scène de l'homme penché sur le trou d'une serrure : absorbé dans son acte, il est pure subjectivité libre ; soudain, entendant des pas, il se sent regardé. Par le regard d'autrui, sa liberté lui échappe, il se pétrifie en objet coupable sous un jugement extérieur qu'il ne maîtrise pas.",
          analyseIllustration: "Cette célèbre analyse sartrienne prouve que le regard de l'autre représente une dépossession permanente de notre spontanéité."
        },
        {
          statement: "La concurrence naturelle pour les mêmes ressources fait d'autrui un agresseur potentiel dont la proximité menace constamment ma sécurité.",
          author: "Thomas Hobbes",
          work: "Léviathan (Première partie)",
          quote: "L'homme est un loup pour l'homme (Homo homini lupus).",
          explanation: "Dans les relations primitives non régulées par des institutions, l'égalité naturelle des forces entre les individus engendre une défiance perpétuelle. Chacun anticipant l'attaque de son voisin pour préserver sa vie, la liberté se transforme en état de peur perpétuelle et d'insécurité totale.",
          analyseIllustration: "Hobbes démontre avec un puissant réalisme que la liberté sauvage face à autrui s'anéantit d'elle-même dans la violence réciproque."
        },
        {
          statement: "La compagnie des hommes impose des compromis quotidiens et des faux-semblants qui étouffent l'authenticité personnelle.",
          author: "Arthur Schopenhauer",
          work: "Parerga et Paralipomena",
          quote: "Une compagnie de porcs-épics s'était resserrée par une froide journée d'hiver pour se préserver du gel ; mais aussitôt ils sentirent leurs piquants mutuels, ce qui les força à s'éloigner.",
          explanation: "Schopenhauer use de cette métaphore animalière pour peindre la tragédie des relations humaines : la solitude gèle l'homme, mais la société l'irrite et le blesse. Pour cohabiter pacifiquement avec autrui, chacun doit renoncer à une part précieuse de sa liberté spontanée au profit des conventions hypocrites.",
          analyseIllustration: "L'apologue de Schopenhauer rappelle avec finesse que toute vie sociale exige le sacrifice d'une part de notre indépendance d'esprit."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons qu'autrui peut peser lourdement sur ma liberté en éveillant la peur ou le sentiment de dépossession. Toutefois, un être totalement isolé pourrait-il faire l'expérience d'une liberté réelle ?",
    axe2: {
      title: "Autrui est la condition première et le médiateur nécessaire de la reconnaissance, de la liberté morale et de la culture",
      significance: "la liberté véritable n'est pas un repli solipsiste mais une conquête dialectique née de la rencontre féconde avec l'altérité",
      overview: "Dire qu'autrui est indispensable à ma liberté revient à reconnaître qu'une liberté sans semblable demeurerait aveugle et stérile. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La conscience de soi ne s'éveille et ne conquiert sa liberté que par la lutte et la reconnaissance réciproque avec une autre conscience.",
          author: "G.W.F. Hegel",
          work: "Phénoménologie de l'esprit (La certitude de soi-même)",
          quote: "La conscience de soi n'est en soi et pour soi que parce qu'elle est en soi et pour soi pour une autre conscience de soi ; c'est-à-dire qu'elle n'est qu'en tant qu'être reconnu.",
          explanation: "Hegel établit qu'un homme isolé sur une île déserte ne dépasserait jamais le stade de la conscience animale sensible. C'est en faisant face à autrui, en affrontant son regard et en obtenant de lui qu'il le reconnaisse comme un être libre et digne, que le sujet accède à la vérité spirituelle de son humanité.",
          analyseIllustration: "Hegel prouve de façon magistrale qu'autrui n'est pas le destructeur de ma liberté, mais son révélateur dialectique."
        },
        {
          statement: "L'épiphanie du visage d'autrui arrache l'homme à l'égoïsme aveugle et investit sa liberté d'une responsabilité morale inaliénable.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini & Éthique et Infini",
          quote: "Le visage d'autrui s'impose à moi sans que je puisse rester sourd à son appel... Il me signifie : « Tu ne commettras pas de meurtre ».",
          explanation: "Pour Levinas, la rencontre du visage d'autrui ne relève pas de la rivalité physique mais de la révélation éthique. Découvrant la vulnérabilité absolue d'autrui, ma liberté cesse d'être une force prédatrice pour s'élever à la dignité du soin, de la justice et de l'hospitalité fraternelle.",
          analyseIllustration: "Levinas démontre que la relation à autrui confère à notre liberté sa noblesse morale la plus haute et son sens transcendant."
        },
        {
          statement: "C'est dans l'amitié véritable et la solidarité politique avec autrui que la liberté humaine trouve son accomplissement suprême.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre VIII)",
          quote: "L'ami est un autre soi-même sans lequel personne ne choisirait de vivre, eût-il tous les autres biens.",
          explanation: "Aristote rappelle que l'homme est par essence un animal politique et sociable. La liberté solitaire n'est qu'une illusion triste ; c'est dans l'amitié sincère partagée avec ses pairs que le citoyen déploie ses vertus, partage la réflexion et goûte au bonheur d'une vie libre et harmonieuse.",
          analyseIllustration: "La pensée aristotélicienne établit définitivement que la liberté ne s'épanouit point contre autrui, mais avec autrui dans l'amitié et la cité."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre examen, il convient de reconnaître que la coexistence avec autrui engendre inévitablement des tensions et le risque d'une dépossession aliénante de notre intimité.",
      reponseDefinitive: "Toutefois, nous affirmons qu'autrui est le partenaire indispensable sans lequel notre liberté resterait une pure virtualité enfermée dans le néant de la solitude.",
      elargissement: "En ce qui nous concerne, nous dirons que la liberté authentique s'accomplit dans la réciprocité éthique, où veiller sur la liberté de l'autre est la plus noble manière d'honorer la sienne."
    }
  },

  // --------------------------------------------------------------------------
  // 5. PHILOSOPHIE & UTILITÉ / DISPARITION / ACTION
  // --------------------------------------------------------------------------
  {
    id: "philosophie-utilite-action",
    label: "Philosophie & Utilité (Bavardage Spéculatif ou Éveil Indispensable)",
    triggerRegex: /(?:philosoph|philosophe).*(?:util|inutil|extinction|passer|disparition|ordonnancement|efface|action|pratique|bavardage|mythe|chimere)|(?:util|inutil|extinction|passer|disparition|ordonnancement|efface|action|bavardage|mythe|chimere).*(?:philosoph|philosophe)/i,
    concept1: "Philosophie",
    concept2: "Utilité / Action",
    lexiqueDefinitions: [
      {
        terme: "Philosophie",
        definition: "Quête rationnelle de sagesse et réflexion critique portant sur les fondements du savoir, les principes de la morale et le sens de l'existence humaine."
      },
      {
        terme: "Ordonnancement",
        definition: "Organisation méthodique, disposition rationnelle et hiérarchisation structurée des connaissances et de l'existence humaine."
      },
      {
        terme: "Extinction / Effacement",
        definition: "Cessation d'activité, disparition définitive ou mise à l'écart d'une discipline jugée superflue dans l'organisation humaine."
      },
      {
        terme: "Mythe (Polysémie critique)",
        definition: "Sens 1 (littéral) : Récit fondateur sacré. Sens 2 (contextuel ici - au cœur du sujet) : Illusion trompeuse, chimère ou promesse stérile sans utilité concrète ni efficacité pratique."
      },
      {
        terme: "Utilité pratique",
        definition: "Propriété de ce qui produit un effet matériel immédiat, résout des problèmes techniques ou améliore le confort physique de l'existence."
      }
    ],
    reformulationPattern: "Le sujet examine si la réflexion philosophique, dépourvue de rendement technique ou économique immédiat, est vouée à disparaître du savoir et de la vie des hommes, ou si elle demeure le guide indispensable de l'esprit critique et de l'action morale.",
    tensionPhilosophique: "Face aux urgences matérielles et au triomphe des sciences exactes, la philosophie paraît bavarde, lente et sans certitudes unanimes ; cependant, sans réflexion philosophique, l'humanité risquerait de sombrer dans l'asservissement idéologique et la barbarie technocratique.",
    problemeCourt: "Peut-on se passer de la philosophie ?",
    aspect1: "dans quelle mesure la philosophie apparaît-elle comme une spéculation inutile ?",
    aspect2: "toutefois, ne demeure-t-elle pas indispensable pour éclairer l'action humaine ?",
    axe1: {
      title: "La philosophie s'expose au reproche d'inefficacité pratique, de stérilité spéculative et d'absence de certitudes apodictiques",
      significance: "la réflexion philosophique paraît impuissante face aux réalités économiques et incapable de forger des vérités définitives",
      overview: "Affirmer que la philosophie est vaine se fonde sur l'opposition entre les querelles d'écoles et les exigences concrètes de l'action matérielle. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La philosophie se borne à discourir abstraitement sur le monde sans transformer concrètement les conditions matérielles d'existence des peuples.",
          author: "Karl Marx",
          work: "Thèses sur Feuerbach (Onzième thèse)",
          quote: "Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe, c'est de le transformer.",
          explanation: "Marx reproche à la philosophie spéculative son idéalisme impuissant. Face à la misère économique, à la maladie et à l'exploitation politique, les beaux discours métaphysiques ne nourrissent personne ; seule la praxis révolutionnaire et scientifique permet d'émanciper réellement les êtres humains.",
          analyseIllustration: "Cette célèbre dénonciation marxiste souligne le risque pour la philosophie de se complaire dans une pure tour d'ivoire détachée du réel."
        },
        {
          statement: "À la différence des sciences expérimentales qui progressent par des preuves vérifiables, la philosophie ne produit aucun résultat universellement admis.",
          author: "Karl Jaspers",
          work: "Introduction à la philosophie",
          quote: "Contrairement à la science, la philosophie ne donne pas de résultats apodictiques... En philosophie, il n'y a pas d'unanimité établissant un savoir définitif.",
          explanation: "Tandis que la physique ou les mathématiques s'accordent sur des théorèmes et des lois stables, les philosophes continuent de disputer depuis des millénaires sur les mêmes questions sans qu'aucune doctrine ne parvienne à s'imposer à tous, donnant l'impression d'un labyrinthe stérile.",
          analyseIllustration: "Jaspers met ainsi en évidence l'inconfort d'une discipline qui questionne sans jamais clore définitivement le débat."
        },
        {
          statement: "Le bon sens populaire et l'opinion courante perçoivent souvent le philosophe comme un songe-creux inadapté aux nécessités de la cité.",
          author: "Platon",
          work: "Théétète (Le portrait du philosophe)",
          quote: "À l'exemple de Thalès qui, observant les astres et regardant en l'air, tomba dans un puits, une servante de Thrace se moqua de lui en disant qu'il voulait savoir ce qui se passait au ciel mais ne voyait pas ce qui était sous ses pieds.",
          explanation: "Cette célèbre anecdote platonicienne illustre la rupture entre la contemplation métaphysique désintéressée et l'habileté pragmatique des affaires courantes. Le philosophe paraît ridicule aux yeux des marchands et des politiciens car il ignore les intrigues temporelles.",
          analyseIllustration: "Cette fable révèle le décalage historique entre l'élévation philosophique et le pragmatisme des sociétés utilitaristes."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la philosophie ne produit pas de bien matériel mesurable et paraît impuissante face aux impératifs d'efficacité immédiate. Toutefois, une existence vouée au seul rendement technique ne s'exposerait-elle pas à perdre son sens et sa lucidité critique ?",
    axe2: {
      title: "La philosophie est le fondement irremplaçable de l'esprit critique, de la liberté intérieure et de l'humanisation du savoir",
      significance: "la réflexion philosophique préserve la conscience des dogmatismes aveugles et donne une direction éthique à l'aventure humaine",
      overview: "Dire que la philosophie demeure essentielle revient à reconnaître qu'elle seule interroge les fins de l'existence et nous préserve de la barbarie. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Vivre sans philosopher revient à vivre dans l'obscurantisme et l'esclavage intellectuel des opinions reçues.",
          author: "René Descartes",
          work: "Les Principes de la philosophie (Lettre-Préface)",
          quote: "C'est proprement avoir les yeux fermés, sans tâcher jamais de les ouvrir, que de vivre sans philosopher... Et cette étude est plus nécessaire pour régler nos mœurs que n'est l'usage de nos yeux pour conduire nos pas.",
          explanation: "Descartes affirme que la philosophie est l'âme même de la culture humaine. L'homme qui renonce à penser par lui-même accepte d'être guidé aveuglément par la coutume, la rumeur ou la propagande, renonçant à ce qui fait la grandeur de la nature humaine.",
          analyseIllustration: "Descartes proclame ici la primauté souveraine du doute méthodique et de la raison autonome pour éclairer la vie morale."
        },
        {
          statement: "La philosophie ne consiste pas à posséder un savoir figé, mais à maintenir vivant le devoir sacré de s'éveiller à la vérité par le questionnement perpétuel.",
          author: "Socrate & Platon",
          work: "Apologie de Socrate",
          quote: "Une vie sans examen ne vaut pas d'être vécue.",
          explanation: "Face au tribunal qui le condamne à mort, Socrate refuse de renoncer à interpeller ses concitoyens pour secouer leurs certitudes illusoires. La philosophie n'est pas un métier lucratif, c'est une mission salutaire qui empêche l'esprit public de s'endormir dans le confort des dogmes trompeurs.",
          analyseIllustration: "L'exemple socratique prouve avec force que philosopher est une affaire de courage civique et d'intégrité morale inébranlable."
        },
        {
          statement: "La science et la technique produisent des moyens prodigieux, mais seule la philosophie est capable de déterminer les fins éthiques et le sens de l'action.",
          author: "François Rabelais & Hans Jonas",
          work: "Pantagruel & Le Principe responsabilité",
          quote: "Science sans conscience n'est que ruine de l'âme.",
          explanation: "Les sciences positives et les algorithmes nous enseignent comment fabriquer des armes, manipuler le génome ou accélérer les flux, mais ils sont incapables de dire si cela est juste ou bon. Seule la méditation philosophique offre à l'humanité la boussole éthique nécessaire pour ne point détruire son propre avenir.",
          analyseIllustration: "Cette exigence contemporaine rappelle que sans sagesse critique, la puissance technologique engendre le chaos et l'autodestruction."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît évident que la philosophie ne saurait prétendre remplacer l'action politique concrète ni la rentabilité des sciences exactes.",
      reponseDefinitive: "Toutefois, force est de reconnaître qu'elle possède une utilité propre : la pratique critique permet de résister au conformisme, à l'illusion et à la déshumanisation.",
      elargissement: "En ce qui nous concerne, nous dirons que tant que l'homme cherchera à vivre dans la liberté, la justice et la vérité, philosopher demeurera l'impératif le plus urgent et le plus noble de son existence."
    }
  },

  // --------------------------------------------------------------------------
  // 6. RAISON & MYTHE / FOI / PASSION
  // --------------------------------------------------------------------------
  {
    id: "raison-mythe-antipodes",
    label: "Raison & Mythe (Aux Antipodes ou Alliance Symbolique)",
    triggerRegex: /(?:raison|logos).*(?:mythe|muthos|fable|irrationnel|antipode)|(?:mythe|muthos|fable|irrationnel|antipode).*(?:raison|logos)/i,
    concept1: "Raison (Logos)",
    concept2: "Mythe (Muthos)",
    lexiqueDefinitions: [
      {
        terme: "Raison (Logos)",
        definition: "Faculté intellectuelle de juger, de distinguer le vrai du faux par la preuve, et d'enchaîner des propositions selon les règles strictes de la démonstration logique."
      },
      {
        terme: "Mythe (Muthos)",
        definition: "Récit traditionnel imaginaire mettant en scène des puissances surnaturelles pour conférer une explication globale aux mystères des origines et de la condition humaine."
      },
      {
        terme: "Aux antipodes",
        definition: "Situation d'opposition diamétrale, d'incompatibilité radicale et de contradiction irréductible entre deux principes ou deux démarches de pensée."
      }
    ],
    reformulationPattern: "Il s'agit de se demander si la pensée mythique et la réflexion rationnelle s'excluent mutuellement comme deux démarches inconciliables, ou si le mythe recèle une profondeur symbolique qui en fait l'allié fécond de la raison.",
    tensionPhilosophique: "Le mythe s'appuie sur la croyance transmise et l'imaginaire féerique là où la raison exige rigueur démonstrative et vérification empirique ; néanmoins, la raison philosophique recourt elle-même à des allégories mythiques pour rendre palpables des vérités suprêmes.",
    problemeCourt: "Le mythe et la raison sont-ils aux antipodes ?",
    aspect1: "dans quelle mesure le mythe s'oppose-t-il aux exigences de la raison ?",
    aspect2: "toutefois, le mythe n'est-il pas un allié de la pensée rationnelle ?",
    axe1: {
      title: "Le mythe s'oppose frontalement aux exigences de la raison par son recours au surnaturel, à l'autorité dogmatique et à l'illusion",
      significance: "la rupture épistémologique inaugurée par la philosophie grecque s'est construite contre l'obscurantisme des fictions mythologiques",
      overview: "Affirmer que le mythe et la raison sont aux antipodes traduit le combat mené par les Lumières contre la crédulité et les superstitions primitives. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La pensée philosophique s'est historiquement constituée en rejetant les fables anthropomorphiques et arbitraires des poètes antiques.",
          author: "Platon",
          work: "La République (Livre II & III)",
          quote: "Il faut chasser de la cité les poètes qui racontent sur les dieux des fables mensongères et immorales qui corrompent la jeunesse.",
          explanation: "Platon condamne Homère et Hésiode qui attribuent aux dieux des jalousies, des viols et des colères mesquines. La raison philosophique exige de concevoir le divin comme bonté absolue et harmonie intelligible, rompant sans concession avec les délires de la mythologie populaire.",
          analyseIllustration: "Ce refus platonicien illustre l'opposition radicale entre la rectitude morale de la raison et l'arbitraire désordonné du mythe."
        },
        {
          statement: "Le passage du muthos au logos marque l'avènement de l'explication causale rationnelle contre la soumission aux forces magiques.",
          author: "René Descartes",
          work: "Discours de la méthode",
          quote: "Rejeter toutes les opinions reçues autrefois en sa créance pour y appliquer sa seule raison.",
          explanation: "Descartes pose que la science et la vérité s'édifient par le doute méthodique. La fable mythique exige une adhésion passive fondée sur la coutume ancestrale, tandis que la raison exige que chaque esprit examine par lui-même la solidité des preuves avant de donner son assentiment.",
          analyseIllustration: "Descartes confirme ainsi la séparation nette entre la liberté critique de la raison et la passivité de la croyance mythique."
        },
        {
          statement: "La loi des trois états d'Auguste Comte relègue la pensée mythique et théologique à un stade archaïque dépassé par la raison positive.",
          author: "Auguste Comte",
          work: "Discours sur l'esprit positif",
          quote: "L'état théologique ou fictif représente l'enfance de l'intelligence humaine, appelée à s'effacer devant l'état positif et rationnel.",
          explanation: "Comte démontre que l'humanité a d'abord expliqué les orages ou les épidémies par le courroux des dieux avant de découvrir, grâce à la méthode scientifique positive, les lois invariables et mathématiques qui régissent les phénomènes de la nature.",
          analyseIllustration: "Le positivisme comtien scelle l'incompatibilité méthodique entre l'imaginaire mythologique et la rigueur scientifique."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que le mythe et la raison s'affrontent sur le terrain de la preuve logique et de l'explication causale. Toutefois, cette opposition méthodologique doit-elle nous faire oublier la parenté profonde et la complémentarité qui unissent le muthos et le logos ?",
    axe2: {
      title: "Le mythe recèle une rationalité symbolique matricielle et s'avère un précieux allié de la pensée rationnelle",
      significance: "loin d'être une pure aberration, le mythe ordonne le monde et offre à la raison les métaphores nécessaires à la quête du sens",
      overview: "Dire que le mythe et la raison ne sont point aux antipodes revient à reconnaître que le mythe est une autre manière de penser, d'ordonner et d'éclairer l'humain. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La raison philosophique est historiquement née au cœur même du mythe dont elle a intériorisé et laïcisé les interrogations fondamentales.",
          author: "Jean-Pierre Vernant",
          work: "Mythe et pensée chez les Grecs & Les Origines de la pensée grecque",
          quote: "La raison est née dans le sillage du mythe dont elle a rationalisé les interrogations fondamentales.",
          explanation: "L'historien et philosophe démontre que Thalès ou Anaximandre n'ont pas inventé ex nihilo la question de l'origine du monde : ils ont repris les récits cosmogoniques du mythe en substituant l'eau ou l'air aux dieux Océanos ou Gaïa. Le mythe cherchait déjà à expliquer et à vaincre l'angoisse du chaos.",
          analyseIllustration: "Vernant prouve qu'entre mythe et raison, il y a continuité de problème plutôt que rupture absolue."
        },
        {
          statement: "La philosophie recourt magistralement au mythe comme allégorie pour exprimer des réalités métaphysiques transcendantes.",
          author: "Platon & Paul Ricœur",
          work: "La République (L'allégorie de la caverne) & La Métaphore vive",
          quote: "Le symbole donne à penser.",
          explanation: "Lorsque Platon veut expliquer comment l'âme s'élève vers le Bien ou comment le désir prend naissance dans le Banquet (mythe de Poros et Pénia), le raisonnement discursif pur atteint ses limites. Il fait alors appel au récit mythique comme un tremplin poétique qui ouvre l'esprit à la contemplation métaphysique.",
          analyseIllustration: "Cette pratique philosophique illustre magnifiquement la coopération féconde entre la puissance d'évocation du mythe et la rigueur du logos."
        },
        {
          statement: "L'anthropologie structurale prouve que les mythes déploient des opérations logiques d'une complexité équivalente à la science moderne.",
          author: "Claude Lévi-Strauss",
          work: "Anthropologie structurale (Chapitre XI, « La structure des mythes »)",
          quote: "Un mythe se rapporte toujours à des événements passés, mais sa valeur intrinsèque provient de ce que ces événements forment une structure permanente.",
          explanation: "Lévi-Strauss réfute l'idée raciste d'une 'mentalité primitive' prélogique : les mythes amérindiens ou africains fonctionnent selon des permutations et des oppositions binaires aussi rigoureuses que des équations algébriques, permettant aux sociétés de résoudre symboliquement leurs contradictions insolubles.",
          analyseIllustration: "Lévi-Strauss détruit le préjugé positiviste en reconnaissant au mythe le statut de pensée rationnelle vêtue de symboles."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est clair que si l'on compare la démarche expérimentale et le récit merveilleux, mythe et raison s'opposent sur le plan de la méthode.",
      reponseDefinitive: "Toutefois, nous affirmons qu'ils ne sont nullement aux antipodes : le mythe est le berceau poétique du questionnement dont la raison est l'approfondissement critique.",
      elargissement: "En ce qui nous concerne, nous dirons qu'une raison orgueilleuse qui prétendrait éradiquer tout imaginaire symbolique s'assécherait elle-même, car c'est en unissant la rigueur de la démonstration à la fécondité du sens que l'homme habite pleinement le monde."
    }
  },

  // --------------------------------------------------------------------------
  // 7. TECHNIQUE & NATURE / ÉMANCIPATION / MORALE
  // --------------------------------------------------------------------------
  {
    id: "technique-emancipation-nature",
    label: "Technique & Nature / Homme (Émancipation ou Menace Asservissante)",
    triggerRegex: /(?:technique|machine|robot|ia|intelligence artificielle|outil).*(?:lib[eé]r|libre|menace|maitr|danger|asservi|morale|nature)|(?:lib[eé]r|libre|menace|maitr|danger|asservi|morale|nature).*(?:technique|machine|robot|ia|intelligence artificielle|outil)/i,
    concept1: "Technique",
    concept2: "Nature / Liberté",
    lexiqueDefinitions: [
      {
        terme: "Technique",
        definition: "Ensemble des procédés rationnels, outils et instruments méthodiques conçus par l'homme pour transformer la nature et accroître son pouvoir d'action."
      },
      {
        terme: "Émancipation",
        definition: "Fait de s'affranchir d'une dépendance contraignante, d'une précarité biologique ou d'une servitude matérielle pour conquérir son autonomie."
      },
      {
        terme: "Menace / Aliénation",
        definition: "Risque de dépossession, d'asservissement involontaire ou de destruction qui pèse sur l'essence de l'homme et l'équilibre du monde."
      }
    ],
    reformulationPattern: "Il convient de déterminer si le développement prodigieux des outils techniques affranchit véritablement l'être humain des servitudes naturelles, ou s'il l'enferme dans une dépendance technologique destructrice pour sa liberté et son environnement.",
    tensionPhilosophique: "Grâce à la technique, l'homme triomphe de la faim, des maladies et de la distance géographique ; néanmoins, cette même technique engendre la menace nucléaire, le bouleversement climatique et l'asservissement des consciences au règne machinal.",
    problemeCourt: "La technique libère-t-elle l'homme ?",
    aspect1: "dans quelle mesure la technique est-elle un instrument de libération ?",
    aspect2: "toutefois, ne fait-elle pas peser une menace d'asservissement inédite ?",
    axe1: {
      title: "La technique est le prolongement constitutif de l'humanité qui lui permet de maîtriser l'adversité naturelle et d'améliorer sa condition",
      significance: "l'invention technique comble l'indigence biologique première de l'homme pour fonder sa puissance créatrice",
      overview: "Affirmer que la technique libère l'homme repose sur le constat indiscutable des conquêtes médicales, matérielles et intellectuelles de l'homo faber. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Démuni par la nature à sa naissance, l'homme ne conquiert sa survie et son humanité que grâce à la faculté technique et au feu sacré.",
          author: "Platon",
          work: "Protagoras (Le mythe de Prométhée)",
          quote: "Prométhée, devant la détresse de l'homme resté nu, sans chaussures, sans armes et sans couverture, déroba à Héphaïstos et à Athéna le feu et le savoir technique pour en faire présent à l'espèce humaine.",
          explanation: "Ce mythe fondateur rappelle que si les animaux reçoivent des griffes ou des fourrures innées, l'homme naît biologiquement indigent. C'est en inventant des outils qu'il transforme sa faiblesse première en une souveraineté universelle sur tous les milieux naturels.",
          analyseIllustration: "Le mythe prométhéen établit que la technique est la condition vitale de la liberté et de la survie de notre espèce."
        },
        {
          statement: "La science moderne couplée à la technique promet de délivrer l'humanité de la servitude corporelle et des souffrances de la maladie.",
          author: "René Descartes",
          work: "Discours de la méthode (Sixième partie)",
          quote: "Nous pouvons nous rendre comme maîtres et possesseurs de la nature, ce qui est à désirer non seulement pour l'invention d'une infinité d'artifices... mais principalement pour la conservation de la santé, qui est sans doute le premier bien.",
          explanation: "Descartes inaugure le projet moderne d'une philosophie pratique : rompre avec la spéculation stérile des scolastiques pour découvrir des lois physiques capables de chauffer nos maisons, soigner nos maux et soulager la peine laborieuse des travailleurs.",
          analyseIllustration: "Descartes fonde l'idéal humaniste d'un progrès technique guidé par la recherche du bien-être et de l'émancipation collective."
        },
        {
          statement: "L'outil technique prolonge le corps humain, libérant son esprit de la corvée physique pour lui ouvrir les voies de la culture et de la liberté.",
          author: "Henri Bergson",
          work: "L'Évolution créatrice",
          quote: "L'intelligence, envisagée dans ce qui en paraît être la démarche originelle, est la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils.",
          explanation: "Bergson montre que l'intelligence humaine se distingue de l'instinct animal rigide par sa plasticité fabricante. En confiant à la machine l'effort brut, l'homme dispose de temps libre pour cultiver sa conscience morale, son art et sa vie spirituelle.",
          analyseIllustration: "Bergson consacre le rôle de l'homo faber comme passerelle vers l'élévation de l'homo sapiens."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la technique démultiplie la liberté d'action de l'homme face aux périls de la nature brute. Toutefois, l'autonomisation aveugle de la technoscience ne risque-t-elle pas de transformer l'homme en serviteur de ses propres créations ?",
    axe2: {
      title: "La technique contemporaine déploie une emprise autonome qui arraisonne la nature, aliène les consciences et menace l'avenir",
      significance: "lorsque la technique devient une fin en soi échappant au contrôle éthique, elle engendre une servitude globale",
      overview: "Dire que la technique asservit l'homme découle de la prise de conscience des désastres écologiques et de la mécanisation de la vie psychique. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La technique moderne ne se contente plus de coopérer avec la nature : elle l'arraisonne brutalement en un pur stock disponible exploitable.",
          author: "Martin Heidegger",
          work: "Essais et conférences (La question de la technique)",
          quote: "L'essence de la technique moderne est le Gestell (l'arraisonnement)... Elle somme la nature de livrer une énergie qui puisse comme telle être extraite et accumulée.",
          explanation: "Heidegger montre la rupture entre l'ancien moulin à vent qui s'adaptait au souffle du vent et la centrale électrique qui violente le fleuve. Le risque suprême est que l'homme lui-même ne soit plus considéré comme un sujet digne, mais comme une ressource humaine ou un matériau interchangeable de la mégamachine.",
          analyseIllustration: "Cette mise en garde heideggérienne alerte sur la perte de l'être au profit de la rentabilité aveugle."
        },
        {
          statement: "Le gigantisme des pouvoirs technologiques modernes exige une nouvelle éthique du futur pour prévenir l'anéantissement de la vie sur Terre.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Agis de telle sorte que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre.",
          explanation: "Jonas démontre que l'éthique traditionnelle (fondée sur la proximité d'autrui) est désormais insuffisante face aux menaces globales (péril atomique, catastrophe climatique, manipulations génétiques). La puissance de la technique a dépassé notre capacité de prévision, exigeant une heuristique de la peur salutaire pour protéger les générations futures.",
          analyseIllustration: "Jonas démontre avec urgence que sans responsabilité morale, le progrès technique devient un pacte faustien autodestructeur."
        },
        {
          statement: "L'homme moderne est devenu l'esclave des objets et des écrans qui le dépossèdent de son autonomie critique et de son rythme intérieur.",
          author: "Jacques Ellul & Günther Anders",
          work: "Le Système technicien & L'Obsolescence de l'homme",
          quote: "Le système technicien transforme l'homme en instrument de ses propres instruments.",
          explanation: "Ellul montre que la technique obéit désormais à sa propre loi d'airain (le culte de l'efficacité maximale) sans consulter la morale. L'homme contemporain éprouve une honte prométhéenne devant la perfection de ses machines et se soumet volontairement à la surveillance algorithmique et à la consommation compulsive.",
          analyseIllustration: "Ce diagnostic critique prouve que la technique sans âme rétrécit l'espace de la liberté humaine."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est certain que renier la technique serait une régression mortelle qui priverait l'humanité de ses conquêtes médicales et émancipatrices.",
      reponseDefinitive: "Toutefois, nous affirmons avec force que la technique ne saurait être son propre guide moral : elle doit demeurer un moyen subordonné à la dignité de la personne humaine.",
      elargissement: "En ce qui nous concerne, nous dirons que le défi suprême du XXIe siècle n'est pas d'accroître aveuglément notre puissance technique, mais d'élever notre conscience éthique à la hauteur de notre savoir pour préserver la vie et la liberté sur Terre."
    }
  },

  // --------------------------------------------------------------------------
  // 8. CONSCIENCE DE SOI & HOMME / DÉFINITION / INCONSCIENT
  // --------------------------------------------------------------------------
  {
    id: "conscience-homme-inconscient",
    label: "Conscience de soi & Homme (Privilège Souverain ou Définition Réductrice)",
    triggerRegex: /(?:conscience).*(?:definir|homme|suffit|suffire|essence)|(?:definir|homme|suffit|suffire).*(?:conscience)/i,
    concept1: "Conscience (de soi)",
    concept2: "Homme / Inconscient",
    lexiqueDefinitions: [
      {
        terme: "Conscience (de soi)",
        definition: "Faculté réflexive par laquelle l'esprit humain fait l'expérience de ses états intérieurs, se saisit comme sujet unifié capable de dire « Je » et se sait distinct du monde extérieur."
      },
      {
        terme: "Définir l'homme",
        definition: "Déterminer l'essence universelle et propre de l'être humain, ce qui constitue sa nature fondamentale et le distingue irréductiblement de l'animalité."
      },
      {
        terme: "Suffire",
        definition: "Constituer une condition non seulement nécessaire, mais pleine, totale et exclusive, qui épuise à elle seule l'ensemble de la réalité de l'être sans qu'aucun autre élément ne soit requis."
      }
    ],
    disambiguation: {
      term: "Conscience de soi",
      possibleMeanings: [
        "Simple veille physiologique opposée au sommeil ou au coma",
        "Perception sensorielle immédiate du milieu extérieur",
        "Faculté réflexive métaphysique et morale par laquelle l'esprit se saisit comme sujet pensant unifié"
      ],
      retainedMeaning: "La faculté métaphysique, morale et réflexive qui caractérise le sujet pensant.",
      justification: "Le sujet interroge précisément la valeur définitoire et suffisante de cette réflexivité pour cerner l'homme, face aux parts d'ombre révélées par le corps et l'inconscient."
    },
    reformulationPattern: "Il s'agit de se demander si la faculté réflexive de la conscience de soi constitue l'attribut unique et suffisant qui épuise la réalité de l'être humain, ou si l'homme est habité par des dimensions inconscientes, corporelles et matérielles qui rendent cette définition incomplète.",
    tensionPhilosophique: "D'un côté, la conscience de soi arrache l'homme à l'animalité en fondant son autonomie intellectuelle et sa dignité morale de sujet libre ; de l'autre, prétendre que la conscience suffit à définir l'homme occulte l'immensité des pulsions inconscientes, la pesanteur du corps biologique et les déterminismes matériels qui façonnent son existence.",
    introAmorces: {
      definition: "Si l'on définit traditionnellement la conscience de soi comme la faculté réflexive par laquelle l'esprit humain se saisit dans son identité pensante et fonde sa dignité morale, elle semble constituer l'essence suprême de l'homme. Cependant, l'examen critique révèle que l'être humain est également traversé par un corps biologique, des pulsions inconscientes et des déterminismes matériels qui échappent à sa seule lucidité.",
      constat: "Spontanément, chaque individu a le sentiment d'être le maître souverain de ses pensées et de ses actes par la lumière de sa conscience. Pourtant, l'expérience des actes manqués, des passions incontrôlées et des illusions montre que l'homme est souvent agi par des forces intérieures obscures qu'il ne maîtrise pas.",
      citation: {
        auteur: "René Descartes",
        oeuvre: "Discours de la méthode",
        citation: "Je pense, donc je suis",
        explication: "Descartes érige la conscience réflexive en certitude première qui définit la nature intime du sujet pensant.",
        contreConstat: "Toutefois, la découverte psychanalytique de l'inconscient et l'expérience de nos déterminismes corporels viennent contester l'idée que la seule conscience suffise à épuiser la réalité humaine."
      }
    },
    problemeCourt: "La conscience de soi suffit-elle à définir l'homme ?",
    aspect1: "dans quelle mesure la conscience de soi définit-elle l'essence de l'homme ?",
    aspect2: "toutefois, n'est-elle pas insuffisante face à l'empire de l'inconscient ?",
    axe1: {
      title: "La conscience de soi est le privilège ontologique suprême qui arrache l'homme à l'animalité et fonde sa dignité morale",
      significance: "la réflexivité consciente constitue la condition nécessaire et universelle par laquelle l'être humain accède au statut de sujet souverain",
      overview: "Affirmer que la conscience suffit à définir l'homme s'appuie sur la rupture métaphysique entre la chose matérielle et l'esprit pensant. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La pensée consciente constitue le premier principe indubitable qui fonde l'existence et l'identité métaphysique du sujet humain.",
          author: "René Descartes",
          work: "Discours de la méthode & Méditations métaphysiques",
          quote: "Je pense, donc je suis (Cogito ergo sum).",
          explanation: "Au terme du doute méthodique universel, Descartes découvre que l'acte même de douter implique nécessairement l'existence d'une substance pensante. Même si le corps n'était qu'une illusion sensible, la conscience réflexive s'affirme comme la certitude première et indubitable qui définit la nature intime de l'homme.",
          analyseIllustration: "Descartes établit ainsi que la conscience pensante est le noyau indestructible de l'humanité, autonome et distinct de la matière corporelle."
        },
        {
          statement: "Le pouvoir de dire « Je » élève l'homme infiniment au-dessus de tous les autres êtres vivants et fonde son unité morale.",
          author: "Emmanuel Kant",
          work: "Anthropologie du point de vue pragmatique",
          quote: "Posséder le « Je » dans sa représentation : ce pouvoir élève l'homme infiniment au-dessus de tous les autres êtres vivants sur la terre.",
          explanation: "Kant démontre que même lorsque l'enfant ne sait pas encore prononcer le mot « Je », il possède déjà la faculté de rapporter toutes ses représentations à une conscience unifiée. Cette synthèse de l'aperception transcendantale fait de l'homme une personne morale dotée d'une dignité inaliénable, et non une simple chose interchangeable.",
          analyseIllustration: "Cette analyse kantienne prouve que la conscience de soi est la marque exclusive qui institue l'être humain comme sujet responsable de ses devoirs."
        },
        {
          statement: "L'homme ne possède pas d'essence figée : c'est par sa conscience libre qu'il se projette dans l'existence et invente son humanité.",
          author: "Jean-Paul Sartre",
          work: "L'existentialisme est un humanisme & L'Être et le Néant",
          quote: "L'homme n'est rien d'autre que ce qu'il se fait. L'existence précède l'essence.",
          explanation: "Sartre montre que tandis que les objets ou les animaux sont enfermés dans une nature déterminée par avance (l'en-soi), la conscience humaine est un pour-soi, c'est-à-dire un pouvoir permanent de néantisation, de recul critique et de choix. L'homme est condamné à être libre et se définit entièrement par ses actes conscients.",
          analyseIllustration: "Sartre consacre ainsi la conscience de soi comme le foyer souverain où l'homme assume la responsabilité totale de son destin."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la conscience de soi confère à l'être humain une dignité inaliénable et le pouvoir de se déterminer librement. Toutefois, la conscience réflexive embrasse-t-elle la totalité de la vie psychique et corporelle de l'homme ?",
    axe2: {
      title: "La conscience de soi est partielle et ne saurait suffire à épuiser la complexité de l'homme, habité par l'inconscient et le corps",
      significance: "l'homme ne se réduit pas à la pure transparence de son intellect : il est déterminé par des forces psychiques, biologiques et sociales qui le dépassent",
      overview: "Dire que la conscience ne suffit pas à définir l'homme revient à briser l'illusion de la souveraineté absolue du Moi rationnel. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La découverte de l'inconscient psychique révèle que le Moi conscient n'est qu'une surface fragile dominée par des conflits pulsionnels qui lui échappent.",
          author: "Sigmund Freud",
          work: "Introduction à la psychanalyse & Essais de psychanalyse appliquée",
          quote: "Le Moi n'est pas maître dans sa propre maison.",
          explanation: "Freud inflige la troisième grande blessure narcissique à l'humanité : le psychisme ne s'identifie nullement à la seule conscience. Le Ça pulsionnel, régi par le principe de plaisir, et le Surmoi culpabilisant opèrent à l'insu de la lucidité réflexive, prouvant que l'homme est secrètement gouverné par des désirs refoulés.",
          analyseIllustration: "Cette révolution psychanalytique démontre avec force que définir l'homme par sa seule conscience revient à ignorer la majeure partie de son psychisme."
        },
        {
          statement: "La croyance en un libre arbitre conscient est une illusion née de l'ignorance des causes réelles et corporelles qui nous meuvent.",
          author: "Baruch Spinoza",
          work: "Lettre à Schuller (Correspondance) & Éthique",
          quote: "Les hommes sont conscients de leurs désirs et ignorants des causes par lesquelles ils sont déterminés.",
          explanation: "Spinoza prend l'apologue d'une pierre qui roule : si elle recevait une conscience sans connaître l'impulsion extérieure qui l'a lancée, elle croirait rouler par sa propre volonté. De même, les passions, les appétits corporels et les conditionnements physiques dictent nos impulsions que la conscience se borne à constater a posteriori en s'illusionnant sur sa liberté.",
          analyseIllustration: "Spinoza prouve rigoureusement que la conscience de soi n'est pas une puissance souveraine autonome, mais le témoin partiel de déterminismes naturels profonds."
        },
        {
          statement: "Ce n'est pas la conscience qui détermine la vie des hommes, mais les conditions matérielles et sociales d'existence qui façonnent leur conscience.",
          author: "Karl Marx",
          work: "L'Idéologie allemande & Contribution à la critique de l'économie politique",
          quote: "Ce n'est pas la conscience des hommes qui détermine leur être ; c'est inversement leur être social qui détermine leur conscience.",
          explanation: "Marx arrache la réflexion philosophique à l'idéalisme abstrait : un individu pense et juge d'après sa classe sociale, son milieu économique et les rapports de production dans lesquels il est inséré. L'homme est avant tout un être historique, social et matériel dont la conscience est souvent victime d'idéologies aliénantes.",
          analyseIllustration: "Cette critique matérialiste établit de manière décisive que définir l'homme par la pure conscience désincarnée est une abstraction trompeuse."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il est indéniable que la conscience réflexive demeure le privilège fondateur de la subjectivité et de la responsabilité éthique de l'homme.",
      reponseDefinitive: "Toutefois, nous affirmons qu'elle ne saurait suffire à le définir entièrement : l'homme est un être complexe et incarné, tissé d'inconscient, de corporéité vivante et d'histoire sociale.",
      elargissement: "En ce qui nous concerne, nous dirons que la véritable grandeur de l'homme ne consiste pas à nier ses parts d'ombre ou ses déterminismes, mais à faire de la conscience une conquête continue de lucidité et d'humilité."
    }
  }
];

import { PHILO_RELATIONS_MORALE_BONHEUR } from "./relations/philoRelationsMoraleBonheur";
import { PHILO_RELATIONS_POLITIQUE_DROIT } from "./relations/philoRelationsPolitiqueDroit";
import { PHILO_RELATIONS_EPISTEMO_SCIENCE } from "./relations/philoRelationsEpistemoScience";
import { PHILO_RELATIONS_CULTURE_EXIST } from "./relations/philoRelationsCultureExist";
import { PHILO_RELATIONS_INCONSCIENT_LIBERTE } from "./relations/philoRelationsInconscientLiberte";

PHILO_RELATIONS_DATABASE.push(
  ...PHILO_RELATIONS_MORALE_BONHEUR,
  ...PHILO_RELATIONS_POLITIQUE_DROIT,
  ...PHILO_RELATIONS_EPISTEMO_SCIENCE,
  ...PHILO_RELATIONS_CULTURE_EXIST,
  ...PHILO_RELATIONS_INCONSCIENT_LIBERTE,
);

/**
 * Fonction de détection sémantique par couple conceptuel et relation réelle
 */
export function findMatchingPhiloRelation(statement: string): PhiloRelationEntry | null {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  for (const entry of PHILO_RELATIONS_DATABASE) {
    if (entry.triggerRegex.test(clean)) {
      return entry;
    }
  }

  return null;
}
