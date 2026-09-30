/**
 * Politique de couverture des programmes pour Le Prof.
 *
 * PRIORITÉ 1 : Côte d'Ivoire (référentiel scolaire ivoirien).
 * PRIORITÉ 2 : autres référentiels francophones/internationaux.
 *
 * Cette politique ne prétend pas que le corpus local est déjà exhaustif :
 * elle impose l'ordre de recherche et fournit la matrice qui permet de mesurer
 * objectivement les trous de couverture.
 */

export type CurriculumPriority = 'ci' | 'francophone' | 'international' | 'all';

export const DEFAULT_CURRICULUM: CurriculumPriority = 'ci';

export const COTE_IVOIRE_SCHOOL_SCOPE = {
  primary: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
  lowerSecondary: ['6e', '5e', '4e', '3e'],
  upperSecondary: ['2nde', '1re', 'Tle'],
  examTargets: ['CEPE', 'BEPC', 'BAC'],
  priorityDisciplines: [
    'Français',
    'Mathématiques',
    'Anglais',
    'Espagnol',
    'Allemand',
    'Histoire',
    'Géographie',
    'EDHC',
    'Philosophie',
    'Physique',
    'Chimie',
    'SVT',
    'Informatique',
    'Économie',
    'Éducation artistique',
    'Éducation musicale',
    'EPS',
  ],
} as const;

export function resolveCurriculum(raw?: string): CurriculumPriority {
  const value = String(raw || '').trim().toLowerCase();
  if (!value) return DEFAULT_CURRICULUM;
  if (['ci', 'cote-divoire', 'cote d\'ivoire', 'ivoirien', 'ivoirienne'].includes(value)) return 'ci';
  if (['fr', 'france', 'francophone'].includes(value)) return 'francophone';
  if (['international', 'world', 'monde'].includes(value)) return 'international';
  if (['all', 'tous', 'universal', 'universel'].includes(value)) return 'all';
  return DEFAULT_CURRICULUM;
}

export function curriculumSearchOrder(curriculum?: string): CurriculumPriority[] {
  const selected = resolveCurriculum(curriculum);
  if (selected === 'ci') return ['ci', 'francophone', 'international'];
  if (selected === 'francophone') return ['francophone', 'ci', 'international'];
  if (selected === 'international') return ['international', 'francophone', 'ci'];
  return ['ci', 'francophone', 'international'];
}

export function isIvorianCurriculum(curriculum?: string): boolean {
  return resolveCurriculum(curriculum) === 'ci';
}
