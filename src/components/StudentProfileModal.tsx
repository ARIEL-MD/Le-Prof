import React, { useState } from 'react';
import { 
  X, 
  Check, 
  GraduationCap, 
  Info, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Sliders,
  LogOut,
  LogIn,
  User,
  Mail,
  Phone,
  Lock,
} from 'lucide-react';
import { StudentProfile } from '../types';
import { EDUCATION_COUNTRIES, EducationCountryConfig } from '../data/educationSystems';

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: StudentProfile;
  onSaveProfile: (profile: StudentProfile) => void;
  onLogout?: () => void;
  onOpenAuthScreen?: () => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSaveProfile,
  onLogout,
  onOpenAuthScreen,
}) => {
  const initialLastName = currentProfile.lastName || (currentProfile.fullName ? currentProfile.fullName.trim().split(' ')[0] : '');
  const initialFirstName = currentProfile.firstName || (currentProfile.fullName ? currentProfile.fullName.trim().split(' ').slice(1).join(' ') : '');

  const [lastName, setLastName] = useState(initialLastName);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [selectedCountryId, setSelectedCountryId] = useState(currentProfile.countryCode || 'CI');
  const [selectedGrade, setSelectedGrade] = useState(currentProfile.grade || 'Terminale');
  const [selectedSerie, setSelectedSerie] = useState(currentProfile.serie || 'Terminale D');
  const [newPassword, setNewPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const currentCountryConfig: EducationCountryConfig = 
    EDUCATION_COUNTRIES.find((c) => c.id === selectedCountryId) || EDUCATION_COUNTRIES[0];

  const availableSeries = currentCountryConfig.seriesByGrade[selectedGrade] || [];

  const handleCountryChange = (country: EducationCountryConfig) => {
    setSelectedCountryId(country.id);
    const newSeries = country.seriesByGrade[selectedGrade] || [];
    if (newSeries.length > 0) {
      setSelectedSerie(newSeries[0].label);
    } else {
      setSelectedSerie('');
    }
    setFormError(null);
  };

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    const newSeries = currentCountryConfig.seriesByGrade[grade] || [];
    if (newSeries.length > 0) {
      setSelectedSerie(newSeries[0].label);
    } else {
      setSelectedSerie('');
    }
    setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!selectedGrade) {
      setFormError('Veuillez sélectionner votre classe.');
      return;
    }

    if (newPassword && newPassword.length < 6) {
      setFormError('Le nouveau mot de passe doit comporter au moins 6 caractères.');
      return;
    }

    const cleanLastName = lastName.trim().toUpperCase();
    const cleanFirstName = firstName.trim().replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    const cleanFullName = cleanLastName && cleanFirstName ? `${cleanLastName} ${cleanFirstName}` : (cleanLastName || cleanFirstName || '');

    const updated: StudentProfile = {
      ...currentProfile,
      lastName: cleanLastName,
      firstName: cleanFirstName,
      fullName: cleanFullName,
      country: currentCountryConfig.name,
      countryCode: currentCountryConfig.id,
      flagEmoji: currentCountryConfig.flag,
      phoneCode: currentCountryConfig.phoneCode,
      educationSystem: currentCountryConfig.educationSystem,
      curriculumAuthority: currentCountryConfig.curriculumAuthority,
      grade: selectedGrade,
      serie: selectedSerie || undefined,
      password: newPassword || currentProfile.password,
      updatedAt: new Date().toISOString(),
    };

    onSaveProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* EN-TÊTE PRINCIPAL */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {currentProfile.isRegistered ? 'Mon Compte Élève' : 'Choisir ma classe & mon pays'}
                </h3>
                {currentProfile.isRegistered ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    Session Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                    Mode Invité
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {currentProfile.isRegistered 
                  ? `Connecté en tant que ${currentProfile.fullName || 'Élève'} (${currentProfile.email || currentProfile.phoneNumber || 'Compte vérifié'})`
                  : 'Adapte les programmes officiels, barèmes et méthodologies'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENU */}
        <div className="overflow-y-auto p-5 text-xs sm:text-sm">
          {/* BANDEAU GUEST AVEC BOUTON DE CONNEXION */}
          {!currentProfile.isRegistered && onOpenAuthScreen && (
            <div className="mb-5 p-3.5 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">Vous n'êtes pas connecté.</span>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Créez un compte ou connectez-vous pour sauvegarder votre profil et vos sessions.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuthScreen();
                }}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-2xs cursor-pointer transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Se connecter</span>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {formError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-xl flex items-center gap-2.5 text-rose-700 dark:text-rose-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* SI CONNECTÉ : INFOS DE COMPTE */}
            {currentProfile.isRegistered && (
              <div className="p-3.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Identifiant de session</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
                  {currentProfile.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{currentProfile.email}</span>
                    </div>
                  )}
                  {currentProfile.phoneNumber && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">{currentProfile.phoneNumber}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Statut :</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Compte officiel</span>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 1 : PAYS & PROGRAMME SCOLAIRE */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>1. Pays & Programme Scolaire</span>
                </div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {currentCountryConfig.flag} {currentCountryConfig.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-44 overflow-y-auto pr-1">
                {EDUCATION_COUNTRIES.map((c) => {
                  const isSelected = c.id === selectedCountryId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleCountryChange(c)}
                      className={`p-2 rounded-xl border text-left transition-all flex flex-col gap-0.5 cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 dark:border-indigo-500 shadow-xs ring-1 ring-indigo-500'
                          : 'bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{c.flag}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                      </div>
                      <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <Info className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200">Programme appliqué :</strong>{' '}
                  {currentCountryConfig.curriculumAuthority}. {currentCountryConfig.methodologyNotes}
                </div>
              </div>
            </div>

            {/* SECTION 2 : CLASSE & SÉRIE */}
            <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Classe & Série</span>
              </div>

              {/* Sélecteur de Classe */}
              <div>
                <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Classe
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {currentCountryConfig.defaultGrades.map((grade) => {
                    const isSelected = grade === selectedGrade;
                    return (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => handleGradeChange(grade)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {grade}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sélecteur de Série */}
              {availableSeries.length > 0 && (
                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                    Série / Filière
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableSeries.map((s) => {
                      const isSelected = s.label === selectedSerie;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSerie(s.label)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-500 dark:border-indigo-500 shadow-xs ring-1 ring-indigo-500'
                              : 'bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-900 dark:text-white">
                              {s.label}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {s.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* SECTION 3 : PRÉNOM / NOM */}
            <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                  <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>3. Identité</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Ex: Ariel, Fatou..."
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ex: Kouamé, Diop..."
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 uppercase font-semibold text-xs sm:text-sm"
                  />
                </div>
              </div>

              {currentProfile.isRegistered && (
                <div className="pt-2">
                  <label className="block font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Modifier le mot de passe (optionnel)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Laisser vide pour conserver l'actuel"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* BOUTONS D'ACTION & DÉCONNEXION */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
              <div>
                {currentProfile.isRegistered && onLogout && (
                  <button
                    type="button"
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Se déconnecter</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  {savedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Enregistré !</span>
                    </>
                  ) : (
                    <span>Enregistrer</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
