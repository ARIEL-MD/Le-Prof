import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  HelpCircle,
  RotateCcw,
  BookA
} from 'lucide-react';
import { LanguageCode, VerbConjugationResult, MoodGroup } from '../utils/conjugator/types';
import { conjugateVerb } from '../utils/conjugator/universalConjugator';

interface ConjugatorModalProps {
  initialVerb?: string;
  initialLang?: LanguageCode;
  onInsertToChat?: (text: string) => void;
  onClose?: () => void;
}

const LANGUAGES: Array<{ code: LanguageCode; label: string; flag: string; defaultVerb: string; suggestions: string[] }> = [
  {
    code: 'fr',
    label: 'Français',
    flag: '🇫🇷',
    defaultVerb: 'aller',
    suggestions: ['être', 'avoir', 'aller', 'faire', 'pouvoir', 'vouloir', 'savoir', 'finir', 'manger', 'prendre']
  },
  {
    code: 'en',
    label: 'English',
    flag: '🇬🇧',
    defaultVerb: 'speak',
    suggestions: ['be', 'have', 'do', 'go', 'speak', 'write', 'take', 'make', 'see', 'eat']
  },
  {
    code: 'de',
    label: 'Deutsch',
    flag: '🇩🇪',
    defaultVerb: 'sein',
    suggestions: ['sein', 'haben', 'werden', 'können', 'müssen', 'wollen', 'gehen', 'sehen', 'bleiben', 'fahren']
  },
  {
    code: 'es',
    label: 'Español',
    flag: '🇪🇸',
    defaultVerb: 'ser',
    suggestions: ['ser', 'estar', 'haber', 'ir', 'tener', 'hacer', 'decir', 'poder', 'hablar', 'comer']
  }
];

