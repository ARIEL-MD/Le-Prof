import React, { useState } from 'react';
import { Moon, Sun, GraduationCap, RotateCcw, Trash2, LogIn, User, LogOut } from 'lucide-react';
import { StudentProfile } from '../types';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  studentProfile: StudentProfile;
  onOpenProfileModal: () => void;
  onOpenAuthScreen?: () => void;
  onLogout?: () => void;
  hasSavedTurns?: boolean;
  onClearSession?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  studentProfile,
  onOpenProfileModal,
  onOpenAuthScreen,
  onLogout,
  hasSavedTurns,
  onClearSession,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const handleResetClick = () => {
    if (confirmReset) {
      onClearSession?.();
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
      setTimeout(() => {
        setConfirmReset(false);
      }, 4000);
    }
  };

  return (
    <header
      className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shrink-0 z-30 shadow-xs transition-colors"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-3xl mx-auto px-3 sm:px-4 h-12 sm:h-14 flex items-center justify-between gap-2">
        {/* Logo textuel unifié & Slogan */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="tracking-tight font-black select-none text-base sm:text-xl font-sans text-indigo-600 dark:text-white transition-colors shrink-0">
            LE PROF
          </span>
          <div className="h-3.5 w-px bg-slate-300 dark:bg-slate-700 shrink-0 hidden xs:block" />
          <span className="text-[11px] sm:text-sm font-semibold text-slate-500 dark:text-slate-300 tracking-tight truncate hidden xs:inline">
            Comprendre. Enfin.
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Bouton Réinitialiser / Nouvelle Session si historique présent */}
          {hasSavedTurns && onClearSession && (
            <button
              onClick={handleResetClick}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer shadow-2xs ${
                confirmReset
                  ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'
                  : 'bg-slate-100 dark:bg-slate-800/90 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-800'
              }`}
              title={confirmReset ? 'Cliquer à nouveau pour confirmer' : 'Effacer la session et recommencer'}
            >
              {confirmReset ? (
                <>
                  <Trash2 className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                  <span>Confirmer ?</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Nouveau</span>
                </>
              )}
            </button>
          )}

          {/* Bouton Session Utilisateur Authentifié vs Non-connecté */}
          {studentProfile.isRegistered ? (
            <div className="flex items-center gap-1">
              <button
                onClick={onOpenProfileModal}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors shadow-2xs cursor-pointer bg-indigo-50 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/80"
                title="Mon Compte & Ma Classe"
              >
                <span className="text-sm select-none">{studentProfile.flagEmoji || '🇨🇮'}</span>
                <span className="hidden sm:inline font-bold truncate max-w-[110px]">
                  {studentProfile.firstName || studentProfile.lastName || studentProfile.fullName}
                </span>
                <span className="text-[11px] bg-indigo-200/80 dark:bg-indigo-900 text-indigo-950 dark:text-indigo-200 px-1.5 py-0.5 rounded font-bold truncate max-w-[90px]">
                  {studentProfile.serie || studentProfile.grade}
                </span>
              </button>
              {onLogout && (
                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/60 hover:text-rose-600 dark:hover:text-rose-400 text-slate-600 dark:text-slate-300 transition-colors shadow-2xs cursor-pointer"
                  title="Se déconnecter"
                  aria-label="Se déconnecter"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            onOpenAuthScreen && (
              <button
                onClick={onOpenAuthScreen}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors shadow-2xs cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600"
                title="Se connecter ou créer un compte"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Connexion</span>
              </button>
            )
          )}

          {/* Bascule Mode Clair / Sombre */}
          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 sm:gap-1.5 text-xs font-semibold rounded-lg border transition-colors shadow-2xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 cursor-pointer shrink-0"
            title={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
            aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Clair</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Sombre</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
