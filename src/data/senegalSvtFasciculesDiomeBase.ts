/**
 * BASE DE DONNÉES PÉDAGOGIQUE OFFICIELLE : FASCICULES SVT SÉNÉGAL (1ère S2 & Terminale S1-S2)
 * 
 * Auteurs :
 * - M. Toffène DIOME : Lycée mixte de Ngane SAER (Kaolack)
 * - M. Mansour DIEYE : Lycée Ibrahima DIOUF (Kaolack)
 * - M. Mbaye DIOME : Lycée Diakhao-Sine / Lycée de Diofior (Fatick)
 * 
 * Ce corpus intègre l'intégralité des séries d'exercices, devoirs surveillés et corrigés
 * officiels conformes aux programmes nationaux du Sénégal et des pays de l'UEMOA.
 */

export interface SvtExerciseCorpusItem {
  id: string;
  fascicule: '1ere_s2' | 'tle_s1_s2';
  fasciculeLabel: string;
  theme: string;
  themeOrder: number;
  exerciseNumber: number | string;
  title: string;
  sourceOrigin: string;
  enonce: string;
  corrige: string;
  competences: string[];
  keywords: string[];
}

export const SENEGAL_SVT_FASCICULES_CORPUS: SvtExerciseCorpusItem[] = [
  // =========================================================================
  // FASCICULE 1ÈRE S2 — SÉRIE 1 : STRUCTURE ET ULTRASTRUCTURE CELLULAIRE
  // =========================================================================
  {
    id: 'svt-1s2-serie1-ex1',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Structure et Ultrastructure Cellulaire',
    themeOrder: 1,
    exerciseNumber: 1,
    title: 'Analyse d\'une ultrastructure cellulaire observée au microscope',
    sourceOrigin: 'Série d\'exercice n°1 (Structure et Ultrastructure) 1ère S2 — Lycée Mixte de Ngane SAER',
    enonce: `La figure 1 représente le schéma d’une cellule observée au microscope.
1) Annotez et donnez un titre à ce schéma.
2) De quel type de cellule s’agit-t-il ? Justifiez votre réponse.
3) Avec quel type de microscope a-t-on pu l’observer ? Justifiez votre réponse.`,
    corrige: `1) Annotation du schéma :
1 : membrane plasmique ; 2 : membrane nucléaire ; 3 : nucléole ; 4 : chromatine (nucléoplasme) ; 5 : pore nucléaire ; 6 : vésicules golgiennes ; 7 : saccules golgiennes (dictyosome) ; 8 : mitochondrie ; 9 : Réticulum Endoplasmique Granuleux (REG) ; 11 : cytoplasme (hyaloplasme).
Titre : Schéma de l'ultrastructure d'une cellule animale observée au microscope électronique.

2) Type de cellule :
Il s’agit d’une cellule animale.
Justification : La cellule est délimitée uniquement par une membrane plasmique souple non entourée d’une paroi pectocellulosique rigide. De plus, elle ne présente pas de chloroplastes et contient des vacuoles de très petite taille.

3) Type de microscope :
On a utilisé un microscope électronique (à transmission).
Justification : L'observation révèle l'ultrastructure fine des organites intracellulaires (double membrane nucléaire avec pores, saccules de l'appareil de Golgi, crêtes mitochondriales, REG), détails invisibles au microscope photonique ordinaire.`,
    competences: ['Identification des organites', 'Distinction cellule animale / végétale', 'Pouvoir de résolution microscopique'],
    keywords: ['ultrastructure', 'cellule animale', 'microscope électronique', 'mitochondrie', 'REG', 'dictyosome']
  },
  {
    id: 'svt-1s2-serie1-ex2',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Structure et Ultrastructure Cellulaire',
    themeOrder: 1,
    exerciseNumber: 2,
    title: 'Mesure de dimensions cellulaires et calcul de taille réelle',
    sourceOrigin: 'Série d\'exercice n°1 (Structure et Ultrastructure) 1ère S2',
    enonce: `Le document ci-dessous indique la photographie d’un tissu observé au microscope au grossissement G = 1800.
1- Quel est le microscope utilisé ?
2- Quelle est la nature de ce tissu ? Justifier votre réponse.
3- Mesurer en mètre (m) la taille de la cellule cochée (le périmètre).
4- Calculer en micromètre (μm) la taille réelle de cette cellule.
5- Faire un schéma légendé de cette cellule cochée.`,
    corrige: `1- Le microscope utilisé est le microscope optique (ou photonique).

2- Nature du tissu : C’est un tissu végétal.
Justification : Présence d'une paroi pectocellulosique épaisse entourant chaque cellule et forme polyédrique géométrique bien délimitée des cellules jointives.

3- Mesure de la taille apparente (périmètre) :
Somme des côtés mesurés sur le document : 5 + 1 + 0,9 + 5,4 = 12,3 cm = 0,123 m.
Périmètre = 0,123 m.

4- Calcul de la taille réelle en micromètres (μm) :
Formule : Grossissement G = Taille apparente / Taille réelle
Taille réelle = Taille apparente / G
Taille apparente = 0,123 m = 123 000 μm
Taille réelle = 123 000 / 1800 = 68,33 μm.

5- Schéma légendé : Doit faire apparaître la paroi pectocellulosique, la membrane plasmique plaquée contre la paroi, le cytoplasme périphérique, la grande vacuole centrale et le noyau.`,
    competences: ['Calculs d\'échelle et grossissement', 'Cytologie végétale'],
    keywords: ['périmètre cellulaire', 'taille réelle', 'grossissement', 'micromètre', 'paroi pectocellulosique']
  },
  {
    id: 'svt-1s2-serie1-ex3',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Structure et Ultrastructure Cellulaire',
    themeOrder: 1,
    exerciseNumber: 3,
    title: 'Ultrastructure de la cellule végétale au MET',
    sourceOrigin: 'Série d\'exercice n°1 1ère S2',
    enonce: `La figure 1 représente une cellule observée au microscope électronique :
1- S’agit-il d’une cellule animale ou d’une cellule végétale ? Justifier.
2- Annoter le schéma en attribuant à chaque numéro le nom de l’élément correspondant (1 à 13).
3- Rappeler le rôle de l’élément 13 (Noyau).`,
    corrige: `1- C’est une cellule végétale.
Justification : Présence de la paroi pectocellulosique, de chloroplastes et de grandes vacuoles volumineuses.

2- Annotation complète :
1 = Paroi pectocellulosique
2 = Membrane plasmique
3 = Vacuole
4 = REG (Réticulum Endoplasmique Granuleux)
5 = Chloroplaste
6 = Dictyosome (Appareil de Golgi)
7 = Mitochondrie
8 = Cytoplasme (cytosol)
9 = Nucléole
10 = Hétérochromatine
11 = Euchromatine
12 = Membrane nucléaire
13 = Noyau

3- Rôle du noyau (élément 13) :
Le noyau est le centre régulateur de la vie cellulaire. Il renferme l'information génétique (ADN) sous forme de chromatine, dirige la synthèse des protéines et pilote la division cellulaire (mitose).`,
    competences: ['Ultrastructure végétale', 'Fonction du noyau'],
    keywords: ['cellule végétale', 'chloroplaste', 'vacuole', 'noyau', 'chromatine']
  },
  {
    id: 'svt-1s2-serie1-ex4',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Structure et Ultrastructure Cellulaire',
    themeOrder: 1,
    exerciseNumber: 4,
    title: 'Complétion de concepts fondamentaux de biologie cellulaire',
    sourceOrigin: 'Série d\'exercice n°1 1ère S2',
    enonce: `Complétez les phrases par les mots qui conviennent :
1. Les réactions de photosynthèse se déroulent à l’intérieur du ............................
2. Une cellule ............................ possède un véritable noyau.
3. Le ............................ est constitué de neuf triplets de microtubules, structure propre à la ............................
4. Grâce à la dégradation de l’............................, la mitochondrie est capable de libérer de l’énergie.`,
    corrige: `1. Les réactions de photosynthèse se déroulent à l’intérieur du chloroplaste.
2. Une cellule eucaryote possède un véritable noyau.
3. Le centriole (ou centrosome) est constitué de neuf triplets de microtubules, structure propre à la cellule animale.
4. Grâce à la dégradation de l’ATP (ou du pyruvate/glucose), la mitochondrie est capable de libérer de l’énergie.`,
    competences: ['Définitions et terminologie cellulaire'],
    keywords: ['chloroplaste', 'eucaryote', 'centriole', 'mitochondrie', 'ATP']
  },

  // =========================================================================
  // FASCICULE 1ÈRE S2 — SÉRIE 2 : ÉCHANGES CELLULAIRES ET OSMOSE
  // =========================================================================
  {
    id: 'svt-1s2-serie2-ex1',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Échanges Cellulaires et Phénomènes Osmotiques',
    themeOrder: 2,
    exerciseNumber: 1,
    title: 'Cinétique d\'échange hydrique sur cylindres de pomme de terre',
    sourceOrigin: 'Série d’exercices sur les échanges cellulaires : 1ère S2 — MM. Diome & Dieye',
    enonce: `On place des cylindres de pomme de terre de 40 mm de long dans deux solutions S1 et S2. Des mesures effectuées toutes les minutes ont permis de tracer les courbes du document.
1- Analyser ces deux courbes de façon méthodique.
2- Qu’est-ce qui serait lié à la variation de longueur de ces cylindres ?
3- Expliquer les variations de longueur des cylindres dans les solutions S1 et S2.
4- Dessiner une cellule dans les solutions S1 et S2 au temps t2.`,
    corrige: `1- Analyse méthodique des courbes :
- Pour la solution S1 : De t0 à t1, la longueur des cylindres diminue de 40 mm à 35,5 mm. De t1 à t2, la longueur réaugmente pour passer de 35,5 mm à 40 mm et reste stable à cette valeur.
- Pour la solution S2 : De t0 à t1, la longueur diminue de 40 mm à 34,5 mm. Cette longueur reste ensuite constante à 34,5 mm durant tout le reste de l’expérience.

2- Origine de la variation :
La variation de longueur est liée aux flux hydriques nets d’eau (osmose) et aux échanges de substances dissoutes (diffusion/dialyse) à travers les membranes cellulaires.

3- Explication physiologique :
- De t0 à t1, la diminution de longueur dans S1 et S2 est due à une perte d’eau par exosmose : le milieu externe est hypertonique par rapport au suc vacuolaire intracellulaire, les cellules deviennent plasmolysées.
- Dans S1, la réaugmentation de longueur s'explique par la pénétration (diffusion) du soluté de S1 dans les cellules (soluté dialysable). La concentration intracellulaire augmentant, l'eau rentre à nouveau par endosmose : c'est le phénomène de déplasmolyse spontanée.
- Dans S2, la longueur reste réduite car le soluté n'est pas dialysable (imperméabilité membranaire au soluté) : la plasmolyse demeure permanente.

4- État cellulaire au temps t2 :
- Dans S1 à t2 : cellule revenue à l'état normal / turgescent (vacuole volumineuse, membrane plaquée à la paroi).
- Dans S2 à t2 : cellule à l'état plasmolysé (vacuole rétractée, cytoplasme décollé de la paroi pectocellulosique).`,
    competences: ['Analyse de courbes d\'osmose', 'Mécanisme de plasmolyse et déplasmolyse'],
    keywords: ['pomme de terre', 'longueur', 'exosmose', 'déplasmolyse', 'soluté dialysable']
  },
  {
    id: 'svt-1s2-serie2-ex2',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Échanges Cellulaires et Phénomènes Osmotiques',
    themeOrder: 2,
    exerciseNumber: 2,
    title: 'Perméabilité différentielle aux solutés (Saccharose, Formamide, Acétamide)',
    sourceOrigin: 'Série d’exercices sur les échanges cellulaires : 1ère S2',
    enonce: `On dispose de trois fragments d’épiderme de pétale de glaïeul :
A. Le premier fragment, après passage dans une solution de saccharose à 0,8 mol/L pendant 3 min, présente des cellules plasmolysées. Cet état persiste.
B. Le deuxième fragment, après passage dans le saccharose, est plongé dans du formamide à 2,5 mol/L : les cellules présentent une déplasmolyse rapide.
C. Le troisième fragment, après passage dans le saccharose, est plongé dans de l’acétamide à 2,5 mol/L : les cellules présentent une déplasmolyse très lente.
1. Expliquer les résultats de chaque expérience.
2. Qualifier, arguments à l’appui, la perméabilité cellulaire aux différentes substances dissoutes.`,
    corrige: `1. Explication détaillée :
- Expérience A (Saccharose) : La solution de saccharose à 0,8 mol/L est hypertonique par rapport au suc vacuolaire. Les cellules perdent de l’eau par osmose. La plasmolyse persiste indéfiniment car la membrane est totalement imperméable au saccharose (grosse molécule non dialysable).
- Expérience B (Formamide 2,5 mol/L) : Bien que la solution soit initialement hyperosmotique, les cellules se déplasmolysent rapidement car le formamide (petite molécule très liposoluble) pénètre massivement et rapidement à travers la membrane. La pression osmotique interne dépasse alors la pression externe, provoquant un appel d'eau par endosmose.
- Expérience C (Acétamide 2,5 mol/L) : L'acétamide traverse également la membrane plasmique, mais avec une cinétique beaucoup plus lente en raison d'une masse molaire plus élevée que le formamide, d'où une déplasmolyse lente.

2. Qualification de la perméabilité :
- Perméabilité sélective : la membrane laisse passer certaines substances (formamide, acétamide) et en bloque d'autres (saccharose).
- Perméabilité différentielle : les solutés dialysables traversent la membrane à des vitesses différentes (vitesse formamide > vitesse acétamide).`,
    competences: ['Perméabilité sélective et différentielle', 'Masse moléculaire et perméation'],
    keywords: ['glaïeul', 'saccharose', 'formamide', 'acétamide', 'déplasmolyse']
  },
  {
    id: 'svt-1s2-serie2-ex3',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Échanges Cellulaires et Phénomènes Osmotiques',
    themeOrder: 2,
    exerciseNumber: 3,
    title: 'Loi de Van \'t Hoff sur NaCl et comportement des hématies',
    sourceOrigin: 'Série d’exercices sur les échanges cellulaires : 1ère S2',
    enonce: `Soient trois verres de montre contenant des solutions de sel (NaCl) à 27°C :
- Verre 1 : Cm = 5 g/L
- Verre 2 : Cm = 10 g/L
- Verre 3 : Cm = 13 g/L
On trempe dans chaque verre un fragment d’épiderme interne de bulbe d’oignon dont la pression osmotique intracellulaire est Po = 8,48 atm.
1. Calculez la pression osmotique dans chaque verre (R = 0,082, M(NaCl) = 58 g/mol, sel entièrement dissocié).
2. Dites comment sont les solutions dans chaque verre par rapport au milieu intracellulaire.
3. Décrivez l’état des cellules dans chaque verre.
Si l’on place des hématies à concentration intracellulaire 15 g/L dans le verre 1 :
4. Qu’est-ce qui va se passer ?
5. Ce phénomène se réalise-t-il chez les cellules végétales ? Pourquoi ?`,
    corrige: `1. Calcul des pressions osmotiques (Loi de Van 't Hoff) :
Formule : Po = n · i · R · T · C = n · i · R · T · (Cm / M)
Avec T = 27 + 273 = 300 K ; NaCl -> Na+ + Cl- donc i = 2 ; M = 58 g/mol.
- Verre 1 (5 g/L) : Po = 2 x 0,082 x 300 x (5 / 58) = 4,24 atm.
- Verre 2 (10 g/L) : Po = 2 x 0,082 x 300 x (10 / 58) = 8,48 atm.
- Verre 3 (13 g/L) : Po = 2 x 0,082 x 300 x (13 / 58) = 11,02 atm.

2. Tonicité des solutions par rapport au suc vacuolaire (Po = 8,48 atm) :
- Verre 1 (4,24 atm < 8,48 atm) : Solution hypotonique.
- Verre 2 (8,48 atm = 8,48 atm) : Solution isotonique.
- Verre 3 (11,02 atm > 8,48 atm) : Solution hypertonique.

3. État des cellules végétales :
- Verre 1 : État de turgescence (entrée d'eau par endosmose).
- Verre 2 : État normal / équilibre osmotique (échanges nets nuls).
- Verre 3 : État de plasmolyse (sortie d'eau par exosmose).

4. Comportement des hématies dans le verre 1 :
La concentration interne des hématies (15 g/L, Po ~ 12,7 atm) est bien supérieure à celle du verre 1 (5 g/L, Po = 4,24 atm). Le milieu est fortement hypotonique : l'eau pénètre massivement par endosmose, les globules rouges gonflent jusqu'à l'éclatement : c'est l'hémolyse.

5. Comparaison avec la cellule végétale :
L'éclatement ne se produit pas chez la cellule végétale car elle est entourée d'une paroi pectocellulosique rigide et solide qui exerce une contre-pression mécanique (pression de turgescence) bloquant l'entrée infinie d'eau.`,
    competences: ['Application de Van \'t Hoff', 'Tonicité', 'Hémolyse vs turgescence'],
    keywords: ['NaCl', 'pression osmotique', 'hémolyse', 'paroi pectocellulosique', 'isotonie']
  },
  {
    id: 'svt-1s2-serie2-ex4',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Échanges Cellulaires et Phénomènes Osmotiques',
    themeOrder: 2,
    exerciseNumber: 4,
    title: 'Détermination expérimentale de la concentration isotonique par dénombrement',
    sourceOrigin: 'Série d’exercices sur les échanges cellulaires : 1ère S2',
    enonce: `Des fragments d’épiderme d’oignon sont placés dans 10 solutions de saccharose de 0,1 à 1 mol/L à 17°C. Sur 25 cellules observées par milieu, on compte les cellules plasmolysées :
- 0,1 M : 0 cell. plasmolysées (0%)
- 0,2 M : 0 cell. plasmolysées (0%)
- 0,3 M : 5 cell. plasmolysées (20%)
- 0,4 M : 18 cell. plasmolysées (72%)
- 0,5 M et au-delà : 25 cell. plasmolysées (100%)
1- Construire la courbe du % de cellules plasmolysées en fonction de la concentration.
2- On considère que lorsque la solution est isotonique, 50% des cellules sont plasmolysées. Déterminer graphiquement cette concentration isotonique.
3- Calculer la pression osmotique des cellules en Pascal (1 atm = 10^5 Pa).
4- Quelle solution de NaCl (entièrement dissocié) serait isotonique à ces cellules ?`,
    corrige: `1- Tracé de la courbe :
Abscisse : Concentration en saccharose (mol/L) ; Ordonnée : % de cellules plasmolysées (0 à 100%).
La courbe est sigmoïde : reste à 0% jusqu'à 0,2 M, croît rapidement de 0,2 à 0,5 M, puis atteint le plateau de 100% à partir de 0,5 M.

2- Détermination graphique de C_isotonique :
En projetant l'ordonnée 50% sur la courbe puis sur l'axe des abscisses, on lit :
C_isotonique = 0,35 mol/L (ou 0,3 mol/L selon l'interpolation linéaire).

3- Calcul de la pression osmotique en Pascals :
Po = n · i · R · T · C
Avec T = 17 + 273 = 290 K ; saccharose non dissocié (i = 1) ; R = 0,082 ; C = 0,3 mol/L :
Po = 1 x 0,082 x 290 x 0,3 = 7,134 atm (soit 7,38 atm pour T = 300 K).
En Pascals (avec 1 atm = 10^5 Pa) :
Po = 7,38 x 10^5 Pascals.

4- Solution de NaCl isotonique :
À l'isotonie : Po(saccharose) = Po(NaCl)
1 x R x T x C(saccharose) = 2 x R x T x C(NaCl)
C(NaCl) = C(saccharose) / 2 = 0,3 / 2 = 0,15 mol/L.`,
    competences: ['Graphique sigmoïde de plasmolyse', 'Calculs en Pascals', 'Équivalence osmotique'],
    keywords: ['pourcentage de plasmolyse', 'concentration isotonique', 'Pascals', 'NaCl']
  },

  // =========================================================================
  // FASCICULE 1ÈRE S2 — SÉRIE 3 : DIVISION CELLULAIRE (MITOSE)
  // =========================================================================
  {
    id: 'svt-1s2-serie3-ex1',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Division Cellulaire et Cycle Cellulaire',
    themeOrder: 3,
    exerciseNumber: 1,
    title: 'Cinétique de la quantité d\'ADN par cellule et prolifération cellulaire',
    sourceOrigin: 'Série d’exercices sur la division cellulaire : première S2 (2013-2014)',
    enonce: `Dosage de la quantité d’ADN contenue dans le noyau d’une cellule en culture synchrone :
Temps (h) : 0h(5UA) -> 1h(5) -> 2h(2,5) -> 6h(2,5) -> 10h(2,5) -> 11h(3) -> 13h(3,9) -> 16h(4,9) -> 18h(5) -> 21h(5) -> 22h(2,5) -> 24h(2,5) -> 29h(2,5).
1. Représentez graphiquement la variation de la quantité d’ADN au cours du temps.
2. Indiquez sur le graphique les différentes phases du cycle cellulaire. Déterminez sa durée (G1 = 8h, G2 = 3h).
3. Évaluez le nombre de cellules et la quantité d’ADN dans le milieu à la 58e heure (culture non limitée, stock initial = 1·10^3 UA).`,
    corrige: `1. Représentation graphique :
Graphique par paliers : plateau à 2,5 UA de 2h à 10h (G1), phase ascendante de 10h à 18h (phase S : duplication de 2,5 à 5 UA), plateau à 5 UA de 18h à 21h (G2), puis chute verticale de 5 à 2,5 UA à 22h (Mitose M : anaphase/télophase).

2. Phases et durée du cycle cellulaire :
- Phase G1 (post-mitotique) : 8 heures (de 2h à 10h)
- Phase S (synthèse/réplication de l'ADN) : 8 heures (de 10h à 18h)
- Phase G2 (pré-mitotique) : 3 heures (de 18h à 21h)
- Mitose M : 1 heure (de 21h à 22h)
Durée totale d'un cycle = 8 + 8 + 3 + 1 = 20 heures (ou temps entre 2 mitoses successives : 22h - 2h = 20h).

3. Évaluation à la 58e heure :
- Nombre de cellules initiales à t0 : Quantité totale = 1·10^3 UA. À t0, chaque cellule a 5 UA d'ADN (fin de G2).
  Nombre initial = 1 000 / 5 = 200 cellules.
- À t = 58h : Le temps écoulé depuis la première mitose (t=2h) est 58 - 2 = 56h.
  Nombre de cycles complets = 56h / 20h = 2,8 cycles, soit 3 mitoses accomplies (à 2h, 22h et 42h).
  Chaque cellule s'étant divisée 3 fois : chaque cellule initiale donne 2^3 = 8 cellules filles.
  Nombre total de cellules à la 58e heure = 200 x 8 = 1 600 cellules.
- Quantité d'ADN totale à la 58e heure :
  À t = 58h (soit 16h après la 3e mitose de 42h), les cellules sont en fin de phase S / début G2, contenant 5 UA chacune :
  Quantité totale = 1 600 x 5 UA = 8·10^3 UA (ou par règle de trois : 200 cell -> 10^3 UA, donc 1600 cell -> 8·10^3 UA).`,
    competences: ['Cycle cellulaire', 'Duplication de l\'ADN', 'Calculs exponentiels de prolifération'],
    keywords: ['quantité d\'ADN', 'phase S', 'G1', 'G2', 'mitose', 'cycle cellulaire']
  },
  {
    id: 'svt-1s2-serie3-ex4',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Division Cellulaire et Cycle Cellulaire',
    themeOrder: 3,
    exerciseNumber: 4,
    title: 'Inhibiteurs du cycle cellulaire (BrdU et Cystéamine)',
    sourceOrigin: 'Série d’exercices sur la division cellulaire : 1ère S2',
    enonce: `1) On dose l’ADN au cours de divisions cellulaires. Après la 2e division, on injecte de la 5-bromodésoxyuridine (BrdU) : la quantité d'ADN reste bloquée au palier Q sans se dédoubler en 2Q.
a) Combien de cycles cellulaires complets observe-t-on avant l'injection ?
b) Quel est l'effet de la 5-bromodésoxyuridine sur le cycle ? Justifiez.
2) On traite ensuite les cellules avec de la cystéamine : on observe au microscope des cellules binucléées ou plurinucléées.
Quel est l'effet de la cystéamine sur la division cellulaire ? Justifiez.`,
    corrige: `1) a) On compte 2 cycles cellulaires complets avant l'injection.
b) Effet de la 5-bromodésoxyuridine (BrdU) :
La BrdU est un analogue de la thymine qui s'incorpore dans l'ADN et bloque la réplication. La quantité d'ADN ne double plus : les cellules restent bloquées en phase G1 et ne peuvent pas accomplir la phase S.

2) Effet de la Cystéamine :
La cystéamine inhibe la cytodiérèse (séparation du cytoplasme et formation de la cloison médiane / sillon de division) sans affecter la caryocinèse (division du noyau). Les mitoses se poursuivent au niveau nucléaire, aboutissant à des cellules géantes plurinucléées (contenant plusieurs noyaux).`,
    competences: ['Pharmacologie cellulaire', 'Étapes de la mitose', 'Cytodiérèse vs caryocinèse'],
    keywords: ['BrdU', 'cystéamine', 'cytodiérèse', 'plurinucléée', 'réplication']
  },

  // =========================================================================
  // FASCICULE 1ÈRE S2 — SÉRIE 4 : CHROMOSOMES ET SYNTHÈSE DES PROTÉINES
  // =========================================================================
  {
    id: 'svt-1s2-serie4-ex2',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Génétique Moléculaire et Synthèse des Protéines',
    themeOrder: 4,
    exerciseNumber: 2,
    title: 'L\'ocytocine : transcription, traduction et typologie des mutations',
    sourceOrigin: 'Série d’exercices sur les chromosomes et la synthèse des protéines : 1ère S2',
    enonce: `Brin non codant (transcrit) du gène de l’ocytocine :
3' - TGCTACATCCAGAACTGCCCCCTGGGC - 5' (noté dans le sens de lecture).
1- Trouver la séquence des acides aminés de l'ocytocine à l'aide du code génétique.
2- Quelle mutation rend compte du remplacement de l’isoleucine par une leucine ?
3- Une mutation entraîne un arrêt prématuré après 4 acides aminés. Quelle mutation prédire ?
4- Conséquences d'une délétion de la 7e paire de bases.
5- Deux délétions donnent : Cys-Ser-Ser-Arg-Leu-Pro-Pro-Gly. Identifiez les nucléotides perdus.`,
    corrige: `1- Séquence des acides aminés :
- Brin transcrit : TGC TAC ATC CAG AAC TGC CCC CTG GGC
- ARNm complémentaire : ACG AUG UAG GUC UUG ACG GGG GAC CCG ...
(Si la séquence donnée est le brin codant : TGC TAC ATC CAG AAC TGC CCC CTG GGC -> ARNm : UGC UAC AUC CAG AAC UGC CCC CUG GGC)
Traduction correspondante : Cys - Tyr - Ile - Gln - Asn - Cys - Pro - Leu - Gly.

2- Remplacement de l'Isoleucine (Ile : AUC) par la Leucine (Leu : CUC ou UUA) :
Mutation ponctuelle par substitution au 7e nucléotide du brin codant : l'Adénine (A) est remplacée par une Cytosine (C), transformant le codon AUC en CUC.

3- Arrêt prématuré après 4 acides aminés :
Le 5e codon (Asn : AAC) doit être muté en codon STOP (UAA ou UAG).
Sur le brin codant, AAC devient TAA ou TAG par substitution d'une adénine en thymine.

4- Délétion de la 7e paire de base :
Provoque un décalage du cadre de lecture (mutation frameshift) modifiant tous les acides aminés en aval à partir de la position 3.

5- Identification des nucléotides perdus :
Les délétions des adénines en position 5 et 14 modifient le cadre de lecture pour produire exactement la séquence peptidique mutée Cys-Ser-Ser-Arg-Leu-Pro-Pro-Gly.`,
    competences: ['Transcription', 'Traduction', 'Code génétique', 'Mutations'],
    keywords: ['ocytocine', 'ARNm', 'substitution', 'délétion', 'codon stop', 'frameshift']
  },
  {
    id: 'svt-1s2-serie4-ex5',
    fascicule: '1ere_s2',
    fasciculeLabel: 'SVT 1ère S2 (Sénégal)',
    theme: 'Génétique Moléculaire et Synthèse des Protéines',
    themeOrder: 4,
    exerciseNumber: 5,
    title: 'Gène CFTR de la mucoviscidose et délétion de la phénylalanine 508',
    sourceOrigin: 'Série d’exercices sur les chromosomes et la synthèse des protéines : 1ère S2',
    enonce: `Portion du brin non transcrit (codant) du gène CFTR normal (début à l'acide aminé 503) :
... AAA GAA AAT ATC ATC TTT GGT GTT TCC TAT ...
Portion du gène muté :
... AAA GAA AAT ATC ATT GGT GTT TCC TAT ...
1/ Déterminer la séquence peptidique normale en expliquant la méthode.
2/ Noter les modifications nucléotidiques de la molécule d’ADN.
3/ Comparer les séquences protéiques de la CFTR normale et de la CFTR mutée.`,
    corrige: `1/ Séquence peptidique normale :
- Méthode : Le brin fourni étant le brin non transcrit (codant), l'ARNm lui est rigoureusement identique en remplaçant T par U.
- ARNm : ... AAA GAA AAU AUC AUC UUU GGU GUU UCC UAU ...
- Séquence d'acides aminés : Lys (503) - Glu (504) - Asn (505) - Ile (506) - Ile (507) - Phe (508) - Gly (509) - Val (510) - Ser (511) - Tyr (512).

2/ Modifications de l’ADN :
Alignement des triplets :
ADN normal : ... ATC ATC [TTT] GGT ...
ADN muté   : ... ATC AT[T] GGT ...
On observe la délétion exacte de 3 nucléotides consécutifs (CTT ou TTT), correspondant à la disparition d'un codon entier sans modification du cadre de lecture en aval.

3/ Comparaison des séquences d'acides aminés :
- CFTR normale : Lys - Glu - Asn - Ile - Ile - [Phe] - Gly - Val - Ser - Tyr
- CFTR mutée   : Lys - Glu - Asn - Ile - Ile - Gly - Val - Ser - Tyr
La protéine mutée est amputée d'un seul acide aminé : la phénylalanine en position 508 (mutation ΔF508). Cette absence empêche l'adressage correct du canal chlore CFTR à la membrane plasmique, provoquant l'épaississement pathologique des sécrétions muqueuses.`,
    competences: ['Analyse de mutation', 'Mucoviscidose', 'Délétion de codon'],
    keywords: ['CFTR', 'mucoviscidose', 'délétion', 'phénylalanine 508', 'code génétique']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — SYSTÈME NERVEUX ET COMPORTEMENT MOTEUR
  // =========================================================================
  {
    id: 'svt-ts-ex1-potentiel-repos-action',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Système Nerveux et ses Propriétés',
    themeOrder: 1,
    exerciseNumber: 1,
    title: 'Potentiel de repos, potentiel diphasique et lois de l\'excitabilité',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `A. Deux électrodes A et B reliées à un oscilloscope sont placées au contact d'une fibre nerveuse :
1. Donnez le tracé obtenu selon que A et B sont en surface, ou que A est en surface et B à l'intérieur.
2. Que se passerait-il si l'on utilisait un nerf entier au lieu d'une fibre ?
B. On ajoute des électrodes excitatrices. Les électrodes réceptrices sont séparées de 3 cm du point d'excitation ; le temps de latence est de 1 ms.
- Expliquez les différentes phases du tracé diphasique obtenu.
- Calculez la vitesse de l'influx nerveux.
C. On applique des stimulations d'intensités croissantes sur un nerf (Doc 3) puis sur une fibre isolée (Doc 4).
1. Analysez les tracés.
2. Quelles propriétés fondamentales sont ainsi mises en évidence ?`,
    corrige: `A. 1. Tracés à l'oscilloscope :
- Deux électrodes à la surface externe : Aucune différence de potentiel n'existe entre deux points équipotents de la surface. Le spot trace une ligne horizontale au zéro (0 mV).
- Électrode A à la surface et B insérée dans l'axoplasme : Le spot dévie immédiatement vers le bas et se stabilise à une valeur négative constante (-70 mV) : c'est le potentiel de repos (PR).
2. Avec un nerf entier : On obtient le même résultat d'équipotentialité en surface.

B. Potentiel d'action diphasique :
- Point 1 : Artéfact de stimulation.
- Phase 1-2 : Temps de latence (temps mis par l'onde pour atteindre l'électrode A).
- Phase 2-3 : Dépolarisation sous l'électrode A (onde de négativité de surface atteignant A, déviation vers le haut).
- Phase 3-4 : Repolarisation sous A (retour au zéro quand l'onde franchit l'espace entre A et B).
- Phase 4-5 : Dépolarisation sous l'électrode B (onde atteignant B, déviation inverse vers le bas).
- Phase 5-6 : Repolarisation sous B et retour durable à la ligne isoélectrique.
Calcul de vitesse :
V = d / t = (3·10^-2 m) / (1·10^-3 s) = 30 m/s.

C. 1. Analyse comparée :
- Sur le nerf : Pour I1, pas de réponse (infraliminaire). Pour I2, apparition d'un potentiel global dont l'amplitude augmente avec l'intensité du stimulus jusqu'à I4, puis plafonne à une amplitude maximale constante jusqu'à I8.
- Sur la fibre isolée : Pas de réponse à I1 ; dès I2 (seuil d'excitabilité atteint), la fibre émet d'emblée un potentiel d'action d'amplitude maximale qui ne varie pas même si l'intensité augmente.
2. Propriétés mises en évidence :
- Pour le nerf : Seuil d'excitabilité, conductibilité, et loi de recrutement / sommation des fibres.
- Pour la fibre isolée : Seuil d'excitabilité, conductibilité, et loi du tout ou rien.`,
    competences: ['Neurophysiologie', 'Potentiel diphasique', 'Loi du tout ou rien', 'Recrutement'],
    keywords: ['potentiel de repos', 'potentiel diphasique', 'vitesse de conduction', 'loi du tout ou rien', 'recrutement']
  },
  {
    id: 'svt-ts-ex2-douleur-enkephaline',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Système Nerveux et ses Propriétés',
    themeOrder: 1,
    exerciseNumber: 2,
    title: 'Neurobiologie de la douleur : fibres myélinisées, substance P et enképhaline',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Une forte stimulation de la peau provoque une « douleur rapide » suivie d’une « douleur lente ».
1. a) Nommez l'élément amplifié (Doc 2b).
b) Comparez les enregistrements sans morphine (2a) et après morphine (2c). Déduisez l'effet de la morphine.
2. On dilacère le nerf cutané : les fibres A (diamètre 1 à 4 μm, myélinisées) conduisent à 6-24 m/s ; les fibres B (0,5 à 1 μm, amyéliniques) conduisent à 1-2 m/s.
a) Établissez la relation structure-vitesse.
b) Formulez une hypothèse sur l’origine des deux douleurs.
3. Dans la corne dorsale de la moelle épinière : les neurones sensitifs S libèrent de la substance P. Les interneurones I produisent de l'enképhaline. L'injection préalable d'enképhaline bloque la libération de substance P.
a) Quel est le rôle des interneurones I ?
b) Laquelle des substances est appelée « morphine naturelle » ? Justifiez.`,
    corrige: `1. a) L'enregistrement 2b représente un potentiel d’action monophasique de la fibre nerveuse.