export const ConjugatorModal: React.FC<ConjugatorModalProps> = ({
  initialVerb = '',
  initialLang = 'fr',
  onInsertToChat,
  onClose
}) => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>(initialLang);
  const [searchQuery, setSearchQuery] = useState<string>(initialVerb || 'être');
  const [selectedMoodTab, setSelectedMoodTab] = useState<string>('all');
  const [copied, setCopied] = useState<boolean>(false);

  // Calcul du résultat de conjugaison
  const conjugationResult: VerbConjugationResult = useMemo(() => {
    const verbToConjugate = searchQuery.trim() || (LANGUAGES.find(l => l.code === currentLang)?.defaultVerb || 'être');
    return conjugateVerb(verbToConjugate, currentLang);
  }, [searchQuery, currentLang]);

  const handleSelectLanguage = (lang: LanguageCode) => {
    setCurrentLang(lang);
    const def = LANGUAGES.find(l => l.code === lang)?.defaultVerb || 'aller';
    setSearchQuery(def);
    setSelectedMoodTab('all');
  };

  const handleCopy = () => {
    let text = `=== CONJUGAISON DE "${conjugationResult.infinitive.toUpperCase()}" (${conjugationResult.languageLabel}) ===\n`;
    if (conjugationResult.groupOrType) text += `Groupe / Type : ${conjugationResult.groupOrType}\n`;
    if (conjugationResult.auxiliary) text += `Auxiliaire : ${conjugationResult.auxiliary}\n`;
    text += `Participe présent : ${conjugationResult.participles.present} | Participe passé : ${conjugationResult.participles.past}\n\n`;

    conjugationResult.moods.forEach((m) => {
      text += `[${m.moodName.toUpperCase()}]\n`;
      m.tenses.forEach((t) => {
        text += `\n* ${t.tenseName} (${t.tenseLabelFr}) :\n`;
        t.forms.forEach((f) => {
          text += `  - ${f.form}\n`;
        });
      });
      text += `\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInsert = () => {
    if (!onInsertToChat) return;
    const summary = `Conjugaison du verbe "${conjugationResult.infinitive}" (${conjugationResult.languageLabel}) : Participe passé = "${conjugationResult.participles.past}", Présent = ${conjugationResult.moods[0]?.tenses[0]?.forms.map(f => f.form).join(', ')}.`;
    onInsertToChat(summary);
    if (onClose) onClose();
  };

  const filteredMoods = useMemo(() => {
    if (selectedMoodTab === 'all') return conjugationResult.moods;
    return conjugationResult.moods.filter(m => m.moodName.toLowerCase().includes(selectedMoodTab.toLowerCase()));
  }, [conjugationResult, selectedMoodTab]);

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      {/* 1. Entête & Sélecteur de langue */}
      <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              <BookA className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                Conjugueur Universel — 4 Langues
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tous les temps et modes en Français, Anglais, Allemand et Espagnol
              </p>
            </div>
          </div>

          {/* Boutons d'action rapides */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              title="Copier toute la table"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copié !' : 'Copier'}
            </button>
            {onInsertToChat && (
              <button
                onClick={handleInsert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm cursor-pointer"
                title="Insérer le verbe dans ma question"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Insérer</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Onglets de Langue */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {LANGUAGES.map((l) => {
            const active = currentLang === l.code;
            return (
              <button
                key={l.code}
                onClick={() => handleSelectLanguage(l.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  active
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span className="truncate">{l.label}</span>
              </button>
            );
          })}
        </div>

        {/* Champ de recherche du verbe */}
        <div className="relative mb-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Tape un verbe (ex : ${LANGUAGES.find(l => l.code === currentLang)?.suggestions.slice(0, 3).join(', ')})...`}
            className="w-full pl-9 pr-24 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Suggestions rapides sous forme de chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 shrink-0 font-medium mr-1">Exemples :</span>
          {LANGUAGES.find(l => l.code === currentLang)?.suggestions.map((v) => (
            <button
              key={v}
              onClick={() => setSearchQuery(v)}
              className={`shrink-0 px-2 py-0.5 rounded-md border text-[11px] font-medium transition-colors cursor-pointer ${
                searchQuery.toLowerCase().trim() === v
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Bandeau d'identité du verbe (Infinitive, Groupe, Auxiliaire, Participes) */}
      <div className="px-4 sm:px-5 py-3 bg-white dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white capitalize">
            {conjugationResult.infinitive}
          </span>
          {conjugationResult.translationFr && (
            <span className="text-slate-500 dark:text-slate-400 italic">
              ({conjugationResult.translationFr})
            </span>
          )}
          {conjugationResult.groupOrType && (
            <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
              {conjugationResult.groupOrType}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
          {conjugationResult.auxiliary && (
            <div>
              <span className="text-slate-400">Auxiliaire : </span>
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">{conjugationResult.auxiliary}</strong>
            </div>
          )}
          <div>
            <span className="text-slate-400">Participe passé : </span>
            <strong className="font-semibold">{conjugationResult.participles.past || '-'}</strong>
          </div>
          <div>
            <span className="text-slate-400">Participe présent : </span>
            <strong className="font-semibold">{conjugationResult.participles.present || '-'}</strong>
          </div>
        </div>
      </div>

      {/* 3. Filtre par modes */}
      <div className="px-4 sm:px-5 py-2 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
        <button
          onClick={() => setSelectedMoodTab('all')}
          className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
            selectedMoodTab === 'all'
              ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
          }`}
        >
          Tous les temps ({conjugationResult.moods.reduce((acc, m) => acc + m.tenses.length, 0)})
        </button>
        {conjugationResult.moods.map((m) => {
          const active = selectedMoodTab === m.moodName;
          return (
            <button
              key={m.moodName}
              onClick={() => setSelectedMoodTab(m.moodName)}
              className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
                active
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
              }`}
            >
              {m.moodName} ({m.tenses.length})
            </button>
          );
        })}
      </div>

      {/* 4. Grille de Conjugaison complète */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
        {filteredMoods.map((mood) => (
          <div key={mood.moodName} className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {mood.moodName}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {mood.tenses.map((tense) => (
                <div
                  key={tense.tenseName}
                  className="bg-white dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/80 rounded-2xl p-4 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-700/60 transition-colors"
                >
                  <div className="mb-2.5">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {tense.tenseName}
                    </h5>
                    {tense.tenseLabelFr && tense.tenseLabelFr !== tense.tenseName && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {tense.tenseLabelFr}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {tense.forms.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/40"
                      >
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          {f.form}
                        </span>
                      </div>
                    ))}
                  </div>

                  {tense.notes && (
                    <p className="mt-2 text-[10px] text-slate-400 italic">
                      {tense.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Mémos et astuces officielles */}
        {conjugationResult.quickRules && conjugationResult.quickRules.length > 0 && (
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-4 text-xs">
            <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-300 font-bold">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Règles de conjugaison & Réflexes d'examen</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              {conjugationResult.quickRules.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
