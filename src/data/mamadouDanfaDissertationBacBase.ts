/**
 * BASE DE DONNÉES PÉDAGOGIQUE — RÉUSSIR LA DISSERTATION FRANÇAISE AU BAC
 * Auteur : M. Mamadou Lamine DANFA (Université Cheikh Anta Diop de Dakar - UCAD, Sénégal)
 * Référence : Baccalauréat 2018 / Réformes officielles sénégalaises de l'épreuve de Français
 * Couvre les concepts majeurs, la grille des connecteurs logiques, la méthodologie et les 24 sujets types.
 */

export interface DanfaDissertationTopic {
  sujetNumber: number;
  title: string;
  quoteOrStatement: string;
  authorOrContext: string;
  theme: string;
  problematique: string;
  planType: 'dialectique' | 'analytique' | 'thematique' | 'critique' | 'progressif';
  theseOrPart1: {
    title: string;
    paragraphs: { idea: string; arguments: string; examples: string }[];
  };
  antitheseOrPart2: {
    title: string;
    paragraphs: { idea: string; arguments: string; examples: string }[];
  };
  syntheseOrPart3?: {
    title: string;
    paragraphs: { idea: string; arguments: string; examples: string }[];
  };
  conclusionBilan: string;
  ouverture: string;
}

export const MAMADOU_DANFA_LITERARY_PILLARS = [
  {
    theme: 'L\'engagement politique et social',
    definition: 'L\'écrivain met son talent au service de son peuple et fustige les abus des dirigeants.',
    theorists: ['Jean-Paul Sartre', 'Victor Hugo', 'Émile Zola', 'Aimé Césaire', 'Léopold Sédar Senghor', 'David Diop'],
    quotes: [
      '« L’écrivain est dans le coup, quoi qu’il fasse, marqué, compromis jusqu’à sa plus lointaine retraite » (Sartre)',
      '« L’art pour l’art peut être beau, mais l’art pour le progrès est plus beau encore » (Hugo)',
      '« L’art n’est pas à nos yeux une réjouissance solitaire » (Camus)'
    ],
    works: ['Germinal (Zola)', 'Les Châtiments (Hugo)', 'La Tragédie du roi Christophe (Césaire)', 'Coups de pilon (David Diop)']
  },
  {
    theme: 'La littérature comme divertissement et évasion',
    definition: 'L\'œuvre offre une oasis dans le désert de l\'existence et console l\'angoisse humaine.',
    theorists: ['Montesquieu', 'Kléber Haedens', 'Molière', 'Birago Diop'],
    quotes: [
      '« Je n’ai jamais eu de chagrin qu’une heure de lecture ne m’ait ôté » (Montesquieu)',
      '« Lorsque le romancier laisse imprimer le mot "roman" sur la couverture de son livre, il prend l’engagement de distraire » (Kléber Haedens)'
    ],
    works: ['Les Fourberies de Scapin (Molière)', 'Les Contes d’Amadou Koumba (Birago Diop)']
  },
  {
    theme: 'Le lyrisme personnel et l\'inspiration intime',
    definition: 'L\'écrivain explore son for intérieur et partage ses joies et ses tourments.',
    theorists: ['Alphonse de Lamartine', 'Alfred de Musset', 'Jean-Jacques Rousseau', 'Camara Laye'],
    quotes: [
      '« Un soulagement de mon cœur qui se berçait de ses propres sanglots » (Lamartine)',
      '« Ah ! Frappe-toi le cœur, c’est là qu’est le génie » (Musset)'
    ],
    works: ['Méditations poétiques (Lamartine)', 'Les Confessions (Rousseau)', 'L’Enfant noir (Camara Laye)']
  },
  {
    theme: 'L\'Art pour l\'Art et le culte du Beau pur',
    definition: 'L\'art ne sert aucune cause extérieure utilitaire : sa seule finalité est la perfection plastique et verbale.',
    theorists: ['Théophile Gautier', 'Leconte de Lisle', 'Stéphane Mallarmé', 'Paul Verlaine'],
    quotes: [
      '« Il n’y a de vraiment beau que ce qui ne peut servir à rien ; tout ce qui est utile est laid » (Gautier)',
      '« On ne fait pas de la poésie avec des idées mais plutôt avec des mots » (Mallarmé)',
      '« De la musique avant toute chose / Et pour cela préfère l’impair » (Verlaine)'
    ],
    works: ['Émaux et Camées (Gautier)', 'Poésies (Mallarmé)']
  },
  {
    theme: 'L\'échec et les limites de l\'engagement littéraire',
    definition: 'L\'impuissance des mots face aux catastrophes historiques et au pouvoir des armes.',
    theorists: ['Jean-Paul Sartre', 'Théophile Gautier (après 1848)', 'Georges Bernanos', 'André Malraux'],
    quotes: [
      '« Longtemps j’ai pris ma plume pour une épée, à présent je reconnais notre impuissance » (Sartre, Les Mots)'
    ],
    works: ['Les Grands Cimetières sous la lune (Bernanos)', 'Les Chemins de la liberté (Sartre)']
  },
  {
    theme: 'Hermétisme vs Accessibilité',
    definition: 'Débat entre le mystère sacré d\'une langue réservée aux initiés et l\'exigence de clarté populaire.',
    theorists: ['Mallarmé', 'André Breton', 'Marcel Proust', 'Nicolas Boileau', 'Mariama Bâ', 'Ferdinand Oyono'],
    quotes: [
      '« Un poème est un mystère dont le lecteur doit chercher la clé » (Mallarmé)',
      '« Ce qui se conçoit bien s’énonce clairement / Et les mots pour le dire arrivent aisément » (Boileau)'
    ],
    works: ['À la recherche du temps perdu (Proust)', 'Une si longue lettre (Mariama Bâ)', 'Une vie de boy (Oyono)']
  }
];

