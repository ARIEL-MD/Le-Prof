import test from "node:test";
import assert from "node:assert/strict";
import { PHILO_DESIR_VARIANTS } from "../argumentVariants/philoDesir";
import { searchAcademicResourcesWithVariations, identifyArgumentTopic } from "../argumentVariationEngine";

test("La base Désir respecte la structure argument/explanation/reference/variants", () => {
  assert.equal(PHILO_DESIR_VARIANTS.length, 4);
  const args = PHILO_DESIR_VARIANTS.flatMap(v => v.arguments);
  assert.equal(args.length, 8);
  for (const arg of args) {
    assert.ok(arg.statement);
    assert.ok(arg.explanation);
    assert.ok(arg.author);
    assert.ok(arg.work);
    assert.ok(Array.isArray(arg.formulationVariants));
    assert.ok((arg.formulationVariants?.length ?? 0) >= 3);
    for (const variant of arg.formulationVariants ?? []) {
      assert.ok(variant.statement);
      assert.ok(variant.explanation);
    }
  }
});

test("La recherche Désir route vers le corpus structuré", () => {
  assert.equal(identifyArgumentTopic("arguments sur le désir"), "desir");
  const result = searchAcademicResourcesWithVariations("arguments sur le désir", 2);
  assert.ok(result);
  assert.equal(result?.discipline, "philo");
  assert.equal(result?.topicTitle, "Désir");
  assert.equal(result?.totalVariants, 4);
});

test("Les variantes ne modifient jamais la référence philosophique", () => {
  for (const corpus of PHILO_DESIR_VARIANTS) {
    for (const arg of corpus.arguments) {
      const variants = arg.formulationVariants ?? [];
      for (const v of variants) {
        assert.equal(typeof v.statement, "string");
        assert.equal(typeof v.explanation, "string");
        assert.notEqual(v.statement.trim(), "");
        assert.notEqual(v.explanation.trim(), "");
        assert.ok(arg.author.length > 0);
        assert.ok(arg.work.length > 0);
      }
      assert.ok(new Set(variants.map(v => v.statement)).size >= 3);
    }
  }
});
