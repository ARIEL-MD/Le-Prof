/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES PROBABILITÉS (SANS IA) — PÉRIMÈTRE CIBLÉ
 * ==============================================================================
 *
 * Contrairement à l'étude de fonctions ou aux suites, un énoncé de
 * probabilités décrit une expérience aléatoire en LANGAGE NATUREL (une urne,
 * un dé, un jeu de cartes...) : il n'existe pas de notation algébrique
 * universelle à parser comme "f(x) = ...". Extraire fidèlement et sans
 * erreur n'importe quel énoncé de probabilités par heuristique textuelle
 * n'est pas fiable — le risque de mal comprendre l'expérience (tirages
 * avec/sans remise, événements composés...) est réel et une mauvaise
 * probabilité serait pire qu'une absence de réponse.
 *
 * Ce moteur se limite donc, VOLONTAIREMENT, à deux familles d'exercices où
 * l'extraction peut être fiable et vérifiable :
 *
 *  1. Loi binomiale de paramètres n et p explicitement donnés dans l'énoncé
 *     (répétition de n épreuves de Bernoulli indépendantes de probabilité de
 *     succès p) : calcul exact de P(X=k), P(X≤k), P(X≥k), P(X<k), P(X>k),
 *     espérance E(X) = np, variance V(X) = np(1-p), écart-type.
 *
 *  2. Tirage UNIQUE et équiprobable dans une urne (comptage de boules par
 *     couleur donné explicitement dans l'énoncé) ou un dé à n faces, pour un
 *     événement simple portant sur une seule couleur ou une propriété
 *     numérique du résultat (pair, impair, multiple de k, supérieur à k...).
 *
 * Tout le reste (tirages successifs sans remise, événements composés,
 * variables aléatoires personnalisées, cartes...) est hors périmètre : le
 * moteur renvoie `null` plutôt que de risquer une réponse fausse.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function combinations(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function fmtNum(n: number): string {
  if (Number.isInteger(n)) return `${n}`;
  return `${Math.round(n * 1e6) / 1e6}`;
}

function fmtProba(p: number): string {
  return `${Math.round(p * 1e6) / 1e6}`;
}

// ==========================================================================
// 1. LOI BINOMIALE
// ==========================================================================

export interface BinomialParams {
  n: number;
  p: number;
  varName: string; // ex: "X"
}

function parseProbabilityValue(raw: string): number | null {
  const t = raw.trim();
  if (t.endsWith('%')) {
    const v = parseFloat(t.slice(0, -1).replace(',', '.'));
    return Number.isNaN(v) ? null : v / 100;
  }
  const fracMatch = t.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fracMatch) {
    return parseInt(fracMatch[1], 10) / parseInt(fracMatch[2], 10);
  }
  const v = parseFloat(t.replace(',', '.'));
  return Number.isNaN(v) ? null : v;
}

export function parseBinomialParams(fullText: string): BinomialParams | null {
  if (!/binomiale/i.test(fullText)) return null;

  const nMatch = fullText.match(/\bn\s*=\s*(\d+)/i);
  const pMatch = fullText.match(/\bp\s*=\s*(\d+(?:[.,]\d+)?%?|\d+\/\d+)/i);
  if (!nMatch || !pMatch) return null;

  const n = parseInt(nMatch[1], 10);
  const p = parseProbabilityValue(pMatch[1]);
  if (p === null || p < 0 || p > 1 || n <= 0 || n > 500) return null;

  const varMatch =
    fullText.match(/\b([A-Z])\s+(?:la\s+variable\s+al[ée]atoire|suit|suivant)/) ||
    fullText.match(/variable\s+al[ée]atoire\s+([A-Z])\b/i);
  const varName = varMatch ? varMatch[1].toUpperCase() : 'X';

  return { n, p, varName };
}

function binomialPmf(n: number, p: number, k: number): number {
  return combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

export function solveBinomialQuestion(q: ParsedQuestion, params: BinomialParams): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const { n, p, varName } = params;

  if (/esp[ée]rance|E\(/i.test(cleanQ)) {
    const e = n * p;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`E(${varName}) = n \\times p = ${n} \\times ${fmtProba(p)}`],
      finalAnswer: `E(${varName}) = ${fmtNum(e)}`,
      verificationPassed: true,
    };
  }

  if (/variance|V\(/i.test(cleanQ)) {
    const v = n * p * (1 - p);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`V(${varName}) = n \\times p \\times (1-p) = ${n} \\times ${fmtProba(p)} \\times ${fmtProba(1 - p)}`],
      finalAnswer: `V(${varName}) = ${fmtNum(v)}`,
      verificationPassed: true,
    };
  }

  if (/[ée]cart[\s-]?type|\\sigma/i.test(cleanQ)) {
    const v = n * p * (1 - p);
    const sigma = Math.sqrt(v);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`V(${varName}) = ${fmtNum(v)}`, `\\sigma(${varName}) = \\sqrt{V(${varName})} = \\sqrt{${fmtNum(v)}}`],
      finalAnswer: `\\sigma(${varName}) = ${fmtNum(sigma)}`,
      verificationPassed: true,
    };
  }

  const eqMatch = cleanQ.match(new RegExp(`${varName}\\s*=\\s*(\\d+)`, 'i'));
  const leMatch = cleanQ.match(new RegExp(`${varName}\\s*(?:\\\\le|<=|≤)\\s*(\\d+)`, 'i'));
  const geMatch = cleanQ.match(new RegExp(`${varName}\\s*(?:\\\\ge|>=|≥)\\s*(\\d+)`, 'i'));
  const ltMatch = cleanQ.match(new RegExp(`${varName}\\s*<\\s*(\\d+)`, 'i'));
  const gtMatch = cleanQ.match(new RegExp(`${varName}\\s*>\\s*(\\d+)`, 'i'));

  if (eqMatch) {
    const k = parseInt(eqMatch[1], 10);
    const proba = binomialPmf(n, p, k);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`P(${varName}=${k}) = \\binom{${n}}{${k}} \\times ${fmtProba(p)}^{${k}} \\times ${fmtProba(1 - p)}^{${n - k}}`],
      finalAnswer: `P(${varName}=${k}) = ${fmtProba(proba)}`,
      verificationPassed: true,
    };
  }

  if (leMatch || ltMatch) {
    const kRaw = parseInt((leMatch || ltMatch)![1], 10);
    const kMax = leMatch ? kRaw : kRaw - 1;
    let total = 0;
    for (let k = 0; k <= kMax; k++) total += binomialPmf(n, p, k);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`P(${varName}\\le${kMax}) = \\sum_{k=0}^{${kMax}} P(${varName}=k)`],
      finalAnswer: `${fmtProba(total)}`,
      verificationPassed: true,
    };
  }

  if (geMatch || gtMatch) {
    const kRaw = parseInt((geMatch || gtMatch)![1], 10);
    const kMin = geMatch ? kRaw : kRaw + 1;
    let total = 0;
    for (let k = kMin; k <= n; k++) total += binomialPmf(n, p, k);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`P(${varName}\\ge${kMin}) = \\sum_{k=${kMin}}^{${n}} P(${varName}=k)`],
      finalAnswer: `${fmtProba(total)}`,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 2. TIRAGE UNIQUE ÉQUIPROBABLE (URNE OU DÉ)
