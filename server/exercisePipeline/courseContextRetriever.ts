import { getAcademicCourseResult } from '../../src/utils/courseKnowledgeBase';
import { mathsTleAKnowledgeBase } from '../../mathsTleAKnowledgeBase';
import { mathsTleCKnowledgeBase } from '../../mathsTleCKnowledgeBase';
import { mathsTleDKnowledgeBase } from '../../mathsTleDKnowledgeBase';
import { maths6eKnowledgeBase } from '../../maths6eKnowledgeBase';
import { searchMathsReference } from '../../src/data/mathsReferenceSearch';

export interface RetrievedCourseContext {
  courseTitle: string;
  chapterName: string;
  relevantRules: string[];
  pedagogicalTips: string[];
}

/**
 * Recherche les fiches de cours officielles de LE PROF pertinentes pour un ensemble de concepts et un énoncé.
 */
export function retrieveRelevantCourseContext(
  statement: string,
  concepts: string[],
  discipline: string = 'Mathématiques',
  level: string = 'Terminale'
): RetrievedCourseContext {
  const rules: string[] = [];
  const tips: string[] = [];
  let courseTitle = 'Programme Officiel de Mathématiques (Côte d\'Ivoire)';
  let chapterName = 'Méthodes générales';

  const lower = statement.toLowerCase();

  // Le corpus MPSI fourni enrichit les règles et méthodes lorsque l’énoncé dépasse
  // les fiches lycée déjà présentes. On ne remplace pas les règles spécialisées :
  // on ajoute seulement les passages de cours les plus proches.
  const reference = searchMathsReference(statement, 3);
  if (reference?.directContent) {
    rules.push(...reference.coreConceptsAndFormulas.slice(0, 3).map(c => c.formulaOrRule));
    tips.push('Comparer la question avec les hypothèses et méthodes du chapitre de référence avant de calculer.');
  }

  // 0. Suites Numériques
  const isSequenceStatement = concepts.includes('sequence') || /suite|u_\{?n\+1\}?|u_\{?n\}?|v_\{?n\+1\}?|v_\{?n\}?|u[₀₁₂₃₄₅₆₇₈₉]|u[ₙ]|r[ée]currence|\b[uvw][\s_]*0\s*=/i.test(lower);
  if (isSequenceStatement) {
    courseTitle = 'Chapitre 7 : Suites Numériques';
    chapterName = 'Suites définies par récurrence et convergence';
    rules.push('Pour une suite récurrente u_{n+1} = f(u_n), les termes se calculent par substitution successive : u_1 = f(u_0), u_2 = f(u_1), etc.');
    rules.push('Pour étudier le sens de variation d\'une suite (u_n), on étudie le signe de la différence u_{n+1} - u_n pour tout n ∈ ℕ.');
    rules.push('Une suite géométrique de raison q vérifie v_{n+1} = q × v_n et son terme général est v_n = v_0 × q^n.');
    rules.push('Si -1 < q < 1, alors lim_{n→+∞} q^n = 0.');
    tips.push('Calculer chaque terme intermédiaire sous forme de fraction irréductible exacte.');
    tips.push('Pour une suite, n est un entier naturel (n ∈ ℕ) ; il n\'y a pas d\'asymptote géométrique de courbe continue.');
    return { courseTitle, chapterName, relevantRules: rules, pedagogicalTips: tips };
  }

  // 1. Second degré / Trinôme
  if (concepts.includes('factorisation') || concepts.includes('equation') || concepts.includes('sign_table') || lower.includes('x²') || lower.includes('x^2') || lower.includes('discriminant')) {
    courseTitle = 'Chapitre 2 : Équations, Inéquations et Trinôme du Second Degré';
    chapterName = 'Trinôme du second degré ax² + bx + c';
    rules.push('Discriminant : Δ = b² - 4ac');
    rules.push('Si Δ > 0, deux racines réelles distinctes : x1 = (-b - √Δ) / (2a) et x2 = (-b + √Δ) / (2a)');
    rules.push('Forme factorisée : f(x) = a(x - x1)(x - x2)');
    rules.push('Signe de ax² + bx + c : du signe de "a" à l\'extérieur des racines, et du signe de "-a" entre les racines');
    rules.push('Sommet de la parabole : S(-b / 2a ; f(-b / 2a))');
    tips.push('Toujours vérifier le calcul de Δ en rédigeant explicitement la formule b² - 4ac avant les valeurs numériques.');
    tips.push('Ne pas oublier le coefficient "a" devant les parenthèses lors de la factorisation si a ≠ 1.');
  }

  // 2. Étude de fonction / variations / dérivée
  if (concepts.includes('variation') || concepts.includes('derivative') || lower.includes('variation') || lower.includes('dériv')) {
    if (!rules.some(r => r.includes('Signe de'))) {
      courseTitle = 'Chapitre 5 : Étude de Fonctions et Variations';
      chapterName = 'Dérivabilité et sens de variation';
    }
    rules.push('Pour une fonction dérivable, le signe de f\'(x) donne le sens de variation de f.');
    rules.push('Si f\'(x) > 0 sur un intervalle, f est strictement croissante sur cet intervalle.');
    rules.push('Si f\'(x) < 0 sur un intervalle, f est strictement décroissante sur cet intervalle.');
    tips.push('Dans le tableau de variation, indiquer clairement les valeurs remarquables et les extremums.');
  }

  // 3. Probabilités
  if (concepts.includes('probability') || lower.includes('probabilit')) {
    courseTitle = 'Chapitre 9 : Dénombrement et Probabilités';
    chapterName = 'Calcul des probabilités';
    rules.push('P(A) = Card(A) / Card(Ω) dans le cas d\'équiprobabilité');
    rules.push('Tirages simultanés : Combinaisons C(n, p) = n! / (p!(n-p)!)');
    rules.push('Tirages successifs sans remise : Arrangements A(n, p) = n! / (n-p)!');
    rules.push('Tirages successifs avec remise : p-listes n^p');
    tips.push('Toujours expliciter l\'univers Ω et calculer Card(Ω) en première étape.');
  }

  // 4. Statistiques
  if (concepts.includes('statistics') || lower.includes('statist')) {
    courseTitle = 'Chapitre 8 : Statistiques à deux variables';
    chapterName = 'Ajustement linéaire et droite de Mayer';
    rules.push('Point moyen G(x̄, ȳ)');
    rules.push('Méthode de Mayer : scinder la série ordonnée en deux sous-groupes de même effectif.');
    tips.push('Vérifier que la droite d\'ajustement passe obligatoirement par le point moyen G.');
  }

  return {
    courseTitle,
    chapterName,
    relevantRules: rules,
    pedagogicalTips: tips,
  };
}
