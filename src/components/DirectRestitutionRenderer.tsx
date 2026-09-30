import React from 'react';
import { CheckCircle2, Bookmark, Table, Compass, MapPin, Award } from 'lucide-react';
import MathText from './MathText';

interface DirectRestitutionRendererProps {
  rawText: string;
  subjectTitle: string;
  discipline?: string;
}

export const DirectRestitutionRenderer: React.FC<DirectRestitutionRendererProps> = ({
  rawText,
  subjectTitle,
  discipline = 'Géographie',
}) => {
  if (!rawText) return null;

  // Render inline formatting: bold **text**, italics *text*, and KaTeX math if present
  const renderInlineFormatted = (text: string) => {
    // If there's math delimiters $, use MathText
    if (/\$|\\\(|\\\[/.test(text)) {
      return <MathText text={text} />;
    }

    // Split by bold (**...**)
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
            return (
              <strong key={i} className="font-bold text-slate-900 dark:text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          // Split by italics (*...*)
          const subParts = part.split(/(\*[^*]+\*)/g);
          return subParts.map((sub, j) => {
            if (sub.startsWith('*') && sub.endsWith('*') && sub.length >= 2) {
              return (
                <em key={`${i}-${j}`} className="italic text-slate-700 dark:text-slate-300">
                  {sub.slice(1, -1)}
                </em>
              );
            }
            return <span key={`${i}-${j}`}>{sub}</span>;
          });
        })}
      </>
    );
  };

  // Parse lines and group tables, headers, lists
  const lines = rawText.split('\n');
  const blocks: React.ReactNode[] = [];
  let tableRows: string[] = [];
  let inTable = false;

  const flushTable = (key: string) => {
    if (tableRows.length === 0) return;

    // Filter out separator lines like | :--- | :--- |
    const cleanRows = tableRows.filter((r) => !/^\|[\s\-:]+(\|[\s\-:]+)+\|?$/.test(r.trim()));
    if (cleanRows.length === 0) {
      tableRows = [];
      inTable = false;
      return;
    }

    const headerRow = cleanRows[0];
    const dataRows = cleanRows.slice(1);

    const parseCells = (row: string) => {
      const trimmed = row.trim();
      const content = trimmed.replace(/^\|/, '').replace(/\|$/, '');
      return content.split('|').map((c) => c.trim());
    };

    const headers = parseCells(headerRow);

    blocks.push(
      <div key={key} className="my-6 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="bg-slate-100 dark:bg-slate-900/80 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
          <Table className="w-4 h-4 text-slate-500" />
          <span>Tableau Récapitulatif & Mémotechnique Officiel</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                {headers.map((h, hIdx) => (
                  <th key={hIdx} className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
                    {renderInlineFormatted(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {dataRows.map((r, rIdx) => {
                const cells = parseCells(r);
                return (
                  <tr key={rIdx} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors">
                    {cells.map((c, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 align-top text-slate-700 dark:text-slate-300 border-r last:border-r-0 border-slate-200 dark:border-slate-800">
                        {renderInlineFormatted(c)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );

    tableRows = [];
    inTable = false;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Check table line: starts and contains pipes
    if (/^\|.*\|$/.test(trimmed)) {
      inTable = true;
      tableRows.push(trimmed);
      return;
    } else if (inTable) {
      flushTable(`table-${idx}`);
    }

    if (!trimmed) {
      blocks.push(<div key={`space-${idx}`} className="h-2" />);
      return;
    }

    // Divider
    if (/^---$|^___$/.test(trimmed)) {
      blocks.push(
        <div key={`hr-${idx}`} className="my-6 border-t border-slate-200 dark:border-slate-800" />
      );
      return;
    }

    // Level 1 or 2 Header (# or ##)
    if (/^#{1,2}\s+/.test(trimmed)) {
      const headingText = trimmed.replace(/^#{1,2}\s+/, '');
      blocks.push(
        <div key={`h1-${idx}`} className="mt-8 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0" />
            <span>{headingText}</span>
          </h2>
        </div>
      );
      return;
    }

    // Level 3 Header (###)
    if (/^###\s+/.test(trimmed)) {
      const headingText = trimmed.replace(/^###\s+/, '');
      blocks.push(
        <div key={`h3-${idx}`} className="mt-6 mb-3 p-3 sm:p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-4 rounded bg-[#0030B6] shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {headingText}
            </h3>
          </div>
          <span className="text-[11px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 shrink-0">
            Repère Clé
          </span>
        </div>
      );
      return;
    }

    // Level 4 Header (#### A. Les Plaines...)
    if (/^####\s+/.test(trimmed)) {
      const headingText = trimmed.replace(/^####\s+/, '');
      blocks.push(
        <div key={`h4-${idx}`} className="mt-5 mb-2 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
          <Compass className="w-4 h-4 text-slate-500 shrink-0" />
          <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
            {headingText}
          </h4>
        </div>
      );
      return;
    }

    // Main bullet with label (* **Title** : ...)
    if (/^(\*|-)\s+\*\*(.*?)\*\*\s*:(.*)$/.test(trimmed)) {
      const match = trimmed.match(/^(\*|-)\s+\*\*(.*?)\*\*\s*:(.*)$/);
      if (match) {
        const [, , label, content] = match;
        blocks.push(
          <div key={`bullet-label-${idx}`} className="my-2 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 transition-colors">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong className="font-semibold text-slate-900 dark:text-white mr-1.5">
                  {label} :
                </strong>
                <span className="text-slate-700 dark:text-slate-300">
                  {renderInlineFormatted(content)}
                </span>
              </div>
            </div>
          </div>
        );
        return;
      }
    }

    // Sub-bullet with dash (  - item...)
    if (/^\s*-\s+/.test(trimmed) || /^-\s+/.test(trimmed)) {
      const content = trimmed.replace(/^[\s-]+\s*/, '');
      blocks.push(
        <div key={`sub-bullet-${idx}`} className="my-1.5 ml-4 sm:ml-6 flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <span className="text-slate-400 font-bold mt-0.5">•</span>
          <div className="flex-1">
            {renderInlineFormatted(content)}
          </div>
        </div>
      );
      return;
    }

    // Standard Bullet list item (* item)
    if (/^\*\s+/.test(trimmed)) {
      const content = trimmed.replace(/^\*\s+/, '');
      blocks.push(
        <div key={`bullet-${idx}`} className="my-2 flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 pl-1">
          <CheckCircle2 className="w-4 h-4 text-[#0030B6] dark:text-sky-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            {renderInlineFormatted(content)}
          </div>
        </div>
      );
      return;
    }

    // Numbered Item (1., 2., 3.)
    if (/^\d+[\.\)]\s+/.test(trimmed)) {
      const numMatch = trimmed.match(/^(\d+[\.\)])/);
      const content = trimmed.replace(/^\d+[\.\)]\s+/, '');
      blocks.push(
        <div key={`num-${idx}`} className="my-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
          <span className="w-6 h-6 rounded bg-[#0030B6] text-white font-semibold text-xs flex items-center justify-center shrink-0">
            {numMatch?.[0]?.replace(/[\.\)]/, '') || '•'}
          </span>
          <div className="flex-1 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
            {renderInlineFormatted(content)}
          </div>
        </div>
      );
      return;
    }

    // Standard text paragraph
    blocks.push(
      <p key={`para-${idx}`} className="my-2 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
        {renderInlineFormatted(trimmed)}
      </p>
    );
  });

  // Flush any dangling table at end
  if (inTable) {
    flushTable('table-end');
  }

  return (
    <div className="space-y-2 font-sans">
      {blocks}
    </div>
  );
};

export default DirectRestitutionRenderer;
