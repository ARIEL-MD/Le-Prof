import { CourseConceptFormula, CourseMethodStep, CourseSearchResult, DisciplineType } from '../types';

export interface AuthorProfileData {
  id: string;
  name: string;
  aliases: string[];
  discipline: DisciplineType;
  disciplineLabel: string;
  cycle: 'second_cycle_bac' | 'premier_cycle_bepc';
  level: string;
  levelLabel: string;
  chapterTitle: string;
  definitionAndScope: string;
  coreConceptsAndFormulas: CourseConceptFormula[];
  stepByStepMethod: CourseMethodStep[];
  solvedExample: {
    problemStatement: string;
    solutionStepByStep: string;
    finalAnswer: string;
  };
  classicExamTraps: string[];
  selfCheckChecklist: string[];
  quickRevisionMemo: string;
  certificationNote: string;
}

export const CANONICAL_AUTHORS: AuthorProfileData[] = [
  {
    id: "platon",
    name: "Platon",
    aliases: ["platon", "plato", "aristocle"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Platon (Biographie, Théorie des Idées, Caverne & Citations)",
    definitionAndScope: "Platon (Athènes, v. 428/427 – v. 348/347 av. J.-C.) est l'un des pères fondateurs de la philosophie occidentale. Disciple direct de Socrate, maître d'Aristote et fondateur de l'Académie d'Athènes (la première institution d'enseignement supérieur du monde antique), Platon a rédigé son œuvre sous forme de dialogues vivants mettant en scène Socrate face aux sophistes.\n\nSa pensée s'articule autour de l'Idéalisme : le monde sensible dans lequel nous vivons n'est qu'une copie imparfaite et changeante du Monde intelligible (le monde des Idées ou Formes pures, parfaites et immuables), dont le sommet est l'Idée du Bien. Pour Platon, la philosophie est une démarche de libération de l'âme tournée vers la vérité, la justice et la vertu morale.",
    coreConceptsAndFormulas: [
      {
        name: "1. La Théorie des Idées (ou Formes Intelligibles) — Le Dualisme Platonicien",
        formulaOrRule: "Monde Sensible (copies trompeuses, doxa/opinion) ≠ Monde Intelligible (vérité éternelle, épistémè/science).",
        explanation: "Platon sépare le réel en deux ordres : le monde sensible, perçu par les sens corporels, caractérisé par le changement, l'imperfection et l'illusion ; et le monde intelligible, accessible par la seule raison (noûs), abritant les Idées éternelles et parfaites (le Beau en soi, le Juste en soi, le Bien).",
        contextOrApplication: "À mobiliser dans les sujets sur : La Vérité, La Science, L'Art (pourquoi Platon dévalorise l'art comme copie de copie) et La Conscience."
      },
      {
        name: "2. L'Allégorie de la Caverne (La République, Livre VII)",
        formulaOrRule: "« Les hommes sont comme des prisonniers enchaînés dans une caverne sombre, prenant les ombres projetées pour la vérité. »",
        explanation: "Cette allégorie illustre la condition de l'humanité ignorante. Les chaînes représentent les préjugés et les illusions sensibles. La montée vers la sortie et la lumière éblouissante du Soleil (l'Idée du Bien) symbolise l'ascension philosophique et éducative (paideia). Le philosophe libéré a le devoir éthique de redescendre dans la caverne pour guider ses concitoyens.",
        contextOrApplication: "Fondement de l'émancipation par le savoir, la critique de l'opinion vulgaire et la mission politique du philosophe."
      },
      {
        name: "3. La Réminiscence — Connaître, c'est se ressouvenir (Ménon & Phédon)",
        formulaOrRule: "« Connaître n'est pas acquérir un savoir étranger, c'est se ressouvenir des vérités que l'âme a contemplées avant d'entrer dans le corps. »",
        explanation: "L'âme étant immortelle, elle a contemplé les Formes intelligibles dans l'au-delà avant de s'incarner. L'apprentissage n'est donc pas une greffe extérieure, mais le réveil des vérités enfouies en nous, facilité par le questionnement maïeutique.",
        contextOrApplication: "Sujets sur : L'Apprentissage, La Mémoire, La Conscience, L'Innéisme et L'Éducation."
      },
      {
        name: "4. La Cité Idéale et le Roi-Philosophe (La République)",
        formulaOrRule: "« Tant que les philosophes ne seront pas rois, ou que les rois ne philosopheront pas [...], il n'y aura point de trêve aux maux des cités. »",
        explanation: "Platon conçoit une cité juste fondée sur la division tripartite harmonieuse : les gouvernants-philosophes (guidés par la sagesse), les guerriers-gardiennes (guidés par le courage) et les artisans-producteurs (guidés par la tempérance). La justice est la vertu où chaque classe accomplit son rôle sans empiéter sur autrui.",
        contextOrApplication: "Sujets sur : Le Pouvoir politique, La Justice, L'État, La Loi et La Société."
      },
      {
        name: "5. L'Âme Tripartite (Noûs, Thumos, Épithumia)",
        formulaOrRule: "L'Âme = La Raison (Noûs) + Le Courage/Cœur (Thumos) + Les Désirs/Appétits sensibles (Épithumia).",
        explanation: "Dans Phèdre (le mythe de l'attelage ailé), l'attelage est conduit par le cocher (la raison) qui tente d'harmoniser un cheval noble (le courage) et un cheval rétif (les pulsions corporelles). L'homme juste est celui chez qui la raison gouverne souverainement.",
        contextOrApplication: "Sujets sur : Le Désir, La Morale, La Conscience et La Maîtrise de soi."
      },
      {
        name: "6. Corpus de Citations Clés Authentiques de Platon",
        formulaOrRule: "• « Une vie sans examen ne vaut pas la peine d'être vécue. » (Apologie de Socrate)\n• « Le corps est le tombeau de l'âme (Sôma Sêma). » (Gorgias & Phédon)\n• « Nul n'est méchant volontairement. » (Protagoras / Gorgias)\n• « L'amour est désir de ce qu'on n'a pas, de ce qu'on n'est pas et de ce dont on manque. » (Le Banquet)",
        explanation: "Citations fondamentales à citer rigoureusement avec le dialogue de référence pour appuyer tout paragraphe de dissertation.",
        contextOrApplication: "Références indispensables pour les épreuves du Baccalauréat."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Situer le dialogue et la problématique platonicienne",
        whatToDo: "Toujours préciser le dialogue source de Platon (La République pour la justice/l'État, Le Banquet pour le désir/amour, Ménon/Phédon pour la connaissance et l'immortalité de l'âme, Gorgias pour la rhétorique et la justice).",
        reflexOrTip: "Ne réduisez jamais la pensée de Platon à un dogme rigide : ses œuvres sont des dialogues dialectiques vivants."
      },
      {
        stepNumber: 2,
        title: "Articuler l'opposition Sensible vs Intelligible",
        whatToDo: "Face à un sujet sur la vérité, la science ou les apparences, appliquez le dualisme platonicien pour dépasser l'illusion de l'opinion (doxa) vers l'Idée véritable (épistémè).",
        reflexOrTip: "Mobilisez l'Allégorie de la caverne en respectant sa portée philosophique (l'effort de libération de la conscience par l'éducation)."
      },
      {
        stepNumber: 3,
        title: "Exploiter la citation dans la chaîne argumentative",
        whatToDo: "Appliquez la règle : Argument rédigé -> Citation exacte de Platon -> Explication conceptuelle du dialogue.",
        reflexOrTip: "Montrez comment la thèse de Platon résout le problème posé par le sujet de dissertation."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Baccalauréat : « Les sens suffisent-ils à nous faire connaître la vérité ? »",
      solutionStepByStep: "1. Thèse d'ouverture : Les sens nous fournissent un premier contact avec les choses matérielles, mais chez Platon, le monde sensible est frappé de devenir et d'imperfection. Les sens ne produisent que l'opinion instable (doxa).\n2. Argumentation avec Platon : Dans l'Allégorie de la caverne (La République, Livre VII), les prisonniers se fient à leurs yeux et oreilles pour juger des ombres. Seule la démarche rationnelle (l'intellect / noûs) permet d'accéder aux vérités mathématiques et aux Idées pures.\n3. Conclusion dialectique : La connaissance véritable exige un détachement de la perception sensible au profit de la réflexion critique rationnelle.",
      finalAnswer: "Démonstration validée avec mobilisations rigoureuses des thèses platoniciennes (La République, Livre VII)."
    },
    classicExamTraps: [
      "Confondre l'« Idée » au sens platonicien avec une simple idée mentale subjective : chez Platon, l'Idée est une réalité objective supérieure et parfaite.",
      "Réduire l'amour platonicien à une relation chaste ou asexuée : dans Le Banquet, c'est l'élévation graduelle du beau sensible vers le Beau intelligible en soi.",
      "Oublier que Socrate est le personnage principal des écrits de Platon : Socrate n'a rien écrit lui-même, c'est Platon qui met en scène sa dialectique.",
      "Croire que Platon valorise les artistes : dans La République, il bannit les poètes imitateurs car ils éloignent de la vérité en produisant des copies d'ombres."
    ],
    selfCheckChecklist: [
      "Suis-je capable d'expliquer la différence entre monde sensible et monde intelligible ?",
      "Puis-je résumer les étapes de l'Allégorie de la caverne et sa signification ?",
      "Connais-je au moins 3 dialogues majeurs de Platon (La République, Le Banquet, Phédon) ?",
      "Sais-je citer la formule : « Connaître, c'est se ressouvenir » et son sens ?"
    ],
    quickRevisionMemo: "Mémo Platon : Philosophe athénien majeur (-428 / -348). Idéalisme : distinction Monde Sensible (illusions, doxa) vs Monde Intelligible (Idées éternelles, épistémè). Notions clés : Allégorie de la caverne, Réminiscence (« Connaître, c'est se ressouvenir »), Âme tripartite (Noûs, Thumos, Épithumia), Cité idéale gouvernée par le Roi-philosophe. Dialogues clés : La République, Le Banquet, Phédon, Apologie de Socrate.",
    certificationNote: "Fiche Auteur Officielle Certifiée conforme au programme de Philosophie du Baccalauréat."
  },
  {
    id: "socrate",
    name: "Socrate",
    aliases: ["socrate", "socrates"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Socrate (Maïeutique, Connais-toi toi-même, Procès & Citations)",
    definitionAndScope: "Socrate (Athènes, v. 470 – 399 av. J.-C.) est la figure inaugurale de la philosophie morale et critique. N'ayant laissé aucun écrit, sa pensée nous est principalement transmise par les dialogues de son disciple Platon et les écrits de Xénophon.\n\nSocrate a révolutionné la philosophie en délaissant la spéculation sur la nature pour s'interroger sur l'homme, la justice, le bien et la piété. Condamné à mort en 399 av. J.-C. pour impiété et prétendue corruption de la jeunesse athénienne, il préféra boire la ciguë plutôt que de trahir ses principes ou fuir la loi de sa cité.",
    coreConceptsAndFormulas: [
      {
        name: "1. L'Ironie Socratique et l'Aveu d'Ignorance",
        formulaOrRule: "« Tout ce que je sais, c'est que je ne sais rien. »",
        explanation: "Point de départ de toute démarche philosophique : reconnaître sa propre ignorance pour se débarrasser des faux savoirs et préjugés inculqués par la société et les sophistes.",
        contextOrApplication: "Notions : La Conscience, La Vérité, Le Doute et L'Esprit critique."
      },
      {
        name: "2. La Maïeutique — L'Art d'accoucher les âmes",
        formulaOrRule: "Comme sa mère Phénarète qui était sage-femme, Socrate pratique l'accouchement spirituel par le questionnement et le dialogue.",
        explanation: "Socrate n'enseigne pas une doctrine toute faite ; par un jeu d'interrogations précises, il amène son interlocuteur à découvrir par lui-même la vérité enfouie dans son propre esprit.",
        contextOrApplication: "Notions : Le Langage, Le Savoir, La Méthode dialectique et L'Éducation."
      },
      {
        name: "3. La Maxime Delphique — « Connais-toi toi-même »",
        formulaOrRule: "« Gnôthi seauton » (Inscrit au fronton du temple de Delphes)",
        explanation: "Appel à l'examen de conscience, à la lucidité morale et à la mesure de ses limites en tant qu'être mortel.",
        contextOrApplication: "Notions : La Conscience morale, L'Identité de soi et La Sagesse."
      },
      {
        name: "4. Le Primat de la Vertu et l'Intellectualisme Moral",
        formulaOrRule: "« Nul n'est méchant volontairement. »",
        explanation: "Pour Socrate, celui qui commet le mal se trompe sur son propre bien : le vice est le fruit de l'ignorance. Il vaut mieux subir l'injustice que la commettre.",
        contextOrApplication: "Notions : La Justice, Le Mal, La Morale, Le Devoir et La Responsabilité."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Mobiliser la méthode dialogique",
        whatToDo: "Utiliser Socrate pour problématiser une fausse évidence ou déconstruire les préjugés du sens commun dans l'amorce ou le premier axe.",
        reflexOrTip: "Précisez que Socrate n'a rien écrit et qu'on le connaît via Platon (Apologie de Socrate, Criton)."
      },
      {
        stepNumber: 2,
        title: "Appliquer l'adage moral socratique",
        whatToDo: "Face à une question de justice (« Vaut-il mieux commettre ou subir l'injustice ? »), invoquer Gorgias et le choix exemplaire de Socrate devant la mort.",
        reflexOrTip: "Montrez que pour Socrate, le souci de l'âme l'emporte sur la survie corporelle."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « L'erreur est-elle la preuve de notre faiblesse ou le moteur de notre savoir ? »",
      solutionStepByStep: "Socrate démontre qu'avouer son ignorance (« Je sais que je ne sais rien ») n'est pas une faiblesse stérile mais la condition sine qua non de toute vraie recherche philosophique.",
      finalAnswer: "Démonstration socratique conclue avec succès."
    },
    classicExamTraps: [
      "Attribuer des livres écrits à Socrate (il n'a rien écrit de sa main).",
      "Confondre Socrate avec les sophistes : Socrate ne demandait jamais d'argent et recherchait la vérité universelle, pas la persuasion rhétorique."
    ],
    selfCheckChecklist: [
      "Puis-je définir la maïeutique et l'ironie socratique ?",
      "Sais-je expliquer la formule « Nul n'est méchant volontairement » ?",
      "Connais-je les motifs du procès de Socrate ?"
    ],
    quickRevisionMemo: "Mémo Socrate : Philosophe grec antique (-470 / -399). N'a rien écrit. Maïeutique (art d'accoucher les esprits), « Je sais que je ne sais rien », « Connais-toi toi-même », intellectualisme moral (« Nul n'est méchant volontairement »). Mort martyr de la philosophie en buvant la ciguë.",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "aristote",
    name: "Aristote",
    aliases: ["aristote", "aristotle"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Aristote (L'Animal Politique, Juste Milieu, 4 Causes & Citations)",
    definitionAndScope: "Aristote (Stagire, 384 – Chalcis, 322 av. J.-C.) est l'élève de Platon à l'Académie, précepteur d'Alexandre le Grand et fondateur du Lycée. Figure universelle du savoir antique, il a fondé la logique formelle (syllogismes), la biologie, la zoologie, et a profondément repensé l'éthique et la politique.\n\nContre l'idéalisme platonicien qui séparait les Idées du monde sensible, Aristote adopte une approche réaliste et immanente : les formes des choses sont incarnées dans la matière même. Pour Aristote, toute chose a une finalité naturelle (téléologie), et le souverain bien de l'homme est le bonheur (l'eudaimonia) par la vertu.",
    coreConceptsAndFormulas: [
      {
        name: "1. « L'homme est un animal politique par nature » (La Politique)",
        formulaOrRule: "« Zôon politikon » — Celui qui ne peut vivre en société est soit une bête brute, soit un dieu.",
        explanation: "L'être humain ne peut réaliser son humanité et son bonheur que dans le cadre de la Cité (polis), car la nature l'a pourvu du langage (logos) pour distinguer le juste de l'injuste.",
        contextOrApplication: "Sujets : L'État, La Société, Le Langage et La Politique."
      },
      {
        name: "2. L'Éthique du Juste Milieu (Éthique à Nicomaque)",
        formulaOrRule: "La vertu est un juste milieu équilibré entre deux extrêmes vicieux (l'excès et le défaut).",
        explanation: "Exemple : le courage est le juste milieu entre la lâcheté (défaut de courage) et la témérité aveugle (excès d'audace). La vertu s'acquiert par l'habitude et la prudence (phronésis).",
        contextOrApplication: "Sujets : La Morale, Le Devoir, Le Bonheur et La Liberté."
      },
      {
        name: "3. La Théorie des Quatre Causes et la Téléologie",
        formulaOrRule: "Cause matérielle (de quoi c'est fait) + Cause formelle (sa structure) + Cause efficiente (qui l'a fait) + Cause finale (son but/télos).",
        explanation: "La nature ne fait rien en vain : tout être tend vers l'accomplissement de sa propre fin.",
        contextOrApplication: "Sujets : La Nature, La Technique, Le Travail et La Science."
      },
      {
        name: "4. L'Équité comme Rectification de la Loi Rigide",
        formulaOrRule: "« L'équitable, tout en étant juste, est supérieur au juste légal, car il en est le correctif. »",
        explanation: "La loi étant générale, elle ne peut prévoir tous les cas particuliers : le juge équitable doit assouplir la lettre de la loi pour en préserver l'esprit.",
        contextOrApplication: "Sujets : La Justice, Le Droit et La Loi."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Définir la nature sociale de l'homme",
        whatToDo: "Opposer la thèse aristotélicienne (la société est naturelle à l'homme) aux théoriciens du contrat social (Hobbes, Rousseau) qui pensent un état de nature pré-social.",
        reflexOrTip: "Mentionnez le concept grec de 'Zôon politikon' et le don du logos."
      },
      {
        stepNumber: 2,
        title: "Mobiliser la justice distributive et commutative",
        whatToDo: "Distinguer l'égalité arithmétique (rendre à chacun la même chose) de l'équité proportionnelle (rendre à chacun selon son mérite).",
        reflexOrTip: "Citez l'Éthique à Nicomaque, Livre V."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « L'État est-il contre nature ? »",
      solutionStepByStep: "Pour Aristote, l'État est au contraire l'accomplissement le plus parfait de la nature humaine, car l'homme est par essence un animal politique qui ne s'accomplit que dans la Cité.",
      finalAnswer: "Problème résolu selon l'argumentation d'Aristote."
    },
    classicExamTraps: [
      "Croire qu'Aristote rejette la science empirique : il est au contraire l'un des premiers grands observateurs empiriques de la nature.",
      "Confondre égalité stricte et équité chez Aristote."
    ],
    selfCheckChecklist: [
      "Sais-je expliquer pourquoi l'homme est un animal politique ?",
      "Puis-je citer la formule du juste milieu et donner un exemple ?",
      "Sais-je définir l'équité par rapport à la loi légale ?"
    ],
    quickRevisionMemo: "Mémo Aristote : Philosophe grec (-384 / -322). Réalisme, élève de Platon. Notions clés : 'L'homme est un animal politique', éthique du juste milieu (Éthique à Nicomaque), distinction égalité/équité, théorie des 4 causes, le bonheur par la vertu.",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "descartes",
    name: "René Descartes",
    aliases: ["descartes", "rene descartes"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : René Descartes (Doute, Cogito, Maîtres de la Nature & Citations)",
    definitionAndScope: "René Descartes (1596-1650) est le père de la philosophie moderne et du rationalisme classique. Mathématicien génial (inventeur de la géométrie analytique), il a cherché à refonder l'édifice de toutes les connaissances humaines sur des certitudes inébranlables, à l'image des démonstrations mathématiques.\n\nDans le Discours de la méthode (1637) et les Méditations métaphysiques (1641), il met en œuvre le doute méthodique radical pour déraciner toutes les fausses opinions, parvenant à la première certitude absolue : le « Cogito » (Je pense, donc je suis). Sa philosophie affirme le dualisme entre la substance pensante (l'âme) et la substance étendue (le corps/la matière), ouvrant la voie à la science moderne.",
    coreConceptsAndFormulas: [
      {
        name: "1. Le Doute Méthodique et Hyperbolique",
        formulaOrRule: "Douter de tout (sens trompeurs, songes, illusions, hypothèse du malin génie) pour trouver l'indubitable.",
        explanation: "Le doute cartésien n'est pas le scepticisme désespéré : c'est un outil volontaire et provisoire pour éliminer l'incertain et atteindre le roc de la certitude.",
        contextOrApplication: "Sujets : La Vérité, La Raison, La Science et La Conscience."
      },
      {
        name: "2. Le Cogito — Première Certitude Métaphysique",
        formulaOrRule: "« Cogito, ergo sum » — « Je pense, donc je suis. » (Discours de la méthode)",
        explanation: "Même si un malin génie me trompe sur tout, pour être trompé, il faut nécessairement que je sois quelque chose qui pense. L'acte même de douter prouve l'existence de la pensée.",
        contextOrApplication: "Fondement moderne du sujet conscient, autonome et réflexif."
      },
      {
        name: "3. Comme Maîtres et Possesseurs de la Nature",
        formulaOrRule: "« Se rendre comme maîtres et possesseurs de la nature » (Discours de la méthode, 6e partie)",
        explanation: "Remplacer la philosophie spéculative des écoles par une philosophie pratique permettant, grâce à la technique et à la médecine, d'améliorer la condition matérielle humaine.",
        contextOrApplication: "Sujets : Le Travail, La Technique, La Science et La Nature."
      },
      {
        name: "4. Le Vivre sans philosopher",
        formulaOrRule: "« C'est proprement avoir les yeux fermés, sans jamais tâcher de les ouvrir, que de vivre sans philosopher. »",
        explanation: "La philosophie est la lucidité fondamentale de l'homme, racine de l'arbre des savoirs (racines = métaphysique, tronc = physique, branches = médecine, mécanique, morale).",
        contextOrApplication: "Sujets : L'Utilité de la philosophie, La Lucidité et Le Sens de la vie."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Fonder la conscience sur le Cogito",
        whatToDo: "Face à un sujet sur la conscience ou la vérité, mobiliser les Méditations pour montrer comment la conscience de soi résiste au doute le plus extrême.",
        reflexOrTip: "Distinguez bien le doute méthodique constructif du doute sceptique nihiliste."
      },
      {
        stepNumber: 2,
        title: "Nuancer la domination de la nature",
        whatToDo: "Rappeler le mot 'comme' dans 'comme maîtres et possesseurs' : Descartes n'appelle pas au saccage de la terre mais à son aménagement rationnel pour le soulagement de l'humanité.",
        reflexOrTip: "À confronter aux thèses écologiques modernes (Jonas, Serres)."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « Suis-je ce que j'ai conscience d'être ? »",
      solutionStepByStep: "Chez Descartes, la conscience est transparente à elle-même : l'âme se saisit immédiatement comme substance pensante dans l'acte du Cogito.",
      finalAnswer: "Démonstration validée avec références cartésiennes précises."
    },
    classicExamTraps: [
      "Oublier que le doute cartésien est provisoire et constructif.",
      "Croire que le Cogito est une déduction logique : c'est une intuition immédiate de l'esprit.",
      "Oublier le dualisme âme/corps (l'âme est distincte du corps)."
    ],
    selfCheckChecklist: [
      "Puis-je formuler les 4 règles de la méthode cartésienne ?",
      "Sais-je expliquer pourquoi le doute aboutit au Cogito ?",
      "Connais-je l'image de l'arbre de la philosophie selon Descartes ?"
    ],
    quickRevisionMemo: "Mémo Descartes : Philosophe français (1596-1650). Rationalisme. Notions clés : Doute méthodique, Cogito (« Je pense, donc je suis »), dualisme âme-corps, projet technique (« comme maîtres et possesseurs de la nature »). Ouvrages : Discours de la méthode (1637), Méditations métaphysiques (1641).",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "rousseau",
    name: "Jean-Jacques Rousseau",
    aliases: ["rousseau", "jean jacques rousseau"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Rousseau (Contrat Social, État de Nature, Liberté & Citations)",
    definitionAndScope: "Jean-Jacques Rousseau (Genève, 1712 – Ermenonville, 1778) est l'un des plus grands penseurs des Lumières, auteur du Contrat social, de l'Émile et du Discours sur l'origine et les fondements de l'inégalité parmi les hommes.\n\nSa thèse centrale affirme que « l'homme naît naturellement bon, mais que la société le déprave ». L'inégalité et le malheur humain sont nés de l'apparition de la propriété privée (« Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est à moi... »). Pour restaurer la liberté sans revenir à l'état sauvage impossible, Rousseau théorise le pacte social légitime où chaque citoyen s'unit à tous sous la conduite de la Volonté Générale.",
    coreConceptsAndFormulas: [
      {
        name: "1. L'État de Nature et la Bonté Originelle",
        formulaOrRule: "L'homme naturel est guidé par l'amour de soi (conservation de sa vie) et la pitié naturelle (répugnance innée à voir souffrir son semblable).",
        explanation: "Contre Hobbes qui prétend que l'homme est un loup pour l'homme, Rousseau affirme que la méchanceté n'est pas naturelle mais le produit des rivalités sociales et de la vanité (l'amour-propre).",
        contextOrApplication: "Sujets : La Nature humaine, La Société, L'Origine du mal et La Morale."
      },
      {
        name: "2. Le Contrat Social et la Volonté Générale",
        formulaOrRule: "« Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale. »",
        explanation: "En cédant ses droits non pas à un maître extérieur, mais à la communauté entière dont il est membre souverain, l'homme ne perd rien : en obéissant à la loi qu'il s'est prescrite, il demeure aussi libre qu'auparavant.",
        contextOrApplication: "Sujets : La Liberté politique, La Loi, L'État, La Démocratie et La Justice."
      },
      {
        name: "3. La Définition de la Liberté Civile",
        formulaOrRule: "« L'obéissance à la loi qu'on s'est prescrite est liberté. » (Du contrat social)",
        explanation: "La vraie liberté n'est pas la licence de faire n'importe quel caprice animal, mais l'autonomie rationnelle : respecter la loi commune voulue par l'intérêt général.",
        contextOrApplication: "Sujets : La Liberté, Le Devoir et La Loi."
      },
      {
        name: "4. La Conscience Morale Infaillible",
        formulaOrRule: "« Conscience ! Conscience ! Instinct divin, immortelle et céleste voix... » (Émile, Profession de foi)",
        explanation: "La conscience morale est en l'homme un guide intuitif du bien et du mal indépendant des subtilités philosophiques.",
        contextOrApplication: "Sujets : La Morale, Le Devoir et La Conscience."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Distinguer État de Nature et État Civil",
        whatToDo: "Expliquer que chez Rousseau, l'état de nature est une fiction méthodologique pour comprendre ce qui relève de la nature pure et ce qui provient de l'artifice social.",
        reflexOrTip: "Ne faites jamais dire à Rousseau qu'il faut retourner vivre dans les forêts !"
      },
      {
        stepNumber: 2,
        title: "Articuler Volonté Générale et Démocratie",
        whatToDo: "Montrer que la souveraineté appartient au Peuple et ne peut être aliénée ou représentée sans risque de tyrannie.",
        reflexOrTip: "Citez Du contrat social (1762)."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « Obéir aux lois, est-ce renoncer à sa liberté ? »",
      solutionStepByStep: "Selon Rousseau, obéir à la loi juste ne détruit pas la liberté, au contraire : « L'obéissance à la loi qu'on s'est prescrite est liberté ». Dans l'État de droit, la loi protège le citoyen contre l'arbitraire d'autrui.",
      finalAnswer: "Démonstration validée avec la théorie du Contrat Social."
    },
    classicExamTraps: [
      "Dire que Rousseau prône le 'retour à la nature sauvage' (contresens majeur dénoncé par Rousseau lui-même).",
      "Confondre la 'Volonté générale' (qui vise l'intérêt commun) avec la 'Volonté de tous' (simple somme des intérêts particuliers égoïstes)."
    ],
    selfCheckChecklist: [
      "Puis-je expliquer la distinction entre amour de soi et amour-propre ?",
      "Sais-je citer la formule : « L'obéissance à la loi qu'on s'est prescrite est liberté » ?",
      "Sais-je comment la propriété a engendré l'inégalité selon Rousseau ?"
    ],
    quickRevisionMemo: "Mémo Rousseau : Penseur genevois des Lumières (1712-1778). Notions clés : Bonté naturelle originelle corrompue par la société (« L'homme naît bon, c'est la société qui le corrompt »), Contrat social fondé sur la Volonté Générale, liberté comme autonomie (« L'obéissance à la loi qu'on s'est prescrite est liberté »), conscience morale innée.",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "kant",
    name: "Emmanuel Kant",
    aliases: ["kant", "emmanuel kant", "immanuel kant"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Kant (Impératif Catégorique, Devoir, Criticisme & Citations)",
    definitionAndScope: "Emmanuel Kant (Königsberg, 1724-1804) est le géant de la philosophie moderne allemande et l'artisan du criticisme. Réveillé de son « sommeil dogmatique » par Hume, il a accompli une « révolution copernicienne » en philosophie : ce ne sont plus nos connaissances qui se règlent sur les objets, mais les objets qui se règlent sur la structure de notre esprit (espace, temps, catégories de l'entendement).\n\nDans le domaine moral (Fondements de la métaphysique des mœurs, 1785), Kant fonde une éthique du devoir absolu (déontologie) : une action n'est authentiquement morale que si elle est accomplie « par pur devoir » et respect de la loi morale universelle, formulée dans l'Impératif Catégorique.",
    coreConceptsAndFormulas: [
      {
        name: "1. L'Impératif Catégorique vs L'Impératif Hypothétique",
        formulaOrRule: "1re formule : « Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle. »",
        explanation: "L'impératif hypothétique dépend d'un but intéressé (« si tu veux X, fais Y »). L'impératif catégorique commande sans condition (« Tu dois parce que tu dois »). C'est le test d'universalisation de la maxime de l'action.",
        contextOrApplication: "Sujets : La Morale, Le Devoir, La Liberté et L'Intention."
      },
      {
        name: "2. Le Respect de la Personne Humaine comme Fin en Soi",
        formulaOrRule: "2e formule : « Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans toute autre, toujours en même temps comme une fin, et jamais simplement comme un moyen. »",
        explanation: "Toute chose a un prix ; seul l'être humain possède une dignité inaliénable. Instrumentaliser autrui ou soi-même est une violation absolue de la loi morale.",
        contextOrApplication: "Fondement universel des Droits de l'Homme, de la bioéthique et du respect d'autrui."
      },
      {
        name: "3. La Révolution Copernicienne et Phénomène vs Noumène",
        formulaOrRule: "Nous ne connaissons du monde que les phénomènes (les choses telles qu'elles nous apparaissent à travers nos formes sensibles a priori), et non les noumènes (les choses en soi).",
        explanation: "La raison humaine a des limites infranchissables : les grandes questions métaphysiques (Dieu, l'immortalité de l'âme, le début du monde) ne peuvent être prouvées scientifiquement.",
        contextOrApplication: "Sujets : La Science, La Connaissance, La Vérité et La Religion."
      },
      {
        name: "4. Qu'est-ce que les Lumières ? — Ose penser par toi-même",
        formulaOrRule: "« Sapere aude ! Aie le courage de te servir de ton propre entendement ! Telle est la devise des Lumières. »",
        explanation: "Les Lumières sont la sortie de l'homme de son état de minorité intellectuelle dont il est lui-même responsable par paresse et lâcheté.",
        contextOrApplication: "Sujets : La Liberté de penser, L'Émancipation et La Philosophie."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Tester la moralité d'un acte avec le test d'universalisation",
        whatToDo: "Appliquer l'exemple kantien de la fausse promesse : si tout le monde mentait pour emprunter de l'argent, la notion même de promesse s'autodétruirait. Donc le mensonge est contraire au devoir moral absolu.",
        reflexOrTip: "Précisez que pour Kant, le devoir ne se négocie pas avec les circonstances ou les conséquences utiles."
      },
      {
        stepNumber: 2,
        title: "Distinguer le Prix de la Dignité",
        whatToDo: "Montrer que les marchandises ont un prix (équivalence marchande), mais l'être doué de raison possède une dignité absolue qui exclut tout calcul d'utilité.",
        reflexOrTip: "Invoquez les Fondements de la métaphysique des mœurs."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « La fin justifie-t-elle les moyens ? »",
      solutionStepByStep: "Pour Kant, la réponse est un NON catégorique. Aucun but noble ne peut justifier de traiter un être humain comme un simple moyen ou d'enfreindre la loi morale universelle.",
      finalAnswer: "Démonstration déontologique kantienne achevée."
    },
    classicExamTraps: [
      "Confondre agir 'conformément au devoir' (faire le bien par peur de la police ou pour être applaudi) et agir 'par devoir' (pureté désintéressée de l'intention).",
      "Croire que Kant rejette la science : il a au contraire consolidé les fondements épistémologiques de la physique de Newton."
    ],
    selfCheckChecklist: [
      "Puis-je formuler les deux énoncés de l'impératif catégorique ?",
      "Sais-je distinguer phénomène et noumène ?",
      "Puis-je citer la formule : « Sapere aude » et son sens ?"
    ],
    quickRevisionMemo: "Mémo Kant : Philosophe allemand (1724-1804). Criticisme et déontologie morale. Notions clés : Impératif catégorique universel (« Agis de telle sorte que... »), respect de la personne comme fin en soi (« Dignité vs Prix »), agir par pur devoir et non par intérêt, distinction Phénomène/Noumène, devise des Lumières (« Sapere aude »).",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "marx",
    name: "Karl Marx",
    aliases: ["marx", "karl marx"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Karl Marx (Matérialisme Historique, Aliénation, Travail & Citations)",
    definitionAndScope: "Karl Marx (Trèves, 1818 – Londres, 1883) est un philosophe, économiste et sociologue majeur, théoricien du matérialisme historique et critique fondamental du capitalisme industriel.\n\nRenversant la dialectique idéaliste de Hegel pour « la remettre sur ses pieds », Marx démontre que ce ne sont pas les idées ou la conscience des hommes qui déterminent leur existence matérielle, mais au contraire leurs conditions matérielles de production (l'infrastructure économique) qui déterminent leur conscience et leurs institutions juridiques, politiques et religieuses (la superstructure).",
    coreConceptsAndFormulas: [
      {
        name: "1. L'Aliénation du Travailleur dans le Système Capitaliste",
        formulaOrRule: "Dans le travail capitaliste, l'ouvrier est dépossédé de son produit, de son acte de travail, de sa nature humaine et de ses semblables.",
        explanation: "Alors que le travail devrait être l'activité libératrice par laquelle l'homme humanise la nature et exprime sa créativité, dans le salariat capitaliste il devient une corvée dégradante où l'ouvrier ne s'appartient plus.",
        contextOrApplication: "Sujets : Le Travail, La Technique, La Liberté et L'Économie."
      },
      {
        name: "2. Le Matérialisme Historique et la Lutte des Classes",
        formulaOrRule: "« L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de luttes de classes. » (Manifeste du parti communiste, 1848)",
        explanation: "Le moteur du devenir historique est l'antagonisme entre classes exploiteuses (qui possèdent les moyens de production) et classes exploitées (qui ne possèdent que leur force de travail).",
        contextOrApplication: "Sujets : L'Histoire, La Société, L'État et La Politique."
      },
      {
        name: "3. La Transformation du Monde vs L'Interprétation Spéculative",
        formulaOrRule: "« Les philosophes n'ont fait qu'interpréter le monde de diverses manières ; ce qui importe, c'est de le transformer. » (11e Thèse sur Feuerbach, 1845)",
        explanation: "La philosophie ne doit plus être un bavardage intellectuel contemplatif, mais une praxis révolutionnaire active qui renverse les dominations réelles.",
        contextOrApplication: "Sujets : Le Rôle de la philosophie, L'Action et La Théorie."
      },
      {
        name: "4. L'Idéologie et la Religion comme Opium du Peuple",
        formulaOrRule: "« La religion est l'opium du peuple. » (Critique de la philosophie du droit de Hegel)",
        explanation: "La religion et les idéologies dominantes consolent illusoirement les opprimés de leurs souffrances terrestres en leur promettant un bonheur céleste imaginaire, désamorçant ainsi la révolte.",
        contextOrApplication: "Sujets : La Religion, L'Illusion, L'Idéologie et La Société."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Distinguer Infrastructure et Superstructure",
        whatToDo: "Montrer comment les rapports de production économique conditionnent la morale, les lois et la culture dominante d'une époque.",
        reflexOrTip: "Citez la préface de la Critique de l'économie politique (1859)."
      },
      {
        stepNumber: 2,
        title: "Mobiliser la double face du travail",
        whatToDo: "Dans un sujet sur le travail : poser d'abord le travail comme essence de l'homme (anthropogenèse), puis mobiliser Marx pour montrer son inversion aliénante dans le capitalisme.",
        reflexOrTip: "Citez les Manuscrits de 1844."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « Le travail libère-t-il l'homme ou l'asservit-il ? »",
      solutionStepByStep: "Pour Marx, le travail est par essence libérateur car il arrache l'homme à l'animalité, mais sous le capitalisme, la division forcenée du travail et l'appropriation de la plus-value transforment le travail en pure aliénation.",
      finalAnswer: "Démonstration dialectique accomplie selon le cadre marxiste."
    },
    classicExamTraps: [
      "Réduire Marx à un simple slogan politique sans analyser ses concepts philosophiques précis (aliénation, fétichisme de la marchandise, praxis).",
      "Oublier que pour Marx, le travail est à l'origine la grandeur de l'homme avant d'être aliéné."
    ],
    selfCheckChecklist: [
      "Puis-je citer la 11e thèse sur Feuerbach ?",
      "Sais-je définir l'aliénation dans les Manuscrits de 1844 ?",
      "Puis-je expliquer la distinction infrastructure / superstructure ?"
    ],
    quickRevisionMemo: "Mémo Marx : Penseur allemand (1818-1883). Matérialisme historique. Notions clés : Lutte des classes comme moteur de l'histoire, Aliénation du travailleur (Manuscrits de 1844), transformation pratique du monde (« Les philosophes n'ont fait qu'interpréter... »), critique de la religion (« Opium du peuple »).",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    aliases: ["nietzsche", "friedrich nietzsche"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Friedrich Nietzsche (Volonté de Puissance, Mort de Dieu & Citations)",
    definitionAndScope: "Friedrich Nietzsche (Röcken, 1844 – Weimar, 1900) est le grand philosophe du soupçon et le dynamiteur des idoles métaphysiques. Philologue de formation, il diagnostique la crise profonde de la culture occidentale : le nihilisme issu du platonisme et du christianisme, qui ont déprécié le monde sensible et terrestre au profit d'arrières-mondes illusoires.\n\nÀ travers une écriture poétique et aphoristique étincelante (Ainsi parlait Zarathoustra, Par-delà bien et mal, Généalogie de la morale), Nietzsche célèbre la vie, l'affirmation dionysiaque, la volonté de puissance et le dépassement de l'homme vers le « Surhomme » capable d'aimer son destin (Amor fati).",
    coreConceptsAndFormulas: [
      {
        name: "1. La Mort de Dieu et le Nihilisme",
        formulaOrRule: "« Dieu est mort ! Dieu reste mort ! Et c'est nous qui l'avons tué ! » (Le Gai Savoir, § 125)",
        explanation: "Ce n'est pas un triomphe athée simpliste, mais le constat vertigineux de l'effondrement de toutes les valeurs absolues et repères métaphysiques qui structuraient l'Occident.",
        contextOrApplication: "Sujets : La Religion, La Vérité, Les Valeurs et Le Sens de l'existence."
      },
      {
        name: "2. La Morale des Maîtres vs La Morale des Esclaves (Le Ressentiment)",
        formulaOrRule: "La morale chrétienne du renoncement et de la pitié est née de la rancune des faibles et des impuissants contre la noblesse et l'énergie vitale des forts.",
        explanation: "Nietzsche pratique la généalogie des valeurs : toute valeur morale cache une pulsion psychologique sous-jacente. Il appelle à une 'transvaluation de toutes les valeurs'.",
        contextOrApplication: "Sujets : La Morale, Le Devoir, Le Bien et Le Mal."
      },
      {
        name: "3. La Volonté de Puissance et l'Amor Fati",
        formulaOrRule: "La volonté de puissance est l'élan fondamental de toute vie qui cherche à croître, à s'affirmer et à se dépasser elle-même.",
        explanation: "L'Amor fati est l'amour absolu de sa destinée, vouloir son existence telle qu'elle a été, sans regret, au point de souhaiter son Éternel Retour à l'identique.",
        contextOrApplication: "Sujets : Le Désir, La Volonté, La Liberté et Le Destin."
      },
      {
        name: "4. L'Apollinien et le Dionysiaque dans l'Art",
        formulaOrRule: "L'Art réconcilie l'ordre apollinien (mesure, clarté, forme plastique) et l'ivresse dionysiaque (puissance vitale, transe, chaos créateur).",
        explanation: "« Nous avons l'art afin de ne pas mourir de la vérité. » L'art justifie l'existence par-delà le bien et le mal.",
        contextOrApplication: "Sujets : L'Art, La Beauté, La Vérité et La Création."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Appliquer la méthode généalogique",
        whatToDo: "Ne pas demander 'Cette valeur est-elle vraie ?' mais 'Qui a intérêt à proclamer cette valeur ? Quel type d'homme parle à travers elle (le fort qui affirme ou le faible plein de ressentiment) ?'",
        reflexOrTip: "Citez La Généalogie de la morale (1887)."
      },
      {
        stepNumber: 2,
        title: "Citer l'adage artistique salvateur",
        whatToDo: "Dans une dissertation sur l'art, mobiliser l'adage : « Nous avons l'art afin de ne pas mourir de la vérité » pour montrer l'art comme célébration suprême de la vie.",
        reflexOrTip: "Distinguez l'artiste créateur du philosophe dogmatique."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « La morale nous rend-elle meilleurs ? »",
      solutionStepByStep: "Pour Nietzsche, la morale traditionnelle du devoir culpabilise l'homme, mutile ses instincts vitaux et produit des êtres rancuniers, loin d'ennoblir véritablement l'individu.",
      finalAnswer: "Démonstration nietzschéenne décapante complétée."
    },
    classicExamTraps: [
      "Confondre la 'volonté de puissance' avec la domination militaire brutale ou le fascisme (détournement perpétré par sa sœur et démenti par Nietzsche).",
      "Croire que le 'Surhomme' est un monstre biologique : c'est l'homme qui a surmonté le ressentiment et affirme joyeusement la vie."
    ],
    selfCheckChecklist: [
      "Sais-je expliquer le sens véritable de « Dieu est mort » ?",
      "Puis-je définir la morale du ressentiment ?",
      "Sais-je citer la formule sur l'art et la vérité ?"
    ],
    quickRevisionMemo: "Mémo Nietzsche : Philosophe allemand (1844-1900). Philosophie du marteau et du soupçon. Notions clés : Volonté de puissance, « Dieu est mort » (nihilisme), généalogie de la morale et ressentiment, l'art comme affirmation dionysiaque (« Nous avons l'art pour ne pas mourir de la vérité »), Amor fati.",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "freud",
    name: "Sigmund Freud",
    aliases: ["freud", "sigmund freud"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Sigmund Freud (Inconscient, Ça/Moi/Surmoi, Refoulement & Citations)",
    definitionAndScope: "Sigmund Freud (Vienne, 1856 – Londres, 1939) est le fondateur de la psychanalyse. Médecin neurologue de formation, il a infligé à l'amour-propre de l'humanité sa « troisième blessure narcissique » (après Copernic démontrant que la Terre n'est pas au centre de l'univers, et Darwin prouvant que l'homme descend de l'animal) : l'affirmation que « Le Moi n'est pas maître dans sa propre maison ».\n\nFreud démontre que la conscience ne représente que la partie émergée de l'iceberg psychique. Nos actes, désirs, lapsus, actes manqués, rêves et symptômes névrotiques sont gouvernés par des forces psychiques inconscientes refoulées, issues principalement des pulsions d'Éros (amour/vie) et Thanatos (destruction/mort).",
    coreConceptsAndFormulas: [
      {
        name: "1. La Découverte de l'Inconscient Psychique",
        formulaOrRule: "« Le psychisme ne se réduit pas à la conscience : l'inconscient est une instance active douée de ses lois propres. »",
        explanation: "Réfutation du cartésianisme : la conscience ne sait pas tout ce qui se passe en elle. Les contenus inacceptables pour la morale sociale sont rejetés hors de la conscience par le mécanisme du refoulement.",
        contextOrApplication: "Sujets : La Conscience, L'Inconscient, La Liberté et La Connaissance de soi."
      },
      {
        name: "2. La Deuxième Topique : Ça, Moi et Surmoi",
        formulaOrRule: "Ça (pulsions brutes et principe de plaisir) + Surmoi (intériorisation des interdits parentaux et sociaux) + Moi (arbitre négociateur et principe de réalité).",
        explanation: "Le Moi est constamment tiraillé entre les exigences pulsionnelles du Ça, les exigences morales culpabilisantes du Surmoi et les contraintes du monde extérieur réel.",
        contextOrApplication: "Sujets : La Morale, Le Désir, La Société et La Conscience."
      },
      {
        name: "3. Les Voies d'Accès à l'Inconscient : Rêves, Lapsus et Actes Manqués",
        formulaOrRule: "« Le rêve est la voie royale qui mène à la connaissance de l'inconscient. » (L'Interprétation du rêve, 1900)",
        explanation: "Durant le sommeil, la censure s'affaiblit : le désir refoulé s'exprime de façon déguisée sous forme de symboles oniriques.",
        contextOrApplication: "Sujets : Le Langage, Le Rêve, L'Art et La Vérité."
      },
      {
        name: "4. La Sublimation — Pulsions au service de la Culture",
        formulaOrRule: "La sublimation est la déviation de la pulsion sexuelle ou agressive vers des buts socialement valorisés (création artistique, recherche intellectuelle, sport).",
        explanation: "La civilisation repose sur le sacrifice et la canalisation des pulsions instinctives (Malaise dans la civilisation, 1930).",
        contextOrApplication: "Sujets : L'Art, Le Travail, La Culture et La Société."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Articuler la critique du Cogito cartésien",
        whatToDo: "Opposer l'illusion cartésienne de la transparence de la conscience à la réalité de l'inconscient freudien.",
        reflexOrTip: "Mobilisez la formule célèbre : « Le Moi n'est pas maître dans sa propre maison »."
      },
      {
        stepNumber: 2,
        title: "Nuancer la responsabilité morale",
        whatToDo: "Discuter les limites de l'inconscient face à la liberté : si l'inconscient explique nos failles, il ne doit pas servir d'alibi pour fuir notre responsabilité morale (critique de Sartre sur la mauvaise foi).",
        reflexOrTip: "Faire le lien entre psychanalyse (guérison par la parole) et liberté retrouvée (« Wo Es war, soll Ich werden » / « Là où était le Ça, le Moi doit advenir »)."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « L'inconscient est-il une excuse pour fuir nos devoirs ? »",
      solutionStepByStep: "Pour Freud, la prise de conscience psychanalytique vise précisément à libérer le patient de la répétition névrotique afin qu'il redevienne capable d'aimer, de travailler et d'agir de façon responsable.",
      finalAnswer: "Démonstration dialectique achevée confrontant Freud et Sartre."
    },
    classicExamTraps: [
      "Confondre l'inconscient (instance psychique active théorisée par Freud) avec le fait d'être étourdi ou évanoui.",
      "Croire que Freud justifie le déchaînement des pulsions animales : il affirme au contraire que la civilisation exige la maîtrise et la sublimation des pulsions."
    ],
    selfCheckChecklist: [
      "Puis-je citer la formule : « Le Moi n'est pas maître dans sa propre maison » ?",
      "Sais-je distinguer le Ça, le Moi et le Surmoi ?",
      "Puis-je définir la sublimation et le refoulement ?"
    ],
    quickRevisionMemo: "Mémo Freud : Médecin viennois (1856-1939), père de la psychanalyse. Notions clés : Découverte de l'inconscient psychique, 3e blessure narcissique (« Le Moi n'est pas maître dans sa propre maison »), 2e topique (Ça, Moi, Surmoi), refoulement, rêve comme voie royale, sublimation culturelle des pulsions.",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  },
  {
    id: "sartre",
    name: "Jean-Paul Sartre",
    aliases: ["sartre", "jean paul sartre"],
    discipline: "philo",
    disciplineLabel: "Philosophie (Terminale A, C, D)",
    cycle: "second_cycle_bac",
    level: "terminale",
    levelLabel: "Terminale (Toutes Séries)",
    chapterTitle: "Philosophie : Jean-Paul Sartre (Existentialisme, Liberté, Mauvaise Foi & Citations)",
    definitionAndScope: "Jean-Paul Sartre (Paris, 1905-1980) est le chef de file mondial de l'existentialisme athée, philosophe, dramaturge et romancier (prix Nobel de littérature 1964, qu'il refusa par cohérence avec ses principes). Dans L'Être et le Néant (1943) et L'Existentialisme est un humanisme (1946), il élabore une ontologie de la liberté humaine absolue.\n\nPour Sartre, chez l'homme et chez l'homme seul, « l'existence précède l'essence » : l'être humain n'est défini par aucune nature préétablie, aucun déterminisme biologique et aucun plan divin. Il surgit d'abord dans le monde, s'y définit par ses actes, et se trouve « condamné à être libre » et pleinement responsable de son destin.",
    coreConceptsAndFormulas: [
      {
        name: "1. L'Existence Précède l'Essence",
        formulaOrRule: "« L'homme existe d'abord, se rencontre, surgit dans le monde, et qu'il se définit après. » (L'Existentialisme est un humanisme)",
        explanation: "Un coupe-papier est conçu par un artisan selon une essence préalable. Mais l'homme n'a pas été créé selon un modèle : il est entièrement ce qu'il se fait par ses choix et ses engagements.",
        contextOrApplication: "Sujets : La Liberté, L'Identité, La Nature humaine et Le Destin."
      },
      {
        name: "2. « L'Homme est Condamné à Être Libre »",
        formulaOrRule: "« Condamné, parce qu'il ne s'est pas créé lui-même, et par ailleurs cependant libre, parce qu'une fois jeté dans le monde, il est responsable de tout ce qu'il fait. »",
        explanation: "Nous ne pouvons pas choisir de ne pas être libres : ne pas choisir est déjà un choix. La liberté engendre le vertige de l'angoisse devant notre responsabilité totale.",
        contextOrApplication: "Sujets : La Liberté, Le Choix, L'Angoisse et La Responsabilité."
      },
      {
        name: "3. La Mauvaise Foi — Le Mensonge à Soi-Même",
        formulaOrRule: "La mauvaise foi consiste à se faire passer pour une chose ou une victime impuissante afin d'esquiver le fardeau de sa propre liberté.",
        explanation: "Exemple sartrien du garçon de café qui joue trop parfaitement au garçon de café, ou de celui qui accuse son 'inconscient' ou son 'tempérament' pour excuser sa lâcheté.",
        contextOrApplication: "Sujets : La Morale, La Vérité, La Conscience et La Responsabilité."
      },
      {
        name: "4. Autrui et le Regard — « L'enfer, c'est les autres »",
        formulaOrRule: "« Autrui est le médiateur indispensable entre moi et moi-même. » / « L'enfer, c'est les autres. » (Huis Clos)",
        explanation: "Le regard d'autrui me fige en objet et m'enlève ma liberté souveraine (la honte sous le regard d'autrui). La formule de Huis Clos signifie que si nos rapports à autrui sont faussés par la dépendance du jugement d'autrui, autrui devient notre enfer.",
        contextOrApplication: "Sujets : Autrui, La Conscience, La Société et La Honte."
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: "Réfuter tout déterminisme fataliste",
        whatToDo: "Face à un sujet demandant si l'homme est prisonnier de son passé, de son éducation ou de sa génétique, appliquer la formule sartrienne : « L'important n'est pas ce qu'on a fait de nous, mais ce que nous faisons de ce qu'on a fait de nous. »",
        reflexOrTip: "Montrez que les déterminismes sont des 'situations' que la liberté doit transcender."
      },
      {
        stepNumber: 2,
        title: "Expliquer le sens exact de la formule de Huis Clos",
        whatToDo: "Clarifier que 'L'enfer, c'est les autres' ne veut pas dire qu'il faut haïr autrui, mais que vivre exclusivement dans l'attente du regard d'autrui aliène notre liberté.",
        reflexOrTip: "Citez la préface de l'enregistrement de Huis Clos (1965)."
      }
    ],
    solvedExample: {
      problemStatement: "Sujet type Bac : « Sommes-nous responsables de ce que nous sommes ? »",
      solutionStepByStep: "Pour Sartre, nous sommes totalement responsables de ce que nous sommes : toute tentative d'invoquer le destin, l'inconscient ou la fatalité relève de la mauvaise foi.",
      finalAnswer: "Démonstration existentialiste achevée avec rigueur conceptuelle."
    },
    classicExamTraps: [
      "Croire que 'L'enfer, c'est les autres' est un éloge de la misanthropie et de la solitude.",
      "Oublier que la liberté sartrienne n'est pas la toute-puissance de faire n'importe quoi : c'est la liberté engagée 'en situation'."
    ],
    selfCheckChecklist: [
      "Puis-je expliquer la distinction entre 'être-en-soi' et 'être-pour-soi' ?",
      "Sais-je définir la mauvaise foi avec l'exemple du garçon de café ?",
      "Puis-je citer la formule : « L'existence précède l'essence » ?"
    ],
    quickRevisionMemo: "Mémo Sartre : Philosophe français (1905-1980). Existentialisme athée. Notions clés : « L'existence précède l'essence », « L'homme est condamné à être libre », refus du déterminisme (« L'important n'est pas ce qu'on a fait de nous... »), la mauvaise foi, autrui et le regard (« L'enfer, c'est les autres »).",
    certificationNote: "Fiche Auteur Officielle Certifiée (Baccalauréat)."
  }
];

export function findCanonicalAuthor(query: string): AuthorProfileData | null {
  const norm = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // Extraction du nom de l'auteur si la requête commence par "qui est", "qui était", etc.
  const cleanedName = norm
    .replace(/^(?:qui\s+(?:est|etait|sont|fus|fut)|c['’]est\s+qui|biographie\s+de|vie\s+et\s+oeuvre\s+de|presentation\s+de|parle[- ]moi\s+de|fiche\s+sur|auteur|philosophe|penseur|savant)\s+/i, "")
    .replace(/^(?:sur|de|du|d')\s+/i, "")
    .trim();

  for (const author of CANONICAL_AUTHORS) {
    if (author.aliases.some(a => norm === a || cleanedName === a || norm.includes(a) || cleanedName.includes(a))) {
      return author;
    }
  }

  return null;
}
