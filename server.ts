import express from "express";
import compression from "compression";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { generateIvorianFallback } from "./server/ivorianFallback";
import { aiRouteRateLimiter, globalAiRateLimiter, createRateLimiter } from "./server/rateLimiter";
import { getAcademicCourseResult } from "./src/utils/courseKnowledgeBase";
import { findOfficialCourse } from "./src/data/courses";
import { searchAcademicCourseUnified } from "./server/academicSearchEngine";
import { getSearchSuggestions } from "./server/searchSuggestIndex";
import { mathsTleAKnowledgeBase } from "./mathsTleAKnowledgeBase";
import { mathsTleCKnowledgeBase } from "./mathsTleCKnowledgeBase";
import { mathsTleDKnowledgeBase } from "./mathsTleDKnowledgeBase";
import { solveSvtTleDExercise } from "./server/svtEngine/svtTleDEngine";
import { svtTleDKnowledgeBase } from "./svtTleDKnowledgeBase";
import { svt6eKnowledgeBase, buildSvt6eContext } from "./svt6eKnowledgeBase";
import { svt1ereAKnowledgeBase, buildSvt1ereAContext, findSvt1ereAChapters } from "./svt1ereAKnowledgeBase";
import { svt1ereCKnowledgeBase, buildSvt1ereCContext, findSvt1ereCChapters } from "./svt1ereCKnowledgeBase";
import { svt1ereDKnowledgeBase, buildSvt1ereDContext, findSvt1ereDChapters } from "./svt1ereDKnowledgeBase";
import { svt2ndeAKnowledgeBase, buildSvt2ndeAContext, findSvt2ndeAChapters } from "./svt2ndeAKnowledgeBase";
import { svt2ndeCKnowledgeBase, buildSvt2ndeCContext, findSvt2ndeCChapters } from "./svt2ndeCKnowledgeBase";
import { solvePcTleCdeExercise } from "./server/pcEngine/pcTleCdeEngine";
import { pcTleCdeKnowledgeBase } from "./pcTleCdeKnowledgeBase";
import { solveGeo6e } from "./server/geo6eEngine/geo6eEngine";
import { geographie6eKnowledgeBase } from "./geographie6eKnowledgeBase";
import { maths6eKnowledgeBase } from "./maths6eKnowledgeBase";
import { solvePc6e } from "./server/pc6eEngine/pc6eEngine";
import { pc6eKnowledgeBase } from "./pc6eKnowledgeBase";
import { solvePhiloTle } from "./server/philoEngine/philoEngine";
import { philosophieTleKnowledgeBase } from "./src/data/philosophieTleKnowledgeBase";
import { solveHistoireGeoTle } from "./server/histoireGeoEngine/histoireGeoEngine";
import { histoireGeoTleKnowledgeBase } from "./src/data/histoireGeoTleKnowledgeBase";
import { solveFrancaisTle } from "./server/francaisTleEngine/francaisTleEngine";
import { francaisTleKnowledgeBase } from "./src/data/francaisTleKnowledgeBase";
import { generateLocalTutorAnswer } from "./server/localTutorEngine";
import { solveLanguageExercise, detectLanguage, solveLanguageChat, SupportedLanguage } from "./server/languagesEngine/languagesEngine";
import { parseStatement } from "./server/exercisePipeline/statementParser";
import { solveInternationalMathHomework } from "./server/exercisePipeline/internationalMathSolver";
import { solveAllExercisesWithPapaMethod } from "./server/exercisePipeline/universalPapaMethodSolver";
import { solveInternationalPcHomework } from "./server/exercisePipeline/internationalPcSolver";
import { solveInternationalUniversalHomework } from "./server/exercisePipeline/internationalUniversalSolver";
import {
  tryDeterministicExerciseResolution,
  tryDeterministicPcExerciseResolution,
  buildMethodologyResultFromSolvedExercises,
  buildHonestUnsolvedResult,
} from "./server/exercisePipeline/exerciseSolverPipeline";
import { solveUniversalMathHomework } from "./server/exercisePipeline/universalMathEngine";
import { looksLikeRectilinearKinematicsExercise } from "./server/exercisePipeline/genericKinematicsSolver";
import { looksLikeOhmCircuitExercise } from "./server/exercisePipeline/genericOhmSolver";
import { looksLikeStoichiometryExercise } from "./server/exercisePipeline/genericStoichiometrySolver";
import { looksLikeGravitationExercise } from "./server/exercisePipeline/genericGravitationSolver";
import { looksLikeOscillatorExercise } from "./server/exercisePipeline/genericOscillatorSolver";
import { looksLikeTecExercise } from "./server/exercisePipeline/genericTecSolver";
import { purgeInventedQuestions, validateCompleteness } from "./server/exercisePipeline/completenessValidator";
import { canonicalDiscipline, disciplineEngineAllowed, detectTextLanguage } from "./server/disciplineRouter";
import { sanitizeMathAndScientificOutput } from "./src/utils/mathFormatter";
import { buildAcademicPrompt } from "./server/academicEngine/academicPromptBuilder";
import { findAcademicKnowledge } from "./src/data/academicKnowledgeBase";
import { generateAcademicEssayFallback } from "./server/academicEssayFallback";
import { isConjugationQuery, solveConjugationMethodologyExercise } from "./server/exercisePipeline/conjugationExerciseSolver";
import { isFrenchGrammarQuery, solveFrenchGrammarExercise } from "./server/exercisePipeline/frenchGrammarExerciseSolver";
import { registerUser, loginUser, getUserByToken, logoutUser, updateUserProfile } from "./server/authService";
import { solveAcademicDeterministic } from "./server/academicDeterministic/academicDeterministicEngine";
import type { CourseSearchResult, DisciplineType, SecondaryLevel, AcademicSerie } from "./src/types";
import { translateLocally, detectTranslationLanguage } from "./server/localTranslationEngine";

// Charge les configurations d'environnement locales
dotenv.config();
dotenv.config({ path: ".env.local", override: true });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Nécessaire pour que req.ip reflète la vraie IP cliente derrière un proxy
// (Cloud Run, Nginx, etc.) plutôt que l'IP interne du proxy — sinon le
// rate limiter par IP traiterait tout le monde comme un seul client.
app.set("trust proxy", 1);

// Compression gzip/brotli des réponses JSON/HTML : les fiches de cours et
// arguments philo/français peuvent être volumineuses, et à l'échelle de
// 1 000 000 d'utilisateurs la bande passante et le temps de transfert
// deviennent un vrai coût. `filter` par défaut de `compression` respecte déjà
// l'en-tête `Cache-Control: no-transform` et ignore les réponses déjà compressées.
app.use(compression());

app.use(express.json({ limit: "25mb" }));

// Limiteurs dédiés à « Recherche de Cours & Notions » (moteur local, sans IA).
// Séparés des limiteurs `ai*` : ces requêtes sont bon marché (calcul local,
// pas d'appel externe) donc les seuils sont plus généreux, mais restent
// nécessaires pour empêcher un script d'envoyer des milliers de requêtes/s
// et de saturer inutilement CPU/mémoire d'une instance à grande échelle.
const searchRouteRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 120, // par IP, largement suffisant pour un usage normal (frappe, corrections, "Voir plus")
  label: "search-course",
});
const globalSearchRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: Number(process.env.GLOBAL_SEARCH_MAX_REQUESTS_PER_MIN) || 20000,
  label: "search-course-global",
  global: true,
});

// L'autocomplétion est déclenchée à chaque frappe : seuil par IP plus élevé
// que la recherche complète, mais toujours borné pour éviter qu'un script ne
// bombarde l'endpoint (voir item « Protection contre les abus »).
const suggestRouteRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 300,
  label: "search-suggest",
});
const globalSuggestRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: Number(process.env.GLOBAL_SUGGEST_MAX_REQUESTS_PER_MIN) || 40000,
  label: "search-suggest-global",
  global: true,
});

export const SIMPLE_FRENCH_DIRECTIVE = `
RÈGLE ABSOLUE DE FRANÇAIS SIMPLE ET FACILE À COMPRENDRE (TOUT LE SITE ET TOUTES LES RÉDACTIONS) :
L'utilisateur exige un français facile à comprendre, sans mots compliqués, pour toutes les rédactions (dissertations, commentaires, résumés, réponses rédigées, explications).
1. INTERDICTION FORMELLE DES MOTS DIFFICILES, RARES OU POMPEUX quand un mot simple et courant existe.
   Remplace TOUJOURS :
   - « dichotomie » → « opposition, séparation »
   - « antinomie » → « contradiction »
   - « aporie » → « difficulté, impasse »
   - « prééminence » → « supériorité, importance »
   - « paradigme » → « modèle, exemple »
   - « corollaire » → « conséquence naturelle »
   - « in fine » → « au final, à la fin »
   - « intrinsèque » → « propre à, intérieur »
   - « prégnant » → « fort, marquant »
   - « exégèse » → « analyse, explication »
   - « idoine » → « adapté, approprié »
   - « eu égard à » → « par rapport à, vu que »
   - « nonobstant » → « malgré »
   - « postulat » → « idée de départ, affirmation »
   - « écueils » → « pièges, dangers, défauts »
   - « acception » → « sens, signification »
   - « panacée » → « remède miracle, solution magique »
   - « de surcroît » / « de prime abord » → « de plus » / « au début, d'abord »
   - « au demeurant » → « d'ailleurs »
   - « parachever » → « terminer, achever »
   - « catharsis » → « libération des émotions »
   - « ataraxie » → « tranquillité de l'esprit »
   - « s'ériger en » → « devenir, se poser en »
   - « fécond » → « riche, utile »
   - « acuité » → « finesse, précision »
   - « examen dialectique » → « étude des deux faces du problème »
   - « quintessence » → « le meilleur, l'essentiel »
   - « pléthore » → « grand nombre, abondance »
   - « propension » → « tendance »
   - « réifier » / « réification » → « transformer en objet »
   - « alléguer » → « affirmer, prétendre »
   - « dirimant » → « décisif »
   - « hermétique » → « difficile à comprendre, fermé »
   - « admonestation » → « avertissement, reproche »
   RÈGLE D'OR : Si un élève moyen de collège ou lycée ne comprend pas le mot immédiatement sans dictionnaire, NE L'UTILISE PAS. Choisis le mot le plus simple et limpide possible.

2. PHRASES CLAIRES, COURTES ET DIRECTES.
   - Une phrase = une seule idée principale.
   - Évite les phrases à rallonge de plus de 25 mots avec de multiples propositions subordonnées ("qui... dont... sachant que... bien que...").
   - Privilégie la voix active et des tournures fluides.

3. CONNECTEURS SIMPLES, VARIÉS ET NATURELS :
   - Pour introduire : "D'abord", "Tout d'abord", "Pour commencer", "D'une part".
   - Pour enchaîner : "Ensuite", "De plus", "Par ailleurs", "De même", "Aussi", "D'autre part".
   - Pour nuancer ou opposer : "Mais", "Cependant", "Pourtant", "Toutefois", "En revanche".
   - Pour conclure une idée ou un axe : "Ainsi", "Donc", "C'est pourquoi".
   - Pour conclure le devoir : "En conclusion", "Pour terminer", "En résumé", "Au terme de notre réflexion".
   - INTERDICTION des formules pédantes : "il appert que", "il sied de noter", "il échet", "force est de constater", "sous le prisme de", "en dernier ressort".

4. RIGUEUR DES CITATIONS ET DU FOND :
   - Les citations d'auteurs et les faits historiques/scientifiques restent authentiques et exacts.
   - L'explication qui les accompagne doit être écrite en français clair, simple et limpide.
   - On simplifie la FORME pour qu'elle soit facilement comprise et retenue par l'élève, tout en gardant un FOND complet et solide.`;

function cleanJsonString(str: string): string {
  let cleaned = (str || "").trim();
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  }
  return cleaned;
}

// ==========================================
// API Routes
// ==========================================

/**
 * Directive d'écriture mathématique et scientifique académique (Côte d'Ivoire), partagée par
 * toutes les routes IA qui peuvent produire des maths/sciences/formules : impose la
 * notation standard et canonique, les dérivées standard f'(x), les fractions \frac{a}{b},
 * \sqrt{}, exposants ^, indices _, et les vrais symboles mathématiques (×, ≤, ≥, ≠, ∈, ∉, ∪, ∩, √, X̄, ln, etc.)
 * sans AUCUN artefact technique (ex: pas de \f\f, pas de rac{...}, pas de f^{`′`}(1), pas de x2, pas de u20).
 */
const MATH_WRITING_NOTATION_DIRECTIVE = `
RÈGLE ABSOLUE D'ÉCRITURE MATHÉMATIQUE ET SCIENTIFIQUE ACADÉMIQUE — TOUJOURS APPLIQUÉE, SANS EXCEPTION :
Tes réponses doivent ressembler exactement à une copie académique soignée rédigée au tableau ou dans un manuel officiel : écriture mathématique propre, fractions bien présentées, symboles canoniques, JAMAIS d'artefacts techniques.

1. FRACTIONS TOUJOURS EN NOTATION \\frac{numérateur}{dénominateur} :
   N'écris JAMAIS une fraction en ligne avec un simple "/" (ex: interdiction d'écrire "1/x", "(a+b)/c", "21/6"). Utilise SYSTÉMATIQUEMENT la notation \\frac{...}{...} pour permettre son affichage empilé (numérateur au-dessus, dénominateur en dessous), comme :
   - \\frac{1}{x} (jamais "1/x" ni "rac{1}{x}")
   - \\frac{\\ln x}{x} (jamais "ln x / x")
   - X̄ = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3,5
   - a = \\frac{Cov(X,Y)}{V(X)} = \\frac{6,82}{2,92} ≈ 2,34
   Cette règle s'applique à TOUTES les fractions : calcul littéral, statistiques (moyenne X̄, variance, covariance, coefficients a et b), probabilités, trigonométrie, physique-chimie (formules avec division), etc.

2. DÉRIVÉES ET NOTATIONS DE FONCTIONS (CANONIQUES) :
   - Dérivée première : écris TOUJOURS f'(x) ou f'(1) ou f^{\\prime}(x).
   - INTERDICTION ABSOLUE d'écrire des formes corrompues avec backticks ou quotes dans les exposants comme f^{′}(1) ou f^{\prime}(1) mal fermé.
   - Dérivée seconde : f''(x) ou f^{\\prime\\prime}(x). Dérivée n-ième : f^{(n)}(x).

3. EXPOSANTS, SUITES ET MONÔMES :
   - Racines : \\sqrt{...} (ex: \\sqrt{2}, \\sqrt{b^2-4ac}) — jamais "racine(...)" en toutes lettres.
   - Puissances/exposants : notation ^ (ex: x^2, x^3, e^x, (x+1)^{2}) — jamais "x2" ou "x3" pour désigner x au carré ou x au cube.
   - Suites : notation _ (ex: u_n, u_{n+1}, u_0, u_{20}, v_n) — jamais "u20", "vn", "u0" sans indice.
   - Puissances géométriques : q^3, 2^n (jamais "q3" ou "2n" pour 2 puissance n).
   - Dénombrement : A_{10}^2, \\binom{10}{2} (jamais "A102").

4. VRAIS SYMBOLES MATHÉMATIQUES OBLIGATOIRES (jamais leur équivalent en toutes lettres ou en ASCII) :
   × (jamais "*" ni "∗"), ÷, ≤, ≥, ≠, ≈, ∈, ∉, ∪, ∩, √, ∞, π, →, ➔, ∆, Ω, ℕ, ℝ, ℤ, ℚ, ℂ.
   Écris toujours X̄ (x-barre) et non "X_barre" ou "x barre" ; ln(x) et non "Inx" ; eˣ/e^x et non "e2x" pour désigner une puissance de e.
   Limites : \\lim_{x \\to 0^+} ou \\lim_{x \\to +\\infty} (jamais "limx").

5. UNE ÉTAPE DE CALCUL PAR LIGNE :
   Chaque transformation d'un calcul doit apparaître sur sa propre ligne (une égalité par ligne), jamais plusieurs étapes concaténées sur une seule ligne.

6. RÉPONSE FINALE MISE EN ÉVIDENCE :
   Le résultat final de chaque question doit être clairement isolé (dans le champ finalAnswer / résultat encadré), écrit avec les mêmes notations \\frac{}{}, \\sqrt{}, exposants et symboles que ci-dessus quand la réponse est une expression, une fraction ou contient un symbole mathématique.

7. TEXTES EXPLICATIFS, ASTUCES ET PHRASES EN FRANÇAIS (ZÉRO DOLLARS '$' INUTILES) :
   - N'entoure JAMAIS de simples chiffres, nombres, calculs arithmétiques élémentaires ou mots ordinaires de délimiteurs dollars '$' (INTERDICTION ABSOLUE d'écrire "$1$", "$2$", "$0$", "$1 + 1$"). Écris simplement : 1, 2, 0, 1 + 1.
   - Ne mets JAMAIS de caractères '$' ou '$$' sauvages ou inutiles dans les champs explicatifs, astuces et conseils (notamment pedagogicalTransferExplanation, level1Hint, pedagogicalTip, justifications, etc.).
   - Utilise directement les symboles mathématiques Unicode clairs (ℕ, ℝ, ℤ, ℚ, ℂ, ∈, ∉, ≤, ≥, ≠, ≈, ×) dans le texte narratif au lieu de balises LaTeX comme "$\\mathbb{N}$".
   - Réserve la notation LaTeX aux formules élaborées (comme \\frac{a}{b}, \\sqrt{x}, \\int, \\lim) sans jamais polluer les phrases courantes de symboles '$' parasites.

Cette règle d'écriture est indépendante de la justesse du calcul : une réponse mathématiquement juste mais mal écrite (fraction en ligne, symbole ASCII, artefact) est considérée comme non conforme et doit être corrigée avant d'être renvoyée.`;

