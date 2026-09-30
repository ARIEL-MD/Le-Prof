import type { CourseSearchResult } from '../src/types';
import { resolveUniversalSchoolContext, type SchoolIntent } from './universalSchoolRouter';

/**
 * Contrat de réponse déterministe : la forme de sortie suit l'intention détectée,
 * sans génération libre ni API d'IA. Le contenu factuel reste celui fourni par les
 * bases spécialisées; cette couche ne fabrique aucune information.
 */
export function applyUniversalResponsePolicy(result: CourseSearchResult, query: string, curriculum?: string): CourseSearchResult {
  if (result.noResult) return result;
  const intent = resolveUniversalSchoolContext(query, curriculum).intent;

  // Les fiches déjà marquées comme réponses directes sont conservées telles quelles.
  if (result.isDirectAnswer) return result;

  const directIntents: SchoolIntent[] = [
    'definition', 'date', 'author', 'work', 'cause', 'consequence', 'characteristics',
    'formula', 'theorem', 'method', 'summary', 'comparison', 'argument', 'citation',
    'example', 'role', 'objective', 'principle', 'organ', 'limit', 'advantage', 'manifestation'
  ];

  if (!directIntents.includes(intent)) return result;

  // On ne transforme en réponse directe que si le moteur possède déjà une matière
  // ciblée. Cela évite de masquer une fiche générale lorsqu'une facette n'a pas été trouvée.
  const direct = (result.directContent || '').trim();
  if (!direct) return result;

  return {
    ...result,
    isDirectAnswer: true,
    directContent: direct,
    definitionAndScope: direct,
    coreConceptsAndFormulas: [],
    stepByStepMethod: [],
    solvedExample: { problemStatement: '', solutionStepByStep: '', finalAnswer: '' },
    classicExamTraps: [],
    selfCheckChecklist: [],
    quickRevisionMemo: ''
  };
}