export const CONNECTEURS_LOGIQUES_TABLE = [
  { fonction: 'Ordre et succession', mots: 'D\'abord, premièrement, en premier lieu, puis, ensuite, d\'une part... d\'autre part, enfin, en définitive' },
  { fonction: 'Addition et amplification', mots: 'Et, de plus, en outre, de surcroît, par ailleurs, également, non seulement... mais encore' },
  { fonction: 'Opposition et concession', mots: 'Mais, or, cependant, toutefois, néanmoins, en revanche, au contraire, bien que, quoique, malgré tout, certes' },
  { fonction: 'Cause et justification', mots: 'Car, parce que, puisque, étant donné que, comme, vu que, en effet, grâce à, en raison de' },
  { fonction: 'Illustration et exemple', mots: 'Par exemple, ainsi, notamment, en d’autres termes, c’est-à-dire, en l’occurrence' },
  { fonction: 'Conséquence et déduction', mots: 'Donc, de sorte que, par conséquent, ainsi, voilà pourquoi, c’est pourquoi, dès lors' },
  { fonction: 'Finalité et but', mots: 'Pour que, afin que, dans le but de, en vue de, de peur que' },
  { fonction: 'Condition et hypothèse', mots: 'Si, au cas où, en admettant que, pourvu que, à condition que' },
  { fonction: 'Conclusion et synthèse', mots: 'En somme, bref, pour conclure, en résumé, finalement, tout compte fait, en conclusion' }
];

