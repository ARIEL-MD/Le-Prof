/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SVT PREMIÈRE A
 * Source : Mon École à la Maison — Côte d'Ivoire École Numérique / MENA (Ministère de l'Éducation Nationale et de l'Alphabétisation)
 * 
 * Contient les 8 leçons fondamentales du programme officiel ivoirien de 1ère A :
 * 1. Les anomalies chromosomiques et la génétique humaine (Caryotypes, Trisomie 21, Turner, Klinefelter, délétions)
 * 2. Les cycles sexuels chez la femme et leur régulation (Cycles ovarien et utérin, rétrocontrôles, GnRH, FSH, LH, œstradiol, progestérone)
 * 3. La régulation des naissances et la planification familiale (Méthodes naturelles, mécaniques, hormonales, pilules, DIU, préservatifs)
 * 4. La production d'énergie par la cellule : respiration et fermentation (ATP, glycolyse, cycle de Krebs, phosphorylation oxydative, levures)
 * 5. La mise en réserve des nutriments et régulation de la glycémie (Glycogène hépatique/musculaire, îlots de Langerhans, insuline, glucagon, diabète)
 * 6. La transmission d'un caractère héréditaire lié aux autosomes chez l'Homme (Pedigrees, albinisme récessif, drépanocytose codominante A/S)
 * 7. Le réflexe conditionnel (Pavlov, conditionnement classique, stimulus inconditionnel et conditionnel, liaisons corticales temporaires)
 * 8. Les effets des drogues sur le comportement (Classification stimulants, dépresseurs, perturbateurs, synapse, dopamine, dépendance et tolérance)
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