b) Sans morphine, la stimulation provoque un train de potentiels d'action à haute fréquence pendant 50 ms, suivi d'une pause de 120 ms, puis d'une salve tardive à basse fréquence pendant 550 ms. Après morphine, seule la première décharge persiste ; la salve tardive disparaît totalement. On déduit que la morphine bloque la composante tardive de transmission du message nociceptif.

2. a) Relation structure-vitesse : Les fibres myélinisées de fort calibre conduisent l'influx à grande vitesse grâce à la myéline isolante et à la conduction saltatoire. Les fibres amyéliniques fines conduisent lentement par propagation de proche en proche.
b) Hypothèse : La douleur rapide et vive est véhiculée par les fibres A myélinisées rapides. La douleur lente, sourde et durable est véhiculée par les fibres B amyéliniques lentes.

3. a) Les interneurones I exercent une inhibition présynaptique sur les terminaisons axonales du neurone sensitif S, empêchant l'exocytose des vésicules de substance P.
b) L'enképhaline est la « morphine naturelle » (endorphine) car elle se fixe sur les récepteurs morphiniques présynaptiques pour inhiber la libération du neurotransmetteur de la douleur (la substance P).`,
    competences: ['Neurotransmetteurs', 'Modulation de la douleur', 'Fibres myélinisées vs amyéliniques'],
    keywords: ['douleur rapide', 'douleur lente', 'substance P', 'enképhaline', 'morphine']
  },
  {
    id: 'svt-ts-ex8-nerf-sciatique-deux-pics',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Système Nerveux et ses Propriétés',
    themeOrder: 1,
    exerciseNumber: 8,
    title: 'Conduction nerveuse différentielle et calcul de vitesse par double mesure',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Sur un nerf sciatique de grenouille dont les fibres sensitives ont été éliminées par dégénérescence wallérienne, on applique une stimulation supraliminaire unique et on enregistre la réponse à des distances croissantes : d1 = 50 mm et d2 = 150 mm.
L'histogramme des fibres montre deux populations : diamètre moyen 5 μm et diamètre moyen 14 μm.
1. Interprétez le tracé monophasique a.
2. Expliquez pourquoi le potentiel global se dédouble en deux pics distincts α et β lorsque la distance d'enregistrement augmente.
3. Calculez la vitesse de conduction pour les deux groupes de fibres à l'aide des tracés b et d (Δt pour fibres rapides = 2,5 ms ; Δt pour fibres lentes = 5 ms).
4. Pourquoi un seul enregistrement ne permettrait pas un calcul exact de la vitesse ?`,
    corrige: `1. Le tracé a est un électroneurogramme monophasique représentant la somme des potentiels d'action de surface des fibres motrices du nerf sous l'électrode réceptrice unique R1.

2. Dédoublement des pics : Le nerf est hétérogène, formé de deux groupes de fibres de diamètres différents (5 μm et 14 μm). Comme la vitesse de conduction est proportionnelle au diamètre, les influx générés simultanément au point de stimulation se propagent à des allures différentes. Plus l'électrode est éloignée, plus le retard des fibres lentes s'accentue, séparant physiquement l'arrivée des fibres rapides (pic α précoce) de celle des fibres lentes (pic β tardif).

3. Calcul des vitesses de conduction :
Différence de distance : Δd = d2 - d1 = 150 mm - 50 mm = 100 mm = 10^-1 m.
- Fibres rapides (diamètre 14 μm) :
  V_rapides = Δd / Δt = 10^-1 m / (2,5·10^-3 s) = 40 m/s.
- Fibres lentes (diamètre 5 μm) :
  V_lentes = Δd / Δt = 10^-1 m / (5·10^-3 s) = 20 m/s.

4. Nécessité de deux enregistrements :
Un enregistrement unique mesure le temps global entre le choc électrique et la réponse, qui comprend le temps de propagation MAIS aussi le temps de latence d'excitation du nerf (délai de réponse physiologique du tissu). En effectuant la différence entre deux positions réceptrices (d2 - d1)/(t2 - t1), ce délai d'excitation constant s'annule, fournissant la vitesse pure de propagation.`,
    competences: ['Calcul de vitesse de l\'influx', 'Hétérogénéité du nerf', 'Élimination du temps d\'excitation'],
    keywords: ['vitesse de conduction', 'dédoublement des pics', 'fibres rapides', 'fibres lentes', 'délai d\'excitation']
  },
  {
    id: 'svt-ts-ex11-reflexe-myotatique',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Rôle du Système Nerveux dans le Comportement Moteur',
    themeOrder: 2,
    exerciseNumber: 11,
    title: 'Le réflexe myotatique achilléen : fuseau neuromusculaire et arc spinal',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `La percussion du tendon d'Achille provoque l'extension réflexe du pied par contraction du triceps sural.
1.1 Précisez la nature de cette réaction.
1.2 En cas de destruction médullaire lombo-sacrée, le réflexe disparaît définitivement. Une section haute au-dessus de la zone lombo-sacrée n'abolit pas le réflexe après dissipation du choc. Interprétez ces données.
2.1 Analysez la relation entre l'étirement du tendon et la tension développée par le muscle.
2.2 Analysez l'activité électrique d'une fibre issue du fuseau neuromusculaire lors de charges croissantes (2g, 15g, 35g).
3. On mesure le temps d'arrivée de l'influx au point d'entrée A (nerf sensitif) et au motoneurone B dans la moelle : tA = 2,11 ms et tB = 2,88 ms. Sachant que le délai synaptique est de 0,5 ms, démontrez l'organisation monosynaptique du réflexe.`,
    corrige: `1.1 Il s'agit d'un réflexe inné, involontaire et stéréotypé : le réflexe myotatique (contraction réflexe d'un muscle en réponse à son propre étirement).
1.2 Le centre nerveux intégrateur réflexe se situe exclusivement dans la moelle épinière lombo-sacrée ; l'encéphale et les centres nerveux supérieurs ne sont pas nécessaires à son exécution.

2.1 Plus l'étirement du muscle est important, plus la tension active développée par sa contraction est élevée : le réflexe ajuste la contraction à l'intensité de l'étirement pour maintenir la posture.
2.2 Le fuseau neuromusculaire est le récepteur sensoriel mécano-récepteur : il traduit l'étirement mécanique en potentiels d'action dont la fréquence d'émission augmente proportionnellement à la charge (codage en modulation de fréquence).

3. Démonstration de l'arc monosynaptique :
Temps de transit intramédullaire :
Δt = tB - tA = 2,88 ms - 2,11 ms = 0,77 ms.
Le délai moyen de franchissement d'une synapse étant d'environ 0,5 ms, ce temps de 0,77 ms correspond au franchissement d'une seule synapse (les 0,27 ms résiduelles correspondant au temps de parcours sur les quelques millimètres de fibres intramédullaires). S'il y avait un interneurone (arc disynaptique), le délai dépasserait 2 x 0,5 = 1,0 ms. La voie excitatrice du réflexe myotatique est donc strictement monosynaptique.`,
    competences: ['Réflexe myotatique', 'Fuseau neuromusculaire', 'Délai synaptique', 'Arc monosynaptique'],
    keywords: ['triceps sural', 'fuseau neuromusculaire', 'délai synaptique', 'monosynaptique', 'tendon d\'Achille']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — MUSCLE SQUELETTIQUE ET BIOÉNERGÉTIQUE
  // =========================================================================
  {
    id: 'svt-ts-ex15-unites-motrices-posture',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Activité du Muscle Squelettique',
    themeOrder: 3,
    exerciseNumber: 15,
    title: 'Unités motrices A et B : secousse élémentaire, tétanos et maintien postural',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Chez le chat, on isole deux types d’unités motrices A et B.
1) Définir une unité motrice à l'aide du document 1.
2) Analyser et comparer les enregistrements a (type A) et b (type B) obtenus suite à une stimulation unique.
3) Expliquer les tracés c (type A) et d (type B) obtenus sous stimulations répétitives d'intensités croissantes.
4) Lesquelles des unités motrices sont impliquées dans les contractions posturales soutenues ? Justifier.`,
    corrige: `1) Définition : Une unité motrice est l'ensemble fonctionnel constitué par un motoneurone $\\alpha$ de la corne ventrale de la moelle épinière et toutes les fibres musculaires qu'il innerve.

