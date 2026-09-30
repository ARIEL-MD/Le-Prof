import { DisciplineType, EducationCycle, SecondaryLevel, CourseConceptFormula, CourseMethodStep, CourseSolvedExample } from '../types';
import { stripAccentsLower, textContainsResemblingToken } from '../utils/fuzzyMatch';

export interface AcademicTopicKnowledge {
  id: string;
  queryKeywords: RegExp;
  discipline: DisciplineType;
  disciplineLabel: string;
  cycle: EducationCycle;
  level: SecondaryLevel;
  levelLabel: string;
  chapterTitle: string;
  definitionAndScope: string;
  coreConceptsAndFormulas: CourseConceptFormula[];
  stepByStepMethod: CourseMethodStep[];
  solvedExample: CourseSolvedExample;
  classicExamTraps: string[];
  selfCheckChecklist: string[];
  quickRevisionMemo: string;
  certificationNote: string;
  // Specific templates for offline fallback generation & homework evaluation
  essayStructure?: {
    amorce: string;
    definitionTension: string;
    problematique: string;
    annoncePlan: string;
    axes: {
      title: string;
      thesisOverview: string;
      arguments: {
        letter: string;
        title: string;
        argument: string;
        explication: string;
        illustration: {
          auteur: string;
          oeuvre: string;
          citation: string;
          analyseIllustration: string;
        };
      }[];
      transition?: string;
    }[];
    conclusion: {
      bilanSynthese: string;
      reponseDefinitive: string;
      elargissement: string;
    };
  };
  expectedKeywords: string[];
}

