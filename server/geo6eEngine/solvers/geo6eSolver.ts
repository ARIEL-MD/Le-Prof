/**
 * Solveur déterministe Géographie 6ème (Côte d'Ivoire)
 */

import { Geo6eStructuredResult, Geo6eStep } from "../types";
import { GEO_6E_CURRICULUM } from "../../../geographie6eKnowledgeBase";

export function solveGeo6eExercise(statement: string, topicType: string): Geo6eStructuredResult {
  const lessonData = GEO_6E_CURRICULUM.find(l => {
    if (topicType === "impot_developpement_local") return l.lessonNumber === 9;
    if (topicType === "cycle_eau_preservation") return l.lessonNumber === 8;
    if (topicType === "population_environnement_abidjan") return l.lessonNumber === 7;
    if (topicType === "mouvements_terre_rotation_revolution") return l.lessonNumber === 6;
    if (topicType === "representation_terre_cartes_projections") return l.lessonNumber === 5;
    if (topicType === "sol_climat_vegetation") return l.lessonNumber === 4;
    if (topicType === "climat_zones_mesures") return l.lessonNumber === 3;
    if (topicType === "relief_elements_formes") return l.lessonNumber === 2;
    return l.lessonNumber === 1;
  }) || GEO_6E_CURRICULUM[0];

  const steps: Geo6eStep[] = [];

  switch (topicType) {
    case "impot_developpement_local": {
      steps.push({
        stepNumber: 1,
        title: "Définition de l'impôt et des contribuables",
        stepType: "DESCRIPTION",
        observationOrData: "Prélèvement obligatoire imposé par la Constitution pour le bien public.",
        scientificConceptOrRule: "L'impôt est un prélèvement financier obligatoire de l'État sur les revenus et biens des habitants pour assurer les dépenses publiques. Ceux qui le paient sont les contribuables.",
        deductionOrExplanation: "On distingue l'impôt direct (prélevé sur les revenus et biens, ex: IGR, impôt foncier) et l'impôt indirect (inclus dans les prix de consommation, ex: TVA, timbres d'État). La Direction Générale des Impôts (DGI) est la structure officielle chargée de son recouvrement et de la sensibilisation.",
        conclusionOrJustification: "L'impôt est un devoir citoyen qui s'applique à tous les agents économiques et propriétaires.",
      });

      steps.push({
        stepNumber: 2,
        title: "Importance et utilité de l'impôt dans le développement régional",
        stepType: "EXPLICATION",
        observationOrData: "Besoins financiers des communes et régions pour les infrastructures.",
        scientificConceptOrRule: "Les recettes fiscales constituent la principale ressource budgétaire de l'État et des collectivités locales.",
        deductionOrExplanation: "L'impôt finance concrètement : la construction et l'entretien des routes et caniveaux, les écoles et lycées (tables-bancs, bourses), les hôpitaux publics et centres de santé, l'assainissement, l'équipement des forces de l'ordre (police/gendarmerie) et le traitement des fonctionnaires.",
        conclusionOrJustification: "Sans le paiement régulier de l'impôt par les citoyens, la mairie et l'État ne peuvent réaliser les travaux publics nécessaires.",
      });

      steps.push({
        stepNumber: 3,
        title: "Sensibilisation et slogan civique",
        stepType: "CONSEIL_CIVIQUE",
        observationOrData: "Réticence ou incompréhension face à l'avis d'imposition.",
        scientificConceptOrRule: "Le civisme fiscal est la condition indispensable du développement socio-économique durable.",
        deductionOrExplanation: "Il convient d'expliquer à la population que l'impôt n'est pas une perte d'argent mais un investissement pour le bien-être collectif de la communauté.",
        conclusionOrJustification: "Slogan proposé : « Payer mes impôts, c'est participer activement au développement et à la prospérité de ma région ! »",
      });
      break;
    }

    case "cycle_eau_preservation": {
      steps.push({
        stepNumber: 1,
        title: "Les différents états physiques de l'eau dans la nature",
        stepType: "OBSERVATION",
        observationOrData: "Présence de l'eau sous forme liquide, solide et gazeuse.",
        scientificConceptOrRule: "L'eau se présente sous 3 états physiques : liquide (mers, océans, lacs, fleuves, pluie), solide (glace, neige, grêle) et gazeux (vapeur d'eau invisible dans l'atmosphère).",
        deductionOrExplanation: "Le cycle de l'eau est le renouvellement matériel, permanent et continu de l'eau sur Terre à travers ces différents états.",
        conclusionOrJustification: "L'eau passe successivement d'un état à un autre sans que la quantité globale d'eau sur Terre ne change.",
      });

      steps.push({
        stepNumber: 2,
        title: "Les étapes du cycle naturel de l'eau",
        stepType: "EXPLICATION",
        observationOrData: "Action conjuguée du soleil, de l'atmosphère et de la gravité.",
        scientificConceptOrRule: "Le cycle s'organise en 5 phases majeures : Évaporation -> Condensation -> Précipitations -> Ruissellement -> Infiltration.",
        deductionOrExplanation: "1. Évaporation océanique et continentale (+ transpiration des végétaux) sous la chaleur solaire ; 2. Condensation de la vapeur d'eau en fines gouttelettes formant les nuages ; 3. Précipitations (pluies, neige, grêle) ; 4. Ruissellement superficiel vers les cours d'eau ; 5. Infiltration souterraine alimentant les nappes phréatiques et retour à l'océan.",
        conclusionOrJustification: "Ce cycle perpétuel garantit la régénération constante des réserves en eau de la planète.",
      });

      steps.push({
        stepNumber: 3,
        title: "Sauvegarde d'une ressource vitale et rare",
        stepType: "CONSEIL_CIVIQUE",
        observationOrData: "L'eau douce ne représente que 3% du volume d'eau mondial.",
        scientificConceptOrRule: "L'eau potable est rare et indispensable à la vie, aux ménages, à l'agriculture et à l'industrie.",
        deductionOrExplanation: "Une mauvaise gestion ou la pollution des cours d'eau engendre sécheresse, maladies hydriques et conflits. Il est donc impératif de préserver les nappes phréatiques et d'éviter tout gaspillage.",
        conclusionOrJustification: "L'eau est source de vie : chaque citoyen doit la protéger et l'utiliser avec parcimonie.",
      });
      break;
    }

    case "population_environnement_abidjan": {
      steps.push({
        stepNumber: 1,
        title: "Identification du milieu physique local (Exemple : District d'Abidjan)",
        stepType: "LOCALISATION",
        observationOrData: "Situation géographique au Sud de la Côte d'Ivoire en bordure lagunaire et maritime.",
        scientificConceptOrRule: "Le milieu physique comprend le relief, le climat, les sols, la végétation et l'hydrographie.",
        deductionOrExplanation: "Abidjan présente : un relief de plaines (faciles à bâtir), un climat attiéen (chaud et très humide), une végétation de forêt dense, des sols ferralitiques et hydromorphes, un réseau hydrographique riche (lagune Ébrié, fleuves côtiers, océan Atlantique) et des hydrocarbures en sous-sol (pétrole, gaz).",
        conclusionOrJustification: "Ces conditions naturelles exceptionnelles ont favorisé une très forte concentration humaine et économique.",
      });

      steps.push({
        stepNumber: 2,
        title: "Impact de la croissance démographique et des activités sur l'environnement",
        stepType: "EXPLICATION",
        observationOrData: "Pression humaine accrue, extension urbaine et pollutions multiples.",
        scientificConceptOrRule: "L'explosion démographique et les activités humaines non régulées dégradent l'environnement.",
        deductionOrExplanation: "Conséquences visibles : développement d'habitats précaires et constructions anarchiques, inondations par obstruction des caniveaux, déforestation, pollution de l'air par les gaz d'échappement, pollution de la lagune et des nappes phréatiques par les déchets industriels et ordures ménagères.",
        conclusionOrJustification: "Les activités humaines non maîtrisées menacent directement l'équilibre écologique du milieu.",
      });

      steps.push({
        stepNumber: 3,
        title: "Solutions durables pour la préservation de l'environnement",
        stepType: "CONSEIL_CIVIQUE",
        observationOrData: "Nécessité de politiques publiques et d'éco-gestes citoyens.",
        scientificConceptOrRule: "La protection de l'environnement requiert l'action combinée de l'État, des collectivités et des populations.",
        deductionOrExplanation: "Solutions à mettre en œuvre : 1. Campagnes de reboisement et création d'espaces verts protégés ; 2. Sensibilisation au tri et au recyclage des ordures ménagères ; 3. Amélioration des réseaux d'assainissement et d'évacuation des eaux usées ; 4. Politique de décentralisation pour désengorger la capitale.",
        conclusionOrJustification: "La protection de notre cadre de vie est un devoir collectif pour assurer la santé de tous.",
      });
      break;
    }

    case "mouvements_terre_rotation_revolution": {
      steps.push({
        stepNumber: 1,
        title: "La rotation de la Terre et ses conséquences directes",
        stepType: "EXPLICATION",
        observationOrData: "La Terre tourne sur elle-même autour de l'axe des pôles en 24 heures d'Ouest en Est.",
        scientificConceptOrRule: "La rotation terrestre s'effectue en 24 heures (1 jour) d'Ouest en Est.",
        deductionOrExplanation: "Conséquences majeures : 1. L'alternance ou succession régulière des jours et des nuits (la moitié exposée au soleil est dans le jour, la moitié opposée dans la nuit) ; 2. La division du globe en 24 fuseaux horaires de 15° (1 heure chacun, avec Greenwich comme repère GMT) ; 3. Le mouvement apparent du soleil d'Est en Ouest ; 4. La détermination des 4 points cardinaux (Est, Ouest, Nord, Sud) permettant l'orientation.",
        conclusionOrJustification: "La rotation explique pourquoi lorsqu'il fait nuit en Côte d'Ivoire (fuseau GMT), il fait encore jour en Amérique (fuseaux occidentaux).",
      });

      steps.push({
        stepNumber: 2,
        title: "La révolution de la Terre et ses conséquences saisonnières",
        stepType: "EXPLICATION",
        observationOrData: "La Terre tourne autour du soleil en 365 jours et 6 heures (1 an).",
        scientificConceptOrRule: "La révolution est le déplacement orbital de la Terre autour du soleil avec un axe incliné de 23°27'.",
        deductionOrExplanation: "Conséquences majeures : 1. L'inégale durée des jours et des nuits au fil de l'année ; 2. La succession des 4 saisons (printemps, été, automne, hiver) dans les zones tempérées et des saisons des pluies / sèches dans la zone intertropicale.",
        conclusionOrJustification: "L'inclinaison de l'axe de rotation combinée à la révolution explique les variations d'ensoleillement et de température au cours de l'année.",
      });
      break;
    }

    case "representation_terre_cartes_projections": {
      steps.push({
        stepNumber: 1,
        title: "Les formes de représentation de la Terre",
        stepType: "DESCRIPTION",
        observationOrData: "La Terre est une sphère légèrement aplatie aux pôles.",
        scientificConceptOrRule: "On utilise le globe terrestre (représentation fidèle en volume) ou les cartes/plans (représentations planes réduites).",
        deductionOrExplanation: "Le globe est le modèle le plus fidèle. La carte et le planisphère représentent la surface sur un plan grâce à une légende (symboles) et une échelle (rapport dessin / réalité). Le réseau géographique est formé de méridiens (de pôle à pôle, référence Greenwich) pour la longitude et de parallèles (parallèles à l'Équateur 0°) pour la latitude.",
        conclusionOrJustification: "Chaque point du globe est précisément repéré par ses coordonnées géographiques (latitude et longitude en degrés).",
      });

      steps.push({
        stepNumber: 2,
        title: "Les 3 types de projections cartographiques",
        stepType: "EXPLICATION",
        observationOrData: "Nécessité mathématique de projeter une sphère sur un plan.",
        scientificConceptOrRule: "À chaque zone géographique correspond une technique de projection optimale :",
        deductionOrExplanation: "1. Projection cylindrique : adaptée pour la zone intertropicale (zone chaude) car elle conserve les formes près de l'Équateur sans trop de déformation ;\n2. Projection conique : adaptée pour les zones tempérées ;\n3. Projection polaire (ou azimutale) : adaptée pour représenter les zones polaires.",
        conclusionOrJustification: "Le choix de la projection dépend de la position géographique de la zone à cartographier.",
      });
      break;
    }

    case "sol_climat_vegetation": {
      steps.push({
        stepNumber: 1,
        title: "Localisation des zones climatiques et végétations en Côte d'Ivoire",
        stepType: "LOCALISATION",
        observationOrData: "Variation du paysage végétal du Sud vers le Nord de la Côte d'Ivoire.",
        scientificConceptOrRule: "À chaque zone climatique correspond un type de sol et une formation végétale dominante.",
        deductionOrExplanation: "- SUD : Climat attiéen (humide) -> Sols ferralitiques épais et rouges -> Forêt dense (cacao, café, palmier, hévéa) ;\n- CENTRE : Climat baouléen -> Sols ferrugineux -> Forêt claire et savane arbustive ;\n- OUEST : Climat de montagne -> Sols ferralitiques -> Forêt dense d'altitude ;\n- NORD : Climat soudanais (sec) -> Sols ferrugineux grisâtres -> Savane herbeuse (coton, anacarde, maïs, mil).",
        conclusionOrJustification: "La taille des arbres diminue progressivement du Sud forestier humide vers le Nord de savane plus sec.",
      });

      steps.push({
        stepNumber: 2,
        title: "L'influence réciproque entre le climat, le sol et la végétation",
        stepType: "EXPLICATION",
        observationOrData: "Interdépendance des composantes de l'écosystème naturel.",
        scientificConceptOrRule: "Le climat et les sols conditionnent la végétation, tandis que la végétation protège le sol et favorise les pluies.",
        deductionOrExplanation: "Un climat pluvieux sur sol fertile riche en humus permet le développement d'une forêt dense abondante. En retour, les arbres protègent le sol contre l'érosion pluviale et alimentent le cycle des pluies par évapotranspiration. Si la végétation disparaît (déforestation), le sol s'érode et le climat devient plus sec.",
        conclusionOrJustification: "Il existe une interrelation étroite et fragile entre le climat, le sol et la végétation.",
      });
      break;
    }

    case "climat_zones_mesures": {
      steps.push({
        stepNumber: 1,
        title: "Définition des éléments du climat et des instruments de mesure",
        stepType: "OBSERVATION",
        observationOrData: "Relevé des données météorologiques quotidiennes et annuelles.",
        scientificConceptOrRule: "Le climat est l'état moyen de l'atmosphère sur une longue période (au moins 30 ans).",
        deductionOrExplanation: "Les 3 composantes majeures : 1. Température (quantité de chaleur en °C mesurée par le thermomètre) ; 2. Précipitations (eau tombée en mm mesurée par le pluviomètre) ; 3. Vent (déplacement d'air mesuré en vitesse par l'anémomètre et en direction par la girouette ; pression mesurée par le baromètre).",
        conclusionOrJustification: "L'amplitude thermique annuelle se calcule par la différence entre le mois le plus chaud et le mois le moins chaud : Amplitude = Tmax - Tmin.",
      });

      steps.push({
        stepNumber: 2,
        title: "Les trois grandes zones climatiques du globe",
        stepType: "EXPLICATION",
        observationOrData: "Répartition mondiale des températures et saisons.",
        scientificConceptOrRule: "La rotondité de la Terre et l'inclinaison des rayons solaires déterminent 3 zones thermiques :",
        deductionOrExplanation: "1. Zone chaude (intertropicale entre Tropique du Cancer et Capricorne) : forte chaleur, saisons des pluies et saisons sèches (climats équatorial, tropical, désertique) ;\n2. Zone tempérée (entre tropiques et cercles polaires) : températures modérées, 4 saisons bien distinctes (climats océanique, continental, méditerranéen) ;\n3. Zone froide (entre cercles polaires et pôles) : températures très basses, longs hivers glacials.",
        conclusionOrJustification: "La Côte d'Ivoire est située entièrement dans la zone chaude intertropicale.",
      });
      break;
    }

    case "relief_elements_formes": {
      steps.push({
        stepNumber: 1,
        title: "Les trois grands ensembles et formes élémentaires du relief",
        stepType: "DESCRIPTION",
        observationOrData: "Observation des formes de la surface terrestre.",
        scientificConceptOrRule: "Le relief est l'ensemble des inégalités à la surface de la terre et des fonds marins.",
        deductionOrExplanation: "3 grands ensembles : 1. Montagnes (très élevées > 900 m, fortes pentes) ; 2. Plateaux (surfaces planes élevées aux cours d'eau encaissés) ; 3. Plaines (basses altitudes 0-50 m, cours d'eau à fleur de sol). Formes élémentaires : colline (sommet arrondi), butte (sommet plat), vallée (dépression creusée par l'eau), talus (pente reliant deux plans), interfluve (espace entre deux vallées) et cuvette (dépression fermée).",
        conclusionOrJustification: "Le profil topographique permet de classer immédiatement le relief observé.",
      });

      steps.push({
        stepNumber: 2,
        title: "Les trois éléments de mesure du relief",
        stepType: "EXPLICATION",
        observationOrData: "Repérage vertical et angulaire d'un terrain.",
        scientificConceptOrRule: "Un relief est caractérisé par son altitude, sa pente et sa dénivellation.",
        deductionOrExplanation: "1. Altitude : distance verticale mesurée depuis le niveau de la mer (0 m) ; 2. Pente : degré d'inclinaison du terrain en degrés (°) ; 3. Dénivellation : différence d'altitude entre deux points donnés (Dénivellation = Alt_sommet - Alt_base).",
        conclusionOrJustification: "Ces trois mesures quantifient précisément la géométrie du terrain.",
      });
      break;
    }

    case "geographie_objet_demarche":
    default: {
      steps.push({
        stepNumber: 1,
        title: "Définition, étymologie et branches de la Géographie",
        stepType: "DESCRIPTION",
        observationOrData: "Étymologie grecque : gê (terre) et graphein (dessin/écriture).",
        scientificConceptOrRule: "La géographie est la science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la terre et leurs interactions.",
        deductionOrExplanation: "Elle se divise en 3 branches principales : 1. Géographie physique (relief, climat, sols, cours d'eau, végétation) ; 2. Géographie humaine (population, démographie) ; 3. Géographie économique (agriculture, pêche, artisanat, commerce, transport, industrie).",
        conclusionOrJustification: "La géographie étudie la Terre en tant qu'habitat et milieu de vie de l'humanité.",
      });

      steps.push({
        stepNumber: 2,
        title: "Les 5 étapes de la démarche géographique et son utilité",
        stepType: "EXPLICATION",
        observationOrData: "Méthode scientifique d'investigation sur le terrain et sur documents.",
        scientificConceptOrRule: "La démarche du géographe suit rigoureusement 5 étapes ordonnées :",
        deductionOrExplanation: "1. L'observation (directe ou indirecte) ; 2. La localisation (situer dans l'espace) ; 3. La description (relever les particularités) ; 4. L'explication (rechercher les causes) ; 5. La comparaison (dégager similitudes et contrastes). Son utilité : développer l'esprit d'ouverture, comprendre le monde, favoriser la solidarité et la tolérance envers tous les peuples.",
        conclusionOrJustification: "La géographie forme un citoyen éclairé, responsable et respectueux de son environnement.",
      });
      break;
    }
  }

  const finalConclusion = `La résolution selon le programme officiel de Géographie 6ème (Côte d'Ivoire) montre que : ${lessonData.lessonTitle} applique rigoureusement la démarche du géographe et les concepts du référentiel national.`;

  return {
    title: `Résolution Officielle APC — ${lessonData.lessonTitle}`,
    themeId: lessonData.themeId,
    themeTitle: lessonData.themeTitle,
    lessonNumber: lessonData.lessonNumber,
    lessonTitle: lessonData.lessonTitle,
    problemStatement: statement,
    steps,
    finalConclusion,
    keyGeographicalTerms: Object.keys(lessonData.keyDefinitions || {}),
    commonPitfallsAvoided: lessonData.commonMistakesToAvoid || [],
    toMethodologyAnalysisResult: () => ({
      analysisPlan: {
        methodologyId: "geo-6e-officiel",
        methodologyName: `Géographie 6e — ${lessonData.lessonTitle}`,
        topicTitle: statement.slice(0, 120),
        estimatedDurationMinutes: 20,
        difficultyLevel: "Collège (6ème)",
        stepPlans: steps.map(s => ({
          stepNumber: s.stepNumber,
          stepName: s.title,
          description: s.scientificConceptOrRule,
          estimatedTimeMinutes: 5,
        })),
      },
      detailedSteps: steps.map(s => ({
        stepNumber: s.stepNumber,
        stepTitle: s.title,
        methodologyRuleApplied: s.scientificConceptOrRule,
        content: `**Observation / Données :** ${s.observationOrData}\n\n**Règle du cours :** ${s.scientificConceptOrRule}\n\n**Explication & Démarche :** ${s.deductionOrExplanation}\n\n**Conclusion :** ${s.conclusionOrJustification}`,
        sourceTags: ["Programme Officiel Géographie 6e", "École Numérique CI"],
        pedagogicalTip: s.conclusionOrJustification,
      })),
      finalSynthesis: {
        executiveSummary: finalConclusion,
        theoreticalInsights: Object.entries(lessonData.keyDefinitions || {})
          .slice(0, 4)
          .map(([k, v]) => `**${k}** : ${v}`),
        methodologyTips: lessonData.commonMistakesToAvoid || [],
        qualityScore: 98,
      },
    }),
  };
}
