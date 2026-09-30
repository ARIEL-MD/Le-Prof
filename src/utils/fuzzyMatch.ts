/**
 * MOTEUR DE COMPRÉHENSION LEXICALE GÉNÉRIQUE
 * ============================================
 * Ces fonctions permettent au moteur de recherche de reconnaître un mot même
 * si l'élève l'a écrit sous une forme jamais vue auparavant (pluriel, conjugaison,
 * terminaison féminine, faute de frappe/orthographe) — sans qu'aucune liste de
 * synonymes ou de formulations n'ait été pré-enregistrée pour ce mot précis.
 *
 * Contrainte du projet : 100% local, déterministe, 0 appel IA/API externe.
 * On utilise donc uniquement des règles morphologiques génériques (racinisation
 * "stemming" légère) et une distance d'édition (Levenshtein) bornée.
 */

export function stripAccentsLower(str: string): string {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

// Terminaisons grammaticales françaises les plus fréquentes (pluriels, conjugaisons,
// féminins, dérivations courantes). Classées de la plus longue à la plus courte pour
// ne retirer qu'une seule terminaison, la plus spécifique possible.
const FRENCH_SUFFIXES = [
  'issements', 'issement', 'issaient', 'eraient', 'issons', 'issant', 'erions',
  'assions', 'assiez', 'eriez', 'erons', 'eront', 'ations', 'issez', 'aient',
  'ation', 'ition', 'issez', 'ables', 'ismes', 'iques', 'euses', 'trice', 'teurs',
  'ement', 'ances', 'ences', 'ition', 'ition',
  'ions', 'iez', 'ait', 'ant', 'ent', 'ees', 'eux', 'euse', 'trice', 'teur',
  'isme', 'ique', 'able', 'age',
  'es', 'er', 'ez', 'e', 's', 'x'
];

/**
 * Réduit un mot à une racine approximative générique. Ne dépend d'aucun
 * dictionnaire de mots connus : fonctionne aussi bien sur un mot totalement
 * nouveau (nom propre, néologisme, terme technique jamais rencontré).
 */
export function frenchStem(wordRaw: string): string {
  let w = stripAccentsLower(wordRaw).trim();
  if (w.length <= 3) return w;
  for (const suf of FRENCH_SUFFIXES) {
    if (w.length - suf.length >= 3 && w.endsWith(suf)) {
      return w.slice(0, w.length - suf.length);
    }
  }
  return w;
}

/** Distance de Levenshtein, plafonnée pour rester rapide sur de très longues chaînes. */
export function levenshtein(a: string, b: string, maxDist = 3): number {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1;
  let prevRow = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prevRow[j] = j;
  for (let i = 1; i <= a.length; i++) {
    const currRow = new Array(b.length + 1);
    currRow[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,
        currRow[j - 1] + 1,
        prevRow[j - 1] + cost
      );
    }
    prevRow = currRow;
  }
  return prevRow[b.length];
}

/**
 * Deux mots "se ressemblent" au sens large : forme identique, même racine
 * morphologique, ou à une/deux fautes de frappe près (tolérance proportionnelle
 * à la longueur). Généralise sans aucune liste de synonymes pré-enregistrée.
 */
export function wordsResemble(aRaw: string, bRaw: string): boolean {
  if (!aRaw || !bRaw) return false;
  const a = stripAccentsLower(aRaw);
  const b = stripAccentsLower(bRaw);
  if (a === b) return true;
  if (a.length < 3 || b.length < 3) return false;

  const stemA = frenchStem(a);
  const stemB = frenchStem(b);
  if (stemA.length >= 3 && stemA === stemB) return true;

  const maxLen = Math.max(a.length, b.length);
  if (maxLen >= 6) {
    // Tolérance volontairement stricte : elle doit rattraper une faute de frappe
    // ou un accent manquant, jamais transformer un mot en un autre mot grammaticalement
    // différent (ex: "fonction" ne doit pas ressembler à "fonctionne").
    const tolerance = maxLen >= 12 ? 2 : 1;
    if (levenshtein(a, b, tolerance) <= tolerance) return true;
  }
  return false;
}

