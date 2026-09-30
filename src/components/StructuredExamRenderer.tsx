import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calculator, 
  Copy, 
  Check, 
  Sigma, 
  ArrowRight, 
  BookmarkCheck, 
  Layers, 
  GraduationCap, 
  Maximize2, 
  FileCheck,
  Info
} from 'lucide-react';
import { formatMathSymbols } from '../utils/mathFormatter';
import { MathText, isPureFormula } from './MathText';
export { formatMathSymbols };

interface StructuredQuestion {
  raw: string;
  numberLabel: string;
  titleOrPrompt?: string;
  steps: string[];
  justification?: string;
  finalAnswer?: string;
}

interface StructuredExercise {
  id: string;
  title: string;
  points?: string;
  introContext?: string;
  questions: StructuredQuestion[];
}

interface StructuredExamRendererProps {
  rawText: string;
  paperTheme?: 'paper' | 'dark';
  subjectTitle?: string;
  discipline?: string;
  onCopy?: (text: string) => void;
  /**
   * When provided (non-empty), this pre-structured data (returned directly by the AI as JSON,
   * see `structuredScientificResolution`) is rendered as-is instead of re-parsing `rawText`
   * with the fragile free-text regex parser below. This is the reliable path for
   * Mathématiques / Physique-Chimie / SVT: it guarantees one calculation or reasoning step
   * per line, correctly separated questions, and a clearly boxed final answer, regardless of
   * how the raw text happens to be formatted.
   */
  structuredExercises?: StructuredExercise[];
}

/**
 * Détermine avec précision si une réponse finale est un résultat de calcul mathématique ou scientifique
 * à encadrer sur la copie (ex: x = 5, S = {-2; 3}, 15 km/h, 2,5 mol/L), ou bien une réponse rédigée
 * littéraire / compréhension / dissertation (ex: lecture, anglais, histoire, etc.) qui ne doit JAMAIS
 * être étiquetée "Résultat à encadrer sur la copie".
 */