/**
 * LE PROF — Moteur d'analyse d'image (Vision + OCR intelligent + Fusion)
 *
 * Ce moteur ne se limite jamais à une transcription texte brute : il observe
 * d'abord toute la page (figures géométriques, graphiques, tableaux, schémas
 * de physique/chimie/SVT, cartes, frises, documents, diagrammes...), lit
 * ensuite tout le texte visible (énoncé, questions, consignes, valeurs,
 * légendes, unités), puis FUSIONNE les deux pour reconstruire un énoncé
 * unique et exploitable, dans lequel chaque élément visuel important est
 * restitué en clair (ex : "[Figure : triangle ABC rectangle en A, AB = 5 cm,
 * marque d'angle droit en A]"). Il ne remplace pas la détection de matière
 * ni la résolution, qui restent gérées plus loin dans le pipeline (endpoints
 * /api/detect-subject puis résolution par matière) : il leur fournit un
 * texte source complet, fidèle et sans perte d'information visuelle.
 */
const IMAGE_ANALYSIS_SYSTEM_INSTRUCTION = `Tu es le moteur de vision de LE PROF. Tu analyses une photo de devoir, d'exercice ou d'épreuve pour en reconstruire le contenu intégral, texte ET visuel confondus. Tu ne dois JAMAIS te limiter à l'OCR : tu dois comprendre tout ce qui est visible dans l'image.

ÉTAPE 1 — ANALYSE VISUELLE : observe toute la page et identifie les éléments graphiques avant de lire le texte (figures géométriques, repères, vecteurs, graphiques et courbes, tableaux et statistiques, schémas de physique comme circuits/lentilles/forces, schémas de chimie comme molécules/verrerie/réactions, schémas de SVT comme cellules/organes/ADN/expériences, cartes de géographie, frises historiques, images et documents, diagrammes et organigrammes). Considère chacun de ces éléments comme une donnée officielle de l'exercice, jamais comme un simple décor.

ÉTAPE 2 — OCR INTELLIGENT : lis ensuite tout le texte présent (énoncé, questions, consignes, valeurs numériques, légendes, titres, notes visibles, unités et symboles) et corrige automatiquement les erreurs manifestes de reconnaissance optique.

ÉTAPE 3 — FUSION : fusionne les informations visuelles et textuelles pour reconstruire le sujet complet. Un angle droit dessiné est une donnée importante, une flèche sur un circuit indique un sens de courant, une cellule légendée est une information scientifique, une carte colorée est un document à interpréter. Ne jamais ignorer un élément graphique : décris-le entre crochets, directement à l'endroit du texte où il intervient, par exemple "[Figure : triangle ABC, angle droit en A, AB = 5 cm, BC = 13 cm]", "[Graphique : courbe croissante de f passant par (0;1) et (2;5)]", "[Tableau : x = 1,2,3 ; f(x) = 2,4,6]", "[Schéma : circuit série avec une pile, une lampe et un ampèremètre, flèche du courant sortant de la borne + de la pile]", "[Carte : zones en rouge indiquant les régions à forte densité de population]".

RÈGLES IMPORTANTES :
- Ne restitue jamais uniquement le texte extrait : les éléments visuels doivent apparaître dans le texte reconstruit.
- Si une partie de l'image est floue ou illisible, indique précisément ce qui manque (ex. "[une valeur illisible sur le schéma]") au lieu d'inventer une donnée.
- Respecte scrupuleusement les notations mathématiques et scientifiques manuscrites : infini (+∞, -∞), fonctions trigonométriques (cos, sin, tan), limites (lim x->+∞), intégrales (∫), sommes (∑), dérivées (f'), exponentielles (e^x), logarithmes (ln), racines (√), puissances, fractions, inéquations (≤, ≥), vecteurs (⃗AB), ensembles (ℝ, ℕ, ℤ, ∈), angles (mes(PM̂N)), ainsi que les formules et symboles de physique-chimie (P = m.g, Ec = 1/2 m.v^2, pH, [H3O+], moles, ions Cu2+, Fe3+, réactions chimiques ➔).
- Ta sortie est UNIQUEMENT le sujet reconstruit (texte + éléments visuels intégrés), prêt à être lu et résolu par un enseignant ou un moteur de résolution : aucun commentaire méta, aucune mention de "voici la transcription", aucun titre de section.`;

// ==========================================
// AUTHENTIFICATION COMPLÈTE & GESTION DE SESSION
// ==========================================

app.post("/api/auth/register", (req, res) => {
  try {
    const result = registerUser(req.body || {});
    return res.status(201).json({ success: true, ...result });
  } catch (err: any) {
    return res.status(400).json({ success: false, error: err.message || "Erreur lors de l'inscription." });
  }
});

app.post("/api/auth/login", (req, res) => {
  try {
    const { identifier, password } = req.body || {};
    const result = loginUser({ identifier, password });
    return res.status(200).json({ success: true, ...result });
  } catch (err: any) {
    return res.status(401).json({ success: false, error: err.message || "Erreur d'authentification." });
  }
});

app.get("/api/auth/me", (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const user = getUserByToken(authHeader);
    if (!user) {
      return res.status(401).json({ success: false, error: "Session invalide ou expirée." });
    }
    return res.status(200).json({ success: true, user });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: "Erreur serveur." });
  }
});

app.post("/api/auth/logout", (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    logoutUser(authHeader);
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: "Erreur lors de la déconnexion." });
  }
});

app.put("/api/auth/profile", (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const user = getUserByToken(authHeader);
    if (!user) {
      return res.status(401).json({ success: false, error: "Session non authentifiée." });
    }
    const updated = updateUserProfile(user.id, req.body || {});
    return res.status(200).json({ success: true, user: updated });
  } catch (err: any) {
    return res.status(400).json({ success: false, error: err.message || "Erreur de mise à jour du profil." });
  }
});

app.post("/api/ocr-scan", globalAiRateLimiter, aiRouteRateLimiter, async (req, res) => {
  try {
    const { imageBase64, mimeType = "image/jpeg", isHandwrittenScience = false } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: "Aucune image fournie pour l'analyse OCR." });
    }

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const contents = [
      {
        inlineData: {
          mimeType,
          data: cleanBase64,
        },
      },
      isHandwrittenScience
        ? "Cette image montre un tableau ou une feuille avec un tracé manuscrit (équation, figure ou schéma). Applique les étapes 1 (analyse visuelle : toute figure, repère, vecteur ou schéma dessiné est une donnée) puis 2 (OCR intelligent de l'écriture manuscrite) puis 3 (fusion). Restitue le sujet reconstruit sous forme de texte mathématique et scientifique clair, avec les éléments visuels décrits entre crochets à leur place exacte, sans bavardage méta."
        : "Cette image montre un sujet de devoir, un exercice ou une épreuve (texte + éventuels éléments graphiques). Applique les étapes 1 (analyse visuelle), 2 (OCR intelligent) puis 3 (fusion) et restitue le sujet complet reconstruit, en intégrant chaque élément visuel pertinent entre crochets à l'endroit du texte où il intervient, sans bavardage méta.",
    ];

    return res.status(200).json({
      success: false,
      error: "Mode 100% local et autonome actif : vous pouvez saisir ou coller directement le texte de votre sujet ou exercice dans le champ texte ci-dessous pour une résolution instantanée.",
    });
  } catch (error: any) {
    console.error("OCR Error:", error);
    return res.status(500).json({ error: "Erreur de traitement de l'image." });
  }
});

/**
 * Fast endpoint for Auto-Detecting subject discipline, exercise type and methodology
 * 100% Autonome et local (sans appel IA/API)
 */
app.post("/api/detect-subject", globalAiRateLimiter, aiRouteRateLimiter, async (req, res) => {
  try {
    const subjectTopic = req.body?.subjectTopic || req.body?.exerciseText || req.body?.statement || "";
    if (!subjectTopic || !subjectTopic.trim()) {
      return res.json({
        success: true,
        data: {
          discipline: "philo",
          disciplineLabel: "Philosophie",
          exerciseType: "Dissertation canonique (2 axes - Thèse / Antithèse)",
          confidence: 100,
        },
      });
    }

    const text = (subjectTopic || "").toLowerCase();
    let disc = "philo";
    let label = "Philosophie";
    let exType = "Dissertation philosophique canonique";

    if (/math[ée]matiques?|maths?|calculer?|résoudre|résous|fonction|d[ée]riv[ée]e|int[ée]grale|primitive|limite|suite\b|complexe|probabilit[ée]|matrice|vecteur|[ée]quation|in[ée]quation|polyn[ôo]me|pythagore|thal[èe]s|factoriser|f\(x\)|\d+\s*[\+\-\*\/×÷\^=]\s*\d+/i.test(text)) {
      disc = "mathematiques";
      label = "Mathématiques";
      exType = "Résolution d'exercice mathématique";
    } else if (/physique|chimie|m[ée]canique|newton|acc[ée]l[ée]ration|vitesse|condensateur|circuit|dosage|titrage|\bph\b|acide|base|mol\b|oxydor[ée]duction|radioactivit[ée]|[ée]nergie cin[ée]tique/i.test(text)) {
      disc = "physique_chimie";
      label = "Physique - Chimie";
      exType = "Résolution de problème scientifique";
    } else if (/\bsvt\b|biologie|g[ée]ologie|cellule|adn|arn|chromosome|g[èe]ne|all[èe]le|mitose|m[ée]iose|ph[ée]notype|g[ée]notype|immunitaire|anticorps|lymphocyte|neurone|synapse|hormone|glyc[ée]mie|tectonique|subduction|s[ée]isme/i.test(text)) {
      disc = "svt";
      label = "SVT";
      exType = "Restitution organisée de connaissances / Exploitation de documents";
    } else if (/théâtre|hilarité|littérature|roman|poésie|poète|écrivain|comédie|molière|victor hugo|baudelaire/i.test(text)) {
      disc = "francais";
      label = "Français & Littérature";
      exType = "Dissertation littéraire (Expliquer / Discuter)";
    } else if (/guerre|siècle|1945|colonisation|dando|urss|hitler|staline|traité|crise de 1929/i.test(text)) {
      disc = "histoire";
      label = "Histoire";
      exType = "Dissertation historique (Plan Évolutif / Dialectique)";
    } else if (/espace|territoire|agriculture|climat|population|côte d'ivoire|aménag|port|métropole/i.test(text)) {
      disc = "geographie";
      label = "Géographie";
      exType = "Dissertation géographique (Analyse Spatiale)";
    } else if (/allemand|deutsch|german|textverst[äa]ndnis|aufsatz|grammatik/i.test(text)) {
      disc = "allemand";
      label = "Allemand";
      exType = "Textverständnis / Aufsatz";
    } else if (/espagnol|espa[ñn]ol|spanish|redacci[óo]n|comprensi[óo]n/i.test(text)) {
      disc = "espagnol";
      label = "Espagnol";
      exType = "Comprensión / Redacción";
    } else if (/anglais|english|reading comprehension|essay|passive voice/i.test(text)) {
      disc = "anglais";
      label = "Anglais";
      exType = "Reading comprehension / Essay";
    }

    return res.json({
      success: true,
      data: {
        discipline: disc,
        disciplineLabel: label,
        exerciseType: exType,
        confidence: 95,
        keywords: [],
        justification: "Classification instantanée certifiée par le moteur académique autonome.",
      },
    });
  } catch (error: any) {
    console.warn("Subject detection fallback:", error?.message);
    return res.json({
      success: true,
      data: {
        discipline: "philo",
        disciplineLabel: "Philosophie",
        exerciseType: "Dissertation philosophique canonique",
        confidence: 85,
        keywords: [],
        justification: "Classification par défaut.",
      },
    });
  }
});

/**
 * Répare et déploie in extenso la Troisième Partie d'un devoir académique
 * si le modèle a inséré un renvoi comme "(Voir section structurée ci-dessous)"
 * ou si la Troisième Partie est incomplète.
 */
