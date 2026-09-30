import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';

function solve(statement: string) {
  const parsed = parseStatement(statement);
  return tryHybridDeterministicExerciseResolution(parsed);
}

test('math universel: calcul numérique', () => {
  const r = solve('1. Calculer 2^3 + 4*5.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /28/);
});

test('math universel: dérivée générale', () => {
  const r = solve('f(x)=x^3+2x. 1. Calculer la dérivée de f.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /3/);
});

test('math universel: statistiques à deux variables', () => {
  const r = solve('1. Statistiques : X : 1 2 3 4 ; Y : 2 4 5 8. Calculer les moyennes et la droite d’ajustement.');
  assert.equal(r?.success, true);
});

test('math universel: devoir mixte question par question', () => {
  const r = solve('f(x)=x^2-5x+6. 1. Résoudre f(x)=0. 2. Calculer f(1). 3. Donner le signe de f(x).');
  assert.equal(r?.success, true);
  assert.equal(r!.solvedExercises[0].questions.length, 3);
});
