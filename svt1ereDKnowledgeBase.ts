/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SVT PREMIÈRE D
 * Source : Mon École à la Maison — Côte d'Ivoire École Numérique / MENA (Ministère de l'Éducation Nationale et de l'Alphabétisation)
 * 
 * Contient les 12 leçons fondamentales du programme officiel ivoirien de 1ère D :
 * 1. Les activités internes du globe terrestre (Séismes, ondes P/S/L, discontinuités Moho, Gutenberg, Lehmann)
 * 2. Les mouvements des plaques lithosphériques (Tectonique des plaques, rifts, accrétion, subduction, obduction, collision)
 * 3. Les échanges d'ions au niveau du sol (Complexe argilo-humique, ponts calciques, pouvoir adsorbant, expérience de Way)
 * 4. L'évolution des sols tropicaux (Évolution progressive/régressive, horizons, lixiviation, chéluviation, lessivage, cuirasse)
 * 5. Le réflexe inné (Arc réflexe médullaire, grenouille spinale, récepteur, conducteurs, centre, effecteur)
 * 6. Les fonctions des gonades (Testicules et ovaires : rôles exocrine et endocrine, testostérone, œstrogènes, progestérone)
 * 7. La gamétogenèse chez les mammifères (Spermatogenèse, ovogenèse, méiose, brassages, aberrations chromosomiques)
 * 8. La transmission d'un caractère héréditaire (Monohybridisme autosomique, dominance, codominance, test-cross, hérédité liée à l'X)
 * 9. La synthèse des protéines et le code génétique (ADN, ARNm, ARNt, ribosomes, transcription, traduction, mutations)
 * 10. La production de la matière organique : la photosynthèse (Chloroplastes, pigments, phase photochimique, cycle de Calvin)
 * 11. La digestion des aliments (Simplification moléculaire enzymatique par hydrolyse, amylase, pepsine, lipase, pH, température)
 * 12. L'absorption des nutriments (Villosités intestinales, voie sanguine, voie lymphatique, transports passifs et actifs)
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  theme?: string;
  duration?: string;
  pages?: [number, number] | readonly [number, number];
  topics: string[] | readonly string[];
  formulas: string[] | readonly string[];
  methods: string[] | readonly string[];
};

