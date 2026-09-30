import { OfficialIvorianCourse, DisciplineType, SecondaryLevel, AcademicSerie } from '../../types';
import { textContainsResemblingToken, wordsArrayResemblesToken, normalizeAcademicSpellingAndTypos, frenchStem } from '../../utils/fuzzyMatch';
import { COLLEGE_6E_PHYSIQUE_COURSES } from './college6ePhysiqueCourses';
import { COLLEGE_6E_CHIMIE_COURSES } from './college6eChimieCourses';
import { COLLEGE_6E_HISTOIRE_COURSES } from './college6eHistoireCourses';
import { COLLEGE_6E_GEOGRAPHIE_COURSES } from './college6eGeographieCourses';
import { COLLEGE_MATHS_COURSES } from './collegeMathsCourses';
import { COLLEGE_5E_MATHS_COURSES } from './college5eMathsCourses';
import { COLLEGE_5E_4E_MATHS_COURSES } from './college5e4eMathsCourses';
import { COLLEGE_4E_MATHS_COURSES } from './college4eMathsCourses';
import { COLLEGE_3E_MATHS_COURSES } from './college3eMathsCourses';
import { COLLEGE_SCIENCES_COURSES } from './collegeSciencesCourses';
import { COLLEGE_5E_4E_SCIENCES_COURSES } from './college5e4eSciencesCourses';
import { COLLEGE_5E_PHYSIQUE_COURSES } from './college5ePhysiqueCourses';
import { COLLEGE_5E_CHIMIE_COURSES } from './college5eChimieCourses';
import { COLLEGE_4E_PHYSIQUE_CHIMIE_COURSES } from './college4ePhysiqueChimieCourses';
import { COLLEGE_3E_PHYSIQUE_CHIMIE_COURSES } from './college3ePhysiqueChimieCourses';
import { COLLEGE_4E_SVT_COURSES } from './college4eSvtCourses';
import { COLLEGE_3E_SVT_COURSES } from './college3eSvtCourses';
import { COLLEGE_5E_FRANCAIS_COURSES } from './college5eFrancaisCourses';
import { COLLEGE_4E_FRANCAIS_COURSES } from './college4eFrancaisCourses';
import { COLLEGE_3E_FRANCAIS_COURSES } from './college3eFrancaisCourses';
import { COLLEGE_HUMANITIES_COURSES } from './collegeHumanitiesCourses';
import { COLLEGE_EXTRA_HUMANITIES_COURSES } from './collegeExtraHumanitiesCourses';
import { COLLEGE_5E_GEOGRAPHIE_COURSES } from './college5eGeographieCourses';
import { COLLEGE_5E_HISTOIRE_COURSES } from './college5eHistoireCourses';
import { LYCEE_MATHS_COURSES } from './lyceeMathsCourses';
import { LYCEE_SCIENCES_COURSES } from './lyceeSciencesCourses';
import { LYCEE_HUMANITIES_COURSES } from './lyceeHumanitiesCourses';
import { LYCEE_EXTRA_COURSES } from './lyceeExtraCourses';
import { LYCEE_ALLEMAND_COURSES } from './lyceeAllemandCourses';
import { LYCEE_SVT_TLE_COURSES } from './lyceeSvtTleCourses';
import { LYCEE_HISTOIREGEO_1ERE_COURSES } from './lyceeHistoireGeo1ereCourses';
import { LYCEE_PHYSIQUE_CHIMIE_1ERE_COURSES } from './lyceePhysiqueChimie1ereCourses';
import { LYCEE_CHIMIE_1ERE_RENFORCE_COURSES } from './lyceeChimie1ereRenforceCourses';
import { LYCEE_SECONDE_COURSES } from './lyceeSecondeCourses';
import { LYCEE_SVT_1ERE_COURSES } from './lyceeSvt1ereCourses';
import { LYCEE_MATHS_RENFORCE_COURSES } from './lyceeMathsRenforceCourses';
import { LYCEE_HISTOIREGEO_TLE_COURSES } from './lyceeHistoireGeoTleCourses';
import { COLLEGE_5E_SVT_COURSES } from './college5eSvtCourses';
import { ANGLAIS_CURRICULUM_COURSES } from './anglaisCurriculumCourses';
import { LYCEE_ESPAGNOL_COURSES } from './lyceeEspagnolCourses';
import { EDHC_CURRICULUM_COURSES } from './edhcCurriculumCourses';
import { LYCEE_PHILO_TLE_COURSES } from './lyceePhiloTleCourses';
import { LYCEE_PHYSIQUE_CHIMIE_TLE_RENFORCE_COURSES } from './lyceePhysiqueChimieTleRenforceCourses';
import { LYCEE_SVT_IMMUNOLOGIE_GENETIQUE_COURSES } from './lyceeSvtImmunologieGenetiqueCourses';
import { COLLEGE_3E_HISTOIRE_GEO_COURSES } from './college3eHistoireGeoCourses';
import { CONVERTED_KNOWLEDGE_BASE_COURSES } from './convertedKnowledgeBases';

