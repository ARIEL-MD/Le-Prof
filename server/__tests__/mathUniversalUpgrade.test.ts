import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { solveUniversalMathHomework } from '../exercisePipeline/universalMathEngine';

test('UNIVERSAL UPGRADE: affine trigonometric equation', () => {
  const r = solveUniversalMathHomework('1. Résoudre 2sin(x+1)=1');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /x =/);
});

test('UNIVERSAL UPGRADE: affine logarithmic equation', () => {
  const r = solveUniversalMathHomework('1. Résoudre ln(2x+3)=1');
  assert.equal(r.success, true);
  assert.match(r.solvedExercises[0]?.questions[0]?.finalAnswer ?? '', /x =/);
});

test('UNIVERSAL UPGRADE: parser preserves Unicode and LaTeX input', () => {
  const p = parseStatement('1. Soit u₀ = 1 et uₙ₊₁ = 2uₙ + 3.');
  assert.equal(p.exercises.length > 0, true);
  assert.match(p.rawStatement, /u_/);
});
