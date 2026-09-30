import React, { useState } from 'react';
import { BookA, Search, Volume2, ArrowRightLeft, X } from 'lucide-react';

type DictLang = 'fr' | 'en' | 'de' | 'es';

const LANGS: Array<{ id: DictLang; label: string; flag: string }> = [
  { id: 'fr', label: 'Français', flag: '🇫🇷' },
  { id: 'en', label: 'Anglais', flag: '🇬🇧' },
  { id: 'de', label: 'Allemand', flag: '🇩🇪' },
  { id: 'es', label: 'Espagnol', flag: '🇪🇸' },
];

interface DictionaryEntry {
  word: string;
  language: DictLang;
  partOfSpeech?: string;
  definitions: string[];
  examples: string[];
  translations: string[];
  pronunciation?: string;
}

interface DictionaryModalProps {
  onClose: () => void;
  onInsertToChat?: (text: string) => void;
}

export const DictionaryModal: React.FC<DictionaryModalProps> = ({ onClose, onInsertToChat }) => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState<DictLang>('fr');
  const [targetLanguage, setTargetLanguage] = useState<DictLang>('en');
  const [entry, setEntry] = useState<DictionaryEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookup = async () => {
    const clean = word.trim();
    if (!clean) return;
    setLoading(true);
    setError('');
    setEntry(null);
    try {
      const params = new URLSearchParams({ word: clean, language, targetLanguage });
      const res = await fetch(`/api/dictionary?${params.toString()}`);
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || 'Mot introuvable.');
      setEntry(json.data);
    } catch (e: any) {
      setError(e?.message || 'Impossible de rechercher ce mot.');
    } finally {
      setLoading(false);
    }
  };

  const swap = () => {
    setLanguage(targetLanguage);
    setTargetLanguage(language);
    setEntry(null);
  };

  const insert = () => {
    if (!entry || !onInsertToChat) return;
    const text = `${entry.word} — ${entry.definitions[0] || entry.translations[0] || ''}`.trim();
    onInsertToChat(text);
    onClose();
  };

  return (
    <div className="p-4 sm:p-5 space-y-4">
      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
        <BookA className="w-5 h-5 text-indigo-600" />
        <div>
          <h2 className="font-bold">Dictionnaire multilingue</h2>
          <p className="text-xs text-slate-500">Français · Anglais · Allemand · Espagnol</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {LANGS.map((lang) => (
          <button key={lang.id} type="button" onClick={() => setLanguage(lang.id)}
            className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${language === lang.id ? 'border-indigo-400 bg-indigo-50 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-200' : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}>
            {lang.flag} {lang.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && lookup()}
            placeholder="Écris un mot…" autoFocus
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 pl-9 pr-3 py-3 text-sm outline-none focus:border-indigo-400" />
        </div>
        <button type="button" onClick={lookup} disabled={loading || !word.trim()}
          className="rounded-xl bg-indigo-600 text-white px-4 py-3 text-sm font-semibold disabled:opacity-50">
          {loading ? '…' : 'Chercher'}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
        <span>{LANGS.find((x) => x.id === language)?.flag}</span>
        <ArrowRightLeft className="w-3.5 h-3.5" />
        <span>{LANGS.find((x) => x.id === targetLanguage)?.flag}</span>
        <button type="button" onClick={swap} className="underline hover:text-indigo-600">inverser</button>
      </div>

      {error && <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 p-3 text-sm text-amber-800 dark:text-amber-200">{error}</div>}

      {entry && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">{entry.word}</div>
              {entry.partOfSpeech && <div className="text-xs italic text-slate-500 mt-0.5">{entry.partOfSpeech}</div>}
            </div>
            {entry.pronunciation && <button title="Prononciation" className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"><Volume2 className="w-4 h-4" /></button>}
          </div>
          {entry.definitions.length > 0 && <div><h3 className="font-semibold text-sm mb-2">Définition</h3><ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-200">{entry.definitions.map((d, i) => <li key={i}>{d}</li>)}</ol></div>}
          {entry.translations.length > 0 && <div><h3 className="font-semibold text-sm mb-2">Traductions</h3><div className="flex flex-wrap gap-2">{entry.translations.map((t, i) => <span key={i} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm">{t}</span>)}</div></div>}
          {entry.examples.length > 0 && <div><h3 className="font-semibold text-sm mb-2">Exemples</h3><div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">{entry.examples.slice(0, 3).map((x, i) => <p key={i}>« {x} »</p>)}</div></div>}
          {onInsertToChat && <button type="button" onClick={insert} className="w-full rounded-xl border border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-900 py-2.5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">Insérer dans la conversation</button>}
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-slate-400">Le dictionnaire utilise des données lexicales multilingues et les présente sous forme pédagogique. Les sources ne sont pas affichées dans le résultat normal.</p>
    </div>
  );
};
