import test from "node:test";
import assert from "node:assert/strict";
import {
  ALL_ARGUMENT_VARIANTS,
  PHILO_MAJOR_NOTIONS,
  getVariedArgumentCorpus,
} from "../argumentVariationEngine";

const EXPECTED = new Set(PHILO_MAJOR_NOTIONS);

test("Les 24 grandes notions philosophiques sont couvertes", () => {
  assert.equal(EXPECTED.size, 24);
  for (const notion of PHILO_MAJOR_NOTIONS) {
    assert.ok(ALL_ARGUMENT_VARIANTS[notion], `Corpus absent: ${notion}`);
    assert.ok(ALL_ARGUMENT_VARIANTS[notion].length >= 1, `Aucun angle: ${notion}`);
  }
});

test("Chaque argument des 24 notions possède les 5 éléments demandés", async () => {
  for (const notion of PHILO_MAJOR_NOTIONS) {
    const result = await getVariedArgumentCorpus({ query: `arguments sur ${notion}`, topic: notion });
    assert.ok(result, `Résultat absent: ${notion}`);
    const args = result!.variants.flatMap(v => v.arguments);
    assert.ok(args.length > 0, `Aucun argument: ${notion}`);
    for (const arg of args) {
      assert.ok(arg.statement);
      assert.ok(arg.explanation);
      assert.ok(arg.author);
      assert.ok(arg.work);
      assert.ok((arg.formulationVariants?.length ?? 0) >= 3, `Variantes insuffisantes: ${notion}`);
      const unique = new Set(arg.formulationVariants!.map(v => v.statement));
      assert.equal(unique.size, 3, `Formulations dupliquées: ${notion}`);
      for (const v of arg.formulationVariants!) {
        assert.ok(v.statement);
        assert.ok(v.explanation);
      }
    }
  }
});
