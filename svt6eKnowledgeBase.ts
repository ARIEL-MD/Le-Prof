/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SCIENCES DE LA VIE ET DE LA TERRE 6ÈME
 * (SVTEEHB : Sciences de la Vie et de la Terre, Éducation à l'Environnement, Hygiène et Biotechnologie)
 * 
 * Source officielle : Programme National de SVTEEHB Classe de 6ème (Cameroun / Côte d'Ivoire APC)
 * Édition : High-Tech Corp's / MENA
 * 
 * Fichier 100% autonome : zéro dépendance IA, aucun appel réseau.
 */

export type Chapter = {
  id: string;                // ex: "svt-ch1"
  lessonNumber?: number;
  title: string;             // titre exact du chapitre
  pages?: [number, number] | readonly [number, number];
  topics: string[] | readonly string[];          // notions abordées, en langage clair
  formulas: string[] | readonly string[];        // toutes les formules/relations quantitatives du chapitre
  methods: string[] | readonly string[];         // méthodes de résolution étape par étape
};

export const svt6eKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVTEEHB 6ème",
  version: "1.0.0",
  source: "Programmes de Sciences de la Vie et de la Terre, Éducation à l'Environnement, Hygiène et Biotechnologie (SVTEEHB) Classe de 6ème (High-Tech Corp's)",
  level: "Sixième (6ème)",
  runtimePolicy: {
    primarySource: "knowledge_base_local",
    apiRequired: false,
    apiRole: "fallback_only",
    resolutionOrder: [
      "detect_chapter",
      "retrieve_relevant_method_and_formula",
      "solve",
      "verify",
      "generate_explanation"
    ]
  },
  chapters: [
    // =========================================================================
    // MODULE I : LE MONDE VIVANT
    // =========================================================================

    // -------------------------------------------------------------------------
    // SÉQUENCE 1 : IMPORTANCE DES CARACTÉRISTIQUES DU MILIEU SUR LA PRODUCTION VÉGÉTALE ET ANIMALE
    // -------------------------------------------------------------------------
    {
      id: "svt-ch1",
      lessonNumber: 1,
      title: "Importance des caractéristiques du milieu sur la production végétale et animale",
      pages: [4, 5],
      topics: [
        "Influence du climat sur la production végétale :",
        "- La production végétale (synthèse de matière organique par les végétaux) dépend étroitement de la pluviosité (quantité d'eau disponible) et de la température.",
        "- Besoins en eau variables selon les espèces : plantes à forts besoins hydriques (ex: ananas, riz, bananier) cultivées en période très pluvieuse ; plantes à faibles besoins hydriques (ex: cotonnier, mil) adaptées aux saisons plus sèches.",
        "- Influence thermique : la germination et la croissance requièrent une température optimale moyenne ; des températures trop basses (gel) ou excessives inhibent ou bloquent le métabolisme végétal.",
        "Relations de compétition chez les animaux :",
        "- Définition : concurrence s'établissant entre êtres vivants pour l'accès aux ressources limitées du milieu.",
        "- Compétition pour les ressources alimentaires : quand les ressources sont abondantes, les individus cohabitent ou s'entraident ; quand elles deviennent rares, des comportements agressifs et de rivalité se développent.",
        "- Compétition pour la reproduction : rivalités intraspécifiques où les mâles les plus vigoureux dominent et s'accouplent préférentiellement avec les femelles.",
        "- Compétition pour l'espace vital et le territoire de subsistance.",
        "Influence du sol sur la production végétale (facteurs édaphiques et biotiques) :",
        "- Facteurs édaphiques du sol :",
        "  1. Structure du sol : mode d'agencement des particules. Structure grumeleuse (particules agglutinées en agrégats ou grumeaux, très aérée et fertile) versus structure particulaire (particules séparées et isolées).",
        "  2. Texture du sol : répartition granulométrique selon le diamètre des grains : cailloux et graviers (> 2 mm), sables (2 mm à 50 µm), limons (50 µm à 2 µm), argiles (< 2 µm).",
        "  3. Porosité : pourcentage d'espaces vides par unité de volume de terre, facilitant la circulation de l'air (O2) et de l'eau pour les organismes aérobies.",
        "  4. Perméabilité : vitesse à laquelle le sol laisse s'infiltrer l'eau. Un sol trop perméable (sableux) retient mal l'eau ; un sol argileux peu perméable retient trop d'eau, provoquant inondations et asphyxie racinaire.",
        "  5. Composition chimique : réserve en éléments minéraux solubles sous forme d'ions (azote, phosphore, potassium, calcium).",
        "- Facteurs biotiques : êtres vivants du sol (bactéries, champignons microscopiques, vers de terre, nématodes, insectes) indispensables à l'aération mécanique, au recyclage de la matière organique et à la formation du complexe argilo-humique (CAH) garant de la rétention minérale."
      ],
      formulas: [
        "Classification granulométrique : Cailloux/Graviers > 2 mm | Sables : 50 µm - 2 mm | Limons : 2 µm - 50 µm | Argiles < 2 µm",
        "Porosité du sol : P (%) = (Volume des vides / Volume total du sol) * 100",
        "Condition optimale de fertilité végétale = Sol meuble à structure grumeleuse + Complexe argilo-humique + Eau suffisante + Présence d'organismes décomposeurs (vers de terre, bactéries)"
      ],
      methods: [
        "Déterminer la texture d'un sol par analyse granulométrique : 1. Mesurer le diamètre moyen des particules minérales après tamisage. 2. Si diamètre > 2 mm -> graviers. 3. Si compris entre 50 µm et 2 mm -> sables. 4. Si compris entre 2 µm et 50 µm -> limons. 5. Si < 2 µm -> fraction argileuse.",
        "Évaluer l'impact des facteurs climatiques sur une culture : 1. Analyser les besoins spécifiques de la plante en eau et en chaleur. 2. Si la plante a besoin de fortes pluies (ex: ananas) -> préconiser la plantation en début de saison pluvieuse. 3. Si la plante craint l'excès d'humidité (ex: coton) -> éviter les sols inondables et les pluies continues.",
        "Améliorer la fertilité d'un sol agricole pauvre : 1. Apporter de la matière organique (compost, fumier) pour former de l'humus. 2. Favoriser l'activité biologique des vers de terre et micro-organismes du sol. 3. Amender pour équilibrer la texture argilo-sableuse et stabiliser la structure grumeleuse."
      ]
    },

    // -------------------------------------------------------------------------
    // SÉQUENCE 2 : NÉCESSITÉ DE LA REPRODUCTION ET MULTIPLICATION DES PLANTES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch2",
      lessonNumber: 2,
      title: "Nécessité de la reproduction et multiplication des plantes",
      pages: [6, 7],
      topics: [
        "Définition de la reproduction : phénomène biologique par lequel les êtres vivants engendrent de nouveaux individus qui leur ressemblent, assurant la continuité de l'espèce.",
        "Les deux modes fondamentaux de multiplication :",
        "- Multiplication sexuée : nécessite la production et l'union de cellules reproductrices (gamètes mâles et femelles).",
        "- Multiplication asexuée ou végétative : reproduction sans fécondation ni organes reproducteurs, à partir d'un organe ou fragment de l'appareil végétatif (tige, racine, feuille).",
        "La multiplication sexuée chez les plantes à fleurs :",
        "- Organisation d'une fleur complète :",
        "  1. Pièces florales stériles (protectrices) : sépales (ensemble formant le calice) et pétales (ensemble formant la corolle).",
        "  2. Pièces florales fertiles mâles : les étamines, composées d'un filet et d'une anthère contenant les grains de pollen (porteurs des gamètes mâles).",
        "  3. Pièces florales fertiles femelles : le pistil (ou carpelle), composé du stigmate (surface réceptrice collante), du style et de l'ovaire renfermant un ou plusieurs ovules (gamètes femelles).",
        "- La graine et ses types :",
        "  * Graines monocotylédones : un seul cotylédon de réserve (ex: maïs, riz, blé, mil, sorgho).",
        "  * Graines dicotylédones : deux cotylédons de réserve (ex: haricot, arachide, soja, pois).",
        "  * Qualités d'une bonne graine semencière : mûre, saine, non parasitée, à fort pouvoir germinatif.",
        "- La germination : passage de la graine de l'état de vie ralentie à l'état de vie active.",
        "  * Conditions indispensables : humidité suffisante, température convenable, aération (oxygène), graine non enfouie trop profondément.",
        "  * Étapes : hydratation, allongement de la radicule qui s'enfonce dans le sol, déploiement de la tigelle, développement des premières vraies feuilles.",
        "  * Germination épigée : les cotylédons sont soulevés au-dessus du sol (ex: arachide, haricot).",
        "  * Germination hypogée : les cotylédons restent enfouis sous le sol (ex: maïs).",
        "La multiplication végétative (asexuée) :",
        "- Méthodes de multiplication artificielle horticole :",
        "  1. Le bouturage : prélèvement et mise en terre d'un fragment de tige, de racine ou de feuille capable de s'enraciner et de régénérer une plante complète identique (ex: manioc, canne à sucre, igname, patate douce, bananier).",
        "  2. Le marcottage : technique consistant à provoquer l'enracinement d'un rameau encore attaché à la plante mère (marcottage en butte ou en archet) avant de le sevrer.",
        "  3. Le greffage : union intime d'un greffon (rameau d'une variété sélectionnée) sur un porte-greffe enraciné de même famille botanique.",
        "- Multiplication chez les micro-organismes :",
        "  * Bourgeonnement de la levure de bière : formation d'une excroissance (bourgeon) sur la cellule mère qui grossit puis se détache.",
        "  * Bipartition bactérienne : scissiparité, étranglement médian de la bactérie mère donnant deux cellules filles identiques (ex: Lactobacilles pour le yaourt, Pseudomonas pour la vitamine B12, Bacillus thuringiensis)."
      ],
      formulas: [
        "Fleur hermaphrodite = Pièces stériles (Calice/sépales + Corolle/pétales) + Pièces mâles (Étamines = filet + anthère) + Pièces femelles (Pistil = stigmate + style + ovaire)",
        "Classification de la germination : Cotylédons au-dessus du sol = Épigée (haricot) ; Cotylédons sous terre = Hypogée (maïs)",
        "Taux de germination : G (%) = (Nombre de graines germées / Nombre de graines semées) * 100"
      ],
      methods: [
        "Réaliser un bouturage agricole (ex: tige de manioc) : 1. Choisir une tige saine, vigoureuse, non parasitée. 2. Tronçonner des fragments biseautés de 15 à 20 cm portant au moins 3 à 4 nœuds ou yeux. 3. Enfoncer la bouture obliquement dans un sol meuble et humide en orientant les bourgeons vers le haut. 4. Arroser modérément jusqu'à l'apparition des nouvelles racines et pousses feuillées.",
        "Distinguer germination épigée et hypogée lors d'une observation : 1. Observer la position des cotylédons après émergence de la plantule. 2. Si les cotylédons sortent de terre portés par la tigelle -> germination épigée. 3. Si la plantule sort seule en laissant les cotylédons dans le substrat terreux -> germination hypogée.",
        "Identifier les pièces fertiles d'une fleur coupée : 1. Repérer au centre le pistil avec son ovaire renflé à la base -> organe reproducteur femelle. 2. Repérer autour les étamines avec leurs anthères jaunes poudreuses de pollen -> organes reproducteurs mâles."
      ]
    },

    // -------------------------------------------------------------------------
    // SÉQUENCE 3 & 4 : GESTION DES RESSOURCES ALIMENTAIRES, FAUNE ET PLANTES MÉDICINALES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch3",
      lessonNumber: 3,
      title: "Gestion des ressources alimentaires, faune et plantes médicinales",
      pages: [8, 10],
      topics: [
        "Ressources alimentaires issues de l'environnement :",
        "- Espèces animales exploitées pour l'alimentation : bœuf, mouton, chèvre, volailles, poissons (tilapia, carpe), gibier (antilopes), abeilles (miel), escargots.",
        "- Espèces végétales vivrières : igname, manioc, riz, maïs, tomate, orange, bananier, palmier à huile.",
        "Espèces menacées d'extinction et en voie de disparition :",
        "- Faune menacée : éléphants d'Afrique, rhinocéros, lions, baleines, phoques, lamantins.",
        "- Flore menacée : palmier rotin, arbre à karité, bubinga, bois précieux surexploités.",
        "- Mesures de sauvegarde de la biodiversité : promulgation de lois interdisant le braconnage et la pêche abusive aux mailles serrées ; création et surveillance de réserves naturelles et parcs nationaux ; reboisement d'espèces endémiques.",
        "Classification élémentaire du monde vivant :",
        "- Procaryotes : êtres unicellulaires sans noyau individualisé (bactéries).",
        "- Protistes : eucaryotes unicellulaires pourvus d'un vrai noyau.",
        "- Champignons (Fungi) : organismes hétérotrophes sans chlorophylle.",
        "- Végétaux : organismes autotrophes chlorophylliens (algues, mousses, fougères, gymnospermes, dicotylédones, monocotylédones).",
        "- Animaux : vertébrés (mammifères, oiseaux, reptiles, batraciens/amphibiens, poissons) et invertébrés (arthropodes: insectes, arachnides, crustacés, myriapodes ; mollusques: gastéropodes, bivalves, céphalopodes ; vers).",
        "Rôles thérapeutiques des plantes médicinales traditionnelles :",
        "- Céleri : traitement de l'insuffisance rénale, de la goutte et de l'arthrite (administration par voie orale en salade ou décoction).",
        "- Goyavier : feuilles et racines employées contre les stomatites, diarrhées et dysenteries infectieuses.",
        "- Aloe vera : gel appliqué en cutané contre mycoses et brûlures, ou pris par voie orale contre l'ulcère gastrique et les parasitoses intestinales.",
        "- Carotte : décoction de fanes et tubercules contre les diarrhées, colites et gastro-entérites.",
        "- Oranger (feuilles et fleurs) : sédatif nerveux, régulation des palpitations cardiaques et insomnies.",
        "- Papayer : décoctions de feuilles fraîches utilisées en traitement adjuvant contre les crises de paludisme.",
        "Méthodes de préparation et d'administration des plantes :",
        "- Modes de préparation : macération (trempage prolongé dans un liquide froid), infusion (versement d'eau bouillante sur la plante puis repos couvert), décoction (maintien à ébullition prolongée dans l'eau), trituration (broyage en pâte fine ou poudre).",
        "- Voies d'administration : voie orale (boisson de décoction/infusion), voie cutanée (cataplasme, pommade, onguent), voie anale (purges et lavements traditionnels)."
      ],
      formulas: [
        "Classification du vivant = Procaryotes (sans noyau) + Protistes (unicellulaires à noyau) + Champignons + Végétaux (chlorophylliens) + Animaux (Vertébrés / Invertébrés)",
        "Préparation galénique : Décoction = Eau bouillie avec les parties dures (écorces, racines) ; Infusion = Eau bouillante versée sur les parties tendres (feuilles, fleurs) ; Macération = Trempage à froid"
      ],
      methods: [
        "Préparer une décoction médicinale à base de feuilles de papayer ou de goyavier : 1. Laver soigneusement les feuilles fraîches à l'eau propre. 2. Placer les feuilles dans une casserole remplie d'eau potable. 3. Porter à ébullition pendant 10 à 15 minutes. 4. Laisser tiédir puis filtrer à travers un tamis propre avant administration orale.",
        "Classer un être vivant dans le tableau taxonomique simplifié : 1. Vérifier si l'organisme est cellulaire avec ou sans noyau. 2. S'il n'a pas de chlorophylle et se déplace pour se nourrir -> Animal (déterminer ensuite présence de squelette interne: Vertébré ou Invertébré). 3. S'il possède de la chlorophylle et effectue la photosynthèse -> Végétal. 4. S'il absorbe la matière organique sans chlorophylle -> Champignon."
      ]
    },

    // -------------------------------------------------------------------------
    // SÉQUENCE 5 & 6 : TRANSFORMATION DES PRODUITS AGRICOLES ET BIOTECHNOLOGIES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch4",
      lessonNumber: 4,
      title: "Transformation des produits agricoles et fermentations",
      pages: [10],
      topics: [
        "Rôle des micro-organismes dans les fermentations alimentaires :",
        "- Définition de la fermentation : dégradation et transformation anaérobie de substrats organiques par l'action d'enzymes sécrétées par des micro-organismes (bactéries, levures).",
        "- Fermentation alcoolique : réalisée par les levures de bière (Saccharomyces cerevisiae), transformant le glucose en éthanol (boissons alcooliques) et dioxyde de carbone.",
        "- Fermentation panaire : les levures de boulangerie produisent du dioxyde de carbone gazeux qui fait gonfler la pâte à pain en créant des alvéoles.",
        "- Fermentation acétique : réalisée par les bactéries acétifiantes (Acetobacter), transformant l'alcool éthylique en acide acétique (vinaigre).",
        "- Fermentation lactique : menée par les lactobacilles et streptocoques, transformant le lactose du lait en acide lactique pour obtenir le yaourt et le fromage.",
        "Extraction artisanale d'une huile végétale (ex: huile de palme) :",
        "1. Cuisson : faire bouillir les régimes et noix de palme dans l'eau pour ramollir la pulpe riche en lipides.",
        "2. Pilonnage : piler les noix cuites dans un mortier pour séparer la pulpe de la coque.",
        "3. Désemnoyautage : retirer manuellement les noix dures (palmistes).",
        "4. Pressage et filtration : presser et malaxer la pulpe fibreuse à travers un tamis pour extraire le jus gras.",
        "5. Séparation thermique : ajouter de l'eau au jus, faire bouillir à feu moyen : l'huile plus légère flotte en surface par différence de densité et est écumée au fur et à mesure."
      ],
      formulas: [
        "Fermentation alcoolique : Glucose (sucre) --[Levures]--> Éthanol (alcool) + Dioxyde de carbone (CO2)",
        "Fermentation lactique : Lactose (sucre du lait) --[Lactobacilles]--> Acide lactique (caillage en yaourt)",
        "Fermentation acétique : Éthanol (vin/alcool) + O2 --[Bactéries acétiques]--> Acide acétique (vinaigre) + Eau",
        "Principe d'extraction d'huile : Densité huile (0,92) < Densité eau (1,0) -> L'huile décante et surnage au-dessus de l'eau bouillante"
      ],
      methods: [
        "Réaliser l'extraction d'huile de palme par étapes chronologiques : 1. Faire bouillir les noix de palme fraîches. 2. Piler les noix dans un mortier traditionnel. 3. Ôter tous les noyaux solides. 4. Presser la pulpe avec de l'eau à travers une passoire/tamis. 5. Faire bouillir le liquide extrait et recueillir l'huile rouge qui flotte à la surface.",
        "Expliquer le mécanisme de fabrication du yaourt : 1. Chauffer le lait entier pour détruire les bactéries indésirables (pasteurisation). 2. Laisser tiédir à environ 40-45°C. 3. Ensemencer avec des ferments lactiques (lactobacilles). 4. Incuber à l'abri des variations thermiques pendant plusieurs heures : l'acidification coagule les protéines de lait en gel solide."
      ]
    },

    // =========================================================================
    // MODULE II : LA MATIÈRE, SES PROPRIÉTÉS ET TRANSFORMATIONS
    // =========================================================================

    // -------------------------------------------------------------------------
    // SÉQUENCE 7 : PROPRIÉTÉS PHYSIQUES, CHIMIQUES, MESURES ET CARACTÉRISTIQUES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch5",
      lessonNumber: 5,
      title: "La matière, ses propriétés et ses caractéristiques physiques et chimiques",
      pages: [11, 15],
      topics: [
        "Propriétés physiques de la matière :",
        "- Perméabilité : capacité d'un matériau à se laisser traverser par un fluide (l'eau).",
        "- Solubilité : aptitude d'une substance (soluté) à se dissoudre uniformément dans un liquide (solvant).",
        "- Dilatation thermique : accroissement réversible du volume d'un corps provoqué par l'élévation de sa température.",
        "Propriétés chimiques de la matière :",
        "- Combustibilité : aptitude à s'enflammer et brûler en présence d'un comburant (dioxygène).",
        "- Corrosion : altération d'un métal au contact de l'air humide (rouille du fer).",
        "- Acidité et basicité des solutions :",
        "  * Échelle de pH (potentiel hydrogène, valeurs de 0 à 14) :",
        "    - pH = 7 : solution neutre (eau pure, sérum physiologique, salive neutre).",
        "    - pH < 7 : solution acide au goût piquant (vinaigre, jus de citron, sodas, sucs gastriques).",
        "    - pH > 7 : solution basique au toucher savonneux (eau de Javel, savon liquide, bicarbonate de sodium).",
        "  * Indicateur au papier tournesol : le papier tournesol bleu devient rouge en milieu acide ; le papier tournesol rouge devient bleu en milieu basique ; une solution neutre ne modifie pas sa teinte.",
        "Température et changements d'états de l'eau :",
        "- Température : mesure du degré d'agitation thermique au thermomètre, exprimée en degrés Celsius (°C) ou Fahrenheit (°F).",
        "- Changements d'état à pression normale : Fusion de la glace (solide -> liquide) à 0°C ; Ébullition/Vaporisation de l'eau (liquide -> gaz) à 100°C ; Solidification à 0°C.",
        "Mesures physiques : masse, volume, masse volumique, densité, concentration massique :",
        "- Masse (m) : quantité de matière contenue dans un corps ; unité légale : le kilogramme (kg). Instruments : balance de Roberval (à plateaux et poids marqués), balance romaine, balance automatique, trébuchet de bijouterie.",
        "  * Multiples : tonne (1 t = 1 000 kg), quintal (1 q = 100 kg). Sous-multiples : g, mg. Unités anglo-saxonnes : livre/pound (1 lb = 0,45 kg), carat (0,2 g).",
        "- Volume (V) : encombrement spatial ; unité légale : le mètre cube (m³). Instruments : éprouvette graduée, fiole, bécher. Pied à coulisse pour mesurer les diamètres.",
        "  * Formules volumiques de solides usuels :",
        "    - Cube d'arête a : V = a³",
        "    - Cylindre de rayon r et hauteur h : V = pi * r² * h",
        "    - Sphère de rayon r : V = (4/3) * pi * r³",
        "- Masse volumique (rho) : quotient de la masse m par le volume V : rho = m / V. Unité légale : kg/m³ (1 g/cm³ = 1 kg/dm³ = 1 000 kg/m³). Masse volumique de l'eau pure = 1 000 kg/m³.",
        "- Densité (d) : grandeur sans dimension comparant la masse d'un volume de substance à celle du même volume d'eau (pour solides/liquides) ou d'air (pour gaz) : d = rho / rho_eau. Les corps de densité < 1 flottent sur l'eau (huile : 0,92 ; liège) ; ceux de densité > 1 coulent (aluminium : 2,7 ; fer : 7,8 ; or : 19,3).",
        "- Concentration massique (Cm) : masse de soluté dissous par unité de volume de solution : Cm = m_soluté / V_solution (en g/L). Solution saturée : solution dans laquelle le solvant ne peut plus dissoudre de soluté supplémentaire."
      ],
      formulas: [
        "Masse volumique : rho = m / V (en kg/m³ ou g/cm³)",
        "Densité d'un liquide ou solide : d = rho / rho_eau = m_corps / m_eau (sans unité)",
        "Volume du cube : V = a³ | Volume du cylindre : V = pi * r² * h | Volume de la sphère : V = (4/3) * pi * r³",
        "Concentration massique : Cm = m / V (en g/L)",
        "Conversions d'unités de masse : 1 t = 1 000 kg = 10 q | 1 kg = 1 000 g | 1 q = 100 kg | 1 carat = 0,2 g",
        "Conversions d'unités de volume : 1 m³ = 1 000 L | 1 dm³ = 1 L | 1 cm³ = 1 mL = 0,001 L",
        "Règle de flottabilité : Si d < 1 -> le corps flotte sur l'eau ; Si d > 1 -> le corps coule au fond"
      ],
      methods: [
        "Déterminer la masse volumique d'un solide ou d'un liquide : 1. Peser l'objet sur une balance tarée pour obtenir sa masse m en grammes ou en kg. 2. Déterminer son volume V : par déplacement d'eau dans une éprouvette graduée (V = V2 - V1) ou par calcul géométrique. 3. Calculer le quotient rho = m / V. 4. Exprimer le résultat dans l'unité demandée (g/cm³ ou kg/m³).",
        "Tester l'acidité ou la basicité d'une solution inconnue : 1. Déposer une goutte de la solution sur un morceau de papier tournesol bleu et un morceau de papier tournesol rouge (ou papier pH). 2. Si le papier bleu devient rouge -> solution acide (pH < 7). 3. Si le papier rouge devient bleu -> solution basique (pH > 7). 4. Si aucune bandelette ne change de couleur -> solution neutre (pH = 7).",
        "Calculer la concentration massique d'une solution sucrée ou salée : 1. Relever la masse m du soluté dissous en grammes. 2. Relever le volume total V de la solution en litres. 3. Appliquer la formule Cm = m / V. 4. Vérifier si un dépôt reste au fond : si oui, indiquer que la solution a atteint la saturation."
      ]
    },

    // =========================================================================
    // MODULE III : ÉNERGIE, SES SOURCES, ÉCHANGES ET ACTIONS MÉCANIQUES
    // =========================================================================

    // -------------------------------------------------------------------------
    // SÉQUENCE 8, 9 & 10 : ÉNERGIE, CHALEUR, ÉLECTRICITÉ, LUMIÈRE ET FORCES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch6",
      lessonNumber: 6,
      title: "Énergie, chaleur, électricité, optique et actions mécaniques",
      pages: [16, 24],
      topics: [
        "Définition et formes de l'énergie : capacité d'un système à produire un travail, de la chaleur, de la lumière ou un mouvement.",
        "- Formes d'énergie : calorifique/thermique (vapeur), électrique (courant), mécanique (mouvement physique), chimique (réactions de combustion, piles).",
        "Sources d'énergie renouvelables versus non renouvelables :",
        "- Énergies renouvelables (inépuisables à l'échelle humaine) : solaire (panneaux photovoltaïques), éolienne (vent), hydraulique (barrages), géothermique (chaleur de la Terre), marémotrice.",
        "- Énergies non renouvelables (stocks fossiles limités) : pétrole, gaz naturel, charbon, combustible nucléaire (uranium).",
        "Chimie des combustions et impacts environnementaux :",
        "- Transformation chimique où un combustible réagit avec un comburant (le dioxygène de l'air) en présence d'une source d'inflammation.",
        "- Combustion de la paraffine de bougie : réactifs (paraffine + dioxygène O2) ; produits identifiés : eau H2O (buée sur surface froide), dioxyde de carbone CO2 (trouble l'eau de chaux), carbone résiduel (dépôt noir de suie si combustion incomplète).",
        "- Combustion complète (flamme bleue, produit uniquement CO2 et H2O) versus combustion incomplète (flamme jaune éclairante, suie de carbone et monoxyde de carbone toxique CO).",
        "Modes de transfert de la chaleur :",
        "- Conduction : transmission thermique de proche en proche dans un solide sans déplacement de matière (métaux bons conducteurs, laine/bois isolants).",
        "- Convection : transfert thermique dans un fluide (liquide ou gaz) avec déplacement effectif de matière (courants chauds ascendants).",
        "- Rayonnement : transmission thermique par ondes électromagnétiques/rayons lumineux sans support matériel obligatoire (soleil, braises).",
        "Électricité et sécurité domestique :",
        "- Conducteurs (laissent circuler les électrons : cuivre, fer, eau salée, corps humain) versus isolants (stoppent le courant : plastique, bois sec, verre).",
        "- Composants d'une installation électrique : prises de courant, interrupteurs, disjoncteur différentiel (coupe automatiquement le circuit en cas de surintensité ou court-circuit). Risque mortel d'électrocution.",
        "Optique fondamentale :",
        "- Sources primaires (émettent leur propre lumière : soleil, flamme, étoiles, lampes allumées) versus sources secondaires (diffusent la lumière reçue : lune, murs, miroir).",
        "- Récepteurs de lumière : œil humain (rétine), cellules photovoltaïques, pellicules photo, chlorophylle des plantes.",
        "- Principe de propagation rectiligne de la lumière en milieu transparent et homogène (trajet en ligne droite modélisé par un rayon lumineux fléché).",
        "- Phénomènes lumineux : réflexion, diffusion, absorption (milieux opaques), réfraction (déviation du rayon lumineux au passage d'un dioptre).",
        "Actions mécaniques et notion de force :",
        "- Définition d'une force : toute cause capable de modifier la vitesse ou la trajectoire d'un corps (effet dynamique), ou de le déformer ou le maintenir à l'équilibre (effet statique).",
        "- Types de forces : forces de contact (traction, poussée musculaire, réaction d'un support) et forces à distance (poids/gravitation, magnétisme, force électrostatique).",
        "- Les 4 caractéristiques d'un vecteur force : point d'application, direction (droite d'action), sens (orientation), intensité mesurée en Newtons (N) à l'aide d'un dynamomètre."
      ],
      formulas: [
        "Équation littérale d'une combustion complète : Combustible + Dioxygène -> Dioxyde de carbone + Eau",
        "Équation littérale de la bougie (incomplète) : Paraffine + O2 -> CO2 + H2O + C (suie) + CO (monoxyde)",
        "Vecteur force F : Caractérisé par (Point d'application, Droite d'action, Sens, Intensité en N)",
        "Relation de propagation de la lumière : Rayon rectiligne (ligne droite avec flèche orientée de la source vers le récepteur)"
      ],
      methods: [
        "Identifier réactifs et produits lors d'une réaction de combustion : 1. Repérer la substance consumée (le combustible, ex: gaz butane ou bois). 2. Noter la présence du comburant (le dioxygène de l'air O2). 3. Observer les dégagements : si l'eau de chaux se trouble -> présence de dioxyde de carbone (CO2) ; si de la buée apparaît -> présence de vapeur d'eau (H2O) ; si un dépôt noir se forme -> formation de carbone libre (C). 4. Écrire l'équation littérale sous la forme : Réactifs -> Produits.",
        "Représenter un vecteur force à l'échelle : 1. Identifier le point de contact ou centre de gravité où s'applique la force. 2. Tracer la droite d'action (horizontale, verticale ou oblique). 3. Orienter la flèche dans le sens du mouvement provoqué. 4. Déterminer la longueur de la flèche selon l'échelle choisie (ex: échelle 1 cm pour 10 N ; pour une force de 30 N, tracer un segment de 3 cm).",
        "Identifier le mode de transfert de chaleur : 1. Si le transfert a lieu dans un métal ou solide sans matière en mouvement -> conduction. 2. S'il s'agit d'un liquide qui bout ou de l'air chaud qui monte -> convection. 3. S'il s'agit de la chaleur ressentie à distance d'un feu ou des rayons du soleil -> rayonnement."
      ]
    },

    // =========================================================================
    // MODULE IV : ÉDUCATION À LA SANTÉ
    // =========================================================================

    // -------------------------------------------------------------------------
    // SÉQUENCE 11 & 12 : SANTÉ DE LA REPRODUCTION, PUBERTÉ, IST ET PRATIQUES NÉFASTES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch7",
      lessonNumber: 7,
      title: "Santé de la reproduction, puberté, IST et prévention des pratiques néfastes",
      pages: [25, 32],
      topics: [
        "La puberté et le développement sexuel :",
        "- Définition : période de transition biologique, morphologique et psychologique marquant le passage de l'enfance à l'adolescence et l'acquisition de la maturité sexuelle.",
        "- Caractères sexuels primaires (présents dès la naissance) : verge/pénis et testicules chez le garçon ; vulve et organes internes chez la fille.",
        "- Caractères sexuels secondaires (apparaissant à la puberté) :",
        "  * Chez le garçon : développement musculaire et de la carrure, mue de la voix (devenue plus grave), développement de la pilosité (aisselles, pubis, barbe/menton), élargissement du pénis et des testicules, premières éjaculations nocturnes de sperme.",
        "  * Chez la fille : développement des seins, élargissement du bassin, pilosité aux aisselles et au pubis, survenue des premières règles ou menstruations.",
        "Anatomie et physiologie des appareils génitaux humains :",
        "- Appareil génital masculin : testicules (producteurs de spermatozoïdes et de testostérone), épididymes et canaux déférents (voies spermatiques), prostate et vésicules séminales (sécrétion du liquide séminal nourrissant les gamètes), urètre et pénis (organe d'accouplement).",
        "- Appareil génital féminin : ovaires (production cyclique des ovules et des hormones œstrogènes/progestérone), trompes de Fallope (lieu habituel de la fécondation), utérus (organe creux musclé assurant la nidation et la gestation de l'embryon), vagin (organe de copulation et d'accouchement).",
        "Fécondation, grossesse et gémellité :",
        "- Fécondation : fusion dans la trompe d'un spermatozoïde et d'un ovule mûr, donnant la cellule-œuf (zygote).",
        "- Nidation : implantation de la cellule-œuf divisée dans la muqueuse utérine (endomètre). Si l'implantation a lieu dans la trompe, il s'agit d'une grossesse extra-utérine très dangereuse.",
        "- Durée de la gestation humaine : 9 mois (environ 38 à 40 semaines) se subdivisant en période embryonnaire (mise en place des organes) puis période fœtale.",
        "- Différence vrais jumeaux (monozygotes, même ovule et même spermatozoïde, même placenta, même sexe et ressemblance parfaite) versus faux jumeaux (dizygotes, deux ovules fécondés par deux spermatozoïdes distincts, deux placentas, sexes pouvant différer).",
        "Grossesses précoces et conséquences chez les adolescentes :",
        "- Grossesse précoce : survenant avant l'âge de 19 ans chez une adolescente dont l'organisme n'a pas atteint la pleine maturité physique.",
        "- Facteurs favorisants : ignorance, absence d'éducation sexuelle, manque de dialogue familial, viols, mariages précoces forcés.",
        "- Conséquences dramatiques : déscolarisation précoce, complications obstétricales sévères (dystocies, fistules obstétricales, hémorragies, décès en couches), risques d'avortements clandestins clandestins mortels, précarité sociale et abandon de nouveau-nés.",
        "Pratiques culturelles néfastes à la santé de reproduction :",
        "- Mutilations génitales féminines (MGF) : ablation partielle ou totale des organes génitaux externes (excision du clitoris, infibulation) entraînant hémorragies mortelles, tétanos, infections chroniques, douleurs lors des rapports et complications d'accouchement.",
        "- Repassage des seins : écrasement des bourgeons mammaires à l'aide d'objets chauds provoquant abcès, brûlures, déformations et incapacité d'allaitement.",
        "- Mariages d'enfants forcés, lévirat (obligation pour la veuve d'épouser le frère du défunt mari), sororat.",
        "Infections Sexuellement Transmissibles (IST) et VIH/SIDA :",
        "- Gonococcie (blennorragie / chaude-pisse) : due à la bactérie gonocoque (Neisseria gonorrhoeae) ; brûlures intenses à la miction et pus chez l'homme ; souvent asymptomatique chez la femme mais cause de stérilité par salpingite.",
        "- Syphilis : due à la bactérie Tréponème pâle (Treponema pallidum) ; chancre d'inoculation indolore, puis éruptions, atteintes tardives viscérales et neurologiques graves.",
        "- Chlamydiose : due à la bactérie Chlamydia trachomatis, 1ère cause mondiale de stérilité tubaire féminine.",
        "- Hépatites virales (notamment hépatite B, VHB) : transmises par voies sexuelle et sanguine, pouvant évoluer en cirrhose et cancer primitif du foie.",
        "- VIH/SIDA : virus de l'immunodéficience humaine détruisant les lymphocytes CD4 et les défenses immunitaires.",
        "- Moyens préventifs : abstinence, fidélité mutuelle avec partenaires dépistés, port systématique et correct du préservatif, dépistage régulier, hygiène intime rigoureuse."
      ],
      formulas: [
        "Cycle menstruel de référence : 28 jours | Date d'ovulation théorique = Jour 14 (ou 14 jours avant les règles suivantes)",
        "Règle de protection contre les IST et grossesses non désirées : Méthode du triple A (Abstinence, Bonne fidélité, Préservatif systématique)",
        "Distinction gémellaire : Vrais jumeaux = 1 ovule + 1 spermatozoïde -> 1 cellule-œuf scindée (monozygotes) ; Faux jumeaux = 2 ovules + 2 spermatozoïdes distincts (dizygotes)"
      ],
      methods: [
        "Traiter une situation d'évaluation sur les grossesses en milieu scolaire : 1. Relever le problème sanitaire et social (grossesse précoce, déscolarisation). 2. Identifier les causes sous-jacentes (manque d'information sur la fertilité, rapports sexuels non protégés). 3. Énumérer les conséquences sur la jeune fille (arrêt des études, risques de mortalité maternelle). 4. Préconiser des solutions concrètes : cours d'éducation complète à la sexualité, accès aux méthodes contraceptives et préservatifs, sensibilisation communautaire.",
        "Associer une IST à son agent pathogène et ses manifestations : 1. Si pus urinaire et brûlures -> gonococcie (gonocoque). 2. Si plaie chancreuse superficielle et indolore -> syphilis (tréponème pâle). 3. Si jaunisse, fatigue intense et urines foncées -> hépatite B virale. 4. Recommander la consultation médicale immédiate en couple et le traitement antibiotique/antiviral complet."
      ]
    },

    // -------------------------------------------------------------------------
    // SÉQUENCE 13 : ALIMENTATION ÉQUILIBRÉE ET MALADIES NUTRITIONNELLES
    // -------------------------------------------------------------------------
    {
      id: "svt-ch8",
      lessonNumber: 8,
      title: "Alimentation équilibrée et maladies nutritionnelles",
      pages: [33, 36],
      topics: [
        "Aliments simples et composés :",
        "- Aliments simples : aliments constitués d'une seule catégorie de molécules nutritives (eau, sels minéraux, glucides, lipides, protides, vitamines).",
        "- Aliments composés : aliments constitués d'un mélange de plusieurs aliments simples (ex: pain, viande, haricot, igname).",
        "- Exemple du lait : le lait de vache entier est un aliment composé complet car il réunit toutes les catégories d'aliments simples (protéines: caséine, albumine ; glucides: lactose ; lipides: crème/matières grasses ; minéraux: calcium, fer, zinc ; vitamines: A, B, C, D ; eau).",
        "Les trois grands groupes fonctionnels d'aliments :",
        "1. Aliments bâtisseurs ou constructeurs (riches en protides et calcium) : indispensables à la fabrication de nouvelles cellules, à la croissance et à la réparation tissulaire (viandes, poissons, œufs, lait, soja, haricots, arachides).",
        "2. Aliments énergétiques (riches en glucides et lipides) : fournissent l'énergie mécanique et calorifique pour le travail musculaire et le maintien de la température corporelle (céréales: riz, maïs, mil ; tubercules: igname, manioc ; sucres ; huiles végétales, beurre).",
        "3. Aliments protecteurs et fonctionnels (riches en vitamines, sels minéraux, fibres et eau) : renforcent le système immunitaire, protègent l'organisme contre les infections et régulent le transit (fruits: mangue, orange, papaye ; légumes verts: épinard, feuille de manioc, tomate, carotte).",
        "Définition d'une ration alimentaire équilibrée : apport journalier couvrant exactement les besoins énergétiques, plastiques et régulateurs de l'organisme, associant sans excès ni carence des aliments des 3 groupes au cours d'un même repas.",
        "Maladies nutritionnelles par carence ou par excès :",
        "- Le Kwashiorkor : maladie de carence protidique sévère survenant chez le jeune enfant lors d'un sevrage brutal sans apport d'aliments de croissance (nourri exclusivement de bouillie de manioc ou maïs pauvre en protéines) ; symptômes : œdèmes (ventre gonflé, pieds enflés), fonte musculaire, cheveux cassants décolorés/roux, lésions cutanées squameuses, apathie et tristesse.",
        "- Le Marasme nutritionnel : dénutrition globale par manque sévère d'aliments énergétiques (glucides et lipides) et de calories ; symptômes : amaigrissement extrême (l'enfant n'a que la peau sur les os, perte jusqu'à 60% du poids normal), visage de vieillard, yeux enfoncés dans les orbites, absence totale d'œdèmes.",
        "- Le Rachitisme : carence en vitamine D et en calcium, aggravée par un défaut d'exposition au soleil ; symptômes : os mous et déformés, jambes arquées en 'O' ou en 'X', bourrelets aux poignets et chevilles, thorax déformé.",
        "- L'Obésité : maladie nutritionnelle par apport calorique excessif (suralimentation en sucres raffinés et corps gras associée à la sédentarité) ; complications : diabète de type 2, hypertension artérielle, athérosclérose, infarctus du myocarde, arthrose articulaire."
      ],
      formulas: [
        "Trépied d'une alimentation équilibrée = Aliments Bâtisseurs (protides) + Aliments Énergétiques (glucides, lipides) + Aliments Protecteurs (vitamines, minéraux, eau)",
        "Diagnostic différentiel pédiatrique : Ventre ballonné avec œdèmes infiltrés = Kwashiorkor (carence en protéines) ; Squelette saillant sans œdème = Marasme (carence calorique globale)",
        "Équilibre de la ration : Dépenses caloriques (activité physique + métabolisme) = Apports caloriques de la ration"
      ],
      methods: [
        "Composer un menu familial équilibré à base de produits locaux : 1. Choisir une base d'aliment énergétique (ex: riz local, pâte de maïs ou igname bouillie). 2. Associer une portion d'aliment bâtisseur (poisson fumé, poulet, œuf, ou pâte d'arachide/haricot). 3. Compléter par un aliment protecteur (sauce aux feuilles d'épinards, tomates fraîches, suivi d'un fruit de saison comme une orange ou une mangue). 4. Boire de l'eau potable.",
        "Identifier une pathologie nutritionnelle à partir de signes cliniques : 1. Examiner l'état de maigreur et la présence d'œdèmes. 2. Si l'enfant présente des œdèmes aux pieds et au visage, des plaies cutanées et des cheveux décolorés -> Kwashiorkor (recommander un apport urgent en protéines: lait, œufs, purée de poisson). 3. Si l'enfant est décharné sans œdème -> Marasme (réintroduire progressivement une alimentation riche en énergie). 4. Si déformation des os des membres inférieurs -> Rachitisme (apport en calcium et exposition au soleil du matin)."
      ]
    },

    // =========================================================================
    // MODULE V : ÉDUCATION À L'ENVIRONNEMENT ET DÉVELOPPEMENT DURABLE
    // =========================================================================

    // -------------------------------------------------------------------------
    // SÉQUENCE 14 & 15 : POLLUTION DE L'EAU, DE L'AIR ET GESTION DURABLE
    // -------------------------------------------------------------------------
    {
      id: "svt-ch9",
      lessonNumber: 9,
      title: "Pollution de l'eau, de l'air et gestion durable de l'environnement",
      pages: [37, 42],
      topics: [
        "Critères et qualités d'une eau potable :",
        "- L'eau potable est une eau saine dont la consommation ne présente aucun danger pour l'organisme.",
        "- Propriétés organoleptiques et sanitaires : limpide, incolore, inodore, fraîche, de goût agréable, exempte de particules toxiques et dépourvue de micro-organismes pathogènes.",
        "Sources et vecteurs de pollution de l'eau :",
        "- Rejets d'eaux usées domestiques non traitées et de matières fécales (défécation à l'air libre contaminant marigots et puits).",
        "- Déversements industriels de métaux lourds (plomb, mercure, cadmium) et produits chimiques.",
        "- Ruissellement agricole d'engrais azotés (nitrates) et pesticides toxiques infiltrant la nappe phréatique.",
        "- Pollution accidentelle par hydrocarbures : marées noires en mer décimant le plancton, les poissons, les oiseaux marins et la faune littorale.",
        "Maladies hydriques majeures :",
        "- La fièvre typhoïde : causée par la bactérie Bacille d'Eberth (Salmonella typhi).",
        "- Le choléra : toxi-infection intestinale aiguë foudroyante causée par le Vibrion cholérique (Vibrio cholerae).",
        "- La dysenterie amibienne : causée par un protozoaire parasite (Entamoeba histolytica / amibe dysentérique).",
        "Procédés de purification et traitement des eaux :",
        "- En station d'épuration : traitements primaire (dégrillage, dessablage, décantation), secondaire (oxydation biologique par boues activées) et tertiaire (désinfection chimique/UV).",
        "- Techniques d'assainissement et potabilisation à domicile :",
        "  1. La décantation : laisser reposer l'eau trouble pour que les particules solides lourdes tombent au fond, puis transvaser le liquide clair.",
        "  2. La filtration : passer l'eau à travers un filtre à sable, céramique ou tissu propre.",
        "  3. L'ébullition : faire bouillir l'eau à gros bouillons pendant au moins 10 minutes pour détruire tous les germes microbiens vivants.",
        "  4. La javellisation : désinfection chimique à l'aide de quelques gouttes d'eau de Javel par litre d'eau claire, suivie d'un temps de contact de 30 minutes.",
        "Pollution atmosphérique et dérèglements climatiques :",
        "- Composition normale de l'air sec : 78% de diazote (N2), 21% de dioxygène (O2), 1% d'autres gaz (argon 0,93%, dioxyde de carbone 0,04%, vapeur d'eau).",
        "- Polluants atmosphériques majeurs : dioxyde de soufre (SO2), oxydes d'azote (NOx), monoxyde de carbone (CO), particules fines en suspension, gaz fluorés (CFC).",
        "- Conséquences écologiques planétaires :",
        "  * Réchauffement climatique planétaire par renforcement artificiel de l'effet de serre (dû aux rejets massifs de CO2 et CH4).",
        "  * Dégradation de la couche d'ozone protectrice stratosphérique par les CFC, augmentant le rayonnement ultraviolet nocif au sol.",
        "  * Pluies acides : dissolution des oxydes d'azote et de soufre dans les gouttelettes de pluie formant des acides nitrique et sulfurique, provoquant la mort des forêts et l'acidification létale des cours d'eau.",
        "  * Conséquences directes sur la santé : irritations oculaires, affections respiratoires aiguës, asthme, bronchites chroniques, cancers pulmonaires."
      ],
      formulas: [
        "Composition volumique de l'air = 78 % Azote (N2) + 21 % Oxygène (O2) + 1 % Gaz rares et CO2",
        "Formation des pluies acides : Oxydes d'azote/soufre (SO2, NOx) + Humidité atmosphérique (H2O) -> Acide sulfurique (H2SO4) + Acide nitrique (HNO3)",
        "Chaîne d'assainissement de l'eau à domicile : Décantation -> Filtration sur lit filtrant poreux -> Désinfection thermique (Ébullition > 10 min) ou chimique (Javellisation)"
      ],
      methods: [
        "Rendre potable une eau de marigot ou de puits suspecte en milieu rural : 1. Décanter l'eau brute dans un récipient propre pour éliminer les boues en suspension. 2. Filtrer le liquide décanté à travers un tissu propre ou un filtre à sable. 3. Désinfecter : soit par ébullition soutenue pendant 10 minutes, soit en ajoutant 3 à 4 gouttes d'eau de Javel claire par litre d'eau. 4. Conserver l'eau traitée dans une cruche ou un canari propre muni d'un couvercle hermétique et utiliser une louche réservée.",
        "Analyser les impacts environnementaux d'une zone industrielle polluée : 1. Identifier les rejets atmosphériques (fumées de cheminées riches en SO2, NOx, CO2). 2. Identifier les rejets liquides dans les marigots locaux. 3. Dégager les conséquences sur les populations (maladies respiratoires, maladies hydriques, cancers cutanés) et la végétation (dépérissement des forêts par les pluies acides). 4. Proposer des mesures correctives : installation obligatoire de filtres sur cheminées, construction de stations d'épuration des rejets usines, délocalisation des décharges sauvages."
      ]
    }
  ]
} as const;

