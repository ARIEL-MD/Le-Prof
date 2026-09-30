/**
 * RECUEIL COMPLET DU FASCICULE "REP LITTERAIRE 2021"
 * Groupe Academic Le Succès — Préparation au Baccalauréat Littéraire (Tle A1, A2)
 * Directeur : M. Fabrice Koré — Président du comité littéraire : Prof. Jean-Jacques Degnadji
 * Conforme à l'Approche Par Compétences (APC) et aux programmes officiels du Ministère de l'Éducation Nationale.
 */

export interface REPSubjectEntry {
  id: string;
  discipline: 'philosophie' | 'francais' | 'histoire_geo' | 'anglais' | 'mathematiques' | 'allemand';
  type: 'dissertation' | 'commentaire' | 'resume_texte' | 'epreuve_anglais' | 'exercice_maths';
  title: string;
  sourceOrAuthor?: string;
  statement: string;
  questions?: string[];
  completeOfficialSolution: string;
  methodologyNotes?: string;
  keywords: string[];
}

export interface REPCourseSheet {
  id: string;
  discipline: 'philosophie' | 'francais' | 'histoire_geo' | 'anglais' | 'mathematiques' | 'allemand';
  category: string;
  title: string;
  essentialTheses: {
    thesisTitle: string;
    points: { label: string; explanation: string; citation?: string; author?: string; work?: string }[];
  }[];
  mnemonicsTemplate?: {
    introduction: string;
    development: string;
    conclusion: string;
  };
  keyWarnings?: string[];
}

export const REP_LITTERAIRE_2021_INFO = {
  title: 'REP Littéraire 2021 — Revue de Préparation au Baccalauréat',
  publisher: 'Groupe Academic Le Succès',
  leadership: {
    director: 'M. Fabrice Koré',
    literaryPresident: 'Prof. Jean-Jacques Degnadji',
    contact: '01.02.40.04.52 / 07.08.66.46.28 / 07.47.36.36.90',
    location: 'Port-Bouët Gonzagueville, Terre rouge (Face boulangerie Paris Baguette)'
  },
  pedagogicalModel: 'Approche Par Compétences (APC) — Format allégé officiel',
  disciplinesCovered: [
    'Philosophie',
    'Français (Dissertation, Commentaire Composé, Résumé & Production écrite)',
    'Histoire-Géographie (Monde Bipolaire, Décolonisation, Côte d\'Ivoire, Organisations)',
    'Anglais (Writing, Grammar, Textes types Bac & Verbes irréguliers)',
    'Mathématiques Série A1/A2 (Fonctions, ln, exp, Dénombrement, Probabilités)',
    'Langue Vivante 2 : Allemand (Modes, Temps & Auxiliaires)'
  ]
};

// =========================================================================
// 1. FICHES DE SAVOIR ET DE CONFRONTATION PHILOSOPHIQUE (PAGES 5 À 29)
// =========================================================================

