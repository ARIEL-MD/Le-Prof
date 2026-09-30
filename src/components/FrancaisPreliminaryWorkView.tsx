import React, { useState } from 'react';
import { FrancaisPreliminaryWork } from '../types';
import { LITERARY_VOCATIONS, CONNECTEURS_DISSERTATION_LITTERAIRE, REGLES_INSPECTEUR_DISSERTATION } from '../data/francaisDissertationMethodoBase';
import { 
  BookOpen, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  BookMarked, 
  AlertTriangle,
  FileText,
  Layers,
  SlidersHorizontal,
  Bookmark,
  CheckCircle2
} from 'lucide-react';

interface FrancaisPreliminaryWorkViewProps {
  work: FrancaisPreliminaryWork;
  subjectTitle?: string;
}

export const FrancaisPreliminaryWorkView: React.FC<FrancaisPreliminaryWorkViewProps> = ({ work, subjectTitle }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'brouillon' | 'vocations' | 'introduction' | 'plan' | 'conclusion'>('introduction');
  const [selectedVocationIndex, setSelectedVocationIndex] = useState<number>(0);
  const [showConnectorsBank, setShowConnectorsBank] = useState<boolean>(false);

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const fullTextToCopy = `MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION LITTÉRAIRE (FRANÇAIS)
TRAVAIL PRÉLIMINAIRE & DISSERTATION TYPE
Sujet : « ${subjectTitle || ''} »

RÈGLES D'OR DE L'INSPECTEUR :
1. DANS L'INTRODUCTION : ON NE MET JAMAIS LA CONSIGNE !
2. DANS LE PROBLÈME : AUCUN MOT « OU » !

1. ANALYSE DU SUJET AU BROUILLON :
${work.analyseDuSujet?.motsCles?.map(m => `• ${m.mot} : ${m.sens}`).join('\n') || ''}

Consigne isolée (NON reportée dans l'intro) : ${work.analyseDuSujet?.consigneIsolee || 'Expliquez et discutez cette affirmation.'}
Reformulation : ${work.analyseDuSujet?.reformulation || ''}

Vocations mobilisées :
${work.analyseDuSujet?.vocationsMobilisees?.map(v => `- ${v.vocation} : ${v.justification}`).join('\n') || ''}

2. PROBLÉMATISATION (SANS « OU ») :
Problème central : ${work.problematisation?.problemeSansOu || ''}
Tension dialectique : ${work.problematisation?.tensionDialectique || ''}

3. INTRODUCTION MÉTHODIQUE (CONFORME AUX RÈGLES) :
${work.introductionMethodique?.texteComplet || ''}

4. PLAN STRUCTURÉ DU DÉVELOPPEMENT :
Type de plan : ${work.planStructure?.typeDePlan || 'Plan dialectique'}
Axe 1 : ${work.planStructure?.axe1?.titre || ''}
${work.planStructure?.axe1?.paragraphes?.map(p => `  * [${p.auteur}, ${p.oeuvre}] : ${p.idee}\n    Citation : « ${p.citation} »\n    Analyse : ${p.analyse}`).join('\n\n') || ''}

Transition : ${work.planStructure?.transitionAxe1Axe2 || ''}

Axe 2 : ${work.planStructure?.axe2?.titre || ''}
${work.planStructure?.axe2?.paragraphes?.map(p => `  * [${p.auteur}, ${p.oeuvre}] : ${p.idee}\n    Citation : « ${p.citation} »\n    Analyse : ${p.analyse}`).join('\n\n') || ''}

5. CONCLUSION :
${work.conclusionMethodique?.texteComplet || ''}`;

  return (
    <div id="francais-preliminary-work-card" className="border rounded-lg overflow-hidden bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800 font-sans my-4">
      {/* En-tête officiel */}
      <div 
        id="francais-preliminary-work-header"
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-3.5 sm:p-4 flex items-center justify-between cursor-pointer bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center bg-[#0030B6] text-white font-bold shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Méthodologie Officielle de la Dissertation Littéraire
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                Certifiée Conforme
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
              Travail Préliminaire, Vocations de l'Œuvre &amp; Règles d'Or
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="btn-copy-full-francais-work"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(fullTextToCopy, 'all');
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {copiedSection === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'all' ? 'Copié !' : 'Copier tout le travail'}</span>
          </button>
          <div className="p-1 text-slate-500 dark:text-slate-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-6">
          {/* BANDEAU DES 2 RÈGLES CARDINALES ABSOLUES DE L'INSPECTEUR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <div className="p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                  Règle d'or 1 : Pas de consigne dans l'intro
                </div>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                  Dans l'introduction, <strong className="font-semibold text-slate-900 dark:text-white">on n'insère JAMAIS la consigne</strong> (ex: « Expliquez et discutez »). La citation ou le sujet est cité fidèlement, mais la consigne d'action est supprimée.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <div className="p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide">
                  Règle d'or 2 : Aucun « ou » dans le problème
                </div>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                  Le problème central est posé <strong className="font-semibold text-slate-900 dark:text-white">SANS AUCUN MOT « OU » DEDANS</strong>. Il s'agit d'une interrogation ouverte et unifiée (« Dans quelle mesure... », « En quoi... »).
                </p>
              </div>
            </div>
          </div>

          {/* Navigation par onglets thématiques */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            {[
              { id: 'brouillon', label: '1. Brouillon & Mots-clés', icon: FileText },
              { id: 'vocations', label: '2. Vocations de l\'Œuvre (9)', icon: Layers },
              { id: 'introduction', label: '3. Introduction Méthodique', icon: BookMarked },
              { id: 'plan', label: '4. Plan & Paragraphes Quinquennaux', icon: SlidersHorizontal },
              { id: 'conclusion', label: '5. Conclusion & Connecteurs', icon: Bookmark },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-francais-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0030B6] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ONGLET 1 : BROUILLON & ANALYSE DU SUJET */}
          {activeTab === 'brouillon' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#0030B6] text-white flex items-center justify-center text-xs font-bold">1</span>
                    Étude Parcellaire &amp; Définition Contextuelle des Mots-Clés
                  </h4>
                  <button
                    onClick={() => handleCopy(work.analyseDuSujet?.motsCles?.map(m => `• ${m.mot} : ${m.sens}`).join('\n') || '', 'lexique')}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-medium"
                  >
                    {copiedSection === 'lexique' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSection === 'lexique' ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {work.analyseDuSujet?.motsCles?.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <span className="font-semibold text-slate-900 dark:text-white">« {item.mot} » :</span>
                      <p className="text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">{item.sens}</p>
                    </div>
                  )) || (
                    <p className="text-slate-500 italic">Analyse des mots-clés du sujet en cours...</p>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded bg-[#0030B6] text-white flex items-center justify-center text-xs font-bold">2</span>
                  Consigne Isolée au Brouillon (Non Insérée dans l'Introduction)
                </h4>
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    Consigne textuelle de l'épreuve : « {work.analyseDuSujet?.consigneIsolee || 'Expliquez et discutez cette affirmation.'} »
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {work.analyseDuSujet?.rappelConsigne || "Rappel strict de l'inspecteur : Cette consigne commande le plan au brouillon mais est FORMELLEMENT EXCLUE de l'introduction rédigée."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded bg-[#0030B6] text-white flex items-center justify-center text-xs font-bold">3</span>
                  Reformulation Claire et Fidèle du Sujet
                </h4>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  {work.analyseDuSujet?.reformulation || 'Le sujet interroge la vocation de la création littéraire en opposant son rôle de divertissement et sa portée réflexive.'}
                </p>
              </div>
            </div>
          )}

          {/* ONGLET 2 : LES 9 VOCATIONS DE L'ŒUVRE LITTÉRAIRE */}
          {activeTab === 'vocations' && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Règle méthodologique officielle : </span>
                Toute dissertation littéraire mobilise une ou plusieurs <strong className="font-semibold">vocations</strong> (fonctions fondamentales de l'art d'écrire). Repérez ci-dessous la vocation principale du sujet et les vocations complémentaires pour l'antithèse ou la discussion.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Liste des vocations */}
                <div className="md:col-span-1 space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                  {LITERARY_VOCATIONS.map((voc, idx) => {
                    const isSelected = selectedVocationIndex === idx;
                    const isMobilisee = work.analyseDuSujet?.vocationsMobilisees?.some(v => v.vocation.toLowerCase().includes(voc.vocation.toLowerCase().replace('vocation ', '')));
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedVocationIndex(idx)}
                        className={`w-full text-left p-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'bg-[#0030B6] text-white font-semibold' 
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isMobilisee ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                          <span>{voc.vocation}</span>
                        </div>
                        {isMobilisee && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'}`}>
                            Actif
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Détail de la vocation sélectionnée */}
                <div className="md:col-span-2 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
                  {(() => {
                    const v = LITERARY_VOCATIONS[selectedVocationIndex] || LITERARY_VOCATIONS[0];
                    return (
                      <>
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">
                            {v.vocation}
                          </h4>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-300 dark:border-slate-700">
                            {v.genresPrivilegies.join(', ')}
                          </span>
                        </div>

                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm">
                          {v.definition}
                        </p>

                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1">
                            Arguments clés à mobiliser :
                          </div>
                          <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                            {v.argumentsCles.map((arg, i) => (
                              <li key={i}>{arg}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white uppercase tracking-wide text-[11px] mb-1.5">
                            Auteurs, Œuvres &amp; Citations d'illustration :
                          </div>
                          <div className="space-y-2">
                            {v.auteursEtOeuvres.map((item, i) => (
                              <div key={i} className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {item.auteur} — <span className="italic font-normal text-slate-700 dark:text-slate-300">{item.oeuvre}</span>
                                </div>
                                <div className="text-slate-700 dark:text-slate-300 my-1 italic">
                                  « {item.citation} »
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                                  {item.analyse}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 3 : L'INTRODUCTION MÉTHODIQUE */}
          {activeTab === 'introduction' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0030B6] dark:bg-sky-400" />
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      L'Introduction Conforme (Sans Consigne &amp; Sans « Ou »)
                    </h4>
                  </div>
                  <button
                    onClick={() => handleCopy(work.introductionMethodique?.texteComplet || '', 'intro')}
                    className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'intro' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSection === 'intro' ? 'Copié !' : 'Copier l\'introduction'}</span>
                  </button>
                </div>

                {/* Décomposition visuelle des 4 étapes canoniques */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-1">
                      1. Amener le sujet (Amorce littéraire / contextuelle) :
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                      {work.introductionMethodique?.amorce}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                        2. Poser le sujet (Citation sans la consigne) :
                      </span>
                      <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">
                        Consigne exclue ✓
                      </span>
                    </div>
                    <p className="text-slate-900 dark:text-white font-medium leading-relaxed">
                      {work.introductionMethodique?.citationSansConsigne}
                    </p>
                    {work.introductionMethodique?.explicationCitation && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">
                        {work.introductionMethodique.explicationCitation}
                      </p>
                    )}
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                        3. Poser le problème (Problématisation centrale) :
                      </span>
                      <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700">
                        Zéro « ou » dedans ✓
                      </span>
                    </div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm leading-relaxed">
                      {work.introductionMethodique?.problemeSansOu}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-1">
                      4. Annoncer le plan (Grandes articulations sans lourdeur) :
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                      {work.introductionMethodique?.annoncePlan}
                    </p>
                  </div>
                </div>

                {/* Bloc Continu Final */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Texte Intégral Prêt à Copier sur la Copie d'Examen :
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm leading-relaxed text-slate-900 dark:text-slate-100">
                    {work.introductionMethodique?.texteComplet}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 4 : LE PLAN STRUCTURÉ DU DÉVELOPPEMENT */}
          {activeTab === 'plan' && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Structure du plan retenu : </span>
                  <span className="text-slate-900 dark:text-white font-semibold">{work.planStructure?.typeDePlan || 'Plan dialectique en 2 axes'}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Formule d'or : Idée → Explication → Œuvre → Citation → Analyse
                </div>
              </div>

              {/* AXE 1 */}
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-300 dark:border-slate-700">Axe I</span>
                    {work.planStructure?.axe1?.titre}
                  </h4>
                  {work.planStructure?.axe1?.vocationPrincipale && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                      {work.planStructure.axe1.vocationPrincipale}
                    </span>
                  )}
                </div>

                {work.planStructure?.axe1?.chapeau && (
                  <p className="text-xs italic text-slate-600 dark:text-slate-400">
                    Chapeau introductif : {work.planStructure.axe1.chapeau}
                  </p>
                )}

                <div className="space-y-3 pt-1">
                  {work.planStructure?.axe1?.paragraphes?.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs sm:text-sm">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Paragraphe {idx + 1} : {p.idee}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-800 dark:text-slate-200">Explication :</strong> {p.explication}
                      </p>
                      <div className="p-2.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          Exemple : {p.auteur} — <span className="italic">{p.oeuvre}</span>
                        </div>
                        <div className="italic text-slate-800 dark:text-slate-200">
                          Citation : « {p.citation} »
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11px]">
                          Analyse : {p.analyse}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRANSITION */}
              <div className="p-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs space-y-1">
                <span className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-[10px] block">
                  Phrase de Transition Canonique (Bilan partiel + Bascule dialectique) :
                </span>
                <p className="italic text-slate-900 dark:text-white text-sm leading-relaxed">
                  {work.planStructure?.transitionAxe1Axe2}
                </p>
              </div>

              {/* AXE 2 */}
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-300 dark:border-slate-700">Axe II</span>
                    {work.planStructure?.axe2?.titre}
                  </h4>
                  {work.planStructure?.axe2?.vocationPrincipale && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                      {work.planStructure.axe2.vocationPrincipale}
                    </span>
                  )}
                </div>

                {work.planStructure?.axe2?.chapeau && (
                  <p className="text-xs italic text-slate-600 dark:text-slate-400">
                    Chapeau introductif : {work.planStructure.axe2.chapeau}
                  </p>
                )}

                <div className="space-y-3 pt-1">
                  {work.planStructure?.axe2?.paragraphes?.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs sm:text-sm">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Paragraphe {idx + 1} : {p.idee}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-800 dark:text-slate-200">Explication :</strong> {p.explication}
                      </p>
                      <div className="p-2.5 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          Exemple : {p.auteur} — <span className="italic">{p.oeuvre}</span>
                        </div>
                        <div className="italic text-slate-800 dark:text-slate-200">
                          Citation : « {p.citation} »
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11px]">
                          Analyse : {p.analyse}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 5 : CONCLUSION & CONNECTEURS */}
          {activeTab === 'conclusion' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    La Conclusion en 3 Étapes Canoniques
                  </h4>
                  <button
                    onClick={() => handleCopy(work.conclusionMethodique?.texteComplet || '', 'ccl')}
                    className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'ccl' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSection === 'ccl' ? 'Copié !' : 'Copier la conclusion'}</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      1. Bilan synthétique du développement :
                    </span>
                    <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                      {work.conclusionMethodique?.bilan}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-900 dark:text-white block mb-1">
                      2. Prise de position personnelle motivée :
                    </span>
                    <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                      {work.conclusionMethodique?.priseDePosition}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      3. Ouverture prospective :
                    </span>
                    <p className="leading-relaxed text-slate-800 dark:text-slate-200">
                      {work.conclusionMethodique?.ouverture}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm leading-relaxed text-slate-900 dark:text-slate-100 mt-3">
                  {work.conclusionMethodique?.texteComplet}
                </div>
              </div>

              {/* Boîte à connecteurs littéraires */}
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <button
                  type="button"
                  onClick={() => setShowConnectorsBank(!showConnectorsBank)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    Banque Pédagogique de Connecteurs Littéraires
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-xs font-medium">
                    {showConnectorsBank ? 'Masquer' : 'Afficher la banque'}
                  </span>
                </button>

                {showConnectorsBank && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Pour amorcer ou positionner :</div>
                      <div className="text-slate-600 dark:text-slate-400 italic">
                        {CONNECTEURS_DISSERTATION_LITTERAIRE.amorceEtPosition.join(' • ')}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Pour basculer ou nuancer :</div>
                      <div className="text-slate-600 dark:text-slate-400 italic">
                        {CONNECTEURS_DISSERTATION_LITTERAIRE.transitionEtNuance.join(' • ')}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Pour introduire un exemple/citation :</div>
                      <div className="text-slate-600 dark:text-slate-400 italic">
                        {CONNECTEURS_DISSERTATION_LITTERAIRE.analyseCitationEtExemple.join(' • ')}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Pour conclure :</div>
                      <div className="text-slate-600 dark:text-slate-400 italic">
                        {CONNECTEURS_DISSERTATION_LITTERAIRE.conclusionEtBilan.join(' • ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
