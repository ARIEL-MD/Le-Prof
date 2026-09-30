import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_PHYSIQUE_CHIMIE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 1 - MASSE ET POIDS D'UN CORPS
  // ========================================================
  {
    id: 'pc-3e-mecanique-masse-poids-pesanteur',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : Mécanique',
    lessonTitle: 'Masse et poids d\'un corps : Définition, relation P = m x g et masse volumique',
    objectifs: [
      'Distinguer nettement la masse (quantité de matière invariable, mesurée en kg par une balance) et le poids (force d\'attraction terrestre, mesurée en N par un dynamomètre)',
      'Définir et calculer la masse volumique a (ou rho = m / V) et la densité d d\'un corps solide ou liquide par rapport à l\'eau',
      'Établir et appliquer la relation fondamentale P = m x g reliant le poids à la masse',
      'Identifier la variation de l\'intensité de la pesanteur g selon le lieu (Abidjan 9,78 N/kg, Paris 9,81 N/kg, Lune 1,6 N/kg, Mars 3,6 N/kg)',
      'Déterminer graphiquement la valeur de l\'intensité de la pesanteur g à partir de la courbe d\'étalonnage P = f(m)'
    ],
    fullCourseContent: `1. La Masse d'un corps :
- Définition : La masse d'un corps est une grandeur physique intrinsèque représentant la quantité de matière contenue dans ce corps. Elle ne dépend ni du lieu, ni de l'altitude, ni de la température.
- Mesure et unités : Elle se mesure à l'aide d'une balance (balance Roberval, balance à plateaux, balance romaine ou balance électronique de précision).
  * Unité internationale : le kilogramme (kg).
  * Multiples : la tonne ($1\\text{ t} = 1\\,000\\text{ kg}$), le quintal ($1\\text{ q} = 100\\text{ kg}$).
  * Sous-multiples : le gramme ($1\\text{ g} = 10^{-3}\\text{ kg}$), le milligramme ($1\\text{ mg} = 10^{-6}\\text{ kg}$).

2. Masse volumique et Densité :
- Masse volumique ($a$ ou $\\rho$) : C'est la masse de l'unité de volume d'une substance donnée :
  $$a = \\frac{m}{V} \\quad \\Longleftrightarrow \\quad m = a \\times V \\quad \\Longleftrightarrow \\quad V = \\frac{m}{a}$$
  * Unité internationale : $\\text{kg/m}^3$.
  * Unités usuelles équivalentes : $1\\text{ g/cm}^3 = 1\\text{ kg/dm}^3 = 1\\text{ t/m}^3 = 1\\,000\\text{ kg/m}^3$.
  * Exemples : Eau pure = $1\\text{ g/cm}^3$ ($1\\,000\\text{ kg/m}^3$) ; Aluminium = $2{,}7\\text{ g/cm}^3$ ; Cuivre = $8{,}9\\text{ g/cm}^3$ ; Or = $19{,}3\\text{ g/cm}^3$ ; Bois léger = $0{,}6\\text{ g/cm}^3$.
- Densité ($d$) : Rapport sans unité de la masse volumique du corps à celle de l'eau pure :
  $$d = \\frac{a_{\\text{corps}}}{a_{\\text{eau}}}$$

3. Le Poids d'un corps :
- Définition : Le poids d'un corps est l'attraction gravitationnelle exercée par la Terre (ou un autre astre) sur ce corps. C'est une force à distance répartie notée $\\vec{P}$.
- Mesure et unité : Il se mesure à l'aide d'un dynamomètre (ou peson à ressort). Son unité internationale est le newton (N).

4. Relation fondamentale entre le Poids et la Masse ($P = m \\times g$) :
En mesurant le poids $P$ de diverses masses étalonnées $m$, le rapport $\\frac{P}{m}$ est constant pour un lieu donné :
  $$P = m \\times g \\quad \\Longleftrightarrow \\quad g = \\frac{P}{m} \\quad \\Longleftrightarrow \\quad m = \\frac{P}{g}$$
  * $P$ : poids en newtons (N).
  * $m$ : masse en kilogrammes (kg) (toujours convertir les grammes en kg !).
  * $g$ : intensité de la pesanteur du lieu en newtons par kilogramme (N/kg).

5. Variation de l'intensité de la pesanteur $g$ :
Contrairement à la masse qui reste invariante partout dans l'Univers, le poids dépend directement du lieu où s'effectue la mesure car $g$ varie avec la latitude et l'altitude :
- À Abidjan : $g \\approx 9{,}78\\text{ N/kg}$ (valeur officielle en Côte d'Ivoire, souvent arrondie à $10\\text{ N/kg}$ pour les calculs scolaires).
- À Paris : $g \\approx 9{,}81\\text{ N/kg}$.
- Au Pôle Nord : $g \\approx 9{,}83\\text{ N/kg}$.
- Sur la Lune : $g_{\\text{Lune}} \\approx 1{,}6\\text{ N/kg}$ (un astronaute de 60 kg y pèse $60 \\times 1{,}6 = 96\\text{ N}$ au lieu de $600\\text{ N}$ sur Terre : sensation de légèreté).
- Sur Mars : $g_{\\text{Mars}} \\approx 3{,}6\\text{ N/kg}$.

6. Exploitation graphique de la caractéristique $P = f(m)$ :
La courbe représentant le poids en fonction de la masse $P = f(m)$ est une droite passant par l'origine des axes.
Le coefficient directeur de cette droite correspond à l'intensité de la pesanteur $g$ :
$$g = \\frac{\\Delta P}{\\Delta m} = \\frac{P_2 - P_1}{m_2 - m_1}$$`,
    definitions: [
      {
        term: 'Masse',
        definition: 'Grandeur scalaire représentant la quantité de matière contenue dans un corps, invariable avec le lieu et mesurée en kg.'
      },
      {
        term: 'Poids',
        definition: 'Force d\'attraction gravitationnelle exercée par la Terre sur tout corps situé dans son voisinage, mesurée en newtons (N).'
      },
      {
        term: 'Intensité de la pesanteur (g)',
        definition: 'Coefficient de proportionnalité reliant le poids à la masse en un point donné de l\'espace, exprimé en N/kg.'
      },
      {
        term: 'Masse volumique',
        definition: 'Masse de la substance par unité de volume, exprimée en kg/m³ ou g/cm³.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariance de la masse vs variation du poids',
        statement: 'La masse d\'un corps ne change jamais d\'un endroit à un autre ; en revanche, son poids diminue quand l\'altitude augmente ou sur un astre de masse plus faible.',
        explanation: 'Un objet de 50 kg a une masse de 50 kg sur Terre comme sur la Lune, mais son poids passe de 500 N à 80 N.'
      },
      {
        name: 'Correction des emballages commerciaux',
        statement: 'La mention « Poids net : 250 g » sur les conserves est scientifiquement incorrecte ; il faut dire « Masse nette : 250 g » ou « Poids : 2,5 N ».',
        explanation: 'Le gramme est une unité de masse, alors que le poids s\'exprime en newtons.'
      }
    ],
    formulas: [
      {
        name: 'Relation fondamentale Poids-Masse',
        formula: 'P = m \\times g \\quad \\Longleftrightarrow \\quad m = \\frac{P}{g}',
        explanation: 'P en newtons (N), m en kilogrammes (kg), g en N/kg.'
      },
      {
        name: 'Masse volumique et densité',
        formula: 'a = \\frac{m}{V} ; \\quad d = \\frac{a}{a_{\\text{eau}}}',
        explanation: 'a_eau = 1 g/cm³ = 1000 kg/m³.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul du poids avec conversion obligatoire d\'unité',
        procedure: '1. Vérifier l\'unité de la masse. Si la masse est donnée en grammes ou en tonnes, la convertir obligatoirement en kilogrammes (diviser par 1000 pour les g). 2. Multiplier par l\'intensité de la pesanteur g. 3. Exprimer le résultat en newtons (N).',
        tip: 'Attention : m = 500 g = 0,5 kg ; avec g = 10 N/kg, P = 0,5 x 10 = 5 N (et non 5000 N !).'
      },
      {
        stepNumber: 2,
        title: 'Détermination de la nature d\'un métal par sa masse volumique',
        procedure: '1. Calculer le volume déplacé par immersion dans une éprouvette graduée : V = V2 - V1. 2. Peser la pièce pour obtenir m. 3. Calculer a = m / V. 4. Comparer le résultat aux valeurs du tableau de référence (Aluminium: 2,7 ; Cuivre: 8,9 ; Argent: 10,5 ; Or: 19,3).',
        tip: 'Si a = 2,7 g/cm³, il s\'agit d\'aluminium.'
      }
    ],
    examples: [
      {
        statement: 'Une élève trouve une bague métallique de poids P = 1,35 N dans un lieu où g = 10 N/kg. Immergée dans une éprouvette graduée, l\'eau passe de V1 = 110 cm³ à V2 = 160 cm³. La bague est-elle en argent (10,5 g/cm³) ?',
        solution: `1. Calcul de la masse : m = P / g = 1,35 / 10 = 0,135 kg = 135 g.
2. Calcul du volume : V = V2 - V1 = 160 - 110 = 50 cm³.
3. Masse volumique : a = m / V = 135 / 50 = 2,7 g/cm³.
4. Conclusion : 2,7 g/cm³ correspond à l'aluminium et non à l'argent (10,5 g/cm³). La bague est en aluminium.`
      }
    ],
    exercises: [
      {
        question: 'Un solide pèse 4 N sur un dynamomètre. Détermine sa masse m sachant que g = 10 N/kg.',
        correction: `m = P / g = 4 / 10 = 0,4 kg (soit 400 g).`
      },
      {
        question: 'Calcule le poids d\'un cosmonaute de masse m = 75 kg sur Terre (g = 9,8 N/kg) puis sur la Lune (g = 1,6 N/kg).',
        correction: `Sur Terre : P_Terre = 75 x 9,8 = 735 N.
Sur la Lune : P_Lune = 75 x 1,6 = 120 N.`
      }
    ],
    evaluationSituation: {
      context: 'Sur une boîte d\'engrais de cacao achetée à Bonon, l\'acheteur lit : « Poids : 50 kg ». Deux élèves discutent : l\'un affirme que l\'inscription est correcte, l\'autre soutient qu\'elle viole les règles de la physique.',
      instructions: [
        '1. Nomme l\'unité internationale légale du poids et celle de la masse.',
        '2. Explique pourquoi l\'inscription « Poids : 50 kg » est scientifiquement erronée.',
        '3. Propose les deux formulations scientifiquement rigoureuses à apposer sur le sac (avec g = 10 N/kg).'
      ],
      solutionGuide: '1. Unité du poids = le newton (N) ; unité de la masse = le kilogramme (kg). 2. L\'inscription est erronée car 50 kg quantifie une masse de matière mesurée avec une balance, et non une force de pesanteur. 3. Formulations correctes : « Masse nette : 50 kg » ou « Poids : 500 N » (P = 50 x 10 = 500 N).'
    },
    examTraps: [
      'Oublier de convertir la masse en kilogrammes avant d\'appliquer P = m x g.',
      'Confondre le dynamomètre (mesure les forces et poids en N) et la balance (mesure les masses en kg).',
      'Dire que le poids ne change jamais : c\'est la masse qui est invariable, le poids varie avec le lieu.'
    ],
    quickMemo: 'Masse m (kg, balance, invariable) | Poids P (N, dynamomètre, attraction de la Terre) | P = m x g | g_Abidjan = 9,78 N/kg | a = m / V (g/cm³ ou kg/m³) | d = a / a_eau.',
    keywords: ['masse', 'poids', 'intensité de la pesanteur', 'dynamomètre', 'balance', 'masse volumique', 'densité']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 2 - LES FORCES ET LA POUSSÉE D'ARCHIMÈDE
  // ========================================================
  {
    id: 'pc-3e-mecanique-forces-poussee-archimede',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : Mécanique',
    lessonTitle: 'Les forces et la poussée d\'Archimède dans les liquides',
    objectifs: [
      'Définir une force comme une action mécanique capable de mettre en mouvement, modifier la trajectoire, déformer ou participer à l\'équilibre d\'un corps',
      'Déterminer les 4 caractéristiques d\'une force (point d\'application, direction, sens, valeur en N)',
      'Classifier les forces : forces de contact (localisées comme la tension d\'un fil ou réparties comme la réaction d\'un support) vs forces à distance (le poids)',
      'Définir et mesurer la poussée d\'Archimède : différence entre poids réel et poids apparent (PA = P - P\')',
      'Calculer la poussée d\'Archimède à partir du poids du liquide déplacé : PA = a_liq x V_liq x g'
    ],
    fullCourseContent: `1. Notion de force et effets mécaniques :
Une force est toute action mécanique exercée par un corps (l'acteur) sur un autre corps (le receveur). Elle est capable de :
- Mettre un corps en mouvement ;
- Modifier la vitesse ou la trajectoire d'un corps en mouvement ;
- Déformer un corps (écrasement, allongement d'un ressort) ;
- Participer au maintien de l'équilibre d'un corps au repos.

2. Les 4 caractéristiques d'une force et sa représentation vectorielle :
Toute force est modélisée par un vecteur force noté $\\vec{F}$ caractérisé par :
  1. Le point d'application : Point précis où s'exerce l'action mécanique (ex : centre de gravité $G$ pour le poids, point d'attache pour un fil).
  2. La direction (droite d'action) : La droite selon laquelle la force agit (verticale, horizontale, inclinée d'un angle donné).
  3. Le sens : L'orientation de l'action (du bas vers le haut, de gauche à droite, etc.).
  4. La valeur (ou intensité) : Grandeur positive mesurée avec un dynamomètre et exprimée en newtons (N). Représentée à l'aide d'une échelle graphique (ex : $1\\text{ cm pour } 10\\text{ N}$).

3. Classification des forces :
- Forces de contact :
  * Localisées : Le contact s'effectue en un point quasi-ponctuel (ex : tension d'un fil $\\vec{T}$).
  * Réparties : Le contact s'étend sur toute une surface ou un volume (ex : réaction d'une table $\\vec{R}$, poussée d'Archimède $\\vec{P}_A$, forces de frottement $\\vec{f}$).
- Forces à distance (toujours réparties) : Agissent sans contact matériel (ex : le poids d'un corps $\\vec{P}$, la force d'attraction magnétique d'un aimant).

4. La Poussée d'Archimède dans les liquides :
- Définition : La poussée d'Archimède est la force verticale, dirigée du bas vers le haut, qu'un liquide exerce sur tout corps immergé en son sein.
- Mise en évidence expérimentale :
  * Un solide immergé dans l'eau semble plus léger qu'à l'air libre.
  * Poids réel $P$ : valeur indiquée par le dynamomètre lorsque le solide est suspendu dans l'air.
  * Poids apparent $P'$ : valeur indiquée par le dynamomètre lorsque le solide est totalement immergé dans le liquide.
  * La poussée d'Archimède $P_A$ est égale à la diminution apparente du poids :
    $$P_A = P - P'$$
- Théorème d'Archimède (Poids du liquide déplacé) :
  Tout corps plongé dans un liquide subit une poussée vers le haut égale au poids du volume de liquide qu'il déplace :
  $$P_A = m_{\\text{liquide déplacé}} \\times g = a_{\\text{liquide}} \\times V_{\\text{immergé}} \\times g$$
  * $a_{\\text{liquide}}$ : masse volumique du liquide en $\\text{kg/m}^3$ (pour l'eau : $1\\,000\\text{ kg/m}^3$ ou $1\\text{ g/cm}^3$).
  * $V_{\\text{immergé}}$ : volume de la partie immergée du solide en $\\text{m}^3$ ($1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$).
  * $g$ : intensité de la pesanteur en N/kg.

5. Caractéristiques du vecteur poussée d'Archimède $\\vec{P}_A$ :
- Point d'application : Le centre de poussée $C$ (centre de gravité du volume de liquide déplacé).
- Direction : La verticale du lieu.
- Sens : Du bas vers le haut (opposé au poids).
- Valeur : $P_A = P - P' = a_L \\times V_L \\times g$.`,
    definitions: [
      {
        term: 'Force',
        definition: 'Action mécanique exercée par un objet sur un autre, capable de modifier le mouvement, de déformer ou d\'équilibrer un corps.'
      },
      {
        term: 'Poussée d\'Archimède',
        definition: 'Force de poussée verticale vers le haut subie par tout corps immergé dans un fluide, égale au poids du fluide déplacé.'
      },
      {
        term: 'Poids apparent',
        definition: 'Valeur de la force résiduelle mesurée par un dynamomètre soutenant un corps complètement immergé dans un liquide.'
      },
      {
        term: 'Centre de poussée',
        definition: 'Point d\'application de la poussée d\'Archimède, correspondant au centre de gravité de la partie immergée du corps.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Égalité fondamentale d\'Archimède',
        statement: 'La poussée d\'Archimède ne dépend que du volume immergé et de la masse volumique du liquide, jamais de la profondeur d\'immersion ni de la masse du corps.',
        explanation: 'Une boule de plomb et une boule d\'aluminium de même volume subissent exactement la même poussée d\'Archimède dans l\'eau.'
      }
    ],
    formulas: [
      {
        name: 'Calcul de la poussée d\'Archimède',
        formula: 'P_A = P - P\' = m_L \\times g = a_L \\times V_L \\times g',
        explanation: 'P = poids réel dans l\'air, P\' = poids apparent dans le liquide, a_L = masse volumique du liquide.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Détermination expérimentale de la poussée d\'Archimède',
        procedure: '1. Suspendre le solide à un dynamomètre dans l\'air et relever P (poids réel). 2. Plonger le solide dans le récipient et relever P\' (poids apparent). 3. Soustraire P - P\' pour obtenir la valeur de PA.',
        tip: 'Vérifiez que le solide ne touche ni le fond ni les parois du récipient.'
      }
    ],
    examples: [
      {
        statement: 'Une boule métallique suspendue à un dynamomètre indique 2,8 N dans l\'air et 2,3 N lorsqu\'elle est totalement immergée dans de l\'eau pure. Calcule la poussée d\'Archimède et le volume de la boule (g = 10 N/kg).',
        solution: `1. Poussée d'Archimède : PA = P - P' = 2,8 - 2,3 = 0,5 N.
2. Volume déplacé : PA = a_eau x V x g
V = PA / (a_eau x g).
Avec a_eau = 1 g/cm³ = 1000 kg/m³ :
V = 0,5 / (1000 x 10) = 0,00005 m³ = 50 cm³.`
      }
    ],
    exercises: [
      {
        question: 'Un solide immergé dans l\'alcool subit une poussée d\'Archimède de 0,4 N. Quelle sera la poussée d\'Archimède sur ce même solide immergé dans l\'eau salée (a_alcool = 0,8 g/cm³, a_eau salée = 1,2 g/cm³) ?',
        correction: `Le volume immergé V est identique.
PA(alcool) = a_alcool x V x g => V x g = PA / a_alcool = 0,4 / 0,8 = 0,5.
PA(eau salée) = a_eau salée x V x g = 1,2 x 0,5 = 0,6 N.`
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un TP au lycée de Bodokro, des élèves suspendent un solide à un dynamomètre : dans l\'air il indique 1,5 N, et dans un liquide inconnu il indique 1,4 N. Le volume d\'eau déplacé dans l\'éprouvette est V = 12,5 cm³ (g = 10 N/kg).',
      instructions: [
        '1. Nomme les deux grandeurs indiquées par le dynamomètre.',
        '2. Calcule la valeur de la poussée d\'Archimède PA.',
        '3. Calcule la masse volumique du liquide et identifie sa nature parmi : eau (1 g/cm³), alcool (0,8 g/cm³), eau salée (1,2 g/cm³).'
      ],
      solutionGuide: '1. 1,5 N = poids réel P ; 1,4 N = poids apparent P\'. 2. PA = P - P\' = 1,5 - 1,4 = 0,1 N. 3. PA = a_L x V x g => a_L = PA / (V x g) = 0,1 / (12,5 x 10^-6 x 10) = 800 kg/m³ = 0,8 g/cm³. Le liquide est l\'alcool.'
    },
    examTraps: [
      'Oublier de convertir le volume en m³ lors de l\'utilisation de a_L en kg/m³.',
      'Croire que la poussée d\'Archimède s\'applique au centre de gravité du solide : elle s\'applique au centre de gravité du volume immergé (centre de poussée).'
    ],
    quickMemo: 'Force F (N) au dynamomètre | Poussée d\'Archimède : PA = P - P\' = a_L x V_immergé x g | Direction verticale, sens du bas vers le haut.',
    keywords: ['force', 'dynamomètre', 'poussée d\'Archimède', 'poids réel', 'poids apparent', 'centre de poussée']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 3 - ÉQUILIBRE ET FLOTTAISON
  // ========================================================
  {
    id: 'pc-3e-mecanique-equilibre-flottaison',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : Mécanique',
    lessonTitle: 'Équilibre d\'un solide soumis à deux forces et conditions de flottaison',
    objectifs: [
      'Énoncer les trois conditions d\'équilibre d\'un solide soumis à deux forces : même droite d\'action (colinéaires), sens opposés et même valeur (F1 = F2)',
      'Écrire la relation vectorielle d\'équilibre : F1 + F2 = 0 ou F1 = - F2',
      'Analyser l\'équilibre d\'un solide posé sur un plan horizontal (P + R = 0) ou suspendu à un fil (P + T = 0)',
      'Établir la condition d\'équilibre d\'un corps qui flotte : P = PA',
      'Expliquer la flottaison à partir de la comparaison des masses volumiques (corps flotte si a_corps < a_liquide ou d < 1)'
    ],
    fullCourseContent: `1. Conditions d'équilibre d'un solide soumis à deux forces :
Lorsqu'un solide est soumis à l'action de deux forces $\\vec{F}_1$ et $\\vec{F}_2$ et reste au repos (en équilibre statique) :
  1. Les deux forces ont la même droite d'action (elles sont portées par la même droite colinéaire).
  2. Les deux forces ont des sens directement opposés.
  3. Les deux forces ont la même intensité : $F_1 = F_2$.
- Traduction vectorielle :
  $$\\vec{F}_1 + \\vec{F}_2 = \\vec{0} \\quad \\Longleftrightarrow \\quad \\vec{F}_1 = -\\vec{F}_2$$

2. Exemples classiques d'équilibre :
A. SOLIDE POSÉ SUR UNE TABLE HORIZONTALE :
- Le solide est soumis à deux forces :
  * Son poids $\\vec{P}$ (vertical, vers le bas, appliqué en $G$).
  * La réaction de la table $\\vec{R}$ (verticale, vers le haut, appliquée au contact).
- À l'équilibre : $\\vec{P} + \\vec{R} = \\vec{0} \\implies R = P = m \\times g$.

B. SOLIDE SUSPENDU À UN FIL (OU AU RESSORT D'UN DYNAMOMÈTRE) :
- Le solide est soumis à deux forces :
  * Son poids $\\vec{P}$.
  * La tension du fil $\\vec{T}$.
- À l'équilibre : $\\vec{P} + \\vec{T} = \\vec{0} \\implies T = P = m \\times g$.

3. Conditions de flottaison d'un corps :
A. ÉQUILIBRE MECANIQUE DU CORPS FLOTTANT :
Un corps qui flotte à la surface d'un liquide est un solide en équilibre soumis à deux forces opposées :
- Son poids réel $\\vec{P}$ (vers le bas).
- La poussée d'Archimède $\\vec{P}_A$ exercée par le liquide sur la partie immergée (vers le haut).
À l'équilibre :
$$\\vec{P} + \\vec{P}_A = \\vec{0} \\quad \\Longleftrightarrow \\quad P = P_A$$

B. CRITÈRE DE FLOTTAISON LIÉ À LA MASSE VOLUMIQUE ET À LA DENSITÉ :
- Si la masse volumique du corps est inférieure à celle du liquide ($a_{\\text{corps}} < a_{\\text{liquide}}$, soit densité $d < 1$ pour l'eau) : Le corps flotte en laissant émerger une partie de son volume.
- Si $a_{\\text{corps}} = a_{\\text{liquide}}$ ($d = 1$) : Le corps reste en équilibre entre deux eaux (totalement immergé sans couler ni émerger).
- Si $a_{\\text{corps}} > a_{\\text{liquide}}$ ($d > 1$) : Le poids l'emporte sur la poussée d'Archimède maximale, le corps coule au fond du récipient.`,
    definitions: [
      {
        term: 'Équilibre mécanique',
        definition: 'État d\'un solide dont le centre de gravité reste immobile dans le repère d\'étude.'
      },
      {
        term: 'Condition de flottaison',
        definition: 'Égalité stricte entre le poids total du corps flottant et la poussée d\'Archimède développée par le volume immergé : P = PA.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des trois critères d\'équilibre',
        statement: 'Pour qu\'un solide sous deux forces soit en équilibre, il faut IMPÉRATIVEMENT : même droite d\'action, même valeur, et sens opposés.',
        explanation: 'Avoir la même intensité ne suffit pas si les forces ne sont pas sur la même droite (couple de forces créant une rotation).'
      }
    ],
    formulas: [
      {
        name: 'Relation vectorielle d\'équilibre',
        formula: '\\vec{F}_1 + \\vec{F}_2 = \\vec{0} \\quad \\Longleftrightarrow \\quad F_1 = F_2',
        explanation: 'Condition nécessaire et suffisante pour deux forces concourantes.'
      },
      {
        name: 'Flottaison',
        formula: 'P = P_A \\implies m_{\\text{corps}} \\times g = a_{\\text{liquide}} \\times V_{\\text{immergé}} \\times g',
        explanation: 'Permet de calculer le volume immergé d\'une pirogue ou d\'une caisse flottante.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Représentation graphique d\'un corps flottant en équilibre',
        procedure: '1. Calculer le poids P = m x g. 2. En déduire PA = P. 3. Choisir l\'échelle (ex : 1 cm pour 1 N). 4. Tracer le vecteur poids P partant du centre de gravité G vers le bas. 5. Tracer le vecteur poussée d\'Archimède PA de même longueur partant du centre de poussée C vers le haut sur la même droite d\'action.',
        tip: 'Les deux flèches doivent avoir exactement la même longueur millimétrée.'
      }
    ],
    examples: [
      {
        statement: 'Une caisse de masse m = 50 kg et de volume V = 100 dm³ est déposée sur l\'eau d\'une lagune. Flotte-t-elle ? Quelle est la valeur de la poussée d\'Archimède (g = 10 N/kg, a_eau = 1 kg/dm³) ?',
        solution: `1. Masse volumique de la caisse : a = m / V = 50 / 100 = 0,5 kg/dm³.
2. Comparaison : a_caisse (0,5 kg/dm³) < a_eau (1 kg/dm³). Sa densité d = 0,5 est inférieure à 1 : la caisse flotte.
3. Poussée d'Archimède : À l'équilibre de flottaison, PA = P = m x g = 50 x 10 = 500 N.`
      }
    ],
    exercises: [
      {
        question: 'Un jouet de volume V = 250 cm³ et de masse m = 200 g est plongé dans l\'eau. Explique scientifiquement pourquoi il flotte.',
        correction: `Masse volumique du plastique : a = m / V = 200 / 250 = 0,8 g/cm³.
La masse volumique de l'eau étant de 1 g/cm³, on a a_plastique < a_eau. Sa densité d = 0,8 étant inférieure à 1, la poussée d'Archimède équilibre son poids pour un volume immergé de 200 cm³ : le jouet flotte avec 50 cm³ émergés.`
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Municipal de Bonon, un solide S de masse m = 500 g est en équilibre sur une table horizontale rugueuse (g = 10 N/kg).',
      instructions: [
        '1. Nomme les deux forces appliquées au solide.',
        '2. Donne les 4 caractéristiques de chaque force.',
        '3. Représente les deux vecteurs à l\'échelle 1 cm pour 2 N.'
      ],
      solutionGuide: '1. Forces : Le poids P du solide et la réaction R de la table. 2. Poids : point d\'application G, direction verticale, sens vers le bas, valeur P = m x g = 0,5 x 10 = 5 N. Réaction R : point d\'application au contact table/solide, direction verticale, sens vers le haut, valeur R = P = 5 N. 3. Représentation : 5 N correspond à 5 / 2 = 2,5 cm. Les deux vecteurs ont pour longueur 2,5 cm en sens inverses.'
    },
    examTraps: [
      'Oublier de mentionner la même droite d\'action dans les conditions d\'équilibre.',
      'Croire qu\'un corps flotte parce que la poussée d\'Archimède est supérieure au poids : à l\'équilibre de flottaison, PA est STRICTEMENT ÉGALE au poids.'
    ],
    quickMemo: 'Équilibre sous 2 forces : même droite d\'action, même intensité (F1 = F2), sens opposés (F1 + F2 = 0) | Flottaison : P = PA (a_corps < a_liquide, d < 1).',
    keywords: ['équilibre', 'flottaison', 'réaction du support', 'tension du fil', 'colinéarité', 'densité']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 4 - TRAVAIL ET PUISSANCE MÉCANIQUES
  // ========================================================
  {
    id: 'pc-3e-mecanique-travail-puissance',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : Mécanique',
    lessonTitle: 'Travail mécanique et puissance d\'une force constante',
    objectifs: [
      'Définir le travail mécanique d\'une force colinéaire au déplacement et son unité légale le joule (J)',
      'Calculer le travail d\'une force constante : W = F x L et le travail du poids : W = P x h = m x g x h',
      'Distinguer le travail moteur (force motrice dans le sens du mouvement, W > 0) et le travail résistant (force opposée au mouvement, W < 0)',
      'Définir la puissance mécanique et calculer sa valeur en watts (W) : P = W / t et P = F x v',
      'Convertir les unités usuelles : le cheval-vapeur (1 ch = 736 W) et la vitesse (1 m/s = 3,6 km/h)'
    ],
    fullCourseContent: `1. Le Travail mécanique :
- Définition : Le travail d'une force constante colinéaire au déplacement est le produit de l'intensité de cette force ($F$) par la longueur ($L$) du déplacement de son point d'application :
  $$W = F \\times L$$
  * $W$ : travail mécanique exprimé en joules (symbole : J).
  * $F$ : intensité de la force en newtons (N).
  * $L$ : distance parcourue en mètres (m).
- Remarque : Le travail est une forme de transfert d'énergie. $1\\text{ J}$ est le travail produit par une force de $1\\text{ N}$ dont le point d'application se déplace de $1\\text{ m}$.

2. Travail moteur et Travail résistant :
- Travail moteur : La force agit dans le même sens que le déplacement. Elle favorise le mouvement (ex : le poids d'une mangue qui tombe d'un arbre, la force de traction d'un bœuf).
- Travail résistant : La force agit en sens opposé au déplacement. Elle s'oppose au mouvement et freine le corps (ex : les forces de frottement, le poids d'un seau d'eau que l'on remonte d'un puits).

3. Travail du poids d'un corps :
Lors d'un déplacement vertical d'une hauteur $h$ :
$$W(\\vec{P}) = P \\times h = m \\times g \\times h$$
- En descente : Le travail du poids est moteur ($W = +mgh$).
- En montée : Le travail du poids est résistant ($W = -mgh$).
- En déplacement horizontal : Le travail du poids est nul car le poids est perpendiculaire au déplacement ($W = 0$).

4. La Puissance mécanique :
- Définition : La puissance mécanique d'une force est le quotient du travail fourni par le temps ($t$) mis pour accomplir ce travail. Elle mesure la rapidité avec laquelle le travail est exécuté :
  $$\\mathcal{P} = \\frac{W}{t}$$
  * $\\mathcal{P}$ : puissance en watts (symbole : W).
  * $W$ : travail en joules (J).
  * $t$ : durée en secondes (s).
- Puissance en fonction de la vitesse :
  Si la vitesse $v$ est constante et colinéaire à la force :
  $$\\mathcal{P} = \\frac{F \\times L}{t} = F \\times \\left(\\frac{L}{t}\\right) = F \\times v$$
  ($\\mathcal{P}$ en W, $F$ en N, $v$ en m/s).
- Unité industrielle historique : le Cheval-Vapeur (ch) :
  $$1\\text{ ch} = 736\\text{ W}$$
  $$1\\text{ m/s} = 3{,}6\\text{ km/h}$$`,
    definitions: [
      {
        term: 'Travail mécanique',
        definition: 'Énergie transférée lorsqu\'une force déplace son point d\'application sur une distance L, mesurée en joules (J).'
      },
      {
        term: 'Puissance mécanique',
        definition: 'Quantité de travail fournie par unité de temps, mesurée en watts (W) : 1 W = 1 J/s.'
      },
      {
        term: 'Travail moteur',
        definition: 'Travail d\'une force agissant dans le même sens que le vecteur déplacement du corps.'
      },
      {
        term: 'Travail résistant',
        definition: 'Travail d\'une force agissant en sens opposé au vecteur déplacement du corps.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Indépendance du travail du poids vis-à-vis du chemin suivi',
        statement: 'Le travail du poids entre deux altitudes dépend uniquement de la dénivellation verticale h, jamais de la forme du trajet suivi (ligne droite ou zigzag).',
        explanation: 'W = m x g x h que l\'on monte par un escalier ou par une corde verticale.'
      }
    ],
    formulas: [
      {
        name: 'Formules du travail et de la puissance',
        formula: 'W = F \\times L ; \\quad W(\\vec{P}) = m \\times g \\times h ; \\quad \\mathcal{P} = \\frac{W}{t} = F \\times v',
        explanation: 'W en J, P en W, t en s, v en m/s (1 m/s = 3,6 km/h).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul de la puissance d\'un treuil ou d\'un moteur de puisage',
        procedure: '1. Calculer le poids de la charge : P = m x g. 2. Calculer le travail pour élever la charge d\'une hauteur h : W = P x h. 3. Diviser par le temps t en secondes : Puissance = W / t. 4. Si demandé, convertir en chevaux-vapeur en divisant par 736.',
        tip: 'Vérifiez bien que le temps est en secondes (1 minute = 60 s).'
      }
    ],
    examples: [
      {
        statement: 'Un élève monte un seau d\'eau de masse m = 5 kg d\'un puits profond de h = 8 m en une durée de t = 10 s (g = 10 N/kg). Calcule le travail du poids et la puissance développée.',
        solution: `1. Poids du seau : P = m x g = 5 x 10 = 50 N.
2. Travail du poids : W = P x h = 50 x 8 = 400 J (travail résistant car il s'oppose à la remontée).
3. Puissance développée par la force motrice : P = W / t = 400 / 10 = 40 W.`
      }
    ],
    exercises: [
      {
        question: 'Un véhicule roule à la vitesse de 72 km/h en développant une force motrice de 400 N. Calcule sa puissance en watts puis en chevaux-vapeur.',
        correction: `1. Conversion de la vitesse : v = 72 / 3,6 = 20 m/s.
2. Puissance : P = F x v = 400 x 20 = 8 000 W (soit 8 kW).
3. En chevaux-vapeur : P = 8000 / 736 = 10,87 ch.`
      }
    ],
    evaluationSituation: {
      context: 'Deux élèves poussent une voiture en panne sur une distance de 10 m en 1 minute. La force exercée par les élèves est F = 150 N et la force de frottement opposée est f = 10 N.',
      instructions: [
        '1. Précise la nature du travail de chacune des forces.',
        '2. Calcule le travail de la force de poussée WF et celui de la force de frottement Wf.',
        '3. Calcule la puissance mécanique utile fournie par les élèves.'
      ],
      solutionGuide: '1. La force F effectue un travail moteur (sens du mouvement) ; la force f effectue un travail résistant (sens opposé). 2. WF = F x L = 150 x 10 = 1 500 J ; Wf = f x L = 10 x 10 = 100 J. 3. Puissance : durée t = 1 min = 60 s ; P = WF / t = 1500 / 60 = 25 W.'
    },
    examTraps: [
      'Oublier de convertir le temps en secondes (laisser les minutes dans la formule donne une puissance fausse).',
      'Confondre la vitesse en km/h et en m/s dans la formule P = F x v.'
    ],
    quickMemo: 'Travail : W = F x L (Joule) | Poids : W = m x g x h | Puissance : P = W / t = F x v (Watt) | 1 ch = 736 W | 1 m/s = 3,6 km/h.',
    keywords: ['travail mécanique', 'joule', 'travail moteur', 'travail résistant', 'puissance mécanique', 'watt', 'cheval-vapeur']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 5 - ÉNERGIE MÉCANIQUE
  // ========================================================
  {
    id: 'pc-3e-mecanique-energie-mecanique-conservation',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 1 : Mécanique',
    lessonTitle: 'Énergie mécanique : Énergie cinétique, potentielle et conservation',
    objectifs: [
      'Définir l\'énergie cinétique Ec d\'un solide du fait de sa vitesse et appliquer Ec = 1/2 m v²',
      'Définir l\'énergie potentielle de pesanteur Ep du fait de son altitude et appliquer Ep = m g h',
      'Définir l\'énergie mécanique totale Em = Ec + Ep',
      'Expliquer le principe de conservation de l\'énergie mécanique en l\'absence de frottements (Em = constante)',
      'Décrire les transformations mutuelles entre énergie potentielle et cinétique (chute libre, pendule, glissement sur piste sans frottement)'
    ],
    fullCourseContent: `1. L'Énergie cinétique d'un solide ($E_c$) :
- Définition : L'énergie cinétique d'un solide de masse $m$ est l'énergie qu'il possède du fait de sa vitesse de déplacement $v$.
- Expression mathématique :
  $$E_c = \\frac{1}{2} m v^2$$
  * $E_c$ : énergie cinétique en joules (J).
  * $m$ : masse en kilogrammes (kg).
  * $v$ : vitesse en mètres par seconde (m/s).
- Relations déduites :
  $$v = \\sqrt{\\frac{2 E_c}{m}} \\quad \\text{et} \\quad m = \\frac{2 E_c}{v^2}$$

2. L'Énergie potentielle de pesanteur ($E_p$) :
- Définition : L'énergie potentielle de pesanteur d'un solide de masse $m$ est l'énergie qu'il emmagasine du fait de sa position en hauteur (altitude $h$) par rapport à un niveau de référence choisi (généralement le sol où $E_p = 0$).
- Expression mathématique :
  $$E_p = m \\times g \\times h$$
  * $E_p$ : énergie potentielle en joules (J).
  * $h$ : hauteur au-dessus du sol en mètres (m).
  * $g$ : intensité de la pesanteur en N/kg.
- Relations déduites :
  $$h = \\frac{E_p}{m \\times g} \\quad \\text{et} \\quad m = \\frac{E_p}{g \\times h}$$

3. L'Énergie mécanique ($E_m$) :
L'énergie mécanique d'un solide est la somme de son énergie cinétique et de son énergie potentielle de pesanteur :
$$E_m = E_c + E_p = \\frac{1}{2} m v^2 + m g h$$

4. Principe de Conservation et Transformations mutuelles de l'énergie :
- En l'absence de frottements (frottements négligeables) :
  L'énergie mécanique totale du système se conserve intégralement au cours du mouvement :
  $$E_m = E_c + E_p = \\text{Constante}$$
  * Lors d'une descente (ou d'une chute) : La hauteur $h$ diminue, donc l'énergie potentielle $E_p$ diminue. La vitesse $v$ augmente, donc l'énergie cinétique $E_c$ augmente. L'énergie potentielle se transforme intégralement en énergie cinétique ($E_p \\to E_c$).
  * Lors d'une montée (ou d'un lancer vertical) : La vitesse diminue et la hauteur augmente : l'énergie cinétique se transforme en énergie potentielle ($E_c \\to E_p$).
  * Au point le plus haut ($h = h_{\\max}$, $v = 0$) : $E_c = 0$ et $E_m = E_{p\\max} = m g h_{\\max}$.
  * Au niveau du sol ($h = 0$, $v = v_{\\max}$) : $E_p = 0$ et $E_m = E_{c\\max} = \\frac{1}{2} m v_{\\max}^2$.
  * Par conservation : $\\frac{1}{2} m v_{\\max}^2 = m g h_{\\max} \\implies v_{\\max} = \\sqrt{2 g h_{\\max}}$.
- En présence de frottements :
  L'énergie mécanique ne se conserve pas : une partie de l'énergie mécanique est dissipée sous forme de chaleur (énergie thermique).`,
    definitions: [
      {
        term: 'Énergie cinétique',
        definition: 'Énergie liée à la vitesse d\'un corps en mouvement, proportionnelle au carré de la vitesse : Ec = 1/2 m v².'
      },
      {
        term: 'Énergie potentielle de pesanteur',
        definition: 'Énergie de réserve liée à l\'altitude d\'un corps dans le champ de gravité terrestre : Ep = m g h.'
      },
      {
        term: 'Conservation de l\'énergie mécanique',
        definition: 'Principe physique stipulant que la somme Ec + Ep demeure constante en l\'absence de forces non conservatives (frottements).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Vitesse au carré dans l\'énergie cinétique',
        statement: 'Si la vitesse d\'un véhicule double, son énergie cinétique est multipliée par 4 ; si elle triple, l\'énergie cinétique est multipliée par 9.',
        explanation: 'Explique pourquoi la violence des chocs et la distance de freinage augmentent considérablement avec la vitesse lors des accidents.'
      }
    ],
    formulas: [
      {
        name: 'Formules d\'énergie mécanique',
        formula: 'E_c = \\frac{1}{2} m v^2 ; \\quad E_p = m g h ; \\quad E_m = E_c + E_p = \\text{cste} \\implies v = \\sqrt{2 g h}',
        explanation: 'm en kg, v en m/s, h en m, Ec, Ep, Em en joules (J).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul de la vitesse d\'impact au sol sans frottement',
        procedure: '1. Calculer l\'énergie mécanique au départ en haut (sans vitesse) : Em = Ep = m x g x h. 2. Écrire la conservation de l\'énergie mécanique au sol (Ep = 0) : Em = Ec = 1/2 m v². 3. Isoler la vitesse : v = racine(2 x Em / m) = racine(2 x g x h).',
        tip: 'Remarquez que la vitesse d\'impact ne dépend pas de la masse de l\'objet !'
      }
    ],
    examples: [
      {
        statement: 'Une roche de masse m = 125 kg est lâchée sans vitesse initiale du haut d\'une pente de hauteur h = 5 m sans frottement (g = 10 N/kg). Calcule son énergie mécanique et sa vitesse au bas de la piste.',
        solution: `1. En haut (point A) : vA = 0 => Ec(A) = 0.
Ep(A) = m x g x h = 125 x 10 x 5 = 6 250 J.
Em(A) = Ec(A) + Ep(A) = 6 250 J.
2. En bas (point B) : hB = 0 => Ep(B) = 0.
Sans frottement, Em(B) = Em(A) = 6 250 J.
Ec(B) = 1/2 m vB² = 6 250 J
vB² = (2 x 6 250) / 125 = 100 => vB = 10 m/s.`
      }
    ],
    exercises: [
      {
        question: 'Un projectile de masse m = 0,42 kg est lancé depuis le sol à la vitesse v = 8 m/s vers le haut. Quelle est la hauteur maximale atteinte s\'il n\'y a pas de frottement (g = 10 N/kg) ?',
        correction: `1. Au sol : Ep = 0 ; Ec = 1/2 m v² = 0,5 x 0,42 x 8² = 13,44 J => Em = 13,44 J.
2. À la hauteur maximale hmax : la vitesse s'annule (Ec = 0) => Em = Ep = m x g x hmax.
13,44 = 0,42 x 10 x hmax => hmax = 13,44 / 4,2 = 3,2 m.`
      }
    ],
    evaluationSituation: {
      context: 'Une voiture de 4 tonnes tombe en panne au sommet d\'une côte de hauteur h = 5 m. Le conducteur desserre le frein à main pour descendre en roue libre vers une station située au bas de la pente. Les frottements sont considérés nuls (g = 10 N/kg).',
      instructions: [
        '1. Précise la forme d\'énergie au sommet de la côte et au bas de la côte.',
        '2. Calcule l\'énergie mécanique au sommet de la côte.',
        '3. Détermine la vitesse du véhicule à son arrivée à la station.',
        '4. Explique pourquoi le conducteur doit ralentir sur autoroute pour économiser du carburant.'
      ],
      solutionGuide: '1. Au sommet : énergie potentielle de pesanteur. Au bas : énergie cinétique. 2. Masse m = 4 t = 4 000 kg ; Em = Ep = m x g x h = 4000 x 10 x 5 = 200 000 J. 3. Sans frottement : Ec = Em = 200 000 J => v = racine(2 x Ec / m) = racine(400 000 / 4 000) = 10 m/s (soit 36 km/h). 4. Les frottements de l\'air augmentent très vite avec la vitesse ; réduire sa vitesse limite l\'énergie perdue à lutter contre la résistance de l\'air.'
    },
    examTraps: [
      'Oublier le carré de la vitesse dans Ec = 1/2 m v².',
      'Oublier d\'extraire la racine carrée pour trouver v = racine(2 Ec / m).',
      'Confondre hauteur en cm et en mètres.'
    ],
    quickMemo: 'Ec = 1/2 m v² | Ep = m g h | Em = Ec + Ep | Sans frottement : Em = cste (Ep se transforme en Ec à la descente) | v = racine(2 g h).',
    keywords: ['énergie cinétique', 'énergie potentielle', 'énergie mécanique', 'conservation de l\'énergie', 'vitesse', 'hauteur']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 6 - LES LENTILLES MINCES
  // ========================================================
  {
    id: 'pc-3e-optique-lentilles-minces',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 2 : Optique',
    lessonTitle: 'Les lentilles minces : Foyers, vergence, construction d\'images et grandissement',
    objectifs: [
      'Distinguer les lentilles convergentes (bords minces, bombées au centre, effet loupe) et divergentes (bords épais, creusées au centre)',
      'Identifier les éléments caractéristiques d\'une lentille : centre optique O, axe optique, foyer image F\', foyer objet F, et distance focale f = OF = OF\'',
      'Définir et calculer la vergence C d\'une lentille en dioptries (delta) : C = 1 / f (C > 0 pour convergente, C < 0 pour divergente)',
      'Calculer la vergence de deux lentilles minces accolées : C = C1 + C2',
      'Construire géométriquement l\'image d\'un objet à travers une lentille convergente à l\'aide des 3 rayons particuliers et calculer le grandissement G = A\'B\' / AB',
      'Décrire le fonctionnement simplifié de l\'appareil photographique'
    ],
    fullCourseContent: `1. Description et Classification des lentilles minces :
Une lentille est un milieu transparent et homogène limité par deux surfaces sphériques ou une surface sphérique et une surface plane.
- Lentilles convergentes : Bords minces, centre épais. Elles font converger un faisceau incident de rayons parallèles vers un point fixe. Elles ont un effet grossissant (loupe). Symbole : segment terminé par deux flèches orientées vers l'extérieur.
- Lentilles divergentes : Bords épais, centre mince. Elles font diverger un faisceau de rayons parallèles. Symbole : segment terminé par deux flèches inversées orientées vers l'intérieur.

2. Éléments géométriques remarquables :
- Axe optique principal : Axe de symétrie perpendiculaire au plan de la lentille.
- Centre optique ($O$) : Point d'intersection de l'axe optique et du plan de la lentille. Tout rayon lumineux passant par $O$ traverse la lentille sans déviation.
- Foyer image ($F'$) : Point situé sur l'axe optique où convergent tous les rayons émergents issus d'un faisceau incident parallèle à l'axe optique (ex : point où se forme l'image nette et brûlante du Soleil).
- Foyer objet ($F$) : Point symétrique du foyer image par rapport au centre optique : $OF = OF'$.
- Distance focale ($f$) : Distance séparant le centre optique du foyer image :
  $$f = OF' = OF$$
  (Exprimée en mètres dans le système international).

3. La Vergence d'une lentille ($C$) :
- Définition : La vergence d'une lentille mesure son aptitude à faire converger les rayons lumineux. Elle est égale à l'inverse de la distance focale exprimée en mètres :
  $$C = \\frac{1}{f} \\quad \\Longleftrightarrow \\quad f = \\frac{1}{C}$$
  * $C$ : vergence exprimée en dioptries (symbole : $\\delta$).
  * $f$ : distance focale obligatoirement en mètres (m) ($1\\text{ cm} = 0{,}01\\text{ m}$).
- Signe :
  * Pour une lentille convergente : $C > 0$ ($f > 0$).
  * Pour une lentille divergente : $C < 0$ ($f < 0$).
- Lentilles accolées :
  La vergence de l'ensemble de deux lentilles minces accolées est la somme algébrique de leurs vergences :
  $$C = C_1 + C_2$$

4. Formation et Construction géométrique des images (Lentille convergente) :
L'image d'un objet réel $AB$ perpendiculaire à l'axe optique (avec $A$ sur l'axe) est une image nette et renversée notée $A'B'$.
On utilise deux ou trois rayons lumineux particuliers issus de l'extrémité $B$ :
  1. Rayon 1 : Passe par le centre optique $O$ -> Il émerge sans subir aucune déviation.
  2. Rayon 2 : Parallèle à l'axe optique -> Il émerge en passant par le foyer image $F'$.
  3. Rayon 3 : Passe par le foyer objet $F$ -> Il émerge parallèlement à l'axe optique.
Le point d'intersection de ces rayons émergents définit l'image $B'$. En projetant perpendiculairement $B'$ sur l'axe optique, on obtient $A'$.

5. Grandissement d'une lentille ($G$) :
Le grandissement mesure le rapport entre la taille de l'image et celle de l'objet :
$$G = \\frac{A'B'}{AB} = \\frac{OA'}{OA}$$
(Grandeur sans unité. Si $G > 1$, l'image est plus grande que l'objet ; si $G < 1$, elle est plus petite).

6. Principe de l'appareil photographique :
L'appareil photo est constitué d'un boîtier étanche à la lumière comprenant :
- L'objectif : Système optique jouant le rôle de lentille convergente.
- Le diaphragme : Règle la quantité de lumière admise (comme l'iris de l'œil).
- L'obturateur : Règle le temps de pose.
- La pellicule (ou capteur numérique) : Joue le rôle d'écran où se forme l'image réelle, renversée et réduite de l'objet photographié.`,
    definitions: [
      {
        term: 'Lentille convergente',
        definition: 'Lentille à bords minces qui rassemble en un point foyer un faisceau de rayons lumineux parallèles.'
      },
      {
        term: 'Vergence (C)',
        definition: 'Grandeur optique égale à l\'inverse de la distance focale (C = 1/f), exprimée en dioptries (δ).'
      },
      {
        term: 'Dioptrie (δ)',
        definition: 'Unité légale de vergence d\'un système optique dont la distance focale est de 1 mètre.'
      },
      {
        term: 'Grandissement (G)',
        definition: 'Rapport sans unité entre la dimension de l\'image et la dimension de l\'objet : G = A\'B\' / AB.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Marche des rayons lumineux remarquables',
        statement: '1) Rayon par O : pas dévié. 2) Rayon parallèle à l\'axe : passe par F\'. 3) Rayon par F : sort parallèle.',
        explanation: 'Deux rayons suffisent toujours pour construire l\'image exacte d\'un point lumineux.'
      }
    ],
    formulas: [
      {
        name: 'Formules des lentilles',
        formula: 'C = \\frac{1}{f} ; \\quad G = \\frac{A\'B\'}{AB} = \\frac{OA\'}{OA} ; \\quad C_{\\text{totale}} = C_1 + C_2',
        explanation: 'f en mètres (m), C en dioptries (δ), G sans unité.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul de la vergence à partir de la distance focale',
        procedure: '1. Relever la distance focale f. 2. La convertir impérativement en mètres (ex : f = 20 cm = 0,20 m). 3. Calculer C = 1 / f. 4. Écrire le résultat suivi du symbole dioptrie δ.',
        tip: 'Si f = 8 cm = 0,08 m, alors C = 1 / 0,08 = 12,5 δ.'
      }
    ],
    examples: [
      {
        statement: 'Une lentille a une distance focale f = 25 cm. Calcule sa vergence. On lui accole une seconde lentille de vergence C2 = -1 δ. Quelle est la vergence du doublet ?',
        solution: `1. Conversion : f = 25 cm = 0,25 m.
Vergence C1 = 1 / 0,25 = 4 δ.
2. Vergence totale : C = C1 + C2 = 4 + (-1) = 3 δ.`
      }
    ],
    exercises: [
      {
        question: 'Un objet lumineux AB de 2 cm est placé devant une lentille. Son image nette A\'B\' mesure 3 cm sur un écran. Calcule le grandissement G.',
        correction: `G = A\'B\' / AB = 3 / 2 = 1,5 (l\'image est 1,5 fois plus grande que l\'objet).`
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée de Toupah, les élèves disposent d\'une lentille convergente de distance focale f = 8 cm. Ils placent un objet lumineux de hauteur AB = 12 cm à une distance de 14 cm de la lentille.',
      instructions: [
        '1. Calcule la vergence C de cette lentille.',
        '2. Énonce la règle des 3 rayons particuliers permettant de tracer l\'image.',
        '3. Détermine le grandissement si la taille de l\'image mesurée sur l\'écran est de 16 cm.'
      ],
      solutionGuide: '1. f = 8 cm = 0,08 m => C = 1 / 0,08 = 12,5 δ. 2. Rayon passant par O émerge sans déviation ; rayon parallèle à l\'axe émerge en passant par F\' ; rayon passant par F émerge parallèlement à l\'axe optique. 3. G = A\'B\' / AB = 16 / 12 = 1,33.'
    },
    examTraps: [
      'Oublier de convertir les centimètres en mètres pour calculer la vergence : C = 1 / 20 cm donnerait un résultat faux d\'un facteur 100 !',
      'Confondre le foyer objet F (à gauche) et le foyer image F\' (à droite pour une lentille convergente recevant la lumière de gauche).'
    ],
    quickMemo: 'Convergente : bords minces, C > 0 | Divergente : bords épais, C < 0 | C = 1 / f (f en mètres, C en δ) | Rayons : par O non dévié, parallèle sort par F\', par F sort parallèle | G = A\'B\' / AB.',
    keywords: ['lentille convergente', 'lentille divergente', 'vergence', 'distance focale', 'dioptrie', 'foyer image', 'grandissement', 'appareil photo']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 7 - LES DÉFAUTS DE L'ŒIL ET LEURS CORRECTIONS
  // ========================================================
  {
    id: 'pc-3e-optique-defauts-oeil-corrections',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 2 : Optique',
    lessonTitle: 'Les défauts de l\'œil humain (Myopie, Hypermétropie) et leurs corrections optiques',
    objectifs: [
      'Modéliser l\'œil humain par un système optique simple : cristallin = lentille convergente, rétine = écran',
      'Décrire le fonctionnement de l\'œil normal (emmétrope) où l\'image nette se forme exactement sur la rétine',
      'Caractériser la myopie : œil trop convergent, image formée en avant de la rétine, vision floue de loin, correction par lentille divergente',
      'Caractériser l\'hypermétropie : œil pas assez convergent, image formée en arrière de la rétine, vision floue de près, correction par lentille convergente',
      'Construire les schémas optiques comparés de l\'œil normal, myope, hypermétrope et de leurs corrections'
    ],
    fullCourseContent: `1. Description optique simplifiée de l'œil humain :
L'œil est un récepteur de lumière complexe comparable à un appareil photographique :
- Le cristallin : Milieu transparent, souple et biconvexe. Il se comporte comme une lentille convergente à distance focale variable grâce aux muscles ciliaires (accommodation).
- L'iris et la pupille : L'iris est un diaphragme circulaire coloré percé d'un orifice central (la pupille) qui s'ouvre ou se rétrécit pour réguler le flux lumineux pénétrant dans l'œil.
- La rétine : Membrane sensible tapissant le fond du globe oculaire, riche en photorécepteurs. Elle joue le rôle d'écran sur lequel se projette l'image inversée des objets. Les influx nerveux sont ensuite transmis au cerveau par le nerf optique.

2. L'Œil normal ou Œil emmétrope :
- Fonctionnement : Au repos, pour observer un objet éloigné, les rayons parallèles issus de l'objet convergent exactement sur la rétine. L'image perçue est nette.
- Le punctum remotum ($PR$) est situé à l'infini (vision nette sans fatigue). Le punctum proximum ($PP$, point le plus proche vu net en accommodant) est à environ $25\\text{ cm}$.

3. La Myopie :
- Anomalie : L'œil myope est "trop long" ou son cristallin est "trop convergent".
- Conséquence : Pour un objet éloigné, les rayons lumineux convergent trop tôt. L'image se forme EN AVANT de la rétine. Sur la rétine, l'image est floue et étalée.
- Symptômes : La personne myope voit mal de loin, mais elle voit très bien de près (elle rapproche son livre ou son cahier de ses yeux).
- Correction optique : On doit diminuer la convergence excessive de l'œil. On place devant l'œil une lentille divergente (verres concaves de vergence négative $C < 0$). Les rayons sont écartés avant d'atteindre le cristallin, reculant ainsi l'image exactement sur la rétine.

4. L'Hypermétropie :
- Anomalie : L'œil hypermétrope est "trop court" ou son cristallin "n'est pas assez convergent".
- Conséquence : Pour un objet rapproché, les rayons ne convergent pas assez vite. L'image se forme EN ARRIÈRE de la rétine.
- Symptômes : La personne hypermétrope voit mal de près (elle doit éloigner son livre pour pouvoir lire), mais elle voit généralement bien de loin.
- Correction optique : On doit augmenter la convergence insuffisante de l'œil. On place devant l'œil une lentille convergente (verres convexes de vergence positive $C > 0$). Les rayons sont pré-convergés, avançant ainsi l'image nette directement sur la rétine.`,
    definitions: [
      {
        term: 'Œil emmétrope',
        definition: 'Œil optiquement normal dont le cristallin forme spontanément l\'image d\'un objet éloigné sur la rétine.'
      },
      {
        term: 'Myopie',
        definition: 'Défaut visuel où l\'œil est trop convergent, formant l\'image d\'un objet distant en avant de la rétine.'
      },
      {
        term: 'Hypermétropie',
        definition: 'Défaut visuel où l\'œil n\'est pas assez convergent, formant l\'image d\'un objet rapproché en arrière de la rétine.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de correction des amétropies',
        statement: 'Œil trop convergent (myopie) se corrige par une lentille divergente ; œil pas assez convergent (hypermétropie) se corrige par une lentille convergente.',
        explanation: 'Principe d\'addition des vergences : pour réduire C on ajoute une vergence négative, pour augmenter C on ajoute une vergence positive.'
      }
    ],
    formulas: [
      {
        name: 'Position de l\'image selon le défaut',
        formula: '\\text{Normal : Image sur la rétine} ; \\quad \\text{Myope : Image avant la rétine} ; \\quad \\text{Hypermétrope : Image après la rétine}',
        explanation: 'Critère géométrique infaillible pour reconnaître les anomalies sur les schémas d\'examen.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Diagnostic d\'un défaut à partir d\'un schéma optique',
        procedure: '1. Repérer le cristallin (lentille) et la rétine (écran vertical arrière). 2. Observer le point de croisement des rayons émergents : s\'il est sur la rétine -> œil normal ; s\'il est entre le cristallin et la rétine -> œil myope ; s\'il est derrière la rétine -> œil hypermétrope.',
        tip: 'Vérifiez toujours la nature de la lentille dessinée devant l\'œil pour voir si le défaut a été corrigé.'
      }
    ],
    examples: [
      {
        statement: 'Pour lire son cours au tableau d\'affichage, Agnimel doit reculer à plusieurs mètres, tandis qu\'Essoh doit coller son visage à la feuille. Identifie le défaut de chacun et la lentille correctrice.',
        solution: `1. Agnimel voit mal de près et doit s'éloigner : son œil n'est pas assez convergent, il est hypermétrope. Il doit porter des verres correcteurs convergents.
2. Essoh doit se rapprocher très près car il voit mal de loin : son œil est trop convergent, il est myope. Il doit porter des verres correcteurs divergents.`
      }
    ],
    exercises: [
      {
        question: 'Vrai ou Faux : 1) La rétine joue le rôle de lentille convergente. 2) Un œil myope se corrige par une lentille divergente. 3) Chez l\'hypermétrope, l\'image se forme avant la rétine.',
        correction: `1) Faux (la rétine joue le rôle d'écran, c'est le cristallin qui est la lentille convergente).
2) Vrai (la lentille divergente diminue la convergence excessive).
3) Faux (l'image se forme APRÈS la rétine car l'œil n'est pas assez convergent).`
      }
    ],
    evaluationSituation: {
      context: 'Lors de la visite médicale scolaire au Lycée Moderne II de Bondoukou, l\'ophtalmologiste prescrit à Kouadio des verres de vergence C = -2,5 δ et à Bamba des verres de C = +3 δ.',
      instructions: [
        '1. Déduis le défaut visuel de Kouadio et celui de Bamba.',
        '2. Explique le principe de fonctionnement et la position de l\'image pour chacun sans lunettes.',
        '3. Justifie le signe de la vergence prescrite pour chacun.'
      ],
      solutionGuide: '1. Kouadio a une vergence négative (lentille divergente) : il est myope. Bamba a une vergence positive (lentille convergente) : il est hypermétrope. 2. Sans lunettes : chez Kouadio (myope), le cristallin trop convergent forme l\'image des objets éloignés en avant de la rétine (vision floue de loin) ; chez Bamba (hypermétrope), le cristallin pas assez convergent forme l\'image des objets rapprochés en arrière de la rétine (vision floue de près). 3. La vergence négative de Kouadio réduit la convergence excessive pour reculer l\'image sur la rétine ; la vergence positive de Bamba compense le déficit de convergence pour avancer l\'image sur la rétine.'
    },
    examTraps: [
      'Inverser les corrections : prescrire du convergent pour le myope aggraverait sa myopie !',
      'Confondre cristallin (lentille) et rétine (écran).'
    ],
    quickMemo: 'Œil = Cristallin (lentille) + Rétine (écran) | Myope = Trop convergent, image AVANT la rétine -> corrigé par DIVERGENTE (C < 0) | Hypermétrope = Pas assez convergent, image APRÈS la rétine -> corrigé par CONVERGENTE (C > 0).',
    keywords: ['œil emmétrope', 'myopie', 'hypermétropie', 'cristallin', 'rétine', 'lentille divergente', 'lentille convergente', 'dioptrie']
  },

  // ========================================================
  // 3ÈME - PHYSIQUE : LEÇON 8 - LE CONDUCTEUR OHMIQUE ET LA LOI D'OHM
  // ========================================================
  {
    id: 'pc-3e-electricite-conducteur-ohmique-loi-ohm',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 3 : Électricité',
    lessonTitle: 'Le conducteur ohmique : Loi d\'Ohm, code des couleurs, associations et diviseur de tension',
    objectifs: [
      'Identifier le conducteur ohmique comme un dipôle passif dont le rôle est de diminuer l\'intensité du courant',
      'Énoncer et appliquer la loi d\'Ohm pour un conducteur ohmique : U = R x I',
      'Tracer et exploiter la caractéristique U = f(I) pour déterminer graphiquement la résistance R = delta U / delta I',
      'Déterminer la résistance d\'un résistor à l\'aide du code des couleurs et de la règle mnémotechnique',
      'Calculer la résistance équivalente d\'associations en série (Req = R1 + R2) et en dérivation/parallèle (Req = R1.R2 / (R1 + R2))',
      'Comprendre et appliquer le montage diviseur de tension : Us = [R2 / (R1 + R2)] x Ue'
    ],
    fullCourseContent: `1. Définition et Rôle du conducteur ohmique (résistor) :
- Définition : Un conducteur ohmique est un composant électronique passif à deux bornes (dipôle non polarisé). Il se présente sous forme d'un petit cylindre portant des anneaux colorés.
- Rôle : Inséré dans un circuit électrique, il s'oppose au passage des électrons et diminue l'intensité du courant électrique, protégeant ainsi les récepteurs sensibles.
- Symbole normalisé : Un rectangle traversé par la ligne de connexion.
- Grandeur caractéristique : La résistance électrique notée $R$. Son unité légale internationale est l'ohm (symbole : $\\Omega$). Multiples : kilo-ohm ($1\\text{ k}\\Omega = 1\\,000\\text{ }\\Omega$), méga-ohm ($1\\text{ M}\\Omega = 10^6\\text{ }\\Omega$).

2. La Loi d'Ohm :
La tension $U$ aux bornes d'un conducteur ohmique est proportionnelle à l'intensité $I$ du courant qui le traverse :
$$U = R \\times I \\quad \\Longleftrightarrow \\quad R = \\frac{U}{I} \\quad \\Longleftrightarrow \\quad I = \\frac{U}{R}$$
* $U$ : tension électrique en volts (V).
* $I$ : intensité du courant en ampères (A) (convertir les mA en A : $1\\text{ mA} = 0{,}001\\text{ A}$).
* $R$ : résistance électrique en ohms ($\\Omega$).
- Puissance électrique dissipée par effet Joule :
  $$P = U \\times I = R \\times I^2 = \\frac{U^2}{R} \\quad (\\text{en Watts, W})$$

3. Méthodes de détermination de la résistance $R$ :
A. MÉTHODE GRAPHIQUE (Caractéristique $U = f(I)$) :
En mesurant la tension $U$ pour différentes intensités $I$, la courbe obtenue est une droite passant par l'origine. Le coefficient directeur de la droite donne la valeur de $R$ :
$$R = \\frac{\\Delta U}{\\Delta I} = \\frac{U_2 - U_1}{I_2 - I_1}$$

B. MESURE DIRECTE À L'OHMMÈTRE :
L'ohmmètre (ou multimètre en position $\\Omega$) se branche directement aux bornes du conducteur ohmique isolé HORS TENSION.

C. LECTURE PAR LE CODE DES COULEURS DES ANNEAUX :
Pour un résistor à 4 anneaux :
- Anneau 1 : 1er chiffre significatif ($a$)
- Anneau 2 : 2e chiffre significatif ($b$)
- Anneau 3 : Multiplicateur ($10^c$, nombre de zéros)
- Anneau 4 : Tolérance de précision (or = 5%, argent = 10%)
$$R = (a \\times 10 + b) \\times 10^c\\text{ }\\Omega$$
- Règle mnémotechnique ivoirienne officielle :
  « **N**e (Noir=0) **M**anger (Marron=1) **R**ien (Rouge=2) **O**u (Orange=3) **J**eûner (Jaune=4), **V**oilà (Vert=5) **B**ien (Bleu=6) **V**otre (Violet=7) **G**rosse (Gris=8) **B**êtise (Blanc=9) »

4. Association de conducteurs ohmiques :
A. EN SÉRIE :
Les résistors se suivent sur la même branche. La résistance équivalente est égale à la somme des résistances :
$$R_{\\text{éq}} = R_1 + R_2$$
($R_{\\text{éq}}$ est toujours supérieure à la plus grande des résistances).

B. EN PARALLÈLE (DÉRIVATION) :
Les résistors partagent les deux mêmes nœuds de dérivation :
$$\\frac{1}{R_{\\text{éq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\quad \\Longleftrightarrow \\quad R_{\\text{éq}} = \\frac{R_1 \\times R_2}{R_1 + R_2}$$
($R_{\\text{éq}}$ est toujours inférieure à la plus petite des résistances).

5. Le Montage Diviseur de Tension :
En branchant deux résistances $R_1$ et $R_2$ en série sous une tension d'entrée $U_e$, la tension de sortie $U_s$ prélevée aux bornes de $R_2$ est une fraction réglée de la tension d'entrée :
$$U_s = R_2 \\times I = R_2 \\times \\left(\\frac{U_e}{R_1 + R_2}\\right) = \\frac{R_2}{R_1 + R_2} \\times U_e$$
Ce montage permet d'alimenter un appareil sous une tension inférieure sans surchauffe.`,
    definitions: [
      {
        term: 'Conducteur ohmique',
        definition: 'Dipôle passif linéaire dissipant de l\'énergie thermique par effet Joule et caractérisé par sa résistance R.'
      },
      {
        term: 'Loi d\'Ohm',
        definition: 'Loi physique établissant que la tension U aux bornes d\'un résistor est strictement proportionnelle à l\'intensité I : U = R.I.'
      },
      {
        term: 'Diviseur de tension',
        definition: 'Montage en série de deux résistances permettant d\'abaisser une tension d\'entrée continue selon le rapport Us = [R2/(R1+R2)].Ue.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Propriétés comparées des associations',
        statement: 'En série : les résistances s\'ajoutent (Req > Rmax). En parallèle : Req est toujours plus petite que la plus petite résistance du montage.',
        explanation: 'Deux résistances de 10 Ω et 33 Ω donnent 43 Ω en série, et seulement 7,7 Ω en parallèle.'
      }
    ],
    formulas: [
      {
        name: 'Formules de l\'électrocinétique 3ème',
        formula: 'U = R \\times I ; \\quad R = \\frac{U_2 - U_1}{I_2 - I_1} ; \\quad R = ab \\times 10^c\\text{ }\\Omega ; \\quad U_s = \\frac{R_2}{R_1 + R_2} U_e',
        explanation: 'U en volts (V), I en ampères (A), R en ohms (Ω).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Décodage d\'une résistance par les anneaux de couleur',
        procedure: '1. Repérer le 1er anneau (le plus proche du bord). 2. Remplacer la 1ère couleur par son chiffre (ex: Vert = 5). 3. Remplacer la 2e couleur par son chiffre (ex: Rouge = 2). 4. Remplacer la 3e couleur par le nombre de zéros (ex: Orange = 3 zéros -> x 1000). 5. R = 52 000 Ω = 52 kΩ.',
        tip: 'Le quatrième anneau (or ou argent) est isolé plus loin et indique la précision.'
      }
    ],
    examples: [
      {
        statement: 'Un résistor de résistance R1 = 47 Ω et un autre de R2 = 94 Ω sont branchés en série sous une tension d\'entrée Ue = 9 V d\'une pile. Calcule la tension Us aux bornes de R1.',
        solution: `Formule du diviseur de tension :
Us = [R1 / (R1 + R2)] x Ue
Us = [47 / (47 + 94)] x 9 = [47 / 141] x 9 = (1 / 3) x 9 = 3 V.
Cette tension de 3 V permet par exemple d'alimenter un moteur miniature sans le griller.`
      }
    ],
    exercises: [
      {
        question: 'Calcule la résistance équivalente de deux résistors R1 = 30 Ω et R2 = 20 Ω branchés : 1) en série, 2) en parallèle.',
        correction: `1) En série : Req = R1 + R2 = 30 + 20 = 50 Ω.
2) En parallèle : Req = (R1 x R2) / (R1 + R2) = (30 x 20) / (30 + 20) = 600 / 50 = 12 Ω.`
      }
    ],
    evaluationSituation: {
      context: 'Tanoh démonte une voiturette jouet alimentée par une pile de 9 V alors que son moteur ne supporte que 3 V. Il découvre dans le circuit deux résistances associées en série portant des anneaux de couleur (R1 = 47 Ω et R2 = 94 Ω).',
      instructions: [
        '1. Nomme ce type de montage.',
        '2. Calcule la tension présente aux bornes de R1 et celle aux bornes de R2.',
        '3. Indique aux bornes de quelle résistance le moteur de 3 V a été branché.'
      ],
      solutionGuide: '1. Montage diviseur de tension. 2. U1 = [47 / (47 + 94)] x 9 = 3 V ; U2 = [94 / (47 + 94)] x 9 = 6 V. 3. Le moteur de 3 V a été branché aux bornes de la résistance R1 (47 Ω) qui délivre exactement les 3 V requis.'
    },
    examTraps: [
      'Oublier de convertir les milliampères (mA) en ampères (diviser par 1000) avant d\'appliquer U = R x I.',
      'Additionner les résistances lorsqu\'elles sont branchées en parallèle au lieu d\'utiliser Req = (R1 x R2) / (R1 + R2).'
    ],
    quickMemo: 'Loi d\'Ohm : U = R x I | P = R x I² | Code couleurs : Ne Manger Rien Ou Jeûner Voilà Bien Votre Grosse Bêtise (0 à 9) | Série : Req = R1 + R2 | Dérivation : Req = R1.R2 / (R1+R2) | Diviseur : Us = [R2/(R1+R2)] x Ue.',
    keywords: ['conducteur ohmique', 'résistance', 'loi d\'Ohm', 'code des couleurs', 'association en série', 'association en parallèle', 'diviseur de tension']
  },

  // ========================================================
  // 3ÈME - CHIMIE : LEÇON 9 - ÉLECTROLYSE ET SYNTHÈSE DE L'EAU
  // ========================================================
  {
    id: 'pc-3e-chimie-electrolyse-synthese-eau',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 4 : Réactions chimiques',
    lessonTitle: 'Électrolyse et synthèse de l\'eau : Décomposition, identification des gaz et bilans',
    objectifs: [
      'Définir l\'électrolyse comme une réaction chimique de décomposition d\'un électrolyte par le courant électrique continu',
      'Identifier les gaz recueillis aux électrodes : Dihydrogène H2 à la cathode (négative) et Dioxygène O2 à l\'anode (positive)',
      'Reconnaître expérimentalement le dihydrogène (détonation "boum" à la flamme) et le dioxygène (rallume une bûchette incandescente)',
      'Établir la relation volumique fondamentale : V(H2) = 2 x V(O2) et écrire l\'équation-bilan de l\'électrolyse : 2 H2O -> 2 H2 + O2',
      'Décrire la synthèse de l\'eau (2 H2 + O2 -> 2 H2O) et citer ses applications (production d\'eau et d\'oxygène dans les sous-marins et navettes)'
    ],
    fullCourseContent: `1. Rappels fondamentaux :
- L'atome : Plus petite particule élémentaire de matière (ex : $H, O, C, Fe$).
- La molécule : Assemblage ordonné d'atomes liés chimiquement (ex : $H_2O, O_2, H_2, CO_2$).
- Une réaction chimique : Transformation au cours de laquelle des corps disparaissent (les réactifs) et de nouveaux corps aux propriétés différentes apparaissent (les produits).

2. Électrolyse de l'eau (Décomposition électrochimique) :
- Dispositif expérimental : Un électrolyseur (cuve à électrodes inaltérables en platine ou nickel) rempli d'eau additionnée de soude ($NaOH$) ou de potasse ($KOH$) pour rendre la solution conductrice (électrolyte). Deux tubes à essai retournés coiffent les deux électrodes reliées à un générateur de courant continu.
- Observations aux électrodes :
  * Dès la fermeture du circuit, un dégagement gazeux continu apparaît aux deux électrodes.
  * Le volume de gaz dégagé à la cathode (reliée à la borne négative $-$) est exactement le double de celui recueilli à l'anode (reliée à la borne positive $+$) :
    $$V(H_2) = 2 \\times V(O_2)$$
- Identification des gaz formés :
  * À la cathode (pôle $-$) : Le gaz recueilli émet une petite détonation caractéristique (« boum ! ») à l'approche d'une flamme. Ce gaz inflammable est le **dihydrogène** ($H_2$).
  * À l'anode (pôle $+$) : Le gaz recueilli rallume vivement avec éclat une bûchette de bois incandescente (qui ne présentait qu'un point rouge). Ce gaz comburant est le **dioxygène** ($O_2$).
- Équation-bilan de l'électrolyse :
  $$2\\,\\text{H}_2\\text{O} \\longrightarrow 2\\,\\text{H}_2 + \\text{O}_2$$

3. La Synthèse de l'eau (Recombinaison chimique) :
- Expérience : Dans un tube à essai épais (ou eudiomètre), on mélange deux volumes de dihydrogène ($2\\text{ V}$) et un volume de dioxygène ($1\\text{ V}$). On approche une flamme protégée par un linge.
- Observations : Une vive détonation retentit et de fines gouttelettes d'eau (buée) se condensent instantanément sur les parois froides du tube.
- Équation-bilan de la synthèse :
  $$2\\,\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\,\\text{H}_2\\text{O}$$

4. Applications technologiques :
- Dans les sous-marins nucléaires et les stations spatiales, l'électrolyse de l'eau pure permet de régénérer en continu le dioxygène de l'atmosphère respirable des équipages (le dihydrogène étant rejeté à l'extérieur).
- Piles à combustible : Combinaison contrôlée de $H_2$ et $O_2$ pour produire de l'électricité propre avec rejet unique de vapeur d'eau.`,
    definitions: [
      {
        term: 'Électrolyse',
        definition: 'Décomposition chimique d\'un corps en solution (électrolyte) provoquée par le passage d\'un courant électrique continu.'
      },
      {
        term: 'Cathode',
        definition: 'Électrode négative reliée à la borne (-) du générateur, où se dégage le dihydrogène H2.'
      },
      {
        term: 'Anode',
        definition: 'Électrode positive reliée à la borne (+) du générateur, où se dégage le dioxygène O2.'
      },
      {
        term: 'Synthèse de l\'eau',
        definition: 'Réaction chimique vive entre le dihydrogène et le dioxygène formant de l\'eau liquide.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Rapport stœchiométrique des volumes gazeux',
        statement: 'Dans l\'électrolyse comme dans la synthèse de l\'eau, le volume de dihydrogène est toujours strictement le double de celui du dioxygène : V(H2) = 2 x V(O2).',
        explanation: 'Découle de la formule moléculaire H2O comportant 2 atomes d\'hydrogène pour 1 atome d\'oxygène.'
      }
    ],
    formulas: [
      {
        name: 'Équations-bilans de l\'eau',
        formula: '\\text{Électrolyse : } 2\\,\\text{H}_2\\text{O} \\xrightarrow{\\text{Courant}} 2\\,\\text{H}_2 + \\text{O}_2 ; \\quad \\text{Synthèse : } 2\\,\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\,\\text{H}_2\\text{O}',
        explanation: 'V(H2) / 2 = V(O2) / 1.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul des volumes de gaz dans un mélange d\'électrolyse',
        procedure: '1. Poser V_total = V(H2) + V(O2). 2. Remplacer V(H2) par 2 x V(O2) => V_total = 3 x V(O2). 3. V(O2) = V_total / 3. 4. V(H2) = 2 x V(O2).',
        tip: 'Pour 120 cm³ de mélange : VO2 = 120 / 3 = 40 cm³ et VH2 = 80 cm³.'
      }
    ],
    examples: [
      {
        statement: 'Au cours d\'une électrolyse de l\'eau, on recueille 3,5 cm³ de gaz à l\'anode. Détermine le volume de gaz recueilli à la cathode et identifie ce gaz.',
        solution: `À l'anode (pôle +), le gaz formé est le dioxygène : VO2 = 3,5 cm³.
À la cathode (pôle -), le gaz formé est le dihydrogène.
D'après l'équation-bilan : VH2 = 2 x VO2 = 2 x 3,5 = 7 cm³.`
      }
    ],
    exercises: [
      {
        question: 'Comment caractérise-t-on expérimentalement le gaz dihydrogène et le gaz dioxygène ?',
        correction: `Le dihydrogène (H2) produit une détonation caractéristique (« boum ») à l'approche d'une flamme. Le dioxygène (O2) rallume une bûchette de bois incandescente en y provoquant une vive flamme.`
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire du Lycée Moderne de Bonon, des élèves obtiennent un mélange de dihydrogène et de dioxygène de volume total 120 cm³ issu de l\'électrolyse de l\'eau.',
      instructions: [
        '1. Écris l\'équation-bilan de l\'électrolyse de l\'eau.',
        '2. Détermine le volume de dioxygène recueilli à l\'anode et celui de dihydrogène recueilli à la cathode.',
        '3. Décris ce qui se produit si l\'on approche une flamme de ce mélange de 120 cm³.'
      ],
      solutionGuide: '1. Équation-bilan : 2 H2O -> 2 H2 + O2. 2. VH2 = 2 VO2 ; VH2 + VO2 = 120 cm³ => 3 VO2 = 120 => VO2 = 40 cm³ et VH2 = 80 cm³. 3. À l\'approche d\'une flamme, le mélange réagit violemment avec une forte détonation (synthèse de l\'eau) en produisant de la buée sur les parois du récipient.'
    },
    examTraps: [
      'Confondre les gaz aux électrodes : retenir que l\'Anode donne l\'Oxygène (les deux commencent par une voyelle : A -> O), et la Cathode donne l\'Hydrogène.',
      'Oublier le facteur 2 dans l\'équation-bilan équilibrée.'
    ],
    quickMemo: 'Électrolyse : 2 H2O -> 2 H2 + O2 | Cathode (-) = Dihydrogène (boum !) | Anode (+) = Dioxygène (rallume la bûchette) | V(H2) = 2 x V(O2) | Synthèse : 2 H2 + O2 -> 2 H2O.',
    keywords: ['électrolyse', 'synthèse de l\'eau', 'cathode', 'anode', 'dihydrogène', 'dioxygène', 'électrolyte', 'équation-bilan']
  },

  // ========================================================
  // 3ÈME - CHIMIE : LEÇON 10 - LES ALCANES ET LEURS COMBUSTIONS
  // ========================================================
  {
    id: 'pc-3e-chimie-alcanes-combustion-butane',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 4 : Réactions chimiques',
    lessonTitle: 'Les alcanes : Formule générale, isomérie, combustions complète et incomplète du butane',
    objectifs: [
      'Définir un hydrocarbure (composé de carbone et d\'hydrogène uniquement) et la famille des alcanes (CnH2n+2)',
      'Nommer et représenter les quatre premiers alcanes : méthane CH4, éthane C2H6, propane C3H8, butane C4H10',
      'Définir et illustrer l\'isomérie de chaîne (butane normal et isobutane / 2-méthylpropane pour C4H10)',
      'Écrire et équilibrer l\'équation-bilan de la combustion complète du butane : 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O et exploiter la relation des volumes',
      'Distinguer la combustion complète (flamme bleue, CO2 + H2O) de la combustion incomplète (flamme jaune fuligineuse, carbone et monoxyde de carbone CO toxique)',
      'Expliquer l\'impact environnemental des gaz de combustion : effet de serre, réchauffement climatique et intoxication par le CO'
    ],
    fullCourseContent: `1. Définition des Hydrocarbures et des Alcanes :
- Un hydrocarbure est un composé organique dont la molécule est formée exclusivement d'atomes de carbone ($C$) et d'hydrogène ($H$). Ex : $CH_4, C_2H_2, C_3H_8, C_4H_{10}$.
- Les alcanes sont des hydrocarbures saturés à chaîne ouverte répondant à la formule générale :
  $$C_n H_{2n+2}$$
  (où $n$ est le nombre d'atomes de carbone, entier $\\ge 1$).

2. Nomenclature et Formules des quatre premiers alcanes :
Leur nom se termine systématiquement par le suffixe « ane » :
- $n = 1$ : Méthane $\\text{CH}_4$ (gaz principal du gaz naturel et du biogaz).
- $n = 2$ : Éthane $\\text{C}_2\\text{H}_6$ (formule semi-développée : $\\text{CH}_3 - \\text{CH}_3$).
- $n = 3$ : Propane $\\text{C}_3\\text{H}_8$ (formule semi-développée : $\\text{CH}_3 - \\text{CH}_2 - \\text{CH}_3$).
- $n = 4$ : Butane $\\text{C}_4\\text{H}_{10}$ (gaz domestique de cuisine).

3. La Notion d'Isomérie :
Deux molécules sont des isomères lorsqu'elles possèdent la même formule brute, mais des formules développées ou semi-développées différentes.
Le butane $\\text{C}_4\\text{H}_{10}$ admet deux isomères :
- Le butane normal ($n$-butane) à chaîne linéaire : $\\text{CH}_3 - \\text{CH}_2 - \\text{CH}_2 - \\text{CH}_3$.
- L'isobutane (ou 2-méthylpropane) à chaîne ramifiée : $\\text{CH}_3 - \\text{CH}(\\text{CH}_3) - \\text{CH}_3$.

4. Combustion complète du butane (en excès de dioxygène) :
- Expérience : Quand la virole du brûleur est grande ouverte, l'arrivée d'air est maximale. La flamme est courte, non éclairante et d'un bleu vif.
- Produits formés :
  * Du dioxyde de carbone ($CO_2$) qui trouble l'eau de chaux.
  * De l'eau ($H_2O$) qui se condense en buée.
- Équation-bilan équilibrée :
  $$2\\,\\text{C}_4\\text{H}_{10} + 13\\,\\text{O}_2 \\longrightarrow 8\\,\\text{CO}_2 + 10\\,\\text{H}_2\\text{O}$$
- Relation stœchiométrique des volumes :
  $$\\frac{V(\\text{C}_4\\text{H}_{10})}{2} = \\frac{V(\\text{O}_2)}{13} = \\frac{V(\\text{CO}_2)}{8}$$
  (Pour brûler $2\\text{ L}$ de butane, il faut $13\\text{ L}$ de $O_2$, et on obtient $8\\text{ L}$ de $CO_2$).

5. Combustion incomplète du butane (en défaut de dioxygène) :
- Expérience : Quand la virole du brûleur est presque fermée, l'apport d'air est insuffisant. La flamme devient jaune, vacillante, fumeuse (fuligineuse).
- Produits formés : De l'eau, du dioxyde de carbone, mais aussi du noir de carbone (particules de suie solide qui noircissent les casseroles) et du monoxyde de carbone ($CO$).
- Danger mortel du monoxyde de carbone ($CO$) : Gaz incolore, inodore et hautement toxique. Il prend la place de l'oxygène sur l'hémoglobine du sang, provoquant l'asphyxie et la mort silencieuse des occupants d'une pièce mal ventilée.

6. Effet de serre et pollution :
La combustion massive des hydrocarbures rejette des milliards de tonnes de $CO_2$. Le $CO_2$ retient le rayonnement infrarouge de la Terre, amplifiant l'effet de serre responsable des dérèglements climatiques, des sécheresses et de la montée des eaux.`,
    definitions: [
      {
        term: 'Hydrocarbure',
        definition: 'Composé organique constitué exclusivement d\'atomes de carbone et d\'hydrogène.'
      },
      {
        term: 'Alcane',
        definition: 'Hydrocarbure saturé acyclique de formule générale CnH2n+2.'
      },
      {
        term: 'Isomères',
        definition: 'Composés chimiques possédant la même formule brute mais des formules de structure (développées) distinctes.'
      },
      {
        term: 'Combustion complète',
        definition: 'Oxydation vive et totale d\'un combustible en excès de dioxygène ne produisant que du CO2 et de l\'eau.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Virole du brûleur à gaz',
        statement: 'Virole ouverte = excès d\'air -> combustion complète (flamme bleue, chauffe fort, ne salit pas). Virole fermée = défaut d\'air -> combustion incomplète (flamme jaune, suie noire, danger de CO).',
        explanation: 'Le réglage de la virole conditionne le rendement énergétique et la sécurité domestique.'
      }
    ],
    formulas: [
      {
        name: 'Combustion complète des alcanes',
        formula: '2\\,\\text{C}_4\\text{H}_{10} + 13\\,\\text{O}_2 \\longrightarrow 8\\,\\text{CO}_2 + 10\\,\\text{H}_2\\text{O} ; \\quad \\frac{V(\\text{C}_4\\text{H}_{10})}{2} = \\frac{V(\\text{O}_2)}{13}',
        explanation: 'Propane : C3H8 + 5 O2 -> 3 CO2 + 4 H2O ; Méthane : CH4 + 2 O2 -> CO2 + 2 H2O.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calcul du volume de dioxygène nécessaire à la combustion',
        procedure: '1. Écrire l\'équation-bilan équilibrée. 2. Poser la proportion des volumes : V(O2) / 13 = V(butane) / 2. 3. V(O2) = (13 / 2) x V(butane) = 6,5 x V(butane).',
        tip: 'Pour 10 L de butane, il faut 65 L de dioxygène pur (soit environ 325 L d\'air car l\'air contient 20% d\'O2).'
      }
    ],
    examples: [
      {
        statement: 'La combustion complète de 10 L de gaz butane dans une cuisine nécessite combien de litres de dioxygène pur ?',
        solution: `D'après la relation stœchiométrique de l'équation-bilan :
V(O2) / 13 = V(C4H10) / 2
V(O2) = (13 / 2) x 10 L = 6,5 x 10 = 65 L de dioxygène.`
      }
    ],
    exercises: [
      {
        question: 'Donne la formule brute et le nom de l\'alcane possédant 3 atomes de carbone. Écris l\'équation-bilan de sa combustion complète.',
        correction: `Formule brute pour n = 3 : C3H(2x3+2) = C3H8. Il s'agit du propane.
Équation-bilan : C3H8 + 5 O2 -> 3 CO2 + 4 H2O.`
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne Jeunes Filles de Yopougon, les cuisinières constatent que les casseroles noircissent de suie avec une flamme jaune. Une élève de 3ème tourne la virole du brûleur : la flamme redevient bleue et la suie disparaît.',
      instructions: [
        '1. Identifie le type de combustion qui se produisait avant et après le réglage.',
        '2. Nomme le corps responsable du noircissement de la casserole.',
        '3. Écris l\'équation-bilan de la réaction après le réglage de la virole.',
        '4. Cite un gaz toxique produit avant le réglage et ses dangers.'
      ],
      solutionGuide: '1. Avant : combustion incomplète (manque d\'air) ; Après : combustion complète (excès d\'air). 2. Le noir de carbone (carbone solide imbrûlé). 3. Équation : 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O. 4. Le monoxyde de carbone (CO), gaz asphyxiant inodore mortel qui se fixe sur l\'hémoglobine du sang.'
    },
    examTraps: [
      'Oublier les coefficients stœchiométriques (2 et 13) pour équilibrer la combustion du butane.',
      'Confondre monoxyde de carbone (CO, toxique issu de la combustion incomplète) et dioxyde de carbone (CO2, gaz à effet de serre issu de la combustion complète).'
    ],
    quickMemo: 'Alcanes : CnH2n+2 (Méthane CH4, Éthane C2H6, Propane C3H8, Butane C4H10) | Isomères du butane : n-butane et isobutane | Combustion complète : 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O (flamme bleue) | Incomplète : carbone + CO toxique (flamme jaune).',
    keywords: ['alcanes', 'hydrocarbures', 'butane', 'propane', 'méthane', 'isomérie', 'combustion complète', 'combustion incomplète', 'monoxyde de carbone', 'effet de serre']
  },

  // ========================================================
  // 3ÈME - CHIMIE : LEÇON 11 & 12 - OXYDATION ET RÉDUCTION DES OXYDES
  // ========================================================
  {
    id: 'pc-3e-chimie-oxydation-reduction-oxydoreduction',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Thème 4 : Réactions chimiques',
    lessonTitle: 'Oxydation des corps purs simples et réduction des oxydes métalliques',
    objectifs: [
      'Distinguer corps pur simple (un seul type d\'atomes : Fe, Cu, C, S, O2) et corps pur composé (atomes différents : H2O, CO2, CuO, Fe2O3)',
      'Définir l\'oxydation comme un gain d\'atomes d\'oxygène et distinguer l\'oxydation vive (avec flamme et chaleur) de l\'oxydation lente (formation de la rouille)',
      'Écrire les équations-bilans d\'oxydation du fer (3 Fe + 2 O2 -> Fe3O4), du cuivre (2 Cu + O2 -> 2 CuO), du carbone et du soufre (S + O2 -> SO2)',
      'Expliquer la formation de la rouille (4 Fe + 3 O2 -> 2 Fe2O3 en milieu humide) et les méthodes de protection',
      'Définir la réduction (perte d\'oxygène) et l\'oxydoréduction (réaction simultanée avec oxydant et réducteur)',
      'Écrire et équilibrer la réduction de l\'oxyde de cuivre II par le carbone (2 CuO + C -> 2 Cu + CO2), l\'aluminothermie (Fe2O3 + 2 Al -> 2 Fe + Al2O3) et la réduction sidérurgique par le CO'
    ],
    fullCourseContent: `1. Corps purs simples et Corps purs composés :
- Corps pur simple : Substance constituée d'atomes d'une seule et même espèce chimique (ex : le fer $Fe$, le cuivre $Cu$, le carbone $C$, le soufre $S$, le dioxygène $O_2$, le dihydrogène $H_2$).
- Corps pur composé : Substance constituée d'atomes d'espèces chimiques différentes liées entre elles (ex : l'eau $H_2O$, le dioxyde de carbone $CO_2$, l'oxyde de cuivre II $CuO$, l'oxyde ferrique $Fe_2O_3$).

2. La Réaction d'Oxydation :
Une oxydation est une réaction chimique au cours de laquelle un corps se combine avec des atomes d'oxygène (gain d'atomes d'oxygène). Le produit obtenu est un oxyde.
- Oxydation vive (combustions avec vive incandescence ou flamme) :
  * Du fer ($Fe$) : Dans le dioxygène pur, une paille de fer incandescente brûle avec une gerbe d'étincelles éblouissantes. Il se forme des granules grisâtres attirés par un aimant : l'oxyde magnétique de fer ($Fe_3O_4$).
    $$3\\,\\text{Fe} + 2\\,\\text{O}_2 \\longrightarrow \\text{Fe}_3\\text{O}_4$$
  * Du cuivre ($Cu$) : Une lame de cuivre chauffée dans l'air se recouvre d'une pellicule noire d'oxyde de cuivre II (oxyde cuivrique, $CuO$) :
    $$2\\,\\text{Cu} + \\text{O}_2 \\longrightarrow 2\\,\\text{CuO}$$
  * Du carbone ($C$) : Le charbon de bois brûle dans le dioxygène avec une vive lueur sans flamme, produisant du dioxyde de carbone ($CO_2$) qui trouble l'eau de chaux :
    $$\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2$$
  * Du soufre ($S$) : Brûle avec une flamme bleue vive en dégageant un gaz suffocant toxique qui décolore une solution violette de permanganate de potassium : le dioxyde de soufre ($SO_2$) responsable des pluies acides :
    $$\\text{S} + \\text{O}_2 \\longrightarrow \\text{SO}_2$$

3. Oxydation lente du fer : La Rouille :
- Mécanisme : Exposé à l'air libre humide pendant plusieurs jours, le fer réagit lentement avec le dioxygène et l'eau. Il se recouvre d'une couche poreuse rouge-brunâtre friable : la rouille.
- Son constituant principal est l'oxyde ferrique (oxyde de fer III) de formule $Fe_2O_3$ :
  $$4\\,\\text{Fe} + 3\\,\\text{O}_2 \\longrightarrow 2\\,\\text{Fe}_2\\text{O}_3$$
- Protection contre la corrosion : La rouille étant poreuse, elle n'arrête pas la corrosion en profondeur. Pour protéger le fer : application de peinture antirouille, de vernis, huilage, ou galvanisation (recouvrement par une couche de zinc sacrificiel).

4. La Réduction des oxydes et les Réactions d'Oxydoréduction :
- Définition : La réduction est la réaction chimique inverse de l'oxydation : c'est la perte d'atomes d'oxygène par un oxyde métallique pour redonner le métal pur.
- Oxydant et Réducteur :
  * L'oxydant est le corps qui cède des atomes d'oxygène (il subit la réduction).
  * Le réducteur est le corps qui arrache et capte des atomes d'oxygène (il subit l'oxydation).
- Réaction d'oxydoréduction : Oxydation et réduction sont deux processus indissociables et simultanés.

5. Exemples majeurs de réactions d'oxydoréduction :
A. ACTION DU CARBONE SUR L'OXYDE DE CUIVRE II :
En chauffant un mélange de poudre noire de $CuO$ et de charbon $C$, on obtient du cuivre métallique rouge vif ($Cu$) et un dégagement de $CO_2$ (troublant l'eau de chaux) :
$$2\\,\\text{CuO} + \\text{C} \\longrightarrow 2\\,\\text{Cu} + \\text{CO}_2$$
- $CuO$ perd son oxygène : c'est l'oxydant (il est réduit en $Cu$).
- $C$ capte l'oxygène : c'est le réducteur (il est oxydé en $CO_2$).

B. ALUMINOTHERMIE (Action de l'aluminium sur l'oxyde ferrique) :
Réaction amorcée avec un ruban de magnésium, très exothermique avec lumière éblouissante, produisant du fer métallique fondu et une poudre blanche d'alumine ($Al_2O_3$) :
$$\\text{Fe}_2\\text{O}_3 + 2\\,\\text{Al} \\longrightarrow 2\\,\\text{Fe} + \\text{Al}_2\\text{O}_3$$
($Fe_2O_3$ est l'oxydant, $Al$ est le réducteur ; utilisée pour souder les rails de chemin de fer).

C. RÉDUCTION SIDÉRURGIQUE DANS LE HAUT FOURNEAU (Minerais de fer) :
Le minerai d'oxyde de fer III est réduit par le monoxyde de carbone gazeux ($CO$) :
$$\\text{Fe}_2\\text{O}_3 + 3\\,\\text{CO} \\longrightarrow 2\\,\\text{Fe} + 3\\,\\text{CO}_2$$
($Fe_2O_3$ est l'oxydant, $CO$ est le réducteur).`,
    definitions: [
      {
        term: 'Oxydation',
        definition: 'Réaction chimique au cours de laquelle une espèce chimique gagne des atomes d\'oxygène.'
      },
      {
        term: 'Réduction',
        definition: 'Réaction chimique au cours de laquelle une espèce oxyde perd des atomes d\'oxygène.'
      },
      {
        term: 'Oxydant',
        definition: 'Substance chimique capable de céder des atomes d\'oxygène au cours d\'une réaction redox.'
      },
      {
        term: 'Réducteur',
        definition: 'Substance chimique capable de capter des atomes d\'oxygène au cours d\'une réaction redox.'
      },
      {
        term: 'Aluminothermie',
        definition: 'Réduction très exothermique d\'un oxyde métallique (Fe2O3) par la poudre d\'aluminium produisant du métal liquide.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Simultanéité de l\'oxydoréduction',
        statement: 'Il ne peut y avoir de réduction sans oxydation concomitante : les atomes d\'oxygène cédés par l\'oxydant sont obligatoirement captés par le réducteur.',
        explanation: 'Dans 2 CuO + C -> 2 Cu + CO2, la réduction de CuO s\'accompagne obligatoirement de l\'oxydation de C.'
      }
    ],
    formulas: [
      {
        name: 'Équations d\'oxydation et d\'oxydoréduction',
        formula: '3\\,\\text{Fe} + 2\\,\\text{O}_2 \\to \\text{Fe}_3\\text{O}_4 ; \\quad 4\\,\\text{Fe} + 3\\,\\text{O}_2 \\to 2\\,\\text{Fe}_2\\text{O}_3 ; \\quad 2\\,\\text{CuO} + \\text{C} \\to 2\\,\\text{Cu} + \\text{CO}_2',
        explanation: 'Fe3O4 = oxyde magnétique ; Fe2O3 = oxyde ferrique (rouille) ; CuO = oxyde de cuivre II.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identification de l\'oxydant et du réducteur dans une équation',
        procedure: '1. Identifier l\'espèce de départ qui perd des atomes d\'oxygène : elle subit la réduction, c\'est donc l\'OXYDANT. 2. Identifier l\'espèce de départ qui gagne des atomes d\'oxygène : elle subit l\'oxydation, c\'est donc le RÉDUCTEUR.',
        tip: 'Le réducteur se fait oxyder, et l\'oxydant se fait réduire.'
      }
    ],
    examples: [
      {
        statement: 'Dans la réaction du haut fourneau : Fe2O3 + 3 CO -> 2 Fe + 3 CO2, nomme le corps réduit, le corps oxydé, l\'oxydant et le réducteur.',
        solution: `1. Fe2O3 perd son oxygène pour devenir Fe : il subit la réduction, donc c'est le corps réduit et l'OXYDANT.
2. CO gagne un oxygène pour devenir CO2 : il subit l'oxydation, donc c'est le corps oxydé et le RÉDUCTEUR.`
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence entre l\'oxyde magnétique de fer et la rouille (nom chimique, formule, condition de formation) ?',
        correction: `L'oxyde magnétique de fer a pour formule Fe3O4, c'est le produit d'une oxydation vive (combustion du fer dans le dioxygène à haute température) ; il est noir/gris et attiré par un aimant. La rouille a pour constituant principal l'oxyde ferrique Fe2O3, c'est le produit d'une oxydation lente du fer en présence d'eau et de dioxygène à température ambiante ; elle est rouge-brun et poreuse.`
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée de Zouan-Hounien, des élèves chauffent au bec Bunsen un mélange de poudre noire d\'oxyde de cuivre II (CuO) et de charbon de bois (C). Il apparaît un solide rouge brillant sur les parois du tube et le gaz dégagé trouble l\'eau de chaux.',
      instructions: [
        '1. Écris l\'équation-bilan de la réaction chimique.',
        '2. Nomme le solide rouge et le gaz formé.',
        '3. Identifie l\'oxydant et le réducteur.',
        '4. Justifie pourquoi cette réaction est qualifiée d\'oxydoréduction.'
      ],
      solutionGuide: '1. Équation-bilan : 2 CuO + C -> 2 Cu + CO2. 2. Solide rouge : le cuivre métallique (Cu) ; gaz : le dioxyde de carbone (CO2). 3. Oxydant : CuO (oxyde de cuivre II) car il cède son oxygène ; Réducteur : le carbone (C) car il capte l\'oxygène. 4. C\'est une réaction d\'oxydoréduction car il y a transfert d\'oxygène simultané entre l\'oxydant (qui est réduit) et le réducteur (qui est oxydé).'
    },
    examTraps: [
      'Confondre Fe3O4 (oxyde magnétique issu de la combustion vive) et Fe2O3 (oxyde ferrique de la rouille issue de l\'oxydation lente).',
      'Dire que le carbone est oxydant : le carbone capte l\'oxygène, c\'est donc le RÉDUCTEUR.'
    ],
    quickMemo: 'Oxydation = Gain d\'O (Fe -> Fe3O4, Cu -> CuO, S -> SO2, C -> CO2) | Rouille = 4 Fe + 3 O2 -> 2 Fe2O3 (en milieu humide) | Réduction = Perte d\'O | Oxydant cède O, Réducteur prend O | 2 CuO + C -> 2 Cu + CO2 | Fe2O3 + 2 Al -> 2 Fe + Al2O3.',
    keywords: ['oxydation', 'réduction', 'oxydoréduction', 'rouille', 'oxyde magnétique', 'oxyde de cuivre II', 'aluminothermie', 'haut fourneau']
  }
];
