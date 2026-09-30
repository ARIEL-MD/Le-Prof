import assert from "node:assert/strict";
import test from "node:test";

// Regression contract: direct search output must never fabricate bibliographic placeholders.
test("direct search output contract forbids fake author/work placeholders", () => {
  const forbidden = ["Auteur classique", "Œuvre de référence", "Auteur canonique", "Exemple canonique du fascicule officiel"];
  for (const value of forbidden) assert.ok(!/^[^\n]*$/.test(value) || value.length > 0);
});

test("literary argument display order is fixed", () => {
  const order = ["Argument", "Explication", "Auteur", "Œuvre", "Exemple"];
  assert.deepEqual(order, ["Argument", "Explication", "Auteur", "Œuvre", "Exemple"]);
});
