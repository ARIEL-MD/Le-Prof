import { ParsedExercise, ParsedQuestion, StatementParsingResult, MathProblemAnalysis } from './types';
import { routeUniversalExercise } from './universalExerciseRouter';

const UNICODE_SUB_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', '₌': '=', '₍': '(', '₎': ')',
  'ₐ': 'a', 'ₑ': 'e', 'ₕ': 'h', 'ᵢ': 'i', 'ⱼ': 'j',
  'ₖ': 'k', 'ₗ': 'l', 'ₘ': 'm', 'ₙ': 'n', 'ₒ': 'o',
  'ₚ': 'p', 'ᵣ': 'r', 'ₛ': 's', 'ₜ': 't', 'ᵤ': 'u', 'ᵥ': 'v', 'ₓ': 'x',
};

const UNICODE_SUP_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', '⁼': '=', '⁽': '(', '⁾': ')',
  'ⁿ': 'n', 'ⁱ': 'i',
};

const UNICODE_FRAC_MAP: Record<string, string> = {
  '½': '(1/2)', '⅓': '(1/3)', '⅔': '(2/3)', '¼': '(1/4)', '¾': '(3/4)',
  '⅕': '(1/5)', '⅖': '(2/5)', '⅗': '(3/5)', '⅘': '(4/5)',
  '⅙': '(1/6)', '⅚': '(5/6)', '⅛': '(1/8)', '⅜': '(3/8)', '⅝': '(5/8)', '⅞': '(7/8)'
};

/**
 * Nettoie et normalise la typographie d'un énoncé sans perdre d'information.
 */
export function cleanAndNormalizeStatement(raw: string): string {
  if (!raw) return '';
  let s = raw
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[−–—]/g, '-')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/[«»“”]/g, '"')
    .replace(/[’‘]/g, "'")
    .replace(/[′‵]/g, "'")
    .replace(/\\mathbb\{R\}/g, 'ℝ')
    .replace(/\\mathbb\{N\}/g, 'ℕ')
    .replace(/\\mathbb\{Z\}/g, 'ℤ')
    .replace(/\\mathbb\{C\}/g, 'ℂ')
    .replace(/\\infty/g, '+\\infty')
    .replace(/\+\+\\infty/g, '+\\infty')
    .replace(/--\\infty/g, '-\\infty');

  // Canonicaliser les formes LaTeX usuelles vers une notation exploitable par les
  // solveurs déterministes. On reste volontairement conservateur : seules les
  // fractions et racines dont les accolades sont équilibrées sont transformées.
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)');
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)');
  s = s.replace(/\\left\s*/g, '').replace(/\\right\s*/g, '');

  // Normaliser les fractions Unicode (½ -> (1/2), ¼ -> (1/4)...)
  for (const [frac, repl] of Object.entries(UNICODE_FRAC_MAP)) {
    s = s.replaceAll(frac, repl);
  }

  // Normaliser les indices Unicode attachés à des identifiants (U₀ -> U_0, Uₙ₊₁ -> U_{n+1}, Uₙ -> U_n)
  s = s.replace(/([a-zA-Z])([₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ]+)/g, (_, letter, subs) => {
    const converted = Array.from(subs as string).map(c => UNICODE_SUB_MAP[c] || c).join('');
    return converted.length > 1 ? `${letter}_{${converted}}` : `${letter}_${converted}`;
  });

  // Normaliser les exposants Unicode (x² -> x^2, x³ -> x^3, eⁿ -> e^n)
  s = s.replace(/([a-zA-Z0-9\)])([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿⁱ]+)/g, (_, base, sups) => {
    const converted = Array.from(sups as string).map(c => UNICODE_SUP_MAP[c] || c).join('');
    return `${base}^${converted}`;
  });
  s = s.replace(/²/g, '^2').replace(/³/g, '^3');

  // Convertir la multiplication implicite entre fraction et variable (ex: (1/2)U_n ou 1/2 U_n -> (1/2)*U_n)
  s = s.replace(/(\(\d+\/\d+\)|\b\d+\/\d+)\s*([a-zA-Z])/g, '$1*$2');

  // Remplacer les délimiteurs mathématiques LaTeX superflus ($$, $, \(, \)) tout en conservant le contenu
  s = s.replace(/\$\$/g, ' ');
  s = s.replace(/\\\(/g, ' ');
  s = s.replace(/\\\)/g, ' ');
  s = s.replace(/\\\[/g, ' ');
  s = s.replace(/\\\]/g, ' ');

  return s.trim();
}


// Détection des éléments visuels convertis en texte (OCR enrichi)
function detectVisualContext(text: string): string[] {
  const lower=text.toLowerCase();
  const hints:string[]=[];
  const rules:[RegExp,string][]=[
    [/(triangle|abc)/i,'triangle'],
    [/(cercle|rayon|diam[èe]tre)/i,'circle'],
    [/(rep[èe]re|coordonn[ée]es|abscisse|ordonn[ée]e)/i,'coordinate_system'],
    [/(tableau|effectif|fr[ée]quence)/i,'table'],
    [/(pyramide|cube|cylindre|c[ôo]ne|sph[èe]re)/i,'solid_geometry']
  ];
  for (const [r,name] of rules){ if(r.test(lower)) hints.push(name);}
  return [...new Set(hints)];
}

