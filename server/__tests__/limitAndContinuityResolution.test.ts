import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import {
  tryDeterministicExerciseResolution,
  buildMethodologyResultFromSolvedExercises,
} from '../exercisePipeline/exerciseSolverPipeline';
import {
  parseRadicalConjugateFunction,
  solveRadicalConjugateExercise,
} from '../exercisePipeline/genericLimitAndContinuitySolver';

test('LIMITES ET CONTINUITÉ: Détection et résolution déterministe intégrale', () => {
  const subject = `EXERCICE 3 (2 points) — Limites et continuité

Soit f la fonction définie sur [−1 ; +∞[ \\ {3} par :
f(x) = (√(x + 1) − 2) / (x − 3)

Justifier que f n'est pas définie en x = 3.
En multipliant par l'expression conjuguée, montrer que, pour tout x ≠ 3 :
f(x) = 1 / (√(x + 1) + 2)
En déduire la limite de f en 3. Peut-on prolonger f par continuité en 3 ? Si oui, préciser la valeur de ce prolongement.`;

  const parsed = parseStatement(subject);
  assert.equal(parsed.exercises.length, 1);
  assert.equal(parsed.totalQuestionsCount, 3);

  const res = tryDeterministicExerciseResolution(parsed);
  assert.ok(res !== null);
  assert.equal(res.success, true);
  assert.equal(res.report.isComplete, true);

  const ex0 = res.solvedExercises[0];
  assert.equal(ex0.questions.length, 3);

  // Q1: Non définie en 3 (division par 0)
  assert.ok(ex0.questions[0].steps.some(s => s.includes('division par zéro') || s.includes('dénominateur')));
  assert.ok(ex0.questions[0].finalAnswer.includes('3'));

  // Q2: Forme conjuguée
  assert.ok(ex0.questions[1].steps.some(s => s.includes('conjuguée') || s.includes('identit')));
  assert.ok(ex0.questions[1].finalAnswer.includes('1 / (√(x + 1) + 2)'));

  // Q3: Limite = 1/4 et prolongement
  assert.ok(ex0.questions[2].steps.some(s => s.includes('1/4') || s.includes('0.25')));
  assert.ok(ex0.questions[2].finalAnswer.includes('1/4'));
  assert.ok(ex0.questions[2].finalAnswer.includes('prolongeable par continuité'));

  // Construction du résultat complet pour l'élève
  const fullResult = buildMethodologyResultFromSolvedExercises(
    parsed,
    res.solvedExercises,
    'Mathématiques',
    'Terminale'
  );

  assert.ok(fullResult.level5FullRedaction.includes('1/4'));
  assert.ok(fullResult.stepByStepBreakdown.length >= 3);
});

test('LIMITES ET CONTINUITÉ: Gestion de formats variés (racine, coefficients, unnumbered)', () => {
  const statement = `Soit g(x) = (\\sqrt{x + 4} - 3) / (x - 5)`;
  const radFn = parseRadicalConjugateFunction(statement);
  assert.ok(radFn !== null);
  assert.equal(radFn.x0, 5);
  assert.equal(radFn.subtractedConstant, 3);
  assert.equal(radFn.limitFracStr, '1/6');

  const solvedQuestions = solveRadicalConjugateExercise(radFn);
  assert.equal(solvedQuestions.length, 3);
  assert.ok(solvedQuestions[2].finalAnswer.includes('1/6'));
});
