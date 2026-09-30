import { mathsTleAKnowledgeBase } from '../../mathsTleAKnowledgeBase';
import { ChapterId, MathsClassifierResult } from './types';

const CHAPTER_KEYWORDS: Record<ChapterId, { keywords: RegExp[]; priority: number }> = {
  ch8: {
    // Statistiques
    keywords: [
      /statistiqu/i,
      /droite d['’]ajustement/i,
      /m[ée]thode de mayer/i,
      /point moyen\s*G/i,
      /covariance/i,
      /correlat|corr[ée]lation/i,
      /nuage de points/i,
      /s[ée]rie (?:double|statistique|marginale)/i,
      /classe modale/i,
      /effectif(?:s)? cumul[ée]/i,
      /\bX(?:\s*\([^\)]*\))?\s*[:\s]?\s*[0-9\s,\.\-]+?\s*\bY\b/i,
    ],
    priority: 10,
  },
  ch9: {
    // Probabilités
    keywords: [
      /probabilit[ée]/i,
      /d[ée]nombrement/i,
      /combinaison(?:s)?|C_\d+\^\d+/i,
      /arrangement(?:s)?|A_\d+\^\d+/i,
      /tirage(?:s)? (?:simultan[ée]|successif|avec remise|sans remise)/i,
      /urne|boules? (?:blanches?|noires?|rouges?)/i,
      /\bp-listes?\b/i,
      /cardinal|card\(\s*[\Omega A-Z]\s*\)/i,
      /[ée]v[ée]nement (?:contraire|incompatible|certain|impossible)/i,
    ],
    priority: 9,
  },
  ch6: {
    // Logarithme népérien
    keywords: [
      /\bln\s*\(/i,
      /\bln\s*x\b/i,
      /logarithme\s*n[ée]p[ée]rien/i,
      /fonction\s*ln\b/i,
      /D_ln/i,
    ],
    priority: 8,
  },
  ch7: {
    // Fonctions exponentielles
    keywords: [
      /e\^/i,
      /\bexp\s*\(/i,
      /exponentielle/i,
      /e\^\{\s*2x\s*\}|e\^\(2x\)/i,
      /e\^x/i,
    ],
    priority: 8,
  },
  ch5: {
    // Étude de fonctions
    keywords: [
      /[ée]tude (?:compl[èe]te )?(?:de )?fonction/i,
      /[ée]tudier (?:la )?fonction/i,
      /tableau de variation(?:s)?/i,
      /asymptote(?:s)? (?:horizontale|verticale|oblique)/i,
      /branche(?:s)? infinie(?:s)?/i,
      /parit[ée]|sym[ée]trie/i,
    ],
    priority: 7,
  },
  ch4: {
    // Dérivée et primitives
    keywords: [
      /d[ée]riv[ée]e|d[ée]river/i,
      /nombre d[ée]riv[ée]/i,
      /[ée]quation de la tangente|tangente en/i,
      /primitive(?:s)?|int[ée]grale/i,
    ],
    priority: 6,
  },
  ch3: {
    // Limites et continuité
    keywords: [
      /limite(?:s)?\s*(?:en|quand|\b)/i,
      /\blim\b.*x\s*->/i,
      /continuit[ée]|continue en/i,
      /forme ind[ée]termin[ée]e/i,
    ],
    priority: 6,
  },
  ch2: {
    // Équations, inéquations et systèmes
    keywords: [
      /second degr[ée]|trin[ôo]me/i,
      /discriminant|\bdelta\b|\\Delta/i,
      /syst[èe]me (?:lin[ée]aire|de cramer|2x2|3x3|\{)/i,
      /in[ée]quation/i,
      /r[ée]soudre.*(?:x\^2|x²|ax\+b)/i,
      /tableau de signe(?:s)?/i,
    ],
    priority: 5,
  },
  ch1: {
    // Nombres réels
    keywords: [
      /valeur absolue|\|.*\|/i,
      /identit[ée](?:s)? remarquable(?:s)?/i,
      /d[ée]velopper|factoriser/i,
      /notation scientifique/i,
      /centre.*rayon|pr[ée]cision.*encadrement/i,
      /intervalles?|intersection|r[ée]union/i,
      /racine carr[ée]e|puissances?/i,
    ],
    priority: 4,
  },
};

export function classifyMathsTleA(statement: string): MathsClassifierResult {
  const s = statement.trim();
  const matchedKeywords: string[] = [];

  let bestChapter: ChapterId | undefined;
  let bestScore = 0;

  for (const [chapterId, conf] of Object.entries(CHAPTER_KEYWORDS) as [ChapterId, { keywords: RegExp[]; priority: number }][]) {
    let matchCount = 0;
    for (const regex of conf.keywords) {
      if (regex.test(s)) {
        matchCount += 1;
        matchedKeywords.push(regex.source);
      }
    }
    if (matchCount > 0) {
      const score = matchCount * 10 + conf.priority;
      if (score > bestScore) {
        bestScore = score;
        bestChapter = chapterId;
      }
    }
  }

  const isMathGeneral = /math|calcul|r[ée]soudre|[ée]quation|fonction|statistique|probabilit[ée]|limite|d[ée]riv|primitive|tangente|x\^|x²|\+|-|\/|\*|=|<|>/i.test(s);
  const isMathsTleA = !!bestChapter || isMathGeneral;

  const chapterObj = mathsTleAKnowledgeBase.chapters.find((c: any) => c.id === bestChapter);

  return {
    isMathsTleA,
    chapterId: bestChapter,
    chapterTitle: chapterObj ? chapterObj.title : 'Mathématiques Terminale A',
    exerciseType: chapterObj ? chapterObj.title : 'Exercice de Mathématiques',
    confidence: bestScore > 0 ? Math.min(1.0, 0.7 + (bestScore / 100)) : 0.5,
    matchedKeywords,
    relevantFormulas: chapterObj ? chapterObj.formulas : [],
    relevantMethods: chapterObj ? chapterObj.methods : [],
  };
}
