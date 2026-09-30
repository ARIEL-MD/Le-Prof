/**
 * Solveurs déterministes pour la Chimie Générale & Solutions Aqueuses (Terminale C, D, E)
 * Autoprotolyse de l'eau, pH, Acides/Bases forts, Acides/Bases faibles, Ka/pKa, Dosages & Tampons
 */

import { buildPcStructuredResult } from "../resultBuilder";
import { PcStructuredResult } from "../types";

export function solveGeneralChemExercise(statement: string): PcStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Titrage / Dosage acido-basique & Solutions tampons
  if (/dosage|titrage|solution tampon|point d'[ée]quivalence|demi-[ée]quivalence|tangentes/i.test(text)) {
    const isWeakAcidStrongBase = /acide [ée]thano[ïi]que|acide m[ée]thano[ïi]que|acide benzo[ïi]que|vinaigre/i.test(text) && /soude|naoh|potasse|koh/i.test(text);
    const isWeakBaseStrongAcid = /ammoniac|nh3|m[ée]thylamine|[ée]thylamine/i.test(text) && /chlorhydrique|hcl/i.test(text);

    let pHEqual = isWeakAcidStrongBase ? "pHE > 7 (basique, dû à la présence de la base conjuguée)" : isWeakBaseStrongAcid ? "pHE < 7 (acide, dû à la présence de l'acide conjugué)" : "pHE = 7 (neutre)";
    let indicator = isWeakAcidStrongBase ? "Phénolphtaléine (zone de virage 8,2 - 10)" : isWeakBaseStrongAcid ? "Hélianthine (3,1 - 4,4) ou Rouge de méthyle (4,2 - 6,2)" : "Bleu de bromothymol / BBT (6,0 - 7,6)";

    const steps = [
      {
        title: "Dispositif expérimental et principe du dosage",
        observationOrData: "Suivi pH-métrique ou colorimétrique de la réaction acido-basique.",
        scientificConceptOrRule: "La réaction de dosage doit être unique, rapide, totale et exothermique.",
        deductionOrCalculation: "- Schéma annoté : Burette graduée contenant le réactif titrant, Bécher/Erlenmeyer contenant la prise d'essai et la sonde du pH-mètre, Barreau aimanté et Agitateur magnétique.\n- Équation-bilan support du dosage établie.",
        conclusionOrJustification: "Le dispositif permet un suivi quantitatif précis du transfert de protons.",
      },
      {
        title: "Exploitation du point d'équivalence E et détermination de la concentration",
        observationOrData: "Repérage du saut de pH par la méthode des tangentes parallèles ou par le maximum de dpH/dV.",
        scientificConceptOrRule: "À l'équivalence acido-basique, les quantités de matière des réactifs introduits sont dans les proportions stœchiométriques : n(acide) = n(base).",
        deductionOrCalculation: `$$C_a \\times V_a = C_b \\times V_{bE} \\implies C_a = \\frac{C_b \\times V_{bE}}{V_a}$$\nNature du mélange à l'équivalence : ${pHEqual}.\nChoix de l'indicateur coloré : ${indicator} car sa zone de virage englobe la valeur de pHE.`,
        conclusionOrJustification: "Concentration molaire volumique déterminée avec rigueur.",
      },
      {
        title: "Exploitation du point de demi-équivalence F et propriétés de la solution tampon",
        observationOrData: "Point atteint pour un volume versé V = V_E / 2.",
        scientificConceptOrRule: "À la demi-équivalence, le mélange est équimolaire en acide faible et sa base conjuguée : [Acide] = [Base] et pH = pKa.",
        deductionOrCalculation: "- Cette solution obtenue est une SOLUTION TAMPON.\n- Propriétés remarquables : Le pH varie très peu lors d'une dilution modérée, ou lors de l'ajout modéré d'un acide fort ou d'une base forte.",
        conclusionOrJustification: "Détermination directe de la constante d'acidité pKa du couple.",
      },
    ];

    return buildPcStructuredResult({
      title: "Chimie Générale : Dosage Acido-Basique et Propriétés des Solutions Tampons",
      themeId: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      discipline: "CHIMIE",
      lessonNumber: 10,
      lessonTitle: "Dosages acido-basiques et Solutions Tampons",
      problemStatement: statement,
      scientificHypothesis: "À l'équivalence n(H3O+) = n(OH-), et à la demi-équivalence [Acide] = [Base] d'où pH = pKa (solution tampon).",
      steps,
      finalConclusion: `Le titrage permet de calculer la concentration inconnue ($C_a = \\frac{C_b V_{bE}}{V_a}$) et le point de demi-équivalence confirme le pKa du couple au sein d'une solution tampon stable.`,
      keyScientificTerms: ["Équivalence acido-basique", "Méthode des tangentes", "Demi-équivalence", "Solution tampon", "Indicateur coloré", "Zone de virage"],
      commonPitfallsAvoided: ["Pour un acide faible dosé par une base forte, le pH à l'équivalence n'est PAS égal à 7 mais est basique (pHE > 7)."],
    });
  }

  // Cas 2 : Acides faibles / Bases faibles / Ka / pKa / Calculs de concentrations
  const steps = [
    {
      title: "Inventaire des espèces chimiques et mise en équation",
      observationOrData: "Solution aqueuse d'acide faible ou de base faible de concentration C et de pH mesuré.",
      scientificConceptOrRule: "En solution aqueuse, l'équilibre chimique d'ionisation est régi par les lois de conservation de la matière, d'électroneutralité et du produit ionique de l'eau Ke = 10^(-14).",
      deductionOrCalculation: `- Espèces présentes : $H_3O^+$, $OH^-$, forme basique conjuguée, forme acide, $H_2O$.\n- $[H_3O^+] = 10^{-pH}$ et $[OH^-] = \\frac{10^{-14}}{[H_3O^+]} = 10^{pH - 14}$.\n- Électroneutralité : $\\sum [\\text{cations}] = \\sum [\\text{anions}]$.\n- Conservation de la matière : $C = [\\text{Acide}] + [\\text{Base conjuguée}]$.`,
      conclusionOrJustification: "Le système d'équations est complet et résoluble.",
    },
    {
      title: "Calcul des concentrations molaires et du coefficient d'ionisation",
      observationOrData: "Application des approximations justifiées ($[OH^-] \\ll [H_3O^+]$ en milieu acide ou inversement en milieu basique).",
      scientificConceptOrRule: "Le coefficient de dissociation $\\alpha = \\frac{[\\text{forme ionisée}]}{C_0}$ mesure le taux d'avancement de l'ionisation (augmente lors d'une dilution).",
      deductionOrCalculation: "- Pour un monoacide faible : $[A^-] \\approx [H_3O^+] = 10^{-pH}$ et $[AH] = C - [H_3O^+]$.\n- Coefficient d'ionisation : $\\alpha = \\frac{10^{-pH}}{C}$.\n- En cas de dilution : $\\alpha$ augmente (loi de dilution d'Ostwald).",
      conclusionOrJustification: "Concentrations effectives de toutes les espèces en solution obtenues.",
    },
    {
      title: "Détermination de la constante d'acidité Ka et du pKa",
      observationOrData: "Calcul de la constante d'équilibre thermodynamique.",
      scientificConceptOrRule: "$$K_a = \\frac{[\\text{Base}][H_3O^+]}{[\\text{Acide}]} \\quad \\text{et} \\quad pKa = -\\log K_a \\iff pH = pKa + \\log\\frac{[\\text{Base}]}{[\\text{Acide}]}$$",
      deductionOrCalculation: "Calcul numérique de $K_a$ et de $pKa$.\nComparaison de la force relative : De deux acides faibles de même concentration, le plus fort a le plus grand $K_a$ (plus petit $pKa$).",
      conclusionOrJustification: "Validation de la constante intrinsèque du couple à 25°C.",
    },
  ];

  return buildPcStructuredResult({
    title: "Chimie Générale : Équilibres Acido-Basiques et Constante d'acidité Ka/pKa",
    themeId: "chimie_generale",
    themeTitle: "Chimie Générale & Solutions Aqueuses",
    discipline: "CHIMIE",
    lessonNumber: 9,
    lessonTitle: "Acides faibles, Bases faibles et Constante d'acidité Ka/pKa",
    problemStatement: statement,
    steps,
    finalConclusion: "L'application couplée de l'électroneutralité et de la conservation de matière permet de déterminer les concentrations molaires et d'établir le pKa du couple acido-basique.",
    keyScientificTerms: ["Constante d'acidité Ka", "pKa", "Coefficient d'ionisation alpha", "Électroneutralité", "Conservation de la matière", "Diagramme de prédominance"],
    commonPitfallsAvoided: ["Ne pas négliger systématiquement [OH-] sans vérifier que pH < 6."],
  });
}