// ==========================================================================

export const COLOR_WORDS = ['rouge', 'rouges', 'noire', 'noires', 'noir', 'noirs', 'blanche', 'blanches', 'blanc', 'blancs', 'verte', 'vertes', 'vert', 'verts', 'bleue', 'bleues', 'bleu', 'bleus', 'jaune', 'jaunes'];

export function normalizeColor(word: string): string {
  const w = word.toLowerCase();
  if (w.startsWith('roug')) return 'rouge';
  if (w.startsWith('noir')) return 'noire';
  if (w.startsWith('blanc')) return 'blanche';
  if (w.startsWith('vert')) return 'verte';
  if (w.startsWith('bleu')) return 'bleue';
  if (w.startsWith('jaune')) return 'jaune';
  return w;
}

export interface UrnComposition {
  counts: Record<string, number>;
  total: number;
}

// Mots qui, juste avant "N boules COULEUR", indiquent qu'il s'agit d'un
// ÉVÉNEMENT visé par une question ("exactement 2 boules rouges", "au moins
// 2 boules rouges", "tirer 2 boules rouges"...) et NON d'une description de
// la composition de l'urne elle-même ("l'urne contient 5 boules rouges").
// PIÈGE DÉJÀ RENCONTRÉ : sans ce garde-fou, une question comme "obtenir
// exactement 2 boules rouges" est comptée EN PLUS des boules réellement
// présentes dans l'urne, ce qui fausse le total (bug de comptage similaire
// à celui déjà documenté pour rawStatement/contextText).
const COMPOSITION_EXCLUSION_WINDOW = 35;
const EVENT_PRECEDING_WORDS =
  /(?:exactement|au\s+moins|au\s+plus|aucune?|obtenir|tirer|tire|extraire|extrait|pr[ée]l[èe]ve[rz]?|choisir|choisit|sortir|sort)\s*$/i;

