/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES TIRAGES MULTIPLES SANS REMISE
 * ==================================================================
 *
 * Complète genericProbabilitySolver.ts (limité au tirage UNIQUE) en
 * couvrant le cas du tirage de k boules (k >= 2) dans une urne, SANS
 * REMISE (tirage simultané, ou tirage successif explicitement "sans
 * remise") : loi hypergéométrique.
 *
 * Comme pour le tirage unique, un énoncé de probabilités est rédigé en
 * langage naturel et il n'existe pas de notation universelle à parser.
 * Ce moteur reste donc VOLONTAIREMENT restreint aux cas où l'extraction
 * peut être fiable et vérifiable :
 *
 *  - L'urne doit avoir une composition explicite par couleur (au moins
 *    deux couleurs, comme pour le tirage unique).
 *  - Le nombre de boules tirées k doit être identifiable sans ambiguïté
 *    près d'un verbe de tirage ("tire", "prélève", "extrait"...).
 *  - Le caractère SANS REMISE doit être explicite dans l'énoncé
 *    ("sans remise", "simultanément", "en même temps") : si l'énoncé ne
 *    précise rien, on refuse de deviner et on renvoie null (l'avec-remise
 *    n'est pas couvert par ce moteur).
 *  - Chaque question doit correspondre à un type d'événement reconnu SANS
 *    ambiguïté :
 *      • "exactement m boules de couleur C"
 *      • "aucune boule de couleur C" (m = 0)
 *      • "au moins m boules de couleur C"
 *      • "au plus m boules de couleur C"
 *      • "toutes les boules tirées sont de couleur C" (m = k)
 *      • "les boules tirées sont de la même couleur" (sans couleur
 *        précisée : somme, sur chaque couleur C, de P(les k tirées = C),
 *        événements deux à deux incompatibles donc la somme est exacte)
 *      • "au moins une boule de chaque couleur" — UNIQUEMENT si l'urne
 *        contient exactement 2 couleurs (sinon calcul par
 *        inclusion-exclusion multi-couleurs jugé trop risqué à généraliser
 *        de façon fiable ; on refuse plutôt que d'improviser une formule).
 *
 * Toute question qui ne correspond à aucun de ces schémas fait échouer le
 * moteur pour l'exercice entier (retour null), conformément au contrat.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';
import { UrnComposition, parseUrnComposition, COLOR_WORDS } from './genericProbabilitySolver';

// ==========================================================================
// OUTILS NUMÉRIQUES
// ==========================================================================

/** Coefficient binomial C(n, k), calculé par produit multiplicatif (stable
 *  numériquement pour les tailles rencontrées dans un exercice scolaire,
 *  contrairement à une implémentation naïve via factorielle). */
function nCr(n: number, k: number): number {
  if (k < 0 || k > n || n < 0) return 0;
  const kEff = Math.min(k, n - k);
  let result = 1;
  for (let i = 0; i < kEff; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return Math.round(result);
}

/** Probabilité hypergéométrique P(X = m) pour un tirage de k boules sans
 *  remise dans une population de taille N contenant K éléments "succès". */
function hyperPmf(N: number, K: number, k: number, m: number): number | null {
  if (m < 0 || m > k) return 0;
  if (m > K) return 0;
  if (k - m > N - K) return 0;
  if (k - m < 0) return 0;
  const denom = nCr(N, k);
  if (denom === 0) return null;
  return (nCr(K, m) * nCr(N - K, k - m)) / denom;
}

function fmtProba(p: number): string {
  return `${Math.round(p * 1e6) / 1e6}`;
}

// ==========================================================================
// EXTRACTION : NOMBRE DE BOULES TIRÉES + CARACTÈRE "SANS REMISE"
// ==========================================================================

const NUMBER_WORDS: Record<string, number> = {
  un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10,
};

const NUM_WORD_PATTERN = '(?:\\d+|un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix)';

function parseCountWord(raw: string): number | null {
  const t = raw.trim().toLowerCase();
  if (/^\d+$/.test(t)) return parseInt(t, 10);
  if (t in NUMBER_WORDS) return NUMBER_WORDS[t];
  return null;
}

const DRAW_VERB_PATTERN =
  '(?:tire|tirer|extrait|extraire|pr[ée]l[èe]ve|pr[ée]lever|choisit|choisir|sort|sortir|prend|prendre)';

/**
 * Identifie le nombre k de boules tirées, en cherchant "<verbe de tirage> ...
 * <nombre> boules" à condition que ce nombre ne soit PAS directement suivi
 * d'un nom de couleur (ce qui indiquerait une description de composition
 * d'urne, comme "3 boules rouges", et non l'action de tirage elle-même).
 */
function parseDrawCount(fullText: string): number | null {
  const re = new RegExp(
    `${DRAW_VERB_PATTERN}[^.]{0,60}?(${NUM_WORD_PATTERN})\\s+boules?(?!\\s*(?:${COLOR_WORDS.join('|')}))`,
    'i'
  );
  const m = fullText.match(re);
  if (!m) return null;
  return parseCountWord(m[1]);
}

/**
 * Le tirage est-il explicitement SANS remise ? On exige un indice non
 * ambigu ("sans remise", tirage "simultané", ou "en même temps") plutôt que
 * de déduire ce caractère d'un simple "successivement" (qui, seul, ne
 * précise pas si les boules sont remises dans l'urne ou non).
 */
function isExplicitlyWithoutReplacement(fullText: string): boolean {
  return (
    /sans\s+remise/i.test(fullText) ||
    /simultan[ée]ment/i.test(fullText) ||
    /en\s+m[êe]me\s+temps/i.test(fullText)
  );
}

/** Présence explicite d'un tirage AVEC remise : si détecté, on n'active
 *  jamais ce moteur (hors périmètre), même si "sans remise" apparaît par
 *  ailleurs de façon incohérente dans l'énoncé (mieux vaut refuser que
 *  deviner). */
function mentionsWithReplacement(fullText: string): boolean {
  return /avec\s+remise/i.test(fullText);
}

// ==========================================================================
// EXTRACTION : ÉVÉNEMENT VISÉ PAR UNE QUESTION
// ==========================================================================

function findColorMentioned(text: string, colors: string[]): string | null {
  const lower = text.toLowerCase();
  for (const c of colors) {
    if (lower.includes(c)) return c;
  }
  return null;
}

type DrawEventKind = 'exact' | 'at_least' | 'at_most' | 'all_k' | 'same_color_generic' | 'one_of_each_two_colors';

interface DrawEvent {
  kind: DrawEventKind;
  color?: string;
  count?: number; // pour exact / at_least / at_most
}

function detectDrawEvent(cleanQuestionText: string, colors: string[]): DrawEvent | null {
  const cleanQ = cleanQuestionText.toLowerCase();
  const colorMentioned = findColorMentioned(cleanQ, colors);

  if (/m[êe]me\s+couleur/i.test(cleanQ) && !colorMentioned) {
    return { kind: 'same_color_generic' };
  }

  if (colorMentioned) {
    const exactM = cleanQ.match(new RegExp(`exactement\\s+(${NUM_WORD_PATTERN})\\s+boules?`, 'i'));
    if (exactM) {
      const count = parseCountWord(exactM[1]);
      if (count === null) return null;
      return { kind: 'exact', color: colorMentioned, count };
    }

    if (/aucune\s+boule|pas\s+de\s+boule|z[ée]ro\s+boule/i.test(cleanQ)) {
      return { kind: 'exact', color: colorMentioned, count: 0 };
    }

    const atLeastM = cleanQ.match(new RegExp(`au\\s+moins\\s+(${NUM_WORD_PATTERN})\\s+boules?`, 'i'));
    if (atLeastM) {
      const count = parseCountWord(atLeastM[1]);
      if (count === null) return null;
      return { kind: 'at_least', color: colorMentioned, count };
    }

    const atMostM = cleanQ.match(new RegExp(`au\\s+plus\\s+(${NUM_WORD_PATTERN})\\s+boules?`, 'i'));
    if (atMostM) {
      const count = parseCountWord(atMostM[1]);
      if (count === null) return null;
      return { kind: 'at_most', color: colorMentioned, count };
    }

    if (/toutes?\s+(?:les\s+)?boules?/i.test(cleanQ) || /m[êe]me\s+couleur/i.test(cleanQ)) {
      return { kind: 'all_k', color: colorMentioned };
    }

    // Formulation directe sans qualificatif explicite : "obtenir deux boules
    // rouges", "tirer 2 boules bleues"... Le nombre annoncé juste avant
    // "boules <couleur>" est alors le nombre exact de boules de cette
    // couleur visé par l'événement (PIÈGE DÉJÀ RENCONTRÉ : ce cas basique
    // n'était pas couvert et faisait échouer tout l'exercice).
    const directM = cleanQ.match(new RegExp(`(${NUM_WORD_PATTERN})\\s+boules?\\s+${colorMentioned}`, 'i'));
    if (directM) {
      const count = parseCountWord(directM[1]);
      if (count === null) return null;
      return { kind: 'exact', color: colorMentioned, count };
    }

    return null; // couleur mentionnée mais formulation non reconnue avec certitude
  }

  if (/chaque\s+couleur/i.test(cleanQ) && colors.length === 2) {
    return { kind: 'one_of_each_two_colors' };
  }

  return null;
}

// ==========================================================================
// RÉSOLUTION D'UNE QUESTION
// ==========================================================================

function solveDrawEvent(
  q: ParsedQuestion,
  urn: UrnComposition,
  k: number,
  event: DrawEvent
): SolvedQuestionResult | null {
  const N = urn.total;

  if (event.kind === 'exact' || event.kind === 'all_k') {
    const color = event.color!;
    const K = urn.counts[color];
    const m = event.kind === 'all_k' ? k : event.count!;
    const proba = hyperPmf(N, K, k, m);
    if (proba === null) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: [
        `L'urne contient ${N} boules au total, dont ${K} boules ${color}. On tire ${k} boules simultanément (sans remise).`,
        `P(${m} boule${m > 1 ? 's' : ''} ${color}) = \\dfrac{\\binom{${K}}{${m}} \\times \\binom{${N - K}}{${k - m}}}{\\binom{${N}}{${k}}}`,
      ],
      finalAnswer: `P = ${fmtProba(proba)}`,
      verificationPassed: true,
    };
  }

  if (event.kind === 'at_least' || event.kind === 'at_most') {
    const color = event.color!;
    const K = urn.counts[color];
    const mBound = event.count!;
    const mMin = event.kind === 'at_least' ? mBound : 0;
    const mMax = event.kind === 'at_least' ? k : mBound;

    let total = 0;
    for (let m = mMin; m <= mMax; m++) {
      const p = hyperPmf(N, K, k, m);
      if (p === null) return null;
      total += p;
    }

    const label = event.kind === 'at_least' ? 'au moins' : 'au plus';
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: [
        `L'urne contient ${N} boules au total, dont ${K} boules ${color}. On tire ${k} boules simultanément (sans remise).`,
        `P(${label} ${mBound} boule${mBound > 1 ? 's' : ''} ${color}) = \\displaystyle\\sum_{m=${mMin}}^{${mMax}} \\dfrac{\\binom{${K}}{m} \\times \\binom{${N - K}}{${k}-m}}{\\binom{${N}}{${k}}}`,
      ],
      finalAnswer: `P = ${fmtProba(total)}`,
      verificationPassed: true,
    };
  }

  if (event.kind === 'same_color_generic') {
    const colors = Object.keys(urn.counts);
    let total = 0;
    const terms: string[] = [];
    for (const color of colors) {
      const K = urn.counts[color];
      const p = hyperPmf(N, K, k, k);
      if (p === null) return null;
      total += p;
      terms.push(`P(${k} boules ${color}) = ${fmtProba(p)}`);
    }
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: [
        `L'urne contient ${N} boules au total (${colors.map((c) => `${urn.counts[c]} ${c}`).join(', ')}). On tire ${k} boules simultanément (sans remise).`,
        `Les événements "les ${k} boules sont ${colors[0]}", "... ${colors.slice(1).join('", "... ')}" sont deux à deux incompatibles : on additionne leurs probabilités.`,
        ...terms,
      ],
      finalAnswer: `P = ${fmtProba(total)}`,
      verificationPassed: true,
    };
  }

  if (event.kind === 'one_of_each_two_colors') {
    const colors = Object.keys(urn.counts);
    if (colors.length !== 2) return null;
    const [c1, c2] = colors;
    const pAll1 = hyperPmf(N, urn.counts[c1], k, k);
    const pAll2 = hyperPmf(N, urn.counts[c2], k, k);
    if (pAll1 === null || pAll2 === null) return null;
    const proba = 1 - pAll1 - pAll2;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: [
        `L'urne contient ${N} boules au total (${urn.counts[c1]} ${c1}, ${urn.counts[c2]} ${c2}). On tire ${k} boules simultanément (sans remise).`,
        `P(au moins une boule de chaque couleur) = 1 - P(${k} boules ${c1}) - P(${k} boules ${c2})`,
        `= 1 - ${fmtProba(pAll1)} - ${fmtProba(pAll2)}`,
      ],
      finalAnswer: `P = ${fmtProba(proba)}`,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// POINT D'ENTRÉE
// ==========================================================================

export function tryGenericHypergeometricResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (mentionsWithReplacement(contextCombined)) return null; // hors périmètre : avec remise

  const urn = parseUrnComposition(contextCombined);
  if (!urn) return null;

  const k = parseDrawCount(contextCombined);
  if (k === null || k < 2) return null; // le tirage unique est couvert par genericProbabilitySolver.ts

  if (!isExplicitlyWithoutReplacement(contextCombined)) return null; // caractère sans-remise non confirmé : on refuse de deviner

  if (k > urn.total) return null; // énoncé incohérent

  const colors = Object.keys(urn.counts);

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const event = detectDrawEvent(q.cleanText, colors);
    if (!event) return null;
    const result = solveDrawEvent(q, urn, k, event);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
