import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_4E_SVT_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 1 - LEÇON 1 : LA PUBERTÉ ET L'ADOLESCENCE
  // ========================================================
  {
    id: 'svt-4e-transformations-puberte-adolescence',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'La Reproduction humaine : De l\'enfance à l\'adolescence',
    lessonTitle: 'Les transformations du corps humain de l\'enfance à l\'adolescence : Puberté et sexualité responsable',
    objectifs: [
      'Identifier les signes morphologiques de la puberté (caractères sexuels secondaires) chez la fille et chez le garçon',
      'Identifier les transformations physiologiques (premières règles et éjaculations nocturnes) marquant la maturité sexuelle',
      'Identifier les transformations psychologiques et affectives à l\'adolescence (recherche d\'autonomie, désir de plaire, attirance)',
      'Définir la puberté comme étape marquant l\'aptitude biologique à procréer',
      'Promouvoir un comportement sexuel responsable : hygiène menstruelle, abstinence et prévention des grossesses précoces'
    ],
    fullCourseContent: `1. Les transformations morphologiques (Caractères sexuels secondaires) :
Entre 10 et 16 ans, le corps de l'enfant subit de profondes modifications anatomiques :
- Chez la jeune fille :
  * Développement des seins et de la glande mammaire.
  * Élargissement du bassin et arrondissement des hanches.
  * Apparition de la pilosité au niveau du pubis et sous les aisselles.
  * Croissance rapide de la taille et augmentation de la masse corporelle.
  * Accroissement des organes génitaux externes (vulve, lèvres).
- Chez le jeune garçon :
  * Développement de la musculature et élargissement des épaules.
  * Mue de la voix (la voix devient grave en raison du développement du larynx).
  * Apparition de la pomme d'Adam au cou.
  * Apparition des poils au pubis, sous les aisselles, sur le torse, ainsi que de la barbe et de la moustache.
  * Développement des organes génitaux externes (pénis et bourses/testicules).

2. Les transformations physiologiques :
- Elles traduisent la mise en activité et la maturation fonctionnelle des organes reproducteurs (gonades) :
  * Chez la jeune fille : Les ovaires commencent à ovuler et à sécréter des hormones. Cela déclenche l'apparition périodique des règles ou menstruations (saignements utérins mensuels d'environ 3 à 5 jours).
    - Exigence d'hygiène menstruelle : toilette intime quotidienne à l'eau propre, utilisation de serviettes hygiéniques propres changées régulièrement.
  * Chez le jeune garçon : Les testicules commencent à fabriquer des spermatozoïdes de façon continue. Cela se manifeste à l'adolescence par les premières éjaculations (souvent nocturnes et involontaires au cours du sommeil).

3. Les transformations psychologiques et comportementales :
- Recherche d'indépendance et d'affirmation de sa personnalité par rapport aux adultes.
- Tendance au repli sur soi ou au contraire besoin d'appartenance à un groupe de pairs (amis).
- Attention accrue portée à l'apparence physique et désir de plaire.
- Éveil des pulsions et de l'attirance affective et sexuelle vers l'autre sexe.

4. Définition de la puberté et comportement responsable :
- Définition : La puberté est l'ensemble des transformations morphologiques, physiologiques et psychologiques qui permettent le passage de l'enfance à l'adolescence et rendent l'organisme biologiquement apte à procréer.
- Responsabilité sexuelle :
  * Même si le corps devient biologiquement fertile, l'organisme n'a pas encore atteint sa pleine maturité physique et affective.
  * Les rapports sexuels précoces entraînent des risques graves : grossesses non désirées, interruption de scolarité, accouchements dystociques à risque vital pour la jeune fille et Infections Sexuellement Transmissibles (IST / VIH-SIDA).
  * La règle d'or recommandée au collège est l'ABSTINENCE.`,
    definitions: [
      {
        term: 'Puberté',
        definition: 'Période de transition de l\'enfance à l\'âge adulte marquée par l\'apparition des caractères sexuels secondaires et la capacité de reproduction.'
      },
      {
        term: 'Caractères sexuels secondaires',
        definition: 'Signes anatomiques extérieurs non directement liés aux organes génitaux qui distinguent l\'homme de la femme à la puberté.'
      },
      {
        term: 'Menstruations (règles)',
        definition: 'Écoulement sanguin périodique chez la femme provenant de l\'élimination de la muqueuse utérine en l\'absence de fécondation.'
      },
      {
        term: 'Éjaculation',
        definition: 'Expulsion de sperme contenant les spermatozoïdes par l\'orifice de l\'urètre du pénis.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Maturité physiologique',
        statement: 'L\'apparition des premières règles chez la fille et des premières éjaculations chez le garçon prouve que les gonades (ovaires et testicules) sont devenues fonctionnelles.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Classifier les transformations de la puberté',
        procedure: '1. Identifier les changements de forme du corps (seins, voix, épaules, poils) -> transformations MORPHOLOGIQUES.\n2. Identifier le fonctionnement des organes (règles, éjaculation) -> transformations PHYSIOLOGIQUES.\n3. Identifier les attitudes d\'esprit (désir de plaire, attirance) -> transformations PSYCHOLOGIQUES.',
        tip: 'Morpho = forme, Physio = fonctionnement biologique.'
      }
    ],
    examples: [
      {
        statement: 'Koffi, 15 ans, constate que ses épaules s\'élargissent et qu\'il a des émissions nocturnes de liquide visqueux. Que lui arrive-t-il ?',
        solution: 'Koffi traverse la puberté. L\'élargissement des épaules est une transformation morphologique et l\'éjaculation nocturne est une transformation physiologique normale marquant la maturité de ses testicules.'
      }
    ],
    exercises: [
      {
        question: 'Classe les signes suivants en morphologiques ou physiologiques : mue de la voix, premières règles, élargissement du bassin, éjaculation.',
        correction: 'Morphologiques : mue de la voix, élargissement du bassin. Physiologiques : premières règles, éjaculation.'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne 4 de Daloa, des élèves de 4ème constatent des changements chez leurs camarades (musculature et voix grave chez les garçons, seins et hanches développés chez les filles). Une élève a été troublée par l\'apparition de sang.',
      instructions: [
        '1. Nomme la période biologique que traversent ces élèves.',
        '2. Classe les transformations citées en catégories adaptées.',
        '3. Quel comportement sexuel responsable ces adolescents doivent-ils adopter ?'
      ],
      solutionGuide: '1. Ils traversent la puberté (adolescence).\n2. Musculature, voix grave, poitrine, hanches = transformations morphologiques (caractères sexuels secondaires). Apparition des règles = transformation physiologique.\n3. Ils doivent adopter l\'abstinence sexuelle pour se consacrer à leurs études et éviter les grossesses précoces et les IST.'
    },
    examTraps: [
      'Confondre caractère sexuel primaire (présence des organes génitaux dès la naissance) et secondaire (seins, barbe, voix à la puberté).',
      'Considérer les éjaculations nocturnes comme une maladie (c\'est un phénomène physiologique tout à fait normal).'
    ],
    quickMemo: 'Puberté = morphologique (voix, seins, poils) + physiologique (règles, sperme) + psychologique (autonomie). Règle d\'or : Abstinence.',
    keywords: ['puberte', 'adolescence', 'caracteres sexuels secondaires', 'menstruation', 'ejaculation', 'abstinence', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 1 - LEÇON 2 : REPRODUCTION ET FÉCONDATION
  // ========================================================
  {
    id: 'svt-4e-reproduction-fecondation-devenir-cellule-oeuf',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'La Reproduction humaine : Devenir des cellules sexuelles',
    lessonTitle: 'Appareils reproducteurs, gamètes, fécondation, développement du zygote et grossesse',
    objectifs: [
      'Annoter et décrire l\'appareil reproducteur de l\'homme et de la femme',
      'Identifier les gamètes (spermatozoïde à tête/flagelle et ovule sphérique)',
      'Expliquer les étapes de la fécondation dans les trompes de Fallope (rencontre, pénétration, fusion des noyaux)',
      'Décrire le devenir de la cellule-œuf (migration, divisions successives en 2, 4, 8 cellules, nidation utérine)',
      'Distinguer embryon et fœtus (à partir du 3e mois) et sensibiliser aux conséquences des grossesses précoces'
    ],
    fullCourseContent: `1. Les appareils reproducteurs de l'Homme et de la Femme :
- Appareil reproducteur masculin :
  * Les 2 testicules (gonades mâles) : logés dans les bourses, produisent les spermatozoïdes de façon continue et l'hormone mâle (testostérone).
  * Les voies génitales : épididymes (stockage et maturation), canaux déférents (spermiductes) et urètre (conduit commun de l'urine et du sperme).
  * Les glandes annexes : vésicules séminales et prostate (produisent le liquide séminal nourrissant et véhiculant les spermatozoïdes pour former le sperme).
  * L'organe copulateur : le pénis.
- Appareil reproducteur féminin :
  * Les 2 ovaires (gonades femelles) : produisent chaque mois de façon alternée un ovule mûr.
  * Les voies génitales : trompes de Fallope (oviductes avec pavillons captant l'ovule), l'utérus (organe creux à paroi musculaire où se développera l'embryon) et le vagin (conduit d'accouplement).
  * Organes externes : la vulve (grandes et petites lèvres, clitoris) et l'hymen.

2. Les Cellules reproductrices (Gamètes) :
- Le spermatozoïde : petite cellule très mobile munie d'une tête (renfermant le noyau génétique), d'une pièce intermédiaire (énergie) et d'un flagelle (queue motrice).
- L'ovule : grosse cellule immobile et sphérique, pourvue d'un noyau, d'un cytoplasme riche en réserves nutritives et d'une membrane protectrice.

3. La Fécondation :
- Lieu : La fécondation a lieu dans le tiers supérieur de la trompe de Fallope.
- Les 3 étapes chronologiques de la fécondation :
  1. Rencontre des gamètes : Lors d'un rapport sexuel, des millions de spermatozoïdes sont déposés dans le vagin, traversent le col de l'utérus et remontent vers les trompes où ils entourent l'ovule.
  2. Pénétration : Un seul spermatozoïde réussit à percer l'enveloppe de l'ovule par sa tête ; la membrane de l'ovule se verrouille immédiatement pour empêcher les autres d'entrer.
  3. Fusion des deux noyaux (Caryogamie) : Le noyau mâle et le noyau femelle fusionnent pour former une cellule unique : la cellule-œuf ou zygote.

4. Devenir de la cellule-œuf et Grossesse :
- Migration et divisions : Dès sa formation, la cellule-œuf descend le long de la trompe vers l'utérus tout en se divisant activement par mitose (2, 4, 8, 16 cellules...).
- Nidation (vers le 6e-7e jour) : La petite masse de cellules devenue embryon s'implante et s'enfonce dans la muqueuse épaissie de l'utérus : c'est la nidation, qui marque le début officiel de la grossesse.
- Embryon -> Fœtus :
  * Durant les 2 premiers mois : c'est le stade embryonnaire (mise en place des organes).
  * À partir du 3e mois (9e semaine) : tous les organes sont formés, l'être prend forme humaine et est désormais appelé fœtus jusqu'à l'accouchement (au terme de 9 mois).
- Grossesses précoces en milieu scolaire :
  * Tout rapport non protégé peut féconder un ovule dès la puberté.
  * Conséquences dramatiques : abandon des études, complications médicales graves (césariennes, fistules obstétricales). Protection absolue : abstinence ou utilisation du préservatif.`,
    definitions: [
      {
        term: 'Fécondation',
        definition: 'Union d\'un gamète mâle (spermatozoïde) et d\'un gamète femelle (ovule) aboutissant à la fusion de leurs noyaux pour former une cellule-œuf.'
      },
      {
        term: 'Zygote (cellule-œuf)',
        definition: 'Première cellule diploïde issue de la fécondation, à l\'origine d\'un nouvel individu.'
      },
      {
        term: 'Nidation',
        definition: 'Fixation et implantation de l\'embryon dans la muqueuse de l\'utérus environ une semaine après la fécondation.'
      },
      {
        term: 'Fœtus',
        definition: 'Nom donné au futur bébé à partir du 3e mois de gestation, lorsque tous ses organes sont ébauchés et qu\'il présente une forme humaine.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Monospermie',
        statement: 'Un seul spermatozoïde féconde l\'ovule ; la membrane de l\'ovule devient aussitôt imperméable aux autres spermatozoïdes.'
      },
      {
        name: 'Lieu de fécondation',
        statement: 'La fécondation s\'effectue toujours dans la trompe de Fallope et non dans l\'utérus.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Chronologie de la reproduction humaine',
        procedure: '1. Émission des gamètes (ovulation et éjaculation).\n2. Rencontre et pénétration d\'un spermatozoïde dans l\'ovule au niveau de la trompe.\n3. Fusion des noyaux -> formation du zygote.\n4. Migration tubaire avec divisions cellulaires.\n5. Nidation dans la muqueuse de l\'utérus au bout d\'environ 6 jours.',
        tip: 'Mémoriser : Trompe (fécondation) -> Utérus (nidation et développement).'
      }
    ],
    examples: [
      {
        statement: 'À quel moment précis l\'embryon devient-il un fœtus ?',
        solution: 'À la fin du deuxième mois (début du troisième mois de grossesse), lorsque tous les organes sont formés et que la silhouette humaine est reconnaissable.'
      }
    ],
    exercises: [
      {
        question: 'Range dans l\'ordre chronologique : A. Pénétration du spermatozoïde ; B. Nidation ; C. Fusion des noyaux ; D. Migration.',
        correction: 'Ordre : A (Pénétration) -> C (Fusion des noyaux) -> D (Migration avec divisions) -> B (Nidation dans l\'utérus).'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne de Bondoukou, un débat est organisé sur les grossesses précoces. Des élèves de 4ème veulent expliquer précisément le cheminement des cellules sexuelles depuis l\'accouplement jusqu\'à l\'implantation.',
      instructions: [
        '1. Décris le trajet des spermatozoïdes depuis le vagin jusqu\'au lieu de fécondation.',
        '2. Nomme le lieu précis où se produit la fécondation.',
        '3. Explique en quoi consiste la nidation et ses conséquences scolaires si une jeune fille n\'a pas pratiqué l\'abstinence.'
      ],
      solutionGuide: '1. Les spermatozoïdes déposés au fond du vagin remontent à travers le col de l\'utérus, traversent la cavité utérine et atteignent le tiers supérieur des trompes de Fallope.\n2. La fécondation se produit dans l\'une des deux trompes de Fallope.\n3. La nidation est la fixation de l\'embryon dans la paroi utérine, débutant la grossesse. Chez une collégienne de moins de 18 ans, cela provoque une grossesse précoce avec risques d\'échec scolaire, de rejet familial et de complications médicales.'
    },
    examTraps: [
      'Penser que la fécondation a lieu dans l\'utérus (elle a lieu dans la trompe de Fallope ; c\'est la nidation qui a lieu dans l\'utérus).',
      'Confondre embryon (les 2 premiers mois) et fœtus (à partir du 3e mois).'
    ],
    quickMemo: 'Fécondation = trompe (ovule + spermatozoïde -> zygote). Nidation = utérus (J+6). Fœtus = à partir du 3e mois.',
    keywords: ['fecondation', 'spermatozoide', 'ovule', 'zygote', 'nidation', 'uterus', 'embryon', 'foetus', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 2 - LEÇON 1 : FORMATION DES ROCHES ENDOGÈNES
  // ========================================================
  {
    id: 'svt-4e-formation-roches-endogenes',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Roches endogènes : Formation',
    lessonTitle: 'Formation des roches magmatiques : Minéraux essentiels, vitesse de refroidissement et textures',
    objectifs: [
      'Déterminer les caractéristiques des roches endogènes : teinte, cohésion et taille des minéraux',
      'Identifier les minéraux essentiels du granite (quartz, feldspath, mica) et du basalte (pyroxène, olivine, feldspath)',
      'Définir les notions de cristal, minéral et texture d\'une roche',
      'Interpréter l\'expérience de fusion et refroidissement du bichromate de potassium (glace, air ambiant, bain-marie)',
      'Relier la vitesse et la profondeur de refroidissement du magma aux textures : vitreuse/microlitique (surface), microgrenue (mi-profondeur), grenue/pegmatitique (profondeur)'
    ],
    fullCourseContent: `1. Caractéristiques des roches endogènes :
- Définition : Les roches endogènes (ou roches magmatiques) se forment à l'intérieur de la Terre par refroidissement et solidification d'un magma (silicates fondus à haute température et sous pression).
- Comparaison des principaux échantillons :
  * Le Granite : roche cohérente (compacte), teinte grisâtre claire, minéraux visibles à l'œil nu (taille de grains de sable) -> texture GRENUE.
  * La Pegmatite : roche cohérente, teinte blanchâtre/rosâtre, très gros cristaux centimétriques bien visibles -> texture PEGMATITIQUE ou MACROGRENUE.
  * Le Microgranite : roche cohérente, cristaux minuscules (< 1 mm) -> texture MICROGRENUE.
  * Le Basalte : roche cohérente, teinte sombre (noire à gris foncé), pâte amorphe ou cristaux microscopiques non individualisés à l'œil nu -> texture MICROLITIQUE ou VITREUSE.

2. Les minéraux des roches endogènes :
- Définition d'un minéral : Corps solide naturel et inorganique possédant une composition chimique et une structure cristalline bien définies.
- Minéraux essentiels du granite et de la pegmatite :
  * Le Quartz : minéral translucide, grisâtre à blanchâtre, à éclat gras (très dur, raye le verre).
  * Le Feldspath : minéral opaque, blanc ou rose saumon, à faces planes miroitantes.
  * Le Mica : minéral brillant sous forme de feuillets (mica noir ou biotite, mica blanc ou moscovite).
- Minéraux du basalte : Feldspaths plagioclases, pyroxènes (noirs), olivine (vert péridot).

3. Expérience analogique au laboratoire (Bichromate de potassium) :
On fond du bichromate de potassium (ou du soufre) puis on le fait refroidir dans 3 conditions :
- Condition 1 (Dans la glace à 0°C) : Refroidissement brutal/très rapide. Les cristaux n'ont pas le temps de s'organiser : obtention d'une pâte amorphe sans cristaux visibles (Texture vitreuse).
- Condition 2 (À température ambiante à 25°C) : Refroidissement modérément rapide. Formation de petits cristaux de taille moyenne (Texture microlitique).
- Condition 3 (Au bain-marie chaud à 60°C) : Refroidissement très lent. Les atomes ont tout le temps de s'assembler géométriquement en grands cristaux réguliers (Texture grenue).

4. Mode de formation des roches dans la nature :
- Ascension du magma :
  * En surface (éruption volcanique à 0 km) : Refroidissement brutal au contact de l'air ou de l'eau -> roches volcaniques à texture vitreuse ou microlitique (ex : le basalte, l'obsidienne).
  * À mi-profondeur (filons, failles vers 5-10 km) : Refroidissement intermédiaire -> roches à texture microgrenue (ex : le microgranite).
  * En grande profondeur (chambre magmatique plutonique vers 20-30 km) : Refroidissement très lent et sous forte pression -> roches plutoniques à texture grenue (ex : le granite) ou pegmatitique (ex : pegmatite).`,
    definitions: [
      {
        term: 'Roche endogène (magmatique)',
        definition: 'Roche issue du refroidissement et de la solidification d\'un magma fondu d\'origine profonde.'
      },
      {
        term: 'Minéral',
        definition: 'Substance inorganique naturelle homogène possédant une structure chimique et cristallographique définie.'
      },
      {
        term: 'Texture d\'une roche',
        definition: 'Agencement géométrique et dimension relative des minéraux constituant la roche.'
      },
      {
        term: 'Texture grenue',
        definition: 'Texture où tous les minéraux sont bien cristallisés et visibles à l\'œil nu, formée par refroidissement très lent en profondeur.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la cristallisation magmatique',
        statement: 'Plus le refroidissement du magma est lent (en profondeur), plus les cristaux formés sont gros et réguliers.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la profondeur de formation d\'une roche magmatique',
        procedure: '1. Observer la taille des cristaux à l\'œil nu et à la loupe.\n2. Si les grains sont invisibles ou microscopiques noyés dans du verre -> texture microlitique/vitreuse -> roche volcanique de surface (refroidissement rapide).\n3. Si les cristaux sont de taille moyenne bien visibles -> texture grenue -> roche plutonique de profondeur (refroidissement lent).\n4. Si les cristaux sont géants (> 1 cm) -> texture pegmatitique -> très grande profondeur.',
        tip: 'Granite = grenue = profondeur. Basalte = microlitique = surface.'
      }
    ],
    examples: [
      {
        statement: 'Quels sont les 3 minéraux essentiels du granite ?',
        solution: 'Le quartz (éclat gras), le feldspath (faces miroitantes blanches ou roses) et le mica (feuillets brillants noirs ou blancs).'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque texture au milieu de refroidissement du magma : A. Vitreuse ; B. Grenue ; C. Microgrenue. (1. Surface ; 2. Mi-profondeur ; 3. Grande profondeur).',
        correction: 'A (Vitreuse) -> 1 (Surface) ; B (Grenue) -> 3 (Grande profondeur) ; C (Microgrenue) -> 2 (Mi-profondeur).'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une sortie géologique à la carrière du Km 12 près de Daloa, des élèves découvrent des blocs de granite gris clair à gros grains et des morceaux de basalte noir très compact sans grains visibles.',
      instructions: [
        '1. Indique la texture du granite et celle du basalte.',
        '2. Nomme les minéraux essentiels visibles dans le granite.',
        '3. Explique la différence de texture entre ces deux roches d\'après la vitesse de refroidissement de leur magma.'
      ],
      solutionGuide: '1. Le granite a une texture grenue ; le basalte a une texture microlitique.\n2. Les minéraux essentiels du granite sont le quartz, le feldspath et le mica.\n3. Le granite provient d\'un magma ayant refroidi très lentement en profondeur, ce qui a laissé le temps aux cristaux de grandir. Le basalte provient d\'une lave refroidie rapidement en surface, ne permettant pas la croissance des cristaux.'
    },
    examTraps: [
      'Croire que le basalte et le granite sont formés à la même profondeur.',
      'Oublier que le quartz ne s\'altère pas chimiquement contrairement au feldspath et au mica.'
    ],
    quickMemo: 'Refroidissement lent en profondeur = texture grenue (granite). Refroidissement rapide en surface = texture microlitique (basalte).',
    keywords: ['roches endogenes', 'magma', 'granite', 'basalte', 'texture grenue', 'quartz', 'feldspath', 'mica', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 2 - LEÇON 2 : DÉGRADATION DES ROCHES ENDOGÈNES
  // ========================================================
  {
    id: 'svt-4e-degradation-roches-endogenes-chaos-arene',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Roches endogènes : Dégradation',
    lessonTitle: 'Dégradation du massif granitique : Chaos granitique, arène, altération chimique et mécanique',
    objectifs: [
      'Décrire les 4 étapes de dégradation d\'un massif granitique (fissures, élargissement, arène, chaos)',
      'Classer dans l\'ordre chronologique les schémas de la formation du chaos granitique',
      'Expliquer le mécanisme d\'altération : perte de cohésion, passage de l\'état imperméable à perméable, changement de teinte (apparition de la rouille)',
      'Identifier le mode d\'action des agents d\'altération : eau de pluie chargée de CO2, chocs thermiques, racines des végétaux',
      'Identifier les produits finaux d\'altération du granite : sable, argiles, oxydes de fer et ions solubles'
    ],
    fullCourseContent: `1. Les étapes de la dégradation d'un massif rocheux (Chaos et Arène) :
Sous l'action conjuguée du climat et des êtres vivants, un massif de granite sain et massif se dégrade en surface selon un ordre immuable :
- Étape 1 : Affleurement et fissuration initiale : Le massif rocheux dénudé est parcouru par un réseau de fentes appelées diaclases ou fissures.
- Étape 2 : Élargissement des fissures et altération : L'eau de pluie et les racines s'infiltrent dans les fissures, les élargissent et décomposent chimiquement la roche sur les bords. Les angles vifs des blocs s'arrondissent.
- Étape 3 : Formation de l'arène granitique : La roche décomposée friable se désagrège sur place en un sable grossier appelé l'arène granitique, qui comble les espaces entre les blocs arrondis.
- Étape 4 : Dégagement et formation du chaos granitique : Les eaux de ruissellement et d'érosion emportent l'arène granitique meuble, laissant à l'air libre un empilement spectaculaire de boules et blocs arrondis appelé chaos granitique (paysages typiques de Man et de Boundiali).

2. Mécanisme de l'altération de la roche :
- Modification des propriétés physiques :
  * Le granite sain (grisâtre, très cohérent, dur et imperméable) devient un granite altéré (jaunâtre ou rougeâtre, friable, s'effritant sous les doigts, poreux et perméable).
  * L'altération finale produit l'arène granitique (roche meuble).
- Modification de la teinte : Le jaunissement/rougissement est dû à l'apparition d'oxydes de fer (rouille) provenant de l'oxydation du fer libéré par la décomposition du mica noir.

3. Mode d'action des agents d'altération :
- Altération mécanique / physique :
  * Les variations brusques de température (thermoclastie) : alternance chaleur intense le jour et fraîcheur la nuit dilatent et contractent inégalement les minéraux, provoquant l'éclatement et la fissuration de la roche.
  * Les racines des végétaux : s'insinuent dans les micro-fissures et exercent une pression considérable en grossissant, ce qui élargit les blocs.
- Altération chimique :
  * L'eau de pluie chargée de dioxyde de carbone (CO2) et de dioxygène (O2) est un solvant très agressif :
    - Le feldspath s'hydrolyse pour donner des argiles blanches (kaolinite) et des ions solubles.
    - Le mica noir se décompose en argiles et libère des oxydes de fer (rouille).
    - Le quartz, chimiquement inerte et inaltérable, est simplement libéré sous forme de grains de sable quartzeux.

4. Produits finaux d'altération :
- L'altération complète d'un massif de granite donne naissance au sable, aux argiles, aux oxydes de fer et aux éléments solubles qui formeront la composante minérale des sols.`,
    definitions: [
      {
        term: 'Diaclase',
        definition: 'Fissure naturelle dans une roche sans déplacement relatif des compartiments.'
      },
      {
        term: 'Arène granitique',
        definition: 'Sable grossier issu de l\'altération sur place des minéraux du granite (quartz, argiles, micas dégradés).'
      },
      {
        term: 'Chaos granitique',
        definition: 'Amas spectaculaire de blocs et boules de granite déchaussés par le départ de l\'arène sous l\'action des pluies.'
      },
      {
        term: 'Altération chimique',
        definition: 'Décomposition des minéraux de la roche par hydrolyse au contact de l\'eau de pluie chargée de CO2.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Devenir des minéraux lors de l\'altération',
        statement: 'Quartz -> Sable (inaltéré) ; Feldspath -> Argile blanche ; Mica -> Argile + Oxyde de fer rouille.'
      },
      {
        name: 'Chronologie de dégradation',
        statement: 'Massif sain -> Fissuration (diaclases) -> Élargissement -> Arène granitique -> Chaos granitique.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer la formation d\'un chaos granitique',
        procedure: '1. Expliquer la pénétration de l\'eau et des racines dans les diaclases.\n2. Décrire la décomposition chimique du feldspath et du mica le long des fissures.\n3. Mentionner l\'arrondissement des blocs et la formation de l\'arène granitique.\n4. Conclure par le lessivage de l\'arène par les pluies, mettant à nu l\'amas de boules rocheuses.',
        tip: 'Le quartz ne pourrit pas : il devient le sable de l\'arène.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi le granite altéré prend-il une couleur rouille ?',
        solution: 'Le mica noir contient des atomes de fer. En se décomposant chimiquement sous l\'action de l\'eau oxygénée, ce fer s\'oxyde en oxydes de fer (rouille), donnant une teinte jaunâtre à rougeâtre.'
      }
    ],
    exercises: [
      {
        question: 'Parmi les trois minéraux du granite (quartz, feldspath, mica), lequel reste inaltéré ? Que devient-il ?',
        correction: 'Le quartz reste totalement inaltéré chimiquement. Il se détache sous forme de grains solides et constitue le sable.'
      }
    ],
    evaluationSituation: {
      context: 'Au pied des massifs rocheux de la ville de Man, des élèves observent un chaos de boules de granite entourées d\'un sable grossier jaunâtre. Ils se demandent comment ce paysage s\'est formé.',
      instructions: [
        '1. Classe dans l\'ordre chronologique : formation du chaos, élargissement des fissures, apparition des diaclases, formation de l\'arène.',
        '2. Nomme les trois agents d\'altération responsables.',
        '3. Précise les produits finaux issus de cette dégradation.'
      ],
      solutionGuide: '1. Ordre chronologique : Apparition des diaclases -> Élargissement des fissures -> Formation de l\'arène granitique -> Formation du chaos granitique.\n2. Les 3 agents : l\'eau de pluie chargée de CO2, les variations brusques de température et les racines des végétaux.\n3. Produits finaux : le sable (quartz inaltéré), les argiles (décomposition du feldspath et du mica), les oxydes de fer et les ions solubles.'
    },
    examTraps: [
      'Penser que le chaos se forme avant l\'arène (l\'arène se forme d\'abord, puis son évacuation par l\'eau dégage le chaos).',
      'Oublier que le quartz ne s\'altère pas chimiquement.'
    ],
    quickMemo: 'Diaclases -> Arène granitique -> Chaos granitique. Quartz = sable, Feldspath = argile, Mica = rouille. Eau + T° + racines.',
    keywords: ['degradation roches', 'chaos granitique', 'arene granitique', 'diaclases', 'alteration chimique', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 3 - LEÇON 1 : FORMATION DU SOL ET PROFILS
  // ========================================================
  {
    id: 'svt-4e-formation-profil-sol-horizons',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Sols : Formation et Caractéristiques',
    lessonTitle: 'Formation des sols : Profil, horizons superposés (A, B, C), constituants organiques et minéraux',
    objectifs: [
      'Définir et distinguer le sol agronomique (couche superficielle cultivable) et le sol géologique (ensemble des horizons)',
      'Décrire le profil d\'un sol évolué et caractériser les horizons A, B et C',
      'Identifier les constituants minéraux (issus de l\'altération de la roche-mère) et organiques (litière, humus)',
      'Expliquer les mécanismes de mise en place et d\'évolution du sol'
    ],
    fullCourseContent: `1. Définition du sol :
- Le Sol géologique : Ensemble des couches ou horizons meubles superposés reposant sur la roche-mère inaltérée, résultant de l'altération de cette roche et de l'activité biologique.
- Le Sol agronomique : Couche très superficielle, meuble, riche en matières organiques et minérales, cultivable et essentielle pour l'enracinement et la nutrition des cultures.

2. Le profil d'un sol évolué et ses horizons :
Une coupe verticale de terrain montre une succession de couches horizontales appelées horizons, formant le profil du sol :
- Horizon A (Horizon superficiel ou humifère) :
  * Couleur sombre (brun foncé à noire) en raison de la présence de matières organiques (litière de feuilles mortes, humus).
  * Contient les êtres vivants du sol (vers de terre, fourmis, termites, champignons, bactéries) et les racines.
- Horizon B (Horizon intermédiaire ou d'accumulation) :
  * Situé sous l'horizon A, plus pauvre en humus, de teinte plus claire (ocre, rouge ou jaune).
  * Essentiellement constitué d'éléments minéraux fins (argiles, oxydes de fer, sels minéraux) entraînés depuis la surface par l'eau de percolation (lessivage).
- Horizon C (Horizon d'altération de la roche-mère) :
  * Couche la plus profonde, en contact direct avec la roche-mère sous-jacente.
  * Composé de blocs et fragments de roche-mère en cours de décomposition mécanique et chimique.

3. Les deux types de constituants du sol :
- Constituants organiques : Débris végétaux (feuilles mortes, brindilles, racines) et animaux en décomposition formant la litière, transformée par les décomposeurs en humus.
- Constituants minéraux : Cailloux, graviers, sables (grossier et fin) et argiles provenant de l'altération chimique et mécanique de la roche-mère.
- Le sol est donc une entité vivante résultant de la rencontre et de la combinaison étroite de la matière minérale venue du sous-sol et de la matière organique venue de la surface.`,
    definitions: [
      {
        term: 'Profil d\'un sol',
        definition: 'Vue en coupe verticale d\'un sol montrant la superposition des différents horizons depuis la surface jusqu\'à la roche-mère.'
      },
      {
        term: 'Horizon',
        definition: 'Couche homogène de sol parallèle à la surface, caractérisée par sa couleur, sa texture et sa composition.'
      },
      {
        term: 'Sol agronomique',
        definition: 'Partie superficielle arable et meuble du sol utilisée par l\'agriculture pour nourrir les plantes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Constitution mixte du sol',
        statement: 'Le sol est obligatoirement composé d\'un mélange de constituants minéraux (altération rocheuse) et de constituants organiques (humus).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les horizons sur une coupe de sol',
        procedure: '1. Repérer la couche supérieure foncée avec litière et racines -> Horizon A.\n2. Repérer la couche intermédiaire minérale plus claire -> Horizon B.\n3. Repérer la couche profonde faite de fragments rocheux -> Horizon C.\n4. La roche saine continue tout au fond est la roche-mère.',
        tip: 'L\'ordre de haut en bas est toujours : A -> B -> C -> Roche-mère.'
      }
    ],
    examples: [
      {
        statement: 'Quelle différence existe-t-il entre la litière et l\'arène ?',
        solution: 'La litière est composée exclusivement de matière organique en surface, tandis que l\'arène est purement minérale (sable et argile) issue de la roche.'
      }
    ],
    exercises: [
      {
        question: 'D\'où proviennent respectivement les constituants minéraux et les constituants organiques du sol ?',
        correction: 'Les constituants minéraux proviennent de l\'altération de la roche-mère en profondeur. Les constituants organiques proviennent de la décomposition des êtres vivants (faune et flore) en surface.'
      }
    ],
    evaluationSituation: {
      context: 'Des élèves de 4ème de Kokumbo creusent une tranchée pour planter des arbres. Ils observent une première couche noirâtre de 20 cm pleine de racines et débris, puis une couche rouge argileuse, puis des cailloux anguleux reposant sur un socle rocheux.',
      instructions: [
        '1. Nomme les trois horizons observés de haut en bas.',
        '2. Nomme le schéma d\'ensemble de cette coupe verticale.',
        '3. Distingue le sol agronomique du sol géologique.'
      ],
      solutionGuide: '1. Couche noirâtre = Horizon A ; couche rouge = Horizon B ; cailloux sur socle = Horizon C.\n2. Cette coupe s\'appelle le profil du sol.\n3. Le sol agronomique est l\'horizon supérieur A cultivable riche en humus ; le sol géologique représente l\'ensemble complet des horizons A, B et C jusqu\'à la roche-mère.'
    },
    examTraps: [
      'Confondre horizon (une couche horizontale) et profil (l\'ensemble de la coupe verticale).',
      'Oublier que la matière minérale vient du bas (roche) et la matière organique du haut (végétaux).'
    ],
    quickMemo: 'Profil = coupe verticale. Horizon A = sombre, humus. Horizon B = minéral intermédiaire. Horizon C = roche-mère altérée.',
    keywords: ['profil du sol', 'horizon A B C', 'sol agronomique', 'sol geologique', 'litiere', 'humus', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 3 - LEÇON 2 : TEXTURES DES SOLS ET GRANULOMÉTRIE
  // ========================================================
  {
    id: 'svt-4e-texture-sol-granulometrie',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Sols : Textures et Caractéristiques',
    lessonTitle: 'Détermination de la texture du sol : Analyse granulométrique, calculs de pourcentages et diagramme',
    objectifs: [
      'Définir la texture d\'un sol comme la proportion relative de ses particules minérales (sable, limon, argile)',
      'Décrire le protocole d\'une analyse granulométrique par tamisage (destruction matière organique à l\'eau oxygénée, séchage, colonne de tamis)',
      'Calculer les pourcentages massiques de chaque fraction minérale : % = (masse fraction / masse totale) × 100',
      'Construire et interpréter des histogrammes de composition granulométrique',
      'Classer les sols selon leur texture dominante (sableuse, argileuse, limoneuse, mixte/équilibrée) et utiliser le triangle des textures'
    ],
    fullCourseContent: `1. Notion de texture d'un sol :
- Définition : La texture d'un sol est déterminée par la composition granulométrique de sa fraction minérale, c'est-à-dire par les proportions relatives des particules solides classées selon leur diamètre :
  * Sables (grossier : 2 mm à 0,2 mm ; fin : 0,2 mm à 0,02 mm).
  * Limons (0,02 mm à 0,002 mm).
  * Argiles (particules microscopiques < 0,002 mm).

2. Méthode expérimentale : L'Analyse granulométrique :
- Étape 1 : Prélèvement de 500 g de terre, séchage au labogaz.
- Étape 2 : Destruction de la matière organique par lavage à l'eau oxygénée (H2O2) et élimination des gros cailloux.
- Étape 3 : Prélèvement précis d'un échantillon sec (généralement 100 g ou 200 g).
- Étape 4 : Séparation des particules par agitation mécanique à travers une colonne de tamis de mailles décroissantes.
- Étape 5 : Pesée de chaque fraction recueillie sur chaque tamis.

3. Calcul des proportions (Pourcentages massiques) :
- Formule fondamentale :
  Pourcentage (%) d'une fraction = (Masse de la fraction en g / Masse totale du sol en g) × 100.
- Exemple pour un sol de 200 g contenant 96 g d'argile, 60 g de limon et 44 g de sable :
  * % Argile = (96 / 200) × 100 = 48 %.
  * % Limon = (60 / 200) × 100 = 30 %.
  * % Sable = (44 / 200) × 100 = 22 %.
  * Somme des pourcentages : 48 + 30 + 22 = 100 %.

4. Les différentes textures de sol :
- Texture sableuse : La fraction sableuse est dominante (> 50-60%). Sol perméable, filtrant, sec et léger.
- Texture argileuse : La fraction argileuse est dominante (> 25-40%). Sol lourd, compact, plastique et imperméable quand il est mouillé.
- Texture limoneuse : La fraction de limon est dominante. Sol battant, sensible à l'érosion.
- Textures intermédiaires et équilibrées : Sol limono-sableux, limono-argileux, ou texture mixte/équilibrée (idéale pour l'agriculture, associant aération par le sable, fertilité par le limon et rétention d'eau par l'argile).

5. Le Diagramme (ou Triangle) des textures :
- Triangle équilatéral dont les 3 côtés représentent les échelles de 0 à 100% en Argile, Limon et Sable.
- L'intersection des 3 droites menées parallèlement aux côtés permet de lire avec précision la dénomination agronomique de la texture.`,
    definitions: [
      {
        term: 'Texture d\'un sol',
        definition: 'Répartition massique en pourcentage des constituants minéraux (sable, limon, argile) selon la taille de leurs particules.'
      },
      {
        term: 'Analyse granulométrique',
        definition: 'Opération consistant à séparer et peser les différentes particules solides minérales d\'un sol à l\'aide de tamis calibrés.'
      },
      {
        term: 'Sol à texture équilibrée',
        definition: 'Sol combinant harmonieusement sable, limon et argile, offrant de bonnes propriétés de rétention d\'eau et d\'aération.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Conservation de la masse granulométrique',
        statement: 'La somme des pourcentages d\'argile, de limon et de sable d\'un sol doit toujours égaler 100%.'
      }
    ],
    formulas: [
      {
        name: 'Pourcentage de fraction minérale',
        formula: '% Fraction = (Masse fraction / Masse totale) × 100',
        explanation: 'Permet de tracer l\'histogramme et de placer le point dans le triangle des textures.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la texture d\'un sol à partir d\'un tableau de masses',
        procedure: '1. Calculer la masse totale de l\'échantillon (somme des masses de sable, limon et argile).\n2. Calculer le pourcentage de chaque fraction : (masse / masse_totale) × 100.\n3. Identifier la fraction la plus élevée (dominante).\n4. Conclure : le sol porte le nom de la fraction dominante (ex : si sable > 60% -> sol sableux).',
        tip: 'Si deux fractions sont très proches, c\'est une texture mixte (ex : limono-sableuse).'
      }
    ],
    examples: [
      {
        statement: 'Dans 200 g de sol, on trouve 150 g de sable, 20 g d\'argile et 30 g de limon. Quelle est sa texture ?',
        solution: '% Sable = (150 / 200) × 100 = 75 % ; % Argile = (20 / 200) × 100 = 10 % ; % Limon = (30 / 200) × 100 = 15 %.\nLe sable est très largement dominant (75%) : ce sol a une texture sableuse.'
      }
    ],
    exercises: [
      {
        question: 'Un échantillon de 100 g de sol contient 60 g d\'argile, 28 g de limon et 12 g de sable. Quelle est sa texture ?',
        correction: 'La proportion d\'argile est de 60%. Elle est largement majoritaire : le sol a une texture argileuse.'
      }
    ],
    evaluationSituation: {
      context: 'Au verger du collège de Kokumbo, des élèves analysent deux sols A et B de masse 200 g chacun : Sol A (Sable 44 g, Argile 96 g, Limon 60 g) et Sol B (Sable 150 g, Argile 20 g, Limon 30 g).',
      instructions: [
        '1. Calcule le pourcentage de chaque fraction pour le sol A et pour le sol B.',
        '2. Détermine la texture respective de chacun des deux sols.',
        '3. Lequel de ces deux sols retiendra le mieux l\'eau lors de la saison sèche ? Justifie.'
      ],
      solutionGuide: '1. Sol A : Sable = (44/200)×100 = 22% ; Argile = (96/200)×100 = 48% ; Limon = (60/200)×100 = 30%.\nSol B : Sable = (150/200)×100 = 75% ; Argile = (20/200)×100 = 10% ; Limon = (30/200)×100 = 15%.\n2. Sol A : dominante argileuse (48%) -> texture argileuse. Sol B : dominante sableuse (75%) -> texture sableuse.\n3. Le sol A retiendra beaucoup mieux l\'eau car l\'argile a une forte capacité de rétention d\'eau, alors que le sable du sol B est très perméable et laisse fuir l\'eau.'
    },
    examTraps: [
      'Diviser par 100 au lieu de la masse totale réelle de l\'échantillon (ex : 200 g).',
      'Confondre texture (taille et proportion des particules minérales) et structure (façon dont ces particules sont assemblées en mottes).'
    ],
    quickMemo: 'Texture = % Sable + % Limon + % Argile = 100%. Fraction majoritaire donne le nom : sol sableux, argileux ou limoneux.',
    keywords: ['texture du sol', 'analyse granulometrique', 'argile', 'limon', 'sable', 'triangle des textures', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 4 - LEÇON 1 : MALADIES LIÉES À L'EAU
  // ========================================================
  {
    id: 'svt-4e-maladies-liees-a-leau-vecteurs-peril-fecal',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Eau et Santé humaine : Maladies liées à l\'eau',
    lessonTitle: 'Maladies liées à l\'eau : Maladies par vecteurs (Paludisme, Onchocercose) et du péril fécal (Amibiase, Bilharziose, Choléra)',
    objectifs: [
      'Définir et distinguer les maladies transmises par vecteur et les maladies du péril fécal',
      'Associer chaque maladie à son agent pathogène, à son vecteur éventuel et à son mode de transmission',
      'Décrire le cycle de développement du Plasmodium falciparum (chez l\'anophèle femelle et chez l\'homme)',
      'Décrire le cycle de développement de l\'amibe et de la bilharzie (schistosome et bulin d\'eau douce)',
      'Identifier les symptômes majeurs de chaque maladie'
    ],
    fullCourseContent: `1. Classification des maladies liées à l'eau :
- Définition : Les maladies liées à l'eau sont des affections provoquées par des agents pathogènes dont le cycle biologique dépend de l'eau ou de vecteurs aquatiques.
- Deux grandes catégories :
  * Maladies à transmission vectorielle (Maladies par vecteur) : transmises par la piqûre d'un insecte invertébré dont les larves vivent dans l'eau.
  * Maladies du péril fécal : transmises par la consommation ou le contact avec de l'eau ou des aliments souillés par des déjections humaines ou animales (matières fécales et urines).

2. Étude des maladies par vecteur :
- Le Paludisme (Malaria) :
  * Agent pathogène : Plasmodium falciparum (protozoaire parasite).
  * Vecteur : L'Anophèle femelle (moustique dont la larve grandit dans les eaux stagnantes).
  * Mode de transmission : Piqûre de l'anophèle femelle infectée.
  * Symptômes : Fièvre élevée intermittente, frissons, grelottements, sueurs, céphalées, courbatures, anémie.
  * Cycle en 2 phases :
    - Chez le moustique : fécondation dans l'estomac, multiplication dans un kyste puis migration des sporozoïtes dans les glandes salivaires.
    - Chez l'homme : injection de salive anticoagulante, multiplication rapide dans les cellules du foie, puis invasion et éclatement périodique des globules rouges (coïncidant avec les pics de fièvre).
- L'Onchocercose (Cécité des rivières) :
  * Agent : Onchocerca volvulus (ver filaire).
  * Vecteur : La simulie (petite mouche noire pondant dans les rivières à courant rapide).
  * Symptômes : Démangeaisons intenses, nodules sous-cutanés, dépigmentation de la peau en "peau de léopard" et cécité irréversible.
- La Dracunculose (Ver de Guinée) :
  * Agent : Filaire de Médine (Dracunculus medinensis).
  * Vecteur : Le cyclops (minuscule crustacé d'eau douce avalé lors de la boisson).
  * Symptômes : Cloque douloureuse à la cheville, sortie lente du ver adulte femelle.
- La Trypanosomiase (Maladie du sommeil) :
  * Agent : Trypanosome ; Vecteur : La glossine ou mouche tsé-tsé.

3. Étude des maladies du péril fécal :
- L'Amibiase :
  * Agent : Entamoeba histolytica (amibe sous forme de kystes résistants).
  * Transmission : Eau et crudités souillées d'excréments, mains sales, mouches.
  * Symptômes : Diarrhées dysentériques glairo-sanglantes, douleurs abdominales (épreintes), déshydratation.
- La Bilharziose (Schistosomiase) :
  * Agent : Schistosome (ver plat). Hôte intermédiaire : Bulin ou planorbe (mollusque aquatique).
  * Mode de contamination : Pénétration active des larves (furcocercaires) à travers la peau saine lors de baignades dans les marigots.
  * Symptômes : Hématurie (présence de sang dans les urines) ou selles sanglantes, fatigue.
- Le Choléra :
  * Agent : Vibrion cholérique (bactérie Vibrio cholerae).
  * Symptômes : Diarrhées profuses "eau de riz", vomissements incoercibles, déshydratation foudroyante mortelle en quelques heures.`,
    definitions: [
      {
        term: 'Agent pathogène',
        definition: 'Micro-organisme (parasite, bactérie, virus) responsable du déclenchement d\'une maladie infectieuse.'
      },
      {
        term: 'Vecteur',
        definition: 'Organisme vivant (généralement un insecte) qui transporte et transmet l\'agent pathogène d\'un individu à un autre.'
      },
      {
        term: 'Péril fécal',
        definition: 'Mode de transmission des maladies causé par la contamination de l\'eau et des aliments par des déjections fécales humaines ou animales.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Différence vectorielle vs péril fécal',
        statement: 'Les maladies vectorielles nécessitent une piqûre d\'insecte aquatique. Les maladies du péril fécal résultent de l\'ingestion ou du contact avec des eaux polluées par des selles.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier le mode de transmission d\'une maladie liée à l\'eau',
        procedure: '1. Identifier l\'agent causal et son véhicule.\n2. S\'il y a piqûre (anophèle, simulie, glossine) -> maladie par vecteur.\n3. S\'il y a ingestion d\'eau souillée ou baignade contaminée par des excréments -> maladie du péril fécal.',
        tip: 'Le paludisme est vectoriel ; l\'amibiase et le choléra relèvent du péril fécal.'
      }
    ],
    examples: [
      {
        statement: 'Un enfant s\'est baigné dans un marigot à Kossou et présente du sang dans ses urines. De quelle maladie souffre-t-il ?',
        solution: 'Il s\'agit de la bilharziose urinaire (hématurie), causée par la pénétration de larves de schistosomes à travers la peau dans l\'eau douce.'
      }
    ],
    exercises: [
      {
        question: 'Associe la maladie à son agent pathogène : Paludisme, Amibiase, Choléra. (Vibrion cholérique, Entamoeba histolytica, Plasmodium falciparum).',
        correction: 'Paludisme -> Plasmodium falciparum ; Amibiase -> Entamoeba histolytica ; Choléra -> Vibrion cholérique.'
      }
    ],
    evaluationSituation: {
      context: 'Au village de Kossou au bord du fleuve Bandama, les villageois souffrent fréquemment de fièvres récurrentes avec frissons, tandis que d\'autres enfants qui se baignent ont du sang dans leurs urines.',
      instructions: [
        '1. Identifie la première maladie et son vecteur.',
        '2. Identifie la deuxième maladie et précise sa catégorie.',
        '3. Décris brièvement le cycle du paludisme chez l\'homme.'
      ],
      solutionGuide: '1. Première maladie : le paludisme, dont le vecteur est l\'anophèle femelle.\n2. Deuxième maladie : la bilharziose, qui est une maladie du péril fécal transmise par l\'eau douce abritant des mollusques.\n3. Chez l\'homme, l\'anophèle injecte le plasmodium qui se multiplie d\'abord dans le foie, puis pénètre dans les globules rouges. L\'éclatement synchronisé des hématies libère les toxines et déclenche les accès de fièvre.'
    },
    examTraps: [
      'Dire que le moustique est l\'agent du paludisme (le moustique est le VECTEUR, l\'agent pathogène est le Plasmodium).',
      'Confondre la bilharziose (pénétration cutanée dans l\'eau) avec l\'amibiase (ingestion orale).'
    ],
    quickMemo: 'Paludisme = Anophèle femelle + Plasmodium. Onchocercose = Simulie. Amibiase = Kystes d\'amibe. Bilharziose = Sang dans les urines.',
    keywords: ['maladies liees a l eau', 'paludisme', 'anophele', 'plasmodium', 'peril fecal', 'bilharziose', 'amibiase', 'cholera', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 4 - LEÇON 2 : LUTTE CONTRE LES MALADIES LIÉES À L'EAU
  // ========================================================
  {
    id: 'svt-4e-lutte-maladies-eau-sensibilisation',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Eau et Santé humaine : Lutte contre les maladies',
    lessonTitle: 'Lutte contre les maladies liées à l\'eau : Prophylaxie, traitement médical et sensibilisation',
    objectifs: [
      'Distinguer la lutte préventive (prophylactique) de la lutte curative (traitement médical)',
      'Identifier les mesures d\'hygiène individuelle et collective pour interrompre le cycle des vecteurs et du péril fécal',
      'Reconnaître le rôle des médicaments prescrits par un médecin et bannir les médicaments de la rue',
      'Concevoir et animer des campagnes de sensibilisation communautaire (affiches, sketchs, causeries éducatives)'
    ],
    fullCourseContent: `1. Les deux volets de la lutte médicale :
- La Lutte préventive (Prophylaxie) : Ensemble des mesures prises pour empêcher l'apparition de la maladie et bloquer la transmission de l'agent pathogène.
- La Lutte curative : Ensemble des soins médicaux et thérapeutiques administrés à un malade pour détruire l'agent pathogène et guérir l'organisme.

2. Mesures de lutte préventive (Prophylaxie) :
- Hygiène individuelle :
  * Contre les maladies par vecteur (Paludisme) : Dormir systématiquement sous une moustiquaire imprégnée d'insecticide (MII), porter des vêtements longs le soir, appliquer des crèmes répulsives.
  * Contre les maladies du péril fécal : Se laver régulièrement les mains à l'eau propre et au savon (après les selles et avant les repas), laver soigneusement les fruits et légumes à grande eau javellisée, faire bouillir ou filtrer l'eau de boisson, éviter de se baigner dans les marigots stagnants.
- Hygiène collective et environnementale :
  * Rupture du cycle des vecteurs : Éliminer les gîtes larvaires (vider les vieux pneus, boîtes de conserve et récipients d'eau stagnante autour des habitations), désherber les abords des cours, traiter les eaux stagnantes par des larvicides.
  * Lutte contre le péril fécal : Construire et utiliser des latrines hygiéniques, interdire la défécation à l'air libre près des fleuves et sources d'eau, assainir les caniveaux, installer des forages d'eau potable.
  * Vaccination : Vaccin contre le choléra, chimio-prophylaxie pour les sujets vulnérables.

3. Lutte curative :
- Prise en charge rapide dans un centre de santé dès les premiers symptômes.
- Utilisation stricte de médicaments prescrits par un médecin (antipaludéens comme les dérivés de l'artémisinine ACT, antibiotiques contre le vibrion, antiparasitaires contre les amibes et vers).
- RÈGLE VITALE : Ne JAMAIS acheter de faux médicaments vendus dans les rues ou au marché (inefficaces, sous-dosés ou toxiques).

4. Organisation d'une campagne de sensibilisation :
- Supports de communication : Affiches illustrées, banderoles, dépliants, sketches théâtraux au collège, causeries dans les villages.
- Messages clés : "Vidons les récipients d'eau stagnante !", "Dormons chaque nuit sous moustiquaire imprégnée !", "Lavons-nous les mains au savon !"`,
    definitions: [
      {
        term: 'Prophylaxie',
        definition: 'Ensemble des moyens médicaux et sanitaires mis en œuvre pour prévenir l\'apparition ou l\'extension d\'une maladie.'
      },
      {
        term: 'Gîte larvaire',
        definition: 'Lieu d\'eau calme ou stagnante où les moustiques femelles viennent pondre leurs œufs et où se développent les larves.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de rupture du cycle biologique',
        statement: 'Détruire les gîtes larvaires et supprimer le contact entre les matières fécales et les points d\'eau permet d\'éradiquer la transmission des maladies.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Éliminer les gîtes larvaires autour d\'une concession',
        procedure: '1. Inspecter la cour après la pluie.\n2. Vider et renverser toutes les boîtes, pneus et bouteilles contenant de l\'eau stagnante.\n3. Couvrir hermétiquement les fûts et jarres de réserve d\'eau.\n4. Débroussailler les herbes hautes où dorment les moustiques adultes.',
        tip: 'Sans eau stagnante, les moustiques ne peuvent pas se reproduire.'
      }
    ],
    examples: [
      {
        statement: 'Citer deux mesures collectives pour lutter contre l\'amibiase et le choléra.',
        solution: 'La construction de latrines hygiéniques étanches et l\'aménagement de bornes-fontaines d\'eau potable protégées des infiltrations.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi est-il formellement interdit d\'acheter des médicaments dans la rue pour soigner le paludisme ?',
        correction: 'Les médicaments de la rue sont souvent des contrefaçons périmées ou mal dosées qui n\'éliminent pas le parasite, favorisent les résistances médicamenteuses et peuvent détruire les reins et le foie.'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne de Bouna, le club santé prépare une campagne de sensibilisation suite à une recrudescence du paludisme et de diarrhées dysentériques dans le quartier.',
      instructions: [
        '1. Propose deux mesures préventives contre le paludisme.',
        '2. Propose deux mesures préventives contre les diarrhées.',
        '3. Rédige un message percutant pour la banderole du club.'
      ],
      solutionGuide: '1. Dormir sous moustiquaire imprégnée et détruire les gîtes larvaires (pneus, boîtes d\'eau).\n2. Se laver les mains au savon après les toilettes et boire de l\'eau bouillie ou traitée.\n3. Exemple de message : "Tous ensemble pour notre santé : dormons sous moustiquaire et buvons de l\'eau potable !"'
    },
    examTraps: [
      'Confondre lutte préventive (moustiquaire, lavage des mains) et lutte curative (médicaments).',
      'Penser que désherber suffit à tuer les larves de moustiques (les larves vivent UNIQUEMENT dans l\'eau stagnante).'
    ],
    quickMemo: 'Prévention = moustiquaires + latrines + hygiène des mains. Curatif = consultation et ordonnance médicale. Zéro médicament de rue.',
    keywords: ['prophylaxie', 'moustiquaire impregnee', 'gites larvaires', 'sensibilisation', 'hygiene', 'svt 4e']
  },

  // ========================================================
  // 4ÈME - SVT : COMPÉTENCE 4 - LEÇON 3 : TRAITEMENT DE L'EAU SOUILLÉE
  // ========================================================
  {
    id: 'svt-4e-traitement-eau-souillee-filtre-artisanal',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Eau et Santé humaine : Traitement de l\'eau souillée',
    lessonTitle: 'Procédés de potabilisation artisanale : Ébullition, javellisation, décantation et filtre à charbon',
    objectifs: [
      'Identifier les méthodes physiques et chimiques de traitement de l\'eau souillée en milieu rural',
      'Expliquer l\'action de l\'ébullition et de la javellisation dans la destruction des germes microbiens',
      'Expliquer le rôle de la décantation et de la filtration dans l\'élimination des particules solides',
      'Annoter et décrire la fabrication d\'un filtre à eau artisanal à plusieurs couches (charbon de bois, sables, graviers, linge propre)'
    ],
    fullCourseContent: `1. Problématique de l'eau en milieu rural :
- Dans de nombreuses localités isolées, l'accès à l'eau potable de la SODECI fait défaut. Les populations utilisent l'eau de marigots, de rivières ou de puits ouverts souvent troubles et infectées de germes.
- Pour éviter les épidémies, des méthodes simples et peu coûteuses permettent de purifier cette eau.

2. Les méthodes de destruction des microbes (Désinfection) :
- L'Ébullition :
  * Faire bouillir l'eau à gros bouillons pendant au moins 10 à 15 minutes.
  * La chaleur détruit 100% des parasites, œufs de vers, bactéries et virus. C'est le procédé le plus efficace et universel.
- La Javellisation (Désinfection au chlore) :
  * Ajouter 3 à 4 gouttes d'eau de Javel à 8° ou 12° par litre d'eau limpide, bien mélanger et attendre 30 minutes avant de consommer. Le chlore oxyde et tue les micro-organismes.

3. Les méthodes d'élimination des déchets solides :
- La Décantation : Consiste à laisser reposer l'eau boueuse dans un récipient propre (canari, seau) pendant plusieurs heures. Les boues lourdes tombent au fond et l'eau claire surnage.
- La Filtration simple : Passage de l'eau décantée à travers un tissu en coton blanc propre plié en plusieurs épaisseurs pour arrêter les particules fines en suspension.

4. Fabrication et fonctionnement d'un filtre à eau artisanal :
- Matériel requis :
  * Un grand récipient (canari ou seau percé au fond de petits trous).
  * Un support surélevé et un récipient propre inférieur pour recueillir l'eau filtrée.
- Superposition méthodique des couches (du bas vers le haut) :
  1. Au fond : Un linge propre plié couvrant les orifices.
  2. Couche de graviers (sable grossier lavé).
  3. Couche de sable fin lavé.
  4. Couche de CHARBON DE BOIS concassé (rôle capital : adsorbe les impuretés chimiques, élimine les mauvaises odeurs et les mauvais goûts).
  5. Nouvelle couche de sable fin.
  6. Couvercle protecteur pour éviter les poussières et les mouches.
- Résultat : L'eau ainsi filtrée est limpide, sans odeur ni goût. Une désinfection finale (ébullition ou chlore) la rend définitivement potable.`,
    definitions: [
      {
        term: 'Ébullition',
        definition: 'Action de porter l\'eau à 100°C pour détruire thermiquement les micro-organismes pathogènes.'
      },
      {
        term: 'Charbon actif / de bois',
        definition: 'Matériau poreux capable de retenir par adsorption les mauvaises odeurs, colorations et substances toxiques de l\'eau.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Complémentarité filtration et désinfection',
        statement: 'La filtration rend l\'eau limpide en retenant les matières solides, mais ne tue pas les virus et bactéries : elle doit toujours être complétée par l\'ébullition ou la javellisation.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Purifier une eau de marigot en 4 étapes',
        procedure: '1. Décantation : Laisser reposer l\'eau plusieurs heures.\n2. Filtration : Passer l\'eau claire à travers un filtre à sable et charbon ou un linge propre.\n3. Désinfection : Faire bouillir l\'eau filtrée pendant 15 minutes ou ajouter 3 gouttes d\'eau de Javel par litre.\n4. Stockage : Conserver l\'eau dans une calebasse ou un canari propre et hermétiquement fermé.',
        tip: 'Toujours désinfecter après la filtration.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi utilise-t-on du charbon de bois dans un filtre artisanal ?',
        solution: 'Le charbon de bois élimine les mauvaises odeurs, atténue les goûts désagréables et absorbe certaines impuretés dissoutes dans l\'eau.'
      }
    ],
    exercises: [
      {
        question: 'Cite dans l\'ordre de bas en haut les couches d\'un filtre à eau traditionnel.',
        correction: 'Du bas vers le haut : Linge propre au fond -> Graviers / sable grossier -> Sable fin -> Charbon de bois -> Sable fin.'
      }
    ],
    evaluationSituation: {
      context: 'À Zoukougbeu, les villageois consomment l\'eau trouble du marigot, ce qui provoque de fréquentes épidémies de diarrhées. Un élève de 4ème en vacances propose de leur fabriquer un filtre artisanal.',
      instructions: [
        '1. Explique pourquoi cette eau de marigot rend malade.',
        '2. Décris la composition des différentes couches du filtre artisanal.',
        '3. Précise l\'ultime étape indispensable avant de boire l\'eau filtrée.'
      ],
      solutionGuide: '1. L\'eau du marigot contient à la fois des particules solides boueuses et des germes microbiens invisibles (bactéries, kystes, amibes).\n2. Le filtre superpose au fond un tissu propre, puis des graviers, du sable fin, du charbon de bois concassé et une couche supérieure de sable fin.\n3. Pour garantir la potabilité absolue, l\'eau filtrée doit être désinfectée par ébullition (15 min) ou javellisation (quelques gouttes) afin de détruire tous les microbes microscopiques passés à travers le filtre.'
    },
    examTraps: [
      'Penser qu\'une eau filtrée sur sable est immédiatement potable (elle est limpide, mais les microbes microscopiques traversent le sable : il faut obligatoirement la faire bouillir ou la javelliser).',
      'Mettre le charbon de bois tout en bas (le charbon doit être intercalé entre des couches de sable fin pour ne pas polluer l\'eau recueillie).'
    ],
    quickMemo: 'Eau trouble -> Décantation -> Filtration (sable + charbon) -> Désinfection (ébullition ou Javel) = Eau potable.',
    keywords: ['traitement eau souillee', 'filtre artisanal', 'charbon de bois', 'ebullition', 'javellisation', 'decantation', 'svt 4e']
  }
];