export const REP_PHILO_COURSE_SHEETS: REPCourseSheet[] = [
  {
    id: 'philo-conscience-inconscient',
    discipline: 'philosophie',
    category: 'La Conscience et l\'Inconscient',
    title: 'La Fiabilité de la Conscience et la Réalité de l\'Inconscient',
    essentialTheses: [
      {
        thesisTitle: 'Axe 1 : L\'homme est essentiellement doué de conscience (Thèse Rationaliste)',
        points: [
          {
            label: 'Différence psychologique radicale entre l\'homme et l\'animal',
            explanation: 'L\'organisation sociale, la science, la technique et le travail attestent de la supériorité humaine due à la pensée consciente.',
            citation: 'On peut concevoir un homme sans main, sans pied, sans tête. Mais jamais on ne peut concevoir un homme sans pensée ; ce serait une pierre ou une brute.',
            author: 'Blaise Pascal',
            work: 'Pensées'
          },
          {
            label: 'La conscience comme mémoire vive',
            explanation: 'Rétention et réactivation dynamique du passé dans le présent permettant la continuité de l\'identité.',
            citation: 'Conscience signifie d\'abord mémoire, conservation et accumulation du passé dans le présent.',
            author: 'Henri Bergson',
            work: 'L\'Énergie spirituelle'
          },
          {
            label: 'La capacité morale supérieure',
            explanation: 'La conscience est le tribunal intime jugeant en bien et en mal.',
            citation: 'Conscience ! Conscience ! Juge infaillible du bien et du mal, qui rend l\'homme semblable à un dieu.',
            author: 'Jean-Jacques Rousseau',
            work: 'Émile ou De l\'éducation'
          },
          {
            label: 'La certitude du Cogito et la transparence de soi',
            explanation: 'Le sujet qui doute fait l\'expérience indubitable de son existence en tant que substance pensante.',
            citation: 'Cogito ergo sum (Je pense, donc je suis).',
            author: 'René Descartes',
            work: 'Discours de la méthode'
          },
          {
            label: 'L\'intentionnalité de la conscience',
            explanation: 'La conscience n\'est pas un vase clos, elle est projection vers le monde.',
            citation: 'Toute conscience est conscience de quelque chose.',
            author: 'Edmund Husserl',
            work: 'Méditations cartésiennes'
          }
        ]
      },
      {
        thesisTitle: 'Axe 2 : La conscience est lacunaire et gouvernée par l\'Inconscient (Thèse Psychanalytique)',
        points: [
          {
            label: 'Les manifestations réflexes et psychiques',
            explanation: 'La majeure partie des mécanismes vitaux et psychiques échappent à notre contrôle conscient.',
            citation: 'Le moi n\'est pas maître dans sa propre maison.',
            author: 'Sigmund Freud',
            work: 'Introduction à la psychanalyse'
          },
          {
            label: 'La théorie des petites perceptions',
            explanation: 'Il existe à tout moment une infinité de perceptions imperceptibles qui orientent nos désirs.',
            citation: 'Il y a en nous à tout moment une infinité de petites perceptions que nous n\'apercevons consciemment.',
            author: 'Gottfried Wilhelm Leibniz',
            work: 'Nouveaux essais sur l\'entendement humain'
          },
          {
            label: 'Les voies d\'accès à l\'inconscient',
            explanation: 'Les actes manqués, les lapsus, les névroses et les rêves constituent des satisfactions déguisées de désirs refoulés.',
            citation: 'Le contenu du rêve représente un désir réalisé.',
            author: 'Sigmund Freud',
            work: 'L\'Interprétation des rêves'
          }
        ]
      },
      {
        thesisTitle: 'Axe 3 : La critique rationaliste de l\'inconscient',
        points: [
          {
            label: 'L\'inconscient comme fuite de la responsabilité et mauvaise foi',
            explanation: 'Invoquer l\'inconscient sert d\'alibi immoral pour nier sa liberté et fuir le châtiment.',
            citation: 'L\'inconscient est la manifestation de la mauvaise foi.',
            author: 'Jean-Paul Sartre',
            work: 'L\'Être et le Néant'
          },
          {
            label: 'L\'inconscient est une méprise sur le moi',
            explanation: 'Refus de créer un double ténébreux en l\'homme.',
            citation: 'L\'inconscient est une méprise sur le moi. C\'est une idolâtrie du corps.',
            author: 'Alain',
            work: 'Éléments de philosophie'
          }
        ]
      }
    ],
    mnemonicsTemplate: {
      introduction: `Dans [SOURCE], [AUTEUR] affirme que « [CITATION] ». C'est dire que pour lui, [EXPLICATION]. Pourtant, force est de constater que [IDEE OPPOSEE]. D'où l'interrogation suivante : [PROBLEME FORMULÉ SANS OU] ? Pour répondre à ce problème d'autres questions s'ajoutent : [ASPECT 1] ? Par ailleurs, [ASPECT 2] ? Enfin, [ASPECT 3] ?`,
      development: `On ne saurait le nier, [AXE 1 : Thèse]. D'abord, [ARGUMENT 1]. En effet, [EXPLICATION]. C'est dans cette optique que [AUTEUR 1] soutient dans [OEUVRE 1] que « [CITATION 1] ». Ensuite, [ARGUMENT 2]... [TRANSITION]. Cependant, [AXE 2 : Antithèse / Limites]...`,
      conclusion: `Pour clore notre analyse, retenons que [BILAN SYNTHÉTIQUE]. Toutefois, il n'en demeure pas moins que [LIMITES]. Pour notre part, [PRISE DE POSITION CIVIQUE ET PHILOSOPHIQUE].`
    }
  },
  {
    id: 'philo-societe-etat-loi',
    discipline: 'philosophie',
    category: 'La Vie en Société : Société, Autrui, État et Loi',
    title: 'Rapports de Pouvoir, Liberté et Nécessité de la Cité',
    essentialTheses: [
      {
        thesisTitle: 'Axe 1 : Les limites de la société, de l\'État et de la Loi (Critiques liberticides et violentes)',
        points: [
          {
            label: 'L\'État comme fossoyeur des libertés individuelles',
            explanation: 'L\'anarchisme dénonce le monopole de la contrainte institutionnelle.',
            citation: 'L\'État est un vaste cimetière où viennent s\'enterrer toutes les manifestations des libertés individuelles.',
            author: 'Mikhaïl Bakounine',
            work: 'Catéchisme révolutionnaire'
          },
          {
            label: 'L\'État comme monstre froid et violent',
            explanation: 'Critique de la violence dissimulée derrière la raison d\'État.',
            citation: 'L\'État est le plus froid de tous les monstres froids.',
            author: 'Friedrich Nietzsche',
            work: 'Ainsi parlait Zarathoustra'
          },
          {
            label: 'La loi comme instrument d\'oppression de classe',
            explanation: 'Le droit codifie les intérêts matériels de la classe dominante.',
            citation: 'Votre droit n\'est que la volonté de votre classe érigée en loi.',
            author: 'Karl Marx',
            work: 'Le Manifeste du Parti communiste'
          },
          {
            label: 'Autrui comme menace et aliénation',
            explanation: 'Le regard de l\'autre fige le sujet en objet et déclenche la honte ou la dispute.',
            citation: 'L\'enfer, c\'est les autres.',
            author: 'Jean-Paul Sartre',
            work: 'Huis clos'
          }
        ]
      },
      {
        thesisTitle: 'Axe 2 : La nécessité de la société, de l\'État et de la Loi (Fondement de la liberté et de l\'humanisation)',
        points: [
          {
            label: 'L\'État a pour fin ultime la liberté',
            explanation: 'L\'État délivre les hommes de la peur réciproque et crée le cadre de l\'exercice de la raison.',
            citation: 'La fin de l\'État est en réalité la liberté.',
            author: 'Baruch Spinoza',
            work: 'Traité théologico-politique'
          },
          {
            label: 'L\'obéissance à la loi est liberté',
            explanation: 'Passage de l\'indépendance animale à la liberté civile par la volonté générale.',
            citation: 'L\'obéissance à la loi qu\'on s\'est prescrite est liberté. Il n\'y a point de liberté sans lois.',
            author: 'Jean-Jacques Rousseau',
            work: 'Du contrat social'
          },
          {
            label: 'L\'homme est par nature un être politique',
            explanation: 'L\'homme ne réalise son essence que dans la cité avec ses pairs.',
            citation: 'L\'homme qui vit en dehors de la cité est soit une bête, soit un dieu.',
            author: 'Aristote',
            work: 'La Politique'
          },
          {
            label: 'La sortie de la guerre de tous contre tous',
            explanation: 'Sans pouvoir commun, règne la crainte perpétuelle d\'une mort violente.',
            citation: 'Aussi longtemps que les hommes vivent sans un pouvoir commun qui les tienne tous en respect, ils sont dans cette condition de guerre.',
            author: 'Thomas Hobbes',
            work: 'Léviathan'
          }
        ]
      }
    ]
  },
  {
    id: 'philo-travail-technique-art',
    discipline: 'philosophie',
    category: 'Progrès, Bonheur, Travail, Technique et Art',
    title: 'Transformations du Monde et Accomplissement de l\'Homme',
    essentialTheses: [
      {
        thesisTitle: 'Axe 1 : Les dangers et aliénations du progrès technique et du travail mécanique',
        points: [
          {
            label: 'La déshumanisation du travailleur à la chaîne',
            explanation: 'Le travail moderne aliène l\'ouvrier en le subordonnant à la machine.',
            citation: 'Dans son travail, l\'ouvrier ne s\'affirme pas, mais se nie.',
            author: 'Karl Marx',
            work: 'Manuscrits de 1844'
          },
          {
            label: 'La technique instrument destructeur',
            explanation: 'La surpuissance technologique sans contrôle moral conduit au péril atomique.',
            citation: 'Toute notre évolution technique dont on chante les louanges est comme une hache dans les mains d\'un criminel.',
            author: 'Albert Einstein',
            work: 'Correspondances'
          },
          {
            label: 'La corruption morale par le progrès',
            explanation: 'Le raffinement technique et matériel étouffe la vertu civique.',
            citation: 'Nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection.',
            author: 'Jean-Jacques Rousseau',
            work: 'Discours sur les sciences et les arts'
          }
        ]
      },
      {
        thesisTitle: 'Axe 2 : La dimension émancipatrice et civilisatrice du travail et de l\'art',
        points: [
          {
            label: 'L\'indépendance économique et morale par le labeur',
            explanation: 'Le travail libère de la dépendance et forge la dignité.',
            citation: 'Le travail, après le travail l\'indépendance.',
            author: 'Bernard Binlin Dadié',
            work: 'Climbié'
          },
          {
            label: 'La maîtrise technique bienfaisante',
            explanation: 'La science et la technique nous arrachent à la servitude face aux forces naturelles.',
            citation: 'Nous rendre comme maîtres et possesseurs de la nature.',
            author: 'René Descartes',
            work: 'Discours de la méthode'
          },
          {
            label: 'L\'art transfigure l\'existence',
            explanation: 'La création artistique embellit le réel et transcende l\'absurdité.',
            citation: 'L\'art doit avant tout embellir la vie, dissimuler ses choses pénibles, épouvantables et dégoûtantes.',
            author: 'Friedrich Nietzsche',
            work: 'Humain, trop humain'
          }
        ]
      }
    ]
  }
];