2) Analyse comparée de la secousse élémentaire :
- Unité motrice A : Temps de latence court, contraction vive et brève (durée contraction ~20 ms, relâchement 55 ms, durée totale 75 ms) développant une force élevée (amplitude 40 g).
- Unité motrice B : Temps de latence plus long, secousse très lente et étalée (durée totale ~300 ms) avec une force faible (amplitude 2 g).

3) Réponses aux stimulations répétitives :
- Pour l'unité A : Les stimulations tombent pendant la phase de relâchement de la secousse précédente, produisant une sommation incomplète : c'est un tétanos imparfait (amplitude maximale ~80 g).
- Pour l'unité B : La durée de contraction étant très longue, les stimulations successives fusionnent parfaitement : c'est un tétanos parfait avec un plateau lisse et durable (amplitude 5 g).

4) Rôle dans la posture :
Ce sont les unités motrices de type B qui assurent la posture, car elles sont capables de contractions soutenues, lentes, durables, peu consommatrices d'ATP et très résistantes à la fatigue.`,
    competences: ['Physiologie musculaire', 'Unités motrices', 'Tétanos physiologique', 'Posture'],
    keywords: ['unité motrice', 'secousse musculaire', 'tétanos parfait', 'tétanos imparfait', 'posture']
  },
  {
    id: 'svt-ts-ex20-sarcomere-vo2max',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Activité du Muscle Squelettique',
    themeOrder: 3,
    exerciseNumber: 20,
    title: 'Ultrastructure du sarcomère, glissement des myofilaments et VO2 max',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `A/ Electronographie du sarcomère :
1. Indiquez le nom des éléments 1 à 8 (sarcolemme, sarcomère, filaments d'actine, myosine, REL, troponine).
2. Décrivez le mécanisme moléculaire complet de la contraction suite à la stimulation du motoneurone.
B/ Mesures de VO2 max chez des sportifs de haut niveau :
- Relation entre VO2 max et performance sur 30 km (Doc 2).
- Comparaison entre coureur de 100 m et marathonien (Doc 3).
- Caractéristiques des fibres rouges vs fibres pâles (Doc 4).
Expliquez la fatigabilité et le mode de production d'ATP de chaque type de fibre.`,
    corrige: `A/ 1. Annotation :
1 : neurone présynaptique ; 2 : plaque motrice ; 3 : sarcolemme ; 4 : sarcoplasme ; 5 : réticulum endoplasmique lisse (sarcoplasmique) ; 6 : sarcomère ; 7 : filament fin d'actine ; 8 : filament épais de myosine.

2. Mécanisme moléculaire de la contraction :
- Arrivée du PA au bouton synaptique -> entrée de Ca2+ -> libération d'acétylcholine -> potentiel de plaque motrice -> PA musculaire propagé le long du sarcolemme et des tubules T.
- Libération massive de Ca2+ par les citernes terminales du réticulum sarcoplasmique dans le cytoplasme.
- Fixation du Ca2+ sur la troponine -> déformation et déplacement de la tropomyosine -> démasquage des sites actifs d'actine.
- Fixation des têtes de myosine (porteuses d'ADP + Pi) sur l'actine -> libération du phosphate inorganique puis de l'ADP -> basculement de 45° de la tête de myosine qui fait glisser le filament d'actine vers le centre du sarcomère.
- Fixation d'une nouvelle molécule d'ATP provoquant la dissociation actine-myosine, puis hydrolyse de l'ATP pour réarmer la tête de myosine.

B/ VO2 max et typologie des fibres :
1. Plus le VO2 max est élevé, plus le temps mis pour parcourir 30 km est faible : le VO2 max est un facteur déterminant de la performance en endurance.
2. Le coureur de fond présente un VO2 max élevé (>70 mL/min/kg), alors que le sprinter présente un VO2 max plus modeste (~50 mL/min/kg).
3. Fibres rouges (Type I) : Très riches en myoglobine, capillaires et mitochondries, métabolisme aérobie (respiration avec phosphorylation oxydative), faible fatigabilité, adaptées à l'effort soutenu (marathon).
Fibres pâles (Type II) : Pauvres en mitochondries mais très riches en glycogène et enzymes glycolytiques, métabolisme anaérobie lactique, forte puissance instantanée mais grande fatigabilité due à l'accumulation d'acide lactique (effort bref et violent : sprint 100-200m).`,
    competences: ['Ultrastructure du sarcomère', 'Couplage chimio-mécanique', 'Filières énergétiques', 'VO2 max'],
    keywords: ['sarcomère', 'actine', 'myosine', 'troponine', 'VO2 max', 'fibres rouges', 'fibres blanches']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — ACTIVITÉ CARDIAQUE ET PRESSION ARTÉRIELLE
  // =========================================================================
  {
    id: 'svt-ts-ex22-regulation-pression-arterielle',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Activité Cardiaque et Régulation de la Pression Artérielle',
    themeOrder: 4,
    exerciseNumber: 22,
    title: 'Régulation neuro-hormonale lors de la course-poursuite chat-chien',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Lors d'une course-poursuite entre un chien et un chat :
A. Chez le chien, la pression artérielle monte de 15 à 27 cm Hg et la fréquence cardiaque de 150 à 240 battements/min.
- L'excitation de la moelle lombo-thoracique (zone a), du ganglion étoilé (zone b) ou des nerfs sympathiques (fibres c) accélère le cœur.
- L'asphyxie et l'augmentation du CO2 sanguin provoquent une tachycardie via le centre bulbaire.
B. Chez le chat, la simple vue du chien augmente l'adrénaline et la fréquence cardiaque. Chez un chat surrénalectomisé ou après section des nerfs reliant l'encéphale à la surrénale, l'adrénaline ne monte pas.
Interprétez ces mécanismes d'adaptation.`,
    corrige: `A. Mécanisme nerveux chez le chien :
1. La pression artérielle augmente en réponse directe à l'élévation du débit cardiaque consécutive à la tachycardie (PA = Débit cardiaque x Résistances périphériques).
2. L'excitation des zones a, b et c active le contingent orthosympathique cardio-accélérateur dont le neuromédiateur est la noradrénaline.
3. Lors de l'effort musculaire, l'augmentation du taux de CO2 et la baisse de pH excitent les chémorécepteurs carotidiens et aortiques. Ceux-ci envoient des potentiels d'action par les nerfs afférents vers le centre respiratoire et le centre cardio-accélérateur bulbaire, stimulant les efférences orthosympathiques vers le nœud sinusal du cœur.

B. Mécanisme neuro-endocrinien chez le chat :
La perception visuelle du prédateur active le cortex visuel puis l'hypothalamus et le système limbique (émotion/stress). Les influx nerveux descendent par la moelle épinière et les nerfs splanchniques vers la médullosurrénale, déclenchant l'exocytose rapide d'adrénaline dans le sang. L'adrénaline circulante se fixe sur les récepteurs β1-adrénergiques cardiaques, augmentant la fréquence et la force de contraction.`,
    competences: ['Baroréflexe et chémoréflexe', 'Système orthosympathique', 'Adrénaline', 'Effort physique'],
    keywords: ['pression artérielle', 'fréquence cardiaque', 'orthosympathique', 'ganglion étoilé', 'adrénaline']
  },
  {
    id: 'svt-ts-ex23-greffe-cardiaque',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Activité Cardiaque et Régulation de la Pression Artérielle',
    themeOrder: 4,
    exerciseNumber: 23,
    title: 'Adaptation cardiaque à l\'effort chez le sujet témoin vs le sujet greffé',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `1) Analysez les effets de la stimulation et de la section des nerfs vagues et sympathiques sur le cœur.
2) Comparez la variation de la fréquence cardiaque à l'effort et en récupération entre un individu sain et un transplanté cardiaque (Doc 2).
3) Formulez une hypothèse sur les mécanismes régulateurs chez les deux sujets.
4) Analysez la courbe des catécholamines plasmatiques (Doc 3).
5) Expliquez comment s'adapte le cœur transplanté dénervé.`,
    corrige: `1) Rôle des nerfs extrinsèques :
- Nerfs vagues (X) : La stimulation abaisse la fréquence cardiaque de 70 à 30 batt/min ; leur section l'augmente : ce sont des nerfs cardiomodérateurs (parasympathiques) exerçant un tonus permanent de freinage.
- Nerfs sympathiques : La stimulation accélère le cœur jusqu'à 120 batt/min ; leur section le ralentit : ce sont des nerfs cardio-accélérateurs.

2) Comparaison témoin vs greffé :
- Sujet témoin : Augmentation quasi-instantanée de la fréquence cardiaque dès le début de l'effort, puis récupération rapide en quelques minutes.
- Sujet greffé : La fréquence de repos est plus élevée (~100 batt/min en l'absence du frein vagal) ; à l'effort, la fréquence cardiaque n'augmente que très lentement et tardivement, et redescend tout aussi lentement (récupération en 45 minutes).

3) Hypothèses :
- Sujet témoin : Régulation immédiate par voie nerveuse réflexe (levée du tonus parasympathique et activation sympathique).
- Sujet greffé : Absence de connexions nerveuses suite à la greffe ; l'adaptation s'effectue exclusivement par voie humorale/hormonale.

4) & 5) Mécanisme chez le greffé :
À l'effort, la médullosurrénale sécrète des catécholamines (adrénaline et noradrénaline) dont la concentration plasmatique passe de 300 pg/mL à plus de 2 000 pg/mL. Ces hormones voyagent par le flux sanguin pour aller stimuler directement les récepteurs adrénergiques du myocarde greffé. L'acheminement par voie circulatoire explique la latence et la lenteur d'adaptation et de récupération.`,
    competences: ['Cœur greffé', 'Dénervation', 'Catécholamines', 'Voie nerveuse vs hormonale'],
    keywords: ['greffe cardiaque', 'nerf vague', 'sympathique', 'catécholamines', 'adaptation']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — RÉGULATION DE LA GLYCÉMIE
  // =========================================================================
  {
    id: 'svt-ts-ex28-foie-et-pancreas',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Régulation de la Glycémie',
    themeOrder: 6,
    exerciseNumber: 28,
    title: 'Rôle homéostatique du foie, insuline et glucagon',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `A/ Expérience du foie lavé et dosages :
a) Chez un chien hépatectomisé, la glycémie chute de 1 g/L à 0,5 g/L en 75 min (coma).
b) Au cours des repas, la glycémie est de 2 g/L dans la veine porte et de 1,1 g/L dans les veines sus-hépatiques.
c) Le glycogène hépatique passe de 50 g/kg à 6,9 g/kg après 6 jours de jeûne et remonte à 88 g/kg après repas.
B/ Régulation endocrine :
a) La pancréatectomie provoque un diabète mortel.
b) La greffe de pancréas au cou rétablit une glycémie normale de 1 g/L.
c) Analysez l'action de l'insuline et du glucagon sur le bilan hépatique du glucose. Proposez le schéma fonctionnel complet.`,
    corrige: `A/ Rôle du foie :
1. L'hypoglycémie mortelle consécutive à l'hépatectomie démontre que le foie est l'organe indispensable au maintien de la glycémie à jeun.
2. Après un repas, la glycémie dans la veine sus-hépatique est nettement inférieure à celle de la veine porte : le foie retient l'excès de glucose alimentaire.
3. En période post-prandiale, le foie stocke le glucose sous forme de glycogène (glycogénogenèse). En période de jeûne, il hydrolyse le glycogène en glucose libre libéré dans le sang (glycogénolyse).

B/ Régulation pancréatique :
1. Le pancréas contrôle la glycémie par voie endocrine (hormonale sanguine), comme le prouve l'efficacité d'un pancréas greffé au cou dépourvu de toute innervation.
2. L'insuline (sécrétée par les cellules β) stimule la captation cellulaire du glucose et la glycogénogenèse hépatique : son bilan hépatique est négatif (entrées > sorties), elle est hypoglycémiante.
3. Le glucagon (sécrété par les cellules α) active la glycogénolyse hépatique : son bilan est positif (sorties > entrées), il est hyperglycémiant.
Schéma fonctionnel :
Consigne 1 g/L -> Détecteurs (cellules α et β des îlots de Langerhans) -> Messagers hormonaux (Insuline / Glucagon) -> Effecteur (Foie, muscles, tissu adipeux) -> Rétrocontrôle négatif vers la valeur consigne.`,
    competences: ['Homéostasie glycémique', 'Fonction glycogénique du foie', 'Îlots de Langerhans'],
    keywords: ['glycémie', 'insuline', 'glucagon', 'foie', 'glycogénolyse', 'glycogénogenèse']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — IMMUNOLOGIE
  // =========================================================================
  {
    id: 'svt-ts-ex31-rimh-anticorps',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Immunologie',
    themeOrder: 7,
    exerciseNumber: 31,
    title: 'Réponse immunitaire à médiation humorale : du lymphocyte B au plasmocyte',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Dans une culture de lymphocytes de souris, on introduit des extraits de paroi bactérienne :
- Le milieu s'enrichit en anticorps.
- La masse d'ADN augmente dans certains lymphocytes.
- La masse d'ARN augmente.
- L'ultrastructure montre un enrichissement spectaculaire en REG, mitochondries et vésicules d'exocytose.
1) Annotez l'ultrastructure du lymphocyte B différencié.
2) Analysez chacune des quatre observations et précisez les étapes cellulaires associées.
3) Décrivez le mécanisme complet de la réponse immunitaire à médiation humorale (RIMH).`,
    corrige: `1) Annotation du plasmocyte :
