/**
 * BASE DE DONNÉES PÉDAGOGIQUE — LE FRANÇAIS EN TERMINALE
 * Auteurs : M. Chérif Ousmane AÏDARA (Lycée Seydina Limamoulaye, Guédiawaye)
 *           M. Ousseynou WADE (Lycée Moderne de Dakar)
 * Édition de référence pour la préparation au Baccalauréat Littéraire et Scientifique
 */

export interface FrenchCourseChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subSections: {
    title: string;
    content: string;
    keyQuotes?: { author: string; work: string; quote: string; analysis?: string }[];
  }[];
}

export interface LiteraryWorkMonograph {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: 'poesie' | 'roman' | 'theatre' | 'conte' | 'nouvelle';
  biography: string;
  genesisAndContext: string;
  plotOrStructureSummary: string;
  majorThemes: { theme: string; explanation: string; textualEvidence?: string }[];
  charactersStudy?: { name: string; status: string; psychologicalPortrait: string }[];
  styleAndPhilosophy: string;
  selectedExcerpts: {
    title: string;
    text: string;
    source: string;
    explanatoryNotes?: string;
  }[];
  modelCommentary?: {
    axesTitle: string;
    introduction: string;
    axes: {
      axeTitle: string;
      subParts: { title: string; repérage: string; analyse: string; interprétation: string }[];
    }[];
    conclusion: string;
  };
}

export const AIDARA_WADE_LITERARY_MOVEMENTS = [
  {
    name: 'Humanisme (XVIe siècle)',
    period: 'XVIe siècle (Renaissance, Pléiade 1556)',
    principles: [
      'Retour aux sources antiques gréco-latines ("humanitas" = culture).',
      'Foi inébranlable en l\'homme et en ses capacités intellectuelles et morales ("Faire bien l\'homme" selon Montaigne).',
      'Idéal encyclopédique d\'éducation alliant rigueur de l\'esprit et exercice physique (Rabelais, Gargantua).',
      'Défense et illustration de la langue française face au latin (Ronsard, Du Bellay).'
    ],
    keyAuthors: ['François Rabelais', 'Michel de Montaigne', 'Pierre de Ronsard', 'Joachim Du Bellay', 'Agrippa d\'Aubigné']
  },
  {
    name: 'Classicisme (1660-1685)',
    period: 'XVIIe siècle (Règne personnel de Louis XIV)',
    principles: [
      'Idéal esthétique fondé sur l\'imitation des Anciens, le culte de la raison et le bon sens partagé.',
      'Règles strictes au théâtre : Règle des trois unités (temps : 24h, lieu : un seul décor, action : une seule intrigue principale selon Boileau : "Qu\'en un lieu, qu\'en un jour, un seul fait accompli tienne jusqu\'à la fin le théâtre rempli").',
      'Bienséance (pas de mort, de combat, de sang ni de trivialité sur scène) et vraisemblance.',
      'Modèle humain de "l\'honnête homme" (mesure, modération, élégance, refus du pédantisme).'
    ],
    keyAuthors: ['Jean Racine', 'Molière', 'Pierre Corneille', 'Jean de La Fontaine', 'Nicolas Boileau', 'La Bruyère', 'Madame de La Fayette']
  },
  {
    name: 'Philosophie des Lumières (XVIIIe siècle)',
    period: 'XVIIIe siècle (1715-1789)',
    principles: [
      'Triomphe de la raison critique, de l\'esprit d\'examen et de l\'expérimentation scientifique.',
      'Combat virulent contre le fanatisme religieux, l\'intolérance, les préjugés et l\'absolutisme politique.',
      'Militantisme par les lettres (pamphlets, contes philosophiques, dictionnaires) préparant la Révolution de 1789.',
      'Projet monumental de l\'Encyclopédie de Diderot et d\'Alembert.'
    ],
    keyAuthors: ['Voltaire', 'Jean-Jacques Rousseau', 'Denis Diderot', 'Montesquieu']
  },
  {
    name: 'Romantisme (1820-1843)',
    period: 'XIXe siècle (post-Empire)',
    principles: [
      'Exaltation du "Moi", de la sensibilité intime, du lyrisme personnel et du mal du siècle ("vague des passions").',
      'Communion spirituelle avec la nature consolatrice ou confidente.',
      'Libération des formes poétiques ("briser l\'alexandrin") et rejet de la règle classique des trois unités (Préface de Cromwell de Victor Hugo).',
      'Le romantisme défini comme "le libéralisme en littérature".'
    ],
    keyAuthors: ['Victor Hugo', 'Alphonse de Lamartine', 'Alfred de Musset', 'Gérard de Nerval']
  },
  {
    name: 'Réalisme (1850-1880)',
    period: 'Milieu du XIXe siècle',
    principles: [
      'Reproduction intégrale et objective de la réalité sociale sans fard ni complaisance.',
      'Le roman défini comme "un miroir qu\'on promène le long d\'un chemin" (Stendhal).',
      'Observation minutieuse des mœurs, description documentaire et effacement de la subjectivité de l\'auteur (Flaubert, Balzac).'
    ],
    keyAuthors: ['Honoré de Balzac', 'Gustave Flaubert', 'Stendhal', 'Guy de Maupassant']
  },
  {
    name: 'Naturalisme (1866-1902)',
    period: 'Fin du XIXe siècle',
    principles: [
      'Application de la méthode expérimentale et médicale de Claude Bernard au roman.',
      'Déterminisme physiologique et héréditaire des personnages ("la bête humaine").',
      'Étude minutieuse du milieu social ouvrier, minier ou bourgeois (Le roman expérimental de Zola).'
    ],
    keyAuthors: ['Émile Zola', 'Guy de Maupassant', 'Les frères Goncourt', 'Joris-Karl Huysmans']
  },
  {
    name: 'Parnasse (« L\'art pour l\'art »)',
    period: 'Deuxième moitié du XIXe siècle (1866)',
    principles: [
      'Refus absolu de l\'utilitarisme moral, de la sentimentalité romantique et de l\'engagement politique.',
      'Culte de la beauté pure, ciselée comme une sculpture ("Sculpte, lime, cisèle ; Que ton rêve flottant se scelle dans le bloc résistant" - Théophile Gautier).',
      'Impersonnalité et rigueur technique irréprochable de la versification.'
    ],
    keyAuthors: ['Théophile Gautier', 'Leconte de Lisle', 'José-Maria de Heredia', 'Théodore de Banville']
  },
  {
    name: 'Symbolisme (1880-1900)',
    period: 'Fin du XIXe siècle',
    principles: [
      'Le monde matériel perçu comme un ensemble de signes et de correspondances vers le suprasensible.',
      'La poésie comme alchimie suggestive, refus de l\'explication rationnelle au profit de la musique des vers.',
      'Invention du vers libre affranchi des contraintes métriques rigides.'
    ],
    keyAuthors: ['Charles Baudelaire', 'Arthur Rimbaud', 'Paul Verlaine', 'Stéphane Mallarmé']
  },
  {
    name: 'Surréalisme (1919-1966)',
    period: 'Entre-deux-guerres et XXe siècle',
    principles: [
      'Protestation radicale née de l\'horreur de la Première Guerre mondiale et issue de la révolte Dada (Tristan Tzara).',
      'Définition officielle d\'André Breton (Manifeste de 1924) : "Automatisme psychique pur par lequel on se propose d\'exprimer le fonctionnement réel de la pensée en l\'absence de tout contrôle de la raison, hors de toute préoccupation esthétique ou morale".',
      'Exploration systématique de l\'inconscient, du rêve, du merveilleux et recours aux techniques nouvelles (écriture automatique, cadavres exquis).',
      'Volonté conjointe de "changer la vie" (Rimbaud) et de "changer le monde" (Marx).'
    ],
    keyAuthors: ['André Breton', 'Paul Éluard', 'Louis Aragon', 'Philippe Soupault', 'Robert Desnos', 'René Char', 'Antonin Artaud']
  },
  {
    name: 'Négritude (XXe siècle)',
    period: 'Années 1930 à nos jours',
    principles: [
      'Prise de conscience, défense et illustration des valeurs culturelles et de l\'humanisme négro-africain.',
      'Refus de l\'assimilation coloniale et revendication fière de l\'identité noire.',
      'Le poème comme chant, parole et musique inséparables de la vie communautaire.'
    ],
    keyAuthors: ['Aimé Césaire', 'Léopold Sédar Senghor', 'Léon-Gontran Damas', 'David Diop', 'Birago Diop']
  }
];

