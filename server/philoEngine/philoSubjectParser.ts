/**
 * UNIVERSAL PHILOSOPHY SUBJECT ANALYSER
 * -------------------------------------
 * The subject itself is the source of truth. This module deliberately avoids
 * choosing a philosophical problem from a notion-specific template.
 * It extracts the logical operator, propositions/relations and interrogative
 * structure while preserving the exact wording for downstream generation.
 */

export type PhiloModalType =
  | "PEUT_ON" | "FAUT_IL" | "DOIT_ON" | "EST_IL" | "DEPEND_IL"
  | "SUFFIT_IL" | "RENONCER" | "POURQUOI" | "EXCLUT_IL" | "GENERIC";

export interface ParsedSubjectAnalysis {
  modalType: PhiloModalType;
  sujetBrut: string;
  sujetNettoye: string;
  termePrincipal: string;
  termeSecondaire?: string;
  predicatPrincipal: string;
  affirmationDirecte: string;
  interrogationContraire: string;
  problemeCourt: string;
  aspect1: string;
  aspect2: string;
  reformulation: string;
}

const STOP = new Set([
  "quelle","quelles","quels","comment","pourquoi","dans","mesure","peut","peut-on",
  "faut","faut-il","doit","doit-on","est","sont","être","etre","il","elle","on",
  "nous","vous","les","des","une","un","pour","avec","sans","entre","comme",
  "cela","ceci","cette","cette","leur","leurs","qui","que","quoi","dont","pas",
  "plus","moins","ainsi","vraiment","seulement","toujours","jamais","encore"
]);

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/œ/g, "oe");
}

