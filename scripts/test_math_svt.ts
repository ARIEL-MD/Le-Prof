import { parseMathSegments, renderKaTeX, cleanMathForKaTeX, wrapBareLatexInText } from '../src/components/MathText';

const testCases = [
  'L équation bilan s écrit : 2 H2O -> O2 + 4 H+ + 4 e-',
  'La photosynthèse : 6 CO2 + 6 H2O -> C6H12O6 + 6 O2.',
  'La phosphorylation : ADP + Pi + Énergie -> ATP + H2O.',
  'La quantité de matière est n = m / M avec m = 5 g et M = 58,5 g/mol.',
  'La concentration molaire est C = n / V.',
  'On a pH = -log[H3O+] = 3,4.',
  'Le travail s exprime par W = F x d x cos(alpha).',
  'L énergie cinétique est Ec = 1/2 m v^2.',
  'L énergie mécanique est Em = Ec + Ep.',
  'La période propre est T0 = 2 pi sqrt(LC).',
  'La longueur d onde est lambda = c / f.',
  'La loi de Snell-Descartes donne n1 sin(i1) = n2 sin(i2).',
  'Le génotype de F1 est A//a et le test-cross donne 1/2 [A] + 1/2 [a].',
  'Le croisement F1 x F1 donne 9/16 [AB] + 3/16 [Ab] + 3/16 [aB] + 1/16 [ab].',
  'Le complexe argilo-humique : [CAH] 2H+ + Ca2+ <=> [CAH] Ca2+ + 2H+.',
  'La constante de temps vaut tau = RC.',
  'La vitesse volumique est v = (1/V) dx/dt.'
];

console.log('Testing ' + testCases.length + ' cases:');
for (const t of testCases) {
  const wrapped = wrapBareLatexInText(t);
  const segs = parseMathSegments(t);
  const mathSegs = segs.filter(s => s.type !== 'text').map(s => s.content);
  console.log('--------------------------------------------------');
  console.log('INPUT:', t);
  console.log('WRAPPED:', wrapped);
  console.log('MATH SEGS:', mathSegs);
  for (const m of mathSegs) {
    const clean = cleanMathForKaTeX(m);
    const html = renderKaTeX(m, false);
    const hasError = html.includes('katex-error');
    console.log('  CLEAN:', clean);
    if (hasError) {
      console.error('  ERROR rendering:', m);
    }
  }
}

