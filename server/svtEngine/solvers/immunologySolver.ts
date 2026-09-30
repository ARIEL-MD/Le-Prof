/**
 * Solveur déterministe pour l'Immunologie (Terminale D)
 * Thème 10 : Système immunitaire, RIMH/RIMC, SIDA et Vaccins
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveImmunologyExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : SIDA / VIH / Évolution charge virale et lymphocytes T4 CD4+
  if (/vih|sida|cd4|primo-infection|asymptomatique|opportuniste|transcriptase inverse/i.test(text)) {
    const steps = [
      {
        title: "Structure du VIH et tropisme cellulaire pour les LT4 (CD4+)",
        observationOrData: "Le VIH est un rétrovirus à ARN ciblant spécifiquement les cellules exprimant le récepteur CD4 (principalement les lymphocytes T4 helpers et les macrophages).",
        scientificConceptOrRule: "La glycoprotéine gp120 de l'enveloppe virale se fixe sur le récepteur CD4, permettant la pénétration du virus.",
        deductionOrCalculation:
          "- La transcriptase inverse synthétise un ADN proviral double brin à partir de l'ARN viral.\n- L'ADN proviral est intégré dans le génome de la cellule hôte (intégrase).\n- La réplication virale entraîne la lyse des LT4 lors du bourgeonnement massif des virions.",
        conclusionOrJustification: "Le VIH détruit le pivot central de la réponse immunitaire adaptative.",
      },
      {
        title: "Analyse des 3 phases de l'infection par le VIH",
        observationOrData: "Cinétique temporelle de la charge virale (ARN viral) et du taux de lymphocytes T4.",
        scientificConceptOrRule: "L'évolution de la maladie comprend 3 stades caractéristiques :",
        deductionOrCalculation:
          "1. Primo-infection (quelques semaines) : Pic aigu de charge virale, chute transitoire des T4, puis séroconversion (apparition des anticorps anti-VIH détectables).\n2. Phase asymptomatique (plusieurs années) : Équilibre précaire, charge virale faible mais réplication continue, baisse progressive et silencieuse des T4.\n3. Phase SIDA déclaré : Effondrement critique des LT4 (< 200 cellules/mm³) $\\to$ Rupture de la coopération cellulaire $\\to$ Développement d'infections opportunistes mortelles (tuberculose, candidoses, toxoplasmose).",
        conclusionOrJustification: "L'immunodéficience acquise résulte de la disparition des signaux interleukines nécessaires à la fois aux LB et aux LT8.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Immunologie : Mécanisme d'action du VIH et évolution vers le SIDA",
      themeId: "theme10",
      themeTitle: "Immunologie : Système immunitaire et défenses de l'organisme",
      lessonNumber: 23,
      lessonTitle: "Dysfonctionnements immunitaires et aides (SIDA et Vaccins)",
      problemStatement: statement,
      steps,
      finalConclusion: "La destruction des lymphocytes T4 par le VIH paralyse l'ensemble de l'immunité adaptative (humorale et cellulaire), laissant l'organisme vulnérable aux maladies opportunistes.",
      keyScientificTerms: ["VIH / SIDA", "Lymphocytes T4 (CD4+)", "Transcriptase inverse", "Séroconversion", "Maladies opportunistes"],
      commonPitfallsAvoided: ["Pendant la phase asymptomatique, le virus n'est PAS inactif : il se réplique activement dans les organes lymphoïdes."],
    });
  }

  // Cas 2 : Coopération cellulaire dans la réponse immunitaire spécifique (RIMH vs RIMC)
  const steps = [
    {
      title: "Phase d'induction : Présentation de l'antigène et sélection clonale",
      observationOrData: "Contact entre la Cellule Présentatrice d'Antigène (CPA / macrophage) et les lymphocytes.",
      scientificConceptOrRule: "Double reconnaissance : Le TCR du lymphocyte T reconnaît simultanément le peptide antigénique étranger et la molécule du CMH/HLA du soi.",
      deductionOrCalculation:
        "- CPA + HLA II $\\to$ Sélection et activation des Lymphocytes T4 (CD4+).\n- Cellule cible infectée + HLA I $\\to$ Sélection des Lymphocytes T8 (CD8+).\n- Antigène natif $\\to$ Sélection clonale directe des Lymphocytes B (BCR).",
      conclusionOrJustification: "Activation spécifique des clones immunocompétents.",
    },
    {
      title: "Phase d'amplification et de différenciation (Rôle pivot des interleukines)",
      observationOrData: "Multiplication des lymphocytes sélectionnés.",
      scientificConceptOrRule: "Les LT4 activés deviennent des LT helpers sécréteurs d'interleukines (IL-2), indispensables à la prolifération de tous les lymphocytes.",
      deductionOrCalculation:
        "- Les LB se multiplient puis se différencient en plasmocytes (sécréteurs d'anticorps) et LB mémoires $\\to$ Réponse à médiation humorale (RIMH).\n- Les LT8 se différencient en LT cytotoxiques (LTc) et LT8 mémoires $\\to$ Réponse à médiation cellulaire (RIMC).",
      conclusionOrJustification: "Expansion clonale et spécialisation effectrice.",
    },
    {
      title: "Phase effectrice : Neutralisation et destruction de l'antigène",
      observationOrData: "Élimination de la menace biologique.",
      scientificConceptOrRule: "Dualité des mécanismes d'action :",
      deductionOrCalculation:
        "- RIMH (Antigènes solubles/extracellulaires) : Les anticorps circulants forment des complexes immuns neutralisants $\\to$ Opsonisation et élimination par phagocytose ou activation du complément.\n- RIMC (Cellules infectées ou tumorales) : Les LTc libèrent de la perforine et des granzymes créant des pores membranaires $\\to$ Lyse cellulaire par choc osmotique et apoptose.",
      conclusionOrJustification: "Maintien de l'intégrité biologique de l'organisme.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Immunologie : Coopération cellulaire et mécanismes des réponses immunitaires spécifiques",
    themeId: "theme10",
    themeTitle: "Immunologie : Système immunitaire et défenses de l'organisme",
    lessonNumber: 22,
    lessonTitle: "La réponse immunitaire non spécifique et spécifique",
    problemStatement: statement,
    steps,
    finalConclusion: "L'immunité adaptative repose sur la coopération orchestrée par les LT4, aboutissant à la neutralisation par anticorps (RIMH) ou à la cytotoxicité cellulaire (RIMC).",
    keyScientificTerms: ["Sélection clonale", "CPA (Macrophage)", "Lymphocytes T4 / Interleukines", "Plasmocytes (Anticorps)", "LTc (Perforines)", "Complexe immun"],
    commonPitfallsAvoided: ["Les plasmocytes ne sont PAS une nouvelle lignée : ce sont des lymphocytes B différenciés spécialisés dans la sécrétion d'anticorps."],
  });
}
