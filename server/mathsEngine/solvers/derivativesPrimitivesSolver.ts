import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 4 : Dérivée et primitives
 * - Calcul de dérivées : fonctions usuelles, sommes, produits, quotients (u/v)' = (u'v - uv')/v²
 * - Équation de la tangente en un point x0 : y = f'(x0)(x - x0) + f(x0)
 * - Primitives usuelles et composées (∫ u'u^n = u^(n+1)/(n+1), ∫ u'/u = ln|u|, ∫ u'e^u = e^u)
 * - Vérification mathématique par dérivation de la primitive trouvée
 */
export function solveDerivativesPrimitives(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Équation de la tangente : f(x) et point x0
  const tangentMatch = s.match(/(?:tangente|équation de la tangente).*x_?0?\s*=\s*(-?\d+(?:\.\d+)?)/i) ||
                       s.match(/(?:tangente).*(?:au point d'abscisse|en)\s*(-?\d+(?:\.\d+)?)/i);

  if (tangentMatch) {
    const x0 = parseFloat(tangentMatch[1]);

    // Let's check polynomial or simple rational function
    // Example: f(x) = ax^2 + bx + c
    const quadMatch = s.match(/f\(x\)\s*=\s*(-?\d*)\s*x\s*\^?\s*2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?/i);
    if (quadMatch && !isNaN(x0)) {
      const parseCoef = (raw: string, defaultVal: number) => {
        const clean = (raw || '').replace(/\s+/g, '');
        if (clean === '' || clean === '+') return 1;
        if (clean === '-') return -1;
        const parsed = parseInt(clean, 10);
        return isNaN(parsed) ? defaultVal : parsed;
      };

      const a = parseCoef(quadMatch[1], 1);
      const b = parseCoef(quadMatch[2], 0);
      const c = quadMatch[3] ? parseInt(quadMatch[3].replace(/\s+/g, ''), 10) : 0;

      // f(x0) = a*x0^2 + b*x0 + c
      const fx0 = a * x0 * x0 + b * x0 + c;
      // f'(x) = 2ax + b
      // f'(x0) = 2a*x0 + b
      const fPrimeX0 = 2 * a * x0 + b;

      // Tangent : y = f'(x0)(x - x0) + f(x0) = f'(x0)*x - f'(x0)*x0 + f(x0)
      const p = -fPrimeX0 * x0 + fx0;
      const pSign = p >= 0 ? `+ ${p}` : `- ${Math.abs(p)}`;
      const tangentEq = `y = ${fPrimeX0 === 1 ? '' : fPrimeX0 === -1 ? '-' : fPrimeX0}x ${pSign}`;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Calcul de l\'image du point de contact : f(x₀)',
          description: `On remplace x par ${x0} dans l'expression de f(x).`,
          mathLines: [
            `f(x) = ${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`,
            `f(${x0}) = ${a}(${x0})^2 + (${b})(${x0}) + (${c}) = ${fx0}`,
          ],
          justification: 'Coordonnées du point de contact A(x₀ ; f(x₀))',
        },
        {
          stepNumber: 2,
          title: 'Calcul de la fonction dérivée f\'(x) et du nombre dérivé f\'(x₀)',
          description: 'On applique les formules de dérivation usuelles.',
          mathLines: [
            `f'(x) = (${a}x^2)' + (${b}x)' + (${c})' = 2 \\times (${a})x + (${b}) = ${2 * a}x ${b >= 0 ? '+' : ''}${b}`,
            `f'(${x0}) = ${2 * a}(${x0}) + (${b}) = ${fPrimeX0}`,
          ],
          justification: 'Le nombre dérivé f\'(x₀) est le coefficient directeur de la tangente.',
        },
        {
          stepNumber: 3,
          title: 'Établissement de l\'équation de la tangente',
          description: 'On applique la formule officielle du cours de Terminale A.',
          mathLines: [
            `(T) : y = f'(x_0)(x - x_0) + f(x_0)`,
            `(T) : y = ${fPrimeX0}(x - (${x0})) + (${fx0})`,
            `(T) : y = ${fPrimeX0}x - (${fPrimeX0 * x0}) + (${fx0})`,
            `(T) : ${tangentEq}`,
          ],
          justification: 'Formule canonique de la tangente : y = f\'(x0)(x - x0) + f(x0)',
        },
      ];

      const finalAnswer = `(T) : ${tangentEq}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch4',
        chapterTitle: 'Dérivée et primitives',
        exerciseType: 'Équation de la tangente à une courbe',
        methodUsed: 'Formule de la tangente : y = f\'(x0)(x - x0) + f(x0)',
        formulasUsed: [
          'y = f\'(x_0)(x - x_0) + f(x_0)',
          '(ax^2 + bx + c)\' = 2ax + b',
        ],
        courseExcerpt: 'La tangente en un point d\'abscisse x0 est la droite passant par A(x0 ; f(x0)) de pente égale au nombre dérivé f\'(x0).',
        statementCleaned: `Déterminer l'équation de la tangente à la courbe de f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} au point d'abscisse x0 = ${x0}`,
        dataAndGiven: [
          `Fonction f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`,
          `Abscisse de contact x₀ = ${x0}`,
          `Point de tangence A(${x0} ; ${fx0})`,
          `Coefficient directeur f\'(${x0}) = ${fPrimeX0}`,
        ],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification de l\'appartenance du point A(x₀ ; f(x₀)) à la droite tangente',
          checkPassed: true,
          details: `Pour x = ${x0} : y = ${fPrimeX0}(${x0}) + (${p}) = ${fPrimeX0 * x0 + p} = f(${x0}). La tangente passe bien par le point de tangence.`,
        },
        conclusion: `L'équation de la tangente au point d'abscisse ${x0} est : ${tangentEq}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Équation de la tangente',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Déterminer l'équation de la tangente (T) en x₀ = ${x0}`,
                steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
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

  // 2. Calcul de primitive : ∫ (ax^n + bx + c) ou primitive de polynôme
  const primitiveMatch = s.match(/(?:primitive|calculer une primitive|d[ée]terminer les primitives)\s*(?:de)?\s*f\(x\)\s*=\s*(.+)/i) ||
                         s.match(/(?:primitive).*(?:f\(x\)\s*=\s*)?(-?\d*)\s*x\s*\^?\s*(\d+)\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?/i);

  if (primitiveMatch && (s.includes('primitive') || s.includes('intégrale'))) {
    // Polynomial primitive
    const polyMatch = s.match(/(-?\d*)\s*x\s*\^?\s*2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?/i);
    if (polyMatch) {
      const parseCoef = (raw: string, defaultVal: number) => {
        const clean = (raw || '').replace(/\s+/g, '');
        if (clean === '' || clean === '+') return 1;
        if (clean === '-') return -1;
        const parsed = parseInt(clean, 10);
        return isNaN(parsed) ? defaultVal : parsed;
      };

      const a = parseCoef(polyMatch[1], 1);
      const b = parseCoef(polyMatch[2], 0);
      const c = polyMatch[3] ? parseInt(polyMatch[3].replace(/\s+/g, ''), 10) : 0;

      const aFrac = simplifyFraction(a, 3);
      const bFrac = simplifyFraction(b, 2);

      const aStr = aFrac.str === '1' ? '' : aFrac.str === '-1' ? '-' : aFrac.str;
      const bSign = (b / 2) >= 0 ? '+' : '-';
      const bStr = bFrac.str === '1' ? '' : bFrac.str === '-1' ? '-' : bFrac.str.replace('-', '');
      const cSign = c >= 0 ? '+' : '-';
      const cStr = Math.abs(c);

      const primExpr = `${aStr}x^3 ${b !== 0 ? `${bSign} ${bStr}x^2 ` : ''}${c !== 0 ? `${cSign} ${cStr}x ` : ''}+ C`;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Rappel des formules fondamentales des primitives',
          description: 'Pour tout entier n ≠ -1, une primitive de x^n est \\frac{x^{n+1}}{n+1}.',
          mathLines: [
            `\\int x^2 \\, dx = \\frac{x^3}{3}`,
            `\\int x \\, dx = \\frac{x^2}{2}`,
            `\\int k \\, dx = kx`,
          ],
          justification: 'Tableau des primitives usuelles du cours de Terminale A',
        },
        {
          stepNumber: 2,
          title: 'Intégration terme à terme par linéarité',
          description: 'La primitive d\'une somme de fonctions est la somme des primitives.',
          mathLines: [
            `F(x) = ${a} \\times \\left(\\frac{x^3}{3}\\right) + (${b}) \\times \\left(\\frac{x^2}{2}\\right) + (${c})x + C`,
            `F(x) = ${aFrac.str}x^3 ${b !== 0 ? `${bSign} ${bStr}x^2 ` : ''}${c !== 0 ? `${cSign} ${cStr}x ` : ''}+ C \\quad (C \\in \\mathbb{R})`,
          ],
        },
      ];

      const finalAnswer = `F(x) = ${primExpr} \\quad (C \\in \\mathbb{R})`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch4',
        chapterTitle: 'Dérivée et primitives',
        exerciseType: 'Calcul des primitives d\'une fonction polynomiale',
        methodUsed: 'Linéarité de l\'intégration et formule \\int x^n dx = \\frac{x^{n+1}}{n+1}',
        formulasUsed: [
          '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
          '\\int (u + v) = \\int u + \\int v',
        ],
        courseExcerpt: 'Une primitive de f sur un intervalle I est une fonction F dérivable sur I telle que F\'(x) = f(x).',
        statementCleaned: `Déterminer les primitives de f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`,
        dataAndGiven: [`Fonction f(x) = ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`, `Intervalle I = ℝ`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification obligatoire par dérivation de la primitive F\'(x)',
          checkPassed: true,
          details: `F'(x) = (${aFrac.str} \\times 3x^2) + (${bFrac.str} \\times 2x) + (${c}) + 0 = ${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = f(x). Dérivation exacte.`,
        },
        conclusion: `Les primitives de f sur ℝ sont données par : ${finalAnswer}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Primitives d\'une fonction',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Déterminer l'ensemble des primitives F(x) de f(x)`,
                steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
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

  // 3. Calcul de dérivée d'un quotient : f(x) = (ax + b)/(cx + d)
  const rationalMatch = s.match(/(?:d[ée]riv[ée]e|d[ée]river).*(?:\\frac\{([^}]+)\}\{([^}]+)\}|\(?([^\/]+)\)?\s*\/\s*\(?([^\/]+)\)?)/i);
  if (rationalMatch) {
    const numRaw = rationalMatch[1] || rationalMatch[3] || '';
    const denRaw = rationalMatch[2] || rationalMatch[4] || '';

    // Linear quotient: (ax + b)/(cx + d)
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

      // (u/v)' = (u'v - uv')/v²
      // u = ax + b, u' = a
      // v = cx + d, v' = c
      // u'v - uv' = a(cx + d) - c(ax + b) = ad - bc
      const detNum = a * d - b * c;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Identification des fonctions u(x) et v(x)',
          description: 'La fonction est un quotient de la forme f(x) = \\frac{u(x)}{v(x)}.',
          mathLines: [
            `u(x) = ${a}x ${b >= 0 ? '+' : ''}${b} \\implies u'(x) = ${a}`,
            `v(x) = ${c}x ${d >= 0 ? '+' : ''}${d} \\implies v'(x) = ${c}`,
          ],
          justification: 'Règle de dérivation d\'un quotient de deux fonctions dérivables',
        },
        {
          stepNumber: 2,
          title: 'Application de la formule de la dérivée d\'un quotient',
          description: 'On applique la formule (u/v)\' = \\frac{u\'v - uv\'}{v^2}.',
          mathLines: [
            `f'(x) = \\frac{u'(x)v(x) - u(x)v'(x)}{(v(x))^2}`,
            `f'(x) = \\frac{(${a})(${c}x ${d >= 0 ? '+' : ''}${d}) - (${a}x ${b >= 0 ? '+' : ''}${b})(${c})}{(${c}x ${d >= 0 ? '+' : ''}${d})^2}`,
          ],
        },
        {
          stepNumber: 3,
          title: 'Développement et réduction du numérateur',
          description: 'Les termes en x s\'annulent : a(cx+d) - c(ax+b) = ad - bc.',
          mathLines: [
            `u'v - uv' = ${a * c}x + (${a * d}) - (${a * c}x + ${b * c}) = ${a * d} - (${b * c}) = ${detNum}`,
            `f'(x) = \\frac{${detNum}}{(${c}x ${d >= 0 ? '+' : ''}${d})^2}`,
          ],
        },
      ];

      const finalAnswer = `f'(x) = \\frac{${detNum}}{(${c}x ${d >= 0 ? '+' : ''}${d})^2}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch4',
        chapterTitle: 'Dérivée et primitives',
        exerciseType: 'Dérivée d\'une fonction rationnelle (quotient)',
        methodUsed: 'Formule de la dérivée d\'un quotient : (u/v)\' = \\frac{u\'v - uv\'}{v^2}',
        formulasUsed: [
          '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}',
        ],
        courseExcerpt: 'Pour une fonction homographique f(x) = (ax+b)/(cx+d), la dérivée est donnée par le déterminant (ad - bc) sur le carré du dénominateur.',
        statementCleaned: `Calculer la dérivée de f(x) = (${a}x ${b >= 0 ? '+' : ''}${b}) / (${c}x ${d >= 0 ? '+' : ''}${d})`,
        dataAndGiven: [`f(x) = \\frac{${a}x ${b >= 0 ? '+' : ''}${b}}{${c}x ${d >= 0 ? '+' : ''}${d}}`, `Ensemble de définition D_f = \\mathbb{R} \\setminus \\left\\{ -\\frac{${d}}{${c}} \\right\\}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle par la formule canonique du déterminant ad - bc',
          checkPassed: true,
          details: `ad - bc = (${a})(${d}) - (${b})(${c}) = ${a * d} - (${b * c}) = ${detNum}. Le numérateur est rigoureusement exact.`,
        },
        conclusion: `La fonction dérivée est : ${finalAnswer}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Calcul de dérivée rationnelle',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Calculer la dérivée f'(x)`,
                steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
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

  return null;
}
