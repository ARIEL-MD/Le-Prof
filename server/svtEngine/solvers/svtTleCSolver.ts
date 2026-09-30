/**
 * Solveur spécialisé pour les leçons exclusives et renforcées de SVT Terminale C :
 * - Géologie & Ressources énergétiques (Gisements pétrolifères en Côte d'Ivoire)
 * - Gestion des sols et amélioration de la fertilité (Engrais, amendements, CAH, techniques culturales)
 * - Les drogues et le système nerveux (Modes d'action synaptiques, dépendance, santé publique)
 * - Métabolisme énergétique et respiration cellulaire (Glycolyse, Mitochondrie, Bilans énergétiques)
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStepSolution, SvtStructuredResult } from "../types";

export function solveSvtTleCSpecificExercise(statement: string): SvtStructuredResult {
  const text = (statement || "").toLowerCase();

  // 1. GISEMENTS PÉTROLIFÈRES (MISE EN PLACE ET EXPLOITATION EN CÔTE D'IVOIRE)
  if (/pétrole|gisement pétrolif|kérogène|roche.mère|roche.réservoir|roche.magasin|roche.couverture|piège à pétrole|piège anticlinal|sismique réflexion|hydrophone|géophone|trépan|carotte|récupération assistée|jacqueville|grand.bassam/i.test(text)) {
    const isExploitation = /sismique|forage|carotte|canon à air|hydrophone|géophone|récupération|extraction|marée noire/i.test(text);

    const steps: SvtStepSolution[] = isExploitation
      ? [
          {
            title: "Techniques de prospection des gisements d'hydrocarbures",
            observationOrData: "La recherche d'hydrocarbures en mer (offshore) ou à terre (onshore) repose sur la télédétection spatiale, la sismique réflexion et les forages d'exploration.",
            scientificConceptOrRule: "La sismique réflexion exploite la propagation et la réflexion d'ondes acoustiques artificielles sur les différentes interfaces géologiques, enregistrées par des hydrophones ou géophones pour modéliser le sous-sol. Le forage mécanique avec trépan et prélèvement de carottes permet de certifier la présence de pétrole.",
            deductionOrCalculation: "L'analyse combinée des données sismiques et des carottes de roches permet de localiser avec certitude les pièges pétrolifères avant l'implantation des puits de production.",
            conclusionOrJustification: "La prospection géophysique et les forages constituent la phase indispensable préalable à toute exploitation.",
          },
          {
            title: "Techniques d'extraction : Récupération primaire et assistée",
            observationOrData: "Au début de l'exploitation, le pétrole jaillit spontanément à la surface. Plus tard, des puits périphériques injectent de l'eau ou du gaz.",
            scientificConceptOrRule: "La récupération primaire (naturelle) extrait 15 à 25% du pétrole grâce à la pression naturelle du réservoir et la poussée de l'aquifère. La récupération secondaire/assistée maintient la pression en injectant de l'eau sous l'huile ou du gaz au sommet, élevant le taux d'extraction jusqu'à 35-45%.",
            deductionOrCalculation: "L'injection de fluides sous pression déplace mécaniquement le pétrole piégé dans les pores des roches-magasins vers le puits producteur central.",
            conclusionOrJustification: "La récupération assistée optimise le rendement d'extraction du gisement sans altérer la roche-réservoir.",
          },
          {
            title: "Impacts environnementaux et gestion durable des ressources",
            observationOrData: "L'exploitation pétrolière génère d'importantes recettes pour les infrastructures nationales, mais expose aux marées noires, perturbations des cétacés et émissions de gaz à effet de serre.",
            scientificConceptOrRule: "Le pétrole est une énergie fossile non renouvelable et polluante. La substitution du bois par le gaz butane freine la déforestation, mais la pérennité environnementale exige la transition vers les énergies renouvelables.",
            deductionOrCalculation: "Il est impératif de concilier exploitation raisonnée, protection de la biodiversité marine et investissement dans les énergies propres.",
            conclusionOrJustification: "La préservation environnementale impose une transition énergétique progressive.",
          },
        ]
      : [
          {
            title: "Origine et formation du kérogène dans la roche-mère",
            observationOrData: "Le bassin sédimentaire côtier ivoirien (Jacqueville, Grand-Bassam) renferme des gisements d'hydrocarbures formés à partir de débris organiques fossilisés.",
            scientificConceptOrRule: "Dans un milieu sédimentaire réducteur et anoxique, les matières organiques (plancton, débris végétaux) sont enfouies et transformées par des bactéries anaérobies en une boue noirâtre appelée kérogène, logée dans la roche-mère (argiles fines imperméables).",
            deductionOrCalculation: "Sous l'augmentation de pression lithostatique et température géothermique en profondeur (> 60-120°C), le kérogène subit une pyrolyse thermique qui le transforme en hydrocarbures liquides (pétrole brut) et gazeux (gaz naturel).",
            conclusionOrJustification: "La roche-mère est le lieu originel de genèse du kérogène et des hydrocarbures.",
          },
          {
            title: "Migration et différenciation par densité dans la roche-réservoir",
            observationOrData: "Le pétrole et le gaz ne restent pas dans la roche-mère compacte mais migrent vers des roches poreuses adjacentes.",
            scientificConceptOrRule: "Sous l'effet des fortes pressions, les hydrocarbures subissent une migration primaire hors de la roche-mère, puis une migration secondaire ascendante à travers une roche-réservoir perméable (grès, sables).",
            deductionOrCalculation: "Par différence de densité, les fluides se stratifient verticalement : l'eau de formation plus dense au fond, le pétrole liquide au milieu, et le gaz naturel plus léger au sommet.",
            conclusionOrJustification: "La roche-réservoir stocke les hydrocarbures selon un gradient de densité strict.",
          },
          {
            title: "Piégeage structural ou stratigraphique sous la roche-couverture",
            observationOrData: "L'accumulation commerciale d'hydrocarbures nécessite la présence d'un piège géologique hermétique.",
            scientificConceptOrRule: "La présence d'une roche-couverture imperméable (argiles, marnes, sel) coiffant un anticlinal (piège structural) ou une variation latérale de sédimentation (piège stratigraphique) bloque définitivement la remontée des fluides vers la surface.",
            deductionOrCalculation: "La combinaison roche-mère + roche-réservoir + roche-couverture + structure piégeuse constitue le système pétrolier complet.",
            conclusionOrJustification: "Le piégeage imperméable est indispensable à la constitution d'un gisement exploitable.",
          },
        ];

    return buildSvtStructuredResult({
      title: isExploitation ? "Exploitation et Prospection des Gisements Pétrolifères" : "Mise en Place des Gisements Pétrolifères en Côte d'Ivoire",
      problemStatement: statement,
      themeId: "theme_petrole_ci",
      themeTitle: "Les ressources énergétiques : Gisements pétrolifères en Côte d'Ivoire",
      lessonNumber: isExploitation ? 2 : 1,
      lessonTitle: isExploitation ? "L'exploitation des gisements pétrolifères" : "La mise en place des gisements pétrolifères en Côte d'Ivoire",
      keyScientificTerms: ["Kérogène", "Roche-mère", "Roche-réservoir", "Roche-couverture", "Piège anticlinal", "Pyrolyse", "Sismique réflexion", "Récupération assistée"],
      commonPitfallsAvoided: ["Confondre roche-mère et roche-réservoir", "Inverser l'ordre de superposition des fluides dans le piège (gaz > pétrole > eau)"],
      steps,
      finalConclusion: isExploitation
        ? "L'exploitation pétrolière s'appuie sur la prospection géophysique (sismique réflexion, forages) et l'extraction primaire et assistée (injection eau/gaz), nécessitant une vigilance écologique stricte."
        : "Les gisements pétrolifères se forment sur plusieurs millions d'années par pyrolyse du kérogène dans la roche-mère, migration ascendante et accumulation dans une roche-réservoir sous une roche-couverture étanche.",
    });
  }

  // 2. GESTION ET AMÉLIORATION DE LA FERTILITÉ DES SOLS (TLE C)
  if (/fertilité du sol|amendement calcaire|amendement humifère|complexe argilo-humique|\bcah\b|structure grumeleuse|floculation|chaux vive|engrais vert|rhizobium|légumineuse|nodosité|assolement|jachère|drainage|irrigation|labour/i.test(text)) {
    const steps: SvtStepSolution[] = [
      {
        title: "Diagnostic de l'état physico-chimique et biologique du sol",
        observationOrData: "Un sol compact, peu aéré, à pH acide (4-5) et à CAH dispersé présente une faible activité biologique des bactéries et vers de terre, ainsi qu'une baisse marquée des rendements agricoles.",
        scientificConceptOrRule: "La fertilité du sol repose sur une structure grumeleuse stable, une bonne perméabilité à l'eau et à l'air, un pH proche de la neutralité (6-7) et un Complexe Argilo-Humique (CAH) floculé saturé en cations bivalents échangeables (Ca2+, Mg2+).",
        deductionOrCalculation: "L'excès de protons H+ libres et le déficit en ions calcium Ca2+ dispersent les colloïdes d'argile et d'humus, asphyxiant les racines et bloquant l'absorption des sels minéraux.",
        conclusionOrJustification: "L'infertilité du sol résulte de la dégradation conjointe de ses propriétés physiques, chimiques et biologiques.",
      },
      {
        title: "Mécanismes des amendements minéraux (calcaire) et organiques (humifère)",
        observationOrData: "L'apport de chaux vive CaO, de CaCO3 ou de compost modifie la structure du sol et relève le pH.",
        scientificConceptOrRule: "L'amendement calcaire fournit des ions Ca2+ qui déplacent les ions H+ du complexe argilo-humique (neutralisation du pH) et pontent les feuillets d'argile et d'humus par attraction électrostatique (floculation). L'amendement humifère enrichit le sol en matière organique colloïdale retenant l'eau et les nutriments.",
        deductionOrCalculation: "La floculation transforme la masse compacte en agrégats poreux stables : le sol acquiert une structure grumeleuse aérée et fertile qui stimule intensément la microflore minéralisatrice.",
        conclusionOrJustification: "Les amendements calcaire et humifère restaurent durablement la structure et le potentiel chimique du sol.",
      },
      {
        title: "Techniques culturales : Engrais verts symbiotiques et gestion agronomique",
        observationOrData: "L'utilisation d'engrais verts (légumineuses) et la rotation des cultures (assolement) augmentent les récoltes de manière spectaculaire.",
        scientificConceptOrRule: "Les légumineuses hébergent dans leurs nodosités racinaires des bactéries symbiotiques du genre Rhizobium capables de fixer le diazote atmosphérique (N2) et de l'incorporer sous forme d'azote assimilable. L'assolement alternant des plantes aux besoins minéraux complémentaires évite l'épuisement sélectif des horizons culturaux.",
        deductionOrCalculation: "L'enfouissement de la biomasse de légumineuses constitue un engrais vert écologique et économique protégeant le sol contre l'érosion sans recours excessif aux engrais chimiques polluants.",
        conclusionOrJustification: "La combinaison raisonnée d'amendements et de techniques culturales durables assure une fertilité maximale et pérenne.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Amélioration de la Fertilité du Sol et Gestion Agronomique",
      problemStatement: statement,
      themeId: "theme_gestion_sols",
      themeTitle: "La gestion des sols : L'amélioration de la fertilité du sol",
      lessonNumber: 3,
      lessonTitle: "Engrais, amendements (calcaire et humifère) et techniques culturales",
      keyScientificTerms: ["Complexe Argilo-Humique (CAH)", "Structure grumeleuse", "Floculation", "Amendement calcaire", "Amendement humifère", "Engrais vert", "Rhizobium", "Assolement", "Jachère"],
      commonPitfallsAvoided: ["Confondre engrais (nutrition directe) et amendement (restructuration du sol)", "Oublier le rôle de pont électrostatique joué par l'ion Ca2+ entre l'argile et l'humus"],
      steps,
      finalConclusion: "La restauration d'un sol fertile s'obtient par l'amendement calcaire (floculation du CAH et neutralisation du pH), l'amendement humifère et l'adoption de pratiques culturales adaptées (engrais verts à Rhizobium, assolement, drainage).",
    });
  }

  // 3. LES DROGUES ET LE SYSTÈME NERVEUX (TLE C)
  if (/drogue|cocaïne|amphétamine|morphine|substance p|diazépam|nicotine|psychostimulant|psychodépress|analgésique|dopamine|noyau accumbens|aire tegmentale|recapture de la dopamine/i.test(text)) {
    const isStimulant = /cocaïne|amphétamine|nicotine|dopamine|stimul/i.test(text);

    const steps: SvtStepSolution[] = [
      {
        title: "Nature de la substance et classification pharmacologique",
        observationOrData: "L'administration de la drogue modifie l'amplitude et la fréquence des potentiels d'action et altère le comportement du sujet.",
        scientificConceptOrRule: isStimulant
          ? "Les substances psychostimulantes (cocaïne, amphétamines, nicotine) augmentent l'excitabilité neuronale et majorent l'activité des circuits dopaminergiques de la récompense."
          : "Les substances psychodépressives et analgésiques (morphine, diazépam) réduisent la transmission synaptique, diminuent la fréquence des décharges et bloquent les messages de la douleur.",
        deductionOrCalculation: isStimulant
          ? "La substance étudiée agit comme un excitateur du système nerveux central entraînant une hyperexcitabilité physique et psychique."
          : "La substance étudiée agit comme un dépresseur ou analgésique inhibant la transmission nerveuse postsynaptique.",
        conclusionOrJustification: isStimulant ? "Il s'agit d'une drogue psychostimulante." : "Il s'agit d'une drogue psychodépressive ou analgésique.",
      },
      {
        title: "Mécanisme d'action synaptique moléculaire",
        observationOrData: "L'analyse chimique montre une perturbation ciblée de la concentration du neurotransmetteur dans la fente synaptique.",
        scientificConceptOrRule: /cocaïne/i.test(text)
          ? "La cocaïne se fixe sur les transporteurs membranaires présynaptiques de recapture de la dopamine (DAT) et les bloque. La dopamine s'accumule dans la fente synaptique (taux multiplié par 7 à 8) et stimule en continu les récepteurs postsynaptiques du noyau accumbens, générant des PPSE géants et répétés."
          : /amphétamine/i.test(text)
          ? "Les amphétamines pénètrent dans le bouton présynaptique et forcent une libération continue et massive de dopamine et noradrénaline dans la fente synaptique, provoquant une stimulation permanente."
          : /morphine/i.test(text)
          ? "La morphine se lie aux récepteurs opiacés présynaptiques et inhibe l'exocytose de la substance P, empêchant la transmission du message nociceptif de la douleur vers le cerveau."
          : "La drogue altère l'équilibre synaptique soit en bloquant la recapture, soit en inhibant la libération du médiateur ou en agissant sur les récepteurs canaux.",
        deductionOrCalculation: "L'altération de la dynamique synaptique fausse durablement l'homéostasie des neurotransmetteurs cérébraux.",
        conclusionOrJustification: "L'effet de la drogue résulte d'une perturbation moléculaire précise au niveau de la synapse chimique.",
      },
      {
        title: "Conséquences neurobiologiques, sociales et prévention",
        observationOrData: "L'usage régulier induit tolérance, dépendance sévère, dégénérescence neuronale et désocialisation.",
        scientificConceptOrRule: "La surstimulation permanente désensibilise les récepteurs, imposant l'augmentation des doses (accoutumance/tolérance) et créant une dépendance physique et psychologique irrésistible. Le sevrage brutal déclenche un état de manque douloureux.",
        deductionOrCalculation: "La lutte contre l'addiction repose sur la sensibilisation en milieu scolaire, le dépistage précoce, les cures médicalisées de désintoxication et la réinsertion sociale.",
        conclusionOrJustification: "Les drogues constituent une menace majeure pour l'intégrité neuronale et l'équilibre social.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Modes d'Action des Drogues sur le Système Nerveux et Conséquences",
      problemStatement: statement,
      themeId: "theme_drogues_sn",
      themeTitle: "La communication dans l'organisme : Les drogues et le système nerveux",
      lessonNumber: 2,
      lessonTitle: "Modes d'action synaptiques des drogues et conséquences",
      keyScientificTerms: ["Drogue psychotrope", "Psychostimulant", "Psychodépresseur", "Dopamine", "Recapture présynaptique", "Substance P", "Noyau accumbens", "Dépendance"],
      commonPitfallsAvoided: ["Confondre le mode d'action de la cocaïne (blocage de recapture) et des amphétamines (libération forcée)", "Oublier l'action analgésique de la morphine par blocage de la substance P"],
      steps,
      finalConclusion: "Les drogues modifient le fonctionnement synaptique (blocage de recapture de dopamine pour la cocaïne, inhibition de la substance P pour la morphine), engendrant dépendance, neurodégénérescence et graves conséquences socio-sanitaires.",
    });
  }

  // 4. PRODUCTION D'ÉNERGIE PAR LA CELLULE (RESPIRATION VS FERMENTATION / GLYCOLYSE / MITOCHONDRIE)
  const steps: SvtStepSolution[] = [
    {
      title: "Comparaison des conditions métaboliques : Respiration aérobie vs Fermentation",
      observationOrData: "En présence de dioxygène (milieu aérobie), les levures consomment le glucose avec dégagement de CO2 et synthèse importante d'ATP. En absence d'O2 (anaérobiose), elles produisent de l'éthanol et très peu d'ATP.",
      scientificConceptOrRule: "La respiration cellulaire est une oxydation complète du glucose en substances minérales (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 38 ATP, rendement 40%). La fermentation est une dégradation partielle laissant des molécules organiques résiduelles énergétiques (C6H12O6 -> 2 C2H5OH + 2 CO2 + 2 ATP, rendement 2%).",
      deductionOrCalculation: "La disponibilité en dioxygène détermine la voie métabolique empruntée et conditionne l'efficacité énergétique de la cellule.",
      conclusionOrJustification: "La respiration aérobie offre un rendement énergétique 20 fois supérieur à celui des fermentations.",
    },
    {
      title: "Ultrastructure mitochondriale et compartimentation biochimique",
      observationOrData: "Les cellules aérobies possèdent de nombreuses mitochondries aux crêtes très développées, tandis que les cellules anaérobies ont des mitochondries rares et atrophiées.",
      scientificConceptOrRule: "La glycolyse se déroule dans le hyaloplasme sans O2 (Glucose -> 2 pyruvates + 2 ATP + 2 NADH,H+). Le pyruvate pénètre dans la matrice mitochondriale où il est transformé en Acétyl-CoA pour alimenter le Cycle de Krebs (décarboxylations et déshydrogénations). Les coenzymes réduits sont réoxydés au niveau de la membrane interne (crêtes) par la chaîne respiratoire couplée aux ATP-synthases.",
      deductionOrCalculation: "La mitochondrie est l'organite spécialisé exclusif de l'oxydation respiratoire aérobie et de la synthèse massive d'ATP.",
      conclusionOrJustification: "L'intégrité de la mitochondrie est indispensable à la respiration cellulaire.",
    },
    {
      title: "Bilan stœchiométrique et rendement énergétique de la dégradation du glucose",
      observationOrData: "L'oxydation complète d'une mole de glucose libère 38 moles d'ATP à partir d'un potentiel chimique de 2860 kJ/mol.",
      scientificConceptOrRule: "1 NADH,H+ permet la synthèse de 3 ATP et 1 FADH2 donne 2 ATP sur les complexes respiratoires. Le bilan global : Glycolyse (2 ATP + 6 ATP via 2 NADH) + Pyruvate -> Acétyl-CoA (6 ATP) + Cycle de Krebs (2 ATP + 18 ATP via 6 NADH + 4 ATP via 2 FADH2) = 38 ATP.",
      deductionOrCalculation: "Rendement = (38 × 30,5 kJ / 2860 kJ) × 100 ≈ 40,5%.",
      conclusionOrJustification: "La cellule convertit plus de 40% de l'énergie chimique du glucose en liaisons phosphorées d'ATP utilisables.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Production d'Énergie Cellulaire : Respiration et Fermentation",
    problemStatement: statement,
    themeId: "theme_metabolisme_energie",
    themeTitle: "Le métabolisme énergétique et l'activité musculaire",
    lessonNumber: 2,
    lessonTitle: "La production d'énergie par la cellule (Respiration vs Fermentation)",
    keyScientificTerms: ["Respiration cellulaire", "Fermentation alcoolique", "Glycolyse", "Mitochondrie", "Cycle de Krebs", "Chaîne respiratoire", "Bilan 38 ATP vs 2 ATP", "Rendement énergétique"],
    commonPitfallsAvoided: ["Confondre le lieu de la glycolyse (hyaloplasme) et du cycle de Krebs (matrice mitochondriale)", "Oublier que les mitochondries isolées ne consomment pas de glucose sans glycolyse préalable"],
    steps,
    finalConclusion: "La production d'énergie cellulaire s'opère par respiration aérobie (oxydation complète, hyaloplasme + mitochondrie, 38 ATP, rendement 40%) ou par fermentation anaérobie (dégradation partielle, hyaloplasme, 2 ATP, rendement 2%).",
  });
}
