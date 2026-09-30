import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { AnalysisResultsView } from './components/AnalysisResultsView';
import { ScientificCalculatorModal } from './components/ScientificCalculatorModal';
import { ConjugatorModal } from './components/ConjugatorModal';
import { DictionaryModal } from './components/DictionaryModal';
import { ToolModal } from './components/ToolModal';
import { ChatComposer, ComposerTool } from './components/ChatComposer';
import {
  UserBubble,
  AssistantCard,
  LoadingTurn,
} from './components/ConversationTurns';
import { DEFAULT_FASCICULES } from './data/defaultFascicules';
import { Fascicule, MethodologyAnalysisResult, AcademicSerie, StudentProfile, CourseSearchResult } from './types';
import { detectSubjectMetadata } from './utils/subjectDetector';
import { ACADEMIC_SERIES_OPTIONS } from './data/academicSeries';
import { cleanNaturalScientificText, isNaturalFrenchSentence, wrapInlineMath } from './components/RichScientificInput';
import { StudentProfileModal } from './components/StudentProfileModal';
import { AuthScreen } from './components/AuthScreen';
import { checkMeApi, logoutApi, updateProfileApi, getStoredToken } from './services/authClient';
import { DEFAULT_STUDENT_PROFILE } from './data/educationSystems';
import { User, RotateCcw, Calculator, Zap, BookOpen, GraduationCap, LogIn } from 'lucide-react';
import { getConnectedUserSeed } from './utils/userSeed';

type Turn =
  | { id: string; role: 'user'; kind: 'text'; text: string; imageBase64?: string }
  | { id: string; role: 'assistant'; kind: 'loading'; label?: string }
  | { id: string; role: 'assistant'; kind: 'analysis'; result: MethodologyAnalysisResult; subjectTitle: string }
  | { id: string; role: 'assistant'; kind: 'course'; result: CourseSearchResult }
  | { id: string; role: 'assistant'; kind: 'error'; message: string };

const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const STORAGE_KEY_TURNS = 'leprof_saved_turns';
const STORAGE_KEY_LAST_SUBJECT = 'leprof_last_subject';
const STORAGE_KEY_DRAFT = 'leprof_composer_draft';

const loadSavedTurns = (): Turn[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_TURNS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.filter((t: any) => t && typeof t === 'object' && t.kind !== 'loading');
      }
    }
  } catch (e) {
    console.error('Erreur chargement tours sauvegardés:', e);
  }
  return [];
};

const saveTurnsSafe = (turnsToSave: Turn[]) => {
  const filtered = turnsToSave.filter((t) => t.kind !== 'loading');
  if (filtered.length === 0) {
    localStorage.removeItem(STORAGE_KEY_TURNS);
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY_TURNS, JSON.stringify(filtered));
  } catch (quotaErr) {
    console.warn('Quota localStorage dépassé, compression des tours...', quotaErr);
    // Supprimer les images base64 lourdes pour économiser l'espace
    const stripped = filtered.map((t) => {
      if (t.role === 'user' && t.kind === 'text' && t.imageBase64) {
        const { imageBase64, ...rest } = t;
        return rest;
      }
      return t;
    });
    try {
      localStorage.setItem(STORAGE_KEY_TURNS, JSON.stringify(stripped));
    } catch (innerErr) {
      // Conserver au moins les 10 exercices les plus récents
      const recent = stripped.slice(-10);
      try {
        localStorage.setItem(STORAGE_KEY_TURNS, JSON.stringify(recent));
      } catch (lastErr) {
        console.error('Impossible de persister les tours dans le stockage local:', lastErr);
      }
    }
  }
};


