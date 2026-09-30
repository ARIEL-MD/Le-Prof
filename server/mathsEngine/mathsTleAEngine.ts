import { MathsSolveOptions, MathsSolveResult } from './types';
import { classifyMathsTleA } from './classifier';
import { solveRealNumbers } from './solvers/realNumbersSolver';
import { solveEquations } from './solvers/equationsSolver';
import { solveLimits } from './solvers/limitsSolver';
import { solveDerivativesPrimitives } from './solvers/derivativesPrimitivesSolver';
import { solveFunctionStudy } from './solvers/functionStudySolver';
import { solveLogarithm } from './solvers/logarithmSolver';
import { solveExponential } from './solvers/exponentialSolver';
import { solveStatistics } from './solvers/statisticsSolver';
import { solveProbability } from './solvers/probabilitySolver';

export interface MathsEngineResponse {
  handledLocally: boolean;
  confidence: number;
  result?: MathsSolveResult;
  chapterId?: string;
  chapterTitle?: string;
  error?: string;
}

/**
 * Moteur principal de résolution locale Maths Terminale A (A1 & A2)
 * Exécute l'ordre de résolution spécifié dans le document de référence :
 * 1. Détection de la série (A1 vs A2)
 * 2. Détection du type d'exercice et du chapitre
 * 3. Récupération des méthodes et formules du cours Maths Tle A (filtrées pour A1 / A2)
 * 4. Résolution étape par étape avec respect strict des programmes A1/A2
 * 5. Contrôle et vérification mathématique obligatoire
 * 6. Génération de l'explication méthodologique
 */
export function solveMathsTleAExercise(
  statement: string,
  options?: { serie?: string; level?: string; discipline?: string }
): MathsEngineResponse {
  if (!statement || !statement.trim()) {
    return { handledLocally: false, confidence: 0 };
  }

  // Normalize serie: 'A1' or 'A2'
  let normalizedSerie: 'A1' | 'A2' | 'A' = 'A1';
  if (options?.serie) {
    const s = options.serie.toLowerCase();
    if (s.includes('a2')) normalizedSerie = 'A2';
    else if (s.includes('a1')) normalizedSerie = 'A1';
  }

  const solverOptions: MathsSolveOptions = {
    serie: normalizedSerie,
    level: options?.level,
    discipline: options?.discipline,
  };

  const classification = classifyMathsTleA(statement);

  // Solvers mapping
  const solvers: Array<{ id: string; solver: (statement: string, opts?: MathsSolveOptions) => MathsSolveResult | null }> = [
    { id: 'ch8', solver: solveStatistics },
    { id: 'ch6', solver: solveStatistics },
    { id: 'ch9', solver: solveProbability },
    { id: 'ch2', solver: solveProbability },
    { id: 'ch3', solver: solveLogarithm },
    { id: 'ch4', solver: solveExponential },
    { id: 'ch5', solver: solveFunctionStudy },
    { id: 'ch1', solver: solveRealNumbers },
    { id: 'ch7', solver: solveEquations },
    { id: 'ch3_lim', solver: solveLimits },
    { id: 'ch4_der', solver: solveDerivativesPrimitives },
  ];

  // Prioritize solver matching the classified chapter
  if (classification.chapterId) {
    const primaryIdx = solvers.findIndex((s) => s.id === classification.chapterId);
    if (primaryIdx > 0) {
      const [primary] = solvers.splice(primaryIdx, 1);
      solvers.unshift(primary);
    }
  }

  // Try solvers in order of priority
  for (const item of solvers) {
    try {
      const solveRes = item.solver(statement, solverOptions);
      if (solveRes && solveRes.success && solveRes.confidence >= 0.8) {
        return {
          handledLocally: true,
          confidence: solveRes.confidence,
          result: solveRes,
          chapterId: solveRes.chapterId,
          chapterTitle: solveRes.chapterTitle,
        };
      }
    } catch (err) {
      console.warn(`[MathsEngine] Error in solver ${item.id}:`, err);
    }
  }

  // If specific solver could not produce an exact solution, return handledLocally: false
  // so that the server can route to the AI fallback model with A1/A2 prompt constraints.
  return {
    handledLocally: false,
    confidence: 0,
    chapterId: classification.chapterId,
    chapterTitle: classification.chapterTitle,
  };
}

