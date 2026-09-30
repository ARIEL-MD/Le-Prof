import { MATHS_MPSI_REFERENCE } from './mathsMpsiReferenceBase';
import { CourseConceptFormula, CourseSearchResult } from '../types';

const STOP = new Set(['les','des','une','dans','pour','avec','sur','par','est','sont','que','qui','du','de','la','le','et','ou','un','au','aux','en','a','à','ce','cette','ces','comment','cours','notion','notions','math','maths','mathematiques','mathématiques']);

function norm(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9+\-*/^=() .]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function tokens(s: string): string[] {
  return [...new Set(norm(s).split(/\s+/).filter(t => t.length >= 2 && !STOP.has(t)))];
}

const ALIASES: Record<string,string[]> = {
  derivee: ['derivation','derive','derivees','fonction derivable'],
  limite: ['limites','continuite','continuite'],
  integral: ['integration','integrales','primitive','primitives'],
  equation: ['equations','inequation','inequations'],
  complexe: ['complexes','affixe','module','argument'],
  matrice: ['matrices','determinant','determinants','rang','systemes lineaires'],
  probabilite: ['probabilites','combinatoire','variable aleatoire'],
  statistique: ['statistiques','moyenne','variance','ecart type'],
  geometrie: ['geometrie','conique','coniques','vecteur','produit scalaire'],
  suite: ['suites','convergence','recurrence'],
  polynome: ['polynomes','factorisation','racines'],
  logarithme: ['logarithme','logarithmes','ln'],
  exponentielle: ['exponentielles','exp'],
  trigonometrie: ['trigonometrie','sinus','cosinus','tangente'],
  taylor: ['developpement limite','taylor','dl'],
  differentielle: ['equation differentielle','equations differentielles'],
};

function expandedTokens(q: string): string[] {
  const base = tokens(q);
  const out = new Set(base);
  for (const [k, vals] of Object.entries(ALIASES)) {
    if (base.includes(k) || vals.some(v => norm(q).includes(v))) {
      out.add(k);
      vals.forEach(v => tokens(v).forEach(t => out.add(t)));
    }
  }
  return [...out];
}

const INVERTED = new Map<string, Set<number>>();
for (let i = 0; i < MATHS_MPSI_REFERENCE.length; i++) {
  const page = MATHS_MPSI_REFERENCE[i];
  const pageTokens = new Set(tokens(`${page.chapter} ${page.headings.join(' ')} ${page.text}`));
  for (const token of pageTokens) {
    const bucket = INVERTED.get(token) || new Set<number>();
    bucket.add(i);
    INVERTED.set(token, bucket);
  }
}

export function searchMathsReference(query: string, limit = 6): CourseSearchResult | null {
  const qTokens = expandedTokens(query);
  if (!qTokens.length) return null;

  const candidateIds = new Set<number>();
  for (const token of qTokens) {
    const bucket = INVERTED.get(token);
    if (bucket) for (const id of bucket) candidateIds.add(id);
  }
  if (!candidateIds.size) return null;

  const ranked = [...candidateIds].map(i => MATHS_MPSI_REFERENCE[i]).map(page => {
    const hay = norm(`${page.chapter} ${page.headings.join(' ')} ${page.text}`);
    let score = 0;
    for (const token of qTokens) {
      if (hay.includes(token)) score += token.length >= 7 ? 3 : 2;
      if (norm(page.chapter).includes(token)) score += 5;
      if (page.headings.some(h => norm(h).includes(token))) score += 4;
    }
    // Bonus for multiple independent matches: avoids returning generic pages.
    const matched = qTokens.filter(t => hay.includes(t)).length;
    score += Math.min(matched, 5) * 2;
    return { page, score };
  }).filter(x => x.score > 0).sort((a,b) => b.score - a.score || a.page.page - b.page.page);

  if (!ranked.length) return null;
  const top = ranked.slice(0, limit);
  const chapter = top[0].page.chapter;
  const snippets = top.map(({page}) => `Page ${page.page} — ${page.chapter}\n${page.headings.length ? page.headings.join(' | ') + '\n' : ''}${page.text}`).join('\n\n---\n\n');

  const concepts: CourseConceptFormula[] = top.slice(0, 5).map(({page}, i) => ({
    name: `${i + 1}. ${page.chapter} — p. ${page.page}`,
    formulaOrRule: page.headings.join(' | ') || 'Voir l’extrait du cours correspondant.',
    explanation: page.text.slice(0, 1100),
    contextOrApplication: 'Extrait du cours de référence MPSI utilisé pour guider la recherche et la méthode de résolution.'
  }));

  return {
    query,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques — Référence MPSI',
    cycle: 'superieur_universite',
    level: 'superieur',
    levelLabel: 'MPSI / 1re année — cours de référence',
    chapterTitle: `Mathématiques : ${chapter}`,
    definitionAndScope: `Recherche locale dans le cours de mathématiques MPSI fourni. Les passages les plus pertinents pour « ${query} » sont sélectionnés par correspondance multi-termes, avec prise en compte de synonymes mathématiques.`,
    directContent: snippets,
    fullCourseContent: snippets,
    isDirectAnswer: true,
    coreConceptsAndFormulas: concepts,
    stepByStepMethod: [
      { stepNumber: 1, title: 'Identifier la notion', whatToDo: 'Repérer le chapitre et les propriétés correspondant exactement à la question.', reflexOrTip: 'Ne pas appliquer une formule sans vérifier ses conditions.' },
      { stepNumber: 2, title: 'Choisir la méthode', whatToDo: 'Comparer l’énoncé aux méthodes et exemples du cours correspondant.', reflexOrTip: 'Conserver les hypothèses et le domaine de validité.' },
      { stepNumber: 3, title: 'Vérifier le résultat', whatToDo: 'Contrôler le calcul par substitution, dérivation, ordre de grandeur ou propriété adaptée.', reflexOrTip: 'Une solution numérique doit être vérifiée avant d’être présentée comme définitive.' }
    ],
    solvedExample: { problemStatement: query, solutionStepByStep: snippets.slice(0, 2200), finalAnswer: 'Résultat guidé par le cours de référence sélectionné.' },
    classicExamTraps: ['Appliquer une formule sans vérifier ses hypothèses.', 'Confondre deux notions proches.', 'Sauter les étapes de vérification.'],
    selfCheckChecklist: ['La notion recherchée est-elle la bonne ?', 'Les hypothèses sont-elles satisfaites ?', 'Le résultat est-il vérifié ?'],
    quickRevisionMemo: top.slice(0,3).map(x => `${x.page.chapter} (p. ${x.page.page})`).join(' • '),
    certificationNote: 'Index local construit à partir du PDF de cours de mathématiques fourni dans la conversation.',
    relatedCourseTitle: chapter,
  };
}
