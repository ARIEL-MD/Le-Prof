import { ParsedExercise, ParsedQuestion, SolvedExerciseResult, SolvedQuestionResult, CompletenessValidationReport } from './types';

/**
 * Normalise un label de question pour comparaison (ex: "1.", "1)", "1", "1. a)" => "1", "1.a")
 */
function normalizeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[()\.:\-\s]/g, '')
    .trim();
}

/**
 * Vérifie si une question de résolution correspond à une question détectée dans l'énoncé
 */
function isQuestionMatch(parsed: ParsedQuestion, solved: SolvedQuestionResult): boolean {
  const normP = normalizeLabel(parsed.numberLabel);
  const normS = normalizeLabel(solved.numberLabel);

  if (normP === normS && normP.length > 0) return true;

  // Si le label résolu contient le numéro attendu
  if (normS.startsWith(normP) || normP.startsWith(normS)) return true;

  // Comparaison sémantique légère sur le prompt
  if (parsed.cleanText && solved.titleOrPrompt) {
    const pKeywords = parsed.cleanText.toLowerCase().slice(0, 20);
    const sKeywords = solved.titleOrPrompt.toLowerCase().slice(0, 20);
    if (pKeywords === sKeywords && pKeywords.length > 5) return true;
  }

  return false;
}

/**
 * Valide la complétude de la résolution par rapport aux questions détectées dans l'énoncé.
 */
export function validateCompleteness(
  parsedExercises: ParsedExercise[],
  solvedExercises: SolvedExerciseResult[]
): CompletenessValidationReport {
  const allParsedQuestions: ParsedQuestion[] = [];
  parsedExercises.forEach(ex => {
    allParsedQuestions.push(...ex.questions);
  });

  const allSolvedQuestions: SolvedQuestionResult[] = [];
  solvedExercises.forEach(ex => {
    allSolvedQuestions.push(...ex.questions);
  });

  const detectedCount = allParsedQuestions.length;
  const solvedCount = allSolvedQuestions.length;

  const missingQuestions: ParsedQuestion[] = [];
  const extraQuestionsFound: string[] = [];
  const inventedQuestionsRemoved: string[] = [];

  // 1. Détecter les questions manquantes
  allParsedQuestions.forEach(parsedQ => {
    const isSolved = allSolvedQuestions.some(solvedQ => isQuestionMatch(parsedQ, solvedQ));
    if (!isSolved) {
      missingQuestions.push(parsedQ);
    }
  });

  // 2. Détecter les questions inventées (ex: "Ensemble de définition" alors qu'aucune question ne le demandait)
  allSolvedQuestions.forEach(solvedQ => {
    const isFromStatement = allParsedQuestions.some(parsedQ => isQuestionMatch(parsedQ, solvedQ));
    if (!isFromStatement) {
      // Vérifier si c'est une question parasite inventée
      const isInventedMeta = /ensemble de d[ée]finition|domaine de d[ée]finition/i.test(solvedQ.titleOrPrompt || solvedQ.numberLabel) &&
        !allParsedQuestions.some(p => /ensemble de d[ée]finition|domaine/i.test(p.cleanText));
      
      if (isInventedMeta) {
        inventedQuestionsRemoved.push(`${solvedQ.numberLabel} ${solvedQ.titleOrPrompt}`);
      } else {
        extraQuestionsFound.push(`${solvedQ.numberLabel} ${solvedQ.titleOrPrompt}`);
      }
    }
  });

  const isComplete = missingQuestions.length === 0 && (detectedCount === 0 || solvedCount >= detectedCount);
  const complianceRate = detectedCount > 0 
    ? Math.max(0, Math.min(1, (detectedCount - missingQuestions.length) / detectedCount))
    : 1;

  let details = `Complétude : ${detectedCount} question(s) détectée(s), ${solvedCount} résolue(s).`;
  if (missingQuestions.length > 0) {
    details += ` Questions manquantes : ${missingQuestions.map(q => q.numberLabel).join(', ')}.`;
  }
  if (inventedQuestionsRemoved.length > 0) {
    details += ` Questions inventées supprimées : ${inventedQuestionsRemoved.join(', ')}.`;
  }

  return {
    isComplete,
    detectedQuestionsCount: detectedCount,
    solvedQuestionsCount: solvedCount,
    missingQuestions,
    extraQuestionsFound,
    inventedQuestionsRemoved,
    complianceRate,
    details,
  };
}

/**
 * Filtre les questions inventées non sollicitées d'une résolution
 */
export function purgeInventedQuestions(
  parsedExercises: ParsedExercise[],
  solvedExercises: SolvedExerciseResult[]
): SolvedExerciseResult[] {
  const allParsedQuestions: ParsedQuestion[] = [];
  parsedExercises.forEach(ex => {
    allParsedQuestions.push(...ex.questions);
  });

  if (allParsedQuestions.length === 0) {
    return solvedExercises;
  }

  return solvedExercises.map(ex => {
    const filteredQuestions = ex.questions.filter(solvedQ => {
      // Si la question est "Ensemble de définition" et que ce n'était pas demandé dans l'énoncé
      const isInventedDomain = /ensemble de d[ée]finition|domaine de d[ée]finition|d_f\b/i.test(solvedQ.titleOrPrompt || '') &&
        !allParsedQuestions.some(p => /ensemble de d[ée]finition|domaine de d[ée]finition|d_f/i.test(p.cleanText));

      if (isInventedDomain) {
        return false;
      }
      return true;
    });

    return {
      ...ex,
      questions: filteredQuestions,
    };
  });
}