export function isCalculationResult(
  finalAnswer?: string,
  subjectTitle?: string,
  discipline?: string,
  exerciseTitle?: string
): boolean {
  if (!finalAnswer) return false;
  const ans = finalAnswer.trim();
  const context = [subjectTitle, discipline, exerciseTitle].filter(Boolean).join(' ').toLowerCase();

  // Si le contexte est explicitement littéraire, langues ou sciences humaines
  const isLiterary = /anglais|english|englais|allemand|deutsch|espagnol|spanish|reading comprehension|comprehension|dissertation|commentaire|litt[ée]rature|fran[çc]ais|histoire|g[ée]ographie|philo|philosophie/i.test(context);

  // Si la réponse est une phrase en langage naturel (plus de 4 mots sans symbole mathématique fort)
  const words = ans.split(/\s+/);
  const isNaturalLanguageSentence = words.length > 4 && !/[=+\-*\/^\\<>]/.test(ans);
  if (isNaturalLanguageSentence && isLiterary) {
    return false;
  }

  // Vérifie si la réponse ressemble explicitement à un résultat de calcul ou formule
  // Ex: S = ..., x = ..., [ -1 ; 4 ], 42, 3,5 cm, 12 V, 0,5 mol/L
  const hasFormulaOrEquation = /[=≈<>≤≥∈⊂∪∩]/.test(ans) && /[0-9a-zA-Z]/.test(ans);
  const hasUnitOrPureMath = /\b\d+(?:[.,]\d+)?\s*(?:[A-Z]{1,3}|mol|mol\/L|kg|g|mg|m|cm|mm|km|km\/h|m\/s|m\.s-1|V|mV|kV|A|mA|Hz|kHz|MHz|W|kW|J|kJ|Pa|bar|°C|K|rad|deg|%)\b/i.test(ans);
  const isNumericOrFraction = /^\s*[-+]?\s*(\d+(?:[.,]\d+)?|\d+\s*\/\s*\d+|\\frac\{[^}]+\}\{[^}]+\})\s*$/.test(ans);
  const isMathSet = /^[SCDIE]\s*=\s*[\{\(\[]/.test(ans);

  if (hasFormulaOrEquation || hasUnitOrPureMath || isNumericOrFraction || isMathSet) {
    return true;
  }

  // Si c'est formellement les mathématiques ou la physique-chimie et non une longue phrase explicative
  const isMathPc = /math|physique|chimie|calcul/i.test(context);
  if (isMathPc && words.length <= 6 && !/\b(selon|parce que|car|l'auteur|on constate que)\b/i.test(ans)) {
    return true;
  }

  return false;
}

export function getFinalAnswerBadgeInfo(
  finalAnswer: string,
  subjectTitle?: string,
  discipline?: string,
  exerciseTitle?: string
): { label: string; isCalc: boolean; isVraiFaux: boolean; isFaux: boolean } {
  const ans = (finalAnswer || '').trim();
  const context = [subjectTitle, discipline, exerciseTitle].filter(Boolean).join(' ').toLowerCase();

  const isVraiFaux = /^(?:\d+[\.\)]\s*)?(?:vrai|faux|true|false)$/i.test(ans);
  const isFaux = /^(?:\d+[\.\)]\s*)?(?:faux|false)$/i.test(ans);

  if (isVraiFaux) {
    return { label: 'Réponse à reporter :', isCalc: false, isVraiFaux: true, isFaux };
  }

  const isCalc = isCalculationResult(ans, subjectTitle, discipline, exerciseTitle);
  if (isCalc) {
    return { label: 'Résultat à encadrer :', isCalc: true, isVraiFaux: false, isFaux: false };
  }

  // Langues vivantes (Anglais, Allemand, Espagnol)
  if (/anglais|english|englais/i.test(context)) {
    return { label: 'Réponse (Answer) :', isCalc: false, isVraiFaux: false, isFaux: false };
  }
  if (/allemand|deutsch|german/i.test(context)) {
    return { label: 'Réponse (Antwort) :', isCalc: false, isVraiFaux: false, isFaux: false };
  }
  if (/espagnol|spanish|español/i.test(context)) {
    return { label: 'Réponse (Respuesta) :', isCalc: false, isVraiFaux: false, isFaux: false };
  }

  // Dissertation / commentaire / réflexion
  if (/dissertation|commentaire|essai|sujet de r[ée]flexion/i.test(context)) {
    return { label: 'Conclusion rédigée :', isCalc: false, isVraiFaux: false, isFaux: false };
  }

  // Littéraire / compréhension / général
  return { label: 'Réponse attendue :', isCalc: false, isVraiFaux: false, isFaux: false };
}

/**
 * Strips residual markdown artifacts (hashes, bold markers, trailing colons, markdown dividers, HTML/SVG noise)
 */
export function cleanMarkdownNoise(str: string): string {
  if (!str) return '';
  return str
    .replace(/<svg[\s\S]*?<\/svg>/gi, '') // remove stray svg elements
    .replace(/<[^>]+>/g, '') // remove stray html tags
    .replace(/#+/g, '') // remove all hashes (#, ##, ###) anywhere
    .replace(/\*\*([^*]+)\*\*/g, '$1') // **bold**
    .replace(/\*([^*]+)\*/g, '$1') // *italic*
    .replace(/__([^_]+)__/g, '$1') // __bold__
    .replace(/^[-*•]\s+/g, '') // bullet markers
    .replace(/\s*:\s*\*{2,}/g, '') // trailing :**
    .replace(/\*{2,}\s*:\s*/g, '') // trailing **:
    .replace(/\*{2,}/g, '') // any leftover **
    .replace(/\*{1,}/g, '') // any leftover *
    .replace(/(?:×\s*){2,}/g, '') // remove repeated crosses (×××× or × ×)
    .replace(/[×xX]{3,}/g, '') // remove repeated xxx / ×××
    .replace(/^[=\-_]{3,}$/gm, '') // horizontal rules
    .trim();
}

/**
 * Extracts and cleans the final answer string from any prefix or markdown noise
 */
export function cleanFinalAnswer(str: string): string {
  if (!str) return '';
  let cleaned = str
    .replace(/#+/g, '')
    .replace(/\*{1,}/g, '')
    .replace(/__+/g, '')
    .replace(/(?:×\s*){2,}/g, '')
    .replace(/[×xX]{3,}/g, '')
    .trim();

  // Strip prefixes like "➔ Résultat final :", "➜ Résultat :", "Conclusion :", etc.
  cleaned = cleaned.replace(/^(?:[➔➜→►⇒➡▶=>\->•*–—]+\s*)?(?:Résultat\s*final|Résultat|Conclusion|Réponse\s*(?:finale|attendue)?|Verdict|Solution)[\s:]*/i, '');
  
  // Clean leading/trailing punctuation or colons or arrows
  cleaned = cleaned.replace(/^[➔➜→►⇒➡▶=>\->•*–—:\s]+/, '').replace(/[:\-–\s]+$/, '').trim();

  return formatMathSymbols(cleaned);
}

export function detectQuestionHeader(line: string): { isQuestion: boolean; numberLabel: string; prompt: string } | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  // Do not match pure markdown rules or dividers
  if (/^(?:[-=*_]{3,}|#+)$/.test(trimmed)) return null;

  // Strip leading bullet markers if present: "- 1.", "* 1.", "• Question 1"
  const withoutBullet = trimmed.replace(/^[-*•▸►]\s+/, '');

  // Clean starting markdown header hashes (#, ##, ###, ####, #####)
  const withoutHashes = withoutBullet.replace(/^#+\s*/, '').trim();

  // Pattern 1: Explicit labels: "Question 1 :", "Étape 1 :", "Consigne 1 :", "Tâche 1 :", "Item 1 :", "Exercice 1 :"
  const explicitLabelMatch = withoutHashes.match(/^(?:\*{0,2})(Question|Étape|Consigne|Tâche|Item|Aufgabe|Sous-partie)\s*(?:n°|no)?\s*(\d{1,2}(?:\.\d{1,2})?|[a-d]|[I|V|X]+)\s*(?:[\)\.\:\-]\s*|:\s*|\s*[\-–]\s*|\s+)(?:\*{0,2})(.*)$/i);
  if (explicitLabelMatch) {
    const prefix = explicitLabelMatch[1];
    const rawLabel = explicitLabelMatch[2];
    const trailingPrompt = explicitLabelMatch[3] ? cleanMarkdownNoise(explicitLabelMatch[3]).replace(/^[:\-–]\s*/, '').trim() : '';
    return {
      isQuestion: true,
      numberLabel: `${prefix} ${rawLabel}`,
      prompt: trailingPrompt
    };
  }

  // Pattern 2: Numbered questions with sub-letters or decimals: "1. a)", "1) a)", "1-a)", "1.a.", "1.1.", "1.2)"
  const complexNumMatch = withoutHashes.match(/^(?:\*{0,2})(\d{1,2}\s*[\.\)\:\-]\s*[a-d][\.\)\:\-]|\d{1,2}\.\d{1,2}[\.\)\:\-]?)(?:\*{0,2})\s*(.*)$/i);
  if (complexNumMatch) {
    const trailingPrompt = complexNumMatch[2] ? cleanMarkdownNoise(complexNumMatch[2]).replace(/^[:\-–]\s*/, '').trim() : '';
    return {
      isQuestion: true,
      numberLabel: complexNumMatch[1].trim(),
      prompt: trailingPrompt
    };
  }

  // Pattern 3: Standard numbered questions: "1)", "1.", "1 -", "1 :", "(1)", "**1.**", "**1)**"
  const standardNumMatch = withoutHashes.match(/^(?:\*{0,2})(?:(\d{1,2})[\.\)\:\-]|\((\d{1,2})\))(?:\*{0,2})\s+(.*)$/);
  if (standardNumMatch) {
    const num = standardNumMatch[1] || standardNumMatch[2];
    const rest = standardNumMatch[3] ? standardNumMatch[3].trim() : '';
    
    // Check if rest is not just a pure formula or continuation of a sentence
    const isFormulaContinuation = /^(?:[=<>≤≥]|[-+\/*]\s*\d)/.test(rest);
    if (!isFormulaContinuation) {
      const cleanPrompt = cleanMarkdownNoise(rest).replace(/^[:\-–]\s*/, '').trim();
      return {
        isQuestion: true,
        numberLabel: `${num}.`,
        prompt: cleanPrompt
      };
    }
  }

  // Pattern 4: Letter questions: "a)", "a.", "b)", "(a)", "**a)**"
  const letterMatch = withoutHashes.match(/^(?:\*{0,2})(?:([a-d])[\.\)\:\-]|\(([a-d])\))(?:\*{0,2})\s+(.*)$/i);
  if (letterMatch) {
    const letter = (letterMatch[1] || letterMatch[2]).toLowerCase();
    const cleanPrompt = cleanMarkdownNoise(letterMatch[3] || '').replace(/^[:\-–]\s*/, '').trim();
    return {
      isQuestion: true,
      numberLabel: `${letter})`,
      prompt: cleanPrompt
    };
  }

  // Pattern 5: Roman numeral questions: "I.", "II.", "III.", "IV.", "V."
  const romanMatch = withoutHashes.match(/^(?:\*{0,2})([I|V|X]+)[\.\)\:\-](?:\*{0,2})\s+(.*)$/);
  if (romanMatch) {
    const roman = romanMatch[1].toUpperCase();
    const cleanPrompt = cleanMarkdownNoise(romanMatch[2] || '').replace(/^[:\-–]\s*/, '').trim();
    return {
      isQuestion: true,
      numberLabel: `${roman}.`,
      prompt: cleanPrompt
    };
  }

  return null;
}

