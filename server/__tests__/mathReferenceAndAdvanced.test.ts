import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';
import { searchMathsReference } from '../../src/data/mathsReferenceSearch';

test('référence maths MPSI : dérivation', () => {
  const r = searchMathsReference('cours dérivation fonction réelle');
  assert.ok(r);
  assert.match(r!.chapterTitle.toLowerCase(), /d[ée]riv/);
  assert.ok((r!.directContent || '').length > 100);
});

test('référence maths MPSI : matrices et déterminants', () => {
  const r = searchMathsReference('déterminant matrice inverse');
  assert.ok(r);
  assert.match((r!.directContent || '').toLowerCase(), /matrice|déterminant/);
});

test('maths avancé : équation polynomiale de degré 3', () => {
  const parsed = parseStatement('1. Résoudre x^3 - 6x^2 + 11x - 6 = 0.');
  const r = tryHybridDeterministicExerciseResolution(parsed);
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /1.*2.*3/);
});

test('maths avancé : inéquation polynomiale', () => {
  const parsed = parseStatement('1. Résoudre x^2 - 1 >= 0.');
  const r = tryHybridDeterministicExerciseResolution(parsed);
  assert.equal(r?.success, true);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /[−-]∞/);
  assert.match(r!.solvedExercises[0].questions[0].finalAnswer, /\+∞/);
});