// =========================================================================
// 2. DISSERTATIONS ET COMMENTAIRES DE FRANÇAIS (PAGES 34 À 53)
// =========================================================================

export const REP_FRANCAIS_LITTERATURE_DATA = {
  figuresOfStyle: [
    { name: 'Comparaison', definition: 'Rapprochement de deux termes via un outil comparatif (comme, tel, pareil à).' },
    { name: 'Métaphore', definition: 'Rapprochement analogique direct sans outil grammatical.' },
    { name: 'Personnification', definition: 'Attribution d\'attributs humains à une chose, une idée ou un animal.' },
    { name: 'Allégorie', definition: 'Matérialisation concrète d\'une idée abstraite sous forme vivante.' },
    { name: 'Chiasme', definition: 'Disposition croisée symétrique de termes en structure AB/BA.' },
    { name: 'Métonymie', definition: 'Désignation d\'un objet par un autre logiquement associé (contenant/contenu).' },
    { name: 'Antithèse', definition: 'Juxtaposition de deux pensées ou mots opposés au sein d\'une phrase.' },
    { name: 'Oxymore', definition: 'Alliance étroite et surprenante de deux mots contradictoires juxtaposés.' },
    { name: 'Antiphrase', definition: 'Expression ironique disant le contraire de ce que l\'on pense.' },
    { name: 'Litote', definition: 'Atténuation apparente pour suggérer une intensité bien plus forte.' },
    { name: 'Euphémisme', definition: 'Atténuation d\'une réalité crue, douloureuse ou gênante.' },
    { name: 'Hyperbole', definition: 'Exagération frappante pour frapper l\'imagination.' },
    { name: 'Gradation', definition: 'Succession ordonnée de termes d\'intensité croissante ou décroissante.' },
    { name: 'Anaphore', definition: 'Répétition rythmée d\'un mot ou syntagme en début de phrases ou de vers.' }
  ],
  literaryTonalities: [
    { name: 'Lyrique', traits: 'Chant des émotions personnelles de l\'auteur, emploi prépondérant du "Je".' },
    { name: 'Pathétique', traits: 'Évocation poignante de la souffrance inspirant pitié et compassion.' },
    { name: 'Tragique', traits: 'Confrontation fatale avec la mort, les dieux ou le destin implacable.' },
    { name: 'Dramatique', traits: 'Enchaînement haletant d\'actions et de coups de théâtre générant le suspense.' },
    { name: 'Satirique', traits: 'Critique virulente des vices, abus et hypocrisies par la moquerie.' },
    { name: 'Épique', traits: 'Grandeur héroïque et souffle surhumain célébrant des exploits collectifs.' },
    { name: 'Ironique', traits: 'Dérision subtile soulignant les contradictions par antiphrase.' }
  ],
  annalesSubjects: [
    {
      id: 'francais-dissert-sellier',
      title: 'Dissertation littéraire : Les personnages et l\'exaltation des rêves selon Philippe Sellier',
      statement: 'Philippe SELLIER, dans une interview, tenait ce propos : « Les personnages des œuvres littéraires exaltent nos rêves, incarnent nos désirs d’échapper aux limites d’une vie terne pour accéder à la lumière, notre volonté de quitter les bas-fonds pour les hauts espaces, notre passion de souveraineté ». En vous appuyant sur des œuvres littéraires lues ou étudiées, expliquez et discutez cette opinion.',
      type: 'dissertation'
    },
    {
      id: 'francais-dissert-marthe-robert',
      title: 'Dissertation littéraire : La loi du mensonge dans le roman selon Marthe Robert',
      statement: 'Dans son ouvrage Roman des origines et origines du roman, Marthe Robert affirme : « Conçu spécialement pour leurrer, le mensonge n’est pas pour lui un défaut, c’est sa loi ». Dans un développement argumenté et illustré d’exemples tirés d’œuvres littéraires, expliquez et discutez cette assertion.',
      type: 'dissertation'
    },
    {
      id: 'francais-commentaire-mukala',
      title: 'Commentaire composé : « Gorgé de sang » de Mukala Kadima Nzuji',
      statement: 'Texte poétique : « Gorgé de sang, de sang, du sang / Des milliers d’âmes innocentes... » (Redire les mots anciens). Consigne : Vous ferez de ce texte un commentaire composé dans lequel vous montrerez comment s’y prend le poète pour dénoncer les effets de la guerre et de la haine sur la nature et sur l’homme.',
      type: 'commentaire'
    },
    {
      id: 'francais-commentaire-dadie-saint-louis',
      title: 'Commentaire composé : « Saint-Louis du Sénégal » de Bernard Binlin Dadié',
      statement: 'Extrait de Climbié : « Saint-Louis est une vieille ville qui, comme toutes ses pareilles, à défaut de beauté, se pare d’amabilité... » Consigne : Vous montrerez que cette ville reste un carrefour incontournable malgré sa répugnance.',
      type: 'commentaire'
    },
    {
      id: 'francais-resume-tradition-modernisme',
      title: 'Résumé de texte & Production écrite : Tradition et Modernisme',
      statement: 'Texte d\'essai d\'un analyste sur la conciliation impérative entre la préservation des racines culturelles et les exigences incontournables de la mondialisation.',
      type: 'resume_texte'
    }
  ]
};

