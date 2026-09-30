import { StudentProfile } from '../types';

const TOKEN_KEY = 'leprof_auth_token';

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: any;
  error?: string;
}

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token: string) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    console.error(e);
  }
}

export function clearStoredToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    console.error(e);
  }
}

export function userToStudentProfile(user: any): StudentProfile {
  return {
    id: user.id,
    email: user.email,
    phoneNumber: user.phoneNumber,
    lastName: user.lastName,
    firstName: user.firstName,
    fullName: user.fullName || `${user.lastName || ''} ${user.firstName || ''}`.trim() || 'Élève',
    country: user.country || "Côte d'Ivoire",
    countryCode: user.countryCode || 'CI',
    flagEmoji: user.flagEmoji || '🇨🇮',
    phoneCode: user.phoneCode || '+225',
    educationSystem: user.educationSystem || 'Système Francophone',
    curriculumAuthority: user.curriculumAuthority || 'Programme Officiel',
    grade: user.grade || 'Terminale',
    serie: user.serie || undefined,
    schoolName: user.schoolName || undefined,
    city: user.city || undefined,
    isRegistered: true,
    registeredAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export async function registerApi(payload: {
  email?: string;
  phoneNumber?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  countryCode?: string;
  flagEmoji?: string;
  phoneCode?: string;
  grade?: string;
  serie?: string;
  schoolName?: string;
  city?: string;
}): Promise<{ user: StudentProfile; token: string }> {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Échec de l'inscription.");
  }

  setStoredToken(data.token);
  return {
    token: data.token,
    user: userToStudentProfile(data.user),
  };
}

export async function loginApi(payload: {
  identifier: string;
  password: string;
}): Promise<{ user: StudentProfile; token: string }> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Échec de l'authentification.");
  }

  setStoredToken(data.token);
  return {
    token: data.token,
    user: userToStudentProfile(data.user),
  };
}

export async function checkMeApi(): Promise<StudentProfile | null> {
  const token = getStoredToken();
  if (!token) return null;

  try {
    const res = await fetch('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      clearStoredToken();
      return null;
    }

    const data = await res.json();
    if (data.success && data.user) {
      return userToStudentProfile(data.user);
    }
    clearStoredToken();
    return null;
  } catch (err) {
    console.error("Erreur vérification session:", err);
    return null;
  }
}

export async function logoutApi(): Promise<void> {
  const token = getStoredToken();
  if (token) {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch {
      // Ignorer les erreurs réseau lors de la déconnexion
    }
  }
  clearStoredToken();
}

export async function updateProfileApi(updates: any): Promise<StudentProfile> {
  const token = getStoredToken();
  if (!token) throw new Error("Vous n'êtes pas connecté.");

  const res = await fetch('/api/auth/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Erreur lors de la mise à jour du profil.");
  }

  return userToStudentProfile(data.user);
}
