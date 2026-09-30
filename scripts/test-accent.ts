import { ALL_OFFICIAL_IVORIAN_COURSES } from '../src/data/courses';
import type { OfficialIvorianCourse } from '../src/types';

function stripAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const COURSE_STOP_WORDS = new Set([
  'cour', 'cours', 'sur', 'les', 'des', 'pour', 'dans', 'une', 'avec', 'tout', 
  'tous', 'par', 'son', 'ses', 'qui', 'que', 'est', 'sont', 'donne', 'moi', 
  'cherche', 'trouve', 'chapitre', 'lecon', 'fiche', 'resume', 'terminale', 'bac',
  'definition', 'definir', 'def', 'signification', 'sens', 'notion', 'concept', 'explication'
]);

function testFindOfficialCourse(query: string): OfficialIvorianCourse | null {
  const normalizedQuery = stripAccents(query.toLowerCase().trim());
  const rawTokens = normalizedQuery
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, ' ')
    .split(/\s+/)
    .map(t => t.trim())
    .filter(t => t.length > 2);

  const meaningfulTokens = rawTokens.filter(t => !COURSE_STOP_WORDS.has(t));
  const queryTokens = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;

  let candidatePool = ALL_OFFICIAL_IVORIAN_COURSES;
  let bestCourse: OfficialIvorianCourse | null = null;
  let highestScore = 0;
  let bestHasSpecificSignal = false;

  for (const course of candidatePool) {
    let score = 0;
    let hasSpecificSignal = false;
    const defsText = (course.definitions || []).map(d => `${d.term} ${d.definition}`).join(' ');
    const propsText = (course.propertiesAndRules || []).map(p => `${p.name} ${p.statement}`).join(' ');
    const fullSnippet = course.fullCourseContent || '';
    const searchableText = stripAccents(`${course.chapter} ${course.lessonTitle} ${course.quickMemo} ${(course.keywords || []).join(' ')} ${(course.objectifs || []).join(' ')} ${defsText} ${propsText} ${fullSnippet}`.toLowerCase());

    const topicSegmentCount = course.lessonTitle.split(',').length;
    const isMultiTopicIndex = topicSegmentCount >= 8;

    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    for (const kw of (course.keywords || [])) {
      const kwLower = stripAccents(kw.toLowerCase().trim());
      if (!kwLower) continue;
      
      const exactMatch = normalizedQuery === kwLower;
      const wordBoundaryMatch = new RegExp(`\\b${escapeRegExp(kwLower)}\\b`, 'i').test(normalizedQuery);
      const exactOrContained = exactMatch || wordBoundaryMatch;

      const reverseContained = new RegExp(`\\b${escapeRegExp(normalizedQuery)}\\b`, 'i').test(kwLower) && normalizedQuery.length >= 3;

      if (exactOrContained) {
        score += 25;
        hasSpecificSignal = true;
      } else if (reverseContained) {
        score += 20;
        hasSpecificSignal = true;
      }
    }

    let matchedTokensCount = 0;
    for (const token of queryTokens) {
      if (token.length < 2) continue;
      const tokenRegex = new RegExp(`\\b${escapeRegExp(token)}\\b`, 'i');
      if (tokenRegex.test(searchableText)) {
        score += isMultiTopicIndex ? 2 : 8;
        matchedTokensCount++;
      }
      if (tokenRegex.test(stripAccents(course.lessonTitle)) || tokenRegex.test(stripAccents(course.chapter))) {
        if (isMultiTopicIndex) {
          score += 2;
        } else {
          score += 15;
          hasSpecificSignal = true;
        }
      }
    }

    const tokenCoverage = queryTokens.length > 0 ? matchedTokensCount / queryTokens.length : 1;
    if (queryTokens.length >= 3 && tokenCoverage < 0.75) {
      score = Math.floor(score * 0.05);
      hasSpecificSignal = false;
    } else if (queryTokens.length >= 3 && tokenCoverage >= 0.90) {
      score += 65;
      hasSpecificSignal = true;
    }

    const normalizedChapter = stripAccents(course.chapter.toLowerCase());
    const normalizedLesson = stripAccents(course.lessonTitle.toLowerCase());
    if ((normalizedLesson.includes(normalizedQuery) || normalizedChapter.includes(normalizedQuery)) && normalizedQuery.length > 4) {
      score += 120;
      hasSpecificSignal = true;
    } else if (searchableText.includes(normalizedQuery) && normalizedQuery.length > 4) {
      score += 40;
      if (!isMultiTopicIndex || normalizedQuery.length > 15) {
        hasSpecificSignal = true;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestCourse = course;
      bestHasSpecificSignal = hasSpecificSignal;
    }
  }

  if (highestScore >= 12 && bestHasSpecificSignal) {
    return bestCourse;
  }
  return null;
}

const queries = [
  'MANIFESTATIONS LA PREMIERE CRISE DE BERLIN',
  'PROBLEMES DE L\'AGRICULTURE IVOIRIENNE',
  'ATOUTS NATURELS DE LA COTE D\'IVOIRE',
  'THEOREME DE PYTHAGORE',
  'LE BLOC ORIENTAL OU COMMUNISTE',
  'LE BLOC OCCIDENTAL OU CAPITALISTE',
  'ORGANISATION ET FONCTIONNEMENT DES BLOCS'
];

for (const q of queries) {
  const res = testFindOfficialCourse(q);
  console.log(`Q: "${q}" -> Course: ${res?.id}`);
}
