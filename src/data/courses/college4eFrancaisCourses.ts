import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_4E_FRANCAIS_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 4ÈME - EXPRESSION ÉCRITE : LEÇON 1 - LE TEXTE EXPLICATIF
  // ========================================================
  {
    id: 'fra-4e-texte-explicatif-naturel-culturel',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Expression Écrite : Le Texte explicatif',
    lessonTitle: 'Rédaction d\'un texte explicatif : Phénomènes naturels, faits de société et pratiques socioculturelles',
    objectifs: [
      'Identifier la visée informative et explicative d\'un texte explicatif (répondre à "Pourquoi ?" et "Comment ?")',
      'Maîtriser les caractéristiques linguistiques : lexique spécialisé/technique, formules explicatives ("c\'est-à-dire", "en d\'autres termes"), connecteurs logiques et chronologiques',
      'Employer les temps appropriés (présent de vérité générale) et la ponctuation explicative (deux-points, parenthèses, tirets)',
      'Structurer méthodiquement la rédaction : Introduction (présentation et questionnement), Développement (causes, étapes du mécanisme, conséquences) et Conclusion (bilan et ouverture)',
      'Rédiger un texte explicatif portant sur un phénomène naturel (germination, inondation, éclipse) ou un fait socioculturel (fête des masques, mariage traditionnel)'
    ],
    fullCourseContent: `1. Définition et Visée du texte explicatif :
- Définition : Le texte explicatif est un type de texte dont l'objectif est d'éclairer le lecteur sur un phénomène, un fait ou un événement en fournissant des explications rationnelles, claires et objectives.
- Visée : Il cherche à répondre aux questions fondamentales : Pourquoi cela se produit-il ? Comment cela fonctionne-t-il ?

2. Caractéristiques formelles et linguistiques :
- Temps verbal dominant : Le présent de l'indicatif à valeur de vérité générale (faits permanents, lois scientifiques).
- Vocabulaire et lexique :
  * Présence d'un lexique spécialisé ou technique adapté au sujet (ex : pour la germination : radicule, cotylédons, humidité, plantule).
  * Expressions et locutions explicatives : "c'est-à-dire", "en d'autres termes", "autrement dit", "cela signifie que", "ce qui veut dire".
- Connecteurs logiques et chronologiques :
  * D'organisation / succession : d'abord, premièrement, puis, ensuite, par la suite, enfin.
  * De cause : parce que, car, en effet, étant donné que, grâce à.
  * De conséquence : par conséquent, c'est pourquoi, ainsi, de sorte que.
- Ponctuation explicative :
  * Les deux-points (:) pour introduire une précision, une cause ou une énumération.
  * Les parenthèses () ou tirets doubles (-- --) pour insérer une définition ou un synonyme.
- Syntaxe : Utilisation de propositions subordonnées relatives explicatives (entre virgules).

3. Structure et Organisation de la rédaction :
- Introduction (en un seul paragraphe) :
  * Présentation / définition générale du sujet ou phénomène.
  * Constat ou intérêt du sujet dans la vie quotidienne.
  * Problématique explicative (formulation de la question : Comment se déroule ce processus ?).
- Développement (organisé en 2 ou 3 paragraphes logiques) :
  * Paragraphe 1 : Les causes ou conditions préalables indispensables.
  * Paragraphe 2 : Le déroulement chronologique ou mécanique détaillé des étapes.
  * Paragraphe 3 : Les conséquences, résultats observés ou impacts.
- Conclusion (en un paragraphe) :
  * Bilan synthétique des explications fournies.
  * Ouverture ou recommandation pratique (conseils aux populations, intérêt écologique ou culturel).`,
    definitions: [
      {
        term: 'Texte explicatif',
        definition: 'Texte didactique visant à faire comprendre un fait ou un processus en analysant ses causes et son fonctionnement de façon objective.'
      },
      {
        term: 'Présent de vérité générale',
        definition: 'Emploi du présent de l\'indicatif pour exprimer une vérité universelle, une loi de la nature ou un fait permanent.'
      },
      {
        term: 'Connecteur logique',
        definition: 'Mot ou locution établissant un lien de sens (cause, conséquence, chronologie) entre les phrases ou paragraphes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Neutralité du scripteur',
        statement: 'Dans un texte explicatif, l\'auteur doit rester neutre et objectif : il n\'exprime pas ses sentiments personnels et n\'utilise pas la première personne (je/nous).'
      },
      {
        name: 'Règle de progression explicative',
        statement: 'Chaque paragraphe du développement doit expliciter une étape distincte introduite par un connecteur d\'étape ou de cause.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Rédiger une explication de phénomène naturel (ex: Inondation)',
        procedure: '1. Introduction : Définir l\'inondation comme une montée des eaux submergeant les terres habitées et poser la question des causes.\n2. Paragraphe 1 (Causes) : Expliquer les pluies torrentielles et l\'obstruction des caniveaux par les ordures ménagères.\n3. Paragraphe 2 (Mécanisme) : Décrire le débordement des caniveaux et l\'envahissement progressif des cours et concessions.\n4. Conclusion : Résumer les causes et inviter les citoyens au curage régulier des caniveaux.',
        tip: 'Employer des locutions explicatives : "en effet", "c\'est-à-dire", "par conséquent".'
      }
    ],
    examples: [
      {
        statement: 'Donne un exemple de phrase explicative comportant les deux-points et une subordonnée relative explicative.',
        solution: '"La germination commence par une étape capitale : l\'imbibition de la graine, qui gonfle sous l\'action de l\'eau."'
      }
    ],
    exercises: [
      {
        question: 'Parmi les phrases suivantes, relève celle qui a une visée explicative : A. "Ce film était passionnant !" B. "L\'éclipse solaire se produit lorsque la Lune s\'interpose exactement entre le Soleil et la Terre."',
        correction: 'La phrase B a une visée explicative car elle apporte une explication rationnelle et objective sur le mécanisme astronomique d\'un phénomène.'
      }
    ],
    evaluationSituation: {
      context: 'À chaque saison des pluies, le grand marché de Bloléquin est inondé, causant des dégâts matériels considérables. Le club environnement de ton collège te charge de rédiger un texte explicatif destiné au journal mural pour expliquer les causes et le déroulement de ce fléau.',
      instructions: [
        '1. Définis l\'inondation dans ton introduction.',
        '2. Dans un développement ordonné, explique deux causes majeures (naturelle et humaine) avec des connecteurs logiques.',
        '3. Conclus en proposant une solution citoyenne durable.'
      ],
      solutionGuide: '1. Introduction : L\'inondation est la submersion temporaire par l\'eau de zones habituellement sèches. Pourquoi le marché de Bloléquin est-il si vulnérable ?\n2. Développement : D\'abord, sur le plan naturel, les précipitations abondantes saturent le sol. Ensuite, sur le plan humain, l\'incivisme des commerçants qui jettent des sachets plastiques bouche les caniveaux d\'évacuation. Par conséquent, l\'eau ne pouvant s\'écouler envahit les magasins.\n3. Conclusion : En somme, les inondations résultent de la combinaison des fortes pluies et du manque de salubrité. Le curage régulier et l\'interdiction des dépôts sauvages s\'imposent.'
    },
    examTraps: [
      'Confondre texte explicatif (qui explique le fonctionnement objectif) et texte argumentatif (qui cherche à convaincre ou défendre une opinion).',
      'Utiliser le pronom "je" ou donner son sentiment intime au lieu de rester neutre.'
    ],
    quickMemo: 'Texte explicatif = Pourquoi / Comment. Présent de vérité générale. Connecteurs (d\'abord, ensuite, car, ainsi). Neutralité absolue.',
    keywords: ['texte explicatif', 'expression ecrite 4e', 'causes et consequences', 'lexique specialise', 'connecteurs logiques', 'francais 4e']
  },

  // ========================================================
  // 4ÈME - EXPRESSION ÉCRITE : LEÇON 2 - LE RÉSUMÉ DE TEXTE INFORMATIF
  // ========================================================
  {
    id: 'fra-4e-resume-texte-informatif-tiers',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Expression Écrite : Le Résumé de texte informatif',
    lessonTitle: 'Méthodologie du résumé au tiers (1/3 ± 10%) : Sélection des idées directrices et reformulation personnelle',
    objectifs: [
      'Comprendre les exigences méthodologiques officielles du résumé de texte en classe de 4ème',
      'Calculer la longueur requise : Nombre de mots divisé par 3 avec une marge de tolérance de ± 10%',
      'Sélectionner les idées essentielles et supprimer les éléments secondaires (exemples, citations, répétitions, digressions)',
      'Conserver le système d\'énonciation, l\'ordre chronologique et les liens logiques du texte initial',
      'Reformuler les idées avec ses propres mots sans plagiat ni contresens, et décompter précisément les mots'
    ],
    fullCourseContent: `1. Principes et Définition du Résumé :
- Définition : Résumer un texte informatif consiste à réduire un texte à environ un tiers (1/3) de sa longueur initiale en ne retenant que l'essentiel de son contenu informationnel.
- Règle mathématique du tiers :
  * Longueur demandée = (Nombre de mots du texte d'origine) / 3.
  * Marge de tolérance autorisée : ± 10%.
  * Exemple : Pour un texte de 240 mots, la cible est 80 mots. La marge de ± 10% (8 mots) autorise une rédaction comprise entre 72 et 88 mots.

2. Ce qu'il faut rigoureusement respecter :
- Respecter l'ordre des idées : Ne pas bouleverser le plan et la chronologie du texte d'origine.
- Respecter le système d'énonciation : Conserver les mêmes personnes grammaticales et les mêmes temps sans intervenir soi-même.
- Neutralité absolue : Ne jamais donner son propre avis, ne pas porter de jugement de valeur, ne pas utiliser d'expressions telles que "L'auteur dit que" ou "Le texte montre que".
- Reformulation personnelle : Remplacer les tournures de l'auteur par des mots synonymes ou des constructions plus denses sans recopier les phrases originales (bannir le plagiat).

3. Ce qu'il faut supprimer (Élimination des éléments secondaires) :
- Les exemples illustratifs et anecdotes.
- Les citations entre guillemets et les paroles rapportées au discours direct.
- Les répétitions, reformulations redondantes et périphrases.
- Les énumérations longues (les remplacer par un terme générique ou englobant : "mangues, bananes, ananas" -> "fruits").
- Les digressions et détails descriptifs superflus.

4. Présentation matérielle et Décompte des mots :
- Le résumé ne comporte ni titre, ni sous-titre, ni annonce de plan.
- Il est rédigé en un nombre restreint de paragraphes continus reflétant les grandes unités de sens.
- Décompte des mots à mentionner obligatoirement au bas de la copie :
  * Règle de comptage : Tout mot ou groupe de lettres isolé par deux espaces ou par un signe de ponctuation compte pour un mot.
  * Mots avec apostrophe : "l'enfant" = 2 mots ("l'" et "enfant") ; "d'accord" = 2 mots ; "qu'il" = 2 mots.
  * Mots composés avec trait d'union : "c'est-à-dire" = 4 mots ; "socio-économique" = 2 mots ; "arc-en-ciel" = 3 mots ; "au-dessus" = 2 mots.
  * Les nombres écrits en chiffres comptent pour un mot (ex : "1960" = 1 mot).`,
    definitions: [
      {
        term: 'Résumé de texte',
        definition: 'Exercice de synthèse consistant à reformuler fidèlement et brièvement les idées fondamentales d\'un texte à une échelle définie (généralement 1/3).'
      },
      {
        term: 'Marge de tolérance (± 10%)',
        definition: 'Intervalle de mots accordé autour de la longueur cible (ex : 80 mots ± 8 mots = entre 72 et 88 mots).'
      },
      {
        term: 'Terme générique',
        definition: 'Mot de sens large permettant de résumer une énumération d\'objets ou d\'espèces particulières.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Interdiction de commenter',
        statement: 'Le résumé n\'est pas un commentaire : il est strictement interdit d\'écrire "Selon l\'auteur" ou d\'exprimer une opinion personnelle.'
      },
      {
        name: 'Règle d\'élimination',
        statement: 'Les exemples particuliers, les chiffres anecdotiques et les répétitions sont systématiquement éliminés.'
      }
    ],
    formulas: [
      {
        name: 'Longueur cible du résumé',
        formula: 'Nombre cible = Nombre initial / 3  (Marge = ± 10%)',
        explanation: 'Indiquer le nombre exact de mots à la fin du devoir.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Les 4 étapes pour réussir un résumé',
        procedure: '1. Lire attentivement le texte deux fois pour en dégager l\'idée générale.\n2. Découper le texte en paragraphes et souligner l\'idée essentielle de chaque paragraphe au brouillon.\n3. Rayer au crayon tous les exemples, citations et répétitions.\n4. Reformuler les idées maîtresses en les reliant par des connecteurs logiques concis, puis compter les mots.',
        tip: 'Remplacer les phrases complexes par des phrases simples coordonnées pour gagner des mots.'
      }
    ],
    examples: [
      {
        statement: 'Comment résumer cette phrase : "Sur le marché de Man, les femmes vendent des carottes, des choux, des tomates, des oignons et des piments" ?',
        solution: 'Remplacement par un terme générique : "Au marché de Man, les commerçantes écoulent divers légumes."'
      }
    ],
    exercises: [
      {
        question: 'Un texte comprend 270 mots. Dans quel intervalle de mots son résumé au tiers doit-il impérativement se situer ?',
        correction: 'Longueur cible = 270 / 3 = 90 mots. La marge de ± 10% est de 9 mots (90 × 0,10 = 9). Le résumé doit donc compter entre 81 et 99 mots.'
      }
    ],
    evaluationSituation: {
      context: 'Dans le cadre du cours de Français, le professeur distribue un texte documentaire de 180 mots sur "La déforestation en Côte d\'Ivoire". Les élèves doivent le résumer au tiers.',
      instructions: [
        '1. Calcule la longueur cible et les bornes minimale et maximale admises.',
        '2. Énonce deux éléments du texte qu\'il faut obligatoirement supprimer.',
        '3. Précise l\'erreur majeure à ne jamais commettre concernant le point de vue du résumeur.'
      ],
      solutionGuide: '1. Longueur cible = 180 / 3 = 60 mots. Marge de 10% = 6 mots. Intervalle accepté = entre 54 et 66 mots.\n2. Il faut supprimer les exemples illustratifs et les chiffres ou citations superflus.\n3. L\'erreur fatale est d\'intervenir personnellement en donnant son avis ou en utilisant des formules telles que "L\'auteur démontre que" : le résumeur doit s\'effacer complètement.'
    },
    examTraps: [
      'Recopier des phrases entières du texte (plagiat lourdement sanctionné).',
      'Oublier de compter et d\'inscrire le nombre de mots à la fin du devoir.',
      'Dépasser la marge de tolérance de ± 10%.'
    ],
    quickMemo: 'Résumé = Texte / 3 ± 10%. Pas d\'exemples, pas de citations. Reformulation personnelle. Zéro commentaire.',
    keywords: ['resume de texte', 'tiers du texte', 'expression ecrite 4e', 'selection idees cles', 'terme generique', 'francais 4e']
  },

  // ========================================================
  // 4ÈME - EXPRESSION ÉCRITE : LEÇON 3 - LE COMPTE RENDU DE RÉUNION
  // ========================================================
  {
    id: 'fra-4e-compte-rendu-reunion',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Expression Écrite : Le Compte rendu de réunion',
    lessonTitle: 'Rédaction d\'un compte rendu administratif : Structure, ordre du jour et synthèse des délibérations',
    objectifs: [
      'Définir le compte rendu de réunion comme document administratif servant de mémoire écrite officielle',
      'Maîtriser les composantes obligatoires de l\'en-tête (date, lieu, heure, intitulé de la réunion, nom de l\'organisme)',
      'Mentionner la composition de la séance (président de séance, secrétaire/rapporteur, membres présents et excusés)',
      'Définir et énoncer clairement l\'ordre du jour (liste des points examinés)',
      'Résumer fidèlement les délibérations et décisions prises sans parti pris ni retranscription intégrale des débats',
      'Rédiger la formule de levée de séance et apposer la signature du rapporteur'
    ],
    fullCourseContent: `1. Définition et Utilité du compte rendu de réunion :
- Définition : Le compte rendu de réunion est un document écrit administratif et fonctionnel qui rapporte de manière concise, fidèle et objective le déroulement d'une séance de travail ainsi que les résolutions prises.
- Utilité : Il sert de trace écrite officielle, informe les membres absents et engage la responsabilité du groupe pour les actions à mener.

2. Structure matérielle et formelle du compte rendu :
Un compte rendu normé comporte obligatoirement 5 grandes parties :
- Partie 1 : L'En-tête et les coordonnées :
  * Nom de la structure ou de l'association (ex : Club d'Anglais du Lycée Municipal de Bloléquin).
  * Date, lieu exact et heure de commencement de la réunion.
  * Intitulé centré en lettres majuscules : "COMPTE RENDU DE LA RÉUNION DU..."
- Partie 2 : La composition de l'assemblée :
  * Le Président de séance (qui dirige et donne la parole).
  * Le Secrétaire ou Rapporteur de séance (qui prend les notes et rédige le document).
  * La liste des membres présents.
  * La liste des membres excusés ou absents.
- Partie 3 : L'Ordre du jour :
  * C'est la liste ordonnée des points soumis à discussion (ex : 1. Bilan financier ; 2. Préparation de la journée culturelle ; 3. Divers).
- Partie 4 : Le Déroulement des travaux (Délibérations) :
  * Traitement successif de chaque point de l'ordre du jour.
  * Résumé concis des arguments échangés.
  * Mentions des décisions finales adoptées (par vote ou consensus).
  * Attention : On ne retranscrit jamais les polémiques inutiles ou les querelles de personnes.
- Partie 5 : La Clôture et Validation :
  * Heure de fin des travaux formulée ainsi : "L'ordre du jour étant épuisé, la séance est levée à [Heure]".
  * Mention de la date de la prochaine rencontre si elle a été fixée.
  * Nom, qualité et signature officielle du rapporteur de séance (et éventuellement contreseing du président).

3. Caractéristiques d'écriture :
- Ton neutre, sobre, précis et impersonnel.
- Formulations administratives consacrées : "Le président ouvre la séance à...", "Prenant la parole, le trésorier expose...", "Après débats, l'assemblée décide à l'unanimité de...", "Au titre des divers...".`,
    definitions: [
      {
        term: 'Compte rendu de réunion',
        definition: 'Document officiel récapitulant les discussions, votes et décisions adoptés lors d\'une assemblée.'
      },
      {
        term: 'Ordre du jour',
        definition: 'Liste ordonnée des sujets inscrits au programme de travail d\'une réunion.'
      },
      {
        term: 'Rapporteur de séance',
        definition: 'Personne désignée pour consigner par écrit les échanges et rédiger le document final.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe d\'objectivité',
        statement: 'Le rapporteur ne doit exprimer aucune opinion personnelle : il rend compte uniquement des faits et des décisions du groupe.'
      },
      {
        name: 'Clôture obligatoire',
        statement: 'Tout compte rendu se termine impérativement par la mention de la levée de séance et la signature de son rédacteur.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Plan-type d\'un compte rendu',
        procedure: '1. Noter l\'en-tête (date, lieu, heure, club/classe).\n2. Indiquer le Président et le Rapporteur, puis les présences.\n3. Écrire clairement les points de l\'Ordre du jour.\n4. Rédiger un paragraphe par point examiné en soulignant la décision prise.\n5. Clore par la formule : "L\'ordre du jour étant épuisé, la séance a été levée à ... h ...", suivie de la signature.',
        tip: 'Toujours mentionner l\'heure de début et l\'heure de fin de la réunion.'
      }
    ],
    examples: [
      {
        statement: 'Rédige la formule type de clôture d\'une réunion tenue à 17h30 par le club littéraire.',
        solution: '"L\'ordre du jour étant entièrement épuisé et plus personne ne demandant la parole, le président lève la séance à 17 heures 30 minutes.\nLe Rapporteur,\n[Nom et Signature]"'
      }
    ],
    exercises: [
      {
        question: 'Quels sont les deux rôles clés qui dirigent et rédigent une réunion ?',
        correction: 'Le Président de séance (qui anime et distribue la parole) et le Rapporteur / Secrétaire de séance (qui prend les notes et rédige le compte rendu).'
      }
    ],
    evaluationSituation: {
      context: 'Tu es le secrétaire du Club Santé du Lycée de Bloléquin. Une réunion s\'est tenue le 15 novembre à 15h sous la présidence de Mlle Coulibaly pour organiser une journée de sensibilisation contre le paludisme. Deux décisions ont été prises : collecte de fonds et achat de produits larvicides. La séance a pris fin à 16h45.',
      instructions: [
        '1. Rédige l\'en-tête complet du compte rendu.',
        '2. Formule les deux points de l\'ordre du jour.',
        '3. Rédige la formule finale de levée de séance avec ta signature.'
      ],
      solutionGuide: '1. En-tête : CLUB SANTÉ DU LYCÉE MUNICIPAL DE BLOLÉQUIN / COMPTE RENDU DE RÉUNION / Date : 15 novembre, Lieu : Salle polyvalente, Heure : 15h00. Présidente : Mlle Coulibaly. Rapporteur : [Nom de l\'élève].\n2. Ordre du jour : 1. Mobilisation des fonds ; 2. Achat de produits larvicides.\n3. Clôture : L\'ordre du jour étant épuisé, la séance est levée à 16h45. Le Rapporteur (Signature).'
    },
    examTraps: [
      'Oublier de mentionner l\'ordre du jour ou l\'heure de levée de séance.',
      'Raconter les querelles ou disputes entre membres au lieu de consigner la décision finale adoptée.'
    ],
    quickMemo: 'Compte rendu = Date/Lieu + Président/Rapporteur + Ordre du jour + Décisions adoptées + Levée de séance + Signature.',
    keywords: ['compte rendu de reunion', 'ordre du jour', 'expression ecrite 4e', 'rapporteur', 'deliberations', 'francais 4e']
  },

  // ========================================================
  // 4ÈME - EXPRESSION ÉCRITE : LEÇON 4 - LE DIALOGUE ARGUMENTATIF
  // ========================================================
  {
    id: 'fra-4e-dialogue-argumentatif',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Expression Écrite : Le Dialogue argumentatif',
    lessonTitle: 'Rédaction d\'un dialogue argumentatif : Confrontation de points de vue, arguments et ponctuation du discours',
    objectifs: [
      'Définir le dialogue argumentatif comme échange de propos où deux ou plusieurs interlocuteurs défendent des thèses opposées',
      'Maîtriser la disposition typographique : guillemets ouvrants et fermants, tirets à chaque changement de réplique, retours à la ligne',
      'Employer les verbes introducteurs de parole variés (répliquer, rétorquer, objecter, insister, concéder) placés en incise',
      'Construire une argumentation solide : thèse, arguments logiques, contre-arguments et exemples concrets dans chaque réplique',
      'Structurer le dialogue : récit-cadre introducteur (cadre spatio-temporel), corps du débat, et conclusion (accord, compromis ou rupture)'
    ],
    fullCourseContent: `1. Définition et Enjeux du dialogue argumentatif :
- Définition : Le dialogue argumentatif met en scène au moins deux personnages qui s'opposent verbalement sur un sujet controversé ou un thème de société (ex : scolarisation des filles, utilisation des téléphones au collège, importance de la lecture).
- Objectif : Chaque locuteur cherche à convaincre ou persuader son vis-à-vis en avançant des arguments fondés étayés par des exemples.

2. Règles typographiques et formelles du dialogue :
- Ouverture et fermeture : Le dialogue s'ouvre par des guillemets («) et se referme par des guillemets (»).
- Changement d'interlocuteur : Chaque prise de parole commence à la ligne par un tiret cadratin (-).
- Propositions incises et verbes de parole :
  * Utilisation de verbes déclaratifs précis indiquant l'attitude de l'interlocuteur : rétorqua-t-il, objecta le directeur, concéda le père, insista Aminata, protesta-t-il.
  * Inversion obligatoire du sujet dans l'incise ("répondit-elle", "ajouta mon père").

3. Organisation d'un devoir de dialogue argumentatif :
- Introduction (Récit-cadre) :
  * Cadre spatio-temporel : Où et quand la scène se déroule-t-elle ?
  * Présentation des protagonistes et de leurs liens.
  * Présentation du motif de la dispute ou du débat.
- Corps du dialogue (Développement argumentatif) :
  * Alternance équilibrée des répliques (3 à 4 répliques par personnage).
  * Structure d'une réplique : Thèse soutenue + Connecteur logique + Argument rationnel + Exemple précis + Réfutation de l'argument adverse.
- Conclusion (Dénouement) :
  * Fin du dialogue et retour à la narration.
  * Résultat de la confrontation : L'un des deux a-t-il convaincu l'autre ? Y a-t-il eu un compromis ou un désaccord persistant ?`,
    definitions: [
      {
        term: 'Dialogue argumentatif',
        definition: 'Échange verbal direct entre personnages défendant des positions contraires à l\'aide d\'arguments.'
      },
      {
        term: 'Proposition incise',
        definition: 'Courte proposition intercalée ou rejetée en fin de réplique indiquant qui parle et sur quel ton (ex: dit-il, répliqua-t-elle).'
      },
      {
        term: 'Contre-argument',
        definition: 'Raisonnement avancé pour contester et neutraliser l\'argument présenté par son adversaire.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Inversion dans l\'incise',
        statement: 'Dans une proposition incise de dialogue, le sujet est obligatoirement inversé (ex : "affirma le professeur" et non "le professeur affirma").'
      },
      {
        name: 'Ponctuation de réplique',
        statement: 'On va à la ligne et on place un tiret à chaque fois que la parole change de personnage.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Bâtir une réplique argumentative',
        procedure: '1. Commencer par marquer son écoute ou son désaccord ("Je comprends ton idée, mais...").\n2. Énoncer un argument fort appuyé sur un connecteur ("En effet, l\'école offre une autonomie financière").\n3. Citer un exemple vivant ("Regarde le cas de Madame la Députée de notre région").\n4. Terminer par une question oratoire ou une relance.',
        tip: 'Varier les verbes de parole : éviter de répéter "dit-il". Utiliser "rétorqua", "renchérit", "objecta".'
      }
    ],
    examples: [
      {
        statement: 'Insère une proposition incise correcte dans cette phrase : « Je refuse de partir »',
        solution: '« Je refuse de partir, répliqua fermement Bakary, car je n\'ai commis aucune faute. »'
      }
    ],
    exercises: [
      {
        question: 'Corrige la ponctuation : Pierre dit : "Je ne suis pas d\'accord". Paul répond : "Moi si".',
        correction: 'Pierre protesta :\n« Je ne suis pas d\'accord !\n- Moi si, rétorqua Paul. »'
      }
    ],
    evaluationSituation: {
      context: 'Au village de Diboké, le vieux Oulai refuse de scolariser sa fille cadette, estimant que la place de la femme est au foyer. Le directeur d\'école vient le trouver pour le convaincre de l\'inscrire en 6ème.',
      instructions: [
        '1. Rédige un court récit introducteur situant la rencontre.',
        '2. Rédige un dialogue comportant au moins deux répliques argumentées de chaque côté.',
        '3. Utilise des propositions incises variées et la ponctuation réglementaire.',
        '4. Conclus par la décision finale du père.'
      ],
      solutionGuide: '1. Introduction : Un après-midi sous l\'apatam, le directeur d\'école rendit visite au patriarche Oulai pour plaider la cause de sa fille.\n2. Dialogue :\n« Doyen Oulai, commença le maître, votre fille est brillante, scolarisez-la.\n- À quoi bon ? répliqua le vieil homme. Les filles finissent toujours par se marier et quitter le village.\n- C\'est une erreur, insista le directeur. Une femme instruite participe au développement de sa communauté et gère mieux sa famille. Voyez l\'exemple de notre sage-femme ! »\n3. Dénouement : Touché par ces arguments, le vieux Oulai promit d\'inscrire sa fille le lendemain matin.'
    },
    examTraps: [
      'Oublier de placer les tirets de répliques à la ligne.',
      'Faire un dialogue purement bavard ou informatif sans arguments (ex: "Bonjour, comment vas-tu ? Bien et toi ?"). Le dialogue DOIT être argumentatif.'
    ],
    quickMemo: 'Dialogue = Récit-cadre -> Répliques avec tirets et incises (dit-il, répliqua-t-elle) -> Arguments + Exemples -> Dénouement.',
    keywords: ['dialogue argumentatif', 'expression ecrite 4e', 'repliques', 'incises', 'guillemets', 'francais 4e']
  },

  // ========================================================
  // 4ÈME - EXPRESSION ÉCRITE : LEÇON 5 - LA LETTRE OFFICIELLE (ADMINISTRATIVE)
  // ========================================================
  {
    id: 'fra-4e-lettre-officielle-administrative',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Expression Écrite : La Lettre officielle',
    lessonTitle: 'Rédaction d\'une lettre administrative : Présentation normée, objet, formules protocolaires et signature',
    objectifs: [
      'Distinguer la lettre officielle (administrative) de la lettre privée/familière',
      'Disposer rigoureusement les mentions obligatoires sur la page (émetteur, lieu et date, destinataire avec formule protocolaire, objet, pièces jointes)',
      'Employer la formule d\'appel adaptée au rang du destinataire (Monsieur le Maire, Monsieur le Préfet, Monsieur le Principal)',
      'Rédiger un corps de lettre concis en style administratif soutenu, poli et précis ("J\'ai l\'honneur de solliciter de votre haute bienveillance...")',
      'Formuler une formule de politesse finale distinguée et apposer la signature'
    ],
    fullCourseContent: `1. Caractéristiques de la lettre officielle :
- Définition : La lettre officielle ou administrative est une correspondance formelle adressée à une autorité administrative (Préfet, Maire, Chef d'établissement, Ministre) pour formuler une demande, transmettre une réclamation ou solliciter un acte officiel.
- Style requis : Registre de langue soutenu, concision, clarté absolue, courtoisie et respect de la hiérarchie.

2. Disposition spatiale normalisée des mentions :
- En haut à gauche : Coordonnées complètes de l'expéditeur / émetteur (Nom, Prénom, classe, établissement, boîte postale, téléphone).
- En haut à droite : Lieu d'expédition et date complète (ex : "Bloléquin, le 12 octobre 2024").
- Plus bas à droite : Titre et fonction du destinataire précédés de la formule "À Monsieur / Madame..." (ex : "À Monsieur le Maire de la commune de Dabou").
- À gauche, sous l'expéditeur :
  * L'Objet : Résumé ultra-court du motif de la lettre (ex : "Objet : Demande d'extrait d'acte de naissance").
  * Les Pièces jointes (P.J.) : Liste des documents annexés (ex : "P.J. : Photocopie du jugement supplétif, timbre fiscal").
- Au centre :
  * Formule d'appel : Répétition du titre protocolaire sans le nom de famille (ex : "Monsieur le Maire," ou "Monsieur le Principal,").
- Corps de la lettre (en 2 ou 3 paragraphes) :
  * Formule d'entrée traditionnelle : "J'ai l'honneur de solliciter de votre haute bienveillance...", "J'ai l'honneur de porter à votre connaissance que...".
  * Exposé précis du problème ou de la demande avec justification.
- Formule de politesse finale :
  * Formule distinguée et respectueuse : "Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération très distinguée." (Ne jamais utiliser "sentiments distingués" envers une haute autorité administrative).
- En bas à droite :
  * Prénom, Nom et Signature manuscrite du scripteur.`,
    definitions: [
      {
        term: 'Lettre administrative',
        definition: 'Écrit officiel obéissant à des règles de présentation strictes, adressé à une autorité ou une institution.'
      },
      {
        term: 'Formule d\'appel',
        definition: 'Titre de civilité ou protocolaire ouvrant la lettre (ex : Monsieur le Directeur, Madame la Ministre).'
      },
      {
        term: 'Objet',
        definition: 'Mention précisant brièvement l\'objet ou le motif de la démarche.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du titre protocolaire',
        statement: 'On ne fait jamais suivre le titre de civilité du nom de famille dans la formule d\'appel (on écrit "Monsieur le Maire," et JAMAIS "Monsieur le Maire Dupont,").'
      },
      {
        name: 'Formule de politesse envers l\'autorité',
        statement: 'Employer l\'expression "l\'assurance de mon profond respect" ou "ma considération distinguée", mais proscrire "mes sentiments amicaux".'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre en page une lettre administrative',
        procedure: '1. Écrire ses coordonnées en haut à gauche.\n2. Inscrire "Lieu, le [date]" en haut à droite.\n3. Positionner le destinataire en dessous à droite ("À Monsieur le...").\n4. Noter "Objet :" à gauche.\n5. Insérer la formule d\'appel au centre.\n6. Rédiger le texte avec "J\'ai l\'honneur de...".\n7. Clore par la formule d\'hommage et signer en bas à droite.',
        tip: 'Toujours répéter le titre dans la formule de politesse finale.'
      }
    ],
    examples: [
      {
        statement: 'Quelle formule de politesse employer pour s\'adresser au Principal du collège ?',
        solution: '"Veuillez agréer, Monsieur le Principal, l\'expression de mon profond respect."'
      }
    ],
    exercises: [
      {
        question: 'Parmi les mentions suivantes, laquelle figure obligatoirement en haut à droite ? A. L\'objet ; B. Le lieu et la date ; C. Les coordonnées de l\'émetteur.',
        correction: 'La mention B : le lieu et la date figurent toujours en haut à droite de la feuille.'
      }
    ],
    evaluationSituation: {
      context: 'Guei Patrick, élève en 4ème 2 au Collège Moderne de Bloléquin, doit constituer son dossier pour un concours scolaire. Il a besoin d\'un extrait d\'acte de naissance auprès de la Mairie de Dabou où il est né.',
      instructions: [
        '1. Écris l\'en-tête complet de sa lettre officielle.',
        '2. Rédige l\'objet et la formule d\'appel appropriée.',
        '3. Rédige le corps de la lettre en deux paragraphes bienveillants.',
        '4. Conclus par la formule de politesse réglementaire et la signature.'
      ],
      solutionGuide: '1. En haut à gauche : Guei Patrick, Collège de Bloléquin. En haut à droite : Bloléquin, le 15 mars 2024. À droite : À Monsieur le Maire de la Commune de Dabou.\n2. Objet : Demande d\'extrait d\'acte de naissance. Formule d\'appel : Monsieur le Maire,\n3. Corps : J\'ai l\'honneur de solliciter de votre bienveillance l\'établissement d\'une copie intégrale de mon acte de naissance. En effet, je suis né dans votre commune le 12 mai 2010 sous le registre n° 456...\n4. Politesse : En espérant une suite favorable, je vous prie d\'agréer, Monsieur le Maire, l\'assurance de ma haute considération. (Signature : Guei Patrick).'
    },
    examTraps: [
      'Écrire "Cher Monsieur le Maire" (formule familière strictement interdite en administration).',
      'Mettre le lieu et la date à gauche au lieu de la droite.'
    ],
    quickMemo: 'Émetteur à gauche. Date & Destinataire à droite. Objet à gauche. "J\'ai l\'honneur de...". Formule respectueuse + Signature.',
    keywords: ['lettre officielle', 'lettre administrative', 'expression ecrite 4e', 'formule d appel', 'formule de politesse', 'francais 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 6 - LE GROUPE NOMINAL, EXPANSIONS ET DÉTERMINANT ZÉRO
  // ========================================================
  {
    id: 'fra-4e-groupe-nominal-expansions-determinant-zero',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : Le Groupe Nominal',
    lessonTitle: 'Le Groupe nominal : Expansions (épithète, complément du nom, relative) et déterminant zéro',
    objectifs: [
      'Identifier le nom noyau et les différentes expansions du groupe nominal (GN)',
      'Distinguer l\'adjectif qualificatif épithète (liée ou détachée), le complément du nom (CDN) et la proposition subordonnée relative (PSR)',
      'Reconnaître les prépositions introductrices du complément du nom (de, à, en, pour, sans, avec)',
      'Identifier et expliquer les cas d\'emploi du déterminant zéro (absence d\'article) : noms propres, proverbes, apostrophes, formules figées'
    ],
    fullCourseContent: `1. Constitution du Groupe Nominal (GN) :
- Le Groupe Nominal minimal est formé au moins d'un nom noyau et d'un déterminant (ex : le livre, cet enfant, nos cahiers).
- Les Expansions du nom sont des mots, groupes de mots ou propositions qui enrichissent et précisent le sens du nom noyau :
  1. L'Adjectif qualificatif épithète : placé directement avant ou après le nom (épithète liée : "un vent violent") ou séparé par une virgule (épithète détachée ou en apposition : "Fatigués, les élèves s'assirent").
  2. Le Complément du nom (CDN) : groupe prépositionnel rattaché au nom noyau par une préposition (de, à, en, pour, sans, avec, sous). Exemples : "une maison en bois", "le sac de mon frère", "une machine à coudre".
  3. La Proposition Subordonnée Relative (PSR) : introduite par un pronom relatif (qui, que, dont, où, lequel) et complétant un nom appelé antécédent. Exemple : "La pluie qui tombe rafraîchit l'atmosphère".

2. Le Déterminant Zéro (Ø) :
- En français, le nom est généralement précédé d'un déterminant. L'omission volontaire de déterminant s'appelle le déterminant zéro (noté Ø).
- Principaux cas d'emploi du déterminant zéro :
  * Devant les noms propres de personnes ou de villes : "Ø Koffi habite à Ø Abidjan."
  * Dans les proverbes, maximes et dictons : "Ø Pierre qui roule n'amasse pas mousse", "Ø Pauvreté n'est pas vice."
  * Dans les énumérations vives ou accumulations : "Ø Hommes, Ø femmes, Ø enfants, tous fuyaient l'incendie."
  * Dans les apostrophes ou termes d'interpellation : "Ø Courage, camarades !"
  * Dans les formules figées ou après certaines prépositions : "agir avec Ø sagesse", "mourir de Ø faim", "prendre Ø feu".
  * Dans les titres d'ouvrages ou manchettes de presse : "Ø Victoire des Éléphants".`,
    definitions: [
      {
        term: 'Nom noyau',
        definition: 'Mot central et indispensable autour duquel s\'organisent les expansions du groupe nominal.'
      },
      {
        term: 'Complément du nom',
        definition: 'Groupe de mots introduit par une préposition qui précise un nom sans s\'accorder avec lui.'
      },
      {
        term: 'Déterminant zéro (Ø)',
        definition: 'Absence d\'article ou de déterminant devant un nom commun ou propre dans des contextes codifiés.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Accord de l\'épithète',
        statement: 'L\'adjectif épithète s\'accorde toujours en genre et en nombre avec le nom noyau qu\'il qualifie.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser les expansions d\'un GN',
        procedure: '1. Trouver le nom noyau.\n2. Repérer les adjectifs directement collés au nom -> épithètes.\n3. Repérer les groupes introduits par "de", "à", "en" -> compléments du nom.\n4. Repérer les propositions avec verbe introduites par qui/que/dont/où -> propositions relatives.',
        tip: 'Un même nom noyau peut cumuler plusieurs expansions : "La grande (épithète) case en paille (CDN) que mon père a bâtie (PSR)".'
      }
    ],
    examples: [
      {
        statement: 'Identifie les expansions dans : "Une brillante élève de 4ème qui travaille avec ardeur."',
        solution: 'Nom noyau : élève. "brillante" = adjectif qualificatif épithète ; "de 4ème" = complément du nom ; "qui travaille avec ardeur" = proposition subordonnée relative.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi n\'y a-t-il pas d\'article dans : "Chien qui aboie ne mord pas" ?',
        correction: 'C\'est un proverbe : la tradition proverbiale utilise le déterminant zéro pour donner à la maxime une portée universelle et intemporelle.'
      }
    ],
    evaluationSituation: {
      context: 'Dans le texte de lecture, les élèves relèvent la phrase : "L\'ancien pont métallique de la rivière N\'Zo que les eaux ont emporté isole les villageois."',
      instructions: [
        '1. Quel est le nom noyau de ce groupe nominal sujet ?',
        '2. Identifie les trois expansions qui l\'enrichissent et précise leur nature grammaticale.',
        '3. Réécris la phrase en appliquant le déterminant zéro dans une manchette de journal.'
      ],
      solutionGuide: '1. Le nom noyau est "pont".\n2. "ancien" et "métallique" = adjectifs qualificatifs épithètes ; "de la rivière N\'Zo" = complément du nom ; "que les eaux ont emporté" = proposition subordonnée relative.\n3. Manchette de journal : "Effondrement du pont de la N\'Zo : villageois isolés !"'
    },
    examTraps: [
      'Confondre un complément du nom (rattaché à un nom) et un complément d\'objet indirect (rattaché à un verbe).',
      'Oublier d\'accorder l\'adjectif épithète avec le nom noyau.'
    ],
    quickMemo: 'GN = Nom noyau + Épithète + Complément du nom (de, à, en...) + Relative (qui, que...). Déterminant zéro = proverbes, noms propres.',
    keywords: ['groupe nominal', 'expansions du nom', 'epithete', 'complement du nom', 'determinant zero', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 7 - LA PRONOMINALISATION
  // ========================================================
  {
    id: 'fra-4e-pronominalisation-personnels-demonstratifs-relatifs',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : La Pronominalisation',
    lessonTitle: 'Les Pronoms : Personnels (sujets, COD, COI, en, y, réfléchi soi), démonstratifs, possessifs et indéfinis',
    objectifs: [
      'Définir le pronom comme mot remplaçant un nom ou un groupe nominal pour éviter les répétitions',
      'Maîtriser les pronoms personnels compléments : le, la, les (COD), lui, leur (COI)',
      'Employer correctement les pronoms adverbiaux "en" (complément en de) et "y" (complément en à ou de lieu)',
      'Employer le pronom réfléchi "soi" (rapporté à un sujet indéterminé : chacun, on, nul)',
      'Identifier les pronoms démonstratifs (celui, celle, ceci, cela), possessifs (le mien, la nôtre) et indéfinis (chacun, tous, personne, rien)'
    ],
    fullCourseContent: `1. Rôle et Définition de la pronominalisation :
- La pronominalisation est l'opération grammaticale qui consiste à substituer un pronom à un nom ou à un groupe nominal afin d'alléger la phrase et d'éviter les répétitions inélégantes.

2. Les Pronoms personnels :
- Pronoms sujets : je, tu, il, elle, on, nous, vous, ils, elles.
- Pronoms compléments d'objet direct (COD) : me, te, le, la, l', nous, vous, les.
  * Exemple : "Je regarde le match" -> "Je LE regarde".
- Pronoms compléments d'objet indirect (COI) : me, te, lui, nous, vous, leur.
  * Exemple : "Je parle à mes amis" -> "Je LEUR parle" (attention : "leur" pronom est toujours invariable, jamais de "s").
- Le pronom personnel réfléchi "soi" :
  * S'emploie uniquement lorsque le sujet est indéterminé (on, chacun, tout le monde, personne, nul).
  * Exemple : "Chacun travaille pour soi", "On doit avoir confiance en soi".
- Les pronoms adverbiaux "EN" et "Y" :
  * "EN" remplace un GN introduit par "de" (partitif, lieu d'où l'on vient, COI).
    - Exemple : "Tu as du pain ? Oui, j'EN ai." / "Il revient de Bouaké ? Il EN revient."
  * "Y" remplace un complément de lieu où l'on est / où l'on va, ou un COI introduit par "à".
    - Exemple : "Elle va au marché ? Elle Y va." / "Je pense à mon avenir ? J'Y pense."

3. Les autres classes de pronoms :
- Pronoms démonstratifs :
  * Formes simples : celui, celle, ceux, celles, ce.
  * Formes composées : celui-ci, celui-là, ceci, cela, ça.
- Pronoms possessifs : le mien, la tienne, le sien, les nôtres, les vôtres, les leurs.
- Pronoms indéfinis :
  * De quantité nulle : aucun, personne, rien, nul.
  * De quantité positive : chacun, plusieurs, certains, tous, tout.
  * Le pronom "on" : pronom indéterminé, toujours sujet, le verbe s'accorde au singulier (3e personne).`,
    definitions: [
      {
        term: 'Pronom',
        definition: 'Mot représentant ou remplaçant un nom, un groupe nominal ou une proposition déjà exprimée.'
      },
      {
        term: 'Pronoms adverbiaux (en, y)',
        definition: 'Pronoms invariables équivalant à des compléments de lieu ou à des compléments prépositionnels en de ou à.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariabilité de "leur" pronom',
        statement: 'Le pronom personnel "leur" (COI remplaçant "à eux" ou "à elles") ne prend JAMAIS de "s" (ex: "Je leur parle").'
      },
      {
        name: 'Règle de soi vs lui',
        statement: 'On emploie "soi" avec un sujet indéfini ("Chacun pour soi") et "lui/elle" avec un sujet précis ("Marc travaille pour lui").'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir entre "en" et "y"',
        procedure: '1. Identifier la préposition qui introduit le complément.\n2. Si la préposition est "DE" (de la ville, du courage, de cela) -> remplacer par EN.\n3. Si la préposition est "À", "EN", "SUR", "DANS" (au champ, à ses examens, à Paris) -> remplacer par Y.',
        tip: 'Penser : DE -> EN ; À -> Y.'
      }
    ],
    examples: [
      {
        statement: 'Remplace les GN par les pronoms qui conviennent : "Kouassi donne des mangues à sa sœur."',
        solution: '"Kouassi LUI (sa sœur) EN (des mangues) donne."'
      }
    ],
    exercises: [
      {
        question: 'Complète par "soi" ou "lui" : A. "Chacun doit balayer devant ...". B. "Paul a acheté un livre pour ...".',
        correction: 'A. "Chacun doit balayer devant soi" (sujet indéfini chacun). B. "Paul a acheté un livre pour lui" (sujet défini Paul).'
      }
    ],
    evaluationSituation: {
      context: 'Dans un devoir d\'expression écrite, un élève a écrit : "Les élèves aiment l\'école. Les élèves vont à l\'école chaque jour. Les professeurs parlent aux élèves et donnent aux élèves des conseils."',
      instructions: [
        '1. Relève les trois répétitions lourdes.',
        '2. Réécris ce paragraphe en utilisant les pronoms personnels appropriés (y, leur, en).',
        '3. Justifie l\'invariabilité de "leur" dans ta correction.'
      ],
      solutionGuide: '1. Répétitions : "l\'école", "aux élèves", "des conseils".\n2. Réécriture : "Les élèves aiment l\'école. Ils y vont chaque jour. Les professeurs leur parlent et leur en donnent."\n3. "Leur" est ici un pronom personnel complément d\'objet indirect (COI mis pour "aux élèves") : en tant que pronom personnel, il ne prend jamais de "s".'
    },
    examTraps: [
      'Mettre un "s" à "leur" lorsqu\'il est pronom personnel placé devant un verbe ("Je leurs dis" est une faute grave !).',
      'Confondre "en" préposition ("en classe") et "en" pronom personnel ("j\'en veux").'
    ],
    quickMemo: 'COD = le, la, les. COI = lui, leur (jamais de s). DE = en. À / Lieu = y. Sujet indéfini = soi.',
    keywords: ['pronominalisation', 'pronoms personnels', 'pronom en et y', 'pronom reflechi soi', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 8 - LE VERBE : FORMES, RADICAUX ET EMPLOIS
  // ========================================================
  {
    id: 'fra-4e-verbes-radicaux-3e-groupe-valeurs-temps',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : Le Verbe',
    lessonTitle: 'Morphologie du 3e groupe (radicaux multiples), valeurs aspectuelles de l\'indicatif et semi-auxiliaires',
    objectifs: [
      'Identifier la base (radical) et la désinence (terminaison) d\'un verbe conjugué',
      'Classer les verbes du 3e groupe selon le nombre de radicaux : 1, 2, 3, 4, 5 radicaux et radicaux supplétifs (aller, être, avoir, faire)',
      'Maîtriser les 8 temps de l\'indicatif (4 temps simples et 4 temps composés)',
      'Analyser les valeurs temporelles et aspectuelles : accompli / non accompli, antériorité, simultanéité',
      'Identifier les semi-auxiliaires formant les périphrases verbales : futur proche (aller), passé récent (venir de), action imminente, obligation'
    ],
    fullCourseContent: `1. Structure du verbe : Radical et Terminaisons :
- Tout verbe conjugué comprend deux éléments :
  * Le radical : porteur du sens lexical de l'action.
  * La terminaison : marqueur grammatical de personne, de temps et de mode.

2. Les Radicaux des verbes du 3e groupe :
Contrairement aux verbes du 1er groupe qui ont un radical stable (ex : chant-er), les verbes du 3e groupe sont irréguliers et possèdent un ou plusieurs radicaux :
- À radical unique : courir (cour-ons, cour-ais, cour-rai), ouvrir (ouvr-ons).
- À 2 radicaux : écrire (écri-s / écriv-ons), battre (bat-s / batt-ons).
- À 3 radicaux : voir (voi-s / voy-ons / ver-rai), devoir (doi-s / dev-ons / doiv-ent).
- À 4 radicaux : prendre (prend-s / pren-ons / prenn-ent / pris), tenir (tien-s / ten-ons / tienn-ent / tiend-rai).
- À 5 radicaux : pouvoir (peu-x / pouv-ons / peuv-ent / puiss-e / pour-rai).
- À radicaux supplétifs (formes totalement hétérogènes issues d'étymologies distinctes) :
  * Aller : v- (je vais), all- (nous allons), i- (j'irai), aill- (que j'aille).
  * Être : su-is, es, est, somm-es, êt-es, so-nt, ét-ais, ser-ai, f-us.
  * Avoir : ai, as, a, av-ons, aur-ai, eu-.

3. Les 8 temps de l'indicatif et leurs valeurs aspectuelles :
- Les 4 temps simples : Présent, Imparfait (action non délimitée dans le passé, habitude, description), Passé simple (action brève, ponctuelle, délimitée dans le passé), Futur simple.
- Les 4 temps composés : Passé composé, Plus-que-parfait, Passé antérieur, Futur antérieur.
- Valeur aspectuelle :
  * Temps simple = aspect non accompli (l'action est en train de se dérouler).
  * Temps composé = aspect accompli (l'action est achevée et terminée par rapport au repère).

4. Les Semi-auxiliaires et périphrases verbales :
Un semi-auxiliaire est un verbe qui perd son sens plein pour exprimer une nuance de temps, d'aspect ou de modalité lorsqu'il est suivi d'un infinitif :
- Futur proche : aller + infinitif ("Je vais partir").
- Passé récent : venir de + infinitif ("Le cours vient de finir").
- Action imminente : être sur le point de + infinitif.
- Action en cours (aspect duratif) : être en train de + infinitif.
- Modalité d'obligation : devoir + infinitif ("Tu dois travailler").
- Modalité de possibilité : pouvoir + infinitif ("Il peut réussir").`,
    definitions: [
      {
        term: 'Radical supplétif',
        definition: 'Radical d\'un verbe qui change complètement d\'aspect morphologique selon le temps (ex: aller -> vais, irons).'
      },
      {
        term: 'Aspect accompli',
        definition: 'Caractéristique d\'une action verbale envisagée comme terminée au moment considéré (exprimée par les temps composés).'
      },
      {
        term: 'Semi-auxiliaire',
        definition: 'Verbe conjugué combiné à un infinitif pour former une périphrase verbale temporelle ou modale.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Correspondance des temps simples et composés',
        statement: 'À chaque temps simple correspond un temps composé exprimant l\'antériorité : Présent -> Passé composé ; Imparfait -> Plus-que-parfait ; Passé simple -> Passé antérieur ; Futur simple -> Futur antérieur.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier une périphrase verbale',
        procedure: '1. Repérer deux verbes qui se suivent.\n2. Vérifier si le premier verbe est conjugué et le second à l\'infinitif.\n3. Vérifier le sens : s\'il indique le temps (aller = futur proche, venir de = passé récent) ou l\'obligation (devoir), c\'est un semi-auxiliaire.',
        tip: '"Il va au marché" = verbe aller autonome. "Il va chanter" = aller semi-auxiliaire de futur proche.'
      }
    ],
    examples: [
      {
        statement: 'Quelle est la nuance apportée par "Il vient de sortir" par rapport à "Il est sorti" ?',
        solution: '"Il vient de sortir" est une périphrase verbale marquant le passé très récent immédiat, grâce au semi-auxiliaire "venir de".'
      }
    ],
    exercises: [
      {
        question: 'Combien de radicaux différents trouve-t-on dans la conjugaison du verbe "écrire" au présent : "j\'écris", "nous écrivons" ?',
        correction: 'On trouve deux radicaux : "écri-" au singulier et "écriv-" au pluriel.'
      }
    ],
    evaluationSituation: {
      context: 'Dans un texte narratif, un élève relève : "Dès qu\'il eut fini son devoir, il se mit à pleurer car il allait rater son car."',
      instructions: [
        '1. Donne le temps et l\'aspect verbal de "eut fini".',
        '2. Identifie la périphrase verbale avec semi-auxiliaire dans la phrase.',
        '3. Précise la nuance temporelle apportée par cette périphrase.'
      ],
      solutionGuide: '1. "eut fini" est conjugué au passé antérieur de l\'indicatif ; il exprime un aspect accompli et antérieur par rapport au passé simple.\n2. La périphrase verbale est "il allait rater".\n3. Le semi-auxiliaire "aller" à l\'imparfait exprime un futur proche dans le passé.'
    },
    examTraps: [
      'Confondre le verbe "aller" employé comme verbe de déplacement ("Je vais à Paris") et comme semi-auxiliaire ("Je vais lire").',
      'Confondre l\'imparfait (action non achevée dans le passé) et le passé composé (action accomplie).'
    ],
    quickMemo: '3e groupe = radicaux multiples (aller = v-, all-, i-). Semi-auxiliaires = aller + inf (futur proche), venir de + inf (passé récent).',
    keywords: ['radicaux du verbe', '3e groupe', 'aspect accompli', 'semi-auxiliaires', 'futur proche', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 9 - MODES SUBJONCTIF, CONDITIONNEL ET ACCORD DU PARTICIPE PASSÉ
  // ========================================================
  {
    id: 'fra-4e-modes-subjonctif-conditionnel-accords-participe',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : Modes et Accords',
    lessonTitle: 'Modes conditionnel et subjonctif, et règles d\'accord du participe passé avec être et avoir',
    objectifs: [
      'Identifier les valeurs du mode conditionnel : politesse, souhait, doute, information non confirmée, potentiel',
      'Identifier les valeurs du mode subjonctif : volonté, ordre, obligation, crainte, regret, éventualité',
      'Appliquer la règle d\'accord du participe passé employé avec l\'auxiliaire être (accord avec le sujet)',
      'Appliquer la règle fondamentale d\'accord du participe passé avec l\'auxiliaire avoir (invariable sauf si le COD précède)',
      'Repérer la position du COD (antéposé sous forme de pronom que, le, la, les, ou en interrogation) pour réaliser l\'accord'
    ],
    fullCourseContent: `1. Le Mode Conditionnel et ses valeurs :
- Morphologie du conditionnel présent : Radical du futur simple + Terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).
- Principales valeurs :
  * Demande polie / Atténuation : "Pourriez-vous m\'aider ?"
  * Souhait / Désir : "J\'aimerais visiter Grand-Bassam."
  * Information incertaine / Doute : "Le match aurait été annulé."
  * Fait soumis à une condition (Système hypothétique en "Si + Imparfait -> Conditionnel présent") : "Si j'avais de l'argent, j'achèterais ce livre."

2. Le Mode Subjonctif et ses valeurs :
- Contrairement à l'indicatif (mode du réel et de la certitude), le subjonctif est le mode de l'incertitude, du possible, de la pensée et du sentiment.
- Principales valeurs en proposition indépendante ou principale :
  * L'ordre ou la défense à la 3e personne : "Qu'il sorte immédiatement !"
  * Le souhait ou la prière : "Pourvu qu'il réussisse !", "Dieu vous bénisse !"
  * L'indignation : "Moi, que je fasse cela !"
- En proposition subordonnée : Requis après les verbes de volonté (vouloir, exiger), de doute, de crainte (craindre que... ne) et après certaines conjonctions (bien que, pour que, avant que).

3. Règles d'accord du participe passé :
- Règle 1 : Participe passé employé avec l'auxiliaire ÊTRE :
  * Il s'accorde TOUJOURS en genre (féminin -e) et en nombre (pluriel -s) avec le sujet du verbe.
  * Exemple : "Les filles sont arrivées à l'heure." (sujet : "les filles" = fém. plur. -> arrivées).
- Règle 2 : Participe passé employé avec l'auxiliaire AVOIR :
  * Règle de base : Le participe passé ne s'accorde JAMAIS avec le sujet.
  * Exception capitale : Le participe passé s'accorde en genre et en nombre avec le Complément d'Objet Direct (COD) SI et SEULEMENT SI ce COD est placé AVANT le verbe (COD antéposé).
  * Les 3 cas d'antéposition du COD :
    1. Avec le pronom relatif "que" : "Les leçons que j'ai apprises" (COD = "que" mis pour "les leçons", fém. pluriel -> apprises).
    2. Avec les pronoms personnels le, la, les : "Ces mangues, je les ai mangées" (COD = "les", fém. pluriel -> mangées).
    3. En phrase interrogative ou exclamative avec "quel", "combien de" : "Quelles fleurs as-tu cueillies ?" (COD = "quelles fleurs").
  * Si le COD est placé après le verbe ou s'il n'y a pas de COD : Pas d'accord !
    - Exemple : "J'ai appris mes leçons" (COD "mes leçons" placé après -> pas d'accord, appris reste au masculin singulier).`,
    definitions: [
      {
        term: 'Participe passé',
        definition: 'Forme non conjuguée du verbe utilisée avec un auxiliaire pour former les temps composés.'
      },
      {
        term: 'COD antéposé',
        definition: 'Complément d\'objet direct placé avant le verbe, déclenchant l\'accord du participe passé conjugué avec avoir.'
      },
      {
        term: 'Subjonctif',
        definition: 'Mode verbal exprimant une action envisagée dans l\'esprit (souhait, doute, obligation) et non dans la réalité objective.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'or avec AVOIR',
        statement: 'Avec l\'auxiliaire AVOIR, chercher d\'abord le COD : s\'il est après ou absent -> invariable ; s\'il est avant -> accord avec ce COD.'
      },
      {
        name: 'Règle avec ÊTRE',
        statement: 'Avec l\'auxiliaire ÊTRE, accord systématique avec le sujet.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Accorder un participe passé avec AVOIR en 3 étapes',
        procedure: '1. Poser la question "qui ?" ou "quoi ?" après le verbe pour trouver le COD.\n2. Si la réponse se trouve après le verbe : PAS D\'ACCORD.\n3. Si la réponse se trouve avant le verbe : ACCORDER en genre et en nombre avec ce mot placé avant.',
        tip: 'Exemple : "J\'ai vu (quoi ?) les voitures" (après -> vu). "Les voitures que j\'ai vues (quoi ? \'que\' mis pour voitures -> avant -> vues).'
      }
    ],
    examples: [
      {
        statement: 'Accorde : "La lettre qu\'il a (écrit) est (parti)."',
        solution: '"La lettre qu\'il a écrite (COD \'qu\' mis pour \'la lettre\' placé avant) est partie (auxiliaire être, accord avec sujet \'la lettre\')."'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi n\'accorde-t-on pas "mangé" dans : "Ils ont mangé des pommes" alors qu\'on écrit : "Les pommes qu\'ils ont mangées" ?',
        correction: 'Dans la première phrase, le COD "des pommes" est placé APRÈS le verbe : le participe reste invariable. Dans la seconde, le COD "que" (représentant "les pommes", féminin pluriel) est placé AVANT le verbe : l\'accord se fait.'
      }
    ],
    evaluationSituation: {
      context: 'Un collégien de 4ème rédige un compte rendu de vacances : "Mes cousines ont venu chez nous. Elles ont préparé des gâteaux délicieux. Toutes les galettes qu\'elles ont cuit ont été dévoré par les voisins."',
      instructions: [
        '1. Relève les trois fautes d\'accord de participe passé.',
        '2. Réécris les phrases correctement.',
        '3. Justifie chaque correction en précisant la règle appliquée.'
      ],
      solutionGuide: '1. Fautes : "ont venu", "cuit", "dévoré".\n2. Correction : "Mes cousines SONT VENUES chez nous. Elles ont préparé des gâteaux délicieux. Toutes les galettes qu\'elles ont CUITES ont été DÉVORÉES par les voisins."\n3. Justifications : "sont venues" (verbe venir se conjugue avec être -> accord avec le sujet \'mes cousines\') ; "cuites" (avec avoir, le COD \'qu\' mis pour \'les galettes\' fém. plur. est antéposé) ; "dévorées" (au passif avec l\'auxiliaire être -> accord avec le sujet \'les galettes\').'
    },
    examTraps: [
      'Accorder le participe passé avec avoir avec le sujet (ex : "Elles ont mangées" est une faute grossière).',
      'Oublier d\'accorder quand le pronom relatif "que" est placé avant.'
    ],
    quickMemo: 'ÊTRE = accord avec le Sujet. AVOIR = invariable SAUF si COD placé AVANT (accord avec le COD).',
    keywords: ['participe passe', 'accord auxiliaire avoir', 'accord auxiliaire etre', 'subjonctif', 'conditionnel', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 10 - LES PROPOSITIONS SUBORDONNÉES RELATIVES ET COMPLÉTIVES
  // ========================================================
  {
    id: 'fra-4e-subordonnees-relatives-et-completives',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : Les Propositions subordonnées',
    lessonTitle: 'Propositions subordonnées relatives (qui, que, dont, où) et complétives (conjonctives et interrogatives)',
    objectifs: [
      'Distinguer nettement une proposition subordonnée relative d\'une proposition subordonnée complétive',
      'Identifier les pronoms relatifs simples (qui, que, quoi, dont, où) et composés (lequel, laquelle...) et leur antécédent',
      'Déterminer la fonction du pronom relatif dans la proposition relative (sujet, COD, complément du nom, CCL, CCT)',
      'Analyser la proposition subordonnée complétive introduite par "que", "à ce que", "de ce que" complétant un verbe (fonction COD du verbe principal)',
      'Identifier la complétive interrogative indirecte (introduite par "si", "quel", "comment")'
    ],
    fullCourseContent: `1. Différence fondamentale entre Relative et Complétive :
- La Proposition Subordonnée Relative (PSR) :
  * Fait partie du GROUPE NOMINAL.
  * Elle complète un NOM ou un pronom appelé ANTÉCÉDENT placé juste devant le pronom relatif.
  * Sa fonction globale est : Complément de l'antécédent.
  * Exemple : "Le livre QUE j'ai acheté est captivant." ("que" remplace le nom "livre").
- La Proposition Subordonnée Complétive (PSC) :
  * Fait partie du GROUPE VERBAL.
  * Elle complète un VERBE (et non un nom).
  * Elle est introduite par la conjonction de subordination "que" (qui n'a aucune fonction dans la subordonnée et ne remplace rien).
  * Sa fonction globale est le plus souvent : Complément d'Objet Direct (COD) du verbe principal.
  * Exemple : "Je sais QUE tu as réussi." (complète le verbe "sais" : Je sais quoi ? -> que tu as réussi).

2. La Proposition Subordonnée Relative :
- Les pronoms relatifs simples :
  * "QUI" : toujours SUJET du verbe de la subordonnée ("L'enfant qui pleure").
  * "QUE / QU'" : toujours COD ("La mangue que je mange").
  * "DONT" : remplace un mot introduit par "de" (Complément du nom : "L'élève dont je parle" ou COI : "Le livre dont j'ai besoin").
  * "OÙ" : Complément Circonstanciel de Lieu (CCL : "La ville où je suis né") ou de Temps (CCT : "Le jour où il est venu").
- Relative explicative vs relative déterminative :
  * Relative déterminative : indispensable au sens, non séparée par des virgules.
  * Relative explicative (appositive) : apporte une précision secondaire, isolée entre deux virgules.

3. La Proposition Subordonnée Complétive :
- Complétive conjonctive introduite par "que" :
  * Mode du verbe de la complétive :
    - Indicatif si le verbe principal exprime une déclaration, une certitude, une opinion ("Je pense qu'il viendra").
    - Subjonctif si le verbe principal exprime une volonté, un doute, un sentiment, une nécessité ("Je veux qu'il vienne", "Il faut que tu sortes").
- Complétive interrogative indirecte :
  * Introduite par "si" (interrogation totale) ou par un mot interrogatif (qui, ce que, comment, pourquoi).
  * Dépend d'un verbe de parole ou d'ignorance (demander, ignorer, savoir).
  * Exemple : "Le professeur demande si tout le monde a compris." (pas de point d'interrogation, pas d'inversion du sujet).`,
    definitions: [
      {
        term: 'Antécédent',
        definition: 'Nom ou pronom placé avant le pronom relatif et que ce pronom représente dans la proposition relative.'
      },
      {
        term: 'Proposition subordonnée complétive',
        definition: 'Proposition complétant un verbe transitif pour en être généralement le complément d\'objet direct (COD).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test de distinction Relative vs Complétive',
        statement: 'Si "que" est précédé d\'un NOM -> c\'est une Relative. Si "que" est précédé d\'un VERBE -> c\'est une Complétive.'
      },
      {
        name: 'Pas d\'inversion en interrogation indirecte',
        statement: 'Dans une complétive interrogative indirecte, l\'ordre sujet-verbe reste normal et on ne met jamais de point d\'interrogation (ex: "Je me demande où il va." et non "où va-t-il ?").'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Trouver la fonction d\'un pronom relatif',
        procedure: '1. Isoler la proposition subordonnée relative.\n2. Remplacer mentalement le pronom relatif par son antécédent dans la subordonnée.\n3. Si l\'antécédent fait l\'action -> le pronom est SUJET (c\'est \'qui\').\n4. Si l\'antécédent subit l\'action (répond à qui ? quoi ?) -> le pronom est COD (c\'est \'que\').\n5. Si précédé de \'de\' -> c\'est \'dont\'. S\'il indique le lieu/temps -> c\'est \'où\'.',
        tip: 'Qui = sujet ; Que = COD.'
      }
    ],
    examples: [
      {
        statement: 'Distingue la nature de la subordonnée : A. "L\'histoire qu\'il raconte est drôle." B. "Je crois qu\'il raconte une histoire."',
        solution: 'A. "qu\'il raconte" est précédé du nom "L\'histoire" : c\'est une Proposition Subordonnée Relative.\nB. "qu\'il raconte une histoire" est précédé du verbe "crois" : c\'est une Proposition Subordonnée Complétive COD.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la fonction du pronom relatif "dont" dans : "L\'arbre dont les feuilles tombent est un manguier" ?',
        correction: 'La fonction de "dont" est Complément du Nom "feuilles" (les feuilles de l\'arbre tombent).'
      }
    ],
    evaluationSituation: {
      context: 'Dans le texte d\'étude, deux phrases sont relevées par l\'enseignant : Phrase 1 : "Le maître constate que les élèves font des progrès." Phrase 2 : "Les élèves qui font des progrès réjouissent le maître."',
      instructions: [
        '1. Nomme la nature exacte de la proposition subordonnée dans la phrase 1 et précise sa fonction.',
        '2. Nomme la nature exacte de la proposition subordonnée dans la phrase 2 et précise son antécédent.',
        '3. Donne la fonction du pronom "qui" dans la phrase 2.'
      ],
      solutionGuide: '1. Phrase 1 : "que les élèves font des progrès" est une Proposition Subordonnée Complétive conjonctive, fonction : COD du verbe "constate".\n2. Phrase 2 : "qui font des progrès" est une Proposition Subordonnée Relative, son antécédent est le nom "élèves".\n3. Le pronom relatif "qui" a pour fonction : Sujet du verbe "font".'
    },
    examTraps: [
      'Confondre "que" pronom relatif (qui a un antécédent nom) et "que" conjonction de subordination (placée après un verbe).',
      'Mettre un point d\'interrogation à la fin d\'une proposition interrogative indirecte.'
    ],
    quickMemo: 'Nom + QUE = Relative (complément du nom). Verbe + QUE = Complétive (COD). Qui = sujet, Que = COD, Dont = de, Où = lieu.',
    keywords: ['subordonnee relative', 'subordonnee completive', 'pronoms relatifs', 'antecedent', 'interrogation indirecte', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - GRAMMAIRE : LEÇON 11 - LES SUBORDONNÉES CIRCONSTANCIELLES
  // ========================================================
  {
    id: 'fra-4e-subordonnees-circonstancielles-cause-but-concession',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Grammaire : Les Circonstancielles',
    lessonTitle: 'Propositions subordonnées circonstancielles : Cause, conséquence, but, temps, opposition et concession',
    objectifs: [
      'Identifier la fonction de complément circonstanciel d\'une proposition subordonnée',
      'Reconnaître et employer les conjonctions de cause (parce que, comme, puisque + indicatif) et de conséquence (si bien que, tellement... que + indicatif)',
      'Reconnaître et employer les conjonctions de but (pour que, afin que, de peur que + SUBJONCTIF obligatoire)',
      'Distinguer l\'opposition simple (alors que, tandis que + indicatif) de la concession (bien que, quoique + SUBJONCTIF ; même si + indicatif)',
      'Maîtriser les nuances temporelles : antériorité (avant que + subjonctif), simultanéité (pendant que + indicatif) et postériorité (après que + indicatif)'
    ],
    fullCourseContent: `1. Qu'est-ce qu'une proposition subordonnée circonstancielle ?
- Une proposition subordonnée circonstancielle (PSC) est une proposition qui indique les circonstances (temps, cause, conséquence, but, opposition, condition) dans lesquelles s'accomplit l'action de la proposition principale.
- Elle est déplaçable et généralement supprimable.

2. Les différentes circonstances et leurs modes verbaux :
- 1. La Cause (répond à "Pourquoi ?") :
  * Conjonctions : parce que, puisque, comme (toujours en tête de phrase), étant donné que, vu que, sous prétexte que.
  * Mode requis : INDICATIF.
  * Exemple : "Comme la pluie menace, nous rentrons."
- 2. La Conséquence (résultat de l'action) :
  * Conjonctions : si bien que, de sorte que, au point que, tellement / si... que.
  * Mode requis : INDICATIF (sauf après "trop... pour que" qui exige le subjonctif).
  * Exemple : "Il a tellement couru qu'il est épuisé."
- 3. Le But (objectif visé intentionnellement) :
  * Conjonctions : pour que, afin que, de peur que (... ne), de crainte que.
  * Mode requis : SUBJONCTIF OBLIGATOIRE.
  * Exemple : "Je t'explique la règle afin que tu la COMPRENNES."
- 4. L'Opposition et la Concession :
  * Opposition (deux faits indépendants et différents) : alors que, tandis que (+ INDICATIF). "Il fait chaud ici alors qu'il pleut à Man."
  * Concession (fait qui aurait dû empêcher l'action mais ne l'a pas empêchée) : bien que, quoique (+ SUBJONCTIF), même si (+ INDICATIF).
  * Exemple : "Bien qu'il SOIT malade, il est venu en classe."
- 5. Le Temps :
  * Simultanéité : quand, lorsque, pendant que, au moment où (+ INDICATIF).
  * Antériorité (l'action principale se passe avant la subordonnée) : avant que, jusqu'à ce que (+ SUBJONCTIF). "Finis ton travail avant que la nuit ne TOMBE."
  * Postériorité : après que, dès que, aussitôt que (+ INDICATIF ! Attention : après que réclame l'indicatif et jamais le subjonctif !). "Après qu'il A MANGÉ, il s'est endormi."`,
    definitions: [
      {
        term: 'Subordonnée de cause',
        definition: 'Proposition circonstancielle exprimant la raison ou le motif de l\'action de la principale.'
      },
      {
        term: 'Subordonnée de but',
        definition: 'Proposition circonstancielle exprimant la finalité ou l\'intention recherchée, exigeant le subjonctif.'
      },
      {
        term: 'Concession',
        definition: 'Rapport logique exprimant une cause inopérante (l\'obstacle n\'a pas empêché le résultat).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du mode après "bien que" et "pour que"',
        statement: 'Les locutions "bien que", "quoique", "pour que", "afin que" et "avant que" sont TOUJOURS suivies du mode SUBJONCTIF.'
      },
      {
        name: 'Règle de "après que"',
        statement: 'La locution "après que" exprime un fait accompli et certain : elle exige obligatoirement l\'INDICATIF (ex: "après qu\'il est parti" et non "après qu\'il soit parti").'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Distinguer Cause et Conséquence',
        procedure: '1. Identifier la chronologie des faits.\n2. Le fait qui se produit en premier dans le temps est la CAUSE.\n3. Le fait qui en résulte en second est la CONSÉQUENCE.\n4. Si la phrase est reliée par "parce que" -> subordonnée de cause. Si elle est reliée par "si bien que" ou "tellement... que" -> subordonnée de conséquence.',
        tip: 'Cause = En amont (Pourquoi ?). Conséquence = En aval (Quel résultat ?).'
      }
    ],
    examples: [
      {
        statement: 'Mets le verbe entre parenthèses au mode convenable : "Il s\'entraîne tous les jours pour qu\'il (pouvoir) gagner."',
        solution: '"pour que" exige le subjonctif : "afin qu\'il PUISSE gagner."'
      }
    ],
    exercises: [
      {
        question: 'Quelle circonstance est exprimée dans : "Bien qu\'il pleuve à verse, les paysans se rendent au champ" ? Quel est le mode du verbe ?',
        correction: 'C\'est une proposition subordonnée circonstancielle de concession. Le verbe "pleuve" est au subjonctif présent.'
      }
    ],
    evaluationSituation: {
      context: 'Dans son devoir de rédaction, un élève écrit : "Après que la cloche ait sonné, les élèves se sont précipités au réfectoire bien qu\'il n\'était pas encore l\'heure."',
      instructions: [
        '1. Relève les deux fautes de mode commises par l\'élève.',
        '2. Corrige les deux propositions en appliquant les règles officielles.',
        '3. Nomme la circonstance exprimée par chacune des deux propositions.'
      ],
      solutionGuide: '1. Fautes : "ait sonné" (subjonctif après "après que") et "était" (indicatif après "bien que").\n2. Correction : "Après que la cloche A SONNÉ, les élèves se sont précipités au réfectoire bien qu\'il NE FÛT / SOIT pas encore l\'heure."\n3. "Après que la cloche a sonné" = subordonnée de temps (postériorité) ; "bien qu\'il ne soit pas l\'heure" = subordonnée de concession.'
    },
    examTraps: [
      'Employer le subjonctif après "après que" (erreur très fréquente : après que prend l\'indicatif).',
      'Employer l\'indicatif après "bien que" (bien que exige TOUJOURS le subjonctif).'
    ],
    quickMemo: 'Pour que / Afin que / Avant que / Bien que = SUBJONCTIF. Parce que / Après que / Tellement que = INDICATIF.',
    keywords: ['circonstancielles', 'cause', 'consequence', 'but', 'concession', 'apres que', 'bien que', 'grammaire 4e']
  },

  // ========================================================
  // 4ÈME - ORTHOGRAPHE : LEÇON 12 - ORTHOGRAPHE LEXICALE ET GRAMMATICALE
  // ========================================================
  {
    id: 'fra-4e-orthographe-consonnes-muettes-homophones',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Orthographe : Lexique et Homophones',
    lessonTitle: 'Orthographe : Dérivation, consonnes finales muettes, homophones (quand/quant/qu\'en, plutôt/plus tôt) et accord avec adverbes de quantité',
    objectifs: [
      'Trouver la consonne finale muette d\'un mot par le féminin (lourd -> lourde) ou un dérivé de la même famille (plomb -> plombier)',
      'Identifier la formation des mots par dérivation (préfixes, suffixes) et par composition',
      'Distinguer et orthographier sans faute les homophones grammaticaux "quand" (temps), "quant à" (en ce qui concerne) et "qu\'en" (que + en)',
      'Distinguer les homophones lexicaux "plutôt" (de préférence) vs "plus tôt" (contraire de plus tard), et "aussitôt" vs "aussi tôt"',
      'Appliquer la règle d\'accord du verbe avec un sujet déterminé par un adverbe de quantité (beaucoup, peu, trop, la plupart)'
    ],
    fullCourseContent: `1. Recherche des consonnes finales muettes :
- De nombreux mots français se terminent par une consonne muette que l'on n'entend pas à l'oral (t, d, s, p, g, c).
- Deux méthodes infaillibles pour la retrouver :
  * Méthode 1 : Mettre le mot au féminin.
    - Ex : lourd -> lourde (donc d) ; grand -> grande ; petit -> petite ; franc -> franche ; blanc -> blanche.
  * Méthode 2 : Chercher un mot dérivé de la même famille (verbe, nom ou adjectif dérivé).
    - Ex : galop -> galoper (donc p) ; plomb -> plombier (donc b) ; sang -> sanguinaire (donc g) ; tapis -> tapisser (donc s) ; camp -> camper (donc p) ; poing -> poignée (donc g).

2. Les Homophones grammaticaux QUAND / QUANT / QU'EN :
- "Quand" (avec un 'd') : Adverbe ou conjonction de temps marquant le moment ; on peut le remplacer par "lorsque" ou "à quel moment".
  * Ex : "QUAND (lorsque) le professeur entre, les élèves se lèvent."
- "Quant" (avec un 't') : Toujours suivi de la préposition "à", "au" ou "aux" ; signifie "en ce qui concerne", "pour ce qui est de".
  * Ex : "QUANT à mon devoir, il est achevé."
- "Qu'en" (avec apostrophe) : Formé de la conjonction/pronom "que" élidé + pronom adverbial "en" ; on peut remplacer par "que de cela".
  * Ex : "Il ne s'intéresse QU'EN (seulement en) mathématiques", "QU'EN (que penses-tu de cela) penses-tu ?"

3. Les Homophones PLUTÔT / PLUS TÔT et AUSSITÔT / AUSSI TÔT :
- "Plutôt" (en un seul mot) : Adverbe signifiant "de préférence", "au lieu de".
  * Ex : "Je prendrai du café plutôt que du thé."
- "Plus tôt" (en deux mots séparés) : Indique le temps ; c'est le contraire direct de "plus tard".
  * Ex : "Il est arrivé plus tôt que prévu." (opposé : plus tard que prévu).
- "Aussitôt" (en un mot) : Adverbe de temps signifiant "immédiatement", "dès que" ("aussitôt dit, aussitôt fait").
- "Aussi tôt" (en deux mots) : Indique le moment ; contraire de "aussi tard" ("Pourquoi te lèves-tu aussi tôt ?").

4. Accord du verbe avec un adverbe de quantité :
- Lorsqu'un verbe a pour sujet un adverbe de quantité suivi ou non d'un complément au pluriel (beaucoup de, peu de, assez de, trop de, combien de, la plupart), le verbe s'accorde TOUJOURS AU PLURIEL.
  * Exemples :
    - "Beaucoup d'élèves SONT présents."
    - "Peu de personnes ONT compris."
    - "La plupart CHANTENT." (accord au pluriel avec l'idée sous-entendue de pluriel).`,
    definitions: [
      {
        term: 'Homophones',
        definition: 'Mots qui ont la même prononciation phonétique mais des orthographes et des sens différents.'
      },
      {
        term: 'Consonne muette',
        definition: 'Lettre consonne écrite à la fin d\'un mot qui ne se prononce pas à l\'oral.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de quant à',
        statement: '"Quant" ne s\'écrit avec un "t" que s\'il est immédiatement suivi de "à", "au" ou "aux".'
      },
      {
        name: 'Règle de l\'adverbe de quantité',
        statement: 'Le verbe dont le sujet est "beaucoup", "la plupart" ou "peu" prend toujours la marque du pluriel.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir entre plutôt et plus tôt',
        procedure: '1. Remplacer le mot par "plus tard".\n2. Si la phrase conserve son sens -> écrire PLUS TÔT (en deux mots).\n3. Si la phrase perd son sens -> écrire PLUTÔT (en un mot, signifiant de préférence).',
        tip: 'Même règle pour "aussitôt" et "aussi tôt" (tester le remplacement par "aussi tard").'
      }
    ],
    examples: [
      {
        statement: 'Complète par quand, quant ou qu\'en : "... viendras-tu ? ... à moi, je ne sais ... penser."',
        solution: '"QUAND viendras-tu ? QUANT à moi, je ne sais QU\'EN penser."'
      }
    ],
    exercises: [
      {
        question: 'Trouve la consonne muette des mots : abri..., renar..., courag..., dépar...',
        correction: 'abri (pas de consonne, féminin abriter -> t) ; renard (renarde -> d) ; courage (courageux) ; départ (départir -> t).'
      }
    ],
    evaluationSituation: {
      context: 'Dans une dictée, voici les phrases proposées : "1. (Quant / Quand) sonnera la cloche, nous partirons. 2. (Plutôt / Plus tôt) que de tricher, il préféra avouer. 3. Beaucoup d\'élèves (a / ont) fini (plus tôt / plutôt) que prévu."',
      instructions: [
        '1. Choisis la bonne orthographe pour chaque mot entre parenthèses.',
        '2. Justifie le choix de "quand" dans la première phrase.',
        '3. Justifie l\'accord du verbe dans la troisième phrase.'
      ],
      solutionGuide: '1. Phrases corrigées : 1. "QUAND sonnera la cloche..." ; 2. "PLUTÔT que de tricher..." ; 3. "Beaucoup d\'élèves ONT fini PLUS TÔT que prévu."\n2. Justification 1 : "Quand" avec un \'d\' car c\'est une conjonction de temps signifiant "lorsque".\n3. Justification 3 : Le sujet est "Beaucoup d\'élèves" ; l\'adverbe de quantité impose l\'accord du verbe au pluriel ("ont"). "Plus tôt" s\'écrit en deux mots car c\'est le contraire temporel de "plus tard".'
    },
    examTraps: [
      'Écrire "quant" avec un \'t\' devant une phrase temporelle ("Quant il viendra" est faux, il faut "Quand").',
      'Accorder le verbe au singulier après "la plupart" ou "beaucoup".'
    ],
    quickMemo: 'Quand = lorsque. Quant à = en ce qui concerne. Qu\'en = que + en. Plutôt = de préférence. Plus tôt = opposé de plus tard. Beaucoup = verbe au pluriel.',
    keywords: ['orthographe 4e', 'homophones', 'quand quant qu en', 'plutot plus tot', 'consonnes muettes', 'adverbe de quantite', 'francais 4e']
  }
];