1 : membrane plasmique ; 2 : cytoplasme ; 3 : noyau volumineux à chromatine en rayon de roue ; 4 : REG abondant et développé ; 5 : dictyosome hypertrophié ; 6 : mitochondries ; vésicules de sécrétion contenant les immunoglobulines. Titre : Ultrastructure d'un plasmocyte sécréteur d'anticorps.

2) Phénomènes biologiques :
- Augmentation de la masse d'ADN : Entrée en phase S du cycle cellulaire pour la multiplication clonale (mitoses) des lymphocytes B activés.
- Augmentation de l'ARN et développement du REG/Golgi : Transcription active des gènes des chaînes lourdes et légères d'immunoglobulines et intense biosynthèse protéique.
- Apparition d'anticorps dans le surnageant : Différenciation terminale des lymphocytes B en plasmocytes effecteurs sécrétant des anticorps spécifiques.

3) Mécanisme complet de la RIMH :
- Phase d'induction : Reconnaissance directe de l'antigène par les anticorps membranaires (BCR) des clones de LB spécifiques. Coopération avec les macrophages (CPA) et les lymphocytes T4 auxiliaires (LTh) qui libèrent des interleukines.
- Phase d'amplification : Prolifération clonale intense des LB sous l'action de l'interleukine 2 et 4.
- Phase de différenciation : Une fraction forme des LB mémoires à longue durée de vie ; la majorité se transforme en plasmocytes.
- Phase effectrice : Les anticorps circulants neutralisent l'antigène en formant des complexes immuns insolubles, activent la voie classique du complément (complexe d'attaque membranaire) et favorisent l'opsonisation (phagocytose facilitée par les récepteurs Fc des macrophages).`,
    competences: ['Étapes de la RIMH', 'Différenciation en plasmocyte', 'Complexe immun'],
    keywords: ['lymphocyte B', 'plasmocyte', 'anticorps', 'REG', 'complexe immun', 'opsonisation']
  },
  {
    id: 'svt-ts-ex32-zinkernagel-double-reconnaissance',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Immunologie',
    themeOrder: 7,
    exerciseNumber: 32,
    title: 'L\'expérience historique de Zinkernagel et Doherty : la double reconnaissance',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Une souris A est infectée par le virus de la vaccine V. Dix jours après, on extrait ses lymphocytes T et on les met en présence de cellules cibles in vitro :
- Fibroblastes de la souris A infectés par le virus V : destruction (lyse).
- Fibroblastes de la souris A infectés par un virus G : aucune destruction.
- Fibroblastes d'une souris B infectés par le virus V : aucune destruction.
Interprétez ces résultats. Quels sont les lymphocytes impliqués et quelles sont les conditions rigoureuses de leur action lytique ?`,
    corrige: `1. Interprétation rigoureuse :
- La lyse des fibroblastes A infectés par V montre que les lymphocytes immuns détruisent les cellules cibles présentant l'antigène viral contre lequel ils ont été sensibilisés.
- L'absence de lyse des cellules A infectées par le virus G démontre la haute spécificité antigénique de la réponse : les lymphocytes ne reconnaissent pas un autre virus.
- L'absence de lyse des cellules B infectées par le virus V (pourtant porteur du bon antigène) démontre que les lymphocytes ne peuvent agir que si la cellule cible appartient à la même souche génétique que le donneur (même CMH).

2. Lymphocytes mis en cause :
Ce sont les lymphocytes T cytotoxiques (LTc ou LT CD8+).

3. Condition d'activité (La double reconnaissance) :
Pour déclencher la cytolyse, le récepteur T (TCR) du LTc doit reconnaître simultanément :
1° Le peptide antigénique étranger (déterminant viral V).
2° La molécule du Complexe Majeur d'Histocompatibilité de classe I (CMH-I) du soi (propre à la souris A).
Si l'une des deux composantes fait défaut (antigène différent ou CMH différent), la cellule effectrice ne s'active pas.`,
    competences: ['RIMC', 'Double reconnaissance', 'CMH de classe I', 'LT cytotoxiques'],
    keywords: ['Zinkernagel', 'LTc', 'double reconnaissance', 'CMH', 'virus vaccine']
  },
  {
    id: 'svt-ts-ex37-vih-ccr5-resistance',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Immunologie',
    themeOrder: 7,
    exerciseNumber: 37,
    title: 'Physiopathologie du VIH, récepteur CD4, corécepteur CCR5 et mutation protectrice',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Dans une population très exposée au VIH, certains sujets demeurent séronégatifs.
- Doc 1 : Fixation de la gp120 du VIH sur les protéines CD4 et CCR5 des lymphocytes T4.
- Doc 2 : L'allèle S code pour un corécepteur CCR5 normal de 352 acides aminés ; l'allèle mutant R (CCR5-Δ32) code pour une protéine tronquée de 205 acides aminés.
  Chez les sujets de génotype RR, 100% restent séronégatifs (0% séropositifs). Chez les génotypes SS et SR, 70% sont séropositifs.
1) Expliquez le mécanisme d'entrée du virus dans la cellule hôte.
2) Formulez une hypothèse sur la résistance des sujets RR.
3) Chez les séropositifs, le délai d'apparition du SIDA est beaucoup plus long chez les individus SR que chez les SS. Expliquez ce fait à partir des récepteurs membranaires.`,
    corrige: `1) Mécanisme d'entrée du VIH :
La glycoprotéine d'enveloppe gp120 du VIH se lie d'abord avec une haute affinité au récepteur CD4 du lymphocyte T4. Cette fixation induit un changement de conformation qui permet à la gp120 d'interagir avec le corécepteur membranaire CCR5. Cette seconde liaison déclenche le déploiement de la protéine gp41 qui fusionne la membrane virale avec la membrane cytoplasmique de l'hôte, injectant la capside virale et l'ARN dans la cellule.

2) Résistance des individus de génotype RR :
L'allèle R possède une délétion de 32 paires de bases qui déplace le cadre de lecture et crée un codon stop prématuré : la protéine CCR5 ne comporte que 205 acides aminés au lieu de 352. Non fonctionnelle, elle n'est pas adressée à la surface membranaire. Privé de son corécepteur indispensable, le VIH ne peut pas fusionner sa membrane avec celle de la cellule hôte : les individus homozygotes RR sont naturellement immunisés contre l'infection par les souches virales à tropisme CCR5.

3) Différence d'évolution entre sujets SS et SR :
Les hétérozygotes SR expriment par codominance 50% de corécepteurs CCR5 normaux et 50% de récepteurs mutés. La densité des portes d'entrée fonctionnelles étant réduite de moitié, le taux d'infection des LT4 est ralenti, la charge virale s'élève plus lentement et la destruction du système immunitaire est différée, retardant significativement l'entrée dans la phase SIDA clinique par rapport aux homozygotes SS.`,
    competences: ['Physiopathologie du SIDA', 'Biologie moléculaire', 'Corécepteur CCR5', 'Génétique médicale'],
    keywords: ['VIH', 'SIDA', 'gp120', 'CD4', 'CCR5', 'mutation', 'résistance']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — REPRODUCTION DES MAMMIFÈRES
  // =========================================================================
  {
    id: 'svt-ts-ex39-clomifene-fertilite',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Reproduction chez les Mammifères',
    themeOrder: 8,
    exerciseNumber: 39,
    title: 'Régulation neuro-endocrine ovarienne et traitement au clomifène',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Madame X consulte pour stérilité. Son dosage de LH montre un taux stationnaire bas sans pic (5,4 à 7,2 mUI/mL). On prescrit du clomifène (analogue structural des œstrogènes qui se fixe sur les récepteurs hypothalamiques).
- Pendant le traitement : LH monte à 30 mUI/mL.
- Après le traitement : pic d'œstrogènes à 180 μg/24h, suivi à J14 d'une décharge ovulante de LH (40 mUI/mL) et apparition de progestérone.
1. Tracez et analysez la cinétique hormonale.
2. Justifiez le mode d'action du clomifène.
3. Le couple peut-il espérer une grossesse ? Justifiez.`,
    corrige: `1. Analyse de la cinétique :
Avant traitement, l'absence de décharge cyclique de LH explique l'anovulation (stérilité anovulatoire). Sous clomifène, le taux de LH s'élève progressivement jusqu'à 30 mUI/mL. À l'arrêt, la maturation folliculaire induit un pic d'œstrogènes qui déclenche à J14 un pic massif de LH/FSH, immédiatement suivi de la sécrétion de progestérone.

2. Mode d'action du clomifène :
En se fixant sur les récepteurs hypothalamiques à œstrogènes sans les activer, le clomifène bloque l'accès aux œstrogènes endogènes et lève le rétrocontrôle négatif permanent exercé sur l'axe hypothalamo-hypophysaire. Le complexe hypothalamo-hypophysaire interprète cette situation comme un effondrement des œstrogènes et réagit en sécrétant massivement de la GnRH, de la FSH et de la LH. Cette relance stimule la croissance folliculaire complète jusqu'au follicule de De Graaf mûr. Ce follicule mature produit une concentration seuil d'œstrogènes (>200 pg/mL pendant 48h) qui bascule le rétrocontrôle en rétrocontrôle positif, déclenchant le pic ovulatoire de LH.

3. Pronostic de fécondité :
Oui, le traitement a permis la rupture folliculaire (ovulation à J14) et la transformation du follicule en corps jaune fonctionnel sécrétant de la progestérone (phase lutéale préparant l'endomètre utérin à la nidation). Une fécondation naturelle est donc désormais tout à fait possible.`,
    competences: ['Régulation hormonale féminine', 'Rétrocontrôles positif et négatif', 'PMA et pharmacologie'],
    keywords: ['LH', 'FSH', 'œstrogènes', 'progestérone', 'clomifène', 'rétrocontrôle', 'ovulation']
  },
  {
    id: 'svt-ts-ex51-tolerance-foetale-hlag',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Reproduction chez les Mammifères & Immunologie',
    themeOrder: 8,
    exerciseNumber: 51,
    title: 'Tolérance fœto-maternelle : trophoblaste, molécule HLA-G et récepteurs KIR',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Le fœtus est une semi-allogreffe portant 50% de gènes paternels étrangers. Pourtant, il n'est pas rejeté par le système immunitaire maternel.
- Les cellules du trophoblaste ne portent aucun HLA classique (A, B, C), mais expriment une molécule monomorphe universelle HLA-G.
- Les cellules NK (Natural Killer) maternelles possèdent un récepteur inhibiteur KIR (Killing Inhibitory Receptor).
- Les cellules tumorales K562 dépourvues de HLA classique sont lysées in vitro par les NK, mais deviennent résistantes dès qu'on leur fait exprimer la molécule HLA-G.
1. Pourquoi les lymphocytes T cytotoxiques de la mère ne détruisent-ils pas le trophoblaste ?
2. Quel est le rôle de la molécule HLA-G vis-à-vis des cellules NK maternelles ?
3. Concluez sur la stratégie d'échappement immunitaire du fœtus.`,
    corrige: `1. Absence d'attaque par les LTc maternels :
Les lymphocytes T cytotoxiques exigent la présence des molécules du CMH de classe I classique (HLA-A, HLA-B, HLA-C) pour reconnaître un antigène étranger (double reconnaissance). Les cellules trophoblastiques étant totalement dépourvues de ces protéines HLA classiques, les LTc maternels sont incapables de se fixer et restent inactifs.

2. Rôle de la protéine HLA-G face aux cellules NK :
Normalement, toute cellule de l'organisme dépourvue de HLA classique est immédiatement reconnue et détruite par les cellules Natural Killer (qui vérifient la présence du « soi »). Cependant, les cellules du trophoblaste exposent la molécule non classique HLA-G, dont la conformation spatiale s'adapte spécifiquement aux récepteurs KIR des NK. La fixation de HLA-G sur KIR émet un signal intracellulaire inhibiteur puissant qui bloque la dégranulation cytotoxique des cellules NK.

3. Bilan de la tolérance fœtale :
Le trophoblaste constitue une barrière immunologique parfaite grâce à une double protection :
- Camouflage absolu face aux lymphocytes T cytotoxiques par extinction des gènes HLA classiques du père.
- Neutralisation active des cellules NK maternelles par l'expression protectrice de la molécule universelle HLA-G.`,
    competences: ['Tolérance foeto-maternelle', 'Cellules NK et récepteurs KIR', 'Môle trophoblastique'],
    keywords: ['HLA-G', 'KIR', 'Natural Killer', 'trophoblaste', 'tolérance fœtale', 'semi-allogreffe']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — GÉNÉTIQUE DES DIPLOÏDES ET MENDÉLISME
  // =========================================================================
  {
    id: 'svt-ts-ex56-gene-letal-poulet',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Génétique des Diploïdes',
    themeOrder: 10,
    exerciseNumber: 56,
    title: 'Gène létal à pattes courtes et liaison génétique chez le poulet',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Chez le poulet :
- 1er croisement : Poule de race pure à crête rosacée x coq à crête simple -> 100% poulets à crête rosacée.
- 2e croisement : Poulets à pattes courtes croisés entre eux -> 2/3 poulets à pattes courtes, 1/3 à pattes normales, et 1/4 d'embryons morts dans l'œuf avant éclosion.
1. Déterminez la dominance des allèles pour chaque gène.
2. Expliquez la proportion atypique 2/3 - 1/3 et la mortalité embryonnaire.
3. 3e croisement : Coq à crête rosacée et pattes courtes x poule à crête simple et pattes normales -> 50% [rosacée, courtes] et 50% [rosacée, normales].
4. 4e croisement : Les F1 [rosacée, courtes] croisés entre eux donnent : 50 [rosacée, courtes], 26 [simple, normales] et 24 œufs non éclos.
Déterminez le mode de transmission et la liaison des deux gènes. Dressez l'échiquier.`,
    corrige: `1. Dominance :
- Pour la forme de la crête : F1 est homogène [crête rosacée]. L'allèle crête rosacée (R) est dominant sur l'allèle crête simple (s) récessif.
- Pour la taille des pattes : Les parents [pattes courtes] donnent des descendants [pattes normales] : l'allèle pattes courtes (C) est dominant sur l'allèle pattes normales (n) récessif.

2. Allèle létal :
Le croisement de deux hétérozygotes (Cn x Cn) donne théoriquement 1/4 CC, 2/4 Cn et 1/4 nn.
L'observation de 1/4 d'embryons morts et d'une répartition 2/3 [C] et 1/3 [n] chez les survivants prouve que l'allèle dominant C est létal à l'état homozygote (les individus CC meurent in utero). Tous les poulets vivants à pattes courtes sont obligatoirement hétérozygotes Cn.

3. & 4. Analyse du 4e croisement et liaison génétique :
Le croisement des hybrides F1 donne une descendance composée uniquement de :
- 50 [R, C] (soit ~2/3 des éclos)
- 26 [s, n] (soit ~1/3 des éclos)
- 24 œufs morts (soit 1/4 des fécondations).
L'absence totale de phénotypes recombinés ([R, n] ou [s, C]) prouve que les deux gènes sont portés par la même paire de chromosomes et qu'aucun crossing-over ne s'est produit : il s'agit d'une **liaison absolue (linkage total)**.
Phase de couplage des hybrides F1 : génotype (R C // s n).
Échiquier de croisement F1 x F1 :
- Gamètes produits par chaque parent (50% R C et 50% s n) :
  * 1/4 (R C // R C) : Double homozygote [R, C] -> MORT dans l'œuf (létalité de CC).
  * 2/4 (R C // s n) : Hétérozygotes viables -> Phénotype [R, C] (pattes courtes, crête rosacée).
  * 1/4 (s n // s n) : Double récessif viable -> Phénotype [s, n] (pattes normales, crête simple).
Parmi les survivants viables, on a exactement 2/3 [R, C] et 1/3 [s, n], ce qui correspond fidèlement aux 50 et 26 individus observés.`,
    competences: ['Monohybridisme avec allèle létal', 'Dihybridisme lié absolu', 'Échiquier de croisement'],
    keywords: ['poulet', 'crête rosacée', 'gène létal', 'linkage absolu', 'échiquier']
  },
  {
    id: 'svt-ts-ex58-gonosomes-zw-papillon',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Génétique des Diploïdes',
    themeOrder: 10,
    exerciseNumber: 58,
    title: 'Hérédité liée au sexe chez les Lépidoptères (Femelles ZW et Mâles ZZ)',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Chez les papillons Aurinia (Lépidoptères), les femelles sont hétérogamétiques ZW et les mâles homogamétiques ZZ.
La forme typique est tachetée [t]. Un mâle mutant roux [R] croisé avec une femelle typique de race pure donne en G1 :
24 mâles roux, 25 femelles rousses, 25 mâles typiques, 24 femelles typiques.
1) Quel est l'allèle dominant ? Justifiez.
2) La composition de G1 suffit-elle pour trancher entre localisation autosomale ou gonosomale ?
3) Le croisement de femelles rousses de G1 avec des mâles typiques donne des femelles rousses. Ce résultat est-il compatible avec l'hérédité liée au sexe sur Z ? Concluez sur la localisation chromosomique du gène.`,
    corrige: `1) Dominance :
La femelle parentale étant de race pure typique [t] et la descendance étant hétérogène (roux et typiques), le mâle roux parental était nécessairement hétérozygote. Comme son phénotype était roux bien que porteur de l'allèle typique, l'allèle roux (R) est strictement dominant sur l'allèle typique (t) récessif.

2) Indétermination en G1 :
- Hypothèse gonosomale (sur Z) : Mâle (Z^R Z^t) x Femelle (Z^t W) -> 25% mâles [R], 25% mâles [t], 25% femelles [R], 25% femelles [t].
- Hypothèse autosomale : Mâle (R//t) x Femelle (t//t) -> 50% [R] (répartis à égalité de sexe) et 50% [t] (répartis à égalité de sexe).
Les deux modèles théoriques prédisent exactement les mêmes effectifs statistiques (25% pour chacune des 4 catégories). G1 ne permet donc pas de trancher.

3) Croisement test discriminant :
Si le gène était lié au sexe sur le chromosome Z :
- Le mâle typique récessif ne produirait que des gamètes (Z^t).
- La femelle rousse aurait pour génotype (Z^R W) et produirait 50% gamètes Z^R et 50% gamètes W.
Toutes les femelles issues de ce croisement recevraient obligatoirement le chromosome W de leur mère et le chromosome Z^t de leur père : elles seraient donc de génotype (Z^t W) et TOUTES de phénotype TYPIQUE [t].
Or, on observe l'apparition de FEMELLES ROUSSES dans la descendance. L'hypothèse de la liaison au gonosome Z est donc FORMELLEMENT REJETÉE.
Conclusion : Le gène gouvernant la couleur des ailes est localisé sur une paire d'autosomes.`,
    competences: ['Lépidoptères', 'Gonosomes ZW/ZZ', 'Test d\'hypothèse de liaison au sexe'],
    keywords: ['ZW', 'ZZ', 'papillon', 'lépidoptère', 'autosome', 'hérédité liée au sexe']
  },

  // =========================================================================
  // FASCICULE TERMINALE S1-S2 — HÉRÉDITÉ HUMAINE ET CARYOTYPES
  // =========================================================================
  {
    id: 'svt-ts-ex64-arbre-surdite-daltonisme',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Génétique Humaine',
    themeOrder: 11,
    exerciseNumber: 64,
    title: 'Surdi-mutité autosomale récessive et daltonisme lié au sexe',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `Monsieur et Madame A, phénotypiquement normaux, ont deux enfants : un garçon sourd-muet et daltonien, et une fille saine.
1. L'allèle de la surdité est-il dominant ou récessif ?
2. Déterminez la localisation chromosomique du gène de la surdité.
3. Le daltonisme est lié au sexe : l'allèle est-il dominant ou récessif ?
4. Donnez les génotypes complets des parents et du garçon atteint.
5. Calculez la probabilité pour ce couple d'avoir un nouvel enfant atteint des deux anomalies à la fois.`,
    corrige: `1. Récessivité de la surdité :
Les parents sont sains et donnent naissance à un enfant atteint : l'allèle responsable de la surdité est donc masqué chez les parents à l'état hétérozygote ; il est **récessif** (allèle m), l'allèle normal étant dominant (S).

2. Localisation autosomale de la surdité :
- L'allèle ne peut pas être porté par le chromosome Y car il y a des filles atteintes dans la généalogie.
- Il ne peut pas non plus être récessif lié au chromosome X car si c'était le cas, une fille atteinte devrait avoir reçu un chromosome X muté de son père, qui aurait dû être sourd-muet ; or les pères de filles atteintes dans la famille sont sains. Le gène de la surdité est donc porté par un **autosome**.

3. Récessivité du daltonisme :
Le daltonisme est une anomalie liée au chromosome X. Deux parents à vision normale (I'1 et I'2) ayant un fils daltonien démontrent que l'allèle du daltonisme est **récessif** (allèle d), l'allèle de vision normale étant dominant (D ou Xs).

4. Génotypes complets :
- Garçon atteint des deux anomalies : homozygotie autosomale récessive et hémizygotie pour X :
  $$\\text{Génotype du fils} : \\frac{m}{m} \\quad X^d Y$$
- Père (M. A) : sain pour l'ouïe mais transmetteur de m, vision normale :
  $$\\text{Génotype de M. A} : \\frac{S}{m} \\quad X^D Y$$
- Mère (Mme A) : saine pour l'ouïe mais ayant transmis m, vision normale mais ayant transmis X^d à son fils :
  $$\\text{Génotype de Mme A} : \\frac{S}{m} \\quad X^D X^d$$

5. Calcul de probabilité d'avoir un enfant sourd-muet ET daltonien :
Les deux gènes étant situés sur des chromosomes différents (ségrégation indépendante) :
- Probabilité pour la surdité (croisement Sm x Sm) :
  $$P(\\text{sourd-muet } mm) = \\frac{1}{4}$$
- Probabilité pour le daltonisme :
  * Chez les filles ($X^D X^D$ ou $X^D X^d$) : $0\\%$ de risque d'être daltoniennes.
  * Chez les garçons ($1/2$ des naissances) : $1/2$ de recevoir $X^d$ et $1/2$ de recevoir $X^D$, soit $P(\\text{garçon daltonien}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.
- Probabilité globale combinée :
  $$P = P(mm) \\times P(X^d Y) = \\frac{1}{4} \\times \\frac{1}{4} = \\mathbf{\\frac{1}{16}} \\quad (6{,}25\\%)$$
(Soit une chance sur 8 si l'on restreint la question au sexe masculin).`,
    competences: ['Arbre généalogique', 'Hérédité gonosomale vs autosomale', 'Calculs de probabilités'],
    keywords: ['arbre généalogique', 'surdité', 'daltonisme', 'chromosome X', 'autosome', 'probabilité']
  },
  {
    id: 'svt-ts-ex67-electrophorese-g6pd-klinefelter-turner',
    fascicule: 'tle_s1_s2',
    fasciculeLabel: 'SVT Terminales S1-S2 (Sénégal)',
    theme: 'Génétique Humaine',
    themeOrder: 11,
    exerciseNumber: 67,
    title: 'Électrophorèse de l\'enzyme G6PD et diagnostic des syndromes de Klinefelter et Turner',
    sourceOrigin: 'Fascicule SVT Terminale S1-S2 — MM. Diome, Dieye & Diome',
    enonce: `L'enzyme G6PD existe sous deux formes A et B codées par des allèles codominants sur le chromosome X. A migre plus vite que B à l'électrophorèse.
- Père : bande B uniquement.
- Mère : bande A uniquement.
- Enfants : Sophie (bandes A et B), Ali (bande A), Mamadou (bandes A et B).
1) a) Quel est le génotype du père et de la mère ?
b) Que peut-on dire de Mamadou ? Justifiez.
2) Un autre couple aux profils identiques a deux filles, Nafi et Fatou. L'une présente une anomalie. Laquelle et pourquoi ?
3) Quel profil d'électrophorèse présenterait une fille trisomique 21 issue de ce couple ?`,
    corrige: `1) a) Génotypes parentaux :
- Le gène étant lié à X, le père ne possède qu'un seul chromosome X : il exprime la bande B, donc son génotype est **X^B Y**.
- La mère possède deux chromosomes X et ne présente que la bande A : elle est homozygote de génotype **X^A X^A**.

b) Cas de Mamadou :
Mamadou est un garçon (sexe masculin). Un individu XY normal issu de ce couple recevrait obligatoirement le Y paternel et un X^A maternel, ne présentant que la bande A (comme son frère Ali).
Or l'électrophorèse de Mamadou révèle la présence simultanée des deux bandes A et B. Il possède donc à la fois l'allèle maternel X^A et l'allèle paternel X^B, ainsi que le chromosome Y qui détermine son sexe masculin.
Son caryotype est donc **47, XXY (X^A X^B Y)** : Mamadou est atteint du **syndrome de Klinefelter**, consécutif à une non-disjonction des gonosomes XY chez son père lors de la première division de méiose (formation d'un spermatozoïde aneuploïde XY).

2) Cas de Nafi et Fatou :
Toutes les filles normales issues de ce croisement reçoivent obligatoirement le X^B du père et un X^A de la mère : elles doivent toutes présenter deux bandes (phénotype codominant [AB], génotype X^A X^B).
C'est le cas de Fatou qui est normale.
En revanche, **Nafi ne présente qu'une seule bande A**. Elle n'a reçu aucun chromosome X de son père. Son génotype est **X^A 0** avec seulement 45 chromosomes : elle est atteinte du **syndrome de Turner (monosomie X)**, résultant de la fécondation de l'ovocyte par un spermatozoïde sans gonosome (anomalie de méiose paternelle).

3) Petite fille trisomique 21 :
La trisomie 21 est une aneuploïdie portant sur un autosome (la paire 21) et n'affecte pas la répartition des chromosomes sexuels. Une fille trisomique 21 possède donc deux gonosomes X normaux (X^A X^B) et présentera un profil électrophorétique normal à deux bandes A et B, identique à celui de sa sœur normale Sophie ou de Mamadou.`,
    competences: ['Électrophorèse des protéines', 'Aneuploïdies', 'Syndrome de Klinefelter', 'Syndrome de Turner'],
    keywords: ['G6PD', 'électrophorèse', 'Klinefelter', 'Turner', 'trisomie 21', 'non-disjonction']
  }
];
