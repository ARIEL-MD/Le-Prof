/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SVT SECONDE C
 * Source : Mon École à la Maison — Ministère de l'Éducation Nationale et de l'Alphabétisation (Côte d'Ivoire)
 * Thèmes : 
 * - La structure géologique de la Côte d'Ivoire et le devenir des roches magmatiques
 * - Les relations au sein d'un écosystème et l'influence de l'Homme sur l'environnement
 * - La reproduction de la cellule
 * - La nutrition minérale de la plante verte
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  pages?: [number, number] | readonly [number, number];
  topics: string[] | readonly string[];
  formulas: string[] | readonly string[];
  methods: string[] | readonly string[];
};

export const svt2ndeCKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVT 2nde C",
  version: "1.0.0",
  source: "Mon École à la Maison — Côte d'Ivoire École Numérique / MENA",
  level: "Seconde C",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "La structure géologique de la Côte d'Ivoire",
      topics: [
        "Les deux grands ensembles géologiques de Côte d'Ivoire : le socle cristallin (97,5% du territoire) et le bassin sédimentaire côtier (2,5% du territoire)",
        "Le socle cristallin précambrien (4000 à 540 Ma) : subdivisé en deux domaines par la faille majeure de Sassandra",
        "Le domaine archéen (Kéniéma-Man) : situé à l'Ouest de la faille de Sassandra, région montagneuse de Man, très accidenté et plus ancien (4000 à 2500 Ma, Précambrien inférieur, cycles léonnien et libérien) ; roches dominantes : gneiss, quartzites ferrugineux, migmatites, pyroxénites, charnockites, granites ; métamorphisme méso à catazonal ; plis à Man",
        "Le domaine protérozoïque (Baoulé-Mossi ou Birrimien) : situé à l'Est de la faille de Sassandra (Nord, Centre, Sud-Est), plus étendu et plus récent (2500 à 540 Ma, Précambrien supérieur, cycle éburnéen) ; roches dominantes : granites, granitoïdes, schistes, flyschs, complexes volcano-sédimentaires ; métamorphisme épi à mésozonal ; plis à Tortiya et Fêtèkro",
        "Le bassin sédimentaire côtier : littoral sud de Fresco à Assinie en forme de croissant, datant du Secondaire (Crétacé supérieur) au Quaternaire ; composé de sédiments meubles et roches consolidées (sables, grès, argiles, calcaires, conglomérats) ; traversé par la faille des lagunes (orientation Est-Ouest, pendage Sud, rejet vertical jusqu'à 5000 m)",
        "Accidents géologiques majeurs : failles (cassure avec rejet/déplacement relatif des compartiments : Sassandra, Danané, Monts Trou à Guiglo, Soubré, Haut N'Zi à Bouaké, Dimbokro, faille des lagunes)",
        "Plis géologiques : déformation souple sans rupture sous contrainte tectonique compressive (plis de Man dans l'Archéen ; plis de Tortiya et Fêtèkro dans le Birrimien)",
        "Discordances majeures : superposition de terrains sédimentaires horizontaux sur un socle préalablement plissé et érodé (discordance de base du Birrimien à Odienné, discordance Abronienne à Bondoukou, discordance du Néogène dans le bassin côtier)"
      ],
      formulas: [
        "Répartition géographique : Territoire ivoirien = 97,5% Socle cristallin (Précambrien) + 2,5% Bassin sédimentaire (Crétacé-Quaternaire)",
        "Échelle des temps : Domaine Archéen (4000 Ma - 2500 Ma) / Domaine Protérozoïque (2500 Ma - 540 Ma) / Bassin côtier (135 Ma - actuel)",
        "Caractéristiques d'une faille : Faille = Surface de rupture + Déplacement (rejet vertical/horizontal) des deux blocs",
        "Définition du pli : Déformation ductile sans rupture sous l'effet de contraintes compressives",
        "Définition de la discordance : Surface d'érosion séparant un ensemble plissé ancien d'une couverture sédimentaire plus récente"
      ],
      methods: [
        "Identifier un accident géologique sur une coupe ou carte : 1. Repérer s'il y a rupture de continuité des couches avec décalage de part et d'autre (faille). 2. Repérer si les couches sont ondulées/courbées de manière continue sans cassure (pli anticlinal ou synclinal). 3. Repérer si des strates sédimentaires horizontales reposent sur des couches inclinées/plissées et érodées (discordance).",
        "Localiser les domaines géologiques ivoiriens : 1. Tracer la ligne directrice de la faille de Sassandra orientée NNE-SSW. 2. Tout le secteur Ouest (région de Man) correspond au domaine Archéen. 3. Tout le vaste secteur Est, Centre et Nord correspond au domaine Protérozoïque/Birrimien. 4. La frange littorale Sud étroite de Fresco à Assinie correspond au bassin sédimentaire.",
        "Distinguer l'Archéen du Protérozoïque : 1. Âge : Archéen = 4000 à 2500 Ma (plus ancien) vs Protérozoïque = 2500 à 540 Ma. 2. Métamorphisme : méso à catazonal (Archéen) vs épi à mésozonal (Protérozoïque). 3. Relief : montagneux et très accidenté à l'ouest (Man) vs pénéplaine/plateaux au centre-nord."
      ]
    },
    {
      id: "ch2",
      lessonNumber: 2,
      title: "L'altération chimique des roches magmatiques",
      topics: [
        "Composition du granite sain : roche magmatique plutonique grenue, cohérente et dure, formée de trois minéraux essentiels : quartz, feldspaths et micas (mica noir/biotite)",
        "Agent principal de l'altération chimique : l'eau météorique chargée de dioxyde de carbone dissous formant l'acide carbonique : H2O + CO2 <-> H2CO3",
        "Étapes du processus d'altération : infiltration de l'eau dans les diaclases/fissures du massif, hydratation (gonflement du minéral), puis hydrolyse",
        "Mécanisme de l'hydrolyse du feldspath potassique (orthose) : les ions H+ (issus de H2O ou H2CO3) à fort pouvoir polarisant pénètrent le réseau cristallin et expulsent les ions K+ ; la plus petite taille de H+ provoque l'instabilité et l'effondrement de l'édifice cristallin",
        "Devenir des minéraux après altération chimique : le quartz est inaltérable et libère des grains de quartz (sable quartzeux) ; les feldspaths et micas s'hydrolysent pour former des minéraux argileux (kaolinite, chlorite) par recombinaison d'alumine Al3+ et de silice Si4+ ; les micas noirs libèrent du fer qui s'oxyde en hématite/oxydes de fer Fe2O3 (couleur rouille/jaunâtre) et du magnésium (oxyde/hydroxyde de magnésium) ; K+ forme la potasse KOH",
        "Produit global de l'altération : formation d'une roche résiduelle meuble appelée arène granitique (sable + argile + oxydes de fer)"
      ],
      formulas: [
        "Formation de l'agent d'altération : H2O + CO2 -> H2CO3 (acide carbonique)",
        "Ionisation : H2CO3 -> H+ + HCO3- et H2O -> H+ + OH-",
        "Altération du granite : Granite (Quartz + Feldspath + Micas) + Eau acidifiée -> Arène granitique (Sable quartzeux + Argile kaolinite + Oxydes de fer Fe2O3/FeO + Potasse KOH)",
        "Stabilité minérale : Quartz (résistant/inaltérable) > Micas (moyennement altérables) > Feldspaths (très altérables par hydrolyse)"
      ],
      methods: [
        "Expliquer le mécanisme d'hydrolyse d'un feldspath : 1. Rappeler que l'eau de pluie dissout le CO2 atmosphérique pour donner l'acide carbonique H2CO3 libérant des protons H+. 2. Décrire la substitution : les ions H+ pénètrent dans le réseau du feldspath et expulsent K+. 3. Expliquer que H+ n'occupe pas tout l'espace de K+, d'où l'effondrement du réseau cristallin. 4. Indiquer la recombinaison : Al3+ et Si4+ forment les argiles (kaolinite), K+ forme KOH.",
        "Prédire les produits d'altération d'un minéral granitique : 1. Si quartz -> sable siliceux inaltéré. 2. Si feldspath -> argile (kaolinite) + potasse. 3. Si mica noir -> argile + oxydes de fer (teinte ocre-rouille) + hydroxyde de magnésium."
      ]
    },
    {
      id: "ch3",
      lessonNumber: 3,
      title: "La formation des roches sédimentaires",
      topics: [
        "Classification des roches sédimentaires : roches meubles (sable, graviers, vases) et roches consolidées (argile compactée, grès, calcaire, conglomérat, gypse, charbon)",
        "Origine des roches sédimentaires : détritique (produits d'érosion mécanique/chimique de roches préexistantes : grès, sable), chimique (précipitation : gypse, certains calcaires) et biochimique/organogène (accumulation de matière organique enfouie sous pression/température : charbon)",
        "Sédimentation et granoclassement : dépôt des produits d'altération dans un bassin sédimentaire ; granoclassement vertical (superposition par taille décroissante de bas en haut : graviers au fond, puis sables grossiers, sables fins, limons, argiles) et granoclassement latéral (dépôt horizontal selon la pente et la compétence du courant, argiles fines transportées plus loin en aval)",
        "La diagenèse : ensemble des processus physico-chimiques transformant un sédiment meuble en roche sédimentaire consolidée sous l'action croissante de la pression géostatique et de la température avec la profondeur",
        "Étapes de la diagenèse : 1. Compaction (rapprochement des grains et réduction de la porosité), 2. Déshydratation (expulsion de l'eau interstitielle), 3. Cimentation (précipitation de minéraux dissous tels que silice ou calcite liant les grains entre eux), 4. Recristallisation"
      ],
      formulas: [
        "Ordre chronologique de genèse sédimentaire : Altération -> Érosion -> Transport -> Sédimentation -> Diagenèse",
        "Série granulométrique verticale : Graviers (fond) -> Sables grossiers -> Sables fins -> Limons -> Argiles (sommet)",
        "Diagenèse : Sédiments meubles + Pression + Température -> Roches sédimentaires consolidées (Compaction + Déshydratation + Cimentation)"
      ],
      methods: [
        "Interpréter une expérience de sédimentation (éprouvette ou courant) : 1. Observer la stratification des dépôts du fond vers la surface. 2. Justifier par la masse et la taille : les particules les plus lourdes et volumineuses (graviers, sables grossiers) décantent en premier, les plus légères (argiles) en dernier. 3. Conclure au granoclassement vertical.",
        "Décrire la transformation d'un sable en grès : 1. Dépôt des grains de sable siliceux dans un bassin sédimentaire. 2. Enfouissement progressif sous des couches successives entraînant une augmentation de la pression géostatique. 3. Compaction et expulsion de l'eau interstitielle. 4. Précipitation d'un ciment minéral (silice ou calcaire) liant les grains : obtention du grès consolidé."
      ]
    },
    {
      id: "ch4",
      lessonNumber: 4,
      title: "La formation des roches métamorphiques",
      topics: [
        "Définition du métamorphisme : transformation minéralogique et structurale d'une roche préexistante (magmatique, sédimentaire ou métamorphique) à l'état solide sous l'effet des variations de pression et de température",
        "Facteurs du métamorphisme : gradient géothermique (augmentation de la température avec la profondeur : ~10°C / 100 m à 30°C / km) et pression lithostatique/orientée (augmentant avec l'épaisseur des terrains sus-jacents)",
        "Structures caractéristiques des roches métamorphiques :",
        "- Schistosité : disposition des minéraux en feuillets parallèles et plans de clivage faciles (ex: schiste à séricite formé à 250°C, 2500 m, 1,5 à 9 kbar)",
        "- Foliation : couches parallèles bien soudées avec alternance de lits minéraux clairs (quartz, feldspath) et sombres (micas, amphiboles) sans séparation aisée (ex: micaschiste formé à 300°C, 3000 m)",
        "- Rubanement : alternance de bandes claires et sombres épaisses, plissées ou sinueuses due à un début d'écoulement plastique à très haute température et pression (ex: gneiss formé entre 300 et 700°C, 4000 à 7000 m)",
        "Migmatites : roches mixtes formées à la limite du métamorphisme et du magmatisme par début de fusion partielle (anatexie à partir de 740°C et 7400 m de profondeur)"
      ],
      formulas: [
        "Séquence métamorphique argileuse : Argile (sédimentaire) -> Schiste (250°C) -> Micaschiste (300°C) -> Gneiss (300-700°C) -> Migmatite (740°C) -> Magma d'anatexie (>740°C)",
        "Gradient moyen d'enfouissement : T = T0 + 10°C / 100m ; Pression croissante avec la profondeur (1,5 à 9 kbar pour schistes verts)"
      ],
      methods: [
        "Déterminer le type de structure métamorphique d'un échantillon : 1. Si la roche se débite facilement en feuillets fins et plats -> schistosité (schiste). 2. Si elle présente une alternance serrée de lits clairs et sombres soudés -> foliation (micaschiste). 3. Si les bandes alternées claires/sombres sont plissées, épaisses et sinueuses -> rubanement (gneiss).",
        "Expliquer l'effet combiné de la température et de la pression : 1. La température élevée ramollit les réseaux cristallins et favorise les recristallisations. 2. La pression lithostatique et orientée aplatit et réoriente les minéraux perpendiculairement à la contrainte majeure."
      ]
    },
    {
      id: "ch5",
      lessonNumber: 5,
      title: "Le devenir des roches métamorphiques",
      topics: [
        "Double devenir des roches métamorphiques selon leur position géodynamique :",
        "1. Évolution en surface par surrection/érosion : les roches métamorphiques qui affleurent subissent l'altération chimique (eau, climat) et l'érosion physique pour donner des sédiments (le schiste donne l'argile, le micaschiste des matériaux argilo-sableux, le gneiss donne une arène granitique) ; ces sédiments subissent la diagenèse pour reformer des roches sédimentaires",
        "2. Évolution en profondeur par enfouissement continu : sous des températures supérieures à 740°C et de fortes pressions en présence d'eau, la roche subit une fusion partielle appelée anatexie, formant un magma d'anatexie de composition granitique",
        "Recristallisation magmatique : le magma d'anatexie en refroidissant lentement en profondeur cristallise pour donner des roches magmatiques plutoniques (granite d'anatexie)",
        "Le cycle général des roches : Magma -(cristallisation)-> Roches magmatiques -(altération/érosion/diagenèse)-> Roches sédimentaires -(enfouissement/métamorphisme)-> Roches métamorphiques -(anatexie/fusion)-> Magma"
      ],
      formulas: [
        "Cycle des roches : Magma <-> Roches magmatiques <-> Roches sédimentaires <-> Roches métamorphiques",
        "Fusion d'anatexie : Roche métamorphique + T >= 740°C + Forte pression + Eau -> Magma d'anatexie",
        "Altération de surface : Schiste -> Argile ; Micaschiste -> Argilo-sableux ; Gneiss -> Arène granitique"
      ],
      methods: [
        "Schématiser et commenter le cycle des roches : 1. Placer les 4 pôles : Magma, Roches magmatiques, Roches sédimentaires, Roches métamorphiques. 2. Relier Magma à Roche magmatique par 'Cristallisation / Refroidissement'. 3. Relier toute roche exposée en surface aux Roches sédimentaires par 'Altération + Érosion + Transport + Sédimentation + Diagenèse'. 4. Relier toute roche enfouie aux Roches métamorphiques par 'Métamorphisme (Pression + Température)'. 5. Relier les Roches métamorphiques profondes au Magma par 'Fusion / Anatexie'.",
        "Expliquer la formation du magma d'anatexie : 1. Préciser le contexte d'enfouissement profond en zone instable (orogenèse). 2. Citer les seuils physiques : température dépassant 740°C sous fortes pressions en présence d'eau. 3. Décrire le passage de la migmatite au liquide magmatique de composition granitique."
      ]
    },
    {
      id: "ch6",
      lessonNumber: 6,
      title: "Les relations entre les êtres vivants dans un écosystème",
      topics: [
        "Relations interspécifiques au sein d'un écosystème : interactions entre individus d'espèces différentes, principalement d'ordre alimentaire (trophique)",
        "Chaîne alimentaire : suite ordonnée d'êtres vivants dans laquelle chacun mange celui qui le précède et est mangé par celui qui le suit",
        "Niveaux trophiques : 1er maillon = Producteurs primaires (plantes vertes autotrophes synthétisant la matière organique) ; 2e maillon = Consommateurs de 1er ordre C1 (phytophages/herbivores) ; 3e maillon = Consommateurs de 2e ordre C2 (carnivores primaires) ; maillons supérieurs = Consommateurs de 3e ordre C3 (super-prédateurs)",
        "Décomposeurs : micro-organismes du sol (bactéries, champignons) dégradant la matière organique morte (cadavres, excréments) en éléments minéraux solubles réutilisables par les producteurs",
        "Réseau trophique : ensemble de chaînes alimentaires reliées entre elles par des maillons communs dans un biotope",
        "Pyramides écologiques : pyramide des biomasses (masse totale de matière vivante par unité de surface en g/m2) et pyramide des nombres ; décroissance systématique de la base vers le sommet due aux pertes énergétiques (respiration, chaleur, travail) et excréments",
        "Cycle de la matière et flux d'énergie : le transfert de matière est cyclique (pas de perte globale grâce aux décomposeurs), tandis que le flux d'énergie est ouvert, unidirectionnel et décroissant à chaque échelon",
        "Relations intraspécifiques et sociétés animales : regroupement durable d'individus de la même espèce avec reconnaissance mutuelle, communication et division du travail",
        "Société non hiérarchisée (les termites) : castes morphologiques fixées dès la naissance (couple royal reproducteur, soldats pour la défense, ouvriers pour la récolte, la nutrition et la construction du nid), aucun chef n'exerce d'autorité",
        "Société hiérarchisée (les babouins) : dimorphisme sexuel, statut non inné acquis par confrontations avec mâle dominant, organisation spatiale en déplacement (mâles subordonnés devant et derrière, dominants sur les côtés, femelles et petits protégés au centre)",
        "Modes de communication intraspécifique : signaux visuels, sonores (cris, grognements), chimiques (phéromones d'alarme, de balisage, sexuelles), tactiles et alimentaires"
      ],
      formulas: [
        "Règle de chaîne trophique : Végétal autotrophe (Producteur) -> Herbivore (C1) -> Carnivore I (C2) -> Carnivore II (C3) -> Décomposeurs",
        "Rendement écologique de biomasse : Biomasse(Niveau N+1) << Biomasse(Niveau N) (Pertes par respiration, excrétion, chaleur)",
        "Conservation de la matière : Matière organique des cadavres -(Décomposeurs)-> Sels minéraux -(Producteurs)-> Nouvelle biomasse"
      ],
      methods: [
        "Construire une chaîne alimentaire ou décomposer un réseau trophique : 1. Identifier le producteur primaire chlorophyllien et le placer en première position. 2. Repérer les herbivores consommateurs primaires consommant le végétal ('est mangé par' -> flèche). 3. Ordonner les prédateurs successifs selon leurs proies. 4. Associer les décomposeurs au recyclage de tous les maillons.",
        "Construire une pyramide des biomasses ou des nombres : 1. Choisir une échelle adaptée (ex: 1 cm pour 1000 individus ou 100 g/m2). 2. Dessiner des rectangles horizontaux centrés de hauteur constante (ex: 1,5 cm) et de longueur proportionnelle à la valeur. 3. Empiler de bas en haut : Producteurs, C1, C2, C3.",
        "Comparer société de termites et société de babouins : 1. Termites = société non hiérarchisée, rôles déterminés génétiquement/morphologiquement dès la naissance. 2. Babouins = société hiérarchisée, hiérarchie acquise par des luttes et dépendante de l'âge/force."
      ]
    },
    {
      id: "ch7",
      lessonNumber: 7,
      title: "Le changement climatique",
      topics: [
        "Causes anthropiques du dérèglement climatique : utilisation massive de combustibles fossiles (charbon, pétrole, gaz naturel) depuis la révolution industrielle de 1870, déforestation tropicale par le feu, émissions agricoles de méthane (riziculture inondée, digestion des ruminants), utilisation de CFC",
        "Mécanisme physique de l'effet de serre : phénomène naturel indispensable maintenant la Terre à +15°C (sans lui, température moyenne de -20°C rendant la vie impossible) ; les gaz à effet de serre (vapeur d'eau H2O, dioxyde de carbone CO2, méthane CH4, protoxyde d'azote N2O, ozone O3) absorbent et renvoient vers le sol le rayonnement infrarouge réémis par la surface terrestre",
        "Amplification artificielle de l'effet de serre : l'augmentation rapide du CO2 atmosphérique (de 290 ppm en 1860 à plus de 370 ppm en 2000) et des autres GES piège un excès d'énergie thermique",
        "Destruction de la couche d'ozone : provoquée par les chlorofluorocarbures (CFC) détruisant l'ozone stratosphérique O3, laissant passer les rayons ultraviolets solaires nocifs",
        "Conséquences globales : hausse globale des températures, fonte des calottes polaires et glaciers de montagne, élévation du niveau des mers, submersion/érosion côtière (ex: Grand-Lahou), multiplication d'événements extrêmes (ouragans, sécheresses, inondations, feux de brousse, perturbations pluviométriques)",
        "Stratégies de lutte et résolutions internationales : transition énergétique vers les énergies renouvelables (solaire, éolien, hydroélectricité, biomasse), reboisement et arrêt de la déforestation, réduction de la consommation fossile, efficacité énergétique des transports et bâtiments, accords internationaux (Protocole de Montréal 1987, Rio 1992/1998, Convention de La Haye)"
      ],
      formulas: [
        "Bilan radiatif : Rayonnement solaire incident (UV, visible) absorbé par le sol -> Réémission terrestre d'Infrarouges (IR) -> Piégeage par les GES (H2O, CO2, CH4, N2O, O3) -> Rétro-rayonnement vers le sol",
        "Température d'équilibre : Sans effet de serre = -20°C ; Avec effet de serre naturel = +15°C ; Anomalie thermique = augmentation corrélée à [CO2]"
      ],
      methods: [
        "Analyser un graphique corrélant température globale et teneur en CO2 : 1. Décrire l'évolution de la concentration de CO2 au fil des décennies (pente faible 1860-1960, puis explosion exponentielle après 1960). 2. Décrire la courbe de variation de température moyenne globale sur la même période. 3. Conclure à la corrélation positive directe : la hausse du CO2 accentue l'effet de serre et réchauffe l'atmosphère.",
        "Classer les actions face au climat en Causes, Conséquences et Solutions : 1. Causes = combustions fossiles, feux de brousse, élevage extensif, CFC. 2. Conséquences = fonte des glaces, montée des eaux, acidification, sécheresses, cyclones. 3. Solutions = reboisement, énergies renouvelables, économie d'énergie, transports propres."
      ]
    },
    {
      id: "ch8",
      lessonNumber: 8,
      title: "L'organisation d'une cellule",
      topics: [
        "La cellule : unité structurale et fonctionnelle fondamentale de tout être vivant",
        "Ultrastructure commune des cellules eucaryotes (animale et végétale) au microscope électronique : membrane plasmique délimitant le cytoplasme (cytosol/hyaloplasme), noyau délimité par une enveloppe nucléaire percée de pores nucléaires contenant le nucléoplasme, la chromatine et le nucléole, ribosomes, réticulum endoplasmique lisse (synthèse lipidique) et granuleux/ergastoplasme (synthèse protéique), dictyosomes formant l'appareil de Golgi (maturation et sécrétion), mitochondries (siège de la respiration cellulaire et production d'énergie ATP), inclusions cytoplasmiques",
        "Organites spécifiques de la cellule animale : centrosome formé de centrioles (organisateur du fuseau mitotique et des asters, cils et flagelles), lysosomes",
        "Organites spécifiques de la cellule végétale : paroi pectocellulosique (squelettique) rigide externe, grande vacuole centrale remplie d'eau et de suc vacuolaire, chloroplastes à chlorophylle (siège de la photosynthèse autotrophe)",
        "Équipement chromosomique cellulaire : ensemble des chromosomes du noyau ; cellules diploïdes (2n, chromosomes en paires homologues dans les cellules somatiques) et cellules haploïdes (n, un seul exemplaire de chaque chromosome dans les gamètes sexuels spermatozoïdes et ovules)"
      ],
      formulas: [
        "Constituants communs = Membrane plasmique + Cytoplasme (Cytosol) + Noyau (Enveloppe + Chromatine + Nucléole) + Mitochondries + Ribosomes + Réticulum endoplasmique + Appareil de Golgi",
        "Spécificité végétale = Paroi pectocellulosique + Chloroplastes + Grande vacuole centrale",
        "Spécificité animale = Centrosome (Centrioles) + Lysosomes (absence de paroi et de chloroplastes)",
        "Formule chromosomique : 2n (cellule diploïde somatique) / n (cellule haploïde gamétique)"
      ],
      methods: [
        "Distinguer une cellule animale d'une cellule végétale au microscope : 1. Rechercher la présence d'une paroi externe épaisse rectangulaire/polyédrique (pectocellulosique) : présente = végétale, absente = animale. 2. Rechercher des chloroplastes et une immense vacuole claire refoulant le noyau en périphérie (végétale). 3. Rechercher des centrioles/centrosome (animale).",
        "Identifier l'état de ploïdie d'une cellule : 1. Compter les exemplaires de chaque chromosome : si les chromosomes sont appariés 2 à 2 par taille et morphologie -> diploïde (2n). 2. Si chaque type n'existe qu'en un seul exemplaire -> haploïde (n)."
      ]
    },
    {
      id: "ch9",
      lessonNumber: 9,
      title: "La division cellulaire (Mitose)",
      topics: [
        "Définition de la mitose : mode de division cellulaire conforme permettant à une cellule mère diploïde (2n) de donner deux cellules filles génétiquement identiques entre elles et à la cellule mère",
        "Chronologie des 4 phases de la mitose : Prophase, Métaphase, Anaphase, Télophase",
        "Prophase : condensation et individualisation progressive des chromosomes dédoublés (constitués de 2 chromatides réunies au centromère), division du centrosome et migration des deux asters aux pôles opposés (calottes polaires chez les végétaux), mise en place du fuseau de division achromatique, disparition de l'enveloppe nucléaire et des nucléoles",
        "Métaphase : condensation chromosomique maximale, alignement précis des centromères des chromosomes sur le plan équatorial du fuseau formant la plaque équatoriale",
        "Anaphase : clivage/scission longitudinale des centromères, raccourcissement des microtubules/fibres du fuseau, séparation des deux chromatides sœurs de chaque chromosome et migration vers les pôles opposés (ascension polaire de deux lots identiques de chromosomes à une seule chromatide)",
        "Télophase : décondensation/déspiralisation des chromosomes en chromatine, reformation des membranes nucléaires autour de chaque lot fils, disparition du fuseau mitotique, cytodiérèse (étranglement médian du cytoplasme chez l'animal ; formation d'une nouvelle paroi pectocellulosique chez le végétal)",
        "Rôles biologiques de la mitose : multiplication des organismes unicellulaires, embryogenèse et croissance par augmentation du nombre de cellules chez les pluricellulaires (méristèmes chez les végétaux), renouvellement des tissus et cellules usées/mortes (peau, hématies, muqueuse intestinale), cicatrisation des plaies, conservation exacte du caryotype et de l'information génétique"
      ],
      formulas: [
        "Bilan mitotique : 1 cellule mère (2n chromosomes à 2 chromatides) -> 2 cellules filles (2n chromosomes à 1 chromatide)",
        "Ordre chronologique : Prophase -> Métaphase -> Anaphase -> Télophase (P-M-A-T)",
        "Ascension polaire : Clivage du centromère + Raccourcissement des fibres polaires -> 2n chromosomes fils monochromatidiens par pôle"
      ],
      methods: [
        "Identifier la phase de mitose sur une micrographie ou un schéma : 1. Si chromosomes visibles dispersés dans le cytoplasme avec fuseau en formation -> Prophase. 2. Si centromères tous alignés sur la ligne médiane équatoriale -> Métaphase. 3. Si deux lots distincts de chromatides simples s'éloignent vers les pôles opposés -> Anaphase. 4. Si deux noyaux se reforment avec étranglement cytoplasmique ou nouvelle paroi -> Télophase.",
        "Schématiser une cellule en mitose pour 2n = 4 : 1. En prophase : dessiner 4 chromosomes à 2 chromatides (2 grandes, 2 petites). 2. En métaphase : aligner les 4 centromères sur le plan équatorial. 3. En anaphase : scinder les centromères et diriger 4 chromatides simples vers le pôle nord et 4 vers le pôle sud. 4. En télophase : 4 chromatides simples enfermées dans chaque nouveau noyau fils."
      ]
    },
    {
      id: "ch10",
      lessonNumber: 10,
      title: "L'évolution de l'équipement chromosomique",
      topics: [
        "Le caryotype : représentation ordonnée de l'ensemble des chromosomes d'une cellule, classés par paires d'homologues selon leur taille décroissante et la position de leur centromère",
        "Caryotype humain normal : 46 chromosomes (23 paires) répartis en 22 paires d'autosomes (chromosomes non sexuels identiques deux à deux) et 1 paire d'hétérochromosomes/gonosomes sexuels (XX chez la femme : 44A + XX ; XY chez l'homme : 44A + XY)",
        "Structure macromoléculaire du chromosome : le nucléofilament (10 nm) est formé d'un enroulement d'ADN autour de protéines basiques appelées histones",
        "Structure de la molécule d'ADN : double hélice bicaténaire (modèle de Watson et Crick), polymère de nucléotides ; chaque nucléotide comprend un acide phosphorique H3PO4, un sucre désoxyribose et une base azotée parmi quatre : Adénine (A), Guanine (G), Cytosine (C), Thymine (T)",
        "Règle de complémentarité et loi de Chargaff : A s'associe à T par 2 liaisons hydrogène faibles ; G s'associe à C par 3 liaisons hydrogène ; rapports stœchiométriques : A = T et G = C, d'où A/T = 1, G/C = 1 et (A+G)/(T+C) = 1",
        "Cycle cellulaire et cinétique du taux d'ADN :",
        "- Interphase : Phase G1 (durée ~8h, quantité d'ADN constante = Q / 7,3 ua, chromosomes à 1 chromatide) -> Phase S de synthèse/réplication (durée ~5h, doublement du taux d'ADN de Q à 2Q / 14,6 ua, duplication de l'ADN en deux chromatides sœurs identiques reliées au centromère) -> Phase G2 (durée ~6h, quantité d'ADN constante = 2Q / 14,6 ua, préparation à la division)",
        "- Mitose (M) : division nucléaire et réduction brutale de la quantité d'ADN de 2Q à Q lors de la séparation des chromatides à l'anaphase",
        "Mécanisme de réplication semi-conservative de l'ADN : ouverture de la double hélice par rupture des liaisons hydrogène sous l'action d'un complexe enzymatique (hélicase / ADN polymérase) ; chaque brin parental sert de matrice pour l'incorporation ordonnée de nucléotides libres complémentaires ; chaque molécule fille conserve un brin ancien et intègre un brin néoformé"
      ],
      formulas: [
        "Égalités de Chargaff : A = T et G = C ; A/T = G/C = (A + G) / (T + C) = 1",
        "Formule chromosomique humaine : Homme = 2n = 44A + XY (46 chr) ; Femme = 2n = 44A + XX (46 chr)",
        "Ploïdie d'espèces usuelles : Gorille 2n=48 ; Oignon 2n=16 ; Drosophile 2n=8 ; Chien 2n=78 ; Maïs 2n=20 ; Riz 2n=24 ; Pomme de terre 2n=48",
        "Quantité d'ADN au cours du cycle : G1 = Q -> S = transition Q vers 2Q -> G2 = 2Q -> Mitose (anaphase) = chute de 2Q à Q"
      ],
      methods: [
        "Analyser un caryotype pour déterminer le sexe et l'espèce : 1. Compter le nombre total de chromosomes et vérifier l'appariement par paires d'homologues (si 46 chr -> espèce humaine). 2. Observer la 23e paire : deux chromosomes de même taille X et X -> sexe féminin ; un grand chromosome X et un petit chromosome Y -> sexe masculin.",
        "Calculer les pourcentages de bases azotées dans un ADN bicaténaire : 1. Poser les égalités A = T et G = C. 2. Utiliser la relation globale : A% + T% + G% + C% = 100%, d'où 2A% + 2G% = 100% et A% + G% = 50%. 3. Si un brin unique (monocaténaire viral ø.174) présente A != T ou G != C, en déduire l'absence de complémentarité bicaténaire.",
        "Reconstituer le brin complémentaire d'une séquence d'ADN : 1. Respecter la polarité antiparallèle : face à 3' placer 5' et face à 5' placer 3'. 2. Remplacer systématiquement A par T, T par A, C par G, G par C."
      ]
    },
    {
      id: "ch11",
      lessonNumber: 11,
      title: "L'absorption de l'eau par la plante",
      topics: [
        "Zone d'absorption racinaire : l'absorption de l'eau s'effectue exclusivement au niveau de la zone pilifère des jeunes racines",
        "Structure du poil absorbant : cellule végétale épidermique géante et allongée, pourvue d'une paroi squelettique (pectocellulosique), d'un cytoplasme mince plaqué contre la paroi, d'un noyau excentré et d'une très grande vacuole centrale remplie de suc vacuolaire",
        "États d'hydratation cellulaire en fonction de l'osmolarité du milieu :",
        "- Milieu hypotonique (moins concentré que le suc vacuolaire, ex: eau distillée) : entrée d'eau par osmose, augmentation du volume vacuolaire peu colorée, cytoplasme plaqué contre la paroi -> état de turgescence",
        "- Milieu hypertonique (plus concentré que le suc vacuolaire, ex: eau salée, saccharose concentré) : sortie d'eau de la cellule, rétrécissement de la vacuole intensément colorée, décollement de la membrane plasmique laissant des tractus cytoplasmiques -> état de plasmolyse",
        "- Milieu isotonique : concentrations égales, équilibre dynamique sans flux net d'eau -> aspect cellulaire normal",
        "Mise en évidence de l'osmose : expérience de l'osmomètre de Dutrochet ; l'eau se déplace spontanément à travers une membrane semi-perméable ou hémiperméable du milieu le moins concentré en soluté (hypotonique) vers le milieu le plus concentré (hypertonique)",
        "Loi de la pression osmotique (formule de Van 't Hoff) : force responsable de l'attraction de l'eau : Pos = n * R * C * T (ou Pos = n * R * T * (c / M)) exprimée en atmosphères (atm) ou pascals (Pa)"
      ],
      formulas: [
        "Pression osmotique (Van 't Hoff) : Pos = n * R * C * T",
        "Avec : n = nombre de particules osmotiquement actives après dissociation (n=1 pour solutés non ionisables : glucose, saccharose ; n=2 pour NaCl -> Na+ + Cl- ; n=3 pour CaCl2 -> Ca2+ + 2Cl-)",
        "R = 0,082 L.atm/(mol.K) (constante des gaz parfaits)",
        "C = concentration molaire volumique en mol/L (C = c / M avec c concentration massique en g/L et M masse molaire en g/mol)",
        "T = température absolue en Kelvin : T(K) = t(°C) + 273",
        "Conversion de pression : 1 atm = 10^5 Pa = 1,013.10^5 Pa",
        "Condition de flux osmotique : L'eau se déplace du milieu de plus faible Pos vers le milieu de plus forte Pos jusqu'à égalisation des pressions"
      ],
      methods: [
        "Calculer la pression osmotique d'une solution : 1. Déterminer la température absolue T = t(°C) + 273 K. 2. Identifier le soluté et son coefficient d'ionisation n (ex: n=1 pour le glucose C6H12O6, n=2 pour NaCl). 3. Calculer la concentration molaire C = n_soluté / V ou C = concentration_massique / M. 4. Appliquer la formule Pos = n * R * C * T en atm, puis convertir en Pa si demandé (Pos(Pa) = Pos(atm) * 10^5).",
        "Prédire l'état d'une cellule végétale dans une solution : 1. Calculer la Pos du suc vacuolaire et celle de la solution externe. 2. Si Pos_vacuole > Pos_externe (milieu hypotonique) -> entrée d'eau par osmose, cellule turgescente. 3. Si Pos_vacuole < Pos_externe (milieu hypertonique) -> sortie d'eau, cellule plasmolysée. 4. Si Pos_vacuole = Pos_externe -> milieu isotonique, cellule d'aspect normal."
      ]
    },
    {
      id: "ch12",
      lessonNumber: 12,
      title: "L'influence des sels minéraux sur la croissance de la plante verte",
      topics: [
        "Nécessité des éléments minéraux : la croissance optimale des végétaux requiert des sels minéraux nutritifs dissous (ex: liquide de Knop apportant azote N, phosphore P, potassium K, calcium Ca, magnésium Mg)",
        "Courbe d'action d'un ion minéral isolé (ex: potassium K+) :",
        "1. Zone de carence ou de déficience : doses faibles insuffisantes, la production de matière sèche est faible mais augmente proportionnellement à la concentration",
        "2. Première dose optimale : concentration minimale permettant d'atteindre la production maximale (100%)",
        "3. Zone de tolérance ou de consommation de luxe : concentrations supérieures où la production reste maximale et constante sans profit supplémentaire ni nocivité",
        "4. Seuil de toxicité : concentration exacte à partir de laquelle la production commence à chuter",
        "5. Zone de toxicité : concentrations excessives provoquant le ralentissement, l'inhibition de la croissance voire la mort de la plante",
        "Action conjuguée de plusieurs ions minéraux :",
        "- Synergie : action combinée de deux ions dont l'effet bénéfique mutuel sur la croissance ou l'absorption est supérieur à la somme de leurs effets individuels (ex: potassium et phosphore à doses adéquates ; CaCl2 et Lithium stimulant l'absorption de Rubidium)",
        "- Antagonisme : phénomène par lequel un ion en concentration excessive diminue, ralentit ou inhibe l'absorption ou l'efficacité d'un autre ion (ex: fortes concentrations de Mg2+ inhibant l'action de Ca2+)",
        "- Facteur limitant : élément minéral présent en concentration insuffisante (déficitaire) qui borne et plafonne la croissance de la plante, même si tous les autres ions sont présents en quantités optimales"
      ],
      formulas: [
        "Ordre chronologique des zones sur la courbe d'action : Zone de carence -> Croissance maximale -> Zone de tolérance (consommation de luxe) -> Seuil de toxicité -> Zone de toxicité",
        "Seuil de première dose optimale : Plus petite concentration donnant 100% de rendement",
        "Synergie : Effet(A + B) > Effet(A) + Effet(B)",
        "Antagonisme : Présence de B à forte dose -> Baisse d'efficacité de A"
      ],
      methods: [
        "Analyser une courbe de matière sèche en fonction de la concentration minérale : 1. Découper la courbe en 3 phases principales : phase ascendante (carence/déficience), plateau supérieur constant (tolérance/consommation de luxe), phase descendante (toxicité). 2. Relever la première concentration atteignant le plateau (dose optimale). 3. Relever l'abscisse marquant le début de la chute (seuil de toxicité). 4. Conclure sur le dosage agricole recommandé.",
        "Identifier une synergie ou un facteur limitant : 1. Comparer deux séries de cultures variant en ion A avec deux concentrations différentes en ion B. 2. Si l'optimum atteint avec la faible dose de B plafonne bien en dessous de l'optimum avec la forte dose de B, alors B est le facteur limitant. 3. Si l'adjonction conjointe de A et B multiplie le rendement de façon supérieure aux apports isolés, conclure à une synergie."
      ]
    },
    {
      id: "ch13",
      lessonNumber: 13,
      title: "L'absorption des sels minéraux par la plante verte",
      topics: [
        "Passage des ions minéraux à travers la membrane plasmique des cellules racinaires",
        "La dialyse : diffusion passive de solutés à travers une membrane perméable du milieu le plus concentré (hypertonique) vers le milieu le moins concentré (hypotonique) jusqu'à égalisation des concentrations (isotonie), sans consommation d'énergie",
        "Ultrastructure de la membrane plasmique : mosaïque fluide constituée d'une bicouche phospholipidique, de protéines intégrées (canaux transmembranaires, pompes, perméases) et de protéines périphériques",
        "Mécanismes de transport transmembranaire des solutés :",
        "1. Transport passif (dans le sens du gradient de concentration, sans dépense d'énergie / sans ATP) :",
        "- Diffusion libre / simple : passage direct de molécules liposolubles ou d'eau et de petits ions à travers la bicouche phospholipidique ou par des canaux hydriques/ionophores protéiques ouverts",
        "- Diffusion facilitée : transport d'ions ou solutés par l'intermédiaire de protéines porteuses spécifiques (perméases ou navettes) qui changent de conformation pour transférer le soluté sans consommer d'énergie",
        "2. Transport actif (contre le gradient de concentration, du milieu hypotonique vers le milieu hypertonique) :",
        "Transport nécessitant obligatoirement un apport d'énergie chimique fournie par l'hydrolyse de l'adénosine triphosphate (ATP) en ADP + Pi, opéré par des protéines spécialisées appelées pompes ioniques (ex: pompe Na+/K+, ATPase transmembranaire)"
      ],
      formulas: [
        "Hydrolyse énergétique de l'ATP : ATP -> ADP + Pi + Énergie (E)",
        "Sens des flux passifs (Dialyse) : Milieu hypertonique en soluté -> Milieu hypotonique (sens du gradient de concentration, Delta E = 0)",
        "Sens des flux actifs : Milieu hypotonique en soluté -> Milieu hypertonique (contre le gradient de concentration, requiert ATP)"
      ],
      methods: [
        "Différencier transport passif et transport actif : 1. Comparer les concentrations interne et externe en soluté. 2. Si le déplacement se fait du milieu le plus concentré vers le moins concentré sans consommation d'ATP -> transport passif (diffusion simple par canaux ou facilitée par perméase). 3. Si le déplacement accumule le soluté contre son gradient avec consommation d'ATP -> transport actif par pompe ionique.",
        "Distinguer osmose et dialyse : 1. L'osmose concerne le déplacement du solvant (l'eau) du milieu hypotonique vers hypertonique à travers une membrane hémiperméable. 2. La dialyse concerne la diffusion du soluté (les sels minéraux) du milieu hypertonique vers hypotonique à travers une membrane perméable."
      ]
    },
    {
      id: "ch14",
      lessonNumber: 14,
      title: "Le devenir des substances absorbées par la plante verte",
      topics: [
        "Trajet de l'eau et des sels minéraux absorbés dans la plante : transit horizontal au niveau des racines, puis transit vertical ascendant dans la tige jusqu'aux feuilles",
        "Transit horizontal dans la racine : du poil absorbant à l'endoderme, le gradient de succion osmotique est croissant et l'eau circule par osmose ; après l'endoderme (vers le cylindre central), le gradient de succion est décroissant et l'eau circule par transport actif ; les sels minéraux traversent l'écorce racinaire par transport actif",
        "Constitution et circulation de la sève brute : solution diluée d'eau et de sels minéraux absorbés par les racines ; circule dans un sens strictement ascendant (racine -> tronc/tige -> feuilles) à travers les vaisseaux de bois ou xylème",
        "Forces motrices de l'ascension de la sève brute :",
        "- La poussée racinaire (ou radiculaire) : pression hydrostatique positive développée par l'osmose et le transport actif au niveau de la racine, poussant la sève vers le haut (mise en évidence par la montée de sève au manomètre sur pied de vigne sectionné au printemps)",
        "- L'aspiration foliaire : force d'aspiration dominante créée par la transpiration au niveau des feuilles, créant un appel d'eau continu vers le haut",
        "La transpiration foliaire : rejet d'eau sous forme de vapeur par les feuilles, réalisé à travers des structures spécialisées de l'épiderme appelées stomates",
        "Structure et mécanisme des stomates : composés de deux cellules stomatiques réniformes (cellules de garde) délimitant un orifice central ajustable appelé ostiole ;",
        "- Ouverture de l'ostiole : en présence de lumière ou d'hydratation, la concentration osmotique augmente dans les cellules stomatiques -> entrée d'eau par osmose -> les cellules deviennent turgescentes -> distension de leur paroi mince externe qui tire sur la paroi interne épaissie -> ouverture de l'ostiole et forte transpiration",
        "- Fermeture de l'ostiole : à l'obscurité ou en déficit hydrique -> baisse de concentration -> sortie d'eau -> cellules plasmolysées flasques -> fermeture de l'ostiole et arrêt de la transpiration",
        "Devenir métabolique et sève élaborée : au niveau des feuilles, l'eau et les ions minéraux sont combinés au CO2 grâce à l'énergie lumineuse lors de la photosynthèse pour synthétiser des matières organiques (glucides, acides aminés) ; ces matières organiques dissoutes constituent la sève élaborée",
        "Circulation de la sève élaborée : circule dans les deux sens (ascendant et descendant) à travers les tubes criblés ou phloème, distribuant les nutriments vers les organes consommateurs (bourgeons, fleurs, fruits) et les organes de réserve (tubercules, racines)"
      ],
      formulas: [
        "Composition des sèves : Sève brute = Eau + Sels minéraux (Xylème / Vaisseaux de bois, flux ascendant) ; Sève élaborée = Eau + Matières organiques photosynthétisées (Phloème / Tubes criblés, flux bidirectionnel)",
        "Mécanisme stomatique : Turgescence des cellules de garde -> Ouverture de l'ostiole -> Transpiration active ; Plasmolyse des cellules de garde -> Fermeture de l'ostiole -> Transpiration réduite/nulle",
        "Moteurs de la sève brute : Poussée racinaire (base) + Aspiration foliaire par transpiration stomatique (sommet)"
      ],
      methods: [
        "Décrire et comparer le trajet des deux sèves : 1. Sève brute : absorbée par les racines, transite horizontalement (osmose puis transport actif), monte verticalement dans le xylème sous l'effet de la poussée racinaire et de l'aspiration foliaire, alimente les feuilles. 2. Sève élaborée : fabriquée dans les feuilles par photosynthèse, distribuée dans toute la plante via le phloème (flux ascendant vers bourgeons/fruits, flux descendant vers tiges/racines/tubercules).",
        "Expliquer le mécanisme d'ouverture/fermeture des stomates : 1. Lumière / synthèse de solutés -> augmentation de concentration intra-stomatique. 2. Entrée d'eau par osmose -> turgescence des deux cellules de garde réniformes. 3. La paroi mince externe se gonfle et déforme la paroi interne épaissie -> écartement et ouverture de l'ostiole. 4. À l'obscurité ou stress hydrique : sortie d'eau, plasmolyse, relâchement des parois -> fermeture de l'ostiole."
      ]
    }
  ],
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
  }
} as const;

function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(word => word.length >= 3);
}

export function findSvt2ndeCChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return svt2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = svt2ndeCKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 10;
      if (topicsTokens.includes(token)) score += 4;
      if (formulasTokens.includes(token)) score += 3;
      if (methodsTokens.includes(token)) score += 3;
    }

    return { chapter, score };
  });

  scoredChapters.sort((a, b) => b.score - a.score);

  const matched = scoredChapters
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.chapter as unknown as Chapter);

  return matched.length > 0
    ? matched
    : (svt2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

export function buildSvt2ndeCContext(query: string): string {
  const chapters = findSvt2ndeCChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Niveau : ${svt2ndeCKnowledgeBase.level})\nSource : ${svt2ndeCKnowledgeBase.source}`;
    const topics = `#### NOTIONS CLÉS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES, PRINCIPES ET RELATIONS BIOLOGIQUES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES D'ANALYSE ET PROTOCOLES PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE SVT SECONDE C (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
