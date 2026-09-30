import test from "node:test";
import assert from "node:assert/strict";
import { solveHistoireGeoTle } from "../histoireGeoEngine/histoireGeoEngine";

test("Histoire-Géographie - Résolution du Commentaire de Document", async (t) => {
  await t.test("résout intégralement le devoir de commentaire de document sur la Guerre froide et les relations internationales", () => {
    const userPrompt = `DEVOIR D’HISTOIRE — COMMENTAIRE DE DOCUMENT

Classe : Terminale
Durée : 2 heures
Thème : Les relations internationales depuis 1945

Document

« Après la Seconde Guerre mondiale, le monde entre dans une nouvelle période de tensions. Les États-Unis et l’Union soviétique deviennent les deux grandes puissances dominantes. Malgré leur alliance contre l’Allemagne nazie, leurs conceptions politiques, économiques et sociales sont profondément opposées.

Les États-Unis défendent le système capitaliste et la démocratie libérale, tandis que l’Union soviétique défend le communisme et le système socialiste. Cette opposition donne naissance à la Guerre froide, caractérisée par une rivalité permanente entre les deux puissances sans affrontement militaire direct entre elles.

Chaque camp cherche à renforcer son influence dans le monde. Les États-Unis mettent en place le plan Marshall pour aider à la reconstruction économique de l’Europe occidentale, tandis que l'Union soviétique renforce son contrôle sur l'Europe de l'Est.

QUESTIONS

I. Présentation du document — 4 points
Présente le document en précisant :
- sa nature ;
- son thème ;
- son contexte historique.
Identifie les deux grandes puissances évoquées dans le document.

II. Compréhension du document — 6 points
1. Explique pourquoi les États-Unis et l’URSS deviennent les deux grandes puissances après 1945.
2. Relève dans le texte les deux systèmes idéologiques qui s’opposent.
3. Explique ce que signifie l'expression « Guerre froide ».
4. Montre, à partir du document, comment chaque puissance cherche à étendre son influence.

III. Commentaire historique — 10 points
À partir du document et de tes connaissances personnelles :
1. Montre les causes de la Guerre froide.
2. Présente les principales manifestations de la Guerre froide de 1947 à 1962.
3. Explique pourquoi la crise de Cuba constitue un moment particulièrement dangereux de la Guerre froide.`;

    const res = solveHistoireGeoTle(userPrompt);
    assert.equal(res.success, true);
    assert.ok(res.methodologyAnalysis);

    const meth = res.methodologyAnalysis;

    // 1. L'exercice doit être classé en Commentaire de Document
    assert.match(meth.exerciseTypeIdentified, /Commentaire de Document/i);

    // 2. isDirectRestitution doit impérativement être false
    assert.equal(meth.isDirectRestitution, false);

    // 3. La rédaction complète doit faire plus de 2000 caractères et contenir les trois parties
    const fullText = meth.fullSynthesizedResponse || meth.level5FullRedaction || "";
    assert.ok(fullText.length > 2000, `La réponse est trop courte : ${fullText.length} caractères`);

    // 4. Vérification de la Première Partie : Présentation méthodique (NODDACI)
    assert.match(fullText, /PREMIÈRE PARTIE : PRÉSENTATION MÉTHODIQUE DU DOCUMENT/i);
    assert.match(fullText, /Nature/i);
    assert.match(fullText, /Contexte historique/i);
    assert.match(fullText, /États-Unis d'Amérique/i);
    assert.match(fullText, /Union des Républiques Socialistes Soviétiques/i);

    // 5. Vérification de la Deuxième Partie : Compréhension et Analyse
    assert.match(fullText, /DEUXIÈME PARTIE : COMPRÉHENSION ET ANALYSE DU TEXTE/i);
    assert.match(fullText, /monopole de l'arme atomique/i);
    assert.match(fullText, /Plan Marshall/i);
    assert.match(fullText, /Kominform/i);
    assert.match(fullText, /équilibre de la terreur/i);

    // 6. Vérification de la Troisième Partie : Commentaire Historique Organisé
    assert.match(fullText, /TROISIÈME PARTIE : COMMENTAIRE HISTORIQUE ORGANISÉ/i);
    assert.match(fullText, /INTRODUCTION DU COMMENTAIRE/i);
    assert.match(fullText, /DÉVELOPPEMENT ORGANISÉ/i);
    assert.match(fullText, /blocus.*berlin/i);
    assert.match(fullText, /crise.*cuba/i);
    assert.match(fullText, /DEFCON 2/i);
    assert.match(fullText, /CONCLUSION DU COMMENTAIRE/i);

    // 7. Vérification des étapes de la démarche pas à pas
    assert.ok(meth.stepByStepBreakdown.length >= 3);
    assert.match(meth.stepByStepBreakdown[0].stepTitle, /Présentation/i);
    assert.match(meth.stepByStepBreakdown[1].stepTitle, /Compréhension/i);
    assert.match(meth.stepByStepBreakdown[2].stepTitle, /Commentaire/i);
  });
});
