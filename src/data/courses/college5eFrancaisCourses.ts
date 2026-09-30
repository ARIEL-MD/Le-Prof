import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_FRANCAIS_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 1 - LE PORTRAIT SIMPLE
  // ========================================================
  {
    id: 'fra-5e-expression-ecrite-portrait-simple',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Expression Écrite & Méthodes de Rédaction',
    lessonTitle: 'Le portrait simple : Définition, outils lexicaux et grammaticaux, démarche descriptive statique',
    objectifs: [
      'Définir le portrait simple comme la représentation fidèle d\'une personne ou d\'un animal statique (au repos)',
      'Mobiliser les outils lexicaux : vocabulaire évaluatif (mélioratif/appréciatif ou dépréciatif), comparaisons et champs lexicaux',
      'Maîtriser les outils grammaticaux : adjectifs qualificatifs, verbes d\'état, temps de description (imparfait et présent de l\'indicatif)',
      'Organiser la rédaction en trois parties : introduction (aspect général), développement (physique puis moral), conclusion (sentiments et impressions)',
      'Appliquer une progression spatiale rigoureuse (du haut vers le bas ou du bas vers le haut, du général au particulier)'
    ],
    fullCourseContent: `1. Définition du portrait simple :
Le portrait simple est la représentation la plus fidèle possible des caractéristiques physiques ou morales d'un être humain ou d'un animal qui est statique (immobile, assis, couché ou ne réalisant pas d'actions remarquables).

2. Les outils de la langue indispensables :
- Les outils lexicaux :
  * Vocabulaire évaluatif appréciatif (mélioratif) pour valoriser : magnifique, éclatant, d'une grande distinction, teint lumineux, noble.
  * Vocabulaire évaluatif dépréciatif (péjoratif) pour dévaloriser : chétif, négligé, teint terreux, voix criarde, renfrogné.
  * Les images : comparaisons poétiques ("des yeux noirs comme le charbon", "un sourire paré de fines dents nacrées").
  * Les champs lexicaux spécialisés : anatomie, vêtements, traits de caractère.
- Les outils grammaticaux :
  * Les temps verbaux : L'imparfait de l'indicatif (temps par excellence de la description passée) et le présent de vérité descriptive.
  * Les adjectifs qualificatifs : épithètes et attributs du sujet.
  * Les verbes d'état : être, paraître, sembler, demeurer, rester, avoir l'air.

3. Structure et composition du devoir :
Un devoir de portrait simple comporte rigoureusement trois parties :
- L'Introduction :
  Elle pose le cadre de la rencontre et présente l'aspect général de la personne ou de l'animal : la silhouette globale, l'âge apparent, la taille, la corpulence et la posture statique.
- Le Développement :
  Il détaille méthodiquement les aspects physiques puis moraux :
  * Le portrait physique : On suit un ordre logique précis : soit de haut en bas (chevelure, front, regard, nez, bouche, visage, buste, mains, membres, vêtements), soit de bas en haut.
  * Le portrait moral : On met en relief les traits de tempérament, le caractère, les qualités ou défauts, les habitudes de vie et la façon de s'exprimer.
- La Conclusion :
  Elle exprime le bilan de la description : les impressions ressenties par le narrateur, les sentiments inspirés (admiration, compassion, respect, méfiance) ou le souvenir marquant laissé par le sujet.`,
    definitions: [
      {
        term: 'Portrait simple',
        definition: 'Description minutieuse d\'une personne ou d\'un animal saisi dans une attitude immobile ou de repos.'
      },
      {
        term: 'Vocabulaire mélioratif',
        definition: 'Ensemble de mots et tournures exprimant un jugement flatteur, élogieux ou favorable.'
      },
      {
        term: 'Progression descriptive',
        definition: 'Principe d\'organisation visuelle guidant le regard du lecteur selon un axe spatial ordonné.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'ordonnancement physique',
        statement: 'Ne jamais mélanger les détails anatomiques au hasard : décrire toujours du haut vers le bas ou inversement, puis passer au moral.'
      },
      {
        name: 'Dominance des temps verbaux',
        statement: 'Le portrait simple emploie principalement l\'imparfait pour camper le décor et les traits durables du sujet.'
      }
    ],
    formulas: [
      {
        name: 'Schéma tripartite du portrait',
        formula: '\\text{Introduction (Allure générale)} \\to \\text{Développement (Physique puis Moral)} \\to \\text{Conclusion (Impressions)}',
        explanation: 'Plan canonique exigé au collège en expression écrite.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Rédiger l\'introduction d\'un portrait simple',
        procedure: '1. Présenter la circonstance de la rencontre (lieu, moment). 2. Nommer ou désigner le sujet. 3. Décrire son allure d\'ensemble (âge, taille, corpulence, position statique).',
        tip: 'Éviter d\'entrer immédiatement dans les détails minuscules (yeux, dents) dès l\'introduction.'
      }
    ],
    examples: [
      {
        statement: 'Analyse cet extrait de portrait physique : "Karim entrait dans sa vingt-deuxième année ; un grand garçon, noir tabac, bien découpé ; les yeux marrons, une broussaille de cheveux courts en vrille... un sourire paré de fines dents nacrées." (Ousmane Socé)',
        solution: `Cet extrait présente un portrait physique statique ordonné :
1. Âge et silhouette globale : "vingt-deuxième année", "grand garçon, noir tabac, bien découpé".
2. Détails du visage du haut vers le bas : les yeux ("marrons"), la chevelure ("en vrille, entassés"), puis le sourire ("fines dents nacrées").
3. Les adjectifs et participes sont valorisants (mélioratifs).`
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence fondamentale entre un portrait simple et un portrait complexe ?',
        correction: 'Le portrait simple décrit un sujet statique (immobile, au repos) à l\'aide d\'adjectifs et de verbes d\'état. Le portrait complexe (ou dynamique) décrit un sujet en action ou en mouvement à l\'aide de verbes d\'action décrivant ses gestes et son activité.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances scolaires, tu as rendu visite pour la première fois à ton grand-père cultivateur dans son village. À ton retour, tes frères restés en ville te demandent de leur faire son portrait.',
      instructions: [
        '1. Détermine le type de portrait à réaliser.',
        '2. Rédige l\'introduction en précisant l\'allure générale du grand-père assis sous l\'apatam.',
        '3. Donne deux adjectifs mélioratifs pour son portrait moral.'
      ],
      solutionGuide: '1. Il s\'agit d\'un portrait simple (sujet statique au repos). 2. Exemple d\'introduction : "Assis paisiblement sur son banc de bois à l\'ombre du grand manguier, mon grand-père, vieillard septuagénaire à la silhouette robuste et droite, contemplait les champs environnants." 3. Bienveillant, travailleur, généreux.'
    },
    examTraps: [
      'Introduire des verbes d\'action tumultueuse dans un portrait simple : cela le transforme en portrait complexe.',
      'Oublier le portrait moral pour ne faire que la description physique.',
      'Sauter de la tête aux pieds puis revenir aux yeux sans aucune logique spatiale.'
    ],
    quickMemo: 'Portrait simple = statique | Intro (allure générale) + Dév (physique ordonné puis moral) + Concl (sentiments) | Outils : adjectifs, verbes d\'état, imparfait.',
    keywords: ['portrait simple', 'expression écrite', 'adjectifs qualificatifs', 'verbes d\'état', 'portrait physique', 'portrait moral', 'description statique']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 2 - LE PORTRAIT COMPLEXE
  // ========================================================
  {
    id: 'fra-5e-expression-ecrite-portrait-complexe',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Expression Écrite & Méthodes de Rédaction',
    lessonTitle: 'Le portrait complexe : Description en action, verbes de mouvement et articulation dynamique',
    objectifs: [
      'Définir le portrait complexe (portrait dynamique) comme la représentation d\'un être en mouvement ou accomplissant une tâche',
      'Utiliser le lexique de l\'action : verbes de mouvement, précision des gestes et termes techniques',
      'Nuancer les traits de caractère révélés par les attitudes et les actes (vocabulaire mélioratif ou péjoratif)',
      'Articuler harmonieusement la narration (actions chronologiques) et la description (traits physiques et psychologiques)'
    ],
    fullCourseContent: `1. Définition du portrait complexe :
Le portrait complexe, appelé également portrait dynamique ou portrait en action, est la représentation des caractéristiques physiques, morales et psychologiques d'un être humain ou d'un animal saisi dans le mouvement ou pendant qu'il accomplit une activité (travail, sport, chasse, scène de combat).

2. Caractéristiques linguistiques :
- Les verbes d'action et de mouvement : Contrairement au portrait statique, le portrait complexe utilise massivement des verbes exprimant l'énergie, l'effort ou la dextérité (s'élancer, manier, forger, bondir, sculpter, transpirer, ajuster).
- L'entrelacement du physique et de l'action : Le physique n'est pas décrit de manière isolée, mais révélé par l'effort (les muscles qui se contractent, la sueur perlée au front, la précision du regard fixant la cible).
- Les adjectifs qualificatifs expressifs :
  * Adjectifs mélioratifs : infatigable, habile, vif, déterminé, impassible, vigoureux.
  * Adjectifs péjoratifs : fébrile, maladroit, agressif, sournois, exténué.

3. Organisation du devoir :
- Introduction : Présentation du personnage, de son activité en cours et du lieu où se déroule l'action.
- Développement :
  * Description des gestes professionnels ou sportifs majeurs.
  * Évocation de la morphologie et du visage transfigurés par l'activité.
  * Révélation du tempérament (courage, patience, minutie, passion) à travers les actes posés.
- Conclusion : Portée de l'action accomplie et jugement global du narrateur.`,
    definitions: [
      {
        term: 'Portrait complexe / dynamique',
        definition: 'Description d\'un sujet dont les traits physiques et le caractère se manifestent à travers ses mouvements et ses actions concrètes.'
      },
      {
        term: 'Verbe d\'action',
        definition: 'Verbe désignant une opération concrète, un mouvement corporel ou une intervention physique du sujet.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Complémentarité geste-caractère',
        statement: 'Dans un portrait dynamique, chaque geste décrit doit servir d\'indice pour dévoiler la personnalité morale du sujet.'
      }
    ],
    formulas: [
      {
        name: 'Dynamique du portrait complexe',
        formula: '\\text{Geste en action} + \\text{Effet physique} \\implies \\text{Révélation morale du personnage}',
        explanation: 'L\'action corporelle met en lumière la dimension psychologique.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Décrire un artisan au travail',
        procedure: '1. Nommer l\'artisan et son atelier. 2. Décrire sa posture active (penché sur l\'établi). 3. Décrire le jeu de ses mains et outils (marteler, limer). 4. Faire ressortir sa concentration et son savoir-faire.',
        tip: 'Insérer des adjectifs de précision pour qualifier chaque mouvement.'
      }
    ],
    examples: [
      {
        statement: 'Propose une phrase illustrant le portrait complexe d\'un mécanicien au travail.',
        solution: '"D\'un geste assuré, l\'oncle plongea ses mains calleuses dans les entrailles fumantes du moteur, ajusta la clé anglaise avec une précision millimétrée, tandis que son front ruisselant de sueur trahissait son infatigable détermination."'
      }
    ],
    exercises: [
      {
        question: 'Identifie dans cette phrase les indices de portrait complexe : "Courbé sur son ouvrage, le forgeron frappait l\'enclume d\'un bras puissant, le regard étincelant d\'ardeur."',
        correction: 'Indices de mouvement/action : "Courbé sur son ouvrage", "frappait l\'enclume". Indices physiques : "bras puissant", "regard étincelant". Indice moral : "d\'ardeur".'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un match de football au stade Félix Houphouët-Boigny, tu as admiré les prouesses de ton idole Didier Drogba. De retour chez toi, tu décris ses exploits à tes camarades.',
      instructions: [
        '1. Justifie pourquoi ce sujet relève du portrait complexe.',
        '2. Rédige l\'introduction du devoir.',
        '3. Propose trois verbes d\'action et deux adjectifs mélioratifs adaptés.'
      ],
      solutionGuide: '1. Il s\'agit d\'un personnage en pleine action sportive sur le terrain. 2. Exemple d\'intro : "Sur la pelouse verdoyante du Félicia, Didier Drogba s\'élançait avec fougue sous les acclamations ferventes de la foule en liesse." 3. Verbes : feinter, s\'élancer, amortir. Adjectifs : athlétique, percutant.'
    },
    examTraps: [
      'Raconter tout le match de football comme une narration pure en oubliant de décrire l\'athlète lui-même.',
      'Négliger les verbes d\'action au profit d\'une description figée.'
    ],
    quickMemo: 'Portrait complexe = sujet en action | Verbes de mouvement + adjectifs expressifs | Geste -> Physique -> Moral.',
    keywords: ['portrait complexe', 'portrait dynamique', 'verbes d\'action', 'gestuelle', 'description en mouvement']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 3 & 4 - LE POÈME EN VERS LIBRES
  // ========================================================
  {
    id: 'fra-5e-expression-ecrite-poeme-vers-libres-figures-style',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Poésie & Création Littéraire',
    lessonTitle: 'Le poème en vers libres : Poème simple, poème complexe et figures de style',
    objectifs: [
      'Définir le poème en vers libres (affranchissement des règles classiques de versification, liberté rythmique, versets)',
      'Distinguer le vers (ligne), la strophe (paragraphe de vers) et la rime (écho sonore final)',
      'Identifier et employer les figures de style majeures : comparaison, métaphore, hyperbole et anaphore',
      'Rédiger un poème engagé en vers libres sur un thème social ou citoyen (protection des eaux, préservation des forêts, refus du travail des enfants)'
    ],
    fullCourseContent: `1. Le poème et ses composantes :
- Le Poème : Texte à visée esthétique et émotionnelle caractérisé par son langage imagé, son rythme propre et sa force suggestive.
- Vocabulaire poétique :
  * Le vers : Une seule ligne dans le poème.
  * La strophe : Un groupe de vers séparé du suivant par une ligne blanche (tercet = 3 vers, quatrain = 4 vers, quintil = 5 vers).
  * La rime : Répétition d'un son identique à la fin de deux vers (rimes plates AABB, croisées ABAB, embrassées ABBA).

2. Le poème simple en vers libres :
- Définition : Poème moderne qui ne respecte pas les règles strictes de la métrique classique (pas de compte fixe de syllabes comme l'alexandrin, liberté ou absence de rimes, ponctuation libre).
- Les versets : Vers longs qui ressemblent à des phrases amples rythmées par le souffle et le sens.
- Objectif : Exprimer directement des émotions, des sensations ou chanter la beauté du monde sans contrainte formelle rigide.

3. Le poème complexe et les figures de style :
Le poème complexe en vers libres utilise des figures de style pour frapper l'imagination et porter un message profond :
- La Comparaison : Rapprochement de deux éléments (le comparé et le comparant) à l'aide d'un outil de comparaison explicite (comme, tel que, pareil à, semblable à, ainsi que).
  Exemple : "L'enfant a besoin de sa mère comme la fleur a besoin du soleil."
- La Métaphore : Rapprochement direct de deux éléments sans mot-outil de comparaison.
  Exemple : "La terre est une plaie béante", "Le lourd voile des mots se déchire en sanglot" (David Diop).
- L'Hyperbole : Exagération volontaire des termes pour émouvoir ou insister.
  Exemple : "Je ferai le tour du monde pour te protéger", "Un fleuve de larmes".
- L'Anaphore : Répétition d'un même mot ou d'une même formule au début de plusieurs vers ou phrases successifs.
  Exemple :
  "Il y a des heures pour rêver
   Il y a des heures pour souffrir
   Il y a des heures pour aimer..." (David Diop).`,
    definitions: [
      {
        term: 'Vers libre',
        definition: 'Vers qui ne se plie à aucun nombre syllabique fixe ni à un schéma imposé de rimes.'
      },
      {
        term: 'Métaphore',
        definition: 'Figure d\'analogie associant deux réalités distinctes sans employer de terme comparatif formel.'
      },
      {
        term: 'Anaphore',
        definition: 'Reprise rythmée et expressive du même mot au commencement de vers ou de propositions successives.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distinction Comparaison vs Métaphore',
        statement: 'La comparaison contient un terme comparatif (comme, tel, pareil à) ; la métaphore fusionne directement les deux réalités sans outil.'
      }
    ],
    formulas: [
      {
        name: 'Structure de la comparaison',
        formula: '\\text{Comparé} + \\text{Outil (comme, tel, semblable à)} + \\text{Comparant}',
        explanation: 'Formule canonique de l\'analogie comparée.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Écrire un poème engagé de 5 vers libres avec anaphore',
        procedure: '1. Choisir un mot de départ récurrent (ex: "Eau", "Forêt", "Enfant"). 2. Créer 5 versets libres débutant par ce terme. 3. Insérer au moins une métaphore ou comparaison poétique. 4. Conclure par un vers d\'espoir ou d\'appel à l\'action.',
        tip: 'Soigner la musique intérieure des mots et le souffle du verset.'
      }
    ],
    examples: [
      {
        statement: 'Identifie les figures de style dans : "La forêt est le poumon vert de notre terre ; verte comme l\'émeraude, elle chante sous le vent."',
        solution: `1. "La forêt est le poumon vert" : Métaphore (assimilation directe de la forêt aux poumons sans mot-outil).
2. "Verte comme l'émeraude" : Comparaison (outil : "comme").`
      }
    ],
    exercises: [
      {
        question: 'Quelle figure de style caractérise ces vers : "Eau, toi qui purifies nos corps / Eau, toi qui apaises notre soif" ?',
        correction: 'C\'est une anaphore : répétition du mot "Eau" et de la structure "toi qui" en début de vers successifs.'
      }
    ],
    evaluationSituation: {
      context: 'Face aux dangers de la pollution des cours d\'eau dans votre localité, la classe de 5ème décide de rédiger un poème en vers libres pour sensibiliser la communauté.',
      instructions: [
        '1. Dégage le thème et la thèse du poème.',
        '2. Rédige une strophe de 4 vers libres incluant une anaphore et une comparaison.'
      ],
      solutionGuide: '1. Thème : la sauvegarde de l\'eau. Thèse : dénoncer la pollution et protéger cette ressource vitale. 2. Exemple : "Eau claire, miroir du ciel d\'Afrique / Eau précieuse, semblable au lait maternel / Pourquoi l\'homme te souille-t-il de ses déchets ? / Sans toi, notre terre deviendra poussière."'
    },
    examTraps: [
      'Confondre strophe (groupe de vers) et paragraphe (prose).',
      'Confondre métaphore (sans mot outil) et comparaison (avec mot outil : comme, tel, pareil à).',
      'Compter les pieds de manière rigide dans un devoir demandant explicitement des vers libres.'
    ],
    quickMemo: 'Vers = 1 ligne | Strophe = groupe de vers | Vers libre = sans contrainte de syllabes | Comparaison = avec "comme" | Métaphore = sans outil | Anaphore = même mot au début.',
    keywords: ['poème en vers libres', 'versets', 'strophe', 'comparaison', 'métaphore', 'hyperbole', 'anaphore', 'sensibilisation']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 5 - COMPTE-RENDU DE LECTURE & EXPOSÉ ORAL
  // ========================================================
  {
    id: 'fra-5e-compte-rendu-lecture-expose-oral-oeuvre-integrale',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Lecture Méthodique & Pratique Orale',
    lessonTitle: 'Le compte-rendu de lecture, l\'exposé oral et l\'étude d\'œuvre intégrale (Le retour de l\'enfant soldat)',
    objectifs: [
      'Élaborer une fiche méthodique de compte-rendu de lecture (en-tête, thème/sujet, résumé concis, intérêts majeurs)',
      'Maîtriser les techniques de l\'exposé oral (préparation, recherche, plan en 3 parties, posture et registre de langue)',
      'Étudier l\'œuvre intégrale "Le retour de l\'enfant soldat" de François d\'Assise N\'dah (paratexte, contexte historique de la crise en CI, schéma actanciel, thématiques de réconciliation)',
      'Analyser des textes littéraires patrimoniaux (Sadji, Socé, Diop)'
    ],
    fullCourseContent: `1. Le compte-rendu de lecture de texte :
C'est une fiche synthétique élaborée après la lecture d'un texte littéraire ou informatif. Elle s'organise rigoureusement selon quatre rubriques :
- L'En-tête : Mentions bibliographiques complètes : Nom de l'auteur, siècle de composition, genre littéraire (roman, conte, nouvelle, théâtre, poésie), titre de l'extrait, titre de l'œuvre d'origine, maison d'édition et date de parution.
- Le Sujet (ou Thème) : Formulation claire en une ou deux phrases de l'idée générale abordée par l'auteur.
- Le Résumé du texte : Sélection des informations essentielles reformulées dans un style personnel, en utilisant des termes génériques, des phrases simples et en supprimant les exemples superflus et les détails anecdotiques.
- Les Intérêts majeurs du texte : Analyse des visées de l'auteur (émouvoir, critiquer, divertir, faire réfléchir), de la tonalité (dramatique, pathétique, comique, lyrique) et des particularités d'écriture.

2. La technique de l'exposé oral :
- Définition : Développement oral structuré présentant devant un auditoire des faits, des idées et des solutions sur un sujet précis.
- Démarche :
  1. Recherche documentaire ciblée sur le thème (causes, conséquences, pistes de solution).
  2. Organisation des notes sous forme de plan tripartite :
     * Introduction : Annonce du sujet, justification de son importance, annonce du plan.
     * Développement : Présentation claire par points et tirets ordonnés.
     * Conclusion : Bilan personnel et ouverture du débat.
  3. Prestation orale : Posture droite, regard balayant l'assemblée, voix audible et bien articulée, débit régulier, usage du registre courant ou soutenu.

3. Œuvre intégrale : "Le retour de l'enfant soldat" (François d'Assise N'dah) :
- L'Auteur et le contexte : François d'Assise N'dah, écrivain et enseignant ivoirien né à Bouaké. Le roman est ancré dans la crise militaro-politique survenue en Côte d'Ivoire (2002-2011), qui a vu des milliers d'enfants enrôlés dans les combats.
- L'Axe d'étude : Le récit dramatique et pathétique de la réintégration sociale d'un ex-enfant soldat au village de Soukassa.
- Le Schéma actanciel de l'œuvre :
  * Héros / Sujet : Zango, jeune garçon meurtri cherchant à regagner son village natal.
  * Objet (la quête) : Le pardon familial et communautaire, la paix, la réinsertion scolaire et sociale.
  * Destinateur : Le remords, la prise de conscience de l'horreur des armes, la nostalgie de la mère.
  * Destinataire : Zango lui-même et sa communauté villageoise.
  * Adjuvants (ceux qui aident) : Meydjidah (sa mère aimante), Ayablé (amie d'enfance loyale et courageuse plaidant sa cause), Folki (l'ami fidèle), M. Boni (l'instituteur porteur d'humanisme et d'instruction), le petit Zépré.
  * Opposants (ceux qui rejettent) : Gauzango (le père intransigeant), Zakobi et sa milice d'autodéfense violente, le vieux Kéfô, les villageois refusant l'oubli.
- Thèmes majeurs : La guerre et ses ravages, l'innocence brisée de l'enfance, la justice réparatrice plutôt que vengeresse, la tolérance, le pardon et la cohésion sociale nationale.`,
    definitions: [
      {
        term: 'Schéma actanciel',
        definition: 'Modèle d\'analyse narrative identifiant les rôles des forces (sujet, objet, adjuvants, opposants, destinateur, destinataire) autour de la quête principale.'
      },
      {
        term: 'Compte-rendu de lecture',
        definition: 'Fiche méthodique synthétisant les coordonnées bibliographiques, le résumé et la portée littéraire d\'un texte.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Neutralité du résumé de texte',
        statement: 'Dans le compte-rendu, le résumé doit rester strictement fidèle au texte de l\'auteur sans aucun commentaire personnel (les avis personnels sont réservés aux intérêts du texte).'
      }
    ],
    formulas: [
      {
        name: 'Structure actancielle',
        formula: '\\text{Destinateur} \\to \\text{Objet} \\to \\text{Destinataire} \\quad | \\quad \\text{Adjuvants} \\to \\text{Sujet (Héros)} \\leftarrow \\text{Opposants}',
        explanation: 'Relations des forces dynamiques dans l\'œuvre intégrale.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Remplir l\'en-tête d\'un compte-rendu de lecture',
        procedure: '1. Inscrire l\'auteur et son siècle. 2. Mentionner le genre littéraire. 3. Écrire le titre du passage entre guillemets et le titre de l\'œuvre souligné (ou en italique). 4. Préciser l\'éditeur et l\'année de parution.',
        tip: 'Souligner le titre d\'un livre, mettre entre guillemets le titre d\'un extrait.'
      }
    ],
    examples: [
      {
        statement: 'Dresse l\'en-tête du compte-rendu de l\'extrait "La légende baoulé".',
        solution: `Auteur : Bernard Dadié
Siècle : XXème siècle
Genre : Roman autobiographique / récit traditionnel
Titre de l'extrait : "La légende baoulé"
Titre de l'œuvre : Climbié
Édition : Seghers, 1956.`
      }
    ],
    exercises: [
      {
        question: 'Dans "Le retour de l\'enfant soldat", qui sont les deux principaux soutiens de Zango face à la colère des villageois menés par Zakobi ?',
        correction: 'Sa mère Meydjidah qui le protège et le nourrit clandestinement, et son amie d\'enfance Ayablé qui prononce un vibrant plaidoyer en faveur du pardon et de la réconciliation.'
      }
    ],
    evaluationSituation: {
      context: 'À la demande de votre professeur de français, vous devez préparer un exposé oral d\'une minute sur le thème : "Les causes et les conséquences de la violence en milieu scolaire".',
      instructions: [
        '1. Définis l\'objectif principal d\'un exposé oral.',
        '2. Rédige l\'introduction de cet exposé en trois phrases.',
        '3. Propose deux solutions concrètes à formuler dans le développement.'
      ],
      solutionGuide: '1. Présenter oralement des faits et pistes de réflexion pour convaincre un auditoire. 2. Exemple d\'intro : "La violence en milieu scolaire est un fléau qui compromet gravement l\'avenir de notre jeunesse et perturbe la sérénité des apprentissages. Comment expliquer cette montée d\'agressivité et surtout, comment y mettre fin durablement ? C\'est à ces questions essentielles que notre groupe va répondre." 3. Solutions : renforcement de la médiation par les élèves pairs, sanctions éducatives et activités culturelles.'
    },
    examTraps: [
      'Donner un avis personnel dans le résumé du compte-rendu au lieu de résumer la pensée de l\'auteur.',
      'Lire ses feuilles mot à mot lors d\'un exposé oral au lieu de s\'adresser au public.',
      'Confondre Zango (le héros repentant) et Zakobi (le chef de milice opposant).'
    ],
    quickMemo: 'Compte-rendu = En-tête + Thème + Résumé + Intérêts | Exposé oral = Intro + Dév + Concl à voix claire | Œuvre 5e : Zango, enfant soldat, quête de réhabilitation et pardon.',
    keywords: ['compte-rendu de lecture', 'exposé oral', 'œuvre intégrale', 'enfant soldat', 'schéma actanciel', 'réconciliation']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 6 - LE GROUPE NOMINAL ET EXPANSIONS
  // ========================================================
  {
    id: 'fra-5e-grammaire-groupe-nominal-expansions-pluriel-noms-composes',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Grammaire & Outils de la Langue',
    lessonTitle: 'Le groupe nominal : Expansions du nom (adjectif, subordonnée relative, complément du nom) et pluriel des noms composés',
    objectifs: [
      'Identifier le nom noyau et ses trois expansions facultatives : adjectif qualificatif, proposition subordonnée relative, complément du nom',
      'Maîtriser la subordonnée relative (introduite par qui, que, dont, où, lequel) et sa fonction de complément de l\'antécédent',
      'Identifier le complément du nom (prépositionnel : de, à, en, sans) et analyser ses valeurs de sens et ses accords',
      'Former le pluriel des noms simples (cas particuliers en -al, -s, -x, -z)',
      'Appliquer les règles d\'accord des noms composés (nom+nom, adj+nom, verbe+nom, mots invariables, composés soudés)'
    ],
    fullCourseContent: `1. Le groupe nominal et ses trois expansions :
Dans un groupe nominal (GN), le nom principal est appelé le nom noyau. On peut enrichir ce nom par des expansions du nom facultatives :
- L'Adjectif qualificatif épithète : Se place directement avant ou après le nom sans virgule.
  Exemple : "Un enfant calme", "Un grand manguier".
- La Proposition subordonnée relative : Introduite par un pronom relatif (qui, que, dont, où, lequel, auquel). Elle a pour fonction complément de l'antécédent (le nom qu'elle détermine).
  Exemple : "Le manguier qui porte des fruits", "Le livre que tu m'as prêté", "La maison où je suis né", "L'ami dont je te parle".
  Accord du participe passé dans la relative : Le participe passé conjugué avec avoir s'accorde en genre et en nombre avec le pronom relatif COD placé avant le verbe (ex : "Les mangues que j'ai mangées").
- Le Complément du nom (CDN) : Groupe de mots rattaché au nom noyau le plus souvent par une préposition (de, à, en, pour, sans, avec).
  Nature du CDN :
  * Un autre nom ou GN : "La bouillie de maïs", "Le volant de la voiture".
  * Un pronom : "Une statue en souvenir de lui".
  * Un verbe à l'infinitif : "Une envie de rire", "Un fer à repasser".
  * Un adverbe : "La pluie d'hier".
  Valeurs sémantiques du CDN : Appartenance ("le sac de Paul"), matière ("une lame d'acier"), usage/but ("une brosse à dents"), lieu/origine ("le car de Bloléquin").
  Accord du CDN sans article : Selon le sens singulier ou pluriel (ex : "un fruit à pépins" [plusieurs pépins], "un arbre sans feuilles" [plusieurs], "un mur de briques" ou "de brique").

2. Pluriel des noms simples et cas particuliers :
- Règle générale : On ajoute un -s au singulier (un jouet -> des jouets).
- Noms terminés par -s, -x, -z au singulier : Invariables au pluriel (le bois -> les bois ; un nez -> des nez ; une voix -> des voix).
- Noms terminés par -al : Font généralement leur pluriel en -aux (un cheval -> des chevaux ; un journal -> des journaux).
  Exceptions qui prennent un -s : bals, carnavals, chacals, festivals, récitals, régals, cal, pal.

3. Pluriel des noms composés :
- Règle 1 : Noms composés formés avec trait d'union :
  * Nom + Nom : Les deux éléments prennent la marque du pluriel (un chou-fleur -> des choux-fleurs ; un oiseau-mouche -> des oiseaux-mouches).
  * Adjectif + Nom ou Nom + Adjectif : Les deux éléments prennent la marque du pluriel (un coffre-fort -> des coffres-forts ; une basse-cour -> des basses-cours).
  * Nom + Préposition + Nom : Seul le premier nom prend la marque du pluriel (un chef-d'œuvre -> des chefs-d'œuvre ; un arc-en-ciel -> des arcs-en-ciel).
  * Verbe + Nom : Le verbe reste toujours invariable. Le nom prend la marque du pluriel selon le sens (un tire-bouchon -> des tire-bouchons ; un porte-plume -> des porte-plumes ; un lave-vaisselle -> des lave-vaisselle [invariable]).
  * Mot invariable + Nom : Seul le nom prend la marque du pluriel (une avant-garde -> des avant-gardes).
  * Verbe + Verbe ou phrases figées : Tout reste invariable (un va-et-vient -> des va-et-vient ; un ouï-dire -> des ouï-dire).
- Règle 2 : Noms composés soudés en un seul mot :
  Ils forment généralement leur pluriel comme des noms simples en ajoutant un -s final (un entresol -> des entresols ; un gendarme -> des gendarmes ; un portemanteau -> des portemanteaux).
  Exceptions remarquables à pluriel interne : un bonhomme -> des bonshommes ; un gentilhomme -> des gentilshommes ; un monsieur -> des messieurs ; une madame -> des mesdames.`,
    definitions: [
      {
        term: 'Expansion du nom',
        definition: 'Élément grammatical facultatif qui enrichit, précise ou restreint le sens d\'un nom noyau.'
      },
      {
        term: 'Antécédent',
        definition: 'Nom ou pronom placé avant la subordonnée relative, que cette dernière reprend et complète.'
      },
      {
        term: 'Nom composé',
        definition: 'Nom constitué de deux ou plusieurs mots associés pour désigner une réalité unique.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'or du pluriel des composés',
        statement: 'Seuls les noms et les adjectifs peuvent prendre la marque du pluriel dans un nom composé. Les verbes et mots invariables ne prennent jamais de marque.'
      },
      {
        name: 'Invariabilité des mots en -s, -x, -z',
        statement: 'Les noms terminés par s, x ou z au singulier restent strictement identiques au pluriel.'
      }
    ],
    formulas: [
      {
        name: 'Accord Nom + Adjectif',
        formula: '\\text{Nom}_s + \\text{Adj}_s \\implies \\text{Nom}_p + \\text{Adj}_p',
        explanation: 'Tous deux reçoivent la marque du pluriel (ex: des coffres-forts).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre au pluriel un nom composé à trait d\'union',
        procedure: '1. Analyser la nature grammaticale de chaque élément (nom, adj, verbe, préposition). 2. Appliquer : nom/adj prennent le pluriel, verbes et prépositions restent invariables. 3. Vérifier les exceptions usuelles.',
        tip: 'Se poser la question : quel élément fait l\'action ? Un verbe ne prend jamais d\'s au pluriel nominal.'
      }
    ],
    examples: [
      {
        statement: 'Mets au pluriel : un oiseau-mouche, un chef-d\'œuvre, un va-et-vient, un gendarme.',
        solution: `- un oiseau-mouche (nom + nom) -> des oiseaux-mouches.
- un chef-d'œuvre (nom + préposition + nom) -> des chefs-d'œuvre.
- un va-et-vient (verbe + verbe) -> des va-et-vient.
- un gendarme (mot composé soudé) -> des gendarmes.`
      }
    ],
    exercises: [
      {
        question: 'Transforme le complément du nom en subordonnée relative : "C\'est une affaire de grande importance."',
        correction: '"C\'est une affaire qui a une grande importance" (ou "qui est d\'une grande importance").'
      }
    ],
    evaluationSituation: {
      context: 'Dans un texte décrivant la savane, un élève écrit : "Les cheval traversaient les avant-garde pour chasser les oiseau-mouches et les pique-bœufs".',
      instructions: [
        '1. Corrige les fautes de pluriel sur les noms simples et composés.',
        '2. Justifie chaque correction.'
      ],
      solutionGuide: '1. Correction : "Les chevaux traversaient les avant-gardes pour chasser les oiseaux-mouches et les pique-bœufs." 2. Justification : cheval fait son pluriel en -aux (chevaux) ; avant-garde est invariable+nom, seul garde prend s ; oiseau-mouche est nom+nom, les deux prennent s ; pique-bœuf est verbe+nom, pique reste invariable.'
    },
    examTraps: [
      'Mettre un s à un verbe dans un nom composé (ex: des *portes-clefs est une erreur, écrire des porte-clefs).',
      'Accorder le second nom après une préposition (écrire des *arcs-en-ciels au lieu de des arcs-en-ciel).',
      'Confondre festival/festivals avec cheval/chevaux.'
    ],
    quickMemo: 'Nom+Nom / Adj+Nom = les 2 s\'accordent | Nom+de+Nom = seul le 1er s\'accorde | Verbe = toujours invariable | Noms en -al = -aux (sauf bals, carnavals, festivals...).',
    keywords: ['groupe nominal', 'expansions du nom', 'complément du nom', 'subordonnée relative', 'pluriel des noms composés', 'antécédent']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 7 - LE GROUPE ADJECTIF ET ACCORDS
  // ========================================================
  {
    id: 'fra-5e-grammaire-groupe-adjectif-fonctions-accords-couleurs',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Grammaire & Outils de la Langue',
    lessonTitle: 'Le groupe adjectif : Les trois fonctions, règles d\'accord et cas particuliers des adjectifs de couleur',
    objectifs: [
      'Distinguer les trois fonctions de l\'adjectif qualificatif : épithète liée, attribut du sujet (verbes d\'état), apposé (détaché par une virgule)',
      'Identifier les participes passés employés sans auxiliaire ayant valeur d\'adjectif qualificatif',
      'Appliquer les règles générales d\'accord en genre et en nombre avec un ou plusieurs noms (masculin l\'emporte)',
      'Maîtriser les règles orthographiques des adjectifs de couleur simples, composés et dérivés de noms (avec leurs 5 exceptions)'
    ],
    fullCourseContent: `1. Définition et les trois fonctions de l\'adjectif qualificatif :
L'adjectif qualificatif est un mot qui attribue une propriété ou une qualité au nom ou pronom qu'il détermine. Il peut occuper trois fonctions syntaxiques distinctes :
- Fonction Épithète : L'adjectif est placé immédiatement à côté du nom (avant ou après) sans séparation de virgule ni de verbe. Il fait partie intégrante du groupe nominal.
  Exemple : "L'élève intelligent a de bonnes notes."
- Fonction Attribut du sujet : L'adjectif est séparé du nom sujet par un verbe d'état (être, paraître, sembler, devenir, demeurer, rester, avoir l'air). Il fait partie du groupe verbal et s'accorde obligatoirement avec le sujet.
  Exemple : "Cette fille est studieuse", "Les ailes du papillon semblaient lumineuses."
- Fonction Apposé (ou épithète détachée) : L'adjectif est séparé du nom par une virgule. Il peut être déplacé en tête ou en fin de phrase.
  Exemple : "Intelligent et travailleur, cet élève réussira son examen", "Rassasié, l'enfant s'endormit."
- Remarque : Les participes passés employés sans auxiliaire fonctionnent exactement comme des adjectifs qualificatifs et suivent les mêmes règles d'accord et de fonctions (ex : "Le professeur étonné" [épithète], "Les fleurs sont fanées" [attribut], "Acheminées par avion, les lettres arrivèrent" [apposé]).

2. Règles générales d'accord :
- Accord avec un nom : L'adjectif s'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom donneur d'accord.
- Accord avec plusieurs noms :
  * Si tous les noms sont au féminin : L'adjectif se met au féminin pluriel (ex : "La table et la chaise sont anciennes").
  * Si les noms sont de genres différents : L'adjectif se met au masculin pluriel. On place de préférence le nom masculin le plus proche de l'adjectif pour l'harmonie auditive (ex : "La table et le buffet anciens").

3. Accord des adjectifs de couleur (Règles orthographiques indispensables) :
- Règle 1 : Adjectif de couleur simple
  S'il n'y a qu'un seul mot adjectif pour désigner la couleur, il s'accorde normalement en genre et en nombre avec le nom :
  Exemples : "Des pommes vertes", "Des tuniques blanches", "Des yeux bleus".
- Règle 2 : Adjectif de couleur composé
  Si la couleur est exprimée par deux adjectifs ou par un adjectif associé à une nuance, l'ensemble reste totalement INVARIABLE :
  Exemples : "Des tissus rouge sombre", "Des yeux bleu clair", "Des jupes vert pomme".
- Règle 3 : Noms employés pour exprimer une couleur
  Les noms de fruits, de fleurs, de minéraux ou de matières employés métaphoriquement comme adjectifs de couleur restent STRICTEMENT INVARIABLES :
  Exemples : "Des tissus cerise", "Des robes marron", "Des yeux émeraude", "Des rubans orange", "Des chemises ocre, carmin, grenat".
  ATTENTION : CINQ EXCEPTIONS historiques qui sont assimilées à de vrais adjectifs et S'ACCORDENT :
  * Rose -> "Des robes roses"
  * Mauve -> "Des fleurs mauves"
  * Pourpre -> "Des tuniques pourpres"
  * Écarlate -> "Des étoffes écarlates"
  * Fauve -> "Des bêtes fauves".`,
    definitions: [
      {
        term: 'Attribut du sujet',
        definition: 'Fonction d\'un adjectif relié au sujet par l\'intermédiaire d\'un verbe d\'état et accordé avec lui.'
      },
      {
        term: 'Adjectif apposé',
        definition: 'Adjectif séparé du nom qu\'il qualifie par une virgule, mobile dans la phrase.'
      },
      {
        term: 'Adjectif de couleur dérivé',
        definition: 'Nom de chose concrète (fruit, pierre) utilisé pour nommer une teinte, invariable en genre et en nombre.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariabilité des adjectifs de couleur composés',
        statement: 'Dès que la couleur est désignée par deux mots ou plus, aucun accord n\'est possible : des chemises bleu marine.'
      },
      {
        name: 'Les cinq exceptions de couleur',
        statement: 'Rose, mauve, pourpre, écarlate et fauve s\'accordent en genre et en nombre : des rubans écarlates.'
      }
    ],
    formulas: [
      {
        name: 'Verbes d\'état',
        formula: '\\text{Être, paraître, sembler, devenir, demeurer, rester, avoir l\'air}',
        explanation: 'Verbes introduisant obligatoirement un adjectif attribut du sujet.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Accorder un adjectif de couleur',
        procedure: '1. Vérifier le nombre de mots : si 2 mots (bleu foncé) -> invariable. 2. Si 1 mot : vérifier si c\'est un nom à l\'origine (orange, marron, cerise) -> invariable. 3. Vérifier les 5 exceptions (rose, mauve, pourpre, écarlate, fauve) -> accord. 4. Sinon (vert, rouge, blanc) -> accord standard.',
        tip: 'Retenir la formule mnémonique : Rose, Mauve, Pourpre, Écarlate et Fauve aiment s\'habiller au pluriel.'
      }
    ],
    examples: [
      {
        statement: 'Accorde les adjectifs entre parenthèses : "Des jupes (bleu clair), des chaussures (marron) et des rubans (écarlate)."',
        solution: `- "bleu clair" est composé -> invariable : des jupes bleu clair.
- "marron" est un nom de fruit -> invariable : des chaussures marron.
- "écarlate" fait partie des 5 exceptions -> accord au pluriel : des rubans écarlates.`
      }
    ],
    exercises: [
      {
        question: 'Dans la phrase : "Épuisés par la marche, les voyageurs dormaient", quelle est la fonction de "Épuisés" ?',
        correction: '"Épuisés" est un participe passé sans auxiliaire employé comme adjectif qualificatif, ayant la fonction d\'adjectif apposé (séparé par une virgule de "les voyageurs").'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de 5ème a rédigé une description pour le journal du collège : "Les sénateurs portaient des toges (pourpre), des écharpes (orange) et des ceintures (rouge foncé)." Il hésite sur l\'orthographe.',
      instructions: [
        '1. Rappelle la règle pour les adjectifs de couleur composés.',
        '2. Rappelle la règle pour les noms employés comme adjectifs et cite les exceptions.',
        '3. Récris correctement la phrase.'
      ],
      solutionGuide: '1. Les adjectifs de couleur composés sont invariables (rouge foncé). 2. Les noms employés comme adjectif sont invariables (orange), sauf rose, mauve, pourpre, écarlate, fauve qui s\'accordent. 3. "Les sénateurs portaient des toges pourpres, des écharpes orange et des ceintures rouge foncé."'
    },
    examTraps: [
      'Mettre un s à marron ou orange (*des robes marrons est une faute très courante).',
      'Accorder le premier mot d\'une couleur composée (*des yeux bleus clair est faux, écrire bleu clair).',
      'Confondre un verbe d\'action avec un verbe d\'état pour l\'attribut du sujet.'
    ],
    quickMemo: '3 fonctions : Épithète (collé sans virgule), Attribut (après verbe d\'état), Apposé (avec virgule) | Couleur composée = invariable | Nom couleur (orange, marron) = invariable sauf rose, mauve, pourpre, écarlate, fauve.',
    keywords: ['adjectif qualificatif', 'épithète', 'attribut du sujet', 'adjectif apposé', 'adjectifs de couleur', 'accord de l\'adjectif', 'verbes d\'état']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 8 - LA PRONOMINALISATION (PRONOMS ET "EN" / "Y")
  // ========================================================
  {
    id: 'fra-5e-grammaire-pronominalisation-pronoms-personnels-en-y',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Grammaire & Outils de la Langue',
    lessonTitle: 'La pronominalisation : Pronoms personnels sujets, compléments (COD, COI) et pronoms adverbiaux « EN » et « Y »',
    objectifs: [
      'Définir la pronominalisation comme substitution d\'un nom ou GN par un pronom pour éviter les répétitions',
      'Identifier et employer les pronoms personnels sujets (je, tu, il/elle, nous, vous, ils/elles)',
      'Identifier et employer les pronoms personnels COD (me, te, le, la, nous, vous, les) et COI (me, te, lui, nous, vous, leur)',
      'Maîtriser l\'emploi des pronoms adverbiaux « EN » (lieu d\'origine, quantité/partitif, complément avec de) et « Y » (lieu où l\'on va, complément avec à)'
    ],
    fullCourseContent: `1. Définition de la pronominalisation :
La pronominalisation est le procédé syntaxique qui consiste à remplacer un nom ou un groupe nominal par un pronom personnel équivalent afin d'éviter les répétitions et d'assurer la cohésion textuelle.

2. Les pronoms personnels sujets et compléments :
- Tableau de déclinaison selon la personne et le nombre :
  * 1ère personne du singulier : Sujet = JE ; COD = ME ; COI = ME
  * 2ème personne du singulier : Sujet = TU ; COD = TE ; COI = TE
  * 3ème personne du singulier : Sujet = IL / ELLE ; COD = LE / LA ; COI = LUI
  * 1ère personne du pluriel : Sujet = NOUS ; COD = NOUS ; COI = NOUS
  * 2ème personne du pluriel : Sujet = VOUS ; COD = VOUS ; COI = VOUS
  * 3ème personne du pluriel : Sujet = ILS / ELLES ; COD = LES ; COI = LEUR
- Place dans la phrase : Les pronoms personnels compléments se placent généralement AVANT le verbe conjugué (sauf à l'impératif affirmatif : "Regarde-le !").
  Exemples :
  * "Magloire cuisine du riz" -> "Il le cuisine" (le = COD).
  * "Sangaré parle à Henriette" -> "Il lui parle" (lui = COI).
  * "Le professeur dicte la leçon aux élèves" -> "Il la leur dicte" (la = COD, leur = COI).

3. Les pronoms adverbiaux « EN » et « Y » :
Ce sont à l'origine des adverbes de lieu qui fonctionnent comme pronoms personnels lorsqu'ils remplacent un groupe nominal :
- Emplois du pronom « EN » :
  * Complément circonstanciel de lieu indiquant l'origine ou la provenance (répond à "d'où ?") : "Les enfants viennent de la maison" -> "Les enfants en viennent" (en = de là-bas).
  * Complément d'objet direct introduit par un article partitif (du, de la, de l', des) ou une expression de quantité : "Il achète de l'huile" -> "Il en achète".
  * Complément d'objet indirect introduit par la préposition "de" : "L'élève parle de son école" -> "Il en parle".
  * Complément de l'adjectif introduit par "de" : "Il est fier de son résultat" -> "Il en est fier".
  * Complément du nom introduit par "de" : "Le touriste admire les beautés de la ville" -> "Le touriste en admire les beautés".
- Emplois du pronom « Y » :
  * Complément circonstanciel de lieu indiquant la destination ou le lieu où l'on est (répond à "où ?") : "Les élèves vont à l'école" -> "Les élèves y vont" (y = là-bas).
  * Complément d'objet indirect introduit par la préposition "à" lorsqu'il désigne une CHOSE ou une IDÉE (attention : pour une personne, on emploie lui/leur ou à lui/à elle) : "Il ne faut jamais songer à ces choses" -> "Il ne faut jamais y songer".`,
    definitions: [
      {
        term: 'Pronominalisation',
        definition: 'Remplacement d\'un syntagme nominal par un pronom anaphorique pour fluidifier le discours.'
      },
      {
        term: 'Pronoms adverbiaux',
        definition: 'Pronoms "en" et "y", invariables, remplaçant des groupes prépositionnels introduits par "de" ou "à".'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Différence entre LUI et Y',
        statement: 'Devant un COI introduit par "à" : si c\'est une personne -> LUI/LEUR ("je parle à Jean -> je lui parle") ; si c\'est une chose ou idée -> Y ("je pense à mon avenir -> j\'y pense").'
      },
      {
        name: 'Invariabilité de LEUR pronom',
        statement: 'Le pronom personnel LEUR (COI) ne prend JAMAIS de -s : "Elle leur donne des bonbons".'
      }
    ],
    formulas: [
      {
        name: 'Règles de substitution EN / Y',
        formula: '\\text{Préposition } de \\implies \\text{Pronom } EN \\quad | \\quad \\text{Préposition } à / \\text{lieu} \\implies \\text{Pronom } Y',
        explanation: 'Guide de choix immédiat entre les deux pronoms adverbiaux.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Remplacer un groupe nominal par EN ou Y',
        procedure: '1. Identifier la préposition qui introduit le groupe : est-ce "de" ou "à" ? 2. Si c\'est "de" (provenance, quantité, de quoi) -> remplacer par EN. 3. Si c\'est "à" (lieu, idée, chose) -> remplacer par Y. 4. Placer le pronom immédiatement avant le verbe conjugué.',
        tip: '"En" vient de (de là), "Y" va à (vers là).'
      }
    ],
    examples: [
      {
        statement: 'Pronominalise les compléments : "Pour calmer le bébé, maman donne des bonbons à cet enfant."',
        solution: `- "le bébé" (COD de calmer) -> le : "Pour le calmer"
- "des bonbons" (COD avec partitif) -> en (ou les bonbons -> les)
- "à cet enfant" (COI de personne) -> lui
Résultat complet : "Pour le calmer, maman lui donne des bonbons" (ou "maman lui en donne").`
      }
    ],
    exercises: [
      {
        question: 'Remplace les compléments soulignés par le pronom qui convient : 1) Nous participons à ce tournoi. 2) Il revient de Yamoussoukro.',
        correction: '1) "à ce tournoi" (COI de chose avec à) -> "Nous y participons". 2) "de Yamoussoukro" (lieu de provenance avec de) -> "Il en revient".'
      }
    ],
    evaluationSituation: {
      context: 'Dans une rédaction, un élève répète sans cesse : "Le directeur convoque les parents d\'élèves. Le directeur donne des conseils aux parents d\'élèves. Les parents d\'élèves reviennent de la réunion."',
      instructions: [
        '1. Identifie les répétitions du texte.',
        '2. Pronominalise les groupes nominaux soulignés pour améliorer la fluidité.'
      ],
      solutionGuide: '1. Répétition de "le directeur" et "les parents d\'élèves". 2. Texte amélioré : "Le directeur convoque les parents d\'élèves. Il leur donne des conseils. Ils en reviennent satisfaits."'
    },
    examTraps: [
      'Mettre un s à leur pronom personnel (*Il leurs parle est une faute grave).',
      'Employer Y pour une personne au lieu de LUI (*J\'y téléphone au lieu de Je lui téléphone).',
      'Confondre le pronom EN (j\'en mange) et la préposition EN (en avion).'
    ],
    quickMemo: 'COD : le, la, les | COI : lui, leur (sans s !) | EN = préposition "de", quantité, partitif | Y = préposition "à" (chose), lieu où on est/va.',
    keywords: ['pronominalisation', 'pronoms personnels', 'COD', 'COI', 'pronom EN', 'pronom Y', 'anaphore']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 9 - LE VERBE (FORMES, TEMPS ET VOIX PASSIVE)
  // ========================================================
  {
    id: 'fra-5e-grammaire-verbe-tournures-groupes-temps-passif',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Grammaire & Conjugaison',
    lessonTitle: 'Le verbe : Tournures pronominale et impersonnelle, verbes du 3e groupe, valeurs des temps et voix passive',
    objectifs: [
      'Identifier et classifier les verbes pronominaux : essentiellement pronominaux, réfléchis, réciproques, passifs',
      'Identifier et employer la tournure impersonnelle (verbes météo, falloir, constructions avec sujet grammatical "il" et sujet réel)',
      'Comprendre la morphologie verbale (base/radical + terminaison/désinence) et classer les verbes du 3e groupe selon le nombre de bases',
      'Distinguer les valeurs d\'emploi du passé simple (action achevée, premier plan) et de l\'imparfait (durée, second plan)',
      'Transformer une phrase de la voix active à la voix passive aux différents temps de l\'indicatif'
    ],
    fullCourseContent: `1. La tournure pronominale :
Un verbe est à la tournure pronominale lorsqu'il est précédé d'un pronom réfléchi de la même personne que le sujet (me, te, se, nous, vous). On distingue 4 types :
- Verbes essentiellement pronominaux : N'existent qu'à cette forme (s'évanouir, s'enfuir, s'emparer, s'écrier, s'accouder).
- Verbes pronominaux réfléchis : Le sujet exerce l'action sur lui-même (ex : "La fille se peigne" -> se = COD de peigne).
- Verbes pronominaux réciproques : Deux ou plusieurs sujets exercent l'action l'un sur l'autre (ex : "Jean et Pierre se battent", "Les amies se sont téléphoné").
- Verbes pronominaux de sens passif : Ont une valeur passive sans complément d'agent (ex : "Les mangues se vendent cher au marché" = sont vendues).

2. La tournure impersonnelle :
Un verbe est à la tournure impersonnelle lorsqu'il ne se conjugue qu'à la 3ème personne du singulier avec le pronom neutre "IL" :
- Verbes essentiellement impersonnels : Ne s'emploient jamais avec d'autres personnes (falloir, pleuvoir, neiger, grêler, s'agir de).
- Verbes accidentellement impersonnels : Verbes habituellement personnels employés avec un sujet grammatical apparent "IL" et un sujet réel (le sujet qui fait l'action en réalité) placé après le verbe.
  * Forme personnelle : "Des visiteurs arrivent."
  * Forme impersonnelle : "Il arrive des visiteurs." (Il = sujet grammatical ; des visiteurs = sujet réel).
  * Autres exemples : "Il est interdit de fumer", "Il était arrivé un accident", "Il y a un grand rassemblement".

3. Morphologie et verbes du 3ème groupe :
Un verbe comprend une base (radical donnant le sens) et une terminaison (désinence indiquant le temps, le mode et la personne).
Le 3ème groupe (environ 370 verbes en -ir, -re, -oir, -er comme aller) se caractérise par la variabilité de son radical :
- À 1 radical unique invariable : courir (cour-), conclure (conclu-).
- À 2 radicaux : ouvrir (ouvr- / ouvri-), écrire (écri- / écriv-), lire, vivre.
- À 3 radicaux : devoir (doi- / doiv- / dev-), boire (boi- / buv- / boiv-), voir, dormir.
- À 4 radicaux : tenir (tien- / ten- / tienn- / tiend-), prendre, savoir, aller (avec ses radicaux supplétifs v-, all-, ir-, aill-).
- À 5 radicaux : vouloir (veu- / voul- / veul- / voud- / veuill-), pouvoir (peu- / pouv- / peuv- / pourr- / puiss-).

4. Valeurs du passé simple et de l'imparfait :
- Le Passé Simple : Exprime une action passée ponctuelle, complètement achevée et délimitée dans le temps. C'est le temps du premier plan qui fait progresser le récit d'action.
  Terminaisons : -ai, -as, -a, -âmes, -âtes, -èrent (1er groupe) ; -is, -is, -it, -îmes, -îtes, -irent (2e et 3e) ; -us, -us, -ut, -ûmes, -ûtes, -urent (3e en u) ; -ins, -ins, -int, -înmes, -întes, -inrent (tenir/venir).
- L'Imparfait : Exprime une action passée en cours d'accomplissement, non délimitée (durative), une habitude ou la description du décor et des personnages (second plan).
  Terminaisons universelles : -ais, -ais, -ait, -ions, -iez, -aient.

5. Les 4 temps simples et 4 temps composés de l'indicatif :
- Temps simples : Présent, Imparfait, Passé simple, Futur simple.
- Temps composés (auxiliaire conjugué au temps simple correspondant + participe passé) :
  * Passé composé (auxiliaire au présent) : j'ai mangé / je suis parti.
  * Plus-que-parfait (auxiliaire à l'imparfait) : j'avais mangé / j'étais parti.
  * Passé antérieur (auxiliaire au passé simple) : j'eus mangé / je fus parti.
  * Futur antérieur (auxiliaire au futur simple) : j'aurai mangé / je serai parti.

6. La forme passive et sa transformation :
- Le COD de la phrase active devient le Sujet de la phrase passive.
- Le Sujet actif devient le Complément d'agent introduit par "par" (ou "de").
- Le verbe se transforme : Auxiliaire ÊTRE conjugué au même temps que le verbe actif + Participe passé accordé avec le nouveau sujet.
  Tableau de concordance :
  * Présent actif -> Passé composé passif : "Le chat dévore les souris" -> "Les souris sont dévorées par le chat".
  * Imparfait actif -> Plus-que-parfait passif : "Yao mangeait la mangue" -> "La mangue était mangée par Yao".
  * Passé simple actif -> Passé antérieur passif : "Les élèves jetèrent les cahiers" -> "Les cahiers eurent été jetés par les élèves".
  * Futur simple actif -> Futur antérieur passif : "Il finira le devoir" -> "Le devoir aura été fini par lui".`,
    definitions: [
      {
        term: 'Tournure impersonnelle',
        definition: 'Construction verbale utilisant le sujet apparent "il" sans renvoyer à une personne déterminée.'
      },
      {
        term: 'Voix passive',
        definition: 'Forme verbale où le sujet grammatical subit l\'action exprimée par le verbe au lieu de l\'accomplir.'
      },
      {
        term: 'Radicaux supplétifs',
        definition: 'Radicaux d\'origines étymologiques différentes alternant dans la conjugaison d\'un même verbe (ex: aller -> vais, irons).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Concordance active-passive',
        statement: 'À la voix passive, l\'auxiliaire ÊTRE prend le temps exact du verbe de la phrase active.'
      },
      {
        name: 'Accord du participe passé passif',
        statement: 'Le participe passé passif s\'accorde toujours en genre et en nombre avec le sujet grammatical.'
      }
    ],
    formulas: [
      {
        name: 'Transformation passive',
        formula: '\\text{Sujet passif (ex-COD)} + \\text{ÊTRE (au temps actif)} + \\text{Participe passé accordé} + \\text{par} + \\text{Complément d\'agent}',
        explanation: 'Mécanisme régulier du passif.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre une phrase à la tournure impersonnelle',
        procedure: '1. Repérer le verbe et le sujet réel (ex: "Fumer est interdit"). 2. Introduire le pronom neutre "Il" en tête. 3. Conserver le verbe à la 3e personne du singulier : "Il est interdit de fumer".',
        tip: 'Le sujet réel vient se placer après le verbe impersonnel.'
      }
    ],
    examples: [
      {
        statement: 'Transforme à la voix passive : "Les chasseurs poursuivaient le fauve blessé."',
        solution: `1. Le COD actif "le fauve blessé" devient sujet passif.
2. Le verbe actif "poursuivaient" est à l'imparfait -> Auxiliaire être à l'imparfait : "était".
3. Participe passé accordé : "poursuivi".
4. Complément d'agent : "par les chasseurs".
Résultat : "Le fauve blessé était poursuivi par les chasseurs."`
      }
    ],
    exercises: [
      {
        question: 'Distingue les valeurs des verbes dans : "Moussa marchait paisiblement quand soudain un serpent surgit de l\'herbe."',
        correction: '"marchait" est à l\'imparfait : action d\'arrière-plan, durative. "surgit" est au passé simple : action soudaine, ponctuelle, de premier plan qui fait progresser l\'histoire.'
      }
    ],
    evaluationSituation: {
      context: 'Dans un rapport d\'enquête scolaire, le rédacteur écrit : "Des voleurs ont cambriolé la cantine. Beaucoup de sacs de riz se vendaient ensuite au marché noir."',
      instructions: [
        '1. Transforme la première phrase à la voix passive.',
        '2. Indique la valeur de la tournure pronominale dans la deuxième phrase.'
      ],
      solutionGuide: '1. "La cantine a été cambriolée par des voleurs." 2. "se vendaient" est un verbe pronominal de sens passif (les sacs de riz étaient vendus).'
    },
    examTraps: [
      'Oublier d\'accorder le participe passé à la voix passive avec le sujet passif.',
      'Confondre le verbe être au passé composé ("a été") et au présent ("est") dans la transformation passive.',
      'Croire que le verbe impersonnel s\'accorde avec le sujet réel au pluriel (*Il arrivent des visiteurs est faux, écrire Il arrive des visiteurs).'
    ],
    quickMemo: 'Pronominal = avec se/me/te | Impersonnel = Il + verbe 3e sing | Passé simple = premier plan, action achevée | Imparfait = décor, durée | Passif = Être au temps actif + Participe accordé + par.',
    keywords: ['verbes pronominaux', 'tournure impersonnelle', 'verbes du 3e groupe', 'passé simple et imparfait', 'voix passive', 'temps simples et composés']
  },

  // ========================================================
  // 5ÈME - FRANÇAIS : LEÇON 10 - OUTILS DE LA LANGUE & ORTHOGRAPHE
  // ========================================================
  {
    id: 'fra-5e-orthographe-outils-langue-derivation-adverbes-completives',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Orthographe & Syntaxe',
    lessonTitle: 'Orthographe et syntaxe : Dérivation, on/ont, nu/demi/mi/semi, adjectif verbal vs participe présent, adverbes en -ment et complétives',
    objectifs: [
      'Maîtriser la formation des mots par dérivation (préfixes privatifs, répétitifs, réciproques et suffixes)',
      'Distinguer sans erreur les homophones grammaticaux on (pronom sujet remplaçable par il/l\'homme) et ont (verbe avoir remplaçable par avaient)',
      'Appliquer les règles d\'accord et de trait d\'union pour nu, demi, mi et semi',
      'Distinguer l\'adjectif verbal (variable en genre et en nombre) du participe présent en -ant (invariable)',
      'Former les adverbes en -ment à partir des adjectifs (règles régulières, en -ant/-ent, exceptions)',
      'Identifier et employer les propositions subordonnées complétives (conjonctives en que, interrogatives en si, infinitives)'
    ],
    fullCourseContent: `1. Formation des mots par dérivation :
La dérivation consiste à créer de nouveaux mots à partir d'un radical en lui ajoutant des affixes :
- Les Préfixes (placés avant le radical) : Modifient le sens sans changer la classe grammaticale :
  * Préfixes privatifs ou de sens contraire : dé-, dés-, in-, im-, ir-, il- (sensible -> insensible ; faire -> défaire ; responsable -> irresponsable).
  * Préfixes de répétition : re-, ré-, r- (construire -> reconstruire ; ouvrir -> rouvrir).
  * Préfixe réciproque : entre-, s'entr- (s'entraider, s'entretuer).
- Les Suffixes (placés après le radical) : Modifient souvent la classe grammaticale :
  * Pour former des verbes à partir de noms ou d'adjectifs : -er, -ir, -ifier, -iser (solide -> solidifier ; goût -> goûter ; grand -> grandir).
  * Diminutifs ou péjoratifs : vivre -> vivoter ; chantonner.

2. Distinction des homophones ON et ONT :
- "ON" : Pronom indéfini de la 3ème personne du singulier, toujours sujet d'un verbe.
  Astuce de vérification : On peut le remplacer par "il" ou "l'homme" ("On part" -> "Il part").
- "ONT" : Forme du verbe (ou auxiliaire) AVOIR à la 3ème personne du pluriel du présent de l'indicatif.
  Astuce de vérification : On peut le remplacer par l'imparfait "avaient" ("Ils ont faim" -> "Ils avaient faim").

3. Orthographe de NU, DEMI, MI, SEMI :
- "NU" et "DEMI" placés AVANT le nom :
  Ils sont strictement INVARIABLES et reliés au nom par un trait d'union :
  Exemples : "Marcher nu-pieds", "Une demi-heure", "Des demi-litres".
- "NU" et "DEMI" placés APRÈS le nom :
  Ils s'accordent avec le nom :
  * "Nu" s'accorde en genre et en nombre : "Les pieds nus", "Les jambes nues".
  * "Demi" s'accorde UNIQUEMENT en genre (reste toujours au singulier) : "Deux heures et demie" (féminin singulier), "Trois jours et demi" (masculin singulier).
- "MI" et "SEMI" :
  Toujours INVARIABLES et toujours suivis d'un trait d'union :
  Exemples : "À mi-chemin", "La mi-septembre", "Une visite semi-officielle", "Un établissement semi-privé".

4. Distinction entre Adjectif verbal et Participe présent :
- Le Participe présent : Mode impersonnel du verbe exprimant une action en cours. Il se termine toujours par -ANT et reste STRICTEMENT INVARIABLE. Il peut recevoir des compléments d'objet ou circonstanciels.
  Exemple : "Le piroguier, naviguant entre les palétuviers, dirigeait sa pirogue."
- L'Adjectif verbal : Adjectif qualificatif dérivé d'un verbe exprimant un état ou une qualité. Il S'ACCORDE en genre et en nombre avec le nom qu'il qualifie.
  Exemple : "Le personnel navigant est en grève", "Une eau bouillante", "Des paroles blessantes".
- Différences orthographiques fréquentes :
  * Participe présent : adhérant, communicant, convainquant, différant, excellant, fatiguant, négligeant, précédant.
  * Adjectif verbal : adhérent, communicatif, convaincant, différent, excellent, fatigant, négligent, précédent.

5. Degrés de signification de l'adjectif (Comparatif et Superlatif) :
- Comparatifs réguliers :
  * De supériorité : plus... que ("Il est plus âgé que Paul").
  * D'égalité : aussi... que ("Elle est aussi courageuse que lui").
  * D'infériorité : moins... que ("Ce sac est moins lourd que le vôtre").
- Superlatifs réguliers :
  * Relatif de supériorité / infériorité : le plus / le moins ("Le plus grand de la classe").
  * Absolu : très, fort, bien, extrêmement ("Une ville extrêmement animée").
- Comparatifs et superlatifs irréguliers (INDISPENSABLES) :
  * Bon -> Comparatif : Meilleur (ne jamais dire *plus bon) | Superlatif : Le meilleur.
  * Mauvais -> Comparatif : Pire (ou plus mauvais) | Superlatif : Le pire.
  * Petit (abstrait/degré) -> Comparatif : Moindre (ou plus petit pour la taille) | Superlatif : Le moindre ("La moindre des choses").

6. Formation des adverbes en -MENT :
- Règle 1 (Générale) : On prend le féminin de l'adjectif et on ajoute -ment :
  doux -> douce -> doucement ; franc -> franche -> franchement ; heureux -> heureusement.
- Règle 2 (Adjectif terminé par une voyelle au masculin) : On ajoute directement -ment au masculin :
  vrai -> vraiment ; poli -> poliment ; infini -> infiniment ; résolu -> résolument.
  (Exceptions avec accent circonflexe : assidûment, continûment, crûment, dûment).
- Règle 3 (Adjectifs en -ANT et -ENT) :
  * Adjectifs en -ANT forment leur adverbe en -AMMENT (se prononce "ament") :
    méchant -> méchamment ; bruyant -> bruyamment ; galant -> galamment.
  * Adjectifs en -ENT forment leur adverbe en -EMMENT (se prononce "ament") :
    prudent -> prudemment ; innocent -> innocemment ; violent -> violemment.
  * Exceptions régulières sur le féminin : lent -> lentement ; présent -> présentement.

7. Les propositions subordonnées complétives :
La complétive est une proposition qui complète le verbe de la proposition principale (fonction COD ou COI). Elle ne peut être ni supprimée ni déplacée.
- La complétive conjonctive : Introduite par "que", "à ce que" ou "de ce que" :
  Exemple : "Le maître exige que les élèves terminent leur exercice", "Il veille à ce que personne ne triche", "Ils s'inquiètent de ce qu'il tarde."
- La complétive interrogative indirecte : Introduite après un verbe de demande ou d'ignorance (demander, ignorer, savoir) par "si", "ce que", "qui" :
  Exemple : "Je vous demande si vous avez bien compris la leçon."
- La complétive infinitive : Comporte un verbe à l'infinitif ayant son propre sujet distinct du sujet principal (après les verbes de perception : entendre, voir, écouter) :
  Exemple : "J'entends les oiseaux chanter sous le vent."`,
    definitions: [
      {
        term: 'Adjectif verbal',
        definition: 'Forme en -ant accordée en genre et en nombre exprimant une qualité durable.'
      },
      {
        term: 'Participe présent',
        definition: 'Forme verbale invariable en -ant exprimant une action en train de se dérouler.'
      },
      {
        term: 'Subordonnée complétive',
        definition: 'Proposition indispensable au sens occupant la fonction de complément d\'objet du verbe principal.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des adverbes en -amment et -emment',
        statement: 'Adjectif en -ant donne adverbe en -amment ; adjectif en -ent donne adverbe en -emment.'
      },
      {
        name: 'Règle de demi',
        statement: 'Demi placé devant le nom est invariable avec trait d\'union (une demi-heure) ; placé après, il s\'accorde en genre seulement (deux heures et demie).'
      }
    ],
    formulas: [
      {
        name: 'Formation des adverbes en -ment',
        formula: '\\text{Adjectif en -ent} \\to -emment \\quad | \\quad \\text{Adjectif en -ant} \\to -amment',
        explanation: 'Pour les autres adjectifs, on ajoute -ment au féminin (ou au masculin si terminé par une voyelle).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir entre Participe présent et Adjectif verbal',
        procedure: '1. Regarder si le mot est suivi d\'un COD ou d\'un complément circonstanciel (indiquant une action) -> Participe présent INVARIABLE en -ant. 2. Regarder si le mot qualifie simplement le nom comme un adjectif qualificatif ordinaire (on peut le remplacer par un autre adjectif comme "calme") -> Adjectif verbal VARIABLE qui s\'accorde.',
        tip: 'Le participe présent exprime une action, l\'adjectif verbal exprime un état.'
      }
    ],
    examples: [
      {
        statement: 'Orthographie correctement les adverbes dérivés de : prudent, méchant, vrai, énorme, lent.',
        solution: `- prudent (en -ent) -> prudemment.
- méchant (en -ant) -> méchamment.
- vrai (terminé par une voyelle) -> vraiment.
- énorme -> énormément.
- lent (exception régulière) -> lentement.`
      }
    ],
    exercises: [
      {
        question: 'Complète par "on" ou "ont" : ".... leur a distribué des livres qu\'ils .... lus attentivement."',
        correction: 'On écrit : "On leur a distribué des livres qu\'ils ont lus attentivement." (On = remplaçable par il ; ont = verbe avoir remplaçable par avaient).'
      }
    ],
    evaluationSituation: {
      context: 'Dans une dictée, tu dois corriger les erreurs de ton camarade : "Les infirmières marchaient nu-pieds. Elles étaient (fatiguant) et parlaient (violent-ment). On leur a dit que c\'était la (plus petite) des attentions."',
      instructions: [
        '1. Justifie l\'orthographe de "nu-pieds".',
        '2. Corrige les fautes sur l\'adjectif verbal, l\'adverbe et le comparatif irrégulier.'
      ],
      solutionGuide: '1. "nu-pieds" : placé avant le nom, nu est invariable et lié par un trait d\'union (correct). 2. Corrections : "fatigantes" (adjectif verbal accordé au féminin pluriel) ; "violemment" (adjectif violent en -ent donne -emment) ; "la moindre des attentions" (superlatif irrégulier de petit au sens figuré).'
    },
    examTraps: [
      'Écrire *prudamment au lieu de prudemment (car prudent se termine par -ent).',
      'Accorder demi au pluriel (*trois heures et demies est faux, écrire trois heures et demie).',
      'Dire *plus bon au lieu de meilleur, ou *le plus mauvais au lieu de le pire.'
    ],
    quickMemo: 'On = il / Ont = avaient | Nu/demi avant nom = invariable avec trait d\'union | Demi après = accord en genre seulement | -ant -> -amment / -ent -> -emment | Bon -> meilleur / Mauvais -> pire.',
    keywords: ['dérivation', 'homophones on ont', 'nu demi mi semi', 'participe présent', 'adjectif verbal', 'adverbes en ment', 'subordonnée complétive']
  }
];
