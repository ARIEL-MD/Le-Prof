import React, { useState, useRef, useEffect } from 'react';
import { Calculator, Check, X, ArrowRight, BookOpen, Atom, Dna, Plus } from 'lucide-react';
import { MathText } from './MathText';
import { convertNaturalOrPseudoMathToLatex } from '../utils/mathFormatter';
import { cleanNaturalScientificText, wrapInlineMath } from './RichScientificInput';

interface FractionFormulaBuilderProps {
  onInsert: (latex: string) => void;
  onClose?: () => void;
  isOpen?: boolean;
}

export const PRESET_FORMULAS = [
  // --- MATHS ---
  {
    category: 'math',
    label: 'a/b (Générale)',
    latex: '\\frac{a}{b}',
    description: 'Fraction générale a sur b',
  },
  {
    category: 'math',
    label: '1/2 (Demi)',
    latex: '\\frac{1}{2}',
    description: 'Un demi',
  },
  {
    category: 'math',
    label: '3/x (Fonction inverse)',
    latex: '\\frac{3}{x}',
    description: '3 sur x',
  },
  {
    category: 'math',
    label: '1/x² (Puissance négative)',
    latex: '\\frac{1}{x^2}',
    description: '1 sur x au carré',
  },
  {
    category: 'math',
    label: '(-b ± √Δ) / 2a',
    latex: '\\frac{-b \\pm \\sqrt{\\Delta}}{2a}',
    description: 'Racines du trinôme du second degré',
  },
  {
    category: 'math',
    label: '(f(x)-f(a))/(x-a)',
    latex: '\\frac{f(x) - f(a)}{x - a}',
    description: 'Taux de variation / Dérivabilité',
  },
  {
    category: 'math',
    label: '(u_{n+1}-u_n)/u_n',
    latex: '\\frac{u_{n+1} - u_n}{u_n}',
    description: 'Taux d\'accroissement d\'une suite',
  },
  // --- CHIMIE & PHYSIQUE ---
  {
    category: 'pc',
    label: 'Ka = ([A⁻]·[H₃O⁺]) / [AH]',
    latex: 'K_a = \\frac{[\\text{A}^-] \\cdot [\\text{H}_3\\text{O}^+]}{[\\text{AH}]}',
    description: 'Constante d\'acidité Ka d\'un couple acide/base',
  },
  {
    category: 'pc',
    label: 'n = m/M',
    latex: 'n = \\frac{m}{M}',
    description: 'Quantité de matière par masse',
  },
  {
    category: 'pc',
    label: 'C = n/V',
    latex: 'C = \\frac{n}{V}',
    description: 'Concentration molaire C = n/V',
  },
  {
    category: 'pc',
    label: 'Ec = 1/2 m v²',
    latex: 'E_c = \\frac{1}{2} m v^2',
    description: 'Énergie cinétique d\'un solide',
  },
  {
    category: 'pc',
    label: 'pH = -log[H₃O⁺]',
    latex: '\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]',
    description: 'Formule du pH en solution aqueuse',
  },
  {
    category: 'pc',
    label: 'τ = xf / xmax',
    latex: '\\tau = \\frac{x_f}{x_{max}}',
    description: 'Taux d\'avancement final d\'une réaction',
  },
];

