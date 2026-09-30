import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Quote, 
  Lightbulb, 
  HelpCircle, 
  BookOpen, 
  ArrowRight, 
  Bookmark,
  Award,
  GraduationCap,
  Layers,
  FileText
} from 'lucide-react';
import { MathText } from './MathText';
import { detectQuestionHeader } from './StructuredExamRenderer';

interface AcademicPaperRendererProps {
  content: string;
  subjectTitle?: string;
  discipline?: string;
  className?: string;
}

/**
 * Nettoie une chaîne de ses astérisques ou balises Markdown résiduelles
 * pour l'affichage de titres ou badges purs.
 */
function cleanMarkdownText(str: string): string {
  if (!str) return '';
  return str
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    .replace(/^#+\s*/, '')
    .replace(/^[-*]\s*/, '')
    .replace(/(?:×\s*){2,}/g, '')
    .replace(/[×xX]{3,}/g, '')
    .trim();
}

/**
 * Normalise le texte d'un sujet d'examen ou corrigé académique
 * pour garantir un affichage irréprochable même si le texte brut
 * a été généré avec des sections collées ou des questions en ligne.
 */
export function normalizeAcademicPaperContent(raw: string): string {
  if (!raw) return '';
  let text = raw.replace(/\r\n/g, '\n').trim();

  // 1. Isoler les sections romaines majeures (I., II., III., etc.) ou mots-clés de parties
  text = text.replace(
    /(?:^|\n)(#{0,3}\s*)(\b[I|V|X]+\b[\.\:\-]\s*(?:PR[ÉE]SENTATION|COMPR[ÉE]HENSION|ANALYSE|COMMENTAIRE|SYNTH[ÈE]SE|DEVOIR|PARTIE|SECTION|EXERCICE|QUESTION)[^\n\r]{0,100}?)(?:\n|$)/gi,
    '\n\n## $2\n\n'
  );

  // 2. Séparer les questions numérotées collées ("1. ... 2. ... 3. ...")
  text = text.replace(
    /(?:^|\n|(?<=[\.\?\!«»\)])\s+|\s{2,})([1-9]\d?[\.\)]\s+)(?=[A-ZÀ-ÖØ-ß«"'\d])/g,
    '\n\n$1'
  );

  // 3. Formater les critères d'analyse de document sous forme de puces claires
  text = text.replace(
    /(?<=[^\d\n\.\s]\s*)(?:[\.\?\!]\s+|\s{2,})(Nature|Origine|Date|Contexte(?:\s+historique)?|Th[èe]me(?:\s+central)?|Id[ée]e\s+g[ée]n[ée]rale|Auteur|Source|Destinataire|Port[ée]e)\s*:\s*/gi,
    '.\n• **$1** : '
  );

  // 4. Si la question 1 commence directement par "1. Nature : ...", ajouter le prompt méthodique
  text = text.replace(
    /(^|\n\n)([1-9]\d?[\.\)]\s+)(Nature|Origine|Date|Contexte(?:\s+historique)?|Th[èe]me(?:\s+central)?)\s*:\s*/gi,
    '$1$2Présentation méthodique du document :\n• **$3** : '
  );

  // 5. Isoler les sous-sections de commentaire (Introduction, Développement, Conclusion, Axes)
  text = text.replace(
    /(?:^|\n)(?:#{1,4}\s*)?(INTRODUCTION|D[ÉE]VELOPPEMENT|CONCLUSION)(?:\s+DU\s+COMMENTAIRE|\s+ORGANIS[ÉE])?\s*(?:\n|$|:)/gi,
    (m, p1) => `\n\n### ${p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase()} du commentaire\n\n`
  );

  // 6. Normaliser les sauts de ligne
  text = text
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();

  return text;
}

/**
 * Rend du texte enrichi avec MathText (LaTeX KaTeX + Markdown inline propre).
 */
const RenderFormatted: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return <MathText text={text} className={className} />;
};

export const AcademicPaperRenderer: React.FC<AcademicPaperRendererProps> = ({
  content,
  subjectTitle,
  discipline,
  className = '',
}) => {
  if (!content || !content.trim()) {
    return (
      <div className="py-8 text-center text-slate-500 dark:text-slate-400 italic">
        Aucun contenu d'examen rédigé disponible.
      </div>
    );
  }

  // Prétraitement et normalisation automatique du texte
  const normalizedContent = normalizeAcademicPaperContent(content);
  const lines = normalizedContent.split('\n');
  const renderedElements: React.ReactNode[] = [];

  let i = 0;
  let elementKey = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 1. Lignes vides
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Séparateurs horizontaux (---, ***, ___ )
    if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      renderedElements.push(
        <hr 
          key={`sep-${elementKey++}`} 
          className="my-6 border-t border-slate-200 dark:border-slate-800" 
        />
      );
      i++;
      continue;
    }

    // 3. Titre de Section Principale (## I. ..., ## PARTIE ..., I. PRÉSENTATION DU DOCUMENT, etc.)
    const mainSectionRegex = 
      /^(?:#{1,2}\s*)?([I|V|X]+[\.\:\-]\s*|PARTIE\s+[I|V|X\d]+|SECTION\s+[I|V|X\d]+|PREMIÈRE\s+PARTIE|DEUXIÈME\s+PARTIE|TROISIÈME\s+PARTIE|QUATRIÈME\s+PARTIE|AUFGABEN|SPRACHKOMPETENZ|TEXTVERSTÄNDNIS|READING COMPREHENSION|COMPRÉHENSION|COMPETENCIA|EXPRESIÓN|RÉDACTION|FREIE PRODUKTION|GRAMMAR|WRITING|LITTÉRATURE|EXERCICE\s+[I|V|X\d]+)(.*)$/i;

    const mainSecMatch = trimmed.match(mainSectionRegex);
    const isMarkdownH1H2 = /^#{1,2}\s+/i.test(trimmed) && !trimmed.startsWith('###');

    if (mainSecMatch || isMarkdownH1H2) {
      let titlePart = '';

      if (mainSecMatch) {
        titlePart = `${mainSecMatch[1]}${mainSecMatch[2]}`.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
      } else {
        titlePart = trimmed.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
      }

      // Extraction des points (ex: "— 6 points", "(6 points)")
      const pointsMatch = titlePart.match(/(?:[—–\-]\s*|\()(\d+(?:[.,]\d+)?\s*(?:points?|pts?))\)?/i);
      const points = pointsMatch ? pointsMatch[1] : null;
      const titleWithoutPoints = pointsMatch 
        ? titlePart.replace(pointsMatch[0], '').trim() 
        : titlePart;

      renderedElements.push(
        <div 
          key={`sec-${elementKey++}`} 
          className="mt-6 sm:mt-8 mb-3 sm:mb-4 p-3.5 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#0030B6] text-white flex items-center justify-center font-bold text-xs shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                Section Officielle d'Épreuve
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {titleWithoutPoints}
              </h2>
            </div>
          </div>
          {points && (
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 whitespace-nowrap">
              {points}
            </span>
          )}
        </div>
      );

      i++;
      continue;
    }

    // 4. Sous-titre ou Partie (### Introduction, ### A. ..., A. True or False? ..., etc.)
    const isSubSection = 
      /^#{3,4}\s+/i.test(trimmed) ||
      /^([A-Z]\.|\bSection\s+[A-Z]\b|\bPartie\s+[A-Z]\b|\bSous-partie\b|\bIntroduction\b|\bDéveloppement\b|\bConclusion\b|\bAxe\s+\d)/i.test(trimmed.replace(/^#+\s*/, ''));

    if (isSubSection) {
      const cleanSub = trimmed.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
      const pointsMatch = cleanSub.match(/(?:[—–\-]\s*|\()(\d+(?:[.,]\d+)?\s*(?:points?|pts?))\)?/i);
      const points = pointsMatch ? pointsMatch[1] : null;
      const subTitle = pointsMatch ? cleanSub.replace(pointsMatch[0], '').trim() : cleanSub;

      const isIntro = /introduction/i.test(subTitle);
      const isDev = /d[ée]veloppement/i.test(subTitle);
      const isConcl = /conclusion/i.test(subTitle);

      renderedElements.push(
        <div 
          key={`sub-${elementKey++}`} 
          className="mt-5 mb-2.5 px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5">
            {isIntro ? (
              <GraduationCap className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
            ) : isDev ? (
              <Layers className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
            ) : isConcl ? (
              <Award className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
            ) : (
              <Bookmark className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
            )}
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 block">
                {isIntro ? 'Étape méthodologique : Introduction' : isDev ? 'Développement structuré' : isConcl ? 'Bilan & Clôture' : 'Sous-partie d\'épreuve'}
              </span>
              <h3 className="text-sm font-bold tracking-tight">
                {subTitle}
              </h3>
            </div>
          </div>
          {points && (
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-300 dark:border-slate-700 whitespace-nowrap">
              {points}
            </span>
          )}
        </div>
      );
      i++;
      continue;
    }

    // 5. Bloc de Citation Markdown (lignes commençant par >)
    if (/^>\s*/.test(trimmed)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s*/.test(lines[i].trim())) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        i++;
      }

      const quoteText = quoteLines.join(' ')
        .replace(/(?:×\s*){2,}/g, '')
        .replace(/[×xX]{3,}/g, '');
      renderedElements.push(
        <blockquote 
          key={`quote-${elementKey++}`} 
          className="my-3 px-4 py-3 rounded-r-lg border-l-3 border-[#0030B6] bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 text-xs sm:text-sm italic leading-relaxed flex items-start gap-2.5"
        >
          <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 not-italic" />
          <div className="flex-1">
            <RenderFormatted text={quoteText} />
          </div>
        </blockquote>
      );
      continue;
    }

    // 6. Détection d'une Question ou Item Numéroté
    const qHeader = detectQuestionHeader(trimmed);
    const isQuestionStart = Boolean(qHeader);

    if (isQuestionStart && qHeader) {
      const questionNumber = qHeader.numberLabel;
      let questionPrompt = qHeader.prompt;

      // Collecter les lignes associées à cette question (réponses, justifications, explications)
      i++;
      const subItems: string[] = [];
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (!nextLine) {
          i++;
          continue;
        }
        // Si la ligne suivante est une nouvelle question, une section ou un séparateur, on arrête le bloc
        const isNextQuestion = 
          Boolean(detectQuestionHeader(nextLine)) ||
          /^#{1,4}\s+/i.test(nextLine) ||
          /^(\-{3,}|\*{3,}|_{3,})$/.test(nextLine);

        if (isNextQuestion) {
          break;
        }

        subItems.push(nextLine);
        i++;
      }

      // Si la question n'a pas de sous-items mais comporte un intitulé et une réponse séparés par ":"
      let promptPrefix = '';
      let promptAnswerPart = '';
      if (subItems.length === 0 && questionPrompt.includes(':')) {
        const colonIdx = questionPrompt.indexOf(':');
        const candidatePrefix = questionPrompt.slice(0, colonIdx).trim();
        const candidateAnswer = questionPrompt.slice(colonIdx + 1).trim();

        // Si le préfixe est court (< 80 caractères) et que la suite est substantielle
        if (candidatePrefix.length < 80 && candidateAnswer.length > 5) {
          promptPrefix = candidatePrefix + ' :';
          promptAnswerPart = candidateAnswer;
        }
      }

      renderedElements.push(
        <div 
          key={`q-${elementKey++}`} 
          className="my-3.5 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden"
        >
          {/* En-tête de la Question */}
          <div className="p-3 sm:p-3.5 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
            <span className="px-2 py-0.5 rounded bg-[#0030B6] text-white font-semibold text-xs shrink-0">
              {questionNumber}
            </span>
            <div className="flex-1 text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
              {promptPrefix ? (
                <RenderFormatted text={promptPrefix} />
              ) : (
                <RenderFormatted text={questionPrompt || 'Consigne / Question officielle :'} />
              )}
            </div>
          </div>

          {/* Corps de la Question (Réponse, Critères, Justification, Explication, Citation) */}
          <div className="p-3 sm:p-3.5 space-y-2.5">
            {/* Si une réponse directe a été extraite de la ligne principale sans sous-items */}
            {promptAnswerPart && (
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm flex items-start gap-2.5">
                <ArrowRight className="w-4 h-4 text-[#0030B6] dark:text-sky-400 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <span className="font-semibold text-slate-900 dark:text-white mr-2">
                    Réponse rédigée :
                  </span>
                  <RenderFormatted text={promptAnswerPart} />
                </div>
              </div>
            )}

            {subItems.length > 0 && subItems.map((sub, sIdx) => {
              const subTrim = sub.trim();
              let subClean = subTrim
                .replace(/^[-*•]\s*/, '')
                .replace(/(?:×\s*){2,}/g, '')
                .replace(/[×xX]{3,}/g, '')
                .trim();
              if (subClean.startsWith('**') && subClean.endsWith('**') && subClean.length > 4) {
                subClean = subClean.slice(2, -2).trim();
              }

              // Cas A : Critères d'analyse méthodique de document (Nature, Thème, Contexte historique, Date, Origine...)
              const criterionMatch = subClean.match(/^(?:\*\*)?(Nature|Origine|Date|Contexte(?:\s+historique)?|Th[èe]me(?:\s+central)?|Id[ée]e\s+g[ée]n[ée]rale|Auteur|Source|Destinataire|Port[ée]e)(?:\*\*)?\s*:\s*(.*)$/i);
              if (criterionMatch) {
                const critLabel = criterionMatch[1].toUpperCase();
                const critVal = criterionMatch[2];
                return (
                  <div 
                    key={sIdx} 
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-baseline gap-2 text-xs sm:text-sm"
                  >
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-[11px] uppercase tracking-wider shrink-0">
                      {critLabel}
                    </span>
                    <div className="text-slate-800 dark:text-slate-200 leading-relaxed flex-1">
                      <RenderFormatted text={critVal} />
                    </div>
                  </div>
                );
              }

              // Cas B : Réponse VRAI / FAUX ou TRUE / FALSE
              const isTrueFalseAnswer = 
                /^(?:Réponse|Answer|Antwort)\s*:\s*(?:\*\*)?(TRUE|FALSE|VRAI|FAUX|RICHTIG|FALSCH|VERDADERO|FALSO)(?:\*\*)?/i.test(subClean);

              if (isTrueFalseAnswer) {
                const match = subClean.match(/(TRUE|FALSE|VRAI|FAUX|RICHTIG|FALSCH|VERDADERO|FALSO)/i);
                const answerVal = match ? match[1].toUpperCase() : '';
                const isPositive = /^(TRUE|VRAI|RICHTIG|VERDADERO)$/i.test(answerVal);

                return (
                  <div 
                    key={sIdx} 
                    className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex items-center gap-2.5 text-xs sm:text-sm font-semibold"
                  >
                    {isPositive ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <div>
                      <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400 block">
                        Réponse officielle :
                      </span>
                      <span className="text-sm sm:text-base font-bold">
                        {answerVal}
                      </span>
                    </div>
                  </div>
                );
              }

              // Cas C : Réponse rédigée standard
              const isGeneralAnswer = 
                /^(?:Réponse|Answer|Antwort|Phrase transformée|Corrigé|Solution)\s*:/i.test(subClean) ||
                /^(?:➜|=>|->)/.test(subClean);

              if (isGeneralAnswer) {
                const contentAfter = subClean.replace(/^(?:Réponse|Answer|Antwort|Phrase transformée|Corrigé|Solution)\s*:\s*/i, '').replace(/^(?:➜|=>|->)\s*/, '');
                return (
                  <div 
                    key={sIdx} 
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <ArrowRight className="w-4 h-4 text-[#0030B6] dark:text-sky-400 shrink-0 mt-0.5" />
                    <div className="flex-1 leading-relaxed">
                      <span className="font-semibold text-slate-900 dark:text-white mr-2">
                        Réponse rédigée :
                      </span>
                      <RenderFormatted text={contentAfter} />
                    </div>
                  </div>
                );
              }

              // Cas D : Justification textuelle ou citation de preuve
              const isJustification = 
                /^(?:Justification textuelle|Justification|Evidence|Textuelle|Citation|Preuve|Beleg)\s*:/i.test(subClean) ||
                /\bJustification from text\b/i.test(subClean);

              if (isJustification) {
                const quoteContent = subClean.replace(/^(?:Justification textuelle|Justification|Evidence|Textuelle|Citation|Preuve|Beleg)\s*:\s*/i, '');
                return (
                  <div 
                    key={sIdx} 
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-semibold text-slate-900 dark:text-slate-200 text-xs uppercase tracking-wide block mb-0.5">
                        Preuve & Justification dans le texte :
                      </span>
                      <div className="italic text-slate-700 dark:text-slate-300 leading-relaxed">
                        <RenderFormatted text={quoteContent} />
                      </div>
                    </div>
                  </div>
                );
              }

              // Cas E : Explication pédagogique ou Sens
              const isExplanation = 
                /^(?:Explication|Sens|Remarque|Commentaire|Hinweis|Nota)\s*:/i.test(subClean) ||
                /^_(?:Explication|Sens|Remarque)\s*:/i.test(subClean);

              if (isExplanation) {
                const explContent = subClean.replace(/^_(?:Explication|Sens|Remarque)\s*:\s*/i, '').replace(/^_/, '').replace(/_$/, '');
                return (
                  <div 
                    key={sIdx} 
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs flex items-start gap-2"
                  >
                    <Lightbulb className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div className="flex-1 leading-relaxed">
                      <span className="font-semibold text-slate-900 dark:text-slate-200 mr-1.5">
                        Éclairage pédagogique :
                      </span>
                      <RenderFormatted text={explContent} />
                    </div>
                  </div>
                );
              }

              // Cas F : Paragraphe ou puce standard dans la question
              return (
                <div key={sIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 leading-relaxed">
                  <RenderFormatted text={subClean} />
                </div>
              );
            })}
          </div>
        </div>
      );
      continue;
    }

    // 7. Ligne de réponse isolée hors bloc question (ex: "Réponse : ...", "-> ...")
    if (/^(?:[-*•]\s*)?(?:Réponse|Answer|Antwort|Phrase transformée)\s*:/i.test(trimmed)) {
      const cleanAns = trimmed.replace(/^[-*•]\s*/, '');
      renderedElements.push(
        <div 
          key={`ans-${elementKey++}`} 
          className="my-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-medium flex items-start gap-2"
        >
          <CheckCircle2 className="w-4 h-4 text-[#0030B6] dark:text-sky-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <RenderFormatted text={cleanAns} />
          </div>
        </div>
      );
      i++;
      continue;
    }

    // 8. Paragraphe narratif standard (Dissertation, texte de transition, etc.)
    renderedElements.push(
      <p 
        key={`p-${elementKey++}`} 
        className="my-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed sm:leading-loose text-left sm:text-justify [text-align-last:left] break-words hyphens-none sm:hyphens-auto px-1"
      >
        <RenderFormatted text={trimmed} />
      </p>
    );
    i++;
  }

  return (
    <div className={`academic-paper-sheet space-y-2 font-sans ${className}`}>
      {renderedElements}
    </div>
  );
};

export default AcademicPaperRenderer;