export function findSvt6eChapters(query: string, limit = 3): Chapter[] {
  const q = query.toLowerCase();
  const words = q.split(/[\s,.'";:?!-]+/).filter(w => w.length > 2);

  const scored = svt6eKnowledgeBase.chapters.map(ch => {
    let score = 0;
    const titleLower = ch.title.toLowerCase();

    for (const w of words) {
      if (titleLower.includes(w)) score += 10;
      for (const t of ch.topics) {
        if (t.toLowerCase().includes(w)) score += 3;
      }
      for (const f of ch.formulas) {
        if (f.toLowerCase().includes(w)) score += 4;
      }
      for (const m of ch.methods) {
        if (m.toLowerCase().includes(w)) score += 3;
      }
    }

    return { ch, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.ch as unknown as Chapter);
}

export function buildSvt6eContext(query: string): string {
  const matches = findSvt6eChapters(query);
  if (matches.length === 0) {
    return "Aucun chapitre de SVT 6ème n'a pu être associé directement à cette requête.";
  }

  let ctx = `=== CONTEXTE LE PROF : SCIENCES DE LA VIE ET DE LA TERRE (SVTEEHB) 6ÈME ===\n`;
  for (const ch of matches) {
    ctx += `\n[Chapitre / Leçon] : ${ch.title} (ID: ${ch.id})\n`;
    ctx += `[Notions clés & Règles scientifiques] :\n`;
    for (const t of ch.topics) {
      ctx += `  - ${t}\n`;
    }
    if (ch.formulas.length > 0) {
      ctx += `[Formules & Constantes indispensables] :\n`;
      for (const f of ch.formulas) {
        ctx += `  * ${f}\n`;
      }
    }
    if (ch.methods.length > 0) {
      ctx += `[Méthodes de résolution étape par étape] :\n`;
      for (const m of ch.methods) {
        ctx += `  > ${m}\n`;
      }
    }
  }

  return ctx;
}
