/**
 * BASE DE DONNÉES PÉDAGOGIQUE — KIT DE SURVIE PHILOSOPHIE (PREMIÈRE / TERMINALE)
 * Auteur : MAOUDE GOCHI ALI
 * Collection : MAOUDE REBOOT (Nouvelle Édition)
 * Programme : Terminales A, D, C, G et Première — Niger, Burkina Faso, Bénin, Côte d'Ivoire et CEDEAO
 * 
 * Contenu :
 * - Les Origines et la Spécificité de la réflexion philosophique (Thalès, Pythagore, Cheikh Anta Diop, Pierre Hadot, Heidegger, Platon, Aristote, Towa)
 * - Comparaisons fondamentales : Philosophie vs Mythe, Religion, Science (Épistémologie)
 * - Les Grandes Interrogations : Métaphysique, Anthropologie, Axiologie (Lat Dior, Aline Sitoé Diatta, Soundiata Keïta)
 * - Débat sur la Philosophie Africaine (Tempels, Frobenius, Diop, Kagamé vs Towa, Hountondji)
 * - 40 Citations Philosophiques incontournables et leurs explications approfondies
 * - Définitions conceptuelles des 25 thèmes du programme
 * - Répartition thématique des citations
 * - Méthodologie de la Dissertation et du Commentaire composé (Plan directeur, 4 étapes)
 * - Sujets Types Bac intégralement traités (Temps, Travail, Art, Autrui, Conscience, Liberté, etc.)
 */

export interface SujetTraiteMaoude {
  id: string;
  numero: number;
  intitule: string;
  type: "dissertation" | "commentaire";
  auteurOuSource?: string;
  problemeEtEnjeux: string;
  planOuAxes: { titreAxe: string; sousParties: string[]; references: string[] }[];
  conclusionBilan: string;
}

export interface CitationMaoude {
  numero: number;
  auteur: string;
  citation: string;
  oeuvre?: string;
  explication: string;
}

