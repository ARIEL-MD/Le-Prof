/**
 * BASE DE CONNAISSANCES OFFICIELLE : GÉOGRAPHIE CLASSE DE SIXIÈME (6ème)
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - Côte d'Ivoire
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les 2 Thèmes et les 9 Leçons officielles de 6ème :
 * 
 * THÈME 1 : LES BASES DE L'ÉTUDE DE LA GÉOGRAPHIE
 * - Leçon 1 : La géographie et son objet (étymologie gê + graphein, 3 branches, démarche en 5 étapes, utilité)
 * - Leçon 2 : Le relief (définition, 3 grands ensembles: montagnes, plateaux, plaines; 6 formes élémentaires: colline, butte, vallée, talus, interfluve, cuvette; 3 éléments: altitude, pente, dénivellation)
 * - Leçon 3 : Le climat (définition, 3 éléments: température, précipitations, vent; instruments: thermomètre, pluviomètre, anémomètre, baromètre; amplitude thermique; 3 zones: chaude/intertropicale, tempérée, froide; diagramme ombrothermique)
 * - Leçon 4 : L'interrelation entre le sol, le climat et la végétation (végétations CI: forêt dense/claire, savane arbustive/herbeuse; sols: ferralitiques, ferrugineux, hydromorphes; climats CI: attiéen, baouléen, montagne, soudanais; influences réciproques)
 * - Leçon 5 : Les moyens de représentation de la terre (forme ronde/sphérique aplatie aux pôles, globe, méridiens/parallèles/équateur/latitude/longitude; carte, plan, légende, échelle numérique/graphique; projections: cylindrique, conique, polaire)
 * - Leçon 6 : Les mouvements de la terre et leurs influences sur la vie quotidienne (rotation en 24h d'Ouest en Est -> alternance jour/nuit, 24 fuseaux horaires GMT, mouvement apparent du soleil, points cardinaux; révolution en 365j 6h autour du soleil -> inégale durée des jours et des nuits, succession des 4 saisons)
 * 
 * THÈME 2 : L'HOMME ET SON MILIEU LOCAL EN CÔTE D'IVOIRE
 * - Leçon 1 : Population et environnement local (District d'Abidjan: plaine, climat attiéen, lagune/mer, forêt, sols ferralitiques/hydromorphes, pétrole/gaz; facteurs d'installation; dégradation environnementale: déforestation, pollution, feux; solutions de préservation)
 * - Leçon 2 : L'homme et le cycle de l'eau (3 états de l'eau: liquide, gazeux, solide; cycle: évaporation océanique/continentale, condensation, nuages, précipitations, ruissellement, infiltration; importance et sauvegarde de l'eau douce)
 * - Leçon 3 : L'importance de l'impôt dans le développement de ma région (définition de l'impôt, impôts directs et indirects, rôle des contribuables, rôle de la DGI, financement des infrastructures publiques)
 */

export interface Geo6eLesson {
  lessonNumber: number;
  themeId: string;
  themeTitle: string;
  chapterTitle: string;
  situationContext: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  coreConceptsAndRules: Record<string, string>;
  methodologySteps: {
    title: string;
    description: string;
    stepByStep: string[];
  }[];
  commonMistakesToAvoid: string[];
}

export interface Geo6eTheme {
  id: string;
  themeTitle: string;
  lessons: Geo6eLesson[];
}

export interface Geo6eKnowledgeBase {
  name: string;
  level: string;
  discipline: string;
  country: string;
  version: string;
  themes: Geo6eTheme[];
}