// =========================================================================
// 3. HISTOIRE-GÉOGRAPHIE : FONDEMENTS & RELATIONS INTERNATIONALES (PAGES 54 À 81)
// =========================================================================

export const REP_HISTOIRE_GEO_DATA = {
  dissertationTypesGeography: [
    { type: 'Type 1 : Sujet en « EN »', example: 'Le tourisme en Côte d\'Ivoire', plan: 'Axe 1: Présentation du secteur, Axe 2: Apport dans l\'économie, Axe 3: Problèmes et solutions.' },
    { type: 'Type 2 : Sujet en « DANS »', example: 'La pêche dans l\'économie ivoirienne', plan: 'Axe 1: L\'apport de l\'activité, Axe 2: Les faiblesses et difficultés.' },
    { type: 'Type 3 : Sujet en « ET »', example: 'L\'État et l\'industrie en Côte d\'Ivoire', plan: 'Axe 1: Présentation de l\'industrie, Axe 2: Rôle et politique de l\'État, Axe 3: Limites de l\'action étatique.' },
    { type: 'Type 4 : Sujet dialectique « ? »', example: 'La Côte d\'Ivoire peut-elle toujours compter sur son agriculture ?', plan: 'Axe 1: L\'agriculture moteur indéniable, Axe 2: Les limites et la nécessité d\'une diversification.' },
    { type: 'Type 5 : Sujet chronologique', example: 'L\'industrie ivoirienne de 1960 à nos jours', plan: 'Axe 1: Démarrage (1960-1970), Axe 2: Expansion (1970-1980), Axe 3: Crise et ralentissement (1980-2011), Axe 4: Relance (depuis 2012).' }
  ],
  coteDivoirePillars: {
    naturalPillars: {
      relief: 'Relief plat et monotone (plaines côtières, bas plateaux étagés, massifs montagneux isolés à l\'ouest : Nimba, Tonkoui, Péko). Facilite les transports et l\'agriculture.',
      climate: 'Climat subéquatorial très humide au sud, climat tropical à saison sèche marquée au nord, climat de montagne à l\'ouest. Favorable à la diversification des cultures.',
      soils: 'Sols ferrallitiques profonds et fertiles propices au café, cacao et hévéa en zone forestière ; sols ferrugineux au nord.',
      hydrography: '4 grands fleuves longitudinaux (Comoé, Bandama, Sassandra, Cavally), lagunes poissonneuses (Ebrié, Aby), 560 km de côte atlantique.'
    },
    economicSectors: {
      primary: 'Cacao (1er mondial avec 40% de l\'offre mondiale), Anacarde (1er mondial), Hévéa (1er africain), Palmier à huile, Café, Bois. Vivrier : Igname, Manioc, Riz.',
      secondary: '8e puissance industrielle d\'Afrique, plus grand tissu industriel de la zone UEMOA. Forte dominante agroalimentaire, raffinage pétrolier (SIR), BTP, chimie.',
      tertiary: 'Deux ports majeurs (Abidjan, San-Pédro), réseau routier bitumé dense, intégration bancaire régionale (BRVM), essor rapide du numérique et du secteur informel.'
    }
  },
  internationalRelationsTopics: [
    'Le Bloc de l\'Est (Kominform, CAEM, Pacte de Varsovie) vs Bloc de l\'Ouest (Doctrine Truman, Plan Marshall, OTAN)',
    'La Crise de Berlin (Blocus de 1948-1949 et division en RFA/RDA ; Mur de Berlin en 1961)',
    'La Crise des fusées de Cuba (Octobre 1962, paroxysme atomique, négociation Kennedy-Khrouchtchev et téléphone rouge)',
    'La Guerre du Vietnam (1964-1975, enlisement américain, accords de Paris de 1973, réunification communiste en 1975)',
    'L\'implosion de l\'Union Soviétique (Réformes Perestroïka et Glasnost de Gorbatchev, dislocation du bloc en 1991)',
    'La décolonisation de la Côte d\'Ivoire (Conférence de Brazzaville 1944, création du SAA et du PDCI-RDA, désapparentement du PCF en 1950, Loi-cadre Defferre 1956, Proclamation le 7 août 1960)'
  ]
};

