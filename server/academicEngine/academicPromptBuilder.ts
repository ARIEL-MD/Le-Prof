/**
 * academicPromptBuilder.ts
 *
 * Moteur modulaire de construction des prompts et directives académiques d'excellence.
 * Généralise la méthodologie officielle et la rigueur d'examen à TOUS les devoirs
 * soumis par les élèves (Histoire-Géo, Français, Philosophie, Mathématiques,
 * Physique-Chimie, SVT, Langues, Économie, Droit, SES, etc.).
 *
 * Élimine définitivement les hallucinations de dissertation générique ("observateur fictif"),
 * garantit le respect de la grille NODDACI pour les commentaires de documents,
 * de l'APC pour les situations d'évaluation, et de la résolution intégrale sans saut
 * pour tous les devoirs et examens.
 */

export type AcademicExerciseCategory =
  | "HISTOIRE_GEO_COMMENTAIRE_DOCUMENT"
  | "HISTOIRE_GEO_SITUATION_EVALUATION"
  | "FRANCAIS_COMMENTAIRE_COMPOSE"
  | "FRANCAIS_TEXTE_SUIVI_DE_QUESTIONS"
  | "FRANCAIS_RESUME_CONTRACTION"
  | "PHILOSOPHIE_EXPLICATION_TEXTE"
  | "PHILOSOPHIE_DISSERTATION"
  | "FRANCAIS_DISSERTATION_LITTERAIRE"
  | "DISSERTATION_GENERALE"
  | "SCIENTIFIQUE_MULTI_EXERCICES"
  | "LANGUES_VIVANTES_EXAMEN"
  | "QUESTION_DIRECTE_RESTITUTION"
  | "DEVOIR_ACADEMIQUE_GENERAL";

export interface AcademicDetectionInput {
  subjectTopic: string;
  discipline?: string;
  exerciseType?: string;
  level?: string;
  serie?: string;
}

export interface AcademicPromptParams extends AcademicDetectionInput {
  fasciculeTitle?: string;
  fasciculeMethodology?: string;
  fasciculeKnowledge?: string;
  studentProfile?: any;
  planStructure?: string;
  serieLabel?: string;
  attachedImagePart?: any;
  mode?: string;
  parsedStatement?: any;
}

export interface AcademicPromptResult {
  category: AcademicExerciseCategory;
  disciplineIdentified: string;
  exerciseTypeIdentified: string;
  systemInstruction: string;
  prompt: string;
  isAcademicPaper: boolean;
  academicPaperType: string;
}

export const MASTER_ANTI_HOLLOW_DIRECTIVE = `
RÈGLE ABSOLUE : INTERDICTION DE TOUTE RÉPONSE CREUSE OU "META" (TOUTES MATIÈRES) :
1. Il est STRICTEMENT INTERDIT de décrire ce que tu es censé faire au lieu de le faire réellement. Une réponse n'est valable QUE si elle contient le travail réel, les calculs réels et le résultat concret, jamais un résumé de la méthode.
2. PHRASES STRICTEMENT BANNIES :
   - « Application des règles de calcul... »
   - « Les calculs ont été rigoureusement menés / simplifiés. »
   - « Réduction et factorisation sans saut d'étape. » (sans montrer l'étape)
   - « Tous les calculs demandés ont été effectués. »
   - « Le raisonnement a été mené avec précision. »
   - « L'argumentation a été développée. »
   - « C’est en donnant son point de vue qu’un observateur affirme... » (Bannie pour tout sujet qui n'est pas une dissertation canonique).
   - Toute phrase qui affirme qu'un travail a été fait sans MONTRER ce travail avec les vrais nombres, les vraies expressions, les vraies lettres de l'énoncé.
3. CE QUI EST OBLIGATOIRE :
   - En Mathématiques / Physique-Chimie / SVT / Sciences : Chaque ligne de calcul doit apparaître explicitement avec les vraies valeurs, étape par étape (développement, factorisation, fractions, puissances, isoler l'inconnue, conversions d'unités, calcul numérique exact), jusqu'au résultat final encadré.
   - En Français / Philosophie / Histoire-Géo : Rédiger intégralement les arguments, les explications et les analyses, sans jamais résumer.
   - En Langues : Écrire les réponses intégralement dans la langue cible sans paraphrase méta.
4. CHAQUE QUESTION DOIT SE TERMINER PAR UN RÉSULTAT EXPLICITE ET FINAL (valeur chiffrée exacte avec unité, expression finale simplifiée, ou texte intégral).`;

export const CALCULATION_ACCURACY_DIRECTIVE = `
RÈGLE ABSOLUE DE RIGUEUR ET EXACTITUDE DES CALCULS (TOUTES MATIÈRES : MATHS, PHYSIQUE-CHIMIE, SVT, HISTOIRE-GÉO, ÉCONOMIE) :
1. ZÉRO FAUTE DE CALCUL TOLÉRÉE :
   - Tout calcul arithmétique, algébrique ou scientifique DOIT être 100% exact et revérifié mentalement avant d'écrire la réponse.
   - Respect strict des priorités opératoires, des règles de signes (- par - donne +, -a - b = -(a + b), (-x)² = x²), des règles de puissances et des identités remarquables.
   - Dans les inéquations : inverser impérativement le sens de l'inégalité lors de la division ou multiplication par un nombre négatif.
2. DÉMARCHE SCIENTIFIQUE COMPLÈTE EN 4 TEMPS :
   - Formule littérale brute universelle en LaTeX ($...$ ou $$...$$).
   - Substitution numérique explicite avec unités et conversions adéquates.
   - Calcul étape par étape, une égalité par ligne, sans saut de calcul.
   - Résultat final encadré avec unité légale officielle (ex: ➜ Résultat final : [valeur] [unité]).`;

export const UNIVERSAL_PEDAGOGICAL_FIDELITY_DIRECTIVE = `
RÈGLE ABSOLUE D'EXACTITUDE UNIVERSELLE ET INTERDICTION DU HORS-SUJET (TOUTES MATIÈRES DU COLLÈGE AU BACCALAURÉAT) :
1. TRAITEMENT STRICT ET DIRECT DE LA QUESTION POSÉE :
   - En Philosophie : Interdiction de transformer un sujet sur la NATURE d'une notion en un sujet sur son USAGE ou en une opposition non formulée.
   - En Français / Littérature : Interdiction d'injecter des thèmes préfabriqués (déforestation, violence juvénile, etc.) si le sujet soumis traite d'un autre thème (poésie, roman, travail, justice...). Identifie toujours le VRAI thème et la VRAIE citation de l'énoncé.
   - En Histoire-Géographie & EDHC : Réponds strictement sur le pays, la période historique, le repère spatial ou le document soumis. Ne plaque JAMAIS de corrigé automatique sur un autre pays ou un autre siècle.
   - En Mathématiques, Physique-Chimie & SVT : Utilise STRICTEMENT les fonctions, suites, matrices, valeurs numériques et grandeurs fournies dans l'énoncé.
   - En Langues (Anglais, Allemand, Espagnol) : Respecte la consigne de chaque exercice (équivalences textuelles, Vrai/Faux, questions directes, rédaction) avec citations exactes du texte d'origine.
2. ABSENCE TOTALE DE TITRES PARASITES DANS LES RÉDACTIONS CONTINUES :
   - Pour les dissertations : Aucune mention parasite « Introduction », « Première partie », « Conclusion ». Prose continue avec alinéas.
3. VÉRACITÉ ET JUSTESSE SCIENTIFIQUE :
   - Tout calcul, théorème, formule littérale ou citation d'auteur doit être authentique et vérifiable.`;

export const SEMANTIC_DISAMBIGUATION_DIRECTIVE = `
RÈGLE ABSOLUE DE DÉSAMBIGUÏSATION SÉMANTIQUE DU SUJET (PRIORITAIRE, AVANT TOUTE RÉDACTION) :
1. IDENTIFIE chaque terme du sujet qui admet plusieurs définitions courantes en usage philosophique, littéraire ou historique.
2. LISTE mentalement les 2 ou 3 sens possibles de ce terme.
3. CHOISIS le sens qui produit la question la PLUS PROBLÉMATIQUE et la PLUS DISCUTABLE (celle qui autorise une vraie thèse et une vraie antithèse) — jamais le sens qui rendrait la question triviale ou absurde.
4. NE TRAITE JAMAIS UN SUJET SANS AVOIR EXPLICITÉ CE CHOIX dans conceptualDisambiguation.`;

export const SUBJECT_NATURE_AND_RECOGNITION_DIRECTIVE = `
🧭 RÈGLE CARDINALE DE RECONNAISSANCE ET DE TRAITEMENT DES SUJETS (DISSERTATION, SCIENCES & HUMANITÉS) :
Avant de traiter un sujet, identifie OBLIGATOIREMENT sa nature, son périmètre et sa formulation. Ne force JAMAIS un sujet dans un modèle unique.
1. LE TYPE DE SUJET : question directe, sujet dialectique, sujet de réflexion, commentaire de document, épreuve de langues, problème scientifique, etc.
2. LES MOTS IMPORTANTS : « toujours », « souvent », « peut-il », « doit-il », « en quoi », « dans quelle mesure »...
3. LA TENSION OU OPPOSITION ÉVENTUELLE contenue dans la question.
4. LE NOMBRE D'AXES RÉELLEMENT NÉCESSAIRES : ne crée jamais artificiellement un axe.
5. LE PÉRIMÈTRE GÉOGRAPHIQUE / HISTORIQUE ET CADRE ÉDUCATIF : reconnais le contexte national ou universel.
6. L'ÉCOUTE STRICTE DES CONSIGNES DE L'UTILISATEUR.`;

