/**
 * Solveur déterministe pour la Neurophysiologie (Terminale D)
 * Thème 2 & 3 : Tissu nerveux, Potentiel d'action, Synapse, Réflexes
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveNeuroPhysioExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Vitesse de conduction de l'influx nerveux (Méthode de Helmholtz)
  if (/helmholtz|vitesse de conduction|d1|d2|t1|t2|delta d|delta t|latence/i.test(text)) {
    const steps = [
      {
        title: "Principe et formule de la méthode de Helmholtz",
        observationOrData: "Deux enregistrements successifs d'un potentiel d'action pour deux distances différentes $d_1$ et $d_2$ séparant les électrodes excitatrices des électrodes réceptrices.",
        scientificConceptOrRule: "La vitesse de conduction de l'influx nerveux est définie par : $V = \\frac{\\Delta d}{\\Delta t} = \\frac{d_2 - d_1}{t_2 - t_1}$.",
        deductionOrCalculation:
          "- $\\Delta d = d_2 - d_1$ (distance supplémentaire parcourue par l'onde, convertie en mètres).\n- $\\Delta t = t_2 - t_1$ (temps supplémentaire mis par l'influx pour atteindre la 2ème position, converti en secondes).\n- Application numérique : $V = \\frac{\\Delta d}{\\Delta t}\\text{ (m/s)}$.",
        conclusionOrJustification: "La vitesse est constante le long de la fibre pour des conditions physiologiques données.",
      },
      {
        title: "Interprétation physiologique de la vitesse",
        observationOrData: "Type de fibre (myélinisée ou amyélinisée), diamètre et température.",
        scientificConceptOrRule: "La conduction saltatoire dans les fibres myélinisées est beaucoup plus rapide que la conduction continue de proche en proche.",
        deductionOrCalculation:
          "- Présence de myéline $\\to$ Conduction saltatoire d'un nœud de Ranvier à l'autre.\n- Diamètre élevé $\\to$ Résistance interne plus faible $\\to$ Vitesse accrue (jusqu'à $100\\text{-}120\\text{ m/s}$ chez les mammifères).",
        conclusionOrJustification: "La vitesse dépend directement du diamètre et de la myélinisation.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Neurophysiologie : Calcul et analyse de la vitesse de l'influx nerveux (Helmholtz)",
      themeId: "theme2",
      themeTitle: "Le tissu nerveux et ses propriétés",
      lessonNumber: 6,
      lessonTitle: "Conduction de l'influx nerveux",
      problemStatement: statement,
      steps,
      finalConclusion: "La vitesse de propagation $V = \\frac{d_2 - d_1}{t_2 - t_1}$ illustre la conduction saltatoire le long de la fibre myélinisée.",
      keyScientificTerms: ["Méthode de Helmholtz", "Conduction saltatoire", "Nœuds de Ranvier", "Gaine de myéline", "Temps de latence"],
      commonPitfallsAvoided: ["Convertir impérativement les millisecondes ($10^{-3}\\text{ s}$) et les millimètres ($10^{-3}\\text{ m}$)."],
    });
  }

  // Cas 2 : Transmission synaptique / PPSE / PPSI / Rôle intégrateur du motoneurone
  if (/synapse|ppse|ppsi|sommation|curare|acétylcholine|gaba/i.test(text)) {
    const steps = [
      {
        title: "Mécanisme de la transmission synaptique chimique",
        observationOrData: "Arrivée du potentiel d'action dans le bouton présynaptique.",
        scientificConceptOrRule: "Étapes moléculaires de la synapse chimique : Entrée de $Ca^{2+} \\to$ Exocytose du neurotransmetteur $\\to$ Fixation sur récepteurs postsynaptiques chimio-dépendants $\\to$ Flux ioniques.",
        deductionOrCalculation:
          "- Synapse excitatrice (ex: Acétylcholine) : Ouverture des canaux $Na^+ \\to$ Dépolarisation locale = PPSE.\n- Synapse inhibitrice (ex: GABA) : Ouverture des canaux $Cl^-$ ou sortie de $K^+ \\to$ Hyperpolarisation locale = PPSI.\n- Dégradation enzymatique rapide par l'acétylcholinestérase pour libérer les récepteurs.",
        conclusionOrJustification: "Transmission chimique polarisée et univoque.",
      },
      {
        title: "Rôle intégrateur du motoneurone : Sommations spatiale et temporelle",
        observationOrData: "Stimulations simultanées ou rapprochées de plusieurs neurones afférents.",
        scientificConceptOrRule: "Le segment initial (cône axonique) fait la somme algébrique des PPSE et PPSI. Si la dépolarisation globale franchit le seuil (-50 mV), un train de potentiels d'action est émis.",
        deductionOrCalculation:
          "- Sommation temporelle : Rapprochement d'impulsions sur une même synapse.\n- Sommation spatiale : Somme des entrées excitatrices et inhibitrices issues de plusieurs synapses.\n- Si $\\sum \\text{PPSE} - \\sum \\text{PPSI} \\ge \\text{Seuil} \\to$ Déclenchement d'un potentiel d'action postsynaptique propagé.",
        conclusionOrJustification: "Le motoneurone intègre les signaux et élabore une réponse motrice coordonnée.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Neurophysiologie : Fonctionnement synaptique et intégration neuronale",
      themeId: "theme2",
      themeTitle: "Le tissu nerveux et ses propriétés",
      lessonNumber: 7,
      lessonTitle: "Transmission synaptique et intégration neuronale",
      problemStatement: statement,
      steps,
      finalConclusion: "La synapse chimique transmet l'information par neurotransmetteurs. Le motoneurone intègre par sommation spatio-temporelle les PPSE et PPSI.",
      keyScientificTerms: ["PPSE", "PPSI", "Sommation spatiale", "Sommation temporelle", "Acétylcholine", "GABA", "Canaux chimio-dépendants"],
      commonPitfallsAvoided: ["Le PPSE est graduable et non propagé, alors que le potentiel d'action est stéréotypé et propagé selon la loi du tout ou rien."],
    });
  }

  // Cas 3 : Réflexe myotatique et Innervation réciproque de Sherrington / Bell & Magendie
  const steps = [
    {
      title: "Mise en évidence du circuit de l'arc réflexe (Expériences de Bell et Magendie)",
      observationOrData: "Section et stimulation des racines rachidiennes médullaires.",
      scientificConceptOrRule: "La racine postérieure conduit les influx sensitifs afférents ; la racine antérieure conduit les influx moteurs efférents.",
      deductionOrCalculation:
        "- Récepteur sensoriel (fuseau neuromusculaire) $\\to$ Fibre sensitive $\\to$ Ganglion spinal $\\to$ Racine dorsale $\\to$ Substance grise médullaire $\\to$ Racine ventrale $\\to$ Motoneurone $\\to$ Muscle effecteur.",
      conclusionOrJustification: "Arc réflexe médullaire fonctionnel.",
    },
    {
      title: "Coordination musculaire : Innervation réciproque (Loi de Sherrington)",
      observationOrData: "Étirement d'un muscle agoniste (ex: extenseur) entraînant la contraction de ce muscle et le relâchement simultané de l'antagoniste (fléchisseur).",
      scientificConceptOrRule: "La même fibre sensitive excite directement le motoneurone du muscle étiré (voie monosynaptique) et excite un interneurone inhibiteur qui bloque le motoneurone du muscle antagoniste.",
      deductionOrCalculation: "Contraction de l'agoniste + Relâchement de l'antagoniste = Mouvement fluide et posture stable.",
      conclusionOrJustification: "Coordination réflexe parfaite.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Neurophysiologie : Arc réflexe médullaire et Innervation réciproque de Sherrington",
    themeId: "theme3",
    themeTitle: "Rôle du système nerveux dans le comportement moteur",
    lessonNumber: 8,
    lessonTitle: "Mouvements involontaires ou réflexes",
    problemStatement: statement,
    steps,
    finalConclusion: "Le réflexe myotatique est monosynaptique pour la contraction du muscle étiré et polysynaptique pour l'inhibition du muscle antagoniste.",
    keyScientificTerms: ["Arc réflexe", "Fuseau neuromusculaire", "Racine dorsale / ventrale", "Innervation réciproque", "Interneurone inhibiteur"],
    commonPitfallsAvoided: ["Ne pas oublier l'interneurone inhibiteur dans la voie du muscle antagoniste."],
  });
}
