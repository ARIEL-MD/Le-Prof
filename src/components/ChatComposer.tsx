import React, { useRef, useState } from 'react';
import { 
  ArrowUp, 
  Search, 
  Square, 
  GraduationCap, 
  Image as ImageIcon, 
  X, 
  Loader2, 
  Calculator,
  Binary,
  ChevronDown,
  ChevronUp,
  BookOpen,
  BookA,
  Languages
} from 'lucide-react';
import { AcademicSerie, StudentProfile } from '../types';
import { ACADEMIC_SERIES_OPTIONS } from '../data/academicSeries';
import { ScientificSymbolsBar } from './ScientificSymbolsBar';
import { RichScientificInput, RichScientificInputRef, cleanNaturalScientificText, isNaturalFrenchSentence, wrapInlineMath } from './RichScientificInput';

export type ComposerTool = 'calculator' | 'conjugator' | 'dictionary';

interface ChatComposerProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  isLoading: boolean;
  onOpenTool: (tool: ComposerTool) => void;
  activeTool: ComposerTool | null;
  selectedSerie: AcademicSerie;
  onSelectSerie: (serie: AcademicSerie) => void;
  attachedImage?: { base64: string; mimeType: string } | null;
  onAttachImage?: (file: File) => void;
  onRemoveImage?: () => void;
  isScanningImage?: boolean;
  studentProfile?: StudentProfile;
  onOpenProfileModal?: () => void;
}

const TOOL_CHIPS: Array<{ id: ComposerTool; label: string; icon: React.ElementType }> = [
  { id: 'calculator', label: 'Calculatrice', icon: Calculator },
  { id: 'conjugator', label: 'Conjugueur 4 Langues', icon: BookA },
  { id: 'dictionary', label: 'Dictionnaire 4 Langues', icon: Languages },
];

