import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle } from "../philoEngine/philoEngine";
import { findAcademicKnowledge } from "../../src/data/academicKnowledgeBase";

test("Rigueur méthodologique et polysémie de la dissertation philosophique", async (t) => {
  await t.test("traite 'La philosophie est-elle un mythe ?' sous l'angle de l'utilité et de l'illusion, et non du mythe antique", () => {
    // 1. Vérification dans la base académique
    const academicMatch = findAcademicKnowledge("La philosophie est-elle un mythe ?", "Tle");
    assert.ok(academicMatch);
    assert.equal(academicMatch?.id, "philo-utilite-philosophie");

    // 2. Vérification dans le moteur de dissertation philoEngine
    const result = solvePhiloTle("La philosophie est-elle un mythe ?");
    assert.equal(result.success, true);

    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    // Vérification de la désambiguïsation conceptuelle et de la polysémie
    assert.equal(meth?.conceptualDisambiguation.hasAmbiguousTerm, true);
    assert.ok(meth?.conceptualDisambiguation.term.includes("Mythe"));
    assert.ok(meth?.conceptualDisambiguation.retainedMeaning.includes("Illusion"));
    assert.match(meth?.conceptualDisambiguation.justification || "", /hors-sujet/i);

    // Vérification du lexique
    const mytheLexique = meth?.philoPreliminaryWork.lexiqueDefinitions.find(l => /mythe/i.test(l.terme));
    assert.ok(mytheLexique);
    assert.ok(mytheLexique?.definition.includes("Illusion"));

    // Vérification du problème court : court, direct, sans 'ou'
    const probleme = meth?.philoPreliminaryWork.problematisation.probleme || "";
    assert.equal(probleme, "La philosophie est-elle un mythe ?");
    assert.equal(probleme.includes(" ou "), false);

    // Vérification des deux aspects : Thèse (reproche d'inutilité/chimère) et Antithèse (nécessité vitale)
    const aspect1 = meth?.philoPreliminaryWork.problematisation.aspect1 || "";
    const aspect2 = meth?.philoPreliminaryWork.problematisation.aspect2 || "";
    assert.ok(/philosophie|mythe/i.test(aspect1));
    assert.ok(/philosophie|mythe/i.test(aspect2));
  });

  await t.test("distingue le mythe comme instrument ou récit dans 'La philosophie doit-elle rejeter tout recours au mythe ?'", () => {
    const academicMatch = findAcademicKnowledge("La philosophie doit-elle rejeter tout recours au mythe ?", "Tle");
    assert.ok(academicMatch);
    assert.equal(academicMatch?.id, "philo-mythe");
  });

  await t.test("identifie l'utilité dans 'À quoi sert la philosophie ?'", () => {
    const academicMatch = findAcademicKnowledge("À quoi sert la philosophie ?", "Tle");
    assert.ok(academicMatch);
    assert.equal(academicMatch?.id, "philo-utilite-philosophie");
  });

  await t.test("gère la polysémie de 'mythe' dans 'Le bonheur est-il un mythe ?'", () => {
    const result = solvePhiloTle("Le bonheur est-il un mythe ?");
    assert.equal(result.success, true);
    const meth = result.methodologyAnalysis;
    assert.equal(meth?.philoPreliminaryWork.problematisation.probleme, "Le bonheur est-il un mythe ?");
  });

  await t.test("génère des prompts académiques conformes aux 12 directives pédagogiques de philosophie", async () => {
    const { buildAcademicPrompt } = await import("../academicEngine/academicPromptBuilder");
    const promptResult = buildAcademicPrompt({
      subjectTopic: "Peut-on se passer de la philosophie ?",
      discipline: "Philosophie",
      level: "Terminale",
    });

    assert.equal(promptResult.category, "PHILOSOPHIE_DISSERTATION");
    assert.match(promptResult.systemInstruction, /professeur de philosophie expérimenté/i);
    assert.match(promptResult.systemInstruction, /Pour répondre à ce problème d'autres questions s'ajoutent/i);
    assert.match(promptResult.systemInstruction, /ÉVITER STRICTEMENT le mot « ou »/i);
    assert.match(promptResult.systemInstruction, /DIRECTIVES MÉTHODOLOGIQUES EN 12 ÉTAPES/i);
    assert.match(promptResult.prompt, /Pour répondre à ce problème d'autres questions s'ajoutent/i);
  });

  await t.test("IDENTIFICATION OBLIGATOIRE DE LA DISCIPLINE : classe 'L'homme est-il responsable de tout ce qu'il fait ?' en Philosophie et non en Français", async () => {
    const { detectSubjectMetadata } = await import("../../src/utils/subjectDetector");
    const { classifyAcademicExercise, buildAcademicPrompt } = await import("../academicEngine/academicPromptBuilder");

    const subject = "L'homme est-il responsable de tout ce qu'il fait ?";

    // 1. Détecteur de sujet
    const meta = detectSubjectMetadata(subject);
    assert.equal(meta.discipline, "philo", "Le sujet philosophique doit être détecté comme 'philo'");

    // 2. Classificateur d'exercice sans discipline fournie
    const classificationWithoutDisc = classifyAcademicExercise({ subjectTopic: subject });
    assert.equal(classificationWithoutDisc.category, "PHILOSOPHIE_DISSERTATION");
    assert.equal(classificationWithoutDisc.disciplineCanonical, "Philosophie");

    // 3. Classificateur d'exercice MÊME si l'élève avait présélectionné "Français"
    const classificationWithWrongDisc = classifyAcademicExercise({ subjectTopic: subject, discipline: "Français & Littérature" });
    assert.equal(classificationWithWrongDisc.category, "PHILOSOPHIE_DISSERTATION", "Un sujet philosophique ne doit jamais devenir une dissertation littéraire");
    assert.equal(classificationWithWrongDisc.disciplineCanonical, "Philosophie");

    // 4. Vérification des consignes de pureté disciplinaire dans le prompt généré
    const promptResult = buildAcademicPrompt({
      subjectTopic: subject,
      discipline: "Philosophie",
      level: "Terminale",
    });
    assert.match(promptResult.systemInstruction, /IDENTIFICATION OBLIGATOIRE DE LA DISCIPLINE/i);
    assert.match(promptResult.systemInstruction, /CONTRÔLE DE COHÉRENCE DISCIPLINAIRE/i);
    assert.match(promptResult.systemInstruction, /Ne transforme JAMAIS un sujet philosophique en sujet de littérature/i);
    assert.match(promptResult.systemInstruction, /homme → responsabilité → action → liberté → déterminisme/i);
    assert.match(promptResult.systemInstruction, /Sartre, Spinoza, Kant, Freud, Nietzsche/i);
  });

  await t.test("Préserve la dissertation littéraire pour les vrais sujets de littérature", async () => {
    const { classifyAcademicExercise } = await import("../academicEngine/academicPromptBuilder");
    const literarySubject = "Dans quelle mesure le roman doit-il être le miroir de la société ?";
    const classification = classifyAcademicExercise({ subjectTopic: literarySubject, discipline: "Français" });
    assert.equal(classification.category, "FRANCAIS_DISSERTATION_LITTERAIRE");
  });

  await t.test("RÈGLE ABSOLUE — CONSTRUCTION DE LA PROBLÉMATIQUE : 'Le travail rend-il l'homme libre ?'", async () => {
    const { solvePhiloTle } = await import("../philoEngine/philoEngine");
    const { buildAcademicPrompt } = await import("../academicEngine/academicPromptBuilder");

    const subject = "Le travail rend-il l'homme libre ?";
    const result = solvePhiloTle(subject);
    assert.equal(result.success, true);

    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    // 1. La problématique doit être une QUESTION centrale, JAMAIS une affirmation
    const probleme = meth?.philoPreliminaryWork.problematisation.probleme || "";
    assert.ok(probleme.endsWith("?"), "La problématique doit obligatoirement être formulée comme une question");
    assert.equal(probleme, subject);

    // 2. Interdiction formelle du mot 'ou' dans le problème
    assert.equal(/\bou\b/i.test(probleme), false, "La problématique ne doit jamais contenir le mot 'ou'");

    // 3. Questions secondaires avec tension et approfondissement progressif
    const aspect1 = meth?.philoPreliminaryWork.problematisation.aspect1 || "";
    const aspect2 = meth?.philoPreliminaryWork.problematisation.aspect2 || "";
    assert.ok(/travail|libre/i.test(aspect1));
    assert.ok(/travail|libre/i.test(aspect2));

    // 4. Vérification dans le prompt généré : règle absolue, formule canonique et principe fondamental
    const promptResult = buildAcademicPrompt({
      subjectTopic: subject,
      discipline: "Philosophie",
      level: "Terminale"
    });

    assert.match(promptResult.systemInstruction, /RÈGLE ABSOLUE — CONSTRUCTION DE LA PROBLÉMATIQUE/);
    assert.match(promptResult.systemInstruction, /Ne jamais présenter une affirmation comme étant le problème/);
    assert.match(promptResult.systemInstruction, /Ne jamais présenter une thèse comme étant le problème/);
    assert.match(promptResult.systemInstruction, /PRINCIPE FONDAMENTAL : NE JAMAIS COMMENCER PAR CHERCHER UN PLAN/);
    assert.match(promptResult.systemInstruction, /Le plan ne doit jamais déterminer la problématique/);
    assert.match(promptResult.systemInstruction, /C'est la problématique qui doit déterminer le plan/);
    assert.match(promptResult.systemInstruction, /Pour répondre à ce problème d'autres questions s'ajoutent :/);
  });

  await t.test("RÈGLE UNIVERSELLE — DISTINCTION ENTRE PROBLÈME, ASPECTS ET ARGUMENTS", async () => {
    const { solvePhiloTle } = await import("../philoEngine/philoEngine");
    const { buildAcademicPrompt } = await import("../academicEngine/academicPromptBuilder");

    const subject = "Le travail rend-il l'homme libre ?";
    const result = solvePhiloTle(subject);
    assert.equal(result.success, true);
    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    const pw = meth?.philoPreliminaryWork;
    assert.ok(pw);

    // 1. LE PROBLÈME : Question philosophique centrale issue du sujet
    const problem = pw.problematisation.probleme;
    assert.ok(problem.endsWith("?"));
    assert.ok(!/\bou\b/i.test(problem));
    assert.ok(problem.length > 10 && problem.length < 100);

    // 2. LES ASPECTS : Questions courtes, claires et directes, un seul axe, pas d'argument, pas de citation ni d'auteur
    const aspect1 = pw.problematisation.aspect1;
    const aspect2 = pw.problematisation.aspect2;
    assert.ok(aspect1.endsWith("?"));
    assert.ok(aspect2.endsWith("?"));

    // Longueur des aspects nettement inférieure à celle des arguments
    assert.ok(aspect1.length < 120, "L'aspect 1 doit être une question courte");
    assert.ok(aspect2.length < 120, "L'aspect 2 doit être une question courte");

    // Ne doit pas contenir de philosophe ou de citation dans l'aspect
    assert.ok(!/kant|hegel|marx|platon|aristote|sartre/i.test(aspect1));
    assert.ok(!/kant|hegel|marx|platon|aristote|sartre/i.test(aspect2));
    assert.ok(!/«|»|"/.test(aspect1));
    assert.ok(!/«|»|"/.test(aspect2));

    // 3. LES ARGUMENTS : Idées précises qui répondent à chaque aspect
    const argsAxe1 = pw.planAxe1?.arguments || [];
    const argsAxe2 = pw.planAxe2?.arguments || [];
    assert.ok(argsAxe1.length >= 2, "Chaque aspect doit permettre de rechercher plusieurs arguments");
    assert.ok(argsAxe2.length >= 2, "Chaque aspect doit permettre de rechercher plusieurs arguments");

    // Les arguments comportent auteur, explication et citation
    assert.ok(argsAxe1[0].auteur.length > 0);
    assert.ok(argsAxe1[0].explication.length > 30);
    assert.ok(argsAxe1[0].idee.length > 20);

    // La longueur des arguments et du développement dépasse nettement celle des aspects
    assert.ok(argsAxe1[0].explication.length > aspect1.length * 0.5);

    // 4. Présence de la Règle Universelle dans le prompt académique
    const promptResult = buildAcademicPrompt({
      subjectTopic: subject,
      discipline: "Philosophie",
      level: "Terminale"
    });

    assert.match(promptResult.systemInstruction, /RÈGLE UNIVERSELLE — DISTINCTION ENTRE PROBLÈME, ASPECTS ET ARGUMENTS/);
    assert.match(promptResult.systemInstruction, /1\. LE PROBLÈME/);
    assert.match(promptResult.systemInstruction, /2\. LES ASPECTS/);
    assert.match(promptResult.systemInstruction, /3\. LES ARGUMENTS/);
    assert.match(promptResult.systemInstruction, /Un aspect ne doit JAMAIS être un argument/);
    assert.match(promptResult.systemInstruction, /L'aspect indique CE QU'IL FAUT EXAMINER/);
    assert.match(promptResult.systemInstruction, /L'argument indique CE QU'ON PEUT DIRE POUR RÉPONDRE À CET ASPECT/);
    assert.match(promptResult.systemInstruction, /HIÉRARCHIE OBLIGATOIRE/);
  });

  await t.test("TRAITEMENT DU SUJET D'EXCELLENCE : 'Faut-il envisager l’extinction de la philosophie dans l’ordonnancement du savoir et de l’existence ?'", async () => {
    const { solvePhiloTle } = await import("../philoEngine/philoEngine");

    const subject = "Faut-il envisager l’extinction de la philosophie dans l’ordonnancement du savoir et de l’existence ?";
    const result = solvePhiloTle(subject);

    assert.equal(result.success, true);
    const meth = result.methodologyAnalysis;
    assert.ok(meth);

    // 1. Lexique : extinction et ordonnancement
    const lexique = meth?.philoPreliminaryWork.lexiqueDefinitions || [];
    const ext = lexique.find(l => /extinction/i.test(l.terme));
    const ord = lexique.find(l => /ordonnancement/i.test(l.terme));
    assert.ok(ext, "Le terme 'extinction' doit figurer dans le lexique");
    assert.ok(ord, "Le terme 'ordonnancement' doit figurer dans le lexique");

    // 2. Problématique et aspects
    const prob = meth?.philoPreliminaryWork.problematisation.probleme || "";
    assert.equal(prob, subject);
    assert.equal(prob.includes(" ou "), false);

    const asp1 = meth?.philoPreliminaryWork.problematisation.aspect1 || "";
    const asp2 = meth?.philoPreliminaryWork.problematisation.aspect2 || "";
    assert.ok(/philosophie|ordonnancement|extinction/i.test(asp1));
    assert.ok(/philosophie|extinction|ordonnancement/i.test(asp2));

    // Interdiction formelle de "d'une part" et "d'autre part" dans les aspects de l'intro
    const introFull = result.structuredRedaction?.introduction.fullText || "";
    assert.equal(introFull.includes("d'une part"), false, "L'introduction ne doit pas contenir 'd'une part'");
    assert.equal(introFull.includes("d'autre part"), false, "L'introduction ne doit pas contenir 'd'autre part'");

    // Les 3 variantes d'introduction sont présentes et rigoureusement formulées
    const variants = meth?.philoPreliminaryWork.introVariants || [];
    assert.equal(variants.length, 3);
    const introDef = variants.find(v => v.type === "definition");
    const introConst = variants.find(v => v.type === "constat");
    const introCit = variants.find(v => v.type === "citation");

    assert.ok(introDef?.texteComplet.includes("La philosophie se définit comme l’amour de la sagesse"));
    assert.ok(introConst?.texteComplet.includes("Selon l’opinion courante"));
    assert.ok(introCit?.texteComplet.includes("Claude Bernard"));

    // 3. Rédaction du développement :
    // Pas de "D'un premier abord"
    const fullRedaction = meth?.level5FullRedaction || "";
    assert.equal(fullRedaction.includes("D'un premier abord"), false, "Ne doit pas commencer par 'D'un premier abord'");

    // Explication de l'argument avant la citation
    const subPartsAxe1 = result.structuredRedaction?.development?.part1?.subParts || [];
    assert.equal(subPartsAxe1.length, 3);
    for (const sp of subPartsAxe1) {
      assert.ok(sp.explication.length > 30, "L'explication doit être substantielle");
      assert.ok(sp.illustration.citation.length > 5, "La citation doit être présente");
      // Dans le texte complet, l'explication doit précéder la citation
      const quoteIndex = sp.fullText.indexOf(sp.illustration.auteur);
      const explicationWords = sp.explication.slice(0, 20);
      const explicationIndex = sp.fullText.indexOf(explicationWords);
      assert.ok(explicationIndex < quoteIndex, "L'explication de l'argument doit précéder l'illustration");
    }

    const subPartsAxe2 = result.structuredRedaction?.development?.part2?.subParts || [];
    assert.equal(subPartsAxe2.length, 3);
    for (const sp of subPartsAxe2) {
      assert.ok(sp.explication.length > 30, "L'explication doit être substantielle");
      assert.ok(sp.illustration.citation.length > 5, "La citation doit être présente");
      const quoteIndex = sp.fullText.indexOf(sp.illustration.auteur);
      const explicationWords = sp.explication.slice(0, 20);
      const explicationIndex = sp.fullText.indexOf(explicationWords);
      assert.ok(explicationIndex < quoteIndex, "L'explication de l'argument doit précéder l'illustration");
    }

    // 4. Conclusion
    const conclusion = result.structuredRedaction?.conclusion.fullText || "";
    assert.ok(conclusion.includes(subject), "La conclusion doit conserver le sujet exact");
    assert.ok(conclusion.includes("Toutefois"), "La conclusion doit expliciter le dépassement");
    assert.ok(/rapport exact entre les termes|question/.test(conclusion), "La conclusion doit rester centrée sur la relation du sujet");
  });

  test("VARIATION STYLISTIQUE : varie les connecteurs, accroches et illustrations selon les sujets", () => {
    const subjects = [
      "Le travail rend-il l'homme libre ?",
      "La technique constitue-t-elle un danger pour l'homme ?",
      "L'art nous éloigne-t-il de la réalité ?",
      "L'homme peut-il être heureux sans accomplir son devoir ?",
      "Toute vérité doit-elle être démontrée ?"
    ];

    const results = subjects.map(s => solvePhiloTle(s));

    // Vérifier les accroches de l'Axe 1
    const axe1Overviews = results.map(r => r.structuredRedaction?.development.part1.thesisOverview || "");
    const uniqueAxe1Overviews = new Set(axe1Overviews);
    assert.ok(uniqueAxe1Overviews.size >= 4, `Les accroches de l'Axe 1 doivent varier selon les sujets, obtenu: ${uniqueAxe1Overviews.size}`);

    // Vérifier les accroches de l'Axe 2
    const axe2Overviews = results.map(r => r.structuredRedaction?.development.part2.thesisOverview || "");
    const uniqueAxe2Overviews = new Set(axe2Overviews);
    assert.ok(uniqueAxe2Overviews.size >= 4, `Les accroches de l'Axe 2 doivent varier selon les sujets, obtenu: ${uniqueAxe2Overviews.size}`);

    // Vérifier que les connecteurs varient
    const firstConnectors = results.map(r => {
      const full = r.structuredRedaction?.development.part1.subParts[0]?.fullText || "";
      return full.split(" ")[0];
    });
    const uniqueConnectors = new Set(firstConnectors);
    assert.ok(uniqueConnectors.size >= 2, "Les connecteurs initiaux doivent être diversifiés");

    // Vérifier que chaque sujet a bien des auteurs et notions distinctes
    const authorsAxe1 = results.map(r => r.structuredRedaction?.development.part1.subParts[0]?.illustration.auteur);
    const uniqueAuthors = new Set(authorsAxe1);
    assert.ok(uniqueAuthors.size >= 4, "Les auteurs et illustrations doivent être spécifiques à chaque notion");
  });
});


test("Format des arguments philosophiques — auteur réservé à l'explication de la citation", async () => {
  const { differentiateArgumentItem } = await import("../argumentReformulator");
  const result = differentiateArgumentItem({
    arg: {
      statement: "L'inconscient peut limiter la liberté de l'homme.",
      explanation: "Selon Freud, une partie de nos pensées et de nos désirs échappe à notre conscience.",
      quote: "Le moi n'est pas maître dans sa propre maison.",
      author: "Freud",
      work: "Introduction à la psychanalyse",
      category: "Argument",
    },
    argIndex: 0,
    variantIndex: 0,
    topicKey: "inconscient-liberte",
    seed: "test-philo-simple",
  });

  assert.doesNotMatch(result.explanation, /\bSelon\s+Freud\b/i);
  assert.doesNotMatch(result.explanation, /^Freud\s+(montre|explique|affirme|soutient|démontre)/i);
  assert.ok(result.quote.includes("moi"));
  assert.equal(result.author, "Freud");
});
