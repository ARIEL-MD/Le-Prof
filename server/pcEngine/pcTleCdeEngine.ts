/**
 * Moteur d'orchestration local Physique-Chimie Terminales C, D, E
 * Pipeline déterministe Local-First pour la Physique-Chimie
 */

import { pcTleCdeKnowledgeBase } from "../../pcTleCdeKnowledgeBase";
import { classifyPcExercise } from "./classifier";
import { solveElectromagnetismExercise } from "./solvers/electromagnetismSolver";
import { solveGeneralChemExercise } from "./solvers/generalChemSolver";
import { solveMechanicsExercise } from "./solvers/mechanicsSolver";
import { solveOrganicChemExercise } from "./solvers/organicChemSolver";
import { PcStructuredResult } from "./types";

export interface PcTleCdeSolutionResponse {
  handledLocally: boolean;
  discipline?: "CHIMIE" | "PHYSIQUE";
  themeId?: string;
  themeTitle?: string;
  lessonNumber?: number;
  lessonTitle?: string;
  confidence?: number;
  result?: PcStructuredResult;
}

export function solvePcTleCdeExercise(
  statement: string,
  options?: { serie?: string; level?: string; discipline?: string }
): PcTleCdeSolutionResponse {
  if (!statement || statement.trim().length === 0) {
    return { handledLocally: false };
  }

  // Ne jamais traiter si la discipline explicite n'est pas scientifique/PC
  if (options?.discipline && !/physique|chimie|pc/i.test(options.discipline)) {
    return { handledLocally: false };
  }

  // 1. Classification sémantique
  const classification = classifyPcExercise(statement);

  if (!classification || classification.confidence < 0.7) {
    return { handledLocally: false };
  }

  // 2. Routage vers le solveur spécialisé
  try {
    let result: PcStructuredResult | null = null;

    switch (classification.topicType) {
      // Chimie organique
      case "organic_alcohols":
      case "organic_carbonyls":
      case "organic_amines":
      case "organic_acids_derivatives":
      case "organic_saponification_soap":
      case "organic_amino_acids_peptides":
        result = solveOrganicChemExercise(statement);
        break;

      // Chimie générale
      case "general_chem_aqueous_ph":
      case "general_chem_strong_acids_bases":
      case "general_chem_weak_acids_bases_ka":
      case "general_chem_titration_buffers":
        result = solveGeneralChemExercise(statement);
        break;

      // Mécanique
      case "physics_kinematics":
      case "physics_newton_tci_tec":
      case "physics_uniform_field_projectile_oscilloscope":
      case "physics_gravitation_satellites_kepler":
      case "physics_mechanical_oscillations":
        result = solveMechanicsExercise(statement);
        break;

      // Électromagnétisme
      case "physics_magnetic_field_solenoid":
      case "physics_laplace_law_cotton":
      case "physics_electromagnetic_induction_faraday":
        result = solveElectromagnetismExercise(statement);
        break;

      default:
        if (classification.discipline === "CHIMIE") {
          result = solveGeneralChemExercise(statement);
        } else {
          result = solveMechanicsExercise(statement);
        }
        break;
    }

    if (result) {
      return {
        handledLocally: true,
        discipline: classification.discipline,
        themeId: classification.themeId,
        themeTitle: classification.themeTitle,
        lessonNumber: classification.lessonNumber,
        lessonTitle: classification.lessonTitle,
        confidence: classification.confidence,
        result,
      };
    }
  } catch (err) {
    console.warn("[PcEngine] Error in local PC solver:", err);
  }

  return {
    handledLocally: false,
    discipline: classification.discipline,
    themeId: classification.themeId,
    themeTitle: classification.themeTitle,
    confidence: classification.confidence,
  };
}
