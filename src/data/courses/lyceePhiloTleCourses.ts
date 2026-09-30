import { OfficialIvorianCourse } from '../../types';

export const LYCEE_PHILO_TLE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. PHILOSOPHIE TERMINALE (SÉRIES A, C, D) : L'ÉTAT ET LA SOCIÉTÉ
  // =========================================================================
  {
    id: 'philo-tle-etat-societe-justice',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Terminale Séries A1, A2, C, D, E)',
    level: 'terminale',
    levelLabel: 'Terminale (Tle A, C, D, E - Baccalauréat)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'La Politique et la Société : L\'État, le Droit et la Justice',
    lessonTitle: 'L\'État : Instrument de liberté et de paix ou appareil d\'oppression et d\'aliénation ?',
    objectifs: [
      'Définir l\'État, la société civile, l\'état de nature, le droit naturel et le droit positif selon les programmes DPFC/MENA',
      'Analyser la thèse de la nécessité de l\'État comme garant de la paix, de la sécurité et de la liberté (Hobbes, Locke, Rousseau, Hegel)',
      'Développer la critique radicale de l\'État comme instrument de domination de classe ou d\'aliénation (Marx, Engels, Bakounine, Nietzsche)',
      'Comprendre la distinction entre légalité (conformité à la loi positive) et légitimité (conformité à la justice morale)',
      'Maîtriser les citations philosophiques majeures et les exemples pour illustrer une dissertation ou un commentaire au Baccalauréat'
    ],
    fullCourseContent: `I. DÉFINITION ET FONDEMENT DE L'ÉTAT ET DE LA SOCIÉTÉ :
1. L'état de nature et l'avènement du contrat social :
- Chez Thomas Hobbes (Le Léviathan) : L'état de nature est un état de guerre de tous contre tous (« L'homme est un loup pour l'homme »). Par crainte de la mort violente, les hommes aliènent leur liberté naturelle au profit d'un souverain absolu qui garantit la sécurité.
- Chez John Locke (Traité du gouvernement civil) : L'État a pour mission fondamentale de garantir les droits naturels inaliénables de l'individu : la vie, la liberté et la propriété.
- Chez Jean-Jacques Rousseau (Du Contrat Social) : Le passage de l'état de nature à l'état civil s'effectue par un pacte d'association où « chacun s'unissant à tous n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant ». L'obéissance à la loi qu'on s'est prescrite est liberté.

II. THÈSE : L'ÉTAT, CONDITION NÉCESSAIRE DE LA SÉCURITÉ ET DE LA LIBERTÉ :
1. L'État met fin à l'anarchie et à la loi du plus fort :
Sans puissance publique régulatrice, la violence règne et la justice se réduit à la vengeance privée arbitraire.
2. L'État humanise l'homme et incarne la raison :
Selon Hegel (Principes de la philosophie du droit), l'État est « la réalité en acte de l'Idée morale ». C'est au sein de l'État et par la citoyenneté que l'individu s'élève de l'égoïsme biologique à la moralité universelle.
3. L'État républicain garantit l'égalité et la justice sociale :
L'État providence régule les inégalités économiques à travers les services publics, l'éducation nationale et la santé.

III. ANTITHÈSE : LA CRITIQUE DE L'ÉTAT ET L'ALIÉNATION POLITIQUE :
1. L'État comme instrument de domination de classe (Karl Marx & Friedrich Engels) :
Dans L'Idéologie allemande et Le Manifeste du Parti communiste, Marx démontre que l'État n'est pas neutre : il est l'appareil juridique et policier par lequel la classe dominante (la bourgeoisie) maintient son exploitation sur la classe dominée (le prolétariat). L'émancipation humaine véritable exige le dépérissement de l'État.
2. La critique anarchiste (Mikhaïl Bakounine) :
« L'État est un vaste cimetière où viennent s'enterrer toutes les manifestations de la vie individuelle. » Tout pouvoir étatique est intrinsèquement corrupteur et liberticide.
3. Nietzsche (Ainsi parlait Zarathoustra) :
« L'État, c'est le plus froid de tous les monstres froids. Il ment froidement ; et voici le mensonge qui rampe de sa bouche : "Moi, l'État, je suis le peuple". »

IV. SYNTHÈSE ET DÉPASSEMENT : L'ÉTAT DE DROIT ET LA DÉMOCRATIE :
L'État légitime est l'État de droit, soumis lui-même aux lois constitutionnelles qu'il édicte, avec la séparation rigoureuse des trois pouvoirs (législatif, exécutif, judiciaire selon Montesquieu). La vigilance citoyenne est le garant perpétuel contre la dérive totalitaire.`,
    definitions: [
      { term: 'État', definition: 'Ensemble institutionnel souverain exerçant l\'autorité politique, administrative et juridique sur un territoire délimité et une population donnée.' },
      { term: 'Société', definition: 'Ensemble structuré d\'individus unis par des relations d\'interdépendance, des coutumes, des lois et des institutions communes.' },
      { term: 'État de droit', definition: 'Système institutionnel dans lequel la puissance publique est subordonnée au respect des règles de droit et des libertés fondamentales.' },
      { term: 'Légalité', definition: 'Conformité stricte d\'un acte ou d\'une décision aux lois positives en vigueur dans un pays.' },
      { term: 'Légitimité', definition: 'Conformité morale d\'un pouvoir ou d\'une loi avec l\'idéal de justice, d\'équité et de dignité humaine.' }
    ],
    propertiesAndRules: [
      { name: 'Séparation des pouvoirs (Montesquieu)', statement: 'Pour qu\'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir (séparation de l\'exécutif, du législatif et du judiciaire).' },
      { name: 'Souveraineté populaire (Rousseau)', statement: 'La souveraineté réside dans la volonté générale du peuple ; elle est inaliénable, indivisible et infaillible dans sa visée de l\'intérêt commun.' }
    ],
    formulas: [
      { name: 'Tension philosophique fondamentale', formula: 'Légalité ≠ Légitimité (Une loi peut être légale sans être moralement juste, ex: apartheid, esclavage)', explanation: 'Distinguer toujours la légalité formelle de la justice substantielle lors d\'une dissertation.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Formuler le problème central sur l\'État',
        procedure: 'Opposer la finalité idéale de l\'État (sécurité, liberté, justice sociale) à sa réalité historique effective (appareil de coercition, bureaucratie, risque de tyrannie).',
        tip: 'Utiliser la technique du paradoxe : Pourquoi l\'institution créée pour protéger la liberté de l\'homme finit-elle souvent par l\'opprimer ?'
      },
      {
        stepNumber: 2,
        title: 'Articuler l\'argumentation de la Thèse (Hobbes / Rousseau)',
        procedure: 'Démontrer d\'abord qu\'en l\'absence d\'État, la liberté n\'est qu\'une illusion détruite par la tyrannie des plus forts. Conclure que la loi civile crée la véritable liberté.',
        tip: 'Citer Rousseau : « L\'obéissance au seul appétit est esclavage, et l\'obéissance à la loi qu\'on s\'est prescrite est liberté ».'
      },
      {
        stepNumber: 3,
        title: 'Développer l\'Antithèse critique (Marx / Bakounine)',
        procedure: 'Montrer que sous couvert d\'intérêt général, l\'État défend souvent des intérêts particuliers de castes ou de classes économiques.',
        tip: 'Mobiliser Marx pour la critique socio-économique et Montesquieu pour la solution institutionnelle.'
      }
    ],
    examples: [
      {
        statement: 'Sujet type Bac : « L\'État est-il l\'ennemi de la liberté ? »',
        solution: 'Introduction par définition du paradoxe : L\'État apparaît comme une contrainte permanente (lois, impôts, police). Pourtant, sans lui, règne la jungle où nul n\'est libre. Axe 1 : En quoi l\'État restreint-il les libertés individuelles ? (police, bureaucratie, domination). Axe 2 : Cependant, l\'État n\'est-il pas la condition sine qua non de toute liberté réelle et durable ? (protection contre l\'arbitraire, égalité des droits). Conclusion : L\'État n\'est l\'ennemi de la liberté que lorsqu\'il dégénère en autoritarisme ; l\'État républicain et démocratique en est le rempart indispensable.'
      }
    ],
    exercises: [
      {
        question: 'Distinguez le droit positif du droit naturel en citant un exemple historique de désobéissance civile légitime.',
        correction: 'Le droit positif est l\'ensemble des lois écrites édictées par les autorités d\'un État à une époque donnée. Le droit naturel est l\'ensemble des principes moraux universels et imprescriptibles attachés à la dignité de la personne humaine (justice, égalité, vie). Exemple : Le refus de Rosa Parks ou les luttes de Nelson Mandela contre l\'apartheid illustrent la désobéissance à un droit positif injuste au nom du droit naturel suprême.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une table ronde sur la citoyenneté en Côte d\'Ivoire, un participant affirme : « Tant qu\'il y a des lois et des forces de sécurité, l\'homme ne sera jamais libre, car l\'État passe son temps à nous interdire d\'agir à notre guise ». Un autre lui rétorque que sans forces de l\'ordre, le quartier serait à la merci des bandits armés.',
      instructions: [
        'Dégagez le problème philosophique soulevé par cette confrontation.',
        'Expliquez pourquoi l\'obéissance à la loi peut être considérée comme l\'expression même de la liberté.',
        'Montrez les dérives possibles d\'un État qui ne respecterait pas les libertés publiques.'
      ],
      solutionGuide: 'Problème : Les institutions étatiques sont-elles un obstacle ou une condition pour l\'exercice de la liberté humaine ? Argumentation 1 : Sans lois, règne la loi de la force ; la loi civile protège le faible contre le fort (Rousseau). Argumentation 2 : Risque de dérive autoritaire si le pouvoir n\'est pas équilibré par des contre-pouvoirs (Montesquieu, Tocqueville).'
    },
    examTraps: [
      'Confondre liberté et licence : La liberté n\'est pas faire tout ce qui nous passe par la tête, mais agir selon la raison et les règles consenties.',
      'Réduire l\'État au gouvernement actuel : L\'État est la structure politique permanente et institutionnelle, le gouvernement n\'est que son équipe dirigeante temporaire.',
      'Oublier de définir "liberté" sous ses deux facettes : liberté négative (absence d\'entrave) et liberté positive (autonomie, capacité de réalisation).'
    ],
    quickMemo: 'L\'État : Nécessaire pour conjurer l\'anarchie et garantir les droits civils (Hobbes, Locke, Rousseau), il porte en lui le risque d\'oppression bureaucratique ou policière (Marx, Nietzsche). La solution réside dans l\'État de droit et la séparation des pouvoirs.',
    keywords: ['État', 'Société', 'Justice', 'Droit naturel', 'Droit positif', 'Hobbes', 'Rousseau', 'Marx', 'Légalité', 'Légitimité', 'Montesquieu']
  },

  // =========================================================================
  // 2. PHILOSOPHIE TERMINALE : LA VÉRITÉ, LA RAISON ET LA SCIENCE
  // =========================================================================
  {
    id: 'philo-tle-verite-raison-science',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Terminale Séries A1, A2, C, D, E)',
    level: 'terminale',
    levelLabel: 'Terminale (Tle A, C, D, E - Baccalauréat)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'La Connaissance : Vérité, Raison et Démarche Scientifique',
    lessonTitle: 'La Science nous donne-t-elle la vérité absolue ou des certitudes provisoires ?',
    objectifs: [
      'Distinguer vérité, certitude, croyance, opinion (doxa) et illusion selon les exigences conceptuelles de la DPFC',
      'Comprendre la démarche scientifique moderne : la méthode expérimentale d\'Hippocrate à Claude Bernard (Observation - Hypothèse - Expérience - Loi)',
      'Analyser le concept de falsifiabilité / réfutabilité de Karl Popper et la notion d\'erreur rectifiée de Gaston Bachelard',
      'Examiner les limites éthiques et existentielles du savoir scientifique face aux questions métaphysiques et au sens de la vie'
    ],
    fullCourseContent: `I. LES FORMES DE CONNAISSANCE ET LA RECHERCHE DE LA VÉRITÉ :
1. Opinion (Doxa) vs Connaissance vraie (Épistémè) :
Dans l'Allégorie de la Caverne (La République, Livre VII), Platon oppose le monde sensible des ombres et des illusions au monde intelligible des Idées. Connaître la vérité, c'est s'affranchir des préjugés et élever son âme par la dialectique rationnelle.
2. Le doute méthodique comme fondement de la certitude :
René Descartes (Discours de la méthode, Méditations métaphysiques) applique le doute hyperbolique à toutes les opinions reçues. Une seule vérité résiste au doute : « Cogito ergo sum » (Je pense donc je suis), modèle de toute vérité claire et distincte.

II. LA CONNAISSANCE SCIENTIFIQUE ET SES CRITÈRES :
1. La méthode expérimentale (Claude Bernard, Introduction à l'étude de la médecine expérimentale) :
Le savant observe un fait polémique, formule une hypothèse explicative, conçoit une expérience pour la vérifier, puis tire une loi universelle : O-H-E-L.
2. La réfutabilité ou falsifiabilité (Karl Popper, La Logique de la découverte scientifique) :
Une théorie n'est scientifique que si elle est réfutable, c'est-à-dire si l'on peut imaginer une expérience capable de la contredire. Aucune vérité scientifique n'est absolue : toute théorie est une conjecture provisoirement non réfutée.
3. La science progresse par rectification d'erreurs (Gaston Bachelard, La Formation de l'esprit scientifique) :
« La vérité est une erreur rectifiée ». L'esprit scientifique doit surmonter les « obstacles épistémologiques » (expériences premières, idées intuitives trompeuses).

III. LIMITES DE LA SCIENCE ET DE LA TECHNIQUE :
1. La science dit "comment" les choses fonctionnent, mais pas "pourquoi" ni "quel est le sens" :
Face à la mort, à l'amour, au devoir moral et à Dieu, la science demeure silencieuse.
2. La dérive scientiste et le pouvoir destructeur de la technique :
Hans Jonas (Le Principe Responsabilité) rappelle que la puissance technologique moderne menace la survie même de l'humanité. Rabelais prévenait déjà : « Science sans conscience n'est que ruine de l'âme ».`,
    definitions: [
      { term: 'Vérité', definition: 'Conformité de la pensée ou du discours avec la réalité (vérité matérielle) ou accord de la pensée avec elle-même (vérité formelle ou logique).' },
      { term: 'Opinion (Doxa)', definition: 'Croyance subjective adoptée sans examen critique rigoureux, susceptible d\'erreur.' },
      { term: 'Raison', definition: 'Faculté intellectuelle permettant à l\'homme de discerner le vrai du faux, de porter des jugements logiques et d\'orienter moralement ses actions.' },
      { term: 'Réfutabilité (Popper)', definition: 'Critère de démarcation scientifique stipulant qu\'une théorie n\'est scientifique que si elle admet des tests empiriques susceptibles de démontrer sa fausseté.' }
    ],
    propertiesAndRules: [
      { name: 'Principe de non-contradiction (Aristote)', statement: 'Une même chose ne peut pas à la fois être et ne pas être sous le même rapport au même moment.' },
      { name: 'Critère de scientificité (Karl Popper)', statement: 'Ce qui rend une proposition scientifique, ce n\'est pas sa vérification indéfinie, mais sa capacité à être mise à l\'épreuve et réfutée.' }
    ],
    formulas: [
      { name: 'Démarche expérimentale de Claude Bernard', formula: 'Observation (O) → Hypothèse (H) → Expérience (E) → Loi / Théorie (L)', explanation: 'Chaîne logique fondamentale de la science expérimentale.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Traiter un sujet liant Science et Vérité',
        procedure: 'Définir la nature de la vérité scientifique : est-elle un dogme absolu ou un processus asymptotique et révisable ?',
        tip: 'Mobiliser Karl Popper et Gaston Bachelard pour montrer que la force de la science réside dans sa modestie et sa révision permanente.'
      },
      {
        stepNumber: 2,
        title: 'Poser les limites de la rationalité scientifique',
        procedure: 'Expliquer que la science ne peut pas résoudre les questions éthiques ou existentielles.',
        tip: 'Citer Rabelais (« Science sans conscience... ») ou Emmanuel Kant sur les limites de la raison pure.'
      }
    ],
    examples: [
      {
        statement: 'Sujet type Bac : « La science a-t-elle réponse à tout ? »',
        solution: 'Problématisation : Si les prouesses technologiques et médicales semblent étendre sans fin le pouvoir explicatif de la science, celle-ci peut-elle répondre à toutes les interrogations humaines ? Axe 1 : L\'immense portée explicative de la science sur le plan matériel et objectif (méthode rigoureuse, recul de l\'ignorance et des superstitions). Axe 2 : Les limites insurmontables du savoir scientifique (incapacité à fonder les valeurs morales, le sens de l\'existence, le bonheur et la liberté). Conclusion : La science répond au "comment" des mécanismes de la nature, mais la philosophie et l\'éthique restent indispensables pour répondre au "pourquoi" et guider l\'action humaine.'
      }
    ],
    exercises: [
      {
        question: 'En quoi le critère de réfutabilité de Karl Popper permet-il de disqualifier l\'astrologie du champ de la science ?',
        correction: 'L\'astrologie formule des prédictions si vagues et équivoques qu\'aucun événement concret ne peut venir la contredire ou prouver son erreur. Ne pouvant être réfutée par aucune observation empirique, elle ne remplit pas le critère poppérien de réfutabilité et relève de la pseudo-science.'
      }
    ],
    examTraps: [
      'Confondre la vérité (qualité d\'un jugement) et la réalité (ce qui existe objectivement hors de nous).',
      'Croire qu\'une théorie scientifique est définitivement vraie : en science, toute théorie n\'est vraie que jusqu\'à preuve du contraire.'
    ],
    quickMemo: 'Vérité et Science : La science n\'est pas un recueil de dogmes intouchables, mais une recherche méthodique de vérités approchées, réfutables (Popper) et corrigées au fil de l\'histoire (Bachelard). Elle ne dispense pas de la réflexion morale.',
    keywords: ['Vérité', 'Science', 'Raison', 'Popper', 'Bachelard', 'Descartes', 'Doute', 'Expérimentation', 'Réfutabilité', 'Doxa']
  }
];