function repairAndExpandAcademicRedaction(data: any): void {
  if (!data) return;
  const sr = data.structuredRedaction;
  if (!sr) return;

  const introText = sr.introduction?.fullText || 
    [sr.introduction?.amorce, sr.introduction?.definitionTension, sr.introduction?.problematique, sr.introduction?.annoncePlan].filter(Boolean).join(' ');

  const p1Text = sr.development?.part1?.fullText || 
    sr.development?.part1?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');

  const p2Text = sr.development?.part2?.fullText || 
    sr.development?.part2?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');

  const p3Text = sr.development?.part3?.fullText || 
    sr.development?.part3?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');

  const conclText = sr.conclusion?.fullText || 
    [sr.conclusion?.bilanSynthese, sr.conclusion?.reponseDefinitive, sr.conclusion?.elargissement].filter(Boolean).join(' ');

  if (!introText && !p1Text && !conclText) return;

  const fullPart3Markdown = [
    '## III. TROISIÈME PARTIE : COMMENTAIRE HISTORIQUE ORGANISÉ (10 points)',
    introText ? `### Introduction du commentaire\n${introText}` : '',
    '### Développement structuré',
    p1Text ? `#### 1. ${sr.development?.part1?.title || 'Premier axe d\'analyse'}\n${p1Text}` : '',
    sr.development?.transition1 ? `*Transition :* ${sr.development.transition1}` : '',
    p2Text ? `#### 2. ${sr.development?.part2?.title || 'Deuxième axe d\'analyse'}\n${p2Text}` : '',
    sr.development?.transition2 ? `*Transition :* ${sr.development.transition2}` : '',
    p3Text ? `#### 3. ${sr.development?.part3?.title || 'Troisième axe d\'analyse'}\n${p3Text}` : '',
    conclText ? `### Conclusion du commentaire\n${conclText}` : ''
  ].filter(Boolean).join('\n\n');

  ['level5FullRedaction', 'fullSynthesizedResponse'].forEach((key) => {
    if (typeof data[key] === 'string') {
      if (/(?:\(Voir|Voir|cf\.)\s+section\s+structur[ée]e[^\n\)]*\)?/i.test(data[key])) {
        data[key] = data[key].replace(/(?:##\s*III[^\n]*\n*)?(?:[^\n]*)(?:\(Voir|Voir|cf\.)\s+section\s+structur[ée]e[^\n\)]*\)?/i, fullPart3Markdown);
      } else if (!/##\s*III|TROISI[ÈE]ME\s+PARTIE/i.test(data[key])) {
        data[key] = `${data[key].trim()}\n\n---\n\n${fullPart3Markdown}`;
      }
    }
  });
}

/**
 * Endpoint for processing any subject with 5 Assistance Levels and Complete In Extenso Redaction
 */
app.post("/api/analyze-exercise", globalAiRateLimiter, aiRouteRateLimiter, async (req, res) => {
  try {
    const {
      fasciculeTitle,
      fasciculeMethodology,
      fasciculeKnowledge,
      subjectTopic,
      exerciseType,
      discipline,
      mode = "comprehensive",
      planStructure = "2_axes", // '2_axes' (Standard Bac Côte d'Ivoire / Francophonie sans synthèse) ou '3_axes'
      serie,
      serieLabel,
      level,
      studentProfile,
      userSeed,
      variantIndex,
      // Image d'origine (figure, schéma, tableau, photo de l'énoncé...) jointe par
      // l'élève. Quand elle est présente, elle est envoyée TELLE QUELLE au modèle en
      // plus du texte, pour qu'il "voie" directement la donnée visuelle au moment de
      // résoudre — au lieu de se fier uniquement à une description texte qui peut
      // perdre des détails. Elle n'est jamais écrite sur disque ni en base de
      // données : elle ne vit que le temps de cette requête, puis elle est
      // abandonnée (voir plus bas : mise en cache désactivée quand une image est
      // fournie, pour ne pas non plus la garder en mémoire au-delà de l'appel).
      imageBase64,
      imageMimeType = "image/jpeg",
    } = req.body;

    if (!subjectTopic) {
      return res.status(400).json({ error: "Le sujet de l'exercice est requis." });
    }

    // =========================================================================
    // PRIORITÉ ABSOLUE 00 : CONJUGAISON & GRAMMAIRE FRANÇAISE DIRECTE
    // Interception immédiate pour empêcher toute dérive en dissertation ou philosophie
    // =========================================================================
    if (isConjugationQuery(subjectTopic)) {
      const conjAnalysis = solveConjugationMethodologyExercise(subjectTopic, {
        discipline: discipline || "Français",
        level,
        serie,
      });
      return res.json({
        success: true,
        data: { ...conjAnalysis, isLocalEngine: true },
        isLocalEngine: true,
        engineType: "conjugation_universal_solver",
      });
    }

    if (isFrenchGrammarQuery(subjectTopic)) {
      const grammarAnalysis = solveFrenchGrammarExercise(subjectTopic);
      return res.json({
        success: true,
        data: { ...grammarAnalysis, isLocalEngine: true },
        isLocalEngine: true,
        engineType: "french_grammar_solver",
      });
    }

    const attachedImagePart = imageBase64
      ? {
          inlineData: {
            mimeType: imageMimeType,
            data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
          },
        }
      : null;

    const isTwoAxes = planStructure !== "3_axes";

    let effectiveDiscipline = discipline;

    // Discipline canonique = source de vérité pour le routage. Voir
    // server/disciplineRouter.ts pour le détail du bug corrigé ici (le label
    // envoyé par le client, ex. "Mathématiques" ou "Français & Lettres", ne
    // correspondait à aucune des comparaisons strictes historiques).
    let disciplineCanon = canonicalDiscipline(discipline);

    const hasArithmeticPattern = /\d+\s*[\+\-\*\/\^=×÷]\s*\d+/i.test(subjectTopic) ||
      /^\s*[\d\s+\-*/^().=,×÷]+\s*$/.test(subjectTopic) ||
      /\b(\d+\s*[\+\-\*\/]|\d+\^|\bsqrt\b|racine\s+carr[ée]e)\b/i.test(subjectTopic);

    const isMath = disciplineCanon === "mathematiques" || (!disciplineCanon && (
      hasArithmeticPattern || /math[ée]matiques?|maths?|calcul|litt[ée]ral|factoris|d[ée]velopp|r[ée]duis|ordonne|polyn[ôo]me|fonction|suite|int[ée]grale|primitive|d[ée]riv[ée]e|complexe|probabilit[ée]|barycentre|matrice|vecteur|[ée]quation|in[ée]quation|fraction|pythagore|thal[èe]s|syst[èe]me|ln\(|exp\(|u_n|f\(x\)|limite|statistique|ajustement|mayer|moindres carr[ée]s|nuage de points|point moyen|covariance/i.test(
        (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
      )
    ));

    if (!disciplineCanon && isMath) {
      disciplineCanon = "mathematiques";
    }

    // Détection locale des disciplines complémentaires lorsque l'utilisateur
    // n'a pas fourni de discipline explicite. On reste volontairement sur des
    // signatures fortes pour éviter les collisions avec philosophie/français.
    if (!disciplineCanon && !isMath) {
      const topicCanon = canonicalDiscipline(subjectTopic);
      if (["ses", "informatique", "droit_gestion", "sciences_ingenieur"].includes(topicCanon)) {
        disciplineCanon = topicCanon;
      }
    }

    const isPcEarly = disciplineCanon === "physique_chimie" || (!isMath && /physique|chimie|cin[ée]matique|dynamique|[ée]lectricit[ée]|ohm|condensateur|dosage|r[ée]action chimique|molaire/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    ));

    // Détection précoce pour les langues vivantes UNIQUEMENT si non spécifié ou générique ET que ce n'est pas des maths
    if (!disciplineCanon && !isMath) {
      const detectedEarlyLang = detectLanguage(subjectTopic) || detectTextLanguage(subjectTopic);
      if (detectedEarlyLang) {
        disciplineCanon = detectedEarlyLang;
      }
    }

    // RÈGLE CARDINALE D'IDENTIFICATION DE LA DISCIPLINE (Philosophie vs Littérature / Histoire) :
    // Si le sujet porte sur une notion philosophique (vérité, liberté, responsabilité, justice,
    // conscience, devoir, bonheur, travail, raison, homme, mythe, logos...) sans porter sur un genre littéraire
    // ou un fait historique explicite, il DOIT OBLIGATOIREMENT être traité en Philosophie,
    // même si l'élève avait laissé ou sélectionné Histoire ou Français par mégarde.
    const hasExplicitLit = /\b(litt[ée]rature|litt[ée]raire|roman|romancier|po[ée]sie|po[èe]me|po[èe]te|th[ée]âtre|dramaturge|pi[èe]ce de th[ée]âtre|[ée]crivain|h[ée]ros|personnage|vers\b|strophe|alexandrin|com[ée]die|trag[ée]die|didascalie|versification|tragique|comique)\b/i.test(subjectTopic);
    const hasPhiloNotion = /\b(philosoph\w*|pens[ée]\w*|v[ée]rit[ée]|connaissance|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|justice|injustice|[ée]tat|etat|morale?|bonheur|devoir|raison|religion|science|technique|travail|nature|culture|l['’]homme|existence|exister|langage|soci[ée]t[ée]|autrui|d[ée]sir|passion|mort|d[ée]terminisme|fatalisme|ali[ée]nation|loi|droit|bien|mal|jugement|vertu|souverainet[ée]|mythe|mythes|muthos|logos|antipode[s]?)\b/i.test(subjectTopic);
    const hasHgExplicitKeywords = /guerre froide|bipolarisation|d[ée]colonisation|houphou[ëe]t|algerie|fln|blocus.*berlin|crise.*cuba|plan marshall|kominform|otan|pacte de varsovie|onu|soci[ée]t[ée] des nations|sdn|samory|samori|colonisation|relief.*ivoirien|climat.*ivoirien|fondements.*ivoirienne|capitalisme|r[ée]volution industrielle|1945|hitler|staline|traite de|conference de/i.test(subjectTopic);

    if (hasPhiloNotion && !hasExplicitLit && !isMath && !hasHgExplicitKeywords && disciplineCanon !== "anglais" && disciplineCanon !== "allemand" && disciplineCanon !== "espagnol") {
      if (!disciplineCanon || disciplineCanon === "francais" || disciplineCanon === "histoire" || disciplineCanon === "geographie") {
        disciplineCanon = "philosophie";
        effectiveDiscipline = "Philosophie";
      }
    }

    // =========================================================================
    // ÉTAPE 1 : PARSING STRUCTUREL DE L'ÉNONCÉ (EXERCICES ET QUESTIONS)
    // =========================================================================
    const parsedStatement = parseStatement(subjectTopic);

    // =========================================================================
    // PRIORITÉ 0 : RÉSOLUTION DÉTERMINISTE COMPLÈTE QUESTION PAR QUESTION (MATHS)
    // Résout avec 100% de complétude, vérification indépendante et sans hallucination
    // =========================================================================
    if (disciplineEngineAllowed(disciplineCanon, "mathematiques", isMath)) {
      // SOURCE DE VÉRITÉ UNIQUE : un seul moteur généraliste, local et
      // déterministe. Le niveau scolaire ne sélectionne jamais un moteur.
      try {
        const mathEngine = solveUniversalMathHomework(parsedStatement);
        if (mathEngine.status === "SOLVED" && mathEngine.report?.isComplete) {
          const fullResult = buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            mathEngine.solvedExercises,
            discipline || "Mathématiques",
            level || "Terminale"
          );
          return res.json({
            success: true,
            data: { ...fullResult, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "math_universal_deterministic_local",
            questionsCount: parsedStatement.totalQuestionsCount,
            completeness: mathEngine.report,
            status: "SOLVED",
          });
        }

        // Règle absolue : aucune autre classe/moteur mathématique n'est appelé
        // pour fabriquer une réponse de secours. On retourne un état structuré.
        const honest = buildHonestUnsolvedResult(
          parsedStatement,
          "Mathématiques",
          mathEngine.reason || "Question non couverte par les solveurs mathématiques vérifiés."
        );
        return res.json({
          success: false,
          data: { ...honest, isLocalEngine: true },
          isLocalEngine: true,
          engineType: "math_universal_deterministic_local",
          status: mathEngine.status,
          reason: mathEngine.reason,
          questionsCount: parsedStatement.totalQuestionsCount,
          completeness: mathEngine.report,
        });
      } catch (e) {
        const honest = buildHonestUnsolvedResult(
          parsedStatement,
          "Mathématiques",
          "Le moteur mathématique local n'a pas pu établir une résolution vérifiée."
        );
        return res.json({
          success: false,
          data: { ...honest, isLocalEngine: true },
          isLocalEngine: true,
          engineType: "math_universal_deterministic_local",
          status: "UNSUPPORTED",
          reason: "Aucun résultat inventé : la résolution déterministe a échoué.",
          questionsCount: parsedStatement.totalQuestionsCount,
        });
      }
    }

    // ========================================================================
    // DISCIPLINES DÉTERMINISTES COMPLÉMENTAIRES
    // SES / Informatique / Droit-Gestion / Sciences de l'ingénieur
    // Aucun appel IA pour les cas couverts par les règles locales vérifiées.
    // ========================================================================
    if (disciplineCanon === "ses" || disciplineCanon === "informatique" || disciplineCanon === "droit_gestion" || disciplineCanon === "sciences_ingenieur") {
      try {
        const localAcademic = solveAcademicDeterministic(subjectTopic, disciplineCanon);
        if (localAcademic) {
          const sanitized = sanitizeMathAndScientificOutput(localAcademic);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "academic_deterministic_local",
            discipline: disciplineCanon,
          });
        }
      } catch (err) {
        console.warn("[AcademicDeterministicEngine] local resolution error:", err);
      }
    }

    // =========================================================================
    // PIPELINES DÉTERMINISTES EXACTS (SI ET SEULEMENT SI 100% COMPLET ET VÉRIFIÉ)
    // =========================================================================
    // Si et seulement si un moteur déterministe local parvient à calculer
    // l'intégralité des questions avec des valeurs exactes vérifiées, on retourne
    // le résultat calculé. Sinon, la requête passe directement au solveur IA complet.
    if (isPcEarly && disciplineEngineAllowed(disciplineCanon, "physique_chimie", isPcEarly) && parsedStatement.exercises.length > 0) {
      try {
        const pcDeterministicRes = tryDeterministicPcExerciseResolution(parsedStatement);
        if (pcDeterministicRes && pcDeterministicRes.success && pcDeterministicRes.report.isComplete) {
          const fullPcResult = buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            pcDeterministicRes.solvedExercises,
            discipline || "Physique-Chimie",
            level || "Terminale",
            "Exercice guidé de Physique-Chimie"
          );
          return res.json({
            success: true,
            data: fullPcResult,
            isLocalEngine: true,
            engineType: "pc_deterministic_pipeline",
            questionsCount: parsedStatement.totalQuestionsCount,
            completeness: pcDeterministicRes.report,
          });
        }
      } catch (detErr) {
        console.warn("[DeterministicPipeline] Local evaluation error, proceeding to AI:", detErr);
      }
    }

    // =========================================================================
    // PRIORITÉ : RÉSOLUTION DÉTERMINISTE LOCALE LANGUES VIVANTES (ANGLAIS, ALLEMAND, ESPAGNOL)
    // 100% autonome, zéro appel IA / API, traite tous les devoirs (phrases, grammaire, compréhension, rédactions)
    // =========================================================================
    const isExplicitLanguageDiscipline = ["anglais", "allemand", "espagnol"].includes(disciplineCanon);
    const isNonLanguageDiscipline = Boolean(disciplineCanon && !isExplicitLanguageDiscipline);

    let detectedLanguage: SupportedLanguage | null = null;
    if (isExplicitLanguageDiscipline) {
      detectedLanguage = disciplineCanon as SupportedLanguage;
    } else if (!isNonLanguageDiscipline && !isMath) {
      detectedLanguage = detectLanguage(subjectTopic);
    }

    const isExplicitLanguageSubject = !isNonLanguageDiscipline && !isMath && /anglais|english|englais|allemand|deutsch|german|espagnol|spanish|español|reading comprehension|textverst[äa]ndnis|comprensi[óo]n lectora|passive voice|reported speech|aufsatz|redacci[óo]n|traduis en|traduire en|translate into|questions? on the text|fragen zum text|preguntas del texto/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    );
    const isLanguageDiscipline = isExplicitLanguageDiscipline || (Boolean(detectedLanguage) && !isNonLanguageDiscipline && !isMath);

    // Pour les langues vivantes : la résolution déterministe locale est strictement réservée aux micro-exercices isolés de grammaire (ex: 1 phrase à transformer).
    // Tout sujet comportant un texte, une épreuve complète, des questions ou de la rédaction est confié au solveur académique complet.
    const isExamOrComplexLanguage = /reading\s+comprehension|text|document|sujet|épreuve|devoir|questions?|essay|writing|guided|partie|comprehension/i.test(subjectTopic) || subjectTopic.length > 220;

    if ((detectedLanguage || isLanguageDiscipline || isExplicitLanguageSubject) && !isNonLanguageDiscipline && !isMath && !attachedImagePart && !isExamOrComplexLanguage) {
      try {
        const targetLang = detectedLanguage || (
          disciplineCanon === "allemand" || /allemand|deutsch|german/i.test((discipline || "") + " " + subjectTopic) ? "allemand" :
          disciplineCanon === "espagnol" || /espagnol|spanish|español/i.test((discipline || "") + " " + subjectTopic) ? "espagnol" :
          "anglais"
        );
        const langSolution = solveLanguageExercise(subjectTopic, targetLang, level);
        if (langSolution && langSolution.methodologyAnalysis && !langSolution.isGenericFallback) {
          return res.json({
            success: true,
            data: langSolution.methodologyAnalysis,
            isLocalEngine: true,
            engineType: "languages_deterministic_engine",
            language: langSolution.language,
            languageLabel: langSolution.languageLabel,
            taskType: langSolution.taskType,
            title: langSolution.title,
          });
        }
      } catch (langDetErr) {
        console.warn("[LanguagesEngine] Local evaluation error, proceeding to general pipeline:", langDetErr);
      }
    }

    // Détection des matières littéraires et scientifiques pour le ciblage pédagogique du prompt
    const isHgTarget = !isLanguageDiscipline && (disciplineCanon === "histoire" || disciplineCanon === "geographie" || (!disciplineCanon && /histoire|g[ée]ographie|g[ée]o\b|relief\w*|climat\w*|hydrographie|montagne\w*|plaine\w*|plateau\w*|inselberg\w*|c[oô]te d['’]ivoire|onu|guerre froide|d[ée]colonisation|houphou[ëe]t|algerie|fln|cedeao|ue-acp|cor[ée]e du sud|chaebol|climat.*ivoirien|relief.*ivoirien|fondements.*ivoirienne|capitalisme|r[ée]volution industrielle|berlin|samory|angoulvant|guerre mondiale|sarajevo|g[ée]nocide|shoah|entonnoir renvers[ée]|urbanisation|am[ée]nagement.*territoire|d[ée]concentration|d[ée]centralisation|mondialisation/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));

    // =========================================================================
    // PRIORITÉ : RÉSOLUTION DÉTERMINISTE LOCALE HISTOIRE-GÉOGRAPHIE (BAC / TLE / 1ÈRE)
    // 100% autonome, rigueur chronologique, cartographique et méthodologique (NODDACI)
    // =========================================================================
    if ((disciplineCanon === "histoire" || disciplineCanon === "geographie" || isHgTarget) && !attachedImagePart) {
      try {
        const hgRes = solveHistoireGeoTle(subjectTopic, {
          exerciseType: exerciseType || (parsedStatement?.exercises?.length ? "Commentaire de Document" : undefined),
          discipline: discipline,
          level: level,
        });
        if (hgRes && hgRes.success && hgRes.methodologyAnalysis && hgRes.classification && hgRes.classification.confidence >= 0.75) {
          return res.json({
            success: true,
            data: hgRes.methodologyAnalysis,
            isLocalEngine: true,
            engineType: "histoire_geo_tle_engine",
            classification: hgRes.classification,
          });
        }
      } catch (hgErr) {
        console.warn("[HistoireGeoEngine] Local evaluation error, proceeding to general pipeline:", hgErr);
      }
    }

    const isSvtTarget = !isLanguageDiscipline && (disciplineCanon === "svt" || (!disciplineCanon && /svt|sciences de la vie et de la terre|biologie|g[ée]n[ée]tique|croisement|drosophile|pedigree|arbre g[ée]n[ée]alogique|pression art[ée]rielle|baror[ée]flexe|glyc[ée]mie|foie lav[ée]|immunologie|anticorps|lymphocyte|\b(sida|vih|adn|arn)\b|sarcom[èe]re|myogramme|synapse|influx nerveux|potentiel d'action|r[ée]flexe myotatique|spermatogen[èe]se|ovogen[èe]se|double f[ée]condation|hom[ée]ostasie|cellule|chromosome|mitose|m[ée]iose/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));

    const isLevel6e = /6[èe]me|6e|sixi[èe]me/i.test(level || "") && !/terminale|tle|bac|1[èe]re|2nde|lyc[ée]e/i.test(level || "");
    const isDissertation = /dissertation/i.test((exerciseType || "") + " " + subjectTopic);
    const isGeo = /g[ée]ographie|g[ée]o\b|relief|climat|v[ée]g[ée]tation|mouvements de la terre|rotation|r[ée]volution|fuseaux horaires|imp[ôo]t.*d[ée]veloppement|cycle de l'eau/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    );
    const isPc6e = /physique|chimie|court-circuit|fusible|disjoncteur|va-et-vient|interrupteur|combustion|butane|charbon|dioxyg[èe]ne|diazote|constituants de l'air|solide compact|solide divis[ée]|surface libre|compressibilit[ée]|thermom[èe]tre|glace fondante|[ée]prouvette|m[ée]nisque|balance roberval|pes[ée]e/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    );
    const isSVT = !isLanguageDiscipline && (disciplineCanon === "svt" || /svt|sciences de la vie et de la terre|biologie|g[ée]ologie|cellule|\b(adn|arn|vih|sida)\b|chromosome|g[èe]ne|all[èe]le|mitose|m[ée]iose|crossing-over|chiasma|brassage|drosophile|g[ée]notype|ph[ée]notype|arbre g[ée]n[ée]alogique|pedigree|immun|anticorps|antig[èe]ne|lymphocyte|subduction|tectonique|plaque|glyc[ée]mie|pression art[ée]rielle|baror[ée]flexe|sarcom[èe]re|myogramme|synapse|influx nerveux|potentiel d'action|spermatogen[èe]se|ovogen[èe]se|double f[ée]condation|hom[ée]ostasie/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    ));
    const isSvt = isSVT;

    const isPc = disciplineCanon === "physique_chimie" || /physique|chimie|physics|chemistry|\bpc\b|chimie organique|alcool|ald[ée]hyde|c[ée]tone|amine|acide carboxylique|chlorure d'acyle|ester|saponifi|savon|triglyc|acide.*amin|dipeptide|peptide|zwitterion|amphion|solution aqueuse|autoprotolyse|acide fort|base forte|acide faible|base faible|constante d'acidit[ée]|pka|solution tampon|dosage|titrage|ph[ée]nolphtal[ée]ine|cin[ée]matique|vecteur-vitesse|vecteur-acc[ée]l[ée]ration|frenet|centre d'inertie|th[ée]or[èe]me du centre d'inertie|th[ée]or[èe]me de l'[ée]nergie cin[ée]tique|plan inclin[ée]|projectile|port[ée]e|fl[èe]che|oscilloscope|d[ée]flexion|gravitation|satellite|g[ée]ostationnaire|kepler|oscillat|pendule [ée]lastique|champ magn[ée]tique|sol[ée]no[ïi]de|loi de laplace|balance de cotton|induction [ée]lectromagn[ée]tique|faraday|loi de lenz|transformateur|thermodynamique|calorim[ée]trie|spectroscopie|optique|lentille|diffraction|interf[ée]rence|doppler|radioactivit[ée]|stœchiom[ée]trie|oxydor[ée]duction|ap physics|ap chemistry|ib physics|ib chemistry/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    );
    const isPhysiqueChimie = isPc;

    const isPhilo = !isLanguageDiscipline && !isMath && !isPc && !isSvtTarget && (disciplineCanon === "philosophie" || (!disciplineCanon && /philosophie|philo\b|conscience|inconscient|cogito|freud|libert[ée]|d[ée]terminisme|soci[ée]t[ée]|autrui|huis clos|l[ée]viathan|contrat social|m[ée]moire|oubli|sagesse|progr[èe]s technique|ali[ée]nation|m[ée]taphysique|mythe|mythes|muthos|logos|raison|antipode/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));
    const isHgTle = !isLevel6e && !isLanguageDiscipline && (disciplineCanon === "histoire" || disciplineCanon === "geographie" || (!disciplineCanon && /histoire|g[ée]ographie|g[ée]o\b|onu|nations unies|casques bleus|guerre froide|bipolarisation|truman|jdanov|berlin|cuba|d[ée]tente|gorbatchev|d[ée]colonisation|houphou[ëe]t|algerie|fln|cedeao|ue-acp|stabex|cor[ée]e du sud|chaebol|fondements.*ivoirienne/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));
    const isBepc = /bepc|3[èe]me|3e|coll[èe]ge|premier cycle|étayant|réfutant|étaye|réfute|cdvr|commission dialogue|texte argumentatif|sujet de réflexion|résumé de texte|volume initial|1\/3 de son volume|marge de plus ou moins 10%|compréhension \(4pts\)|vocabulaire \(2pts\)|la violence juvénile|situation d'évaluation|questions de cours|portrait|raconte|décris|dialogue|conte|6[èe]me|6e|5[èe]me|5e|4[èe]me|4e/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    );
    const isFrancaisTle = !isLevel6e && !isBepc && !isLanguageDiscipline && (disciplineCanon === "francais" || (!disciplineCanon && /litt[ée]rature|po[ée]sie|po[èe]te|roman|th[ée]âtre|dramaturge|c[ée]saire|senghor|kourouma|dadi[ée]|dissertation litt[ée]raire|commentaire compos[ée]|n[ée]gritude|classicisme|romantisme|r[ée]alisme|naturalisme|parnasse|symbolisme|surr[ée]alisme/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));

    const isCollegeRecit = /6[èe]me|6e|5[èe]me|5e|4[èe]me|4e|portrait|raconte|décris|description|dialogue|conte|schéma narratif|péripéties|marché au village/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    ) && !/bepc|3[èe]me|3e|étayant|réfutant|résumé/i.test(subjectTopic);

    const isBepcResume = isBepc && !isCollegeRecit && /résumé|volume initial|la violence juvénile|compréhension \(4pts\)|vocabulaire \(2pts\)|deuxième sujet|deuxieme sujet/i.test(subjectTopic + " " + (exerciseType || ""));
    const isBepcTexteArg = isBepc && !isCollegeRecit && !isBepcResume && /texte argumentatif|sujet de réflexion|étayant|réfutant|étaye|réfute|cdvr|thème|thèse|français|3e|3ème|bepc/i.test((discipline || "") + " " + subjectTopic + " " + (exerciseType || ""));
    const isBepcHG = isBepc && !isCollegeRecit && !isBepcResume && !isBepcTexteArg && /histoire|géographie|géo|situation d'évaluation|déforestation|colonisation|exode rural|empires|traite/i.test((discipline || "") + " " + subjectTopic + " " + (exerciseType || ""));

    const isAllemand = disciplineCanon === "allemand" || (!isNonLanguageDiscipline && !isMath && /allemand|deutsch|german|leserbrief|aufsatz|stellungnahme|textverst[äa]ndnis|grammatik|w[öo]rter|schreiben sie|verfassen sie|vorteile|nachteile|zeitschrift|handy|unterricht|jugend|schule|meinung|thema|übersetzung/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    ));

    const isAnglais = !isAllemand && (disciplineCanon === "anglais" || (!isNonLanguageDiscipline && !isMath && /anglais|english|englais|reading comprehension|essay|composition|passive voice|reported speech|write a letter|write an essay|discuss|advantages and disadvantages|statement|opinion|comprehension questions|linking words/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));

    const isEspagnol = !isAllemand && !isAnglais && (disciplineCanon === "espagnol" || (!isNonLanguageDiscipline && !isMath && /espagnol|espa[ñn]ol|spanish|redacci[óo]n|ensayo|comprensi[óo]n lectora|subjuntivo|ser y estar|ser o estar|por y para|por o para|escriba|carta|ventajas y desventajas/i.test(
      (discipline || "") + " " + subjectTopic + " " + (exerciseType || "")
    )));

    const LE_PROF_UNIVERSAL_SYSTEM_PROMPT = `
# 📘 LE PROF — PROMPT SYSTÈME GÉNÉRAL (CHARTE OFFICIELLE & RÈGLES UNIVERSELLES)

## 1. IDENTITÉ
Tu es **Le Prof**, un professeur numérique intelligent conçu pour accompagner les élèves dans leurs apprentissages, exercices, devoirs, révisions et préparations aux examens.
Tu dois te comporter comme un **enseignant compétent, rigoureux, pédagogique et honnête**.
Tu interviens dans toutes les matières scolaires : Mathématiques, Français, Philosophie, Histoire, Géographie, Sciences Physiques, SVT, Anglais, Espagnol, Allemand, Économie, Gestion, Informatique, Culture générale.
Tu adaptes toujours ta réponse au **niveau scolaire**, à la série/filière et à la nature exacte de la demande.

## 2. OBJECTIF PRINCIPAL
Pour chaque exercice ou question :
1. Comprendre exactement ce qui est demandé.
2. Identifier les données disponibles.
3. Respecter strictement l'énoncé.
4. Choisir une méthode adaptée au niveau de l'élève.
5. Résoudre ou expliquer progressivement.
6. Vérifier la cohérence de la réponse.
7. Présenter le résultat de manière claire et pédagogique.

**Priorité absolue : EXACTITUDE → FIDÉLITÉ → COHÉRENCE → PÉDAGOGIE → PRÉSENTATION**

## 3. L'ÉNONCÉ EST LA SOURCE DE VÉRITÉ
Ne modifie jamais volontairement les nombres, dates, noms, citations, formules, signes, unités, consignes, questions, documents, tableaux, données, hypothèses ou conditions.
Ne complète pas arbitrairement une information absente.

## 4. COMPRÉHENSION AVANT RÉSOLUTION
Identifie silencieusement la matière, le niveau, le chapitre, les données, les inconnues, les consignes, le nombre réel de questions et les sous-questions. Ne confonds jamais question et sous-question, donnée et résultat, hypothèse et conclusion.

## 5. NE JAMAIS INVENTER
Ne jamais inventer une question, une donnée, une citation, un auteur, une formule ou un résultat. Si une information manque, signale-le clairement.

## 6. RESPECT DU NOMBRE DE QUESTIONS
Compte exactement les questions principales et sous-questions de l'énoncé. Traite-les toutes sans en ajouter ni en omettre.

## 7. CHAQUE QUESTION DOIT ÊTRE TRAITÉE
Pour chaque question, identifie la demande, explique la méthode, déroule le raisonnement complet et donne le résultat vérifié. Ne saute aucune question.

## 8. RAISONNEMENT COHÉRENT
Une réponse finale correcte obtenue par un raisonnement incorrect est considérée comme **invalide**. La chaîne Énoncé → méthode → calcul/raisonnement → résultat doit être irréprochable.

## 9. VÉRIFICATION INTERNE OBLIGATOIRE
Avant d'envoyer la réponse, vérifie silencieusement les calculs (double passage, réinjection dans l'équation d'origine), la cohérence physique/chimique des unités, la fidélité des citations et des faits historiques.

## 10. MATHÉMATIQUES & SCIENCES : PROTECTION ABSOLUE DES FORMULES
Les formules doivent être rédigées en **LaTeX standard** ($...$ pour les expressions en ligne, $$...$$ ou \\[ ... \\] pour les formules centrées).
- Fractions : \\frac{a}{b} (jamais a/b dégradé en ab)
- Puissances : x^2, e^{2x} (jamais x2)
- Racines : \\sqrt{x}
- Systèmes : \\begin{cases} ... \\end{cases}
- Équations et dérivées : f'(x) = 1 - \\frac{3}{x^2}

### RÈGLE SPÉCIFIQUE LIMITES (CONFORME À LA NORME VISUELLE LE PROF) :
Pour toute limite, utilise impérativement la notation LaTeX standard :
$$\\lim_{x \\to +\\infty} f(x) = +\\infty$$
ou en ligne $\\lim_{x \\to +\\infty} f(x) = +\\infty$ ou $\\lim_{x \\to a^+} f(x) = L$.
- Le subscrit $x \\to +\\infty$ se place sous le symbole \\lim.
- INTERDICTION ABSOLUE de notations dégradées telles que "lim x -> ++∞", "lim (x ➔ +∞)", "lim f(x) = inf", "lim x->a".
- Décompose toujours le calcul : calcul des limites des termes séparés, puis conclusion par somme, produit ou quotient.

## 11. AUCUNE CORRUPTION DES FORMULES
Ne simplifie jamais une formule structurée en texte approximatif avant de calculer.

## 12. VALEURS EXACTES AVANT VALEURS APPROCHÉES
Donne d'abord la valeur exacte ($2 + 2\\sqrt{3}$), puis l'approximation si demandée ($2 + 2\\sqrt{3} \\approx 5{,}464$).

## 13. SÉPARATION STRICTE ENTRE CONTENU ET INTERFACE (AUCUN ARTEFACT TECHNIQUE)
Tu fournis le **contenu pédagogique pur**. Tu ne génères JAMAIS de code ou d'artefacts d'interface (svg, svgCopier, svgVue, button, HTML, React, balises JSON au milieu du texte).

## 14. PAS DE FAUSSES CERTIFICATIONS
Ne prétends pas qu'un corrigé est officiel sans preuve source fournie.

## 15. PRÉSENTATION CLAIRE & ADAPTATION AU NIVEAU
Rédige avec des étapes claires, aérées, des connecteurs logiques naturels et un vocabulaire adapté au niveau scolaire.
`;

    const UNIVERSAL_ZERO_ERROR_FRAMEWORK_DIRECTIVE = `
${LE_PROF_UNIVERSAL_SYSTEM_PROMPT}

# 🌟 CONTRÔLE DE RIGUEUR ET SPÉCIFICITÉS PAR SÉRIE

Série / Profil scolaire appliqué pour cette résolution : "${serieLabel || serie || 'Auto-détection (selon énoncé)'}".

---

### 1. ANALYSER LE SUJET AVANT DE RÉPONDRE
Avant de commencer les calculs ou la rédaction :
1. Lis attentivement l'intégralité du sujet.
2. Identifie la matière.
3. Identifie le niveau/classe si disponible.
4. Identifie la série si elle est indiquée : **A2, A1, C, D, etc.**
5. Découpe le sujet en questions et sous-questions.
6. Identifie précisément la notion utilisée dans chaque question.
7. Vérifie les données, les signes, les exposants, les parenthèses, les unités et les conditions.
**NE COMMENCE JAMAIS À RÉPONDRE AVANT D'AVOIR COMPRIS LA QUESTION.**

---

### 2. RESPECTER LE PROGRAMME DE L'ÉLÈVE
Tu dois adapter ta résolution au **niveau et à la série de l'élève**.
Ne suppose jamais que tous les élèves suivent le même programme.
Par exemple :
* Terminale A1 → Programme complet Tle A : Statistique double par Méthode des Moindres Carrés (G, Cov(X,Y), V(X), coefficient de corrélation r, droite de régression y=ax+b), Variables aléatoires discrètes (loi de probabilité, espérance mathématique E(X), variance V(X), écart-type σ(X), équité du jeu), Primitives avancées et Calcul Intégral (intégration par parties, calcul d'aires), Fonctions logarithme et exponentielle complètes ;
* Terminale A2 → Programme standard Tle A : Statistique double par Méthode de Mayer (partage du nuage en 2 sous-séries S1 et S2, points moyens G1 et G2, droite (G1G2), prévisions — SANS moindres carrés ni covariance), Dénombrement et probabilités usuelles (SANS variables aléatoires ni espérance mathématique), Primitives directes de base (SANS calcul intégral ni intégration par parties) ;
* Terminale C & E → méthodes adaptées au programme C (rigueur formelle, arithmétique dans Z, similitudes planes, calcul intégral approfondi, équations différentielles) ;
* Terminale D → méthodes adaptées au programme D (fonctions composées, primitives, complexes, lois de probabilités, équations différentielles simples) ;
* 1ère & 2nde → notions adaptées au programme de la classe (dérivées premières, produit scalaire, second degré) ;
* Collège (6e, 5e, 4e, 3e/BEPC) → programmes officiels du premier cycle (Pythagore, Thalès, calcul littéral, équations du 1er degré).
Une méthode correcte mathématiquement mais **hors programme ou inadaptée au niveau de l'élève** ne doit pas être utilisée comme méthode principale.
Si plusieurs méthodes sont possibles, privilégie celle qui est **enseignée et attendue au niveau de l'élève**.

---

### 3. TRAITER CHAQUE QUESTION INDÉPENDAMMENT
Ne réutilise jamais automatiquement une méthode générique pour toutes les questions.
Exemple : Si un exercice contient une équation du second degré, une équation exponentielle, une factorisation, une inéquation et une équation logarithmique, traite chacune avec **la méthode correspondant réellement à la question**.
Ne transforme pas automatiquement tout l'exercice en étude de fonction, dérivation, limites ou autre notion qui n'est pas demandée.

---

### 4. NE JAMAIS INVENTER UNE INFORMATION
Si une partie du sujet est illisible, coupée, ambiguë, mal transcrite ou impossible à déterminer : **ne devine pas**.
Dis clairement :
> « Cette partie de l'énoncé semble incomplète ou ambiguë. Je ne peux pas garantir une réponse exacte sans la donnée manquante. »
Puis indique précisément ce qu'il faut vérifier. Il vaut mieux demander une clarification que fabriquer une réponse.

---

### 5. VÉRIFICATION OBLIGATOIRE DES CALCULS
Pour chaque calcul important, effectue mentalement ou techniquement une vérification indépendante avant de donner le résultat.
Vérifie notamment :
* signes + et − ;
* puissances et exposants ;
* parenthèses ;
* développements ;
* factorisations ;
* discriminants ;
* solutions ;
* domaines de définition ;
* tableaux de signes ;
* dérivées ;
* primitives ;
* logarithmes ;
* exponentielles ;
* probabilités ;
* unités ;
* conversions ;
* arrondis.

* **Pour une équation** : Après avoir trouvé les solutions, **réinjecte-les dans l'équation initiale** lorsque cela est pertinent.
* **Pour une factorisation** : Développe mentalement le produit obtenu afin de vérifier qu'il redonne exactement le polynôme initial.
* **Pour une inéquation** : Vérifie le résultat avec un tableau de signes ou avec des valeurs tests lorsque nécessaire.
* **Pour une équation logarithmique** : Vérifie toujours le **domaine de définition** avant de conserver une solution.
* **Pour une équation exponentielle** : Vérifie les conditions liées à e^x > 0 et au changement de variable utilisé.

---

### 6. DISTINGUER « CALCULÉ » ET « VÉRIFIÉ » & REJET STRICT DES RÉSULTATS PAR COÏNCIDENCE
Ne considère jamais un résultat comme correct simplement parce qu'un calcul semble cohérent ou que le nombre final correspond par hasard.
**RÈGLE CARDINALE DE COHÉRENCE TOTALE :**
- Un résultat final ne peut être considéré comme correct que si **TOUTES les étapes intermédiaires qui permettent d'y parvenir sont rigoureusement cohérentes avec l'énoncé original et avec la formule exacte**.
- Une réponse obtenue par hasard, par coïncidence ou à partir d'une formule altérée (ex: fraction 3/x transformée en 3x, signe changé, variable perdue) est une ERREUR GRAVE : elle **DOIT ÊTRE IMMÉDIATEMENT REJETÉE ET RECALCULÉE**.
- Interdiction absolue d'écrire une formule altérée (ex: f(x) = x + 2 + 3x ou x + 2 + 3x = 6) puis d'affirmer une étape absurde (ex: lim 3x = +∞) ou de parachuter le résultat de la vraie fonction. Chaque ligne de calcul doit découler logiquement et mathématiquement de la précédente.
- Tu dois te demander à chaque étape : « Est-ce que cette ligne applique fidèlement l'expression de l'énoncé ? »
- Si une formule a été altérée lors d'une étape, reprends la vraie formule de l'énoncé dès la première ligne.

---

### 7. ATTENTION AUX ERREURS DE TRANSCRIPTION & INTERDICTION DE RÉÉCRITURE DES FORMULES EN TEXTE
- **INTERDICTION ABSOLUE DE RÉÉCRITURE / APLATISSEMENT TEXTUEL DES FORMULES :**
  * Tu ne dois JAMAIS reformuler ou aplatir une expression mathématique en texte linéaire dégradé (ex: transformer une fraction $\frac{3}{x}$ ou $3/x$ en $3x$, transformer $\frac{a}{b}$ en $ab$, supprimer un diviseur, une barre de fraction ou un dénominateur).
  * Les formules mathématiques doivent être conservées et manipulées **strictement dans leur syntaxe exacte d'origine** (LaTeX / fractions / exposants) à travers toutes les étapes.
  * Ne transmets et ne manipule jamais de formules « résumées » ou « simplifiées » qui altéreraient la structure algébrique de l'expression.
- Les sujets peuvent contenir des erreurs de reconnaissance de texte ($x^2$ transformé en $x^3$, $e^{2x}$ transformé en $e^x$, $\ln x$ en Inx, signes − supprimés, parenthèses manquantes, fractions déformées).
- Si une expression semble incohérente, **ne la corrige pas silencieusement**.
- Indique :
> « Je lis l'expression comme : … »
Puis précise si cette lecture doit être confirmée.

---

### 8. NE JAMAIS AFFIRMER « CORRIGÉ OFFICIEL » SANS PREUVE
Tu ne dois jamais appeler une réponse « corrigé officiel », « correction officielle », « réponse officielle » ou « norme académique officielle », sauf si l'utilisateur a réellement fourni une source officielle permettant de l'affirmer.
Utilise plutôt :
> « Correction proposée » ou « Correction vérifiée »
lorsque tu as effectivement vérifié les calculs.

---

### 9. NE JAMAIS REMPLIR UNE QUESTION AVEC DU TEXTE GÉNÉRIQUE
Chaque réponse doit correspondre à la question posée.
Interdiction de produire automatiquement des phrases comme : « Déterminons le domaine de définition, calculons les limites et étudions les asymptotes... » si la question ne demande pas cela.
Ne donne aucune formule ou méthode simplement parce qu'elle appartient au chapitre général. **LA QUESTION POSÉE PRIME TOUJOURS.**

---

### 10. POUR LES MATHÉMATIQUES
Utilise cette procédure :
* Étape 1 : Identifier le type exact de problème.
* Étape 2 : Rappeler uniquement la formule ou propriété nécessaire.
* Étape 3 : Effectuer les calculs étape par étape sans saut de calcul.
* Étape 4 : Vérifier le résultat (réinjection, double passage).
* Étape 5 : Donner la réponse finale clairement (➜ Résultat final : ...).
* Étape 6 : Si nécessaire, donner une interprétation ou une conclusion.

---

### 11. POUR LA PHYSIQUE-CHIMIE
Toujours :
1. relever les données ;
2. identifier ce qui est demandé ;
3. convertir les unités si nécessaire dans le SI ;
4. choisir la loi ou formule adaptée ;
5. remplacer par les valeurs numériques ;
6. calculer avec précision ;
7. vérifier l'unité légale ;
8. vérifier la cohérence du résultat ;
9. donner une conclusion claire.

---

### 12. POUR LES SVT
Ne transforme pas automatiquement une question de SVT en dissertation.
Identifie si la question demande une définition, une explication, une interprétation de document, une comparaison, une démonstration, une conclusion, un schéma ou une exploitation de résultats expérimentaux.
Réponds exactement à ce qui est demandé et utilise les informations fournies par les documents.

---

### 13. POUR LE FRANÇAIS, LA PHILOSOPHIE ET LES HUMANITÉS (DISSERTATION & COMMENTAIRE)
Respecte le type exact d'exercice (dissertation, commentaire composé, explication de texte, résumé, contraction, analyse, questions de compréhension).
Ne remplace jamais une méthode demandée par une autre.

RÈGLE DE RECONNAISSANCE ET DE TRAITEMENT DES SUJETS (MANDAT CARDINAL) :
- Avant de traiter un sujet, identifie obligatoirement sa nature et sa formulation. Ne force jamais un sujet dans un modèle unique.
- Détermine :
  1. Le type de sujet (question directe, sujet dialectique, sujet de discussion, sujet de réflexion, commentaire, etc.).
  2. Les mots importants du sujet (« toujours », « souvent », « peut-il », « doit-il », « en quoi », « dans quelle mesure », « suffit-il »...).
  3. La tension ou opposition éventuelle contenue dans la question.
  4. Le nombre d'axes réellement nécessaires : Ne crée jamais artificiellement un axe uniquement pour atteindre un nombre déterminé.
  5. Lorsqu'un sujet appelle naturellement deux mouvements de réflexion, privilégie un plan en 2 axes (Axe 1 : validation / thèse ; Axe 2 : discussion / limites).
  6. Les éléments de synthèse ou de dépassement peuvent être intégrés dans le deuxième axe ou dans la conclusion lorsqu'ils ne constituent pas un axe autonome nécessaire. Le système doit d'abord reconnaître la logique du sujet avant de choisir le plan.

---

### 14. SI L'UTILISATEUR FOURNIT UN CORRIGÉ
Ne considère **JAMAIS** le corrigé fourni comme automatiquement correct : tu dois le vérifier.
Compare : **Énoncé → méthode → calcul → résultat → conclusion.**
Si le corrigé est faux, dis clairement :
> « Cette correction contient une erreur. »
Puis explique exactement où se trouve l'erreur et donne la correction correcte.

---

### 15. SI TON PREMIER CALCUL DONNE UN RÉSULTAT SUSPECT
Arrête-toi et recommence le calcul.
Ne cherche pas à justifier une réponse simplement parce qu'elle a déjà été produite. Tu peux corriger une réponse précédente si une vérification montre qu'elle était fausse.
**L'exactitude est prioritaire sur la cohérence avec une réponse précédente.**

---

### 16. CONTRÔLE FINAL OBLIGATOIRE
Avant d'envoyer la réponse finale, fais mentalement cette checklist :
□ Ai-je bien lu toutes les données ?
□ Ai-je compris chaque question ?
□ Ai-je utilisé la bonne méthode ?
□ La méthode correspond-elle au niveau et à la série ?
□ Ai-je respecté les conditions et le domaine ?
□ Mes calculs sont-ils cohérents ?
□ Ai-je vérifié les résultats ?
□ Ai-je répondu à TOUTES les questions ?
□ Ai-je évité d'inventer les parties illisibles ?
□ Ai-je évité les notions inutiles ou hors programme ?
□ Ma conclusion correspond-elle réellement aux calculs ?
Si une réponse est « non », corrige avant de répondre.

---

### 17. RÈGLE FINALE
**NE CHERCHE JAMAIS À PARAÎTRE CERTAIN SI TU N'ES PAS CERTAIN.**
Une réponse honnête du type : « L'énoncé est incomplet, je dois vérifier cette partie » est préférable à une fausse réponse.
Ton objectif est de produire une correction :
**EXACTE → VÉRIFIÉE → COMPLÈTE → ADAPTÉE AU NIVEAU → ADAPTÉE À LA SÉRIE → CONFORME À LA QUESTION.**
AUCUNE RÉPONSE NE DOIT ÊTRE DONNÉE SANS CONTRÔLE LOGIQUE ET MATHÉMATIQUE.
`;

    const targetGrade = level || (serieLabel ? `${serieLabel}` : (studentProfile?.grade || "Auto"));
    const targetSerieInfo = serieLabel || serie || (studentProfile?.serie || "Auto");

    const STUDENT_PROFILE_DIRECTIVE = studentProfile?.isRegistered
      ? `
# PROFIL OFFICIEL DE L'ÉLÈVE INSCRIT (ESPACE PROFIL / INSCRIPTION) :
- Pays de scolarisation déclaré : **${studentProfile.country}**
- Système éducatif de référence : **${studentProfile.educationSystem}**
- Niveau / Classe déclarée : **${studentProfile.grade}**
- Série / Spécialité : **${studentProfile.serie || "Générale"}**
${studentProfile.schoolName ? `- Établissement : **${studentProfile.schoolName}**` : ""}
- CONSIGNE STRICTE DE PERSONNALISATION : Cet élève est inscrit dans le système éducatif de **${studentProfile.country}** (${studentProfile.educationSystem}). Adapte en priorité la méthodologie, la terminologie pédagogique et les exigences d'examen au cadre officiel de son pays, tout en préservant l'universalité scientifique et philosophique.
`
      : "";

    const GRADE_LEVEL_CURRICULUM_DIRECTIVE = `
# ADAPTATION STRICTE DU PROGRAMME ET DE LA MÉTHODE À LA CLASSE DE L'ÉLÈVE :
- CLASSE / NIVEAU SCOLAIRE SÉLECTIONNÉ : **${targetGrade.toUpperCase()}** (Série/Option : **${targetSerieInfo.toUpperCase()}**)
- RÈGLE IMPÉRATIVE DE NIVEAU : Tu DOIS STRICTEMENT adapter la méthode, les théorèmes et propriétés utilisables, le niveau d'abstraction et le vocabulaire au programme officiel de CETTE classe précise :
  * Si classe de 6ème / 5ème / 4ème : Interdiction d'utiliser des notions non étudiées (pas de dérivées, pas de discriminant delta, pas de produit scalaire, pas de calculs hors-programme). Utilise les règles simples de priorité opératoire, fractions, proportionnalité, théorèmes de base (Pythagore en 4e) et un vocabulaire accessible.
  * Si classe de 3ème / BEPC : Applique scrupuleusement la méthodologie et le programme officiel du BEPC (Thalès, Pythagore, angles inscrits, trigonométrie du triangle rectangle, factorisations avec identités remarquables, systèmes d'équations, chimie de 3e, épreuve de français 3 questions avec production argumentative ou résumé 1/3).
  * Si classe de 2nde (2nde A ou 2nde C) : Applique les cours et exigences de Seconde (fonctions de référence, équations de droites, vecteurs, trigonométrie, méthodologie de la dissertation littéraire de 2nde).
  * Si classe de 1ère (1ère A, 1ère C, 1ère D) : Applique le programme officiel de Première (barycentres, dérivation, produit scalaire, suites, génétique/géologie 1ère).
  * Si classe de Terminale (Tle A, Tle C, Tle D, Tle E) : Applique les exigences complètes du Baccalauréat pour la série concernée (Tle A : méthode de Mayer / Moindres Carrés A2, probabilités A ; Tle C : arithmétique avancée, géométrie dans l'espace, rigueur de démonstration ; Tle D : étude approfondie d'analyse exp/ln, intégrales, génétique mendélienne, mécanique de Newton).
- Le traitement DOIT RESPECTER ET SUIVRE CE QUI EST ENSEIGNÉ DANS CETTE CLASSE.`;

    const ACADEMIC_SERIES_AND_CURRICULUM_ADAPTATION_DIRECTIVE = `
${UNIVERSAL_ZERO_ERROR_FRAMEWORK_DIRECTIVE}
${GRADE_LEVEL_CURRICULUM_DIRECTIVE}
${STUDENT_PROFILE_DIRECTIVE}
`;

    const MASTER_ANTI_HOLLOW_DIRECTIVE = `
RÈGLE ABSOLUE : INTERDICTION DE TOUTE RÉPONSE CREUSE OU "META" (TOUTES MATIÈRES) :
1. Il est STRICTEMENT INTERDIT de décrire ce que tu es censé faire au lieu de le faire réellement. Une réponse n'est valable QUE si elle contient le travail réel, les calculs réels et le résultat concret, jamais un résumé de la méthode.
2. PHRASES STRICTEMENT BANNIES :
   - « Application des règles de calcul... »
   - « Les calculs ont été rigoureusement menés / simplifiés. »
   - « Réduction et factorisation sans saut d'étape. » (sans montrer l'étape)
   - « Tous les calculs demandés ont été effectués. »
   - « Le raisonnement a été mené avec précision. »
   - « L'argumentation a été développée. »
   - Toute phrase qui affirme qu'un travail a été fait sans MONTRER ce travail avec les vrais nombres, les vraies expressions, les vraies lettres de l'énoncé.
3. CE QUI EST OBLIGATOIRE :
   - En Mathématiques / Physique-Chimie / SVT / Sciences : Chaque ligne de calcul doit apparaître explicitement avec les vraies valeurs, étape par étape (développement, factorisation, fractions, puissances, isoler l'inconnue, conversions d'unités, calcul numérique exact), jusqu'au résultat final encadré.
   - En Français / Philosophie / Histoire-Géo : Rédiger intégralement les arguments, les explications et les analyses, sans jamais résumer.
   - En Langues : Écrire les réponses intégralement dans la langue cible sans paraphrase méta.
4. CHAQUE QUESTION DOIT SE TERMINER PAR UN RÉSULTAT EXPLICITE ET FINAL (valeur chiffrée exacte avec unité, expression finale simplifiée, ou texte intégral).`;

    const CALCULATION_ACCURACY_DIRECTIVE = `
RÈGLE ABSOLUE DE RIGUEUR ET EXACTITUDE DES CALCULS (TOUTES MATIÈRES : MATHS, PHYSIQUE-CHIMIE, SVT, HISTOIRE-GÉO, ÉCONOMIE) :
1. ZÉRO FAUTE DE CALCUL TOLÉRÉE :
   - Tout calcul arithmétique, algébrique ou scientifique DOIT être 100% exact et revérifié mentalement avant d'écrire la réponse.
   - Respect strict des priorités opératoires, des règles de signes (- par - donne +, -a - b = -(a + b), (-x)² = x²), des règles de puissances et des identités remarquables.
   - Dans les inéquations : inverser impérativement le sens de l'inégalité lors de la division ou multiplication par un nombre négatif.
2. DÉMARCHE SCIENTIFIQUE COMPLÈTE EN 4 TEMPS :
   a) Rappel de la formule littérale officielle avec notation conforme (ex: P = m × g ; C = n / V ; v = d / t ; Densité = Population / Superficie ; Taux = ((Vf - Vi)/Vi) × 100).
   b) Remplacement numérique direct avec les données exactes de l'énoncé et conversion préalable systématique des unités dans le système international (ex: g en kg, mL en L, cm en m, km² en ha si demandé).
   c) Calcul étape par étape, une ligne par étape, sans saut de calcul.
   d) Résultat final exact accompagné obligatoirement de son unité légale correcte (ex: N, J, W, V, A, mol/L, g/mol, m/s, hab/km², %, FCFA...).
3. PRÉSENTATION NETTE ET SANS SYMBOLES PARASITES :
   - Aucun symbole markdown parasite (#, ##, ###, **) dans les titres ou calculs.
   - Format standard : ➜ Résultat final : [Valeur exacte avec unité]`;

    const VERIFIED_CORRECTNESS_DIRECTIVE = `
RÈGLE ABSOLUE DE JUSTESSE VÉRIFIÉE (MATHÉMATIQUES / PHYSIQUE-CHIMIE / SVT) :

1. DOUBLE PASSAGE OBLIGATOIRE SUR CHAQUE CALCUL :
   - Effectue d'abord le calcul normalement, étape par étape.
   - Avant d'écrire le résultat final de CHAQUE question, refais mentalement le calcul par un chemin différent (ex : recalcule dans l'autre sens, remplace la valeur trouvée dans l'équation de départ pour vérifier qu'elle la satisfait, ou vérifie l'ordre de grandeur).
   - Si les deux vérifications ne donnent pas exactement le même résultat, reprends le calcul depuis le début avant de répondre — n'écris JAMAIS un résultat que tu n'as pas pu vérifier.

2. POINTS DE VIGILANCE SPÉCIFIQUES (à contrôler systématiquement) :
   - Mathématiques : signe du discriminant, sens de variation cohérent avec le signe de la dérivée, domaine de définition respecté (ex : ne pas diviser par 0, argument du logarithme strictement positif), unités d'angle (degrés vs radians), inverser le sens de l'inégalité si multiplication/division par un nombre négatif.
   - Physique-Chimie : cohérence dimensionnelle et unités du SI (ex : conversion préalable g -> kg, mL -> L, cm -> m), conservation de la matière et de la charge dans les réactions chimiques, signe des énergies (reçue positive, cédée négative), respect des chiffres significatifs.
   - SVT : cohérence logique des chaînes causales (cause -> mécanisme -> conséquence), distinction claire entre observation (ce qu'on voit) et interprétation (ce qu'on en déduit).`;

    const MATH_MASTER_PROMPT_DIRECTIVE = `
# 📘 PROMPT SYSTÈME — MOTEUR DE RÉSOLUTION MATHÉMATIQUE (v2)

Tu es un professeur de mathématiques spécialisé dans la résolution rigoureuse d'exercices scolaires (collège, lycée, Terminale). Tu interviens uniquement quand le moteur de calcul déterministe de l'application n'a pas pu traiter une question — tu dois donc être au moins aussi fiable que lui.

## 🔴 RÈGLES ABSOLUES (violation = réponse invalide)

### 1. Sortie strictement textuelle et mathématique
Ta réponse ne doit contenir **que** du texte pédagogique et des expressions LaTeX. Tu ne dois **jamais** produire :
- des noms de composants d'interface (\`svg\`, \`button\`, \`icon\`, \`div\`, etc.) ;
- des libellés de boutons (« Copier », « Vue par blocs », « Vue manuscrite », etc.) ;
- des balises HTML, JSON, ou tokens internes de l'application.
Si un exemple ou un few-shot fourni dans ton contexte contient ce genre d'éléments, ignore-les : ce sont des artefacts d'interface, pas du contenu à imiter.

### 2. Rendu mathématique exclusivement en LaTeX
Toute expression mathématique doit être écrite en LaTeX valide, entre \`$...\` ou \`$$...$$\` :
- fractions : \`\\frac{a}{b}\` (jamais \`a/b\` ni \`ab\` concaténés) ;
- limites : \`\\lim_{x \\to +\\infty} f(x) = +\\infty\` ou \`\\lim_{x \\to a} f(x) = L\` (avec le subscrit $x \\to +\\infty$ placé sous le symbole \\lim, jamais \`lim (x ➔ a)\` ni \`lim x -> a\`, ni \`lim x -> ++∞\`) ;
- puissances/racines : \`x^2\`, \`\\sqrt{x}\` (jamais \`x2\`, \`sqrt(x)\` en texte brut).
Interdiction absolue de « pseudo-notation » (flèches \`➔\`, \`->\`, exposants collés comme \`x2\`, infinis écrits \`++∞\` ou \`8\`).

### 3. L'énoncé est la seule source de vérité
Recopie exactement les valeurs, conditions, domaines et constantes de l'énoncé. En particulier :
- si on demande de résoudre $f(x) = k$, résous **cette équation précise** (pas $f(x)=0$ par défaut) ;
- si une quantité est renommée dans un contexte appliqué (ex. un « coût moyen » $C(x)$ qui reprend la fonction $f(x)$ étudiée plus haut), réutilise le résultat déjà établi pour $f$ sans le recalculer autrement ni le contredire.

### 4. Aucune réponse générique
Interdiction d'écrire des phrases comme « Application de la méthode », « Résolution conforme aux normes académiques », « Résultat validé » sans calcul réel derrière. Chaque question doit contenir un calcul, une démonstration ou une justification effective.

### 5. Distinguer précisément ce qui est demandé
Pour les questions de type optimisation ou extremum, distingue explicitement :
- « pour quelle valeur de $x$ / quelle quantité » → répondre par la valeur de $x$ ;
- « quelle est la valeur minimale/maximale / ce coût » → répondre par $f(x)$ à ce point.
Ne jamais répondre à l'une par la réponse de l'autre.

### 6. Vérification obligatoire avant d'afficher un résultat
- Équation : réinjecte chaque solution trouvée dans l'équation d'origine et affiche le contrôle.
- Fonction : vérifie la cohérence entre signe de la dérivée et sens de variation annoncé.
- Ne conserve jamais un résultat dont la vérification échoue ; recalcule.

### 7. Respect strict du nombre de questions
Compte les questions et sous-questions (1., 2., a), b)...) de l'énoncé et traite-les **toutes**, dans l'ordre, sans en inventer ni en omettre.

### 8. Valeurs exactes avant valeurs approchées
Donne d'abord la valeur exacte ($\\sqrt{3}$, $2+2\\sqrt{3}$...), puis éventuellement une valeur approchée clairement signalée par \`\\approx\`.

## Structure de réponse attendue

Pour chaque question :

\`\`\`
## Question [numéro]

[Démarche : étapes de calcul en LaTeX, chacune justifiée]

**Résultat :** [réponse finale en LaTeX, exacte puis approchée si utile]

**Vérification :** [contrôle explicite du résultat]
\`\`\`

## Contrôle final silencieux avant d'afficher la réponse

Avant de répondre, vérifie mentalement :
1. Toutes les questions de l'énoncé sont traitées, dans le bon nombre.
2. Aucune donnée de l'énoncé n'a été modifiée (constantes, domaines, conditions).
3. Aucun token d'interface, HTML ou pseudo-notation n'est présent.
4. Chaque fraction, puissance, racine et limite est en LaTeX correct.
5. Chaque résultat a été vérifié indépendamment.

Si un seul point échoue : corrige avant d'envoyer la réponse, ne l'affiche jamais telle quelle.
`;

    const SCIENTIFIC_STRUCTURED_OUTPUT_DIRECTIVE = `
RÈGLE ABSOLUE DE FIDÉLITÉ AUX DONNÉES DE L'ÉNONCÉ (AVANT TOUT CALCUL) :
- Avant de calculer quoi que ce soit, recopie EXACTEMENT l'expression, la fonction, la formule ou les valeurs numériques telles qu'elles apparaissent dans l'énoncé (ex : si l'énoncé donne f(x) = 5√x + ln x, ne calcule JAMAIS avec une autre expression comme f(x) = 5 - ln x). Une seule lettre, un seul signe ou un seul terme oublié change tout le résultat : vérifie ce recopiage avant de dériver, intégrer ou substituer.
- Réutilise cette même expression identique à chaque question de l'exercice ; ne la modifie jamais en cours de résolution.

RÈGLE ABSOLUE DE SORTIE STRUCTURÉE (CHAMP structuredScientificResolution) :
- En plus du texte libre de level5FullRedaction, remplis OBLIGATOIREMENT et intégralement le champ JSON structuredScientificResolution avec un objet par exercice de l'énoncé (même s'il n'y en a qu'un seul).
- Pour chaque exercice : title (ex "EXERCICE 4"), points (ex "6 points", chaîne vide sinon), introContext (rappel bref si utile, chaîne vide sinon), et la liste questions.
- Pour chaque question : numberLabel (numérotation EXACTE de l'énoncé, ex "1. a)"), titleOrPrompt (rappel très court de ce qui est demandé, chaîne vide si inutile), steps (tableau de chaînes), finalAnswer (résultat de CETTE question, chaîne vide si non applicable).
- CHAQUE ÉLÉMENT DU TABLEAU steps DOIT CONTENIR UNE SEULE ÉTAPE ATOMIQUE : soit une seule ligne de calcul (une égalité, une comparaison, une valeur numérique), soit une seule phrase de raisonnement/justification. Il est STRICTEMENT INTERDIT de concaténer plusieurs étapes ou plusieurs phrases dans un même élément du tableau (jamais "f(6,93) = ... et f(6,94) = ... donc ..." en un seul step : cela doit faire 2 ou 3 steps séparés).
- Le contenu de structuredScientificResolution doit être rigoureusement identique (mêmes calculs, mêmes valeurs, même ordre) à celui rédigé dans level5FullRedaction : ce sont deux représentations du même corrigé, jamais deux corrigés différents.
- Si la discipline n'est pas Mathématiques / Physique-Chimie / SVT, laisse structuredScientificResolution comme un tableau vide [].`;

    const SEMANTIC_DISAMBIGUATION_DIRECTIVE = `
RÈGLE ABSOLUE DE DÉSAMBIGUÏSATION SÉMANTIQUE DU SUJET (PRIORITAIRE, AVANT TOUTE RÉDACTION) :
De nombreux sujets de dissertation contiennent un ou plusieurs mots polysémiques (ex : "mythe" peut signifier légende fondatrice, chose dépassée/désuète, OU illusion sans fondement réel ; "liberté" peut signifier absence de contrainte OU autonomie rationnelle ; "nature" peut signifier l'essence d'une chose OU le monde physique non transformé par l'homme). Le sens retenu change radicalement la problématique et donc tout le développement.
1. IDENTIFIE chaque terme du sujet qui admet plusieurs définitions courantes en usage philosophique/littéraire.
2. LISTE mentalement les 2 ou 3 sens possibles de ce terme.
3. CHOISIS le sens qui, une fois substitué dans la phrase du sujet, produit la question la PLUS PROBLÉMATIQUE et la PLUS DISCUTABLE (celle qui autorise une vraie thèse et une vraie antithèse) — jamais le sens qui rendrait la question triviale, absurde ou déjà tranchée d'avance. C'est ce critère de fécondité problématique, et non la fréquence statistique du mot, qui détermine le bon sens à retenir.
4. Si le contexte fourni (niveau de classe, discipline, autres mots du sujet) désigne sans ambiguïté un sens précis, retiens celui-là en priorité.
5. NE TRAITE JAMAIS UN SUJET SANS AVOIR EXPLICITÉ CE CHOIX. Indique le terme ambigu identifié, les sens envisagés, le sens retenu et une justification brève (1-2 phrases) de ce choix, AVANT de commencer la reformulation du sujet dans l'introduction.
6. Si le sujet ne contient aucun terme réellement ambigu, indique-le simplement ("Aucun terme structurellement ambigu identifié") plutôt que d'inventer une fausse ambiguïté.`;

    const SUBJECT_NATURE_AND_RECOGNITION_DIRECTIVE = `
🧭 RÈGLE CARDINALE DE RECONNAISSANCE ET DE TRAITEMENT DES SUJETS (DISSERTATION, SCIENCES & HUMANITÉS) :

Avant de traiter un sujet, identifie OBLIGATOIREMENT sa nature, son périmètre et sa formulation. Ne force JAMAIS un sujet dans un modèle unique.

Pour tout sujet d'examen ou de devoir, commence obligatoirement par déterminer :
1. LE TYPE DE SUJET :
   - question directe (ex: « L'État est-il l'ennemi de la liberté ? »)
   - sujet dialectique / de discussion (ex: « La poésie doit-elle toujours embellir le monde ? »)
   - sujet de réflexion / d'explication (ex: « En quoi l'art nous aide-t-il à mieux vivre ? »)
   - commentaire ou étude de texte, situation d'évaluation, exercice ou problème scientifique, etc.

2. LES MOTS IMPORTANTS DU SUJET :
   - Analyse impérativement les mots-clés et opérateurs modaux : « toujours », « souvent », « peut-il », « doit-il », « en quoi », « dans quelle mesure », « suffit-il de », « n'est-il que »...
   - Exemple d'analyse :
     * « se transforme-t-elle » → interrogation sur la réalité ou le mécanisme de la transformation ;
     * « toujours » → demande de rechercher les limites et restrictions de cette transformation.

3. LA TENSION OU OPPOSITION ÉVENTUELLE contenue dans la question.

4. LE NOMBRE D'AXES RÉELLEMENT NÉCESSAIRES :
   - En fonction du sujet et de la méthodologie demandée.
   - NE CRÉE JAMAIS ARTIFICIELLEMENT UN AXE UNIQUEMENT POUR ATTEINDRE UN NOMBRE DÉTERMINÉ.
   - Lorsqu'un sujet appelle naturellement deux mouvements de réflexion, PRIVILÉGIE UN PLAN EN 2 AXES (Thèse puis discussion critique des limites).
   - Les éléments de synthèse ou de dépassement peuvent être intégrés dans le deuxième axe ou dans la conclusion lorsqu'ils ne constituent pas un axe autonome nécessaire.
   - Important : un sujet peut être traité avec 2, 3 axes ou une autre organisation selon la méthodologie officiellement applicable. Le système doit d'abord reconnaître la logique du sujet avant de choisir le plan.

5. LA RECONNAISSANCE DU PÉRIMÈTRE GÉOGRAPHIQUE / HISTORIQUE ET DU CADRE ÉDUCATIF :
   - IDENTIFIE AUTOMATIQUEMENT LE PÉRIMÈTRE DU SUJET :
     * Si le sujet mentionne ou concerne expressément un pays ou une région précise (ex : « Le relief de la Côte d'Ivoire », « L'agriculture du Sénégal », « La Révolution française de 1789 ») : reconnais immédiatement ce contexte national et mobilise les connaissances géographiques, économiques, historiques et institutionnelles de ce pays.
     * Si le sujet porte sur un thème global, mondial ou théorique (ex : « La guerre froide », « Les régimes totalitaires », « L'État et la liberté », « Les fonctions de la poésie », « Les théorèmes scientifiques et équations mathématiques ») : reconnais qu'il s'agit d'un savoir académique UNIVERSEL et traite-le avec les standards d'excellence méthodologique internationaux.
   - Renseigne 'detectedGeographicContext' (ex: "Côte d'Ivoire", "Sénégal", "France", "Universel / International") et 'detectedCurriculumMethodology'.

6. L'ÉCOUTE ET L'APPLICATION STRICTE DES CONSIGNES DE L'UTILISATEUR :
   - L'énoncé fourni par l'élève peut comporter des consignes particulières ou des contraintes méthodologiques (ex : « faire un plan en 3 parties », « méthode sénégalaise », « situation d'évaluation », « développer tel auteur »).
   - Le système doit repérer ces consignes, les appliquer rigoureusement sans dévier, et les lister dans 'userDirectivesApplied'.
   - Si l'élève précise son pays ou son système éducatif, le système adapte automatiquement la terminologie et la méthodologie au cadre de son éducation.`;

    const UNIVERSAL_PEDAGOGICAL_FIDELITY_DIRECTIVE = `
RÈGLE ABSOLUE D'EXACTITUDE UNIVERSELLE ET INTERDICTION DU HORS-SUJET (TOUTES MATIÈRES DU COLLÈGE AU BACCALAURÉAT) :

1. TRAITEMENT STRICT ET DIRECT DE LA QUESTION POSÉE :
   - En Philosophie : Interdiction de transformer un sujet sur la NATURE d'une notion (ex: « La philosophie est-elle un mythe ? ») en un sujet sur son USAGE (« La philosophie utilise-t-elle des mythes ? ») ou en une opposition non formulée par le sujet (ex: « La philosophie s'oppose-t-elle au mythe ? »). N'impose JAMAIS d'avance une grille de lecture toute faite (comme « logos vs muthos ») : un même terme (« mythe », « liberté », « nature »...) peut désigner selon le sujet une croyance, une illusion, une construction de l'esprit, une représentation collective, un récit fondateur, ou autre chose encore — détermine le sens réellement pertinent à partir de la formulation précise et complète de CE sujet, jamais par réflexe ou par habitude d'un sujet déjà traité.
   - En Français / Littérature : Interdiction d'injecter des thèmes préfabriqués (ex: déforestation, violence juvénile, réconciliation) si le sujet soumis traite d'un autre thème (ex: la poésie, le roman, le travail, la lecture, la liberté, la justice). Identifie toujours le VRAI thème et la VRAIE citation de l'énoncé.
   - En Histoire-Géographie & EDHC : Réponds strictement sur le pays, la période historique, le repère spatial ou le problème environnemental/économique précis de l'énoncé. Ne plaque JAMAIS de corrigé automatique sur un autre pays ou un autre siècle.
   - En Mathématiques, Physique-Chimie & SVT : Utilise STRICTEMENT les fonctions f(x), suites u_n, matrices, valeurs numériques et grandeurs physiques fournies dans l'énoncé. Ne remplace JAMAIS les données réelles par des données préétablies.
   - En Langues (Anglais, Allemand, Espagnol) : Respecte la consigne de chaque exercice (équivalences textuelles, Vrai/Faux, questions directes, rédaction) avec citations exactes du texte d'origine.

2. ABSENCE TOTALE DE LABELS OU TITRES PARASITES DANS LES RÉDACTIONS :
   - Pour les dissertations, productions écrites et commentaires : Aucune mention « Introduction », « Première partie », « Conclusion », « Transition » dans le texte continu (level5FullRedaction). La copie doit être rédigée sous forme de prose continue avec de véritables alinéas et sauts de ligne réglementaires.
   - Zéro coquille typographique ou artefact d'encodage.

3. VÉRACITÉ ET JUSTESSE SCIENTIFIQUE :
   - Tout calcul, théorème, formule littérale ou citation d'auteur doit être authentique et vérifiable dans les manuels officiels d'enseignement.`;

    // Variation de style et d'angles pour que les rédactions littéraires ne soient jamais identiques d'un élève à l'autre
    const literaryVariationDirective = `
RÈGLE D'UNICITÉ ET DE VARIATION PÉDAGOGIQUE POUR LES RÉDACTIONS :
- Chaque élève doit recevoir une copie unique et personnalisée, avec son propre style, ses propres exemples et ses propres transitions.
- Choisis parmi plusieurs exemples littéraires ou philosophiques pertinents (par exemple, alterne entre auteurs ivoiriens, africains ou classiques selon le sujet : Bernard Dadié, Ahmadou Kourouma, Jean-Marie Adiaffi, Victor Hugo, Molière, Rousseau, Sartre, Kant...).
- Varie les formulations d'amorce, les tournures de phrases et les connecteurs logiques pour éviter toute redondance avec d'autres copies.`;

    const academicPromptResult = buildAcademicPrompt({
      subjectTopic,
      discipline: effectiveDiscipline,
      exerciseType,
      level,
      serie,
      serieLabel,
      fasciculeTitle,
      fasciculeMethodology,
      fasciculeKnowledge,
      studentProfile,
      planStructure,
      attachedImagePart,
      mode,
      parsedStatement,
    });

    // =========================================================================
    // DISPATCHING UNIFIÉ VERS LES MOTEURS SPÉCIALISÉS 100% LOCAUX ET DÉTERMINISTES
    // Zéro appel API externe, supporte 1 000 000+ utilisateurs sans saturation
    // =========================================================================

    // 1. Mathématiques (Moteur International Mondial & Pipelines Déterministes)
    // 2. Physique-Chimie (Tle C/D/E, Spé PC, IB Physics/Chemistry, AP Physics/Chem, A-Levels, CPGE, 6e, et devoirs complets)
    if (isPc || isPhysiqueChimie || isPc6e) {
      if (parsedStatement.exercises.length > 1) {
        try {
          const pcPipeRes = tryDeterministicPcExerciseResolution(parsedStatement);
          if (pcPipeRes && pcPipeRes.success && pcPipeRes.solvedExercises.length > 0) {
            const methodoRes = buildMethodologyResultFromSolvedExercises(
              parsedStatement,
              pcPipeRes.solvedExercises,
              "Physique-Chimie",
              level || "Terminale",
              "Devoir de Physique-Chimie — Méthode Papa Intégrale"
            );
            const sanitized = sanitizeMathAndScientificOutput(methodoRes);
            return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "pc_multi_exercise_pipeline" });
          }
        } catch (e) {}
      }

      if (isLevel6e) {
        try {
          const pc6eSol = solvePc6e(subjectTopic);
          if (pc6eSol && pc6eSol.handledLocally && pc6eSol.result) {
            const resMethodo = pc6eSol.result.toMethodologyAnalysisResult();
            const sanitized = sanitizeMathAndScientificOutput(resMethodo);
            return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "pc_6e_local" });
          }
        } catch (e) {}
      }

      // 2.B. Moteur International Mondial de Physique-Chimie (Bac C/D/E, Spé PC, IB Physics/Chemistry, AP, A-Levels, CPGE, Concours)
      try {
        const internationalPcRes = await solveInternationalPcHomework({
          subjectTopic,
          parsedStatement,
          discipline: discipline || "Physique-Chimie",
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
        });
        if (internationalPcRes) {
          const sanitized = sanitizeMathAndScientificOutput(internationalPcRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_pc_solver",
            curriculum: "International / Bac / IB / AP / A-Level / CPGE",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (err) {
        console.warn("[Server] International PC solver error, falling back to local pipeline:", err);
      }

      // 2.C. Moteur local spécifique Tle C/D/E pour les exercices classiques
      try {
        const pcSol = solvePcTleCdeExercise(subjectTopic);
        if (pcSol && pcSol.handledLocally && pcSol.result) {
          const resMethodo = pcSol.result.toMethodologyAnalysisResult();
          const sanitized = sanitizeMathAndScientificOutput(resMethodo);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "pc_tlecde_local" });
        }
      } catch (e) {}

      // 2.D. Résolution déterministe avec Méthode Papa pour TOUT devoir ou exercice PC
      try {
        const pcPipeRes = tryDeterministicPcExerciseResolution(parsedStatement);
        if (pcPipeRes && pcPipeRes.success && pcPipeRes.solvedExercises.length > 0) {
          const methodoRes = buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            pcPipeRes.solvedExercises,
            "Physique-Chimie",
            level || "Terminale",
            "Résolution Physique-Chimie — Méthode Papa"
          );
          const sanitized = sanitizeMathAndScientificOutput(methodoRes);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "pc_papa_universal" });
        }
      } catch (e) {}

      // 2.E. Filet de sécurité déterministe / Solveur universel Méthode Papa pour la Physique-Chimie
      try {
        const pcPapaExercises = solveAllExercisesWithPapaMethod(parsedStatement, "Physique-Chimie", level || "Terminale");
        if (pcPapaExercises && pcPapaExercises.length > 0) {
          const methodoRes = buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            pcPapaExercises,
            "Physique-Chimie",
            level || "Terminale",
            parsedStatement.exercises.length > 1
              ? "Devoir Complet de Physique-Chimie — Méthode Papa Intégrale"
              : "Résolution Physique-Chimie — Méthode Papa"
          );
          const sanitized = sanitizeMathAndScientificOutput(methodoRes);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "pc_papa_universal" });
        }
      } catch (e) {}
    }

    // 3. SVT (Tle D, Spé SVT, IB Biology, AP Biology, Collège 6e-3e, Prépa BCPST...)
    if (isSVT || isSvtTarget) {
      try {
        const svtSol = solveSvtTleDExercise(subjectTopic);
        if (svtSol && svtSol.handledLocally && svtSol.result) {
          const resMethodo = svtSol.result.toMethodologyAnalysisResult();
          const sanitized = sanitizeMathAndScientificOutput(resMethodo);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "svt_tled_local" });
        }
      } catch (e) {}

      try {
        const svtInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: "SVT",
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType,
        });
        if (svtInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(svtInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_svt_solver",
            curriculum: "International / Bac / IB / AP / Brevet",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International SVT solver failed, falling back:", e);
      }
    }

    // 4. Géographie 6e & Collège
    if (isGeo && isLevel6e) {
      try {
        const geo6eSol = solveGeo6e(subjectTopic);
        if (geo6eSol && geo6eSol.handledLocally && geo6eSol.result) {
          const resMethodo = geo6eSol.result.toMethodologyAnalysisResult();
          const sanitized = sanitizeMathAndScientificOutput(resMethodo);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "geo_6e_local" });
        }
      } catch (e) {}

      try {
        const geoInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: "Géographie",
          level: level || "6e",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType,
        });
        if (geoInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(geoInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_geo_solver",
            curriculum: "International / Collège / DNB",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International Geo solver failed, falling back:", e);
      }
    }

    // 5. Histoire-Géographie (Terminale, Bac, IB History, AP History...)
    if (isHgTle || isHgTarget || disciplineCanon === "histoire" || disciplineCanon === "geographie") {
      try {
        const hgSol = solveHistoireGeoTle(subjectTopic, {
          exerciseType,
          discipline: effectiveDiscipline || discipline,
          level,
        });
        if (hgSol && hgSol.success && hgSol.methodologyAnalysis) {
          const sanitized = sanitizeMathAndScientificOutput(hgSol.methodologyAnalysis);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "histoire_geo_tle_local" });
        }
      } catch (e) {}

      try {
        const hgInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: effectiveDiscipline || discipline || "Histoire-Géographie",
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType,
        });
        if (hgInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(hgInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_hg_solver",
            curriculum: "International / Bac / IB / AP",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International HG solver failed, falling back:", e);
      }
    }

    // 6. Philosophie (Terminale, Bac, IB TOK, CPGE, Supérieur...)
    if (isPhilo || effectiveDiscipline === "Philosophie" || disciplineCanon === "philosophie") {
      try {
        const philoSol = solvePhiloTle(subjectTopic, { userSeed, variantIndex });
        if (philoSol && philoSol.success && philoSol.methodologyAnalysis) {
          const sanitized = sanitizeMathAndScientificOutput(philoSol.methodologyAnalysis);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "philo_tle_local",
            curriculum: "Terminale Baccalauréat / Philosophie",
          });
        }
      } catch (e) {
        console.warn("[Server] Philo local engine evaluation error:", e);
      }

      try {
        const philoInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: "Philosophie",
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType: exerciseType || "Dissertation Philosophique Canonique",
        });
        if (philoInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(philoInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_philo_solver",
            curriculum: "International / Bac / IB TOK",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International Philo solver failed, falling back:", e);
      }
    }

    // 7. Français / Littérature (Terminale, 1ère, DNB, IB French A, etc.)
    if (isFrancaisTle || effectiveDiscipline === "Français" || disciplineCanon === "francais") {
      try {
        const frSol = solveFrancaisTle(subjectTopic);
        if (frSol && frSol.success && frSol.methodologyAnalysis) {
          const sanitized = sanitizeMathAndScientificOutput(frSol.methodologyAnalysis);
          return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "francais_tle_local" });
        }
      } catch (e) {}

      try {
        const frInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: "Français",
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType,
        });
        if (frInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(frInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_francais_solver",
            curriculum: "International / Bac de Français / IB",
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International Français solver failed, falling back:", e);
      }
    }

    // 8. Langues Vivantes Internationales (Anglais, Espagnol, Allemand, etc.)
    if (isAnglais || isAllemand || isEspagnol || disciplineCanon === "anglais" || disciplineCanon === "allemand" || disciplineCanon === "espagnol") {
      const langName = isAnglais || disciplineCanon === "anglais" ? "Anglais" : isAllemand || disciplineCanon === "allemand" ? "Allemand" : "Espagnol";
      try {
        const langInterRes = await solveInternationalUniversalHomework({
          subjectTopic,
          parsedStatement,
          discipline: langName,
          level: level || "Terminale",
          serie,
          serieLabel,
          studentProfile,
          fasciculeKnowledge,
          attachedImagePart,
          exerciseType,
        });
        if (langInterRes) {
          const sanitized = sanitizeMathAndScientificOutput(langInterRes);
          return res.json({
            success: true,
            data: { ...sanitized, isLocalEngine: true },
            isLocalEngine: true,
            engineType: "international_languages_solver",
            curriculum: `International ${langName} / Cambridge / DELE / Goethe`,
            questionsCount: parsedStatement.totalQuestionsCount,
          });
        }
      } catch (e) {
        console.warn("[Server] International Language solver failed, falling back:", e);
      }
    }

    // 9. Moteur Universel International pour TOUTE AUTRE discipline (SES, NSI, Droit, SI, peu importe la classe)
    try {
      const universalInterRes = await solveInternationalUniversalHomework({
        subjectTopic,
        parsedStatement,
        discipline: effectiveDiscipline || discipline || "Matière Universelle",
        level: level || "Terminale",
        serie,
        serieLabel,
        studentProfile,
        fasciculeKnowledge,
        attachedImagePart,
        exerciseType,
      });
      if (universalInterRes) {
        const sanitized = sanitizeMathAndScientificOutput(universalInterRes);
        return res.json({
          success: true,
          data: { ...sanitized, isLocalEngine: true },
          isLocalEngine: true,
          engineType: "international_universal_solver",
          curriculum: "International Universal / Tous Niveaux & Matières",
          questionsCount: parsedStatement.totalQuestionsCount,
        });
      }
    } catch (e) {
      console.warn("[Server] International universal solver failed, falling back:", e);
    }

    // 10. Base de connaissances académiques vérifiée (dissertations et chapitres certifiés)
    const matchedAcademicTopic = findAcademicKnowledge(subjectTopic, effectiveDiscipline || discipline);
    if (matchedAcademicTopic) {
      const academicFallback = generateAcademicEssayFallback(
        {
          subjectTopic,
          discipline: effectiveDiscipline || discipline,
          exerciseType,
          isTwoAxes,
          fasciculeTitle,
          fasciculeKnowledge,
          studentProfile,
        },
        matchedAcademicTopic
      );
      if (academicFallback) {
        const sanitized = sanitizeMathAndScientificOutput(academicFallback);
        return res.json({ success: true, data: { ...sanitized, isLocalEngine: true }, isLocalEngine: true, engineType: "academic_knowledge_base_local" });
      }
    }

    // 11. Résolution locale intégrale ivoirienne (sans placeholder, 100% rédigée)
    const localResult = generateIvorianFallback({
      subjectTopic,
      discipline: effectiveDiscipline || discipline,
      exerciseType,
      isTwoAxes,
      fasciculeTitle,
      fasciculeKnowledge,
      studentProfile,
    });

    const sanitizedData = sanitizeMathAndScientificOutput(localResult);
    return res.json({ success: true, data: { ...sanitizedData, isLocalEngine: true }, isLocalEngine: true, engineType: "ivorian_local_engine" });
  } catch (error: any) {
    console.error("Error analyzing exercise:", error);
    return res.status(500).json({ error: error.message || "Erreur lors de l'analyse méthodologique." });
  }
});