export const svt1ereAKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVT 1ère A",
  version: "1.0.0",
  source: "Mon École à la Maison — Côte d'Ivoire École Numérique / MENA",
  level: "Première A",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Les anomalies chromosomiques et la génétique humaine",
      theme: "La reproduction et l'hérédité humaine",
      duration: "5H",
      topics: [
        "Le caryotype humain normal :",
        "- 46 chromosomes classés par paires d'homologues selon la taille, la position du centromère et les bandes de coloration",
        "- 22 paires d'autosomes (chromosomes non sexuels identiques dans les deux sexes, numérotés de 1 à 22)",
        "- 1 paire d'hétérochromosomes ou gonosomes (chromosomes sexuels) : XX chez la femme (44A + XX), XY chez l'homme (44A + XY)",
        "Anomalies chromosomiques de nombre (aneuploïdies) par non-disjonction méiotique :",
        "1. Trisomie 21 ou Syndrome de Down (mongolisme) :",
        "   - Caryotype à 47 chromosomes : présence d'un 3e chromosome surnuméraire sur la paire 21 (formule : 47, XX, +21 ou 47, XY, +21)",
        "   - Signes cliniques : faciès lunaire, yeux bridés à repli épicanthique, pli palmaire transverse unique, hypotonie musculaire, retard intellectuel variable, malformations cardiaques fréquentes",
        "   - Facteur de risque majeur : corrélation directe avec l'âge maternel avancé au moment de la conception (fréquence de 1/2000 à 20 ans, grimpant à plus de 1/50 après 40 ans due au vieillissement des ovocytes I bloqués depuis la vie fœtale)",
        "2. Syndrome de Turner :",
        "   - Caryotype à 45 chromosomes : monosomie du chromosome X (formule : 45, X0 ou 45, X)",
        "   - Phénotype féminin, petite taille, cou palmé, thorax en bouclier, absence de puberté spontanée, ovaires réduits à des bandelettes fibreuses non fonctionnelles, stérilité absolue",
        "3. Syndrome de Klinefelter :",
        "   - Caryotype à 47 chromosomes : présence d'un chromosome X supplémentaire chez un individu mâle (formule : 47, XXY)",
        "   - Phénotype masculin, grande taille aux membres allongés, gynécomastie (développement anormal des seins), atrophie testiculaire, absence de spermatogenèse (azoospermie), stérilité",
        "4. Autres anomalies de nombre : Triplo-X (47, XXX, femme phénotypiquement quasi normale), Syndrome du double Y (47, XYY, homme de grande taille)",
        "Anomalies chromosomiques de structure :",
        "- Délétions : perte d'un segment chromosomique (ex: maladie du cri du chat consécutive à la délétion partielle du bras court du chromosome 5, formule : 46, XX ou XY, 5p- ; cris aigus évoquant un miaulement, microcéphalie et retard sévère)",
        "- Translocations : transfert anormal d'un fragment de chromosome sur un chromosome non homologue",
        "Mécanisme cytologique de survenue : accident de méiose lors de la gamétogenèse chez l'un des parents par non-séparation des deux chromosomes homologues en anaphase I, ou non-clivage des chromatides sœurs en anaphase II, générant des gamètes anormaux à n+1 ou n-1 chromosomes"
      ],
      formulas: [
        "Caryotype humain normal : Homme = 46, XY (ou 44A + XY) | Femme = 46, XX (ou 44A + XX)",
        "Trisomie 21 : 47, XY, +21 ou 47, XX, +21",
        "Syndrome de Turner : 45, X0 (ou 45, X)",
        "Syndrome de Klinefelter : 47, XXY",
        "Mécanisme d'aneuploïdie : Gamète anormal (n+1) + Gamète normal (n) -> Zygote trisomique (2n+1 = 47 chr) | Gamète anormal (n-1) + Gamète normal (n) -> Zygote monosomique (2n-1 = 45 chr)"
      ],
      methods: [
        "Analyser un caryotype médical : 1. Dénombrer le nombre total de chromosomes (46, 45 ou 47). 2. Vérifier les gonosomes (XX, XY, X0 ou XXY). 3. Examiner systématiquement chaque paire d'autosomes pour repérer un triplet ou une anomalie de taille. 4. Écrire la formule chromosomique normalisée et identifier le syndrome correspondant."
      ]
    },
    {
      id: "ch2",
      lessonNumber: 2,
      title: "Les cycles sexuels chez la femme et leur régulation",
      theme: "La reproduction et l'hérédité humaine",
      duration: "7H",
      topics: [
        "Synchronisme et périodicité des cycles sexuels féminins (durée moyenne de référence de 28 jours) :",
        "1. Le cycle ovarien (déroulement dans les ovaires) :",
        "   - Phase folliculaire (pré-ovulatoire, du 1er au 13e jour) : sous l'action de la FSH, quelques follicules cavitaires grandissent ; un seul devient le follicule dominant de De Graaf mûr, contenant un ovocyte II ; les cellules de la thèque interne et de la granulosa sécrètent des concentrations croissantes d'ŒSTROGÈNES (œstradiol)",
        "   - Ovulation (14e jour d'un cycle régulier de 28 jours) : rupture du follicule de De Graaf mûr à la surface de l'ovaire et libération de l'ovocyte II capté par le pavillon de la trompe",
        "   - Phase lutéinique ou lutéale (post-ovulatoire, invariable de 14 jours, du 14e au 28e jour) : le follicule rompu se transforme en CORPS JAUNE grâce à la LH ; le corps jaune sécrète conjointement de fortes quantités de PROGESTÉRONE et d'œstrogènes ; en l'absence de fécondation, le corps jaune régresse (lutéolyse) et devient un corps blanc fibreux, provoquant la chute brutale des hormones ovariennes à J28",
        "2. Le cycle utérin (déroulement dans l'endomètre et le myomètre) :",
        "   - Menstruations ou règles (J1 à J5) : desquamation hémorragique de la couche superficielle de l'endomètre suite à la chute des taux d'œstrogènes et de progestérone à la fin du cycle précédent",
        "   - Phase proliférative (J6 à J14) : sous l'action stimulante des œstrogènes folliculaires, l'endomètre se reconstruit et s'épaissit, les glandes tubulaires s'allongent et se vascularisent",
        "   - Phase sécrétoire (J15 à J28) : sous l'action conjuguée de la progestérone et des œstrogènes, la muqueuse prend un aspect très plissé et festonné en 'dentelle utérine', les glandes deviennent très tortueuses et sécrètent du glycogène et du mucus, les artères spiralées s'enroulent (préparation optimale à l'implantation/nidation de l'embryon)",
        "Le complexe hypothalamo-hypophysaire et la commande hormonale :",
        "- L'hypothalamus sécrète de manière pulsatile une neurohormone, la GnRH (gonadolibérine), dans le système porte hypothalamo-hypophysaire",
        "- La GnRH stimule l'antéhypophyse qui libère deux gonadostimulines glycoprotéiques :",
        "  * FSH (hormone folliculo-stimulante) : responsable de la croissance et de la maturation des follicules ovariens",
        "  * LH (hormone lutéinisante) : déclenche l'ovulation et assure la transformation du follicule vidé en corps jaune actif",
        "Les mécanismes de rétrocontrôle (feed-back) ovarien sur l'axe gonadotrope :",
        "- Rétrocontrôle négatif (RC-) modéré : en début de phase folliculaire, des doses modérées d'œstradiol freinent la sécrétion de FSH/LH pour éviter la maturation de plusieurs follicules",
        "- Rétrocontrôle positif (RC+) : vers le 12e-13e jour, le follicule mûr sécrète une quantité massive d'œstradiol dépassant le seuil critique (>200 pg/mL pendant plus de 36 heures) ; cette forte teneur déclenche une réponse paradoxale stimulatrice brutale : la DÉCHARGE OVULATOIRE OU PIC DE LH ET FSH (le pic de LH déclenche inéluctablement l'ovulation 24 à 36 heures plus tard)",
        "- Rétrocontrôle négatif (RC-) puissant : en phase lutéale, les taux élevés de progestérone et d'œstrogènes exercent un puissant frein sur l'hypothalamus et l'hypophyse, bloquant toute nouvelle ovulation pendant la deuxième moitié du cycle"
      ],
      formulas: [
        "Axe de commande : Hypothalamus (GnRH pulsatile) -> Antéhypophyse (FSH + LH) -> Ovaires (Œstrogènes + Progestérone) -> Utérus (Endomètre)",
        "Rétrocontrôles : Début cycle = RC- modéré | Pic œstradiol J12-J13 = RC+ (Pic de LH) | Phase lutéale = RC- puissant (Progestérone)"
      ],
      methods: [
        "Calculer la date d'ovulation : Pour un cycle régulier de N jours, l'ovulation se produit TOUJOURS 14 jours AVANT le premier jour des règles suivantes (Date ovulation = N - 14 jours). Pour un cycle de 28 jours : 28 - 14 = 14e jour. Pour un cycle de 32 jours : 32 - 14 = 18e jour.",
        "Analyser des courbes de variations hormonales : 1. Repérer le pic d'œstradiol suivi immédiatement du pic de LH/FSH -> marqueur de l'imminence de l'ovulation. 2. Repérer le dôme de progestérone -> confirme la présence d'un corps jaune fonctionnel en phase lutéale. 3. Constater l'effondrement hormonal à J28 -> déclencheur des menstruations."
      ]
    },
    {
      id: "ch3",
      lessonNumber: 3,
      title: "La régulation des naissances et la planification familiale",
      theme: "La reproduction et l'hérédité humaine",
      duration: "5H",
      topics: [
        "Définition et importance de la planification familiale : ensemble des moyens médicaux, éducatifs et sociaux permettant aux couples de choisir librement le moment et le nombre d'enfants qu'ils désirent, d'espacer les naissances, de préserver la santé maternelle et infantile et de lutter contre la pauvreté",
        "I. Les méthodes contraceptives naturelles (d'abstinence périodique) :",
        "- Principe : éviter les rapports sexuels non protégés pendant la période féconde de la femme",
        "- Durée de vie des gamètes : ovocyte fécondable pendant 24 à 48 heures au maximum ; spermatozoïdes capables de féconder pendant 3 à 5 jours (72 à 120 heures) dans les voies génitales féminines",
        "- La méthode d'Ogino-Knaus (méthode du calendrier) : calcul de la période fertile basée sur le fait que l'ovulation se produit toujours 14 jours avant le début des règles suivantes. Période féconde = Date d'ovulation estimée - 3 à 4 jours (survie spermatozoïdes) jusqu'à Date d'ovulation + 2 jours (survie ovocyte). Inefficace et très risquée en cas de cycles irréguliers",
        "- La méthode de la glaire cervicale (Billings) : observation quotidienne de la consistance de la glaire au niveau de la vulve ; en période ovulatoire, sous l'effet des œstrogènes, la glaire devient abondante, claire, fluide, transparente et très filante (comme du blanc d'œuf cru), facilitant le passage des spermatozoïdes",
        "- La méthode des températures : prise de la température rectale chaque matin au réveil avant tout effort ; un décalage thermique thermique d'au moins 0,3°C à 0,5°C sépare le plateau bas folliculaire (température < 37°C) du plateau haut lutéal (température > 37°C sous l'effet hyperthermiant de la progestérone) ; l'ovulation a lieu juste avant le saut thermique",
        "II. Les méthodes contraceptives mécaniques / barrières :",
        "- Le préservatif masculin (condom en latex) : déroulé sur la verge en érection avant tout rapport ; retient le sperme. UNIQUE CONTRACEPTIF assurant simultanément une double protection : prévention des grossesses et protection absolue contre les Infections Sexuellement Transmissibles (IST) et le VIH/SIDA",
        "- Le préservatif féminin : gaine souple en polyuréthane lubrifiée introduite dans le vagin avant le rapport",
        "- Le diaphragme : calotte en caoutchouc placée au fond du vagin contre le col de l'utérus, associée obligatoirement à une crème spermicide",
        "- Le stérilet ou Dispositif Intra-Utérin (DIU au cuivre ou hormonal) : inséré par un médecin dans la cavité utérine pour 5 à 10 ans ; crée une réaction inflammatoire locale aseptique et libère des ions cuivre toxiques pour les spermatozoïdes, empêchant la nidation de l'œuf",
        "III. Les méthodes chimiques et hormonales :",
        "- Les spermicides : ovules ou gels vaginaux contenant des substances chimiques détruisant les membranes des spermatozoïdes",
        "- La pilule contraceptive combinée (œstroprogestative) : prise quotidienne régulière de comprimés associant un œstrogène et un progestatif de synthèse",
        "- Mode d'action hormonal triple :",
        "  1. Blocage de l'ovulation : maintien d'un taux artificiel continu d'hormones exerçant un rétrocontrôle négatif permanent sur l'hypophyse, empêchant le pic de LH/FSH indispensable à l'ovulation",
        "  2. Rendu imperméable de la glaire cervicale : la glaire reste épaisse, visqueuse et forme un bouchon infranchissable pour les spermatozoïdes",
        "  3. Atrophie de l'endomètre utérin : la muqueuse reste mince et impropre à toute nidation embryonnaire",
        "- Implants sous-cutanés et injections trimestrielles à libération prolongée de progestatifs",
        "- Contraception d'urgence (pilule du lendemain) : prise d'une forte dose de lévonorgestrel dans les 72h suivant un rapport à risque pour différer l'ovulation ou empêcher la nidation",
        "IV. Méthodes chirurgicales définitives (stérilisation volontaire) :",
        "- Ligature et section des trompes de Fallope chez la femme",
        "- Vasectomie (ligature et section des canaux déférents) chez l'homme"
      ],
      formulas: [
        "Durée de vie gamètes : Ovocyte = 24 à 48 h | Spermatozoïdes = 72 à 120 h (3 à 5 jours)",
        "Fenêtre de fertilité = [Date ovulation - 4 jours] jusqu'à [Date ovulation + 2 jours]",
        "Triple verrou de la pilule = Blocage ovulation (RC- anti-LH) + Glaire imperméable + Muqueuse utérine impropre"
      ],
      methods: [
        "Calculer la période de fécondité d'une femme : 1. Relever la durée totale du cycle (ex: 30 jours). 2. Calculer le jour théorique de l'ovulation : 30 - 14 = 16e jour du cycle. 3. Déterminer la période d'abstinence : du 12e jour (16 - 4) au 18e jour (16 + 2) inclus.",
        "Choisir une méthode contraceptive adaptée : Pour les adolescents et jeunes non mariés -> le préservatif (indispensable contre le VIH et les grossesses précoces). Pour un couple stable voulant différer les naissances -> pilule, implant ou DIU."
      ]
    },
    {
      id: "ch4",
      lessonNumber: 4,
      title: "La production d'énergie par la cellule : respiration et fermentation",
      theme: "La nutrition et le métabolisme énergétique",
      duration: "5H",
      topics: [
        "L'adénosine triphosphate (ATP) : monnaie universelle d'énergie chimique directement utilisable par les cellules vivantes pour leurs fonctions (contractions musculaires, transports actifs membranaires, biosynthèses)",
        "La molécule d'ATP : formée d'adénine, de ribose et de 3 groupements phosphates reliés par deux liaisons riches en énergie (l'hydrolyse d'une liaison phosphate libère ~30,5 kJ/mol : ATP + H2O -> ADP + Pi + Énergie)",
        "I. La respiration cellulaire aérobie (en présence de dioxygène O2) :",
        "- Définition : dégradation complète et oxydation intégrale d'une molécule organique (glucose) en molécules minérales minéralisées (CO2 et H2O) avec production massive d'énergie",
        "- Équation bilan globale : C6H12O6 + 6 O2 + 38 (ADP + Pi) -> 6 CO2 + 6 H2O + 38 ATP + Chaleur (soit ~2815 kJ/mol)",
        "- Les 3 étapes de la respiration cellulaire :",
        "  1. La glycolyse (dans le hyaloplasme / cytosol, sans O2) : oxydation partielle du glucose (C6) en deux molécules d'acide pyruvique ou pyruvate (C3), avec réduction de 2 transporteurs NAD+ en 2 NADH,H+ et synthèse nette de 2 ATP : Glucose + 2 NAD+ + 2 ADP + 2 Pi -> 2 Pyruvates + 2 NADH,H+ + 2 ATP",
        "  2. Le cycle de Krebs (dans la matrice de la mitochondrie) : entrée du pyruvate dans la mitochondrie, conversion en acétyl-CoA, puis série de décarboxylations (dégagement de CO2) et de déshydrogénations (réduction des transporteurs NAD+ et FAD) produisant 2 ATP supplémentaires par molécule de glucose",
        "  3. La phosphorylation oxydative et la chaîne respiratoire (sur les crêtes de la membrane interne de la mitochondrie) : les coenzymes réduits (NADH,H+ et FADH2) cèdent leurs électrons et protons à une chaîne de transporteurs ; le dioxygène O2 joue le rôle d'accepteur final d'électrons et de protons pour former H2O ; le flux de protons à travers l'ATP-synthase actionne la régénération de 34 ATP",
        "II. La fermentation alcoolique anaérobie (en absence de dioxygène O2) :",
        "- Réalisée par les micro-organismes hétérotrophes comme la levure de bière (Saccharomyces cerevisiae)",
        "- Définition : dégradation incomplète du glucose dans le hyaloplasme aboutissant à un déchet organique encore très riche en énergie potentielle : l'éthanol (alcool)",
        "- Équation bilan : C6H12O6 + 2 (ADP + Pi) -> 2 CH3-CH2OH (éthanol) + 2 CO2 + 2 ATP + Chaleur (soit ~167 kJ/mol)",
        "- Bilan comparé du rendement énergétique :",
        "  * Respiration aérobie : rendement élevé (~40% d'énergie métabolisée en ATP, les 60% restants dissipés sous forme de chaleur)",
        "  * Fermentation anaérobie : rendement énergétique très faible (~2% seulement, 98% de l'énergie restant bloquée dans les molécules d'éthanol)",
        "Ultrastructure de la levure selon les conditions de milieu :",
        "- En milieu aérobie (aéré, riche en O2) : multiplication cellulaire rapide, cellules contenant de nombreuses mitochondries de grande taille aux crêtes internes très plissées et développées",
        "- En milieu anaérobie (privé d'O2) : multiplication ralentie, mitochondries très rares, réduites, régressées et dépourvues de crêtes visibles"
      ],
      formulas: [
        "Hydrolyse de l'ATP : ATP + H2O <=> ADP + Pi + 30,5 kJ/mol",
        "Bilan global Respiration : C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 38 ATP (Rendement ~40%)",
        "Bilan global Fermentation alcoolique : C6H12O6 -> 2 CH3CH2OH + 2 CO2 + 2 ATP (Rendement ~2%)"
      ],
      methods: [
        "Comparer respiration et fermentation : 1. Milieu (aérobie avec O2 vs anaérobie sans O2). 2. Lieu intracellulaire (hyaloplasme + mitochondries vs hyaloplasme exclusif). 3. Dégradation du substrat (complète minérale vs incomplète organique). 4. Bilan ATP par mole de glucose (38 ATP vs 2 ATP).",
        "Expliquer l'aspect des mitochondries en aérobiose : En présence d'O2, les mitochondries sont le siège exclusif du cycle de Krebs et de la chaîne respiratoire, ce qui nécessite un fort développement de leurs membranes et crêtes internes."
      ]
    },
    {
      id: "ch5",
      lessonNumber: 5,
      title: "La mise en réserve des nutriments et régulation de la glycémie",
      theme: "La nutrition et le métabolisme énergétique",
      duration: "5H",
      topics: [
        "Le destin des nutriments absorbés : utilisation énergétique immédiate ou mise en réserve sous forme de macromolécules de réserve",
        "Les trois formes et organes majeurs de stockage :",
        "1. Le foie :",
        "   - Stocke le glucose sous forme de glycogène (glycogène hépatique, capacité de stockage d'environ 100 g)",
        "   - Rôle régulateur unique dans l'organisme : le foie est le SEUL organe capable de reconvertir le glycogène en glucose libre et de le sécréter dans le sang général pour maintenir la glycémie (grâce à l'enzyme glucose-6-phosphatase)",
        "2. Les muscles striés squelettiques :",
        "   - Stockent le glucose sous forme de glycogène musculaire (réserve d'environ 400 g)",
        "   - Réserve privée et égoïste : le muscle ne possède pas de glucose-6-phosphatase ; son glycogène sert exclusivement à sa propre contraction mécanique et ne peut pas être libéré dans la circulation générale",
        "3. Le tissu adipeux :",
        "   - Stocke les lipides sous forme de triglycérides dans les adipocytes (réserve quasi illimitée)",
        "   - Capable de convertir l'excès de glucose alimentaire en graisses (lipogenèse)",
        "La régulation de la glycémie :",
        "- Définition de la glycémie : concentration plasmatique du glucose dans le sang circulant, maintenue remarquablement constante autour d'une valeur consigne physiologique de 1 g/L (soit environ 5,5 mmol/L)",
        "- Rôle fondamental du pancréas endocrine :",
        "  * Glande mixte comportant une partie exocrine (acini sécrétant les sucs digestifs dans le duodénum) et une partie endocrine constituée par les Îlots de Langerhans disséminés",
        "  * Cellules bêta (β, 70-80% des îlots, centrales) : sécrètent l'INSULINE, unique hormone HYPOGLYCÉMIANTE de l'organisme",
        "    - Stimule l'entrée et l'utilisation du glucose par les cellules cibles (muscles, foie, adipocytes)",
        "    - Stimule la mise en réserve : la glycogénogenèse (synthèse de glycogène) et la lipogenèse",
        "    - Inhibe la glycogénolyse et la néoglucogenèse",
        "  * Cellules alpha (α, 15-20% des îlots, périphériques) : sécrètent le GLUCAGON, hormone HYPERGLYCÉMIANTE",
        "    - Stimule la glycogénolyse hépatique (hydrolyse du glycogène en glucose) et la néoglucogenèse pour faire remonter la glycémie en cas de jeûne ou d'effort physique",
        "- Dysfonctionnements glycémiques :",
        "  * L'ablation totale du pancréas (pancréatectomie) entraîne une hyperglycémie foudroyante (>3 g/L), suivie de glycosurie (sucre dans les urines), polyurie, soif intense et la mort rapide en l'absence de traitement",
        "  * Le diabète sucré : maladie métabolique caractérisée par une hyperglycémie chronique (glycémie à jeun supérieure à 1,26 g/L à deux reprises). Diabète de type 1 (insulinodépendant, destruction auto-immune des cellules β) et Diabète de type 2 (non insulinodépendant, insulinorésistance liée à l'obésité et sédentarité)"
      ],
      formulas: [
        "Glycémie physiologique normale : [Glucose] ≈ 1 g/L = 5,5 mmol/L (intervalle normal : 0,8 à 1,1 g/L)",
        "Glycogénogenèse (sous insuline) : n Glucose -> Glycogène + (n-1) H2O",
        "Glycogénolyse (sous glucagon) : Glycogène + (n-1) H2O -> n Glucose",
        "Régulation en boucle fermée : Hyperglycémie -> Stimulation cellules β -> Libération Insuline -> Stockage -> Baisse glycémie | Hypoglycémie -> Stimulation cellules α -> Libération Glucagon -> Libération glucose hépatique -> Hausse glycémie"
      ],
      methods: [
        "Interpréter une épreuve d'hyperglycémie provoquée par voie orale (HGPO) : 1. Chez le sujet sain : la glycémie monte transitoirement à 1,4 g/L puis revient à sa valeur normale (1 g/L) en moins de 2 heures sous l'effet de l'insuline. 2. Chez le diabétique : la glycémie de départ à jeun est déjà élevée (>1,26 g/L), monte très haut (>2 g/L) et reste anormalement élevée après 2 heures.",
        "Distinguer les rôles du foie et du muscle : Le foie régule la glycémie de tout le corps (glycogène exportable). Le muscle consomme son propre glycogène sans pouvoir alimenter le sang."
      ]
    },
    {
      id: "ch6",
      lessonNumber: 6,
      title: "La transmission d'un caractère héréditaire lié aux autosomes chez l'Homme",
      theme: "La reproduction et l'hérédité humaine",
      duration: "5H",
      topics: [
        "Spécificités de la génétique humaine : impossibilité d'expérimentation ou de croisements dirigés, faible descendance par couple, durée longue des générations",
        "Méthode d'investigation : établissement d'arbres généalogiques ou pedigrees :",
        "- Carré = individu de sexe masculin ; Rond = individu de sexe féminin",
        "- Symbole noir/plein = individu atteint de l'anomalie phénotypique étudiée",
        "- Symbole blanc/vide = individu sain au phénotype normal",
        "- Numérotation des générations en chiffres romains (I, II, III) et des individus par génération de gauche à droite en chiffres arabes (1, 2, 3...)",
        "I. Étude d'une anomalie autosomale récessive : l'Albinisme :",
        "- Phénotype albinos : absence congénitale de pigmentation mélanique dans la peau, les poils, les cheveux (blancs) et les yeux (iris rouge/rosé avec photophobie)",
        "- Règle de récessivité : deux parents sains (I1 et I2) ont un enfant atteint (II3) ; l'allèle responsable de la maladie était masqué chez les parents, il est donc RÉCESSIF (noté a) et l'allèle sain est DOMINANT (noté A)",
        "- Règle de transmission autosomale :",
        "  * Si l'anomalie était récessive liée au chromosome X, une fille malade (Xa//Xa) devrait obligatoirement avoir son père malade (Xa//Y) ; or, on observe des filles malades issues de pères sains",
        "  * De plus, la tare touche indistinctement les garçons et les filles avec les mêmes probabilités statistiques ; le gène est donc porté par un AUTOSOME (chromosome non sexuel)",
        "- Génotypes : Individus atteints albinos = homozygotes récessifs (a//a) ; Parents sains d'un enfant albinos = hétérozygotes sains obligatoires ou conducteurs (A//a) ; la probabilité pour ce couple d'avoir un autre enfant atteint est de 1/4 (25%)",
        "II. Étude d'une anomalie autosomale avec codominance : la Drépanocytose (Anémie falciforme) :",
        "- Maladie héréditaire de l'hémoglobine où les hématies prennent une forme anormale en faucille ou croissant en condition de désoxygénation, bloquant les capillaires sanguins (crises vaso-occlusives douloureuses et anémie hémolytique)",
        "- Déterminisme génétique :",
        "  * Deux allèles codominants du gène de la chaîne β de l'hémoglobine : allèle A (hémoglobine normale HbA) et allèle S (hémoglobine anormale HbS)",
        "  * Sujet homozygote sain : génotype (A//A), phénotype [A], 100% hématies normales",
        "  * Sujet hétérozygote : génotype (A//S), phénotype [AS], individu porteur sain cliniquement asymptomatique mais dont les hématies falciformisent in vitro sous hypoxie (avantage sélectif : résistance naturelle au paludisme à Plasmodium falciparum)",
        "  * Sujet homozygote malade : génotype (S//S), phénotype [S], drépanocytaire sévère",
        "- Risque génétique dans un couple d'hétérozygotes (A//S x A//S) : 25% enfant sain [A] (A//A), 50% enfants porteurs sains [AS] (A//S), et 25% enfant drépanocytaire malade [S] (S//S)"
      ],
      formulas: [
        "Arbre généalogique albinisme : Parents sains (A//a) x (A//a) -> 1/4 [A] sain (A//A) + 1/2 [A] porteur (A//a) + 1/4 [a] albinos malade (a//a)",
        "Drépanocytose : Couple AS x AS -> 1/4 [A] (AA) + 1/2 [AS] (AS) + 1/4 [S] (SS)",
        "Critère d'exclusion liée à l'X : Une fille malade a un père sain -> gène obligatoirement autosomal"
      ],
      methods: [
        "Rédiger la démonstration rigoureuse d'un pedigree : 1. Déterminer la dominance : repérer un individu malade issu de parents sains -> l'allèle malade est récessif. 2. Déterminer la localisation chromosomique : tester l'hypothèse de la liaison à l'X. Si une fille malade a un père sain, l'hypothèse d'une tare récessive liée à l'X est rejetée ; le gène est donc autosomal. 3. Écrire les génotypes certains et probables de chaque individu de l'arbre généalogique."
      ]
    },
    {
      id: "ch7",
      lessonNumber: 7,
      title: "Le réflexe conditionnel",
      theme: "La communication nerveuse",
      duration: "3H30",
      topics: [
        "Définition du réflexe conditionnel (ou acquis) : réaction motrice ou sécrétoire involontaire acquise au cours de la vie par un individu à la suite d'un apprentissage associatif répété, individuel, temporaire, réversible et nécessitant l'intégrité du cortex cérébral",
        "L'expérience historique de référence d'Ivan Pavlov (le réflexe salivaire conditionnel chez le chien) :",
        "1. Avant le conditionnement :",
        "   - Dépôt de poudre de viande sur la langue du chien (stimulus inconditionnel ou absolu SI) -> salivation immédiate spontanée (réflexe inconditionnel inné RI)",
        "   - Son de cloche ou battement de métronome (stimulus neutre SN) -> dressant d'oreilles (réflexe d'orientation) mais aucune salivation",
        "2. Pendant le conditionnement (phase d'apprentissage) :",
        "   - On fait retentir le son de cloche (SN) immédiatement suivi, quelques secondes après, de la distribution de la viande (SI)",
        "   - L'association synchronisée [Son + Viande] est répétée plusieurs dizaines de fois quotidiennement",
        "3. Après le conditionnement :",
        "   - On fait retentir le son de cloche seul (devenu stimulus conditionnel SC) sans donner de viande -> le chien salive abondamment : c'est le RÉFLEXE CONDITIONNEL (RC)",
        "Les conditions fondamentales d'établissement du réflexe conditionnel :",
        "- L'antériorité temporelle : le stimulus neutre doit obligatoirement précéder le stimulus absolu",
        "- La répétition continue de l'association",
        "- L'état de vigilance et de bonne santé de l'animal",
        "- L'absence de stimuli extérieurs perturbateurs",
        "- Le phénomène d'extinction : si l'on émet le stimulus conditionnel de multiples fois sans jamais donner de viande (absence de renforcement), la réponse salivaire faiblit puis disparaît complètement (extinction réversible)",
        "Circuit nerveux et mécanisme neurologique du réflexe conditionnel :",
        "- Voie innée : papilles gustatives -> nerf sensitif lingual -> centre salivaire bulbaire -> nerf sécréteur parasympathique -> glande salivaire effectrice",
        "- Voie auditive : cochlée de l'oreille interne -> nerf auditif -> aire auditive du cortex cérébral",
        "- Le conditionnement crée une LIAISON NERVEUSE TEMPORAIRE fonctionnelle (facilitation synaptique et plasticité cérébrale) entre l'aire corticale auditive et l'aire gustative/centre bulbaire salivaire",
        "- Preuve du rôle obligatoire du cerveau : la décortication ou l'anesthésie du cortex cérébral abolit définitivement tous les réflexes conditionnels tout en laissant intacts les réflexes innés",
        "Comparaison rigoureuse Réflexe Inné vs Réflexe Conditionnel :",
        "- Inné : présent dès la naissance, universel à toute l'espèce, permanent et immuable, centre médullaire ou bulbaire (sans le cortex)",
        "- Conditionnel : acquis après la naissance par apprentissage, propre à l'individu, temporaire et réversible (soumis à extinction), centre cortical obligatoire",
        "Applications pratiques : apprentissages scolaires, mémorisation, automatismes moteurs (vélo, dactylographie, conduite automobile), dressage animal"
      ],
      formulas: [
        "Protocole de Pavlov : SN (son) + SI (viande) répété n fois -> SN devient SC (son seul) -> RC (salivation)",
        "Trajet nerveux : Récepteur auditif -> Cortex auditif -> Nouvelle liaison corticale temporaire -> Centre bulbaire -> Glande salivaire",
        "Critère distinctif : Réflexe Inné = Espèce + Permanent + Sous-cortical | Réflexe Conditionnel = Individuel + Éphémère + Cortical"
      ],
      methods: [
        "Analyser une expérience de conditionnement : 1. Identifier le stimulus inconditionnel et la réponse innée. 2. Identifier le stimulus neutre. 3. Décrire l'association temporelle. 4. Constater la réponse au stimulus devenu conditionnel. 5. Conclure à la mise en place d'une liaison nerveuse temporaire au niveau du cortex cérébral."
      ]
    },
    {
      id: "ch8",
      lessonNumber: 8,
      title: "Les effets des drogues sur le comportement",
      theme: "La communication nerveuse",
      duration: "5H",
      topics: [
        "Définition de la drogue selon l'OMS : toute substance d'origine naturelle ou synthétique qui, introduite dans l'organisme vivant, modifie une ou plusieurs de ses fonctions, en particulier le fonctionnement du système nerveux central, la perception, l'humeur et le comportement",
        "Notions fondamentales de pharmacodépendance et toxicomanie :",
        "- Dépendance psychique : besoin irrépressible, envie obsessionnelle (craving) de consommer la substance pour ressentir du plaisir ou échapper au malaise",
        "- Dépendance physique : état d'adaptation biologique où l'organisme ne peut plus fonctionner sans la drogue ; son arrêt brutal déclenche le SYNDROME DE SEVRAGE (tremblements, spasmes, sueurs, nausées, douleurs violentes, délires)",
        "- Tolérance ou accoutumance : nécessité d'augmenter progressivement les doses administrées pour obtenir la même intensité d'effet pharmacologique",
        "Classification médicale des drogues selon leurs effets sur le système nerveux central :",
        "1. Les psychostimulants / excitants :",
        "   - Exemples : cocaïne, crack, amphétamines, méthamphétamines, nicotine, caféine",
        "   - Effets immédiats : euphorie, sensation de toute-puissance intellectuelle et physique, recul de la fatigue, coupe-faim, accélération cardiaque (tachycardie) et hypertension",
        "   - Effets secondaires et risques : état dépressif sévère ('descente' douloureuse), paranoïa, agressivité, épuisement physique, accidents vasculaires cérébraux, infarctus",
        "2. Les psychodépresseurs / sédatifs :",
        "   - Exemples : alcool, opiacés naturels et dérivés (opium, morphine, héroïne, codéine), barbituriques, benzodiazépines (tranquillisants, somnifères)",
        "   - Effets immédiats : apaisement de l'angoisse, relaxation musculaire, suppression de la douleur (analgésie), torpeur, ralentissement des réflexes",
        "   - Effets secondaires et risques : somnolence au volant, démarche titubante par atteinte du cervelet, perte de contrôle, à forte dose coma éthylique ou arrêt respiratoire mortel par overdose",
        "3. Les psychodysleptiques / perturbateurs / hallucinogènes :",
        "   - Exemples : cannabis (THC), LSD, ecstasy (MDMA), mescaline, psilocybine, solvants volatils (colles)",
        "   - Effets immédiats : modification de la perception de l'espace et du temps, hallucinations visuelles et auditives, distorsion des sensations",
        "   - Effets secondaires et risques : crises d'angoisse panique ('bad trip'), perte de la mémoire immédiate, dépersonnalisation, déclenchement ou aggravation de psychoses schizophréniques",
        "Mécanisme d'action synaptique et circuit de la récompense :",
        "- Toutes les substances addictives agissent sur les synapses du CIRCUIT DE LA RÉCOMPENSE (faisceau cérébral reliant l'aire tegmentale ventrale au noyau accumbens et au cortex frontal)",
        "- Rôle clé de la DOPAMINE (le neurotransmetteur du plaisir et de la motivation) : les drogues provoquent une élévation anormale et prolongée de la concentration de dopamine dans la fente synaptique",
        "- Mécanisme de la cocaïne : bloque les transporteurs de recapture de la dopamine sur la membrane présynaptique ; la dopamine reste piégée dans la fente synaptique et stimule indéfiniment les récepteurs post-synaptiques",
        "- Conséquences neurologiques et sociales : destruction progressive des neurones, altération irréversible de la mémoire et du jugement, désocialisation, délinquance, transmission de maladies infectieuses (VIH, hépatites B et C) par échange de seringues souillées"
      ],
      formulas: [
        "Trilogie de la toxicomanie : Tolérance (doses croissantes) + Dépendance physique (sevrage douloureux) + Dépendance psychique (craving)",
        "Action synaptique de la cocaïne : Blocage de la recapture présynaptique de la dopamine -> Accumulation de dopamine synaptique -> Hyperstimulation continue",
        "Conséquences cérébrales : Atteinte cervelet (équilibre/démarche) + Atteinte cortex préfrontal (jugement/contrôle) + Circuit de la récompense (dépendance)"
      ],
      methods: [
        "Classer une drogue d'après ses effets comportementaux : 1. Si elle excite, coupe le sommeil et donne une sensation d'euphorie hyperactive -> psychostimulant. 2. Si elle ralentit, apaise, endort ou élimine la douleur -> psychodépresseur. 3. Si elle engendre des visions imaginaires ou déforme la réalité spatio-temporelle -> psychodysleptique.",
        "Expliquer le mécanisme cellulaire de la dépendance à partir d'un schéma synaptique : 1. Repérer le neurotransmetteur (dopamine). 2. Observer le blocage des pompes de recapture par la drogue. 3. Expliquer que la persistance du neurotransmetteur dans la fente maintient l'excitation des récepteurs post-synaptiques."
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
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné en 1ère A SVT
 */
export function findSvt1ereAChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return svt1ereAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = svt1ereAKnowledgeBase.chapters.map(chapter => {
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
    : (svt1ereAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

/**
 * Construit le contexte texte officiel de 1ère A SVT pour enrichir la réponse et la méthodologie
 */
export function buildSvt1ereAContext(query: string): string {
  const chapters = findSvt1ereAChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Thème : ${ch.theme || "SVT 1ère A"} - Niveau : ${svt1ereAKnowledgeBase.level})\nSource : ${svt1ereAKnowledgeBase.source}`;
    const topics = `#### NOTIONS FONDAMENTALES & PROTOCOLES :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES, PRINCIPES ET LOIS SCIENTIFIQUES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES D'ANALYSE MÉTHODOLOGIQUE PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE SVT PREMIÈRE A (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
