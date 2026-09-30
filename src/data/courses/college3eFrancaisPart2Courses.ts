import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_FRANCAIS_PART2_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 3ÈME - L'ARTICLE DE JOURNAL / LE FAIT DIVERS (LEÇON 3)
  // ========================================================
  {
    id: 'fra-3e-article-journal-fait-divers',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Expression Écrite : L\'Article de journal ou le fait divers',
    lessonTitle: 'Rédaction d\'un article de journal et d\'un fait divers',
    objectifs: [
      'Définir le fait divers et l\'article de journal (texte narratif rapportant un événement inhabituel, dramatique ou marquant de la vie courante)',
      'Maîtriser la silhouette graphique canonique : Titre accrocheur, sous-titre éventuel, corps de l\'article structuré, et signature de l\'auteur ("Le rédacteur")',
      'Appliquer la grille d\'enquête journalistique des 5W + 1H + Suites : Qui ? Quoi ? Quand ? Où ? Comment ? Pourquoi ? et Quelles suites ?',
      'Mobiliser les outils linguistiques et stylistiques de la presse : style indirect, voix passive (« une enquête a été ouverte »), attaque percutante et précision spatio-temporelle',
      'Rédiger des faits divers types BEPC : accident de la circulation, intoxication alimentaire en milieu scolaire, arrestation de cambrioleurs, incendie ou sauvetage héroïque'
    ],
    fullCourseContent: `1. Définition et Fonction du fait divers :
Le fait divers est un genre journalistique narratif qui relate un événement insolite, tragique, spectaculaire ou remarquable de la vie quotidienne (accidents, délits, catastrophes naturelles, actes de bravoure). Sa fonction est d'informer avec vivacité le public tout en suscitant l'émotion ou la réflexion civique.

2. La Silhouette réglementaire de l'article à l'examen :
Sur la copie d'examen, l'article doit respecter une présentation visuelle soignée :
  - Le Titre : Court, percutant et accrocheur. Souvent sous forme de phrase nominale ou avec ponctuation expressive (ex: « Grave collision devant le collège : 2 blessés, 1 mort ! »).
  - Le Sous-titre (chapeau introductif) : Complète le titre en apportant les précisions majeures (lieu, bilan, circonstances).
  - Le Corps de l'article : Développé chronologiquement en paragraphes distincts (Avant le fait -> Le fait lui-même -> Les conséquences et suites).
  - La Signature : Mention obligatoire au bas de l'article, alignée à droite : « Le rédacteur » (ou « Le Club Journal »).

3. La Grille des 5W + Comment + Suites (Recherche des idées) :
Avant d'écrire, le candidat trace un tableau synoptique répondant aux questions :
  - QUI ? : Les protagonistes ou victimes impliqués (ex: quatre élèves, deux conducteurs de moto).
  - QUOI ? : La nature exacte du drame ou de l'exploit (ex: intoxication alimentaire, collision mortelle, braquage déjoué).
  - QUAND ? : La date et l'heure précises (ex: le mercredi 11 avril 2017 aux environs de 11h30).
  - OÙ ? : Le lieu géographique exact (ex: au foyer du lycée moderne de Bouaflé, au quartier Agbanou).
  - COMMENT ? : Le déroulement cinématique des faits (circonstances, gestes, vitesse, conditions climatiques).
  - POURQUOI ? : La cause première (imprudence, excès de vitesse, négligence sanitaire, défaillance technique).
  - QUELLES SUITES ? : Les conséquences immédiates (premiers secours, évacuation au CHR, constat de décès, ouverture d'une enquête de police, appel au civisme des autorités).

4. Les Outils linguistiques et stylistiques propres au journalisme :
- L'attaque : C'est la première phrase du texte. Elle doit captiver immédiatement le lecteur en résumant l'essentiel de l'événement (Qui, Quoi, Où, Quand).
- La voix passive : Omniprésente pour focaliser l'attention sur les victimes ou sur l'action plutôt que sur l'agent (ex: « Les victimes ont été évacuées par les sapeurs-pompiers », « Une enquête a été ouverte par le commissariat »).
- Le style indirect : Utilisé pour rapporter sobrement les propos des témoins sans interrompre le fil du récit (ex: « Un témoin horrifié affirmait que la moto roulait à tombeau ouvert »).
- Les temps verbaux :
  * Le passé composé (pour les faits principaux achevés et récents).
  * L'imparfait (pour décrire le cadre, le climat, les états d'esprit et les actions secondaires en cours).
  * Le plus-que-parfait (pour situer les causes antérieures au drame).
- Le lexique sensationnel et valorisant/dévalorisant : Choix d'adjectifs et d'adverbes expressifs pour dramatiser ou émouvoir (spectaculaire, effroyable, miraculé, sauvagement, providentiel).`,
    definitions: [
      {
        term: 'Fait divers',
        definition: 'Article de presse relatant un événement marquant, dramatique ou exceptionnel de la vie quotidienne non rattaché à l\'actualité politique générale.'
      },
      {
        term: 'Attaque journalistique',
        definition: 'Première phrase percutante d\'un article de presse chargée de capter l\'attention du lecteur et de poser les éléments clés du fait relaté.'
      },
      {
        term: 'Règle des 5W',
        definition: 'Méthode d\'investigation journalistique anglaise (Who, What, When, Where, Why) garantissant l\'exhaustivité de l\'information.'
      },
      {
        term: 'Chute de l\'article',
        definition: 'Dernière phrase ou paragraphe concluant l\'article par un constat moral, un rappel à la vigilance ou l\'annonce des poursuites judiciaires.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Position d\'énonciation du journaliste à l\'examen',
        statement: 'Le candidat doit préciser sa position dans l\'article : soit témoin oculaire direct ("nous avons assisté à..."), soit rapporteur neutre des faits.',
        explanation: 'Cette position détermine l\'angle narratif et la crédibilité des témoignages rapportés.'
      },
      {
        name: 'Règle de titrage informatif et incitatif',
        statement: 'Le titre d\'un fait divers ne doit pas être une phrase verbale ordinaire longue, mais une formule concise, nominalisée ou percutante.',
        explanation: 'Exemple correct : « Drame au carrefour CHR : une violente collision fait un mort ». Exemple incorrect : « Hier j\'ai vu deux motos qui se sont cognées ». '
      },
      {
        name: 'Interdiction de la justice populaire',
        statement: 'Dans les sujets abordant la délinquance, l\'article doit condamner la vindicte populaire et valoriser la remise des suspects aux forces de l\'ordre.',
        explanation: 'Critère civique et moral incontournable dans le barème officiel de l\'examen.'
      }
    ],
    formulas: [
      {
        name: 'Formule de construction du fait divers',
        formula: 'Article = Titre accrocheur + Attaque (5W) + Déroulement chronologique (Imparfait / Passé composé) + Conséquences & Enquête + Signature',
        explanation: 'Architecture standardisée évaluée au barème de l\'épreuve écrite du BEPC.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyse du sujet et rôle attribué',
        procedure: 'Repérer le rôle assigné par le libellé (membre du club journal, témoin oculaire, reporter pour la gazette de l\'école). Identifier l\'événement déclencheur.',
        tip: 'Vérifiez si le sujet impose un cadre particulier (cour de l\'école, quartier, rentrée des classes).'
      },
      {
        stepNumber: 2,
        title: 'Remplissage du tableau de recherche des idées (5W + 1H)',
        procedure: 'Compléter au brouillon le tableau : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ? Suites ?',
        tip: 'Veillez à insérer des détails précis et réalistes : noms de quartiers réels (Agbanou, Yopougon, Treichville), horaires réalistes (11h30, 18h).'
      },
      {
        stepNumber: 3,
        title: 'Rédaction du corps de l\'article et mise en page',
        procedure: '1. Rédiger le titre percutant. 2. Écrire l\'attaque intégrant les coordonnées majeures de l\'événement. 3. Dérouler les péripéties avec des verbes d\'action. 4. Exposer l\'intervention des secours (pompiers, police, corps médical). 5. Clore par une note d\'avertissement civique.',
        tip: 'N\'oubliez pas la signature "Le rédacteur" en bas à droite.'
      }
    ],
    examples: [
      {
        statement: 'Sujet officiel BEPC (Bouaflé) : Une après-midi, après le cours de français, survient une collision entre deux motos devant ton établissement faisant un mort et deux blessés. En tant que membre du club journal, rédige le fait divers.',
        solution: `Tableau de recherche des idées :
- Qui ? : Deux conducteurs de moto et une passagère (trois personnes).
- Quoi ? : Collision frontale brutale enregistrant deux blessés graves et un décès sur le coup.
- Où ? : Devant le portail principal du collège, sur l'axe traversant la commune.
- Quand ? : Le mardi 15 mai 2018 aux environs de 16h45, à la sortie des cours.
- Comment ? : Une moto roulant à vive allure a quitté son couloir pour éviter un nid-de-poule et a heurté de plein fouet l'autre engin venant en sens inverse.
- Suites ? : Évacuation d'urgence des deux blessés au CHR de la ville, transfert du corps sans vie à la morgue, enquête ouverte par le commissariat de police.

Article rédigé modèle :

GRAVE ACCIDENT DE LA CIRCULATION
« Collision mortelle de deux motos : 02 blessés graves, 01 mort devant le collège »

Une fin d'après-midi tragique s'est abattue hier sur notre communauté scolaire. Vers 16h45, à la sortie des cours de français, une violente collision entre deux engins à deux roues a fait un mort et deux blessés graves sur la chaussée bordant notre établissement.

En effet, l'imprudence notoire et l'excès de vitesse sont à l'origine de ce drame. Selon plusieurs témoins oculaires, le premier motocycliste, roulant à plus de 100 km/h, a brusquement déboîté sur la voie opposée pour contourner une béance causée par le passage récent de gros camions. Au même instant débouchait en face une seconde motocyclette dont le pilote n'a pu esquiver le choc frontal. Le fracas a été assourdissant. Projetée avec une extrême violence dans le caniveau bordant la clôture du collège, la jeune passagère est morte sur le coup d'un traumatisme crânien irréversible. Les deux motocyclistes, gisant dans leur sang et souffrant de multiples fractures ouvertes, ont poussé des gémissements d'agonie.

Alertés par les cris des élèves terrorisés, les secours et les forces de l'ordre se sont promptement déployés sur le théâtre de l'accident. Les deux blessés ont été admis d'urgence au Centre Hospitalier Régional, tandis que la dépouille de la jeune fille a été convoyée à la morgue municipale. Une enquête policière a été immédiatement ouverte pour déterminer les responsabilités exactes de cette hécatombe. Face à ce drame effroyable, il est grand temps que la municipalité installe des ralentisseurs aux abords de nos écoles et que les conducteurs prennent conscience que la vitesse tue.

Le rédacteur`
      }
    ],
    exercises: [
      {
        question: 'À l\'aide des éléments suivants, propose un titre journalistique percutant et une phrase d\'attaque : Quatre élèves ont été hospitalisés après avoir bu de la nourriture empoisonnée à l\'eau de Javel lors de l\'investiture du délégué scolaire.',
        correction: `1. Titres journalistiques possibles :
- « Drame de l'investiture : quatre collégiens empoisonnés à l'eau de Javel ! »
- « Intoxication criminelle à l'école : 3 élèves sauvés, 1 jeune fille succombe »

2. Phrase d'attaque modèle :
« Ce mercredi 11 avril 2017, la joie de l'investiture du délégué scolaire a viré au cauchemar dans notre établissement lorsqu'une mystérieuse intoxication alimentaire à l'eau de Javel a terrassé quatre élèves, causant la mort tragique de l'un d'entre eux sur le chemin de l'hôpital. »`
      },
      {
        question: 'Pourquoi la voix passive est-elle particulièrement recommandée dans la rédaction d\'un fait divers ? Donne deux phrases d\'illustration issues du milieu scolaire.',
        correction: `La voix passive permet de mettre en valeur le résultat de l'action ou les personnes qui la subissent (les victimes, les édifices) plutôt que l'auteur de l'action qui est parfois inconnu, indéterminé ou secondaire. Elle confère également un ton objectif et solennel à l'information.

Deux phrases d'illustration :
1. « Les trois cambrioleurs ont été interceptés et désarmés par les forces de sécurité avant d'être conduits au commissariat. »
2. « Une somme de deux millions de francs CFA a été dérobée dans le bureau de l'économe du collège pendant la récréation. »`
      }
    ],
    evaluationSituation: {
      context: 'Un soir, en rentrant d\'une séance de révision avec tes condisciples, vous assistez à l\'arrestation par des jeunes riverains d\'un récidiviste surnommé "Koloni-Kolo" qui tentait de défoncer la porte d\'un entrepôt commercial. Alors que la foule surexcitée menace de le lyncher, l\'intervention d\'un aîné permet de le ligoter et de le remettre sain et sauf à la patrouille de police. Tu rédiges l\'article pour la revue scolaire.',
      instructions: [
        '1. Dresse le tableau des 5W + Comment + Suites.',
        '2. Formule un titre nominal accrocheur.',
        '3. Rédige l\'article en valorisant le refus de la vindicte populaire et la confiance dans les institutions judiciaires.',
        '4. Conclus par la signature réglementaire.'
      ],
      solutionGuide: 'Le devoir doit respecter la silhouette de l\'article. Le titre doit être marquant (« Bouaflé : Un cambrioleur récidiviste mis hors d\'état de nuire par les riverains »). L\'attaque posera l\'heure (vers 18h30), le lieu (quartier Agbanou) et l\'événement. Le texte décrira la tentative d\'effraction, l\'arrestation citoyenne et insistera sur le sens civique des habitants qui ont refusé la justice sommaire pour livrer le coupable à la police.'
    },
    examTraps: [
      'Oublier de signer l\'article par "Le rédacteur" en bas à droite.',
      'Raconter l\'événement comme une simple rédaction sans donner de titre ni respecter la présentation journalistique.',
      'Faire l\'apologie de la justice populaire ou de la vengeance : le respect de la légalité républicaine est strictement noté.',
      'Omettre de préciser le lieu, la date et les circonstances exactes (règle des 5W).'
    ],
    quickMemo: 'Fait divers BEPC = Titre accrocheur en gras | Attaque percutante (Qui, Quoi, Où, Quand) | Déroulement chronologique (Comment, Pourquoi) | Bilan des secours & enquête policière (Voix passive) | Chute civique | Signature "Le rédacteur".',
    keywords: ['article de journal', 'fait divers', '5W', 'presse scolaire', 'voix passive', 'titre accrocheur', 'attaque journalistique', 'BEPC français']
  },

  // ========================================================
  // 3ÈME - LA DICTÉE-QUESTIONS ET MANIEMENT DE LA LANGUE (LEÇON 4)
  // ========================================================
  {
    id: 'fra-3e-dictee-questions-maniement-langue',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '3e',
    levelLabel: '3ème (Troisième - BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Collège 3ème (BEPC)',
    chapter: 'Grammaire & Orthographe : La Dictée-Questions',
    lessonTitle: 'Maîtrise de la Dictée-Questions et du Maniement de la Langue',
    objectifs: [
      'Connaître la structure de l\'épreuve de Dictée-Questions (Texte de dictée de 45 min + Questions de 1h15 portant sur Compréhension, Vocabulaire et Maniement de la langue)',
      'Maîtriser les règles fondamentales d\'accords orthographiques : accord sujet-verbe, accord du participe passé avec "être" et avec "avoir" (règle du COD antéposé), verbes pronominaux',
      'Distinguer et justifier la nature et la fonction des mots et groupes de mots (attribut du sujet, épithète, complément du nom, COD, COI, compléments circonstanciels)',
      'Effectuer avec succès les transformations syntaxiques : voix active <-> voix passive, discours direct <-> discours indirect, phrase affirmative <-> phrase négative',
      'Maîtriser la pronominalisation (le, la, les, lui, leur, en, y) et l\'expression des rapports logiques de cause, conséquence, but, opposition et temps par coordination et subordination',
      'Développer le vocabulaire : dérivation par préfixe et suffixe, synonymes et antonymes en contexte, homonymes et explications d\'expressions idiomatiques'
    ],
    fullCourseContent: `1. Organisation de l'épreuve à l'examen :
L'épreuve d'orthographe comprend deux phases complémentaires :
- Partie A : La Dictée (45 minutes - 10 points) : Texte littéraire de 10 à 15 lignes (auteurs africains ou universels : Amadou Koné, Abdoulaye Sadji, Claire Porquet, Sylvain Kéan Zoh, Fatou Kéita).
- Partie B : Les Questions (1h15 minutes - 10 points) subdivisées en :
  * I. Compréhension du texte (titre justificatif, sentiments des personnages, idées du passage).
  * II. Vocabulaire (synonymes, antonymes, homonymes, familles de mots, expressions figurées en contexte).
  * III. Maniement de la langue (grammaire, conjugaison, syntaxe et analyse logique).

2. Accords du participe passé : Les trois règles d'or :
- Règle 1 : Employé avec l'auxiliaire ÊTRE :
  * Le participe passé s'accorde toujours en genre et en nombre avec le SUJET du verbe.
  * Exemple : « Les terres étaient inondées » (terres : fém. plur. -> inondées).
- Règle 2 : Employé avec l'auxiliaire AVOIR :
  * Le participe passé ne s'accorde JAMAIS avec le sujet.
  * Il s'accorde en genre et en nombre avec le Complément d'Objet Direct (COD) UNIQUEMENT si celui-ci est placé AVANT le verbe.
  * Exemples :
    - « Espéranza avait balayé la cour » -> le COD "la cour" est placé APPRÈS -> pas d'accord (balayé).
    - « La cour qu'Espéranza avait balayée » -> le pronom relatif "que" (mis pour "la cour", fém. sing.) est COD placé AVANT -> accord (balayée).
    - « ...avec la vie que j'avais eue » -> "que" mis pour "la vie" (fém. sing.) est COD antéposé -> accord (eue).
- Règle 3 : Participes passés des verbes pronominaux :
  * Essentiellement pronominaux : accord avec le sujet (« elles se sont enfuies »).
  * Réfléchis ou réciproques : accord avec le pronom réfléchi s'il est COD antéposé (« elle s'est lavée ») ; pas d'accord s'il est COI (« ils se sont parlé »).

3. Transformation Passive / Active :
- Pour passer de la voix active à la voix passive :
  1. Le COD actif devient le Sujet passif.
  2. Le sujet actif devient le Complément d'agent introduit par "par" ou "de".
  3. Le verbe se conjugue avec l'auxiliaire ÊTRE au temps exact du verbe actif, suivi du participe passé qui s'accorde avec le nouveau sujet.
  * Tableau des correspondances de temps :
    - Présent : « Le maître punit l'élève » -> « L'élève est puni par le maître ».
    - Imparfait : « Le maître punissait l'élève » -> « L'élève était puni par le maître ».
    - Passé simple : « Le maître punit l'élève » -> « L'élève fut puni par le maître ».
    - Passé composé : « Le maître a puni l'élève » -> « L'élève a été puni par le maître ».
    - Plus-que-parfait : « Le féticheur avait jeté le mauvais sort » -> « Le mauvais sort avait été jeté par le féticheur ».
    - Futur simple : « Le chef jugera notre fille » -> « Notre fille sera jugée par le chef ».

4. La Pronominalisation (Substitution par des pronoms) :
- Remplacement du COD : pronoms "le", "la", "les" placés devant le verbe (« Il vit son voisin » -> « Il le vit »).
- Remplacement du COI introduit par "à" (personnes) : pronoms "lui", "leur" (« Il parla à son père » -> « Il lui parla »).
- Remplacement d'un groupe introduit par "de" (chose ou lieu de provenance) : pronom adverbial "en" (« La rivière était sortie de son lit » -> « La rivière en était sortie » ; « Il fournit du lait » -> « Il en fournit »).
- Remplacement d'un complément de lieu introduit par "à", "dans", "sur" ou d'un COI de chose : pronom "y" (« Ils étaient partis dans un monde sans retour » -> « Ils y étaient partis » ; « Il pensa à cette discipline » -> « Il y pensa »).

5. Rapports logiques et Subordination :
- La Cause :
  * Par coordination : car, en effet.
  * Par subordination : parce que, puisque, vu que, comme (en tête de phrase), étant donné que.
  * Exemple : « Papa s'est donné la mort parce qu'on lui a appris le décès de ses fils ».
- La Conséquence :
  * Par coordination : donc, par conséquent, ainsi.
  * Par subordination : si bien que, de sorte que, tellement... que, au point que.
  * Exemple : « La cour était noire de monde si bien qu'on fit sortir Malimouna ».
- Le But :
  * Par préposition + infinitif : pour, afin de, en vue de.
  * Par subordination (+ subjonctif) : afin que, pour que.
  * Exemple : « Les clubs réunissaient les jeunes afin qu'ils créent des liens de solidarité ».
- L'Opposition et la Concession :
  * Par coordination : mais, or, cependant, pourtant.
  * Par subordination (+ subjonctif) : bien que, quoique.
  * Par groupe prépositionnel : en dépit de, malgré (+ nom).
  * Exemple : « Quoiqu'elle ait tous ces biens, Nanty resta sobre et intègre ».`,
    definitions: [
      {
        term: 'Pronominalisation',
        definition: 'Opération syntaxique consistant à remplacer un groupe nominal (COD, COI, lieu) par le pronom personnel ou adverbial approprié afin d\'éviter les répétitions.'
      },
      {
        term: 'Complément d\'agent',
        definition: 'Fonction syntaxique du groupe de mots qui accomplit l\'action dans une phrase à la voix passive, généralement introduit par la préposition "par" ou "de".'
      },
      {
        term: 'Attribut du sujet',
        definition: 'Mot ou groupe de mots qui exprime une qualité ou un état attribué au sujet par l\'intermédiaire d\'un verbe d\'état (être, paraître, sembler, devenir, demeurer, rester).'
      },
      {
        term: 'Homonymes',
        definition: 'Mots qui se prononcent de la même façon (homophones) ou s\'écrivent de la même façon (homographes) mais qui ont des sens totalement différents (ex: sein, sain, saint).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'accord du participe passé avec avoir',
        statement: 'Le participe passé conjugué avec avoir s\'accorde uniquement si le COD est situé avant le verbe (antéposé). Si le COD est placé après ou s\'il n\'y a pas de COD, il reste invariable.',
        explanation: 'Dans "Les fleurs qu\'il a cueillies", le COD "que" (remplaçant les fleurs, fém. plur.) précède le verbe, donc accord en "-ies".'
      },
      {
        name: 'Transformation passive et conservation du temps',
        statement: 'Lors de la mise à la voix passive, l\'auxiliaire être doit impérativement être conjugué au même temps que celui du verbe actif d\'origine.',
        explanation: 'Si le verbe actif est au passé simple ("il prit"), le passif emploie le passé simple ("il fut pris").'
      },
      {
        name: 'Mode obligatoire après bien que et quoique',
        statement: 'Les conjonctions de subordination de concession "bien que" et "quoique" exigent obligatoirement l\'emploi du mode subjonctif.',
        explanation: 'On écrit "Quoiqu\'elle ait (subjonctif présent) de l\'argent", et jamais "Quoiqu\'elle a".'
      }
    ],
    formulas: [
      {
        name: 'Structure de la voix passive',
        formula: '\\text{Sujet passif} + [\\text{Être au temps du verbe actif}] + \\text{Participe Passé (accordé)} + \\text{"par"} + \\text{Complément d\'agent}',
        explanation: 'Permet de réussir infailliblement toutes les transformations passives à l\'examen.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Méthode d\'analyse grammaticale (Nature et Fonction)',
        procedure: '1. Déterminer la nature (ce que le mot est : nom commun, adjectif qualificatif, pronom personnel, verbe). 2. Déterminer la fonction (le rôle dans la phrase : sujet, attribut du sujet, COD, complément du nom, complément circonstanciel).',
        tip: 'Attention : un adjectif après un verbe d\'état (être, paraître, sembler) est toujours ATTRIBUT DU SUJET et jamais épithète.'
      },
      {
        stepNumber: 2,
        title: 'Méthode de pronominalisation sans erreur',
        procedure: '1. Identifier la fonction exacte du groupe souligné (COD, COI, Complément de lieu). 2. Choisir le pronom : le/la/les pour un COD direct ; lui/leur pour un COI animé introduit par "à" ; "en" pour un groupe introduit par "de" ; "y" pour un lieu ou une idée introduite par "à". 3. Placer le pronom devant le verbe.',
        tip: 'Dans « La rivière était sortie de son lit », "de son lit" est un complément de lieu introduit par "de" -> on remplace par "en" : « La rivière en était sortie ».'
      },
      {
        stepNumber: 3,
        title: 'Maniement des rapports logiques (Coordination vs Subordination)',
        procedure: 'Si la consigne demande la cause par coordination, employer "car". Si elle exige la subordination, employer "parce que" ou "puisque". Si elle demande la conséquence par coordination, employer "donc". Si elle demande la subordination, employer "si bien que" ou "tellement... que".',
        tip: 'Respectez scrupuleusement la consigne : ne donnez jamais une coordination quand une subordonnée est demandée !'
      }
    ],
    examples: [
      {
        statement: 'BEPC Blanc (Questions de langue) : Soit la phrase : « Le féticheur avait jeté le mauvais sort sur la région ». 1. Identifie la voix de la phrase. 2. Mets-la à la voix contraire.',
        solution: `1. Voix : La phrase est à la voix active (le sujet "Le féticheur" accomplit l'action de jeter).
2. Voix contraire (Voix passive) :
- Le verbe "avait jeté" est au plus-que-parfait de l'indicatif.
- L'auxiliaire "être" au plus-que-parfait donne "avait été".
- Le participe passé "jeté" s'accorde avec le nouveau sujet masculin singulier "Le mauvais sort".
Résultat : « Le mauvais sort avait été jeté sur la région par le féticheur ».`
      },
      {
        statement: 'BEPC 2012 Zone 3 : Soient les phrases P1 : « Je voyais mes camarades partir » et P2 : « Elles étaient dotées ». Relie ces deux phrases de manière à obtenir : a) une subordonnée de cause, b) une subordonnée de conséquence.',
        solution: `a) Proposition subordonnée de cause :
« Je voyais mes camarades partir parce qu'elles étaient dotées » (ou « puisque / étant donné qu'elles étaient dotées »).

b) Proposition subordonnée de conséquence :
« Elles étaient dotées si bien que je voyais mes camarades partir » (ou « Elles étaient dotées de sorte que / au point que je voyais mes camarades partir »).`
      }
    ],
    exercises: [
      {
        question: 'Pronominalise les groupes soulignés dans la phrase suivante : « Espéranza balaya la cour et rangea l\'arsenal dans la cuisine ».',
        correction: `Analyse :
- "la cour" est COD féminin singulier -> pronom "la" (ou "l'").
- "l'arsenal" est COD masculin singulier -> pronom "le" (ou "l'").
- "dans la cuisine" est un complément de lieu introduit par "dans" -> pronom adverbial "y".
Résultat pronominalisé :
« Espéranza la balaya et y rangea l'arsenal » (ou « et l'y rangea »).`
      },
      {
        question: 'Justifie l\'orthographe de "eue" et de "enfermés" dans la phrase : « ...avec la vie que j\'avais eue dans ces cellules où ils étaient enfermés ».',
        correction: `1. Justification de "eue" : "eue" est le participe passé du verbe avoir conjugué avec l'auxiliaire avoir au plus-que-parfait. Il s'accorde en genre et en nombre avec son Complément d'Objet Direct (COD) "que", mis pour l'antécédent "la vie" (nom féminin singulier), car celui-ci est placé AVANT le verbe. Donc accord au féminin singulier : "eue".
2. Justification de "enfermés" : "enfermés" est le participe passé du verbe enfermer conjugué avec l'auxiliaire être à l'imparfait ("étaient"). Il s'accorde en genre et en nombre avec le sujet "ils" (masculin pluriel). Donc accord au masculin pluriel : "enfermés".`
      },
      {
        question: 'Explique en contexte l\'expression « verser des larmes de crocodile » et donne deux mots de la même famille que « compatir ».',
        correction: `1. Explication en contexte : « Verser des larmes de crocodile » signifie manifester une fausse tristesse, feindre la douleur ou simuler des regrets hypocrites sans éprouver de compassion sincère.
2. Deux mots de la même famille que « compatir » :
- « Compassion » (nom commun)
- « Compatissant » ou « compatissante » (adjectif qualificatif).`
      }
    ],
    evaluationSituation: {
      context: 'À l\'examen du BEPC, on te soumet l\'extrait de dictée suivant : « La sirène mit fin à leur conversation. Mamadou et Séka travaillent d\'arrache-pied. Ils sont heureux de cette liberté retrouvée ». Les consignes de maniement de la langue te demandent de transformer des propositions, d\'identifier la nature et la fonction de mots, et de pronominaliser des compléments.',
      instructions: [
        '1. Donne la nature et la fonction du mot "heureux".',
        '2. Mets la phrase « La sirène mit fin à leur conversation » à l\'imparfait puis au passé antérieur de l\'indicatif.',
        '3. Relie par coordination les propositions « Mamadou et Séka travaillent dur » et « Ils veulent achever le pain » pour exprimer un rapport de cause, puis un rapport de conséquence.',
        '4. Trouve deux homonymes du mot "sein" et emploie-les dans une phrase.'
      ],
      solutionGuide: '1. "Heureux" : Nature = Adjectif qualificatif ; Fonction = Attribut du sujet "Ils". 2. Imparfait : « La sirène mettait fin à leur conversation ». Passé antérieur : « La sirène eut mis fin à leur conversation ». 3. Cause par coordination : « Mamadou et Séka travaillent dur car ils veulent achever le pain ». Conséquence par coordination : « Ils veulent achever le pain donc Mamadou et Séka travaillent dur ». 4. Homonymes de "sein" : "sain" (en bonne santé) et "saint" (sacré). Ex: Un esprit sain dans un corps sain ; Le saint homme bénit la foule.'
    },
    examTraps: [
      'Confondre la coordination (car, donc) et la subordination (parce que, si bien que) : respecter scrupuleusement le mot-outil demandé par la consigne.',
      'Oublier d\'accorder le participe passé quand le pronom COD "que", "les" ou "l\'" est placé devant le verbe avec avoir.',
      'Confondre épithète (collé au nom) et attribut du sujet (séparé du sujet par un verbe d\'état comme être, sembler, paraître, devenir).',
      'Faire une erreur de temps dans la transformation passive : toujours conjuguer "être" au temps primitif du verbe actif.'
    ],
    quickMemo: 'Dictée-Questions BEPC = Orthographe rigoureuse (accords être/avoir) | Analyse grammaticale (Nature & Fonction) | Pronominalisation (le/la/les/lui/leur/en/y) | Voix active <-> passive avec temps conservé | Subordination de cause, conséquence, but, opposition.',
    keywords: ['dictée-questions', 'orthographe BEPC', 'accord participe passé', 'voix passive', 'pronominalisation', 'subordonnée circonstancielle', 'attribut du sujet', 'vocabulaire en contexte', 'maniement de la langue']
  }
];
