/**
 * Catalogue documentaire Fomesoutra — index de livres/fascicules visibles sur la page Livres.
 *
 * Aucun PDF n'est copié ni redistribué ici. Le catalogue mémorise seulement des
 * métadonnées publiques utiles au routage documentaire : titre, matière, niveau,
 * type de ressource et mots-clés. Fomesoutra est une source pédagogique externe,
 * pas un référentiel ministériel officiel.
 */

export type FomesoutraBookSubject =
  | 'français' | 'mathématiques' | 'philosophie' | 'anglais' | 'espagnol'
  | 'physique-chimie' | 'svt' | 'histoire-géographie' | 'grammaire'
  | 'pluridisciplinaire' | 'autre';

export interface FomesoutraBookRecord {
  id: string;
  title: string;
  subject: FomesoutraBookSubject;
  levels: string[];
  resourceType: 'cours' | 'annales' | 'exercices' | 'corriges' | 'fascicule' | 'resume' | 'methodologie' | 'manuel';
  keywords: string[];
  sourceScope: 'fomesoutra_catalogue';
}

type RawBook = [string, string, FomesoutraBookSubject, string[], FomesoutraBookRecord['resourceType'], string[]];
const raw: RawBook[] = [
  ['ann-fr-tle-a', 'Annales français Terminale A', 'français', ['Terminale A'], 'annales', ['bac','français','annales']],
  ['ann-philo-tle-a', 'Annales de Philosophie niveau Terminale A', 'philosophie', ['Terminale A'], 'annales', ['bac','philosophie','annales']],
  ['ann-ang-tle-cd', "Annales d'Anglais niveau Terminale C et D", 'anglais', ['Terminale C','Terminale D'], 'annales', ['anglais','bac','annales']],
  ['ciam-tle-sm', 'CIAM Terminale SM', 'mathématiques', ['Terminale'], 'manuel', ['mathématiques','ciam','terminale']],
  ['ciam-tle-l', 'CIAM Terminale Littéraire', 'mathématiques', ['Terminale'], 'manuel', ['mathématiques','ciam','littéraire']],
  ['corrige-ciam', 'Corrigé des exercices d’apprentissage contenus dans CIAM 2eme édition', 'mathématiques', ['Terminale'], 'corriges', ['mathématiques','corrigés','ciam','exercices']],
  ['chimie-tle', 'La Chimie en Terminale', 'physique-chimie', ['Terminale'], 'cours', ['chimie','terminale']],
  ['maths-ciam-l', 'Livre de Maths Collection CIAM Terminale Littéraire', 'mathématiques', ['Terminale'], 'manuel', ['mathématiques','terminale','ciam']],
  ['vers-bac-maths-corr', 'Corrigés Vers le BAC Mathématiques', 'mathématiques', ['Terminale'], 'corriges', ['mathématiques','bac','corrigés']],
  ['pc-tle-s', 'Fascicule de Physique Chimie Terminale S', 'physique-chimie', ['Terminale S'], 'fascicule', ['physique','chimie','terminale']],
  ['math-bac-d', 'Annale de Mathématiques pour le BAC D', 'mathématiques', ['Terminale D'], 'annales', ['mathématiques','bac D']],
  ['pc-bac-d', 'Annales de Sciences Physiques niveau Terminale D', 'physique-chimie', ['Terminale D'], 'annales', ['physique','chimie','bac D']],
  ['spm-maths', 'Collection SPM - Mathématiques niveau Terminale C E', 'mathématiques', ['Terminale C','Terminale E'], 'manuel', ['mathématiques','terminale']],
  ['coach-maths-c', 'Le Coach - Mathématiques Terminale C', 'mathématiques', ['Terminale C'], 'cours', ['mathématiques','terminale C']],
  ['vers-bac-analyse', 'Vers le BAC Mathématiques (Analyse) Tome 1', 'mathématiques', ['Terminale'], 'fascicule', ['analyse','mathématiques','bac']],
  ['vers-bac-geo-proba-stat', 'Vers le BAC Mathématiques (Géométries - Probabilités - Statistiques) Tome 2', 'mathématiques', ['Terminale'], 'fascicule', ['géométrie','probabilités','statistiques','mathématiques']],
  ['prepa-bac-maths-2021', 'PREPA BAC Mathématiques 2021', 'mathématiques', ['Terminale'], 'fascicule', ['bac','mathématiques','préparation']],
  ['pc-apc-cd', 'Fascicule de Physique-Chimie BAC APC Terminale C et D 2019-2020', 'physique-chimie', ['Terminale C','Terminale D'], 'fascicule', ['physique','chimie','APC','bac']],
  ['physique-tle-s', 'Physique Tle S', 'physique-chimie', ['Terminale S'], 'cours', ['physique','terminale S']],
  ['pc-tle-d', 'Physique & Chimie Tle série D', 'physique-chimie', ['Terminale D'], 'cours', ['physique','chimie','terminale D']],
  ['secret-fr-bac', 'Secret Français BAC (Pour réussir l’épreuve de Français au BAC)', 'français', ['Terminale'], 'methodologie', ['français','bac','dissertation','épreuve']],
  ['math-pratiques-d', 'Maths-Pratiques Terminale D', 'mathématiques', ['Terminale D'], 'exercices', ['mathématiques','exercices','terminale D']],
  ['top-chrono-c', 'Top Chrono Maths Tle C By Tehua', 'mathématiques', ['Terminale C'], 'exercices', ['mathématiques','exercices','bac']],
  ['top-chrono-d', 'Top chrono Maths Tle D By Tehua', 'mathématiques', ['Terminale D'], 'exercices', ['mathématiques','exercices','bac']],
  ['resume-maths-bac', 'RÉSUMÉ Maths Bac By Tehua', 'mathématiques', ['Terminale'], 'resume', ['mathématiques','résumé','bac']],
  ['resume-oeuvres-tehua', "Resumé d'oeuvres littéraires By Tehua", 'français', ['Terminale'], 'resume', ['littérature','œuvres','résumés']],
  ['meilleur-doc-pc', 'Meilleur Doc Tle S Alpha physique chimie By Tehua', 'physique-chimie', ['Terminale S'], 'cours', ['physique','chimie']],
  ['corro-dissertation-hg', 'Corro dissertation HG Tle By M.Tehua', 'histoire-géographie', ['Terminale'], 'corriges', ['histoire','géographie','dissertation','bac']],
  ['pakao-hg-2020', 'Pakao Histoire Géographie 2020 by M.Tehua', 'histoire-géographie', ['Terminale'], 'cours', ['histoire','géographie']],
  ['aide-dissertation-tle', 'Aide Dissertation Tle by M.Tehua', 'français', ['Terminale'], 'methodologie', ['dissertation','français','méthode']],
  ['cours-fr-gener', 'Cours de Français généralisé By Tehua', 'français', ['Terminale'], 'cours', ['français','cours','littérature','grammaire']],
  ['anal-maths-d', 'Anal Maths Tle D By Tehua', 'mathématiques', ['Terminale D'], 'cours', ['analyse','mathématiques']],
  ['fascicule-maths-d', 'Fascicule Maths Tle D Lyma By Tehua', 'mathématiques', ['Terminale D'], 'fascicule', ['mathématiques','terminale D']],
  ['farahead-teachersbook', 'FarAhead TeachersBookTle By Tehua', 'anglais', ['Terminale'], 'manuel', ['anglais','teachers book']],
  ['resume-maths-bac-2', 'RÉSUMÉ Maths Bac By Tehua', 'mathématiques', ['Terminale'], 'resume', ['mathématiques','bac']],
  ['document-philo-top', 'Document de philo Tle sujets corrigés top by Tehua', 'philosophie', ['Terminale'], 'corriges', ['philosophie','sujets','corrigés']],
  ['repbac-mixte', 'REPBAC Bac A Philo, Fran, Angl, HG by TEHUA', 'pluridisciplinaire', ['Terminale A'], 'annales', ['bac A','philosophie','français','anglais','histoire-géographie']],
  ['espagnol-bac', 'LIVRE Espagnol Fascicule BAC Espagnol BY TEHUA', 'espagnol', ['Terminale'], 'fascicule', ['espagnol','bac']],
  ['recueil-tle-d', 'RECUEIL ÉPREUVES TERMINALE D TRIM 1 2022 2023 By Tehua', 'pluridisciplinaire', ['Terminale D'], 'annales', ['épreuves','terminale D']],
  ['recueil-tle-c', 'RECUEIL ÉPREUVES TERMINALE C TRIM 1 2022 2023 By Tehua', 'pluridisciplinaire', ['Terminale C'], 'annales', ['épreuves','terminale C']],
  ['recueil-tle-a', 'RECUEIL ÉPREUVES TERMINALE A TRIM 1 2022 2023 By Tehua', 'pluridisciplinaire', ['Terminale A'], 'annales', ['épreuves','terminale A']],
  ['fascicule-mpc-svt-d', 'Fascicule Maths, pc et svt Tle D by Tehua', 'pluridisciplinaire', ['Terminale D'], 'fascicule', ['mathématiques','physique-chimie','svt']],
  ['tigp-c', "TIGp's RECUEIL Tle C Vac2022 by Tehua", 'pluridisciplinaire', ['Terminale C'], 'annales', ['épreuves','vacances','terminale C']],
  ['tigp-d', "TIGp's RECUEIL Tle D Vac2022 by Tehua", 'pluridisciplinaire', ['Terminale D'], 'annales', ['épreuves','vacances','terminale D']],
  ['situations-complexes-a', 'Situations complexes VALLESSE Tle A', 'pluridisciplinaire', ['Terminale A'], 'exercices', ['situations complexes','terminale A']],
  ['fascicule-chimie-s', 'Fascicule de Chimie Terminale S', 'physique-chimie', ['Terminale S'], 'fascicule', ['chimie','terminale S']],
  ['document-physique-wahab', 'Document de Physique (Wahab Diop) Terminales S1 & S2', 'physique-chimie', ['Terminale S1','Terminale S2'], 'cours', ['physique','terminale']],
  ['document-chimie-wahab', 'Document de Chimie (Wahab Diop) Terminales S1-S2', 'physique-chimie', ['Terminale S1','Terminale S2'], 'cours', ['chimie','terminale']],
  ['figures-styles', 'EXPOSE FIGURES DE STYLES by Tehua', 'français', ['Secondaire'], 'cours', ['figures de style','français']],
  ['formules-maths', 'FORMULES MATHÉMATIQUES by M.Tehua', 'mathématiques', ['Secondaire'], 'resume', ['formules','mathématiques']],
  ['point-maths', 'LE POINT - MATHEMATIQUES - Terminales B, A1, A2', 'mathématiques', ['Terminale B','Terminale A1','Terminale A2'], 'cours', ['mathématiques','terminale']],
  ['bac-blanc-svt-dabou', 'Bac blanc svt dabou', 'svt', ['Terminale'], 'annales', ['svt','bac blanc']],
  ['bled-espagnol', 'Bled Espagnol', 'espagnol', ['Secondaire'], 'manuel', ['espagnol','grammaire']],
  ['secret-fr-6e', 'Secret Français 6eme', 'français', ['6e'], 'cours', ['français','6e']],
  ['secret-fr-4e', 'Secret Français 4eme', 'français', ['4e'], 'cours', ['français','4e']],
  ['regles-orthographe', 'Les 40 règles de base de l’orthographe française', 'grammaire', ['Secondaire'], 'cours', ['orthographe','français','grammaire']],
  ['passeport-bac', 'Passeport pour le BAC - Philosophie et Français', 'pluridisciplinaire', ['Terminale'], 'methodologie', ['philosophie','français','bac']],
  ['lexique-geo', 'Lexique de Géographie', 'histoire-géographie', ['Secondaire'], 'cours', ['géographie','lexique']],
  ['commentaire-litt', 'Le Commentaire littéraire et l’explication de texte', 'français', ['Secondaire'], 'methodologie', ['commentaire','explication de texte','français']],
  ['grammaire-analyse', 'Grammaire et Analyse (analyse grammaticale et analyse logique)', 'grammaire', ['Secondaire'], 'cours', ['grammaire','analyse grammaticale','analyse logique']],
  ['probabilites-60', 'PROBABILITES 60 AFFAIRES CLASSEES', 'mathématiques', ['Supérieur'], 'exercices', ['probabilités','exercices']],
  ['algebre-exercices', 'Cours d’Algèbre I et II avec Exercices Corrigés', 'mathématiques', ['Supérieur'], 'cours', ['algèbre','exercices corrigés']],
  ['analyse-3-ensa', 'Cours d’ Analyse 3 - ENSA', 'mathématiques', ['Supérieur'], 'cours', ['analyse','enseignement supérieur']],
  ['mecanique-rationnelle', 'Mécanique Rationnelle - Akadi', 'physique-chimie', ['Supérieur'], 'cours', ['mécanique','physique']],
  ['mecanique-solide', 'Mecanique du Solide Applications Industrielles', 'physique-chimie', ['Supérieur'], 'cours', ['mécanique','solide','applications industrielles']],
];

export const FOMESOUTRA_BOOKS: FomesoutraBookRecord[] = raw.map(([id,title,subject,levels,resourceType,keywords]) => ({
  id, title, subject, levels, resourceType, keywords, sourceScope: 'fomesoutra_catalogue'
}));

function normalize(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export function searchFomesoutraBooks(query: string, limit = 12): FomesoutraBookRecord[] {
  const q = normalize(query).trim();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  return FOMESOUTRA_BOOKS
    .map(item => {
      const haystack = normalize([item.title, item.subject, ...item.levels, ...item.keywords].join(' '));
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { item, score };
    })
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(x => x.item);
}

export const FOMESOUTRA_BOOK_COUNT = FOMESOUTRA_BOOKS.length;