export const AIDARA_WADE_WORKS_MONOGRAPHS: LiteraryWorkMonograph[] = [
  {
    id: 'fables-la-fontaine-1668',
    title: 'Fables (Livres I à XII)',
    author: 'Jean de La Fontaine',
    year: 1668,
    genre: 'poesie',
    biography: 'Né en 1621 à Château-Thierry, La Fontaine est un maître classique formé au droit et aux lettres. Protégé de Fouquet dont il resta fidèle après sa disgrâce, puis hôte de Mme de La Sablière. Élu à l\'Académie française en 1684, mort en 1695.',
    genesisAndContext: 'Le premier recueil (Livres I à VI, 1668) est dédié au Dauphin, fils de Louis XIV. Le second recueil (Livres VII à XI, 1678) s\'ouvre aux contes orientaux de Pilpay et adopte un ton plus satirique et philosophique. Le livre XII paraît en 1694.',
    plotOrStructureSummary: '236 fables en vers libres et variés, réparties en 12 livres. La fable associe un récit plaisant et vivant mettant en scène des animaux personnifiés et une moralité didactique explicite ou implicite.',
    majorThemes: [
      { theme: 'La peinture critique de la société du XVIIe siècle', explanation: 'Le roi (Lion), les courtisans obséquieux (Renard), les faibles exploités (Agneau, Bûcheron) forment un miroir transparent de la monarchie absolue.', textualEvidence: 'Les Animaux malades de la peste, Le Lion et le Rat.' },
      { theme: 'L\'art d\'instruire en plaisant', explanation: 'Le détour de l\'apologue évite le dogmatisme et contourne la censure royale.', textualEvidence: '« Une morale nue apporte de l\'ennui ; Le conte fait passer le précepte avec lui » (Préface du Livre VI).' },
      { theme: 'La philosophie du bonheur et de la liberté', explanation: 'Mélange d\'épicurisme serein et de lucidité stoïcienne face à la mort et aux puissants.', textualEvidence: '« Plutôt souffrir que mourir, c\'est la devise des hommes » (La Mort et le Bûcheron) ; Le Loup et le Chien.' }
    ],
    charactersStudy: [
      { name: 'Le Lion', status: 'Souverain absolu', psychologicalPortrait: 'Incarne le roi : puissant, arbitraire, dangereux mais parfois capable d\'un geste magnanime.' },
      { name: 'Le Renard', status: 'Courtisan rusé', psychologicalPortrait: 'Maître de la flatterie, habile manipulateur des faiblesses d\'autrui pour assurer sa subsistance.' },
      { name: 'Bouki / Le Bûcheron / L\'Agneau', status: 'Les humbles et opprimés', psychologicalPortrait: 'Victimes des abus d\'autorité, ployant sous les corvées et la violence institutionnelle.' }
    ],
    styleAndPhilosophy: 'Maniement virtuose de l\'hétérométrie, rejets, enjambements, dialogue vif et naturel créant une comédie à cent actes divers dont la scène est l\'Univers.',
    selectedExcerpts: [
      {
        title: 'La Mort et le Bûcheron (Livre I, fable 16)',
        text: `Un pauvre Bûcheron, tout couvert de ramée,\nSous le faix du fagot aussi bien que des ans\nGémissant et courbé, marchait à pas pesants,\nEt tâchait de gagner sa chaumine enfumée.\nEnfin, n'en pouvant plus d'effort et de douleur,\nIl met bas son fagot, il songe à son malheur :\nQuel plaisir a-t-il eu depuis qu'il est au monde ?\nEn est-il un plus pauvre en la machine ronde ?\nPoint de pain quelquefois, et jamais de repos.\nSa femme, ses enfants, les soldats, les impôts,\nLe créancier, et la corvée\nLui font d'un malheureux la peinture achevée.\nIl appelle la Mort ; elle vient sans tarder,\nLui demande ce qu'il faut faire.\n" C'est, dit-il, afin de m'aider\nÀ recharger ce bois ; tu ne tarderas guère. "\nLe trépas vient tout guérir ;\nMais ne bougeons d'où nous sommes :\nPlutôt souffrir que mourir,\nC'est la devise des hommes.`,
        source: 'Jean de La Fontaine, Fables (1668)'
      }
    ]
  },
  {
    id: 'contemplations-victor-hugo-1856',
    title: 'Les Contemplations (Autrefois / Aujourd\'hui)',
    author: 'Victor Hugo',
    year: 1856,
    genre: 'poesie',
    biography: 'Né en 1802 à Besançon, Victor Hugo est le chef de file du Romantisme, poète visionnaire, dramaturge et romancier de génie. Après la noyade de sa fille Léopoldine en 1843 et son exil politique à Jersey puis Guernesey sous Napoléon III, il publie Les Contemplations en 1856. Mort en 1885 avec funérailles nationales au Panthéon.',
    genesisAndContext: 'Écrit durant l\'exil dans les îles anglo-normandes. Le recueil est structuré par la fracture tragique du 4 septembre 1843 (noyade de Léopoldine et de son époux Charles Vacquerie à Villequier).',
    plotOrStructureSummary: '157 poèmes répartis en deux tomes : "Autrefois" (1830-1843 : Aurore, L\'Âme en fleur, Les Luttes et les rêves) et "Aujourd\'hui" (1843-1855 : Pauca Meae, En marche, Au bord de l\'infini).',
    majorThemes: [
      { theme: 'Les Mémoires d\'une âme et universalité du moi', explanation: 'Le drame intime d\'un père devient le miroir fraternel de la destinée humaine.', textualEvidence: '« Hélas ! Quand je vous parle de moi, je vous parle de vous. Comment ne le sentez-vous pas ? Ah ! Insensé, qui crois que je ne suis pas toi ! » (Préface).' },
      { theme: 'Le mystère de la douleur et la révolte contre le mal', explanation: 'Cri de détresse d\'un père refusant l\'injustice divine avant d\'accepter une soumission sans résignation.', textualEvidence: '« Et mon cœur est soumis, mais n\'est pas résigné » (À Villequier).' },
      { theme: 'Le pouvoir d\'immortalité de la poésie', explanation: 'L\'écriture poétique triomphe du tombeau et rend l\'être disparu éternel.', textualEvidence: 'Demain dès l\'aube, À celle qui est restée en France.' }
    ],
    styleAndPhilosophy: 'Alexandrin romantique libéré, trimètres vigoureux, contrastes ombre/lumière, souffle visionnaire et métaphysique.',
    selectedExcerpts: [
      {
        title: 'Demain dès l\'aube... (Pauca Meae, Livre IV, poème XIV)',
        text: `Demain, dès l'aube, à l'heure où blanchit la campagne,\nJe partirai. Vois-tu, je sais que tu m'attends.\nJ'irai par la forêt, j'irai par la montagne.\nJe ne puis demeurer loin de toi plus longtemps.\n\nJe marcherai les yeux fixés sur mes pensées,\nSans rien voir au dehors, sans entendre aucun bruit,\nSeul, inconnu, le dos courbé, les mains croisées,\nTriste, et le jour pour moi sera comme la nuit.\n\nJe ne regarderai ni l'or du soir qui tombe,\nNi les voiles au loin descendant vers Harfleur,\nEt quand j'arriverai, je mettrai sur ta tombe\nUn bouquet de houx vert et de bruyère en fleur.`,
        source: 'Victor Hugo, Les Contemplations (3 septembre 1847 / publication 1856)'
      }
    ],
    modelCommentary: {
      axesTitle: 'Commentaire Composé : Du pèlerinage douloureux au poème d\'amour et d\'immortalité',
      introduction: 'Le poème XIV du livre IV "Pauca Meae" des Contemplations, écrit à la veille du quatrième anniversaire de la noyade de Léopoldine, retrace le voyage annuel du poète vers Villequier. En trois quatrains d\'alexandrins à rimes croisées, Hugo métamorphose une marche réelle en un itinéraire spirituel où la poésie défie victorieusement la mort.',
      axes: [
        {
          axeTitle: 'I. Un voyage réel mené avec une détermination inébranlable',
          subParts: [
            {
              title: 'A. La progression temporelle et spatiale',
              repérage: '« Demain, dès l\'aube » (v.1) ; « l\'or du soir qui tombe » (v.9) ; « par la forêt, par la montagne » (v.3) ; « Harfleur » (v.10).',
              analyse: 'Rythme ternaire 2/2/8 dès l\'attaque, anaphore de la préposition "par", métaphore crépusculaire.',
              interprétation: 'Le voyage embrasse une journée entière de marche continue à travers un relief rude, soulignant la volonté tenace du pèlerin.'
            },
            {
              title: 'B. La dynamique des verbes de mouvement au futur',
              repérage: '« Je partirai », « j\'irai », « je marcherai », « j\'arriverai ».',
              analyse: 'Verbes d\'action conjugués au futur simple de certitude placés aux césures et débuts de vers.',
              interprétation: 'Reflète une résolution absolue que nulle fatigue ne peut infléchir.'
            }
          ]
        },
        {
          axeTitle: 'II. L\'itinéraire intérieur et l\'aveuglement volontaire au monde',
          subParts: [
            {
              title: 'A. L\'isolement sensoriel absolu',
              repérage: '« Sans rien voir au dehors, sans entendre aucun bruit » (v.6) ; « le jour pour moi sera comme la nuit » (v.8).',
              analyse: 'Répétition de la négation "sans", comparaison oxymorique jour/nuit.',
              interprétation: 'Le poète s\'enferme dans son deuil, refusant les attraits du paysage sensible pour ne voir que l\'image intérieure de sa fille.'
            },
            {
              title: 'B. L\'attitude physique du deuil',
              repérage: '« Seul, inconnu, le dos courbé, les mains croisées, triste » (v.7-8).',
              analyse: 'Accumulation d\'adjectifs et participes dépeignant l\'accablement corporel.',
              interprétation: 'Le père meurtri porte le fardeau de la perte comme une croix spirituelle.'
            }
          ]
        },
        {
          axeTitle: 'III. Le triomphe de l\'amour et le pouvoir d\'immortalité de la poésie',
          subParts: [
            {
              title: 'A. Le dialogue vivant par-delà la tombe',
              repérage: '« Vois-tu, je sais que tu m\'attends » (v.2) ; couple de pronoms "je" / "tu".',
              analyse: 'Présent d\'énonciation et interpellation directe de l\'absente.',
              interprétation: 'Négation de la coupure de la mort : Léopoldine est rendue vivante et présente par la foi de l\'amour.'
            },
            {
              title: 'B. L\'offrande végétale comme emblème d\'immortalité',
              repérage: '« Un bouquet de houx vert et de bruyère en fleur » (v.12).',
              analyse: 'Chute du poème sur deux espèces persistantes aux couleurs vives (vert, fleur).',
              interprétation: 'Le houx imputrescible et la bruyère résistante scellent le triomphe de la vie sur le néant du tombeau grâce au monument poétique.'
            }
          ]
        }
      ],
      conclusion: 'Hugo transforme un pèlerinage funèbre en une éclatante victoire du verbe poétique sur l\'oubli. En refusant les consolations faciles de la nature, il fait de sa fille disparue une présence éternelle gravée dans la mémoire universelle des hommes.'
    }
  },
  {
    id: 'chants-dombre-senghor-1945',
    title: 'Chants d\'ombre',
    author: 'Léopold Sédar Senghor',
    year: 1945,
    genre: 'poesie',
    biography: 'Né en 1906 à Joal (Sénégal), premier Africain agrégé de grammaire (1935), cofondateur de la Négritude avec Césaire et Damas, premier président du Sénégal indépendant (1960-1980) et premier Africain élu à l\'Académie française (1983).',
    genesisAndContext: 'Premier recueil poétique de Senghor, conçu durant les années d\'exil en France et de captivité militaire. Réponse magistrale au prétendu vide culturel africain prôné par l\'idéologie colonialiste.',
    plotOrStructureSummary: '17 poèmes courts et 3 longs poèmes concertants (Que m\'accompagnent kora et balafong, Par-delà Eros, Le Retour de l\'enfant prodigue). Recueil pensé comme une symphonie lyrique célébrant le Royaume d\'Enfance et la femme noire.',
    majorThemes: [
      { theme: 'La célébration de la beauté plastique et spirituelle de la Femme Noire', explanation: 'Allégorie de la terre africaine, de la mère nourricière et de l\'humanisme nègre.', textualEvidence: '« Femme nue, femme noire / Vêtue de ta couleur qui est vie, de ta forme qui est beauté ! »' },
      { theme: 'La nostalgie du Royaume d\'Enfance et du terroir sérère', explanation: 'Retour purificateur aux racines, aux cérémonies du Sine, aux rhapsodies des griots.', textualEvidence: 'Joal, Nuit de Sine.' },
      { theme: 'La Négritude comme Civilisation de l\'Universel', explanation: 'Dépassement du ressentiment colonial par le métissage culturel fécond.', textualEvidence: 'Prière aux Masques, Neige sur Paris.' }
    ],
    charactersStudy: [],
    styleAndPhilosophy: 'Verset ample à harmonie imitative, répétitions modulées ("répétition qui ne se répète pas"), richesse des métaphores synesthésiques et rythmes syncopés calqués sur les instruments traditionnels.',
    selectedExcerpts: [
      {
        title: 'Femme noire',
        text: `Femme nue, femme noire\nVêtue de ta couleur qui est vie, de ta forme qui est beauté !\nJ'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux.\nEt voilà qu'au cœur de l'Été et de Midi, je te découvre, Terre promise, du haut d'un haut col calciné\nEt ta beauté me foudroie en plein cœur, comme l'éclair d'un aigle.\n\nFemme nue, femme obscure\nFruit mûr à la chair ferme, sombres extases du vin noir, bouche qui fais lyrique ma bouche\nSavane aux horizons purs, savane qui frémis aux caresses ferventes du Vent d'Est\nTamtam sculpté, tamtam tendu qui grondes sous les doigts du vainqueur\nTa voix grave de contralto est le chant spirituel de l'Aimée.\n\nFemme nue, femme obscure\nHuile que ne ride nul souffle, huile calme aux flancs de l'athlète, aux flancs des princes du Mali\nGazelle aux attaches célestes, les perles sont étoiles sur la nuit de ta peau\nDélices des jeux de l'esprit, les reflets de l'or rouge sur ta peau qui se moire\nÀ l'ombre de ta chevelure, s'éclaire mon angoisse aux soleils prochains de tes yeux.\n\nFemme nue, femme noire\nJe chante ta beauté qui passe, forme que je fixe dans l'Éternel,\nAvant que le Destin jaloux ne te réduise en cendres pour nourrir les racines de la vie.`,
        source: 'Léopold Sédar Senghor, Chants d\'ombre (1945)'
      }
    ]
  },
  {
    id: 'coups-de-pilon-david-diop-1948',
    title: 'Coups de pilon',
    author: 'David Diop',
    year: 1948,
    genre: 'poesie',
    biography: 'Né en 1927 à Bordeaux d\'un père sénégalais et d\'une mère camerounaise, David Diop incarne l\'aile révolutionnaire et intransigeante de la Négritude. Mort prématurément dans un accident d\'avion au large des Almadies (Dakar) en 1960.',
    genesisAndContext: 'Conçu dans l\'immédiat après-guerre sous le régime colonial répressif. Le pilon, instrument féminin traditionnel de transformation du grain, devient l\'image d\'un verbe poétique percutant brisant l\'oppression pour forger la liberté.',
    plotOrStructureSummary: 'Recueil concis de 17 poèmes militants structurés selon une triade temporelle : passé précolonial glorieux, présent d\'iniquité coloniale, futur d\'affranchissement révolutionnaire.',
    majorThemes: [
      { theme: 'Le réquisitoire implacable contre la barbarie coloniale', explanation: 'Dénonciation du pillage, des travaux forcés, des massacres et de la duplicité civilisatrice.', textualEvidence: '« Le blanc a tué mon père car mon père était fier / Le blanc a violé ma mère car ma mère était belle » (Le temps du martyre) ; Les Vautours.' },
      { theme: 'L\'appel vibrant des opprimés à la révolte', explanation: 'Refus de la résignation chrétienne ou de la commisération passive.', textualEvidence: '« Toi qui plies, toi qui pleures... Relève-toi et crie : NON ! » (Défi à la force).' },
      { theme: 'La renaissance radieuse de l\'Afrique', explanation: 'L\'Afrique dressée comme un jeune arbre robuste qui reprend patiemment la saveur de la liberté.', textualEvidence: 'Afrique mon Afrique, Rama Kam.' }
    ],
    charactersStudy: [],
    styleAndPhilosophy: 'Style ramassé, incisif, débarrassé de fioritures ornementales ; syntaxe percutante, anaphores martelées comme des coups de pilon pour galvaniser les consciences prolétaires.',
    selectedExcerpts: [
      {
        title: 'Défi à la force',
        text: `Toi qui plies toi qui pleures\nToi qui meurs un jour comme ça sans savoir pourquoi\nToi qui luttes qui veilles pour le repos de l'Autre\nToi qui ne regardes plus avec le rire dans les yeux\nToi mon frère au visage de peur et d'angoisse\nRelève-toi et crie : NON !`,
        source: 'David Diop, Coups de pilon (1948)'
      },
      {
        title: 'Le temps du martyre',
        text: `Le blanc a tué mon père\nCar mon père était fier\nLe blanc a violé ma mère\nCar ma mère était belle\nLe blanc a courbé mon frère sous le soleil des routes\nCar mon frère était fort\nPuis le blanc a tourné vers moi\nSes mains rouges de sang\nNoir\nM'a craché son mépris au visage\nEt sa voix de maître :\n« Hé boy, un berger, une serviette, de l'eau ! »`,
        source: 'David Diop, Coups de pilon (1948)'
      }
    ]
  },
  {
    id: 'etranger-albert-camus-1942',
    title: 'L\'Étranger',
    author: 'Albert Camus',
    year: 1942,
    genre: 'roman',
    biography: 'Né en 1913 en Algérie dans un milieu ouvrier très modeste, orphelin de père, tuberculeux. Philosophe de l\'absurde et de la révolte, journaliste de combat, Prix Nobel de littérature en 1957. Mort tragiquement dans un accident de voiture en 1960.',
    genesisAndContext: 'Écrit en pleine Seconde Guerre mondiale, L\'Étranger ouvre le "Cycle de l\'absurde" aux côtés du traité philosophique Le Mythe de Sisyphe et de la pièce Caligula.',
    plotOrStructureSummary: 'Deux parties strictement symétriques : la 1re partie raconte la vie routinière de Meursault à Alger, l\'enterrement de sa mère à Marengo, sa liaison avec Marie, son amitié avec Raymond Sintès et le meurtre tragique d\'un Arabe sur une plage écrasée de soleil. La 2de partie décrit ses onze mois d\'emprisonnement, son procès où la cour condamne son manque de larmes et de conformisme moral bien plus que son crime, et sa sérénité retrouvée avant l\'échafaud.',
    majorThemes: [
      { theme: 'Le sentiment d\'absurdité de l\'existence', explanation: 'Décalage irréductible entre la quête de sens de l\'homme et le silence indifférent du monde.', textualEvidence: '« Rien n\'avait d\'importance et je savais bien pourquoi. Du fond de mon avenir, pendant toute cette vie absurde... »' },
      { theme: 'L\'homme qui refuse de mentir aux conventions sociales', explanation: 'Meursault est condamné à mort parce qu\'il ne joue pas la comédie des sentiments convenus.', textualEvidence: '« Dans notre société, tout homme qui ne pleure pas à l\'enterrement de sa mère risque d\'être condamné à mort » (Préface américaine de Camus).' },
      { theme: 'Le soleil assassin et la fatalité sensorielle', explanation: 'Le meurtre de l\'Arabe n\'a aucun mobile crapuleux, il résulte d\'une conjonction physique aveuglante.', textualEvidence: 'Scène du meurtre (Chapitre 6, 1re partie) : « Les quatre coups brefs que je frappais sur la porte du malheur ».' }
    ],
    charactersStudy: [
      { name: 'Meursault', status: 'Héros éponyme, modeste employé', psychologicalPortrait: 'Lucide, honnête jusqu\'à l\'extrême, étranger aux faux-semblants bourgeois et aux hypocrisies mondaines.' },
      { name: 'Marie Cardona', status: 'Compagne de Meursault', psychologicalPortrait: 'Solaire, fraîche, spontanée, attachée aux plaisirs simples du corps et de la mer.' },
      { name: 'Raymond Sintès', status: 'Voisin de palier, proxénète', psychologicalPortrait: 'Guerrier de quartier, violent et calculateur, entraînant involontairement Meursault dans le drame.' },
      { name: 'L\'Aumônier', status: 'Représentant de l\'Église et de l\'ordre moral', psychologicalPortrait: 'Tente d\'imposer le repentir chrétien à un condamné qui refuse les consolations illusoires d\'un au-delà.' }
    ],
    styleAndPhilosophy: 'Écriture blanche au passé composé, phrases brèves et paratactiques, focalisation interne objective traduisant l\'immédiateté phénoménologique.',
    selectedExcerpts: [
      {
        title: 'La scène du meurtre sur la plage (1re partie, fin du chapitre 6)',
        text: `La brûlure du soleil gagnait mes joues et j'ai senti des gouttes de sueur s'amasser dans mes sourcils. C'était le même soleil que le jour où j'avais enterré maman et, comme alors, le front surtout me faisait mal et toutes ses veines battaient ensemble sous la peau. À cause de cette brûlure que je ne pouvais plus supporter, j'ai fait un mouvement en avant... L'Arabe a tiré son couteau qu'il m'a présenté dans le soleil. La lumière a giclé sur l'acier et c'était comme une longue lame étincelante qui m'atteignait au front... Tout mon être s'est tendu et j'ai crispé ma main sur le revolver. La gâchette a cédé... Et c'était comme quatre coups brefs que je frappais sur la porte du malheur.`,
        source: 'Albert Camus, L\'Étranger (1942)'
      }
    ]
  },
  {
    id: 'soleils-independances-kourouma-1968',
    title: 'Les Soleils des Indépendances',
    author: 'Ahmadou Kourouma',
    year: 1968,
    genre: 'roman',
    biography: 'Né en 1927 à Boundiali (Côte d\'Ivoire), ancien élève à Bamako, tirailleur en Indochine, actuaire à Paris et Lyon. Il publie en 1968 ce chef-d\'œuvre fondateur marquant la rupture esthétique majeure du roman africain. Mort en 2003.',
    genesisAndContext: 'Écrit au lendemain des indépendances africaines pour dénoncer le "désenchantement" et la faillite politique des régimes à parti unique ayant trahi les espoirs des peuples.',
    plotOrStructureSummary: 'En trois parties inégales, le roman retrace la déchéance tragique de Fama Doumbouya, dernier prince légitime du Horodougou, réduit sous les indépendances à mendier aux funérailles d\'Abidjan, marié à la stérile Salimata, avant d\'hériter de Mariam, d\'être jeté arbitrairement en prison politique et de mourir mordu par un caïman en franchissant la frontière fermée de sa terre natale.',
    majorThemes: [
      { theme: 'Le désenchantement postcolonial', explanation: 'Les indépendances (« soleils de bâtardise ») n\'ont profité qu\'à une caste de profiteurs sans scrupules, marginalisant les vrais chefs traditionnels.', textualEvidence: '« Fama avait comme le petit rat de marigot creusé le trou pour le serpent avaleur de rats... Fama fut oublié et jeté aux mouches ».' },
      { theme: 'La stérilité et le drame de la femme africaine', explanation: 'Le calvaire de Salimata, traumatisée par l\'excision et le viol, stérile malgré ses dévotions sacrificielles.', textualEvidence: 'Chapitre 3 de la 1re partie.' },
      { theme: 'La subversion linguistique du français classique', explanation: 'Création d\'un "français malinké" épousant la syntaxe, les proverbes et la verve imagée des terroirs africains.', textualEvidence: '« J\'ai traduit le malinké en français en cassant le français pour trouver et restituer le rythme africain » (Kourouma).' }
    ],
    charactersStudy: [
      { name: 'Fama Doumbouya', status: 'Dernier prince du Horodougou', psychologicalPortrait: 'Orgueilleux, rancunier, violent et inadapté au monde moderne mercantile et bureaucratique.' },
      { name: 'Salimata', status: 'Première épouse de Fama', psychologicalPortrait: 'Dévouée, travailleuse, profondément meurtrie par la malédiction sociale de la stérilité.' },
      { name: 'Mariam', status: 'Seconde épouse léguée par le cousin Lacina', psychologicalPortrait: 'Opportuniste, séductrice et perfide, causant le naufrage domestique de Fama.' }
    ],
    styleAndPhilosophy: 'Rupture radicale avec le classicisme académique : hybridité linguistique, truculence des images, hybridité orale de l\'écrit, ironie tragique.',
    selectedExcerpts: [
      {
        title: 'Le prince déchu Fama dans les soleils de la politique',
        text: `Cette vie de grand commerçant n'était plus qu'un souvenir parce que tout le négoce avait fini avec l'embarquement des colonisateurs. Et des remords ! Fama bouillait de remords pour avoir tant combattu et détesté les Français... Comme une nuée de sauterelles les Indépendances tombèrent sur l'Afrique à la suite des soleils de la politique. Fama avait comme le petit rat de marigot creusé le trou pour le serpent avaleur de rats, ses efforts étaient devenus la cause de sa perte car comme la feuille avec laquelle on a fini de se torcher, les Indépendances une fois acquises, Fama fut oublié et jeté aux mouches.`,
        source: 'Ahmadou Kourouma, Les Soleils des Indépendances (1968)'
      }
    ]
  },
  {
    id: 'antigone-jean-anouilh-1944',
    title: 'Antigone',
    author: 'Jean Anouilh',
    year: 1944,
    genre: 'theatre',
    biography: 'Né en 1910 à Bordeaux, dramaturge majeur classant son œuvre en pièces roses, noires, brillantes et grinçantes. Mort en 1987.',
    genesisAndContext: 'Créée le 4 février 1944 au théâtre de l\'Atelier à Paris sous l\'Occupation allemande. Réécriture moderne et désacralisée du mythe grec de Sophocle.',
    plotOrStructureSummary: 'Pièce en un acte continu sans entracte. Le Prologue présente les personnages déjà voués à leur rôle fatal. Antigone brave l\'interdiction de son oncle Créon d\'enterrer son frère Polynice. Arrêtée, elle affronte le roi dans un duel verbal d\'une intensité suprême, rejetant le compromis d\'un bonheur médiocre et choisissant la mort.',
    majorThemes: [
      { theme: 'La révolte pure de l\'adolescence face aux compromissions adultes', explanation: 'Antigone refuse la résignation, le "sale petit bonheur" et la dégradation morale.', textualEvidence: '« Je veux tout, tout de suite, et que ce soit entier, ou alors je refuse ! »' },
      { theme: 'Le pouvoir politique et la raison d\'État', explanation: 'Créon incarne l\'artisan fatigué de l\'ordre social qui assume les corvées sordides du gouvernement des hommes.', textualEvidence: '« Il faut des hommes qui disent oui à la besogne... Pour dire oui, il faut retrousser ses manches et prendre le gouvernail ».' },
      { theme: 'L\'engrenage inexorable de la tragédie', explanation: 'Dans la tragédie, tout est joué d\'avance, le ressort est bandé, la machine fonctionne sans espoir.', textualEvidence: 'Monologue du Chœur : « C\'est propre, la tragédie. C\'est reposant, parce qu\'on sait qu\'il n\'y a plus d\'espoir ».' }
    ],
    charactersStudy: [
      { name: 'Antigone', status: 'Princesse rebelle', psychologicalPortrait: 'Petite, noiraude, intransigeante, passionnée d\'absolu et de pureté morale.' },
      { name: 'Créon', status: 'Roi de Thèbes, oncle d\'Antigone', psychologicalPortrait: 'Homme mûr, pragmatique, las mais lucide serviteur de l\'ordre public face à l\'anarchie.' },
      { name: 'Ismène', status: 'Sœur aînée d\'Antigone', psychologicalPortrait: 'Belle, sensible, désireuse de vivre et effrayée par le scandale et le châtiment.' },
      { name: 'Hémon', status: 'Fiancé d\'Antigone, fils de Créon', psychologicalPortrait: 'Amoureux sincère préférant s\'immoler sur la tombe de sa promise plutôt que d\'accepter l\'ordre de son père.' }
    ],
    styleAndPhilosophy: 'Désacralisation moderne du mythe, anachronismes délibérés (cartes à jouer, cigarettes, gardes buvant du vin rouge), dialogue dépouillé et percutant.',
    selectedExcerpts: [
      {
        title: 'Le monologue du Prologue',
        text: `Voilà. Ces personnages vont vous jouer l'histoire d'Antigone. Antigone, c'est la petite maigre qui est assise là-bas, et qui ne dit rien. Elle regarde droit devant elle. Elle pense. Elle pense qu'elle va être Antigone tout à l'heure, qu'elle va surgir soudain de la maigre jeune fille noiraude et renfermée que personne ne prenait au sérieux... et se dresser seule en face du monde, seule en face de Créon, son oncle, qui est le roi. Elle pense qu'elle va mourir...`,
        source: 'Jean Anouilh, Antigone (1944)'
      }
    ]
  }
];