export const FractionFormulaBuilder: React.FC<FractionFormulaBuilderProps> = ({
  onInsert,
  onClose,
  isOpen = true,
}) => {
  const [activeTab, setActiveTab] = useState<'custom' | 'presets'>('custom');
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [activeTarget, setActiveTarget] = useState<'num' | 'den'>('num');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const numInputRef = useRef<HTMLInputElement>(null);
  const denInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeTarget === 'num') {
      numInputRef.current?.focus();
    } else {
      denInputRef.current?.focus();
    }
  }, [activeTarget]);

  const insertSymbolIntoActiveField = (sym: string) => {
    if (activeTarget === 'num') {
      setNumerator((prev) => (prev ? `${prev} ${sym}` : sym));
    } else {
      setDenominator((prev) => (prev ? `${prev} ${sym}` : sym));
    }
  };

  // Expression LaTeX générée en direct pour la fraction
  const cleanNum = convertNaturalOrPseudoMathToLatex(numerator.trim()) || 'a';
  const cleanDen = convertNaturalOrPseudoMathToLatex(denominator.trim()) || 'b';
  const previewLatex = `\\frac{${cleanNum}}{${cleanDen}}`;

  const handleInsert = (latexString?: string) => {
    const raw = latexString || previewLatex;
    const clean = cleanNaturalScientificText(raw);
    const toInsert = wrapInlineMath(clean);
    onInsert(toInsert);
    setCopiedLabel('Inséré !');
    setTimeout(() => {
      setCopiedLabel(null);
      if (onClose) onClose();
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 rounded-2xl shadow-lg p-3 sm:p-4 space-y-3 transition-all animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            a/b
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <span>Bâtisseur de Fractions & Formules Mathématiques</span>
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Composez vos fractions empilées avec tous les symboles sans difficulté
            </p>
          </div>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setActiveTab('custom')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'custom'
              ? 'bg-indigo-600 text-white shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Créer ma fraction personnalisée</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('presets')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === 'presets'
              ? 'bg-indigo-600 text-white shadow-2xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Modèles usuels (Ka, pH, Second degré...)</span>
        </button>
      </div>

      {/* TAB 1: CUSTOM BUILDER */}
      {activeTab === 'custom' && (
        <div className="space-y-3">
          {/* Saisie visuelle verticale du Numérateur et Dénominateur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center bg-slate-50/80 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
            {/* Colonne gauche : Saisie Numérateur / Dénominateur */}
            <div className="space-y-2">
              <div
                className={`p-2 rounded-xl border transition-all ${
                  activeTarget === 'num'
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/80 border-indigo-500 shadow-xs ring-2 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => {
                  setActiveTarget('num');
                  numInputRef.current?.focus();
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
                    1. Numérateur (Haut)
                  </span>
                  {activeTarget === 'num' && (
                    <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.2 rounded-full font-semibold">
                      En cours de saisie
                    </span>
                  )}
                </div>
                <input
                  ref={numInputRef}
                  type="text"
                  value={numerator}
                  onChange={(e) => setNumerator(e.target.value)}
                  onFocus={() => setActiveTarget('num')}
                  placeholder="Ex : [A⁻]·[H₃O⁺], 3x²+1, n, -b+√Δ..."
                  className="w-full text-xs sm:text-sm font-mono font-bold p-1.5 bg-transparent border-b border-indigo-300 dark:border-indigo-700 text-slate-900 dark:text-slate-100 focus:outline-hidden"
                />
              </div>

              {/* Barre horizontale de division */}
              <div className="flex items-center justify-center gap-2 py-0.5">
                <div className="h-0.5 bg-indigo-500 dark:bg-indigo-400 flex-1 rounded-full"></div>
                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  barre de fraction
                </span>
                <div className="h-0.5 bg-indigo-500 dark:bg-indigo-400 flex-1 rounded-full"></div>
              </div>

              <div
                className={`p-2 rounded-xl border transition-all ${
                  activeTarget === 'den'
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/80 border-indigo-500 shadow-xs ring-2 ring-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                }`}
                onClick={() => {
                  setActiveTarget('den');
                  denInputRef.current?.focus();
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
                    2. Dénominateur (Bas)
                  </span>
                  {activeTarget === 'den' && (
                    <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.2 rounded-full font-semibold">
                      En cours de saisie
                    </span>
                  )}
                </div>
                <input
                  ref={denInputRef}
                  type="text"
                  value={denominator}
                  onChange={(e) => setDenominator(e.target.value)}
                  onFocus={() => setActiveTarget('den')}
                  placeholder="Ex : [AH], x-2, V, 2a..."
                  className="w-full text-xs sm:text-sm font-mono font-bold p-1.5 bg-transparent border-b border-indigo-300 dark:border-indigo-700 text-slate-900 dark:text-slate-100 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Colonne droite : Aperçu KaTeX instantané */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 min-h-[140px]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Aperçu mathématique réel (KaTeX) :
              </span>
              <div className="text-xl sm:text-2xl text-slate-900 dark:text-slate-100 font-serif my-auto py-2">
                <MathText text={previewLatex} />
              </div>
              <button
                type="button"
                onClick={() => handleInsert()}
                className="w-full mt-2 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-98"
              >
                {copiedLabel ? <Check className="w-4 h-4 text-emerald-300" /> : <ArrowRight className="w-4 h-4" />}
                <span>{copiedLabel || 'Insérer la fraction dans le texte'}</span>
              </button>
            </div>
          </div>

          {/* Palette de symboles cliquables pour remplir le champ actif */}
          <div className="space-y-1.5 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-400 px-1">
              <span>
                Insérer un symbole dans le{' '}
                <strong className="text-indigo-600 dark:text-indigo-400 underline">
                  {activeTarget === 'num' ? 'Numérateur (Haut)' : 'Dénominateur (Bas)'}
                </strong>{' '}
                :
              </span>
              <span className="text-[10px] text-slate-400">Cliquez pour insérer</span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { label: 'x', val: 'x' },
                { label: 'x²', val: 'x^2' },
                { label: 'x³', val: 'x^3' },
                { label: 'xⁿ', val: 'x^n' },
                { label: '√x', val: '\\sqrt{x}' },
                { label: '√Δ', val: '\\sqrt{\\Delta}' },
                { label: '±', val: '\\pm' },
                { label: '·', val: '\\cdot' },
                { label: '+', val: '+' },
                { label: '-', val: '-' },
                { label: '(', val: '(' },
                { label: ')', val: ')' },
                { label: '[A⁻]', val: '[\\text{A}^-]' },
                { label: '[H₃O⁺]', val: '[\\text{H}_3\\text{O}^+]' },
                { label: '[AH]', val: '[\\text{AH}]' },
                { label: '[HO⁻]', val: '[\\text{HO}^-]' },
                { label: 'n', val: 'n' },
                { label: 'm', val: 'm' },
                { label: 'M', val: 'M' },
                { label: 'V', val: 'V' },
                { label: 'C', val: 'C' },
                { label: 'ln(x)', val: '\\ln(x)' },
                { label: 'eˣ', val: 'e^x' },
                { label: 'π', val: '\\pi' },
                { label: 'Δ', val: '\\Delta' },
                { label: '2a', val: '2a' },
                { label: 'uₙ', val: 'u_n' },
                { label: 'uₙ₊₁', val: 'u_{n+1}' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => insertSymbolIntoActiveField(item.val)}
                  className="px-2 py-1 text-xs font-mono font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 shadow-2xs transition-all cursor-pointer active:scale-95 shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRESET TEMPLATES */}
      {activeTab === 'presets' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto p-1">
          {PRESET_FORMULAS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleInsert(item.latex)}
              className="group p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-all cursor-pointer shadow-2xs flex items-center justify-between gap-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  {item.category === 'pc' ? (
                    <Atom className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                  ) : (
                    <Calculator className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {item.label}
                  </span>
                </div>
                <div className="text-base text-slate-900 dark:text-slate-100 font-serif py-0.5">
                  <MathText text={item.latex} />
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 dark:text-slate-400 transition-colors"
                title="Insérer ce modèle"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
