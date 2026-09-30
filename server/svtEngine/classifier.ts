/**
 * Classifieur sémantique pour les exercices de SVT Terminale D
 */

import { svtTleDKnowledgeBase } from "../../svtTleDKnowledgeBase";
import { SvtExerciseClassification } from "./types";

export function classifySvtExercise(statement: string): SvtExerciseClassification {
  const text = (statement || "").toLowerCase();

  // 1. GÉNÉTIQUE DES CROISEMENTS / MENDÉLISME / DROSOPHILES / CARTES FACTORIELLES
  if (
    /dihybridisme|monohybridisme|croisement|test-cross|test cross|backcross|f1|f2|lignée pure|homozygote|hétérozygote|drosophile|crossing-over|chiasma|centimorgan|cmg|carte factorielle|linkage|allèle dominant|allèle récessif|codominance|corps gris|ailes vestigiales|yeux rouges|9\/16|3\/16|1\/16/i.test(
      text
    )
  ) {
    return {
      themeId: "theme8",
      themeTitle: "Lois statistiques de la transmission des caractères héréditaires",
      lessonNumber: 19,
      lessonTitle: "Monohybridisme, Dihybridisme, Linkage et Cartes factorielles",
      topicType: "genetics_cross",
      confidence: 0.95,
      keyEntities: ["Croisement F1/F2", "Lois de Mendel", "Échiquier de croisement", "Crossing-over"],
    };
  }

  // 2. GÉNÉTIQUE HUMAINE / PEDIGREES / CARYOTYPES / MALADIES HÉRÉDITAIRES
  if (
    /pedigree|arbre généalogique|albinisme|daltonisme|hémophilie|myopathie|huntington|drépanocytose|caryotype|trisomie|klinefelter|turner|gonosome|autosome|lié au sexe|malade|conductrice|cousins germains/i.test(
      text
    )
  ) {
    return {
      themeId: "theme9",
      themeTitle: "Hérédité humaine et anomalies chromosomiques",
      lessonNumber: 20,
      lessonTitle: "Génétique humaine, Pedigrees et Caryotypes anormaux",
      topicType: "pedigree_human_genetics",
      confidence: 0.95,
      keyEntities: ["Arbre généalogique", "Autosomique / Gonosomique", "Dominant / Récessif", "Génotypes"],
    };
  }

  // 3. GLYCÉMIE / FOIE LAVÉ / INSULINE / GLUCAGON / DIABÈTE
  if (
    /glycémie|foie lavé|glycogénolyse|glycogénogenèse|néoglucogenèse|îlots de langerhans|cellules bêta|cellules alpha|insuline|glucagon|diabète|pancréatectomie|alloxane|glucosurie/i.test(
      text
    )
  ) {
    return {
      themeId: "theme12",
      themeTitle: "La régulation de la glycémie",
      lessonNumber: 26,
      lessonTitle: "Régulation hormonale et nerveuse de la glycémie",
      topicType: "glycemia_regulation",
      confidence: 0.95,
      keyEntities: ["Glycémie", "Insuline", "Glucagon", "Foie", "Pancréas"],
    };
  }

  // 4. RÉGULATION DE LA PRESSION ARTÉRIELLE / CŒUR / NERF VAGUE / HERING / CYON / ADH / RÉNINE
  if (
    /pression artérielle|baroréflexe|sinus carotidien|crosse aortique|nerf de hering|nerf de cyon|nerf vague|nerf x|pneumogastrique|bradycardie|tachycardie|rénine|angiotensine|aldostérone|volémie|vasomotricité|cardiogramme|stanius|tissu nodal|nœud sinusal/i.test(
      text
    )
  ) {
    return {
      themeId: "theme5",
      themeTitle: "Activité cardiaque et régulation de la pression artérielle",
      lessonNumber: 13,
      lessonTitle: "Activité cardiaque et régulation de la pression artérielle",
      topicType: "cardiac_pressure_regulation",
      confidence: 0.92,
      keyEntities: ["Pression artérielle", "Barorécepteurs", "Nerf X", "Orthosympathique", "Rénine-Angiotensine"],
    };
  }

  // 5. IMMUNOLOGIE / RIMH / RIMC / ANTICORPS / SIDA / VACCINATION / GREFFE
  if (
    /anticorps|antigène|plasmocyte|lymphocyte t4|lymphocyte t8|ltc|perforine|phagocytose|complexe immun|médiation humorale|médiation cellulaire|cmh|hla|vih|sida|primo-infection|séropositif|sérothérapie|vaccination|allogreffe|rejet de greffe/i.test(
      text
    )
  ) {
    if (/vih|sida|charge virale|cd4\+|primo-infection|asymptomatique/i.test(text)) {
      return {
        themeId: "theme10",
        themeTitle: "Immunologie : Système immunitaire et défenses de l'organisme",
        lessonNumber: 23,
        lessonTitle: "Dysfonctionnements immunitaires et aides (SIDA et Vaccins)",
        topicType: "hiv_aids_evolution",
        confidence: 0.95,
        keyEntities: ["VIH / SIDA", "Lymphocytes T4 CD4+", "Infections opportunistes", "Prévention"],
      };
    }
    return {
      themeId: "theme10",
      themeTitle: "Immunologie : Système immunitaire et défenses de l'organisme",
      lessonNumber: 22,
      lessonTitle: "La réponse immunitaire non spécifique et spécifique",
      topicType: "immunology_humoral_cellular",
      confidence: 0.95,
      keyEntities: ["RIMH (Anticorps)", "RIMC (LTc)", "Coopération cellulaire", "Complexe immun"],
    };
  }

  // 6. MUSCLE / CONTRACTION / SARCOMÈRE / GLISSEMENT ACTINE-MYOSINE / ATP
  if (
    /sarcomère|myofibrille|myosine|actine|troponine|tropomyosine|strie z|bande a|bande i|bande h|plaque motrice|myogramme|tétanos|secousse musculaire|salyrgan|créatine phosphate|phosphagène|chaleur initiale|chaleur retardée|pont acto-myosine/i.test(
      text
    )
  ) {
    return {
      themeId: "theme4",
      themeTitle: "Activité du muscle squelettique",
      lessonNumber: 11,
      lessonTitle: "Aspects mécaniques, thermiques et énergétiques de la contraction",
      topicType: "muscle_contraction_energy",
      confidence: 0.92,
      keyEntities: ["Sarcomère", "Actine-Myosine", "Ca2+ et ATP", "Régénération de l'ATP"],
    };
  }

  // 7. POTENTIEL D'ACTION / REPOS / CONDUCTION HELMHOLTZ / RHÉOBASE / CHRONAXIE
  if (
    /potentiel de repos|potentiel d'action|dépolarisation|repolarisation|hyperpolarisation|canaux voltage-dépendants|pompe na\+\/k\+|helmholtz|conduction saltatoire|rhéobase|chronaxie|courbe de lapicque|période réfractaire|loi du tout ou rien|recrutement/i.test(
      text
    )
  ) {
    return {
      themeId: "theme2",
      themeTitle: "Le tissu nerveux et ses propriétés",
      lessonNumber: 5,
      lessonTitle: "Phénomènes électriques de l'influx nerveux",
      topicType: "action_potential_nerve",
      confidence: 0.94,
      keyEntities: ["Potentiel d'action", "Flux ioniques Na+/K+", "Vitesse de conduction", "Seuil d'excitabilité"],
    };
  }

  // 8. SYNAPSES & RÉFLEXES MÉDULLAIRES / BELL & MAGENDIE / SHERRINGTON / PFLÜGER
  if (
    /synapse|ppse|ppsi|acétylcholine|gaba|curare|sommation spatiale|sommation temporelle|arc réflexe|réflexe myotatique|grenouille spinale|bell et magendie|sherrington|innervation réciproque|pflüger|racine dorsale|racine ventrale|ganglion spinal/i.test(
      text
    )
  ) {
    if (/synapse|ppse|ppsi|neurotransmetteur|curare/i.test(text)) {
      return {
        themeId: "theme2",
        themeTitle: "Le tissu nerveux et ses propriétés",
        lessonNumber: 7,
        lessonTitle: "Transmission synaptique et intégration neuronale",
        topicType: "synapse_integration",
        confidence: 0.93,
        keyEntities: ["Synapse chimique", "PPSE / PPSI", "Sommation", "Neurotransmetteurs"],
      };
    }
    return {
      themeId: "theme3",
      themeTitle: "Rôle du système nerveux dans le comportement moteur",
      lessonNumber: 8,
      lessonTitle: "Mouvements involontaires ou réflexes",
      topicType: "reflex_arc_medullary",
      confidence: 0.93,
      keyEntities: ["Arc réflexe", "Bell et Magendie", "Innervation réciproque", "Moelle épinière"],
    };
  }

  // 9. REPRODUCTION MAMMIFÈRES / CYCLES OVARIEN ET UTÉRIN / HORMONES / FÉCONDATION
  if (
    /spermatogenèse|ovogenèse|folliculogenèse|cycle ovarien|cycle utérin|endomètre|dentelle utérine|oestrogène|œstradiol|progestérone|fsh|lh|gnrh|pic de lh|corps jaune|nidation|hcg|placenta|ocytocine|prolactine|sertoli|leydig|testostérone/i.test(
      text
    )
  ) {
    return {
      themeId: "theme6",
      themeTitle: "Reproduction chez les mammifères",
      lessonNumber: 16,
      lessonTitle: "Régulation du fonctionnement des appareils génitaux",
      topicType: "reproduction_gametogenesis_hormones",
      confidence: 0.94,
      keyEntities: ["Cycles sexuels", "Axe hypothalamo-hypophysaire", "FSH/LH", "Rétrocontrôles"],
    };
  }

  // 10. REPRODUCTION VÉGÉTALE / ANGIOSPERMES / DOUBLE FÉCONDATION
  if (
    /angiosperme|spermaphyte|pollen|sac embryonnaire|double fécondation|oosphère|albumen|anthérozoïde|étamine|pistil|carpelle|tubes polliniques/i.test(
      text
    )
  ) {
    return {
      themeId: "theme7",
      themeTitle: "Reproduction chez les spermaphytes",
      lessonNumber: 18,
      lessonTitle: "Organisation florale, pollinisation et double fécondation",
      topicType: "plant_double_fertilization",
      confidence: 0.95,
      keyEntities: ["Double fécondation", "Grain de pollen", "Sac embryonnaire", "Albumen 3n / Embryon 2n"],
    };
  }

  // 11. HOMÉOSTASIE MILIEU INTÉRIEUR / NÉPHRON / REIN / SYSTÈMES TAMPONS / PH / ADH
  if (
    /homéostasie|milieu intérieur|système tampon|ph sanguin|néphron|filtration glomérulaire|réabsorption tubulaire|urine primitive|diurèse|adh|aldostérone|pression osmotique/i.test(
      text
    )
  ) {
    return {
      themeId: "theme11",
      themeTitle: "Le milieu intérieur et son homéostasie",
      lessonNumber: 25,
      lessonTitle: "Régulation de la constance du milieu intérieur (pH et Osmolarité)",
      topicType: "homeostasis_kidney_ph",
      confidence: 0.93,
      keyEntities: ["Homéostasie", "Néphron", "Systèmes tampons", "Régulation du pH et de l'eau"],
    };
  }

  // 12. GÉOLOGIE & RESSOURCES ÉNERGÉTIQUES : GISEMENTS PÉTROLIFÈRES (TLE C)
  if (
    /pétrole|gisement pétrolif|kérogène|roche.mère|roche.réservoir|roche.magasin|roche.couverture|piège à pétrole|piège anticlinal|piège structural|piège stratigraphique|pyrolyse|bassin sédimentaire|jacqueville|grand.bassam|plateau continental|sismique réflexion|hydrophone|géophone|trépan|carotte|carottage|récupération assistée|récupération naturelle|marée noire|canon à air|offshore|onshore/i.test(
      text
    )
  ) {
    return {
      themeId: "theme_petrole_ci",
      themeTitle: "Les ressources énergétiques : Gisements pétrolifères en Côte d'Ivoire",
      lessonNumber: 1,
      lessonTitle: "Mise en place et exploitation des gisements pétrolifères",
      topicType: "petroleum_geology_ci",
      confidence: 0.96,
      keyEntities: ["Kérogène", "Roche-mère", "Roche-réservoir", "Roche-couverture", "Piège anticlinal", "Sismique réflexion", "Jacqueville / Grand-Bassam"],
    };
  }

  // 13. GESTION DES SOLS & AMÉLIORATION DE LA FERTILITÉ (TLE C)
  if (
    /fertilité du sol|amendement calcaire|amendement humifère|complexe argilo-humique|\bcah\b|structure grumeleuse|floculation|chaux vive|engrais vert|rhizobium|légumineuse|nodosité|assolement|jachère|drainage|irrigation|labour|minéralisation|humification/i.test(
      text
    )
  ) {
    return {
      themeId: "theme_gestion_sols",
      themeTitle: "La gestion des sols : L'amélioration de la fertilité du sol",
      lessonNumber: 3,
      lessonTitle: "Engrais, amendements (calcaire et humifère) et techniques culturales",
      topicType: "soil_fertility_management",
      confidence: 0.96,
      keyEntities: ["Complexe Argilo-Humique (CAH)", "Structure grumeleuse", "Amendement calcaire (Ca2+)", "Engrais verts (Rhizobium)", "Assolement et Jachère"],
    };
  }

  // 14. DROGUES ET SYSTÈME NERVEUX (TLE C)
  if (
    /drogue|cocaïne|amphétamine|morphine|substance p|diazépam|nicotine|psychostimulant|psychodépress|analgésique|dopamine|noyau accumbens|aire tegmentale|recapture de la dopamine|addiction|désintoxication/i.test(
      text
    )
  ) {
    return {
      themeId: "theme_drogues_sn",
      themeTitle: "La communication dans l'organisme : Les drogues et le système nerveux",
      lessonNumber: 2,
      lessonTitle: "Modes d'action synaptiques des drogues et conséquences",
      topicType: "drugs_nervous_system",
      confidence: 0.96,
      keyEntities: ["Psychostimulants (Cocaïne/Amphétamines)", "Psychodépresseurs (Morphine/Diazépam)", "Synapse à dopamine", "Blocage de la recapture", "Substance P"],
    };
  }

  // 15. MÉTABOLISME ÉNERGÉTIQUE & RESPIRATION CELLULAIRE / FERMENTATIONS (TLE C / D)
  if (
    /respiration cellulaire|fermentation alcoolique|fermentation lactique|mitochondrie|glycolyse|cycle de krebs|pyruvate|acide pyruvique|chaîne respiratoire|atp.synthase|bilan énergétique|38 atp|2 atp|exao|oxaloacétate/i.test(
      text
    )
  ) {
    return {
      themeId: "theme_metabolisme_energie",
      themeTitle: "Le métabolisme énergétique et l'activité musculaire",
      lessonNumber: 2,
      lessonTitle: "La production d'énergie par la cellule (Respiration vs Fermentation)",
      topicType: "energy_metabolism_respiration",
      confidence: 0.96,
      keyEntities: ["Respiration aérobie (38 ATP)", "Fermentation anaérobie (2 ATP)", "Mitochondrie", "Glycolyse", "Cycle de Krebs"],
    };
  }

  // Détection par défaut si Terminale D / C SVT
  const defaultTheme = svtTleDKnowledgeBase.themes[7]; // Génétique par défaut
  return {
    themeId: defaultTheme.id,
    themeTitle: defaultTheme.title,
    lessonNumber: defaultTheme.lessons[0].lessonNumber,
    lessonTitle: defaultTheme.lessons[0].title,
    topicType: "general_svt_investigation",
    confidence: 0.75,
    keyEntities: ["Démarche scientifique", "Observation - Interprétation - Conclusion"],
  };
}
