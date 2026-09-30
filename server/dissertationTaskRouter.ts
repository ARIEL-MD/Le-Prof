/**
 * Routeur déterministe des devoirs de dissertation (Français / Philosophie).
 * Objectif : reconnaître un vrai sujet de dissertation avant les moteurs de
 * recherche de notions, d'arguments ou de cours, sans transformer une simple
 * demande (« définition », « argument », « citation ») en dissertation.
 */

export type DissertationDiscipline = 'francais' | 'philosophie' | 'unknown';
export type DissertationRequestKind = 'solve' | 'method' | 'none';

export interface DissertationTaskRoute {
  isDissertation: boolean;
  discipline: DissertationDiscipline;
  kind: DissertationRequestKind;
  confidence: 'high' | 'medium' | 'low';
  signals: string[];
}

const NORMALIZE = (value: string) => String(value || '')
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const PHILO_TERMS = /\b(?:philosoph(?:ie|ique)?|conscience|inconscient|liberte|raison|verite|justice|droit|devoir|morale?|bonheur|autrui|desir|passion|travail|technique|nature|culture|art|religion|foi|science|connaissance|langage|existence|temps|societe|etat|politique|responsabilite|libre arbitre|metaphysique)\b/i;
const FR_TERMS = /\b(?:francais|lettres|litterature|roman|romanesque|romancier|poesie|poeme|poete|theatre|dramaturge|piece|comedie|tragedie|vers|lyrisme|realisme|naturalisme|symbolisme|negritude|oeuvre|auteur|personnage|narrateur|genre litteraire|fonction de la litterature|fonction du roman|fonction de la poesie|fonction du theatre)\b/i;

