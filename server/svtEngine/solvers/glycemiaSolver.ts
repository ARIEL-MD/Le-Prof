/**
 * Solveur déterministe pour la Régulation de la Glycémie (Terminale D)
 * Chapitre 12 : La régulation de la glycémie
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveGlycemiaExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Expérience du foie lavé de Claude Bernard (1855)
  if (/foie lavé|claude bernard|glycogène|perfusât/i.test(text)) {
    const steps = [
      {
        title: "Analyse du protocole expérimental du foie lavé",
        observationOrData:
          "Lavage d'un foie frais de chien par perfusion d'eau dans la veine porte jusqu'à ce que le liquide sortant ne contienne plus de glucose. Après 24h d'abandon à température ambiante, un nouveau lavage révèle à nouveau la présence d'une forte concentration de glucose dans le perfusât.",
        scientificConceptOrRule:
          "Le glucose libre soluble a été éliminé lors du premier lavage. La réapparition ultérieure de glucose prouve l'existence d'une substance mère insoluble stockée dans le tissu hépatique.",
        deductionOrCalculation:
          "- La substance de réserve insoluble est une macromolécule glucidique : le glycogène.\n- Les cellules hépatiques (hépatocytes) contiennent l'enzyme glycogène-phosphorylase qui hydrolyse le glycogène en glucose : c'est la glycogénolyse.",
        conclusionOrJustification: "Le foie est à la fois un organe de stockage (glycogénogenèse) et de libération (glycogénolyse) du glucose.",
      },
      {
        title: "Spécificité du foie par rapport aux autres organes de stockage",
        observationOrData: "Comparaison foie vs muscle et tissu adipeux.",
        scientificConceptOrRule:
          "Seul le foie possède l'enzyme glucose-6-phosphatase indispensable pour libérer du glucose libre dans la circulation sanguine.",
        deductionOrCalculation:
          "- Le muscle stocke du glycogène mais ne peut le consommer que pour ses propres besoins énergétiques (glycolyse interne).\n- Le foie est le seul organe capable d'assurer la fonction glycogénique libératrice pour l'ensemble de l'organisme.",
        conclusionOrJustification: "Le foie est l'organe effecteur central du maintien de la glycémie.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Régulation de la glycémie : Expérience historique du Foie Lavé de Claude Bernard",
      themeId: "theme12",
      themeTitle: "La régulation de la glycémie",
      lessonNumber: 26,
      lessonTitle: "Régulation hormonale et nerveuse de la glycémie",
      problemStatement: statement,
      steps,
      finalConclusion: "L'expérience du foie lavé prouve que le glycogène hépatique constitue la réserve mobilisable régénérant le glucose sanguin par glycogénolyse.",
      keyScientificTerms: ["Foie lavé", "Glycogène", "Glycogénolyse", "Glycogénogenèse", "Glucose-6-phosphatase"],
      commonPitfallsAvoided: ["Le muscle ne libère JAMAIS de glucose dans le sang (absence de glucose-6-phosphatase)."],
    });
  }

  // Cas 2 : Régulation hormonale par le pancréas endocrine (Insuline vs Glucagon) / Diabètes
  const steps = [
    {
      title: "Rôle du pancréas endocrine (Îlots de Langerhans)",
      observationOrData: "Sécrétion hormonale pancréatique en réponse aux variations de la glycémie.",
      scientificConceptOrRule:
        "Les îlots de Langerhans contiennent deux types cellulaires capteurs et effecteurs :\n- Cellules $\\beta$ sécrétant l'insuline (hypoglycémiante).\n- Cellules $\\alpha$ sécrétant le glucagon (hyperglycémiant).",
      deductionOrCalculation:
        "- En période postprandiale (hyperglycémie) : Les cellules $\\beta$ libèrent l'insuline qui active la glycogénogenèse hépatique et musculaire ainsi que la lipogenèse dans les adipocytes $\\to$ Retour à $1\\text{ g/L}$.\n- En période de jeûne (hypoglycémie) : Les cellules $\\alpha$ libèrent le glucagon qui active la glycogénolyse et la néoglucogenèse hépatique $\\to$ Remontée de la glycémie.",
      conclusionOrJustification: "Système de régulation en boucle fermée à rétroaction négative.",
    },
    {
      title: "Autres systèmes hormonaux et nerveux complémentaires",
      observationOrData: "Action de l'adrénaline, du cortisol et du système nerveux neurovégétatif.",
      scientificConceptOrRule:
        "L'insuline est la SEULE hormone hypoglycémiante. Face à elle, il existe plusieurs hormones hyperglycémiantes synergiques (glucagon, adrénaline médullosurrénalienne, cortisol corticosurrénalien, hormone de croissance GH).",
      deductionOrCalculation:
        "- Nerf vague X : effet parasympathique stimulant l'insulino-sécrétion.\n- Nerf splanchnique (orthosympathique) : stimule la glycogénolyse hépatique et la libération d'adrénaline en situation de stress.",
      conclusionOrJustification: "Contrôle neuroendocrinien global garantissant l'apport constant de glucose au cerveau.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Physiologie endocrinienne : Régulation hormonale et nerveuse de la Glycémie",
    themeId: "theme12",
    themeTitle: "La régulation de la glycémie",
    lessonNumber: 26,
    lessonTitle: "Régulation hormonale et nerveuse de la glycémie",
    problemStatement: statement,
    steps,
    finalConclusion: "La glycémie est régulée à 1 g/L par l'action antagoniste de l'insuline (hypoglycémiante) et des hormones hyperglycémiantes (glucagon, adrénaline, cortisol).",
    keyScientificTerms: ["Îlots de Langerhans (cellules alpha et bêta)", "Insuline", "Glucagon", "Néoglucogenèse", "Diabète de type 1 et 2"],
    commonPitfallsAvoided: ["Il n'existe qu'une seule hormone hypoglycémiante dans l'organisme (l'insuline)."],
  });
}
