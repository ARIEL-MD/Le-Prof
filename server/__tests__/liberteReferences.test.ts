import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ALL_ARGUMENT_VARIANTS } from '../argumentVariationEngine';

describe('Références de Liberté', () => {
  it('attribue correctement la formule de Descartes', () => {
    const arg = ALL_ARGUMENT_VARIANTS.liberté?.[0]?.arguments?.[0] ?? ALL_ARGUMENT_VARIANTS.liberte?.[0]?.arguments?.[0];
    assert.ok(arg);
    assert.match(arg.work, /Principes de la philosophie/i);
  });

  it('attribue correctement la formule de Sartre', () => {
    const all = ALL_ARGUMENT_VARIANTS.liberte.flatMap(v => v.arguments);
    const arg = all.find(a => /condamné à être libre/i.test(a.quote));
    assert.ok(arg);
    assert.equal(arg.work, "L'Existentialisme est un humanisme");
  });
});