export { COLLEGE_6E_PHYSIQUE_COURSES } from './college6ePhysiqueCourses';
export { COLLEGE_6E_CHIMIE_COURSES } from './college6eChimieCourses';
export { COLLEGE_6E_HISTOIRE_COURSES } from './college6eHistoireCourses';
export { COLLEGE_6E_GEOGRAPHIE_COURSES } from './college6eGeographieCourses';

export const ALL_OFFICIAL_IVORIAN_COURSES: OfficialIvorianCourse[] = [
  ...COLLEGE_6E_PHYSIQUE_COURSES,
  ...COLLEGE_6E_CHIMIE_COURSES,
  ...COLLEGE_6E_HISTOIRE_COURSES,
  ...COLLEGE_6E_GEOGRAPHIE_COURSES,
  ...COLLEGE_MATHS_COURSES,
  ...COLLEGE_5E_MATHS_COURSES,
  ...COLLEGE_5E_4E_MATHS_COURSES,
  ...COLLEGE_4E_MATHS_COURSES,
  ...COLLEGE_3E_MATHS_COURSES,
  ...COLLEGE_SCIENCES_COURSES,
  ...COLLEGE_5E_4E_SCIENCES_COURSES,
  ...COLLEGE_5E_PHYSIQUE_COURSES,
  ...COLLEGE_5E_CHIMIE_COURSES,
  ...COLLEGE_4E_PHYSIQUE_CHIMIE_COURSES,
  ...COLLEGE_3E_PHYSIQUE_CHIMIE_COURSES,
  ...COLLEGE_4E_SVT_COURSES,
  ...COLLEGE_3E_SVT_COURSES,
  ...COLLEGE_5E_FRANCAIS_COURSES,
  ...COLLEGE_4E_FRANCAIS_COURSES,
  ...COLLEGE_3E_FRANCAIS_COURSES,
  ...COLLEGE_HUMANITIES_COURSES,
  ...COLLEGE_EXTRA_HUMANITIES_COURSES,
  ...COLLEGE_5E_GEOGRAPHIE_COURSES,
  ...COLLEGE_5E_HISTOIRE_COURSES,
  ...LYCEE_MATHS_COURSES,
  ...LYCEE_SCIENCES_COURSES,
  ...LYCEE_PHYSIQUE_CHIMIE_1ERE_COURSES,
  ...LYCEE_CHIMIE_1ERE_RENFORCE_COURSES,
  ...LYCEE_SVT_TLE_COURSES,
  ...LYCEE_HUMANITIES_COURSES,
  ...LYCEE_HISTOIREGEO_1ERE_COURSES,
  ...LYCEE_EXTRA_COURSES,
  ...LYCEE_ALLEMAND_COURSES,
  ...LYCEE_SECONDE_COURSES,
  ...LYCEE_SVT_1ERE_COURSES,
  ...LYCEE_MATHS_RENFORCE_COURSES,
  ...LYCEE_HISTOIREGEO_TLE_COURSES,
  ...COLLEGE_5E_SVT_COURSES,
  ...ANGLAIS_CURRICULUM_COURSES,
  ...LYCEE_ESPAGNOL_COURSES,
  ...EDHC_CURRICULUM_COURSES,
  ...LYCEE_PHILO_TLE_COURSES,
  ...LYCEE_PHYSIQUE_CHIMIE_TLE_RENFORCE_COURSES,
  ...LYCEE_SVT_IMMUNOLOGIE_GENETIQUE_COURSES,
  ...COLLEGE_3E_HISTOIRE_GEO_COURSES,
  ...CONVERTED_KNOWLEDGE_BASE_COURSES,
];

// Mots vides fréquents dans les requêtes d'élèves à exclure du calcul de score brut
const COURSE_STOP_WORDS = new Set([
  'cour', 'cours', 'sur', 'les', 'des', 'pour', 'dans', 'une', 'avec', 'tout', 
  'tous', 'par', 'son', 'ses', 'qui', 'que', 'est', 'sont', 'donne', 'moi', 
  'cherche', 'trouve', 'chapitre', 'lecon', 'fiche', 'resume', 'terminale', 'bac',
  'definition', 'definir', 'def', 'signification', 'sens', 'notion', 'concept', 'explication',
  'manifestations', 'manifestation', 'deroulement', 'deroule', 'faits', 'fait', 'evenements', 'evenement', 'actions', 'action',
  'causes', 'cause', 'origines', 'origine', 'pourquoi', 'consequences', 'consequence', 'effets', 'impact',
  'dates', 'date', 'acteurs', 'acteur', 'caracteristiques', 'caracteristique', 'resume', 'resumer',
  'exemple', 'exemples', 'argument', 'arguments', 'citation', 'citations', 'methode', 'methodes',
  'formule', 'formules', 'theoreme', 'theoremes', 'loi', 'propriete', 'proprietes', 'regle', 'enonce',
  'objectifs', 'objectif', 'principes', 'principe', 'buts', 'but', 'organes', 'organe', 'structure', 'structures',
  'bilan', 'perspectives', 'fonctionnement', 'succes', 'limites', 'echecs', 'roles', 'role', 'missions', 'mission',
  'atouts', 'fondements', 'facteurs', 'difficultes', 'etapes',
  'quelles', 'quels', 'quelle', 'quel', 'comment',
  'calculer', 'calcule', 'calcul', 'calculs', 'resoudre', 'resolution', 'trouver', 'determiner',
  'complet', 'detaille', 'detaile', 'tout', 'sur'
]);

function stripAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Fréquence de chaque mot-clé (en minuscules sans accents) à travers TOUTE la base de cours officiels.
// Un mot-clé partagé par de nombreuses fiches (ex: "citations", "philosophie", "auteurs")
// n'est pas discriminant : il ne doit jamais suffire, à lui seul, à faire remonter une
// fiche "fourre-tout" (répertoire/index couvrant plusieurs notions) à la place de la
// fiche précise réellement recherchée par l'élève.
const KEYWORD_FREQUENCY: Map<string, number> = (() => {
  const freq = new Map<string, number>();
  for (const course of ALL_OFFICIAL_IVORIAN_COURSES) {
    // On ne compte qu'une fois par cours, même si le mot-clé apparaît plusieurs fois dans la même fiche
    const seenInThisCourse = new Set<string>();
    for (const kw of (course.keywords || [])) {
      const kwLower = stripAccents(kw.toLowerCase().trim());
      if (!seenInThisCourse.has(kwLower)) {
        seenInThisCourse.add(kwLower);
        freq.set(kwLower, (freq.get(kwLower) || 0) + 1);
      }
    }
  }
  return freq;
})();

// Un mot-clé est jugé "générique" (donc peu discriminant) s'il apparaît dans plus de
// 3 fiches distinctes de la base officielle.
const GENERIC_KEYWORD_THRESHOLD = 3;

/**
 * Index de recherche précalculé par fiche de cours (contenu 100% statique,
 * connu au démarrage). Sans ce cache, `findOfficialCourse` reconstruisait et
 * re-découpait en mots le texte complet de CHAQUE fiche (titre + mots-clés +
 * définitions + contenu intégral) à CHAQUE recherche, pour les 500+ fiches du
 * catalogue — le vrai goulot d'étranglement identifié lors des tests de
 * charge (jusqu'à plusieurs secondes de calcul CPU par recherche sur les
 * requêtes sans correspondance exacte immédiate). Le texte ne changeant
 * jamais après le démarrage, on ne le calcule qu'une fois par fiche, et on
 * ne garde que les mots UNIQUES (un mot répété 50 fois dans un cours ne doit
 * être comparé qu'une seule fois : le résultat de la comparaison est
 * identique, seul le nombre d'itérations change).
 */
interface CourseSearchIndex {
  searchableText: string;
  searchableWords: string[];
  normalizedLesson: string;
  normalizedLessonWords: string[];
  normalizedChapter: string;
  normalizedChapterWords: string[];
  isMultiTopicIndex: boolean;
  keywordRegexes: Array<{ keyword: string; regex: RegExp; generic: boolean }>;
}

const courseSearchIndexCache = new WeakMap<OfficialIvorianCourse, CourseSearchIndex>();

function splitIntoUniqueWords(normalizedLowerText: string): string[] {
  const seen = new Set<string>();
  for (const w of normalizedLowerText.split(/[^a-z0-9]+/)) {
    if (w) seen.add(w);
  }
  return Array.from(seen);
}

