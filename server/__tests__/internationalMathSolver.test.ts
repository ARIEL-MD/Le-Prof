import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { solveAllExercisesWithPapaMethod } from '../exercisePipeline/universalPapaMethodSolver';
import {
  buildMethodologyResultFromMathJson,
  InternationalMathResultJson,
} from '../exercisePipeline/internationalMathSolver';
import { EDUCATION_COUNTRIES } from '../../src/data/educationSystems';

test('INTERNATIONAL MATH: Support of international curricula in EDUCATION_COUNTRIES', () => {
  const countryIds = EDUCATION_COUNTRIES.map(c => c.id);
  assert.ok(countryIds.includes('IB'), 'Must include International Baccalaureate (IB)');
  assert.ok(countryIds.includes('ANGLO'), 'Must include Anglo-Saxon systems (AP, A-Levels, SAT)');
  assert.ok(countryIds.includes('PREPA'), 'Must include Classes Préparatoires (CPGE)');
  assert.ok(countryIds.includes('FR'), 'Must include France & AEFE');
  assert.ok(countryIds.includes('CI'), 'Must include Côte d’Ivoire');
  assert.ok(countryIds.includes('SN'), 'Must include Sénégal');
  assert.ok(countryIds.includes('CM'), 'Must include Cameroun');
  assert.ok(countryIds.includes('UNIV'), 'Must include Universel / International');

  const ibConfig = EDUCATION_COUNTRIES.find(c => c.id === 'IB');
  assert.ok(ibConfig);
  const ibSeries = ibConfig.seriesByGrade['IB DP 2ème Année (Year 2 / Terminale)'];
  assert.ok(ibSeries.some(s => s.id === 'ib_math_aa_hl'), 'Must include IB Math Analysis & Approaches HL');
  assert.ok(ibSeries.some(s => s.id === 'ib_math_ai_hl'), 'Must include IB Math Applications & Interpretation HL');

  const angloConfig = EDUCATION_COUNTRIES.find(c => c.id === 'ANGLO');
  assert.ok(angloConfig);
  const angloSeries = angloConfig.seriesByGrade['Grade 12 (A-Level / AP 2)'];
  assert.ok(angloSeries.some(s => s.id === 'anglo_ap_calc_bc'), 'Must include AP Calculus BC');
  assert.ok(angloSeries.some(s => s.id === 'anglo_alevel_math'), 'Must include A-Level Mathematics');
});

test('INTERNATIONAL MATH: Full parsing of multi-exercise international exam', () => {
  const internationalHomework = `
BACCALAURÉAT INTERNATIONAL / EXAMEN INTERNATIONAL DE MATHÉMATIQUES

EXERCICE 1 (5 points) - Nombres Complexes & Géométrie
Le plan complexe est rapporté à un repère orthonormé direct (O; u, v).
1. Résoudre dans C l'équation : z^2 - 2z + 4 = 0.
2. Soit les points A et B d'affixes respectives z_A = 1 + i*sqrt(3) et z_B = 1 - i*sqrt(3).
   a) Écrire z_A et z_B sous forme trigonométrique et exponentielle.
   b) Déterminer la nature exacte du triangle OAB.

EXERCICE 2 (5 points) - Suites Numériques & Récurrence
Soit la suite (u_n) définie par u_0 = 2 et u_{n+1} = (3*u_n + 2)/(u_n + 2).
1. Démontrer par récurrence que pour tout entier naturel n, u_n > 1.
2. Étudier le sens de variation de la suite (u_n).
3. En déduire que la suite (u_n) converge et calculer sa limite L.

PROBLÈME (10 points) - Analyse, Logarithme & Intégration
Partie A
Soit g la fonction définie sur ]0, +oo[ par g(x) = x^2 - 1 - 2*ln(x).
1. Calculer la dérivée g'(x) et étudier son signe.
2. En déduire le signe de g(x) pour tout x > 0.

Partie B
Soit f la fonction définie sur ]0, +oo[ par f(x) = x - 1 + (1 + 2*ln(x))/x.
1. Déterminer la limite de f en 0 et en +oo.
2. Montrer que la droite (D) d'équation y = x - 1 est asymptote oblique à la courbe (C_f).
3. Calculer la dérivée f'(x) et vérifier que f'(x) = g(x)/x^2.
`;

  const parsed = parseStatement(internationalHomework);
  assert.ok(parsed.exercises.length >= 3, `Expected at least 3 exercises/parts, got ${parsed.exercises.length}`);
  assert.ok(parsed.totalQuestionsCount >= 7, `Expected at least 7 questions, got ${parsed.totalQuestionsCount}`);

  // Test local Papa Method solver on parsed international exam
  const solved = solveAllExercisesWithPapaMethod(parsed, 'Mathématiques', 'Terminale');
  assert.equal(solved.length, parsed.exercises.length);
  for (const ex of solved) {
    assert.ok(ex.questions.length > 0);
    for (const q of ex.questions) {
      assert.ok(q.steps.length > 0, `Question ${q.numberLabel} must have steps`);
      assert.ok(q.finalAnswer, `Question ${q.numberLabel} must have final answer`);
    }
  }
});

