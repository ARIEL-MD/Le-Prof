import test from 'node:test';
import assert from 'node:assert/strict';
import { parseMathSegments, cleanMathForKaTeX, renderKaTeX } from '../../src/components/MathText';

test('MATH RENDERING: sequence formulas stay in one mathematical segment', () => {
  const input = 'u_1 = 4 \\quad ; \\quad u_{n+1} = 2 \\times u_n.';
  const segments = parseMathSegments(input);
  const math = segments.filter((s) => s.type === 'inline-math' || s.type === 'block-math');
  assert.ok(math.length >= 1);
  assert.equal(math[0].content.includes('\\quad'), true);
  assert.equal(math[0].content.includes('u_{n+1}'), true);
});

test('MATH RENDERING: common scientific LaTeX commands are preserved for KaTeX', () => {
  const expr = '\\displaystyle \\vec{F} = m\\,\\vec{a} \\quad ; \\quad \\mathbb{R} \\subseteq \\mathbb{C}';
  const clean = cleanMathForKaTeX(expr);
  assert.ok(clean.includes('\\vec{F}'));
  assert.ok(clean.includes('\\mathbb{R}'));
  assert.ok(clean.includes('\\subseteq'));
});

test('MATH RENDERING: fractions, limits, derivatives and chemistry remain canonical', () => {
  const cases = [
    '\\frac{v_{n+1}}{v_n}',
    '\\lim_{x \\to 0^+} \\frac{\\sin x}{x}',
    "f'(x) = \\frac{1}{2x}",
    'K_a = \\frac{[A^-][H_3O^+]}{[AH]}',
    'E_c = \\frac{1}{2}mv^2',
  ];
  for (const expr of cases) {
    const clean = cleanMathForKaTeX(expr);
    assert.ok(clean.length > 0);
    assert.equal(/\\\\{2,}/.test(clean), false);
  }
});

test('MATH RENDERING: a stray extra closing brace in a recurrence relation still renders (no red katex-error)', () => {
  // Reproduit le bug signalé : un énoncé source contenant "u_{n+1}} = \\frac{2}{3}u_n"
  // (une accolade fermante en trop après l'indice) faisait échouer KaTeX, qui
  // renvoyait alors le LaTeX brut en rouge au lieu de la formule mise en forme.
  const malformed = 'u_{n+1}} = \\frac{2}{3}u_n';
  const html = renderKaTeX(malformed, false);
  // On veut soit un rendu KaTeX propre, soit (si vraiment irrécupérable) un
  // fallback géré par MathText — jamais un span katex-error affichant la
  // formule brute en rouge à l'utilisateur.
  assert.equal(html.includes('katex-error'), false);
  // Ici la réparation d'accolades doit permettre un vrai rendu KaTeX (et pas
  // seulement le fallback texte) : on doit retrouver le \\frac rendu.
  assert.equal(html.includes('katex-fallback'), false);
  assert.match(html, /base/); // structure HTML KaTeX standard
});

test('MATH RENDERING: the French word "un" is never rendered as a sequence subscript in prose', () => {
  const sentences = [
    "C'est un devoir d'analyse où on étudie un texte.",
    "Dans un devoir de dissertation littéraire, l'élève donne un exemple d'un poème.",
    "Soit un plan complexe rapporté à un repère orthonormé direct.",
    "Il existe un unique réel tel que f(x) = 0.",
  ];

  for (const sentence of sentences) {
    const segments = parseMathSegments(sentence);
    // Aucune formule mathématique ne doit contenir le mot "un" isolé
    for (const seg of segments) {
      if (seg.type === 'inline-math' || seg.type === 'block-math') {
        assert.notEqual(seg.content.trim(), 'un');
        assert.notEqual(seg.content.trim(), 'u_n');
      }
    }
    // Pour une phrase purement prose sans équation, il doit n'y avoir qu'un seul segment text
    if (!sentence.includes('=')) {
      assert.equal(segments.length, 1);
      assert.equal(segments[0].type, 'text');
    }
  }
});

test('MATH RENDERING: legitimate sequence notations (un), u_n, u_{n+1} are correctly parsed', () => {
  const seqText = 'Soit la suite (un) définie par u0 = 1 et un+1 = 2un + 3.';
  const segments = parseMathSegments(seqText);
  const mathSegments = segments.filter((s) => s.type === 'inline-math');

  // Doit trouver les formules de suite sans transformer les mots de liaison comme "et"
  assert.ok(mathSegments.some((s) => s.content.includes('(un)') || s.content.includes('u_n')));
  assert.ok(mathSegments.some((s) => s.content.includes('u0') || s.content.includes('u_0')));
  assert.ok(mathSegments.some((s) => s.content.includes('un+1') || s.content.includes('u_{n+1}')));

  // Le mot "et" doit rester dans un segment texte
  const textSegments = segments.filter((s) => s.type === 'text');
  assert.ok(textSegments.some((s) => s.content.includes('et')));
});