const cleanCourseDisplayTitle = (title: string, query?: string): string => {
  const source = (title || query || '').trim();
  if (!source) return 'Résultat de recherche';
  return source
    .replace(/^#{1,6}\s*/g, '')
    .replace(/^\*{1,2}\s*/g, '')
    .replace(/\*{1,2}$/g, '')
    .replace(/^(?:Leçon|Lecon|Chapitre|Thème|Theme|Unité|Unite|Module)\s+[^:：]+\s*[:：]\s*/i, '')
    .replace(/\*\*/g, '')
    .replace(/__+/g, '')
    .trim() || 'Résultat de recherche';
};

const renderCourseInline = (text: string): React.ReactNode => {
  const cleaned = text
    .replace(/\*\*([^*]+)\*\*/g, '§B§$1§/B§')
    .replace(/__([^_]+)__/g, '§B§$1§/B§')
    .replace(/\*([^*]+)\*/g, '§I§$1§/I§')
    .replace(/`([^`]+)`/g, '§C§$1§/C§');
  const parts = cleaned.split(/(§B§.*?§\/B§|§I§.*?§\/I§|§C§.*?§\/C§)/g);
  return parts.map((part, i) => {
    if (part.startsWith('§B§') && part.endsWith('§/B§')) {
      return <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part.slice(3, -4)}</strong>;
    }
    if (part.startsWith('§I§') && part.endsWith('§/I§')) {
      return <em key={i}>{part.slice(3, -4)}</em>;
    }
    if (part.startsWith('§C§') && part.endsWith('§/C§')) {
      return <code key={i} className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5 text-[0.92em]">{part.slice(3, -4)}</code>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
};

const renderCourseContent = (rawText: string): React.ReactNode => {
  if (!rawText) return null;
  const lines = rawText.replace(/\r/g, '').split('\n');
  const nodes: React.ReactNode[] = [];
  let bullets: React.ReactNode[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    nodes.push(
      <ul key={`course-list-${nodes.length}`} className="my-3 space-y-2 pl-1">
        {bullets}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBullets();
      return;
    }

    const heading = trimmed
      .replace(/^#{1,6}\s*/, '')
      .replace(/^\*\*(.+)\*\*:?$/, '$1')
      .trim();
    const isHeading = /^#{1,6}\s/.test(trimmed) || /^\*\*[^*]+\*\*:?$/.test(trimmed);
    if (isHeading) {
      flushBullets();
      nodes.push(
        <h3 key={`course-heading-${index}`} className="mt-4 mb-2 text-[15px] font-bold text-slate-900 dark:text-white first:mt-0">
          {renderCourseInline(heading.replace(/:$/, ''))}
        </h3>
      );
      return;
    }

    const bullet = trimmed.match(/^(?:[-*•]|\d+[.)])\s+(.+)$/);
    if (bullet) {
      bullets.push(
        <li key={`course-bullet-${index}`} className="flex items-start gap-2 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
          <span>{renderCourseInline(bullet[1])}</span>
        </li>
      );
      return;
    }

    flushBullets();
    nodes.push(
      <p key={`course-paragraph-${index}`} className="my-2 leading-relaxed">
        {renderCourseInline(trimmed)}
      </p>
    );
  });

  flushBullets();
  return nodes;
};

const WELCOME_TEXT =
  "Salut ! Je suis Le Prof. Choisis ta classe, puis pose ton exercice ou scanne ton sujet : je te guide pas à pas avec les meilleures astuces, les démonstrations claires et la rédaction parfaite pour cartonner à ton examen !";

export default function App() {
  const [selectedFascicule, setSelectedFascicule] = useState<Fascicule>(DEFAULT_FASCICULES[0]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const explicit = localStorage.getItem('leprof_theme_mode');
      if (explicit === 'dark') {
        // Réinitialisation en mode white
        localStorage.setItem('leprof_theme_mode', 'light');
        localStorage.setItem('theme_mode', 'light');
        return false;
      }
      localStorage.setItem('leprof_theme_mode', 'light');
      localStorage.setItem('theme_mode', 'light');
      return false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      try {
        localStorage.setItem('leprof_theme_mode', 'dark');
        localStorage.setItem('theme_mode', 'dark');
      } catch (e) {
        console.error(e);
      }
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('leprof_theme_mode', 'light');
        localStorage.setItem('theme_mode', 'light');
      } catch (e) {
        console.error(e);
      }
    }
  }, [isDarkMode]);

  const [selectedAcademicSerie, setSelectedAcademicSerie] = useState<AcademicSerie>(() => {
    const saved = localStorage.getItem('leprof_academic_serie') || localStorage.getItem('declic_academic_serie');
    if (saved && ACADEMIC_SERIES_OPTIONS.some((o) => o.id === saved)) {
      return saved as AcademicSerie;
    }
    return 'auto';
  });

  const handleSelectAcademicSerie = (serie: AcademicSerie) => {
    setSelectedAcademicSerie(serie);
    localStorage.setItem('leprof_academic_serie', serie);
  };

  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('leprof_student_profile') || localStorage.getItem('declic_student_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        const lastName = parsed.lastName || (parsed.fullName ? parsed.fullName.trim().split(' ')[0] : '');
        const firstName = parsed.firstName || (parsed.fullName ? parsed.fullName.trim().split(' ').slice(1).join(' ') : '');
        return {
          ...DEFAULT_STUDENT_PROFILE,
          ...parsed,
          lastName,
          firstName,
          studentMatricule: parsed.studentMatricule || (parsed.isRegistered ? `LP-${parsed.countryCode || 'CI'}-2026-REG` : DEFAULT_STUDENT_PROFILE.studentMatricule),
          subscriptionStatus: parsed.subscriptionStatus || 'free_discovery',
          subscriptionLabel: parsed.subscriptionLabel || 'Pass Découverte Gratuit',
        };
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_STUDENT_PROFILE;
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isAuthScreenOpen, setIsAuthScreenOpen] = useState<boolean>(false);

  // Vérification de session réelle au montage
  useEffect(() => {
    let isMounted = true;
    const initAuth = async () => {
      const token = getStoredToken();
      if (token) {
        try {
          const user = await checkMeApi();
          if (isMounted && user) {
            setStudentProfile(user);
            localStorage.setItem('leprof_student_profile', JSON.stringify(user));
          }
        } catch (e) {
          console.error('Session non trouvée ou expirée', e);
        }
      }
    };
    initAuth();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutApi();
    } catch (e) {
      console.error('Erreur déconnexion:', e);
    }
    setStudentProfile(DEFAULT_STUDENT_PROFILE);
    localStorage.removeItem('leprof_student_profile');
    sessionStorage.removeItem('leprof_guest_mode');
  };

  const handleSaveStudentProfile = async (newProfile: StudentProfile) => {
    setStudentProfile(newProfile);
    localStorage.setItem('leprof_student_profile', JSON.stringify(newProfile));

    // Synchronisation avec le serveur si connecté
    if (getStoredToken() && newProfile.isRegistered) {
      try {
        await updateProfileApi({
          fullName: newProfile.fullName,
          firstName: newProfile.firstName,
          lastName: newProfile.lastName,
          country: newProfile.country,
          countryCode: newProfile.countryCode,
          grade: newProfile.grade,
          serie: newProfile.serie,
          password: newProfile.password,
        });
      } catch (err) {
        console.error('Erreur synchronisation profil serveur', err);
      }
    }

    // Synchronisation automatique de la série académique si compatible
    if (newProfile.serie) {
      const lower = newProfile.serie.toLowerCase();
      const match = ACADEMIC_SERIES_OPTIONS.find(
        (opt) => opt.id !== 'auto' && (
          lower.includes(opt.id.toLowerCase()) || 
          lower.includes(opt.shortLabel.toLowerCase()) ||
          opt.label.toLowerCase().includes(lower)
        )
      );
      if (match) {
        handleSelectAcademicSerie(match.id);
      }
    }
  };

  const [turns, setTurns] = useState<Turn[]>(loadSavedTurns);
  const [composerValue, setComposerValue] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_DRAFT) || '';
    } catch {
      return '';
    }
  });
  const [attachedImage, setAttachedImage] = useState<{ base64: string; mimeType: string } | null>(null);
  const [isScanningImage, setIsScanningImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTool, setActiveTool] = useState<ComposerTool | null>(null);
  const [lastSubject, setLastSubject] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_LAST_SUBJECT) || '';
    } catch {
      return '';
    }
  });
  const [academicProfile, setAcademicProfile] = useState<{
    serie?: string;
    serieLabel?: string;
    level?: string;
  }>({});

  // Sauvegarde automatique des échanges
  useEffect(() => {
    saveTurnsSafe(turns);
  }, [turns]);

  // Sauvegarde automatique du dernier sujet
  useEffect(() => {
    try {
      if (lastSubject) {
        localStorage.setItem(STORAGE_KEY_LAST_SUBJECT, lastSubject);
      } else {
        localStorage.removeItem(STORAGE_KEY_LAST_SUBJECT);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [lastSubject]);

  // Sauvegarde automatique du brouillon en cours de saisie
  useEffect(() => {
    try {
      if (composerValue.trim()) {
        localStorage.setItem(STORAGE_KEY_DRAFT, composerValue);
      } else {
        localStorage.removeItem(STORAGE_KEY_DRAFT);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [composerValue]);

  // Réinitialisation de la session
  const handleClearSession = () => {
    setTurns([]);
    setLastSubject('');
    setComposerValue('');
    localStorage.removeItem(STORAGE_KEY_TURNS);
    localStorage.removeItem(STORAGE_KEY_LAST_SUBJECT);
    localStorage.removeItem(STORAGE_KEY_DRAFT);
  };

  const feedEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [turns]);

  const handleAttachImage = (file: File) => {
    setIsScanningImage(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        setAttachedImage({
          base64,
          mimeType: file.type || 'image/jpeg',
        });
      }
      setIsScanningImage(false);
    };
    reader.onerror = () => {
      setIsScanningImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setAttachedImage(null);
  };

  const runAnalysis = async (
    subject: string,
    exerciseType: string,
    mode: string = 'comprehensive',
    planStructure: string = '2_axes',
    detectedDisciplineLabel?: string,
    serie?: string,
    serieLabel?: string,
    level?: string,
    imageBase64?: string,
    imageMimeType?: string,
    variantIndex?: number
  ) => {
    const trimmedSubject = subject.trim() || (imageBase64 ? "Exercice dans l'image jointe" : "");
    if (!trimmedSubject || isLoading) return;

    setIsLoading(true);
    setLastSubject(trimmedSubject);
    setActiveTool(null);

    const userTurnId = uid();
    const loadingTurnId = uid();
    setTurns((prev) => [
      ...prev,
      { id: userTurnId, role: 'user', kind: 'text', text: trimmedSubject, imageBase64 },
      { id: loadingTurnId, role: 'assistant', kind: 'loading' },
    ]);
    setComposerValue('');
    setAttachedImage(null);

    const detection = detectSubjectMetadata(trimmedSubject);
    const matchedFasc =
      DEFAULT_FASCICULES.find((f) => f.id === detection.recommendedFasciculeId) || DEFAULT_FASCICULES[0];
    setSelectedFascicule(matchedFasc);

    // Détermination de la série et de la classe
    let finalSerie = serie;
    let finalSerieLabel = serieLabel;
    let finalLevel = level;

    if (!finalSerie && selectedAcademicSerie !== 'auto') {
      const opt = ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedAcademicSerie);
      if (opt) {
        finalSerie = opt.id;
        finalSerieLabel = opt.label;
        finalLevel = opt.gradeName || opt.shortLabel;
      }
    } else if (!finalSerie && studentProfile.isRegistered) {
      finalSerie = studentProfile.serie || studentProfile.grade;
      finalSerieLabel = `${studentProfile.serie || studentProfile.grade} (${studentProfile.country})`;
      finalLevel = studentProfile.grade;
    }

    if (!finalSerie) {
      finalSerie = detection.serie;
      finalSerieLabel = detection.serieLabel;
      finalLevel = detection.level;
    }

    setAcademicProfile({
      serie: finalSerie,
      serieLabel: finalSerieLabel,
      level: finalLevel,
    });

    const userSeed = getConnectedUserSeed();

    try {
      const res = await fetch('/api/analyze-exercise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fasciculeTitle: matchedFasc.title,
          fasciculeMethodology: matchedFasc.methodologyOverview,
          fasciculeKnowledge: matchedFasc.coreKnowledgeExcerpt,
          subjectTopic: trimmedSubject,
          exerciseType: exerciseType || detection.exerciseType,
          discipline: detectedDisciplineLabel || detection.disciplineLabel,
          mode,
          planStructure,
          serie: finalSerie,
          serieLabel: finalSerieLabel,
          level: finalLevel,
          studentProfile,
          userSeed,
          variantIndex,
          imageBase64,
          imageMimeType,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Impossible de traiter l'exercice.");
      }

      setTurns((prev) => [
        ...prev.filter((t) => t.id !== loadingTurnId),
        { id: uid(), role: 'assistant', kind: 'analysis', result: data.data, subjectTitle: trimmedSubject },
      ]);
    } catch (err: any) {
      console.error(err);
      setTurns((prev) => [
        ...prev.filter((t) => t.id !== loadingTurnId),
        {
          id: uid(),
          role: 'assistant',
          kind: 'error',
          message: err.message || "Une erreur est survenue lors de la résolution de l'exercice. Réessaye dans un instant !",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const isCourseSearchIntent = (text: string): boolean => {
    const q = text.trim();
    if (!q) return false;
    // Recherche de cours/notion explicite : ces demandes doivent rester dans
    // le fil de discussion et ne plus ouvrir un outil séparé.
    return /\b(?:cours|leçon|notion|définition|définis|qu'est[- ]ce que|que signifie|explique(?:-moi)?|date de|qui est|auteur de|œuvre de|formule de|théorème de|caractéristiques de|causes de|conséquences de|méthode de|résumé du cours|règle de)\b/i.test(q)
      && !/\b(?:résous|résoudre|calcule|calculer|factorise|développe|dérive|intègre|trouve x|x\s*=|équation|inéquation|système d'équations)\b/i.test(q);
  };

  const runCourseSearchInChat = async (query: string) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery || isLoading) return;
    setIsLoading(true);
    setActiveTool(null);
    const userTurnId = uid();
    const loadingTurnId = uid();
    setTurns((prev) => [
      ...prev,
      { id: userTurnId, role: 'user', kind: 'text', text: trimmedQuery },
      { id: loadingTurnId, role: 'assistant', kind: 'loading', label: 'Recherche du cours ou de la notion…' },
    ]);
    setComposerValue('');
    try {
      const opt = selectedAcademicSerie !== 'auto'
        ? ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedAcademicSerie)
        : undefined;
      const response = await fetch('/api/search-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: trimmedQuery,
          discipline: detectSubjectMetadata(trimmedQuery).disciplineLabel,
          serie: opt?.id,
          level: opt?.gradeName || opt?.shortLabel,
          curriculum: studentProfile.countryCode || 'CI',
          userSeed: getConnectedUserSeed(),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success || !data.data) throw new Error(data.error || 'Recherche académique impossible.');
      setTurns((prev) => [
        ...prev.filter((t) => t.id !== loadingTurnId),
        { id: uid(), role: 'assistant', kind: 'course', result: data.data as CourseSearchResult },
      ]);
    } catch (err: any) {
      setTurns((prev) => [
        ...prev.filter((t) => t.id !== loadingTurnId),
        { id: uid(), role: 'assistant', kind: 'error', message: err.message || 'Impossible de trouver une réponse académique fiable.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSend = () => {
    const text = composerValue.trim();
    if (!text && !attachedImage) return;
    if (text && !attachedImage && isCourseSearchIntent(text)) {
      void runCourseSearchInChat(text);
      return;
    }

    let targetSerie = selectedAcademicSerie !== 'auto' ? selectedAcademicSerie : undefined;
    let targetSerieLabel: string | undefined;
    let targetLevel: string | undefined;

    if (selectedAcademicSerie !== 'auto') {
      const opt = ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedAcademicSerie);
      if (opt) {
        targetSerieLabel = opt.label;
        targetLevel = opt.gradeName || opt.shortLabel;
      }
    }

    const detection = detectSubjectMetadata(text || "Exercice dans l'image");

    runAnalysis(
      text,
      detection.exerciseType,
      'comprehensive',
      '2_axes',
      detection.disciplineLabel,
      targetSerie || detection.serie,
      targetSerieLabel || detection.serieLabel,
      targetLevel || detection.level,
      attachedImage?.base64,
      attachedImage?.mimeType
    );
  };

  const handleOpenTool = (tool: ComposerTool) => {
    setActiveTool((prev) => (prev === tool ? null : tool));
  };

  const closeToolModal = () => setActiveTool(null);

  return (
    <div className="h-[100dvh] flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-200 overflow-x-hidden">
      <Header 
        isDarkMode={isDarkMode} 
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        studentProfile={studentProfile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        onOpenAuthScreen={() => setIsAuthScreenOpen(true)}
        onLogout={handleLogout}
        hasSavedTurns={turns.length > 0}
        onClearSession={handleClearSession}
      />

      {/* Conversation feed */}
      <main className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain">
        <div className="max-w-3xl mx-auto w-full px-0 sm:px-4 pt-3 pb-36 sm:pt-6 sm:pb-40 space-y-4 sm:space-y-6">
          {/* Welcome view (affiché uniquement sur page blanche pour alléger l'espace sur mobile) */}
          {turns.length === 0 ? (
            <AssistantCard>
              <div className="p-4 sm:p-5 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">
                      Le Prof — Préparation aux Examens & Concours
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Saisis ton énoncé, pose une question ou téléverse une photo : résolution méthodique intégrale, étape par étape, conforme aux barèmes officiels.
                  </p>
                </div>

                {/* Profil & Système éducatif discret */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {studentProfile.isRegistered ? studentProfile.country : "Programme officiel"}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {studentProfile.isRegistered 
                        ? `${studentProfile.grade} (${studentProfile.serie || 'Générale'})` 
                        : "Détection selon énoncé"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!studentProfile.isRegistered ? (
                      <button
                        onClick={() => setIsAuthScreenOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer shadow-2xs"
                      >
                        <LogIn className="w-3.5 h-3.5" />
                        <span>Se connecter</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsProfileModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
                      >
                        <User className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>Mon profil</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </AssistantCard>
          ) : (
            /* Statut de session si des exercices sont déjà résolus */
            <div className="flex items-center justify-between px-3 sm:px-1 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block ring-2 ring-emerald-400/30" />
                <span>
                  Session active ({turns.filter((t) => t.kind === 'analysis').length} exercice(s) résolu(s))
                </span>
              </span>
              <button
                onClick={handleClearSession}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-900 transition-colors cursor-pointer"
                title="Effacer l'historique et commencer une page blanche"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Nouvelle session</span>
              </button>
            </div>
          )}

          {turns.map((turn) => {
            if (turn.kind === 'text') {
              return (
                <div key={turn.id} className="space-y-2">
                  <UserBubble 
                    text={turn.text} 
                    onEdit={(t) => {
                      setComposerValue(t);
                      setTimeout(() => {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                      }, 50);
                    }}
                  />
                  {turn.imageBase64 && (
                    <div className="flex justify-end px-3">
                      <img
                        src={turn.imageBase64}
                        alt="Document soumis"
                        className="max-w-xs max-h-48 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs"
                      />
                    </div>
                  )}
                </div>
              );
            }
            if (turn.kind === 'loading') {
              return <LoadingTurn key={turn.id} label={turn.label} />;
            }
            if (turn.kind === 'course') {
              const r = turn.result;
              return (
                <AssistantCard key={turn.id}>
                  <div className="p-4 sm:p-5 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide">
                        <BookOpen className="w-4 h-4" />
                        <span>{r.disciplineLabel || 'Cours / notion'}</span>
                      </div>
                      <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{cleanCourseDisplayTitle(r.chapterTitle || r.relatedCourseTitle || r.query, r.query)}</h2>
                    </div>
                    {r.noResult ? (
                      <p className="text-sm text-slate-700 dark:text-slate-300">Je n’ai pas trouvé de contenu suffisamment fiable pour répondre précisément à cette demande.</p>
                    ) : (
                      <>
                        {r.directContent ? (
                          <div className="text-[15px] text-slate-800 dark:text-slate-200">{renderCourseContent(r.directContent)}</div>
                        ) : (
                          <>
                            {r.definitionAndScope && <div className="text-[15px] text-slate-800 dark:text-slate-200">{renderCourseContent(r.definitionAndScope)}</div>}
                            {r.coreConceptsAndFormulas?.length > 0 && (
                              <div className="space-y-3">
                                {r.coreConceptsAndFormulas.slice(0, 8).map((item, i) => (
                                  <div key={`${item.name || 'concept'}-${i}`} className="rounded-xl border border-slate-200 dark:border-slate-800 p-3">
                                    <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
                                    {item.formulaOrRule && <div className="mt-1 font-medium text-indigo-700 dark:text-indigo-300">{item.formulaOrRule}</div>}
                                    {item.explanation && <div className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.explanation}</div>}
                                  </div>
                                ))}
                              </div>
                            )}
                            {r.fullCourseContent && !r.directContent && (
                              <details className="rounded-xl border border-slate-200 dark:border-slate-800 p-3">
                                <summary className="cursor-pointer font-semibold">Voir le cours complet</summary>
                                <div className="mt-3 text-[15px] text-slate-800 dark:text-slate-200">{renderCourseContent(r.fullCourseContent)}</div>
                              </details>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </AssistantCard>
              );
            }
            if (turn.kind === 'error') {
              return (
                <AssistantCard key={turn.id}>
                  <div className="px-4 py-3 text-sm text-rose-700 dark:text-rose-300 leading-relaxed">
                    <span className="font-semibold">Erreur lors du traitement — </span>
                    {turn.message}
                  </div>
                </AssistantCard>
              );
            }
            if (turn.kind === 'analysis') {
              return (
                <AssistantCard key={turn.id} bare>
                  <AnalysisResultsView
                    result={turn.result}
                    subjectTitle={turn.subjectTitle}
                    onSelectVariant={(newVariant) => {
                      runAnalysis(
                        turn.subjectTitle,
                        turn.result.exerciseTypeIdentified || 'dissertation',
                        'comprehensive',
                        '2_axes',
                        turn.result.disciplineIdentified,
                        academicProfile.serie,
                        academicProfile.serieLabel,
                        academicProfile.level,
                        undefined,
                        undefined,
                        newVariant
                      );
                    }}
                  />
                </AssistantCard>
              );
            }
            return null;
          })}

          <div ref={feedEndRef} />
        </div>
      </main>

      {/* Modales pour Calculatrice, Recherche de cours et Conjugueur */}
      {activeTool && (
        <ToolModal
          title={
            {
              calculator: 'Calculatrice scientifique & Éditeur de formules',
              conjugator: 'Conjugueur Universel — Français, Anglais, Allemand, Espagnol',
              dictionary: 'Dictionnaire — Français, Anglais, Allemand, Espagnol',
            }[activeTool]
          }
          onClose={closeToolModal}
        >
          {activeTool === 'conjugator' && (
            <ConjugatorModal
              onClose={closeToolModal}
              onInsertToChat={(text) => {
                setComposerValue((prev) => (prev ? `${prev} ${text}` : text));
              }}
            />
          )}
          {activeTool === 'dictionary' && (
            <DictionaryModal
              onClose={closeToolModal}
              onInsertToChat={(text) => {
                setComposerValue((prev) => (prev ? `${prev} ${text}` : text));
              }}
            />
          )}
          {activeTool === 'calculator' && (
            <ScientificCalculatorModal
              initialValue={composerValue}
              currentGradeLabel={
                (ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedAcademicSerie)?.shortLabel) || 'Classe'
              }
              onClose={closeToolModal}
              onInsertToInput={(text) => {
                const clean = cleanNaturalScientificText(text);
                const formatted = isNaturalFrenchSentence(clean) ? clean : wrapInlineMath(clean);
                setComposerValue((prev) => (prev ? `${prev} ${formatted}` : formatted));
              }}
              onSubmitExercise={(exerciseText) => {
                const detection = detectSubjectMetadata(exerciseText);
                let targetSerie = selectedAcademicSerie !== 'auto' ? selectedAcademicSerie : undefined;
                let targetSerieLabel: string | undefined;
                let targetLevel: string | undefined;
                if (selectedAcademicSerie !== 'auto') {
                  const opt = ACADEMIC_SERIES_OPTIONS.find((o) => o.id === selectedAcademicSerie);
                  if (opt) {
                    targetSerieLabel = opt.label;
                    targetLevel = opt.gradeName || opt.shortLabel;
                  }
                }
                runAnalysis(
                  exerciseText,
                  detection.exerciseType,
                  'comprehensive',
                  '2_axes',
                  detection.disciplineLabel,
                  targetSerie || detection.serie,
                  targetSerieLabel || detection.serieLabel,
                  targetLevel || detection.level
                );
              }}
            />
          )}
        </ToolModal>
      )}

      {/* Barre de saisie avec le sélecteur de classe directement au-dessus */}
      <ChatComposer
        value={composerValue}
        onChange={setComposerValue}
        onSend={handleQuickSend}
        isLoading={isLoading}
        onOpenTool={handleOpenTool}
        activeTool={activeTool}
        selectedSerie={selectedAcademicSerie}
        onSelectSerie={handleSelectAcademicSerie}
        attachedImage={attachedImage}
        onAttachImage={handleAttachImage}
        onRemoveImage={handleRemoveImage}
        isScanningImage={isScanningImage}
        studentProfile={studentProfile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      {/* Modal Inscription / Profil Élève & Système Éducatif */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        currentProfile={studentProfile}
        onSaveProfile={handleSaveStudentProfile}
        onLogout={handleLogout}
        onOpenAuthScreen={() => {
          setIsProfileModalOpen(false);
          setIsAuthScreenOpen(true);
        }}
      />

      {/* Écran d'Authentification Dédié (Création de compte / Connexion) */}
      {isAuthScreenOpen && (
        <AuthScreen
          onClose={() => setIsAuthScreenOpen(false)}
          onSuccess={(user) => {
            setStudentProfile(user);
            localStorage.setItem('leprof_student_profile', JSON.stringify(user));
            setIsAuthScreenOpen(false);
            if (user.serie) {
              const lower = user.serie.toLowerCase();
              const match = ACADEMIC_SERIES_OPTIONS.find(
                (opt) => opt.id !== 'auto' && (
                  lower.includes(opt.id.toLowerCase()) || 
                  lower.includes(opt.shortLabel.toLowerCase()) ||
                  opt.label.toLowerCase().includes(lower)
                )
              );
              if (match) {
                handleSelectAcademicSerie(match.id);
              }
            }
          }}
          onContinueAsGuest={() => setIsAuthScreenOpen(false)}
        />
      )}
    </div>
  );
}