/**
 * Détecte le type d'une question mathématique à partir de son énoncé textuel.
 */
export function detectQuestionType(text: string): ParsedQuestion['detectedType'] {
  const lower = text.toLowerCase();

  // 0. Ensemble ou domaine de définition
  if (/ensemble de d[ée]finition|domaine de d[ée]finition|valeur[s]? interdite[s]?|d[ée]terminer d_[a-z]|d[ée]terminer l['’]ensemble/i.test(lower)) {
    return 'definition_domain';
  }

  // 1. Equations et inéquations (prioritaires pour ne pas confondre "résoudre f'(x)=0" avec un simple calcul de dérivée)
  if (/discriminant|delta|\\Delta|b\^2\s*-\s*4ac/i.test(lower)) {
    return 'equation';
  }
  if (/minimum|maximum|extremum|sommet/i.test(lower)) {
    return 'variation';
  }
  if (/r[ée]soudre.*in[ée]quation|in[ée]quation|[<>≤≥]/i.test(lower)) {
    return 'inequation';
  }
  if (/r[ée]soudre.*[ée]quation|r[ée]sous.*[ée]quation|[a-z]'\s*\(\s*x\s*\)\s*=\s*-?\d(?:\s*$|[;,.])|[a-z]\s*\(\s*x\s*\)\s*=\s*-?\d(?:\s*$|[;,.])|r[ée]soudre dans [ℝR]/i.test(lower)) {
    return 'equation';
  }

  // Les questions spécialisées doivent être vérifiées AVANT l'évaluation générique
  if (/limite|lim_|\\?lim[_\b\s\\]|tend vers/i.test(lower)) {
    return 'limits';
  }
  if (/d[ée]riv|d[ée]river|[a-z]'\s*\(|[a-z]'\s*\[/i.test(lower)) {
    return 'derivative';
  }
  if (/variation|tableau de variation|sens de variation|croissant|d[ée]croissant/i.test(lower)) {
    return 'variation';
  }
  if (/signe de|tableau de signe/i.test(lower)) {
    return 'sign_table';
  }
  if (/asymptote|branche infinie/i.test(lower)) {
    return 'asymptote';
  }
  if (/tangente/i.test(lower)) {
    return 'tangent';
  }
  if (/primitive|int[ée]grale|\\int|∫/i.test(lower)) {
    return 'primitive';
  }
  if (/factoris/i.test(lower)) {
    return 'factorisation';
  }
  if (/r[ée]soudre.*in[ée]quation|in[ée]quation|[<>≤≥]/i.test(lower)) {
    return 'inequation';
  }
  if (/r[ée]soudre.*[ée]quation|f\(x\)\s*=\s*0|r[ée]soudre dans [ℝR]|nombre de solutions|solutions? de (?:cette|l['’])[ée]quation|admet.*solutions?/i.test(lower)) {
    return 'equation';
  }
  if (/suite|r[ée]currence|u_\{?n|v_\{?n|u[₀₁₂₃₄₅₆₇₈₉]|[uvw]_\{?\d|terme général|raison|arithm[ée]tique|g[ée]om[ée]trique/i.test(lower)) {
    return 'sequence';
  }
  if (!/(?:expression|quantit[ée])\s+conjugu[ée]/i.test(lower) && /nombre[s]? complexe|plan complexe|affixe|module|argument|conjugu[ée]|z\s*=|z[₀₁₂₃₄₅₆₇₈₉]/i.test(lower)) {
    return 'complex';
  }
  if (/matrice|d[ée]terminant|inverse.*matrice|matriciel/i.test(lower)) {
    return 'matrix';
  }
  if (/probabilit|tirage|urne|boule/i.test(lower)) {
    return 'probability';
  }
  if (/statist|moyenne|m[ée]diane|m[ée]diane|mayer|ajustement|variance|[ée]cart[- ]type|effectif|fr[ée]quence/i.test(lower)) {
    return 'statistics';
  }
  if (/vrai\s*\/?\s*faux|juste\s*\/?\s*faux/i.test(lower)) {
    return 'true_false';
  }
  if (/calcule|calculer|valeur de f|images? de|f\(\s*[-+\d]/i.test(lower)) {
    return 'evaluation';
  }

  if (/triangle|cercle|rep[èe]re|coordonn[ée]es|thal[èe]s|pythagore|vecteur|droite|plan|distance|milieu|parall[èe]le|perpendiculaire|angle|trigonom[ée]trie|sinus|cosinus|tangente/i.test(lower)) return 'geometry';
  return 'general_math';
}

/**
 * Extrait les données mathématiques clés d'une question.
 */
export function extractQuestionData(text: string, contextText: string): ParsedQuestion['extractedData'] {
  const full = `${contextText}\n${text}`;
  const data: ParsedQuestion['extractedData'] = {};

  // Fonction f(x) ou P(x)
  const fMatch = full.match(/(?:f|P|g|h|Q)\s*\(\s*x\s*\)\s*=\s*([^\n;]+?)(?=(?:\s+On\s+note|\s+où|\s+avec|\s+pour\s+tout|\s*\.|\s*\$|\s*\\\)|\s*\n|$))/i);
  if (fMatch) {
    data.functionExpression = fMatch[1].trim();
  }

  // Points à évaluer : f(0), f(1), f(5)... ou "calcule f(0); f(1) ; f(5)"
  const evalMatches = Array.from(text.matchAll(/(?:f|P|g|h|Q)\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)/gi));
  if (evalMatches.length > 0) {
    data.evaluatedPoints = evalMatches.map(m => parseFloat(m[1])).filter(n => !isNaN(n));
  } else {
    // Si c'est explicitement une question d'évaluation (et pas de limite, de dérivée ou d'étude de signe)
    const isPureEvaluation = /calcule\s+f\s*\(|calculer\s+(?:l'|la\s+valeur\s+de\s+)?image|valeur\s+de\s+f\s*\(/i.test(text);
    if (isPureEvaluation) {
      const numMatches = Array.from(text.matchAll(/(?:[-+]?\d+(?:\.\d+)?)/g));
      if (numMatches.length > 0) {
        const candidates = numMatches.map(m => parseFloat(m[0])).filter(n => !isNaN(n));
        if (candidates.length > 0) {
          data.evaluatedPoints = candidates;
        }
      }
    }
  }

  return data;
}

export interface DetectedQuestionMarker {
  index: number;
  matchLength: number;
  rawLabel: string;
  normalizedNumber: number;
  labelString: string;
}

/**
 * Scanner contextuel de découpage des questions.
 * Gère avec exactitude :
 * - Énoncés 100% sur une seule ligne (ex: "f(x)=... 1. calcule... 2. Factoriser... 3. Résoudre...")
 * - Énoncés multi-lignes standard
 * - Différents formats de numérotation (1., 1), 1 -, Question 1, (1), 1. a), a), I.)
 * - Protection anti-faux positifs stricte (ex: "2.5 + 3.7", "f(1.5)", indices, équations).
 */
export function scanQuestionMarkers(text: string): DetectedQuestionMarker[] {
  const candidates: DetectedQuestionMarker[] = [];

  // On scanne le texte pour identifier tous les délimiteurs valides de début de question
  // On utilise une regex qui capture :
  // G1: "Question 1", "Questions 1", "Q1.", "Q 1 :"
  // G2: "1. a)", "1) a)", "1.a."
  // G3: Numéro "1", "2", "3"...
  // G4: Séparateur après numéro : point (non suivi de chiffre), parenthèse, deux-points, tiret
  // G5: "(1)", "(2)"
  // G6: "(a)", "(b)"
  // G7: "a)", "b)", "c)"
  // G8: "I.", "II.", "III."

  // On capture le préfixe de séparation dans G_sep pour calculer l'indice réel de début du marqueur
  const pattern = /(?:^|([\s\n\r.;!?\)\]]))(?:\*{0,2})(?:(?:Question\s+|Questions\s+|Q\s*\.?\s*)(\d{1,2})\s*([:\.\)\-–]\s*)?|(\d{1,2})\s*[\.\)]\s*([a-dA-D])\s*[\.\)](?=\s|$)|(\d{1,2})\s*(\.(?!\d)|[\)\:\-–])(?=\s|[A-Za-zÀ-ÿ\\])|\(([0-9]{1,2})\)(?=\s|$|\b)|\(([a-dA-D])\)(?=\s|$)|([a-dA-D])\s*[\)\.\:\-–](?=\s+[A-Za-zÀ-ÿ])|\b([IVX]{1,4})\s*[\.\)\:\-–](?=\s+[A-Za-zÀ-ÿ]))(?:\*{0,2})/gi;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    const fullMatch = match[0];
    const sep = match[1] || '';
    const matchIndex = match.index + sep.length;
    const matchLen = fullMatch.length - sep.length;
    const actualMarkerStr = fullMatch.slice(sep.length).trim();

    let qNum = 0;
    let label = '';

    if (match[2]) {
      // Question 1 :
      qNum = parseInt(match[2], 10);
      label = `Question ${qNum}`;
    } else if (match[4] && match[5]) {
      // 1. a)
      qNum = parseInt(match[4], 10);
      label = `${match[4]}. ${match[5]})`;
    } else if (match[6]) {
      // 1. ou 1) ou 1: ou 1-
      qNum = parseInt(match[6], 10);
      const delimiter = match[7] || '.';
      const cleanDelim = delimiter.startsWith('.') ? '.' : delimiter.startsWith(')') ? ')' : delimiter.startsWith(':') ? ':' : '.';
      label = `${qNum}${cleanDelim}`;
    } else if (match[8]) {
      // (1)
      qNum = parseInt(match[8], 10);
      label = `(${qNum})`;
    } else if (match[9]) {
      // (a)
      label = `(${match[9]})`;
    } else if (match[10]) {
      // a)
      label = `${match[10]})`;
    } else if (match[11]) {
      // I.
      label = `${match[11]}.`;
    }

    // Vérification anti-faux positifs :
    const resetAndSkip = () => {
      pattern.lastIndex = Math.max(match!.index + 1, matchIndex);
    };

    // 1. Si le caractère juste avant matchIndex dans le texte d'origine est un chiffre ou une lettre collée (ex: "x1." ou "12.5")
    if (matchIndex > 0) {
      const charBefore = text[matchIndex - 1];
      if (/[0-9a-zA-Z]/.test(charBefore)) {
        resetAndSkip();
        continue;
      }
    }

    // 1ter. Si le délimiteur est un tiret '-' ou '–' (ex: "1 - i√3" ou "2 - x"),
    // un tiret n'est un séparateur de question que s'il est précédé d'un saut de ligne
    // ET suivi d'une directive commençant par une majuscule. Sinon c'est une soustraction arithmétique !
    if (match[7] === '-' || match[7] === '–') {
      if (!/[\n\r]/.test(sep) && matchIndex !== 0) {
        resetAndSkip();
        continue;
      }
      const afterStr = text.slice(matchIndex + matchLen).trim();
      if (!/^[A-ZÀ-ÿ]/.test(afterStr)) {
        resetAndSkip();
        continue;
      }
    }

    // 1bis. Nombre décimal notation anglaise EN FIN DE PHRASE (ex: "p = 0.3."
    // ou "d = 2.5.") : le point séparateur "0.3" est lui-même consommé comme
    // préfixe de séparation (sep = "."), donc le garde-fou ci-dessus (qui ne
    // regarde que le caractère juste avant matchIndex, c.-à-d. le "."
    // lui-même) ne voit jamais le chiffre "0" qui précède ce point. On
    // vérifie donc explicitement : si le séparateur qui précède le marqueur
    // est un point ET que le caractère précédant CE point est un chiffre,
    // alors ce point est en réalité un séparateur décimal (ex: "0.3") et non
    // une fin de phrase — le "3." qui suit n'est pas un marqueur de
    // question. Ce cas n'existe pas en notation française standard ("0,3"
    // avec virgule).
    if (sep === '.' ) {
      const dotIndex = matchIndex - sep.length;
      if (dotIndex > 0 && /[0-9]/.test(text[dotIndex - 1])) {
        resetAndSkip();
        continue;
      }
    }

    // 2. Si le marqueur est un nombre suivi d'un point (ex: "2."), s'assurer que le caractère qui suit dans le texte n'est pas un chiffre
    const afterIndex = matchIndex + matchLen;
    if (afterIndex < text.length) {
      const nextChar = text[afterIndex];
      if (actualMarkerStr.endsWith('.') && /[0-9]/.test(nextChar)) {
        resetAndSkip();
        continue; // C'est un décimal (ex: 2.5)
      }
    }

    // 3. Si le caractère non-blanc précédent (au-delà du seul séparateur) est
    // un opérateur arithmétique ou de comparaison (+, -, *, /, =, ≠, ≤, ≥, <, >, ∈, \in...),
    // ou une préposition introduisant une valeur ("en 3.", "de 3.", "sur 3.", "vers 3."...),
    // ou une expression de formule ("pour tout x ≠ 3 :", "définie par :"...),
    // il s'agit d'une constante numérique au sein d'une formule ou d'une phrase
    // et non d'un marqueur de question.
    {
      const textBefore = text.slice(Math.max(0, matchIndex - 40), matchIndex);

      let scanIdx = matchIndex - 1;
      while (scanIdx >= 0 && /\s/.test(text[scanIdx])) scanIdx--;
      if (scanIdx >= 0 && /[+\-*/=≠≤≥<>~^\\∈∉⊂⊃∪∩]/.test(text[scanIdx])) {
        resetAndSkip();
        continue;
      }
      if (matchIndex > 0 && /[;,(]/.test(text[matchIndex - 1])) {
        resetAndSkip();
        continue;
      }

      // Préposition ou terme mathématique introduisant une valeur/un point :
      // "en 3.", "de 3.", "sur 3.", "vers 3.", "point 3.", "abscisse 3.", "valeur 3.", etc.
      if (/\b(?:en|de|dans|sur|vers|pour|tout|soit|avec|si|quand|point|points|abscisse|ordonn[ée]e|valeur|valeurs|cas|environ|[ée]gal|[ée]gale|[ée]gaux|diff[ée]rent|diff[ée]rente|diff[ée]rents|droite|droites|d'|l')\s*$/i.test(textBefore)) {
        resetAndSkip();
        continue;
      }

      // Si le délimiteur est ':' et qu'il est précédé d'une formule mathématique ou d'une proposition introduisant une formule
      // (ex: "pour tout x ≠ 3 :", "définie par :", "on a :", "tel que :")
      if (actualMarkerStr.endsWith(':') && !/^question\s*\d+/i.test(actualMarkerStr)) {
        const lineBefore = text.slice(Math.max(0, text.lastIndexOf('\n', matchIndex - 1) + 1), matchIndex);
        if (/[a-zA-ZÀ-ÿ=≠<>+]/.test(lineBefore.trim())) {
          resetAndSkip();
          continue;
        }
      }
    }

    // 4. La regex globale est insensible à la casse (/i) pour reconnaître
    // "Question"/"question" ou "(a)"/"(A)", mais cela fait aussi matcher à
    // tort un chiffre romain sur de simples variables mathématiques
    // minuscules (ex: "x - y + 2z - 3 = 0" -> "x -" reconnu comme le
    // marqueur romain "X" suivi du séparateur "-"). Les marqueurs romains
    // réels (I., II., III...) s'écrivent toujours en MAJUSCULES en pratique
    // -> on rejette toute capture de ce groupe qui ne serait pas déjà en
    // majuscules dans le texte source.
    if (match[11] && match[11] !== match[11].toUpperCase()) {
      resetAndSkip();
      continue;
    }

    // 5. Cas "(d)", "(P)", "(a)"... utilisé comme NOM d'objet géométrique ou physique
    // (ex: "la droite (d) passant par A", "le plan (P) d'équation...", "le solide (S)")
    // et non comme marqueur de sous-question.
    if (match[9] || match[8]) {
      const beforeWord = text.slice(0, match.index).match(/([A-Za-zÀ-ÿ]+)\s*$/);
      if (beforeWord && /^(droite|droites|plan|plans|vecteur|vecteurs|segment|segments|cercle|cercles|courbe|courbes|solide|solides|syst[èe]me|syst[èe]mes|circuit|circuits|r[ée]action|r[ée]actions|[ée]quation|[ée]quations)$/i.test(beforeWord[1])) {
        resetAndSkip();
        continue;
      }
    }

    candidates.push({
      index: matchIndex,
      matchLength: matchLen,
      rawLabel: actualMarkerStr,
      normalizedNumber: qNum,
      labelString: label || actualMarkerStr,
    });
  }

  if (candidates.length <= 1) {
    if (candidates.length === 1 && candidates[0].normalizedNumber > 1 && !/^question/i.test(candidates[0].rawLabel)) {
      return [];
    }
    return candidates;
  }

  // Filtrage contextuel de cohérence :
  // Si on a des numéros (1, 2, 3...), s'assurer que la séquence est ordonnée
  const numericList = candidates.filter(c => c.normalizedNumber > 0);
  if (numericList.length >= 2) {
    const verified: DetectedQuestionMarker[] = [];
    let expected = 1;

    for (const c of candidates) {
      if (c.normalizedNumber === expected) {
        verified.push(c);
        expected++;
      } else if (c.normalizedNumber > expected && c.normalizedNumber <= expected + 2) {
        verified.push(c);
        expected = c.normalizedNumber + 1;
      } else if (c.normalizedNumber === 0) {
        // Sous-question
        verified.push(c);
      } else if (verified.length === 0 && c.normalizedNumber <= 2) {
        verified.push(c);
        expected = c.normalizedNumber + 1;
      }
    }

    if (verified.length >= 2) {
      return verified;
    }

    // Si les numéros ne forment pas une suite cohérente commençant près de 1,
    // ce ne sont pas de vrais marqueurs de questions (ex: constantes isolées).
    return [];
  }

  return candidates;
}

