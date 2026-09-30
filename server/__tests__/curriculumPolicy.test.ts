import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_CURRICULUM, resolveCurriculum, curriculumSearchOrder } from '../curriculumPolicy';

test('Côte d’Ivoire est le référentiel par défaut', () => {
  assert.equal(DEFAULT_CURRICULUM, 'ci');
  assert.equal(resolveCurriculum(undefined), 'ci');
  assert.equal(resolveCurriculum(''), 'ci');
});

test('la recherche CI passe avant les référentiels externes', () => {
  assert.deepEqual(curriculumSearchOrder('ci'), ['ci', 'francophone', 'international']);
});

test('un référentiel explicitement international reste respecté', () => {
  assert.equal(resolveCurriculum('international'), 'international');
});
