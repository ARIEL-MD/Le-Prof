/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES SECONDE A
 * Source : Mon École à la Maison — Ministère de l'Éducation Nationale et de l'Alphabétisation (Côte d'Ivoire)
 * Références pédagogiques : CIAM 2e Littéraire, Les Cahiers de la réussite Mathématiques 2nde A (Vallesse Éditions), Collection Le Repère APC 2de A.
 * 
 * Ce fichier est 100% autonome (aucune dépendance IA, aucun appel réseau).
 * Il fournit au moteur local de LE PROF la structure complète, les formules exactes et les méthodes pas à pas.
 */

export type Chapter = {
  id: string;                // ex: "ch1"
  lessonNumber?: number;
  title: string;             // titre exact du chapitre
  pages?: [number, number] | readonly [number, number];  // si connu
  topics: string[] | readonly string[];          // notions abordées, en langage clair
  formulas: string[] | readonly string[];        // toutes les formules/théorèmes du chapitre
  methods: string[] | readonly string[];         // méthodes de résolution étape par étape
};

export const maths2ndeAKnowledgeBase = {
  name: "LE PROF — Knowledge Base Mathématiques 2nde A",
  version: "1.0.0",
  source: "Mon École à la Maison — Ministère de l'Éducation Nationale et de l'Alphabétisation (Côte d'Ivoire)",
  level: "Seconde A",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Calculs numériques",
      pages: [1, 9] as const,
      topics: [
        "Opérations avec les quotients : addition et soustraction de fractions avec même dénominateur ou dénominateurs différents",
        "Produit et division de quotients : produit de fractions, inverse d'un quotient, division de fractions simples et complexes",
        "Règles de calcul sur les fractions : simplification et mise sous forme de fraction irréductible",
        "Puissances entières d'un nombre réel : définition de a^n comme produit de n facteurs égaux à a, convention a^0 = 1 pour a != 0, exposant négatif a^(-n) = 1/(a^n)",
        "Propriétés algébriques des puissances : produit de puissances de même base, quotient de puissances de même base, puissance d'un quotient, produit de puissances de même exposant, puissance d'une puissance",
        "Calculs avec les radicaux (racines carrées) : racine d'un produit sqrt(a*b) = sqrt(a)*sqrt(b), racine d'un quotient sqrt(a/b) = sqrt(a)/sqrt(b), racine d'une puissance sqrt(a^n) = (sqrt(a))^n",
        "Proportionnalité : définition de grandeurs proportionnelles, relation linéaire y = k*x, coefficient de proportionnalité k = y/x",
        "Tableaux de proportionnalité : recherche du coefficient multiplicateur, produit en croix et complétion de tableaux",
        "Pourcentages : calcul d'un pourcentage k% d'une quantité a par a * (k/100)",
        "Évolutions en pourcentage : coefficient multiplicateur d'une augmentation de k% (1 + k/100), coefficient multiplicateur d'une réduction de k% (1 - k/100)",
        "Produit de pourcentages : calcul successif de a% de b% d'une quantité par la formule (a * b) / 10000",
        "Calculs de proportions et sous-populations : proportion d'une sous-catégorie par rapport à une catégorie intermédiaire ou par rapport à l'effectif global",
        "Approximation décimale : encadrement d'un nombre réel par deux nombres décimaux consécutifs d'ordre n, approximation décimale d'ordre n par défaut et par excès",
        "Arrondi d'ordre n d'un nombre réel : règle du chiffre d'ordre (n+1) (conservation si < 5, augmentation d'une unité si >= 5)"
      ],
      formulas: [
        "a/b + c/b = (a + c) / b (b != 0)",
        "a/b - c/b = (a - c) / b (b != 0)",
        "a/b + c/d = (a*d + b*c) / (b*d) (b != 0, d != 0)",
        "a/b - c/d = (a*d - b*c) / (b*d) (b != 0, d != 0)",
        "a * (1/b) = a / b (b != 0)",
        "(a/b) * (c/d) = (a * c) / (b * d) (b != 0, d != 0)",
        "(a) / (c/d) = a * (d/c) = (a * d) / c (c != 0, d != 0)",
        "(a/b) / (c/d) = (a * d) / (b * c) (b != 0, c != 0, d != 0)",
        "a^n = a * a * ... * a (n facteurs égaux à a, n in N*)",
        "a^0 = 1 (pour tout réel a != 0)",
        "a^(-n) = 1 / (a^n) (a != 0, n in N*)",
        "a^n * a^p = a^(n + p)",
        "a^n / a^p = a^(n - p) (a != 0)",
        "(a / b)^n = (a^n) / (b^n) (b != 0)",
        "a^n * b^n = (a * b)^n",
        "(a^n)^p = a^(n * p)",
        "sqrt(a * b) = sqrt(a) * sqrt(b) (a >= 0, b >= 0)",
        "sqrt(a / b) = sqrt(a) / sqrt(b) (a >= 0, b > 0)",
        "sqrt(a^n) = (sqrt(a))^n (a >= 0, n in N)",
        "y = k * x (Proportionnalité de coefficient k = y/x)",
        "k% d'une quantité a : Valeur = a * (k / 100)",
        "Augmentation de k% : Nouveau prix = a * (1 + k / 100)",
        "Réduction de k% : Nouveau prix = a * (1 - k / 100)",
        "Produit de pourcentages (a% de b%) : Taux global = (a * b) / 10000",
        "Pourcentage d'une partie dans un total : p = (Effectif_partiel / Effectif_total) * 100",
        "Approximation d'ordre n : d_defaut < x < d_exces avec d_exces - d_defaut = 10^(-n)",
        "Arrondi d'ordre n : si le (n+1)-ième chiffre après la virgule in {0,1,2,3,4} -> valeur par défaut ; si in {5,6,7,8,9} -> valeur par excès"
      ],
      methods: [
        "Calculer une somme ou différence de fractions : 1. Identifier les dénominateurs b et d. 2. Si les dénominateurs sont égaux, additionner ou soustraire directement les numérateurs : (a +- c)/b. 3. S'ils sont différents, réduire au même dénominateur bd : (a*d +- b*c)/(b*d). 4. Simplifier la fraction obtenue par le PGCD des termes pour la rendre irréductible.",
        "Calculer un quotient de quotients (fraction de fraction) : 1. Repérer la barre de fraction principale séparant le numérateur et le dénominateur. 2. Transformer la division en multiplication par l'inverse de la fraction au dénominateur : (a/b) / (c/d) = (a/b) * (d/c). 3. Multiplier les numérateurs entre eux et les dénominateurs entre eux : (a*d)/(b*c). 4. Simplifier les facteurs communs avant d'effectuer les multiplications.",
        "Simplifier une expression avec des puissances entières : 1. Regrouper les puissances de même base à l'aide des règles a^n * a^p = a^(n+p) et a^n / a^p = a^(n-p). 2. Appliquer les formules de distributivité sur les produits et quotients (ab)^n = a^n * b^n et (a/b)^n = a^n / b^n. 3. Développer les puissances de puissances : (a^n)^p = a^(n*p). 4. Exprimer le résultat final sous la forme d'un nombre à puissance unique a^m ou d'une fraction irréductible.",
        "Simplifier un radical contenant un produit ou une puissance : 1. Décomposer le nombre sous le radical en produit de facteurs contenant des carrés parfaits. 2. Appliquer la règle sqrt(a * b) = sqrt(a) * sqrt(b). 3. Extraire les carrés parfaits : sqrt(c^2 * k) = c * sqrt(k). 4. Pour une puissance sqrt(a^n), écrire (sqrt(a))^n et simplifier selon la parité de n.",
        "Calculer une augmentation ou une réduction en pourcentage : 1. Identifier la quantité de base a et le taux de variation k%. 2. Pour une augmentation, calculer le coefficient multiplicateur C = 1 + k/100 ; la nouvelle valeur est a * C. 3. Pour une réduction, calculer le coefficient multiplicateur C = 1 - k/100 ; la nouvelle valeur est a * C.",
        "Calculer un pourcentage d'un pourcentage (produit de pourcentages) : 1. Soit une première proportion a% d'un groupe, et une sous-proportion b% au sein de ce sous-groupe. 2. Multiplier la quantité globale par la fraction globale (a * b) / 10000. 3. Pour obtenir le taux en pourcentage de la population globale, calculer (a * b) / 100 %.",
        "Déterminer l'approximation décimale et l'arrondi d'ordre n d'un nombre : 1. Écrire le développement décimal du nombre avec au moins n+1 chiffres après la virgule. 2. L'approximation décimale d'ordre n par défaut est obtenue en tronquant le nombre après la n-ième décimale. 3. L'approximation décimale d'ordre n par excès est obtenue en ajoutant 10^(-n) à la valeur par défaut. 4. Pour l'arrondi d'ordre n : examiner le (n+1)-ième chiffre. Si ce chiffre est 0, 1, 2, 3 ou 4, l'arrondi est l'approximation par défaut ; s'il est 5, 6, 7, 8 ou 9, l'arrondi est l'approximation par excès."
      ]
    }
  ],
  runtimePolicy: {
    primarySource: "knowledge_base_local",
    apiRequired: false,
    apiRole: "fallback_only",
    resolutionOrder: [
      "detect_chapter",
      "retrieve_relevant_method_and_formula",
      "solve",
      "verify",
      "generate_explanation"
    ]
  }
} as const;

// Mots-clés normalisés pour le scoring textuel local
function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(word => word.length >= 3);
}

// Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné
export function findMaths2ndeAChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return maths2ndeAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = maths2ndeAKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 10;
      if (topicsTokens.includes(token)) score += 4;
      if (formulasTokens.includes(token)) score += 3;
      if (methodsTokens.includes(token)) score += 3;
    }

    return { chapter, score };
  });

  scoredChapters.sort((a, b) => b.score - a.score);

  const matched = scoredChapters
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.chapter as unknown as Chapter);

  return matched.length > 0
    ? matched
    : (maths2ndeAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

// Construit le contexte texte à donner au solveur (leçon + notions + formules + méthodes)
export function buildMaths2ndeAContext(query: string): string {
  const chapters = findMaths2ndeAChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Niveau : ${maths2ndeAKnowledgeBase.level})\nSource : ${maths2ndeAKnowledgeBase.source}`;
    const topics = `#### NOTIONS CLÉS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES ET THÉORÈMES APPLICABLES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES MÉTHODOLOGIQUES ÉTAPE PAR ÉTAPE :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE MATHÉMATIQUES SECONDE A (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