// =========================================================================
// 4. ANGLAIS : STRUCTURES DU WRITING, ESSAYS & DIALOGUES (PAGES 82 À 103)
// =========================================================================

export const REP_ANGLAIS_DATA = {
  essayTemplates: {
    standardEssay: {
      intro: 'These last years, we notice a dramatic rise of the issue of [TOPIC]. While some argue that [ASPECT 1], others firmly contend that [ASPECT 2]. Which position should we adopt? This paper will thoroughly analyze the causes, consequences, and prospective solutions.',
      body: 'Firstly, regarding the underlying causes, [CAUSE 1] plays a critical role. Secondly, [CAUSE 2] exacerbates the phenomenon. As a direct result, severe consequences emerge, such as [CONSEQUENCE 1] and [CONSEQUENCE 2]. In order to remedy this alarming reality, sustainable measures must be implemented: first, [SOLUTION 1]; furthermore, [SOLUTION 2].',
      conclusion: 'In a nutshell, resolving [TOPIC] requires collective determination and civic responsibility from both policymakers and ordinary citizens.'
    },
    newspaperArticleFormat: [
      'Headline: Short, catchy, and capitalized.',
      'Byline: Written by a reporter / staff writer.',
      'Lead Paragraph: Who, What, Where, When, and Why.',
      'Detailed Explanation: Factual context, interviews, eye-witness testimonies.',
      'Closing Impact / Call to Action: Forward-looking summary.'
    ]
  },
  tensesAndGrammarRules: [
    { topic: 'Conditionals', rule: 'Type 1: If + Present -> will + BV ; Type 2: If + Past -> would + BV ; Type 3: If + Past Perfect -> would have + Past Participle.' },
    { topic: 'Time markers', rule: 'Ago (past finished), Since (starting point till now + Present Perfect), For (total duration).' },
    { topic: 'Modals', rule: 'Must (obligation/certitude), Should (advice), May/Might (possibility), Can/Could (ability/permission).' },
    { topic: 'Passive Voice', rule: 'Object + BE (conjugated in same tense) + Past Participle + (by + Agent).' }
  ]
};

