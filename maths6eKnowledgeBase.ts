/**
 * BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES CLASSE DE SIXIÈME (6ème)
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - Côte d'Ivoire (École Numérique / CIAM)
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les 3 Grands Thèmes et l'ensemble des leçons fondamentales de 6ème :
 * 
 * THÈME 1 : CALCULS ALGÉBRIQUES / ACTIVITÉS NUMÉRIQUES
 * - Leçon 1 : Nombres entiers naturels (ensemble N, appartenance, entiers consécutifs, formule n - m + 1, multiples, pairs/impairs, diviseurs, critères de divisibilité par 2, 3, 5, 9, 10, 100, 1000)
 * - Leçon 3 : Nombres décimaux relatifs (ensembles Z et D, droite graduée, abscisse, distance à zéro, opposé, règles de comparaison, addition même signe / signes contraires)
 * - Leçon 6 : Fractions (définition a/b, fractions décimales, représentation sur droite graduée, fractions égales, simplification par critères, comparaison même dénominateur/numérateur/différents, comparaison à 1, addition de fractions, résolution de problèmes de partage)
 * - Leçon 9 : Proportionnalités (grandeurs proportionnelles, coefficient de proportionnalité, tableau de proportionnalité, méthode des quotients égaux, linéarité multiplicative et additive, pourcentages p%, échelles cartographiques, situations d'évaluation de la vie courante)
 * - Leçon 12 : Statistiques (recueil de données, effectifs, effectif total N, tableau des effectifs, fréquence f = n/N, fréquence en pourcentage f% = f * 100, diagrammes)
 * 
 * THÈME 2 : GÉOMÉTRIE DU PLAN & CONFIGURATIONS DU PLAN
 * - Leçon 2 : Droites et points (point A, droite (D), appartenance, points alignés, droites sécantes, demi-droite [AB), droites perpendiculaires (D) perp (H), droites parallèles (D) // (L), théorèmes et organigrammes)
 * - Leçon 4 : Segments (segment [AB], extrémités, longueur AB, comparaison au compas, milieu d'un segment, médiatrice d'un segment)
 * - Leçon 5 : Cercles et disques (cercle C(O, r), centre, rayon, diamètre d = 2r, cordes, disque D(O, r), formule du périmètre P = 2*pi*r = pi*d, formule de l'aire A = pi*r^2)
 * - Leçon 7 : Angles (angle BAC, sommet, côtés, mesure au rapporteur en degrés, angles particuliers : nul 0°, aigu ]0°, 90°[, droit 90°, obtus ]90°, 180°[, plat 180°, construction au rapporteur, reproduction au compas, bissectrice d'un angle)
 * - Leçon 8 : Triangles (sommets, côtés, construction aux 3 côtés au compas, droites remarquables : hauteur, médiane, médiatrice; triangles particuliers : rectangle & hypoténuse, isocèle & sommet principal/base, équilatéral; périmètre P = a+b+c, aire A = (b*h)/2)
 * - Leçon 11 : Figures symétriques par rapport à un point (symétrie centrale, définition O milieu de [AA'], conservation de l'alignement, longueurs, angles, parallélisme, orthogonalité, cercles; centre de symétrie)
 * - Leçon 11 (Config) : Parallélogramme (définition, côtés opposés parallèles et de même longueur, diagonales se coupant en leur milieu, périmètre P = 2(a+b), aire A = b*h)
 * 
 * THÈME 3 : CONFIGURATIONS DE L'ESPACE
 * - Leçon 12 : Pavés droits et Cylindres droits (pavé droit 6 faces rectangulaires, 8 sommets, 12 arêtes, aire latérale AL = 2(a+b)c, aire totale AT, volume V = a*b*c; cube V = a^3; cylindre droit à 2 bases disques, aire latérale AL = 2*pi*r*h, volume V = pi*r^2*h, patrons de pliage et situations concrètes d'emballage et de contenance)
 */

export interface Maths6eLesson {
  lessonNumber: number;
  themeId: string;
  themeTitle: string;
  chapterTitle: string;
  situationContext: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  formulasAndRules: Record<string, string>;
  methodsAndAlgorithms: {
    title: string;
    description: string;
    stepByStep: string[];
  }[];
  commonMistakesToAvoid: string[];
}

export interface Maths6eTheme {
  id: string;
  themeTitle: string;
  lessons: Maths6eLesson[];
}

export interface Maths6eKnowledgeBase {
  name: string;
  level: string;
  discipline: string;
  country: string;
  version: string;
  themes: Maths6eTheme[];
}

