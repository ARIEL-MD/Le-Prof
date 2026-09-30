import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { solveFrancaisTle } from '../francaisTleEngine/francaisTleEngine';

describe('Routage théâtre', () => {
  const cases = [
    ['fonction lyrique du théâtre', 'lyrique'],
    ['fonction esthétique du théâtre', 'esthétique'],
    ['fonction évasive du théâtre', 'évasive'],
    ['fonction ludique du théâtre', 'ludique'],
    ['fonction didactique du théâtre', 'didactique'],
    ['fonction engagée du théâtre', 'engagée'],
    ['fonction satirique du théâtre', 'satirique'],
  ];

  for (const [input] of cases) {
    test(`reconnaît ${input}`, () => {
      const result = solveFrancaisTle(input);
      assert.equal(result.success, true);
      assert.match(result.classification.genreOrTopic, /Théâtre/);
      assert.ok(result.result?.steps[0]?.exemplaryDraft.includes('Argument :'));
    });
  }
});
