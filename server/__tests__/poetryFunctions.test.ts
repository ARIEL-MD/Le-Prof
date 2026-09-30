import test from 'node:test';
import assert from 'node:assert/strict';
import { POETRY_FUNCTIONS_KNOWLEDGE_BASE, getAllPoetryArguments } from '../../src/data/poetryFunctionsKnowledgeBase';
import { solveFrancaisTle } from '../francaisTleEngine/francaisTleEngine';

test('base poésie: six fonctions et arguments distincts', () => {
  assert.equal(POETRY_FUNCTIONS_KNOWLEDGE_BASE.length, 6);
  for (const fn of POETRY_FUNCTIONS_KNOWLEDGE_BASE) {
    assert.ok(fn.arguments.length >= 3, `${fn.title} doit avoir plusieurs arguments`);
    assert.equal(new Set(fn.arguments.map((a) => a.argument)).size, fn.arguments.length);
    for (const a of fn.arguments) {
      assert.ok(a.argument && a.explanation && a.example.author && a.example.work && a.phraseToRemember);
      assert.ok(a.variants.argument.length >= 3);
      assert.ok(a.variants.explanation.length >= 3);
      assert.ok(a.variants.phraseToRemember.length >= 3);
    }
  }
});

test('références demandées: Hugo, Baudelaire, Apollinaire, Senghor, Césaire, La Fontaine, Dadié, Gole Bi Gnamien', () => {
  const text = JSON.stringify(getAllPoetryArguments());
  for (const name of ['Victor Hugo','Charles Baudelaire','Guillaume Apollinaire','Léopold Sédar Senghor','Aimé Césaire','Jean de La Fontaine','Bernard Binlin-Dadié','Tommy David Gole Bi Gnamien']) {
    assert.match(text, new RegExp(name.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')));
  }
});

test('route fonctions de la poésie', () => {
  const result = solveFrancaisTle('Donne-moi les fonctions de la poésie avec plusieurs arguments pour une dissertation.');
  assert.equal(result.success, true);
  assert.match(result.result?.title || '', /Fonctions de la poésie/i);
  assert.match(result.methodologyAnalysis?.fullSynthesizedResponse || '', /Fonction lyrique/i);
});

test('route ciblée fonction engagée', () => {
  const result = solveFrancaisTle('Fonction engagée de la poésie : donne plusieurs arguments et des œuvres.');
  assert.equal(result.success, true);
  assert.match(result.methodologyAnalysis?.fullSynthesizedResponse || '', /Fonction engagée/i);
  assert.match(result.methodologyAnalysis?.fullSynthesizedResponse || '', /Cahier d’un retour au pays natal/i);
});
