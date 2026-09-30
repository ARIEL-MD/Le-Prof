/**
 * Catalogue secondaire Fomesoutra — pages Cours + Sujets.
 *
 * Ce fichier n'embarque aucun PDF et ne redistribue aucun document protégé.
 * Il conserve uniquement des métadonnées publiques utiles au routage : niveau,
 * série, matière, type de ressource et intitulé. Fomesoutra est une source
 * pédagogique externe ; ces entrées ne sont pas automatiquement considérées
 * comme des cours officiels ivoiriens.
 */

export type SecondaryResourceKind = 'cours' | 'sujet' | 'corrige' | 'bareme' | 'programme' | 'progression' | 'methodologie' | 'qcm';

export interface FomesoutraSecondaryRecord {
  id: string;
  title: string;
  kind: SecondaryResourceKind;
  level: string;
  series?: string;
  subject?: string;
  keywords: string[];
  sourceUrl: string;
  sourceScope: 'fomesoutra_secondary_catalogue';
}

const BASE = 'https://www.fomesoutra.com';

const levelFolders: Array<[string, string, string]> = [
  ['6e', 'Sixième', `${BASE}/cours/secondaire/6eme`],
  ['5e', 'Cinquième', `${BASE}/cours/secondaire/5eme`],
  ['4e', 'Quatrième', `${BASE}/cours/secondaire/4eme`],
  ['3e', 'Troisième', `${BASE}/cours/secondaire/3eme`],
  ['2nde', 'Seconde', `${BASE}/cours/secondaire/2nd`],
  ['1ere', 'Première', `${BASE}/cours/secondaire/1ere`],
  ['tle', 'Terminale', `${BASE}/cours/secondaire/terminale`],
];

const subjectByLevel: Record<string, string[]> = {
  '6e': ['SVT', 'EDHC', 'Physique-Chimie', 'Mathématiques', 'Histoire-Géographie', 'Français', 'Anglais', 'EPS', 'Arts plastiques', 'Éducation musicale', 'TIC'],
  '5e': ['EDHC', 'SVT', 'Mathématiques', 'Physique-Chimie', 'Histoire-Géographie', 'Anglais', 'Arts plastiques', 'Éducation musicale', 'EPS', 'TIC', 'Français'],
  '4e': ['SVT', 'EDHC', 'Mathématiques', 'Histoire-Géographie', 'Français', 'Allemand', 'Anglais', 'Arts plastiques', 'Éducation musicale', 'EPS', 'Espagnol', 'Physique-Chimie', 'TIC'],
  '3e': ['SVT', 'EDHC', 'Mathématiques', 'Anglais', 'Allemand', 'Espagnol', 'Français', 'Histoire-Géographie', 'Arts plastiques', 'Éducation musicale', 'TIC', 'EPS', 'Physique-Chimie'],
  '2nde': ['Français', 'Mathématiques', 'SVT', 'Physique-Chimie', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'Philosophie', 'Économie', 'Informatique'],
  '1ere': ['Français', 'Mathématiques', 'SVT', 'Physique-Chimie', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'Philosophie', 'Économie', 'Informatique'],
  'tle': ['Français', 'Mathématiques', 'SVT', 'Physique-Chimie', 'Histoire-Géographie', 'Anglais', 'Espagnol', 'Philosophie', 'Économie', 'Comptabilité', 'Informatique', 'Arts plastiques', 'Musique'],
};

const seriesByLevel: Record<string, string[]> = {
  '2nde': ['A', 'C', 'F2', 'G1', 'G2'],
  '1ere': ['A', 'C', 'D', 'G1', 'G2'],
  'tle': ['A', 'C', 'D', 'F2', 'G1', 'G2'],
};

const records: FomesoutraSecondaryRecord[] = [];

