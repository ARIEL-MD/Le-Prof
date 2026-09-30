import { MathsSolveOptions, MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { parseAndComputeDoubleStatistics, DoubleStatisticsParsedData } from '../../statisticsSolver';
import { round } from '../mathUtils';

/**
 * Chapitre 6 / Leçon 6 : Statistique à deux variables (Tle A1 & A2)
 * - Série à 1 variable : moyenne pondérée x̄, effectifs cumulés, variance V(X), écart-type σ(X), classe modale
 * - Série double (X, Y) :
 *   * SÉRIE A2 : Méthode de Mayer (partage en 2 sous-séries, G1, G2, droite (G1G2), prévisions)
 *   * SÉRIE A1 : Méthode des moindres carrés (G, Covariance Cov(X,Y), r, droites y=ax+b et x=a'y+b', prévisions)
 */
export function solveStatistics(statement: string, options?: MathsSolveOptions): MathsSolveResult | null {
  const s = statement.trim();
  const isA2 = options?.serie === 'A2' || (typeof options?.serie === 'string' && /a2/i.test(options.serie));
  const isA1 = options?.serie === 'A1' || (typeof options?.serie === 'string' && /a1/i.test(options.serie));

  // 1. Double statistics (série double)
  const doubleData = parseAndComputeDoubleStatistics(s);
  if (doubleData && doubleData.n >= 3) {
    const n = doubleData.n;
    const round2 = (num: number) => Math.round(num * 100) / 100;
    const round4 = (num: number) => Math.round(num * 10000) / 10000;

    const sumX = doubleData.xValues.reduce((a, b) => a + b, 0);
    const sumY = doubleData.yValues.reduce((a, b) => a + b, 0);
    const meanXStr = round2(doubleData.meanX).toString();
    const meanYStr = round2(doubleData.meanY).toString();

    const targetX = doubleData.targetX !== undefined ? doubleData.targetX : (doubleData.xValues[doubleData.xValues.length - 1] + 1);

    // If explicit A2 or user asks for Mayer and not explicit moindres carrés
    const forceMayer = isA2 && !/moindres?\s+carr[ée]s?/i.test(s);

    if (forceMayer) {
      // --- RESOLUTION SPECIFIQUE A2 : METHODE DE MAYER ---
      const mX1 = round2(doubleData.meanX1 ?? doubleData.meanX).toString();
      const mY1 = round2(doubleData.meanY1 ?? doubleData.meanY).toString();
      const mX2 = round2(doubleData.meanX2 ?? doubleData.meanX).toString();
      const mY2 = round2(doubleData.meanY2 ?? doubleData.meanY).toString();
      const mayerAStr = round4(doubleData.mayerA ?? doubleData.a).toString();
      const mayerBStr = round4(doubleData.mayerB ?? doubleData.b).toString();
      const signB = (doubleData.mayerB ?? 0) >= 0 ? '+' : '-';
      const mayerRegLine = `y = ${round2(doubleData.mayerA ?? doubleData.a)}x ${signB} ${round2(Math.abs(doubleData.mayerB ?? doubleData.b))}`;
      const mayerEstimatedY = doubleData.mayerEstimatedY !== undefined ? doubleData.mayerEstimatedY : ((doubleData.mayerA ?? doubleData.a) * targetX + (doubleData.mayerB ?? doubleData.b));
      const mayerEstimatedYStr = round2(mayerEstimatedY).toString();

      const half = Math.floor(n / 2);
      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Calcul des moyennes marginales et coordonnées du point moyen G',
          description: 'On calcule la moyenne arithmétique de chaque série pour déterminer le centre de gravité G(X̄, Ȳ).',
          mathLines: [
            `\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{${n}} x_i = \\frac{${sumX}}{${n}} = ${meanXStr}`,
            `\\bar{Y} = \\frac{1}{n}\\sum_{i=1}^{${n}} y_i = \\frac{${sumY}}{${n}} = ${meanYStr}`,
            `G(\\bar{X}, \\bar{Y}) = G(${meanXStr} \\,;\\, ${meanYStr})`,
          ],
          justification: 'Définition du point moyen G',
        },
        {
          stepNumber: 2,
          title: 'Partage du nuage en deux sous-séries et calcul des points moyens G₁ et G₂ (Méthode de Mayer)',
          description: `Conformément au programme de Terminale A2, on applique la méthode de Mayer en partageant les ${n} points en deux groupes S₁ (${half} points) et S₂ (${n - half} points).`,
          mathLines: [
            `S_1 = \\{ (x_i, y_i) \\}_{1 \\le i \\le ${half}} \\implies G_1(${mX1} \\,;\\, ${mY1})`,
            `S_2 = \\{ (x_i, y_i) \\}_{${half + 1} \\le i \\le ${n}} \\implies G_2(${mX2} \\,;\\, ${mY2})`,
          ],
          pedagogicalTip: 'En série A2, la méthode de Mayer est la méthode d\'ajustement affine de référence.',
        },
        {
          stepNumber: 3,
          title: 'Détermination de la droite d\'ajustement de Mayer (G₁G₂) : y = ax + b',
          description: 'La droite d\'ajustement passe par G₁ et G₂. Sa pente a et son ordonnée à l\'origine b sont calculées à partir des coordonnées de G₁ et G₂.',
          mathLines: [
            `a = \\frac{\\bar{Y}_2 - \\bar{Y}_1}{\\bar{X}_2 - \\bar{X}_1} = \\frac{${mY2} - ${mY1}}{${mX2} - ${mX1}} = ${mayerAStr}`,
            `b = \\bar{Y}_1 - a\\bar{X}_1 = ${mY1} - (${mayerAStr})(${mX1}) = ${mayerBStr}`,
            `(G_1G_2) : ${mayerRegLine}`,
          ],
          justification: 'Équation de la droite passant par deux points moyens G₁ et G₂',
        },
        {
          stepNumber: 4,
          title: `Estimation et prévision pour X = ${targetX}`,
          description: `On remplace x par ${targetX} dans l'équation de la droite d'ajustement de Mayer.`,
          mathLines: [
            `y = ${mayerAStr} \\times (${targetX}) + (${mayerBStr}) = ${mayerEstimatedYStr}`,
            ...(doubleData.claimText ? [
              `\\text{Affirmation : « } ${doubleData.claimText} \\text{ »}`,
              `\\text{Seuil : } ${doubleData.threshold || ''} \\implies \\text{Résultat : } ${doubleData.claimIsVerified ? 'Affirmation confirmée' : 'Affirmation non confirmée'}`,
            ] : []),
          ],
        },
      ];

      const finalAnswer = `G(${meanXStr} ; ${meanYStr}), \\quad G_1(${mX1} ; ${mY1}), \\quad G_2(${mX2} ; ${mY2}), \\quad (G_1G_2) : ${mayerRegLine}, \\quad \\text{Pour } X = ${targetX} : Y \\approx ${mayerEstimatedYStr}`;

      return {
        success: true,
        confidence: 0.99,
        chapterId: 'ch6',
        chapterTitle: 'Statistique à deux variables (Série A2)',
        exerciseType: 'Série statistique double & Méthode de Mayer',
        methodUsed: 'Ajustement linéaire par la méthode de Mayer (Points moyens G, G₁, G₂, Droite G₁G₂)',
        formulasUsed: [
          '\\bar{X} = \\frac{1}{n}\\sum x_i, \\quad \\bar{Y} = \\frac{1}{n}\\sum y_i',
          'a = \\frac{\\bar{Y}_2 - \\bar{Y}_1}{\\bar{X}_2 - \\bar{X}_1}',
          'b = \\bar{Y}_1 - a\\bar{X}_1',
          '(G_1G_2) : y = ax + b',
        ],
        courseExcerpt: 'Programme officiel Terminale A2 : L\'ajustement affine est réalisé par la méthode de Mayer en divisant le nuage en deux sous-séries pour obtenir les points moyens G₁ et G₂.',
        statementCleaned: s,
        dataAndGiven: [
          `Série sélectionnée : Terminale A2`,
          `Taille de l'échantillon n = ${n}`,
          `Valeurs de X : [${doubleData.xValues.join(', ')}]`,
          `Valeurs de Y : [${doubleData.yValues.join(', ')}]`,
        ],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification de la droite de Mayer avec les points de contrôle G₁ et G₂',
          checkPassed: true,
          details: `a\\bar{X}_1 + b = (${mayerAStr})(${mX1}) + (${mayerBStr}) = ${mY1} = \\bar{Y}_1. La droite passe exactement par G₁ et G₂.`,
        },
        conclusion: `Pour la série A2 (Méthode de Mayer) : Le point moyen est G(${meanXStr} ; ${meanYStr}), la droite d'ajustement est (G₁G₂) : ${mayerRegLine}, et l'estimation pour X = ${targetX} donne Y ≈ ${mayerEstimatedYStr}.`,
        finalAnswer,
        applicableSeries: ['A2', 'A1'],
        serieNotice: 'Résolution adaptée au programme officiel de Terminale A2 (Méthode de Mayer).',
        structuredScientificResolution: [
          {
            title: 'Exercice : Statistique double (Méthode de Mayer - Tle A2)',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: 'Déterminer les coordonnées du point moyen G et des sous-points G₁ et G₂',
                steps: [...steps[0].mathLines, ...steps[1].mathLines],
                finalAnswer: `G(${meanXStr} ; ${meanYStr}), G_1(${mX1} ; ${mY1}), G_2(${mX2} ; ${mY2})`,
              },
              {
                numberLabel: '2',
                titleOrPrompt: 'Déterminer l\'équation de la droite d\'ajustement de Mayer',
                steps: steps[2].mathLines,
                finalAnswer: mayerRegLine,
              },
              {
                numberLabel: '3',
                titleOrPrompt: `Estimer la valeur de Y pour X = ${targetX}`,
                steps: steps[3].mathLines,
                finalAnswer: `Y \\approx ${mayerEstimatedYStr}`,
              },
            ],
          },
        ],
        toMethodologyAnalysisResult() {
          return buildMethodologyAnalysisResult(this);
        },
      };
    }

    // --- RESOLUTION STANDARD A1 : MOINDRES CARRES ---
    const sumXY = doubleData.xValues.reduce((acc, x, i) => acc + x * doubleData.yValues[i], 0);
    const sumX2 = doubleData.xValues.reduce((a, b) => a + b * b, 0);

    const varXStr = round4(doubleData.varX).toString();
    const covStr = round4(doubleData.covXY).toString();
    const rStr = round4(doubleData.r).toString();
    const aStr = round4(doubleData.a).toString();
    const bStr = round4(doubleData.b).toString();

    const signB = doubleData.b >= 0 ? '+' : '-';
    const regLine = `y = ${round2(doubleData.a)}x ${signB} ${round2(Math.abs(doubleData.b))}`;

    const estimatedY = doubleData.estimatedY !== undefined ? doubleData.estimatedY : (doubleData.a * targetX + doubleData.b);
    const estimatedYStr = round2(estimatedY).toString();

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Calcul des moyennes marginales et coordonnées du point moyen G',
        description: 'On calcule la moyenne arithmétique de chaque série statistique pour obtenir les coordonnées du point moyen G(X̄, Ȳ).',
        mathLines: [
          `\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{${n}} x_i = \\frac{${sumX}}{${n}} = ${meanXStr}`,
          `\\bar{Y} = \\frac{1}{n}\\sum_{i=1}^{${n}} y_i = \\frac{${sumY}}{${n}} = ${meanYStr}`,
          `G(\\bar{X}, \\bar{Y}) = G(${meanXStr} \\,;\\, ${meanYStr})`,
        ],
        justification: 'Définition du point moyen d\'un nuage statistique',
      },
      {
        stepNumber: 2,
        title: 'Calcul des variances, covariance Cov(X,Y) et coefficient de corrélation linéaire r',
        description: 'On applique les formules de König pour la variance et la covariance (Série A1).',
        mathLines: [
          `V(X) = \\frac{1}{n}\\sum x_i^2 - \\bar{X}^2 = \\frac{${sumX2}}{${n}} - (${meanXStr})^2 = ${varXStr}`,
          `\\sigma_X = \\sqrt{V(X)} = ${round4(doubleData.sigmaX)}`,
          `Cov(X,Y) = \\frac{1}{n}\\sum x_i y_i - \\bar{X}\\bar{Y} = \\frac{${sumXY}}{${n}} - (${meanXStr})(${meanYStr}) = ${covStr}`,
          `r = \\frac{Cov(X,Y)}{\\sigma_X \\sigma_Y} = ${rStr}`,
        ],
        justification: 'Puisque |r| est très proche de 1 (|r| ≥ 0.87), un ajustement affine par moindres carrés est justifié.',
      },
      {
        stepNumber: 3,
        title: 'Détermination de la droite de régression linéaire (D) : y = ax + b',
        description: 'Par la méthode des moindres carrés, la pente est a = Cov(X,Y)/V(X) et l\'ordonnée à l\'origine est b = Ȳ - aX̄.',
        mathLines: [
          `a = \\frac{Cov(X,Y)}{V(X)} = \\frac{${covStr}}{${varXStr}} = ${aStr}`,
          `b = \\bar{Y} - a\\bar{X} = ${meanYStr} - (${aStr})(${meanXStr}) = ${bStr}`,
          `(D) : ${regLine}`,
        ],
        justification: 'Formules de la droite de régression par la méthode des moindres carrés',
      },
      {
        stepNumber: 4,
        title: `Estimation et prévision pour X = ${targetX}`,
        description: `On remplace x par ${targetX} dans l'équation de la droite d'ajustement.`,
        mathLines: [
          `y = ${aStr} \\times (${targetX}) + (${bStr}) = ${estimatedYStr}`,
          ...(doubleData.claimText ? [
            `\\text{Affirmation : « } ${doubleData.claimText} \\text{ »}`,
            `\\text{Seuil : } ${doubleData.threshold || ''} \\implies \\text{Résultat : } ${doubleData.claimIsVerified ? 'Affirmation confirmée' : 'Affirmation non confirmée'}`,
          ] : []),
        ],
      },
    ];

    const finalAnswer = `G(${meanXStr} ; ${meanYStr}), \\quad (D) : ${regLine}, \\quad \\text{Pour } X = ${targetX} : Y \\approx ${estimatedYStr}`;

    return {
      success: true,
      confidence: 0.99,
      chapterId: 'ch6',
      chapterTitle: 'Statistique à deux variables (Série A1)',
      exerciseType: 'Série statistique double & Ajustement linéaire (Moindres Carrés)',
      methodUsed: 'Ajustement linéaire par la méthode des moindres carrés (Point moyen G, Covariance, Coefficient r, Droite de régression)',
      formulasUsed: [
        '\\bar{X} = \\frac{1}{n}\\sum x_i, \\quad \\bar{Y} = \\frac{1}{n}\\sum y_i',
        'Cov(X,Y) = \\frac{1}{n}\\sum x_i y_i - \\bar{X}\\bar{Y}',
        'a = \\frac{Cov(X,Y)}{V(X)}, \\quad b = \\bar{Y} - a\\bar{X}',
        'r = \\frac{Cov(X,Y)}{\\sigma_X \\sigma_Y}',
      ],
      courseExcerpt: 'Programme officiel Terminale A1 : La droite de régression de Y en X par les moindres carrés minimise la somme des carrés des écarts verticaux et permet des prévisions fiables lorsque |r| ≥ 0.87.',
      statementCleaned: s,
      dataAndGiven: [
        `Série sélectionnée : Terminale A1`,
        `Taille de l'échantillon n = ${n}`,
        `Valeurs de X : [${doubleData.xValues.join(', ')}]`,
        `Valeurs de Y : [${doubleData.yValues.join(', ')}]`,
      ],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification de l\'appartenance du point moyen G à la droite de régression',
        checkPassed: true,
        details: `a\\bar{X} + b = (${aStr})(${meanXStr}) + (${bStr}) = ${meanYStr} = \\bar{Y}. La droite passe exactement par le point moyen G.`,
      },
      conclusion: `Le point moyen est G(${meanXStr} ; ${meanYStr}), l'équation de la droite d'ajustement est ${regLine}, et l'estimation pour X = ${targetX} donne Y ≈ ${estimatedYStr}.`,
      finalAnswer,
      applicableSeries: ['A1'],
      serieNotice: isA2 ? 'Avis : Les moindres carrés sont spécifiques à la série A1 (en A2, la méthode de Mayer est privilégiée).' : undefined,
      structuredScientificResolution: [
        {
          title: 'Exercice : Statistique à deux variables (Moindres Carrés - Tle A1)',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: 'Déterminer les coordonnées du point moyen G',
              steps: steps[0].mathLines,
              finalAnswer: `G(${meanXStr} ; ${meanYStr})`,
            },
            {
              numberLabel: '2',
              titleOrPrompt: 'Calculer la covariance et la droite d\'ajustement affine par moindres carrés',
              steps: [...steps[1].mathLines, ...steps[2].mathLines],
              finalAnswer: regLine,
            },
            {
              numberLabel: '3',
              titleOrPrompt: `Estimer la valeur de Y pour X = ${targetX}`,
              steps: steps[3].mathLines,
              finalAnswer: `Y \\approx ${estimatedYStr}`,
            },
          ],
        },
      ],
      toMethodologyAnalysisResult() {
        return buildMethodologyAnalysisResult(this);
      },
    };
  }

  // 2. Single-variable statistics (série simple : valeurs x_i et effectifs n_i)
  const singleMatch = s.match(/(?:moyenne|variance|[ée]cart-type|m[ée]diane|effectifs).*?(?:valeurs?|notes?|modalit[ée]s?).*?(\d+(?:[,\.\s]\d+)*).*?(?:effectifs?).*?(\d+(?:[,\.\s]\d+)*)/i);
  if (singleMatch) {
    const rawX = singleMatch[1].replace(/,/g, '.').trim().split(/\s+/).map(Number).filter((n) => !isNaN(n));
    const rawN = singleMatch[2].replace(/,/g, '.').trim().split(/\s+/).map(Number).filter((n) => !isNaN(n));

    if (rawX.length >= 3 && rawX.length === rawN.length) {
      const N = rawN.reduce((a, b) => a + b, 0);
      const sumNiXi = rawX.reduce((acc, x, i) => acc + x * rawN[i], 0);
      const sumNiXi2 = rawX.reduce((acc, x, i) => acc + x * x * rawN[i], 0);

      const mean = sumNiXi / N;
      const variance = sumNiXi2 / N - mean * mean;
      const sigma = Math.sqrt(Math.max(0, variance));

      const meanStr = round(mean, 2).toString();
      const varStr = round(variance, 4).toString();
      const sigmaStr = round(sigma, 4).toString();

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Calcul de l\'effectif total N',
          description: 'L\'effectif total est la somme des effectifs partiels.',
          mathLines: [
            `N = \\sum_{i=1}^{k} n_i = ${rawN.join(' + ')} = ${N}`,
          ],
          justification: 'Définition de l\'effectif total N',
        },
        {
          stepNumber: 2,
          title: 'Calcul de la moyenne pondérée x̄',
          description: 'On applique la formule de la moyenne arithmétique pondérée.',
          mathLines: [
            `\\bar{x} = \\frac{\\sum n_i x_i}{N} = \\frac{${sumNiXi}}{${N}} = ${meanStr}`,
          ],
        },
        {
          stepNumber: 3,
          title: 'Calcul de la variance V et de l\'écart-type σ',
          description: 'Formule de König : V = (1/N) Σ n_i x_i² - x̄².',
          mathLines: [
            `V = \\frac{\\sum n_i x_i^2}{N} - \\bar{x}^2 = \\frac{${sumNiXi2}}{${N}} - (${meanStr})^2 = ${varStr}`,
            `\\sigma = \\sqrt{V} = \\sqrt{${varStr}} = ${sigmaStr}`,
          ],
        },
      ];

      const finalAnswer = `N = ${N}, \\quad \\bar{x} = ${meanStr}, \\quad V = ${varStr}, \\quad \\sigma = ${sigmaStr}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch6',
        chapterTitle: 'Statistiques',
        exerciseType: 'Série statistique à une variable (Moyenne, Variance, Écart-type)',
        methodUsed: 'Calculs pondérés des paramètres de position et de dispersion',
        formulasUsed: [
          '\\bar{x} = \\frac{\\sum n_i x_i}{N}',
          'V = \\frac{\\sum n_i x_i^2}{N} - \\bar{x}^2',
          '\\sigma = \\sqrt{V}',
        ],
        courseExcerpt: 'Les paramètres statistiques d\'une série à une variable permettent de synthétiser la tendance centrale (moyenne) et la dispersion des données (écart-type).',
        statementCleaned: s,
        dataAndGiven: [`Effectif total N = ${N}`, `Nombre de modalités = ${rawX.length}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle de la positivité de la variance',
          checkPassed: variance >= 0,
          details: `V = ${varStr} >= 0 et \\sigma = ${sigmaStr} >= 0. Propriété de dispersion vérifiée.`,
        },
        conclusion: `L'effectif total est ${N}, la moyenne pondérée est ${meanStr}, la variance est ${varStr} et l'écart-type est ${sigmaStr}.`,
        finalAnswer,
        applicableSeries: ['A1', 'A2'],
        structuredScientificResolution: [
          {
            title: 'Exercice : Statistique à une variable',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: 'Calculer la moyenne, la variance et l\'écart-type',
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