export const maths6eKnowledgeBase: Maths6eKnowledgeBase = {
  name: "Référentiel National Mathématiques 6ème",
  level: "6ème",
  discipline: "Mathématiques",
  country: "Côte d'Ivoire (École Numérique & Programmes CIAM)",
  version: "2024-2026 APC",
  themes: [
    {
      id: "theme_1_calculs_algebriques_numeriques",
      themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
      lessons: [
        {
          lessonNumber: 1,
          themeId: "theme_1_calculs_algebriques_numeriques",
          themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
          chapterTitle: "Leçon 1 : Nombres entiers naturels",
          situationContext: "YAO, élève en 6ème à Bondoukou, doit gérer une somme de 1890 F pour son goûter pendant 21 jours d'absence de son père et déterminer son budget journalier et les propriétés arithmétiques.",
          objectives: [
            "Reconnaître et noter l'ensemble des entiers naturels N",
            "Utiliser les symboles d'appartenance ∈ et ∉",
            "Identifier des entiers naturels consécutifs et calculer leur nombre par la formule (n - m + 1)",
            "Déterminer les multiples d'un entier naturel et distinguer nombres pairs et impairs",
            "Déterminer les diviseurs d'un entier naturel et écrire un ensemble en extension",
            "Appliquer les caractères de divisibilité par 2, 3, 5, 9, 10, 100, 1000"
          ],
          keyDefinitions: {
            "Ensemble N": "L'ensemble des nombres entiers naturels se note N = {0; 1; 2; 3; 4; ...}. On écrit 105 ∈ N et 3,5 ∉ N.",
            "Entiers consécutifs": "Entiers qui se suivent immédiatement de 1 en 1 (ex: 12, 13, 14).",
            "Multiple": "Un nombre a est multiple de b s'il existe un entier k tel que a = b * k. 0 est multiple de tout entier.",
            "Nombre pair / impair": "Un multiple de 2 est un nombre pair (se termine par 0, 2, 4, 6, 8). Sinon, il est impair (se termine par 1, 3, 5, 7, 9).",
            "Diviseur": "Dans la division euclidienne de a par b non nul, si le reste est 0, alors b est un diviseur de a (a est divisible par b).",
            "Écriture en extension": "Citer tous les éléments d'un ensemble entre accolades : ex E = {1; 2; 3; 4; 6; 12} pour les diviseurs de 12."
          },
          formulasAndRules: {
            "Nombre d'entiers consécutifs de m à n (m < n)": "Nombre = n - m + 1. Exemple : de 30 à 90 -> 90 - 30 + 1 = 61 entiers.",
            "Divisibilité par 2": "Le nombre se termine par 0, 2, 4, 6 ou 8.",
            "Divisibilité par 3": "La somme de ses chiffres est un multiple de 3 (ex: 783 -> 7+8+3 = 18 = 3*6).",
            "Divisibilité par 5": "Le nombre se termine par 0 ou 5.",
            "Divisibilité par 9": "La somme de ses chiffres est un multiple de 9 (ex: 783 -> 7+8+3 = 18 = 9*2).",
            "Divisibilité par 10 / 100 / 1000": "Se termine par 0 (pour 10), par 00 (pour 100), par 000 (pour 1000)."
          },
          methodsAndAlgorithms: [
            {
              title: "Détermination des diviseurs d'un nombre et écriture en extension",
              description: "Trouver tous les couples de facteurs dont le produit est le nombre",
              stepByStep: [
                "1. Tester les divisions successives par 1, 2, 3, 4, etc.",
                "2. Écrire les produits : 24 = 1*24 = 2*12 = 3*8 = 4*6.",
                "3. Ranger en ordre croissant dans l'ensemble : Div(24) = {1; 2; 3; 4; 6; 8; 12; 24}."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Pour compter de m à n, ne pas faire seulement (n - m), il faut impérativement ajouter 1 : (n - m + 1).",
            "0 n'est diviseur d'aucun nombre, mais 0 est multiple de tout nombre."
          ]
        },
        {
          lessonNumber: 3,
          themeId: "theme_1_calculs_algebriques_numeriques",
          themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
          chapterTitle: "Leçon 3 : Nombres décimaux relatifs",
          situationContext: "Yao et Louis jouent aux billes (gains et pertes) et comparent des températures négatives et positives relevées dans plusieurs villes du monde.",
          objectives: [
            "Identifier les entiers relatifs Z et décimaux relatifs D",
            "Repérer un point par son abscisse sur une droite graduée",
            "Définir la distance à zéro et l'opposé d'un nombre relatif",
            "Comparer deux nombres décimaux relatifs",
            "Effectuer l'addition de deux décimaux relatifs (de même signe ou de signes contraires)"
          ],
          keyDefinitions: {
            "Ensemble Z et D": "Z est l'ensemble des entiers relatifs {...; -3; -2; -1; 0; +1; +2; +3; ...}. D est l'ensemble des décimaux relatifs.",
            "Abscisse d'un point": "Nombre relatif qui repère la position d'un point sur une droite graduée par rapport à l'origine O (abscisse 0).",
            "Distance à zéro": "Distance géométrique positive séparant le point de l'origine O (ex: distance à zéro de -5 est 5, de +5 est 5).",
            "Nombres opposés": "Deux nombres ayant la même distance à zéro et des signes contraires (ex: +3,2 et -3,2 ; leur somme vaut 0)."
          },
          formulasAndRules: {
            "Règle de comparaison 1 (signes contraires)": "Tout nombre positif est supérieur à tout nombre négatif : (+2) > (-5).",
            "Règle de comparaison 2 (deux nombres positifs)": "Le plus grand est celui qui a la plus grande distance à zéro : (+5,23) > (+3,25).",
            "Règle de comparaison 3 (deux nombres négatifs)": "Le plus grand est celui qui a la plus petite distance à zéro : (-2) > (-20) car 2 < 20. De même (-9,7) < (-2,8).",
            "Addition de même signe": "On additionne leurs distances à zéro et on conserve le signe commun : (+10) + (+3) = +13 ; (-1) + (-22) = -23.",
            "Addition de signes contraires": "On soustrait la plus petite distance à zéro de la plus grande, et on affecte le signe de celui qui a la plus grande distance : (-30) + (+8) = -22 ; (+40) + (-6) = +34."
          },
          methodsAndAlgorithms: [
            {
              title: "Calcul de sommes algébriques successives",
              description: "Regrouper les termes positifs puis négatifs ou calculer de gauche à droite",
              stepByStep: [
                "1. Calculer étape par étape : A = (+5,3) + (-3,5) + (-6,7).",
                "2. Première somme : (+5,3) + (-3,5) = (+1,8).",
                "3. Deuxième somme : (+1,8) + (-6,7) = -4,9."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Pour comparer deux nombres négatifs, attention : -23,7 est PLUS PETIT que -9,7 (car 23,7 > 9,7).",
            "La somme de deux opposés est toujours égale à 0."
          ]
        },
        {
          lessonNumber: 6,
          themeId: "theme_1_calculs_algebriques_numeriques",
          themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
          chapterTitle: "Leçon 6 : Fractions",
          situationContext: "Partage équitable de bœufs entre frères héritiers, calcul des proportions de mangues intactes et vendues, et comparaison des taux de réussite d'établissements scolaires.",
          objectives: [
            "Définir une fraction a/b (a entier, b entier non nul) avec numérateur et dénominateur",
            "Identifier les fractions décimales (dénominateurs 10, 100, 1000...)",
            "Représenter une fraction sur une droite graduée",
            "Obtenir des fractions égales et simplifier une fraction",
            "Comparer des fractions (même dénominateur, même numérateur, ou dénominateurs différents par réduction)",
            "Comparer une fraction au nombre 1",
            "Additionner deux fractions et résoudre des problèmes de partage de la vie courante"
          ],
          keyDefinitions: {
            "Fraction": "Écriture a/b où a est le numérateur (entier naturel) et b est le dénominateur (entier naturel non nul).",
            "Fractions égales": "On obtient une fraction égale en multipliant ou divisant numérateur et dénominateur par un même entier non nul k : a/b = (a*k)/(b*k).",
            "Fraction irréductible": "Fraction simplifiée au maximum où le numérateur et le dénominateur n'ont plus de diviseur commun autre que 1."
          },
          formulasAndRules: {
            "Comparaison à 1": "- Si numérateur < dénominateur, la fraction est < 1 (ex: 3/4 < 1).\n- Si numérateur > dénominateur, la fraction est > 1 (ex: 9/5 > 1).\n- Si numérateur = dénominateur, la fraction est = 1 (ex: 2021/2021 = 1).",
            "Comparaison de fractions de même dénominateur": "La plus petite est celle qui a le plus petit numérateur (ex: 3/7 < 5/7 car 3 < 5).",
            "Comparaison de fractions de même numérateur": "La plus petite est celle qui a le plus grand dénominateur (ex: 3/7 < 3/4 car 7 > 4).",
            "Réduction au même dénominateur pour comparaison ou somme": "Pour a/b et c/d, dénominateur commun b*d : a/b = (a*d)/(b*d) et c/d = (c*b)/(d*b).",
            "Addition de même dénominateur": "a/c + b/c = (a + b)/c.",
            "Addition de dénominateurs différents": "a/b + c/d = (a*d + b*c) / (b*d)."
          },
          methodsAndAlgorithms: [
            {
              title: "Résolution de problèmes de proportion et partage de mangues/bœufs",
              description: "Calculer une fraction d'une quantité totale",
              stepByStep: [
                "1. Si 1/5 est écrasé, la fraction intacte est 1 - 1/5 = 4/5.",
                "2. Nombre de mangues intactes = 4/5 * 600 = (4 * 600) / 5 = 2400 / 5 = 480.",
                "3. Si les 3/4 (ou 2/3) sont vendus : Nb vendus = (3/4) * 480 = 360 mangues.",
                "4. Recette financière = 360 * 150 F = 54 000 FCFA."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne jamais additionner les dénominateurs entre eux : 3/5 + 8/5 = 11/5 et NON 11/10 !",
            "Pour réduire au même dénominateur, multiplier le numérateur ET le dénominateur par le même nombre."
          ]
        },
        {
          lessonNumber: 9,
          themeId: "theme_1_calculs_algebriques_numeriques",
          themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
          chapterTitle: "Leçon 9 : Proportionnalités",
          situationContext: "Calcul de pourcentages pour le conseil d'une coopérative (quota de 25% de femmes), commande de sucre pour le jus de Bissap au lycée, calcul d'échelles de plans et distances réelles.",
          objectives: [
            "Reconnaître deux grandeurs proportionnelles et déterminer le coefficient de proportionnalité",
            "Identifier et compléter un tableau de proportionnalité (méthode des quotients et propriétés de linéarité)",
            "Définir et calculer un pourcentage p% d'une grandeur (p% * N = (p/100) * N)",
            "Définir l'échelle d'un plan ou d'une carte (Échelle = Longueur dessin / Longueur réelle) et convertir les unités"
          ],
          keyDefinitions: {
            "Grandeurs proportionnelles": "Deux grandeurs dont les valeurs de l'une s'obtiennent en multipliant les valeurs correspondantes de l'autre par un nombre constant non nul k.",
            "Coefficient de proportionnalité": "Nombre k = y / x constant pour toutes les colonnes du tableau.",
            "Pourcentage p%": "Coefficient de proportionnalité écrit sous forme de fraction décimale de dénominateur 100 : p% = p/100 (ex: 43% = 0,43).",
            "Échelle": "Rapport constant entre une dimension sur le plan/carte et la dimension réelle correspondante, exprimées dans la même unité."
          },
          formulasAndRules: {
            "Propriétés de linéarité": "1. Multiplicative : on peut multiplier/diviser une colonne entière par un nombre k ;\n2. Additive : on peut additionner ou soustraire deux colonnes ligne par ligne pour obtenir une nouvelle colonne.",
            "Calcul de pourcentage": "Quantité = (p / 100) * Total. Exemple : 80% de 1465 élèves = (80 / 100) * 1465 = 1172 élèves.",
            "Formule de l'échelle": "Échelle = Distance sur la carte (cm) / Distance réelle (cm).\nDistance réelle = Distance carte / Échelle = Distance carte * Dénominateur de l'échelle."
          },
          methodsAndAlgorithms: [
            {
              title: "Calcul de distance réelle avec échelle",
              description: "Convertir la mesure de la carte vers la réalité",
              stepByStep: [
                "1. Si 5 cm représentent 20 km : convertir 20 km = 2 000 000 cm.",
                "2. Échelle = 5 / 2 000 000 = 1 / 400 000.",
                "3. Pour un fleuve de 8 cm sur la carte : Distance réelle = 8 * 400 000 cm = 3 200 000 cm = 32 km."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Attention aux unités dans les calculs d'échelle : toujours tout convertir dans la même unité (cm) avant de calculer le rapport.",
            "Dans un tableau de proportionnalité, vérifier que les quotients y/x sont strictement identiques pour toutes les colonnes."
          ]
        },
        {
          lessonNumber: 12,
          themeId: "theme_1_calculs_algebriques_numeriques",
          themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
          chapterTitle: "Leçon 12 : Statistiques",
          situationContext: "Organisation d'un buffet d'anniversaire par enquête sur les plats préférés (riz, attiéké, igname), dépouillement des notes de classe et enquête sur l'accès aux cours à distance.",
          objectives: [
            "Définir l'effectif d'une donnée et l'effectif total N",
            "Dresser et organiser un tableau des effectifs",
            "Calculer la fréquence d'une donnée f = effectif / N",
            "Calculer la fréquence en pourcentage f% = f * 100",
            "Compléter un tableau statistique à double entrée (filles/garçons par niveau)"
          ],
          keyDefinitions: {
            "Effectif d'une donnée": "Nombre de fois qu'une valeur ou modalité apparaît dans la série statistique.",
            "Effectif total": "Somme de tous les effectifs de toutes les modalités : N = n1 + n2 + ... + nk.",
            "Fréquence": "Quotient de l'effectif d'une modalité par l'effectif total : f = effectif / effectif total (nombre compris entre 0 et 1 ; la somme des fréquences vaut 1).",
            "Fréquence en pourcentage": "Fréquence multipliée par 100 : f(%) = (effectif / effectif total) * 100 (la somme des pourcentages vaut 100%)."
          },
          formulasAndRules: {
            "Formule de la fréquence": "f = n_i / N.",
            "Formule du pourcentage": "p_i = (n_i / N) * 100 %."
          },
          methodsAndAlgorithms: [
            {
              title: "Dépouillement et construction du tableau statistique",
              description: "Compter les occurrences et calculer effectifs, fréquences et pourcentages",
              stepByStep: [
                "1. Recenser toutes les valeurs distinctes (ex: notes de 7 à 15).",
                "2. Compter le nombre d'apparitions de chaque valeur (effectif n_i).",
                "3. Calculer l'effectif total N = somme des n_i.",
                "4. Diviser chaque n_i par N pour la fréquence f_i.",
                "5. Multiplier par 100 pour obtenir le pourcentage f_i(%)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Vérifier que la somme des effectifs égale bien l'effectif total N.",
            "La somme des fréquences décimales doit être égale à 1 (et la somme des pourcentages à 100%)."
          ]
        }
      ]
    },
    {
      id: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessons: [
        {
          lessonNumber: 2,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 2 : Droites et points",
          situationContext: "Conception du schéma d'une porte de jardin botanique avec tracés de droites perpendiculaires et parallèles.",
          objectives: [
            "Représenter un point et une droite (D)",
            "Utiliser les symboles d'appartenance A ∈ (D) et A ∉ (D)",
            "Caractériser des points alignés",
            "Connaître les propriétés fondamentales des droites passant par 1 ou 2 points",
            "Définir et noter une demi-droite [AB)",
            "Caractériser et construire des droites sécantes, perpendiculaires (⊥) et parallèles (//)"
          ],
          keyDefinitions: {
            "Point": "Représenté par une croix et noté par une lettre majuscule A.",
            "Droite": "Ligne rectiligne illimitée des deux côtés constituée d'une infinité de points. Notée (D) ou (AB).",
            "Points alignés": "Points qui appartiennent tous à une même droite.",
            "Demi-droite [AB)": "Portion de droite limitée d'un côté par son origine A et illimitée de l'autre passant par B.",
            "Droites sécantes": "Deux droites qui ont un seul point commun (point d'intersection).",
            "Droites perpendiculaires": "Deux droites sécantes qui forment un angle droit (noté (D) ⊥ (L)).",
            "Droites parallèles": "Deux droites perpendiculaires à une même droite (noté (D) // (L))."
          },
          formulasAndRules: {
            "Propriété 1 (2 points distincts)": "Par deux points distincts A et B, il passe une droite et une seule : la droite (AB).",
            "Propriété 2 (Perpendiculaire par un point)": "Par un point donné, il passe une seule droite perpendiculaire à une droite donnée.",
            "Propriété 3 (Parallèle par un point)": "Par un point n'appartenant pas à une droite donnée, il ne passe qu'une seule droite parallèle à cette droite.",
            "Théorème de transitivité du parallélisme": "Si deux droites sont parallèles à une même troisième, alors elles sont parallèles entre elles : (D1)//(D3) et (D2)//(D3) => (D1)//(D2).",
            "Théorème d'orthogonalité et parallélisme": "Si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre : (D1)//(D2) et (D3) ⊥ (D1) => (D3) ⊥ (D2)."
          },
          methodsAndAlgorithms: [
            {
              title: "Construction à la règle et à l'équerre d'une parallèle et d'une perpendiculaire",
              description: "Tracer une droite perpendiculaire puis une droite parallèle",
              stepByStep: [
                "1. Poser un côté de l'angle droit de l'équerre le long de la droite (D).",
                "2. Glisser jusqu'au point A pour tracer la perpendiculaire (H).",
                "3. Poser l'équerre sur (H) pour tracer la perpendiculaire à (H) passant par A : cette droite (L) est parallèle à (D)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre les notations : [AB] est un segment (fermé), (AB) est une droite (infinie), [AB) est une demi-droite d'origine A.",
            "Ne pas oublier de coder l'angle droit (petit carré) sur les schémas."
          ]
        },
        {
          lessonNumber: 4,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 4 : Segments",
          situationContext: "Implantation d'une école primaire ou d'un dispensaire à égale distance de deux villages A et B distants de 6 ou 8 km.",
          objectives: [
            "Définir et noter un segment [AB] et ses extrémités",
            "Mesurer la longueur d'un segment AB à la règle graduée et coder l'égalité de longueurs",
            "Définir et construire le milieu I d'un segment (I ∈ [AB] et AI = IB)",
            "Définir et construire la médiatrice d'un segment à la règle et à l'équerre ou au compas"
          ],
          keyDefinitions: {
            "Segment [AB]": "Portion de droite comprise entre les points A et B (appelés extrémités du segment). La droite (AB) est son support.",
            "Longueur AB": "Distance mesurée entre les extrémités A et B (notée sans crochets AB = 6 cm).",
            "Milieu d'un segment": "Point I du segment [AB] situé à égale distance des extrémités : I ∈ [AB] et AI = IB.",
            "Médiatrice d'un segment": "Droite perpendiculaire au segment passant par son milieu."
          },
          formulasAndRules: {
            "Propriété de la médiatrice": "Tout point situé sur la médiatrice d'un segment [AB] est à égale distance des extrémités A et B (MA = MB). Réciproquement, tout point équidistant de A et B appartient à la médiatrice."
          },
          methodsAndAlgorithms: [
            {
              title: "Construction de la médiatrice au compas",
              description: "Tracer la médiatrice sans mesurer",
              stepByStep: [
                "1. Prendre un écartement de compas supérieur à la moitié du segment [AB].",
                "2. Tracer un arc de cercle de centre A de chaque côté du segment.",
                "3. Avec le même écartement, tracer deux arcs de cercle de centre B qui coupent les premiers arcs en deux points.",
                "4. Tracer à la règle la droite passant par ces deux intersections : c'est la médiatrice de [AB]."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre la notation du segment [AB] (entre crochets) et sa longueur AB (sans crochets).",
            "Le milieu doit obligatoirement être un point du segment (I ∈ [AB])."
          ]
        },
        {
          lessonNumber: 5,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 5 : Cercles et disques",
          situationContext: "Calcul de la surface d'herbe broutée par un mouton attaché à un piquet par une corde de 4 m et calcul du grillage nécessaire pour clôturer une ferme circulaire de rayon 5 m.",
          objectives: [
            "Définir un cercle C(O, r) et un disque D(O, r)",
            "Identifier centre, rayon, diamètre (d = 2r) et corde",
            "Caractériser un point du cercle (M ∈ C(O, r) <=> OM = r)",
            "Calculer le périmètre d'un cercle (P = 2*pi*r = pi*d)",
            "Calculer l'aire d'un disque (A = pi*r^2)"
          ],
          keyDefinitions: {
            "Cercle C(O, r)": "Ensemble des points du plan situés à une même distance r (rayon) d'un point fixe O (centre).",
            "Disque D(O, r)": "Surface plane délimitée par le cercle C(O, r) et qui contient son centre O (ensemble des points M tels que OM <= r).",
            "Diamètre": "Segment joignant deux points du cercle et passant par le centre (longueur d = 2*r).",
            "Corde": "Segment reliant deux points quelconques du cercle."
          },
          formulasAndRules: {
            "Périmètre d'un cercle": "P = 2 * pi * r = pi * d (prendre pi ≈ 3,14 ou 3,1 ou 3 selon l'énoncé).",
            "Aire d'un disque": "A = pi * r * r = pi * r^2.",
            "Exemple de calcul de périmètre": "Pour r = 5 cm et pi = 3,14 -> P = 2 * 3,14 * 5 = 31,4 cm.",
            "Exemple de calcul d'aire": "Pour r = 5 cm et pi = 3,14 -> A = 3,14 * 5 * 5 = 78,5 cm²."
          },
          methodsAndAlgorithms: [
            {
              title: "Résolution de problème de clôture circulaire avec ouverture",
              description: "Calculer la longueur réelle de grillage nécessaire",
              stepByStep: [
                "1. Calculer le périmètre total de la ferme : P = 2 * pi * r = 2 * 3,1 * 5 = 31 m.",
                "2. Soustraire la largeur de la porte (ex: 1,5 m) : Longueur de clôture = P - 1,5 m = 31 - 1,5 = 29,5 m.",
                "3. Comparer au rouleau disponible (30 m) : 29,5 m < 30 m donc le rouleau suffit largement."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre le rayon r et le diamètre d (d = 2*r). Si l'on donne le diamètre 10 cm, le rayon est 5 cm !",
            "Ne pas confondre formule du périmètre (2*pi*r) et formule de l'aire (pi*r*r)."
          ]
        },
        {
          lessonNumber: 7,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 7 : Angles",
          situationContext: "Angles de tir au but au football, lecture d'angles de navigation de bateaux et tracé de bissectrices pour partager des angles.",
          objectives: [
            "Définir et noter un angle BAC, son sommet et ses côtés [AB) et [AC)",
            "Mesurer un angle en degrés (°) avec un rapporteur",
            "Classer les angles particuliers (nul 0°, aigu ]0°, 90°[, droit 90°, obtus ]90°, 180°[, plat 180°)",
            "Construire un angle de mesure donnée et reproduire un angle au compas",
            "Définir et construire la bissectrice d'un angle"
          ],
          keyDefinitions: {
            "Angle": "Figure géométrique formée par deux demi-droites de même origine [AB) et [AC). Noté BAC chapeau.",
            "Sommet": "Le point d'origine commun A.",
            "Côtés": "Les deux demi-droites [AB) et [AC).",
            "Angle nul": "Angle de mesure 0° (les deux côtés sont confondus).",
            "Angle aigu": "Angle dont la mesure est strictement comprise entre 0° et 90°.",
            "Angle droit": "Angle dont la mesure est égale à 90° (les côtés ont des supports perpendiculaires).",
            "Angle obtus": "Angle dont la mesure est strictement comprise entre 90° et 180°.",
            "Angle plat": "Angle de mesure 180° (les deux demi-droites sont opposées).",
            "Bissectrice d'un angle": "Demi-droite qui passe par le sommet de l'angle et le partage en deux angles adjacents de même mesure."
          },
          formulasAndRules: {
            "Mesure de la bissectrice": "Si la demi-droite [AE) est la bissectrice de BAC, alors mes(BAE) = mes(EAC) = mes(BAC) / 2."
          },
          methodsAndAlgorithms: [
            {
              title: "Construction de la bissectrice au compas",
              description: "Partager un angle en 2 angles égaux",
              stepByStep: [
                "1. Piquer le compas sur le sommet A et tracer un arc coupant les deux côtés en B et C.",
                "2. Piquer en B et tracer un arc à l'intérieur de l'angle.",
                "3. Avec le même écartement, piquer en C et tracer un arc coupant le précédent en E.",
                "4. Tracer la demi-droite [AE) : c'est la bissectrice de l'angle BAC."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Bien aligner le centre (réticule) du rapporteur sur le sommet de l'angle et le 0° sur l'un des côtés.",
            "Ne pas confondre la lecture sur l'échelle intérieure et l'échelle extérieure du rapporteur."
          ]
        },
        {
          lessonNumber: 8,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 8 : Triangles",
          situationContext: "Étude des motifs géométriques d'une nappe en tissu, tracé de la lunule sur un ongle humain et calcul de dimensions d'espaces triangulaires.",
          objectives: [
            "Définir un triangle ABC, ses sommets, ses côtés et côtés opposés",
            "Construire un triangle connaissant les longueurs de ses 3 côtés au compas",
            "Identifier et construire les droites remarquables : hauteur, médiane, médiatrice",
            "Caractériser les triangles particuliers : triangle rectangle, isocèle, équilatéral",
            "Calculer le périmètre P = a + b + c et l'aire A = (base * hauteur) / 2"
          ],
          keyDefinitions: {
            "Triangle": "Polygone à trois côtés formé par trois points non alignés A, B et C.",
            "Hauteur d'un triangle": "Droite passant par un sommet et perpendiculaire au support du côté opposé.",
            "Médiane d'un triangle": "Droite passant par un sommet et par le milieu du côté opposé.",
            "Médiatrice d'un triangle": "Médiatrice de l'un de ses côtés (perpendiculaire au milieu du côté).",
            "Triangle rectangle": "Triangle ayant un angle droit (deux côtés perpendiculaires). Le côté opposé à l'angle droit est l'hypoténuse.",
            "Triangle isocèle": "Triangle ayant deux côtés de même longueur. Le point commun est le sommet principal, le 3e côté est la base.",
            "Triangle équilatéral": "Triangle ayant ses trois côtés de même longueur (ses trois angles mesurent 60°)."
          },
          formulasAndRules: {
            "Périmètre d'un triangle": "P = a + b + c.",
            "Aire d'un triangle": "A = (b * h) / 2 (où b est la longueur de la base et h la hauteur relative correspondante).",
            "Exemple de calcul d'aire": "Si base BC = 7 cm et hauteur AH = 4 cm -> A = (7 * 4) / 2 = 28 / 2 = 14 cm²."
          },
          methodsAndAlgorithms: [
            {
              title: "Construction d'un triangle ABC de côtés donnés (ex: AB=4, AC=3, BC=6)",
              description: "Tracé rigoureux à la règle et au compas",
              stepByStep: [
                "1. Tracer le segment de base [BC] de longueur 6 cm à la règle graduée.",
                "2. Ouvrir le compas à 4 cm, piquer en B et tracer un arc de cercle.",
                "3. Ouvrir le compas à 3 cm, piquer en C et tracer un arc coupant le premier en A.",
                "4. Relier A à B et A à C pour former le triangle ABC."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre hauteur (perpendiculaire) et médiane (passe par le milieu).",
            "Ne pas oublier de diviser par 2 dans la formule de l'aire du triangle : A = (b * h) / 2."
          ]
        },
        {
          lessonNumber: 10,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 11 : Figures symétriques par rapport à un point (Symétrie centrale)",
          situationContext: "Positionnement symétrique de villages et de gares routières à Katiola / Foronan et étude des propriétés de conservation géométrique.",
          objectives: [
            "Définir le symétrique d'un point A par rapport à un point O (O est le milieu de [AA'])",
            "Construire le symétrique d'un point, d'une droite, d'un segment, d'un angle, d'un cercle",
            "Appliquer les propriétés de conservation de la symétrie centrale (alignement, longueurs, angles, parallélisme, perpendicularité)",
            "Identifier le centre de symétrie d'un segment, d'un cercle et d'un parallélogramme"
          ],
          keyDefinitions: {
            "Symétrique d'un point": "Le point A' est le symétrique de A par rapport à O si et seulement si O est le milieu du segment [AA'].",
            "Centre de symétrie": "Un point O est centre de symétrie d'une figure si la figure est son propre symétrique par rapport à O."
          },
          formulasAndRules: {
            "Propriétés de conservation de la symétrie centrale": "1. Le symétrique d'une droite (D) est une droite (D') qui lui est parallèle ;\n2. Le symétrique d'un segment [AB] est un segment [A'B'] de même longueur (AB = A'B') ;\n3. Le symétrique d'un angle est un angle de même mesure ;\n4. Le symétrique d'un cercle de rayon r est un cercle de même rayon r ;\n5. Le symétrique de deux droites perpendiculaires sont deux droites perpendiculaires ;\n6. Le centre de symétrie d'un segment est son milieu ; le centre de symétrie d'un cercle est son centre ; le centre de symétrie d'un parallélogramme est le point d'intersection de ses diagonales."
          },
          methodsAndAlgorithms: [
            {
              title: "Construction du symétrique d'un point A par rapport à O",
              description: "Tracé à la règle et au compas",
              stepByStep: [
                "1. Tracer la demi-droite [AO).",
                "2. Reporter la distance AO de l'autre côté de O sur la demi-droite pour placer A' tel que OA' = OA.",
                "3. O est ainsi le milieu de [AA']."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Le symétrique d'une droite par rapport à un point est TOUJOURS une droite parallèle.",
            "O est son propre symétrique par rapport à O."
          ]
        },
        {
          lessonNumber: 11,
          themeId: "theme_2_geometrie_plan_configurations",
          themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
          chapterTitle: "Leçon 11 (Configurations) : Parallélogramme",
          situationContext: "Étude des motifs de pagnes KITA au Lycée Moderne HKB de Daoukro et aménagement de parcelles scolaires et de gazon.",
          objectives: [
            "Définir un quadrilatère et un parallélogramme",
            "Caractériser un parallélogramme par ses côtés opposés et par ses diagonales",
            "Construire un parallélogramme à la règle et à l'équerre ou au compas",
            "Calculer le périmètre P = 2 * (a + b) et l'aire A = b * h d'un parallélogramme"
          ],
          keyDefinitions: {
            "Quadrilatère": "Figure fermée à 4 côtés, 4 sommets et 2 diagonales.",
            "Parallélogramme": "Quadrilatère dont les côtés opposés ont des supports parallèles : (AB)//(CD) et (AD)//(BC)."
          },
          formulasAndRules: {
            "Propriété des côtés opposés": "Un quadrilatère est un parallélogramme <=> ses côtés opposés ont la même longueur deux à deux (AB = CD et AD = BC).",
            "Propriété des diagonales": "Un quadrilatère est un parallélogramme <=> ses diagonales se coupent en leur milieu.",
            "Périmètre d'un parallélogramme": "P = 2 * (a + b) (où a et b sont les longueurs des côtés consécutifs).",
            "Aire d'un parallélogramme": "A = b * h (où b est la longueur d'un côté et h la hauteur relative correspondante)."
          },
          methodsAndAlgorithms: [
            {
              title: "Calcul de l'aire d'un terrain en parallélogramme",
              description: "Application de la formule A = base * hauteur",
              stepByStep: [
                "1. Identifier la base b (ex: côté GA = 10 m).",
                "2. Identifier la hauteur perpendiculaire h (ex: h = 4,5 m).",
                "3. Calculer l'aire A = 10 * 4,5 = 45 m².",
                "4. Pour le coût : Multiplier l'aire par le prix unitaire au m²."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Attention : pour l'aire du parallélogramme, on ne divise PAS par 2 : A = b * h (contrairement au triangle).",
            "La hauteur doit être perpendiculaire à la base choisie."
          ]
        }
      ]
    },
    {
      id: "theme_3_configurations_espace",
      themeTitle: "Thème 3 : Configurations de l'espace",
      lessons: [
        {
          lessonNumber: 12,
          themeId: "theme_3_configurations_espace",
          themeTitle: "Thème 3 : Configurations de l'espace",
          chapterTitle: "Leçon 12 : Pavés droits et Cylindres droits",
          situationContext: "Rangement de 160 livres de forme pavé droit dans des cartons au Lycée Moderne de Bondoukou et calcul de contenance de bidons et citernes d'eau SODECI.",
          objectives: [
            "Décrire un pavé droit (parallélépipède rectangle) : 6 faces rectangulaires, 8 sommets, 12 arêtes dont 4 hauteurs",
            "Décrire un cube (pavé droit à 6 faces carrées égales)",
            "Décrire un cylindre droit : 2 bases disques parallèles et superposables, axe, hauteur",
            "Calculer les aires latérales, aires totales et volumes du pavé droit, du cube et du cylindre droit",
            "Reconnaître et construire les patrons de ces solides"
          ],
          keyDefinitions: {
            "Pavé droit": "Solide ayant 6 faces rectangulaires (2 bases et 4 faces latérales), 8 sommets et 12 arêtes.",
            "Cube": "Pavé droit particulier dont les 12 arêtes ont la même longueur a (6 faces carrées superposables).",
            "Cylindre droit": "Solide ayant deux bases circulaires parallèles et superposables et une surface latérale courbe.",
            "Patron d'un solide": "Figure plane d'un seul tenant qui, par pliage convenable, permet de reconstituer le solide."
          },
          formulasAndRules: {
            "Pavé droit (dimensions a, b, c)": "- Aire latérale AL = 2*(a*c) + 2*(b*c) = 2*(a+b)*c ;\n- Aire totale AT = AL + 2*(a*b) ;\n- Volume V = a * b * c.",
            "Cube d'arête a": "- Aire latérale AL = 4 * a^2 ;\n- Aire totale AT = 6 * a^2 ;\n- Volume V = a * a * a = a^3.",
            "Cylindre droit (rayon r, hauteur h)": "- Aire de base AB = pi * r^2 ;\n- Aire latérale AL = 2 * pi * r * h ;\n- Aire totale AT = 2 * AB + AL ;\n- Volume V = pi * r^2 * h.",
            "Correspondance volumes et capacités": "1 dm³ = 1 L ; 1 m³ = 1 000 dm³ = 1 000 L ; 1 cm³ = 1 mL."
          },
          methodsAndAlgorithms: [
            {
              title: "Résolution de problème de rangement de livres dans des cartons",
              description: "Comparer le volume total d'objets au volume disponible",
              stepByStep: [
                "1. Calculer le volume d'un livre (ex: 15 cm * 24 cm * 3 cm = 1 080 cm³).",
                "2. Calculer le volume total de 160 livres = 1 080 * 160 = 172 800 cm³.",
                "3. Convertir en dm³ : 172 800 cm³ = 172,8 dm³.",
                "4. Calculer le volume des 7 cartons de 27 dm³ chacun : V_cartons = 7 * 27 = 189 dm³.",
                "5. Comparer : 172,8 dm³ < 189 dm³, donc le nombre de cartons est suffisant."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Attention aux conversions d'unités de volume : 1 dm³ = 1 000 cm³ (trois rangs par unité).",
            "Pour le patron du cylindre droit, la longueur du rectangle latéral doit être exactement égale au périmètre du cercle de base (L = 2*pi*r)."
          ]
        }
      ]
    }
  ]
};

export const MATHS_6E_CURRICULUM = maths6eKnowledgeBase.themes.flatMap(t =>
  t.lessons.map(l => ({
    themeId: t.id,
    themeTitle: t.themeTitle,
    lessonNumber: l.lessonNumber,
    lessonTitle: l.chapterTitle,
    objectives: l.objectives,
    keyDefinitions: l.keyDefinitions,
    formulasAndRules: l.formulasAndRules,
    methodsAndAlgorithms: l.methodsAndAlgorithms,
    commonMistakesToAvoid: l.commonMistakesToAvoid,
  }))
);
