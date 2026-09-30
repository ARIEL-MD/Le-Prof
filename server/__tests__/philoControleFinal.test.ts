import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle, validateDissertation } from "../philoEngine/philoEngine";
import { auditAndEnforcePartRigor, enforceLimiterVsExclureNuance } from "../philoEngine/philoMethodologyValidator";

test("Contrôle Final Obligatoire en 12 points & Priorité Structurale", async (t) => {
  await t.test("Sujet classique : L’idée d’inconscient exclut-elle l’idée de liberté ?", () => {
    const subject = "L’idée d’inconscient exclut-elle l’idée de liberté ?";
    const result = solvePhiloTle(subject);

    assert.equal(result.success, true);
    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    // 1. Lexique conceptuel : notions définies séparément
    const lexique = meth?.philoPreliminaryWork.lexiqueDefinitions || [];
    assert.ok(lexique.length >= 2, "Le lexique doit contenir au moins 2 définitions");
    const inconscientDef = lexique.find(l => /inconscient/i.test(l.terme));
    const liberteDef = lexique.find(l => /libert/i.test(l.terme));
    assert.ok(inconscientDef, "L'inconscient doit être défini");
    assert.ok(liberteDef, "La liberté doit être définie");
    assert.ok(inconscientDef?.definition.includes("pulsions") || inconscientDef?.definition.includes("psychique"));
    assert.ok(liberteDef?.definition.includes("autodétermination") || liberteDef?.definition.includes("volonté"));

    // 2. Problématique interrogative sans 'ou'
    const probleme = meth?.philoPreliminaryWork.problematisation.probleme || "";
    assert.match(probleme, /L’idée d’inconscient exclut-elle l’idée de liberté \?|L'inconscient exclut-il la liberté \?/i);
    assert.equal(probleme.includes(" ou "), false, "Interdiction absolue de 'ou' dans la problématique");

    // 3. Aspects contrastés
    const aspect1 = meth?.philoPreliminaryWork.problematisation.aspect1 || "";
    const aspect2 = meth?.philoPreliminaryWork.problematisation.aspect2 || "";
    assert.match(aspect1, /^dans\s+quelle\s+mesure\b/i);
    assert.match(aspect2, /^toutefois,?\s*/i);

    // 4. Formule de liaison canonique obligatoire
    const introFull = result.structuredRedaction?.introduction.fullText || "";
    assert.ok(introFull.includes("Pour répondre à ce problème d’autres questions s’ajoutent :"));
    assert.equal(introFull.includes("d'une part"), false);
    assert.equal(introFull.includes("d'autre part"), false);

    // 5. Structure Bipartite (2 axes)
    const part1 = result.structuredRedaction?.development.part1;
    const part2 = result.structuredRedaction?.development.part2;
    assert.ok(part1, "L'Axe 1 doit être présent");
    assert.ok(part2, "L'Axe 2 doit être présent");
    assert.equal(part1?.subParts.length, 3, "L'Axe 1 doit comporter 3 sous-parties");
    assert.equal(part2?.subParts.length, 3, "L'Axe 2 doit comporter 3 sous-parties");

    // 6. Enchaînement séquentiel : Idée -> Explication préalable -> Citation -> Analyse
    for (const sp of [...part1!.subParts, ...part2!.subParts]) {
      assert.ok(sp.argument.length > 20, "L'argument doit être solide");
      assert.ok(sp.explication.length > 30, "L'explication doit être approfondie");
      assert.ok(sp.illustration.citation.length > 5, "La citation doit exister");
      assert.ok(sp.illustration.auteur.length > 2, "L'auteur doit être nommé");
      assert.ok(sp.illustration.oeuvre.length > 2, "L'œuvre doit être nommée");
      assert.ok(sp.illustration.analyseIllustration.length > 20, "L'analyse d'illustration doit être explicite");

      // Dans le paragraphe assemblé, l'explication doit précéder l'auteur/la citation
      const authorIndex = sp.fullText.indexOf(sp.illustration.auteur);
      const explicationSnippet = sp.explication.slice(0, 15);
      const explicationIndex = sp.fullText.indexOf(explicationSnippet);
      assert.ok(explicationIndex < authorIndex, "L'explication doit précéder la mention de l'auteur et la citation");
    }

    // 7. Auteurs majeurs mobilisés
    const auteursAxe1 = part1!.subParts.map(s => s.illustration.auteur);
    const auteursAxe2 = part2!.subParts.map(s => s.illustration.auteur);
    assert.ok(auteursAxe1.some(a => /Freud/i.test(a)), "Freud doit être présent dans l'Axe 1");
    assert.ok(auteursAxe1.some(a => /Spinoza/i.test(a)), "Spinoza doit être présent dans l'Axe 1");
    assert.ok(auteursAxe2.some(a => /Sartre/i.test(a)), "Sartre doit être présent dans l'Axe 2");
    assert.ok(auteursAxe2.some(a => /Freud|Ricœur/i.test(a)), "Freud ou Ricœur doit être présent dans l'Axe 2");

    // 8. Transition charnière canonique
    const transition = result.structuredRedaction?.development.transition1 || "";
    assert.ok(transition.includes("De ce qui précède, nous retenons que"));
    assert.ok(transition.includes("Toutefois"));

    // 9. Conclusion en 3 temps sans citation
    const conclusion = result.structuredRedaction?.conclusion.fullText || "";
    assert.ok(conclusion.includes("Au terme de notre"));
    assert.ok(conclusion.includes("Toutefois"));
    assert.equal(conclusion.includes("«"), false, "La conclusion ne doit contenir aucune citation");

    // 10. Rapport de validation interne en 12 points
    const report = meth?.philoPreliminaryWork.validationReport;
    assert.ok(report, "Le rapport de validation doit être fourni");
    assert.equal(report?.isValid, true);
    assert.ok(report?.scoreConformite >= 11, `Le score de conformité doit être au moins 11/12, obtenu: ${report?.scoreConformite}`);
    assert.equal(report?.checks.length, 12, "Le rapport doit comporter les 12 contrôles");

    // 10.b Audits de partie et test de pertinence renforcé
    assert.ok(report?.part1Audit, "L'audit de l'Axe 1 doit être présent");
    assert.ok(report?.part2Audit, "L'audit de l'Axe 2 doit être présent");
    assert.equal(report?.part1Audit.isApproved, true, "L'Axe 1 doit être approuvé");
    assert.equal(report?.part2Audit.isApproved, true, "L'Axe 2 doit être approuvé");
    assert.equal(report?.part1Audit.q3_aucunArgumentNeContredit, true, "Aucun argument ne doit contredire la thèse de l'Axe 1");
    assert.equal(report?.part2Audit.q3_aucunArgumentNeContredit, true, "Aucun argument ne doit contredire la thèse de l'Axe 2");
    assert.equal(report?.part1Audit.q4_auteursReellementUtiles, true, "Les auteurs doivent être réellement utiles");
    assert.equal(report?.part1Audit.q5_argumentsRepondentAuSujet, true, "Chaque argument doit répondre au sujet");
    assert.equal(report?.part1Audit.nuanceLimiterVsExclureRespected, true, "La nuance limiter vs exclure doit être respectée");

    // Vérification des 3 questions du Test de Pertinence Renforcé sur chaque sous-partie
    for (const auditedSp of report!.part1Audit.auditedSubParts) {
      assert.ok(auditedSp.question1_queDitAuteur.length > 10, "Question 1 : Que dit l'auteur doit être renseignée");
      assert.ok(auditedSp.question2_renforceOuNuance.length > 10, "Question 2 : Renforce ou nuance la thèse");
      assert.ok(auditedSp.question3_reponseAuSujet.length > 10, "Question 3 : Réponse précise au sujet");
      assert.equal(auditedSp.linkWithSubjectExplicit, true, "Le lien avec le sujet doit être explicite");
    }

    // 11. Validateur autonome validateDissertation
    const fullText = meth?.level5FullRedaction || "";
    const standaloneValidation = validateDissertation(fullText, subject);
    assert.equal(standaloneValidation.isValid, true);
    assert.ok(standaloneValidation.score >= 10);
  });

  await t.test("Contrôle de Cohérence : Détection et correction automatique des contradictions internes", () => {
    // Tester directement la fonction auditAndEnforcePartRigor avec un argument contradictoire
    const contradictorySubParts = [
      {
        subPartLetter: "A",
        title: "La liberté souveraine",
        argument: "L'homme possède une volonté libre et autonome absolue.", // Contradiction flagrante avec l'Axe 1
        explication: "Chacun décide par lui-même en toute lucidité.",
        illustration: {
          auteur: "Sigmund Freud",
          oeuvre: "Une difficulté de la psychanalyse",
          citation: "Le moi n'est pas maître dans sa propre maison.",
          analyseIllustration: "Ce qui montre que l'inconscient existe."
        },
        fullText: ""
      },
      {
        subPartLetter: "B",
        title: "Le déterminisme",
        argument: "La conscience est déterminée par des pulsions refoulées.",
        explication: "L'inconscient oriente nos désirs à notre insu.",
        illustration: {
          auteur: "Baruch Spinoza",
          oeuvre: "Lettre à Schuller (Correspondance)",
          citation: "Les hommes se croient libres car ils ignorent les causes qui les déterminent.",
          analyseIllustration: "Si l'inconscient détermine nos actes, alors la liberté immédiate est remise en cause."
        },
        fullText: ""
      },
      {
        subPartLetter: "C",
        title: "Les actes manqués",
        argument: "Les lapsus manifestent le triomphe des désirs inconscients.",
        explication: "La volonté est contrecarrée par le refoulement.",
        illustration: {
          auteur: "Sigmund Freud",
          oeuvre: "Psychopathologie de la vie quotidienne",
          citation: "L'acte manqué est un acte réussi du point de vue de l'inconscient.",
          analyseIllustration: "Cela prouve directement que l'inconscient s'oppose à la maîtrise volontaire."
        },
        fullText: ""
      }
    ];

    const result = auditAndEnforcePartRigor(
      1,
      "Axe I : L'inconscient semble exclure ou limiter la liberté",
      contradictorySubParts,
      "L'idée d'inconscient exclut-elle l'idée de liberté ?",
      "De ce qui précède, nous retenons que... Toutefois, ... ?"
    );

    assert.equal(result.auditedPart.detectedContradictions.length >= 1, true, "La contradiction doit être détectée");
    // L'argument A a été reformulé pour éliminer la contradiction avec l'Axe 1
    assert.match(result.correctedSubParts[0].argument, /déterminismes inconscients|limite|contrarie/i);
    assert.equal(result.auditedPart.isApproved, true);
  });

  await t.test("Distinction Limiter vs Exclure : Évite la confusion entre limitation et suppression totale", () => {
    const fakeComp: any = {
      conclusionFullText: "En définitive, nous constatons que l'inconscient supprime totalement la liberté de l'homme.",
      bilanSynthese: "L'inconscient anéantit toute liberté.",
      reponseDefinitive: "La liberté est totalement supprimée.",
      elargissement: "Il convient d'en tirer les leçons éthiques."
    };

    const correction = enforceLimiterVsExclureNuance(fakeComp);
    assert.equal(correction.wasCorrected, true);
    assert.equal(fakeComp.conclusionFullText.includes("supprime totalement la liberté"), false);
    assert.match(fakeComp.conclusionFullText, /remet en cause la prétention à une liberté immédiate et absolue/);
  });

  await t.test("Sujet Responsabilité & Inconscient : L'homme est-il responsable malgré son inconscient ?", () => {
    const subject = "L'homme est-il responsable malgré son inconscient ?";
    const result = solvePhiloTle(subject);

    assert.equal(result.success, true);
    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    const aspect1 = meth?.philoPreliminaryWork.problematisation.aspect1 || "";
    const aspect2 = meth?.philoPreliminaryWork.problematisation.aspect2 || "";
    assert.match(aspect1, /responsab/i);
    assert.match(aspect2, /responsab|exigence\s+morale|r[ée]pondre/i);

    const part1 = result.structuredRedaction?.development.part1;
    const part2 = result.structuredRedaction?.development.part2;
    assert.equal(part1?.subParts.length, 3);
    assert.equal(part2?.subParts.length, 3);

    const auteursAxe2 = part2!.subParts.map(s => s.illustration.auteur);
    assert.ok(auteursAxe2.some(a => /Sartre|Kant/i.test(a)));
  });

  await t.test("Priorité Structurale : respecte la chaîne conceptuelle sans court-circuit", () => {
    const subject = "L'idée d'inconscient exclut-elle l'idée de liberté ?";
    const result = solvePhiloTle(subject);
    const fullRedaction = result.methodologyAnalysis?.level5FullRedaction || "";

    // Vérifier l'ordre séquentiel dans le texte intégral :
    // 1. Définition / Amorce
    // 2. Problème
    // 3. Annonce du plan (Pour répondre à ce problème d'autres questions s'ajoutent)
    // 4. Axe I (Thèse)
    // 5. Transition (De ce qui précède... Toutefois...)
    // 6. Axe II (Antithèse / Dépassement)
    // 7. Conclusion (Au terme de notre analyse...)

    const idxProblem = fullRedaction.indexOf("L’idée d’inconscient exclut-elle");
    const idxAnnonce = fullRedaction.indexOf("Pour répondre à ce problème d’autres questions s’ajoutent :");
    const idxAxe1 = fullRedaction.indexOf("Axe I :");
    const idxTransition = fullRedaction.indexOf("De ce qui précède, nous retenons que");
    const idxAxe2 = fullRedaction.indexOf("Axe II :");
    const idxConclusion = fullRedaction.indexOf("Au terme de notre");

    assert.ok(idxProblem < idxAnnonce, "Le problème doit précéder l'annonce du plan");
    assert.ok(idxAnnonce < idxAxe1, "L'annonce du plan doit précéder l'Axe I");
    assert.ok(idxAxe1 < idxTransition, "L'Axe I doit précéder la transition");
    assert.ok(idxTransition < idxAxe2, "La transition doit précéder l'Axe II");
    assert.ok(idxAxe2 < idxConclusion, "L'Axe II doit précéder la conclusion");
  });
});