test('INTERNATIONAL MATH: buildMethodologyResultFromMathJson output structure and criteria', () => {
  const sampleJson: InternationalMathResultJson = {
    title: 'Examen International de Mathématiques — IB / AP / Bac C',
    curriculumDetected: 'Baccalauréat C / IB Math AA HL',
    topicSummary: 'Nombres complexes, calcul intégral et équations différentielles',
    exercises: [
      {
        title: 'Exercice 1 : Nombres complexes et similitudes',
        points: '5 points',
        introContext: 'Soit le plan complexe P muni d un repere orthonorme.',
        questions: [
          {
            numberLabel: '1.',
            titleOrPrompt: "Résoudre dans C l'équation z^2 - 2z + 4 = 0",
            whatIsAsked: "Calculer les racines complexes de l'équation du second degré",
            formulaOrRule: "Discriminant Delta = b^2 - 4ac",
            steps: [
              "On identifie a = 1, b = -2, c = 4.",
              "Delta = (-2)^2 - 4*1*4 = 4 - 16 = -12 = (2i*sqrt(3))^2.",
              "Comme Delta < 0, l'équation admet deux racines complexes conjuguées :",
              "z_1 = (2 - 2i*sqrt(3))/2 = 1 - i*sqrt(3)",
              "z_2 = (2 + 2i*sqrt(3))/2 = 1 + i*sqrt(3)"
            ],
            finalAnswer: "\\boxed{S = \\{1 - i\\sqrt{3}; 1 + i\\sqrt{3}\\}}",
            pedagogicalTip: "Ne pas oublier de simplifier par 2 au numérateur et au dénominateur."
          },
          {
            numberLabel: '2. a)',
            titleOrPrompt: "Écrire z_1 sous forme exponentielle",
            whatIsAsked: "Déterminer le module et l'argument principal de z_1",
            formulaOrRule: "z = r*e^{i*theta} avec r = |z| et cos(theta) = Re(z)/r",
            steps: [
              "Calcul du module : r = sqrt(1^2 + (-sqrt(3))^2) = sqrt(4) = 2.",
              "cos(theta) = 1/2 et sin(theta) = -sqrt(3)/2, d'où theta = -pi/3 [2*pi].",
              "La forme exponentielle est donc z_1 = 2*e^{-i*pi/3}."
            ],
            finalAnswer: "\\boxed{z_1 = 2e^{-i\\frac{\\pi}{3}}}",
            pedagogicalTip: "Vérifier le signe de la partie imaginaire pour situer le bon quadrant."
          }
        ]
      }
    ],
    generalAdvice: "Toujours poser le discriminant et vérifier les valeurs trigonométriques remarquables."
  };

  const result = buildMethodologyResultFromMathJson(sampleJson, "Énoncé test", "Mathématiques", "Terminale");
  assert.ok(result);
  assert.equal(result.exerciseTypeIdentified, 'Devoir International de Mathématiques');
  assert.ok(result.level5FullRedaction.includes('Exercice 1') || result.level5FullRedaction.includes('EXERCICE 1'));
  assert.ok(result.level5FullRedaction.includes('\\boxed{S = \\{1 - i\\sqrt{3}; 1 + i\\sqrt{3}\\}}'));
  assert.equal(result.stepByStepBreakdown.length, 2);
  assert.ok(result.evaluationCriteria.length >= 4);
});