export const geographie6eKnowledgeBase: Geo6eKnowledgeBase = {
  name: "Référentiel National Géographie 6ème",
  level: "6ème",
  discipline: "Géographie",
  country: "Côte d'Ivoire (École Numérique & Programmes Officiels)",
  version: "2024-2026 APC",
  themes: [
    {
      id: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessons: [
        {
          lessonNumber: 1,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 1 : La géographie et son objet",
          situationContext: "Au cours d'une visite à l'Institut de Télédétection et de Géographie, des élèves de 6ème découvrent que la géographie est une science et entreprennent des recherches sur ses domaines, sa démarche et son utilité.",
          objectives: [
            "Définir la géographie selon son étymologie et son sens moderne",
            "Identifier l'objet de la géographie",
            "Distinguer les 3 branches de la géographie (physique, humaine, économique)",
            "Énumérer et appliquer les 5 étapes de la démarche géographique",
            "Expliquer l'utilité de la géographie pour la vie sociale et civique"
          ],
          keyDefinitions: {
            "Étymologie de la géographie": "Vient de deux mots grecs : 'gê' (terre) et 'graphein' (dessin ou écriture). C'est étymologiquement le dessin ou la description de la terre.",
            "Définition moderne de la géographie": "Science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la terre, et analyse les interactions entre l'homme et son milieu.",
            "Objet de la géographie": "La description et l'explication des phénomènes physiques, biologiques et humains à la surface de la terre et dans l'atmosphère.",
            "Géographie physique": "Branche de la géographie qui étudie les phénomènes physiques à la surface de la terre (relief, climat, sols, hydrographie, végétation).",
            "Géographie humaine": "Branche de la géographie qui étudie la population et la démographie (structure, effectif, répartition et mode de vie des populations).",
            "Géographie économique": "Branche de la géographie qui étudie les activités économiques des hommes (agriculture, pêche, artisanat, commerce, transport, industrie)."
          },
          coreConceptsAndRules: {
            "Les 5 étapes de la démarche géographique": "1. L'observation (directe sur le terrain ou indirecte sur photo/carte) ; 2. La localisation (situer le phénomène dans l'espace à partir de repères) ; 3. La description (mettre en relief les particularités du phénomène) ; 4. L'explication (donner les causes, le pourquoi et le comment) ; 5. La comparaison (mettre en évidence similitudes et différences).",
            "Utilité de la géographie": "1. Meilleure découverte et connaissance du monde ; 2. Développement de l'esprit d'ouverture et instruction ; 3. Connaissance des us et coutumes des autres peuples favorisant la tolérance ; 4. Préparation à la vie sociale, civique et à la solidarité internationale."
          },
          methodologySteps: [
            {
              title: "Démarche d'analyse géographique d'un phénomène",
              description: "Appliquer la démarche du géographe en 5 étapes ordonnées",
              stepByStep: [
                "Étape 1 - Observation : regarder directement ou sur document le phénomène.",
                "Étape 2 - Localisation : situer avec précision le lieu et les repères géographiques.",
                "Étape 3 - Description : caractériser les formes, grandeurs et particularités observées.",
                "Étape 4 - Explication : identifier les causes naturelles ou humaines du phénomène.",
                "Étape 5 - Comparaison : confronter avec d'autres régions pour dégager similitudes et contrastes."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre géographie physique (relief, climat) et géographie humaine (population, démographie).",
            "Ne pas oublier l'ordre des 5 étapes de la démarche : Observation -> Localisation -> Description -> Explication -> Comparaison."
          ]
        },
        {
          lessonNumber: 2,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 2 : Le relief",
          situationContext: "Des élèves sur le chemin du lycée s'interrogent sur les montées et descentes rencontrées et cherchent à identifier les formes et les éléments du relief.",
          objectives: [
            "Définir le relief",
            "Distinguer les 3 grands ensembles de relief (montagnes, plateaux, plaines)",
            "Identifier les 6 formes élémentaires du relief (colline, butte, vallée, talus, interfluve, cuvette)",
            "Définir et calculer les 3 éléments du relief : altitude, pente, dénivellation"
          ],
          keyDefinitions: {
            "Relief": "Ensemble des inégalités à la surface de la terre et des fonds océaniques.",
            "Montagne": "Relief très élevé (altitude généralement supérieure à 900 m) avec des pentes fortes ou raides, séparées par des vallées encaissées.",
            "Plateau": "Relief plus ou moins plat et élevé où les cours d'eau sont encaissés (creusent des vallées).",
            "Plaine": "Surface presque plane et de faible altitude (0 à 50 mètres) sur laquelle les cours d'eau coulent à fleur de sol (non encaissés).",
            "Colline": "Petite élévation de terre avec un sommet arrondi.",
            "Butte": "Petite élévation de terre avec un sommet plat.",
            "Vallée": "Creux ou dépression allongée créée par le ruissellement de l'eau sur un terrain incliné, dans lequel coule souvent un cours d'eau.",
            "Talus": "Paroi à pente plus ou moins abrupte reliant deux reliefs plans d'altitude différente.",
            "Interfluve": "Portion de terre ou espace topographique compris entre deux vallées voisines.",
            "Cuvette": "Dépression fermée vers le fond de laquelle les pentes convergent de tous les côtés.",
            "Altitude": "Distance verticale qui sépare un point du relief par rapport au niveau de la mer (niveau zéro 0 m).",
            "Pente": "Degré d'inclinaison d'un terrain, exprimé sous forme d'angle en degrés (°).",
            "Dénivellation": "Différence d'altitude entre deux points d'un relief (Dénivellation = Altitude B - Altitude A)."
          },
          coreConceptsAndRules: {
            "Formule de calcul de la dénivellation": "Dénivellation = Alt(B) - Alt(A). Exemple : si A est à 40 m et B à 60 m, la dénivellation DE = 60 m - 40 m = 20 m.",
            "Critères de distinction des grands reliefs": "Altitude + profil des cours d'eau : Montagne (haute altitude, forte pente), Plateau (plat mais cours d'eau encaissés), Plaine (faible altitude 0-50m, cours d'eau non encaissés)."
          },
          methodologySteps: [
            {
              title: "Identification et calcul des éléments du relief",
              description: "Déterminer les formes et calculer la dénivellation à partir d'un profil topographique",
              stepByStep: [
                "1. Repérer le niveau de base (niveau de la mer = 0 m).",
                "2. Noter l'altitude du point A et du point B.",
                "3. Calculer la dénivellation par soustraction : Dénivellation = Alt(B) - Alt(A).",
                "4. Déterminer la pente en observant l'angle d'inclinaison formé avec l'horizontale."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre une colline (sommet arrondi) et une butte (sommet plat).",
            "Ne pas confondre plateau (cours d'eau encaissés) et plaine (cours d'eau à fleur de sol).",
            "L'altitude se mesure toujours à partir du niveau de la mer (0 m)."
          ]
        },
        {
          lessonNumber: 3,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 3 : Le climat",
          situationContext: "Des élèves apprennent qu'il fait froid en Europe pendant qu'il fait chaud en Afrique et recherchent les composantes du climat, les instruments de mesure et les grandes zones climatiques du monde.",
          objectives: [
            "Définir le climat et le distinguer du temps qu'il fait",
            "Identifier les 3 éléments du climat : température, précipitations, vent",
            "Associer chaque élément à son instrument de mesure : thermomètre, pluviomètre, anémomètre, baromètre",
            "Calculer et définir l'amplitude thermique annuelle",
            "Caractériser les 3 grandes zones climatiques du globe (chaude, tempérée, froide)"
          ],
          keyDefinitions: {
            "Climat": "État moyen de l'atmosphère dans une région donnée, observé sur une longue période (au moins 30 ans), ou ensemble des saisons qui se succèdent régulièrement.",
            "Température": "Quantité de chaleur contenue dans l'air, mesurée en degrés Celsius (°C) à l'aide d'un thermomètre.",
            "Précipitations": "Quantité d'eau qui tombe de l'atmosphère sur la terre (pluie, neige, grêle, rosée), mesurée en millimètres (mm) à l'aide d'un pluviomètre.",
            "Vent": "Déplacement horizontal de masses d'air, dont la vitesse est mesurée par l'anémomètre et la direction par la girouette.",
            "Pression atmosphérique": "Poids de l'air sur une surface donnée, mesurée à l'aide d'un baromètre.",
            "Amplitude thermique": "Différence entre la température du mois le plus chaud et la température du mois le moins chaud (Amplitude = Tmax - Tmin).",
            "Zone chaude (intertropicale)": "Zone située entre le Tropique du Cancer (Nord) et le Tropique du Capricorne (Sud), caractérisée par une chaleur constante et deux saisons (saison des pluies et saison sèche).",
            "Zone tempérée": "Zones situées entre les tropiques et les cercles polaires dans chaque hémisphère, caractérisées par 4 saisons (printemps, été, automne, hiver).",
            "Zone froide (polaire)": "Zones situées entre les cercles polaires et les pôles, caractérisées par un froid rigoureux et 2 saisons (été court et hiver long)."
          },
          coreConceptsAndRules: {
            "Calculs climatiques fondamentaux": "1. Amplitude thermique = T(mois le plus chaud) - T(mois le moins chaud) ; 2. Total pluviométrique annuel = Somme des précipitations des 12 mois ; 3. Moyenne annuelle de température = Somme des 12 températures mensuelles / 12.",
            "Vents majeurs en Côte d'Ivoire": "1. Mousson (vent humide venant de l'Océan Atlantique du Sud-Ouest vers le Nord-Est, apportant les pluies) ; 2. Harmattan (vent chaud et sec venant du Sahara du Nord-Est vers le Sud-Ouest, apportant fraîcheur nocturne et poussière)."
          },
          methodologySteps: [
            {
              title: "Analyse d'un tableau de données climatiques et diagramme ombrothermique",
              description: "Déterminer les paramètres d'une station météo",
              stepByStep: [
                "1. Repérer le mois le plus chaud (Tmax) et le mois le moins chaud (Tmin).",
                "2. Calculer l'amplitude thermique : Amplitude = Tmax - Tmin (°C).",
                "3. Calculer le total des pluies annuelles en sommant la ligne P(mm).",
                "4. Identifier la zone climatique correspondante en fonction des saisons et des températures."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre thermomètre (température), pluviomètre (pluie), anémomètre (vitesse du vent) et baromètre (pression).",
            "L'amplitude thermique est toujours une différence de températures (Tmax - Tmin), jamais une addition."
          ]
        },
        {
          lessonNumber: 4,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 4 : L'interrelation entre le sol, le climat et la végétation",
          situationContext: "En observant une carte physique de la Côte d'Ivoire, des élèves constatent que les paysages naturels changent du Sud au Nord et étudient les types de sols, de climats et de végétations.",
          objectives: [
            "Définir la végétation et le sol",
            "Identifier les types de végétations en Côte d'Ivoire (forêt dense, forêt claire, savane arbustive, savane herbeuse)",
            "Identifier les types de sols en Côte d'Ivoire (ferralitiques, ferrugineux, hydromorphes)",
            "Localiser les 4 grands climats de Côte d'Ivoire (attiéen, baouléen, de montagne, soudanais)",
            "Expliquer l'influence mutuelle entre climat, sol et végétation"
          ],
          keyDefinitions: {
            "Végétation": "Ensemble des plantes (arbres, herbes, lianes, arbustes) qui poussent naturellement dans une région donnée.",
            "Sol": "Partie superficielle et meuble de la croûte terrestre sur laquelle pousse la végétation et où vivent les êtres vivants.",
            "Forêt": "Formation végétale dense dominée par les arbres où les arbres sont plus abondants que les herbes.",
            "Savane": "Formation végétale ouverte dominée par les herbes hautes parsemées d'arbres ou d'arbustes.",
            "Sols ferralitiques": "Sols épais, très fertiles, de couleur rougeâtre, riches en fer et alumine, situés au Sud et à l'Ouest de la Côte d'Ivoire (propices au café, cacao, palmier à huile, hévéa, banane).",
            "Sols ferrugineux": "Sols moins épais, moins fertiles, de couleur grise ou ocre, situés au Centre et au Nord de la Côte d'Ivoire (propices au coton, anacarde, maïs, arachide, igname, mil, canne à sucre).",
            "Sols hydromorphes": "Sols des bas-fonds et zones marécageuses, gorgés d'eau en permanence (propices à la riziculture et maraîchage)."
          },
          coreConceptsAndRules: {
            "Tableau de synthèse des zones ivoiriennes": "- SUD : Climat attiéen (chaud et très humide), Sols ferralitiques et hydromorphes, Forêt dense.\n- CENTRE : Climat baouléen (atténué), Sols ferrugineux, Forêt claire et Savane arbustive.\n- OUEST : Climat de montagne (frais et pluvieux), Sols ferralitiques, Forêt dense de montagne.\n- NORD : Climat soudanais (chaud et sec), Sols ferrugineux, Savane herbeuse et arborée.",
            "Loi de l'interrelation": "Le climat détermine le type de sol et la quantité d'eau ; la fertilité du sol et l'humidité conditionnent le type de végétation ; la végétation protège le sol de l'érosion et régule les pluies par évapotranspiration."
          },
          methodologySteps: [
            {
              title: "Mise en relation sol-climat-végétation lors d'un voyage Nord-Sud",
              description: "Expliquer les changements de paysages naturels observés",
              stepByStep: [
                "1. Identifier la région ou zone géographique traversée.",
                "2. Déterminer le climat local (attiéen, baouléen, montagne ou soudanais).",
                "3. Associer le type de sol dominant (ferralitique, ferrugineux ou hydromorphe).",
                "4. Déduire la végétation naturelle adaptée (forêt dense, savane arbustive ou herbeuse).",
                "5. Justifier l'adaptation des cultures agricoles pratiquées."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas attribuer le cacao ou le café aux sols ferrugineux du Nord : ce sont des cultures de forêt sur sols ferralitiques du Sud/Ouest.",
            "Ne pas confondre savane arbustive (arbustes au centre) et savane herbeuse (herbes dominantes au nord)."
          ]
        },
        {
          lessonNumber: 5,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 5 : Les moyens de représentation de la terre",
          situationContext: "Des élèves visitent l'Institut Géographique et de Télédétection à Cocody pour comprendre comment représenter la terre immense sur des surfaces planes réduites.",
          objectives: [
            "Décrire la forme réelle de la terre (sphérique, légèrement aplatie aux pôles)",
            "Distinguer le globe terrestre, le planisphère, la mappemonde, la carte et le plan",
            "Définir les lignes imaginaires : méridiens, parallèles, équateur, tropiques, cercles polaires",
            "Définir la latitude, la longitude, la légende et l'échelle",
            "Distinguer les 3 types de projections cartographiques (cylindrique, conique, polaire/azimutale)"
          ],
          keyDefinitions: {
            "Forme de la terre": "Immense boule de forme sphérique, légèrement aplatie aux pôles Nord et Sud.",
            "Globe terrestre": "Représentation la plus fidèle de la terre sur une surface sphérique à dimensions réduites.",
            "Carte": "Représentation plane, géométrique et réduite de tout ou partie de la surface terrestre.",
            "Plan": "Représentation plane très détaillée d'un petit espace restreint (quartier, bâtiment, ville).",
            "Planisphère": "Carte représentant l'ensemble de la surface terrestre sur un seul planisphère en une seule vue.",
            "Mappemonde": "Carte représentant le globe terrestre divisé en deux hémisphères juxtaposés.",
            "Légende": "Ensemble des signes conventionnels, symboles et couleurs utilisés pour décoder et comprendre la carte.",
            "Échelle": "Rapport entre les dimensions sur la carte ou le plan et les dimensions réelles sur le terrain (Échelle = Longueur dessin / Longueur réelle).",
            "Méridiens": "Lignes imaginaires semi-circulaires reliant les deux pôles. Le méridien d'origine 0° est le méridien de Greenwich.",
            "Parallèles": "Lignes imaginaires circulaires parallèles à l'Équateur. L'Équateur (0°) partage la terre en deux hémisphères (Nord et Sud). Les parallèles remarquables sont le Tropique du Cancer (23°27' N), le Tropique du Capricorne (23°27' S), le Cercle polaire arctique (66°33' N) et le Cercle polaire antarctique (66°33' S).",
            "Latitude": "Distance angulaire en degrés (0° à 90°) d'un point par rapport à l'Équateur (Nord ou Sud).",
            "Longitude": "Distance angulaire en degrés (0° à 180°) d'un point par rapport au méridien de Greenwich (Est ou Ouest)."
          },
          coreConceptsAndRules: {
            "Les 3 types de projection cartographique": "1. Projection cylindrique : le globe est projeté sur un cylindre ; idéale pour les zones intertropicales/chaudes (déforme les pôles) ; 2. Projection conique : le globe est projeté sur un cône ; idéale pour les zones tempérées ; 3. Projection polaire (azimutale) : projection sur un plan tangent au pôle ; idéale pour les zones polaires."
          },
          methodologySteps: [
            {
              title: "Lecture et conversion d'échelle cartographique",
              description: "Passer de la distance sur la carte à la distance réelle sur le terrain",
              stepByStep: [
                "1. Noter l'échelle : exemple 1/400 000 (signifie 1 cm sur la carte = 400 000 cm = 4 km sur le terrain).",
                "2. Mesurer la distance sur la carte en cm (ex: 8 cm).",
                "3. Calculer la distance réelle : Distance réelle = 8 cm * 400 000 = 3 200 000 cm = 32 km."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre projection cylindrique (zone chaude) et projection conique (zone tempérée).",
            "Attention aux conversions d'unités dans l'échelle : 1 km = 1 000 m = 100 000 cm."
          ]
        },
        {
          lessonNumber: 6,
          themeId: "theme_1_bases_geographie",
          themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
          chapterTitle: "Leçon 6 : Les mouvements de la terre et leurs influences sur la vie quotidienne",
          situationContext: "Des élèves découvrent qu'il fait nuit en Côte d'Ivoire lorsqu'il fait jour aux États-Unis et recherchent les causes astronomiques et conséquences des mouvements de la terre.",
          objectives: [
            "Définir la rotation de la terre et donner sa durée (24 heures)",
            "Identifier les conséquences de la rotation (alternance jour/nuit, 24 fuseaux horaires, mouvement apparent du soleil, points cardinaux)",
            "Définir la révolution de la terre et donner sa durée (365 jours et 6 heures)",
            "Identifier les conséquences de la révolution (inégale durée du jour et de la nuit, succession des 4 saisons)"
          ],
          keyDefinitions: {
            "Rotation de la terre": "Mouvement que la terre effectue sur elle-même autour de son axe des pôles, d'Ouest en Est, en 24 heures (1 jour).",
            "Révolution de la terre": "Mouvement que la terre effectue autour du soleil sur son orbite en 365 jours et 6 heures (1 année).",
            "Fuseau horaire": "Chacune des 24 bandes longitudinales de 15° d'amplitude découpant la terre, où toutes les localités ont la même heure légale (référence GMT = Greenwich Mean Time).",
            "Mouvement apparent du soleil": "Impression visuelle que le soleil se déplace d'Est en Ouest dans le ciel, due en réalité à la rotation de la terre d'Ouest en Est.",
            "Points cardinaux": "Les 4 directions fondamentales d'orientation fixées grâce au lever (Est) et coucher (Ouest) du soleil : Est, Ouest, Nord, Sud."
          },
          coreConceptsAndRules: {
            "Conséquences de la rotation": "1. Alternance ou succession des jours et des nuits ; 2. Division de la terre en 24 fuseaux horaires de 1 heure chacun (+1h vers l'Est, -1h vers l'Ouest à partir de Greenwich) ; 3. Mouvement apparent du soleil de l'Est vers l'Ouest ; 4. Orientation par les points cardinaux ; 5. Déviation des vents et courants marins (Force de Coriolis : droite au Nord, gauche au Sud).",
            "Conséquences de la révolution": "1. Inégale durée du jour et de la nuit selon les saisons et la latitude ; 2. Succession des 4 saisons (printemps, été, automne, hiver) due à l'inclinaison de l'axe de la terre (23°27')."
          },
          methodologySteps: [
            {
              title: "Explication de la différence d'heure ou d'alternance jour/nuit",
              description: "Déterminer la cause scientifique d'un décalage horaire ou saisonnier",
              stepByStep: [
                "1. Pour le jour et la nuit : expliquer que la terre sphérique tourne sur elle-même en 24h ; la face exposée au soleil est dans le jour, la face opposée dans la nuit.",
                "2. Pour l'heure : situer le fuseau par rapport au méridien de Greenwich (vers l'Est on ajoute 1h par fuseau, vers l'Ouest on retranche 1h).",
                "3. Pour les saisons : expliquer que la terre inclinée tourne autour du soleil en 1 an, faisant varier l'ensoleillement au cours de l'année."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre rotation (sur elle-même en 24h) et révolution (autour du soleil en 365 jours 1/4).",
            "Ne pas dire que le soleil tourne autour de la terre : c'est un mouvement purement apparent."
          ]
        }
      ]
    },
    {
      id: "theme_2_milieu_local_ci",
      themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
      lessons: [
        {
          lessonNumber: 7,
          themeId: "theme_2_milieu_local_ci",
          themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
          chapterTitle: "Leçon 1 : Population et environnement local (Exemple du District d'Abidjan)",
          situationContext: "Face à l'explosion démographique de Yopougon et du District d'Abidjan, des élèves étudient le milieu physique, les causes de l'installation des hommes, la dégradation de l'environnement et les solutions.",
          objectives: [
            "Décrire le milieu physique local (relief de plaine, climat attiéen, végétation de forêt, sols fertiles, hydrographie lagunaire et maritime, ressources du sous-sol)",
            "Expliquer les facteurs naturels de fixation des populations",
            "Analyser l'impact de la croissance démographique et des activités humaines sur l'environnement",
            "Proposer des solutions concrètes de préservation et de protection environnementale"
          ],
          keyDefinitions: {
            "Environnement": "Ensemble des éléments naturels (air, eau, sol, faune, flore) et artificiels qui entourent l'homme et conditionnent sa vie.",
            "Croissance démographique": "Augmentation rapide du nombre d'habitants dans une localité due à la natalité et à l'immigration/exode rural.",
            "Déforestation": "Destruction massive et abusive des forêts par l'agriculture extensive, l'exploitation forestière et l'urbanisation.",
            "Nappe phréatique": "Nappe d'eau souterraine peu profonde alimentant les puits et les cours d'eau, vulnérable aux pollutions chimiques."
          },
          coreConceptsAndRules: {
            "Milieu physique d'Abidjan": "- Relief : Plaines faciles à bâtir et à aménager ;\n- Climat : Attiéen chaud et humide ;\n- Végétation : Forêt dense favorisant une forte pluviométrie ;\n- Sols : Ferralitiques et hydromorphes riches pour l'agriculture ;\n- Hydrographie : Lagune Ébrié, fleuves côtiers, mer (propices aux ports, pêche, commerce) ;\n- Sous-sol : Pétrole et gaz naturel offshore.",
            "Problèmes urbains et environnementaux": "Habitats précaires, constructions anarchiques, inondations, érosion, embouteillages, pollution de l'air et de l'eau, ordures ménagères non traitées.",
            "Solutions citoyennes et étatiques": "Reboisement, sensibilisation, création de parcs et réserves, assainissement, recyclage des déchets, décentralisation pour freiner l'exode rural."
          },
          methodologySteps: [
            {
              title: "Résolution d'une situation d'évaluation sur la dégradation environnementale",
              description: "Traiter la consigne en 3 volets (identification, explications, solutions)",
              stepByStep: [
                "1. Identifier 2 à 3 activités humaines dégradantes (agriculture sur brûlis, déversement de déchets, exploitation forestière anarchique).",
                "2. Expliquer leurs conséquences directes (pollution des nappes, érosion des sols, réchauffement local, inondations).",
                "3. Proposer des solutions adaptées et réalistes (reboisement, collecte et recyclage des ordures, respect des zones non constructibles)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas accuser la nature : la dégradation environnementale résulte essentiellement des activités humaines.",
            "Toujours proposer des solutions constructives et écologiques."
          ]
        },
        {
          lessonNumber: 8,
          themeId: "theme_2_milieu_local_ci",
          themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
          chapterTitle: "Leçon 2 : L'homme et le cycle de l'eau",
          situationContext: "À l'occasion de la journée mondiale de l'eau et de l'agriculture, des élèves de 6ème recherchent les étapes du cycle naturel de l'eau et les méthodes de préservation de cette ressource vitale.",
          objectives: [
            "Définir l'eau et ses 3 états physiques (liquide, gazeux, solide)",
            "Décrire les étapes du cycle naturel de l'eau (évaporation, condensation, précipitation, ruissellement, infiltration)",
            "Expliquer l'utilité vitale de l'eau pour les ménages, l'agriculture, l'industrie et la production hydroélectrique",
            "Justifier la nécessité de sauvegarder et gérer avec parcimonie l'eau douce rare (3% de l'eau terrestre)"
          ],
          keyDefinitions: {
            "Eau": "Liquide transparent, inodore, incolore et sans saveur à l'état pur, indispensable à toute forme de vie.",
            "Cycle de l'eau": "Renouvellement permanent et circuit fermé de l'eau dans la nature entre la terre, les océans et l'atmosphère.",
            "Évaporation": "Transformation de l'eau liquide des océans, cours d'eau et sols en vapeur d'eau sous l'effet du rayonnement solaire.",
            "Transpiration végétale": "Rejet de vapeur d'eau dans l'atmosphère par les feuilles des arbres et végétaux.",
            "Condensation": "Transformation de la vapeur d'eau en fines gouttelettes d'eau formant les nuages lors du refroidissement dans l'atmosphère.",
            "Précipitations": "Chute de l'eau des nuages sur la terre sous forme de pluie, de neige ou de grêle.",
            "Infiltration": "Pénétration lente des eaux de pluie dans le sous-sol pour alimenter les nappes phréatiques.",
            "Ruissellement": "Écoulement superficiel des eaux de pluie vers les ruisseaux, fleuves, lacs et océans."
          },
          coreConceptsAndRules: {
            "Rareté de l'eau douce": "97% de l'eau sur Terre est salée (océans/mers). Seuls 3% sont de l'eau douce (glaciers, nappes, fleuves). L'eau potable est donc rare et précieuse.",
            "Dangers du gaspillage et de la pollution": "Sécheresse, déshydratation, maladies hydriques, destruction des écosystèmes, conflits d'usage."
          },
          methodologySteps: [
            {
              title: "Schématisation et explication du cycle de l'eau",
              description: "Ordonner les étapes physiques du cycle",
              stepByStep: [
                "1. Évaporation océanique et continentale (+ transpiration des plantes) sous l'effet du soleil.",
                "2. Ascension de la vapeur d'eau et condensation en nuages dans l'atmosphère.",
                "3. Précipitations (pluie, grêle, neige) sur les continents et océans.",
                "4. Ruissellement superficiel vers les cours d'eau et infiltration souterraine vers les nappes phréatiques.",
                "5. Retour de l'eau vers la mer pour fermer le cycle perpétuel."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier l'infiltration qui alimente les nappes souterraines.",
            "Sans condensation en nuages, aucune précipitation n'est possible."
          ]
        },
        {
          lessonNumber: 9,
          themeId: "theme_2_milieu_local_ci",
          themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
          chapterTitle: "Leçon 3 : L'importance de l'impôt dans le développement de ma région",
          situationContext: "Des élèves aperçoivent au trésor public une affiche 'Payer l'impôt c'est développer ma région' et s'informent auprès de la Direction Générale des Impôts (DGI) sur la nature et le rôle des impôts.",
          objectives: [
            "Définir l'impôt et identifier sa base constitutionnelle et civique",
            "Distinguer les impôts directs (IGR, impôt foncier) et indirects (TVA, timbres d'État)",
            "Identifier les contribuables (particuliers, fonctionnaires, commerçants, entreprises)",
            "Expliquer le rôle de la Direction Générale des Impôts (DGI)",
            "Démontrer l'utilité de l'impôt pour le financement des infrastructures et services publics de la région"
          ],
          keyDefinitions: {
            "Impôt": "Prélèvement financier obligatoire opéré par l'État sur les revenus et les biens des habitants et entreprises pour couvrir les charges et dépenses publiques.",
            "Contribuable": "Toute personne physique ou morale (travailleur, propriétaire, commerçant, entreprise) assujettie au paiement de l'impôt.",
            "Impôt direct": "Impôt prélevé directement sur les revenus, salaires ou biens du contribuable (ex: IGR = Impôt Général sur le Revenu, impôt sur le salaire, taxe d'habitation).",
            "Impôt indirect": "Impôt payé à l'occasion d'un achat de bien ou de service et inclus dans le prix de vente (ex: TVA = Taxe sur la Valeur Ajoutée, droits de douane, timbres fiscaux).",
            "DGI (Direction Générale des Impôts)": "Administration publique ivoirienne chargée de l'assiette, du contrôle, du recouvrement de l'impôt et de la sensibilisation civique des populations."
          },
          coreConceptsAndRules: {
            "Utilité publique de l'impôt": "L'impôt est la principale ressource budgétaire de l'État pour financer :\n- La construction et l'entretien des routes et ponts ;\n- Les écoles, collèges, lycées et universités (bourses, tables-bancs) ;\n- Les hôpitaux publics et centres de santé (médicaments, soins) ;\n- L'assainissement et l'adduction en eau potable ;\n- La sécurité publique (équipements de la police, gendarmerie, pompiers) ;\n- Le traitement des salaires des fonctionnaires.",
            "Devoir civique": "Payer son impôt est un devoir citoyen indispensable. Le non-paiement par incivisme prive la commune et la région des moyens nécessaires à son développement."
          },
          methodologySteps: [
            {
              title: "Argumentation civique sur le bien-fondé du paiement de l'impôt",
              description: "Aider un citoyen récalcitrant à comprendre l'importance de son impôt",
              stepByStep: [
                "1. Définir l'impôt comme obligation légale et solidaire.",
                "2. Identifier la nature de l'impôt en question (direct foncier/revenu ou indirect).",
                "3. Énumérer concrètement les réalisations publiques financées dans son quartier/village (écoles, centre de santé, route bitumée, électrification).",
                "4. Conclure par un slogan ou message fort : 'Payer l'impôt, c'est bâtir l'avenir de notre région'."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas croire que seuls les riches paient l'impôt : la TVA est payée par tout le monde lors de chaque achat.",
            "Ne pas confondre impôt direct (sur le revenu/propriété) et impôt indirect (sur la consommation)."
          ]
        }
      ]
    }
  ]
};

export const GEO_6E_CURRICULUM = geographie6eKnowledgeBase.themes.flatMap(t =>
  t.lessons.map(l => ({
    themeId: t.id,
    themeTitle: t.themeTitle,
    lessonNumber: l.lessonNumber,
    lessonTitle: l.chapterTitle,
    objectives: l.objectives,
    keyDefinitions: l.keyDefinitions,
    coreConceptsAndRules: l.coreConceptsAndRules,
    methodologySteps: l.methodologySteps,
    commonMistakesToAvoid: l.commonMistakesToAvoid,
  }))
);
