import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveUniversalSchoolContext } from '../universalSchoolRouter';

test('détecte la Côte d’Ivoire comme contexte explicite', () => {
  const c = resolveUniversalSchoolContext("cours d'histoire Terminale Côte d'Ivoire");
  assert.equal(c.country?.code, 'CI');
  assert.equal(c.strictCountryMode, false);
  assert.equal(c.intent, 'course');
});

test('détecte la France sans basculer vers le référentiel ivoirien', () => {
  const c = resolveUniversalSchoolContext('histoire Terminale France : Guerre froide');
  assert.equal(c.country?.code, 'FR');
  assert.equal(c.strictCountryMode, true);
});

test('détecte une demande de définition', () => {
  const c = resolveUniversalSchoolContext('donne la définition de photosynthèse');
  assert.equal(c.intent, 'definition');
});