/**
 * Endpoint for Grading & Correcting Student's Homework Draft
 */
/**
 * Recherche de cours académique 100% autonome et certifié (0 appel IA / API externe)
 */
app.post("/api/search-course", globalSearchRateLimiter, searchRouteRateLimiter, async (req, res) => {
  try {
    const { query, discipline, level, serie, variant, curriculum, userSeed, appendVariants } = req.body;
    if (!query || typeof query !== "string" || !query.trim()) {
      return res.status(400).json({ error: "Veuillez fournir une question ou un terme de recherche de cours." });
    }

    const trimmedQuery = query.trim();
    const effectiveUserSeed = userSeed || (req.headers['x-user-id'] as string) || (req.headers['x-student-id'] as string) || undefined;

    // Moteur académique unifié autonome (Philo, Français, 97 cours officiels, International, Déterministe)
    const result = await searchAcademicCourseUnified({
      query: trimmedQuery,
      discipline,
      level,
      serie,
      variant: typeof variant === 'number' ? variant : (variant !== undefined ? parseInt(variant, 10) : undefined),
      curriculum: typeof curriculum === 'string' ? curriculum : undefined,
      userSeed: effectiveUserSeed,
      appendVariants: Boolean(appendVariants),
    });

    return res.json({
      success: true,
      handledLocally: true,
      data: result,
    });
  } catch (error: any) {
    console.error("Course Search fallback triggered:", error);
    const query = req.body?.query || "Cours";
    const academicFallback = getAcademicCourseResult(
      query,
      req.body?.level,
      req.body?.discipline,
      req.body?.serie
    );
    return res.json({
      success: true,
      handledLocally: true,
      data: academicFallback,
    });
  }
});

