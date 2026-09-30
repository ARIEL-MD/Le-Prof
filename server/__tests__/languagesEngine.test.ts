import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  detectLanguage,
  solveLanguageExercise,
} from "../languagesEngine/languagesEngine";
import { generateLocalTutorAnswer } from "../localTutorEngine";
import { generateIvorianFallback } from "../ivorianFallback";

describe("Autonomous Deterministic Languages Engine (Anglais, Allemand, Espagnol)", () => {
  describe("Language Detection", () => {
    it("should detect English from sentences and keywords", () => {
      assert.equal(detectLanguage("Turn this sentence into passive voice: The teacher corrected the exams."), "anglais");
      assert.equal(detectLanguage("The dog barked at the stranger yesterday."), "anglais");
      assert.equal(detectLanguage("What is the past simple of teach and buy?"), "anglais");
    });

    it("should detect German from sentences and keywords", () => {
      assert.equal(detectLanguage("Mets cette phrase au Perfekt: Die Schüler lernen die Lektion."), "allemand");
      assert.equal(detectLanguage("Ich habe ein interessantes Buch in der Schule gelesen."), "allemand");
      assert.equal(detectLanguage("Warum ist Bildung wichtig für Jugendliche?"), "allemand");
    });

    it("should detect Spanish from sentences and keywords", () => {
      assert.equal(detectLanguage("Transforma a la voz pasiva: El autor escribió la novela."), "espagnol");
      assert.equal(detectLanguage("Completa con el subjuntivo: Es necesario que tú estudies."), "espagnol");
      assert.equal(detectLanguage("Los alumnos van a la escuela todos los días."), "espagnol");
    });
  });

  describe("English Deterministic Solver", () => {
    it("should solve passive voice exercise without generating a dissertation", () => {
      const res = solveLanguageExercise("Turn into passive: The chef prepared the meal.", "anglais");
      assert.equal(res.language, "anglais");
      assert.ok(res.fullSolution.includes("The meal was prepared by the chef"), `Expected passive sentence but got: ${res.fullSolution}`);
      assert.ok(!res.fullSolution.includes("De prime abord"), "Must not contain dissertation boilerplate");
      assert.ok(!res.fullSolution.includes("Axe 1"), "Must not contain dissertation axes");
      assert.equal(res.methodologyAnalysis.disciplineIdentified, "Anglais");
    });

    it("should solve passive voice with plural objects", () => {
      const res = solveLanguageExercise("Turn into passive: The teacher corrected the exams.", "anglais");
      assert.ok(res.fullSolution.includes("The exams were corrected by the teacher"), `Expected were corrected but got: ${res.fullSolution}`);
    });

    it("should solve guided writing / essay on school or technology", () => {
      const res = solveLanguageExercise("Write a 5-sentence essay about the importance of education.", "anglais");
      assert.ok(res.fullSolution.includes("Education"), "Should contain topic content");
      assert.ok(res.frenchMirrorTranslation, "Should provide French mirror translation");
    });
  });

  describe("German Deterministic Solver", () => {
    it("should solve Perfekt conjugation exercise deterministically", () => {
      const res = solveLanguageExercise("Mets au Perfekt: Die Schüler lernen fleißig.", "allemand");
      assert.equal(res.language, "allemand");
      assert.ok(res.fullSolution.includes("haben"), "Should contain auxiliary haben");
      assert.ok(res.fullSolution.includes("gelernt"), "Should contain participle gelernt");
      assert.ok(!res.fullSolution.includes("dissertation philosophique"), "Must not be dissertation");
    });

    it("should solve subordinate clause with weil", () => {
      const res = solveLanguageExercise("Verbinde mit weil: Er lernt viel. Er will die Prüfung bestehen.", "allemand");
      assert.ok(res.fullSolution.includes("weil"), "Should contain weil");
      assert.ok(res.grammarRulesApplied.length > 0, "Should have grammar rules");
    });
  });

  describe("Spanish Deterministic Solver", () => {
    it("should solve passive voice exercise in Spanish", () => {
      const res = solveLanguageExercise("Pasa a la voz pasiva: El estudiante leyó el libro.", "espagnol");
      assert.equal(res.language, "espagnol");
      assert.ok(res.fullSolution.includes("fue leído por"), `Expected fue leído por but got: ${res.fullSolution}`);
    });

    it("should solve subjunctive sentence in Spanish", () => {
      const res = solveLanguageExercise("Es importante que los jóvenes estudien en la escuela.", "espagnol");
      assert.ok(res.fullSolution.includes("Subjuntivo") || res.fullSolution.includes("estudien"), `Expected subjunctive details but got: ${res.fullSolution}`);
    });
  });

  describe("Prevention of Philosophy / Dissertation Collisions", () => {
    it("should route language homework queries to language solver in localTutorEngine, not philosophy", () => {
      const tutorAnswer = generateLocalTutorAnswer({
        query: "Voici mon devoir d'anglais: Turn into passive voice: The company launched a new product.",
        discipline: "Anglais",
      });
      // MUST NOT be a philosophy dissertation
      assert.ok(!tutorAnswer.includes("ANALYSE ET RÉSOLUTION PHILOSOPHIQUE"), "Must not be philosophy analysis");
      assert.ok(!tutorAnswer.includes("De prime abord"), "Must not contain dissertation introductory cliches");
      assert.ok(tutorAnswer.includes("was launched"), `Expected was launched but got: ${tutorAnswer}`);
    });

    it("should resolve a simple English sentence in ivorianFallback without a dissertation", () => {
      const fallback = generateIvorianFallback({
        subjectTopic: "Turn into passive: The cat caught the mouse.",
        discipline: "Anglais",
        isTwoAxes: false,
      });

      assert.equal(fallback.disciplineIdentified, "Anglais");
      assert.ok(fallback.fullSynthesizedResponse.includes("was caught"), `Expected was caught but got: ${fallback.fullSynthesizedResponse}`);
      assert.ok(!fallback.fullSynthesizedResponse.includes("De prime abord"), "Must not contain dissertation cliches");
    });

    it("should resolve German text in ivorianFallback without a dissertation", () => {
      const fallback = generateIvorianFallback({
        subjectTopic: "Mets au Perfekt: Er macht seine Hausaufgaben.",
        discipline: "Allemand",
        isTwoAxes: false,
      });

      assert.equal(fallback.disciplineIdentified, "Allemand");
      assert.ok(fallback.fullSynthesizedResponse.includes("gemacht"), `Expected gemacht but got: ${fallback.fullSynthesizedResponse}`);
      assert.ok(!fallback.fullSynthesizedResponse.includes("De prime abord"), "Must not contain dissertation cliches");
    });

    it("should resolve Spanish sentence in ivorianFallback without a dissertation", () => {
      const fallback = generateIvorianFallback({
        subjectTopic: "Transforma a voz pasiva: El profesor explicó la lección.",
        discipline: "Espagnol",
        isTwoAxes: false,
      });

      assert.equal(fallback.disciplineIdentified, "Espagnol");
      assert.ok(fallback.fullSynthesizedResponse.includes("fue explicada"), `Expected fue explicada but got: ${fallback.fullSynthesizedResponse}`);
      assert.ok(!fallback.fullSynthesizedResponse.includes("De prime abord"), "Must not contain dissertation cliches");
    });

    it("must NEVER detect a math or science exam as Spanish, German, or English", () => {
      const mathExam = `EXERCICE 1 — FONCTIONS ET LIMITES — 5 points
On considère la fonction f définie sur ]0;+\\infty[ par :
$$ f(x)=x-1+\\frac{2\\ln x}{x} $$
1. Limites
a) Calculer : \\lim_{x\\to0^+}f(x)
b) Calculer : \\lim_{x\\to+\\infty}f(x)
2. Dérivée
a) Calculer f'(x).
b) Montrer que :
$$ f'(x)=\\frac{x^2+2-2\\ln x}{x^2} $$
3. Étude du signe
On pose :
$$ g(x)=x^2+2-2\\ln x $$
a) Calculer g'(x).
b) Étudier les variations de g sur ]0;+\\infty[.
c) En déduire que g(x)>0 pour tout x>0.
4. Variations de f
Dresser le tableau de variations de f.`;

      assert.equal(detectLanguage(mathExam), null);
      assert.equal(detectLanguage(mathExam, "Mathématiques"), null);
      assert.equal(detectLanguage(mathExam, "mathematiques"), null);
      assert.equal(detectLanguage("devoir de math : calculer f(x) et sa dérivée"), null);
    });
  });
});
