/**
 * FICHE D'EXERCICES ET CORRIGÉ INTÉGRAL OFFICIEL — LES FIGURES DE STYLE
 * Source : Mme Fereyrolles — Collège Maurice Genevoix, Decize
 * Support d'évaluation et de maîtrise stylistique pour les classes de collège et de lycée.
 */

export interface FigureStyleExerciseItem {
  id: number;
  citationOrSentence: string;
  sourceOrAuthor?: string;
  identifiedFigures: string[];
  explanationAndPedagogicalComment?: string;
}

export interface MetaphorTransformationItem {
  id: string;
  originalMetaphor: string;
  transformedComparison: string;
  comparisonToolUsed: string;
}

export interface StylisticAnalysisItem {
  id: string;
  textExcerpt: string;
  authorAndWork: string;
  questions: string;
  identifiedFigures: string[];
  completeOfficialCorrection: string;
}

export const FIGURES_DE_STYLE_GENEVOIX_BASE = {
  header: {
    author: 'Mme Fereyrolles',
    institution: 'Collège Maurice Genevoix — Decize',
    subject: 'Les Figures de Style : Identification, Transformation et Analyse de Textes Littéraires'
  },
  
  // EXERCICE 1 : IDENTIFICATION PRÉCISE DES FIGURES DE STYLE (22 CITATIONS)
  exercise1Identification: [
    {
      id: 1,
      citationOrSentence: '« O flots [...] Et c’est ce qui vous fait ces voix désespérées Que vous avez le soir quand vous venez vers nous »',
      sourceOrAuthor: 'Victor Hugo',
      identifiedFigures: ['Personnification', 'Apostrophe'],
      explanationAndPedagogicalComment: 'Les flots marins sont dotés d\'attributs humains (voix désespérées) et sont directement interpellés par le poète par l\'apostrophe « O flots ».'
    },
    {
      id: 2,
      citationOrSentence: 'Je parle la langue de Shakespeare couramment.',
      sourceOrAuthor: 'Usage courant',
      identifiedFigures: ['Périphrase'],
      explanationAndPedagogicalComment: 'L\'anglais est désigné par une expression descriptive valorisante évoquant son plus illustre dramaturge.'
    },
    {
      id: 3,
      citationOrSentence: 'Je ne dirais pas non à un petit café.',
      sourceOrAuthor: 'Usage familier/courant',
      identifiedFigures: ['Litote'],
      explanationAndPedagogicalComment: 'Formulation négative atténuée (« ne dirais pas non ») pour exprimer avec force et politesse une envie bien réelle.'
    },
    {
      id: 4,
      citationOrSentence: 'C\'est une décision de l\'Elysée.',
      sourceOrAuthor: 'Discours journalistique/politique',
      identifiedFigures: ['Métonymie'],
      explanationAndPedagogicalComment: 'Le lieu de résidence de la présidence de la République désigne le Président de la République lui-même.'
    },
    {
      id: 5,
      citationOrSentence: '« Elle se hâte avec lenteur »',
      sourceOrAuthor: 'Jean de La Fontaine (Le Lièvre et la Tortue)',
      identifiedFigures: ['Paradoxe', 'Oxymore conceptuel'],
      explanationAndPedagogicalComment: 'Rapprochement antinomique de deux comportements opposés créant une vérité morale surprenante.'
    },
    {
      id: 6,
      citationOrSentence: '« C’est le vent du midi, c’est la bise, c’est le diable… »',
      sourceOrAuthor: 'Mme de Sévigné',
      identifiedFigures: ['Anaphore', 'Parallélisme', 'Accumulation'],
      explanationAndPedagogicalComment: 'Reprise rythmée du présentatif « c\'est », structure syntaxique identique et succession rapide d\'éléments météorologiques et diaboliques.'
    },
    {
      id: 7,
      citationOrSentence: 'Je vais au petit coin.',
      sourceOrAuthor: 'Langage familier',
      identifiedFigures: ['Euphémisme'],
      explanationAndPedagogicalComment: 'Atténuation d\'une réalité physiologique triviale (les toilettes).'
    },
    {
      id: 8,
      citationOrSentence: '« J’irai loin, bien loin, comme un bohémien »',
      sourceOrAuthor: 'Arthur Rimbaud (Sensation)',
      identifiedFigures: ['Comparaison'],
      explanationAndPedagogicalComment: 'Rapprochement explicite entre le sujet poétique et le bohémien à l\'aide de l\'outil de comparaison « comme ».'
    },
    {
      id: 9,
      citationOrSentence: '« Les mariniers me voient vieillir / Je vois vieillir les mariniers »',
      sourceOrAuthor: 'Jacques Brel',
      identifiedFigures: ['Chiasme'],
      explanationAndPedagogicalComment: 'Structure croisée symétrique selon le schéma AB / B\'A\' (Sujet Verbe Complément / Complément Verbe Sujet).'
    },
    {
      id: 10,
      citationOrSentence: 'La table dix s\'impatiente.',
      sourceOrAuthor: 'Langage de la restauration',
      identifiedFigures: ['Métonymie'],
      explanationAndPedagogicalComment: 'Le meuble (la table dix) désigne par contiguïté les clients qui y sont installés.'
    },
    {
      id: 11,
      citationOrSentence: '« Femme nue, femme noire »',
      sourceOrAuthor: 'Léopold Sédar Senghor (Chants d\'ombre)',
      identifiedFigures: ['Anaphore', 'Parallélisme'],
      explanationAndPedagogicalComment: 'Répétition du substantif « femme » en début de propositions juxtaposées de même structure rythmique (Nom + Adjectif).'
    },
    {
      id: 12,
      citationOrSentence: 'Les premiers seront les derniers.',
      sourceOrAuthor: 'Texte biblique (Évangile)',
      identifiedFigures: ['Paradoxe', 'Antithèse'],
      explanationAndPedagogicalComment: 'Renversement logique spectaculaire des hiérarchies terrestres créant une maxime spirituelle.'
    },
    {
      id: 13,
      citationOrSentence: 'Il me semble que qui se ressemble s’assemble.',
      sourceOrAuthor: 'Proverbe populaire',
      identifiedFigures: ['Allitération en [s]', 'Paronomase'],
      explanationAndPedagogicalComment: 'Répétition insistante de la consonne sifflante [s] et jeu d\'écho sonore entre des mots aux sonorités très proches.'
    },
    {
      id: 14,
      citationOrSentence: 'On ne mourra pas de faim aujourd’hui avec tous ces plats.',
      sourceOrAuthor: 'Langage courant',
      identifiedFigures: ['Litote'],
      explanationAndPedagogicalComment: 'Formule négative pour signifier en réalité qu\'il y a une abondance considérable de nourriture.'
    },
    {
      id: 15,
      citationOrSentence: '« Vingt et trois qui donnaient le cœur avant le temps / Vingt et trois étrangers et nos frères pourtant / Vingt et trois qui criaient ... »',
      sourceOrAuthor: 'Louis Aragon (Strophes pour se souvenir)',
      identifiedFigures: ['Anaphore'],
      explanationAndPedagogicalComment: 'Reprise martelée en tête de vers du syntagme « Vingt et trois » pour rendre un hommage vibrant aux fusillés du groupe Manouchian.'
    },
    {
      id: 16,
      citationOrSentence: '« Un silence assourdissant »',
      sourceOrAuthor: 'Albert Camus',
      identifiedFigures: ['Oxymore'],
      explanationAndPedagogicalComment: 'Alliance étroite et saisissante de deux termes sémantiquement contradictoires (silence / assourdissant) dans un même groupe nominal.'
    },
    {
      id: 17,
      citationOrSentence: 'Elle avait des yeux pareils à des étoiles.',
      sourceOrAuthor: 'Exemple littéraire classique',
      identifiedFigures: ['Comparaison'],
      explanationAndPedagogicalComment: 'Rapprochement explicite des yeux et des étoiles par le comparatif « pareils à ».'
    },
    {
      id: 18,
      citationOrSentence: 'Je l’aime un peu, beaucoup, à la folie, passionnément',
      sourceOrAuthor: 'Formule d\'effeuillage de marguerite',
      identifiedFigures: ['Gradation (ascendante)'],
      explanationAndPedagogicalComment: 'Progression ordonnée par degrés croissants d\'intensité sentimentale.'
    },
    {
      id: 19,
      citationOrSentence: 'Mes proches sont loin de moi.',
      sourceOrAuthor: 'Phrase d\'auteur',
      identifiedFigures: ['Antithèse', 'Jeu sémantique'],
      explanationAndPedagogicalComment: 'Confrontation au sein de la même proposition entre l\'intimité affective (« proches ») et l\'éloignement spatial (« loin »).'
    },
    {
      id: 20,
      citationOrSentence: '« Je suis de la mauvaise herbe »',
      sourceOrAuthor: 'Georges Brassens',
      identifiedFigures: ['Métaphore'],
      explanationAndPedagogicalComment: 'Assimilation directe du chanteur à une plante indésirable et libre sans outil de comparaison.'
    },
    {
      id: 21,
      citationOrSentence: 'Je travaille vingt-six heures par jour.',
      sourceOrAuthor: 'Langage familier',
      identifiedFigures: ['Hyperbole'],
      explanationAndPedagogicalComment: 'Exagération temporelle impossible (la journée ne comptant que 24 heures) pour souligner un labeur exténuant.'
    }
  ],

  // EXERCICE 2 : TRANSFORMATION DES MÉTAPHORES EN COMPARAISONS
  exercise2MetaphorToComparison: [
    {
      id: 'a',
      originalMetaphor: 'Son teint de rose est magnifique.',
      transformedComparison: 'Son teint est magnifique comme une rose.',
      comparisonToolUsed: 'comme'
    },
    {
      id: 'b',
      originalMetaphor: 'L’éclat d’or du soleil me réchauffe.',
      transformedComparison: 'L’éclat du soleil est pareil à de l’or et me réchauffe.',
      comparisonToolUsed: 'pareil à'
    },
    {
      id: 'c',
      originalMetaphor: 'C’est un vrai poisson lorsqu’il nage.',
      transformedComparison: 'Il nage comme un vrai poisson.',
      comparisonToolUsed: 'comme'
    },
    {
      id: 'd',
      originalMetaphor: 'Un couvercle de pollution est sur la ville.',
      transformedComparison: 'La pollution est comme un couvercle sur la ville.',
      comparisonToolUsed: 'comme'
    },
    {
      id: 'e',
      originalMetaphor: 'Ses lacets sont des serpents qui le suivent.',
      transformedComparison: 'Ses lacets sont comme des serpents qui le suivent.',
      comparisonToolUsed: 'comme'
    }
  ],

  // EXERCICE 3 : REPÉRAGE ET INTERPRÉTATION EN CONTEXTE LITTÉRAIRE
  exercise3LiteraryInterpretation: [
    {
      id: 'voltaire-candide',
      textExcerpt: '« là des filles éventrées après avoir assouvi les besoins naturels de quelques héros rendaient les derniers soupirs »',
      authorAndWork: 'Voltaire, Candide ou l\'Optimisme (1759)',
      questions: 'Quelle est la figure de style utilisée deux fois ? Pourquoi l’auteur l’utilise ici ?',
      identifiedFigures: ['Euphémisme (double occurrence)', 'Ironie voltairienne'],
      completeOfficialCorrection: 'On relève deux euphémismes majeurs : d\'une part « après avoir assouvi les besoins naturels de quelques héros » qui désigne par périphrase atténuée des viols de guerre perpétrés par les soldats ; d\'autre part « rendaient les derniers soupirs » qui masque la mort brutale et agonisante des victimes. Voltaire utilise l\'euphémisme associé à l\'antiphrase ironique (« héros ») pour souligner avec une froideur satirique l\'insoutenable atrocité et la barbarie sanglante de la guerre de Sept Ans.'
    },
    {
      id: 'flaubert-madame-bovary',
      textExcerpt: '« C’était la première fois qu’elle se voyait au milieu d’une compagnie si nombreuse ; et, intérieurement effarouchée par les drapeaux, par les tambours, par les messieurs en habit noir et par la croix d’honneur du Conseiller »',
      authorAndWork: 'Gustave Flaubert, Madame Bovary (Comices agricoles)',
      questions: 'Quelle est la figure de style utilisée ? Pourquoi l’auteur l’utilise ici ?',
      identifiedFigures: ['Énumération / Accumulation', 'Anaphore de la préposition « par »'],
      completeOfficialCorrection: 'On trouve ici une énumération rythmée par l\'anaphore : « par les drapeaux, par les tambours, par les messieurs en habit noir et par la croix d’honneur du Conseiller ». Flaubert accumule les insignes officiels et les manifestations bruyantes pour traduire l\'agression sensorielle et l\'impression d\'oppression et de malaise d\'Emma Bovary, provinciale désorientée et intimidée par ce cérémonial bourgeois étourdissant.'
    },
    {
      id: 'goncourt-germinie-lacerteux',
      textExcerpt: '« ce qu’il lui fallait, ce qu’elle demandait, c’était le noir bonheur du sommeil, d’un sommeil sans mémoire et sans rêve, d’un sommeil de plomb tombant sur elle comme un coup d’assommoir sur la tête d’un bœuf : et elle le trouvait dans ces liqueurs mêlées qui la foudroyaient et lui couchaient la face sur la toile cirée de la table de cuisine. »',
      authorAndWork: 'Edmond et Jules de Goncourt, Germinie Lacerteux',
      questions: 'Quelles sont les figures de style utilisées ? Pourquoi les auteurs les utilisent ici ?',
      identifiedFigures: ['Oxymore (« noir bonheur »)', 'Comparaison (« comme un coup d’assommoir sur la tête d’un bœuf »)', 'Métaphore (« la foudroyaient »)', 'Anaphore / Répétition (« d\'un sommeil... »)'],
      completeOfficialCorrection: 'On relève l\'oxymore saisissant « noir bonheur » qui associe l\'extinction de la conscience au seul soulagement possible ; la comparaison brutale et naturaliste « comme un coup d\'assommoir sur la tête d\'un bœuf » qui rabaisse l\'humain à la bête d\'abattoir ; la métaphore violente « qui la foudroyaient » ; ainsi que l\'anaphore de « d\'un sommeil ». Les frères Goncourt mobilisent cette écriture artiste et clinique pour matérialiser la violence destructrice de l\'alcoolisme, réduisant la servante hystérique à un état d\'hébétude physique et de coma anesthésiant.'
    }
  ]
};