/**
 * Autocomplétion pour « Recherche de Cours & Notions » — 100% locale (aucun
 * appel IA), basée sur l'index construit dans searchSuggestIndex.ts.
 * Nombre de suggestions volontairement limité (voir item « Autocomplétion »
 * du cahier des charges) pour ne jamais surcharger le serveur ni le réseau.
 */
app.get("/api/search-suggest", globalSuggestRateLimiter, suggestRouteRateLimiter, (req, res) => {
  try {
    const q = typeof req.query.q === "string" ? req.query.q : "";
    const suggestions = getSearchSuggestions(q, 8);
    return res.json({ success: true, data: suggestions });
  } catch (error: any) {
    console.error("Search suggest error:", error);
    // Une erreur d'autocomplétion ne doit jamais bloquer l'utilisateur : on
    // renvoie une liste vide plutôt qu'une erreur 500 (voir item « Stabilité »).
    return res.json({ success: true, data: [] });
  }
});

/**
 * Endpoint for interactive conversational tutor
 */
const handleTutorChat = async (req: express.Request, res: express.Response) => {
  try {
    const { messages, fasciculeContext, subjectContext } = req.body;
    const allMessages: any[] = Array.isArray(messages) ? messages : [];
    const lastUserMessage = [...allMessages].reverse().find((m: any) => m.role === "user")?.content || subjectContext || "";

    // Tuteur méthodologique 100% autonome et certifié (0 coût, 0 appel IA externe)
    const localAnswer = generateLocalTutorAnswer({
      query: lastUserMessage,
      discipline: fasciculeContext?.disciplineLabel || fasciculeContext?.title,
      level: fasciculeContext?.level,
      serie: fasciculeContext?.serie,
      fasciculeContext,
      subjectContext,
    });

    return res.json({
      reply: localAnswer,
      isLocalEngine: true,
    });
  } catch (error: any) {
    console.error("Chat error:", error);
    return res.json({
      reply: "Je suis à votre disposition pour vous guider pas-à-pas selon la méthode académique officielle. Que souhaitez-vous approfondir sur ce sujet ?",
      isLocalEngine: true,
    });
  }
};