function getCourseSearchIndex(course: OfficialIvorianCourse): CourseSearchIndex {
  const cached = courseSearchIndexCache.get(course);
  if (cached) return cached;

  const defsText = (course.definitions || []).map(d => `${d.term} ${d.definition}`).join(' ');
  const propsText = (course.propertiesAndRules || []).map(p => `${p.name} ${p.statement}`).join(' ');
  const fullSnippet = course.fullCourseContent || '';
  const searchableText = stripAccents(`${course.chapter} ${course.lessonTitle} ${course.quickMemo} ${(course.keywords || []).join(' ')} ${(course.objectifs || []).join(' ')} ${defsText} ${propsText} ${fullSnippet}`.toLowerCase());
  const normalizedLesson = stripAccents(course.lessonTitle.toLowerCase());
  const normalizedChapter = stripAccents(course.chapter.toLowerCase());
  const topicSegmentCount = course.lessonTitle.split(',').length;

  const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const keywordRegexes = (course.keywords || []).map(kw => {
    const keyword = stripAccents(kw.toLowerCase().trim());
    return keyword ? { keyword, regex: new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i'), generic: (KEYWORD_FREQUENCY.get(keyword) || 0) > GENERIC_KEYWORD_THRESHOLD || COURSE_STOP_WORDS.has(keyword) } : null;
  }).filter((x): x is { keyword: string; regex: RegExp; generic: boolean } => Boolean(x));
  const index: CourseSearchIndex = {
    searchableText,
    searchableWords: splitIntoUniqueWords(searchableText),
    normalizedLesson,
    normalizedLessonWords: splitIntoUniqueWords(normalizedLesson),
    normalizedChapter,
    normalizedChapterWords: splitIntoUniqueWords(normalizedChapter),
    isMultiTopicIndex: topicSegmentCount >= 8,
    keywordRegexes,
  };
  courseSearchIndexCache.set(course, index);
  return index;
}

/**
 * Index inversé du catalogue officiel.
 *
 * Il ne remplace PAS le scoring existant : il sert uniquement à construire un
 * sous-ensemble de fiches qui pourraient produire au moins un signal déjà
 * utilisé par `findOfficialCourse` (mot exact, racine morphologique ou faute
 * de frappe tolérée). Le scoring reste exécuté à l'identique sur ces fiches.
 */
interface OfficialCourseInvertedIndex {
  exactWordToCourses: Map<string, Set<number>>;
  stemToCourses: Map<string, Set<number>>;
  deletionToCourses: Map<string, Set<number>>;
  substring5ToCourses: Map<string, Set<number>>;
  tokenFrequency: Map<string, number>;
}

function addCourseToIndex(map: Map<string, Set<number>>, key: string, courseIndex: number): void {
  if (!key) return;
  let bucket = map.get(key);
  if (!bucket) {
    bucket = new Set<number>();
    map.set(key, bucket);
  }
  bucket.add(courseIndex);
}

/** Génère les suppressions de 1 ou 2 caractères utilisées pour retrouver
 * exactement les candidats couverts par la tolérance Levenshtein actuelle. */
function addDeletionKeys(map: Map<string, Set<number>>, word: string, courseIndex: number, maxDepth: number): void {
  if (word.length < 6) return;

  const seen = new Set<string>();
  const visit = (value: string, depth: number) => {
    if (depth > maxDepth || value.length < 3) return;
    for (let i = 0; i < value.length; i++) {
      const deleted = value.slice(0, i) + value.slice(i + 1);
      if (seen.has(deleted)) continue;
      seen.add(deleted);
      addCourseToIndex(map, deleted, courseIndex);
      if (depth < maxDepth) visit(deleted, depth + 1);
    }
  };
  visit(word, 1);
}

const OFFICIAL_COURSE_INVERTED_INDEX: OfficialCourseInvertedIndex = (() => {
  const index: OfficialCourseInvertedIndex = {
    exactWordToCourses: new Map(),
    stemToCourses: new Map(),
    deletionToCourses: new Map(),
    substring5ToCourses: new Map(),
    tokenFrequency: new Map(),
  };

  for (let courseIndex = 0; courseIndex < ALL_OFFICIAL_IVORIAN_COURSES.length; courseIndex++) {
    const course = ALL_OFFICIAL_IVORIAN_COURSES[courseIndex];
    const courseIndexData = getCourseSearchIndex(course);
    for (const word of courseIndexData.searchableWords) {
      addCourseToIndex(index.exactWordToCourses, word, courseIndex);
      addCourseToIndex(index.stemToCourses, frenchStem(word), courseIndex);
      addDeletionKeys(index.deletionToCourses, word, courseIndex, word.length >= 12 ? 2 : 1);

      // L'ancien score possède aussi une vérification `searchableText.includes(query)`.
      // Les sous-chaînes de 5 caractères conservent ce signal pour les recherches
      // qui traversent un mot sans constituer elles-mêmes un mot (ex: `tales` dans
      // `fondamentales`). Les requêtes plus longues partagent nécessairement leur
      // première fenêtre de 5 caractères avec le mot concerné.
      if (word.length >= 5) {
        for (let i = 0; i <= word.length - 5; i++) {
          addCourseToIndex(index.substring5ToCourses, word.slice(i, i + 5), courseIndex);
        }
      }
    }
  }

  index.exactWordToCourses.forEach((bucket,key)=>{index.tokenFrequency.set(key,bucket.size);});
  return index;
})();


const INDEX_COMMON_TOKEN_RATIO = 0.08;

function selectDiscriminantTokens(tokens: string[], maxTokens = 5): string[] {
  const unique = [...new Set(tokens.map(t => stripAccents(t.toLowerCase())).filter(Boolean))];
  const totalCourses = ALL_OFFICIAL_IVORIAN_COURSES.length;
  const commonTokenThreshold = Math.max(1, Math.ceil(totalCourses * INDEX_COMMON_TOKEN_RATIO));

  // A token can be useless for candidate generation even when the query is short:
  // words such as "corps" or "simples" occur in a large fraction of the catalogue.
  // Do not let a very large bucket flood the candidate pool merely because the
  // query contains <= 5 tokens. Keep at least one token as a recall safety net if
  // every token happens to be common.
  const discriminant = unique.filter(token => {
    const frequency = OFFICIAL_COURSE_INVERTED_INDEX.tokenFrequency.get(token);
    return frequency === undefined || frequency <= commonTokenThreshold;
  });

  const source = discriminant.length > 0 ? discriminant : unique;
  return source
    .sort((a,b)=> (OFFICIAL_COURSE_INVERTED_INDEX.tokenFrequency.get(a) ?? Number.MAX_SAFE_INTEGER) - (OFFICIAL_COURSE_INVERTED_INDEX.tokenFrequency.get(b) ?? Number.MAX_SAFE_INTEGER))
    .slice(0,maxTokens);
}

function getTokenCandidateBucket(normalizedToken: string): Set<number> {
  const bucket = new Set<number>();
  const exact = OFFICIAL_COURSE_INVERTED_INDEX.exactWordToCourses.get(normalizedToken);
  if (exact) for (const i of exact) bucket.add(i);
  if (normalizedToken.length >= 5) {
    const substring = OFFICIAL_COURSE_INVERTED_INDEX.substring5ToCourses.get(normalizedToken.slice(0, 5));
    if (substring) for (const i of substring) bucket.add(i);
  }
  const stem = OFFICIAL_COURSE_INVERTED_INDEX.stemToCourses.get(frenchStem(normalizedToken));
  if (stem) for (const i of stem) bucket.add(i);
  const maxDistance = normalizedToken.length >= 10 ? 2 : 1;
  if (normalizedToken.length >= 5) {
    const deletionKeys = new Set<string>();
    for (let i = 0; i < normalizedToken.length; i++) {
      const deleted = normalizedToken.slice(0, i) + normalizedToken.slice(i + 1);
      deletionKeys.add(deleted);
      if (maxDistance >= 2) {
        for (let j = 0; j < deleted.length; j++) deletionKeys.add(deleted.slice(0, j) + deleted.slice(j + 1));
      }
    }
    for (const key of deletionKeys) {
      const deletionBucket = OFFICIAL_COURSE_INVERTED_INDEX.deletionToCourses.get(key);
      if (deletionBucket) for (const i of deletionBucket) bucket.add(i);
    }
  }
  return bucket;
}

function collectIndexedCandidates(tokens: string[]): Set<number> {
  const normalized = [...new Set(tokens.map(t => stripAccents(t.toLowerCase())).filter(Boolean))];
  const buckets = normalized.map(token => ({ token, bucket: getTokenCandidateBucket(token) }))
    .filter(x => x.bucket.size > 0)
    .sort((a, b) => a.bucket.size - b.bucket.size);

  if (!buckets.length) return new Set();

  // For multi-token queries, intersect the two most selective token buckets first.
  // This drastically reduces CPU-bound scoring for phrases such as
  // "oxydation des corps purs simples", while retaining a union fallback when
  // no course contains both discriminant signals.
  if (buckets.length >= 2) {
    const first = buckets[0].bucket;
    const second = buckets[1].bucket;
    const intersection = new Set<number>();
    for (const id of first) if (second.has(id)) intersection.add(id);
    if (intersection.size > 0) return intersection;
  }

  const candidates = new Set<number>();
  for (const { bucket } of buckets) for (const id of bucket) candidates.add(id);
  return candidates;
}

/**
 * Searches the official offline course repository for matches based on query, level, discipline, and series
 */

/**
 * Recherche STRICTE d'une définition dans le référentiel officiel.
 *
 * Cette fonction est volontairement séparée de findOfficialCourse() : une demande
 * « définition de X » ne doit pas choisir un chapitre simplement parce qu'il contient
 * le mot X. Elle cherche d'abord le terme dans le champ definitions[].
 */
export interface ExactOfficialDefinitionMatch {
  course: OfficialIvorianCourse;
  term: string;
  definition: string;
  matchType: 'exact' | 'normalized' | 'fuzzy';
  score: number;
}

function normalizeDefinitionTerm(value: string): string {
  return normalizeAcademicSpellingAndTypos(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function findExactOfficialDefinition(
  term: string,
  level?: SecondaryLevel,
  discipline?: DisciplineType,
  serie?: AcademicSerie
): ExactOfficialDefinitionMatch | null {
  const normalizedTerm = normalizeDefinitionTerm(term);
  if (normalizedTerm.length < 2) return null;

  const candidates = ALL_OFFICIAL_IVORIAN_COURSES.filter(course => {
    if (discipline && course.discipline !== discipline) return false;
    if (level && course.level !== level) return false;
    if (serie && course.serie && !course.serie.includes(serie)) return false;
    return Array.isArray(course.definitions) && course.definitions.length > 0;
  });

  let best: ExactOfficialDefinitionMatch | null = null;
  for (const course of candidates) {
    for (const item of course.definitions) {
      const candidate = normalizeDefinitionTerm(item.term);
      if (!candidate) continue;

      let matchType: ExactOfficialDefinitionMatch['matchType'] | null = null;
      let score = 0;
      if (candidate === normalizedTerm) {
        matchType = 'exact';
        score = 1000;
      } else if (candidate.replace(/s$/, '') === normalizedTerm.replace(/s$/, '')) {
        matchType = 'normalized';
        score = 920;
      } else if (textContainsResemblingToken(candidate, normalizedTerm) || textContainsResemblingToken(normalizedTerm, candidate)) {
        // Le fuzzy est admis uniquement comme dernier recours et doit rester très proche.
        const a = new Set(candidate.split(' ').filter(Boolean));
        const b = normalizedTerm.split(' ').filter(Boolean);
        const overlap = b.length ? b.filter(t => a.has(t)).length / b.length : 0;
        if (overlap >= 0.75) {
          matchType = 'fuzzy';
          score = 700 + Math.round(overlap * 100);
        }
      }
      if (!matchType) continue;

      // Préférence aux termes courts et exacts : une définition « triangle rectangle »
      // ne doit pas perdre face à une fiche contenant simplement « triangle ».
      score += Math.min(candidate.length, 80) / 100;
      if (!best || score > best.score) {
        best = { course, term: item.term, definition: item.definition, matchType, score };
      }
    }
  }
  return best;
}

export interface OfficialCourseSearchDiagnostics {
  query: string;
  candidateTokens: string[];
  candidatePoolSize: number;
  totalCourses: number;
}

let lastOfficialCourseSearchDiagnostics: OfficialCourseSearchDiagnostics = {
  query: '', candidateTokens: [], candidatePoolSize: 0, totalCourses: ALL_OFFICIAL_IVORIAN_COURSES.length,
};

export function getLastOfficialCourseSearchDiagnostics(): OfficialCourseSearchDiagnostics {
  return { ...lastOfficialCourseSearchDiagnostics, candidateTokens: [...lastOfficialCourseSearchDiagnostics.candidateTokens] };
}

export interface FindOfficialCourseOptions {
  /** Optional query used only for final scoring when the candidate query was expanded. */
  scoringQuery?: string;
  /** Extra expansion tokens used only as cheap exact support signals (never fuzzy-scored). */
  supportTokens?: string[];
}

export function findOfficialCourse(
  query: string,
  level?: SecondaryLevel,
  discipline?: DisciplineType,
  serie?: AcademicSerie,
  options?: FindOfficialCourseOptions
): OfficialIvorianCourse | null {
  const normalizedQuery = normalizeAcademicSpellingAndTypos(options?.scoringQuery ?? query);
  const indexedQuery = normalizeAcademicSpellingAndTypos(query);
  const rawTokens = normalizedQuery
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, ' ')
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 2);

  // Filtrer les mots vides pour éviter les faux positifs (ex: "cour" dans "court-circuit")
  const meaningfulTokens = rawTokens.filter(t => !COURSE_STOP_WORDS.has(t));
  const queryTokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  // Pré-sélection inversée : on ne score que les fiches contenant au moins
  // un terme exact, une racine commune ou une variante à distance d'édition
  // compatible avec le comportement fuzzy historique. Pour une requête sans
  // terme exploitable, on conserve volontairement tout le catalogue : c'est
  // exactement le comportement de l'ancienne boucle.
  const indexedRawTokens = indexedQuery
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?”'«»]/g, ' ')
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 2);
  const indexedMeaningfulTokens = indexedRawTokens.filter(t => !COURSE_STOP_WORDS.has(t));
  const indexedTokens = indexedMeaningfulTokens.length > 0 ? indexedMeaningfulTokens : indexedRawTokens;
  const candidateTokens = selectDiscriminantTokens(indexedTokens, 5);
  const indexedCandidateIds = indexedTokens.length > 0
    ? collectIndexedCandidates(candidateTokens)
    : new Set(ALL_OFFICIAL_IVORIAN_COURSES.map((_, i) => i));

  let candidatePool = ALL_OFFICIAL_IVORIAN_COURSES.filter((course, index) => indexedCandidateIds.has(index));

  // Filter by discipline if provided. Comme précédemment, le filtre n'est
  // appliqué que s'il produit des fiches ; sinon on conserve le pool courant.
  if (discipline) {
    const byDiscipline = candidatePool.filter(c => c.discipline === discipline);
    if (byDiscipline.length > 0) {
      candidatePool = byDiscipline;
    }
  }

  // Filter by level if provided. Même sémantique que précédemment.
  if (level) {
    const byLevel = candidatePool.filter(c => c.level === level);
    if (byLevel.length > 0) {
      candidatePool = byLevel;
    }
  }

  lastOfficialCourseSearchDiagnostics = {
    query,
    candidateTokens: [...candidateTokens],
    candidatePoolSize: candidatePool.length,
    totalCourses: ALL_OFFICIAL_IVORIAN_COURSES.length,
  };

  const escapedNormalizedQuery = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const reverseQueryRegex = normalizedQuery.length >= 3
    ? new RegExp(`\\b${escapedNormalizedQuery}\\b`, 'i')
    : null;

  // Compile each query-token RegExp once per search, not once per candidate fiche.
  // This keeps memory bounded even when arbitrary new user formulations are searched.
  const queryTokenRegexes = new Map<string, RegExp>();
  const getQueryTokenRegex = (token: string): RegExp => {
    const cached = queryTokenRegexes.get(token);
    if (cached) return cached;
    const regex = new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    queryTokenRegexes.set(token, regex);
    return regex;
  };

  // Score candidate matches
  let bestCourse: OfficialIvorianCourse | null = null;
  let highestScore = 0;
  let bestHasSpecificSignal = false;

  for (const course of candidatePool) {
    let score = 0;
    let hasSpecificSignal = false;
    const courseIndex = getCourseSearchIndex(course);
    const { searchableText, searchableWords, normalizedLesson: normalizedCourseLesson, normalizedLessonWords, normalizedChapter: normalizedCourseChapter, normalizedChapterWords, isMultiTopicIndex } = courseIndex;

    // Certaines fiches sont un véritable "index" qui énumère volontairement une bonne
    // vingtaine de notions distinctes dans le même lessonTitle (ex: "Conscience,
    // Inconscient, Mémoire/Oubli, Liberté, Violence, Société, Autrui, État & Loi...").
    // À la différence d'une fiche normale qui énumère juste 3-5 sous-parties d'un même
    // sujet (ex: "Propriété et réciproque de Pythagore, construction de √a, propriété
    // métrique et trigonométrie"), un tel index ne doit jamais remonter pour une requête
    // générique : ça reviendrait justement à mélanger plein de sujets différents.
    // Seuil volontairement élevé (8+) pour ne viser que ces index extrêmes, sans toucher
    // aux fiches normales à plusieurs sous-parties. (isMultiTopicIndex vient de l'index précalculé ci-dessus.)

    // Check keyword matches — un mot-clé générique (partagé par de nombreuses fiches,
    // ex: "citations", "philosophie", "auteurs", "dissertation", ou appartenant aux COURSE_STOP_WORDS)
    // est fortement dévalué : il ne doit jamais suffire à lui seul à faire matcher une fiche
    // "fourre-tout" à la place de la fiche précise que l'élève recherche réellement.
    for (const { keyword: kwLower, regex, generic: isGeneric } of courseIndex.keywordRegexes) {
      // Correspondance exacte ou mot entier délimité.
      const exactMatch = normalizedQuery === kwLower;
      const wordBoundaryMatch = regex.test(normalizedQuery);
      const exactOrContained = exactMatch || wordBoundaryMatch;

      // Inverse : la requête entière forme-t-elle un mot complet du mot-clé ?
      const reverseContained = Boolean(reverseQueryRegex?.test(kwLower));

      // Reconnaissance générique : le mot-clé (ou l'un de ses mots) ressemble-t-il à
      // un mot de la requête (racine commune / faute de frappe), sans correspondance exacte ?
      const fuzzyMatch = !exactOrContained && !reverseContained && kwLower.length >= 4 &&
        textContainsResemblingToken(normalizedQuery, kwLower);

      if (exactOrContained) {
        if (isGeneric) {
          score += 2;
        } else {
          score += 25;
          hasSpecificSignal = true;
        }
      } else if (reverseContained) {
        if (isGeneric) {
          score += 1;
        } else {
          score += 20;
          hasSpecificSignal = true;
        }
      } else if (fuzzyMatch) {
        if (isGeneric) {
          score += 1;
        } else {
          score += 14;
          hasSpecificSignal = true;
        }
      }
    }

    // Check query token occurrences with strict word boundary check (never substring of another word)
    let matchedTokensCount = 0;
    for (const token of queryTokens) {
      if (token.length < 2) continue;
      const tokenRegex = getQueryTokenRegex(token);
      const exactHitBody = tokenRegex.test(searchableText);
      // Reconnaissance générique (racine morphologique / tolérance aux fautes de frappe) :
      // permet de reconnaître une formulation JAMAIS vue auparavant (pluriel, conjugaison,
      // faute de frappe...) sans qu'aucune liste de synonymes n'ait été pré-enregistrée.
      // Note : ce signal flou n'alimente PAS le compteur de couverture (matchedTokensCount),
      // car un mot très courant (ex: "fonctionne" ≈ "fonctionnement") apparaît dans presque
      // toute fiche et ne doit jamais, à lui seul, déclencher le bonus de couverture réservé
      // aux correspondances franches.
      // (searchableWords est l'ensemble des mots uniques de la fiche, précalculé une seule
      // fois par fiche — voir getCourseSearchIndex — au lieu d'être re-découpé à chaque appel.)
      const fuzzyHitBody = !exactHitBody && token.length >= 4 && wordsArrayResemblesToken(searchableWords, token);
      if (exactHitBody) {
        score += isMultiTopicIndex ? 2 : 8;
        matchedTokensCount++;
      } else if (fuzzyHitBody) {
        score += isMultiTopicIndex ? 1 : 4;
      }
      // Bonus si le mot-clé ou le titre contient directement ce terme significatif en tant que mot entier
      const exactHitTitle = tokenRegex.test(normalizedCourseLesson) || tokenRegex.test(normalizedCourseChapter);
      const fuzzyHitTitle = !exactHitTitle && token.length >= 4 &&
        (wordsArrayResemblesToken(normalizedLessonWords, token) || wordsArrayResemblesToken(normalizedChapterWords, token));
      if (exactHitTitle) {
        if (isMultiTopicIndex) {
          score += 2;
        } else {
          score += 15;
          hasSpecificSignal = true;
        }
        if (!exactHitBody) matchedTokensCount++;
      } else if (fuzzyHitTitle) {
        // Une ressemblance dans le TITRE reste un signal fort (contrairement au corps du
        // texte, bien plus long et donc plus sujet aux coïncidences) : elle compte pour
        // la couverture, avec un bonus toutefois inférieur à une correspondance exacte.
        if (isMultiTopicIndex) {
          score += 1;
        } else {
          score += 10;
          hasSpecificSignal = true;
        }
        matchedTokensCount++;
      }
    }

    // Synonymes / extensions servent d'abord à retrouver les bons candidats.
    // Pour éviter que leur volume transforme le scoring en O(candidats × synonymes),
    // seuls quelques termes d'appui sont testés ici, et uniquement en correspondance
    // exacte dans le texte/titre (aucun Levenshtein ni wordsArrayResemblesToken).
    if (options?.supportTokens?.length) {
      const supportTokens = [...new Set(options.supportTokens.map(t => stripAccents(t.toLowerCase())).filter(t => t.length >= 3))].slice(0, 6);
      for (const token of supportTokens) {
        const tokenRegex = getQueryTokenRegex(token);
        if (tokenRegex.test(normalizedCourseLesson) || tokenRegex.test(normalizedCourseChapter)) {
          score += 4;
          hasSpecificSignal = true;
        } else if (tokenRegex.test(searchableText)) {
          score += 1;
        }
      }
    }

    // Ratio de couverture des mots de la requête:
    // Si la requête comporte des mots discriminants (queryTokens), mais que le cours n'en matche qu'une faible fraction,
    // ce cours ne doit pas remonter artificiellement s'il n'a pas de correspondance forte.
    const tokenCoverage = queryTokens.length > 0 ? matchedTokensCount / queryTokens.length : 1;
    if (queryTokens.length >= 2 && tokenCoverage < 0.50) {
      score = Math.floor(score * 0.05);
      hasSpecificSignal = false;
    } else if (queryTokens.length >= 3 && tokenCoverage < 0.60) {
      score = Math.floor(score * 0.05);
      hasSpecificSignal = false;
    } else if (queryTokens.length >= 2 && tokenCoverage >= 0.75) {
      score += 65;
      hasSpecificSignal = true;
    }

    // Correspondance exacte ou inclusion forte dans le titre du chapitre ou de la leçon
    const normalizedChapter = normalizedCourseChapter;
    const normalizedLesson = normalizedCourseLesson;
    if ((normalizedLesson.includes(normalizedQuery) || normalizedChapter.includes(normalizedQuery)) && normalizedQuery.length > 4) {
      score += 120;
      hasSpecificSignal = true;
    } else if (searchableText.includes(normalizedQuery) && normalizedQuery.length > 4) {
      score += 40;
      if (!isMultiTopicIndex || normalizedQuery.length > 15) {
        hasSpecificSignal = true;
      }
    }

    // Détection de discipline contextuelle dans la requête :
    // 1. Si la requête porte sur des figures de style / rhétorique / littérature / poésie,
    //    ne JAMAIS faire matcher un cours de géométrie ou de maths (faux positif sur le mot "figure").
    const isFrenchOrLiteraryFigureQuery = /\b(?:figures?\s+(?:d['’]|de\s+)?(?:style|rh[eé]torique|oppositions?|analogies?|substitutions?|insistances?|amplifications?|att[eé]nuations?|construction|pens[eé]e|mots?)|oxymore|antith[eé]se|chiasme|antiphrase|m[eé]taphore|comparaison|all[eé]gorie|m[eé]tonymie|synecdoque|hyperbole|anaphore|litote|euph[eé]misme|pr[eé]t[eé]rition|versification|strophe|po[eé]sie|po[eé]tique|litt[eé]raire|dramatique)\b/i.test(normalizedQuery);
    if (isFrenchOrLiteraryFigureQuery && course.discipline === 'mathematiques') {
      score = 0;
      hasSpecificSignal = false;
    }

    // 2. Si la requête contient des indices explicites de SVT (résultats, expérience, interprétation, biologie, cellule, nerf, pedigree...)
    // et que ce cours est des Mathématiques sans aucun mot mathématique dans la requête, pénaliser le faux positif.
    const isSvtQuery = /\b(?:svt|biologie|cellule|g[eé]n[eé]tique|exp[eé]rience|exp[eé]rimentale|r[eé]sultats?|interpr[eé]tation|histogrammes?|pedigree|arbre\s+g[eé]n[eé]alogique|organe)\b/i.test(normalizedQuery);
    const hasMathSpecificTokens = /\b(?:maths?|mathematiques?|d[eé]riv[eé]e|int[eé]grale|primitive|suite|complexe|probabilit[eé]|tvi|vecteur|matrice|trigonom[eé]trie)\b/i.test(normalizedQuery);
    if (isSvtQuery && !hasMathSpecificTokens && course.discipline === 'mathematiques') {
      score = 0;
      hasSpecificSignal = false;
    }
    if (isSvtQuery && course.discipline === 'svt') {
      score += 30;
    }

    // Bonus for matching level
    if (level && course.level === level) {
      score += 10;
    } else if (!level) {
      // Lorsque l'élève ne précise pas de niveau (ex: "Thalès", "Pythagore", "résistance à la colonisation") :
      // Les classes d'examen officiel (3ème / BEPC et Terminale / BAC) contiennent les fiches complètes de référence.
      if (course.level === '3e') {
        score += 8;
      } else if (course.level === 'terminale') {
        score += 5;
      }
    }

    // Bonus for matching serie
    if (serie && course.serie && (course.serie === serie || course.serie.includes(serie))) {
      score += 8;
    }

    if (score > highestScore) {
      highestScore = score;
      bestCourse = course;
      bestHasSpecificSignal = hasSpecificSignal;
    }
  }

  // Exige un score minimal ET au moins un signal spécifique (mot-clé rare, titre, ou
  // sous-chaîne exacte). Sans signal spécifique, la requête est trop générique pour
  // être rattachée avec confiance à une fiche précise : mieux vaut ne rien renvoyer
  // ici et laisser les étapes suivantes (recherche philo/français par notion, etc.)
  // ou l'absence de résultat plutôt qu'une fiche fourre-tout mélangeant plusieurs sujets.
  if (highestScore >= 12 && bestHasSpecificSignal) {
    return bestCourse;
  }

  return null;
}
