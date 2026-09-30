/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : PHYSIQUE-CHIMIE SECONDE A & C
 * Source : Côte d'Ivoire – École Numérique / Ministère de l'Éducation Nationale et de l'Alphabétisation (MENA)
 * Conforme au programme officiel ivoirien (APC - Approche Par Compétences)
 *
 * Ce fichier est 100% autonome (aucune dépendance IA, aucun appel réseau).
 * Il fournit au moteur local de LE PROF les notions exactes, formules prêtes à l'emploi
 * et méthodes algorithmiques étape par étape pour les leçons officielles de Seconde C et Seconde A.
 */

export type Chapter = {
  id: string; // ex: "ch1"
  lessonNumber?: number;
  title: string; // titre exact du chapitre
  pages?: [number, number]; // si connu
  topics: string[]; // notions abordées, en langage clair
  formulas: string[]; // toutes les formules/théorèmes du chapitre
  methods: string[]; // méthodes de résolution étape par étape
};

export const pc2ndeCKnowledgeBase = {
  name: "LE PROF — Knowledge Base Physique-Chimie 2nde C",
  version: "1.0.0",
  source: "Côte d'Ivoire – École Numérique (Direction de la Pédagogie et de la Formation Continue - MENA)",
  level: "Seconde C",
  chapters: [
    // =========================================================================
    // LEÇON 1 : LE MOUVEMENT (THÈME 1 : MÉCANIQUE)
    // =========================================================================
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Le mouvement",
      pages: [1, 11],
      topics: [
        "Caractère relatif du mouvement : un corps est au repos ou en mouvement par rapport à un objet de référence choisi",
        "Référentiel : solide indéformable de référence par rapport auquel on décrit le mouvement d'un mobile",
        "Exemples de référentiels : référentiel de Copernic/héliocentrique (mouvements des astres du système solaire), référentiel géocentrique (mouvement des satellites autour de la Terre), référentiel terrestre (mouvements des objets à la surface de la Terre)",
        "Point mobile : tout objet en mouvement dont les dimensions sont négligeables et pouvant être assimilé à un point matériel",
        "Repère d'espace orthonormé (O, i, j, k) lié au référentiel pour déterminer les coordonnées cartésiennes (x, y, z)",
        "Repère de temps : instant initial origine des dates (t = 0), unité légale de temps en seconde (s)",
        "Vecteur-position OM(t) = x*i + y*j + z*k définissant la position du mobile à la date t",
        "Vecteur déplacement entre deux positions M1(t1) et M2(t2) : vecteur(M1M2) = OM2 - OM1",
        "Trajectoire d'un point mobile : ensemble continu des positions successives occupées par le point mobile au cours de son mouvement ; elle dépend du référentiel (rectiligne, circulaire, curviligne)",
        "Vitesse moyenne Vm : quotient de la distance parcourue d par la durée Delta_t du parcours (Vm = d / Delta_t en m/s ou m.s^-1)",
        "Conversion d'unités de vitesse : 1 m/s = 3,6 km/h (multiplication par 3,6 de m/s vers km/h, division par 3,6 de km/h vers m/s)",
        "Vitesse instantanée v(ti) : vitesse du mobile à une date précise ti, mesurée par le compteur ou calculée comme vitesse moyenne sur un intervalle de temps très court encadrant ti : v(ti) = M_{i-1}M_{i+1} / (t_{i+1} - t_{i-1})",
        "Calcul sur enregistrement à intervalles réguliers tau : v(ti) = M_{i-1}M_{i+1} / (2*tau)",
        "Caractéristiques du vecteur-vitesse v(ti) : point d'application en Mi, direction tangente à la trajectoire en Mi, sens du mouvement, valeur/norme égale à v(ti) = ||v(ti)||",
        "Mouvement rectiligne uniforme (MRU) : points alignés et équidistants sur l'enregistrement ; le vecteur-vitesse est strictement constant (conserve sa direction, son sens et sa valeur v(t) = cste)",
        "Mouvement rectiligne uniformément varié (MRUV) : trajectoire en ligne droite, distances successives qui augmentent (accéléré) ou diminuent (décéléré) de façon constante (v_{i+1} - v_i = cste) ; le vecteur-vitesse conserve sa direction et son sens mais sa valeur varie régulièrement"
      ],
      formulas: [
        "Vecteur-position : vecteur(OM) = x*i + y*j + z*k",
        "Vecteur-déplacement : vecteur(M1M2) = vecteur(OM2) - vecteur(OM1)",
        "Vitesse moyenne : Vm = d / Delta_t (d en m, Delta_t en s, Vm en m.s^-1)",
        "Facteur de conversion : 1 m.s^-1 = 3,6 km.h^-1 et 1 km.h^-1 = (1 / 3,6) m.s^-1",
        "Vitesse instantanée générale : v(ti) = M_{i-1}M_{i+1} / (t_{i+1} - t_{i-1})",
        "Vitesse instantanée sur chronophotographie à pas régulier tau : v(ti) = M_{i-1}M_{i+1} / (2 * tau)",
        "Norme du vecteur-vitesse : v(ti) = ||vecteur(v(ti))||",
        "Critère de mouvement rectiligne uniforme (MRU) : trajectoire droite ET vecteur(v) = vecteur(constant) (direction, sens et norme constants)",
        "Critère de mouvement rectiligne uniformément accéléré : trajectoire droite ET v(t) croissante avec Delta_v / Delta_t = constante"
      ],
      methods: [
        "Calculer la vitesse moyenne d'un parcours : 1. Relever la distance totale d et convertir en mètres (ex: 60 km = 60 000 m). 2. Calculer la durée totale Delta_t en secondes en convertissant les heures et minutes (Delta_t = h * 3600 + min * 60 + s). 3. Appliquer la formule Vm = d / Delta_t. 4. Convertir en km/h si nécessaire en multipliant par 3,6.",
        "Calculer la vitesse instantanée sur un enregistrement chronophotographique : 1. Identifier la position Mi demandée et repérer les points immédiatement précédent M_{i-1} et suivant M_{i+1}. 2. Mesurer ou relever la distance réelle du segment M_{i-1}M_{i+1} en mètres en tenant compte de l'échelle éventuelle (distance_réelle = distance_mesurée * échelle). 3. Relever l'intervalle de temps tau et le convertir en secondes (ex: 20 ms = 20 * 10^-3 s). 4. Calculer v(ti) = (M_{i-1}M_{i+1}) / (2 * tau).",
        "Représenter un vecteur-vitesse à une échelle donnée : 1. Calculer la valeur numérique v(ti) en m/s. 2. Utiliser l'échelle imposée (ex: 1 cm pour 0,25 m/s) en appliquant la règle de trois : longueur_flèche = v(ti) / valeur_pour_1cm. 3. Tracer à partir du point Mi un segment fléché de cette longueur, tangent à la trajectoire et orienté dans le sens du mouvement.",
        "Déterminer la nature d'un mouvement à partir d'un enregistrement : 1. Analyser la géométrie des points : si les points sont alignés, la trajectoire est rectiligne. 2. Mesurer les intervalles d'espace successifs MiM_{i+1} ou calculer plusieurs vitesses instantanées v2, v4, v6... 3. Si les distances sont égales et les vitesses instantanées égales (v2 = v4 = v6), conclure à un mouvement rectiligne uniforme (MRU). 4. Si les distances augmentent régulièrement et v2 < v4 < v6 avec v_{i+2} - v_i = cste, conclure à un mouvement rectiligne uniformément varié (accéléré)."
      ]
    },

    // =========================================================================
    // LEÇON 2 : ÉQUILIBRE D’UN SOLIDE SOUMIS À DEUX FORCES (THÈME 1 : MÉCANIQUE)
    // =========================================================================
    {
      id: "ch2",
      lessonNumber: 2,
      title: "Équilibre d’un solide soumis à deux forces",
      pages: [1, 7],
      topics: [
        "Condition générale d'équilibre d'un solide soumis à deux forces F1 et F2 : même direction (même support), sens opposés et même intensité (valeur)",
        "Traduction vectorielle de la condition d'équilibre : vecteur(F1) + vecteur(F2) = vecteur(0), d'où F1 = F2",
        "Poids d'un corps P : force d'attraction gravitationnelle exercée par la Terre sur le corps, appliquée au centre de gravité G, verticale, descendante (vers le bas), de valeur P = m * g (m en kg, g en N/kg, P en N)",
        "Solide posé sur un plan horizontal : soumis à son poids P et à la réaction R du support ; à l'équilibre : vecteur(P) + vecteur(R) = vecteur(0) => P = R = m * g",
        "Solide suspendu par un fil inextensible : soumis au poids P et à la tension T du fil ; à l'équilibre : vecteur(P) + vecteur(T) = vecteur(0) => P = T = m * g",
        "Solide suspendu à un ressort vertical : équilibre sous le poids P et la tension T du ressort ; à l'équilibre : P = T = m * g",
        "Solide posé sur un plan incliné rugueux : la réaction R du support se décompose en deux composantes : la réaction normale RN orthogonale au plan et la réaction tangentielle / force de frottement f parallèle au plan et opposée à la tendance au glissement (vecteur(R) = vecteur(RN) + vecteur(f)) ; à l'équilibre : vecteur(P) + vecteur(R) = vecteur(0)",
        "Solide flottant ou immergé : équilibre sous le poids P (au centre de gravité G) et la poussée d'Archimède PA (au centre de poussée O, milieu du volume ou de la surface immergée) ; à l'équilibre : vecteur(P) + vecteur(PA) = vecteur(0) => P = PA = m * g",
        "Les trois types d'équilibre : 1. Équilibre stable (le corps écarté de sa position d'équilibre y revient après oscillations car les droites d'action des deux forces s'éloignent l'une de l'autre). 2. Équilibre instable (le corps écarté s'éloigne définitivement de sa position d'équilibre). 3. Équilibre indifférent (le corps écarté reste en équilibre dans sa nouvelle position, ex: sphère sur un plan horizontal)"
      ],
      formulas: [
        "Condition vectorielle d'équilibre à deux forces : vecteur(F1) + vecteur(F2) = vecteur(0)",
        "Égalité des intensités à l'équilibre : F1 = F2",
        "Formule du poids : P = m * g (m en kg, g en N/kg, P en N)",
        "Équilibre sur plan horizontal : vecteur(P) + vecteur(R) = vecteur(0) => P = R = m * g",
        "Équilibre d'un solide suspendu : vecteur(P) + vecteur(T) = vecteur(0) => P = T = m * g",
        "Décomposition de la réaction sur plan rugueux : vecteur(R) = vecteur(RN) + vecteur(f)",
        "Équilibre de flottaison : vecteur(P) + vecteur(PA) = vecteur(0) => P = PA = m * g"
      ],
      methods: [
        "Résoudre un problème d'équilibre d'un solide soumis à deux forces : 1. Définir précisément le système matériel étudié. 2. Faire le bilan exhaustif des forces extérieures appliquées au système (point d'application, direction, sens). 3. Écrire la condition vectorielle d'équilibre : vecteur(F1) + vecteur(F2) = vecteur(0). 4. En déduire la relation scalaire d'égalité des intensités : F1 = F2. 5. Calculer la valeur connue (souvent P = m * g, attention à convertir la masse m en kg en divisant par 1000). 6. En déduire la valeur de la seconde force (ex: R = P, T = P ou PA = P).",
        "Représenter les forces à l'échelle : 1. Noter les points d'application respectifs (ex: centre de gravité G pour le poids P, point de contact O pour la réaction du support ou la poussée d'Archimède, point d'attache pour la tension du fil). 2. Déterminer la longueur de chaque vecteur à partir de l'échelle donnée (longueur = valeur_force / valeur_échelle). 3. Tracer les deux flèches sur la même droite d'action, de sens opposés et de longueur strictement identique.",
        "Caractériser la stabilité d'un équilibre : 1. Considérer une perturbation en écartant légèrement le solide de sa position de repos. 2. Si le solide revient à sa position initiale en oscillant, l'équilibre est stable (les forces créent un couple de rappel). 3. Si le solide s'éloigne sans retour, l'équilibre est instable. 4. S'il reste en équilibre dans toute nouvelle position, l'équilibre est indifférent."
      ]
    },

    // =========================================================================
    // LEÇON 3 : L’ÉLÉMENT CHIMIQUE (THÈME 3 : LA MATIÈRE ET SES TRANSFORMATIONS)
    // =========================================================================
    {
      id: "ch3",
      lessonNumber: 3,
      title: "L’élément chimique",
      pages: [1, 7],
      topics: [
        "Cycle du cuivre et conservation de l'élément : 1. Combustion du métal cuivre (Cu) avec le dioxygène de l'air (O2) formant l'oxyde de cuivre II (CuO, solide noir) : 2 Cu + O2 -> 2 CuO. 2. Réduction de l'oxyde de cuivre II par le carbone à chaud : 2 CuO + C -> 2 Cu + CO2 (régénération du cuivre rouge et formation de dioxyde de carbone qui trouble l'eau de chaux). 3. Réaction entre les ions cuivre II (Cu2+, solution bleue) et le fer métallique (Fe) : Cu2+ + Fe -> Cu + Fe2+ (dépôt rouge de cuivre métal sur le fer et coloration verte due aux ions fer II Fe2+)",
        "Définition de l'élément chimique : ce qui est commun à un corps simple et à tous ses composés ; entité indestructible au cours des transformations chimiques",
        "Corps simple : corps constitué d'atomes d'un seul et même élément chimique (exemples : H2, O2, O3, Cl2, Fe, Cu, C)",
        "Corps composé : corps constitué d'atomes de plusieurs éléments chimiques différents (exemples : H2O, NH3, CH4, CO2, CuO, Fe2O3, C6H12O6, C2H6O)",
        "Symboles des éléments chimiques : représentés par une lettre majuscule, ou une majuscule suivie d'une minuscule (C pour Carbone, H pour Hydrogène, O pour Oxygène, N pour Azote, Cu pour Cuivre, Fe pour Fer, Al pour Aluminium, Ca pour Calcium, Cl pour Chlore)",
        "Symboles issus de noms anciens ou latins : Natrium (Na = Sodium), Kalium (K = Potassium), Hydrargyrum (Hg = Mercure), Aurum (Au = Or), Argentum (Ag = Argent), Stannum (Sn = Étain), Wolfram (W = Tungstène), Nitrogène (N = Azote)"
      ],
      formulas: [
        "Combustion du cuivre dans le dioxygène : 2 Cu + O2 -> 2 CuO",
        "Réduction de l'oxyde de cuivre II par le carbone : 2 CuO + C -> 2 Cu + CO2",
        "Réaction d'oxydoréduction fer/cuivre en solution : Cu2+ + Fe -> Cu + Fe2+",
        "Définition : Élément chimique = entité invariante commune au corps simple et à ses composés",
        "Critère de corps simple : formule ne comportant qu'un seul symbole atomique (ex: Xn)",
        "Critère de corps composé : formule comportant au moins deux symboles atomiques distincts (ex: XaYbZc)"
      ],
      methods: [
        "Identifier les éléments chimiques constitutifs d'une espèce chimique : 1. Analyser la formule brute du composé (ex: C6H12O6, chlorophylle C55H72N4O5Mg). 2. Repérer chaque lettre majuscule (éventuellement suivie d'une minuscule) qui correspond à un élément unique. 3. Associer le nom correspondant à chaque symbole (C: carbone, H: hydrogène, O: oxygène, N: azote, Mg: magnésium, Cl: chlore, etc.).",
        "Distinguer corps simple et corps composé : 1. Examiner la composition élémentaire de la formule. 2. S'il n'y a qu'un seul type d'élément (ex: O2, Fe, Cl2, O3, H2), classer en corps simple. 3. S'il y a au moins deux éléments différents (ex: H2O, CO2, NaCl, CaCO3), classer en corps composé.",
        "Prouver qu'une substance est un élément chimique à travers une suite d'expériences : 1. Montrer qu'on part d'un corps simple (ex: cuivre métal Cu). 2. Le transformer chimiquement en corps composés successifs (CuO, puis Cu2+). 3. Régénérer le corps simple initial par réaction chimique (Cu2+ + Fe -> Cu). 4. Conclure que l'élément s'est conservé dans tous ses états et composés."
      ]
    },

    // =========================================================================
    // LEÇON 4 : STRUCTURE DE L’ATOME (THÈME 3 : LA MATIÈRE ET SES TRANSFORMATIONS)
    // =========================================================================
    {
      id: "ch4",
      lessonNumber: 4,
      title: "Structure de l’atome",
      pages: [1, 10],
      topics: [
        "Constitution fondamentale de l'atome : un noyau central dense chargé positivement autour duquel gravitent un ou plusieurs électrons chargés négativement",
        "Caractéristiques de l'électron : symbole e-, charge électrique négative qe = -e = -1,6.10^-19 C, masse me = 9,1.10^-31 kg ; la charge élémentaire vaut e = 1,6.10^-19 C",
        "Constitution du noyau : constitué de particules appelées nucléons (protons et neutrons)",
        "Proton : particule du noyau de symbole p, charge positive qp = +e = +1,6.10^-19 C, masse mp = 1,67.10^-27 kg",
        "Neutron : particule du noyau de symbole n, électriquement neutre qn = 0 C, masse mn = 1,67.10^-27 kg",
        "Numéro atomique Z : nombre de protons contenus dans le noyau ; pour un atome neutre, Z est aussi le nombre d'électrons du nuage électronique",
        "Nombre de masse A : nombre total de nucléons (protons + neutrons) contenus dans le noyau : A = Z + N",
        "Nombre de neutrons N : calculé par la relation N = A - Z",
        "Nucléide : ensemble des atomes dont le noyau possède le même couple (Z, A), représenté par la notation conventionnelle ^A_Z X où X est le symbole chimique",
        "Isotopes : nucléides ayant le même numéro atomique Z mais des nombres de masse A différents (même nombre de protons, nombre de neutrons différent ; ex: 12_6 C, 13_6 C, 14_6 C)",
        "Électroneutralité de l'atome : la charge totale positive du noyau (+Z*e) est rigoureusement compensée par la charge totale négative des électrons (-Z*e) ; charge nette = 0",
        "Masse et dimensions de l'atome : le rapport mp / me ≈ 1836 montre que la masse des électrons est négligeable devant celle des nucléons ; la masse de l'atome est donc concentrée dans le noyau : m_atome ≈ A * mp",
        "Structure lacunaire de l'atome : le rayon de l'atome (environ 10^-10 m) est environ 100 000 fois plus grand que celui du noyau (environ 10^-15 m) ; l'atome est constitué essentiellement de vide",
        "Couches électroniques : les électrons se répartissent sur des niveaux d'énergie désignés par n = 1 (couche K), n = 2 (couche L), n = 3 (couche M), n = 4 (couche N)",
        "Règles de remplissage : 1. Capacité maximale d'une couche d'ordre n égale à 2*n^2 (K : 2 électrons max ; L : 8 électrons max ; M : 18 électrons max ; N : 32 électrons max). 2. Remplissage successif dans l'ordre K, puis L, puis M... (une couche doit être saturée avant d'entamer la suivante, avec saturation de M à 8 électrons avant N pour Z <= 18, et remplissage particulier pour 19K: K2 L8 M8 N1 et 20Ca: K2 L8 M8 N2)",
        "Couche externe ou couche de valence : dernière couche occupée de l'atome ; ses électrons sont appelés électrons périphériques ou de valence",
        "Représentation de Lewis d'un atome : symbole de l'élément entouré de points pour les électrons célibataires et de tirets pour les doublets d'électrons"
      ],
      formulas: [
        "Charge élémentaire : e = 1,6.10^-19 C",
        "Masse du proton et du neutron : mp ≈ mn = 1,67.10^-27 kg",
        "Masse de l'électron : me = 9,1.10^-31 kg",
        "Rapport de masse nucléon/électron : mp / me ≈ 1836",
        "Relation de masse et nucléons : A = Z + N <=> N = A - Z",
        "Charge du noyau : Q_noyau = + Z * e <=> Z = Q_noyau / e",
        "Charge du nuage électronique : Q_nuage = - Z * e",
        "Masse approchée de l'atome : m_atome ≈ m_noyau ≈ A * mp",
        "Capacité maximale d'une couche d'ordre n : N_max = 2 * n^2 (K: 2, L: 8, M: 18)",
        "Formule électronique pour Z <= 20 : K^x L^y M^z N^w"
      ],
      methods: [
        "Déterminer la composition complète d'un atome à partir du symbole ^A_Z X : 1. Relever Z : nombre de protons = Z ; nombre d'électrons = Z (car atome neutre). 2. Relever A (nombre de masse / nucléons). 3. Calculer le nombre de neutrons : N = A - Z.",
        "Calculer le numéro atomique à partir de la charge du noyau : 1. Relever la charge totale positive Q_noyau (ex: +30,4.10^-19 C). 2. Appliquer la formule Z = Q_noyau / e = (30,4.10^-19) / (1,6.10^-19) = 19. 3. Identifier l'élément correspondant dans la classification (Z = 19 -> Potassium K).",
        "Établir la formule électronique d'un atome (Z <= 20) : 1. Identifier le nombre total d'électrons Z. 2. Remplir la couche K au maximum (2 électrons). 3. Remplir la couche L au maximum (8 électrons). 4. Placer le reste sur la couche M (jusqu'à 8 électrons pour Z <= 18). 5. Pour Z = 19 et Z = 20, placer respectivement 1 et 2 électrons sur la couche N après avoir mis 8 sur M (K2 L8 M8 N1 et K2 L8 M8 N2).",
        "Construire le schéma de Lewis d'un atome : 1. Déterminer le nombre d'électrons de valence (électrons sur la couche externe). 2. Répartir ces électrons aux 4 cardinaux du symbole chimique : d'abord sous forme d'électrons célibataires (points), puis les apparier en doublets (tirets) si le nombre dépasse 4. Exemple: C (4 e-) -> 4 points ; O (6 e-) -> 2 tirets et 2 points ; Cl (7 e-) -> 3 tirets et 1 point."
      ]
    },

    // =========================================================================
    // LEÇON 5 : CLASSIFICATION PÉRIODIQUE DES ÉLÉMENTS CHIMIQUES (THÈME 3)
    // =========================================================================
    {
      id: "ch5",
      lessonNumber: 5,
      title: "Classification périodique des éléments chimiques",
      pages: [1, 9],
      topics: [
        "Organisation générale du tableau de Mendeleïev : tableau à double entrée constitué de 7 lignes appelées périodes et de 18 colonnes appelées groupes (restreint au lycée à 4 périodes et 8 colonnes principales)",
        "Les 3 règles d'édification du tableau de classification périodique : 1. Les éléments chimiques sont classés par numéro atomique Z croissant. 2. Chaque période (ligne) correspond au remplissage d'une nouvelle couche électronique ; le numéro de la ligne indique le nombre de couches électroniques occupées par l'atome. 3. Chaque groupe (colonne) regroupe les éléments ayant le même nombre d'électrons sur leur couche électronique externe ; ces éléments constituent une famille chimique possédant des propriétés chimiques analogues",
        "Famille des métaux alcalins (1ère colonne, à l'exception de l'hydrogène : Li, Na, K, Rb, Cs) : 1 électron sur la couche externe ; corps simples métalliques mous, peu denses ; très oxydables à l'air ; réagissent violemment avec l'eau en libérant du dihydrogène H2 et formant une solution basique d'hydroxyde",
        "Famille des métaux alcalino-terreux (2ème colonne : Be, Mg, Ca, Sr, Ba) : 2 électrons sur la couche externe ; corps réactifs dont l'oxydation donne des oxydes réfractaires résistants aux hautes températures",
        "Famille des halogènes (7ème colonne / avant-dernière : F, Cl, Br, I) : 7 électrons sur la couche externe ; existent sous forme de corps simples diatomiques (F2, Cl2, Br2, I2) ; fort caractère oxydant (tendance à capter 1 électron) ; réagissent facilement avec les métaux pour former des halogénures métalliques (ex: NaCl)",
        "Famille des gaz rares ou gaz nobles (8ème colonne / dernière : He, Ne, Ar, Kr, Xe) : 8 électrons sur la couche externe (sauf l'hélium He qui en a 2) ; corps simples monoatomiques gazeux ; inertie chimique remarquable (absence quasi-totale de réactivité)",
        "Intérêt fondamental de la classification : connaître la position d'un élément (période et colonne) permet de déduire immédiatement sa structure électronique et de prédire ses propriétés chimiques et sa valence"
      ],
      formulas: [
        "Règle de localisation de la période : Numéro de la période (ligne) = Nombre de couches électroniques occupées (n = 1: K, n = 2: L, n = 3: M, n = 4: N)",
        "Règle de localisation de la colonne : Numéro de la colonne (1 à 8) = Nombre d'électrons sur la couche externe (couche de valence)",
        "Réaction des alcalins avec l'eau : 2 M + 2 H2O -> 2 (M+ + OH-) + H2 (ex: 2 Na + 2 H2O -> 2 NaOH + H2)",
        "Structure électronique des alcalins : couche externe en s1 (ex: K2L1, K2L8M1, K2L8M8N1)",
        "Structure électronique des alcalino-terreux : couche externe à 2 électrons (ex: K2L2, K2L8M2, K2L8M8N2)",
        "Structure électronique des halogènes : couche externe à 7 électrons (ex: K2L7, K2L8M7)",
        "Structure électronique des gaz rares : couche externe saturée à 8 électrons (K2L8, K2L8M8), sauf He: K2"
      ],
      methods: [
        "Situer un élément dans le tableau périodique à partir de son numéro atomique Z : 1. Écrire sa formule électronique (ex: Z = 17 -> K2 L8 M7). 2. Compter le nombre de couches occupées (ici 3 couches K, L, M) -> l'élément est situé sur la 3ème période (3ème ligne). 3. Compter le nombre d'électrons sur la couche périphérique (ici 7 électrons sur M) -> l'élément appartient à la 7ème colonne. 4. En déduire la famille chimique (ici famille des halogènes).",
        "Retrouver le numéro atomique Z et le symbole à partir de la position (ligne, colonne) : 1. La période n indique le nombre de couches occupées (remplies jusqu'à saturation pour les précédentes). 2. La colonne p indique le nombre d'électrons sur la couche externe (égal à p). 3. Sommer les électrons : Z = somme de tous les électrons. 4. Identifier le nom et le symbole chimique.",
        "Déterminer les propriétés chimiques d'un élément d'après sa colonne : 1. Si colonne 1 : métal alcalin réagissant violemment avec l'eau pour former H2 et M+ + OH-. 2. Si colonne 2 : métal alcalino-terreux formant des cations M2+. 3. Si colonne 7 : halogène très oxydant formant des anions X- et des molécules diatomiques X2. 4. Si colonne 8 : gaz noble inerte chimiquement."
      ]
    },

    // =========================================================================
    // LEÇON 6 : IONS ET MOLÉCULES (THÈME 3 : LA MATIÈRE ET SES TRANSFORMATIONS)
    // =========================================================================
    {
      id: "ch6",
      lessonNumber: 6,
      title: "Ions et molécules",
      pages: [1, 12],
      topics: [
        "Règle de l'octet : au cours des réactions chimiques, les atomes tendent à acquérir la structure électronique stable du gaz rare le plus proche, c'est-à-dire 8 électrons sur leur couche externe (structure en octet)",
        "Règle du duet : pour les atomes de faible numéro atomique proches de l'hélium (H, Li, Be, B), l'atome tend à acquérir une structure à 2 électrons sur sa couche externe (structure en duet)",
        "Formation des ions : transfert d'un ou plusieurs électrons périphériques entre atomes ; le noyau n'est jamais modifié, seul le cortège électronique change",
        "Cations monoatomiques (perte d'électrons) : X -> X^n+ + n e- ; éléments de la 1ère colonne perdent 1 e- (Li+, Na+, K+) ; éléments de la 2ème colonne perdent 2 e- (Be2+, Mg2+, Ca2+) ; métaux usuels (Al3+, Fe2+, Fe3+, Cu2+, Zn2+)",
        "Anions monoatomiques (gain d'électrons) : X + n e- -> X^n- ; halogènes gagnent 1 e- (F-, Cl-, Br-, I-) ; éléments de la colonne de l'oxygène gagnent 2 e- (O2-, S2-)",
        "Ions polyatomiques : édifices moléculaires chargés présentant un excès ou un déficit global d'électrons. Cations : hydronium H3O+, ammonium NH4+ ; Anions : hydroxyde OH-, nitrate NO3-, sulfate SO4 2-, carbonate CO3 2-, permanganate MnO4-",
        "Composés ioniques et formule statistique : solide cristallin neutre formé de cations et d'anions ; la formule statistique traduit l'électroneutralité minimale du cristal (ex: NaCl, CuSO4, FeCl2, AlCl3, Na2CO3, (NH4)2SO4, Fe2O3)",
        "Liaison de covalence : mise en commun de paires d'électrons célibataires entre deux atomes pour former des doublets de liaison partagés",
        "Valence d'un atome : nombre de liaisons de covalence qu'un atome peut établir, égal au nombre d'électrons célibataires de sa couche externe (H monovalent = 1, O divalent = 2, N trivalent = 3, C tétravalent = 4)",
        "Doublets non liants : paires d'électrons externes d'un atome non engagées dans des liaisons covalentes",
        "Représentation de Lewis des molécules : formule développée faisant figurer tous les doublets liants (traits entre atomes) et tous les doublets non liants (traits autour des atomes)",
        "Géométrie des molécules et répulsion minimale (VSEPR) : les doublets liants et non liants se repoussent mutuellement et adoptent une disposition minimisant la répulsion électrique ; Molécule d'eau H2O (coudée, angle H-O-H = 105°, d(O-H) = 96 pm) ; Molécule d'ammoniac NH3 (pyramidale à base triangulaire, angle H-N-H = 107°, d(N-H) = 101 pm) ; Molécule de méthane CH4 (tétraédrique régulière, angle H-C-H = 109°28', d(C-H) = 109 pm) ; Molécule d'éthylène C2H4 (plane, angle = 120°)",
        "Corps pur simple (molécules formées d'un seul type d'atome : H2, Cl2, O2) versus corps pur composé (molécules formées d'atomes d'éléments différents : H2O, CO2, CH4)",
        "Mélange : ensemble formé de plusieurs types de molécules différentes (ex: air atmosphérique : 79% N2, 20% O2, ~1% CO2 et gaz rares)"
      ],
      formulas: [
        "Formation de cation : X -> X^n+ + n e-",
        "Formation d'anion : X + n e- -> X^n-",
        "Condition d'électroneutralité d'un composé ionique ApBq formé de A^m+ et B^n- : p * m = q * n",
        "Valence v des éléments légers : v = nombre d'électrons manquants pour atteindre l'octet (ou duet)",
        "Valence usuelle : H = 1, C = 4, N = 3, O = 2, Cl = 1, Al = 3, Ca = 2",
        "Formules géométriques types : H2O (coudée, 105°), NH3 (pyramide trigonale, 107°), CH4 (tétraèdre, 109°28')"
      ],
      methods: [
        "Prévoir la formule et le nom d'un ion monoatomique stable : 1. Écrire la formule électronique de l'atome neutre. 2. Repérer le gaz rare le plus proche (He à 2 e-, Ne à 8 e-, Ar à 8 e-). 3. Si l'atome a 1, 2 ou 3 électrons sur sa couche externe, il les cède et forme un cation X+, X2+ ou X3+. 4. Si l'atome a 5, 6 ou 7 électrons, il capte 3, 2 ou 1 électrons pour saturer sa couche en octet et forme un anion X3-, X2- ou X-.",
        "Écrire la formule statistique d'un composé ionique : 1. Identifier le cation A^m+ et l'anion B^n-. 2. Déterminer les plus petits coefficients entiers p et q tels que la charge globale soit nulle : p * m - q * n = 0 (règle du croisement des charges). 3. Écrire la formule sous la forme ApBq sans faire apparaître les charges (ex: Al3+ et O2- -> Al2O3 ; Fe3+ et Cl- -> FeCl3 ; Ca2+ et Cl- -> CaCl2 ; NH4+ et SO4 2- -> (NH4)2SO4).",
        "Construire la formule de Lewis d'une molécule : 1. Écrire la représentation de Lewis de chaque atome isolé avec ses électrons célibataires et ses doublets non liants. 2. Associer les électrons célibataires de chaque atome deux à deux pour former des liaisons covalentes (simples, doubles ou triples). 3. Vérifier que chaque atome est entouré d'un duet (pour H) ou d'un octet (pour C, N, O, halogènes). 4. Représenter les liaisons covalentes par des tirets entre atomes et conserver les tirets des doublets non liants.",
        "Déterminer la géométrie d'une molécule : 1. Établir le schéma de Lewis. 2. Compter le nombre de liaisons et de doublets non liants autour de l'atome central. 3. Appliquer la règle de répulsion maximale pour écarter les doublets : 4 doublets liants (ex: CH4) -> tétraèdre (109°) ; 3 liants + 1 non liant (ex: NH3) -> pyramide trigonale (107°) ; 2 liants + 2 non liants (ex: H2O) -> structure coudée (105°)."
      ]
    },

    // =========================================================================
    // LEÇON 7 : MOLE ET GRANDEURS MOLAIRES (THÈME 3)
    // =========================================================================
    {
      id: "ch7",
      lessonNumber: 7,
      title: "Mole et grandeurs molaires",
      pages: [1, 8],
      topics: [
        "La mole : unité internationale de quantité de matière, de symbole mol ; permet de passer de l'échelle microscopique des atomes/molécules à l'échelle macroscopique mesurable",
        "Définition historique et constante d'Avogadro NA : quantité de matière d'un système contenant autant d'entités élémentaires qu'il y a d'atomes dans 12 g de carbone 12 ; valeur approchée : NA = 6,02.10^23 mol^-1",
        "Relation entre nombre d'entités N et quantité de matière n : N = n * NA et n = N / NA",
        "Masse molaire M : masse d'une mole d'entités chimiques d'une espèce donnée, exprimée en g/mol ou g.mol^-1",
        "Masse molaire atomique : masse d'une mole d'atomes de l'élément, lue dans le tableau périodique (ex: H = 1 g/mol, C = 12 g/mol, N = 14 g/mol, O = 16 g/mol, Na = 23 g/mol, Al = 27 g/mol, S = 32 g/mol, Cl = 35,5 g/mol, Ca = 40 g/mol, Fe = 56 g/mol, Cu = 63,5 g/mol)",
        "Masse molaire moléculaire : somme des masses molaires atomiques des atomes constituant la molécule (ex: M(H2O) = 2*1 + 16 = 18 g/mol ; M(CO2) = 12 + 2*16 = 44 g/mol ; M(C2H6O) = 2*12 + 6*1 + 16 = 46 g/mol)",
        "Masse molaire ionique : masse d'une mole d'ions, identique à celle de l'édifice neutre correspondant car la masse des électrons cédés ou captés est négligeable (ex: M(SO4 2-) = 32 + 4*16 = 96 g/mol)",
        "Masse d'une seule entité élémentaire : m1 = M / NA (ex: masse d'une molécule d'ammoniac NH3 : 17 / 6,02.10^23 = 2,82.10^-23 g)",
        "Relation entre masse m, masse molaire M et quantité de matière n : n = m / M et m = n * M",
        "Volume molaire d'un gaz Vm : volume occupé par une mole de gaz à une température et une pression données, exprimé en L/mol ou L.mol^-1",
        "Loi d'Avogadro-Ampère : des volumes égaux de gaz différents, pris dans les mêmes conditions de température et de pression, renferment le même nombre de molécules et possèdent le même volume molaire Vm",
        "Valeurs usuelles du volume molaire : dans les conditions normales de température et de pression (CNTP : T = 0°C = 273 K, P = 1 atm = 10^5 Pa), Vm = 22,4 L.mol^-1 ; dans les conditions habituelles (T = 20°C, P = 1 atm), Vm = 24 L.mol^-1",
        "Relation entre volume de gaz V et quantité de matière n : n = V / Vm et V = n * Vm (valable uniquement pour les gaz)",
        "Densité d'un gaz par rapport à l'air d : quotient sans unité défini par d = M / 29 (car la masse molaire moyenne de l'air est M_air ≈ 29 g.mol^-1) ; inversement M = 29 * d"
      ],
      formulas: [
        "Constante d'Avogadro : NA = 6,02.10^23 mol^-1",
        "Nombre d'entités et mole : N = n * NA <=> n = N / NA",
        "Quantité de matière et masse : n = m / M <=> m = n * M (m en g, M en g.mol^-1, n en mol)",
        "Masse d'une molécule unique : m1 = M / NA",
        "Masse molaire moléculaire de AaBbCc : M = a * M(A) + b * M(B) + c * M(C)",
        "Quantité de matière et volume de gaz : n = V / Vm <=> V = n * Vm (V en L, Vm en L.mol^-1, n en mol)",
        "Volume molaire normal (CNTP : 0°C, 10^5 Pa) : Vm = 22,4 L.mol^-1",
        "Volume molaire usuel (20°C, 1 atm) : Vm = 24 L.mol^-1",
        "Densité d'un gaz par rapport à l'air : d = M / 29 <=> M = 29 * d"
      ],
      methods: [
        "Calculer une quantité de matière à partir d'une masse : 1. Calculer la masse molaire M du composé en additionnant les masses molaires atomiques de ses constituants. 2. Convertir la masse m en grammes si nécessaire (ex: kg -> g en multipliant par 1000, mg -> g en divisant par 1000). 3. Appliquer la formule n = m / M.",
        "Calculer une quantité de matière à partir d'un volume de gaz : 1. Vérifier les conditions de température et de pression pour choisir le bon volume molaire Vm (22,4 L/mol en CNTP ou 24 L/mol à 20°C). 2. Convertir le volume en litres (ex: cm^3 ou mL en L en divisant par 1000). 3. Appliquer n = V / Vm.",
        "Déterminer le nombre de molécules ou d'atomes dans un échantillon : 1. Calculer la quantité de matière n en mol via n = m / M ou n = V / Vm. 2. Multiplier par la constante d'Avogadro : N = n * NA.",
        "Calculer la densité ou la masse molaire d'un gaz : 1. Si la densité d est connue, calculer la masse molaire M = 29 * d. 2. Si la formule chimique est connue, calculer la masse molaire M, puis en déduire la densité d = M / 29."
      ]
    },

    // =========================================================================
    // LEÇON 8 : ÉQUATION-BILAN D’UNE RÉACTION CHIMIQUE (THÈME 3)
    // =========================================================================
    {
      id: "ch8",
      lessonNumber: 8,
      title: "Équation-bilan d’une réaction chimique",
      pages: [1, 8],
      topics: [
        "Réaction chimique : transformation au cours de laquelle des réactifs disparaissent et de nouveaux corps appelés produits apparaissent",
        "Équation-bilan : écriture symbolique de la réaction respectant la loi de conservation des éléments et des charges grâce aux coefficients stœchiométriques placés devant les formules",
        "Bilan molaire d'une réaction a A + b B -> c C + d D : à tout instant stœchiométrique nA / a = nB / b = nC / c = nD / d",
        "Proportions stœchiométriques : mélange initial où nA / a = nB / b ; à l'issue de la réaction, tous les réactifs sont totalement consommés simultanément",
        "Réactif limitant (ou réactif en défaut) : réactif dont le rapport initial n_i / coeff est le plus faible (si nA / a < nB / b, le réactif A est limitant et le réactif B est en excès)",
        "Réactif en excès : réactif qui n'est pas totalement consommé à la fin de la réaction chimique",
        "Loi de conservation de Lavoisier : au cours d'une réaction chimique, la masse totale des produits formés est rigoureusement égale à la masse totale des réactifs consommés : somme(m_réactifs_consommés) = somme(m_produits_formés)",
        "Bilan massique : application de m = n * M à chacun des réactifs et produits pour vérifier la conservation de la masse globale",
        "Bilan volumique pour les gaz (loi d'Avogadro-Ampère) : si tous les gaz sont mesurés dans les mêmes conditions de T et P, les volumes réagissant et formés sont proportionnels aux coefficients stœchiométriques : VA / a = VB / b = VC / c = VD / d",
        "Volume d'air nécessaire à une combustion complète : l'air contenant environ 20% de dioxygène (1 volume d'O2 pour 5 volumes d'air), le volume d'air minimal nécessaire est V_air = 5 * V_O2",
        "Rendement d'une réaction chimique r : rapport de la quantité de produit réellement obtenue à la quantité de produit théoriquement attendue : r = n_réel / n_théorique = m_réel / m_théorique <= 1"
      ],
      formulas: [
        "Équation générale équilibrée : a A + b B -> c C + d D",
        "Relation de stœchiométrie : nA_réagi / a = nB_réagi / b = nC_formé / c = nD_formé / d",
        "Critère de réactif limitant : si nA_init / a < nB_init / b, alors A est le réactif limitant",
        "Quantité de matière restante du réactif en excès : nB_restant = nB_init - (b / a) * nA_init",
        "Masse restante du réactif en excès : mB_restant = nB_restant * M(B)",
        "Loi de Lavoisier : somme(m_réactifs_consommés) = somme(m_produits_formés)",
        "Relation volumique des gaz (conditions identiques de T et P) : VA / a = VB / b = VC / c = VD / d",
        "Volume d'air pour la combustion : V_air = 5 * V_O2",
        "Rendement chimique : r = m_obtenue / m_théorique = n_obtenu / n_théorique"
      ],
      methods: [
        "Équilibrer une équation-bilan de réaction chimique : 1. Écrire les formules correctes des réactifs à gauche et des produits à droite séparés par une flèche. 2. Équilibrer les atomes élément par élément en ajustant uniquement les coefficients stœchiométriques (commencer par les atomes métalliques ou le carbone, puis les hétéroatomes, puis l'hydrogène et enfin l'oxygène). 3. Vérifier que chaque élément figure en même nombre de chaque côté de la flèche.",
        "Identifier le réactif limitant et calculer les produits formés : 1. Calculer les quantités de matière initiales de chaque réactif : nA_init = mA / MA et nB_init = mB / MB. 2. Comparer les rapports stœchiométriques nA_init / a et nB_init / b. 3. Le rapport le plus petit désigne le réactif limitant. 4. Calculer la quantité maximale de chaque produit formé à partir du réactif limitant : nC_formé = c * (n_limitant / coeff_limitant). 5. En déduire les masses ou volumes obtenus : mC = nC * MC et VC = nC * Vm.",
        "Calculer la masse restante du réactif en excès : 1. Déterminer la quantité consommée du réactif en excès : n_consommé = (coeff_excès / coeff_limitant) * n_limitant. 2. Calculer la quantité restante : n_restant = n_initial - n_consommé. 3. Multiplier par la masse molaire : m_restant = n_restant * M.",
        "Résoudre un problème de combustion d'un mélange d'hydrocarbures par eudiométrie : 1. Écrire les équations équilibrées de combustion de chaque gaz (ex: CH4 + 2 O2 -> CO2 + 2 H2O et C4H10 + 13/2 O2 -> 4 CO2 + 5 H2O). 2. Poser V1 et V2 les volumes respectifs des deux gaz : poser l'équation V1 + V2 = V_mélange. 3. Exprimer le volume de CO2 produit en fonction de V1 et V2 selon les coefficients stœchiométriques (ex: V(CO2) = V1 + 4*V2). 4. Résoudre le système d'équations à deux inconnues pour trouver V1 et V2. 5. Calculer le volume de dioxygène total consommé, puis en déduire le volume d'air V_air = 5 * V_O2."
      ]
    },

    // =========================================================================
    // LEÇON 9 : SOLUTIONS AQUEUSES IONIQUES (THÈME 4 : LES IONS EN SOLUTION)
    // =========================================================================
    {
      id: "ch9",
      lessonNumber: 9,
      title: "Solutions aqueuses ioniques",
      pages: [1, 10],
      topics: [
        "Solution : mélange homogène obtenu par dissolution d'un soluté (corps minoritaire) dans un solvant (liquide majoritaire) ; si le solvant est l'eau, la solution est dite aqueuse",
        "Solution aqueuse ionique : solution obtenue par dissolution d'un composé ionique dans l'eau ; elle conduit le courant électrique grâce à la présence d'ions mobiles (cations et anions)",
        "Mécanisme de dissolution d'un solide ionique en deux étapes : 1. La dislocation du cristal ionique : rupture des liaisons électrostatiques entre les ions et dispersion, processus absorbant de l'énergie (Ed). 2. L'hydratation (ou solvatation) des ions : les ions libres s'entourent d'une couronne de molécules d'eau, processus dégageant de l'énergie (Eh)",
        "Effet thermique de la dissolution : 1. Si Ed > Eh, la dissolution est endothermique (baisse de température du milieu réactionnel, ex: NH4Cl). 2. Si Ed = Eh, la dissolution est athermique (température constante, ex: NaCl, CuSO4). 3. Si Ed < Eh, la dissolution est exothermique (élévation de température du milieu, ex: NaOH)",
        "Concentration molaire volumique d'une solution C : quantité de matière de soluté dissous par litre de solution : C = n / Vs (en mol/L ou mol.L^-1)",
        "Concentration molaire volumique d'un ion [X] : nombre de moles de cet ion par litre de solution : [X] = nX / Vs (en mol.L^-1)",
        "Concentration massique (ou pondérale) Cm : masse de soluté dissous par litre de solution : Cm = m / Vs (en g/L ou g.L^-1)",
        "Relation fondamentale entre concentration molaire et concentration massique : Cm = M * C et C = Cm / M",
        "Électroneutralité d'une solution ionique : toute solution ionique est globalement neutre ; la somme des charges positives des cations est égale en valeur absolue à la somme des charges négatives des anions (ex: [Na+] = [Cl-] ou 2*[Ca2+] = [Cl-] ou 3*[Al3+] = 2*[SO4 2-])",
        "Saturation et solubilité : la saturation est la limite de dissolution au-delà de laquelle le soluté ne se dissout plus et forme un dépôt au fond ; la solubilité s est la concentration maximale d'une solution saturée (exprimée en g/L ou mol/L) ; la solubilité dépend de la nature du soluté et croît généralement avec la température (ex: NaCl : 360 g/L à 20°C, 390 g/L à 100°C)",
        "Électrolyse d'une solution aqueuse de chlorure de sodium (NaCl) : décomposition chimique forcée par passage d'un courant électrique continu",
        "Réactions aux électrodes lors de l'électrolyse de NaCl : 1. À l'anode (+) : oxydation des ions chlorure avec dégagement de dichlore Cl2 (gaz verdâtre décolorant l'indigo) : 2 Cl- -> Cl2 + 2 e-. 2. À la cathode (-) : réduction de l'eau avec dégagement de dihydrogène H2 (légère détonation à la flamme) et formation d'ions hydroxyde OH- (coloration bleue du BBT) : 2 H2O + 2 e- -> 2 OH- + H2",
        "Équation-bilan globale de l'électrolyse de NaCl : 2 H2O + 2 (Na+ + Cl-) -> H2 + Cl2 + 2 (Na+ + OH-) (production industrielle de soude NaOH, dichlore Cl2 et dihydrogène H2)",
        "Applications industrielles de l'électrolyse : galvanoplastie (dépôt protecteur de zinc : électrozingage ; chromage décoratif), argenture et dorure d'objets, raffinage et purification des métaux (cuivre électrolytique)"
      ],
      formulas: [
        "Concentration molaire d'une solution : C = n / Vs <=> n = C * Vs (n en mol, Vs en L, C en mol.L^-1)",
        "Concentration massique : Cm = m / Vs <=> m = Cm * Vs (m en g, Vs en L, Cm en g.L^-1)",
        "Relation concentration molaire et massique : Cm = M * C <=> C = Cm / M",
        "Concentration des ions issus de AnBp -> n A^m+ + p B^q- : [A^m+] = n * C et [B^q-] = p * C",
        "Loi d'électroneutralité de la solution : somme(z_cation * [Cation]) = somme(z_anion * [Anion])",
        "Critère de saturation : si Cm_préparée > solubilité s, la solution est saturée et contient un dépôt de masse m_dépôt = (Cm - s) * Vs",
        "Demi-équation anodique (électrolyse NaCl) : 2 Cl- -> Cl2 + 2 e-",
        "Demi-équation cathodique (électrolyse NaCl) : 2 H2O + 2 e- -> 2 OH- + H2",
        "Équation globale de l'électrolyse de la saumure : 2 H2O + 2 Cl- -> H2 + Cl2 + 2 OH-",
        "Bilan molaire électrolyse : n(NaOH)_produit = n(NaCl)_consommé = 2 * n(Cl2) = 2 * n(H2)"
      ],
      methods: [
        "Calculer les concentrations d'une solution préparée par dissolution : 1. Calculer la masse molaire M du soluté. 2. Calculer la quantité de matière dissoute n = m / M. 3. Calculer la concentration molaire de la solution C = n / Vs (en convertissant Vs en litres). 4. Calculer la concentration massique Cm = m / Vs ou Cm = M * C.",
        "Déterminer la concentration des ions en solution : 1. Écrire l'équation de dissociation ionique dans l'eau (ex: CaCl2 -> Ca2+ + 2 Cl-). 2. Utiliser les coefficients de l'équation : [Ca2+] = C et [Cl-] = 2*C. 3. Vérifier l'électroneutralité : 2*[Ca2+] = [Cl-] car 2 * C = 2*C.",
        "Vérifier si une solution est saturée : 1. Calculer la concentration massique Cm = m / Vs de la solution préparée. 2. Comparer à la valeur de la solubilité s à la température considérée. 3. Si Cm <= s, la solution est non saturée (tout est dissous). 4. Si Cm > s, la solution est saturée et il se forme un dépôt de soluté non dissous.",
        "Exploiter l'électrolyse d'une solution de NaCl : 1. Écrire les demi-équations électroniques : 2 Cl- -> Cl2 + 2 e- à l'anode, et 2 H2O + 2 e- -> 2 OH- + H2 à la cathode. 2. En déduire l'équation-bilan globale : 2 H2O + 2 Cl- -> H2 + Cl2 + 2 OH-. 3. Appliquer le bilan molaire : n(NaOH) = n(NaCl), d'où m(NaOH) = (m(NaCl) / M(NaCl)) * M(NaOH)."
      ]
    },

    // =========================================================================
    // LEÇON 10 : TESTS D’IDENTIFICATION DE QUELQUES IONS (THÈME 4)
    // =========================================================================
    {
      id: "ch10",
      lessonNumber: 10,
      title: "Tests d’identification de quelques ions",
      pages: [1, 8],
      topics: [
        "Couleur propre des ions hydratés en solution : ion cuivre II (Cu2+) confère une couleur bleue ; ion fer II (Fe2+) confère une couleur vert pâle ; attention : la couleur seule ne suffit pas à prouver avec certitude la présence de l'ion, des tests chimiques spécifiques sont indispensables",
        "Principe des tests de précipitation : ajout de quelques gouttes d'une solution réactif contenant un ion spécifique réagissant avec l'ion à caractériser pour former un précipité solide insoluble de couleur caractéristique",
        "Identification du cation cuivre II (Cu2+) : ajout d'hydroxyde de sodium (soude Na+ + OH-) produisant un précipité bleu d'hydroxyde de cuivre II Cu(OH)2 : Cu2+ + 2 OH- -> Cu(OH)2 ; test à la flamme : coloration verte",
        "Identification du cation fer II (Fe2+) : ajout de soude produisant un précipité vert pâle d'hydroxyde de fer II Fe(OH)2 : Fe2+ + 2 OH- -> Fe(OH)2",
        "Identification du cation fer III (Fe3+) : ajout de soude produisant un précipité rouge rouille d'hydroxyde de fer III Fe(OH)3 : Fe3+ + 3 OH- -> Fe(OH)3",
        "Identification du cation argent (Ag+) : ajout d'ions chlorure Cl- produisant un précipité blanc de chlorure d'argent AgCl qui noircit à la lumière : Ag+ + Cl- -> AgCl",
        "Identification de l'anion chlorure (Cl-) : ajout d'une solution de nitrate d'argent (Ag+ + NO3-) produisant un précipité blanc de chlorure d'argent AgCl qui noircit à la lumière : Ag+ + Cl- -> AgCl",
        "Identification de l'anion sulfate (SO4 2-) : ajout d'une solution de chlorure de baryum (Ba2+ + 2 Cl-) ou de nitrate de baryum produisant un précipité blanc de sulfate de baryum BaSO4 qui ne noircit pas à la lumière : Ba2+ + SO4 2- -> BaSO4",
        "Identification de l'anion carbonate (CO3 2-) : test avec dégagement gazeux ; addition d'un acide fort (ions H3O+ issus de HCl) produisant une vive effervescence avec dégagement de dioxyde de carbone CO2 qui trouble l'eau de chaux : CO3 2- + 2 H3O+ -> CO2 + 3 H2O",
        "Ions spectateurs : ions présents dans le mélange réactionnel qui ne participent pas à la réaction chimique et dont la quantité de matière reste constante (ex: Na+, NO3-, Cl- non précipités)",
        "Tests à la flamme des ions métalliques : introduction de l'échantillon sur fil métallique dans une flamme très chaude ; Sodium Na+ (jaune intense) ; Cuivre Cu2+ (vert) ; Potassium K+ (violet) ; Calcium Ca2+ (rouge brique)",
        "Calculs stœchiométriques de précipitation totale : n(réactif précipitant) = n(ion à précipiter) selon les coefficients de l'équation-bilan (ex: pour Ba2+ + SO4 2- -> BaSO4, à l'équivalence n(Ba2+) = n(SO4 2-) => C1 * V1 = C2 * V2)"
      ],
      formulas: [
        "Précipitation du cuivre II : Cu2+ + 2 OH- -> Cu(OH)2 (précipité bleu)",
        "Précipitation du fer II : Fe2+ + 2 OH- -> Fe(OH)2 (précipité vert pâle)",
        "Précipitation du fer III : Fe3+ + 3 OH- -> Fe(OH)3 (précipité rouge rouille)",
        "Précipitation des ions chlorure et argent : Ag+ + Cl- -> AgCl (précipité blanc qui noircit à la lumière)",
        "Précipitation des ions sulfate : Ba2+ + SO4 2- -> BaSO4 (précipité blanc inaltérable à la lumière)",
        "Réaction d'identification des ions carbonate : CO3 2- + 2 H3O+ -> CO2 + 3 H2O (CO2 trouble l'eau de chaux)",
        "Condition de précipitation totale 1:1 : n(Ba2+) = n(SO4 2-) <=> C(Ba2+) * V(Ba2+) = C(SO4 2-) * V(SO4 2-)",
        "Volume de réactif pour précipitation totale : V2 = (C1 * V1) / C2"
      ],
      methods: [
        "Identifier un ion inconnu en solution à partir d'observations expérimentales : 1. Si l'ajout de soude donne un précipité bleu -> l'ion est Cu2+ ; si vert pâle -> l'ion est Fe2+ ; si rouge rouille -> l'ion est Fe3+. 2. Si l'ajout de nitrate d'argent donne un précipité blanc qui noircit à la lumière -> l'ion chlorure Cl- est présent. 3. Si l'ajout de chlorure de baryum donne un précipité blanc qui ne noircit pas -> l'ion sulfate SO4 2- est présent. 4. Si l'ajout d'acide chlorhydrique provoque un dégagement gazeux troublant l'eau de chaux -> l'ion carbonate CO3 2- est présent.",
        "Écrire l'équation-bilan d'une réaction de précipitation : 1. Identifier l'ion à tester et l'ion réactif actif fourni par la solution ajoutée. 2. Écrire le cation en premier et l'anion en second à gauche. 3. Ajuster les coefficients stœchiométriques pour assurer l'électroneutralité du composé solide précipité à droite (ex: Cu2+ + 2 OH- -> Cu(OH)2 ; Ba2+ + SO4 2- -> BaSO4). 4. Exclure les ions spectateurs qui ne réagissent pas.",
        "Calculer le volume de réactif nécessaire pour précipiter totalement un ion : 1. Écrire l'équation-bilan de précipitation (ex: Ba2+ + SO4 2- -> BaSO4). 2. Établir l'égalité des quantités de matière à la stœchiométrie : n(Ba2+) = n(SO4 2-). 3. Remplacer par C2 * V2 = C1 * V1. 4. Exprimer et calculer le volume cherché : V2 = (C1 * V1) / C2."
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

// Alias pour la Seconde A dont le programme officiel de Physique-Chimie partage ce socle
export const pc2ndeAKnowledgeBase = {
  ...pc2ndeCKnowledgeBase,
  name: "LE PROF — Knowledge Base Physique-Chimie 2nde A",
  level: "Seconde A"
} as const;

/**
 * Normalise un texte en jetons de mots-clés sans accents ni ponctuation
 */
function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(word => word.length >= 3);
}

/**
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné
 * Scoring par correspondance de mots-clés pondéré entre la requête et le contenu du chapitre
 */
export function findPc2ndeCChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return pc2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = pc2ndeCKnowledgeBase.chapters.map(chapter => {
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
    : (pc2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

export const findPc2ndeAChapters = findPc2ndeCChapters;

/**
 * Construit le contexte texte officiel à fournir au solveur local ou à l'explicateur
 */
export function buildPc2ndeCContext(query: string): string {
  const chapters = findPc2ndeCChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Niveau : ${pc2ndeCKnowledgeBase.level})\nSource : ${pc2ndeCKnowledgeBase.source}`;
    const topics = `#### NOTIONS CLÉS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES ET LOIS OFFICIELLES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### MÉTHODES DE RÉSOLUTION PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE PHYSIQUE-CHIMIE SECONDE C (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}

export function buildPc2ndeAContext(query: string): string {
  const chapters = findPc2ndeAChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Niveau : ${pc2ndeAKnowledgeBase.level})\nSource : ${pc2ndeAKnowledgeBase.source}`;
    const topics = `#### NOTIONS CLÉS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES ET LOIS OFFICIELLES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### MÉTHODES DE RÉSOLUTION PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE PHYSIQUE-CHIMIE SECONDE A (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
