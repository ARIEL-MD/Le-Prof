import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { solveFrancaisTle } from "../francaisTleEngine/francaisTleEngine";
import { findKouadiaSubject, SECRET_FRANCAIS_KOUADIA_SUBJECTS, SECRET_FRANCAIS_100_CITATIONS } from "../../src/data/secretFrancaisBacKouadiaBase";

describe("Corpus et Méthodologie d'Excellence — Secret Français Bac (Kouadia Nahounou Félix)", () => {
  it("contient 100 citations littéraires authentiques classées par genre", () => {
    assert.equal(SECRET_FRANCAIS_100_CITATIONS.length, 100, "Le corpus doit comporter exactement 100 citations de référence");
    const categories = new Set(SECRET_FRANCAIS_100_CITATIONS.map(c => c.category));
    assert.ok(categories.has("Poesie"), "Doit comporter la catégorie Poésie");
    assert.ok(categories.has("Theatre"), "Doit comporter la catégorie Théâtre");
    assert.ok(categories.has("Roman"), "Doit comporter la catégorie Roman");
    assert.ok(categories.has("LitteratureGenerale"), "Doit comporter la catégorie Littérature Générale");
  });

  it("résout une dissertation issue du manuel Kouadia sans IA : « déforme l'âme »", () => {
    const query = "Un jeune homme affirme : « Je n'aime pas la littérature parce qu'elle déforme l'âme ». Qu'en pensez-vous ?";
    const result = solveFrancaisTle(query);

    assert.ok(result.success, "La résolution doit réussir");
    assert.ok(result.result, "Doit renvoyer un résultat complet");
    assert.match(result.result.title, /déforme l'âme/i);
    assert.ok(result.methodologyAnalysis, "Doit inclure l'analyse méthodologique");
    assert.match(result.methodologyAnalysis.exerciseTypeIdentified, /Secret Français Bac/i);
    
    // RÈGLE D'OR : Aucun mot 'ou' dans la problématique
    assert.doesNotMatch(result.result.problemStatement, /\bou\b/i, "La problématique ne doit pas comporter le mot 'ou'");
    
    // Vérification de la structure rédigée
    const structured = result.methodologyAnalysis.structuredRedaction;
    assert.ok(structured, "La rédaction structurée doit être définie");
    assert.ok(structured.introduction.fullText.length > 50, "Introduction rédigée");
    assert.ok(structured.development.part1.fullText.length > 50, "Axe 1 rédigé");
    assert.ok(structured.development.part2.fullText.length > 50, "Axe 2 rédigé");
    assert.ok(structured.conclusion.fullText.length > 50, "Conclusion rédigée");
  });

  it("résout un commentaire composé issu du recueil : « Silence on développe » d'Adiaffi", () => {
    const query = "Commentaire composé sur : Silence on développe Silence on s'enrichit de Jean-Marie Adiaffi";
    const result = solveFrancaisTle(query);

    assert.ok(result.success, "La résolution du commentaire doit réussir");
    assert.ok(result.result, "Doit renvoyer le corrigé");
    assert.match(result.result.title, /Adiaffi|Silence on développe/i);
    assert.equal(result.methodologyAnalysis?.exerciseTypeIdentified, "Commentaire Composé (Secret Français Bac)");
    
    // Doit comporter les citations analysées
    const fullText = result.methodologyAnalysis?.level5FullRedaction || "";
    assert.match(fullText, /Silence/i);
    assert.match(fullText, /Adiaffi/i);
  });

  it("trouve directement un sujet Kouadia par mot-clé clé", () => {
    const subject = findKouadiaSubject("divines larmes d'or");
    assert.ok(subject, "Doit retrouver le poème Le Pin des Landes de Théophile Gautier");
    assert.match(subject.title, /Le Pin des Landes/i);
  });
});