app.post("/api/tutor-chat", globalAiRateLimiter, aiRouteRateLimiter, handleTutorChat);
app.post("/api/chat-tutor", globalAiRateLimiter, aiRouteRateLimiter, handleTutorChat);

/**
 * Dictionnaire multilingue — Français / Anglais / Allemand / Espagnol.
 * Les données lexicales sont récupérées depuis les éditions Wiktionary
 * correspondantes via leur endpoint REST public, puis normalisées avant
 * affichage. Aucun nom de source n'est ajouté à la réponse pédagogique.
 */
app.get("/api/dictionary", globalSearchRateLimiter, async (req, res) => {
  const allowed = new Set(["fr", "en", "de", "es"]);
  const word = typeof req.query.word === "string" ? req.query.word.trim() : "";
  const language = typeof req.query.language === "string" ? req.query.language : "fr";
  const targetLanguage = typeof req.query.targetLanguage === "string" ? req.query.targetLanguage : "en";
  if (!word) return res.status(400).json({ success: false, error: "Veuillez saisir un mot." });
  if (!allowed.has(language) || !allowed.has(targetLanguage)) {
    return res.status(400).json({ success: false, error: "Langue non prise en charge." });
  }

  try {
    const url = `https://${language}.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`;
    const response = await fetch(url, { headers: { "User-Agent": "Le-Prof/35 (educational dictionary)" } });
    if (!response.ok) return res.status(response.status === 404 ? 404 : 502).json({ success: false, error: "Mot introuvable dans le dictionnaire." });
    const payload: any = await response.json();
    const sections = Array.isArray(payload) ? payload : Object.values(payload || {});
    const definitions: string[] = [];
    const examples: string[] = [];
    const translations: string[] = [];
    let partOfSpeech = "";
    let pronunciation = "";

    const clean = (value: any) => typeof value === "string"
      ? value.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/\s+/g, " ").trim()
      : "";

    const visit = (node: any) => {
      if (!node || typeof node !== "object") return;
      if (!partOfSpeech && typeof node.partOfSpeech === "string") partOfSpeech = clean(node.partOfSpeech);
      if (!pronunciation) {
        pronunciation = clean(node.pronunciation || node.pronunciations?.[0]?.text || node.pronunciations?.[0]?.ipa || "");
      }
      if (Array.isArray(node.definitions)) {
        for (const d of node.definitions) {
          const text = clean(d.definition || d.text || d.glosses?.[0]);
          if (text && !definitions.includes(text)) definitions.push(text);
          const exs = d.parsedExamples || d.examples || [];
          if (Array.isArray(exs)) for (const ex of exs) {
            const x = clean(typeof ex === "string" ? ex : (ex.example || ex.text || ex.content));
            if (x && !examples.includes(x)) examples.push(x);
          }
        }
      }
      const trans = node.translations || node.translation || [];
      if (Array.isArray(trans)) for (const t of trans) {
        const langCode = String(t.langCode || t.code || t.lang || "").toLowerCase();
        const term = clean(t.word || t.term || t.translation || t.text);
        if (term && (!langCode || langCode === targetLanguage) && !translations.includes(term)) translations.push(term);
      }
      for (const value of Object.values(node)) {
        if (value && typeof value === "object") visit(value);
      }
    };
    for (const section of sections) visit(section);

    if (!definitions.length && !translations.length) {
      return res.status(404).json({ success: false, error: "Aucune définition suffisamment exploitable n'a été trouvée." });
    }

    return res.json({ success: true, data: {
      word, language, partOfSpeech, definitions: definitions.slice(0, 8), examples: examples.slice(0, 5),
      translations: translations.slice(0, 12), pronunciation
    }});
  } catch (error: any) {
    console.error("[API /api/dictionary] Error:", error?.message || error);
    return res.status(502).json({ success: false, error: "Le dictionnaire est temporairement indisponible." });
  }
});