export const CITATIONS_40_MAOUDE_REBOOT: CitationMaoude[] = [
  {
    numero: 1,
    auteur: "René Descartes",
    citation: "Je pense, donc je suis (cogito ergo sum)",
    oeuvre: "Discours de la méthode / Méditations métaphysiques",
    explication: "Vérité inaugurale échappant au doute hyperbolique : pour être trompé, il faut nécessairement être. Fonde la certitude indubitable du sujet pensant."
  },
  {
    numero: 2,
    auteur: "Socrate",
    citation: "Connais-toi toi-même",
    oeuvre: "Alcibiade (Platon)",
    explication: "Invitation à l'examen de conscience et à l'humilité intellectuelle : la vérité commence par l'introspection intérieure."
  },
  {
    numero: 3,
    auteur: "Socrate",
    citation: "Ce que je sais, c’est que je ne sais rien",
    oeuvre: "Apologie de Socrate (Platon)",
    explication: "L'aveu de sa propre nescience est plus sage que l'illusion du faux savoir : condition première de toute quête philosophique."
  },
  {
    numero: 4,
    auteur: "Emmanuel Kant",
    citation: "Il faut apprendre à philosopher, et non pas la philosophie",
    oeuvre: "Annonce du programme des leçons",
    explication: "La philosophie n'est pas un dogme figé à mémoriser, mais un exercice autonome et critique de la raison."
  },
  {
    numero: 5,
    auteur: "Emmanuel Kant",
    citation: "Que puis-je savoir ? Que dois-je faire ? Que m’est-il permis d’espérer ? (résumées en : Qu'est-ce que l'homme ?)",
    oeuvre: "Critique de la raison pure / Logique",
    explication: "Les trois grandes questions de la métaphysique, de la morale et de la religion se ramènent toutes à l'anthropologie philosophique."
  },
  {
    numero: 6,
    auteur: "Emmanuel Kant",
    citation: "Pense par toi-même (Sapere aude ! Aie le courage de te servir de ton propre entendement)",
    oeuvre: "Qu'est-ce que les Lumières ?",
    explication: "Sortir de l'état de minorité intellectuelle dont l'homme est lui-même responsable par paresse et lâcheté."
  },
  {
    numero: 7,
    auteur: "Friedrich Nietzsche",
    citation: "Deviens ce que tu es",
    oeuvre: "Ainsi parlait Zarathoustra",
    explication: "Affirmation de la volonté de puissance et dépassement de soi : déployer toutes ses forces vitales créatrices."
  },
  {
    numero: 8,
    auteur: "Friedrich Nietzsche",
    citation: "Dieu est mort : maintenant nous voulons que le Surhumain vive",
    oeuvre: "Ainsi parlait Zarathoustra",
    explication: "Fin des arrière-mondes métaphysiques et des valeurs nihilistes : l'homme doit créer ses propres valeurs sur terre."
  },
  {
    numero: 9,
    auteur: "Friedrich Nietzsche",
    citation: "L’homme est un pont, non une fin",
    oeuvre: "Ainsi parlait Zarathoustra",
    explication: "L'être humain est une transition dynamique entre l'animalité dépassée et l'homme créateur accompli."
  },
  {
    numero: 10,
    auteur: "Platon",
    citation: "C’est la vraie marque d’un philosophe que le sentiment d’émerveillement",
    oeuvre: "Théétète / Ménon",
    explication: "L'étonnement face au réel et l'ébranlement des fausses évidences constituent la source vivante de la philosophie."
  },
  {
    numero: 11,
    auteur: "Platon",
    citation: "Nul n’est méchant volontairement",
    oeuvre: "Gorgias / Protagoras",
    explication: "Le mal découle de l'ignorance du véritable bien ; celui qui fait le mal se trompe sur ce qui lui est profitable."
  },
  {
    numero: 12,
    auteur: "Protagoras",
    citation: "L’homme est la mesure de toute chose",
    oeuvre: "Fragments (cité par Platon)",
    explication: "Thèse relativiste des sophistes : chaque jugement dépend de la sensibilité et du point de vue particulier de l'observateur."
  },
  {
    numero: 13,
    auteur: "Aristote",
    citation: "L’homme est par nature un animal politique (zoon politikon)",
    oeuvre: "La Politique",
    explication: "L'accomplissement de la nature humaine et des vertus rationnelles exige la vie en communauté civile organisée."
  },
  {
    numero: 14,
    auteur: "Aristote",
    citation: "Le bonheur est une fin en soi",
    oeuvre: "Éthique à Nicomaque",
    explication: "Le souverain bien (eudaimonia) est le but ultime désiré pour lui-même et non comme moyen pour autre chose."
  },
  {
    numero: 15,
    auteur: "Voltaire",
    citation: "Si Dieu n’existait pas, il faudrait l’inventer",
    oeuvre: "Épîtres",
    explication: "L'idée de Dieu est un frein nécessaire aux désordres sociaux et un garant de l'ordre moral collectif."
  },
  {
    numero: 16,
    auteur: "Søren Kierkegaard",
    citation: "La vie n’est pas un problème à résoudre mais une réalité qui doit être vécue",
    oeuvre: "Traité du désespoir / Post-scriptum",
    explication: "Critique de l'intellectualisme abstrait hégélien : l'existence singulière s'éprouve dans l'angoisse et la foi vécue."
  },
  {
    numero: 17,
    auteur: "Baruch Spinoza",
    citation: "L’homme n’est pas un empire dans un empire",
    oeuvre: "Éthique, Partie III",
    explication: "L'être humain ne déroge pas aux lois universelles de la nature : il est soumis aux déterminismes psycho-physiques."
  },
  {
    numero: 18,
    auteur: "John Locke",
    citation: "La connaissance de l’homme ne peut pas s’étendre au-delà de son expérience propre",
    oeuvre: "Essai sur l’entendement humain",
    explication: "Empirisme fondamental : l'esprit est une table rase (tabula rasa) que seule l'expérience sensible vient féconder."
  },
  {
    numero: 19,
    auteur: "Karl Marx",
    citation: "Les philosophes n’ont fait qu’interpréter le monde, nous avons maintenant à le transformer",
    oeuvre: "Thèses sur Feuerbach (XI)",
    explication: "Primauté de la praxis révolutionnaire et du matérialisme historique sur la spéculation métaphysique stérile."
  },
  {
    numero: 20,
    auteur: "Thomas Hobbes",
    citation: "L’homme est un loup pour l’homme (Homo homini lupus)",
    oeuvre: "Léviathan",
    explication: "À l'état de nature sans État, la rivalité des désirs engendre la guerre de chacun contre chacun."
  },
  {
    numero: 21,
    auteur: "Épicure",
    citation: "La mort n’est rien pour nous",
    oeuvre: "Lettre à Ménécée",
    explication: "Tant que nous sommes là, la mort n'est pas ; et quand la mort est là, nous ne sommes plus : il est vain d'en avoir peur."
  },
  {
    numero: 22,
    auteur: "Épicure",
    citation: "Si tu n’es pas Socrate, tu dois vivre comme si tu voulais être Socrate",
    oeuvre: "Lettre à Ménécée",
    explication: "L'idéal de sagesse philosophique et d'ataraxie doit guider nos choix quotidiens vers la maîtrise des désirs."
  },
  {
    numero: 23,
    auteur: "David Hume",
    citation: "L’ego est une fiction (le moi comme faisceau de perceptions)",
    oeuvre: "Traité de la nature humaine",
    explication: "L'introspection ne rencontre jamais une substance spirituelle isolée ('moi'), mais seulement un flux continu de perceptions."
  },
  {
    numero: 24,
    auteur: "G.W.F. Hegel",
    citation: "Rien de grand ne s’est accompli dans le monde sans passion",
    oeuvre: "La Raison dans l'histoire",
    explication: "La ruse de la raison utilise l'énergie ardente et subjective des passions des grands hommes pour faire avancer l'histoire."
  },
  {
    numero: 25,
    auteur: "Jean-Paul Sartre",
    citation: "L’homme est condamné à être libre",
    oeuvre: "L’Existentialisme est un humanisme",
    explication: "L'existence précède l'essence : jeté dans le monde sans nature prédéfinie ni excuse, l'homme porte l'entière responsabilité de ses choix."
  },
  {
    numero: 26,
    auteur: "Blaise Pascal",
    citation: "L’homme n’est qu’un roseau, le plus faible de la nature, mais c’est un roseau pensant",
    oeuvre: "Pensées",
    explication: "Une vapeur ou une goutte d'eau suffit à le tuer, mais quand l'univers l'écraserait, l'homme serait plus noble que ce qui le tue car il sait qu'il meurt."
  },
  {
    numero: 27,
    auteur: "Blaise Pascal",
    citation: "Le cœur a ses raisons que la raison ne connaît point",
    oeuvre: "Pensées",
    explication: "La foi, l'amour et les premiers principes métaphysiques se saisissent par intuition cardiaque et non par déduction géométrique."
  },
  {
    numero: 28,
    auteur: "G.W. Leibniz",
    citation: "Pourquoi y a-t-il quelque chose plutôt que rien ?",
    oeuvre: "Principes de la nature et de la grâce / Monadologie",
    explication: "Question métaphysique fondamentale qui exige le principe de raison suffisante pour rendre compte de l'existence de l'univers."
  },
  {
    numero: 29,
    auteur: "Montesquieu",
    citation: "La liberté est le droit de faire tout ce que les lois permettent",
    oeuvre: "De l'esprit des lois",
    explication: "La liberté politique n'est pas la licence anarchique, mais la sécurité garantie par des lois justes limitant les abus de pouvoir."
  },
  {
    numero: 30,
    auteur: "Nicolas Machiavel",
    citation: "Tout n’est pas politique, mais la politique s’intéresse à tout",
    oeuvre: "Le Prince",
    explication: "Réalisme politique : l'art de gouverner et de maintenir l'État commande la gestion lucide des forces sociales."
  },
  {
    numero: 31,
    auteur: "Edmund Husserl",
    citation: "Toute conscience est conscience de quelque chose",
    oeuvre: "Méditations cartésiennes",
    explication: "L'intentionnalité : la conscience n'est pas un vase clos, mais une visée dynamique toujours tournée vers le monde."
  },
  {
    numero: 32,
    auteur: "Alexis de Tocqueville",
    citation: "Les peuples veulent l’égalité dans la liberté et, s’ils ne peuvent l’obtenir, ils la veulent encore dans l’esclavage",
    oeuvre: "De la démocratie en Amérique",
    explication: "La passion démocratique pour l'égalisation des conditions est plus forte et ardente que le goût de la liberté."
  },
  {
    numero: 33,
    auteur: "Arthur Schopenhauer",
    citation: "L’homme est un animal métaphysique",
    oeuvre: "Le Monde comme volonté et comme représentation",
    explication: "L'étonnement devant la mort, la maladie et la souffrance force l'homme à s'interroger sur l'énigme du monde."
  },
  {
    numero: 34,
    auteur: "Arthur Schopenhauer",
    citation: "La vie oscille, tel un pendule, de droite à gauche, de l’ennui à la souffrance",
    oeuvre: "Le Monde comme volonté et comme représentation",
    explication: "Le désir est manque douloureux ; sa satisfaction engendre immédiatement la satiété et l'ennui."
  },
  {
    numero: 35,
    auteur: "Épictète",
    citation: "N’attends pas que les événements arrivent comme tu le souhaites ; décide de vouloir ce qui arrive et tu seras heureux",
    oeuvre: "Manuel",
    explication: "Sagesse stoïcienne : distinguer ce qui dépend de nous (nos jugements) de ce qui n'en dépend pas (le cours du destin)."
  },
  {
    numero: 36,
    auteur: "Martin Heidegger",
    citation: "Le Dasein est un être des lointains",
    oeuvre: "Être et Temps",
    explication: "L'existence humaine (Dasein) se projette continuellement au-delà d'elle-même dans le souci du monde et l'être-pour-la-mort."
  },
  {
    numero: 37,
    auteur: "Simone de Beauvoir",
    citation: "On ne naît pas femme, on le devient",
    oeuvre: "Le Deuxième Sexe",
    explication: "La condition féminine n'est pas un destin biologique figé mais une construction historique, sociale et culturelle."
  },
  {
    numero: 38,
    auteur: "J.G. Fichte",
    citation: "L’homme ne devient homme que parmi les hommes",
    oeuvre: "La Destination de l'homme",
    explication: "L'intersubjectivité et l'éducation réciproque sont indispensables à l'éveil de la conscience de soi et de la moralité."
  },
  {
    numero: 39,
    auteur: "François Rabelais",
    citation: "Science sans conscience n’est que ruine de l’âme",
    oeuvre: "Pantagruel",
    explication: "Le développement des puissances techniques et des savoirs exige un contrôle éthique constant sous peine de désastre moral."
  },
  {
    numero: 40,
    auteur: "Alain",
    citation: "L’effort qu’on fait pour être heureux n’est jamais perdu",
    oeuvre: "Propos sur le bonheur",
    explication: "Le bonheur n'est pas un don passif de la chance, mais une victoire active de la volonté contre les passions tristes."
  }
];