// =========================================================================
// 5. MATHÉMATIQUES TLE A1/A2 : RAPPELS D'EXAMEN (PAGES 104 À 110)
// =========================================================================

export const REP_MATHS_TLE_A_DATA = {
  functionsStudy: {
    domains: [
      'Polynômes, cosinus, sinus, exponentielle : Df = R',
      'Racine carrée f(x) = sqrt(u(x)) : u(x) >= 0',
      'Rationnelle f(x) = u(x)/v(x) : v(x) != 0',
      'Logarithme népérien f(x) = ln(u(x)) : u(x) > 0'
    ],
    logarithmProperties: [
      'ln(ab) = ln(a) + ln(b)',
      'ln(a/b) = ln(a) - ln(b)',
      'ln(sqrt(a)) = 1/2 * ln(a)',
      'ln(a^r) = r * ln(a)',
      'lim(x->0+) ln(x) = -inf',
      'lim(x->+inf) ln(x) = +inf',
      'lim(x->+inf) ln(x)/x = 0',
      'lim(x->0) ln(1+x)/x = 1',
      'lim(x->0+) x*ln(x) = 0'
    ],
    exponentialProperties: [
      'e^(a+b) = e^a * e^b',
      'e^(a-b) = e^a / e^b',
      'e^0 = 1, e^1 = e ~= 2.718',
      'lim(x->+inf) e^x = +inf',
      'lim(x->-inf) e^x = 0',
      'lim(x->+inf) e^x / x = +inf',
      'lim(x->-inf) x*e^x = 0',
      'lim(x->0) (e^x - 1)/x = 1'
    ]
  },
  combinatoricsAndProbability: {
    formulas: [
      'p-liste avec remise : n^p',
      'Arrangement sans remise ordonné : A_n^p = n! / (n - p)!',
      'Permutation de n éléments : n!',
      'Combinaison non ordonnée sans remise : C_n^p = n! / (p! * (n - p)!)',
      'Probabilité équiprobable : P(A) = card(A) / card(Omega)',
      'Événement contraire : P(contraire de A) = 1 - P(A)'
    ]
  }
};