const METHOD_ONLY = /\b(?:methode|methodologie|comment faire|comment rediger|comment construire|etapes?|demarche|plan type|plan de dissertation|structure d['’]?une dissertation|rediger une dissertation)\b/i;
const DIRECT_SOLVE = /\b(?:fais|faire|redige|rediger|ecris|ecrire|traite|traiter|resous|resoudre|corrige|corriger|donne moi|donne-moi|produis|produire|compose|composer|developpe|developper)\b/i;
const EXPLICIT_DISSERTATION = /\b(?:dissertation|dissert(?:ation)?|sujet de dissertation|devoir de dissertation|devoir.*dissertation|dissertation.*(?:francais|litteraire|philosophique|philo))\b/i;
const ASSIGNMENT = /\b(?:devoir|sujet|epreuve|exercice|travail a faire|a rendre|a traiter|a rediger)\b/i;
const QUESTION_FORM = /(?:\?|\b(?:est[- ]ce que|peut[- ]on|peut on|doit[- ]on|doit on|faut[- ]il|faut il|peut[- ]il|peut il|doit[- ]il|doit il|est[- ]il|est il|est[- ]elle|est elle|dans quelle mesure|en quoi|pensez[- ]vous|selon vous|discuter|montrez|montre)\b)/i;

export function detectDissertationTask(query: string, explicitDiscipline?: string, subjectContext?: string): DissertationTaskRoute {
  const raw = `${query || ''} ${subjectContext || ''}`.trim();
  const q = NORMALIZE(raw);
  const explicit = NORMALIZE(explicitDiscipline || '');
  const signals: string[] = [];

  const explicitPhilo = /\b(?:philosophie|philo|philosophique)\b/i.test(explicit) || /\b(?:devoir|sujet|dissertation)\s+(?:de\s+)?(?:philosophie|philo)\b/i.test(q);
  const explicitFrancais = /\b(?:francais|lettres|litterature)\b/i.test(explicit) || /\b(?:devoir|sujet|dissertation)\s+(?:de\s+)?(?:francais|litteraire|lettres?)\b/i.test(q);

  // Les demandes documentaires courtes restent hors du routeur de dissertation.
  const directKnowledge = /\b(?:definition|definir|signification|sens de|cours|notion|notions|argument|arguments|citation|citations|auteur|oeuvre|exemple|exemples|causes?|consequences?|resume|resume de|fiche|date|dates)\b/i.test(q);
  const hasExplicitDissertation = EXPLICIT_DISSERTATION.test(q);
  const methodOnly = METHOD_ONLY.test(q) && !DIRECT_SOLVE.test(q);

  if (methodOnly) {
    return { isDissertation: false, discipline: 'unknown', kind: 'method', confidence: 'high', signals: ['demande de méthodologie'] };
  }

  let discipline: DissertationDiscipline = 'unknown';
  if (explicitPhilo) { discipline = 'philosophie'; signals.push('discipline philosophie explicite'); }
  else if (explicitFrancais) { discipline = 'francais'; signals.push('discipline français explicite'); }
  else if (PHILO_TERMS.test(q) && !FR_TERMS.test(q)) { discipline = 'philosophie'; signals.push('marqueurs philosophiques'); }
  else if (FR_TERMS.test(q) && !PHILO_TERMS.test(q)) { discipline = 'francais'; signals.push('marqueurs littéraires'); }
  else if (PHILO_TERMS.test(q) && FR_TERMS.test(q)) {
    // Les genres littéraires (poésie, roman, théâtre...) sont des marqueurs
    // plus spécifiques du devoir de Français que des mots transversaux comme
    // « langage » ou « art », qui peuvent aussi apparaître en philosophie.
    const literaryGenre = /\b(?:roman|romanesque|poesie|poeme|poete|theatre|dramaturge|piece|comedie|tragedie|vers|lyrisme)\b/i.test(q);
    discipline = explicitPhilo ? 'philosophie' : explicitFrancais ? 'francais' : literaryGenre ? 'francais' : 'philosophie';
    signals.push(literaryGenre ? 'genre littéraire discriminant' : 'notion philosophique discriminante');
  }

  const questionLike = QUESTION_FORM.test(q);
  const hasAssignment = ASSIGNMENT.test(q);
  const hasDirectSolve = DIRECT_SOLVE.test(q);

  // « argument sur la poésie », « définition de mythe », etc. ne sont jamais
  // considérés comme des devoirs de dissertation sans marqueur de devoir explicite.
  if (directKnowledge && !hasExplicitDissertation && !hasAssignment && !hasDirectSolve) {
    return { isDissertation: false, discipline, kind: 'none', confidence: 'high', signals: ['demande documentaire directe'] };
  }

  // Une vraie dissertation est certaine si elle est explicitement nommée.
  if (hasExplicitDissertation) {
    if (discipline === 'unknown') {
      discipline = FR_TERMS.test(q) ? 'francais' : PHILO_TERMS.test(q) ? 'philosophie' : 'unknown';
    }
    if (discipline !== 'unknown') signals.push('mot dissertation détecté');
    return {
      isDissertation: discipline !== 'unknown',
      discipline,
      kind: methodOnly ? 'method' : 'solve',
      confidence: discipline !== 'unknown' ? 'high' : 'low',
      signals
    };
  }

  // « devoir/sujet » + formulation interrogative + marqueurs de matière = devoir.
  if (discipline !== 'unknown' && (hasAssignment || hasDirectSolve) && questionLike) {
    signals.push('devoir/sujet + formulation problématique');
    return { isDissertation: true, discipline, kind: 'solve', confidence: 'high', signals };
  }

  // Sans mot « devoir », une question problématique complète peut être une
  // dissertation, mais seulement avec plusieurs marqueurs disciplinaires forts.
  const strongFrench = (q.match(/\b(?:poesie|poeme|poete|roman|theatre|litterature|oeuvre|auteur)\b/gi) || []).length >= 1;
  const strongPhilo = (q.match(/\b(?:philosoph(?:ie|ique)?|conscience|inconscient|liberte|raison|verite|justice|droit|devoir|morale?|bonheur|autrui|desir|passion|travail|technique|nature|culture|art|religion|foi|science|connaissance|langage|existence|temps|societe|etat|politique|responsabilite|libre arbitre|metaphysique)\b/gi) || []).length >= 1;
  if (questionLike && ((discipline === 'francais' && strongFrench) || (discipline === 'philosophie' && strongPhilo)) && q.split(/\s+/).length >= 4) {
    signals.push('sujet interrogatif disciplinaire');
    return { isDissertation: true, discipline, kind: 'solve', confidence: 'medium', signals };
  }

  return { isDissertation: false, discipline, kind: 'none', confidence: 'low', signals };
}
