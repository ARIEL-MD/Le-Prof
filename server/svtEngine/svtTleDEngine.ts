/**
 * Moteur d'orchestration local SVT Terminale D
 * Pipeline déterministe Local-First pour la SVT de Terminale D
 */

import { svtTleDKnowledgeBase } from "../../svtTleDKnowledgeBase";
import { canonicalDiscipline } from "../disciplineRouter";
import { classifySvtExercise } from "./classifier";
import { solveCardioPressureExercise } from "./solvers/cardioPressureSolver";
import { solveGeneticsExercise } from "./solvers/geneticsSolver";
import { solveGlycemiaExercise } from "./solvers/glycemiaSolver";
import { solveImmunologyExercise } from "./solvers/immunologySolver";
import { solveNeuroPhysioExercise } from "./solvers/neuroPhysioSolver";
import { solvePedigreeExercise } from "./solvers/pedigreeSolver";
import { solveReproductionExercise } from "./solvers/reproductionSolver";
import { solveSvtTleCSpecificExercise } from "./solvers/svtTleCSolver";
import { SvtStructuredResult } from "./types";

export interface SvtTleDSolutionResponse {
  handledLocally: boolean;
  themeId?: string;
  themeTitle?: string;
  lessonNumber?: number;
  lessonTitle?: string;
  confidence?: number;
  result?: SvtStructuredResult;
}

export function solveSvtTleDExercise(
  statement: string,
  options?: { serie?: string; level?: string; discipline?: string }
): SvtTleDSolutionResponse {
  if (!statement || statement.trim().length === 0) {
    return { handledLocally: false };
  }

  if (options?.discipline) {
    const canon = canonicalDiscipline(options.discipline);
    if (canon && canon !== "svt") {
      return { handledLocally: false };
    }
  }

  // Si le texte est explicitement une langue vivante (anglais, allemand, espagnol) ou autre discipline, SVT ne doit jamais le traiter
  if (
    /\b(english|anglais|englais|deutsch|allemand|spanish|espagnol|reading comprehension|true or false|past simple|future with will|verbs in brackets|turn into passive|social media|teenagers|wh- questions|fill in the blanks|guided writing)\b/i.test(statement) ||
    /\b(?:devoir|exercice|cours|fiche|sujet)\s+(?:d['’]|de\s+)(?:anglais|englais|english|allemand|deutsch|espagnol|maths?|physique|chimie|philo|philosophie|histoire|geo|francais)\b/i.test(statement)
  ) {
    return { handledLocally: false };
  }

  // 1. Classification sémantique
  const classification = classifySvtExercise(statement);

  // 2. Routage vers le solveur spécialisé
  try {
    let result: SvtStructuredResult | null = null;

    switch (classification.topicType) {
      case "genetics_cross":
        result = solveGeneticsExercise(statement);
        break;

      case "pedigree_human_genetics":
        result = solvePedigreeExercise(statement);
        break;

      case "cardiac_pressure_regulation":
        result = solveCardioPressureExercise(statement);
        break;

      case "glycemia_regulation":
        result = solveGlycemiaExercise(statement);
        break;

      case "action_potential_nerve":
      case "synapse_integration":
      case "reflex_arc_medullary":
      case "muscle_contraction_energy":
        result = solveNeuroPhysioExercise(statement);
        break;

      case "reproduction_gametogenesis_hormones":
      case "plant_double_fertilization":
        result = solveReproductionExercise(statement);
        break;

      case "immunology_humoral_cellular":
      case "hiv_aids_evolution":
        result = solveImmunologyExercise(statement);
        break;

      case "petroleum_geology_ci":
      case "soil_fertility_management":
      case "drugs_nervous_system":
      case "energy_metabolism_respiration":
        result = solveSvtTleCSpecificExercise(statement);
        break;

      case "homeostasis_kidney_ph":
      case "general_svt_investigation":
      default:
        // Si génétique ou terme spécifique
        if (/croisement|gène|allèle/i.test(statement)) {
          result = solveGeneticsExercise(statement);
        } else if (/pression|cœur|coeur/i.test(statement)) {
          result = solveCardioPressureExercise(statement);
        } else if (/glycémie|glucose|foie/i.test(statement)) {
          result = solveGlycemiaExercise(statement);
        } else if (/nerf|neurone|synapse|moelle|réflexe|sherrington|curare|potentiel\s+d['’]action|myogramme|sarcomère|axone/i.test(statement)) {
          result = solveNeuroPhysioExercise(statement);
        } else {
          return { handledLocally: false };
        }
        break;
    }

    if (result) {
      return {
        handledLocally: true,
        themeId: classification.themeId,
        themeTitle: classification.themeTitle,
        lessonNumber: classification.lessonNumber,
        lessonTitle: classification.lessonTitle,
        confidence: classification.confidence,
        result,
      };
    }
  } catch (err) {
    console.warn("[SvtEngine] Error in local SVT solver:", err);
  }

  return {
    handledLocally: false,
    themeId: classification.themeId,
    themeTitle: classification.themeTitle,
    confidence: classification.confidence,
  };
}