export function parseUrnComposition(fullText: string): UrnComposition | null {
  const colorPattern = new RegExp(`(\\d+)\\s*boules?\\s*(${COLOR_WORDS.join('|')})`, 'gi');
  const allMatches = Array.from(fullText.matchAll(colorPattern));
  const matches = allMatches.filter((m) => {
    const start = Math.max(0, (m.index ?? 0) - COMPOSITION_EXCLUSION_WINDOW);
    const preceding = fullText.slice(start, m.index ?? 0);
    return !EVENT_PRECEDING_WORDS.test(preceding);
  });
  if (matches.length < 2) return null; // il faut au moins 2 couleurs pour que ce soit un vrai tirage

  const counts: Record<string, number> = {};
  for (const m of matches) {
    const color = normalizeColor(m[2]);
    counts[color] = (counts[color] || 0) + parseInt(m[1], 10);
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (total === 0) return null;
  return { counts, total };
}

export function solveUrnQuestion(q: ParsedQuestion, urn: UrnComposition): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  const mentioned = Object.keys(urn.counts).find((color) => cleanQ.includes(color));
  if (!mentioned) return null;
  if (/succession|simultan[ée]ment|deux boules|trois boules|sans remise|avec remise/i.test(cleanQ)) {
    return null; // tirages multiples : hors périmètre de ce moteur
  }

  const favorable = urn.counts[mentioned];
  const proba = favorable / urn.total;
  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps: [
      `L'urne contient ${urn.total} boules au total, dont ${favorable} boules ${mentioned}.`,
      `P(${mentioned}) = \\dfrac{${favorable}}{${urn.total}}`,
    ],
    finalAnswer: `P = ${fmtProba(proba)} (soit ${favorable}/${urn.total})`,
    verificationPassed: true,
  };
}

// ==========================================================================
// 3. DÉ À n FACES
// ==========================================================================

export function parseDiceFaces(fullText: string): number | null {
  if (!/(?:^|[^a-zA-Zà-ÿÀ-Ÿ])d[ée]s?(?![a-zA-Zà-ÿÀ-Ÿ])/i.test(fullText)) return null;
  const facesMatch = fullText.match(/(\d+)\s*faces/i);
  return facesMatch ? parseInt(facesMatch[1], 10) : 6; // dé standard par défaut
}

function diceFavorableCount(faces: number, property: string, param?: number): number | null {
  const outcomes = Array.from({ length: faces }, (_, i) => i + 1);
  if (property === 'pair') return outcomes.filter((v) => v % 2 === 0).length;
  if (property === 'impair') return outcomes.filter((v) => v % 2 !== 0).length;
  if (property === 'multiple' && param) return outcomes.filter((v) => v % param === 0).length;
  if (property === 'superieur' && param !== undefined) return outcomes.filter((v) => v > param).length;
  if (property === 'superieur_egal' && param !== undefined) return outcomes.filter((v) => v >= param).length;
  if (property === 'inferieur' && param !== undefined) return outcomes.filter((v) => v < param).length;
  if (property === 'inferieur_egal' && param !== undefined) return outcomes.filter((v) => v <= param).length;
  if (property === 'egal' && param !== undefined) return outcomes.filter((v) => v === param).length;
  return null;
}

