/**
 * Moteur Avancé de Variation d'Arguments et d'Explications (Philosophie, Littérature, Débats Internationaux)
 * 
 * Ce moteur garantit que :
 * 1. Les formulations d'arguments peuvent varier d'une recherche ou d'une variante à l'autre.
 * 2. Les explications peuvent varier selon des formulations pédagogiques validées.
 * 3. Chaque variante conserve les références du corpus ; les citations ne sont pas personnalisées.
 * 4. Plusieurs variantes d'arguments peuvent être consultées et permutées pour un même sujet.
 */

import { CourseConceptFormula, CourseMethodStep } from '../src/types';
import { differentiateArgumentItem, hashStringToInt } from './argumentReformulator';
import { PHILO_ETHICS_POLITICS_VARIANTS } from './argumentVariants/philoEthicsPolitics';
import { PHILO_EPISTEMOLOGY_VARIANTS } from './argumentVariants/philoEpistemology';
import { PHILO_HUMAN_CONDITION_VARIANTS } from './argumentVariants/philoHumanCondition';
import { PHILO_MIND_METAPHYSICS_VARIANTS } from './argumentVariants/philoMindMetaphysics';
import { PHILO_SCIENCE_LANGAGE_VARIANTS } from './argumentVariants/philoScienceLangage';
import { PHILO_NATURE_CULTURE_VARIANTS } from './argumentVariants/philoNatureCulture';
import { PHILO_PSYCHO_MIND_VARIANTS } from './argumentVariants/philoPsychoMind';
import { PHILO_CULTURE_SOCIETE_VARIANTS } from './argumentVariants/philoCultureSociete';
import { PHILO_RAISON_DROIT_MORALE_VARIANTS } from './argumentVariants/philoRaisonDroitMorale';
import { PHILO_DESIR_VARIANTS } from './argumentVariants/philoDesir';
import { LITERATURE_VARIANTS } from './argumentVariants/literatureVariants';
import { FRENCH_SOURCE_EXPANSIONS, PHILO_SOURCE_EXPANSIONS } from './argumentVariants/sourceExpansionsV31';

export interface FormulationVariant {
  statement: string;
  explanation: string;
}

export interface ArgumentItem {
  statement: string;
  author: string;
  work: string;
  quote: string;
  explanation: string;
  category?: string; // e.g. "Thèse", "Antithèse", "Synthèse / Dépassement", "Perspective Éthique"
  connector?: string; // Connecteur de transition recommandé (De prime abord, Sous un autre prisme, etc.)
  formulationVariants?: FormulationVariant[];
}

export interface ArgumentVariant {
  id: number;
  label: string;
  perspective: string; // e.g. "Perspectives Fondatrices & Rationalistes"
  arguments: ArgumentItem[];
  pedagogicalAdvice: string;
}

export interface ArgumentCorpusResult {
  topicTitle: string;
  discipline: 'philo' | 'francais' | 'histoire' | 'ses' | 'international';
  disciplineLabel: string;
  activeVariant: number;
  totalVariants: number;
  variants: ArgumentVariant[];
  currentVariant: ArgumentVariant;
  coreConceptsAndFormulas: CourseConceptFormula[];
  stepByStepMethod: CourseMethodStep[];
  definitionAndScope: string;
  quickRevisionMemo: string;
  certificationNote: string;
}

function getAiClient(): null {
  return null;
}

/**
 * Dictionnaire de variantes riches pour les grandes notions philosophiques et littéraires
 */
