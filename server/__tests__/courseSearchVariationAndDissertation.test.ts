import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { findCanonicalLiteraryWork } from "../literatureWorkKnowledgeBase";

describe("Recherche de Cours & Notions — Dissertation française et philosophie", () => {

  describe("1. Différenciation des résultats selon l'utilisateur & rotation sans bouton variante", () => {
    it("propose des présentations ou formulations distinctes pour deux utilisateurs différents sur la même notion", async () => {
      const resA = await searchAcademicCourseUnified({
        query: "La justice",
        userSeed: "user_alpha_741",
      });

      const resB = await searchAcademicCourseUnified({
        query: "La justice",
        userSeed: "user_beta_982",
      });

      assert.ok(resA, "Résultat A doit être défini");
      assert.ok(resB, "Résultat B doit être défini");
      assert.equal(resA.discipline, "philo");
      assert.equal(resB.discipline, "philo");

      // Les deux résultats traitent bien de la justice avec rigueur
      assert.match(resA.chapterTitle, /Justice/i);
      assert.match(resB.chapterTitle, /Justice/i);
      assert.ok(resA.coreConceptsAndFormulas.length > 0);
      assert.ok(resB.coreConceptsAndFormulas.length > 0);

      // Leurs arguments ou variantes actives doivent présenter des angles ou formulations différents
      const activeVariantA = resA.activeVariant;
      const activeVariantB = resB.activeVariant;
      const firstArgStatementA = resA.coreConceptsAndFormulas[0]?.formulaOrRule;
      const firstArgStatementB = resB.coreConceptsAndFormulas[0]?.formulaOrRule;

      // Soit la variante active diffère, soit la formulation / explication de tête diffère
      const isDifferentiated = (activeVariantA !== activeVariantB) || (firstArgStatementA !== firstArgStatementB);
      assert.ok(isDifferentiated, "Les résultats de deux utilisateurs distincts doivent être personnalisés et varier");
    });

    it("propose des formulations ou angles différents lors de requêtes successives par le même utilisateur", async () => {
      const resSearch1 = await searchAcademicCourseUnified({
        query: "La liberté",
        variant: 0,
        userSeed: "student_persist_12",
      });

      const resSearch2 = await searchAcademicCourseUnified({
        query: "La liberté",
        variant: 1,
        userSeed: "student_persist_12",
      });

      assert.ok(resSearch1);
      assert.ok(resSearch2);
      assert.match(resSearch1.chapterTitle, /Liberté/i);
      assert.match(resSearch2.chapterTitle, /Liberté/i);

      // Les arguments ou explications de la variante 0 et 1 doivent offrir des perspectives distinctes
      const statements1 = resSearch1.coreConceptsAndFormulas.map(c => c.formulaOrRule).join(" ");
      const statements2 = resSearch2.coreConceptsAndFormulas.map(c => c.formulaOrRule).join(" ");
      assert.notEqual(statements1, statements2, "La deuxième recherche doit offrir une variation d'arguments ou de formulations");
    });

    it("permet à l'option « Voir plus » d'étendre les arguments et angles sans doublon", async () => {
      const resSingle = await searchAcademicCourseUnified({
        query: "La justice",
        variant: 0,
        appendVariants: false,
      });

      const resAppended = await searchAcademicCourseUnified({
        query: "La justice",
        variant: 0,
        appendVariants: true,
      });

      assert.ok(resSingle);
      assert.ok(resAppended);
      assert.ok(
        resAppended.coreConceptsAndFormulas.length >= resSingle.coreConceptsAndFormulas.length,
        "L'option Voir plus doit enrichir ou compléter la liste d'arguments"
      );

      // Vérifier l'absence de doublons stricts dans les noms ou formules
      const uniqueNames = new Set(resAppended.coreConceptsAndFormulas.map(c => c.name));
      assert.equal(uniqueNames.size, resAppended.coreConceptsAndFormulas.length, "Aucun doublon strict dans les arguments Voir plus");
    });
  });

  describe("2. Spécificité Dissertation de Français (Œuvres, Personnages, Procédés, Scènes Clés)", () => {
    it("fournit une fiche complète de dissertation pour 'Les Soleils des Indépendances' d'Ahmadou Kourouma", async () => {
      const res = await searchAcademicCourseUnified({
        query: "Les Soleils des Indépendances",
      });

      assert.ok(res);
      assert.equal(res.discipline, "francais");
      assert.match(res.chapterTitle, /Soleils des Indépendances/i);

      // Vérification des arguments réutilisables
      assert.ok(res.coreConceptsAndFormulas.length >= 3);
      assert.ok(res.coreConceptsAndFormulas.some(c => /Fama|Bâtardise|Désillusion|Hybridation|Malinké/i.test(c.formulaOrRule + " " + (c.explanation || ""))));

      // Vérification des personnages clés et de leur utilité
      assert.ok(res.coreConceptsAndFormulas.some(c => /Personnage|Fama|Salimata/i.test(c.name)));

      // Vérification des procédés littéraires
      assert.ok(res.coreConceptsAndFormulas.some(c => /Procédé|Malinkisation|Oralité|Ironie/i.test(c.name)));

      // Vérification des scènes clés avec application examen
      assert.ok(res.coreConceptsAndFormulas.some(c => /Scène Clé|Passage|Frontière/i.test(c.name)));

      // Vérification du contexte et des rapprochements littéraires
      assert.ok(res.classicExamTraps.some(t => /Rapprochements|Auteur|Césaire|Oyono|Mongo Beti/i.test(t)));
    });

    it("fournit une analyse de dissertation pour 'L\\'Étranger' d'Albert Camus", async () => {
      const res = await searchAcademicCourseUnified({
        query: "L'Étranger de Camus",
      });

      assert.ok(res);
      assert.equal(res.discipline, "francais");
      assert.match(res.chapterTitle, /L'Étranger/i);
      assert.ok(res.coreConceptsAndFormulas.some(c => /Meursault|Absurde|Soleil|Écriture blanche/i.test(c.formulaOrRule + " " + (c.explanation || ""))));
    });

    it("fournit une analyse de dissertation pour 'Cahier d\\'un retour au pays natal' d'Aimé Césaire", async () => {
      const res = await searchAcademicCourseUnified({
        query: "Cahier d'un retour au pays natal",
      });

      assert.ok(res);
      assert.equal(res.discipline, "francais");
      assert.match(res.chapterTitle, /Cahier d'un retour au pays natal/i);
      assert.ok(res.coreConceptsAndFormulas.some(c => /Négritude|Césaire|Révolte|Aliénation|Cri/i.test(c.formulaOrRule + " " + (c.explanation || ""))));
    });

    it("reconnaît les requêtes par auteur littéraire au programme (ex: 'Mariama Bâ', 'Molière', 'Victor Hugo')", async () => {
      const resMariama = await searchAcademicCourseUnified({ query: "Mariama Bâ Une si longue lettre" });
      assert.ok(resMariama);
      assert.equal(resMariama.discipline, "francais");
      assert.match(resMariama.chapterTitle, /Une si longue lettre/i);

      const resMoliere = await searchAcademicCourseUnified({ query: "Tartuffe de Moliere" });
      assert.ok(resMoliere);
      assert.equal(resMoliere.discipline, "francais");
      assert.match(resMoliere.chapterTitle, /Tartuffe/i);
    });
  });

  describe("3. Spécificité Dissertation de Philosophie (Notions, Distinctions, Citations, Pistes)", () => {
    it("fournit des distinctions conceptuelles, arguments, citations et pistes pour 'Le bonheur'", async () => {
      const res = await searchAcademicCourseUnified({
        query: "Le bonheur",
      });

      assert.ok(res);
      assert.equal(res.discipline, "philo");
      assert.match(res.chapterTitle, /Bonheur/i);

      // Définition rigoureuse
      assert.ok(res.definitionAndScope.length > 50);

      // Distinctions conceptuelles indispensables en dissertation de philo
      assert.ok(
        res.definitionAndScope.includes("Distinctions Conceptuelles") ||
        res.coreConceptsAndFormulas.some(c => /Distinction|Plaisir|Joie|Désir/i.test(c.name + " " + c.formulaOrRule)),
        "Doit comporter des distinctions conceptuelles"
      );

      // Thèses et arguments philosophiques réutilisables
      assert.ok(res.coreConceptsAndFormulas.length >= 3);
      assert.ok(res.coreConceptsAndFormulas.some(c => /Argument|Axe|Thèse/i.test(c.name)));

      // Références aux philosophes classiques (Aristote, Kant, Epicure, etc.)
      const textCorpus = res.coreConceptsAndFormulas.map(c => c.formulaOrRule + " " + (c.explanation || "")).join(" ");
      assert.ok(/Aristote|Kant|Épicure|Epicure|Spinoza|Sénèque|Rousseau/i.test(textCorpus));

      // Présence de pièges d'examen / pistes de démonstration
      assert.ok(res.classicExamTraps.length > 0);
    });

    it("fournit des arguments contradictoires et citations authentiques pour 'La vérité'", async () => {
      const res = await searchAcademicCourseUnified({
        query: "La vérité",
      });

      assert.ok(res);
      assert.equal(res.discipline, "philo");
      assert.match(res.chapterTitle, /Vérité/i);

      // Vérifier la présence de citations exactes avec guillemets
      assert.ok(res.coreConceptsAndFormulas.some(c => c.formulaOrRule.includes("«") || (c.explanation && c.explanation.includes("«"))));

      // Problématique ou enjeux
      assert.ok(
        res.definitionAndScope.includes("Problématique") ||
        res.definitionAndScope.includes("Enjeux") ||
        res.coreConceptsAndFormulas.some(c => /Problème|Enjeu|Doute|Certitude/i.test(c.formulaOrRule))
      );
    });
  });

  describe("4. Qualité et fiabilité académique", () => {
    it("ne produit aucune donnée inventée et conserve la véracité des références et contextes", () => {
      const work = findCanonicalLiteraryWork("Soleils des Indépendances");
      assert.ok(work);
      assert.equal(work.author, "Ahmadou Kourouma");
      assert.equal(work.genre, "Roman");
      assert.ok(work.themes.includes("La désillusion et la bâtardise des indépendances africaines"));
      assert.ok(work.characters.some(c => c.name === "Fama Doumbouya"));
      assert.ok(work.literaryDevices.some(d => d.device.includes("Malinkisation")));
    });
  });
});