export function getStepSemanticInfo(stepText: string): {
  type: 'data' | 'rule' | 'analysis' | 'conclusion' | 'warning' | 'pure_math' | 'standard';
  badgeLabel?: string;
  badgeClass?: string;
  cleanText: string;
} {
  const trimmed = stepText.trim();
  const withoutNoise = cleanMarkdownNoise(trimmed);

  // 1. Données / Observations
  const dataMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:Donn[ée]es?\s*(?:observ[ée]es?|constat[ée]es?|du probl[èe]me)?|Observations?|Faits?|Constat)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
  if (dataMatch) {
    return {
      type: 'data',
      badgeLabel: 'Données & Observations',
      badgeClass: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
      cleanText: dataMatch[1] ? formatMathSymbols(cleanMarkdownNoise(dataMatch[1])) : withoutNoise,
    };
  }

  // 2. Règle scientifique / Notions de cours / Formule
  const ruleMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:R[èe]gle\s*(?:scientifique|biologique|physique|math[ée]matique)?|Notions?\s*(?:du cours|appliqu[ée]es?|cl[ée]s?)|Formule(?:\s*appliqu[ée]e)?|Th[ée]or[èe]me|Loi(?:\s*biologique)?|D[ée]finition|Propri[ée]t[ée]|Principe)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
  if (ruleMatch) {
    return {
      type: 'rule',
      badgeLabel: 'Règle / Propriété',
      badgeClass: 'bg-indigo-50 text-indigo-900 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800',
      cleanText: ruleMatch[1] ? formatMathSymbols(cleanMarkdownNoise(ruleMatch[1])) : withoutNoise,
    };
  }

  // 3. Déduction & Analyse / Démarche / Calcul
  const analysisMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:D[ée]duction\s*(?:&|\+)?\s*Analyse|Analyse|D[ée]duction|Interpr[ée]tation|D[ée]marche|Calculs?|Raisonnement)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
  if (analysisMatch) {
    return {
      type: 'analysis',
      badgeLabel: 'Démarche & Calcul',
      badgeClass: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
      cleanText: analysisMatch[1] ? formatMathSymbols(cleanMarkdownNoise(analysisMatch[1])) : withoutNoise,
    };
  }

  // 4. Conclusion partielle
  const conclusionMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:Conclusion\s*partielle|Conclusion|Bilan\s*partiel|Synth[èe]se)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
  if (conclusionMatch) {
    return {
      type: 'conclusion',
      badgeLabel: 'Conclusion',
      badgeClass: 'bg-emerald-50 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800',
      cleanText: conclusionMatch[1] ? formatMathSymbols(cleanMarkdownNoise(conclusionMatch[1])) : withoutNoise,
    };
  }

  // 5. Piège à éviter / Attention
  const warningMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:⚠️?\s*Attention|Pi[èe]ge\s*(?:[àa]\s*[ée]viter)?|Erreur\s*fr[ée]quente|Avertissement)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
  if (warningMatch) {
    return {
      type: 'warning',
      badgeLabel: 'Attention',
      badgeClass: 'bg-rose-50 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800',
      cleanText: warningMatch[1] ? formatMathSymbols(cleanMarkdownNoise(warningMatch[1])) : withoutNoise,
    };
  }

  // 6. Math pur
  const isPure = isPureFormula(trimmed) || /^(?:[A-Za-z_]\w*(?:_\{[^}]*\}|_\w+)?\s*(?:\([^)]*\))?\s*[=<>≤≥≈]|√|\d+\s*[<>=]|[-+\d\(]|S\s*=)/i.test(trimmed);
  if (isPure) {
    return {
      type: 'pure_math',
      cleanText: trimmed,
    };
  }

  return {
    type: 'standard',
    cleanText: trimmed,
  };
}

/**
 * Parses raw unformatted or Markdown-rich text into a structured array of exercises.
 * Safe against breaking mathematical expressions like (-2 - 3 ; -1 - 2) or √(25 + 9) or x > 6.
 */
