/**
 * BASE OFFICIELLE DES FIGURES DE STYLE — SECOND CYCLE (SECONDE, PREMIÈRE, TERMINALE)
 * Conforme aux programmes officiels de Français (Baccalauréat de Français & Commentaires de texte)
 */

export interface FigureDeStyleItem {
  id: string;
  name: string;
  aliases: string[];
  category: 'analogie' | 'substitution' | 'opposition' | 'amplification_insistance' | 'attenuation_omission' | 'construction';
  categoryLabel: string;
  definition: string;
  mechanism: string;
  stylisticEffect: string;
  canonicalExamples: {
    quote: string;
    author: string;
    work?: string;
    explanation: string;
  }[];
  bacMethodCommentary: string;
  examTraps: string[];
}

export const FIGURES_DE_STYLE_DATABASE: FigureDeStyleItem[] = [
  // ==========================================
  // FIGURES D'OPPOSITION
  // ==========================================
  {
    id: 'oxymore',
    name: 'Oxymore',
    aliases: ['oxymoron', 'oxymores'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition",
    definition: "Figure de style qui réunit deux mots de sens opposés et contradictoires dans un même groupe syntaxique (généralement nom + adjectif ou verbe + adverbe).",
    mechanism: "Rapprochement étroit et immédiat de deux réalités inconciliables pour créer une tension poétique et faire naître un sens inédit.",
    stylisticEffect: "Crée la surprise, souligne la complexité des sentiments humains, exprime le déchirement intérieur ou une vérité paradoxale.",
    canonicalExamples: [
      {
        quote: "Cette obscure clarté qui tombe des étoiles",
        author: "Pierre Corneille",
        work: "Le Cid (1637)",
        explanation: "Alliance contradictoire de « obscure » et « clarté » évoquant la lueur diffuse de la nuit étoilée lors de la bataille contre les Maures."
      },
      {
        quote: "Un silence assourdissant",
        author: "Albert Camus",
        work: "La Chute",
        explanation: "Rapprochement paradoxal pour exprimer le poids écrasant de la culpabilité et de l'absence de réaction."
      },
      {
        quote: "Le soleil noir de la Mélancolie",
        author: "Gérard de Nerval",
        work: "El Desdichado (Les Chimères)",
        explanation: "Alliance de l'astre lumineux et de la noirceur du désespoir pour incarner le deuil absolu."
      }
    ],
    bacMethodCommentary: "Pour commenter un oxymore au Bac : 1. Nommer la figure. 2. Citer les deux termes opposés entre guillemets. 3. Expliquer le paradoxe : pourquoi l'auteur réunit-il ces contraires ? 4. En déduire la portée esthétique ou émotionnelle (déchirement, étrangeté du monde).",
    examTraps: [
      "Ne pas confondre avec l'antithèse : l'oxymore colle les deux termes dans le même groupe grammatical (nom+adj), tandis que l'antithèse oppose deux termes ou propositions distants dans la phrase.",
      "Ne pas se contenter de dire « ça fait joli » : toujours justifier l'effet de tension psychologique ou dramaturgique."
    ]
  },
  {
    id: 'antithese',
    name: 'Antithèse',
    aliases: ['antithèse', 'antitheses'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition",
    definition: "Figure de style consistant à rapprocher deux pensées, deux expressions ou deux mots opposés au sein d'une même phrase ou d'un même paragraphe pour en souligner le contraste.",
    mechanism: "Opposition sémantique mise en valeur par une structure syntaxique équilibrée (parallélisme de construction).",
    stylisticEffect: "Met en relief un conflit, dramatise une situation, oppose deux visions du monde ou deux destins.",
    canonicalExamples: [
      {
        quote: "Paris est le plus grand salon du monde, mais c'est aussi le plus désert.",
        author: "Honoré de Balzac",
        work: "Ferragus",
        explanation: "Contraste entre l'effervescence sociale (« salon ») et la solitude individuelle urbaine (« désert »)."
      },
      {
        quote: "Je vis, je meurs ; je me brûle et me noie",
        author: "Louise Labé",
        work: "Sonnets (1555)",
        explanation: "Succession d'antithèses violentes traduisant le tumulte et les contradictions de la passion amoureuse."
      },
      {
        quote: "Être ou ne pas être",
        author: "William Shakespeare",
        work: "Hamlet",
        explanation: "Dilemme existentiel fondamental opposant l'action/la vie et le renoncement/la mort."
      }
    ],
    bacMethodCommentary: "Montrer comment l'antithèse structure le texte en confrontant deux forces contraires (ex: ombre et lumière, puissance et faiblesse).",
    examTraps: [
      "Confondre avec l'oxymore : dans l'antithèse, les mots opposés sont séparés et ne forment pas un groupe grammatical fusionné."
    ]
  },
  {
    id: 'chiasme',
    name: 'Chiasme',
    aliases: ['chiasmes'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition et de construction",
    definition: "Figure de construction qui dispose les termes de manière croisée selon le schéma AB / B'A', où les éléments se répondent symétriquement en miroir.",
    mechanism: "Structure en croix (forme de la lettre grecque Chi : X) inversant l'ordre grammatical ou sémantique des constituants.",
    stylisticEffect: "Suggère l'enfermement, le cercle vicieux, la réciprocité parfaite, le destin inéluctable ou la fatalité tragique.",
    canonicalExamples: [
      {
        quote: "Il faut manger pour vivre et non pas vivre pour manger.",
        author: "Molière",
        work: "L'Avare (1668)",
        explanation: "Schéma A (manger) B (vivre) / B' (vivre) A' (manger), opposant la nécessité physiologique à la gourmandise avide."
      },
      {
        quote: "Le cœur a ses raisons que la raison ne connaît point.",
        author: "Blaise Pascal",
        work: "Pensées",
        explanation: "Chiasme sémantique cœur/raison - raison/cœur distinguant l'intuition sensible et la logique rationnelle."
      },
      {
        quote: "Ayant le feu pour père, et pour mère la cendre",
        author: "Agrippa d'Aubigné",
        work: "Les Tragiques",
        explanation: "Croisement grammatical et symbolique soulignant la violence des guerres de religion."
      }
    ],
    bacMethodCommentary: "Toujours décomposer le schéma A-B / B'-A' au brouillon, puis expliquer si le croisement évoque une union, une réciprocité ou un enfermement étouffant.",
    examTraps: [
      "Confondre avec un simple parallélisme (schéma AB / AB) : le chiasme inverse l'ordre dans le second membre (AB / BA)."
    ]
  },
  {
    id: 'antiphrase',
    name: 'Antiphrase',
    aliases: ['antiphrases', 'ironie'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition (Ironie)",
    definition: "Figure qui consiste à dire le contraire de ce que l'on pense réellement, tout en laissant entendre le véritable sens (base de l'ironie).",
    mechanism: "Écart manifeste entre le sens littéral des mots et la situation réelle ou l'intonation du locuteur.",
    stylisticEffect: "Dénonce, ridiculise, provoque le rire critique ou la réprobation morale du lecteur.",
    canonicalExamples: [
      {
        quote: "Quel courage ! (adressé à quelqu'un qui prend la fuite)",
        author: "Usage satirique",
        explanation: "Louange feinte servant en réalité à flétrir la lâcheté."
      },
      {
        quote: "Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées.",
        author: "Voltaire",
        work: "Candide (chapitre 3)",
        explanation: "Voltaire fait l'éloge esthétique d'un champ de bataille pour mieux dénoncer l'horreur sanguinaire de la guerre."
      }
    ],
    bacMethodCommentary: "Repérer la complicité ironique créée entre l'auteur et le lecteur aux dépens de la cible moquée.",
    examTraps: [
      "Prendre la phrase au premier degré en commettant un contresens critique grave sur la pensée de l'auteur."
    ]
  },

  // ==========================================
  // FIGURES D'ATTÉNUATION ET D'OMISSION
  // ==========================================
  {
    id: 'litote',
    name: 'Litote',
    aliases: ['litotes'],
    category: 'attenuation_omission',
    categoryLabel: "Figure d'atténuation",
    definition: "Figure de style qui consiste à dire moins pour en faire entendre beaucoup plus, fréquemment par le biais d'une double négation.",
    mechanism: "Atténuation feinte de l'expression qui, par pudeur ou ironie, renforce considérablement l'intensité du propos.",
    stylisticEffect: "Exprime la pudeur amoureuse, la retenue tragique, l'élégance classique ou une affirmation déguisée.",
    canonicalExamples: [
      {
        quote: "Va, je ne te hais point.",
        author: "Pierre Corneille",
        work: "Le Cid (Acte III, scène 4)",
        explanation: "Chimène s'adresse à Rodrigue : par pudeur et devoir filial, elle ne peut dire « je t'aime », mais « je ne te hais point » signifie un amour passionné absolu."
      },
      {
        quote: "Ce n'est pas un mauvais élève.",
        author: "Usage courant",
        explanation: "Formulation négative atténuée pour signifier qu'il s'agit d'un très bon élève."
      },
      {
        quote: "Le repas n'était pas désagréable.",
        author: "Usage classique",
        explanation: "Signifie que le repas était délicieux et exquis."
      }
    ],
    bacMethodCommentary: "Souligner la retenue et la tension entre ce qui est dit (la négation) et ce qui est pensé (le sentiment exacerbé).",
    examTraps: [
      "Ne pas confondre avec l'euphémisme : la litote veut renforcer l'idée (dire le plus), alors que l'euphémisme veut masquer une vérité douloureuse ou choquante (adoucir)."
    ]
  },
  {
    id: 'euphemisme',
    name: 'Euphémisme',
    aliases: ['euphémisme', 'euphemismes'],
    category: 'attenuation_omission',
    categoryLabel: "Figure d'atténuation",
    definition: "Figure qui consiste à adoucir l'expression d'une idée triste, brutale ou offensante pour en atténuer la violence.",
    mechanism: "Substitution d'un terme cru ou blessant par un terme neutre, imagé ou poétique.",
    stylisticEffect: "Adoucit la douleur, respecte les convenances sociales, masque la mort ou la souffrance.",
    canonicalExamples: [
      {
        quote: "Il nous a quittés / Il s'est éteint paisiblement",
        author: "Usage courant",
        explanation: "Adoucissement pour exprimer la mort sans prononcer le verbe « mourir »."
      },
      {
        quote: "Les demandeurs d'emploi / Les non-voyants",
        author: "Langage institutionnel",
        explanation: "Atténuation pour « chômeurs » ou « aveugles » afin de préserver la dignité des personnes."
      },
      {
        quote: "Elle a vécu, Myrto, la jeune Tarentine",
        author: "André Chénier",
        work: "La Jeune Tarentine",
        explanation: "« Elle a vécu » signifie pudiquement qu'elle est morte."
      }
    ],
    bacMethodCommentary: "Analyser la volonté de pudeur, de compassion ou le poids des convenances de l'époque.",
    examTraps: [
      "Confondre avec la litote : l'euphémisme cherche à cacher/adoucir, la litote cherche à intensifier."
    ]
  },

  // ==========================================
  // FIGURES D'ANALOGIE ET D'IMAGES
  // ==========================================
  {
    id: 'allegorie',
    name: 'Allégorie',
    aliases: ['allégorie', 'allegories'],
    category: 'analogie',
    categoryLabel: "Figure d'analogie",
    definition: "Figure de style qui représente de manière concrète, imagée et vivante une idée abstraite (souvent marquée par une majuscule et un réseau de personnifications).",
    mechanism: "Matérialisation sensible d'un concept immatériel sous les traits d'un personnage, d'un animal ou d'une scène concrète.",
    stylisticEffect: "Rend palpable une vérité morale ou métaphysique, frappe l'imagination et facilite la mémorisation didactique.",
    canonicalExamples: [
      {
        quote: "Je vis cette Faucheuse. Elle était dans son champ. Elle barrait de grands pas sa ligne de carnage ; Un noir squelette était son second personnage.",
        author: "Victor Hugo",
        work: "Les Contemplations (Mors)",
        explanation: "Allégorie de la Mort représentée concrètement comme une paysanne moissonnant les vies humaines."
      },
      {
        quote: "La Liberté guidant le peuple",
        author: "Eugène Delacroix",
        work: "Tableau (1830)",
        explanation: "Allégorie visuelle de la Liberté incarnée par une femme brandissant le drapeau tricolore au milieu des barricades."
      },
      {
        quote: "La Justice aux yeux bandés tenant une balance et un glaive",
        author: "Symbole classique",
        explanation: "Allégorie de l'impartialité (le bandeau), de l'équité (la balance) et de la sanction (le glaive)."
      }
    ],
    bacMethodCommentary: "Identifier le concept abstrait caché derrière la figure concrète et relever tous les détails matériels qui lui donnent vie.",
    examTraps: [
      "Confondre avec une simple métaphore : l'allégorie est un système complet et développé d'images représentant une abstraction."
    ]
  },
  {
    id: 'metaphore',
    name: 'Métaphore',
    aliases: ['métaphore', 'metaphores', 'metaphore filee'],
    category: 'analogie',
    categoryLabel: "Figure d'analogie",
    definition: "Figure d'assimilation qui rapproche deux éléments (le comparé et le comparant) sur la base d'une ressemblance, sans outil de comparaison explicite (comme, tel, pareil à).",
    mechanism: "Fusion immédiate entre le comparé et le comparant créant une équivalence sémantique poétique nouvelle.",
    stylisticEffect: "Création poétique pure, transfigure le réel, densifie l'émotion et renouvelle le regard porté sur le monde.",
    canonicalExamples: [
      {
        quote: "Ce toit tranquille, où marchent des colombes, / Entre les pins palpite, entre les tombes",
        author: "Paul Valéry",
        work: "Le Cimetière marin",
        explanation: "Métaphore où le « toit » désigne la mer Méditerranée et les « colombes » les voiles blanches des bateaux."
      },
      {
        quote: "La vie est un songe",
        author: "Calderón de la Barca",
        work: "La vie est un songe",
        explanation: "Équivalence métaphorique entre l'existence humaine et l'illusion éphémère du rêve."
      },
      {
        quote: "L'or du soir",
        author: "Charles Baudelaire",
        explanation: "Métaphore associant la lumière du soleil couchant au métal précieux."
      }
    ],
    bacMethodCommentary: "Distinguer le comparé, le comparant et le point commun (sème commun) qui justifie l'image.",
    examTraps: [
      "Confondre avec la comparaison qui possède un mot de comparaison visible (« comme », « semblable à »)."
    ]
  },
  {
    id: 'personnification',
    name: 'Personnification',
    aliases: ['personnifications'],
    category: 'analogie',
    categoryLabel: "Figure d'analogie",
    definition: "Figure qui attribue des caractéristiques humaines (sentiments, paroles, gestes, intentions) à un être inanimé, un animal ou une idée abstraite.",
    mechanism: "Transfert d'attributs anthropomorphiques sur un objet ou un phénomène naturel.",
    stylisticEffect: "Anime le décor, rend la nature menaçante ou complice, dramatise la scène littéraire.",
    canonicalExamples: [
      {
        quote: "La rue assourdissante autour de moi hurlait.",
        author: "Charles Baudelaire",
        work: "Les Fleurs du Mal (À une passante)",
        explanation: "La rue moderne est dotée de la voix humaine et d'une agressivité monstrueuse (« hurlait »)."
      },
      {
        quote: "Le vent hurle et la forêt gémit sous l'orage.",
        author: "Romantisme",
        explanation: "Les éléments naturels expriment une souffrance quasi humaine."
      }
    ],
    bacMethodCommentary: "Montrer quel sentiment humain est projeté sur l'objet et comment cela éclaire l'état d'âme du locuteur.",
    examTraps: [
      "Confondre avec l'allégorie qui représente toujours une idée abstraite (alors que la personnification s'applique à un objet concret ou un animal)."
    ]
  },

  // ==========================================
  // FIGURES DE SUBSTITUTION
  // ==========================================
  {
    id: 'metonymie',
    name: 'Métonymie',
    aliases: ['métonymie', 'metonymies'],
    category: 'substitution',
    categoryLabel: "Figure de substitution",
    definition: "Figure de style qui remplace un mot par un autre lié au premier par un rapport logique constant (le contenant pour le contenu, l'effet pour la cause, l'instrument pour l'utilisateur, etc.).",
    mechanism: "Remplacement fondé sur la contiguïté réelle ou logique entre deux entités du monde.",
    stylisticEffect: "Rend le discours plus vif, condensé, imagé et percutant.",
    canonicalExamples: [
      {
        quote: "Boire un verre",
        author: "Usage quotidien",
        explanation: "Le contenant (le verre) désigne par métonymie le contenu (l'eau ou le liquide à l'intérieur)."
      },
      {
        quote: "Paris a froid, Paris a faim",
        author: "Paul Éluard",
        work: "Courage (1943)",
        explanation: "La ville de Paris désigne par métonymie l'ensemble de ses habitants sous l'Occupation."
      },
      {
        quote: "Une bonne plume",
        author: "Usage courant",
        explanation: "L'instrument (la plume) désigne l'écrivain qui s'en sert."
      }
    ],
    bacMethodCommentary: "Expliciter le lien logique de métonymie : contenant/contenu, lieu/personnes, objet/activité.",
    examTraps: [
      "Confondre métonymie (lien logique contigu) et métaphore (lien de ressemblance sans lien réel)."
    ]
  },
  {
    id: 'synecdoque',
    name: 'Synecdoque',
    aliases: ['synecdoques'],
    category: 'substitution',
    categoryLabel: "Figure de substitution",
    definition: "Variété spécifique de métonymie qui consiste à désigner le tout par la partie, ou la partie par le tout (rapport d'inclusion matérielle).",
    mechanism: "Substitution fondée sur l'inclusion physique d'un élément dans un ensemble plus vaste.",
    stylisticEffect: "Focalise l'attention sur un détail saillant, fragmente le regard ou grandit l'objet.",
    canonicalExamples: [
      {
        quote: "Une voile à l'horizon",
        author: "Usage classique",
        explanation: "La « voile » (la partie) désigne le navire tout entier (le tout)."
      },
      {
        quote: "Mettre quelqu'un sous son toit",
        author: "Usage courant",
        explanation: "Le « toit » désigne la maison tout entière pour signifier l'hospitalité."
      },
      {
        quote: "Cent têtes de bétail",
        author: "Usage agricole",
        explanation: "La « tête » désigne chaque animal complet."
      }
    ],
    bacMethodCommentary: "Montrer quel détail matériel est isolé et pourquoi l'auteur choisit cette partie pour caractériser le tout.",
    examTraps: [
      "Oublier que la synecdoque est une métonymie de type « la partie pour le tout »."
    ]
  },
  {
    id: 'periphrase',
    name: 'Périphrase',
    aliases: ['périphrase', 'periphrases'],
    category: 'substitution',
    categoryLabel: "Figure de substitution",
    definition: "Figure qui consiste à remplacer un mot unique par une expression descriptive de plusieurs mots qui le caractérise.",
    mechanism: "Développement périphrastique valorisant, poétique ou satirique autour d'un être ou d'un lieu.",
    stylisticEffect: "Évite les répétitions, ennoblit le sujet, crée une atmosphère poétique ou mystérieuse.",
    canonicalExamples: [
      {
        quote: "La ville lumière",
        author: "Usage universel",
        explanation: "Périphrase désignant Paris en célébrant son rayonnement culturel et historique."
      },
      {
        quote: "Le roi des animaux",
        author: "Jean de La Fontaine",
        work: "Fables",
        explanation: "Périphrase désignant le lion en soulignant sa majesté et son pouvoir souverain."
      },
      {
        quote: "L'astre du jour",
        author: "Poésie classique",
        explanation: "Périphrase poétique désignant le soleil."
      }
    ],
    bacMethodCommentary: "Identifier le terme caché et analyser la vision que l'auteur veut imposer à travers cette périphrase.",
    examTraps: [
      "Prendre la périphrase comme un bavardage inutile : chaque mot de la périphrase véhicule un jugement de valeur."
    ]
  },

  // ==========================================
  // FIGURES D'AMPLIFICATION ET D'INSISTANCE
  // ==========================================
  {
    id: 'hyperbole',
    name: 'Hyperbole',
    aliases: ['hyperboles'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'amplification",
    definition: "Figure qui consiste à exagérer démesurément les termes pour frapper vivement l'imagination et susciter une forte impression.",
    mechanism: "Amplification lexicale systématique (superlatifs, adjectifs démesurés, chiffres colossaux).",
    stylisticEffect: "Dramatise, sublime, choque ou crée un effet comique et parodique.",
    canonicalExamples: [
      {
        quote: "Je meurs de faim / Je suis mort de fatigue",
        author: "Usage courant",
        explanation: "Exagération colossale d'une sensation physique ordinaire."
      },
      {
        quote: "Un bruit à réveiller un mort",
        author: "Expression populaire",
        explanation: "Amplification impossible défiant les lois de la nature pour souligner le vacarme."
      },
      {
        quote: "Ses yeux étaient deux brasiers dévorants qui consumaient l'horizon",
        author: "Poésie romantique",
        explanation: "Exagération soulignant l'intensité surnaturelle du regard."
      }
    ],
    bacMethodCommentary: "Montrer comment l'exagération traduit le débordement émotionnel du personnage ou de l'auteur.",
    examTraps: [
      "Ne pas confondre hyperbole littéraire et simple registre familier : en littérature, elle sert souvent le registre épique ou tragique."
    ]
  },
  {
    id: 'anaphore',
    name: 'Anaphore',
    aliases: ['anaphores'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'insistance",
    definition: "Répétition délibérée d'un même mot ou d'un même groupe de mots en tête de phrases, de vers ou de strophes successives.",
    mechanism: "Martèlement rythmique créant une incantation, un crescendo ou une obsession poétique.",
    stylisticEffect: "Donne un rythme oratoire puissant, captive l'auditoire, scande une émotion ou structure un discours d'éloquence.",
    canonicalExamples: [
      {
        quote: "Paris outragé ! Paris brisé ! Paris martyrisé ! mais Paris libéré !",
        author: "Charles de Gaulle",
        work: "Discours à l'Hôtel de Ville (25 août 1944)",
        explanation: "Anaphore du nom « Paris » martelant la souffrance puis la victoire nationale."
      },
      {
        quote: "Moi président de la République...",
        author: "François Hollande",
        work: "Débat présidentiel (2012)",
        explanation: "Anaphore répétée 15 fois installant l'image d'un exercice renouvelé du pouvoir d'État."
      },
      {
        quote: "Rome, l'unique objet de mon ressentiment ! / Rome, à qui vient ton bras d'immoler mon amant !",
        author: "Pierre Corneille",
        work: "Horace (Camille)",
        explanation: "Anaphore de « Rome » exprimant la haine tragique et la fureur vengeresse de Camille."
      }
    ],
    bacMethodCommentary: "Relever le mot répété en tête et décrire l'effet de crescendo émotionnel ou l'affirmation d'une certitude inébranlable.",
    examTraps: [
      "Confondre avec une répétition ordinaire dispersée : l'anaphore exige la répétition rigoureuse en début de séquence."
    ]
  },
  {
    id: 'gradation',
    name: 'Gradation',
    aliases: ['gradations', 'climax'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'amplification",
    definition: "Succession ordonnée de termes d'intensité croissante (gradation ascendante) ou décroissante (gradation descendante).",
    mechanism: "Évolution progressive de la puissance sémantique des mots choisis.",
    stylisticEffect: "Crée une montée dramatique jusqu'au paroxysme ou un effondrement mélancolique.",
    canonicalExamples: [
      {
        quote: "Va, cours, vole, et nous venge !",
        author: "Pierre Corneille",
        work: "Le Cid (Don Diègue à Rodrigue)",
        explanation: "Gradation ascendante de vitesse et d'urgence dramatique (« va » -> « cours » -> « vole »)."
      },
      {
        quote: "C'est un roc !... c'est un pic !... c'est un cap ! / Que dis-je, c'est un cap ?... C'est une péninsule !",
        author: "Edmond Rostand",
        work: "Cyrano de Bergerac",
        explanation: "Gradation géologique spectaculaire dans la tirade du nez."
      }
    ],
    bacMethodCommentary: "Observer la trajectoire de la gradation et son point culminant (le climax).",
    examTraps: [
      "Oublier de préciser si la gradation est ascendante (vers le plus fort) ou descendante (vers le plus faible)."
    ]
  },
  {
    id: 'preterition',
    name: 'Prétérition',
    aliases: ['preteritions', 'prétéritions'],
    category: 'attenuation_omission',
    categoryLabel: "Figure d'atténuation",
    definition: "Figure par laquelle on affirme passer sous silence quelque chose dont on parle néanmoins explicitement.",
    mechanism: "Déclaration formelle de ne pas vouloir évoquer un fait tout en l'exposant en détail aux yeux du lecteur ou de l'auditoire.",
    stylisticEffect: "Attire vivement l'attention sur le sujet prétendument tu, crée un effet de connivence ironique ou renforce l'accusation.",
    canonicalExamples: [
      {
        quote: "Si vous comptez sur moi pour vous révéler qu'il s'agit de trafic d'avions, vous vous trompez lourdement.",
        author: "Hergé",
        work: "Les Aventures de Tintin",
        explanation: "Affirmation de refuser de divulguer le trafic d'avions, ce qui a pour résultat exact d'en informer le lecteur."
      },
      {
        quote: "Je ne vous rappellerai pas sa trahison, ni la douleur qu'elle causa à ses proches...",
        author: "Modèle oratoire classique",
        explanation: "Feindre d'oublier ou d'épargner un coupable pour mieux souligner la gravité de ses fautes."
      }
    ],
    bacMethodCommentary: "Souligner le décalage entre la prétention de silence (« Je ne dirai pas... ») et la révélation effective.",
    examTraps: ["Ne pas confondre avec l'ellipse : l'ellipse supprime des mots, alors que la prétérition énonce ce qu'elle feint de taire."]
  },
  {
    id: 'antonomase',
    name: 'Antonomase',
    aliases: ['antonomases'],
    category: 'substitution',
    categoryLabel: "Figure de substitution",
    definition: "Figure de style consistant à remplacer un nom commun par un nom propre emblématique, ou inversement un nom propre par une périphrase/qualité.",
    mechanism: "Élévation d'un individu ou d'un personnage de fiction au rang de symbole universel d'un vice, d'une vertu ou d'un rôle.",
    stylisticEffect: "Fixe un trait de caractère ou une identité avec une force d'évocation immédiate et percutante.",
    canonicalExamples: [
      {
        quote: "C'est un Tartufe.",
        author: "Molière / Usage classique",
        explanation: "Emploi du nom propre Tartuffe comme nom commun pour désigner n'importe quel hypocrite ou faux dévot."
      },
      {
        quote: "L'empereur des Français pour Napoléon.",
        author: "Référentiel historique officiel",
        explanation: "Substituer le titre au nom propre pour magnifier la fonction impériale."
      }
    ],
    bacMethodCommentary: "Montrer quel type humain ou quel symbole universel est convoqué par le nom.",
    examTraps: ["Confondre antonomase et métaphore pure : l'antonomase repose spécifiquement sur le passage nom propre <-> nom commun."]
  },
  {
    id: 'onomatopee',
    name: 'Onomatopée',
    aliases: ['onomatopees', 'onomatopées'],
    category: 'substitution',
    categoryLabel: "Figure de sonorité et de substitution",
    definition: "Figure de style dans laquelle les mots se font entendre par leurs sons, en imitant directement les bruits réels qu'ils expriment.",
    mechanism: "Imitation acoustique directe d'un phénomène sonore par la phonétique de la langue.",
    stylisticEffect: "Donne un relief sonore concret, immersif et vivant à la scène ou au récit.",
    canonicalExamples: [
      {
        quote: "Le tic-tac me dérange.",
        author: "Usage littéraire courant",
        explanation: "Imitation du battement régulier et mécanique du balancier de l'horloge."
      },
      {
        quote: "Pour qui sont ces serpents qui sifflent sur vos têtes ?",
        author: "Jean Racine",
        work: "Andromaque (harmonie imitative)",
        explanation: "Allitération en [s] reproduisant le sifflement réel des reptiles."
      }
    ],
    bacMethodCommentary: "Relier la matérialité phonique du son à l'angoisse, à la violence ou à l'ambiance du texte.",
    examTraps: ["Ne pas citer une onomatopée comme un simple mot de bande dessinée, mais expliciter l'effet d'immersion textuelle."]
  },
  {
    id: 'accumulation',
    name: 'Accumulation',
    aliases: ['accumulations'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'amplification",
    definition: "Énumération et succession rapide de mots (noms, verbes, adjectifs, adverbes) de même valeur syntaxique dans le but de produire un effet d'abondance ou de profusion.",
    mechanism: "Empilement dense de termes successifs sans hiérarchie obligatoirement ascendante.",
    stylisticEffect: "Suggère le foisonnement, le désordre, le vertige, l'enthousiasme excessif ou la saturation.",
    canonicalExamples: [
      {
        quote: "Cet enfant est très intelligent, excellent, super, génial.",
        author: "Exemple canonique du fascicule officiel",
        explanation: "Accumulation d'adjectifs laudatifs pour saturer l'éloge et souligner l'admiration."
      },
      {
        quote: "Adieu veau, vache, cochon, couvée...",
        author: "Jean de La Fontaine",
        work: "La Laitière et le Pot au lait",
        explanation: "Énumération précipitée des biens imaginaires anéantis par la chute du pot."
      }
    ],
    bacMethodCommentary: "Caractériser le rythme saccadé créé par la multiplication des termes et son lien avec l'état émotionnel.",
    examTraps: ["Différence avec la gradation : l'accumulation juxtapose sans ordre strict d'intensité, la gradation suit une progression ordonnée."]
  },
  {
    id: 'repetition',
    name: 'Répétition',
    aliases: ['repetitions', 'répétitions'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'amplification",
    definition: "Reprise intentionnelle d'un même mot ou groupe de mots dans un passage pour insister sur une obsession, un sentiment ou une idée maîtresse.",
    mechanism: "Itération voulue d'un signifiant dans différentes positions syntaxiques.",
    stylisticEffect: "Crée une incantation poétique, un refrain obsédant ou martèle une vérité morale.",
    canonicalExamples: [
      {
        quote: "Oh ! Cèdre du Liban, Cèdres de nos délires, / Cèdres de notre extase et de notre fierté.",
        author: "Charles Corm",
        work: "La Montagne Inspirée",
        explanation: "Répétition lyrique et incantatoire du mot « Cèdre » célébrant l'arbre sacré et l'identité patriotique."
      },
      {
        quote: "La terre était grise, le ciel était gris, toute l'atmosphère était grise.",
        author: "Exemple de prose atmosphérique",
        explanation: "Martèlement de l'adjectif « gris » traduisant la monotonie et le désespoir."
      }
    ],
    bacMethodCommentary: "Montrer que la répétition n'est pas une maladresse, mais un choix stylistique délibéré de mise en relief.",
    examTraps: ["Distinguer la répétition libre de l'anaphore (qui exige d'être strictement en début de vers ou de phrase)."]
  },
  {
    id: 'paronomase',
    name: 'Paronomase',
    aliases: ['paronomases'],
    category: 'amplification_insistance',
    categoryLabel: "Figure d'amplification phonique",
    definition: "Emploi dans un même segment de texte de mots de sens différents mais de sonorités très proches (paronymes), créant un effet saisissant.",
    mechanism: "Rapprochement acoustique étroit provoquant une collision et une résonance sémantique.",
    stylisticEffect: "Frappe l'oreille, rapproche des notions par le jeu des sons, souligne des échos poétiques ou ironiques.",
    canonicalExamples: [
      {
        quote: "Pâles membres de Perle, et ces cheveux soyeux.",
        author: "Paul Valéry",
        work: "La Jeune Parque",
        explanation: "Proximité sonore entre « membres » et « perle » instaurant un reflet lumineux sensuel."
      },
      {
        quote: "Qui se ressemble s'assemble.",
        author: "Proverbe populaire",
        explanation: "Jeu paronomastique gravant la maxime dans la mémoire auditive."
      }
    ],
    bacMethodCommentary: "Analyser la tension entre la quasi-identité des sons et l'écart des sens.",
    examTraps: ["Ne pas confondre avec l'allitération (simple répétition d'une consonne) : la paronomase oppose deux mots entiers proches."]
  },
  {
    id: 'paradoxe',
    name: 'Paradoxe',
    aliases: ['paradoxes'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition",
    definition: "Énoncé qui paraît contenir une contradiction logique et va contre l'opinion commune reçue, mais révèle une vérité profonde.",
    mechanism: "Confrontation d'affirmations opposées pour ébranler les certitudes et inviter au dépassement critique.",
    stylisticEffect: "Surprend le lecteur, stimule la réflexion philosophique, démonte les préjugés et les évidences trompeuses.",
    canonicalExamples: [
      {
        quote: "On est quelquefois aussi différent de soi-même que des autres.",
        author: "François de La Rochefoucauld",
        work: "Maximes",
        explanation: "Affirmation paradoxale révélant l'inconstance fondamentale de la nature humaine."
      },
      {
        quote: "Les premiers seront les derniers.",
        author: "Évangile selon saint Matthieu",
        explanation: "Renversement des hiérarchies terrestres au profit des valeurs spirituelles."
      }
    ],
    bacMethodCommentary: "Mettre en évidence quelle fausse évidence le paradoxe vient démolir.",
    examTraps: ["Ne pas réduire le paradoxe à une simple erreur ou non-sens : il contient toujours une vérité cachée plus haute."]
  },
  {
    id: 'attelage',
    name: 'Attelage (Zeugma)',
    aliases: ['attelages', 'zeugma', 'zeugme'],
    category: 'opposition',
    categoryLabel: "Figure d'opposition et d'attelage syntaxique",
    definition: "Rapprochement sous un même verbe ou mot recteur de deux compléments de sens ou de nature différents, le plus souvent l'un concret et l'autre abstrait.",
    mechanism: "Coordination asymétrique unissant le matériel et le spirituel dans un même lien syntaxique.",
    stylisticEffect: "Provoque un effet de rupture comique, ironique, poétique ou satirique très percutant.",
    canonicalExamples: [
      {
        quote: "Il admirait l'exaltation de son âme et les dentelles de sa jupe.",
        author: "Gustave Flaubert",
        work: "Madame Bovary",
        explanation: "Rapprochement discordant de « l'âme » (abstrait/spirituel) et de la « jupe » (concret/matériel) illustrant l'ironie flaubertienne face aux illusions romantiques."
      },
      {
        quote: "Il prit du ventre et de l'importance.",
        author: "Usage classique",
        explanation: "Association d'une transformation physique triviale et d'une ascension sociale bourgeoise."
      }
    ],
    bacMethodCommentary: "Expliciter le choc entre le registre matériel et le registre abstrait orchestré par l'auteur.",
    examTraps: ["Penser qu'il s'agit d'une faute de grammaire : l'attelage est une figure de style délibérée et hautement littéraire."]
  },
  {
    id: 'parallelisme',
    name: 'Parallélisme',
    aliases: ['parallelismes', 'parallélismes'],
    category: 'construction',
    categoryLabel: "Figure de construction",
    definition: "Emploi d'une syntaxe rigoureusement semblable pour deux énoncés consécutifs afin de rythmer la phrase ou d'orner le discours.",
    mechanism: "Reproduction de la même structure grammaticale (ex: Sujet + Verbe + COD / Sujet + Verbe + COD).",
    stylisticEffect: "Donne un rythme solennel et équilibré, permet de comparer, de rapprocher ou d'opposer deux réalités.",
    canonicalExamples: [
      {
        quote: "Que la vie est belle ! Que la nature est tendre !",
        author: "Exemple canonique du fascicule officiel",
        explanation: "Deux exclamations de structure syntaxique rigoureusement jumelle créant une mélodie enthousiaste."
      },
      {
        quote: "Partir pour tout oublier, partir pour tout recommencer.",
        author: "Modèle lyrique",
        explanation: "Structure en infinitif + pour + tout + verbe scandant la volonté d'un nouveau départ."
      }
    ],
    bacMethodCommentary: "Souligner l'équilibre binaire ou ternaire de la phrase et la mise en parallèle des idées.",
    examTraps: ["Ne pas confondre avec le chiasme qui inverse l'ordre (AB / B'A'), tandis que le parallélisme conserve strictement l'ordre (AB / A'B')."]
  },
  {
    id: 'ellipse',
    name: 'Ellipse',
    aliases: ['ellipses'],
    category: 'construction',
    categoryLabel: "Figure de construction et d'omission",
    definition: "Suppression délibérée de termes dans une phrase qui restent néanmoins parfaitement compréhensibles par le contexte.",
    mechanism: "Économie verbale gommant les mots grammaticaux ou le verbe pour dynamiser la phrase.",
    stylisticEffect: "Accélère le tempo narratif, donne de la vivacité au style, crée une concision dramatique saisissante.",
    canonicalExamples: [
      {
        quote: "Je t'aimais inconstant, qu'aurais-je fait fidèle ?",
        author: "Jean Racine",
        work: "Andromaque (Hermione à Pyrrhus)",
        explanation: "Suppression de la proposition hypothétique (« qu'aurais-je fait si tu avais été fidèle ? ») rendant le reproche fulgurant."
      },
      {
        quote: "Heureux qui, comme Ulysse, a fait un beau voyage.",
        author: "Joachim du Bellay",
        work: "Les Regrets",
        explanation: "Omission du verbe principal (« Heureux est celui qui... »)."
      }
    ],
    bacMethodCommentary: "Identifier les mots sous-entendus et expliquer comment leur absence donne de la vitesse ou de l'intensité.",
    examTraps: ["Ne pas confondre ellipse narrative (saut dans le temps du récit) et ellipse stylistique (suppression de mots dans la phrase)."]
  },
  {
    id: 'anacoluthe',
    name: 'Anacoluthe',
    aliases: ['anacoluthes'],
    category: 'construction',
    categoryLabel: "Figure de construction syntaxique",
    definition: "Rupture volontaire de la construction syntaxique courante au milieu d'une phrase.",
    mechanism: "Décrochage grammatical où le sujet initialement attendu est remplacé par un autre, rompant l'attente du lecteur.",
    stylisticEffect: "Traduit le trouble psychologique, la passion, la déroute de la pensée ou la singularité de la vision poétique.",
    canonicalExamples: [
      {
        quote: "Exilé sur le sol au milieu des huées, Ses ailes de géant l'empêchent de marcher.",
        author: "Charles Baudelaire",
        work: "L'Albatros (Les Fleurs du Mal)",
        explanation: "Rupture syntaxique : le participe « Exilé » semblait qualifier le poète-albatros, mais le sujet devient « Ses ailes de géant »."
      },
      {
        quote: "Le nez de Cléopâtre, s'il eût été plus court, toute la face de la terre aurait changé.",
        author: "Blaise Pascal",
        work: "Pensées",
        explanation: "Le groupe nominal « Le nez de Cléopâtre » reste suspendu sans verbe direct dans la proposition principale."
      }
    ],
    bacMethodCommentary: "Montrer en quoi l'écart syntaxique n'est pas une maladresse mais une puissante trouvaille expressive.",
    examTraps: ["Penser qu'il s'agit d'une faute d'orthographe ou de grammaire : l'anacoluthe littéraire est un art de la rupture."]
  },
  {
    id: 'asyndete',
    name: 'Asyndète',
    aliases: ['asyndetes', 'asyndètes'],
    category: 'construction',
    categoryLabel: "Figure de construction",
    definition: "Absence systématique d'outils de liaison (conjonctions de coordination ou adverbes) entre des groupes de mots, propositions ou phrases successives.",
    mechanism: "Juxtaposition pure séparée par de simples virgules ou points sans aucun connecteur (« et », « car », « donc »).",
    stylisticEffect: "Crée un rythme haletant, sec, rapide, traduisant la précipitation, la panique ou la spontanéité d'un constat.",
    canonicalExamples: [
      {
        quote: "Le jour tombait. La terre devenait grisâtre. J'attendais, l'œil fixé sur la ligne des arbres où l'un des deux chemins conduisait tout droit. J'étais inquiet.",
        author: "Henri Bosco",
        work: "L'Enfant et la Rivière",
        explanation: "Succession de phrases brèves sans liens de coordination, installant une tension angoissante."
      },
      {
        quote: "Je suis venu, j'ai vu, j'ai vaincu (Veni, vidi, vici).",
        author: "Jules César",
        explanation: "Trois verbes d'action juxtaposés sans conjonction, signifiant la rapidité foudroyante de la victoire."
      }
    ],
    bacMethodCommentary: "Souligner l'absence de connecteurs et le rythme saccadé qui en résulte.",
    examTraps: ["L'inverse de l'asyndète est la polysyndète (exagération voulue des mots de liaison comme « et » ou « ni »)."]
  },
  {
    id: 'interrogation_oratoire',
    name: 'Interrogation oratoire (ou rhétorique)',
    aliases: ['interrogations oratoires', 'interrogation rhetorique', 'question rhetorique', 'questions rhetoriques'],
    category: 'construction',
    categoryLabel: "Figure de construction et d'éloquence",
    definition: "Fausse question posée à laquelle l'orateur n'attend aucune réponse car celle-ci s'impose avec évidence à tous.",
    mechanism: "Adoption de la forme interrogative pour affirmer avec force, émouvoir, prendre à témoin ou confondre l'adversaire.",
    stylisticEffect: "Sollicite vivement l'adhésion de l'auditoire, crée une dramatisation pathétique et renforce l'argumentation.",
    canonicalExamples: [
      {
        quote: "Juste Ciel ! Puis-je entendre et souffrir ce langage ? [...] Qu'ai-je à me plaindre ? Où les pertes que j'ai faites ? Je n'y vais que pour vous, barbare que vous êtes.",
        author: "Jean Racine",
        work: "Iphigénie (Achille à Agamemnon)",
        explanation: "Questions pathétiques traduisant l'indignation et la fureur héroïque d'Achille sans attendre de réplique."
      },
      {
        quote: "Jusques à quand abuseras-tu de notre patience, Catilina ?",
        author: "Cicéron",
        work: "Première Catilinaire",
        explanation: "Question oratoire légendaire sommant le conspirateur de reconnaître son forfait devant le Sénat romain."
      }
    ],
    bacMethodCommentary: "Démontrer que la question cache une affirmation catégorique et pousse l'auditeur dans ses retranchements.",
    examTraps: ["Ne pas traiter l'interrogation oratoire comme une simple demande d'information : c'est un puissant outil de persuasion."]
  }
];

/**
 * Recherche spécifique d'une figure de style
 */
export function findFigureDeStyle(cleanQuery: string): FigureDeStyleItem | null {
  const norm = cleanQuery.toLowerCase().trim();

  // Si l'utilisateur cherche explicitement une famille entière (ex: "figures d'opposition"),
  // on ne renvoie pas une figure isolée mais on laisse findFigureFamily prendre le relais.
  if (/figures?\s+(?:d['’]|de\s+)(?:oppositions?|analogies?|substitutions?|amplifications?|insistances?|att[eé]nuations?|styles?|rh[eé]toriques?|constructions?)/i.test(norm)) {
    return null;
  }

  for (const fig of FIGURES_DE_STYLE_DATABASE) {
    if (norm === fig.id || norm === fig.name.toLowerCase()) {
      return fig;
    }
    for (const alias of fig.aliases) {
      const regex = new RegExp(`\\b${alias.toLowerCase()}\\b`, 'i');
      if (regex.test(norm)) {
        return fig;
      }
    }
  }

  return null;
}

export interface FigureFamilyResult {
  categoryKey: string;
  categoryLabel: string;
  description: string;
  figures: FigureDeStyleItem[];
}

/**
 * Détecte si la requête porte sur une grande famille de figures de style
 * (ex: "figures d'opposition", "figures de l'atténuation", "figures de construction", etc.)
 */
export function findFigureFamily(cleanQuery: string): FigureFamilyResult | null {
  const norm = cleanQuery.toLowerCase().trim();

  // 1. Figures d'opposition (Oxymore, Antithèse, Antiphrase, Chiasme, Paradoxe, Attelage)
  if (/figures?\s+(?:d['’]|de\s+)?oppositions?/i.test(norm) || /\boppositions?\b.*\bfigures?\b/i.test(norm)) {
    return {
      categoryKey: 'opposition',
      categoryLabel: "Figures d'Opposition",
      description: "Les figures d'opposition rapprochent des éléments contraires pour créer un contraste saisissant, souligner un conflit intérieur, une tension dramatique ou une déchirure esthétique.",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'opposition')
    };
  }

  // 2. Figures de l'atténuation (Euphémisme, Litote, Prétérition)
  if (/figures?\s+(?:d['’]|de\s+l['’]|de\s+)?(?:att[eé]nuations?|omissions?|retenue)/i.test(norm)) {
    return {
      categoryKey: 'attenuation_omission',
      categoryLabel: "Figures de l'Atténuation",
      description: "Les figures d'atténuation adoucissent une réalité choquante (euphémisme), expriment avec discrétion une intensité supérieure en disant moins pour faire entendre plus (litote), ou affirment passer sous silence ce qu'on révèle en réalité (prétérition).",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'attenuation_omission')
    };
  }

  // 3. Figures de substitution (Métonymie, Synecdoque, Périphrase, Antonomase, Onomatopée)
  if (/figures?\s+(?:d['’]|de\s+)?(?:substitutions?|remplacements?)/i.test(norm)) {
    return {
      categoryKey: 'substitution',
      categoryLabel: "Figures de Substitution",
      description: "Les figures de substitution remplacent un mot par un autre ayant un lien logique, spatial, temporel, matériel ou descriptif étroit avec lui, conférant élégance et concision à l'expression.",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'substitution')
    };
  }

  // 4. Figures d'amplification et d'insistance (Hyperbole, Accumulation, Anaphore, Gradation, Répétition, Paronomase)
  if (/figures?\s+(?:d['’]|de\s+)?(?:amplifications?|insistances?|exag[eé]rations?)/i.test(norm)) {
    return {
      categoryKey: 'amplification_insistance',
      categoryLabel: "Figures d'Amplification & d'Insistance",
      description: "Les figures d'amplification renforcent l'intensité d'une émotion, d'une idée ou d'une description pour frapper l'esprit du lecteur, émouvoir ou convaincre avec force.",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'amplification_insistance')
    };
  }

  // 5. Figures de construction (Parallélisme, Ellipse, Anacoluthe, Asyndète, Interrogation oratoire)
  if (/figures?\s+(?:d['’]|de\s+)?(?:constructions?|structures?|syntaxiques?)/i.test(norm)) {
    return {
      categoryKey: 'construction',
      categoryLabel: "Figures de Construction",
      description: "Les figures de construction jouent sur la syntaxe et la disposition des mots dans la phrase pour lui donner du rythme, de l'énergie, de la solennité ou de la concision dramatique.",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'construction')
    };
  }

  // 6. Figures d'analogie (Comparaison, Métaphore, Allégorie, Personnification)
  if (/figures?\s+(?:d['’]|de\s+)?(?:analogies?|ressemblance|images?)/i.test(norm)) {
    return {
      categoryKey: 'analogie',
      categoryLabel: "Figures d'Analogie & d'Image",
      description: "Les figures d'analogie créent des liens de ressemblance entre deux réalités pour enrichir le sens, stimuler l'imaginaire du lecteur et poétiser le réel.",
      figures: FIGURES_DE_STYLE_DATABASE.filter(f => f.category === 'analogie')
    };
  }

  // 7. Toutes les figures de style / Panorama général
  if (/^(?:les\s+)?figures?\s+(?:de\s+)?(?:styles?|rh[eé]toriques?|discours)/i.test(norm) || /^cours\s+(?:sur\s+les\s+)?figures?\s+de\s+style/i.test(norm)) {
    return {
      categoryKey: 'general',
      categoryLabel: "Figures de Style — Panorama Complet",
      description: "On appelle figures de style ou de rhétorique les procédés d'expression par lesquels, en s'écartant de l'usage ordinaire de la langue, un auteur cherche à séduire, émouvoir ou persuader le lecteur.",
      figures: FIGURES_DE_STYLE_DATABASE
    };
  }

  return null;
}
