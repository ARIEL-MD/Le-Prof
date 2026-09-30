import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { differentiateArgumentItem } from '../argumentReformulator';

describe('Français des arguments de philosophie : aucune reformulation lexicale dangereuse', () => {
  const arg = {
    statement: "L'aliénation constitue une entrave fondamentale à l'émancipation du sujet.",
    author: 'Auteur test',
    work: 'Œuvre test',
    quote: 'Citation test',
    explanation: "L'aliénation résulte d'un mécanisme qui empêche le sujet de décider librement ; cependant, cette situation peut être dépassée par la prise de conscience."
  };

  it('ne produit aucune élision cassée', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'eleve-a' });
    assert.doesNotMatch(`${result.statement} ${result.explanation}`, /\bl['’][a-zà-ÿ]|\bd['’][a-zà-ÿ]|\bc['’][a-zà-ÿ]/i);
  });

  it('ne coupe pas les phrases et conserve une explication', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'eleve-a' });
    assert.ok(result.statement.trim().length > 0);
    assert.ok(result.explanation.trim().length > 0);
    assert.doesNotMatch(result.explanation, /\b(Pourtant|Cependant|Mais)\s*$/i);
  });

  it('conserve exactement la citation et les références', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'eleve-a' });
    assert.equal(result.quote, arg.quote);
    assert.equal(result.author, arg.author);
    assert.equal(result.work, arg.work);
  });
});
