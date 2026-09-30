import { OfficialIvorianCourse } from '../../types';

export const LYCEE_PHYSIQUE_CHIMIE_TLE_RENFORCE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. CHIMIE TERMINALE C & D : CINÉTIQUE CHIMIQUE
  // =========================================================================
  {
    id: 'pc-tle-cinetique-chimique',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Terminale C, D)',
    level: 'terminale',
    levelLabel: 'Terminale C & D (Bac Scientifique)',
    serie: 'tle_c',
    serieLabel: 'Terminale C & D',
    chapter: 'Chimie : Cinétique Chimique & Vitesse de Réaction',
    lessonTitle: 'Vitesse de disparition, vitesse volumique, temps de demi-réaction et facteurs cinétiques',
    objectifs: [
      'Définir la vitesse volumique de disparition d\'un réactif et de formation d\'un produit',
      'Déterminer graphiquement la vitesse volumique à une date t donnée à partir de la tangente à la courbe de concentration ou d\'avancement',
      'Définir et déterminer graphiquement le temps de demi-réaction t_1/2',
      'Identifier et expliquer les facteurs cinétiques : concentration initiale des réactifs, température, présence d\'un catalyseur',
      'Distinguer catalyse homogène, hétérogène et enzymatique selon le programme DPFC/MENA'
    ],
    fullCourseContent: `I. VITESSE VOLUMIQUE D'UNE RÉACTION :
1. Équation de réaction générale : a A + b B → c C + d D
2. Vitesse volumique de disparition d'un réactif A :
v_disp(A) = - (1/V) * (d n_A / dt) = - d[A] / dt
3. Vitesse volumique de formation d'un produit C :
v_form(C) = (1/V) * (d n_C / dt) = d[C] / dt
4. Vitesse volumique de réaction v(t) :
v(t) = (1/V) * (dx / dt) où x est l'avancement de la réaction.
5. Détermination graphique :
La vitesse volumique à un instant t correspond au coefficient directeur (pente) de la tangente à la courbe d'avancement x(t) divisé par le volume V, ou à l'opposé du coefficient directeur de la tangente à la courbe [A] = f(t).

II. ÉVOLUTION TEMPORELLE ET TEMPS DE DEMI-RÉACTION :
1. Définition du temps de demi-réaction (t_1/2) :
C'est la durée au bout de laquelle l'avancement de la réaction atteint la moitié de sa valeur finale : x(t_1/2) = x_f / 2.
Si la réaction est totale avec le réactif limitant A : [A](t_1/2) = [A]_0 / 2.
2. Décroissance de la vitesse au cours du temps :
Au fur et à mesure que la réaction progresse, la concentration des réactifs diminue, ce qui entraîne une diminution de la fréquence des chocs efficaces entre molécules : la vitesse diminue et s'annule lorsque l'état final est atteint.

III. LES FACTEURS CINÉTIQUES :
1. La concentration des réactifs :
Plus la concentration initiale des réactifs est élevée, plus le nombre de chocs efficaces par seconde est grand, plus la réaction est rapide.
2. La température :
L'augmentation de la température accroît l'agitation thermique et l'énergie cinétique des molécules, ce qui augmente la fréquence et l'efficacité des chocs (trempe thermique : refroidissement brutal pour stopper la réaction).
3. Les catalyseurs :
Substance qui accélère une réaction chimique spontanée sans être consommée dans le bilan global.
- Catalyse homogène : réactifs et catalyseur dans la même phase (ex: ions Fe2+ en milieu aqueux).
- Catalyse hétérogène : catalyseur dans une phase différente (ex: platine solide Pt pour gaz).
- Catalyse enzymatique : assurée par des protéines biologiques hautement spécifiques.`,
    definitions: [
      { term: 'Vitesse volumique de réaction', definition: 'Dérivée par rapport au temps de l\'avancement x de la réaction divisée par le volume V du mélange réactionnel : v = (1/V) * (dx/dt).' },
      { term: 'Temps de demi-réaction (t_1/2)', definition: 'Durée nécessaire pour que l\'avancement atteigne la moitié de sa valeur maximale ou finale (x = x_max / 2).' },
      { term: 'Facteur cinétique', definition: 'Paramètre physique ou chimique modifiant la vitesse d\'une transformation chimique (température, concentration, catalyseur).' },
      { term: 'Trempe chimique', definition: 'Refroidissement brutal ou dilution massive du mélange réactionnel pour figer la réaction à un instant précis afin de doser un réactif.' }
    ],
    propertiesAndRules: [
      { name: 'Évolution de la vitesse', statement: 'La vitesse volumique d\'une réaction chimique est maximale à la date t = 0 et décroît continuellement au cours du temps.' },
      { name: 'Règle de détermination du t_1/2', statement: 'Sur le graphe x(t), repérer x_max / 2 sur l\'axe des ordonnées, puis lire par projection horizontale puis verticale la date t_1/2 correspondante sur l\'axe des abscisses.' }
    ],
    formulas: [
      { name: 'Vitesse de disparition d\'un réactif', formula: 'v_disp(R) = - d[R]/dt (en mol·L⁻¹·s⁻¹ ou mol·L⁻¹·min⁻¹)', explanation: 'Opposé de la dérivée de la concentration par rapport au temps.' },
      { name: 'Vitesse volumique de réaction', formula: 'v(t) = (1/V) * (dx/dt)', explanation: 'V est le volume de la solution en litres (L) et x l\'avancement en moles (mol).' },
      { name: 'Temps de demi-réaction', formula: 'x(t_{1/2}) = \\frac{x_f}{2}', explanation: 'Permet d\'évaluer la rapidité relative d\'une réaction.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tracer la tangente et calculer la vitesse volumique',
        procedure: '1. Tracer soigneusement la tangente à la courbe [A] = f(t) au point d\'abscisse t demandé. 2. Choisir deux points bien distincts et lisibles sur cette droite tangente : (t1, [A]1) et (t2, [A]2). 3. Calculer la pente p = ([A]2 - [A]1) / (t2 - t1). 4. La vitesse de disparition est v_disp = -p.',
        tip: 'Attention aux unités sur les axes (minutes en secondes, millimoles en moles !).'
      },
      {
        stepNumber: 2,
        title: 'Exploiter le temps de demi-réaction',
        procedure: 'Calculer la valeur x_f / 2. Tracer un trait horizontal jusqu\'à la courbe, puis descendre verticalement pour lire t_1/2 sur l\'axe des temps.',
        tip: 'Pour une réaction totale avec un seul réactif A, [A](t_1/2) = [A]_0 / 2.'
      }
    ],
    examples: [
      {
        statement: 'Dans une réaction d\'oxydation des ions iodure I⁻ par l\'eau oxygénée H₂O₂, la concentration en diiode I₂ formé évolue. À t = 10 min, les coordonnées de deux points de la tangente à la courbe [I₂] = f(t) sont (0 min, 2 mmol/L) et (20 min, 14 mmol/L). Calculer la vitesse volumique de formation du diiode à t = 10 min.',
        solution: 'Vitesse v_form(I₂) = d[I₂]/dt = pente de la tangente = (14 - 2) / (20 - 0) = 12 / 20 = 0,60 mmol·L⁻¹·min⁻¹ = 0,60 × 10⁻³ / 60 mol·L⁻¹·s⁻¹ = 1,0 × 10⁻⁵ mol·L⁻¹·s⁻¹.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi place-t-on les béchers dans de l\'eau glacée juste avant de procéder à un dosage manganimétrique lors d\'un suivi cinétique ?',
        correction: 'Placer le mélange dans l\'eau glacée constitue une trempe thermique. Le refroidissement brutal abaisse considérablement la température (facteur cinétique), ce qui bloque quasi instantanément la réaction et permet de doser la concentration exacte à la date du prélèvement sans qu\'elle ne continue d\'évoluer pendant la manipulation.'
      }
    ],
    examTraps: [
      'Oublier le signe moins (-) dans l\'expression de la vitesse de disparition : une vitesse est toujours positive !',
      'Confondre vitesse instantanée (pente de la tangente à la date t) et vitesse moyenne (pente de la sécante entre t1 et t2).',
      'Oublier de convertir les minutes en secondes si l\'unité demandée est en mol·L⁻¹·s⁻¹.'
    ],
    quickMemo: 'Cinétique Chimique : Vitesse volumique v = (1/V)·(dx/dt). Facteurs cinétiques accélérateurs : température élevée, concentrations initiales élevées, présence d\'un catalyseur. Temps t_1/2 : date pour laquelle x = x_f / 2.',
    keywords: ['Cinétique chimique', 'Vitesse volumique', 'Avancement', 'Facteurs cinétiques', 'Temps de demi-réaction', 'Catalyseur', 'Tangente', 'Trempe']
  },

  // =========================================================================
  // 2. CHIMIE TERMINALE C & D : DOSAGE ACIDO-BASIQUE & SOLUTIONS TAMPONS
  // =========================================================================
  {
    id: 'pc-tle-dosage-acido-basique-tampon',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Terminale C, D)',
    level: 'terminale',
    levelLabel: 'Terminale C & D (Bac Scientifique)',
    serie: 'tle_c',
    serieLabel: 'Terminale C & D',
    chapter: 'Chimie : Réactions Acido-Basiques & Dosages pH-métriques',
    lessonTitle: 'Constante d\'acidité Ka, courbe de neutralisation, équivalence, demi-équivalence et solution tampon',
    objectifs: [
      'Définir le pH, le produit ionique de l\'eau Ke, la constante d\'acidité Ka et le pKa d\'un couple acide/base',
      'Établir la relation d\'Henderson-Hasselbalch : pH = pKa + log([Base]/[Acide])',
      'Identifier les caractéristiques d\'une courbe de dosage : dosage fort/fort vs dosage faible/fort',
      'Déterminer le point d\'équivalence E par la méthode des tangentes parallèles et la méthode de la dérivée dpH/dV',
      'Exploiter le point de demi-équivalence pour déterminer le pKa d\'un acide faible',
      'Définir une solution tampon, ses propriétés et son importance biologique et industrielle'
    ],
    fullCourseContent: `I. COUPLES ACIDE/BASE ET CONSTANTE D'ACIDITÉ :
1. Définition selon Brönsted :
- Un acide est une espèce chimique capable de céder au moins un proton H+.
- Une base est une espèce chimique capable de capter au moins un proton H+.
2. Produit ionique de l'eau :
Ke = [H3O+] * [OH-] = 1,0 × 10⁻¹⁴ à 25 °C. pKe = -log(Ke) = 14.
3. Constante d'acidité Ka et pKa :
Pour le couple AH / A- : AH + H2O ⇄ A- + H3O+
Ka = ([A-] * [H3O+]) / [AH]
pKa = -log(Ka)  d'où  pH = pKa + log([A-] / [AH])
- Si pH < pKa : [AH] > [A-] (l'acide prédomine).
- Si pH = pKa : [AH] = [A-] (les deux espèces sont en concentrations égales).
- Si pH > pKa : [A-] > [AH] (la base conjuguée prédomine).

II. DOSAGE ACIDO-BASIQUE :
1. Définition de l'équivalence acido-basique :
L'équivalence est atteinte lorsque les réactifs titrant et titré ont été mélangés dans les proportions stoechiométriques de l'équation de dosage :
n(acide introduit) = n(base versée)  =>  C_A * V_A = C_B * V_BE.
2. Allure de la courbe de dosage pH = f(V_B) :
- Dosage d'un acide fort par une base forte :
  * pH initial très acide : pH_0 = -log(C_A).
  * Courbe avec une seule concavité avant le saut, puis changement de courbure.
  * Au point d'équivalence : pH_E = 7,0 à 25 °C (solution neutre de chlorure de sodium par exemple).
- Dosage d'un acide faible par une base forte :
  * pH initial modéré : pH_0 = 1/2 (pKa - log C_A).
  * Présence d'un point d'inflexion avant l'équivalence : le point de demi-équivalence pour V_B = V_BE / 2.
  * À la demi-équivalence : pH = pKa du couple, et la solution présente un pouvoir tampon maximal.
  * Au point d'équivalence : pH_E > 7 (la solution contient la base conjuguée A-, milieu basique).
3. Choix de l'indicateur coloré :
Pour être adapté à un dosage colorimétrique, la zone de virage de l'indicateur coloré doit contenir impérativement le pH au point d'équivalence (pH_E).

III. SOLUTIONS TAMPONS :
Une solution tampon est une solution dont le pH varie très peu lors d'une addition modérée d'acide fort ou de base forte, ou lors d'une dilution modérée.
Préparation : mélange équimolaire d'un acide faible et de sa base conjuguée (ex: CH3COOH et CH3COONa).`,
    definitions: [
      { term: 'Équivalence acido-basique', definition: 'État du système chimique où les quantités de matière d\'acide et de base ont été mélangées dans les proportions stoechiométriques (C_A·V_A = C_B·V_BE).' },
      { term: 'Demi-équivalence', definition: 'Point de la courbe de titrage d\'un acide faible où la moitié du volume de base équivalent a été versée (V = V_E / 2), conférant à la solution la propriété pH = pKa.' },
      { term: 'Solution tampon', definition: 'Solution maintenant un pH quasiment constant lors de l\'ajout modéré d\'acide, de base, ou lors d\'une dilution.' },
      { term: 'Zone de virage', definition: 'Intervalle de pH dans lequel l\'indicateur coloré change de teinte entre sa forme acide et sa forme basique.' }
    ],
    propertiesAndRules: [
      { name: 'Propriété de la demi-équivalence', statement: 'Pour le titrage d\'un acide faible par une base forte, à V_B = V_BE / 2, la concentration de l\'acide faible restant est égale à celle de sa base conjuguée formée ([AH] = [A⁻]), donc pH = pKa.' },
      { name: 'Critère de choix de l\'indicateur coloré', statement: 'Un indicateur coloré convient pour un titrage si et seulement si son intervalle de virage (pKi - 1 ; pKi + 1) contient le pH du point d\'équivalence E.' }
    ],
    formulas: [
      { name: 'Relation d\'Henderson-Hasselbalch', formula: 'pH = pKa + \\log\\left(\\frac{[A^-]}{[AH]}\\right)', explanation: 'Lie le pH aux concentrations des espèces conjuguées.' },
      { name: 'Équation à l\'équivalence', formula: 'C_A \\cdot V_A = C_B \\cdot V_{BE}', explanation: 'Permet de calculer la concentration inconnue C_A.' },
      { name: 'pH d\'un acide faible', formula: 'pH \\approx \\frac{1}{2}(pKa - \\log C_A)', explanation: 'Valable si l\'acide est faiblement dissocié (taux de dissociation < 5%).' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer le volume équivalent par la méthode des tangentes',
        procedure: '1. Tracer deux tangentes parallèles à la courbe de dosage de part et d\'autre du saut de pH. 2. Tracer la droite équidistante et perpendiculaire à ces deux tangentes. 3. Le point d\'intersection de cette droite avec la courbe pH(V) donne le point d\'équivalence E (V_BE, pH_E).',
        tip: 'Vérifier la précision avec un double décimètre et une équerre.'
      },
      {
        stepNumber: 2,
        title: 'Déterminer la concentration molaire inconnue C_A',
        procedure: 'À l\'équivalence : n_A = n_B_versé => C_A * V_A = C_B * V_BE, d\'où C_A = (C_B * V_BE) / V_A.',
        tip: 'Ne pas oublier de convertir les volumes en litres ou garder les deux volumes en mL.'
      }
    ],
    examples: [
      {
        statement: 'On dose V_A = 20,0 mL d\'acide éthanoïque CH₃COOH de concentration C_A inconnue par une solution d\'hydroxyde de sodium de concentration C_B = 0,10 mol/L. Le saut de pH indique V_BE = 15,0 mL et pH_E = 8,8. 1) Calculer C_A. 2) Déterminer le pKa sachant qu\'à V_B = 7,5 mL, le pH mesuré est 4,8.',
        solution: '1) C_A = (C_B × V_BE) / V_A = (0,10 × 15,0) / 20,0 = 0,075 mol/L. 2) À V_B = 7,5 mL = V_BE / 2, nous sommes au point de demi-équivalence. À ce point, pH = pKa. Donc pKa(CH₃COOH / CH₃COO⁻) = 4,8.'
      }
    ],
    exercises: [
      {
        question: 'Lequel de ces indicateurs convient pour le dosage précédent (pH_E = 8,8) : Hélianthine (zone de virage : 3,1 - 4,4), Bleu de bromothymol (zone de virage : 6,0 - 7,6) ou Phénolphtaléine (zone de virage : 8,2 - 10,0) ? Justifiez.',
        correction: 'La phénolphtaléine convient car sa zone de virage [8,2 - 10,0] englobe parfaitement le pH à l\'équivalence (pH_E = 8,8). L\'hélianthine virerait bien trop tôt (avant l\'équivalence) et le BBT virerait également avant la fin du saut de pH.'
      }
    ],
    examTraps: [
      'Confondre pH à l\'équivalence d\'un acide fort (pH_E = 7) avec celui d\'un acide faible (pH_E > 7).',
      'Affirmer que la demi-équivalence existe pour un dosage acide fort / base forte : faux, il n\'y a pas de pKa ni de palier tampon pour un acide fort totalement dissocié.',
      'Oublier qu\'une solution tampon résiste aux petites additions d\'acide ou de base, mais pas aux ajouts massifs.'
    ],
    quickMemo: 'Dosages acido-basiques : Équivalence C_A·V_A = C_B·V_BE. Si acide fort : pH_E = 7. Si acide faible : pH_E > 7 et à V_BE/2, pH = pKa (tampon). Indicateur coloré : sa zone de virage doit contenir pH_E.',
    keywords: ['Dosage pH-métrique', 'Équivalence', 'Demi-équivalence', 'pKa', 'Solution tampon', 'Indicateur coloré', 'Henderson-Hasselbalch', 'Acide faible']
  },

  // =========================================================================
  // 3. PHYSIQUE TERMINALE C & D : AUTO-INDUCTION & CIRCUIT RLC LIBRE
  // =========================================================================
  {
    id: 'pc-tle-auto-induction-circuit-rlc',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Terminale C, D)',
    level: 'terminale',
    levelLabel: 'Terminale C & D (Bac Scientifique)',
    serie: 'tle_c',
    serieLabel: 'Terminale C & D',
    chapter: 'Physique : Électromagnétisme & Oscillations Électriques Libres',
    lessonTitle: 'Auto-induction, inductance d\'une bobine, énergie magnétique et circuit oscillant RLC',
    objectifs: [
      'Énoncer la loi de Lenz et expliquer le phénomène d\'auto-induction électromagnétique',
      'Exprimer la force électromotrice d\'auto-induction e = - L (di/dt) et la tension aux bornes d\'une bobine réelle u_B = r·i + L(di/dt)',
      'Exprimer l\'énergie emmagasinée dans une bobine : E_m = (1/2) L i²',
      'Établir l\'équation différentielle vérifiée par la charge q(t) ou la tension u_C(t) dans un circuit LC parfait et un circuit RLC série',
      'Distinguer les régimes pseudopériodique, apériodique et critique selon l\'amortissement imposé par la résistance R',
      'Exprimer la période propre T_0 = 2π √(LC) et expliquer le transfert mutuel d\'énergie électrique et magnétique'
    ],
    fullCourseContent: `I. PHÉNOMÈNE D'AUTO-INDUCTION :
1. Définition :
Lorsqu'un circuit parcouru par un courant d'intensité variable i(t) crée son propre flux magnétique à travers sa propre surface, toute variation de i(t) provoque l'apparition d'une f.é.m. induite dans le circuit lui-même : c'est l'auto-induction.
2. Loi de Lenz :
Le courant induit s'oppose par ses effets magnétiques à la cause qui lui donne naissance (la variation du courant inducteur).
3. Flux propre et inductance L :
Φ = L * i, où L est l'inductance de la bobine en Henrys (H).
Pour un solénoïde de longueur ℓ, comportant N spires et de section S : L = μ₀ * (N² / ℓ) * S.
4. f.é.m. d'auto-induction :
e = - dΦ / dt = - L * (di / dt).
5. Tension aux bornes d'une bobine (en convention récepteur) :
u_B = r * i - e = r * i + L * (di / dt) (où r est la résistance interne du fil).
6. Énergie magnétique emmagasinée dans la bobine :
E_m = (1/2) * L * i².

II. OSCILLATIONS ÉLECTRIQUES LIBRES DANS UN CIRCUIT RLC SÉRIE :
1. Équation différentielle du circuit RLC série :
En appliquant la loi des mailles à un circuit comprenant un condensateur de capacité C, une bobine (L, r) et un conducteur ohmique R :
u_C + u_B + u_R = 0
u_C + (R + r) * i + L * (di / dt) = 0
Sachant que i = dq / dt = C * (du_C / dt) et di / dt = C * (d²u_C / dt²) :
L * C * (d²u_C / dt²) + R_tot * C * (du_C / dt) + u_C = 0
Soit : (d²u_C / dt²) + (R_tot / L) * (du_C / dt) + (1 / (L * C)) * u_C = 0.

2. Cas du circuit idéal LC non amorti (R_tot = 0) :
- Équation différentielle : (d²u_C / dt²) + ω₀² * u_C = 0 avec ω₀² = 1 / (LC).
- Solution : u_C(t) = U_m * cos(ω₀ * t + φ).
- Période propre : T₀ = 2π / ω₀ = 2π * √(L * C).
- Fréquence propre : f₀ = 1 / T₀ = 1 / (2π * √(LC)).
- Conservation de l'énergie totale : E_tot = E_e + E_m = (1/2) * C * u_C² + (1/2) * L * i² = constante.

3. Amortissement et régimes du circuit RLC réel :
- Si R_tot est faible : Régime pseudopériodique (oscillations amorties de pseudopériode T ≈ T₀).
- Si R_tot est élevée : Régime apériodique (retour à zéro sans oscillation).
- Si R_tot = 2 * √(L / C) : Régime critique (retour le plus rapide à l'équilibre sans oscillation).
- L'énergie totale décroît au cours du temps par dissipation thermique sous forme d'effet Joule dans les résistances.`,
    definitions: [
      { term: 'Inductance L', definition: 'Grandeur physique caractéristique d\'une bobine, exprimée en Henrys (H), mesurant son opposition aux variations de courant.' },
      { term: 'Régime pseudopériodique', definition: 'Régime d\'oscillations libres amorties d\'amplitude décroissante au cours du temps due aux pertes par effet Joule.' },
      { term: 'Période propre T_0', definition: 'Période des oscillations libres d\'un circuit LC sans résistance : T_0 = 2π √(LC).' },
      { term: 'Effet Joule', definition: 'Dissipation irréversible d\'énergie électrique sous forme de chaleur lors du passage du courant dans une résistance (P = R·i²).' }
    ],
    propertiesAndRules: [
      { name: 'Continuité du courant dans une bobine', statement: 'L\'intensité du courant traversant une bobine ne peut pas subir de discontinuité brutale : elle varie toujours de façon continue car une variation instantanée exigerait une tension infinie.' },
      { name: 'Échange énergétique LC', statement: 'Dans un circuit LC idéal, l\'énergie oscille perpétuellement entre la forme électrique (condensateur) et la forme magnétique (bobine), leur somme demeurant constante.' }
    ],
    formulas: [
      { name: 'Tension aux bornes d\'une bobine', formula: 'u_B = r\\cdot i + L\\frac{di}{dt}', explanation: 'r est la résistance interne en ohms (Ω) et L l\'inductance en henrys (H).' },
      { name: 'Énergie magnétique', formula: 'E_m = \\frac{1}{2} L i^2', explanation: 'Énergie stockée dans le champ magnétique de la bobine.' },
      { name: 'Période propre', formula: 'T_0 = 2\\pi \\sqrt{LC}', explanation: 'L en henrys (H), C en farads (F), T_0 en secondes (s).' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Établir l\'équation différentielle du circuit RLC',
        procedure: '1. Dessiner le circuit orienté avec le sens du courant i(t) et les flèches de tension en convention récepteur. 2. Écrire la loi des mailles : u_C + u_R + u_B = 0. 3. Remplacer u_R = R·i, u_B = r·i + L(di/dt) et exprimer i en fonction de u_C (i = C·du_C/dt). 4. Ordonner sous la forme canonique (d²u_C/dt²) + 2λ(du_C/dt) + ω₀² u_C = 0.',
        tip: 'Vérifier l\'homogénéité dimensionnelle de chaque terme (tous doivent être en V·s⁻²).'
      },
      {
        stepNumber: 2,
        title: 'Calculer la période propre et la capacité C',
        procedure: 'Connaissant T_0 et L : élever au carré T_0² = 4π²·L·C, d\'où C = T_0² / (4π²·L).',
        tip: 'Prendre souvent π² ≈ 10 pour simplifier les calculs sans calculatrice.'
      }
    ],
    examples: [
      {
        statement: 'Un circuit oscillant est composé d\'un condensateur de capacité C = 10 μF et d\'une bobine d\'inductance L = 0,10 H et de résistance négligeable. Calculer la période propre T_0 et la fréquence propre f_0 des oscillations. (On prendra π² ≈ 10).',
        solution: 'T_0 = 2π √(L × C) = 2π √(0,10 × 10 × 10⁻⁶) = 2π √(10⁻⁶) = 2π × 10⁻³ s ≈ 2 × 3,14 × 10⁻³ s = 6,28 ms. Fréquence propre f_0 = 1 / T_0 = 1 / (6,28 × 10⁻³) ≈ 159 Hz.'
      }
    ],
    exercises: [
      {
        question: 'À quoi est due la diminution progressive de l\'amplitude des oscillations de tension dans un circuit RLC série réel ? Comment entretenir ces oscillations ?',
        correction: 'La décroissance de l\'amplitude est due aux pertes d\'énergie par effet Joule (chaleur) dans la résistance totale du circuit (R + r). Pour entretenir ces oscillations et maintenir une amplitude constante, il faut adjoindre au circuit un dispositif amplificateur d\'entretien (système à résistance négative) qui injecte à chaque instant une puissance électrique compensant exactement les pertes Joule.'
      }
    ],
    examTraps: [
      'Confondre la pseudopériode T du régime pseudopériodique avec la période propre T_0 du circuit idéal LC non amorti.',
      'Oublier d\'ajouter la résistance interne de la bobine r à la résistance du conducteur ohmique R dans le calcul de la résistance totale R_tot = R + r.',
      'Croire que la bobine s\'oppose au courant : elle s\'oppose uniquement aux VARIATIONS du courant (loi de Lenz).'
    ],
    quickMemo: 'Auto-induction & RLC : Bobine u_B = ri + L(di/dt), énergie E_m = 1/2 L i². Période propre LC : T_0 = 2π√(LC). Résistance R entraîne l\'amortissement (pertes Joule). 3 régimes : pseudopériodique, apériodique, critique.',
    keywords: ['Bobine', 'Auto-induction', 'Inductance L', 'Circuit RLC', 'Loi de Lenz', 'Période propre', 'Oscillations libres', 'Amortissement']
  }
];
