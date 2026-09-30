import React, { useState } from 'react';
import { PhiloPreliminaryWork } from '../types';
import { PHILO_CONNECTEURS } from '../data/philoMethodoBase';
import { 
  BookOpen, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight, 
  Quote, 
  BookMarked, 
  Compass, 
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react';

interface PhiloPreliminaryWorkViewProps {
  work: PhiloPreliminaryWork;
  subjectTitle?: string;
}

export const PhiloPreliminaryWorkView: React.FC<PhiloPreliminaryWorkViewProps> = ({ work, subjectTitle }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [selectedIntroTab, setSelectedIntroTab] = useState<'definition' | 'constat' | 'citation'>('definition');
  const [showConnectorsBank, setShowConnectorsBank] = useState<boolean>(false);

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const fullTextToCopy = `MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION PHILOSOPHIQUE
TRAVAIL PRÉLIMINAIRE
Sujet : « ${subjectTitle || ''} »

1. LEXIQUE OU DÉFINITION CONTEXTUELLE DES MOTS DU SUJET
${work.lexiqueDefinitions?.map(d => `• ${d.terme} : ${d.definition}`).join('\n') || ''}

2. REFORMULATION DU SUJET
${work.reformulation || ''}

3. PROBLÉMATISATION DU SUJET
• Problème central : ${work.problematisation?.probleme || ''}
Pour répondre à ce problème d’autres questions s’ajoutent :
• Aspect 1 (Axe 1 - Thèse) : ${work.problematisation?.aspect1 || ''}
• Aspect 2 (Axe 2 - Antithèse) : ${work.problematisation?.aspect2 || ''}

4. LES 3 APPROCHES D'INTRODUCTION :
${work.introVariants?.map(v => `[${v.titre}]\n${v.texteComplet}\n`).join('\n') || ''}

5. STRUCTURATION DU PLAN
${work.planAxe1?.titre ? `Axe 1 : ${work.planAxe1.titre}\n` + work.planAxe1.arguments?.map(a => `  - ${a.auteur} (${a.oeuvre}) : « ${a.citation} » -> ${a.idee}`).join('\n') : ''}
${work.transitionAxe1Axe2 ? `\nTransition : ${work.transitionAxe1Axe2}\n` : ''}
${work.planAxe2?.titre ? `\nAxe 2 : ${work.planAxe2.titre}\n` + work.planAxe2.arguments?.map(a => `  - ${a.auteur} (${a.oeuvre}) : « ${a.citation} » -> ${a.idee}`).join('\n') : ''}`;

  const currentIntro = work.introVariants?.find(v => v.type === selectedIntroTab) || work.introVariants?.[0];

  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800 font-sans">
      {/* Header */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-3.5 sm:p-4 flex items-center justify-between cursor-pointer bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0030B6] text-white font-bold shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Méthodologie Officielle de la Dissertation Philosophique
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                Travail Préliminaire Conforme
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Les Étapes du Travail Préliminaire &amp; Variantes d'Introduction
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(fullTextToCopy, 'all');
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {copiedSection === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'all' ? 'Copié !' : 'Copier tout le travail'}</span>
          </button>
          <div className="p-1 rounded-lg text-slate-500 dark:text-slate-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-6">
          
          {/* CONTRÔLE DE CONFORMITÉ MÉTHODOLOGIQUE (8 VÉRIFICATIONS OFFICIELLES SANS IA) */}
          {work.validationReport && (
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-300 uppercase tracking-wide">
                      Moteur Local — 8 Contrôles de Conformité Méthodologique (DPFC)
                    </h4>
                    <p className="text-[11px] text-emerald-800 dark:text-emerald-400">
                      Garantie d&apos;analyse philosophique rigoureuse 100% autonome, sans IA ni serveur externe
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-xs">
                    Score : {work.validationReport.scoreConformite}/8 Conforme
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {work.validationReport.checks.map((c) => (
                  <div 
                    key={c.checkNumber} 
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/50 flex items-start gap-2.5 shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {c.checkNumber}
                    </span>
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {c.label}
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                          {c.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        {c.detail}
                      </p>
                      {c.reconstructedAction && (
                        <p className="text-[10px] text-amber-700 dark:text-amber-300 font-medium">
                          ⚡ Ajustement méthodologique : {c.reconstructedAction}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TENSION PHILOSOPHIQUE FONDAMENTALE */}
          {work.tensionPhilosophique && (
            <div className="p-3.5 rounded-lg border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-1">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-950 dark:text-indigo-300">
                  Tension Philosophique Fondamentale (Difficulté originelle ayant motivé le sujet)
                </span>
              </div>
              <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {work.tensionPhilosophique}
              </p>
            </div>
          )}

          {/* ÉTAPE 1 : LEXIQUE OU DÉFINITION CONTEXTUELLE */}
          {work.lexiqueDefinitions && work.lexiqueDefinitions.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-[#0030B6] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Lexique ou Définition des Mots Pertinents du Sujet (Étude Parcellaire)
                  </h4>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 italic hidden sm:inline">
                  Définitions contextuelles adaptées à la syntaxe
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {work.lexiqueDefinitions.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-lg border bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                        « {item.terme} »
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        Mot porteur de sens
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ÉTAPE 2 : REFORMULATION DU SUJET */}
          {work.reformulation && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#0030B6] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  Reformulation du Sujet
                </h4>
              </div>
              <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-1.5">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  « {work.reformulation} »
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                  Règle officielle : Réécrire le sujet à partir de ses propres mots tout en gardant son sens authentique avec le souci de le rendre plus clair.
                </p>
              </div>
            </div>
          )}

          {/* ÉTAPE 3 : PROBLÉMATISATION DU SUJET (LE PROBLÈME COURT + LES 2 ASPECTS) */}
          {work.problematisation && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-[#0030B6] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Problématisation du Sujet (Forme Interrogative)
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                  Problème direct • Zéro « ou »
                </span>
              </div>

              {/* Le Problème */}
              <div className="p-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                  <HelpCircle className="w-4 h-4 text-slate-500" />
                  <span>Niveau 1 — Le Problème Philosophique Central (Question Obligatoire) :</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  « {work.problematisation.probleme} »
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                  Règle absolue : Formulé sous forme interrogative directe (jamais une affirmation, jamais une thèse, zéro « ou » d'alternative artificielle). C'est la problématique qui détermine le plan, et jamais l'inverse.
                </p>
              </div>

              {/* Règle Universelle : Hiérarchie Problème → Aspects → Arguments */}
              <div className="p-3 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-1 text-xs text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <BookMarked className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Règle universelle — Distinction Problème, Aspects et Arguments :</span>
                </div>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  L&apos;<strong>aspect</strong> indique <em>ce qu&apos;il faut examiner</em> sous forme de <strong>question courte et directe</strong> (un seul axe, jamais un argument, sans citation ni philosophe). L&apos;<strong>argument</strong> indique <em>ce qu&apos;on peut dire pour y répondre</em>.
                </p>
                <p className="text-[11px] font-semibold text-slate-900 dark:text-white pt-0.5">
                  Formule canonique obligatoire : <span className="italic">« Pour répondre à ce problème d'autres questions s'ajoutent : »</span>
                </p>
              </div>

              {/* Niveau 2 : Les Deux Aspects (Questions courtes) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                      <ArrowRight className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                      <span>Niveau 2 — Aspect 1 (Question courte) :</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      Axe 1
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    « {work.problematisation.aspect1} »
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                    Court, clair, direct. Pas de démonstration ni de philosophe ici.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                      <ArrowRight className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                      <span>Niveau 2 — Aspect 2 (Question courte) :</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      Axe 2
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    « {work.problematisation.aspect2} »
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                    Court, clair, direct. Pas de démonstration ni de philosophe ici.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ÉTAPE 4 : LES 3 FAÇONS CANONIQUES D'INTRODUIRE (DÉFINITION • CONSTAT • CITATION) */}
          {work.introVariants && work.introVariants.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded bg-[#0030B6] text-white text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Les 3 Méthodes Canoniques d'Introduction (Au Choix de l'Élève)
                  </h4>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700">
                  Zéro formule répétitive
                </span>
              </div>

              {/* Onglets de sélection */}
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
                {work.introVariants.map((v) => {
                  const isActive = selectedIntroTab === v.type;
                  const Icon = v.type === 'definition' ? BookMarked : v.type === 'constat' ? Compass : Quote;
                  return (
                    <button
                      key={v.type}
                      type="button"
                      onClick={() => setSelectedIntroTab(v.type)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#0030B6] text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{v.titre}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenu de la variante sélectionnée */}
              {currentIntro && (
                <div className="p-3.5 sm:p-4 rounded-lg border bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider block">
                        {currentIntro.titre}
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {currentIntro.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(currentIntro.texteComplet, `intro-${currentIntro.type}`)}
                      className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      {copiedSection === `intro-${currentIntro.type}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSection === `intro-${currentIntro.type}` ? 'Copié !' : 'Copier'}</span>
                    </button>
                  </div>

                  {/* Amorce & Paradoxe */}
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <span className="font-semibold text-slate-900 dark:text-white uppercase text-[10px] tracking-wide block">
                      Amorce &amp; Contradiction Dialectique (Sans « Selon l'opinion courante ») :
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed italic">
                      « {currentIntro.amorceParadoxe} »
                    </p>
                  </div>

                  {/* Bloc intégral rédigé */}
                  <div className="p-3.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                    <span className="font-semibold text-slate-900 dark:text-white uppercase text-[10px] tracking-wide block">
                      Introduction Intégrale en un seul bloc continu :
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                      {currentIntro.texteComplet}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ÉTAPE 5 : STRUCTURATION DU PLAN & TRANSITION CANONIQUE */}
          {(work.planAxe1 || work.planAxe2) && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#0030B6] text-white text-xs font-bold flex items-center justify-center">
                  5
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  Structuration du Plan et Transition Canonique
                </h4>
              </div>

              {/* Indicateur de variante d'arguments */}
              {work.argumentVariantsAvailable && work.argumentVariantsAvailable.length > 1 && (
                <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-lg bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs">
                  <span className="font-semibold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    Présentation d'arguments #{((work.activeVariant ?? 0) + 1)} — renouvelable
                  </span>
                  <span className="font-medium text-indigo-700 dark:text-indigo-300">
                    {work.argumentVariantsAvailable[(work.activeVariant ?? 0) % work.argumentVariantsAvailable.length]?.label || work.argumentVariantsAvailable[(work.activeVariant ?? 0) % work.argumentVariantsAvailable.length]?.perspective}
                  </span>
                </div>
              )}

              {/* Axe 1 */}
              {work.planAxe1 && (
                <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                      {work.planAxe1.titre}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      Thèse
                    </span>
                  </div>
                  <div className="space-y-2">
                    {work.planAxe1.arguments?.map((arg, idx) => (
                      <div key={idx} className="text-xs space-y-1 p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                          Argument {idx + 1} : {arg.idee}
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          <strong className="text-slate-900 dark:text-white">{arg.auteur}</strong> dans <em>« {arg.oeuvre} »</em> : <span className="italic">« {arg.citation} »</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transition canonique */}
              {work.transitionAxe1Axe2 && (
                <div className="p-3 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-[#0030B6] dark:text-sky-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] block">
                      Transition canonique obligatoire :
                    </span>
                    <p className="italic text-slate-800 dark:text-slate-200 leading-relaxed">
                      « {work.transitionAxe1Axe2} »
                    </p>
                  </div>
                </div>
              )}

              {/* Axe 2 */}
              {work.planAxe2 && (
                <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                      {work.planAxe2.titre}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      Antithèse / Dépassement
                    </span>
                  </div>
                  <div className="space-y-2">
                    {work.planAxe2.arguments?.map((arg, idx) => (
                      <div key={idx} className="text-xs space-y-1 p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">
                          Argument {idx + 1} : {arg.idee}
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          <strong className="text-slate-900 dark:text-white">{arg.auteur}</strong> dans <em>« {arg.oeuvre} »</em> : <span className="italic">« {arg.citation} »</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* BANQUE DE CONNECTEURS LOGIQUES PHILOSOPHIQUES (DÉPLIABLE) */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowConnectorsBank(!showConnectorsBank)}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                <span>Banque de Connecteurs Logiques pour la Rédaction (Anti-Répétitions)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium text-[11px]">
                <span>{showConnectorsBank ? 'Masquer le mémo' : 'Consulter le mémo'}</span>
                {showConnectorsBank ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {showConnectorsBank && (
              <div className="mt-3 p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1.5">
                    1. Mise en Tension / Opposition (Remplace « Or, force est de ») :
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {PHILO_CONNECTEURS.miseEnTension.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1.5">
                    2. Amorces du Problème Court :
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {PHILO_CONNECTEURS.amorceProbleme.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1.5">
                    3. Connecteurs Thèse (Axe 1) &amp; Antithèse (Axe 2) :
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-semibold text-slate-900 dark:text-white block text-[10px]">Axe 1 (Progression) :</span>
                      <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                        En premier lieu • D'emblée • Par ailleurs • De surcroît • En outre • Enfin
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-semibold text-slate-900 dark:text-white block text-[10px]">Axe 2 (Critique &amp; Dépassement) :</span>
                      <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                        Sous un angle critique • Cependant • Toutefois • Bien plus encore • En dernière analyse
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1.5">
                    4. Mobilisation de Citations &amp; Doctrines :
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {PHILO_CONNECTEURS.citationIntro.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        {c}...
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
};
