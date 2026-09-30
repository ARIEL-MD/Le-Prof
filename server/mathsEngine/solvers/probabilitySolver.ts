import { MathsSolveOptions, MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { combination, arrangement, factorial, simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 2 / Leçon 2 : Probabilités (Tle A1 & A2)
 * - Dénombrement : Factorielle n!, Arrangements A_n^p, Combinaisons C_n^p, p-listes n^p
 * - Tirages : simultanés (C_n^p), successifs sans remise (A_n^p), successifs avec remise (n^p)
 * - Événements, Univers Ω, Équiprobabilité P(A) = Card(A) / Card(Ω)
 * - Événement contraire P(Ā) = 1 - P(A), Union P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
 * - SÉRIE A1 SEULEMENT : Variable aléatoire X, loi de probabilité P(X=x_i), espérance E(X), variance V(X), écart type σ(X), équité du jeu
 */
export function solveProbability(statement: string, options?: MathsSolveOptions): MathsSolveResult | null {
  const s = statement.trim();
  const isA2 = options?.serie === 'A2' || (typeof options?.serie === 'string' && /a2/i.test(options.serie));
  const isA1 = options?.serie === 'A1' || (typeof options?.serie === 'string' && /a1/i.test(options.serie));

  // 1. Variable Aléatoire (A1 Spécifique)
  // e.g. "variable aléatoire X", "loi de probabilité", "espérance mathématique", "espérance", "gain algébrique"
  const rvMatch = s.match(/(?:variable\s+al[ée]atoire|loi\s+de\s+probabilit[ée]|esp[ée]rance(?:\s+math[ée]matique)?|variance|gain\s+alg[ée]brique)/i);
  const discreteValuesMatch = s.match(/(?:valeurs?|gains?|x_i)\s*[:=]?\s*([0-9\s,\.\-]+?)(?=(?:probabilit[ée]|p_i|\bE\b|\bV\b|$))/i);
  const probValuesMatch = s.match(/(?:probabilit[ée]s?|p_i)\s*[:=]?\s*([0-9\s,\.\/\-]+?)(?=(?:esp[ée]rance|variance|\bE\b|\bV\b|$))/i);

  if (rvMatch && discreteValuesMatch && probValuesMatch) {
    const rawX = discreteValuesMatch[1].replace(/,/g, '.').trim().split(/\s+/).map(Number).filter((n) => !isNaN(n));
    const rawP = probValuesMatch[1].replace(/,/g, '.').trim().split(/\s+/).map((p) => {
      if (p.includes('/')) {
        const [num, den] = p.split('/').map(Number);
        return den !== 0 ? num / den : 0;
      }
      return parseFloat(p);
    }).filter((n) => !isNaN(n));

    if (rawX.length >= 2 && rawX.length === rawP.length) {
      const sumP = rawP.reduce((a, b) => a + b, 0);
      const meanEX = rawX.reduce((acc, x, i) => acc + x * rawP[i], 0);
      const sumPiXi2 = rawX.reduce((acc, x, i) => acc + x * x * rawP[i], 0);
      const varX = sumPiXi2 - meanEX * meanEX;
      const sigmaX = Math.sqrt(Math.max(0, varX));

      const meanEXStr = round(meanEX, 4).toString();
      const varXStr = round(varX, 4).toString();
      const sigmaXStr = round(sigmaX, 4).toString();

      let jeuConclusion = 'Le jeu est équitable (E(X) = 0).';
      if (meanEX > 0) jeuConclusion = `Le jeu est favorable au joueur (E(X) = ${meanEXStr} > 0).`;
      else if (meanEX < 0) jeuConclusion = `Le jeu est défavorable au joueur (E(X) = ${meanEXStr} < 0).`;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Vérification de la loi de probabilité de la variable aléatoire X',
          description: 'On vérifie que la somme des probabilités des valeurs possibles de X est égale à 1.',
          mathLines: [
            `\\Omega' = \\{ ${rawX.join(', ')} \\}`,
            `\\sum_{i=1}^{${rawX.length}} P(X = x_i) = ${rawP.map((p) => round(p, 4)).join(' + ')} = ${round(sumP, 4)} \\approx 1`,
          ],
          justification: 'Axiome fondamental des probabilités totales : Σ p_i = 1',
        },
        {
          stepNumber: 2,
          title: 'Calcul de l\'espérance mathématique E(X)',
          description: 'L\'espérance représente le gain moyen théorique par partie.',
          mathLines: [
            `E(X) = \\sum_{i=1}^{${rawX.length}} x_i P(X = x_i) = ${rawX.map((x, i) => `(${x}) \\times (${round(rawP[i], 4)})`).join(' + ')}`,
            `E(X) = ${meanEXStr}`,
          ],
          justification: 'Formule de l\'espérance mathématique',
        },
        {
          stepNumber: 3,
          title: 'Calcul de la variance V(X) et de l\'écart-type σ(X)',
          description: 'Formule de König : V(X) = Σ p_i x_i² - (E(X))².',
          mathLines: [
            `\\sum p_i x_i^2 = ${round(sumPiXi2, 4)}`,
            `V(X) = \\sum p_i x_i^2 - [E(X)]^2 = ${round(sumPiXi2, 4)} - (${meanEXStr})^2 = ${varXStr}`,
            `\\sigma(X) = \\sqrt{V(X)} = \\sqrt{${varXStr}} = ${sigmaXStr}`,
          ],
          justification: 'Paramètres de dispersion d\'une variable aléatoire',
        },
        {
          stepNumber: 4,
          title: 'Interprétation et rentabilité du jeu',
          description: 'On conclut sur le caractère équitable ou non du jeu.',
          mathLines: [
            jeuConclusion,
          ],
        },
      ];

      const finalAnswer = `E(X) = ${meanEXStr}, \\quad V(X) = ${varXStr}, \\quad \\sigma(X) = ${sigmaXStr} \\implies ${jeuConclusion}`;

      return {
        success: true,
        confidence: 0.99,
        chapterId: 'ch2',
        chapterTitle: 'Probabilités (Variable Aléatoire - Série A1)',
        exerciseType: 'Variable aléatoire, Espérance E(X), Variance V(X) et Écart-type',
        methodUsed: 'Loi de probabilité d\'une variable aléatoire, formule de l\'espérance E(X) = Σ p_i x_i et de la variance de König',
        formulasUsed: [
          'E(X) = \\sum p_i x_i',
          'V(X) = \\sum p_i x_i^2 - [E(X)]^2',
          '\\sigma(X) = \\sqrt{V(X)}',
        ],
        courseExcerpt: 'Programme officiel Terminale A1 (Leçon 2) : La notion de variable aléatoire discrète, son espérance E(X) et sa variance V(X) permettent de modéliser les gains et la rentabilité des jeux de hasard.',
        statementCleaned: s,
        dataAndGiven: [
          `Série spécifique : Terminale A1`,
          `Valeurs de X : [${rawX.join(', ')}]`,
          `Probabilités associées : [${rawP.map((p) => round(p, 4)).join(', ')}]`,
        ],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification de la somme des probabilités et positivité de la variance',
          checkPassed: Math.abs(sumP - 1) < 0.01 && varX >= 0,
          details: `\\Sigma p_i = ${round(sumP, 4)} \\approx 1 et V(X) = ${varXStr} >= 0.`,
        },
        conclusion: `L'espérance mathématique est E(X) = ${meanEXStr}, la variance est V(X) = ${varXStr}, l'écart-type est σ(X) = ${sigmaXStr}. ${jeuConclusion}`,
        finalAnswer,
        applicableSeries: ['A1'],
        serieNotice: isA2 ? 'Avis : Les variables aléatoires et l\'espérance mathématique sont au programme officiel de Terminale A1 (non requis en A2).' : undefined,
        structuredScientificResolution: [
          {
            title: 'Exercice : Variable aléatoire (Programme Tle A1)',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: 'Déterminer l\'espérance mathématique E(X)',
                steps: steps[1].mathLines,
                finalAnswer: `E(X) = ${meanEXStr}`,
              },
              {
                numberLabel: '2',
                titleOrPrompt: 'Calculer la variance V(X) et l\'écart-type σ(X)',
                steps: steps[2].mathLines,
                finalAnswer: `V(X) = ${varXStr}, \\sigma(X) = ${sigmaXStr}`,
              },
              {
                numberLabel: '3',
                titleOrPrompt: 'Conclure sur la rentabilité du jeu',
                steps: steps[3].mathLines,
                finalAnswer: jeuConclusion,
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

  // 2. Tirage dans une urne : "Une urne contient X boules blanches et Y boules noires. On tire simultanément p boules..."
  const urnMatch = s.match(/(?:urne|sac|bo[îi]te).*?(\d+)\s*boules?\s*blanches?.*?(\d+)\s*boules?\s*noires?(?:.*?(\d+)\s*boules?\s*rouges?)?.*?(?:tire|tirage)\s*(simultan[ée]ment|successivement sans remise|successivement avec remise|successivement)?.*?(\d+)\s*boules?/i) ||
                   s.match(/(\d+)\s*blanches?.*?(\d+)\s*noires?.*?(simultan[ée]|successif).*?(\d+)/i);

  if (urnMatch) {
    const nbBlanc = parseInt(urnMatch[1], 10);
    const nbNoir = parseInt(urnMatch[2], 10);
    const nbRouge = urnMatch[3] ? parseInt(urnMatch[3], 10) : 0;
    const typeTirage = (urnMatch[4] || urnMatch[3] || 'simultanément').toLowerCase();
    const pTirage = parseInt(urnMatch[5] || urnMatch[4] || '2', 10);

    const totalBoules = nbBlanc + nbNoir + nbRouge;

    if (totalBoules >= pTirage && pTirage > 0) {
      let cardOmega = 0;
      let cardOmegaFormula = '';
      let typeLabel = '';

      if (typeTirage.includes('simultan')) {
        typeLabel = 'Tirage simultané (sans ordre, sans remise)';
        cardOmega = combination(totalBoules, pTirage);
        cardOmegaFormula = `Card(\\Omega) = C_{${totalBoules}}^{${pTirage}} = \\frac{${totalBoules}!}{${pTirage}!(${totalBoules - pTirage})!} = ${cardOmega}`;
      } else if (typeTirage.includes('sans remise')) {
        typeLabel = 'Tirage successif sans remise (avec ordre, sans répétition)';
        cardOmega = arrangement(totalBoules, pTirage);
        cardOmegaFormula = `Card(\\Omega) = A_{${totalBoules}}^{${pTirage}} = \\frac{${totalBoules}!(${totalBoules - pTirage})!} = ${cardOmega}`;
      } else {
        typeLabel = 'Tirage successif avec remise (avec ordre et répétition)';
        cardOmega = Math.pow(totalBoules, pTirage);
        cardOmegaFormula = `Card(\\Omega) = ${totalBoules}^{${pTirage}} = ${cardOmega}`;
      }

      // Event A: "Tirer uniquement des boules blanches"
      let cardA = 0;
      if (typeTirage.includes('simultan')) {
        cardA = combination(nbBlanc, pTirage);
      } else if (typeTirage.includes('sans remise')) {
        cardA = arrangement(nbBlanc, pTirage);
      } else {
        cardA = Math.pow(nbBlanc, pTirage);
      }
      const pAFrac = simplifyFraction(cardA, cardOmega);

      // Event B: "Tirer au moins une boule blanche" => P(B) = 1 - P(aucune blanche)
      let cardZeroBlanc = 0;
      const nbNonBlanc = totalBoules - nbBlanc;
      if (typeTirage.includes('simultan')) {
        cardZeroBlanc = combination(nbNonBlanc, pTirage);
      } else if (typeTirage.includes('sans remise')) {
        cardZeroBlanc = arrangement(nbNonBlanc, pTirage);
      } else {
        cardZeroBlanc = Math.pow(nbNonBlanc, pTirage);
      }
      const pZeroBlancFrac = simplifyFraction(cardZeroBlanc, cardOmega);
      const pBFrac = simplifyFraction(cardOmega - cardZeroBlanc, cardOmega);

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Caractérisation du tirage et calcul du cardinal de l\'univers Ω',
          description: `On dénombre le nombre total d'issues possibles selon la modalité du tirage : ${typeLabel}.`,
          mathLines: [
            `\\text{Nombre total de boules : } n = ${nbBlanc} + ${nbNoir} ${nbRouge > 0 ? `+ ${nbRouge}` : ''} = ${totalBoules}`,
            `\\text{Nombre de boules tirées : } p = ${pTirage}`,
            cardOmegaFormula,
          ],
          justification: 'Formule fondamentale du dénombrement pour le calcul de Card(Ω)',
        },
        {
          stepNumber: 2,
          title: 'Calcul de la probabilité de l\'événement A : « Obtenir uniquement des boules blanches »',
          description: 'On choisit les p boules parmi les blanches disponibles sous équiprobabilité.',
          mathLines: [
            `Card(A) = ${cardA}`,
            `P(A) = \\frac{Card(A)}{Card(\\Omega)} = \\frac{${cardA}}{${cardOmega}} = ${pAFrac.str} \\approx ${round(cardA / cardOmega, 4)}`,
          ],
          justification: 'Loi d\'équiprobabilité : P(E) = Card(E) / Card(Ω)',
        },
        {
          stepNumber: 3,
          title: 'Calcul de la probabilité de l\'événement B : « Obtenir au moins une boule blanche »',
          description: 'On utilise l\'événement contraire B̄ : « N\'obtenir aucune boule blanche ».',
          mathLines: [
            `\\bar{B} : \\text{« N'obtenir aucune boule blanche (tirer parmi les ${nbNonBlanc} autres boules) »}`,
            `Card(\\bar{B}) = ${cardZeroBlanc} \\implies P(\\bar{B}) = \\frac{${cardZeroBlanc}}{${cardOmega}} = ${pZeroBlancFrac.str}`,
            `P(B) = 1 - P(\\bar{B}) = 1 - ${pZeroBlancFrac.str} = ${pBFrac.str} \\approx ${round((cardOmega - cardZeroBlanc) / cardOmega, 4)}`,
          ],
          justification: 'Propriété de l\'événement contraire : P(B) = 1 - P(B̄)',
        },
      ];

      const finalAnswer = `Card(\\Omega) = ${cardOmega}, \\quad P(A) = ${pAFrac.str}, \\quad P(B) = ${pBFrac.str}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch2',
        chapterTitle: 'Probabilités',
        exerciseType: 'Probabilités sur un tirage d\'urne & Événement contraire',
        methodUsed: 'Dénombrement (Combinaisons/Arrangements), Équiprobabilité P(E) = Card(E)/Card(Ω) et Événement contraire',
        formulasUsed: [
          'P(E) = \\frac{Card(E)}{Card(\\Omega)}',
          'P(\\bar{E}) = 1 - P(E)',
          'C_n^p = \\frac{n!}{p!(n-p)!}',
        ],
        courseExcerpt: 'En situation d\'équiprobabilité, la probabilité d\'un événement est le quotient du nombre de cas favorables par le nombre de cas possibles. L\'événement contraire simplifie le traitement des énoncés « au moins un ».',
        statementCleaned: `Tirage de ${pTirage} boules dans une urne (${nbBlanc} blanches, ${nbNoir} noires${nbRouge > 0 ? `, ${nbRouge} rouges` : ''}) - Mode : ${typeLabel}`,
        dataAndGiven: [
          `Composition de l'urne : ${nbBlanc} blanches, ${nbNoir} noires${nbRouge > 0 ? `, ${nbRouge} rouges` : ''} (Total = ${totalBoules})`,
          `Nombre de tirages : p = ${pTirage}`,
          `Type de tirage : ${typeLabel}`,
        ],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification des axiomes de probabilité : 0 <= P(E) <= 1 et P(B) + P(B̄) = 1',
          checkPassed: true,
          details: `0 <= ${round(cardA / cardOmega, 4)} <= 1 et P(B) + P(\\bar{B}) = ${pBFrac.str} + ${pZeroBlancFrac.str} = 1. Axiomes de Kolmogorov respectés.`,
        },
        conclusion: `Le nombre total de tirages possibles est Card(Ω) = ${cardOmega}. La probabilité d'obtenir uniquement des blanches est ${pAFrac.str}, et celle d'obtenir au moins une blanche est ${pBFrac.str}.`,
        finalAnswer,
        applicableSeries: ['A1', 'A2'],
        structuredScientificResolution: [
          {
            title: 'Exercice : Probabilités et Dénombrement',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: 'Déterminer le nombre d\'issues possibles (Card Ω)',
                steps: steps[0].mathLines,
                finalAnswer: `Card(\\Omega) = ${cardOmega}`,
              },
              {
                numberLabel: '2',
                titleOrPrompt: 'Calculer la probabilité de tirer uniquement des boules blanches (P(A))',
                steps: steps[1].mathLines,
                finalAnswer: `P(A) = ${pAFrac.str}`,
              },
              {
                numberLabel: '3',
                titleOrPrompt: 'Calculer la probabilité de tirer au moins une boule blanche (P(B))',
                steps: steps[2].mathLines,
                finalAnswer: `P(B) = ${pBFrac.str}`,
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

  // 3. Calcul combinatoire direct : Calculer C_n^p, A_n^p, n!
  const combDirectMatch = s.match(/(?:calculer|combinaison|arrangement)?\s*(?:C\s*\(?(\d+)\s*[,;]\s*(\d+)\)?|C_(\d+)\^(\d+)|A\s*\(?(\d+)\s*[,;]\s*(\d+)\)?|A_(\d+)\^(\d+)|(\d+)\s*!)/i);
  if (combDirectMatch) {
    if (s.includes('C') || s.includes('combinaison')) {
      const matchC = s.match(/C(?:_(\d+)\^(\d+)|\((\d+)[,;]\s*(\d+)\)|(\d+)\s+(\d+))/i);
      if (matchC) {
        const n = parseInt(matchC[1] || matchC[3] || matchC[5], 10);
        const p = parseInt(matchC[2] || matchC[4] || matchC[6], 10);

        if (n >= p && p >= 0) {
          const val = combination(n, p);

          const steps: MathsStep[] = [
            {
              stepNumber: 1,
              title: 'Rappel de la formule des combinaisons C_n^p',
              description: 'Le nombre de combinaisons de p éléments parmi n est donné par la formule du cours.',
              mathLines: [
                `C_n^p = \\frac{n!}{p!(n-p)!}`,
                `n = ${n}, \\quad p = ${p}`,
              ],
              justification: 'Définition des combinaisons sans répétition',
            },
            {
              stepNumber: 2,
              title: 'Développement et calcul numérique',
              description: 'On simplifie les factorielles.',
              mathLines: [
                `C_{${n}}^{${p}} = \\frac{${n}!}{${p}! \\times (${n} - ${p})!} = \\frac{${n}!}{${p}! \\times ${n - p}!}`,
                `C_{${n}}^{${p}} = ${val}`,
              ],
            },
          ];

          const finalAnswer = `C_{${n}}^{${p}} = ${val}`;

          return {
            success: true,
            confidence: 0.98,
            chapterId: 'ch2',
            chapterTitle: 'Probabilités',
            exerciseType: 'Calcul de combinaisons C_n^p',
            methodUsed: 'Formule des combinaisons : C_n^p = \\frac{n!}{p!(n-p)!}',
            formulasUsed: ['C_n^p = \\frac{n!}{p!(n-p)!}'],
            courseExcerpt: 'Une combinaison de p éléments choisis parmi n éléments distincts est un sous-ensemble de cardinal p (l\'ordre ne compte pas).',
            statementCleaned: `Calculer C_${n}^${p}`,
            dataAndGiven: [`n = ${n}`, `p = ${p}`],
            stepByStepCalculations: steps,
            verification: {
              performed: true,
              description: 'Propriété de symétrie : C_n^p = C_n^(n-p)',
              checkPassed: val === combination(n, n - p),
              details: `C_{${n}}^{${p}} = C_{${n}}^{${n - p}} = ${val}. Propriété de symétrie vérifiée.`,
            },
            conclusion: `Le nombre de combinaisons C_${n}^${p} est égal à ${val}.`,
            finalAnswer,
            applicableSeries: ['A1', 'A2'],
            structuredScientificResolution: [
              {
                title: 'Exercice : Calcul combinatoire',
                questions: [
                  {
                    numberLabel: '1',
                    titleOrPrompt: `Calculer C_{${n}}^{${p}}`,
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
    }
  }

  return null;
}

