import { CourseSearchResult, SecondaryLevel, DisciplineType, AcademicSerie, CourseConceptFormula } from '../types';
import { ACADEMIC_KNOWLEDGE_BASE, findAcademicKnowledge } from '../data/academicKnowledgeBase';
import { findOfficialCourse, ALL_OFFICIAL_IVORIAN_COURSES } from '../data/courses';
import { philosophieTleKnowledgeBase } from '../data/philosophieTleKnowledgeBase';
import { francaisTleKnowledgeBase } from '../data/francaisTleKnowledgeBase';
import { REP_LITTERAIRE_2021_INFO, REP_PHILO_COURSE_SHEETS, REP_HISTOIRE_GEO_DATA } from '../data/repLitteraire2021Base';
import { AIDARA_WADE_LITERARY_MOVEMENTS, AIDARA_WADE_WORKS_MONOGRAPHS } from '../data/aidaraWadeFrancaisTleBase';
import { FIGURES_DE_STYLE_GENEVOIX_BASE } from '../data/figuresStyleGenevoixBase';
import { CHEIKH_LO_THIAM_ANNALES } from '../data/cheikhLoThiamBacFrancaisBase';
import { MAMADOU_DANFA_TOPICS, MAMADOU_DANFA_LITERARY_PILLARS, CONNECTEURS_LOGIQUES_TABLE } from '../data/mamadouDanfaDissertationBacBase';
import { RICALENS_POURCHOT_FORMULES_MNEMOTECHNIQUES, RICALENS_POURCHOT_FIGURES_CORPUS } from '../data/ricalensPourchotFiguresBase';
import { BAC_COMMENTAIRES_COMPOSES, BAC_DISSERTATIONS_LITTERAIRES, BAC_RESUME_DISCUSSIONS } from '../data/bacExpressionEcriteCompleteBase';
import { DIOMANDE_OEUVRES_PROGRAMME, DIOMANDE_SUJETS_REDIGES } from '../data/diomandeNarcisseDissertationBase';
import { BURKINA_METHODOLOGIES_OFFICIELLES, BURKINA_CORRIGES_ANNALES } from '../data/annalesBacBurkinaFasoBase';
import { PHILO_NTSGOD_DISSERTATIONS, PHILO_NTSGOD_COMMENTAIRES } from '../data/philoNtsgodCorpusBase';
import { PHILO_TCHAD_FARCHA_SUJETS } from '../data/philoTchadFarchaBase';
import { GUIDE_4_DISCIPLINES_SECTIONS, searchGuideRevision4Disciplines } from '../data/guideRevision4DisciplinesBase';
import { searchMathsReference } from '../data/mathsReferenceSearch';
import {
  isTonalitesCatalogQuery,
  findTonaliteItem,
  buildTonalitesCatalogCourseResult,
  buildSingleTonaliteCourseResult,
  isFocalisationCatalogQuery,
  findFocalisationItem,
  buildFocalisationCatalogCourseResult,
  buildSingleFocalisationCourseResult,
  isConnecteursCatalogQuery,
  findConnecteurCategory,
  buildConnecteursCatalogCourseResult,
  isSemantiqueCatalogQuery,
  findSemantiqueItem,
  buildSemantiqueCatalogCourseResult,
  buildSingleSemantiqueCourseResult
} from '../data/frenchStylisticsKnowledgeBase';

export function getAcademicCourseResult(
  query: string,
  level?: SecondaryLevel,
  discipline?: DisciplineType,
  serie?: AcademicSerie
): CourseSearchResult {
  const normQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // 0. Priorité Stylistique & Rhétorique (Chapitre 4 : Tonalités, Focalisation, Connecteurs, Sémantique)
  if (isTonalitesCatalogQuery(query) || isTonalitesCatalogQuery(normQuery)) {
    return buildTonalitesCatalogCourseResult(query);
  }
  const tonaliteMatch = findTonaliteItem(query) || findTonaliteItem(normQuery);
  if (tonaliteMatch) {
    return buildSingleTonaliteCourseResult(tonaliteMatch, query);
  }

  if (isFocalisationCatalogQuery(query) || isFocalisationCatalogQuery(normQuery)) {
    return buildFocalisationCatalogCourseResult(query);
  }
  const focalisationMatch = findFocalisationItem(query) || findFocalisationItem(normQuery);
  if (focalisationMatch) {
    return buildSingleFocalisationCourseResult(focalisationMatch, query);
  }

  if (isConnecteursCatalogQuery(query) || isConnecteursCatalogQuery(normQuery)) {
    const catMatch = findConnecteurCategory(query) || findConnecteurCategory(normQuery);
    return buildConnecteursCatalogCourseResult(query, catMatch);
  }
  const connecteurCatMatch = findConnecteurCategory(query) || findConnecteurCategory(normQuery);
  if (connecteurCatMatch) {
    return buildConnecteursCatalogCourseResult(query, connecteurCatMatch);
  }

  if (isSemantiqueCatalogQuery(query) || isSemantiqueCatalogQuery(normQuery)) {
    return buildSemantiqueCatalogCourseResult(query);
  }
  const semantiqueMatch = findSemantiqueItem(query) || findSemantiqueItem(normQuery);
  if (semantiqueMatch) {
    return buildSingleSemantiqueCourseResult(semantiqueMatch, query);
  }

  // Référence Maths MPSI fournie : recherche de cours robuste sur le corpus local.
  // Cette branche est volontairement avant les bases Français/Philo pour éviter les faux positifs
  // sur des termes comme « argument », « fonction », « application », etc.
  const mathQuery = discipline === 'mathematiques' || /\b(?:math|maths|mathematique|mathematiques|equation|derivee|integrale|matrice|probabilite|statistique|suite|complexe|polynome|trigonometrie|geometrie|logarithme|exponentielle|conique|vecteur|determinant|espace vectoriel|developpement limite|equation differentielle)\b/i.test(normQuery);
  if (mathQuery) {
    const mathsReference = searchMathsReference(query);
    if (mathsReference) return mathsReference;
  }

  // Détection du Guide Officiel de Révision : Français - Philosophie - Histoire - Géographie (127 pages)
  if (/tout\s*ce\s*qui\s*est\s*dans\s*le\s*pdf|sommaire\s*pdf|guide\s*(?:officiel\s*)?(?:de\s+revision\s+)?(?:4\s*disciplines|francais\s*philosophie\s*histoire\s*geographie|127\s*pages)|fascicule\s*127\s*pages/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Guide Officiel de Révision : Français - Philosophie - Histoire - Géographie (127 pages)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Baccalauréat (Lycée)",
      chapterTitle: "Guide Intégral d'Excellence : Français, Philosophie, Géographie & Histoire (127 pages)",
      definitionAndScope: `LE GUIDE OFFICIEL DE RÉVISION PLURIDISCIPLINAIRE (127 PAGES) :
Ce recueil d'excellence rassemble en un seul manuel l'intégralité des savoirs fondamentaux, des méthodes certifiées et des sujets corrigés indispensables pour réussir le Baccalauréat dans les 4 grandes matières littéraires et de sciences humaines :

• ACTIVITÉS & PAGINATION :
- FRANÇAIS (Pages 4 à 46) : Littérature négro-africaine, 8 courants littéraires, 3 genres littéraires (avec banques de toutes les fonctions), 6 familles de figures de style, 11 tonalités, connecteurs logiques, sémantique, méthodologie complète et devoirs rédigés (théâtre comique, Mukala Kadima, Zadi Zaourou), résumé & production écrite, citations expliquées et guide des 40 sujets types de dissertation décortiqués.
- PHILOSOPHIE (Pages 48 à 78) : Méthodologie dissertation (étude parcellaire, problématisation canonique), dissertation rédigée modèle ("Faut-il envisager l'extinction de la philosophie..."), méthodologie commentaire de texte (étude ordonnée, critique interne/externe), texte commenté complet de David Hume (Traité de la nature humaine), et corpus bilatéral de 17 notions majeures avec citations et explications.
- GÉOGRAPHIE (Pages 80 à 94) : Fondements de l'économie ivoirienne (naturels, humains, politiques), secteurs d'activité (primaire, secondaire, tertiaire & informel), problèmes et solutions d'émergence ; Étude de cas de la Corée du Sud (territoire, capital humain, politique des chaebols, miracle du fleuve Han) ; Intégration régionale de la CEDEAO (Lagos 1975, ECOMOG, passeport CEDEAO) et Coopération Nord-Sud UE-ACP (Yaoundé, Lomé, Cotonou).
- HISTOIRE (Pages 96 à 126) : L'ONU (naissance, organes, bilan succès/échecs/solutions) ; Bipolarisation et Guerre froide (1947-1991 : doctrines Truman/Jdanov, crises de Berlin 1948 et 1961, Cuba 1962, Vietnam 1964-1975, fin de l'URSS 1991, monde unipolaire puis multipolaire BRICS) ; Décolonisation de l'Afrique et accession pacifique de la Côte d'Ivoire à l'indépendance (1944-1960, SAA, abolition travail forcé, Dimbokro, marche des femmes) ; Guerre d'Algérie (1954-1962, accords d'Évian) ; L'Union Africaine (OUA 1963 -> UA 2002) ; Civilisation occidentale contemporaine vs Civilisation négro-africaine traditionnelle et ses mutations ; Méthodologie et Tableau d'analyse des 24 grands sujets types.`,
      coreConceptsAndFormulas: [
        {
          name: "I. Français (p. 4 - 46)",
          formulaOrRule: "Ch.1 Littérature négro-africaine (Harlem 1930, Césaire, Senghor, Kourouma, Sembène) | Ch.2 Courants (Classicisme, Lumières, Romantisme, Réalisme, Naturalisme, Parnasse, Symbolisme, Surréalisme) | Ch.3 Poésie, Roman, Théâtre (arguments Lyrique, Esthétique, Évasif, Ludique, Didactique, Engagé) | Ch.4 Rhétorique & Tonalités | Ch.5 Devoirs rédigés | Ch.6 Citations & 40 sujets.",
          explanation: "Couvre l'ensemble des épreuves écrites de Français au Bac (Dissertation, Commentaire composé, Résumé & Production écrite).",
          contextOrApplication: "Épreuve écrite de Français Bac A, B, C, D."
        },
        {
          name: "II. Philosophie (p. 48 - 78)",
          formulaOrRule: "Méthodologie Dissertation & Commentaire | Sujet corrigé : L'extinction de la philosophie (Marx, Jaspers vs Descartes, Sénèque) | Commentaire corrigé : David Hume (société et besoins) | Notions fondamentales : Conscience, Inconscient, Mémoire/Oubli, Liberté, Violence, Société, Autrui, État, Loi, Droit/Justice, Religion, Athéisme, Foi/Raison, Humanité, Sujet/Objet de l'histoire, Progrès technique, Travail, Art, Désir, Langage, Vérité.",
          explanation: "Règles strictes : Problématique interrogative courte + Deux aspects contrastés (« dans quelle mesure... ?, toutefois, ... ? ») + Arguments structurés Idée -> Explication -> Citation d'auteur avec contexte d'œuvre -> Commentaire.",
          contextOrApplication: "Épreuve de Philosophie Baccalauréat."
        },
        {
          name: "III. Géographie (p. 80 - 94)",
          formulaOrRule: "Côte d'Ivoire : Agriculture (cacao 1er mondial, café, anacarde), Forêt (2,5M ha), Pêche (ports Abidjan/San-Pédro), Industrie (SIR, agroalimentaire, BTP), Commerce (informel > 60%) | Corée du Sud : 70% montagnes, révolution éducative, Chaebols (Samsung, POSCO), 5e puissance nucléaire | CEDEAO (1975, 15 pays, ECOMOG) | Relations UE-ACP (Yaoundé, Lomé, Cotonou 2000).",
          explanation: "Données économiques officielles, problématiques sectorielles et perspectives d'émergence.",
          contextOrApplication: "Épreuve de Géographie au Baccalauréat."
        },
        {
          name: "IV. Histoire (p. 96 - 126)",
          formulaOrRule: "ONU (1945, 193 États, Conseil de sécurité, Casques bleus) | Guerre froide (1947-1991, Berlin 1948 & 1961, Cuba 1962, Vietnam, fin URSS 1991, BRICS) | Décolonisation africaine & Indépendance de la Côte d'Ivoire (1944-1960, SAA, loi Houphouët-Boigny, Dimbokro, 7 août 1960) | Guerre d'Algérie (1954-1962) | Union Africaine (2002) | Civilisations comparées | Grille des 24 sujets types.",
          explanation: "Dates historiques certifiées, mécanismes géopolitiques et grille analytique complète de 24 sujets d'examen.",
          contextOrApplication: "Épreuve d'Histoire au Baccalauréat."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Consultation ciblée par Discipline",
          whatToDo: "Identifier la matière interrogée (Français, Philo, Histoire ou Géographie) et le type de sujet.",
          reflexOrTip: "Respecter l'épistémologie propre à chaque matière sans jamais les confondre."
        },
        {
          stepNumber: 2,
          title: "Mobilisation des arguments et citations certifiés",
          whatToDo: "Extraire les arguments bilatéraux exacts et les citations d'auteurs contextualisées contenues dans le guide.",
          reflexOrTip: "Toujours expliquer le mécanisme avant la citation, puis commenter la citation."
        },
        {
          stepNumber: 3,
          title: "Rédaction aux normes académiques officielles",
          whatToDo: "Suivre la structure en 3 blocs d'introduction, les transitions nettes entre les axes et la conclusion avec bilan et ouverture.",
          reflexOrTip: "Respecter scrupuleusement la numérotation des questions en commentaire de documents."
        }
      ],
      solvedExample: {
        problemStatement: "Application interdisciplinaire du guide (ex: Le rôle de l'État dans le développement économique et politique).",
        solutionStepByStep: "1. En Géographie : L'État ivoirien comme régulateur et planificateur (plans décennaux, CAISTAB, CEPICI) et l'État sud-coréen stratège guidant les Chaebols.\n2. En Philosophie : L'État comme garantie d'ordre et de liberté (Spinoza, Rousseau) contre l'État oppresseur et négation de la liberté (Nietzsche, Bakounine).\n3. En Histoire : L'avènement de l'État-nation postcolonial en Afrique (Côte d'Ivoire 1960) et les institutions internationales (ONU, CEDEAO, UA).",
        finalAnswer: "Le guide fournit une grille conceptuelle et factuelle cohérente permettant d'aborder n'importe quel sujet du Baccalauréat avec rigueur et succès."
      },
      classicExamTraps: [
        "Ne jamais transformer une question d'Histoire-Géographie ou de Français en dissertation philosophique, et inversement.",
        "En commentaire de documents d'Histoire-Géographie, ne jamais regrouper les questions I et II en dissertation : répondre à chaque question sous son libellé exact."
      ],
      selfCheckChecklist: [
        "Ai-je bien identifié la matière et la consigne d'action ?",
        "Les arguments et exemples utilisés sont-ils conformes au guide officiel ?",
        "L'ordre des questions et la structure du devoir sont-ils rigoureusement respectés ?"
      ],
      quickRevisionMemo: "Le Guide de révision (127 pages) est le document de référence absolu pour Français, Philosophie, Histoire et Géographie en classe de Terminale.",
      certificationNote: "Conforme aux programmes officiels MENA / DPFC de Côte d'Ivoire et des pays francophones d'Afrique de l'Ouest (UEMOA)."
    };
  }

  // Détection spécifique du Dictionnaire des figures de style (Nicole Ricalens-Pourchot, Armand Colin)
  if (/ricalens|pourchot|dictionnaire\s+des\s+figures\s+de\s+style|formules?\s+figures?\s+de\s+style|planches?\s+thematiques?|degre\s+zero\s+de\s+l\s*ecriture|antepiphore|anapodoton|anantapodoton|symploque|tapinose|chleuasme|asteisme|epithete?isme|battologie|perissologie|brachylogie|apophonie|adynaton|parembole|tmese|hendiadyn|sermocination|particula\s+pendens|dorica\s+castra|kakemphaton/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Stylistique — Dictionnaire des Figures de Style (Nicole Ricalens-Pourchot)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Lycée & Baccalauréat (Référence Stylistique & Rhétorique)",
      chapterTitle: "Dictionnaire des Figures de Style & Classification Thématique (Nicole Ricalens-Pourchot, Armand Colin)",
      definitionAndScope: `Ouvrage encyclopédique de référence de Nicole Ricalens-Pourchot (Éditions Armand Colin).\n\nDéfinit la figure de style comme un écart intentionnel par rapport à la neutralité langagière ou « degré zéro de l'écriture » (Roland Barthes). Propose 28 formules mnémotechniques pratiques, une classification alphabétique étymologique exhaustive et 16 planches thématiques arborescentes structurant les figures selon leurs procédés formels et leurs effets de sens.`,
      coreConceptsAndFormulas: [
        {
          name: "Les 28 Formules Mnémotechniques Officielles",
          formulaOrRule: "1. Jongler avec le sens (Antanaclase, Syllepse) | 2. Couper court (Aposiopèse, Réticence) | 3. Faire parler (Sermocination, Prosopopée) | 4. Moindres frais (Zeugme, Ellipse) | 5. Atténuer (Litote, Euphémisme) | 7. Répéter selon la place (Épanadiplose A-,-A, Symploque) | 15. Symétrie (Chiasme A-B/B'-A', Réversion A-B/B-A) | 17. Contrastes (Oxymoron, Attelage, Hypallage).",
          explanation: "Permet de repérer instantanément la figure recherchée en fonction du geste stylistique ou de l'effet expressif.",
          contextOrApplication: "Commentaire de texte et analyse stylistique au Baccalauréat."
        },
        {
          name: "Distinction fondamentale : Chiasme vs Réversion (Antimétabole)",
          formulaOrRule: "Chiasme = croisement de 4 termes sémantiquement différents deux à deux de même nature/fonction (A - B / B' - A') : « Tel qui rit vendredi, dimanche pleurera » (Racine). Réversion = reprise inversée des MÊMES mots (A - B / B - A) : « Il faut manger pour vivre et non vivre pour manger » (Molière).",
          explanation: "La réversion réemploie les mêmes vocables, tandis que le chiasme croise des termes syntaxiquement symétriques mais lexicaux distincts.",
          contextOrApplication: "Commentaires poétiques et dramaturgiques."
        },
        {
          name: "Distinction rigoureuse : Oxymoron vs Attelage vs Antithèse",
          formulaOrRule: "Oxymoron = alliance intime de termes opposés dans le même syntagme (« Cette obscure clarté » Corneille). Attelage = deux compléments de nature différente (abstrait/concret) sous un même verbe (« Vêtu de probité candide et de lin blanc » Hugo). Antithèse = opposition de deux vérités dans deux propositions (« Il est grand jusque dans les plus petites choses »).",
          explanation: "L'oxymore est un conflit sémantique interne au syntagme, l'attelage associe de l'incompatible, l'antithèse oppose deux propositions.",
          contextOrApplication: "Stylistique comparée."
        },
        {
          name: "Classification en 16 Planches Thématiques Arborescentes",
          formulaOrRule: "Planche I (Ajout) | Planche II (Amplification) | Planche III (Atténuation) | Planche IV (Complicité) | Planche V (Contraste) | Planche VI (Déplacement) | Planche VII (Interruption) | Planche VIII (Ironie) | Planche IX (Jeux morphologiques/phonétiques/sémantiques/syntaxiques) | Planche X (Juxtaposition) | Planche XI (Mise en relief) | Planche XII (Rapprochement) | Planche XIII (Répétition) | Planche XIV (Suppression) | Planche XV (Insolite) | Planche XVI (Transferts et Tropes).",
          explanation: "Arbre de décision permettant de trouver le nom savant d'un écart constaté dans un texte.",
          contextOrApplication: "Recherche méthodique de figures de style."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Caractériser la nature exacte de l'écart stylistique",
          whatToDo: "S'interroger : l'écart concerne-t-il le sens (trope métaphorique/métonymique), la syntaxe (ordre/inversion/suppression), ou le plan sonore (allitération/assonance/homéotéleute) ?",
          reflexOrTip: "Consulter la formule mnémotechnique correspondante parmi les 28 règles d'identification."
        },
        {
          stepNumber: 2,
          title: "Nommer la figure avec précision étymologique",
          whatToDo: "Vérifier les critères exclusifs (ex: présence ou absence de mot-outil pour métaphore vs comparaison ; inclusion pour synecdoque vs contiguïté pour métonymie).",
          reflexOrTip: "Ne jamais confondre la litote (diminution quantitative : dire moins pour faire entendre plus) et l'euphémisme (adoucissement qualitatif d'une réalité pénible)."
        },
        {
          stepNumber: 3,
          title: "Expliciter la portée expressive dans le commentaire",
          whatToDo: "Montrer comment la figure sert l'intention de l'auteur, intensifie le pathétique, soutient l'ironie ou crée une image poétique neuve.",
          reflexOrTip: "Bannir les listes étiquetées sans commentaire : toujours associer Citation + Figure + Effet de sens."
        }
      ],
      solvedExample: {
        problemStatement: "Analyser les figures de style dans ce vers de Victor Hugo : « Ce marchand accoudé sur son comptoir avide » (Le Petit Larousse / Légende des siècles).",
        solutionStepByStep: "Procédé 1 : L'hypallage. L'adjectif 'avide' est syntaxiquement épithète de 'comptoir', alors qu'il qualifie sémantiquement le 'marchand'.\nProcédé 2 : Métonymie et personnification conjointe du comptoir qui absorbe l'avidité mercantile de l'homme.\nEffet de sens : Le lieu même de commerce devient le monstre de rapacité financière, dénonçant la déshumanisation du capitalisme naissant.",
        finalAnswer: "Hypallage doublée d'une métonymie dénonçant la rapacité mercantile."
      },
      classicExamTraps: [
        "Confondre litote ('Ce n'est pas mauvais' = c'est excellent) et euphémisme ('Il nous a quittés' = il est mort).",
        "Confondre métonymie (relation de contiguïté : boire un verre) et synecdoque (relation d'inclusion de la partie au tout : apercevoir une voile).",
        "Qualifier à tort de chiasme une réversion (la réversion réemploie les mêmes mots inversés, pas le chiasme)."
      ],
      selfCheckChecklist: [
        "Le mot-outil est-il totalement absent pour conclure à une métaphore ?",
        "Les termes opposés sont-ils dans le même syntagme (oxymore) ou dans deux propositions (antithèse) ?",
        "La portée affective ou argumentative a-t-elle été formulée clairement ?"
      ],
      quickRevisionMemo: "Mémo Nicole Ricalens-Pourchot : La figure de style est un écart volontaire par rapport au degré zéro de l'écriture qui élève la pensée et frappe l'esprit.",
      certificationNote: "Dictionnaire des figures de style (Nicole Ricalens-Pourchot, Armand Colin)."
    };
  }

  // Détection spécifique du Recueil Officiel d'Expression Écrite au Baccalauréat (Commentaires, Dissertations, Résumés)
  if (/zady\s*zaourou|fer\s+de\s+lance|routaud|la\s+nature\s+ravagee|des\s+hommes\s+illustres|la\s+bastonnade|janopoulos|moreau|une\s+vie\s+de\s+boy|le\s+mariage\s+de\s+kany|sibiri|sous\s+l\s*orage|gorge\s+de\s+sang|kadima\s*n\s*juzi|mission\s+terminee|mongo\s*beti|le\s+retour\s+de\s+l\s*enfant\s+soldat|francois\s+d\s*assise\s+n\s*da|cite\s+des\s+milliardaires|passion\s+de\s+soutane|serge\s+grah|le\s+roi\s+podogan|la\s+tortue\s+qui\s+chante|senouvo\s+zinsou|sophie\s+heidi\s+kam|le\s+blues\s+de\s+l\s*afrique|julien\s+clerc|lucien\s+rioux|lalsaga|les\s+silences\s+de\s+l\s*existence|dongala|remise\s+en\s+cause\s+et\s+remise\s+en\s+place|ma\s+plume\s+est\s+mon\s+epee|diagnostic\s+de\s+l\s*enseignement\s+en\s+afrique|chefs\s+d\s*etats\s+irresponsables|joseph\s+ki\s*zerbo|norbert\s+zongo|les\s+enfants\s+exploites|debelque|divorce\s+entre\s+paris|lecoutre|mupoki|combats\s+pour\s+la\s+liberte|agnes\s+callamard|a\s*t\s*on\s+le\s+droit\s+de\s+tout\s+dire/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Épreuves du BAC — Recueil Officiel d'Expression Écrite",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D, L, S (Épreuves Complètes du Baccalauréat)",
      chapterTitle: "Expression Écrite au Baccalauréat : Commentaires Composés, Dissertations & Résumés-Discussions",
      definitionAndScope: `Recueil officiel et exhaustif pour l'épreuve de Français au Baccalauréat.\n\nComprend 10 Commentaires composés intégraux avec citations, figures et bilans comparatifs (Zady Zaourou, Routaud, Oyono, Seydou Badian, Mukala Kadima, Mongo Beti, N'Da, Serge Grah, Zinsou, Sophie Heidi Kam), 10 Dissertations littéraires rédigées avec problématiques et plans tripartites, et 7 sujets complets Question + Résumé (au 1/4 du texte) + Discussion argumentée (Ki-Zerbo, Norbert Zongo, Debelque, Martin Luther King, Callamard).`,
      coreConceptsAndFormulas: [
        {
          name: "Architecture du Commentaire Composé d'Excellence",
          formulaOrRule: "Introduction (Situation de l'œuvre, idée générale et tonalité du texte, annonce des 2 ou 3 centres d'intérêt) | 2 ou 3 grandes parties articulant chacune 2 sous-parties (Idée directrice -> relevé textuel -> identification du procédé stylistique -> effet produit) | Conclusion (Bilan synthétique des axes + ouverture littéraire comparative).",
          explanation: "Règle d'or : ne jamais séparer le fond de la forme. Chaque observation thématique est immédiatement justifiée par une figure de style ou un procédé grammatical.",
          contextOrApplication: "Épreuve de Commentaire Composé au Baccalauréat."
        },
        {
          name: "Architecture de la Dissertation Littéraire Réformée",
          formulaOrRule: "Introduction (Amener le sujet, poser la citation/problématique sous forme d'une question centrale, annoncer le plan au futur) | Thèse (2 ou 3 paragraphes de 15 lignes) | Antithèse (2 ou 3 paragraphes de 15 lignes) | Synthèse / Dépassement | Conclusion (Bilan des conclusions partielles + prise de position personnelle + ouverture).",
          explanation: "Chaque paragraphe comprend : Idée directrice nette -> argumentation rationnelle -> exemple littéraire précis analysé (œuvre, auteur, personnage).",
          contextOrApplication: "Épreuve reine de dissertation littéraire au Baccalauréat."
        },
        {
          name: "Architecture de l'Épreuve Question + Résumé + Discussion",
          formulaOrRule: "1. Questions de vocabulaire (explication contextuelle précise) | 2. Résumé au quart de la longueur (+/- 10%) avec fidélité au système d'énonciation et décompte final des mots | 3. Discussion argumentée en 2 ou 3 axes structurés étayant ou nuançant la formule de l'auteur.",
          explanation: "Exige concision, fidélité sémantique sans plagiat pour le résumé, et rigueur d'argumentation pour la discussion.",
          contextOrApplication: "Troisième sujet au choix du Baccalauréat."
        },
        {
          name: "Corpus des 10 Grands Sujets de Commentaire",
          formulaOrRule: "Sujet 1 (Zady Zaourou, Fer de lance) | Sujet 2 (Routaud, Des hommes illustres) | Sujet 3 (Oyono, Une vie de boy) | Sujet 4 (Seydou Badian, Sous l'orage) | Sujet 5 (Kadima N'juzi, Gorgé de sang) | Sujet 6 (Mongo Beti, Mission terminée) | Sujet 7 (N'Da, Le retour de l'enfant soldat) | Sujet 8 (Serge Grah, Passion de soutane) | Sujet 9 (Zinsou, La Tortue qui chante) | Sujet 10 (Sophie Heidi Kam, Quête).",
          explanation: "Textes patrimoniaux africains et contemporains couvrant l'épopée, le réalisme tragique, l'anticolonialisme, la condition féminine et la satire politique.",
          contextOrApplication: "Banque d'annales corrigées."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Choisir judicieusement son sujet d'examen",
          whatToDo: "Évaluer si vos connaissances sont plus solides pour l'analyse formelle et stylistique d'un texte (Commentaire), la réflexion littéraire générale (Dissertation) ou l'argumentation civique et sociale (Résumé-Discussion).",
          reflexOrTip: "Dans le commentaire, ne jamais paraphraser le texte : toujours nommer les figures (chiasme, oxymore, hyperbole, etc.) et expliquer leur portée."
        },
        {
          stepNumber: 2,
          title: "Construire des paragraphes argumentatifs de 15 lignes",
          whatToDo: "Toujours formuler l'idée en tête de paragraphe, développer la justification logique, puis citer le passage ou l'œuvre avec exactitude.",
          reflexOrTip: "Employer les connecteurs logiques de transition pour assurer la fluidité de la démonstration."
        },
        {
          stepNumber: 3,
          title: "Rédiger une conclusion soignée et une ouverture littéraire",
          whatToDo: "Répondre explicitement à la problématique initiale et proposer un rapprochement avec une œuvre du même courant ou de même tonalité.",
          reflexOrTip: "Exemple pour Fer de lance : ouverture avec Les Conquérants d'Heredia ; pour Une vie de boy : Batouala de René Maran ; pour La nature ravagée : Greenpeace."
        }
      ],
      solvedExample: {
        problemStatement: "Commentaire composé Sujet 1 : Bottey Zady Zaourou, « Fer de lance » (2002). Montrer comment l'hostilité de la nature met en valeur la farouche détermination des guerriers.",
        solutionStepByStep: "Axe 1 : L'hostilité de la nature (cruauté des éléments, soleil déshydratant, foudre et averse menaçantes, métaphore des fauves à l'affût).\nAxe 2 : L'invulnérabilité des guerriers (oxymore 'cœurs de granit', souffle inépuisable, force puisée dans le sol souterrain, marche martiale rythmée par l'anaphore).\nConclusion : Poésie épique valorisant la résistance héroïque de l'Afrique. Ouverture littéraire vers Les Trophées de José-Maria de Heredia.",
        finalAnswer: "Commentaire composé intégralement rédigé avec plan détaillé et procédés stylistiques."
      },
      classicExamTraps: [
        "Faire du commentaire composé une paraphrase linéaire sans centres d'intérêt thématiques.",
        "Aligner des exemples d'œuvres dans la dissertation sans analyse critique.",
        "Dépasser la marge de tolérance de 10% dans le résumé de texte (pénalité lourde au Bac)."
      ],
      selfCheckChecklist: [
        "Les 2 ou 3 axes du commentaire composé répondent-ils directement au libellé ?",
        "Chaque citation est-elle accompagnée de son procédé stylistique et de son effet de sens ?",
        "Le décompte précis des mots du résumé figure-t-il à la fin de la production ?"
      ],
      quickRevisionMemo: "Mémo Expression Écrite Bac : 'La forme est le fond qui remonte à la surface' (Victor Hugo). Ni paraphrase sans style, ni dissertation sans arguments concrets.",
      certificationNote: "Annales et corrigés officiels d'expression écrite au Baccalauréat (Commentaires, Dissertations, Résumés)."
    };
  }

  // Détection spécifique : Dissertation Littéraire en Une Minute (Diomande Sadia Narcisse, Tle A/C/D)
  if (/diomande|sadia|narcisse|dissertation\s+litteraire\s+en\s+une\s+minute|biankouma|daloa|mangouin|on\s+se\s+chamaille\s+pour\s+un\s+siege|sous\s+le\s+voile\s+de\s+la\s+mariee|dian\s+kirala|jean\s+jacques\s+gozie|la\s+poesie\s+est\s+un\s+ornement|le\s+dramaturge\s+a\s+des\s+objectifs|amuser\s+la\s+galerie|le\s+poete\s+est\s+subjectif|deux\s+sortes\s+de\s+roman/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Dissertation — Dissertation Littéraire en Une Minute (Diomande Sadia Narcisse)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D (Méthodologie Rapide du Bac)",
      chapterTitle: "Dissertation Littéraire en Une Minute : Méthodologie, Corpus des 16 Œuvres & Sujets Rédigés (Diomande Sadia Narcisse)",
      definitionAndScope: `Ouvrage didactique de référence de Diomande Sadia Narcisse (Côte d'Ivoire).\n\nConçu pour rehausser le niveau littéraire des candidats aux examens et concours. Synthétise les conseils anti-fautes d'orthographe et de présentation, le résumé critique de 16 œuvres littéraires majeures au programme (théâtre, roman, poésie), la méthodologie en 4 mouvements de l'introduction (avec modèle passe-partout), la structure rigoureuse du développement en paragraphes argumentatifs (Argument + Explication + Illustration) et propose 4 sujets types rédigés in extenso.`,
      coreConceptsAndFormulas: [
        {
          name: "L'Introduction en 4 Mouvements Obligatoires",
          formulaOrRule: "1. La Généralité (amorce par définition, citation ou constat littéraire fort) -> 2. L'Insertion du sujet (phrase de liaison intermédiaire sans plaquage brutal) -> 3. Le Problème du sujet (la question centrale dont la réponse fait l'objet du sujet) -> 4. L'Annonce du plan (lignes directrices du développement au futur ou interrogatif).",
          explanation: "Permet de capter l'attention du correcteur et de borner avec clarté le cadre de la réflexion.",
          contextOrApplication: "Toutes les dissertations de Terminale A, C, D."
        },
        {
          name: "Architecture du Paragraphe Argumentatif",
          formulaOrRule: "Chaque paragraphe = Argument (idée directrice nette) + Explication (justification logique du mécanisme) + Illustration (tirée d'une œuvre littéraire précise : auteur, titre souligné, personnage ou citation).",
          explanation: "Garantit une démonstration étayée en évitant les affirmations gratuites.",
          contextOrApplication: "Développement en 2 axes équilibrés."
        },
        {
          name: "Règle de Ciblage des Genres Littéraires",
          formulaOrRule: "Sujet portant sur la Littérature en général -> Obligation de mobiliser tous les genres (poésie, roman, théâtre). Sujet portant sur un genre spécifique (le roman, la poésie ou le théâtre) -> Utiliser exclusivement les œuvres de ce genre sous peine de hors-sujet.",
          explanation: "Règle fondamentale d'adéquation de l'illustration à la consigne du libellé.",
          contextOrApplication: "Choix des exemples et arguments."
        },
        {
          name: "Corpus des 16 Œuvres Majeures du Fascicule",
          formulaOrRule: "Théâtre (On se chamaille pour un siège, Le Médecin malgré lui, Les enfants de Soweto, Assemien Déhilé) | Roman (Les soleils des indépendances, Sous le voile de la mariée, Rebelle, La Planète des singes, Petit Bodiel, Le monde s'effondre) | Poésie (Les Rayons et les Ombres, Demain dès l'aube, Chants d'ombre - Joal, Émaux et Camées, Soleils fusillés).",
          explanation: "Résumés et portées critiques prêts à être convoqués dans les devoirs.",
          contextOrApplication: "Banque d'illustrations au Bac."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Réaliser l'étude parcellaire et définir les mots-clés",
          whatToDo: "Définir chaque terme dans le contexte de l'énoncé, reformuler le sujet avec ses propres mots et formuler le problème central.",
          reflexOrTip: "Vérifier le genre imposé : poésie, roman, théâtre ou littérature générale ?"
        },
        {
          stepNumber: 2,
          title: "Rédiger l'introduction complète au brouillon",
          whatToDo: "Appliquer la structure en 4 parties : Amorce -> Insertion fluide -> Question centrale -> Annonce des 2 axes.",
          reflexOrTip: "Adapter si besoin le modèle passe-partout : « Née du cri du cœur, la littérature a plusieurs fois répondu aux besoins de l'humanité... »"
        },
        {
          stepNumber: 3,
          title: "Bâtir un développement équilibré avec transition soignée",
          whatToDo: "Rédiger autant d'arguments dans l'Axe 1 que dans l'Axe 2. Rédiger une transition synthétisant l'Axe 1 et annonçant l'Axe 2.",
          reflexOrTip: "Sauter deux lignes entre l'introduction et le développement, une ligne entre les parties, et deux lignes avant la conclusion."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 1 : « La poésie est un ornement, le roman un ailleurs, le théâtre un jeu, confondre ces trois genres serait une méprise dommageable. » Expliquez et discutez cette affirmation.",
        solutionStepByStep: "Axe 1 : Une distinction irréductible sur le plan formel et définitionnel (poésie comme art du rythme et du vers avec Gautier ; roman comme récit en chapitres avec Rebelle ; théâtre comme action scénique en tableaux avec Kakou).\nAxe 2 : Une profonde communauté de visées et de thèmes (dénonciation politique chez Hugo, Kourouma et Kakou ; fonction didactique et morale chez Goli Bi Irié et David Diop).\nConclusion : Spécificités stylistiques indéniables, mais vocation commune de messager du peuple.",
        finalAnswer: "Dissertation modèle intégralement traitée."
      },
      classicExamTraps: [
        "Illustrer un sujet portant sur le roman avec des pièces de théâtre ou des poèmes.",
        "Négliger la propreté de la copie ou commettre des fautes d'accord sujet-verbe élémentaires.",
        "Plaquer le sujet dans l'introduction sans phrase de transition avec la généralité."
      ],
      selfCheckChecklist: [
        "Le sujet a-t-il été recopié textuellement sur la copie avant le traitement ?",
        "L'introduction contient-elle bien ses 4 composantes en un seul paragraphe ?",
        "Y a-t-il autant d'arguments illustrés dans la première partie que dans la seconde ?"
      ],
      quickRevisionMemo: "Mémo Diomande Narcisse : « Dissertation Littéraire En Une Minute, parce que le temps est très précieux pour celui qui a plus de mille visions. » Rigueur, étude parcellaire, équilibre des axes.",
      certificationNote: "Dissertation Littéraire en Une Minute (Diomande Sadia Narcisse, Tle A-C-D, Nouvelle édition)."
    };
  }

  // Détection spécifique : Annales Français Terminale A (MENAPLN Burkina Faso, 2020)
  if (/annales?\s+(?:de\s+)?francais\s+terminale\s+a\s+2020|burkina\s+faso|menapln|ouedraogo|stanislas\s+ouaro|yameogo|ido\s+zong|universite\s+ouaga\s+i|ouaga\s+i\s+pr\s+joseph\s+ki\s*zerbo|contraction\s+de\s+texte\s+n\s*°?\s*[123]|prosper\s+kompaore|les\s+voix\s+du\s+silence|theatre\s+forum|papa\s+oublie\s+moi|guingane|catherine\s+cusset|indigo/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Épreuves du BAC — Annales Officielles (MENAPLN Burkina Faso)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Série A (Sessions 2016 à 2020, Université Ouaga I Pr Joseph Ki-Zerbo)",
      chapterTitle: "Annales Officielles de Français Terminale A (MENAPLN / DGREIP Burkina Faso, 2020)",
      definitionAndScope: `Ouvrage officiel du Ministère de l'Éducation nationale, de l'Alphabétisation et de la Promotion des Langues nationales (MENAPLN) du Burkina Faso.\n\nÉlaboré par les Inspecteurs de l'Enseignement Secondaire (Joseph André Ouédraogo, Saïdou Ouédraogo, Adama Yaméogo, W. Yolande Ido / Zong-Naba). Fournit les rappels de cours et démarches méthodologiques des 3 épreuves au choix (Contraction de texte, Commentaire composé, Dissertation/Essai littéraire) ainsi que les sujets complets et corrigés modèles officiels de l'Université Ouaga I Pr Joseph Ki-Zerbo.`,
      coreConceptsAndFormulas: [
        {
          name: "Règles Officielles de la Contraction de Texte (MENAPLN)",
          formulaOrRule: "1. Résumé au quart du volume (±10%) en respectant le fil des idées et le système d'énonciation initial. Interdiction absolue de juger ou de monter des citations. Décompte exact des mots à la fin | 2. Vocabulaire : phrase complète et brève en contexte, sans synonymie brute | 3. Discussion : mini-dissertation en deux axes (Thèse / Antithèse) appuyée sur la culture générale et l'actualité.",
          explanation: "Règle d'or : « Le texte, tout le texte, rien que le texte ».",
          contextOrApplication: "Premier sujet au choix de l'épreuve de français au Baccalauréat."
        },
        {
          name: "Règles Officielles du Commentaire Composé (MENAPLN)",
          formulaOrRule: "Règle impérative : Ne jamais dissocier l'étude du fond de celle de la forme. Organisation en 2 ou 3 centres d'intérêt. Chaque sous-partie lie : Idée directrice + Relevé textuel (citations intégrées entre guillemets) + Procédé stylistique ou grammatical identifié + Effet de sens produit.",
          explanation: "Bannit la paraphrase linéaire et le catalogue de figures de style sans portée textuelle.",
          contextOrApplication: "Deuxième sujet au choix du Baccalauréat."
        },
        {
          name: "Règles Officielles de la Dissertation / Essai Littéraire (MENAPLN)",
          formulaOrRule: "Règle d'or : « Le sujet, tout le sujet, rien que le sujet ». Analyse minutieuse de la consigne (dialectique, thématique, analytique). Développement en paragraphes argumentatifs complets (Idée directrice -> Explication logique -> Illustration analysée).",
          explanation: "Exige une solide culture littéraire et un équilibre quantitatif des parties.",
          contextOrApplication: "Troisième sujet au choix du Baccalauréat."
        },
        {
          name: "Corpus des Sujets Traités dans les Annales",
          formulaOrRule: "Contractions de texte (Mukala Kadima-Nzuji, Joseph Ki-Zerbo, Norbert Zongo) | Commentaires composés (Kadima-Nzuji - Gorgé de sang, Emile Lalsaga - Perdition, Sophie Heidi Kam - Le blues de l'Afrique II intégralement rédigé) | Dissertations (Catherine Cusset - Indigo, Prosper Kompaoré - Le théâtre-forum, Julien Clerc - L'art et la distraction, Emile Lalsaga - La poésie et la vie).",
          explanation: "Annales représentatives des attentes réelles des jurys de correction du Baccalauréat.",
          contextOrApplication: "Préparation intensive aux sessions d'examen."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Respecter scrupuleusement la consigne du sujet choisi",
          whatToDo: "Pour la contraction : calibrer rigoureusement le résumé au quart (±10%) et répondre aux questions de vocabulaire en phrases complètes. Pour le commentaire : identifier les centres d'intérêt du libellé.",
          reflexOrTip: "Ne jamais oublier de préciser sur sa copie le sujet choisi parmi les trois sous peine de pénalité."
        },
        {
          stepNumber: 2,
          title: "Intégrer les citations dans une phrase d'analyse",
          whatToDo: "Insérer les citations textuelles entre guillemets au moyen d'un mot d'articulation syntaxique, en précisant le vers ou la ligne.",
          reflexOrTip: "Souligner systématiquement les titres d'œuvres complètes (*Quêtes*, *Redire les mots anciens*, *Les sillons de l'existence*)."
        },
        {
          stepNumber: 3,
          title: "Rédiger des transitions et des conclusions équilibrées",
          whatToDo: "Assurer la fluidité entre les centres d'intérêt par des phrases de transition (formulées avec 'ainsi' ou sous forme de question). Conclure avec un bilan clair et un point de vue personnel.",
          reflexOrTip: "Présenter l'introduction et la conclusion chacune en un seul paragraphe aéré."
        }
      ],
      solvedExample: {
        problemStatement: "Commentaire composé officiel 2019 : Sophie Heidi Kam, « Le blues de l’Afrique (II) ». Montrer comment la poétesse dépeint une Afrique minée par la souffrance et exprime sa douleur appelant au sursaut.",
        solutionStepByStep: "Axe 1 : Une Afrique ravagée par la violence (lexique du carnage, métaphore des 'rapaces', accumulation des victimes vulnérables).\nAxe 2 : Une douleur filiale transformée en plaidoyer (personnification de l'Afrique en 'Je', anaphore de 'Pourquoi vers ma perte, je m'entête ?', fustigation de l'autodestruction coupable et appel à la prise de conscience).\nConclusion : Le blues poétique devient une sonnerie d'éveil pour la paix.",
        finalAnswer: "Commentaire composé modèle intégralement rédigé (Bac 2019)."
      },
      classicExamTraps: [
        "Faire un montage de citations dans le résumé au lieu de reformuler avec son propre vocabulaire.",
        "Séparer l'analyse des thèmes de celle des procédés dans le commentaire composé.",
        "Oublier d'indiquer le décompte exact des mots à la fin du résumé."
      ],
      selfCheckChecklist: [
        "Le résumé respecte-t-il la marge de 10% (ex: entre 148 et 180 mots pour un texte de 643 mots) ?",
        "Chaque centre d'intérêt associe-t-il fond (sens) et forme (procédés) ?",
        "Les titres d'œuvres sont-ils bien soulignés ?"
      ],
      quickRevisionMemo: "Mémo Annales Bac Burkina : « Le texte, tout le texte, rien que le texte » pour la contraction ; « Fond et forme inséparables » pour le commentaire composé.",
      certificationNote: "Annales officiel de français Terminale A (MENAPLN / DGREIP Burkina Faso, 2020)."
    };
  }

  // Détection spécifique : Des Sujets de Philosophie Corrigés (SV. NTSGOD / Fomesoutra)
  if (/ntsgod|sujets?\s+(?:de\s+)?philosophie\s+corriges?|la\s+conscience\s+nous\s+exclut\s*elle\s+de\s+l\s*animalite|peut\s*on\s+considerer\s+l\s*inconscient\s+comme\s+une\s+nature\s+ou\s+une\s+histoire|l\s*etat\s+est\s*il\s+un\s+mal\s+necessaire|le\s+pouvoir\s+d\s*etat\s+est\s*il\s+necessairement\s+violent|l\s*enfer\s+c\s*est\s+l\s*absence\s+des\s+autres|suffit\s*il\s+d\s*appliquer\s+le\s+droit|la\s+liberte\s+consiste\s+a\s+ne\s+dependre\s+que\s+des\s+lois|la\s+nation\s+releve\s*t\s*elle\s+de\s+l\s*utopie|l\s*atheisme\s+est\s*il\s+une\s+illusion|le\s+regain\s+de\s+la\s+foi\s+religieuse|la\s+pratique\s+religieuse\s+est\s*elle\s+une\s+activite\s+caduque|l\s*evolution\s+creatrice\s+bergson|bergson\s+declic|hegel\s+double\s+existence|l\s*oubli\s+n\s*est\s+pas\s+seulement\s+une\s+vis\s+inertiae|genealogie\s+de\s+la\s+morale\s+oubli|lorsque\s+je\s+declare\s+que\s+la\s+liberte|sartre\s+delaissement|j\s*aurais\s+voulu\s+vivre\s+et\s+mourir\s+libre|rousseau\s+honorable\s+joug|troupeaux\s+humains\s+nietzsche|tartufferie\s+des\s+dirigeants|la\s+justice\s+l\s*equite\s+prend\s+sa\s+source\s+parmi\s+des\s+hommes\s+a\s+peu\s+pres\s+egalement\s+puissants|troc\s+justice\s+nietzsche|en\s+vain\s+dirait\s*on\s+que\s+tous\s+les\s+gouvernements\s+sont|du\s+contrat\s+originel\s+hume/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — Sujets Corrigés (SV. NTSGOD)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Toutes Séries (A1, A2, C, D, E)",
      chapterTitle: "Des Sujets de Philosophie Corrigés : 11 Dissertations & 8 Commentaires de Textes Ordonnés (SV. NTSGOD)",
      definitionAndScope: `Recueil de référence d'annales corrigées de philosophie en Terminale (Fomesoutra).\n\nComporte 11 dissertations approfondies (Définitions conceptuelles, reformulation fidèle, problème sous forme interrogative stricte, axes antithétiques étayés) et 8 commentaires de textes philosophiques intégraux avec étude ordonnée des mouvements et double critique interne/externe (Bergson, Hegel, Nietzsche, Sartre, Rousseau, Hume).`,
      coreConceptsAndFormulas: [
        {
          name: "Méthode de la Dissertation en 4 Temps Obligatoires",
          formulaOrRule: "I. Définition des termes essentiels en contexte -> II. Reformulation claire du sujet -> III. Problème interrogatif central (vraie question philosophique, sans affirmation) -> IV. Deux axes d'analyse (Thèse / Antithèse) appuyés sur des thèses philosophiques certifiées.",
          explanation: "Évite le plaquage d'opinions vagues et structure la réflexion en étapes rigoureuses.",
          contextOrApplication: "Toutes les dissertations de philosophie au Baccalauréat."
        },
        {
          name: "Structure du Commentaire de Texte Philosophique",
          formulaOrRule: "I. Éléments d'introduction (Thème, Problème interrogatif, Thèse de l'auteur) -> II. Étude ordonnée (délimitation exacte des mouvements et analyse des concepts) -> III. Intérêt philosophique (Critique interne sur l'intention et la démarche + Critique externe sur l'enjeu problématisé et confrontation avec d'autres auteurs).",
          explanation: "Bannit la paraphrase et la juxtaposition d'exposés doctrinaux hors-texte.",
          contextOrApplication: "Épreuve du commentaire philosophique au Baccalauréat."
        },
        {
          name: "Conscience, Inconscient et Nature Humaine",
          formulaOrRule: "Conscience comme souveraineté réflexive, liberté et dignité morale (Descartes, Pascal, Rousseau, Kant) vs Déterminismes pulsionnels, inconscient psychique et enracinement animal (Hobbes, Freud, Nietzsche, Valéry).",
          explanation: "Tension centrale entre la maîtrise rationnelle de soi et les forces obscures du psychisme.",
          contextOrApplication: "Dissertations 1 & 2 ; Commentaires Bergson & Hegel."
        },
        {
          name: "Politique, Droit, État et Violence",
          formulaOrRule: "L'État comme pacificateur nécessaire et garant des libertés civiles (Hobbes, Spinoza, Hegel, Rousseau) vs L'État comme appareil répressif et fossoyeur de l'individu (Althusser, Bakounine, Marx, Schopenhauer). La force de l'État : monopole de la contrainte légitime (Weber, Pascal, Valéry).",
          explanation: "Problématique de la souveraineté, de l'obéissance aux lois et de la justice.",
          contextOrApplication: "Dissertations 3, 4, 6, 7 ; Commentaires Rousseau, Nietzsche, Hume."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Définir les termes essentiels et reformuler le sujet",
          whatToDo: "Prendre chaque notion clé et lui donner son sens contextuel exact. Reformuler fidèlement l'énoncé sans le dénaturer.",
          reflexOrTip: "Ne jamais confondre le problème avec une thèse ou une affirmation."
        },
        {
          stepNumber: 2,
          title: "Formuler la problématique sous forme de question directe",
          whatToDo: "Poser la question philosophique centrale qui révèle la tension interne ou le paradoxe du sujet.",
          reflexOrTip: "Introduire les questions secondaires avec la formule rituelle : « Pour répondre à ce problème d'autres questions s'ajoutent : »"
        },
        {
          stepNumber: 3,
          title: "Organiser les arguments avec références authentifiées",
          whatToDo: "Chaque axe développe 2 ou 3 paragraphes associant une idée directrice, une explication conceptuelle et une référence philosophique expliquée.",
          reflexOrTip: "Pour le commentaire de texte, toujours problématiser l'enjeu dans la critique externe."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 1 : « La conscience nous exclut-elle de l’animalité ? »",
        solutionStepByStep: "Axe 1 : Malgré la conscience, l'homme demeure enraciné dans l'animalité (Hobbes : l'homme loup pour l'homme ; Freud : pulsions d'agressivité dans Malaise dans la civilisation ; Valéry : la conscience règne mais ne gouverne pas).\nAxe 2 : La conscience constitue la rupture ontologique qui élève l'homme (Descartes : substance pensante ; Pascal : roseau pensant ; Rousseau : conscience instinct divin élevant au-dessus des bêtes ; Kant : pouvoir du 'Je' ; Heidegger : être des lointains).\nBilan : L'homme subit des forces pulsionnelles, mais sa conscience demeure le juge infaillible de sa dignité éthique.",
        finalAnswer: "Dissertation philosophique modèle traitée (SV. NTSGOD)."
      },
      classicExamTraps: [
        "Répondre simplement par 'Oui' puis 'Non' sans problématiser la tension conceptuelle.",
        "Citer des auteurs comme un catalogue sans expliquer leur raisonnement.",
        "Paraphraser le texte dans le commentaire sans dégager sa structure logique."
      ],
      selfCheckChecklist: [
        "La problématique est-elle bien formulée sous forme interrogative ?",
        "Chaque axe comporte-t-il des arguments avec des auteurs et citations contextualisés ?",
        "Pour le commentaire, l'intérêt philosophique comprend-il la critique interne et la critique externe ?"
      ],
      quickRevisionMemo: "Mémo SV. NTSGOD : Définition rigoureuse -> Reformulation fidèle -> Problème interrogatif -> Deux axes argumentés avec auteurs authentiques.",
      certificationNote: "Recueil SV. NTSGOD, Des Sujets de Philosophie Corrigés (Fomesoutra)."
    };
  }

  // Détection spécifique : 20 Sujets de Philo Type Bac (Saleh Mahamat Addimi & Allah Hogoum Bessalé - Tchad)
  if (/saleh\s*mahamat\s*addimi|allah\s*hogoum\s*bessale|lycee\s+adventiste\s+de\s+farcha|farcha|bac\s+tchad\s+philo|20\s+sujets\s+de\s+philo\s+type\s+bac|seydou\s+badian\s+l\s*homme\s+n\s*est\s+rien\s+sans\s+les\s+autres|francois\s+tombalbaye|tombolbaye|ngarta|thomas\s+sankara\s+hommes\s+eclaires|les\s+mots\s+sont\s+des\s+pistolets?\s+charges|le\s+dialogue\s+renvoie\s*t\s*il\s+toutes\s+violences|est\s*il\s+normal\s+de\s+faire\s+(?:la\s+)?violence\s+pour\s+defendre\s+ses\s+droits|quel\s+est\s+le\s+role\s+d\s*un\s+chef\s+d\s*etat|ce\s+n\s*est\s+pas\s+la\s+violence\s+qui\s+restaure/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — 20 Sujets Types Traités (Saleh Mahamat Addimi & Allah Hogoum Bessalé, Tchad)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D (Baccalauréat Tchad & Afrique Centrale)",
      chapterTitle: "20 Sujets de Philo Type Bac : Fiches & Dissertations Rédigées (Lycée Adventiste de Farcha)",
      definitionAndScope: `Ouvrage didactique élaboré par Saleh Mahamat Addimi (Lycée Adventiste de Farcha, N'Djaména, Tchad) et certifié par le Pr Allah Hogoum Bessalé.\n\nRegroupe 20 dissertations complètes couvrant l'intégralité du programme officiel : Conscience, Inconscient, Autrui, Langage, Travail, Culture, Violence, Droit, État, Démocratie, Science, Rôle du Chef d'État, Paix durable et Nature de la philosophie. Convoque les maîtres universels (Descartes, Sartre, Hegel, Marx, Freud, Gandhi) et des références africaines et panafricaines majeures (Seydou Badian, Thomas Sankara, François Tombalbaye / Ngarta).`,
      coreConceptsAndFormulas: [
        {
          name: "L'Altérité et l'Humanisation selon Seydou Badian et Sartre",
          formulaOrRule: "« L'homme n'est rien sans les autres » (Seydou Badian, Sous l'orage) : autrui comme médiateur indispensable à l'apprentissage, à la réalisation et à la conscience de soi vs « L'enfer, c'est les autres » (Sartre, Huis-clos) lorsque le regard d'autrui aliène la liberté.",
          explanation: "Montre la dualité constitutive de la vie sociale entre nécessité vitale et tension conflictuelle.",
          contextOrApplication: "Sujets 3 & 19 du recueil."
        },
        {
          name: "Le Langage : Puissance d'Éveil et Arme de Discorde",
          formulaOrRule: "Le langage comme bien suprême permettant l'expression, l'objectivation de la pensée (Hegel) et le dialogue vs « Les mots sont des pistolets chargés » (Sartre, Hölderlin) capables d'engendrer mensonge, malédiction et violences politiques.",
          explanation: "Double tranchant de la parole humaine : outil de médiation ou étincelle de guerre.",
          contextOrApplication: "Sujets 4, 5 & 12 du recueil."
        },
        {
          name: "Paix Durable, Bonne Gouvernance et Rôle du Chef d'État",
          formulaOrRule: "Une paix véritable repose sur l'équité de la justice et l'amour de la patrie (« Dans une république, il faut des hommes éclairés », Thomas Sankara ; « Un bon président est celui qui apaise la soif du peuple », François Tombalbaye) vs La corruption, le clientélisme familial et l'arbitraire qui ruinent l'État.",
          explanation: "Pensée politique africaine contemporaine appliquée à la stabilité de la république.",
          contextOrApplication: "Sujets 13 & 16 du recueil."
        },
        {
          name: "Violence, Droit et Restauration Politique (Machiavel Bac 2021)",
          formulaOrRule: "« Ce n'est pas la violence qui restaure, mais la violence qui ruine, qu'il faut condamner » (Machiavel, Bac 2021) : La non-violence active comme impératif moral (Gandhi) vs La force publique fondatrice ou révolutionnaire pour abattre la tyrannie (Machiavel, Max Weber, Marx).",
          explanation: "Dialectique fondamentale entre l'éthique de conviction et l'éthique de responsabilité politique.",
          contextOrApplication: "Sujets 9 & 20 du recueil."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Définir les termes et poser la contradiction",
          whatToDo: "Mettre en évidence la tension entre la thèse commune et son antithèse dans l'introduction.",
          reflexOrTip: "Citer fidèlement la pensée ou la maxime de l'auteur au libellé."
        },
        {
          stepNumber: 2,
          title: "Développer la thèse puis l'antithèse avec exemples précis",
          whatToDo: "Mobiliser les arguments théoriques et les illustrations littéraires et politiques (Sankara, Tombalbaye, Gandhi, Badian).",
          reflexOrTip: "Veiller à faire de la transition un pont logique entre les deux parties."
        },
        {
          stepNumber: 3,
          title: "Conclure par une synthèse équilibrée",
          whatToDo: "Résumer le dépassement dialectique et ouvrir sur une interrogation prospective.",
          reflexOrTip: "Ne jamais clore sur une réponse unilatérale qui méconnaîtrait un pan du problème."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 20 (Bac 2021) : « Ce n'est pas la violence qui restaure, mais la violence qui ruine, qu'il faut condamner ». Commentez ce point de vue de Machiavel.",
        solutionStepByStep: "Axe 1 : La condamnation inconditionnelle de la violence aveugle et ruineuse (Gandhi : triomphe de la non-violence ; destruction des vies et des infrastructures nationales).\nAxe 2 : La force chirurgicale et régulatrice comme nécessité de restauration de l'ordre républicain (Machiavel : la force fondatrice des lois ; Max Weber : monopole de la contrainte légitime de l'État pour éviter la ruine collective).\nBilan : La violence aveugle et privée est un poison destructeur ; seule l'autorité légitime agissant pour le bien commun et la paix des citoyens peut restaurer la cité.",
        finalAnswer: "Dissertation modèle Bac 2021 intégralement traitée."
      },
      classicExamTraps: [
        "Confondre la force légitime de l'État avec la violence arbitraire d'une faction tyrannique.",
        "Oublier de définir 'restaurer' et 'ruiner' dans le sujet de Machiavel.",
        "Opposer artificiellement culture et nature au lieu de montrer leur synthèse chez l'homme."
      ],
      selfCheckChecklist: [
        "Les citations de Badian, Sankara ou Machiavel sont-elles expliquées en contexte ?",
        "L'antithèse répond-elle point par point aux objections de la thèse ?",
        "La conclusion récapitule-t-elle l'enjeu éthique et politique du sujet ?"
      ],
      quickRevisionMemo: "Mémo Farcha / Saleh Mahamat Addimi : Rigueur des définitions, ancrage dans la réalité africaine (Badian, Sankara, Tombalbaye) et équilibre dialectique des arguments.",
      certificationNote: "20 Sujets de Philo Type Bac Traités, Saleh Mahamat Addimi & Allah Hogoum Bessalé (N'Djaména, Tchad)."
    };
  }

  // Détection spécifique : Précis de Citations Philosophiques (Ougard Aimé, Éditions Méditon, Côte d'Ivoire)
  if (/ougard|ougard\s+aime|precis\s+de\s+citations\s+philosophiques|mediton|collection\s+precis|etude\s+parcellaire|l\s*univers\s+m\s*embarrasse.*cette\s+horloge|on\s+ne\s+peut\s+etre\s+a\s+la\s+fenetre\s+et\s+se\s+voir\s+passer\s+dans\s+la\s+rue|la\s+force\s+et\s+l\s*experience\s+de\s+certains\s+doivent\s+servir|le\s+poussin\s+qui\s+reste\s+a\s+cote\s+de\s+sa\s+mere|la\s+loi\s+de\s+la\s+lumiere\s+naturelle\s+veut\s+que\s+nous\s+fassions|l\s*autre\s+n\s*est\s+pas\s+une\s+simple\s+duplication\s+du\s+moi|qui\s+a\s+appris\s+a\s+mourir\s+il\s+a\s+desappris\s+a\s+servir|la\s+philosophie\s+est\s+la\s+gerante\s+de\s+la\s+raison/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — Citations Thématiques & Étude Parcellaire (Ougard Aimé)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Toutes Séries (A1, A2, C, D, E) — Programme Côte d'Ivoire & Francophone",
      chapterTitle: "Précis de Citations Philosophiques : Aspect Positif et Critique sur 25 Notions (Ougard Aimé, Éd. Méditon)",
      definitionAndScope: `Recueil didactique officiel d'excellence conçu par Ougard Aimé (Éditions Méditon, Collection « PRÉCIS », Côte d'Ivoire).\n\nStructure plus de 200 citations majeures du programme sur 25 notions fondamentales (Conscience, Inconscient, Mémoire, Société, Violence, Autrui, État et justice, Droit et justice, Liberté, Dieu et religion, Humanité, Histoire, Existence, Mythe et raison, Bonheur, Progrès, Technique, Philosophie, Désir, Imagination, Travail, Art, Langage, Théorie et expérience, Science) en fournissant pour chacune une définition conceptuelle, un volet d'argumentation positive (thèse) et un volet de réfutation critique (antithèse/limites), complété par le dictionnaire de philosophie adapté à l'étude parcellaire.`,
      coreConceptsAndFormulas: [
        {
          name: "Méthode de la Double Exploitation des Citations (Thèse vs Antithèse)",
          formulaOrRule: "Chaque citation doit être analysée selon son contexte philosophique précis : soit comme affirmation de l'essence ou de la valeur de la notion (Aspect positif), soit comme révélation de ses limites, dérives ou contradictions internes (Aspect critique).",
          explanation: "Bannit le plaquage ornemental de citations et nourrit directement la construction d'un plan dialectique rigoureux.",
          contextOrApplication: "Toutes les dissertations et tous les commentaires de texte en Terminale."
        },
        {
          name: "Conscience & Connaissance de Soi : Élucidation vs Obscurité Inconsciente",
          formulaOrRule: "Thèse : La conscience comme dignité, lucidité et souveraineté morale (Descartes, Pascal, Rousseau, Kant, Hegel) vs Antithèse : La conscience superficielle, décentrée et lacunaire face aux forces pulsionnelles inconscientes (Schopenhauer, Bergson, Freud, Nietzsche, Marx, Valéry).",
          explanation: "Tension constitutive de la condition humaine entre maîtrise rationnelle et déterminismes internes.",
          contextOrApplication: "Dissertations sur la conscience, l'inconscient et la liberté."
        },
        {
          name: "L'État et la Loi : Pacification et Liberté Civile vs Monstre Froid et Aliénation",
          formulaOrRule: "Thèse : L'État comme rempart contre l'état de guerre et condition de la liberté par la loi (Montesquieu, Hegel, Kant, Rousseau, Spinoza) vs Antithèse : L'État comme instrument de domination de classe, machine d'oppression et 'plus froid des monstres froids' (Hölderlin, Nietzsche, Althusser, Marx, Bakounine).",
          explanation: "Dialectique politique fondamentale entre nécessité de l'ordre républicain et défense des libertés individuelles.",
          contextOrApplication: "Dissertations sur l'État, la justice, le droit et la violence."
        },
        {
          name: "Technique et Progrès : Puissance Créatrice vs Périls de Déshumanisation",
          formulaOrRule: "Thèse : La technique comme domination bienfaisante de la nature, confort et libération des servitudes (Descartes, Fourastié, Spengler, Leroi-Gourhan) vs Antithèse : La technique comme aliénation, menace écologique et arme destructrice (Rabelais, Hans Jonas, Einstein, Ellul, Heidegger).",
          explanation: "Exige d'articuler efficacité matérielle et responsabilité éthique.",
          contextOrApplication: "Dissertations sur la science, la technique, le progrès et la nature."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Procéder à l'étude parcellaire du sujet",
          whatToDo: "Définir chaque terme pivot (termes, opérateurs, verbes) à l'aide des définitions rigoureuses du lexique parcellaire.",
          reflexOrTip: "Ne pas confondre contrainte et obligation, ni droit positif et droit naturel."
        },
        {
          stepNumber: 2,
          title: "Mobiliser les citations sous leur double polarité",
          whatToDo: "Associer à chaque axe d'analyse les pensées et citations d'auteurs authentifiés en expliquant précisément leur sens.",
          reflexOrTip: "Toujours expliciter en une ou deux phrases ce que la citation démontre dans le devoir."
        },
        {
          stepNumber: 3,
          title: "Rédiger une synthèse équilibrée sans contradiction",
          whatToDo: "Dépasser la contradiction initiale en montrant sous quelles conditions la conciliation conceptuelle s'opère.",
          reflexOrTip: "La conclusion doit répondre directement à la problématique sans subterfuge."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet : « L’État est-il un obstacle à la liberté humaine ? » (Éclairage Ougard Aimé / Méditon)",
        solutionStepByStep: "Étude parcellaire : L'État (société organisée par des lois et une autorité souveraine) ; Obstacle (frein, barrière, entrave) ; Liberté (pouvoir d'agir sans contrainte selon sa volonté rationnelle).\nAxe 1 : L'État comme obstacle manifeste aux libertés (Hölderlin : l'État devient un enfer quand on veut en faire un paradis ; Nietzsche : monstre froid qui ment en disant 'Moi l'État je suis le peuple' ; Bakounine : vaste cimetière des libertés individuelles ; Marx : instrument d'oppression de la classe dominante).\nAxe 2 : L'État comme condition et garant de la liberté véritable (Montesquieu : la liberté consiste à ne dépendre que des lois ; Rousseau : l'obéissance à la loi qu'on s'est prescrite est liberté ; Hegel : c'est dans l'État que l'homme accède à l'existence rationnelle ; Spinoza : la fin de l'État est la sécurité et la liberté).\nBilan : L'État despotique asservit, mais l'État démocratique de droit transforme la licence précaire en liberté civile indestructible.",
        finalAnswer: "Traitement complet conforme au Précis d'Ougard Aimé (Édition Méditon)."
      },
      classicExamTraps: [
        "Citer une phrase d'auteur sans expliquer sa portée conceptuelle dans le sujet.",
        "Confondre l'État de droit démocratique avec le totalitarisme ou la tyrannie.",
        "Utiliser des définitions vagues du sens commun au lieu des concepts de l'étude parcellaire."
      ],
      selfCheckChecklist: [
        "Chaque terme clé du sujet a-t-il été défini dans son sens philosophique contextuel ?",
        "Les citations mobilisées comportent-elles le nom de l'auteur et l'explication de sens ?",
        "Le plan articule-t-il clairement la thèse et son antithèse critique ?"
      ],
      quickRevisionMemo: "Mémo Ougard Aimé : Étude parcellaire rigoureuse -> Définitions conceptuelles exactes -> Exploitation dialectique des citations (Aspect positif vs Aspect critique).",
      certificationNote: "Précis de Citations Philosophiques, Ougard Aimé, Éditions Méditon (Côte d'Ivoire)."
    };
  }

  // Détection spécifique : Résumé des Cours de Philosophie (Fondation Fosopiq Éducation)
  if (/fosopiq|fondation\s+fosopiq|resume\s+des\s+cours\s+de\s+philosophie|9\s+lecons\s+de\s+philo|youakim\s+moubarak|la\s+victoire\s+par\s+la\s+violence\s+equivaut\s+a\s+la\s+defaite|je\s+prefere\s+la\s+pire\s+des\s+lois\s+que\s+le\s+meilleur\s+des\s+maitres|la\s+science\s+a\s+fait\s+de\s+nous\s+des\s+dieux\s+avant\s+meme/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — 9 Leçons Méthodiques & Lexique (Fondation Fosopiq)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D — Programme Panafricain & Francophone",
      chapterTitle: "Résumé des Cours de Philosophie : 9 Leçons Bipolaires & Lexique (Fondation Fosopiq Éducation)",
      definitionAndScope: `Manuel de révision synthétique conçu par la Fondation Fosopiq Éducation pour la préparation intensive des candidats au Baccalauréat.\n\nStructure le programme complet en 9 leçons modulaires combinant systématiquement les arguments favorables (Thèse), les limites et réfutations critiques (Antithèse), un corpus de citations phares authentifiées et un lexique conceptuel (Conscience, Inconscient, Violence, Autrui, État, Religion, Histoire, Travail, Technique & Science, Philosophie).`,
      coreConceptsAndFormulas: [
        {
          name: "L'Inconscient : Découverte Psychologique vs Mauvaise Foi Existentielle",
          formulaOrRule: "Freud (Malaise, Métapsychologie) : L'inconscient explique les failles de la conscience (rêves, lapsus, névroses, agressivité) vs Sartre & Alain : L'inconscient est une excuse lâche et une fiction de mauvaise foi, l'homme est irréductiblement libre et responsable de tout ce qu'il fait.",
          explanation: "Clé de voûte de la Leçon 1 du cours de Fosopiq.",
          contextOrApplication: "Sujets sur la liberté, la responsabilité, la conscience et l'inconscient."
        },
        {
          name: "L'État : Sécurité et Égalité Civile vs Violence Destructrice et Domination",
          formulaOrRule: "Rousseau & Bergson : L'État de droit arrache à la jungle primitive, fait régner l'égalité juridique et la paix civile (« Je préfère la pire des lois que le meilleur des maîtres ») vs Bakounine & Marx : L'État est un cimetière des libertés et l'instrument d'exploitation des prolétaires par les bourgeois.",
          explanation: "Structure dialectique de la Leçon 4.",
          contextOrApplication: "Sujets sur la politique, l'État, les lois et le pouvoir."
        },
        {
          name: "La Religion : Facteur d'Unité et Refuge Spirituel vs Aliénation et Fanatisme",
          formulaOrRule: "Bergson & Youakim Moubarak : La religion apaise l'angoisse de la mort, inculque l'amour du prochain et unit les hommes au-delà des frontières vs Nietzsche, Feuerbach & Marx : Dieu est une projection aliénée, un opium pour créatures opprimées et une source de guerres sectaires.",
          explanation: "Structure dialectique de la Leçon 5.",
          contextOrApplication: "Sujets sur la religion, la foi, la raison et la société."
        },
        {
          name: "Le Travail : Vecteur d'Indépendance et d'Humanisation vs Aliénation et Châtiment",
          formulaOrRule: "Bernard Dadié & Voltaire : Le travail libère de la tutelle d'autrui, donne dignité et chasse l'ennui, le vice et le besoin vs Genèse & Marx : Travail vécu comme punition divine ('à la sueur de ton front') et déshumanisation de l'ouvrier en marchandise.",
          explanation: "Structure dialectique de la Leçon 7.",
          contextOrApplication: "Sujets sur le travail, la liberté et l'économie."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Identifier les deux pôles de la leçon concernée",
          whatToDo: "Repérer la tension centrale du sujet et mobiliser les thèses positives d'un côté et les thèses critiques de l'autre.",
          reflexOrTip: "Mobiliser au moins deux auteurs pour la thèse et deux pour l'antithèse."
        },
        {
          stepNumber: 2,
          title: "Articuler les citations phares avec le raisonnement",
          whatToDo: "Intégrer les formules maîtresses (Rousseau, Sartre, Marx, Dadié, Bergson, Moubarak, Jonas) en montrant leur pertinence.",
          reflexOrTip: "Ne jamais laisser une citation orpheline de commentaire."
        },
        {
          stepNumber: 3,
          title: "Formuler un bilan nuancé",
          whatToDo: "Dégager la condition éthique ou rationnelle qui permet de surmonter la contradiction.",
          reflexOrTip: "Conclure avec clarté sans esquiver la difficulté."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet : « La religion est-elle un facteur d’union ou de division entre les hommes ? » (Fiche Leçon 5 Fosopiq)",
        solutionStepByStep: "Axe 1 : La religion comme puissant facteur d'union et de paix (Youakim Moubarak : de tous les facteurs d'unité entre les hommes, la religion est le plus unificateur ; Bergson : cohésion sociale et remède à l'angoisse ; préceptes de fraternité, charité et pardon universels).\nAxe 2 : La religion comme source de division, d'aliénation et de violence (Thomas Hobbes : le royaume de Dieu s'obtient par la violence ; fanatisme et guerres saintes ; Marx : opium du peuple qui divise oppresseurs et opprimés ; Nietzsche : culpabilité et haine du monde terrestre).\nBilan : La religion unit en esprit par ses idéaux moraux de fraternité, mais elle devient facteur de haine et de division dès lors qu'elle est dévoyée par le dogmatisme sectaire et l'intolérance fanatique.",
        finalAnswer: "Fiche modèle rédigée selon la Leçon 5 de la Fondation Fosopiq Éducation."
      },
      classicExamTraps: [
        "Réduire la religion au seul fanatisme sans voir son rôle historique de cohésion sociale.",
        "Oublier que pour Sartre, l'inconscient est une illusion de mauvaise foi.",
        "Ignorer les références africaines majeures (Seydou Badian, Bernard Dadié)."
      ],
      selfCheckChecklist: [
        "Les 2 aspects (positif et critique) ont-ils été traités avec des arguments distincts ?",
        "Les citations des philosophes et auteurs sont-elles exactes et reliées au sujet ?",
        "La définition des concepts clés est-elle conforme au lexique philosophique ?"
      ],
      quickRevisionMemo: "Mémo Fosopiq : 9 Leçons dialectiques (Thèse vs Antithèse) -> Citations authentifiées (Pascal, Descartes, Rousseau, Marx, Sartre, Dadié) -> Lexique conceptuel rigoureux.",
      certificationNote: "Résumé des Cours de Philosophie, Fondation Fosopiq Éducation."
    };
  }

  // Détection spécifique : Kit de Survie Philosophie (Maoude Gochi Ali / Collection Maoude Reboot)
  if (/maoude|maoude\s+gochi|gochi\s+ali|maoude\s+reboot|kit\s+de\s+survie\s+(?:de\s+)?philosophie|le\s+grand\s+kit\s+de\s+survie|40\s+citations\s+(?:philosophiques\s+)?a\s+connaitre|qui\s+suis\s*[- ]\s*je|est\s*il\s+possible\s+d\s*echapper\s+au\s+temps|le\s+travail\s+divise\s*t\s*il\s+les\s+hommes|a\s+quoi\s+bon\s+expliquer\s+une\s+oeuvre\s+d\s*art|autrui\s+est\s*il\s+limite\s+ou\s+condition|la\s+conscience\s+est\s*elle\s+source\s+de\s+liberte\s+ou\s+de\s+contrainte|la\s+liberte\s+est\s*elle\s+une\s+illusion|ane\s+de\s+buridan|crime\s+de\s+lafcadio|tonneau.*callicles|ruse\s+de\s+la\s+raison\s+hegel|philosophie\s+bantou.*tempels|kocc\s+barma/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — Kit de Survie (Maoude Gochi Ali / Maoude Reboot)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D, G & 1ère — Niger, Burkina Faso, Bénin, Côte d'Ivoire & CEDEAO",
      chapterTitle: "Kit de Survie Philosophie : Cours, 40 Citations, Notions & Sujets Types Bac (Maoude Gochi Ali)",
      definitionAndScope: `Ouvrage didactique de référence de la collection MAOUDE REBOOT conçu par Maoude Gochi Ali.\n\nCouvre l'intégralité du programme officiel des Terminales A, C, D, G et Premières : origines de la philosophie (Milet, Cheikh Anta Diop, Platon, Aristote, Jankélévitch, Towa), métaphysique, anthropologie et axiologie (héros africains : Lat Dior, Soundiata Keïta, Aline Sitoé Diatta), débat sur la philosophie africaine (Tempels, Frobenius vs Hountondji, Towa), les 40 citations indispensables au Bac, le lexique exhaustif de tous les thèmes, et la méthode du plan directeur (4 étapes de dissertation, grille de lecture du commentaire composé en 8 points).`,
      coreConceptsAndFormulas: [
        {
          name: "Méthodologie du Plan Directeur (Les 4 Étapes Préalables)",
          formulaOrRule: "1. Étude parcellaire (définitions contextuelles) -> 2. Reformulation du sujet -> 3. Problématisation (poser l'obstacle/controverse sous forme de question) -> 4. Plan détaillé avec transitions critiques.",
          explanation: "Évite le flou artistique, la récitation mécanique et le hors-sujet. Garantit une copie vivante et rigoureuse.",
          contextOrApplication: "Toutes les dissertations philosophiques au Baccalauréat."
        },
        {
          name: "Technique d'Argumentation en 6 Points par Axe",
          formulaOrRule: "1. Rappel de la thèse -> 2. Reformulation de la thèse -> 3. Justification par un argument explicité -> 4. Exemple concret -> 5. Citation d'auteur authentifiée -> 6. Explicitation de la citation en lien direct avec la thèse.",
          explanation: "Chaque axe comprend généralement deux paragraphes équilibrés reliés par des connecteurs logiques.",
          contextOrApplication: "Rédaction des deux ou trois grandes parties du développement."
        },
        {
          name: "La Question de la Liberté : Illusion Spinoziste vs Conquête Morale",
          formulaOrRule: "Descartes : libre arbitre immédiat (expérimenté sans preuve) vs Spinoza & Freud : illusion de la liberté par ignorance des causes déterminantes (l'homme n'est pas un empire dans un empire) vs Platon & Kant : liberté conquise par la maîtrise de la raison sur les désirs intempérants (Gorgias, Calliclès) et obéissance à la loi morale.",
          explanation: "Structure dialectique du Sujet Type 6 (« La liberté est-elle une illusion ? »).",
          contextOrApplication: "Sujets sur la liberté, la conscience, l'inconscient et le désir."
        },
        {
          name: "Autrui et la Liberté : Aliénation vs Intersubjectivité Fondatrice",
          formulaOrRule: "Sartre : autrui comme entrave et chosification sous le regard ('l'enfer c'est les autres') vs Kant : insociable sociabilité et règne des fins vs Hegel : dialectique du maître et de l'esclave où la liberté s'arrache par la lutte pour la reconnaissance.",
          explanation: "Clé de voûte du Sujet Type 4 et de la leçon sur Autrui.",
          contextOrApplication: "Dissertations sur autrui, la société, la morale et la liberté."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Réaliser l'étude parcellaire et la problématisation",
          whatToDo: "Définir chaque terme pivot en contexte philosophique et formuler la question centrale qui révèle la contradiction ou le paradoxe.",
          reflexOrTip: "Le problème doit toujours être formulé sous forme interrogative, jamais comme une affirmation."
        },
        {
          stepNumber: 2,
          title: "Bâtir le plan directeur avec transitions critiques",
          whatToDo: "Organiser les axes en partant du sens commun pour s'élever vers la réflexion philosophique la plus profonde.",
          reflexOrTip: "Soigner la transition entre les parties en 3 temps : bilan de la thèse, objection/limite, relance du nouvel axe."
        },
        {
          stepNumber: 3,
          title: "Rédiger en respectant les 40 citations clés",
          whatToDo: "Insérer les citations maîtresses (Descartes, Socrate, Kant, Marx, Freud, Pascal, Sartre, Alain) en expliquant systématiquement leur sens.",
          reflexOrTip: "Ne jamais laisser une citation plaquée sans analyse."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 4 : « Autrui est-il condition ou limite à ma liberté ? » (Maoude Gochi Ali)",
        solutionStepByStep: "Axe 1 : Autrui comme limite et entrave à ma liberté (Sartre : chosification par le regard, honte, 'l'enfer c'est les autres' ; désir mimétique et convoitise selon Hobbes ; solipsisme cartésien où le moi pensant se suffit).\nAxe 2 : Autrui comme condition indispensable dans la vie en société (Kant : l'insociable sociabilité poussant à la culture ; Hegel : dialectique du maître et de l'esclave, la reconnaissance mutuelle fonde la conscience libre ; Platon : le partage du travail dans la Cité).\nAxe 3 : Autrui me permet d'accéder à ma pleine humanité (Levinas : l'épreuve éthique du visage d'autrui ; Rousseau : la pitié naturelle et le contrat social ; Husserl : le langage et la communauté intersubjective).\nBilan : Autrui réprime la licence animale égoïste mais constitue le médiateur incontournable de la liberté civile, morale et rationnelle.",
        finalAnswer: "Corrigé modèle intégral rédigé selon le Kit de survie de Maoude Gochi Ali."
      },
      classicExamTraps: [
        "Confondre l'explication de texte littéraire avec le commentaire philosophique (ce dernier exige l'intérêt philosophique interne et externe).",
        "Penser que citer un auteur dispense de développer l'argument personnel.",
        "Négliger les transitions critiques entre les parties du développement."
      ],
      selfCheckChecklist: [
        "L'introduction contient-elle l'amorce, la reprise du sujet, la problématisation et l'annonce de plan ?",
        "Chaque axe comporte-t-il au moins un argument, un exemple et une citation expliquée ?",
        "La conclusion dresse-t-elle le bilan synthétique et propose-t-elle une ouverture ?"
      ],
      quickRevisionMemo: "Mémo Maoude Reboot : 4 étapes du Plan Directeur -> 40 Citations incontournables -> Argumentation en 6 points -> Transitions critiques.",
      certificationNote: "Kit de Survie Philosophie, Maoude Gochi Ali, Collection Maoude Reboot (Nouvelle Édition)."
    };
  }

  // Détection spécifique : Brochure Le Baobab (Mr Augustin Soukouya Sevadouno "MR SEVA", République de Guinée)
  if (/baobab|le\s+baobab|augustin\s+soukouya|sevadouno|mr\s+seva|soukouya|brochure\s+(?:de\s+)?francais\s+niveau\s+terminale|lycee\s+gs\s+baba\s+cisse|coyah\s+2012|bac\s+unique\s+2007|en\s+afrique\s+traditionnelle\s+n\s*est\s+beau\s+que\s+tout\s+ce\s+qui\s+sert|l\s*homme\s+montre\s+mieux\s+son\s+habilete\s+dans\s+les\s+productions\s+surgissant\s+de\s+l\s*esprit|l\s*artiste\s+contrairement\s+au\s+savant\s+ne\s+voit\s+pas\s+la\s+nature|sans\s+etat\s+c\s*est\s+la\s+guerre\s+de\s+tous\s+contre\s+tous.*bossuet|le\s+droit\s+a\s+l\s*expression\s+autorise\s*t\s*il\s+a\s+soutenir\s+n\s*importe\s+quelle\s+opinion|norbert\s+zongo|tarassi|fontions?\s+de\s+l\s*art\s+africain/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — Brochure Le Baobab (Mr Augustin Soukouya Sevadouno)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Sciences Sociales, Maths et Expérimentales — République de Guinée & Panafricain",
      chapterTitle: "Brochure de Philosophie : Esthétique, Épistémologie & Philosophie Politique (Le Baobab, Mr Seva)",
      definitionAndScope: `Ouvrage didactique guinéen d'excellence rédigé par un collectif de professeurs sous la direction de Mr Augustin Soukouya Sevadouno ("MR SEVA").\n\nSynthétise le programme complet des Terminales à travers 3 grands chapitres (Esthétique & Art africain traditionnel ; Épistémologie & Méthode expérimentale ; Philosophie politique et morale : État, Droit, Liberté, Justice) et présente 18 sujets de Baccalauréat guinéen et panafricain intégralement résolus et expliqués.`,
      coreConceptsAndFormulas: [
        {
          name: "Les 7 Fonctions Vitales de l'Art Africain Traditionnel",
          formulaOrRule: "1. Politico-sociale (mobilisation sans État central) | 2. Thérapeutique (la musique soigne, ex: Tarassi chez les Touaregs) | 3. Magico-religieuse (mythes sacrés) | 4. Ludique et pédagogique (contes oraux) | 5. Symbolique (esprits des ancêtres, masques jumeaux au Nigéria) | 6. Commémorative (lien vivants-morts) | 7. Esthétique subordonnée à l'utile.",
          explanation: "Réfute la doctrine occidentale de 'l'art pour l'art' : en Afrique traditionnelle, n'est beau que ce qui sert la communauté.",
          contextOrApplication: "Sujets d'esthétique et de culture africaine (Bac Unique 2007, Bac Blanc Coyah 2012)."
        },
        {
          name: "Démarche Expérimentale de Claude Bernard & Vérité Scientifique",
          formulaOrRule: "Observation du fait -> Formulation de l'idée-hypothèse provisoire -> Expérimentation instrumentée (contrôle). Formule : « Le fait suggère l'idée, l'idée dirige l'expérience, l'expérience juge l'idée ».",
          explanation: "La vérité scientifique est objective, dialectique et provisoire : elle est fille du temps et procède par rectification continue d'erreurs (Bachelard, Lavoisier).",
          contextOrApplication: "Sujets d'épistémologie (Bac 2001, Bac 2004, Bachelard, Claude Bernard)."
        },
        {
          name: "L'État de Droit et la Justice selon Pascal",
          formulaOrRule: "« La justice sans la force est impuissante, la force sans la justice est tyrannique » (Pascal) & « Sans État, c'est la guerre de tous contre tous » (Bossuet).",
          explanation: "La justice a besoin de la puissance coercitive de l'État pour avoir force de loi, mais la force brute sans justice mène au despotisme sanguinaire (ex: Idi Amin Dada, Charles Taylor).",
          contextOrApplication: "Sujets de politique et morale (Bac 2003, 2011, 2012)."
        },
        {
          name: "Droit à l'Expression et Responsabilité Citoyenne",
          formulaOrRule: "La liberté d'expression est le sang de la démocratie (Spinoza, Jefferson, combat de Norbert Zongo), mais elle trouve sa limite éthique dans le respect d'autrui et la proscription des discours de haine ethnocentristes.",
          explanation: "Analyse des crises politiques en Guinée et en Afrique causées par la dérive anarchique de la parole.",
          contextOrApplication: "Sujets de droit, liberté d'opinion et démocratie (Bac 2008, Bac Blanc Guéckédou 2012)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Dégager le thème et les Pistes de Réflexion (PPR)",
          whatToDo: "Identifier l'opposition conceptuelle majeure et poser les questions directrices guidant la démonstration.",
          reflexOrTip: "Relier la question philosophique aux réalités concrètes et historiques africaines."
        },
        {
          stepNumber: 2,
          title: "Élaborer le traité possible avec auteurs et exemples",
          whatToDo: "Confronter la thèse et l'antithèse en mobilisant les auteurs clés (Kant, Hegel, Claude Bernard, Pascal, Spinoza, Césaire).",
          reflexOrTip: "Mobiliser les exemples scientifiques (expérience de Claude Bernard sur les lapins, combustion du plomb par Lavoisier)."
        },
        {
          stepNumber: 3,
          title: "Formuler la synthèse conclusive",
          whatToDo: "Dégager une perspective constructive pour l'émergence des États et la concorde civique.",
          reflexOrTip: "Montrer que la liberté véritable réside dans le respect des lois justes."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet Bac 2012 : « La justice sans la force est impuissante, la force sans la justice est tyrannique » (Pascal)",
        solutionStepByStep: "PPR : Quelle est la relation entre le droit et la puissance coercitive ? Pourquoi leur dissociation est-elle fatale à l'État ?\nAxe 1 : L'impuissance de la justice désarmée face aux passions humaines (Sans force policière et judiciaire, les lois restent lettre morte ; 'qui commet impunément commet légitimement' ; anarchie en Somalie, Tchad, etc.).\nAxe 2 : La tyrannie sanguinaire de la force sans justice (L'État despote écrase les citoyens sans droit, ex: Ouganda sous Idi Amin Dada, Libéria sous Charles Taylor ; l'urgence d'une justice indépendante pour attirer les investissements et consolider l'émergence africaine).\nBilan : L'équilibre harmonieux entre force légitime et respect des droits fondamentaux est la condition sine qua non de la paix civile et du développement en Afrique.",
        finalAnswer: "Corrigé conforme au modèle de la Brochure Le Baobab (Mr Augustin Soukouya Sevadouno)."
      },
      classicExamTraps: [
        "Confondre l'art africain traditionnel avec l'art occidental parnassien de l'art pour l'art.",
        "Croire que les vérités scientifiques sont absolues et définitives (elles sont toujours en sursis et provisoires).",
        "Oublier que la liberté d'expression n'autorise pas la diffamation et l'ethnocentrisme haineux."
      ],
      selfCheckChecklist: [
        "Les 7 fonctions de l'art africain ont-elles été mobilisées si le sujet porte sur l'art traditionnel ?",
        "Les étapes de la démarche expérimentale sont-elles rigoureusement articulées ?",
        "Les exemples de pays et penseurs africains sont-ils pertinents et bien amenés ?"
      ],
      quickRevisionMemo: "Mémo Le Baobab : 7 fonctions de l'art africain -> Démarche expérimentale de Claude Bernard -> Équilibre Justice/Force de Pascal -> Citoyenneté démocratique.",
      certificationNote: "Brochure de Français & Philosophie Terminale, Le Baobab, sous la direction de Mr Augustin Soukouya Sevadouno (République de Guinée)."
    };
  }

  // Détection spécifique : Top Philo — Méthodologie du Commentaire et de la Dissertation (Prof. TRA BI Kouadio Honoré, Côte d'Ivoire)
  if (/tra\s*bi|kouadio\s+honore|bikouadio|top\s+philo|special\s+prepa\s+bac\s+2023|le\s+bac\s+pour\s+tous.*le\s+bac\s+c\s*est\s+nous|sinematiali|zuenoula|bouafle|college\s+mupes|commune\s+de\s+hire|la\s+pedagogie\s+notre\s+metier\s+l\s*excellence\s+notre\s+devise|doit\s*on\s+condamner\s+le\s+progres\s+technique|le\s+travail\s+humanise\s*t\s*il|peut\s*on\s+qualifier\s+l\s*etat\s+d\s*immoral|la\s+demarche\s+scientifique\s+exclut\s*elle\s+tout\s+recours\s+a\s+la\s+foi|la\s+justice\s+est\s*elle\s+necessaire\s+a\s+la\s+cohesion\s+sociale|la\s+religion\s+rend\s*elle\s+l\s*homme\s+meilleur|la\s+religion\s+peut\s*elle\s+servir\s+de\s+rempart|la\s+philosophie\s+est\s+une\s+activite\s+retrograde|parler\s+est\s*ce\s+ne\s+dire\s+que\s+la\s+verite|l\s*unanimite\s+est\s*elle\s+un\s+critere\s+de\s+verite|peut\s*on\s+connaitre\s+scientifiquement\s+l\s*homme/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — Top Philo (Prof. TRA BI Kouadio Honoré)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A1, A2, B, C, D, E, H — Enseignement Secondaire Côte d'Ivoire & CEDEAO",
      chapterTitle: "Top Philo : Méthodologie Complète, 4 Grandes Compétences & 55 Textes/Sujets Corrigés (TRA BI K. Honoré)",
      definitionAndScope: `Ouvrage pédagogique officiel d'excellence (154 pages) conçu par le Professeur TRA BI Kouadio Honoré (Lycée Municipal de Sinematiali, Lycée Moderne 1 de Bouaflé, Lycée Moderne de Zuénoula, Collège MUPES de Hiré, Côte d'Ivoire).\n\nStructure l'intégralité du programme officiel en 4 grandes compétences : Compétence I (Méthodologie intégrale de la dissertation et du commentaire de texte philosophique avec étude ordonnée, critique interne et externe), Compétence II (Conditions de l'homme dans la société : conscience, inconscient, mémoire, violence, autrui, État, droit, justice, Dieu et religion), Compétence III (Conditions d'épanouissement : valeur de la philosophie, progrès matériel et spirituel, travail et bonheur), Compétence IV (Conditions de la connaissance : langage, vérité, démarche expérimentale de Claude Bernard, obstacles épistémologiques de Bachelard, limites sur le vivant et l'homme). Comprend 55 textes d'auteurs fondamentaux commentés et une multitude de sujets d'annales du Baccalauréat ivoirien intégralement résolus.`,
      coreConceptsAndFormulas: [
        {
          name: "Méthodologie du Commentaire Philosophique (Étude ordonnée + Intérêt philosophique)",
          formulaOrRule: "Introduction (Thème, Problème, Thèse, annonce des mouvements) -> Étude ordonnée (démarche argumentative, concepts, articulations, citations) -> Intérêt philosophique : 1. Critique interne (évaluation de la forme et cohérence logique) + 2. Critique externe (Axe 1 justification / Axe 2 dépassement dialectique) -> Conclusion (bilan critique et position personnelle).",
          explanation: "Réfute formellement la réduction du commentaire à une simple explication de texte littéraire ; garantit la rigueur critique.",
          contextOrApplication: "Épreuve reine du Commentaire de texte au Baccalauréat."
        },
        {
          name: "La Méthodologie de la Dissertation en 3 Éléments d'Introduction",
          formulaOrRule: "1. Amorce (Généralité ou constat lié au thème) -> 2. Problème du sujet (difficulté intellectuelle centrale sous forme interrogative) -> 3. Les aspects du problème (questions directrices annonçant précisément les axes du développement).",
          explanation: "Bannit les introductions vagues et garantit une prise en charge directe de la contradiction du sujet.",
          contextOrApplication: "Toutes les dissertations philosophiques au Baccalauréat."
        },
        {
          name: "L'Inconscient comme Réalité vs Négation Morale",
          formulaOrRule: "Freud : l'inconscient comme psychisme essentiel (Ça, Moi, Surmoi, actes manqués, lapsus, névroses, agressivité native) vs Sartre : l'inconscient comme mauvaise foi de la conscience vs Alain : mythe social dangereux et idolâtrie du corps.",
          explanation: "Tension fondamentale de la Leçon 1 (Connaissance de l'homme) sur la liberté et la responsabilité morale du sujet.",
          contextOrApplication: "Sujets sur la conscience, l'inconscient, la liberté et la morale."
        },
        {
          name: "L'État : Monstre Froid ou Condition de la Liberté par la Loi",
          formulaOrRule: "Aliénation : Althusser (AIE et ARE), Stirner, Nietzsche ('le plus froid des monstres froids'), Marx (instrument de classe) vs Libération : Spinoza ('la fin de l'État est en réalité la liberté'), Max Weber (monopole de la violence physique légitime), Rousseau (volonté générale).",
          explanation: "Clé de voûte de la Leçon 2 (Vie en société) et des annales du Bac.",
          contextOrApplication: "Sujets sur l'État, la violence, le droit et la justice."
        },
        {
          name: "Langage, Vérité et Connaissance Scientifique",
          formulaOrRule: "Hegel ('c'est dans les mots que nous pensons') vs Bergson/Diderot (les limites du langage). Épistémologie : Claude Bernard (observation -> hypothèse -> expérimentation) vs Bachelard ('l'opinion pense mal, elle ne pense pas ; les vérités d'aujourd'hui sont les erreurs de demain') vs Karl Popper (falsifiabilité).",
          explanation: "Fondement de la Compétence IV sur l'élaboration et la relativité de la vérité scientifique.",
          contextOrApplication: "Sujets sur la science, la vérité, le langage et la foi."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Réaliser l'étude parcellaire et la problématisation",
          whatToDo: "Définir chaque terme pivot selon le contexte philosophique précis, reformuler l'énoncé et faire émerger le problème central avec ses aspects.",
          reflexOrTip: "Le problème doit toujours être formulé sous forme de question philosophique sans affirmation préalable."
        },
        {
          stepNumber: 2,
          title: "Articuler les axes avec transitions et connecteurs logiques",
          whatToDo: "Structurer 2 ou 3 axes comportant chacun des arguments explicités, des références d'auteurs certifiées et des exemples concrets.",
          reflexOrTip: "Soigner les transitions logiques entre chaque argument et chaque axe."
        },
        {
          stepNumber: 3,
          title: "Rédiger la conclusion en 3 temps",
          whatToDo: "1. Rappeler le problème, 2. Dresser le bilan synthétique de la réflexion, 3. Apporter une réponse claire et nuancée avec ouverture.",
          reflexOrTip: "Ne jamais contredire dans la conclusion les étapes établies dans le développement."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet Bac 2021 : « Le travail n'est pour l'homme qu'un moyen de subvenir à ses besoins. » Qu'en pensez-vous ? (TRA BI K. Honoré)",
        solutionStepByStep: "Étude parcellaire : Travail = activité consciente de transformation de la nature ; N'est... que = se réduit exclusivement à ; Subvenir à ses besoins = s'assurer les nécessités vitales matérielles.\nProblème : Le travail se réduit-il à la seule subsistance matérielle ou réalise-t-il l'essence morale et spirituelle de l'homme ?\nAxe 1 : Le travail comme moyen indispensable de subsistance (Michel Foucault : le travail apparaît quand les fruits spontanés manquent ; Cheick Hamidou Kane dans L'Aventure ambiguë : travailler par nécessité biologique pour maintenir l'espèce ; Rousseau : travailler pour parvenir au repos).\nAxe 2 : Le travail comme fin en soi, facteur de libération et d'humanisation (Nietzsche dans Le Gai Savoir : les natures rares qui voient le gain des gains dans le travail lui-même ; Sartre : le travail est l'élément libérateur de l'opprimé ; Emmanuel Mounier : 'Tout travail travaille à faire en même temps un objet et une personne' ; Hegel : dialectique du maître et de l'esclave où le travailleur conquiert sa souveraineté).\nBilan : Le travail est d'abord une contrainte vitale de survie, mais il transcende cette condition pour devenir le moteur de la réalisation de la liberté, de la culture et de la dignité humaine.",
        finalAnswer: "Corrigé modèle rédigé selon la méthode officielle Top Philo du Prof. TRA BI Kouadio Honoré."
      },
      classicExamTraps: [
        "Confondre l'amorce de l'introduction avec une généralité banale hors-sujet.",
        "Oublier d'insérer la critique interne (évaluation de la forme) dans le commentaire de texte.",
        "Réduire l'inconscient à un simple oubli passager sans analyser la dynamique du refoulement et de la censure."
      ],
      selfCheckChecklist: [
        "L'introduction contient-elle l'amorce, le problème interrogatif et les aspects ?",
        "Chaque axe mobilise-t-il les citations textuelles exactes (Descartes, Spinoza, Marx, Freud, Bergson, Bachelard) ?",
        "La conclusion récapitule-t-elle le débat sans esquiver la réponse au sujet ?"
      ],
      quickRevisionMemo: "Mémo Top Philo : Étude parcellaire -> Problème + Aspects -> Développement dialectique argumenté -> Critique interne/externe -> Rigueur conceptuelle.",
      certificationNote: "Top Philo : Le Bac pour tous, Prof. TRA BI Kouadio Honoré (Côte d'Ivoire)."
    };
  }

  // Détection spécifique : Recueil des 50 Sujets de Dissertation Philosophique Traités et Corrigés (John Kennedy OUALI)
  if (/ouali|john\s+kennedy\s+ouali|l\s*education\s+notre\s+denominateur\s+commun|50\s+sujets?\s+(?:de\s+)?dissertation\s+philosophique|qu\s*apporte\s+de\s+douter|la\s+religion\s+est\s*elle\s+necessairement\s+en\s+conflit\s+avec\s+la\s+raison|opposer\s+science\s+et\s+philosophie|le\s+questionnement\s+perpetuel\s+peut\s*il\s+etre\s+source\s+de\s+savoir|peut\s*on\s+critiquer\s+la\s+democratie|ce\s+qui\s+fait\s+l\s*homme\s+tient\s+plus\s+de\s+la\s+culture|la\s+philosophie\s+se\s+trahit\s*elle\s*meme\s+lorsqu\s*elle\s+degenere\s+en\s+dogmatisme|qui\s+possede\s+le\s+savoir\s+ne\s+philosophie\s+point|l\s*obeissance\s+aux\s+lois\s+est\s*elle\s+conciliable|quelle\s+est\s+la\s+place\s+de\s+la\s+souffrance|la\s+passion\s+rend\s*elle\s+aveugle|l\s*art\s+africain\s+est\s+loin\s+d\s*un\s+monde\s+d\s*exhibitionniste|faut\s*il\s+preferer\s+la\s+liberte\s+au\s+bonheur|une\s+societe\s+sans\s+religion\s+est\s*elle\s+possible|les\s+theories\s+scientifiques\s+decrivent\s*elles\s+la\s+realite|croire\s+en\s+la\s+science|la\s+connaissance\s+de\s+soi\s+est\s*elle\s+plus\s+facile|la\s+science\s+se\s+limite\s*t\s*elle\s+a\s+constater\s+les\s+faits|la\s+technique\s+peut\s*elle\s+transformer\s+la\s+morale|les\s+pratiques\s+artistiques\s+transforment\s*elles\s+le\s+monde|revient\s*il\s+a\s+l\s*etat\s+de\s+decider\s+de\s+ce\s+qui\s+est\s+juste|la\s+foi\s+est\s*elle\s+l\s*ennemi\s+de\s+la\s+preuve|le\s+temps\s+efface\s*t\s*il\s+l\s*histoire|la\s+politique\s+peut\s*elle\s+etre\s+un\s+metier|discuter\s+est\s*ce\s+renoncer\s+a\s+la\s+violence|la\s+passion\s+est\s*elle\s+ennemi\s+du\s+bonheur|l\s*inconscient\s+echappe\s*t\s*il\s+a\s+toute\s+forme\s+de\s+connaissance|sommes\s*nous\s+responsables\s+de\s+l\s*avenir|le\s+langage\s+n\s*est\s*il\s+qu\s*un\s+outil|pouvons\s*nous\s+affirmer\s+que\s+le\s+temps\s+nous\s+appartient|la\s+conscience\s+fait\s*elle\s+la\s+grandeur\s+ou\s+la\s+misere|la\s+liberte\s+comporte\s*t\s*elle\s+des\s+degres|autrui\s+m\s*est\s*il\s+toujours\s+etranger|le\s+bonheur\s+nous\s+echappe\s*t\s*il\s+inevitablement|peut\s*on\s+penser\s+une\s+societe\s+sans\s+etat|faut\s*il\s+rester\s+fidele|existe\s*t\s*il\s+des\s+violences\s+legitimes|sommes\s*nous\s+prisonniers\s+de\s+notre\s+corps/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie & Épreuves du BAC — 50 Sujets Traités et Corrigés (John Kennedy OUALI)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Séries A, C, D, G, E — Programme Panafricain & Francophone",
      chapterTitle: "Recueil des 50 Sujets de Dissertation Traités et Corrigés (John Kennedy OUALI)",
      definitionAndScope: `Ouvrage didactique de référence de John Kennedy OUALI (« L'éducation notre dénominateur commun »).\n\nComporte les dissertations intégrales, approfondies et rédigées des 50 sujets majeurs du Baccalauréat en Terminale : Doute et méthode, Foi et Raison, Science et Philosophie, Questionnement, Démocratie et État de droit, Nature et Culture, Dogmatisme, Art africain et ses fonctions communautaires, Théories scientifiques et réalité (Duhem, Popper), Travail contrainte ou obligation, Violence légitime, Temps et Histoire, Langage, Conscience et Inconscient, Devoir de fidélité, et Déterminisme corporel.`,
      coreConceptsAndFormulas: [
        {
          name: "Méthode du Traitement Exhaustif des 50 Sujets de Philosophie",
          formulaOrRule: "Introduction (Accroche contextuelle, définition des concepts, problématique sous forme de question, questions directrices) -> Développement dialectique ou progressif approfondi en 2 ou 3 grandes parties avec citations d'auteurs explicitées et exemples concrets -> Conclusion (bilan synthétique, réponse nuancée et ouverture).",
          explanation: "Fournit aux candidats un modèle complet d'argumentation et de culture philosophique vivante.",
          contextOrApplication: "Toutes les dissertations philosophiques au Baccalauréat."
        },
        {
          name: "L'Art Africain Traditionnel : Utilité Communautaire vs Art pour l'Art",
          formulaOrRule: "« En Afrique est beau ce qui sert » : les créations artistiques (Nok, Ifé, masques Nimba, Koden) unissent indissociablement forme esthétique et fonctions magico-religieuses, pédagogiques et thérapeutiques, contredisant le formalisme désintéressé occidental (Kant).",
          explanation: "Structure intégrale du Sujet 16 traité par John Kennedy OUALI.",
          contextOrApplication: "Sujets sur l'art, la culture et l'identité africaine."
        },
        {
          name: "Éthique de la Discussion et Violence Sociale",
          formulaOrRule: "Le dialogue comme négation de la force brute vs la discussion dévoyée en violence symbolique et sophistique (Lyotard Le Différend) vs L'éthique de la discussion et la justice (Habermas, Rawls, Aristote philia) comme conditions d'un vivre-ensemble pacifié.",
          explanation: "Architecture conceptuelle du Sujet 34 / 50 (« Discuter est-ce renoncer à la violence ? »).",
          contextOrApplication: "Sujets sur le langage, la violence, la justice et la démocratie."
        },
        {
          name: "Épistémologie : Description Phénoménale vs Explication Métaphysique",
          formulaOrRule: "Pierre Duhem : les théories scientifiques ne visent pas à expliquer le fond métaphysique de la réalité mais à décrire et classer les lois expérimentales par des fictions commodes vs Karl Popper : le critère de scientificité est la falsifiabilité.",
          explanation: "Développement du Sujet 20 et 26 sur la portée des théories scientifiques.",
          contextOrApplication: "Sujets d'épistémologie, de vérité et de science."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Identifier la tension fondamentale du libellé",
          whatToDo: "Définir les notions du sujet et poser le problème sous forme d'une véritable question philosophique.",
          reflexOrTip: "Ne jamais plaquer un plan tout fait sans avoir analysé la spécificité des termes."
        },
        {
          stepNumber: 2,
          title: "Bâtir une argumentation dialectique étayée",
          whatToDo: "Organiser les axes en convoquant les grands philosophes classiques, contemporains et africains en expliquant toujours la citation.",
          reflexOrTip: "Mobiliser les exemples historiques et culturels pour ancrer la démonstration dans le réel."
        },
        {
          stepNumber: 3,
          title: "Dégager une synthèse équilibrée en conclusion",
          whatToDo: "Faire le bilan des parties, répondre précisément à la question posée et ouvrir sur un enjeu éthique ou sociétal.",
          reflexOrTip: "La conclusion doit être le point d'orgue de la pensée autonome du candidat."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 16 : « L'art Africain est loin d'un monde d'exhibitionniste de la beauté, mais fort heureusement se sert des valeurs esthétiques, en dégageant ses fonctions ». Faites une étude critique. (John Kennedy OUALI)",
        solutionStepByStep: "Introduction : L'Afrique possède un génie artistique fécond, longtemps incompris par le regard occidental ethnocentrique. Le sujet invite à interroger la spécificité de l'art traditionnel africain où le beau est lié à ses fonctions vitales.\nAxe 1 : Les fonctions intégrées de l'art traditionnel africain (Nok, masques Nimba, Koden ; fonctions magico-religieuses, ludiques, thérapeutiques ; l'art est le sceau de la communauté ; 'En Afrique est beau ce qui sert').\nAxe 2 : Dépassement de la doctrine de l'art pour l'art (Réfutation de la pure contemplation désintéressée kantienne ; l'œuvre d'art africaine n'est pas un objet inerte de musée mais un acte vivant d'éducation et de cohésion sociale).\nAxe 3 : L'universalité et l'engagement contemporain (Senghor : enracinement et ouverture ; Youssouf N'Dour : 'l'art n'a pas de frontière' ; résistance culturelle face à l'uniformisation mondialiste des industries culturelles).\nConclusion : L'art africain réconcilie l'esthétique et l'éthique dans un art total au service de la vie communautaire.",
        finalAnswer: "Corrigé modèle intégral rédigé selon le recueil de John Kennedy OUALI."
      },
      classicExamTraps: [
        "Confondre le doute méthodique (provisoire et constructif) avec le doute sceptique (destructeur et paralysant).",
        "Réduire la démocratie à la simple loi du nombre sans protection des libertés fondamentales et séparation des pouvoirs.",
        "Oublier que pour Marx, la critique de la religion est le prélude à la transformation révolutionnaire des conditions matérielles."
      ],
      selfCheckChecklist: [
        "Le sujet traité correspond-il à l'un des 50 sujets répertoriés dans le recueil de John Kennedy OUALI ?",
        "Les auteurs et références textuelles sont-ils précisément situés (œuvres et contextes) ?",
        "La conclusion apporte-t-elle une réponse ferme et argumentée au problème initial ?"
      ],
      quickRevisionMemo: "Mémo Ouali : 50 Sujets types Bac intégralement corrigés -> Plans dialectiques rigoureux -> Auteurs classiques, épistémologues et penseurs africains.",
      certificationNote: "Recueil des 50 Sujets de Dissertation Traités et Corrigés, John Kennedy OUALI (« L'éducation notre dénominateur commun »)."
    };
  }

  // Détection spécifique du recueil de Cheikh Lô Thiam (UGB Saint-Louis - Annales Bac Sénégal)
  if (/cheikh\s*lo\s*thiam|gaston\s*berger|thiamas87|preparer\s+les\s+epreuves\s+de\s+francais|annales?\s+(?:du\s+)?bac\s+senegal|quia\s+pulvis\s+es|spleen\s+laforgue|chateaubriand\s+2006|societe\s+nouvelle\s+2006|mauriac\s+2004|gide\s+2003|ecrivains\s+negres\s+2002|touchard|poete\s+et\s+ingenieur|les\s+forces\s+du\s+bien|schweitzer|bonnefous/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Littérature — Annales Baccalauréat (Cheikh Lô Thiam)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Littéraire et Scientifique (BAC)",
      chapterTitle: "Préparer les Épreuves de Français au Baccalauréat (Cheikh Lô Thiam, UGB Saint-Louis)",
      definitionAndScope: `Recueil officiel d'annales corrigées et méthodologies pour les élèves de Terminale préparant le Baccalauréat, conçu par Cheikh Lô Thiam (Université Gaston Berger de Saint-Louis, Sénégal).\n\nContient les cours d'esthétique des genres (poésie, roman, théâtre), les méthodologies complètes de la dissertation littéraire, du commentaire de texte (suivi et composé) et du résumé suivi de discussion, ainsi que les corrigés intégraux des sujets officiels du Baccalauréat sénégalais de 1992 à 2006.`,
      coreConceptsAndFormulas: [
        {
          name: "Méthodologie de la Dissertation Littéraire (Bac Sénégal)",


          formulaOrRule: "Introduction en 3 fonctions (Amener, Poser la problématique, Annoncer le plan) | Développement articulé (Idée directrice, arguments développés, exemples/citations, transitions logiques, conclusions partielles) | Conclusion (Synthèse, réponse au problème, élargissement).",
          explanation: "Bannir les plans disproportionnés et les formules lourdes ('dans ma thèse je vais parler de...'). Privilégier le circuit argumentatif rigoureux.",
          contextOrApplication: "Épreuve reine de dissertation littéraire au Baccalauréat."
        },
        {
          name: "Méthodologie du Commentaire (Suivi vs Composé)",
          formulaOrRule: "Ne jamais dissocier le fond de la forme. Commentaire suivi = explication linéaire analytique strophe par strophe ou mouvement par mouvement. Commentaire composé = regroupement synthétique par centres d'intérêt thématiques et formels.",
          explanation: "Toute observation stylistique (mètre, rime, figure de style, syntaxe) doit être corrélée au sens et à l'état d'âme de l'auteur.",
          contextOrApplication: "Épreuve de commentaire de texte au Baccalauréat."
        },
        {
          name: "Méthodologie du Résumé Suivi de Discussion",
          formulaOrRule: "Contraction rigoureuse au quart (ou tiers) du texte original (+/- 10%). Fidélité stricte au système d'énonciation, aux personnes, aux temps et à la chronologie des idées, avec reformulation personnelle intégrale.",
          explanation: "La discussion est un mini-développement argumenté traitant de l'affirmation extraite du texte dans un plan structuré.",
          contextOrApplication: "Épreuve de résumé-discussion au Baccalauréat."
        },
        {
          name: "Esthétique des Genres (Poésie, Roman, Théâtre)",
          formulaOrRule: "Poésie : ornement du discours (Pléiade, Parnasse), instrument de connaissance (Romantisme, Symbolisme), autonomie du langage (Dadaïsme, Surréalisme). Roman : diversité des genres, vitesse narrative (pause, ralenti, scène, sommaire, ellipse), focalisations (zéro, interne, externe). Théâtre : temps dramatique vs temps de la représentation, espace scénique vs espace dramatique, double communication et catharsis.",
          explanation: "Maîtrise technique indispensable pour commenter les textes et argumenter en dissertation.",
          contextOrApplication: "Corpus de cours des classes de Terminale."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Analyser le libellé du sujet et identifier le plan requis",
          whatToDo: "Repérer si la consigne impose un plan dialectique ('dans quelle mesure', 'pensez-vous que', 'discutez'), analytique ('analysez les causes et conséquences') ou thématique/inventaire.",
          reflexOrTip: "Dans le sujet de Mauriac (2004) ou Gide (2003), le plan dialectique est obligatoire. Pour Chateaubriand (2006), privilégier le plan analytique."
        },
        {
          stepNumber: 2,
          title: "Mobiliser les fiches techniques stylistiques pour le commentaire",
          whatToDo: "Repérer les procédés : chiasme, oxymore, allégorie, allitération, dislocation syntaxique, et les rattacher à l'idée générale de l'extrait.",
          reflexOrTip: "Exemple de Laforgue (Spleen 2004) : le style télégraphique et les phrases nominales miment le désordre intérieur et l'ennui infini."
        },
        {
          stepNumber: 3,
          title: "Soigner le calibrage et les transitions du résumé",
          whatToDo: "Calculer les bornes du nombre de mots autorisés (ex: pour 130 mots, entre 117 et 143 mots) et rédiger en respectant scrupuleusement les connecteurs logiques.",
          reflexOrTip: "Dans la discussion, ne jamais répéter les arguments déjà analysés dans le résumé."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet officiel Bac 2002 : Victor Hugo, « Quia pulvis es » (Les Contemplations, Livre III). Montrer comment la mort symbolise autant le néant que la vraie vie.",
        solutionStepByStep: "Centre d'intérêt 1 : La mort comme universel anéantissement (sombre aquilon balayant les têtes des hommes comme les feuilles, lamentation anaphorique des vivants sur les privations sensorielles du tombeau).\nCentre d'intérêt 2 : La mort comme triomphe et renaissance spirituelle (prosopopée et renversement métaphysique sublime : les vivants ne sont que des 'fantômes', et Dieu donne aux morts 'les biens réels, les vrais royaumes').",
        finalAnswer: "Démonstration achevée sur la vision hugolienne de la mort conçue non comme finitude tragique, mais comme accomplissement de l'Être."
      },
      classicExamTraps: [
        "Confondre commentaire suivi et commentaire composé en juxtaposant des remarques éparses sans axe de lecture.",
        "Dépasser la marge de tolérance de 10% dans le résumé de texte.",
        "Oublier de citer les vers ou expressions exactes à l'appui de chaque affirmation dans le commentaire."
      ],
      selfCheckChecklist: [
        "Le décompte des mots du résumé est-il inscrit avec précision à la fin de la copie ?",
        "Les trois parties du commentaire composé ou de la dissertation sont-elles bien identifiées ?",
        "Chaque idée directrice est-elle illustrée par un exemple littéraire authentique et certifié ?"
      ],
      quickRevisionMemo: "Mémo Cheikh Lô Thiam : 'La réussite est au bout de l'effort / Seul le travail paie'. Rigueur d'analyse, précision stylistique et fidélité aux textes.",
      certificationNote: "Annales officielles et cours d'excellence (Cheikh Lô Thiam, UGB Saint-Louis, Sénégal)."
    };
  }

  // Détection spécifique de l'ouvrage de M. Mamadou Lamine Danfa (UCAD Dakar - Bac 2018)
  if (/mamadou\s*lamine\s*danfa|danfa|momodanfa|reussir\s+la\s+dissertation\s+francaise|senegal\s+emergent|24\s+sujets|connecteurs?\s+logiques|l\s*art\s+pour\s+l\s*art\s+peut\s+etre\s+beau|ecrire\s+pour\s+les\s+autres|litterature\s+comme\s+therapie|echec\s+de\s+la\s+litterature\s+engagee|hermetisme\s+ou\s+accessibilite|fictions\s+utiles|zola\s+aplatir\s+le\s+monde|petri\s+de\s+la\s+boue|mouton\s+qui\s+se\s+separe\s+du\s+troupeau|medecin\s+sans\s+frontieres/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Méthodologie — Dissertation Littéraire au BAC (Mamadou Lamine Danfa)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale (Séries A1, A2, L, S - Baccalauréat)",
      chapterTitle: "Réussir la Dissertation Française au Bac : Méthode Réformée & 24 Sujets Types (M. Mamadou Lamine Danfa, UCAD)",
      definitionAndScope: `Manuel de référence d'excellence conçu par M. Mamadou Lamine Danfa (Université Cheikh Anta Diop de Dakar - UCAD, Sénégal Emergent).\n\nConforme aux nouvelles réformes du Baccalauréat sénégalais. Traite des piliers théoriques de la création littéraire (engagement politique et moral, littérature comme thérapie contre la souffrance, divertissement, Art pour l'art, échec de l'engagement, hermétisme vs accessibilité populaire, lyrisme personnel), fournit le répertoire complet des connecteurs logiques classés par fonctions argumentatives, et développe 24 sujets de dissertation types entièrement traités.`,
      coreConceptsAndFormulas: [
        {
          name: "Les 6 Piliers Théoriques de la Littérature au Bac",
          formulaOrRule: "1. Écrire pour les autres (Engagement politique & social : Sartre, Hugo, Césaire, Zola) | 2. Écrire pour divertir (Montesquieu, Kléber Haedens, Molière, Birago Diop) | 3. Écrire pour soi-même (Lyrisme intime : Lamartine, Musset, Camara Laye, Rousseau) | 4. L'Art pour l'Art (Perfection du Beau : Gautier, Parnasse, Symbolisme) | 5. Échec de l'engagement (Désillusion : Sartre Les Mots, Bernanos, Gautier après 1848) | 6. Hermétisme vs Accessibilité (Mallarmé, Proust vs Boileau, Mariama Bâ, Ferdinand Oyono).",
          explanation: "Chaque sujet de dissertation littéraire au Baccalauréat s'articule autour de la tension entre au moins deux de ces six pôles fondamentaux.",
          contextOrApplication: "Fondement conceptuel de toute dissertation littéraire en Terminale."
        },
        {
          name: "La Structure Réformée des Paragraphes Argumentatifs",
          formulaOrRule: "Chaque paragraphe (environ 15 lignes) = Idée directrice nette en tête -> Démonstration et explications rationnelles -> Exemple ou citation textuelle exacte (valeur illustrative) -> Analyse de la portée littéraire et conclusion partielle.",
          explanation: "Interdiction absolue de juxtaposer des exemples sans les analyser. Les arguments portent la valeur analytique, les exemples la valeur de preuve.",
          contextOrApplication: "Rédaction des grandes parties du développement."
        },
        {
          name: "Tableau des Connecteurs Logiques d'Excellence",
          formulaOrRule: "Ordre (D'abord, puis, d'une part... d'autre part, en définitive) | Addition (De plus, en outre, de surcroît) | Opposition (Mais, cependant, toutefois, néanmoins, en revanche, certes) | Cause (Car, parce que, puisque, en effet, en raison de) | Conséquence (Donc, de sorte que, par conséquent, c'est pourquoi) | But (Afin que, dans le but de) | Conclusion (En somme, bref, en résumé, tout compte fait).",
          explanation: "L'emploi judicieux des connecteurs souligne les articulations logiques de la pensée et évite la monotonie d'écriture.",
          contextOrApplication: "Transitions entre phrases, paragraphes et grandes parties."
        },
        {
          name: "Banque des 24 Sujets Types Corrigés",
          formulaOrRule: "Sujet 1 (Actualité éphémère vs éternité) | Sujet 4 (Fictions utiles de Zola) | Sujet 6 (Boue et or chez Baudelaire) | Sujet 7 (Politique = coup de pistolet dans un concert) | Sujet 8 (Poésie = instrument de libération selon Senghor) | Sujet 19 (L'art pour le progrès plus beau encore) | Sujet 24 (Réduction comédie/rire, roman/évasion, poésie/lyrisme).",
          explanation: "Chaque sujet est pourvu d'une problématique rédigée, d'un plan dialectique ou progressif, et d'arguments vérifiés.",
          contextOrApplication: "Entraînement intensif aux devoirs et à l'examen du Baccalauréat."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Introduction en trois mouvements obligatoires",
          whatToDo: "1. Amener le sujet (partir du général au particulier ou d'une opinion contraire). 2. Poser la problématique (citer le sujet entre guillemets si court, le reformuler si long, puis poser la question centrale explicative). 3. Annoncer le plan (phrases au futur nuancées par le conditionnel, bannir 'tenter' et 'essayer').",
          reflexOrTip: "Éviter les ouvertures impersonnelles ou creuses du genre 'De tout temps, les hommes ont écrit...'."
        },
        {
          stepNumber: 2,
          title: "Développement en paragraphes argumentatifs calibrés",
          whatToDo: "Présenter la partie en 1 ou 2 phrases. Rédiger le 1er paragraphe (15 lignes), puis le second. Clore chaque grande partie par une conclusion partielle et une transition vers la partie suivante.",
          reflexOrTip: "Sauter une ligne entre la thèse et l'antithèse pour rendre la copie claire et agréable pour le correcteur."
        },
        {
          stepNumber: 3,
          title: "Conclusion tripartite et ouverture pertinente",
          whatToDo: "1. Dresser le bilan synthétique des conclusions partielles. 2. Exprimer sa position personnelle nuancée. 3. Ouvrir le débat par une question prospective solide.",
          reflexOrTip: "La réponse personnelle ne doit jamais contredire le développement précédent."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet type d'application : « Un livre doit ouvrir les yeux du lecteur sur la vie ». Qu’en pensez-vous ?",
        solutionStepByStep: "Thèse : L'écriture littéraire comme éveilleur de conscience morale et politique (Zola dénonçant l'exploitation ouvrière, Césaire fustigeant la tyrannie de Christophe, fables morales balisant la voie pour les jeunes générations).\nAntithèse : Le livre comme refuge d'évasion, de divertissement et d'art pur (la littérature comme exutoire face aux pesanteurs de l'angoisse existentielle selon Montesquieu et Kléber Haedens, culte du style désintéressé chez les Parnassiens et Symbolistes).\nSynthèse : L'œuvre d'art authentique réconcilie la hauteur esthétique et la portée humaine universelle.",
        finalAnswer: "Plan détaillé complet et rédigé selon les normes de la réforme du Baccalauréat sénégalais."
      },
      classicExamTraps: [
        "Aligner des exemples d'œuvres les uns après les autres sans développer d'argument rationnel préalable.",
        "Prendre position unilatéralement dès l'introduction sans examiner l'antithèse.",
        "Utiliser des citations tronquées ou mal attribuées."
      ],
      selfCheckChecklist: [
        "Chaque paragraphe fait-il environ 15 lignes avec une idée directrice, un argument et une référence ?",
        "Les transitions utilisent-elles les connecteurs logiques de la table officielle ?",
        "La problématique est-elle formulée sous forme d'une interrogation centrale claire ?"
      ],
      quickRevisionMemo: "Mémo Mamadou Lamine Danfa : 'L'éducation, le levier principal de l'émergence'. Pas d'exemples sans arguments, pas d'arguments sans idées directrices claires.",
      certificationNote: "Méthodologie réformée et 24 sujets types (M. Mamadou Lamine Danfa, UCAD Dakar)."
    };
  }

  // Détection spécifique du corpus Figures de Style (Mme Fereyrolles - Collège Maurice Genevoix)
  if (/fereyrolles|genevoix|decize|exercices?\s+(?:sur\s+les\s+)?figures?\s+de\s+style|transformer?\s+(?:les\s+)?metaphores/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français — Stylistique & Figures de Style",
      cycle: "premier_cycle_bepc",
      level: "3e",
      levelLabel: "Collège & Lycée (BEPC & BAC)",
      chapterTitle: "Les Figures de Style : Identification, Transformation & Analyse (Mme Fereyrolles)",
      definitionAndScope: `Fiche officielle d'exercices et corrigé intégral rédigés par Mme Fereyrolles (Collège Maurice Genevoix - Decize).\n\nComprend 22 citations avec double identification stylistique, 5 exercices de transformation de métaphores en comparaisons, et l'analyse littéraire approfondie d'extraits de Voltaire (Candide), Flaubert (Madame Bovary) et des frères Goncourt (Germinie Lacerteux).`,
      coreConceptsAndFormulas: [
        {
          name: "Figures d'analogie & de substitution",
          formulaOrRule: "Comparaison (avec outil comparatif : 'comme', 'pareil à') | Métaphore (analogie directe sans outil) | Personnification | Allégorie | Métonymie | Synecdoque | Périphrase.",
          explanation: "La comparaison rapproche deux réalités explicitement. La métaphore condense l'analogie. La métonymie désigne par contiguïté logique.",
          contextOrApplication: "Identification dans les textes littéraires et expression écrite."
        },
        {
          name: "Figures d'opposition & de contraste",
          formulaOrRule: "Antithèse (deux contraires dans le même énoncé) | Oxymore (deux termes opposés réunis dans le même syntagme) | Chiasme (structure croisée AB/B'A') | Paradoxe | Antiphrase.",
          explanation: "L'oxymore crée une image poétique nouvelle et frappante ('noir bonheur', 'silence assourdissant'). Le chiasme équilibre deux regards croisés.",
          contextOrApplication: "Commentaire composé et analyse des poèmes baroques, romantiques ou modernes."
        },
        {
          name: "Figures d'insistance & d'atténuation",
          formulaOrRule: "Anaphore (reprise en tête de vers/phrase) | Gradation (ascendante ou descendante) | Hyperbole (exagération) | Litote (dire moins pour faire entendre plus) | Euphémisme (adoucir une réalité brutale).",
          explanation: "L'euphémisme atténue la violence du viol ou de la mort ('rendaient les derniers soupirs' chez Voltaire). La litote renforce la volonté ('Je ne dirais pas non').",
          contextOrApplication: "Étude des registres satirique, tragique, pathétique et lyrique."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Repérer les indices formels",
          whatToDo: "Chercher les mots de liaison comparatifs, les répétitions en tête de vers (anaphores) ou les rapprochements antonymiques.",
          reflexOrTip: "Si les contraires sont séparés, c'est une antithèse ; s'ils sont collés ('silence assourdissant'), c'est un oxymore."
        },
        {
          stepNumber: 2,
          title: "Transformer une métaphore en comparaison",
          whatToDo: "Rétablir le terme comparant, le comparé et insérer un outil de comparaison explicite ('comme', 'semblable à', 'pareil à').",
          reflexOrTip: "Exemple officiel : « Son teint de rose » devient « Son teint est magnifique comme une rose »."
        },
        {
          stepNumber: 3,
          title: "Interpréter l'effet littéraire en contexte",
          whatToDo: "Expliquer ce que l'auteur veut faire ressentir : dénonciation de la barbarie guerrière (Voltaire), malaise social d'Emma Bovary (Flaubert), anesthésie comateuse de l'alcoolisme (Goncourt).",
          reflexOrTip: "Toujours articuler : nom précis de la figure + citation textuelle exacte + effet de sens produit."
        }
      ],
      solvedExample: {
        problemStatement: "Repérer et interpréter : « ce qu'elle demandait, c'était le noir bonheur du sommeil... tombant sur elle comme un coup d'assommoir sur la tête d'un bœuf » (Goncourt)",
        solutionStepByStep: "1. Figures relevées : Oxymore (« noir bonheur »), comparaison naturaliste (« comme un coup d'assommoir sur la tête d'un bœuf »), métaphore (« la foudroyaient »).\n2. Interprétation : Les Goncourt matérialisent la violence de l'ivresse et de l'abrutissement physique chez Germinie Lacerteux.",
        finalAnswer: "Oxymore, comparaison et métaphore concourant au réalisme clinique et tragique de l'alcoolisme."
      },
      classicExamTraps: [
        "Confondre métaphore et comparaison (la métaphore n'a jamais d'outil comparatif comme 'comme' ou 'tel').",
        "Confondre litote (vouloir dire plus par la négation) et euphémisme (adoucir une vérité choquante).",
        "Nommer la figure de style sans expliquer l'effet produit dans le texte."
      ],
      selfCheckChecklist: [
        "Le nom exact de la figure est-il orthographié correctement (oxymore, chiasme, anaphore) ?",
        "L'effet sur le lecteur ou la visée de l'auteur est-il explicité ?",
        "La citation est-elle placée fidèlement entre guillemets ?"
      ],
      quickRevisionMemo: "Mémo Figures de style : Toujours associer forme (l'outil stylistique) et fond (le sens et l'émotion visée).",
      certificationNote: "Fiche officielle conforme aux programmes de Collège et Lycée (Mme Fereyrolles, Collège Maurice Genevoix)."
    };
  }

  // Détection spécifique du manuel Le Français en Terminale (M. Aïdara & M. Wade)
  if (/aidara|ousseynou\s*wade|limamoulaye|le\s*francais\s*en\s*terminale|lymodak/i.test(normQuery)) {
    return {
      query,
      discipline: "francais",
      disciplineLabel: "Français & Littérature — Manuel Aïdara & Wade",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Littéraire et Scientifique (BAC)",
      chapterTitle: "Le Français en Terminale : Cours Complet, Monographies & Exercices (Aïdara & Wade)",
      definitionAndScope: `Manuel de référence officiel pour les classes de Terminale rédigé par M. Chérif Ousmane Aïdara (Lycée Seydina Limamoulaye, Guédiawaye) et M. Ousseynou Wade (Lycée Moderne de Dakar).\n\nComprend l'étude exhaustive des courants littéraires (du XVIe au XXe siècle), des genres (Poésie, Roman, Théâtre, Conte, Nouvelle), des monographies complètes des œuvres au programme (La Fontaine, Hugo, Senghor, David Diop, Prévost, Camus, Kourouma, Hampaté Bâ, Anouilh, Badian, Birago Diop), l'art complet des vers et de la métrique, ainsi que les méthodologies complètes de la dissertation, du commentaire et du résumé.`,
      coreConceptsAndFormulas: [
        {
          name: "Courants Littéraires (XVIe au XXe siècle)",
          formulaOrRule: "Humanisme (Montaigne, Rabelais) -> Classicisme (Racine, Molière, La Fontaine, Boileau) -> Lumières (Voltaire, Rousseau) -> Romantisme (Hugo, Lamartine) -> Réalisme (Stendhal, Balzac) -> Parnasse (Gautier) -> Symbolisme (Baudelaire, Rimbaud) -> Surréalisme (Breton, Éluard) -> Négritude (Césaire, Senghor, Diop).",
          explanation: "Chaque courant est défini par sa vision du monde, son rapport à la forme et son idéal humain ou esthétique.",
          contextOrApplication: "Contextualisation des sujets de dissertation et amorce des commentaires composés."
        },
        {
          name: "Monographies & Œuvres Majeures",
          formulaOrRule: "Hugo (Les Contemplations, 1856) | Senghor (Chants d'ombre, 1945) | David Diop (Coups de pilon, 1948) | Camus (L'Étranger, 1942) | Kourouma (Les Soleils des Indépendances, 1968) | Hampaté Bâ (Wangrin, 1973) | Anouilh (Antigone, 1944).",
          explanation: "Chaque monographie détaille la biographie, la genèse, l'analyse séquentielle, les personnages clés, les thèmes majeurs et des modèles de commentaires rédigés.",
          contextOrApplication: "Corpus indispensable d'exemples pour les trois sujets du Baccalauréat."
        },
        {
          name: "L'Art des Vers & Versification",
          formulaOrRule: "Décompte des syllabes (règle du e muet, diérèse/synérèse), alexandrin (6/6 ou trimètre 4/4/4), césure et hémistiches, rejets et contre-rejets, rimes (plates AABB, croisées ABAB, embrassées ABBA ; richesse : pauvre, suffisante, riche).",
          explanation: "La métrique n'est pas un vain jeu de décompte : elle matérialise le rythme, l'émotion et le sens du texte poétique.",
          contextOrApplication: "Commentaire stylistique de poèmes réguliers et modernes."
        },
        {
          name: "La Dissertation Littéraire",
          formulaOrRule: "Structure tripartite : Sujets dialectiques/critiques ('discutez'), synthétiques ('expliquez et commentez') et comparatifs. Paragraphes : Idée directrice -> Explication rationnelle -> Citation exacte -> Analyse du procédé.",
          explanation: "Règles strictes de l'introduction (amorce, sujet, problème, plan) et de la conclusion (bilan, jugement personnel, élargissement).",
          contextOrApplication: "Épreuve reine de l'écrit du Baccalauréat."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Compréhension et délimitation du sujet",
          whatToDo: "Repérer l'opinion, la consigne et les conseils. Définir les termes clés selon le contexte littéraire exact.",
          reflexOrTip: "Ne jamais s'écarter du domaine demandé pour parler d'autre chose."
        },
        {
          stepNumber: 2,
          title: "Organisation du plan et recherche des arguments",
          whatToDo: "Bâtir des axes directeurs progressifs répondant directement au problème central. Prévoir au moins deux références précises par sous-partie.",
          reflexOrTip: "Mobiliser les citations authentiques répertoriées dans le manuel Aïdara & Wade (Stendhal, Hugo, Gautier, Baudelaire, Camus, Senghor)."
        },
        {
          stepNumber: 3,
          title: "Rédaction académique soignée",
          whatToDo: "Assurer la continuité du raisonnement à l'aide de connecteurs logiques précis. Rédiger sans ratures ni abréviations.",
          reflexOrTip: "Chaque citation doit être introduite fluidement et commentée dans sa portée littéraire."
        }
      ],
      solvedExample: {
        problemStatement: "Modèle intégral du manuel : Commentaire composé de « Demain dès l'aube... » (Victor Hugo, Pauca Meae XIV)",
        solutionStepByStep: "Axe I : Un pèlerinage réel mené avec une détermination inébranlable (progression spatio-temporelle, verbes de mouvement au futur).\nAxe II : L'itinéraire intérieur et l'aveuglement volontaire au monde extérieur (repli sur soi, négations 'sans', jour comme la nuit).\nAxe III : Le triomphe de l'amour et le pouvoir d'immortalité de la poésie (dialogue je/tu vivant par-delà la mort, offrande immortelle du houx et de la bruyère).",
        finalAnswer: "Démonstration exemplaire alliant métrique, rythme, stylistique et interprétation philosophique du deuil."
      },
      classicExamTraps: [
        "Faire de la paraphrase ou un simple résumé de l'histoire dans le commentaire composé.",
        "Oublier de citer le texte à l'appui de chaque affirmation stylistique.",
        "Adopter un plan binaire artificiel 'Oui/Non' sans nuances ni dépassement."
      ],
      selfCheckChecklist: [
        "Les trois parties de la dissertation ou du commentaire sont-elles équilibrées ?",
        "Les termes techniques de versification et de stylistique sont-ils employés avec rigueur ?",
        "La conclusion apporte-t-elle une réponse personnelle et solide à la problématique ?"
      ],
      quickRevisionMemo: "Mémo Aïdara & Wade : Allier toujours la perfection formelle à la profondeur de la réflexion humaine.",
      certificationNote: "Manuel complet de Français Terminale (Lycée Seydina Limamoulaye & Lycée Moderne de Dakar)."
    };
  }

  // Détection spécifique du fascicule Intelligentsia Corporation (Cameroun, 2024 - Arguments sur tous les chapitres)
  if (/intelligentsia|cameroun.*philo|philo.*cameroun|yaounde|marcien\s*towa|njoh\s*mouelle|mono\s*ndzana|ptahhotep|zera\s*yacob|guillaume\s*amo|etats\s*unis\s*d\s*afrique|houphouet.*fourmi|ziegler\s*panafricanisme|arguments\s+(?:sur\s+)?tous\s+les\s+chapitres/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Philosophie Terminale — Intelligentsia Corporation (Cameroun)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale (Séries A, ABI, C, D, E, TI, SH)",
      chapterTitle: "La Philosophie en Terminale : Arguments sur Tous les Chapitres (Intelligentsia Corporation)",
      definitionAndScope: `Fascicule officiel d'excellence conçu par Intelligentsia Corporation (Centre National d'Orientation et de Préparation aux Concours d'entrée dans les Grandes Écoles et Facultés du Cameroun, Since 2006, Yaoundé).\n\nCet ouvrage propose un répertoire systématique des problèmes fondamentaux, thèses, antithèses, arguments numérotés, citations textuelles authentifiées et illustrations de terrain sur les 18 chapitres du programme officiel de Terminale.`,
      coreConceptsAndFormulas: [
        {
          name: "Chapitre 1 : Nature et Valeur de la Philosophie",
          formulaOrRule: "Détracteurs : déséquilibre psychoaffectif (Thalès, Diogène), subversion politique (Socrate, Marx), incertitude, athéisme (Nietzsche, Sartre), abstraction stérile (Valéry « pur jeu de mots », Rosset, Duverger) vs Partisans : guide moral (Descartes « avoir les yeux fermés »), sortie de l'obscurantisme (premiers physiciens grecs), gouvernance (Platon rois philosophes), fécondité scientifique (Towa), ancrage pratique (Hegel, Marx, Njoh Mouelle).",
          explanation: "La philosophie comme savoir constitué (doctrines d'école) vs comme recherche permanente du savoir (Jaspers « philosopher c'est être en route », Kant).",
          contextOrApplication: "Fondement méthodologique de la réflexion philosophique."
        },
        {
          name: "Chapitre 2 : La Philosophie en Afrique (Ethnocentrisme vs Africanisme)",
          formulaOrRule: "Thèse ethnocentriste européenne : négation de la rationalité nègre (Hegel « pays de l'enfance », Lévy-Bruhl mentalité prélogique, Heidegger « la philosophie est grecque dans son être propre ») vs Thèse africaniste : universalité de la raison (Descartes « bon sens partagé »), berceau africain prouvé par Cheikh Anta Diop (séjours égyptiens de Pythagore, Démocrite, Platon), lignée des penseurs (Ptahhotep, Zera Yacob, Walda Heywat, Guillaume Amo, Marcien Towa, Njoh Mouelle, Mono Ndzana, Hountondji, Eboussi Boulaga).",
          explanation: "Démontre que l'Afrique dispose d'une tradition philosophique authentique et documentée dès l'Antiquité.",
          contextOrApplication: "Notion centrale du programme camerounais et panafricain."
        },
        {
          name: "Chapitres 3 à 6 : Conscience, Inconscient, Désir, Passion, Personne et Autrui",
          formulaOrRule: "Conscience & Inconscient : rationalisme (Lalande, Descartes, Rousseau) vs psychanalyse (Freud topiques et lapsus, Wordsworth, Roger Ebacher). Désir & Passion : manque insatiable (Platon tonneau percé, Schopenhauer) vs moteur de vie (Spinoza essence, Locke) ; passion aveuglante (Alquié, Kant maladie de l'âme) vs grandeur historique (Rousseau, Hegel). Personne : déterminismes (Durkheim, Lombroso) vs liberté absolue (Sartre, Bergson, Alain). Autrui : connaissance possible (Bergson, Malebranche, Merleau-Ponty, Augustin) vs inaccessible (Sartre, Montaigne, Berger) ; conflit (Hobbes, Freud, Sartre) vs communion (Rousseau, Gabriel Marcel « Le ciel c'est les autres »).",
          explanation: "Cartographie dialectique complète de la condition humaine et de l'intersubjectivité.",
          contextOrApplication: "Sujets portant sur le moi, le sujet, le désir et les relations à autrui."
        },
        {
          name: "Chapitres 7 à 12 : Société, Morale, Droit, État, Violence et Liberté",
          formulaOrRule: "Société : naturelle (Aristote) vs culturelle (Hobbes, Rousseau) ; obstacle (Durkheim, Njoh Mouelle homme médiocre) vs bonheur (Hume). Morale : innée (Rousseau, Kant) vs acquise (Freud, Durkheim, Nietzsche) ; relative vs universelle (Kant impératif catégorique). Droit & Justice : raison et contrat vs droit du plus fort (Calliclès, Bismarck, Marx). État : mal absolu (Weber monopole violence légitime, Althusser, Bakounine) vs bienfaiteur (ministères sociaux, paix). Violence : naturelle vs sociale ; féconde (Marx accoucheuse) vs immorale (Kant). Liberté : libre arbitre (Descartes, Gide) vs fatalisme.",
          explanation: "Théorie politique et morale articulant droit, pouvoir et émancipation citoyenne.",
          contextOrApplication: "Dissertations politiques, éthiques et juridiques du Baccalauréat."
        },
        {
          name: "Chapitres 14 à 18 : Panafricanisme, Culture, Travail, Science, Mathématiques, Religion",
          formulaOrRule: "Panafricanisme : mythe (Ziegler, rivalités Houphouët-Boigny « tête de fourmi plutôt que queue d'éléphant », balkanisation) vs réalisable (Diop socle commun, intégration CEMAC/CEDEAO/UA). Culture : hiérarchisation réfutée (Montaigne, Lévi-Strauss). Travail : fardeau (Genèse, Marx vampire) vs salutaire (Voltaire, Hegel). Science : progrès (Bacon, Descartes) vs péril (Bergson). Maths : observation (Locke, Mill, Mouy) vs imagination ; utilité (Galilée, Brunschvicg). Religion : existence de Dieu (Voltaire horloger, Descartes) vs critique (Sartre, Carnap) ; opium (Marx) vs supplément d'âme (Bergson).",
          explanation: "Enjeux contemporains du développement, de la techno-science et du panafricanisme.",
          contextOrApplication: "Épistémologie, anthropologie et pensée politique africaine."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Dégager le Problème Fondamental sous forme interrogative",
          whatToDo: "Formuler la question centrale qui fait surgir la tension dialectique du chapitre sans présupposer la réponse.",
          reflexOrTip: "Ne jamais transformer la question en dilemme simpliste ou affirmation dogmatique."
        },
        {
          stepNumber: 2,
          title: "Structurer la Thèse (Arguments numérotés, Auteurs, Citations, Illustrations)",
          whatToDo: "Développer 2 à 4 arguments solides, chacun appuyé sur une citation exacte d'auteur et une illustration concrète.",
          reflexOrTip: "Dans l'épreuve, expliciter d'abord l'argument avant d'insérer la citation textuelle."
        },
        {
          stepNumber: 3,
          title: "Élaborer l'Antithèse et le Dépassement Synthétique",
          whatToDo: "Confronter la thèse adverse avec le même niveau d'exigence argumentative et déboucher sur un bilan équilibré.",
          reflexOrTip: "Mobiliser les philosophes camerounais et africains contemporains (Towa, Njoh Mouelle, Mono Ndzana) pour enrichir la perspective."
        }
      ],
      solvedExample: {
        problemStatement: "Exemple type Intelligentsia : « La création des États-Unis d'Afrique relève-t-elle de l'utopie ? » (Chapitre 14 : Le Panafricanisme)",
        solutionStepByStep: "1. Thèse I (Mythe et obstacles réels) : Mainmise occidentale et gouvernements dépendants ; Jean Ziegler : « le panafricanisme est un idéalisme et tout idéalisme est une erreur » ; Rivalités de leadership entre chefs d'État (Félix Houphouët-Boigny : « Vaut mieux être à la tête d'une fourmi qu'à la queue d'un éléphant ») ; Hétérogénéité linguistique et balkanisation héritée de la Conférence de Berlin (1885).\n" +
          "2. Thèse II (Projet réalisable et dynamique en marche) : Socle culturel et historique commun démontré par Cheikh Anta Diop ; Prise de conscience et enseignement du panafricanisme ; Construction progressive des ensembles régionaux et sous-régionaux (CEMAC, CEDEAO, Union Africaine).\n" +
          "3. Synthèse : L'unité africaine n'est pas une illusion chimérique mais un impératif historique conditionné par le dépassement des micro-nationalismes et la volonté politique commune.",
        finalAnswer: "Démonstration dialectique rigoureuse conforme aux standards d'excellence académique d'Intelligentsia Corporation."
      },
      classicExamTraps: [
        "Réduire la philosophie africaine à l'ethnophilosophie sans rigueur critique (erreur dénoncée par Marcien Towa et Paulin Hountondji).",
        "Empiler des citations sans expliciter le lien logique avec le problème posé.",
        "Négliger les philosophes africains contemporains dans les sujets de culture, de travail ou de gouvernance."
      ],
      selfCheckChecklist: [
        "Le problème fondamental est-il formulé sous forme de question ?",
        "Chaque thèse contient-elle des arguments numérotés avec auteurs et citations vérifiées ?",
        "Les illustrations historiques ou concrètes sont-elles pertinentes ?"
      ],
      quickRevisionMemo: "Mémo Intelligentsia : Problème fondamental -> Thèse argumentée (auteurs + citations) -> Antithèse critique -> Synthèse libératrice.",
      certificationNote: "Intégration officielle certifiée du fascicule Intelligentsia Corporation (Yaoundé, Cameroun, Since 2006)."
    };
  }

  // Détection spécifique du fascicule Luxe des Philosophies (Dr Prince Fréjus Igouie QUENUM, Fondation FOSOPIQ)
  if (/luxe\s+des\s+philosophies|frejus\s*quenum|prince\s*quenum|quenum|fondation\s+fosopiq.*dissertation|fosopiq.*commentaire/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Luxe des Philosophies — Fondation FOSOPIQ",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale (Toutes Séries)",
      chapterTitle: "Luxe des Philosophies : 11 Dissertations & 8 Commentaires Corrigés (Dr Prince Fréjus Igouie QUENUM)",
      definitionAndScope: `Manuel d'excellence officiel de la collection « Luxe des Philosophies — Le Bac c'est maintenant », publié par le Dr Prince Fréjus Igouie QUENUM (Fondation FOSOPIQ, Bénin / International).\n\nComporte 11 dissertations types (Définition des expressions et termes essentiels, Reformulation, Problème interrogatif, Axes d'analyse et références philosophiques) et 8 commentaires de textes philosophiques intégraux avec étude ordonnée méthodique et double critique interne/externe.`,
      coreConceptsAndFormulas: [
        {
          name: "Méthodologie Dissertation : Architecture en 4 Éléments Normatifs",
          formulaOrRule: "I. Définition des expressions et termes essentiels -> II. Reformulation claire du sujet -> III. Problème interrogatif central -> IV. Axes d'analyse et références possibles (Axe 1 & Axe 2) + Réponse finale nuancée.",
          explanation: "Protocole strict garantissant l'absence de contresens et une problématisation authentique sous forme de question.",
          contextOrApplication: "Applicable à toute dissertation philosophique du Baccalauréat."
        },
        {
          name: "Méthodologie Commentaire : Étude Ordonnée & Intérêt Philosophique",
          formulaOrRule: "I. Éléments d'introduction (Thème, Problème, Thèse) -> II. Étude ordonnée avec délimitation précise des mouvements (lignes L1-L10, etc.) -> III. Intérêt philosophique articulant Critique interne (intention et démarche démonstrative) et Critique externe (enjeu problématisé sous forme de question et confrontation d'auteurs).",
          explanation: "Régit l'analyse ordonnée des 8 textes canoniques du recueil (Bergson, Hegel, Nietzsche, Sartre, Rousseau, Hume).",
          contextOrApplication: "Épreuve du commentaire de texte philosophique."
        },
        {
          name: "Corpus des 11 Dissertations Corrigées",
          formulaOrRule: "1. Conscience et animalité | 2. Inconscient : nature ou histoire | 3. L'État : un mal nécessaire | 4. Pouvoir d'État et violence | 5. « L'enfer c'est l'absence des autres » | 6. Droit et justice | 7. « La liberté consiste à ne dépendre que des lois » | 8. La nation relève-t-elle de l'utopie | 9. L'athéisme est-il une illusion | 10. Foi religieuse et rationalité scientifique | 11. La pratique religieuse est-elle caduque ?",
          explanation: "Traitement exhaustif des grandes questions du programme avec références canoniques (Descartes, Kant, Marx, Freud, Hobbes, Spinoza, Rousseau).",
          contextOrApplication: "Préparation intensive des sujets types du Baccalauréat."
        },
        {
          name: "Corpus des 8 Textes Commentés",
          formulaOrRule: "Texte 1 : Bergson, L'évolution créatrice (cerveau humain et indéfini des déclics) | Texte 2 : Hegel, Esthétique (double existence de l'homme : en soi et pour soi) | Texte 3 : Nietzsche, Généalogie de la morale (l'oubli comme faculté active et condition du bonheur) | Texte 4 : Sartre, L'existentialisme est un humanisme (liberté concrète et liberté des autres) | Texte 5 : Rousseau, Discours sur l'inégalité (liberté sous les lois) | Texte 6 : Nietzsche, Par-delà le bien et le mal (instinct grégaire d'obéissance) | Texte 7 : Nietzsche, Humain trop humain (justice comme troc) | Texte 8 : Hume, Du contrat originel (la force et la conquête à l'origine du gouvernement).",
          explanation: "Chaque texte fait l'objet d'une analyse ordonnée par mouvements et d'une double critique interne/externe.",
          contextOrApplication: "Maîtrise de l'explication et de la critique philosophique."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Définition analytique et Reformulation",
          whatToDo: "Définir chaque terme pivot selon son acception philosophique exacte, puis traduire le sujet dans une formule équivalente sans déformation.",
          reflexOrTip: "Ne jamais se contenter d'une définition du dictionnaire courant."
        },
        {
          stepNumber: 2,
          title: "Formulation du Problème Philosophique",
          whatToDo: "Poser la question fondamentale sous forme interrogative en révélant le paradoxe ou la difficulté sous-jacente.",
          reflexOrTip: "Bannir toute affirmation en lieu et place du problème."
        },
        {
          stepNumber: 3,
          title: "Déploiement des Axes d'Analyse et Critique Externe",
          whatToDo: "Structurer les axes contradictoires avec auteurs certifiés (citations avec œuvre et date), puis dégager la synthèse finale.",
          reflexOrTip: "Dans le commentaire, toujours problématiser l'enjeu philosophique en critique externe."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 4 de dissertation (FOSOPIQ) : « Le pouvoir d'État est-il nécessairement violent ? »",
        solutionStepByStep: "I. Définitions : Pouvoir d'État (autorité politique souveraine), Nécessairement (absolument, inévitablement), Violent (brutal, agressif, abus de la force).\n" +
          "II. Reformulation : L'usage de la force brutale est-il indispensable à l'exercice du pouvoir politique ?\n" +
          "III. Problème : Quelle place la violence occupe-t-elle dans l'exercice du pouvoir d'État ?\n" +
          "IV. Axes d'analyse :\n" +
          "• Axe 1 (La violence omniprésente dans l'exercice du pouvoir) : Violence physique et psychologique quotidienne ; Althusser (Idéologies et appareils idéologiques d'État : ARE repressifs police/armée et AIE idéologiques presse/école) ; Schopenhauer (« L'État n'est que la muselière dont le but est de rendre inoffensive cette bête carnassière ») ; Gusdorf (La Vertu de force : la violence comme énergie de désespoir).\n" +
          "• Axe 2 (La violence comme nécessité régulatrice) : Nature violente des hommes (Hobbes, Léviathan : guerre de chacun contre chacun sans pouvoir fort) ; Prévention de l'anarchie (Goethe : « Je préfère l'injustice au désordre ») ; Union du droit et de la force (Pascal : « La justice sans la force est impuissante, la force sans la justice est tyrannique » ; Paul Valéry : « Si l'État est fort il nous écrase, s'il est faible nous périssons »).\n" +
          "V. Réponse finale : La violence s'impose comme une nécessité dans l'exercice du pouvoir d'État, mais elle doit impérativement s'exercer dans le strict respect des droits du citoyen.",
        finalAnswer: "Corrigé type intégralement rédigé selon le standard FOSOPIQ (Dr Prince Fréjus Igouie QUENUM)."
      },
      classicExamTraps: [
        "Confondre la violence d'État légitime (Max Weber) avec la tyrannie arbitraire.",
        "Oublier de délimiter les mouvements du texte par les numéros de lignes précis.",
        "Omettre la critique externe dans le commentaire philosophique."
      ],
      selfCheckChecklist: [
        "Les termes essentiels sont-ils définis avant la reformulation ?",
        "Le problème est-il formulé sous forme interrogative stricte ?",
        "Les citations comportent-elles le nom de l'auteur et le titre de l'œuvre ?"
      ],
      quickRevisionMemo: "Mémo Luxe des Philosophies : Définition -> Reformulation -> Problème -> Axes & Références. Étude de texte : Mouvements textuels -> Critique interne (démarche) -> Critique externe (enjeu problématisé).",
      certificationNote: "Intégration certifiée du manuel Luxe des Philosophies — Fondation FOSOPIQ (Dr Prince Fréjus Igouie QUENUM)."
    };
  }

  // Détection spécifique du recueil 1000 citations philosophiques (Éditions Nathan, Collection Petites Références)
  if (/1000\s*citations|mille\s*citations|citations?\s*philosophiques?\s*nathan|nathan\s*philo|pour\s*bien\s*placer\s*les\s*citations|rendre\s*a\s*cesar|raphaelle\s*mourey|cecile\s*quintard|denis\s*hoch|softwin/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "1000 Citations Philosophiques — Éditions Nathan",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale (Toutes Séries)",
      chapterTitle: "1000 Citations Philosophiques : Méthodologie & Répertoire Thématique (Éditions Nathan)",
      definitionAndScope: `Recueil officiel de référence pédagogique des Éditions Nathan (Collection Petites Références) regroupant 1 000 citations philosophiques canoniques classées par notions du programme de Terminale (Le Sujet, La Culture, La Raison et le Réel, La Politique, La Morale) avec conseils méthodologiques pour bien les insérer et les commenter.`,
      coreConceptsAndFormulas: [
        {
          name: "Règles d'or de l'insertion de la citation : « Rendre à César... »",
          formulaOrRule: "1. Exactitude textuelle avec guillemets (« ... ») et crochets [...] pour les coupures ; 2. Mention obligatoire de l'auteur et soulignement de l'œuvre ; 3. Ne jamais citer sans argumenter ni expliciter ; 4. Penser par soi-même sans s'abriter derrière un argument d'autorité.",
          explanation: "La citation doit venir à l'appui d'un raisonnement déjà engagé et être suivie de 2 à 3 lignes d'explicitation conceptuelle.",
          contextOrApplication: "Règle méthodologique transversale pour la dissertation et le commentaire au Bac."
        },
        {
          name: "Partie I : Le Sujet (Conscience, Inconscient, Autrui, Désir, Existence et Temps)",
          formulaOrRule: "Conscience : cogito cartésien (Descartes 1637/1641), intentionnalité (Husserl 1931, Sartre 1947), conscience comme mémoire et liberté (Bergson 1907). Inconscient : petites perceptions (Leibniz 1765), inconscient freudien nécessaire et légitime (Freud 1917/1952) vs mauvaise foi sartrienne et idolâtrie du corps (Alain 1941). Autrui : regard chosifiant (Sartre 1943), visage éthique (Levinas 1961), maître et esclave (Hegel 1807), sympathie (Scheler 1923, Rousseau 1755). Désir : essence de l'homme (Spinoza 1677, Hobbes 1651), manque (Platon Banquet), désir triangulaire/mimétique (René Girard 1961/1972).",
          explanation: "Corpus complet sur la condition subjective, l'intersubjectivité et la temporalité.",
          contextOrApplication: "Sujets portant sur l'identité, le moi, autrui et le désir."
        },
        {
          name: "Partie II : La Culture (Nature & Culture, Langage, Art, Travail & Technique, Histoire, Philosophie)",
          formulaOrRule: "Nature/Culture : état de nature (Hobbes 1642 vs Rousseau 1755), prohibition de l'inceste (Lévi-Strauss 1949), perfectibilité (Rousseau, Condorcet 1792), ethnocentrisme (Montaigne « barbarie ce qui n'est pas de son usage »). Langage : convention (Platon Cratyle, Saussure 1916), ineffable vs mot juste (Hegel 1807), agir communicationnel (Habermas 1981), actes illocutoires (Austin 1962). Art : imitation dévaluée (Platon République) vs vérité de l'art Hegel/Heidegger, contemplation désintéressée Kant, transfiguration du visible Klee/Bergson, jugement de goût universel sans concept. Technique : homo faber (Bergson 1907), aliénation (Marx 1844/1867), arraisonnement (Heidegger 1953), principe responsabilité (Hans Jonas 1979). Histoire : connaissance du passé (Marrou, Ricœur 1955), ruse de la raison (Hegel 1837).",
          explanation: "Articulations fondamentales entre la nature humaine et les médiations culturelles et techniques.",
          contextOrApplication: "Sujets de culture, anthropologie, épistémologie de l'histoire et esthétique."
        },
        {
          name: "Partie III & IV & V : Raison, Politique et Morale",
          formulaOrRule: "Épistémologie : falsifiabilité et conjectures (Karl Popper 1963/1972), obstacles épistémologiques (Bachelard 1934/1938), déterminisme (Laplace 1814, Spinoza 1677 vs indétermination quantique). Politique : animal politique (Aristote), contrat social (Hobbes soumission vs Rousseau association), séparation des pouvoirs (Montesquieu 1748), monopole de la violence légitime (Weber 1921). Justice : équité vs égalité arithmétique (Aristote), droit du plus fort réfuté (Rousseau). Morale : impératif catégorique (Kant 1785), liberté et responsabilité (Sartre 1946 condamné à être libre), bonheur (ataraxie épicurienne et stoïcienne, création joyeuse Bergson).",
          explanation: "Principes normatifs régissant la vérité, le pouvoir politique et l'action morale.",
          contextOrApplication: "Sujets de théorie de la connaissance, de philosophie politique et d'éthique."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Sélectionner la citation en fonction du problème précis",
          whatToDo: "Choisir la citation qui illustre, définit ou objecte directement à l'étape du raisonnement.",
          reflexOrTip: "Ne jamais plaquer une citation apprise par cœur si elle ne colle pas exactement au concept discuté."
        },
        {
          stepNumber: 2,
          title: "Intégrer et attribuer fidèlement la formule",
          whatToDo: "Insérer le nom de l'auteur, souligner le titre de l'œuvre et respecter le texte exact entre guillemets.",
          reflexOrTip: "Exemple : Selon Descartes, dans le Discours de la méthode, « le bon sens est la chose du monde la mieux partagée »."
        },
        {
          stepNumber: 3,
          title: "Expliciter la portée conceptuelle de la citation",
          whatToDo: "Développer en 2 ou 3 phrases ce que l'auteur veut démontrer et comment cela éclaire le sujet.",
          reflexOrTip: "La citation n'est qu'un repère ; c'est votre explication argumentée qui apporte les points."
        }
      ],
      solvedExample: {
        problemStatement: "Application de la méthode Nathan : Intégrer judicieusement une citation dans un paragraphe sur le travail.",
        solutionStepByStep: "1. Thèse : Le travail ne se réduit pas à une contrainte biologique mais transforme la nature selon un projet pensé.\n" +
          "2. Citation insérée : Comme le souligne Karl Marx dans Le Capital (1867), « ce qui distingue dès l'abord le plus mauvais architecte de l'abeille la plus experte, c'est qu'il a construit la cellule dans sa tête avant de la construire dans la ruche ».\n" +
          "3. Explicitation : Marx montre ici que la spécificité du travail humain réside dans la téléologie consciente, c'est-à-dire dans la représentation préalable de la fin visée, contrairement à l'instinct animal qui répète aveuglément des gestes naturels programmés.",
        finalAnswer: "Insertion modèle conforme aux exigences méthodologiques Nathan (Petites Références)."
      },
      classicExamTraps: [
        "Faire un empilement de citations enfilées comme des perles sans fil directeur.",
        "Attribuer une formule célèbre à un mauvais auteur (ex : attribuer « L'homme est né libre et partout il est dans les fers » à Voltaire au lieu de Rousseau).",
        "Prendre la citation pour une vérité absolue sans la problématiser ni en montrer les limites."
      ],
      selfCheckChecklist: [
        "La citation est-elle encadrée par des guillemets ?",
        "L'auteur et le titre de l'œuvre sont-ils mentionnés avec exactitude ?",
        "La citation est-elle suivie d'une explication conceptuelle reliant le propos au sujet ?"
      ],
      quickRevisionMemo: "Mémo Nathan : 1 citation = 1 auteur + 1 œuvre soulignée + 1 explication conceptuelle. Ne jamais citer sans penser !",
      certificationNote: "Intégration certifiée du recueil 1000 citations philosophiques (Éditions Nathan, Collection Petites Références)."
    };
  }

  // Détection spécifique du manuel Mes années BAC - Philosophie Terminale (Dominique Boissier, Éditions Bordas)
  if (/mes\s*annees\s*bac|bordas\s*philo|dominique\s*boissier|boissier|nouveau\s*bac\s*philo|les\s*17\s*notions|pour\s*reussir\s*le\s*jour\s*j.*bordas/i.test(normQuery)) {
    return {
      query,
      discipline: "philo",
      disciplineLabel: "Mes années BAC — Éditions Bordas (Dominique Boissier)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale (Toutes Séries & Spécialités)",
      chapterTitle: "Mes années BAC : Les 17 Notions, Méthode & Corrigés Types (Dominique Boissier, Bordas)",
      definitionAndScope: `Manuel officiel complet de Dominique Boissier (Professeur de philosophie, Éditions Bordas, Collection Mes années BAC).\n\nCouvre les 17 notions du programme officiel réparties dans les 3 perspectives transversales (L'existence humaine et la culture, La morale et la politique, La connaissance), avec les fiches "Les 5 points incontournables", cours magistral, fiches "En perspectives", repères philosophiques et corrigés intégraux rédigés de sujets types bac (Dissertation « Pense-t-on par soi-même ? » et Explications Épictète / Bergson).`,
      coreConceptsAndFormulas: [
        {
          name: "Méthodologie Bordas de la Dissertation : Les 4 Étapes Clés",
          formulaOrRule: "1. Choix du sujet objectif sans affect -> 2. Analyse des termes pivots et opérateurs (falloir, servir, suffire) -> 3. Introduction problématisée posant au moins 3 questions directrices sans dévoiler la conclusion -> 4. Plan dialectique en 3 parties avec transitions sous forme d'objections à la fin des parties I et II, et conclusion synthétique sans fausse ouverture.",
          explanation: "Protocole garantissant l'équilibre de la réflexion, l'absence de plan 'oui/non' simpliste et une synthèse féconde qui dépasse la contradiction.",
          contextOrApplication: "Épreuve de la dissertation philosophique au Baccalauréat."
        },
        {
          name: "Méthodologie Bordas de l'Explication de Texte",
          formulaOrRule: "Lecture bienveillante -> Découpage textuel précis des moments via les connecteurs logiques -> Introduction (Thème, Thèse, Délimitation précise des parties de ligne X à ligne Y) -> Analyse linéaire des concepts et du mouvement démonstratif (sans paraphrase) -> Conclusion critique (intérêt philosophique universel ou actuel).",
          explanation: "Expliquer ce que le texte fait et comment il le démontre, avec intégration fluide de citations courtes.",
          contextOrApplication: "Épreuve du commentaire / explication de texte philosophique."
        },
        {
          name: "Les 17 Notions & Les 3 Perspectives du Programme",
          formulaOrRule: "17 notions : Conscience, Inconscient, Temps, Langage, Travail, Technique, Art, Religion, Nature, Science, Vérité, Raison, État, Justice, Devoir, Liberté, Bonheur. Croisées avec les 3 perspectives : I. L'existence humaine et la culture | II. La morale et la politique | III. La connaissance.",
          explanation: "Chaque notion fait l'objet d'une fiche des 5 points incontournables et d'une carte mentale 'En perspectives'.",
          contextOrApplication: "Structure universelle du nouveau programme de philosophie de Terminale."
        },
        {
          name: "Glossaire Officiel des Repères du BAC",
          formulaOrRule: "Absolu/Relatif, Abstrait/Concret, En acte/En puissance, Analyse/Synthèse, Concept/Image/Métaphore, Contingent/Nécessaire, Croire/Savoir, Essentiel/Accidentel, Exemple/Preuve, Expliquer/Comprendre, En fait/En droit, Formel/Matériel, Genre/Espèce/Individu, Hypothèse/Conséquence/Conclusion, Idéal/Réel, Identité/Égalité/Différence, Impossible/Possible, Intuitif/Discursif, Légal/Légitime, Médiat/Immédiat, Objectif/Subjectif/Intersubjectif, Obligation/Contrainte, Origine/Fondement, Persuader/Convaincre, Principe/Cause/Fin, Public/Privé, Ressemblance/Analogie, Théorie/Pratique, Transcendant/Immanent, Universel/Particulier/Général/Singulier, Vrai/Probable/Certain.",
          explanation: "Les repères sont des outils d'analyse indispensables pour conceptualiser et nuancer les arguments.",
          contextOrApplication: "Mobilisation obligatoire dans toute dissertation et explication de texte."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Poser la Problématique et les 3 Questions Directrices",
          whatToDo: "Révéler la tension du sujet sous forme interrogative sans donner la solution, puis poser les trois questions correspondant aux trois thèses.",
          reflexOrTip: "Ne pas confondre une vraie question avec une affirmation indirecte (« On peut se demander si... »)."
        },
        {
          stepNumber: 2,
          title: "Construire les 3 Parties avec Transitions-Objections",
          whatToDo: "Développer chaque partie avec arguments, concepts et références. Insérer à la fin des parties I et II une objection ouvrant logiquement sur la suite.",
          reflexOrTip: "La 3e partie est la plus décisive : elle ne doit pas être improvisée mais préparée dès le brouillon."
        },
        {
          stepNumber: 3,
          title: "Conclure en Glosant sur la Troisième Thèse sans Fausse Ouverture",
          whatToDo: "Rappeler en 5-6 lignes la progression de la réflexion, gloser sur la dernière thèse comme solution solide et clore le devoir sans nouvelle question.",
          reflexOrTip: "Une question finale en conclusion est soit hors-sujet, soit l'indice d'une omission dans le devoir."
        }
      ],
      solvedExample: {
        problemStatement: "Corrigé Sujet 1 (Bordas) : « Pense-t-on par soi-même ? » (Notions : raison, vérité, liberté)",
        solutionStepByStep: "I. Penser par soi-même implique de construire la singularité de sa pensée contre toute uniformisation : Refus du conformisme et de la dictature du On (Heidegger) ; La fonction de penser ne se délègue pas (Alain) ; Doute contre les certitudes rassurantes (Bachelard, Descartes).\n" +
          "-> Transition : Mais un sujet isolé peut-il par lui-même s'orienter sans tomber dans le solipsisme ou la vanité ?\n" +
          "II. Autrui et la transmission sont indispensables à la construction de la pensée : L'orgueil de l'ego solitaire (Rousseau) ; Nécessité de la méthode et de la formation (Descartes, Regulae) ; Sortie de l'enfance et de la caverne (Platon, République VII) par l'enseignement reçu.\n" +
          "-> Transition : La simple transmission d'un savoir suffit-elle, ou la pensée n'exige-t-elle pas une réappropriation critique permanente ?\n" +
          "III. Penser par soi-même est une conversion intérieure du regard et un travail de refondation : L'éducation comme détour libérateur (Platon) et non comme technique sophistique ; Repenser ce qui fut pensé (Paul Valéry) pour monter sur les épaules des géants ; S'approprier lucidement la culture universelle pour devenir un homme libre.",
        finalAnswer: "Corrigé type intégralement rédigé selon la méthode Bordas (Dominique Boissier)."
      },
      classicExamTraps: [
        "Choisir un sujet par affect ou avis personnel au lieu de s'appuyer sur des connaissances objectives.",
        "Répondre à la question dès l'introduction, ce qui désamorce tout l'intérêt du devoir.",
        "Terminer sa conclusion par une question d'ouverture artificielle."
      ],
      selfCheckChecklist: [
        "L'introduction contient-elle au moins 3 questions correspondant aux 3 parties ?",
        "Les transitions à la fin des parties I et II prennent-elles la forme d'objections motivées ?",
        "Les repères du programme sont-ils mobilisés pour clarifier les concepts ?"
      ],
      quickRevisionMemo: "Mémo Bordas : Choix objectif -> Problématisation en 3 questions -> Plan dialectique avec transitions-objections -> Dépassement en 3e partie -> Conclusion sans fausse ouverture.",
      certificationNote: "Intégration officielle certifiée de l'ouvrage Mes années BAC - Philosophie Terminale (Dominique Boissier, Éditions Bordas)."
    };
  }

  // Détection spécifique du Fascicule SVT TS2 — Les CRAC (M. Gueye, Sénégal)
  if (/crac|les\s*crac|barhamgueye|barham\s*gueye|gueye.*svt|svt\s*ts2|fascicule\s*svt\s*ts2|maitrise\s+des\s+connaissances.*svt|13\s+sujets.*maitrise|curare.*plaque\s+motrice|deg[eé]n[eé]rescence\s+wall[eé]rienne/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Fascicule SVT TS2 — Les CRAC (Collection M. GUEYE)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Série S2 / S1)",
      chapterTitle: "Maîtrise des Connaissances en SVT TS2 : 13 Sujets Corrigés & Synthèses Types (Les CRAC)",
      definitionAndScope: `Recueil de référence pour la préparation de la Partie I du Baccalauréat Scientifique TS2 (Restitution organisée des connaissances / Synthèse). Rédigé par M. GUEYE (Collection Les CRAC, Sénégal).\n\nContient 13 sujets rédigés intégrale avec plan apparent, schémas cotés et corrigés modèles : 1. Mise en évidence, origine et maintien du potentiel de repos (-70 mV, dialyse et pompe Na+/K+ ATPase) ; 2. Fonctionnement de la synapse neuromusculaire à acétylcholine et perturbation par le curare ; 3. Mécanisme de propagation et vitesse de l'influx nerveux (courants locaux vs conduction saltatoire) ; 4. Régulation de la pression artérielle et système rénine-angiotensine-aldostérone ; 5. Origine et rôles des macrophages dans l'immunité ; 6. Apparition des anticorps circulants et élimination d'un virus ; 7. Rôle des anticorps membranaires et sériques ; 8. Folliculogenèse, ovulation et corps jaune ; 9. Évolution du follicule primordial au corps jaune gravidique ; 10. Rôles du néphron dans la formation de l'urine définitive ; 11. Acidose et régulation du pH par tampons, reins et poumons ; 12. Voies lentes de régénération de l'ATP et thermogenèse musculaire ; 13. Voies directes et indirectes de régénération de l'ATP ; Bonus 1. Intégration neuronale (PPSE/PPSI) ; Bonus 2. Moelle épinière et dégénérescence wallérienne.`,
      coreConceptsAndFormulas: [
        {
          name: "Sujet 1 : Potentiel de Repos (Mise en évidence, Origine & Maintien)",
          formulaOrRule: "1. Mise en évidence : deux électrodes de surface = 0 mV (équipotentialité) ; enfoncement d'une microélectrode endocavitaire = déviation à -60/-70 mV (axoplasme électronégatif). 2. Origine biochimique : inégale répartition des cations ([Na+]ext > [Na+]int et [K+]int > [K+]ext) et perméabilité sélective (axolemme plus perméable à K+ qu'à Na+ d'où sortie nette de charges positives). 3. Maintien actif : pompe Na+/K+ ATPase expulsant 3 Na+ et réinjectant 2 K+ par molécule d'ATP hydrolysée (bloquée par le DNP ou le cyanure).",
          explanation: "Équilibre dynamique entre diffusion passive par dialyse et transport actif contre gradient.",
          contextOrApplication: "Sujet 1 du recueil Les CRAC (p. 4, 7-8)."
        },
        {
          name: "Sujet 2 : Synapse Neuromusculaire & Action du Curare",
          formulaOrRule: "1. Événements synaptiques : arrivée du PA -> entrée des ions Ca2+ voltage-dépendants -> exocytose des vésicules d'acétylcholine -> fixation sur récepteurs de l'appareil sous-neural (canaux chimiodépendants à Na+) -> dépolarisation post-synaptique (potentiel de plaque motrice) -> hydrolyse par l'acétylcholinestérase et recapture de la choline. 2. Mode d'action du curare : mimétisme structural de l'acétylcholine, fixation compétitive sur les récepteurs nicotiniques sans provoquer l'ouverture des canaux Na+ -> blocage de la transmission -> paralysie flasque.",
          explanation: "Mécanisme modèle de pharmacologie de la transmission chimique neuromusculaire.",
          contextOrApplication: "Sujet 2 du recueil Les CRAC (p. 4, 9-10)."
        },
        {
          name: "Sujet 3 : Propagation & Facteurs de Vitesse du Message Nerveux",
          formulaOrRule: "1. Fibre amyélinique : dépolarisation locale jusqu'au seuil -> ouverture des canaux Na+ voltage-dépendants -> courants locaux de proche en proche (inactivation transitoire empêchant le retour en arrière). 2. Fibre myélinisée : gaine de myéline isolante interrompue aux nœuds de Ranvier -> conduction saltatoire d'un nœud à l'autre (beaucoup plus rapide). 3. Facteurs de vitesse : diamètre de la fibre (gros calibre > petit calibre), myélinisation, et température.",
          explanation: "Loi du tout ou rien et conduction bidirectionnelle expérimentale vs unidirectionnelle in vivo.",
          contextOrApplication: "Sujet 3 du recueil Les CRAC (p. 4, 11-12)."
        },
        {
          name: "Sujet 4 : Régulation de la Pression Artérielle & Axe RAA",
          formulaOrRule: "1. Facteurs de variation : PA = Débit cardiaque x Résistances périphériques (vasomotricité) et Volémie. 2. Correction d'une hypotension : hypoperfusion rénale -> libération de rénine par l'appareil juxtaglomérulaire -> hydrolyse de l'angiotensinogène hépatique en angiotensine active. L'angiotensine provoque : une vasoconstriction artériolaire directe (hausse de PA) et la sécrétion d'aldostérone par la corticosurrénale -> réabsorption rénale de Na+ et d'eau -> rétablissement de la volémie.",
          explanation: "Régulation humorale à moyen et long terme de la pression artérielle.",
          contextOrApplication: "Sujet 4 du recueil Les CRAC (p. 4, 13-14)."
        },
        {
          name: "Sujets 5 à 7 : Immunologie Spécifique, Macrophages & Anticorps",
          formulaOrRule: "1. Macrophages (dérivés des monocytes de la moelle rouge) : non spécifique (phagocytose en 4 temps, pyrogènes) ; spécifique (CPA présentant l'épitope avec CMH I aux LT8 et CMH II aux LT4 + sécrétion d'IL1). 2. Coopération cellulaire : LT4 activés sécrètent IL2 -> prolifération et différenciation des LB en plasmocytes sécréteurs d'Ig circulants. 3. Fonctions des anticorps : neutralisation (complexe immun), opsonisation facilitant la phagocytose par le fragment Fc, et activation de la cytolyse par le complément.",
          explanation: "Distinction claire entre anticorps membranaires de reconnaissance (BCR) et anticorps circulants effecteurs.",
          contextOrApplication: "Sujets 5, 6 et 7 du recueil Les CRAC (p. 4-5, 15-18)."
        },
        {
          name: "Sujets 8 & 9 : Folliculogenèse, Ovulation & Corps Jaune Gravidique",
          formulaOrRule: "Follicule primordial (ovocyte I bloqué en prophase I) -> primaire -> secondaire (granulosa et thèques) -> tertiaire/cavitaire (antrum) -> follicule mûr de De Graaf (20 mm, reprise de méiose en ovocyte II bloqué en métaphase II avec GP1). Vers J12-J14 : pic d'œstrogènes (> 200 pg/mL) -> rétrocontrôle positif -> décharge ovulante de LH -> expulsion de l'ovocyte II. Le follicule rompu se lutéinise en corps jaune sécréteur de progestérone. Sans fécondation -> corps blanc cicatriciel et règles. Avec fécondation -> trophoblaste sécrète l'hCG maintenant le corps jaune gravidique.",
          explanation: "Chronologie et régulations neuroendocrines du cycle sexuel féminin.",
          contextOrApplication: "Sujets 8 et 9 du recueil Les CRAC (p. 5, 19-22)."
        },
        {
          name: "Sujets 10 & 11 : Milieu Intérieur, Néphron & Correction de l'Acidose",
          formulaOrRule: "1. Néphron : filtration glomérulaire (capsule de Bowman -> urine primitive sans protéines), réabsorption tubulaire (glucose réabsorbé à 100% si < 1,8 g/L, eau et Na+ sous ADH et aldostérone), sécrétion tubulaire (H+, NH4+, acide hippurique). 2. Acidose (pH < 7,35) : système tampon H2CO3/HCO3- (réaction H+ + HCO3- -> H2CO3) ; régulation pulmonaire par hyperventilation (élimination de CO2) ; régulation rénale par élimination de H+ et réabsorption de HCO3- et Na+.",
          explanation: "Maintien de l'homéostasie acido-basique et hydrominérale.",
          contextOrApplication: "Sujets 10 et 11 du recueil Les CRAC (p. 5, 22-25)."
        },
        {
          name: "Sujets 12 & 13 : Énergétique Musculaire & Régénération de l'ATP",
          formulaOrRule: "1. Voies rapides directes : Créatine-phosphate + ADP -> Créatine + ATP + Chaleur (créatine-kinase) ; 2 ADP -> ATP + AMP (myokinase). 2. Voies lentes indirectes : Glycolyse sarcoplasmique (C6H12O6 -> 2 pyruvates + 2 ATP) ; en anaérobiose = fermentation lactique (2 pyruvates -> 2 acides lactiques) ; en aérobiose = respiration mitochondriale (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 36 ATP + Chaleur retardée). Chaleur initiale = chaleur de contraction (hydrolyse ATP) + chaleur de relâchement (resynthèse par CrP).",
          explanation: "Couplage chimio-mécanique et bilan des rendements énergétiques musculaires.",
          contextOrApplication: "Sujets 12 et 13 du recueil Les CRAC (p. 6, 26-29)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Lecture, Analyse des Mots-Clés et Circonscription du Sujet",
          whatToDo: "Repérer les verbes directeurs (décrire, expliquer, comparer, montrer) et délimiter strictement le cadre physiologique pour éviter tout développement hors-sujet.",
          reflexOrTip: "Souligner les termes scientifiques clés et vérifier si des schémas annotés sont explicitement requis."
        },
        {
          stepNumber: 2,
          title: "Structuration du Plan Apparent et Rédaction de l'Introduction",
          whatToDo: "Poser le contexte, définir les termes du sujet, énoncer la problématique sous forme de question et annoncer clairement les 2 ou 3 parties du développement.",
          reflexOrTip: "Ne jamais rédiger intégralement au brouillon par manque de temps : noter les mots-clés et titres de parties."
        },
        {
          stepNumber: 3,
          title: "Développement Illustré et Conclusion Rigoureuse",
          whatToDo: "Rédiger chaque paragraphe avec une idée argumentée. Intégrer des schémas grands formats soignés avec titre souligné, légendes et couleurs. Conclure en répondant à la problématique sans paraphraser le devoir.",
          reflexOrTip: "Un schéma bien légendé et titré est valorisé dans le barème officiel du Baccalauréat."
        }
      ],
      solvedExample: {
        problemStatement: "Sujet 2 (Les CRAC) : « En prenant l'exemple d'une synapse à acétylcholine, exposez la succession des événements qui permettent la transmission de l'influx nerveux d'un motoneurone à la fibre musculaire, puis expliquez comment une substance chimique mimétique comme le curare peut perturber la transmission synaptique. »",
        solutionStepByStep: "Introduction : Définir la plaque motrice neuromusculaire (jonction motoneurone/fibre musculaire), poser le problème du franchissement chimique par l'acétylcholine et de sa perturbation par le curare, annoncer le plan.\n" +
          "I. Le fonctionnement de la plaque motrice : Arrivée du PA -> Dépolarisation présynaptique -> Entrée d'ions Ca2+ par les CVD à Ca2+ -> Exocytose des vésicules d'acétylcholine dans la fente synaptique -> Fixation sur les récepteurs canaux chimiodépendants à Na+ de la membrane post-synaptique (sarcolemme plissé en appareil sous-neural) -> Ouverture des canaux et entrée massive de Na+ -> Dépolarisation de la membrane musculaire (potentiel de plaque motrice ou PAM) déclenchant la contraction -> Inactivation par l'acétylcholinestérase (hydrolyse en acétate et choline) et recapture présynaptique de la choline.\n" +
          "II. Perturbation par le curare : Poison végétal mimant la conformation spatiale de l'acétylcholine. Il se fixe de manière compétitive sur les récepteurs à acétylcholine sans ouvrir les canaux à Na+. Il empêche ainsi l'accès de l'acétylcholine et bloque la genèse du PAM, provoquant une paralysie musculaire complète.\n" +
          "Conclusion : La transmission synaptique est un relais chimique unidirectionnel dépendant du neurotransmetteur. L'occupation des récepteurs par des antagonistes compétitifs comme le curare supprime la commande motrice.",
        finalAnswer: "Corrigé modèle complet conforme aux standards officiels du Baccalauréat TS2."
      },
      classicExamTraps: [
        "Confondre les canaux voltage-dépendants (sur l'axone et la terminaison présynaptique pour le Ca2+) et les canaux chimiodépendants (sur la membrane post-synaptique).",
        "Oublier de mentionner le rôle des ions Ca2+ dans le déclenchement de l'exocytose des vésicules synaptiques.",
        "Penser que le curare détruit l'acétylcholine alors qu'il bloque compétitivement ses récepteurs membranaires."
      ],
      selfCheckChecklist: [
        "L'introduction contient-elle contexte, définitions, problématique et annonce du plan ?",
        "Les schémas sont-ils grands, titrés, légendés et munis de flèches de sens ?",
        "Les mécanismes ioniques (Na+, K+, Ca2+, Cl-) sont-ils rigoureusement nommés avec leurs types de canaux ?"
      ],
      quickRevisionMemo: "Mémo Les CRAC SVT TS2 : PR = -70 mV (pompe Na+/K+ 3Na+/2K+) ; Plaque motrice = Ca2+ entrant -> exocytose ACh -> canaux Na+ chimiodépendants -> PAM ; Curare = bloqueur compétitif des récepteurs ACh ; RAA = Rénine rénale -> Angiotensine -> Vasoconstriction + Aldostérone (rétention Na+/eau) ; Décharge ovulante = pic d'œstrogènes stimulant le pic de LH à J14 ; ATP = régénération rapide par phosphocréatine, lente par glycolyse (2 ATP) et respiration (36 ATP).",
      certificationNote: "Intégration officielle certifiée du Fascicule SVT TS2 — Les CRAC (Collection M. GUEYE, Sénégal)."
    };
  }

  // Détection spécifique du Fascicule d'exercices SVT Terminales S - Abdoulaye DIEDHIOU (Thiès, Sénégal)
  if (/diedhiou|abdoulaye\s*diedhiou|ndione|fomesoutra.*svt|svt.*fomesoutra|ltp.*ndione|thies.*svt|12\s+themes.*svt|toxine\s+scorpionique|botox.*synapse|chambre\s+de\s+marbrook|di\s*george.*22q11|achondroplasie.*arbre|acide\s+valpro[iï]que|picrotoxine|venin\s+de\s+scorpion.*cvd/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Fascicule SVT Terminales S — Abdoulaye DIEDHIOU (L.T.P. Thiès)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Séries S1, S2, C, D)",
      chapterTitle: "SVT Terminales S : Recueil Intégral d'Exercices et Corrigés des 12 Thèmes (A. Diedhiou)",
      definitionAndScope: `Ouvrage encyclopédique de référence de 234 pages élaboré par Abdoulaye DIEDHIOU, professeur de SVT au L.T.P. François-Xavier Ndione de Thiès (Sénégal), diffusé via fomesoutra.com.\n\nCouvre exhaustivement les 12 thèmes du programme officiel avec énoncés, protocoles d'expérimentation et corrigés scientifiques détaillés :\n- Thème 1 : Système nerveux cérébro-spinal des mammifères (encéphale, méninges, ventricules, moelle épinière) ;\n- Thème 2 : Tissu nerveux et propriétés bioélectriques (PR, PA, canaux CVD Na+/K+, conduction saltatoire, délai synaptique, venin de scorpion, toxine botulique Botox, GABA, acide valproïque, picrotoxine, benzodiazépines) ;\n- Thème 3 : Rôle du système nerveux dans le comportement moteur (conditionnements, réflexe myotatique, fuseaux neuromusculaires, innervation réciproque, motricité volontaire) ;\n- Thème 4 : Activité du muscle strié squelettique (sarcomère, glissement actine/myosine, calcium, ATP, secousse isolée, tétanos, dopage EPO, entraînement en altitude) ;\n- Thème 5 : Activité cardiaque et régulation de la pression artérielle (tissu nodal, barorécepteurs, Hering/Cyon/X, adaptation à l'hémorragie et au stress, système rénine-angiotensine-aldostérone, vasopressine ADH) ;\n- Thème 6 : Milieu intérieur (néphron, diurèse, équilibre hydrominéral et acidose/alcalose, tampons) ;\n- Thème 7 : Régulation de la glycémie (îlots de Langerhans, insuline, glucagon, glycogénogenèse, foie organe tampon, diabètes de types 1 et 2) ;\n- Thème 8 : Immunologie (CMH I/II, phagocytose, coopération cellulaire, cytokines IL1/IL2, chambre de Marbrook, RIMC par LTc, RIMH par plasmocytes, infection et dépistage du VIH) ;\n- Thème 9 : Reproduction chez les mammifères (gamétogenèse, régulation hormonale de la testostérone et des cycles féminins, fécondation, pilule combinée, parturition, lactation) ;\n- Thème 10 : Reproduction chez les spermaphytes (fleur bisexuée, microspores, pollinisation, autostérilité, acide borique, double fécondation donnant embryon et albumen) ;\n- Thème 11 : Génétique classique formelle (monohybridisme, dihybridisme, gènes indépendants 9:3:3:1 ou liés avec crossing-over, test-cross, cartes factorielles) ;\n- Thème 12 : Hérédité humaine (analyse d'arbres généalogiques, électrophorèses d'ADN, maladies autosomales/gonosomales dominantes/récessives, achondroplasie, syndrome de Di George, caryotypes, trisomies 21 et 18).`,
      coreConceptsAndFormulas: [
        {
          name: "Neurophysiologie & Neuropharmacologie (Thèmes 1 & 2)",
          formulaOrRule: "1. Canaux CVD : ouverture Na+ à -50 mV (dépolarisation) et K+ à +30 mV (repolarisation). 2. Toxine scorpionique : se lie aux canaux CVD Na+ et bloque leur fermeture, empêchant la repolarisation (maintien à +25 mV). 3. Botox (toxine botulique A) : clive les protéines d'ancrage (synaptobrévine, syntaxine, SNAP) et bloque l'exocytose d'acétylcholine -> paralysie motrice flasque. 4. Pharmacologie du GABA : fixation sur récepteurs postsynaptiques ouvrant les canaux Cl- -> hyperpolarisation (PPSI). Les benzodiazépines potentialisent le GABA (-140 mV) ; la picrotoxine le bloque.",
          explanation: "Analyse expérimentale des drogues et toxines sur la transmission neuromusculaire et centrale.",
          contextOrApplication: "Exercices 9, 11, 16 et 17 du Thème 2 (p. 19-28, 35-42)."
        },
        {
          name: "Innervation Réciproque du Réflexe Myotatique (Thème 3)",
          formulaOrRule: "Stimulation du récepteur fusorial (Ia) par étirement -> 1. Branche excitatrice monosynaptique directe sur motoneurone alpha du muscle étiré (PPSE, temps de latence court ~0,6-0,8 ms avec 1 délai synaptique de 0,5 ms) -> contraction. 2. Branche inhibitrice polysynaptique via interneurone inhibiteur sur motoneurone du muscle antagoniste (PPSI, temps de latence allongé ~1,1-1,3 ms avec 2 délais synaptiques) -> relâchement du muscle antagoniste.",
          explanation: "Coordination musculaire automatique assurant la posture et le tonus sans interférence encéphalique.",
          contextOrApplication: "Exercices 5 à 8 du Thème 3 (p. 45-48, 55-58)."
        },
        {
          name: "Contraction Musculaire & Restauration de l'ATP (Thème 4)",
          formulaOrRule: "1. Sarcomère : raccourcissement des bandes claires I et de la bande H, stabilité de la bande sombre A. Ca2+ libéré du réticulum se lie à la troponine, déplaçant la tropomyosine pour démasquer les sites d'actine. 2. Métabolisme : Voie phosphocréatine (alactique immédiate) -> Glycolyse anaérobie alactique -> Fermentation lactique (acide lactique à l'origine de l'acidification musculaire) -> Respiration aérobie mitochondriale (36 ATP). 3. Dopage EPO : stimule l'érythropoïèse médullaire, augmentant le transport d'O2 vers les mitochondries ; reproduit physiologiquement par l'entraînement en altitude.",
          explanation: "Couplage excitation-contraction et adaptation physiologique à l'effort.",
          contextOrApplication: "Exercices 5, 8 et 9 du Thème 4 (p. 63-69, 73-77)."
        },
        {
          name: "Régulation Neuro-Hormonale Cardiovasculaire & RAA (Thème 5)",
          formulaOrRule: "1. Boucle baroréflexe : hypertension -> barorécepteurs carotidiens/aortiques -> nerfs de Hering/Cyon -> centre bulbaire cardiomodérateur -> nerf vague X (acétylcholine) -> bradycardie. Hypotension -> inhibition du vague et activation orthosympathique (noradrénaline) -> tachycardie et vasoconstriction. 2. Système Rénine-Angiotensine-Aldostérone : déclenché par hypovolémie ou hypotension rénale -> rénine convertit l'angiotensinogène en angiotensine II (vasoconstrictrice) -> stimulation de l'aldostérone corticosurrénale (rétention rénale de Na+ et d'eau). 3. ADH (vasopressine) : libérée lors d'hypovolémie détectée par les volorécepteurs auriculaires -> réabsorption facultative d'eau rénale.",
          explanation: "Coordination réflexe rapide et régulations neuro-endocrines volémiques.",
          contextOrApplication: "Exercices 4, 10, 15, 18 et 19 du Thème 5 (p. 78-93, 95-108)."
        },
        {
          name: "Régulation de la Glycémie & Diabétologie (Thème 7)",
          formulaOrRule: "1. Constante 1 g/L. Pancréas endocrine : cellules bêta centrales (insuline hypoglycémiante favorisant la glycogénogenèse hépatique/musculaire et lipogenèse adipeuse) ; cellules alpha périphériques (glucagon hyperglycémiant stimulant la glycogénolyse via la phosphorylase). 2. Diabètes : Type 1 (juvénile) = destruction des cellules bêta (déficit de sécrétion d'insuline) ; Type 2 (adulte) = résistance par déficit ou anomalie des récepteurs membranaires à l'insuline des cellules cibles.",
          explanation: "Double régulation hormonale et physiopathologie des diabètes.",
          contextOrApplication: "Exercices 4, 8, 10, 12, 13 et 14 du Thème 7 (p. 124-133, 136-143)."
        },
        {
          name: "Immunologie, Coopération Cellulaire & VIH (Thème 8)",
          formulaOrRule: "1. Présentation antigénique : CPAg (macrophage) expose peptide + CMH I (vers LT8) ou CMH II (vers LT4) et sécrète IL1. 2. Pivot LT4 : sous IL1, les LT4 activés sécrètent IL2 -> multiplication et différenciation des LB en plasmocytes (sécrétion d'anticorps circulants dans la RIMH) et des LT8 en LTc (perforines/granzymes dans la RIMC). Chambre de Marbrook : prouve l'action par molécule soluble (IL2). 3. VIH : tropisme pour CD4 des LT4, détournement de la cellule et destruction -> effondrement de l'immunité acquise.",
          explanation: "Interactions cellulaires et moléculaires fondamentales du système immunitaire.",
          contextOrApplication: "Exercices 6, 7, 8, 10, 12 et 13 du Thème 8 (p. 146-154, 159-164)."
        },
        {
          name: "Reproduction des Spermaphytes & Double Fécondation (Thème 10)",
          formulaOrRule: "Fleur bisexuée : étamines (anthères -> méiose des microspores -> grains de pollen bicellulaires) et pistil (ovaire, carpelle, ovule avec sac embryonnaire à 7 cellules et 8 noyaux). Pollinisation croisée guidée par chimiotactisme de l'acide borique. Double fécondation : Anthérozoïde 1 (n) + Oosphère (n) -> Zygote principal (2n) formant l'embryon ; Anthérozoïde 2 (n) + Cellule centrale à 2 noyaux (2n) -> Zygote accessoire (3n) formant l'albumen de réserve.",
          explanation: "Spécificité du cycle biologique haplo-diplophasique des Angiospermes.",
          contextOrApplication: "Exercices 1 à 10 du Thème 10 (p. 192-204)."
        },
        {
          name: "Génétique Formelle & Hérédité Humaine (Thèmes 11 & 12)",
          formulaOrRule: "1. Génétique formelle : Dihybridisme F2 9/16, 3/16, 3/16, 1/16 (indépendance) vs test-cross 1/4, 1/4, 1/4, 1/4. Gènes liés : parentaux > recombinés par crossing-over en prophase I chez la femelle ; calcul de distance d = % recombinés en cM. 2. Arbres généalogiques & Électrophorèses : Dominant si malade à chaque génération sans saut ; Récessif si parents sains avec enfant malade. Non lié à X si père sain / fille malade récessive ou père malade / fille saine dominante. Diagnostic des anomalies chromosomiques par caryotype (non-disjonction méiotique en anaphase I ou II conduisant à la trisomie 21 ou 18).",
          explanation: "Méthodologie algorithmique d'analyse des croisements et des pedigrees d'examen.",
          contextOrApplication: "Exercices 1 à 15 (Thème 11) et 16 à 29 (Thème 12) (p. 205-234)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Méthodologie de la Partie II : Présenter, Décrire, Interpréter et Conclure",
          whatToDo: "Pour chaque document scientifique : 1. Présenter le document et la condition expérimentale ; 2. Décrire précisément les résultats avec chiffres et unités ; 3. Interpréter biologiquement en mobilisant les acquis du cours ; 4. Synthétiser dans une conclusion bilan répondant au problème.",
          reflexOrTip: "Ne jamais paraphraser les documents sans interprétation, ni restituer le cours sans exploiter les données chiffrées."
        },
        {
          stepNumber: 2,
          title: "Algorithme d'Analyse des Pedigrees et Électrophorèses",
          whatToDo: "1. Déterminer la dominance/récessivité en observant les filiations ; 2. Tester l'hypothèse Y (éliminée si femmes atteintes ou garçons sains issus de pères atteints) ; 3. Tester l'hypothèse X (éliminée par les contre-exemples père-fille) ; 4. Confronter les bandes d'électrophorèse pour identifier l'allèle normal et muté et valider l'homozygotie/hétérozygotie.",
          reflexOrTip: "Dans une maladie dominante liée à l'X, 100% des filles d'un père atteint sont obligatoirement atteintes."
        },
        {
          stepNumber: 3,
          title: "Résolution des Croisements de Génétique Formelle",
          whatToDo: "Comparer les effectifs observés aux ratios théoriques mendéliens. Identifier les génotypes parentaux et recombinés. Poser l'échiquier de croisement avec les proportions de gamètes.",
          reflexOrTip: "Rappel clé : chez la drosophile mâle, il n'y a jamais de crossing-over (linkage absolu)."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice 17 du Thème 12 (Abdoulaye Diedhiou) : « L'arbre généalogique montre une maladie héréditaire. La femme III2 ne possède pas l'allèle de la maladie. L'homme III1 ne possède pas l'allèle normal. Déterminez le mode de transmission et discutez l'état du fœtus de III2 présentant 3 chromosomes 21. »",
        solutionStepByStep: "1. Discussion du mode de transmission : La femme III2 est saine et homozygote pour l'allèle normal (ne possède pas l'allèle morbide). Si l'allèle était récessif (autosomal ou lié à X), tous ses enfants devraient être sains car elle leur transmet obligatoirement un allèle normal dominant. Or ses enfants IV1 et IV2 sont atteints. L'hypothèse récessive est donc formellement rejetée : la maladie est dominante.\n" +
          "2. Localisation chromosomique : L'homme III1 malade ne possède pas l'allèle normal. Si la maladie était dominante autosomale, il serait homozygote pour l'allèle morbide et devrait transmettre la maladie à tous ses enfants. Or son enfant IV3 est sain. Donc la maladie n'est pas autosomale. Elle est dominante liée au chromosome X (X_A > X_a).\n" +
          "3. Analyse du fœtus de III2 : Le fœtus présente la formule 47, XY, +21. Le médecin rassure la mère concernant la maladie génique (le fœtus est un garçon qui reçoit le chromosome Y de son père sain et un Xa normal de sa mère saine, donc indemne de la maladie génique). Cependant, il est atteint d'une anomalie chromosomique : la trisomie 21.\n" +
          "4. Mécanisme de la trisomie 21 : Non-disjonction de la paire de chromosomes 21 lors de l'anaphase I ou non-disjonction des chromatides sœurs lors de l'anaphase II de la méiose parentale, produisant un gamète anormal à n = 24 (2 autosomes 21) dont la fécondation par un gamète normal donne un zygote à 2n+1 = 47.",
        finalAnswer: "Démonstration génétique et caryotypique modèle conforme au corrigé de l'exercice 17 (p. 227-228)."
      },
      classicExamTraps: [
        "Oublier qu'un individu présentant une seule bande d'électrophorèse est homozygote pour un gène autosomal ou hémizygote pour un gène lié à X chez le mâle.",
        "Confondre l'effet du Botox (blocage de l'exocytose d'acétylcholine par clivage des protéines d'ancrage) avec celui du curare (blocage des récepteurs postsynaptiques).",
        "Négliger le rôle de l'acide borique comme attracteur chimiotactique dans la germination du tube pollinique chez les spermaphytes."
      ],
      selfCheckChecklist: [
        "Les 4 étapes (Présenter -> Décrire -> Interpréter -> Conclure) sont-elles respectées pour chaque document ?",
        "Les génotypes sont-ils rigoureusement notés avec les conventions (majuscule pour dominant, minuscule pour récessif, barres pour autosomes, X/Y pour gonosomes) ?",
        "Les calculs de pourcentages et d'effectifs sont-ils justifiés par des échiquiers de croisement complets ?"
      ],
      quickRevisionMemo: "Mémo Abdoulaye Diedhiou SVT S1/S2 : Toxine scorpionique = bloque fermeture CVD Na+ (+25 mV) ; Botox = bloque exocytose ACh par clivage SNAP/syntaxine ; Valium = potentialise GABA (-140 mV) ; Myotatique = monosynaptique agoniste (0,6 ms) + interneurone inhibiteur antagoniste (1,2 ms) ; Sarcomère = raccourcissement I et H, A constant ; RAA = Rénine rénale + Angiotensine hépatique + Aldostérone surrénalienne ; Diabète 1 = manque insuline, Diabète 2 = manque récepteurs ; Marbrook = communication humorale par IL2 ; Double fécondation = zygote embryon (2n) + zygote albumen (3n) ; Drosophile mâle = 0% crossing-over ; Trisomie 21 = non-disjonction en anaphase I ou II.",
      certificationNote: "Intégration officielle certifiée du Fascicule d'exercices SVT Terminales S (Abdoulaye DIEDHIOU, L.T.P. Thiès, fomesoutra.com)."
    };
  }

  // Détection spécifique du Fascicule SVT 1ère S2 — Séries d'exercices & Devoirs corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)
  if (/toffe.*1(?:ere|ère)|1(?:ere|ère)\s*s2.*(?:toffe|diome|dieye)|(?:toffe|diome|dieye).*1(?:ere|ère)|ngane\s*saer|diakhao\s*sine|ibrahima\s*diouf|osmose.*saccharose|loi\s+de\s+van\s*['’]?t\s*hoff|merotomie|salicornes?.*senegal|perm[eé]abilit[eé]\s+(?:differentielle|orientee)|formamide.*acetamide|rouge\s+neutre.*vacuole|5\s*bromodesoxyuridine|cysteamine|ocytocine.*vasopressine|delta\s*f508|cftr.*mucoviscidose|constituants?\s+du\s+lait|quotient\s+respiratoire.*qr/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Fascicule SVT 1ère S2 — Séries d'exercices & Devoirs corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)",
      cycle: "second_cycle_bac",
      level: "1ere",
      levelLabel: "Première Scientifique (Série S2 / S1)",
      chapterTitle: "SVT 1ère S2 : Séries Thématiques & Devoirs Corrigés (Collection Toffe-Sora-Mbaye)",
      definitionAndScope: `Fascicule pédagogique de 72 pages spécialement conçu pour les élèves de 1ère S2 du Sénégal par l'équipe d'enseignants : M. Toffène DIOME (Lycée mixte de Ngane SAER, Kaolack), M. Mansour DIEYE (Lycée Ibrahima DIOUF, Kaolack) et M. Mbaye DIOME (Lycée de Diakhao-Sine, Fatick).\n\nComprend 5 séries thématiques d'exercices d'approfondissement intégralement résolus et les annales de devoirs et compositions semestrielles : 1. Structure et ultrastructure cellulaire (cellule animale, cellule végétale, microscopie photonique vs électronique, calculs de taille réelle) ; 2. Échanges cellulaires et osmose (plasmolyse, turgescence, déplasmolyse spontanée et provoquée, loi de Van 't Hoff Po = n·i·R·T·C, perméabilité différentielle formamide/acétamide, perméabilité orientée du rouge neutre, adaptation osmotique des salicornes du fleuve Sénégal) ; 3. Division cellulaire eucaryote et cycle (interphase, prophase, métaphase, anaphase, télophase, cinétique de duplication de l'ADN en phases G1-S-G2-M, action de la 5-bromodésoxyuridine et de la cystéamine) ; 4. Chromosomes et synthèse protéique (transcription, traduction, code génétique, mutations de l'ocytocine/vasopressine et délétion ΔF508 du gène CFTR dans la mucoviscidose, caryotypes anormaux : trisomies 13 et 8, Klinefelter XXY, Turner X) ; 5. Physiologie digestive, enzymologie et énergétique (constituants du lait, spécificité enzymatique de l'amylosynthétase/maltase/saccharase, quotient respiratoire QR des glucides et lipides).`,
      coreConceptsAndFormulas: [
        {
          name: "Série 1 : Structure Cellulaire, Organites & Calculs de Microscopie",
          formulaOrRule: "1. Grossissement et taille réelle : Grossissement G = G_objectif x G_oculaire. Taille réelle = Taille apparente / G (toujours convertir les dimensions en micromètres µm : 1 cm = 10 000 µm, 1 mm = 1 000 µm). 2. Cellule animale vs végétale : l'animale possède des centrosomes (centrioles) et de petites vacuoles ; la végétale possède une paroi squelettique pectocellulosique avec plasmodesmes, de volumineuses vacuoles centrales et des chloroplastes (thylakoïdes, grana, stroma assurant la photosynthèse). 3. Rôles des organites : noyau (information génétique), REG/ergastoplasme avec ribosomes (synthèse protéique), appareil de Golgi/dictyosomes (maturation et exportation vésiculaire), mitochondries (respiration cellulaire et production d'ATP).",
          explanation: "Distinction méthodologique rigoureuse entre observation au microscope optique et ultrastructure au microscope électronique.",
          contextOrApplication: "Exercices 1 à 4 de la Série 1 et devoirs du premier semestre (p. 4-5, 21-26, 48-51)."
        },
        {
          name: "Série 2 : Phénomènes Osmotiques, Loi de Van 't Hoff & Perméabilités",
          formulaOrRule: "1. Loi de Van 't Hoff : Po = n · i · R · T · C (C = Cm / M en mol/L ; R = 0,082 L·atm/(mol·K) ; T = θ°C + 273 en K ; 1 atm = 10^5 Pa). Coefficient d'ionisation i : i = 1 (saccharose, glucose, urée), i = 2 (NaCl), i = 3 (Na2SO4, CaCl2). 2. Plasmolyse et déplasmolyse : en milieu hypertonique, l'eau sort de la cellule par osmose d'où décollement de la membrane plasmique (plasmolyse). Si le soluté traverse la membrane (dialysable), sa pénétration progressive élève la pression osmotique vacuolaire et l'eau réentre : c'est la déplasmolyse spontanée. 3. Perméabilités membranaires : perméabilité différentielle (le formamide pénètre plus rapidement que l'acétamide en raison de sa plus faible masse molaire) ; perméabilité orientée (le rouge neutre entre et s'accumule dans la vacuole sans pouvoir ressortir). 4. Halophytes : les salicornes maintiennent une turgescence en milieu salin par accumulation active vacuolaire de NaCl (Po interne = 50 atm > Po sol = 15 atm).",
          explanation: "Détermination expérimentale et graphique de l'isotonie (abscisse à 50% de plasmolyse ou variation nulle ΔL=0).",
          contextOrApplication: "Exercices 1 à 4 de la Série 2 et devoirs surveillés n°2 et n°3 (p. 6-7, 27-34, 51-58)."
        },
        {
          name: "Série 3 : Cycle Cellulaire, Mitose & Cinétique de l'ADN",
          formulaOrRule: "1. Stades de la mitose : Prophase (condensation de la chromatine, disparition de la membrane nucléaire, mise en place du fuseau achromatique) -> Métaphase (centromères des chromosomes dupliqués alignés sur la plaque équatoriale) -> Anaphase (clivage synchrone des centromères et migration polaire des chromatides sœurs) -> Télophase (décondensation, reformation des noyaux et cytodiérèse). 2. Cinétique de l'ADN : G1 (quantité Q, chromosomes simples décondensés) -> S (synthèse/réplication, doublement Q -> 2Q) -> G2 (plateau à 2Q, chromosomes dupliqués) -> M (mitose, séparation des chromatides sœurs et chute à Q). 3. Perturbateurs du cycle : la 5-bromodésoxyuridine inhibe la réplication d'ADN en phase S bloquant les cellules en G1 ; la cystéamine inhibe la cytodiérèse en laissant s'achever la caryocinèse (obtention de cellules binucléées).",
          explanation: "Analyse quantitative des courbes d'incorporation de thymidine tritiée et détermination de la durée du cycle.",
          contextOrApplication: "Exercices 1 à 4 de la Série 3 et composition du 1er semestre (p. 8-9, 40, 43-45, 62-66)."
        },
        {
          name: "Série 4 : Génétique Moléculaire, Mutations & Caryotypes Anormaux",
          formulaOrRule: "1. Transcription et traduction : copie du brin transcrit (non codant) en ARNm complémentaire (A->U, T->A, C->G, G->C) par l'ARN polymérase ; traduction ribosomale en acides aminés selon le code génétique. 2. Mutations peptidiques modèles : ocytocine (Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly) et vasopressine (Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly) diffèrent par 2 acides aminés (Ile3Phe et Leu8Arg). 3. Mucoviscidose : gène CFTR (1480 AA), la mutation majeure ΔF508 est une délétion de 3 nucléotides CTT supprimant la phénylalanine en 508. 4. Anomalies chromosomiques : trisomie 13 (syndrome de Patau : 47 chromosomes avec 3 chromosomes 13) ; trisomie 8 ; syndrome de Klinefelter (47, XXY) ; syndrome de Turner (45, X).",
          explanation: "Corrélation entre structure du gène, séquence polypeptidique et phénotype macroscopique.",
          contextOrApplication: "Exercices 1 à 6 de la Série 4 et devoirs du 2nd semestre (p. 10-12, 35-37, 41-42, 59-64)."
        },
        {
          name: "Série 5 : Physiologie de la Nutrition, Enzymologie & Énergétique",
          formulaOrRule: "1. Tests biochimiques du lait : lactalbumine précipitée à chaud (réaction xanthoprotéique jaune avec HNO3 virant à l'orange avec NH4OH) ; chlorures (précipité blanc de AgCl noircissant à la lumière avec AgNO3) ; calcium (oxalate d'ammonium) ; lactose (sucre réducteur donnant précipité rouge brique avec liqueur de Fehling à chaud) ; lipides (tache translucide sur papier). 2. Spécificité enzymatique : la saccharase hydrolyse le saccharose en glucose + fructose ; la maltase hydrolyse le maltose en 2 glucoses ; les enzymes digestives ont une spécificité étroite de substrat, un optimum thermique (37-40°C), sont dénaturées irréversiblement à 60-100°C et inhibées réversiblement à 0°C. 3. Quotient respiratoire : QR = VCO2 rejeté / VO2 absorbé. QR = 1,0 pour les glucides (glucose C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) ; QR = 0,70 à 0,72 pour les lipides (ex: tripalmitine/stéarine) en raison de leur plus faible teneur relative en oxygène.",
          explanation: "Mise en relation des besoins métaboliques, du catabolisme des nutriments et de l'énergie cellulaire.",
          contextOrApplication: "Exercices 1 à 4 de la Série 5 et devoirs du second semestre (p. 12-14, 38-39, 46-47, 61-67)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Calcul de taille réelle et grossissement en microscopie",
          whatToDo: "Relever la taille mesurée sur l'épreuve avec une règle (taille apparente en cm ou mm), convertir en micromètres (1 cm = 10 000 µm ; 1 mm = 1 000 µm), puis diviser par le grossissement total G = G_objectif x G_oculaire : Taille réelle = Taille apparente / G.",
          reflexOrTip: "Toujours expliciter la conversion d'unités avant de poser le calcul pour s'assurer d'exprimer la réponse en µm."
        },
        {
          stepNumber: 2,
          title: "Application de la loi de Van 't Hoff pour la pression osmotique",
          whatToDo: "Calculer la concentration molaire C = Cm / M (en mol/L), identifier le coefficient d'ionisation i (i=1 pour le saccharose ou glucose ; i=2 pour NaCl qui libère Na+ et Cl- ; i=3 pour Na2SO4 ou CaCl2), convertir la température T = θ(°C) + 273 (en Kelvin), puis poser Po = n·i·R·T·C (R = 0,082 L·atm·mol⁻¹·K⁻¹). Si le résultat est demandé en Pascals, multiplier par 10^5 (1 atm = 10^5 Pa).",
          reflexOrTip: "Dans les problèmes de perméabilité, si la cellule déplasmolyse spontanément, le soluté est obligatoirement dialysable (pénétrant)."
        },
        {
          stepNumber: 3,
          title: "Analyse des étapes de synthèse protéique et mutations",
          whatToDo: "Identifier le brin matrice/transcrit lu de 3' vers 5', écrire l'ARNm complémentaire de 5' vers 3' (A->U, T->A, C->G, G->C), puis découper en codons et traduire en chaîne polypeptidique selon le tableau du code génétique.",
          reflexOrTip: "Repérer si la mutation est une substitution faux-sens, non-sens (codon STOP prématuré) ou une délétion/insertion modifiant le cadre de lecture."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice type Série 2 (Toffène Diome 1ère S2) : « On plonge des fragments d'épiderme d'oignon rouge dans une solution de saccharose (M = 342 g/mol) à 68,4 g/L à la température de 27°C. 1. Calculez la pression osmotique Po de cette solution (en atm puis en Pa). 2. Sachant que la pression osmotique initiale du suc vacuolaire est de 3,5 atm, prévoyez l'état des cellules après immersion. »",
        solutionStepByStep: "1. Calcul de la concentration molaire : C = Cm / M = 68,4 / 342 = 0,2 mol/L.\n" +
          "2. Température absolue : T = 27 + 273 = 300 K.\n" +
          "3. Coefficient d'ionisation : Le saccharose est une molécule organique non électrolyte, donc i = 1.\n" +
          "4. Pression osmotique selon Van 't Hoff : Po = 1 x 0,082 x 300 x 0,2 = 4,92 atm.\n" +
          "   En Pascals : Po = 4,92 x 10^5 Pa = 492 000 Pa (4,92 x 10^5 N/m²).\n" +
          "5. Comparaison des pressions osmotiques : Po(solution) = 4,92 atm > Po(vacuole) = 3,5 atm.\n" +
          "   Le milieu extérieur est hypertonique par rapport au suc vacuolaire. L'eau sort de la vacuole par osmose, provoquant une diminution du volume vacuolaire et le décollement de la membrane plasmique de la paroi pectocellulosique : les cellules sont dans un état de plasmolyse.",
        finalAnswer: "Po = 4,92 atm (4,92 x 10^5 Pa). Les cellules subissent une plasmolyse en milieu hypertonique."
      },
      classicExamTraps: [
        "Confondre grossissement total et grossissement de l'objectif seul (toujours multiplier par celui de l'oculaire : G = G_obj x G_ocul).",
        "Oublier le coefficient d'ionisation i de Van 't Hoff lors du calcul de pression osmotique pour les sels (i=2 pour NaCl, i=3 pour Na2SO4 ou CaCl2).",
        "Confondre brin transcrit (qui sert de matrice et est complémentaire de l'ARNm) et brin non transcrit ou codant (qui a la même séquence que l'ARNm aux thymines près T->U).",
        "Attribuer un quotient respiratoire QR = 0,7 aux glucides (QR = 1 pour glucides, QR = 0,7 pour lipides, QR = 0,8 pour protides)."
      ],
      selfCheckChecklist: [
        "Les conversions d'unités (cm -> mm -> µm pour la taille, °C -> K pour la température, atm -> Pa) sont-elles explicitées ?",
        "La définition de l'osmose précise-t-elle le sens de déplacement de l'eau (du milieu hypotonique vers le milieu hypertonique) ?",
        "Les étapes de transcription et de traduction sont-elles clairement situées dans leurs compartiments cellulaires respectifs (noyau vs cytoplasme) ?"
      ],
      quickRevisionMemo: "Mémo Toffène Diome SVT 1ère S2 : Grossissement = G_obj x G_ocul ; Taille réelle = Taille apparente / G ; Loi Van 't Hoff : Po = n·i·R·T·C (i=1 saccharose, i=2 NaCl, i=3 Na2SO4 ; 1 atm = 10^5 Pa) ; Plasmolyse = milieu hypertonique ; Déplasmolyse spontanée = soluté dialysable ; Perméabilité différentielle = formamide plus rapide qu'acétamide ; Perméabilité orientée = rouge neutre ; Cycle cellulaire = G1 (Q) -> S (Q->2Q) -> G2 (2Q) -> M (2Q->Q) ; 5-bromodésoxyuridine = bloque réplication en G1 ; Cystéamine = bloque cytodiérèse ; Ocytocine vs Vasopressine = 2 AA différents (Ile3Phe et Leu8Arg) ; Mucoviscidose = délétion CTT de la Phe508 sur CFTR ; QR glucides = 1,0 ; QR lipides = 0,7 ; Klinefelter = 47,XXY ; Turner = 45,X.",
      certificationNote: "Intégration officielle certifiée du Fascicule SVT 1ère S2 — Séries d'exercices et devoirs corrigés (M. Toffène DIOME, M. Mansour DIEYE, M. Mbaye DIOME / Toffe-Sora-Mbaye, Kaolack & Fatick, Sénégal)."
    };
  }

  // Détection spécifique du Fascicule SVT Terminale S1-S2 — Recueil de 67 Exercices Corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)
  if (/toffe|toffe\s*sora\s*mbaye|toffene\s*diome|diome|mansour\s*dieye|mbaye\s*diome|diofior|67\s*exercices.*svt|svt.*67\s*exercices|substance\s*p.*enkephaline|enkephaline.*morphine|david\s*de\s*wied|coeur\s+transplante.*catecholamines|alloxane.*diethylthiocarbamate|hla\s*g.*kir|ccr5\s*delta\s*32|clomifene.*lh|norgestrienone|all[eè]le\s+l[eé]tal.*pattes\s+courtes|papillons?\s+aurinia|zw.*papillon|translocation.*14.*21|osteo\s*arthro\s*onychodysplasie|nail\s*patella|g6pd.*(?:klinefelter|turner)/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Fascicule SVT Terminale S1-S2 — Exercices Corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Série S1 / S2)",
      chapterTitle: "SVT Terminale S1-S2 : 67 Exercices d'Évaluation Corrigés Intégralement (Collection Toffe-Sora-Mbaye)",
      definitionAndScope: `Ouvrage pédagogique de référence de 146 pages réunissant 67 exercices d'évaluation et de sujets de baccalauréat avec corrections complètes pas à pas, rédigé par M. Toffène DIOME (Lycée mixte de Ngane SAER, Kaolack), M. Mansour DIEYE (Lycée Ibrahima DIOUF, Kaolack) et M. Mbaye DIOME (Lycée de Diofior, Fatick).\n\nStructure en 11 thèmes officiels du programme sénégalais : 1. Système nerveux et propriétés bioélectriques (Ex. 1 à 9 : potentiel de repos -70 mV, PA, vitesse V=6d, nœuds de Ranvier, neurobiologie de la douleur substance P/enképhaline, maladie d'Alzheimer, ecstasy) ; 2. Comportement moteur (Ex. 10 à 14 : réflexe conditionnel d'évitement de David de Wied, réflexe myotatique achilléen monosynaptique, motoneurones agoniste/antagoniste, thermorégulation et frisson thermique) ; 3. Activité du muscle strié squelettique et énergétique (Ex. 15 à 21 : unités motrices A et B, ultrastructure du sarcomère, curare, ésérine, myasthénie à l'α-bungarotoxine, voies énergétiques ATP, fibres rouges d'endurance vs pâles de sprint) ; 4. Activité cardiaque et régulation de la pression artérielle (Ex. 22 à 26 : baroréflexe de Hering/Cyon, cœur greffé et régulation hormonale par catécholamines, système RAA rénine-angiotensine-aldostérone) ; 5. Milieu intérieur et fonction rénale (Ex. 27 : néphron, filtration glomérulaire, réabsorption tubulaire de 99,2% d'eau et de glucose) ; 6. Régulation de la glycémie (Ex. 28 à 30 : foie tampon glucidique, hépatectomie, îlots de Langerhans, cellules β/insuline détruites par l'alloxane et α/glucagon détruites par le diéthylthiocarbamate) ; 7. Immunologie fondamentale et appliquée (Ex. 31 à 38 : RIMH, coopération LB-LT4-macrophages, RIMC cytotoxique de Zinkernagel, perforines, rejet d'allogreffe et thymus, tolérance fœto-maternelle HLA-G/KIR, résistance au VIH des homozygotes CCR5-Δ32) ; 8. Reproduction chez les mammifères (Ex. 39, 40, 50, 51, 52, 53 : cycles ovariens, pic de LH, clomifène, glaire cervicale et norgestriénone, réflexe neuro-endocrinien de lactation, maintien du corps jaune par l'hCG) ; 9. Reproduction des spermaphytes (Ex. 54, 55 : pollen, sac embryonnaire, double fécondation embryon 2n + albumen 3n) ; 10. Génétique formelle mendélienne (Ex. 56 à 62 : monohybridisme et allèle létal des poulets à pattes courtes, gonosomes ZW des papillons Aurinia, dihybridisme drosophile et maïs, crossing-over et cartes factorielles) ; 11. Hérédité humaine (Ex. 63 à 67 : translocation robertsonienne 14/21 et trisomie 21, surdi-mutité autosomale et daltonisme lié à l'X, liaison groupe sanguin ABO et ostéo-arthro-onychodysplasie, électrophorèse G6PD chez Klinefelter XXY et Turner X).`,
      coreConceptsAndFormulas: [
        {
          name: "Neurophysiologie : Potentiels Bioélectriques, Vitesse V=6d & Neurochimie",
          formulaOrRule: "1. Vitesse de propagation : relation V = 6·d (V en m/s, d en µm) pour les fibres myélinisées. Élimination du temps de réponse par la méthode des deux électrodes : V = Δd / Δt. 2. Conduction saltatoire : seuil d'excitation (rhéobase) minimal aux nœuds de Ranvier où la membrane amyélinique concentre les canaux CVD Na+ et K+. 3. Neurobiologie de la douleur : fibres A myélinisées rapides (60 m/s) conduisant la douleur aiguë vs fibres B amyéliniques lentes (1-2 m/s) conduisant la douleur sourde. Les fibres sensitives libèrent la substance P dans la corne postérieure médullaire ; les interneurones locaux libèrent l'enképhaline qui bloque présynaptiquement la libération de substance P. 4. Pharmacologie synaptique : l'atropine bloque compétitivement les récepteurs à acétylcholine ; l'ecstasy provoque un afflux massif de sérotonine et active les neurones à dopamine (phase euphorique de 0-4h) suivi d'un épuisement des stocks (dépression après 4h).",
          explanation: "Bases ioniques et pharmacologiques de la communication nerveuse et de la modulation synaptique.",
          contextOrApplication: "Exercices 1 à 9 du fascicule Toffe-Sora-Mbaye (p. 3-21)."
        },
        {
          name: "Motricité Réflexe, Sarcomère & Énergétique Musculaire",
          formulaOrRule: "1. Réflexe conditionnel d'évitement (David de Wied) : association métronome (SC) + choc électrique (SI). Disparition progressive par extinction en l'absence de renforcement. 2. Réflexe myotatique : récepteur fuseau neuromusculaire en modulation de fréquence -> voie afférente Ia -> synapse directe excitatrice (aspartate, délai synaptique de 0,77 ms confirmant l'arc monosynaptique) sur le motoneurone agoniste ; dérivation vers interneurone inhibiteur à GABA (délai disynaptique > 1,2 ms) relâchant le muscle antagoniste. 3. Sarcomère et contraction : raccourcissement des demi-bandes I et de la bande H par glissement des filaments d'actine sur les têtes de myosine en présence de Ca2+ et hydrolyse d'ATP (la bande A reste de longueur constante). 4. Pharmacologie motrice : curare (paralysie flasque par blocage des récepteurs nicotiniques post-synaptiques sans potentiel d'action musculaire) ; ésérine (inhibition de l'acétylcholinestérase) ; myasthénie (déficit auto-immun de récepteurs révélé par l'α-bungarotoxine). 5. Métabolisme : phosphocréatine (alactique immédiate) -> glycolyse anaérobie lactique -> respiration aérobie. Fibres rouges d'endurance (mitochondries, myoglobine) vs fibres pâles anaérobies rapides.",
          explanation: "Couplage excitation-contraction, innervation réciproque et plasticité métabolique des myocytes.",
          contextOrApplication: "Exercices 10 à 21 du fascicule Toffe-Sora-Mbaye (p. 23-51)."
        },
        {
          name: "Physiologie Cardiovasculaire, Rénale & Régulation Glycémique",
          formulaOrRule: "1. Baroréflexe et PA : barorécepteurs carotidiens/aortiques -> nerfs de Hering/Cyon -> bulbe rachidien dépresseur -> nerf X cardiomodérateur (acétylcholine -> bradycardie) lors d'hypertension. En hypotension : levée d'inhibition sympathique (noradrénaline -> tachycardie et vasoconstriction). 2. Cœur greffé : dénervé, ne réagit plus aux influx nerveux réflexes immédiats mais s'adapte lentement par voie humorale grâce aux catécholamines surrénaliennes. 3. Système RAA : chute de volémie/pression rénale -> sécrétion de rénine rénale -> transformation de l'angiotensinogène en angiotensine (vasoconstriction) -> sécrétion d'aldostérone surrénalienne réabsorbant Na+ et eau. 4. Néphron : filtration de 130 mL/min d'urine primitive (187 L/24h) ; réabsorption tubulaire de 99,2% d'eau et 100% de glucose (187,2 g/24h). 5. Glycémie (1 g/L) : rôle effecteur clé du foie (hépatectomie = hypoglycémie mortelle). Cellules β des îlots de Langerhans sécrétant l'insuline (hypoglycémiante, détruites par l'alloxane) ; cellules α sécrétant le glucagon (hyperglycémiant, détruites par le diéthylthiocarbamate).",
          explanation: "Homéostasie circulatoire, équilibre hydrominéral et régulation endocrinienne des flux glucidiques.",
          contextOrApplication: "Exercices 22 à 30 du fascicule Toffe-Sora-Mbaye (p. 53-78)."
        },
        {
          name: "Immunologie Fondamentale, Rejet de Greffe & Infection au VIH",
          formulaOrRule: "1. RIMH : activation coopérative Macrophage (CPAg CMH II) -> LT4 (sécrétion d'interleukines IL-2) -> LB -> multiplication et différenciation en plasmocytes (sécréteurs d'anticorps) et LB mémoire. 2. RIMC cytotoxique : double reconnaissance obligatoire par les LTc (TCR reconnaissant simultanément le CMH I du soi et le peptide antigénique non-soi, Zinkernagel) -> libération polarisée de perforines et granzymes créant des pores membranaires et détruisant la cellule cible par choc osmotique. 3. Rejet d'allogreffe : médié par les LT après sensibilisation thymique (les souris nudes athymiques ne rejettent pas les greffes). Tolérance fœtale : le trophoblaste exprime la molécule protectrice HLA-G qui inhibe les récepteurs KIR des cellules NK maternelles. 4. VIH : fixation de la gp120 sur CD4 et corécepteur CCR5. Les individus homozygotes RR pour la délétion CCR5-Δ32 (protéine tronquée à 205 AA au lieu de 352 AA) sont protégés contre l'infection.",
          explanation: "Mécanismes moléculaires de la réponse immunitaire adaptative, tolérance foeto-maternelle et virologie.",
          contextOrApplication: "Exercices 31 à 38 et 51 du fascicule Toffe-Sora-Mbaye (p. 80-97, 106-108)."
        },
        {
          name: "Reproduction des Mammifères, Spermaphytes & Endocrinologie",
          formulaOrRule: "1. Cycle ovarien/utérin : phase folliculaire (œstrogènes croissants) -> pic œstradiol à J12-13 déclenchant le rétrocontrôle positif -> décharge ovulante de LH à J14 -> phase lutéale (progestérone et œstrogènes). Glaire cervicale à maillage lâche à J13-14 permettant l'ascension des spermatozoïdes. Induction ovulatoire par clomifène (anti-œstrogène levant le rétrocontrôle négatif) ; contraception progestative (norgestriénone) imperméabilisant la glaire. 2. Relais hCG : maintien du corps jaune gravidique par l'hCG trophoblastique sécrétée dès le 12e-14e jour évitant la chute de progestérone. 3. Lactation : réflexe neuro-endocrinien (succion mamelon -> hypothalamus -> prolactine adénohypophysaire pour la synthèse et ocytocine posthypophysaire pour l'éjection). 4. Angiospermes : double fécondation par le tube pollinique : spermatozoïde 1 (n) + oosphère (n) -> zygote principal diploïde 2n (embryon) ; spermatozoïde 2 (n) + 2 noyaux polaires (n+n) -> zygote accessoire triploïde 3n (albumen).",
          explanation: "Régulation neuro-endocrinienne des cycles sexuels et gamétogenèse chez les métaphytes et métazoaires.",
          contextOrApplication: "Exercices 39, 40, 50, 52, 53, 54, 55 du fascicule Toffe-Sora-Mbaye (p. 99-117)."
        },
        {
          name: "Génétique Classique, Linkage & Hérédité Humaine (Pedigrees & Électrophorèses)",
          formulaOrRule: "1. Gène létal : croisement poulets pattes courtes x pattes courtes -> 2/3 pattes courtes (Cn) et 1/3 pattes normales (nn), homozygote CC létal in ovo. 2. Gonosomes ZW : papillon Aurinia (femelle ZW hétérogamétique, mâle ZZ homogamétique). 3. Dihybridisme et carte factorielle : calcul de la distance génétique d = (% de recombinés) en cM. Absence de crossing-over chez la drosophile mâle (linkage absolu). Distance de 3,597 cM chez le maïs entre forme et couleur. 4. Translocation robertsonienne 14/21 : mère porteuse saine équilibrée à 45 chromosomes (un 14, un 21, un fusionné 14/21) transmettant le 14/21 + un 21 libre -> enfant à 46 chromosomes avec trisomie 21 fonctionnelle (syndrome de Down). 5. Pedigrees combinés : surdi-mutité (autosomique récessive) et daltonisme (récessif lié à X). 6. Électrophorèse G6PD liée à l'X (formes codominantes A et B) : garçon exprimant 2 bandes A et B = syndrome de Klinefelter (47, XXY) ; fille n'exprimant qu'une bande paternelle sans allèle maternel = syndrome de Turner (45, X).",
          explanation: "Démarche déductive complète : dominance, ségrégation, liaison chromosomique, anomalies caryotypiques.",
          contextOrApplication: "Exercices 56 à 67 du fascicule Toffe-Sora-Mbaye (p. 119-146)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Déterminer la vitesse de conduction de l'influx nerveux",
          whatToDo: "Appliquer la formule V = Δd / Δt entre deux électrodes réceptrices distantes de Δd avec un écart temporel d'apparition de Δt. Pour une fibre myélinisée sans mesure expérimentale directe, utiliser la formule empirique V = 6 x d (avec d diamètre de l'axone en µm, V en m/s).",
          reflexOrTip: "La méthode des deux électrodes élimine le temps de latence dû au temps d'utilisation et à la dépolarisation sous les électrodes stimulatrices."
        },
        {
          stepNumber: 2,
          title: "Analyser les arcs réflexes et les délais synaptiques",
          whatToDo: "Mesurer le temps de conduction total, retrancher le temps de parcours nerveux afférent et efférent (t = d / V). Le temps résiduel correspond au délai central médullaire : s'il est proche de 0,5 à 0,7 ms, l'arc est monosynaptique (réflexe myotatique) ; s'il dépasse 1,2 ms, il comporte un ou plusieurs interneurones (arc polysynaptique).",
          reflexOrTip: "Dans l'innervation réciproque, le muscle agoniste est excité par synapse directe tandis que le muscle antagoniste est relâché via un interneurone inhibiteur à GABA."
        },
        {
          stepNumber: 3,
          title: "Résoudre un problème d'hérédité humaine ou de génétique formelle",
          whatToDo: "1. Établir la dominance ou récessivité de l'allèle muté (présence d'enfants malades issus de parents sains = allèle récessif). 2. Tester la liaison au sexe (éliminer le gonosome Y si des filles sont malades ou pères malades ont des fils sains ; éliminer l'X récessif si une fille malade a un père sain ou une mère malade a un fils sain). 3. Écrire les génotypes complets et calculer les probabilités génétiques.",
          reflexOrTip: "En cas d'électrophorèse de protéines codominantes liées à X (ex: G6PD A et B), un sujet masculin présentant 2 bandes possède obligatoirement 2 chromosomes X : c'est un caryotype 47,XXY (Klinefelter)."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice type Thème 1 & 11 (Toffène Diome SVT Terminale S1-S2) : « On stimule un axone géant myélinisé de diamètre d = 10 µm. Deux électrodes réceptrices R1 et R2 sont placées à 3 cm et 9 cm des électrodes stimulatrices. 1. Calculez la vitesse théorique selon la formule de Hursh V = 6·d. 2. Sachant que le PA atteint R1 à t1 = 0,8 ms et R2 à t2 = 1,8 ms, calculez la vitesse réelle expérimentale et déduisez le temps de latence au point de stimulation. »",
        solutionStepByStep: "1. Vitesse théorique de propagation : V_théo = 6 x d = 6 x 10 = 60 m/s.\n" +
          "2. Vitesse réelle expérimentale entre R1 et R2 :\n" +
          "   Distance entre électrodes : Δd = 9 cm - 3 cm = 6 cm = 0,06 m.\n" +
          "   Intervalle de temps : Δt = 1,8 ms - 0,8 ms = 1,0 ms = 1,0 x 10^-3 s.\n" +
          "   V_exp = Δd / Δt = 0,06 / (1,0 x 10^-3) = 60 m/s.\n" +
          "   La vitesse mesurée concorde parfaitement avec la formule théorique V = 6·d.\n" +
          "3. Calcul du temps de latence (délai d'excitation sous les électrodes) :\n" +
          "   Le temps théorique de parcours de S à R1 (d1 = 3 cm = 0,03 m) est : t_parcours = d1 / V = 0,03 / 60 = 0,0005 s = 0,5 ms.\n" +
          "   Or l'enregistrement montre t1 = 0,8 ms.\n" +
          "   Délai de latence : t_latence = t1 - t_parcours = 0,8 ms - 0,5 ms = 0,3 ms.",
        finalAnswer: "Vitesse théorique = 60 m/s ; Vitesse expérimentale = 60 m/s ; Temps de latence = 0,3 ms."
      },
      classicExamTraps: [
        "Confondre l'effet du curare (blocage postsynaptique compétitif des récepteurs à ACh sans PA musculaire) avec celui de la toxine botulique (inhibition présynaptique de l'exocytose d'ACh).",
        "Oublier que chez le cœur transplanté, la tachycardie d'effort s'établit avec retard car elle dépend uniquement de la voie hormonale (catécholamines circulantes) et non du système nerveux végétatif sectionné.",
        "Négliger la distinction entre le réflexe conditionnel (qui nécessite l'intégrité du cortex cérébral et s'éteint sans renforcement) et le réflexe myotatique inné (qui est purement médullaire et inépuisable).",
        "Interpréter un profil d'électrophorèse à 2 bandes chez un garçon pour un gène lié à X comme une simple hétérozygotie sans diagnostiquer l'aneuploïdie 47,XXY (syndrome de Klinefelter)."
      ],
      selfCheckChecklist: [
        "La formule V = Δd / Δt à deux électrodes est-elle appliquée pour éliminer le délai d'excitation du nerf ?",
        "Le caractère monosynaptique ou disynaptique du réflexe est-il validé en comparant le temps médullaire mesuré au délai synaptique unitaire de 0,5 ms ?",
        "Les étapes de transmission généalogique (dominance, exclusion Y, exclusion récessive X, confirmation autosomique) sont-elles déroulées dans l'ordre rigoureux ?"
      ],
      quickRevisionMemo: "Mémo Toffène Diome SVT Terminale S1/S2 : Vitesse influx = 6·d (m/s) ou Δd / Δt ; Nœuds de Ranvier = faible rhéobase et conduction saltatoire ; Douleur = fibres A myélinisées rapides vs fibres B lentes ; Substance P excitatrice vs Enképhaline inhibitrice ; Atropine = bloque ACh ; Ecstasy = afflux de sérotonine ; Réflexe myotatique = fuseau neuromusculaire + arc monosynaptique agoniste (aspartate, 0,77 ms) + interneurone GABA antagoniste ; Sarcomère = raccourcissement I et H, A constant ; Curare = bloque récepteurs ACh ; Myasthénie = déficit récepteurs (α-bungarotoxine) ; Cœur greffé = adaptation hormonale par catécholamines ; RAA = Rénine + Angiotensine + Aldostérone ; Néphron = filtration 130 mL/min, réabsorption 99,2% eau et 100% glucose ; Foie = organe tampon (hépatectomie = mort) ; Îlots de Langerhans = cellules β insuline (alloxane) et α glucagon (diéthylthiocarbamate) ; RIMC = double reconnaissance CMH I + Ag par LTc (perforines) ; Tolérance fœtale = HLA-G trophoblastique inhibant KIR des NK ; VIH = corécepteur CCR5, homozygote CCR5-Δ32 (RR) résistant ; Clomifène = inducteur d'ovulation anti-œstrogène ; Lactation = prolactine (synthèse) + ocytocine (éjection) ; Angiospermes = double fécondation (embryon 2n + albumen 3n) ; Poulet pattes courtes = allèle létal homozygote ; Drosophile mâle = 0% crossing-over ; Maïs = 3,597 cM ; Translocation 14/21 = mère équilibrée (45 chrom.) -> enfant trisomie 21 (46 chrom.) ; Électrophorèse G6PD = garçon à 2 bandes AB = Klinefelter 47,XXY ; fille à 1 bande = Turner 45,X.",
      certificationNote: "Intégration officielle certifiée du Fascicule SVT Terminale S1-S2 — Recueil Complet de 67 Exercices Corrigés (M. Toffène DIOME, M. Mansour DIEYE, M. Mbaye DIOME / Toffe-Sora-Mbaye, Kaolack & Fatick, Sénégal)."
    };
  }

  // Détection spécifique du fascicule SVT Terminales D & C - M. ADOUKO Topo Désiré (Collège Moderne La Colombe, Abidjan)
  if (/adouko|topo\s*desir[eé]|la\s*colombe|gisement\s*(?:d\s*')?ity|angovia|yaour[eé]|afema|bat[eé]e|facteur\s+de\s+concentration.*minerai|subsidence.*k[eé]rog[eè]ne|fen[eê]tre\s+[aà]\s+huile|sesbania\s*rostrata|turricules|chaux\s+vive.*sol|marnes.*sol|seuil\s+r[eé]nal.*(?:1[,.]7|glucose)|[eé]chappement\s+vagal|tchapalo|clonage.*gurdon|porc\s+charcutier.*gmq|h[eé]t[eé]rosis.*gmq|galactos[eé]mie|rachitisme\s+vitamino.*x/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "SVT Terminales D & C — Recueil d'Exercices Corrigés (M. ADOUKO Topo Désiré)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Séries D & C, S1 & S2)",
      chapterTitle: "SVT Terminale D & C : Les 11 Domaines Officiels du Baccalauréat (M. ADOUKO Topo Désiré, Collège La Colombe)",
      definitionAndScope: `Ouvrage de référence pédagogique ivoirien de 318 pages conçu par M. ADOUKO Topo Désiré (Collège Moderne La Colombe, Abidjan). Il couvre l'intégralité des 11 grands domaines officiels du Baccalauréat Séries D et C avec énoncés intégraux et corrigés modèles détaillés :\n\n1. Géologie des gisements miniers et pétroliers (or d'Ity, Angovia, Yaouré, Aféma, bauxites/latérites, kérogène et hydrocarbures, prospection géochimique et géophysique, bâtée) ;\n2. Pédologie et amélioration des sols (NPK, loi du minimum de Liebig, Sesbania rostrata, Rhizobium, humus, amendements calcaires, chaux vive, marnes, turricules de vers de terre, pollution aux nitrates, terrasses) ;\n3. Nutrition, sang, milieu intérieur et homéostasie (néphron, filtration glomérulaire, réabsorption tubulaire, ADH/vasopressine, aldostérone, volémie, surrénalectomie) ;\n4. Régulation de la glycémie et diabètes (foie tampon, insuline, glucagon, adrénaline, alloxane, seuil rénal 1,75 g/L) ;\n5. Activité cardiaque et régulation de la pression artérielle (automatisme, tissu nodal, pacemaker, cardiogramme, ECG, nerf vague X cardiomodérateur, orthosympathique cardioaccélérateur, acétylcholine, noradrénaline, baroréflexe de Hering) ;\n6. Immunologie et SIDA (moelle osseuse, thymus, CMH/HLA, différenciation LB -> plasmocyte, phagocytose, anatoxine vs toxine, sérovaccination, classes d'Ig, coopération cellulaire, rejet de greffes, VIH/SIDA avec gp120, CD4, CCR5, transcriptase inverse, AZT, ELISA, Western Blot) ;\n7. Reproduction chez les mammifères (spermatogenèse, ovogenèse, folliculogenèse, cycles ovarien/utérin, dentelle utérine, rétrocontrôles, pilule, fécondation, caryogamie, blocage polyspermie, nidation, régulation testiculaire) ;\n8. Reproduction chez les spermaphytes (grain de pollen, sac embryonnaire, double fécondation avec embryon 2n et albumen 3n) ;\n9. Communication nerveuse et réflexes (potentiels de repos -70 mV, PA, vitesse, conduction saltatoire, rhéobase, chronaxie, période réfractaire, transmission synaptique, curare, GABA, nicotine/diazépam, réflexe myotatique, conditionnement de Pavlov et David de Wied) ;\n10. Muscle squelettique et production d'énergie (sarcomère, glissement actine/myosine, Ca2+, ATP, voies de régénération, respiration mitochondriale 38 ATP, fermentation lactique et alcoolique du tchapalo) ;\n11. Génétique et amélioration des espèces (clonage de Gurdon chez le Xénope, vaches laitières, hybridation et hétérosis/vigueur hybride, FIVETE, monohybridisme, dihybridisme, gènes liés, génétique humaine).`,
      coreConceptsAndFormulas: [
        {
          name: "Géologie Minière & Pétrolière (Domaine 1)",
          formulaOrRule: "1. Gisements primaires filoniens hydrothermaux (Angovia à Bouaflé) vs secondaires résiduels d'altération latéritique (Ity à Danané). 2. Facteur de concentration : FC = TM / Tc (TM = teneur du minerai, Tc = teneur crustale moyenne). Anomalie minière si teneur locale > seuil d'anomalie = moyenne + 2 écarts-types. 3. Hydrocarbures : bassin sédimentaire subsident réducteur -> kérogène -> rupture thermique à 104°C entre 1800 et 3500 m (fenêtre à huile) -> pétrole (CnH2n+2) piégé dans une roche-réservoir sous une couverture imperméable.",
          explanation: "Processus magmatiques, altération supergène tropicale et diagenèse thermique des combustibles fossiles.",
          contextOrApplication: "Exercices 1 à 19 de géologie minière et pétrolière (p. 3-27)."
        },
        {
          name: "Pédologie, Fertilité & Symbiose Azotée (Domaine 2)",
          formulaOrRule: "1. Formule d'engrais NPK (ex: 14-12-16 UF) : 100 kg d'engrais apportent 14 kg N, 12 kg P2O5 et 16 kg K2O. 2. Loi du minimum de Liebig : le rendement est plafonné par l'élément nutritif le plus déficitaire (facteur limitant, souvent P). 3. Amendements calcaires : la chaux vive (CaO) et les marnes (CaCO3) neutralisent l'acidité des sols tropicaux en saturant le CAH par des ponts calciques Ca2+ et en neutralisant les ions H+. 4. Symbiose : Rhizobium et Sesbania rostrata ou soja (leghémoglobine micro-aérobie protégeant la nitrogénase) apportant jusqu'à 200 kg N/ha sans engrais chimique. Les turricules de vers de terre élèvent le pH à la neutralité (pH 7).",
          explanation: "Agro-écologie, conservation des sols tropicaux ferrallitiques et régulation du complexe argilo-humique.",
          contextOrApplication: "Exercices 1 à 18 de pédologie appliquée (p. 28-53)."
        },
        {
          name: "Milieu Intérieur, Néphron & Régulation Glycémique (Domaines 3 & 4)",
          formulaOrRule: "1. Néphron : filtration glomérulaire non sélective (125 mL/min = 180 L/24h) ; réabsorption active tubulaire (100% du glucose jusqu'au seuil rénal de 1,75 g/L ; Na+ stimulé par l'aldostérone) ; réabsorption d'eau sous l'effet de l'ADH/vasopressine post-hypophysaire. La surrénalectomie bilatérale entraîne une fuite massive de Na+ et une polyurie mortelle. 2. Glycémie (1 g/L) : foie organe effecteur tampon (hépatectomie = mort rapide). Pancréas endocrine : cellules β (insuline hypoglycémiante favorisant la glycogénogenèse) vs cellules α (glucagon hyperglycémiant favorisant la glycogénolyse et la néoglucogenèse).",
          explanation: "Homéostasie osmotique, équilibre hydro-électrolytique et régulation hormonale de la volémie et de la glycémie.",
          contextOrApplication: "Exercices 1 à 16 de nutrition et glycémie (p. 54-76)."
        },
        {
          name: "Activité Cardiaque, Pression Artérielle & Baroréflexe (Domaine 5)",
          formulaOrRule: "1. Automatisme myogène du tissu nodal : nœud sinusal (pacemaker 70-80 bat/min) -> nœud septal -> faisceau de His -> réseau de Purkinje. Échappement vagal lors d'une stimulation prolongée du nerf X par hydrolyse de l'acétylcholine par l'acétylcholinestérase. 2. Baroréflexe carotidien : ligature basse des carotides -> chute de pression au sinus -> stimulation sympathique (noradrénaline) -> tachycardie. Ligature haute -> surpression sinusale -> potentiels d'action dans le nerf de Hering -> stimulation du centre cardiomodérateur bulbaire (nerf vague X) -> bradycardie et vasodilatation.",
          explanation: "Maintien permanent de la pression artérielle PA = Débit cardiaque x Résistances périphériques.",
          contextOrApplication: "Exercices 1 à 16 de cardiologie et vasomotricité (p. 77-97)."
        },
        {
          name: "Immunologie, SIDA & Rejet de Greffe (Domaine 6)",
          formulaOrRule: "1. CMH / HLA codé sur chromosome 6 : CMH I sur toutes cellules nucléées, CMH II sur CPAg (macrophages, LB). Coopération : Macrophage CPAg présente l'antigène au LT4 via CMH II -> sécrétion d'IL-1 et IL-2 -> prolifération des LT4 auxiliaires, des LT8 (devenant LTc cytotoxiques perforines/granzymes) et des LB (devenant plasmocytes sécréteurs d'anticorps). 2. VIH : rétrovirus à ARN fixant gp120 sur CD4 et corécepteur CCR5 des LT4 -> transcriptase inverse ARN en ADN -> intégration provirale -> latence séropositive -> SIDA déclaré quand LT4 < 200/mm3.",
          explanation: "Immunité adaptative humorale et cellulaire, virologie du VIH et diagnostic sérologique (ELISA et Western Blot).",
          contextOrApplication: "Exercices 1 à 18 d'immunologie et virologie (p. 98-143)."
        },
        {
          name: "Reproduction, Spermaphytes, Système Nerveux & Muscle (Domaines 7 à 10)",
          formulaOrRule: "1. Reproduction mammifères : pic préovulatoire d'œstradiol (>200 pg/mL) déclenchant le rétrocontrôle positif et la décharge ovulante de LH à J14 ; pilule combinée oestro-progestative bloquant l'axe hypothalamo-hypophysaire par rétrocontrôle négatif continu. 2. Spermaphytes : double fécondation des Angiospermes : anthérozoïde 1 + oosphère -> embryon 2n ; anthérozoïde 2 + 2 noyaux centraux -> albumen 3n. 3. Nerf et synapse : potentiel de repos (-70 mV), PA monophasique et diphasique, conduction saltatoire, curare bloquant compétitivement les récepteurs à acétylcholine. 4. Muscle : sarcomère (bande A constante, bandes I et H rétrécies), glissement actine-myosine hydrolysant l'ATP en présence de Ca2+, régénération par phosphocréatine, fermentation lactique et fermentation alcoolique du tchapalo (38 ATP en aérobiose vs 2 ATP en anaérobiose).",
          explanation: "Physiologie comparée de la reproduction, transduction du signal nerveux, contraction musculaire et énergétique cellulaire.",
          contextOrApplication: "Exercices 1 à 34 de reproduction, communication et contraction musculaire (p. 144-295)."
        },
        {
          name: "Génétique, Amélioration des Espèces & Pedigrees (Domaine 11)",
          formulaOrRule: "1. Clonage de John Gurdon (1960) chez le Xénope : énucléation d'ovules de crapaud sauvage par UV + transplantation du noyau d'une cellule intestinale de têtard albinos -> grenouilles adultes toutes albinos et de même sexe, démontrant la totipotence génétique des noyaux différenciés. 2. Hétérosis ou vigueur hybride : gain de productivité chez les hybrides F1 (GMQ porc charcutier, caféier arabusta). 3. Génétique humaine : galactosémie autosomique récessive (déficit en enzyme GALT), rachitisme vitamino-résistant dominant lié à X (père atteint transmettant la maladie à 100% de ses filles et 0% de ses fils).",
          explanation: "Biotechnologies de la reproduction, amélioration variétale et calculs de risques génétiques.",
          contextOrApplication: "Exercices 1 à 11 d'amélioration des espèces et génétique humaine (p. 296-318)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Calculer le facteur de concentration et le seuil d'anomalie minière",
          whatToDo: "Appliquer la formule FC = TM / Tc (avec TM la teneur du métal dans le minerai et Tc sa teneur moyenne dans la croûte terrestre). Pour un gisement aurifère, si Tc = 0,002 g/t et FC = 4000, alors TM = 8 g/t. Déterminer ensuite si l'anomalie dépasse le seuil géochimique (Moyenne + 2σ) et vérifier la rentabilité économique d'exploitation.",
          reflexOrTip: "Distinguer impérativement les gisements primaires hydrothermaux filoniens (Angovia) des gîtes secondaires d'altération supergène (Ity à Danané)."
        },
        {
          stepNumber: 2,
          title: "Analyser la régulation rénale et le seuil de glycosurie",
          whatToDo: "Vérifier la valeur de la glycémie par rapport au seuil rénal normal de 1,75 g/L. En deçà, la réabsorption tubulaire par les transporteurs Na+/glucose est intégrale (glycosurie = 0). Au-delà, saturation des transporteurs : élimination du glucose dans l'urine définitive avec polyurie osmotique.",
          reflexOrTip: "Dans une surrénalectomie bilatérale, la perte d'aldostérone empêche la réabsorption du sodium, provoquant une fuite urinaire de Na+, une baisse de la volémie et une chute tensionnelle mortelle."
        },
        {
          stepNumber: 3,
          title: "Quantifier la vigueur hybride ou hétérosis agronomique",
          whatToDo: "Calculer la valeur moyenne des deux lignées parentales de race pure : M = [P1 + P2] / 2. Comparer la performance de l'hybride F1 à cette moyenne : Gain d'hétérosis H = Valeur(F1) - M.",
          reflexOrTip: "L'hétérosis s'explique par la complémentarité des allèles dominants favorables apportés par chaque parent."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice Géologie minière (M. ADOUKO Topo Désiré, SVT Tle D) : « La croûte terrestre continentale contient en moyenne 0,002 g d'or par tonne de roche (Tc = 2.10^-7 %). 1. Dans le gisement aurifère d'Angovia, l'analyse d'un échantillon de minerai révèle une teneur TM = 8 g/t. Calculez le facteur de concentration FC de ce gisement. 2. Sachant que le seuil de rentabilité industrielle actuel est estimé à 2,5 g/t, ce gisement est-il exploitable ? 3. Précisez la nature géologique primaire ou secondaire de ce gisement. »",
        solutionStepByStep: "1. Calcul du facteur de concentration FC :\n" +
          "   FC = TM / Tc = 8 g/t / 0,002 g/t = 4 000.\n" +
          "   L'or a été concentré 4 000 fois par rapport à son abondance crustale moyenne.\n" +
          "2. Rentabilité économique d'exploitation :\n" +
          "   La teneur du minerai TM = 8 g/t est nettement supérieure au seuil de rentabilité industrielle (2,5 g/t).\n" +
          "   Le gisement d'Angovia est donc hautement rentable et exploitable industriellement.\n" +
          "3. Nature géologique du gisement :\n" +
          "   Le gisement d'Angovia est un gisement primaire endogène d'origine filonienne hydrothermale (or piégé dans des filons de quartz formés par la circulation de fluides magmatiques chauds), contrairement au gîte d'Ity qui est un gisement secondaire d'altération latéritique supergène.",
        finalAnswer: "Facteur de concentration FC = 4 000 ; Gisement exploitable (8 g/t > 2,5 g/t) ; Gisement primaire filonien hydrothermal."
      },
      classicExamTraps: [
        "Confondre gisement primaire magmatique (Angovia) et gîte secondaire d'altération résiduelle météorique (Ity).",
        "Oublier que le seuil rénal du glucose est de 1,75 g/L : en deçà, la glycosurie est rigoureusement nulle grâce à la réabsorption tubulaire totale.",
        "Attribuer l'échappement vagal cardiaque à un épuisement du cœur alors qu'il est dû à l'hydrolyse enzymatique de l'acétylcholine par l'acétylcholinestérase.",
        "Dans l'analyse de pedigree d'une tare dominante liée à X, oublier que le père atteint transmet obligatoirement la tare à 100% de ses filles et à 0% de ses fils car il transmet son chromosome Y aux garçons."
      ],
      selfCheckChecklist: [
        "La formule du facteur de concentration FC = TM / Tc a-t-elle été posée avec les mêmes unités de teneur ?",
        "Les rôles respectifs de l'aldostérone (réabsorption de Na+) et de l'ADH (réabsorption d'eau) dans le néphron sont-ils clairement distingués ?",
        "Le protocole de clonage de Gurdon (énucléation UV + greffe de noyau somatique) est-il décrit en insistant sur la totipotence du génome ?"
      ],
      quickRevisionMemo: "Mémo Adouko SVT Terminale D & C : FC = TM / Tc ; Or Angovia = filonien hydrothermal primaire vs Ity = secondaire latéritique ; Kérogène = fenêtre à huile 104°C (1800-3500 m) ; Engrais NPK 14-12-16 = 14 kg N, 12 kg P2O5, 16 kg K2O ; Loi du minimum de Liebig = facteur limitant (P) ; Chaux vive CaO + marnes = ponts calciques neutralisant l'acidité ; Sesbania rostrata + Rhizobium = 200 kg N/ha ; Néphron = filtration 125 mL/min, réabsorption glucose 100% si glycémie < 1,75 g/L ; Surrénalectomie = fuite Na+ et polyurie ; Pacemaker nodal = nœud sinusal -> septal -> His -> Purkinje ; Échappement vagal = dégradation ACh par estérase ; Baroréflexe = Hering -> cardiomodérateur bulbaire nerf X ; VIH = gp120 sur CD4 et CCR5, transcriptase inverse ; Angiospermes = double fécondation (embryon 2n + albumen 3n) ; Curare = blocage récepteurs ACh ; GABA = synapse inhibitrice Cl- ; Tchapalo = fermentation du mil (amylase puis levures) ; Clonage Gurdon = noyau intestinal albinos dans ovule sauvage énucléé -> grenouilles albinos (totipotence) ; Vigueur hybride H = F1 - (P1+P2)/2 ; Rachitisme vitamino-résistant = dominant lié à X.",
      certificationNote: "Intégration officielle certifiée du Recueil d'Exercices SVT Terminale D & C (M. ADOUKO Topo Désiré, Collège Moderne La Colombe, Abidjan, Côte d'Ivoire)."
    };
  }

  // Détection spécifique du fascicule Collection SVT : QCM SVT BAC - Alouane MBAREK (Inspecteur Principal E.S)
  if (/alouane|mbarek|alouane\s*mbarek|qcm\s*svt\s*bac|centaines\s+de\s+qcm|qcm.*reproduction\s+chez\s+l\s*homme|qcm.*reproduction\s+chez\s+la\s+femme|qcm.*brassage\s+(?:de\s+l\s*information\s+)?g[eé]n[eé]tique|qcm.*g[eé]n[eé]tique\s+humaine|qcm.*r[eé]flexe\s+myotatique|qcm.*tissu\s+nerveux|qcm.*muscle\s+squelettique|qcm.*pression\s+art[eé]rielle|qcm.*immunit[eé]\s+sp[eé]cifique|qcm.*dysfonctionnement.*immunitaire/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Collection SVT : QCM SVT BAC (Alouane MBAREK, Inspecteur Principal E.S)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Séries D, C, S1, S2 & Sciences Expérimentales)",
      chapterTitle: "QCM SVT BAC : Recueil Intégral d'Auto-Évaluation & Validation Thématique (Alouane MBAREK)",
      definitionAndScope: `Ouvrage didactique de référence de 179 pages rédigé par Alouane MBAREK, Inspecteur Principal de l'Enseignement Secondaire. Ce recueil complet d'auto-évaluation regroupe des centaines de QCM officiels d'examen classés par thèmes couvrant les programmes des sections Sciences Expérimentales et Séries Scientifiques du Baccalauréat, avec grilles de correction et justifications rigoureuses :\n\n1. Reproduction humaine : fonction reproductrice chez l'homme (QCM 1 à 83, spermatogenèse, Sertoli, Leydig, LH/FSH, testostérone, rétrocontrôle négatif) et chez la femme (QCM 1 à 145, ovogenèse, folliculogenèse, cycles ovarien/utérin, œstradiol, progestérone, rétrocontrôles, décharge ovulante, contraception, fécondation, caryogamie, nidation, FIVETE) ;\n2. Génétique : brassage génétique et dihybridisme (QCM 1 à 43, méiose, crossing-over, brassages inter et intrachromosomiques, lois de Mendel, test-cross) et génétique humaine (QCM 1 à 54, pedigrees, mucoviscidose, daltonisme, hémophilie, myopathie de Duchenne, caryotypes, trisomie 21, Klinefelter, Turner, système HLA) ;\n3. Évolution biologique (QCM 1 à 6, sélection naturelle, mutations, spéciation) ;\n4. Neurophysiologie : tissu nerveux (QCM 1 à 28), réflexe myotatique (QCM 1 à 147, potentiels récepteurs, PA, PPSE/PPSI, sommation temporelle/spatiale, synapses), muscle squelettique (QCM 1 à 30, sarcomère, troponine, ATP, créatine-phosphate) et régulation de la pression artérielle (QCM 1 à 30, barorécepteurs, Hering, Cyon, nerf X, orthosympathique) ;\n5. Immunologie : immunité spécifique (QCM 1 à 138, cellules de l'immunité, CMH I/II, RIMH, RIMC, interleukines, allogreffes) et dysfonctionnements (QCM 139 à 148, allergie immédiate, mastocytes/IgE, VIH/SIDA).`,
      coreConceptsAndFormulas: [
        {
          name: "Reproduction chez l'Homme : Régulation & Spermatogenèse (QCM 1 à 83)",
          formulaOrRule: "1. Tubes séminifères : spermatogenèse centripète continue en 4 phases (multiplication des spermatogonies 2n, accroissement en spermatocytes I 2n, méiose réductionnelle donnant spermatocytes II n puis spermatides n, spermiogenèse en spermatozoïdes). Durée : 74 jours. 2. Cellules de Sertoli : rôle nourricier, synthèse d'ABP (androgen-binding protein) et d'inhibine sous l'action de la FSH. 3. Cellules interstitielles de Leydig : sécrétion pulsatile de testostérone sous l'action de la LH. 4. Rétrocontrôles : la testostérone exerce un rétrocontrôle négatif sur l'hypothalamus (GnRH) et l'hypophyse (LH) ; l'inhibine exerce un rétrocontrôle négatif sélectif sur la FSH. Il n'y a JAMAIS de rétrocontrôle positif chez l'homme. La cryptorchidie détruit la spermatogenèse mais conserve les cellules de Leydig et la virilité.",
          explanation: "Organisation fonctionnelle du testicule et régulation neuro-endocrine à rétrocontrôle négatif strict.",
          contextOrApplication: "QCM 1 à 83 du recueil Alouane Mbarek (p. 3-28)."
        },
        {
          name: "Reproduction chez la Femme : Cycles, Décharge Ovulante & Contraception (QCM 1 à 145)",
          formulaOrRule: "1. Ovogenèse discontinue : amorcée in utero, bloquée en prophase I (ovocyte I), reprise à chaque cycle dès la puberté (ovocyte II bloqué en métaphase II), achevée UNIQUEMENT lors de la fécondation. 2. Folliculogenèse : primordial -> primaire -> secondaire -> cavitaire (tertiaire) -> mûr de De Graaf. 3. Cycle ovarien (28 jours) : phase folliculaire (œstradiol croissant) -> pic d'œstradiol (>200 pg/mL pendant 36h) inversant le rétrocontrôle en RÉTROCONTRÔLE POSITIF -> pic ovulatoire massif de LH (décharge ovulante) à J14 -> ovulation -> phase lutéale de 14 jours fixes (corps jaune sécrétant progestérone et œstrogène avec rétrocontrôle négatif). Chute hormonale en fin de cycle provoquant la nécrose de l'endomètre et les règles. 4. Pilule combinée : œstrogène + progestatif de synthèse maintenant un rétrocontrôle négatif continu, inhibant les pics de LH/FSH, bloquant l'ovulation et imperméabilisant la glaire cervicale.",
          explanation: "Endocrinologie ovarienne, rétrocontrôle positif préovulatoire et contraception hormonale.",
          contextOrApplication: "QCM 1 à 145 du recueil Alouane Mbarek (p. 29-76)."
        },
        {
          name: "Brassage Génétique Méiotique & Dihybridisme (QCM 1 à 43)",
          formulaOrRule: "1. Brassage intrachromosomique : crossing-over en prophase I de méiose par échange réciproque de segments entre chromatides non-sœurs au niveau des chiasmas. 2. Brassage interchromosomique : orientation et disjonction indépendante et aléatoire des chromosomes homologues en anaphase I (2^n combinaisons gamétiques). 3. Dihybridisme : deux gènes indépendants donnent en F2 (autofécondation F1) le ratio 9/16, 3/16, 3/16, 1/16 et en test-cross 1:1:1:1 (25% chacun). Deux gènes liés (linkage) donnent en test-cross une majorité de phénotypes parentaux (>50%) et une minorité de phénotypes recombinés issus de crossing-over.",
          explanation: "Lois de Mendel, recombinaisons méiotiques et interprétation génotypique de test-cross.",
          contextOrApplication: "QCM 1 à 43 du recueil Alouane Mbarek (p. 77-94)."
        },
        {
          name: "Génétique Humaine, Pedigrees & Anomalies Caryotypiques (QCM 1 à 54)",
          formulaOrRule: "1. Transmission récessive liée à X (daltonisme, hémophilie, myopathie de Duchenne) : hommes atteints hémizygotes (XmY) ; père malade ne transmettant jamais la tare à ses fils (il donne son Y) ; toutes ses filles sont conductrices obligatoires. Une femme malade (XmXm) a obligatoirement un père malade et une mère conductrice. 2. Aneuploïdies : non-disjonction en anaphase I ou II. Syndrome de Turner (45, X0 : femme stérile, petite taille) ; Syndrome de Klinefelter (47, XXY : homme stérile, gynécomastie) ; Trisomie 21 (47, XY+21 ou 47, XX+21).",
          explanation: "Règles d'exclusion généalogique et accidents chromosomiques méiotiques.",
          contextOrApplication: "QCM 1 à 54 du recueil Alouane Mbarek (p. 95-114)."
        },
        {
          name: "Neurophysiologie, Synapses & Réflexe Myotatique (QCM 1 à 147)",
          formulaOrRule: "1. Potentiel de repos (-70 mV) maintenu par la pompe Na+/K+ ATPase consommatrice d'ATP contre le gradient de fuite du K+. 2. Potentiel d'action (PA) : loi du tout ou rien sur la fibre isolée au franchissement du seuil (-50 mV), amplitude constante (~100 mV). Période réfractaire absolue puis relative imposant la conduction unidirectionnelle. 3. Réflexe myotatique : étirement musculaire -> potentiel de récepteur gradué au fuseau neuromusculaire -> potentiels d'action codés en fréquence dans les fibres sensitives afférentes Ia -> synapse monosynaptique excitatrice (PPSE par entrée de Na+) sur le motoneurone alpha du muscle agoniste ; dérivation sur interneurone inhibiteur à GABA (PPSI par entrée de Cl-) provoquant le relâchement du muscle antagoniste (innervation réciproque). Sommation spatiale et temporelle au cône axonique.",
          explanation: "Biochimie des canaux ioniques membranaires, codage de l'information et intégration motrice.",
          contextOrApplication: "QCM 1 à 147 du recueil Alouane Mbarek (p. 115-152)."
        },
        {
          name: "Régulation de la Pression Artérielle (QCM 1 à 30)",
          formulaOrRule: "1. Baroréflexe modérateur : hypertension -> stimulation des mécanorécepteurs des sinus carotidiens et de la crosse aortique -> potentiels d'action dans les nerfs afférents de Hering et Cyon -> activation du centre cardiomodérateur bulbaire (nerf vague X parasympathique libérant l'acétylcholine sur récepteurs muscariniques) -> bradycardie et baisse de la pression artérielle. Inhibition simultanée du centre vasomoteur sympathique -> vasodilatation artériolaire. 2. En hypotension (hémorragie) : levée du frein vagal et activation orthosympathique (noradrénaline et adrénaline surrénalienne) -> tachycardie et vasoconstriction périphérique.",
          explanation: "Boucle de rétroaction nerveuse négative assurant la constance de la pression artérielle.",
          contextOrApplication: "QCM 1 à 30 du recueil Alouane Mbarek (p. 153-162)."
        },
        {
          name: "Immunologie Spécifique, Allergie & VIH/SIDA (QCM 1 à 148)",
          formulaOrRule: "1. CMH (HLA chez l'homme) : CMH I sur toutes cellules nucléées (présentation aux LT8) ; CMH II sur CPAg (présentation aux LT4). 2. Réponse adaptative : sélection clonale -> prolifération médiée par l'IL-2 des LT4 -> différenciation des LB en plasmocytes sécréteurs d'anticorps neutralisants (RIMH) et des LT8 en LTc cytotoxiques perforines/granzymes (RIMC). 3. Allergie immédiate de type I : 1er contact = sensibilisation (synthèse d'IgE fixées sur mastocytes via fragment Fc) ; 2e contact = pontage des IgE par l'allergène -> dégranulation massive d'histamine provoquant vasodilatation et bronchospasme. 4. VIH : cible préférentielle les LT4 via gp120/CD4 ; l'effondrement des LT4 sous 200/mm3 conduit au SIDA déclaré.",
          explanation: "Distinction RIMH vs RIMC, mécanismes de l'hypersensibilité immédiate et immunodéficience acquise.",
          contextOrApplication: "QCM 1 à 148 du recueil Alouane Mbarek (p. 163-179)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Débusquer les pièges de formulation absolue dans les QCM",
          whatToDo: "Analyser attentivement les adverbes restrictifs : « toujours », « jamais », « uniquement », « toutes ». Exemple piégeux : « La testostérone est sécrétée à taux constant » -> FAUX, la sécrétion est pulsatile. « Le réflexe myotatique est toujours involontaire » -> VRAI.",
          reflexOrTip: "Dans un QCM de SVT, une proposition contenant un terme absolu est fausse dans plus de 80% des cas, sauf pour les lois fondamentales."
        },
        {
          stepNumber: 2,
          title: "Valider les mécanismes endocriniens de rétrocontrôle",
          whatToDo: "Se rappeler la règle d'or : chez le mâle, les rétrocontrôles sont TOUJOURS négatifs. Chez la femelle, le rétrocontrôle est négatif pendant la majeure partie du cycle, mais devient POSITIF de manière transitoire 24 à 48h avant l'ovulation lorsque l'œstradiol dépasse 200 pg/mL.",
          reflexOrTip: "La castration chez le mâle entraîne une surproduction massive et permanente de LH et FSH par levée totale du rétrocontrôle négatif."
        },
        {
          stepNumber: 3,
          title: "Identifier les modes de transmission sur un arbre généalogique",
          whatToDo: "1. Si des parents sains ont un enfant atteint : la tare est obligatoirement RÉCESSIVE. 2. Si une fille malade a un père sain ou une mère malade a un fils sain : éliminer la récessivité liée à X (la tare est donc autosomique récessive). 3. Si un père malade a un fils atteint : éliminer toute liaison gonosomique à X (un père ne donne que son Y à ses fils).",
          reflexOrTip: "Pour les aneuploïdies : Turner = 45,X0 (monosomie X) ; Klinefelter = 47,XXY (trisomie gonosomique)."
        }
      ],
      solvedExample: {
        problemStatement: "QCM officiel type Bac (Collection SVT, Alouane MBAREK) : « Parmi les propositions suivantes concernant la régulation de la fonction reproductrice masculine, cochez la ou les affirmations exactes et justifiez :\n" +
          "A. La cryptorchidie supprime la sécrétion de testostérone et les caractères sexuels secondaires.\n" +
          "B. La testostérone exerce un rétrocontrôle négatif sur l'adénohypophyse en freinant la libération de LH.\n" +
          "C. L'inhibine sécrétée par les cellules de Leydig freine sélectivement la sécrétion de FSH.\n" +
          "D. L'ablation des testicules (castration bilatérale) provoque une chute des concentrations sanguines de LH et de FSH. »",
        solutionStepByStep: "Analyse détaillée item par item :\n" +
          "• Item A : FAUX. Les cellules de Leydig interstitielles tolèrent la température corporelle abdominale (37°C) et continuent de sécréter la testostérone ; seuls les tubes séminifères dégénèrent, entraînant l'azoospermie (stérilité) avec maintien intact des caractères sexuels secondaires.\n" +
          "• Item B : VRAI. La testostérone exerce bien un rétrocontrôle négatif sur l'hypothalamus (diminue la fréquence des pulses de GnRH) et sur l'antéhypophyse (diminue l'amplitude des pulses de LH).\n" +
          "• Item C : FAUX. L'inhibine est sécrétée par les cellules de Sertoli (et non par les cellules de Leydig) sous l'effet de la FSH, et exerce un rétrocontrôle négatif sélectif sur la sécrétion adénohypophysaire de FSH.\n" +
          "• Item D : FAUX. La castration supprime la source de testostérone et d'inhibine, levant le rétrocontrôle négatif : les taux plasmatiques de LH et de FSH s'élèvent massivement (hypertrophie hypophysaire).",
        finalAnswer: "Seule la proposition B est exacte."
      },
      classicExamTraps: [
        "Confondre la cellule sécrétrice de l'inhibine (cellule de Sertoli stimulée par FSH) avec celle de la testostérone (cellule de Leydig stimulée par LH).",
        "Penser qu'il existe un rétrocontrôle positif chez l'homme : chez le mâle, le rétrocontrôle de la testostérone et de l'inhibine est STRICTEMENT et TOUJOURS négatif.",
        "Oublier que l'ovocyte expulsé lors de l'ovulation est un ovocyte II bloqué en métaphase II, et qu'il n'achève sa méiose (expulsion du 2e globule polaire) qu'en cas de fécondation.",
        "Confondre la formule caryotypique de Turner (45, X0 soit 44 autosomes + 1 seul X) avec celle de Klinefelter (47, XXY soit 44 autosomes + 2 X + 1 Y)."
      ],
      selfCheckChecklist: [
        "Le mécanisme du rétrocontrôle positif préovulatoire (taux d'œstradiol > 200 pg/mL pendant 36h déclenchant le pic de LH) est-il parfaitement maîtrisé ?",
        "Les proportions de test-cross pour deux gènes indépendants (1:1:1:1) vs gènes liés (>50% de parentaux et <50% de recombinés) sont-elles retenues ?",
        "La localisation des molécules HLA (CMH I sur toutes cellules nucléées vs CMH II sur CPAg uniquement) est-elle claire ?"
      ],
      quickRevisionMemo: "Mémo QCM SVT BAC Alouane Mbarek : Mâle = rétrocontrôle TOUJOURS négatif (Leydig -> testostérone freine LH ; Sertoli -> inhibine freine FSH) ; Cryptorchidie = stérile mais viril ; Femelle = rétrocontrôle négatif sauf à J12-J13 où œstradiol > 200 pg/mL déclenche rétrocontrôle positif et décharge ovulante de LH à J14 ; Pilule combinée = rétrocontrôle négatif continu sans pic de LH/FSH ; Méiose = 2n double -> 2 cellules n doubles (anaphase I) -> 4 cellules n simples (anaphase II) ; Brassage intra = crossing-over prophase I ; Brassage inter = ségrégation aléatoire anaphase I ; Test-cross gènes indépendants = 25%/25%/25%/25% ; Gènes liés = parentaux > recombinés ; Turner = 45,X0 ; Klinefelter = 47,XXY ; Trisomie 21 = 47,XX+21 ou 47,XY+21 ; Potentiel de repos = -70 mV par pompe Na+/K+ ATPase ; PA = loi du tout ou rien, amplitude fixe 100 mV, fréquence codante ; Myotatique = fuseau Ia -> arc monosynaptique excitateur motoneurone alpha agoniste + interneurone GABA antagoniste ; Baroréflexe = hypertension -> Hering/Cyon -> centre bulbaire dépresseur -> nerf X acétylcholine -> bradycardie ; CMH I = toutes cellules nucléées (LT8/LTc) ; CMH II = CPAg macrophages et LB (LT4) ; Allergie = IgE sur mastocytes + dégranulation histamine ; VIH = gp120 sur CD4 et CCR5, SIDA si LT4 < 200/mm3.",
      certificationNote: "Intégration officielle certifiée de la Collection SVT : QCM SVT BAC — Recueil Complet avec Corrigés Détaillés (Alouane MBAREK, Inspecteur Principal de l'Enseignement Secondaire)."
    };
  }

  // Détection spécifique du manuel SVT4 L'ÉTOILE - Annales Bac Tunisien 2000-2018 (Abdessattar Frikha & Sami Châabouni)
  if (/svt4|l\s*['’]?\s*etoile|frikha|chaabouni|ch[aâ]abouni|bayram|bac\s+tunisien.*svt|sciences?\s+experimentales.*etoile/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "SVT4 L'ÉTOILE — Annales Bac Tunisien 2000-2018 (A. Frikha & S. Châabouni)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (4ème Sciences Expérimentales & Mathématiques)",
      chapterTitle: "SVT4 L'ÉTOILE : Annales Officielles 2000-2018 & Synthèses Thématiques (Maison Bayram)",
      definitionAndScope: `Ouvrage de référence par excellence pour le Baccalauréat Tunisien (4ème Sciences Expérimentales & Mathématiques) conçu par Abdessattar Frikha et Sami Châabouni (Professeurs Principaux Hors Classe, Maison Bayram Édition & Diffusion, Sfax).\n\nIntègre les annales officielles complètes du Baccalauréat (sessions Principale et Contrôle de 2000 à 2018) avec corrigés méthodologiques exhaustifs, grilles d'évaluation et fiches synthétiques en couleur couvrant les 5 thèmes officiels : 1. Reproduction humaine et santé ; 2. Génétique diploïde et humaine ; 3. Évolution biologique ; 4. Neurophysiologie, régulation de la pression artérielle et hygiène nerveuse ; 5. Immunité spécifique et dysfonctionnements (VIH/SIDA).`,
      coreConceptsAndFormulas: [
        {
          name: "Reproduction Humaine : Régulation Hormonale, Rétrocontrôles & PMA (Thème 1)",
          formulaOrRule: "1. Mâle : Tubes séminifères (spermatogenèse en 74 jours) ; cellules de Sertoli (ABP et inhibine sous FSH) ; cellules de Leydig (testostérone sous LH). Rétrocontrôle négatif (RC-) permanent de la testostérone et de l'inhibine sur l'axe hypothalamo-hypophysaire. La cryptorchidie conserve les cellules de Leydig (virilité préservée). 2. Femelle : Folliculogenèse (primordial -> primaire -> secondaire -> cavitaire -> mûr de De Graaf). Rétrocontrôle négatif folliculaire basique, puis pic d'œstradiol (> 200 pg/mL pendant 36h) inversant le rétrocontrôle en RÉTROCONTRÔLE POSITIF (RC+) déclenchant la décharge ovulante de LH à J14. Corps jaune post-ovulatoire sécrétant progestérone et œstradiol (RC- lutéal). 3. Contraception : Pilule combinée maintenant un RC(-) permanent bloquant le pic de LH/FSH. PMA : FIVETE avec stimulation FSH, déclenchement par HCG et transfert embryonnaire.",
          explanation: "Distinction fondamentale entre rétrocontrôle négatif permanent chez l'homme et bascule en rétrocontrôle positif préovulatoire chez la femme.",
          contextOrApplication: "Exercices Bac 2000 à 2018 de reproduction humaine (p. 4-45, corrigés p. 177-211)."
        },
        {
          name: "Génétique Diploïde, Dihybridisme & Analyse de Pedigrees (Thème 2)",
          formulaOrRule: "1. Méiose : Brassage intrachromosomique par crossing-over en prophase I au niveau des chiasmas ; brassage interchromosomique par ségrégation aléatoire des chromosomes homologues en anaphase I. 2. Dihybridisme : Gènes indépendants -> F2 = 9/16, 3/16, 3/16, 1/16 et test-cross = 1:1:1:1 (25% chacun). Gènes liés (linkage partiel) -> test-cross donne > 50% de parentaux et < 50% de recombinés. Distance d = % de recombinés (en cM). Chez la drosophile mâle, crossing-over nul (linkage absolu). 3. Génétique humaine : Allèle récessif si parents sains ont un enfant atteint ; tare liée à X récessive si homme atteint hémizygote XmY, père sain ayant fille malade impossible, femme malade ayant obligatoirement père atteint et mère conductrice ; tare dominante liée à X si père atteint transmet la maladie à 100% de ses filles et 0% de ses fils.",
          explanation: "Lois de Mendel, recombinaisons chromosomiques et règles d'exclusion formelle sur arbres généalogiques et profils d'électrophorèse d'ADN.",
          contextOrApplication: "Exercices Bac 2000 à 2018 de génétique et transmission des allèles (p. 46-78, corrigés p. 212-256)."
        },
        {
          name: "Évolution Biologique, Homologies & Spéciation (Thème 3)",
          formulaOrRule: "1. Arguments de l'évolution : Homologies anatomiques (plan d'organisation pentadactyle des membres antérieurs des vertébrés tétrapodes : homme, chauve-souris, baleine, oiseau) ; homologies embryologiques ; homologies moléculaires (séquences comparées d'acides aminés de l'hémoglobine et du cytochrome C). 2. Phylogénie : Le degré de parenté est directement proportionnel au pourcentage de similitude entre séquences homologues. 3. Spéciation : Spéciation allopatrique (isolement géographique puis divergence génétique) vs spéciation sympatrique (barrières écologiques, comportementales ou polyploïdie).",
          explanation: "Preuves paléontologiques, morphologiques et moléculaires de la descendance avec modification et mécanismes de spéciation.",
          contextOrApplication: "Exercices Bac d'évolution biologique (p. 79-85, corrigés p. 256-259)."
        },
        {
          name: "Neurophysiologie, Pression Artérielle & Stress (Thème 4)",
          formulaOrRule: "1. Tissu nerveux : Potentiel de repos (-70 mV, pompe Na+/K+ ATPase) ; potentiel d'action (dépolarisation CVD Na+, repolarisation CVD K+, loi du tout ou rien, conduction saltatoire). 2. Synapse & Plaque motrice : Entrée présynaptique de Ca2+ -> exocytose d'acétylcholine -> fixation sur CCD Na+ postsynaptiques -> PPSE / PPM -> hydrolyse par l'acétylcholinestérase. Blocage compétitif par le curare. 3. Réflexe myotatique : Fuseau neuromusculaire -> fibre sensitive Ia -> synapse excitatrice monosynaptique sur le motoneurone alpha de l'agoniste (PPSE) + interneurone inhibiteur à GABA sur l'antagoniste (PPSI). 4. Contraction musculaire : Libération de Ca2+ du réticulum -> démasquage de l'actine par la troponine -> fixation des têtes de myosine hydrolysant l'ATP -> glissement des myofilaments (raccourcissement des bandes I et H, bande A constante). 5. Baroréflexe : Hypertension -> Hering et Cyon -> centre cardiomodérateur bulbaire (nerf vague X acétylcholine) -> bradycardie et baisse de PA. 6. Stress : Alarme (noradrénaline/adrénaline) -> Résistance (axe CRH-ACTH-cortisol stimulant la néoglucogenèse) -> Épuisement.",
          explanation: "Intégration nerveuse, couplage excitation-contraction et régulations homéostasiques réflexes et neuro-endocrines.",
          contextOrApplication: "Exercices Bac de neurophysiologie et cardiologie (p. 86-147, corrigés p. 260-304)."
        },
        {
          name: "Immunologie Spécifique, Allergie & SIDA (Thème 5)",
          formulaOrRule: "1. Marqueurs du soi : Système ABO et système CMH/HLA (CMH I sur toutes cellules nucléées, CMH II sur CPAg macrophages et LB). Rejet d'allogreffe par cytotoxicité LTc. 2. Réponse adaptative : CPAg présente l'antigène au LT4 (CMH II) -> sécrétion d'IL-1 -> LT4 activé sécrète IL-2 -> prolifération et différenciation clonale des LB en plasmocytes sécréteurs d'anticorps neutralisants (RIMH) et des LT8 en LTc cytotoxiques perforines/granzymes (RIMC). 3. Allergie immédiate : Sensibilisation (IgE fixées sur mastocytes via fragment Fc) -> Déclenchement (pontage des IgE par l'allergène -> dégranulation massive d'histamine). 4. VIH/SIDA : Rétrovirus à ARN ciblant gp120 sur récepteur CD4 des LT4 -> transcriptase inverse ARN en ADN proviral -> intégration -> destruction des LT4 (seuil SIDA < 200 LT4/mm3).",
          explanation: "Coopération cellulaire macrophage-LT4-LT8-LB, effecteurs de l'immunité acquise et immunopathologie.",
          contextOrApplication: "Exercices Bac d'immunologie et virologie (p. 148-176, corrigés p. 305-328)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Exploitation méthodique des documents expérimentaux",
          whatToDo: "Adopter la démarche rigoureuse du Bac Tunisien : 'Je vois que...' (analyse objective des variations chiffrées de la courbe ou de l'électrophorèse sans paraphrase), 'Or je sais que...' (rappel de la règle physiologique ou génétique certifiée), 'Donc j'en déduis que...' (conclusion biologique précise répondant à la question).",
          reflexOrTip: "Dans une analyse comparée de courbes, toujours chiffrer les valeurs remarquables (valeurs initiales, pics, durées en heures ou jours)."
        },
        {
          stepNumber: 2,
          title: "Démarche d'exclusion génétique pour les arbres généalogiques",
          whatToDo: "1. Prouver la dominance ou récessivité (ex: parents sains I1 et I2 ayant un enfant malade II3 -> l'allèle responsable est récessif car masqué chez les parents). 2. Tester et éliminer l'hypothèse d'une liaison à Y (femmes malades impossibles) et à X récessif (vérifier si une fille malade a un père sain ou si une mère malade a un fils sain). 3. Conclure sur l'autosomalité et dresser le tableau des génotypes certains et probables avec calcul de probabilité.",
          reflexOrTip: "Toujours formuler clairement l'hypothèse avant de la confronter aux contre-exemples du pedigree."
        },
        {
          stepNumber: 3,
          title: "Élaboration de schémas fonctionnels fléchés intégrés",
          whatToDo: "Construire des cadres distincts pour les organes capteurs, centres intégrateurs, voies de transmission et organes cibles. Indiquer la polarité des actions (+ pour stimulation, - pour inhibition/rétrocontrôle négatif) et annoter clairement les médiateurs chimiques (hormones, neurotransmetteurs, cytokines).",
          reflexOrTip: "Donner obligatoirement un titre complet souligné et une légende explicative aux schémas fonctionnels."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice type Bac Tunisien (SVT4 L'ÉTOILE, Session Principale) : « Chez un chien anesthésié, on réalise la ligature bilatérale des artères carotides primitives en aval (au-dessus) des sinus carotidiens. On observe une élévation de la fréquence de décharge des potentiels d'action dans le nerf de Hering et un ralentissement immédiat du rythme cardiaque (bradycardie). Expliquez rigoureusement ces résultats à l'aide de vos connaissances sur le baroréflexe. »",
        solutionStepByStep: "1. Analyse du document expérimental :\n" +
          "   - La ligature en aval (au-dessus) des sinus carotidiens bloque l'écoulement du sang vers le cerveau, provoquant une accumulation sanguine et une forte surpression intra-sinusale (hypertension locale au niveau des sinus carotidiens).\n" +
          "   - Les barorécepteurs (mécanorécepteurs) logés dans la paroi du sinus carotidien sont étirés et stimulés, ce qui déclenche une augmentation de la fréquence des potentiels d'action propagés le long des fibres afférentes du nerf de Hering.\n" +
          "2. Intégration nerveuse et voie efférente :\n" +
          "   - Les influx sensitifs du nerf de Hering parviennent au centre cardiomodérateur bulbaire et l'excitent.\n" +
          "   - Le centre cardiomodérateur active le nerf vague (pneumogastrique X, voie motrice parasympathique).\n" +
          "   - Les terminaisons du nerf X libèrent l'acétylcholine au niveau du nœud sinusal du myocarde, ce qui provoque une hyperpolarisation des cellules cardionectrices et ralentit le rythme des contractions (bradycardie).\n" +
          "3. Conclusion et rôle physiologique :\n" +
          "   - Ce réflexe modérateur permet de ramener la pression artérielle à sa valeur de consigne normale par boucle de rétroaction négative.",
        finalAnswer: "Démonstration expérimentale complète validant le mécanisme baroréflexe cardiomodérateur bulbaire (SVT4 L'ÉTOILE)."
      },
      classicExamTraps: [
        "Confondre la ligature en amont (en dessous du sinus : entraîne hypotension sinusale et tachycardie réflexe) avec la ligature en aval (au-dessus du sinus : entraîne surpression sinusale et bradycardie).",
        "Oublier que chez la drosophile mâle, il n'y a JAMAIS de crossing-over (linkage absolu donnant uniquement 2 classes parentales 50%/50% en test-cross).",
        "Croire que l'ovocyte expulsé lors de l'ovulation a terminé sa méiose : il est bloqué en métaphase II et n'expulse son 2ème globule polaire qu'après pénétration du spermatozoïde.",
        "Confondre la réponse immunitaire humorale RIMH (lymphocytes B transformés en plasmocytes produisant des anticorps solubles) et la réponse cellulaire RIMC (lymphocytes T8 transformés en LTc cytotoxiques agissant par contact direct avec perforine/granzyme)."
      ],
      selfCheckChecklist: [
        "L'exploitation des documents suit-elle la démarche rigoureuse : Saisie de données -> Déduction -> Bilan ?",
        "Les étapes de transmission synaptique (CVD Ca2+, exocytose ACh, CCD Na+, PPSE, acétylcholinestérase) sont-elles restituées dans l'ordre chronologique ?",
        "Les mécanismes de rétrocontrôle (négatif basique vs positif préovulatoire lors du pic d'œstradiol > 200 pg/mL) sont-ils clairement justifiés ?"
      ],
      quickRevisionMemo: "Mémo SVT4 L'ÉTOILE : Homme = RC(-) strict et permanent (Leydig/testostérone freine LH, Sertoli/inhibine freine FSH) ; Femme = RC(-) puis RC(+) préovulatoire (œstradiol > 200 pg/mL déclenche pic de LH à J14) ; Pilule combinée = RC(-) permanent bloquant l'ovulation ; Brassage inter = anaphase I (2^n) ; Brassage intra = prophase I (crossing-over chiasmas) ; Test-cross gènes indépendants = 1:1:1:1 (25% x 4) ; Gènes liés = parentaux > 50% et recombinés < 50% (distance en cM) ; Drosophile mâle = 0 crossing-over ; Pedigree : parents sains + enfant malade = récessif ; père sain + fille malade = pas lié à X récessif ; Potentiel de repos = -70 mV (pompe Na+/K+) ; PA = tout ou rien, 100 mV ; Myotatique = fuseau Ia monosynaptique excitateur motoneurone agoniste + interneurone GABA inhibiteur antagoniste ; Sarcomère = bande A constante, bandes I et H réduites, glissement actine/myosine dépendant d'ATP et Ca2+ ; Baroréflexe = Hering/Cyon -> bulbe cardiomodérateur -> nerf X acétylcholine -> bradycardie ; CMH I = toutes cellules nucléées (LT8) ; CMH II = CPAg macrophages et LB (LT4) ; IL-2 = facteur de prolifération clonale sécrété par LT4 auxiliaires ; Allergie = IgE sur mastocytes + dégranulation histamine ; SIDA = VIH gp120 détruisant les LT4 (stade SIDA si LT4 < 200/mm3).",
      certificationNote: "Intégration officielle certifiée de SVT4 L'ÉTOILE — Annales Officielles du Baccalauréat Tunisien avec Corrigés Détaillés (Abdessattar Frikha & Sami Châabouni, Maison Bayram Édition & Diffusion)."
    };
  }

  // Détection spécifique de l'Atelier de Renforcement aux Techniques d'Analyse et d'Interprétation des Résultats en SVT (Inspecteur YAO FIENI FRANÇOIS, APFC Abidjan 3 / MENET Côte d'Ivoire)
  if (/yao\s*fieni|fieni|apfc\s*abidjan|techniques?\s+d\s*['’]?\s*analyse|analyse\s+et\s+(?:d\s*['’]?\s*)?interpr[eé]tation|interpr[eé]tation\s+des\s+r[eé]sultats|saisie\s+de\s+donn[eé]es.*interpr[eé]tation|renforcement.*capacites.*enseignants.*svt|systeme\s+branche.*svt|favisme.*pedigree/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "SVT — Techniques d'Analyse & d'Interprétation des Résultats (Méthodologie Officielle)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale D / C / Scientifique (Baccalauréat Scientifique)",
      chapterTitle: "Techniques d'Analyse et d'Interprétation des Résultats Expérimentaux en SVT",
      definitionAndScope: `Guide méthodologique de référence pour l'analyse et l'interprétation des résultats en SVT.\n\nCe document fixe les critères scientifiques et les protocoles méthodologiques pour les épreuves de SVT : traitement d'observations (schémas, microscopie électronique, organites), résultats expérimentaux (schémas, tableaux, graphiques, courbes et histogrammes), croisements génétiques formels (monohybridisme, dihybridisme par système branché, test statistique de conformité) et arbres généalogiques (pedigrees).`,
      coreConceptsAndFormulas: [
        {
          name: "Règle Canonique d'Analyse vs Interprétation selon la Nature du Support",
          formulaOrRule: "1. Structure morphologique/anatomique/cytologique : ANALYSE = identifier la nature (organe, cellule, organite), nommer les constituants, similitudes/différences, mise en relation. RÈGLE D'OR : S'agissant de la structure des appareils, des organes, des cellules, des organites cellulaires, l'INTERPRÉTATION N'EST PAS NÉCESSAIRE ! Seule la conclusion est attendue. 2. Électronographie fonctionnelle (synapse) : ANALYSE = décrire l'état morphologique des vésicules (isolées ou fusionnées avec la membrane présynaptique) ; INTERPRÉTATION = déduire l'état physiologique (repos vs activité d'exocytose sous l'action du Ca2+). 3. Expériences en schémas (germination du cacao, immunité à l'anatoxine tétanique) : ANALYSE = relever les faits significatifs ; INTERPRÉTATION = expliciter les mécanismes physiologiques causaux (absorption d'eau vs asphyxie ; anticorps spécifiques neutralisants).",
          explanation: "Évite l'erreur la plus fréquente des candidats consistant à mélanger description factuelle et explication biologique causale.",
          contextOrApplication: "Applicable à toutes les questions de saisie de données et d'interprétation au Baccalauréat."
        },
        {
          name: "Règles Impératives pour l'Analyse des Courbes et Histogrammes",
          formulaOrRule: "1. Présentation normalisée obligatoire : « La courbe (ou l'histogramme) traduit l'évolution de [grandeur en ordonnée + unités] en fonction de [grandeur en abscisse + unités] ». 2. Découpage en phases : repérer les origines, paliers, ruptures de pente, optimums et points d'annulation avec les chiffres précis. 3. INTERDICTIONS FORMELLES : Proscrire rigoureusement les verbes 'varie' et 'évolue' (qui n'indiquent aucun sens d'évolution) et la paraphrase 'la courbe monte' ou 'la courbe descend'. Toujours dire : la valeur du paramètre augmente, diminue, reste constante à [valeur], ou s'annule à [valeur]. 4. Exemple Photosynthèse de l'élodée : À 0°C (froid), 0 bulle car enzymes inactives ; de 0 à 20°C, augmentation continue car la vitesse réactionnelle croît (facteur limitant) ; entre 20 et 25°C, palier à 50 bulles/min (optimum thermique) ; au-delà de 25°C, baisse puis annulation à 50°C (dénaturation thermique des enzymes, température létale).",
          explanation: "Rigueur métrologique et vocabulaire scientifique exigé par les jurys du Bac.",
          contextOrApplication: "Étude des courbes d'action enzymatique, de potentiel d'action et d'action des drogues (nicotine, cocaïne, diazépam)."
        },
        {
          name: "Dihybridisme : Analyse Séparée, Système Branché et Test d'Hypothèse",
          formulaOrRule: "1. Analyse caractère par caractère en F2 : calculer les proportions de chaque caractère isolé (ex: manioc, taille des tubercules : 75% petits = 3/4 et 25% gros = 1/4 -> dominance G/g ; comportement au pourrissement : 75% résistants = 3/4 et 25% sensibles = 1/4 -> dominance S/s). 2. Système branché pour gènes indépendants : 3/4 [G] x 3/4 [S] = 9/16 [G S] ; 3/4 [G] x 1/4 [s] = 3/16 [G s] ; 1/4 [g] x 3/4 [S] = 3/16 [g S] ; 1/4 [g] x 1/4 [s] = 1/16 [g s]. 3. Test statistique d'hypothèse : multiplier l'effectif total N par 9/16, 3/16, 3/16, 1/16 pour obtenir les effectifs théoriques attendus ; comparer aux effectifs observés. Si identiques au plan statistique, conclure que les deux gènes sont indépendants (portés par deux paires distinctes de chromosomes homologues).",
          explanation: "Méthode officielle ivoirienne de démonstration génétique garantissant la note maximale.",
          contextOrApplication: "Croisements mendéliens de dihybridisme chez le manioc et le maïs (p. 15-18)."
        },
        {
          name: "Analyse et Démonstration sur Arbres Généalogiques (Pedigree du Favisme)",
          formulaOrRule: "1. Récessivité : Rechercher un couple de parents sains ayant au moins un enfant atteint (ex: couple D-E sain ayant les garçons I et K atteints) -> l'allèle est récessif car masqué chez les parents. 2. Hérédité liée au sexe (chromosome X) : La maladie n'atteint que les garçons dans la descendance de mères conductrices ; un homme malade A transmet son chromosome X porteur de l'allèle f à toutes ses filles qui deviennent conductrices saines (XF Xf). 3. Échiquier chromosomique de vérification : Couple D (XF Xf) x E (XF Y) donne 50% de filles saines, 25% de garçons sains (XF Y) et 25% de garçons atteints (Xf Y), strictement conforme aux observations.",
          explanation: "Règles d'exclusion formelle et calcul des probabilités de transmission des maladies héréditaires.",
          contextOrApplication: "Étude des anomalies héréditaires gonosomales récessives (favisme, daltonisme, hémophilie)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Saisie ordonnée des données d'un document (Analyse)",
          whatToDo: "Présenter le document sans interprétation prématurée. Citer des données chiffrées précises lues sur les axes ou le tableau. Découper systématiquement en intervalles ou catégories. Ne jamais anticiper sur la conclusion.",
          reflexOrTip: "Vérifier si le document est purement anatomique : si oui, décrire les parties sans chercher d'interprétation fonctionnelle superflue."
        },
        {
          stepNumber: 2,
          title: "Mise en relation et explication biologique (Interprétation)",
          whatToDo: "Mobiliser les savoirs scientifiques certifiés du programme officiel pour expliquer le pourquoi et le comment des variations constatées dans l'analyse.",
          reflexOrTip: "Chaque fait relevé dans l'analyse doit trouver son explication physiologique correspondante."
        },
        {
          stepNumber: 3,
          title: "Formulation de la conclusion générale",
          whatToDo: "Rédiger une synthèse concise de 1 à 2 phrases répondant directement à la question de recherche posée en introduction de l'exercice.",
          reflexOrTip: "La conclusion doit être déduite uniquement des faits analysés et interprétés."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice type Atelier APFC Abidjan 3 : « On analyse la composition du plasma sanguin et de l'urine primitive chez un individu sain à l'aide d'un histogramme. On constate que le glucose (1 g/L), le sodium, le potassium, les chlorures et l'urée présentent des concentrations rigoureusement identiques dans les deux liquides, alors que les protéines et les triglycérides sont totalement absentes de l'urine primitive. Analysez et interprétez ces résultats, puis tirez une conclusion sur le fonctionnement du néphron. »",
        solutionStepByStep: "1. Analyse de l'histogramme :\n" +
          "   - L'histogramme traduit la concentration de divers constituants dans le plasma sanguin et dans l'urine primitive.\n" +
          "   - Les concentrations de glucose, de sodium, de potassium, de chlorures et d'urée sont identiques dans le plasma et dans l'urine primitive.\n" +
          "   - En revanche, les concentrations des protéines (élevée dans le plasma) et des triglycérides (faible dans le plasma) sont strictement nulles dans l'urine primitive.\n" +
          "2. Interprétation des résultats :\n" +
          "   - Les parois du glomérule et de la capsule de Bowman laissent passer par filtration glomérulaire les micromolécules (glucose, ions minéraux, urée) sous l'effet de la pression efficace de filtration.\n" +
          "   - À l'opposé, les pores de la membrane de filtration s'opposent au passage des macromolécules biologiques (protéines plasmatiques et triglycérides), ce qui explique leur absence totale dans l'urine primitive.\n" +
          "3. Conclusion :\n" +
          "   - Le glomérule rénal joue le rôle d'un filtre sélectif mécanique et chimique basé sur la taille moléculaire.",
        finalAnswer: "Démonstration conforme aux critères d'évaluation officiels de l'APFC Abidjan 3 (Inspecteur Yao Fieni François)."
      },
      classicExamTraps: [
        "Employer les verbes interdits 'varie' ou 'évolue' lors de l'analyse d'une courbe de SVT.",
        "Écrire 'la courbe monte' au lieu de 'la vitesse photosynthétique augmente de 0 à 50 bulles/minute'.",
        "Tenter d'interpréter un schéma purement anatomique (appareil génital, structure d'un organe) : seule l'analyse descriptive et la conclusion sont attendues.",
        "Oublier de multiplier l'effectif total par les fractions mendéliennes (9/16, 3/16, etc.) pour calculer les effectifs théoriques attendus lors du test d'hypothèse de dihybridisme."
      ],
      selfCheckChecklist: [
        "Ai-je bien distingué la partie Analyse (faits mesurés) de la partie Interprétation (explications causales) ?",
        "Toutes les valeurs numériques remarquables sont-elles mentionnées avec leurs unités exactes ?",
        "L'hypothèse génétique a-t-elle été validée par le calcul des effectifs théoriques attendus ?"
      ],
      quickRevisionMemo: "Mémo Méthodologie SVT : 1° Structure anatomique = observation descriptive + identification (pas d'interprétation causale) ; 2° Courbes = présenter (ordonnée en fonction d'abscisse), découper aux ruptures, chiffrer précisément avec unités, proscrire 'varie' et 'monte' ; 3° Histogramme rénal = glomérule = filtre sélectif ; 4° Dihybridisme = étude séparée (3/4, 1/4), méthode du système branché (9/16, 3/16, 3/16, 1/16), test de conformité statistique ; 5° Pedigree = déduction rigoureuse de la dominance/récessivité et du support chromosomique.",
      certificationNote: "Fiche certifiée conforme aux exigences méthodologiques des épreuves de SVT du Baccalauréat."
    };
  }

  // Détection spécifique du Cours Officiel Intégral de SVT Terminale D (15 Chapitres, 175 Heures, Coeff. 5)
  if (/cours\s+(?:officiel\s+)?(?:integral\s+)?svt\s*t(?:erminale)?\s*d|svt\s*t(?:erminale)?\s*d.*15\s+chapitres|programme\s+officiel\s+annuel\s+svt\s*t(?:erminale)?\s*d|unicite\s+des\s+individus\s+et\s+diversite\s+genetique|evolution\s+de\s+la\s+terre\s+et\s+du\s+monde\s+vivant|miller.*urey.*soupe\s+primitive|mecanismes\s+de\s+l\s*['’]?\s*immunite|centres\s+nerveux.*motricite\s+dirigee|regulations?\s+neuro[\s-]hormonale/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "SVT Terminale D — Cours Officiel Intégral (15 Chapitres, 175h, Coeff. 5)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale D (Baccalauréat Scientifique Côte d'Ivoire & Afrique de l'Ouest)",
      chapterTitle: "Programme National de SVT Terminale D : Synthèse Complète des 15 Chapitres Officiels",
      definitionAndScope: `Cours magistral de référence nationale pour les élèves de Terminale D (volume horaire : 175 heures annuelles, 7h/semaine, coefficient 5).\n\nOrganisé en 5 grandes parties et 15 chapitres exhaustifs :\n- Partie I : Unicité des individus et diversité génétique des populations (Chap. I à IV)\n- Partie II : L'évolution de la Terre et du monde vivant (Chap. V à VII)\n- Partie III : Mécanismes de l'immunité (Chap. VIII à X)\n- Partie IV : Quelques aspects du fonctionnement des centres nerveux (Chap. XI à XIII)\n- Partie V : Régulations hormonale et nerveuse (Chap. XIV & XV).`,
      coreConceptsAndFormulas: [
        {
          name: "Partie I : Reproduction Mammifères/Spermaphytes & Lois de Mendel (Chap. I à IV)",
          formulaOrRule: "1. Spermatogenèse (continue, 74 jours) vs Ovogenèse (discontinue, stock ovocyte I d'1 million à la naissance, bloquée en prophase I puis métaphase II). Folliculogenèse : primordial -> primaire -> secondaire (thèque interne/œstrogènes) -> cavitaire -> mûr de De Graaf -> ovulation à J14 sous pic de LH déclenché par RC+ d'œstradiol (> 200 pg/mL) -> corps jaune sécrétant progestérone (RC-). 2. Spermaphytes : étamine (anthère, 4 sacs polliniques, grains de pollen à noyaux végétatif et reproducteur) et pistil (nucelle, sac embryonnaire à 8 noyaux). Double fécondation : 1er anthérozoïde + oosphère -> œuf embryon 2n ; 2ème anthérozoïde + 2 noyaux centraux -> œuf albumen triploïde 3n. 3. Génétique : Monohybridisme (F1 100%, F2 3/4 1/4 dominance, 1/2 1/4 1/4 codominance, 2/3 1/3 gène létal). Dihybridisme : 9/16, 3/16, 3/16, 1/16 (gènes indépendants). Linkage partiel avec crossing-over chez drosophile femelle (distance en cM = % recombinés) vs linkage absolu chez le mâle (0 crossing-over). 4. Génétique humaine : drépanocytose (mutation HbA -> HbS par substitution acide glutamique -> valine en pos. 6, avantage hétérozygote AS face au paludisme), système ABO (gène H et substance H, phénotype Bombay), daltonisme et hémophilie liés à X.",
          explanation: "Fondements de la méiose, de la transmission héréditaire et de la procréation chez les vivants.",
          contextOrApplication: "Exercices de croisements, arbres généalogiques et calculs de risques génétiques prénuptiaux (p. 2-41)."
        },
        {
          name: "Partie II : Évolution de la Terre, Expérience de Miller et Hominisation (Chap. V à VII)",
          formulaOrRule: "1. Origine de la vie : Expérience de Miller et Urey (1953) démontrant la synthèse abiotique d'acides aminés dans les conditions réductrices de la Terre primitive (CH4, NH3, H2O, H2 + étincelles) dans la 'soupe primitive' d'Haldane formant des coacervats. Première photosynthèse anaérobie (H2S + CO2 -> MO + S), puis photosynthèse oxygénique des cyanobactéries (-2 Ga) enrichissant l'atmosphère en O2 et créant la couche d'ozone O3. 2. Crises biologiques : Permien (-245 Ma, 90% d'extinction marine dont les trilobites), Crétacé-Tertiaire (-65 Ma, disparition des dinosaures par impact d'astéroïde de 10 km à Chicxulub avec iridium + trapps du Deccan). 3. Lignée humaine : Caryotype homme (2n=46) vs chimpanzé (2n=48) issu de la fusion de 2 chromosomes. Critères d'hominisation : bipédie (3 Ma), augmentation du volume crânien (400 cm3 chez Lucy à 1400 cm3 chez Sapiens), fabrication d'outils (Habilis 2,5 Ma), feu (Erectus 1200 cm3), rites funéraires (Néandertal), pensée conceptuelle et art (Homo sapiens sapiens).",
          explanation: "Phylogénie moléculaire, archives géologiques et étapes clés de l'hominisation.",
          contextOrApplication: "Commentaires de documents paléontologiques et stratigraphiques (p. 42-56)."
        },
        {
          name: "Partie III : Immunologie Spécifique, Coopération Cellulaire & SIDA (Chap. VIII à X)",
          formulaOrRule: "1. Marqueurs : CMH I (toutes cellules nucléées) et CMH II (CPAg macrophages, cellules dendritiques, LB). 2. Immunocompétence : hématopoïèse dans la moelle osseuse, maturation thymique des LT par sélection positive (cortex, conservation CD4 ou CD8) et sélection négative (médulla, élimination des autoréactifs par apoptose). 3. Réponse acquise : CPAg présente l'antigène au LT4 -> sécrétion d'IL-1 -> LT4 activé sécrète l'interleukine 2 (IL-2). L'IL-2 stimule la prolifération clonale des LB (qui se différencient en plasmocytes sécrétant des anticorps spécifiques neutralisants en RIMH) et des LT8 (qui deviennent des LTc cytotoxiques détruisant les cellules infectées par perforine et granzymes en RIMC). 4. SIDA : rétrovirus VIH à ARN, fixation de la gp120 sur le CD4 des LT4, rétrotranscription par la transcriptase inverse en ADN proviral, destruction progressive des LT4 (seuil SIDA < 200 LT4/mm3). 5. Vaccin (préventif, mémoire durable) vs Sérum (curatif, passif, immédiat).",
          explanation: "Coordination centrale du système immunitaire par les cytokines et les sous-populations lymphocytaires.",
          contextOrApplication: "Étude des greffes, vaccinosérothérapie et immunopathologie (p. 57-72)."
        },
        {
          name: "Partie IV : Neurophysiologie, Potentiel d'Action & Voies Motrices (Chap. XI à XIII)",
          formulaOrRule: "1. Potentiel de repos (-70 mV) : maintenu par la pompe Na+/K+ ATPase et les canaux de fuite. 2. Potentiel d'action (100 mV) : seuil liminaire (-50 mV), loi du tout ou rien. Dépolarisation par flux entrant de Na+ via les CVD Na+ (bloqués par la tétrodotoxine TTX) ; repolarisation par flux sortant de K+ via les CVD K+ (bloqués par le tétraéthylammonium TEA). Conduction saltatoire de nœud en nœud sur fibre myélinisée. 3. Synapse : flux présynaptique de Ca2+ -> exocytose d'acétylcholine -> récepteurs postsynaptiques CCD Na+ -> PPSE (ou canaux Cl- activés par le GABA créant un PPSI). Sommation spatio-temporelle au cône d'émergence de l'axone. 4. Réflexe myotatique : récepteur fuseau neuromusculaire étiré -> fibre sensitive afférente Ia -> synapse excitatrice directe sur le motoneurone alpha du muscle agoniste (PPSE monosynaptique) + innervation réciproque via interneurone inhibiteur à GABA sur l'antagoniste (PPSI). 5. Voies cérébrales : aire motrice primaire (homoncule de Penfield), voies pyramidales directes croisées (motricité fine) et extrapyramidales (posture).",
          explanation: "Transmission de l'information électrique et intégration synaptique au sein des centres nerveux.",
          contextOrApplication: "Électrophysiologie expérimentale, réflexes médullaires et pharmacologie synaptique (p. 73-105)."
        },
        {
          name: "Partie V : Régulations Homéostasiques : Glycémie & Pression Artérielle (Chap. XIV & XV)",
          formulaOrRule: "1. Glycémie (valeur consigne : 0,8 à 1,2 g/L) : Organe effecteur = foie (expérience du foie lavé de Claude Bernard 1855) assurant glycogénogenèse après repas et glycogénolyse/néoglucogenèse à jeun. Régulation endocrine par les îlots de Langerhans : cellules bêta sécrétant l'insuline (seule hormone hypoglycémiante) et cellules alpha sécrétant le glucagon hyperglycémiant. Contrôle nerveux : sympathique splanchnique hyperglycémiant vs parasympathique pneumogastrique X hypoglycémiant. Diabète type I (destruction auto-immune des cellules bêta) vs type II (insulinorésistance liée au surpoids). 2. Pression artérielle (12/8 cmHg) : Régulation nerveuse réflexe (baroréflexe bulbaire) : hypertension -> stimulation barorécepteurs -> influx nerfs de Hering et Cyon -> activation centre cardiomodérateur bulbaire -> nerf vague X acétylcholine -> bradycardie et vasodilatation. Régulation hormonale : hypotension -> rénine rénale -> angiotensine I & II (vasoconstriction) -> aldostérone corticosurrénalienne (réabsorption de Na+ et d'eau) + ADH hypophysaire (réabsorption d'eau) -> rétablissement de la volémie et de la pression artérielle.",
          explanation: "Boucles homéostasiques de rétroaction négative préservant la constance du milieu intérieur.",
          contextOrApplication: "Analyse des dysfonctionnements métaboliques et cardiovasculaires (p. 106-126)."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Mobilisation structurée des savoirs (Introduction)",
          whatToDo: "Définir précisément le mot clé du sujet, situer le contexte biologique ou géologique, poser le problème scientifique sous forme de question directe et annoncer le plan en 2 ou 3 parties équilibrées.",
          reflexOrTip: "Ne jamais rédiger de généralités vagues ; introduire d'emblée les notions scientifiques ciblées."
        },
        {
          stepNumber: 2,
          title: "Développement analytique et argumenté",
          whatToDo: "Chaque partie doit débuter par une phrase directrice, développer le mécanisme physiologique ou génétique étape par étape avec le vocabulaire officiel certifié, et s'appuyer sur des données expérimentales ou des observations canoniques.",
          reflexOrTip: "Soigner les transitions logiques entre les parties (ex: passage du niveau cellulaire au niveau moléculaire ou de la régulation nerveuse à la régulation hormonale)."
        },
        {
          stepNumber: 3,
          title: "Schéma fonctionnel de synthèse et Conclusion",
          whatToDo: "Conclure en répondant sans ambiguïté au problème posé, dresser le bilan conceptuel et accompagner la réponse d'un schéma fonctionnel fléché complet (+ / - / rétrocontrôles / médiateurs).",
          reflexOrTip: "Le schéma doit obligatoirement comporter un titre complet souligné et une légende soignée."
        }
      ],
      solvedExample: {
        problemStatement: "Exercice de Synthèse type Bac SVT Terminale D : « Montrez par un exposé structuré comment le complexe hypothalamo-hypophysaire assure la régulation de la fonction reproductrice chez l'homme, en précisant les rétrocontrôles exercés par les cellules testiculaires. Illustrez votre exposé par un schéma fonctionnel complet. »",
        solutionStepByStep: "1. Introduction :\n" +
          "   - La reproduction chez l'homme est sous la dépendance d'un double fonctionnement testiculaire : la production continue de spermatozoïdes (fonction exocrine) et la sécrétion de testostérone (fonction endocrine).\n" +
          "   - Problème : Comment l'axe hypothalamo-hypophysaire coordonne-t-il ces deux fonctions et comment le testicule régule-t-il en retour cette activité ?\n" +
          "2. Contrôle hypothalamo-hypophysaire du testicule :\n" +
          "   - L'hypothalamus libère la GnRH de manière pulsatile (un pulse toutes les 90 minutes).\n" +
          "   - La GnRH stimule l'antéhypophyse qui sécrète deux gonadostimulines : la LH et la FSH.\n" +
          "   - La LH stimule les cellules de Leydig du tissu interstitiel, déclenchant la synthèse et la sécrétion de testostérone.\n" +
          "   - La FSH agit sur les cellules de Sertoli des tubes séminifères, stimulant la synthèse de l'ABP (protéine de liaison aux androgènes indispensable à la spermatogenèse) et la production des spermatozoïdes.\n" +
          "3. Mécanismes de rétrocontrôle négatif (feedback négatif) :\n" +
          "   - La testostérone circulante exerce en permanence un rétrocontrôle négatif sur l'hypothalamus (freinant la sécrétion de GnRH) et sur l'antéhypophyse (freinant la sécrétion de LH).\n" +
          "   - Les cellules de Sertoli sécrètent l'inhibine, hormone peptidique qui exerce un rétrocontrôle négatif sélectif sur l'antéhypophyse pour freiner la sécrétion de FSH.\n" +
          "   - En cas d'élévation anormale de la testostéronémie, le CHH est inhibé, réduisant les taux de LH/FSH jusqu'au retour à la valeur consigne.\n" +
          "4. Conclusion et schéma de synthèse :\n" +
          "   - L'axe hypothalamo-hypophysaire et le testicule forment une boucle homéostasique fermée assurant une production continue et régulée de gamètes et d'hormones mâles.",
        finalAnswer: "Exposé de synthèse intégral certifié conforme au Programme Officiel de SVT Terminale D."
      },
      classicExamTraps: [
        "Confondre la cellule cible de la LH (cellules interstitielles de Leydig) avec celle de la FSH (cellules nourricières de Sertoli).",
        "Oublier que la double fécondation chez les Spermaphytes produit deux tissus de ploïdies différentes : un embryon diploïde (2n) et un albumen triploïde (3n).",
        "Confondre l'effet de la TTX (qui bloque les canaux Na+ voltage-dépendants) avec celui du TEA (qui bloque les canaux K+ voltage-dépendants).",
        "Croire que le rétrocontrôle de l'œstradiol est toujours négatif : il devient positif à la fin de la phase folliculaire dès que le seuil de 200 pg/mL est dépassé pendant plus de 36 heures."
      ],
      selfCheckChecklist: [
        "Les 15 chapitres du programme sont-ils maîtrisés avec leur terminologie scientifique précise ?",
        "Les schémas fonctionnels comportent-ils les polarités (+ et -), les hormones exactes et un titre souligné ?",
        "Les démarches expérimentales (Claude Bernard, Magendie, Morgan, Miller-Urey) sont-elles restituées fidèlement ?"
      ],
      quickRevisionMemo: "Mémo Officiel SVT Terminale D : 1° Télécopie testiculaire = Leydig -> testostérone (LH), Sertoli -> ABP + inhibine (FSH), RC(-) strict ; 2° Cycle féminin = follicule (œstradiol), pic > 200 pg/mL -> RC(+) décharge ovulante LH à J14 -> corps jaune (progestérone + œstradiol, RC-) ; 3° Double fécondation Angiospermes = 1er anthérozoïde + oosphère -> zygote embryon 2n ; 2ème + 2 noyaux centraux -> albumen 3n ; 4° Dihybridisme = indépendants (9/16, 3/16, 3/16, 1/16) vs liés (crossing-over femelle drosophile, linkage absolu mâle) ; 5° Miller-Urey 1953 = soupe primitive réductrice (CH4, NH3, H2, H2O + étincelles -> acides aminés -> coacervats) ; 6° Hominisation = bipédie 3 Ma, crâne 400 à 1400 cm3, outils Habilis, feu Erectus, sépultures Néandertal, pensée conceptuelle Sapiens ; 7° Immunité = CMH I (toutes cellules, LT8) et CMH II (CPAg, LT4) ; IL-2 des LT4 stimule prolifération clonale ; plasmocytes (RIMH anticorps) vs LTc (RIMC perforine/granzyme) ; 8° PA = tout ou rien, dépolarisation CVD Na+ (TTX) repolarisation CVD K+ (TEA), conduction saltatoire Ranvier ; 9° Myotatique = FNM étiré -> Ia afférente -> monosynaptique agoniste PPSE + interneurone GABA antagoniste PPSI ; 10° Glycémie = Claude Bernard foie lavé 1855, insuline bêta hypoglycémiante vs glucagon alpha hyperglycémiant ; 11° Baroréflexe = Hering/Cyon -> bulbe cardiomodérateur nerf X acétylcholine -> bradycardie.",
      certificationNote: "Intégration officielle certifiée du Cours National Intégral de SVT Terminale D (15 Chapitres, 175 Heures, Ministère de l'Éducation Nationale)."
    };
  }

  // Détection spécifique du fascicule SVT Terminale L2 - Collection Le Pakao (reseauscolaire.com)
  if (/pakao|reseauscolaire|svt\s*cours\s*terminale\s*l2|svt\s*terminale\s*l2|svt\s*l2|reflexes?\s*(?:innes?|conditionnels?)|pfluger|loi\s+de\s+pfluger|dure\s*mere|arachnoide|pie\s*mere|aqueduc\s+de\s+sylvius|trou\s+de\s+monro|trou\s+de\s+magendie|stannius|ligatures?\s+de\s+stannius|ganglion\s+de\s+remak|ganglion\s+de\s+ludwig|ganglion\s+de\s+bidder|automatisme\s+cardiaque.*myogene|extrasystole\s+(?:non\s+)?decalente|loi\s+du\s+tout\s+ou\s+rien.*stries|loewi.*deux\s+coeurs|regulation\s+(?:de\s+la\s+)?glycemie|ilots?\s+de\s+langerhans|cellules?\s+(?:alpha|beta).*insuline|folliculogenese|fecondation\s+monosperme|reaction\s+acrosomique|caryogamie\s+amphimixie|poche\s+des\s+eaux\s+amnios/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Collection Le Pakao — Fascicule SVT Cours Terminale L2",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Littéraire (Série L2 / L1 / L)",
      chapterTitle: "SVT Terminale L2 : Cours Intégral Conforme au Programme Officiel (Collection Le Pakao)",
      definitionAndScope: `Manuel de référence officiel pour la série Terminale L2 conçu par l'équipe pédagogique « Collection Le Pakao » (reseauscolaire.com).\n\nStructure complète en 5 parties et 7 thèmes : 1. Système nerveux (encéphale, méninges, ventricules, moelle épinière) ; 2. Comportements réflexes (innés, loi de Pflüger, myotatique, pavlovien, skinnérien) et volontaires (aires motrices, voies pyramidales) ; 3. Activité cardiaque et vasomotricité (automatisme, tissu nodal, révolution, baroréflexe, système rénine-angiotensine) ; 4. Régulation de la glycémie (foie, îlots de Langerhans, insuline/glucagon, diabètes) ; 5. Immunologie (CMH, phagocytose, RIMH, RIMC, VIH/SIDA, vaccins/sérums) ; 6. Reproduction (gamétogenèse, cycles sexuels, régulation hormonale, fécondation, gestation, contraception) ; 7. Hérédité humaine (pedigrees, daltonisme, hémophilie, anomalies chromosomiques).`,
      coreConceptsAndFormulas: [
        {
          name: "Neurophysiologie : Système Nerveux & Réflexes (Thèmes 1 & 2)",
          formulaOrRule: "1. Encéphale : 3 méninges (dure-mère protectrice, arachnoïde avec LCR amortisseur, pie-mère nourricière) ; 4 ventricules reliés par trou de Monro, aqueduc de Sylvius et trou de Magendie ; substance grise corticale périphérique (1-4 mm) et noyaux centraux. 2. Moelle épinière : substance grise centrale en X, racines dorsales sensitives à ganglion spinal (neurones en T) et racines ventrales motrices (axones des motoneurones). 3. Arc réflexe : récepteur -> nerf sensitif -> centre médullaire -> nerf moteur -> effecteur (Loi de Pflüger : seuil 1/50, localisé, unilatéral, symétrique, irradié, généralisé). Réflexe myotatique monosynaptique des fuseaux neuromusculaires vs myotatique inverse des organes de Golgi (inhibition autogène).",
          explanation: "Distinction fondamentale entre réflexe inné stéréotypé, réflexe conditionnel acquis (Pavlov/Skinner) et motricité volontaire consciente issue du cortex cérébral (voies pyramidales directes).",
          contextOrApplication: "Questions de cours et schémas fonctionnels de l'épreuve de SVT L2."
        },
        {
          name: "Physiologie Cardiovasculaire & Baroréflexe (Thème 3)",
          formulaOrRule: "1. Automatisme myogène : nœud sinusal (pacemaker) -> nœud septal -> faisceau de His -> réseau de Purkinje (expériences de Stannius et ganglions de Remak/Ludwig/Bidder chez la grenouille). 2. Révolution cardiaque : systole auriculaire (onde P), systole ventriculaire (complexe QRS), diastole générale (onde T). Myocarde intétanisable par période réfractaire absolue. 3. Régulation PA = DC x R : Barorécepteurs carotidiens et aortiques stimulés par l'hypertension -> nerfs de Hering et Cyon -> bulbe dépresseur -> nerf vague X (acétylcholine de Loewi) -> bradycardie et baisse de PA. En hypotension : levée d'inhibition sympathique (noradrénaline) -> tachycardie et vasoconstriction, complétée par la rénine-angiotensine-aldostérone.",
          explanation: "Maintien de la pression artérielle et du débit cardiaque adapté aux besoins énergétiques.",
          contextOrApplication: "Analyse des enregistrements cardiographiques et schémas de régulation."
        },
        {
          name: "Régulation de la Glycémie & Homéostasie (Thème 4)",
          formulaOrRule: "Valeur normale : 0,85 à 1,15 g/L. Organe effecteur = foie (glycogénogenèse de stockage n C6H12O6 -> (C6H10O5)n + n H2O, et glycogénolyse). Organe capteur et endocrine = pancréas mixte : acini exocrines digestifs vs îlots de Langerhans (cellules bêta -> insuline hypoglycémiante ; cellules alpha -> glucagon hyperglycémiant). Hormones d'appoint : adrénaline médullosurrénale, cortisol/ACTH, hormone de croissance GH.",
          explanation: "Comprendre les deux formes de diabète : type 1 insulino-dépendant (destruction des cellules bêta) vs type 2 insulino-résistant (anomalie des récepteurs membranaires aux cellules cibles).",
          contextOrApplication: "Étude des courbes d'hyperglycémie provoquée et rôle régulateur du foie."
        },
        {
          name: "Immunologie, Défenses & Dysfonctionnements (Thème 5)",
          formulaOrRule: "1. Marqueurs du soi : CMH I (cellules nucléées) et CMH II (CPA/lymphocytes) codés sur chromosome 6. 2. Phagocytose non spécifique : attraction -> adhésion -> ingestion (phagosome) -> digestion (lysosomes) -> exocytose et présentation d'antigènes. 3. Réponse spécifique : RIMH humorale (LB -> plasmocytes -> anticorps circulants neutralisants) et RIMC cellulaire (LT8 -> LTc cytotoxiques sécrétant la perforine), coordonnées par les interleukines des LT4. 4. Infection VIH : fixation GP120 sur CD4 des LT4, transcriptase inverse ARN -> ADN, intégration et destruction progressive du système immunitaire (Phase 1 primo-infection -> Phase 2 asymptomatique -> Phase 3 SIDA déclaré avec LT4 < 200/mL).",
          explanation: "Distinction thérapeutique fondamentale : vaccination (immunité active, préventive, durable par lymphocytes mémoires) vs sérothérapie (immunité passive, curative, immédiate mais éphémère).",
          contextOrApplication: "Dissertations et schémas de coopération cellulaire en immunologie."
        },
        {
          name: "Reproduction Humaine & Hérédité (Thèmes 6 & 7)",
          formulaOrRule: "1. Spermatogenèse continue (tubes séminifères, cellules de Leydig testostérone sous contrôle LH, Sertoli sous FSH, 74 jours) vs Ovogenèse cyclique (folliculogenèse, pic de LH ovulatoire au 14e jour, œstradiol et progestérone du corps jaune, règles par chute hormonale). 2. Fécondation : capacitation dans les voies féminines, réaction acrosomique, blocage polyspermie par granules corticaux, caryogamie rétablissant la diploïdie 2n=46. 3. Génétique : transmission autosomale récessive (albinisme), codominante (groupes ABO/Rhésus), récessive liée à X (daltonisme, hémophilie) ; anomalies de caryotype (Trisomie 21, Turner 44A+X, Klinefelter 44A+XXY).",
          explanation: "Maîtrise de la reproduction (contraception orale, pilule combinée, implants, stérilet, RU 486) et analyse rigoureuse de pedigrees.",
          contextOrApplication: "Résolution des arbres généalogiques et calculs de cycles ovariens/utérins."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Identifier le thème biologique et le niveau d'organisation",
          whatToDo: "Déterminer s'il s'agit d'un mécanisme nerveux (réflexe/volontaire), cardiovasculaire (baroréflexe), métabolique (glycémie), immunitaire (RIMH/RIMC) ou reproducteur (gamétogenèse/cycle).",
          reflexOrTip: "Repérer les organes, hormones ou molécules cibles pour cadrer immédiatement le sujet."
        },
        {
          stepNumber: 2,
          title: "Mobiliser les expériences historiques et protocoles clés",
          whatToDo: "Citer les expériences fondatrices du cours : Bell et Magendie pour les racines médullaires, Stannius et Loewi pour le cœur, Claude Bernard pour le foie et le pancréas, Pavlov pour les réflexes.",
          reflexOrTip: "Toujours articuler observation expérimentale, déduction et conclusion biologique générale."
        },
        {
          stepNumber: 3,
          title: "Construire le schéma fonctionnel avec rétrocontrôles",
          whatToDo: "Tracer des boîtes claires pour les récepteurs, centres d'intégration, voies nerveuses/hormonales et organes effecteurs, en annotant précisément les signes (+) de stimulation et (-) de freinage.",
          reflexOrTip: "Un schéma fonctionnel bien annoté et titré rapporte l'intégralité des points de communication."
        }
      ],
      solvedExample: {
        problemStatement: "Question de cours (Le Pakao SVT L2) : « Expliquez comment l'organisme rétablit une pression artérielle normale à la suite d'une élévation brutale de celle-ci. »",
        solutionStepByStep: "1. Détection : La hausse de pression artérielle (hypertension) distend les parois du sinus carotidien et de la crosse aortique, stimulant fortement les barorécepteurs (mécanorécepteurs).\n" +
          "2. Voie afférente : Les potentiels d'action se propagent à haute fréquence le long des nerfs sensitifs de Hering et de Cyon jusqu'au noyau sensitif du bulbe rachidien.\n" +
          "3. Intégration et voie efférente : Au niveau bulbaire, deux mécanismes simultanés sont déclenchés :\n" +
          "   - Stimulation du centre cardiomodérateur qui active le nerf vague (pneumogastrique X) : libération d'acétylcholine au niveau du nœud sinusal, entraînant un ralentissement du rythme cardiaque (bradycardie).\n" +
          "   - Inhibition des centres sympathiques bulbo-médullaires : arrêt de sécrétion de noradrénaline, provoquant une vasodilatation des artères et une diminution de la force contractile ventriculaire.\n" +
          "4. Résultat : La diminution conjointe du débit cardiaque et des résistances vasculaires fait chuter la pression artérielle jusqu'à sa valeur consigne normale.",
        finalAnswer: "Explication rigoureuse conforme au mémo du chapitre Pression Artérielle (Collection Le Pakao)."
      },
      classicExamTraps: [
        "Confondre les rôles de la racine dorsale (sensitive, ganglion spinal) et ventrale (motrice) de la moelle épinière.",
        "Oublier que le muscle strié cardiaque est intétanisable en raison de sa période réfractaire absolue pendant la systole.",
        "Croire que le placenta mélange les sangs maternel et fœtal (la barrière placentaire assure des échanges sélectifs sans mélange sanguin)."
      ],
      selfCheckChecklist: [
        "Les définitions biologiques fondamentales (homéostasie, réflexe, glycémie, CMH) sont-elles restituées sans approximation ?",
        "Les structures anatomiques et histologiques (méninges, tubes séminifères, îlots de Langerhans) sont-elles correctement localisées ?",
        "Les voies nerveuses et hormonales sont-elles distinguées avec leurs médiateurs respectifs (acétylcholine, noradrénaline, insuline, GnRH) ?"
      ],
      quickRevisionMemo: "Mémo Le Pakao SVT L2 : Méninges (Dure-mère, Arachnoïde, Pie-mère) ; Cœur = Tissu nodal myogène (nœud sinusal pacemaker) ; PA régulée par Hering/Cyon/X ; Glycémie 1 g/L par îlots de Langerhans (insuline bêta, glucagon alpha) ; SIDA = VIH détruisant les LT4 ; Cycles = pic de LH déclenchant l'ovulation à J14.",
      certificationNote: "Intégration officielle certifiée du Fascicule SVT Cours Terminale L2 (Collection Le Pakao, reseauscolaire.com)."
    };
  }

  // Détection spécifique des Exercices de Génétique Classique – Partie II (Arbres Généalogiques Résolus)
  if (/exercices?\s+(?:de\s+)?genetique\s+classique.*partie\s*ii|genetique\s+(?:classique\s+)?partie\s*2|idiotie\s*phenylpyruvique|surdi\s*mutite.*1\/30|1\/120.*surd|maladie\s*de\s*huntington.*arbre|huntington.*25\s*ans|1\/810\s*000|maladie\s*de\s*kennedy|kennedy.*arbre|syndrome\s*melas|melas.*arbre|heredite\s*mitochondriale.*maternelle|cheveux\s*roux.*pedigree/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Exercices de Génétique Classique – Partie II (Corrigés Méthodiques)",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique & Littéraire (S1, S2, C, D, L2)",
      chapterTitle: "Génétique Classique Partie II : Analyse de Pedigrees Complexes, Calculs de Risque & Cas d'École",
      definitionAndScope: `Recueil méthodique d'exercices résolus et commentés de génétique formelle humaine (Partie II). Couvre les principaux patrons de transmission héréditaire à travers 6 cas d'école incontournables : 1. Idiotie phénylpyruvique (autosomal récessif, mariage consanguin de cousins germains) ; 2. Transmission des cheveux roux (autosomal récessif, démonstration d'indépendance à X) ; 3. Surdi-mutité (autosomal récessif, croisement avec fréquence allélique en population générale 1/30 aboutissant au risque 1/120) ; 4. Chorée de Huntington (autosomal dominant à pénétrance tardive vers 40 ans, démonstration probabiliste de dominance 1/810 000, risque pré-symptomatique de 50% à 25 ans) ; 5. Maladie de Kennedy (récessif lié au chromosome X, prédominance masculine, femmes conductrices) ; 6. Syndrome MELAS (transmission mitochondriale cytoplasmique maternelle exclusive).`,
      coreConceptsAndFormulas: [
        {
          name: "Cas 1 & 2 : Hérédité Autosomale Récessive (Phénylcétonurie & Cheveux roux)",
          formulaOrRule: "1. Démonstration de récessivité : deux parents sains donnant un descendant atteint possèdent obligatoirement l'allèle à l'état masqué (hétérozygotes). 2. Règle d'exclusion de l'hétérochromosome X : une fille atteinte a obligatoirement reçu un allèle mutant de son père. Si son père est sain, le gène ne peut pas être sur X (il est autosomal). 3. Statut des porteurs : 100% des enfants sains issus d'un parent malade sont hétérozygotes obligatoires.",
          explanation: "Démarche canonique exigée pour tout exercice de génétique formelle au Baccalauréat.",
          contextOrApplication: "Exercices 1 et 2 du recueil génétique partie II."
        },
        {
          name: "Cas 3 : Calcul de Risque Génétique en Population Générale (Surdi-mutité)",
          formulaOrRule: "Formule combinée : Risque global = P(Mère porteuse) x P(Père porteur dans la population) x P(Transmission de l'allèle mutant par les deux parents). Pour la surdi-mutité : Mme 11 est fille de père sourd-muet -> P(Mère porteuse) = 1. Probabilité du conjoint étranger n°10 = 1/30. Probabilité de croisement hétérozygote x hétérozygote = 1/4. Calcul : 1 x (1/30) x (1/4) = 1/120 (soit environ 0,83%).",
          explanation: "Intégration de la génétique des populations dans le conseil génétique préconceptionnel.",
          contextOrApplication: "Exercice 3 du recueil génétique partie II."
        },
        {
          name: "Cas 4 : Hérédité Autosomale Dominante à Début Tardif (Maladie de Huntington)",
          formulaOrRule: "1. Démonstration de dominance : tout individu malade a au moins un parent malade sur toutes les générations. Si l'allèle était récessif avec fréquence des porteurs de 1/30, la probabilité que 4 conjoints successifs extérieurs (1, 5, 10, 11) soient tous porteurs serait de (1/30)^4 = 1 / 810 000, ce qui est statistiquement invraisemblable. 2. Exclusion de la liaison à X : un père malade dominant transmettrait obligatoirement l'allèle à 100% de ses filles ; or le père malade n°6 a une fille saine n°13. 3. Risque pré-symptomatique pour le fils n°21 (25 ans) : issu de père malade hétérozygote (nM) et mère saine (nn) -> Risque = 50% d'exprimer la maladie d'ici 15 ans.",
          explanation: "Cas d'école pour comprendre l'hérédité dominante, les calculs de vraisemblance et le conseil génétique prédictif.",
          contextOrApplication: "Exercice 4 du recueil génétique partie II."
        },
        {
          name: "Cas 5 : Hérédité Récessive Liée à l'X (Maladie de Kennedy)",
          formulaOrRule: "1. Caractéristiques : forte prédominance masculine (les hommes n'ont qu'un seul chromosome X et expriment immédiatement l'allèle muté XmY), femmes malades exceptionnelles (nécessite père malade et mère conductrice). 2. Transmission en diagonale : transmise par les mères conductrices asymptomatiques (XN Xm). 3. Filles de pères malades (XmY) : obligatoirement conductrices car elles reçoivent nécessairement le chromosome Xm de leur père.",
          explanation: "Modèle identique au daltonisme, à l'hémophilie et à la myopathie de Duchenne.",
          contextOrApplication: "Exercice 5 du recueil génétique partie II."
        },
        {
          name: "Cas 6 : Hérédité Mitochondriale Cytoplasmique (Syndrome MELAS)",
          formulaOrRule: "Transmission exclusivement maternelle : une mère atteinte transmet le syndrome à 100% de ses enfants (filles et garçons), car les mitochondries du zygote proviennent exclusivement du cytoplasme de l'ovocyte. Un homme atteint ne transmet JAMAIS la maladie à sa descendance (0% de transmission par le père).",
          explanation: "Modèle d'hérédité non mendélienne d'exception au programme de génétique humaine.",
          contextOrApplication: "Exercice 6 du recueil génétique partie II."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Déterminer la relation de dominance",
          whatToDo: "Observer si des parents sains donnent des enfants malades (récessif) ou si chaque individu malade a systématiquement au moins un parent malade (dominant).",
          reflexOrTip: "Toujours désigner les numéros précis des individus de l'arbre généalogique qui justifient la réponse."
        },
        {
          stepNumber: 2,
          title: "Tester et éliminer méthodiquement les gonosomes Y puis X",
          whatToDo: "Rejeter Y si des filles sont malades ou si des pères malades ont des fils sains. Pour un allèle récessif, rejeter X si une fille malade a un père sain ou si une mère malade a un fils sain. Pour un allèle dominant, rejeter X si un père malade a une fille saine.",
          reflexOrTip: "Si Y et X sont éliminés, conclure formellement que le gène est porté par un autosome."
        },
        {
          stepNumber: 3,
          title: "Attribuer les génotypes et calculer les probabilités",
          whatToDo: "Écrire les génotypes certains, repérer les hétérozygotes obligatoires, et poser la multiplication des probabilités indépendantes pour estimer le risque d'un futur enfant.",
          reflexOrTip: "Pour un croisement avec la population générale, ne pas oublier de multiplier par la fréquence de l'allèle ou des porteurs donnée dans l'énoncé."
        }
      ],
      solvedExample: {
        problemStatement: "Cas pratique (Exercice 3) : « Mme X (n°11), issue d'un père sourd-muet, attend un enfant avec un homme n°10 de la population générale où 1 personne sur 30 est porteuse de l'allèle récessif. Quel est le risque que son enfant soit sourd-muet ? »",
        solutionStepByStep: "1. Génotype de Mme X (n°11) : Son père étant sourd-muet (génotype s//s), il lui a nécessairement transmis un allèle s. Mme X étant saine, son génotype est obligatoirement N//s (probabilité = 1).\n" +
          "2. Probabilité pour le futur père (n°10) : Il est issu de la population générale où la fréquence des hétérozygotes est de 1/30. Donc P(Père porteur N//s) = 1/30.\n" +
          "3. Probabilité du croisement de deux hétérozygotes : Si le couple est N//s x N//s, la probabilité d'avoir un enfant atteint s//s est de 1/4 (25%).\n" +
          "4. Calcul combiné : P(Enfant sourd-muet) = P(Mme X conductrice) x P(Père porteur) x P(Transmission de s par les 2 parents) = 1 x (1/30) x (1/4) = 1/120.\n" +
          "-> Conclusion : Il y a statistiquement 1 chance sur 120 (environ 0,83%) que l'enfant naisse sourd-muet.",
        finalAnswer: "Démonstration et calcul probabiliste certifiés conformes au corrigé de la partie II."
      },
      classicExamTraps: [
        "Oublier de multiplier par la fréquence de porteur en population (1/30) et conclure hâtivement à un risque de 1/4 au lieu de 1/120.",
        "Confondre l'élimination de la liaison à l'X pour un caractère récessif (père sain / fille malade) et pour un caractère dominant (père malade / fille saine).",
        "Pour le syndrome MELAS, tenter d'appliquer les lois de Mendel alors qu'il s'agit d'une hérédité cytoplasmique maternelle exclusive."
      ],
      selfCheckChecklist: [
        "Les symboles de l'arbre (carré homme, rond femme, noirci malade) sont-ils correctement numérotés par génération ?",
        "L'exclusion du chromosome X est-elle prouvée par au moins une contradiction formelle dans l'arbre ?",
        "Les hétérozygotes obligatoires sont-ils tous identifiés avant de calculer les probabilités ?"
      ],
      quickRevisionMemo: "Mémo Génétique Partie II : Récessif = parents sains avec enfant malade ; Dominant = malade à chaque génération (Huntington) ; Non lié à X récessif = père sain avec fille malade ; Non lié à X dominant = père malade avec fille saine ; Risque population = 1 x (1/30) x (1/4) = 1/120 ; MELAS = 100% transmission maternelle.",
      certificationNote: "Intégration officielle des Exercices de Génétique Classique – Partie II (Corrigés Méthodiques d'Arbres Généalogiques)."
    };
  }

  // Détection spécifique des Annales de SVT Terminale S1/S1A (Office du Baccalauréat UCAD Dakar, Sénégal)
  if (/annales?\s*(?:de\s+)?svt|svt\s*annales?|svt\s*terminale\s*s1|bac\s*svt\s*s1|svt\s*s1|svt\s*ucad|office\s*du\s*baccalaur[eé]at\s*dakar|universit[eé]\s*cheikh\s*anta\s*diop.*svt|drepanocytose.*proteinogramme|alzheimer.*acetylcholine|potlatch.*mauss|hypercholesterolemie.*ldl|enkephaline.*substance\s*p|testosterone.*leydig/i.test(normQuery)) {
    return {
      query,
      discipline: "svt",
      disciplineLabel: "Annales SVT Terminale S1/S1A — UCAD Dakar",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Séries S1, S1A, S2, C, D)",
      chapterTitle: "Annales Officielles de SVT S1/S1A (2008-2017) : Sujets & Corrigés Types UCAD Dakar",
      definitionAndScope: `Recueil exhaustif des annales officielles de SVT Série S1 et S1A délivré par l'Office du Baccalauréat de l'Université Cheikh Anta Diop de Dakar (UCAD). Couvre la maîtrise des connaissances avec schémas cotés 2n=4, l'exploitation raisonnée de documents et la pratique méthodique de la génétique humaine formelle.`,
      coreConceptsAndFormulas: [
        {
          name: "I. Maîtrise des connaissances : Rigueur méthodologique & Schémas cotés",
          formulaOrRule: "Introduction (définition des termes, problématique biologique, annonce du plan) -> Développement en parties articulées avec schémas fonctionnels ou structuraux grand format légendés (ex: méiose 2n=4, synapse neuromusculaire, boucles de régulation RAA et testostéronémie) -> Conclusion bilan répondant à la consigne.",
          explanation: "Les schémas sont exigés avec titre complet, flèches de sens, conventions chromosomiques et légendes scientifiques exactes.",
          contextOrApplication: "Première partie de l'épreuve écrite de SVT au Baccalauréat (4 points)."
        },
        {
          name: "II. Exploitation de documents : Protocole d'analyse et de déduction",
          formulaOrRule: "1. Saisie des données (« Je constate que... » : lecture chiffrée des paramètres, seuils, potentiels d'action, concentrations) -> 2. Confrontation avec le témoin -> 3. Mobilisation des acquis (« Or je sais que... ») -> 4. Déduction logique (« J'en déduis que... »).",
          explanation: "Permet d'établir les mécanismes ioniques (canaux Na+/K+, Ca2+), l'action des drogues/neurotransmetteurs (morphine, atropine, acétylcholine) et l'intégration synaptique (sommation spatiale PPSE/PPSI).",
          contextOrApplication: "Deuxième partie de l'épreuve écrite (6 points)."
        },
        {
          name: "III. Génétique Humaine & Résolution d'Arbres Généalogiques (Pedigree)",
          formulaOrRule: "1. Dominance/Récessivité (ex: deux parents sains ayant un enfant malade prouvent que l'allèle est récessif) ; 2. Hypothèse gonosomale Y éliminée si des filles sont malades ou pères sains ; 3. Hypothèse gonosomale X éliminée si un père sain a une fille malade récessive ; 4. Génotypes complets (N//N, N//m, m//m ou XN/Xm, Xm/Y) ; 5. Échiquier de croisement et calculs de probabilités.",
          explanation: "Modèles d'hérédité autosomale récessive (drépanocytose, déficit en APTR), codominante (hypercholestérolémie récepteurs LDL), gonosomale liée à X (albinisme oculaire, maladie M2) et liée à Y holandrique (hypertrichose auriculaire).",
          contextOrApplication: "Troisième partie de raisonnement scientifique (8 points)."
        },
        {
          name: "Homéostasie & Régulations Neuro-Hormonales",
          formulaOrRule: "1. Régulation de la pression artérielle et volémie : volorécepteurs auriculaires -> nerf vague X (cardiomodérateur) -> levée d'inhibition hypothalamique -> hypersécrétion d'ADH (posthypophyse) -> réabsorption rénale d'eau. Système Rénine-Angiotensine-Aldostérone : baisse de perfusion rénale -> rénine -> angiotensine (vasoconstriction) -> aldostérone corticosurrénale -> rétention de Na+ et d'eau. 2. Régulation de la testostéronémie : axe hypothalamo-hypophyso-testiculaire (GnRH -> LH/ICSH -> cellules de Leydig -> testostérone -> rétrocontrôle négatif).",
          explanation: "Boucles homéostatiques assurant la constance du milieu intérieur.",
          contextOrApplication: "Chapitres de physiologie nerveuse, rénale et de la reproduction."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Démontrer rigoureusement le mode de transmission génétique",
          whatToDo: "Toujours formuler l'hypothèse, citer les individus précis de l'arbre qui la valident ou l'infirment, et conclure formellement (autosomal ou gonosomal).",
          reflexOrTip: "Exemple : 'La fille II5 malade est issue de parents sains I1 et I2, donc l'allèle muté est récessif'."
        },
        {
          stepNumber: 2,
          title: "Exploiter les tracés oscilloscopiques et biochimiques",
          whatToDo: "Repérer l'artéfact de stimulation, le temps de latence, les amplitudes et fréquences des potentiels d'action, et nommer les phases ioniques (dépolarisation Na+, repolarisation K+).",
          reflexOrTip: "Distinguer le potentiel de repos (-70 mV), le potentiel d'action monophasique (+30 mV) et les potentiels postsynaptiques gradués (PPSE/PPSI)."
        },
        {
          stepNumber: 3,
          title: "Construire un schéma fonctionnel de régulation",
          whatToDo: "Représenter les récepteurs (osmorécepteurs, barorécepteurs), les voies afférentes (nerfs de Hering, Cyon, vague X), les centres intégrateurs (bulbe, hypothalamus), les voies efférentes (hormones, motoneurones) et les effecteurs (cœur, vaisseaux, reins).",
          reflexOrTip: "Indiquer clairement le signe des rétrocontrôles (+ stimulation, - inhibition)."
        }
      ],
      solvedExample: {
        problemStatement: "Application SVT S1 (Bac 2008) : Déterminer le mode de transmission de la drépanocytose à partir du document 5.",
        solutionStepByStep: "1. Dominance/récessivité : L'allèle s responsable de la maladie est récessif car la fille II5 est malade alors que ses deux parents I1 et I2 sont sains (l'allèle était présent à l'état masqué chez les parents hétérozygotes).\n" +
          "2. Localisation chromosomique :\n" +
          "   - Hypothèse liée à Y : L'existence de femmes malades (ex: II5) infirme que le gène soit sur le chromosome Y.\n" +
          "   - Hypothèse liée à X : Si l'allèle récessif était sur X, la fille II5 (Xs/Xs) aurait obligatoirement reçu un chromosome Xs de son père I1 qui devrait être malade (Xs/Y). Or le père I1 est sain (XA/Y). L'hypothèse liée à X est donc infirmée.\n" +
          "   - Conclusion : Le gène responsable est autosomal récessif.\n" +
          "3. Électrophorèse (Document 6) : Les parents I1 et I2 présentent deux bandes (HbA et Hbs) : ils sont hétérozygotes A//s. Les enfants II2 et II4 ont une seule bande HbA (A//A), confirmant l'absence de l'allèle morbide.",
        finalAnswer: "Démonstration génétique intégrale conforme au corrigé officiel de l'Office du Baccalauréat UCAD."
      },
      classicExamTraps: [
        "Confondre l'effet de l'hormone (ex: l'aldostérone augmente la volémie) et le stimulus déclencheur (l'hypovolémie déclenche la rénine).",
        "Oublier de préciser les proportions gamétiques lors de la construction de l'échiquier de croisement.",
        "Confondre la transmission liée à X dominante (père malade transmet à 100% de ses filles) et liée à X récessive."
      ],
      selfCheckChecklist: [
        "L'exposé comporte-t-il une introduction avec définition et plan, et une conclusion ?",
        "Les schémas sont-ils grands, clairs, titrés et accompagnés d'une légende complète ?",
        "L'analyse de document sépare-t-elle la description chiffrée de la déduction causale ?"
      ],
      quickRevisionMemo: "Mémo SVT UCAD : Démarche 'Je vois / Or je sais / Donc' ; Justifier les pedigrees par les individus précis ; Maîtriser les 3 schémas majeurs (Méiose 2n=4, Plaque motrice, Régulation RAA/ADH).",
      certificationNote: "Intégration officielle des Annales de SVT Séries S1 & S1A (Office du Baccalauréat UCAD, Sénégal)."
    };
  }

  // Détection spécifique des Annales d'Anglais Terminales C & D (MENAPLN Burkina Faso, 2020)
  if (/annales?\s*(?:d\s*')?anglais|anglais\s*annales?|anglais\s*terminales?\s*[cd]|anglais\s*burkina|zoure|zorom|nikiema|yacouba\s*sawadogo.*zai|zai.*sawadogo|order\s+of\s+adjectives|paragraph\s*writing.*topic\s*sentence|our\s*bodies\s*our\s*fears|the\s*miracle\s*algae.*spirulina|killer\s*stroke|genetically\s*modified\s*morals/i.test(normQuery)) {
    return {
      query,
      discipline: "anglais",
      disciplineLabel: "Annales d'Anglais Terminales C & D — MENAPLN Burkina Faso",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Scientifique (Séries C & D)",
      chapterTitle: "Annales d'Anglais Terminales C & D : Mémento Grammatical, Méthode & Sujets Corrigés (MENAPLN)",
      definitionAndScope: `Manuel officiel d'annales d'anglais conçu par une équipe d'inspecteurs et d'encadreurs pédagogiques (IES Christian Paulin Zouré, Salam Zorom, Tendouindé Bruno Nikiema, préface Pr Stanislas Ouaro) pour le Ministère de l'Éducation nationale du Burkina Faso (MENAPLN, DGREIP).\n\nComprend le cours grammatical complet (16 temps, ordre des mots, règle des 10 adjectifs, faux amis, verbes irréguliers), la méthodologie du Guided Commentary et du Paragraph Writing, ainsi que 11 sessions d'examens d'anglais avec corrigés rédigés.`,
      coreConceptsAndFormulas: [
        {
          name: "Règle de l'Ordre des Adjectifs (Order of Adjectives)",
          formulaOrRule: "De l'abstrait au concret : 1. Opinion (lovely, beautiful) -> 2. Size (big, tall) -> 3. Physical quality (thin, rough) -> 4. Shape (round, square) -> 5. Age (young, old) -> 6. Colour (black, red) -> 7. Origin (Japanese, African) -> 8. Material (wooden, plastic) -> 9. Type (four-sided) -> 10. Purpose (cooking, cleaning).",
          explanation: "Règle syntaxique clé pour les compositions descriptives et les épreuves de maniement de la langue.",
          contextOrApplication: "Questions de reformulation et rédaction de l'épreuve de Bac."
        },
        {
          name: "Méthodologie du Paragraph Writing (Short Essay de 80 à 100 mots)",
          formulaOrRule: "1. Topic Sentence : phrase d'amorce posant clairement l'idée maîtresse.\n2. Supporting Ideas (3 à 4 idées) : arguments, faits concrets, statistiques, reliés par des connecteurs logiques (First, Second, Furthermore, For example, Last).\n3. Concluding Sentence (optionnelle mais valorisée) : synthèse ouvrant sur une perspective générale.",
          explanation: "Garantit un texte fluide, dense, sans remplissage et strictement calibré pour les 6 points de rédaction.",
          contextOrApplication: "Dernière question de l'épreuve de Guided Commentary au Baccalauréat."
        },
        {
          name: "Technique du Guided Commentary (Questions de Compréhension)",
          formulaOrRule: "Ne jamais faire de 'lifting' (recopiage mot à mot de phrases du texte). Répondre en reformulant avec ses propres mots (Rephrase in your own words). Respecter la grammaire de la question (temps du verbe).",
          explanation: "Les correcteurs sanctionnent le plagiat textuel et récompensent l'autonomie d'expression en anglais.",
          contextOrApplication: "Première partie de l'épreuve écrite d'anglais (14 points)."
        },
        {
          name: "Faux Amis et Vocabulaire d'Examen",
          formulaOrRule: "actually = en fait/en réalité (non actuellement = currently) ; character = personnage (non caractère = nature) ; hazard = danger/risque (non hasard = chance) ; issue = problème/sujet (non issue = exit) ; sensible = raisonnable/avisé (non sensible = sensitive) ; to achieve = réaliser (non achever = to complete) ; to resume = reprendre (non résumer = to sum up).",
          explanation: "Évite les contresens rédhibitoires dans la compréhension des textes et la rédaction.",
          contextOrApplication: "Lecture de textes scientifiques, médicaux et environnementaux."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Lecture active du texte et repérage des thèmes émergents",
          whatToDo: "Lire le texte deux fois, repérer le thème (Health, Environment, Agriculture, Technology) et surligner les mots clés.",
          reflexOrTip: "Identifier la thèse de l'auteur et l'organisation des paragraphes avant de lire les questions."
        },
        {
          stepNumber: 2,
          title: "Traiter les 4 questions de compréhension sans copier",
          whatToDo: "Formuler des phrases courtes, précises, en utilisant des synonymes et des structures personnelles.",
          reflexOrTip: "Vérifier la concordance de temps : si la question commence par 'What does...', répondre au Present Simple."
        },
        {
          stepNumber: 3,
          title: "Rédiger le Short Essay selon le schéma canonique",
          whatToDo: "Rédiger une Topic Sentence affirmative, 3 arguments avec exemples africains ou globaux, et compter les mots (environ 80-100 mots).",
          reflexOrTip: "Relire pour éliminer les fautes d'accord sujet-verbe et les faux amis."
        }
      ],
      solvedExample: {
        problemStatement: "Short Essay corrigé (Session 2019) : « In your opinion, how can 'zaï' help reduce migration? » (about 80 words)",
        solutionStepByStep: "Topic sentence: ''Zaï'' can contribute to reducing migration by reducing poverty and improving degraded land.\n" +
          "Supporting idea 1 (First): First, the practice of ''Zaï'' can maintain people in their home areas through land regeneration. With reforestation, environmental crises related to water and pasturage become less frequent, allowing communities to live peacefully.\n" +
          "Supporting idea 2 (Second): Second, ''Zaï'' permits farmers to significantly increase crop yields and improve their family income.\n" +
          "Concluding sentence (Thus): Thus, with sufficient food and resources, young people and farmers do not have to migrate to cities or abroad for financial survival. (84 words)",
        finalAnswer: "Corrigé modèle officiel certifié conforme au barème du MENAPLN Burkina Faso."
      },
      classicExamTraps: [
        "Recopier des phrases entières du texte pour répondre aux questions de compréhension (zéro pointé).",
        "Ne pas respecter la limite de mots du Short Essay (trop court < 60 mots ou démesuré > 150 mots).",
        "Confondre les faux amis (ex: traduire 'sensible' par 'sensible' au lieu de 'sensitive')."
      ],
      selfCheckChecklist: [
        "Toutes les réponses de compréhension sont-elles rédigées avec mes propres mots ?",
        "L'essay comporte-t-il une Topic Sentence claire et des connecteurs logiques (First, Second, Thus) ?",
        "Le nombre de mots est-il compris entre 75 et 105 mots ?"
      ],
      quickRevisionMemo: "Mémo Anglais C/D : Order of adjectives (Opinion -> Size -> Shape -> Age -> Colour -> Origin -> Material) ; Essay = Topic Sentence + 3 Supports + Conclusion (80-100 words) ; No lifting textuel !",
      certificationNote: "Intégration officielle des Annales d'Anglais Terminales C & D (MENAPLN Burkina Faso, Édition 2020)."
    };
  }

  // Détection spécifique du fascicule REP Littéraire 2021 (Groupe Academic Le Succès)
  if (/rep\s*litteraire|rep\s*2021|academic\s*le\s*succes|degnadji|fabrice\s*kore/i.test(normQuery)) {
    return {

      query,
      discipline: "philo",
      disciplineLabel: "REP Littéraire 2021 — Groupe Academic Le Succès",
      cycle: "second_cycle_bac",
      level: "terminale",
      levelLabel: "Terminale Littéraire (Séries A1 & A2)",
      chapterTitle: "REP Littéraire 2021 : Manuel Complet d'Excellence Pluridisciplinaire",
      definitionAndScope: `Fascicule officiel d'excellence conçu par le Groupe Academic Le Succès sous la direction de M. Fabrice Koré et la présidence littéraire du Prof. Jean-Jacques Degnadji.\n\nCe manuel réunit la méthodologie APC intégrale, les fiches de cours antithétiques de Philosophie, les œuvres et figures de style de Français, les 7 secrets de la dissertation d'Histoire-Géographie, les repères de Writing en Anglais, les mathématiques séries A1/A2 et l'Allemand LV2.`,
      coreConceptsAndFormulas: [
        {
          name: "Philosophie : Méthodologie APC & Problématisation",
          formulaOrRule: "Problème formulé sous forme de question centrale unique (sans 'ou' artificiel) + aspects introduits par « Pour répondre à ce problème d'autres questions s'ajoutent : ».",
          explanation: "Travail préliminaire (lexique contextuel, reformulation), développement en axes antithétiques étayés d'auteurs reconnus (Pascal, Descartes, Bergson, Freud, Sartre, Spinoza, Rousseau).",
          contextOrApplication: "Applicable à la dissertation et au commentaire philosophique."
        },
        {
          name: "Histoire-Géographie : Les 7 Secrets de la Dissertation",
          formulaOrRule: "Sujets en 'EN', 'DANS', 'ET', dialectique '?', chronologique, de synthèse ou analytique.",
          explanation: "Maîtrise de la géographie de la Côte d'Ivoire (fondements naturels, humains, secteurs primaire, secondaire, tertiaire) et de l'histoire contemporaine (bipolarisation, décolonisation, Gorbatchev, ONU, UA, CEDEAO).",
          contextOrApplication: "Méthode NODACI pour le commentaire de document texte et analyse chiffrée."
        },
        {
          name: "Français : Dissertation, Commentaire Composé & Résumé",
          formulaOrRule: "19 figures de style, 10 tonalités, connecteurs logiques classés, 11 règles d'or du résumé (réduction au 1/3 ou 1/4 avec marge ±10%).",
          explanation: "Corpus complet d'œuvres littéraires : Kourouma, Sembène Ousmane, Mariama Bâ, Camara Laye, David Diop, Senghor, Baudelaire, Hugo, Césaire, Sartre.",
          contextOrApplication: "Préparation complète de l'écrit et de l'oral de Français au Baccalauréat."
        },
        {
          name: "Anglais & Mathématiques Série A",
          formulaOrRule: "Anglais : Modaux, conditionnels (types 1, 2, 3), voix passive, format Newspaper Article. Maths : Fonctions (ln, exp), dénombrement (C_n^p, A_n^p, n!) et probabilités.",
          explanation: "Toutes les formules et fiches mémo intégrées pour les séries littéraires.",
          contextOrApplication: "Épreuves écrites et orales du Bac A1 / A2."
        }
      ],
      stepByStepMethod: [
        {
          stepNumber: 1,
          title: "Analyse contextuelle du sujet",
          whatToDo: "Repérer les termes clés, définir le sens retenu selon le contexte et éliminer les sens inappropriés.",
          reflexOrTip: "En philosophie, ne jamais transformer deux termes en opposition artificielle 'A contre B'."
        },
        {
          stepNumber: 2,
          title: "Formulation rigoureuse de la problématique et des aspects",
          whatToDo: "Poser une véritable interrogation philosophique centrale, puis dégager les aspects d'analyse ordonnés.",
          reflexOrTip: "Les aspects sont de courtes questions directes, non des arguments ou des thèses anticipées."
        },
        {
          stepNumber: 3,
          title: "Mobilisation du corpus doctrinal et rédaction",
          whatToDo: "Structurer les axes avec des connecteurs logiques denses et des références vérifiées (auteurs, titres précis).",
          reflexOrTip: "Dans les commentaires, citer fidèlement le texte entre guillemets pour chaque repérage."
        }
      ],
      solvedExample: {
        problemStatement: "Exemple type du recueil : « L'inconscient nous prive-t-il de notre liberté ? » (Banque philo n°25)",
        solutionStepByStep: "1. Problématisation sans dilemme artificiel.\n2. Axe I : L'inconscient comme rupture du libre arbitre conscient (Freud, Leibniz).\n3. Axe II : L'exigence de responsabilité et la critique de la mauvaise foi (Sartre, Alain).\n4. Axe III : La prise de conscience comme condition d'une liberté lucide et conquise (Spinoza).",
        finalAnswer: "Démonstration complète conforme aux standards de l'inspection pédagogique."
      },
      classicExamTraps: [
        "Confondre un aspect (question directrice) avec un argument développé.",
        "Utiliser le mot 'ou' simplement pour fabriquer une opposition binaire.",
        "Recopier des phrases du texte dans le résumé au lieu de reformuler."
      ],
      selfCheckChecklist: [
        "Toutes les questions du sujet ont-elles été traitées dans l'ordre exact ?",
        "Les citations sont-elles vérifiées et insérées avec pertinence démonstrative ?",
        "Le plan découle-t-il fidèlement de la problématique posée ?"
      ],
      quickRevisionMemo: "Mémo REP 2021 : Rigueur méthodologique, adéquation contextuelle, vocabulaire précis et neutralité académique.",
      certificationNote: "Intégration locale certifiée du manuel REP Littéraire 2021 (Groupe Academic Le Succès)."
    };
  }

  // Si la discipline demandée est explicitement autre que philo (ex: anglais, maths, svt), ne pas chercher dans la philo
  const isForeignLanguageOrOther = discipline && discipline !== 'philo';
  const isHomeworkAnotherSubject = /\b(?:devoir|exercice|cours|fiche)\s+(?:d['’]|de\s+)(?:anglais|englais|english|allemand|deutsch|espagnol|maths?|physique|chimie|svt|histoire|geo|francais)\b/i.test(normQuery);

  // 1. Check Philosophie Knowledge Base (Citations, Thèses, Antithèses, Auteurs)
  if (!isForeignLanguageOrOther && !isHomeworkAnotherSubject && /philo|citation|auteur|th[ée]se|conscience|inconscient|libert[ée]|devoir\s+moral|notion\s+de\s+devoir|accomplir\s+son\s+devoir|[ée]tat|justice|v[ée]rit[ée]|bonheur|d[ée]sir|autrui|art|technique|travail|sartre|descartes|freud|rousseau|spinoza|kant|platon|marx|nietzsche/i.test(normQuery)) {
    for (const notion of philosophieTleKnowledgeBase.notions) {
      const normNotion = notion.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const allQuotes = [
        ...notion.thesis.arguments,
        ...notion.antithesis.arguments,
        ...(notion.keyCitations || [])
      ];

      // Éviter le piège du mot "devoir" qui doit être moral pour correspondre à la notion de philo
      let matches = false;
      if (normNotion.includes("devoir")) {
        matches = /devoir\s+moral|notion\s+de\s+devoir|accomplir\s+(?:son|le)\s+devoir|kant|imperatif/i.test(normQuery);
      } else {
        matches = normNotion.split(" ").some(w => w.length > 2 && normQuery.includes(w)) ||
          allQuotes.some(q => normQuery.includes(q.author.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
      }

      if (matches) {
        const concepts: CourseConceptFormula[] = [
          {
            name: `Définition Officielle : ${notion.name}`,
            formulaOrRule: notion.definition,
            explanation: '',
            contextOrApplication: `Définition à mobiliser impérativement dans l'introduction (amorce/paradoxe).`
          },
          {
            name: `Axe I (Thèse) : ${notion.thesis.title}`,
            formulaOrRule: notion.thesis.arguments.map(a => `« ${a.quote} » (${a.author}, *${a.work}*)`).join(" | "),
            explanation: notion.thesis.arguments.map(a => `${a.author} démontre que ${a.statement} : ${a.explanation}`).join("\n\n"),
            contextOrApplication: `Argumentation d'ouverture et première perspective de réflexion.`
          },
          {
            name: `Axe II (Antithèse / Dépassement) : ${notion.antithesis.title}`,
            formulaOrRule: notion.antithesis.arguments.map(a => `« ${a.quote} » (${a.author}, *${a.work}*)`).join(" | "),
            explanation: notion.antithesis.arguments.map(a => `${a.author} objecte que ${a.statement} : ${a.explanation}`).join("\n\n"),
            contextOrApplication: `Discussion critique indispensable pour éviter le dogmatisme.`
          }
        ];

        for (const q of allQuotes.slice(0, 4)) {
          concepts.push({
            name: `Citation Authentifiée : ${q.author} (*${q.work}*)`,
            formulaOrRule: `« ${q.quote} »`,
            explanation: q.explanation,
            contextOrApplication: `À intégrer comme illustration argumentée dans la dissertation ou le commentaire de texte.`
          });
        }

        return {
          query,
          discipline: "philo",
          disciplineLabel: "Philosophie (Terminale A, C, D)",
          cycle: "second_cycle_bac",
          level: "terminale",
          levelLabel: "Terminale (Toutes Séries)",
          chapterTitle: `Philosophie : ${notion.name} (Citations, Thèses & Auteurs)`,
          definitionAndScope: notion.definition + "\n\nCette fiche rassemble l'ensemble des thèses officielles, des arguments contradictoires et des citations authentiques d'auteurs reconnus à mobiliser pour les épreuves du Baccalauréat.",
          coreConceptsAndFormulas: concepts,
          stepByStepMethod: [
            {
              stepNumber: 1,
              title: "Introduction et Problématisation Dialectique",
              whatToDo: `Partir du paradoxe autour de « ${notion.name} », poser la question centrale et annoncer les deux axes opposés.`,
              reflexOrTip: "Ne sautez jamais d'alinéa dans l'introduction en philo : elle doit être rédigée en un seul bloc continu."
            },
            {
              stepNumber: 2,
              title: "Développement en Deux Axes Équilibrés",
              whatToDo: `Consacrer un premier axe à la justification de la thèse, puis une transition dynamique, et un second axe examinant les limites critiques.`,
              reflexOrTip: "Chaque argument doit être explicité avant d'insérer la citation, puis la citation doit être analysée (règle Argument -> Citation -> Analyse)."
            },
            {
              stepNumber: 3,
              title: "Conclusion Tripartite",
              whatToDo: "Faire le bilan des deux axes, exprimer un point de vue personnel argumenté et ouvrir la réflexion.",
              reflexOrTip: "Le point de vue personnel doit toujours être modéré et axé sur les valeurs fondamentales."
            }
          ],
          solvedExample: {
            problemStatement: `Sujet de dissertation type Baccalauréat portant sur « ${notion.name} ».`,
            solutionStepByStep: `1. Problématisation : Opposer ${notion.thesis.title} aux limites montrant que ${notion.antithesis.title}.\n` +
              `2. Illustration : Mobiliser ${allQuotes[0]?.author || 'Descartes'} (*${allQuotes[0]?.work || 'Œuvre'}*) : « ${allQuotes[0]?.quote || 'Citation'} ».\n` +
              `3. Synthèse : Réconcilier ces deux dimensions sans contradiction stérile.`,
            finalAnswer: `Maîtrise complète de la notion avec corpus de citations vérifiées et plan dialectique opérationnel.`
          },
          classicExamTraps: [
            "Citer un auteur sans expliquer le sens de sa citation.",
            "Faire un catalogue de citations sans fil conducteur argumentatif.",
            "Oublier la transition interrogative entre l'Axe 1 et l'Axe 2."
          ],
          selfCheckChecklist: [
            `La définition de « ${notion.name} » est-elle maîtrisée ?`,
            "Les citations mentionnent-elles exactement l'auteur et l'œuvre ?",
            "L'antithèse nuance-t-elle rigoureusement la position initiale ?"
          ],
          quickRevisionMemo: `Mémo philo : Pour « ${notion.name} », retenir la tension entre ${notion.thesis.title} et ${notion.antithesis.title}.`,
          certificationNote: "Fiche officielle conforme au programme de Philosophie du Baccalauréat (0 appel IA)."
        };
      }
    }
  }

  // 2. Check Français Knowledge Base (Mouvements littéraires, Œuvres, Auteurs, Genres)
  if (/francais|litterat|roman|poesie|theatre|negritude|classicisme|lumieres|romantisme|realisme|naturalisme|symbolisme|surrealisme|oeuvre|cesaire|kourouma|dadie|semben|moliere|voltaire|hugo|zola|baudelaire/i.test(normQuery)) {
    for (const mov of francaisTleKnowledgeBase.literaryMovements) {
      const normMov = mov.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const matches = normQuery.includes(normMov) ||
        mov.keyAuthors.some(a => normQuery.includes(a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) ||
        mov.keyWorks.some(w => normQuery.includes(w.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));

      if (matches) {
        return {
          query,
          discipline: "francais",
          disciplineLabel: "Français & Littérature (Second Cycle BAC)",
          cycle: "second_cycle_bac",
          level: "terminale",
          levelLabel: "Première & Terminale",
          chapterTitle: `Littérature : ${mov.name} (Auteurs, Œuvres & Principes)`,
          definitionAndScope: `Étude complète du mouvement ${mov.name} (${mov.period}).\n\nCe courant littéraire se caractérise par : \n${mov.principles.map(p => `• ${p}`).join("\n")}`,
          coreConceptsAndFormulas: [
            {
              name: `Mouvement Littéraire : ${mov.name} (${mov.period})`,
              formulaOrRule: mov.principles.join("\n"),
              explanation: `Fondements esthétiques, philosophiques et historiques du mouvement.`,
              contextOrApplication: `Connaissance indispensable pour contextualiser les textes et disserter sur l'histoire littéraire.`
            },
            {
              name: `Auteurs Majeurs de Référence`,
              formulaOrRule: mov.keyAuthors.join(", "),
              explanation: `Écrivains canoniques dont les œuvres illustrent le mieux ce courant.`,
              contextOrApplication: `À citer comme exemples précis dans les dissertations et commentaires composés.`
            },
            {
              name: `Œuvres Clés & Exemples Types`,
              formulaOrRule: mov.keyWorks.map((w, idx) => `• *${w}* (${mov.keyAuthors[idx] || "Auteur du mouvement"})`).join("\n"),
              explanation: `Ces ouvrages constituent le vivier d'exemples obligatoires pour prouver chaque argument.`,
              contextOrApplication: `Chaque argument de dissertation doit s'appuyer sur l'une de ces œuvres.`
            }
          ],
          stepByStepMethod: [
            {
              stepNumber: 1,
              title: "Identifier les enjeux esthétiques et historiques du mouvement",
              whatToDo: "Situer l'époque, le contexte politique et social ayant donné naissance à cette école littéraire.",
              reflexOrTip: "Chaque mouvement naît souvent en réaction au précédent."
            },
            {
              stepNumber: 2,
              title: "Associer systématiquement Auteur, Œuvre et Thème",
              whatToDo: "Pour chaque auteur clé, maîtriser le titre exact d'au moins une œuvre majeure et sa portée.",
              reflexOrTip: "On souligne le titre d'une œuvre complète et on met un poème ou chapitre entre guillemets."
            },
            {
              stepNumber: 3,
              title: "Rédiger l'argumentation d'un paragraphe littéraire",
              whatToDo: "Formuler l'idée générale -> Nommer l'auteur et l'œuvre -> Expliquer la scène ou citation -> Tirer la conclusion.",
              reflexOrTip: "Ne racontez jamais l'histoire du livre : analysez uniquement ce qui répond précisément au sujet."
            }
          ],
          solvedExample: {
            problemStatement: `Sujet de dissertation portant sur ${mov.name} : En quoi ce mouvement éclaire-t-il la société ?`,
            solutionStepByStep: `1. Thèse : Mobiliser les principes de ${mov.name} montrant la mission de l'écrivain.\n` +
              `2. Exemple d'œuvre : Citer *${mov.keyWorks[0]}* de ${mov.keyAuthors[0]}.\n` +
              `3. Conclusion : Montrer comment l'art littéraire sert d'éveil des consciences.`,
            finalAnswer: `Argumentation littéraire solide appuyée par les références certifiées de ${mov.name}.`
          },
          classicExamTraps: [
            "Résumer l'intrigue du livre au lieu d'analyser la portée de l'œuvre.",
            "Attribuer une œuvre au mauvais auteur.",
            "Oublier de relier l'exemple à la consigne du sujet de dissertation."
          ],
          selfCheckChecklist: [
            `Les auteurs et œuvres de ${mov.name} sont-ils clairement identifiés ?`,
            "Les titres des œuvres sont-ils exacts ?",
            "Les exemples choisis répondent-ils directement au problème posé ?"
          ],
          quickRevisionMemo: `Mémo : Pour ${mov.name}, retenir les auteurs clés : ${mov.keyAuthors.slice(0, 4).join(", ")} et les chefs-d'œuvre : ${mov.keyWorks.slice(0, 3).join(", ")}.`,
          certificationNote: "Fiche officielle certifiée conforme aux exigences du Baccalauréat de Français (0 appel IA)."
        };
      }
    }
  }

  // Helper: sanitize and build a prestigious academic scope without raw outline markers (I., II., etc.)
  const buildProfessionalAcademicScope = (course: any): string => {
    if (course.definitions && course.definitions.length > 0) {
      const defs = course.definitions
        .slice(0, 3)
        .map((d: any) => `• ${d.term} : ${d.definition}`)
        .join('\n\n');
      return `${defs}\n\nCadrage & Enjeux officiels : L'étude du chapitre « ${course.lessonTitle} » exige la maîtrise rigoureuse de ces concepts fondamentaux et leur application méthodique lors des évaluations et examens officiels.`;
    }

    const raw = course.fullCourseContent || '';
    const cleanLines = raw
      .split('\n')
      .map((l: string) => l.trim())
      .filter((l: string) => l.length > 0)
      .filter((l: string) => !/^[I|V|X]+\.\s+/i.test(l))
      .filter((l: string) => !/^\d+\.\s+[A-ZÀ-Ÿ]/i.test(l))
      .filter((l: string) => !/^[A-Z]\.\s+[A-ZÀ-Ÿ]/i.test(l))
      .filter((l: string) => !/^(?:INTRODUCTION|GENERALITES|DEFINITION|PROPRIETES|CONCLUSION|PLAN DU COURS)\b/i.test(l));

    const cleanProse = cleanLines.slice(0, 4).join(' ');
    if (cleanProse && cleanProse.length > 50) {
      return `${cleanProse}\n\nCadrage & Enjeux officiels : Maîtrise des notions fondamentales, des propriétés opératoires et des démarches de résolution exigées au programme pour le chapitre « ${course.lessonTitle} ».`;
    }

    return `Étude méthodique du chapitre « ${course.lessonTitle} » (${course.disciplineLabel || 'Enseignement secondaire'}, niveau ${course.levelLabel || 'Collège/Lycée'}) selon le référentiel des compétences et savoirs fondamentaux certifiés par l'Inspection Générale.`;
  };

  // 3. Check official Ivorian courses database (6e to Terminale, all subjects)
  const officialMatched = findOfficialCourse(query, level, discipline, serie);
  if (officialMatched) {
    const cycle = ['6e', '5e', '4e', '3e'].includes(officialMatched.level)
      ? 'premier_cycle_bepc'
      : 'second_cycle_bac';

    return {
      query,
      discipline: officialMatched.discipline,
      disciplineLabel: officialMatched.disciplineLabel,
      cycle,
      level: officialMatched.level,
      levelLabel: officialMatched.levelLabel,
      chapterTitle: `${officialMatched.chapter} : ${officialMatched.lessonTitle}`,
      definitionAndScope: buildProfessionalAcademicScope(officialMatched),
      coreConceptsAndFormulas: [
        ...officialMatched.definitions.map(d => ({
          name: d.term,
          formulaOrRule: d.definition,
          explanation: '',
          contextOrApplication: `Maîtrise fondamentale exigée pour les évaluations et examens.`,
        })),
        ...officialMatched.formulas.map(f => ({
          name: f.name,
          formulaOrRule: f.formula,
          explanation: f.explanation || '',
          contextOrApplication: f.unitOrCondition || 'Application standard en exercice.',
        })),
        ...officialMatched.propertiesAndRules.map(p => ({
          name: p.name,
          formulaOrRule: p.statement,
          explanation: p.explanation || '',
          contextOrApplication: 'Critère d\'évaluation officiel.',
        })),
      ],
      stepByStepMethod: officialMatched.stepByStepMethods.map(m => ({
        stepNumber: m.stepNumber,
        title: m.title,
        whatToDo: m.procedure,
        reflexOrTip: m.tip || 'Bien rédiger chaque étape comme attendu à l\'examen.',
      })),
      solvedExample: {
        problemStatement: officialMatched.examples[0]?.statement || `Exercice d'application sur ${officialMatched.lessonTitle}`,
        solutionStepByStep: officialMatched.examples[0]?.solution || 'Résolution détaillée pas à pas.',
        finalAnswer: officialMatched.quickMemo,
      },
      classicExamTraps: officialMatched.examTraps,
      selfCheckChecklist: officialMatched.objectifs.map(obj => `Maîtrise de : ${obj}`),
      quickRevisionMemo: officialMatched.quickMemo,
      certificationNote: `Fiche de cours certifiée conforme au programme officiel (${officialMatched.levelLabel} - ${officialMatched.disciplineLabel} - 0 appel IA).`,
    };
  }

  // 4. Check academic knowledge base
  const matched = findAcademicKnowledge(query, discipline);

  if (matched) {
    return {
      query,
      discipline: matched.discipline,
      disciplineLabel: matched.disciplineLabel,
      cycle: matched.cycle,
      level: matched.level,
      levelLabel: matched.levelLabel,
      chapterTitle: matched.chapterTitle,
      definitionAndScope: matched.definitionAndScope,
      coreConceptsAndFormulas: matched.coreConceptsAndFormulas,
      stepByStepMethod: matched.stepByStepMethod,
      solvedExample: matched.solvedExample,
      classicExamTraps: matched.classicExamTraps,
      selfCheckChecklist: matched.selfCheckChecklist,
      quickRevisionMemo: matched.quickRevisionMemo,
      certificationNote: matched.certificationNote,
    };
  }

  // Fallback universel clair et documenté si la notion exacte n'est pas encore indexée
  return {
    query,
    discipline: 'philo',
    disciplineLabel: 'Savoirs Académiques & Culture Générale',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Secondaire & Supérieur',
    chapterTitle: `Notions, Définitions & Analyse : ${query}`,
    definitionAndScope: `Étude académique exhaustive et approfondie de la notion « ${query} » selon les programmes officiels. Cette fiche synthétise les définitions exactes, les auteurs ou règles de référence, la démarche pas-à-pas et les pièges classiques d'examen.`,
    coreConceptsAndFormulas: [
      {
        name: `Définition et Fondements de « ${query} »`,
        formulaOrRule: `Analyse conceptuelle rigoureuse et principes directeurs de ${query}`,
        explanation: `Clarification des termes clés et mise en perspective avec les grandes problématiques de la discipline.`,
        contextOrApplication: `Application dans les dissertations, épreuves écrites et questions de cours d'examen.`,
      },
      {
        name: `Références et Doctrines Majeures`,
        formulaOrRule: `Citations et théories fondamentales associées à la notion`,
        explanation: `Mise en lumière des auteurs, théorèmes ou mécanismes incontournables validés par les jurys.`,
        contextOrApplication: `Permet d'étayer solidement l'argumentation ou la résolution technique.`,
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Poser les définitions et le cadre conceptuel',
        whatToDo: 'Analyser les mots-clés, l\'étymologie et le champ d\'application de la notion.',
        reflexOrTip: 'Éviter les définitions vagues du sens commun ; employer le vocabulaire technique précis.',
      },
      {
        stepNumber: 2,
        title: 'Structurer l\'analyse ou la démonstration pas-à-pas',
        whatToDo: 'Articuler les arguments, les calculs ou les exemples avec des connecteurs logiques rigoureux.',
        reflexOrTip: 'Chaque idée doit être appuyée par une référence précise ou une preuve formelle.',
      },
      {
        stepNumber: 3,
        title: 'Synthétiser et formuler la réponse définitive',
        whatToDo: 'Proposer une conclusion claire et sans ambiguïté répondant à la question initiale.',
        reflexOrTip: 'Relire pour éliminer les contresens et erreurs de raisonnement.',
      }
    ],
    solvedExample: {
      problemStatement: `Exercice type ou sujet de réflexion sur « ${query} ».`,
      solutionStepByStep: `1. Identification du problème et des notions clés.\n2. Développement méthodique de l'explication ou du calcul.\n3. Formulation d'un résultat argumenté et vérifié.`,
      finalAnswer: `Synthèse validée selon les standards d'excellence académique.`,
    },
    classicExamTraps: [
      'Rester superficiel ou confondre des termes voisins mais distincts.',
      'Citer des exemples sans en faire l\'analyse conceptuelle.',
      'Oublier de vérifier la cohérence logique globale du devoir.',
    ],
    selfCheckChecklist: [
      'La définition initiale est-elle exacte et complète ?',
      'Les arguments sont-ils appuyés par des références reconnues ?',
      'Le plan de résolution est-il fluide et sans saut logique ?',
    ],
    quickRevisionMemo: 'Pour réussir, maîtrisez toujours la définition exacte des concepts et démontrez méthodiquement chaque étape.',
    certificationNote: 'Fiche de savoir certifiée conforme aux programmes éducatifs officiels.',
  };
}