export const ChatComposer: React.FC<ChatComposerProps> = ({
  value,
  onChange,
  onSend,
  isLoading,
  onOpenTool,
  activeTool,
  selectedSerie,
  onSelectSerie,
  attachedImage,
  onAttachImage,
  onRemoveImage,
  isScanningImage = false,
  studentProfile,
  onOpenProfileModal,
}) => {
  const richInputRef = useRef<RichScientificInputRef>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSymbolsOpen, setIsSymbolsOpen] = useState(false);
  // Sélecteur de niveau replié par défaut : évite d'afficher deux fois la
  // même information (le badge "Auto" du résumé ET le bouton "Auto" de la
  // liste) et libère de l'espace vertical précieux sur mobile.
  const [isLevelExpanded, setIsLevelExpanded] = useState(false);

  const handleInsertSymbol = (symbolText: string) => {
    const clean = cleanNaturalScientificText(symbolText);
    if (richInputRef.current) {
      richInputRef.current.insertText(clean);
    } else {
      const toInsert = isNaturalFrenchSentence(clean) ? clean : wrapInlineMath(clean);
      onChange(value ? `${value} ${toInsert}` : toInsert);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if ((value.trim() || attachedImage) && !isLoading) {
        onSend();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachImage) {
      onAttachImage(file);
    }
    if (e.target) {
      e.target.value = '';
    }
  };

  const activeOption = ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedSerie) || ACADEMIC_SERIES_OPTIONS[0];

  return (
    <div
      className="sticky bottom-0 inset-x-0 z-30 bg-gradient-to-t from-slate-50 via-slate-50/95 dark:from-slate-950 dark:via-slate-950/95 from-60% to-transparent pt-2"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.75rem)' }}
    >
      <div className="max-w-3xl mx-auto px-3 sm:px-4 space-y-2">
        {/* SÉLECTEUR DE CLASSE & OUTILS — Barre épurée et ultra-légère */}
        <div className="flex items-center justify-between gap-1.5 px-1">
          {/* Sélecteur de Classe compact */}
          <button
            type="button"
            onClick={() => setIsLevelExpanded((prev) => !prev)}
            aria-expanded={isLevelExpanded}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
              activeOption.id === 'auto'
                ? 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                : 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
            }`}
            title="Choisir votre classe (de la 6e à la Terminale)"
          >
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="font-bold">{activeOption.shortLabel || activeOption.label}</span>
            {isLevelExpanded ? (
              <ChevronUp className="w-3 h-3 opacity-70 shrink-0" />
            ) : (
              <ChevronDown className="w-3 h-3 opacity-70 shrink-0" />
            )}
          </button>

          {/* Outils Pédagogiques rapides : Symboles, Calculette, Cours */}
          <div className="flex items-center gap-1">
            {/* 1. Palette de Symboles */}
            <button
              type="button"
              onClick={() => setIsSymbolsOpen((prev) => !prev)}
              title="Symboles mathématiques et formules"
              aria-label="Symboles"
              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                isSymbolsOpen
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Binary className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="hidden xs:inline">Symboles</span>
            </button>

            {/* 2. Calculatrice */}
            <button
              type="button"
              onClick={() => onOpenTool('calculator')}
              title="Calculatrice scientifique"
              aria-label="Calculatrice"
              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                activeTool === 'calculator'
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="hidden sm:inline">Calculatrice</span>
            </button>

          </div>
        </div>

        {/* Tiroir déroulant horizontal des classes quand cliqué */}
        {isLevelExpanded && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 shadow-sm space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium px-1">
              <span>Niveau et programme officiel de référence :</span>
              <button
                type="button"
                onClick={() => setIsLevelExpanded(false)}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
              >
                Fermer
              </button>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {ACADEMIC_SERIES_OPTIONS.map((opt) => {
                const isSelected = selectedSerie === opt.id;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      onSelectSerie(opt.id);
                      setIsLevelExpanded(false);
                    }}
                    title={opt.desc}
                    className={`shrink-0 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Aperçu image attachée */}
        {attachedImage && (
          <div className="flex items-center gap-2 p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs">
            <img
              src={attachedImage.base64}
              alt="Énoncé scanné"
              className="w-10 h-10 object-cover rounded-md border border-slate-200 dark:border-slate-700 shrink-0"
            />
            <div className="flex-1 text-xs min-w-0">
              <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">Photo de l'énoncé jointe</p>
              <p className="text-[11px] text-slate-500 truncate">Résolution méthodique prête</p>
            </div>
            {onRemoveImage && (
              <button
                type="button"
                onClick={onRemoveImage}
                className="p-1 text-slate-400 hover:text-rose-500 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
                aria-label="Supprimer l'image"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Composer bar — sobre, compacte et ergonomique */}
        <div className="flex items-end gap-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xs px-2.5 py-1.5 focus-within:border-indigo-600 dark:focus-within:border-indigo-400 transition-colors">
          {/* Bouton joindre une photo / scanner */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading || isScanningImage}
            title="Scanner ou joindre une photo d'exercice"
            className="shrink-0 w-8 h-8 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer mb-0.5"
          >
            {isScanningImage ? (
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
            ) : (
              <ImageIcon className="w-4 h-4" />
            )}
          </button>

          {/* Zone de saisie directe avec rendu scientifique */}
          <div className="flex-1 py-0.5 min-w-0">
            <RichScientificInput
              ref={richInputRef}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder={
                activeOption.id !== 'auto'
                  ? `Pose ton devoir (${activeOption.shortLabel || activeOption.label})...`
                  : 'Pose ton devoir ou exercice (toutes matières)...'
              }
            />
          </div>

          {/* Bouton Envoyer */}
          <button
            type="button"
            onClick={onSend}
            disabled={(!value.trim() && !attachedImage) || isLoading}
            aria-label="Envoyer"
            className="shrink-0 w-8 h-8 rounded-lg bg-indigo-700 hover:bg-indigo-600 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed shadow-2xs mb-0.5"
          >
            {isLoading ? (
              <Square className="w-3.5 h-3.5 fill-current" />
            ) : (
              <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Palette de symboles scientifiques si activée */}
        {isSymbolsOpen && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-150 max-h-64 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-md">
            <ScientificSymbolsBar
              onInsert={handleInsertSymbol}
              defaultOpen={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};