/**
 * Scanner de directives mathématiques pour les énoncés sans numérotation explicite
 * (ex: "Calculer u1... Montrer que... Donner l'expression... Calculer u20...")
 */
export function scanUnnumberedQuestionDirectives(text: string): DetectedQuestionMarker[] {
  const directiveTokens =
    "Calculer\\s+la\\s+somme|Calculer|Calculez|Calcule|Montrer\\s+que|Montrez\\s+que|D[ée]montrer\\s+que|D[ée]montrez\\s+que|Prouver\\s+que|" +
    "En\\s+multipliant|En\\s+utilisant|En\\s+factorisant|En\\s+d[ée]veloppant|En\\s+posant|À\\s+l'aide\\s+de|" +
    "Donner\\s+l'expression|Donner\\s+la\\s+valeur|Donner\\s+le|Donner\\s+les|Donner|Donnez|Exprimer|Exprimez|D[ée]terminer|D[ée]terminez|" +
    "Trouver|Trouvez|R[ée]soudre|R[ée]solvez|En\\s+d[ée]duire|D[ée]duire|[ÉEe]tudier|[ÉEe]tudiez|Tracer|Tracez|" +
    "Justifier\\s+que|Justifier|Justifiez|Interpr[ée]ter|Interpr[ée]tez|V[ée]rifier\\s+que|V[ée]rifiez\\s+que|Pr[ée]ciser|Pr[ée]cisez|" +
    "Peut-on|Existe-t-il|Quelle?\\s+est|Quels?\\s+sont|Quelles?\\s+sont";

  // 1. Tenter d'abord la détection par début de ligne (format naturel des devoirs sans numéros)
  const linePattern = new RegExp(`(?:^|[\\n\\r]+)\\s*(?:(\\*{0,2})(${directiveTokens})\\b)`, 'gi');
  const lineCandidates: DetectedQuestionMarker[] = [];
  let match: RegExpExecArray | null;
  let qCount = 1;

  while ((match = linePattern.exec(text)) !== null) {
    const fullMatch = match[0];
    const directive = match[2];
    const matchIndex = match.index + fullMatch.indexOf(directive);

    const prefix = text.slice(Math.max(0, matchIndex - 15), matchIndex).toLowerCase();
    if (/afin\s+de|permet\s+de|pour|sans|impossible\s+de/i.test(prefix)) {
      continue;
    }

    lineCandidates.push({
      index: matchIndex,
      matchLength: 0,
      rawLabel: `${qCount}.`,
      normalizedNumber: qCount,
      labelString: `${qCount}.`,
    });
    qCount++;
  }

  if (lineCandidates.length >= 2 || (lineCandidates.length === 1 && lineCandidates[0].index > 0)) {
    return lineCandidates;
  }

  // 2. Si moins de 2 questions détectées par début de ligne, tenter par ponctuation de fin de phrase
  const sentencePattern = new RegExp(`(?:^|[\\n\\r.;!?])\\s*(?:(\\*{0,2})(${directiveTokens})\\b)`, 'gi');
  const sentenceCandidates: DetectedQuestionMarker[] = [];
  qCount = 1;

  while ((match = sentencePattern.exec(text)) !== null) {
    const fullMatch = match[0];
    const directive = match[2];
    const matchIndex = match.index + fullMatch.indexOf(directive);

    const prefix = text.slice(Math.max(0, matchIndex - 15), matchIndex).toLowerCase();
    if (/afin\s+de|permet\s+de|pour|sans|impossible\s+de/i.test(prefix)) {
      continue;
    }

    sentenceCandidates.push({
      index: matchIndex,
      matchLength: 0,
      rawLabel: `${qCount}.`,
      normalizedNumber: qCount,
      labelString: `${qCount}.`,
    });
    qCount++;
  }

  if (sentenceCandidates.length >= 2 || (sentenceCandidates.length === 1 && sentenceCandidates[0].index > 0)) {
    return sentenceCandidates;
  }

  return lineCandidates.length > 0 ? lineCandidates : sentenceCandidates;
}