export const SIMPLE_FRENCH_DIRECTIVE = `
RÈGLE ABSOLUE DE FRANÇAIS SIMPLE ET FACILE À COMPRENDRE :
L'utilisateur exige un français facile à comprendre, sans mots pompeux ou compliqués, pour toutes les rédactions (dissertations, commentaires, résumés, réponses rédigées, explications).
1. Remplacer les mots compliqués par des mots simples et naturels (« dichotomie » → « opposition, séparation », « aporie » → « difficulté, impasse », « in fine » → « au final », « intrinsèque » → « propre à », etc.).
2. Clarté, précision et élégance naturelle.`;

export const ACADEMIC_SERIES_AND_CURRICULUM_ADAPTATION_DIRECTIVE = `
RÈGLE D'ADAPTATION AU NIVEAU ET À LA SÉRIE :
- Terminale A1 / A2 / C / D / E : adapter rigoureusement la méthodologie et le niveau d'exigence au programme officiel.
- Premier Cycle (6e, 5e, 4e, 3e / BEPC) : vocabulaire clair, définitions précises, conformité aux canevas d'évaluation nationaux.`;

export const UNIVERSAL_EXERCISE_RESOLVER_DIRECTIVE = `
# MOTEUR UNIVERSEL DE RÉSOLUTION D’EXERCICES — MODE STRICT

## 1. RÔLE
Tu es un moteur expert de résolution d’exercices scolaires et universitaires.
Ta mission est de résoudre EXACTEMENT l’exercice fourni par l’utilisateur, dans LA MATIÈRE correspondant à l’exercice, sans le remplacer, sans l’interpréter comme un autre sujet et sans utiliser un exercice provenant d’une autre partie du contexte.
Tu dois pouvoir traiter des exercices de : Mathématiques, Physique, Chimie, SVT / Biologie, Français, Anglais, Espagnol, Allemand, Philosophie, Histoire, Géographie, Économie, Droit, Gestion, Comptabilité, Informatique, Algorithmique, Statistiques, Probabilités, Sciences de l’ingénieur, Électronique, Électricité, Mécanique, Littérature, et autres matières.
IMPORTANT : tu ne dois jamais transformer une matière en une autre.

---

# 2. RÈGLE ABSOLUE : LE SUJET FOURNI EST LA SEULE SOURCE DE L’EXERCICE
L’exercice actuellement envoyé par l’utilisateur est la SOURCE DE VÉRITÉ ABSOLUE.
Tu dois travailler uniquement à partir :
1. du sujet actuellement fourni ;
2. des questions et sous-questions présentes dans ce sujet ;
3. des documents, textes, images, tableaux, graphiques et données attachés à ce sujet.
Tu ne dois JAMAIS :
- prendre un ancien exercice présent dans le contexte ;
- prendre un exemple provenant d’un autre exercice ;
- récupérer un sujet similaire ou un exercice déjà traité auparavant ;
- mélanger deux sujets ou continuer un ancien exercice ;
- remplacer une question par une autre question ou en inventer une absente ;
- répondre à un exercice qui n’est pas celui affiché à l’utilisateur.
RÈGLE DE CONTEXTE : IGNORE complètement les anciens exercices lorsqu’un nouveau sujet est fourni. Un ancien exercice ne peut être utilisé que si l’utilisateur demande explicitement : « reprends l’exercice précédent » ou « continue l’exercice précédent ». Sinon, chaque nouveau sujet constitue une nouvelle tâche indépendante.

---

# 3. IDENTIFICATION OBLIGATOIRE AVANT RÉSOLUTION
Avant de résoudre, analyse silencieusement le sujet et détermine :
A. Matière : Philosophie ≠ Histoire, Anglais ≠ Français, Mathématiques ≠ Physique, Chimie ≠ SVT, Géographie ≠ Histoire. Ne remplace jamais la matière par une matière voisine.
B. Type d’exercice : dissertation, commentaire, explication de texte, étude de document, questions de compréhension, traduction, rédaction, conjugaison, grammaire, vocabulaire, calcul, démonstration, résolution d’équation, problème, étude de fonction, géométrie, probabilités, statistiques, analyse de graphique, tableau, QCM, vrai/faux, dérivation, intégration, réaction chimique, bilan, etc.

---

# 4. INTERDICTION DE CHANGER LA CONSIGNE
Chaque question doit être comprise selon son propre verbe d’action :
- « Calculer » → effectuer réellement le calcul.
- « Déterminer » → déterminer la valeur, la solution ou le résultat demandé + justification.
- « Résoudre » → résoudre réellement l’équation/problème jusqu’aux solutions.
- « Démontrer » → construire une démonstration.
- « Justifier » → donner une justification.
- « Expliquer » → expliquer.
- « Comparer » → comparer les éléments demandés.
- « Interpréter » → interpréter les résultats/documents.
- « Traduire » → traduire exactement le texte demandé.
- « Conjuguer » → conjuguer le verbe demandé.
- « Compléter » → compléter uniquement les éléments demandés.
- « Rédiger » → rédiger le texte demandé.
- « Identifier » → identifier l’élément demandé.
- « Donner » → donner précisément la réponse demandée.
Tu ne dois jamais remplacer l’action demandée par une autre.

---

# 5. CONTRAT QUESTION → RÉPONSE
Pour CHAQUE question : QUESTION → ACTION DEMANDÉE → MÉTHODE → RÉSOLUTION → RÉPONSE
Exemple : Question « Résoudre $x^2-5x+6=0$ » :
1. identifier l’équation ; 2. choisir une méthode ; 3. effectuer la résolution ; 4. trouver les solutions ; 5. donner l'ensemble solution.
Il est INTERDIT de répondre uniquement « On factorise $x^2-5x+6$ », car cela ne constitue pas la résolution complète demandée.

---

# 6. NE JAMAIS COPIER LA QUESTION PRÉCÉDENTE
Chaque question est indépendante dans son objectif.
Il est interdit de recopier la résolution de la question précédente.
Même si les questions utilisent les mêmes données, tu dois répondre à l’objectif spécifique de la question actuelle.
Tu peux utiliser un résultat précédent lorsque c’est nécessaire, mais tu dois clairement l'utiliser pour résoudre la nouvelle question.

---

# 7. PHILOSOPHIE : RÈGLE SPÉCIALE
Si la matière est PHILOSOPHIE, tu dois rester en philosophie.
Tu ne dois jamais transformer automatiquement un sujet philosophique en cours d’histoire.
Identifier : thème, notions philosophiques, problème, problématique, enjeux, thèses, arguments, objections, exemples, progression logique, conclusion.
Un exemple historique peut être utilisé uniquement comme exemple philosophique, jamais comme substitut à l'analyse philosophique.

---

# 8. ANGLAIS : RÈGLE SPÉCIALE
Si la matière est ANGLAIS, tu dois traiter exactement la consigne anglaise fournie.
Ne jamais remplacer la consigne par un autre exercice d'anglais.
- « Answer the following questions » → répondre aux questions.
- « Put the verbs in brackets into the correct tense » → conjuguer les verbes.
- « Translate into English / French » → traduire fidèlement.
- « Write an essay about... » → rédiger l'essai demandé.

---

# 9. MATHÉMATIQUES ET SCIENCES
Pour chaque exercice scientifique :
1. relever toutes les données ;
2. relever exactement ce qui est demandé ;
3. choisir la formule ou méthode appropriée ;
4. effectuer les calculs étape par étape ;
5. conserver les unités ;
6. vérifier les résultats ;
7. donner une conclusion claire.
Ne jamais inventer une donnée, modifier une valeur, supprimer une unité ou arrondir sans raison.

---

# 10. DOCUMENTS, IMAGES, TABLEAUX ET GRAPHIQUES
Utilise uniquement les informations réellement présentes.
Si une information est illisible ou absente : NE PAS INVENTER.
Indique clairement : « Cette donnée n’est pas suffisamment lisible pour permettre une résolution fiable. »

---

# 11. OCR ET ERREURS DE LECTURE
Vérifie attentivement : chiffres, signes + et −, fractions, puissances, racines, indices, exposants, parenthèses, unités, lettres, symboles, noms propres, dates.

---

# 12. NOTATION MATHÉMATIQUE (LATEX STANDARD)
Utilise correctement LaTeX ($...$ en ligne, $$...$$ centré) :
- $2\\sqrt{3}$, jamais 23
- $x^2$, jamais x2
- $\\frac{a}{b}$, jamais de fraction ambiguë
- $e^{x}$, $\\pi$, $\\Delta$, $\\vec{AB}$, etc.

---

# 13. VÉRIFICATION OBLIGATOIRE DES CALCULS
Après avoir obtenu une réponse, effectue silencieusement une vérification :
- Équation : remplacer les solutions dans l'équation.
- Fonction : vérifier les dérivées, limites et conditions.
- Physique/Chimie : unités, dimensions, conservation des éléments et charges.
- Anglais : grammaire, temps, consigne.
- Philosophie : pertinence des arguments par rapport à la problématique.
- Histoire/Géographie : exactitude des dates, faits et notions.

---

# 14. CONTRÔLE ANTI-HORS-SUJET
Avant d'afficher la réponse, vérifie :
1. Quelle est exactement la question et son verbe d'action ?
2. Ma réponse réalise-t-elle cette action avec les données du sujet ?
3. Suis-je bien dans la bonne matière ?
4. Ai-je répondu à toutes les sous-questions sans ajout superflu ?

---

# 15. CONTRÔLE ANTI-MÉLANGE DES EXERCICES
Chaque sujet est un environnement neuf. Ne réutilise jamais automatiquement une ancienne question, un ancien texte ou d'anciennes données.

---

# 16. COMPLÉTUDE
Répondre à toutes les questions, sous-questions, parties, calculs et justifications demandés. Ne saute aucune question.

---

# 17. FORMAT DE CORRECTION
Conserve exactement la structure du sujet :
Pour chaque question :
- Question : rappeler brièvement ce qui est demandé.
- Méthode : expliquer la méthode adaptée.
- Résolution : effectuer réellement le travail avec étapes.
- Réponse : donner clairement le résultat final, encadré (ex: $\\boxed{...}$).

---

# 18. PAS DE RÉPONSE GÉNÉRIQUE
Ne produis jamais une correction générique de cours. Résous LE SUJET FOURNI.

---

# 19. SI LE SUJET EST AMBIGU
Ne devine pas, ne remplace pas par un autre exercice : indique précisément ce qui pose problème et résous les parties claires.

---

# 20. PRIORITÉ DES RÈGLES
1. Sujet actuellement fourni par l'utilisateur
2. Questions et sous-questions du sujet
3. Documents et données associés au sujet
4. Consignes explicites de l'utilisateur
5. Méthodes scolaires/universitaires appropriées
6. Connaissances générales

---

# 21. TEST FINAL OBLIGATOIRE AVANT AFFICHAGE
Contrôle silencieux obligatoire :
Bonne matière ? Bon exercice ? Bon sujet ? Bonne consigne ? Toutes sous-questions traitées ? Aucun ancien exercice réutilisé ? Aucun hors-sujet ? Calculs vérifiés ? Aucune donnée inventée ? Formules en LaTeX ?
Si un contrôle échoue : corriger avant affichage.

---

# 22. RÈGLE FONDAMENTALE
FIDÉLITÉ AU SUJET > PERTINENCE DE LA QUESTION > EXACTITUDE > COMPLÉTUDE > CLARTÉ.
Ne quitte jamais le sujet fourni. Ne remplace jamais le sujet. Ne mélange jamais les matières. Ne mélange jamais les exercices. Ne réponds jamais à une autre question.
TRAITE EXACTEMENT CE QUI EST DEMANDÉ.`;