export const MAMADOU_DANFA_TOPICS: DanfaDissertationTopic[] = [
  {
    sujetNumber: 1,
    title: 'L\'actualité comme source d\'inspiration littéraire',
    quoteOrStatement: '« Si l’écrivain veut que ses écrits soient toujours d’actualité, qu’ils fassent long feu, c’est-à-dire continuellement lus et appréciés à leur juste valeur, il doit se méfier de l’actualité comme source d’inspiration. Car il arrivera un jour où cette actualité ne sera plus d’actualité... »',
    authorOrContext: 'Réflexion critique sur l\'intemporalité de l\'œuvre d\'art',
    theme: 'Actualité immédiate vs Pérennité esthétique',
    problematique: 'L’écrivain doit-il fuir l’actualité éphémère pour garantir l’immortalité de son œuvre, ou bien peut-il puiser dans les événements contemporains la sève d’une vérité humaine éternelle ?',
    planType: 'dialectique',
    theseOrPart1: {
      title: 'I. Les périls de l\'actualité qui vouent l\'œuvre à la désuétude',
      paragraphs: [
        {
          idea: 'L\'actualité périssable enferme l\'écrit dans l\'anecdote historique dépassée.',
          arguments: 'Une œuvre collant servilement aux querelles du jour devient incompréhensible pour les générations futures une fois le contexte disparu.',
          examples: 'Les pamphlets politiques éphémères du XVIIIe siècle tombés dans l\'oubli.'
        }
      ]
    },
    antitheseOrPart2: {
      title: 'II. La transfiguration de l\'événement historique en mythe universel',
      paragraphs: [
        {
          idea: 'Les grands créateurs subliment le fait divers en vérité humaine éternelle.',
          arguments: 'Le génie de l\'écrivain consiste à dégager de la circonstance immédiate les passions intemporelles de l\'humanité.',
          examples: 'Germinal de Zola (grève des mineurs devenue épopée prolétarienne) ; Les Châtiments de Victor Hugo (coup d\'État de 1851 transcendé en lutte éternelle du Bien contre la Tyrannie).'
        }
      ]
    },
    conclusionBilan: 'L\'actualité ne devient un danger que si l\'art est sacrifié au journalisme ; traitée avec profondeur esthétique, elle s\'élève à l\'éternité.',
    ouverture: 'Les nouveaux médias numériques éphémères (réseaux sociaux) condamnent-ils la littérature à une perte définitive de profondeur ?'
  },
  {
    sujetNumber: 4,
    title: 'Les fictions utiles et l\'urgence d\'aplatir le monde (Zola)',
    quoteOrStatement: '« J’aurais voulu aplatir le monde, d’un coup de ma plume, en forgeant des fictions utiles »',
    authorOrContext: 'Émile Zola, à propos de Germinal (1885)',
    theme: 'La vocation réformatrice et utilitaire du roman naturaliste',
    problematique: 'La littérature a-t-elle pour fin suprême de corriger les injustices sociales par l\'utilité militante, ou possède-t-elle une dignité autonome indépendante de tout dessein pragmatique ?',
    planType: 'dialectique',
    theseOrPart1: {
      title: 'I. La fiction comme arme salutaire de transformation et de salut social',
      paragraphs: [
        {
          idea: 'Le romancier dénonce les plaies de la société pour forcer les réformes salvatrices.',
          arguments: 'La plume devient une force de frappe contre l\'injustice économique et l\'exploitation.',
          examples: 'Germinal (Zola alertant sur l\'enfer minier) ; Les Misérables (Hugo fustigeant la déchéance de Jean Valjean et Fantine).'
        }
      ]
    },
    antitheseOrPart2: {
      title: 'II. L\'irréductible souveraineté de l\'art désintéressé et de la rêverie',
      paragraphs: [
        {
          idea: 'La grandeur littéraire réside également dans le refus de l\'utilitarisme.',
          arguments: 'L\'art nourrit l\'âme humaine par le rêve, la gratuité et la perfection plastique.',
          examples: 'Théophile Gautier (Mademoiselle de Maupin) ; la poésie pure de Mallarmé et Verlaine.'
        }
      ]
    },
    conclusionBilan: 'La fiction utile et l\'art pur sont les deux poumons de la création littéraire : l\'un élève la condition matérielle de l\'homme, l\'autre son esprit.',
    ouverture: 'Le roman contemporain africain a-t-il réussi à dépasser la simple fiction militante pour embrasser la liberté créatrice totale ?'
  },
  {
    sujetNumber: 6,
    title: 'L\'alchimie poétique de Baudelaire',
    quoteOrStatement: '« J’ai pétri de la boue et j’en ai fait de l’or »',
    authorOrContext: 'Charles Baudelaire, projet d\'épilogue pour Les Fleurs du Mal',
    theme: 'L\'alchimie poétique : transfiguration du mal et du laid en beauté',
    problematique: 'Comment l\'activité créatrice parvient-elle à extraire la perfection artistique des éléments les plus vils de l\'existence, et quelle est l\'essence même d\'un chef-d\'œuvre ?',
    planType: 'progressif',
    theseOrPart1: {
      title: 'I. L\'audace esthétique baudelairienne : la fascination du morbide transfiguré',
      paragraphs: [
        {
          idea: 'La poésie moderne brise le tabou de la laideur classique.',
          arguments: 'Le génie stylistique confère aux objets répugnants la majesté d\'une révélation sacrée.',
          examples: 'Une charogne (Baudelaire métamorphosant un cadavre en décomposition en fleur éternelle) ; Rimbaud (Le Dormeur du val).'
        }
      ]
    },
    antitheseOrPart2: {
      title: 'II. La voie traditionnelle : la célébration de la beauté harmonieuse',
      paragraphs: [
        {
          idea: 'La majorité des créateurs recherchent l\'élévation à travers le beau noble.',
          arguments: 'La perfection des proportions et la clarté lumineuse inspirent la sérénité morale.',
          examples: 'Ronsard (Mignonne, allons voir si la rose) ; Lamartine (Le Lac).'
        }
      ]
    },
    conclusionBilan: 'L\'œuvre d\'art n\'est pas déterminée par la noblesse de son sujet, mais par la puissance d\'alchimie verbale qui transfigure la réalité.',
    ouverture: 'L\'art contemporain ne risque-t-il pas parfois de se complaire dans la provocation stérile de la boue sans parvenir à l\'or du génie ?'
  },
  {
    sujetNumber: 8,
    title: 'La poésie : objet de musée ou instrument de libération ?',
    quoteOrStatement: '« La poésie est moins un objet de musée qu’un puissant instrument de libération »',
    authorOrContext: 'Léopold Sédar Senghor',
    theme: 'La fonction émancipatrice de la poésie face au passéisme esthétique',
    problematique: 'La poésie doit-elle être considérée comme une pièce d\'orfèvrerie formelle conservée dans les anthologies, ou comme une énergie vive d\'affranchissement des peuples dominés ?',
    planType: 'dialectique',
    theseOrPart1: {
      title: 'I. La poésie comme levier d\'émancipation des consciences opprimées',
      paragraphs: [
        {
          idea: 'Le verbe poétique réveille les peuples asservis et brise les chaînes de l\'aliénation.',
          arguments: 'La parole rythmée restitue la fierté et convoque à la dignité collective.',
          examples: 'Aimé Césaire (Cahier d’un retour au pays natal) ; David Diop (Coups de pilon) ; Paul Éluard (Liberté).'
        }
      ]
    },
    antitheseOrPart2: {
      title: 'II. La poésie comme sanctuaire gratuit de la sensibilité et de la musique',
      paragraphs: [
        {
          idea: 'La poésie est aussi méditation intemporelle et célébration de la beauté du monde.',
          arguments: 'Réduire le poème à une arme politique menacerait sa délicatesse lyrique et son mystère.',
          examples: 'Paul Verlaine (Chanson d’automne) ; Mallarmé (Brise marine) ; Senghor lui-même chantant la nostalgie du Royaume d’Enfance (Joal).'
        }
      ]
    },
    conclusionBilan: 'La poésie libère deux fois l\'homme : elle affranchit son corps de la servitude politique et son esprit des servitudes matérielles.',
    ouverture: 'Dans un XXIe siècle hyper-technologique, la poésie orale (le slam) est-elle la nouvelle forme de cette trompette libératrice ?'
  },
  {
    sujetNumber: 24,
    title: 'La réduction stéréotypée des trois grands genres littéraires',
    quoteOrStatement: '« On a tendance à réduire les œuvres : théâtrales au rire, romanesques à l’évasion, et poétiques au lyrisme »',
    authorOrContext: 'Synthèse des trois genres littéraires au Baccalauréat',
    theme: 'Les genres littéraires : représentations réductrices vs polyvalence esthétique',
    problematique: 'Cette catégorisation populaire des genres correspond-elle à leur nature profonde ou appauvrit-elle le dynamisme créateur de chaque expression littéraire ?',
    planType: 'dialectique',
    theseOrPart1: {
      title: 'I. Les fondements historiques et psychologiques de cette perception tripartite',
      paragraphs: [
        {
          idea: 'Le théâtre comique, le roman d\'aventures et la poésie élégiaque répondent à des attentes immédiates du public.',
          arguments: 'Le rire désamorce l\'angoisse théâtrale (Molière), l\'évasion romanesque permet d\'oublier le réel (Dumas), le lyrisme poétique soulage le cœur (Lamartine).',
          examples: 'Les Fourberies de Scapin, Les Trois Mousquetaires, Méditations poétiques.'
        }
      ]
    },
    antitheseOrPart2: {
      title: 'II. L\'éclatement des frontières et la pluralité des vocations de chaque genre',
      paragraphs: [
        {
          idea: 'Chaque genre est capable d\'assumer la totalité des missions de l\'esprit humain.',
          arguments: 'Le théâtre peut être tragique ou politique (Racine, Césaire) ; le roman est miroir impitoyable du réel et traité d\'histoire (Balzac, Zola, Kourouma) ; la poésie est combat et hermétisme (David Diop, Mallarmé).',
          examples: 'La Tragédie du roi Christophe (théâtre du désenchantement), Les Soleils des Indépendances (roman de rébellion), Coups de pilon (poésie martiale).'
        }
      ]
    },
    conclusionBilan: 'Les genres littéraires ne sont pas des prisons thématiques : ils sont des instruments modulables par lesquels le génie de l\'auteur embrasse toute la complexité du monde.',
    ouverture: 'La fusion contemporaine des genres (romans en vers, théâtre documentaire) ne signe-t-elle pas la fin définitive de ces cloisons étanches ?'
  }
];
