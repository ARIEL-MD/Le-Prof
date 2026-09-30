import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { tryHybridDeterministicExerciseResolution } from '../exercisePipeline/hybridDeterministicSolver';

function solve(statement: string) {
  return tryHybridDeterministicExerciseResolution(parseStatement(statement));
}

const cases: Array<[string, RegExp | null]> = [
  ['1. Calculer 25 + 17.', /42/],
  ['1. Calculer 8*7-6.', /50/],
  ['1. Calculer 3/4 + 5/8.', /11|\\frac/],
  ['1. Calculer 2^5.', /32/],
  ['1. Calculer sqrt(49) + 2^3.', /15/],
  ['1. Développer (x+2)(x-3).', /x/],
  ['1. Factoriser x^2-9.', /x/],
  ['1. Résoudre 2x+5=17.', /6/],
  ['1. Résoudre x^2-5x+6=0.', /2.*3|3.*2/],
  ['1. Résoudre x^3-6x^2+11x-6=0.', /1.*2.*3/],
  ['1. Résoudre x^2-1>=0.', /∞|inf/i],
  ['1. Résoudre |x-3|=5.', /-2.*8/],
  ['f(x)=x^2-5x+6. 1. Calculer f(2).', /0/],
  ['f(x)=x^3+2x. 1. Calculer la dérivée de f.', /3/],
  ['f(x)=x^2-4x+3. 1. Étudier les variations de f.', /variation|croissant|d[ée]croissant/i],
  ['f(x)=x^2-1. 1. Dresser le tableau de signes de f.', /signe|\+|-/i],
  ['f(x)=x^2+1. 1. Calculer la limite de f(x) quand x tend vers +infini.', /∞|inf/i],
  ['f(x)=x^2. 1. Déterminer l’équation de la tangente en x=1.', /x|tangente/i],
  ['1. Calculer une primitive de 3x^2.', /x/],
  ['1. Calculer ∫_0^1 2x dx.', /1/],
  ['1. Suite arithmétique de premier terme 3 et de raison 2 : calculer u_10.', /21/],
  ['1. Suite géométrique de premier terme 2 et de raison 3 : calculer u_4.', /54/],
  ['1. Calculer la moyenne de 2, 4, 6, 8.', /5/],
  ['1. Une pièce équilibrée est lancée une fois. Calculer P(face).', /0[.,]5|1\/2|\\frac/],
  ['1. Résoudre sin(x)=0.5.', /0[.,]5|pi|π/i],
  ['1. Dans un triangle rectangle, les côtés de l’angle droit mesurent 3 cm et 4 cm. Calculer l’hypoténuse.', /5/],
  ['1. A(0,0) et B(3,4). Calculer AB.', /5/],
  ['1. Calculer le déterminant de [[1,2],[3,4]].', /-?2/],
  ['1. Résoudre le système x+y=5 ; 2x-y=1.', /2.*3|3.*2/],
  ['1. Résoudre e^x=5.', /ln|log/i],
  ['1. Résoudre ln(x)=2.', /e\^2|7/i],
  ['1. Résoudre z^2+1=0 dans C.', /i|j/i],
];

for (const [statement, expected] of cases) {
  test(`massive battery: ${statement}`, () => {
    const r = solve(statement);
    assert.equal(r?.success, true, `Question non résolue: ${statement}`);
    if (expected) assert.match(r!.solvedExercises[0].questions[0].finalAnswer, expected);
  });
}

test('massive battery: devoir multi-domaines', () => {
  const r = solve(`
    EXERCICE 1
    f(x)=x^2-5x+6.
    1. Calculer f(1).
    2. Résoudre f(x)=0.
    3. Donner le signe de f(x).
    EXERCICE 2
    4. Calculer 3/4 + 1/4.
    5. Calculer la moyenne de 2, 4, 6.
  `);
  assert.equal(r?.success, true);
  assert.equal(r!.report.isComplete, true);
});

test('massive battery: formulations équivalentes', () => {
  const formulations = [
    'Résoudre 2x+4=10',
    'Trouver x : 2x+4=10',
    'Déterminer la solution de 2x+4=10',
    'Calculer x sachant que 2x+4=10',
  ];
  for (const text of formulations) {
    const r = solve(`1. ${text}.`);
    assert.equal(r?.success, true, `Formulation non reconnue: ${text}`);
  }
});

test('massive battery: aucune invention', () => {
  const r = solve('1. Démontrer un théorème totalement hors du périmètre du moteur.');
  assert.equal(r, null);
});