for (const [code, label, url] of levelFolders) {
  for (const subject of subjectByLevel[code] || []) {
    records.push({
      id: `course-${code}-${slug(subject)}`,
      title: `Cours ${subject} — ${label}`,
      kind: 'cours',
      level: label,
      subject,
      keywords: [subject, label, code, 'cours', 'secondaire', 'APC'],
      sourceUrl: url,
      sourceScope: 'fomesoutra_secondary_catalogue',
    });
  }
  for (const series of seriesByLevel[code] || []) {
    records.push({
      id: `series-${code}-${series.toLowerCase()}`,
      title: `Cours ${label} série ${series}`,
      kind: 'cours',
      level: label,
      series,
      keywords: [label, series, 'cours', 'secondaire'],
      sourceUrl: url,
      sourceScope: 'fomesoutra_secondary_catalogue',
    });
  }
}

type ExplicitRecord = [string, string, SecondaryResourceKind, string, string | undefined, string | undefined, string[]];
const explicit: ExplicitRecord[] = [
  ['fom-cours-6e-orthographe-grammaire', 'Cours — Exercices et devoirs d’orthographe et grammaire niveau 6e', 'cours', 'Sixième', undefined, 'Français', ['orthographe','grammaire','6e']],
  ['fom-cours-2nde-economie', 'Cours d’économie 2nde', 'cours', 'Seconde', undefined, 'Économie', ['économie','2nde']],
  ['fom-cours-2nde-fr-resume-argu', 'Résumé de texte argumentatif — 2nde Français', 'cours', 'Seconde', 'A', 'Français', ['résumé','texte argumentatif','reformulation','français']],
  ['fom-cours-2nde-fr-figures', 'Figures d’opposition et de construction — 2nde', 'cours', 'Seconde', 'A', 'Français', ['figures de style','opposition','construction']],
  ['fom-cours-2nde-fr-versification', 'Versification : vers, strophes et sonorités — 2nde', 'cours', 'Seconde', 'A', 'Français', ['versification','poésie','sonorités']],
  ['fom-cours-2nde-svt-environnement', 'SVT 2nde A — environnement et alimentation', 'cours', 'Seconde', 'A', 'SVT', ['environnement','alimentation','matière organique']],
  ['fom-cours-2nde-maths-calculs', 'Mathématiques 2nde A — calculs numériques', 'cours', 'Seconde', 'A', 'Mathématiques', ['calculs numériques','mathématiques']],
  ['fom-cours-1ere-maths-fonctions', 'Mathématiques Première — fonctions : généralités', 'cours', 'Première', undefined, 'Mathématiques', ['fonctions','généralités','mathématiques']],
  ['fom-cours-1ere-pc-petrole', 'Physique-Chimie Première — pétrole et gaz naturels', 'cours', 'Première', undefined, 'Physique-Chimie', ['pétrole','gaz naturels','chimie']],
  ['fom-cours-1ere-connecteurs', 'Fonction des connecteurs logiques', 'cours', 'Première', 'A', 'Français', ['connecteurs logiques','argumentation']],
  ['fom-cours-tle-hg', 'Méthodologie, cours et exercices d’Histoire-Géographie Terminale', 'cours', 'Terminale', undefined, 'Histoire-Géographie', ['histoire','géographie','méthodologie','exercices']],
  ['fom-cours-tle-physique', 'Cours de Physique Terminale CDE', 'cours', 'Terminale', undefined, 'Physique', ['physique','terminale']],
  ['fom-cours-tle-chimie', 'Cours de Chimie Terminale C et D', 'cours', 'Terminale', undefined, 'Chimie', ['chimie','terminale']],
  ['fom-cours-tle-info', 'Cours d’Informatique TICE Terminale CDE', 'cours', 'Terminale', undefined, 'Informatique', ['informatique','TICE','terminale']],
  ['fom-cours-tle-geographie', 'Cours de Géographie Terminale', 'cours', 'Terminale', undefined, 'Géographie', ['géographie','terminale']],
  ['fom-cours-tle-svt-reproduction', 'SVT Terminale — reproduction humaine', 'cours', 'Terminale', undefined, 'SVT', ['reproduction humaine','SVT']],
  ['fom-method-tle-dissert-lit', 'Démarches pour réussir une dissertation littéraire', 'methodologie', 'Terminale', undefined, 'Français', ['dissertation','littérature','méthodologie']],
  ['fom-method-tle-resume', 'Le résumé de texte — méthode', 'methodologie', 'Terminale', undefined, 'Français', ['résumé','contraction','méthode']],
  ['fom-method-tle-dissert-hist', 'Méthode de la dissertation en Histoire', 'methodologie', 'Terminale', undefined, 'Histoire', ['dissertation','histoire','méthode']],
  ['fom-method-tle-dissert-geo', 'Méthode de la dissertation en Géographie', 'methodologie', 'Terminale', undefined, 'Géographie', ['dissertation','géographie','méthode']],
  ['fom-programmes-tle-hg', 'Programmes Histoire-Géographie Terminale A-B-C-D', 'programme', 'Terminale', undefined, 'Histoire-Géographie', ['programmes','histoire','géographie']],
  ['fom-cours-secondaire-progressions', 'Progressions du secondaire', 'progression', 'Secondaire', undefined, undefined, ['progressions','secondaire']],
  ['fom-cours-secondaire-programmes', 'Programmes éducatifs et guides d’exécution du secondaire', 'programme', 'Secondaire', undefined, undefined, ['programmes éducatifs','guides d’exécution']],
  ['fom-cours-secondaire-eps', 'Cours et exercices EPS du secondaire', 'cours', 'Secondaire', undefined, 'EPS', ['EPS','éducation physique','exercices']],
  ['fom-cours-secondaire-info', 'Cours d’informatique lycée et collège', 'cours', 'Secondaire', undefined, 'Informatique', ['informatique','TIC','collège','lycée']],
];