export const SUJETS_TYPES_MAOUDE_REBOOT: SujetTraiteMaoude[] = [
  {
    id: "maoude-temps-echapper",
    numero: 1,
    intitule: "Est-il possible d’échapper au temps ?",
    type: "dissertation",
    problemeEtEnjeux: "La temporalité voue l'homme à la mort et à la finitude : sommes-nous condamnés à la passivité devant la fuite du temps ou pouvons-nous lui résister par la mémoire, l'art et la sagesse ?",
    planOuAxes: [
      {
        titreAxe: "I. L'homme ne peut pas échapper au temps (l'impuissance face à l'irréversibilité)",
        sousParties: [
          "A. L'homme est mortel : la finitude constitutive (Épicure, Lettre à Ménécée : le désir vain d'immortalité)",
          "B. L'homme est un être temporel qui subit le temps (Saint Augustin : tout l'être du temps est de passer ; Nietzsche : le fardeau de la mémoire sans oubli)"
        ],
        references: ["Épicure", "Saint Augustin", "Nietzsche"]
      },
      {
        titreAxe: "II. Il est possible de résister au passage du temps",
        sousParties: [
          "A. La mémoire affective et la réinterprétation du passé (Marcel Proust : le ressouvenir libérateur)",
          "B. Créer de l'immortalité potentielle par l'œuvre d'art (Hannah Arendt, La Crise de la culture : l'art comme point fixe défiant l'usure du monde)"
        ],
        references: ["Proust", "Hannah Arendt", "Bergson"]
      },
      {
        titreAxe: "III. Échapper à la terreur du temps par la lucidité éthique",
        sousParties: [
          "A. Dépasser le divertissement pascalien qui fuit lâchement la mort (Pascal, Pensées)",
          "B. Vivre pleinement le temps présent selon la sagesse d'Épicure et des stoïciens"
        ],
        references: ["Pascal", "Épicure", "Épictète"]
      }
    ],
    conclusionBilan: "S'il est impossible de suspendre l'écoulement physique du temps, l'homme échappe à sa tyrannie psychologique en surmontant la peur de la mort et en s'investissant dans la création esthétique et le présent vécu."
  },
  {
    id: "maoude-travail-divise",
    numero: 2,
    intitule: "Le travail divise-t-il les hommes ?",
    type: "dissertation",
    problemeEtEnjeux: "Le travail unit-il la communauté par la coopération et l'échange ou dresse-t-il les individus les uns contre les autres par la parcellisation technique et la lutte des classes ?",
    planOuAxes: [
      {
        titreAxe: "I. Le travail est une entreprise collective unificatrice",
        sousParties: [
          "A. Valeur civilisatrice du travail humain opposé à l'activité animale (Marx, Le Capital : l'architecte et l'abeille)",
          "B. Le travail fonde le lien social et la Cité (Platon, La République ; Aristote : valeur d'usage et d'échange)"
        ],
        references: ["Marx", "Platon", "Aristote"]
      },
      {
        titreAxe: "II. La division du travail engendre la division et l'exploitation des hommes",
        sousParties: [
          "A. Spécialisation et aliénation à la chaîne (Adam Smith : manufacture d'épingles vs Marx : chosification de l'ouvrier)",
          "B. L'antagonisme de classes et la concurrence impitoyable (Manifeste du parti communiste)"
        ],
        references: ["Adam Smith", "Karl Marx"]
      },
      {
        titreAxe: "III. Réinventer le travail comme vecteur d'émancipation partagée",
        sousParties: [
          "A. La solidarité internationale des producteurs et la conscience de classe",
          "B. Libérer du temps par la machine pour humaniser le labeur (Bergson : la machine bienfaitrice)"
        ],
        references: ["Marx", "Bergson", "Bernard Dadié"]
      }
    ],
    conclusionBilan: "Le travail n'est diviseur que sous des formes d'exploitation économique inégalitaires ; réorganisé selon la justice sociale, il demeure le ciment fondamental de la communauté humaine."
  },
  {
    id: "maoude-art-expliquer",
    numero: 3,
    intitule: "À quoi bon expliquer une œuvre d'art ?",
    type: "dissertation",
    problemeEtEnjeux: "L'œuvre d'art est-elle un objet opaque récalcitrant à l'analyse causale, ou bien l'interprétation ouvre-t-elle l'accès à un monde inépuisable de significations ?",
    planOuAxes: [
      {
        titreAxe: "I. On cherche à expliquer l'œuvre d'art pour réduire son opacité",
        sousParties: [
          "A. L'œuvre d'art se distingue des objets d'usage par sa gratuité (Kant : finalité sans fin, beauté libre)",
          "B. Tendance réductrice à chercher les causes psychologiques et techniques de l'artiste"
        ],
        references: ["Kant", "Freud"]
      },
      {
        titreAxe: "II. Il est vain et absurde d'expliquer causalement l'œuvre d'art",
        sousParties: [
          "A. L'œuvre est 'sans pourquoi' et échappe au processus vital (Hannah Arendt, La Crise de la culture)",
          "B. L'œuvre n'est pas un message codé à décrypter mais une manifestation de l'Esprit (Hegel, Esthétique ; Guernica de Picasso)"
        ],
        references: ["Hannah Arendt", "Hegel", "Picasso"]
      },
      {
        titreAxe: "III. Expliquer c'est interpréter sans jamais clore le sens",
        sousParties: [
          "A. L'artiste nous apprend à voir l'invisible du réel (Bergson, La Pensée et le Mouvant : Turner et Corot)",
          "B. La contemplation esthétique comme dialogue vivant et infini"
        ],
        references: ["Bergson", "Oscar Wilde", "Kant"]
      }
    ],
    conclusionBilan: "Expliquer l'art ne consiste pas à le réduire à une recette technique, mais à en approfondir l'énigme pour renouveler sans cesse notre contemplation du beau."
  },
  {
    id: "maoude-autrui-liberte",
    numero: 4,
    intitule: "Autrui est-il condition ou limite à ma liberté ?",
    type: "dissertation",
    problemeEtEnjeux: "La présence d'autrui m'exproprie-t-elle de mon monde en me chosifiant sous son regard, ou est-elle la condition primordiale de mon accession à la conscience et à la moralité ?",
    planOuAxes: [
      {
        titreAxe: "I. Autrui comme obstacle et limite manifeste à ma liberté",
        sousParties: [
          "A. Le regard d'autrui qui me chosifie et m'aliène (Sartre, Huis clos : 'L'enfer c'est les autres', L'Être et le néant : la honte)",
          "B. Le désir mimétique, la jalousie et la rivalité des convoitises (Hobbes : état de guerre ; Flaubert, Madame Bovary)",
          "C. La tentation du solipsisme et de l'isolement protecteur (Descartes, Schopenhauer)"
        ],
        references: ["Sartre", "Hobbes", "Schopenhauer", "Descartes"]
      },
      {
        titreAxe: "II. Autrui comme condition indispensable dans la société",
        sousParties: [
          "A. L'insociable sociabilité de l'homme (Kant, Idée d'une histoire universelle)",
          "B. La dialectique du maître et de l'esclave : la liberté conquise par la reconnaissance réciproque (Hegel)",
          "C. L'interdépendance sociale et la division du travail (Aristote, Platon)"
        ],
        references: ["Kant", "Hegel", "Aristote", "Platon"]
      },
      {
        titreAxe: "III. Autrui me permet d'accéder à ma véritable humanité",
        sousParties: [
          "A. Aider autrui à se libérer c'est libérer sa propre humanité (Lumières, Rousseau, Contrat social)",
          "B. Le visage d'autrui et l'impératif moral infini du respect (Levinas, Totalité et Infini ; Kant)",
          "C. Le dialogue et le langage comme communauté intersubjective vivante (Husserl, Merleau-Ponty)"
        ],
        references: ["Levinas", "Kant", "Rousseau", "Husserl"]
      }
    ],
    conclusionBilan: "Autrui limite la licence animale égoïste, mais il est la condition nécessaire et transcendante de la liberté civile, morale et intersubjective."
  },
  {
    id: "maoude-liberte-illusion",
    numero: 6,
    intitule: "La liberté est-elle une illusion ?",
    type: "dissertation",
    problemeEtEnjeux: "Le sentiment intérieur du libre arbitre résiste-t-il aux multiples déterminismes naturels, psychiques et sociaux mis en lumière par Spinoza, Marx et Freud ?",
    planOuAxes: [
      {
        titreAxe: "I. Le sentiment immédiat de notre liberté : la théorie du libre arbitre",
        sousParties: [
          "A. L'évidence première du choix volontaire selon Descartes (Principes de la philosophie, I, art. 39)",
          "B. L'expérience de la liberté d'indifférence (Buridan) et la tentative de l'acte gratuit (Gide, Les Caves du Vatican)"
        ],
        references: ["Descartes", "Buridan", "André Gide"]
      },
      {
        titreAxe: "II. La critique déterministe : la liberté comme illusion de l'orgueil",
        sousParties: [
          "A. L'homme n'est pas un empire dans un empire (Spinoza, Éthique : l'illusion de la pierre consciente)",
          "B. Le déterminisme social et économique (Marx : l'être social détermine la conscience ; Hugo)",
          "C. Le déterminisme psychique de l'inconscient (Freud, Introduction à la psychanalyse)"
        ],
        references: ["Spinoza", "Marx", "Freud", "Victor Hugo"]
      },
      {
        titreAxe: "III. La liberté comme conquête et autonomie de la volonté",
        sousParties: [
          "A. Se libérer de la tyrannie des passions par la raison socratique (Platon, Gorgias : les tonneaux percés de Calliclès)",
          "B. La liberté comme obéissance à la loi morale (Kant, Critique de la raison pratique : la liberté ratio essendi de la morale)",
          "C. L'engagement existentiel et la responsabilité absolue (Sartre : 'condamné à être libre')"
        ],
        references: ["Platon", "Kant", "Sartre", "Épictète"]
      }
    ],
    conclusionBilan: "Si la liberté immédiate et inconditionnée est une illusion naïve, la véritable liberté est une conquête rationnelle par laquelle l'homme transforme sa condition en s'affranchissant des servitudes intérieures et extérieures."
  }
];