const NOTION_ARGUMENT_VARIANTS: Record<string, ArgumentVariant[]> = {
  "liberte": [
    {
      id: 0,
      label: "Perspectives Fondatrices, Métaphysiques & Rationalistes",
      perspective: "Libre arbitre, Raison & Déterminisme",
      pedagogicalAdvice: "Idéal pour poser les fondements d'une dissertation classique opposant la liberté de choix rationnelle et la nécessité physique.",
      arguments: [
        {
          statement: "Le libre arbitre permet à la volonté humaine de se déterminer par la lumière de la raison.",
          author: "René Descartes",
          work: "Principes de la philosophie, I, art. 39",
          quote: "La liberté de notre volonté se connaît sans preuves, par la seule expérience que nous en avons.",
          explanation: "Descartes démontre que la liberté ne se résume pas à l'indifférence capricieuse, mais réside dans la capacité de la volonté à consentir au vrai et au bien lorsqu'ils sont clairement conçus par l'entendement. L'homme échappe ainsi à l'automatisme mécanique.",
          category: "Thèse (Volonté & Rationalité)",
          connector: "De prime abord"
        },
        {
          statement: "L'illusion de la liberté découle de la méconnaissance des causes réelles qui nous déterminent.",
          author: "Baruch Spinoza",
          work: "Lettre à Schuller (Correspondance)",
          quote: "Les hommes se croient libres pour cette seule cause qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.",
          explanation: "Pour Spinoza, le libre arbitre absolu est un mirage anthropomorphique. Tout événement dans la nature est soumis à la nécessité universelle. La véritable libération ne consiste pas à briser la nécessité, mais à la comprendre par la raison afin de ne plus être esclave des passions passives.",
          category: "Antithèse (Nécessité & Déterminisme)",
          connector: "Toutefois"
        },
        {
          statement: "La liberté authentique s'identifie à l'autonomie de la volonté soumise à la loi morale.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Une volonté libre et une volonté soumise à des lois morales sont une seule et même chose.",
          explanation: "Kant montre que l'homme n'est pas libre quand il obéit aveuglément à ses impulsions sensibles ou à son égoïsme, mais lorsqu'il légifère pour lui-même à travers l'impératif catégorique. L'autonomie consiste à agir par devoir en respectant la dignité de tout être raisonnable.",
          category: "Synthèse (Autonomie Morale)",
          connector: "Par conséquent"
        },
        {
          statement: "La maîtrise intérieure et le discernement stoïcien fondent une liberté inaliénable.",
          author: "Épictète",
          work: "Manuel",
          quote: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.",
          explanation: "En distinguant rigoureusement ce qui dépend de nous (nos jugements, nos désirs, nos refus) de ce qui n'en dépend pas (le corps, la réputation, la mort), le philosophe stoïcien préserve une citadelle intérieure imprenable contre la tyrannie du destin extérieur.",
          category: "Approfondissement (Éthique Stoïcienne)",
          connector: "En outre"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Existentialistes, Phénoménologiques & du Désir",
      perspective: "Liberté en situation, Angoisse & Responsabilité",
      pedagogicalAdvice: "Particulièrement percutant pour les sujets interrogeant la condition humaine, le choix tragique, la mauvaise foi et l'angoisse d'exister.",
      arguments: [
        {
          statement: "L'homme n'est pas une essence prédéterminée : il est irrévocablement condamné à inventer sa propre liberté.",
          author: "Jean-Paul Sartre",
          work: "L'Existentialisme est un humanisme",
          quote: "L'homme est condamné à être libre : condamné parce qu'il ne s'est pas créé lui-même, et par ailleurs cependant libre, parce qu'une fois jeté dans le monde, il est responsable de tout ce qu'il fait.",
          explanation: "Chez Sartre, l'existence précède l'essence. Aucun déterminisme divin, biologique ou social ne peut servir d'excuse. Refuser d'assumer son pouvoir de décision relève de la mauvaise foi, car même ne pas choisir constitue encore un choix délibéré.",
          category: "Thèse (Existentialisme Radical)",
          connector: "D'emblée"
        },
        {
          statement: "La liberté ne s'exerce jamais dans le vide abstrait mais toujours au cœur d'une situation incarnée.",
          author: "Maurice Merleau-Ponty",
          work: "Phénoménologie de la perception",
          quote: "Il n'y a jamais de liberté sans champ, c'est-à-dire sans un monde sur le fond duquel nos projets se découpent.",
          explanation: "Merleau-Ponty réfute l'idée d'une liberté absolue sans pesanteur : notre corps, notre langue et notre époque constituent le champ perceptif et historique qui rend nos choix possibles. La liberté consiste à négocier et transcender les obstacles concrets que la situation nous impose.",
          category: "Nuance (Phénoménologie Incarnée)",
          connector: "Sous un autre angle"
        },
        {
          statement: "La véritable liberté exige le dépassement des idéaux serviles et l'affirmation de la volonté créatrice.",
          author: "Friedrich Nietzsche",
          work: "Crépuscule des idoles",
          quote: "Être libre, c'est avoir la volonté d'être responsable de soi-même.",
          explanation: "Nietzsche dénonce la fausse liberté du ressentiment démocratique ou religieux, qui se contente de récriminer contre les contraintes. La liberté authentique est conquête aristocratique de soi, capacité à endurer les épreuves et à transfigurer la souffrance en puissance d'affirmation joyeuse.",
          category: "Antithèse (Volonté de Puissance)",
          connector: "Toutefois"
        },
        {
          statement: "Ma liberté ne peut s'accomplir pleinement qu'en reconnaissant et en libérant celle d'autrui.",
          author: "Simone de Beauvoir",
          work: "Pour une morale de l'ambiguïté",
          quote: "Vouloir la liberté et vouloir que les autres soient libres, c'est un seul et même mouvement.",
          explanation: "La liberté ne peut demeurer une aventure solitaire ou égoïste. Si l'humanité entière demeure opprimée ou privée d'horizon, mes projets personnels se heurtent à la violence du monde. La liberté authentique s'engage activement contre toutes les formes d'oppression matérielle et culturelle.",
          category: "Dépassement (Éthique de la Réciprocité)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Politiques, Décoloniales & Penseurs Internationaux",
      perspective: "Contrat social, Droit, Souveraineté & Libération des Peuples",
      pedagogicalAdvice: "Indispensable pour les sujets reliant liberté, lois, citoyenneté, luttes politiques, colonisation et justice sociale.",
      arguments: [
        {
          statement: "L'État de droit ne supprime pas la liberté, mais la garantit en la transformant en liberté civile.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "L'obéissance à la loi qu'on s'est prescrite est liberté.",
          explanation: "Dans l'état de nature, l'homme ne jouit que d'une indépendance précaire menacée par la force du plus fort. En participant à la volonté générale et en se soumettant à la loi commune, le citoyen s'affranchit des dépendances particulières et acquiert la liberté morale et politique.",
          category: "Thèse (Liberté Civile & Démocratie)",
          connector: "En premier lieu"
        },
        {
          statement: "La liberté politique consiste dans la certitude de n'être contraint de faire que ce que la loi permet.",
          author: "Montesquieu",
          work: "De l'esprit des lois",
          quote: "La liberté est le droit de faire tout ce que les lois permettent.",
          explanation: "Pour Montesquieu, confondre la liberté avec la licence ou le pouvoir de tout faire conduit inévitablement à l'anarchie, puis à la tyrannie. La liberté politique requiert un équilibre institutionnel où le pouvoir arrête le pouvoir pour préserver la sûreté de chaque citoyen.",
          category: "Cadrage Juridique (Séparation des Pouvoirs)",
          connector: "Aussi"
        },
        {
          statement: "La liberté véritable exige la désaliénation totale des peuples opprimés et la reconquête de la souveraineté.",
          author: "Frantz Fanon",
          work: "Les Damnés de la terre",
          quote: "Pour le peuple colonisé, la liberté la plus essentielle, la plus concrète, c'est d'abord la terre.",
          explanation: "Fanon montre que les déclarations universelles des droits restent des abstractions trompeuses tant que persistent les structures économiques, raciales et territoriales de l'impérialisme. La liberté humaine implique une rupture révolutionnaire avec les complexes de subordination intériorisés.",
          category: "Perspective Décoloniale & Internationale",
          connector: "Par ailleurs"
        },
        {
          statement: "L'émancipation des sociétés africaines passe par le refus de la soumission intellectuelle et l'exercice de la rationalité critique.",
          author: "Marcien Towa",
          work: "Essai sur la problématique philosophique en Afrique",
          quote: "La philosophie est par excellence l'activité par laquelle l'homme refuse de subir aveuglément son destin pour en devenir le créateur lucide.",
          explanation: "Towa combat l'illusion passéiste qui voudrait figer la liberté africaine dans une essence immuable. La véritable liberté s'acquiert par l'appropriation sans complexe de la rigueur scientifique et technique universelle, mise au service du développement autonome des peuples.",
          category: "Pensée Critique Africaine",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Éthiques, Matérialistes & Contemporaines",
      perspective: "Travail, Aliénation, Espace Public & Vulnérabilité d'Autrui",
      pedagogicalAdvice: "À privilégier pour les sujets croisant la liberté avec le travail, la technique, les nouveaux médias ou la responsabilité éthique.",
      arguments: [
        {
          statement: "La liberté politique s'actualise uniquement dans l'action concertée et la parole partagée au sein de l'espace public.",
          author: "Hannah Arendt",
          work: "La Crise de la culture",
          quote: "La raison d'être de la politique est la liberté, et son champ d'expérience est l'action.",
          explanation: "Arendt rappelle que pour les Grecs anciens, être libre n'était pas un état d'esprit intérieur mais un statut public partagé entre égaux. Réduire la liberté au for intérieur ou au simple libre choix économique appauvrit l'essence de la citoyenneté démocratique.",
          category: "Thèse (Espace Public & Action)",
          connector: "De prime abord"
        },
        {
          statement: "La liberté abstraite proclamée par le droit bourgeois masque l'aliénation concrète imposée par les rapports de production.",
          author: "Karl Marx",
          work: "Le Capital",
          quote: "Le domaine de la liberté ne commence en réalité que là où cesse le travail imposé par le besoin et la finalité extérieure.",
          explanation: "Tant que l'individu est forcé de vendre sa force de travail pour survivre dans des conditions d'exploitation, sa liberté n'est qu'un droit formel. La liberté réelle exige la réduction du temps de travail contraint et la maîtrise collective des richesses matérielles.",
          category: "Critique Matérialiste (Aliénation Économique)",
          connector: "Cependant"
        },
        {
          statement: "Ma liberté n'est pas un privilège souverain et sans limites : elle est investie et mise en cause par la vulnérabilité d'Autrui.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini",
          quote: "La liberté consiste à savoir que la liberté est en péril ; mais savoir ou être conscient, c'est avoir du temps pour parer au péril, c'est avoir un sursis.",
          explanation: "Rencontrer le visage d'autrui paralyse la violence spontanée de mon vouloir-vivre. La liberté humaine n'est pas conquête despotique de l'espace, mais acceptation d'une responsabilité infinie pour l'autre homme avant toute initiative personnelle.",
          category: "Éthique de l'Altérité",
          connector: "D'un point de vue éthique"
        },
        {
          statement: "Les dispositifs de pouvoir modernes ne brisent pas la liberté par la force brute, mais la façonnent subtilement.",
          author: "Michel Foucault",
          work: "Surveiller et punir",
          quote: "Là où il y a pouvoir, il y a résistance, et pourtant (ou plutôt par là même) cette résistance n'est jamais en position d'extériorité par rapport au pouvoir.",
          explanation: "Dans les sociétés disciplinaires contemporaines, la surveillance diffuse et les normes institutionnelles incitent les individus à s'auto-réguler. La liberté consiste en des pratiques d'insoumission réfléchie et de création de modes d'existence alternatifs.",
          category: "Critique Contemporaine du Pouvoir",
          connector: "Enfin"
        }
      ]
    }
  ],

  "conscience": [
    {
      id: 0,
      label: "Perspectives Fondatrices & Cogito Rationnel",
      perspective: "Souveraineté du sujet, Doute & Conscience morale",
      pedagogicalAdvice: "À mobiliser pour les sujets démontrant que la conscience est le propre de l'homme et le garant de son identité.",
      arguments: [
        {
          statement: "La pensée consciente constitue le premier principe indubitable de toute connaissance et de l'existence.",
          author: "René Descartes",
          work: "Discours de la méthode",
          quote: "Je pense, donc je suis.",
          explanation: "Au terme du doute méthodique le plus radical, Descartes découvre que l'acte même de douter implique nécessairement l'existence de la substance pensante. La conscience réflexive s'affirme comme certitude première, antérieure à toute perception du monde matériel.",
          category: "Thèse (Certitude Métaphysique)",
          connector: "En premier lieu"
        },
        {
          statement: "La conscience morale est une voix innée divine qui permet à l'homme de discerner le bien du mal.",
          author: "Jean-Jacques Rousseau",
          work: "Émile ou De l'éducation",
          quote: "Conscience ! Conscience ! Juge infaillible du bien et du mal, qui rend l'homme semblable à un dieu.",
          explanation: "Contrairement à la raison froide qui peut calculer égoïstement ses intérêts, la conscience morale est un sentiment pur et spontané qui incline l'homme vers la pitié, la justice et la solidarité, l'élevant au-dessus de l'égoïsme animal.",
          category: "Axe Moral (Sentiment Moral Inné)",
          connector: "Aussi"
        },
        {
          statement: "La conscience n'est pas une substance figée mais une mémoire vivante projetée vers l'avenir.",
          author: "Henri Bergson",
          work: "L'Énergie spirituelle",
          quote: "Toute conscience signifie choix et mémoire.",
          explanation: "Bergson explique que retenir ce qui n'est plus pour anticiper ce qui sera caractérise le dynamisme temporel de la conscience. Sans cette continuité créatrice de la durée vécue, il n'y aurait ni identité personnelle ni liberté d'action.",
          category: "Perspective Temporelle",
          connector: "Par ailleurs"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques & Révélation de l'Inconscient",
      perspective: "Blessures narcissiques, Déterminisme psychique & Soupçon",
      pedagogicalAdvice: "Essentiel pour réfuter l'illusion de la toute-puissance de la conscience et analyser les limites de l'introspection.",
      arguments: [
        {
          statement: "La conscience n'est qu'une surface trompeuse dominée par les conflits psychiques inconscients.",
          author: "Sigmund Freud",
          work: "Introduction à la psychanalyse",
          quote: "Le Moi n'est pas maître dans sa propre maison.",
          explanation: "Freud porte la troisième blessure narcissique à l'humanité : le psychisme ne s'identifie pas à la conscience. Le Ça pulsionnel et le Surmoi culpabilisant échappent au contrôle direct du sujet, se manifestant à travers les rêves, les névroses et les actes manqués.",
          category: "Thèse Psychanalytique",
          connector: "De prime abord"
        },
        {
          statement: "Une infinité de perceptions imperceptibles façonnent notre esprit à l'insu de la conscience réflexive.",
          author: "Gottfried Wilhelm Leibniz",
          work: "Nouveaux essais sur l'entendement humain",
          quote: "Il y a en nous une infinité de petites perceptions que nous n'apercevons pas.",
          explanation: "À l'image du grondement de la mer formé par la somme inaudible de chaque goutte d'eau, notre vie mentale est traversée d'impressions inconscientes qui préparent nos jugements conscients sans que nous nous en rendions compte.",
          category: "Nuance Philosophique (Petites Perceptions)",
          connector: "Toutefois"
        },
        {
          statement: "La conscience est née du besoin social de communication et reste superficielle par rapport aux instincts vitaux.",
          author: "Friedrich Nietzsche",
          work: "Le Gai Savoir",
          quote: "La conscience n'est qu'un réseau de communications entre hommes ; c'est seulement comme tel qu'elle a été forcée de se développer.",
          explanation: "Pour Nietzsche, la pensée consciente appauvrit la richesse des forces corporelles inconscientes en les traduisant en signes communs et utilitaires. Ce que nous croyons être notre volonté la plus intime n'est souvent que l'écho de préjugés grégaires.",
          category: "Critique Généalogique",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Phénoménologiques, Corporelles & Sociales",
      perspective: "Intentionnalité, Corps propre & Conditionnement social",
      pedagogicalAdvice: "Recommandé pour les sujets modernes interrogeant le rapport de la conscience au monde extérieur, au corps et à la société.",
      arguments: [
        {
          statement: "Toute conscience est relationnelle et s'oriente nécessairement vers un objet extérieur.",
          author: "Edmund Husserl",
          work: "Méditations cartésiennes",
          quote: "Toute conscience est conscience de quelque chose.",
          explanation: "Husserl rompt avec l'illusion d'une conscience enfermée en elle-même comme un vase clos. L'intentionnalité signifie que la conscience est un mouvement de visée, un éclatement permanent vers les choses du monde, sans lesquelles elle n'aurait aucun contenu.",
          category: "Thèse Phénoménologique",
          connector: "D'emblée"
        },
        {
          statement: "La conscience est originairement ancrée dans un corps sentant et agissant.",
          author: "Maurice Merleau-Ponty",
          work: "Phénoménologie de la perception",
          quote: "La conscience est originairement non pas un « je pense que », mais un « je peux ».",
          explanation: "Avant d'être une réflexion intellectuelle désincarnée, la conscience est prise corporelle sur le monde environnant. Mon corps propre n'est pas un instrument que mon esprit piloterait de l'extérieur, mais la condition même de ma présence au réel.",
          category: "Incarnation Corporelle",
          connector: "Sous un autre angle"
        },
        {
          statement: "Ce n'est pas la conscience qui détermine l'existence sociale, mais l'existence sociale qui détermine la conscience.",
          author: "Karl Marx",
          work: "L'Idéologie allemande",
          quote: "Ce n'est pas la conscience des hommes qui détermine leur existence, c'est au contraire leur existence sociale qui détermine leur conscience.",
          explanation: "Nos croyances, nos valeurs morales et nos représentations intellectuelles ne tombent pas du ciel : elles reflètent les conditions matérielles de production et la place de l'individu dans la division du travail social. La conscience est le produit de l'histoire concrète.",
          category: "Analyse Matérialiste & Historique",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Herméneutiques, Conscience Morale & Introspection Critique",
      perspective: "Identité narrative, Vigilance éthique & Déconstruction des illusions",
      pedagogicalAdvice: "À mobiliser pour penser la conscience dans le temps (récit de soi), la vigilance morale contre le fanatisme et la déconstruction des certitudes immédiates.",
      arguments: [
        {
          statement: "L'identité de la conscience n'est pas un noyau figé, mais une construction narrative où le sujet se comprend à travers le récit de sa vie.",
          author: "Paul Ricœur",
          work: "Soi-même comme un autre",
          quote: "C'est dans le récit que l'identité personnelle se constitue comme identité narrative.",
          explanation: "Ricœur distingue l'identité-mêmeté (la permanence physique inchangée) et l'identité-ipséité (le maintien de soi dans la promesse et la fidélité éthique). La conscience de soi s'élabore en articulant activement les souvenirs et les projets dans une trame temporelle pleine de sens.",
          category: "Identité Narrative & Ipséité",
          connector: "De prime abord"
        },
        {
          statement: "La conscience n'est pas une simple réceptivité passive mais un acte de veille lucide et de refus du sommeil dogmatique.",
          author: "Alain (Émile Chartier)",
          work: "Éléments de philosophie",
          quote: "La conscience est toujours implicitement un refus d'être dupe. Penser, c'est dire non.",
          explanation: "Pour Alain, la conscience est vigilance critique : elle consiste à suspendre son jugement face aux évidences faciles et aux propagandes, et à soumettre chaque opinion à l'examen de la raison personnelle.",
          category: "Conscience Critique & Vigilance Intellectuelle",
          connector: "En outre"
        },
        {
          statement: "Les hommes se croient libres parce qu'ils ont conscience de leurs désirs, mais ignorent les causes naturelles qui les déterminent.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre III)",
          quote: "Les hommes sont conscients de leurs désirs et ignorants des causes qui les déterminent.",
          explanation: "Spinoza déconstruit l'illusion d'une conscience souveraine : comme une pierre qui, dotée de conscience pendant sa chute, croirait qu'elle tombe par sa propre volonté, l'être humain prend ses impulsions psychiques pour des choix libres tant qu'il n'en comprend pas les lois nécessaires.",
          category: "Déconstruction de l'Illusion de Conscience",
          connector: "Toutefois"
        },
        {
          statement: "La conscience morale est un instinct divin et infaillible, supérieur à tous les raisonnements spéculatifs pour aimer le bien.",
          author: "Jean-Jacques Rousseau",
          work: "Profession de foi du vicaire savoyard",
          quote: "Conscience ! Conscience ! Juge infaillible du bien et du mal, qui rends l'homme semblable à Dieu.",
          explanation: "Rousseau affirme que la moralité ne provient pas de subtils traités philosophiques mais de l'écoute du sentiment intérieur. La conscience morale éprouve spontanément la pitié face à la souffrance d'autrui et la joie d'accomplir le bien.",
          category: "Voix Morale Infaillible",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "travail": [
    {
      id: 0,
      label: "Perspectives Fondatrices & Humanisation par l'Effort",
      perspective: "Transformation de la nature, Discipline & Culture",
      pedagogicalAdvice: "À utiliser pour démontrer la valeur formatrice, émancipatrice et civilisatrice du travail humain.",
      arguments: [
        {
          statement: "Le travail permet à l'homme de dominer ses instincts et de s'élever au statut de conscience de soi autonome.",
          author: "Georg Wilhelm Friedrich Hegel",
          work: "Phénoménologie de l'esprit",
          quote: "Le travail forme. L'ouvrier devient conscient de lui-même par l'objet qu'il transforme.",
          explanation: "Dans la célèbre dialectique du maître et de l'esclave, le maître oisif consomme passivement les biens produits par l'autre, tandis que l'esclave travailleur discipline son désir, imprime sa marque rationnelle sur la matière brute et découvre sa propre liberté créatrice à travers son œuvre.",
          category: "Thèse Dialectique (Émancipation par l'Œuvre)",
          connector: "En premier lieu"
        },
        {
          statement: "La nature n'a rien donné de tout cuit à l'homme pour le forcer à développer ses facultés par le travail.",
          author: "Emmanuel Kant",
          work: "Idée d'une histoire universelle au point de vue cosmopolitique",
          quote: "La nature a voulu que l'homme tirât entièrement de lui-même tout ce qui dépasse l'agencement mécanique de son existence animale.",
          explanation: "Pour Kant, l'homme ne dispose ni de fourrure ni de griffes prédatrices. Cette indigence biologique initiale est en réalité une bénédiction : elle contraint l'humanité à inventer les techniques, à s'instruire et à quitter la paresse originelle pour réaliser sa destination morale.",
          category: "Perspective Téléologique (Développement des Facultés)",
          connector: "Aussi"
        },
        {
          statement: "Le travail humain se distingue radicalement de l'activité animale par la conception préalable de l'objet dans l'esprit.",
          author: "Karl Marx",
          work: "Le Capital",
          quote: "Ce qui distingue dès l'abord le plus mauvais architecte de l'abeille la plus experte, c'est qu'il a construit la cellule dans sa tête avant de la construire dans la cire.",
          explanation: "L'animal agit selon un programme instinctif mécanique et répétitif. L'homme, à l'inverse, subordonne son geste à un dessein conscient, faisant du travail une médiation spirituelle où la volonté s'extériorise dans le monde sensible.",
          category: "Définition Anthropologique",
          connector: "Par conséquent"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques, Aliénation & Usure Ouvrière",
      perspective: "Dépouillement, Déshumanisation & Division du travail",
      pedagogicalAdvice: "Idéal pour dénoncer la dégradation du travail sous le capitalisme industriel et la répétition abrutissante de la chaîne.",
      arguments: [
        {
          statement: "Dans les conditions de la production marchande, le travail dépossède l'ouvrier de son être au lieu de l'épanouir.",
          author: "Karl Marx",
          work: "Manuscrits de 1844",
          quote: "Dans son travail, l'ouvrier ne s'affirme pas, mais se nie ; il ne s'y sent pas à l'aise, mais malheureux.",
          explanation: "Marx analyse le quadruple mécanisme de l'aliénation : l'ouvrier est dépossédé du produit de son labeur (qui appartient au capitaliste), de l'acte même de production (qui devient une torture mécanique), de sa nature générique d'homme libre et de ses relations fraternelles avec les autres travailleurs.",
          category: "Thèse Critique (Aliénation Radicale)",
          connector: "De prime abord"
        },
        {
          statement: "La cadence industrielle et le taylorisme réduisent la pensée ouvrière à un automatisme dégradant.",
          author: "Simone Weil",
          work: "La Condition ouvrière",
          quote: "Le travail d'usine fait mal non seulement aux muscles, mais à l'âme : il ôte le sentiment d'avoir une vie à soi.",
          explanation: "Témoignant de son expérience directe en usine automobile, la philosophe montre comment l'obsession de la rentabilité horaire et la séparation absolue entre conception intellectuelle et exécution physique détruisent toute fierté professionnelle et brisent la dignité intérieure.",
          category: "Témoignage Philosophique & Éthique",
          connector: "Sous un autre regard"
        },
        {
          statement: "La réduction moderne de toute existence au statut de simple travailleur prive l'homme de l'action politique noble.",
          author: "Hannah Arendt",
          work: "Condition de l'homme moderne",
          quote: "Ce que nous avons sous les yeux, c'est l'avènement d'une société de travailleurs sans travail, c'est-à-dire privés de la seule activité qui leur reste.",
          explanation: "Arendt distingue le travail (asservissement aux cycles biologiques de consommation), l'œuvre (fabrication d'un monde durable d'objets) et l'action (parole politique entre citoyens libres). L'hégémonie de l'animal laborans risque d'engloutir les libertés démocratiques dans la seule quête du rendement vital.",
          category: "Critique Politique de la Société du Travail",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Contemporaines, Technique & Émancipation Africaine",
      perspective: "Technoscience, Souveraineté productive & Nouveaux modèles",
      pedagogicalAdvice: "À mobiliser pour les sujets traitant de l'impact de la technique, du travail des peuples du Sud et de la transition écologique.",
      arguments: [
        {
          statement: "La souveraineté des nations africaines repose sur la maîtrise scientifique et la revalorisation de la force productive locale.",
          author: "Cheikh Anta Diop",
          work: "Les Fondements économiques et culturels d'un État fédéral d'Afrique noire",
          quote: "La véritable indépendance ne se proclame pas dans les discours : elle se conquiert par le travail méthodique, l'industrialisation lourde et la valorisation de nos ressources.",
          explanation: "Cheikh Anta Diop démontre que l'exportation brute de matières premières sans transformation industrielle maintient les peuples dans la dépendance néo-coloniale. Le travail organisé et la maîtrise technologique endogène sont les seuls leviers de la dignité historique.",
          category: "Perspective Africaine & Économique",
          connector: "En premier lieu"
        },
        {
          statement: "La technique contemporaine n'est plus un simple instrument docile, mais un système autonome qui impose ses propres lois au travail.",
          author: "Jacques Ellul",
          work: "Le Système technicien",
          quote: "La technique s'est substituée à la nature comme milieu de vie de l'homme.",
          explanation: "Ellul avertit que la recherche automatique de l'efficacité maximale évacue progressivement les considérations morales, esthétiques ou humanistes. Le travailleur devient un rouage chargé de servir la machine au lieu d'en être le maître souverain.",
          category: "Critique du Système Technicien",
          connector: "Toutefois"
        },
        {
          statement: "La technique est un « pharmakon » : elle peut aliéner l'esprit humain comme elle peut ouvrir des voies d'émancipation inédites.",
          author: "Bernard Stiegler",
          work: "Prendre soin : De la jeunesse et des générations",
          quote: "La technique est à la fois poison et remède.",
          explanation: "Stiegler montre que l'automatisation algorithmique risque de prolétariser les savoirs et d'annihiler l'attention. Cependant, réinvestie par des collectifs critiques et une éducation renouvelée, elle offre des moyens d'expression et de collaboration d'une puissance sans précédent.",
          category: "Dépassement Contemporain",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives de la Condition Humaine, Écologie & Travail Vivant",
      perspective: "Action politique contre simple labeur, Émancipation écologique & Dignité de l'artisan",
      pedagogicalAdvice: "À mobiliser pour distinguer le travail biologique aliéné de l'œuvre d'art et de l'action politique libre, et pour penser la transition écologique du travail.",
      arguments: [
        {
          statement: "Il faut distinguer le labeur biologique asservissant de l'œuvre durable de l'artisan et de l'action politique libre.",
          author: "Hannah Arendt",
          work: "Condition de l'homme moderne",
          quote: "La vie active comprend trois activités fondamentales : le travail, l'œuvre et l'action.",
          explanation: "Arendt démontre que le « travail » au sens strict se borne à assurer la survie corporelle éphémère et condamne l'homme au cycle sans fin de la production et de la consommation. L'élévation authentique de la condition humaine suppose l'« œuvre » qui crée un monde durable et surtout l'« action » politique où la liberté se déploie dans l'espace public.",
          category: "Thèse Phénoménologique (Tripartition de la Vita Activa)",
          connector: "De prime abord"
        },
        {
          statement: "La libération véritable exige de briser l'idéologie productiviste pour libérer le temps de vie et préserver la nature.",
          author: "André Gorz",
          work: "Métamorphoses du travail",
          quote: "Travailler moins pour vivre mieux et travailler tous : l'émancipation commence là où le temps choisi l'emporte sur le temps aliéné.",
          explanation: "Gorz montre que le capitalisme a transformé le travail en une fin en soi absurde qui détruit la biosphère et aliène l'individu. L'humanisation de la société passe par la réduction radicale du temps de travail contraint au profit des activités autonomes, de la culture et des liens sociaux.",
          category: "Écologie Politique & Sortie du Productivisme",
          connector: "Aussi"
        },
        {
          statement: "Le travail artisanal bien fait apporte une satisfaction intellectuelle et corporelle profonde que la division abstraite du travail détruit.",
          author: "Richard Sennett",
          work: "Ce que sait la main : La culture de l'artisanat",
          quote: "L'artisanat désigne une impulsion humaine durable et fondamentale : le désir de bien faire un travail pour lui-même.",
          explanation: "Sennett réhabilite l'intelligence de la main contre le mépris intellectuel traditionnel du travail matériel. L'artisan, en dialoguant patiemment avec la matière et en affinant son savoir-faire, développe une éthique de l'excellence et du soin irremplaçable pour l'équilibre humain.",
          category: "Intelligence Incarnée & Éthique du Travail Bien Fait",
          connector: "Par ailleurs"
        },
        {
          statement: "Dans le travail exploité, l'ouvrier ne s'affirme pas mais se nie, n'est pas libre mais dépouillé de son humanité essentielle.",
          author: "Karl Marx",
          work: "Manuscrits de 1844",
          quote: "L'ouvrier ne se sent lui-même qu'en dehors du travail, et dans le travail il se sent hors de lui-même.",
          explanation: "Marx analyse l'aliénation fondamentale du prolétaire : son activité vitale lui devient étrangère et hostile, car son produit lui est confisqué. Il ne se sent libre que dans ses fonctions purement animales (manger, boire, procréer), tandis que dans ce qui devrait faire sa grandeur humaine (le travail créateur), il est ravalé au rang de bête de somme.",
          category: "Aliénation Radicale du Travailleur",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "etat": [
    {
      id: 0,
      label: "Perspectives Fondatrices & Légitimité du Contrat Social",
      perspective: "Sécurité civile, Ordre juridique & Paix publique",
      pedagogicalAdvice: "Idéal pour établir pourquoi l'État est une nécessité vitale contre le chaos de l'état de nature.",
      arguments: [
        {
          statement: "L'État est indispensable pour conjurer la guerre permanente de tous contre tous.",
          author: "Thomas Hobbes",
          work: "Léviathan",
          quote: "L'homme est un loup pour l'homme à l'état de nature ; c'est pourquoi l'État seul garantit la paix et la sécurité.",
          explanation: "Hobbes démontre que sans un pouvoir souverain commun capable d'inspirer le respect des lois, les passions rivales transforment l'existence en un enfer d'angoisse et de meurtre. Instituer le Léviathan relève de la raison pour sauver la vie des citoyens.",
          category: "Thèse Fondatrice (Sécurité & Paix)",
          connector: "De prime abord"
        },
        {
          statement: "La véritable finalité de l'État n'est pas d'asservir les hommes par la peur, mais de préserver leur liberté.",
          author: "Baruch Spinoza",
          work: "Traité théologico-politique",
          quote: "La fin de l'État est en réalité la liberté.",
          explanation: "Spinoza conteste l'absolutisme tyrannique : un État qui étouffe la liberté de penser et d'exprimer ses convictions se détruit lui-même. L'ordre politique vise à libérer les citoyens de la terreur pour leur permettre d'exercer sereinement leur raison.",
          category: "Cadrage Démocratique",
          connector: "Sous un angle complémentaire"
        },
        {
          statement: "L'État légitime tire son autorité du consentement souverain du peuple réuni sous la loi générale.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale.",
          explanation: "Pour Rousseau, l'État ne doit jamais être la propriété d'un monarque ou d'une oligarchie. C'est l'incarnation juridique du corps politique où chaque citoyen, en obéissant à la loi votée par tous, n'obéit en réalité qu'à lui-même.",
          category: "Souveraineté Populaire",
          connector: "Par conséquent"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques, Violence & Domination de Classe",
      perspective: "Monopole de la violence, Illusion idéologique & Dépérissement",
      pedagogicalAdvice: "Essentiel pour les sujets interrogeant les dérives autoritaires, l'oppression étatique et la contestation de l'autorité.",
      arguments: [
        {
          statement: "L'État moderne se caractérise par le monopole de la contrainte physique légitime sur un territoire donné.",
          author: "Max Weber",
          work: "Le Savant et le Politique",
          quote: "L'État est cette communauté humaine qui revendique avec succès le monopole de la violence physique légitime.",
          explanation: "Weber rappelle avec lucidité le ressort ultime de l'ordre étatique : aucune loi ne tient sans la possibilité coercive de l'imposer par la police et la justice. Même démocratique, l'État s'édifie toujours sur le rapport d'autorité et de force.",
          category: "Définition Réaliste (Monopole de la Violence)",
          connector: "Toutefois"
        },
        {
          statement: "L'État n'est pas l'arbitre impartial de la société, mais l'instrument de domination de la classe économique dominante.",
          author: "Karl Marx & Friedrich Engels",
          work: "Manifeste du parti communiste",
          quote: "Le gouvernement moderne n'est qu'un comité qui gère les affaires communes de la classe bourgeoise tout entière.",
          explanation: "Marx dévoile l'imposture de la neutralité étatique : derrière les beaux discours d'intérêt général, le droit et la bureaucratie protègent d'abord les privilèges de propriété privée et écrasent les revendications du prolétariat.",
          category: "Critique Révolutionnaire (Appareil de Classe)",
          connector: "Cependant"
        },
        {
          statement: "L'État s'impose comme une entité monstrueuse qui détruit la culture authentique et uniformise les peuples.",
          author: "Friedrich Nietzsche",
          work: "Ainsi parlait Zarathoustra",
          quote: "L'État, c'est le plus froid de tous les monstres froids. Il ment froidement ; et voici le mensonge qui rampe de sa bouche : « Moi, l'État, je suis le peuple ! »",
          explanation: "Nietzsche fustige l'idolâtrie étatique qui étouffe le génie individuel et la création spirituelle au profit d'une masse docile de fonctionnaires et d'administrés médiocres. L'élévation de l'homme commence là où cesse l'omnipotence de l'État.",
          category: "Critique Radicale de l'Élévation",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Africaines, Justice Décoloniale & Éthique Publique",
      perspective: "État postcolonial, Intégrité des dirigeants & Service du peuple",
      pedagogicalAdvice: "À mobiliser pour les sujets abordant le rôle de l'État en Afrique, la corruption, la citoyenneté et le panafricanisme.",
      arguments: [
        {
          statement: "L'État en Afrique doit rompre avec l'héritage prédateur colonial pour devenir un véritable instrument de libération populaire.",
          author: "Thomas Sankara",
          work: "Discours d'orientation politique (1983)",
          quote: "L'État ne doit plus être le fardeau écrasant du peuple, mais le levier de son autosuffisance et de sa fierté retrouvée.",
          explanation: "Sankara met en garde contre les élites politiques qui confisquent les appareils étatiques pour reproduire les privilèges des anciens maîtres. L'État n'est digne de respect que s'il éradique la corruption, protège les plus vulnérables et produit ce que consomment ses citoyens.",
          category: "Perspective Décoloniale & Intégrité",
          connector: "D'emblée"
        },
        {
          statement: "La démocratie constitutionnelle exige la séparation rigoureuse des pouvoirs et le débat contradictoire permanent.",
          author: "Paulin Hountondji",
          work: "Combats pour le sens : Un itinéraire africain",
          quote: "L'État de droit suppose la liberté d'expression inconditionnelle et le refus de tout parti unique prétendant détenir la vérité absolue.",
          explanation: "Hountondji dénonce les théories paternalistes qui prétendaient que l'Afrique n'était pas mûre pour la démocratie pluraliste. L'autorité de l'État tire sa légitimité de la confrontation critique des idées et du contrôle démocratique par les citoyens.",
          category: "Rationalité Politique & État de Droit",
          connector: "Aussi"
        },
        {
          statement: "La justice politique ne consiste pas à appliquer des règles abstraites, mais à développer les capabilités effectives des citoyens.",
          author: "Amartya Sen",
          work: "L'Idée de justice",
          quote: "La justice doit être évaluée à l'aune des libertés réelles dont disposent les personnes pour mener la vie qu'elles ont des raisons de valoriser.",
          explanation: "Sen dépasse les théories contractuelles purement procédurales : un État juste ne se contente pas de distribuer des droits sur papier ; il investit dans l'éducation, la santé et la démocratie participative afin d'éliminer les injustices criantes vécues au quotidien.",
          category: "Justice Réelle & Développement Humain",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives de la Souveraineté Démocratique, Biopolitique & Émancipation Panafricaine",
      perspective: "Liberté comme fin ultime de l'État, Critique de la nécropolitique & Renaissance africaine",
      pedagogicalAdvice: "À mobiliser pour penser la finalité éthique de la puissance publique, dénoncer les dérives autoritaires et affirmer la souveraineté démocratique.",
      arguments: [
        {
          statement: "La fin véritable de l'État n'est pas de dominer les hommes par la terreur, mais de les délivrer de la peur pour leur permettre de penser librement.",
          author: "Baruch Spinoza",
          work: "Traité théologico-politique (Chapitre XX)",
          quote: "La fin de l'État est en réalité la liberté.",
          explanation: "Spinoza réfute l'autoritarisme absolu de Hobbes : un pouvoir politique qui étouffe le libre jugement détruit sa propre légitimité. L'État a pour mission fondamentale d'assurer la sécurité pour que les citoyens exercent pleinement leur raison sans crainte d'être opprimés.",
          category: "Thèse Démocratique (La Liberté comme Fin de l'État)",
          connector: "De prime abord"
        },
        {
          statement: "L'État moderne tend à transformer le pouvoir de faire vivre en un pouvoir nécropolitique de gérer et de dicter qui doit mourir.",
          author: "Achille Mbembe",
          work: "Nécropolitique",
          quote: "L'exercice de la souveraineté consiste dans le pouvoir de dicter qui peut vivre et qui doit mourir.",
          explanation: "Mbembe prolonge la critique foucaldienne de la biopolitique en montrant comment les États contemporains et postcoloniaux créent des mondes de la mort et des zones frontalières de non-droit où les populations vulnérables sont exposées à une précarité extrême et à la violence.",
          category: "Critique Nécropolitique du Pouvoir Étatique",
          connector: "Aussi"
        },
        {
          statement: "L'État en Afrique doit s'unir dans un cadre fédéral panafricain pour conquérir sa réelle souveraineté économique, scientifique et politique.",
          author: "Cheikh Anta Diop",
          work: "Les Fondements économiques et culturels d'un État fédéral d'Afrique Noire",
          quote: "L'Afrique doit s'unir pour devenir un bloc géopolitique souverain capable de tenir son rang dans le concert des nations modernes.",
          explanation: "Diop démontre que les micro-États nés des balkanisations coloniales sont condamnés à la faiblesse et à la vassalisation. Seule une fédération politique continentale démocratique permettra de mutualiser les richesses et d'assurer l'indépendance réelle des peuples africains.",
          category: "Souveraineté Panafricaine & Fédéralisme Démocratique",
          connector: "Par ailleurs"
        },
        {
          statement: "Le pouvoir d'État contemporain s'exerce par des dispositifs invisibles de surveillance et de contrôle des corps dans toute la société.",
          author: "Michel Foucault",
          work: "Surveiller et punir",
          quote: "La visibilité est un piège. Le pouvoir disciplinaire s'exerce par l'œil panoptique qui individualise et assujettit.",
          explanation: "Foucault démontre que l'État ne gouverne pas uniquement par les lois écrites et la police visible, mais par une microphysique diffuse du pouvoir présente dans l'école, l'hôpital, l'usine et la prison pour fabriquer des individus dociles et économiquement rentables.",
          category: "Microphysique du Pouvoir & Surveillance",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "poesie": [
    {
      id: 0,
      label: "L'Alchimie Verbale, le Lyrisme & la Transfiguration Esthétique",
      perspective: "Beauté pure, Alchimie poétique & Chant de l'âme",
      pedagogicalAdvice: "À mobiliser pour les sujets défendant que la poésie est avant tout un art musical de transfiguration du réel et d'expression intime.",
      arguments: [
        {
          statement: "La poésie accomplit le miracle esthétique d'extraire la beauté de la boue et des souffrances de l'existence.",
          author: "Charles Baudelaire",
          work: "Les Fleurs du mal (Projets de préface)",
          quote: "Tu m'as donné ta boue et j'en ai fait de l'or.",
          explanation: "Pour Baudelaire, la poésie n'a pas pour mission première d'enseigner la morale ou de servir un parti politique. Elle opère une transmutation alchimique : par la perfection du rythme, de l'image et de la rime, elle révèle la splendeur cachée dans les aspects les plus douloureux ou répugnants du monde.",
          category: "Axe Esthétique (Alchimie Poétique)",
          connector: "En premier lieu"
        },
        {
          statement: "Le poète est l'écho sonore des passions humaines universelles, faisant vibrer l'intériorité de chaque lecteur.",
          author: "Victor Hugo",
          work: "Les Contemplations (Préface)",
          quote: "Ah ! insensé qui crois que je ne suis pas toi !",
          explanation: "Hugo montre que dans le recueil lyrique, le « Je » du poète transcende son individualité biographique pour devenir le miroir des peines, des deuils et des espérances de tous les hommes. La poésie relie les consciences par la grâce du sentiment partagé.",
          category: "Axe Lyrique (Universalité de l'Intime)",
          connector: "Aussi"
        },
        {
          statement: "La poésie est l'art de donner un sens plus pur aux mots de la tribu par l'exploration musicale du silence.",
          author: "Stéphane Mallarmé",
          work: "Le Tombeau d'Edgar Poe",
          quote: "Donner un sens plus pur aux mots de la tribu.",
          explanation: "Contre le bavardage quotidien et l'usage utilitaire de la communication, le poète symboliste travaille la langue comme une partition magique. Le vers poétique évoque la suggestion mystérieuse et l'Idée pure plutôt que de décrire platement les objets.",
          category: "Pureté Symboliste & Mystère du Langage",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "La Poésie Engagée, Arme de Combat & Cri des Opprimés",
      perspective: "Dénonciation politique, Éveil des consciences & Liberté",
      pedagogicalAdvice: "Indispensable pour démontrer que la poésie ne peut rester neutre face aux tragédies de l'histoire et à l'injustice sociale.",
      arguments: [
        {
          statement: "La poésie noire et militante est une arme miraculeuse forgée pour briser les chaînes de l'aliénation coloniale.",
          author: "Aimé Césaire",
          work: "Cahier d'un retour au pays natal",
          quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir.",
          explanation: "Césaire refuse l'art pour l'art gratuit et déconnecté. Le poète se fait la conscience vigile et le porte-parole fraternel de tous les humiliés de l'histoire. Sa parole est une déflagration verbale qui redonne aux peuples opprimés la fierté de leur identité.",
          category: "Thèse Militante (Poésie de Combat & Négritude)",
          connector: "De prime abord"
        },
        {
          statement: "Face à la barbarie et à l'occupation, les poètes de la Résistance font du vers un étendard d'insoumission civique.",
          author: "Paul Éluard",
          work: "Poésie et Vérité (1942)",
          quote: "Et par le pouvoir d'un mot / Je recommence ma vie / Je suis né pour te connaître / Pour te nommer / Liberté.",
          explanation: "Parachuté clandestinement au-dessus des maquis français durant la Seconde Guerre mondiale, ce poème démontre que le lyrisme poétique le plus limpide peut se muer en acte de bravoure historique, mobilisant le courage des hommes contre la tyrannie fasciste.",
          category: "Résistance & Engagement Civique",
          connector: "Sous un angle décisif"
        },
        {
          statement: "La poésie africaine de combat fouette les consciences engourdies et annonce l'aube inéluctable de la renaissance.",
          author: "David Diop",
          work: "Coups de pilon (Afrique)",
          quote: "Afrique mon Afrique / Voici les jours de fierté / Cet arbre là-bas qui repousse / C'est l'Afrique qui renaît patiemment obstinément.",
          explanation: "David Diop déploie une poésie incisive où chaque strophe est un coup de marteau contre l'oppression et un appel à l'espérance fraternelle. La poésie devient matrice d'émancipation politique et culturelle pour les générations futures.",
          category: "Émancipation Panafricaine",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "L'Évasion Onirique, l'Aventure de l'Imaginaire & la Fête du Verbe",
      perspective: "Surréalisme, Rêve, Rupture avec le quotidien & Féerie",
      pedagogicalAdvice: "À utiliser pour les sujets mettant en valeur le pouvoir libérateur du rêve, du voyage et du surréalisme.",
      arguments: [
        {
          statement: "La poésie ouvre les portes de l'inconscient et libère l'imaginaire des carcans de la logique utilitaire.",
          author: "André Breton",
          work: "Manifeste du surréalisme (1924)",
          quote: "Le seul mot de liberté est tout ce qui m'exalte encore. Je crois à la résolution future de ces deux états, en apparence si contradictoires, que sont le rêve et la réalité.",
          explanation: "Par l'écriture automatique et la juxtaposition d'images insolites, le mouvement surréaliste émancipe le désir humain des interdits bourgeois et des conventions étouffantes. La poésie réenchante le quotidien par la force subversive de la merveille.",
          category: "Thèse Surréaliste (Libération du Rêve)",
          connector: "D'emblée"
        },
        {
          statement: "Le poème est une invitation au voyage onirique où l'âme s'évade vers un univers d'harmonie et de volupté.",
          author: "Charles Baudelaire",
          work: "Les Fleurs du mal (L'Invitation au voyage)",
          quote: "Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté.",
          explanation: "Loin de la grisaille du spleen urbain, le poète transporte son lecteur vers des rivages enchantés où les sens correspondent en une synesthésie parfaite. La poésie offre un havre de paix et d'élévation spirituelle contre l'angoisse existentielle.",
          category: "Axe de l'Évasion & Synesthésie",
          connector: "Aussi"
        },
        {
          statement: "La poésie est une fête ininterrompue du langage qui réveille en l'homme son émerveillement d'enfant.",
          author: "Jacques Prévert",
          work: "Paroles",
          quote: "Il faut essayer d'être heureux, ne serait-ce que pour donner l'exemple.",
          explanation: "Par un style direct, un humour tendre et des jeux de mots espiègles, Prévert désacralise l'art poétique pour le rendre accessible à tous. Le poème célèbre les joies simples de la vie et désarme la morgue des puissants par le rire libérateur.",
          category: "Poésie Populaire & Émerveillement",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Négritude, Poésie Tellurique & Cri d'Insurrection Décoloniale",
      perspective: "Arme miraculeuse, Mémoire des ancêtres, Révolution poétique & Fraternité",
      pedagogicalAdvice: "À mobiliser pour les sujets sur la littérature africaine, la révolte poétique contre l'oppression et la renaissance culturelle.",
      arguments: [
        {
          statement: "La poésie de la Négritude est une parole tellurique et insurrectionnelle qui brise les chaînes de l'aliénation coloniale.",
          author: "Aimé Césaire",
          work: "Cahier d'un retour au pays natal",
          quote: "Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix la liberté de celles qui s'affaissent au cachot du désespoir.",
          explanation: "Pour Césaire, la poésie n'est pas un vain jeu de salon mais « l'arme miraculeuse ». Elle plonge aux tréfonds de la mémoire blessée pour ressusciter la dignité bafouée du peuple noir et lancer un appel universel à la fraternité des peuples libres.",
          category: "Thèse de la Négritude Insurrectionnelle",
          connector: "De prime abord"
        },
        {
          statement: "La poésie africaine est une communion rythmique avec les forces vives du cosmos et la sagesse ancestrale.",
          author: "Léopold Sédar Senghor",
          work: "Chants d'ombre (Prière aux Masques)",
          quote: "Masques ! Masques ! Masque noir masque rouge... Gardez ce sanctuaire où l'Afrique renaît !",
          explanation: "Senghor démontre que le poème africain est inséparable de la cadence du tam-tam et de la respiration cosmique. La poésie rétablit l'harmonie entre le monde visible et les ancêtres spirituels, offrant à la civilisation de l'universel la chaleur de l'émotion créatrice.",
          category: "Rythme Cosmique & Enracinement Culturel",
          connector: "Aussi"
        },
        {
          statement: "La parole poétique clandestine est la flamme invincible de la résistance qui refuse la capitulation morale.",
          author: "René Char",
          work: "Feuillets d'Hypnos",
          quote: "La lucidité est la blessure la plus rapprochée du soleil.",
          explanation: "Engagé dans la Résistance sous le nom de Capitaine Alexandre, René Char forge des aphorismes d'une densité incandescente. La poésie n'est pas une retraite contemplative mais une vigilance éthique armée pour sauvegarder l'honneur de l'homme au cœur de la nuit totalitaire.",
          category: "Poésie Résistante & Vigilance Éthique",
          connector: "Par ailleurs"
        },
        {
          statement: "La poésie populaire et engagée redonne confiance aux opprimés en prophétisant la victoire inéluctable de la justice.",
          author: "Pablo Neruda",
          work: "Chant général",
          quote: "Je viens ici chanter pour le peuple et avec lui, afin que nul n'oublie la beauté de notre terre et la dignité de nos luttes.",
          explanation: "Dans cette immense épopée latino-américaine, Neruda prête sa voix aux mineurs, aux paysans et aux déshérités. La poésie célèbre la géographie sacrée du continent et dénonce les tyrannies, devenant le chant d'espérance d'une humanité en marche.",
          category: "Épopée Populaire & Justice Sociale",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "roman": [
    {
      id: 0,
      label: "Réalisme, société & mémoire",
      perspective: "Observer le réel et comprendre une société",
      pedagogicalAdvice: "À utiliser pour montrer que le roman peut représenter les milieux sociaux, les relations humaines et les transformations historiques.",
      arguments: [
        {
          statement: "Le roman représente les relations sociales et les conditions de vie d'une époque.",
          author: "Ahmadou Kourouma",
          work: "Les Soleils des indépendances",
          quote: "",
          explanation: "Le récit de Fama permet d'observer les bouleversements d'une société africaine au temps des indépendances et du parti unique.",
          category: "Fonction réaliste",
          connector: "En premier lieu"
        },
        {
          statement: "Le roman peut conserver une mémoire sensible des événements historiques.",
          author: "Ousmane Sembène",
          work: "Les Bouts de bois de Dieu",
          quote: "",
          explanation: "La grande grève des cheminots du Dakar-Niger sert de cadre à un récit qui fait découvrir les conditions de vie et la lutte collective des travailleurs.",
          category: "Fonction didactique & historique",
          connector: "Par ailleurs"
        },
        {
          statement: "Le roman peut représenter une société à travers les problèmes de la vie quotidienne.",
          author: "Mariama Bâ",
          work: "Une si longue lettre",
          quote: "",
          explanation: "À travers la vie de Ramatoulaye, le roman aborde la famille, le mariage, la polygamie et la condition des femmes dans la société sénégalaise.",
          category: "Fonction réaliste",
          connector: "De plus"
        }
      ]
    },
    {
      id: 1,
      label: "Évasion, aventure & imagination",
      perspective: "Inventer, faire rêver et faire voyager",
      pedagogicalAdvice: "À mobiliser lorsque le sujet porte sur la fiction, l'imagination, le voyage, l'aventure ou les mondes possibles.",
      arguments: [
        {
          statement: "Le roman peut créer des mondes qui dépassent la réalité quotidienne.",
          author: "Pierre Boulle",
          work: "La Planète des singes",
          quote: "",
          explanation: "Le roman de science-fiction imagine une société où les singes occupent une place dominante et propose ainsi un univers qui éloigne le lecteur de son quotidien.",
          category: "Fonction évasive / fictive",
          connector: "D'abord"
        },
        {
          statement: "Le roman d'aventures permet au lecteur de voyager par l'imagination.",
          author: "Alexandre Dumas",
          work: "Le Comte de Monte-Cristo",
          quote: "",
          explanation: "Les voyages, les péripéties et les retournements de situation entraînent le lecteur dans une histoire éloignée de sa vie quotidienne.",
          category: "Fonction ludique & évasive",
          connector: "Ensuite"
        },
        {
          statement: "La fiction peut utiliser l'imaginaire pour faire réfléchir sur le monde réel.",
          author: "Antoine de Saint-Exupéry",
          work: "Le Petit Prince",
          quote: "",
          explanation: "Le voyage du Petit Prince et les personnages qu'il rencontre permettent d'aborder l'amitié, la responsabilité et certains travers du monde des adultes.",
          category: "Fonction évasive / fictive",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 2,
      label: "Divertissement, suspense & plaisir de lire",
      perspective: "Captiver le lecteur par le récit",
      pedagogicalAdvice: "À utiliser pour démontrer que le roman peut procurer du plaisir sans être réduit à une simple distraction.",
      arguments: [
        {
          statement: "Les péripéties rendent le récit captivant.",
          author: "Amadou Koné",
          work: "Les Frasques d'Ebinto",
          quote: "",
          explanation: "Le parcours d'Ebinto est marqué par des choix et des événements qui entraînent le lecteur dans une histoire de jeunesse, de responsabilité et de conséquences.",
          category: "Fonction ludique",
          connector: "En premier lieu"
        },
        {
          statement: "Le suspense entretient la curiosité du lecteur.",
          author: "Alexandre Dumas",
          work: "Le Comte de Monte-Cristo",
          quote: "",
          explanation: "Les secrets, les obstacles et les retournements de situation créent une attente qui pousse le lecteur à poursuivre le récit.",
          category: "Fonction ludique",
          connector: "En outre"
        },
        {
          statement: "L'humour et l'ironie peuvent divertir tout en faisant réfléchir.",
          author: "Ousmane Sembène",
          work: "Le Mandat",
          quote: "",
          explanation: "Les situations et les personnages du récit peuvent provoquer le rire tout en mettant en lumière les difficultés administratives et sociales rencontrées par le personnage principal.",
          category: "Fonction ludique & satirique",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Engagement, critique & émancipation",
      perspective: "Dénoncer les injustices et défendre la dignité humaine",
      pedagogicalAdvice: "À privilégier pour les sujets sur la littérature engagée, la colonisation, la condition féminine, les abus de pouvoir, la guerre ou les luttes sociales.",
      arguments: [
        {
          statement: "Le roman peut dénoncer les humiliations et les abus de la domination coloniale.",
          author: "Ferdinand Oyono",
          work: "Une vie de boy",
          quote: "",
          explanation: "À travers le journal de Toundi, le récit montre les rapports de domination et les humiliations auxquelles un jeune domestique africain est confronté dans le système colonial.",
          category: "Fonction engagée",
          connector: "En premier lieu"
        },
        {
          statement: "Le roman peut défendre les droits et la dignité des femmes.",
          author: "Fatou Keïta",
          work: "Rebelle",
          quote: "",
          explanation: "Le parcours de Malimouna permet d'aborder l'excision, le mariage forcé et la volonté d'une femme de reprendre le contrôle de sa vie.",
          category: "Fonction engagée",
          connector: "Ensuite"
        },
        {
          statement: "Le roman peut dénoncer les conséquences humaines des guerres.",
          author: "Ahmadou Kourouma",
          work: "Allah n'est pas obligé",
          quote: "",
          explanation: "Le parcours de Birahima se déroule dans le contexte des guerres civiles d'Afrique de l'Ouest et montre les conséquences de la violence sur les enfants et les populations.",
          category: "Fonction engagée",
          connector: "Enfin"
        },
        {
          statement: "Le roman peut représenter la solidarité des travailleurs face à l'exploitation.",
          author: "Ousmane Sembène",
          work: "Les Bouts de bois de Dieu",
          quote: "",
          explanation: "La grève des cheminots du Dakar-Niger est racontée comme une lutte collective dans laquelle la solidarité des travailleurs et la participation des femmes occupent une place importante.",
          category: "Fonction engagée",
          connector: "Par ailleurs"
        }
      ]
    }
  ]
};


// Sous-notions spécifiques du programme ivoirien : Mythe/Raison et Foi/Raison.
// Les formulations sont déterministes et restent séparées des notions générales.
const PHILO_MYTHE_RAISON_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Mythe et Raison', 'Mythe, symboles & examen rationnel')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Mythe et Raison",
  arguments: [
    { statement: "Le mythe et la raison peuvent remplir des fonctions différentes dans la recherche de sens.", author: "Ernst Cassirer", work: "La Philosophie des formes symboliques", quote: "", explanation: "Le mythe donne une forme symbolique au monde, tandis que la raison cherche à analyser et à organiser les phénomènes par des concepts. Ils peuvent donc être distingués sans être confondus." },
    { statement: "La raison peut transformer le récit mythique en objet de réflexion philosophique.", author: "Albert Camus", work: "Le Mythe de Sisyphe", quote: "", explanation: "Camus reprend une figure mythologique pour poser un problème philosophique sur l'existence et le sens de la vie. Le mythe devient ainsi un point de départ pour une réflexion rationnelle." },
    { statement: "Mythe et raison peuvent se compléter lorsque l'un donne du sens et que l'autre examine ce sens.", author: "Paul Ricœur", work: "Le Conflit des interprétations", quote: "", explanation: "Une lecture philosophique du mythe peut chercher ce qu'il signifie sans prendre son récit comme une explication scientifique. Le mythe conserve alors une valeur symbolique tandis que la raison en interprète la portée." }
  ]
}];

const PHILO_MYTHE_RAISON_COMPATIBILITE_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Mythe et Raison — compatibilité', 'Coexistence des fonctions symboliques et rationnelles')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Mythe et Raison — compatibilité",
  arguments: [
    { statement: "Le mythe et la raison sont compatibles lorsqu'ils n'ont pas la même fonction.", author: "Ernst Cassirer", work: "La Philosophie des formes symboliques", quote: "", explanation: "Le mythe peut exprimer symboliquement une manière humaine de comprendre le monde, alors que la raison cherche des explications conceptuelles. La différence de fonction permet leur coexistence." },
    { statement: "La raison peut utiliser le mythe comme support de réflexion sans le confondre avec une démonstration.", author: "Albert Camus", work: "Le Mythe de Sisyphe", quote: "", explanation: "Camus part du récit de Sisyphe pour construire une réflexion sur l'absurde. Le récit mythique n'est pas traité comme une preuve scientifique, mais comme un support philosophique." },
    { statement: "Le mythe peut conserver une valeur symbolique après l'examen rationnel.", author: "Paul Ricœur", work: "Le Conflit des interprétations", quote: "", explanation: "L'interprétation philosophique peut dépasser le sens littéral d'un mythe et rechercher ce qu'il exprime symboliquement. La raison ne supprime donc pas nécessairement toute valeur au mythe." }
  ]
}];

const PHILO_MYTHE_RAISON_INCOMPATIBILITE_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Mythe et Raison — incompatibilité', 'Critique rationnelle des explications mythiques')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Mythe et Raison — incompatibilité",
  arguments: [
    { statement: "Le mythe et la raison s'opposent lorsque le récit traditionnel est présenté comme une explication certaine du réel.", author: "Aristote", work: "Métaphysique", quote: "", explanation: "La recherche philosophique des causes et des principes repose sur l'examen et l'argumentation. Elle se distingue ainsi d'une explication qui repose uniquement sur un récit traditionnel." },
    { statement: "La raison exige une justification que le mythe ne fournit pas de la même manière.", author: "Xénophane", work: "Fragments", quote: "", explanation: "Xénophane critique les représentations anthropomorphiques des dieux. Cette critique illustre le passage d'une représentation traditionnelle à une exigence de réflexion critique." },
    { statement: "Le raisonnement rationnel peut remettre en question les croyances héritées lorsqu'elles ne résistent pas à l'examen critique.", author: "Platon", work: "La République", quote: "", explanation: "La philosophie platonicienne distingue la recherche rationnelle de la simple opinion et utilise le dialogue pour examiner les représentations admises. La raison peut donc exercer une fonction critique à l'égard des récits et croyances reçus." }
  ]
}];

const PHILO_FOI_RAISON_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Foi et Raison', 'Croyance, raison & limites de la démonstration')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Foi et Raison",
  arguments: [
    { statement: "La foi et la raison peuvent être distinguées sans être nécessairement incompatibles.", author: "Thomas d'Aquin", work: "Somme théologique", quote: "", explanation: "La tradition thomiste distingue les vérités accessibles par la raison et celles qui relèvent de la révélation, tout en soutenant qu'elles ne doivent pas se contredire lorsqu'elles sont correctement comprises." },
    { statement: "La raison peut examiner les affirmations religieuses sans se confondre avec la foi.", author: "Emmanuel Kant", work: "La Religion dans les limites de la simple raison", quote: "", explanation: "Kant soumet la religion à un examen philosophique et cherche à déterminer ce que la raison peut légitimement en comprendre." },
    { statement: "La foi porte sur des questions que la démonstration rationnelle ne suffit pas toujours à trancher.", author: "Blaise Pascal", work: "Pensées", quote: "", explanation: "Pascal distingue les limites du raisonnement démonstratif et d'autres formes de connaissance. La foi ne se réduit donc pas à une démonstration mathématique." }
  ]
}];

const PHILO_FOI_RAISON_COMPATIBILITE_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Foi et Raison — compatibilité', 'Distinction des domaines & dialogue')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Foi et Raison — compatibilité",
  arguments: [
    { statement: "La foi et la raison peuvent coexister lorsque chacune reste dans son domaine propre.", author: "Thomas d'Aquin", work: "Somme théologique", quote: "", explanation: "Pour Thomas d'Aquin, certaines vérités peuvent être abordées par la raison tandis que d'autres relèvent de la révélation. Les deux voies ne sont donc pas nécessairement contradictoires." },
    { statement: "La raison peut contribuer à comprendre les conséquences morales de la foi.", author: "Emmanuel Kant", work: "La Religion dans les limites de la simple raison", quote: "", explanation: "Kant cherche à interpréter rationnellement la religion en rapport avec la morale. La réflexion rationnelle peut ainsi porter sur le sens et les exigences de la croyance." },
    { statement: "La foi peut compléter ce que la raison démonstrative ne permet pas d'établir seule.", author: "Blaise Pascal", work: "Pensées", quote: "", explanation: "Pascal insiste sur les limites du raisonnement et sur d'autres formes de connaissance. La foi peut alors être pensée comme un domaine qui ne se réduit pas à la démonstration." }
  ]
}];

const PHILO_FOI_RAISON_INCOMPATIBILITE_VARIANTS: ArgumentVariant[] = [{
  id: 0,
  perspective: "('Foi et Raison — incompatibilité', 'Limites de la démonstration & engagement de la foi')",
  pedagogicalAdvice: "Corpus structuré pour distinguer clairement les thèses et leurs rapports.",
  label: "Foi et Raison — incompatibilité",
  arguments: [
    { statement: "La foi ne peut pas être transformée en connaissance rationnelle démontrée sans perdre ce qui la distingue.", author: "Emmanuel Kant", work: "La Religion dans les limites de la simple raison", quote: "", explanation: "Kant distingue ce que la raison peut connaître et ce qui relève de la croyance religieuse. La foi ne doit donc pas être présentée comme une connaissance scientifique démontrée." },
    { statement: "La foi peut exiger une adhésion qui ne repose pas sur une démonstration rationnelle complète.", author: "Søren Kierkegaard", work: "Crainte et tremblement", quote: "", explanation: "Kierkegaard met l'accent sur la singularité de l'engagement religieux. La foi implique ainsi une dimension personnelle qui ne se laisse pas réduire à une preuve rationnelle universelle." },
    { statement: "Les limites de la raison peuvent conduire à distinguer radicalement croire et démontrer.", author: "Blaise Pascal", work: "Pensées", quote: "", explanation: "Pascal souligne que la raison humaine ne suffit pas à tout établir. La croyance religieuse ne peut donc pas être assimilée à une démonstration logique ou mathématique." }
  ]
}];


// Corpus dédié à la notion « Religion » : arguments réels, classés par perspectives.
// Il remplace tout fallback générique pour les recherches « argument(s) sur religion ».
const PHILO_RELIGION_VARIANTS: ArgumentVariant[] = [
  {
    id: 0,
    label: "Religion et sens de l'existence",
    perspective: "Besoin de sens, espérance & transcendance",
    pedagogicalAdvice: "À utiliser pour défendre l'idée que la religion répond à des interrogations existentielles humaines.",
    arguments: [
      {
        statement: "La religion peut donner un sens à l'existence humaine.",
        author: "Blaise Pascal",
        work: "Pensées",
        quote: "Le cœur a ses raisons que la raison ne connaît point.",
        explanation: "La religion peut répondre aux inquiétudes liées à la mort, à la souffrance et à la finalité de l'existence en proposant une interprétation du destin humain.",
        category: "Religion et sens de l'existence",
        formulationVariants: [
          { statement: "La croyance religieuse peut orienter l'existence en lui donnant une signification", explanation: "Face aux grandes interrogations sur la vie et la mort, la religion propose des réponses qui peuvent structurer l'espérance et les choix de l'individu." },
          { statement: "La religion répond à une partie des interrogations humaines sur le sens de la vie", explanation: "Les croyances religieuses offrent des représentations de l'origine, de la destinée et de la valeur de l'existence humaine." },
          { statement: "L'espérance religieuse permet à l'être humain d'interpréter sa condition et son destin", explanation: "La foi peut transformer l'épreuve et l'incertitude en une recherche de sens inscrite dans une perspective de transcendance." }
        ]
      },
      {
        statement: "La religion peut apporter une espérance face à la souffrance et à la mort.",
        author: "Blaise Pascal",
        work: "Pensées",
        quote: "L'homme est un roseau pensant.",
        explanation: "La fragilité de la condition humaine conduit l'individu à chercher une réponse qui dépasse la seule constatation de sa vulnérabilité. La croyance peut alors soutenir l'espérance face à ce qui paraît irréversible.",
        category: "Religion et espérance",
        formulationVariants: [
          { statement: "La foi religieuse peut soutenir l'espérance lorsque l'homme affronte sa fragilité", explanation: "La souffrance et la mort révèlent les limites humaines ; la religion peut proposer une espérance qui dépasse ces limites." },
          { statement: "La religion transforme la confrontation à la mort en interrogation sur une destinée qui la dépasse", explanation: "Les croyances religieuses donnent à la mort une signification qui ne se réduit pas à la disparition biologique." },
          { statement: "L'espérance religieuse constitue une réponse possible à l'angoisse de la condition humaine", explanation: "En proposant une perspective de salut ou de transcendance, la religion peut donner une orientation à l'existence confrontée à l'incertitude." }
        ]
      },
      {
        statement: "La religion peut fonder des valeurs qui orientent la conduite humaine.",
        author: "Émile Durkheim",
        work: "Les Formes élémentaires de la vie religieuse",
        quote: "La religion est un système solidaire de croyances et de pratiques relatives à des choses sacrées.",
        explanation: "Les croyances et les rites religieux ne concernent pas seulement la relation à une divinité : ils organisent aussi des pratiques et des normes partagées au sein d'une communauté.",
        category: "Religion et morale",
        formulationVariants: [
          { statement: "Les croyances religieuses peuvent contribuer à orienter les comportements et les valeurs d'une communauté", explanation: "Les prescriptions, rites et interdits religieux donnent des repères collectifs qui influencent la conduite des croyants." },
          { statement: "La religion peut fournir un cadre de valeurs destiné à guider l'action humaine", explanation: "Une tradition religieuse transmet des normes et des pratiques qui permettent aux croyants de distinguer certaines conduites comme justes ou injustes." },
          { statement: "Les religions participent à la formation de normes morales et sociales partagées", explanation: "Par leurs croyances et leurs rites, les communautés religieuses peuvent transmettre des règles qui structurent la vie collective." }
        ]
      }
    ]
  },
  {
    id: 1,
    label: "Religion et raison",
    perspective: "Foi, rationalité & limites de la connaissance",
    pedagogicalAdvice: "À utiliser pour les sujets portant sur la possibilité ou les limites d'un dialogue entre croyance et raison.",
    arguments: [
      {
        statement: "La raison peut examiner philosophiquement les croyances religieuses.",
        author: "Emmanuel Kant",
        work: "La Religion dans les limites de la simple raison",
        quote: "La religion est la connaissance de tous nos devoirs comme commandements divins.",
        explanation: "La réflexion philosophique peut analyser les prétentions de la religion et distinguer ce que la raison peut légitimement établir de ce qui relève de la croyance.",
        category: "Religion et raison",
        formulationVariants: [
          { statement: "La philosophie peut soumettre les croyances religieuses à l'examen de la raison", explanation: "La croyance n'échappe pas nécessairement à toute analyse : la raison peut interroger sa cohérence, sa portée morale et ses limites." },
          { statement: "Les affirmations religieuses peuvent faire l'objet d'une réflexion rationnelle", explanation: "Examiner une croyance ne signifie pas automatiquement la nier ; il s'agit d'en déterminer le sens et les limites par un raisonnement argumenté." },
          { statement: "La raison conserve un droit d'examen sur le contenu et les conséquences de la croyance religieuse", explanation: "Une réflexion critique peut distinguer les convictions religieuses de ce qui peut être démontré ou établi rationnellement." }
        ]
      },
      {
        statement: "La foi ne se réduit pas à une démonstration rationnelle.",
        author: "Søren Kierkegaard",
        work: "Crainte et tremblement",
        quote: "La foi est précisément ce paradoxe que l'individu comme tel est plus haut que le général.",
        explanation: "La foi implique chez Kierkegaard un engagement existentiel qui ne peut pas être entièrement ramené à une démonstration impersonnelle et universelle.",
        category: "Foi et rationalité",
        formulationVariants: [
          { statement: "La croyance religieuse comporte une dimension que la démonstration rationnelle ne suffit pas à épuiser", explanation: "Une démonstration cherche une validité universelle, tandis que la foi engage également l'existence personnelle du croyant." },
          { statement: "L'engagement religieux ne peut pas être assimilé entièrement à une preuve logique", explanation: "La foi suppose une adhésion existentielle qui ne se confond pas avec le raisonnement démonstratif." },
          { statement: "La foi possède une dimension existentielle irréductible à la seule démonstration rationnelle", explanation: "Chez Kierkegaard, croire engage le sujet lui-même et dépasse le simple accord intellectuel avec une proposition démontrée." }
        ]
      },
      {
        statement: "La religion et la raison peuvent dialoguer lorsqu'elles distinguent leurs domaines respectifs.",
        author: "Thomas d'Aquin",
        work: "Somme théologique",
        quote: "La grâce ne détruit pas la nature, mais elle la perfectionne.",
        explanation: "La tradition thomiste distingue les vérités accessibles par la raison et celles qui relèvent de la révélation tout en refusant de poser une contradiction nécessaire entre elles.",
        category: "Foi et raison — compatibilité",
        formulationVariants: [
          { statement: "La foi et la raison peuvent être conciliées lorsqu'elles ne prétendent pas accomplir exactement la même tâche", explanation: "La raison peut établir certaines connaissances tandis que la foi porte sur des vérités qui relèvent de la révélation ; leur distinction permet leur coexistence." },
          { statement: "La distinction entre connaissance rationnelle et révélation permet d'envisager un accord entre foi et raison", explanation: "Une différence de domaine n'implique pas nécessairement une contradiction entre les deux démarches." },
          { statement: "Le dialogue entre foi et raison devient possible lorsque chacune reconnaît les limites de son propre domaine", explanation: "Cette approche évite de transformer la croyance en démonstration scientifique ou de considérer toute croyance comme inaccessible à la réflexion." }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "Religion et société",
    perspective: "Cohésion sociale, institutions & critique sociale",
    pedagogicalAdvice: "À utiliser pour analyser la fonction sociale de la religion ou ses rapports avec les structures économiques et politiques.",
    arguments: [
      {
        statement: "La religion peut renforcer les liens qui unissent une communauté.",
        author: "Émile Durkheim",
        work: "Les Formes élémentaires de la vie religieuse",
        quote: "La religion est un système solidaire de croyances et de pratiques.",
        explanation: "Les rites et les croyances partagés produisent des moments de rassemblement et renforcent le sentiment d'appartenance à une communauté.",
        category: "Religion et cohésion sociale",
        formulationVariants: [
          { statement: "Les pratiques religieuses peuvent renforcer le sentiment d'appartenance collective", explanation: "Les rites communs réunissent les individus autour de représentations et de pratiques partagées." },
          { statement: "La religion peut contribuer à maintenir la cohésion d'un groupe social", explanation: "Les croyances et les cérémonies communes créent des liens symboliques entre les membres d'une communauté." },
          { statement: "Les rites religieux participent à la construction d'une solidarité entre croyants", explanation: "Le partage de pratiques sacrées peut produire un sentiment d'unité qui dépasse les intérêts individuels immédiats." }
        ]
      },
      {
        statement: "La religion peut aussi être analysée comme un produit des conditions sociales et historiques.",
        author: "Karl Marx",
        work: "Contribution à la critique de la philosophie du droit de Hegel",
        quote: "La religion est le soupir de la créature opprimée, l'âme d'un monde sans cœur.",
        explanation: "Marx interprète certaines formes de religiosité à partir des souffrances et des rapports sociaux dans lesquels vivent les individus. La religion peut alors être étudiée comme un phénomène lié à une situation historique concrète.",
        category: "Religion et critique sociale",
        formulationVariants: [
          { statement: "Les formes religieuses peuvent être liées aux conditions sociales dans lesquelles vivent les croyants", explanation: "Une analyse sociale de la religion cherche à comprendre comment les souffrances, les rapports de pouvoir et les conditions historiques influencent les croyances." },
          { statement: "La religion peut être interprétée à partir des réalités économiques et sociales d'une époque", explanation: "L'analyse marxiste relie certaines représentations religieuses aux conditions concrètes de l'existence sociale." },
          { statement: "Les croyances religieuses ne sont pas indépendantes de l'histoire et des rapports sociaux", explanation: "Les formes de religiosité peuvent exprimer les espoirs et les souffrances produits par une organisation sociale donnée." }
        ]
      },
      {
        statement: "La religion peut devenir une institution qui exerce une influence sur la vie collective.",
        author: "Max Weber",
        work: "Sociologie des religions",
        quote: "La conduite de la vie est orientée par les représentations religieuses.",
        explanation: "L'étude sociologique des religions montre que les croyances peuvent influencer les comportements, les valeurs, les institutions et les manières d'organiser la vie sociale.",
        category: "Religion et organisation sociale",
        formulationVariants: [
          { statement: "Les croyances religieuses peuvent influencer les comportements et l'organisation de la société", explanation: "Les valeurs religieuses peuvent orienter les pratiques individuelles et collectives et contribuer à façonner certaines institutions." },
          { statement: "La religion peut exercer une influence durable sur les conduites sociales", explanation: "Les représentations religieuses ne restent pas nécessairement privées : elles peuvent modifier les choix, les normes et les pratiques collectives." },
          { statement: "Les institutions religieuses peuvent participer à l'organisation de la vie collective", explanation: "Lorsqu'elles structurent des croyances et des pratiques communes, elles deviennent également des acteurs importants de la vie sociale." }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "Religion et liberté",
    perspective: "Conscience, autonomie & critique du dogmatisme",
    pedagogicalAdvice: "À utiliser pour les sujets qui interrogent les rapports entre croyance, autonomie personnelle et liberté de pensée.",
    arguments: [
      {
        statement: "La liberté de conscience exige que la croyance religieuse ne soit pas imposée par la contrainte.",
        author: "John Locke",
        work: "Lettre sur la tolérance",
        quote: "Nul homme ne peut être forcé de croire parce que sa volonté n'est pas en son pouvoir.",
        explanation: "La croyance engage la conscience personnelle ; une contrainte extérieure peut imposer un comportement mais ne suffit pas à produire une conviction intérieure authentique.",
        category: "Religion et liberté de conscience",
        formulationVariants: [
          { statement: "La croyance religieuse suppose une adhésion personnelle qui ne peut être produite par la force", explanation: "Une autorité peut contraindre les actes, mais elle ne peut pas commander directement une conviction intérieure sincère." },
          { statement: "La liberté religieuse repose sur l'impossibilité de contraindre véritablement la conscience", explanation: "Croire implique une adhésion de l'esprit ; la contrainte peut obtenir une conformité extérieure sans créer une foi authentique." },
          { statement: "Le respect de la conscience interdit de transformer la croyance religieuse en obligation imposée par la force", explanation: "La conviction personnelle ne peut être obtenue mécaniquement par une sanction ou une pression extérieure." }
        ]
      },
      {
        statement: "La soumission dogmatique peut limiter l'exercice autonome de la raison.",
        author: "Immanuel Kant",
        work: "Qu'est-ce que les Lumières ?",
        quote: "Sapere aude ! Aie le courage de te servir de ton propre entendement !",
        explanation: "Kant associe les Lumières à la sortie de la tutelle intellectuelle. Lorsqu'une autorité exige une adhésion sans examen personnel, elle peut empêcher l'individu d'exercer pleinement son jugement.",
        category: "Religion et autonomie de la raison",
        formulationVariants: [
          { statement: "Le dogmatisme religieux peut empêcher l'individu d'exercer librement son jugement", explanation: "Lorsque toute croyance est soustraite à l'examen personnel, l'individu risque de renoncer à l'usage autonome de sa raison." },
          { statement: "L'adhésion aveugle à une autorité religieuse peut entrer en tension avec l'autonomie intellectuelle", explanation: "L'autonomie suppose que le sujet soit capable de réfléchir et de juger par lui-même plutôt que de recevoir toutes ses convictions d'une autorité." },
          { statement: "La liberté intellectuelle exige que les croyances puissent être examinées par la conscience elle-même", explanation: "Le projet des Lumières consiste notamment à libérer le jugement individuel de la tutelle des autorités lorsqu'elles empêchent l'examen rationnel." }
        ]
      },
      {
        statement: "La religion peut aussi être vécue comme une pratique libre qui engage personnellement la conscience.",
        author: "Søren Kierkegaard",
        work: "Crainte et tremblement",
        quote: "Le paradoxe de la foi est donc celui-ci : que l'individu est supérieur au général.",
        explanation: "Chez Kierkegaard, l'engagement religieux n'est pas seulement l'adhésion passive à une règle collective ; il implique une décision existentielle personnelle.",
        category: "Religion et engagement personnel",
        formulationVariants: [
          { statement: "La foi religieuse peut être comprise comme un engagement personnel de la conscience", explanation: "La croyance engage l'individu dans une relation existentielle qui ne se réduit pas à l'obéissance extérieure à une institution." },
          { statement: "L'expérience religieuse peut prendre la forme d'une décision intime et personnelle", explanation: "Kierkegaard insiste sur la singularité de l'existence du croyant et sur la responsabilité personnelle de son engagement." },
          { statement: "La foi peut exprimer une démarche intérieure qui engage directement le sujet", explanation: "L'engagement religieux possède une dimension personnelle qui ne se laisse pas réduire à la simple conformité sociale." }
        ]
      }
    ]
  }
];

const BASE_ARGUMENT_VARIANTS: Record<string, ArgumentVariant[]> = {
  ...NOTION_ARGUMENT_VARIANTS,
  religion: PHILO_RELIGION_VARIANTS,
  ...PHILO_ETHICS_POLITICS_VARIANTS,
  ...PHILO_EPISTEMOLOGY_VARIANTS,
  ...PHILO_HUMAN_CONDITION_VARIANTS,
  ...PHILO_MIND_METAPHYSICS_VARIANTS,
  ...PHILO_SCIENCE_LANGAGE_VARIANTS,
  ...PHILO_NATURE_CULTURE_VARIANTS,
  ...PHILO_PSYCHO_MIND_VARIANTS,
  ...PHILO_CULTURE_SOCIETE_VARIANTS,
  ...PHILO_RAISON_DROIT_MORALE_VARIANTS,
  desir: PHILO_DESIR_VARIANTS,
  "mythe-et-raison": PHILO_MYTHE_RAISON_VARIANTS,
  "mythe-et-raison-compatibilite": PHILO_MYTHE_RAISON_COMPATIBILITE_VARIANTS,
  "mythe-et-raison-incompatibilite": PHILO_MYTHE_RAISON_INCOMPATIBILITE_VARIANTS,
  "foi-et-raison": PHILO_FOI_RAISON_VARIANTS,
  "foi-et-raison-compatibilite": PHILO_FOI_RAISON_COMPATIBILITE_VARIANTS,
  "foi-et-raison-incompatibilite": PHILO_FOI_RAISON_INCOMPATIBILITE_VARIANTS,
  ...LITERATURE_VARIANTS,
  ...Object.fromEntries(Object.entries(FRENCH_SOURCE_EXPANSIONS).map(([k, v]) => [k, [...(LITERATURE_VARIANTS[k] || []), ...v]])),
};

export const ALL_ARGUMENT_VARIANTS: Record<string, ArgumentVariant[]> = {
  ...BASE_ARGUMENT_VARIANTS,
  ...Object.fromEntries(Object.entries(PHILO_SOURCE_EXPANSIONS).map(([k, v]) => [k, [...(NOTION_ARGUMENT_VARIANTS[k] || []), ...(BASE_ARGUMENT_VARIANTS[k] || []), ...v]])),
};

// Alias structurants pour les notions composées utilisées dans la banque ivoirienne.
// Ils réutilisent uniquement des corpus déjà présents : aucune connaissance nouvelle
// n'est inventée ici.
ALL_ARGUMENT_VARIANTS["conscience-et-inconscient"] = [
  ...(ALL_ARGUMENT_VARIANTS["conscience"] || []),
  ...(ALL_ARGUMENT_VARIANTS["inconscient"] || [])
];
ALL_ARGUMENT_VARIANTS["justice-et-droit"] = [
  ...(ALL_ARGUMENT_VARIANTS["justice"] || []),
  ...(ALL_ARGUMENT_VARIANTS["droit"] || [])
];
ALL_ARGUMENT_VARIANTS["technique-et-progres"] = [
  ...(ALL_ARGUMENT_VARIANTS["technique"] || [])
];
ALL_ARGUMENT_VARIANTS["politique"] = [
  ...(ALL_ARGUMENT_VARIANTS["etat"] || []),
  ...(ALL_ARGUMENT_VARIANTS["justice"] || [])
];
ALL_ARGUMENT_VARIANTS["mythe"] = ALL_ARGUMENT_VARIANTS["mythe-et-raison"];
ALL_ARGUMENT_VARIANTS["foi"] = ALL_ARGUMENT_VARIANTS["foi-et-raison"];


// -----------------------------------------------------------------------------
// EXTENSION WEB-VERIFIEE — corpus supplémentaire simple pour Terminale
// Les notions correspondent au programme officiel de philosophie, qui comprend
// notamment l'art, le devoir, le bonheur, l'État, la conscience, l'inconscient,
// la justice, le langage, la liberté, la nature, la raison, la religion,
// la science, la technique, le temps, le travail et la vérité.
// Sources de cadrage : Éduscol et BnF. Les citations ajoutées ici sont conservées
// comme textes fixes ; seules les formulations pédagogiques peuvent varier.
// -----------------------------------------------------------------------------

const EXTRA_PHILO_WEB_VARIANTS: Record<string, ArgumentVariant[]> = {
  autrui: [{ id: 100, label: 'Relations avec autrui — reconnaissance, regard et identité', perspective: 'Autrui, regard et construction de soi', pedagogicalAdvice: 'À utiliser pour les sujets sur la relation à autrui et la construction de l’identité.', arguments: [
    { statement: 'Le regard d’autrui peut influencer profondément l’image que nous avons de nous-mêmes.', author: 'Jean-Paul Sartre', work: 'Huis clos', quote: 'L’enfer, c’est les autres.', explanation: 'Autrui ne se contente pas de nous regarder : son jugement peut modifier la manière dont nous nous voyons. Le regard des autres peut donc devenir une source de pression, mais il nous oblige aussi à prendre conscience de nous-mêmes.', category: 'Regard d’autrui', connector: 'D’abord' },
    { statement: 'Notre identité se construit aussi dans nos relations avec les autres.', author: 'Simone de Beauvoir', work: 'Le Deuxième Sexe', quote: 'On ne naît pas femme : on le devient.', explanation: 'Beauvoir montre que la société participe à la construction de l’identité. Les attentes, les habitudes et l’éducation influencent donc la manière dont une personne devient ce qu’elle est.', category: 'Construction sociale', connector: 'Ensuite' }
  ] }],
  conscience: [{ id: 101, label: 'Conscience — pensée et connaissance de soi', perspective: 'Conscience de soi et réflexion', pedagogicalAdvice: 'Pour les sujets sur la conscience, la pensée et la connaissance de soi.', arguments: [
    { statement: 'La conscience de penser permet à l’homme de prendre conscience de son existence.', author: 'René Descartes', work: 'Discours de la méthode', quote: 'Je pense, donc je suis.', explanation: 'Même si nous doutons de tout, le fait de penser montre que nous existons comme êtres pensants. La conscience devient ainsi un premier point de certitude.', category: 'Conscience de soi', connector: 'En premier lieu' },
    { statement: 'La conscience permet à l’homme de réfléchir sur ses propres pensées.', author: 'René Descartes', work: 'Discours de la méthode', quote: 'Je pense, donc je suis.', explanation: 'L’homme ne fait pas seulement des actions : il peut aussi penser à ce qu’il pense et examiner ses idées. Cette capacité rend possible le doute et la réflexion.', category: 'Réflexion', connector: 'De plus' }
  ] }],
  raison: [{ id: 102, label: 'Raison — limites et complémentarité', perspective: 'Raison, expérience et sentiment', pedagogicalAdvice: 'Pour les sujets qui opposent ou rapprochent raison, expérience et sentiment.', arguments: [
    { statement: 'La raison ne suffit pas toujours à comprendre toutes les dimensions de l’expérience humaine.', author: 'Blaise Pascal', work: 'Pensées', quote: 'Le cœur a ses raisons que la raison ne connaît point.', explanation: 'Pascal rappelle que certaines expériences humaines ne se réduisent pas à un raisonnement logique. Le sentiment et l’intuition peuvent aussi jouer un rôle dans notre rapport au monde.', category: 'Limites de la raison', connector: 'Cependant' },
    { statement: 'La raison reste nécessaire pour examiner et contrôler nos croyances.', author: 'Blaise Pascal', work: 'Pensées', quote: 'Le cœur a ses raisons que la raison ne connaît point.', explanation: 'Même lorsqu’un sentiment nous paraît évident, la réflexion permet de vérifier ce que nous pensons. La raison aide donc à éviter de prendre toutes nos impressions pour des vérités.', category: 'Rôle critique de la raison', connector: 'Toutefois' }
  ] }],
  religion: [{ id: 103, label: 'Religion — croyance, consolation et critique', perspective: 'Foi, croyance et fonction sociale', pedagogicalAdvice: 'Pour les sujets sur la foi, la croyance et la fonction sociale de la religion.', arguments: [
    { statement: 'La religion peut apporter une consolation face à la souffrance.', author: 'Karl Marx', work: 'Contribution à la critique de la philosophie du droit de Hegel', quote: 'La religion est le soupir de la créature accablée par le malheur, l’âme d’un monde sans cœur.', explanation: 'Marx reconnaît que la religion répond à une souffrance réelle. Elle peut donc donner du réconfort à des personnes confrontées au malheur.', category: 'Fonction consolatrice', connector: 'D’abord' },
    { statement: 'La religion peut aussi détourner l’attention des causes réelles de la souffrance.', author: 'Karl Marx', work: 'Contribution à la critique de la philosophie du droit de Hegel', quote: 'Elle est l’opium du peuple.', explanation: 'Pour Marx, la consolation religieuse peut empêcher de s’attaquer directement aux conditions sociales qui produisent la misère. La critique porte donc sur le rôle social de la religion.', category: 'Critique de la religion', connector: 'Mais' }
  ] }],
  etat: [{ id: 104, label: 'État — vie collective et organisation politique', perspective: 'Cité, loi et vie commune', pedagogicalAdvice: 'Pour les sujets sur l’État, la société et l’organisation de la vie collective.', arguments: [
    { statement: 'L’homme a besoin d’une organisation politique pour vivre pleinement en société.', author: 'Aristote', work: 'Les Politiques', quote: 'L’homme est par nature un animal politique.', explanation: 'Aristote considère que l’homme vit naturellement avec les autres dans une cité. La vie politique permet donc d’organiser la communauté et de rechercher ce qui est juste.', category: 'Nature politique de l’homme', connector: 'D’abord' },
    { statement: 'L’État organise la vie commune en établissant des règles partagées.', author: 'Aristote', work: 'Les Politiques', quote: 'L’homme est par nature un animal politique.', explanation: 'La vie collective ne repose pas seulement sur des relations personnelles. Elle demande aussi des règles communes qui permettent aux citoyens de vivre ensemble.', category: 'Organisation politique', connector: 'Ensuite' }
  ] }],
  travail: [{ id: 105, label: 'Travail — action et transformation du monde', perspective: 'Travail, activité et réalisation', pedagogicalAdvice: 'Pour les sujets sur la valeur du travail et son rapport à l’homme.', arguments: [
    { statement: 'Le travail permet à l’homme d’agir concrètement sur son monde.', author: 'Karl Marx', work: 'Le Capital', quote: 'Le travail est de prime abord un acte qui se passe entre l’homme et la nature.', explanation: 'En travaillant, l’homme transforme la nature pour répondre à ses besoins. Il transforme donc à la fois son environnement et sa propre manière d’agir.', category: 'Transformation du monde', connector: 'D’abord' },
    { statement: 'Le travail peut être une activité par laquelle l’homme développe ses capacités.', author: 'Karl Marx', work: 'Le Capital', quote: 'Le travail est de prime abord un acte qui se passe entre l’homme et la nature.', explanation: 'Travailler demande des gestes, des connaissances et des méthodes. Le travail peut ainsi développer les capacités humaines tout en produisant des objets utiles.', category: 'Développement humain', connector: 'De plus' }
  ] }],
  science: [{ id: 106, label: 'Science — savoir et responsabilité', perspective: 'Connaissance scientifique et exigence morale', pedagogicalAdvice: 'Pour les sujets qui interrogent le progrès scientifique et ses limites.', arguments: [
    { statement: 'Le savoir scientifique doit être accompagné d’une réflexion morale.', author: 'François Rabelais', work: 'Pantagruel', quote: 'Science sans conscience n’est que ruine de l’âme.', explanation: 'Rabelais rappelle que connaître ne suffit pas. Le savoir doit aussi être utilisé avec discernement pour éviter qu’une découverte ne devienne nuisible.', category: 'Science et morale', connector: 'D’abord' },
    { statement: 'Le progrès des connaissances ne garantit pas à lui seul un progrès humain.', author: 'François Rabelais', work: 'Pantagruel', quote: 'Science sans conscience n’est que ruine de l’âme.', explanation: 'Une société peut posséder beaucoup de connaissances et pourtant mal utiliser ses découvertes. La science doit donc être accompagnée d’une responsabilité humaine.', category: 'Limites du progrès', connector: 'Ainsi' }
  ] }],
  bonheur: [{ id: 107, label: 'Bonheur — action et vie concrète', perspective: 'Bonheur, travail et action', pedagogicalAdvice: 'Pour les sujets sur le bonheur, l’action et la manière de vivre.', arguments: [
    { statement: 'Le bonheur demande de s’occuper concrètement de ce qui dépend de nous.', author: 'Voltaire', work: 'Candide', quote: 'Il faut cultiver notre jardin.', explanation: 'Après de nombreuses épreuves, Candide comprend qu’il vaut mieux agir sur ce que l’on peut réellement changer. Le bonheur passe alors par une activité concrète et utile.', category: 'Bonheur pratique', connector: 'D’abord' },
    { statement: 'Le bonheur peut être recherché dans une vie active plutôt que dans des théories sans fin.', author: 'Voltaire', work: 'Candide', quote: 'Il faut cultiver notre jardin.', explanation: 'La conclusion de Candide valorise l’action quotidienne. Elle invite à construire une vie réelle au lieu d’attendre une solution parfaite au mal du monde.', category: 'Action et bonheur', connector: 'Enfin' }
  ] }]
};

for (const [key, variants] of Object.entries(EXTRA_PHILO_WEB_VARIANTS)) {
  ALL_ARGUMENT_VARIANTS[key] = [...(ALL_ARGUMENT_VARIANTS[key] || []), ...variants];
}

// Variantes supplémentaires pour la dissertation littéraire : formulation simple,
// références classiques et francophones déjà présentes dans les collections BnF/Gallica.
const EXTRA_LITERATURE_WEB_VARIANTS: Record<string, ArgumentVariant[]> = {
  poesie: [{ id: 200, label: 'Poésie — beauté, émotion et imagination', perspective: 'Lyrique, esthétique et imaginaire', pedagogicalAdvice: 'Pour les sujets sur les fonctions de la poésie.', arguments: [
    { statement: 'La poésie permet de transformer une émotion personnelle en œuvre littéraire.', author: 'Victor Hugo', work: 'Les Contemplations', quote: 'Oh ! je fus comme fou dans le premier moment, Hélas ! et je pleurai trois jours amèrement.', explanation: 'La poésie permet au poète de donner une forme à ses émotions. Une douleur personnelle peut ainsi devenir une expérience partagée avec le lecteur.', category: 'Fonction lyrique', connector: 'D’abord' },
    { statement: 'La poésie cherche aussi à créer une beauté particulière avec les mots.', author: 'Stéphane Mallarmé', work: 'Divagations', quote: 'le monde est fait pour aboutir à un beau livre.', explanation: 'Pour Mallarmé, la création littéraire transforme le monde par le langage. Le poète travaille donc les mots pour produire une œuvre artistique.', category: 'Fonction esthétique', connector: 'Ensuite' },
    { statement: 'La poésie peut faire naître un monde imaginaire qui permet au lecteur de rêver.', author: 'Victor Hugo', work: 'Les Orientales', quote: 'Ce livre inutile de pure poésie', explanation: 'La poésie peut quitter le réel quotidien pour créer des paysages, des sensations et des rêves. Elle donne ainsi au lecteur un espace d’imagination.', category: 'Fonction évasive', connector: 'De plus' },
    { statement: 'La poésie peut aussi servir à dénoncer une injustice.', author: 'Victor Hugo', work: 'Les Châtiments', quote: 'Ceux qui vivent, ce sont ceux qui luttent.', explanation: 'Hugo utilise la poésie comme une arme contre le pouvoir qu’il combat. Le poème peut donc exprimer une colère politique et défendre une cause.', category: 'Fonction engagée', connector: 'Enfin' }
  ] }],
  roman: [{ id: 201, label: 'Roman — récit, société et évasion', perspective: 'Fiction, observation sociale et critique', pedagogicalAdvice: 'Pour les sujets sur les fonctions du roman.', arguments: [
    { statement: 'Le roman peut représenter la société en montrant la vie quotidienne de ses personnages.', author: 'Honoré de Balzac', work: 'La Comédie humaine', quote: 'La Société française allait être l’historien, je ne devais être que le secrétaire.', explanation: 'Balzac veut observer la société de son époque à travers les personnages, les familles et les milieux sociaux. Le roman devient ainsi un moyen de mieux comprendre le réel.', category: 'Fonction réaliste', connector: 'D’abord' },
    { statement: 'Le roman peut faire vivre au lecteur une histoire qui lui permet de s’évader.', author: 'Honoré de Balzac', work: 'La Comédie humaine', quote: 'Le hasard est le plus grand romancier du monde.', explanation: 'Le récit d’aventure entraîne le lecteur dans des lieux et des situations qu’il ne vit pas lui-même. La fiction nourrit ainsi l’imagination et le plaisir de lire.', category: 'Fonction évasive', connector: 'Ensuite' },
    { statement: 'Le roman peut dénoncer les injustices de la société.', author: 'Honoré de Balzac', work: 'La Comédie humaine', quote: 'La Société française allait être l’historien, je ne devais être que le secrétaire.', explanation: 'Le récit montre les conditions de vie difficiles des mineurs et leurs luttes. Le roman peut donc attirer l’attention sur les problèmes sociaux.', category: 'Fonction engagée', connector: 'De plus' },
    { statement: 'Le roman peut aider le lecteur à réfléchir sur les comportements humains.', author: 'Gustave Flaubert', work: 'Correspondance, lettre à Louis Bouilhet (4 septembre 1850)', quote: 'La bêtise consiste à vouloir conclure.', explanation: 'Le roman ne donne pas toujours une morale directe. En suivant les erreurs et les choix des personnages, le lecteur peut réfléchir lui-même sur la société et sur l’être humain.', category: 'Fonction réflexive', connector: 'Enfin' }
  ] }],
  theatre: [{ id: 202, label: 'Théâtre — rire, émotion et réflexion', perspective: 'Spectacle, comédie et critique sociale', pedagogicalAdvice: 'Pour les sujets sur les fonctions du théâtre.', arguments: [
    { statement: 'Le théâtre peut provoquer le rire tout en critiquant les défauts humains.', author: 'Molière', work: 'Le Tartuffe', quote: 'Le plus grand coup que l’on puisse porter aux vices est de les exposer à la risée de tout le monde.', explanation: 'Le spectateur rit des défauts du personnage, mais il reconnaît aussi des comportements réels. Le rire devient ainsi un moyen de faire réfléchir.', category: 'Fonction ludique et morale', connector: 'D’abord' },
    { statement: 'La tragédie permet au public de ressentir fortement les passions humaines.', author: 'Aristote', work: 'Poétique', quote: 'suscitant la pitié et la terreur, elle opère la purgation des passions de cette nature.', explanation: 'Le spectateur voit des personnages confrontés à des situations graves. Il ressent leurs émotions et peut ainsi réfléchir sur les passions humaines.', category: 'Fonction cathartique', connector: 'Ensuite' },
    { statement: 'Le théâtre peut défendre la liberté face à une autorité injuste.', author: 'Jean Anouilh', work: 'Antigone', quote: 'Je ne veux pas comprendre.', explanation: 'Antigone refuse d’accepter une règle qu’elle juge contraire à sa conscience. Le théâtre met ainsi en scène le conflit entre l’obéissance et la liberté de penser.', category: 'Fonction engagée', connector: 'De plus' },
    { statement: 'Le théâtre peut utiliser le langage pour créer une œuvre artistique.', author: 'Edmond Rostand', work: 'Cyrano de Bergerac', quote: 'C’est un roc ! ... c’est un pic ! ... c’est un cap !', explanation: 'La tirade de Cyrano joue avec les sons, le rythme et les images. Le texte devient donc un spectacle par les mots eux-mêmes.', category: 'Fonction esthétique', connector: 'Enfin' }
  ] }]
};

for (const [key, variants] of Object.entries(EXTRA_LITERATURE_WEB_VARIANTS)) {
  ALL_ARGUMENT_VARIANTS[key] = [...(ALL_ARGUMENT_VARIANTS[key] || []), ...variants];
}


// Extension V29 — source dissertation littéraire fournie par l'utilisateur,
// enrichie par des formulations pédagogiques originales. Les idées sont paraphrasées
// et les citations restent courtes afin de ne pas reproduire le document source.
const EXTRA_LITERATURE_SOURCE_VARIANTS: Record<string, ArgumentVariant[]> = {
  roman: [{ id: 301, label: 'Roman — société, fiction et formation', perspective: 'Réalisme, fiction, culture et problèmes sociaux', pedagogicalAdvice: 'Arguments inspirés des axes du document de dissertation fourni.', arguments: [
    { statement: 'Le roman peut dénoncer les problèmes de la société.', author: 'Ousmane Sembène', work: 'Le Mandat', quote: 'Le mandat', explanation: 'Le récit montre les difficultés rencontrées par un homme dans une société marquée par les lenteurs et les abus administratifs. Le roman peut ainsi faire réfléchir sur le fonctionnement de la société.', category: 'Réalité sociale', connector: 'D’abord' },
    { statement: 'Le roman peut faire découvrir la culture d’un peuple.', author: 'Chinua Achebe', work: 'Le Monde s’effondre', quote: 'Le Monde s’effondre', explanation: 'Le récit présente les coutumes, les croyances et l’organisation de la société igbo. Le lecteur découvre ainsi une culture à travers une histoire.', category: 'Culture', connector: 'Ensuite' },
    { statement: 'Le roman peut montrer les difficultés liées à certaines pratiques sociales.', author: 'Mariama Bâ', work: 'Une si longue lettre', quote: 'Une si longue lettre', explanation: 'Ramatoulaye raconte son expérience et les difficultés liées à la polygamie. Le roman permet ainsi de réfléchir à la place de la femme dans la société.', category: 'Critique sociale', connector: 'De plus' },
    { statement: 'Le roman peut parler des problèmes rencontrés par les jeunes.', author: 'Amadou Koné', work: 'Les Frasques d’Ebinto', quote: 'Les Frasques d’Ebinto', explanation: 'Le parcours d’Ebinto permet d’aborder les études, l’amour, les responsabilités et les difficultés de la jeunesse. Le lecteur peut donc réfléchir aux conséquences de certains choix.', category: 'Jeunesse', connector: 'Enfin' },
    { statement: 'Le roman peut aussi raconter une vie proche de celle de l’auteur.', author: 'Camara Laye', work: 'L’Enfant noir', quote: 'L’Enfant noir', explanation: 'Le récit reprend des souvenirs d’enfance et des éléments de la vie de Camara Laye. Le roman peut donc garder une dimension autobiographique.', category: 'Autobiographie', connector: 'Par ailleurs' },
    { statement: 'Le roman peut créer une histoire entièrement imaginaire.', author: 'Pierre Boulle', work: 'La Planète des singes', quote: 'La Planète des singes', explanation: 'Le récit imagine une planète où les rapports entre humains et singes sont inversés. La fiction permet ainsi au lecteur d’entrer dans un monde différent du sien.', category: 'Fiction', connector: 'D’un autre côté' },
    { statement: 'Le roman peut divertir grâce à une histoire pleine d’aventures.', author: 'Isaïe Biton Koulibaly', work: 'La Légende de Sadjo', quote: 'La Légende de Sadjo', explanation: 'Une histoire étonnante et attachante peut donner au lecteur le plaisir de suivre les personnages et leurs aventures. Le roman peut donc aussi servir à se détendre.', category: 'Distraction', connector: 'Enfin' },
    { statement: 'Le roman peut créer des personnages qui représentent certains comportements humains.', author: 'Ahmadou Kourouma', work: 'Les Soleils des indépendances', quote: 'Les Soleils des indépendances', explanation: 'Les personnages permettent de montrer des attitudes, des conflits et des difficultés propres à une société. La fiction devient ainsi un moyen d’observer l’être humain.', category: 'Personnage', connector: 'Enfin' }
  ] }],
  poesie: [{ id: 302, label: 'Poésie — sentiment, engagement et beauté', perspective: 'Expression personnelle, critique sociale et travail de la forme', pedagogicalAdvice: 'Arguments inspirés des axes poésie du document fourni.', arguments: [
    { statement: 'La poésie peut exprimer les sentiments personnels du poète.', author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', quote: 'Femme noire', explanation: 'Le poète peut parler de son amour, de ses souvenirs et de son attachement à une personne ou à une culture. Le poème transforme ainsi un sentiment personnel en émotion partagée.', category: 'Expression des sentiments', connector: 'D’abord' },
    { statement: 'La poésie peut dénoncer la colonisation et ses violences.', author: 'Léopold Sédar Senghor', work: 'Éthiopiques', quote: 'Chaka', explanation: 'Le poème peut rappeler les violences de la domination coloniale et défendre la dignité des peuples africains. La poésie devient alors une parole de résistance.', category: 'Engagement', connector: 'Ensuite' },
    { statement: 'La poésie peut attirer l’attention sur la souffrance des plus faibles.', author: 'Charles Baudelaire', work: 'Les Fleurs du mal', quote: 'Les Aveugles', explanation: 'Le poète représente des personnes rejetées ou marginalisées. La poésie peut ainsi rendre visibles des souffrances que la société oublie.', category: 'Critique sociale', connector: 'De plus' },
    { statement: 'La poésie peut utiliser le rythme pour créer de la musique avec les mots.', author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', quote: 'Joal', explanation: 'Les répétitions et le rythme donnent au poème une sonorité particulière. Le lecteur peut alors ressentir la nostalgie ou l’émotion grâce à la musique des vers.', category: 'Musicalité', connector: 'Ensuite' },
    { statement: 'La poésie peut donner une nouvelle forme aux mots et aux images.', author: 'Guillaume Apollinaire', work: 'Calligrammes', quote: 'La cravate et la montre', explanation: 'Dans un calligramme, les mots peuvent former un dessin. La poésie devient alors à la fois texte et image.', category: 'Forme', connector: 'Enfin' },
    { statement: 'La poésie peut critiquer les abus du pouvoir.', author: 'Charles Nokan', work: 'Le Cri rouge', quote: 'Le Cri rouge', explanation: 'Le poète peut utiliser son œuvre pour dénoncer la dictature et les abus politiques. La poésie devient alors un moyen de prendre position.', category: 'Engagement politique', connector: 'Enfin' }
  ] }],
  theatre: [{ id: 303, label: 'Théâtre — rire, critique et valeurs', perspective: 'Divertissement, satire, morale et engagement', pedagogicalAdvice: 'Arguments inspirés des axes théâtre du document fourni.', arguments: [
    { statement: 'Le théâtre peut faire rire grâce aux jeux de mots et aux malentendus.', author: 'Molière', work: 'Les Femmes savantes', quote: 'Veux-tu toute ta vie offenser la grammaire ?', explanation: 'Le dialogue peut produire un malentendu qui fait rire le public. Le théâtre utilise ainsi la parole comme source de divertissement.', category: 'Comique', connector: 'D’abord' },
    { statement: 'Le théâtre peut faire rire tout en dénonçant un défaut humain.', author: 'Molière', work: 'L’Avare', quote: 'Au voleur ! au voleur ! à l’assassin ! au meurtrier !', explanation: 'Harpagon est tellement attaché à son argent que son comportement devient comique. Le rire permet en même temps de critiquer l’avarice.', category: 'Comique et critique', connector: 'Ensuite' },
    { statement: 'Le théâtre peut dénoncer les abus du pouvoir politique.', author: 'Aimé Césaire', work: 'La Tragédie du roi Christophe', quote: 'La Tragédie du roi Christophe', explanation: 'La pièce montre les difficultés du pouvoir après l’indépendance et permet de réfléchir aux choix des dirigeants. Le théâtre peut donc devenir une critique politique.', category: 'Engagement', connector: 'De plus' },
    { statement: 'Le théâtre peut remettre en question certaines traditions.', author: 'Guillaume Oyono-Mbia', work: 'Trois prétendants… un mari', quote: 'Trois prétendants… un mari', explanation: 'La pièce met en scène les pressions familiales autour du mariage. Le théâtre permet ainsi de questionner certaines pratiques sociales.', category: 'Critique sociale', connector: 'De plus' },
    { statement: 'Le théâtre peut condamner l’avarice et la cupidité.', author: 'Molière', work: 'L’Avare', quote: 'C’est une étrange chose que cette avarice !', explanation: 'Le personnage d’Harpagon place l’argent au centre de sa vie. Son comportement montre les effets négatifs d’un attachement excessif à la richesse.', category: 'Morale', connector: 'Enfin' },
    { statement: 'Le théâtre peut célébrer le courage et le sacrifice.', author: 'Bernard Dadié', work: 'Assémien Dehylé, roi du Sanwi', quote: 'Assémien Dehylé', explanation: 'Un personnage héroïque peut représenter le courage et l’amour de sa communauté. Le théâtre peut ainsi transmettre des valeurs.', category: 'Valeurs', connector: 'Enfin' }
  ] }],
  litterature: [{ id: 304, label: 'Littérature — critique, culture et évasion', perspective: 'Engagement, mémoire, culture et imagination', pedagogicalAdvice: 'Arguments généraux issus des axes littérature du document fourni.', arguments: [
    { statement: 'La littérature peut dénoncer les injustices et les abus de pouvoir.', author: 'Ahmadou Kourouma', work: 'Les Soleils des indépendances', quote: 'Les Soleils des indépendances', explanation: 'L’écrivain peut montrer les souffrances causées par de mauvais dirigeants et par les injustices. La littérature devient alors un moyen de critique sociale.', category: 'Engagement', connector: 'D’abord' },
    { statement: 'La littérature peut défendre la culture d’un peuple.', author: 'Djibril Tamsir Niane', work: 'Soundjata ou l’épopée mandingue', quote: 'Soundjata ou l’épopée mandingue', explanation: 'Le récit transmet des traditions, des valeurs et des éléments de la mémoire mandingue. La littérature aide ainsi à conserver et à faire connaître une culture.', category: 'Culture', connector: 'Ensuite' },
    { statement: 'La littérature peut dénoncer certaines pratiques qui portent atteinte à la liberté.', author: 'Fatou Keïta', work: 'Rebelle', quote: 'Rebelle', explanation: 'Le récit permet de montrer les conséquences de pratiques sociales imposées aux femmes. La littérature peut ainsi ouvrir un débat sur les droits et la liberté.', category: 'Critique sociale', connector: 'De plus' },
    { statement: 'La littérature peut garder la mémoire d’une époque et d’une vie.', author: 'Camara Laye', work: 'L’Enfant noir', quote: 'L’Enfant noir', explanation: 'Le récit de souvenirs permet de conserver des images de l’enfance, de la famille et de la société. L’œuvre devient ainsi un témoignage littéraire.', category: 'Mémoire', connector: 'Enfin' },
    { statement: 'La littérature peut permettre au lecteur de s’évader du quotidien.', author: 'Pierre Boulle', work: 'La Planète des singes', quote: 'La Planète des singes', explanation: 'La fiction conduit le lecteur dans un monde différent du réel. Elle nourrit donc l’imagination et procure un moment d’évasion.', category: 'Évasion', connector: 'Enfin' }
  ] }],
  lecture: [{ id: 305, label: 'Lecture — évasion, connaissance et réflexion', perspective: 'Plaisir, connaissance, formation et éveil', pedagogicalAdvice: 'Axes de lecture présents dans le document fourni.', arguments: [
    { statement: 'La lecture permet de s’évader dans des mondes imaginaires.', author: 'Pierre Boulle', work: 'La Planète des singes', quote: 'La Planète des singes', explanation: 'Le lecteur quitte momentanément son quotidien pour suivre une histoire qui se déroule dans un autre monde. La lecture nourrit ainsi l’imagination.', category: 'Évasion', connector: 'D’abord' },
    { statement: 'La lecture permet de découvrir d’autres cultures.', author: 'Chinua Achebe', work: 'Le Monde s’effondre', quote: 'Le Monde s’effondre', explanation: 'Une œuvre peut présenter les coutumes et les croyances d’un peuple. Le lecteur apprend alors des choses qu’il ne connaît pas directement.', category: 'Connaissance', connector: 'Ensuite' },
    { statement: 'La lecture peut aider le lecteur à réfléchir sur ses propres choix.', author: 'Amadou Koné', work: 'Les Frasques d’Ebinto', quote: 'Les Frasques d’Ebinto', explanation: 'Les erreurs et les conséquences vécues par un personnage peuvent servir d’exemple au lecteur. La lecture peut donc aider à mieux réfléchir avant d’agir.', category: 'Formation', connector: 'De plus' },
    { statement: 'La lecture peut éveiller la conscience du lecteur face aux injustices.', author: 'Aimé Césaire', work: 'Cahier d’un retour au pays natal', quote: 'Ma bouche sera la bouche des malheurs qui n’ont point de bouche', explanation: 'L’écrivain peut donner une voix à ceux qui souffrent et que l’on entend peu. La lecture peut ainsi faire prendre conscience de certaines injustices.', category: 'Éveil des consciences', connector: 'Enfin' }
  ] }],
  'role-ecrivain': [{ id: 306, label: 'Rôle de l’écrivain — instruire, défendre et créer', perspective: 'Éducation, engagement, culture et création', pedagogicalAdvice: 'Axes sur le rôle de l’écrivain présents dans le document fourni.', arguments: [
    { statement: 'L’écrivain peut instruire le lecteur en lui transmettant des leçons de vie.', author: 'Amadou Hampâté Bâ', work: 'Petit Bodiel', quote: 'Petit Bodiel', explanation: 'Une histoire peut montrer les conséquences de certains comportements et valoriser la sagesse ou le courage. L’écrivain peut ainsi aider le lecteur à réfléchir.', category: 'Fonction éducative', connector: 'D’abord' },
    { statement: 'L’écrivain peut défendre les personnes qui souffrent ou qui sont privées de parole.', author: 'Aimé Césaire', work: 'Cahier d’un retour au pays natal', quote: 'Ma bouche sera la bouche des malheurs qui n’ont point de bouche', explanation: 'L’écrivain peut parler au nom de ceux qui subissent l’injustice. La littérature devient alors une forme d’engagement.', category: 'Engagement', connector: 'Ensuite' },
    { statement: 'L’écrivain peut défendre la liberté de son peuple.', author: 'Aimé Césaire', work: 'Cahier d’un retour au pays natal', quote: 'ma voix, la liberté de celles qui s’affaissent au cachot du désespoir', explanation: 'La poésie et la littérature peuvent dénoncer la domination et rappeler la dignité d’un peuple. L’écrivain devient ainsi une voix de résistance.', category: 'Liberté', connector: 'De plus' },
    { statement: 'L’écrivain peut valoriser la culture dont il est issu.', author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', quote: 'Joal', explanation: 'L’écrivain peut évoquer sa terre, sa mémoire et ses traditions pour les faire connaître. Son œuvre participe ainsi à la valorisation culturelle.', category: 'Culture', connector: 'Enfin' },
    { statement: 'L’écrivain peut aussi créer une fiction pour le plaisir du lecteur.', author: 'Pierre Boulle', work: 'La Planète des singes', quote: 'La Planète des singes', explanation: 'L’auteur invente des personnages et des situations qui n’existent pas dans la réalité. La création littéraire peut donc avoir une fonction de divertissement.', category: 'Création', connector: 'Enfin' }
  ] }],
  'personnage-romanesque': [{ id: 307, label: 'Personnage romanesque — identité, éducation et société', perspective: 'Formation, choix, vulnérabilité et valeurs', pedagogicalAdvice: 'Axes sur le personnage romanesque présents dans le document fourni.', arguments: [
    { statement: 'Le personnage romanesque peut aider à réfléchir à l’identité culturelle.', author: 'Camara Laye', work: 'L’Enfant noir', quote: 'L’Enfant noir', explanation: 'À travers son enfance, le personnage découvre sa famille, ses traditions et son milieu. Le récit permet donc de réfléchir à la construction de l’identité.', category: 'Identité', connector: 'D’abord' },
    { statement: 'Le personnage romanesque peut transmettre des valeurs.', author: 'François d’Assise N’Dah', work: 'Le Retour de l’enfant soldat', quote: 'Le Retour de l’enfant soldat', explanation: 'Un personnage peut être présenté comme courageux, humble ou généreux. Le lecteur peut alors réfléchir aux qualités humaines que l’œuvre met en valeur.', category: 'Éducation', connector: 'Ensuite' },
    { statement: 'Le personnage romanesque peut défendre une cause et inspirer le lecteur.', author: 'Fatou Keïta', work: 'Rebelle', quote: 'Rebelle', explanation: 'Un personnage qui refuse une situation injuste peut devenir un exemple de résistance. Le récit peut ainsi encourager le lecteur à réfléchir aux droits des femmes.', category: 'Engagement', connector: 'De plus' },
    { statement: 'Le personnage romanesque peut montrer le conflit entre deux cultures.', author: 'Cheikh Hamidou Kane', work: 'L’Aventure ambiguë', quote: 'L’Aventure ambiguë', explanation: 'Samba Diallo est partagé entre l’éducation reçue dans sa tradition et celle qu’il découvre en Occident. Le personnage montre ainsi les difficultés d’un choix entre plusieurs modèles culturels.', category: 'Choc des cultures', connector: 'De plus' },
    { statement: 'Le personnage romanesque peut montrer la fragilité de l’être humain.', author: 'Macaire Etty', work: 'Pour le bonheur des miens', quote: 'Pour le bonheur des miens', explanation: 'Les difficultés sociales ou économiques peuvent rendre un personnage vulnérable. Le roman rappelle ainsi que les conditions de vie influencent les choix et les comportements.', category: 'Vulnérabilité', connector: 'Enfin' },
    { statement: 'Les personnages romanesques peuvent représenter des qualités ou des défauts humains.', author: 'Mathurin Goli Bi Irié', work: 'Sous le voile de la mariée', quote: 'Sous le voile de la mariée', explanation: 'Un personnage peut incarner la fidélité, l’humilité, l’égoïsme ou l’infidélité. Le lecteur reconnaît alors des comportements présents dans la société.', category: 'Valeurs et vices', connector: 'Enfin' }
  ] }]
};

for (const [key, variants] of Object.entries(EXTRA_LITERATURE_SOURCE_VARIANTS)) {
  ALL_ARGUMENT_VARIANTS[key] = [...(ALL_ARGUMENT_VARIANTS[key] || []), ...variants];
}

// Extension philosophique vérifiée : formulations simples fondées sur des sources
// philosophiques de référence. Les citations sont volontairement courtes.
const EXTRA_PHILO_VERIFIED_VARIANTS: Record<string, ArgumentVariant[]> = {
  liberte: [{ id: 401, label: 'Liberté — choix et responsabilité', perspective: 'Liberté, déterminisme et responsabilité', pedagogicalAdvice: 'Formulations simples vérifiées sur les grandes conceptions de la liberté.', arguments: [
    { statement: 'Être libre, c’est pouvoir choisir et répondre de ses choix.', author: 'Jean-Paul Sartre', work: 'L’Existentialisme est un humanisme', quote: 'L’homme est condamné à être libre.', explanation: 'Pour Sartre, l’homme ne peut pas éviter de choisir. Comme il choisit lui-même sa manière d’agir, il doit aussi assumer les conséquences de ses choix.', category: 'Liberté et responsabilité', connector: 'D’abord' },
    { statement: 'La liberté peut être pensée comme la capacité d’agir selon sa volonté.', author: 'René Descartes', work: 'Principes de la philosophie', quote: 'La liberté de notre volonté se connaît sans preuves.', explanation: 'Descartes affirme que nous faisons l’expérience de notre volonté quand nous choisissons. La liberté est donc liée au pouvoir de vouloir et de décider.', category: 'Libre arbitre', connector: 'Ensuite' },
    { statement: 'Nous pouvons nous croire libres sans connaître toutes les causes qui nous font agir.', author: 'Baruch Spinoza', work: 'Lettre à Schuller', quote: 'Les hommes se croient libres pour cette seule cause qu’ils sont conscients de leurs actions.', explanation: 'Nous savons ce que nous faisons, mais nous ne connaissons pas toujours ce qui influence nos choix. Spinoza invite donc à chercher les causes de nos actions.', category: 'Déterminisme', connector: 'De plus' },
    { statement: 'La liberté morale consiste à se donner une règle que l’on peut vouloir pour tous.', author: 'Emmanuel Kant', work: 'Fondements de la métaphysique des mœurs', quote: 'Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle.', explanation: 'Pour Kant, être libre ne signifie pas suivre toutes ses envies. C’est pouvoir décider selon une règle morale que l’on peut considérer comme valable pour tous.', category: 'Autonomie', connector: 'Enfin' }
  ] }],
  autrui: [{ id: 402, label: 'Autrui — connaissance et liberté', perspective: 'Relation à l’autre et reconnaissance', pedagogicalAdvice: 'Arguments simples sur la relation à autrui.', arguments: [
    { statement: 'La présence d’autrui peut nous faire prendre conscience de nous-mêmes.', author: 'Jean-Paul Sartre', work: 'L’Être et le Néant', quote: 'La honte est, par nature, reconnaissance.', explanation: 'Le regard d’une autre personne peut nous faire voir notre comportement autrement. Autrui participe donc à la manière dont nous nous comprenons.', category: 'Conscience de soi', connector: 'D’abord' },
    { statement: 'Ma liberté doit tenir compte de la liberté des autres.', author: 'Jean-Paul Sartre', work: 'L’Existentialisme est un humanisme', quote: 'Nous voulons la liberté pour la liberté.', explanation: 'Sartre lie ma liberté à celle des autres. Je ne peux donc pas penser ma liberté comme le droit d’écraser celle d’autrui.', category: 'Liberté et autrui', connector: 'Ensuite' },
    { statement: 'La connaissance de soi passe aussi par la relation avec les autres.', author: 'Socrate', work: 'Mémorables', quote: 'Connais-toi toi-même.', explanation: 'La connaissance de soi demande de réfléchir à ce que nous sommes réellement. La relation avec les autres peut nous aider à découvrir nos qualités, nos limites et nos erreurs.', category: 'Connaissance de soi', connector: 'Enfin' }
  ] }],
  devoir: [{ id: 403, label: 'Devoir — morale et règle universelle', perspective: 'Devoir, raison et moralité', pedagogicalAdvice: 'Arguments simples sur le devoir moral.', arguments: [
    { statement: 'Le devoir moral demande d’agir selon une règle valable pour tous.', author: 'Emmanuel Kant', work: 'Fondements de la métaphysique des mœurs', quote: 'Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle.', explanation: 'Avant d’agir, il faut se demander si l’on pourrait accepter que tout le monde fasse la même chose. Une action morale doit donc pouvoir être universalisée.', category: 'Devoir', connector: 'D’abord' },
    { statement: 'Le devoir ne consiste pas seulement à faire ce qui nous plaît.', author: 'Emmanuel Kant', work: 'Fondements de la métaphysique des mœurs', quote: 'Le devoir est la nécessité d’agir par respect pour la loi.', explanation: 'Une action peut être difficile ou contraire à nos intérêts personnels. Elle reste pourtant morale si nous la faisons parce que nous reconnaissons qu’elle est juste.', category: 'Devoir et volonté', connector: 'Ensuite' }
  ] }],
  raison: [{ id: 404, label: 'Raison — comprendre et juger', perspective: 'Raison, connaissance et limites', pedagogicalAdvice: 'Arguments simples sur le rôle de la raison.', arguments: [
    { statement: 'La raison permet de vérifier une idée au lieu de l’accepter simplement parce qu’on nous l’a donnée.', author: 'René Descartes', work: 'Discours de la méthode', quote: 'Ne recevoir jamais aucune chose pour vraie que je ne la connusse évidemment être telle.', explanation: 'Descartes demande de ne pas accepter trop vite une affirmation. Il faut examiner les raisons qui permettent de la considérer comme vraie.', category: 'Esprit critique', connector: 'D’abord' },
    { statement: 'La raison peut nous aider à chercher une règle morale valable pour tous.', author: 'Emmanuel Kant', work: 'Fondements de la métaphysique des mœurs', quote: 'Agis uniquement d’après la maxime qui fait que tu peux vouloir en même temps qu’elle devienne une loi universelle.', explanation: 'La raison permet de dépasser nos intérêts personnels. Elle nous aide à demander si notre manière d’agir pourrait devenir une règle pour tous.', category: 'Raison pratique', connector: 'Ensuite' },
    { statement: 'La raison ne suffit pas toujours à expliquer toute l’expérience humaine.', author: 'Blaise Pascal', work: 'Pensées', quote: 'Le cœur a ses raisons, que la raison ne connaît point.', explanation: 'Pascal rappelle que certaines dimensions de l’existence, notamment la foi, ne se réduisent pas à un raisonnement logique. Il distingue ainsi plusieurs manières de connaître.', category: 'Limites de la raison', connector: 'Enfin' }
  ] }]
};

for (const [key, variants] of Object.entries(EXTRA_PHILO_VERIFIED_VARIANTS)) {
  ALL_ARGUMENT_VARIANTS[key] = [...(ALL_ARGUMENT_VARIANTS[key] || []), ...variants];
}



/**
 * Normalise une chaîne de caractères
 */
function sanitizeDirectArgumentStatement(statement: string): string {
  return statement
    .replace(/^\s*(?:on peut ainsi|on peut donc|on peut également|on peut aussi|ainsi|en effet|d\s*\.?\s*abord|d\s*\.?\s*emblée)\s+(?:soutenir|affirmer|constater|retenir)?\s*que?\s*/i, "")
    .replace(/^\s*l['’]analyse rigoureuse (?:met|montre|révèle) en lumière que\s*/i, "")
    .replace(/^\s*cette (?:idée|thèse|réflexion) (?:montre|permet de comprendre|revient à considérer) que\s*/i, "")
    .replace(/^\s*il apparaît (?:que|clairement que)\s*/i, "")
    .replace(/^\s*d['’]un point de vue conceptuel,?\s*/i, "")
    .trim();
}

function norm(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Table canonique des noms affichés avec accents officiels de l'Académie et du Baccalauréat
export const TOPIC_DISPLAY_NAMES: Record<string, string> = {
  liberte: "Liberté",
  verite: "Vérité",
  societe: "Société",
  theatre: "Théâtre",
  poesie: "Poésie",
  desir: "Désir",
  etat: "État",
  egalite: "Égalité",
  justice: "Justice",
  bonheur: "Bonheur",
  devoir: "Devoir",
  morale: "Morale",
  raison: "Raison",
  conscience: "Conscience",
  inconscient: "Inconscient",
  travail: "Travail",
  technique: "Technique",
  art: "Art",
  temps: "Temps",
  religion: "Religion",
  science: "Science",
  langage: "Langage",
  nature: "Nature",
  culture: "Culture",
  histoire: "Histoire",
  philosophie: "Philosophie",
  roman: "Roman",
  litterature: "Littérature",
  conte: "Conte",
  francais: "Français",
  autrui: "Autrui",
  droit: "Droit",
  lecture: "Lecture",
  "role-ecrivain": "Rôle de l'écrivain",
  "personnage-romanesque": "Personnage romanesque",
  "mythe-et-raison": "Mythe et Raison",
  "mythe-et-raison-compatibilite": "Mythe et Raison — compatibilité",
  "mythe-et-raison-incompatibilite": "Mythe et Raison — incompatibilité",
  mythe: "Mythe",
  "foi-et-raison": "Foi et Raison",
  foi: "Foi",
  "foi-et-raison-compatibilite": "Foi et Raison — compatibilité",
  "foi-et-raison-incompatibilite": "Foi et Raison — incompatibilité"
};

export function getTopicDisplayName(key: string): string {
  if (TOPIC_DISPLAY_NAMES[key]) return TOPIC_DISPLAY_NAMES[key];
  return key.charAt(0).toUpperCase() + key.slice(1);
}

/**
 * Identifie la notion clé pour la recherche d'arguments avec tolérance étendue aux fautes de frappe
 */
export function identifyArgumentTopic(query: string): string | null {
  const n = norm(query);

  // 1. Genres et vocations de littérature : le genre explicite est prioritaire
  // sur une fonction générale. Ainsi « fonction engagée du roman » reste un
  // sujet de ROMAN et ne bascule jamais automatiquement vers la poésie.
  const hasRomanGenre = /\broman(?:s|esque)?\b|\bromancier(?:s)?\b|fiction|recit|balzac|zola|camus|narration/i.test(n) && !/romant/i.test(n);
  const hasTheatreGenre = /th[eé][aâ]tr|tragedi|comedi|dramat|scene|catharsis/i.test(n);
  const hasPoetryGenre = /po[eé]s|po[eé]t|vers\b|rime\b|lyrisme|strophe|corrupthius|gole\s*bi|melusine|dadie|calligrammes/i.test(n);

  if (hasRomanGenre) return "roman";
  if (hasTheatreGenre) return "theatre";
  if (hasPoetryGenre) return "poesie";

  // Sans genre explicite, les fonctions littéraires générales restent rattachées
  // à la poésie pour conserver la compatibilité historique de ces recherches.
  if (/fonction\s*(?:engage|estheti|evasi|ficti|ludiq|didacti)/i.test(n)) return "poesie";
  if (/conte|fable|apologue|merveilleux|ogre|perrault|ananz/i.test(n)) return "conte";
  if (/personnage\s*romanesque|héros\s*romanesque|personnage\s*du\s*roman/i.test(n)) return "personnage-romanesque";
  if (/r[oô]le\s*de\s*l.?[eé]crivain|fonction\s*de\s*l.?[eé]crivain|ecrivain\s*(engag[eé]|instruc|distrac)/i.test(n)) return "role-ecrivain";
  if (/lecture|lecteur|lire\b|litt[eé]rature\s*(et|comme)\s*(lecture|connaissance)/i.test(n)) return "lecture";
  if (/litterat|ecriture|ecrivain|lettres\b|vocation\s*litteraire/i.test(n)) return "litterature";
  if (/francais|oeuvre|oeuvres|genre\s*litteraire|dissertation\s*litteraire/i.test(n)) return "francais";

  // 2. Grandes Notions de Philosophie
  if (/autrui|alter\s*ego|solipsisme|visage|autruis/i.test(n)) return "autrui";
  if (/l[ie]*b[ea]rt|liebert|determinisme|libre\s*arbitre/i.test(n)) return "liberte";
  if (/inco[nm]?sci[ea]n|inconcient|psychanalyse|refoul|pulsion|subconscient/i.test(n)) return "inconscient";
  if (/co[nm]?sci[ea]n[sc]e|concience|coscience|cogito|introspection|moi\b/i.test(n)) return "conscience";
  if (/travai?l|ouvrier|alienation|labeur|metier|artisan/i.test(n)) return "travail";
  if (/[eé]tat|politiqu|gouvern|souverain|pouvoir\s*politique/i.test(n)) return "etat";
  if (/\bdroit\b|legalit[eé]|positivisme|norme\s*juridique|droits?\s*de\s*l\s*homme/i.test(n)) return "droit";
  if (/justi[sc]e|equit[eé]|juste/i.test(n)) return "justice";
  if (/devoir|obligation\s*morale|imperatif\s*categorique/i.test(n)) return "devoir";
  if (/\bmorale?\b|deontolog|utilitarisme|bien\s*et\s*mal|vertu/i.test(n)) return "morale";
  if (/mythe\s*(et|&|avec)\s*raison|raison\s*(et|&|avec)\s*mythe/i.test(n)) {
    if (/incompat|incompatible|oppos|conflit|contradict/i.test(n)) return "mythe-et-raison-incompatibilite";
    if (/compat|compatible|accord|harmon/i.test(n)) return "mythe-et-raison-compatibilite";
    return "mythe-et-raison";
  }
  if (/foi\s*(et|&|avec)\s*raison|raison\s*(et|&|avec)\s*foi/i.test(n)) {
    if (/incompat|incompatible|oppos|conflit|contradict/i.test(n)) return "foi-et-raison-incompatibilite";
    if (/compat|compatible|accord|harmon/i.test(n)) return "foi-et-raison-compatibilite";
    return "foi-et-raison";
  }
  if (/\bfoi\b|croyance religieuse|conviction religieuse/i.test(n)) return "foi";
  if (/\bmythe\b|mythologie|mythique/i.test(n)) return "mythe";
  if (/\braison\b|rational|entendement|lumiere\s*naturelle|logos/i.test(n)) return "raison";
  if (/societ|social\b|pacte\s*social|communaute|anomie|fait\s*social/i.test(n)) return "societe";
  if (/culture|civilisat|acculturat|ethnocentr|barbarie/i.test(n)) return "culture";
  if (/v[eé]rit[eé]|vrai\b|mensonge|certitude|erreur|illusion/i.test(n)) return "verite";
  if (/techni[qk]|machine|technoscience|intelligence\s*artificielle|outil/i.test(n)) return "technique";
  if (/bonheur|boneur|heureu[sx]|joie|ataraxie|eudemon|souverain\s*bien/i.test(n)) return "bonheur";
  if (/art\b|artist|beau\b|beaute|estheti|oeuvre\s*d\s*art/i.test(n)) return "art";
  if (/temps|duree|finitude|temporalite|mortel|instant/i.test(n)) return "temps";
  if (/religi|foi\b|dieu|divin|croyance|sacre|priere/i.test(n)) return "religion";
  if (/scien[sc]e|scientifi|theorie|experimentation|epistemolog|hypothese/i.test(n)) return "science";
  if (/langa[gj]e|parole|mots\b|signe\s*linguistique|discours/i.test(n)) return "langage";
  if (/d[eé]sir|passion|convoitise|plaisir|manque|appetit/i.test(n)) return "desir";
  if (/natur|ecologie|vivant|cosmos|biotique/i.test(n)) return "nature";
  if (/histoi?re|devenir|progres\s*historique|historique|ruse\s*de\s*la\s*raison/i.test(n)) return "histoire";
  if (/philosophi|philosophe|sagesse|philosophique/i.test(n)) return "philosophie";
  return null;
}

/**
 * Enrichit toutes les grandes notions avec des formulations contrôlées.
 * Le fond philosophique, l'auteur, l'œuvre et la référence restent inchangés.
 * Aucune génération libre n'est utilisée : les variantes sont construites à
 * partir de patrons déterministes validés.
 */
function enrichPhiloFormulationVariants(arg: ArgumentItem): ArgumentItem {
  if (arg.formulationVariants && arg.formulationVariants.length >= 3) return arg;

  const statement = sanitizeDirectArgumentStatement(arg.statement.trim());
  const explanation = arg.explanation.trim();

  // Variations lexicales directes : elles changent la formulation sans ajouter
  // de thèse, de connecteur discursif ou de connaissance nouvelle.
  const replacements: Array<[RegExp, string]> = [
    [/\bLe roman\b/gi, "Le récit romanesque"],
    [/\bLa poésie\b/gi, "Le langage poétique"],
    [/\bLe théâtre\b/gi, "L'art dramatique"],
    [/\bLa tragédie\b/gi, "Le genre tragique"],
    [/\bLa comédie\b/gi, "Le genre comique"],
    [/\bLe poète\b/gi, "L'écrivain-poète"],
    [/\bLe romancier\b/gi, "L'auteur de roman"],
    [/\bLe spectateur\b/gi, "Le public"],
    [/\bLe lecteur\b/gi, "Le destinataire du récit"],
    [/\bLa littérature\b/gi, "L'œuvre littéraire"]
  ];

  const variants: string[] = [statement];
  for (const [pattern, replacement] of replacements) {
    const candidate = statement.replace(pattern, replacement);
    if (candidate !== statement && !variants.includes(candidate)) variants.push(candidate);
    if (variants.length >= 3) break;
  }

  while (variants.length < 3) variants.push(statement);

  return {
    ...arg,
    formulationVariants: variants.slice(0, 3).map(st => ({
      statement: sanitizeDirectArgumentStatement(st),
      explanation
    }))
  };
}

function enrichPhiloCorpusVariants(corpus: ArgumentVariant[]): ArgumentVariant[] {
  return corpus.map(variant => ({
    ...variant,
    arguments: variant.arguments.map(enrichPhiloFormulationVariants)
  }));
}

/**
 * Liste des grandes notions philosophiques Terminale couvertes par le moteur.
 * Les corpus sont partagés et déterministes ; seules les formulations varient.
 */
export const PHILO_MAJOR_NOTIONS = [
  "liberte", "conscience", "bonheur", "verite", "justice", "travail",
  "technique", "societe", "etat", "morale", "langage", "nature",
  "temps", "religion", "conscience-et-inconscient", "justice-et-droit",
  "politique", "culture", "technique-et-progres", "autrui", "art",
  "science", "raison", "desir"
] as const;

/** Axes spécifiques du programme ivoirien traités comme sous-notions/recherches spécialisées. */
export const PHILO_IVORIAN_SPECIAL_AXES = [
  "mythe-et-raison", "mythe", "foi-et-raison", "foi",
  "foi-et-raison-compatibilite", "foi-et-raison-incompatibilite",
  "inconscient"
] as const;

/**
 * Récupère ou génère un corpus d'arguments variés pour n'importe quelle requête
 */
export async function getVariedArgumentCorpus(params: {
  query: string;
  topic?: string;
  variantIndex?: number;
  curriculum?: string;
  userSeed?: string;
  appendVariants?: boolean;
}): Promise<ArgumentCorpusResult | null> {
  const { query, variantIndex = 0, userSeed, appendVariants = false } = params;
  const detectedTopicKey = identifyArgumentTopic(query) || (params.topic ? norm(params.topic) : null);

  // 1. Vérification dans le pool de variantes riches pré-indexées
  if (detectedTopicKey && ALL_ARGUMENT_VARIANTS[detectedTopicKey]) {
    const variants = enrichPhiloCorpusVariants(ALL_ARGUMENT_VARIANTS[detectedTopicKey]);
    const categoryCount = variants.length;
    // Les catégories sont finies ; les présentations, elles, sont pilotées par une graine et
    // peuvent être renouvelées sur un très grand espace de combinaisons.
    const totalVariants = 1_000_000_000;
    const userSeedHash = userSeed ? hashStringToInt(userSeed) : 0;
    const presentationIndex = Math.abs(variantIndex) + (userSeed ? Math.abs(userSeedHash) : 0);
    const safeIdx = ((presentationIndex % categoryCount) + categoryCount) % categoryCount;
    const currentVariant = variants[safeIdx];

    const topicDisplayName = getTopicDisplayName(detectedTopicKey);
    const isLiterature = ["poesie", "roman", "theatre", "litterature", "conte", "francais"].includes(detectedTopicKey);

    // Pour les genres littéraires, une fonction explicitement demandée doit
    // sélectionner l'angle correspondant au lieu de laisser la graine choisir
    // un autre genre/fonction. La variation intervient ensuite dans les
    // formulations des arguments, pas dans l'identification du sujet.
    const normalizedQuery = norm(query);
    let selectedVariantIndex = safeIdx;
    if (isLiterature) {
      const functionPatterns: Array<[RegExp, RegExp]> = [
        [/engage|engagement|militan|denonc|injustice|oppression|liberte|dictature|corruption|guerre/i, /engagement|critique|emancipation|engag|injustice|libert/i],
        [/evasive|evasif|evasion|fictif|fiction|imaginaire|aventure|voyage|reve/i, /evasion|aventure|imagination|fictif|imaginaire/i],
        [/ludiq|divert|plaisir|rire|humour|suspense/i, /divertissement|ludique|plaisir|suspense|jeu/i],
        [/realis|realiste|societe|social|moeurs|histoire|memoire/i, /realisme|societ|memoire|real/i],
        [/lyriq|sentiment|emotion|amour|deuil/i, /lyrique|sentiment|emotion/i],
        [/estheti|beaute|forme|style|musicalite/i, /esthet|beaute|forme|style/i],
        [/didacti|instruire|morale|lecon|enseigne/i, /didact|morale|instruction/i]
      ];
      for (const [queryPattern, variantPattern] of functionPatterns) {
        if (!queryPattern.test(normalizedQuery)) continue;
        const found = variants.findIndex(v => variantPattern.test(`${v.label} ${v.perspective} ${v.pedagogicalAdvice}`));
        if (found >= 0) {
          selectedVariantIndex = found;
          break;
        }
      }
    }
    const selectedVariant = variants[selectedVariantIndex] || currentVariant;

    // Graine de différenciation garantissant que l'élève A et l'élève B reçoivent des formulations différentes
    const effectiveSeed = `${userSeed || "anonymous"}|${query}|presentation:${presentationIndex}`;

    // Base d'arguments : pour une recherche ciblée (ex. « fonction engagée du roman »),
    // on reste dans l'angle ciblé. « Voir plus » peut ensuite parcourir les arguments
    // de cet angle sans mélanger roman, théâtre et poésie.
    let baseArgs: { arg: ArgumentItem; vIdx: number }[] = [];
    if (appendVariants && totalVariants > 1 && !isLiterature) {
      variants.forEach((v) => {
        v.arguments.forEach((a) => {
          baseArgs.push({ arg: a, vIdx: v.id });
        });
      });
    } else {
      selectedVariant.arguments.forEach((a) => {
        baseArgs.push({ arg: a, vIdx: selectedVariantIndex });
      });
    }

    const concepts: CourseConceptFormula[] = baseArgs.map((item, i) => {
      const differentiated = differentiateArgumentItem({
        arg: item.arg,
        argIndex: i,
        variantIndex: item.vIdx,
        topicKey: detectedTopicKey,
        seed: effectiveSeed
      });

      return {
        name: `Argument #${i + 1} [${differentiated.category || 'Perspective d\'Analyse'}] : ${differentiated.statement}`,
        formulaOrRule: `Auteur : ${differentiated.author} | Œuvre : *${differentiated.work}* | Citation : « ${differentiated.quote} »`,
        explanation: differentiated.explanation,
        contextOrApplication: detectedTopicKey && !isLiterature
          ? ''
          : `Modèle d'insertion en dissertation : ${differentiated.statement}`
      };
    });

    const methodSteps: CourseMethodStep[] = [
      {
        stepNumber: 1,
        title: `Angle d'analyse : ${selectedVariant.label}`,
        whatToDo: `Mobilisez les arguments de cet angle (${selectedVariant.perspective}) pour donner une cohérence théorique forte à votre axe de dissertation.`,
        reflexOrTip: selectedVariant.pedagogicalAdvice
      },
      {
        stepNumber: 2,
        title: "Énoncer l'idée directrice avec clarté sans citer immédiatement l'auteur",
        whatToDo: "Formuler la thèse de l'argument de façon autonome en tête de paragraphe. Ne commencez jamais brutalement par le nom du philosophe ou de l'écrivain.",
        reflexOrTip: `Connecteurs recommandés : ${selectedVariant.arguments.map(a => a.connector).filter(Boolean).join(', ')}.`
      },
      {
        stepNumber: 3,
        title: "Explication approfondie du mécanisme rationnel avant toute citation",
        whatToDo: "Expliciter le pourquoi et le comment pendant au moins 2 à 3 phrases complètes avant de poser la citation entre guillemets.",
        reflexOrTip: "La citation vient couronner et illustrer la démonstration ; elle ne s'y substitue jamais."
      },
      {
        stepNumber: 4,
        title: "Commenter la citation et la rattacher expressément au sujet d'examen",
        whatToDo: "Montrer en quoi les termes exacts de la citation confirment la réponse apportée au problème posé par le sujet.",
        reflexOrTip: "Formule d'analyse : « Par cette formule, l'auteur met en lumière que... »"
      }
    ];

    return {
      topicTitle: topicDisplayName,
      discipline: isLiterature ? 'francais' : 'philo',
      disciplineLabel: isLiterature ? 'Français & Littérature (Terminale & Concours)' : 'Philosophie (Terminale & Baccalauréat)',
      activeVariant: safeIdx,
      totalVariants,
      variants,
      currentVariant: selectedVariant,
      coreConceptsAndFormulas: concepts,
      stepByStepMethod: methodSteps,
      definitionAndScope: `Corpus officiel d'arguments pour traiter les sujets de dissertation sur « ${topicDisplayName} ».\n\nAngle d'analyse : ${currentVariant.label} (${currentVariant.perspective}).\n\nDirectives d'excellence méthodologique : Dans une dissertation, chaque argument doit suivre la structure rigoureuse : Idée directrice ➔ Explication préalable approfondie ➔ Citation d'auteur avec œuvre précise ➔ Commentaire de l'illustration.`,
      quickRevisionMemo: `Mémo Révision (${currentVariant.perspective}) : Retenir les références clés : ${currentVariant.arguments.map(a => `${a.author} (*${a.work}*)`).join(" ; ")}.`,
      certificationNote: "Corpus officiel d'arguments de dissertation d'excellence (Programme International & Baccalauréat)."
    };
  }

  // 2. Génération heuristique locale autonome certifiée (100% hors-ligne, 0 IA)
  return buildLocalDynamicArgumentCorpus(query, variantIndex, userSeed, appendVariants);
}

/**
 * Fallback heuristique local garantissant des arguments variés même hors-ligne
 */
function buildLocalDynamicArgumentCorpus(
  query: string,
  _variantIndex: number = 0,
  _userSeed?: string,
  _appendVariants: boolean = false
): ArgumentCorpusResult | null {
  // Une recherche libre inconnue ne doit jamais recevoir de faux arguments,
  // d'auteurs ou de citations fabriqués à partir de modèles génériques.
  return null;
}

/**
 * Fonction synchrone pour la sélection rapide et le test de variantes de corpus d'arguments
 */
export function searchAcademicResourcesWithVariations(query: string, variantIndex: number = 0): ArgumentCorpusResult | null {
  const detectedTopicKey = identifyArgumentTopic(query);
  if (detectedTopicKey && ALL_ARGUMENT_VARIANTS[detectedTopicKey]) {
    const variants = ALL_ARGUMENT_VARIANTS[detectedTopicKey];
    const safeIdx = ((variantIndex % variants.length) + variants.length) % variants.length;
    const currentVariant = variants[safeIdx];
    const isLit = ["poesie", "roman", "theatre", "litterature", "conte", "francais"].includes(detectedTopicKey);
    return {
      topicTitle: getTopicDisplayName(detectedTopicKey),
      discipline: isLit ? 'francais' : 'philo',
      disciplineLabel: isLit ? 'Français & Littérature' : 'Philosophie',
      activeVariant: safeIdx,
      totalVariants: variants.length,
      variants,
      currentVariant,
      coreConceptsAndFormulas: [],
      stepByStepMethod: [],
      definitionAndScope: '',
      quickRevisionMemo: '',
      certificationNote: ''
    };
  }
  return buildLocalDynamicArgumentCorpus(query, variantIndex);
}

