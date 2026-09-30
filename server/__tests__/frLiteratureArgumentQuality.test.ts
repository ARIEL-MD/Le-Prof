import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ALL_ARGUMENT_VARIANTS } from "../argumentVariationEngine";

describe("Français dissertation — roman, théâtre, poésie", () => {
  for (const key of ["roman", "theatre", "poesie"]) {
    it(`${key} possède un corpus distinct`, () => {
      assert.ok(ALL_ARGUMENT_VARIANTS[key]);
      assert.ok(ALL_ARGUMENT_VARIANTS[key].length > 0);
    });
  }

  it("ne doit pas utiliser de préfixes génériques dans les arguments sources", () => {
    const banned = /^(On peut ainsi|On peut donc|L'analyse rigoureuse|Cette thèse revient|Autrement dit|Il apparaît)/i;
    for (const key of ["roman", "theatre", "poesie"]) {
      for (const perspective of ALL_ARGUMENT_VARIANTS[key]) {
        for (const arg of perspective.arguments) {
          assert.doesNotMatch(arg.statement, banned);
          for (const variant of arg.formulationVariants || []) {
            assert.doesNotMatch(variant.statement, banned);
          }
        }
      }
    }
  });
});
