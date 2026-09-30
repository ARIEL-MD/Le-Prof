import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';
import { buildMethodologyResultFromSolvedExercises } from '../exercisePipeline/exerciseSolverPipeline';

test('Pipeline Déterministe — Suites récurrentes affines et formatage académique', async (t) => {
  await t.test('Résout exactement une suite récurrente Unicode sans IA externe', () => {
    const rawStatement = `U₀ = 0
Uₙ₊₁ = ½Uₙ + 3
Calculer U₁, U₂ et U₃.`;

    const parsed = parseStatement(rawStatement);
    assert.equal(parsed.exercises.length, 1);

    const hybrid = tryHybridDeterministicExerciseResolution(parsed);
    assert.ok(hybrid, 'Hybrid resolution should succeed for question 1');
    assert.equal(hybrid.success, true);

    const fullResult = buildMethodologyResultFromSolvedExercises(
      parsed,
      hybrid.solvedExercises,
      'Mathématiques',
      'Terminale'
    );

    const redaction = fullResult.level5FullRedaction;

    // 1. Calculs exacts
    assert.match(redaction, /u_\{?1\}?\s*=\s*3/i);
    assert.match(redaction, /u_\{?2\}?\s*=\s*(?:\\frac\{9\}\{2\}|9\/2)/i);
    assert.match(redaction, /u_\{?3\}?\s*=\s*(?:\\frac\{21\}\{4\}|21\/4)/i);

    // 2. Anti-parasite : aucune mention d'asymptote ni de quantité conjuguée sur une suite
    assert.doesNotMatch(redaction, /asymptote/i);
    assert.doesNotMatch(redaction, /expression conjugu[ée]e/i);
    assert.doesNotMatch(redaction, /terme dominant/i);
    assert.doesNotMatch(redaction, /branche parabolique/i);

    // 3. Intégrité KaTeX : pas de double dollars imbriqués dans \boxed
    assert.doesNotMatch(redaction, /\\boxed\{[^}]*\$[^}]*\}/);
  });

  await t.test('Résout une suite récurrente avec fractions et calculs successifs', () => {
    const rawStatement = `Soit la suite (u_n) définie par u_0 = 1 et u_{n+1} = 2*u_n - 1.
1. Calculer u_1 et u_2.`;

    const parsed = parseStatement(rawStatement);
    const hybrid = tryHybridDeterministicExerciseResolution(parsed);
    assert.ok(hybrid, 'Hybrid resolution should succeed for question 2');
    assert.equal(hybrid.success, true);

    const fullResult = buildMethodologyResultFromSolvedExercises(
      parsed,
      hybrid.solvedExercises,
      'Mathématiques',
      'Terminale'
    );

    assert.match(fullResult.level5FullRedaction, /u_\{?1\}?\s*=\s*1/i);
    assert.match(fullResult.level5FullRedaction, /u_\{?2\}?\s*=\s*1/i);
  });
});
