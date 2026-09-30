import test from 'node:test';
import assert from 'node:assert/strict';
import {
  convertNaturalOrPseudoMathToLatex,
  formatMathSymbols,
  formatChemicalNotations,
  formatExponents,
  canonicalizeMathExpression,
  sanitizeMathAndScientificOutput,
} from '../../src/utils/mathFormatter';

test('CANONICALIZATION: Prime and derivative notations', () => {
  // Test corrupted derivatives from OCR, LLM, or keyboard inputs
  assert.equal(convertNaturalOrPseudoMathToLatex("f^{`′`}(1)"), "f'(1)");
  assert.equal(convertNaturalOrPseudoMathToLatex("f^{′}(1)"), "f'(1)");
  assert.equal(convertNaturalOrPseudoMathToLatex("f^{`'}(1)"), "f'(1)");
  assert.equal(convertNaturalOrPseudoMathToLatex("f^{\\prime}(1)"), "f'(1)");
  assert.equal(convertNaturalOrPseudoMathToLatex("f'(x)"), "f'(x)");
  assert.equal(convertNaturalOrPseudoMathToLatex("f''(x)"), "f''(x)");
  assert.equal(convertNaturalOrPseudoMathToLatex("g^{`′`}(x)"), "g'(x)");
});

test('CANONICALIZATION: Fractions and control character artifacts', () => {
  assert.equal(convertNaturalOrPseudoMathToLatex("rac{3}{4}"), "\\frac{3}{4}");
  assert.equal(convertNaturalOrPseudoMathToLatex("\\f\\frac{1}{x}"), "\\frac{1}{x}");
  assert.equal(convertNaturalOrPseudoMathToLatex("(2x+1)/(x-3)"), "\\frac{2x+1}{x-3}");
});

test('CANONICALIZATION: Sequence indexes, powers, arrangements and limits', () => {
  assert.equal(convertNaturalOrPseudoMathToLatex("u20"), "u_{20}");
  assert.equal(convertNaturalOrPseudoMathToLatex("vn"), "v_n");
  assert.ok(convertNaturalOrPseudoMathToLatex("u0") === "u_0" || convertNaturalOrPseudoMathToLatex("u0") === "u_{0}");
  assert.ok(convertNaturalOrPseudoMathToLatex("x2") === "x^2" || convertNaturalOrPseudoMathToLatex("x2") === "x^{2}");
  assert.ok(convertNaturalOrPseudoMathToLatex("q3") === "q^3" || convertNaturalOrPseudoMathToLatex("q3") === "q^{3}");
  assert.equal(convertNaturalOrPseudoMathToLatex("A102"), "A_{10}^{2}");
  assert.equal(convertNaturalOrPseudoMathToLatex("3 ∗ 5"), "3 \\times 5");
  assert.ok(convertNaturalOrPseudoMathToLatex("lim (x -> 0+) (1/x)").includes("\\lim_{x \\to 0"));
});

test('CANONICALIZATION: Universal recursive sanitization', () => {
  const dirtyPayload = {
    title: "Exercice 1",
    questions: [
      {
        numberLabel: "1. a)",
        steps: [
          "On calcule f^{`′`}(1) en utilisant rac{1}{2}.",
          "Soit u20 le terme de rang 20 et vn la suite géométrique.",
          "On calcule 4 ∗ 5 = 20."
        ],
        finalAnswer: "f^{`′`}(1) = rac{5}{2}"
      }
    ]
  };

  const cleanPayload = sanitizeMathAndScientificOutput(dirtyPayload);

  assert.equal(cleanPayload.questions[0].steps[0], "On calcule f'(1) en utilisant \\frac{1}{2}.");
  assert.equal(cleanPayload.questions[0].steps[1], "Soit u20 le terme de rang 20 et vn la suite géométrique.");
  assert.equal(cleanPayload.questions[0].steps[2], "On calcule 4 \\times 5 = 20.");
  assert.equal(cleanPayload.questions[0].finalAnswer, "f'(1) = \\frac{5}{2}");
});
