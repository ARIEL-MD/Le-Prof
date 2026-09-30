import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface UserAccount {
  id: string;
  email?: string;
  phoneNumber?: string;
  passwordHash: string;
  salt: string;
  firstName: string;
  lastName: string;
  fullName: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  phoneCode?: string;
  educationSystem?: string;
  curriculumAuthority?: string;
  grade: string;
  serie?: string;
  schoolName?: string;
  city?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SanitizedUser {
  id: string;
  email?: string;
  phoneNumber?: string;
  firstName: string;
  lastName: string;
  fullName: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  phoneCode?: string;
  educationSystem?: string;
  curriculumAuthority?: string;
  grade: string;
  serie?: string;
  schoolName?: string;
  city?: string;
  createdAt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SESSIONS_FILE = path.join(DATA_DIR, "sessions.json");

// In-memory caches for rapid access
let usersCache: UserAccount[] = [];
let sessionsCache: Record<string, string> = {}; // token -> userId

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function loadUsers(): UserAccount[] {
  try {
    ensureDataDir();
    if (fs.existsSync(USERS_FILE)) {
      const content = fs.readFileSync(USERS_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("Erreur lors de la lecture des utilisateurs:", err);
  }
  return [];
}

function saveUsers(users: UserAccount[]) {
  try {
    ensureDataDir();
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
    usersCache = users;
  } catch (err) {
    console.error("Erreur lors de l'enregistrement des utilisateurs:", err);
  }
}

function loadSessions(): Record<string, string> {
  try {
    ensureDataDir();
    if (fs.existsSync(SESSIONS_FILE)) {
      const content = fs.readFileSync(SESSIONS_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("Erreur lors de la lecture des sessions:", err);
  }
  return {};
}

function saveSessions(sessions: Record<string, string>) {
  try {
    ensureDataDir();
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2), "utf-8");
    sessionsCache = sessions;
  } catch (err) {
    console.error("Erreur lors de l'enregistrement des sessions:", err);
  }
}

// Initial load
usersCache = loadUsers();
sessionsCache = loadSessions();

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
}

function sanitizeUser(user: UserAccount): SanitizedUser {
  const { passwordHash, salt, ...safe } = user;
  return safe;
}

function normalizeIdentifier(str?: string): string {
  if (!str) return "";
  return str.trim().toLowerCase().replace(/\s+/g, "");
}

export function registerUser(payload: {
  email?: string;
  phoneNumber?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  countryCode?: string;
  flagEmoji?: string;
  phoneCode?: string;
  educationSystem?: string;
  curriculumAuthority?: string;
  grade?: string;
  serie?: string;
  schoolName?: string;
  city?: string;
}): { user: SanitizedUser; token: string } {
  const normEmail = normalizeIdentifier(payload.email);
  const normPhone = normalizeIdentifier(payload.phoneNumber);

  if (!normEmail && !normPhone) {
    throw new Error("Veuillez renseigner une adresse email ou un numéro de téléphone.");
  }

  if (!payload.password || payload.password.length < 6) {
    throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
  }

  // Check unique identifier
  const existing = usersCache.find((u) => {
    if (normEmail && u.email && normalizeIdentifier(u.email) === normEmail) return true;
    if (normPhone && u.phoneNumber && normalizeIdentifier(u.phoneNumber) === normPhone) return true;
    return false;
  });

  if (existing) {
    if (normEmail && existing.email && normalizeIdentifier(existing.email) === normEmail) {
      throw new Error("Un compte existe déjà avec cette adresse email.");
    }
    throw new Error("Un compte existe déjà avec ce numéro de téléphone.");
  }

  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = hashPassword(payload.password, salt);

  const cleanFirstName = (payload.firstName || "").trim();
  const cleanLastName = (payload.lastName || "").trim();
  const fullName = [cleanLastName.toUpperCase(), cleanFirstName].filter(Boolean).join(" ") || "Élève";

  const newUser: UserAccount = {
    id: `usr_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`,
    email: normEmail || undefined,
    phoneNumber: normPhone || undefined,
    passwordHash,
    salt,
    firstName: cleanFirstName,
    lastName: cleanLastName,
    fullName,
    country: payload.country || "Côte d'Ivoire",
    countryCode: payload.countryCode || "CI",
    flagEmoji: payload.flagEmoji || "🇨🇮",
    phoneCode: payload.phoneCode || "+225",
    educationSystem: payload.educationSystem || "Système Francophone",
    curriculumAuthority: payload.curriculumAuthority || "Programme Officiel",
    grade: payload.grade || "Terminale",
    serie: payload.serie || undefined,
    schoolName: payload.schoolName?.trim() || undefined,
    city: payload.city?.trim() || undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  usersCache.push(newUser);
  saveUsers(usersCache);

  const token = `tok_${crypto.randomBytes(32).toString("hex")}`;
  sessionsCache[token] = newUser.id;
  saveSessions(sessionsCache);

  return { user: sanitizeUser(newUser), token };
}

export function loginUser(payload: {
  identifier: string;
  password: string;
}): { user: SanitizedUser; token: string } {
  const norm = normalizeIdentifier(payload.identifier);
  if (!norm) {
    throw new Error("Veuillez renseigner votre email ou votre numéro de téléphone.");
  }
  if (!payload.password) {
    throw new Error("Veuillez renseigner votre mot de passe.");
  }

  const user = usersCache.find((u) => {
    if (u.email && normalizeIdentifier(u.email) === norm) return true;
    if (u.phoneNumber && normalizeIdentifier(u.phoneNumber) === norm) return true;
    return false;
  });

  if (!user) {
    throw new Error("Identifiant ou mot de passe incorrect.");
  }

  const hash = hashPassword(payload.password, user.salt);
  if (hash !== user.passwordHash) {
    throw new Error("Identifiant ou mot de passe incorrect.");
  }

  const token = `tok_${crypto.randomBytes(32).toString("hex")}`;
  sessionsCache[token] = user.id;
  saveSessions(sessionsCache);

  return { user: sanitizeUser(user), token };
}

export function getUserByToken(token?: string): SanitizedUser | null {
  if (!token) return null;
  const cleanToken = token.replace(/^Bearer\s+/i, "").trim();
  const userId = sessionsCache[cleanToken];
  if (!userId) return null;

  const user = usersCache.find((u) => u.id === userId);
  if (!user) return null;

  return sanitizeUser(user);
}

export function logoutUser(token?: string): boolean {
  if (!token) return false;
  const cleanToken = token.replace(/^Bearer\s+/i, "").trim();
  if (sessionsCache[cleanToken]) {
    delete sessionsCache[cleanToken];
    saveSessions(sessionsCache);
    return true;
  }
  return false;
}

export function updateUserProfile(
  userId: string,
  updates: Partial<Omit<UserAccount, "id" | "passwordHash" | "salt" | "createdAt">> & {
    newPassword?: string;
  }
): SanitizedUser {
  const index = usersCache.findIndex((u) => u.id === userId);
  if (index === -1) {
    throw new Error("Utilisateur introuvable.");
  }

  const user = usersCache[index];

  if (updates.newPassword) {
    if (updates.newPassword.length < 6) {
      throw new Error("Le nouveau mot de passe doit contenir au moins 6 caractères.");
    }
    const newSalt = crypto.randomBytes(16).toString("hex");
    user.salt = newSalt;
    user.passwordHash = hashPassword(updates.newPassword, newSalt);
  }

  if (updates.firstName !== undefined) user.firstName = updates.firstName.trim();
  if (updates.lastName !== undefined) user.lastName = updates.lastName.trim();
  user.fullName = [user.lastName.toUpperCase(), user.firstName].filter(Boolean).join(" ") || "Élève";

  if (updates.country !== undefined) user.country = updates.country;
  if (updates.countryCode !== undefined) user.countryCode = updates.countryCode;
  if (updates.flagEmoji !== undefined) user.flagEmoji = updates.flagEmoji;
  if (updates.grade !== undefined) user.grade = updates.grade;
  if (updates.serie !== undefined) user.serie = updates.serie;
  if (updates.schoolName !== undefined) user.schoolName = updates.schoolName.trim();
  if (updates.city !== undefined) user.city = updates.city.trim();
  if (updates.email !== undefined) user.email = normalizeIdentifier(updates.email) || undefined;
  if (updates.phoneNumber !== undefined) user.phoneNumber = normalizeIdentifier(updates.phoneNumber) || undefined;

  user.updatedAt = new Date().toISOString();
  usersCache[index] = user;
  saveUsers(usersCache);

  return sanitizeUser(user);
}