for (const [id,title,kind,level,series,subject,keywords] of explicit) {
  records.push({ id, title, kind, level, series, subject, keywords, sourceUrl: `${BASE}/cours/secondaire`, sourceScope: 'fomesoutra_secondary_catalogue' });
}

const subjectAliases: Record<string,string[]> = {
  'mathématiques': ['maths','mathematiques','mathématique'],
  'physique-chimie': ['physique','chimie','pc'],
  'histoire-géographie': ['histoire','géographie','hg'],
  'français': ['francais','littérature','grammaire'],
  'éducation musicale': ['musique'],
  'arts plastiques': ['art plastique','arts'],
  'éducation physique et sportive': ['eps','sport'],
  'technologie': ['tic','informatique','technologie'],
};

function slug(value: string): string {
  return normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function normalize(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export const FOMESOUTRA_SECONDARY_CATALOG: FomesoutraSecondaryRecord[] = dedupe(records);

function dedupe(items: FomesoutraSecondaryRecord[]): FomesoutraSecondaryRecord[] {
  const seen = new Set<string>();
  return items.filter(item => {
    const key = `${item.level}|${item.series || ''}|${item.subject || ''}|${normalize(item.title)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function searchFomesoutraSecondary(query: string, limit = 20): FomesoutraSecondaryRecord[] {
  const q = normalize(query).trim();
  if (!q) return [];
  const expanded = [q, ...Object.entries(subjectAliases).flatMap(([canonical, aliases]) => aliases.some(a => q.includes(a)) ? [canonical] : [])];
  const tokens = [...new Set(expanded.flatMap(v => v.split(/\s+/).filter(Boolean)))];
  return FOMESOUTRA_SECONDARY_CATALOG
    .map(item => {
      const haystack = normalize([item.title, item.level, item.series || '', item.subject || '', ...item.keywords].join(' '));
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? (token.length >= 6 ? 2 : 1) : 0), 0)
        + (haystack.includes(q) ? 6 : 0);
      return { item, score };
    })
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(x => x.item);
}

export const FOMESOUTRA_SECONDARY_CATALOG_COUNT = FOMESOUTRA_SECONDARY_CATALOG.length;