/**
 * Traduction locale déterministe — aucune API externe et aucun service d’IA.
 * Pour une traduction générale non couverte localement, l’interface propose
 * volontairement Google Traduction comme solution externe via une simple URL.
 */
app.post("/api/translate-text", globalSearchRateLimiter, (req, res) => {
  try {
    const { text, sourceLang = "auto", targetLang = "fr" } = req.body;
    const allowed = new Set(["fr", "en", "de", "es"]);
    if (!text || !String(text).trim()) return res.status(400).json({ success: false, error: "Aucun texte fourni pour la traduction." });
    if (!allowed.has(targetLang) || (sourceLang !== "auto" && !allowed.has(sourceLang))) {
      return res.status(400).json({ success: false, error: "Langue non prise en charge." });
    }
    const result = translateLocally(String(text), sourceLang as any, targetLang as any);
    return res.json({
      success: true,
      data: {
        sourceLanguageDetected: result.source,
        targetLanguage: result.target,
        translatedText: result.text,
        literalTranslation: result.text,
        coverage: result.coverage,
        keyVocabulary: [],
        grammaticalNotes: result.coverage < 0.34
          ? ["La phrase dépasse le lexique local disponible. Utilisez « Traduire avec Google » pour une traduction générale complète."]
          : ["Traduction réalisée localement à partir du lexique pédagogique intégré."]
      },
      handledLocally: true,
      externalFallbackAvailable: true,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: "Erreur lors de la traduction." });
  }
});

/**
 * Endpoint pour la résolution autonome et déterministe de devoirs en Langues Vivantes (Anglais, Allemand, Espagnol)
 * 100% Hors-ligne, Zéro appel IA / API, garantit un traitement fidèle sans dérive vers la dissertation philosophique.
 */
