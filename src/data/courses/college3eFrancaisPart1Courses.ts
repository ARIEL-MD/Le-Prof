import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_FRANCAIS_PART1_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 3ÈME - EXPRESSION ÉCRITE : LE TEXTE ARGUMENTATIF (LEÇON 1)
  // ========================================================
  {
    id: 'fra-3e-texte-argumentatif-sujet-reflexion',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Expression Écrite : Le Texte argumentatif / Sujet de réflexion',
    lessonTitle: 'Méthodologie du texte argumentatif : Étayer ou réfuter une thèse',
    objectifs: [
      'Maîtriser la définition et la visée du texte argumentatif (défendre ou réfuter une thèse pour convaincre ou persuader)',
      'Identifier et employer les outils de la langue appropriés : lexique thématique, connecteurs logiques, temps verbaux et modalisateurs du discours',
      'Construire avec rigueur les trois parties fondamentales : Introduction en trois temps (Généralité/Amorce, Reformulation/Insertion du sujet, Annonce du plan), Développement (Thèse, Arguments, Explications, Exemples précis) et Conclusion (Bilan synthétique et Ouverture)',
      'Distinguer méthodiquement la démarche pour étayer un point de vue (soutenir, fortifier) et celle pour réfuter un point de vue (combattre, opposer une contre-thèse)',
      'Réinvestir les grands thèmes sociétaux ivoiriens du BEPC : déforestation, civisme fiscal, grossesses en milieu scolaire, violences faites aux femmes, interdiction des sachets plastiques, valeur du travail et de la lecture'
    ],
    fullCourseContent: `1. Définition et Enjeu :
Le texte argumentatif est un écrit dans lequel l'émetteur défend (soutient) ou réfute (rejette) une prise de position (la thèse) sur un sujet donné (le thème). Son objectif est de convaincre (faire appel à la raison par une argumentation logique) ou de persuader (toucher la sensibilité du destinataire).

2. Identification des outils de la langue appropriés :
- Le lexique adapté au thème : vocabulaire mélioratif (valorisant) pour soutenir, vocabulaire péjoratif (dévalorisant) pour critiquer ou dénoncer.
- Les connecteurs logiques :
  * D'organisation / classement : d'abord, tout d'abord, ensuite, de plus, en outre, par ailleurs, enfin.
  * De cause : car, parce que, puisque, étant donné que, grâce à, en raison de.
  * De conséquence : donc, par conséquent, ainsi, c'est pourquoi, de sorte que, d'où.
  * D'opposition ou concession : cependant, pourtant, toutefois, en revanche, néanmoins, au contraire, or.
  * D'illustration : en guise d'exemple, notamment, ainsi, tel est le cas de, à l'instar de.
- Les temps verbaux : Le présent de l'indicatif (présent de vérité générale ou d'énonciation) domine dans l'argumentation. Le conditionnel exprime l'éventualité ou la nuance.
- Les types de phrases : Alternance de phrases déclaratives, interrogatives (questions oratoires de relance) et exclamatives (pour susciter l'émotion).
- Les modalisateurs : Mots ou tournures indiquant le degré d'adhésion de l'auteur (sans conteste, indubitablement, manifestement, il est clair que, certes, il paraît).

3. Structure canonique de la dissertation à l'examen :
La rédaction comprend trois (03) parties obligatoires :

A. L'INTRODUCTION (en un paragraphe continu) :
Elle comporte obligatoirement trois étapes successives :
  a) La généralité (amorce) : Constat social, définition de la notion clé ou remarque historique générale liée au thème.
  b) La reformulation ou l'insertion du sujet : Présentation claire de la citation ou reformulation fidèle de la thèse à examiner.
  c) L'annonce du plan : Indication précise de l'angle d'attaque (étayer ou réfuter la thèse) qui sera mené dans le développement.

B. LE DÉVELOPPEMENT (2 à 3 paragraphes distincts avec alinéa) :
Chaque paragraphe suit rigoureusement la cellule argumentative :
  - Thèse et Connecteur d'annonce : Introduction de l'axe d'analyse.
  - Argument : Idée abstraite et convaincante qui justifie la thèse.
  - Explication : Développement rationnel du "pourquoi" et du "comment".
  - Exemple concret : Fait vérifiable, référence littéraire ivoirienne/africaine (*Les frasques d'Ebinto* d'Amadou Koné, *La voie de ma rue* de Sylvain Kéan Zoh), donnée d'actualité ou constat quotidien.

C. LA CONCLUSION (en un paragraphe) :
  a) Le bilan / synthèse : Résumé objectif des principaux arguments développés.
  b) L'ouverture : Élargissement du débat vers une perspective future ou questionnement philosophique sans hors-sujet.

4. Distanciation méthodologique : Étayer vs Réfuter :
- ÉTAYER une thèse : Confirmer, appuyer, prouver la justesse du point de vue proposé. On fournit des arguments favorables qui abondent dans le même sens que la citation.
- RÉFUTER une thèse : Démontrer l'erreur, l'exagération ou l'insuffisance de la pensée adverse. On formule la thèse contraire (antithèse) et on développe des arguments qui la détruisent.`,
    definitions: [
      {
        term: 'Thèse',
        definition: 'Opinion, prise de position ou point de vue défendu ou combattu par l\'auteur sur un thème précis.'
      },
      {
        term: 'Argument',
        definition: 'Preuve rationnelle, raisonnement logique ou idée directrice servant à justifier la validité d\'une thèse.'
      },
      {
        term: 'Étayer',
        definition: 'Apporter des arguments, des explications et des exemples concrets pour fortifier et soutenir un point de vue.'
      },
      {
        term: 'Réfuter',
        definition: 'Démontrer la fausseté ou le caractère contestable d\'une affirmation en défendant la thèse opposée.'
      },
      {
        term: 'Modalisateur',
        definition: 'Mot ou expression (adverbe, verbe d\'opinion, tournure impersonnelle) traduisant l\'attitude de l\'énonciateur envers ses propos.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des 3 étapes de l\'introduction',
        statement: 'Une introduction de sujet de réflexion doit impérativement comporter dans l\'ordre : 1. La généralité (amorce), 2. L\'insertion/reformulation du sujet, 3. L\'annonce du plan.',
        explanation: 'Sauter l\'une de ces trois étapes entraîne automatiquement une perte de points barème à l\'examen.'
      },
      {
        name: 'Règle d\'or du paragraphe argumentatif (A-E-E)',
        statement: 'Chaque paragraphe de développement doit respecter le schéma ternaire : Argument (l\'idée) + Explication (la justification) + Exemple précis (l\'illustration concrète).',
        explanation: 'Un argument sans exemple reste théorique ; un exemple sans argument relève de l\'anecdote hors-sujet.'
      },
      {
        name: 'Règle de neutralité stylistique',
        statement: 'Privilégier les pronoms "nous", "on" ou les tournures impersonnelles ("il convient de retenir", "force est de constater") plutôt que le "je" intempestif.',
        explanation: 'L\'argumentation gagne en portée universelle et en autorité persuasive.'
      }
    ],
    formulas: [
      {
        name: 'Structure du schéma argumentatif',
        formula: 'Paragraphe = Connecteur + Énoncé de l\'Argument + Explication causale + Exemple illustratif',
        explanation: 'Garantit la cohérence interne de chaque paragraphe du corps du devoir.'
      },
      {
        name: 'Formule de la transition inter-paragraphes',
        formula: 'Transition = Synthèse partielle du point achevé + Connecteur d\'enchaînement + Annonce du point suivant',
        explanation: 'Assure la fluidité entre deux arguments distincts.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyse méthodique du sujet et des consignes',
        procedure: '1. Repérer le thème (de quoi parle-t-on ?). 2. Dégager la thèse de l\'auteur (quelle est sa position exacte ?). 3. Repérer le mot d\'ordre de la consigne : s\'agit-il d\'étayer (soutenir) ou de réfuter (rejeter) ?',
        tip: 'Soulignez les mots-clés de la citation et vérifiez que vous ne confondez pas le thème (le domaine général) et la thèse (l\'opinion précise).'
      },
      {
        stepNumber: 2,
        title: 'Recherche et sélection des arguments et exemples',
        procedure: 'Dresser au brouillon un tableau à deux colonnes : Argument (abstrait) | Exemple concret (fait social, œuvre au programme, actualité). Sélectionner les 2 ou 3 arguments les plus solides et les classer du moins fort au plus percutant.',
        tip: 'Variez les domaines d\'exemples : un exemple littéraire ivoirien (*Les Frasques d\'Ebinto*, *Rebelle*), un exemple sociologique et un fait d\'actualité économique.'
      },
      {
        stepNumber: 3,
        title: 'Rédaction de l\'introduction et de la conclusion au brouillon',
        procedure: 'Rédiger intégralement l\'introduction (amorce + insertion du sujet + annonce) et la conclusion (bilan + ouverture) avant d\'attaquer le développement.',
        tip: 'L\'ouverture en conclusion doit être une interrogation stimulante prolongeant le thème sans contredire ce qui vient d\'être démontré.'
      },
      {
        stepNumber: 4,
        title: 'Rédaction finale et relecture orthographique',
        procedure: 'Recopier le devoir sur la copie en respectant les alinéas au début de chaque paragraphe et en sautant une ligne entre l\'introduction, le développement et la conclusion. Relire pour traquer les accords sujet-verbe et participe passé.',
        tip: 'Ne sautez pas de ligne entre les paragraphes du développement, marquez seulement un net alinéa de deux carreaux.'
      }
    ],
    examples: [
      {
        statement: 'Sujet officiel BEPC (Protection de l\'environnement) : Lors d\'une conférence sur le climat, une autorité affirme : « Il est important pour nos populations de protéger la forêt ». Consigne : Rédige une production pour étayer ce point de vue.',
        solution: `Plan détaillé et modèle rédigé :
- Thème : La sauvegarde / protection du couvert forestier.
- Thèse : La protection de la forêt est une nécessité impérieuse.
- Type d'exercice : Étayer (appuyer la thèse).

Introduction rédigée :
De nos jours, l'impact négatif des activités humaines sur l'écosystème inquiète vivement la communauté internationale. C'est dans ce contexte alarmant qu'une autorité environnementale déclarait : « Il est important pour nos populations de protéger la forêt ». Dans une démarche argumentée et illustrée d'exemples précis, nous étayerons ce point de vue pertinent.

Développement :
D'abord, la préservation des massifs forestiers constitue un rempart vital contre le réchauffement climatique et la dégradation de l'air. En effet, par le mécanisme de la photosynthèse, les arbres absorbent d'immenses quantités de dioxyde de carbone tout en libérant l'oxygène indispensable à la respiration des êtres vivants. La destruction anarchique des arbres accentue donc la pollution atmosphérique et l'effet de serre.

Ensuite, l'existence d'un couvert forestier dense régule la pluviométrie et sécurise la productivité agricole. La forêt favorise l'évapotranspiration, maintenant ainsi la régularité des saisons pluvieuses nécessaires aux cultures vivrières et de rente. Par exemple, si la Côte d'Ivoire a pu bâtir sa prospérité économique et occuper le premier rang mondial dans la production de cacao, c'est grâce à la richesse initiale de son manteau forestier.

Enfin, la protection des forêts permet d'enrayer durablement l'avancée du désert et l'érosion des sols arables. L'abattage incontrôlé prive la terre de ses racines fixatrices, transformant progressivement des terroirs fertiles en étendues arides. Ainsi, la surface forestière ivoirienne est passée de plus de 16 millions d'hectares au lendemain des indépendances à moins de 3 millions aujourd'hui, provoquant des sécheresses inédites.

Conclusion :
En définitive, la forêt représente le poumon écologique et le pilier nourricier de nos nations. Sa sauvegarde est donc un devoir civique urgent pour préserver l'avenir des générations futures. Dès lors, ne revient-il pas à l'État d'intensifier le reboisement obligatoire et de punir sévèrement l'orpaillage clandestin ?`
      },
      {
        statement: 'Sujet officiel BEPC (Réfutation - Bonne conduite des élèves) : Face à l\'attitude de certains jeunes, un observateur affirme : « L\'école n\'apprend plus aux élèves à bien se comporter dans la société ». Consigne : Rédige ta production pour réfuter ce point de vue.',
        solution: `Plan de réfutation :
- Thèse de l'observateur (à réfuter) : L'école a démissionné de sa mission d'éducation morale.
- Contre-thèse à défendre : L'école continue d'inculquer des valeurs morales et civiques indispensables à la vie en société.

Introduction modèle :
L'école, temple du savoir et creuset de formation des élites, joue un rôle déterminant dans l'évolution de toute communauté. Pourtant, déçus par l'attitude de quelques apprenants égarés, certains esprits critiques n'hésitent pas à affirmer que l'école n'apprend plus aux élèves à bien se comporter dans la société. Nous réfutons formellement ce jugement réducteur en démontrant que l'institution scolaire demeure le garant privilégié de l'éducation citoyenne.

Développement (3 arguments de réfutation) :
Premièrement, les programmes scolaires intègrent des matières spécifiquement dédiées à l'apprentissage des valeurs civiques et républicaines. Des disciplines comme l'Éducation aux Droits de l'Homme et à la Citoyenneté (EDHC) et le Français enseignent aux jeunes le respect de la vie humaine, la tolérance et la solidarité nationale.

Deuxièmement, les règlements intérieurs des établissements et les équipes d'encadrement (éducateurs, censeurs) imposent une rigoureuse discipline au quotidien. Les retards, la violence physique et la fraude sont systématiquement sanctionnés par des avertissements, des exclusions ou une note de conduite, apprenant ainsi à l'adolescent le respect de la règle commune.

Troisièmement, l'école mène des campagnes régulières de sensibilisation contre les fléaux sociaux tels que la drogue, l'alcoolisme, les grossesses précoces et le VIH-SIDA, protégeant ainsi activement la jeunesse.

Conclusion :
En somme, même si des déviances individuelles existent, l'école ne faillit nullement à sa mission éducatrice fondamentale. Mais les familles ne doivent-elles pas assumer leur part de responsabilité parentale au lieu de tout rejeter sur l'école ?`
      }
    ],
    exercises: [
      {
        question: 'BEPC 2016 Zone 1 (Interdiction des sachets plastiques) : Un commerçant affirme mécontent : « La décision d\'interdire les sachets en plastique ne me paraît pas raisonnable ». Identifie le thème, formule la thèse contraire à défendre, et propose deux arguments précis pour réfuter son point de vue.',
        correction: `1. Thème : L'interdiction de l'utilisation et de la commercialisation des sachets en plastique non biodégradables.
2. Thèse contraire à défendre (Réfutation) : La décision d'interdire les sachets en plastique est une mesure sage, salutaire et indispensable pour le pays.
3. Deux arguments de réfutation :
- Argument environnemental : Les sachets plastiques non biodégradables mettent des siècles à se décomposer, bouchent les caniveaux, provoquent des inondations mortelles et détruisent la fertilité des terres cultivables (ex: communes d'Abidjan lors des saisons pluvieuses).
- Argument sanitaire : Les eaux stagnantes piégées dans les sachets usagers favorisent la pullulation des moustiques anophèles vecteurs du paludisme et de germes du choléra et de la typhoïde.`
      },
      {
        question: 'BEPC 2018 Zone 3 (Violences faites aux femmes) : « Les violences que subissent les femmes sont négatives pour l\'équilibre social ». Donne un plan détaillé (3 arguments et exemples) pour étayer cette affirmation.',
        correction: `Plan détaillé pour étayer :
- Thèse : Les violences infligées aux femmes détruisent le tissu familial et paralysent le développement de la nation.
- Argument 1 (Plan sanitaire et physique) : Les violences physiques et mutilations génitales féminines (excision) causent des traumatismes corporels graves, la stérilité et parfois la mort de jeunes filles innocentes (pratiques encore combattues dans plusieurs régions).
- Argument 2 (Plan familial et psychologique) : Les violences conjugales verbales et physiques entraînent l'éclatement du foyer, plongeant la femme dans la dépression et privant les enfants d'un cadre serein pour grandir (ex: le calvaire de Monique dans *Les Frasques d'Ebinto* d'Amadou Koné).
- Argument 3 (Plan économique et social) : La marginalisation et la maltraitance des femmes privent la société de la moitié de ses forces vives productives, retardant l'émergence économique du pays.`
      }
    ],
    evaluationSituation: {
      context: 'À la veille des vacances de fin d\'année, un groupe d\'élèves tente de paralyser les cours pour imposer des congés anticipés. Témoin de ces perturbations, un parent d\'élève s\'indigne : « L\'école ivoirienne souffre aujourd\'hui d\'une crise d\'autorité qui menace l\'avenir de nos enfants ». Choqué par ces événements, tu décides d\'étayer ce constat dans une production argumentée.',
      instructions: [
        '1. Identifie le thème et la thèse du sujet.',
        '2. Rédige une introduction complète respectant les trois étapes réglementaires.',
        '3. Développe deux arguments illustrés d\'exemples concrets montrant les dangers du phénomène des congés anticipés et le manque de civisme.',
        '4. Rédige une conclusion avec bilan et ouverture.'
      ],
      solutionGuide: 'L\'élève doit identifier le thème (la crise de discipline / le phénomène des congés anticipés) et la thèse (l\'effritement de l\'autorité scolaire menace la formation de la jeunesse). Dans le développement, analyser la perturbation du calendrier scolaire (perte de semaines de cours, retard sur les programmes) et les violences matérielles/humaines constatées lors des affrontements entre élèves.'
    },
    examTraps: [
      'Confondre "étayer" et "réfuter" : Si le sujet demande d\'étayer une thèse et que vous la critiquez, vous serez sanctionné par un hors-sujet total.',
      'Oublier les trois parties de l\'introduction : L\'absence d\'amorce ou d\'annonce de plan fait perdre immédiatement des points précieux de méthodologie.',
      'Accumuler des exemples sans formuler d\'argument abstrait : Un devoir n\'est pas un récit anecdotique.',
      'Rédiger une conclusion qui contredit le développement ou qui introduit un nouvel argument non débattu.'
    ],
    quickMemo: 'Texte argumentatif = Introduction (Amorce + Thèse reformulée + Annonce du plan) | Développement (2-3 arguments avec schéma Argument + Explication + Exemple) | Conclusion (Synthèse + Ouverture). Étayer = soutenir ; Réfuter = démolir la thèse adverse.',
    keywords: ['texte argumentatif', 'thèse', 'étayer', 'réfuter', 'schéma argumentatif', 'connecteurs logiques', 'dissertation', 'français', 'sujet de réflexion']
  },

  // ========================================================
  // 3ÈME - LE RÉSUMÉ DE TEXTE ARGUMENTATIF (LEÇON 2)
  // ========================================================
  {
    id: 'fra-3e-resume-texte-argumentatif-contraction',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Expression Écrite : Le Résumé de texte argumentatif',
    lessonTitle: 'Technique du résumé de texte : Contraction, fidélité et reformulation',
    objectifs: [
      'Définir la nature et les exigences du résumé de texte (réduction au 1/3 ou 1/4 du volume avec tolérance légale de ±10%)',
      'Maîtriser les consignes d\'usage : lecture analytique approfondie (5 à 6 fois), repérage des articulations logiques et des idées maîtresses',
      'Appliquer les règles d\'or du résumé : respect du système d\'énonciation, neutralité absolue (pas de commentaire personnel), interdiction du recopiage servile',
      'Pratiquer la reformulation personnelle des idées essentielles grâce aux outils de condensation lexicale et syntaxique',
      'Répondre avec précision aux questions d\'accompagnement : Compréhension du texte, Vocabulaire en contexte et Maniement de la langue'
    ],
    fullCourseContent: `1. Définition et Objectif de l'exercice :
Le résumé de texte argumentatif (ou contraction de texte) est un exercice académique exigeant qui consiste à réécrire un texte en le condensant, en le simplifiant et en réduisant son volume initial au tiers (1/3) ou au quart (1/4), selon la consigne, tout en restant strictement fidèle à la pensée, à la logique et au mouvement argumentatif de l'auteur.

2. Les règles d'or absolues du résumé à l'examen :
- Règle 1 : Respect du volume et marge de tolérance :
  * Si un texte compte 279 mots et doit être résumé au 1/3, le volume théorique est 279 / 3 = 93 mots.
  * La marge de tolérance de ±10% autorise entre 84 mots (93 - 9) et 102 mots (93 + 9). Tout dépassement en deçà ou au-delà est lourdement pénalisé.
- Règle 2 : Respect du système d'énonciation :
  * Si l'auteur s'exprime à la première personne ("je", "nous"), le résumé doit conserver cette première personne.
  * Si l'auteur emploie la 3e personne ("il", "on"), le résumé reste à la 3e personne.
  * FORMELLEMENT INTERDIT : Insérer des incises métatextuelles comme "L'auteur affirme que...", "Selon le texte...", "L'auteur conclut en disant...". Le résumé parle à la place de l'auteur direct.
- Règle 3 : Neutralité et objectivité parfaites :
  * L'élève n'a pas le droit d'ajouter ses propres idées, d'exprimer son accord ou son désaccord, ni d'introduire des connaissances extérieures.
- Règle 4 : Interdiction du montage de citations (non au copié-collé) :
  * Il est strictement interdit d'aligner des phrases entières extraites du texte. Les idées de l'auteur doivent être reformulées avec un vocabulaire personnel ("génie créateur").

3. Décompte officiel des mots en langue française :
- Tout mot ou vocable isolé entre deux blancs ou signes typographiques compte pour un mot.
- Les élisions et articles contractés comptent pour des mots distincts :
  * "c'est-à-dire" = 4 mots (c' / est / à / dire)
  * "l'enfant" = 2 mots (l' / enfant)
  * "qu'il" = 2 mots (qu' / il)
  * "d'Afrique" = 2 mots (d' / Afrique)
  * Un mot composé avec trait d'union : "porte-monnaie" = 2 mots, "socio-économique" = 2 mots.
  * Les nombres en chiffres : "1995" = 1 mot ; "41%" = 2 mots (41 / %).

4. Méthodologie pas à pas :
- Étape 1 : Lectures successives (5 à 6 fois) pour identifier le thème global, la thèse centrale et la progression logique.
- Étape 2 : Découpage par séquences / paragraphes pour dégager l'idée directrice de chaque unité textuelle.
- Étape 3 : Élimination méthodique du superflu :
  * Supprimer les exemples purement illustratifs.
  * Éliminer les anecdotes, les métaphores poétiques et les digressions.
  * Condenser les longues énumérations en un terme générique (ex: "mangues, ananas, papayes, bananes" -> "fruits tropicaux").
- Étape 4 : Reformulation des idées maîtresses avec ses propres mots à l'aide de synonymes et de tournures synthétiques.
- Étape 5 : Rédaction du résumé lié par des connecteurs logiques assurant la fluidité du raisonnement.
- Étape 6 : Comptage rigoureux des mots et mention obligatoire du total au bas de la copie (ex: "92 mots").`,
    definitions: [
      {
        term: 'Résumé de texte',
        definition: 'Exercice consistant à réduire un texte au 1/3 ou 1/4 de sa longueur initiale en préservant son argumentation et sa logique sans ajout personnel.'
      },
      {
        term: 'Énonciation',
        definition: 'Manière dont l\'émetteur se situe dans son discours à travers les pronoms personnels ("je", "nous", "il") et les temps verbaux.'
      },
      {
        term: 'Idée essentielle',
        definition: 'Pensée maîtresse d\'un paragraphe indispensable à la progression du raisonnement, par opposition aux détails et illustrations.'
      },
      {
        term: 'Marge de tolérance (±10%)',
        definition: 'Écart admis par le barème officiel d\'examen autour du nombre de mots exigé pour le résumé.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Calcul de la fourchette de mots à l\'examen',
        statement: 'Longueur cible = Nombre de mots du texte / 3 (ou 4). Borne inférieure = Cible - 10%. Borne supérieure = Cible + 10%.',
        explanation: 'Exemple : Texte de 376 mots résumé au 1/3. Cible = 125 mots. Marge = ±12 mots. Fourchette admise = 113 à 137 mots.'
      },
      {
        name: 'Interdiction absolue des formules introductives d\'observateur',
        statement: 'Ne jamais écrire "L\'auteur commence par montrer que..." ou "Dans ce texte, on nous dit...".',
        explanation: 'Le candidat doit adopter directement la voix du texte source.'
      },
      {
        name: 'Règle de condensation par terme hyperonyme',
        statement: 'Remplacer une liste d\'éléments concrets par leur catégorie englobante (hyperonyme).',
        explanation: 'Permet d\'économiser de nombreux mots sans altérer le sens.'
      }
    ],
    formulas: [
      {
        name: 'Calcul du quota de mots',
        formula: 'N_{cible} = \\frac{N_{total}}{3} \\quad \\implies \\quad N_{min} = N_{cible} \\times 0{,}9 \\quad ; \\quad N_{max} = N_{cible} \\times 1{,}1',
        explanation: 'Appliqué avec rigueur lors de la correction des épreuves officielles.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Première lecture et identification du thème et de la thèse',
        procedure: 'Lire le texte intégralement pour répondre aux deux questions fondamentales : De quoi parle le texte ? (Thème) Que veut prouver l\'auteur ? (Thèse).',
        tip: 'Repérez le titre et la source bibliographique au bas du texte, ils livrent souvent de précieux indices sur la thèse.'
      },
      {
        stepNumber: 2,
        title: 'Découpage du texte en unités de pensée et tableau synoptique',
        procedure: 'Numéroter les paragraphes. Sur le brouillon, tracer un tableau à 3 colonnes : Paragraphes | Idées essentielles brutes | Idées reformulées.',
        tip: 'Bannissez les citations textuelles dans la colonne des idées reformulées pour éviter tout réflexe de plagiat.'
      },
      {
        stepNumber: 3,
        title: 'Rédaction du premier jet et insertion des connecteurs',
        procedure: 'Relier les idées reformulées en un paragraphe fluide à l\'aide de connecteurs logiques de cause, conséquence, opposition et addition.',
        tip: 'Veillez à ce que le texte obtenu soit clair et compréhensible par une personne qui n\'a jamais lu le texte original.'
      },
      {
        stepNumber: 4,
        title: 'Comptage rigoureux et ajustement du volume',
        procedure: 'Compter mot à mot le résumé produit en marquant une barre tous les 10 mots. Si le total sort de la fourchette autorisée (±10%), éliminer des adverbes superflus ou développer une explication synthétique.',
        tip: 'Inscrivez toujours en bas à droite de votre copie le décompte final : "Nombre de mots : XX".'
      }
    ],
    examples: [
      {
        statement: 'Extrait BEPC : "Effets et méfaits de la croissance urbaine" (François Ploquin). Texte de 258 mots à résumer au 1/3 (86 mots ± 8 mots, soit entre 78 et 94 mots).',
        solution: `Repérage des idées essentielles :
P1 : Croissance spectaculaire et rapide des métropoles en Afrique.
P2 : Cette urbanisation entraîne de multiples maux (chômage, précarité, insalubrité).
P3 : Échec des solutions tentées (retour à la terre).
P4 : L'attrait initial pour l'emploi en ville s'est transformé en désillusion et débrouillardise.
P5 : La survie en milieu urbain devient désormais précaire et aléatoire.

Modèle de résumé rédigé (88 mots) :
Les villes pauvres ont une urbanisation rapide en général et en particulier en Afrique. D'abord, cette croissance rapide des métropoles engendre des problèmes de tous genres. Ensuite, l'exode rural constitue un frein redoutable pour le développement harmonieux des cités. Par ailleurs, l'accroissement accéléré des villes est lié à l'illusion de l'emploi, car les espoirs nés après les indépendances se sont évanouis. Enfin, la ville demeure aujourd'hui un espace précaire et hautement défavorable à l'épanouissement durable de l'être humain.
(88 mots - dans la fourchette exacte de 78 à 94 mots).`
      },
      {
        statement: 'Questions de vocabulaire et compréhension associées à un texte argumentatif : Explique en contexte "précarité de l\'habitat" et "villes pourvoyeuses d\'emplois".',
        solution: `1. "Précarité de l'habitat" : Désigne l'insalubrité, l'instabilité et le dénuement des logements de fortune (bidonvilles, baraquements sans eau courante ni électricité, quartiers précaires bâtis sur des zones inondables).
2. "Villes pourvoyeuses d'emplois" : Villes dynamiques qui offrent d'abondantes opportunités d'embauche et de travail pour la population.`
      }
    ],
    exercises: [
      {
        question: 'Un texte de 376 mots portant sur les bienfaits de la télévision doit être résumé au 1/3. Quelle est la longueur théorique exigée ? Quelles sont les bornes minimale et maximale admises au BEPC ?',
        correction: `1. Longueur théorique : 376 / 3 = 125,33, soit 125 mots.
2. Marge de tolérance de 10% : 125 x 0,10 = 12,5, soit 12 ou 13 mots.
3. Borne minimale : 125 - 12 = 113 mots (ou 112 mots).
4. Borne maximale : 125 + 12 = 137 mots (ou 138 mots).
Le résumé final doit impérativement comporter entre 113 et 137 mots.`
      },
      {
        question: 'Comment compte-t-on le nombre de mots dans la phrase suivante : « C\'est pourquoi l\'homme d\'aujourd\'hui s\'inquiète de l\'environnement » ?',
        correction: `Décomposition mot à mot selon les règles du BEPC :
1. C' (1 mot)
2. est (1 mot)
3. pourquoi (1 mot)
4. l' (1 mot)
5. homme (1 mot)
6. d' (1 mot)
7. aujourd' (1 mot)
8. hui (1 mot)
9. s' (1 mot)
10. inquiète (1 mot)
11. de (1 mot)
12. l' (1 mot)
13. environnement (1 mot)
Total = 13 mots.`
      }
    ],
    evaluationSituation: {
      context: 'À l\'épreuve blanche de français du BEPC, on te soumet un texte argumentatif de 246 mots extrait de "L\'année de la 4ème" intitulé "Connaître son corps". La consigne t\'impose de résumer ce texte au tiers de sa longueur et de répondre aux questions de compréhension et de lexique.',
      instructions: [
        '1. Dégage le thème central et la thèse de l\'auteur.',
        '2. Explique en contexte l\'expression « rôle primordial » et propose deux synonymes.',
        '3. Identifie les 4 idées essentielles du texte.',
        '4. Rédige le résumé en respectant la fourchette imposée (74 à 90 mots) et mentionne le décompte final.'
      ],
      solutionGuide: 'L\'élève doit relever que le texte traite de l\'éducation physique et corporelle (thème) et soutient que l\'apprentissage du corps est indispensable à l\'épanouissement humain au même titre que l\'instruction intellectuelle (thèse). Synonymes de rôle primordial : rôle capital, rôle essentiel, rôle majeur. Le résumé reformulera l\'intérêt du sport, son coût élevé qui nécessite le relais de l\'école, et ses bénéfices physiologiques et mentaux.'
    },
    examTraps: [
      'Utiliser des formules d\'observateur : "L\'auteur démontre...", "L\'auteur souligne...", "Selon le texte...". Ces tournures entraînent le retrait de points d\'énonciation.',
      'Oublier d\'indiquer le nombre de mots à la fin du résumé.',
      'Tricher sur le décompte des mots : les correcteurs recomptent systématiquement les mots des copies.',
      'Conserver des citations entre guillemets : le résumé doit être entièrement réécrit avec vos propres mots.'
    ],
    quickMemo: 'Résumé de texte = Division du texte par 3 (ou 4) avec marge de ±10% | Même système d\'énonciation que l\'auteur | Zéro formule d\'observateur | Reformulation personnelle sans recopier | Décompte exact des mots mentionné en fin de devoir.',
    keywords: ['résumé de texte', 'contraction de texte', 'décompte des mots', 'marge de tolérance', 'reformulation', 'énonciation', 'français', 'idées essentielles']
  }
];
