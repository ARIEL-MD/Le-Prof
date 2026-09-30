import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_HUMANITIES_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 3ÈME / BEPC - FRANÇAIS (DPFC / MENA)
  // ==========================================
  {
    id: 'francais-3e-texte-argumentatif-resume-bepc',
    discipline: 'francais',
    disciplineLabel: 'Français (BEPC)',
    level: '3e',
    levelLabel: '3ème / BEPC',
    chapter: 'Méthodologie du Texte Argumentatif & du Résumé de Texte',
    lessonTitle: 'Production d\'un texte argumentatif normé BEPC et réduction au tiers (1/3)',
    objectifs: [
      'Maîtriser la structure officielle du texte argumentatif au BEPC (Introduction, Développement avec arguments et exemples, Conclusion)',
      'Employer les connecteurs logiques de cause, conséquence, opposition et addition',
      'Résumer un texte au tiers de sa longueur (marge de tolérance de ± 10%) en respectant le système d\'énonciation et sans plagiat',
      'Identifier les types et formes de phrases, voix active/passive et discours direct/indirect'
    ],
    fullCourseContent: `1. Le Texte Argumentatif au BEPC :
Le sujet de production écrite au BEPC demande de défendre ou de réfuter une thèse sur un sujet de société (éducation, travail des enfants, protection de l'environnement, usage des téléphones, etc.).
Structure obligatoire :
- Introduction (3 étapes) :
  1. Amorce / Présentation du thème général.
  2. Position du problème / Thèse à défendre clairement énoncée.
  3. Annonce succincte du plan.
- Développement (2 ou 3 paragraphes argumentatifs) :
  Chaque paragraphe doit suivre la règle "A-E-E" :
  * Argument (Idée directrice introduite par un connecteur logique : D'abord, Ensuite, De plus, Enfin).
  * Explication (Développement logique de l'argument : En effet, Car, C'est-à-dire).
  * Exemple illustratif concret (Puisé dans la vie quotidienne, l'histoire ou la littérature : Par exemple, À titre d'illustration, C'est le cas de...).
- Conclusion (2 étapes) :
  1. Bilan / Synthèse des arguments développés (En somme, En conclusion, Tout compte fait).
  2. Ouverture ou prise de position finale citoyenne.

2. Le Résumé de Texte au 1/3 au BEPC :
- Règle de calcul : Nombre de mots du texte d'origine divisé par 3. La tolérance officielle est de ± 10%.
  Exemple : Texte de 300 mots -> Résumé = 100 mots (admis entre 90 et 110 mots).
- Règles d'or :
  1. Respecter strictement l'ordre des idées et le système d'énonciation de l'auteur (NE JAMAIS écrire "L'auteur dit que...").
  2. Reformuler avec son propre vocabulaire : interdiction absolue de recopier des phrases entières.
  3. Supprimer les exemples secondaires, les répétitions, les chiffres accessoires et les digressions.
  4. Indiquer obligatoirement le décompte exact des mots à la fin de la copie.`,
    definitions: [
      {
        term: 'Thèse',
        definition: 'Opinion, position ou jugement qu\'un auteur soutient ou combat à l\'aide d\'arguments logiques.'
      },
      {
        term: 'Connecteur logique',
        definition: 'Mot ou locution (conjonction, adverbe) qui établit une relation logique de sens entre les propositions ou les paragraphes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'énonciation dans le résumé',
        statement: 'Le résumé doit être rédigé à la même personne grammaticale que l\'auteur (se mettre dans la peau de l\'auteur sans formule distanciée).'
      },
      {
        name: 'Marge de tolérance de comptage au BEPC',
        statement: 'Le nombre de mots du résumé doit se situer impérativement dans l\'intervalle [Nb_mots/3 - 10% ; Nb_mots/3 + 10%].'
      }
    ],
    formulas: [
      {
        name: 'Calcul du nombre de mots pour le résumé',
        formula: 'Longueur idéale = Nb_total_mots / 3 ± 10%',
        explanation: 'Tout mot séparé par un espace ou un trait d\'union compte pour une unité selon les consignes BEPC.',
        unitOrCondition: 'Tolérance stricte ± 10%'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Bâtir un paragraphe argumentatif complet à l\'examen',
        procedure: '1. Choisir un connecteur (D\'une part / En premier lieu).\n2. Énoncer l\'argument de manière concise.\n3. Justifier l\'argument en 2 phrases explicatives ("En effet...").\n4. Clore le paragraphe par un exemple concret vérifiable ("Par exemple, en Côte d\'Ivoire...").',
        tip: 'Chaque argument distinct doit faire l\'objet d\'un paragraphe avec alinéa.'
      },
      {
        stepNumber: 2,
        title: 'Technique de comptage des mots du résumé',
        procedure: 'Compter chaque mot séparé par une apostrophe ou un espace (ex : "l\'école" = 2 mots, "c\'est-à-dire" = 4 mots). Noter le total à la fin : [Ex : 102 mots].',
        tip: 'Faire un brouillon par tranche de 10 mots pour ajuster précisément le volume.'
      }
    ],
    examples: [
      {
        statement: 'Rédige une introduction sur le sujet : "L\'école est le meilleur moyen de réussir sa vie."',
        solution: 'De nos jours, l\'éducation demeure au cœur des préoccupations de toute société en quête d\'épanouissement. Si certains privilégient l\'apprentissage précoce d\'un métier manuel, force est de constater que l\'école constitue le pilier fondamental de la réussite personnelle et professionnelle. Dès lors, nous montrerons comment l\'instruction scolaire transmet les savoirs indispensables, avant de souligner son rôle dans l\'insertion socioprofessionnelle.'
      }
    ],
    exercises: [
      {
        question: 'Transforme la phrase suivante de la voix active à la voix passive : "Le gouvernement ivoirien a construit de nouveaux collèges de proximité."',
        correction: '"De nouveaux collèges de proximité ont été construits par le gouvernement ivoirien."'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une causerie-débat au foyer du Collège Moderne de Katiola, certains élèves affirment que l\'usage incontrôlé des smartphones en classe perturbe les études, tandis que d\'autres pensent qu\'il facilite les recherches scolaires.',
      instructions: [
        '1. Dans un devoir argumenté de 20 à 25 lignes, prends position sur le sujet.',
        '2. Développe deux arguments illustrés par des exemples précis.',
        '3. Conclus par une recommandation citoyenne.'
      ],
      solutionGuide: 'Grille d\'évaluation BEPC :\n- Introduction : Amorce sur l\'essor du numérique, thèse (le smartphone est un outil bénéfique s\'il est rigoureusement encadré), annonce du plan.\n- Argument 1 : Accès rapide aux ressources éducatives et dictionnaires numériques (exemple : recherche documentaire instantanée sur les cours).\n- Argument 2 : Risque majeur de distraction, de tricherie et de baisse de concentration lors des explications du professeur (exemple : réseaux sociaux pendant les cours).\n- Conclusion : Bilan équilibré recommandant une réglementation stricte par le règlement intérieur des établissements scolaires.'
    },
    examTraps: [
      'Écrire "L\'auteur démontre dans son texte..." dans un résumé de texte (pénalité lourde au BEPC).',
      'Donner des exemples sans argument explicite dans la rédaction.',
      'Dépasser la marge de tolérance de ± 10% du résumé.'
    ],
    quickMemo: 'Texte argumentatif : Intro (Amorce + Thèse + Plan), Dév (Arg + Expl + Ex), Concl (Bilan + Ouverture). Résumé : 1/3 des mots ± 10%, même personne, aucun copier-coller.',
    keywords: ['français 3e', 'BEPC', 'texte argumentatif', 'résumé de texte', 'connecteurs logiques', 'voix passive', 'discours indirect']
  },

  // ==========================================
  // 3ÈME / BEPC - HISTOIRE-GÉOGRAPHIE (DPFC / MENA)
  // ==========================================
  {
    id: 'hg-3e-histoire-resistances-geographie-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire-Géographie (BEPC)',
    level: '3e',
    levelLabel: '3ème / BEPC',
    chapter: 'Histoire : Résistances à la conquête coloniale & Géographie : La Côte d\'Ivoire économique',
    lessonTitle: 'Résistances armées et pacifiques en Côte d\'Ivoire, et atouts naturels et humains de l\'économie ivoirienne',
    objectifs: [
      'Analyser les formes de résistances africaines face à la pénétration coloniale française en Côte d\'Ivoire (Samory Touré, résistances Baoulé, Bété, Sénoufo, Agni)',
      'Expliquer les causes et conséquences de la mise en valeur coloniale (travail forcé, impôt de capitation, économie de traite)',
      'Décrire les atouts naturels (relief, climats, sols fertiles) et humains (population jeune et dynamique) de la Côte d\'Ivoire',
      'Identifier les piliers agricoles (cacao, café, hévéa, palmier à huile, vivriers) et industriels du pays'
    ],
    fullCourseContent: `1. Histoire : Les Résistances à la Conquête Coloniale en Côte d'Ivoire :
- Contexte : À la suite de la conférence de Berlin (1884-1885), la France entreprend la conquête militaire du territoire ivoirien (colonie créée le 10 mars 1893 avec Binger comme premier gouverneur).
- Les figures et peuples de résistance :
  * L'Almamy Samory Touré : Organise une résistance militaire moderne et farouche contre l'armée française (stratégie de la terre brûlée, fabrication locale d'armes) avant sa capture à Guélémou le 29 septembre 1898.
  * La résistance Baoulé (1893-1911) : Guérilla opiniâtre dans les forêts denses du centre contre les colonnes militaires françaises (Binger, Marchand, Angoulvant).
  * Les révoltes des peuples Bété, Agni, Abbey (insurrection des Abbey en 1910 le long de la ligne de chemin de fer d'Agboville), Gouro et Dan.
- La pacification brutale du gouverneur Gabriel Angoulvant (1908-1915) : Politique de la manière forte, désarmement forcé, imposition de lourdes amendes, internement des chefs coutumiers et travail forcé.

2. Géographie : Les Atouts et l'Économie de la Côte d'Ivoire :
- Les atouts naturels :
  * Relief peu accidenté : Vaste plaine côtière au Sud, bas-plateaux étagés au Centre, hauts plateaux et montagnes au Nord-Ouest (Mont Nimba : 1 752 m).
  * Climats diversifiés : Climat équatorial et subéquatorial au Sud (deux saisons de pluies favorables aux cultures pérennes) et climat tropical (soudanien) au Nord (favorable au coton, à l'anacarde et à l'élevage).
  * Réseau hydrographique dense : Quatre grands fleuves (Cavally, Sassandra, Bandama, Comoé).
- La population ivoirienne :
  * Plus de 29 millions d'habitants, caractérisée par son extrême jeunesse (> 60% ont moins de 25 ans) et une forte diversité ethnoculturelle (4 grands groupes : Akan, Krou, Mandé, Voltaïque/Gur).
- Les piliers économiques :
  * Premier producteur et exportateur mondial de cacao (plus de 40% de l'offre mondiale) et d'anacarde.
  * Cultures d'exportation majeures : Hévéa (1er producteur africain), palmier à huile, café, banane dessert, ananas, coton.
  * Cultures vivrières : Igname, manioc, riz, banane plantain, maïs, maraîchers.
  * Industrie : Agroalimentaire, raffinage pétrolier (SIR), cimenteries, BTP et réseau portuaire international (Port Autonome d'Abidjan et Port de San Pedro).`,
    definitions: [
      {
        term: 'Économie de traite',
        definition: 'Système économique colonial basé sur l\'exportation de matières premières brutes (cacao, café, bois) vers la métropole et l\'importation de produits manufacturés finis.'
      },
      {
        term: 'Travail forcé',
        definition: 'Corvée obligatoire non rémunérée imposée aux populations indigènes pour la construction des routes, chemins de fer et plantations coloniales (aboli le 11 avril 1946 par la loi Houphouët-Boigny).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'analyse historique (Causes - Déroulement - Conséquences)',
        statement: 'Dans toute composition d\'histoire au BEPC, structurer l\'analyse selon le triptyque : causes profondes et immédiates, faits historiques majeurs avec dates et acteurs, et conséquences socio-politiques.'
      },
      {
        name: 'Règle de localisation géographique',
        statement: 'Tout fait géographique (culture, relief, climat) doit être rigoureusement localisé dans l\'espace ivoirien (Sud forestier, Centre de contact, Nord savanicole).'
      }
    ],
    formulas: [
      {
        name: 'Densité de population',
        formula: 'Densité = Population totale (habitants) / Superficie totale (km²)',
        explanation: 'En Côte d\'Ivoire : Superficie = 322 462 km².',
        unitOrCondition: 'hab/km²'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Traiter une question d\'histoire à l\'examen',
        procedure: '1. Définir le cadre spatio-temporel (ex : Côte d\'Ivoire entre 1893 et 1915).\n2. Citer les acteurs clés et les dates précises (Samory Touré, Gabriel Angoulvant, 1898, 1910).\n3. Analyser les motivations des résistances et expliquer les raisons de leur échec (supériorité d\'armement européen, manque d\'unité interethnique).',
        tip: 'Ne pas se contenter d\'une simple liste : expliquer les causes et conséquences.'
      },
      {
        stepNumber: 2,
        title: 'Commenter un document ou graphique statistique de géographie',
        procedure: '1. Présenter le document (nature, titre, source, date).\n2. Décrire les tendances majeures (hausse, baisse, stagnation, répartition spatiale).\n3. Expliquer les facteurs explicatifs économiques ou climatiques.',
        tip: 'Citer des chiffres précis tirés du document pour justifier chaque observation.'
      }
    ],
    examples: [
      {
        statement: 'Explique pourquoi la résistance armée de Samory Touré a finalement échoué en 1898.',
        solution: 'La résistance de Samory Touré a échoué en raison de plusieurs facteurs conjugués : la supériorité technique et militaire des armes à feu de l\'armée coloniale française (fusils à répétition, canons), l\'épuisement économique de ses troupes après de longues années d\'itinérance et de guerre, la famine provoquée par la tactique de la terre brûlée, et l\'hostilité de certaines populations locales éprouvées par les combats.'
      }
    ],
    exercises: [
      {
        question: 'Calcule la densité moyenne de la population de la Côte d\'Ivoire pour une population estimée à 29 380 000 habitants et une superficie de 322 462 km².',
        correction: 'Densité = Population / Superficie = 29 380 000 / 322 462 ≈ 91,11 habitants/km².'
      }
    ],
    evaluationSituation: {
      context: 'À l\'occasion de la Journée Nationale de la Paix en Côte d\'Ivoire, un groupe d\'élèves de 3ème débat sur l\'héritage économique du pays. Certains soutiennent que l\'économie ivoirienne repose exclusivement sur le cacao, tandis que d\'autres rappellent la diversification agricole et industrielle récente.',
      instructions: [
        '1. Rappelle le rôle historique du binôme café-cacao dans le développement ivoirien.',
        '2. Nomme trois nouvelles spéculations agricoles qui font la force de l\'agriculture ivoirienne.',
        '3. Propose deux solutions durables pour transformer localement les matières premières.'
      ],
      solutionGuide: '1. Le binôme café-cacao a constitué le moteur du "miracle ivoirien" des années 1960-1980, finançant les infrastructures routières, les écoles, universités et l\'urbanisation du pays.\n2. Trois spéculations majeures diversifiées : l\'anacarde (noix de cajou), l\'hévéa (caoutchouc naturel) et le palmier à huile.\n3. Solutions durables de transformation locale : (a) création d\'usines de broyage et de chocolaterie industrielle locale pour capter la valeur ajoutée, (b) incitations fiscales et formation technique des jeunes diplômés ivoiriens aux métiers de l\'agro-industrie.'
    },
    examTraps: [
      'Confondre la date de création de la colonie de Côte d\'Ivoire (10 mars 1893) avec celle de l\'indépendance (7 août 1960).',
      'Oublier que la loi abolissant le travail forcé a été portée par Félix Houphouët-Boigny le 11 avril 1946.'
    ],
    quickMemo: 'Résistances : Samory Touré (capturé 1898), révolte Abbey (1910), pacification Angoulvant. Géo : Superficie 322 462 km², 1er producteur mondial de cacao et d\'anacarde.',
    keywords: ['histoire 3e', 'géographie 3e', 'BEPC', 'Samory Touré', 'Angoulvant', 'cacao', 'anacarde', 'densité', 'Côte d\'Ivoire']
  },

  // ==========================================
  // 6E - 3E : EDHC (ÉDUCATION AUX DROITS DE L'HOMME ET À LA CITOYENNETÉ)
  // ==========================================
  {
    id: 'edhc-college-droits-civisme-environnement',
    discipline: 'edhc',
    disciplineLabel: 'EDHC (Collège / BEPC)',
    level: '3e',
    levelLabel: 'Collège (6e, 5e, 4e, 3e BEPC)',
    chapter: 'Droits de l\'Homme, Droits de l\'Enfant, Démocratie, Civisme fiscal & Environnement',
    lessonTitle: 'Protection des droits fondamentaux, préservation des biens publics, civisme fiscal et lutte contre les fléaux sociaux',
    objectifs: [
      'Connaître les droits et devoirs de l\'enfant selon la CIDE (Convention Internationale des Droits de l\'Enfant)',
      'Expliquer l\'importance du civisme, du respect des symboles de la République et du paiement de l\'impôt',
      'Identifier les mécanismes de prévention des grossesses précoces en milieu scolaire et des IST/VIH',
      'Adopter des comportements éco-citoyens pour protéger le cadre de vie et lutter contre la déforestation et les déchets plastiques'
    ],
    fullCourseContent: `1. Droits et Devoirs de l'Enfant :
- Droits fondamentaux de l'enfant (CIDE) : Droit à la vie, droit à un nom et à une nationalité, droit à l'éducation, droit à la santé, droit à la protection contre toutes formes de violences, d'abus et d'exploitation économique (travail des enfants dans les plantations).
- Devoirs de l'enfant : Respecter ses parents, ses enseignants et ses aînés, respecter les règles de vie scolaire, travailler assidûment et protéger les biens publics.

2. Les Symboles de la République de Côte d'Ivoire :
- L'Emblème national : Le drapeau tricolore Orange - Blanc - Vert disposé en bandes verticales égales (Orange = splendeur nationale et savane du Nord ; Blanc = paix, pureté et concorde ; Vert = espérance et forêt du Sud).
- L'Hymne national : L'Abidjanaise (attitude de respect absolu au garde-à-vous lors de la montée des couleurs).
- La Devise nationale : « Union - Discipline - Travail ».
- Les Armoiries de la République : L'éléphant d'argent surmonté d'un soleil levant et entouré de deux palmiers.

3. Civisme Fiscal et Protection des Biens Publics :
- Le Civisme fiscal : L'impôt est une contribution financière obligatoire versée par les citoyens et les entreprises à l'État sans contrepartie directe. Il permet de financer les services publics : hôpitaux, écoles, universités, routes, adduction d'eau potable et sécurité.
- Préservation des biens publics : Respect des infrastructures scolaires (tables-bancs, éclairage, sanitaires, laboratoires).

4. Santé et Fléaux Sociaux en Milieu Scolaire :
- Grossesses précoces en milieu scolaire : Conséquences graves (abandon des études, risques obstétricaux vitaux pour la jeune fille). Moyens de prévention : Abstinence, éducation à la sexualité responsable, sensibilisation communautaire.
- Cohésion sociale et culture de la paix : Tolérance, rejet du tribalisme, règlement pacifique des conflits par le dialogue.`,
    definitions: [
      {
        term: 'Civisme',
        definition: 'Attachement sincère et respectueux du citoyen envers sa patrie, ses institutions, les lois et le bien commun.'
      },
      {
        term: 'Impôt',
        definition: 'Prélèvement obligatoire effectué par la puissance publique sur les ressources des personnes physiques et morales pour subvenir aux dépenses d\'intérêt général.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de respect des symboles républicains',
        statement: 'Lors de la montée ou descente du drapeau national ou de l\'exécution de l\'hymne national, tout citoyen doit s\'arrêter, se tenir droit au garde-à-vous et garder le silence.'
      }
    ],
    formulas: [
      {
        name: 'Équilibre Droits et Devoirs',
        formula: 'Exercice des Droits + Respect strict des Devoirs = Citoyenneté Responsable',
        explanation: 'Il n\'y a pas de droits véritables sans l\'accomplissement de devoirs envers la communauté.',
        unitOrCondition: 'Vie en société'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre une situation problème d\'EDHC',
        procedure: '1. Identifier les droits violés ou le problème citoyen posé (ex : travail d\'un enfant mineur, dégradation d\'un bien public).\n2. Citer les textes de lois ou principes moraux applicables.\n3. Proposer des actions citoyennes concrètes et argumentées de remédiation.',
        tip: 'Toujours fonder sa réponse sur l\'intérêt supérieur de l\'enfant et le respect de la loi.'
      }
    ],
    examples: [
      {
        statement: 'Un adolescent de 12 ans est employé à plein temps pour porter des charges lourdes sur un marché au lieu d\'aller à l\'école. Analyse cette situation au regard de l\'EDHC.',
        solution: 'Cette situation constitue une violation grave de plusieurs droits fondamentaux de l\'enfant : le droit à l\'éducation, le droit à la santé et le droit d\'être protégé contre l\'exploitation économique et les travaux dangereux (interdits par la CIDE et le Code du Travail ivoirien). Les parents et l\'employeur sont passibles de poursuites légales.'
      }
    ],
    exercises: [
      {
        question: 'Cite la devise de la Côte d\'Ivoire et explique la signification de chacun des trois termes.',
        correction: 'La devise est « Union - Discipline - Travail ».\n1. Union : Fraternité et solidarité entre tous les Ivoiriens sans distinction d\'ethnie ou de religion.\n2. Discipline : Respect scrupuleux des lois de la République, de l\'ordre et de l\'éthique.\n3. Travail : Effort individuel et collectif pour le progrès économique et social de la nation.'
      }
    ],
    evaluationSituation: {
      context: 'Dans un quartier de Daloa, des habitants jettent leurs ordures ménagères dans les caniveaux d\'évacuation des eaux pluviales. Pendant la saison des pluies, les caniveaux bouchés provoquent des inondations et favorisent la prolifération des moustiques vecteurs du paludisme.',
      instructions: [
        '1. Identifie le comportement incivique décrit.',
        '2. Analyse les conséquences sanitaires et environnementales pour la communauté.',
        '3. Propose trois actions concrètes que le club environnement du collège peut mener pour assainir le quartier.'
      ],
      solutionGuide: '1. Comportement incivique : Dépôt sauvage d\'ordures et obstruction des ouvrages publics d\'assainissement.\n2. Conséquences : Inondations, dégradation de la voirie, eaux stagnantes générant des gîtes larvaires de moustiques (recrudescence du paludisme) et risques de maladies hydriques (choléra, diarrhées).\n3. Trois actions concrètes : (a) Organisation d\'une journée citoyenne de curage des caniveaux et de salubrité ("Opération Grand Ménage"), (b) Campagne de sensibilisation porte-à-porte sur la gestion des déchets, (c) Plaidoyer auprès de la mairie pour l\'installation de bacs à ordures collectifs.'
    },
    examTraps: [
      'Inverser l\'ordre des couleurs du drapeau ivoirien (c\'est Orange-Blanc-Vert, et non Vert-Blanc-Orange qui est le drapeau irlandais).',
      'Considérer que l\'impôt est une sanction plutôt qu\'un acte civique de participation aux charges publiques.'
    ],
    quickMemo: 'Devise : Union - Discipline - Travail. Drapeau : Orange-Blanc-Vert. Impôt = financement des hôpitaux et écoles. Droits de l\'enfant = éducation, santé, protection.',
    keywords: ['EDHC', 'droits de l\'enfant', 'civisme', 'impôt', 'symboles de la République', 'Union Discipline Travail', 'grossesses en milieu scolaire', 'environnement']
  },

  // ==========================================
  // COLLÈGE (6E - 3E) : ANGLAIS (DPFC / MENA)
  // ==========================================
  {
    id: 'anglais-college-grammar-tenses-writing',
    discipline: 'anglais',
    disciplineLabel: 'Anglais (Collège / BEPC)',
    level: '3e',
    levelLabel: 'Collège (6e, 5e, 4e, 3e BEPC)',
    chapter: 'Grammar Mastery, Tenses, Reading Comprehension & Guided Writing',
    lessonTitle: 'Tenses (Present, Past, Future, Present Perfect), Modals, and BEPC Writing Methodology',
    objectifs: [
      'Master the basic English tenses: Simple Present, Present Continuous, Simple Past (regular and irregular verbs), Present Perfect, and Simple Future',
      'Use modal auxiliaries appropriately (can, must, should, may, have to)',
      'Apply effective reading comprehension techniques (skimming, scanning, true/false with justification)',
      'Produce a well-structured BEPC guided essay (letter, article, or narrative composition) of 80-120 words'
    ],
    fullCourseContent: `1. Core English Tenses for Collège & BEPC:
- Simple Present: Used for habits, routines, and general truths.
  * Affirmative: He/She/It + Verb-s/es (ex: Kouassi lives in Yamoussoukro).
  * Negative: do not / does not + base verb.
  * Interrogative: Do / Does + Subject + base verb?
- Present Continuous (be + V-ing): Used for an action happening right now or future arrangements (ex: The students are writing their test).
- Simple Past: Used for completed actions in the past at a specific time (yesterday, last year, in 2020, ago).
  * Regular verbs: Verb + -ed (worked, played, studied).
  * Irregular verbs: Must be memorized (go -> went, see -> saw, buy -> bought, have -> had, take -> took, write -> wrote, be -> was/were).
  * Negative: did not + base verb (ex: He did not go to school).
- Present Perfect (have/has + Past Participle): Links past action with present consequence or unspecified time (since, for, already, yet, just, ever).
  * Ex: Aminata has lived in Abidjan for five years.
  * Distinction: 'Since' + starting point (since 2018) vs 'For' + duration (for 3 days).
- Simple Future (will + base verb): Future decisions and predictions (ex: We will pass our BEPC exam).

2. Modal Auxiliaries:
- Can / Cannot: Ability or permission.
- Must / Must not (Mustn't): Obligation / Prohibition.
- Should / Shouldn't: Advice or recommendation.
- May: Possibility or polite permission.

3. BEPC Guided Writing Format:
- Formal / Informal Letter or Article:
  * Address & Date (Top right).
  * Greeting (Dear Friend, Dear Sir/Madam).
  * Introduction: State the purpose of writing.
  * Body: Answer all the prompts/guidelines provided in the question.
  * Conclusion: Polite closing sentence.
  * Sign-off (Yours sincerely, Best regards, Yours faithfully).`,
    definitions: [
      {
        term: 'Irregular Verb',
        definition: 'A verb whose past simple and past participle forms do not follow the standard -ed addition rule (e.g., eat / ate / eaten).'
      },
      {
        term: 'Past Participle',
        definition: 'The verb form used with the auxiliary "have" in perfect tenses (e.g., done, seen, written) and in the passive voice.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Third person singular rule (Simple Present)',
        statement: 'In the simple present affirmative, always add -s or -es to the verb when the subject is He, She, or It.'
      },
      {
        name: 'The "Since vs For" Rule',
        statement: 'Use SINCE for a specific starting point in time (since Monday, since 2015). Use FOR for a duration/period of time (for two hours, for ten years).'
      }
    ],
    formulas: [
      {
        name: 'Present Perfect structure',
        formula: 'Subject + have / has + Past Participle of the verb',
        explanation: 'has for he/she/it, have for I/you/we/they.',
        unitOrCondition: 'Indicates past action relevant to the present'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mastering the BEPC Reading Comprehension True/False Questions',
        procedure: '1. Read the statement carefully.\n2. Locate the corresponding line in the text.\n3. Write "True" or "False" clearly.\n4. Quote the EXACT sentence or clause from the text as justification: "Line X: ...".',
        tip: 'Never write your own words in the justification; copy the exact quote from the text.'
      },
      {
        stepNumber: 2,
        title: 'Writing a 100-word BEPC Guided Essay',
        procedure: '1. Read all prompts.\n2. Write one complete paragraph for each prompt.\n3. Use link words: First, Moreover, Furthermore, In addition, Finally.\n4. Check verb tenses, subject-verb agreement, and spelling.',
        tip: 'Make sure you address all required bullet points in the instructions.'
      }
    ],
    examples: [
      {
        statement: 'Fill in the blanks with SINCE or FOR: \n1. Koffi has played football ... two hours.\n2. Fatou has attended this school ... 2021.',
        solution: '1. for (two hours is a duration).\n2. since (2021 is a specific starting point).'
      }
    ],
    exercises: [
      {
        question: 'Put the verbs in brackets into the correct tense:\n1. Yesterday, we (to visit) the Basilica in Yamoussoukro.\n2. Every morning, my sister (to wash) the dishes.\n3. Look! The children (to cross) the street.',
        correction: '1. visited (Simple Past with "yesterday").\n2. washes (Simple Present with "every morning", 3rd person singular).\n3. are crossing (Present Continuous with "Look!").'
      }
    ],
    evaluationSituation: {
      context: 'You have a penfriend in London who wants to know about your school in Côte d\'Ivoire and your favorite subjects.',
      instructions: [
        'Write a letter to your penfriend (80-100 words) in which you:',
        '1. Introduce yourself and your school (name, town).',
        '2. Mention your favorite subjects and explain why you like them.',
        '3. Ask your friend about his/her school life in England.'
      ],
      solutionGuide: 'Sample Grade-A BEPC Letter:\n\nAbidjan, May 15th, 2026\n\nDear John,\n\nI hope you are doing well. I am writing to tell you about my school life in Côte d\'Ivoire.\n\nI am a third-form student at Lycée Moderne de Cocody in Abidjan. Our school is very big and beautiful. My favorite subjects are English and Mathematics because they are fascinating. English helps me communicate with friends around the world, and Mathematics develops my logical thinking.\n\nWhat about your school in London? Which subjects do you enjoy the most? I look forward to reading from you soon.\n\nBest regards,\nKouamé.'
    },
    examTraps: [
      'Forgetting the -s on the 3rd person singular in the Simple Present (e.g., writing "He work" instead of "He works").',
      'Using the simple past after "did not" (e.g., writing "He didn\'t went" instead of "He didn\'t go").'
    ],
    quickMemo: 'Past simple: yesterday/ago -> V-ed or irregular. Present continuous: now/look -> be + V-ing. Since = date, For = duration. Did not + base verb.',
    keywords: ['Anglais collège', 'BEPC anglais', 'irregular verbs', 'present perfect', 'since for', 'guided writing', 'modal verbs']
  }
];