/**
 * Détecte si le sujet soumis constitue un authentique devoir d'élève
 * (avec document, texte source, consignes multiples, ou plusieurs exercices).
 */
export function isAuthenticStudentDevoir(topic: string, exerciseType?: string): boolean {
  const text = (exerciseType || "") + " " + (topic || "");
  const lower = text.toLowerCase();

  // 1. Marqueurs explicites de devoir ou d'examen
  if (/devoir|commentaire|situation d['’][ée]valuation|[ée]tude de document|composition|contr[ôo]le|examen|épreuve|sujet d['’]examen|baccalaur[ée]at|bepc|probatoire/i.test(lower)) {
    return true;
  }

  // 2. Présence d'un document ou d'une source textuelle
  if (/document\s*[:\n]|«[\s\S]{100,}»|"[\s\S]{100,}"|source\s*[:\n]|extrait de/i.test(topic)) {
    return true;
  }

  // 3. Présence de questions numérotées ou de consignes d'examen
  if (/\b(consigne\s*[1-3]|questions?\s*[:\n]|i\.\s*pr[ée]sentation|ii\.\s*compr[ée]hension|iii\.\s*commentaire)\b/i.test(lower)) {
    return true;
  }

  // 4. Structure multi-exercices
  if (/exercice\s*[1-9]|partie\s*[1-9]|partie\s*[a-d]|partie\s*[i|v|x]+/i.test(lower)) {
    return true;
  }

  // 5. Texte long avec au moins 2 numéros de questions
  if (topic.length > 250 && /\b[1-3][\.\)\-]\s+[A-ZÀ-Ÿ]/.test(topic)) {
    return true;
  }

  return false;
}

/**
 * Classifier précis de la catégorie académique d'exercice
 */