export const svt1ereDKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVT 1ère D",
  version: "1.0.0",
  source: "Mon École à la Maison — Côte d'Ivoire École Numérique / MENA",
  level: "Première D",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Les activités internes du globe terrestre",
      theme: "La géodynamique interne",
      duration: "6H",
      topics: [
        "Manifestations des mouvements internes de la Terre : séismes (tremblements de terre) et éruptions volcaniques déformant la surface externe",
        "Effets dévastateurs : fissuration des roches et du sol, destruction d'édifices, glissements de terrain, raz de marée (tsunamis) consécutifs aux séismes sous-marins",
        "Produits volcaniques rejetés : solides (cendres volcaniques, bombes, lapilli), liquides (coulées de lave), gazeux (fumerolles, vapeur d'eau, gaz sulfureux)",
        "Paramètres sismiques fondamentaux :",
        "- Foyer ou hypocentre : point de rupture brutale des roches en profondeur sous contraintes tectoniques, lieu de départ des ondes sismiques",
        "- Épicentre : point à la surface du globe situé à la verticale du foyer où l'intensité sismique et les dégâts sont maximaux",
        "- Magnitude (échelle de Richter, ouverte graduée de 1 à 9+) : mesure de la quantité d'énergie libérée au foyer, calculée d'après l'amplitude maximale enregistrée",
        "- Intensité macrosismique (échelle de Mercalli / MSK à 12 degrés) : estimation qualitative des dégâts matériels et des sensations humaines",
        "Enregistrement des secousses : sismographe pendulaire (masse inerte suspendue à ressort ou fil restant immobile par inertie). Nécessité de 3 sismographes orthogonaux : horizontal Nord-Sud, horizontal Est-Ouest, vertical",
        "Les trois types d'ondes sismiques sur le sismogramme :",
        "1. Ondes P (primaires) : premières enregistrées, les plus rapides, ondes longitudinales de compression-décompression (déplacement des particules parallèle au sens de propagation), se propagent dans tous les milieux (solides, liquides, gaz)",
        "2. Ondes S (secondaires) : enregistrées secondairement, vitesse intermédiaire, ondes transversales de cisaillement (déplacement des particules perpendiculaire au sens de propagation), ne se propagent STRICTEMENT que dans les solides",
        "3. Ondes L (longues ou de surface) : dernières enregistrées, les plus lentes, de très forte amplitude, mouvements complexes de torsion guidés par la couche superficielle du globe, très destructrices avec les ondes S",
        "Hodographes sismiques : courbes du temps de propagation des ondes (t) en fonction de la distance épicentrale (d). Les ondes P et S ont des courbes curvilignes (vitesse augmentant avec la profondeur et la densité), l'onde L a un tracé rectiligne (vitesse constante en surface)",
        "Structure interne du globe et les 3 discontinuités majeures :",
        "- Discontinuité de Mohorovicic (Moho) : située entre 10 et 70 km de profondeur (7 à 10 km sous les océans, 30 à 70 km sous les continents), marquée par une augmentation brutale de vitesse des ondes P et S ; sépare la croûte du manteau supérieur",
        "- Discontinuité de Gutenberg : située à 2900 km de profondeur, marquée par une chute brutale de vitesse des ondes P (de 14 km/s à ~8 km/s) et la DISPARITION TOTALE des ondes S (vitesse = 0) ; sépare le manteau inférieur (solide) du noyau externe (LIQUIDE)",
        "- Discontinuité de Lehmann : située à 5100-5400 km de profondeur, marquée par une augmentation de vitesse des ondes P et la RÉAPPARITION des ondes S ; sépare le noyau externe (liquide) du noyau interne ou graine (SOLIDE)",
        "Les 4 couches concentriques de la Terre : la croûte (continentale granitique SIAL et océanique basaltique SIMA), le manteau (supérieur visqueux à la base = asthénosphère, inférieur rigide = mésosphère), le noyau externe (liquide métallique Fe-Ni), la graine ou noyau interne (solide)"
      ],
      formulas: [
        "Vitesse de propagation sismique : v = d / t (avec d en km et t en secondes ou minutes)",
        "Retard des ondes secondaires sur les ondes primaires : Δt = t_S - t_P",
        "Loi de Snell-Descartes appliquée aux rais sismiques : sin(i1) / v1 = sin(i2) / v2",
        "Épaisseurs des enveloppes : Croûte (0-70 km) | Manteau (70-2900 km) | Noyau externe liquide (2900-5100 km) | Graine solide (5100-6370 km)",
        "Rayon terrestre moyen : R ≈ 6370 km"
      ],
      methods: [
        "Analyser un sismogramme : 1. Repérer le début du tracé calme. 2. Identifier le premier train de faible amplitude (ondes P). 3. Identifier le second train d'amplitude moyenne (ondes S). 4. Repérer le troisième train de grande amplitude et de longue période (ondes L).",
        "Exploiter un hodographe : 1. Pointer la distance épicentrale sur l'axe des abscisses. 2. Projeter verticalement sur les courbes P et S. 3. Lire les temps d'arrivée respectifs sur l'axe des ordonnées. 4. Calculer le retard Δt = t_S - t_P.",
        "Démontrer l'état liquide du noyau externe : 1. Rappeler que les ondes transversales S ne se propagent que dans les solides. 2. Constater qu'à 2900 km (Gutenberg), la vitesse des ondes S tombe brutalement à zéro. 3. Conclure rigoureusement que le milieu traversé entre 2900 km et 5100 km est liquide."
      ]
    },
    {
      id: "ch2",
      lessonNumber: 2,
      title: "Les mouvements des plaques lithosphériques",
      theme: "La géodynamique interne",
      duration: "6H",
      topics: [
        "Définition d'une plaque lithosphérique : vaste calotte rigide, stable et mobile de la lithosphère (épaisseur ~100 km), délimitée par des bordures étroites instables à forte sismicité et volcanisme actif",
        "Cartographie mondiale des plaques : 7 plaques majeures (eurasiatique, africaine, australo-indienne, sud-américaine, nord-américaine, pacifique, antarctique) et plaques mineures (Nazca, Cocos, Caraïbes, arabique, Philippines)",
        "Nature des plaques : continentales (ex: arabique), océaniques (ex: pacifique, Nazca), ou mixte océano-continentale (ex: plaque africaine, sud-américaine)",
        "Topographie et structure des fonds océaniques :",
        "- Dorsale médio-océanique : chaîne montagneuse sous-marine avec fossé central axial effondré appelé rift (largeur 25-50 km)",
        "- Bassin océanique : plaine abyssale (relief plat à 4000-5000 m de profondeur), talus continental à forte pente et plateau continental immergé prolongeant les continents",
        "- Structure pétrographique du plancher océanique (du bas vers le haut) : péridotites mantelliques -> gabbros -> basaltes en filons verticaux -> basaltes en coussins (pillow-lavas) -> couche fine de sédiments marins",
        "Phénomène d'accrétion et expansion des fonds océaniques :",
        "- Montée de magma basaltique issu de la fusion partielle de la péridotite asthénosphérique sous le rift",
        "- Cristallisation fractionnée et refroidissement au contact de l'eau formant de la nouvelle croûte océanique",
        "- Écartement bilatéral symétrique : l'âge des basaltes augmente de façon parfaitement symétrique lorsqu'on s'éloigne de part et d'autre de l'axe de la dorsale ; les sédiments s'épaississent avec la distance",
        "Moteur de la tectonique des plaques : chaleur interne de la Terre issue de la désintégration des isotopes radioactifs du manteau (uranium 238/235, thorium 232, potassium 40) créant des cellules et courants de convection dans l'asthénosphère",
        "Les trois types de frontières et de mouvements tectoniques :",
        "1. Mouvements de divergence (distension / accrétion) : écartement de deux plaques au niveau des rifts et dorsales, provoquant l'ouverture et l'élargissement des océans",
        "2. Mouvements de coulissement (décrochement / failles transformantes) : déplacement horizontal de deux plaques glissant l'une contre l'autre sans création ni destruction de croûte (ex: faille de San Andreas)",
        "3. Mouvements de convergence (rapprochement et affrontement de plaques) :",
        "   - Subduction : plongement d'une plaque océanique plus dense sous une plaque continentale moins dense (ou sous une autre plaque océanique) au niveau d'une fosse océanique profonde ; caractérisée par séismes le long du plan de Wadati-Benioff, volcanisme explosif andésitique, métamorphisme de haute pression-basse température et formation de cordillères de subduction (ex: Andes)",
        "   - Obduction : charriage et chevauchement d'un lambeau de plaque océanique sur une croûte continentale (formation d'ophiolites)",
        "   - Collision continentale : affrontement direct de deux croûtes continentales de même faible densité après fermeture d'un océan ; absence de subduction continentale, épaississement crustal majeur, plissement et formation de très hautes chaînes de montagnes (ex: Himalaya né de la collision entre la plaque indienne et la plaque eurasiatique)"
      ],
      formulas: [
        "Vitesse d'expansion océanique : v = distance au rift (d) / âge du plancher océanique (t)",
        "Ordre pétrographique du plancher océanique (bas vers haut) : Péridotites -> Gabbros -> Basaltes en filons -> Basaltes en coussins -> Sédiments",
        "Bilan lithosphérique global : Surface créée à la dorsale (accrétion) = Surface recyclée dans les fosses (subduction)"
      ],
      methods: [
        "Interpréter la symétrie des anomalies magnétiques ou de l'âge des sédiments : 1. Repérer l'axe du rift. 2. Noter la symétrie des bandes d'âges identiques de part et d'autre. 3. Conclure à la création continue de croûte au niveau de la dorsale et à son expansion bilatérale.",
        "Différencier subduction, obduction et collision : 1. Si une plaque océanique s'enfonce sous une continentale -> subduction. 2. Si un fragment océanique chevauche le continent -> obduction. 3. Si deux blocs continentaux se heurtent avec plissement et disparition de l'océan intermédiaire -> collision."
      ]
    },
    {
      id: "ch3",
      lessonNumber: 3,
      title: "Les échanges d'ions au niveau du sol",
      theme: "Les propriétés chimiques des sols",
      duration: "6H",
      topics: [
        "Composition fondamentale du sol : fraction minérale (sables, limons, argiles), fraction organique (débris végétaux, litière, humus), solution du sol (eau + ions dissous) et atmosphère du sol",
        "Nature et propriétés des colloïdes du sol :",
        "- L'argile : colloïde minéral issu de l'altération chimique des silicates de la roche mère",
        "- L'humus : colloïde organique issu de la décomposition biologique de la matière organique par les micro-organismes (humification)",
        "- Charge électrique : l'argile et l'humus sont tous deux des particules électronégatives (chargées négativement)",
        "Mise en évidence expérimentale de la charge du sol :",
        "- Percolation de bleu de méthylène (colorant cationique chargé positivement) : le filtrat obtenu est totalement décoloré et limpide car les cations colorés sont retenus (adsorbés) par les charges négatives du sol",
        "- Percolation d'éosine (colorant anionique chargé négativement) : le filtrat reste rouge car les anions sont repoussés par les charges négatives du sol et traversent sans être fixés",
        "Formation du Complexe Argilo-Humique (CAH) :",
        "- En milieu aqueux pur, les micelles d'argile et d'humus se repoussent (flocons non formés, état dispersé)",
        "- En présence de cations bivalents (principalement Ca2+, et aussi Fe3+, Mg2+), les micelles d'argile et d'humus s'unissent par des ponts calciques (ou liaisons électrostatiques)",
        "- Les micelles d'humus forment une enveloppe protectrice autour des micelles d'argile, formant des agrégats floconneux : le complexe argilo-humique",
        "Pouvoir adsorbant et régulateur du CAH :",
        "- Le CAH fixe à sa surface externe les cations minéraux nutritifs de la solution du sol (Ca2+, K+, Mg2+, NH4+, Na+) et, indirectement par ponts cationiques, certains anions (phosphates PO4 3-)",
        "- Protection contre le lessivage : le CAH empêche l'entraînement des éléments minéraux vers la nappe phréatique par les eaux d'infiltration",
        "Équilibre dynamique et mécanisme d'échanges d'ions :",
        "- Équilibre réversible : [Ions fixés sur le CAH] <=> [Ions libres dans la solution du sol]",
        "- Cas de déficit en ions dans la solution (absorption par les racines des plantes ou lessivage partiel) : le CAH libère ses cations par désorption pour rétablir la concentration de la solution du sol",
        "- Cas d'excès d'ions dans la solution (apport d'engrais chimiques ou amendements calciques/chaux) : le CAH adsorbe et stocke les cations excédentaires",
        "Expérience de Way (mise en évidence des échanges de cations) :",
        "- On fait filtrer une solution de KCl (contenant 10 u.a. de K+ et 10 u.a. de Cl-, sans Ca2+) sur un sol argilo-humique",
        "- Résultat du filtrat : la concentration en K+ diminue (baisse de 10 à 2 u.a.), celle de Cl- reste inchangée (10 u.a.), et des ions Ca2+ apparaissent (passage de 0 à 8 u.a.)",
        "- Interprétation : pour chaque 2 ions K+ fixés par le CAH, 1 ion Ca2+ est libéré dans la solution du sol (échange stœchiométrique équivalent en charges). Les anions Cl- ne participent pas à l'échange"
      ],
      formulas: [
        "Structure du pont calcique : [Micelle d'Argile]⁻ --- Ca²⁺ --- [Micelle d'Humus]⁻",
        "Équilibre de désorption (restitution) : CAH-Ca²⁺ + 2 H⁺ (acides racinaires) -> CAH-2H⁺ + Ca²⁺ (libéré)",
        "Échange de Way : CAH-Ca²⁺ + 2 K⁺ (solution) <=> CAH-2K⁺ + Ca²⁺ (solution)",
        "Conservation des charges : 1 Ca²⁺ libéré équivaut à 2 K⁺ ou 2 Na⁺ fixés"
      ],
      methods: [
        "Expliquer la décoloration du bleu de méthylène : 1. Préciser que le bleu de méthylène doit sa couleur à des cations chargés positivement. 2. Constater la décoloration du filtrat. 3. Déduire que les particules d'argile et d'humus portent des charges négatives qui attirent et fixent les cations.",
        "Analyser les résultats de l'expérience de Way : 1. Comparer les concentrations initiales et finales de chaque ion. 2. Noter la disparition partielle de K+ et l'apparition de Ca2+. 3. Conclure à un échange cationique entre le complexe adsorbant et la solution du sol sans rétention d'anions Cl-.",
        "Justifier l'importance agronomique du CAH : 1. Améliore la structure du sol (structure grumeleuse aérée). 2. Constitue un réservoir nutritif d'éléments minéraux. 3. Évite les pertes par lessivage dues aux fortes pluies tropicales."
      ]
    },
    {
      id: "ch4",
      lessonNumber: 4,
      title: "L'évolution des sols tropicaux",
      theme: "Les propriétés chimiques des sols",
      duration: "9H",
      topics: [
        "La pédogenèse sous climat tropical : formation et différenciation verticale du sol à partir de la roche mère sous l'action du climat, de l'eau, de la température et de la végétation",
        "Les deux modes d'évolution du sol :",
        "1. Évolution progressive :",
        "   - Altération de la roche mère saine (C ou R) par hydrolyse et thermoclastie -> arène granitique",
        "   - Colonisation végétale pionnière (lichens, mousses, herbacées)",
        "   - Humification des débris végétaux et installation d'une strate arbustive puis forestière",
        "   - Apparition successive d'horizons distincts : gain d'horizons (profil C -> AC -> ABC -> A0, A1, A2, B1, B2, C)",
        "   - Stade d'équilibre final = le Climax (équilibre dynamique stable entre le sol mûr et la végétation climacique)",
        "   - Nomenclature des horizons : A0 (litière organique), A1 (horizon humifère mélangé organo-minéral), A2 (horizon éluvial appauvri/lessivé), B (horizon illuvial d'accumulation enrichi en argile et oxydes), C (roche mère altérée), R (roche mère saine non altérée)",
        "2. Évolution régressive :",
        "   - Destruction du couvert végétal protecteur par l'homme (déboisement, feux de brousse, surpâturage) ou sécheresse",
        "   - Exposition directe du sol au soleil et aux pluies battantes -> rupture du climax",
        "   - Érosion mécanique emportant d'abord l'horizon humifère superficiel (A0, A1), puis les horizons sous-jacents",
        "   - Perte d'horizons aboutissant au décapage total et à la mise à nu stérile de la roche mère",
        "Les migrations d'éléments minéraux dans les sols tropicaux :",
        "- Migrations descendantes (liées à l'infiltration des eaux de pluie en saison humide) :",
        "  * Lixiviation : entraînement en profondeur des sels solubles et ions libres (Ca2+, Mg2+, K+, Na+, nitrates)",
        "  * Chéluviation : entraînement de complexes organo-métalliques solubles formés par le fer et l'aluminium associés à la matière organique acide",
        "  * Lessivage : entraînement mécanique des particules fines solides (argiles dispersées) de l'horizon supérieur A vers l'horizon inférieur B",
        "  * Conséquence : horizon A appauvri (éluvial/lessivé) et horizon B enrichi (illuvial/d'accumulation)",
        "- Migrations ascendantes (liées à l'évaporation intense en saison sèche) :",
        "  * Remontée capillaire de l'eau chargée d'éléments dissous depuis la nappe phréatique vers la surface",
        "  * Évaporation de l'eau en surface laissant un dépôt concentré de sels : formation de croûte saline",
        "  * Remontée et précipitation des hydroxydes et oxydes de fer (Fe2O3) et d'aluminium (Al2O3) : durcissement irréversible au contact de l'air formant une cuirasse latéritique (phénomène d'induration)",
        "Caractéristiques et fertilité des sols :",
        "- Sol fertile (ex: sol forestier du Banco) : texture équilibrée (30% argile, 30% sable, 40% limon), structure grumeleuse, aération optimale, capacité de rétention d'eau modérée, pH neutre à légèrement acide (6.7 - 7.2), riche en humus et CAH, activité biologique intense (vers, bactéries)",
        "- Sol infertile (ex: sol de mangrove ou sol latéritique cuirassé) : texture déséquilibrée, structure compacte ou particulaire, asphyxiant ou hydromorphe, pH très acide (5.3), pauvre en sels minéraux et matière organique, activité biologique nulle"
      ],
      formulas: [
        "Profil complet d'un sol mûr : A0 (Litière) -> A1 (Humifère) -> A2 (Lessivé/Éluvial) -> B (Accumulation/Illuvial) -> C (Roche altérée) -> R (Roche mère)",
        "Bilan d'évolution progressive : Gain d'horizons + Enrichissement humique + Établissement du Climax",
        "Bilan d'évolution régressive : Déforestation -> Rupture du climax -> Érosion superficielle -> Perte d'horizons -> Cuirasse ou roche nue",
        "Bilan d'induration latéritique : Fe²⁺ (dissous profond) + O2 (surface) -> Fe2O3 (oxyde ferrique précipité insoluble) -> Cuirasse ferrugineuse"
      ],
      methods: [
        "Identifier le sens d'évolution d'un sol entre deux profils : 1. Compter et nommer les horizons présents sur chaque profil. 2. Si le nombre d'horizons augmente avec différenciation d'un horizon B -> évolution progressive vers le climax. 3. Si des horizons supérieurs (A0, A1, B) disparaissent -> évolution régressive par dégradation/érosion.",
        "Distinguer les types de migrations : 1. Migration descendante de sels solubles -> lixiviation. 2. Migration descendante d'argile solide -> lessivage. 3. Migration ascendante par évaporation avec précipitation d'oxydes métalliques -> induration / formation de cuirasse.",
        "Évaluer la fertilité d'un sol : Vérifier simultanément les 3 composantes : physique (structure grumeleuse, bonne porosité), chimique (pH voisin de 7, CAH saturé en cations nutritifs) et biologique (abondance d'humus et micro-faune décomposeuse)."
      ]
    },
    {
      id: "ch5",
      lessonNumber: 5,
      title: "Le réflexe inné",
      theme: "La communication nerveuse",
      duration: "6H",
      topics: [
        "Définition du réflexe inné : réponse motrice involontaire, inconsciente, brusque, stéréotypée et inéluctable à une stimulation appropriée (stimulus absolu), présente dès la naissance sans apprentissage, s'effectuant sans l'intervention du cerveau",
        "Expériences historiques sur la grenouille spinale (grenouille dont l'encéphale est détruit mais dont la moelle épinière est intacte) :",
        "- Trempage de la patte dans des solutions d'acide acétique de concentrations croissantes :",
        "  * Pour une concentration très faible (infracliminaire) : aucune réaction",
        "  * Dès que le seuil d'excitation est atteint (seuil liminaire) : flexion brusque de la patte stimulée (réflexe unilatéral)",
        "  * Pour des concentrations plus fortes : extension de la réponse à la patte opposée (réflexe symétrique), puis aux quatre membres (réflexe coordonné généralisé)",
        "Mise en évidence expérimentale des 5 organes intervenant dans l'arc réflexe :",
        "1. Le récepteur sensoriel (la peau) :",
        "   - Expérience : anesthésie de la patte postérieure droite par trempage dans l'éther pendant 2 minutes puis excitation à l'acide",
        "   - Résultat : la grenouille ne fléchit pas sa patte pendant 15 minutes ; après évaporation de l'éther, la sensibilité réapparaît",
        "   - Rôle : capte le stimulus absolu et le convertit en influx nerveux sensitif centripète",
        "2. Le conducteur sensitif (fibres nerveuses afférentes du nerf sciatique et racine postérieure de la moelle épinière) :",
        "   - Transmet l'influx nerveux sensitif depuis le récepteur cutané jusqu'au centre nerveux médullaire",
        "3. Le centre nerveux réflexe (la moelle épinière) :",
        "   - Expérience : destruction de la moelle épinière de la grenouille spinale par un stylet métallique puis excitation à l'acide",
        "   - Résultat : aucune réaction de flexion, perte définitive et totale de tous les réflexes",
        "   - Rôle : reçoit l'influx sensitif, l'intègre et le transforme en influx nerveux moteur centrifuge (centre de commande réflexe)",
        "4. Le conducteur moteur (fibres nerveuses efférentes de la racine antérieure du nerf rachidien/sciatique) :",
        "   - Transmet l'influx nerveux moteur depuis la moelle épinière jusqu'à l'organe effecteur",
        "5. L'organe effecteur (le muscle strié squelettique, ex: muscle fléchisseur de la cuisse) :",
        "   - Reçoit l'influx nerveux moteur et répond par une contraction mécanique brusque entraînant le retrait du membre",
        "Anatomie de la moelle épinière et de l'arc réflexe médullaire :",
        "- Coupe transversale de la moelle épinière : substance blanche périphérique (axones myélinisés), substance grise centrale en forme de papillon avec cornes postérieures (fines) et cornes antérieures (larges), canal de l'épendyme au centre",
        "- Nerf rachidien (mixte) rattaché par deux racines :",
        "  * Racine postérieure (dorsale) : sensitive, porteuse du ganglion rachidien qui contient les corps cellulaires des neurones sensitifs en T",
        "  * Racine antérieure (ventrale) : motrice, contient les axones des motoneurones dont les corps cellulaires étoilés sont situés dans la corne antérieure de la substance grise",
        "- Neurone d'association (interneurone) : situé dans la substance grise, assure la synapse intermédiaire entre neurone sensitif et neurone moteur"
      ],
      formulas: [
        "Trajet de l'arc réflexe inné : Stimulus absolu -> Récepteur (peau) -> Influx sensitif (racine postérieure + ganglion) -> Centre nerveux (moelle épinière, neurone d'association) -> Influx moteur (racine antérieure) -> Effecteur (muscle) -> Réflexe de retrait",
        "Nature du réflexe inné = Involontaire + Automatique + Inéluctable + Stéréotypé + Sans apprentissage + Centre médullaire"
      ],
      methods: [
        "Interpréter les expériences de lésion de l'arc réflexe : 1. Si anesthésie locale de la peau bloque le réflexe temporairement -> la peau est le récepteur sensoriel. 2. Si section du nerf sciatique bloque le réflexe définitivement -> le nerf est conducteur. 3. Si destruction de la moelle détruit tout réflexe -> la moelle épinière est le centre réflexe.",
        "Annoter le schéma de l'arc réflexe médullaire : 1. Récepteur cutané (nocicepteur). 2. Fibre sensitive afférente. 3. Ganglion rachidien sur la racine postérieure. 4. Substance grise médullaire avec neurone d'association. 5. Motoneurone dans la corne antérieure. 6. Racine antérieure motrice. 7. Nerf rachidien mixte. 8. Plaque motrice et muscle effecteur."
      ]
    },
    {
      id: "ch6",
      lessonNumber: 6,
      title: "Les fonctions des gonades chez les mammifères",
      theme: "La reproduction chez les mammifères",
      duration: "6H",
      topics: [
        "Les gonades sont des glandes mixtes (amphicrines) assurant une double fonction : exocrine (gamétogenèse) et endocrine (sécrétion d'hormones sexuelles régulatrices)",
        "I. Fonctions des gonades mâles (testicules) :",
        "- Rôle exocrine : production continue de spermatozoïdes dans la lumière des tubes séminifères dès la puberté",
        "- Rôle endocrine : sécrétion de testostérone dans les capillaires sanguins par les cellules de Leydig (cellules interstitielles situées entre les tubes séminifères)",
        "- Actions de la testostérone : développement et maintien des caractères sexuels primaires (voies génitales : épididyme, spermiductes, vésicules séminales, prostate, pénis) et secondaires (musculature, pilosité, mue de la voix, comportement agressif/recherche de partenaire)",
        "- Preuves expérimentales chez le rat :",
        "  * Castration bilatérale chez le rat pubère -> stérilité irréversible + régression des vésicules séminales et des caractères secondaires",
        "  * Castration + injection d'extraits testiculaires ou testostérone -> maintien des caractères sexuels et des vésicules séminales mais persistance de la stérilité",
        "  * Ligature des spermiductes (canaux déférents) -> stérilité par blocage du passage des spermatozoïdes, mais maintien intégral des caractères sexuels et de la masse des vésicules séminales",
        "  * Destruction sélective des tubes séminifères par rayons X -> stérilité totale, mais maintien des caractères sexuels (cellules de Leydig intactes)",
        "II. Fonctions des gonades femelles (ovaires) :",
        "- Rôle exocrine : maturation folliculaire cyclique et expulsion de l'ovocyte II dans le pavillon de la trompe (ovulation)",
        "- Rôle endocrine : sécrétion d'hormones ovariennes dans le sang :",
        "  * Les œstrogènes (œstradiol) : sécrétés par les cellules de la thèque interne et de la granulosa des follicules ovariens en croissance pendant la phase folliculaire (favorisent l'épaississement de l'endomètre utérin et le développement des caractères sexuels féminins)",
        "  * La progestérone : sécrétée principalement par le corps jaune pendant la phase lutéale (stimule la dentelle utérine sécrétoire, inhibe les contractions du myomètre et permet le maintien de la gestation)",
        "- Preuves expérimentales chez la rate :",
        "  * Ovariectomie chez la rate non gravide -> stérilité + atrophie de l'utérus et des voies génitales",
        "  * Ovariectomie chez la rate gravide -> avortement spontané immédiat (chute de la progestérone)",
        "  * Ovariectomie chez la rate gravide + injection d'extraits ovariens (progestérone) -> poursuite normale de la gestation jusqu'au terme",
        "  * Ligature des trompes de Fallope -> stérilité mécanique (empêche la rencontre des gamètes), mais persistance normale des cycles hormonaux et des caractères sexuels",
        "Structure microscopique des gonades :",
        "- Testicule : lobules testiculaires contenant les tubes séminifères pelotonnés reliés au rete testis (réseau de Haller), cônes efférents, épididyme et canal déférent. Coupe transversale : paroi avec spermatogonies (2n), spermatocytes I (2n), spermatocytes II (n), spermatides (n), spermatozoïdes (n) fixés aux cellules de Sertoli (nourricières et protectrices) ; tissu interstitiel contenant les cellules de Leydig et capillaires sanguins",
        "- Ovaire : zone médullaire centrale (tissu conjonctif riche en vaisseaux) et zone corticale périphérique contenant des follicules à divers stades (primordial, primaire, secondaire, tertiaire/cavitaire, mûr de De Graaf, corps jaune, corps blanc dégénéré)"
      ],
      formulas: [
        "Fonction exocrine : Testicules -> Spermatozoïdes dans les spermiductes | Ovaires -> Ovocyte II dans les trompes",
        "Fonction endocrine : Cellules de Leydig -> Testostérone -> Maintien voies génitales & caractères secondaires",
        "Fonction endocrine femelle : Follicules ovariens -> Œstrogènes | Corps jaune -> Progestérone + Œstrogènes",
        "Définition d'une hormone : Substance chimique sécrétée par une glande endocrine, véhiculée par le sang, agissant à faible dose sur des cellules cibles spécifiques possédant des récepteurs adaptés"
      ],
      methods: [
        "Interpréter une expérience d'ablation et de compensation : 1. Constatez l'effet de l'ablation (disparition de la fonction). 2. Observez l'effet de la greffe ectopique ou des injections d'extraits. 3. Si la fonction est rétablie par voie sanguine -> conclure à une commande endocrine (hormonale). 4. Si la stérilité persiste -> la production de cellules nécessite les conduits anatomiques (voie exocrine).",
        "Annoter une coupe de tube séminifère de la périphérie vers la lumière : 1. Enveloppe conjonctive externe. 2. Spermatogonies (2n). 3. Spermatocytes I (2n). 4. Spermatocytes II (n). 5. Spermatides (n). 6. Spermatozoïdes (n) libres dans la lumière. 7. Cellules de Sertoli géantes de soutien. 8. Cellules de Leydig entre les tubes."
      ]
    },
    {
      id: "ch7",
      lessonNumber: 7,
      title: "La gamétogenèse chez les mammifères",
      theme: "La reproduction chez les mammifères",
      duration: "12H",
      topics: [
        "Définition de la gamétogenèse : ensemble des processus cellulaires et moléculaires permettant la formation des gamètes haploïdes (n) à partir de cellules germinales souches diploïdes (2n)",
        "I. La spermatogenèse (formation des spermatozoïdes) :",
        "- Déroulement continu de la puberté jusqu'à la fin de la vie dans la paroi des tubes séminifères (durée ~74 jours chez l'Homme)",
        "- Les 4 étapes successives :",
        "  1. Phase de multiplication : mitoses successives des spermatogonies souches (2n) situées contre la membrane basale pour régénérer le stock et produire des spermatogonies filles",
        "  2. Phase d'accroissement : augmentation modérée du volume cellulaire sans division -> transformation des spermatogonies en spermatocytes de premier ordre ou spermatocytes I (2n)",
        "  3. Phase de maturation (la méiose) :",
        "     * 1ère division méiotique (réductionnelle) : chaque spermatocyte I (2n) donne deux spermatocytes de deuxième ordre ou spermatocytes II (n)",
        "     * 2ème division méiotique (équationnelle) : chaque spermatocyte II (n) donne deux spermatides (n). Soit 4 spermatides pour 1 spermatocyte I",
        "  4. Phase de différenciation ou spermiogenèse : transformation morphologique radicale des spermatides rondes en spermatozoïdes hautement différenciés :",
        "     - L'appareil de Golgi fusionne pour former l'acrosome coiffant le noyau et riche en enzymes hydrolytiques",
        "     - Le noyau se condense et s'étire",
        "     - Les centrioles migrent : le distal élabore l'axonème du flagelle locomoteur",
        "     - Les mitochondries se regroupent en spirale autour de l'axe flagellaire pour former le manchon mitochondrial de la pièce intermédiaire (fourniture d'ATP)",
        "     - Le cytoplasme excédentaire est rejeté sous forme de gouttelettes phagocytées par les cellules de Sertoli",
        "II. L'ovogenèse (formation des ovocytes) :",
        "- Déroulement discontinu en 3 étapes (absence de phase de différenciation) :",
        "  1. Phase de multiplication : se déroule EXCLUSIVEMENT pendant la vie embryonnaire in utero chez le fœtus femelle ; mitoses des ovogonies (2n), s'arrêtant avant la naissance",
        "  2. Phase d'accroissement : pendant la vie fœtale, les ovogonies augmentent considérablement de taille par accumulation de vitellus et réserves nutritives pour devenir des ovocytes I (2n). Chaque ovocyte I s'entoure de quelques cellules folliculaires aplaties pour former un follicule primordial",
        "  3. Entrée en méiose et blocage : les ovocytes I entament la prophase de la méiose I et s'y bloquent (stade dictyotène). Longue période de repos ou quiescence de la naissance à la puberté. Phénomène d'atrésie folliculaire réduisant le stock initial de 7 millions d'ovocytes à ~2 millions à la naissance, puis ~400 000 à la puberté (seuls environ 400 ovocytes arriveront à ovulation au cours de la vie génitale)",
        "  4. Phase de maturation : reprend cycliquement à chaque cycle menstruel à partir de la puberté :",
        "     * Achèvement de la 1ère division méiotique quelques heures avant l'ovulation : division cytoplasmique très inégale donnant une volumineuse cellule riche en cytoplasme, l'ovocyte II (n), et une minuscule cellule abortive, le premier globule polaire GP1 (n)",
        "     * La 2ème division méiotique s'enclenche immédiatement mais se bloque en métaphase II",
        "     * C'est l'ovocyte II bloqué en métaphase II qui est expulsé lors de l'ovulation",
        "     * La méiose II ne s'achève QUE S'IL Y A PÉNÉTRATION D'UN SPERMATOZOÏDE (fécondation), expulsant alors le second globule polaire GP2 (n) et laissant l'ovotide / ovule mûr",
        "III. Les étapes de la méiose et les brassages chromosomiques :",
        "- Division réductionnelle (Méiose I) :",
        "  * Prophase I : condensation des chromosomes fissurés, appariement intime des chromosomes homologues formant des paires de bivalents (tétrades), contacts au niveau de chiasmas avec échange physique de segments de chromatides non-sœurs entre homologues : c'est le BRASSAGE INTRACHROMOSOMIQUE ou CROSSING-OVER",
        "  * Métaphase I : disposition des bivalents de part et d'autre du plan équatorial du fuseau achromatique",
        "  * Anaphase I : séparation des chromosomes homologues entiers (à 2 chromatides, sans clivage du centromère) qui migrent chacun vers un pôle opposé ; disposition et ségrégation totalement aléatoire et indépendante des chromosomes d'origine paternelle et maternelle : c'est le BRASSAGE INTERCHROMOSOMIQUE",
        "  * Télophase I : formation de deux cellules haploïdes à n chromosomes dédoublés",
        "- Division équationnelle (Méiose II) : similaire à une mitose conforme sans réplication préalable d'ADN (prophase II, métaphase II équatoriale, anaphase II avec clivage des centromères et séparation des chromatides sœurs, télophase II donnant 4 cellules filles haploïdes)",
        "IV. Aberrations chromosomiques (méioses atypiques) :",
        "- Anomalies de nombre consécutives à une non-disjonction des homologues en anaphase I ou des chromatides en anaphase II :",
        "  * Trisomie 21 (Syndrome de Down / mongolisme) : caryotype à 47 chromosomes (45 autosomes + XX ou XY, avec 3 exemplaires du chromosome 21)",
        "  * Syndrome de Klinefelter : 47 chromosomes (44 autosomes + XXY), phénotype masculin stérile aux testicules réduits sans spermatogenèse",
        "  * Syndrome de Turner : 45 chromosomes (44 autosomes + XO), phénotype féminin sans ovaires fonctionnels",
        "  * Triplo-X : 47 chromosomes (44 autosomes + XXX)",
        "  * Trisomies 13, 18, 8 (anomalies autosomiques graves)",
        "- Anomalies de structure : délétion (perte d'un fragment chromosomique, ex : délétion du bras court du chromosome 5 causant le syndrome du cri du chat), translocation (transfert anormal d'un fragment sur un autre chromosome)"
      ],
      formulas: [
        "Spermatogenèse : 1 spermatocyte I (2n) -> 2 spermatocytes II (n) -> 4 spermatides (n) -> 4 spermatozoïdes (n)",
        "Ovogenèse : 1 ovocyte I (2n) -> 1 ovocyte II (n) + 1 GP1 (n) -> (si fécondation) 1 ovotide (n) + 1 GP2 (n)",
        "Diversité des combinaisons interchromosomiques : Nombre de gamètes génétiquement distincts = 2ⁿ (chez l'Homme, 2²³ ≈ 8,4 millions de combinaisons sans compter le crossing-over)"
      ],
      methods: [
        "Dresser un tableau comparatif spermatogenèse vs ovogenèse : 1. Lieu et période (continu puberté-mort vs discontinu embryon-ménopause). 2. Nombre de gamètes formés par cellule souche (4 vs 1). 3. Phase de différenciation (présente vs absente). 4. Égalité des divisions (égale vs très inégale avec globules polaires).",
        "Analyser une anomalie caryotypique : 1. Dénombrer le total des chromosomes. 2. Repérer la paire anormale (autosomes ou gonosomes). 3. Écrire la formule chromosomique officielle (ex: 47, XY, +21). 4. Expliquer le mécanisme d'accident méiotique (non-disjonction lors de l'anaphase I maternelle ou paternelle)."
      ]
    },
    {
      id: "ch8",
      lessonNumber: 8,
      title: "La transmission d'un caractère héréditaire (Génétique)",
      theme: "La transmission des caractères héréditaires",
      duration: "6H",
      topics: [
        "Vocabulaire fondamental de génétique mendélienne :",
        "- Caractère héréditaire : particularité biologique transmise des ascendants aux descendants",
        "- Gène : fragment d'ADN situé en un emplacement précis (le locus) sur un chromosome, déterminant un caractère précis",
        "- Allèle : version ou forme possible d'un même gène (ex: allèle B pour pelage gris, b pour pelage blanc)",
        "- Phénotype : ensemble des caractères observables ou apparents d'un individu (noté entre crochets, ex: [B])",
        "- Génotype : constitution allélique d'un individu pour le ou les gènes considérés (noté par deux allèles séparés par des barres de chromatides, ex: B//b)",
        "- Homozygote (lignée pure) : individu possédant deux allèles identiques sur les loci homologues (B//B ou b//b)",
        "- Hétérozygote (hybride) : individu possédant deux allèles différents sur les loci homologues (B//b)",
        "I. Monohybridisme avec dominance complète (autosomal) :",
        "- Croisement 1 (parents de lignées pures) : Souris grise [B] x Souris blanche [b] -> F1 100% souris grises [B]",
        "  * Interprétation : Première loi de Mendel (uniformité des hybrides de F1). L'allèle gris s'exprime seul, il est DOMINANT (B) ; l'allèle blanc masqué est RÉCESSIF (b)",
        "- Croisement 2 (F1 x F1) : Hybrides gris F1 (B//b) x Hybrides gris F1 (B//b) -> F2 hétérogène : 75% [B] (3/4) et 25% [b] (1/4)",
        "  * Interprétation : Ségrégation 3/4 dominant, 1/4 récessif caractéristique d'un monohybridisme autosomal avec dominance complète (Deuxième loi de Mendel : pureté des gamètes)",
        "- Croisement 3 (Test-cross / Back-cross) : Hybride F1 [B] (B//b) x Parent homozygote récessif [b] (b//b) -> 50% [B] (1/2) et 50% [b] (1/2)",
        "  * Interprétation : la descendance du test-cross est le reflet direct (en nature et en proportions) des gamètes produits par l'individu testé (50% de gamètes B et 50% de gamètes b)",
        "II. Monohybridisme avec codominance (dominance intermédiaire) :",
        "- Croisement 1 chez la Belle de nuit : Lignée pure fleurs rouges [R] x Lignée pure fleurs blanches [B] -> F1 100% fleurs roses [RB]",
        "  * Interprétation : apparition d'un phénotype intermédiaire nouveau car aucun des deux allèles ne domine l'autre (codominance)",
        "- Croisement 2 (F1 x F1) : Fleurs roses [RB] x Fleurs roses [RB] -> F2 hétérogène : 25% [R] (1/4), 50% [RB] (1/2), 25% [B] (1/4)",
        "  * Ségrégation caractéristique 1/4, 1/2, 1/4 révélant la codominance d'un couple d'allèles autosomal",
        "III. Hérédité liée au sexe (gènes hétérosomaux) :",
        "- Localisation sur le chromosome sexuel X, le chromosome Y étant génétiquement inerte (sans allèle correspondant)",
        "- Chez les mammifères et drosophiles : femelle homogamétique (XX), mâle hétérogamétique (XY)",
        "- Critère d'identification : les résultats des croisements réciproques (croisement inverse) sont DIFFÉRENTS et dépendent du sexe des parents :",
        "  * Croisement 1 : Femelle yeux rouges [b+] x Mâle yeux blancs [b] -> F1 100% individus aux yeux rouges (mâles et femelles)",
        "  * Croisement 2 (réciproque) : Femelle yeux blancs [b] (Xb//Xb) x Mâle yeux rouges [b+] (Xb+//Y) -> F1 hétérogène : 50% femelles yeux rouges (Xb+//Xb) et 50% mâles yeux blancs (Xb//Y)",
        "  * Règle d'or : le phénotype récessif de la mère est systématiquement transmis à 100% de ses fils (car le fils reçoit son unique X de sa mère)"
      ],
      formulas: [
        "Échiquier F2 dominance complète (B/b) : Gamètes 1/2 B + 1/2 b -> 1/4 B//B + 2/4 B//b + 1/4 b//b = 3/4 [B] + 1/4 [b]",
        "Échiquier F2 codominance (R/B) : Gamètes 1/2 R + 1/2 B -> 1/4 R//R [R] + 2/4 R//B [RB] + 1/4 B//B [B] = 1/4 [R] + 1/2 [RB] + 1/4 [B]",
        "Test-cross (B//b x b//b) : Gamètes (1/2 B + 1/2 b) x 1 b -> 1/2 B//b [B] + 1/2 b//b [b]",
        "Hérédité liée à l'X (mâle hémizygote) : Mâle [b+] = Xb⁺//Y ; Mâle [b] = Xb//Y ; Femelle conductrice = Xb⁺//Xb"
      ],
      methods: [
        "Déterminer le déterminisme génétique à partir des données : 1. Examiner la F1 : si homogène, parents de souche pure (loi 1 de Mendel). 2. Repérer l'allèle dominant ou s'il y a codominance. 3. Comparer les croisements réciproques : si les proportions diffèrent selon le sexe -> le gène est lié au chromosome X ; si elles sont identiques -> le gène est autosomal. 4. Établir l'échiquier de croisement avec les génotypes pour confirmer la concordance théorique/expérimentale."
      ]
    },
    {
      id: "ch9",
      lessonNumber: 9,
      title: "La synthèse des protéines et le code génétique",
      theme: "La transmission des caractères héréditaires",
      duration: "6H",
      topics: [
        "Rôle fondamental des protéines : macromolécules assurant les structures et les fonctions biologiques (enzymes, hémoglobine, hormones peptidiques, récepteurs), traduisant l'information des gènes en caractères phénotypiques",
        "Les acteurs indispensables à la biosynthèse des protéines :",
        "1. L'ADN (acide désoxyribonucléique) : molécule bicaténaire hélicoïdale (double hélice) contenue dans le noyau, matrice universelle de l'information génétique, succession de désoxyribonucléotides (A, T, C, G)",
        "2. L'ARN messager (ARNm) : copie monocaténaire d'un gène, ribonucléotides (A, U, C, G où l'uracile U remplace la thymine T), molécule intermédiaire mobile franchissant l'enveloppe nucléaire vers le cytoplasme",
        "3. L'ARN de transfert (ARNt) : molécule adaptatrice en forme de trèfle portant à une extrémité un site de fixation pour un acide aminé spécifique et à l'autre extrémité un triplet de bases complémentaire appelé ANTICODON",
        "4. Les ribosomes : organites cytoplasmiques constitués d'ARNr et de protéines, formés de deux sous-unités (petite et grande) ménageant deux cavités catalytiques : le site P (peptidyle) et le site A (aminoacyle)",
        "5. Les 20 acides aminés libres du pool cytoplasmique, les enzymes spécifiques (ARN polymérase, aminoacyl-ARNt synthétases, peptidases) et l'énergie métabolique (ATP)",
        "Le code génétique :",
        "- Système universel de correspondance entre les triplets de nucléotides de l'ARNm (codons) et les acides aminés constitutifs des protéines",
        "- Caractéristiques fondamentales :",
        "  * Comprend 64 codons au total (4³)",
        "  * 61 codons désignent un acide aminé précis",
        "  * 1 codon d'initiation unique : AUG, codant pour la méthionine et marquant le début obligatoire de la traduction",
        "  * 3 codons non-sens ou codons stop : UAA, UAG, UGA ne correspondant à aucun acide aminé et déclenchant l'arrêt de la chaîne polypeptidique",
        "  * Redondant ou dégénéré : plusieurs codons synonymes (de 2 à 6) codent pour un même acide aminé (ex: leucine codée par 6 codons, glycine par 4 codons)",
        "  * Non ambigu : un codon donné ne spécifie qu'un seul et unique acide aminé",
        "  * Universel : le même code est partagé par tous les êtres vivants de la biosphère (preuve de l'origine commune du vivant)",
        "Mécanisme de la biosynthèse en deux grandes phases :",
        "1. La transcription (dans le noyau cellulaire) :",
        "   - L'ARN polymérase s'associe au promoteur du gène et écarte localement les deux brins d'ADN",
        "   - Elle lit le brin transcrit (ou brin matrice/codant) dans le sens 3' -> 5' et synthétise l'ARNm dans le sens 5' -> 3' par complémentarité stricte des bases azotées : A de l'ADN s'apparie avec U de l'ARN, T avec A, C avec G, et G avec C",
        "   - L'ARNm synthétisé se détache, l'ADN se referme, et l'ARNm migre dans le cytoplasme à travers les pores nucléaires",
        "2. La traduction (dans le cytoplasme au niveau des ribosomes) en 3 étapes :",
        "   - Initiation : la petite sous-unité du ribosome reconnaît et s'attache à l'extrémité 5' de l'ARNm au niveau du codon initiateur AUG ; l'ARNt initiateur portant la méthionine (anticodon 3'-UAC-5') se fixe au codon AUG ; la grande sous-unité s'assemble pour positionner cet ARNt dans le site P",
        "   - Élongation : un deuxième ARNt chargé de son acide aminé correspondant entre dans le site A libre ; une liaison peptidique se forme entre les deux acides aminés grâce à la peptidase (dépense d'ATP) ; le premier ARNt déchargé est libéré ; le ribosome se déplace (translocation) exactement d'un codon (3 nucléotides) vers l'extrémité 3' de l'ARNm, déplaçant le dipeptidyl-ARNt dans le site P et libérant le site A pour le 3e codon",
        "   - Terminaison : le ribosome rencontre un codon stop (UAA, UAG ou UGA) au site A ; aucun ARNt n'y correspond ; un facteur de dissociation provoque le clivage de la chaîne polypeptidique complète, la séparation des deux sous-unités ribosomiques et de l'ARNm ; la méthionine initiale est ensuite éliminée",
        "Relations gène-protéine et anomalies génétiques :",
        "- Une modification d'une seule base dans le gène (mutation ponctuelle) peut changer un acide aminé et altérer gravement la fonction de la protéine",
        "- Exemple médical classique : l'anémie falciforme (drépanocytose). L'hémoglobine normale HbA possède la séquence ...-Val-His-Leu-Thr-Pro-Glu-... alors que l'hémoglobine drépanocytaire HbS possède ...-Val-His-Leu-Thr-Pro-Val-... au 6e acide aminé. Cette substitution résulte du remplacement d'un nucléotide thymine (T) par une adénine (A) au niveau du 17e nucléotide du gène codant la chaîne β (brin transcrit CTC normal devenu CAC anormal)"
      ],
      formulas: [
        "Complémentarité Transcription : ADN matrice 3'-TAC-5' -> ARNm 5'-AUG-3'",
        "Complémentarité Traduction : ARNm 5'-AUG-3' <-> Anticodon ARNt 3'-UAC-5' (Méthionine)",
        "Calcul longueur ARNm / protéine : Nombre de nucléotides codants = 3 x Nombre d'acides aminés (hors codon stop)",
        "Formation de la liaison peptidique : R1-CH(NH2)-COOH + H2N-CH(R2)-COOH -> R1-CH(NH2)-CO-NH-CH(R2)-COOH + H2O"
      ],
      methods: [
        "Déchiffrer une séquence du brin d'ADN jusqu'à la protéine : 1. Repérer le brin transcrit (ou déterminer le brin matrice complémentaire au brin non codant). 2. Remplacer chaque base par son complémentaire ARN (A->U, T->A, C->G, G->C). 3. Découper l'ARNm en triplets (codons) à partir de AUG. 4. Utiliser le tableau du code génétique pour écrire la suite linéaire des acides aminés. 5. S'arrêter au codon stop.",
        "Analyser l'impact d'une mutation : 1. Comparer les deux séquences d'ADN alignées base par base. 2. Détecter l'emplacement exact de la substitution, délétion ou insertion. 3. Déterminer si le nouveau codon code pour le même acide aminé (mutation silencieuse), un acide aminé différent (mutation faux-sens) ou un codon stop prématuré (mutation non-sens)."
      ]
    },
    {
      id: "ch10",
      lessonNumber: 10,
      title: "La production de la matière organique : la photosynthèse",
      theme: "La production de la matière organique et son utilisation",
      duration: "9H",
      topics: [
        "La photosynthèse est le processus biochimique par lequel les végétaux chlorophylliens autotrophes convertissent l'énergie lumineuse en énergie chimique stockée dans la matière organique (glucides, protides, lipides) à partir d'eau et de CO2 avec dégagement d'O2",
        "Facteurs environnementaux régissant l'intensité photosynthétique (IP) :",
        "1. L'éclairement lumineux :",
        "   - En obscurité ou faible luminosité : dégagement d'O2 négatif (la plante respire et consomme de l'O2)",
        "   - Point de compensation lumineux (Pc) : intensité lumineuse où la photosynthèse compense exactement la respiration (production d'O2 = consommation d'O2, dégagement net nul)",
        "   - Croissance de l'IP avec la lumière jusqu'à un plateau de saturation lumineuse",
        "   - Adaptation écologique : plantes de soleil ou héliophiles (ex: tomate, maïs) saturant à fort éclairement (>70%) vs plantes d'ombre ou sciaphiles (ex: fougère) saturant à faible éclairement (20%) et dont les structures chlorophylliennes se détériorent à trop forte lumière",
        "2. La concentration en CO2 :",
        "   - Facteur limitant dans l'atmosphère naturelle (teneur faible ~0,03% à 0,04%)",
        "   - L'IP augmente proportionnellement avec la concentration de CO2 jusqu'à un seuil de saturation des enzymes à environ 0,4% de CO2",
        "3. La température :",
        "   - Courbe en cloche caractéristique de réactions catalysées par des enzymes : nulle à 0°C (inactivation réversible par le froid), maximale à l'optimum thermique (~30°C - 37°C), chute et annulation vers 45°C - 50°C par dénaturation thermique irréversible des protéines enzymatiques",
        "Structure et pigments des chloroplastes :",
        "- Organite cytoplasmique ovoïde à double membrane (externe et interne) délimitant un stroma fluide contenant des ribosomes, de l'ADN circulaire et des thylakoïdes empilés en grana",
        "- Les pigments chlorophylliens sont localisés dans les membranes des thylakoïdes",
        "- Chromatographie sur papier : séparation de 4 pigments :",
        "  1. Chlorophylle a (vert bleu/franc)",
        "  2. Chlorophylle b (vert jaune)",
        "  3. Xanthophylles (jaune)",
        "  4. Carotène (jaune-orangé, le plus soluble qui migre le plus haut avec le front du solvant)",
        "- Spectres d'absorption : la chlorophylle brute absorbe fortement les radiations bleues (400-450 nm) et rouges (650-700 nm), mais n'absorbe pas les radiations vertes (500-550 nm) qui sont transmises ou réfléchies, donnant sa couleur verte à la feuille",
        "Mécanisme complet de la photosynthèse en 2 phases complémentaires :",
        "1. La phase lumineuse ou photochimique (dans la membrane des thylakoïdes, dépendante de la lumière) :",
        "   - Étape 1 (Capture des photons & photolyse de l'eau) : les pigments absorbent la lumière, excitent la chlorophylle qui perd des électrons (chlorophylle oxydée). Elle récupère des électrons par oxydation de l'eau (photolyse) : H2O -> 2 H+ + 1/2 O2 + 2 e-. Le dioxygène O2 est rejeté dans l'atmosphère",
        "   - Étape 2 (Phosphorylation de l'ADP) : les électrons circulent le long d'une chaîne photosynthétique d'oxydoréduction couplée à un pompage de protons dans le lumen des thylakoïdes ; le reflux des protons à travers les sphères pédonculées (ATP-synthase) active la phosphorylation : ADP + Pi -> ATP",
        "   - Étape 3 (Réduction du transporteur) : les électrons et les protons H+ réduisent le transporteur final T+ (NADP+) : T+ + 2 H+ + 2 e- -> TH,H+ (ou NADPH,H+)",
        "2. La phase sombre ou thermochimique (dans le stroma, indépendante de la lumière directe mais utilisant l'ATP et le TH2) :",
        "   - Cycle de Calvin (assimilation du dioxyde de carbone) :",
        "   - Fixation du CO2 sur un composé à 5 carbones, le ribulose-1,5-diphosphate (Rudip), catalysée par la ribulose-carboxylase (Rubisco) pour donner un composé instable en C6 découpé en 2 acides phosphoglycériques (APG en C3)",
        "   - Réduction de l'APG en trioses-phosphates (C3P) grâce à l'énergie de l'ATP et au pouvoir réducteur de TH2 issus de la phase claire",
        "   - Une partie des trioses sert à régénérer le Rudip pour perpétuer le cycle",
        "   - L'autre partie est exportée pour synthétiser le glucose, l'amidon, les acides aminés et les lipides",
        "Équation globale bilan : 6 CO2 + 6 H2O + énergie lumineuse -> C6H12O6 (glucose) + 6 O2"
      ],
      formulas: [
        "Photolyse de l'eau : H2O -> 2 H⁺ + 1/2 O2 + 2 e⁻ (ou 2 H2O -> 4 H⁺ + O2 + 4 e⁻)",
        "Production d'ATP photochimique : ADP + Pi + Énergie -> ATP",
        "Réduction du transporteur : T⁺ + 2 H⁺ + 2 e⁻ -> TH2 (NADPH,H⁺)",
        "Équation globale photosynthèse : 6 CO2 + 6 H2O -> C6H12O6 + 6 O2",
        "Rapport de photosynthèse : 6 molécules de CO2 fixées = 1 molécule de glucose produite = 6 molécules d'O2 libérées"
      ],
      methods: [
        "Interpréter une expérience sur feuille panachée à l'eau iodée : 1. Rappeler que l'eau iodée colore l'amidon en bleu-violacé. 2. Noter que seule la partie verte initialement éclairée vire au bleu-violacé. 3. Conclure que la synthèse de matière organique (amidon) exige la présence simultanée de chlorophylle et de lumière.",
        "Analyser une courbe d'influence de l'éclairement : 1. Identifier le point de compensation (intersection avec l'axe horizontal, production d'O2 = 0). 2. Repérer la zone de proportionnalité (la lumière est facteur limitant). 3. Identifier le seuil de saturation (plateau où un autre facteur devient limitant)."
      ]
    },
    {
      id: "ch11",
      lessonNumber: 11,
      title: "La digestion des aliments",
      theme: "La production de la matière organique et son utilisation",
      duration: "6H",
      topics: [
        "Définition biologique de la digestion : ensemble des phénomènes mécaniques et chimiques assurant la simplification moléculaire des aliments complexes en nutriments simples solubles assimilables par l'organisme",
        "Les réactions chimiques de la digestion sont des HYDROLYSES catalysées par des enzymes spécifiques sécrétées par les glandes digestives (salivaires, gastriques, pancréatiques, hépatiques, intestinales)",
        "Digestion par familles biochimiques :",
        "1. Digestion des glucides :",
        "   - Dans la bouche : mastication et action de l'amylase salivaire hydrolysant l'amidon cuit en maltose (diholoside réducteur)",
        "   - Dans le duodénum : l'amylase pancréatique poursuit l'hydrolyse de l'amidon résiduel",
        "   - Dans l'intestin grêle : la maltase intestinale hydrolyse le maltose en deux molécules de glucose (monosaccharide directement absorbable)",
        "2. Digestion des protides :",
        "   - Dans l'estomac : le suc gastrique acide active la pepsine qui hydrolyse les grosses protéines en peptides et oligopeptides solubles",
        "   - Dans le duodénum : la trypsine et la chymotrypsine pancréatiques continuent le découpage des peptides",
        "   - Dans l'intestin grêle : les peptidases intestinales achèvent l'hydrolyse des peptides en acides aminés libres",
        "3. Digestion des lipides :",
        "   - Rôle de la bile (sécrétée par le foie, stockée dans la vésicule biliaire) : ne contient pas d'enzymes mais des sels biliaires qui émulsionnent les graisses en fines gouttelettes",
        "   - Dans le duodénum et intestin grêle : la lipase pancréatique hydrolyse les triglycérides émulsionnés en acides gras et glycérol",
        "Propriétés fondamentales des enzymes digestives (biocatalyseurs) :",
        "- Nature protéique : accélèrent les réactions biochimiques sans être consommées ni modifiées au cours de la réaction",
        "- Haute spécificité de substrat : une enzyme n'agit que sur un substrat chimique précis (ex: l'amylase n'agit que sur l'amidon, la pepsine sur les protéines, la lipase sur les lipides)",
        "- Haute spécificité d'action : une enzyme ne catalyse qu'un type unique de réaction chimique (hydrolyse)",
        "- Formation d'un complexe enzyme-substrat [ES] au niveau du site actif par complémentarité de forme, aboutissant à la libération des produits [P1 + P2] et de l'enzyme intacte [E]",
        "Conditions physico-chimiques d'action :",
        "- Température : activité optimale à 37°C (température corporelle). À 0°C-20°C : enzyme inactivée mais préservée (l'activité reprend si on réchauffe). À >60°C : enzyme définitivement dénaturée et détruite (perte irréversible de la structure spatiale tridimensionnelle du site actif)",
        "- pH du milieu : chaque enzyme possède un pH optimal strict :",
        "  * Pepsine gastrique : active uniquement en milieu très acide (pH 1,5 à 2, grâce à l'acide chlorhydrique HCl de l'estomac)",
        "  * Amylase salivaire : active à pH neutre ou légèrement alcalin (pH 6,8 à 7,5), totalement inhibée en milieu acide",
        "  * Trypsine et lipase : actives en milieu basique/alcalin (pH 8, grâce aux bicarbonates pancréatiques neutralisant l'acidité gastrique)"
      ],
      formulas: [
        "Complexe enzyme-substrat : E + S <=> [ES] -> E + P1 + P2",
        "Hydrolyse de l'amidon : Amidon (C6H10O5)n + H2O --[Amylase]--> Maltose (C12H22O11) ; Maltose + H2O --[Maltase]--> 2 Glucose (C6H12O6)",
        "Hydrolyse des protéines : Protéines + H2O --[Pepsine/Trypsine]--> Peptides ; Peptides + H2O --[Peptidases]--> Acides aminés",
        "Hydrolyse des lipides : Triglycéride + 3 H2O --[Lipase + Sels biliaires]--> Glycérol + 3 Acides gras"
      ],
      methods: [
        "Interpréter une série expérimentale de digestion in vitro (tubes à essais) : 1. Repérer le contenu (substrat + enzyme + réactif chimique). 2. Relever les conditions (bain-marie, pH). 3. Analyser les tests caractéristiques : eau iodée (bleu = présence amidon intact ; jaune/or = absence/digéré), liqueur de Fehling (précipité rouge brique = présence de sucre réducteur). 4. Conclure sur le rôle de l'enzyme et ses conditions optimales.",
        "Expliquer la différence entre catalyseur biologique et chimique : L'amylase salivaire (biocatalyseur) hydrolyse l'amidon en quelques minutes à 37°C et pH neutre, alors que l'acide chlorhydrique HCl (catalyseur chimique) exige une ébullition prolongée à 100°C pendant des heures."
      ]
    },
    {
      id: "ch12",
      lessonNumber: 12,
      title: "L'absorption des nutriments",
      theme: "La production de la matière organique et son utilisation",
      duration: "6H",
      topics: [
        "Définition de l'absorption intestinale : processus par lequel les nutriments solubles issus de la digestion franchissent la barrière épithéliale intestinale pour passer dans le milieu intérieur (sang et lymphe)",
        "Structure spécialisée de la muqueuse de l'intestin grêle :",
        "- Surface gigantesque (~200 à 300 m²) résultant de 3 niveaux de replis : valvules conniventes -> villosités intestinales (doigts de gant) -> microvillosités sur la membrane apicale des entérocytes (cellules épithéliales à plateau strié)",
        "- Richesse de la vascularisation : chaque villosité contient une artériole, un réseau très dense de capillaires sanguins entourant un vaisseau lymphatique central en cul-de-sac appelé le CHYLIFÈRE central",
        "- Épithélium très mince (une seule couche de cellules perméables) facilitant la diffusion rapide des molécules",
        "Les deux voies d'absorption des nutriments :",
        "1. La voie sanguine :",
        "   - Trajet : capillaires de la villosité -> veinules mésentériques -> veine porte hépatique -> FOIE (organe de stockage et régulateur glycémique) -> veines sus-hépatiques -> veine cave inférieure -> cœur droit",
        "   - Nutriments empruntant la voie sanguine : substances hydrosolubles : eau, sels minéraux (Na+, K+, Ca2+, Cl-), oses simples (glucose, fructose, galactose), acides aminés, vitamines hydrosolubles (vitamine C, vitamines du groupe B)",
        "2. La voie lymphatique :",
        "   - Trajet : chylifère central de la villosité -> vaisseaux lymphatiques mésentériques -> canal thoracique -> citerne de Pecquet -> veine sous-clavière gauche -> veine cave supérieure -> cœur droit (SANS PASSAGE PRÉALABLE PAR LE FOIE)",
        "   - Nutriments empruntant la voie lymphatique : substances liposolubles : acides gras à longue chaîne, glycérol (recombinés en triglycérides dans les chylomicrons), vitamines liposolubles (A, D, E, K)",
        "Mécanismes biophysiques du passage transmembranaire :",
        "- Transports passifs (sans consommation d'énergie cellulaire) :",
        "  * Dialyse / diffusion : passage de solutés du compartiment le plus concentré vers le moins concentré (selon le gradient de concentration). Exemple : le fructose traverse la paroi intestinale à vitesse égale dans les deux sens (44 u.a.) par diffusion passive",
        "  * Osmose : déplacement spontané des molécules d'eau à travers une membrane semi-perméable du milieu hypotonique vers le milieu hypertonique",
        "- Transport actif (avec dépense d'énergie et transporteurs protéiques) :",
        "  * Passage de nutriments contre leur gradient de concentration grâce à des transporteurs membranaires spécifiques (perméases / symports)",
        "  * Nécessite impérativement de l'oxygène pour produire de l'énergie sous forme d'ATP via la respiration cellulaire",
        "  * Preuve expérimentale sur anses intestinales de hamster :",
        "    - En présence d'oxygène : le glucose passe de l'intérieur du sac vers le bain physiologique 20 fois plus vite que dans le sens inverse (100 u.a. contre 5 u.a.), créant une concentration plus forte à l'extérieur (14 mmol/L vs 2 mmol/L)",
        "    - En présence d'azote (anoxie / absence d'O2) : la concentration reste égale (8 mmol/L de part et d'autre) car le transport actif est paralysé faute d'ATP"
      ],
      formulas: [
        "Bilan voie sanguine : Nutriments hydrosolubles -> Capillaires -> Veine porte -> Foie -> Veine cave inférieure",
        "Bilan voie lymphatique : Nutriments liposolubles -> Chylifère -> Vaisseaux lymphatiques -> Canal thoracique -> Veine sous-clavière",
        "Critère de transport actif : Vitesse asymétrique + Contre gradient + Bloqué en absence d'O2 (inhibiteurs respiratoires)"
      ],
      methods: [
        "Différencier transport passif et transport actif à partir d'un tableau d'expériences : 1. Comparer les vitesses dans les deux sens (sens interne->bain et bain->interne). Si vitesse identique -> transport passif (dialyse). Si vitesse très supérieure dans un sens -> transport orienté. 2. Comparer les résultats en présence d'oxygène vs azote : si le transport s'arrête en présence d'azote -> c'est un transport actif dépendant de l'énergie respiratoire (ATP).",
        "Classer un nutriment selon sa voie d'absorption : 1. Analyser sa solubilité : polaire/soluble dans l'eau (glucose, acides aminés, sels) -> voie sanguine vers le foie. 2. Apolaire/soluble dans les graisses (acides gras, vitamines A, D, E, K) -> voie lymphatique chylifère."
      ]
    }
  ]
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
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné en 1ère D SVT
 */
export function findSvt1ereDChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return svt1ereDKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = svt1ereDKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const themeTokens = chapter.theme ? normalizeQuery(chapter.theme) : [];
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 10;
      if (themeTokens.includes(token)) score += 6;
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
    : (svt1ereDKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

/**
 * Construit le contexte texte officiel de 1ère D SVT pour enrichir la réponse et la méthodologie
 */
export function buildSvt1ereDContext(query: string): string {
  const chapters = findSvt1ereDChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Thème : ${ch.theme || "SVT 1ère D"} - Niveau : ${svt1ereDKnowledgeBase.level})\nSource : ${svt1ereDKnowledgeBase.source}`;
    const topics = `#### NOTIONS FONDAMENTALES & PROTOCOLES :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES, PRINCIPES ET LOIS SCIENTIFIQUES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES D'ANALYSE MÉTHODOLOGIQUE PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE SVT PREMIÈRE D (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
