import React, { useState, useRef, useMemo, useEffect } from 'react';
import {
  ArrowRight,
  RefreshCw,
  Camera,
  Languages,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Trash2,
  BrainCircuit,
  PenTool,
  GraduationCap
} from 'lucide-react';
import { Fascicule, AcademicSerie } from '../types';
import { detectSubjectMetadata, SubjectDetectionResult } from '../utils/subjectDetector';
import { ScientificWhiteboard } from './ScientificWhiteboard';
import { ScientificSymbolsBar } from './ScientificSymbolsBar';
import { RichScientificInput, RichScientificInputRef, cleanNaturalScientificText } from './RichScientificInput';
import { MathText } from './MathText';

interface SubjectInputPanelProps {
  currentFascicule: Fascicule;
  onSubmit: (
    subject: string,
    exerciseType: string,
    mode: string,
    planStructure: string,
    disciplineLabel?: string,
    serie?: string,
    serieLabel?: string,
    // Image jointe (figure, schéma, tableau, photo du sujet...), envoyée telle
    // quelle jusqu'à la résolution. Optionnelle : absente si l'élève n'a pas
    // scanné de photo, ou s'il l'a retirée avant d'envoyer.
    imageBase64?: string,
    imageMimeType?: string
  ) => void;
  isLoading: boolean;
  subjectInput: string;
  setSubjectInput: (val: string) => void;
}

import { ACADEMIC_SERIES_OPTIONS } from '../data/academicSeries';

interface TranslationData {
  sourceLanguageDetected: string;
  targetLanguage?: string;
  translatedText: string;
  coverage?: number;
  literalTranslation?: string;
  keyVocabulary: Array<{ termSource: string; termTarget: string; categoryOrContext: string }>;
  grammaticalNotes: string[];
}

