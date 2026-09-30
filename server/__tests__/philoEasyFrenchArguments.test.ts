import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { differentiateArgumentItem } from '../argumentReformulator';

describe('Arguments de philosophie : français sûr et références stables', () => {
  const arg = {
    statement: "L'illusion de la liberté découle de la méconnaissance des causes réelles qui nous déterminent.",
    author: 'Spinoza',
    work: 'Lettre à Schuller',
    quote: 'Une citation authentique reste inchangée.',
    explanation: "Nous pensons parfois être libres parce que nous ne connaissons pas tout ce qui influence nos choix."
  };

  it('ne vide jamais l’explication', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'student-A' });
    assert.ok(result.explanation.trim().length > 0);
  });

  it('ne casse pas les élisions françaises', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'student-A' });
    assert.doesNotMatch(`${result.statement} ${result.explanation}`, /\bl['’][a-zà-ÿ]|\bd['’][a-zà-ÿ]|\bc['’][a-zà-ÿ]/i);
  });

  it('conserve exactement la citation et les références', () => {
    const result = differentiateArgumentItem({ arg, argIndex: 0, variantIndex: 0, topicKey: 'liberte', seed: 'student-A' });
    assert.equal(result.quote, arg.quote);
    assert.equal(result.author, arg.author);
    assert.equal(result.work, arg.work);
  });
});
