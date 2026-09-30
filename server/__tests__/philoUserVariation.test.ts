import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle } from "../philoEngine/philoEngine";

const subject = "Le désir est-il un obstacle au bonheur ?";

test("même sujet : même structure, rédaction philosophique différente selon l'utilisateur", () => {
  const a = solvePhiloTle(subject, { userSeed: "student-A" });
  const b = solvePhiloTle(subject, { userSeed: "student-B" });
  assert.equal(a.success, true);
  assert.equal(b.success, true);
  assert.equal(a.result!.problemStatement, b.result!.problemStatement);
  assert.equal(a.structuredRedaction!.development.part1.title, b.structuredRedaction!.development.part1.title);
  assert.equal(a.structuredRedaction!.development.part2.title, b.structuredRedaction!.development.part2.title);
  assert.notEqual(a.structuredRedaction!.introduction.fullText, b.structuredRedaction!.introduction.fullText);
  assert.notEqual(a.structuredRedaction!.conclusion.fullText, b.structuredRedaction!.conclusion.fullText);
});

test("régression : la variation ne doit jamais mélanger le titre d'un axe et les arguments de l'axe opposé", () => {
  const subject = "La philosophie est-elle utile ?";
  for (const seed of ["student-A", "student-B", "student-C", "student-D"]) {
    const result = solvePhiloTle(subject, { userSeed: seed });
    assert.equal(result.success, true);
    const redaction = result.structuredRedaction!;
    const axe1 = redaction.development.part1;
    const axe2 = redaction.development.part2;

    // La relation « philosophie / utilité » définit l'Axe I comme l'objection
    // pratique et l'Axe II comme la portée positive de la philosophie.
    assert.match(axe1.title, /inefficacit|st[ée]rilit|absence de certitudes|inefficacit[ée] pratique/i);
    assert.match(axe2.title, /fondement|irremplaçable|indispensable|esprit critique/i);

    const axe1Text = axe1.subParts.map(s => `${s.argument} ${s.explication}`).join(" ");
    const axe2Text = axe2.subParts.map(s => `${s.argument} ${s.explication}`).join(" ");
    assert.match(axe1Text, /ne résout pas|aucun résultat|divergences|stérile|inefficac|impuiss/i);
    assert.match(axe2Text, /libère|esprit critique|indispensable|éclaire|fondement|nécessaire/i);

    // La conclusion doit effectuer une synthèse précise et ne pas recycler la
    // même formule causale six fois.
    assert.match(redaction.conclusion.fullText, /utilité propre|rendement pratique|pratique critique/i);
    const siAlorsCount = (redaction.development.part1.fullText + redaction.development.part2.fullText).match(/\bsi\b[^.!?]{0,160}\balors\b/gi)?.length || 0;
    assert.ok(siAlorsCount <= 2, `Trop de répétitions « si... alors » : ${siAlorsCount}`);
  }
});