export function parseExamIntoExercises(rawText: string): StructuredExercise[] {
  if (!rawText || !rawText.trim()) return [];

  // Keywords used to detect a NEW exercise header.
  const HEADER_KEYWORDS = "EXERCICE|Exercice|AUFGABE|Aufgabe|SITUATION D'ÉVALUATION|Situation d'évaluation|SITUATION PROBLÈME|Situation problème|PREMIÈRE PARTIE|DEUXIÈME PARTIE|TROISIÈME PARTIE|PARTIE|Partie|SECTION|Section|ACTIVITÉ|Activité|TÂCHE|Tâche|ÉVALUATION DES RESSOURCES|ÉVALUATION DES COMPÉTENCES|COMPÉTENCE|DOSSIER|Dossier|MODULE|Module|THÈME|Thème|DEVOIR|Devoir";

  // Normalize newlines and clean standalone divider lines
  let text = rawText
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/^[ \t]*#+[ \t]*$/gm, '') // remove standalone ### lines
    .replace(/^[ \t]*[-=_]{3,}[ \t]*$/gm, ''); // remove --- / === lines

  // Force every exercise header onto its own fresh line before splitting
  const midLineHeaderSplitter = new RegExp(
    `([^\\n])([ \\t]*)(?=(?:${HEADER_KEYWORDS})\\s*(?:\\d+|[IVX]{1,4})\\b)`,
    'g'
  );
  text = text.replace(midLineHeaderSplitter, '$1\n');

  // Exercise header detector
  const exerciseHeaderRegex = /^(?:#+\s*)?(?:EXERCICE|Exercice|AUFGABE|Aufgabe|SITUATION D'ÉVALUATION|Situation d'évaluation|SITUATION PROBLÈME|Situation problème|PREMIÈRE PARTIE|DEUXIÈME PARTIE|TROISIÈME PARTIE|PARTIE|Partie|SECTION|Section|ACTIVITÉ|Activité|TÂCHE|Tâche|ÉVALUATION DES RESSOURCES|ÉVALUATION DES COMPÉTENCES|COMPÉTENCE|DOSSIER|Dossier|MODULE|Module|THÈME|Thème|DEVOIR|Devoir)\s*(\d+|[A-ZIVX]+)?(?:\s*\(([^)]+)\))?\s*(?:[:\-–]\s*)?(.*)$/i;

  const rawLines = text.split('\n');

  // Phase 1: Group lines into raw exercise blocks
  interface RawBlock {
    title: string;
    points?: string;
    lines: string[];
  }

  const rawBlocks: RawBlock[] = [];
  let currentBlock: RawBlock | null = null;

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    const trimmed = rawLine.trim();

    // Skip empty lines or pure punctuation/hashes
    const strippedLine = cleanMarkdownNoise(trimmed);
    if (!strippedLine && /^(?:#+|-{3,}|={3,}|_{3,})$/.test(trimmed)) {
      continue;
    }

    const exMatch = trimmed.match(exerciseHeaderRegex);

    if (exMatch) {
      if (currentBlock && (currentBlock.lines.length > 0 || currentBlock.points)) {
        rawBlocks.push(currentBlock);
      }
      const num = exMatch[1] || `${rawBlocks.length + 1}`;
      const pts = exMatch[2] ? cleanMarkdownNoise(exMatch[2]) : undefined;
      const trailing = exMatch[3] ? cleanMarkdownNoise(exMatch[3]) : '';

      const looksLikeStatement = /\d|[=<>]/.test(trailing) || /[.!?]\s+\S/.test(trailing);
      const isShortTitle = trailing.length > 0 && trailing.length <= 60 && !looksLikeStatement;
      const customTitle = isShortTitle ? trailing : '';

      currentBlock = {
        title: `Exercice ${num}${customTitle ? ` : ${customTitle}` : ''}`,
        points: pts,
        lines: []
      };

      if (trailing && !isShortTitle) {
        currentBlock.lines.push(trailing);
      }
    } else {
      if (!currentBlock) {
        currentBlock = {
          title: 'Exercice 1',
          lines: []
        };
      }
      if (trimmed.length > 0) {
        currentBlock.lines.push(rawLine);
      }
    }
  }

  if (currentBlock && (currentBlock.lines.length > 0 || currentBlock.points)) {
    rawBlocks.push(currentBlock);
  }

  // If there are multiple blocks and the first one is an empty phantom "Exercice 1", drop it
  if (rawBlocks.length > 1) {
    const firstNonEmpty = rawBlocks[0].lines.filter(l => cleanMarkdownNoise(l).length > 0);
    if (firstNonEmpty.length === 0) {
      rawBlocks.shift();
    }
  }

  // Phase 2: Parse questions inside each exercise block
  const structuredExercises: StructuredExercise[] = [];

  rawBlocks.forEach((block, bIdx) => {
    const cleanBlockLines = block.lines.filter(l => {
      const clean = cleanMarkdownNoise(l.trim());
      return clean.length > 0 && !/^(?:#+|-{3,}|={3,}|_{3,})$/.test(clean);
    });

    if (cleanBlockLines.length === 0 && !block.points) {
      return; // Skip empty block
    }

    const questions: StructuredQuestion[] = [];
    const introLines: string[] = [];
    let currentQ: StructuredQuestion | null = null;

    for (let j = 0; j < block.lines.length; j++) {
      const line = block.lines[j];
      const trimmed = line.trim();
      if (!trimmed) continue;

      const cleanLine = cleanMarkdownNoise(trimmed);
      if (!cleanLine || /^(?:#+|-{3,}|={3,}|_{3,})$/.test(cleanLine)) {
        continue;
      }

      // Check if line matches a Question header
      const qHeader = detectQuestionHeader(trimmed);

      if (qHeader) {
        // Handle case where previous question was just a number like "1)" with no steps, and this one is "a)" -> merge into "1) a)"
        if (currentQ && currentQ.steps.length === 0 && !currentQ.finalAnswer && !currentQ.titleOrPrompt && /^[a-d]\s*[\)\.]/i.test(qHeader.numberLabel)) {
          currentQ.numberLabel = `${currentQ.numberLabel} ${qHeader.numberLabel}`;
          currentQ.titleOrPrompt = qHeader.prompt ? formatMathSymbols(qHeader.prompt) : undefined;
          continue;
        }

        if (currentQ) {
          questions.push(currentQ);
        }

        currentQ = {
          raw: trimmed,
          numberLabel: qHeader.numberLabel,
          titleOrPrompt: qHeader.prompt ? formatMathSymbols(qHeader.prompt) : undefined,
          steps: []
        };
      } else if (currentQ) {
        // Line belongs to active question
        // Check if line is a final answer
        if (/^(?:[➔➜→►⇒➡▶=>\->•*–—]+\s*)?(?:Résultat\s*final|Résultat|Conclusion|Réponse|Verdict|Solution)/i.test(cleanLine) || /[➔➜→►⇒➡▶]\s*Résultat/i.test(trimmed)) {
          const ans = cleanFinalAnswer(cleanLine);
          if (ans) {
            currentQ.finalAnswer = ans;
          }
        } else if (/^S\s*=\s*(\[[^\]]+\]|\{[^}]+\})/i.test(cleanLine)) {
          // Explicit solution set
          const formattedSet = formatMathSymbols(cleanLine);
          currentQ.finalAnswer = formattedSet;
          currentQ.steps.push(formattedSet);
        } else {
          // Step line
          const formatted = formatMathSymbols(cleanLine);

          // If the line contains an inline "➔ Résultat final :" at the end, split and extract
          if (/[➔➜→►⇒➡▶]|\=\>|Résultat\s*final\s*:/i.test(formatted)) {
            const parts = formatted.split(/[➔➜→►⇒➡▶]|\=\>|Résultat\s*final\s*:/i);
            const stepPart = cleanMarkdownNoise(parts[0]);
            if (stepPart) {
              currentQ.steps.push(formatMathSymbols(stepPart));
            }
            if (parts[1]) {
              const finalAns = cleanFinalAnswer(parts[1]);
              if (finalAns) {
                currentQ.finalAnswer = finalAns;
              }
            }
          } else {
            // Check if step is a conclusion/result marker in SVT/Sciences
            const conclusionPartielleMatch = trimmed.match(/^(?:[-*•]\s*)?(?:\*{0,2})(?:Conclusion\s*partielle|Conclusion|Bilan\s*partiel)\s*(?:[:\-–]|\*{2}:?)\s*(.*)$/i);
            if (conclusionPartielleMatch && conclusionPartielleMatch[1] && !currentQ.finalAnswer) {
              currentQ.finalAnswer = formatMathSymbols(cleanMarkdownNoise(conclusionPartielleMatch[1]));
            }
            currentQ.steps.push(formatted);
          }
        }
      } else {
        // Belongs to exercise intro/context before question 1
        if (cleanLine) {
          introLines.push(formatMathSymbols(cleanLine));
        }
      }
    }

    if (currentQ) {
      questions.push(currentQ);
    }

    // Filter out phantom empty questions
    const validQuestions = questions.filter(q => {
      const hasSteps = q.steps.length > 0;
      const hasAnswer = Boolean(q.finalAnswer && q.finalAnswer.trim().length > 0);
      const hasPrompt = Boolean(q.titleOrPrompt && q.titleOrPrompt.trim().length > 0);
      return hasSteps || hasAnswer || hasPrompt;
    });

    // If no questions were split, build clean atomic resolution questions
    // NEVER dump everything into a single giant block with 50 bullets!
    if (validQuestions.length === 0 && cleanBlockLines.length > 0) {
      // Split by double line breaks or major subsections
      const subChunks: string[][] = [];
      let currentChunk: string[] = [];

      cleanBlockLines.forEach(l => {
        const clean = cleanMarkdownNoise(l);
        const isHeaderLike = /^#{2,5}\s+/i.test(l) || /^\*\*[^*]{3,40}\*\*$/.test(l.trim());
        if (isHeaderLike && currentChunk.length > 0) {
          subChunks.push(currentChunk);
          currentChunk = [clean];
        } else {
          currentChunk.push(clean);
        }
      });
      if (currentChunk.length > 0) {
        subChunks.push(currentChunk);
      }

      subChunks.forEach((chunk, cIdx) => {
        const firstLine = chunk[0] || '';
        const titleMatch = firstLine.match(/^(?:Étape|Partie|Point|Question)?\s*[:\-–]?\s*(.*)$/i);
        const chunkTitle = (chunk.length > 1 && firstLine.length <= 60) ? (titleMatch?.[1] || firstLine) : `Étape ${cIdx + 1}`;
        const stepLines = (chunk.length > 1 && firstLine.length <= 60) ? chunk.slice(1) : chunk;

        // Check for conclusion in the last line
        let chunkAns: string | undefined = undefined;
        const lastLine = stepLines[stepLines.length - 1] || '';
        if (/^(?:Donc|Ainsi|D'o[ùu]|Conclusion|R[ée]sultat|S\s*=)/i.test(lastLine)) {
          chunkAns = formatMathSymbols(cleanFinalAnswer(lastLine));
        }

        validQuestions.push({
          raw: chunk.join('\n'),
          numberLabel: `${cIdx + 1}.`,
          titleOrPrompt: chunkTitle,
          steps: stepLines.map(l => formatMathSymbols(l)),
          finalAnswer: chunkAns
        });
      });
    }

    const cleanIntroText = introLines.join('\n').trim();
    const hasValidIntro = cleanIntroText.length > 0 && cleanMarkdownNoise(cleanIntroText).length > 0;

    if (validQuestions.length > 0 || hasValidIntro) {
      structuredExercises.push({
        id: `ex-${bIdx + 1}`,
        title: block.title,
        points: block.points,
        introContext: hasValidIntro ? cleanIntroText : undefined,
        questions: validQuestions
      });
    }
  });

  return structuredExercises;
}

export const StructuredExamRenderer: React.FC<StructuredExamRendererProps> = ({
  rawText,
  paperTheme = 'paper',
  subjectTitle,
  discipline,
  onCopy,
  structuredExercises,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [activeLayout, setActiveLayout] = useState<'cards' | 'exam_sheet'>('cards');

  // Prefer the AI's own structured JSON (reliable, one step per array item) whenever it's
  // available; only fall back to the free-text regex parser when it isn't.
  const exercises = (structuredExercises && structuredExercises.length > 0)
    ? [...structuredExercises]
    : parseExamIntoExercises(rawText);

  const isMathContext = /math|physique|chimie|calcul/i.test([subjectTitle, discipline].filter(Boolean).join(' '));

  const handleCopyExercise = (exercise: StructuredExercise) => {
    let output = `=== ${exercise.title.toUpperCase()} ${exercise.points ? `(${exercise.points})` : ''} ===\n\n`;
    if (exercise.introContext) {
      output += `${exercise.introContext}\n\n`;
    }
    exercise.questions.forEach((q) => {
      output += `${q.numberLabel} ${q.titleOrPrompt || ''}\n`;
      if (q.steps && q.steps.length > 0) {
        q.steps.forEach((st) => {
          output += `   • ${st}\n`;
        });
      }
      if (q.finalAnswer) {
        const { label: ansLabel } = getFinalAnswerBadgeInfo(q.finalAnswer, subjectTitle, discipline, exercise.title);
        output += `   ➜ ${ansLabel} ${q.finalAnswer}\n`;
      }
      output += '\n';
    });

    navigator.clipboard.writeText(output.trim());
    setCopiedIndex(exercise.id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyQuestion = (q: StructuredQuestion, qKey: string) => {
    let output = `${q.numberLabel} ${q.titleOrPrompt || ''}\n`;
    if (q.steps.length > 0) {
      q.steps.forEach((st) => {
        output += `   ${st}\n`;
      });
    }
    if (q.finalAnswer) {
      const { label: ansLabel } = getFinalAnswerBadgeInfo(q.finalAnswer, subjectTitle, discipline);
      output += `   ➜ ${ansLabel} ${q.finalAnswer}\n`;
    }

    navigator.clipboard.writeText(output.trim());
    setCopiedIndex(qKey);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (exercises.length === 0) {
    const textToUse = rawText || subjectTitle || '';
    if (textToUse.trim()) {
      const paragraphs = textToUse.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
      const fallbackQuestions: StructuredQuestion[] = paragraphs.map((para, idx) => {
        // Split paragraph into distinct sentences / lines for steps
        const lines = para.split('\n').map(l => l.trim()).filter(Boolean);
        const sentenceParts = lines.length > 1 ? lines : para.split(/(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-ß0-9])/).filter(Boolean);
        
        let finalAns: string | undefined = undefined;
        const lastPart = sentenceParts[sentenceParts.length - 1] || '';
        if (/^(?:Donc|Ainsi|D'o[ùu]|Conclusion|R[ée]sultat|Réponse|Verdict|S\s*=)/i.test(lastPart)) {
          finalAns = formatMathSymbols(cleanFinalAnswer(lastPart));
        }

        const firstPart = cleanMarkdownNoise(sentenceParts[0] || '');
        const prompt = (sentenceParts.length > 1 && firstPart.length <= 60) ? firstPart : `Étape ${idx + 1}`;
        const stepList = (sentenceParts.length > 1 && firstPart.length <= 60) ? sentenceParts.slice(1) : sentenceParts;

        return {
          raw: para,
          numberLabel: `${idx + 1}.`,
          titleOrPrompt: prompt,
          steps: stepList.map(st => formatMathSymbols(cleanMarkdownNoise(st))),
          finalAnswer: finalAns,
        };
      });

      exercises.push({
        id: 'ex-fallback',
        title: subjectTitle ? `Exercice : ${subjectTitle}` : 'Résolution méthodique',
        questions: fallbackQuestions,
      });
    } else {
      return (
        <div className={`${paperTheme === 'dark' ? 'dark' : ''} p-6 text-center italic text-stone-500 dark:text-slate-400`}>
          Aucun contenu d'exercice à afficher.
        </div>
      );
    }
  }

  return (
    <div className={`${paperTheme === 'dark' ? 'dark' : ''} space-y-6`}>
      {/* Sub-toolbar for display modes */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 border-b ${
        'border-slate-200 dark:border-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold flex items-center gap-1.5 ${
            'text-slate-900 dark:text-slate-200'
          }`}>
            {isMathContext ? (
              <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            )}
            {exercises.length} {isMathContext ? 'Exercice' : 'Partie'}{exercises.length > 1 ? (isMathContext ? 's résolus' : 's traitées') : (isMathContext ? ' résolu' : ' traitée')} avec rigueur
          </span>
        </div>

        <div className={`inline-flex rounded-lg p-1 border text-xs ${
          'bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
        }`}>
          <button
            onClick={() => setActiveLayout('cards')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              activeLayout === 'cards'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 font-bold dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Vue Par Blocs Structurés</span>
          </button>
          <button
            onClick={() => setActiveLayout('exam_sheet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              activeLayout === 'exam_sheet'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-950 font-bold dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Vue Copie Manuscrite Prête à Rendre</span>
          </button>
        </div>
      </div>

      {/* RENDER MODE 1: CARDS VIEW */}
      {activeLayout === 'cards' && (
        <div className="space-y-6">
          {exercises.map((ex, exIdx) => (
            <div
              key={ex.id || exIdx}
              className={`rounded-xl border transition-colors overflow-hidden shadow-2xs ${
                'bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800'
              }`}
            >
              {/* Exercise Header Banner */}
              <div
                className={`p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b ${
                  'bg-slate-50 border-slate-300 dark:bg-slate-900/90 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-700 text-white font-bold text-sm flex items-center justify-center shadow-2xs shrink-0">
                    {/anglais|english|englais|allemand|deutsch|espagnol|spanish|reading comprehension|litt[ée]rature|fran[çc]ais|histoire|g[ée]ographie|philo|philosophie/i.test([subjectTitle, discipline, ex.title].join(' ')) ? (
                      <BookmarkCheck className="w-4 h-4" />
                    ) : (
                      <Sigma className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${
                      'text-slate-900 dark:text-white'
                    }`}>
                      <span>{ex.title}</span>
                      {ex.points && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                          'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                        }`}>
                          {ex.points}
                        </span>
                      )}
                    </h3>
                    <span className={`text-xs font-normal ${
                      'text-slate-600 dark:text-slate-400'
                    }`}>
                      {ex.questions.length} question{ex.questions.length > 1 ? 's traitées' : ' traitée'} pas à pas
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopyExercise(ex)}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer shrink-0 ${
                    copiedIndex === ex.id
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700'
                  }`}
                  title="Copier le corrigé complet de cet exercice"
                >
                  {copiedIndex === ex.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {/* Libellé complet dès sm: ; icône seule sur mobile pour éviter l'entassement à côté du titre */}
                  <span className="hidden sm:inline">{copiedIndex === ex.id ? 'Copié !' : 'Copier l\'exercice'}</span>
                </button>
              </div>

              {/* Context / Enoncé if present */}
              {ex.introContext && (
                <div
                  className={`p-3.5 sm:p-4 text-xs sm:text-sm border-b leading-relaxed ${
                    'bg-slate-50/80 border-slate-200 text-slate-900 font-sans dark:bg-slate-950/80 dark:border-slate-800 dark:text-slate-200 dark:font-sans'
                  }`}
                >
                  <div className={`text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1`}>
                    Données & Énoncé de l'exercice :
                  </div>
                  <p className="whitespace-pre-line font-medium"><MathText text={ex.introContext} /></p>
                </div>
              )}

              {/* Questions List */}
              <div className="p-4 sm:p-6 space-y-5">
                {/* Quick answers banner if all questions are Vrai/Faux or single-verdict */}
                {ex.questions.length > 1 && ex.questions.every(q => /vrai|faux/i.test(q.finalAnswer || '')) && (
                  <div className={`p-3 sm:p-3.5 rounded-lg border flex flex-wrap items-center justify-between gap-3 ${
                    'bg-slate-50 border-slate-300 dark:bg-slate-800/80 dark:border-slate-700'
                  }`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-bold text-slate-800 dark:text-slate-200`}>
                        Correction synthétique :
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {ex.questions.map((q, idx) => {
                          const isVrai = /vrai/i.test(q.finalAnswer || '');
                          return (
                            <span
                              key={idx}
                              className={`px-2 py-0.5 rounded font-bold text-xs font-mono border ${
                                isVrai
                                  ? 'bg-emerald-50 text-emerald-950 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-700'
                                  : 'bg-rose-50 text-rose-950 border-rose-300 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-700'
                              }`}
                            >
                              {q.numberLabel} {isVrai ? 'VRAI' : 'FAUX'}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const copyText = ex.questions.map(q => `${q.numberLabel} ${/vrai/i.test(q.finalAnswer || '') ? 'VRAI' : 'FAUX'}`).join('\n');
                        navigator.clipboard.writeText(copyText);
                        setCopiedIndex(`${ex.id}-all-answers`);
                        setTimeout(() => setCopiedIndex(null), 2500);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                        'bg-white hover:bg-indigo-100 text-indigo-950 border-indigo-300 dark:bg-indigo-900/60 dark:hover:bg-indigo-800 dark:text-indigo-200 dark:border-indigo-700'
                      }`}
                    >
                      {copiedIndex === `${ex.id}-all-answers` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === `${ex.id}-all-answers` ? 'Copié !' : 'Copier les réponses'}</span>
                    </button>
                  </div>
                )}

                {ex.questions.map((q, qIdx) => {
                  const qKey = `${ex.id}-q-${qIdx}`;
                  const isVraiFaux = /^(?:\d+[\.\)]\s*)?(?:vrai|faux)$/i.test((q.finalAnswer || '').trim());
                  const isVrai = /vrai/i.test(q.finalAnswer || '');
                  const isFaux = /faux/i.test(q.finalAnswer || '');

                  return (
                    <div
                      key={qKey}
                      className={`p-4 sm:p-5 rounded-xl border transition-colors space-y-3.5 ${
                        'bg-slate-50/70 border-slate-200 hover:border-slate-300 dark:bg-slate-950/90 dark:border-slate-800 dark:hover:border-slate-700'
                      }`}
                    >
                      {/* Question Header — empilé sur mobile : ligne 1 = badges + action, ligne 2 = énoncé pleine largeur */}
                      <div className={`space-y-1.5 pb-2 border-b ${
                        'border-slate-200 dark:border-slate-800'
                      }`}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap min-w-0">
                            <span className={`px-2.5 py-1 rounded-lg font-bold text-xs border shrink-0 ${
                              'bg-indigo-100 text-indigo-950 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-200 dark:border-indigo-700'
                            }`}>
                              Question {q.numberLabel}
                            </span>

                            {/* Inline Verdict Badge for VRAI/FAUX */}
                            {isVraiFaux && (
                              <span className={`px-3 py-1 rounded-full font-bold text-xs sm:text-sm font-mono border shadow-2xs shrink-0 ${
                                isVrai
                                  ? 'bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950/90 dark:text-emerald-300 dark:border-emerald-700'
                                  : 'bg-rose-100 text-rose-950 border-rose-300 dark:bg-rose-950/90 dark:text-rose-300 dark:border-rose-700'
                              }`}>
                                {isVrai ? '✔ VRAI' : '✖ FAUX'}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => handleCopyQuestion(q, qKey)}
                            className={`text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer shrink-0 ${
                              'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                            }`}
                            title="Copier cette réponse uniquement"
                          >
                            {copiedIndex === qKey ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedIndex === qKey ? 'Copié' : 'Copier'}</span>
                          </button>
                        </div>

                        {q.titleOrPrompt && (
                          <div className={`text-xs sm:text-sm font-bold leading-snug break-words ${
                            'text-slate-900 dark:text-white'
                          }`}>
                            <MathText text={q.titleOrPrompt} />
                          </div>
                        )}
                      </div>

                      {/* Step by step resolution (Rendered ONLY if there are genuine calculation/reasoning steps) */}
                      {q.steps && q.steps.length > 0 && (
                        <div className="space-y-2.5">
                          <div className={`text-[11px] font-bold uppercase tracking-wide flex items-center gap-1.5 ${
                            'text-indigo-900 dark:text-indigo-300'
                          }`}>
                            <BookmarkCheck className={`w-3.5 h-3.5 ${'text-indigo-700 dark:text-indigo-400'}`} />
                            <span>Démarche & Calculs Pas à Pas :</span>
                          </div>

                          <div className="space-y-2">
                            {q.steps.map((st, sIdx) => {
                              const semantic = getStepSemanticInfo(st);

                              if (semantic.badgeLabel) {
                                return (
                                  <div
                                    key={sIdx}
                                    className={`p-3 rounded-lg border text-xs sm:text-sm leading-relaxed flex flex-col gap-1.5 shadow-2xs ${
                                      semantic.type === 'warning'
                                        ? 'bg-rose-50/50 border-rose-200 text-slate-900 dark:bg-rose-950/20 dark:border-rose-800/60 dark:text-slate-100'
                                        : semantic.type === 'conclusion'
                                          ? 'bg-emerald-50/50 border-emerald-200 text-slate-900 dark:bg-emerald-950/20 dark:border-emerald-800/60 dark:text-slate-100'
                                          : 'bg-slate-50/80 border-slate-200 text-slate-900 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${semantic.badgeClass}`}>
                                        {semantic.badgeLabel}
                                      </span>
                                    </div>
                                    <div className="whitespace-pre-line font-medium pl-0.5"><MathText text={semantic.cleanText} /></div>
                                  </div>
                                );
                              }

                              if (semantic.type === 'pure_math') {
                                return (
                                  <div
                                    key={sIdx}
                                    className={`px-3.5 py-2.5 rounded-lg border text-sm sm:text-base leading-relaxed flex items-center justify-between shadow-2xs ${
                                      'bg-white border-slate-300 text-slate-950 dark:bg-slate-900/90 dark:border-slate-700/80 dark:text-white'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 flex-1 overflow-x-auto">
                                      <span className={`text-xs font-bold select-none ${
                                        'text-indigo-700 dark:text-indigo-400'
                                      }`}>
                                        ▸
                                      </span>
                                      <span className="font-semibold tracking-wide whitespace-pre-wrap"><MathText text={semantic.cleanText} /></span>
                                    </div>
                                  </div>
                                );
                              }

                              const isRuleOrText = /^(?:Or\b|Donc\b|D'o[ùu]\b|D'apr[èe]s\b|On sait\b|Par hypoth[èe]se\b|Comme\b|Soit\b|Le triangle\b|Le point\b|Les points\b|Propri[ée]t[ée]\b|Th[ée]or[èe]me\b|Formule\b|Donn[ée]es\b)/i.test(st.trim());
                              if (isRuleOrText) {
                                return (
                                  <div
                                    key={sIdx}
                                    className={`p-2.5 sm:p-3 rounded-lg border text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${
                                      'bg-slate-50/80 border-slate-200 text-slate-900 font-medium dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100'
                                    }`}
                                  >
                                    <Info className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                                    <div className="flex-1 whitespace-pre-line"><MathText text={st.trim()} /></div>
                                  </div>
                                );
                              }

                              return (
                                <div
                                  key={sIdx}
                                  className={`px-3 py-2 rounded-lg border text-xs sm:text-sm leading-relaxed flex items-start gap-2 ${
                                    'bg-white border-slate-200 text-slate-900 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-200'
                                  }`}
                                >
                                  <span className={`text-xs font-bold select-none mt-0.5 ${
                                    'text-indigo-600 dark:text-indigo-400'
                                  }`}>
                                    •
                                  </span>
                                  <div className="flex-1 whitespace-pre-line font-medium"><MathText text={st.trim()} /></div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Boxed Final Result or Written Answer */}
                      {q.finalAnswer && (() => {
                        const { label: answerLabel, isCalc, isVraiFaux: isVF, isFaux: isF } = getFinalAnswerBadgeInfo(
                          q.finalAnswer,
                          subjectTitle,
                          discipline,
                          ex.title
                        );

                        return (
                          <div className={`mt-3 p-3 sm:p-4 rounded-lg border-2 flex flex-col gap-2 shadow-2xs max-w-full overflow-hidden ${
                            isF
                              ? 'bg-rose-50/70 border-rose-400 text-rose-950 dark:bg-rose-950/40 dark:border-rose-600 dark:text-rose-100'
                              : isCalc
                                ? 'bg-emerald-50/70 border-emerald-500 text-emerald-950 dark:bg-emerald-950/50 dark:border-emerald-600 dark:text-emerald-100'
                                : 'bg-slate-50 border-slate-300 text-slate-900 dark:bg-slate-900/80 dark:border-slate-700 dark:text-slate-100'
                          }`}>
                            <div className="flex items-center gap-2 min-w-0 max-w-full">
                              <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                                isF
                                  ? 'bg-rose-600 text-white dark:bg-rose-500 dark:text-slate-950'
                                  : isCalc
                                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950'
                                    : 'bg-indigo-700 text-white dark:bg-indigo-500 dark:text-slate-950'
                              }`}>
                                {isF ? <span className="font-bold text-xs">✕</span> : (isCalc ? <CheckCircle2 className="w-3.5 h-3.5" /> : <FileCheck className="w-3.5 h-3.5" />)}
                              </div>
                              <div className={`text-xs font-bold min-w-0 flex-1 break-words whitespace-normal leading-tight ${
                                isF
                                  ? 'text-rose-900 dark:text-rose-300'
                                  : isCalc
                                    ? 'text-emerald-900 dark:text-emerald-300'
                                    : 'text-slate-900 dark:text-slate-100'
                              }`}>
                                {answerLabel}
                              </div>
                            </div>
                            <div className="w-full min-w-0 overflow-x-auto touch-pan-x py-1 px-1">
                              <div className={`text-xs sm:text-sm md:text-base break-words max-w-full ${
                                isCalc ? 'font-bold tracking-wide' : 'font-medium leading-relaxed font-sans'
                              } ${
                                isF
                                  ? 'text-rose-950 dark:text-rose-200'
                                  : isCalc
                                    ? 'text-emerald-950 dark:text-emerald-200'
                                    : 'text-slate-900 dark:text-slate-100'
                              }`}>
                                <MathText text={q.finalAnswer} />
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* RENDER MODE 2: EXAM SHEET (MANUSCRIPT READY) */}
      {activeLayout === 'exam_sheet' && (
        <div
          className={`p-6 sm:p-10 rounded-2xl border font-sans leading-relaxed space-y-8 shadow-md ${
            'bg-white text-slate-900 border-slate-200 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800'
          }`}
        >
          {exercises.map((ex, exIdx) => (
            <div key={exIdx} className={`space-y-5 pb-8 border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0`}>
              {/* Exercise Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <div className={`font-bold text-base sm:text-lg flex items-center gap-2 ${
                  'text-slate-900 dark:text-slate-100'
                }`}>
                  <span className="underline underline-offset-4 decoration-1 decoration-slate-400">{ex.title}</span>
                  {ex.points && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                      'text-slate-800 bg-slate-100 border-slate-300 dark:text-slate-200 dark:bg-slate-800 dark:border-slate-700'
                    }`}>
                      {ex.points}
                    </span>
                  )}
                </div>
              </div>

              {ex.introContext && (
                <div className={`p-3 rounded-lg border text-xs sm:text-sm font-medium leading-relaxed ${
                  'bg-slate-50 border-slate-200 text-slate-800 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-300'
                }`}>
                  <MathText text={ex.introContext} />
                </div>
              )}

              {/* Questions */}
              <div className="space-y-6">
                {ex.questions.map((q, qIdx) => (
                  <div key={qIdx} className="space-y-2.5 pl-3 sm:pl-4 border-l-2 border-slate-300 dark:border-slate-700">
                    <div className={`font-bold text-sm sm:text-base flex items-center gap-2 ${
                      'text-slate-950 dark:text-white'
                    }`}>
                      <span className="text-indigo-700 dark:text-indigo-400 font-bold">{q.numberLabel}</span>
                      {q.titleOrPrompt && <span><MathText text={q.titleOrPrompt} /></span>}
                    </div>

                    {/* Step calculations */}
                    {q.steps.length > 0 && (
                      <div className="space-y-2 pl-2 sm:pl-3">
                        {q.steps.map((st, sIdx) => {
                          const semantic = getStepSemanticInfo(st);

                          if (semantic.badgeLabel) {
                            return (
                              <div key={sIdx} className="text-xs sm:text-sm leading-relaxed space-y-0.5">
                                <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border mr-2 ${semantic.badgeClass}`}>
                                  {semantic.badgeLabel}
                                </span>
                                <span className="text-slate-800 dark:text-slate-200 font-medium">
                                  <MathText text={semantic.cleanText} />
                                </span>
                              </div>
                            );
                          }

                          if (semantic.type === 'pure_math') {
                            return (
                              <div
                                key={sIdx}
                                className="text-xs sm:text-sm font-mono font-bold text-slate-950 dark:text-white py-0.5 leading-relaxed pl-3 border-l-2 border-slate-300 dark:border-slate-700"
                              >
                                <MathText text={semantic.cleanText} />
                              </div>
                            );
                          }

                          return (
                            <div
                              key={sIdx}
                              className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium flex items-start gap-2"
                            >
                              <span className="text-slate-400 dark:text-slate-500 font-bold">•</span>
                              <div className="flex-1"><MathText text={st} /></div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Boxed final result or written conclusion */}
                    {q.finalAnswer && (() => {
                      const { isCalc, isVraiFaux: isVF } = getFinalAnswerBadgeInfo(
                        q.finalAnswer,
                        subjectTitle,
                        discipline,
                        ex.title
                      );
                      const isEng = /anglais|english|englais/i.test([subjectTitle, discipline, ex.title].join(' '));

                      return (
                        <div className="mt-3 pl-1 sm:pl-3 max-w-full">
                          <div className={`inline-flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-1.5 px-3 py-2 rounded-md border font-bold text-xs sm:text-sm md:text-base shadow-2xs max-w-full overflow-x-auto touch-pan-x break-words ${
                            isCalc
                              ? 'bg-emerald-50/60 border-emerald-500 text-emerald-950 dark:bg-emerald-950/60 dark:border-emerald-500 dark:text-emerald-200 font-mono'
                              : 'bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 font-sans'
                          }`}>
                            <span className={`text-xs font-bold shrink-0 font-sans ${
                              isCalc
                                ? 'text-emerald-800 dark:text-emerald-300'
                                : 'text-slate-700 dark:text-slate-300'
                            }`}>
                              {isCalc ? 'Résultat :' : (isVF ? 'Réponse :' : (isEng ? 'Answer :' : 'Réponse :'))}
                            </span>
                            <span className="min-w-0 break-words max-w-full py-0.5">
                              <MathText text={q.finalAnswer} />
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
