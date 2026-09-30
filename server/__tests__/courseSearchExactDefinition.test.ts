import test from 'node:test';
import assert from 'node:assert/strict';
import { findExactOfficialDefinition } from '../../src/data/courses';

/** Garde-fou : une demande de définition doit d'abord viser definitions[]. */
test('référentiel officiel : définition exacte de vitesse', () => {
  const match = findExactOfficialDefinition('vitesse');
  assert.ok(match, 'Une définition officielle de « vitesse » doit exister.');
  assert.equal(match?.term.toLowerCase(), 'vitesse');
  assert.equal(match?.course.discipline, 'physique_chimie');
  assert.ok((match?.definition || '').length > 20);
});

test('référentiel officiel : accents et normalisation', () => {
  const match = findExactOfficialDefinition('tension electrique');
  assert.ok(match, 'La normalisation des accents doit retrouver « tension électrique ».');
  assert.match(match?.term || '', /tension/i);
});