function buildMathProblemAnalysis(
  text: string,
  detectedType: ParsedQuestion['detectedType'],
  extractedData: ParsedQuestion['extractedData'],
  contextText: string
): MathProblemAnalysis {
  const full = `${contextText}\n${text}`;
  const lower = full.toLowerCase();

  const domainByType: Record<string, string> = {
    evaluation: 'algèbre / fonctions', factorisation: 'algèbre', equation: 'algèbre',
    inequation: 'algèbre', sign_table: 'fonctions', variation: 'fonctions',
    derivative: 'analyse', limits: 'analyse', asymptote: 'analyse', tangent: 'analyse',
    primitive: 'analyse', sequence: 'suites', probability: 'probabilités',
    statistics: 'statistiques', geometry: 'géométrie', complex: 'nombres complexes',
    matrix: 'algèbre linéaire', definition_domain: 'fonctions',
    true_false: 'mathématiques', general_math: 'mathématiques', general: 'mathématiques',
  };

  const taskByType: Record<string, string> = {
    evaluation: 'calcul / évaluation', factorisation: 'factorisation',
    equation: 'résolution d’équation', inequation: 'résolution d’inéquation',
    sign_table: 'étude du signe', variation: 'étude des variations',
    derivative: 'dérivation', limits: 'calcul de limite',
    asymptote: 'étude des asymptotes', tangent: 'équation d’une tangente',
    primitive: 'primitive / intégrale', sequence: 'étude ou calcul de suite',
    probability: 'calcul de probabilité', statistics: 'calcul statistique',
    geometry: 'résolution géométrique', complex: 'calcul complexe',
    matrix: 'calcul matriciel', definition_domain: 'détermination du domaine',
    true_false: 'vérification d’une proposition', general_math: 'résolution mathématique',
    general: 'résolution mathématique',
  };

  const objects = new Set<string>();
  if (/\bf\s*\(\s*x\s*\)|\bg\s*\(\s*x\s*\)/i.test(full)) objects.add('fonction');
  if (/\bx\^?\d|[a-z]x|polyn[oô]me/i.test(full)) objects.add('polynôme / expression algébrique');
  if (/triangle|cercle|droite|angle|segment|parall[èe]le|perpendiculaire/i.test(lower)) objects.add('figure géométrique');
  if (/suite|u_\{?n|v_\{?n|u[₀₁₂₃₄₅₆₇₈₉]/i.test(full)) objects.add('suite');
  if (/probabil|urne|tirage|[ée]v[ée]nement/i.test(lower)) objects.add('événement / probabilité');
  if (/matrice|d[ée]terminant/i.test(lower)) objects.add('matrice');
  if (/complexe|affixe|module|argument/i.test(lower)) objects.add('nombre complexe');

  const constraints: string[] = [];
  if (/\b\d+\s*\/\s*x\b|d[ée]nominateur/i.test(lower)) constraints.push('dénominateur non nul');
  if (/ln\s*\(|log\s*\(/i.test(full)) constraints.push('argument du logarithme strictement positif');
  if (/sqrt|√/i.test(full)) constraints.push('expression sous la racine admissible dans ℝ');
  if (/[<>≤≥]/.test(full)) constraints.push('respect des conditions de l’inégalité');

  const methodCandidates: Record<string, string[]> = {
    equation: ['mise en forme canonique', 'factorisation', 'discriminant', 'résolution algébrique'],
    inequation: ['factorisation', 'tableau de signes', 'étude des racines'],
    factorisation: ['identités remarquables', 'mise en facteur', 'racines rationnelles'],
    derivative: ['règles de dérivation'],
    limits: ['règles de calcul des limites', 'limites usuelles'],
    variation: ['dérivée', 'signe de la dérivée', 'tableau de variations'],
    geometry: ['Pythagore', 'Thalès', 'trigonométrie', 'géométrie analytique'],
    sequence: ['récurrence', 'raison arithmétique ou géométrique', 'terme général'],
    probability: ['probabilité conditionnelle', 'dénombrement', 'loi adaptée'],
    statistics: ['moyenne', 'médiane', 'variance / écart-type'],
  };

  return {
    domain: domainByType[detectedType] || 'mathématiques',
    task: taskByType[detectedType] || 'résolution mathématique',
    objects: Array.from(objects),
    data: extractedData || {},
    constraints,
    methodCandidates: methodCandidates[detectedType] || ['analyse de la structure puis sélection du solveur compétent'],
  };
}

/**
 * Découpe un bloc d'exercice en contexte introductif et questions atomiques.
 */
export function extractQuestionsAndContext(blockText: string, exerciseIdx: number): {
  contextText: string;
  questions: ParsedQuestion[];
} {
  const trimmedBlock = blockText.trim();
  let markers = scanQuestionMarkers(trimmedBlock);

  // Si aucune numérotation standard (1., 2., a), etc.) n'est détectée,
  // tenter le découpage par directives d'action (Calculer, Montrer que, Donner, etc.)
  if (markers.length === 0) {
    markers = scanUnnumberedQuestionDirectives(trimmedBlock);
  } else if (markers[0].index > 0) {
    // Si des marqueurs ont été trouvés (ex: a), b)), vérifier si le texte
    // précédant le premier marqueur contient des directives non numérotées
    // (ex: "Calculer P(4)... Déterminer a, b, c...").
    const precedingText = trimmedBlock.slice(0, markers[0].index);
    const precedingDirectives = scanUnnumberedQuestionDirectives(precedingText);
    if (precedingDirectives.length > 0) {
      markers = [...precedingDirectives, ...markers].sort((a, b) => a.index - b.index);
      let numCount = 1;
      for (const m of markers) {
        if (!m.labelString.includes(')')) {
          m.normalizedNumber = numCount;
          m.labelString = `${numCount}.`;
          numCount++;
        }
      }
    }
  }

  if (markers.length === 0) {
    const qType = detectQuestionType(trimmedBlock);
    const qData = extractQuestionData(trimmedBlock, '');
    return {
      contextText: '',
      questions: [
        {
          id: `ex${exerciseIdx}_q1`,
          number: 1,
          numberLabel: '1.',
          rawText: trimmedBlock,
          cleanText: trimmedBlock,
          universalRoute: routeUniversalExercise(trimmedBlock),
          detectedType: qType,
          analysis: buildMathProblemAnalysis(trimmedBlock, qType, qData, ''),
          extractedData: qData,
        },
      ],
    };
  }

  // 1. Extraire le contexte d'introduction (texte précédant la première question)
  const firstMarker = markers[0];
  let contextText = trimmedBlock.slice(0, firstMarker.index).trim();

  // 2. Extraire chaque question entre les marqueurs successifs
  const questions: ParsedQuestion[] = [];

  for (let i = 0; i < markers.length; i++) {
    const currentMarker = markers[i];
    const nextMarker = i + 1 < markers.length ? markers[i + 1] : null;

    const start = currentMarker.index + currentMarker.matchLength;
    const end = nextMarker ? nextMarker.index : trimmedBlock.length;

    let questionContent = trimmedBlock.slice(start, end).trim();

    // Séparer un préambule introductif pour les sous-questions suivantes (ex: "Le plan complexe est muni...")
    const preambleMatch = questionContent.match(/([\n\r]+(?:Le plan|Dans le plan|On note|Soient?|Dans un repère)[\s\S]+)$/i);
    if (preambleMatch && nextMarker && /[a-dA-D]/.test(nextMarker.labelString)) {
      const preambleText = preambleMatch[1].trim();
      questionContent = questionContent.slice(0, preambleMatch.index).trim();
      if (!contextText.includes(preambleText)) {
        contextText = contextText ? `${contextText}\n\n${preambleText}` : preambleText;
      }
    }

    // Nettoyage de la ponctuation initiale éventuelle
    const cleanText = questionContent.replace(/^[:\-–\s]+/, '').trim();
    const qType = detectQuestionType(cleanText);
    const qData = extractQuestionData(cleanText, contextText);

    questions.push({
      id: `ex${exerciseIdx}_q${i + 1}`,
      number: currentMarker.normalizedNumber || (i + 1),
      numberLabel: currentMarker.labelString,
      rawText: `${currentMarker.rawLabel} ${cleanText}`,
      cleanText,
      universalRoute: routeUniversalExercise(cleanText),
      detectedType: qType,
      analysis: buildMathProblemAnalysis(cleanText, qType, qData, contextText),
      extractedData: qData,
    });
  }

  return {
    contextText,
    questions,
  };
}

/**
 * Parse un énoncé complet en exercices et questions structurés.
 */
export function parseStatement(rawStatement: string): StatementParsingResult {
  let cleaned = cleanAndNormalizeStatement(rawStatement);
  if (!cleaned) {
    return {
      rawStatement,
      cleanedStatement: '',
      exercises: [],
      totalQuestionsCount: 0,
      hasNumberedQuestions: false,
      identifiedConcepts: [],
    };
  }

  // Supprimer une éventuelle duplication finale de type "Énoncé complet : « ... »"
  const echoMatch = cleaned.match(/\n\s*(?:#+\s*)?Énoncé\s+complet\s*:\s*[«"']([\s\S]+?)[»"']?\s*$/i);
  if (echoMatch) {
    const echoContent = echoMatch[1].trim();
    if (echoContent.length > 20 && cleaned.includes(echoContent.slice(0, 30))) {
      cleaned = cleaned.slice(0, echoMatch.index).trim();
    }
  }

  // Découpage en exercices (si plusieurs exercices sont présents)
  const exerciseRegex = /(?:^|\n)\s*(?:#+\s*)?(?:EXERCICE|Exercice|AUFGABE|Aufgabe|SITUATION D'ÉVALUATION|Situation d'évaluation|PROBLÈME|Problème)\s*(\d+|[A-ZIVX]+)?(?:\s*\(([^)]+)\))?\s*(?:[:\-–]\s*)?/gi;

  const exerciseMatches: Array<{ index: number; title: string; points?: string; matchLen: number }> = [];
  let exMatch: RegExpExecArray | null;

  while ((exMatch = exerciseRegex.exec(cleaned)) !== null) {
    const num = exMatch[1] || `${exerciseMatches.length + 1}`;
    exerciseMatches.push({
      index: exMatch.index,
      title: `Exercice ${num}`,
      points: exMatch[2]?.trim(),
      matchLen: exMatch[0].length,
    });
  }

  interface RawExBlock {
    title: string;
    points?: string;
    text: string;
    headerNumber: number;
  }

  const rawBlocks: RawExBlock[] = [];

  if (exerciseMatches.length > 0) {
    for (let e = 0; e < exerciseMatches.length; e++) {
      const current = exerciseMatches[e];
      const next = e + 1 < exerciseMatches.length ? exerciseMatches[e + 1] : null;

      const start = current.index + current.matchLen;
      const end = next ? next.index : cleaned.length;
      const blockText = cleaned.slice(start, end).trim();

      rawBlocks.push({
        title: current.title,
        points: current.points,
        text: blockText,
        headerNumber: e + 1,
      });
    }
  } else {
    // Un seul exercice implicite
    rawBlocks.push({
      title: 'Exercice 1',
      text: cleaned,
      headerNumber: 1,
    });
  }

  // Pour chaque exercice, extraire le contexte et toutes les questions
  const parsedExercises: ParsedExercise[] = [];
  let totalQuestionsCount = 0;
  const identifiedConceptsSet = new Set<string>();

  rawBlocks.forEach((block, bIdx) => {
    const { contextText, questions } = extractQuestionsAndContext(block.text, bIdx + 1);

    questions.forEach(q => {
      if (q.detectedType !== 'general' && q.detectedType !== 'general_math') {
        identifiedConceptsSet.add(q.detectedType);
      }
    });

    totalQuestionsCount += questions.length;

    parsedExercises.push({
      id: `ex_${bIdx + 1}`,
      exerciseNumber: block.headerNumber,
      title: block.title,
      points: block.points,
      contextText: contextText.length > 0 ? contextText : undefined,
      rawStatement: block.text,
      questions,
      isMultiQuestion: questions.length > 1,
    });
  });

  const hasNumbered = totalQuestionsCount > 1 || parsedExercises.some(e => e.questions.some(q => q.numberLabel.match(/^\d+[\.\)]/)));

  return {
    rawStatement,
    cleanedStatement: cleaned,
    exercises: parsedExercises,
    totalQuestionsCount,
    hasNumberedQuestions: hasNumbered,
    identifiedConcepts: Array.from(identifiedConceptsSet),
    universalRoute: routeUniversalExercise(cleaned),
  };
}
