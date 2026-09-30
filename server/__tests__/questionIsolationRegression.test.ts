import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';

test('question isolation: mixed logarithm exercise never reuses one template for every question', () => {
  const statement = `EXERCICE 2 (4 points)
On considère la fonction f définie sur ]0;+∞[ par f(x)=x-2ln(x).
1. Calculer les limites de f(x) lorsque x→0+ et lorsque x→+∞.
2. Calculer f'(x).
3. Étudier les variations de f sur ]0;+∞[.
4. Montrer que l'équation x-2ln(x)=2 admet exactement deux solutions dans ]0;+∞[.
5. Montrer que l'équation x^2=e^x est équivalente à 2ln(x)=x.
6. Déterminer le nombre de solutions de cette équation sur ]0;+∞[.`;

  const parsed = parseStatement(statement);
  assert.equal(parsed.totalQuestionsCount, 6);
  assert.deepEqual(parsed.exercises[0].questions.map(q => q.detectedType), [
    'limits', 'derivative', 'variation', 'equation', 'general_math', 'equation'
  ]);

  const result = tryHybridDeterministicExerciseResolution(parsed);
  // If a question is not covered, the strict pipeline must return null rather
  // than manufacture a response. It must never return six copies of one method.
  if (result) {
    assert.equal(result.solvedExercises[0].questions.length, 6);
    const answers = result.solvedExercises[0].questions.map(q => q.finalAnswer);
    assert.equal(new Set(answers).size, answers.length);
    assert.ok(answers[0].includes('limite') || answers[0].includes('lim'));
    assert.ok(answers[1].includes("f'") || answers[1].includes('dériv'));
  }
});
