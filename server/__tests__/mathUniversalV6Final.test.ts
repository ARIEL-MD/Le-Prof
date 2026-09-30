import test from 'node:test';
import assert from 'node:assert/strict';
import { solveUniversalMathHomework } from '../exercisePipeline/universalMathEngine';

test('V6: exact trigonometric value', () => {
  const r = solveUniversalMathHomework('1. Calculer sin(π/6)');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /1\/2|\\frac/);
});

test('V6: arithmetic sequence sum', () => {
  const r = solveUniversalMathHomework('1. Suite arithmétique u0=2, raison r=3. Calculer la somme des premiers termes pour n=4');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /S_4/);
});

test('V6: triangle Pythagoras', () => {
  const r = solveUniversalMathHomework('1. Dans un triangle rectangle, les côtés valent 3 et 4. Calculer l’hypoténuse');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /5/);
});

test('V6: percentage increase', () => {
  const r = solveUniversalMathHomework('1. Le prix initial est 200 FCFA et augmente de 15 %. Calculer la valeur finale');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /230/);
});

test('V6: common primitive', () => {
  const r = solveUniversalMathHomework('1. Déterminer une primitive de cos(x)');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /sin/);
});