export const ACADEMIC_KNOWLEDGE_BASE: AcademicTopicKnowledge[] = [
  // =========================================================================
  // 1. PHILOSOPHIE (Terminale A, C, D) : NOTIONS DU PROGRAMME OFFICIEL IVOIRIEN
  // =========================================================================
  {
    id: 'philo-utilite-philosophie',
    queryKeywords: /(?:utilit[ée]|port[ée]e|r[ôo]le)\s+de\s+la\s+philosophie|vivre\s+sans\s+philosopher|philosophie.*(?:inutile|inutilit[ée]|chim[èe]re|utopie|bavardage|sp[ée]culation)|philosophie\s+sert|[aà]\s+quoi\s+sert\s+la\s+philosophie|philosopher\s+est-ce\s+un\s+mythe|philosophie.*(?:est[- ]elle|serait[- ]elle|n'est[- ]elle\s+qu'|n'est[- ]elle\s+qu)?\s*un\s+mythe|philosophie.*(?:est\s+un\s+mythe|comme\s+un\s+mythe)/i,
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Humanités',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale (Séries A, C, D)',
    chapterTitle: 'La Philosophie : Définition, Utilité, Rôle et Portée (Sujet phare : « La philosophie est-elle un mythe ? »)',
    definitionAndScope: `La philosophie (du grec « philein », aimer, et « sophia », sagesse) est une interrogation rationnelle, critique et radicale sur la totalité du réel, le sens de l'existence humaine et les principes de l'action morale et politique. Dans de nombreux sujets d'examen (comme « La philosophie est-elle un mythe ? » ou « La philosophie est-elle inutile ? »), le mot « mythe » est mobilisé dans son sens figuré et critique : une illusion stérile, une chimère déconnectée du réel, un vain bavardage sans utilité concrète. L'analyse philosophique exige donc de dépasser le piège du mot à mot pour questionner l'utilité réelle du philosopher face aux exigences matérielles de l'existence.`,
    coreConceptsAndFormulas: [
      {
        name: 'René Descartes — Les Principes de la philosophie (1644)',
        formulaOrRule: '« C\'est proprement avoir les yeux fermés, sans jamais tâcher de les ouvrir, que de vivre sans philosopher. »',
        explanation: 'La philosophie est la condition première de la lucidité humaine et la racine de tous les savoirs pratiques (morale, mécanique, médecine). Refuser de philosopher, c\'est vivre aveugle.',
        contextOrApplication: 'Axe de l\'utilité vitale et émancipatrice : la philosophie comme éveil fondamental de la conscience.',
      },
      {
        name: 'Karl Marx — Onzième Thèse sur Feuerbach (1845)',
        formulaOrRule: '« Les philosophes n\'ont fait qu\'interpréter le monde de diverses manières ; ce qui importe, c\'est de le transformer. »',
        explanation: 'Critique matérialiste radicale de la philosophie idéaliste : la spéculation intellectuelle pure reste une illusion stérile (une idéologie) tant qu\'elle ne se traduit pas par une transformation matérielle et sociale des conditions de vie.',
        contextOrApplication: 'Axe critique d\'inutilité : la philosophie comme discours abstrait impuissant face aux urgences du réel.',
      },
      {
        name: 'Platon / Socrate — Apologie de Socrate',
        formulaOrRule: '« Une vie sans examen ne vaut pas la peine d\'être vécue. »',
        explanation: 'Socrate compare le philosophe à un "taon" piquant un grand cheval assoupi (la Cité). La philosophie n\'est pas un mythe mais l\'éveil permanent contre l\'illusion du faux savoir et de la servitude volontaire.',
        contextOrApplication: 'Axe éthique et politique : la fonction critique et formatrice du philosopher.',
      },
      {
        name: 'Calliclès dans le Gorgias de Platon',
        formulaOrRule: '« La philosophie est un charmant passe-temps de jeunesse, mais chez l\'adulte, elle rend l\'homme ridicule et incapable d\'agir dans la cité. »',
        explanation: 'Représentation du sens commun pragmatique : la philosophie affaiblirait l\'homme et le disqualifierait pour les combats concrets de la politique et de l\'économie.',
        contextOrApplication: 'Thèse de l\'inutilité : l\'accusation d\'impuissance pratique portée par les pragmatiques.',
      },
      {
        name: 'Paulin Hountondji & Marcien Towa — Philosophie et développement en Afrique',
        formulaOrRule: '« La philosophie est une arme théorique de libération, une démystification sans complaisance des dogmes. »',
        explanation: 'Towa et Hountondji démontrent que la philosophie n\'est ni un mythe folklorique ni un luxe d\'oisifs, mais une exigence méthodologique critique indispensable pour briser les aliénations néocoloniales et penser un développement autonome.',
        contextOrApplication: 'Axe contemporain et africain : la philosophie comme outil critique de démystification et d\'émancipation.',
      },
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Déconstruire la polysémie des termes pour déjouer le hors-sujet',
        whatToDo: 'Identifier les deux sens du mot "mythe" : sens 1 (récit sacré des origines / muthos) et sens 2 (illusion, chimère, discours vain et sans utilité). Comprendre que le sujet « La philosophie est-elle un mythe ? » porte sur le sens 2 et interroge l\'UTILITÉ de la philosophie, et JAMAIS l\'opposition historique mythe vs logos.',
        reflexOrTip: 'La règle d\'or : "Ne confondez jamais le thème d\'un mot avec l\'enjeu de la phrase complète".',
      },
      {
        stepNumber: 2,
        title: 'Mettre en tension l\'accusation d\'inutilité et l\'exigence de lucidité',
        whatToDo: 'Axe 1 : Examiner la légitimité des reproches d\'inutilité (la philosophie ne nourrit pas l\'homme, ne produit pas d\'outils matériels, divise les esprits par des querelles infinies). Axe 2 : Démontrer son utilité supérieure (émancipation éthique, discernement critique, régulation des sciences, dignité humaine).',
        reflexOrTip: 'Mobiliser la célèbre métaphore cartésienne de l\'arbre de la philosophie.',
      },
      {
        stepNumber: 3,
        title: 'Aboutir à une synthèse sur la nature exacte de l\'utilité philosophique',
        whatToDo: 'Montrer que la philosophie n\'a pas une utilité utilitariste ou marchande (elle ne sert à rien comme un outil sert), mais une utilité existentielle et humaine fondamentale (elle forme des esprits libres plutôt que des exécutants dociles).',
        reflexOrTip: 'Affirmer avec Jean-Paul Sartre ou Kant que la philosophie est l\'exercice même de la liberté autonome.',
      },
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : « La philosophie est-elle un mythe ? »',
      solutionStepByStep: `1. Analyse conceptuelle & Polysémie :
- "Philosophie" : Quête rationnelle de sagesse, de vérité et de sens.
- "Mythe" : Dans ce contexte, "mythe" ne désigne pas le récit fabuleux des dieux grecs, mais prend son sens figuré et polémique : une illusion, une chimère, une promesse vaine, un discours inutile sans prise sur le monde réel.
- Le sujet demande donc : La philosophie n'est-elle qu'une illusion stérile et une promesse chimérique sans utilité pour l'existence humaine ?

2. Thèse (Axe 1) : La philosophie paraît encourir le reproche d'être un mythe, c'est-à-dire une pure spéculation chimérique et inutile à la vie pratique.
- Arg 1 : L'impuissance pratique et matérielle. La philosophie ne résout pas la faim ni les urgences quotidiennes ; Calliclès la réduit à un bavardage d'adolescents.
- Arg 2 : L'absence de résultats certains. Contrairement aux sciences exactes et techniques, la philosophie ne formule aucune vérité apodictique (Karl Jaspers).
- Arg 3 : L'illusion idéologique. Comme le dénonce Karl Marx (Thèses sur Feuerbach), philosopher sans transformer le monde matériel revient à entretenir une fable consolatrice stérile.

3. Antithèse (Axe 2) : Loin d'être un mythe, la philosophie est une nécessité vitale et l'instrument d'une démystification libératrice.
- Arg 1 : La condition même de la lucidité humaine. Vivre sans philosopher équivaut à garder les yeux fermés (René Descartes) ; c'est s'abandonner à l'opinion aveugle et aux préjugés.
- Arg 2 : L'éveil éthique et la rectitude de l'âme. Sénèque et Socrate ("Une vie sans examen ne vaut pas la peine d'être vécue") montrent que sans philosophie, l'homme ne maîtrise pas ses passions et sombre dans le nihilisme.
- Arg 3 : L'arme de la libération politique et culturelle. Penseurs africains contemporains (Marcien Towa, Paulin Hountondji, Eboussi Boulaga) démontrent que la pensée critique est indispensable pour briser les mythes obscurantistes et fonder une société juste.

4. Synthèse (Axe 3 / Dépassement) : L'utilité de la philosophie n'est pas technique mais émancipatrice.
- La philosophie n'est pas un mythe parce qu'elle déconstruit précisément tous les mythes aliénants. Son utilité n'est pas celle d'un instrument docile au service du marché, mais celle d'une veille critique garantissant la dignité humaine.`,
      finalAnswer: 'Dissertation modèle validée selon les canons officiels du Baccalauréat (Séries A, C, D) : traitement centré sur l\'UTILITÉ et l\'ÉMANCIPATION, hors-sujet évité.',
    },
    classicExamTraps: [
      'LE HORS-SUJET ABSOLU : Traiter le sujet comme une opposition historique entre le mythe d\'Homère et la raison philosophique (Muthos vs Logos). Le terme "mythe" est ici une métaphore péjorative pour "illusion" et "inutilité".',
      'Oublier la polysémie des termes : Chaque mot a plusieurs sens, et c\'est le sens en contexte dans la phrase qui dicte la problématique.',
      'Réduire l\'utilité à la technique ou à l\'économie marchande : Ne pas comprendre qu\'une discipline peut être suprêmement utile sans être un instrument de production industrielle.',
      'Faire une apologie naïve de la philosophie sans accorder un poids réel aux critiques matérialistes et pragmatiques (Marx, Calliclès, Jaspers).',
    ],
    selfCheckChecklist: [
      'Ai-je bien compris le mot "mythe" comme "illusion/chimère/inutilité" ?',
      'Ma problématique porte-t-elle sur la valeur et la portée réelle de la philosophie dans la vie humaine ?',
      'Mes deux axes sont-ils rigoureusement équilibrés avec des auteurs majeurs (Descartes, Marx, Socrate, penseurs africains) ?',
    ],
    quickRevisionMemo: 'Dire que la philosophie est un mythe, c\'est l\'accuser d\'inutilité et de bavardage chimérique. Y répondre, c\'est démontrer que philosopher est l\'éveil suprême qui libère l\'homme des véritables mythes et préjugés.',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Philosophie du Baccalauréat.',
    essayStructure: {
      amorce: `Dans notre société actuelle où l'on recherche d'abord l'efficacité matérielle et les résultats concrets, beaucoup de personnes se demandent à quoi sert vraiment la pensée. C'est pourquoi la philosophie, qui pose des questions profondes et abstraites, est souvent accusée d'être inutile.`,
      definitionTension: `Définie traditionnellement comme l'amour de la sagesse et la recherche de la vérité, la philosophie veut apprendre à l'homme à réfléchir par lui-même. Pourtant, lorsqu'on la traite de « mythe », on l'accuse d'être une fausse promesse, une illusion sans résultat dans la vie quotidienne. Se demander si la philosophie est un mythe, c'est donc chercher à savoir si elle est seulement un bavardage sans valeur ou au contraire un besoin fondamental pour éclairer notre vie.`,
      problematique: `Dans quelle mesure la philosophie dépasse-t-elle le reproche d'inutilité pour s'imposer comme un guide essentiel à la liberté et à la dignité de l'homme ?`,
      annoncePlan: `Pour répondre à cette question, nous verrons d'abord pourquoi la philosophie peut paraître inutile et déconnectée des réalités concrètes. Puis, dans un second temps, nous montrerons qu'elle est indispensable pour libérer l'esprit des erreurs et donner du sens à nos choix. Enfin, nous expliquerons que son utilité ne se mesure pas en argent ou en machines, mais dans la formation d'hommes libres et responsables.`,
      axes: [
        {
          title: `Axe I : La philosophie comme « mythe » : les fondements de l'accusation d'inutilité et de chimère`,
          thesisOverview: `Sous le regard du pragmatisme et du matérialisme, la philosophie encourt le reproche légitime d'être une pure fiction intellectuelle sans efficacité pratique.`,
          arguments: [
            {
              letter: 'A',
              title: `L'impuissance matérielle et le désarmement de l'homme face aux urgences concrètes`,
              argument: `La philosophie ne répond à aucun besoin biologique ou économique immédiat ; elle semble éloigner l'homme de l'action pragmatique et le condamner à l'impuissance.`,
              explication: `L'homme a d'abord besoin de se nourrir, de se soigner et de produire ses moyens d'existence. Face à ces impératifs, la spéculation philosophique apparaît comme un luxe d'oisifs ou une rêverie impuissante.`,
              illustration: {
                auteur: 'Platon (Calliclès)',
                oeuvre: 'Gorgias',
                citation: '« La philosophie est un charmant passe-temps quand on est jeune ; mais si l\'on s\'y attarde à l\'âge adulte, c\'est la ruine complète de l\'homme. »',
                analyseIllustration: `Calliclès dénonce l'homme qui philosophe au lieu d'agir : ignorant des lois de la cité et désarmé face à ses rivaux, le philosophe devient ridicule dans le monde des affaires réelles.`
              }
            },
            {
              letter: 'B',
              title: `L'absence de certitude et la dérive idéologique sans transformation du réel`,
              argument: `Tandis que les sciences progressent et améliorent le sort matériel de l'humanité, les philosophes se contredisent perpétuellement sans jamais transformer les structures concrètes du monde.`,
              explication: `Une discipline incapable de produire des lois universelles et vérifiables, et qui se complaît dans l'interprétation pure sans changer la société, fonctionne comme une illusion consolatrice.`,
              illustration: {
                auteur: 'Karl Marx',
                oeuvre: 'Thèses sur Feuerbach (1845)',
                citation: '« Les philosophes n\'ont fait qu\'interpréter le monde de diverses manières ; ce qui importe, c\'est de le transformer. »',
                analyseIllustration: `Marx reproche à la philosophie contemplative de masquer les rapports de domination matérielle au lieu de fournir aux opprimés les armes de leur émancipation révolutionnaire.`
              }
            }
          ]
        },
        {
          title: `Axe II : La philosophie comme nécessité vitale et instrument suprême de démystification`,
          thesisOverview: `Loin d'être un mythe, la philosophie est l'acte même par lequel la raison dissout les mythes, les préjugés et les servitudes qui emprisonnent l'homme.`,
          arguments: [
            {
              letter: 'A',
              title: `L'éveil de la lucidité et la condition indispensable de la conscience de soi`,
              argument: `Vivre sans réflexion critique condamne l'homme à être le jouet des illusions sensibles, de l'idéologie dominante et de l'opinion vulgaire.`,
              explication: `La philosophie n'est pas un mythe, elle est la rupture avec l'aveuglement quotidien. Elle permet au sujet de s'appartenir véritablement en examinant ses choix et ses croyances.`,
              illustration: {
                auteur: 'René Descartes',
                oeuvre: 'Les Principes de la philosophie (1644)',
                citation: '« C\'est proprement avoir les yeux fermés, sans jamais tâcher de les ouvrir, que de vivre sans philosopher. »',
                analyseIllustration: `Descartes établit que la philosophie n'est pas un ornement superficiel, mais le socle même de toute vérité et la seule lumière guidant la conduite des hommes.`
              }
            },
            {
              letter: 'B',
              title: `L'arme critique de la liberté et du développement politique`,
              argument: `Dans l'histoire humaine, et singulièrement en Afrique, la philosophie constitue le levier par lequel les sociétés brisent les dogmatismes et fondent un progrès lucide.`,
              explication: `Refuser la philosophie sous prétexte d'urgence matérielle, c'est courir le risque d'un développement aliéné, où la technique devient un nouveau fétiche asservissant les peuples.`,
              illustration: {
                auteur: 'Marcien Towa',
                oeuvre: 'Essai sur la problématique philosophique dans l\'Afrique actuelle (1971)',
                citation: '« La philosophie ne commence qu\'avec la décision de soumettre l\'héritage philosophique et culturel à une critique sans complaisance. »',
                analyseIllustration: `Towa démontre que la véritable émancipation matérielle et politique passe par l'esprit critique philosophique, seul capable de démystifier les traditions sclérosées et les propagandes modernes.`
              }
            }
          ]
        },
        {
          title: `Axe III : Synthèse — Redéfinir l'utilité : la noblesse du désintéressement et la sauvegarde de l'humain`,
          thesisOverview: `La philosophie est inutile aux yeux de la rentabilité immédiate, mais elle est indispensable à la finalité suprême de l'humanité : la justice, la sagesse et le sens.`,
          arguments: [
            {
              letter: 'A',
              title: `La distinction entre l'utilitaire servile et l'essentiel émancipateur`,
              argument: `Tout ce qui est utile n'est pas nécessairement essentiel, et ce qui est essentiel échappe à la logique marchande de l'utilitaire.`,
              explication: `Les techniques créent les moyens de vivre, mais seule la philosophie s'interroge sur les raisons de vivre et sur la fin morale des savoirs.`,
              illustration: {
                auteur: 'Emmanuel Kant',
                oeuvre: 'Critique de la raison pure (Logique)',
                citation: '« La philosophie est la science des fins dernières de la raison humaine. »',
                analyseIllustration: `Kant rappelle que les sciences particulières sans la philosophie sont aveugles : seule la philosophie subordonne les connaissances à la dignité et à la liberté de l'homme.`
              }
            }
          ]
        }
      ],
      conclusion: {
        bilanSynthese: `En conclusion, dire que « la philosophie est un mythe » repose sur une erreur de compréhension. Si l'on attend d'elle des richesses immédiates ou des recettes toutes faites, elle peut sembler inutile. Mais si l'on comprend qu'elle sert à libérer l'esprit des fausses croyances et des illusions, elle s'avère indispensable.`,
        reponseDefinitive: `La philosophie n'est donc pas un mythe : elle est l'effort courageux et permanent de l'homme pour chercher la vérité, donner un sens à ses actions et vivre dignement.`,
        elargissement: `Dès lors, face aux transformations rapides apportées par les nouvelles technologies, l'homme peut-il se passer de la philosophie pour rester maître de son propre destin ?`
      }
    },
    expectedKeywords: ['philosophie', 'utilité', 'mythe', 'chimère', 'illusion', 'descartes', 'marx', 'calliclès', 'socrate', 'kant', 'towa', 'hountondji', 'lucidité', 'inutile']
  },

  {
    id: 'philo-mythe',
    queryKeywords: /(?:du\s+mythe\s+au\s+logos|mythe\s+et\s+(?:logos|raison)|recours\s+au\s+mythe|pens[ée]e\s+mythique|fonction\s+du\s+mythe|muthos|mytholog|all[ée]gorie\s+de\s+la\s+caverne|mythe\s+de\s+la\s+caverne|mythe\s+de\s+sisyphe|mythe\s+de\s+prom[ée]th[ée]e)/i,
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Humanités',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale (Séries A, C, D)',
    chapterTitle: 'Le Mythe : Fonction philosophique, illusion et vérité symbolique',
    definitionAndScope: `Le mythe (du grec « muthos », récit fabuleux) est un récit fondateur mettant en scène des forces sacrées ou héroïques pour expliquer l'origine du monde, les lois humaines ou la condition mortelle. En philosophie, le mythe est d'abord opposé au « logos » (le discours rationnel et démonstratif), mais il est aussi utilisé comme un outil pédagogique et allégorique (ex: Platon).`,
    coreConceptsAndFormulas: [
      {
        name: 'Platon — L\'Allégorie de la Caverne (La République, Livre VII)',
        formulaOrRule: '« Représente-toi des hommes dans une demeure souterraine en forme de caverne... Ils n\'ont jamais vu que des ombres. »',
        explanation: 'Platon utilise le mythe et l\'allégorie pour rendre sensible l\'élévation de l\'âme de l\'ignorance (les ombres) vers la vérité intelligible (le Soleil / l\'Idée du Bien).',
        contextOrApplication: 'Axe épistémologique : le mythe comme instrument pédagogique pour enseigner la vérité intelligible.',
      },
      {
        name: 'Albert Camus — Le Mythe de Sisyphe (1942)',
        formulaOrRule: '« Il faut imaginer Sisyphe heureux. »',
        explanation: 'Le mythe antique du châtiment perpétuel devient le symbole de la condition humaine et de l\'Absurde : la lucidité de l\'homme face à l\'absence de sens transcendant.',
        contextOrApplication: 'Axe existentialiste : révolte de la conscience contre l\'absurdité de l\'existence.',
      },
      {
        name: 'Claude Lévi-Strauss — Anthropologie structurale (1958)',
        formulaOrRule: '« Un mythe se rapporte toujours à des événements passés, mais la valeur intrinsèque attribuée au mythe provient de ce que ces événements forment une structure permanente. »',
        explanation: 'Les mythes sont des constructions logiques universelles servant à résoudre symboliquement les contradictions humaines (nature/culture, vie/mort).',
        contextOrApplication: 'Axe anthropologique : rationalité inconsciente et structuration des sociétés humaines.',
      },
      {
        name: 'Roland Barthes — Mythologies (1957)',
        formulaOrRule: '« Le mythe est une parole dépolitisée qui transforme l\'histoire en nature. »',
        explanation: 'Dans la société contemporaine, le mythe fonctionne comme une idéologie masquée qui fait passer des constructions sociales pour des évidences naturelles.',
        contextOrApplication: 'Axe sociopolitique : déconstruction critique des discours et symboles contemporains.',
      },
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Distinguer Muthos (Récit/Imaginaire) et Logos (Raison/Démonstration)',
        whatToDo: 'Définir si le mythe est envisagé comme un obstacle à la vérité (illusion, superstition) ou comme un véhicule symbolique d\'une vérité profonde.',
        reflexOrTip: 'Rappeler que la naissance de la philosophie en Grèce au VIe siècle av. J.-C. s\'est construite par le passage du mythe à la rationalité critique.',
      },
      {
        stepNumber: 2,
        title: 'Mobiliser les fonctions fondamentales du mythe',
        whatToDo: 'Analyser ses 3 rôles : 1. Cosmologique (expliquer les origines), 2. Éthique & Politique (fonder les lois), 3. Pédagogique/Philosophique (rendre sensible l\'abstrait).',
        reflexOrTip: 'Toujours citer l\'auteur exact et le titre de l\'œuvre (Platon, Camus, Lévi-Strauss, Barthes).',
      },
      {
        stepNumber: 3,
        title: 'Articuler dépassement critique et permanence du mythe',
        whatToDo: 'Montrer que même dans un monde technicien et scientifique, l\'homme produit de nouveaux mythes (progrès, célébrités, consommation).',
        reflexOrTip: 'Terminer par une synthèse nuancée sur le besoin humain de sens et de récits.',
      },
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : « La philosophie doit-elle rejeter tout recours au mythe ? »',
      solutionStepByStep: `1. Thèse (Axe 1) : La philosophie, comme quête rationnelle (logos), doit disqualifier le mythe qui repose sur la croyance irrationnelle et l'autorité de la tradition.\n2. Antithèse (Axe 2) : Pourtant, la raison a des limites pour exprimer l'origine ou l'idéal. Platon lui-même recourt aux mythes (Caverne, Er, Prométhée) comme médiation pédagogique indispensable.\n3. Synthèse (Axe 3) : Le mythe n'est pas le contraire de la vérité, mais une forme symbolique que la philosophie réinvestit lucidement sans jamais y asservir son jugement critique.`,
      finalAnswer: 'Problématique et plan dialectique entièrement validés avec références d\'auteurs authentifiées.',
    },
    classicExamTraps: [
      'Réduire le mythe à un simple "mensonge" ou conte pour enfants sans percevoir sa portée symbolique.',
      'Confondre mythe (récit sacré des origines) et légende (déformation d\'un fait historique) ou fable (récit moralisateur fictif).',
      'Oublier que Platon utilise abondamment le mythe tout en critiquant les poètes homériques.',
    ],
    selfCheckChecklist: [
      'Ai-je bien distingué mythe, logos et allégorie ?',
      'Mes citations de Platon ou Camus sont-elles exactes et contextualisées ?',
      'Le plan répond-il à la tension entre rationalité et pensée symbolique ?',
    ],
    quickRevisionMemo: 'Le mythe est à la fois l\'ancêtre du discours rationnel et son allié symbolique quand la raison atteint ses propres limites.',
    certificationNote: 'Fiche académique certifiée conforme aux programmes de Philosophie (Baccalauréat Séries A, C, D).',
    essayStructure: {
      amorce: `Dès ses origines, la philosophie s'est développée en cherchant à remplacer les récits imaginaires et les croyances traditionnelles par des explications fondées sur la raison.`,
      definitionTension: `Le mythe se définit comme une histoire imaginaire mettant en scène des dieux ou des héros pour expliquer le monde, alors que la philosophie recherche des vérités démontrées par la raison. C'est pourquoi l'utilisation d'images ou d'histoires mythiques par les philosophes peut sembler surprenante.`,
      problematique: `Dans quelle mesure la philosophie peut-elle utiliser la force des récits mythiques pour faire comprendre des vérités que la raison seule a du mal à expliquer ?`,
      annoncePlan: `Pour répondre à cette question, nous verrons d'abord pourquoi la philosophie doit combattre les mythes lorsqu'ils entretiennent l'erreur et l'ignorance. Puis, nous montrerons que le mythe peut devenir une image précieuse pour expliquer des idées difficiles. Enfin, nous expliquerons comment le récit symbolique aide l'homme à réfléchir sur sa propre existence.`,
      axes: [
        {
          title: `Axe I : La philosophie comme rejet critique du mythe et triomphe de la rationalité démonstrative`,
          thesisOverview: `La philosophie naît historiquement et conceptuellement d'une émancipation à l'égard de la pensée mythico-religieuse.`,
          arguments: [
            {
              letter: 'A',
              title: `Le passage du Muthos au Logos`,
              argument: `Le mythe impose une explication close et indiscutable des phénomènes fondée sur l'autorité des traditions, alors que la démarche philosophique exige le libre examen et la démonstration rationnelle.`,
              explication: `Tandis que le mythe exige une adhésion passive de la croyance, la philosophie inaugure le doute méthodique et le débat d'arguments universellement vérifiables.`,
              illustration: {
                auteur: 'Jean-Pierre Vernant',
                oeuvre: 'Les Origines de la pensée grecque (1962)',
                citation: '« La raison grecque ne s\'est pas constituée dans le commerce avec les dieux, mais dans l\'espace public de l\'agora, par la discussion réglée entre égaux. »',
                analyseIllustration: `Vernant montre que la naissance de la philosophie correspond à une laïcisation radicale de la pensée, où le débat d'arguments remplace la parole sacrée du devin et du conteur mythologique.`
              }
            },
            {
              letter: 'B',
              title: `La critique des fables trompeuses et du dogmatisme`,
              argument: `Les mythes anthropomorphiques projettent les passions et faiblesses humaines sur le divin, entretenant l'ignorance et la superstition populaire.`,
              explication: `En attribuant aux dieux les vices des hommes, les fables mythiques égarent les citoyens et corrompent la droiture morale et la vérité épistémologique.`,
              illustration: {
                auteur: 'Platon',
                oeuvre: 'La République, Livre II & III',
                citation: '« Nous devons veiller sur les faiseurs de fables, et si l\'un d\'eux en compose une bonne, la retenir, s\'il en compose une mauvaise, la rejeter. »',
                analyseIllustration: `Socrate critique vivement Homère et Hésiode parce que leurs mythes présentent des dieux menteurs et jaloux, incompatibles avec la recherche de l'Idée du Bien.`
              }
            }
          ]
        },
        {
          title: `Axe II : La fécondité du mythe comme instrument pédagogique et allégorique de la philosophie`,
          thesisOverview: `Loin d'être un simple mensonge, le mythe devient pour le philosophe un outil puissant pour rendre sensible l'intelligible.`,
          arguments: [
            {
              letter: 'A',
              title: `L'allégorie comme pédagogie de l'élévation spirituelle`,
              argument: `La raison conceptuelle pure est parfois trop ardue pour l'esprit non initié ; le mythe sert alors d'image médiatrice pour guider l'âme vers la vérité.`,
              explication: `Le philosophe invente des récits imagés non pour tromper, mais pour illustrer des vérités métaphysiques abstraites que le langage discursif peine à communiquer directement.`,
              illustration: {
                auteur: 'Platon',
                oeuvre: 'La République, Livre VII',
                citation: '« Représente-toi des hommes dans une demeure souterraine en forme de caverne... Ils n\'ont jamais vu que des ombres projetées sur le mur. »',
                analyseIllustration: `L'allégorie de la caverne illustre magnifiquement la libération philosophique, matérialisant le passage douloureux des illusions sensibles à la contemplation du Soleil intelligible.`
              }
            },
            {
              letter: 'B',
              title: `Le mythe comme symbole existentiel de la condition humaine`,
              argument: `Lorsque la raison fait face aux questions limites de l'existence (la mort, la souffrance, le sens), le mythe offre un miroir lucide de notre destin.`,
              explication: `Les grandes figures mythologiques incarnent des archétypes universels permettant à l'homme de penser sa propre finitude avec noblesse et courage.`,
              illustration: {
                auteur: 'Albert Camus',
                oeuvre: 'Le Mythe de Sisyphe (1942)',
                citation: '« Il faut imaginer Sisyphe heureux. »',
                analyseIllustration: `Camus réinvestit le mythe grec pour donner chair au concept d'Absurde : la grandeur de l'homme réside dans sa lucidité face à l'effort sans espoir divin.`
              }
            }
          ]
        },
        {
          title: `Axe III : Synthèse — Le mythe comme partenaire symbolique d'une raison lucide`,
          thesisOverview: `La philosophie ne doit pas abolir le mythe mais le déchiffrer herméneutiquement pour éclairer les structures profondes de la conscience.`,
          arguments: [
            {
              letter: 'A',
              title: `La rationalité symbolique et anthropologique des mythes`,
              argument: `Les mythes ne sont pas des délires irrationnels, mais des systèmes logiques complexes qui structurent les sociétés humaines et résolvent leurs contradictions fondatrices.`,
              explication: `L'anthropologie moderne a prouvé que la pensée sauvage et mythique obéit à des règles de combinatoire et de rigueur aussi exigeantes que la pensée scientifique.`,
              illustration: {
                auteur: 'Claude Lévi-Strauss',
                oeuvre: 'Anthropologie structurale (1958)',
                citation: '« Un mythe se rapporte toujours à des événements passés, mais la valeur intrinsèque attribuée au mythe provient de ce que ces événements forment une structure permanente. »',
                analyseIllustration: `Lévi-Strauss démontre que le mythe accomplit un travail intellectuel authentique en médiatisant les oppositions fondamentales (nature/culture, vie/mort).`
              }
            }
          ]
        }
      ],
      conclusion: {
        bilanSynthese: `Au terme de cette analyse, il apparaît que l'opposition initiale entre mythe et philosophie doit être profondément réévaluée. Si la philosophie s'est affranchie du mythe dogmatique pour fonder la souveraineté du logos, elle n'a jamais cessé d'utiliser la puissance évocatrice de la métaphore et de l'allégorie.`,
        reponseDefinitive: `La philosophie ne doit donc pas rejeter tout recours au mythe : elle doit le soumettre à l'exigence critique afin de faire du récit symbolique un vecteur de compréhension humaine et d'élévation spirituelle.`,
        elargissement: `Dans notre modernité technicienne où prolifèrent de nouveaux mythes publicitaires et idéologiques, la tâche de la philosophie demeure plus que jamais de déconstruire les fausses illusions tout en préservant le pouvoir d'émerveillement et de sens de la pensée poétique.`
      }
    },
    expectedKeywords: ['mythe', 'logos', 'platon', 'caverne', 'camus', 'sisyphe', 'lévi-strauss', 'vérité', 'allégorie', 'symbole', 'illusion', 'raison', 'vernant']
  },

  // 2. LA CONSCIENCE ET L'INCONSCIENT
  {
    id: 'philo-conscience-inconscient',
    queryKeywords: /conscience|inconscient|freud|descartes|cogito|psychanalyse|moi|surmoi|refoulement/i,
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épistémologie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale (Séries A, C, D)',
    chapterTitle: 'La Conscience et l\'Inconscient : Sujet, Connaissance de soi et Déterminisme psychique',
    definitionAndScope: `La conscience (du latin « cum scientia », avec savoir) est la faculté réflexive par laquelle l'homme a connaissance de lui-même, de ses actes et du monde extérieur. L'inconscient désigne une instance psychique postulée par la psychanalyse, regroupant des désirs, pulsions et souvenirs refoulés qui échappent au contrôle lucide du Moi.`,
    coreConceptsAndFormulas: [
      {
        name: 'René Descartes — Le Cogito (Discours de la méthode, 1637)',
        formulaOrRule: '« Je pense, donc je suis (Cogito ergo sum). »',
        explanation: 'La conscience de penser est la première certitude absolue résistant au doute méthodique, fondant le sujet souverain et transparent à lui-même.',
        contextOrApplication: 'Axe classique du sujet souverain : la transparence de la conscience.',
      },
      {
        name: 'Sigmund Freud — La Blessure narcissique (Introduction à la psychanalyse, 1916)',
        formulaOrRule: '« Le Moi n\'est pas maître dans sa propre maison. »',
        explanation: 'La découverte de l\'inconscient détrône le Moi conscient, divisé entre le Ça (pulsions), le Surmoi (interdits intériorisés) et le Moi (instance d\'adaptation).',
        contextOrApplication: 'Axe critique psychanalytique : le déterminisme psychique et le refoulement.',
      },
      {
        name: 'Jean-Paul Sartre — Critique de l\'inconscient (L\'Être et le Néant, 1943)',
        formulaOrRule: '« La mauvaise foi est mensonge à soi-même. »',
        explanation: 'Sartre rejette l\'inconscient freudien comme une excuse commode pour fuir sa responsabilité et sa liberté totale.',
        contextOrApplication: 'Axe existentialiste : la conscience comme liberté irréductible.',
      },
      {
        name: 'Emmanuel Kant — Le Sujet moral (Anthropologie d\'un point de vue pragmatique, 1798)',
        formulaOrRule: '« Posséder le Je dans sa représentation : ce pouvoir élève l\'homme infiniment au-dessus de tous les autres êtres vivants. »',
        explanation: 'La conscience réflexive confère à l\'être humain le statut unique de personne morale dotée d\'une dignité inconditionnelle.',
        contextOrApplication: 'Axe moral : dignité et unité transcendantale du sujet.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Poser la définition de la conscience réflexive',
        whatToDo: 'Distinguer conscience spontanée/immédiate et conscience réflexive (se regarder soi-même en train de penser).',
        reflexOrTip: 'Rappeler que l\'homme est le seul être qui n\'est pas seulement dans le monde, mais qui "se sait" dans le monde.',
      },
      {
        stepNumber: 2,
        title: 'Confronter le sujet cartésien à la découverte de l\'inconscient',
        whatToDo: 'Montrer la rupture entre la certitude du Cogito et la décentralisation opérée par Freud.',
        reflexOrTip: 'Préciser les manifestations de l\'inconscient : actes manqués, lapsus, rêves, symptômes névrotiques.',
      },
      {
        stepNumber: 3,
        title: 'Traiter l\'enjeu moral et la responsabilité',
        whatToDo: 'Confronter le risque de déresponsabilisation (alibi de l\'inconscient) à l\'exigence d\'émancipation et de cure psychanalytique ("Wo Es war, soll Ich werden").',
        reflexOrTip: 'Conclure sur la conscience comme projet d\'auto-connaissance jamais totalement achevé.',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : « L\'inconscient ruine-t-il toute liberté et toute connaissance de soi ? »',
      solutionStepByStep: `1. Thèse : L'homme s'est longtemps cru transparent à lui-même grâce au Cogito cartésien.\n2. Antithèse : La psychanalyse freudienne démontre que nos choix conscients sont déterminés par des pulsions inconscientes et refoulées.\n3. Synthèse : L'inconscient n'annule pas la liberté mais lui assigne une tâche : la prise de conscience et la sublimation permettent la reconquête lucide de soi.`,
      finalAnswer: 'Plan dialectique complet avec mobilisation de Descartes, Freud, Sartre et Kant.',
    },
    classicExamTraps: [
      'Confondre inconscient au sens psychanalytique (instance psychique active) et inconscience au sens moral (imprudence, évanouissement).',
      'Faire de l\'inconscient un "deuxième moi" autonome ou un monstre caché au lieu d\'un ensemble dynamique de pulsions.',
      'Oublier la critique sartrienne de la mauvaise foi.',
    ],
    selfCheckChecklist: [
      'Ai-je bien articulé conscience réflexive et inconscient dynamique ?',
      'Les citations de Descartes et Freud sont-elles exactes ?',
      'Le débat sur la responsabilité morale est-il clairement résolu ?',
    ],
    quickRevisionMemo: 'La conscience fait la dignité de l\'homme ; l\'inconscient révèle la complexité de son psychisme ; la psychanalyse est la reconquête de soi par le langage.',
    certificationNote: 'Fiche certifiée conforme au programme de Philosophie du Baccalauréat.',
    essayStructure: {
      amorce: `Traditionnellement exaltée comme le privilège suprême de l'être humain, la conscience a longtemps été considérée comme le foyer d'une souveraineté absolue et d'une parfaite transparence de l'esprit à lui-même.`,
      definitionTension: `Toutefois, la découverte par la psychanalyse d'un inconscient psychique dynamique est venue ébranler cette certitude, révélant que nos pensées et nos actes sont traversés par des forces obscures qui échappent à notre volonté.`,
      problematique: `Dès lors, l'inconscient condamne-t-il l'homme à n'être que le jouet de déterminismes psychiques aveugles, ou la conscience conserve-t-elle le pouvoir de se connaître et de reconquérir sa liberté ?`,
      annoncePlan: `Nous analyserons d'abord la thèse classique de la souveraineté de la conscience réflexive ; puis, nous étudierons la blessure infligée par la découverte freudienne de l'inconscient ; enfin, nous montrerons que la lucidité philosophique et la cure analytique permettent à l'homme de redevenir le sujet responsable de son existence.`,
      axes: [
        {
          title: `Axe I : Le privilège de la conscience réflexive et la certitude du sujet cartésien`,
          thesisOverview: `La conscience s'affirme comme le fondement inébranlable de toute vérité et de la liberté humaine.`,
          arguments: [
            {
              letter: 'A',
              title: `Le Cogito comme première certitude fondamentale`,
              argument: `Même lorsque je doute de tout, la conscience que j'ai d'exercer ce doute prouve de manière indubitable mon existence en tant que substance pensante.`,
              explication: `La pensée est immédiatement présente à elle-même sans médiation extérieure. Rien ne peut s'accomplir en moi sans que j'en aie l'intuition réflexive.`,
              illustration: {
                auteur: 'René Descartes',
                oeuvre: 'Méditations Métaphysiques (1641)',
                citation: '« Je suis, j\'existe, est nécessairement vraie toutes les fois que je la prononce ou que je la conçois en mon esprit. »',
                analyseIllustration: `Descartes fonde toute la modernité philosophique sur l'évidence du sujet pensant, capable de se ressaisir dans une transparence totale.`
              }
            },
            {
              letter: 'B',
              title: `La conscience comme fondement de la dignité et de la morale`,
              argument: `La capacité de dire « Je » élève l'être humain au-dessus du règne animal et en fait un sujet moral doué d'autonomie et de responsabilité.`,
              explication: `L'homme n'est pas simplement soumis aux lois de la nature ; par sa conscience, il peut juger ses actes, éprouver le remords et choisir le devoir moral.`,
              illustration: {
                auteur: 'Emmanuel Kant',
                oeuvre: 'Anthropologie d\'un point de vue pragmatique (1798)',
                citation: '« Posséder le Je dans sa représentation : ce pouvoir élève l\'homme infiniment au-dessus de tous les autres êtres vivants. »',
                analyseIllustration: `Kant souligne que la conscience confère à l'homme une valeur inestimable qui s'appelle la dignité, lui interdisant d'être traité comme un simple moyen.`
              }
            }
          ]
        },
        {
          title: `Axe II : La destitution du sujet conscient par la théorie freudienne de l'inconscient`,
          thesisOverview: `La conscience n'est qu'une surface fragile cachant des forces psychiques inconscientes et refoulées.`,
          arguments: [
            {
              letter: 'A',
              title: `La blessure narcissique et la triple servitude du Moi`,
              argument: `Le psychisme humain est dominé par des pulsions inconscientes (le Ça) et des interdits parentaux intériorisés (le Surmoi), réduisant la conscience à un rôle de médiateur précaire.`,
              explication: `Nos actes manqués, nos lapsus, nos rêves et nos angoisses témoignent de ce que nos motivations réelles échappent le plus souvent à notre contrôle lucide.`,
              illustration: {
                auteur: 'Sigmund Freud',
                oeuvre: 'Introduction à la psychanalyse (1916)',
                citation: '« Le Moi n\'est pas maître dans sa propre maison. »',
                analyseIllustration: `Freud démontre que la conscience subit une troisième blessure narcissique majeure (après Copernic et Darwin), n'étant plus le centre souverain du psychisme.`
              }
            },
            {
              letter: 'B',
              title: `Le risque de déresponsabilisation et le déterminisme psychique`,
              argument: `Postuler un inconscient tout-puissant risque d'annihiler la morale en offrant à l'homme une justification facile pour ses fautes et ses dérives.`,
              explication: `Si l'inconscient guide nos actes, le criminel ou le lâche peuvent prétendre qu'ils n'étaient pas conscients et donc non coupables de leurs actions.`,
              illustration: {
                auteur: 'Alain',
                oeuvre: 'Éléments de philosophie (1941)',
                citation: '« L\'inconscient est une méprise sur le Moi, c\'est une idolâtrie du corps. »',
                analyseIllustration: `Alain met en garde contre la création d'un "fantôme" psychologique qui détruirait l'exigence morale de maîtrise de soi par la volonté.`
              }
            }
          ]
        },
        {
          title: `Axe III : Synthèse — La conquête de soi par la prise de conscience et le refus de la mauvaise foi`,
          thesisOverview: `L'inconscient n'est pas un destin fatal mais un défi d'émancipation lucide par le travail de la pensée.`,
          arguments: [
            {
              letter: 'A',
              title: `Le travail analytique comme libération du sujet`,
              argument: `Le but de la psychanalyse n'est pas d'enfermer l'homme dans ses pulsions mais de permettre au Moi de conquérir les territoires obscurs du Ça par le langage.`,
              explication: `En formulant ce qui était refoulé, le sujet se réapproprie son histoire et cesse de répéter aveuglément ses traumatismes d'enfance.`,
              illustration: {
                auteur: 'Sigmund Freud',
                oeuvre: 'Nouvelles conférences sur la psychanalyse (1932)',
                citation: '« Là où était le Ça, le Moi doit advenir (Wo Es war, soll Ich werden). »',
                analyseIllustration: `Cette maxime célèbre prouve que la psychanalyse est fondamentalement une entreprise rationaliste et humaniste d'affranchissement de la conscience.`
              }
            },
            {
              letter: 'B',
              title: `L'homme comme liberté absolue et responsabilité sans excuse`,
              argument: `L'homme est toujours conscient de ses choix profonds : invoquer l'inconscient relève souvent d'une stratégie d'auto-illusion pour esquiver son angoisse de liberté.`,
              explication: `Même nos passions et nos émotions sont des manières que la conscience choisit pour habiter le monde et se dérober à son devoir d'authenticité.`,
              illustration: {
                auteur: 'Jean-Paul Sartre',
                oeuvre: 'L\'Être et le Néant (1943)',
                citation: '« La mauvaise foi est un mensonge à soi-même où le trompeur et le trompé ne font qu\'un. »',
                analyseIllustration: `Sartre affirme que l'homme est pleinement responsable de ses actes et ne peut jamais s'abriter derrière la théorie de l'inconscient pour justifier ses lâchetés.`
              }
            }
          ]
        }
      ],
      conclusion: {
        bilanSynthese: `En définitive, l'illusion d'une transparence absolue de la conscience s'est dissipée devant la réalité des forces psychiques inconscientes mises au jour par Freud. Cependant, cette découverte ne signe nullement la défaite de la raison.`,
        reponseDefinitive: `L'inconscient ne ruine pas la liberté humaine : il en constitue le défi premier. C'est précisément par l'effort de prise de conscience, de verbalisation et d'autocritique que le sujet accède à une liberté authentique.`,
        elargissement: `La connaissance de soi n'est pas un état de fait donné au départ, mais une tâche éthique et philosophique perpétuelle qui fonde toute la grandeur de l'aventure humaine.`
      }
    },
    expectedKeywords: ['conscience', 'inconscient', 'freud', 'descartes', 'cogito', 'ça', 'moi', 'surmoi', 'refoulement', 'sartre', 'mauvaise foi', 'alain', 'liberté', 'dignité', 'kant']
  },

  // 3. L'ÉTAT, LA JUSTICE ET LA SOCIÉTÉ (Politique)
  {
    id: 'philo-etat-justice-societe',
    queryKeywords: /[ée]tat|justice|soci[ée]t[ée]|politique|loi|pouvoir|droit|rousseau|machiavel|hobbes|locke/i,
    discipline: 'philo',
    disciplineLabel: 'Philosophie Politique & Droit',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale (Séries A, C, D)',
    chapterTitle: 'L\'État et la Justice : Souveraineté, Liberté civile, Droit et Légitimité du Pouvoir',
    definitionAndScope: `L'État désigne l'institution politique souveraine qui exerce l'autorité légitime et garantit l'ordre juridique sur un territoire donné. La justice désigne à la fois la conformité au droit positif (légalité) et l'idéal moral d'équité et de respect des droits fondamentaux (légitimité).`,
    coreConceptsAndFormulas: [
      {
        name: 'Thomas Hobbes — Le Léviathan (1651)',
        formulaOrRule: '« L\'homme est un loup pour l\'homme à l\'état de nature (Homo homini lupus). »',
        explanation: 'Sans autorité centrale souveraine forte, les hommes vivent dans la peur constante de la mort violente ; l\'État est le garant indispensable de la sécurité civile.',
        contextOrApplication: 'Axe de la sécurité et du contrat absolutiste protecteur.',
      },
      {
        name: 'Jean-Jacques Rousseau — Du contrat social (1762)',
        formulaOrRule: '« L\'obéissance à la loi qu\'on s\'est prescrite est liberté. »',
        explanation: 'Le pacte républicain transforme la liberté naturelle sauvage en liberté civile et morale sous l\'autorité de la Volonté Générale.',
        contextOrApplication: 'Axe démocratique : la souveraineté populaire et la loi comme expression de tous.',
      },
      {
        name: 'Karl Marx — L\'Idéologie allemande (1845)',
        formulaOrRule: '« L\'État est un instrument d\'oppression de la classe dominante sur la classe dominée. »',
        explanation: 'L\'État moderne masque sous le droit abstrait les rapports d\'exploitation économique et la propriété privée.',
        contextOrApplication: 'Axe critique socio-économique : l\'État comme superstructure idéologique.',
      },
      {
        name: 'Max Weber — Le Savant et le Politique (1919)',
        formulaOrRule: '« L\'État est cette communauté humaine qui revendique le monopole de la violence physique légitime. »',
        explanation: 'Seul l\'État a le droit d\'user de la force pour faire respecter les lois démocratiques et préserver la paix publique.',
        contextOrApplication: 'Axe sociologique : monopole régalien et rationalité bureaucratique.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Poser la distinction entre État de nature et État civil',
        whatToDo: 'Définir pourquoi les hommes ont créé l\'État (passage de la violence arbitraire à la règle de droit).',
        reflexOrTip: 'Mobiliser les théoriciens du Contrat Social (Hobbes, Locke, Rousseau).',
      },
      {
        stepNumber: 2,
        title: 'Confronter le risque d\'oppression étatique à l\'exigence de justice',
        whatToDo: 'Analyser la tentation du totalitarisme ou de l\'arbitraire policier versus la garantie des libertés fondamentales.',
        reflexOrTip: 'Distinguer droit positif (les lois écrites d\'un pays) et droit naturel/moral (l\'idéal de justice universelle).',
      },
      {
        stepNumber: 3,
        title: 'Synthétiser autour de l\'État de droit démocratique',
        whatToDo: 'Montrer que l\'État n\'est pas une fin en soi mais un moyen au service de l\'émancipation citoyenne et du bien commun.',
        reflexOrTip: 'Citer la séparation des pouvoirs de Montesquieu et la primauté de la justice sociale.',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : « L\'État est-il l\'ennemi de la liberté individuelle ? »',
      solutionStepByStep: `1. Thèse : L'État restreint la liberté par ses lois, ses impôts et son appareil coercitif répressif.\n2. Antithèse : Sans l'État et ses lois, la liberté naturelle dégénère en loi du plus fort où nul n'est véritablement en sécurité (Hobbes, Rousseau).\n3. Synthèse : L'État de droit démocratique ne détruit pas la liberté, il en est la condition de possibilité en la garantissant également pour chaque citoyen.`,
      finalAnswer: 'Démonstration complète certifiée conforme aux annales officielles de Philosophie politique.',
    },
    classicExamTraps: [
      'Confondre autorité légitime fondée sur la loi et autoritarisme tyrannique arbitraire.',
      'Oublier de distinguer légalité (ce qui est conforme aux lois) et légitimité (ce qui est juste moralement, cf. Antigone).',
      'Présenter l\'anarchisme ou la suppression de l\'État sans analyser les conséquences concrètes sur la paix civile.',
    ],
    selfCheckChecklist: [
      'Les théories du contrat social sont-elles bien distinguées (Hobbes vs Rousseau) ?',
      'La différence entre force brute et puissance légitime est-elle démontrée ?',
      'La conclusion répond-elle rigoureusement au sujet posé ?',
    ],
    quickRevisionMemo: 'L\'État n\'est pas l\'ennemi de la liberté authentique : il en est le rempart indispensable contre la tyrannie du plus fort.',
    certificationNote: 'Fiche conforme aux exigences du Baccalauréat ivoirien (Séries A, C, D).',
    essayStructure: {
      amorce: `Depuis l'Antiquité, la vie en communauté politique s'est organisée autour d'institutions souveraines chargées d'édicter le droit et d'assurer la sécurité des citoyens.`,
      definitionTension: `Pourtant, par ses lois contraignantes, sa police et ses tribunaux, l'État impose des limites strictes à nos désirs, ce qui pousse souvent l'individu à percevoir l'appareil étatique comme un pouvoir oppresseur réduisant sa liberté d'action.`,
      problematique: `Dès lors, l'État est-il un instrument liberticide qui confisque l'autonomie des individus, ou constitue-t-il au contraire la condition institutionnelle indispensable sans laquelle aucune liberté réelle et durable ne saurait exister ?`,
      annoncePlan: `Dans une première partie, nous analyserons les raisons qui conduisent à considérer l'État comme une menace pour la liberté individuelle ; puis, nous démontrerons que la liberté véritable n'est possible qu'au sein de l'ordre juridique garanti par l'État ; enfin, nous établirons que seul un État de droit républicain et démocratique réalise la conciliation harmonieuse du pouvoir et de la justice.`,
      axes: [
        {
          title: `Axe I : L'État perçu comme une entrave et un instrument de domination liberticide`,
          thesisOverview: `L'appareil étatique s'impose aux individus par la contrainte et l'exercice d'un pouvoir coercitif.`,
          arguments: [
            {
              letter: 'A',
              title: `La contrainte des lois et le monopole de la violence`,
              argument: `L'État exige l'obéissance sous peine de sanctions pénales et prive le citoyen de son indépendance naturelle absolue.`,
              explication: `L'omniprésence des règlements, de la fiscalité et des forces de l'ordre peut donner le sentiment d'une dépossession permanente de l'initiative individuelle.`,
              illustration: {
                auteur: 'Max Weber',
                oeuvre: 'Le Savant et le Politique (1919)',
                citation: '« L\'État est cette communauté humaine qui revendique avec succès le monopole de la violence physique légitime. »',
                analyseIllustration: `Weber rappelle que l'essence institutionnelle de l'État repose ultimement sur la contrainte armée, ce qui peut dégénérer en appareil d'asservissement si aucun contre-pouvoir n'existe.`
              }
            },
            {
              letter: 'B',
              title: `L'État comme instrument d'oppression de classe`,
              argument: `Loin de défendre l'intérêt général, l'État protège souvent les privilèges économiques des plus riches au détriment des masses populaires.`,
              explication: `Le droit positif et les institutions politiques servent de masque idéologique pour pérenniser l'inégalité et l'exploitation sociale.`,
              illustration: {
                auteur: 'Karl Marx',
                oeuvre: 'L\'Idéologie allemande (1845)',
                citation: '« L\'État est la forme par laquelle les individus d\'une classe dominante font valoir leurs intérêts communs. »',
                analyseIllustration: `Marx dénonce l'illusion de l'État neutre et bienveillant, appelant à son dépérissement ultime pour instaurer une société sans classes libérée de l'aliénation politique.`
              }
            }
          ]
        },
        {
          title: `Axe II : L'État comme rempart indispensable contre l'anarchie et fondement de la liberté civile`,
          thesisOverview: `L'absence d'État ne produit pas la liberté mais le chaos et le règne brutal de la loi du plus fort.`,
          arguments: [
            {
              letter: 'A',
              title: `La terreur de l'état de nature et la nécessité de la sécurité`,
              argument: `Sans une autorité supérieure souveraine pour faire respecter l'ordre, les hommes sont livrés à la guerre perpétuelle et à la violence arbitraire.`,
              explication: `L'indépendance sauvage où chacun fait tout ce qu'il veut aboutit à ce que personne ne soit libre, car chacun vit dans l'angoisse permanente d'être agressé.`,
              illustration: {
                auteur: 'Thomas Hobbes',
                oeuvre: 'Léviathan (1651)',
                citation: '« À l\'état de nature, la vie de l\'homme est solitaire, indigente, dégoûtante, animale et brève. »',
                analyseIllustration: `Hobbes démontre que l'institution de l'État civil est le seul moyen rationnel d'arracher l'humanité à la peur de la mort violente et de garantir la paix publique.`
              }
            },
            {
              letter: 'B',
              title: `La liberté civile et l'autonomie par la loi démocratique`,
              argument: `La loi républicaine ne supprime pas la liberté : elle la transforme en droit garanti en soumettant tous les citoyens à la même règle commune.`,
              explication: `En obéissant aux lois que la nation a démocratiquement élaborées, le citoyen n'obéit à aucun maître particulier et préserve sa pleine souveraineté morale.`,
              illustration: {
                auteur: 'Jean-Jacques Rousseau',
                oeuvre: 'Du contrat social (1762)',
                citation: '« L\'obéissance à la loi qu\'on s\'est prescrite est liberté. »',
                analyseIllustration: `Rousseau théorise le passage fondamental de la liberté naturelle animale à la liberté civile et morale régie par la Volonté Générale.`
              }
            }
          ]
        },
        {
          title: `Axe III : Synthèse — L'État de droit républicain : garant de la justice et de l'émancipation citoyenne`,
          thesisOverview: `L'État n'est légitime que lorsqu'il subordonne sa puissance au respect des droits de l'homme et à la justice sociale.`,
          arguments: [
            {
              letter: 'A',
              title: `La séparation des pouvoirs comme rempart contre la tyrannie`,
              argument: `Pour que l'État demeure au service de la liberté, sa propre puissance doit être divisée et encadrée par des contre-pouvoirs juridiques indépendants.`,
              explication: `Lorsque le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire sont séparés, l'arbitraire du prince est neutralisé par la force du droit constitutionnel.`,
              illustration: {
                auteur: 'Montesquieu',
                oeuvre: 'De l\'esprit des lois (1748)',
                citation: '« Pour qu\'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. »',
                analyseIllustration: `Montesquieu pose le socle des démocraties constitutionnelles modernes, où la puissance publique est bridée pour préserver la sécurité de chaque citoyen.`
              }
            }
          ]
        }
      ],
      conclusion: {
        bilanSynthese: `En conclusion, si l'État peut dégénérer en appareil oppressif lorsqu'il est confisqué par des intérêts particuliers ou des tyrans, il demeure en son essence la condition même de l'émancipation humaine.`,
        reponseDefinitive: `L'État n'est pas l'ennemi de la liberté : il en est le garant suprême dès lors qu'il s'érige en État de droit protecteur de la dignité, de l'égalité et de la justice pour tous.`,
        elargissement: `Le défi des républiques contemporaines, en Côte d'Ivoire comme partout dans le monde, réside dans le renforcement permanent de la démocratie citoyenne pour que la puissance publique demeure fidèle à sa mission de justice et de cohésion nationale.`
      }
    },
    expectedKeywords: ['état', 'justice', 'société', 'loi', 'liberté', 'rousseau', 'hobbes', 'weber', 'marx', 'montesquieu', 'contrat social', 'droit', 'pouvoir', 'légitimité']
  },

  // =========================================================================
  // 2. FRANÇAIS & LITTÉRATURE (BAC & BEPC) : ROMAN, POÉSIE ENGAGÉE, THÉÂTRE
  // =========================================================================
  {
    id: 'francais-roman-societe',
    queryKeywords: /roman|personnage|soci[ée]t[ée]|balzac|zola|kourouma|dadi[ée]|hugo|engagement|fiction/i,
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Lycée (1ère & Terminale)',
    chapterTitle: 'Le Roman et la Société : Miroir du réel, engagement critique et création esthétique',
    definitionAndScope: `Le roman est un genre narratif en prose mettant en scène des personnages engagés dans des péripéties. En littérature africaine et universelle, le roman oscille entre le réalisme social (peinture fidèle des mœurs, dénonciation des injustices) et l'autonomie poétique de la fiction.`,
    coreConceptsAndFormulas: [
      {
        name: 'Stendhal — Le Miroir le long du chemin (Le Rouge et le Noir, 1830)',
        formulaOrRule: '« Un roman est un miroir qui se promène sur une grande route. »',
        explanation: 'Le roman a une vocation réaliste : refléter les lumières mais aussi les boues et les tares de la société de son époque.',
        contextOrApplication: 'Axe réaliste : témoignage historique et sociologique.',
      },
      {
        name: 'Ahmadou Kourouma — Les Soleils des Indépendances (1968)',
        formulaOrRule: '« Les indépendances, rien dans le ventre, tout dans la gueule ! »',
        explanation: 'Le chef-d\'œuvre ivoirien déconstruit les désillusions post-coloniales à travers la déchéance de Fama Doumbouya, hybridant la syntaxe française avec la verve malinké.',
        contextOrApplication: 'Axe critique africain : dénonciation politique et renouveau stylistique.',
      },
      {
        name: 'Bernard Dadié — Climbié (1956)',
        formulaOrRule: '« L\'école est le fleuve qui charrie le savoir et féconde la nation. »',
        explanation: 'Roman d\'apprentissage autobiographique ivoirien relatant la formation d\'un jeune homme sous l\'ère coloniale et son éveil à la conscience patriotique.',
        contextOrApplication: 'Axe du roman d\'éducation et de mémoire collective.',
      },
      {
        name: 'Victor Hugo — Préface des Misérables (1862)',
        formulaOrRule: '« Tant qu\'il y aura sur la terre ignorance et misère, des livres de la nature de celui-ci pourront ne pas être inutiles. »',
        explanation: 'Le roman doit être une arme de combat au service des opprimés et du progrès moral de l\'humanité.',
        contextOrApplication: 'Axe du roman social engagé.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Analyser la citation et identifier le débat esthétique',
        whatToDo: 'Repérer la tension : le roman doit-il être un simple divertissement/œuvre d\'art pure ou un engagement social/politique ?',
        reflexOrTip: 'Préciser les genres romanesques : roman réaliste, naturaliste, d\'apprentissage, politique, allégorique.',
      },
      {
        stepNumber: 2,
        title: 'Illustrer par des œuvres précises (auteurs ivoiriens, africains et universels)',
        whatToDo: 'Citer des personnages et intrigues précis : Fama dans Les Soleils des Indépendances, Climbié de Dadié, Jean Valjean de Hugo, Rastignac de Balzac.',
        reflexOrTip: 'Ne jamais citer un titre sans donner le nom de l\'auteur et analyser la scène exacte.',
      },
      {
        stepNumber: 3,
        title: 'Construire la synthèse littéraire',
        whatToDo: 'Montrer que le roman transcende le simple document historique grâce au pouvoir créateur de la fiction et du style.',
        reflexOrTip: 'Conclure sur le roman comme exploration universelle de la condition humaine.',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : « Le romancier doit-il être avant tout le témoin engagé des souffrances de son peuple ? »',
      solutionStepByStep: `1. Thèse : Le romancier a un devoir civique et moral d'éclairer la société, de dénoncer les injustices et de réveiller les consciences (Hugo, Kourouma, Zola).\n2. Antithèse : Mais le roman est aussi une création imaginaire, une quête stylistique et un plaisir esthétique qui ne saurait être réduit à un manifeste politique (Proust, Flaubert).\n3. Synthèse : La grandeur du roman réside précisément dans sa capacité à marier la vérité humaine la plus poignante à l'art souverain de la forme et de la langue.`,
      finalAnswer: 'Dissertation littéraire complète avec corpus ivoirien et classique parfaitement équilibré.',
    },
    classicExamTraps: [
      'Raconter l\'intrigue d\'un livre au lieu de l\'utiliser comme argument et preuve démonstrative.',
      'Oublier les auteurs africains et ivoiriens au programme (Kourouma, Dadié, Camara Laye, Sembène Ousmane).',
      'Opposer stérilement réalisme et imagination sans montrer leur synthèse dialectique.',
    ],
    selfCheckChecklist: [
      'Mes exemples comportent-ils le nom de l\'auteur, l\'œuvre et le nom du personnage ?',
      'L\'analyse stylistique accompagne-t-elle le résumé des faits ?',
      'Les transitions entre les axes sont-elles rédigées avec soin ?',
    ],
    quickRevisionMemo: 'Le grand roman instruit, émeut et révolte : il est à la fois le miroir d\'une époque et le monument impérissable d\'une langue.',
    certificationNote: 'Fiche conforme aux directives pédagogiques de l\'Inspection Générale de Français.',
    essayStructure: {
      amorce: `Depuis son essor triomphal au XIXe siècle jusqu'aux chefs-d'œuvre contemporains de la littérature négro-africaine, le roman s'est imposé comme le genre littéraire le plus influent et le plus polymorphe de notre culture.`,
      definitionTension: `Interrogeant sans cesse le monde qui l'entoure, l'écrivain est souvent sommé de choisir entre la vocation testimoniale de sa plume, appelée à défendre les opprimés, et la liberté créatrice d'un art qui revendique le droit à la pure fiction et à la beauté stylistique.`,
      problematique: `Dès lors, le roman doit-il être prioritairement le miroir critique des tares sociales et le porte-voix des sans-voix, ou trouve-t-il sa véritable grandeur dans la transfiguration poétique et l'invention imaginaire ?`,
      annoncePlan: `Nous verrons dans un premier moment que le roman s'affirme comme une tribune indispensable d'engagement et de témoignage social ; puis, nous analyserons sa dimension fondamentale d'évasion, d'exploration psychologique et de perfection formelle ; enfin, nous montrerons que les chefs-d'œuvre romanesques réussissent la symbiose parfaite de la lucidité critique et de la puissance esthétique.`,
      axes: [
        {
          title: `Axe I : Le roman comme instrument d'éveil des consciences et miroir critique de la société`,
          thesisOverview: `Le romancier plonge au cœur du réel pour révéler les injustices et porter la voix de son peuple.`,
          arguments: [
            {
              letter: 'A',
              title: `La dénonciation des désillusions et des abus du pouvoir`,
              argument: `En dépeignant les tragédies de son temps, l'écrivain refuse la complaisance et oblige la société à regarder ses propres faillites.`,
              explication: `Le roman devient une arme politique redoutable pour briser les mensonges officiels et éveiller la lucidité citoyenne des lecteurs.`,
              illustration: {
                auteur: 'Ahmadou Kourouma',
                oeuvre: 'Les Soleils des Indépendances (1968)',
                citation: '« Les indépendances, rien dans le ventre, tout dans la gueule ! »',
                analyseIllustration: `À travers la déchéance tragique du prince Fama Doumbouya, Kourouma dresse un réquisitoire implacable contre la confiscation des libertés et la gabegie des régimes du parti unique en Afrique postcoloniale.`
              }
            },
            {
              letter: 'B',
              title: `La peinture poignante de la misère humaine`,
              argument: `Le romancier donne un visage humain aux laissés-pour-compte en suscitant l'indignation morale et la compassion bienfaisante.`,
              explication: `En racontant les souffrances des plus vulnérables, l'auteur incite à la réforme des lois et au progrès social de la collectivité.`,
              illustration: {
                auteur: 'Victor Hugo',
                oeuvre: 'Les Misérables (1862)',
                citation: '« Tant qu\'il y aura sur la terre ignorance et misère, des livres de la nature de celui-ci pourront ne pas être inutiles. »',
                analyseIllustration: `Le destin brisé de Fantine et le combat de Jean Valjean transforment le roman en un plaidoyer universel pour l'éducation et la réhabilitation des proscrits.`
              }
            }
          ]
        },
        {
          title: `Axe II : Le roman comme souveraineté de l'imaginaire, quête stylistique et plaisir de l'art`,
          thesisOverview: `Réduire le roman à un simple tract politique détruirait sa richesse poétique et sa liberté créatrice.`,
          arguments: [
            {
              letter: 'A',
              title: `Le pouvoir d'évasion et l'exploration de la subjectivité`,
              argument: `Le lecteur cherche d'abord dans le roman un univers imaginaire fascinant et une immersion intime dans les méandres de la psychologie humaine.`,
              explication: `La magie du roman réside dans sa capacité à nous faire vivre mille vies différentes, par-delà les urgences immédiates de la politique.`,
              illustration: {
                auteur: 'Marcel Proust',
                oeuvre: 'À la recherche du temps perdu (1913)',
                citation: '« La vraie vie, la vie enfin découverte et éclaircie, la seule vie par conséquent pleinement vécue, c\'est la littérature. »',
                analyseIllustration: `Proust démontre que l'art littéraire permet de ressusciter le temps enfoui et d'accéder à la vérité émotionnelle la plus profonde de la conscience.`
              }
            },
            {
              letter: 'B',
              title: `L'exigence du style et la beauté de la langue`,
              argument: `Un roman ne vaut pas seulement par le sujet qu'il traite, mais par la perfection de sa structure, de son rythme et de ses métaphores.`,
              explication: `Sans maîtrise formelle, les meilleures intentions militantes ne produisent que des œuvres éphémères et sans lendemain.`,
              illustration: {
                auteur: 'Gustave Flaubert',
                oeuvre: 'Correspondance (1852)',
                citation: '« Ce que je voudrais faire, c\'est un livre sur rien, un livre sans attache extérieure, qui se tiendrait de lui-même par la force interne de son style. »',
                analyseIllustration: `Flaubert érige le travail acharné de la phrase en idéal suprême, prouvant que l'art romanesque est d'abord une création esthétique autonome.`
              }
            }
          ]
        },
        {
          title: `Axe III : Synthèse — La transcendance romanesque : l'union du sens et de la forme`,
          thesisOverview: `Les plus grands romans sont ceux qui parviennent à rendre le combat humain inoubliable grâce à la perfection de leur écriture.`,
          arguments: [
            {
              letter: 'A',
              title: `L'enracinement historique transfiguré par le mythe`,
              argument: `Le grand écrivain part du particulier de son peuple pour atteindre l'universel de la condition humaine.`,
              explication: `C'est en réinventant la langue que le romancier confère à son témoignage une portée éternelle qui traverse les siècles.`,
              illustration: {
                auteur: 'Bernard Dadié',
                oeuvre: 'Climbié (1956)',
                citation: '« Je suis un homme, et rien de ce qui touche à l\'homme ne m\'est étranger. »',
                analyseIllustration: `Dadié réussit dans son récit initiatique à peindre la naissance de la Côte d'Ivoire moderne tout en livrant un hymne universel à la dignité et à la liberté de l'homme noir.`
              }
            }
          ]
        }
      ],
      conclusion: {
        bilanSynthese: `En somme, opposer le devoir de témoignage social et la quête de pureté artistique constitue une fausse querelle littéraire. L'histoire du roman prouve que ces deux exigences se nourrissent mutuellement.`,
        reponseDefinitive: `Le romancier n'est ni un simple propagandiste ni un rêveur désincarné : il est celui qui utilise la splendeur du verbe pour éclairer les souffrances et les espoirs de l'humanité.`,
        elargissement: `Dans un monde saturé d'écrans et d'informations éphémères, le roman demeure le sanctuaire irremplaçable où l'homme apprend à penser le monde avec profondeur et sensibilité.`
      }
    },
    expectedKeywords: ['roman', 'société', 'kourouma', 'dadié', 'hugo', 'balzac', 'zola', 'stendhal', 'flaubert', 'engagement', 'réalisme', 'style', 'fiction', 'personnage']
  },

  // =========================================================================
  // 3. MATHÉMATIQUES (BAC C, D & BEPC) : FONCTIONS, SUITES, PROBABILITÉS
  // =========================================================================
  {
    id: 'maths-analyse-fonctions',
    queryKeywords: /d[ée]riv|fonct|limite|asymptote|tableau de variation|continuit[ée]|tvi|exponentielle|logarithme|ln|primitive|int[ée]gral/i,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques — Analyse',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale C, D & E',
    chapterTitle: 'Étude Complète de Fonctions : Limites, Dérivation, TVI et Calcul Intégral',
    definitionAndScope: `L'analyse mathématique en classe de Terminale repose sur l'étude rigoureuse des fonctions numériques d'une variable réelle : ensemble de définition, limites aux bornes et asymptotes, calcul de la dérivée f'(x), signe de f' et sens de variation, théorème des valeurs intermédiaires (TVI), convexité et calcul d'aires sous la courbe par intégration.`,
    coreConceptsAndFormulas: [
      {
        name: 'Formules Fondamentales de Dérivation',
        formulaOrRule: '(u·v)\' = u\'v + uv\'  |  (u/v)\' = (u\'v - uv\')/v²  |  (e^u)\' = u\'·e^u  |  (ln u)\' = u\'/u  |  (u^n)\' = n·u\'·u^(n-1)',
        explanation: 'La fonction dérivée donne le coefficient directeur de la tangente à la courbe en tout point. Son signe indique strictement les variations de f(x).',
        contextOrApplication: 'Étape obligatoire de tout problème d\'analyse au Baccalauréat.',
      },
      {
        name: 'Croissances Comparées (Limites Indéterminées)',
        formulaOrRule: 'lim(x→+∞) (e^x / x^n) = +∞  |  lim(x→-∞) (x^n · e^x) = 0  |  lim(x→+∞) (ln(x) / x^n) = 0  |  lim(x→0+) (x^n · ln x) = 0',
        explanation: 'Permet de lever systématiquement les formes indéterminées (« ∞/∞ », « 0 × ∞ ») aux voisinages de l\'infini et de zéro.',
        contextOrApplication: 'Indispensable pour justifier rigoureusement les asymptotes horizontales et verticales.',
      },
      {
        name: 'Théorème des Valeurs Intermédiaires (Corollaire / Théorème de la Bijection)',
        formulaOrRule: 'Si f est continue et strictement monotone sur [a, b], pour tout k entre f(a) et f(b), l\'équation f(x) = k admet une unique solution α ∈ ]a, b[.',
        explanation: 'Garantit l\'existence et l\'unicité de la solution α et permet d\'en donner un encadrement par dichotomie ou balayage.',
        contextOrApplication: 'Question canonique présente dans 100% des épreuves de BAC C et D.',
      },
      {
        name: 'Équation de la Tangente et Calcul d\'Aire',
        formulaOrRule: 'Tangente en x_0 : y = f\'(x_0)·(x - x_0) + f(x_0)  |  Aire = ∫_a^b [f(x) - g(x)] dx en unités d\'aire (u.a.)',
        explanation: 'Traduit géométriquement les propriétés différentielles et intégrales de la fonction.',
        contextOrApplication: 'Tracé de la courbe représentative (C_f) et questions de synthèse.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Déterminer le domaine D_f et calculer les limites aux bornes',
        whatToDo: 'Identifier les valeurs interdites (dénominateurs non nuls, arguments strictement positifs pour ln). Calculer les limites et préciser la nature des asymptotes (verticale x=a, horizontale y=b, oblique y=ax+b).',
        reflexOrTip: 'Toujours rédiger : "Puisque lim numérateur = L et lim dénominateur = 0+, alors lim f(x) = +∞, donc la droite (D) : x=a est asymptote verticale à (C_f)".',
      },
      {
        stepNumber: 2,
        title: 'Calculer la dérivée f\'(x) et dresser le tableau de variations',
        whatToDo: 'Préciser que f est dérivable sur D_f comme somme/produit/quotient de fonctions dérivables. Factoriser f\'(x) au maximum pour étudier son signe de manière limpide.',
        reflexOrTip: 'Vérifier la cohérence entre les flèches du tableau de variations et les limites calculées aux bornes (pas de flèche montante vers une valeur inférieure).',
      },
      {
        stepNumber: 3,
        title: 'Appliquer le TVI et tracer les éléments caractéristiques de (C_f)',
        whatToDo: 'Vérifier les 3 hypothèses du TVI (continuité, stricte monotonie, appartenance de k à l\'intervalle image). Placer les asymptotes, les tangentes remarquables et les points d\'inflexion.',
        reflexOrTip: 'Encadrer le résultat final avec l\'arrondi demandé (à 10^-2 près).',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : Soit f(x) = (2x - 1)·e^(-x) + 1 sur ℝ. 1) Limites en -∞ et +∞. 2) Dérivée et variations. 3) Démontrer que f(x)=0 admet une unique solution α.',
      solutionStepByStep: `1. Limites :\n- En -∞ : lim (2x-1) = -∞ et lim e^(-x) = +∞, donc lim f(x) = -∞.\n- En +∞ : f(x) = 2x·e^(-x) - e^(-x) + 1. Par croissances comparées, lim (x·e^(-x)) = 0 et lim e^(-x) = 0, donc lim f(x) = 1. La droite (D) : y = 1 est asymptote horizontale en +∞.\n\n2. Dérivée : f est dérivable sur ℝ. f'(x) = 2·e^(-x) + (2x - 1)·(-e^(-x)) = (3 - 2x)·e^(-x).\nComme e^(-x) > 0 pour tout x, le signe de f'(x) est celui de (3 - 2x). f'(x) s'annule en x = 3/2 (f'(x) > 0 sur ]-∞, 3/2[ et f'(x) < 0 sur ]3/2, +∞[). Le maximum est f(3/2) = 2·e^(-3/2) + 1 ≈ 1,45.\n\n3. Solution unique : f est continue et strictement croissante sur ]-∞, 3/2[. f(]-∞, 3/2[) = ]-∞, 1.45[. Comme 0 ∈ ]-∞, 1.45[, l'équation f(x)=0 admet une unique racine α sur ]-∞, 3/2[. Sur [3/2, +∞[, f(x) ≥ 1 > 0, donc aucune autre solution.`,
      finalAnswer: 'Étude d\'analyse mathématique intégrale résolue avec rédaction exemplaire.',
    },
    classicExamTraps: [
      'Oublier de multiplier par u\' lors de la dérivation de composées : (e^(3x))\' = 3·e^(3x) et NON e^(3x).',
      'Écrire "lim 1/0 = ∞" sur sa copie (cette écriture est interdite par les jurys : écrire lim dénominateur = 0).',
      'Appliquer le TVI sans mentionner la CONTINUITÉ de la fonction sur l\'intervalle considéré.',
    ],
    selfCheckChecklist: [
      'Le domaine de définition et de dérivabilité a-t-il été posé ?',
      'Le signe de la dérivée est-il clairement justifié par un tableau de signes ?',
      'Toutes les asymptotes ont-elles leur équation cartésienne explicite ?',
    ],
    quickRevisionMemo: 'Dérivée positive = fonction croissante. Dérivée négative = fonction décroissante. TVI = continuité + stricte monotonie.',
    certificationNote: 'Fiche conforme aux exigences du Baccalauréat Scientifique (Séries C, D, E) et aux annales CIAM.',
    expectedKeywords: ['dérivée', 'limite', 'asymptote', 'fonction', 'tvi', 'exponentielle', 'logarithme', 'variations', 'tableau', 'tangente', 'intégrale', 'croissances comparées']
  },

  // 4. SUITES NUMÉRIQUES & PROBABILITÉS (Maths BAC)
  {
    id: 'maths-suites-probabilites',
    queryKeywords: /suite|arithm[ée]tique|g[ée]om[ée]trique|r[ée]currence|convergence|probabil|arbre|loi binomiale|d[ée]nombrement|combinaison/i,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques — Suites & Proba',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale C & D',
    chapterTitle: 'Suites Numériques & Probabilités : Raisonnement par récurrence, Sommes et Lois discrètes',
    definitionAndScope: `Les suites numériques modélisent des évolutions discrètes (terme général u_n, relation de récurrence u_(n+1) = f(u_n), convergence, théorème de convergence monotone). Les probabilités étudient les événements aléatoires (arbres pondérés, formule des probabilités totales, loi binomiale B(n, p)).`,
    coreConceptsAndFormulas: [
      {
        name: 'Suites Arithmétiques & Géométriques (Terme général et Sommes)',
        formulaOrRule: 'Arithmétique (raison r) : u_n = u_0 + n·r  |  Somme = (n+1)·(u_0 + u_n)/2\nGéométrique (raison q) : v_n = v_0 · q^n  |  Somme = v_0 · (1 - q^(n+1))/(1 - q)  (si q ≠ 1)',
        explanation: 'Si -1 < q < 1, alors lim(n→+∞) q^n = 0 (la suite géométrique converge vers 0). Si q > 1, elle diverge vers +∞.',
        contextOrApplication: 'Exercice récurrent n°1 du BAC ivoirien.',
      },
      {
        name: 'Raisonnement par Récurrence (Structure en 3 temps)',
        formulaOrRule: '1. Initialisation (vérifier au rang n_0)\n2. Hérédité (supposer P(n) vraie, démontrer P(n+1))\n3. Conclusion (P(n) est vraie pour tout n ≥ n_0)',
        explanation: 'Méthode de preuve universelle pour démontrer des inégalités ou des formes explicites de suites récurrentes.',
        contextOrApplication: 'Exigence de rigueur absolue au Baccalauréat.',
      },
      {
        name: 'Formule des Probabilités Totales & Loi Binomiale',
        formulaOrRule: 'Probabilités totales : P(B) = ∑ P(A_i ∩ B) = ∑ P(A_i) · P_{A_i}(B)\nLoi Binomiale B(n, p) : P(X = k) = (n k) · p^k · (1-p)^(n-k)  |  E(X) = n·p  |  V(X) = n·p·(1-p)',
        explanation: 'Modélise la répétition de n épreuves de Bernoulli identiques et indépendantes à deux issues (succès/échec).',
        contextOrApplication: 'Problème de probabilités standard du BAC.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Identifier la nature de la suite auxiliaire (v_n)',
        whatToDo: 'Calculer v_(n+1) en fonction de u_(n+1), remplacer par l\'expression de u_(n+1), factoriser par q pour faire apparaître v_n (v_(n+1) = q·v_n).',
        reflexOrTip: 'Toujours préciser le premier terme v_0 avec son calcul exact.',
      },
      {
        stepNumber: 2,
        title: 'Exprimer v_n puis u_n en fonction de n',
        whatToDo: 'Appliquer v_n = v_0 · q^n puis isoler u_n dans la relation de départ reliant u_n et v_n.',
        reflexOrTip: 'Calculer la limite quand n tend vers +∞ en utilisant la valeur de q.',
      },
      {
        stepNumber: 3,
        title: 'Résoudre les probabilités avec un arbre pondéré',
        whatToDo: 'Indiquer les probabilités sur chaque branche. La somme des probabilités issues d\'un même nœud doit toujours être égale à 1.',
        reflexOrTip: 'Citer textuellement la Formule des Probabilités Totales avant de calculer P(B).',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type : Soit (u_n) définie par u_0 = 1 et u_(n+1) = 1/3·u_n + 2. On pose v_n = u_n - 3. 1) Démontrer que (v_n) est géométrique. 2) Exprimer u_n en fonction de n. 3) Calculer sa limite.',
      solutionStepByStep: `1. Suite géométrique :\nv_(n+1) = u_(n+1) - 3 = (1/3·u_n + 2) - 3 = 1/3·u_n - 1 = 1/3·(u_n - 3) = 1/3·v_n.\nDonc (v_n) est une suite géométrique de raison q = 1/3 et de premier terme v_0 = u_0 - 3 = 1 - 3 = -2.\n\n2. Expression en fonction de n :\nPour tout entier naturel n, v_n = v_0 · q^n = -2 · (1/3)^n.\nPuisque v_n = u_n - 3, on en déduit : u_n = v_n + 3 = 3 - 2·(1/3)^n.\n\n3. Limite :\nComme -1 < 1/3 < 1, on a lim(n→+∞) (1/3)^n = 0.\nPar somme de limites, lim(n→+∞) u_n = 3 - 2·(0) = 3.\nLa suite (u_n) est convergente et converge vers 3.`,
      finalAnswer: 'Résolution méthodique parfaite sans aucune omission calculatoire.',
    },
    classicExamTraps: [
      'Confondre le nombre de termes dans une somme de 0 à n : il y a (n + 1) termes et non n termes.',
      'Oublier de préciser l\'hypothèse de récurrence lors de l\'étape d\'hérédité.',
      'Confondre combinaison (ordre non pris en compte) et arrangement (ordre pris en compte).',
    ],
    selfCheckChecklist: [
      'La raison de la suite géométrique est-elle mise en facteur correctement ?',
      'Le calcul du premier terme v_0 est-il explicité ?',
      'La convergence de la suite est-elle justifiée par l\'encadrement -1 < q < 1 ?',
    ],
    quickRevisionMemo: 'Suite géométrique : v_(n+1) = q·v_n. Limite de q^n = 0 si |q| < 1. Probabilités totales : somme des chemins menant à l\'événement.',
    certificationNote: 'Fiche conforme aux annales officielles de Mathématiques BAC C et D.',
    expectedKeywords: ['suite', 'arithmétique', 'géométrique', 'récurrence', 'convergence', 'limite', 'probabilités', 'binomiale', 'arbre pondéré', 'combinaison', 'espérance']
  },

  // =========================================================================
  // 4. PHYSIQUE-CHIMIE (BAC C/D & 3e BEPC) : MÉCANIQUE, ÉLECTRICITÉ, CHIMIE
  // =========================================================================
  {
    id: 'pc-mecanique-newton',
    queryKeywords: /m[ée]canique|newton|cin[ée]matique|trajectoire|acc[ée]l[ée]ration|vitesse|projectile|champ de pesanteur|travail|[ée]nergie/i,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie — Mécanique',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale C & D',
    chapterTitle: 'Mécanique Newtonienne : Lois de Newton, Mouvement dans un Champ de Pesanteur et Énergie',
    definitionAndScope: `La mécanique classique étudie le mouvement des corps sous l'action des forces extérieures. Elle repose sur les trois lois de Newton (principe d'inertie, relation fondamentale de la dynamique ∑ F_ext = m·a, principe des actions réciproques) et sur les théorèmes énergétiques (théorème de l'énergie cinétique ΔEc = ∑ W_AB(F)).`,
    coreConceptsAndFormulas: [
      {
        name: 'Deuxième Loi de Newton (Principe Fondamental de la Dynamique)',
        formulaOrRule: '∑ F_ext = m · a_G = m · (dv/dt)',
        explanation: 'Dans un référentiel galiléen, la somme des forces extérieures appliquées à un solide est égale au produit de sa masse par le vecteur accélération de son centre d\'inertie.',
        contextOrApplication: 'Base universelle de tous les problèmes de mécanique au BAC.',
      },
      {
        name: 'Équations Horaires du Mouvement d\'un Projectile dans le Champ g',
        formulaOrRule: 'Accélération : a_x = 0  |  a_y = -g\nVitesse : v_x(t) = v_0·cos(α)  |  v_y(t) = -g·t + v_0·sin(α)\nPosition : x(t) = v_0·cos(α)·t  |  y(t) = -1/2·g·t² + v_0·sin(α)·t + y_0',
        explanation: 'En éliminant t entre x(t) et y(t), on obtient l\'équation de la trajectoire parabolique : y(x) = -g/(2·v_0²·cos²(α)) · x² + tan(α)·x + y_0.',
        contextOrApplication: 'Calcul de la flèche (sommet) et de la portée (point d\'impact).',
      },
      {
        name: 'Théorème de l\'Énergie Cinétique (TEC) & Énergie Mécanique',
        formulaOrRule: 'ΔE_c = E_c(B) - E_c(A) = 1/2·m·v_B² - 1/2·m·v_A² = ∑ W_AB(F_ext)\nConservation de l\'énergie mécanique : E_m = E_c + E_p = constante (en l\'absence de frottements).',
        explanation: 'Permet de calculer une vitesse finale ou une hauteur sans devoir intégrer les équations différentielles horaires.',
        contextOrApplication: 'Méthode alternative élégante et rapide pour les calculs de vitesse.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Définir le système, le référentiel et faire le bilan des forces',
        whatToDo: 'Système : {solide de masse m}. Référentiel : terrestre supposé galiléen. Bilan : Poids P = m·g, Réaction normale R, Frottements f.',
        reflexOrTip: 'Faire un schéma clair avec le repère (O, i, j) et les vecteurs forces bien orientés.',
      },
      {
        stepNumber: 2,
        title: 'Projeter la 2e loi de Newton sur les axes du repère',
        whatToDo: 'Écrire P_x + R_x + f_x = m·a_x et P_y + R_y + f_y = m·a_y. Déduire les coordonnées du vecteur accélération a(t).',
        reflexOrTip: 'Intégrer successivement avec les conditions initiales à t=0 pour trouver v(t) puis r(t).',
      },
      {
        stepNumber: 3,
        title: 'Déterminer les grandeurs physiques remarquables avec unités',
        whatToDo: 'Calculer la flèche (quand v_y = 0) ou la portée (quand y = 0). Vérifier l\'homogénéité de la formule.',
        reflexOrTip: 'Toujours exprimer le résultat avec son unité réglementaire du Système International (m/s, m, N, J).',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : Un ballon est tiré du sol (y_0=0) avec une vitesse v_0 = 20 m/s faisant un angle α = 30° avec l\'horizontale (g = 9,8 m/s²). 1) Équation de la trajectoire. 2) Calculer la hauteur maximale (flèche).',
      solutionStepByStep: `1. Équation de la trajectoire :\nDans le repère (O, i, j), les équations horaires sont :\nx(t) = (20 · cos 30°) · t = 20 · (√3/2) · t = 17,32 · t  =>  t = x / 17,32.\ny(t) = -1/2 · (9,8) · t² + (20 · sin 30°) · t = -4,9 · t² + 10 · t.\nEn remplaçant t : y(x) = -4,9 · (x / 17,32)² + 10 · (x / 17,32) = -0,0163 · x² + 0,577 · x.\nLa trajectoire est une parabole concave vers le bas.\n\n2. Hauteur maximale (Flèche H) :\nAu sommet S de la trajectoire, la composante verticale de la vitesse s'annule : v_y(t_S) = 0.\n-9,8 · t_S + 10 = 0  =>  t_S = 10 / 9,8 = 1,02 s.\nEn reportant dans y(t) : y_max = -4,9 · (1,02)² + 10 · (1,02) = -5,10 + 10,20 = 5,10 m.\nLa hauteur maximale atteinte par le ballon est de 5,10 mètres.`,
      finalAnswer: 'Résolution physique rigoureuse avec toutes les étapes de calcul et unités précisées.',
    },
    classicExamTraps: [
      'Oublier de mentionner que le référentiel terrestre est "supposé galiléen" pour pouvoir appliquer Newton.',
      'Confondre sin(α) et cos(α) lors de la projection des composantes initiale de la vitesse.',
      'Oublier le signe négatif dans l\'accélération de la pesanteur : a_y = -g (car j est orienté vers le haut).',
    ],
    selfCheckChecklist: [
      'Le bilan des forces est-il complet avec les notations vectorielles correctes ?',
      'Les constantes d\'intégration à t=0 sont-elles explicitement justifiées ?',
      'Le résultat numérique est-il encadré avec son unité (ex: mètres, Joules) ?',
    ],
    quickRevisionMemo: '∑ F = m·a. Pour un projectile : mouvement rectiligne uniforme sur l\'axe Ox (a_x=0), mouvement rectiligne uniformément varié sur Oy (a_y=-g).',
    certificationNote: 'Fiche certifiée conforme aux programmes officiels de Physique-Chimie (BAC C, D).',
    expectedKeywords: ['mécanique', 'newton', 'accélération', 'vitesse', 'trajectoire', 'pesanteur', 'projectile', 'flèche', 'portée', 'énergie cinétique', 'force', 'frottement']
  },

  // 5. CHIMIE (Acides-Bases, pH, Estérification)
  {
    id: 'pc-chimie-acides-bases',
    queryKeywords: /chimie|acide|base|\bph\b|dosage|titrage|tampon|pka|est[ée]rification|oxydor[ée]duction|molaire/i,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie — Chimie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale C & D',
    chapterTitle: 'Chimie : Solutions Aqueuses, Réactions Acide-Base, pH et Dosages Volumétriques',
    definitionAndScope: `La chimie des solutions étudie les équilibres acide-base au sens de Brönsted (transfert de proton H+), la mesure du pH (pH = -log[H_3O+]), la constante d'acidité Ka / pKa, et les titrages volumétriques (équivalence C_A·V_AE = C_B·V_B).`,
    coreConceptsAndFormulas: [
      {
        name: 'Définition du pH & Produit Ionique de l\'Eau',
        formulaOrRule: 'pH = -log[H_3O+]  <=>  [H_3O+] = 10^(-pH)\nProduit ionique de l\'eau à 25°C : Ke = [H_3O+] · [HO-] = 10^(-14)  |  pKe = 14',
        explanation: 'Solution acide : pH < 7 ([H_3O+] > [HO-]). Solution neutre : pH = 7. Solution basique : pH > 7.',
        contextOrApplication: 'Fondement de la chimie analytique.',
      },
      {
        name: 'Relation d\'Henderson-Hasselbalch & Domaine de Prédominance',
        formulaOrRule: 'pH = pKa + log([Base] / [Acide])\nSi pH < pKa - 1 : l\'acide AH prédomine largement.\nSi pH = pKa : [AH] = [A-] (demi-équivalence d\'un dosage faible/fort).\nSi pH > pKa + 1 : la base A- prédomine largement.',
        explanation: 'Permet de tracer les diagrammes de prédominance et d\'expliquer le pouvoir tampon des solutions biologiques.',
        contextOrApplication: 'Question classique récurrente dans tous les examens.',
      },
      {
        name: 'Équivalence d\'un Titrage Acido-Basique',
        formulaOrRule: 'À l\'équivalence : n_acide_initial / a = n_base_versée / b  =>  C_A · V_A = C_B · V_BE (pour une réaction 1:1)',
        explanation: 'L\'équivalence est le moment où les réactifs ont été mélangés dans les proportions stœchiométriques.',
        contextOrApplication: 'Détermination expérimentale de concentrations inconnues.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Écrire l\'équation-bilan de la réaction avec les couples acide/base',
        whatToDo: 'Identifier l\'acide 1 (qui cède H+) et la base 2 (qui capte H+) : AH + B- ⇌ A- + BH.',
        reflexOrTip: 'Vérifier la conservation des éléments chimiques et de la charge électrique totale.',
      },
      {
        stepNumber: 2,
        title: 'Dresser le tableau d\'avancement en quantités de matière (moles)',
        whatToDo: 'Calculer l\'avancement maximal x_max et l\'avancement final x_f à partir de la mesure du pH. Déduire le taux d\'avancement final τ = x_f / x_max.',
        reflexOrTip: 'Si τ = 1, la réaction est totale (acide fort) ; si τ < 1, la réaction est limitée/équilibrée (acide faible).',
      },
      {
        stepNumber: 3,
        title: 'Exploiter le volume équivalent V_E',
        whatToDo: 'Appliquer la relation d\'équivalence pour calculer la concentration molaire inconnue C_A puis la concentration massique C_m = C_A · M.',
        reflexOrTip: 'Préciser l\'unité finale (mol/L ou g/L).',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type BAC : On dose V_A = 20 mL d\'une solution d\'acide éthanoïque CH_3COOH par de la soude (Na+ + HO-) de concentration C_B = 0,10 mol/L. Le volume à l\'équivalence est V_BE = 15 mL. 1) Équation du dosage. 2) Calculer C_A. 3) Donner le pH à la demi-équivalence (pKa = 4,8).',
      solutionStepByStep: `1. Équation bilan :\nCH_3COOH + HO- → CH_3COO- + H_2O (réaction totale, exothermique et rapide).\n\n2. Calcul de la concentration C_A :\nÀ l'équivalence stœchiométrique, la quantité de matière d'acide initialement présente est égale à la quantité de base apportée :\nC_A · V_A = C_B · V_BE\nC_A = (C_B · V_BE) / V_A = (0,10 mol/L · 15 mL) / 20 mL = 1,5 / 20 = 0,075 mol/L.\nLa concentration de la solution d'acide éthanoïque est donc C_A = 7,5 × 10^-2 mol/L.\n\n3. pH à la demi-équivalence :\nÀ la demi-équivalence (versé V_B = V_BE / 2 = 7,5 mL), la moitié de l'acide faible a été transformée en sa base conjuguée, donc [CH_3COOH] = [CH_3COO-].\nD'après la relation : pH = pKa + log([Base]/[Acide]) = pKa + log(1) = pKa.\nLe pH du mélange à la demi-équivalence est donc exactement égal au pKa, soit pH = 4,8.`,
      finalAnswer: 'Dosage acido-basique intégralement résolu selon les normes du BAC.',
    },
    classicExamTraps: [
      'Oublier de convertir les volumes en litres lors du calcul direct des quantités de matière en moles.',
      'Confondre réaction de dosage (qui doit être totale) et équilibre d\'ionisation dans l\'eau pure.',
      'Oublier que le pH à l\'équivalence d\'un acide faible dosé par une base forte est BASIQUE (pH_E > 7).',
    ],
    selfCheckChecklist: [
      'L\'équation de la réaction acido-basique est-elle équilibrée ?',
      'La formule d\'équivalence est-elle explicitée avant le calcul numérique ?',
      'L\'unité mol/L est-elle bien mentionnée avec le nombre correct de chiffres significatifs ?',
    ],
    quickRevisionMemo: 'Équivalence : C_A·V_A = C_B·V_BE. Demi-équivalence : pH = pKa. Acide fort dosé par base forte : pH_E = 7. Acide faible dosé par base forte : pH_E > 7.',
    certificationNote: 'Fiche conforme aux exigences de l\'épreuve écrite de Physique-Chimie du Baccalauréat.',
    expectedKeywords: ['chimie', 'acide', 'base', 'ph', 'dosage', 'équivalence', 'demi-équivalence', 'pka', 'titrage', 'avancement', 'soude', 'éthanoïque']
  },

  // =========================================================================
  // 5. HISTOIRE-GÉOGRAPHIE (BAC & BEPC) : DÉCOLONISATION, CÔTE D'IVOIRE, MONDIALISATION
  // =========================================================================
  {
    id: 'hg-decolonisation-ci',
    queryKeywords: /d[ée]colonisation|ind[ée]pendance|houphou[ëe]t|histoire|g[ée]ographie|c[ôo]te d'ivoire|caf[ée]|cacao|guerre froide|imp[ée]rialisme|mondialisation|d[ée]forestation/i,
    discipline: 'histoire',
    disciplineLabel: 'Histoire & Géographie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale & 3e BEPC',
    chapterTitle: 'Histoire-Géographie : Décolonisation africaine, Construction de la Côte d\'Ivoire moderne et Économie de rente',
    definitionAndScope: `L'Histoire-Géographie étudie l'évolution politique des sociétés contemporaines (l'émancipation des peuples colonisés en Afrique et Asie, la guerre froide, la marche vers l'indépendance de la Côte d'Ivoire proclamée le 7 août 1960) et les dynamiques territoriales (l'agriculture de rente café-cacao, le binôme portuaire d'Abidjan et San Pedro, les disparités régionales et la préservation de l'environnement).`,
    coreConceptsAndFormulas: [
      {
        name: 'La Marche de la Côte d\'Ivoire vers l\'Indépendance (1944 - 1960)',
        formulaOrRule: 'Création du SAA (1944) -> Fondation du PDCI-RDA (1946) -> Loi-cadre Defferre (1956) -> Communauté franco-africaine (1958) -> Proclamation de l\'Indépendance (7 août 1960 par Félix Houphouët-Boigny).',
        explanation: 'La décolonisation ivoirienne s\'est distinguée par une stratégie politique pragmatique et pacifique, fondée sur la suppression du travail forcé et l\'alliance syndicale des planteurs africains.',
        contextOrApplication: 'Chapitre historique majeur du programme officiel de 3e et Terminale.',
      },
      {
        name: 'Le Modèle Économique Ivoirien : L\'Agriculture de Rente',
        formulaOrRule: 'Binôme Café-Cacao (1er producteur mondial de cacao) + Diversification (Hévéa, Palmier à huile, Anacarde/Noix de cajou, Coton) + Infrastructures logistiques (Ports autonomes d\'Abidjan et San Pedro).',
        explanation: 'Moteur du « miracle ivoirien » des années 1960-1970, ce modèle fait face aujourd\'hui à des défis structurants : transformation locale industrielle, lutte contre la déforestation et volatilité des cours mondiaux.',
        contextOrApplication: 'Thème central de géographie économique.',
      },
      {
        name: 'Méthodologie du Commentaire de Document en Histoire-Géo',
        formulaOrRule: '1. Présentation générale (Nature, Auteur, Date, Source, Contexte historique / Idée générale)\n2. Analyse ordonnée des thèmes en confrontant le texte aux connaissances du cours\n3. Portée historique ou géographique et critique des limites du document.',
        explanation: 'Règle d\'or : ne jamais paraphraser le texte sans expliquer le contexte et les conséquences historiques.',
        contextOrApplication: 'Exercice obligatoire aux examens du BEPC et du BAC.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Identifier la consigne et le cadre spatio-temporel',
        whatToDo: 'Situer l\'événement dans sa période historique exacte (ex: 1944-1960 pour la décolonisation) ou définir l\'espace géographique étudié (le territoire ivoirien et ses zones agro-écologiques).',
        reflexOrTip: 'Citer les dates clés avec précision (7 août 1960, conférence de Brazzaville 1944, abolition du travail forcé en 1946 par la loi Houphouët-Boigny).',
      },
      {
        stepNumber: 2,
        title: 'Organiser le devoir en axes historiques ou géographiques équilibrés',
        whatToDo: 'Pour l\'histoire : Causes -> Déroulement/Étapes -> Conséquences et Portée. Pour la géographie : Atouts/Facteurs -> Manifestations spatiales -> Défis et Perspectives de développement.',
        reflexOrTip: 'Utiliser le vocabulaire technique : balance commerciale, PIB, transition démographique, souveraineté nationale, panafricanisme.',
      },
      {
        stepNumber: 3,
        title: 'Formuler un bilan nuancé',
        whatToDo: 'Faire la synthèse des acquis et ouvrir sur les défis contemporains (intégration sous-régionale CEDEAO, industrialisation, développement durable).',
        reflexOrTip: 'Rédiger une conclusion claire et prospective.',
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet type : « Analysez les facteurs internes et externes qui ont favorisé l\'accession de la Côte d\'Ivoire à la souveraineté internationale le 7 août 1960. »',
      solutionStepByStep: `1. Facteurs externes : L'affaiblissement des puissances coloniales après la Seconde Guerre mondiale, la pression anticoloniale de l'ONU et des deux superpuissances (États-Unis et URSS), la défaite française en Indochine (1954) et la guerre d'Algérie.\n2. Facteurs internes : La prise de conscience des élites et des planteurs ivoiriens avec la création du Syndicat Agricole Africain (1944), la suppression du travail forcé (loi Houphouët-Boigny de 1946), l'enracinement politique du PDCI-RDA et la mobilisation des femmes (marche de Grand-Bassam en décembre 1949).\n3. Évolution constitutionnelle : La loi-cadre de 1956 accordant l'autonomie interne, la République au sein de la Communauté en 1958, aboutissant à la proclamation solennelle de l'Indépendance le 7 août 1960.`,
      finalAnswer: 'Devoir d\'Histoire complet et documenté conforme aux standards des jurys d\'examen.',
    },
    classicExamTraps: [
      'Confondre la date de l\'Indépendance (7 août 1960) avec d\'autres dates nationales.',
      'Oublier le rôle décisif de la marche héroïque des femmes sur Grand-Bassam en 1949 pour la libération des patriotes.',
      'Faire un récit chronologique brut sans analyser les facteurs économiques et sociaux sous-jacents.',
    ],
    selfCheckChecklist: [
      'Les dates et personnages clés sont-ils mentionnés sans anachronisme ?',
      'Les facteurs internes et externes sont-ils tous deux examinés ?',
      'Le vocabulaire géographique et historique est-il maîtrisé ?',
    ],
    quickRevisionMemo: 'Indépendance de la Côte d\'Ivoire : 7 août 1960 par Félix Houphouët-Boigny. Économie : 1er producteur de cacao, modernisation par l\'agro-industrie et les infrastructures.',
    certificationNote: 'Fiche conforme aux programmes de la Direction de la Pédagogie et des Formations Continues (DPFC).',
    expectedKeywords: ['décolonisation', 'indépendance', 'houphouët-boigny', 'pdci', 'saa', 'grand-bassam', '7 août 1960', 'cacao', 'café', 'agriculture', 'ports', 'histoire', 'géographie']
  },
  // =========================================================================
  // 6. CLASSE DE 6ÈME (GÉOGRAPHIE, MATHÉMATIQUES, PHYSIQUE-CHIMIE)
  // =========================================================================
  {
    id: 'geo-6e-terre-milieux',
    queryKeywords: /fuseaux? horaires?|rotation.*terre|r[ée]volution.*terre|relief.*6e|milieu physique.*6e|cycle de l'eau.*6e|imp[ôo]t.*6e|civisme fiscal/i,
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Classe de 6ème)',
    cycle: 'premier_cycle_bepc',
    level: '6e',
    levelLabel: 'Classe de 6ème',
    chapterTitle: 'Géographie 6e : Mouvements de la Terre, Milieux Physiques & Civisme Fiscal',
    definitionAndScope: 'Étude des fondements de la géographie en 6ème selon le programme officiel ivoirien : la planète Terre dans l\'espace (rotation, révolution, fuseaux horaires), la variété des milieux physiques (reliefs, climats, végétation, cycle de l\'eau) et l\'importance citoyenne de l\'impôt dans le développement du pays.',
    coreConceptsAndFormulas: [
      {
        name: 'Rotation et Fuseaux Horaires',
        formulaOrRule: 'La Terre effectue 1 tour sur elle-même (360°) en 24h d\'Ouest en Est, soit 15° de longitude par fuseau d\'1 heure. Vers l\'Est, on ajoute du temps ; vers l\'Ouest, on retranche.',
        explanation: 'La rotation engendre l\'alternance régulière du jour et de la nuit ainsi que le décalage horaire mondial.',
        contextOrApplication: 'Calculs d\'heures locales d\'une ville à une autre à partir des longitudes.',
      },
      {
        name: 'Les Grandes Formes de Relief & le Cycle de l\'Eau',
        formulaOrRule: 'Plaines (surfaces planes de basse altitude sans encaissement), Plateaux (surfaces planes où les cours d\'eau sont encaissés dans des vallées), Montagnes (reliefs élevés aux fortes pentes).\nCycle de l\'eau : Évaporation -> Condensation (nuages) -> Précipitations -> Infiltration & Ruissellement.',
        explanation: 'Ces mécanismes conditionnent la vie végétale, la formation des sols et les activités agricoles humaines.',
        contextOrApplication: 'Descriptions et schémas d\'évaluation en géographie physique.',
      },
      {
        name: 'Civisme Fiscal et Développement National',
        formulaOrRule: 'L\'impôt est un prélèvement financier obligatoire opéré par l\'État (DGI) auprès des citoyens et entreprises pour financer les services publics (écoles, hôpitaux, routes, sécurité).',
        explanation: 'Payer ses impôts est un devoir patriotique et civique indispensable à l\'émergence de la nation.',
        contextOrApplication: 'Questions d\'éducation civique et fiscale au programme de 6e.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Identifier les repères géographiques et les données',
        whatToDo: 'Repérer la longitude de départ et d\'arrivée, ou identifier le type de milieu naturel décrit.',
        reflexOrTip: 'Toujours préciser les points cardinaux (Nord, Sud, Est, Ouest) et l\'origine (Méridien de Greenwich 0°).',
      },
      {
        stepNumber: 2,
        title: 'Appliquer la règle ou détailler le phénomène naturel',
        whatToDo: 'Pour les heures : Décalage = Écart en degrés / 15°. Pour les milieux : relier le climat à la végétation.',
        reflexOrTip: 'Montrer chaque étape de raisonnement sans sauter de conclusion.',
      },
      {
        stepNumber: 3,
        title: 'Formuler la conclusion scientifique ou citoyenne',
        whatToDo: 'Donner l\'heure exacte trouvée ou synthétiser la réponse en une phrase complète.',
        reflexOrTip: 'Vérifier la cohérence de l\'unité (heures, km, mètres d\'altitude).',
      }
    ],
    solvedExample: {
      problemStatement: 'Il est 12h à Abidjan (longitude 0°). Quelle heure est-il dans une ville située à 60° de longitude Est ?',
      solutionStepByStep: '1. Écart angulaire : 60° - 0° = 60° de longitude.\n2. Calcul du décalage : 60 / 15 = 4 fuseaux horaires, soit 4 heures.\n3. Sens du déplacement : La ville est située à l\'Est d\'Abidjan, donc le Soleil s\'y lève plus tôt, on ajoute le décalage.\n4. Heure locale : 12h + 4h = 16h00.',
      finalAnswer: 'Il est 16h00 dans la ville située à 60° de longitude Est.',
    },
    classicExamTraps: [
      'Soustraire les heures en allant vers l\'Est au lieu d\'ajouter.',
      'Confondre le plateau (cours d\'eau encaissés) avec la plaine (cours d\'eau coulant à fleur du sol).',
      'Confondre la rotation de la Terre (24h sur elle-même) avec la révolution (365 jours 1/4 autour du Soleil).',
    ],
    selfCheckChecklist: [
      'Le calcul de fuseau horaire précise-t-il la division par 15° ?',
      'La distinction plaine / plateau / montagne est-elle clairement justifiée ?',
      'Le rôle de l\'impôt dans les biens publics est-il explicité ?',
    ],
    quickRevisionMemo: 'Terre : Rotation (24h, jour/nuit, 1h=15°), Révolution (365j 1/4, 4 saisons). Reliefs : Plaines, plateaux, montagnes. Impôt : contribution citoyenne obligatoire pour financer les biens publics.',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Géographie 6ème.',
    expectedKeywords: ['rotation', 'révolution', 'fuseau', 'longitude', 'greenwich', 'plaine', 'plateau', 'montagne', 'cycle de l\'eau', 'impôt', 'dgi', 'contribuable', 'géographie 6e']
  },
  {
    id: 'maths-6e-numerique-geometrie',
    queryKeywords: /maths?.*6e|d[ée]cimaux.*6e|fraction.*6e|p[ée]rim[èe]tre.*aire.*6e|m[ée]diatrice.*6e|angle.*6e|priorit[ée]s op[ée]ratoires.*6e/i,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Classe de 6ème)',
    cycle: 'premier_cycle_bepc',
    level: '6e',
    levelLabel: 'Classe de 6ème',
    chapterTitle: 'Mathématiques 6e : Arithmétique, Écritures Fractionnaires & Géométrie Fondamentale',
    definitionAndScope: 'Socle fondamental des compétences mathématiques de 6ème : nombres entiers et décimaux, priorités de calculs, fractions, pourcentages et proportionnalité, constructions géométriques (médiatrice, droites perpendiculaires et parallèles, angles, triangles, quadrilatères) et calculs de périmètres et aires.',
    coreConceptsAndFormulas: [
      {
        name: 'Priorités Opératoires et Calcul Numérique',
        formulaOrRule: 'Dans une suite d\'opérations sans parenthèses, la multiplication et la division sont prioritaires sur l\'addition et la soustraction. Avec parenthèses, on calcule d\'abord les parenthèses les plus intérieures.',
        explanation: 'Règle universelle de calcul pour éviter toute ambiguïté sur les résultats.',
        contextOrApplication: 'Calculs posés et simplifications d\'expressions numériques.',
      },
      {
        name: 'Fractions et Pourcentages',
        formulaOrRule: 'Égalité de fractions : a/b = (a × k)/(b × k). Calcul de pourcentage : Pourcentage P = Valeur totale × (t / 100).',
        explanation: 'Permet de simplifier les quotients et de résoudre les situations de remises ou de proportions.',
        contextOrApplication: 'Problèmes de partage et calculs financiers du quotidien.',
      },
      {
        name: 'Périmètres et Aires des Figures Usuelles',
        formulaOrRule: 'Périmètre Rectangle : 2 × (L + l) ; Aire Rectangle : L × l.\nPérimètre Carré : 4 × c ; Aire Carré : c × c.\nAire Triangle : (Base × Hauteur) / 2 ; Périmètre Cercle : 2 × π × r ; Aire Disque : π × r².',
        explanation: 'Toutes les longueurs doivent impérativement être exprimées dans la même unité avant de calculer l\'aire.',
        contextOrApplication: 'Résolution de situations d\'évaluation géométriques et mesures foncières.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Relever les données et écrire la formule littérale',
        whatToDo: 'Identifier les nombres connus, convertir les unités si besoin et citer la formule de cours.',
        reflexOrTip: 'Toujours écrire la formule avec les lettres (ex: P = 2 × (L + l)) avant de remplacer par les nombres.',
      },
      {
        stepNumber: 2,
        title: 'Effectuer les calculs détaillés étape par étape',
        whatToDo: 'Respecter rigoureusement les priorités opératoires et poser les étapes une ligne après l\'autre.',
        reflexOrTip: 'Ne faire aucun calcul de tête non écrit lors des évaluations.',
      },
      {
        stepNumber: 3,
        title: 'Encadrer le résultat final avec l\'unité exacte',
        whatToDo: 'Formuler une phrase de réponse complète accompagnée de l\'unité (cm, m, cm², m², FCFA).',
        reflexOrTip: 'Vérifier la cohérence de l\'ordre de grandeur.',
      }
    ],
    solvedExample: {
      problemStatement: 'Un terrain rectangulaire a une longueur L = 40 m et une largeur l = 25 m. Calcule son périmètre et son aire.',
      solutionStepByStep: '1. Calcul du périmètre :\n   P = 2 × (L + l)\n   P = 2 × (40 + 25) = 2 × 65 = 130 m.\n2. Calcul de l\'aire :\n   A = L × l\n   A = 40 × 25 = 1 000 m².',
      finalAnswer: 'Le périmètre du terrain est de 130 m et son aire est de 1 000 m².',
    },
    classicExamTraps: [
      'Additionner des grandeurs exprimées dans des unités différentes (ex: m et cm) sans conversion préalable.',
      'Oublier la priorité de la multiplication sur l\'addition dans des calculs comme 5 + 3 × 4 = 5 + 12 = 17 (et non 32).',
      'Confondre le périmètre (longueur du contour en mètres) et l\'aire (surface intérieure en mètres carrés).',
    ],
    selfCheckChecklist: [
      'Toutes les conversions d\'unités sont-elles faites ?',
      'Les priorités de calcul sont-elles respectées ?',
      'L\'unité finale (m, m², cm) est-elle bien mentionnée ?',
    ],
    quickRevisionMemo: 'Priorités : () puis × et ÷ puis + et -. Fractions : simplifier en divisant numérateur et dénominateur par un diviseur commun. Aires : Rectangle = L × l, Triangle = (b × h)/2, Carré = c².',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Mathématiques 6ème.',
    expectedKeywords: ['décimaux', 'fractions', 'priorités', 'périmètre', 'aire', 'médiatrice', 'angle', 'rectangle', 'carré', 'triangle', 'maths 6e']
  },
  {
    id: 'pc-6e-electricite-matiere-chimie',
    queryKeywords: /physique.*6e|chimie.*6e|circuit.*6e|court-circuit.*6e|va-et-vient.*6e|combustion.*butane.*6e|masse volumique.*6e|m[ée]nisque.*6e|fusible.*6e/i,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Classe de 6ème)',
    cycle: 'premier_cycle_bepc',
    level: '6e',
    levelLabel: 'Classe de 6ème',
    chapterTitle: 'Physique-Chimie 6e : Circuits Électriques, États de la Matière & Combustions',
    definitionAndScope: 'Programme officiel de Physique-Chimie en 6ème : montage d\'un circuit électrique simple et montage va-et-vient, identification des conducteurs et isolants, prévention des courts-circuits par fusibles et disjoncteurs, mesures de masse et de volume, étude des états de la matière et changements d\'état de l\'eau, constituants de l\'air et combustions du butane et du charbon.',
    coreConceptsAndFormulas: [
      {
        name: 'Le Circuit Électrique et la Sécurité Domestique',
        formulaOrRule: 'Un circuit fermé permet le passage du courant du pôle (+) vers le pôle (-) du générateur. En cas de contact direct entre les fils sans récepteur, il y a court-circuit (danger d\'incendie), arrêté automatiquement par le fusible ou le disjoncteur.',
        explanation: 'Principes fondamentaux de la distribution d\'énergie et de la sécurité des installations domestiques.',
        contextOrApplication: 'Schémas normalisés de circuits et montages va-et-vient dans les maisons.',
      },
      {
        name: 'Mesure de Volume et de Masse',
        formulaOrRule: 'Volume par éprouvette graduée : lecture sous la surface libre du ménisque horizontal.\nVolume d\'un solide par déplacement de liquide : V = V2 - V1.\nMasse volumique : ρ = m / V (en g/cm³ ou kg/m³).',
        explanation: 'Démarche expérimentale rigoureuse pour caractériser la matière.',
        contextOrApplication: 'Exercices pratiques de travaux dirigés de physique.',
      },
      {
        name: 'L\'Air et les Combustions du Butane',
        formulaOrRule: 'L\'air contient environ 21% de dioxygène (comburant) et 78% de diazote.\nCombustion complète du butane (virole ouverte, flamme bleue) -> Dioxyde de carbone (trouble l\'eau de chaux) + Eau (bleuit le sulfate de cuivre).\nCombustion incomplète (virole fermée, flamme jaune) -> Dépôt de carbone noir (suie) + Monoxyde de carbone (gaz mortel toxique CO).',
        explanation: 'Compréhension des transformations chimiques et prévention des accidents domestiques liés au gaz.',
        contextOrApplication: 'Questions de cours et situations d\'évaluation en chimie.',
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Identifier le dispositif expérimental ou le circuit',
        whatToDo: 'Repérer les dipôles présents (pile, lampe, interrupteur) ou les réactifs de la combustion (butane + dioxygène).',
        reflexOrTip: 'Utiliser les symboles normalisés officiels pour les schémas électriques.',
      },
      {
        stepNumber: 2,
        title: 'Appliquer les lois physiques ou les tests chimiques',
        whatToDo: 'Rappeler le test à l\'eau de chaux (CO2) ou la formule V = V2 - V1.',
        reflexOrTip: 'Distinguer nettement ce que l\'on observe (la flamme est jaune) et ce que l\'on en déduit (la combustion est incomplète).',
      },
      {
        stepNumber: 3,
        title: 'Donner la réponse chiffrée avec unité et règles de sécurité',
        whatToDo: 'Calculer la masse volumique ou énoncer le conseil de sécurité préconisé.',
        reflexOrTip: 'Mentionner toujours l\'unité de mesure (g, mL, °C, etc.).',
      }
    ],
    solvedExample: {
      problemStatement: 'On place 50 mL d\'eau dans une éprouvette graduée. On y plonge un solide de masse m = 120 g, le niveau monte à 75 mL. Calcule le volume du solide et sa masse volumique.',
      solutionStepByStep: '1. Calcul du volume du solide par déplacement d\'eau :\n   V = V2 - V1 = 75 mL - 50 mL = 25 mL (soit 25 cm³).\n2. Calcul de la masse volumique :\n   ρ = m / V\n   ρ = 120 g / 25 cm³ = 4,8 g/cm³.',
      finalAnswer: 'Le volume du solide est de 25 cm³ et sa masse volumique est de 4,8 g/cm³.',
    },
    classicExamTraps: [
      'Lire le volume au bord supérieur du ménisque plutôt qu\'au fond du ménisque.',
      'Oublier que le dioxygène est le seul gaz comburant de l\'air qui entretient la combustion.',
      'Confondre la combustion complète (flamme bleue, pas de fumée noire) et incomplète (flamme jaune, suie, CO dangereux).',
    ],
    selfCheckChecklist: [
      'Le symbole de chaque dipôle électrique est-il respecté ?',
      'Le calcul de volume par déplacement d\'eau est-il explicite ?',
      'Les produits de combustion du butane sont-ils clairement identifiés ?',
    ],
    quickRevisionMemo: 'Électricité : courant va du (+) vers le (-), fusible protège des courts-circuits. Matière : V_solide = V2 - V1, ρ = m/V. Chimie : Air = 21% O2 + 78% N2. Butane + O2 -> CO2 (trouble eau de chaux) + H2O (sulfate de cuivre bleuit).',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Physique-Chimie 6ème.',
    expectedKeywords: ['circuit', 'va-et-vient', 'court-circuit', 'fusible', 'disjoncteur', 'volume', 'ménisque', 'masse', 'butane', 'combustion', 'dioxygène', 'physique 6e', 'chimie 6e']
  },

  // =========================================================================
  // 12. ALLEMAND TERMINALE (TOUTES SÉRIES - DPFC / MENA CÔTE D'IVOIRE)
  // =========================================================================
  {
    id: 'allemand-tle-lecon1-mitmachen',
    queryKeywords: /klimawandel|treibhausgas|klima\b|konditionals[aä]tz|passiversatz|workcamp|umweltclub|bananenabf|erw[aä]rmung/i,
    discipline: 'allemand',
    disciplineLabel: 'Allemand (Terminale A, C, D)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A1, A2, C, D)',
    chapterTitle: 'Leçon 1 : Mitmachen — Globaler Klimawandel, Schüler für die Umwelt & Konditionalsätze',
    definitionAndScope: `Étude de la Leçon 1 du programme ivoirien d'Allemand en Terminale (Ihr und wir plus 3) : le changement climatique mondial (der globale Klimawandel), l'action citoyenne des jeunes pour l'environnement (Umweltclub, Recycling) et les chantiers de volontariat (Workcamp). Sur le plan linguistique, maîtrise des Konditionalsätze (à l'indicatif et au Konjunktiv II), des équivalents du passif (lässt sich, ist zu, -bar) et des relatives avec prépositions, wo et was.`,
    coreConceptsAndFormulas: [
      {
        name: 'Konditionalsatz mit "wenn" (Indicatif & Konjunktiv II)',
        formulaOrRule: 'Wenn + Subjekt + ... + finites Verb am Ende, finites Verb + Subjekt ...',
        explanation: 'La conjonction "wenn" renvoie le verbe conjugué à la fin de la subordonnée. La principale commence immédiatement par son verbe conjugué.',
        contextOrApplication: 'Wenn große Mengen an Treibhausgasen produziert werden, hat das Temperaturerhöhungen zur Folge.'
      },
      {
        name: 'Konditionalsatz ohne "wenn" (Inversion initiale)',
        formulaOrRule: 'Finites Verb (Position 1) + Subjekt + ..., finites Verb + Subjekt ...',
        explanation: 'En l\'absence de "wenn", le verbe conjugué de la condition prend la première place.',
        contextOrApplication: 'Werden Treibhausgase produziert, steigen die Temperaturen.'
      },
      {
        name: 'Unpersönliche Ausdrucksweise (Équivalents du passif)',
        formulaOrRule: 'lässt sich + Inf. / ist... zu + Inf. / Adjektiv auf -bar',
        explanation: 'Permet d\'exprimer une possibilité ou obligation passive sans mentionner l\'agent.',
        contextOrApplication: 'Sauberes Wasser lässt sich trinken. = Sauberes Wasser ist trinkbar.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Analyser et structurer la phrase conditionnelle',
        whatToDo: 'Identifier si la consigne demande une phrase avec "wenn", sans "wenn" ou nominale avec "Bei + Datif".',
        reflexOrTip: 'Vérifier que le verbe de la principale est en 1ère position après la subordonnée.'
      },
      {
        stepNumber: 2,
        title: 'Traiter une situation d\'évaluation sur l\'environnement',
        whatToDo: 'Présenter le problème, citer deux causes précises (Treibhausgase, Industrie), deux conséquences (Dürre, Überschwemmungen) et deux solutions (Müll recyceln, Sonnenenergie).',
        reflexOrTip: 'Utiliser les connecteurs causaux (weil + verbe fin / denn + verbe pos 2).'
      }
    ],
    solvedExample: {
      problemStatement: 'Verbinde mit "wenn" und ohne "wenn" : "Die Trockenzeit nimmt zu. Die Ernten gehen zurück."',
      solutionStepByStep: '1. Avec wenn : "Wenn die Trockenzeit zunimmt, gehen die Ernten zurück."\n2. Sans wenn : "Nimmt die Trockenzeit zu, gehen die Ernten zurück."',
      finalAnswer: 'Wenn die Trockenzeit zunimmt, gehen die Ernten zurück / Nimmt die Trockenzeit zu, gehen die Ernten zurück.'
    },
    classicExamTraps: [
      'Oublier de renvoyer le verbe conjugué à la fin de la proposition introduite par "wenn".',
      'Placer un sujet avant le verbe au début de la proposition principale (après la virgule).',
      'Confondre "das" et "was" dans les subordonnées relatives après "alles/etwas/nichts".'
    ],
    selfCheckChecklist: [
      'Le verbe est-il bien à la fin après "wenn" ?',
      'L\'adjectif en "-bar" est-il dérivé correctement du radical verbal ?',
      'La principale commence-t-elle bien par le verbe conjugué ?'
    ],
    quickRevisionMemo: 'Konditionalsatz : Wenn... (Verb Ende), (Verb 1)... | Ohne wenn : (Verb 1)..., (Verb 1)... | Passiversatz : lässt sich + Inf. / ist zu + Inf. / -bar.',
    certificationNote: 'Fiche certifiée conforme au programme officiel d\'Allemand Terminale (Ihr und wir plus 3).',
    expectedKeywords: ['mitmachen', 'klimawandel', 'umwelt', 'treibhausgase', 'konditionalsatz', 'wenn', 'passiv', 'lässt sich', 'workcamp', 'dürre', 'allemand terminale']
  },
  {
    id: 'allemand-tle-lecon2-kein-problem',
    queryKeywords: /kein problem|streit\b|konflikt|streitschlicht|drogen|rauscht|einbahnstra|je\s*desto|plusquamperfekt|nachdem/i,
    discipline: 'allemand',
    disciplineLabel: 'Allemand (Terminale A, C, D)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A1, A2, C, D)',
    chapterTitle: 'Leçon 2 : Kein Problem ?! — Streitschlichtung, Drogenkonsum, Je... desto & Plusquamperfekt',
    definitionAndScope: `Étude de la Leçon 2 du programme d'Allemand en Terminale (Ihr und wir plus 3) : la médiation scolaire et la résolution pacifique des conflits (Streitschlichtung), la lutte contre les fléaux sociaux (Drogenkonsum als Einbahnstraße, Alkohol, Rauchen), les formules pour donner des conseils (Ratschläge geben), la double comparaison proportionnelle (Je ... desto/umso) et le Plusquamperfekt avec la conjonction "nachdem".`,
    coreConceptsAndFormulas: [
      {
        name: 'Proportionaler Komparativsatz (Je ... desto / umso)',
        formulaOrRule: 'Je + Komparativ + Subjekt + ... + finites Verb, desto/umso + Komparativ + finites Verb + Subjekt ...',
        explanation: 'Exprime une corrélation proportionnelle : plus ..., plus ...',
        contextOrApplication: 'Je mehr Streitschlichter es gibt, desto weniger Streit gibt es.'
      },
      {
        name: 'Temporalsatz mit "nachdem" & Plusquamperfekt',
        formulaOrRule: 'Nachdem + Subjekt + ... + hatte/war ... Partizip II (PQP), Präteritum ...',
        explanation: 'L\'action introduite par "nachdem" est antérieure (PQP) à l\'action principale au prétérit.',
        contextOrApplication: 'Nachdem Ali die Kasse geknackt hatte, flog er von der Schule.'
      },
      {
        name: 'Ratschläge formulieren',
        formulaOrRule: 'Du solltest... / Ich rate dir, ... zu + Inf. / Das Beste wäre, wenn...',
        explanation: 'Formules officielles pour formuler des recommandations et conseils bienveillants.',
        contextOrApplication: 'Du solltest keine Drogen nehmen, weil sie deine Gesundheit zerstören.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Former la structure Je ... desto',
        whatToDo: '1. Placer "Je + comparatif" en tête de la subordonnée avec verbe à la fin.\n2. Placer "desto/umso + comparatif" en tête de la principale suivi immédiatement de son verbe conjugué.',
        reflexOrTip: 'Attention aux comparatifs irréguliers : viel -> mehr, gut -> besser, gern -> lieber.'
      },
      {
        stepNumber: 2,
        title: 'Traiter une chronologie avec "nachdem"',
        whatToDo: '1. Mettre la 1ère action dans la subordonnée "nachdem" au Plusquamperfekt (hatte/war + Partizip II).\n2. Mettre la 2nde action dans la principale au Präteritum.',
        reflexOrTip: 'Vérifier l\'auxiliaire : sein pour les verbes de déplacement/changement d\'état, haben pour les autres.'
      }
    ],
    solvedExample: {
      problemStatement: 'Formule une phrase avec Je ... desto : "Die Ferien sind lang. Fabienne wird faul."',
      solutionStepByStep: '1. Comparatif de lang = länger -> Je länger die Ferien sind,\n2. Comparatif de faul = fauler -> desto fauler wird Fabienne.',
      finalAnswer: 'Je länger die Ferien sind, desto fauler wird Fabienne.'
    },
    classicExamTraps: [
      'Inverser l\'ordre des mots après "desto" : le verbe conjugué doit suivre immédiatement l\'adjectif.',
      'Oublier le Plusquamperfekt dans la subordonnée avec "nachdem".',
      'Confondre "der Streit" (la dispute) et "die Streitenden" (les personnes qui se disputent).'
    ],
    selfCheckChecklist: [
      'L\'ordre des mots de "Je... desto" est-il respecté ?',
      'L\'auxiliaire du Plusquamperfekt est-il bien accordé au prétérit (hatte/war) ?',
      'Les conseils comportent-ils une justification avec "weil" ou "denn" ?'
    ],
    quickRevisionMemo: 'Je + Komparativ ... (Verb Ende), desto + Komparativ + Verb + Subjekt ... | Nachdem + hatte/war ... Partizip II, Verb(Prät) ...',
    certificationNote: 'Fiche certifiée conforme au programme officiel d\'Allemand Terminale (Ihr und wir plus 3).',
    expectedKeywords: ['kein problem', 'streit', 'streitschlichter', 'drogen', 'sucht', 'einbahnstraße', 'je desto', 'plusquamperfekt', 'nachdem', 'ratschläge', 'allemand terminale']
  },
  {
    id: 'allemand-tle-lecon3-alles-illusion',
    queryKeywords: /alles illusion|liebe\b|liebeskummer|sch[oö]nheit|werbung|konsum|finals[aä]tz|damit\b|um\s*zu|ohne\s*zu|anstatt\s*zu|wer\s*wen\s*wem/i,
    discipline: 'allemand',
    disciplineLabel: 'Allemand (Terminale A, C, D)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A1, A2, C, D)',
    chapterTitle: 'Leçon 3 : Alles Illusion ? — Liebe, Liebeskummer, Konsumgesellschaft, Finalsätze & Modalsätze',
    definitionAndScope: `Étude de la Leçon 3 du programme d'Allemand en Terminale (Ihr und wir plus 3) : la quête de l'idéal chez les jeunes (l'amour, la gestion du chagrin d'amour / Liebeskummer, les idéaux de beauté et la société de consommation / Werbung und Konsum). Sur le plan grammatical, maîtrise des propositions relatives générales (wer, wen, wem), des subordonnées finales (damit vs um... zu) et des propositions modales/adversatives (ohne... zu, ohne dass, anstatt... zu, anstatt dass).`,
    coreConceptsAndFormulas: [
      {
        name: 'Finalsätze : damit vs. um ... zu + Infinitiv',
        formulaOrRule: 'damit + Subjekt + ... + Verb am Ende (sujets différents ou mêmes) vs. um + ... + zu + Infinitiv (même sujet obligatoire)',
        explanation: 'Exprime le but ou l\'intention.',
        contextOrApplication: 'Ich lerne, um die Prüfung zu bestehen / Der Lehrer erklärt, damit die Schüler verstehen.'
      },
      {
        name: 'Modalsätze : ohne ... zu vs. anstatt ... zu',
        formulaOrRule: 'ohne ... zu + Inf. (sans faire) / (an)statt ... zu + Inf. (au lieu de faire)',
        explanation: 'Structures infinitives de restriction ou d\'alternative (identité de sujet).',
        contextOrApplication: 'Er kauft Produkte, ohne nachzudenken / Er sieht fern, anstatt zu lernen.'
      },
      {
        name: 'Relativsätze mit wer, wen, wem',
        formulaOrRule: 'Wer (Nom.) / Wen (Akk.) / Wem (Dat.) ... , (der/den/dem) ...',
        explanation: 'Propositions relatives libres portant sur une personne indéterminée (Quiconque, Celui qui).',
        contextOrApplication: 'Wer Liebeskummer hat, der sollte mit Freunden sprechen.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Choisir la structure finale adéquate',
        whatToDo: 'Vérifier les sujets de la principale et du but. Si sujets différents -> obligatoirement "damit". Si même sujet -> utiliser "um ... zu + Infinitif".',
        reflexOrTip: 'Pour les verbes à particule séparable, placer "zu" entre le préfixe et le radical (ex: einzukaufen).'
      },
      {
        stepNumber: 2,
        title: 'Exprimer une prise de position sur la beauté et la publicité',
        whatToDo: 'Distinguer les valeurs extérieures (gutes Aussehen, Kleidung) et les valeurs intérieures (guter Charakter, Ehrlichkeit, Humor). Développer l\'esprit critique face aux promesses publicitaires.',
        reflexOrTip: 'Employer des structures modales comme "anstatt blind der Mode zu folgen".'
      }
    ],
    solvedExample: {
      problemStatement: 'Traduire en allemand : "Le produit doit susciter l\'intérêt du client afin qu\'il l\'achète."',
      solutionStepByStep: '1. Sujet 1 = le produit (Das Produkt), Sujet 2 = le client (der Kunde / er) -> Sujets différents donc "damit".\n2. Verbe "kaufen" renvoyé à la fin conjugué.',
      finalAnswer: 'Das Produkt soll das Interesse des Kunden wecken, damit er es kauft.'
    },
    classicExamTraps: [
      'Employer "um... zu" lorsque les deux propositions ont des sujets différents.',
      'Oublier d\'envoyer le verbe conjugué à la fin après "damit", "ohne dass" ou "anstatt dass".',
      'Confondre "wer" (sujet), "wen" (COD) et "wem" (COI).'
    ],
    selfCheckChecklist: [
      'La distinction de sujet entre "damit" et "um... zu" est-elle respectée ?',
      'La particule "zu" est-elle correctement positionnée dans l\'infinitif ?',
      'Le lexique des qualités intérieures et du Liebeskummer est-il précis ?'
    ],
    quickRevisionMemo: 'But : même sujet = um ... zu + Inf. | sujets différents = damit ... (Verb Ende). Modales : ohne ... zu / (an)statt ... zu. Relative libre : wer / wen / wem.',
    certificationNote: 'Fiche certifiée conforme au programme officiel d\'Allemand Terminale (Ihr und wir plus 3).',
    expectedKeywords: ['alles illusion', 'liebe', 'liebeskummer', 'werbung', 'konsum', 'finalsatz', 'damit', 'um zu', 'ohne zu', 'anstatt zu', 'wer wen wem', 'allemand terminale']
  },
  {
    id: 'hg-onu-buts-principes-organes',
    queryKeywords: /\b(onu|l['’]onu|nations\s+unies|charte\s+de\s+l['’]onu|charte\s+des\s+nations\s+unies|buts?\s+(?:de\s+l['’]|des\s+nations\s+unies|fondamentaux\s+de\s+l['’])?onu|objectifs?\s+(?:et\s+principes\s+)?(?:de\s+l['’]|des\s+nations\s+unies)?onu|principes?\s+(?:de\s+l['’]|des\s+nations\s+unies|fondamentaux\s+de\s+l['’])?onu|organes?\s+(?:de\s+l['’]|des\s+nations\s+unies)?onu|conseil\s+de\s+s[eé]curit[eé]|droit\s+de\s+veto|casques\s+bleus)\b/i,
    discipline: 'histoire',
    disciplineLabel: 'Histoire & Géographie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A, C, D)',
    chapterTitle: 'L\'ONU : Création, Buts, Principes, Organes, Bilan et Perspectives',
    definitionAndScope: 'Étude complète de l\'Organisation des Nations Unies (ONU), fondée le 26 juin 1945 à la Conférence de San Francisco (entrée en vigueur de la Charte le 24 octobre 1945). Maîtrise des 4 buts fondamentaux (Article 1), des 7 principes directeurs (Article 2), des 6 organes de fonctionnement et du bilan critique (succès et blocages structurels du droit de veto).',
    coreConceptsAndFormulas: [
      {
        name: 'Les 4 Buts fondamentaux de l\'ONU (Article 1 de la Charte)',
        formulaOrRule: '1. Maintenir la paix et la sécurité internationales (sécurité collective).\n2. Développer entre les nations des relations amicales fondées sur le respect du principe de l\'égalité des droits des peuples et de leur droit à disposer d\'eux-mêmes.\n3. Réaliser la coopération internationale dans tous les domaines (économique, social, culturel, humanitaire).\n4. Être un centre où s\'harmonisent les efforts communs des nations.',
        explanation: 'Définis par l\'article 1 de la Charte de San Francisco pour préserver les générations futures du fléau de la guerre.',
        contextOrApplication: 'Sujet Bac : « Présente les buts fondamentaux assignés à l\'ONU par la Charte de San Francisco ».'
      },
      {
        name: 'Les 7 Principes directeurs de l\'ONU (Article 2 de la Charte)',
        formulaOrRule: '1. Égalité souveraine de tous les États membres.\n2. Exécution de bonne foi des obligations de la Charte.\n3. Règlement pacifique des différends internationaux.\n4. Non-recours à la menace ou à l\'emploi de la force contre l\'intégrité territoriale d\'un État.\n5. Obligation d\'assistance à l\'ONU et abstention de toute aide à un État agresseur.\n6. Respect des principes par les États non-membres pour préserver la paix.\n7. Principe de non-ingérence dans les affaires intérieures des États souverains.',
        explanation: 'Règles juridiques fondamentales de comportement que les États membres s\'engagent à respecter.',
        contextOrApplication: 'Différencier les buts (objectifs visés) des principes (règles juridiques d\'action).'
      },
      {
        name: 'Les 6 Organes principaux de fonctionnement',
        formulaOrRule: '1. Assemblée Générale (193 membres, 1 État = 1 voix, recommandations et budget).\n2. Conseil de Sécurité (15 membres dont 5 permanents dotés du droit de veto : USA, Russie, Chine, France, Royaume-Uni ; résolutions contraignantes, casques bleus, sanctions).\n3. Secrétariat Général (dirigé par Antonio Guterres, administration et bons offices).\n4. Cour Internationale de Justice (CIJ à La Haye, règlement des litiges juridiques interétatiques).\n5. Conseil Économique et Social (ECOSOC, coordination des agences spécialisées : UNESCO, OMS, UNICEF, HCR, FMI).\n6. Conseil de Tutelle (gestion historique des territoires sous mandat, suspendu en 1994).',
        explanation: 'Architecture institutionnelle équilibrant pouvoir délibératif universel et exécutif restreint.',
        contextOrApplication: 'Analyser la primauté exécutive du Conseil de Sécurité sous le Chapitre VII de la Charte.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Poser les origines et la genèse de l\'ONU',
        whatToDo: 'Rappeler la faillite de la Société des Nations (SDN) face à la Seconde Guerre mondiale, la Déclaration des Nations Unies (1942), la Conférence de San Francisco (25 avril - 26 juin 1945) et l\'entrée en vigueur de la Charte le 24 octobre 1945.',
        reflexOrTip: 'Toujours mentionner la date d\'adoption (26 juin 1945) et d\'entrée en vigueur (24 octobre 1945).'
      },
      {
        stepNumber: 2,
        title: 'Exposer avec rigueur les Buts et les Principes',
        whatToDo: 'Citer les 4 buts de l\'Article 1 et les 7 principes de l\'Article 2, en insistant sur l\'égalité souveraine et la non-ingérence.',
        reflexOrTip: 'Bien dissocier les buts (les fins recherchées) des principes (les moyens juridiques d\'action).'
      },
      {
        stepNumber: 3,
        title: 'Décrire les organes décisionnels et le droit de veto',
        whatToDo: 'Montrer la dualité entre l\'Assemblée Générale (délibérative) et le Conseil de Sécurité (exécutif), et expliciter le mécanisme du droit de veto accordé aux 5 Grands.',
        reflexOrTip: 'Citer les 5 membres permanents : USA, Russie, Chine, France, Royaume-Uni.'
      },
      {
        stepNumber: 4,
        title: 'Dresser un bilan critique d\'examen (Succès & Limites)',
        whatToDo: 'Opposer les succès tangibles (décolonisation, secours humanitaire, aucune 3e guerre mondiale) aux limites géopolitiques (veto paralysant, guerres unilatérales, urgence d\'une réforme avec un siège permanent pour l\'Afrique).',
        reflexOrTip: 'Toujours aborder les revendications d\'élargissement du Conseil de Sécurité.'
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet : « Les objectifs et principes de l\'ONU : fondements, fonctionnement et limites. »',
      solutionStepByStep: '1. Introduction : Contexte de 1945, échec de la SDN, signature de la Charte de San Francisco le 26 juin 1945.\n2. Buts et Principes : Les 4 buts (maintien de la paix, amitié, coopération, harmonisation) et les 7 principes (égalité souveraine, non-ingérence, règlement pacifique).\n3. Organes et Bilan : Rôle central du Conseil de Sécurité, succès (casques bleus, décolonisation) et limites (droit de veto).',
      finalAnswer: 'L\'ONU incarne l\'idéal de sécurité collective issu de 1945. Ses buts et principes définissent la légalité internationale, bien que l\'usage récurrent du droit de veto par les 5 permanents paralyse fréquemment ses capacités d\'intervention.'
    },
    classicExamTraps: [
      'Confondre les Buts (objectifs à atteindre : paix, coopération) avec les Principes (règles juridiques de conduite : égalité, non-ingérence).',
      'Confondre les résolutions de l\'Assemblée Générale (recommandations) avec celles du Conseil de Sécurité (contraignantes sous le Chapitre VII).',
      'Oublier le rôle de l\'ONU dans la décolonisation (résolution 1514 de 1960).'
    ],
    selfCheckChecklist: [
      'Les 4 buts de l\'article 1 sont-ils tous cités ?',
      'Les 7 principes de l\'article 2 sont-ils explicités ?',
      'La composition du Conseil de Sécurité (5 permanents avec veto + 10 non permanents) est-elle exacte ?',
      'Le bilan oppose-t-il clairement réalisations positives et limites structurelles ?'
    ],
    quickRevisionMemo: 'ONU : Fondée le 26 juin 1945 (San Francisco), Charte effective le 24 octobre 1945. 4 buts (Art. 1 : paix, amitié, coopération, harmonisation). 7 principes (Art. 2 : égalité souveraine, non-ingérence, règlement pacifique). 6 organes dont le Conseil de Sécurité (5 membres permanents avec droit de veto). Succès (casques bleus, décolonisation) vs limites (paralysie par le veto).',
    certificationNote: 'Fiche certifiée conforme au programme officiel d\'Histoire Terminale (Le Monde Contemporain).',
    expectedKeywords: ['onu', 'san francisco', 'charte des nations unies', 'buts de l onu', 'principes de l onu', 'conseil de securite', 'droit de veto', 'casques bleus', 'assemblee generale', 'securite collective']
  },
  {
    id: 'hg-bouake-metropole-centre',
    queryKeywords: /\b(bouake|bouak[eé]|metropole\s+du\s+centre.*ivoirien|2e\s+ville.*c[ôo]te\s+d['’]ivoire)\b/i,
    discipline: 'geographie',
    disciplineLabel: 'Histoire & Géographie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A, C, D)',
    chapterTitle: 'Bouaké : Deuxième Pôle Économique et Métropole d\'Équilibre de Côte d\'Ivoire',
    definitionAndScope: 'Étude géographique de Bouaké, 2e agglomération urbaine de Côte d\'Ivoire (région du Gbêkê, plateaux du Centre). Analyse de son rôle de carrefour routier et ferroviaire (axe Abidjan-Niger), de pôle agro-industriel et textile historique (Gonfreville 1921, CIDT, anacarde), de plaque tournante vivrière (Marché de Gros MGB) et de métropole d\'équilibre face à Abidjan (politique de l\'AVB, Université Alassane Ouattara).',
    coreConceptsAndFormulas: [
      {
        name: 'Position de carrefour multimodal national et sous-régional',
        formulaOrRule: 'Située au centre de la Côte d\'Ivoire, Bouaké relie le sud littoral (Abidjan) au Grand Nord et aux pays de l\'hinterland sahélien (Burkina Faso, Mali, Niger) via l\'autoroute du Nord et la voie ferrée Abidjan-Niger (SITARAIL).',
        explanation: 'Carrefour géographique naturel structurant les flux marchands de la sous-région.',
        contextOrApplication: 'Justifier pourquoi Bouaké est qualifiée de carrefour géostratégique.'
      },
      {
        name: 'Pôle agro-industriel et textile historique',
        formulaOrRule: 'Berceau du textile ivoirien avec les Établissements Gonfreville (créés en 1921) et la CIDT (coton). Développement récent d\'usines de transformation de la noix de cajou (anacarde) et agroalimentaire.',
        explanation: 'Centre industriel historique de l\'intérieur ivoirien.',
        contextOrApplication: 'Citer les activités industrielles clés de Bouaké.'
      },
      {
        name: 'Métropole d\'équilibre et Marché de Gros de Bouaké (MGB)',
        formulaOrRule: 'Créée pour limiter la macrocéphalie d\'Abidjan par l\'Autorité pour la Vallée du Bandama (AVB). Le Marché de Gros (inauguré en 1998) est la plaque tournante du commerce vivrier en gros d\'Afrique de l\'Ouest.',
        explanation: 'Outil d\'aménagement du territoire visant à décentraliser l\'activité économique.',
        contextOrApplication: 'Expliquer le rôle de Bouaké dans l\'aménagement du territoire national.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Localiser et caractériser le site',
        whatToDo: 'Situer Bouaké dans la Région du Gbêkê, plateaux du Centre, 2e agglomération de Côte d\'Ivoire.',
        reflexOrTip: 'Préciser la région du Gbêkê et la position centrale.'
      },
      {
        stepNumber: 2,
        title: 'Détailler les atouts de transport et d\'échanges',
        whatToDo: 'Expliquer le nœud ferroviaire Abidjan-Niger et l\'autoroute du Nord connectant l\'hinterland sahélien.',
        reflexOrTip: 'Mentionner la SITARAIL et l\'axe Abidjan-Ouagadougou.'
      },
      {
        stepNumber: 3,
        title: 'Présenter l\'appareil productif et commercial',
        whatToDo: 'Exposer l\'industrie textile (Gonfreville), la filière anacarde, et le Marché de Gros de Bouaké (MGB).',
        reflexOrTip: 'Citer l\'usine Gonfreville créée en 1921.'
      },
      {
        stepNumber: 4,
        title: 'Évaluer la fonction de métropole d\'équilibre',
        whatToDo: 'Confronter son rôle de contrepoids urbain face à Abidjan aux défis de la relance post-crise et du sous-emploi.',
        reflexOrTip: 'Faire le lien avec la politique de l\'AVB (Vallée du Bandama).'
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet : « En quoi Bouaké constitue-t-elle un pôle économique stratégique pour la Côte d\'Ivoire ? »',
      solutionStepByStep: '1. Carrefour géographique et ferroviaire majeur vers le Sahel.\n2. Pôle industriel historique (textile, anacarde) et commercial vivrier (MGB).\n3. Métropole d\'équilibre dans la politique nationale d\'aménagement du territoire.',
      finalAnswer: 'Bouaké s\'impose comme le 2e pôle national grâce à sa situation de carrefour, son patrimoine industriel et son marché de gros, constituant la principale métropole d\'équilibre de l\'intérieur du pays.'
    },
    classicExamTraps: [
      'Confondre Bouaké (pôle économique du Centre) avec Yamoussoukro (capitale politique et administrative).',
      'Oublier de citer l\'industrie textile historique (Gonfreville) ou le Marché de Gros (MGB).'
    ],
    selfCheckChecklist: [
      'La situation centrale et le rôle de carrefour ferroviaire sont-ils mentionnés ?',
      'Le textile (Gonfreville, CIDT) et le Marché de Gros sont-ils développés ?',
      'Le concept de métropole d\'équilibre face à Abidjan est-il explicité ?'
    ],
    quickRevisionMemo: 'Bouaké : 2e ville de Côte d\'Ivoire, région du Gbêkê, carrefour Abidjan-Niger, industrie textile (Gonfreville 1921), marché de gros MGB, métropole d\'équilibre (politique AVB).',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Géographie Terminale et 3ème (Espace économique ivoirien).',
    expectedKeywords: ['bouake', 'gbeke', 'marche de gros de bouake', 'gonfreville', 'textile', 'metropole d equilibre', 'carrefour', 'abidjan niger']
  },
  {
    id: 'hg-fondements-economie-ci',
    queryKeywords: /\b(c[ôo]te\s+d['’]\s*ivoire|economie\s+ivoirienne|fondements.*(?:eco|econom|d[eé]veloppement).*c[ôo]te\s+d['’]ivoire|secteurs?\s+d['’]activit[eé].*c[ôo]te\s+d['’]ivoire|espace\s+economique\s+ivoirien)\b/i,
    discipline: 'geographie',
    disciplineLabel: 'Histoire & Géographie',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Terminale Toutes Séries (A, C, D)',
    chapterTitle: 'Les Fondements et les Grands Secteurs de l\'Économie de la Côte d\'Ivoire',
    definitionAndScope: 'Étude méthodique des atouts naturels (relief plat, climat subéquatorial et tropical, fleuves et barrages), humains (29,38 millions d\'habitants, 77% de jeunes < 35 ans) et politiques (libéralisme, capitalisme d\'État, Code des investissements) de la Côte d\'Ivoire, ainsi que de ses secteurs primaire (cacao 1er mondial, cajou, hévéa), secondaire (agro-industrie, SIR, BTP, découvertes pétro-gazières Baleine et Calao) et tertiaire (ports d\'Abidjan et San-Pedro, BRVM).',
    coreConceptsAndFormulas: [
      {
        name: 'Les atouts naturels du territoire ivoirien',
        formulaOrRule: '322 462 km², relief tabulaire (plaines littorales et plateaux de 200 à 500 m facilitant les communications et les cultures), 4 grands fleuves (Comoé, Bandama, Sassandra, Cavally) pourvus de barrages hydroélectriques (Kossou, Taabo, Buyo, Soubré).',
        explanation: 'Conditions naturelles très favorables aux cultures de rente et vivrières.',
        contextOrApplication: 'Analyser la formule de Félix Houphouët-Boigny : « Le succès de ce pays repose sur l\'agriculture ».'
      },
      {
        name: 'Les secteurs d\'activité moteurs',
        formulaOrRule: 'Primaire : 1er producteur mondial de cacao (~40%) et de noix de cajou, leader africain de l\'hévéa, vivriers abondants. Secondaire : agroalimentaire, raffinage pétrolier (SIR), nouveaux gisements pétroliers Baleine et Calao. Tertiaire : ports maritimes d\'Abidjan et San-Pedro, place financière BRVM.',
        explanation: 'Économie diversifiée articulée autour d\'une agriculture de rente leader et d\'un pôle industriel dynamique.',
        contextOrApplication: 'Dresser le tableau comparatif des 3 secteurs économiques ivoiriens.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Présenter les fondements naturels et humains',
        whatToDo: 'Articuler le relief tabulaire, les climats favorables et la transition démographique jeune et entreprenante.',
        reflexOrTip: 'Relier les atouts physiques au potentiel économique.'
      },
      {
        stepNumber: 2,
        title: 'Expliquer les choix de politiques économiques',
        whatToDo: 'Exposer le libéralisme économique d\'ouverture aux investissements étrangers (CEPICI) et la planification par les PND.',
        reflexOrTip: 'Citer le libéralisme économique et l\'ouverture aux capitaux.'
      },
      {
        stepNumber: 3,
        title: 'Analyser la structure sectorielle et les défis',
        whatToDo: 'Montrer la prédominance agricole, l\'essor industriel et tertiaire, et les impératifs de transformation locale des matières premières.',
        reflexOrTip: 'Mettre l\'accent sur l\'industrialisation et la transformation du cacao et de l\'anacarde.'
      }
    ],
    solvedExample: {
      problemStatement: 'Sujet Bac : « Les facteurs naturels sont-ils les seuls moteurs du développement de la Côte d\'Ivoire ? »',
      solutionStepByStep: '1. Axe 1 : Des atouts naturels indiscutables (relief plat, climat humide, fleuves, sols ferralitiques).\n2. Axe 2 : Le rôle décisif des facteurs humains (population jeune) et des choix politiques stratégiques (libéralisme, PND, infrastructures).',
      finalAnswer: 'Si la nature offre des conditions exceptionnelles, ce sont les choix politiques, les investissements en infrastructures et le dynamisme démographique qui ont façonné l\'essor économique ivoirien.'
    },
    classicExamTraps: [
      'Oublier les nouvelles découvertes pétro-gazières offshore (gisements Baleine et Calao).',
      'Considérer l\'économie ivoirienne comme uniquement agricole en ignorant son tissu industriel leader en UEMOA et ses deux ports.'
    ],
    selfCheckChecklist: [
      'Les atouts naturels (relief, climat, fleuves, sols) sont-ils chiffrés ?',
      'Les rangs mondiaux (1er cacao, 1er cajou, hévéa) sont-ils mentionnés ?',
      'Les ports d\'Abidjan et San-Pedro et la SIR sont-ils présents ?'
    ],
    quickRevisionMemo: 'Économie CI : Relief tabulaire, 4 fleuves (barrages Soubré/Kossou), 29,38M hab. (77% < 35 ans). 1er producteur mondial cacao et anacarde. Industrie (SIR, agroalimentaire), gisements Baleine et Calao, ports Abidjan/San-Pedro, BRVM.',
    certificationNote: 'Fiche certifiée conforme au programme officiel de Géographie Terminale (L\'Économie Ivoirienne).',
    expectedKeywords: ['cote d ivoire', 'economie ivoirienne', 'fondements economiques', 'cacao', 'anacarde', 'baleine', 'calao', 'ports abidjan san pedro', 'houphouet boigny']
  }
];

export function findAcademicKnowledge(query: string, disciplineHint?: string): AcademicTopicKnowledge | null {
  const q = query.toLowerCase().trim();
  const disc = (disciplineHint || '').toLowerCase();

  // First check specific match via regex
  for (const topic of ACADEMIC_KNOWLEDGE_BASE) {
    if (topic.queryKeywords.test(q)) {
      return topic;
    }
  }

  // 1. Recherche par les expressions régulières spécifiques de chaque chapitre
  for (const topic of ACADEMIC_KNOWLEDGE_BASE) {
    if (topic.queryKeywords && topic.queryKeywords.test(q)) {
      return topic;
    }
  }

  // 2. Vérifications directes de secours ciblées
  if (/\b(onu|nations\s+unies)\b/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'hg-onu-buts-principes-organes');
    if (t) return t;
  }
  if (/\b(bouake|bouak[eé])\b/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'hg-bouake-metropole-centre');
    if (t) return t;
  }
  if (/\b(c[ôo]te\s+d['’]\s*ivoire|economie\s+ivoirienne)\b/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'hg-fondements-economie-ci');
    if (t) return t;
  }
  if (/conscience|inconscient\b|refoulement|ça\b|surmoi/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'philo-conscience-inconscient');
    if (t) return t;
  }
  if (/[ée]tat\b|souverainet[ée]|contrat social|l[ée]gitimit[ée] politique|d[ée]sob[ée]issance civile/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'philo-etat-justice-societe');
    if (t) return t;
  }
  if (/suite\s*(num[ée]rique|g[ée]om[ée]trique|arithm[ée]tique)|probabilit[ée]|arbre pond[ée]r[ée]|al[ée]atoire/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'maths-suites-probabilites');
    if (t) return t;
  }
  if (/d[ée]riv[ée]e|primitive|[ée]tude de fonction|f\(x\)|asymptote|limite en/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'maths-analyse-fonctions');
    if (t) return t;
  }
  if (/acide|base faible|base forte|\bph\b|titrage|dosage|solution aqueuse/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'pc-chimie-acides-bases');
    if (t) return t;
  }
  if (/loi de newton|principe fondamental de la dynamique|pfd\b|chute libre|frottement/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'pc-mecanique-newton');
    if (t) return t;
  }
  if (/d[ée]colonisation|ind[ée]pendance de la c[ôo]te d'ivoire|houphou[ëe]t-boigny|7 ao[ûu]t 1960/i.test(q)) {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'hg-decolonisation-ci');
    if (t) return t;
  }
  if (/allemand|deutsch|klima|umwelt|workcamp|konditionalsatz/i.test(q) || disc === 'allemand') {
    const t = ACADEMIC_KNOWLEDGE_BASE.find(t => t.id === 'allemand-tle-lecon1-mitmachen');
    if (t) return t;
  }

  // 3. Recherche générique de secours : aucune des expressions régulières ci-dessus n'a
  // reconnu la requête (formulation nouvelle jamais vue). On compare alors la requête,
  // au sens large (racine des mots + tolérance aux fautes de frappe), au titre et aux
  // mots-clés attendus de chaque fiche, sans dépendre d'un lexique pré-enregistré.
  const STOP = new Set(['cours','cour','sur','les','des','pour','dans','une','avec','tout','tous','par','son','ses','qui','que','est','sont','donne','moi','cherche','trouve','chapitre','lecon','fiche','resume','definition','definir','signification','notion','concept','explication','quelles','quels','quelle','quel','comment','complet','detaille']);
  const qTokens = stripAccentsLower(q).split(/[^a-z0-9]+/).filter(t => t.length >= 3 && !STOP.has(t));
  if (qTokens.length > 0) {
    let best: AcademicTopicKnowledge | null = null;
    let bestScore = 0;
    for (const topic of ACADEMIC_KNOWLEDGE_BASE) {
      const searchable = [topic.chapterTitle, ...(topic.expectedKeywords || []), topic.definitionAndScope].join(' ');
      let matched = 0;
      let titleHit = false;
      for (const token of qTokens) {
        if (textContainsResemblingToken(searchable, token)) {
          matched++;
          if (textContainsResemblingToken(topic.chapterTitle, token)) titleHit = true;
        }
      }
      const coverage = matched / qTokens.length;
      const score = matched * 10 + (titleHit ? 25 : 0);
      if (coverage >= 0.6 && score > bestScore) {
        bestScore = score;
        best = topic;
      }
    }
    if (best) return best;
  }

  return null;
}
