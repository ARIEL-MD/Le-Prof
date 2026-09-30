/**
 * Constructeur de résultat structuré selon les 5 paliers d'assistance LE PROF pour Physique-Chimie Tle CDE
 */

import { PcStep, PcStructuredResult, PcStructuredResultOptions } from "./types";

export function buildPcStructuredResult(options: PcStructuredResultOptions): PcStructuredResult {
  return {
    ...options,
    toMethodologyAnalysisResult: () => {
      // Palier 1 : Indices méthodologiques & Rappels de cours
      const hints = [
        `Discipline : ${options.discipline} (Terminale C, D, E) — Thème : ${options.themeTitle}.`,
        `Leçon de référence : Leçon n°${options.lessonNumber} - ${options.lessonTitle}.`,
        `Notions et lois fondamentales : ${options.keyScientificTerms.slice(0, 4).join(", ")}.`,
        `Écueil fréquent d'évaluation : ${options.commonPitfallsAvoided[0] || "Respecter scrupuleusement les unités du Système International (S.I.) et les chiffres significatifs."}`,
      ];

      // Palier 2 : Protocole et démarche de résolution pas à pas
      const stepsProtocol = options.steps.map((step, idx) => ({
        stepNumber: idx + 1,
        stepTitle: step.title,
        experimentalDataOrGiven: step.observationOrData,
        scientificLawOrTheory: step.scientificConceptOrRule,
        reasoningAndCalculations: step.deductionOrCalculation,
        partialConclusion: step.conclusionOrJustification,
      }));

      // Palier 3 : Rédaction intégrale modèle
      let fullRedaction = `### CORRIGÉ DÉTAILLÉ IN EXTENSO (PHYSIQUE-CHIMIE TLE CDE)\n\n`;
      fullRedaction += `**Thème :** ${options.themeTitle} | **Leçon :** ${options.lessonTitle}\n\n`;
      
      if (options.scientificHypothesis) {
        fullRedaction += `**Principe physique / chimique directeur :**\n${options.scientificHypothesis}\n\n`;
      }

      options.steps.forEach((step, idx) => {
        fullRedaction += `#### Étape ${idx + 1} : ${step.title}\n`;
        fullRedaction += `- **Données & Bilan initial :** ${step.observationOrData}\n`;
        fullRedaction += `- **Loi physique / Propriété chimique :** ${step.scientificConceptOrRule}\n`;
        fullRedaction += `- **Développement & Calculs :**\n${step.deductionOrCalculation}\n`;
        fullRedaction += `- **Résultat intermédiaire :** ${step.conclusionOrJustification}\n\n`;
      });

      fullRedaction += `### CONCLUSION ET BILAN FINAL\n${options.finalConclusion}\n\n`;
      fullRedaction += `**Mots-clés scientifiques officiels :** ${options.keyScientificTerms.join(" • ")}\n`;

      // Structure compatible avec l'UI LE PROF
      return {
        // Vue d'ensemble
        title: options.title,
        discipline: options.discipline,
        themeTitle: options.themeTitle,
        lessonTitle: options.lessonTitle,
        problemStatement: options.problemStatement,
        
        // 5 Paliers LE PROF
        hints: hints,
        guidedSteps: stepsProtocol,
        fullSolution: fullRedaction,
        
        // Données d'analyse APC
        pedagogicalFeedback: {
          conceptMastery: `Maîtrise des lois et principes de la leçon "${options.lessonTitle}"`,
          competencyLevel: "Niveau Terminale Scientifique (Séries C, D, E)",
          keyTerms: options.keyScientificTerms,
          commonErrorsAvoided: options.commonPitfallsAvoided,
        },
        
        // Compatibilité avec les champs attendus par l'UI
        problemAnalysis: {
          context: `Exercice type d'examen national en ${options.discipline} portant sur ${options.lessonTitle}.`,
          problematic: options.problemStatement,
          coreConcepts: options.keyScientificTerms,
        },
        stepByStepSolution: fullRedaction,
        finalAnswer: options.finalConclusion,
      };
    },
  };
}
