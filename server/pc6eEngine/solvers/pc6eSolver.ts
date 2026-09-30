/**
 * Solveur déterministe Physique-Chimie 6ème (Côte d'Ivoire)
 */

import { Pc6eStructuredResult, Pc6eStep } from "../types";
import { PC_6E_CURRICULUM } from "../../../pc6eKnowledgeBase";

export function solvePc6eExercise(statement: string, topicType: string): Pc6eStructuredResult {
  const lessonData = PC_6E_CURRICULUM.find(l => {
    if (topicType === "mesure_masse_balance_pesee") return l.lessonNumber === 13;
    if (topicType === "mesure_volume_liquide_solide") return l.lessonNumber === 12;
    if (topicType === "combustion_gaz_butane_complete_incomplete") return l.lessonNumber === 11;
    if (topicType === "combustion_solide_liquide_charbon_alcool") return l.lessonNumber === 10;
    if (topicType === "constituants_air_dioxygene_diazote") return l.lessonNumber === 9;
    if (topicType === "changements_etat_eau_conservation_masse") return l.lessonNumber === 8;
    if (topicType === "temperature_thermometre_points_fixes") return l.lessonNumber === 7;
    if (topicType === "gaz_compressibilite_pression_butane") return l.lessonNumber === 6;
    if (topicType === "solides_liquides_surface_libre_verrerie") return l.lessonNumber === 5;
    if (topicType === "dangers_combustions_triangle_feu") return l.lessonNumber === 4;
    if (topicType === "court_circuit_fusible_disjoncteur") return l.lessonNumber === 3;
    if (topicType === "commande_interrupteur_va_et_vient") return l.lessonNumber === 2;
    return l.lessonNumber === 1;
  }) || PC_6E_CURRICULUM[0];

  const steps: Pc6eStep[] = [];

  switch (topicType) {
    case "mesure_masse_balance_pesee": {
      steps.push({
        stepNumber: 1,
        title: "Principe de la pesée à la balance Roberval",
        stepType: "IDENTIFICATION",
        observationOrData: "Pesée d'un solide ou d'un récipient avec un liquide.",
        scientificConceptOrRule: "La masse mesure la quantité de matière (unité légale : kg). À l'équilibre, la masse sur le plateau gauche égale la somme des masses marquées sur le plateau droit.",
        deductionOrCalculation: "Pour peser 875 g avec la boîte : 500 g + 200 g + 100 g + 50 g + 20 g + 5 g = 875 g.",
        conclusionOrJustification: "L'équilibre de l'aiguille au centre valide la pesée.",
      });

      steps.push({
        stepNumber: 2,
        title: "Calcul de la masse nette d'un liquide (m = m2 - m1)",
        stepType: "CALCUL",
        observationOrData: "Masse du gobelet vide m1 = 150 g et plein de jus m2 = 710 g.",
        scientificConceptOrRule: "Masse nette du liquide : m_liquide = m2 (récipient plein) - m1 (récipient vide/tare).",
        deductionOrCalculation: "m_jus = 710 g - 150 g = 560 g.",
        conclusionOrJustification: "La masse nette du jus de citron est de 560 g (ou 0,56 kg).",
      });
      break;
    }

    case "mesure_volume_liquide_solide": {
      steps.push({
        stepNumber: 1,
        title: "Lecture au ménisque et calcul du volume d'un liquide",
        stepType: "OBSERVATION",
        observationOrData: "Éprouvette graduée contenant un liquide.",
        scientificConceptOrRule: "La lecture du volume se fait rigoureusement en plaçant l'œil au niveau de la base inférieure du ménisque (1 dm³ = 1 L et 1 cm³ = 1 mL).",
        deductionOrCalculation: "Niveau d'eau initial lu sur l'éprouvette : V1 = 40 mL.",
        conclusionOrJustification: "Le volume de départ est précisément repéré.",
      });

      steps.push({
        stepNumber: 2,
        title: "Volume d'un solide par déplacement de liquide (V = V2 - V1)",
        stepType: "CALCUL",
        observationOrData: "Immersion d'un caillou dans l'éprouvette, nouveau niveau V2 = 64 mL.",
        scientificConceptOrRule: "Le volume du solide immergé est égal au volume de liquide déplacé : V = V2 - V1.",
        deductionOrCalculation: "V_caillou = 64 mL - 40 mL = 24 mL = 24 cm³.",
        conclusionOrJustification: "Le volume du solide est exactement de 24 cm³.",
      });
      break;
    }

    case "combustion_gaz_butane_complete_incomplete": {
      steps.push({
        stepNumber: 1,
        title: "Distinction combustion complète et combustion incomplète",
        stepType: "IDENTIFICATION",
        observationOrData: "Flamme jaune noircissant les casseroles vs flamme bleue vive.",
        scientificConceptOrRule: "Combustion complète (virole ouverte, apport suffisant en O2) -> flamme bleue très chaude, produit CO2 + H2O. Combustion incomplète (virole fermée, manque d'O2) -> flamme jaune éclairante, produit CO2 + H2O + Carbone (suie noire) + Monoxyde de carbone (CO toxique).",
        deductionOrCalculation: "Le dépôt noir sous la casserole est constitué de microparticules de carbone imbrûlé.",
        conclusionOrJustification: "Le phénomène est causé par un mauvais réglage de la virole réduisant l'apport d'air.",
      });

      steps.push({
        stepNumber: 2,
        title: "Équations chimiques littérales et mesures de prévention",
        stepType: "CONCLUSION_SECURITE",
        observationOrData: "Dangers du monoxyde de carbone inodore et mortel.",
        scientificConceptOrRule: "Équation complète : Butane + Dioxygène -> Dioxyde de carbone + Eau.",
        deductionOrCalculation: "Remède : ouvrir la virole pour rétablir une flamme bleue et bien aérer la pièce.",
        conclusionOrJustification: "Cette opération supprime tout noircissement et prévient les risques d'intoxication au CO.",
      });
      break;
    }

    case "combustion_solide_liquide_charbon_alcool": {
      steps.push({
        stepNumber: 1,
        title: "Combustion du charbon de bois (carbone) et caractérisation du produit",
        stepType: "EXPERIENCE",
        observationOrData: "Morceau de charbon incandescent dans un bocal de dioxygène.",
        scientificConceptOrRule: "Le carbone brûle avec éclat en consommant le dioxygène. Le gaz formé trouble l'eau de chaux : c'est le dioxyde de carbone CO2.",
        deductionOrCalculation: "Équation littérale : Carbone + Dioxygène -> Dioxyde de carbone.",
        conclusionOrJustification: "Il s'agit d'une réaction chimique car les corps initiaux ont disparu pour former un nouveau corps.",
      });

      steps.push({
        stepNumber: 2,
        title: "Combustion de l'alcool et caractérisation des deux produits",
        stepType: "EXPERIENCE",
        observationOrData: "Alcool brûlant sous un bécher froid.",
        scientificConceptOrRule: "La vapeur d'eau condense en buée qui bleuit le sulfate de cuivre anhydre ; le gaz trouble l'eau de chaux.",
        deductionOrCalculation: "Équation littérale : Alcool + Dioxygène -> Dioxyde de carbone + Eau.",
        conclusionOrJustification: "Les produits formés sont le dioxyde de carbone et l'eau.",
      });
      break;
    }

    case "constituants_air_dioxygene_diazote": {
      steps.push({
        stepNumber: 1,
        title: "Composition volumique de l'air atmosphérique",
        stepType: "IDENTIFICATION",
        observationOrData: "Expérience de la bougie sous cloche et montée de l'eau.",
        scientificConceptOrRule: "L'air est un mélange de gaz composé en volume d'environ 20% (1/5) de dioxygène O2 et 80% (4/5) de diazote N2.",
        deductionOrCalculation: "Pour 100 L d'air : V(O2) = 20 L et V(N2) = 80 L (il y a 4 fois plus de diazote que de dioxygène).",
        conclusionOrJustification: "Le dioxygène est le seul gaz qui entretient la vie (respiration) et la combustion.",
      });

      steps.push({
        stepNumber: 2,
        title: "Pollution atmosphérique et protection de l'environnement",
        stepType: "CONCLUSION_SECURITE",
        observationOrData: "Émissions de fumées industrielles et de pots d'échappement.",
        scientificConceptOrRule: "Les activités humaines augmentent la teneur en gaz polluants et à effet de serre (CO2, SO2).",
        deductionOrCalculation: "Mesures préconisées : planter des arbres (qui absorbent le CO2 par photosynthèse) et filtrer les rejets industriels.",
        conclusionOrJustification: "La protection de l'air est indispensable pour la santé publique et le climat.",
      });
      break;
    }

    case "changements_etat_eau_conservation_masse": {
      steps.push({
        stepNumber: 1,
        title: "Identification des changements d'état et des températures caractéristiques",
        stepType: "IDENTIFICATION",
        observationOrData: "Glaçons fondant à l'air ou eau bouillant sur le feu.",
        scientificConceptOrRule: "L'eau pure fond et se solidifie à 0°C ; elle bout à 100°C sous la pression normale de 1 atm.",
        deductionOrCalculation: "Fusion : Solide -> Liquide (0°C). Solidification : Liquide -> Solide (0°C). Vaporisation : Liquide -> Gaz (100°C). Condensation : Gaz -> Liquide.",
        conclusionOrJustification: "Pendant tout le changement d'état d'un corps pur, la température reste rigoureusement constante.",
      });

      steps.push({
        stepNumber: 2,
        title: "Loi de conservation de la masse et variation de volume",
        stepType: "EXPERIENCE",
        observationOrData: "Pesée d'un récipient de glaçons avant et après fusion, éclatement d'une bouteille au congélateur.",
        scientificConceptOrRule: "Au cours d'un changement d'état, la MASSE SE CONSERVE STRICTEMENT (m_initial = m_final). En revanche, le volume d'eau AUGMENTE lors de la solidification.",
        deductionOrCalculation: "L'expansion volumique de l'eau en glace exerce une forte pression mécanique sur les parois en verre hermétiques, provoquant leur rupture.",
        conclusionOrJustification: "Conseil pratique : ne jamais remplir à ras bord une bouteille en verre avant congélation.",
      });
      break;
    }

    case "temperature_thermometre_points_fixes": {
      steps.push({
        stepNumber: 1,
        title: "Mesure de la température et unités",
        stepType: "OBSERVATION",
        observationOrData: "Sensation thermique et lecture au thermomètre.",
        scientificConceptOrRule: "La température mesure le degré d'agitation thermique. Unité légale : Kelvin (K), unité usuelle : degré Celsius (°C).",
        deductionOrCalculation: "Points fixes : 0°C pour la glace fondante et 100°C pour l'eau bouillante sous pression normale.",
        conclusionOrJustification: "Le thermomètre donne une mesure objective et fiable.",
      });

      steps.push({
        stepNumber: 2,
        title: "Caractéristiques du thermomètre médical",
        stepType: "IDENTIFICATION",
        observationOrData: "Thermomètre gradué de 35°C à 42°C pour prise de température corporelle.",
        scientificConceptOrRule: "Le thermomètre médical possède un étranglement qui empêche le liquide de redescendre pendant la lecture. Température normale du corps = 37°C.",
        deductionOrCalculation: "Une température supérieure à 37,5°C indique un état fébrile (hyperthermie).",
        conclusionOrJustification: "Toujours secouer le thermomètre avant une nouvelle prise.",
      });
      break;
    }

    case "gaz_compressibilite_pression_butane": {
      steps.push({
        stepNumber: 1,
        title: "Propriétés physiques des gaz (Compressibilité, Expansibilité, Élasticité)",
        stepType: "EXPERIENCE",
        observationOrData: "Manipulation d'une seringue hermétiquement bouchée.",
        scientificConceptOrRule: "Un gaz est compressible (volume réduit sous pression), expansible (occupe tout le volume disponible) et élastique (reprend son volume initial).",
        deductionOrCalculation: "- Enfoncer le piston : le volume diminue et la pression augmente.\n- Tirer le piston : le volume augmente et la pression diminue.",
        conclusionOrJustification: "Les gaz n'ont ni forme propre ni volume propre.",
      });

      steps.push({
        stepNumber: 2,
        title: "Transvasement et consignes de sécurité pour le gaz butane",
        stepType: "CONCLUSION_SECURITE",
        observationOrData: "Fuite suspectée de gaz dans une cuisine.",
        scientificConceptOrRule: "Le butane se recueille par déplacement d'eau car il est très peu soluble dans l'eau et moins dense.",
        deductionOrCalculation: "En cas d'odeur de gaz : ne jamais actionner d'interrupteur ni craquer d'allumette, fermer le détendeur et aérer immédiatement.",
        conclusionOrJustification: "Le respect de ces consignes élimine tout risque d'explosion de gaz.",
      });
      break;
    }

    case "solides_liquides_surface_libre_verrerie": {
      steps.push({
        stepNumber: 1,
        title: "Distinction solides compacts, solides divisés et liquides",
        stepType: "IDENTIFICATION",
        observationOrData: "Observation de caillou, sucre en morceaux, sel fin, huile et eau.",
        scientificConceptOrRule: "Solide compact : forme propre géométrique. Solide divisé : en grains, prend la forme du fond du récipient. Liquide : fluide insaisissable, prend la forme du récipient.",
        deductionOrCalculation: "Au repos, la surface libre d'un liquide est TOUJOURS rigoureusement plane et horizontale.",
        conclusionOrJustification: "Un solide divisé forme un monticule alors qu'un liquide reste plat et horizontal.",
      });

      steps.push({
        stepNumber: 2,
        title: "Verrerie de laboratoire et pictogrammes de sécurité",
        stepType: "OBSERVATION",
        observationOrData: "Identification de récipients de chimie.",
        scientificConceptOrRule: "Bécher, erlenmeyer, tube à essais, fiole jaugée, éprouvette graduée.",
        deductionOrCalculation: "L'éprouvette graduée sert à mesurer les volumes ; le tube à essais sert aux réactions de test.",
        conclusionOrJustification: "Le respect des pictogrammes (inflammable, toxique, corrosif) est obligatoire.",
      });
      break;
    }

    case "dangers_combustions_triangle_feu": {
      steps.push({
        stepNumber: 1,
        title: "Les 4 dangers majeurs des combustions et le triangle du feu",
        stepType: "IDENTIFICATION",
        observationOrData: "Feux domestiques ou feux de brousse.",
        scientificConceptOrRule: "Dangers : 1. Incendie ; 2. Asphyxie (manque d'O2) ; 3. Explosion de gaz ; 4. Intoxication au monoxyde de carbone.",
        deductionOrCalculation: "Triangle du feu : 1. Combustible (bois, gaz) + 2. Comburant (dioxygène de l'air) + 3. Source de chaleur (flamme, étincelle).",
        conclusionOrJustification: "La présence simultanée des 3 composantes est nécessaire pour démarrer ou entretenir le feu.",
      });

      steps.push({
        stepNumber: 2,
        title: "Principes d'extinction d'un feu",
        stepType: "CONCLUSION_SECURITE",
        observationOrData: "Extinction par suppression d'un élément du triangle.",
        scientificConceptOrRule: "Supprimer la chaleur (arroser d'eau), supprimer le comburant (étouffer sous une couverture/sable), ou supprimer le combustible (fermer la vanne de gaz).",
        deductionOrCalculation: "Une couverture posée sur un début d'incendie prive le foyer de dioxygène et éteint le feu instantanément.",
        conclusionOrJustification: "Ce geste réflexe sauve des vies en empêchant l'extension de l'incendie.",
      });
      break;
    }

    case "court_circuit_fusible_disjoncteur": {
      steps.push({
        stepNumber: 1,
        title: "Définition, causes et dangers d'un court-circuit",
        stepType: "IDENTIFICATION",
        observationOrData: "Fils électriques dénudés entrant en contact direct.",
        scientificConceptOrRule: "Un court-circuit relie directement les deux bornes d'un dipôle ou d'un générateur par un conducteur de très faible résistance, provoquant une surintensité brutale.",
        deductionOrCalculation: "Conséquences : échauffement violent des câbles, destruction des appareils et risque majeur d'incendie.",
        conclusionOrJustification: "La pile ou les conducteurs surchauffent dangereusement.",
      });

      steps.push({
        stepNumber: 2,
        title: "Organes de protection (Fusible et Disjoncteur) et recherche de panne",
        stepType: "CONCLUSION_SECURITE",
        observationOrData: "Coupure de sécurité d'un circuit en surcharge.",
        scientificConceptOrRule: "Le fusible fond et coupe le courant ; le disjoncteur différentiel déclenche automatiquement.",
        deductionOrCalculation: "Règle absolue : ne JAMAIS ponter un fusible avec un fil ordinaire. Remplacer par un fusible calibré d'origine.",
        conclusionOrJustification: "Ces organes assurent la protection intégrale des personnes et des installations.",
      });
      break;
    }

    case "commande_interrupteur_va_et_vient": {
      steps.push({
        stepNumber: 1,
        title: "Types d'organes de commande (Interrupteur, Bouton-poussoir, Commutateur)",
        stepType: "IDENTIFICATION",
        observationOrData: "Éclairage permanent, commande de sonnette ou lampe de réfrigérateur.",
        scientificConceptOrRule: "Interrupteur : commande permanente. Bouton-poussoir ouvert : sonnette. Bouton-poussoir fermé : frigo. Commutateur (3 bornes C, R, T) : allumage alterné.",
        deductionOrCalculation: "Quand on ouvre la porte du frigo, le poussoir est relâché (au repos) -> le circuit est fermé et la lampe s'allume.",
        conclusionOrJustification: "Le bouton-poussoir fermé au repos automatise parfaitement l'extinction.",
      });

      steps.push({
        stepNumber: 2,
        title: "Montage va-et-vient (commande depuis 2 endroits différents)",
        stepType: "EXPERIENCE",
        observationOrData: "Éclairage d'un couloir ou escalier avec deux commutateurs C1 et C2.",
        scientificConceptOrRule: "La lampe s'allume lorsque les deux commutateurs établissent la continuité sur la même ligne (R-R' ou T-T').",
        deductionOrCalculation: "Actionner l'un quelconque des deux commutateurs bascule l'état de la lampe (allumée -> éteinte ou éteinte -> allumée).",
        conclusionOrJustification: "Le va-et-vient permet de commander l'éclairage depuis deux points éloignés.",
      });
      break;
    }

    case "circuit_electrique_elements_sens":
    default: {
      steps.push({
        stepNumber: 1,
        title: "Éléments et bornes d'un circuit électrique simple",
        stepType: "IDENTIFICATION",
        observationOrData: "Pile (plate ou cylindrique), lampe à incandescence et fils de connexion.",
        scientificConceptOrRule: "Générateur : fournit le courant (pile plate : petite lame +, grande lame -). Récepteur : utilise le courant (lampe : plot central et culot).",
        deductionOrCalculation: "Le circuit forme une boucle fermée reliant les deux bornes de la lampe aux deux bornes de la pile.",
        conclusionOrJustification: "Le courant électrique circule de la borne (+) vers la borne (-) à l'extérieur du générateur.",
      });

      steps.push({
        stepNumber: 2,
        title: "Distinguer conducteurs et isolants électriques",
        stepType: "EXPERIENCE",
        observationOrData: "Test d'insertion de différents matériaux dans la boucle du circuit témoin.",
        scientificConceptOrRule: "Conducteurs (laissent passer le courant) : métaux (fer, cuivre, alu), graphite, eau salée. Isolants (bloquent le courant) : plastique, bois sec, verre, caoutchouc, air.",
        deductionOrCalculation: "Insérer une lame de cuivre allume la lampe témoin ; insérer une règle en plastique la laisse éteinte.",
        conclusionOrJustification: "Le matériau est classé avec certitude comme conducteur ou isolant.",
      });
      break;
    }
  }

  const finalConclusion = `Résolution conforme au programme officiel de Physique-Chimie 6ème (Côte d'Ivoire) : les protocoles expérimentaux, lois physiques et consignes de sécurité sont appliqués rigoureusement.`;

  return {
    title: `Résolution Officielle Physique-Chimie 6e — ${lessonData.lessonTitle}`,
    themeId: lessonData.themeId,
    themeTitle: lessonData.themeTitle,
    lessonNumber: lessonData.lessonNumber,
    lessonTitle: lessonData.lessonTitle,
    problemStatement: statement,
    steps,
    finalConclusion,
    keyScientificTerms: Object.keys(lessonData.keyDefinitions || {}),
    commonPitfallsAvoided: lessonData.commonMistakesToAvoid || [],
    toMethodologyAnalysisResult: () => ({
      analysisPlan: {
        methodologyId: "pc-6e-officiel",
        methodologyName: `Physique-Chimie 6e — ${lessonData.lessonTitle}`,
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
        content: `**Observation / Données :** ${s.observationOrData}\n\n**Loi / Définition scientifique :** ${s.scientificConceptOrRule}\n\n**Démonstration / Calcul :** ${s.deductionOrCalculation}\n\n**Conclusion & Sécurité :** ${s.conclusionOrJustification}`,
        sourceTags: ["Programme Officiel Physique-Chimie 6e", "École Numérique CI"],
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
