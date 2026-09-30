/**
 * Solveur déterministe pour la Régulation de la Pression Artérielle (Terminale D)
 * Chapitre 5 : Activité cardiaque et régulation de la pression artérielle
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveCardioPressureExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  const isHypotension = /hypotension|baisse de pression|hémorragie|occlusion|chute de la pa/i.test(text);
  const isHypertension = /hypertension|hausse de pression|élévation de la pa/i.test(text);

  const steps = [
    {
      title: "Analyse du stimulus initial et captation par les récepteurs sensoriels",
      observationOrData: isHypotension
        ? "Diminution de la pression artérielle (ou baisse de la volémie lors d'une hémorragie)."
        : "Élévation de la pression artérielle (ou hypertension provoquée).",
      scientificConceptOrRule:
        "Les barorécepteurs situés au niveau du sinus carotidien et de la crosse aortique sont sensibles à l'étirement des parois artérielles.",
      deductionOrCalculation: isHypotension
        ? "- Moindre étirement des parois $\\to$ Diminution de la fréquence des potentiels d'action dans les nerfs sensitifs de Hering et de Cyon vers le bulbe rachidien."
        : "- Étirement accru des parois $\\to$ Augmentation de la fréquence des potentiels d'action dans les nerfs sensitifs de Hering et de Cyon vers le noyau sensitif du X.",
      conclusionOrJustification: "Le centre bulbaire intègre la variation de pression.",
    },
    {
      title: "Intégration nerveuse bulbaire et réponse effectrice (Baroréflexe)",
      observationOrData: "Réaction des centres cardio-modérateurs (X) et cardio-accélérateurs (orthosympathique).",
      scientificConceptOrRule:
        "Le système nerveux parasympathique (nerf vague X / acétylcholine) est cardio-modérateur et vasodilatateur ; le système orthosympathique (noradrénaline) est cardio-accélérateur et vasoconstricteur.",
      deductionOrCalculation: isHypotension
        ? "- Levée de l'inhibition bulbaire $\\to$ Activation du système orthosympathique et inhibition du nerf X.\n- Libération de noradrénaline $\\to$ Augmentation de la fréquence cardiaque (tachycardie) et vasoconstriction artériolaire."
        : "- Activation du noyau moteur du X $\\to$ Libération d'acétylcholine au niveau du tissu nodal $\\to$ Bradycardie.\n- Inhibition du centre vasomoteur orthosympathique $\\to$ Vasodilatation.",
      conclusionOrJustification: isHypotension
        ? "Augmentation du débit et des résistances $\\to$ Remontée corrective de la PA."
        : "Diminution du débit et des résistances $\\to$ Baisse corrective de la PA.",
    },
    {
      title: "Régulation humorale à long terme (Système Rénine-Angiotensine-Aldostérone & ADH)",
      observationOrData: "Action hormonale rénale et surrénalienne.",
      scientificConceptOrRule:
        "En cas d'hypotension prolongée ou d'hypovolémie : les reins sécrètent la rénine qui transforme l'angiotensinogène hépatique en angiotensine (puissant vasoconstricteur stimulant l'aldostérone).",
      deductionOrCalculation:
        "- L'aldostérone stimule la réabsorption tubulaire de $Na^+$ et d'eau par le rein $\\to$ Rétablissement de la volémie.\n- L'ADH (posthypophyse) active la réabsorption d'eau pure dans le tube collecteur.",
      conclusionOrJustification: "Rétablissement stable de la pression artérielle à sa valeur de consigne (homéostasie).",
    },
  ];

  return buildSvtStructuredResult({
    title: "Physiologie cardiovasculaire : Boucle de régulation nerveuse et hormonale de la Pression Artérielle",
    themeId: "theme5",
    themeTitle: "Activité cardiaque et régulation de la pression artérielle",
    lessonNumber: 13,
    lessonTitle: "Activité cardiaque et régulation de la pression artérielle",
    problemStatement: statement,
    scientificHypothesis:
      "La pression artérielle est maintenue constante grâce à une boucle de régulation réflexe (baroréflexe) doublée d'un contrôle hormonal de la volémie.",
    steps,
    finalConclusion:
      "La constance de la pression artérielle repose sur l'équilibre dynamique entre le contingent parasympathique cardio-freinateur (nerf X) et le contingent orthosympathique cardio-accélérateur et vasoconstricteur, soutenu par le système rénine-angiotensine-aldostérone.",
    keyScientificTerms: [
      "Barorécepteurs (sinus carotidien, crosse aortique)",
      "Nerfs de Hering et Cyon",
      "Nerf vague X (parasympathique / Acétylcholine)",
      "Système orthosympathique (Noradrénaline)",
      "Système Rénine-Angiotensine-Aldostérone",
      "ADH (Vasopressine)",
    ],
    commonPitfallsAvoided: [
      "Le nerf pneumogastrique X est cardio-MODÉRATEUR (sa stimulation ralentit le cœur et baisse la PA).",
    ],
  });
}
