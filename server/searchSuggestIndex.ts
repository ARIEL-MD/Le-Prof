/**
 * Index d'autocomplétion pour « Recherche de Cours & Notions ».
 *
 * 100% local, sans IA : construit une seule fois au démarrage du process à
 * partir des contenus déjà présents dans le site (catalogue officiel des
 * cours + notions de philosophie), puis interrogé en mémoire à chaque frappe.
 *
 * Choix d'implémentation : le nombre d'entrées indexées reste modeste
 * (quelques centaines à quelques milliers), donc un tableau trié + recherche
 * binaire pour localiser le début de plage préfixée est largement suffisant
 * et évite une dépendance externe (type Elasticsearch) non justifiée ici.
 * Cette structure reste correcte même si le catalogue grossit ensuite d'un
 * ordre de grandeur.
 */

import { ALL_OFFICIAL_IVORIAN_COURSES } from "../src/data/courses/index";
import { philosophieTleKnowledgeBase } from "../src/data/philosophieTleKnowledgeBase";
import { normalizeAcademicSpellingAndTypos } from "../src/utils/fuzzyMatch";

export interface SearchSuggestion {
  label: string;
  discipline: string;
  level?: string;
}

interface IndexEntry {
  normalized: string;
  suggestion: SearchSuggestion;
}

let sortedIndex: IndexEntry[] | null = null;

function buildIndexOnce(): IndexEntry[] {
  if (sortedIndex) return sortedIndex;

  const seen = new Set<string>();
  const entries: IndexEntry[] = [];

  const addEntry = (label: string, discipline: string, level?: string) => {
    const trimmed = label.trim();
    if (!trimmed || trimmed.length < 3) return;
    const normalized = normalizeAcademicSpellingAndTypos(trimmed);
    const dedupeKey = `${normalized}::${discipline}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    entries.push({ normalized, suggestion: { label: trimmed, discipline, level } });
  };

  // 1. Catalogue officiel des cours (toutes matières et tous niveaux confondus) :
  //    titres de leçon + titres de chapitre.
  for (const course of ALL_OFFICIAL_IVORIAN_COURSES) {
    addEntry(course.lessonTitle, course.disciplineLabel || course.discipline, course.levelLabel || course.level);
    addEntry(course.chapter, course.disciplineLabel || course.discipline, course.levelLabel || course.level);
  }

  // 2. Notions officielles de philosophie (programme Terminale).
  for (const notion of philosophieTleKnowledgeBase.notions as Array<{ name: string }>) {
    addEntry(notion.name, "Philosophie", "Terminale");
  }

  // Tri alphabétique sur la forme normalisée : condition nécessaire à la
  // recherche par préfixe via dichotomie ci-dessous.
  entries.sort((a, b) => (a.normalized < b.normalized ? -1 : a.normalized > b.normalized ? 1 : 0));

  sortedIndex = entries;
  return entries;
}

/** Renvoie l'indice du premier élément dont la forme normalisée est >= prefix. */
function lowerBound(entries: IndexEntry[], prefix: string): number {
  let lo = 0;
  let hi = entries.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (entries[mid].normalized < prefix) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// Petit cache mémoire des préfixes les plus fréquents (ex: "poe", "fonc") :
// évite de refaire la même recherche dichotomique + déduplication pour des
// milliers d'utilisateurs qui tapent la même chose au même moment.
const suggestionCache = new Map<string, SearchSuggestion[]>();
const MAX_SUGGESTION_CACHE_SIZE = 2000;

/**
 * Recherche par préfixe, limitée pour ne jamais surcharger le serveur ni le
 * client (voir item « autocomplétion » du cahier des charges).
 */
export function getSearchSuggestions(rawQuery: string, limit: number = 8): SearchSuggestion[] {
  const trimmed = (rawQuery || "").trim();
  if (trimmed.length < 2) return [];

  const prefix = normalizeAcademicSpellingAndTypos(trimmed);
  const cacheKey = `${prefix}::${limit}`;
  const cached = suggestionCache.get(cacheKey);
  if (cached) {
    // Politique LRU simple : on remonte l'entrée consultée en fin de Map.
    suggestionCache.delete(cacheKey);
    suggestionCache.set(cacheKey, cached);
    return cached;
  }

  const entries = buildIndexOnce();
  const start = lowerBound(entries, prefix);
  const results: SearchSuggestion[] = [];
  const seenLabels = new Set<string>();

  for (let i = start; i < entries.length && results.length < limit; i++) {
    const entry = entries[i];
    if (!entry.normalized.startsWith(prefix)) break; // fin de la plage préfixée (tableau trié)
    if (seenLabels.has(entry.suggestion.label)) continue;
    seenLabels.add(entry.suggestion.label);
    results.push(entry.suggestion);
  }

  if (suggestionCache.size >= MAX_SUGGESTION_CACHE_SIZE) {
    const oldestKey = suggestionCache.keys().next().value;
    if (oldestKey) suggestionCache.delete(oldestKey);
  }
  suggestionCache.set(cacheKey, results);

  return results;
}