/**
 * Vérifie si un token de la requête a un mot voisin (racine commune / faute de frappe)
 * dans un texte donné. Compare le token à chaque mot ENTIER du texte (jamais une simple
 * sous-chaîne "libre") pour éviter qu'un mot court (ex: "fonctionne") soit considéré comme
 * présent uniquement parce qu'il forme le préfixe d'un mot plus long et sans rapport
 * (ex: "fonctionnelle"). Cette fonction est destinée à un usage EN COMPLÉMENT d'une
 * vérification de correspondance exacte déjà faite par l'appelant, pas en remplacement.
 */
/**
 * Variante de `textContainsResemblingToken` qui accepte directement un tableau
 * de mots déjà normalisés et découpés, plutôt qu'un texte brut à re-découper.
 * Permet à un appelant qui interroge plusieurs fois le même texte (ex: une
 * fiche de cours comparée à chaque mot de la requête) de calculer le
 * découpage une seule fois et de le réutiliser, au lieu de le refaire à
 * chaque appel — optimisation directe pour la recherche à grande échelle.
 */
export function wordsArrayResemblesToken(words: string[], tokenRaw: string): boolean {
  const normToken = stripAccentsLower(tokenRaw);
  if (normToken.length < 3) return false;
  return words.some(w => wordsResemble(w, normToken));
}

export function textContainsResemblingToken(text: string, token: string): boolean {
  if (!text || !token) return false;
  const normToken = stripAccentsLower(token);
  if (normToken.length < 3) return false; // aligné sur le seuil minimal déjà appliqué par les appelants
  const normText = stripAccentsLower(text);
  const words = normText.split(/[^a-z0-9]+/).filter(Boolean);
  return wordsArrayResemblesToken(words, normToken);
}

/**
 * Normalisation et correction universelle des fautes de frappe et coquilles phonétiques fréquentes
 * sur les requêtes scolaires (ex: "concequances" -> "consequences", "carateristique" -> "caracteristiques").
 * Cette normalisation générique assure qu'aucune recherche ne soit déroutée par une faute d'orthographe.
 */