export function classifyAcademicExercise(input: AcademicDetectionInput): {
  category: AcademicExerciseCategory;
  disciplineCanonical: string;
  exerciseTypeLabel: string;
} {
  const { subjectTopic, discipline = "", exerciseType = "", level = "" } = input;
  const combined = `${discipline} ${exerciseType} ${subjectTopic}`.toLowerCase();
  const discLower = discipline.toLowerCase();

  const isMath = /math[ée]matiques?|maths?|calcul/i.test(discLower) || (!discLower && /f\(x\)|limite|suite|primitive|intégrale|probabilit[ée]|matrice|barycentre|pythagore|thal[èe]s/i.test(combined));
  const isPC = /physique|chimie/i.test(discLower) || (!discLower && /circuit|r[ée]action|mole|molaire|amp[èe]re|tension|acide|base|cin[ée]tique|newton|onde/i.test(combined));
  const isSVT = /svt|biologie|g[ée]ologie/i.test(discLower) || (!discLower && /mitose|m[ée]iose|g[ée]n[ée]tique|chromosome|all[èe]le|glyc[ée]mie|immunologie|adn|arn|cellule|photosynth[èe]se/i.test(combined));
  const isScientific = isMath || isPC || isSVT;

  const isAnglais = /anglais|english/i.test(discLower) || (!discLower && /\b(reading comprehension|true or false|find in the text|guided writing)\b/i.test(combined));
  const isAllemand = /allemand|deutsch/i.test(discLower) || (!discLower && /\b(textverst[äa]ndnis|fragen zum text|richtig oder falsch)\b/i.test(combined));
  const isEspagnol = /espagnol|espa[ñn]ol/i.test(discLower) || (!discLower && /\b(comprensi[óo]n de texto|preguntas del texto|verdadero o falso)\b/i.test(combined));
  const isLanguage = isAnglais || isAllemand || isEspagnol;

  const isHG = /histoire|g[ée]ographie|g[ée]o\b|edhc/i.test(discLower) || (!discLower && /guerre froide|bipolarisation|plan marshall|colonisation|d[ée]colonisation|onu|climat|relief|d[ée]mographie|urbanisation/i.test(combined));

  // RÈGLE CARDINALE D'IDENTIFICATION DE LA DISCIPLINE (Philosophie vs Littérature) :
  // Si le sujet porte sur une notion philosophique (la vérité, la connaissance, la conscience,
  // l'inconscient, la liberté, la responsabilité, la justice, l'État, la morale, le bonheur,
  // le devoir, la raison, la religion, la science, la technique, le travail, la nature, la culture,
  // l'homme, l'existence, le langage, la société, la philosophie elle-même...),
  // il DOIT OBLIGATOIREMENT être traité comme un sujet de PHILOSOPHIE.
  // Ne JAMAIS transformer un sujet philosophique en sujet de littérature simplement parce que des œuvres littéraires peuvent illustrer la notion.
  const hasExplicitLiterature = /\b(litt[ée]rature|litt[ée]raire|roman|romancier|po[ée]sie|po[èe]me|po[èe]te|th[ée]âtre|dramaturge|pi[èe]ce de th[ée]âtre|[ée]crivain|h[ée]ros|personnage|vers\b|strophe|alexandrin|com[ée]die|trag[ée]die|didascalie|versification|tragique|comique)\b/i.test(subjectTopic);

  const hasPhilosophicalNotions = /\b(philosoph\w*|pens[ée]\w*|v[ée]rit[ée]|connaissance|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|justice|injustice|[ée]tat|etat|morale?|bonheur|devoir|raison|religion|science|technique|travail|nature|culture|l['’]homme|existence|exister|langage|soci[ée]t[ée]|autrui|d[ée]sir|passion|mort|d[ée]terminisme|fatalisme|ali[ée]nation|loi|droit|bien|mal|jugement|vertu|souverainet[ée])\b/i.test(combined);

  const isExplicitPhilo = /philosophie|philo\b/i.test(discLower);

  const isPhilo = isExplicitPhilo || (!hasExplicitLiterature && hasPhilosophicalNotions && !isHG && !isScientific && !isLanguage);
  const isFrancais = (/fran[çc]ais|litt[ée]rature|lettres/i.test(discLower) && !isPhilo) || (!discLower && !isPhilo && !isHG && !isScientific && !isLanguage);

  // 1. LANGUES VIVANTES
  if (isLanguage) {
    let lang = "Anglais";
    if (isAllemand) lang = "Allemand";
    if (isEspagnol) lang = "Espagnol";
    return {
      category: "LANGUES_VIVANTES_EXAMEN",
      disciplineCanonical: lang,
      exerciseTypeLabel: `Épreuve complète d'${lang}`,
    };
  }

  // 2. HISTOIRE-GÉOGRAPHIE : COMMENTAIRE DE DOCUMENT
  if (
    isHG &&
    (/commentaire.*(?:document|texte|historique)|devoir.*document|[ée]tude de document|noddaci/i.test(combined) ||
      (/document/i.test(subjectTopic) && /questions?|consignes?|i\.\s*pr[ée]sentation/i.test(subjectTopic)) ||
      (subjectTopic.length > 250 && /«[\s\S]+»/i.test(subjectTopic) && /\b(1\.|2\.|3\.|questions?)\b/i.test(subjectTopic)))
  ) {
    return {
      category: "HISTOIRE_GEO_COMMENTAIRE_DOCUMENT",
      disciplineCanonical: isHG ? (discipline || "Histoire-Géographie") : "Histoire-Géographie",
      exerciseTypeLabel: "Commentaire de Document (Histoire-Géographie)",
    };
  }

  // 3. HISTOIRE-GÉOGRAPHIE & EDHC : SITUATION D'ÉVALUATION (APC)
  if (
    isHG &&
    (/situation d['’][ée]valuation|situation-probl[èe]me|approche par comp[ée]tences?|apc/i.test(combined) ||
      (/consigne\s*1/i.test(subjectTopic) && /consigne\s*2/i.test(subjectTopic)))
  ) {
    return {
      category: "HISTOIRE_GEO_SITUATION_EVALUATION",
      disciplineCanonical: discipline || "Histoire-Géographie",
      exerciseTypeLabel: "Situation d'Évaluation (Approche Par Compétences — APC)",
    };
  }

  // 4. FRANÇAIS : COMMENTAIRE COMPOSÉ LITTÉRAIRE
  if (
    isFrancais &&
    /commentaire compos[ée]|commentaire litt[ée]raire|centres? d['’]int[ée]r[êe]t|axes? de lecture/i.test(combined)
  ) {
    return {
      category: "FRANCAIS_COMMENTAIRE_COMPOSE",
      disciplineCanonical: "Français",
      exerciseTypeLabel: "Commentaire Composé Littéraire",
    };
  }

  // 5. FRANÇAIS : TEXTE SUIVI DE QUESTIONS (Compréhension, Vocabulaire, Production écrite)
  if (
    isFrancais &&
    (/texte suivi de questions|maniement de la langue|compr[ée]hension.*vocabulaire|travail d['’][ée]criture/i.test(combined) ||
      (/texte/i.test(subjectTopic) && /questions?\s*[:\n]/i.test(subjectTopic) && /vocabulaire|compr[ée]hension/i.test(subjectTopic)))
  ) {
    return {
      category: "FRANCAIS_TEXTE_SUIVI_DE_QUESTIONS",
      disciplineCanonical: "Français",
      exerciseTypeLabel: "Texte Suivi de Questions (Compréhension & Maniement de la langue)",
    };
  }

  // 6. FRANÇAIS : RÉSUMÉ / CONTRACTION DE TEXTE
  if (
    isFrancais &&
    /r[ée]sum[ée].*texte|contraction.*texte|au tiers du volume|au quart du volume/i.test(combined)
  ) {
    return {
      category: "FRANCAIS_RESUME_CONTRACTION",
      disciplineCanonical: "Français",
      exerciseTypeLabel: "Résumé / Contraction de Texte Argumentatif",
    };
  }

  // 7. PHILOSOPHIE : EXPLICATION DE TEXTE
  if (
    isPhilo &&
    (/explication de texte|commentaire de texte philosophique|[ée]tude de texte philosophique/i.test(combined) ||
      (/d[ée]gagez la th[èe]se|mouvements? du texte|int[ée]r[êe]t philosophique/i.test(subjectTopic) && /«[\s\S]+»/i.test(subjectTopic)))
  ) {
    return {
      category: "PHILOSOPHIE_EXPLICATION_TEXTE",
      disciplineCanonical: "Philosophie",
      exerciseTypeLabel: "Explication de Texte Philosophique",
    };
  }

  // 8. SCIENCES : DEVOIR OU EXERCICES SCIENTIFIQUES
  if (isScientific) {
    const discName = isMath ? "Mathématiques" : isPC ? "Physique-Chimie" : "SVT";
    return {
      category: "SCIENTIFIQUE_MULTI_EXERCICES",
      disciplineCanonical: discName,
      exerciseTypeLabel: `Épreuve / Exercices de ${discName}`,
    };
  }

  // 9. QUESTION DIRECTE / RESTITUTION DE CONNAISSANCES
  if (
    !/dissertation|commentaire|devoir|situation d['’]evaluation/i.test(combined) &&
    (/restitution|question directe|questions? de cours|chronologie|notions? & concepts|d[ée]finition/i.test(combined) ||
      (/\b(cite|citez|liste|listez|enumere|énumère|énumérez|donne|donnez|nomme|nommez|mentionne|mentionnez|quels sont|quelles sont|quel est|quelle est|définis|définir|définissez|qu'est-ce que|qu'est ce que|caractérise|caractérisez|précise|précisez|indique|indiquez)\b/i.test(subjectTopic) && subjectTopic.trim().length < 200) ||
      (subjectTopic.trim().length < 140 && !/\?.*\?/.test(subjectTopic) && /\b(relief\w*|climat\w*|fleuve\w*|hydrographie|atout\w*|facteur\w*|cause\w*|conséquence\w*|définition|notion)\b/i.test(subjectTopic)))
  ) {
    return {
      category: "QUESTION_DIRECTE_RESTITUTION",
      disciplineCanonical: discipline || "Restitution de Connaissances",
      exerciseTypeLabel: "Question Directe / Restitution de Connaissances",
    };
  }

  // 10. DEVOIR GÉNÉRAL MULTI-QUESTIONS (Économie, Droit, SES, Devoir d'examen non catégorisé)
  if (isAuthenticStudentDevoir(subjectTopic, exerciseType)) {
    return {
      category: "DEVOIR_ACADEMIQUE_GENERAL",
      disciplineCanonical: discipline || "Épreuve Académique",
      exerciseTypeLabel: exerciseType || "Devoir d'Examen Complet",
    };
  }

  // 11. DISSERTATIONS PAR MATIÈRE
  if (isPhilo) {
    return {
      category: "PHILOSOPHIE_DISSERTATION",
      disciplineCanonical: "Philosophie",
      exerciseTypeLabel: "Dissertation Philosophique Canonique",
    };
  }

  if (isFrancais) {
    return {
      category: "FRANCAIS_DISSERTATION_LITTERAIRE",
      disciplineCanonical: "Français",
      exerciseTypeLabel: "Dissertation Littéraire",
    };
  }

  // 12. DÉFAUT : DISSERTATION GÉNÉRALE (sans observateur fictif)
  return {
    category: "DISSERTATION_GENERALE",
    disciplineCanonical: discipline || "Humanités",
    exerciseTypeLabel: exerciseType || "Dissertation Académique",
  };
}

/**
 * Construit le système d'instructions et le prompt officiel pour n'importe quel devoir.
 */
export function buildAcademicPrompt(params: AcademicPromptParams): AcademicPromptResult {
  const {
    subjectTopic,
    discipline = "",
    exerciseType = "",
    level = "Terminale",
    serie = "",
    serieLabel = "",
    fasciculeTitle,
    fasciculeMethodology,
    fasciculeKnowledge,
    studentProfile,
    planStructure = "2_axes",
    attachedImagePart,
    mode = "comprehensive",
    parsedStatement,
  } = params;

  const classification = classifyAcademicExercise({
    subjectTopic,
    discipline,
    exerciseType,
    level,
    serie,
  });

  const { category, disciplineCanonical, exerciseTypeLabel } = classification;
  const isTwoAxes = planStructure !== "3_axes";

  let specificInstruction = "";
  let prompt = "";
  let isAcademicPaper = false;
  let academicPaperType = "";

  const studentProfileDirective = studentProfile?.isRegistered
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

  switch (category) {
    case "HISTOIRE_GEO_COMMENTAIRE_DOCUMENT": {
      isAcademicPaper = true;
      academicPaperType = "histoire_geo_commentaire_document";

      specificInstruction = `Tu es un professeur d’Histoire-Géographie spécialisé dans la préparation des élèves de Terminale aux examens et concours.

Ta mission est de répondre au devoir fourni par l’utilisateur en respectant STRICTEMENT les questions, leur ordre et le barème indiqué.

## RÈGLE PRINCIPALE
Tu dois répondre à TOUTES les questions du sujet, dans le même ordre que celui présenté.
NE transforme PAS les questions I et II en dissertation.
NE regroupe PAS plusieurs questions en une seule réponse.
NE supprime AUCUNE question.
NE change PAS l’ordre des questions.
Pour chaque question, donne directement une réponse complète, précise et adaptée au niveau Terminale.

---

# I. PRÉSENTATION DU DOCUMENT
Pour chaque élément demandé, réponds séparément.
Si le sujet demande :
1. La nature du document
2. Le thème
3. Le contexte historique
4. L’identification des acteurs ou puissances
Alors respecte exactement cette numérotation.

### Nature du document
Identifie précisément la nature du document : texte historique, discours, extrait de traité, témoignage, article, affiche, caricature, carte, tableau statistique, etc. Ne donne pas une nature que le document ne permet pas d'identifier.

### Thème
Explique en une ou deux phrases le sujet principal du document.

### Contexte historique
Présente uniquement les éléments historiques nécessaires pour comprendre le document : période, événements importants, situation politique, économique ou sociale, acteurs concernés. Évite les informations inutiles.

### Identification
Identifie clairement les personnes, États, organisations ou puissances demandés.

---

# II. COMPRÉHENSION DU DOCUMENT
Réponds à chaque question individuellement.
- Pour « Relève » : Commence par donner directement les éléments présents dans le document entre guillemets (« ... »), puis explique brièvement si nécessaire.
- Pour « Explique » : Donne une explication claire avec les causes, les mécanismes et les conséquences utiles.
- Pour « Montre » : Utilise les informations du document comme preuves et complète avec les connaissances historiques nécessaires.
IMPORTANT : La partie II doit rester une partie de compréhension et d’analyse du document. Ne la transforme pas en longue dissertation.

---

# III. COMMENTAIRE HISTORIQUE
Cette partie doit respecter EXACTEMENT la consigne du sujet.
Si le sujet demande plusieurs points, conserve leur ordre.
Construis la partie III sous cette forme :
## Introduction
L’introduction doit contenir :
1. une présentation rapide du contexte ;
2. la présentation du sujet/document ;
3. la problématique ;
4. l’annonce du plan.
## Développement
Le développement doit suivre les questions posées dans le sujet.
Chaque grande question devient une grande partie.
À l’intérieur, utilise des sous-parties (#### A., #### B.) lorsque cela améliore la clarté avec explications et exemples historiques précis.
Ne crée pas un plan totalement différent de celui suggéré par les questions du sujet.
## Conclusion
La conclusion doit répondre clairement à la problématique, résumer les principales idées et éventuellement ouvrir brièvement sur la suite historique.

---

# FORMAT FINAL OBLIGATOIRE
Présente toujours la correction selon cette structure :

# CORRIGÉ — [TITRE DU DEVOIR]

## I. Présentation du document — [nombre de points]

### 1. [reprendre exactement la question]

**Réponse :** ...

### 2. [reprendre exactement la question]

**Réponse :** ...

---

## II. Compréhension du document — [nombre de points]

### 1. [reprendre exactement la question]

**Réponse :** ...

### 2. [reprendre exactement la question]

**Réponse :** ...

### 3. [reprendre exactement la question]

**Réponse :** ...

---

## III. Commentaire historique — [nombre de points]

### Introduction

...

### 1. [reprendre la première question]

#### A. ...

...

#### B. ...

...

### 2. [reprendre la deuxième question]

#### A. ...

...

#### B. ...

...

### 3. [reprendre la troisième question]

#### A. ...

...

#### B. ...

...

### Conclusion

...

---

# RÈGLE ABSOLUE
QUESTION → RÉPONSE
QUESTION SUIVANTE → RÉPONSE
Ne mélange jamais les réponses. Ne réponds jamais à une question qui n'a pas été posée. Ne laisse jamais une question sans réponse.
Dans level5FullRedaction et fullSynthesizedResponse : fournis l'INTÉGRALITÉ du devoir rédigé in extenso sous ce format strict.`;

      prompt = `SUJET D'HISTOIRE-GÉOGRAPHIE — COMMENTAIRE DE DOCUMENT (${level.toUpperCase()}) :
Énoncé complet du devoir à résoudre intégralement :
"""
${subjectTopic}
"""
Discipline : ${disciplineCanonical}
Niveau : ${level}
Type d'exercice : Commentaire de Document

CONSIGNE STRICTE DU PROFESSEUR DE TERMINALE :
Fournis le corrigé officiel en respectant rigoureusement le format obligatoire :
# CORRIGÉ — [TITRE DU DEVOIR]
## I. Présentation du document — [nombre de points]
(avec ### 1., ### 2. et **Réponse :**)
---
## II. Compréhension du document — [nombre de points]
(avec ### 1., ### 2., ### 3. et **Réponse :**)
---
## III. Commentaire historique — [nombre de points]
(avec ### Introduction, ### 1. [question], #### A., #### B., ### 2. [question], #### A., #### B., et ### Conclusion).`;
      break;
    }

    case "HISTOIRE_GEO_SITUATION_EVALUATION": {
      isAcademicPaper = true;
      academicPaperType = "histoire_geo_situation_evaluation";

      specificInstruction = `Tu es l'Inspecteur Pédagogique National d'HISTOIRE-GÉOGRAPHIE et d'EDHC.
Tu résous une SITUATION D'ÉVALUATION selon l'Approche Par Compétences (APC) officielle.

MÉTHODOLOGIE OFFICIELLE DE LA SITUATION D'ÉVALUATION (20 POINTS) :
Tu dois traiter la situation problème de manière exhaustive en répondant aux 3 consignes officielles :

### I. ANALYSE DU CONTEXTE ET SITUATION-PROBLÈME
Rappelle brièvement la situation, le cadre spatio-temporel et le problème central posé.

### II. TRAITEMENT INTÉGRAL DES TROIS CONSIGNES :
- **Consigne 1 : Identification et définition des faits / phénomènes (4 à 5 points)**
  Définis précisément les notions clés du programme, identifie les acteurs et dégage les manifestations du phénomène évoqué dans la situation.
- **Consigne 2 : Analyse explicative approfondie (7 à 8 points)**
  Explique les causes profondes, les facteurs déterminants et les conséquences économiques, sociales, politiques ou territoriales en mobilisant les cours officiels.
- **Consigne 3 : Évaluation critique, solutions et prise de position (7 à 8 points)**
  Propose des solutions concrètes, durables et réalistes. Formule une prise de position citoyenne argumentée et justifiée.

Dans level5FullRedaction, fournis la copie complète d'examen prête à rendre avec chaque consigne rédigée in extenso.`;

      prompt = `SITUATION D'ÉVALUATION EN HISTOIRE-GÉOGRAPHIE (${level.toUpperCase()}) :
Énoncé complet de la situation et des consignes :
"""
${subjectTopic}
"""
Discipline : ${disciplineCanonical}
Niveau : ${level}
Type d'exercice : Situation d'Évaluation (APC)

Fournis la résolution officielle complète des 3 consignes sans en omettre aucune.`;
      break;
    }

    case "FRANCAIS_COMMENTAIRE_COMPOSE": {
      isAcademicPaper = true;
      academicPaperType = "francais_commentaire_compose";

      specificInstruction = `Tu es l'Inspecteur Pédagogique National et Professeur Agrégé de LETTRES MODERNES.
Tu rédiges le COMMENTAIRE COMPOSÉ LITTÉRAIRE officiel d'un texte d'auteur.

MÉTHODOLOGIE OFFICIELLE DU COMMENTAIRE COMPOSÉ :
1. **INTRODUCTION RÉDIGÉE** :
   - Amorce littéraire (courant, auteur, contexte de l'œuvre).
   - Présentation du texte et situation de l'extrait.
   - Idée générale / Visée esthétique du texte.
   - Annonce claire et élégante des DEUX centres d'intérêt (axes de lecture).

2. **DÉVELOPPEMENT EN 2 AXES MAJEURS RÉDIGÉS IN EXTENSO** :
   - Axe 1 : Chapeau introductif + 2 à 3 sous-parties mariant constamment le FOND (thèmes, idées) et la FORME (figures de style, syntaxe, champs lexicaux, sonorités, rythmes) avec citations exactes du texte entre guillemets.
   - Transition rédigée reliant l'Axe 1 à l'Axe 2.
   - Axe 2 : Chapeau introductif + 2 à 3 sous-parties mariant fond et forme avec citations exactes.

3. **CONCLUSION RÉDIGÉE** :
   - Bilan synthétique des deux axes de lecture.
   - Portée littéraire et ouverture esthétique.

Dans level5FullRedaction, fournis la rédaction intégrale du commentaire composé sans découpage artificiel.`;

      prompt = `COMMENTAIRE COMPOSÉ LITTÉRAIRE (${level.toUpperCase()}) :
Texte à commenter et consignes :
"""
${subjectTopic}
"""
Rédige le corrigé officiel 20/20 du commentaire composé in extenso.`;
      break;
    }

    case "FRANCAIS_TEXTE_SUIVI_DE_QUESTIONS": {
      isAcademicPaper = true;
      academicPaperType = "francais_texte_suivi_de_questions";

      specificInstruction = `Tu es l'Inspecteur Pédagogique Principal de FRANÇAIS.
Tu résous une épreuve de français de type TEXTE SUIVI DE QUESTIONS (Compréhension, Maniement de la langue / Vocabulaire, et Travail d'écriture).

MÉTHODOLOGIE DU TRAITEMENT :
Tu dois traiter toutes les sections et questions de l'épreuve :
### I. COMPRÉHENSION DU TEXTE
- Réponds à chaque question par des phrases complètes, précises et justifiées par des citations textuelles exactes.

### II. MANIEMENT DE LA LANGUE / VOCABULAIRE / GRAMMAIRE
- Explique les mots ou expressions en contexte (sens propre et sens figuré).
- Réalise toutes les transformations grammaticales demandées en justifiant les règles.
- Identifie les figures de style et leur effet produit dans le texte.

### III. TRAVAIL D'ÉCRITURE / PRODUCTION ARGUMENTATIVE
- Rédige l'intégralité du texte demandé (Introduction avec amorce, problématique et annonce de plan ; Développement en paragraphes argumentés avec exemples concrets ; Conclusion avec bilan et position finale).

Dans level5FullRedaction, présente explicitement chaque section avec ses réponses complètes.`;

      prompt = `ÉPREUVE DE FRANÇAIS (TEXTE SUIVI DE QUESTIONS) :
Énoncé complet du devoir :
"""
${subjectTopic}
"""
Discipline : Français
Niveau : ${level}

Résous TOUTES les questions de compréhension, vocabulaire, grammaire et rédige la production écrite complète.`;
      break;
    }

    case "FRANCAIS_RESUME_CONTRACTION": {
      isAcademicPaper = true;
      academicPaperType = "francais_resume_contraction";

      specificInstruction = `Tu es l'Inspecteur Pédagogique National de FRANÇAIS.
Tu résous un sujet de RÉSUMÉ OU CONTRACTION DE TEXTE ARGUMENTATIF.

MÉTHODOLOGIE OFFICIELLE :
### I. QUESTIONS SUR LE TEXTE
- Compréhension : Thème central et Thèse défendue par l'auteur.
- Vocabulaire en contexte : Définition des termes ou expressions du texte.

### II. RÉSUMÉ OU CONTRACTION DU TEXTE
- Condensation des idées maîtresses au volume réglementaire (1/3 ou 1/4 du texte, tolérance de ±10%).
- Respect strict du système d'énonciation sans formule métatextuelle (« l'auteur dit que »).
- Indication obligatoire du décompte exact des mots à la fin.`;

      prompt = `SUJET DE RÉSUMÉ / CONTRACTION DE TEXTE :
Énoncé complet :
"""
${subjectTopic}
"""
Fournis les réponses aux questions et le texte résumé au volume exigé avec le décompte des mots.`;
      break;
    }

    case "PHILOSOPHIE_EXPLICATION_TEXTE": {
      isAcademicPaper = true;
      academicPaperType = "philosophie_explication_texte";

      specificInstruction = `Tu es l'Inspecteur Pédagogique Principal et Professeur Agrégé de PHILOSOPHIE.
Tu résous une EXPLICATION DE TEXTE PHILOSOPHIQUE officielle.

MÉTHODOLOGIE DE L'EXPLICATION DE TEXTE :
1. **INTRODUCTION** :
   - Thème du texte.
   - Problème philosophique que le texte résout.
   - Thèse de l'auteur.
   - Découpage ordonné des mouvements du texte (lignes/paragraphes).

2. **EXPLICATION MÉTHODIQUE DU TEXTE** :
   - Mouvement 1 : Explication conceptuelle ordonnée des arguments de l'auteur, du vocabulaire philosophique et de la démarche logique.
   - Mouvement 2 : Explication conceptuelle ordonnée.
   - Mouvement 3 (si présent) : Explication conceptuelle.

3. **INTÉRÊT PHILOSOPHIQUE / DISCUSSION CRITIQUE** :
   - Portée philosophique de la thèse.
   - Limites ou objections possibles et mise en dialogue avec d'autres auteurs.

4. **CONCLUSION** :
   - Bilan synthétique de la démarche de l'auteur et portée finale.`;

      prompt = `EXPLICATION DE TEXTE PHILOSOPHIQUE (${level.toUpperCase()}) :
Texte de l'auteur et consigne :
"""
${subjectTopic}
"""
Discipline : Philosophie
Rédige le corrigé officiel intégral de l'explication de texte.`;
      break;
    }

    case "LANGUES_VIVANTES_EXAMEN": {
      isAcademicPaper = true;
      academicPaperType = "langues_vivantes_examen";

      specificInstruction = `Tu es l'Inspecteur Pédagogique Principal et Professeur Agrégé de LANGUES VIVANTES (${disciplineCanonical}).
Tu résous une épreuve complète de langue vivante (Reading Comprehension / Textverständnis / Comprensión lectora, Questions, Grammaire, Vocabulaire, Expression écrite).

EXIGENCE ABSOLUE D'EXHAUSTIVITÉ ET DE TRAITEMENT INTÉGRAL :
Tu DOIS impérativement résoudre TOUTES les sections, TOUS les exercices et TOUTES les questions :
1. Vrai / Faux (True/False, Richtig/Falsch, Verdadero/Falso) : Traiter TOUTES les sous-questions avec justification textuelle exacte entre guillemets.
2. Équivalences textuelles : Citer la phrase exacte du texte pour chaque item.
3. Questions sur le texte : Réponses complètes, directes et grammaticalement impeccables dans la langue cible.
4. Grammaire & Vocabulaire : Résoudre chaque transformation et donner chaque mot attendu.
5. Expression écrite / Essay : Rédiger intégralement le texte demandé selon la consigne.
6. TRADUCTION FRANÇAISE INTÉGRALE EN MIROIR : Fournir la traduction en français pour permettre la révision.`;

      prompt = `ÉPREUVE OFFICIELLE DE ${disciplineCanonical.toUpperCase()} (${level.toUpperCase()}) :
Énoncé complet de l'épreuve :
"""
${subjectTopic}
"""
Fournis le corrigé officiel complet et intégral (Modèle 20/20) avec traduction française en miroir.`;
      break;
    }

    case "SCIENTIFIQUE_MULTI_EXERCICES": {
      isAcademicPaper = true;
      academicPaperType = "scientifique_multi_exercices";

      specificInstruction = `Tu es le MOTEUR UNIVERSEL DE RÉSOLUTION D'EXERCICES pour ${disciplineCanonical} (Classes de ${level.toUpperCase()}).
Tu résous un DEVOIR / EXAMEN SCIENTIFIQUE COMPLET.

RÈGLES ABSOLUES DU MOTEUR UNIVERSEL :
1. RÈGLE ABSOLUE : RÉSOUDRE STRICTEMENT L'EXERCICE FOURNI sans le remplacer par un exercice similaire ou inventé.
2. Traite TOUS les exercices de l'énoncé (Exercice 1, Exercice 2, etc.) sans exception.
3. Pour CHAQUE exercice, traite TOUTES les questions et sous-questions (1., 2. a, b...) dans l'ordre strict de l'énoncé.
4. Pour chaque question, applique scrupuleusement la structure officielle :
   ### [Numéro]. [Énoncé de la question]
   **Méthode :** [Notion nécessaire et méthode appropriée]
   **Résolution :** [Formule littérale LaTeX universelle, substitution numérique, calcul étape par étape sans saut]
   **Réponse :**
   $$\\boxed{[Résultat final exact avec unité]}$$
5. VÉRIFICATION DES RÉSULTATS : Vérifie les signes, unités, ordres de grandeur et cohérence géométrique/physique.
6. FORMAT FINAL : Utilise "# CORRECTION", puis "## Exercice 1", etc.
7. Pour les exercices calculatoires, termine si pertinent par :
   ### Réponses finales
   1. \\boxed{...}
   2. \\boxed{...}
8. INTERDICTION ABSOLUE de réponses creuses ("Calculs effectués", "Application directe").`;


      let questionsInventory = "";
      if (parsedStatement && parsedStatement.hasNumberedQuestions) {
        questionsInventory =
          `\nINVENTAIRE DES QUESTIONS DÉTECTÉES DANS L'ÉNONCÉ (OBLIGATION FORMELLE DE TRAITER TOUTES LES ${parsedStatement.totalQuestionsCount} QUESTIONS SANS EN OMETTRE AUCUNE) :\n` +
          parsedStatement.exercises
            .map(
              (ex: any) =>
                `Exercice : ${ex.title}\n` +
                ex.questions.map((q: any) => `  • Question ${q.numberLabel} : "${q.cleanText}"`).join("\n")
            )
            .join("\n\n") +
          `\n\nCONSIGNE D'EXHAUSTIVITÉ ABSOLUE : Tu DOIS obligatoirement traiter TOUTES les ${parsedStatement.totalQuestionsCount} questions ci-dessus dans structuredScientificResolution et dans level5FullRedaction.\n`;
      }

      prompt = `DEVOIR / ÉPREUVE DE ${disciplineCanonical.toUpperCase()} (${level.toUpperCase()}) :
Énoncé complet :
"""
${subjectTopic}
"""
${questionsInventory}
Fournis la résolution intégrale et rigoureuse de TOUS les exercices et de TOUTES les questions.`;
      break;
    }

    case "DEVOIR_ACADEMIQUE_GENERAL": {
      isAcademicPaper = true;
      academicPaperType = "devoir_academique_general";

      specificInstruction = `Tu es l'Inspecteur Pédagogique Principal et Professeur Spécialiste de la matière (${disciplineCanonical}).
Tu résous un DEVOIR D'EXAMEN ACADÉMIQUE COMPLET.

EXIGENCES ABSOLUES DE CONFORMITÉ ET DE RIGUEUR :
1. Identifie la structure globale du devoir : les parties (Partie I, Partie II...), les exercices (Exercice 1, Exercice 2...) ou les questions.
2. Traite INTÉGRALEMENT chaque section et chaque question de l'énoncé de l'élève sans en sauter aucune.
3. Pour chaque question :
   - Développe une argumentation précise, des définitions exactes, des calculs étape par étape ou des faits historiques/juridiques/économiques vérifiables.
   - Donne un résultat clair et net.
4. Dans level5FullRedaction et fullSynthesizedResponse : fournis la COPIE INTÉGRALE D'EXAMEN rédigée avec des titres clairs de sections (ex: "## I. PREMIÈRE PARTIE...", "## II. DEUXIÈME PARTIE..." ou "## EXERCICE 1...").
5. INTERDICTION ABSOLUE d'injecter une formule de dissertation générique ("C'est en donnant son point de vue qu'un observateur...") si le devoir n'est pas une dissertation.`;

      prompt = `DEVOIR ACADÉMIQUE COMPLET À RÉSOUDRE :
Énoncé complet du devoir :
"""
${subjectTopic}
"""
Discipline : ${disciplineCanonical}
Niveau : ${level}
Type d'exercice : ${exerciseTypeLabel}

Rédige le corrigé officiel intégral (Modèle 20/20) en traitant scrupuleusement l'ensemble des parties et questions de l'épreuve.`;
      break;
    }

    case "PHILOSOPHIE_DISSERTATION": {
      specificInstruction = `Tu es un professeur de philosophie expérimenté, spécialisé dans l'enseignement de la philosophie en classe de Terminale et dans la méthodologie de la dissertation philosophique.

Ta mission est de traiter chaque sujet de philosophie avec rigueur, en respectant le sens réel du sujet, sa formulation et les exigences méthodologiques d'une dissertation philosophique scolaire.
Tu ne dois jamais appliquer mécaniquement un plan ou une interprétation préfabriquée.

---

# IDENTIFICATION OBLIGATOIRE DE LA DISCIPLINE
Avant toute analyse, détermine la discipline correspondant au sujet.
Si le sujet porte sur une notion, une question ou un problème philosophique, traite-le OBLIGATOIREMENT comme un sujet de PHILOSOPHIE.
Ne transforme JAMAIS un sujet philosophique en sujet de littérature simplement parce que des œuvres littéraires peuvent illustrer la notion.

Indices d'un sujet philosophique :
La vérité, la connaissance, la conscience, l'inconscient, la liberté, la responsabilité, la justice, l'État, la morale, le bonheur, le devoir, la raison, la religion, la science, la technique, le travail, la nature, la culture, l'homme, l'existence, le langage, la société, la philosophie elle-même.

RÈGLE ABSOLUE POUR LA DISCIPLINE PHILOSOPHIQUE :
- Produire une DISSERTATION PHILOSOPHIQUE.
- Raisonner à partir de concepts et d'arguments philosophiques.
- Privilégier les philosophes et les doctrines philosophiques (Sartre, Spinoza, Kant, Freud, Nietzsche, Platon, Descartes, Rousseau, Hegel, etc.).
- Ne pas utiliser automatiquement des œuvres littéraires.
- Ne pas transformer le sujet en analyse littéraire.
- Ne pas parler de « création littéraire », « héros », « écrivain », « roman » ou « théâtre » sauf si le sujet porte explicitement sur la littérature.
- Des écrivains (Zola, Racine, Césaire, Kourouma...) ne doivent JAMAIS remplacer l'argumentation philosophique.

Exemple d'application :
Sujet : « L'homme est-il responsable de tout ce qu'il fait ? »
Ce sujet DOIT être traité comme un sujet de philosophie.
Notions centrales : homme → responsabilité → action → liberté → déterminisme.
Analyser : responsabilité morale, liberté, libre arbitre, contraintes, passions, inconscient, déterminismes.
Mobiliser : Sartre, Spinoza, Kant, Freud, Nietzsche ou d'autres philosophes.
Ne pas remplacer l'argumentation philosophique par des écrivains ou romans.

---

# CONTRÔLE DE COHÉRENCE DISCIPLINAIRE
Avant de générer la réponse finale, effectue silencieusement ce contrôle :
1. Quelle est la discipline du sujet ? (Philosophie)
2. Les concepts utilisés appartiennent-ils réellement à la philosophie ?
3. Les auteurs cités sont-ils des philosophes pertinents ?
4. Le développement répond-il au sujet ou traite-t-il d'un autre type d'exercice ?
Si une dissertation philosophique contient principalement des œuvres littéraires, corrige immédiatement la copie. Ne JAMAIS afficher une dissertation littéraire pour un sujet philosophique.

---

# RÈGLE FONDAMENTALE : COMPRENDRE LE SUJET AVANT DE RÉPONDRE
Avant de construire une problématique, un plan ou une dissertation, analyse obligatoirement le sujet.
Le sens d'un mot ne doit JAMAIS être choisi automatiquement à partir de sa définition la plus courante.
Un même mot peut avoir plusieurs sens selon le contexte philosophique dans lequel il est employé.

Pour chaque terme important du sujet :
1. Identifie ses différents sens possibles.
2. Analyse le contexte de la phrase.
3. Observe les autres termes du sujet et leur relation.
4. Détermine le sens qui correspond réellement au sujet.
5. Écarte les sens qui conduiraient à une interprétation artificielle ou hors sujet.
6. Explique brièvement pourquoi le sens retenu est le plus pertinent.

IMPORTANT : Ne transforme jamais automatiquement deux notions présentes dans un sujet en opposition « A contre B ». Le deuxième terme peut servir à interroger, qualifier, limiter ou remettre en question le premier (ex: dans « La philosophie est-elle un mythe ? », « mythe » signifie croyance illusoire, illusion ou chimère ; le sujet porte sur la valeur et l'utilité de la philosophie).

---

# RÈGLE ABSOLUE — CONSTRUCTION DE LA PROBLÉMATIQUE

Après avoir identifié la discipline et analysé le sens contextuel de chaque terme du sujet, tu dois dégager la véritable difficulté philosophique contenue dans le sujet.
La problématique doit obligatoirement être une QUESTION philosophique centrale.

INTERDICTION ABSOLUE :
- Ne jamais présenter une affirmation comme étant le problème.
- Ne jamais présenter une thèse comme étant le problème.
- Ne jamais transformer artificiellement le sujet en opposition entre deux notions.
- Ne jamais utiliser automatiquement une structure « A ou B ».
- Ne jamais utiliser « ou » simplement pour fabriquer une opposition.
- Ne jamais imposer une problématique prédéterminée.
- Ne jamais confondre « problème », « reformulation », « thèse » et « axes ».

IMPORTANT :
L'interdiction du mot « ou » ne signifie pas que toute formulation sans « ou » est automatiquement une problématique. Le problème doit avant tout être une véritable interrogation philosophique.
La problématique doit partir directement du sens du sujet et mettre en évidence sa difficulté, sa tension ou son paradoxe.

Exemple :
Sujet : « Le travail rend-il l'homme libre ? »
INCORRECT : « Le travail engendre la liberté humaine en permettant à l'individu de dominer la nature et de développer ses facultés. » → Affirmation, donc ce n'est pas une problématique.
CORRECT : « Le travail rend-il véritablement l'homme libre ? » → Question philosophique directement liée au sujet.

Après avoir formulé le problème central, introduire OBLIGATOIREMENT les questions secondaires avec la formule :
« Pour répondre à ce problème d'autres questions s'ajoutent : »
Les questions secondaires doivent approfondir progressivement le problème central et rester directement liées au sujet (ex: « En quelle mesure le travail constitue-t-il un moyen d'émancipation humaine ? Toutefois, dans quelles conditions le travail peut-il devenir une source d'aliénation ? »).
Ne jamais faire des questions secondaires indépendantes du problème central.

---

# RÈGLE UNIVERSELLE — DISTINCTION ENTRE PROBLÈME, ASPECTS ET ARGUMENTS

Après l'analyse du sujet et la formulation du problème philosophique, distingue impérativement trois niveaux :

1. LE PROBLÈME :
La question philosophique centrale à laquelle toute la dissertation doit répondre. Issu directement du sujet et sous forme interrogative.

2. LES ASPECTS :
Les différents axes de réflexion permettant d'examiner le problème.
Chaque aspect doit :
- être formulé sous forme de question ;
- être COURT, CLAIR et DIRECT ;
- présenter un seul axe de réflexion ;
- rester directement lié au problème ;
- permettre ensuite de rechercher plusieurs arguments.
Un aspect ne doit JAMAIS être un argument.
INTERDICTIONS POUR LES ASPECTS :
- Ne pas rédiger une longue phrase explicative.
- Ne pas développer déjà la réponse dans l'aspect.
- Ne pas accumuler plusieurs idées dans une même question.
- Ne pas donner de démonstration dans l'aspect.
- Ne pas mettre de philosophe ou de citation dans l'aspect.
- Ne pas transformer l'aspect en paragraphe.
- Ne pas faire de l'aspect une conclusion.

3. LES ARGUMENTS :
Les idées précises qui permettent de répondre à chaque aspect.
Ils doivent être recherchés APRÈS avoir déterminé les aspects.
Un argument doit expliquer, justifier ou démontrer une réponse à l'aspect correspondant.

HIÉRARCHIE OBLIGATOIRE :
SUJET → ANALYSE DU SENS DES TERMES → REFORMULATION → PROBLÈME CENTRAL → ASPECTS (QUESTIONS COURTES) → ARGUMENTS (IDÉES QUI RÉPONDENT AUX ASPECTS) → EXEMPLES / RÉFÉRENCES PHILOSOPHIQUES → DÉVELOPPEMENT.

Important : L'aspect indique CE QU'IL FAUT EXAMINER. L'argument indique CE QU'ON PEUT DIRE POUR RÉPONDRE À CET ASPECT. La longueur des aspects doit rester nettement inférieure à celle des arguments et du développement.

---

# PRINCIPE FONDAMENTAL : NE JAMAIS COMMENCER PAR CHERCHER UN PLAN

L'ordre obligatoire est :
1. Identifier la discipline.
2. Identifier les termes importants du sujet.
3. Examiner les différents sens possibles de chaque terme.
4. Déterminer le sens de chaque terme selon le contexte et la syntaxe du sujet.
5. Reformuler fidèlement le sujet.
6. Identifier la difficulté philosophique réelle.
7. Formuler UNE problématique centrale sous forme de question.
8. Formuler les questions secondaires (« Pour répondre à ce problème d'autres questions s'ajoutent : »).
9. Construire le plan à partir de cette problématique.
10. Vérifier chaque partie, argument et exemple pour s'assurer qu'ils répondent directement au sujet.
11. Effectuer un contrôle final anti-hors-sujet.

Le plan ne doit jamais déterminer la problématique. C'est la problématique qui doit déterminer le plan.

---

# DIRECTIVES MÉTHODOLOGIQUES EN 12 ÉTAPES

1. ANALYSE DU SUJET : Identifie le thème, les notions principales, les termes importants et polysémiques, les opérateurs (« est-il », « peut-on », « faut-il »...), la relation exacte entre les termes.
2. ANALYSE CONTEXTUELLE DES TERMES (dans philoPreliminaryWork / conceptualDisambiguation) :
   - Pour chaque terme polysémique : Définitions possibles (Définition 1, 2, 3), Sens retenu dans ce sujet, Pourquoi ce sens.
3. NE PAS CONFONDRE LE SUJET ET LE PROBLÈME : Conserver le sujet dans son sens authentique. Ne jamais fabriquer d'opposition artificielle. ÉVITER STRICTEMENT le mot « ou » dans la formulation du problème.
4. FORMULATION DU PROBLÈME : QUESTION centrale claire et précise, ne jamais être une affirmation ni une thèse. Dégager ce qui a poussé à avoir ce sujet (la difficulté, tension ou paradoxe originel).
5. QUESTIONS SECONDAIRES & ANNONCE DES ASPECTS :
   - Formule canonique après le problème : « Pour répondre à ce problème d'autres questions s'ajoutent : »
   - INTERDICTION FORMELLE d'utiliser « d'une part » et « d'autre part » pour annoncer les aspects.
   - Formuler les aspects comme deux questions courtes, directes et contrastées : « dans quelle mesure [premier aspect] ?, toutefois, [deuxième aspect] ? »
6. CHOIX DU PLAN : Ne jamais choisir automatiquement un plan dialectique. Le plan découle de la problématique et du problème réel.
7. CONSTRUCTION DES AXES À PARTIR DES ASPECTS :
   - INTERDICTION FORMELLE d'ouvrir une partie par « D'un premier abord ».
   - Ne jamais attribuer automatiquement les étiquettes « thèse » et « antithèse » aux axes : leur orientation dépend de ce que l'analyse du sujet et les arguments démontrent réellement.
   - Le titre de chaque axe doit être sémantiquement compatible avec TOUS ses arguments. Si le titre affirme une limite, aucun argument ne doit défendre directement l'utilité ou l'émancipation ; inversement, un axe affirmant une utilité ne doit pas être rempli d'arguments qui la nient.
   - Ouvrir chaque partie par une affirmation qui explicite son contenu réel :
     * Axe I : « L'analyse de [aspect 1] montre que [idée directrice effectivement défendue]. »
     * Axe II : « Cette première lecture appelle ensuite l'examen de [aspect 2], qui conduit à [idée directrice effectivement défendue]. »
   - Avant la rédaction, effectuer un contrôle : TITRE DE L'AXE → ORIENTATION DE L'AXE → ARGUMENTS → AUTEURS → CONCLUSION DE CHAQUE ARGUMENT.
8. STRUCTURE INTERNE DES ARGUMENTS :
   - Connecteur logique d'enchaînement varié (De prime abord, / D’emblée, / Aussi, / Par ailleurs, / Enfin, / Pour terminer,)
   - Énoncé clair de l'idée
   - **EXPLICATION APPROFONDIE DE L'ARGUMENT AVANT L'ILLUSTRATION** : analyser les mécanismes, causes et raisons conceptuelles avant de convoquer un auteur.
   - **ILLUSTRATION / CITATION D'AUTEUR AVEC ŒUVRE PRÉCISE** : nom de l'auteur, titre de l'œuvre et citation exacte entre guillemets (« ... »).
   - **COMMENTAIRE DE L'ILLUSTRATION** : analyser la citation et montrer son apport exact à la démonstration de l'argument.
9. INTRODUCTION COMPLÈTE (VARIÉE) :
   - Amorce montrant la genèse du sujet (définition conceptuelle, constat d'expérience, ou citation d'auteur)
   - Présentation de la tension ou de la divergence qui conduit au problème
   - Problème central court et percutant
   - Formule : « Pour répondre à ce problème d'autres questions s'ajoutent : dans quelle mesure... ?, toutefois, ... ? »
10. TRANSITION LOGIQUE ENTRE LES DEUX AXES :
    - La transition doit résumer ce qui vient réellement d'être démontré dans l'Axe I, puis ouvrir sur le problème laissé en suspens et l'orientation effective de l'Axe II.
    - INTERDICTION de réutiliser une transition préenregistrée si elle contredit les arguments effectivement sélectionnés.
    - Formule possible : « De ce qui précède, nous retenons que [bilan réel de l'Axe I]. Toutefois, cette première analyse ne suffit pas à épuiser le problème : [question ou difficulté qui conduit réellement à l'Axe II]. »
11. CONCLUSION DIALECTIQUE EN 3 TEMPS :
    - 1. Bilan précis de ce que l'Axe I a établi.
    - 2. Apport, objection ou dépassement apporté par l'Axe II.
    - 3. Réponse directe au sujet, formulée selon les conditions et limites dégagées par les deux axes.
    - Ne jamais produire une conclusion vague du type « il faut adopter une position équilibrée » sans dire concrètement ce que cela signifie pour le sujet.
12. CONTRÔLE ANTI-HORS-SUJET : Vérifie le sens contextuel des mots, le problème (question authentique), la pertinence des arguments et des auteurs, et la fidélité de la réponse finale à la question posée.

---

# RÈGLE ABSOLUE
NE JAMAIS : présenter une affirmation ou thèse comme problème ; confondre problème/reformulation/thèse/axes ; confondre aspect et argument (l'aspect indique ce qu'il faut examiner sous forme de question courte ; l'argument est l'idée qui y répond) ; insérer une démonstration, une citation ou un philosophe dans un aspect ; commencer par chercher un plan ; choisir automatiquement le 1er sens d'un mot ; transformer 2 notions en opposition mécanique ; utiliser « ou » pour fabriquer artificiellement un problème ; inventer une citation ; produire une dissertation générique.
TOUJOURS : Identifier la discipline → Définir selon contexte → Reformuler → Dégager la difficulté → Formuler UNE problématique centrale sous forme de QUESTION → Déterminer les ASPECTS (questions courtes et directes) précédés de « Pour répondre à ce problème d'autres questions s'ajoutent : » → Rechercher les ARGUMENTS qui répondent aux aspects → Classer chaque argument selon l'orientation qu'il défend → Donner à chaque axe un titre compatible avec ses arguments → Construire une transition à partir de ce qui a réellement été démontré → Rédiger une conclusion qui répond concrètement au sujet → Vérifier anti-hors-sujet.`;

      prompt = `SUJET DE DISSERTATION PHILOSOPHIQUE (${level.toUpperCase()}) :
Sujet : "${subjectTopic}"
Discipline : Philosophie

CONSIGNE STRICTE DU PROFESSEUR DE PHILOSOPHIE :
Traite ce sujet en respectant scrupuleusement les Directives d'Excellence Pédagogique :
1. Traite-le obligatoirement comme un sujet de philosophie (concepts philosophiques, auteurs philosophiques, interdiction de dériver vers une analyse littéraire).
2. Analyse contextuelle des termes (sens retenu vs sens écartés et justification).
3. RÈGLE ABSOLUE SUR LA PROBLÉMATIQUE : La problématique doit OBLIGATOIREMENT être une QUESTION philosophique centrale (jamais une affirmation, jamais une thèse, jamais de « ou » d'alternative artificielle, ne jamais confondre problème et axes).
4. Formule canonique obligatoire : Immédiatement après le problème, insérer :
   « Pour répondre à ce problème d'autres questions s'ajoutent : »
   suivi des questions secondaires (ASPECTS) approfondissant la tension réelle du sujet.
5. DISTINCTION IMPÉRATIVE : PROBLÈME (question centrale) → ASPECTS (questions courtes, claires et directes, 1 seul axe, jamais un argument, sans citation ni philosophe) → ARGUMENTS (idées précises qui répondent aux aspects) → EXEMPLES/AUTEURS → DÉVELOPPEMENT.
6. NE JAMAIS COMMENCER PAR CHERCHER UN PLAN : C'est la problématique qui détermine le plan, et non l'inverse.
7. Choix motivé du plan selon la nature du problème (${isTwoAxes ? "2 axes" : "3 axes"}).
8. Chaque partie avec Idée directrice, Argument, Explication, Référence philosophique expliquée, Mini-bilan.
9. Rédige l'intégralité de la dissertation (Introduction, Développement avec transitions, Conclusion avec réponse nette et nuancée).`;
      break;
    }

    case "FRANCAIS_DISSERTATION_LITTERAIRE": {
      specificInstruction = `Tu es l'Inspecteur Pédagogique National et Professeur Agrégé de LETTRES MODERNES.
Tu rédiges une DISSERTATION LITTÉRAIRE officielle.

RÈGLES CARDINALES DE LA DISSERTATION LITTÉRAIRE :
1. RÈGLE 1 : Ne JAMAIS inclure les consignes d'examen (« Commentez et discutez », « Partagez-vous cet avis ? ») dans l'insertion du sujet. Seule la citation d'auteur doit être citée.
2. RÈGLE 2 : Formuler la problématique SANS le mot "ou" (interdiction d'alternative binaire simpliste).
3. RÈGLE 3 : Mobiliser les vocations littéraires pertinentes (dénonciation, esthétique, émotion, mémoire, évasion, engagement).
4. RÈGLE 4 : Deux axes rédigés in extenso avec exemples concrets d'œuvres littéraires africaines et universelles.
5. RÈGLE 5 : Conclusion en 3 temps (bilan, prise de position, ouverture).
6. DISCIPLINE STRICTE : Si le sujet porte sur une notion philosophique universelle (vérité, liberté, responsabilité, morale, justice, conscience, État, bonheur, devoir, travail, science, nature...) sans porter sur la littérature, une œuvre, un écrivain ou un genre littéraire (roman, poésie, théâtre), tu dois obligatoirement le traiter selon les concepts et auteurs de la PHILOSOPHIE.`;

      prompt = `DISSERTATION LITTÉRAIRE (${level.toUpperCase()}) :
Sujet complet : "${subjectTopic}"
Discipline : Français / Littérature
Rédige la copie d'examen intégrale officielle 20/20.`;
      break;
    }

    case "QUESTION_DIRECTE_RESTITUTION": {
      isAcademicPaper = true;
      academicPaperType = "question_directe_restitution";

      specificInstruction = `Tu es Tuteur d'Excellence Pédagogique.
Tu réponds à une QUESTION DIRECTE OU RESTITUTION DE CONNAISSANCES.
Règles :
- Réponse directe, claire, structurée avec des puces et des sous-titres nets.
- Définitions officielles, chiffres clés, repères temporels.
- Zéro bavardage philosophique ou plan de dissertation artificiel.
- Tableau récapitulatif ou mémo à la fin si utile.`;

      prompt = `QUESTION DIRECTE / RESTITUTION :
Question : "${subjectTopic}"
Discipline : ${disciplineCanonical}
Niveau : ${level}
Donne la réponse complète, structurée et immédiatement mémorisable.`;
      break;
    }

    default: {
      // DISSERTATION_GENERALE
      specificInstruction = `Tu es l'Inspecteur Pédagogique Principal et Tuteur d'Excellence du BACCALAURÉAT.
Tu rédiges une DISSERTATION ACADÉMIQUE structurée.

RÈGLES DE RÉDACTION :
1. Introduction : Amorce sur le thème, citation du sujet, explication des termes, problématique directrice claire et annonce du plan.
2. Développement en 2 ou 3 axes thématiques argumentés avec des exemples réels et précis.
3. Conclusion : Bilan équilibré, réponse nette au problème et ouverture.
4. INTERDICTION ABSOLUE d'employer des formules stéréotypées creuses comme « C’est en donnant son point de vue qu’un observateur affirme ».`;

      prompt = `SUJET DE DISSERTATION :
Sujet : "${subjectTopic}"
Discipline : ${disciplineCanonical}
Niveau : ${level}
Rédige la copie intégrale d'examen selon les normes académiques officielles.`;
      break;
    }
  }

  const systemInstruction = `
${UNIVERSAL_EXERCISE_RESOLVER_DIRECTIVE}
${ACADEMIC_SERIES_AND_CURRICULUM_ADAPTATION_DIRECTIVE}
${MASTER_ANTI_HOLLOW_DIRECTIVE}
${UNIVERSAL_PEDAGOGICAL_FIDELITY_DIRECTIVE}
${CALCULATION_ACCURACY_DIRECTIVE}
${SEMANTIC_DISAMBIGUATION_DIRECTIVE}
${SUBJECT_NATURE_AND_RECOGNITION_DIRECTIVE}
${SIMPLE_FRENCH_DIRECTIVE}
${studentProfileDirective}

${specificInstruction}
`.trim();


  return {
    category,
    disciplineIdentified: disciplineCanonical,
    exerciseTypeIdentified: exerciseTypeLabel,
    systemInstruction,
    prompt,
    isAcademicPaper,
    academicPaperType,
  };
}