export const SubjectInputPanel: React.FC<SubjectInputPanelProps> = ({
  currentFascicule,
  onSubmit,
  isLoading,
  subjectInput,
  setSubjectInput,
}) => {
  const [isScanningOCR, setIsScanningOCR] = useState(false);
  const [ocrError, setOcrError] = useState<string | null>(null);
  const [isWhiteboardOpen, setIsWhiteboardOpen] = useState(false);
  // Image jointe (photo d'un exercice, d'une figure, d'un schéma...). Elle reste en
  // mémoire le temps que l'élève complète/écrit sa question, puis part avec la
  // requête d'envoi. Elle n'est jamais sauvegardée : elle est effacée du state dès
  // que le sujet est soumis (ou si l'élève clique sur "Retirer l'image").
  const [attachedImage, setAttachedImage] = useState<{ base64: string; mimeType: string; previewUrl: string } | null>(null);
  const [selectedSerieOverride, setSelectedSerieOverride] = useState<AcademicSerie>('auto');
  
  // Translation state
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState<TranslationData | null>(null);
  const [showTranslationBox, setShowTranslationBox] = useState(true);
  const [translationTarget, setTranslationTarget] = useState<'fr' | 'en' | 'de' | 'es'>('fr');
  const [translationSource, setTranslationSource] = useState<'auto' | 'fr' | 'en' | 'de' | 'es'>('auto');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const richInputRef = useRef<RichScientificInputRef>(null);

  const handleInsertSymbol = (symbolText: string) => {
    const clean = cleanNaturalScientificText(symbolText);
    if (richInputRef.current) {
      richInputRef.current.insertText(clean);
    } else {
      setSubjectInput(subjectInput ? `${subjectInput} ${clean}` : clean);
    }
  };

  // Live Auto-Detection (instant local pass, keyed by regex/keywords)
  const localDetection: SubjectDetectionResult = useMemo(() => {
    return detectSubjectMetadata(subjectInput);
  }, [subjectInput]);

  // Détection 100 % locale par signatures et mots-clés. Aucun appel IA.
  const aiConfirmedResult: SubjectDetectionResult | null = null;
  const isAiDetecting = false;

  // Détection finale : moteur local déterministe uniquement.
  const detectionResult: SubjectDetectionResult = localDetection;

  // Active Series based on override or auto-detection
  const activeSerieInfo = useMemo(() => {
    if (selectedSerieOverride !== 'auto') {
      const match = ACADEMIC_SERIES_OPTIONS.find((s) => s.id === selectedSerieOverride);
      return {
        serie: selectedSerieOverride,
        serieLabel: match ? match.label : selectedSerieOverride,
        isCustom: true,
      };
    }
    return {
      serie: detectionResult.serie,
      serieLabel: detectionResult.serieLabel,
      isCustom: false,
    };
  }, [selectedSerieOverride, detectionResult]);

  const handleTranslate = async () => {
    if (!subjectInput.trim()) return;
    setIsTranslating(true);
    setTranslationResult(null);

    try {
      const res = await fetch('/api/translate-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: subjectInput,
          sourceLang: translationSource,
          targetLang: translationTarget,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success || !data.data) throw new Error(data.error || 'Traduction indisponible.');
      setTranslationResult(data.data);
      setShowTranslationBox(true);
    } catch (err) {
      console.error('Translation error', err);
    } finally {
      setIsTranslating(false);
    }
  };

  const openGoogleTranslation = () => {
    const sl = translationSource === 'auto' ? 'auto' : translationSource;
    const tl = translationTarget;
    const url = `https://translate.google.com/?sl=${encodeURIComponent(sl)}&tl=${encodeURIComponent(tl)}&text=${encodeURIComponent(subjectInput)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectInput.trim() || isLoading) return;

    onSubmit(
      subjectInput,
      detectionResult.exerciseType,
      'comprehensive',
      '2_axes',
      detectionResult.disciplineLabel,
      activeSerieInfo.serie,
      activeSerieInfo.serieLabel,
      attachedImage?.base64,
      attachedImage?.mimeType
    );

    // L'image ne doit jamais rester en mémoire au-delà de l'envoi : une fois
    // partie avec la requête, on l'efface immédiatement du panneau. Elle a déjà
    // été transmise par valeur à onSubmit, donc la vider ici n'affecte pas la
    // requête en cours.
    if (attachedImage) {
      URL.revokeObjectURL(attachedImage.previewUrl);
      setAttachedImage(null);
    }
  };

  const handleRemoveAttachedImage = () => {
    if (attachedImage) {
      URL.revokeObjectURL(attachedImage.previewUrl);
    }
    setAttachedImage(null);
    setOcrError(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsScanningOCR(true);
    setOcrError(null);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;
        const mimeType = file.type || 'image/jpeg';

        // On garde l'image elle-même (pas seulement le texte que l'OCR en tire),
        // pour qu'elle accompagne le sujet jusqu'à la résolution : une figure, un
        // schéma ou un tableau se lisent mieux directement que via une
        // description texte. L'aperçu utilise un object URL séparé, libéré dès
        // que l'image est retirée ou envoyée.
        setAttachedImage({ base64: base64Data, mimeType, previewUrl: URL.createObjectURL(file) });

        try {
          const res = await fetch('/api/ocr-scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              imageBase64: base64Data,
              mimeType,
            }),
          });
          const data = await res.json();
          if (data.success && data.text) {
            // Pré-remplit le texte (utile si les questions sont écrites sur la
            // photo) ; l'élève peut librement l'éditer ou écrire lui-même sa
            // question — l'image reste jointe dans les deux cas.
            setSubjectInput(data.text);
          } else if (!data.success && data.error) {
            // Ce n'est pas bloquant : si la photo ne contient qu'un schéma sans
            // texte, l'OCR peut ne rien retourner. L'élève tape alors sa
            // question lui-même, l'image restant attachée pour la résolution.
            setOcrError(data.error);
          }
        } catch (err: any) {
          setOcrError("Erreur lors de l'analyse OCR. Vous pouvez quand même écrire votre question : la photo reste jointe.");
        } finally {
          setIsScanningOCR(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setOcrError("Erreur de chargement du fichier.");
      setIsScanningOCR(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm dark:shadow-xl space-y-4 transition-colors">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subject Text Input Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <label htmlFor="subject-input-textarea" className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#0030B6] dark:text-sky-400" />
              <span>Saisissez votre sujet, devoir ou exercice :</span>
            </label>
            
            {/* Quick Actions (OCR, Translate & Clear) */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Clear button if text exists */}
              {subjectInput.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSubjectInput('')}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  title="Effacer le texte saisi"
                >
                  <Trash2 className="w-3.5 h-3.5 text-slate-500 hover:text-rose-600" />
                  <span>Effacer</span>
                </button>
              )}

              {/* Translate button */}
              <button
                type="button"
                onClick={handleTranslate}
                disabled={!subjectInput.trim() || isTranslating}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors disabled:opacity-50 cursor-pointer"
                title="Traduire localement sans IA ni API externe"
              >
                {isTranslating ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0030B6] dark:text-sky-400" />
                ) : (
                  <Languages className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                )}
                <span>{isTranslating ? 'Traduction...' : 'Traduire localement'}</span>
              </button>

              <div className="flex items-center gap-1.5">
                <select value={translationSource} onChange={(e) => setTranslationSource(e.target.value as any)} className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                  <option value="auto">Auto</option>
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="de">Allemand</option>
                  <option value="es">Espagnol</option>
                </select>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <select value={translationTarget} onChange={(e) => setTranslationTarget(e.target.value as any)} className="text-xs px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200">
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="de">Allemand</option>
                  <option value="es">Espagnol</option>
                </select>
              </div>

              <button
                type="button"
                onClick={openGoogleTranslation}
                disabled={!subjectInput.trim()}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer disabled:opacity-50"
                title="Ouvrir Google Traduction pour une traduction générale complète"
              >
                <Languages className="w-3.5 h-3.5 text-slate-500" />
                <span>Google Traduction</span>
              </button>

              {/* Tableau d'écriture & Clavier Scientifique */}
              <button
                type="button"
                onClick={() => setIsWhiteboardOpen(true)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                title="Ouvrir le tableau d'écriture manuscrite et clavier scientifique (+∞, cos, sin, intégrales, vecteurs, chimie)"
              >
                <PenTool className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                <span>Tableau d'Écriture (+∞, cos...)</span>
              </button>

              {/* OCR Button */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isScanningOCR}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                title="Scanner une photo de devoir ou feuille d'exercice"
              >
                {isScanningOCR ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0030B6] dark:text-sky-400" />
                ) : (
                  <Camera className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                )}
                <span>{isScanningOCR ? 'Scan...' : 'Scanner (Photo)'}</span>
              </button>

            <span className="text-xs text-slate-500 font-mono">
                {subjectInput.length} car.
              </span>
            </div>
          </div>

          {/* Academic Series & Grade Level Selection Bar */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#0030B6] dark:text-sky-400" />
                <span>Niveau & Classe d'étude (de la 6ème à la Terminale) :</span>
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 dark:text-slate-400">Programme appliqué :</span>
                <span className="font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700 text-xs">
                  {activeSerieInfo.serieLabel}
                </span>
              </div>
            </div>

            {/* Quick Series & Class Chips grouped clearly */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {ACADEMIC_SERIES_OPTIONS.map((opt) => {
                const isSelected = selectedSerieOverride === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedSerieOverride(opt.id)}
                    title={opt.desc}
                    className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0030B6] border-[#0030B6] text-white font-semibold'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {opt.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {attachedImage && (
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5">
              <img
                src={attachedImage.previewUrl}
                alt="Photo jointe à l'exercice"
                className="w-12 h-12 object-cover rounded border border-slate-300 dark:border-slate-700"
              />
              <div className="flex-1 text-xs text-slate-700 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Photo jointe</p>
                <p className="text-slate-500 dark:text-slate-400">
                  Elle sera envoyée avec votre question pour la résolution (figure, schéma, tableau...), puis effacée.
                </p>
              </div>
              <button
                type="button"
                onClick={handleRemoveAttachedImage}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer shrink-0"
                title="Retirer la photo jointe"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Retirer</span>
              </button>
            </div>
          )}

          <div className="relative bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-3.5 focus-within:border-[#0030B6] focus-within:ring-1 focus-within:ring-[#0030B6] transition-all">
            <RichScientificInput
              ref={richInputRef}
              value={subjectInput}
              onChange={setSubjectInput}
              minHeight="110px"
              placeholder="Collez ou écrivez ici l'énoncé de votre devoir, texte, dissertation ou problème (toutes matières : Français, Histoire-Géo, SVT, Maths, PC, Philo, Anglais...)..."
            />
          </div>

          {/* Dedicated Scientific Symbols & Fractions Palette */}
          <ScientificSymbolsBar
            onInsert={handleInsertSymbol}
            defaultOpen={false}
          />

          {/* Live discipline detection badge */}
          {subjectInput.trim().length >= 6 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title={detectionResult.explanation}
              >
                <BrainCircuit className="w-3.5 h-3.5 text-[#0030B6] dark:text-sky-400" />
                Matière détectée : <strong className="text-slate-900 dark:text-white">{detectionResult.disciplineLabel}</strong>
                {isAiDetecting && (
                  <RefreshCw className="w-3 h-3 animate-spin text-[#0030B6] dark:text-sky-400 ml-0.5" />
                )}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                {detectionResult.exerciseType}
              </span>
            </div>
          )}

          {ocrError && (
            <p className="text-xs text-rose-800 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900">
              {ocrError}
            </p>
          )}

          {/* Instant Translation Box */}
          {translationResult && (
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-[#0030B6] dark:text-sky-400" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Traduction ({translationResult.sourceLanguageDetected} → {translationResult.targetLanguage || translationTarget})
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTranslationBox(!showTranslationBox)}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-xs cursor-pointer"
                >
                  {showTranslationBox ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {showTranslationBox && (
                <div className="space-y-3 pt-1 text-sm text-slate-800 dark:text-slate-200">
                  <div className="bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mb-1">Traduction en français :</p>
                    <p className="leading-relaxed text-slate-900 dark:text-slate-100 italic">« {translationResult.translatedText} »</p>
                    {typeof (translationResult as any).coverage === 'number' && (translationResult as any).coverage < 0.34 && (
                      <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Cette phrase dépasse le lexique local. Utilise « Google Traduction » pour une traduction générale complète.</p>
                    )}
                  </div>

                  {translationResult.keyVocabulary && translationResult.keyVocabulary.length > 0 && (
                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mb-1.5">Lexique clé (Wortschatz / Vocabulaire) :</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {translationResult.keyVocabulary.map((v, i) => (
                          <div key={i} className="bg-white dark:bg-slate-900/90 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-800 text-xs flex items-center justify-between">
                            <span className="font-semibold text-slate-900 dark:text-white">{v.termSource}</span>
                            <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1"><ArrowRight className="w-3 h-3 text-slate-400" /> {v.termTarget}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {translationResult.grammaticalNotes && translationResult.grammaticalNotes.length > 0 && (
                    <div className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                      <p className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5"><Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Remarques grammaticales pour la rédaction :</p>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400">
                        {translationResult.grammaticalNotes.map((note, i) => (
                          <li key={i}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            disabled={!subjectInput.trim() || isLoading}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0030B6] hover:bg-[#002699] text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Résolution & Rédaction en cours...</span>
              </>
            ) : (
              <>
                <GraduationCap className="w-4 h-4 text-[#08F1D5]" />
                <span>Traiter et Rédiger la Copie Intégrale</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Scientific Handwriting & Formula Whiteboard Modal */}
      <ScientificWhiteboard
        isOpen={isWhiteboardOpen}
        onClose={() => setIsWhiteboardOpen(false)}
        onInsertText={(textToInsert) => {
          const clean = cleanNaturalScientificText(textToInsert);
          setSubjectInput(subjectInput ? subjectInput + ' ' + clean : clean);
        }}
      />
    </div>
  );
};