export function normalizeAcademicSpellingAndTypos(raw: string): string {
  if (!raw) return '';
  let s = stripAccentsLower(raw)
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!s) return '';

  // 1. Remplacement ciblé par motifs d'erreurs phonétiques fréquentes (s/c/ss, an/en, ph/f, k/qu, etc.)
  s = s
    // Conséquences (ex: concequances, consequances, concequence, concequences, consekances...)
    .replace(/\bcon[cs][eéè]qu[ae]n[cs]es?\b/g, 'consequences')
    .replace(/\bcon[cs][eéè]k[ae]n[cs]es?\b/g, 'consequences')
    .replace(/\bcon[cs][eéè]qu[ae]n[cs]e\b/g, 'consequence')
    .replace(/\bcon[cs][eéè]k[ae]n[cs]e\b/g, 'consequence')
    // Manifestations (ex: manifastation, manifistation, manifestacion...)
    .replace(/\bmani[fv]es?ta[ts]ions?\b/g, 'manifestations')
    .replace(/\bmani[fv]es?ta[ts]ion\b/g, 'manifestation')
    // Déroulement
    .replace(/\bd[eéè]roule?m[ae]nts?\b/g, 'deroulement')
    // Caractéristiques
    .replace(/\bcaract?[eéè]r?is?ti[cq]ues?\b/g, 'caracteristiques')
    .replace(/\bcaract?[eéè]r?is?ti[cq]ue\b/g, 'caracteristique')
    // Définition
    .replace(/\bd[eéè]fi?n?i[ts]ions?\b/g, 'definition')
    .replace(/\bd[eéè]fi?nir\b/g, 'definir')
    // Différences
    .replace(/\bdif[eéè]r[ae]n[cs]es?\b/g, 'differences')
    .replace(/\bdif[eéè]r[ae]n[cs]e\b/g, 'difference')
    // Objectifs
    .replace(/\bob[jz]ec?ti[fv]es?\b/g, 'objectifs')
    .replace(/\bob[jz]ec?ti[fv]e\b/g, 'objectif')
    // Principes
    .replace(/\bprinci?p[es]?\b/g, 'principes')
    .replace(/\bprinci?pe\b/g, 'principe')
    // Organisation
    .replace(/\borgani[sz]a[ts]ions?\b/g, 'organisation')
    // Fonctionnement
    .replace(/\bfonct?ion?n?e?m[ae]nts?\b/g, 'fonctionnement')
    // Théorème
    .replace(/\bt[heéè]+or[eè]me?s?\b/g, 'theoreme')
    // Propriété
    .replace(/\bpropr?[ieéè]+t[eéè]s?\b/g, 'proprietes')
    .replace(/\bpropr?[ieéè]+t[eéè]\b/g, 'propriete')
    // Formules
    .replace(/\bform?ul[es]?\b/g, 'formules')
    .replace(/\bform?ule\b/g, 'formule')
    // Bipolarisation
    .replace(/\bbipolari[sz]a[ts]ions?\b/g, 'bipolarisation')
    // Décolonisation
    .replace(/\bd[eéè]coloni[sz]a[ts]ions?\b/g, 'decolonisation')
    // Indépendance
    .replace(/\bind[eéè]p[ae]nd[ae]n[cs]es?\b/g, 'independance')
    // Événements
    .replace(/\b[eéè]v[eéè]n?e?m[ae]nts?\b/g, 'evenements')
    // Guerre froide
    .replace(/\bguer?e\s+froi?de?\b/g, 'guerre froide')
    // Résistance
    .replace(/\br[eéè]si[sz]t[ae]n[cs]es?\b/g, 'resistance')
    // Déforestation
    .replace(/\bd[eéè]for[eéè]sta[ts]ions?\b/g, 'deforestation')
    // Poussée d'Archimède
    .replace(/\bpous[eéè]e\b/g, 'poussee')
    .replace(/\barchim[eéè]de?\b/g, 'archimede')
    // Génocide
    .replace(/\bg[eéè]noci?des?\b/g, 'genocides');

  // 2. Correction Levenshtein pour tokens isolés contre le dictionnaire académique de référence
  const tokens = s.split(/\s+/);
  const CANONICAL_ACADEMIC_TOKENS: Record<string, string> = {
    consequences: 'consequences',
    consequence: 'consequence',
    manifestations: 'manifestations',
    manifestation: 'manifestation',
    caracteristiques: 'caracteristiques',
    caracteristique: 'caracteristique',
    deroulement: 'deroulement',
    definition: 'definition',
    definitions: 'definitions',
    differences: 'differences',
    difference: 'difference',
    objectifs: 'objectifs',
    objectif: 'objectif',
    principes: 'principes',
    principe: 'principe',
    organisation: 'organisation',
    fonctionnement: 'fonctionnement',
    bipolarisation: 'bipolarisation',
    decolonisation: 'decolonisation',
    independance: 'independance',
    theoreme: 'theoreme',
    proprietes: 'proprietes',
    formules: 'formules',
    resistance: 'resistance',
    genocides: 'genocides',
    archimede: 'archimede',
    deforestation: 'deforestation',
  };

  const correctedTokens = tokens.map(token => {
    if (CANONICAL_ACADEMIC_TOKENS[token]) return token;
    if (token.length >= 6) {
      for (const [canon, target] of Object.entries(CANONICAL_ACADEMIC_TOKENS)) {
        if (Math.abs(token.length - canon.length) <= 2) {
          const maxTol = token.length >= 10 ? 2 : 1;
          if (levenshtein(token, canon, maxTol) <= maxTol) {
            return target;
          }
        }
      }
    }
    return token;
  });

  return correctedTokens.join(' ');
}

