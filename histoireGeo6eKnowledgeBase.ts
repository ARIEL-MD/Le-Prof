/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : HISTOIRE ET GÉOGRAPHIE 6ÈME
 * 
 * Sources officielles :
 * - GÉOGRAPHIE 6ème : Manuel de cours et situations d'apprentissage (LEGRE Serge-Hilaire, 2019-2020)
 * - HISTOIRE 6ème : Fascicules officiels Côte d'Ivoire – École Numérique / MENA
 * 
 * Programme officiel national de Côte d'Ivoire (Approche Par Compétences - APC).
 * Fichier 100% autonome : zéro dépendance IA, aucun appel réseau.
 */

export type Chapter = {
  id: string;                // ex: "geo-ch1", "hist-ch1"
  lessonNumber?: number;
  title: string;             // titre exact du chapitre
  pages?: [number, number] | readonly [number, number];  // si connu
  topics: string[] | readonly string[];          // notions abordées, en langage clair
  formulas: string[] | readonly string[];        // toutes les formules/règles opérationnelles du chapitre
  methods: string[] | readonly string[];         // méthodes de résolution étape par étape
};

export const histoireGeo6eKnowledgeBase = {
  name: "LE PROF — Knowledge Base Histoire et Géographie 6ème",
  version: "1.0.0",
  source: "Géographie 6ème (LEGRE Serge-Hilaire 2019-2020) & Histoire 6ème (École Numérique Côte d'Ivoire / MENA)",
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
    // PARTIE 1 : GÉOGRAPHIE 6ÈME
    // THÈME 1 : LES BASES DE L'ÉTUDE DE LA GÉOGRAPHIE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 1 : LA GÉOGRAPHIE ET SON OBJET
    // -------------------------------------------------------------------------
    {
      id: "geo-ch1",
      lessonNumber: 1,
      title: "La géographie et son objet",
      pages: [2, 7],
      topics: [
        "Étymologie du mot géographie : formé de deux mots grecs 'gê' signifiant 'terre' et 'graphein' signifiant 'dessin' ou 'écriture'. Étymologiquement, la géographie est le dessin ou la description de la terre.",
        "Définition moderne de la géographie : science qui décrit et explique les phénomènes physiques, biologiques et humains se manifestant à la surface de la terre et dans l'atmosphère, et analyse les interactions entre l'homme et son milieu de vie.",
        "Objet d'étude de la géographie : la description et l'explication des phénomènes physiques, biologiques et humains à la surface de la terre, ainsi que l'étude de l'atmosphère et des relations homme-nature.",
        "Les trois grandes branches de la géographie :",
        "- Géographie physique : étudie les composantes naturelles du milieu terrestre (relief, climat, sols, hydrographie/cours d'eau, végétation naturelle).",
        "- Géographie humaine : étudie les populations humaines et la démographie (effectifs, natalité, mortalité, composition par âge et sexe, répartition spatiale, modes de vie et d'habitat).",
        "- Géographie économique : étudie les activités productives développées par les hommes pour subvenir à leurs besoins (agriculture, pêche, artisanat, industrie, commerce, transports et services).",
        "Les cinq étapes ordonnées de la démarche du géographe :",
        "1. L'observation : observation directe sur le terrain ou observation indirecte à l'aide de photographies, vues aériennes, cartes ou documents.",
        "2. La localisation : situer avec précision le phénomène dans l'espace géographique à l'aide de repères spatiaux, coordonnées ou points cardinaux.",
        "3. La description : caractériser les formes, grandeurs, agencements et particularités propres aux éléments observés.",
        "4. L'explication : déterminer les causes et facteurs (naturels ou humains) responsables du phénomène ; expliquer le pourquoi et le comment.",
        "5. La comparaison : confronter les faits observés avec d'autres espaces ou milieux pour dégager les similitudes, les contrastes et les lois générales.",
        "Utilité et importance de la géographie : découverte et meilleure connaissance du monde ; instruction et acquisition de repères ; ouverture d'esprit ; compréhension des modes de vie et cultures des autres peuples favorisant la tolérance et la paix ; préparation à la citoyenneté responsable et à la solidarité internationale."
      ],
      formulas: [
        "Étymologie : Géographie = gê (Terre) + graphein (Dessin/Écriture) -> Description raisonnée de la Terre",
        "Objet global = Phénomènes physiques + Phénomènes biologiques + Phénomènes humains à la surface du globe",
        "Classification des branches : Milieu naturel (relief, climat, hydrographie, flore, sols) -> Géographie physique ; Populations (démographie, natalité, migrations) -> Géographie humaine ; Activités de production (agriculture, pêche, artisanat, commerce, industrie) -> Géographie économique",
        "Séquence de la démarche scientifique du géographe : Observation -> Localisation -> Description -> Explication -> Comparaison"
      ],
      methods: [
        "Résoudre une situation d'évaluation sur la définition et l'objet de la géographie : 1. Identifier la discipline (Géographie). 2. Donner la définition exacte (science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la terre). 3. Préciser son objet d'étude (description et explication des rapports d'interaction entre l'homme et son milieu). 4. Citer les composantes de son utilité citoyenne (ouverture d'esprit, instruction, tolérance interculturelle, solidarité internationale).",
        "Classer un élément dans sa branche géographique : 1. Identifier la nature du phénomène. 2. S'il s'agit d'un fait naturel (relief, climat, végétation, rivière) -> classer en géographie physique. 3. S'il s'agit de la population (natalité, recensement, habitat) -> classer en géographie humaine. 4. S'il s'agit d'un travail ou d'une production (pêche, culture du cacao, usine, vente) -> classer en géographie économique.",
        "Mettre en œuvre les cinq étapes de la démarche géographique : 1. Observer : regarder attentivement le document ou le paysage. 2. Localiser : nommer l'endroit précis et ses repères. 3. Décrire : lister les particularités visibles du phénomène. 4. Expliquer : répondre aux questions 'Pourquoi ?' et 'Comment ce phénomène s'est-il produit ?'. 5. Comparer : rapprocher avec une autre zone connue pour relever ressemblances et dissemblances."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 2 : LE RELIEF
    // -------------------------------------------------------------------------
    {
      id: "geo-ch2",
      lessonNumber: 2,
      title: "Le relief",
      pages: [8, 12],
      topics: [
        "Définition du relief : ensemble des inégalités, déformations, creux et bosses observés à la surface de la terre et sur les fonds océaniques.",
        "Les trois grands ensembles de relief :",
        "- La montagne : relief très élevé dont l'altitude dépasse généralement 900 mètres, caractérisé par des versants en fortes pentes raides et séparé par des vallées encaissées. Une chaîne de montagnes est un ensemble continu de montagnes formant un groupe compact.",
        "- Le plateau : relief plus ou moins plat et tabulaire dans lequel les cours d'eau s'écoulent en creusant des vallées (cours d'eau encaissés).",
        "- La plaine : surface presque plane et de basse altitude (généralement comprise entre 0 et 50 mètres) sur laquelle les cours d'eau coulent à fleur de sol, sans creuser de vallées encaissées.",
        "Les six formes élémentaires du relief (petites étendues de terrain) :",
        "- La colline : petite élévation de terre de forme arrondie avec des versants doux.",
        "- La butte : petite élévation de terrain se terminant par un sommet plat ou tabulaire.",
        "- La vallée : creux ou dépression allongée façonnée par le ruissellement de l'eau sur un terrain incliné, dans laquelle coule une rivière ou un fleuve (vallée encaissée ou peu profonde).",
        "- Le talus : rupture de pente, paroi plus ou moins abrupte raccordant deux surfaces planes situées à des altitudes différentes.",
        "- L'interfluve : relief ou espace topographique compris entre deux vallées voisines.",
        "- La cuvette : dépression fermée vers le fond de laquelle les pentes et les eaux convergent de tous les côtés.",
        "Les trois éléments de mesure et de distinction du relief :",
        "- L'altitude : distance verticale séparant un point donné du relief du niveau de référence de la mer (le niveau de la mer est fixé à 0 mètre). L'altitude s'exprime en mètres (m).",
        "- La pente : degré d'inclinaison d'un versant ou terrain par rapport au plan horizontal. Elle s'exprime en degrés (°).",
        "- La dénivellation : différence d'altitude entre deux points donnés d'un relief (ex: entre le sommet et la base, ou entre deux versants)."
      ],
      formulas: [
        "Niveau de la mer = 0 m (niveau de référence altimétrique mondial)",
        "Altitude d'un point = Cote Z mesurée à la verticale au-dessus du niveau 0 m de la mer (en mètres)",
        "Dénivellation D = Altitude_point_haut - Altitude_point_bas = Alt(B) - Alt(A) (en mètres)",
        "Dénivellation relative sur schéma à cotes étagées : D_DE = CE - CD = Alt(E) - Alt(D)",
        "Pente = Angle d'inclinaison du versant par rapport à la ligne d'horizon horizontale (en degrés °)"
      ],
      methods: [
        "Distinguer sans équivoque une plaine d'un plateau : 1. Regarder le profil d'écoulement des rivières. 2. Si les cours d'eau coulent à fleur de sol sans creuser de gorge -> c'est une plaine (altitude faible, 0 à 50 m). 3. Si le terrain est plat mais que les cours d'eau y sont encaissés dans des vallées creusées -> c'est un plateau.",
        "Calculer une dénivellation entre deux points A et B : 1. Relever l'altitude du point le plus élevé (ex: Sommet B = 70 m). 2. Relever l'altitude du point le plus bas (ex: Base A = 50 m). 3. Effectuer la soustraction arithmétique : D = Alt(B) - Alt(A) = 70 - 50 = 20 m. 4. Conclure par une phrase nommant la dénivellation en mètres.",
        "Identifier une forme élémentaire du relief : 1. Sommet arrondi -> colline. 2. Sommet plat -> butte. 3. Dépression drainée par un cours d'eau -> vallée. 4. Dépression circulaire fermée sans exutoire -> cuvette. 5. Paroi reliant deux replats d'altitude inégale -> talus. 6. Bande de terre entre deux vallées adjacentes -> interfluve."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 3 : LE CLIMAT
    // -------------------------------------------------------------------------
    {
      id: "geo-ch3",
      lessonNumber: 3,
      title: "Le climat",
      pages: [13, 20],
      topics: [
        "Définition du climat : état moyen de l'atmosphère dans une région donnée, déterminé à partir d'observations météorologiques régulières sur une longue période (plusieurs décennies) ; succession prévisible des types de temps et des saisons.",
        "Les trois éléments majeurs du climat et leurs instruments de mesure :",
        "- La température : quantité de chaleur contenue dans l'air (alternance de chaleur et de fraîcheur) ; s'exprime en degrés Celsius (°C) ; se mesure à l'aide d'un thermomètre (réservoir de mercure ou alcool et tube de verre gradué).",
        "- Les précipitations : quantité d'eau atmosphérique qui retombe à la surface de la terre en un lieu donné sur une durée précise ; se présentent sous quatre formes : pluie (eau liquide), neige (cristaux de glace ou flocons), grêle (billes de glace pouvant dépasser 500 g), rosée (condensation de la vapeur d'eau en gouttelettes sur la végétation) ; se mesurent en millimètres (mm) à l'aide d'un pluviomètre (entonnoir collecteur et tube gradué). 1 mm d'eau recueillie équivaut à 1 litre d'eau par mètre carré.",
        "- Le vent : déplacement d'une masse d'air sous l'effet des différences de pression atmosphérique ; sa vitesse s'exprime en km/h ou m/s et se mesure à l'aide d'un anémomètre (moulinet à coupelles métalliques) ; sa direction s'observe avec une girouette ou manche à air.",
        "- La pression atmosphérique : poids exercé par la colonne d'air sur la surface terrestre ; se mesure à l'aide d'un baromètre et sert à anticiper les variations du temps.",
        "Les vents régionaux notables : l'harmattan (vent sec et poussiéreux soufflant du nord désertique vers le sud) ; la mousson (vent chaud et humide soufflant de l'océan Atlantique vers l'intérieur du continent) ; les brises de mer et de terre.",
        "Les trois grandes zones climatiques de la planète :",
        "1. La zone chaude (zone intertropicale) : située entre le tropique du Cancer au Nord (23°27' N) et le tropique du Capricorne au Sud (23°27' S). Dominée par de fortes chaleurs constantes et d'abondantes pluies saisonnières. Climats : équatorial, tropical humide, tropical sec, désertique. Deux saisons principales : la saison des pluies et la saison sèche.",
        "2. Les zones tempérées (deux zones : boréale et australe) : situées entre les tropiques et les cercles polaires (cercle polaire arctique à 66°33' N et antarctique à 66°33' S). Climats : océanique, continental, méditerranéen. Quatre saisons bien tranchées : printemps, été, automne, hiver.",
        "3. Les zones froides (zones polaires boréale et australe) : situées entre les cercles polaires et les pôles (Nord et Sud). Climat polaire rigoureux avec températures négatives. Deux saisons : un hiver long et glacial, un été très court et frais.",
        "Le diagramme ombrothermique : graphique mensuel combinant les températures (courbe en °C) et les précipitations (histogrammes en mm), construit d'après la convention d'aridité de Bagnouls et Gaussen (P = 2T)."
      ],
      formulas: [
        "Amplitude thermique annuelle = Température du mois le plus chaud - Température du mois le moins chaud (A = T_max - T_min en °C)",
        "Température moyenne annuelle = (T_1 + T_2 + ... + T_12) / 12 (en °C)",
        "Total pluviométrique annuel = Somme des précipitations des 12 mois = P_1 + P_2 + ... + P_12 (en mm)",
        "Convention d'aridité de Gaussen : P = 2 * T (Échelle : 1 cm pour 25°C et 1 cm pour 50 mm)",
        "Indice de mois sec : Un mois est dit sec si P < 2 * T (la courbe thermique passe au-dessus des barres de pluie)",
        "Indice de mois humide : Un mois est dit humide si P >= 2 * T (les barres de pluie dépassent la courbe de température)"
      ],
      methods: [
        "Calculer l'amplitude thermique à partir d'un relevé météorologique : 1. Examiner la ligne des températures mensuelles. 2. Repérer la valeur maximale T_max et noter le mois correspondant (ex: Février avec 29°C). 3. Repérer la valeur minimale T_min et noter le mois correspondant (ex: Août avec 24,7°C). 4. Poser la soustraction : A = 29 - 24,7 = 4,3°C. 5. Conclure que l'amplitude thermique annuelle de la station est de 4,3°C.",
        "Construire un diagramme ombrothermique selon les normes du programme : 1. Tracer l'axe horizontal des 12 mois de janvier à décembre (1 cm = 1 mois). 2. Tracer l'axe vertical gauche pour les précipitations P en mm (1 cm = 50 mm). 3. Tracer l'axe vertical droit pour les températures T en °C (1 cm = 25°C, respectant P = 2T). 4. Dessiner les colonnes bleues pour chaque mois selon les précipitations. 5. Placer les points de température au milieu de chaque mois et les relier par une courbe rouge continue. 6. Colorier en jaune la surface où T > 2P (période sèche) et en bleu celle où P >= 2T (période pluvieuse).",
        "Identifier une zone climatique sur un globe ou une carte : 1. Vérifier la latitude du lieu. 2. Si le lieu est compris entre les tropiques du Cancer et du Capricorne (ex: Côte d'Ivoire) -> Zone chaude / intertropicale. 3. S'il est compris entre un tropique et un cercle polaire (ex: France, Canada tempéré) -> Zone tempérée. 4. S'il est au-delà d'un cercle polaire vers les pôles (ex: Sibérie arctique, Groenland) -> Zone froide."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 4 : L'INTERRELATION ENTRE LE SOL, LE CLIMAT ET LA VÉGÉTATION
    // -------------------------------------------------------------------------
    {
      id: "geo-ch4",
      lessonNumber: 4,
      title: "L'interrelation entre le sol, le climat et la végétation",
      pages: [21, 26],
      topics: [
        "Définition de la végétation : ensemble des espèces végétales (arbres, arbustes, herbes, lianes) qui se développent spontanément ou sont cultivées dans une région donnée.",
        "Définition du sol : couche superficielle et meuble de la croûte terrestre résultant de l'altération de la roche sous-jacente et de l'apport de matières organiques, sur laquelle pousse la végétation et vivent les organismes.",
        "Les deux grands types de végétation en Côte d'Ivoire :",
        "- La forêt : formation végétale caractérisée par la prédominance absolue des arbres par rapport aux herbes (plus d'arbres que d'herbes). On distingue la forêt dense humide (Sud et Ouest) et la forêt claire (Centre).",
        "- La savane : formation végétale caractérisée par la prédominance des herbes par rapport aux arbres (plus d'herbes que d'arbres). On distingue la savane arbustive et arborée (Centre) et la savane herbeuse (Nord).",
        "Les trois principaux types de sols en Côte d'Ivoire :",
        "- Les sols ferralitiques : situés au Sud et à l'Ouest ; épais, très fertiles, riches en humus, de couleur rougeâtre caractéristique ; adaptés aux cultures pérennes industrielles : cacaoyer, caféier, palmier à huile, hévéa, cocotier, bananier.",
        "- Les sols ferrugineux : situés au Centre et au Nord ; moins épais, moins fertiles, de couleur grise ou ocre ; adaptés aux cultures annuelles et vivrières : coton, canne à sucre, anacarde, maïs, arachide, igname, mil, sorgho.",
        "- Les sols hydromorphes : localisés dans les bas-fonds marécageux et le long du littoral ; gorgés d'eau en permanence ; propices à la riziculture inondée et aux cultures maraîchères.",
        "Les types de climats en Côte d'Ivoire :",
        "- Climat attiéen (au Sud) : climat chaud et très humide, fortes précipitations annuelles, propice aux sols ferralitiques et à la forêt dense.",
        "- Climat baouléen (au Centre) : climat de transition, pluviométrie modérée, associé aux sols ferrugineux, à la forêt claire et à la savane arbustive.",
        "- Climat de montagne (à l'Ouest, région des 18 Montagnes / Man) : microclimat pluvieux et frais, sols ferralitiques d'altitude, couvert de forêt dense.",
        "- Climat soudanais (au Nord) : chaud avec une longue saison sèche et une seule saison des pluies, associé aux sols ferrugineux et à la savane herbeuse.",
        "Lois de l'interrelation bioclimatique :",
        "- À chaque nuance climatique correspond un type de sol précis, et les propriétés de ce sol déterminent la végétation naturelle la plus adaptée.",
        "- Climat humide + sol fertile et riche en humus = végétation abondante d'arbres (forêt dense).",
        "- Climat sec + sol pauvre en humus = végétation clairsemée d'herbes (savane).",
        "- Rôle protecteur de la végétation : la couverture végétale amortit l'impact des pluies, prévient l'érosion des sols et recycle l'humidité par évapotranspiration.",
        "- Conséquences de la déforestation : sol mis à nu, ruissellement accru, dégradation des sols par lessivage et érosion, perturbation des pluies et aridification du climat."
      ],
      formulas: [
        "Interrelation méridionale : Climat attiéen (humide) + Sol ferralitique (rouge, riche en humus) <=> Forêt dense",
        "Interrelation septentrionale : Climat soudanais (sec) + Sol ferrugineux (gris, pauvre en humus) <=> Savane herbeuse",
        "Définition du sol fertile : Sol fertile = Fractions minérales équilibrées + Forte teneur en humus (matière organique décomposée)",
        "Boucle de rétroaction environnementale : Végétation intacte -> Protection anti-érosion + Maintien de l'humidité atmosphérique -> Régularité des pluies"
      ],
      methods: [
        "Expliquer la variation Sud-Nord de la végétation lors d'un voyage à travers la Côte d'Ivoire (ex: trajet Abidjan-Korhogo) : 1. Zone Sud : climat attiéen humide et sol ferralitique rouge engendrent une forêt dense aux arbres géants et feuillage sempervirent. 2. Zone Centre : climat baouléen aux pluies plus modestes et sol ferrugineux entraînent le recul de la forêt au profit de la savane arbustive et arborée. 3. Zone Nord : climat soudanais à longue saison sèche et sol ferrugineux moins épais ne permettent que le développement d'une savane herbeuse où les arbres sont rares et clairsemés. 4. Conclure : la taille et la densité des arbres diminuent proportionnellement à la baisse de la pluviométrie.",
        "Déterminer la culture agricole adaptée à un terroir donné : 1. Identifier le type de sol et la pluviométrie locale. 2. Si sol ferralitique rouge et climat humide (Sud/Ouest) -> orienter vers le cacaoyer, le caféier, le palmier à huile ou l'hévéa. 3. Si sol ferrugineux gris et climat soudanais (Nord/Centre) -> orienter vers le coton, l'anacarde, le maïs ou l'igname. 4. Si bas-fond hydromorphe gorgé d'eau -> orienter vers le riz de bas-fond."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 5 : LES MOYENS DE REPRÉSENTATION DE LA TERRE
    // -------------------------------------------------------------------------
    {
      id: "geo-ch5",
      lessonNumber: 5,
      title: "Les moyens de représentation de la terre",
      pages: [27, 32],
      topics: [
        "Forme géométrique de la Terre : la Terre n'est pas un disque plat mais une sphère, une boule volumineuse légèrement aplatie aux deux pôles (ellipsoïde ou géoïde).",
        "Les différentes formes de représentation de la surface terrestre :",
        "- Le globe terrestre : représentation fidèle de la Terre en trois dimensions sur une surface sphérique à échelle réduite ; c'est la seule reproduction exacte ne déformant ni les distances, ni les aires, ni les angles.",
        "- La carte : représentation plane, conventionnelle et proportionnelle de tout ou partie de la surface terrestre.",
        "- Le plan : représentation graphique détaillée d'un espace géographique restreint (quartier, village, établissement scolaire, maison).",
        "- Le planisphère : carte plane représentant la totalité du globe terrestre en une seule vue plane dépliée.",
        "- La mappemonde : carte plane représentant la Terre découpée en deux hémisphères circulaires juxtaposés (hémisphère oriental et occidental).",
        "- La carte thématique : carte destinée à faire ressortir un phénomène précis (relief, climat, végétation, réseau de transport, géologie, densité de population).",
        "Le quadrillage géographique et les repères fondamentaux :",
        "- L'équateur : grand cercle imaginaire perpendiculaire à l'axe des pôles, divisant la Terre en deux hémisphères égaux (l'hémisphère Nord ou boréal et l'hémisphère Sud ou austral). C'est le parallèle 0°.",
        "- Les parallèles : cercles imaginaires parallèles à l'équateur ; les plus importants sont le tropique du Cancer (23°27' N), le tropique du Capricorne (23°27' S), le cercle polaire arctique (66°33' N) et le cercle polaire antarctique (66°33' S).",
        "- La latitude : distance angulaire séparant un point quelconque du globe de l'équateur, mesurée en degrés (de 0° à l'équateur jusqu'à 90° aux pôles Nord ou Sud).",
        "- Les méridiens : demi-cercles imaginaires reliant le pôle Nord au pôle Sud ; le méridien de référence ou méridien zéro (0°) est le méridien de Greenwich passant près de Londres.",
        "- La longitude : distance angulaire séparant un point quelconque du globe du méridien d'origine de Greenwich, mesurée en degrés (de 0° à 180° vers l'Est ou vers l'Ouest).",
        "Les quatre composantes obligatoires d'une carte géographique :",
        "1. Le titre : indique clairement le sujet traité et l'espace géographique représenté.",
        "2. La légende : répertoire des signes conventionnels, symboles, figurés et couleurs traduisant les réalités du terrain.",
        "3. L'échelle : rapport entre les dimensions mesurées sur la carte et les distances réelles sur le terrain.",
        "4. L'orientation : flèche ou rose des vents indiquant le Nord géographique.",
        "Les trois principaux types de projections cartographiques :",
        "- La projection cylindrique (ex: Mercator) : la Terre est projetée sur un cylindre tangent à l'équateur. Avantage : préserve fidèlement la forme des régions de la zone intertropicale (zone chaude). Inconvénient : étire et déforme démesurément les zones tempérées et polaires.",
        "- La projection conique : la Terre est projetée sur un cône coiffant un pôle et tangent à un parallèle moyen. Avantage : représente avec exactitude les régions de la zone tempérée. Inconvénient : déforme les zones intertropicale et polaires.",
        "- La projection polaire ou azimutale : la Terre est projetée sur un plan tangent à l'un des pôles. Avantage : représente fidèlement les régions polaires. Inconvénient : déforme fortement les zones tempérées et intertropicales."
      ],
      formulas: [
        "Échelle numérique E = Distance_sur_la_carte / Distance_réelle_sur_le_terrain = d / D",
        "Distance réelle D = Distance_carte d * Dénominateur_échelle (avec conversion des unités : 1 km = 100 000 cm = 1 000 m)",
        "Exemple d'échelle numérique : 1/50 000 signifie que 1 cm sur la carte représente 50 000 cm = 500 mètres réels",
        "Échelle graphique : segment gradué indiquant directement la correspondance métrique (ex: barreau de 1 cm = 10 km)",
        "Positionnement géographique : Coordonnées d'un point = (Latitude en ° Nord ou Sud ; Longitude en ° Est ou Ouest)"
      ],
      methods: [
        "Calculer une distance réelle sur le terrain à l'aide d'une échelle cartographique : 1. Mesurer avec une règle graduée la distance d en cm entre les deux points sur la carte (ex: d = 5 cm). 2. Relever le dénominateur de l'échelle (ex: 1/100 000). 3. Calculer la distance réelle en centimètres : D = 5 * 100 000 = 500 000 cm. 4. Convertir en kilomètres : 500 000 cm / 100 000 = 5 km.",
        "Sélectionner la projection adéquate selon le travail demandé : 1. Pour cartographier un pays intertropical comme la Côte d'Ivoire ou le Brésil -> choisir la projection cylindrique car elle n'altère pas les basses latitudes. 2. Pour cartographier un pays tempéré comme la France ou les États-Unis -> choisir la projection conique. 3. Pour cartographier l'Océan Glacial Arctique ou l'Antarctique -> choisir la projection polaire ou azimutale.",
        "Décoder une carte thématique inconnue : 1. Lire le titre pour comprendre la thématique (ex: Carte des précipitations). 2. Observer l'orientation pour situer les points cardinaux. 3. Consulter la légende pour interpréter les figurés (teintes de couleurs, hachures, symboles). 4. Utiliser l'échelle pour apprécier les étendues réelles."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 6 : LES MOUVEMENTS DE LA TERRE ET LEURS INFLUENCES SUR LA VIE QUOTIDIENNE
    // -------------------------------------------------------------------------
    {
      id: "geo-ch6",
      lessonNumber: 6,
      title: "Les mouvements de la terre et leurs influences sur la vie quotidienne",
      pages: [33, 39],
      topics: [
        "Situation astronomique de la Terre : 3ème planète du système solaire en s'éloignant du Soleil (après Mercure et Vénus). Planète en mouvement continu dans l'espace.",
        "Le mouvement de rotation de la Terre :",
        "- Définition : rotation de la planète sur elle-même autour de son axe imaginaire des pôles.",
        "- Durée : une rotation complète s'effectue en 24 heures (soit une journée complète).",
        "- Sens de rotation : s'effectue d'Ouest en Est.",
        "- Conséquences directes de la rotation :",
        "  1. L'alternance ou succession des jours et des nuits : la Terre étant sphérique et opaque, la moitié éclairée par les rayons solaires est dans le jour, tandis que la moitié opposée dans l'ombre est dans la nuit.",
        "  2. Le mouvement apparent du Soleil : illusion visuelle faisant croire que le Soleil se déplace dans le ciel d'Est en Ouest, alors que c'est la Terre qui tourne d'Ouest en Est.",
        "  3. La fixation des quatre points cardinaux : l'Est (direction du lever du Soleil), l'Ouest (direction du coucher), le Nord et le Sud, servant au repérage et à l'orientation spatiale.",
        "  4. La division du globe en 24 fuseaux horaires : chaque tranche horaire correspond à 15° de longitude et équivaut à 1 heure de décalage. Le fuseau horaire de référence est celui du méridien de Greenwich (GMT, Greenwich Mean Time). En se déplaçant vers l'Est, on ajoute 1 heure par fuseau franchi ; vers l'Ouest, on retranche 1 heure.",
        "  5. La déviation des mouvements fluides (Force de Coriolis) : les vents et courants marins sont déviés vers leur droite dans l'hémisphère Nord, et vers leur gauche dans l'hémisphère Sud.",
        "Le mouvement de révolution de la Terre :",
        "- Définition : déplacement orbital accompli par la Terre autour du Soleil.",
        "- Durée : une révolution complète s'effectue en 365 jours et 6 heures (soit 1 an). Les 6 heures cumulées sur 4 ans créent une année bissextile de 366 jours (avec un 29 février).",
        "- Conséquences directes de la révolution (combinée à l'inclinaison de 23°27' de l'axe terrestre) :",
        "  1. L'inégale durée des jours et des nuits tout au long de l'année selon les saisons et les hémisphères (jours longs et nuits courtes en été ; jours courts et nuits longues en hiver ; égalité parfaite jour/nuit lors des équinoxes de printemps et d'automne).",
        "  2. La succession des saisons : alternance des quatre saisons (printemps, été, automne, hiver) dans les zones tempérées, et alternance des saisons de pluies et saisons sèches dans la zone chaude intertropicale."
      ],
      formulas: [
        "Durée de la rotation = 24 heures = 1 jour civil",
        "Durée de la révolution = 365 jours 6 heures = 1 an (4 ans * 6 h = 24 h = 1 jour bissextile)",
        "Calcul d'amplitude angulaire d'un fuseau = 360° / 24 heures = 15° de longitude par heure",
        "Calcul de décalage horaire : Heure_locale = Heure_GMT + Décalage_fuseau (si fuseau Est : +N heures ; si fuseau Ouest : -N heures)",
        "Règle d'orientation cardinale : Lever solaire = Est ; Coucher solaire = Ouest ; En faisant face au lever du soleil, le Nord est à gauche et le Sud est à droite"
      ],
      methods: [
        "Expliquer à un camarade pourquoi le jour et la nuit se succèdent : 1. Préciser que la Terre tourne sur elle-même d'Ouest en Est en 24 heures. 2. Expliquer que la Terre est une sphère opaque : le Soleil ne peut éclairer qu'une face à la fois. 3. La face éclairée est dans le jour, la face opposée est dans la nuit. 4. Avec la rotation ininterrompue, chaque région passe tour à tour de la clarté du jour à l'obscurité de la nuit.",
        "Calculer l'heure d'une ville connaissant son fuseau horaire par rapport à Greenwich : 1. Identifier l'heure de référence à Greenwich / Abidjan (GMT 0). 2. Repérer la position de la ville cible (vers l'Est ou vers l'Ouest) et le nombre de fuseaux. 3. Si la ville est à l'Est, additionner le nombre de fuseaux (ex: Moscou GMT +3 -> s'il est 12h à Abidjan, il est 12 + 3 = 15h à Moscou). 4. Si la ville est à l'Ouest, soustraire le nombre de fuseaux (ex: New York GMT -5 -> s'il est 12h à Abidjan, il est 12 - 5 = 7h du matin à New York).",
        "Distinguer clairement rotation et révolution : 1. Rotation : mouvement sur elle-même en 24 h ; conséquences : jours/nuits, fuseaux horaires, points cardinaux, déviation des vents. 2. Révolution : mouvement autour du Soleil en 365j 6h ; conséquences : succession des saisons, variation de la durée des jours et des nuits."
      ]
    },

    // =========================================================================
    // THÈME 2 : L'HOMME ET SON MILIEU LOCAL EN CÔTE D'IVOIRE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 7 (THÈME 2 LEÇON 1) : POPULATION ET ENVIRONNEMENT LOCAL
    // -------------------------------------------------------------------------
    {
      id: "geo-ch7",
      lessonNumber: 7,
      title: "Population et environnement local",
      pages: [40, 44],
      topics: [
        "Définition de la population : ensemble des personnes humaines résidant dans un espace géographique ou une collectivité donnée.",
        "Définition de l'environnement : ensemble des éléments naturels (relief, air, eau, flore, faune) et artificiels/bâtis qui nous entourent et constituent notre cadre de vie.",
        "Le milieu physique du District d'Abidjan :",
        "- Relief : plaines côtières basses et surfaces planes, très faciles à aménager et à bâtir.",
        "- Climat : climat attiéen, chaud et humide avec de fortes précipitations.",
        "- Végétation : domaine de la forêt dense tropicale.",
        "- Sols : sols ferralitiques rouges et sols hydromorphes très fertiles.",
        "- Hydrographie dense et variée : lagune Ébrié, océan Atlantique, fleuves côtiers et cours d'eau, offrant des opportunités pour la pêche, l'adduction d'eau, le transport lagunaire et la création d'un port autonome en eau profonde.",
        "- Sous-sol : présence de réserves de pétrole brut et de gaz naturel offshore.",
        "Les facteurs naturels de fixation des hommes : les plaines facilitent l'aménagement des routes et habitations ; le climat et les sols fertiles favorisent l'agriculture et les plantations ; l'eau abondante permet le développement des activités économiques et industrielles.",
        "Problèmes urbains provoqués par la croissance démographique rapide à Abidjan :",
        "- Insuffisance critique des infrastructures socio-économiques de base (écoles, hôpitaux, dispensaires, voiries bitumées, réseaux d'eau potable et assainissement).",
        "- Prolifération d'habitats précaires et bidonvilles sur des terrains dangereux (flancs instables de ravins, cuvettes inondables).",
        "- Inondations désastreuses récurrentes lors des saisons des pluies causant des pertes en vies humaines et dégâts matériels.",
        "- Embouteillages quotidiens, insalubrité des rues, amoncellements d'ordures et épidémies.",
        "Impact des activités économiques sur la dégradation de l'environnement :",
        "- Agriculture intensive moderne : déforestation pour installer les cultures, dégradation et appauvrissement des sols, pollution des sols et des nappes phréatiques par les engrais chimiques et pesticides.",
        "- Exploitation forestière abusive et anarchique : disparition rapide de la forêt dense et perte de biodiversité végétale.",
        "- Chasse et pêche commerciales intensives : surexploitation halieutique et disparition des espèces animales sauvages.",
        "- Transports et usines : émissions massives de gaz néfastes polluant l'air et contribuant au réchauffement climatique ; rejets industriels d'eaux souillées dans la lagune Ébrié.",
        "- Exploitation minière : excavation des sols, pollution au mercure et destruction des paysages.",
        "Solutions et mesures de préservation de l'environnement local :",
        "- Reboisement actif et campagnes de plantation d'arbres.",
        "- Sensibilisation et éducation environnementale des citoyens.",
        "- Création et surveillance stricte de parcs nationaux (ex: Banco) et réserves forestières.",
        "- Collecte régulière, traitement et recyclage méthodique des ordures ménagères.",
        "- Promotion du gaz butane domestique pour remplacer le bois de chauffe et le charbon de bois.",
        "- Politique étatique de décentralisation pour développer l'intérieur du pays et freiner l'exode rural.",
        "- Campagnes de sensibilisation au planning familial pour réguler la croissance démographique."
      ],
      formulas: [
        "Formule d'évaluation environnementale : Pression anthropique = Taux de croissance démographique + Intensité des activités de prélèvement (forêt, eau, sols)",
        "Bilan du déséquilibre urbain : Croissance de la population > Capacité d'accueil des infrastructures -> Prolifération d'habitats précaires + Insalubrité + Inondations",
        "Règle de durabilité : Ressources prélevées <= Ressources renouvelées (Reboisement >= Abattage)"
      ],
      methods: [
        "Analyser les atouts physiques d'un milieu pour l'installation humaine : 1. Étudier le relief : identifier la plaine facilitant le tracé des voies de communication et les lotissements. 2. Étudier le climat et la végétation : vérifier l'humidité et la pluviométrie favorables aux cultures. 3. Étudier l'hydrographie : relever les lagunes et fleuves autorisant pêche, transport et ouverture maritime. 4. Étudier le sous-sol : identifier les ressources énergétiques (pétrole, gaz). 5. Conclure sur le caractère attractif du site.",
        "Proposer un plan de remédiation face à la dégradation d'un milieu local : 1. Identifier 3 activités destructrices dans la localité (déforestation par scieurs clandestins, pollution de la lagune par rejets d'eaux usées, prolifération d'ordures). 2. Exposer leurs impacts écologiques et sanitaires. 3. Formuler des solutions précises : organiser une journée citoyenne de reboisement, installer des bacs de collecte des ordures, interdire les rejets industriels directs et sensibiliser les villageois."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 8 (THÈME 2 LEÇON 2) : L'HOMME ET LE CYCLE DE L'EAU
    // -------------------------------------------------------------------------
    {
      id: "geo-ch8",
      lessonNumber: 8,
      title: "L'homme et le cycle de l'eau",
      pages: [45, 48],
      topics: [
        "Définition et propriétés physiques de l'eau : l'eau pure est un liquide transparent, incolore (sans couleur), inodore (sans odeur) et insipide/sans saveur (sans goût).",
        "Les trois états physiques de l'eau dans la nature :",
        "- L'état liquide : océans, mers, cours d'eau, lacs, nappes phréatiques, gouttes de pluie.",
        "- L'état gazeux : vapeur d'eau invisible en suspension dans l'air et l'atmosphère.",
        "- L'état solide : glace, banquise, glaciers, neige, grêle, givre.",
        "Définition du cycle de l'eau : phénomène naturel matériel et ininterrompu de renouvellement permanent de l'eau sur Terre à travers des changements d'état physique successifs.",
        "Les différentes étapes du cycle naturel de l'eau :",
        "1. L'évaporation océanique et continentale : sous l'action de la chaleur du rayonnement solaire, l'eau liquide des mers, fleuves et lacs se réchauffe et s'évapore sous forme de vapeur d'eau montant dans l'atmosphère.",
        "2. L'évapotranspiration : émission de vapeur d'eau par les êtres vivants (transpiration des plantes, respiration des animaux et des hommes).",
        "3. La condensation : en prenant de l'altitude, la vapeur d'eau rencontre des couches d'air plus froides, se refroidit et se condense en minuscules gouttelettes d'eau formant les nuages.",
        "4. Les précipitations : lorsque les gouttelettes d'eau des nuages grossissent et s'alourdissent, elles retombent sur le sol sous l'effet de la pesanteur sous forme liquide (pluie) ou solide (grêle, neige).",
        "5. Le ruissellement : écoulement des eaux de pluie à la surface du sol vers les cours d'eau, ruisseaux, fleuves, lagunes et océans.",
        "6. L'infiltration : pénétration lente de l'eau à travers les pores et failles du sol, rechargeant les nappes phréatiques et réserves souterraines.",
        "Utilité et rôle vital de l'eau pour l'homme et la société :",
        "- Usages domestiques indispensables : boisson, cuisson des aliments, lessive, hygiène corporelle et vaisselle.",
        "- Agriculture : arrosage et irrigation indispensable à la croissance des plantes vivrières et d'exportation.",
        "- Énergie et industrie : alimentation des barrages hydroélectriques pour produire l'électricité (ex: Kossou, Taabo) ; refroidissement d'usines.",
        "- Voies de transport fluvial, lagunaire et maritime.",
        "- Source de vie universelle : aucun organisme vivant ne peut survivre sans eau.",
        "La sauvegarde d'une ressource rare et vulnérable :",
        "- Bien que l'eau couvre 71% du globe, l'eau douce liquide accessible ne représente qu'une infime proportion (moins de 1%) ; l'eau potable est rare.",
        "- Conséquences d'une mauvaise gestion de l'eau : pénurie et sécheresse, déshydratation des populations, mort du bétail et de la végétation, maladies hydriques, conflits violents d'usage entre communautés.",
        "- Nécessité d'une gestion durable : lutter contre le gaspillage au robinet, interdire le déversement de produits chimiques dans les cours d'eau, protéger les bassins versants."
      ],
      formulas: [
        "Cycle continu de l'eau : Évaporation / Évapotranspiration -> Condensation (Nuages) -> Précipitations (Pluie/Neige/Grêle) -> Ruissellement (Rivières/Océan) + Infiltration (Nappe phréatique)",
        "Conservation de la masse hydrique globale : Quantité totale d'eau sur Terre = Constante (renouvellement matériel permanent)",
        "Vocabulaire physique : Évaporation = Liquide -> Gaz ; Condensation = Gaz -> Liquide ; Solidification = Liquide -> Solide ; Fusion = Solide -> Liquide"
      ],
      methods: [
        "Décrire chronologiquement le cycle de l'eau pour un devoir : 1. Commencer par l'action du Soleil qui chauffe les océans et continents : l'eau liquide devient vapeur (évaporation et évapotranspiration). 2. Décrire la montée dans l'atmosphère et le refroidissement produisant les nuages (condensation). 3. Expliquer la chute des eaux atmosphériques vers la terre (précipitations sous forme de pluie ou grêle). 4. Préciser le devenir de l'eau au sol : une part s'infiltre pour alimenter la nappe phréatique et une part ruisselle dans les cours d'eau pour retourner à la mer. 5. Conclure sur la boucle perpétuelle.",
        "Associer chaque terme du cycle à sa définition exacte : 1. Condensation -> transformation de la vapeur d'eau en fines gouttelettes d'eau formant les nuages. 2. Ruissellement -> écoulement superficiel des eaux de pluies. 3. Infiltration -> lente pénétration des eaux dans le sol. 4. Précipitation -> toutes les formes de chute de l'eau d'un nuage sur la terre.",
        "Argumenter sur la nécessité de sauvegarder l'eau douce : 1. Rappeler que l'eau est la condition indispensable à toute forme de vie. 2. Souligner que l'eau douce potable est rare et inégalement répartie. 3. Énumérer les risques d'une pénurie (sécheresse, déshydratation, famine, guerres de l'eau). 4. Préconiser des gestes éco-responsables (fermeture des robinets, protection des rivières contre les polluants industriels et agricoles)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 9 (THÈME 2 LEÇON 3) : L'IMPORTANCE DE L'IMPÔT DANS LE DÉVELOPPEMENT DE MA RÉGION
    // -------------------------------------------------------------------------
    {
      id: "geo-ch9",
      lessonNumber: 9,
      title: "L'importance de l'impôt dans le développement de ma région",
      pages: [49, 51],
      topics: [
        "Définition officielle de l'impôt : prélèvement financier obligatoire opéré par l'État ou les collectivités publiques sur les revenus et les biens des personnes physiques et morales, en fonction de leurs capacités contributives, sans contrepartie directe immédiate, afin de financer les charges publiques d'intérêt général.",
        "Les deux formes d'impôts :",
        "- L'impôt direct : impôt payé directement et nominativement par le contribuable auprès des services fiscaux du Trésor ou de la DGI. Exemples : l'Impôt Général sur le Revenu (IGR), l'impôt foncier sur les propriétés immobilières (terrains, maisons), l'impôt sur les traitements et salaires.",
        "- L'impôt indirect : impôt incorporé directement dans le prix de vente des biens marchands et services consommés, perçu par les commerçants puis reversé à l'État. Exemples : la Taxe sur la Valeur Ajoutée (TVA), les droits de douane aux frontières, les timbres fiscaux d'État.",
        "La notion de contribuable : toute personne physique ou morale assujettie légalement au paiement de l'impôt (propriétaires de biens immobiliers, fonctionnaires, travailleurs salariés, commerçants, transporteurs, chefs d'entreprises). En réalité, tout habitant consommant des produits manufacturés paie des impôts indirects (TVA).",
        "La structure publique de recouvrement en Côte d'Ivoire : la Direction Générale des Impôts (DGI) sous tutelle du Ministère de l'Économie et des Finances, ainsi que le Trésor Public. Rôles de la DGI : assiette et liquidation de l'impôt, recouvrement des créances fiscales, organisation de caravanes de sensibilisation civique, campagnes d'information télévisées et radiodiffusées.",
        "L'utilité et l'importance de l'impôt pour le développement local et régional :",
        "- Principale ressource financière alimentant le budget général de l'État et des municipalités.",
        "- Financement des dépenses de fonctionnement : salaires et pensions des agents de l'État (enseignants, médecins, infirmiers, policiers, gendarmes, magistrats), bourses d'études scolaires et universitaires.",
        "- Financement des investissements et infrastructures socio-économiques indispensables : construction et entretien d'écoles, collèges municipaux, lycées, hôpitaux généraux, dispensaires de santé, voiries urbaines bitumées, ponts, caniveaux d'assainissement, réseaux d'adduction en eau potable, électrification des quartiers et villages, équipement des forces de police.",
        "Le devoir civique de payer l'impôt : le consentement à l'impôt est un devoir légal garanti par la Constitution. Refuser de payer l'impôt (fraude fiscale, incivisme) bloque la réalisation des infrastructures communautaires et entretient le sous-développement."
      ],
      formulas: [
        "Équation budgétaire publique : Recettes fiscales (Impôts directs + Impôts indirects) = Financement des infrastructures publiques + Traitements des fonctionnaires + Dépenses sociales",
        "Distinction fiscale : Impôt direct = Prélèvement nominatif direct sur revenus/patrimoine (IGR, impôt foncier) ; Impôt indirect = Taxe indolore incorporée aux prix d'achat (TVA, timbres)",
        "Règle civique : Tout citoyen ou résident bénéficiant des services publics de la Nation a l'obligation de contribuer aux charges publiques selon ses facultés"
      ],
      methods: [
        "Sensibiliser un parent ou citoyen refusant de payer l'impôt foncier (ex: cas de tante Adjoua) : 1. Identifier la nature du courrier : avis d'imposition foncière (impôt direct sur la propriété bâtie). 2. Rappeler le caractère légal et républicain de l'obligation fiscale imposée par la loi. 3. Montrer concrètement l'utilité de ces sommes : elles servent à financer les tables-bancs de l'école des enfants, l'éclairage public de la rue, le bitumage des voiries, le ramassage des ordures et les hôpitaux. 4. Proposer un slogan civique percutant (ex: 'Payer l'impôt, c'est développer ma région et bâtir l'avenir de nos enfants !').",
        "Expliquer pourquoi une mairie manque de ressources sans accuser systématiquement le maire : 1. Rappeler que le budget d'une mairie dépend des impôts et taxes locales acquittés par ses administrés. 2. Constater que lorsque les commerçants et propriétaires fraudent ou refusent de payer, les caisses municipales sont vides. 3. Expliquer que l'incivisme fiscal empêche l'achat de tables-bancs et l'entretien de la salubrité. 4. Conclure à la responsabilité partagée des citoyens."
      ]
    },

    // =========================================================================
    // PARTIE 2 : HISTOIRE 6ÈME
    // THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 10 (HISTOIRE LEÇON 1) : L'HISTOIRE ET SON OBJET
    // -------------------------------------------------------------------------
    {
      id: "hist-ch1",
      lessonNumber: 1,
      title: "L'histoire et son objet",
      pages: [1, 6],
      topics: [
        "Étymologie du mot histoire : provient du mot grec 'Historia' qui signifie 'enquête' ou 'recherche'. Le premier grand historien et père fondateur de l'histoire est le grec Hérodote (Ve siècle avant J.-C.).",
        "Définition de l'histoire : l'histoire est la science qui étudie le passé de l'homme et des sociétés humaines de façon méthodique et rationnelle.",
        "Début de l'histoire : l'histoire commence avec l'invention de l'écriture par les Mésopotamiens environ 3000 ans avant Jésus-Christ (qui marque la fin de la préhistoire).",
        "L'objet d'étude de l'histoire : la connaissance des événements passés et des civilisations des peuples.",
        "- La notion d'événement : fait historique important et mémorable qui a marqué la vie d'une société, d'un peuple ou d'une nation (exemples : l'indépendance de la Côte d'Ivoire le 7 août 1960 ; la Seconde Guerre mondiale de 1939 à 1945 ; une révolution, une grande expédition).",
        "- La notion de civilisation : ensemble des croyances, traditions, coutumes, cultures, manières de s'habiller, de manger, d'habiter, arts et manières de penser qui caractérisent un peuple. Principe fondamental : il n'existe pas de peuple sans civilisation.",
        "Les cinq étapes ordonnées de la démarche scientifique de l'historien :",
        "1. La détermination du problème : identification précise du sujet, de la question historique ou de l'énigme à résoudre.",
        "2. L'élaboration d'hypothèses : formulation d'explications provisoires qui orientent l'investigation.",
        "3. La recherche ou collecte d'informations : rassemblement méthodique des traces, témoignages, documents et vestiges du passé.",
        "4. La vérification des hypothèses : confrontation critique et examen impartial des sources pour discerner le vrai du faux (rejet du mensonge, de l'esprit de parti et des louanges selon Ibn Khaldoun).",
        "5. La conclusion du travail : rédaction finale d'un rapport ou ouvrage historique restituant fidèlement les faits passés.",
        "L'histoire est une science car elle obéit à une démarche méthodique, rigoureuse et critique dans la recherche de la vérité objective.",
        "L'intérêt et l'utilité de l'étude de l'histoire :",
        "- Permet de connaître le passé pour mieux comprendre le présent et construire un avenir meilleur.",
        "- Permet de mesurer les progrès accomplis par les hommes dans la transformation de leurs conditions de vie.",
        "- Fait prendre conscience de son identité et de son appartenance à une famille, un peuple et une nation.",
        "- Forme à l'impartialité, au sens critique et à la recherche de la vérité.",
        "- Enseigne des valeurs civiques fondamentales : justice, sagesse, prudence, solidarité entre peuples et tolérance mutuelle (lutte contre la haine et les préjugés)."
      ],
      formulas: [
        "Étymologie : Historia (Grec) = Enquête / Recherche méthodique",
        "Délimitation temporelle : Préhistoire (< -3000) | Seuil de l'écriture mésopotamienne (-3000) | Histoire (>= -3000)",
        "Objet de la science historique = Événements passés (faits marquants) + Civilisations des peuples (cultures et coutumes)",
        "Postulat d'égalité humaine : Tout peuple possède une histoire et une civilisation propre ; il n'y a pas de peuple sans civilisation",
        "Algorithme de la démarche scientifique de l'historien : Détermination du problème -> Élaboration des hypothèses -> Collecte des données -> Vérification critique -> Rédaction du rapport"
      ],
      methods: [
        "Expliquer la formule 'L'histoire est une science qui obéit à une démarche rigoureuse dans la quête de la vérité' : 1. Préciser que l'histoire ne se contente pas de raconter des fables ou d'écouter passivement des récits imaginaires. 2. Énumérer ses 5 étapes scientifiques : pose du problème, hypothèses, collecte d'informations, vérification critique des sources, rédaction impartiale. 3. Expliquer que l'historien traque le mensonge et élimine l'esprit de parti pour établir des faits vérifiables.",
        "Défendre l'utilité de l'histoire auprès d'un ami qui ne jure que par les sciences exactes (ex: cas de Gabriel) : 1. Affirmer son désaccord avec l'idée que l'histoire serait inutile. 2. Rappeler qu'un peuple sans histoire est un arbre sans racines : on ne peut comprendre le présent ni concevoir le futur sans connaître le passé. 3. Montrer qu'elle forme le citoyen à la tolérance, à l'impartialité et à la solidarité, indispensables à la paix sociale.",
        "Ranger dans l'ordre les étapes de la démarche scientifique de l'historien : Étape n°1 : Détermination du problème ; Étape n°2 : Élaboration des hypothèses ; Étape n°3 : Enquête ou collecte des informations ; Étape n°4 : Vérification des hypothèses ; Étape n°5 : Conclusion du travail par la rédaction d'un rapport."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 11 (HISTOIRE LEÇON 2) : LES SOURCES DE L'HISTOIRE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch2",
      lessonNumber: 2,
      title: "Les sources de l'histoire",
      pages: [1, 6],
      topics: [
        "Définition des sources de l'histoire : ensemble des traces, éléments, documents et vestiges matériels ou oraux qui permettent à l'historien de reconstituer les faits passés.",
        "Les quatre grands types de sources de l'histoire :",
        "1. Les sources écrites : tout document rédigé par le moyen de l'écriture.",
        "   - Exemples : manuscrits anciens (ex: manuscrits de Tombouctou, Tarikhs ou chroniques arabes d'El Bekri au XIe siècle, d'Ibn Battuta au XIVe siècle, Tarikh es-Soudan d'Abderahmane Es-Sâdi), archives publiques, correspondances et lettres anciennes, livres d'histoire, textes sacrés religieux (Bible, Coran), textes sur papyrus, parchemins ou tablettes d'argile, mémoires et récits de voyage.",
        "   - Importance : transmettent les faits avec une grande fidélité, précision et fiabilité durable car l'écrit ne change pas avec le temps.",
        "2. Les sources orales ou la tradition orale : message historique transmis de bouche à oreille par la parole vivante.",
        "   - Dépositaires : vieillards, anciens, sages, traditionalistes, griots dépositaires de la mémoire collective (ex: Djeli Kouyaté dans l'épopée de Soundjata), contes, légendes et récits épiques.",
        "   - Importance : indispensable aux peuples sans écriture (notamment en Afrique subsaharienne) pour perpétuer et faire revivre leur passé historique.",
        "3. Les sources archéologiques ou muettes : ensemble des objets anciens, vestiges matériels et restes enfouis laissés par les hommes du passé et mis au jour par des fouilles.",
        "   - Exemples : outils en fer, pierres taillées ou polies, céramiques et poteries, restes alimentaires (amas de coquillages), sculptures, peintures rupestres, ossements humains et animaux, fondations de maisons, monuments, bijoux, pièces de monnaies anciennes.",
        "   - Datation et sciences auxiliaires : objets datés au carbone 14 (14C) ; analysés avec l'aide de la numismatique (monnaies), l'épigraphie (inscriptions), la dendrochronologie (bois/anneaux), l'anthropologie et la sociologie.",
        "4. Les sources audiovisuelles : documents issus des technologies modernes associant sons et images animées.",
        "   - Exemples : enregistrements radio, émissions télévisées, films documentaires, reportages d'actualité, CD-Rom, photographies, archives internet et réseaux numériques.",
        "   - Importance : font revivre les faits récents de façon concrète et accessible.",
        "Les difficultés et limites inhérentes à chaque catégorie de sources :",
        "- Difficultés des sources écrites : rareté en Afrique noire ancienne ; cherté ; problèmes de langue et de traduction ; fragilité et dégradation des supports matériels (moisissures, feux) ; problème d'authenticité et risque de subjectivité/mensonge de l'auteur.",
        "- Difficultés des sources orales : déformation progressive des récits de bouche à oreille ; oubli et disparition des témoins avec le temps ; subjectivité et glorification des ancêtres ; imprécision et flou dans la datation chronologique des événements.",
        "- Difficultés des sources muettes : coût financier exorbitant des fouilles ; altération rapide des matériaux par les facteurs climatiques tropicaux (acidité des sols forestiers dissolvant les os, humidité, termites, sécheresse) ; difficultés d'interprétation des objets muets.",
        "- Difficultés des sources audiovisuelles : altération des supports magnétiques et informatiques (bandes, clés USB, CD-Rom) ; déformation, trucage ou manipulation des faits.",
        "La règle de confrontation critique : aucune source n'est infaillible à elle seule ; l'historien doit impérativement croiser et confronter les diverses sources pour approcher la vérité historique."
      ],
      formulas: [
        "Typologie des sources : Sources = Sources écrites + Sources orales + Sources archéologiques (muettes) + Sources audiovisuelles",
        "Technique de datation absolue des vestiges organiques anciens = Méthode de désintégration du Carbone 14 (14C)",
        "Sciences auxiliaires : Monnaies anciennes -> Numismatique ; Inscriptions gravées -> Épigraphie ; Datation du bois par anneaux -> Dendrochronologie ; Étude physique de l'homme -> Anthropologie",
        "Loi de validité historique : Une affirmation n'est historique que si elle est confirmée par le recoupement et la confrontation critique de plusieurs sources indépendantes"
      ],
      methods: [
        "Classer un vestige ou document dans la catégorie de source appropriée : 1. Analyser le support et la nature de l'information. 2. Si document écrit (manuscrits de Tombouctou, archives, Bible, lettre) -> Source écrite. 3. Si récit parlé ou conte (légende d'Abla Pokou, parole d'un griot, témoignage d'un doyen) -> Source orale / Tradition orale. 4. Si objet matériel exhumé (pierre de Gohitafla, hache polie, tesson de poterie, squelette, monnaie) -> Source archéologique / muette. 5. Si enregistrement vidéo/audio technologique (documentaire télévisé, cassette, site web) -> Source audiovisuelle.",
        "Justifier la nécessité de recourir à la tradition orale pour l'histoire africaine : 1. Rappeler que de nombreuses sociétés africaines privilégiaient la transmission verbale de leur savoir. 2. Montrer que les griots et sages étaient formés pour mémoriser et relater les généalogies et les hauts faits. 3. Relever que rejeter la tradition orale reviendrait à priver des peuples entiers de leur passé. 4. Souligner la nécessité d'en corriger les faiblesses chronologiques par les fouilles archéologiques.",
        "Résoudre une situation d'évaluation sur la disparition du patriarche du village : 1. Identifier le sujet : le décès du doyen dépositaire de l'histoire locale. 2. Relever la source évoquée : la tradition orale (source vivante). 3. Donner son avis argumenté : réfuter l'idée qu'il s'agissait de l'unique source ; expliquer qu'il existe également des sources muettes (tombes anciennes, poteries, outils des ancêtres) et parfois des écrits (registres d'état civil, lettres coloniales) qui permettent de continuer la reconstitution du passé."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 12 (HISTOIRE LEÇON 3) : LES SOURCES D'INFORMATION ET LA DIGNITÉ HUMAINE EN TEMPS DE GUERRE OU DE VIOLENCE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch3",
      lessonNumber: 3,
      title: "Les sources d'information et la dignité humaine en temps de guerre ou de violence",
      pages: [1, 6],
      topics: [
        "Définition d'une source d'information : élément, document ou personne fournissant des nouvelles, des données ou des renseignements sur un sujet.",
        "Rôle critique de l'information en temps de guerre : une information non vérifiée ou manipulée peut enflammer les tensions, aggraver les violences, provoquer des massacres et porter de graves atteintes à la dignité humaine.",
        "Les sources d'information en période de guerre ou de conflit armé :",
        "- Les sources étatiques ou officielles : communiqués émis par les gouvernements, porte-paroles militaires et organes de communication de l'État (télévision nationale, radio d'État, presse publique).",
        "- Les sources non officielles :",
        "  * Sources traditionnelles : récits et témoignages directs des victimes, des réfugiés, des témoins oculaires sur le terrain, des personnels humanitaires d'ONG (Croix-Rouge) et des journalistes d'investigation indépendants.",
        "  * Sources multimédias : réseaux sociaux (Facebook, Twitter, WhatsApp, Instagram) capables de diffuser instantanément des rumeurs alarmistes, de fausses informations (fake news) et des incitations à la haine.",
        "La dignité humaine :",
        "- Définition : considération, estime et respect inaliénables que mérite chaque être humain, quel que soit son âge, son sexe, son état de santé physique ou mentale, sa condition sociale, sa religion ou son appartenance ethnique.",
        "- Les quatre catégories d'atteintes à la dignité humaine en temps de guerre :",
        "  1. Les violences physiques : meurtres, viols, mutilations corporelles, vols, pillages et destructions de biens privés ou de villages entiers.",
        "  2. Les violences morales : injures, humiliations, traitements dégradants, attaques et profanations d'édifices religieux.",
        "  3. Les crimes de guerre : exécutions sommaires d'otages, enlèvements, persécutions, esclavage sexuel, assassinats prémédités, tortures et mauvais traitements appliqués aux prisonniers de guerre.",
        "  4. Les crimes contre l'humanité : génocide (destruction délibérée d'un groupe ethnique ou religieux), disparitions forcées, exécutions de masse, déportations collectives de populations.",
        "Les conséquences dramatiques des atteintes à la dignité humaine : pertes en vies humaines, blessures corporelles et séquelles psychologiques indélébiles, sentiment de haine et désir de vengeance, multiplication des veuves et orphelins, grossesses non désirées, traumatismes et stérilité, propagation d'infections sexuellement transmissibles dont le VIH-SIDA.",
        "Le Droit International Humanitaire (DIH) ou Droit de la guerre :",
        "- Historique : initié par le citoyen suisse Henry Dunant suite aux atrocités de la bataille de Solferino (Italie, 1859), aboutissant à la fondation de la Croix-Rouge (CICR en 1862) et aux Conventions internationales de Genève ; premier Prix Nobel de la Paix décerné à Henry Dunant en 1901.",
        "- Mission du mouvement international de la Croix-Rouge et du Croissant-Rouge : protéger la vie, alléger les souffrances humaines et faire respecter la dignité en situation de crise sans discrimination.",
        "- Les règles fondamentales du DIH pour préserver la dignité humaine :",
        "  * Ne jamais attaquer les populations civiles ni les biens civils.",
        "  * Interdiction absolue de tuer ou de blesser un combattant ennemi désarmé, malade ou hors de combat qui se rend.",
        "  * Traiter dignement les prisonniers de guerre (interdiction formelle de la torture et des sévices).",
        "  * Porter secours et assistance médicale aux blessés et aux malades des deux camps sans distinction.",
        "  * Interdiction totale des armes et méthodes de guerre causant des souffrances inutiles ou disproportionnées.",
        "  * Respect du droit à un jugement équitable et à la justice."
      ],
      formulas: [
        "Principe universel : Dignité humaine = Respect inconditionnel dû à toute personne humaine, indépendamment de toute considération",
        "Grille des atteintes : Agressions corporelles -> Violences physiques ; Humiliations/Insultes -> Violences morales ; Exactions en conflit armé -> Crimes de guerre ; Extermination planifiée d'un groupe -> Crimes contre l'humanité (Génocide)",
        "Règle de conduite du DIH : Distinction civils/combattants + Protection absolue des hors de combat + Interdiction de la torture",
        "Facteur déclencheur : Fausses rumeurs non contrôlées sur les réseaux sociaux -> Panique -> Violence collective et barbarie"
      ],
      methods: [
        "Catégoriser une atteinte à la dignité humaine dans un texte : 1. Relever les faits précis (ex: viols, maisons brûlées, cadavres calcinés, déportation). 2. Si atteinte directe au corps -> violence physique. 3. Si injure ou atteinte aux croyances -> violence morale. 4. Si mauvais traitement de prisonniers ou civils en temps de guerre -> crime de guerre. 5. Si massacre méthodique visant l'élimination d'une communauté entière -> crime contre l'humanité / génocide.",
        "Rédiger un appel à la paix et à la préservation de la dignité humaine : 1. Rappeler aux populations que la vie humaine est sacrée et inviolable. 2. Exhorter au rejet des rumeurs propagées sur les réseaux sociaux et privilégier les sources d'information vérifiées. 3. Rappeler les conséquences désastreuses des violences (veuves, orphelins, maladies, destruction). 4. Inviter au dialogue, à la tolérance et au respect des règles du DIH.",
        "Expliquer le rôle et la mission du DIH et du CICR : 1. Rappeler la création par Henry Dunant après Solferino pour secourir les blessés sans distinction. 2. Expliquer que le DIH fixe des limites légales à la guerre pour protéger ceux qui ne combattent pas (civils) ou ne combattent plus (blessés, prisonniers)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 13 (HISTOIRE LEÇON 4) : LA NOTION DE CHRONOLOGIE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch4",
      lessonNumber: 4,
      title: "La notion de chronologie",
      pages: [1, 6],
      topics: [
        "Définition et étymologie : formé de deux mots grecs 'chronos' signifiant 'temps' et 'logos' signifiant 'science' ou 'étude'. La chronologie est la science qui étudie le temps, fixe l'ordre et la date des événements historiques, et permet de les situer avec exactitude dans la durée.",
        "Les unités de mesure du temps :",
        "- Unités de temps court :",
        "  * 1 heure = 60 minutes",
        "  * 1 jour = 24 heures",
        "  * 1 semaine = 7 jours",
        "  * 1 mois = 28, 29, 30 ou 31 jours",
        "  * 1 an (année) = 365 jours (année ordinaire) ou 366 jours (année bissextile) = 52 semaines = 12 mois",
        "  * 1 décennie = 10 ans",
        "- Unités de temps long :",
        "  * Une génération = espace de temps d'une durée moyenne de 25 ans",
        "  * Un siècle = 100 ans = 10 décennies",
        "  * Un millénaire = 1000 ans = 10 siècles = 100 décennies",
        "  * Une période : intervalle de temps plus ou moins long marqué par des ruptures",
        "  * Une époque : moment de l'histoire marqué par un événement marquant ou les actes d'une personnalité (ex: l'Antiquité)",
        "  * Une ère : vaste espace de temps débutant par un événement fondateur capital constituant le point de départ d'une chronologie",
        "Les points de départ des grandes ères et calendriers :",
        "- L'ère chrétienne : prend pour point de départ la naissance de Jésus-Christ (an 1) ; sert de base au calendrier grégorien universel. Les événements survenus avant sont notés 'avant J.-C.' et précédés d'un signe moins (-).",
        "- L'ère musulmane : prend pour point de départ l'an 622, date de l'Hégire (émigration du prophète Mahomet de La Mecque vers Médine/Yathrib) ; sert de base au calendrier musulman.",
        "La règle de détermination du siècle à partir d'une année :",
        "- Pour toute année comprise entre l'an 1 et 99 : elle appartient au Ier siècle.",
        "- Pour une année se terminant par '00' : le siècle correspond exactement au chiffre ou nombre des centaines (ex: 1900 -> XIXe siècle ; 800 -> VIIIe siècle).",
        "- Pour toute autre année à 3 ou 4 chiffres : on prend le nombre formé par le(s) chiffre(s) des centaines/milliers et on lui ajoute 1 (ex: 1235 -> 12 + 1 = 13ème siècle ; 1789 -> 17 + 1 = 18ème siècle ; 2015 -> 20 + 1 = 21ème siècle).",
        "L'écriture des siècles en chiffres romains :",
        "- Valeurs de base : I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000.",
        "- Règle d'écriture : un même symbole romain ne s'écrit jamais quatre fois de suite consécutivement (ex: 4 s'écrit IV et non IIII ; 9 s'écrit IX et non VIIII).",
        "La frise chronologique (axe du temps) :",
        "- Définition : droite orientée de gauche vers la droite sur laquelle on dispose les dates et les événements historiques dans leur ordre chronologique exact de succession.",
        "- Représentation : se présente horizontalement (ou verticalement) ; se termine par une flèche à l'extrémité droite pour signifier que le temps ne s'arrête pas et continue.",
        "- Repère central : l'an 1 (naissance de Jésus-Christ). Les dates négatives (avant J.-C.) se placent à gauche de l'an 1 ; les dates positives (après J.-C.) à droite.",
        "- Éléments indispensables : le titre, l'échelle mathématique (ex: 1 cm pour 100 ans ou 3 cm pour 1000 ans, 1 cm pour 5 ans), les graduations régulières, les repères de dates et les légendes d'événements."
      ],
      formulas: [
        "1 siècle = 100 ans = 10 décennies",
        "1 millénaire = 1000 ans = 10 siècles = 100 décennies",
        "Règle de conversion Année -> Siècle : Si l'année A s'écrit C00 (deux zéros finaux) -> Siècle = C en chiffres romains ; Si l'année A s'écrit Cxy (avec xy != 00) -> Siècle = C + 1 en chiffres romains",
        "Correspondance romaine : I=1, II=2, III=3, IV=4, V=5, VI=6, VII=7, VIII=8, IX=9, X=10, XI=11, XII=12, XIII=13, XIV=14, XV=15, XVI=16, XVII=17, XVIII=18, XIX=19, XX=20, XXI=21",
        "Placement sur l'axe : Distance graphique (en cm) = (Date_événement - Date_origine) * Échelle_choisie"
      ],
      methods: [
        "Trouver le siècle d'une année donnée : 1. Isoler les deux derniers chiffres de l'année. 2. S'ils sont différents de '00', prendre les chiffres restants à gauche et ajouter 1. 3. S'ils sont égaux à '00', garder simplement les chiffres de gauche. 4. Transcrire le nombre obtenu en chiffres romains majuscules. Exemples d'application : -25 -> Ier siècle av. J.-C. ; 374 -> 3 + 1 = IVe siècle ; 476 -> 4 + 1 = Ve siècle ; 622 -> 6 + 1 = VIIe siècle ; 1492 -> 14 + 1 = XVe siècle ; 1789 -> 17 + 1 = XVIIIe siècle ; 1910 -> 19 + 1 = XXe siècle ; 1960 -> 19 + 1 = XXe siècle ; 2015 -> 20 + 1 = XXIe siècle.",
        "Construire une frise chronologique selon les cinq étapes officielles : 1. Tracer deux segments parallèles de même longueur en respectant l'espacement et la largeur proposés (ex: largeur = 2 cm). 2. Graduer l'axe régulièrement en fonction de l'échelle imposée (ex: 1 cm = 5 ans ou 3 cm = 1000 ans). 3. Fermer l'extrémité gauche par un trait droit et poser une flèche orientée à l'extrémité droite. 4. Positionner sur l'axe les dates et inscrire verticalement ou en légende les événements correspondants. 5. Marquer le titre clair et explicite au-dessus de la frise et indiquer l'échelle.",
        "Classer une liste d'années par ordre chronologique croissant : 1. Séparer les années négatives (av. J.-C.) des années positives (après J.-C.). 2. Ordonner les années négatives de la plus petite vers la plus grande au sens algébrique (la plus grande valeur absolue d'abord, ex: -3000, -1893, -1275, -500, -25). 3. Placer ensuite l'an 1. 4. Ordonner les années positives par ordre croissant (ex: 65, 374, 476, 622, 987, 1492, 1621, 1789, 1910, 1918, 1960, 2002, 2007, 2010, 2016)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 14 (HISTOIRE LEÇON 5) : LES GRANDES PÉRIODES DE L'HISTOIRE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch5",
      lessonNumber: 5,
      title: "Les grandes périodes de l'histoire",
      pages: [1, 7],
      topics: [
        "Notions de période et de rupture :",
        "- La période : intervalle de temps plus ou moins long présentant des caractéristiques historiques, politiques ou culturelles communes.",
        "- La rupture historique : événement marquant ou date clé qui clôt une période et inaugure le début d'une nouvelle ère.",
        "Les quatre périodes classiques de l'histoire universelle (histoire générale de l'humanité) :",
        "1. L'Antiquité : de -3000 (invention de l'écriture en Mésopotamie) à 476 après J.-C. (chute de l'Empire romain d'Occident). C'est la période la plus longue de l'histoire de l'humanité.",
        "2. Le Moyen Âge : de 476 à 1492 (découverte de l'Amérique par Christophe Colomb).",
        "3. Les Temps Modernes : de 1492 à 1789 (déclenchement de la Révolution française).",
        "4. L'Époque Contemporaine : de 1789 jusqu'à nos jours.",
        "Les cinq grandes périodes de l'histoire de l'Afrique :",
        "1. La période obscure : de -3000 à 476 après J.-C. (période encore méconnue et en cours de fouilles archéologiques).",
        "2. Le Moyen Âge africain : de 476 à 1492 (période faste et glorieuse des grands empires ouest-africains : Ghana, Mali, Songhaï).",
        "3. La période de la traite négrière (ou traite atlantique) : de 1492 à 1848 (commerce triangulaire et déportation massive d'esclaves, achevée en 1848 par l'abolition dans les colonies françaises).",
        "4. La période de la colonisation : de 1848 à 1960 (conquête militaire, partage de l'Afrique et exploitation coloniale, s'achevant avec les indépendances de 1960).",
        "5. La période des indépendances : de 1960 à nos jours.",
        "Les quatre grandes périodes de l'histoire de la Côte d'Ivoire :",
        "1. La période obscure : de -1500 (fin du néolithique ivoirien) à 1470 (découverte des côtes ivoiriennes par les navigateurs portugais).",
        "2. La période précoloniale : de 1470 à 1893 (mise en place des peuplements, chefferies et royaumes traditionnels, achevée le 10 mars 1893 par le décret créant la colonie de Côte d'Ivoire).",
        "3. La période coloniale : de 1893 à 1960 (domination française, résistances armées et luttes politiques, s'achevant le 7 août 1960 avec la proclamation de l'indépendance).",
        "4. La période de l'indépendance : de 1960 à nos jours.",
        "Principe de relativité de la périodisation historique : il n'y a pas d'unanimité universelle unique dans le découpage de l'histoire ; chaque peuple ou continent adopte son propre découpage chronologique qui reflète ses réalités vécues et ses tournants majeurs spécifiques."
      ],
      formulas: [
        "Périodes universelles : Antiquité [-3000 à 476] -> Moyen Âge [476 à 1492] -> Temps Modernes [1492 à 1789] -> Époque Contemporaine [1789 à nos jours]",
        "Périodes de l'Afrique : Période obscure [-3000 à 476] -> Moyen Âge africain / grands empires [476 à 1492] -> Traite atlantique [1492 à 1848] -> Colonisation [1848 à 1960] -> Indépendances [1960 à nos jours]",
        "Périodes de la Côte d'Ivoire : Période obscure [-1500 à 1470] -> Période précoloniale [1470 à 1893] -> Période coloniale [1893 à 1960] -> Indépendance [1960 à nos jours]",
        "Événements de rupture : -3000 (Écriture) | 476 (Chute Rome Occident) | 1470 (Navigateurs portugais en CI) | 1492 (Christophe Colomb / Amérique) | 1848 (Abolition traite négrière) | 1893 (Création colonie CI) | 1960 (Indépendance CI et décolonisation africaine)"
      ],
      methods: [
        "Situer un événement historique dans sa période correspondante : 1. Vérifier l'échelle géographique du sujet (Monde, Afrique ou Côte d'Ivoire). 2. Comparer l'année de l'événement aux bornes des périodes du programme. 3. Attribuer le nom officiel de la période (ex: la révolte des Abbey en 1910 en Côte d'Ivoire se situe dans la période coloniale ivoirienne [1893-1960] et dans l'époque contemporaine universelle [1789 à nos jours]).",
        "Construire une frise périodique comparée : 1. Tracer l'axe horizontal fléché à droite à l'échelle demandée (ex: 1 cm = 300 ans). 2. Placer les dates charnières (-3000, 476, 1492, 1789, ou -1500, 1470, 1893, 1960). 3. Colorier chaque tranche temporelle avec une teinte distincte. 4. Inscrire le titre de la période à l'intérieur du rectangle correspondant.",
        "Justifier la différence de périodisation entre la France et la Côte d'Ivoire : 1. Expliquer que la périodisation universelle découle de l'histoire européenne (chute de l'empire romain, découverte de l'Amérique, Révolution de 1789). 2. Démontrer que la Côte d'Ivoire a vécu des ruptures différentes (fin du néolithique vers -1500, premier contact maritime en 1470, décret colonial de 1893, indépendance de 1960). 3. Conclure que la périodisation n'est pas figée mais respecte l'histoire vécue par chaque nation."
      ]
    },

    // =========================================================================
    // THÈME 2 : LA PRÉHISTOIRE DE LA CÔTE D'IVOIRE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 15 (HISTOIRE LEÇON 6) : LE PALÉOLITHIQUE IVOIRIEN
    // -------------------------------------------------------------------------
    {
      id: "hist-ch6",
      lessonNumber: 6,
      title: "Le paléolithique ivoirien",
      pages: [1, 8],
      topics: [
        "Définition de la préhistoire et du paléolithique : la préhistoire est la période la plus ancienne du passé humain qui précède l'invention de l'écriture. Elle débute avec l'apparition de l'homme sur la terre (il y a environ 3,5 millions d'années) et s'achève vers -3000. Le paléolithique, ou l'âge de la pierre taillée, en est la première période.",
        "Chronologie du paléolithique en Côte d'Ivoire : s'étend d'environ -100 000 ans à -8 000 ans avant Jésus-Christ. (Subdivision générale : paléolithique inférieur [-3 millions à -100 000], paléolithique moyen [-100 000 à -15 000], paléolithique supérieur [jusqu'à -8 000 / -10 000]).",
        "Les sites archéologiques paléolithiques en Côte d'Ivoire :",
        "- Au Nord : Boundiali, Odienné, Kong, Touba, Fourouna, Séguéla.",
        "- Au Sud : carrières d'Anyama, Bingerville, Attinguié (alentours d'Abidjan).",
        "- Au Centre : Béoumi, Bouaké, Toumodi.",
        "- À l'Ouest : Foué (près de Guiglo).",
        "- À l'Est : Abengourou.",
        "- Dans le Sud forestier : Divo, Lakota.",
        "Les vestiges et outils découverts :",
        "- Caractéristiques des outils : outils de formes grossières, très lourds et volumineux, taillés par percussion directe dans des blocs de quartz ou de roches dures à l'aide de percuteurs en pierre ou en bois.",
        "- Les premiers outils majeurs : galets aménagés (les plus rudimentaires), bifaces, grattoirs, racloirs.",
        "- Les autres outillages : perçoirs, pointes de flèches, harpons, fragments d'armes et d'outils.",
        "- Fonctions des outils : racler les peaux d'animaux, gratter les os et morceaux de bois, couper la viande et le bois, chasser du gibier et assurer la défense contre les prédateurs.",
        "La civilisation et le mode de vie des hommes du paléolithique :",
        "- Mode de vie nomade : les hommes se déplacent continuellement en petites bandes à la recherche de nourriture (gibier, poissons, végétaux sauvages).",
        "- Activités économiques : chasse, pêche et cueillette (économie de subsistance et de prédation, sans agriculture ni élevage).",
        "- Habitat : mode de vie troglodyte, abris dans les cavernes, grottes naturelles, contreforts des grands arbres, huttes sommaires ou sommeil à l'air libre.",
        "- Habillement : vêtements confectionnés à partir de peaux d'animaux chassés, de feuilles d'arbres et d'écorces battues.",
        "Raisons de la rareté des vestiges paléolithiques découverts en Côte d'Ivoire :",
        "- Forte acidité des sols ferralitiques forestiers qui dissout et détruit les ossements.",
        "- Épaisse couverture végétale qui dissimule les sites et complique les prospections de terrain.",
        "- Rareté des grottes et abris calcaires préservant les habitats.",
        "- Insuffisance de moyens financiers, matériels et humains alloués aux fouilles archéologiques."
      ],
      formulas: [
        "Chronologie du Paléolithique ivoirien = [-100 000 av. J.-C. à -8 000 av. J.-C.]",
        "Caractéristiques paléolithiques : Outils = Pierre taillée (quartz, grossier) ; Économie = Chasse + Pêche + Cueillette (Prédation) ; Mode de vie = Nomade ; Habitat = Troglodyte (grottes, abris sous roche, contreforts d'arbres)",
        "Répartition géographique : Galets aménagés & Bifaces -> Bingerville, Anyama, Attinguié, Fourouna, Odienné ; Grattoirs & Racloirs -> Nord, Centre et Ouest"
      ],
      methods: [
        "Identifier si un outil appartient au paléolithique : 1. Observer la technique de fabrication : si la pierre est grossièrement taillée par éclats/percussion sans polissage -> Paléolithique. 2. Vérifier le type d'outil : galet aménagé, biface, racloir, grattoir, perçoir lourd. 3. Exclure formellement les outils polis (haches polies, meules, poteries qui appartiennent au Néolithique).",
        "Associer les sites paléolithiques ivoiriens à leurs régions : 1. Sud : Bingerville, Anyama, Attinguié. 2. Nord : Boundiali, Odienné, Kong, Touba, Fourouna, Séguéla. 3. Centre : Béoumi, Toumodi, Bouaké. 4. Ouest : Foué (Guiglo). 5. Est : Abengourou.",
        "Expliquer la relation entre les outils lourds et le quotidien paléolithique : 1. Les outils primitifs et lourds imposaient un travail physique pénible pour dépecer et couper. 2. L'absence d'agriculture obligeait les hommes à se déplacer sans cesse (nomadisme) pour suivre les animaux sauvages. 3. L'amélioration progressive des pointes de flèches a permis de chasser un gibier de taille croissante."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 16 (HISTOIRE LEÇON 7) : LA RÉVOLUTION DU NÉOLITHIQUE EN CÔTE D'IVOIRE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch7",
      lessonNumber: 7,
      title: "La révolution du néolithique en Côte d'Ivoire",
      pages: [1, 11],
      topics: [
        "Définition et étymologie : le néolithique signifie 'l'âge de la nouvelle pierre' ou 'l'âge de la pierre polie'. C'est la seconde et dernière période de la préhistoire.",
        "Chronologie du néolithique en Côte d'Ivoire : s'étend de -8 000 à -1 500 avant Jésus-Christ (alors qu'au Proche-Orient il s'achève vers -3000 avec l'écriture). La plus ancienne date attestée par le carbone 14 en Côte d'Ivoire est d'environ 1600 avant J.-C.",
        "Pourquoi parle-t-on de 'révolution du néolithique' ? : il s'agit d'une transformation radicale, profonde et irréversible de l'ensemble des activités humaines, des techniques et du mode de vie des populations, marquant une rupture complète avec le paléolithique.",
        "Les nouveaux outils néolithiques, plus fins, polis et spécialisés :",
        "- Haches polies taillées dans des 'roches vertes' puis polies à l'eau et au sable.",
        "- Lames de silex affûtées, perçoirs fins, aiguilles et hameçons en os.",
        "- Faucilles pour moissonner les récoltes.",
        "- Meules, pilons et mortiers en pierre pour broyer les grains de céréales et tubercules.",
        "- Récipients en céramique et poterie pour cuire les aliments et stocker l'eau et les céréales.",
        "Les sites et vestiges néolithiques en Côte d'Ivoire (très nombreux et répartis sur tout le pays) :",
        "- Amas de coquillages sur le littoral et en basse Côte d'Ivoire (Adiopodoumé, Dabou, Assinie, Lozoua, Loviguié, Krinjabo), témoignant d'une intense consommation de fruits de mer et de poissons.",
        "- Grandes dalles en pierre polie : Odienné.",
        "- Grottes aménagées et habitées : Man, Daloa, Niakaramadougou.",
        "- Tessons et débris de poterie : Ferkessédougou, Korhogo, Toumodi.",
        "- Gravures et art rupestres : Man, Niakaramadougou, Daloa.",
        "- Haches polies : découvertes un peu partout sur l'ensemble du territoire ivoirien.",
        "- Répartition régionale des sites : Sud (Adiopodoumé, Dabou, Divo, Lozoua, Loviguié), Centre-Ouest (Daloa, Bouaflé), Centre (Toumodi, Dimbokro, Bouaké), Nord (Ferkessédougou, Odienné, Korhogo, Niakaramadougou, Boundiali, Kong), Est (Arrah), Ouest (Touba, Man).",
        "La métamorphose des activités économiques :",
        "- Apparition de l'agriculture : culture méthodique de plantes vivrières.",
        "- Élevage et domestication des animaux : bétail assurant une réserve stable de viande et de lait.",
        "- Naissance de l'artisanat : poterie modelée et cuite, fabrication de nattes et vannerie.",
        "- Pratique du troc : échanges de biens et de denrées entre groupes voisins.",
        "Le nouveau mode de vie social, politique et religieux :",
        "- Sédentarisation : abandon du nomadisme ; les hommes construisent des habitations durables et se fixent en un lieu permanent pour veiller sur leurs champs et leurs troupeaux.",
        "- Premières organisations sociales et politiques : constitution de familles élargies, de villages permanents, de chefferies, de tribus et d'embryons de royaumes.",
        "- Naissance des pratiques religieuses et de l'art : sépultures organisées pour enterrer les morts, culte des ancêtres, vénération des forces naturelles et création de gravures rupestres."
      ],
      formulas: [
        "Chronologie du Néolithique ivoirien = [-8 000 av. J.-C. à -1 500 av. J.-C.]",
        "Formule de la Révolution Néolithique = Pierre polie + Sédentarisation (villages) + Agriculture / Élevage + Artisanat (poterie) + Troc",
        "Opposition fondamentale Paléolithique vs Néolithique : [Pierre taillée grossière / Nomadisme / Chasse-Cueillette / Abris naturels] vs [Pierre polie / Sédentarité / Agriculture-Élevage / Maisons & Villages / Poterie]",
        "Associations sites-vestiges : Littoral (Dabou, Assinie, Lozoua) -> Amas de coquillages ; Odienné -> Grandes dalles ; Ferké, Korhogo, Toumodi -> Tessons de poterie ; Man, Daloa, Niakara -> Grottes & Gravures rupestres"
      ],
      methods: [
        "Démontrer que le néolithique est une véritable 'révolution' : 1. Relever la rupture technique : passage de la pierre taillée brute à la pierre polie fine et spécialisée (meules, haches, mortiers, poteries). 2. Relever la rupture économique : passage d'une économie prédatrice (chasse/cueillette) à une économie productive (agriculture, élevage d'animaux, artisanat). 3. Relever la rupture spatiale : passage du nomadisme permanent à la sédentarisation dans des villages construits. 4. Relever la rupture sociale : émergence des familles organisées, chefferies, cultes des ancêtres et tombes.",
        "Relier un site néolithique ivoirien à son vestige caractéristique : 1. Dabou / Assinie / Lozoua -> Amas de coquillages. 2. Odienné -> Grandes dalles. 3. Man / Daloa / Niakaramadougou -> Grottes et gravures rupestres. 4. Ferkessédougou / Korhogo / Toumodi -> Débris de poterie.",
        "Distinguer les outils du paléolithique de ceux du néolithique dans un inventaire : Paléolithique -> galets aménagés, bifaces, racloirs, grattoirs ; Néolithique -> haches polies, meules, pilons, mortiers, faucilles, poteries, hameçons fins."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 17 (HISTOIRE LEÇON 8) : LA MÉTALLURGIE DU FER EN CÔTE D'IVOIRE
    // -------------------------------------------------------------------------
    {
      id: "hist-ch8",
      lessonNumber: 8,
      title: "La métallurgie du fer en Côte d'Ivoire",
      pages: [1, 8],
      topics: [
        "Définition de la métallurgie du fer : art et ensemble des procédés techniques permettant l'extraction du minerai de fer de la terre et sa transformation en métal utilisable pour la fabrication d'outils, d'armes et d'objets usuels.",
        "Chronologie de l'âge du fer en Côte d'Ivoire : s'étend du XIe siècle avant Jésus-Christ au VIIe siècle après Jésus-Christ (-1100 à +700). Le travail du fer succède à celui de la pierre.",
        "Les sites archéologiques de la métallurgie du fer en Côte d'Ivoire :",
        "- Au Sud : Lozoua, Attinguié, Agboville.",
        "- Au Centre-Ouest : Oumé, Issia.",
        "- À l'Ouest : Toulepleu.",
        "- Au Nord : Boundiali, Odienné, Doropo.",
        "Les quatre étapes successives de la chaîne opératoire du travail du fer (sidérurgie directe) :",
        "1. L'extraction du minerai de fer : creusement de puits ou de tranchées dans le sol pour extraire le minerai rocheux mélangé à la terre.",
        "2. La fonte du fer dans les hauts fourneaux : concassage et lavage du minerai pour recueillir les cristaux de fer, puis enfournement avec du charbon de bois dans un haut fourneau en terre cuite ; chauffage à très haute température grâce à des tuyères et des soufflets pour faire fondre le métal et obtenir la loupe de fer (fonte de fer brute).",
        "3. La solidification : le métal liquide obtenu est déversé dans des moules ou récipients pour refroidissement et solidification sous forme de barres, de lingots ou de boules de fer.",
        "4. La transformation en outils (le forgeage) : les barres et boules de fer sont chauffées au rouge dans le foyer de forge, puis façonnées à chaud par le forgeron sur l'enclume à l'aide de marteaux pour fabriquer une variété d'outils et d'armes.",
        "Les outils et objets fabriqués grâce à la métallurgie :",
        "- Outils agricoles : houes, dabas, haches, faucilles, pioches pour défricher la végétation forestière et labourer les sols durs.",
        "- Armes de chasse et de guerre : pointes de flèches, lances, couteaux, fusils artisanaux assurant la sécurité et l'expansion militaire.",
        "- Outils professionnels : pics pour l'extraction de l'or dans les mines, herminettes pour sculpter les pirogues de pêche lagunaire.",
        "- Ustensiles ménagers : marmites, fourneaux, clous.",
        "Les avantages et progrès économiques de la métallurgie du fer :",
        "- Essor spectaculaire de la production agricole grâce aux dabas et houes résistantes permettant de conquérir la forêt dense.",
        "- Développement et accélération de la production aurifère (exploitation facilitée des gisements d'or par les pics de mine en fer).",
        "- Émergence et essor des échanges commerciaux et des marchés régionaux.",
        "- Naissance de nouveaux corps de métiers spécialisés : forgerons, armuriers, orfèvres, fondeurs.",
        "Les avantages et progrès sociaux de la métallurgie du fer :",
        "- Amélioration sensible de la qualité des ustensiles domestiques et instruments de travail.",
        "- Naissance de nouvelles couches et classes sociales : les artisans et surtout la caste très influente des forgerons (dépositaires de secrets mystiques et techniques).",
        "- Allongement de l'espérance de vie des populations grâce à une alimentation plus abondante.",
        "- Sécurité renforcée des communautés face aux animaux féroces et aux ennemis extérieurs grâce aux armes en métal.",
        "- Cristallisation des premières chefferies puissantes et émergence de cités marchandes prospères (Kong, Bondoukou, Ténéguéra)."
      ],
      formulas: [
        "Chronologie de l'Âge du Fer ivoirien = [XIe siècle av. J.-C. au VIIe siècle apr. J.-C.] (soit de -1100 à +700)",
        "Séquence de la chaîne opératoire : 1. Extraction du minerai -> 2. Fonte (haut fourneau) -> 3. Solidification (barres/boules) -> 4. Transformation en outils (forgeage sur enclume)",
        "Équipements de la forge : Foyer de chauffe + Soufflets + Tuyères + Enclume + Marteau",
        "Corrélation socio-économique : Maîtrise du fer -> Agriculture performante (dabas/houes) + Exploitation aurifère + Armes de défense -> Cités marchandes et chefferies (Kong, Bondoukou)"
      ],
      methods: [
        "Décrire dans l'ordre chronologique les 4 étapes de fabrication d'un outil en fer : 1. Étape 1 - L'extraction du minerai : on creuse le sol pour extraire le minerai de fer mélangé à la terre. 2. Étape 2 - La fonte du fer : après lavage et concassage, les cristaux sont chauffés à haute température dans des hauts fourneaux pour obtenir le fer en fusion. 3. Étape 3 - La solidification : le fer liquide est coulé dans des récipients pour refroidir et se solidifier en barres ou boules. 4. Étape 4 - La transformation en outils : les barres rougies au feu sont forgées au marteau sur l'enclume pour façonner l'outil.",
        "Expliquer pourquoi la métallurgie du fer a instauré un 'nouvel ordre économique et social' : 1. Sur le plan économique : les dabas et haches en fer ont permis de défricher les forêts compactes et de multiplier les récoltes ; les pics ont permis d'extraire l'or des mines ; le commerce s'est développé. 2. Sur le plan social : apparition de métiers spécialisés et de la caste des forgerons, renforcement de la sécurité des villages, allongement de la vie et constitution des premières grandes cités marchandes.",
        "Localiser les sites de la métallurgie du fer en Côte d'Ivoire : Sud -> Lozoua, Attinguié, Agboville ; Centre-Ouest -> Oumé, Issia ; Ouest -> Toulepleu ; Nord -> Boundiali, Odienné, Doropo."
      ]
    }
  ]
} as const;

// -----------------------------------------------------------------------------
// FONCTIONS DE RECHERCHE ET D'EXTRACTION DE CONTEXTE (100% LOCALES)
// -----------------------------------------------------------------------------

/**
 * Normalise une chaîne de caractères en retirant la casse, les accents et la ponctuation parasite.
 */
function normalizeQueryText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim();
}

/**
 * Recherche et classe les chapitres d'Histoire et Géographie 6ème les plus pertinents pour un énoncé donné.
 * Scoring déterministe basé sur l'occurrence des concepts, formules et méthodes du cours.
 */
export function findHistoireGeo6eChapters(query: string, limit = 3): { chapter: Chapter; score: number }[] {
  const normQuery = normalizeQueryText(query);
  const words = normQuery
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !/^(les|des|une|dans|pour|avec|quel|quels|quelle|quelles|cette|sont|leur|leurs|est|par|sur|que|qui|son|ses|aux|non|oui|ont|fait)$/.test(w));

  const scored = (histoireGeo6eKnowledgeBase.chapters as readonly Chapter[]).map((chapter) => {
    let score = 0;
    const titleNorm = normalizeQueryText(chapter.title);

    // Correspondance sur le titre
    for (const word of words) {
      if (titleNorm.includes(word)) score += 10;
    }

    // Mots-clés hautement discriminants par chapitre
    if (chapter.id === "geo-ch1" && /(geographie|branche|demarche|graphein|geographe)/.test(normQuery)) score += 15;
    if (chapter.id === "geo-ch2" && /(relief|montagne|plateau|plaine|colline|butte|vallee|talus|interfluve|cuvette|altitude|denivellation|pente)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch3" && /(climat|temperature|precipitation|anemometre|pluviometre|barometre|thermetre|amplitude thermique|ombrothermique|zone chaude|zone temperee|zone froide)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch4" && /(sol|vegetation|foret|savane|ferralitique|ferrugineux|hydromorphe|humus|attieen|baouleen|soudanais|interrelation)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch5" && /(representation|carte|globe|planisphere|mappemonde|projection|cylindrique|conique|azimutale|polaire|equateur|meridien|greenwich|latitude|longitude|echelle|legende)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch6" && /(rotation|revolution|fuseau|gmt|mouvement apparent|cardinaux|points cardinaux|saisons|24 heures|365)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch7" && /(population|abidjan|environnement|deforestation|precaire|ordures|pollution|inondation|reboisement)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch8" && /(eau|cycle de l eau|evaporation|condensation|infiltration|ruissellement|potable|nappe phreatique|gazeux|liquide|solide)/.test(normQuery)) score += 18;
    if (chapter.id === "geo-ch9" && /(impot|contribuable|dgi|tresor|taxe|tva|igr|recouvrement|developpement de ma region|devoir)/.test(normQuery)) score += 18;

    if (chapter.id === "hist-ch1" && /(histoire|herodote|historia|evenement|civilisation|passe de l homme|demarche de l historien|impartial)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch2" && /(source|muette|archeologique|ecrite|orale|audiovisuelle|griot|carbone 14|fouille|manuscrit|tombouctou)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch3" && /(dignite humaine|guerre|violence|dih|croix-rouge|solferino|henry dunant|viol|crime de guerre|crime contre l humanite|genocide)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch4" && /(chronologie|frise|siecle|millenaire|decennie|chiffre romain|avant jc|jesus-christ|hegire|622|an 1|axe chronologique)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch5" && /(periodes|antiquite|moyen-age|temps modernes|epoque contemporaine|traite negriere|colonisation|independance|rupture|1492|1789|1893|1960)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch6" && /(paleolithique|pierre taillee|troglodyte|nomade|biface|galet amenage|racloir|grattoir|anyama|bingerville|fourouna)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch7" && /(neolithique|pierre polie|revolution du neolithique|sedentaire|agriculture|elevage|amas de coquillage|dabou|tesson|poterie|hache polie|gravure rupestre)/.test(normQuery)) score += 18;
    if (chapter.id === "hist-ch8" && /(metallurgie|fer|age du fer|haut fourneau|minerai|enclume|marteau|forgeron|caste|daba|houe|doropo|toulepleu|oume|solidification|fonte)/.test(normQuery)) score += 18;

    // Correspondance sur les notions
    for (const topic of chapter.topics) {
      const topicNorm = normalizeQueryText(topic);
      for (const word of words) {
        if (topicNorm.includes(word)) score += 4;
      }
    }

    // Correspondance sur les formules
    for (const formula of chapter.formulas) {
      const formulaNorm = normalizeQueryText(formula);
      for (const word of words) {
        if (formulaNorm.includes(word)) score += 3;
      }
    }

    // Correspondance sur les méthodes
    for (const method of chapter.methods) {
      const methodNorm = normalizeQueryText(method);
      for (const word of words) {
        if (methodNorm.includes(word)) score += 3;
      }
    }

    return { chapter, score };
  });

  return scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Construit le contexte textuel officiel (Leçon + Notions + Formules + Méthodes)
 * prêt à être injecté dans le solveur déterministe ou le moteur d'explication.
 */
export function buildHistoireGeo6eContext(query: string): string {
  const matches = findHistoireGeo6eChapters(query, 2);

  if (matches.length === 0) {
    return "Aucun chapitre d'Histoire-Géographie 6ème directement identifié pour cet énoncé.";
  }

  const parts = matches.map(({ chapter, score }, index) => {
    return [
      `### [RÉFÉRENTIEL OFFICIEL HG 6È - EXTRAIT ${index + 1}] : ${chapter.title} (ID: ${chapter.id}, Pertinence: ${score})`,
      ...(chapter.pages ? [`*Pages au programme : ${chapter.pages[0]} à ${chapter.pages[1]}*`] : []),
      "",
      "**1. NOTIONS ET DÉFINITIONS DU COURS :**",
      ...chapter.topics.map((t) => `- ${t}`),
      "",
      "**2. FORMULES, RÈGLES ET REPÈRES OPÉRATIONNELS :**",
      ...chapter.formulas.map((f) => `- ${f}`),
      "",
      "**3. MÉTHODES DE RÉSOLUTION PAS À PAS :**",
      ...chapter.methods.map((m) => `- ${m}`),
      ""
    ].join("\n");
  });

  return [
    "=== BASE DE CONNAISSANCES OFFICIELLE LE PROF — HISTOIRE-GÉOGRAPHIE 6ÈME ===",
    ...parts
  ].join("\n\n");
}
