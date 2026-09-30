import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';

function solve(s: string) {
  return tryHybridDeterministicExerciseResolution(parseStatement(s));
}

test('applied deterministic: percentage', () => {
  const r = solve('1. Calculer 20% de 150.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /30/);
});

test('applied deterministic: increase', () => {
  const r = solve('1. Calculer 200 augmenté de 15%.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /230/);
});

test('applied deterministic: decrease', () => {
  const r = solve('1. Calculer 200 diminué de 15%.');
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /170/);
});

test('applied deterministic: kinematics is reachable from universal route', () => {
  const r = solve('1. Une voiture parcourt 150 km en 2 h. Calculer sa vitesse moyenne.');
  assert.equal(r?.success, true);
});
