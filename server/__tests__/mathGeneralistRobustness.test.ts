import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';

function solve(statement: string) {
  return tryHybridDeterministicExerciseResolution(parseStatement(statement));
}

test('moteur généraliste : traite toutes les sous-questions et conserve leur ordre', () => {
  const r = solve(`
    EXERCICE 1
    f(x)=x^2-6x+5.
    1. Calculer f(0), f(1) et f(5).
    2. Factoriser f(x).
    3. Résoudre f(x)=0.
    4. Donner le signe de f(x).
    5. Déterminer le sommet de la parabole.
  `);
  assert.equal(r?.success, true);
  assert.equal(r?.report.isComplete, true);
  assert.equal(r?.solvedExercises[0].questions.length, 5);
});

test('moteur généraliste : formulations naturelles différentes', () => {
  const cases = [
    '1. Quels sont les nombres x tels que (x-2)(x+3) est positif ?',
    '1. Déterminer les solutions de x^2 - 5x + 6 = 0.',
    "1. Trouver f'(x) si f(x)=x^4-3x^2+1.",
    '1. Calculer 3/4 + 5/8.',
    '1. Calculer sqrt(49) + 2^3.',
  ];
  for (const statement of cases) {
    const r = solve(statement);
    assert.equal(r?.success, true, `Échec pour: ${statement}`);
  }
});

test('moteur généraliste : fraction rationnelle exacte', () => {
  const r = solve('1. Calculer 2/3 + 1/6.');
  assert.equal(r?.success, true);
  const answer = r!.solvedExercises[0].questions[0].finalAnswer;
  assert.match(answer, /5|\\frac/);
  assert.doesNotMatch(answer, /0\\.8|0\\.83/);
});

test('moteur généraliste : équation cubique vérifiée', () => {
  const r = solve('1. Résoudre x^3 - 6x^2 + 11x - 6 = 0.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /1.*2.*3/);
});

test('moteur généraliste : inéquation polynomiale avec bornes cohérentes', () => {
  const r = solve('1. Résoudre x^2 - 1 >= 0.');
  assert.equal(r?.success, true);
  const answer = r!.solvedExercises[0].questions[0].finalAnswer;
  assert.match(answer, /∞/);
  assert.match(answer, /-?1/);
});

test('moteur généraliste : ne fabrique pas une réponse inconnue', () => {
  const r = solve('1. Démontrer un résultat très spécifique non couvert par les solveurs locaux.');
  assert.equal(r, null);
});

test('batterie de calculs déterministes : 100 expressions', () => {
  for (let i = 1; i <= 100; i++) {
    const expected = i * 3 + 7;
    const r = solve(`1. Calculer ${i}*3+7.`);
    assert.equal(r?.success, true, `Calcul ${i} non résolu`);
    assert.match(r!.solvedExercises[0].questions[0].finalAnswer, new RegExp(`^${expected}$`));
  }
});