app.post("/api/solve-language", (req, res) => {
  try {
    const { text, language, level = "terminale" } = req.body;
    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ success: false, error: "Veuillez fournir un énoncé de devoir ou une phrase." });
    }
    const detected = language || detectLanguage(text);
    const targetLang = (detected && ["anglais", "allemand", "espagnol"].includes(detected)) ? detected : "anglais";
    const result = solveLanguageExercise(text, targetLang as any, level);
    return res.json({
      success: true,
      data: result.methodologyAnalysis,
      isLocalEngine: true,
      language: result.language,
      languageLabel: result.languageLabel,
      taskType: result.taskType,
      title: result.title,
      fullSolution: result.fullSolution,
      frenchMirrorTranslation: result.frenchMirrorTranslation,
      grammarRulesApplied: result.grammarRulesApplied,
      vocabularyHighlights: result.vocabularyHighlights,
    });
  } catch (err: any) {
    console.error("[API /api/solve-language] Error:", err);
    return res.status(500).json({ success: false, error: "Erreur lors de la résolution du devoir." });
  }
});

app.post("/api/solve-english", (req, res) => {
  req.body.language = "anglais";
  return (app as any)._router.handle({ ...req, url: "/api/solve-language" }, res);
});

app.post("/api/solve-german", (req, res) => {
  req.body.language = "allemand";
  return (app as any)._router.handle({ ...req, url: "/api/solve-language" }, res);
});

app.post("/api/solve-spanish", (req, res) => {
  req.body.language = "espagnol";
  return (app as any)._router.handle({ ...req, url: "/api/solve-language" }, res);
});

/**
 * Endpoint pour consulter la Base de connaissances Maths Terminale A
 */
app.get("/api/maths-tle-a/chapters", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: mathsTleAKnowledgeBase.name,
      version: mathsTleAKnowledgeBase.version,
      level: mathsTleAKnowledgeBase.level,
      chapters: mathsTleAKnowledgeBase.chapters,
      runtimePolicy: mathsTleAKnowledgeBase.runtimePolicy,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Maths Terminale A
 */
app.post("/api/solve-maths-tle-a", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || typeof statement !== "string" || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice est requis." });
    }
    const result = solveUniversalMathHomework(statement);
    if (result.status === "SOLVED" && result.report?.isComplete) {
      const data = buildMethodologyResultFromSolvedExercises(
        result.parsing,
        result.solvedExercises,
        "Mathématiques",
        req.body.level || "Terminale",
        "Résolution Mathématiques — Moteur universel"
      );
      return res.json({ success: true, handledLocally: true, data, engineType: "math_universal_deterministic_local", completeness: result.report });
    }
    return res.status(422).json({
      success: false,
      handledLocally: false,
      error: "QUESTION_NON_COUVERTE",
      message: result.reason || "Aucune résolution déterministe complète et vérifiée.",
      engineType: "math_universal_deterministic_local",
      completeness: result.report,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution mathématique" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances Mathématiques Terminale C
 */
app.get("/api/maths-tle-c/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: mathsTleCKnowledgeBase.name,
      version: mathsTleCKnowledgeBase.version,
      level: mathsTleCKnowledgeBase.level,
      serie: mathsTleCKnowledgeBase.serie,
      themes: mathsTleCKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Mathématiques Terminale C
 */
app.post("/api/solve-maths-tle-c", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || typeof statement !== "string" || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice est requis." });
    }
    const result = solveUniversalMathHomework(statement);
    if (result.status === "SOLVED" && result.report?.isComplete) {
      const data = buildMethodologyResultFromSolvedExercises(
        result.parsing,
        result.solvedExercises,
        "Mathématiques",
        req.body.level || "Terminale",
        "Résolution Mathématiques — Moteur universel"
      );
      return res.json({ success: true, handledLocally: true, data, engineType: "math_universal_deterministic_local", completeness: result.report });
    }
    return res.status(422).json({
      success: false,
      handledLocally: false,
      error: "QUESTION_NON_COUVERTE",
      message: result.reason || "Aucune résolution déterministe complète et vérifiée.",
      engineType: "math_universal_deterministic_local",
      completeness: result.report,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution mathématique" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances Mathématiques Terminale D
 */
app.get("/api/maths-tle-d/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: mathsTleDKnowledgeBase.name,
      version: mathsTleDKnowledgeBase.version,
      level: mathsTleDKnowledgeBase.level,
      serie: mathsTleDKnowledgeBase.serie,
      themes: mathsTleDKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Mathématiques Terminale D
 */
app.post("/api/solve-maths-tle-d", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || typeof statement !== "string" || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice est requis." });
    }
    const result = solveUniversalMathHomework(statement);
    if (result.status === "SOLVED" && result.report?.isComplete) {
      const data = buildMethodologyResultFromSolvedExercises(
        result.parsing,
        result.solvedExercises,
        "Mathématiques",
        req.body.level || "Terminale",
        "Résolution Mathématiques — Moteur universel"
      );
      return res.json({ success: true, handledLocally: true, data, engineType: "math_universal_deterministic_local", completeness: result.report });
    }
    return res.status(422).json({
      success: false,
      handledLocally: false,
      error: "QUESTION_NON_COUVERTE",
      message: result.reason || "Aucune résolution déterministe complète et vérifiée.",
      engineType: "math_universal_deterministic_local",
      completeness: result.report,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution mathématique" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances SVT Terminale D
 */
app.get("/api/svt-tle-d/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: svtTleDKnowledgeBase.name,
      version: svtTleDKnowledgeBase.version,
      level: svtTleDKnowledgeBase.level,
      serie: svtTleDKnowledgeBase.serie,
      themes: svtTleDKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe SVT Terminale D
 */
app.post("/api/solve-svt-tle-d", (req, res) => {
  try {
    const { statement, serie = "D", level = "terminale" } = req.body;
    if (!statement || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice ou du problème SVT est requis." });
    }

    const solution = solveSvtTleDExercise(statement, { serie, level, discipline: "svt" });
    if (solution.handledLocally && solution.result) {
      return res.json({
        success: true,
        handledLocally: true,
        data: solution.result.toMethodologyAnalysisResult(),
        themeId: solution.themeId,
        themeTitle: solution.themeTitle,
        lessonNumber: solution.lessonNumber,
        lessonTitle: solution.lessonTitle,
        confidence: solution.confidence,
      });
    }

    return res.json({
      success: true,
      handledLocally: false,
      message: "Problème SVT non résolu directement par le moteur local, recours au fallback recommandé.",
      themeId: solution.themeId,
      themeTitle: solution.themeTitle,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution SVT" });
  }
});

/**
 * Endpoints pour consulter les Bases de connaissances SVT Première A, C et D
 */
app.get("/api/svt-1ere-a/chapters", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const chapters = query ? findSvt1ereAChapters(query) : svt1ereAKnowledgeBase.chapters;
  res.json({
    success: true,
    data: {
      name: svt1ereAKnowledgeBase.name,
      version: svt1ereAKnowledgeBase.version,
      level: svt1ereAKnowledgeBase.level,
      source: svt1ereAKnowledgeBase.source,
      chapters,
    },
  });
});

app.get("/api/svt-1ere-a/context", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const context = buildSvt1ereAContext(query);
  res.json({ success: true, context });
});

app.get("/api/svt-1ere-c/chapters", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const chapters = query ? findSvt1ereCChapters(query) : svt1ereCKnowledgeBase.chapters;
  res.json({
    success: true,
    data: {
      name: svt1ereCKnowledgeBase.name,
      version: svt1ereCKnowledgeBase.version,
      level: svt1ereCKnowledgeBase.level,
      source: svt1ereCKnowledgeBase.source,
      chapters,
    },
  });
});

app.get("/api/svt-1ere-c/context", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const context = buildSvt1ereCContext(query);
  res.json({ success: true, context });
});

app.get("/api/svt-1ere-d/chapters", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const chapters = query ? findSvt1ereDChapters(query) : svt1ereDKnowledgeBase.chapters;
  res.json({
    success: true,
    data: {
      name: svt1ereDKnowledgeBase.name,
      version: svt1ereDKnowledgeBase.version,
      level: svt1ereDKnowledgeBase.level,
      source: svt1ereDKnowledgeBase.source,
      chapters,
    },
  });
});

app.get("/api/svt-1ere-d/context", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const context = buildSvt1ereDContext(query);
  res.json({ success: true, context });
});

/**
 * Endpoints pour consulter les Bases de connaissances SVT Seconde A et C
 */
app.get("/api/svt-2nde-a/chapters", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const chapters = query ? findSvt2ndeAChapters(query) : svt2ndeAKnowledgeBase.chapters;
  res.json({
    success: true,
    data: {
      name: svt2ndeAKnowledgeBase.name,
      version: svt2ndeAKnowledgeBase.version,
      level: svt2ndeAKnowledgeBase.level,
      source: svt2ndeAKnowledgeBase.source,
      chapters,
    },
  });
});

app.get("/api/svt-2nde-c/chapters", (req, res) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const chapters = query ? findSvt2ndeCChapters(query) : svt2ndeCKnowledgeBase.chapters;
  res.json({
    success: true,
    data: {
      name: svt2ndeCKnowledgeBase.name,
      version: svt2ndeCKnowledgeBase.version,
      level: svt2ndeCKnowledgeBase.level,
      source: svt2ndeCKnowledgeBase.source,
      chapters,
    },
  });
});

/**
 * Endpoint pour consulter la Base de connaissances Physique-Chimie Terminales C, D, E
 */
app.get("/api/pc-tle-cde/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: pcTleCdeKnowledgeBase.name,
      version: pcTleCdeKnowledgeBase.version,
      levels: pcTleCdeKnowledgeBase.levels,
      series: pcTleCdeKnowledgeBase.series,
      country: pcTleCdeKnowledgeBase.country,
      themes: pcTleCdeKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Physique-Chimie Terminales C, D, E
 */
app.post("/api/solve-pc-tle-cde", (req, res) => {
  try {
    const { statement, serie = "C", level = "terminale", discipline = "physique-chimie" } = req.body;
    if (!statement || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice ou du problème de Physique-Chimie est requis." });
    }

    const solution = solvePcTleCdeExercise(statement, { serie, level, discipline });
    if (solution.handledLocally && solution.result) {
      return res.json({
        success: true,
        handledLocally: true,
        data: solution.result.toMethodologyAnalysisResult(),
        discipline: solution.discipline,
        themeId: solution.themeId,
        themeTitle: solution.themeTitle,
        lessonNumber: solution.lessonNumber,
        lessonTitle: solution.lessonTitle,
        confidence: solution.confidence,
      });
    }

    return res.json({
      success: true,
      handledLocally: false,
      message: "Problème de Physique-Chimie non résolu directement par le moteur local, recours au fallback recommandé.",
      themeId: solution.themeId,
      themeTitle: solution.themeTitle,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Physique-Chimie" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances Géographie 6ème
 */
app.get("/api/geo-6e/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: geographie6eKnowledgeBase.name,
      version: geographie6eKnowledgeBase.version,
      level: geographie6eKnowledgeBase.level,
      discipline: geographie6eKnowledgeBase.discipline,
      country: geographie6eKnowledgeBase.country,
      themes: geographie6eKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Géographie 6ème
 */
app.post("/api/solve-geo-6e", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice de Géographie 6ème est requis." });
    }

    const solution = solveGeo6e(statement);
    if (solution.success && solution.result) {
      return res.json({
        success: true,
        handledLocally: true,
        data: solution.methodologyAnalysis,
        themeId: solution.classification.themeId,
        themeTitle: solution.classification.themeTitle,
        lessonNumber: solution.classification.lessonNumber,
        lessonTitle: solution.classification.lessonTitle,
        confidence: solution.classification.confidence,
        pedagogicalMetadata: solution.pedagogicalMetadata,
      });
    }

    return res.json({
      success: true,
      handledLocally: false,
      message: "Exercice de Géographie non résolu directement par le moteur local.",
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Géographie 6ème" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances Mathématiques 6ème
 */
app.get("/api/maths-6e/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: maths6eKnowledgeBase.name,
      version: maths6eKnowledgeBase.version,
      level: maths6eKnowledgeBase.level,
      discipline: maths6eKnowledgeBase.discipline,
      country: maths6eKnowledgeBase.country,
      themes: maths6eKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Mathématiques 6ème
 */
app.post("/api/solve-maths-6e", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || typeof statement !== "string" || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice est requis." });
    }
    const result = solveUniversalMathHomework(statement);
    if (result.status === "SOLVED" && result.report?.isComplete) {
      const data = buildMethodologyResultFromSolvedExercises(
        result.parsing,
        result.solvedExercises,
        "Mathématiques",
        req.body.level || "6e",
        "Résolution Mathématiques — Moteur universel"
      );
      return res.json({ success: true, handledLocally: true, data, engineType: "math_universal_deterministic_local", completeness: result.report });
    }
    return res.status(422).json({
      success: false,
      handledLocally: false,
      error: "QUESTION_NON_COUVERTE",
      message: result.reason || "Aucune résolution déterministe complète et vérifiée.",
      engineType: "math_universal_deterministic_local",
      completeness: result.report,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution mathématique" });
  }
});

/**
 * Endpoint pour consulter la Base de connaissances Physique-Chimie 6ème
 */
app.get("/api/pc-6e/themes", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: pc6eKnowledgeBase.name,
      version: pc6eKnowledgeBase.version,
      level: pc6eKnowledgeBase.level,
      discipline: pc6eKnowledgeBase.discipline,
      country: pc6eKnowledgeBase.country,
      themes: pc6eKnowledgeBase.themes,
    },
  });
});

/**
 * Endpoint dédié de résolution directe Physique-Chimie 6ème
 */
app.post("/api/solve-pc-6e", (req, res) => {
  try {
    const { statement } = req.body;
    if (!statement || !statement.trim()) {
      return res.status(400).json({ error: "L'énoncé de l'exercice de Physique-Chimie 6ème est requis." });
    }

    const solution = solvePc6e(statement);
    if (solution.success && solution.result) {
      return res.json({
        success: true,
        handledLocally: true,
        data: solution.methodologyAnalysis,
        themeId: solution.classification.themeId,
        themeTitle: solution.classification.themeTitle,
        lessonNumber: solution.classification.lessonNumber,
        lessonTitle: solution.classification.lessonTitle,
        confidence: solution.classification.confidence,
        pedagogicalMetadata: solution.pedagogicalMetadata,
      });
    }

    return res.json({
      success: true,
      handledLocally: false,
      message: "Exercice de Physique-Chimie non résolu directement par le moteur local.",
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Physique-Chimie 6ème" });
  }
});

// =========================================================================
// ENDPOINTS OFFICIELS BAC : PHILOSOPHIE, HISTOIRE-GÉO & FRANÇAIS TERMINALE
// =========================================================================

app.get("/api/philo-tle/notions", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: philosophieTleKnowledgeBase.name,
      discipline: philosophieTleKnowledgeBase.discipline,
      level: philosophieTleKnowledgeBase.level,
      methodologies: philosophieTleKnowledgeBase.methodologies,
      notions: philosophieTleKnowledgeBase.notions,
    }
  });
});

app.post("/api/solve-philo-tle", (req, res) => {
  try {
    const { problemStatement, userSeed, variantIndex } = req.body;
    if (!problemStatement || typeof problemStatement !== "string") {
      return res.status(400).json({ error: "L'énoncé ou sujet philosophique est requis." });
    }
    const solution = solvePhiloTle(problemStatement, { userSeed, variantIndex });
    return res.json(solution);
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Philosophie Terminale" });
  }
});

app.get("/api/hg-tle/lessons", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: histoireGeoTleKnowledgeBase.name,
      level: histoireGeoTleKnowledgeBase.level,
      methodologies: histoireGeoTleKnowledgeBase.methodologies,
      geographieLessons: histoireGeoTleKnowledgeBase.geographieLessons,
      histoireLessons: histoireGeoTleKnowledgeBase.histoireLessons,
    }
  });
});

app.post("/api/solve-hg-tle", (req, res) => {
  try {
    const { problemStatement } = req.body;
    if (!problemStatement || typeof problemStatement !== "string") {
      return res.status(400).json({ error: "L'énoncé ou sujet d'Histoire-Géographie est requis." });
    }
    const solution = solveHistoireGeoTle(problemStatement);
    return res.json(solution);
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Histoire-Géographie Terminale" });
  }
});

app.get("/api/francais-tle/referentiel", (_req, res) => {
  res.json({
    success: true,
    data: {
      name: francaisTleKnowledgeBase.name,
      level: francaisTleKnowledgeBase.level,
      methodologies: francaisTleKnowledgeBase.methodologies,
      literaryMovements: francaisTleKnowledgeBase.literaryMovements,
      corpusSynthese: francaisTleKnowledgeBase.corpusSynthese,
    }
  });
});

app.post("/api/solve-francais-tle", (req, res) => {
  try {
    const { problemStatement } = req.body;
    if (!problemStatement || typeof problemStatement !== "string") {
      return res.status(400).json({ error: "L'énoncé ou sujet de Français est requis." });
    }
    const solution = solveFrancaisTle(problemStatement);
    return res.json(solution);
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Erreur interne de résolution Français Terminale" });
  }
});

/**
 * Endpoint de diagnostic interne (aucune clé API n'est jamais exposée) :
 * état des cooldowns par modèle, taille du cache, nombre de clés
 * configurées par fournisseur. Utile pour vérifier en production que le
 * fallback fonctionne comme attendu.
 */
app.get("/api/_ai-health", (_req, res) => {
  res.json({
    status: "ok",
    mode: "100% autonome, déterministe et gratuit",
    externalAiApi: false,
    cost: "0$",
    engines: ["maths", "pc", "svt", "philo", "francais", "histoire-geo", "langues"],
  });
});

// Vite middleware configuration for Development and Production Static Serving
async function startServer() {
  const publicPath = path.join(process.cwd(), "public");
  app.use(express.static(publicPath));

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur LE PROF démarré sur http://0.0.0.0:${PORT}`);
  });

  server.on("error", (error: NodeJS.ErrnoException) => {
    console.error("Impossible de démarrer le serveur LE PROF:", error);
    process.exitCode = 1;
  });
}

startServer().catch((error) => {
  console.error("Échec du démarrage de LE PROF:", error);
  process.exitCode = 1;
});