export const AIDARA_WADE_DISSERTATION_METHODOLOGY = {
  stages: [
    {
      stage: 'I. Analyse et Délimitation du Sujet',
      guidelines: [
        'Distinguer nettement l\'opinion (la thèse ou pensée soumise à examen), la consigne (ce qu\'il faut faire) et les conseils délimitatifs.',
        'Cerner le domaine précis (art, roman, poésie, théâtre, engagement) sans déborder vers des notions périphériques non demandées.',
        'Détecter la formulation : Sujet critique/dialectique (Thèse / Antithèse / Dépassement) vs Sujet synthétique/explicatif (Explication ordonnée par domaines d\'intérêt) vs Sujet comparatif (Rapprochements et distinctions formelles et thématiques).'
      ]
    },
    {
      stage: 'II. Élaboration de la Problématique et du Plan',
      guidelines: [
        'La problématique est une question philosophique ou littéraire centrale posant la difficulté fondamentale.',
        'Bannir les questions fermées basées sur une fausse alternative "A ou B".',
        'Chaque axe de développement doit être subdivisé en 2 ou 3 sous-parties composées selon la règle d\'or : Idée directrice explicite -> Argumentation rationnelle -> Référence textuelle exacte -> Analyse du procédé ou de la portée.'
      ]
    },
    {
      stage: 'III. Rédaction Académique Intégrale',
      guidelines: [
        'Introduction en un seul paragraphe sans coupure : Amorce/Généralité -> Insertion fidèle du sujet ou reformulation -> Problématique -> Annonce claire des axes.',
        'Développement équilibré avec transitions récapitulatives et annonciatrices entre chaque axe.',
        'Conclusion en trois temps : Bilan synthétique des acquis de la réflexion -> Prise de position personnelle argumentée et universelle -> Élargissement vers une autre œuvre ou problématique esthétique.'
      ]
    }
  ]
};
