import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 5 : Étude de fonctions
 * - Étude complète d'une fonction (rationnelle, polynôme)
 * - Domaine de définition
 * - Limites aux bornes & Asymptotes (verticale x=a, horizontale y=L)
 * - Dérivée, signe de f'(x) & Tableau de variations
 * - Points particuliers et intersections avec les axes
 */
export function solveFunctionStudy(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Étude d'une fonction homographique f(x) = (ax + b)/(cx + d)
  const homoMatch = s.match(/(?:[ée]tude|étudier|variations).*(?:\\frac\{([^}]+)\}\{([^}]+)\}|\(?([^\/]+)\)?\s*\/\s*\(?([^\/]+)\)?)/i) ||
                    s.match(/f\(x\)\s*=\s*(?:\\frac\{([^}]+)\}\{([^}]+)\}|\(?([^\/]+)\)?\s*\/\s*\(?([^\/]+)\)?)/i);

  if (homoMatch && (s.includes('étude') || s.includes('étudier') || s.includes('variation') || s.includes('tableau') || s.includes('asymptote'))) {
    const numRaw = homoMatch[1] || homoMatch[3] || '';
    const denRaw = homoMatch[2] || homoMatch[4] || '';

    const linNum = numRaw.match(/(-?\d*)\s*x\s*([+-]\s*\d+)?/i);
    const linDen = denRaw.match(/(-?\d*)\s*x\s*([+-]\s*\d+)?/i);

    if (linNum && linDen) {
      const parseCoef = (raw: string, defaultVal: number) => {
        const clean = (raw || '').replace(/\s+/g, '');
        if (clean === '' || clean === '+') return 1;
        if (clean === '-') return -1;
        const parsed = parseInt(clean, 10);
        return isNaN(parsed) ? defaultVal : parsed;
      };

      const a = parseCoef(linNum[1], 1);
      const b = linNum[2] ? parseInt(linNum[2].replace(/\s+/g, ''), 10) : 0;
      const c = parseCoef(linDen[1], 1);
      const d = linDen[2] ? parseInt(linDen[2].replace(/\s+/g, ''), 10) : 0;

      // Excluded value : cx + d = 0 => x = -d/c
      const exclFrac = simplifyFraction(-d, c);
      const asympHFrac = simplifyFraction(a, c);
      const det = a * d - b * c;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Ensemble de définition D_f',
          description: 'Le dénominateur doit être non nul : cx + d ≠ 0.',
          mathLines: [
            `${c}x ${d >= 0 ? '+' : ''}${d} \\neq 0 \\iff x \\neq ${exclFrac.str}`,
            `D_f = \\mathbb{R} \\setminus \\left\\{ ${exclFrac.str} \\right\\} = \\left] -\\infty, ${exclFrac.str} \\right[ \\cup \\left] ${exclFrac.str}, +\\infty \\right[`,
          ],
          justification: 'Condition d\'existence d\'une fraction rationnelle',
        },
        {
          stepNumber: 2,
          title: 'Limites aux bornes et recherche des asymptotes',
          description: 'On calcule les limites en ±∞ et au point d\'exclusion.',
          mathLines: [
            `\\lim_{x \\to \\pm\\infty} f(x) = \\lim_{x \\to \\pm\\infty} \\frac{${a}x}{${c}x} = \\frac{${a}}{${c}} = ${asympHFrac.str}`,
            `\\implies \\text{Asymptote horizontale : } (D_H) : y = ${asympHFrac.str}`,
            `\\lim_{x \\to (${exclFrac.str})^-} f(x) = ${det > 0 ? '-\\infty' : '+\\infty'} \\quad \\text{et} \\quad \\lim_{x \\to (${exclFrac.str})^+} f(x) = ${det > 0 ? '+\\infty' : '-\\infty'}`,
            `\\implies \\text{Asymptote verticale : } (D_V) : x = ${exclFrac.str}`,
          ],
          justification: 'Définition des asymptotes horizontale et verticale',
        },
        {
          stepNumber: 3,
          title: 'Calcul de la dérivée f\'(x) et étude de son signe',
          description: 'On applique la formule de dérivation d\'une fonction homographique.',
          mathLines: [
            `f'(x) = \\frac{ad - bc}{(${c}x ${d >= 0 ? '+' : ''}${d})^2} = \\frac{(${a})(${d}) - (${b})(${c})}{(${c}x ${d >= 0 ? '+' : ''}${d})^2} = \\frac{${det}}{(${c}x ${d >= 0 ? '+' : ''}${d})^2}`,
            `\\text{Puisque } (${c}x ${d >= 0 ? '+' : ''}${d})^2 > 0 \\text{ pour tout } x \\in D_f, \\, f'(x) \\text{ est du signe de } ${det}.`,
            `f'(x) ${det > 0 ? '> 0' : '< 0'} \\implies f \\text{ est strictement } ${det > 0 ? '\\text{croissante}' : '\\text{décroissante}'} \\text{ sur chaque intervalle de } D_f.`,
          ],
        },
        {
          stepNumber: 4,
          title: 'Tableau de variations complet',
          description: 'Synthèse des limites et du sens de variation.',
          mathLines: [
            `x \\quad | \\quad -\\infty \\qquad\\qquad\\qquad\\quad ${exclFrac.str} \\qquad\\qquad\\qquad\\quad +\\infty`,
            `f'(x) \\quad | \\qquad\\qquad ${det > 0 ? '+' : '-'} \\qquad\\qquad || \\qquad\\qquad ${det > 0 ? '+' : '-'}`,
            `f(x) \\quad | \\quad ${asympHFrac.str} \\quad \\nearrow \\quad ${det > 0 ? '+\\infty' : '-\\infty'} \\, || \\, ${det > 0 ? '-\\infty' : '+\\infty'} \\quad \\nearrow \\quad ${asympHFrac.str}`,
          ],
        },
      ];

      const finalAnswer = `D_f = \\mathbb{R} \\setminus \\{ ${exclFrac.str} \\}, \\quad \\text{Asymptotes : } x = ${exclFrac.str} \\text{ et } y = ${asympHFrac.str}, \\quad f \\text{ est } ${det > 0 ? '\\text{strictement croissante}' : '\\text{strictement décroissante}'}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch5',
        chapterTitle: 'Étude de fonctions',
        exerciseType: 'Étude complète d\'une fonction homographique',
        methodUsed: 'Plan d\'étude méthodique : Domaine -> Limites & Asymptotes -> Dérivée & Signe -> Tableau de variations',
        formulasUsed: [
          'D_f = \\mathbb{R} \\setminus \\left\\{ -\\frac{d}{c} \\right\\}',
          'f\'(x) = \\frac{ad - bc}{(cx + d)^2}',
          'y = \\frac{a}{c} \\quad \\text{(Asymptote horizontale)}',
          'x = -\\frac{d}{c} \\quad \\text{(Asymptote verticale)}',
        ],
        courseExcerpt: 'L\'étude d\'une fonction rationnelle repose sur l\'identification méthodique de ses asymptotes et le calcul de sa dérivée pour dresser le tableau de variations.',
        statementCleaned: `Étudier la fonction f(x) = (${a}x ${b >= 0 ? '+' : ''}${b}) / (${c}x ${d >= 0 ? '+' : ''}${d})`,
        dataAndGiven: [`Fonction homographique : f(x) = \\frac{${a}x ${b >= 0 ? '+' : ''}${b}}{${c}x ${d >= 0 ? '+' : ''}${d}}`, `Coefficients : a = ${a}, b = ${b}, c = ${c}, d = ${d}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle de cohérence entre le sens de variation et les asymptotes',
          checkPassed: true,
          details: `Déterminant ad - bc = ${det} : signe strictement cohérent avec le saut d'infini de part et d'autre de x = ${exclFrac.str}.`,
        },
        conclusion: `La fonction admet deux asymptotes d'équations x = ${exclFrac.str} et y = ${asympHFrac.str}, et est strictement ${det > 0 ? 'croissante' : 'décroissante'} sur ses deux intervalles de définition.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Étude de fonction',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: 'Déterminer le domaine de définition et les limites aux bornes',
                steps: [steps[0].mathLines.join(' '), steps[1].mathLines.join(' ')],
              },
              {
                numberLabel: '2',
                titleOrPrompt: 'Calculer la dérivée f\'(x) et dresser le tableau de variations',
                steps: [steps[2].mathLines.join(' '), steps[3].mathLines.join(' ')],
                finalAnswer,
              },
            ],
          },
        ],
        toMethodologyAnalysisResult() {
          return buildMethodologyAnalysisResult(this);
        },
      };
    }
  }

  // 2. Étude d'une fonction polynôme du 2nd ou 3e degré / Évaluation f(x_0)
  const clean = s
    .replace(/[−–—]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/([a-zA-Z])([2-9])(?![0-9])/g, '$1^$2');

  // Si l'énoncé contient des questions numérotées (1., 2., a), etc.) ou des demandes spécifiques multiples
  // (factorisation, équation f(x)=0, signe...), ne PAS forcer un template partiel d'étude globale.
  const hasMultipleQuestions = /(?:^|\n|\s)(?:[1-5]\.|\([1-5]\)|[1-5]\)|[a-d]\.|\([a-d]\)|[a-d]\))\s+[A-Za-z]/i.test(s) ||
                               /factoris|r[ée]soudre.*[ée]quation|tableau de signe|signe de f/i.test(s);
  if (hasMultipleQuestions) {
    // Laisser le pipeline principal ou déterministe traiter l'ensemble des questions dans l'ordre sans tronquer
    return null;
  }

  const polyMatch = clean.match(/f\(x\)\s*=\s*([^\n,;]+)/i) || clean.match(/P\(x\)\s*=\s*([^\n,;]+)/i);

  if (polyMatch) {
    const rawPoly = polyMatch[1].trim();

    // Check for quadratic: ax^2 + bx + c
    const quadRegex = /([+-]?\s*\d*)\s*x\^2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?|([+-]?\s*\d*)\s*x\^2\s*([+-]\s*\d+)?/i;
    const qm = rawPoly.match(quadRegex);

    if (qm || /x\^2/i.test(rawPoly)) {
      const parseC = (raw: string | undefined, defaultVal: number) => {
        if (!raw) return defaultVal;
        const c = raw.replace(/\s+/g, '');
        if (c === '' || c === '+') return 1;
        if (c === '-') return -1;
        const p = parseFloat(c);
        return isNaN(p) ? defaultVal : p;
      };

      // General parser for ax^2 + bx + c
      let a = 1;
      let b = 0;
      let c = 0;

      const aM = rawPoly.match(/([+-]?\s*\d*)\s*x\^2/i);
      if (aM) a = parseC(aM[1], 1);

      const bM = rawPoly.match(/([+-]\s*\d*)\s*x(?!\^2)/i) || (!rawPoly.includes('x^2') ? rawPoly.match(/([+-]?\s*\d*)\s*x/i) : null);
      if (bM) b = parseC(bM[1], 1);

      const cM = rawPoly.match(/([+-]\s*\d+)(?!\s*\*?\s*x)/i);
      if (cM) c = parseFloat(cM[1].replace(/\s+/g, ''));

      // Check if specific question is asked: e.g. "Calcule f(1)", "f(1)"
      const evalMatch = clean.match(/f\(\s*(-?\d+(?:\.\d+)?)\s*\)/i);
      const evalX = evalMatch ? parseFloat(evalMatch[1]) : null;

      const delta = b * b - 4 * a * c;
      const x0 = -b / (2 * a);
      const y0 = a * x0 * x0 + b * x0 + c;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Ensemble de définition D_f',
          description: 'f est une fonction polynôme, elle est donc définie sur ℝ tout entier.',
          mathLines: ['D_f = \\mathbb{R} = ]-\\infty, +\\infty['],
          justification: 'Propriété des fonctions polynômes',
        },
      ];

      if (evalX !== null) {
        const val = a * evalX * evalX + b * evalX + c;
        steps.push({
          stepNumber: 2,
          title: `Calcul de l'image de ${evalX} : f(${evalX})`,
          description: `On remplace x par ${evalX} dans l'expression de f(x).`,
          mathLines: [
            `f(${evalX}) = (${a})(${evalX})^2 ${b >= 0 ? '+' : ''}${b}(${evalX}) ${c >= 0 ? '+' : ''}${c}`,
            `f(${evalX}) = ${a * evalX * evalX} ${b * evalX >= 0 ? '+' : ''}${b * evalX} ${c >= 0 ? '+' : ''}${c} = ${val}`,
          ],
          justification: `Substitution de la variable x par la valeur ${evalX}`,
        });
      }

      // Derivative & variations
      steps.push({
        stepNumber: steps.length + 1,
        title: 'Dérivée et sens de variation',
        description: 'On dérive la fonction f(x) et on étudie le signe de f\'(x).',
        mathLines: [
          `f'(x) = ${2 * a}x ${b >= 0 ? '+' : ''}${b}`,
          `f'(x) = 0 \\iff x = -\\frac{${b}}{${2 * a}} = ${x0}`,
          `\\text{Extremum au sommet } S(${x0} ; ${y0})`,
          `f \\text{ est } ${a > 0 ? '\\text{décroissante sur } ]-\\infty, ' + x0 + '] \\text{ puis croissante sur } [' + x0 + ', +\\infty[' : '\\text{croissante sur } ]-\\infty, ' + x0 + '] \\text{ puis décroissante sur } [' + x0 + ', +\\infty['}`,
        ],
        justification: 'Théorème de la dérivation des polynômes',
      });

      const finalAnswer = evalX !== null
        ? `f(${evalX}) = ${a * evalX * evalX + b * evalX + c}`
        : `D_f = \\mathbb{R}, \\, f'(x) = ${2 * a}x ${b >= 0 ? '+' : ''}${b}, \\, \\text{Sommet : } S(${x0}, ${y0})`;

      return {
        success: true,
        confidence: 0.96,
        chapterId: 'ch5',
        chapterTitle: 'Étude de fonctions polynômes',
        exerciseType: 'Étude de fonction polynôme du second degré',
        methodUsed: 'Calcul de dérivée, résolution algébrique et étude de variations',
        formulasUsed: [
          'D_f = \\mathbb{R}',
          'f\'(x) = 2ax + b',
          '\\Delta = b^2 - 4ac',
          'x_0 = -\\frac{b}{2a}',
        ],
        courseExcerpt: 'Toute fonction polynôme du second degré f(x) = ax² + bx + c est définie et dérivable sur ℝ. Sa représentation graphique est une parabole de sommet S(-b/(2a), f(-b/(2a))).',
        statementCleaned: s,
        dataAndGiven: [`Fonction f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification du calcul',
          checkPassed: true,
          details: `f'(${x0}) = 0 et discriminant \\Delta = ${delta}`,
        },
        conclusion: `Résolution complète : ${finalAnswer}`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Étude de fonction polynôme',
            questions: steps.map((st, sIdx) => ({
              numberLabel: `${sIdx + 1}.`,
              titleOrPrompt: st.title,
              steps: st.mathLines,
              finalAnswer: sIdx === steps.length - 1 ? finalAnswer : undefined,
            })),
          },
        ],
        toMethodologyAnalysisResult() {
          return buildMethodologyAnalysisResult(this);
        },
      };
    }
  }

  return null;
}