export function cleanPhiloSubject(raw: string): string {
  let s = (raw || "").trim();
  s = s.replace(/^(?:sujet\s*\d*\s*[:\-–]\s*|dissertation\s*[:\-–]\s*|exercice\s*\d*\s*[:\-–]\s*)/i, "");
  s = s.replace(/^[«“\"\s]+|[»”\"\s]+$/g, "").trim();
  s = s.replace(/\s+/g, " ");
  return s.replace(/[?？]+$/, "").trim();
}

export function detectModalType(subject: string): PhiloModalType {
  const s = normalize(subject);
  if (/\bexclut(?:-t)?-(?:il|elle)\b|\bexclut\b|\bincompatible\b|\bsupprime(?:-t)?-(?:il|elle)\b/.test(s)) return "EXCLUT_IL";
  if (/\bdepend(?:-t)?-(?:il|elle)\b|\bdepend-il\b|\bdependre\s+de\b/.test(s)) return "DEPEND_IL";
  if (/\best-ce\s+renoncer\b|\brenoncer\s+[aà]\b/.test(s)) return "RENONCER";
  if (/\bsuffit-il\b|\bsuffit\s+de\b|\best-il\s+suffisant\b/.test(s)) return "SUFFIT_IL";
  if (/^peut-on\b|\best-il\s+possible\b|\bpouvons-nous\b|\bpeut-(?:il|elle)\b|\bpeuvent-ils\b|\bpeuvent-elles\b/.test(s)) return "PEUT_ON";
  if (/^faut-il\b|\best-il\s+necessaire\b|\bfaut-(?:il|elle)\b/.test(s)) return "FAUT_IL";
  if (/^doit-on\b|\bl'homme\s+doit-il\b|\bdoit-(?:il|elle)\b|\bdoivent-ils\b|\bdoivent-elles\b/.test(s)) return "DOIT_ON";
  if (/^pourquoi\b/.test(s)) return "POURQUOI";
  if (/^dans\s+quelle\s+mesure\b|^jusqu'a\s+quel\s+point\b|^en\s+quoi\b|^a\s+quelles\s+conditions\b/.test(s)) return "GENERIC";
  if (/^est-il\b|^est-elle\b|^sont-ils\b|^sont-elles\b|\b(?:est|sont)-t-(?:il|elle|ils|elles)\b|\b[a-zà-ÿ]+(?:-t-il|-t-elle|-il|-elle)\b/.test(s)) return "EST_IL";
  return "GENERIC";
}

/** Preserve the proposition and its actual predicate; never replace it by a notion. */
export function buildAffirmationFromSubject(subject: string): string {
  let s = subject.replace(/\s*\?+\s*$/, "").trim();
  s = s.replace(/^peut-on\s+/i, "on peut ");
  s = s.replace(/^pouvons-nous\s+/i, "nous pouvons ");
  s = s.replace(/^faut-il\s+/i, "il faut ");
  s = s.replace(/^doit-on\s+/i, "on doit ");
  s = s.replace(/^pourquoi\s+/i, "les raisons pour lesquelles ");
  s = s.replace(/^dans\s+quelle\s+mesure\s+/i, "");
  s = s.replace(/^jusqu'à\s+quel\s+point\s+/i, "");
  s = s.replace(/^en\s+quoi\s+/i, "");

  // Generic inversion handling: keeps the lexical predicate instead of a canned one.
  s = s.replace(/\b([a-zà-ÿ]+)-t-(il|elle|ils|elles)\b/gi, "$1");
  s = s.replace(/\b([a-zà-ÿ]+)-(il|elle|ils|elles)\b/gi, "$1");
  s = s.replace(/\s+/g, " ").trim();
  return s ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

/**
 * Extract meaningful lexical anchors from the actual subject. These are used
 * only for validation/relevance, never to select a pre-written philosophical answer.
 */
function extractAnchors(subject: string): string[] {
  const words = normalize(subject)
    .replace(/[^a-z0-9à-ÿ\s'-]/gi, " ")
    .split(/\s+/)
    .map(w => w.replace(/^['’-]+|['’-]+$/g, ""))
    .filter(w => w.length >= 3 && !STOP.has(w))
    .map(w => w.replace(/-t-(?:il|elle|on|ils|elles)$/, ""))
    .filter(w => w.length >= 3 && !STOP.has(w));
  return [...new Set(words)].slice(0, 10);
}

function buildOpposingQuestion(subject: string): string {
  const anchors = extractAnchors(subject);
  if (!anchors.length) {
    return "Toutefois, la réponse initiale ne doit-elle pas être nuancée ?";
  }
  const selected = anchors.slice(0, 4).join(" et ");
  return `Toutefois, le rapport entre ${selected} ne doit-il pas être nuancé ?`;
}

function buildReformulation(subject: string, modal: PhiloModalType): string {
  const exact = `la question « ${subject} »`;
  const mode = modal === "PEUT_ON" ? "la possibilité et ses conditions" :
    modal === "FAUT_IL" || modal === "DOIT_ON" ? "la nécessité, le devoir et leurs limites" :
    modal === "SUFFIT_IL" ? "le caractère suffisant ou non de la condition proposée" :
    modal === "DEPEND_IL" ? "la relation de dépendance réellement posée" :
    modal === "EXCLUT_IL" ? "la compatibilité ou l'incompatibilité réellement posée" :
    modal === "POURQUOI" ? "les raisons et leur portée" :
    "le rapport précis entre les termes et le prédicat du sujet";
  return `Il faut examiner ${exact} en analysant ${mode}, sans réduire le problème à une réflexion générale sur l'une des notions prises isolément.`;
}

export function parseAndAnalyzePhiloSubject(rawSubject: string): ParsedSubjectAnalysis {
  const clean = cleanPhiloSubject(rawSubject);
  if (!clean) throw new Error("Le sujet de philosophie est vide.");
  const modal = detectModalType(clean);
  const affirmation = buildAffirmationFromSubject(clean);
  const anchors = extractAnchors(clean);
  const exact = `${clean} ?`;

  // The exact question is canonical. Every downstream stage can recover it verbatim.
  const problemeCourt = exact;
  const subjectWithoutMeasure = clean.replace(/^(?:dans\s+quelle\s+mesure|jusqu['’]à\s+quel\s+point|en\s+quoi)\s+/i, "").trim();

  // Les aspects prolongent réellement le sujet. Ils ne doivent pas produire
  // des formulations artificielles comme « la réponse directe à La science... ».
  const aspect1 =
    modal === "PEUT_ON"
      ? `Dans quelle mesure la possibilité affirmée par le sujet est-elle fondée ?`
      : modal === "FAUT_IL" || modal === "DOIT_ON"
      ? `Dans quelle mesure la nécessité ou le devoir impliqué par le sujet est-il justifié ?`
      : modal === "SUFFIT_IL"
      ? `Dans quelle mesure la condition posée par le sujet peut-elle suffire à elle seule ?`
      : modal === "DEPEND_IL"
      ? `Dans quelle mesure la relation de dépendance posée par le sujet est-elle fondée ?`
      : modal === "EXCLUT_IL"
      ? `Dans quelle mesure les deux réalités mises en relation par le sujet sont-elles incompatibles ?`
      : modal === "POURQUOI"
      ? `Quelles raisons permettent d'expliquer le phénomène interrogé par le sujet ?`
      : `Dans quelle mesure la relation affirmée par le sujet peut-elle être défendue ?`;

  const aspect2 = buildOpposingQuestion(clean);

  const reformulation = buildReformulation(clean, modal);

  return {
    modalType: modal,
    sujetBrut: rawSubject,
    sujetNettoye: clean,
    termePrincipal: anchors[0] || "",
    termeSecondaire: anchors[1],
    predicatPrincipal: affirmation,
    affirmationDirecte: affirmation,
    interrogationContraire: aspect2,
    problemeCourt,
    aspect1,
    aspect2,
    reformulation,
  };
}