export function solveDiceQuestion(q: ParsedQuestion, faces: number): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  let property: string | null = null;
  let param: number | undefined;
  let label = '';

  if (/pair\b/.test(cleanQ) && !/impair/.test(cleanQ)) {
    property = 'pair';
    label = 'un nombre pair';
  } else if (/impair/.test(cleanQ)) {
    property = 'impair';
    label = 'un nombre impair';
  } else {
    const multipleMatch = cleanQ.match(/multiple de\s*(\d+)/);
    const supEgMatch = cleanQ.match(/sup[ée]rieur ou [ée]gal[e]? à\s*(\d+)/);
    const supMatch = cleanQ.match(/sup[ée]rieur[e]? à\s*(\d+)/);
    const infEgMatch = cleanQ.match(/inf[ée]rieur ou [ée]gal[e]? à\s*(\d+)/);
    const infMatch = cleanQ.match(/inf[ée]rieur[e]? à\s*(\d+)/);
    const egalMatch = cleanQ.match(/obtenir\s*(?:le\s*(?:nombre|chiffre))?\s*(\d+)/);

    if (multipleMatch) {
      property = 'multiple';
      param = parseInt(multipleMatch[1], 10);
      label = `un multiple de ${param}`;
    } else if (supEgMatch) {
      property = 'superieur_egal';
      param = parseInt(supEgMatch[1], 10);
      label = `un nombre supérieur ou égal à ${param}`;
    } else if (supMatch) {
      property = 'superieur';
      param = parseInt(supMatch[1], 10);
      label = `un nombre supérieur à ${param}`;
    } else if (infEgMatch) {
      property = 'inferieur_egal';
      param = parseInt(infEgMatch[1], 10);
      label = `un nombre inférieur ou égal à ${param}`;
    } else if (infMatch) {
      property = 'inferieur';
      param = parseInt(infMatch[1], 10);
      label = `un nombre inférieur à ${param}`;
    } else if (egalMatch) {
      property = 'egal';
      param = parseInt(egalMatch[1], 10);
      label = `le nombre ${param}`;
    }
  }

  if (!property) return null;
  const favorable = diceFavorableCount(faces, property, param);
  if (favorable === null) return null;

  const proba = favorable / faces;
  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps: [
      `Le dé possède ${faces} issues équiprobables (1 à ${faces}).`,
      `Nombre d'issues favorables pour obtenir ${label} : ${favorable}.`,
      `P = \\dfrac{${favorable}}{${faces}}`,
    ],
    finalAnswer: `P = ${fmtProba(proba)} (soit ${favorable}/${faces})`,
    verificationPassed: true,
  };
}

// ==========================================================================
// 4. POINT D'ENTRÉE
// ==========================================================================

// PIÈGE : "sans remise"/"simultanément" peuvent être annoncés UNE SEULE FOIS
// dans la phrase de contexte (ex: "On tire successivement et sans remise 3
// boules.") et ne sont alors PAS répétés dans chaque question ("exactement 2
// boules rouges ?"). Le garde-fou par question de solveUrnQuestion ne suffit
// donc pas seul : il faut aussi vérifier le CONTEXTE de l'exercice, sans
// quoi une question de tirage multiple serait traitée à tort comme un
// tirage unique (réponse fausse présentée comme sûre). Si le contexte
// indique un tirage multiple sans remise, ce moteur (tirage unique) doit
// s'effacer entièrement pour laisser la main à genericHypergeometricSolver.ts.
function contextIndicatesMultiDraw(fullText: string): boolean {
  return (
    /sans\s+remise/i.test(fullText) ||
    /avec\s+remise/i.test(fullText) ||
    /simultan[ée]ment/i.test(fullText) ||
    /en\s+m[êe]me\s+temps/i.test(fullText) ||
    // "successivement" tout seul, sans précision avec/sans remise, est
    // ambigu : mieux vaut refuser plutôt que de calculer une probabilité de
    // tirage unique sur un énoncé qui décrit peut-être un tirage multiple.
    /success/i.test(fullText)
  );
}

export function tryGenericProbabilityResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const binomial = parseBinomialParams(contextCombined);
  const multiDraw = contextIndicatesMultiDraw(contextCombined);
  const urn = !multiDraw ? parseUrnComposition(contextCombined) : null;
  const diceFaces = !binomial && !urn ? parseDiceFaces(contextCombined) : null;

  if (!binomial && !urn && !diceFaces) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    let result: SolvedQuestionResult | null = null;
    if (binomial) result = solveBinomialQuestion(q, binomial);
    else if (urn) result = solveUrnQuestion(q, urn);
    else if (diceFaces) result = solveDiceQuestion(q, diceFaces);

    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
