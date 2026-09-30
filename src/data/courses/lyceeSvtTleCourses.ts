import { OfficialIvorianCourse } from '../../types';

export const LYCEE_SVT_TLE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 0. TECHNIQUES D'ANALYSE ET D'INTERPRÉTATION DES RÉSULTATS (MÉTHODOLOGIE SVT Tle D / C)
  // =========================================================================
  {
    id: 'svt-tle-d-analyse-interpretation-resultats',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Baccalauréat Scientifique)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: "Techniques d'analyse et d'interprétation des résultats",
    lessonTitle: "Techniques d'analyse et d'interprétation des résultats expérimentaux et documents en SVT",
    objectifs: [
      "Distinguer rigoureusement l'analyse (description objective des données : « Je vois / Je constate ») de l'interprétation (explication causale des mécanismes biologiques : « Je sais / Or / Donc »)",
      "Appliquer la règle canonique selon la nature du support : morphologique/anatomique (seule la conclusion est requise), physiologique/fonctionnel (analyse ordonnée puis interprétation causale)",
      "Maîtriser les règles impératives d'analyse des courbes et histogrammes (titre complet normalisé avec grandeurs et unités, découpage en phases, proscription absolue des verbes « varie », « évolue », « monte » et « descend »)",
      "Analyser et interpréter les résultats expérimentaux présentés sous forme de tableaux, schémas fonctionnels et électronographies",
      "Conduire la démarche de génétique formelle en dihybridisme : analyse séparée, système branché et test statistique d'hypothèse",
      "Analyser et interpréter un arbre généalogique (pedigree) pour déterminer la récessivité/dominance et le mode de transmission (autosome vs gonosome X)",
      "Rédiger une conclusion générale synthétique déduite logiquement des résultats analysés"
    ],
    fullCourseContent: `1. Règle Méthodologique Canonique : Analyse vs Interprétation vs Conclusion
- L'Analyse est la saisie ordonnée et objective des données d'un document. Elle répond à la question : « Que vois-je ? ». Elle décrit fidèlement les faits observés, les grandeurs mesurées ou les variations constatées sans tenter d'expliquer leur cause.
- L'Interprétation est l'explication scientifique et causale des faits relevés dans l'analyse. Elle répond à la question : « Pourquoi observe-t-on cela ? » ou « Par quel mécanisme biologique ? ». Elle mobilise les connaissances théoriques du cours pour rendre compte des résultats.
- La Conclusion est la réponse concise et directe au problème biologique posé par le document. Elle découle logiquement de la confrontation entre l'analyse et l'interprétation.
- Règle fondamentale sur la nature du support :
  * Support morphologique ou anatomique (schéma de coupe d'organe, structure d'une cellule, tissu) : Seule la conclusion est attendue (« Le document montre que le testicule est composé de tubes séminifères... »). Aucune interprétation physiologique n'est requise.
  * Support physiologique ou fonctionnel (courbes d'enregistrement de potentiel d'action, dosages hormonaux, mesures de volume ou de pression) : L'analyse méthodique des données chiffrées est obligatoire, suivie de l'interprétation des mécanismes.

2. Règles Impératives pour l'Analyse des Graphiques et Histogrammes :
- Donner le titre complet normalisé : « Évolution de [Grandeur en ordonnée + unités] en fonction de [Grandeur en abscisse + unités] ».
- Découper la courbe en phases chronologiques ou intervalles remarquables en citant obligatoirement les valeurs numériques précises et leurs unités aux bornes :
  * Début de la phase (valeur initiale).
  * Fin de la phase (valeur finale atteinte).
  * Points d'inflexion, paliers ou pics optimaux.
- Proscription absolue du vocabulaire flou :
  * Il est strictement interdit d'écrire : « La courbe varie », « La courbe évolue », « La courbe monte » ou « La courbe descend ».
  * Employer obligatoirement les termes scientifiques précis : « Le taux de glycémie augmente de 0,9 g/L à 1,4 g/L », « La concentration diminue de 5 mg/L à 1 mg/L », « La sécrétion reste constante à 2 UI », « La valeur s'annule à t = 10 min ».

3. Méthodologie en Génétique Formelle (Dihybridisme) :
- Étape 1 : Analyse séparée de chaque caractère chez les descendants de F2 :
  * Calculer les proportions de chaque couple d'allèles (ex: 3/4 lisses, 1/4 ridés et 3/4 jaunes, 1/4 verts).
  * Déduire la dominance et la récessivité de chaque couple d'allèles.
- Étape 2 : Système branché (si gènes indépendants) :
  * Multiplier les proportions obtenues séparément : (3/4 + 1/4) × (3/4 + 1/4) = 9/16, 3/16, 3/16, 1/16.
  * Calculer les effectifs théoriques : Effectif théorique = Effectif total N × Proportion théorique.
  * Comparer aux effectifs réels observés pour valider l'hypothèse de ségrégation indépendante des deux couples d'allèles.

4. Méthodologie d'Analyse des Arbres Généalogiques (Pedigrees) :
- Étape 1 : Déterminer la dominance ou la récessivité :
  * Deux parents sains (phénotype normal) ayant au moins un enfant atteint prouvent de façon irréfutable que l'allèle mutant responsable de l'anomalie est récessif.
  * Si l'anomalie apparaît à chaque génération sans saut et que chaque enfant atteint a au moins un parent atteint, l'allèle est dominant.
- Étape 2 : Déterminer le support chromosomique (gonosome ou autosome) :
  * Hypothèse liée au chromosome Y : Rejetée si des femmes sont malades ou si un père atteint a des fils sains.
  * Hypothèse liée au chromosome X (si récessif) : Si une fille atteinte a un père sain ou si une mère atteinte a un fils sain, l'hypothèse d'une liaison à X est rejetée. L'anomalie est donc portée par un autosome.
  * Si ces contre-exemples n'existent pas, l'hypothèse de transmission liée au chromosome X récessif est confirmée et validée par échiquier de croisement.`,
    definitions: [
      {
        term: "Analyse d'un résultat",
        definition: "Description ordonnée, objective et chiffrée des faits directement observables dans un document expérimental, sans formuler d'explication théorique."
      },
      {
        term: "Interprétation d'un résultat",
        definition: "Explication causale des mécanismes biologiques sous-jacents aux faits observés, mobilisant les connaissances scientifiques certifiées du programme."
      },
      {
        term: "Conclusion biologique",
        definition: "Synthèse déductive répondant strictement au problème scientifique soulevé par le document, formulée en 1 ou 2 phrases précises."
      },
      {
        term: "Système branché",
        definition: "Technique combinatoire consistant à croiser par multiplication les proportions indépendantes de deux caractères monohybrides (3/4 et 1/4) pour obtenir les ratios théoriques de dihybridisme (9/16, 3/16, 3/16, 1/16) sans grille de 16 cases."
      },
      {
        term: "Pedigree (Arbre généalogique)",
        definition: "Représentation graphique codifiée des liens de parenté et des phénotypes d'une famille sur plusieurs générations, permettant d'élucider le déterminisme génétique d'une tare héréditaire."
      }
    ],
    formulas: [
      {
        name: "Titre normalisé d'un graphique",
        formula: "Évolution de [Grandeur mesurée en ordonnée + unités] en fonction de [Paramètre variable en abscisse + unités]",
        explanation: "Exemple obligatoire : Évolution de la glycémie (en g/L) en fonction du temps (en minutes) après injection d'insuline.",
        unitOrCondition: "Obligatoire dès la première ligne de l'analyse."
      },
      {
        name: "Ratios théoriques de dihybridisme F2 (gènes indépendants)",
        formula: "(3/4 [A] + 1/4 [a]) × (3/4 [B] + 1/4 [b]) = 9/16 [A,B] + 3/16 [A,b] + 3/16 [a,B] + 1/16 [a,b]",
        explanation: "Permet de vérifier la ségrégation indépendante des deux couples d'allèles.",
        unitOrCondition: "F2 issue de croisement d'hybrides F1 hétérozygotes."
      },
      {
        name: "Calcul de l'effectif théorique attendu",
        formula: "Effectif théorique = Effectif total observé N × (Fraction théorique : 9/16, 3/16 ou 1/16)",
        explanation: "La concordance entre effectifs observés et effectifs théoriques valide scientifiquement l'hypothèse de localisation chromosomique.",
        unitOrCondition: "Nombres arrondis à l'unité la plus proche."
      }
    ],
    propertiesAndRules: [
      {
        name: "Règle de distinction Analyse vs Interprétation",
        statement: "L'analyse énonce UNIQUEMENT ce que l'on observe (« Je vois que... ») avec chiffres et unités. L'interprétation énonce le mécanisme biologique explicatif (« Or je sais que..., cela s'explique par... »). Ne jamais les fusionner.",
        explanation: "Confondre analyse et interprétation entraîne une pénalité systématique lors des corrections officielles."
      },
      {
        name: "Proscription des verbes imprécis",
        statement: "L'usage des verbes « varie », « évolue » ou des expressions « la courbe monte / descend » est formellement interdit. Il faut toujours préciser le sens de variation : augmente, diminue, reste constant ou s'annule.",
        explanation: "Exigence de rigueur scientifique du barème d'examen."
      },
      {
        name: "Règle canonique des supports morphologiques",
        statement: "Face à une coupe anatomique ou un schéma structural d'organe ou de tissu, l'interprétation n'a pas de sens physique : seule une observation descriptive et une conclusion d'identification sont attendues.",
        explanation: "Évite aux candidats de perdre du temps à inventer des explications non demandées."
      },
      {
        name: "Règle de preuve de la récessivité sur pedigree",
        statement: "La présence d'au moins un enfant atteint issu de parents sains constitue la démonstration formelle et nécessaire que l'allèle morbide est récessif.",
        explanation: "Les parents étant sains, ils possèdent nécessairement l'allèle morbide à l'état masqué (hétérozygotes porteurs sains)."
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: "Saisie ordonnée des données (Analyse)",
        procedure: "Énoncer le titre normalisé du document. Découper la courbe ou le tableau en phases d'évolution homogènes. Pour chaque phase, mentionner les bornes de départ et d'arrivée avec les valeurs chiffrées exactes et leurs unités.",
        tip: "Toujours inclure les unités (mV, ms, g/L, UI, min) ; une valeur sans unité ne vaut aucun point."
      },
      {
        stepNumber: 2,
        title: "Mise en relation causale (Interprétation)",
        procedure: "Pour chaque variation observée, expliquer le mécanisme biologique en mobilisant le cours (ex: ouverture des canaux voltage-dépendants, action de l'insuline, phosphorylation, transport actif).",
        tip: "Utiliser des connecteurs de causalité rigoureux : « Cela s'explique par... », « Cette diminution est due à... », « Ce qui témoigne de... »."
      },
      {
        stepNumber: 3,
        title: "Formulation de la conclusion générale",
        procedure: "Rédiger en une phrase de synthèse la réponse directe à la question posée par l'énoncé, résumant le rôle biologique de la structure ou de l'hormone étudiée.",
        tip: "La conclusion ne doit contenir aucune donnée chiffrée nouvelle non analysée au préalable."
      }
    ],
    examples: [
      {
        statement: "Analyser et interpréter le tracé de potentiel d'action monophasique obtenu sur un axone géant après stimulation efficace.",
        solution: "1. Analyse : Le tracé montre l'évolution du potentiel membranaire (en mV) en fonction du temps (en ms). Au repos, le potentiel est stable à -70 mV. Suite à la stimulation, le potentiel passe brutalement de -70 mV à +35 mV en 1 ms (phase de dépolarisation), puis redescend rapidement à -70 mV en 1,5 ms (phase de repolarisation), subit une brève chute à -80 mV (hyperpolarisation transitoire) avant de se stabiliser à nouveau à -70 mV.\n\n2. Interprétation : La dépolarisation s'explique par l'ouverture rapide des canaux Na+ voltage-dépendants entraînant une entrée massive d'ions Na+ dans l'axoplasme. La repolarisation s'explique par l'inactivation des canaux Na+ et l'ouverture retardée des canaux K+ voltage-dépendants provoquant une sortie d'ions K+. L'hyperpolarisation est due à la fermeture lente des canaux K+. Le retour à -70 mV est assuré par l'activité permanente de la pompe Na+/K+ ATPase.\n\n3. Conclusion : Le potentiel d'action est un signal bioélectrique transitoire produit par des flux ioniques séquentiels à travers la membrane axonale.",
      }
    ],
    examTraps: [
      "Employer les mots « varie », « évolue », « la courbe monte » ou « la courbe descend » au lieu d'augmenter, diminuer ou rester constant.",
      "Oublier de préciser les unités des valeurs numériques citées dans l'analyse.",
      "Mélanger l'analyse et l'interprétation dans un même paragraphe brouillon.",
      "Parachuter une conclusion préconçue sans l'avoir démontrée à partir des données effectives du document.",
      "Oublier de multiplier par l'effectif total N pour calculer les effectifs théoriques en dihybridisme."
    ],
    exercises: [
      {
        question: "Quelle est la différence méthodologique fondamentale entre l'analyse et l'interprétation d'un document en SVT au Baccalauréat ?",
        correction: "L'analyse est une description factuelle, objective et ordonnée de ce que l'on observe sur le document (« Ce que je vois »), en précisant impérativement les grandeurs, les sens de variation (augmente, diminue, reste constant) et les valeurs numériques avec leurs unités aux bornes de chaque phase. L'interprétation est l'explication scientifique et causale des faits relevés (« Pourquoi je le vois / Par quel mécanisme »), en mobilisant les connaissances du cours (réactions biochimiques, flux ioniques, actions hormonales) pour rendre compte des résultats observés."
      }
    ],
    quickMemo: "Analyse = Ce que je constate (chiffres + unités, sans 'varie' ni 'monte'). Interprétation = Pourquoi biologique (mécanismes et cours). Conclusion = Réponse directe au problème.",
    keywords: [
      "techniques d'analyse",
      "analyse et interprétation",
      "interprétation des résultats",
      "méthodologie svt",
      "svt terminale d",
      "svt terminale c",
      "démarche scientifique",
      "analyse de courbe",
      "histogramme",
      "arbre généalogique",
      "pedigree",
      "génétique formelle",
      "dihybridisme",
      "yao fieni"
    ]
  },
  // =========================================================================
  // 1. LA COMMUNICATION NERVEUSE & FONCTIONNEMENT DU TISSU NERVEUX (SVT Tle D / C)
  // =========================================================================
  {
    id: 'svt-tle-d-communication-nerveuse',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La communication dans l’organisme : Le tissu nerveux',
    lessonTitle: 'Leçon 1 : La communication nerveuse et le fonctionnement du tissu nerveux',
    objectifs: [
      'Décrire la structure macroscopique du nerf et l\'ultrastructure du neurone (corps cellulaire, axone, arborisation terminale)',
      'Expliquer l\'origine ionique du potentiel de repos (-70 mV) et le rôle de la pompe Na+/K+ dépendante',
      'Analyser et interpréter les différentes phases du potentiel d\'action (PA) monophasique et diphasique',
      'Énoncer et justifier les lois de l\'excitabilité : loi du tout ou rien (fibre isolée), sommation/recrutement (nerf entier)',
      'Détailler la propagation du message nerveux (continue sur fibre amyélinique vs saltatoire sur fibre myélinisée)',
      'Expliquer les 8 étapes chronologiques du fonctionnement d\'une synapse neuro-neuronique et neuro-musculaire'
    ],
    fullCourseContent: `1. Structure et Ultrastructure du Tissu Nerveux :
- Le nerf est un organe formé de faisceaux de fibres nerveuses (axones ou dendrites) entourés de gaines conjonctives :
  * Épinèvre : gaine externe protectrice entourant le nerf entier et contenant des vaisseaux sanguins.
  * Périnèvre : gaine délimitant chaque faisceau de fibres nerveuses.
  * Endonèvre : tissu conjonctif délicat entourant chaque fibre nerveuse individuelle.
- Le neurone est l'unité structurale et fonctionnelle du système nerveux. Il comprend 3 parties :
  1. Le corps cellulaire (soma ou péricaryon) situé dans la substance grise des centres nerveux ou dans les ganglions spinaux. Il renferme le noyau, le cytoplasme avec corps de Nissl (réticulum granulaire) et des neurofibrilles.
  2. Les prolongements cytoplasmiques :
     - Les dendrites : prolongements courts, ramifiés et afférents (conduisent le message vers le corps cellulaire).
     - L'axone (ou cylindraxe) : prolongement unique, long, régulier et efférent (conduit le message hors du corps cellulaire), entouré ou non d'une gaine de myéline (lipidique et isolante) et d'une gaine de Schwann, interrompues périodiquement par les nœuds de Ranvier.
  3. L'arborisation terminale : extrémité ramifiée de l'axone terminée par des boutons synaptiques riches en vésicules de neurotransmetteurs.

2. Le Potentiel de Repos (PR ou Potentiel de Membrane) :
- Mise en évidence : À l'aide d'un oscilloscope cathodique, une microélectrode R1 est placée à la surface de l'axone géant de calmar et une microélectrode R2 est introduite à l'intérieur. Le spot dévie instantanément de 0 mV à -70 mV.
- Définition : Le potentiel de repos est la différence de potentiel (d.d.p) électrique permanente de part et d'autre de la membrane plasmique de l'axone au repos (intérieur électronégatif -70 mV par rapport à l'extérieur électropositif).
- Origine ionique :
  * Inégale répartition des ions : Na+ (142 mmol/L) et Cl- plus concentrés dans le milieu extracellulaire ; K+ (140 mmol/L) et gros anions protéiques A- plus concentrés dans le milieu intracellulaire (axoplasme).
  * Perméabilité sélective : Au repos, la membrane est 50 à 100 fois plus perméable aux ions K+ qu'aux ions Na+ en raison de la présence de canaux de fuite ouverts en permanence. K+ sort passivement vers l'extérieur selon son gradient de concentration.
  * Pompe Na+/K+ ATPase : Transport actif nécessitant de l'hydrolyse d'ATP qui expulse 3 ions Na+ vers l'extérieur et réintroduit 2 ions K+ vers l'intérieur contre leurs gradients électrochimiques, maintenant ainsi la polarisation négative interne.

3. Le Potentiel d'Action (PA) et ses Phases :
- Enregistrement monophasique (R1 extracellulaire, R2 intracellulaire) après une stimulation efficace :
  * Point A : Artéfact de stimulation (déviation instantanée signalant le moment précis du choc électrique).
  * Segment AB : Temps de latence (temps mis par l'onde de dépolarisation pour parcourir la distance entre les électrodes stimulatrices et réceptrices).
  * Phase BC : Dépolarisation rapide (le potentiel passe de -70 mV à +30/+40 mV). Elle est due à l'ouverture massive et synchrone des canaux Na+ voltage-dépendants (entrée brutale et massive de Na+ dans l'axoplasme).
  * Phase CD : Repolarisation (le potentiel redescend vers -70 mV). Elle est due à la fermeture (inactivation) des canaux Na+ voltage-dépendants et à l'ouverture décalée des canaux K+ voltage-dépendants (sortie rapide de K+).
  * Phase DE : Hyperpolarisation transitoire (le potentiel descend jusqu'à -80/-90 mV). Elle résulte de la fermeture lente et retardée des canaux K+ voltage-dépendants.
  * Phase EF : Rétablissement du potentiel de repos (-70 mV) grâce à l'action rétablissante permanente de la pompe Na+/K+ ATPase.
- Enregistrement diphasique : Obtenu lorsque les deux électrodes réceptrices R1 et R2 sont posées à la surface externe de l'axone. L'onde de dépolarisation atteint d'abord R1 (négativité sous R1 = 1ère onde vers le haut), puis l'espace intermédiaire (retour à 0), puis atteint R2 (négativité sous R2 = 2nde onde vers le bas de même amplitude).

4. Propriétés d'Excitabilité et de Conduction :
- Loi du tout ou rien (sur fibre nerveuse isolée) : Une stimulation infraliminaire (inférieure au seuil d'excitabilité ou rhéobase) n'engendre aucun potentiel d'action. Dès que le seuil est atteint, la fibre répond par un PA d'emblée d'amplitude maximale (environ 100 à 110 mV). Toute augmentation de l'intensité au-delà du seuil ne modifie ni l'amplitude ni la forme du PA : l'amplitude est constante.
- Phénomène de sommation / recrutement (sur nerf entier) : Le nerf est composé de centaines de fibres nerveuses ayant des seuils d'excitabilité différents. Lorsque l'intensité de stimulation augmente, le nombre de fibres recrutées augmente, ce qui accroît proportionnellement l'amplitude globale du potentiel global du nerf jusqu'à un plafond où toutes les fibres sont excitées.
- Période réfractaire :
  * Période réfractaire absolue (PRA) : Pendant la phase de dépolarisation et début de repolarisation, aucun second PA ne peut être déclenché, quelle que soit l'intensité (canaux Na+ inactivés).
  * Période réfractaire relative (PRR) : Pendant la fin de la repolarisation et l'hyperpolarisation, un second PA peut être généré uniquement si la stimulation est supraliminaire (intensité très supérieure au seuil).
- Modes de conduction :
  * Conduction continue (fibre amyélinique) : Les courants locaux de dépolarisation se propagent de proche en proche le long de toute la membrane plasmique (vitesse lente, 1 à 10 m/s).
  * Conduction saltatoire (fibre myélinisée) : La gaine de myéline est un isolant électrique étanche. Les canaux ioniques voltage-dépendants sont exclusivement concentrés aux nœuds de Ranvier. Le potentiel d'action saute d'un nœud de Ranvier à l'autre (vitesse rapide pouvant atteindre 120 m/s).

5. Transmission Synaptique Neuro-Neuronique et Neuro-Musculaire :
- Définition : La synapse est une zone de jonction fonctionnelle et de communication unilatérale entre deux neurones ou entre un neurone moteur et une cellule effectrice musculaire (plaque motrice).
- Déroulement chronologique précis en 8 étapes :
  (1) Arrivée de l'onde de potentiels d'action au niveau de la membrane présynaptique du bouton terminal.
  (2) Dépolarisation de la membrane présynaptique et ouverture des canaux Ca2+ voltage-dépendants.
  (3) Entrée massive d'ions Ca2+ dans l'élément présynaptique.
  (4) Mobilisation et exocytose des vésicules synaptiques libérant le neurotransmetteur (ex: Acétylcholine - ACh) dans la fente synaptique (large de 20 à 50 nm).
  (5) Diffusion du neurotransmetteur à travers la fente et fixation spécifique sur les récepteurs canaux chimio-dépendants de la membrane postsynaptique.
  (6) Ouverture des canaux ioniques chimio-dépendants générant un potentiel postsynaptique :
      - Synapse excitatrice (ex: Acétylcholine, Glutamate) : Ouverture des canaux Na+ -> Entrée de Na+ -> Dépolarisation locale = Potentiel Post-Synaptique Excitateur (PPSE).
      - Synapse inhibitrice (ex: GABA, Glycine) : Ouverture des canaux Cl- ou K+ -> Entrée de Cl- ou sortie de K+ -> Hyperpolarisation locale = Potentiel Post-Synaptique Inhibiteur (PPSI).
  (7) Inactivation et élimination rapide du neurotransmetteur : dégradation enzymatique (ex: acétylcholinestérase dégradant l'ACh en acétate + choline) et recapture présynaptique par des transporteurs membranaires.
  (8) Intégration neuronale au niveau du cône d'émergence (sommation spatiale et temporelle des PPSE et PPSI). Si la dépolarisation résultante atteint le seuil (-50 mV), émission d'un train de potentiels d'action le long de l'axone postsynaptique.`,
    definitions: [
      {
        term: 'Neurone',
        definition: 'Cellule hautement différenciée et excitable du tissu nerveux, spécialisée dans la réception, l\'intégration, la génération et la conduction unidirectionnelle des signaux électriques (influx nerveux).'
      },
      {
        term: 'Potentiel de Repos (PR)',
        definition: 'Différence de potentiel électrique permanente (environ -70 mV) mesurée entre la face interne électronégative et la face externe électropositive de la membrane plasmique d\'un neurone en l\'absence de stimulation.'
      },
      {
        term: 'Potentiel d\'Action (PA)',
        definition: 'Inversion transitoire, rapide et stéréotypée de la polarité membranaire (de -70 mV à +30 mV) déclenchée par une stimulation atteignant ou dépassant le seuil d\'excitabilité, caractérisée par une amplitude constante.'
      },
      {
        term: 'Seuil d\'excitabilité (Rhéobase)',
        definition: 'Intensité minimale de stimulation électrique nécessaire et suffisante pendant un temps adéquat pour déclencher un potentiel d\'action.'
      },
      {
        term: 'Loi du tout ou rien',
        definition: 'Propriété fondamentale de la fibre nerveuse isolée selon laquelle la réponse à une stimulation infraliminaire est nulle, et la réponse à toute stimulation égale ou supérieure au seuil est d\'emblée maximale et constante en amplitude.'
      },
      {
        term: 'Conduction saltatoire',
        definition: 'Mode de propagation rapide de l\'influx nerveux sur les fibres myélinisées, où le potentiel d\'action saute directement d\'un nœud de Ranvier au suivant sans dépolariser les zones myélinisées isolantes.'
      },
      {
        term: 'Synapse',
        definition: 'Zone de contact fonctionnel hautement spécialisée assurant la transmission unidirectionnelle du message nerveux entre un neurone présynaptique et une cellule effectrice ou postsynaptique par l\'intermédiaire d\'un neurotransmetteur chimique.'
      },
      {
        term: 'PPSE (Potentiel Post-Synaptique Excitateur)',
        definition: 'Dépolarisation locale et graduable de la membrane postsynaptique consécutive à l\'ouverture de canaux chimio-dépendants au Na+ stimulée par un neurotransmetteur excitateur.'
      },
      {
        term: 'PPSI (Potentiel Post-Synaptique Inhibiteur)',
        definition: 'Hyperpolarisation locale et graduable de la membrane postsynaptique consécutive à l\'ouverture de canaux chimio-dépendants au Cl- ou K+ stimulée par un neurotransmetteur inhibiteur.'
      },
      {
        term: 'Intégration neuronale (Sommation)',
        definition: 'Capacité du neurone postsynaptique à additionner algébriquement dans l\'espace (sommation spatiale) et dans le temps (sommation temporelle) l\'ensemble des PPSE et PPSI reçus au niveau de son cône d\'émergence.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de la polarité dynamique (Cajal)',
        statement: 'Dans un neurone fonctionnel, le message nerveux chemine toujours de manière unidirectionnelle : des dendrites vers le corps cellulaire (conduction centripète ou afférente), puis du corps cellulaire vers l\'extrémité de l\'axone (conduction centrifuge ou efférente).'
      },
      {
        name: 'Loi du tout ou rien sur fibre isolée',
        statement: 'Sur une fibre nerveuse unique, le potentiel d\'action est émis uniquement si le seuil d\'excitabilité est atteint ; son amplitude et sa vitesse de propagation restent strictement constantes quelle que soit l\'augmentation ultérieure de l\'intensité de stimulation.'
      },
      {
        name: 'Loi de recrutement sur le nerf entier',
        statement: 'Sur un nerf entier (organe pluricellulaire), l\'amplitude du potentiel global d\'action croît avec l\'intensité de stimulation par recrutement progressif d\'un nombre croissant de fibres nerveuses ayant des seuils d\'excitabilité croissants.'
      }
    ],
    formulas: [
      {
        name: 'Vitesse de conduction de l\'influx nerveux (Méthode de Helmholtz)',
        formula: 'v = \\frac{d_1 - d_2}{t_1 - t_2} = \\frac{\\Delta d}{\\Delta t}',
        explanation: 'Permet de calculer la vitesse de propagation en mesurant les temps de latence t1 et t2 obtenus pour deux distances de stimulation d1 et d2.',
        unitOrCondition: 'v en mètres par seconde (m/s), d en mètres (m), t en secondes (s).'
      },
      {
        name: 'Sommation algébrique au cône d\'émergence',
        formula: '\\Delta V_{total} = \\sum PPSE - \\sum PPSI',
        explanation: 'Si Delta V total >= Seuil de dépolarisation (-50 mV), un ou plusieurs PA sont générés ; sinon le potentiel reste infraliminaire.',
        unitOrCondition: 'En millivolts (mV).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser et justifier l\'origine d\'un tracé de potentiel d\'action',
        procedure: '1. Identifier le type d\'enregistrement : monophasique (une microélectrode intracellulaire et une de référence externe) ou diphasique (deux électrodes de surface).\n2. Délimiter chaque phase : artéfact (t0), temps de latence, dépolarisation ascendante, repolarisation descendante, hyperpolarisation.\n3. Associer chaque phase au flux ionique spécifique : Dépolarisation = entrée massive de Na+ par canaux Na+ voltage-dépendants ; Repolarisation = sortie de K+ par canaux K+ voltage-dépendants ; Hyperpolarisation = fermeture lente des canaux K+ ; Rétablissement = pompe Na+/K+ ATPase.',
        tip: 'Toujours préciser que les canaux voltage-dépendants ne s\'ouvrent qu\'au-delà du seuil d\'excitabilité.'
      },
      {
        stepNumber: 2,
        title: 'Expliquer l\'intégration synaptique (Sommation spatiale vs temporelle)',
        procedure: '1. Définir la nature des potentiels reçus : PPSE (dépolarisation locale) ou PPSI (hyperpolarisation locale).\n2. Sommation spatiale : addition de potentiels issus de plusieurs boutons synaptiques distincts activés simultanément.\n3. Sommation temporelle : addition de plusieurs potentiels successifs très rapprochés émis par un même bouton synaptique avant que le précédent ne se soit dissipé.\n4. Conclure : si la somme algébrique au cône axonique atteint le seuil (-50 mV), naissance d\'un train de PA codé en fréquence.',
        tip: 'Le message nerveux est codé en amplitude au niveau de la synapse (concentration en neurotransmetteur) et codé en fréquence de PA le long de l\'axone.'
      }
    ],
    examples: [
      {
        statement: 'On stimule un nerf sciatique de grenouille avec des intensités croissantes : I1 (0,2 V) -> rien ; I2 (0,5 V) -> onde de 15 mV ; I3 (1,0 V) -> onde de 35 mV ; I4 (2,0 V) -> onde de 60 mV ; I5 (3,0 V) -> onde de 60 mV. Interprète ces résultats.',
        solution: 'I1 est infraliminaire (inférieure au seuil de toutes les fibres). De I2 à I4, l\'intensité croissante recrute un nombre de plus en plus grand de fibres nerveuses constitutives du nerf, augmentant l\'amplitude globale du potentiel d\'action : c\'est la loi de recrutement. À I4 et I5, toutes les fibres du nerf sont recrutées : l\'amplitude atteint son plafond maximal (60 mV) et ne peut plus augmenter.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi la vitesse de propagation de l\'influx nerveux est-elle nettement plus élevée sur une fibre myélinisée que sur une fibre amyélinique de même diamètre ?',
        correction: 'Sur une fibre myélinisée, la gaine de myéline forme un manchon lipidique isolant qui empêche les fuites ioniques. Les échanges d\'ions (Na+ et K+) et les canaux voltage-dépendants sont exclusivement localisés au niveau des étranglements ou nœuds de Ranvier. L\'influx se propage donc par conduction saltatoire d\'un nœud à l\'autre, ce qui est beaucoup plus rapide (jusqu\'à 120 m/s) que la conduction continue de proche en proche des fibres amyéliniques (1 à 10 m/s).'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de Terminale D observe deux expériences sur la transmission synaptique : dans le milieu A contenant du Ca2+, la stimulation présynaptique provoque une dépolarisation postsynaptique de 20 mV. Dans le milieu B privé de Ca2+ ou contenant un bloqueur de canaux calciques (cadmium), la même stimulation ne produit aucune réponse postsynaptique.',
      instructions: [
        '1. Analyse comparativement les résultats observés dans les deux milieux.',
        '2. Explique le rôle précis des ions Ca2+ dans le fonctionnement de la synapse.',
        '3. Déduis la conséquence d\'une injection intracellulaire directe de Ca2+ dans le bouton présynaptique sans stimulation électrique.'
      ],
      solutionGuide: '1. Dans le milieu A avec Ca2+, la stimulation provoque une transmission synaptique efficace avec apparition d\'un PPSE. Dans le milieu B sans Ca2+, la transmission est totalement bloquée.\n2. L\'arrivée du potentiel d\'action au bouton présynaptique ouvre les canaux Ca2+ voltage-dépendants. L\'entrée massive d\'ions Ca2+ dans le cytoplasme présynaptique est le déclencheur indispensable de la migration et de l\'exocytose des vésicules de neurotransmetteurs dans la fente synaptique.\n3. L\'injection directe de Ca2+ sans stimulation électrique suffit à provoquer l\'exocytose immédiate du neurotransmetteur et l\'apparition d\'un PPSE postsynaptique, confirmant que le Ca2+ est le messager intracellulaire clé de l\'exocytose.'
    },
    examTraps: [
      'Confondre la loi du tout ou rien (valable uniquement sur fibre isolée) et le recrutement (valable sur le nerf entier).',
      'Oublier que les récepteurs postsynaptiques sont des canaux chimio-dépendants (activés par le ligand) et non des canaux voltage-dépendants.',
      'Affirmer que les neurotransmetteurs pénètrent dans le neurone postsynaptique : ils se lient uniquement à la face externe des récepteurs sans jamais y pénétrer.'
    ],
    quickMemo: 'PR = -70 mV (K+ sort, pompe 3Na+/2K+). PA = Dépolarisation (entrée Na+), Repolarisation (sortie K+), Hyperpolarisation (canaux K+ lents). Synapse = PA présynaptique -> entrée Ca2+ -> exocytose neurotransmetteur -> récepteurs chimio-dépendants -> PPSE/PPSI -> sommation spatio-temporelle.',
    keywords: ['SVT Terminale D', 'SVT Terminale C', 'tissu nerveux', 'neurone', 'potentiel de repos', 'potentiel d\'action', 'pompe Na+/K+', 'loi du tout ou rien', 'conduction saltatoire', 'synapse', 'acétylcholine', 'PPSE', 'PPSI']
  },

  // =========================================================================
  // 2. LE RÉFLEXE CONDITIONNEL & APPRENTISSAGE (SVT Tle D)
  // =========================================================================
  {
    id: 'svt-tle-d-reflexe-conditionnel',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La communication dans l’organisme : Comportement et apprentissage',
    lessonTitle: 'Leçon 2 : Le réflexe conditionnel (Pavlov et mécanismes transcorticaux)',
    objectifs: [
      'Définir un réflexe inné (inconditionnel) et un réflexe conditionnel (acquis)',
      'Décrire le protocole expérimental de Pavlov sur la salivation du chien',
      'Identifier les stimuli (neutre, inconditionnel, conditionnel) et les réponses associées',
      'Énoncer les conditions indispensables d\'établissement et de maintien du réflexe conditionnel',
      'Expliquer le mécanisme neurophysiologique : création d\'une liaison nerveuse transcorticale fonctionnelle'
    ],
    fullCourseContent: `1. Notions Fondamentales et Expérience de Pavlov :
- Réflexe inconditionnel (inné) : Réaction motrice ou sécrétoire involontaire, automatique, stéréotypée et commune à tous les individus d'une même espèce, présente dès la naissance sans apprentissage préalable (ex: salivation à la vue ou au contact d'un aliment, réflexe rotulien, clignement des yeux).
- Réflexe conditionnel (acquis) : Réaction involontaire nouvelle acquise par apprentissage individuel à la suite de l'association répétée entre un stimulus neutre et un stimulus inconditionnel.
- Protocole historique d'Ivan Pavlov (1904) :
  * Étape 1 : Présentation d'un stimulus inconditionnel (SI : viande en poudre) -> Réponse inconditionnelle (RI : salivation abondante).
  * Étape 2 : Émission d'un stimulus neutre (SN : son de cloche ou métronome) -> Pas de salivation (réaction d'orientation seule).
  * Étape 3 (Conditionnement) : Association temporelle répétée du SN immédiatement suivi du SI (son de cloche quelques secondes avant de donner la viande). L'opération est répétée des dizaines de fois.
  * Étape 4 (Test) : Présentation du stimulus sonore seul -> Réponse conditionnelle (RC : salivation immédiate). Le son est devenu un stimulus conditionnel (SC).

2. Conditions d'Établissement et d'Extinction du Réflexe Conditionnel :
- Conditions d'établissement :
  1. Antériorité et contiguïté temporelle : Le stimulus neutre doit précéder immédiatement le stimulus inconditionnel (délai optimal : 0,5 à 5 secondes).
  2. Répétition fréquente : L'association SN-SI doit être répétée un nombre suffisant de fois.
  3. État de veille et réceptivité du sujet : Le sujet doit être attentif, affamé et non stressé.
  4. Intégrité de l'écorce cérébrale (cortex) : L'ablation des hémisphères cérébraux empêche tout conditionnement.
- Phénomène d'extinction et de renforcement :
  * Extinction : Si le stimulus conditionnel (son) est présenté de façon répétée sans jamais être renforcé par le stimulus inconditionnel (viande), la réponse salivaire diminue progressivement jusqu'à disparaître.
  * Renforcement : Pour maintenir le réflexe conditionnel dans le temps, il faut réassocier périodiquement le SC au SI.

3. Mécanisme Neurophysiologique du Réflexe Conditionnel :
- Trajet du réflexe inconditionnel :
  * Récepteurs gustatifs de la langue -> Nerf sensitif (nerf lingual / glossopharyngien) -> Centre salivaire bulbaire (bulbe rachidien) -> Nerf moteur (corde du tympan / nerf sécrétoire parasympathique) -> Glande salivaire.
- Trajet lors du conditionnement :
  * Le son excite la cochlée -> influx transmis à l'aire auditive corticale (cortex temporal).
  * La viande excite les papilles gustatives -> influx transmis au centre bulbaire ET à l'aire gustative corticale.
  * La simultanéité des stimulations active de façon répétée les neurones des deux aires corticales.
- Établissement de la liaison transcorticale :
  * Une voie d'association nerveuse temporaire (liaison fonctionnelle synaptique transcorticale) s'établit entre l'aire auditive et l'aire gustative du cortex.
  * Désormais, l'excitation de l'aire auditive active directement l'aire gustative corticale, qui envoie un influx descendant vers le centre salivaire bulbaire, déclenchant la salivation via le nerf moteur effecteur.`,
    definitions: [
      {
        term: 'Réflexe inconditionnel (inné)',
        definition: 'Réponse automatique, involontaire et préprogrammée génétiquement, présente dès la naissance chez tous les individus d\'une même espèce sans nécessiter d\'apprentissage.'
      },
      {
        term: 'Réflexe conditionnel (acquis)',
        definition: 'Comportement nouveau acquis par un individu au cours de son existence par apprentissage associatif entre un stimulus neutre initial et un stimulus inconditionnel.'
      },
      {
        term: 'Stimulus Inconditionnel (SI)',
        definition: 'Stimulus biologique naturel capable de déclencher de façon constante et spontanée une réponse réflexe déterminée sans conditionnement préalable.'
      },
      {
        term: 'Stimulus Neutre (SN)',
        definition: 'Signal sensoriel qui ne provoque initialement aucune réaction motrice ou sécrétoire liée à la fonction étudiée.'
      },
      {
        term: 'Stimulus Conditionnel (SC)',
        definition: 'Ancien stimulus neutre devenu capable, après conditionnement associatif, de déclencher à lui seul la réponse réflexe conditionnelle.'
      },
      {
        term: 'Liaison transcorticale fonctionnelle',
        definition: 'Connexion synaptique nouvelle et facilitée établie entre deux aires sensorielles du cortex cérébral au cours du processus d\'apprentissage conditionnel.'
      },
      {
        term: 'Extinction',
        definition: 'Affaiblissement progressif puis disparition de la réponse conditionnelle lorsque le stimulus conditionnel est présenté de manière répétée sans association avec le stimulus inconditionnel.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'antériorité du stimulus neutre',
        statement: 'Pour qu\'un conditionnement classique réussisse, le stimulus neutre (futur SC) doit impérativement précéder de quelques secondes le stimulus inconditionnel (SI) ; si le SI précède le SN, le conditionnement est impossible.'
      },
      {
        name: 'Rôle indispensable du cortex cérébral',
        statement: 'Alors que les réflexes inconditionnels simples peuvent s\'effectuer au niveau médullaire ou bulbaire sans le cerveau, le réflexe conditionnel exige obligatoirement l\'intégrité fonctionnelle du cortex cérébral.'
      }
    ],
    formulas: [
      {
        name: 'Schéma séquentiel du conditionnement classique (Pavlov)',
        formula: 'SN + SI \\xrightarrow{Répétition} SC \\longrightarrow RC',
        explanation: 'Association temporelle étroite convertissant un stimulus neutre en stimulus conditionnel efficace.',
        unitOrCondition: 'Délai temporel optimal : \\Delta t = 0,5 à 3 secondes.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les composantes d\'une expérience de conditionnement',
        procedure: '1. Identifier la réponse observée (ex: salivation, flexion de la patte, fermeture des paupières).\n2. Repérer le stimulus inconditionnel SI (stimulus biologique naturel provoquant spontanément la réaction).\n3. Repérer le stimulus neutre initial SN (stimulus sans lien biologique avec la réaction, ex: lumière, son, choc léger).\n4. Déterminer la phase d\'apprentissage (nombre de répétitions, ordre chronologique SN -> SI).\n5. Conclure sur la transformation du SN en stimulus conditionnel SC produisant la réponse conditionnelle RC.',
        tip: 'Toujours vérifier que le stimulus neutre ne provoquait rien au début de l\'expérience.'
      }
    ],
    examples: [
      {
        statement: 'Chez un lapin, on envoie un jet d\'air sur la cornée (provoque le clignement de l\'œil). On associe pendant 50 essais une lumière rouge 1 seconde avant le jet d\'air. Au 51e essai, la lumière rouge seule provoque le clignement. Identifie les stimuli et réactions.',
        solution: 'Le jet d\'air est le Stimulus Inconditionnel (SI) ; le clignement initial est la Réponse Inconditionnelle (RI) ; la lumière rouge avant apprentissage est le Stimulus Neutre (SN) ; la lumière rouge après apprentissage est le Stimulus Conditionnel (SC) ; le clignement en réponse à la lumière rouge seule est la Réponse Conditionnelle (RC).'
      }
    ],
    exercises: [
      {
        question: 'Un chien conditionné à saliver au son d\'une cloche de 1000 Hz est soumis à des sons de 1000 Hz pendant 30 jours sans jamais recevoir de viande. Que constate-t-on et comment l\'expliquer ?',
        correction: 'On constate que la salivation diminue progressivement jusqu\'à disparaître totalement. C\'est le phénomène d\'extinction du réflexe conditionnel dû à l\'absence de renforcement par le stimulus inconditionnel (viande). Les liaisons synaptiques transcorticales s\'inhibent temporairement.'
      }
    ],
    evaluationSituation: {
      context: 'Un chercheur entraîne des souris à fuir dans un compartiment sécurisé lorsqu\'un son retentit, sous peine de recevoir un choc électrique sur le plancher. Après ablation chirurgicale du cortex auditif, les souris ne réagissent plus au son mais continuent de fuir spontanément dès qu\'elles ressentent le choc électrique.',
      instructions: [
        '1. Nomme les deux types de réflexes mis en jeu.',
        '2. Explique pourquoi les souris fuient toujours lors du choc électrique malgré l\'ablation du cortex.',
        '3. Explique pourquoi l\'ablation du cortex auditif supprime la réponse au son.'
      ],
      solutionGuide: '1. La fuite au choc électrique est un réflexe inconditionnel (inné) ; la fuite au son est un réflexe conditionnel (acquis).\n2. Le réflexe inconditionnel de fuite au choc électrique est commandé par des centres nerveux sous-corticaux et spinaux réflexes qui restent intacts.\n3. Le réflexe conditionnel dépend de la liaison transcorticale formée entre l\'aire auditive et les aires motrices corticales. La destruction du cortex auditif supprime la réception et l\'intégration du stimulus conditionnel sonore.'
    },
    examTraps: [
      'Confondre stimulus inconditionnel (viande) et conditionnel (cloche).',
      'Penser que le réflexe inné nécessite le cortex cérébral : les centres innés sont sous-corticaux (bulbe, moelle).',
      'Oublier que l\'extinction n\'est pas un oubli définitif mais une inhibition qui peut être rapidement levée par renforcement.'
    ],
    quickMemo: 'Réflexe inné = spontané, stéréotypé, centre sous-cortical. Réflexe conditionnel = acquis par association répétée SN (antérieur) + SI -> SC -> RC. Exige le cortex cérébral et la création d\'une liaison synaptique transcorticale.',
    keywords: ['SVT Terminale D', 'réflexe conditionnel', 'Pavlov', 'stimulus inconditionnel', 'stimulus neutre', 'stimulus conditionnel', 'liaison transcorticale', 'extinction', 'apprentissage']
  },

  // =========================================================================
  // 3. AMÉLIORATION ET PROTECTION DES SOLS (SVT Tle D - LEÇON 3 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-amelioration-protection-sols',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La gestion des sols : Fertilité et durabilité',
    lessonTitle: 'Leçon 3 : L’amélioration et la protection des sols',
    objectifs: [
      'Définir le sol, le Complexe Argilo-Humique (CAH) et la structure grumeleuse',
      'Distinguer les engrais chimiques (NPK, seuil 150 kg/ha) et les amendements (calcaire, organique, humifère)',
      'Expliquer le mécanisme chimique et physique de l\'amendement calcaire (chaux vive CaO, CaCO3, libération de Ca2+, neutralisation du pH et floculation du CAH)',
      'Expliquer le rôle des vers de terre et de la microflore dans l\'amendement organique et la minéralisation',
      'Décrire et justifier les techniques de protection des sols : paillage, jachère, assolement/rotation, terrassement en escaliers sur fortes pentes, plantes de couverture / engrais verts (légumineuses et Rhizobium)'
    ],
    fullCourseContent: `1. Notions Fondamentales sur la Fertilité et le Complexe Argilo-Humique (CAH) :
- Le sol est la couche superficielle meuble de la croûte terrestre résultant de l'altération de la roche-mère et de la décomposition des matières organiques.
- Le Complexe Argilo-Humique (CAH) ou complexe absorbant :
  * Association colloïdale intime entre les feuillets d'argile minérale et les molécules d'humus organique.
  * L'argile et l'humus portent tous deux des charges électriques négatives superficielles et ont tendance à se repousser (état dispersé, sol compact asphyxiant ou battant).
  * Grâce aux cations bivalents échangeables comme le calcium ($Ca^{2+}$) et le magnésium ($Mg^{2+}$), les feuillets d'argile et d'humus sont reliés par des ponts calciques électrostatiques : c'est la floculation.
  * Le CAH floculé retient les cations nutritifs ($K^+$, $Mg^{2+}$, $Ca^{2+}$, $NH_4^+$) et évite leur lessivage par les eaux de pluie, tout en les libérant progressivement pour les racines des plantes.
- La structure grumeleuse : Structure idéale du sol formée d'agrégats stables et poreux séparés par des lacunes aérées permettant une circulation optimale de l'eau et de l'oxygène.

2. Les Amendements du Sol :
- Définition d'un amendement : Substance incorporée au sol pour corriger ses propriétés physiques, chimiques ou biologiques (contrairement aux engrais qui nourrissent directement la plante).
- A. L'amendement calcaire (chaulage) :
  * Produits utilisés : Chaux vive ($CaO$), chaux éteinte ($Ca(OH)_2$), carbonate de calcium ($CaCO_3$), marne, dolomie.
  * Mécanisme chimique :
    $CaO + H_2O \\longrightarrow Ca(OH)_2$
    $Ca(OH)_2 \\longrightarrow Ca^{2+} + 2 OH^-$
    $CaCO_3 + CO_2 + H_2O \\longrightarrow Ca(HCO_3)_2 \\longrightarrow Ca^{2+} + 2 HCO_3^-$
  * Effets physiques et chimiques :
    1. Libération d'ions $Ca^{2+}$ qui chassent les ions $H^+$ fixés sur le CAH et provoquent la floculation immédiate des colloïdes, créant une structure grumeleuse aérée.
    2. Les ions $OH^-$ et $HCO_3^-$ neutralisent l'acidité du sol (relèvement du pH de 4,5-5,0 vers un pH optimal de 6,5-7,0).
    3. Activation de la microflore bactérienne nitrifiante et minéralisatrice.
- B. L'amendement organique et le rôle des vers de terre :
  * Apport de fumier, compost ou résidus végétaux.
  * Les vers de terre (lombrics) avalent la terre et la matière organique : leurs déjections (turricules) sont très riches en azote assimilable, phosphore et potassium. Ils creusent des galeries verticales qui aèrent le sol et facilitent l'infiltration de l'eau.
  * La minéralisation lente par les micro-organismes libère des éléments nutritifs assimilables par les plantes.
- C. L'amendement humifère :
  * Apport de terreau ou tourbe riche en humus stable.
  * Améliore le pouvoir tampon, augmente la capacité de rétention d'eau des sols sableux et allège les sols argileux lourds.
- D. Les engrais minéraux (chimiques) :
  * Formules NPK (Azote N pour la croissance végétative, Phosphore P pour l'enracinement et la floraison, Potassium K pour la résistance et les fruits).
  * Seuil d'apport recommandé : En Côte d'Ivoire, l'apport optimal d'engrais NPK est d'environ 150 kg/ha. Au-delà, risque de toxicité, d'acidification et de pollution par lessivage des nitrates vers les nappes phréatiques.

3. Les Techniques de Protection et de Conservation des Sols :
- A. Le paillage (Mulching) :
  * Recouvrement de la surface du sol par une couche de paille, feuilles mortes ou résidus de récolte.
  * Protège contre l'impact érosif des gouttes de pluie (effet splash), limite l'évaporation de l'eau, maintient la fraîcheur et enrichit le sol en humus lors de sa décomposition.
- B. La jachère :
  * Repos temporaire de la terre cultivable pendant plusieurs années.
  * Permet la régénération naturelle de la couverture végétale, la reconstitution du stock de matière organique et la restauration de la structure grumeleuse.
- C. L'assolement et la rotation des cultures :
  * Division du champ en soles et succession ordonnée de cultures différentes sur une même parcelle (ex: Maïs -> Niébé/Arachide -> Manioc).
  * Évite l'épuisement sélectif des éléments minéraux du sol et rompt le cycle biologique des parasites et ravageurs.
- D. Le terrassement en escaliers (Cultures en terrasses) :
  * Aménagement des versants et terrains pentus en gradins horizontaux soutenus par des talus ou murets de pierres.
  * Brise la vitesse de ruissellement des eaux de pluie, favorise l'infiltration et stoppe net l'érosion torrentielle en nappe.
- E. Les plantes de couverture et engrais verts :
  * Culture de légumineuses (ex: Mucuna, Crotalaria, Pueraria, Arachide).
  * Les racines portent des nodosités hébergeant la bactérie symbiotique *Rhizobium*, capable de fixer directement l'azote gazeux atmosphérique ($N_2$) pour synthétiser des protéines.
  * L'enfouissement de la biomasse verte enrichit massivement le sol en azote organique sans apport d'engrais chimiques coûteux.`,
    definitions: [
      {
        term: 'Complexe Argilo-Humique (CAH)',
        definition: 'Édifice colloïdal électronégatif formé par l\'association intime de feuillets d\'argile et de macromolécules d\'humus pontés par des cations bivalents (Ca2+, Mg2+), capable d\'adsorber et d\'échanger réversiblement les nutriments minéraux.'
      },
      {
        term: 'Floculation',
        definition: 'Phénomène physico-chimique par lequel des particules colloïdales dispersées en suspension s\'agrègent en grumeaux stables sous l\'action d\'ions neutralisants comme le calcium (Ca2+).'
      },
      {
        term: 'Structure grumeleuse',
        definition: 'État structural optimal d\'un sol constitué d\'agrégats poreux stables séparés par des vides d\'aération, assurant une perméabilité équilibrée à l\'eau et aux gaz.'
      },
      {
        term: 'Amendement',
        definition: 'Opération culturale consistant à apporter au sol des substances minérales ou organiques destinées à améliorer durablement ses propriétés physiques, chimiques et biologiques.'
      },
      {
        term: 'Chaulage (Amendement calcaire)',
        definition: 'Apport de composés riches en calcium (CaO, CaCO3) visant à neutraliser l\'acidité du sol, libérer du Ca2+ et provoquer la floculation du CAH.'
      },
      {
        term: 'Turricules',
        definition: 'Déjections superficielles émises par les vers de terre, constituant un micro-amendement organique naturel hautement enrichi en azote minéral, phosphore et micro-organismes.'
      },
      {
        term: 'Paillage (Mulch)',
        definition: 'Couverture superficielle du sol par des débris végétaux empêchant l\'érosion pluviale directe, réduisant l\'évapotranspiration et freinant la prolifération des adventices.'
      },
      {
        term: 'Assolement',
        definition: 'Division d\'un domaine agricole en plusieurs parcelles distinctes appelées soles, soumises à un plan de rotation régulier de différentes espèces végétales.'
      },
      {
        term: 'Engrais vert (Plantes de couverture)',
        definition: 'Culture temporaire de végétaux à croissance rapide (souvent des légumineuses à nodosités fixatrices d\'azote) destinée à être fauchée et enfouie dans le sol pour accroître sa fertilité.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de floculation du CAH par le calcium',
        statement: 'Les colloïdes d\'argile et d\'humus chargés négativement se repoussent en milieu acide ou pauvre en cations ; l\'apport de cations bivalents Ca2+ neutralise leurs charges et crée des ponts calciques stables, provoquant leur floculation en agrégats grumeleux.'
      },
      {
        name: 'Règle de l\'efficacité NPK et dose optimale',
        statement: 'L\'apport d\'engrais minéral NPK améliore significativement le rendement jusqu\'à la dose limite optimale (environ 150 kg/ha) ; au-delà, les rendements plafonnent et le surplus entraîne l\'acidification du sol et la pollution des eaux souterraines.'
      }
    ],
    formulas: [
      {
        name: 'Équation d\'hydratation et d\'ionisation de la chaux vive',
        formula: 'CaO + H_2O \\longrightarrow Ca(OH)_2 \\longrightarrow Ca^{2+} + 2 OH^-',
        explanation: 'Libération d\'ions Ca2+ floculants et d\'ions hydroxyde OH- alcalinisants qui augmentent le pH du sol.',
        unitOrCondition: 'Amendement calcaire'
      },
      {
        name: 'Équation de solubilisation du carbonate de calcium',
        formula: 'CaCO_3 + CO_2 + H_2O \\rightleftharpoons Ca(HCO_3)_2 \\rightleftharpoons Ca^{2+} + 2 HCO_3^-',
        explanation: 'Transformation du calcaire insoluble en bicarbonate soluble sous l\'action du CO2 dissous.',
        unitOrCondition: 'Sol humide'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Diagnostiquer un sol infertile et prescrire des remèdes agronomiques',
        procedure: '1. Identifier les anomalies du sol : pH acide (< 5), structure compacte ou battante, absence d\'agrégats, lessivage important.\n2. Prescrire l\'amendement adapté : amendement calcaire (chaux, dolomie) pour floculer le CAH et remonter le pH ; amendement organique/humifère pour restaurer la porosité et l\'activité biologique.\n3. Prescrire les mesures de protection : paillage et cultures en terrasses si terrain en pente ; rotation avec légumineuses (engrais verts) pour enrichir en azote sans excès chimique.',
        tip: 'Toujours associer correction physico-chimique (amendements) et protection mécanique contre l\'érosion.'
      }
    ],
    examples: [
      {
        statement: 'Un planteur de cacao constate que son sol est très acide (pH = 4,2), tassé et que les engrais chimiques apportés sont immédiatement entraînés par les pluies. Que lui conseilles-tu ?',
        solution: 'Il doit d\'abord effectuer un chaulage (amendement calcaire à la chaux ou marne) pour libérer des ions Ca2+, floculer le complexe argilo-humique, redresser le pH vers 6,5 et restaurer la structure grumeleuse. Cela permettra au CAH de retenir les ions minéraux des engrais. Il doit également pratiquer le paillage sous ses cacaoyers pour stopper le ruissellement pluvial.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi l\'enfouissement de légumineuses (comme le Mucuna ou l\'arachide) est-il plus avantageux pour le sol que l\'épandage massif d\'engrais azotés de synthèse ?',
        correction: 'Les légumineuses possèdent des nodosités racinaires avec la bactérie symbiotique Rhizobium qui fixe l\'azote atmosphérique gratuit. Leur enfouissement apporte un azote organique à libération lente, enrichit le sol en humus stable, stimule les vers de terre et évite la pollution des nappes ainsi que l\'acidification causée par les engrais chimiques de synthèse.'
      }
    ],
    evaluationSituation: {
      context: 'Dans une région de l\'ouest ivoirien soumise à de fortes pluies tropicales sur terrain accidenté, un agriculteur pratique le défrichage par brûlis et la monoculture continue de maïs. En 3 ans, son rendement s\'effondre de 4 t/ha à 0,8 t/ha et le sol présente des ravines d\'érosion béantes.',
      instructions: [
        '1. Explique les causes de la dégradation rapide de ce sol.',
        '2. Propose un ensemble de techniques de réhabilitation et de protection adaptées au relief et au climat.',
        '3. Rédige un argumentaire scientifique pour convaincre le planteur d\'adopter l\'assolement avec des légumineuses.'
      ],
      solutionGuide: '1. Le brûlis détruit la matière organique et la microfaune superficielle ; la monoculture épuise les mêmes minéraux ; l\'absence de couvert végétal et la pente exposent le sol au ruissellement torrentiel qui arrache la couche arable fertile.\n2. Aménagements recommandés : terrassement en gradins (courbes de niveau) pour casser la vitesse de l\'eau, paillage épais sur les parcelles, apport de compost/fumier (amendement organique) et chaulage.\n3. L\'assolement avec légumineuses restaure le stock d\'azote grâce à la symbiose Rhizobium, rompt le cycle des parasites du maïs, améliore la structure du sol grâce au CAH et augmente durablement les rendements sans coût excessif en engrais.'
    },
    examTraps: [
      'Confondre un engrais (nutriment direct pour la plante) et un amendement (améliorateur des propriétés physiques/chimiques du sol).',
      'Croire que l\'apport massif d\'engrais chimiques NPK suffit à restaurer un sol érodé et acide (sans CAH floculé, l\'engrais est lessivé).',
      'Oublier que les légumineuses fixent l\'azote grâce à la symbiose avec les bactéries Rhizobium dans les nodosités.'
    ],
    quickMemo: 'CAH = Argile + Humus pontés par Ca2+ (floculation -> structure grumeleuse aérée). Amendement calcaire (CaO/CaCO3) = apporte Ca2+ et neutralise l\'acidité (monte le pH). Protection des sols = paillage, jachère, assolement, terrasses anti-érosion, légumineuses fixatrices de N2 (Rhizobium).',
    keywords: ['SVT Terminale D', 'gestion des sols', 'complexe argilo-humique', 'CAH', 'floculation', 'structure grumeleuse', 'amendement calcaire', 'chaulage', 'chaux vive', 'vers de terre', 'paillage', 'assolement', 'engrais vert', 'Rhizobium']
  },

  // =========================================================================
  // 4. L'EXPLOITATION DES GISEMENTS MINIERS (SVT Tle D - LEÇON 2 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-ressources-minieres-exploitation-gisements',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'Les ressources minières : Prospection, genèse et exploitation',
    lessonTitle: 'Leçon 2 : L\'exploitation des gisements miniers et pétrolifères',
    objectifs: [
      'Définir minerai, gisement, gîte minéral, gangue, teneur limite et taux de découverture',
      'Décrire les méthodes de prospection directe : alluvionnaire (en lit vif, batée/calebasse), géochimique (échantillonnage de sols à 30-40 cm / alluvions tous les 2 km, attaque à l\'eau chlorée et dosage à la rhodamine), géologique',
      'Décrire les méthodes de prospection indirecte (géophysique) : électrique (résistivité), magnétique (anomalies ferromagnétiques), radiométrique (compteur Geiger/scintillomètre), sismique réflexion (ondes acoustiques)',
      'Comparer les modes d\'exploitation : mine à ciel ouvert (gisements affleurants ou peu profonds) vs mine souterraine (gisements profonds, puits et galeries)',
      'Identifier les types de gisements d\'or (magmatique, filonien, résiduel d\'altération, alluvionnaire/placer)',
      'Évaluer les impacts socio-économiques positifs et environnementaux/sanitaires négatifs de l\'exploitation minière en Côte d\'Ivoire'
    ],
    fullCourseContent: `1. Notions Fondamentales sur les Ressources Minières :
- Minerai : Roche ou minéral naturel contenant un ou plusieurs éléments utiles avec une concentration suffisante pour justifier une exploitation industrielle rentable.
- Gisement : Concentration naturelle exceptionnelle d'un minéral ou métal dans la croûte terrestre techniquement et économiquement exploitable.
- Gangue : Partie stérile sans valeur économique entourant le minerai utile dans le gisement.
- Teneur du minerai : Proportion de métal utile contenu dans une tonne de roche brute (ex: 2 à 5 g d'or par tonne).
- Taux de découverture : Rapport entre le volume de mort-terrain (stérile superficiel à évacuer) et le volume de minerai exploitable dans une mine à ciel ouvert.

2. Les Méthodes de Prospection Minière :
- A. Prospection directe :
  1. Prospection alluvionnaire (en lit vif) :
     * Réalisée dans les cours d'eau actuels ou anciens lits de rivières.
     * Utilisation de la batée ou calebasse pour laver les alluvions par mouvement tourbillonnaire.
     * Principe : Séparation densimétrique fondée sur la très forte densité de l'or ($d = 19,3$) et des métaux lourds par rapport au quartz et aux sables légers ($d = 2,65$).
     * Distinction or vs magnétite/pyrite : L'or est malléable (s'écrase sans se briser à la pointe d'un couteau), inattaquable par l'acide nitrique pur et non attirable par un aimant.
  2. Prospection géochimique :
     * Prélèvement systématique d'échantillons selon un maillage précis : sols superficiels prélevés à 30-40 cm de profondeur tous les 200 m, alluvions tous les 2 km, ou roches saines.
     * Préparation : Séchage à l'étuve, concassage et tamisage fin (maille inférieure à 80 mesh).
     * Analyse chimique : Attaque de la poudre minérale par de l'eau chlorée ($HCl + HNO_3$) ou eau régale, puis dosage colorimétrique à la rhodamine B ou spectrométrie d'absorption atomique pour cartographier les anomalies géochimiques.
  3. Prospection géologique : Observation des affleurements rocheux, cassure au marteau de géologue et étude des failles et roches encaissantes.
- B. Prospection indirecte (Géophysique) :
  1. Méthode électrique : Mesure de la résistivité et conductibilité du sous-sol à l'aide d'un quadripôle d'électrodes (les minerais sulfurés et métalliques sont d'excellents conducteurs).
  2. Méthode magnétique : Mesure des variations du champ magnétique terrestre au magnétomètre pour détecter les anomalies causées par des corps ferromagnétiques ($Fe$, $Ni$, $Co$, magnétite).
  3. Méthode radiométrique : Détection des rayonnements gamma émis par les roches radioactives ($Uranium$, $Thorium$, $Radium$) à l'aide d'un compteur Geiger-Müller ou scintillomètre aéroporté.
  4. Méthode sismique de réflexion : Émission d'ondes acoustiques artificielles par camions vibreurs ou tirs d'explosifs et enregistrement des échos réfléchis sur les interfaces géologiques par des géophones pour dresser un modèle tridimensionnel des couches profondes.

3. Typologie des Gisements d'Or :
- Gisement magmatique : Or disséminé au sein de roches magmatiques profondes lors du refroidissement du magma.
- Gisement filonien (primaire) : Or concentré dans des filons de quartz hydrothermal injectés dans des fractures et failles tectoniques.
- Gisement résiduel d'altération (secondaire) : Concentration sur place de l'or dans le profil latéritique à la suite de l'altération chimique et du démantèlement des roches encaissantes sous climat tropical chaud et humide.
- Gisement alluvionnaire ou placer (secondaire) : Pépites et paillettes d'or arrachées aux filons, transportées par les eaux de ruissellement et piégées par gravité dans les sables et graviers des méandres de rivières.

4. Méthodes d'Exploitation Minière :
- A. Exploitation à ciel ouvert :
  * Utilisée pour les gisements affleurants ou situés à faible profondeur (< 100-200 m) comme les mines d'or (Tongon, Ity), de manganèse (Lauzoua), de fer ou de bauxite.
  * Décapage du mort-terrain superficiel, creusement de gradins en terrasses circulaires (fosses à ciel ouvert), extraction par pelles mécaniques géantes et camions bennes.
- B. Exploitation souterraine :
  * Utilisée pour les gisements très profonds ou filons étroits plongeants.
  * Fonçage d'un puits vertical d'accès avec chevalement, creusement de galeries horizontales étagées, aérage artificiel, pompage des eaux et extraction par skips (cages).

5. Impacts de l'Exploitation Minière :
- Impacts socio-économiques positifs : Création d'emplois directs et indirects, rentrées fiscales et devises pour l'État, construction de routes, écoles, hôpitaux et électrification des villages riverains.
- Impacts environnementaux et sanitaires négatifs : Déforestation massive, dégradation et érosion des sols, pollution dramatique des cours d'eau et nappes phréatiques par les métaux lourds (mercure, cyanure utilisés en orpaillage clandestin), destruction de la faune aquatique, affections respiratoires et pulmonaires (silicose due aux poussières minérales), effondrements de galeries et tensions sociales liées aux déplacements de populations.`,
    definitions: [
      {
        term: 'Gisement minier',
        definition: 'Volume de roche de la lithosphère enrichi naturellement en un ou plusieurs minéraux utiles dont la teneur et le tonnage permettent une extraction industrielle avec rentabilité financière.'
      },
      {
        term: 'Minerai',
        definition: 'Ensemble naturel constitué du minéral utile recherché intimement associé à une roche stérile appelée gangue.'
      },
      {
        term: 'Gangue',
        definition: 'Partie minérale non valorisable économiquement (stérile) enveloppant le minerai utile au sein du gisement.'
      },
      {
        term: 'Batée',
        definition: 'Récipient conique en métal ou en bois (calebasse) utilisé en prospection alluvionnaire pour concentrer les particules minérales denses par gravité sous un filet d\'eau.'
      },
      {
        term: 'Anomalie géochimique',
        definition: 'Concentration anormalement élevée d\'un élément chimique dans un échantillon de sol ou de sédiment par rapport au fond géochimique régional normal.'
      },
      {
        term: 'Placer (Gisement alluvionnaire)',
        definition: 'Accumulation sédimentaire secondaire de minéraux lourds et inaltérables (or, diamant, cassitérite) concentrés par triage mécanique dans les alluvions d\'un cours d\'eau.'
      },
      {
        term: 'Mine à ciel ouvert',
        definition: 'Mode d\'exploitation de gisements superficiels caractérisé par le décapage du mort-terrain et le terrassement de gradins concentriques à la surface du sol.'
      },
      {
        term: 'Mine souterraine',
        definition: 'Complexe d\'extraction minière en profondeur accessible par des puits verticaux et un réseau de galeries horizontales étayées.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de séparation densimétrique à la batée',
        statement: 'Lors du mouvement rotatif de la batée dans l\'eau, la force centrifuge et la gravité entraînent l\'évacuation préférentielle des sables légers (quartz d=2,65), laissant au fond du cône les particules métalliques de très forte densité (or d=19,3).'
      },
      {
        name: 'Critère de rentabilité d\'une mine à ciel ouvert',
        statement: 'Une exploitation à ciel ouvert reste économiquement viable tant que le taux de découverture (volume de stérile / volume de minerai) ne dépasse pas le seuil financier critique au-delà duquel l\'exploitation souterraine devient obligatoire.'
      }
    ],
    formulas: [
      {
        name: 'Taux de découverture (Strip Ratio)',
        formula: 'T_d = \\frac{V_{stérile}}{V_{minerai}} \\quad \\text{ou} \\quad \\frac{M_{mort-terrain}}{M_{minerai}}',
        explanation: 'Indique la masse ou le volume de mort-terrain à excaver pour extraire une tonne de minerai brut.',
        unitOrCondition: 'Sans unité ou en m³/t.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mener une démarche de prospection minière complète',
        procedure: '1. Phase stratégique régionale : télédétection satellitaire, géophysique aéroportée (magnétisme, radiométrie).\n2. Phase tactique au sol : prospection alluvionnaire à la batée le long du réseau hydrographique et prélèvement d\'échantillons de sols à 30-40 cm tous les 200 m (prospection géochimique).\n3. Traitement au laboratoire : dosage chimique à la rhodamine pour cartographier les contours de l\'anomalie.\n4. Phase de confirmation : forages carottés profonds et analyse des teneurs pour estimer les réserves du gisement.',
        tip: 'Toujours associer les indices alluvionnaires directs à la prospection géochimique de surface pour remonter au filon primaire.'
      }
    ],
    examples: [
      {
        statement: 'Au cours d\'un lavage à la batée dans un affluent du fleuve Bandama, un prospecteur recueille des paillettes brillantes jaunes. Comment peut-il prouver scientifiquement qu\'il s\'agit bien d\'or et non de pyrite de fer ?',
        solution: 'Il effectue deux tests simples : 1. Test mécanique de malléabilité : sous la pointe d\'un couteau, l\'or s\'aplatit et se déforme sans se rompre (métal très ductile et malléable), alors que la pyrite se pulvérise en poussière noirâtre. 2. Test chimique : l\'or est un métal noble inattaquable par l\'acide nitrique concentré ($HNO_3$), tandis que la pyrite de fer s\'y dissout rapidement avec effervescence.'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les conséquences dramatiques de l\'utilisation du mercure et du cyanure par les orpailleurs artisanaux clandestins en Côte d\'Ivoire ?',
        correction: 'Le mercure forme un amalgame avec l\'or mais est ensuite chauffé à l\'air libre, libérant des vapeurs hautement toxiques qui détruisent le système nerveux des mineurs (maladie de Minamata). Déversé dans les cours d\'eau, le mercure et le cyanure empoisonnent les poissons, polluent durablement les nappes phréatiques, rendent l\'eau impropre à la consommation humaine et provoquent des malformations congénitales chez les nouveau-nés des villages riverains.'
      }
    ],
    evaluationSituation: {
      context: 'Une société minière découvre un gisement aurifère à 40 mètres de profondeur sous une colline boisée d\'une superficie de 50 hectares dans le centre de la Côte d\'Ivoire. Le rapport géologique indique une teneur moyenne de 3,5 g d\'or par tonne de minerai pour un gisement estimé à 10 millions de tonnes de roche.',
      instructions: [
        '1. Justifie le choix de la méthode d\'exploitation (ciel ouvert vs souterraine).',
        '2. Calcule la quantité totale d\'or fin exploitable contenu dans ce gisement.',
        '3. Rédige trois recommandations écologiques strictes à inclure dans le plan de gestion environnementale de la mine.'
      ],
      solutionGuide: '1. Le gisement est situé à très faible profondeur (40 m) : l\'exploitation à ciel ouvert est la méthode la plus rentable et la plus sécurisée car le taux de découverture initial reste faible.\n2. Quantité totale d\'or = $10\\,000\\,000 \\text{ tonnes} \\times 3,5 \\text{ g/tonne} = 35\\,000\\,000 \\text{ g} = 35 \\text{ tonnes d\'or fin}$.\n3. Recommandations écologiques : (a) Obligation de revégétalisation et de remblayage progressif des fosses de gradins avec la terre arable stockée au début du projet ; (b) Construction de bassins étanches de décantation pour neutraliser les résidus de traitement au cyanure sans aucun rejet dans les fleuves ; (c) Alimentation des concasseurs par énergie solaire pour réduire l\'empreinte carbone.'
    },
    examTraps: [
      'Confondre un minerai (roche brute totale) et la gangue (partie stérile sans valeur).',
      'Oublier que la prospection à la batée repose sur la différence de DENSITÉ des minéraux dans l\'eau.',
      'Croire que les mines souterraines sont utilisées pour les gisements de surface (elles sont réservées aux gisements profonds > 200 m).'
    ],
    quickMemo: 'Prospection directe = Batée (séparation par densité or d=19,3), géochimie (sols 30-40 cm tous les 200 m, attaque eau chlorée + rhodamine). Prospection indirecte = électrique (résistivité), magnétique (Fe, Ni), radiométrique (Geiger), sismique. Mine ciel ouvert = gisement superficiel (<150 m) avec gradins vs Mine souterraine = gisement profond avec puits/galeries.',
    keywords: ['SVT Terminale D', 'ressources minières', 'or', 'gisement', 'minerai', 'gangue', 'batée', 'prospection alluvionnaire', 'prospection géochimique', 'rhodamine', 'sismique réflexion', 'mine ciel ouvert', 'mine souterraine', 'taux de découverture']
  },

  // =========================================================================
  // 5. TRANSMISSION DE DEUX CARACTÈRES HÉRÉDITAIRES : DIHYBRIDISME (SVT Tle D - LEÇON 12 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-dihybridisme-transmission-deux-caracteres',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La transmission des caractères héréditaires : Génétique formelle',
    lessonTitle: 'Leçon 12 : La transmission de deux caractères héréditaires chez les êtres vivants (Dihybridisme)',
    objectifs: [
      'Définir le dihybridisme, les gènes indépendants et les gènes liés (linkage)',
      'Analyser les proportions statistiques mendéliennes classiques du dihybridisme à gènes indépendants : F1 homogène 100%, F2 = 9/16, 3/16, 3/16, 1/16, et Test-cross = 1/4, 1/4, 1/4, 1/4 (25% chacun)',
      'Analyser le dihybridisme à gènes liés chez la drosophile (Morgan) : Test-cross donnant 4 phénotypes inégaux (2 majoritaires parentaux et 2 minoritaires recombinés par crossing-over)',
      'Déterminer la position relative des allèles chez l\'hétérozygote F1 : configuration Cis vs configuration Trans',
      'Calculer la distance génétique en Centimorgans (cM) ou Unités de Recombinaison (UR) : dg = (Effectifs recombinés / Effectif total) * 100',
      'Établir la carte factorielle linéaire (carte génétique) des chromosomes avec respect de l\'échelle',
      'Expliquer l\'absence de crossing-over chez le mâle de drosophile et résoudre les croisements F1 x F1 associés'
    ],
    fullCourseContent: `1. Notions Fondamentales et Lois de Mendel dans le Dihybridisme :
- Dihybridisme : Croisement entre deux individus de lignées pures différant par deux couples d'allèles (deux caractères héréditaires distincts).
- Lois fondamentales de Gregor Mendel :
  * 1ère loi (Loi d'uniformité de la génération F1) : Le croisement de deux lignées pures (homozygotes) donne une génération F1 100% homogène présentant le phénotype dominant.
  * 2ème loi (Loi de ségrégation ou de pureté des gamètes) : Lors de la méiose (anaphase I), les deux allèles d'un même couple se séparent obligatoirement, chaque gamète ne contenant qu'un seul allèle de chaque gène.
  * 3ème loi (Loi de disjonction indépendante des couples d'allèles) : La ségrégation d'un couple d'allèles s'effectue indépendamment de celle de tout autre couple situé sur une autre paire de chromosomes homologues.

2. Dihybridisme à Gènes Indépendants (Autosomiques non liés) :
- Caractéristiques génétiques : Les deux gènes sont situés sur deux paires de chromosomes homologues différentes.
- Croisement F1 x F1 (Autofécondation ou croisement entre hybrides F1) :
  * Chaque parent F1 produit 4 types de gamètes équiprobables (25% ou 1/4 chacun) : AB, Ab, aB, ab.
  * L'échiquier de croisement à 16 cases donne les célèbres proportions mendéliennes :
    - 9/16 [A, B] : Phénotype parental double dominant.
    - 3/16 [A, b] : Phénotype recombiné (dominant 1 / récessif 2).
    - 3/16 [a, B] : Phénotype recombiné (récessif 1 / dominant 2).
    - 1/16 [a, b] : Phénotype parental double récessif.
- Test-Cross (Croisement-test : F1 x double récessif homozygote) :
  * Le parent double récessif ne produit qu'un seul type de gamète (100% ab).
  * Les phénotypes de la descendance reflètent directement les proportions des gamètes émis par le parent F1 testé.
  * Résultat : 4 phénotypes équiprobables (25% ou 1/4 chacun) : 25% [A, B], 25% [A, b], 25% [a, B], 25% [a, b].

3. Dihybridisme à Gènes Liés (Linkage) et Travaux de Thomas Hunt Morgan :
- Caractéristiques génétiques : Les deux gènes sont situés sur la même paire de chromosomes homologues.
- Mécanisme du Crossing-Over (Enjambement chromosomique) :
  * En prophase I de méiose, les chromosomes homologues s'apparient en tétrades.
  * Des chiasmas se forment entre chromatides non-sœurs, suivis d'une cassure et d'un échange réciproque de segments chromosomiques homologues.
  * Ce brassage intra-chromosomique produit des chromatides recombinées porteuses de nouvelles combinaisons d'allèles.
- Analyse du Test-Cross chez la drosophile femelle F1 (Morgan) :
  * Femelle F1 [corps gris, ailes longues] x Mâle double récessif [corps noir, ailes vestigiales].
  * Résultat : 4 phénotypes d'effectifs INÉGAUX :
    - 2 phénotypes PARENTAUX majoritaires (> 50% au total, ex: 41,5% [G, L] et 41,5% [n, vg]).
    - 2 phénotypes RECOMBINÉS minoritaires (< 50% au total, ex: 8,5% [G, vg] et 8,5% [n, L]).
  * Conclusion rigoureuse : Les deux gènes sont LIÉS (portés par le même chromosome) et ont subi un crossing-over lors de l'ovogenèse chez la femelle F1.

4. Configuration Allélique (Cis vs Trans) et Distance Génétique :
- Configuration des allèles chez l'hétérozygote F1 :
  * Position Cis : Les deux allèles dominants sont sur le même chromosome et les deux récessifs sur l'autre (écriture : $\\frac{AB}{ab}$). Les phénotypes parentaux majoritaires sont [A, B] et [a, b].
  * Position Trans : Un allèle dominant et un allèle récessif sont sur chaque chromosome (écriture : $\\frac{Ab}{aB}$). Les phénotypes parentaux majoritaires sont alors [A, b] et [a, B].
- Calcul de la Distance Génétique (dg) :
  * $dg = \\frac{\\text{Effectif des phénotypes recombinés}}{\\text{Effectif total de la descendance}} \\times 100$
  * Unité : Centimorgan (cM) ou Unité de Recombinaison (UR). Par convention : 1% de recombinaison = 1 cM = 1 UR.
- Établissement de la Carte Factorielle (Carte génétique) :
  * Représentation linéaire d'un segment de chromosome montrant l'ordre et la distance relative en UR séparant les loci des gènes.
  * Exigence méthodologique APC : Tracer un axe horizontal ou vertical, fixer une échelle claire (ex: 1 cm = 5 UR), placer les loci et noter la distance calculée.

5. Particularité Fondamentale : Absence de Crossing-Over chez le Mâle de Drosophile :
- Chez la drosophile mâle (*Drosophila melanogaster*), il n'y a AUCUN crossing-over (linkage absolu).
- Un mâle hétérozygote F1 ne produit donc STRICTEMENT que 2 types de gamètes parentaux à 50% chacun.
- Croisement F1 femelle x F1 mâle dans le cas de gènes liés :
  * La femelle produit 4 types de gamètes : parentaux à $\\frac{1-p}{2}$ et recombinés à $\\frac{p}{2}$ (où $p$ est la fréquence de crossing-over).
  * Le mâle produit 2 types de gamètes parentaux à 50% (1/2).
  * L'échiquier de croisement comprend alors 8 cases (4 colonnes x 2 lignes).`,
    definitions: [
      {
        term: 'Dihybridisme',
        definition: 'Croisement de deux individus appartenant à des lignées pures différentes pour deux caractères héréditaires distincts contrôlés par deux couples d\'allèles.'
      },
      {
        term: 'Gènes indépendants',
        definition: 'Gènes dont les loci sont situés sur des paires de chromosomes homologues différentes, subissant un brassage inter-chromosomique lors de l\'anaphase I.'
      },
      {
        term: 'Gènes liés (Linkage)',
        definition: 'Gènes dont les loci sont situés sur la même paire de chromosomes homologues, transmis ensemble sauf en cas de crossing-over.'
      },
      {
        term: 'Crossing-over (Enjambement)',
        definition: 'Échange réciproque de segments de chromatides non-sœurs au niveau des chiasmas lors de la prophase I de la méiose, créant de nouvelles associations d\'allèles (brassage intra-chromosomique).'
      },
      {
        term: 'Test-Cross (Croisement-test)',
        definition: 'Croisement d\'un individu hétérozygote F1 de génotype inconnu avec un individu homozygote double récessif pour révéler la nature et les proportions des gamètes formés par l\'hybride.'
      },
      {
        term: 'Distance génétique',
        definition: 'Distance relative séparant deux loci sur un même chromosome, proportionnelle au pourcentage de recombinaison issu du crossing-over (1% de recombinés = 1 centimorgan = 1 UR).'
      },
      {
        term: 'Carte factorielle',
        definition: 'Représentation graphique linéaire à l\'échelle d\'un chromosome indiquant la position relative des gènes (loci) et les distances en unités de recombinaison (cM).'
      },
      {
        term: 'Position Cis',
        definition: 'Disposition chromosomique chez un dihybride où les deux allèles dominants sont situés sur un même chromosome homologue et les deux récessifs sur l\'autre (AB/ab).'
      },
      {
        term: 'Position Trans',
        definition: 'Disposition chromosomique chez un dihybride où chaque chromosome homologue porte un allèle dominant et un allèle récessif (Ab/aB).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Critère de distinction Test-Cross Indépendants vs Liés',
        statement: 'Si le test-cross donne 4 phénotypes équiprobables à 25% (1/4 chacun), les deux gènes sont INDÉPENDANTS (brassage interchromosomique) ; si le test-cross donne 4 phénotypes inégaux (2 majoritaires parentaux et 2 minoritaires recombinés), les deux gènes sont LIÉS avec crossing-over (brassage intrachromosomique).'
      },
      {
        name: 'Règle de l\'absence de crossing-over chez le mâle de drosophile',
        statement: 'Chez le mâle de drosophile, le crossing-over est totalement absent : un mâle hétérozygote ne produit que 2 sortes de gamètes de type parental à 50% chacun.'
      }
    ],
    formulas: [
      {
        name: 'Formule de la Distance Génétique (dg)',
        formula: 'dg = \\frac{\\sum \\text{Effectifs recombinés}}{\\text{Effectif total}} \\times 100',
        explanation: 'Calcule la fréquence de recombinaison en centimorgans (cM) ou unités de recombinaison (UR).',
        unitOrCondition: '1% de recombinaison = 1 cM = 1 UR (valable si dg < 50 cM)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Démarche complète de résolution d\'un problème de dihybridisme',
        procedure: '1. Analyse du croisement 1 (P1 x P2 -> F1) : Vérifier l\'homogénéité de F1 (1ère loi de Mendel) pour déterminer la dominance et récessivité de chaque couple d\'allèles et définir les symboles.\n2. Analyse du croisement 2 (Test-Cross F1 x double récessif) : Comparer les effectifs des 4 phénotypes obtenus.\n   - Si proportions 1:1:1:1 (25% chacun) -> Conclure : Gènes indépendants (2 paires de chromosomes distinctes).\n   - Si 2 phénotypes parentaux majoritaires et 2 phénotypes recombinés minoritaires -> Conclure : Gènes liés avec crossing-over.\n3. Déterminer la position des allèles chez F1 : Repérer les phénotypes parentaux majoritaires pour écrire le génotype en Cis (AB/ab) ou en Trans (Ab/aB).\n4. Calculer la distance génétique : Appliquer la formule dg = (Recombinés / Total) * 100 en UR.\n5. Établir la carte factorielle : Tracer l\'axe avec échelle linéaire, placer les loci et noter la distance.\n6. Dresser l\'échiquier de croisement rigoureux avec les génotypes et fréquences des gamètes.',
        tip: 'Toujours expliciter le raisonnement écrit avant de dessiner les échiquiers.'
      }
    ],
    examples: [
      {
        statement: 'On croise une drosophile femelle F1 [corps gris, ailes longues] avec un mâle [corps noir, ailes vestigiales]. On obtient : 920 corps gris ailes longues, 910 corps noirs ailes vestigiales, 85 corps gris ailes vestigiales, 85 corps noirs ailes longues. Analyse ces résultats et établis la carte factorielle.',
        solution: 'Total descendance = 920 + 910 + 85 + 85 = 2000 drosophiles. Les 4 phénotypes sont inégaux avec 2 parentaux majoritaires (920 + 910 = 1830 soit 91,5%) et 2 recombinés minoritaires (85 + 85 = 170 soit 8,5%). Les gènes couleur du corps et longueur des ailes sont donc LIÉS (portés par le même autosome). Les parentaux majoritaires étant [G, L] et [n, vg], la femelle F1 est en configuration CIS : G L / n vg. Distance génétique dg = (170 / 2000) * 100 = 8,5 UR (cM). Carte factorielle : Axe avec échelle 1 cm = 2 UR, Locus "couleur du corps" séparé de 4,25 cm du Locus "longueur des ailes" avec indication "8,5 cM".'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi les phénotypes recombinés sont-ils toujours en proportion strictement inférieure à 50% dans le cas de deux gènes liés ?',
        correction: 'Le crossing-over n\'a lieu que dans une fraction des cellules germinales entrant en méiose. De plus, lorsqu\'un chiasma se forme au cours d\'une méiose, il n\'implique que 2 chromatides non-sœurs sur les 4 de la tétrade : les 2 autres chromatides restent parentales. Par conséquent, la fréquence des gamètes recombinés ne peut mathématiquement jamais dépasser 50%.'
      }
    ],
    evaluationSituation: {
      context: 'Un laboratoire de génétique étudie la transmission de deux anomalies chez la tomate : le caractère tige velue (v+) dominant sur tige glabre (v) et le caractère fruit rouge (r+) dominant sur fruit jaune (r). Le croisement d\'une plante hétérozygote F1 avec une plante double récessive donne 480 plantes à tige velue et fruits rouges, 475 à tige glabre et fruits jaunes, 22 à tige velue et fruits jaunes, et 23 à tige glabre et fruits rouges.',
      instructions: [
        '1. Détermine le mode de transmission des deux gènes en justifiant rigoureusement.',
        '2. Précise le génotype de la plante F1 et la disposition de ses allèles.',
        '3. Calcule la distance génétique séparant les deux loci et trace la carte factorielle (Échelle : 1 cm pour 1 UR).'
      ],
      solutionGuide: '1. Le croisement avec le double récessif est un test-cross. L\'obtention de 4 phénotypes inégaux avec une très large majorité de phénotypes parentaux (480 + 475 = 955) et une minorité de phénotypes recombinés (22 + 23 = 45 sur un total de 1000 plantes) prouve que les deux gènes sont LIÉS sur la même paire de chromosomes homologues et ont subi un crossing-over en prophase I.\n2. Les phénotypes majoritaires parentaux étant [v+, r+] et [v, r], les deux allèles dominants sont portés par le même chromosome : la plante F1 est en configuration CIS, génotype : $\\frac{v^+ r^+}{v r}$.\n3. Distance génétique $dg = \\frac{45}{1000} \\times 100 = 4,5 \\text{ UR (cM)}$. Carte factorielle : segment de droite avec les deux loci distants de 4,5 cm selon l\'échelle imposée.'
    },
    examTraps: [
      'Confondre 9/16, 3/16, 3/16, 1/16 (croisement F1 x F1 gènes indépendants) et 1/4, 1/4, 1/4, 1/4 (Test-cross gènes indépendants).',
      'Oublier d\'indiquer l\'échelle lors du tracé de la carte factorielle.',
      'Oublier que chez le mâle de drosophile, le crossing-over est ABSENT.'
    ],
    quickMemo: 'Dihybridisme : Test-cross -> 4 phénotypes égaux 25% = Gènes indépendants (2 paires chr). Test-cross -> 4 phénotypes inégaux (Parentaux > Recombinés) = Gènes liés (Linkage + crossing-over). dg = (Recombinés / Total) * 100 en UR. Carte factorielle = ordre et distances des loci à l\'échelle.',
    keywords: ['SVT Terminale D', 'dihybridisme', 'gènes indépendants', 'gènes liés', 'linkage', 'crossing-over', 'test-cross', 'distance génétique', 'centimorgan', 'carte factorielle', 'drosophile', 'Morgan', 'Cis', 'Trans']
  },

  // =========================================================================
  // 6. GÉNÉTIQUE HUMAINE & PEDIGREES (SVT Tle D - LEÇON 11 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-genetique-humaine-heredite',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La transmission des caractères héréditaires : Génétique humaine',
    lessonTitle: 'Leçon 11 : La transmission d’un caractère héréditaire chez l’Homme (Génétique humaine et Pedigrees)',
    objectifs: [
      'Lire et décoder un arbre généalogique (pedigree) selon les conventions internationales',
      'Démontrer la dominance ou la récessivité d\'un allèle morbide à partir des observations généalogiques',
      'Démontrer la localisation chromosomique de l\'allèle : autosomique vs gonosomique lié au chromosome sexuel X ou Y',
      'Identifier les modes de transmission classiques : Albinisme (autosomique récessif), Brachydactylie (autosomique dominant), Daltonisme et Hémophilie (récessif lié à X), Groupes sanguins ABO (polyallélisme et codominance sur chromosome 9)',
      'Écrire les génotypes certains et probables de chaque individu de l\'arbre généalogique',
      'Calculer des probabilités génétiques précises dans le cadre du conseil génétique prénatal',
      'Diagnostiquer les anomalies chromosomiques de nombre (Trisomie 21 $2n+1=47$, syndrome de Turner X0 $2n-1=45$, syndrome de Klinefelter XXY $2n+1=47$) et de structure'
    ],
    fullCourseContent: `1. Méthodes d'Étude de la Génétique Humaine et Conventions des Pedigrees :
- Difficultés de la génétique humaine : Croisements expérimentaux impossibles pour des raisons éthiques, faible descendance par couple, durée de génération longue (25-30 ans), grand nombre de chromosomes (2n = 46).
- Outils d'investigation : Analyse des arbres généalogiques (pedigrees), étude des caryotypes, analyses d'ADN (séquençage, PCR, électrophorèse).
- Symboles conventionnels d'un pedigree :
  * Carré = Homme ; Cercle = Femme ; Losange = Sexe non précisé.
  * Symbole blanc = Individu sain ; Symbole noir/plein = Individu malade/atteint.
  * Ligne horizontale = Mariage ; Double ligne = Mariage consanguin (cousins).
  * Chiffres romains (I, II, III...) = Générations ; Chiffres arabes (1, 2, 3...) = Individus de gauche à droite.

2. Démarche Rigoureuse de Démonstration en 2 Étapes :
- Étape 1 : Déterminer la dominance ou la récessivité de l'allèle tare :
  * Hypothèse récessive : Si deux parents sains (phénotype normal) ont un ou plusieurs enfants malades, l'allèle responsable de la maladie est RÉCESSIF (noté minuscule, ex: a ou d). Les parents sains possèdent l'allèle muté masqué à l'état hétérozygote (porteurs sains).
  * Hypothèse dominante : Si chaque enfant malade a au moins un parent malade et que la maladie se transmet sans saut de génération, l'allèle responsable est DOMINANT (noté majuscule, ex: B ou H).
- Étape 2 : Déterminer la localisation chromosomique (Autosome vs Gonosome X ou Y) :
  * Élimination de la liaison au chromosome Y : Si des femmes sont atteintes, ou si un père malade a des fils sains, ou si un père sain a des fils malades, le gène n'est PAS sur la partie spécifique de Y.
  * Test de la liaison au chromosome X (pour maladie récessive) :
    - Règle 1 : Une fille malade ($X^m X^m$) doit obligatoirement avoir son père malade ($X^m Y$) car son père lui transmet l'un de ses chromosomes X. Si une fille malade a un père sain ($X^N Y$), le gène est obligatoirement AUTOSOMIQUE.
    - Règle 2 : Une mère malade ($X^m X^m$) doit obligatoirement donner 100% de fils malades ($X^m Y$).
  * Test de la liaison au chromosome X (pour maladie dominante) :
    - Un homme malade ($X^M Y$) marié à une femme saine ($X^s X^s$) transmet obligatoirement la maladie à 100% de ses filles ($X^M X^s$) et à AUCUN de ses fils ($X^s Y$).

3. Étude des Cas Types du Programme Officiel :
- A. L'Albinisme (Autosomique Récessif) :
  * Absence de mélanine par déficit en tyrosinase.
  * L'allèle albinos $a$ est récessif sur l'allèle normal $A$.
  * Les malades sont homozygotes $\\frac{a}{a}$ ; les parents sains d'un enfant albinos sont hétérozygotes porteurs sains $\\frac{A}{a}$.
  * Risque pour deux parents hétérozygotes d'avoir un enfant albinos = 1/4 (25%).
- B. La Brachydactylie (Autosomique Dominant) :
  * Doigts anormalement courts par soudure des phalanges.
  * L'allèle muté $B$ est dominant sur l'allèle normal $b$.
  * Tout individu malade possède au moins un allèle $B$ ($\\\\frac{B}{b}$ ou $\\\\frac{B}{B}$).
- C. Les Groupes Sanguins ABO (Polyallélisme et Codominance - Chromosome 9) :
  * 3 allèles majeurs : $A$, $B$, $O$.
  * Les allèles $A$ et $B$ sont codominants entre eux (groupe AB : $\\frac{A}{B}$).
  * L'allèle $O$ est récessif par rapport à $A$ et $B$ (groupe O : $\\frac{O}{O}$ ; groupe A : $\\frac{A}{A}$ ou $\\frac{A}{O}$ ; groupe B : $\\frac{B}{B}$ ou $\\frac{B}{O}$).
- D. Le Daltonisme et l'Hémophilie (Gonosomique Récessif lié à X) :
  * Daltonisme (trouble de la vision des couleurs) et Hémophilie (défaut de coagulation sanguine).
  * L'allèle normal est dominant $X^D$, l'allèle morbide est récessif $X^d$.
  * Homme sain : $X^D Y$ ; Homme malade : $X^d Y$ (hémizygote, ne possède qu'un seul allèle X).
  * Femme saine non conductrice : $X^D X^D$ ; Femme conductrice saine : $X^D X^d$ ; Femme malade : $X^d X^d$.
  * Une femme conductrice mariée à un homme sain transmet la maladie à 50% de ses fils ($X^d Y$) ; toutes ses filles sont phénotypiquement saines mais 50% d'entre elles sont conductrices ($X^D X^d$).

4. Les Anomalies Chromosomiques et Caryotypes :
- Caryotype normal : Homme = $46, XY$ ($22AA + XY$) ; Femme = $46, XX$ ($22AA + XX$).
- Mécanisme : Non-disjonction méiotique des chromosomes homologues en anaphase I ou des chromatides en anaphase II lors de la gamétogenèse parentale.
- Anomalies de nombre (Aneuploïdies) :
  * Trisomie 21 (Syndrome de Down) : $2n+1 = 47$ chromosomes ($47, XY, +21$ ou $47, XX, +21$).
  * Syndrome de Klinefelter : $47, XXY$ (homme stérile, grande taille, gynécomastie).
  * Syndrome de Turner : $45, X0$ (femme stérile de petite taille, absence d'ovaires).`,
    definitions: [
      {
        term: 'Pedigree (Arbre généalogique)',
        definition: 'Représentation graphique standardisée des liens de parenté et de la transmission d\'un ou plusieurs phénotypes au sein d\'une famille sur plusieurs générations.'
      },
      {
        term: 'Allèle morbide (ou muté)',
        definition: 'Version anormale d\'un gène résultant d\'une mutation génétique et responsable d\'un dysfonctionnement ou d\'une maladie héréditaire.'
      },
      {
        term: 'Hémizygote',
        definition: 'État d\'un individu mâle portant un gène unique situé sur le chromosome sexuel X sans équivalent sur le chromosome Y ($X^A Y$ ou $X^a Y$).'
      },
      {
        term: 'Conductrice (Vectrice)',
        definition: 'Femme hétérozygote asymptomatique ($X^N X^m$) portant sur l\'un de ses chromosomes X un allèle morbide récessif qu\'elle peut transmettre à sa descendance.'
      },
      {
        term: 'Consanguinité',
        definition: 'Union biologique entre deux individus apparentés ayant un ou plusieurs ancêtres communs récents, augmentant fortement le risque d\'homozygotie pour des allèles récessifs morbides rares.'
      },
      {
        term: 'Caryotype',
        definition: 'Représentation ordonnée et classée par paires de taille décroissante et position du centromère de l\'ensemble des chromosomes d\'une cellule bloquée en métaphase.'
      },
      {
        term: 'Aneuploïdie',
        definition: 'Anomalie du caryotype caractérisée par la présence d\'un nombre anormal de chromosomes par excès (trisomie $2n+1$) ou par défaut (monosomie $2n-1$).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'or de la récessivité',
        statement: 'Si deux parents au phénotype sain ont au moins un enfant malade, l\'allèle responsable de la maladie est obligatoirement RÉCESSIF et les deux parents sont obligatoirement hétérozygotes porteurs sains.'
      },
      {
        name: 'Règle d\'exclusion de la liaison à l\'X pour maladie récessive',
        statement: 'Si une fille malade a un père sain, la maladie NE PEUT PAS être liée au chromosome X : elle est obligatoirement AUTOSOMIQUE.'
      }
    ],
    formulas: [
      {
        name: 'Probabilité combinée de transmission (Conseil Génétique)',
        formula: 'P(\\text{Enfant malade}) = P(\\text{Père porteur}) \\times P(\\text{Mère porteuse}) \\times P(\\text{Transmission des 2 allèles mutés})',
        explanation: 'Pour deux parents sains issus de familles touchées par une tare autosomique récessive.',
        unitOrCondition: 'Calcul de probabilité composé'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre méthodiquement un exercice de génétique humaine (APC)',
        procedure: '1. Analyse de la dominance/récessivité : Localiser un couple clé (ex: I1-I2 sains donnant II3 malade -> Allèle récessif car les parents transmettent la tare sans l\'exprimer).\n2. Détermination du support chromosomique : Tester successivement (a) Liaison à Y -> éliminée si femmes atteintes ; (b) Liaison à X récessif -> rechercher si une fille malade a un père sain (si oui -> exclusif autosome) ; (c) Confirmer l\'hérédité autosomique.\n3. Écriture des génotypes : Attribuer les génotypes certains aux individus malades (a/a ou Xd Y), déduire ceux des parents hétérozygotes (A/a ou XD Xd), et exprimer les probabilités pour les individus sains non certains (2/3 A/a et 1/3 A/A).\n4. Calcul de probabilité pour le conseil génétique : Multiplier les probabilités indépendantes des parents et de l\'échiquier.',
        tip: 'Toujours justifier chaque étape par les numéros précis des individus de l\'arbre (ex: couple II.1 et II.2).'
      }
    ],
    examples: [
      {
        statement: 'Dans un arbre généalogique, les parents I1 et I2 sont sains. Ils ont 4 enfants : une fille II1 saine, un garçon II2 malade du daltonisme, une fille II3 saine et un garçon II4 sain. Le daltonisme étant une maladie récessive liée à l\'X, détermine le génotype des parents et la probabilité pour II1 d\'être conductrice.',
        solution: 'Le père I1 est sain donc son génotype est obligatoirement $X^D Y$. Le fils II2 est daltonien donc de génotype $X^d Y$. Son chromosome Y venant du père, son allèle $X^d$ vient obligatoirement de sa mère I1 qui est saine : la mère I1 est donc hétérozygote conductrice de génotype $X^D X^d$. La fille II1 a reçu l\'allèle $X^D$ de son père ; elle a 1 chance sur 2 (50%) d\'avoir reçu $X^D$ de sa mère ($X^D X^D$) et 1 chance sur 2 (50%) d\'avoir reçu $X^d$ ($X^D X^d$). La probabilité que II1 soit conductrice est donc de 1/2.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi un homme atteint d\'une maladie récessive liée au chromosome X (comme l\'hémophilie) ne transmet-il jamais la maladie à ses fils ?',
        correction: 'L\'homme possède la paire de chromosomes sexuels XY. Pour engendrer un garçon, il lui transmet obligatoirement son chromosome Y (qui ne porte pas le gène de l\'hémophilie), le chromosome X du fils provenant exclusivement de sa mère. Un père malade ne transmet donc jamais son allèle morbide lié à l\'X à ses fils (il le transmet en revanche à 100% de ses filles qui deviennent conductrices).'
      }
    ],
    evaluationSituation: {
      context: 'Un couple consulte un médecin généticien avant son mariage. L\'homme a une sœur albinos, mais ses deux parents sont sains. La femme a un frère albinos et ses deux parents sont également sains. Aucun des deux futurs conjoints n\'est albinos.',
      instructions: [
        '1. Rappelle le mode de transmission de l\'albinisme.',
        '2. Détermine la probabilité pour chacun des deux futurs conjoints d\'être hétérozygote porteur sain.',
        '3. Calcule la probabilité pour ce couple d\'avoir un premier enfant albinos.'
      ],
      solutionGuide: '1. L\'albinisme est une anomalie héréditaire autosomique récessive (allèle a récessif sur allèle sain A).\n2. Les parents de l\'homme et de la femme sont tous deux sains mais ont eu un enfant albinos (a/a) : ces parents sont donc obligatoirement hétérozygotes (A/a). L\'échiquier de croisement entre deux hétérozygotes donne : 1/4 A/A, 2/4 A/a, 1/4 a/a. Sachant que l\'homme et la femme sont phénotypiquement sains (ils ne sont pas a/a), ils se situent parmi les 3/4 sains. La probabilité pour chacun d\'être hétérozygote porteur sain (A/a) est donc de 2/3.\n3. Pour que leur enfant soit albinos (a/a), il faut : (a) que le père soit A/a ($P = 2/3$), (b) que la mère soit A/a ($P = 2/3$), et (c) que deux parents A/a transmettent tous deux l\'allèle a ($P = 1/4$). Probabilité finale = $\\frac{2}{3} \\times \\frac{2}{3} \\times \\frac{1}{4} = \\frac{4}{36} = \\frac{1}{9}$ (soit environ 11,1%).'
    },
    examTraps: [
      'Calculer la probabilité d\'un individu sain issu de parents hétérozygotes comme étant 2/4 au lieu de 2/3 (on sait qu\'il n\'est pas malade, donc le dénominateur est 3 et non 4).',
      'Affirmer qu\'un homme est hétérozygote pour un gène lié au chromosome X (l\'homme est hémizygote : il ne possède qu\'un seul allèle X).',
      'Oublier de formuler clairement les deux étapes de démonstration (Dominance puis Localisation chromosomique).'
    ],
    quickMemo: 'Parents sains + enfant malade = Allèle Récessif. Fille malade + père sain = Autosomique. Mère malade -> 100% fils malades et Père malade -> 100% filles conductrices = Lié à X récessif. Probabilité individu sain issu de parents hétérozygotes = 2/3 A/a.',
    keywords: ['SVT Terminale D', 'génétique humaine', 'arbre généalogique', 'pedigree', 'albinisme', 'daltonisme', 'hémophilie', 'autosomique récessif', 'gonosomique lié à X', 'hémizygote', 'conseil génétique', 'caryotype', 'trisomie 21']
  },

  // =========================================================================
  // 7. LA REPRODUCTION CHEZ LES SPERMAPHYTES (SVT Tle D - LEÇON 10 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-reproduction-spermaphytes',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La reproduction chez les spermaphytes : Angiospermes',
    lessonTitle: 'Leçon 10 : La reproduction chez les Spermaphytes (Organisation florale et Double Fécondation)',
    objectifs: [
      'Décrire l\'organisation anatomique d\'une fleur d\'Angiosperme (pièces stériles et pièces fertiles)',
      'Détailler la structure de l\'anthère et la microsporogenèse aboutissant au grain de pollen à 2 cellules',
      'Détailler la structure de l\'ovule et la mégasporogenèse aboutissant au sac embryonnaire à 7 cellules et 8 noyaux',
      'Expliquer la pollinisation, la germination du grain de pollen et la croissance du tube pollinique',
      'Expliquer le mécanisme fondamental de la double fécondation des Angiospermes : formation de l\'œuf principal diploïde (2n) et de l\'œuf accessoire triploïde (3n)',
      'Décrire le devenir des pièces florales après fécondation : ovule -> graine, ovaire -> fruit'
    ],
    fullCourseContent: `1. Organisation Générale de la Fleur des Angiospermes :
- La fleur est l'appareil reproducteur des Spermaphytes. Elle comprend 4 verticilles insérés sur le réceptacle floral :
  * Pièces protectrices stériles : Calice (ensemble des sépales) et Corolle (ensemble des pétales), formant le périanthe.
  * Pièces reproductrices fertiles :
    - L'androcée (appareil reproducteur mâle) : ensemble des étamines. Chaque étamine comprend un filet et une anthère à 4 sacs polliniques (microsporanges).
    - Le gynécée ou pistil (appareil reproducteur femelle) : formé d'un ou plusieurs carpelles comprenant un stigmate papilleux récepteur, un style et un ovaire renfermant un ou plusieurs ovules.

2. Formation du Grain de Pollen (Microsporogenèse) :
- Structure de l'anthère jeune : 4 sacs polliniques tapissés d'une assise nourricière (tapis) et renfermant des cellules-mères diploïdes ($2n$).
- Étapes de formation :
  1. Méiose : Chaque cellule-mère diploïde ($2n$) subit les deux divisions de la méiose pour donner une tétrade de 4 microspores haploïdes ($n$).
  2. Mitose asymétrique : Chaque microspore ($n$) subit une mitose pour donner un grain de pollen mûr à 2 cellules inégales :
     - La cellule végétative (grande cellule à cytoplasme abondant et noyau végétatif volumineux assurant la croissance du tube pollinique).
     - La cellule reproductrice (ou cellule génératrice, plus petite, flottant dans le cytoplasme de la cellule végétative).
- Enveloppes du grain de pollen :
  * Exine : membrane externe épaisse, ornée et imperméable constituée de sporopollénine, percée de pores d'exine.
  * Intine : membrane interne fine, cellulosique et élastique.

3. Formation du Sac Embryonnaire (Mégasporogenèse) :
- Structure de l'ovule anatrope :
  * Le nucelle : tissu central nourricier entouré de deux téguments protecteurs (la primine externe et la secondine interne).
  * Le micropyle : orifice étroit ménagé par les téguments au pôle inférieur.
  * La chalaze : base du nucelle où s'insère le faisceau conducteur issu du funicule (cordon reliant l'ovule au placenta ovarien).
- Étapes de formation du sac embryonnaire :
  1. Méiose : Au sein du nucelle, une cellule-mère diploïde ($2n$) subit la méiose et produit une file de 4 mégaspores haploïdes ($n$).
  2. Dégénérescence : Les 3 mégaspores situées du côté du micropyle dégénèrent ; seule la mégaspore chalazienne la plus profonde survit et grossit.
  3. Trois mitoses successives du noyau de la mégaspore : Le noyau subit 3 mitoses sans cytodiérèse immédiate, formant 8 noyaux haploïdes ($2^3 = 8$).
  4. Cellularisation et organisation du sac embryonnaire (7 cellules et 8 noyaux) :
     - Au pôle micropylaire (3 cellules) : 1 oosphère ($n$, gamète femelle) flanquée de 2 synergides ($n$).
     - Au pôle chalazien (3 cellules) : 3 cellules antipodes ($n$).
     - Au centre : 1 grande cellule centrale renfermant 2 noyaux polaires du sac ($n + n$).

4. Pollinisation, Germination et Double Fécondation :
- Pollinisation : Transport du grain de pollen de l'anthère jusqu'au stigmate visqueux d'une fleur de même espèce (autogamie ou allogamie entomophile/anémophile).
- Germination du pollen :
  * Le grain de pollen s'hydrate et émet un tube pollinique qui émerge par un pore de l'exine.
  * Le noyau végétatif s'engage à l'extrémité du tube pollinique et guide sa croissance à travers le style vers le micropyle de l'ovule (chimiotropisme).
  * Pendant la traversée, la cellule reproductrice subit une mitose pour donner deux gamètes mâles haploïdes appelés anthérozoïdes ($n$) ou spermies.
- Le Mécanisme de la Double Fécondation (Exclusivité des Angiospermes) :
  * Le tube pollinique pénètre dans le sac embryonnaire par le micropyle en détruisant l'une des synergides et déverse ses deux anthérozoïdes.
  * 1ère Fécondation (Fécondation principale) :
    $\\text{1er Anthérozoïde } (n) + \\text{Oosphère } (n) \\longrightarrow \\text{Zygote principal / Œuf embryon diploïde } (2n)$
    Il se développera par mitoses pour former l'embryon (plantule avec radicule, tigelle, gemmule et cotylédons).
  * 2ème Fécondation (Fécondation accessoire) :
    $\\text{2ème Anthérozoïde } (n) + \\text{2 Noyaux centraux du sac } (n + n) \\longrightarrow \\text{Zygote accessoire / Œuf albumen triploïde } (3n)$
    Il se développera pour former l'albumen, un tissu de réserve nutritif riche en amidon, lipides ou protéines nourrissant l'embryon.

5. Devenir des Pièces Florales après Fécondation :
- L'ovule fécondé se transforme en GRAINE.
- L'ovaire se développe et se transforme en FRUIT (péricarpe : épicarpe, mésocarpe, endocarpe).
- Les téguments de l'ovule deviennent les téguments de la graine.
- Les sépales, pétales, étamines, style et stigmate se flétrissent et tombent.`,
    definitions: [
      {
        term: 'Spermaphytes',
        definition: 'Embranchement des plantes vasculaires supérieures caractérisées par la reproduction par graines et comprenant les Gymnospermes et les Angiospermes.'
      },
      {
        term: 'Microsporogenèse',
        definition: 'Processus de différenciation cellulaire se déroulant dans les sacs polliniques de l\'anthère, conduisant à la formation des grains de pollen à partir des cellules-mères diploïdes.'
      },
      {
        term: 'Grain de pollen',
        definition: 'Gametophyte mâle immature des Spermaphytes constitué de deux cellules haploïdes (végétative et reproductrice) protégées par l\'exine et l\'intine.'
      },
      {
        term: 'Sac embryonnaire',
        definition: 'Gametophyte femelle des Angiospermes logé dans le nucelle de l\'ovule, constitué de 7 cellules et 8 noyaux haploïdes dont l\'oosphère et les 2 noyaux du sac.'
      },
      {
        term: 'Oosphère',
        definition: 'Gamète femelle haploïde (n) des végétaux à graines, situé au pôle micropylaire du sac embryonnaire entre les deux synergides.'
      },
      {
        term: 'Double Fécondation',
        definition: 'Processus reproducteur exclusif aux Angiospermes au cours duquel deux anthérozoïdes fusionnent simultanément, l\'un avec l\'oosphère (zygote 2n) et l\'autre avec les deux noyaux centraux (zygote 3n).'
      },
      {
        term: 'Albumen',
        definition: 'Tissu nourricier triploïde (3n) de la graine des Angiospermes résultant du développement de l\'œuf accessoire, stockant les réserves énergétiques pour la future germination.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la double fécondation des Angiospermes',
        statement: 'Chez tous les Angiospermes sans exception, la fécondation implique obligatoirement 2 anthérozoïdes haploïdes : Anthérozoïde 1 (n) + Oosphère (n) -> Œuf principal embryonnaire (2n) ; Anthérozoïde 2 (n) + 2 Noyaux polaires (n+n) -> Œuf accessoire d\'albumen (3n).'
      },
      {
        name: 'Règle du devenir post-floral',
        statement: 'Après la double fécondation : l\'ovule devient la graine et la paroi de l\'ovaire se transforme en fruit protecteur.'
      }
    ],
    formulas: [
      {
        name: 'Équations de la double fécondation',
        formula: '\\begin{cases} \\text{Anthérozoïde } (n) + \\text{Oosphère } (n) \\longrightarrow \\text{Zygote principal } (2n) \\\\ \\text{Anthérozoïde } (n) + 2 \\text{ Noyaux polaires } (n+n) \\longrightarrow \\text{Zygote accessoire } (3n) \\end{cases}',
        explanation: 'Formation conjointe de l\'embryon diploïde et de l\'albumen triploïde nourricier.',
        unitOrCondition: 'Angiospermes'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer et schématiser le cycle de développement d\'un Angiosperme',
        procedure: '1. Décrire la genèse du gamétophyte mâle : Cellule-mère diploïde (2n) -> Méiose -> 4 microspores (n) -> Mitose -> Grain de pollen à cellule végétative et cellule reproductrice.\n2. Décrire la genèse du gamétophyte femelle : Cellule-mère diploïde (2n) -> Méiose -> 4 mégaspores (3 dégénèrent) -> 1 mégaspore (n) subit 3 mitoses -> Sac embryonnaire à 7 cellules et 8 noyaux.\n3. Décrire la pollinisation et germination : Croissance du tube pollinique guidé par le noyau végétatif, mitose du noyau reproducteur en 2 anthérozoïdes.\n4. Détailler la double fécondation : 1er anthérozoïde + oosphère = œuf principal (2n) ; 2e anthérozoïde + 2 noyaux centraux = œuf accessoire (3n).\n5. Conclure sur la transformation en graine et fruit.',
        tip: 'Toujours bien distinguer le nombre de cellules (7) et le nombre de noyaux (8) du sac embryonnaire.'
      }
    ],
    examples: [
      {
        statement: 'Une plante possède 2n = 24 chromosomes. Détermine le nombre de chromosomes contenus dans : (a) une cellule de pétale, (b) le noyau végétatif du grain de pollen, (c) un anthérozoïde, (d) une cellule d\'albumen, (e) une cellule de l\'embryon.',
        solution: '(a) Pétale = cellule somatique diploïde : $2n = 24$ chromosomes. (b) Noyau végétatif = cellule haploïde : $n = 12$ chromosomes. (c) Anthérozoïde = gamète mâle haploïde : $n = 12$ chromosomes. (d) Cellule d\'albumen = tissu triploïde : $3n = 3 \\times 12 = 36$ chromosomes. (e) Cellule d\'embryon = tissu diploïde issu de l\'œuf principal : $2n = 24$ chromosomes.'
      }
    ],
    exercises: [
      {
        question: 'Quel est le rôle respectif du noyau végétatif et des deux anthérozoïdes lors de la fécondation chez les Angiospermes ?',
        correction: 'Le noyau végétatif contrôle le métabolisme et dirige la croissance orientée du tube pollinique à travers les tissus du pistil vers le micropyle de l\'ovule avant de dégénérer. Le premier anthérozoïde féconde l\'oosphère pour donner l\'embryon diploïde (2n), tandis que le second anthérozoïde fusionne avec les deux noyaux centraux pour former l\'albumen triploïde (3n).'
      }
    ],
    evaluationSituation: {
      context: 'Un chercheur en agronomie bloque chimiquement la mitose de la cellule reproductrice dans le grain de pollen sans affecter la cellule végétative. Le grain de pollen germe normalement sur le stigmate, émet un tube pollinique qui atteint le sac embryonnaire, mais la graine obtenue avorte précocement et ne contient aucune réserve d\'albumen.',
      instructions: [
        '1. Explique pourquoi le tube pollinique a pu croître normalement jusqu\'à l\'ovule.',
        '2. Explique pourquoi la double fécondation n\'a pas pu s\'accomplir complètement.',
        '3. Déduis l\'importance de la formation de l\'albumen pour la viabilité de la graine.'
      ],
      solutionGuide: '1. La croissance du tube pollinique est contrôlée par l\'expression génétique de la cellule végétative et son noyau végétatif qui n\'ont pas été inhibés par le traitement chimique.\n2. Le blocage de la mitose de la cellule reproductrice a empêché la production des 2 anthérozoïdes distincts. Un seul anthérozoïde (ou cellule non divisée) était présent : une seule fécondation a pu avoir lieu au maximum, laissant les noyaux polaires non fécondés, d\'où l\'absence totale de tissu triploïde d\'albumen.\n3. L\'albumen est le tissu nourricier exclusif qui accumule les réserves indispensables à la nutrition et au développement de l\'embryon ; en son absence, l\'embryon est privé de nutriments et avorte inévitablement.'
    },
    examTraps: [
      'Confondre la ploïdie de l\'embryon (2n diploïde) et de l\'albumen (3n triploïde).',
      'Dire que le sac embryonnaire contient 8 cellules (il contient 7 cellules car la cellule centrale possède 2 noyaux).',
      'Oublier que 3 des 4 mégaspores formées lors de la méiose femelle dégénèrent obligatoirement.'
    ],
    quickMemo: 'Pollen = 2 cellules (végétative + reproductrice -> 2 anthérozoïdes n). Sac embryonnaire = 7 cellules et 8 noyaux (1 oosphère n, 2 synergides n, 3 antipodes n, 2 noyaux centraux n+n). Double fécondation : Anthérozoïde 1 + Oosphère -> Embryon 2n ; Anthérozoïde 2 + 2 Noyaux centraux -> Albumen 3n. Ovule -> Graine, Ovaire -> Fruit.',
    keywords: ['SVT Terminale D', 'Spermaphytes', 'Angiospermes', 'double fécondation', 'grain de pollen', 'sac embryonnaire', 'oosphère', 'albumen', 'anthérozoïde', 'tube pollinique', 'ovule', 'graine', 'fruit']
  },

  // =========================================================================
  // 8. REPRODUCTION CHEZ LES MAMMIFÈRES & CYCLES SEXUELS (SVT Tle D / C)
  // =========================================================================
  {
    id: 'svt-tle-d-cycles-sexuels-reproduction-mammiferes',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La reproduction chez les mammifères : Physiologie et régulation',
    lessonTitle: 'Leçon 8 : Le fonctionnement des organes sexuels chez l\'Homme et la reproduction des mammifères',
    objectifs: [
      'Analyser le cycle ovarien (phase folliculaire, ovulation à J14 par le pic de LH, phase lutéale avec corps jaune)',
      'Analyser le cycle utérin (menstruation J1-J5, phase proliférative J6-J14, dentelle utérine sécrétoire J15-J28)',
      'Expliquer la régulation neuro-hormonale de l\'axe hypothalamo-hypophysaire (GnRH pulsatile, FSH, LH, rétrocontrôle négatif et rétrocontrôle positif pré-ovulatoire de l\'œstradiol > 200 pg/mL)',
      'Détailler la régulation masculine : spermatogenèse stimulée par FSH (cellules de Sertoli et inhibine) et LH stimulant les cellules de Leydig (sécrétion de testostérone)',
      'Détailler les étapes de la fécondation : capacitation des spermatozoïdes, réaction acrosomique, traversée de la zone pellucide, réaction corticale bloquant la polyspermie, achèvement de la méiose II et expulsion du 2e globule polaire, caryogamie -> zygote 2n',
      'Décrire le développement pré-embryonnaire et la nidation : segmentation, morula, blastocyste, nidation à J6-J11 et sécrétion d\'hCG par le trophoblaste',
      'Expliquer le mode d\'action des contraceptifs hormonaux (pilules combinées bloquant l\'ovulation, microdosées, pilule du lendemain)'
    ],
    fullCourseContent: `1. Les Cycles Sexuels chez la Femme :
- Synchronisme des cycles : Le cycle ovarien et le cycle utérin durent en moyenne 28 jours et sont rigoureusement synchronisés par les hormones ovariennes.
- A. Le cycle ovarien (28 jours) :
  1. Phase folliculaire (J1 à J13) : Croissance d'un follicule primordial -> primaire -> secondaire -> cavitaire (antral) -> follicule mûr de De Graaf. Les cellules de la thèque interne et de la granulosa sécrètent des œstrogènes (œstradiol).
  2. Ovulation (J14) : Rupture du follicule mûr à la surface de l'ovaire et expulsion de l'ovocyte II bloqué en métaphase II entouré de sa zone pellucide et corona radiata, capté par le pavillon de la trompe. Déclenchée par le pic ovulatoire de gonadostimulines (décharge massive de LH).
  3. Phase lutéale ou lutéinique (J15 à J28) : Le follicule rompu se transforme en corps jaune dont les cellules lutéales sécrètent de fortes quantités de progestérone et des œstrogènes. En l'absence de fécondation, le corps jaune régresse à J28 (corps blanc / corpus albicans), provoquant la chute brutale des hormones ovariennes.
- B. Le cycle utérin (endomètre) :
  1. Phase de desquamation / Menstruations (J1 à J5) : La chute des hormones à la fin du cycle précédent entraîne la nécrose et le détachement de la couche superficielle de l'endomètre avec saignement.
  2. Phase proliférative (J6 à J14) : Sous l'action des œstrogènes folliculaires, l'endomètre s'épaissit (de 1 à 3 mm) et les glandes en tube se développent.
  3. Phase sécrétoire / Dentelle utérine (J15 à J28) : Sous l'action combinée de la progestérone et des œstrogènes, l'endomètre atteint 5 à 7 mm, les glandes deviennent spiralées et sécrètent du glycogène et du mucus, les artérioles se spiralisent : la dentelle utérine est prête pour la nidation.

2. Régulation Neuro-Hormonale chez la Femme :
- L'hypothalamus émet des pulses de GnRH (gonadolibérine) qui stimulent l'adénohypophyse pour sécréter deux gonadostimulines :
  * FSH (Hormone folliculo-stimulante) : Stimule la croissance folliculaire et la sécrétion d'œstradiol.
  * LH (Hormone lutéinisante) : Déclenche l'ovulation (pic de LH à J14) et maintient le corps jaune.
- Les boucles de rétrocontrôle ovarien :
  * Rétrocontrôle négatif (début et milieu de phase folliculaire, et phase lutéale) : Des taux modérés d'œstradiol ou des taux élevés de progestérone freinent la sécrétion de GnRH, FSH et LH.
  * Rétrocontrôle positif pré-ovulatoire (J12-J13) : Lorsque la concentration d'œstradiol dépasse le seuil critique d'environ 200 pg/mL pendant au moins 36 heures consécutives (sécrétée par le follicule mûr), le rétrocontrôle s'inverse et devient POSITIF : il provoque une décharge massive et synchrone de GnRH et le pic de LH (LH-surge) qui déclenche l'ovulation 24 à 36 h plus tard.

3. Régulation du Fonctionnement de l'Appareil Génital Mâle :
- Le testicule assure une double fonction :
  * Fonction exocrine : Spermatogenèse continue dans les tubes séminifères (spermatogonies 2n -> spermatocytes I 2n -> méiose -> spermatocytes II n -> spermatides n -> différenciation en spermatozoïdes).
  * Fonction endocrine : Sécrétion de testostérone par les cellules interstitielles de Leydig situées entre les tubes séminifères.
- Régulation neuro-hormonale chez l'homme :
  * L'axe hypothalamo-hypophysaire sécrète GnRH, FSH et LH.
  * FSH se fixe sur les cellules de Sertoli (dans les tubes séminifères), stimule la spermatogenèse et induit la synthèse d'ABP (Androgen Binding Protein) ainsi que la sécrétion d'inhibine.
  * LH se fixe sur les cellules de Leydig et stimule la synthèse et libération de testostérone.
  * Rétrocontrôle négatif permanent : La testostérone exerce un rétrocontrôle négatif sur l'hypothalamus et l'hypophyse (freine LH et GnRH). L'inhibine sertolienne freine spécifiquement la sécrétion de FSH par l'hypophyse.

4. Fécondation et Devenir des Cellules Sexuelles chez les Mammifères :
- Lieu de la fécondation : Tiers supérieur de la trompe de Fallope (ampoule tubaire).
- Étapes séquentielles de la fécondation :
  1. Capacitation : Décapage de la membrane des spermatozoïdes lors de la remontée des voies génitales féminines.
  2. Réaction acrosomique : Libération des enzymes de l'acrosome (hyaluronidase) permettant la digestion de la corona radiata et de la zone pellucide.
  3. Fusion des membranes et blocage de la polyspermie : Dès la fusion du premier spermatozoïde, une dépolarisation membranaire et une libération massive de granules corticaux modifient la zone pellucide (réaction corticale durcissante imperméable aux autres spermatozoïdes).
  4. Achèvement de la méiose II par l'ovocyte II : Expulsion du 2e globule polaire -> l'ovocyte devient un ovule mature.
  5. Caryogamie (Amphimixie) : Rapprochement et fusion des deux pronoyaux mâle et femelle ($n + n$) -> Formation du Zygote diploïde ($2n$).
- Segmentation, Migration et Nidation :
  * Le zygote subit des divisions cellulaires mitotiques successives (2, 4, 8, 16 cellules = morula) tout en migrant dans la trompe vers l'utérus grâce aux cils tubaires.
  * Au 5e-6e jour, il devient un blastocyste creux formé d'une masse cellulaire interne (futur embryon) et d'une couche périphérique (trophoblaste).
  * Nidation (J6 à J11) : Le trophoblaste sécrète des enzymes protéolytiques qui érodent l'endomètre utérin pour y enfouir l'embryon.
  * Sécrétion d'hCG (gonadotrophine chorionique humaine) par le trophoblaste : maintient en vie le corps jaune ovarien (corps jaune gestatif) pour maintenir des taux élevés de progestérone et empêcher la venue des règles, assurant la poursuite de la grossesse.

5. Contraception Hormonale :
- Pilules combinées œstroprogestatives : Maintiennent des taux constants d'œstrogène et de progestérone de synthèse qui exercent un rétrocontrôle négatif continu sur l'hypophyse, bloquant le pic de LH et empêchant toute ovulation.
- Pilules microdosées au progestatif : Épaississent la glaire cervicale (barrière infranchissable pour les spermatozoïdes) et atrophient l'endomètre.`,
    definitions: [
      {
        term: 'Folliculogenèse',
        definition: 'Processus continu de croissance et de maturation des follicules ovariens depuis le stade de follicule primordial microscopique jusqu\'au follicule mûr déhiscent de De Graaf.'
      },
      {
        term: 'Corps jaune',
        definition: 'Glande endocrine temporaire formée dans l\'ovaire à partir des restes du follicule rompu après l\'ovulation, sécrétant de la progestérone et des œstrogènes.'
      },
      {
        term: 'Rétrocontrôle positif',
        definition: 'Mécanisme exceptionnel pré-ovulatoire où un taux élevé d\'œstradiol (> 200 pg/mL pendant 36h) stimule au lieu de freiner l\'axe hypothalamo-hypophysaire, déclenchant le pic ovulatoire de LH.'
      },
      {
        term: 'Cellules de Sertoli',
        definition: 'Grandes cellules nourricières et de soutien des tubes séminifères contrôlées par la FSH, assurant la trophicité des cellules germinales et sécrétant l\'inhibine.'
      },
      {
        term: 'Cellules de Leydig',
        definition: 'Cellules endocrines interstitielles du testicule contrôlées par la LH, responsables de la biosynthèse et de la sécrétion de testostérone.'
      },
      {
        term: 'Capacitation',
        definition: 'Ensemble des modifications biochimiques et membranaires acquises par les spermatozoïdes dans les voies génitales femelles leur conférant l\'aptitude à réaliser la réaction acrosomique et à féconder l\'ovocyte.'
      },
      {
        term: 'Réaction corticale',
        definition: 'Exocytose des granules corticaux de l\'ovocyte consécutive à l\'entrée du premier spermatozoïde, modifiant irréversiblement la zone pellucide pour empêcher la polyspermie.'
      },
      {
        term: 'Nidation',
        definition: 'Enfouissement complet du blastocyste dans l\'endomètre utérin transformé en dentelle sécrétoire entre le 6e et le 11e jour après la fécondation.'
      },
      {
        term: 'Hormone hCG',
        definition: 'Gonadotrophine chorionique sécrétée précocement par le trophoblaste maintenant l\'activité sécrétoire du corps jaune gestatif au cours du premier trimestre de grossesse.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du seuil d\'œstradiol pour l\'ovulation',
        statement: 'Le rétrocontrôle ovarien est négatif à dose modérée d\'œstradiol (< 150 pg/mL) ; il devient obligatoirement POSITIF et déclenche le pic ovulatoire de LH uniquement si le taux d\'œstradiol dépasse 200 pg/mL pendant plus de 36 heures.'
      },
      {
        name: 'Règle de maintien de la gestation par la progestérone',
        statement: 'La progestérone maintient l\'endomètre en dentelle utérine et bloque les contractions du myomètre (silence utérin) ; toute chute brutale de progestérone déclenche l\'avortement ou la menstruation.'
      }
    ],
    formulas: [
      {
        name: 'Bilan de la fécondation humaine',
        formula: '\\text{Ovocyte II bloqué en métaphase II } (n) + \\text{Spermatozoïde } (n) \\xrightarrow{\\text{Expulsion 2e GP}} \\text{Zygote diploïde } (2n = 46)',
        explanation: 'Restauration de la diploïdie et détermination génétique du sexe (XX ou XY).',
        unitOrCondition: 'Trompe de Fallope'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Interpréter des expériences d\'ablation et d\'injections hormonales',
        procedure: '1. Identifier l\'organe lésé/retiré (ex: hypophysectomie -> atrophie ovarienne et utérine -> l\'hypophyse contrôle l\'ovaire).\n2. Analyser l\'effet d\'injections d\'extraits (ex: injection d\'œstrogènes chez une femelle ovariectomisée -> développement de l\'endomètre mais pas de follicules -> l\'ovaire agit sur l\'utérus par voie hormonale sanguine).\n3. Reconstituer la cascade hiérarchique : Hypothalamus (GnRH) -> Hypophyse (FSH/LH) -> Gonades (Testostérone ou Œstrogènes/Progestérone) -> Organes cibles et rétrocontrôles.',
        tip: 'Toujours préciser si l\'action se fait par voie nerveuse ou par voie endocrine sanguine.'
      }
    ],
    examples: [
      {
        statement: 'On injecte quotidiennement à une rate pubère de fortes doses de testostérone pendant 3 semaines. On constate une atrophie de ses testicules et un arrêt de la spermatogenèse. Explique ce résultat.',
        solution: 'La testostérone injectée à forte concentration exerce un puissant rétrocontrôle négatif sur l\'axe hypothalamo-hypophysaire. La sécrétion de GnRH, FSH et LH s\'effondre. Privés de la stimulation par la FSH et la LH, les testicules cessent de fonctionner et s\'atrophient, stoppant totalement la spermatogenèse.'
      }
    ],
    exercises: [
      {
        question: 'Comment les pilules contraceptives combinées empêchent-elles la grossesse ?',
        correction: 'Les pilules combinées apportent un mélange continu d\'œstrogène et de progestatif synthétiques. Ces hormones exercent en permanence un rétrocontrôle négatif sur l\'hypophyse, empêchant l\'élévation de FSH et la survenue du pic de LH à J14. En l\'absence de pic de LH, l\'ovulation n\'a jamais lieu. De plus, le progestatif rend la glaire cervicale imperméable aux spermatozoïdes et maintient un endomètre impropre à la nidation.'
      }
    ],
    evaluationSituation: {
      context: 'Une femme de 28 ans consulte pour infertilité. Les dosages hormonaux montrent un taux basal normal de FSH mais un taux d\'œstradiol très bas (< 30 pg/mL) tout au long du cycle, sans pic ovulatoire de LH à J14 et avec une température corporelle restant constamment inférieure à 37°C. L\'échographie révèle de nombreux petits follicules immatures bloqués.',
      instructions: [
        '1. Explique pourquoi il n\'y a pas eu de pic de LH à J14.',
        '2. Justifie l\'absence de décalage thermique en 2e moitié de cycle.',
        '3. Propose un traitement médical inducteur d\'ovulation approprié.'
      ],
      solutionGuide: '1. Le follicule n\'atteint jamais la maturité et ne produit pas assez d\'œstradiol pour dépasser le seuil critique de 200 pg/mL requis pour déclencher le rétrocontrôle positif sur l\'hypophyse : le pic de LH ne se produit donc pas, empêchant l\'ovulation.\n2. Sans ovulation, aucun corps jaune ne se forme et aucune progestérone n\'est sécrétée. Or c\'est la progestérone qui a une action hyperthermiante élevant la température basale au-dessus de 37°C pendant la phase lutéale.\n3. Un traitement par injections séquentielles de FSH (pour stimuler la maturation folliculaire) suivies d\'une injection de LH ou d\'hCG (pour provoquer le pic ovulatoire) permettra de déclencher l\'ovulation.'
    },
    examTraps: [
      'Confondre le rôle de la FSH (maturation folliculaire et Sertoli) et de la LH (déclenchement de l\'ovulation et Leydig).',
      'Oublier que la fécondation a lieu dans le tiers supérieur de la trompe et NON dans l\'utérus.',
      'Croire que l\'ovocyte II expulsé lors de l\'ovulation est une cellule mature (il est bloqué en métaphase II et n\'achève sa méiose qu\'au moment exact de la fécondation).'
    ],
    quickMemo: 'Cycle ovarien : Folliculaire (œstradiol) -> Ovulation J14 (pic LH) -> Lutéale (corps jaune : progestérone + œstrogènes). Rétrocontrôle positif si œstradiol > 200 pg/mL pendant 36h. Homme : FSH -> Sertoli/inhibine/spermatogenèse ; LH -> Leydig/testostérone. Fécondation : Tiers supérieur trompe -> réaction acrosomique -> réaction corticale -> achèvement méiose II -> zygote 2n -> nidation J6-J11 -> sécrétion hCG.',
    keywords: ['SVT Terminale D', 'reproduction des mammifères', 'cycle ovarien', 'cycle utérin', 'ovulation', 'pic de LH', 'corps jaune', 'rétrocontrôle positif', 'œstradiol', 'progestérone', 'Sertoli', 'Leydig', 'testostérone', 'fécondation', 'nidation', 'hCG', 'contraception']
  },

  // =========================================================================
  // 9. LE SYSTÈME DE DÉFENSE IMMUNITAIRE & INFECTION PAR LE VIH (SVT Tle D - LEÇON 15 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-defense-organisme-immunologie-vih',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'L\'intégrité de l\'organisme : Immunologie et infection par le VIH',
    lessonTitle: 'Leçon 15 : Le système de défense de l\'organisme et l\'infection par le VIH',
    objectifs: [
      'Définir le Soi biologique (CMH/HLA I et II) et le Non-Soi (Antigènes, épitopes)',
      'Classer les organes lymphoïdes primaires (moelle osseuse, thymus) et secondaires (ganglions, rate)',
      'Décrire la réponse immunitaire innée : barrières naturelles, réaction inflammatoire aiguë (diapédèse), phagocytose en 4 étapes',
      'Détailler la réponse immunitaire spécifique humorale (RIMH) : sélection clonale des LB, prolifération stimulée par interleukines, différenciation en plasmocytes, production d\'anticorps circulants et formation de complexes immuns',
      'Détailler la réponse immunitaire spécifique cellulaire (RIMC) : activation des LT8 par double reconnaissance CMH I-Ag, différenciation en LT cytotoxiques (LTc), libération de perforines et granzymes, lyse des cellules cibles',
      'Expliquer le rôle central de pivot joué par le Lymphocyte T4 (Auxiliaire / Helper)',
      'Décrire l\'ultrastructure du VIH (Gp120, Gp41, capside p24, ARN monocaténaire, transcriptase inverse, intégrase, protéase)',
      'Détailler les 10 étapes du cycle de réplication du VIH dans le LT4 CD4+',
      'Analyser les 3 phases cliniques de l\'infection par le VIH (primo-infection, phase asymptomatique, phase SIDA déclaré avec LT4 < 200/mm³ et maladies opportunistes)'
    ],
    fullCourseContent: `1. Le Soi, le Non-Soi et les Organes Immunitaires :
- Le Soi biologique : Ensemble des constituants moléculaires résultant de l'expression du génome individuel. Il est marqué par les glycoprotéines membranaires du Complexe Majeur d'Histocompatibilité (CMH ou HLA chez l'Homme) :
  * CMH de classe I : Présent à la surface de toutes les cellules nucléées de l'organisme.
  * CMH de classe II : Présent exclusivement à la surface des Cellules Présentatrices d'Antigène (CPA : macrophages, cellules dendritiques, lymphocytes B).
- Le Non-Soi (Antigène) : Toute molécule étrangère à l'organisme (bactérie, virus, parasite, toxine, cellule greffée non compatible) reconnue par le système immunitaire et déclenchant une réaction spécifique. Chaque antigène porte un ou plusieurs déterminants antigéniques ou épitopes.
- Les organes du système immunitaire :
  * Organes lymphoïdes primaires (centraux) : Moelle osseuse (lieu de naissance de toutes les cellules sanguines et lieu de maturation des Lymphocytes B) et Thymus (lieu de maturation et d'acquisition de l'immunocompétence des Lymphocytes T).
  * Organes lymphoïdes secondaires (périphériques) : Ganglions lymphatiques, rate, amygdales, plaques de Peyer (lieux de rencontre entre antigènes et lymphocytes activés).

2. Les Réponses Immunitaires Non Spécifiques (Innées) :
- Barrières naturelles : Mécaniques (peau intacte, cils des muqueuses), chimiques (sueur acide, suc gastrique pH 2, lysozyme des larmes et de la salive), biologiques (flore commensale).
- Réaction inflammatoire aiguë :
  * 4 signes cardinaux : Rougeur, chaleur, gonflement (œdème) et douleur.
  * Mécanisme : Les mastocytes et macrophages tissulaires sécrètent des médiateurs chimiques (histamine, prostaglandines) entraînant une vasodilatation locale, une augmentation de la perméabilité capillaire et l'attraction chimiotactique des leucocytes.
  * Diapédèse : Passage actif des granulocytes neutrophiles et monocytes à travers la paroi des capillaires sanguins vers le foyer infectieux.
- La Phagocytose en 4 étapes :
  1. Adhésion : Fixation de la membrane du phagocyte aux motifs de l'antigène.
  2. Ingestion : Émission de pseudopodes englobant le microbe dans un phagosome.
  3. Digestion : Fusion des lysosomes avec le phagosome (phagolysosome) et destruction enzymatique par des protéases et radicaux libres.
  4. Exocytose / Présentation : Rejet des débris non digérés et présentation des épitopes sur le CMH II par les macrophages devenant des CPA.

3. Les Réponses Immunitaires Spécifiques (Adaptatives) :
- A. La Réponse Immunitaire à Médiation Humorale (RIMH) :
  * Dirigée contre les antigènes libres extracellulaires (bactéries, virus circulants, toxines).
  * Étapes :
    1. Sélection clonale : Fixation de l'antigène sur les immunoglobulines membranaires (BCR) d'un clone spécifique de Lymphocyte B.
    2. Amplification clonale : Les cytokines (Interleukines 2, 4, 6) sécrétées par les LT4 auxiliaires activés stimulent la multiplication mitotique des LB sélectionnés.
    3. Différenciation : Une partie des clones devient des LB mémoires à longue durée de vie, l'autre se différencie en plasmocytes (cellules riches en réticulum granulaire sécrétant des milliers d'anticorps spécifiques par seconde).
    4. Phase effectrice : Les anticorps circulants se lient spécifiquement aux antigènes pour former des complexes immuns (agglutination ou neutralisation), facilitant leur élimination par phagocytose ou activation du complément.
- B. La Réponse Immunitaire à Médiation Cellulaire (RIMC) :
  * Dirigée contre les cellules infectées par un virus, cellules cancéreuses ou cellules greffées étrangères.
  * Étapes :
    1. Sélection clonale : Le récepteur T (TCR) d'un clone de Lymphocyte T8 reconnaît spécifiquement l'antigène étranger associé au CMH I d'une cellule cible ou d'une CPA (double reconnaissance).
    2. Amplification et différenciation : Stimulés par l'interleukine 2 des LT4, les LT8 prolifèrent et se différencient en LT cytotoxiques (LTc ou tueurs) et LT8 mémoires.
    3. Phase effectrice (Cytolyse) : Le LTc s'accole à la cellule cible et libère par exocytose de la perforine (qui crée des pores dans la membrane cible) et des granzymes (qui déclenchent l'apoptose ou mort cellulaire programmée). L'eau et les ions pénètrent par les pores, provoquant le choc osmotique et l'éclatement de la cellule anormale.
- C. Rôle Pivot Central des Lymphocytes T4 :
  * Les LT4 reconnaissent l'antigène présenté par les CPA sur le CMH II.
  * Activés, les LT4 se différencient en LT helper ($Th_1$ et $Th_2$) et sécrètent les interleukines indispensables à l'activation, la prolifération et la différenciation de TOUS les effecteurs immunitaires (LB et LT8).

4. L'Infection par le VIH et le SIDA :
- Structure du Virus de l'Immunodéficience Humaine (VIH) :
  * Rétrovirus enveloppé sphérique portant les glycoprotéines de surface Gp120 et de transmembrane Gp41.
  * Capside conique protéique formée de p24 protégeant deux brins d'ARN monocaténaire identiques associés à 3 enzymes virales clés : la transcriptase inverse (rétrotranscriptase), l'intégrase et la protéase.
- Cycle de réplication du VIH en 10 étapes :
  (1) Fixation (Adsorption) spécifique de la Gp120 virale sur le récepteur CD4 et les corécepteurs (CCR5 ou CXCR4) du Lymphocyte T4.
  (2) Fusion de l'enveloppe virale avec la membrane plasmique de l'hôte médiée par la Gp41.
  (3) Pénétration et décapsidation de la capside dans le cytoplasme du LT4.
  (4) Rétrotranscription : La transcriptase inverse synthétise un brin d'ADN complémentaire à partir de l'ARN viral, puis un ADN proviral double brin.
  (5) Migration nucléaire et intégration : L'intégrase insère l'ADN proviral dans le génome chromosomique de la cellule hôte.
  (6) Transcription de l'ADN proviral en ARN messagers et en ARN génomiques viraux par l'ARN polymérase cellulaire.
  (7) Traduction des ARNm viraux en polyprotéines virales précurseurs dans le cytoplasme.
  (8) Maturation et clivage protéolytique des polyprotéines par la protéase virale.
  (9) Assemblage des nouveaux virions sous la membrane plasmique du LT4.
  (10) Bourgeonnement et libération de centaines de nouveaux virions infectieux, provoquant la mort et la lyse du Lymphocyte T4.
- Évolution Clinique de l'Infection en 3 Phases :
  * 1. Phase de primo-infection (quelques semaines) : Réplication virale explosive, forte charge virale dans le sang, chute transitoire des LT4, syndrome pseudo-grippal. Apparition des anticorps anti-VIH au bout de 4 à 8 semaines (séroconversion).
  * 2. Phase asymptomatique (plusieurs années, 5 à 10 ans) : Équilibre dynamique fragile entre réplication virale ralentie et réponse immunitaire (taux d'anticorps élevé, charge virale faible et stable). Cependant, les LT4 diminuent lentement et continuellement (de 1000/mm³ à 200/mm³).
  * 3. Phase de SIDA déclaré (Syndrome d'Immuno-Déficience Acquise) : Effondrement critique des LT4 (< 200/mm³). Le système immunitaire est paralysé. Multiplication exponentielle de la charge virale et apparition des maladies opportunistes mortelles (tuberculose, candidose, pneumocystose, sarcome de Kaposi, toxoplasmose cérébrale).
- Diagnostic biologique :
  * Test de dépistage ELISA (détection des anticorps anti-VIH).
  * Test de confirmation Western Blot (mise en évidence des bandes protéiques Gp120, Gp41, p24).
  * Mesure de la charge virale par PCR et numération des LT4 par cytométrie en flux.`,
    definitions: [
      {
        term: 'Soi biologique (CMH / HLA)',
        definition: 'Ensemble des marqueurs glycoprotéiques membranaires codés par les gènes du Complexe Majeur d\'Histocompatibilité, conférant l\'identité biologique propre et unique à chaque individu.'
      },
      {
        term: 'Antigène (Non-Soi)',
        definition: 'Toute substance ou agent biologique étranger capable d\'être reconnu spécifiquement par les récepteurs du système immunitaire et d\'induire une réponse immunologique.'
      },
      {
        term: 'Phagocytose',
        definition: 'Mécanisme d\'immunité innée non spécifique par lequel des cellules spécialisées (macrophages, polynucléaires) capturent, ingèrent et lysent les agents pathogènes dans des phagolysosomes.'
      },
      {
        term: 'Plasmocyte',
        definition: 'Cellule effectrice terminale issue de la différenciation des lymphocytes B activés, hyperspécialisée dans la synthèse et la sécrétion massive d\'anticorps spécifiques circulants.'
      },
      {
        term: 'Complexe immun',
        definition: 'Édifice moléculaire insoluble résultant de la liaison stéréospécifique entre un anticorps et son antigène correspondant, neutralisant le pouvoir pathogène du microbe.'
      },
      {
        term: 'Lymphocyte T cytotoxique (LTc)',
        definition: 'Cellule effectrice de l\'immunité à médiation cellulaire capable de détruire par choc osmotique et apoptose les cellules infectées ou anormales grâce à la libération de perforine et de granzymes.'
      },
      {
        term: 'Lymphocyte T4 (Auxiliaire / Helper)',
        definition: 'Chef d\'orchestre et cellule pivot du système immunitaire qui, après activation par les CPA sur le CMH II, sécrète les interleukines indispensables à l\'expansion clonale des LB et LT8.'
      },
      {
        term: 'VIH (Virus de l\'Immunodéficience Humaine)',
        definition: 'Rétrovirus à ARN ciblant spécifiquement les cellules immunitaires portant le récepteur CD4 (principalement les LT4) et provoquant le SIDA.'
      },
      {
        term: 'Transcriptase inverse (Rétrotranscriptase)',
        definition: 'Enzyme virale permettant de synthétiser une molécule d\'ADN double brin à partir de l\'ARN viral matrice au sein de la cellule hôte.'
      },
      {
        term: 'Séropositivité',
        definition: 'Présence décelable dans le sérum sanguin d\'anticorps dirigés contre un agent pathogène spécifique (ex: anticorps anti-VIH), attestant d\'un contact infectieux antérieur.'
      },
      {
        term: 'Maladie opportuniste',
        definition: 'Infection provoquée par des micro-organismes habituellement inoffensifs pour un sujet sain mais devenant graves et létaux chez un individu immunodéprimé (LT4 < 200/mm³).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la double reconnaissance des Lymphocytes T',
        statement: 'Un lymphocyte T ne reconnaît jamais un antigène libre : son TCR doit obligatoirement reconnaître à la fois le peptide antigénique étranger et la molécule du CMH du Soi (CMH I pour LT8, CMH II pour LT4).'
      },
      {
        name: 'Règle de l\'effondrement immunitaire du SIDA',
        statement: 'En détruisant spécifiquement les Lymphocytes T4 régulateurs, le VIH supprime la source principale d\'interleukines, ce qui paralyse simultanément la réponse humorale (anticorps) et la réponse cellulaire (LTc).'
      }
    ],
    formulas: [
      {
        name: 'Bilan de la cytolyse par les LTc',
        formula: '\\text{LTc} + \\text{Cellule infectée (CMH I - Ag)} \\xrightarrow{\\text{Perforine + Granzymes}} \\text{Pores membranaires} \\longrightarrow \\text{Apoptose + Lyse osmotique}',
        explanation: 'Destruction ciblée des réservoirs viraux et cellulaires anormaux.',
        unitOrCondition: 'Médiation cellulaire'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser et interpréter les courbes d\'évolution de l\'infection par le VIH',
        procedure: '1. Phase 1 (0 à 6 semaines) : Observer le pic précoce de charge virale (ARN viral) associé à une chute brutale des LT4, puis la montée des anticorps anti-VIH (séroconversion) faisant chuter la charge virale.\n2. Phase 2 (2 à 10 ans) : Constater la stabilisation relative de la charge virale à un niveau bas et le maintien des anticorps, pendant que le taux de LT4 régresse lentement et régulièrement de 1000 à 200/mm³.\n3. Phase 3 (> 10 ans) : Constater le franchissement du seuil critique (LT4 < 200/mm³), l\'effondrement des anticorps et l\'explosion exponentielle de la charge virale accompagnant les maladies opportunistes (SIDA déclaré).',
        tip: 'Toujours associer les 3 paramètres : Charge virale, Taux de LT4 et Taux d\'anticorps.'
      }
    ],
    examples: [
      {
        statement: 'Un patient asymptomatique présente un test ELISA positif confirmé par Western Blot. Son taux de LT4 est de 650 cellules/mm³. Quel est son statut immunitaire et dans quelle phase de l\'infection se situe-t-il ?',
        solution: 'Le patient est séropositif pour le VIH (présence d\'anticorps spécifiques confirmée par Western Blot). Avec un taux de LT4 de 650/mm³ (supérieur au seuil critique de 200/mm³) et en l\'absence de symptômes cliniques, il se situe dans la phase asymptomatique (phase 2) de l\'infection.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi la vaccination contre le VIH est-elle particulièrement difficile à mettre au point ?',
        correction: 'La transcriptase inverse du VIH est une enzyme très peu fidèle qui commet de fréquentes erreurs de copie sans mécanisme de correction d\'épreuves, ce qui confère au virus un taux de mutation extrêmement élevé. Les glycoprotéines de surface (Gp120) changent continuellement de conformation, rendant inefficaces les anticorps mémoires générés par un vaccin standard.'
      }
    ],
    evaluationSituation: {
      context: 'Un individu non traité subit un test sérologique 15 jours après un rapport sexuel non protégé à risque. Le test ELISA est négatif. Deux mois plus tard, le même test ELISA devient positif et son bilan sanguin montre un taux de LT4 à 800/mm³.',
      instructions: [
        '1. Explique pourquoi le premier test à J15 était négatif malgré la contamination.',
        '2. Nomme le phénomène survenu entre le 1er et le 2ème mois.',
        '3. Décris le rôle joué par les LT4 et explique pourquoi leur destruction progressive conduit inévitablement au stade SIDA.'
      ],
      solutionGuide: '1. À J15, le sujet était dans la fenêtre sérologique (période précédant la production décelable d\'anticorps sanguins par les plasmocytes). Le test ELISA cherchant les anticorps et non le virus était donc un faux négatif.\n2. Il s\'agit de la séroconversion : apparition d\'anticorps anti-VIH détectables dans le sérum sanguin à la fin de la primo-infection.\n3. Les LT4 sont les pivots coordonnateurs de l\'immunité adaptative sécrétant les interleukines indispensables à la prolifération des LB et LT8. Leur destruction progressive par le VIH anéantit toute capacité de défense de l\'organisme, laissant le champ libre aux infections opportunistes mortelles.'
    },
    examTraps: [
      'Confondre être séropositif (porter des anticorps anti-VIH) et être malade du SIDA (stade terminal avec LT4 < 200/mm³ et maladies opportunistes).',
      'Oublier que les anticorps ne détruisent pas directement les antigènes : ils les neutralisent en formant des complexes immuns ensuite phagocytés.',
      'Dire que le VIH détruit les globules rouges (le VIH infecte exclusivement les cellules portant le récepteur CD4, principalement les LT4).'
    ],
    quickMemo: 'Immunité innée = Barrières + Réaction inflammatoire + Diapédèse + Phagocytose. Spécifique : RIMH = LB -> Plasmocytes -> Anticorps (complexe immun) ; RIMC = LT8 -> LTc (perforine/granzymes -> cytolyse). LT4 = pivot central sécrétant les interleukines. VIH = Rétrovirus (Gp120/CD4, transcriptase inverse, intégrase, protéase) détruisant les LT4 -> SIDA si LT4 < 200/mm³.',
    keywords: ['SVT Terminale D', 'système immunitaire', 'antigène', 'anticorps', 'phagocytose', 'RIMH', 'RIMC', 'plasmocytes', 'lymphocytes T4', 'lymphocytes T8', 'perforine', 'VIH', 'SIDA', 'transcriptase inverse', 'Gp120', 'CD4', 'séropositivité']
  },

  // =========================================================================
  // 10. LE FONCTIONNEMENT DU CŒUR & RÉGULATION DE LA PRESSION ARTÉRIELLE (SVT Tle D)
  // =========================================================================
  {
    id: 'svt-tle-d-fonctionnement-coeur-pression',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'L\'activité cardiaque et la pression artérielle : Physiologie et régulation',
    lessonTitle: 'Leçon 6 : Le fonctionnement du cœur et la régulation de la pression artérielle',
    objectifs: [
      'Démontrer l\'automatisme cardiaque myogène et décrire l\'organisation du tissu nodal (nœud sinusal, nœud septal, faisceau de His, réseau de Purkinje)',
      'Analyser la révolution cardiaque (systole auriculaire 0,1s, systole ventriculaire 0,3s, diastole générale 0,4s) et l\'électrocardiogramme (ondes P, QRS, T)',
      'Définir la pression artérielle et ses composantes (PA = Débit cardiaque * Résistances périphériques)',
      'Expliquer le baroréflexe : barorécepteurs du sinus carotidien et de la crosse aortique, nerfs sensitifs de Héring et Cyon, centre bulbaire cardiomodérateur',
      'Comparer les effets du système parasympathique (nerf vague X, acétylcholine, cardio-modérateur) et du système orthosympathique (noradrénaline, cardio-accélérateur)'
    ],
    fullCourseContent: `1. L'Automatisme Cardiaque et le Tissu Nodal :
- Mise en évidence : Un cœur de grenouille ou de mammifère isolé de l'organisme et perfusé avec du liquide de Ringer oxygéné continue de battre de façon autonome et rythmée. L'automatisme cardiaque est donc une propriété intrinsèque du myocarde.
- Le tissu nodal (tissu conducteur spécialisé) :
  1. Nœud sinusal (de Keith et Flack) : Situé dans la paroi supérieure de l'oreillette droite, c'est le pacemaker naturel du cœur qui génère spontanément les dépolarisations rythmiques à la fréquence la plus élevée (70-80 battements/min chez l'Homme).
  2. Nœud septal ou auriculo-ventriculaire (d'Aschoff-Tawara) : Situé à la jonction oreillettes-ventricules, il retarde légèrement l'onde électrique pour permettre le remplissage complet des ventricules.
  3. Faisceau de His : Tronc conducteur descendant dans la cloison interventriculaire et se divisant en deux branches droite et gauche.
  4. Réseau de Purkinje : Ramifications terminales sous-endocardiques transmettant la dépolarisation à l'ensemble des cellules myocardiques des ventricules.

2. La Révolution Cardiaque et l'Électrocardiogramme (ECG) :
- Les 3 phases du cycle cardiaque (durée totale = 0,8 seconde pour 75 battements/min) :
  * 1. Systole auriculaire (0,1 s) : Contraction des deux oreillettes chassant le sang dans les ventricules à travers les valvules auriculo-ventriculaires ouvertes.
  * 2. Systole ventriculaire (0,3 s) : Fermeture brutale des valvules auriculo-ventriculaires (1er bruit du cœur "Toub"), contraction puissante des ventricules ouvrant les valvules sigmoïdes et expulsion du sang dans l'aorte et l'artère pulmonaire.
  * 3. Diastole générale (0,4 s) : Relâchement complet du myocarde, fermeture des valvules sigmoïdes (2e bruit du cœur "Ta"), remplissage passif des oreillettes et des ventricules.
- Signification des ondes de l'ECG :
  * Onde P : Dépolarisation des oreillettes précédant la systole auriculaire.
  * Complexe QRS : Dépolarisation rapide et puissante des ventricules précédant la systole ventriculaire.
  * Onde T : Repolarisation des ventricules au cours de la diastole.

3. La Pression Artérielle (PA) et sa Régulation Nerveuse :
- Définition : La pression artérielle est la force exercée par le sang sur la paroi des grosses artères. Elle s\'exprime par deux valeurs : la pression systolique maximale (environ 120 mmHg ou 12 cmHg) et la pression diastolique minimale (environ 80 mmHg ou 8 cmHg).
- Formule fondamentale : $PA = Q \\times R = (FC \\times VES) \\times R$ (où $Q$ = débit cardiaque, $FC$ = fréquence cardiaque, $VES$ = volume d'éjection systolique, $R$ = résistances périphériques et vasomotricité).
- Le Réflexe Barorégulateur (Boucle de rétroaction négative à court terme) :
  * En cas d'hypertension artérielle :
    (1) Les barorécepteurs situés dans les parois du sinus carotidien et de la crosse aortique sont étirés et augmentent la fréquence de leurs potentiels d'action.
    (2) L'influx sensitif afférent chemine par le nerf de Héring (IX) et le nerf de Cyon (X) vers le bulbe rachidien.
    (3) Le centre bulbaire active le noyau moteur du nerf vague (nerf X parasympathique) et inhibe le centre cardio-accélérateur orthosympathique.
    (4) Le nerf vague X libère de l'acétylcholine sur le nœud sinusal : ralentissement du cœur (bradycardie), diminution du débit cardiaque et vasodilatation artérielle -> Retour de la pression artérielle à sa valeur de consigne normale.
  * En cas d'hypotension artérielle :
    Diminution de la stimulation des barorécepteurs -> Levée du frein vagal et activation du système orthosympathique libérant de la noradrénaline -> Tachycardie, vasoconstriction et rétablissement de la PA.`,
    definitions: [
      {
        term: 'Automatisme cardiaque',
        definition: 'Propriété intrinsèque du tissu nodal myocardique à engendrer des contractions rythmiques et spontanées en l\'absence de toute commande nerveuse extérieure.'
      },
      {
        term: 'Nœud sinusal (Pacemaker)',
        definition: 'Centre d\'entraînement principal du cœur situé dans l\'oreillette droite imposant sa fréquence de dépolarisation spontanée à l\'ensemble du myocarde.'
      },
      {
        term: 'Pression Artérielle (PA)',
        definition: 'Force hémodynamique exercée par le flux sanguin sur l\'unité de surface de la paroi des artères systémiques, régulée par le baroréflexe.'
      },
      {
        term: 'Barorécepteurs',
        definition: 'Terminaisons nerveuses mécanosensibles situées dans le sinus carotidien et la crosse aortique, détectant les variations de pression par l\'étirement de la paroi artérielle.'
      },
      {
        term: 'Nerfs de Héring et Cyon',
        definition: 'Nerfs sensitifs afférents transmettant les informations barosensibles des sinus carotidiens et de la crosse aortique vers le bulbe rachidien.'
      },
      {
        term: 'Nerf Vague (Nerf X / Parasympathique)',
        definition: 'Nerf moteur cardio-modérateur libérant de l\'acétylcholine sur le tissu nodal pour diminuer la fréquence cardiaque et la force contractile.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de la régulation de la pression artérielle',
        statement: 'Toute variation de la pression artérielle par rapport à la valeur consigne déclenche immédiatement une boucle réflexe négative correctrice ramenant la PA à la normale.'
      }
    ],
    formulas: [
      {
        name: 'Équation hémodynamique de la pression artérielle',
        formula: 'PA = Q \\times R = (FC \\times VES) \\times R',
        explanation: 'Relie la pression artérielle à la fréquence cardiaque, au volume d\'éjection systolique et aux résistances vasculaires périphériques.',
        unitOrCondition: 'PA en mmHg ou cmHg'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer la réponse baroréflexe à une hémorragie brutale (hypotension)',
        procedure: '1. Constat initial : Chute de la volémie sanguine et de la pression artérielle.\n2. Récepteurs et voies afférentes : Baisse de l\'étirement des barorécepteurs sino-aortiques -> Chute de la fréquence des PA sur les nerfs de Héring et Cyon.\n3. Centres nerveux : Désactivation du centre cardio-modérateur vagal et stimulation du centre vasomoteur et cardio-accélérateur orthosympathique.\n4. Voies efférentes et effecteurs : Libération accrue de noradrénaline sur le cœur (tachycardie, hausse de FC et VES) et sur les artérioles (vasoconstriction périphérique).\n5. Conclure sur le rétablissement de la pression artérielle.',
        tip: 'Toujours mentionner l\'inhibition du nerf X et l\'activation de l\'orthosympathique lors d\'une hypotension.'
      }
    ],
    examples: [
      {
        statement: 'On sectionne les deux nerfs vagues X chez un chien. On observe une augmentation immédiate et durable de la fréquence cardiaque de 75 à 140 battements/min. Explique ce résultat.',
        solution: 'Le nerf vague X exerce un tonus cardio-modérateur permanent (frein vagal physiologique) sur le nœud sinusal du cœur au repos. La section bilatérale supprime ce frein parasympathique, permettant au cœur d\'exprimer son rythme sinusal intrinsèque spontané accéléré.'
      }
    ],
    exercises: [
      {
        question: 'Quel est l\'effet de la stimulation électrique du bout périphérique du nerf de Héring sectionné ?',
        correction: 'La stimulation du bout périphérique (vers le sinus) ne produit aucun effet car le message ne peut pas remonter vers le centre nerveux. En revanche, la stimulation du bout central (vers le bulbe) simule une fausse hypertension et déclenche une bradycardie intense et une chute de la pression artérielle par activation réflexe du nerf vague X.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un examen médical, un sujet passe brusquement de la position couchée à la position debout (orthostatisme). Le sang s\'accumule temporairement dans les membres inférieurs par gravité, provoquant une baisse transitoire de pression au niveau du cou. En quelques secondes, son rythme cardiaque accélère et sa pression artérielle se stabilise à 12/8 cmHg.',
      instructions: [
        '1. Nomme le réflexe mis en jeu.',
        '2. Détaille la chaîne réflexe permettant de corriger l\'hypotension orthostatique.',
        '3. Déduis les risques encourus si ce réflexe est défaillant.'
      ],
      solutionGuide: '1. Il s\'agit du réflexe barorégulateur (baroréflexe orthostatique).\n2. La baisse de pression au niveau des sinus carotidiens diminue la fréquence des influx sur les nerfs de Héring -> levée de l\'inhibition bulbaire sur le système orthosympathique -> décharge de noradrénaline sur le nœud sinusal (hausse de fréquence cardiaque) et vasoconstriction des membres inférieurs -> rétablissement de la pression artérielle.\n3. En cas de défaillance, le sujet souffre d\'hypotension orthostatique sévère caractérisée par un malaise lipothymique, vertiges et perte de connaissance brève par défaut d\'irrigation cérébrale.'
    },
    examTraps: [
      'Confondre le bout central (qui va vers le centre nerveux bulbaire) et le bout périphérique (qui va vers l\'organe) lors des sections de nerfs.',
      'Oublier que le nerf X est cardiomodérateur (diminue la FC) tandis que l\'orthosympathique est cardioaccélérateur (augmente la FC).'
    ],
    quickMemo: 'Automatisme cardiaque = Tissu nodal (Nœud sinusal pacemaker -> Nœud septal -> Faisceau de His -> Purkinje). PA = Débit * Résistances. Baroréflexe : Hypertension -> Barorécepteurs stimulés -> Nerfs Héring/Cyon -> Bulbe -> Nerf X (acétylcholine) -> Bradycardie et baisse de PA.',
    keywords: ['SVT Terminale D', 'activité cardiaque', 'pression artérielle', 'tissu nodal', 'nœud sinusal', 'baroréflexe', 'nerf de Héring', 'nerf de Cyon', 'nerf vague X', 'acétylcholine', 'orthosympathique', 'bradycardie', 'tachycardie']
  },

  // =========================================================================
  // 11. LE MAINTIEN DE LA CONSTANCE DU MILIEU INTÉRIEUR (SVT Tle D)
  // =========================================================================
  {
    id: 'svt-tle-d-homeostasie-milieu-interieur',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'L\'intégrité de l\'organisme : Homéostasie et régulation rénale',
    lessonTitle: 'Leçon 7 : Le maintien de la constance du milieu intérieur (Homéostasie rénale et pH)',
    objectifs: [
      'Définir le milieu intérieur (plasma sanguin, lymphe interstitielle, lymphe canalisée) et l\'homéostasie (Claude Bernard)',
      'Décrire la structure anatomique et microscopique du néphron (glomérule, capsule de Bowman, tube contourné proximal, anse de Henlé, tube contourné distal, tube collecteur)',
      'Détailler les étapes de l\'élaboration de l\'urine : filtration glomérulaire (urine primitive), réabsorption tubulaire active/passive, sécrétion tubulaire, excrétion définitive',
      'Expliquer la régulation du bilan hydrominéral par l\'ADH (hormone antidiurétique / vasopressine) et l\'Aldostérone (système rénine-angiotensine-aldostérone)',
      'Expliquer la régulation du pH sanguin (7,40) par les systèmes tampons, la ventilation pulmonaire et l\'excrétion rénale d\'ions H+'
    ],
    fullCourseContent: `1. Le Milieu Intérieur et le Concept d'Homéostasie :
- Le milieu intérieur (Claude Bernard) : Compartiment liquidien extracellulaire dans lequel baignent toutes les cellules de l'organisme. Il comprend le plasma sanguin circulant dans les vaisseaux, la lymphe interstitielle en contact direct avec les cellules et la lymphe canalisée dans les vaisseaux lymphatiques.
- L'homéostasie (Walter Cannon) : Capacité de l'organisme à maintenir constants les paramètres physico-chimiques fondamentaux du milieu intérieur (pH = 7,40, osmolarité = 300 mOsm/L, glycémie = 1,0 g/L, température = 37°C, volémie) malgré les fluctuations continuelles du milieu extérieur.

2. Structure et Fonctionnement du Néphron :
- Le néphron est l'unité structurale et fonctionnelle du rein (environ 1 million par rein). Il comprend :
  * Le corpuscule de Malpighi : Pelote de capillaires fenestrés (glomérule) entourée par la capsule de Bowman à double feuillet.
  * Le tubule rénal : Tube Contourné Proximal (TCP), Anse de Henlé en épingle à cheveux (branche descendante perméable à l'eau, branche ascendante imperméable à l'eau et pompant activement NaCl), Tube Contourné Distal (TCD) et Tube Collecteur de Bellini.
- Les étapes de formation de l'urine :
  1. Filtration glomérulaire : Phénomène physique purement passif sous l'effet de la pression hydrostatique sanguine (environ 180 L de sang filtrés par jour). L'eau, les ions et les petites molécules dissoutes (glucose, urée, acides aminés) traversent le filtre pour former l'urine primitive dans la capsule de Bowman (composition identique au plasma mais totalement dépourvue de protéines et de cellules sanguines).
  2. Réabsorption tubulaire : Récupération active et passive de l'eau (99%) et des substances utiles de l'urine primitive vers les capillaires péri-tubulaires :
     - Le glucose est réabsorbé à 100% dans le TCP par transport actif (substance à seuil d'élimination de 1,80 g/L ; au-delà, apparition de glycosurie).
     - Les ions Na+, Cl-, HCO3- et acides aminés sont réabsorbés massivement.
  3. Sécrétion tubulaire : Passage actif de déchets métaboliques et toxiques du sang vers la lumière du tubule rénal (ions H+, ions ammonium NH4+, acide hippurique, médicaments comme la pénicilline).
  4. Excrétion définitive : L'urine définitive (environ 1,5 L/jour) est concentrée, stérile, exempte de glucose et de protéines, riche en urée, acide urique, créatinine et sels minéraux.

3. Régulation Hydrominérale et Maintien du pH Plasmatique :
- A. Régulation de l'eau par l'ADH (Vasopressine) :
  * En cas de déshydratation ou d'augmentation de la pression osmotique du plasma (hyperosmolarité), les osmorécepteurs hypothalamiques stimulent la post-hypophyse pour sécréter l'ADH.
  * L'ADH s'insère sur les récepteurs des tubes collecteurs et stimule l'insertion d'aquaporines, augmentant massivement la réabsorption d'eau : les urines sont concentrées et la diurèse diminue (anti-diurèse).
- B. Régulation du Sodium et de la Volémie par l'Aldostérone :
  * En cas d'hypotension ou d'hyponatrémie, l'appareil juxtaglomérulaire du rein sécrète de la rénine qui convertit l'angiotensinogène hépatique en angiotensine I puis II.
  * L'angiotensine II stimule la corticosurrénale pour sécréter l'aldostérone.
  * L'aldostérone stimule la réabsorption active de Na+ et l'élimination de K+ dans le tube distal, réabsorbant l'eau par osmose et rétablissant la volémie et la pression artérielle.
- C. Régulation du pH plasmatique (pH = 7,35 à 7,45) :
  * Systèmes tampons chimiques rapides : Système bicarbonate ($H_2CO_3 / HCO_3^-$), phosphates et protéines plasmatiques.
  * Régulation respiratoire (minutes) : L'acidose stimule la ventilation pulmonaire pour éliminer le $CO_2$ ($H^+ + HCO_3^- \\to H_2O + CO_2$).
  * Régulation rénale (heures à jours) : Excrétion d'ions $H^+$ et réabsorption/génération de nouveaux ions bicarbonates $HCO_3^-$.`,
    definitions: [
      {
        term: 'Homéostasie',
        definition: 'Maintien dynamique et coordonné de la constance relative des paramètres physico-chimiques du milieu intérieur indispensable à la survie des cellules de l\'organisme.'
      },
      {
        term: 'Néphron',
        definition: 'Unité fonctionnelle microscopique du rein assurant la filtration du sang, la réabsorption des substances indispensables et l\'excrétion de l\'urine définitive.'
      },
      {
        term: 'Filtration glomérulaire',
        definition: 'Passage passif par ultrafiltration de l\'eau et des micromolécules sanguines à travers les pores du glomérule vers la capsule de Bowman, générant l\'urine primitive.'
      },
      {
        term: 'ADH (Hormone Antidiurétique)',
        definition: 'Neurohormone synthétisée par l\'hypothalamus et libérée par la posthypophyse, augmentant la perméabilité à l\'eau des tubes collecteurs rénaux via les aquaporines.'
      },
      {
        term: 'Aldostérone',
        definition: 'Hormone minéralocorticoïde sécrétée par la corticosurrénale stimulant la réabsorption active de sodium (Na+) et l\'excrétion de potassium (K+) par le néphron.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de composition de l\'urine saine',
        statement: 'Dans l\'urine définitive d\'un individu sain, il n\'y a JAMAIS de glucose (seuil 1,8 g/L non dépassé) ni de protéines (non filtrées par le glomérule).'
      }
    ],
    formulas: [
      {
        name: 'Équation du système tampon bicarbonate sanguin',
        formula: 'CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-',
        explanation: 'Maintien du pH plasmatique strict à 7,40 par équilibre entre élimination pulmonaire du CO2 et excrétion rénale de H+.',
        unitOrCondition: 'Tampon plasmatique'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer le mécanisme d\'adaptation rénale lors d\'une déshydratation',
        procedure: '1. Constat : Perte d\'eau entraînant une hausse de l\'osmolarité plasmatique (> 300 mOsm/L).\n2. Détection : Les osmorécepteurs de l\'hypothalamus détectent l\'hyperosmolarité.\n3. Réponse hormonale : Sécrétion accrue d\'ADH par la post-hypophyse dans la circulation sanguine.\n4. Action rénale : L\'ADH ouvre les canaux à eau (aquaporines) dans le tube collecteur -> Réabsorption massive d\'eau vers le sang.\n5. Conséquence : Baisse du volume d\'urine émise (oligurie), urine très concentrée et normalisation de l\'osmolarité sanguine.',
        tip: 'Toujours mentionner l\'effet conjugué de l\'ADH (sur l\'eau) et de l\'aldostérone (sur le sodium).'
      }
    ],
    examples: [
      {
        statement: 'Chez un patient diabétique dont la glycémie est de 2,8 g/L, on retrouve du glucose dans l\'urine (glycosurie) accompagné d\'une soif intense et d\'une abondante diurèse. Explique ce phénomène.',
        solution: 'La glycémie dépasse le seuil maximal de réabsorption tubulaire du glucose par le rein (1,80 g/L). Les transporteurs membranaires du TCP sont saturés : l\'excédent de glucose reste dans l\'urine primitive (glycosurie). Par effet osmotique, ce glucose non réabsorbé retient une grande quantité d\'eau dans le tubule, provoquant une polyurie osmotique et une soif intense réflexe (polydipsie).'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi la présence d\'albumine (protéinurie) dans l\'urine définitive est-elle le signe d\'une lésion glomérulaire ?',
        correction: 'Dans un rein sain, les protéines de taille moyenne comme l\'albumine sont arrêtées par la barrière mécanique des pores fenestrés et la charge électronégative de la membrane basale glomérulaire. La présence de protéines dans l\'urine définitive prouve que la membrane glomérulaire est altérée et perméable aux macromolécules plasmatiques (lésion glomérulaire ou néphropathie).'
      }
    ],
    evaluationSituation: {
      context: 'Un athlète participe à un marathon de 42 km sous une chaleur de 35°C sans s\'hydrater suffisamment. À l\'arrivée, il a perdu 3 kg, sa diurèse est réduite à 30 mL/h et ses urines sont brunâtres très concentrées.',
      instructions: [
        '1. Explique les variations de son bilan hydrique.',
        '2. Nomme les deux hormones mobilisées et détaille leur mode d\'action sur le néphron.',
        '3. Justifie la couleur et le faible volume de ses urines.'
      ],
      solutionGuide: '1. La transpiration abondante pour dissiper la chaleur a causé une déshydratation intracellulaire et extracellulaire majeure avec diminution de la volémie et hausse de l\'osmolarité plasmatique.\n2. (a) L\'ADH sécrétée par la posthypophyse augmente la perméabilité à l\'eau des tubes collecteurs rénaux pour réabsorber le maximum d\'eau libre. (b) L\'Aldostérone sécrétée par la corticosurrénale stimule la réabsorption active de sodium dans le TCD pour maintenir la pression artérielle et retenir l\'eau.\n3. L\'eau étant massivement réabsorbée vers le sang sous l\'effet de l\'ADH, le volume de l\'urine définitive est minimal (oligurie) et les déchets azotés comme l\'urochrome et l\'urée y sont hyperconcentrés, conférant la couleur sombre et la forte densité à l\'urine.'
    },
    examTraps: [
      'Croire que l\'urine primitive contient des protéines (l\'urine primitive est dépourvue de protéines).',
      'Confondre le rôle de l\'ADH (réabsorption d\'eau libre sans sel) et de l\'aldostérone (réabsorption active de sodium Na+ suivie d\'eau).'
    ],
    quickMemo: 'Néphron = Glomérule (filtration passive -> urine primitive sans protéines) -> Tubule (réabsorption active glucose 100%, Na+, eau) -> Sécrétion H+/déchets -> Urine définitive. ADH = réabsorption eau (concentre urine). Aldostérone = réabsorption Na+. pH = 7,40 (tampons, respiration CO2, rein H+).',
    keywords: ['SVT Terminale D', 'homéostasie', 'milieu intérieur', 'néphron', 'filtration glomérulaire', 'réabsorption tubulaire', 'ADH', 'vasopressine', 'aldostérone', 'rénine', 'système tampon', 'pH sanguin']
  },

  // =========================================================================
  // 12. LA RÉGULATION DE LA GLYCÉMIE (SVT Tle D - LEÇON 8 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-regulation-glycemie',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'La régulation des fonctions physiologiques : Régulation de la glycémie',
    lessonTitle: 'Leçon 8 : La régulation de la glycémie',
    objectifs: [
      'Définir la glycémie et sa valeur de consigne normale (0,8 à 1,1 g/L soit 4,5 à 6,1 mmol/L)',
      'Expliquer le rôle de réservoir régulateur du foie (expérience du foie lavé de Claude Bernard)',
      'Détailler les voies métaboliques du glucose : glycogénogenèse, glycogénolyse, néoglucogenèse et lipogenèse',
      'Décrire l\'organisation endocrine du pancréas (îlots de Langerhans : cellules alpha et cellules bêta)',
      'Expliquer l\'action hypoglycémiante de l\'insuline et les actions hyperglycémiantes du glucagon et de l\'adrénaline',
      'Distinguer le Diabète de type 1 (insulinodépendant, auto-immun) et le Diabète de type 2 (non-insulinodépendant, insulinorésistance)'
    ],
    fullCourseContent: `1. La Glycémie et le Rôle Pivot du Foie :
- Définition : La glycémie est le taux de glucose dans le plasma sanguin. Chez un sujet sain à jeun, elle est rigoureusement maintenue autour d'une valeur de consigne constante de 1,0 g/L (environ 5,5 mmol/L).
- Expérience du foie lavé de Claude Bernard (1855) :
  * Un foie de mammifère fraîchement prélevé est lavé à l'eau courante par la veine porte jusqu'à ce que l'eau sortant par les veines sus-hépatiques ne contienne plus aucune trace de sucre.
  * Laissé à température ambiante pendant 45 minutes puis à nouveau traversé par de l'eau, le liquide de sortie redevient très riche en glucose.
  * Déduction : Le foie contient une substance glucidique insoluble de réserve, le glycogène, qui s'hydrolyse spontanément sous l'action d'enzymes pour libérer du glucose dans le sang. Le foie est le seul organe capable de stocker et de libérer du glucose pour l'ensemble de l'organisme (rôle de distributeur régulateur).

2. Les Voies Métaboliques du Glucose :
- Glycogénogenèse : Polymérisation enzymatique des molécules de glucose en glycogène de réserve dans les hépatocytes et myocytes sous l'action de la glycogène-synthétase : $n \\text{ Glucose} \\to \\text{Glycogène} + n \\text{ H}_2\\text{O}$.
- Glycogénolyse : Hydrolyse du glycogène hépatique en glucose-6-phosphate puis en glucose libre exportable dans le sang grâce à la glucose-6-phosphatase (enzyme présente uniquement dans le foie).
- Néoglucogenèse : Synthèse hépatique de novo de glucose à partir de précurseurs non glucidiques (acides aminés glucoformateurs, glycérol, lactate).
- Lipogenèse : Conversion de l'excès de glucose en triglycérides stockés dans le tissu adipeux.

3. Le Pancréas Endocrine et les Hormones Régulatrices :
- Histologie : Le pancréas est une glande amphicrine (mixte). Sa fonction endocrine est assurée par les îlots de Langerhans disséminés dans le tissu acineux exocrine :
  * Cellules bêta ($\beta$) au centre de l'îlot (70%) : Détectent l'hyperglycémie et sécrètent l'INSULINE.
  * Cellules alpha ($\alpha$) à la périphérie (20%) : Détectent l'hypoglycémie et sécrètent le GLUCAGON.
- Mode d'action de l'Insuline (Hormone HYPOGLYCÉMIANTE) :
  * Seule hormone hypoglycémiante de l'organisme.
  * Se fixe sur ses récepteurs membranaires spécifiques des cellules cibles (foie, muscles, tissu adipeux) et induit la translocation des transporteurs GLUT-4 à la membrane.
  * Stimule l'entrée du glucose dans les cellules, la glycogénogenèse hépatique et musculaire, la lipogenèse et la glycolyse tout en inhibant la glycogénolyse et la néoglucogenèse.
- Mode d'action du Glucagon et de l'Adrénaline (Hormones HYPERGLYCÉMIANTES) :
  * Le Glucagon se fixe sur les récepteurs hépatiques, active l'adénylate cyclase (AMPc) et stimule la glycogénolyse hépatique et la néoglucogenèse.
  * L'Adrénaline (médullosurrénale) stimule la glycogénolyse rapide lors d'un stress ou d'un effort intense. Le cortisol stimule la néoglucogenèse à long terme.

4. Les Dysfonctionnements : Les Diabètes Sucrés :
- Diabète de type 1 (DT1 - Diabète insulinodépendant / DID) : Maladie auto-immune survenant chez le sujet jeune, caractérisée par la destruction sélective des cellules bêta des îlots de Langerhans par des auto-anticorps et des lymphocytes T. Absence totale d'insuline. Symptômes cardinaux : polyurie, polydipsie, polyphagie, amaigrissement rapide (syndrome 4P), acidocétose. Traitement : Injections quotidiennes d'insuline.
- Diabète de type 2 (DT2 - Diabète non insulinodépendant / DNID) : Maladie métabolique de l'adulte associée à la sédentarité et au surpoids. Caractérisée par une insulinorésistance des tissus cibles suivie d'un épuisement sécrétoire des cellules bêta. Traitement : Règles hygiéno-diététiques, antidiabétiques oraux.`,
    definitions: [
      {
        term: 'Glycémie',
        definition: 'Concentration plasmatique de glucose libre dans le sang, maintenue par régulation hormonale étroite autour de 1 g/L (5,5 mmol/L).'
      },
      {
        term: 'Glycogénolyse',
        definition: 'Hydrolyse intracellulaire du glycogène en molécules de glucose directement libérées dans le sang par le foie pour compenser une hypoglycémie.'
      },
      {
        term: 'Glycogénogenèse',
        definition: 'Synthèse et mise en réserve de glycogène à partir de molécules de glucose sous l\'action stimulatrice de l\'insuline.'
      },
      {
        term: 'Néoglucogenèse',
        definition: 'Biosynthèse hépatique de glucose à partir de précurseurs non glucidiques (lactate, glycérol, acides aminés).'
      },
      {
        term: 'Insuline',
        definition: 'Hormone polypeptidique hypoglycémiante sécrétée par les cellules bêta des îlots de Langerhans du pancréas favorisant l\'utilisation et le stockage cellulaire du glucose.'
      },
      {
        term: 'Glucagon',
        definition: 'Hormone polypeptidique hyperglycémiante sécrétée par les cellules alpha des îlots de Langerhans stimulant la glycogénolyse et la néoglucogenèse hépatiques.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du foie comme organe effecteur exclusif du glucagon',
        statement: 'Le glucagon agit exclusivement sur les cellules hépatiques (les muscles ne possèdent pas de récepteurs au glucagon ni de glucose-6-phosphatase pour libérer du glucose dans le sang).'
      }
    ],
    formulas: [
      {
        name: 'Bilan de la glycogénogenèse et glycogénolyse hépatique',
        formula: 'n \\text{ Glucose} \\underset{\\text{Glycogénolyse (Glucagon)}}{\\overset{\\text{Glycogénogenèse (Insuline)}}{\\rightleftharpoons}} \\text{Glycogène} + n \\text{ H}_2\\text{O}',
        explanation: 'Équilibre réversible contrôlé par le rapport insuline/glucagon.',
        unitOrCondition: 'Hépatocytes'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer la boucle de régulation de la glycémie lors d\'un repas riche en glucides (Hyperglycémie)',
        procedure: '1. Perturbation : Absorption intestinale de glucose -> Hausse de la glycémie au-dessus de 1 g/L.\n2. Détecteur & Centre intégrateur : Les cellules bêta des îlots de Langerhans détectent l\'hyperglycémie.\n3. Message hormonal : Sécrétion d\'insuline dans la veine porte et circulation sanguine.\n4. Organes cibles effecteurs : Foie, muscles et tissu adipeux augmentent la capture de glucose (GLUT-4), activent la glycogénogenèse et la lipogenèse.\n5. Résultat : Baisse de la glycémie et retour à la valeur consigne de 1,0 g/L.',
        tip: 'Toujours mentionner les effecteurs (foie, muscle, tissu adipeux) et le mécanisme (translocation des GLUT-4 et glycogénogenèse).'
      }
    ],
    examples: [
      {
        statement: 'Une pancreatectomie totale chez un chien entraîne en quelques heures une hyperglycémie sévère (4 g/L) et la mort en quelques jours. Si l\'on greffe un fragment de pancréas au niveau du cou de l\'animal, la glycémie se normalise. Que démontrent ces expériences ?',
        solution: 'La pancreatectomie montre que le pancréas est l\'organe indispensable à la régulation de la glycémie. Le rétablissement de la glycémie normale par une greffe pancréatique vascularisée (sans connexion nerveuse) prouve que le pancréas exerce son action hypoglycémiante par voie humorale (hormonale sanguine).'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi le glycogène musculaire ne peut-il pas contribuer directement à élever la glycémie lors d\'un jeûne ?',
        correction: 'Les cellules musculaires sont dépourvues de l\'enzyme glucose-6-phosphatase. Lors de la glycogénolyse musculaire, le glucose-6-phosphate formé ne peut pas être déphosphorylé en glucose libre : il est obligatoirement consommé sur place par la glycolyse pour les besoins énergétiques exclusifs de la cellule musculaire.'
      }
    ],
    evaluationSituation: {
      context: 'Un adolescent de 15 ans sans antécédents médicaux consulte pour une fatigue intense, une perte de 6 kg en 3 semaines malgré un appétit décuplé, et le besoin d\'uriner et de boire plusieurs litres d\'eau par jour. L\'analyse montre une glycémie à jeun de 3,2 g/L et la présence de glucose et de corps cétoniques dans l\'urine.',
      instructions: [
        '1. Diagnostique le type de diabète dont souffre ce patient en justifiant.',
        '2. Explique l\'origine de la polyurie et de la polydipsie.',
        '3. Précise le mécanisme immunologique à l\'origine de cette pathologie et le traitement requis.'
      ],
      solutionGuide: '1. Il s\'agit d\'un Diabète de Type 1 (DID) en raison de l\'âge jeune, de l\'apparition brutale des symptômes (syndrome 4P : polyurie, polydipsie, polyphagie, perte de poids) et de la présence de corps cétoniques (acidocétose).\n2. À 3,2 g/L, le seuil de réabsorption rénale du glucose (1,8 g/L) est dépassé : le glucose éliminé dans l\'urine attire l\'eau par osmose (polyurie), provoquant une déshydratation qui stimule le centre cérébral de la soif (polydipsie).\n3. C\'est une maladie auto-immune où les lymphocytes T cytotoxiques détruisent sélectivement les cellules bêta des îlots de Langerhans sécrétrices d\'insuline. Le traitement vital consiste en une insulinothérapie substitutive quotidienne par injections d\'insuline.'
    },
    examTraps: [
      'Dire que le glucagon agit sur les muscles (le glucagon n\'a AUCUN récepteur sur les muscles).',
      'Confondre glycogénogenèse (synthèse de glycogène) et glycogénolyse (dégradation de glycogène).',
      'Oublier de préciser que l\'insuline est la SEULE hormone hypoglycémiante de l\'organisme.'
    ],
    quickMemo: 'Glycémie = 1,0 g/L (5,5 mmol/L). Hyperglycémie -> Cellules bêta des îlots de Langerhans -> Insuline -> Foie/Muscles/Tissu adipeux -> Glycogénogenèse + GLUT4. Hypoglycémie -> Cellules alpha -> Glucagon -> Foie exclusivement -> Glycogénolyse + Néoglucogenèse. DT1 = auto-immun (manque insuline) ; DT2 = insulinorésistance.',
    keywords: ['SVT Terminale D', 'glycémie', 'insuline', 'glucagon', 'îlots de Langerhans', 'cellules bêta', 'cellules alpha', 'glycogénogenèse', 'glycogénolyse', 'néoglucogenèse', 'foie de Claude Bernard', 'diabète de type 1', 'diabète de type 2']
  },

  // =========================================================================
  // 13. LA PRODUCTION D'ÉNERGIE PAR LA CELLULE (SVT Tle D - LEÇON 4 OFFICIELLE)
  // =========================================================================
  {
    id: 'svt-tle-d-production-energie-cellule',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'Le métabolisme énergétique cellulaire : Production d\'ATP',
    lessonTitle: 'Leçon 4 : La production d\'énergie par la cellule (Respiration aérobie et Fermentations anaérobies)',
    objectifs: [
      'Démontrer la dégradation des molécules organiques (oxydation du glucose) pour la production d\'ATP',
      'Détailler les 3 étapes de la respiration cellulaire aérobie : Glycolyse cytoplasmique, Cycle de Krebs matriciel et Chaîne respiratoire mitochondriale',
      'Établir le bilan énergétique complet de la respiration aérobie (38 ATP par molécule de glucose)',
      'Décrire les fermentations anaérobies : fermentation lactique (muscles, bactéries lactiques) et fermentation alcoolique (levures) produisant 2 ATP',
      'Calculer et comparer le rendement énergétique de la respiration (environ 40%) et des fermentations (environ 2%)'
    ],
    fullCourseContent: `1. La Respiration Cellulaire Aérobie :
- Définition : Voie métabolique d'oxydation complète du glucose en présence d'oxygène ($O_2$), produisant de l'eau ($H_2O$), du dioxyde de carbone ($CO_2$) et une grande quantité d'énergie sous forme d'ATP (Adénosine Triphosphate).
- Équation globale : $C_6H_{12}O_6 + 6 O_2 + 38 (ADP + Pi) \\longrightarrow 6 CO_2 + 6 H_2O + 38 ATP + \\text{Chaleur}$.
- Les 3 étapes de la respiration cellulaire :
  1. La Glycolyse (dans le hyaloplasme / cytosol, sans $O_2$) :
     - Oxydation d'une molécule de glucose ($C_6$) en 2 molécules d'acide pyruvique ou pyruvate ($2 \\times CH_3-CO-COOH$).
     - Réduction de transporteurs : $2 NAD^+ + 4 H^+ + 4 e^- \\to 2 NADH, H^+$.
     - Synthèse de 2 ATP nets par phosphorylation au niveau du substrat.
  2. Le Cycle de Krebs et Décarboxylation Oxydative (dans la matrice mitochondriale) :
     - Entrée du pyruvate dans la matrice -> Transformation en Acétyl-Coenzyme A ($2C$) avec libération de $CO_2$ et réduction de $NADH,H^+$.
     - L'Acétyl-CoA s'unit à l'oxaloacétate ($4C$) pour former du citrate ($6C$) qui subit une série de décarboxylations et déshydrogénations cycliques.
     - Bilan pour 2 pyruvates : Libération de $6 CO_2$, production de $2 ATP$ (ou GTP), réduction de $8 NADH,H^+$ et $2 FADH_2$.
  3. La Chaîne Respiratoire et Phosphorylation Oxydative (sur la crête de la membrane interne mitochondriale) :
     - Les transporteurs réduits ($10 NADH,H^+$ et $2 FADH_2$) sont réoxydés en cédant leurs électrons à une chaîne de complexes protéiques membranaires (cytochromes).
     - L'accepteur final d'électrons est l'oxygène moléculaire $O_2$, qui est réduit en eau : $\\frac{1}{2} O_2 + 2 H^+ + 2 e^- \\to H_2O$.
     - Le transfert des électrons pompe des protons $H^+$ de la matrice vers l'espace intermembranaire, créant un fort gradient électrochimique de protons.
     - Le flux de retour des protons vers la matrice à travers les sphères pédonculées (ATP-synthases) active la synthèse massive d'ATP : $1 NADH,H^+ \\to 3 ATP$ et $1 FADH_2 \\to 2 ATP$.
     - Bilan de la chaîne respiratoire : $(10 \\times 3) + (2 \\times 2) = 34 ATP$.
- Bilan énergétique total de la respiration : $2 \\text{ (glycolyse)} + 2 \\text{ (Krebs)} + 34 \\text{ (chaîne respiratoire)} = 38 ATP$.

2. Les Fermentations Anaérobies :
- Voies métaboliques d'oxydation incomplète du glucose en l'absence totale d'oxygène ($O_2$), se déroulant exclusivement dans le hyaloplasme :
- A. La Fermentation Lactique (dans les cellules musculaires en hypoxie et bactéries lactiques) :
  * Le pyruvate issu de la glycolyse est réduit en acide lactique (lactate) par réoxydation du $NADH,H^+$ en $NAD^+$ : $C_6H_{12}O_6 + 2 (ADP + Pi) \\to 2 \\text{ Acide Lactique} (CH_3-CHOH-COOH) + 2 ATP$.
  * Bilan net = 2 ATP. L'acide lactique s'accumule dans le muscle et abaisse le pH.
- B. La Fermentation Alcoolique (chez les levures) :
  * Le pyruvate est décarboxylé en éthanal puis réduit en éthanol (alcool) avec dégagement de $CO_2$ : $C_6H_{12}O_6 + 2 (ADP + Pi) \\to 2 \\text{ Éthanol} (C_2H_5OH) + 2 CO_2 + 2 ATP$.
  * Bilan net = 2 ATP.

3. Comparaison et Rendement Énergétique :
- Énergie libérée par l'hydrolyse d'une mole d'ATP = $30,5 \\text{ kJ/mol}$.
- Énergie potentielle totale contenue dans une mole de glucose = $2860 \\text{ kJ/mol}$.
- Rendement de la respiration aérobie : $R = \\frac{38 \\times 30,5}{2860} \\times 100 \\approx 40,5\\%$ (les 59,5% restants sont dissipés sous forme de chaleur).
- Rendement de la fermentation : $R = \\frac{2 \\times 30,5}{2860} \\times 100 \\approx 2,13\\%$ (l'essentiel de l'énergie chimique reste piégé dans les liaisons des résidus organiques alcool ou lactate).`,
    definitions: [
      {
        term: 'Respiration cellulaire',
        definition: 'Ensemble des réactions d\'oxydation aérobie complète des nutriments organiques dans le cytosol et les mitochondries, couplées à la synthèse de 38 ATP.'
      },
      {
        term: 'Glycolyse',
        definition: 'Voie métabolique anaérobie cytosolique scindant une molécule de glucose (C6) en deux molécules de pyruvate (C3) avec production de 2 ATP et 2 NADH,H+.'
      },
      {
        term: 'Cycle de Krebs',
        definition: 'Séquence cyclique de décarboxylations et déshydrogénations matricielles mitochondriales achevant l\'oxydation des groupements acétyles en CO2.'
      },
      {
        term: 'Sphère pédonculée (ATP-synthase)',
        definition: 'Complexe enzymatique transmembranaire de la membrane interne mitochondriale couplant le reflux des protons H+ à la synthèse d\'ATP à partir d\'ADP et Pi.'
      },
      {
        term: 'Fermentation',
        definition: 'Processus métabolique anaérobie d\'oxydation incomplète du glucose dans le hyaloplasme régénérant le NAD+ et produisant un déchet organique et 2 ATP.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du rendement énergétique métabolique',
        statement: 'La respiration aérobie est environ 19 fois plus rentable énergétiquement que la fermentation (38 ATP contre 2 ATP par mole de glucose consommé).'
      }
    ],
    formulas: [
      {
        name: 'Équation bilan de la respiration aérobie',
        formula: 'C_6H_{12}O_6 + 6 O_2 + 38 (ADP + Pi) \\longrightarrow 6 CO_2 + 6 H_2O + 38 ATP',
        explanation: 'Oxydation complète du glucose en milieu aérobie avec synthèse de 38 ATP.',
        unitOrCondition: 'Cellule aérobie'
      },
      {
        name: 'Équation bilan de la fermentation lactique',
        formula: 'C_6H_{12}O_6 + 2 (ADP + Pi) \\longrightarrow 2 CH_3\\text{-}CHOH\\text{-}COOH + 2 ATP',
        explanation: 'Oxydation incomplète en milieu anaérobie sans oxygène.',
        unitOrCondition: 'Muscle / Lactobacilles'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le rendement énergétique de la respiration ou de la fermentation',
        procedure: '1. Identifier le nombre de moles d\'ATP produites par mole de glucose (38 ATP en respiration, 2 ATP en fermentation).\n2. Calculer l\'énergie récupérée sous forme d\'ATP : $E_{\\text{utile}} = n_{\\text{ATP}} \\times 30,5 \\text{ kJ}$.\n3. Calculer le rendement : $R = \\frac{E_{\\text{utile}}}{2860} \\times 100$.\n4. Conclure sur l\'efficacité énergétique et l\'importance du dégagement de chaleur.',
        tip: 'Toujours utiliser 30,5 kJ pour l\'énergie d\'une liaison phosphoanhydre de l\'ATP et 2860 kJ pour la combustion totale du glucose.'
      }
    ],
    examples: [
      {
        statement: 'Des levures sont cultivées dans deux milieux contenant chacun 180 g de glucose (1 mole). En aérobiose, la biomasse de levures produite est de 100 g. En anaérobiose, la biomasse n\'est que de 2 g. Explique cette différence de croissance.',
        solution: 'En aérobiose, les levures réalisent la respiration cellulaire complète produisant 38 ATP par mole de glucose. Cette abondance d\'énergie permet une synthèse cellulaire intense et une forte multiplication (100 g de biomasse). En anaérobiose, elles réalisent la fermentation alcoolique ne produisant que 2 ATP par mole de glucose : l\'énergie disponible étant 19 fois moindre, la prolifération cellulaire est considérablement limitée (2 g de biomasse).'
      }
    ],
    exercises: [
      {
        question: 'Quel est le rôle précis du dioxygène (O2) dans la respiration cellulaire ?',
        correction: 'Le dioxygène intervient à la toute fin de la chaîne respiratoire sur la membrane interne mitochondriale en tant qu\'accepteur final des électrons et des protons pour former des molécules d\'eau (H2O). Sans O2, la chaîne respiratoire se bloque, les transporteurs NADH,H+ ne peuvent plus être réoxydés, ce qui arrête le cycle de Krebs et la production mitochondriale d\'ATP.'
      }
    ],
    evaluationSituation: {
      context: 'Un athlète réalise un sprint de 100 mètres en 10 secondes puis une course de demi-fond de 5000 mètres. Les analyses montrent que lors du sprint, le taux d\'acide lactique sanguin augmente très fortement tandis que lors du 5000 mètres, la consommation d\'O2 atteint son maximum (VO2 max) et le taux d\'acide lactique reste modéré.',
      instructions: [
        '1. Identifie la voie métabolique prédominante lors du sprint de 100 m et justifie la présence d\'acide lactique.',
        '2. Identifie la voie métabolique prédominante lors de la course de 5000 m.',
        '3. Compare le rendement énergétique des deux voies métaboliques.'
      ],
      solutionGuide: '1. Lors du sprint court et très intense (effort anaérobie), l\'apport en O2 est insuffisant par rapport à la demande énergétique immédiate : les fibres musculaires utilisent la fermentation lactique cytosolique rapide produisant 2 ATP et de l\'acide lactique.\n2. Lors du 5000 mètres (effort d\'endurance aérobie), l\'apport d\'O2 par la respiration et la circulation sanguine est suffisant : les cellules musculaires réalisent la respiration mitochondriale aérobie complète.\n3. La respiration aérobie a un rendement élevé d\'environ 40,5% (38 ATP/glucose) sans accumulation de toxines métaboliques, tandis que la fermentation lactique a un rendement très faible de 2,1% (2 ATP/glucose) avec accumulation d\'acide lactique responsable de fatigue musculaire.'
    },
    examTraps: [
      'Confondre la matrice mitochondriale (lieu du cycle de Krebs) et la membrane interne / crêtes (lieu de la chaîne respiratoire).',
      'Oublier que la glycolyse se déroule dans le hyaloplasme (cytosol) et ne nécessite aucunement la présence d\'oxygène.'
    ],
    quickMemo: 'Respiration = Glycolyse (cytosol, 2 ATP, 2 NADH,H+) -> Cycle de Krebs (matrice, 2 ATP, 8 NADH,H+, 2 FADH2, 6 CO2) -> Chaîne respiratoire (crêtes, O2 -> H2O, 34 ATP) = 38 ATP (Rendement 40%). Fermentations (anaérobie, cytosol) : Lactique (2 ATP + acide lactique) et Alcoolique (2 ATP + éthanol + CO2) = 2 ATP (Rendement 2%).',
    keywords: ['SVT Terminale D', 'respiration cellulaire', 'glycolyse', 'cycle de Krebs', 'chaîne respiratoire', 'ATP', 'mitochondrie', 'fermentation lactique', 'fermentation alcoolique', 'rendement énergétique']
  },

  // =========================================================================
  // 14. L'UTILISATION DE L'ÉNERGIE PAR LA CELLULE MUSCULAIRE (SVT Tle D - LEÇON 5)
  // =========================================================================
  {
    id: 'svt-tle-d-utilisation-energie-muscle',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'Le métabolisme énergétique cellulaire : Contraction musculaire',
    lessonTitle: 'Leçon 5 : L\'utilisation de l\'énergie par la cellule musculaire (Mécanisme de la contraction et régénération de l\'ATP)',
    objectifs: [
      'Décrire l\'organisation anatomique et ultrastructurale de la fibre musculaire striée squelettique (sarcomère, myofilaments fins d\'actine et épais de myosine, réticulum sarcoplasmique, tubules T)',
      'Expliquer le mécanisme moléculaire du glissement des myofilaments lors de la contraction musculaire (rôle du $Ca^{2+}$ et de l\'hydrolyse de l\'ATP)',
      'Détailler les 3 voies de régénération de l\'ATP musculaire : voies anaérobies alactiques ultra-rapides (phosphocréatine et myokinase), voie anaérobie lactique rapide (fermentation lactique), et voie aérobie lente (respiration cellulaire)',
      'Interpréter les phénomènes thermiques de la contraction musculaire (chaleur initiale et chaleur retardée)'
    ],
    fullCourseContent: `1. Structure et Ultrastructure du Muscle Strié Squelettique :
- Organisation : Muscle -> Faisceaux de fibres musculaires -> Fibre musculaire (cellule géante plurinucléée ou syncytium) -> Faisceaux de myofibrilles parallèles.
- Le Sarcomère : Unité structurale et contractile élémentaire de la myofibrille, délimitée par deux stries Z successives :
  * Bande sombre A (anisotrope) : Longueur constante, contient les myofilaments épais de myosine et le chevauchement avec l'actine.
  * Zone H : Zone claire centrale de la bande A ne contenant que des filaments épais de myosine.
  * Bandes claires I (isotropes) : De part et d'autre des stries Z, ne contiennent que des myofilaments fins d'actine.
- Ultrastructure moléculaire :
  * Filaments fins : Double hélice d'actine associée à la tropomyosine et au complexe de troponine (portant les sites de fixation pour le calcium).
  * Filaments épais : Assemblage de molécules de myosine avec des têtes globulaires dotées d'une activité enzymatique ATPasique et d'un site de liaison à l'actine.
  * Système membranaire : Réticulum sarcoplasmique (réservoir d'ions $Ca^{2+}$) entourant chaque myofibrille et tubules transverses en T (invaginations de la membrane plasmique / sarcolemme).

2. Le Mécanisme Moléculaire de la Contraction Musculaire :
- Déclenchement : L'arrivée du potentiel d'action musculaire le long des tubules T provoque l'ouverture des canaux calcium du réticulum sarcoplasmique et la libération massive d'ions $Ca^{2+}$ dans le sarcoplasme.
- Cycle de glissement actine-myosine en 4 temps :
  1. Fixation du calcium et démasquage : Les ions $Ca^{2+}$ se fixent sur la troponine, ce qui déplace la tropomyosine et démasque les sites de liaison de l'actine.
  2. Formation des ponts d'union : Les têtes de myosine chargées d'ADP et Pi se fixent sur les molécules d'actine.
  3. Pivotement et coup de force : La libération de l'ADP et du Pi provoque le basculement à 45° des têtes de myosine, tirant les filaments d'actine vers le centre du sarcomère : le sarcomère se raccourcit (les stries Z se rapprochent, la bande I et la zone H rétrécissent, la bande A reste constante).
  4. Détachement et réarmement : Une nouvelle molécule d'ATP se fixe sur la tête de myosine, provoquant sa dissociation de l'actine. L'ATP est ensuite hydrolysée en ADP + Pi par l'activité ATPasique de la myosine, réarmant la tête à 90° prête pour un nouveau cycle.
- Relâchement : Pompage actif des ions $Ca^{2+}$ vers le réticulum sarcoplasmique par des pompes $Ca^{2+}$-ATPasiques ; la tropomyosine masque à nouveau les sites d'actine. En cas de carence en ATP à la mort, les têtes restent fixées à l'actine, causant la rigidité cadavérique (*rigor mortis*).

3. Les Voies de Régénération de l'ATP Musculaire :
- Le stock d'ATP intramusculaire est très faible (permet seulement 1 à 2 secondes d'effort maximal). Trois voies métaboliques se relaient pour régénérer l'ATP :
  * A. Voies anaérobies alactiques ultra-rapides (durée 0 à 15 secondes) :
    1. Réaction de la phosphagène / phosphocréatine (CP) catalysée par la créatine kinase : $\\text{Phosphocréatine} + \\text{ADP} \\xrightarrow{\\text{Créatine Kinase}} \\text{Créatine} + \\text{ATP}$.
    2. Réaction de la myokinase : $2 \\text{ ADP} \\xrightarrow{\\text{Myokinase}} \\text{ATP} + \\text{AMP}$.
  * B. Voie anaérobie lactique rapide (durée 15 secondes à 2 minutes) :
    - Fermentation lactique à partir du glycogène musculaire : $\\text{Glycogène} \\to \\text{Glucose} \\to 2 \\text{ Acide Lactique} + 2 ATP$. Voie puissante mais limitée par l'acidose lactique.
  * C. Voie aérobie lente d'endurance (> 2 minutes) :
    - Respiration cellulaire mitochondriale complète à partir du glucose sanguin, glycogène et acides gras : $\\text{Nutriments} + O_2 \\to CO_2 + H_2O + 38 ATP$. Voie inépuisable tant que l'apport en oxygène et substrats est maintenu.

4. Les Phénomènes Thermiques de la Contraction :
- Chaleur initiale : Dégagée pendant la contraction et le relâchement (liée à l'hydrolyse de l'ATP et à la glycolyse anaérobie).
- Chaleur retardée : Dégagée lentement après la fin de la contraction (liée aux réactions oxydatives de la respiration aérobie restaurant les stocks de phosphocréatine et glycogène).`,
    definitions: [
      {
        term: 'Sarcomère',
        definition: 'Unité fonctionnelle et contractile de base du muscle strié, comprise entre deux stries Z successives, composée de myofilaments d\'actine et de myosine.'
      },
      {
        term: 'Myosine',
        definition: 'Protéine motrice contractile formant les filaments épais, dont les têtes globulaires possèdent une activité enzymatique ATPasique et se lient à l\'actine.'
      },
      {
        term: 'Actine',
        definition: 'Protéine filamenteuse formant les myofilaments fins de la bande claire, glissant le long de la myosine lors de la contraction.'
      },
      {
        term: 'Phosphocréatine',
        definition: 'Composé phosphoré à haut potentiel énergétique stocké dans le sarcoplasme permettant la régénération immédiate de l\'ATP sans oxygène ni acide lactique.'
      },
      {
        term: 'Rigidité cadavérique (Rigor mortis)',
        definition: 'État d\'immobilisation contracturée des muscles post-mortem causé par l\'épuisement total de l\'ATP empêchant le détachement des têtes de myosine de l\'actine.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des modifications structurales du sarcomère contracté',
        statement: 'Lors de la contraction musculaire : les stries Z se rapprochent, la bande I et la zone H rétrécissent, mais la longueur de la bande sombre A reste strictement INCHANGÉE.'
      }
    ],
    formulas: [
      {
        name: 'Régénération immédiate par la phosphocréatine',
        formula: '\\text{Phosphocréatine} + \\text{ADP} \\xrightarrow{\\text{Créatine Kinase}} \\text{Créatine} + \\text{ATP}',
        explanation: 'Voie anaérobie alactique ultra-rapide sans accumulation d\'acide lactique.',
        unitOrCondition: 'Sarcoplasme musculaire'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer les étapes du cycle de glissement actine-myosine',
        procedure: '1. Repos : Tête de myosine armée avec ADP + Pi ; sites d\'actine masqués par la tropomyosine.\n2. Signal : Entrée de Ca2+ sarcoplasmique se liant à la troponine -> démasquage des sites d\'actine.\n3. Pont d\'union : Fixation tête de myosine sur l\'actine.\n4. Raccourcissement : Libération d\'ADP + Pi -> basculement à 45° de la tête de myosine tirant l\'actine vers le centre.\n5. Rupture & Réarmement : Fixation d\'un nouvel ATP -> détachement de la myosine -> hydrolyse de l\'ATP réarmant la tête.',
        tip: 'Toujours préciser le double rôle de l\'ATP : dissociation du pont d\'union ET fourniture d\'énergie lors de son hydrolyse.'
      }
    ],
    examples: [
      {
        statement: 'On extrait des myofibrilles musculaires dans un milieu sans ATP ni Ca2+. On ajoute de l\'ATP seul : aucune contraction n\'apparaît. On ajoute du Ca2+ en présence d\'ATP : une contraction vigoureuse se produit. On ajoute un chélateur qui neutralise le Ca2+ : le muscle se relâche. Que conclut-on ?',
        solution: 'L\'ATP seul est insuffisant pour déclencher la contraction ; la présence simultanée d\'ions calcium (Ca2+) est indispensable pour démasquer les sites de liaison de l\'actine. Le calcium est l\'activateur obligatoire du couplage excitation-contraction.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi l\'ATP est-elle indispensable à la fois pour la contraction et pour le relâchement musculaire ?',
        correction: 'L\'ATP est nécessaire à la contraction car son hydrolyse fournit l\'énergie mécanique pour le basculement des têtes de myosine. Elle est également indispensable au relâchement car la fixation d\'une nouvelle molécule d\'ATP sur la tête de myosine est obligatoire pour rompre le pont actine-myosine, et l\'ATP alimente les pompes calciques réabsorbant les ions Ca2+ dans le réticulum.'
      }
    ],
    evaluationSituation: {
      context: 'Un sprinter court un 100 mètres en 10 secondes. On mesure l\'évolution des concentrations sarcoplasmiques d\'ATP, de phosphocréatine et de lactate au cours de sa course.',
      instructions: [
        '1. Décris l\'évolution de la concentration en phosphocréatine durant les 5 premières secondes.',
        '2. Explique pourquoi le taux d\'ATP intracellulaire reste quasiment constant malgré une consommation énorme.',
        '3. Indique la voie qui prend le relais au-delà de 10 secondes si l\'effort se prolonge.'
      ],
      solutionGuide: '1. Durant les premières secondes, le taux de phosphocréatine chute de manière spectaculaire (diminution de plus de 70%) car elle transfère immédiatement son groupement phosphate à l\'ADP pour régénérer l\'ATP.\n2. Le taux d\'ATP reste stable grâce à l\'action ultra-rapide de la créatine kinase qui reconstitue l\'ATP à la même vitesse qu\'elle est consommée par les têtes de myosine.\n3. Si l\'effort se prolonge, la voie anaérobie lactique (glycolyse / fermentation lactique) prend le relais pour fournir l\'ATP en utilisant le glycogène musculaire, ce qui élève le taux d\'acide lactique sanguin.'
    },
    examTraps: [
      'Croire que la bande A rétrécit pendant la contraction (la bande A conserve une longueur rigoureusement constante).',
      'Oublier que la rupture du complexe actine-myosine exige la fixation d\'une molécule d\'ATP fraîche.'
    ],
    quickMemo: 'Sarcomère = Stries Z + Myosine (épais, bande A constante) + Actine (fins, bande I). Ca2+ libéré du réticulum -> démasquage actine -> fixation myosine-ADP-Pi -> pivotement 45° -> fixation ATP (détachement) -> hydrolyse ATP (réarmement 90°). Régénération ATP : 1. Phosphocréatine (0-15s) ; 2. Fermentation lactique (15s-2min) ; 3. Respiration aérobie (>2min).',
    keywords: ['SVT Terminale D', 'contraction musculaire', 'sarcomère', 'actine', 'myosine', 'ions calcium', 'ATP', 'phosphocréatine', 'réticulum sarcoplasmique', 'rigor mortis']
  },

  // =========================================================================
  // 15. LES DROGUES ET LE SYSTÈME NERVEUX (SVT Tle D & C)
  // =========================================================================
  {
    id: 'svt-tle-d-drogues-systeme-nerveux',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre)',
    level: 'terminale',
    levelLabel: 'Terminale D & C (Programme Officiel Côte d\'Ivoire)',
    serie: 'tle_d',
    serieLabel: 'Terminale D / C',
    chapter: 'Le système nerveux et la santé : Toxicomanie et neurobiologie des drogues',
    lessonTitle: 'Leçon 3 : Les drogues et le système nerveux (Neurotoxicologie et toxicomanie)',
    objectifs: [
      'Définir drogue, toxicomanie, dépendance psychique, dépendance physique et accoutumance/tolérance',
      'Classifier les drogues selon leurs effets sur le système nerveux central : dépresseurs (alcool, morphine, héroïne), stimulants (cocaïne, amphétamines, nicotine), perturbateurs/hallucinogènes (cannabis THC, LSD, ecstasy)',
      'Expliquer le circuit de la récompense mésolimbique (aire tegmentale ventrale ATV -> noyau accumbens) et le rôle clé de la dopamine',
      'Détailler les modes d\'action synaptique des drogues : agonistes mimétiques, blocage de la recapture (cocaïne), stimulation de la libération, blocage des récepteurs inhibiteurs',
      'Sensibiliser aux conséquences sanitaires, psychologiques et sociales de la toxicomanie'
    ],
    fullCourseContent: `1. Définitions et Concepts Clés de la Toxicomanie :
- Drogue : Toute substance chimique naturelle ou synthétique qui, introduite dans l'organisme vivant, modifie une ou plusieurs fonctions physiologiques ou psychiques (comportement, perception, humeur, conscience) et peut engendrer un état de dépendance.
- Toxicomanie : État d'intoxication périodique ou chronique engendré par la consommation répétée d'une substance psychoactive.
- Dépendance psychique : Désir irrépressible et compulsif (craving) de consommer la substance pour retrouver les sensations de plaisir ou échapper au malaise et à l'angoisse.
- Dépendance physique : État d'adaptation physiologique de l'organisme où l'arrêt brutal de la substance déclenche le syndrome de sevrage (tremblements, sueurs, douleurs musculaires, anxiété aiguë, tachycardie, convulsions).
- Tolérance (Accoutumance) : Nécessité d'augmenter progressivement les doses de drogue pour obtenir le même effet physiologique ou psychique ressenti initialement.

2. Classification des Substances Psychoactives :
- A. Les Dépresseurs du Système Nerveux Central (Psycholeptiques) :
  * Alcool, Morphine, Héroïne, Barbituriques, Benzodiazépines.
  * Effets : Ralentissent l'activité cérébrale, diminuent la vigilance, apaisent l'anxiété et provoquent la sédation en stimulant les récepteurs inhibiteurs GABA ou en stimulant les récepteurs aux endorphines/opioïdes.
- B. Les Stimulants du Système Nerveux Central (Psychoanaleptiques) :
  * Cocaïne, Amphétamines, Nicotine, Caféine.
  * Effets : Augmentent la vigilance, l'attention, diminuent la sensation de fatigue et de faim, provoquent une excitation euphorique en augmentant la libération ou en bloquant la recapture de dopamine et noradrénaline.
- C. Les Perturbateurs / Hallucinogènes (Psychodysleptiques) :
  * Cannabis (Tétrahydrocannabinol / THC), LSD, Ecstasy (MDMA).
  * Effets : Altèrent la perception sensorielle, la notion du temps et de l'espace, provoquent des hallucinations visuelles et auditives et des troubles du jugement.

3. Le Circuit de la Récompense et Mécanismes Synaptiques :
- Le circuit de la récompense mésolimbique :
  * Système neuronal cérébral ancestral assurant la survie de l'espèce en associant une sensation de plaisir à des comportements vitaux (nutrition, reproduction, relations sociales).
  * Composantes anatomiques : Les neurones dopaminergiques de l'Aire Tegmentale Ventrale (ATV) projettent leurs axones vers le Noyau Accumbens et le cortex préfrontal.
  * Toutes les drogues sans exception détournent et hyperstimulent ce circuit en provoquant une libération massive et anormale de Dopamine dans le noyau accumbens.
- Mécanismes synaptiques d'action des drogues :
  * Cocaïne : Se fixe sur les transporteurs de recapture de la dopamine sur la membrane présynaptique et les bloque. La dopamine reste présente en forte concentration dans la fente synaptique et stimule continuellement les récepteurs postsynaptiques.
  * Nicotine : Agit comme agoniste en se fixant directement sur les récepteurs cholinergiques nicotiniques des neurones de l'ATV, déclenchant une décharge de potentiels d'action et une libération accrue de dopamine.
  * Morphine / Héroïne : Se fixent sur les récepteurs morphiniques ($\mu$) des interneurones GABAergiques et inhibent la libération de GABA (qui est un frein inhibiteur) : la levée de l'inhibition déclenche une libération massive de dopamine (désinhibition).
  * Cannabis (THC) : Se fixe sur les récepteurs cannabinoïdes CB1 présynaptiques et perturbe la transmission synaptique dans l'hippocampe (mémoire) et le cortex.`,
    definitions: [
      {
        term: 'Circuit de la récompense',
        definition: 'Réseau cérébral connectant l\'aire tegmentale ventrale au noyau accumbens, dont l\'hyperactivation par la dopamine sous l\'effet des drogues crée l\'assuétude et l\'addiction.'
      },
      {
        term: 'Dopamine',
        definition: 'Neurotransmetteur cérébral majeur du plaisir, de la motivation et du renforcement comportemental au sein du circuit de la récompense.'
      },
      {
        term: 'Tolérance (Accoutumance)',
        definition: 'Phénomène d\'adaptation cellulaire et métabolique exigeant l\'augmentation continue des doses de drogue pour produire l\'effet psychoactif initial.'
      },
      {
        term: 'Syndrome de sevrage',
        definition: 'Ensemble des troubles physiques et psychiques pénibles et violents apparaissant lors de l\'interruption brutale de l\'apport d\'une drogue chez un sujet dépendant.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle universelle de l\'addiction',
        statement: 'Toutes les substances addictives partagent la même propriété finale : augmenter la concentration de dopamine disponible dans le noyau accumbens du circuit de la récompense.'
      }
    ],
    formulas: [
      {
        name: 'Mécanisme d\'action de la cocaïne',
        formula: '\\text{Cocaïne} + \\text{Transporteur DAT} \\longrightarrow \\text{Blocage recapture Dopamine} \\longrightarrow \\text{Hyperstimulation synaptique}',
        explanation: 'Augmentation artificielle prolongée du taux de dopamine synaptique.',
        unitOrCondition: 'Fente synaptique du Noyau Accumbens'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer comment une drogue perturbe la transmission synaptique',
        procedure: '1. Identifier la drogue et le neurotransmetteur ciblé (ex: Cocaïne / Dopamine, Nicotine / Acétylcholine, Morphine / GABA-Endorphines).\n2. Préciser le site d\'action : Récepteur postsynaptique, récepteur présynaptique, vésicule ou transporteur de recapture.\n3. Décrire l\'effet moléculaire : Mimétisme agoniste, blocage antagoniste, inhibition de recapture ou libération accrue.\n4. Expliquer la conséquence sur le neurone postsynaptique : Augmentation anormale de la fréquence des potentiels d\'action.\n5. Relier à la sensation de plaisir et à la dépendance via le circuit de la récompense dopaminergique.',
        tip: 'Toujours mentionner l\'Aire Tegmentale Ventrale (ATV), le Noyau Accumbens et la Dopamine.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi un consommateur régulier de cocaïne ressent-il un état de dépression sévère ("descente") quelques heures après la prise ?',
        solution: 'Après avoir bloqué la recapture de dopamine et provoqué son épuisement temporaire dans les vésicules présynaptiques, le taux de dopamine dans la fente synaptique s\'effondre brutalement. Les récepteurs ne sont plus stimulés, entraînant une dysphorie, anxiété et dépression aiguë qui pousse le sujet au réapprovisionnement compulsif.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence fondamentale entre la dépendance psychique et la dépendance physique ?',
        correction: 'La dépendance psychique est le besoin compulsif et mental de consommer la drogue pour éprouver du plaisir ou soulager un malaise affectif. La dépendance physique est une modification biologique profonde des neurones où le fonctionnement normal du corps exige la présence de la drogue, sous peine de déclencher des troubles physiques violents lors du sevrage (sueurs, tremblements, spasmes, crampes).'
      }
    ],
    evaluationSituation: {
      context: 'Des chercheurs mesurent par microdialyse cérébrale le taux de dopamine libéré dans le noyau accumbens chez des rats avant et après injection de différentes substances : eau physiologique, nourriture appétissante, nicotine et cocaïne. L\'eau donne 100% (valeur basale), la nourriture 150%, la nicotine 220% et la cocaïne 350%.',
      instructions: [
        '1. Analyse les résultats obtenus.',
        '2. Explique pourquoi les drogues créent une dépendance beaucoup plus puissante que les plaisirs naturels.',
        '3. Propose deux mesures préventives contre l\'usage des drogues chez les adolescents.'
      ],
      solutionGuide: '1. Les substances psychoactives (nicotine et cocaïne) provoquent une élévation massive et non physiologique du taux de dopamine dans le noyau accumbens (220% à 350%) très supérieure à la stimulation naturelle par la nourriture (150%).\n2. Les drogues piratent le circuit de la récompense en libérant des quantités excessives de dopamine, créant une empreinte mnésique et un renforcement positif démesuré qui surpasse les stimuli naturels et asservit la volonté de l\'individu (addiction).\n3. (a) Sensibilisation et information précoce des jeunes en milieu scolaire sur les mécanismes de la dépendance et les risques neurobiologiques. (b) Pratique d\'activités sportives et encadrement psychosocial valorisant l\'estime de soi.'
    },
    examTraps: [
      'Confondre accoutumance/tolérance (besoin d\'augmenter les doses) et dépendance (impossibilité de s\'arrêter).',
      'Oublier de citer la dopamine et le circuit de la récompense (ATV et noyau accumbens).'
    ],
    quickMemo: 'Drogues = perturbation synaptique -> stimulation anormale du circuit de la récompense (ATV -> Noyau accumbens -> libération massive de Dopamine). Dépresseurs (alcool, morphine), Stimulants (cocaïne bloque recapture dopamine, nicotine), Perturbateurs (THC cannabis). Dépendance psychique + physique + Tolérance/accoutumance.',
    keywords: ['SVT Terminale D', 'drogues', 'toxicomanie', 'circuit de la récompense', 'dopamine', 'cocaïne', 'nicotine', 'sevrage', 'accoutumance', 'dépendance', 'aire tegmentale ventrale', 'noyau accumbens']
  }
];


