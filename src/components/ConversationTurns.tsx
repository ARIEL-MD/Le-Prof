import React, { useState } from 'react';
import { GraduationCap, User, RefreshCw, X, Edit3, Copy, Check } from 'lucide-react';
import { MathText } from './MathText';

export const UserBubble: React.FC<{ 
  text: string; 
  onEdit?: (text: string) => void;
}> = ({ text, onEdit }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-end gap-1 px-3 sm:px-0 group">
      <div className="flex justify-end gap-2 sm:gap-2.5 max-w-full">
        <div className="max-w-[85%] sm:max-w-[75%] bg-slate-900 dark:bg-slate-800 text-slate-100 rounded-xl rounded-tr-xs px-4 py-3 text-sm leading-relaxed border border-slate-800 dark:border-slate-700 shadow-2xs whitespace-pre-wrap break-words">
          <MathText text={text} />
        </div>
        <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5 border border-slate-300 dark:border-slate-700">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
      
      {/* Barre d'action rapide : Édition et Copie */}
      <div className="flex items-center gap-1.5 mr-9 text-xs text-slate-500 dark:text-slate-400 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(text)}
            className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="Reprendre et modifier ce devoir / exercice dans la zone de saisie"
          >
            <Edit3 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
            <span>Modifier</span>
          </button>
        )}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          title="Copier le texte"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400">Copié</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copier</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export const AssistantAvatar: React.FC = () => (
  <div className="w-7 h-7 rounded-lg bg-indigo-700 dark:bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 border border-indigo-800/40 dark:border-indigo-500/40">
    <GraduationCap className="w-3.5 h-3.5" />
  </div>
);

export const AssistantCard: React.FC<{
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
  bare?: boolean;
}> = ({ title, onClose, children, bare = false }) => (
  <div className="px-1 sm:px-0">
    {/* On mobile: compact top header with avatar */}
    <div className="flex sm:hidden items-center justify-between mb-1.5 px-2">
      <div className="flex items-center gap-2">
        <AssistantAvatar />
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
          {title || "Le Prof"}
        </span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>

    {/* Desktop: standard horizontal layout with avatar on the side */}
    <div className="flex gap-2.5">
      <div className="hidden sm:block shrink-0">
        <AssistantAvatar />
      </div>
      <div className="min-w-0 flex-1">
        {(title || onClose) && (
          <div className="hidden sm:flex items-center justify-between mb-1.5 pl-0.5">
            {title && (
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                {title}
              </span>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
        <div
          className={
            bare
              ? ''
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs overflow-hidden'
          }
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const AssistantTextBubble: React.FC<{ text: string }> = ({ text }) => (
  <AssistantCard>
    <p className="px-4 py-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
      <MathText text={text} />
    </p>
  </AssistantCard>
);

export const LoadingTurn: React.FC<{ label?: string }> = ({ label }) => (
  <div className="flex gap-2 sm:gap-2.5 px-3 sm:px-0">
    <AssistantAvatar />
    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl rounded-tl-xs px-4 py-2.5 shadow-2xs">
      <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-600 dark:text-indigo-400" />
      <span>{label || 'Le Prof prépare la solution pas à pas…'}</span>
    </div>
  </div>
);
