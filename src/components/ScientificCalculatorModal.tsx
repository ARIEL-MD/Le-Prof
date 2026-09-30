import React, { useState, useRef, useEffect } from 'react';
import {
  Calculator,
  Delete,
  RotateCcw,
  Send,
  Plus,
  ArrowRight,
  Check,
  HelpCircle,
  Layers,
  Activity,
  Atom,
  Sigma,
  BookOpen,
  Trash2,
  Binary
} from 'lucide-react';
import { MathText } from './MathText';
import { InteractiveMathInput, InteractiveMathInputRef } from './InteractiveMathInput';
import { convertNaturalOrPseudoMathToLatex } from '../utils/mathFormatter';
import { cleanNaturalScientificText, isNaturalFrenchSentence, wrapInlineMath } from './RichScientificInput';

interface ScientificCalculatorModalProps {
  onInsertToInput: (text: string) => void;
  onSubmitExercise: (exerciseText: string) => void;
  onClose: () => void;
  initialValue?: string;
  currentGradeLabel?: string;
}

type TabType = 'main' | 'analyse' | 'algebra' | 'physique' | 'templates';

// Évaluation sécurisée d'expressions mathématiques simples (arithmétique, trigo, exp, ln, puissances)
function evaluateMathExpression(rawExpr: string, angleMode: 'deg' | 'rad'): { success: boolean; result?: string; error?: string } {
  try {
    let clean = rawExpr.trim();
    if (!clean) return { success: false, error: 'Expression vide' };

    // Remplacement des notations LaTeX usuelles en syntaxe JavaScript Math
    clean = clean
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '(($1)/($2))')
      .replace(/\\sqrt\{([^{}]+)\}/g, 'Math.sqrt($1)')
      .replace(/√\s*(\d+(\.\d+)?|[a-zA-Z]|\([^()]+\))/g, 'Math.sqrt($1)')
      .replace(/\\pi\b|π/g, 'Math.PI')
      .replace(/\\e\b|(?<![a-zA-Z])e(?![a-zA-Z0-9])/g, 'Math.E')
      .replace(/\\ln\b|ln/g, 'Math.log')
      .replace(/\\log\b|log/g, 'Math.log10')
      .replace(/\\times|×/g, '*')
      .replace(/\\div|÷/g, '/')
      .replace(/\^(\d+)/g, '**$1')
      .replace(/\^\{([^{}]+)\}/g, '**($1)')
      .replace(/²/g, '**2')
      .replace(/³/g, '**3')
      .replace(/(\d+)%/g, '($1/100)');

    if (angleMode === 'deg') {
      clean = clean
        .replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
        .replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
        .replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)')
        .replace(/sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
        .replace(/cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
        .replace(/tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');
    } else {
      clean = clean
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(');
    }

    // Sécurité : uniquement caractères autorisés
    if (/[^0-9+\-*/()., MathPIElogsqrttanicos**]/.test(clean)) {
      return { success: false, error: 'Expression littérale ou symbolique' };
    }

    // eslint-disable-next-line no-new-func
    const val = Function(`"use strict"; return (${clean});`)();
    if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
      const rounded = Math.abs(val - Math.round(val)) < 1e-10 ? Math.round(val).toString() : val.toFixed(4).replace(/\.?0+$/, '');
      return { success: true, result: rounded };
    }
    return { success: false, error: 'Non calculable numériquement' };
  } catch {
    return { success: false, error: 'Expression non évaluable directement' };
  }
}

export const ScientificCalculatorModal: React.FC<ScientificCalculatorModalProps> = ({
  onInsertToInput,
  onSubmitExercise,
  onClose,
  initialValue = '',
  currentGradeLabel = 'votre niveau',
}) => {
  const [expression, setExpression] = useState(initialValue);
  const [activeTab, setActiveTab] = useState<TabType | 'builder'>('main');
  const [angleMode, setAngleMode] = useState<'deg' | 'rad'>('deg');
  const [evalResult, setEvalResult] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const mathInputRef = useRef<InteractiveMathInputRef>(null);

  // États pour le constructeur guidé de formules avec chiffres (100% visuel)
  const [fracNum, setFracNum] = useState('3x + 1');
  const [fracDen, setFracDen] = useState('x');
  const [powBase, setPowBase] = useState('5');
  const [powExp, setPowExp] = useState('2');
  const [sumVar, setSumVar] = useState('k = 1');
  const [sumBound, setSumBound] = useState('n');
  const [sumTerm, setSumTerm] = useState('k²');
  const [intLow, setIntLow] = useState('0');
  const [intHigh, setIntHigh] = useState('1');
  const [intFunc, setIntFunc] = useState('2x + 1');
  const [limVar, setLimVar] = useState('x');
  const [limTarget, setLimTarget] = useState('+∞');
  const [limFunc, setLimFunc] = useState('(3x + 1)/x');
  const [chemBase, setChemBase] = useState('10^-2');
  const [chemH3O, setChemH3O] = useState('10^-3');
  const [chemAcid, setChemAcid] = useState('10^-1');
  const [derivFunc, setDerivFunc] = useState('3x² + 2x - 5');
  const [suiteExpr, setSuiteExpr] = useState('2u_n + 3');

  // Focus automatique sur l'entrée mathématique
  useEffect(() => {
    mathInputRef.current?.focus();
  }, []);

  // Évaluation automatique en temps réel à chaque modification de l'expression ou du mode
  useEffect(() => {
    if (!expression.trim()) {
      setEvalResult(null);
      return;
    }
    const res = evaluateMathExpression(expression, angleMode);
    if (res.success && res.result) {
      setEvalResult(res.result);
    } else {
      setEvalResult(null);
    }
  }, [expression, angleMode]);

  const handleAppend = (token: string) => {
    if (mathInputRef.current) {
      mathInputRef.current.insert(token);
    } else {
      setExpression((prev) => prev + token);
    }
  };

  const handleMoveLeft = () => {
    if (mathInputRef.current) {
      mathInputRef.current.moveLeft();
    }
  };

  const handleMoveRight = () => {
    if (mathInputRef.current) {
      mathInputRef.current.moveRight();
    }
  };

  const handleBackspace = () => {
    if (mathInputRef.current) {
      mathInputRef.current.backspace();
    } else {
      setExpression((prev) => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    if (mathInputRef.current) {
      mathInputRef.current.clear();
    }
    setExpression('');
    setEvalResult(null);
  };

  const handleEvaluate = () => {
    const res = evaluateMathExpression(expression, angleMode);
    if (res.success && res.result) {
      setEvalResult(res.result);
    } else {
      setEvalResult(res.error || 'Erreur');
    }
  };

  const handleCopy = () => {
    if (!expression) return;
    const clean = cleanNaturalScientificText(expression);
    navigator.clipboard.writeText(clean);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleInsertAndClose = () => {
    if (!expression.trim()) return;
    const clean = cleanNaturalScientificText(expression);
    const toInsert = isNaturalFrenchSentence(clean) ? clean : wrapInlineMath(clean);
    onInsertToInput(toInsert);
    onClose();
  };

  const handleSolveWithLeProf = () => {
    if (!expression.trim()) return;
    const clean = cleanNaturalScientificText(expression);
    onSubmitExercise(clean);
    onClose();
  };

  return (
    <div className="flex flex-col h-full max-h-[85vh] bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      {/* Écran d'affichage LCD Mathématique KaTeX 100% Visuel et Modifiable */}
      <div className="p-3 sm:p-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Calculator className="w-4 h-4" />
              Calculatrice Scientifique
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              {currentGradeLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => setAngleMode('deg')}
                className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                  angleMode === 'deg' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                DEG
              </button>
              <button
                type="button"
                onClick={() => setAngleMode('rad')}
                className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                  angleMode === 'rad' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                RAD
              </button>
            </div>
          </div>
        </div>

        {/* ÉCRAN PRINCIPAL DU CALCUL : 100% FORMULATION SCIENTIFIQUE RÉELLE ET ÉDITABLE */}
        <div
          onClick={() => {
            mathInputRef.current?.focus();
          }}
          className="relative min-h-[100px] max-h-[170px] overflow-y-auto p-4 rounded-2xl border-2 border-indigo-300 dark:border-indigo-800 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/15 transition-all shadow-inner cursor-text outline-hidden flex flex-col justify-between"
        >
          {/* Badge de résultat numérique instantané */}
          {evalResult && (
            <div className="absolute top-3 right-3 z-10 animate-fadeIn">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAppend(` = ${evalResult}`);
                }}
                title="Cliquer pour insérer la valeur au calcul"
                className="font-mono text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-300 dark:border-emerald-700 hover:scale-105 transition-all cursor-pointer shadow-xs text-xs flex items-center gap-1.5"
              >
                <span>=</span>
                <span>{evalResult}</span>
              </button>
            </div>
          )}

          {/* Saisie mathématique interactive et directement modifiable */}
          <div className="flex-1 flex flex-col justify-center pr-16 py-1">
            <InteractiveMathInput
              ref={mathInputRef}
              value={expression}
              onChange={setExpression}
              placeholder="Cliquez ici pour taper ou insérer une formule..."
              onEnter={handleEvaluate}
              className="w-full font-serif"
            />
          </div>

          {/* Barre d'actions rapides intégrée à l'écran : Curseur, AC, Effacer, Copier */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMoveLeft();
                }}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 font-bold transition-all cursor-pointer shadow-xs text-xs flex items-center gap-1 active:scale-95"
                title="Déplacer le curseur à gauche (◀)"
              >
                <span>◀</span>
                <span className="hidden sm:inline">Gauche</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMoveRight();
                }}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 font-bold transition-all cursor-pointer shadow-xs text-xs flex items-center gap-1 active:scale-95"
                title="Déplacer le curseur à droite (▶)"
              >
                <span className="hidden sm:inline">Droite</span>
                <span>▶</span>
              </button>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1 hidden sm:inline">
                Curseur actif • Tapez ou cliquez pour modifier
              </span>
            </div>

            <div className="flex items-center gap-2">
              {expression && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy();
                    }}
                    className="text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    {copiedNotification ? 'Copié !' : 'Copier'}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBackspace();
                    }}
                    className="text-slate-500 hover:text-amber-600 transition-colors cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-amber-50 dark:hover:bg-amber-950 flex items-center gap-1 font-semibold"
                    title="Effacer (⌫)"
                  >
                    <Delete className="w-3.5 h-3.5" />
                    <span>⌫</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClear();
                    }}
                    className="text-slate-500 hover:text-rose-600 transition-colors cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950 flex items-center gap-1 font-bold"
                    title="Tout effacer (AC)"
                  >
                    AC
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Onglets de navigation des claviers scientifiques */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar shrink-0 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveTab('builder')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'builder'
              ? 'bg-indigo-600 text-white shadow-xs border border-indigo-600'
              : 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
          }`}
        >
          <Binary className="w-3.5 h-3.5" />
          <span>Remplir mes chiffres</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('main')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'main'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Calcul & Fonctions</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('analyse')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'analyse'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Analyse & Limites</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('algebra')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'algebra'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Sigma className="w-3.5 h-3.5" />
          <span>Algèbre & Complexes</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('physique')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'physique'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Atom className="w-3.5 h-3.5" />
          <span>Physique-Chimie</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('templates')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'templates'
              ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Exercices Types</span>
        </button>
      </div>

      {/* Claviers selon l'onglet actif */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4">
        {/* NOUVEL ONGLET : CONSTRUCTEUR GUIDÉ AVEC CHIFFRES (100% VISUEL ET INTUITIF) */}
        {activeTab === 'builder' && (
          <div className="space-y-3">
            <div className="bg-indigo-50/90 dark:bg-indigo-950/70 p-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-950 dark:text-indigo-200 flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span><strong>Constructeur visuel :</strong> Choisissez un modèle, cliquez sur les boutons ou tapez vos nombres, et insérez en 1 clic !</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Carte 1 : Fraction empilée */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Fraction empilée :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-sm bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`\\frac{${convertNaturalOrPseudoMathToLatex(fracNum) || 'a'}}{${convertNaturalOrPseudoMathToLatex(fracDen) || 'b'}}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 space-y-1">
                      <input
                        type="text"
                        value={fracNum}
                        onChange={(e) => setFracNum(e.target.value)}
                        placeholder="Numérateur (ex: 5 ou 3x+1)"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500"
                      />
                      <div className="h-0.5 bg-indigo-500 rounded-full my-0.5"></div>
                      <input
                        type="text"
                        value={fracDen}
                        onChange={(e) => setFracDen(e.target.value)}
                        placeholder="Dénominateur (ex: 2 ou x)"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAppend(`\\frac{${convertNaturalOrPseudoMathToLatex(fracNum) || 'a'}}{${convertNaturalOrPseudoMathToLatex(fracDen) || 'b'}} `)}
                      className="shrink-0 px-3 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer
                    </button>
                  </div>
                  {/* Boutons rapides */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                    <span className="text-slate-400 text-[10px] shrink-0">Exemples :</span>
                    {[
                      { num: '1', den: '2', label: '1/2' },
                      { num: '3x + 1', den: 'x', label: '(3x+1)/x' },
                      { num: 'x² - 4', den: 'x - 2', label: '(x²-4)/(x-2)' },
                      { num: 'n(n+1)', den: '2', label: 'n(n+1)/2' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => { setFracNum(item.num); setFracDen(item.den); }}
                        className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte 2 : Limite */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Limite de fonction :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-sm bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`\\lim_{${limVar} \\to ${limTarget.replace('+∞', '+\\infty').replace('-∞', '-\\infty')}} ${convertNaturalOrPseudoMathToLatex(limFunc)}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">x ➔</span>
                    <input
                      type="text"
                      value={limTarget}
                      onChange={(e) => setLimTarget(e.target.value)}
                      placeholder="+∞, -∞, 0+, 2..."
                      className="w-20 text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    />
                    <input
                      type="text"
                      value={limFunc}
                      onChange={(e) => setLimFunc(e.target.value)}
                      placeholder="Fonction f(x) (ex: (3x+1)/x)"
                      className="flex-1 text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  {/* Boutons sélecteurs de limites instantanés */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                    <span className="text-slate-400 text-[10px] shrink-0">Vers :</span>
                    {['+∞', '-∞', '0⁺', '0⁻', '0', '1', '2'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setLimTarget(val)}
                        className={`shrink-0 px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer ${
                          limTarget === val
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                      <span className="text-slate-400 text-[10px] shrink-0">f(x) :</span>
                      {['(3x+1)/x', 'x² - 4', '1/x', 'e^x', 'ln(x)/x'].map((fn) => (
                        <button
                          key={fn}
                          type="button"
                          onClick={() => setLimFunc(fn)}
                          className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
                        >
                          {fn}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const targetLatex = limTarget.replace('+∞', '+\\infty').replace('-∞', '-\\infty').replace('0⁺', '0^+').replace('0⁻', '0^-');
                        const fnLatex = convertNaturalOrPseudoMathToLatex(limFunc);
                        handleAppend(`\\lim_{${limVar} \\to ${targetLatex}} ${fnLatex} `);
                      }}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer la limite
                    </button>
                  </div>
                </div>
              </div>

              {/* Carte 3 : Puissance / Exposant */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Puissance & Exposant :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-sm bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`${powBase || 'x'}^{${powExp || '2'}}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={powBase}
                      onChange={(e) => setPowBase(e.target.value)}
                      placeholder="Base (ex: 5, x, 10)"
                      className="flex-1 text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    />
                    <span className="text-sm font-bold text-slate-400">^</span>
                    <input
                      type="text"
                      value={powExp}
                      onChange={(e) => setPowExp(e.target.value)}
                      placeholder="Exposant (ex: 2, 3, n)"
                      className="w-20 text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
                    />
                    <button
                      type="button"
                      onClick={() => handleAppend(`${powBase || 'x'}^{${powExp || '2'}} `)}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer
                    </button>
                  </div>
                  {/* Boutons rapides pour exposants */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                    <span className="text-slate-400 text-[10px] shrink-0">Exposants :</span>
                    {['2', '3', 'n', '-1', '-2', '-3', 'x'].map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setPowExp(exp)}
                        className={`shrink-0 px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer ${
                          powExp === exp
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        ^{exp}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte 4 : Somme finie Sigma */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Somme finie (∑) :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-sm bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`\\sum_{${sumVar.replace(/\s+/g, '')}}^{${sumBound}} ${convertNaturalOrPseudoMathToLatex(sumTerm)}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">Départ</span>
                      <input
                        type="text"
                        value={sumVar}
                        onChange={(e) => setSumVar(e.target.value)}
                        placeholder="k = 1"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">Fin</span>
                      <input
                        type="text"
                        value={sumBound}
                        onChange={(e) => setSumBound(e.target.value)}
                        placeholder="n, 10..."
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">Terme</span>
                      <input
                        type="text"
                        value={sumTerm}
                        onChange={(e) => setSumTerm(e.target.value)}
                        placeholder="k², u_k..."
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                      {['k²', 'u_k', 'k', '1/k', 'q^k', '2k+1'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSumTerm(t)}
                          className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAppend(`\\sum_{${sumVar.replace(/\s+/g, '')}}^{${sumBound}} ${convertNaturalOrPseudoMathToLatex(sumTerm)} `)}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer la somme
                    </button>
                  </div>
                </div>
              </div>

              {/* Carte 5 : Intégrale définie */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Intégrale définie (∫) :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-sm bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`\\int_{${intLow}}^{${intHigh}} (${convertNaturalOrPseudoMathToLatex(intFunc)})\\,dx`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">Borne a (bas)</span>
                      <input
                        type="text"
                        value={intLow}
                        onChange={(e) => setIntLow(e.target.value)}
                        placeholder="0, -1..."
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">Borne b (haut)</span>
                      <input
                        type="text"
                        value={intHigh}
                        onChange={(e) => setIntHigh(e.target.value)}
                        placeholder="1, 2, π..."
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">f(x)</span>
                      <input
                        type="text"
                        value={intFunc}
                        onChange={(e) => setIntFunc(e.target.value)}
                        placeholder="2x + 1..."
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                      {['2x + 1', 'x²', '1/x', 'e^x', 'cos(x)'].map((fn) => (
                        <button
                          key={fn}
                          type="button"
                          onClick={() => setIntFunc(fn)}
                          className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
                        >
                          {fn}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAppend(`\\int_{${intLow}}^{${intHigh}} (${convertNaturalOrPseudoMathToLatex(intFunc)})\\,dx `)}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer l'intégrale
                    </button>
                  </div>
                </div>
              </div>

              {/* Carte 6 : Chimie Constante d'acidité Ka */}
              <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Chimie : Constante Ka :</span>
                  </span>
                  <div className="text-indigo-600 dark:text-indigo-400 font-serif text-xs bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <MathText text={`K_a = \\frac{[\\text{A}^-][\\text{H}_3\\text{O}^+]}{[\\text{AH}]}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-1.5">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">[A⁻]</span>
                      <input
                        type="text"
                        value={chemBase}
                        onChange={(e) => setChemBase(e.target.value)}
                        placeholder="10^-2"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">[H₃O⁺]</span>
                      <input
                        type="text"
                        value={chemH3O}
                        onChange={(e) => setChemH3O(e.target.value)}
                        placeholder="10^-3"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 block mb-0.5">[AH]</span>
                      <input
                        type="text"
                        value={chemAcid}
                        onChange={(e) => setChemAcid(e.target.value)}
                        placeholder="10^-1"
                        className="w-full text-xs font-medium p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar text-[11px]">
                      {['10^-2', '10^-3', '10^-4', '0.01', '0.05'].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setChemBase(v)}
                          className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 cursor-pointer"
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAppend(`K_a = \\frac{(${convertNaturalOrPseudoMathToLatex(chemBase)}) \\times (${convertNaturalOrPseudoMathToLatex(chemH3O)})}{${convertNaturalOrPseudoMathToLatex(chemAcid)}} `)}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Insérer Ka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ONGLET 1 : CALCUL & FONCTIONS FONDAMENTALES */}
        {activeTab === 'main' && (
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-1.5">
            {/* Ligne 1 : Fonctions spéciales */}
            <button type="button" onClick={() => handleAppend('\\frac{a}{b}')} className="calc-btn-math" title="Fraction empilée a sur b">a/b</button>
            <button type="button" onClick={() => handleAppend('x^2')} className="calc-btn-math" title="x au carré ou exposant 2">x²</button>
            <button type="button" onClick={() => handleAppend('x^n')} className="calc-btn-math" title="x puissance n">xⁿ</button>
            <button type="button" onClick={() => handleAppend('\\sqrt{x}')} className="calc-btn-math" title="Racine carrée">√x</button>
            <button type="button" onClick={() => handleAppend('\\sqrt[n]{x}')} className="calc-btn-math" title="Racine n-ième">ⁿ√x</button>
            <button type="button" onClick={handleClear} className="calc-btn-danger" title="Tout effacer">AC</button>

            {/* Ligne 2 : Analyse de base & trigo */}
            <button type="button" onClick={() => handleAppend('\\ln(x)')} className="calc-btn-fn" title="Logarithme népérien">ln</button>
            <button type="button" onClick={() => handleAppend('e^x')} className="calc-btn-fn" title="Exponentielle">eˣ</button>
            <button type="button" onClick={() => handleAppend('\\sin(x)')} className="calc-btn-fn" title="Sinus">sin</button>
            <button type="button" onClick={() => handleAppend('\\cos(x)')} className="calc-btn-fn" title="Cosinus">cos</button>
            <button type="button" onClick={() => handleAppend('\\tan(x)')} className="calc-btn-fn" title="Tangente">tan</button>
            <button type="button" onClick={handleBackspace} className="calc-btn-warning" title="Effacer le dernier caractère">
              <Delete className="w-4 h-4" />
            </button>

            {/* Ligne 3 : Chiffres 7 8 9 et opérateurs */}
            <button type="button" onClick={() => handleAppend('7')} className="calc-btn-num">7</button>
            <button type="button" onClick={() => handleAppend('8')} className="calc-btn-num">8</button>
            <button type="button" onClick={() => handleAppend('9')} className="calc-btn-num">9</button>
            <button type="button" onClick={() => handleAppend(' \\div ')} className="calc-btn-op" title="Division">÷</button>
            <button type="button" onClick={() => handleAppend('(')} className="calc-btn-fn">(</button>
            <button type="button" onClick={() => handleAppend(')')} className="calc-btn-fn">)</button>

            {/* Ligne 4 : Chiffres 4 5 6 et opérateurs */}
            <button type="button" onClick={() => handleAppend('4')} className="calc-btn-num">4</button>
            <button type="button" onClick={() => handleAppend('5')} className="calc-btn-num">5</button>
            <button type="button" onClick={() => handleAppend('6')} className="calc-btn-num">6</button>
            <button type="button" onClick={() => handleAppend(' \\times ')} className="calc-btn-op" title="Multiplication">×</button>
            <button type="button" onClick={() => handleAppend('x')} className="calc-btn-var font-serif italic">x</button>
            <button type="button" onClick={() => handleAppend('y')} className="calc-btn-var font-serif italic">y</button>

            {/* Ligne 5 : Chiffres 1 2 3 et opérateurs */}
            <button type="button" onClick={() => handleAppend('1')} className="calc-btn-num">1</button>
            <button type="button" onClick={() => handleAppend('2')} className="calc-btn-num">2</button>
            <button type="button" onClick={() => handleAppend('3')} className="calc-btn-num">3</button>
            <button type="button" onClick={() => handleAppend(' - ')} className="calc-btn-op" title="Soustraction">−</button>
            <button type="button" onClick={() => handleAppend('\\pi')} className="calc-btn-fn" title="Pi">π</button>
            <button type="button" onClick={() => handleAppend('e')} className="calc-btn-fn" title="Constante d'Euler">e</button>

            {/* Ligne 6 : Chiffre 0, virgule, plus, égal */}
            <button type="button" onClick={() => handleAppend('0')} className="calc-btn-num">0</button>
            <button type="button" onClick={() => handleAppend('.')} className="calc-btn-num">.</button>
            <button type="button" onClick={() => handleAppend(' = ')} className="calc-btn-op">=</button>
            <button type="button" onClick={() => handleAppend(' + ')} className="calc-btn-op" title="Addition">+</button>
            <button type="button" onClick={() => handleAppend(' |x| ')} className="calc-btn-fn" title="Valeur absolue">|x|</button>
            <button type="button" onClick={handleEvaluate} className="calc-btn-eval" title="Calculer la valeur numérique">
              Calc =
            </button>
          </div>
        )}

        {/* ONGLET 2 : ANALYSE & LIMITES (CONFORME STRICTEMENT AUX RÈGLES LE PROF) */}
        {activeTab === 'analyse' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button type="button" onClick={() => handleAppend('\\lim_{x \\to +\\infty} f(x)')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">lim (x → +∞)</span>
              <span className="text-[10px] text-slate-500">Limite en +∞</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\lim_{x \\to -\\infty} f(x)')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">lim (x → -∞)</span>
              <span className="text-[10px] text-slate-500">Limite en -∞</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\lim_{x \\to 0^+} f(x)')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">lim (x → 0⁺)</span>
              <span className="text-[10px] text-slate-500">Limite à droite en 0</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\lim_{x \\to 0^-} f(x)')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">lim (x → 0⁻)</span>
              <span className="text-[10px] text-slate-500">Limite à gauche en 0</span>
            </button>

            <button type="button" onClick={() => handleAppend("f'(x)")} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">f'(x)</span>
              <span className="text-[10px] text-slate-500">Dérivée première</span>
            </button>

            <button type="button" onClick={() => handleAppend("f''(x)")} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">f''(x)</span>
              <span className="text-[10px] text-slate-500">Dérivée seconde</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\int_a^b f(x)\\,dx')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">∫ₐᵇ f(x)dx</span>
              <span className="text-[10px] text-slate-500">Intégrale définie</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\sum_{k=1}^n ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">∑ₖ₌₁ⁿ</span>
              <span className="text-[10px] text-slate-500">Somme finie</span>
            </button>

            <button type="button" onClick={() => handleAppend('u_{n+1} = ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">u_(n+1)</span>
              <span className="text-[10px] text-slate-500">Suite récurrente</span>
            </button>

            <button type="button" onClick={() => handleAppend('u_n = ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">u_n</span>
              <span className="text-[10px] text-slate-500">Terme général d'une suite</span>
            </button>

            <button type="button" onClick={() => handleAppend('+\\infty')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">+∞</span>
              <span className="text-[10px] text-slate-500">Plus l'infini</span>
            </button>

            <button type="button" onClick={() => handleAppend('-\\infty')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">-∞</span>
              <span className="text-[10px] text-slate-500">Moins l'infini</span>
            </button>
          </div>
        )}

        {/* ONGLET 3 : ALGÈBRE, COMPLEXES & ENSEMBLES */}
        {activeTab === 'algebra' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button type="button" onClick={() => handleAppend('i')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">i (i² = -1)</span>
              <span className="text-[10px] text-slate-500">Unité imaginaire</span>
            </button>

            <button type="button" onClick={() => handleAppend('z = x + i y')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">z = x + iy</span>
              <span className="text-[10px] text-slate-500">Forme algébrique</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\bar{z}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">z̄</span>
              <span className="text-[10px] text-slate-500">Conjugué</span>
            </button>

            <button type="button" onClick={() => handleAppend('|z|')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">|z|</span>
              <span className="text-[10px] text-slate-500">Module de z</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\Delta = b^2 - 4ac')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">Δ = b² - 4ac</span>
              <span className="text-[10px] text-slate-500">Discriminant</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\mathbb{R}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">ℝ</span>
              <span className="text-[10px] text-slate-500">Corps des réels</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\mathbb{C}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">ℂ</span>
              <span className="text-[10px] text-slate-500">Nombres complexes</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\mathbb{N}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">ℕ</span>
              <span className="text-[10px] text-slate-500">Entiers naturels</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\in ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">∈</span>
              <span className="text-[10px] text-slate-500">Appartient à</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\le ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">≤</span>
              <span className="text-[10px] text-slate-500">Inférieur ou égal</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\ge ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">≥</span>
              <span className="text-[10px] text-slate-500">Supérieur ou égal</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\neq ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">≠</span>
              <span className="text-[10px] text-slate-500">Différent de</span>
            </button>
          </div>
        )}

        {/* ONGLET 4 : PHYSIQUE-CHIMIE (PC) */}
        {activeTab === 'physique' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button type="button" onClick={() => handleAppend('\\vec{P} = m \\cdot \\vec{g}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">P⃗ = m·g⃗</span>
              <span className="text-[10px] text-slate-500">Poids d'un corps</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\sum \\vec{F}_{ext} = m \\cdot \\vec{a}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">∑F⃗ = m·a⃗</span>
              <span className="text-[10px] text-slate-500">2e Loi de Newton</span>
            </button>

            <button type="button" onClick={() => handleAppend('E_c = \\frac{1}{2} m v^2')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">Ec = ½·m·v²</span>
              <span className="text-[10px] text-slate-500">Énergie cinétique</span>
            </button>

            <button type="button" onClick={() => handleAppend('U = R \\cdot I')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">U = R·I</span>
              <span className="text-[10px] text-slate-500">Loi d'Ohm</span>
            </button>

            <button type="button" onClick={() => handleAppend('n = \\frac{m}{M}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">n = m/M</span>
              <span className="text-[10px] text-slate-500">Quantité de matière</span>
            </button>

            <button type="button" onClick={() => handleAppend('C = \\frac{n}{V}')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">C = n/V</span>
              <span className="text-[10px] text-slate-500">Concentration molaire</span>
            </button>

            <button type="button" onClick={() => handleAppend('\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">pH = -log[H₃O⁺]</span>
              <span className="text-[10px] text-slate-500">Potentiel Hydrogène</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\rightleftharpoons ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">⇄</span>
              <span className="text-[10px] text-slate-500">Équilibre réversible</span>
            </button>

            <button type="button" onClick={() => handleAppend(' \\longrightarrow ')} className="calc-btn-feature">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">⟶</span>
              <span className="text-[10px] text-slate-500">Réaction totale</span>
            </button>
          </div>
        )}

        {/* ONGLET 5 : MODÈLES D'EXERCICES TYPES (POUR TAPER RAPIDEMENT QUAND ON NE PEUT PAS COPIER/COLLER) */}
        {activeTab === 'templates' && (
          <div className="space-y-2">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Cliquez sur un modèle d'exercice type pour le préremplir, puis ajustez les nombres :
            </p>

            <button
              type="button"
              onClick={() => setExpression('Soit la fonction f définie sur ]0; +\\infty[ par f(x) = x + 2 + \\frac{3}{x}.\n1. Déterminer les limites de f en 0 et en +\\infty.\n2. Calculer la dérivée f\'(x) et dresser le tableau de variation.')}
              className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 transition-all text-xs"
            >
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block">Étude de fonction rationnelle & limites</span>
              <span className="text-slate-600 dark:text-slate-400">f(x) = x + 2 + 3/x, limites en 0 et +∞, dérivée et tableau de variations</span>
            </button>

            <button
              type="button"
              onClick={() => setExpression('Résoudre dans \\mathbb{R} l\'équation : 2x^2 - 5x + 2 = 0')}
              className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 transition-all text-xs"
            >
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block">Équation du second degré</span>
              <span className="text-slate-600 dark:text-slate-400">Résolution avec discriminant Δ = b² - 4ac</span>
            </button>

            <button
              type="button"
              onClick={() => setExpression('Soit la suite (u_n) définie par u_0 = 2 et u_{n+1} = 3u_n - 4.\n1. Calculer u_1, u_2 et u_3.\n2. Soit v_n = u_n - 2. Démontrer que (v_n) est géométrique.')}
              className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 transition-all text-xs"
            >
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block">Suites numériques & géométriques</span>
              <span className="text-slate-600 dark:text-slate-400">Calcul des premiers termes, suite auxiliaire et convergence</span>
            </button>

            <button
              type="button"
              onClick={() => setExpression('Un solide de masse m = 0,5 kg glisse sur un plan incliné d\'un angle \\alpha = 30^\\circ avec frottements f = 1 N. Calculer son accélération a.')}
              className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 transition-all text-xs"
            >
              <span className="font-bold text-indigo-600 dark:text-indigo-400 block">Physique : Mécanique & Plan incliné</span>
              <span className="text-slate-600 dark:text-slate-400">Bilan des forces, projection et application du PFD</span>
            </button>
          </div>
        )}
      </div>

      {/* Barre d'actions en bas de la calculatrice */}
      <div className="p-3 sm:p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <button
          type="button"
          onClick={handleClear}
          className="text-xs font-semibold px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          Effacer
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleInsertAndClose}
            disabled={!expression.trim()}
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 disabled:opacity-40 transition-all cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Insérer dans la saisie</span>
          </button>

          <button
            type="button"
            onClick={handleSolveWithLeProf}
            disabled={!expression.trim()}
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 disabled:opacity-40 transition-all cursor-pointer"
          >
            <span>Résoudre par Le Prof</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

      {/* CSS helper styles for buttons */}
      <style>{`
        .calc-btn-num {
          background-color: rgb(255 255 255);
          color: rgb(15 23 42);
          border: 1px solid rgb(226 232 240);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.04);
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .dark .calc-btn-num {
          background-color: rgb(30 41 59);
          color: rgb(241 245 249);
          border-color: rgb(51 65 85);
        }
        .calc-btn-num:hover {
          background-color: rgb(241 245 249);
        }
        .dark .calc-btn-num:hover {
          background-color: rgb(51 65 85);
        }

        .calc-btn-op {
          background-color: rgb(238 242 255);
          color: rgb(67 56 202);
          border: 1px solid rgb(199 210 254);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .dark .calc-btn-op {
          background-color: rgb(49 46 129 / 0.4);
          color: rgb(165 180 252);
          border-color: rgb(67 56 202 / 0.5);
        }
        .calc-btn-op:hover {
          background-color: rgb(224 231 255);
        }

        .calc-btn-fn {
          background-color: rgb(248 250 252);
          color: rgb(51 65 85);
          border: 1px solid rgb(226 232 240);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .dark .calc-btn-fn {
          background-color: rgb(15 23 42 / 0.6);
          color: rgb(203 213 225);
          border-color: rgb(51 65 85);
        }
        .calc-btn-fn:hover {
          background-color: rgb(241 245 249);
        }

        .calc-btn-math {
          background-color: rgb(238 242 255 / 0.7);
          color: rgb(79 70 229);
          border: 1px solid rgb(199 210 254);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .dark .calc-btn-math {
          background-color: rgb(49 46 129 / 0.3);
          color: rgb(199 210 254);
          border-color: rgb(99 102 241 / 0.4);
        }
        .calc-btn-math:hover {
          background-color: rgb(224 231 255);
        }

        .calc-btn-var {
          background-color: rgb(254 243 199 / 0.6);
          color: rgb(180 83 9);
          border: 1px solid rgb(253 230 138);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          cursor: pointer;
        }
        .dark .calc-btn-var {
          background-color: rgb(120 53 15 / 0.3);
          color: rgb(253 230 138);
          border-color: rgb(180 83 9 / 0.4);
        }

        .calc-btn-eval {
          background-color: rgb(16 185 129);
          color: white;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgb(16 185 129 / 0.2);
        }
        .calc-btn-eval:hover {
          background-color: rgb(5 150 105);
        }

        .calc-btn-danger {
          background-color: rgb(254 242 242);
          color: rgb(225 29 72);
          border: 1px solid rgb(254 205 211);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          cursor: pointer;
        }
        .dark .calc-btn-danger {
          background-color: rgb(136 19 55 / 0.3);
          color: rgb(253 164 175);
          border-color: rgb(225 29 72 / 0.4);
        }

        .calc-btn-warning {
          background-color: rgb(255 247 237);
          color: rgb(234 88 12);
          border: 1px solid rgb(254 215 170);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 0.25rem;
          border-radius: 0.75rem;
          cursor: pointer;
        }
        .dark .calc-btn-warning {
          background-color: rgb(124 45 18 / 0.3);
          color: rgb(253 186 116);
          border-color: rgb(234 88 12 / 0.4);
        }

        .calc-btn-feature {
          background-color: rgb(255 255 255);
          border: 1px solid rgb(226 232 240);
          padding: 0.6rem 0.75rem;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 0.15rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .dark .calc-btn-feature {
          background-color: rgb(30 41 59);
          border-color: rgb(51 65 85);
        }
        .calc-btn-feature:hover {
          border-color: rgb(99 102 241);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};
