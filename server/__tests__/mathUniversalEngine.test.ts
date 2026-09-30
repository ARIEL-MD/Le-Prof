import test from 'node:test';
import assert from 'node:assert/strict';
import { solveUniversalMathHomework } from '../exercisePipeline/universalMathEngine';

test('moteur universel : même résolution indépendamment du niveau', () => {
  const statement = '1. Résoudre 2x + 5 = 17.';
  const r = solveUniversalMathHomework(statement);
  assert.equal(r.status, 'SOLVED');
  assert.equal(r.success, true);
  assert.equal(r.report?.isComplete, true);
  assert.match(r.solvedExercises[0].questions[0].finalAnswer, /6/);
});

test('moteur universel : refuse honnêtement une question non couverte', () => {
  const r = solveUniversalMathHomework('1. Démontrer une propriété abstraite non prise en charge par le moteur.');
  assert.equal(r.status, 'UNSUPPORTED');
  assert.equal(r.success, false);
  assert.match(r.reason ?? '', /solveur|résolution|couverte/i);
});
