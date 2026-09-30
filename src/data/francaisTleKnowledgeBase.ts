export interface LiteraryMovement {
  name: string;
  period: string;
  principles: string[];
  keyAuthors: string[];
  keyWorks: string[];
}

export interface LiteraryGenreStudy {
  genre: "Poésie" | "Roman" | "Théâtre";
  definitions: string;
  characteristics: string[];
  functions: {
    functionName: string;
    description: string;
    argumentsAndExamples: {
      argument: string;
      author: string;
      work: string;
      explanation: string;
      example?: string;
    }[];
  }[];
}

export const francaisTleKnowledgeBase = {
  name: "Référentiel Officiel de Français — Terminales A, C, D (BAC Côte d'Ivoire)",
  version: "2026.1",
  level: "Terminale A, C, D",
  country: "Côte d'Ivoire (MENA / DPFC)",
  methodologies: {
    dissertationLitteraire: {
      definition: "Analyse sur un sujet de réflexion littéraire ou générale mobilisant des œuvres, citations et arguments rigoureux. C'est une réponse ordonnée à une question d'ordre littéraire ou général, un travail d'organisation et de mobilisation de connaissances solides.",
      reglesCardinales: {
        regle1_pasDeConsigneDansIntro: "DANS L'INTRODUCTION : ON NE MET JAMAIS LA CONSIGNE ! L'élève isole la citation ou la pensée, mais supprime formellement la consigne d'action (ex: 'Expliquez et discutez', 'Commentez').",
        regle2_pasDeOuDansProbleme: "DANS LE PROBLÈME (PROBLÉMATISATION) : IL N'Y A JAMAIS LE MOT « OU » DEDANS ! Formuler une interrogation ouverte, profonde et unifiée (ex: 'Dans quelle mesure...', 'En quoi...').",
        regle3_paragrapheQuintuple: "CHAQUE PARAGRAPHE = Idée directrice + Explication conceptuelle + Exemple d'œuvre + Citation textuelle exacte + Analyse critique.",
        regle4_conclusionTripartite: "CONCLUSION EN 3 TEMPS = Bilan synthétique + Prise de position personnelle argumentée + Ouverture prospective."
      },
      preliminaryWork: [
        "1. Analyser le sujet : cerner les caractéristiques, les mots-clés, les éléments essentiels et la consigne.",
        "2. Rechercher les idées : mentionner au brouillon toutes les idées capables d'aider dans l'argumentation, les citations et les œuvres illustratives.",
        "3. Localiser les orientations : éviter le hors-sujet et voir le type de plan à élaborer.",
        "4. Repérer la vocation (les fonctions de l'œuvre littéraire) parmi les 9 vocations canoniques."
      ],
      functionsOfLiterature: [
        { vocation: "Vocation Lyrique", def: "Exprime les sentiments intimes, l'épanchement du cœur et la subjectivité de l'auteur (Lamartine, Hugo, Musset)." },
        { vocation: "Vocation Émotive", def: "Suscite des émotions vives : pitié, compassion, terreur sacrée, attendrissement (Racine, Hugo, catharsis aristotélicienne)." },
        { vocation: "Vocation Morale", def: "Corrige les vices humains, promeut les vertus et assainit les mœurs selon la devise « Castigat ridendo mores » (Molière, La Fontaine)." },
        { vocation: "Vocation Didactique", def: "Instruit, transmet des savoirs, éclaire l'entendement et combat l'obscurantisme (Voltaire, Diderot, Brecht)." },
        { vocation: "Vocation Ludique", def: "Procure un plaisir récréatif immédiat, amuse, divertit et libère par le rire et la fête scénique (Molière, Feydeau, Hyacinthe Kacou)." },
        { vocation: "Vocation Satirique", def: "Dénonce vigoureusement les abus politiques, les tares sociales et l'hypocrisie par l'ironie et la caricature (Dadié, Beaumarchais, Kourouma)." },
        { vocation: "Vocation Esthétique", def: "Recherche la pure beauté formelle, le culte du style, la perfection du rythme et de la langue (Gautier, Le Parnasse, Baudelaire)." },
        { vocation: "Vocation Fictive / Évasive", def: "Offre une échappatoire loin du réel, invente des univers merveilleux et fait rêver (Saint-Exupéry, Jules Verne, Camus)." },
        { vocation: "Vocation Réaliste", def: "Reflète fidèlement la réalité des rapports sociaux, peint sans fard la condition humaine (Balzac, Zola, Stendhal, Oyono)." }
      ],
      baremeCorrection: {
        OI: "Organisation des idées (6 points)",
        CS: "Compréhension du sujet (6 points)",
        LE: "Langue et expression (6 points)",
        P: "Présentation de la copie (2 points)"
      }
    },
    commentaireCompose: {
      definition: "Analyse méthodique d'un texte littéraire pour en dégager le sens profond à travers des outils d'analyse stylistique précis.",
      structure: [
        "Introduction en 3 parties : Contexte du texte (auteur, œuvre, époque), Idée générale, Annonce des 2 ou 3 centres d'intérêt.",
        "Développement : Chaque centre d'intérêt découpé en idées secondaires suivant l'ordre Idée -> Outil d'analyse (relevé + procédé) -> Effet/Interprétation -> Transition.",
        "Conclusion : Bilan des centres d'intérêt + Intérêts du texte (littéraire, didactique, philosophique, social, historique ou stylistique) + Ouverture éventuelle."
      ]
    },
    resumeEtProductionEcrite: {
      reglesResume: [
        "Suivre l'ordre des idées du texte sans commenter ni juger.",
        "Rédiger à la même personne que l'auteur (pas de 'l'auteur dit que').",
        "Respecter strictement le quota de mots imposé (marge autorisée de +/- 10%)."
      ],
      themesFrequentsProductionEcrite: [
        "L'Éducation et la scolarisation",
        "La Jeunesse, l'emploi et l'entrepreneuriat",
        "La Pauvreté et la justice sociale",
        "Les Réseaux Sociaux et les TIC",
        "L'Immigration clandestine",
        "La Paix, le civisme et la cohésion nationale",
        "La Pollution et la préservation de l'environnement",
        "La lutte contre la drogue et les MST"
      ]
    }
  },
  literaryMovements: [
    {
      name: "La Littérature Négro-Africaine (Négritude et Post-Indépendance)",
      period: "Années 1930 à nos jours",
      principles: [
        "Mouvement de la Harlem Renaissance aux USA (Langston Hughes, Claude McKay) inspirant les étudiants noirs de Paris.",
        "Fondation de la Négritude (1930s) par Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas pour réhabiliter la dignité, la culture et l'identité noire.",
        "Avant les indépendances : combat anticolonial, dénonciation de l'oppression et éloge des traditions africaines.",
        "Après les indépendances (années 1960+) : littérature du désenchantement, de la désillusion et critique des régimes autocratiques (Ahmadou Kourouma, Sembène Ousmane, Sony Labou Tansi)."
      ],
      keyAuthors: ["Aimé Césaire", "Léopold Sédar Senghor", "David Diop", "Ahmadou Kourouma", "Bernard Binlin Dadié", "Sembène Ousmane", "Sony Labou Tansi"],
      keyWorks: ["Cahier d'un retour au pays natal", "Éthiopiques / Chants d'ombre", "Coups de pilon", "Les Soleils des indépendances", "Climbié", "Les Bouts de bois de Dieu", "La Vie et demie"]
    },
    {
      name: "Le Classicisme",
      period: "Seconde moitié du XVIIe siècle (1661-1685, règne de Louis XIV)",
      principles: [
        "Imitation des Anciens et recherche de l'harmonie, de l'ordre et de la mesure.",
        "Respect de la bienséance (ne pas choquer le public) et de la vraisemblance.",
        "Règle des trois unités au théâtre : unité de temps (24h), unité de lieu (un seul lieu) et unité d'action (une seule intrigue). Formule de Boileau : 'Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin tout le théâtre rempli.'"
      ],
      keyAuthors: ["Molière", "Jean Racine", "Pierre Corneille", "Nicolas Boileau", "Jean de La Fontaine"],
      keyWorks: ["Le Misanthrope / L'Avare", "Phèdre", "Le Cid", "L'Art poétique", "Fables"]
    },
    {
      name: "Le Siècle des Lumières",
      period: "XVIIIe siècle",
      principles: [
        "Triomphe de la Raison, de l'esprit critique et de la démarche scientifique pour faire reculer l'ignorance et l'obscurantisme.",
        "Diffusion des connaissances par l'Encyclopédie de Diderot et d'Alembert.",
        "Dénonciation de l'intolérance religieuse, du fanatisme, du despotisme et de l'esclavage."
      ],
      keyAuthors: ["Voltaire", "Denis Diderot", "Jean-Jacques Rousseau", "Montesquieu"],
      keyWorks: ["Candide / Zadig / L'Ingénu", "Jacques le Fataliste", "Du contrat social", "De l'Esprit des lois"]
    },
    {
      name: "Le Romantisme",
      period: "Fin XVIIIe - première moitié du XIXe siècle",
      principles: [
        "Rupture avec les règles strictes du classicisme et culte de la sensibilité et du 'moi'.",
        "Expression du mal du siècle, mélancolie, communion avec la nature consolatrice, engagement pour la liberté.",
        "Création du drame romantique alliant le sublime et le grotesque (Victor Hugo, Préface de Cromwell)."
      ],
      keyAuthors: ["Victor Hugo", "Alphonse de Lamartine", "Alfred de Musset", "Alfred de Vigny", "Chateaubriand"],
      keyWorks: ["Les Contemplations / Hernani", "Méditations poétiques", "Les Nuits", "Poèmes antiques et modernes"]
    },
    {
      name: "Le Réalisme et le Naturalisme",
      period: "XIXe siècle (1830 à 1890)",
      principles: [
        "Réalisme : Peinture fidèle, exacte et objective de la société sans embellissement, refus de l'idéalisme romantique (Stendhal, Balzac, Flaubert, Maupassant). Formule de Stendhal : 'Le roman est un miroir que l'on promène le long d'une route.'",
        "Naturalisme : Prolongement scientifique du réalisme fondé sur la méthode expérimentale (Claude Bernard) et le déterminisme du milieu et de l'hérédité (Émile Zola, Le Roman expérimental)."
      ],
      keyAuthors: ["Honoré de Balzac", "Gustave Flaubert", "Guy de Maupassant", "Émile Zola"],
      keyWorks: ["Le Père Goriot", "Madame Bovary", "Une vie / Bel-Ami", "Germinal"]
    },
    {
      name: "Le Parnasse et le Symbolisme",
      period: "Fin XIXe siècle",
      principles: [
        "Parnasse : Culte du beau pour le beau ('L'art pour l'art' de Théophile Gautier), rejet de la subjectivité romantique et travail d'orfèvre sur la forme et la rime.",
        "Symbolisme : Suggestion de l'invisible derrière le monde sensible à travers des correspondances et la musicalité des vers (Baudelaire, Verlaine, Mallarmé, Rimbaud). Formule de Mallarmé : 'Nommer un objet, c'est supprimer les trois quarts de la jouissance du poème.'"
      ],
      keyAuthors: ["Théophile Gautier", "Charles Baudelaire", "Paul Verlaine", "Stéphane Mallarmé", "Arthur Rimbaud"],
      keyWorks: ["Émaux et Camées", "Les Fleurs du mal", "Poèmes saturniens / Romances sans paroles", "Une Saison en enfer"]
    },
    {
      name: "Le Surréalisme",
      period: "Entre-deux-guerres (1924+)",
      principles: [
        "Révolte contre la logique bourgeoise responsable de la guerre, influence de la psychanalyse freudienne.",
        "Pratique de l'écriture automatique pour libérer l'inconscient sans contrôle de la raison.",
        "Création d'images poétiques insolites et révolutionnaires."
      ],
      keyAuthors: ["André Breton", "Paul Éluard", "Louis Aragon", "Guillaume Apollinaire (précurseur)"],
      keyWorks: ["Manifeste du surréalisme", "Capitale de la douleur / Liberté", "Alcools / Calligrammes"]
    }
  ],
  corpusSynthese: [
    {
      sujetNumber: 1,
      quoteOrTopic: "Roland BARTHES : « L'univers poétique est rempli de tourments qui font des poètes des gens qui n'ont jamais souri. »",
      problematique: "La poésie est-elle exclusivement l'expression de la souffrance et du mal-être ?",
      these: "La poésie exprime la douleur, le deuil et le lyrisme tragique (Hugo, Les Contemplations ; Baudelaire, Les Fleurs du mal).",
      antithese: "La poésie est aussi célébration de la joie, de la beauté du monde, de l'amour et de l'engagement (Senghor, Chants d'ombre ; Éluard, Liberté)."
    },
    {
      sujetNumber: 2,
      quoteOrTopic: "« La littérature vous jette dans la bataille, écrire c'est une autre façon de vouloir la liberté. » (Jean-Paul Sartre)",
      problematique: "La littérature a-t-elle pour vocation première d'être une arme de combat politique et social ?",
      these: "La littérature engagée combat l'injustice, l'oppression et réveille les peuples (Césaire, Cahier d'un retour au pays natal ; Oyono, Une vie de boy ; Sembène Ousmane, Les Bouts de bois de Dieu).",
      antithese: "La littérature est également art de l'évasion, création esthétique, fiction ludique et fête du langage (Baudelaire, L'Invitation au voyage ; Saint-Exupéry, Le Petit Prince)."
    },
    {
      sujetNumber: 4,
      quoteOrTopic: "Jean VILAR : « Le théâtre n'est pas un divertissement, n'est pas l'objet de luxe, mais le besoin impérieux de tout homme et de toute femme. »",
      problematique: "Le théâtre se réduit-il au divertissement comique ou constitue-t-il une nécessité vitale de prise de conscience ?",
      these: "Le théâtre est un miroir éducatif de la condition humaine dénonçant les tares et réveillant les consciences (Césaire, La Tragédie du roi Christophe ; Dadié, Monsieur Tôgôgnini ; Sophocle, Antigone).",
      antithese: "Le théâtre est aussi distraction, jeu d'acteurs, ressort comique et fête cathartique (Molière, Les Fourberies de Scapin ; Hyacinthe Kacou, On se chamaille pour un siège)."
    },
    {
      sujetNumber: 18,
      quoteOrTopic: "STENDHAL : « Le roman est un miroir que l'on promène le long d'un chemin. »",
      problematique: "Le roman a-t-il pour seule mission de refléter fidèlement la réalité de la vie sociale ?",
      these: "Le roman réaliste et naturaliste peint la vérité crue de la société et des mœurs (Balzac, Le Père Goriot ; Zola, Germinal ; Kourouma, Les Soleils des indépendances).",
      antithese: "Le roman est avant tout fiction, invention d'univers merveilleux ou fantastiques et exploration poétique du monde (Pierre Boulle, La Planète des singes ; J.K. Rowling, Harry Potter)."
    }
  ],
  literaryGenreStudy: [
    {
      genre: "Poésie",
      definitions: "Art du langage visant à exprimer ou suggérer par le rythme, l'harmonie des sons et la puissance évocatrice des images ce que la parole ordinaire ne peut formuler. Elle transcende la simple communication pour toucher la sensibilité et l'imagination.",
      characteristics: [
        "Recherche rythmique et sonore (métrique, rimes, assonances, allitérations, vers libre).",
        "Puissance des figures d'analogie (métaphores, comparaisons, symboles, correspondances baudelairiennes).",
        "Ambivalence fondamentale entre repli intime/évasion onirique et engagement citoyen/politique."
      ],
      functions: [
        {
          functionName: "Évasive, Onirique & Voyage Imaginaire",
          description: "La poésie offre une échappatoire à la banalité, à la douleur et aux pesanteurs du monde réel en ouvrant les portes du rêve, de l'exotisme et de la beauté idéale.",
          argumentsAndExamples: [
            {
              argument: "La poésie offre un refuge contre la grisaille du quotidien et l'angoisse existentielle.",
              explanation: "Face aux souffrances et à la laideur du monde réel, le poète conçoit son art comme une invitation au voyage vers un univers féerique et harmonieux où l'âme trouve enfin l'apaisement.",
              example: "Dans Les Fleurs du mal de Charles Baudelaire (notamment « L'Invitation au voyage »), le poète invente un ailleurs idéal où « tout n'est qu'ordre et beauté, / Luxe, calme et volupté » pour apaiser le Spleen.",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal"
            },
            {
              argument: "La poésie est une quête d'évasion spirituelle et d'absolu.",
              explanation: "Par la puissance du verbe et de l'imagination visionnaire, le poète s'affranchit des limites terrestres pour explorer l'inconnu, le mystère et l'infini.",
              example: "Dans Le Bateau ivre d'Arthur Rimbaud et Brise marine de Stéphane Mallarmé (« Fuir ! là-bas fuir ! »), le poète rompt ses amarres avec le monde réel pour vivre une ivresse spirituelle infinie.",
              author: "Arthur Rimbaud / Stéphane Mallarmé",
              work: "Le Bateau ivre / Brise marine"
            },
            {
              argument: "La poésie bâtit un sanctuaire d'art pur et de beauté éternelle.",
              explanation: "L'auteur refuse d'asservir son art aux contingences matérielles, morales ou politiques pour s'abriter dans un univers de perfection formelle et d'harmonie intemporelle.",
              example: "Dans Émaux et Camées de Théophile Gautier (dans le poème « L'Art »), le poète parnassien fait de la perfection de la forme un rempart inaltérable contre les vicissitudes du temps.",
              author: "Théophile Gautier",
              work: "Émaux et Camées"
            },
            {
              argument: "La poésie transporte l'esprit dans un univers de rêve et de liberté onirique.",
              explanation: "Elle libère le langage des lois de la logique ordinaire pour ouvrir grand les portes du merveilleux, de l'inconscient et de la rêverie poétique.",
              example: "Dans Capitale de la douleur de Paul Éluard, la puissance des métaphores surréalistes affranchit l'esprit de la pesanteur du quotidien pour l'élever vers un monde réinventé.",
              author: "Paul Éluard",
              work: "Capitale de la douleur"
            },
            {
              argument: "La poésie ne peut se réduire à une évasion coupable loin des souffrances humaines.",
              explanation: "Si l'écriture poétique s'enferme dans une tour d'ivoire en ignorant la tragédie de son époque, elle devient un jeu esthétique stérile et déconnecté du destin collectif.",
              example: "Dans Cahier d'un retour au pays natal d'Aimé Césaire, le poète rejette l'évasion complaisante pour faire de son verbe « la bouche des malheurs qui n'ont point de bouche ».",
              author: "Aimé Césaire",
              work: "Cahier d'un retour au pays natal"
            }
          ]
        },
        {
          functionName: "Lyrique & Confession Intime",
          description: "Expression sincère des émotions personnelles : le deuil, l'amour passionné, la nostalgie, la communion avec la nature.",
          argumentsAndExamples: [
            {
              argument: "La poésie exprime la douleur et sublime le deuil.",
              explanation: "Le poète confie au vers sa souffrance intime pour transformer une blessure personnelle en un chant universel d'espérance et de recueillement.",
              example: "Dans Les Contemplations de Victor Hugo (notamment « Demain, dès l'aube... »), l'auteur pleure la disparition tragique de sa fille Léopoldine et console son âme brisée.",
              author: "Victor Hugo",
              work: "Les Contemplations"
            },
            {
              argument: "La poésie célèbre la nostalgie du temps qui fuit et l'amour éternel.",
              explanation: "Conscient de la précarité de l'existence humaine, le poète implore la nature d'immortaliser le souvenir des instants précieux vécus avec l'être aimé.",
              example: "Dans Méditations poétiques d'Alphonse de Lamartine (« Le Lac »), le poète conjure le temps de suspendre son vol afin de préserver la trace de ses amours.",
              author: "Alphonse de Lamartine",
              work: "Méditations poétiques"
            }
          ]
        },
        {
          functionName: "Engagée, Critique & Combat pour la Liberté",
          description: "Arme de combat et d'éveil civique au service de la justice, de la liberté, de la dénonciation des tyrannies, de la corruption et des injustices sociales.",
          argumentsAndExamples: [
            {
              argument: "La poésie dénonce les injustices et les inégalités",
              explanation: "Elle met en lumière la souffrance des populations opprimées.",
              example: "Dans Les Contemplations, Hugo dénonce la misère et l'exploitation des enfants.",
              author: "Victor Hugo",
              work: "Les Contemplations"
            },
            {
              argument: "La poésie critique la corruption et les dérives du pouvoir",
              explanation: "Elle pointe les abus, la manipulation et l'égoïsme des dirigeants. Elle expose les mécanismes de la corruption.",
              example: "Les Vers de Corrupthius de Tommy David Golé Bi Gnamien : Dans ce recueil, le poète ivoirien critique avec virulence la corruption dans les institutions et la société. À travers une langue ironique et provocatrice, il révèle l'ampleur du fléau.",
              author: "Tommy David Golé Bi Gnamien",
              work: "Les Vers de Corrupthius"
            },
            {
              argument: "La poésie s’élève contre l’oppression et la dictature",
              explanation: "Elle défend la liberté et met en garde contre la violence des régimes autoritaires.",
              example: "Dans Cahier d’un retour au pays natal, Aimé Césaire dénonce la colonisation et l'aliénation des peuples noirs.",
              author: "Aimé Césaire",
              work: "Cahier d’un retour au pays natal"
            },
            {
              argument: "La poésie célèbre la diversité et dénonce les discriminations",
              explanation: "Elle rejette le racisme et l'exclusion, et défend l'égalité.",
              example: "Dans Chants d’ombre, Léopold Sédar Senghor valorise la culture africaine et critique le mépris colonial.",
              author: "Léopold Sédar Senghor",
              work: "Chants d’ombre"
            },
            {
              argument: "La poésie défend la liberté et les droits humains",
              explanation: "Elle rappelle les valeurs de justice et de dignité.",
              example: "Dans « Liberté », Paul Éluard fait de son poème un symbole universel de résistance.",
              author: "Paul Éluard",
              work: "Poésie et Vérité 1942 (Liberté)"
            },
            {
              argument: "La poésie critique la guerre et la violence",
              explanation: "Elle dénonce la destruction et la souffrance causées par les conflits, tout en appelant à la paix.",
              example: "Dans Calligrammes de Guillaume Apollinaire, certains poèmes évoquent la Première Guerre mondiale et dénoncent la violence, transformant la poésie en acte de résistance pacifique.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            },
            {
              argument: "La poésie donne voix aux oubliés et aux marginalisés",
              explanation: "Elle rétablit la dignité de ceux que la société ignore ou opprime.",
              example: "Dans « Afrique », David Diop rend hommage à la résistance silencieuse des Africains face à la colonisation.",
              author: "David Diop",
              work: "Coups de pilon (Afrique)"
            }
          ]
        },
        {
          functionName: "Esthétique & Beauté du Verbe",
          description: "Recherche de la perfection formelle, de la musicalité, des sonorités harmonieuses, des images fortes et du travail original de la langue poétique.",
          argumentsAndExamples: [
            {
              argument: "La poésie joue sur la musicalité des mots",
              explanation: "Le poète utilise des sons, des rythmes, des rimes, des assonances et des allitérations pour créer une mélodie poétique qui touche le lecteur.",
              example: "Dans Demain, dès l’aube de Victor Hugo, le rythme régulier et les sonorités harmonieuses des vers renforcent l’émotion et produisent une musicalité qui charme le lecteur.",
              author: "Victor Hugo",
              work: "Les Contemplations (Demain, dès l’aube)"
            },
            {
              argument: "La poésie crée des images fortes et évocatrices",
              explanation: "Elle transforme des sensations ou des idées en images visuelles, sensorielles, donnant au texte une grande richesse esthétique.",
              example: "Dans Les Fleurs du mal de Baudelaire, de nombreux poèmes comme Correspondances utilisent des métaphores et des comparaisons pour peindre des images magnifiques et profondes.",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal (Correspondances)"
            },
            {
              argument: "La poésie utilise une langue travaillée et originale",
              explanation: "Le choix des mots, des figures de style et de la structure rend la poésie unique et artistique, faisant de chaque texte une œuvre d’art.",
              example: "Dans Les Calligrammes de Guillaume Apollinaire, la forme même des poèmes crée une expérience esthétique particulière : les mots forment des dessins, mêlant art visuel et poésie, ce qui rend chaque œuvre unique.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            }
          ]
        },
        {
          functionName: "Évasive & Imaginaire (Fictive)",
          description: "Transport du lecteur dans des univers imaginaires et féeriques, invention de mondes oniriques et d'êtres mythiques affranchis du réel.",
          argumentsAndExamples: [
            {
              argument: "La poésie invente des mondes imaginaires",
              explanation: "Elle transporte le lecteur dans des univers qui n’existent pas, offrant une évasion loin du réel.",
              example: "Dans L’Invitation au voyage (Les Fleurs du mal), Baudelaire décrit un pays rêvé « où tout n’est qu’ordre et beauté ».",
              author: "Charles Baudelaire",
              work: "Les Fleurs du mal (L’Invitation au voyage)"
            },
            {
              argument: "La poésie invente des personnages imaginaires",
              explanation: "Elle donne vie à des êtres qui n’existent pas dans la réalité, mais qui permettent au poète d’exprimer ses rêves, ses émotions ou sa vision du monde.",
              example: "Dans « Mélusine », Apollinaire évoque une femme mythique mi-femme, mi-fée.",
              author: "Guillaume Apollinaire",
              work: "Alcools (Mélusine)"
            }
          ]
        },
        {
          functionName: "Ludique & Divertissement",
          description: "Jeux de mots, humour, ironie, inventivité formelle et plaisir distrayant pour égayer l'esprit et détendre le lecteur.",
          argumentsAndExamples: [
            {
              argument: "La poésie cherche à faire rire",
              explanation: "Le poète utilise l’humour, les jeux de mots ou des situations amusantes pour provoquer le sourire ou le rire du lecteur, rendant la lecture agréable et plaisante.",
              example: "Dans Les Fables de Jean de La Fontaine, des textes comme Le Corbeau et le Renard utilisent l’ironie et des situations drôles pour amuser.",
              author: "Jean de La Fontaine",
              work: "Fables (Le Corbeau et le Renard)"
            },
            {
              argument: "La poésie divertit et détend",
              explanation: "Même sans être comique, la poésie peut plaire et captiver par son rythme, ses sons ou ses images originales. Elle permet de se changer les idées et de passer un moment agréable.",
              example: "Les Calligrammes de Guillaume Apollinaire divertissent le lecteur grâce à leur forme visuelle inventive, où les mots dessinent des objets comme un oiseau ou une tour.",
              author: "Guillaume Apollinaire",
              work: "Calligrammes"
            }
          ]
        },
        {
          functionName: "Didactique & Morale",
          description: "Transmission de leçons de vie, réflexion sur les comportements humains, maximes éthiques et enrichissement linguistique et métaphorique.",
          argumentsAndExamples: [
            {
              argument: "La poésie transmet des leçons de vie ou une morale",
              explanation: "Le poète utilise ses vers pour instruire le lecteur sur des comportements humains, des valeurs morales ou des réflexions sur la vie.",
              example: "Dans Les Fables de Jean de La Fontaine, chaque poème raconte une histoire courte et se termine par une morale claire. Par exemple, Le Lièvre et la Tortue transmet la leçon selon laquelle la persévérance et la patience sont plus efficaces que la précipitation.",
              author: "Jean de La Fontaine",
              work: "Fables (Le Lièvre et la Tortue)"
            },
            {
              argument: "La poésie enrichit la langue et le vocabulaire",
              explanation: "Elle permet au lecteur d’acquérir des mots, des expressions et des références littéraires.",
              example: "Dans La Ronde des jours, Bernard Binlin Dadié écrit : « Les lignes de nos mains ne sont point des parallèles, des chemins de montagnes, des gerçures sur troncs d’arbres, des traces de luttes homériques ». Cette métaphore originale offre au lecteur des images poétiques inédites et enrichit sa perception du langage.",
              author: "Bernard Binlin Dadié",
              work: "La Ronde des jours"
            }
          ]
        }
      ]
    },
    {
      genre: "Roman",
      definitions: "Récit en prose qui met en scène des personnages et des événements pour raconter, faire réfléchir, émouvoir, divertir ou représenter une société.",
      characteristics: [
        "Présence de personnages, d'une intrigue, de lieux et d'une durée narrative.",
        "Possibilité d'explorer les sentiments, les relations sociales et l'évolution des personnages.",
        "Grande diversité de formes : roman réaliste, historique, d'apprentissage, d'aventures, fantastique, épistolaire, engagé, etc."
      ],
      functions: [
        {
          functionName: "Fonction lyrique",
          description: "Le roman peut porter des émotions, des souvenirs et des sentiments liés à l'expérience personnelle, familiale ou culturelle.",
          argumentsAndExamples: [
            {
              argument: "Le roman permet d'exprimer les émotions et les souvenirs.",
              explanation: "Un récit peut revenir sur une enfance, une perte, une séparation ou une expérience marquante. Le romancier transforme alors des souvenirs et des émotions en une histoire accessible au lecteur.",
              example: "Dans L'Enfant noir, Camara Laye revient sur son enfance en Guinée, les figures familiales et le monde de son enfance avec une tonalité nostalgique.",
              author: "Camara Laye",
              work: "L'Enfant noir",
              phraseToRemember: "Le roman peut transformer les souvenirs en récit et en émotion.",
              variants: [
                "Le récit romanesque permet de faire revivre des souvenirs chargés d'émotion.",
                "À travers la fiction, le romancier peut partager une part de son expérience et de sa sensibilité.",
                "Le roman donne une forme narrative aux souvenirs et aux émotions."
              ]
            },
            {
              argument: "Le roman peut exprimer l'attachement à une famille, une culture ou une terre natale.",
              explanation: "Le romancier peut mettre en valeur les personnes, les traditions et les lieux auxquels il est attaché. Le récit devient ainsi un moyen de célébrer une identité et une mémoire.",
              example: "Dans L'Enfant noir, Camara Laye évoque avec tendresse sa famille, son village et plusieurs aspects de la vie traditionnelle guinéenne.",
              author: "Camara Laye",
              work: "L'Enfant noir",
              phraseToRemember: "Le roman peut célébrer l'attachement à une culture et à une terre natale.",
              variants: [
                "Le récit romanesque peut rendre hommage à une culture et à ses traditions.",
                "Le romancier peut faire du roman un espace de mémoire et d'identité.",
                "À travers ses personnages et ses lieux, le roman peut célébrer les racines d'un peuple."
              ]
            },
            {
              argument: "Le roman peut exprimer l'amour, la tendresse ou les conflits affectifs.",
              explanation: "Les relations entre les personnages permettent de représenter l'amour, l'amitié, la jalousie, la séparation ou la souffrance affective. Le lecteur entre ainsi dans l'intimité des personnages.",
              example: "Dans Une si longue lettre, Mariama Bâ fait entendre la parole intime de Ramatoulaye, qui revient sur son mariage, ses blessures et ses relations familiales.",
              author: "Mariama Bâ",
              work: "Une si longue lettre",
              phraseToRemember: "Le roman explore les liens affectifs et les blessures du cœur.",
              variants: [
                "Le récit romanesque permet de montrer la complexité des relations humaines.",
                "Les personnages donnent au lecteur accès aux joies et aux blessures de la vie affective.",
                "Le roman peut raconter l'amour tout en révélant ses difficultés."
              ]
            }
          ]
        },
        {
          functionName: "Fonction esthétique",
          description: "Le roman recherche aussi un effet artistique par le choix des mots, les descriptions, les images, le rythme du récit et la construction narrative.",
          argumentsAndExamples: [
            {
              argument: "Le roman donne une valeur artistique au langage.",
              explanation: "Le romancier choisit ses mots et construit ses phrases pour produire des images, des émotions et un style personnel. Le plaisir de lecture vient alors aussi de la manière de raconter.",
              example: "Dans Une si longue lettre, Mariama Bâ associe la forme épistolaire à une écriture personnelle qui accompagne la réflexion et les émotions de Ramatoulaye.",
              author: "Mariama Bâ",
              work: "Une si longue lettre",
              phraseToRemember: "Le romancier fait aussi du récit un travail de style.",
              variants: [
                "La beauté d'un roman dépend aussi de la manière dont l'histoire est racontée.",
                "Le choix des mots et des phrases participe à la valeur artistique du récit.",
                "Un roman peut séduire autant par son écriture que par son histoire."
              ]
            },
            {
              argument: "Les descriptions permettent au roman de créer des images et une atmosphère.",
              explanation: "La description des lieux, des personnages ou des paysages aide le lecteur à imaginer la scène. Elle peut aussi créer une atmosphère de joie, de peur, de nostalgie ou de mystère.",
              example: "Dans L'Enfant noir, les descriptions de l'enfance et du milieu guinéen donnent au lecteur une représentation sensible du monde dans lequel grandit le narrateur.",
              author: "Camara Laye",
              work: "L'Enfant noir",
              phraseToRemember: "La description transforme les lieux et les scènes en images pour le lecteur.",
              variants: [
                "Les descriptions donnent au récit une dimension visuelle et sensible.",
                "En décrivant les lieux, le romancier aide le lecteur à voir et à ressentir la scène.",
                "La description participe à la beauté et à l'atmosphère du roman."
              ]
            },
            {
              argument: "La construction du récit peut produire un véritable plaisir artistique.",
              explanation: "Le romancier peut organiser les points de vue, les retours en arrière, les lettres ou les dialogues pour donner une forme originale à son histoire. La structure devient alors une partie de l'art du roman.",
              example: "Dans Une si longue lettre, la forme de la lettre permet à Ramatoulaye de raconter son histoire tout en réfléchissant sur sa vie et sur la société.",
              author: "Mariama Bâ",
              work: "Une si longue lettre",
              phraseToRemember: "La forme du récit participe elle aussi à l'art du roman.",
              variants: [
                "Le romancier peut faire de la construction du récit un élément de création.",
                "La manière d'organiser l'histoire contribue au plaisir de lecture.",
                "Dans le roman, la forme et le contenu se complètent pour produire un effet artistique."
              ]
            }
          ]
        },
        {
          functionName: "Fonction évasive / fictive",
          description: "Le roman permet d'imaginer d'autres mondes, de suivre des aventures et de quitter momentanément le quotidien.",
          argumentsAndExamples: [
            {
              argument: "Le roman crée des univers imaginaires.",
              explanation: "Le romancier peut inventer des sociétés, des lieux ou des situations qui n'existent pas dans le monde réel. Cette invention stimule l'imagination du lecteur.",
              example: "La Planète des singes de Pierre Boulle est un roman de science-fiction qui imagine une planète où les singes ont pris une place dominante dans la société.",
              author: "Pierre Boulle",
              work: "La Planète des singes",
              phraseToRemember: "Le roman peut inventer un monde différent pour faire travailler l'imagination.",
              variants: [
                "La fiction romanesque ouvre au lecteur des mondes qui n'existent pas dans son quotidien.",
                "Le romancier élargit le réel en inventant d'autres univers.",
                "L'imagination permet au roman de dépasser les limites du monde ordinaire."
              ]
            },
            {
              argument: "Le roman fait voyager le lecteur à travers les aventures de ses personnages.",
              explanation: "Les déplacements, les découvertes et les péripéties donnent au lecteur l'impression de vivre une expérience nouvelle. Le roman peut ainsi offrir une évasion loin des habitudes quotidiennes.",
              example: "Dans Le Petit Prince, le voyage du personnage principal de planète en planète permet de découvrir des univers et des personnages symboliques.",
              author: "Antoine de Saint-Exupéry",
              work: "Le Petit Prince",
              phraseToRemember: "Le roman fait voyager le lecteur par l'imagination et l'aventure.",
              variants: [
                "Grâce aux péripéties, le lecteur peut voyager sans quitter sa place.",
                "Le récit d'aventures permet de sortir momentanément du quotidien.",
                "Les voyages des personnages deviennent aussi des voyages pour l'imagination du lecteur."
              ]
            },
            {
              argument: "Le roman peut proposer du merveilleux, du fantastique ou de la science-fiction.",
              explanation: "Ces formes romanesques introduisent des éléments qui dépassent la réalité ordinaire. Elles permettent d'explorer la peur, le rêve, l'inconnu ou des futurs possibles.",
              example: "La Planète des singes appartient à la science-fiction et utilise une situation imaginaire pour déplacer le regard du lecteur sur la société humaine.",
              author: "Pierre Boulle",
              work: "La Planète des singes",
              phraseToRemember: "La fiction permet au roman d'explorer ce qui dépasse la réalité ordinaire.",
              variants: [
                "Le roman peut utiliser l'imaginaire pour explorer des possibilités nouvelles.",
                "Le merveilleux et la science-fiction élargissent les horizons du récit.",
                "En inventant l'impossible, le roman nourrit le rêve et la réflexion."
              ]
            }
          ]
        },
        {
          functionName: "Fonction ludique",
          description: "Le roman procure du plaisir par l'aventure, l'humour, le suspense, les rebondissements et le plaisir de raconter une histoire.",
          argumentsAndExamples: [
            {
              argument: "Le roman divertit grâce aux aventures et aux péripéties.",
              explanation: "Les obstacles, les voyages et les rebondissements donnent envie de connaître la suite. Le lecteur suit les personnages avec plaisir et curiosité.",
              example: "Les Frasques d'Ebinto raconte le parcours d'un jeune lycéen confronté à une grossesse imprévue et aux conséquences de ses choix, ce qui construit une intrigue riche en événements.",
              author: "Amadou Koné",
              work: "Les Frasques d'Ebinto",
              phraseToRemember: "Les aventures et les péripéties rendent le roman captivant.",
              variants: [
                "Le roman divertit en faisant suivre au lecteur une histoire pleine de rebondissements.",
                "Les péripéties donnent au récit son pouvoir de captiver.",
                "Une intrigue bien construite peut procurer un véritable plaisir de lecture."
              ]
            },
            {
              argument: "Le suspense pousse le lecteur à vouloir connaître la suite.",
              explanation: "Le romancier peut retarder une révélation, multiplier les obstacles ou terminer une étape sur une situation incertaine. Le lecteur reste alors attentif pour découvrir ce qui va arriver.",
              example: "Dans les romans d'aventures, les épreuves successives et les retournements de situation entretiennent cette attente ; Le Comte de Monte-Cristo d'Alexandre Dumas en fournit un exemple classique.",
              author: "Alexandre Dumas",
              work: "Le Comte de Monte-Cristo",
              phraseToRemember: "Le suspense entretient la curiosité du lecteur.",
              variants: [
                "Le suspense donne au lecteur l'envie de poursuivre sa lecture.",
                "En retardant certaines réponses, le romancier entretient l'attente.",
                "Le mystère et les rebondissements renforcent le plaisir de lire."
              ]
            },
            {
              argument: "L'humour et l'ironie peuvent rendre le récit plus plaisant.",
              explanation: "Le romancier peut faire sourire par des situations, des dialogues ou un regard ironique sur les personnages et la société. Le divertissement n'empêche pas pour autant le roman de faire réfléchir.",
              example: "Dans Le Mandat, Ousmane Sembène utilise des situations et des personnages qui peuvent provoquer le rire tout en mettant en lumière les difficultés sociales et administratives.",
              author: "Ousmane Sembène",
              work: "Le Mandat",
              phraseToRemember: "L'humour peut divertir tout en permettant une critique de la société.",
              variants: [
                "Le rire peut accompagner la critique sociale dans le roman.",
                "L'ironie rend parfois la dénonciation plus vivante et plus accessible.",
                "Un roman peut amuser le lecteur tout en lui faisant observer les défauts de la société."
              ]
            }
          ]
        },
        {
          functionName: "Fonction didactique",
          description: "Le roman peut transmettre des connaissances, faire découvrir une société, interroger les comportements et développer l'esprit critique.",
          argumentsAndExamples: [
            {
              argument: "Le roman permet de découvrir une société et ses modes de vie.",
              explanation: "À travers les familles, les métiers, les relations et les coutumes, le lecteur découvre une manière de vivre. Le récit rend ces réalités concrètes et faciles à comprendre.",
              example: "Dans L'Enfant noir, Camara Laye fait découvrir au lecteur des aspects de la vie familiale, sociale et culturelle de son enfance en Guinée.",
              author: "Camara Laye",
              work: "L'Enfant noir",
              phraseToRemember: "Le roman peut faire découvrir une société à travers la vie de ses personnages.",
              variants: [
                "Le récit romanesque permet d'entrer dans la vie quotidienne d'une société.",
                "En racontant des destinées individuelles, le roman fait connaître un milieu social.",
                "Le lecteur apprend sur une société en observant les personnages et leurs habitudes."
              ]
            },
            {
              argument: "Le roman transmet une mémoire historique et sociale.",
              explanation: "Une fiction peut faire revivre une période, ses changements et les difficultés vécues par les populations. Elle permet ainsi de garder une trace sensible du passé.",
              example: "Dans Les Bouts de bois de Dieu, Ousmane Sembène met en scène la grande grève des cheminots du Dakar-Niger de 1947-1948 et fait ressortir les dimensions humaines et collectives de cette lutte.",
              author: "Ousmane Sembène",
              work: "Les Bouts de bois de Dieu",
              phraseToRemember: "Le roman peut conserver une mémoire vivante de l'histoire.",
              variants: [
                "La fiction romanesque peut transmettre le souvenir d'une période historique.",
                "Le roman transforme la mémoire historique en expérience humaine racontée.",
                "En racontant le passé, le romancier aide le lecteur à en comprendre les enjeux humains."
              ]
            },
            {
              argument: "Le roman peut faire réfléchir sur les choix et les valeurs humaines.",
              explanation: "Les personnages sont confrontés à des problèmes, des choix et des conséquences. Le lecteur peut comparer leurs décisions aux siennes et développer son jugement.",
              example: "Dans L'Aventure ambiguë, Cheikh Hamidou Kane met en scène le parcours de Samba Diallo et les tensions entre plusieurs visions de l'éducation, de la foi et de la modernité.",
              author: "Cheikh Hamidou Kane",
              work: "L'Aventure ambiguë",
              phraseToRemember: "Le roman peut instruire en faisant réfléchir sur les choix humains.",
              variants: [
                "Les parcours des personnages peuvent aider le lecteur à réfléchir sur ses propres valeurs.",
                "Le roman enseigne parfois moins par des leçons directes que par les conséquences des choix des personnages.",
                "Une histoire peut devenir un moyen de développer l'esprit critique."
              ]
            }
          ]
        },
        {
          functionName: "Fonction engagée / satirique",
          description: "Le roman peut dénoncer des injustices, des abus de pouvoir, des discriminations ou des pratiques sociales nuisibles, parfois en utilisant l'ironie et la satire.",
          argumentsAndExamples: [
            {
              argument: "Le roman dénonce les injustices et les humiliations liées à la domination coloniale.",
              explanation: "Le récit peut montrer concrètement les abus, les inégalités et les humiliations vécues par les colonisés. Le lecteur prend ainsi conscience des mécanismes de domination.",
              example: "Dans Une vie de boy, Ferdinand Oyono raconte à travers le journal de Toundi les humiliations et les abus auxquels le jeune domestique africain est confronté dans l'administration coloniale.",
              author: "Ferdinand Oyono",
              work: "Une vie de boy",
              phraseToRemember: "Le roman peut dénoncer la domination en montrant ses effets sur les hommes.",
              variants: [
                "En racontant les humiliations vécues par ses personnages, le roman critique la domination coloniale.",
                "La fiction permet de rendre visibles les injustices d'un système de domination.",
                "Le récit peut devenir un moyen de dénoncer les abus du pouvoir colonial."
              ]
            },
            {
              argument: "Le roman critique les abus administratifs et la corruption.",
              explanation: "La satire montre les lenteurs, les détournements et les comportements abusifs qui compliquent la vie des citoyens. Le rire ou l'ironie peuvent renforcer cette critique.",
              example: "Dans Le Mandat, Ousmane Sembène met en scène les difficultés d'Ibrahima Dieng face à une administration complexe et à des pratiques intéressées, ce qui nourrit une critique sociale et administrative.",
              author: "Ousmane Sembène",
              work: "Le Mandat",
              phraseToRemember: "La satire romanesque peut dénoncer les abus de l'administration et la corruption.",
              variants: [
                "Le roman peut utiliser l'ironie pour exposer les défauts de l'administration.",
                "En montrant les abus administratifs, le récit invite à réfléchir au fonctionnement de la société.",
                "La satire rend visibles les pratiques qui pénalisent les citoyens."
              ]
            },
            {
              argument: "Le roman dénonce certaines pratiques sociales qui portent atteinte aux droits des femmes.",
              explanation: "Le romancier peut montrer les conséquences de pratiques imposées aux femmes et donner une place à leur parole. Le récit invite alors à remettre en question ces injustices.",
              example: "Dans Rebelle, Fatou Keïta aborde notamment l'excision et le mariage forcé à travers le parcours de Malimouna, qui refuse de se soumettre à ces violences.",
              author: "Fatou Keïta",
              work: "Rebelle",
              phraseToRemember: "Le roman peut défendre la dignité et la liberté des femmes.",
              variants: [
                "La fiction peut donner une voix aux femmes confrontées à des pratiques injustes.",
                "En montrant leurs conséquences, le roman peut remettre en question certaines pratiques sociales.",
                "Le récit peut devenir un moyen de défendre l'autonomie et la dignité des femmes."
              ]
            },
            {
              argument: "Le roman dénonce les conséquences des guerres et de la violence.",
              explanation: "En faisant vivre au lecteur les épreuves de personnages pris dans un conflit, le romancier montre les conséquences humaines de la guerre. La fiction rend alors la violence concrète et proche.",
              example: "Dans Allah n'est pas obligé, Ahmadou Kourouma raconte le parcours de Birahima dans le contexte des guerres civiles d'Afrique de l'Ouest et montre la violence qui frappe les enfants et les populations.",
              author: "Ahmadou Kourouma",
              work: "Allah n'est pas obligé",
              phraseToRemember: "Le roman peut montrer les conséquences humaines de la guerre et de la violence.",
              variants: [
                "La fiction rend visibles les souffrances provoquées par les conflits.",
                "Le roman peut dénoncer la guerre en montrant ce qu'elle fait subir aux populations.",
                "En suivant des personnages pris dans la violence, le lecteur mesure ses conséquences."
              ]
            },
            {
              argument: "Le roman peut dénoncer les dérives politiques après les indépendances.",
              explanation: "Certains romans africains montrent la déception, les abus de pouvoir et les tensions qui apparaissent après les indépendances. Ils interrogent ainsi les difficultés de la construction politique et sociale.",
              example: "Dans Les Soleils des indépendances, Ahmadou Kourouma met en scène Fama dans un contexte d'indépendance et de parti unique, en montrant le conflit entre l'ancien ordre et les nouvelles réalités politiques.",
              author: "Ahmadou Kourouma",
              work: "Les Soleils des indépendances",
              phraseToRemember: "Le roman peut critiquer les dérives du pouvoir après les indépendances.",
              variants: [
                "Le récit peut mettre en lumière les désillusions politiques de l'après-indépendance.",
                "La fiction permet de montrer les tensions entre les idéaux d'indépendance et certaines réalités politiques.",
                "Le roman peut devenir une critique des dérives du pouvoir politique."
              ]
            },
            {
              argument: "Le roman défend la solidarité et la dignité des travailleurs.",
              explanation: "Le récit peut montrer que l'action collective permet à des travailleurs de défendre leurs droits. Il donne ainsi une dimension humaine et sociale à la lutte collective.",
              example: "Dans Les Bouts de bois de Dieu, Ousmane Sembène raconte la grève des cheminots du Dakar-Niger et met en valeur la solidarité des travailleurs et la participation des femmes à la lutte.",
              author: "Ousmane Sembène",
              work: "Les Bouts de bois de Dieu",
              phraseToRemember: "Le roman peut défendre la solidarité et la dignité des travailleurs.",
              variants: [
                "La fiction peut montrer la force d'une lutte collective pour la dignité.",
                "Le roman peut donner une voix aux travailleurs qui défendent leurs droits.",
                "La solidarité devient dans certains romans une force de résistance à l'exploitation."
              ]
            }
          ]
        },
        {
          functionName: "Fonction réaliste",
          description: "Le roman peut représenter des lieux, des comportements, des relations sociales et des problèmes reconnaissables afin de donner au lecteur une image crédible d'une société.",
          argumentsAndExamples: [
            {
              argument: "Le roman représente des lieux et des cadres de vie reconnaissables.",
              explanation: "L'auteur peut situer précisément l'action dans des villes, des villages, des quartiers ou des milieux sociaux. Ces repères donnent au récit une impression de réalité.",
              example: "Les Frasques d'Ebinto est ancré dans des lieux de Côte d'Ivoire et suit le parcours d'un jeune lycéen confronté à une grossesse imprévue et à ses conséquences sociales.",
              author: "Amadou Koné",
              work: "Les Frasques d'Ebinto",
              phraseToRemember: "Des lieux reconnaissables peuvent donner au roman un fort ancrage réaliste.",
              variants: [
                "Le choix de lieux précis rapproche le récit du monde réel.",
                "Les cadres géographiques et sociaux rendent l'univers romanesque crédible.",
                "Le roman peut représenter des espaces familiers pour donner une impression de réalité."
              ]
            },
            {
              argument: "Le roman représente des relations sociales et des problèmes de la vie quotidienne.",
              explanation: "Les rapports familiaux, le mariage, l'école, le travail, la pauvreté ou les conflits sociaux peuvent devenir la matière du récit. Le lecteur reconnaît alors des situations proches de la vie réelle.",
              example: "Dans Une si longue lettre, Mariama Bâ représente la vie familiale, le mariage, la polygamie et la condition des femmes dans la société sénégalaise de son époque.",
              author: "Mariama Bâ",
              work: "Une si longue lettre",
              phraseToRemember: "Le roman devient réaliste lorsqu'il représente des relations et des problèmes sociaux reconnaissables.",
              variants: [
                "Le récit peut refléter les difficultés et les relations de la vie quotidienne.",
                "En représentant la famille et la société, le roman donne à voir des réalités concrètes.",
                "Les problèmes sociaux donnent au récit un ancrage dans le réel."
              ]
            },
            {
              argument: "Le roman peut représenter les transformations d'une société.",
              explanation: "Un récit peut montrer les changements politiques, économiques et culturels qui modifient la vie des personnages. Il devient alors un témoignage littéraire sur une époque.",
              example: "Dans Les Soleils des indépendances, Ahmadou Kourouma représente une société africaine confrontée aux bouleversements liés aux indépendances et au nouveau contexte politique du parti unique.",
              author: "Ahmadou Kourouma",
              work: "Les Soleils des indépendances",
              phraseToRemember: "Le roman peut témoigner des transformations politiques et sociales d'une époque.",
              variants: [
                "Le récit romanesque peut montrer une société en pleine transformation.",
                "Les changements historiques peuvent être observés à travers la vie des personnages.",
                "Le roman peut conserver une image des mutations d'une société."
              ]
            }
          ]
        }
      ]
    },
    {
      genre: "Théâtre",
      definitions: "Art du spectacle où des acteurs incarnent des personnages devant un public dans une double énonciation constante, alliant texte dramatique et représentation scénique vivante.",
      characteristics: [
        "Double énonciation (les personnages se parlent entre eux tout en s'adressant aux spectateurs).",
        "Conflit dramatique direct sans narrateur intermédiaire (tension, péripéties, dénouement).",
        "Vocation d'impact immédiat sur la foule (rire, terreur, pitié, éveil civique)."
      ],
      functions: [
        {
          functionName: "Cathartique & Tragique",
          description: "Purification des passions (terreur et pitié) en confrontant l'homme à son destin et à sa fragilité.",
          argumentsAndExamples: [
            {
              argument: "Le théâtre purifie les passions en confrontant le spectateur à la fatalité du destin.",
              explanation: "En suscitant la terreur et la pitié, la tragédie libère l'âme des excès passionnels et rappelle la primauté inaliénable de la conscience morale.",
              example: "Dans Antigone de Jean Anouilh et de Sophocle, le sacrifice héroïque de la jeune femme face aux édits de Créon purifie le spectateur de ses peurs.",
              author: "Sophocle / Jean Anouilh",
              work: "Antigone"
            }
          ]
        },
        {
          functionName: "Satirique, Didactique & Morale",
          description: "Corriger les vices des hommes en les faisant rire (« Castigat ridendo mores »).",
          argumentsAndExamples: [
            {
              argument: "Le théâtre corrige les mœurs et dénonce l'hypocrisie par le rire.",
              explanation: "En ridiculisant les imposteurs, les avares et les tartuffes sur scène, la comédie classique désarme le vice et éduque le discernement des spectateurs.",
              example: "Dans Tartuffe et L'Avare de Molière, la mise en scène des travers humains suscite un rire salvateur qui assainit les mœurs.",
              author: "Molière",
              work: "Tartuffe / L'Avare"
            },
            {
              argument: "Le théâtre dénonce l'arrogance des profiteurs et des dirigeants opportunistes.",
              explanation: "La scène devient le miroir satirique des dérives sociopolitiques pour éveiller la vigilance critique du peuple.",
              example: "Dans Monsieur Tôgôgnini de Bernard Binlin Dadié, la farce féroce dénonce l'avidité des nouveaux riches et des marchands d'illusions dans les sociétés post-coloniales.",
              author: "Bernard Binlin Dadié",
              work: "Monsieur Tôgôgnini"
            }
          ]
        },
        {
          functionName: "Politique & Éveil Historique",
          description: "Tribune vivante pour ausculter le pouvoir, la tragédie de l'indépendance et la responsabilité des dirigeants.",
          argumentsAndExamples: [
            {
              argument: "Le théâtre est une tribune politique pour éclairer les peuples sur les pièges du pouvoir.",
              explanation: "La tragédie historique met en scène les dilemmes du dirigeant afin de faire réfléchir les nations sur les exigences de la liberté et de l'unité.",
              example: "Dans La Tragédie du roi Christophe d'Aimé Césaire, l'auteur met en scène le premier roi noir d'Haïti pour faire réfléchir sur les écueils de l'autoritarisme post-indépendance.",
              author: "Aimé Césaire",
              work: "La Tragédie du roi Christophe"
            }
          ]
        }
      ]
    }
  ]
};
