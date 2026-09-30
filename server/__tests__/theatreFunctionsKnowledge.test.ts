import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { THEATRE_FUNCTIONS_KNOWLEDGE_BASE } from '../../src/data/theatreFunctionsKnowledgeBase';

describe('Base fonctions du théâtre', () => {
  test('contient les 7 fonctions demandées', () => {
    assert.deepEqual(THEATRE_FUNCTIONS_KNOWLEDGE_BASE.map(f => f.key), [
      'lyrique','esthetique','evasive_fictive','ludique','didactique','engagee','satirique'
    ]);
  });

  test('chaque argument possède une structure complète et au moins 3 variantes', () => {
    for (const fn of THEATRE_FUNCTIONS_KNOWLEDGE_BASE) {
      assert.ok(fn.arguments.length >= 3);
      for (const a of fn.arguments) {
        assert.ok(a.argument.length > 20);
        assert.ok(a.explanation.length > 40);
        assert.ok(a.example.author.length > 2);
        assert.ok(a.example.work.length > 2);
        assert.ok(a.example.detail.length > 30);
        assert.ok(a.example.verification.length > 20);
        assert.ok(a.phraseToRemember.length > 15);
        assert.ok(a.variants.argument.length >= 3);
        assert.ok(a.variants.explanation.length >= 3);
        assert.ok(a.variants.phraseToRemember.length >= 3);
      }
    }
  });

  test('ne contient pas les références initiales insuffisamment vérifiées', () => {
    const json = JSON.stringify(THEATRE_FUNCTIONS_KNOWLEDGE_BASE);
    assert.doesNotMatch(json, /L'Ordonnance/i);
    assert.doesNotMatch(json, /Soro Guefala/i);
  });

  test('corrige les formes bibliographiques retenues', () => {
    const json = JSON.stringify(THEATRE_FUNCTIONS_KNOWLEDGE_BASE);
    assert.match(json, /Bernard Binlin Dadié/);
    assert.match(json, /Hyacinthe Kakou/);
    assert.match(json, /Guillaume Oyono Mbia/);
    assert.match(json, /La Tragédie du roi Christophe/);
    assert.match(json, /Une Saison au Congo/);
  });
});
