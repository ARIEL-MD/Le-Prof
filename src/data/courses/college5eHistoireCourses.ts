import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_HISTOIRE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - HISTOIRE : THÈME 1 - LEÇON 1
  // ========================================================
  {
    id: 'hist-5e-premiers-habitants-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Le Peuplement de la Côte d\'Ivoire',
    lessonTitle: 'Les premiers habitants de la Côte d\'Ivoire : Pygmées, mythes d\'autochtonie et groupes proto-historiques',
    objectifs: [
      'Identifier les premiers occupants du territoire ivoirien : les Pygmées ou Négrilles (petits hommes rougeâtres, maîtres anciens de la terre, vivant de chasse, de cueillette et de pêche)',
      'Citer les appellations des Pygmées dans les traditions orales des peuples ivoiriens : Wocloni (chez les Malinké), Kakatika ou Angbè (chez les Baoulé et Agni), Assamangbé (chez les Attié et Abbey), Mandibélé (chez les Sénoufo), Yincan (chez les Toura)',
      'Définir et expliquer les mythes d\'autochtonie (récits légendaires par lesquels les premiers peuples légitiment leur droit du sol : sortis des eaux, descendus du ciel par une chaîne, sortis des montagnes ou des grottes)',
      'Identifier les 4 grands groupes proto-historiques : Proto-Akan, Proto-Mandé, Proto-Sénoufo/Koulango et Proto-Krou',
      'Localiser sur la carte de la Côte d\'Ivoire les premières ethnies et leur zone d\'occupation initiale',
      'Expliquer le destin historique de ces peuples primitifs : disparition physique, assimilation par les nouveaux migrants ou maintien résiduel'
    ],
    fullCourseContent: `1. Les Tout Premiers Occupants : Les Pygmées ou Négrilles :
- Toutes les traditions orales et les fouilles archéologiques concordent pour affirmer que la Côte d'Ivoire était habitée dès la préhistoire (Paléolithique et Néolithique) par des hommes de petite taille appelés Pygmées ou Négrilles.
- Caractéristiques physiques et mode de vie :
  * Petite taille (environ 1,40 m à 1,50 m), peau rougeâtre, chevelure abondante et selon les contes populaires des "pieds tournés vers l'arrière".
  * Mode de vie nomade en forêt dense : vivaient exclusivement de la chasse au gibier, de la cueillette de fruits sauvages et de la pêche dans les marigots.
- Dénominations dans les traditions orales des peuples ivoiriens :
  * Wocloni chez les Malinké
  * Kakatika ou Angbè chez les Baoulé et Agni
  * Assamangbé chez les Attié (Akyé) et Abbey
  * Mandibélé chez les Sénoufo
  * Yincan chez les Toura (Wenmebo)
Ces premiers habitants ont aujourd'hui disparu ou ont été complètement assimilés par les peuples arrivés plus tard.

2. Les Premières Ethnies et les Mythes d'Autochtonie :
- La notion d'autochtone : Est autochtone celui qui est issu du sol même où il vit, qui est le premier occupant légitime d'une terre.
- Les mythes d'autochtonie : Ne se souvenant pas d'une terre de provenance extérieure, ces peuples ont forgé des récits merveilleux et légendaires pour affirmer leur préséance et leur alliance sacrée avec les génies de la terre :
  * Sortis des eaux : les Ehotilé (autour de la lagune Aby).
  * Descendus du ciel au moyen d'une chaîne : les Agoua et les Krobou.
  * Sortis des montagnes et rochers : les Séhinon (dans la région des 18 Montagnes).

3. Les 4 Grands Groupes Proto-historiques et leur Localisation :
Avant les grandes vagues migratoires du XVe au XVIIIe siècle, le territoire ivoirien était occupé par quatre souches de peuples anciens :
- Les Proto-Akan (Sud-Est, Centre et Est) :
  * Ethnies : Asrin, Goli, Ehotilé (lagune Aby), Zéhiri (Grand-Lahou), Abèdjè, Agoua (Aboisso), Aïzi, Pèpèhiri, Krobou, Ananfo, Gbomi, Brékégomin.
- Les Proto-Mandé (Centre et Nord-Ouest) :
  * Ethnies : Gagou (ou Gban), Toura (ou Wenmebo), N'guin (ou N'gan), Mona.
- Les Proto-Sénoufo et Proto-Koulango (Nord et Nord-Est) :
  * Ethnies : Falafala (région de Kong), Myoro, Gouin, Lohoron, Nabé, Zazéré (autour de Bondoukou et Bouna).
- Les Proto-Krou (Sud-Ouest et Centre-Ouest, entre le Bandama et le Cavally) :
  * Ethnies : Magwé, Ega (ou Dyès, région de Divo), Séhinon, Pléhion, Nasso, Wè (Guéré et Wobé, autour de Man), Kotrowou (Fresco).

4. Destin Historique des Premiers Peuples :
- Beaucoup de ces groupes ont été assimilés linguistiquement et culturellement par les vagues massives de migrants arrivés ultérieurement (Akan récents, Malinké, Krou maritimes).
- Certains subsistent encore aujourd'hui avec leur identité propre : les Ehotilé, Agoua, Kotrowou, Zéhiri, Ega (Dyès), N'guin, Wè et Krobou.`,
    definitions: [
      {
        term: 'Autochtone',
        definition: 'Premier occupant historique d\'une région, qui n\'a pas souvenir d\'une origine extérieure et possède le droit d\'antériorité sur la terre.'
      },
      {
        term: 'Négrilles (ou Pygmées)',
        definition: 'Populations de petite taille reconnues par la mémoire orale comme les maîtres originels des forêts ivoiriennes.'
      },
      {
        term: 'Mythe d\'autochtonie',
        definition: 'Récit légendaire (sortie de l\'eau, descente du ciel, émergence de la montagne) destiné à légitimer l\'occupation originelle du sol.'
      },
      {
        term: 'Proto-histoire',
        definition: 'Période intermédiaire entre la préhistoire et l\'histoire écrite, où les peuples anciens sont connus grâce aux traditions orales et vestiges matériels.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe d\'antériorité du peuplement ivoirien',
        statement: 'La Côte d\'Ivoire n\'était pas un désert vide avant les migrations des XVe-XVIIIe siècles : elle comptait de nombreux peuples autochtones déjà installés.'
      },
      {
        name: 'Preuve de l\'existence des Négrilles',
        statement: 'La quasi-totalité des ethnies ivoiriennes partagent dans leur langue un nom précis désignant les anciens petits hommes de la forêt.'
      }
    ],
    formulas: [
      {
        name: 'Composition du peuplement originel',
        formula: '\\text{Peuplement ancien} = \\text{Pygmées} + \\text{4 Souches Proto-historiques (Akan, Mandé, Sénoufo, Krou)}',
        explanation: 'Fondement historique sur lequel se sont greffées les grandes vagues migratoires ultérieures.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Associer un peuple premier à son groupe proto-historique',
        procedure: '1. Repérer le nom de l\'ethnie ancienne. 2. Si c\'est Ehotilé, Zéhiri, Agoua, Krobou -> Proto-Akan. 3. Si c\'est Gagou/Gban, Toura, Mona -> Proto-Mandé. 4. Si c\'est Falafala, Lohoron, Myoro -> Proto-Sénoufo/Koulango. 5. Si c\'est Magwé, Ega/Dyès, Séhinon, Kotrowou, Wè -> Proto-Krou.',
        tip: 'Les Ega (Dyès) à Divo et les Kotrowou à Fresco sont des Proto-Krou entourés aujourd\'hui d\'autres groupes.'
      }
    ],
    examples: [
      {
        statement: 'Dans quel groupe classe-t-on les Falafala et où étaient-ils localisés ?',
        solution: 'Les Falafala appartiennent au groupe des Proto-Sénoufo. Ils étaient installés dans le Nord de la Côte d\'Ivoire, dans la région historique de Kong.'
      }
    ],
    exercises: [
      {
        question: 'Comment les Malinké, les Baoulé et les Sénoufo désignent-ils les Négrilles dans leurs langues respectives ?',
        correction: '- Chez les Malinké : Wocloni.\n- Chez les Baoulé : Kakatika (ou Angbè).\n- Chez les Sénoufo : Mandibélé.'
      },
      {
        question: 'Cite deux mythes d\'autochtonie et les peuples qui s\'y rattachent en Côte d\'Ivoire.',
        correction: '1. Sortis des eaux : le mythe des Ehotilé de la lagune Aby.\n2. Descendus du ciel avec une chaîne de fer : le mythe des Agoua et des Krobou.'
      }
    ],
    evaluationSituation: {
      context: 'Dans la cour de récréation, deux élèves de 5ème se disputent. L\'un soutient que la Côte d\'Ivoire était un pays complètement vide avant l\'arrivée des Baoulé avec la Reine Pokou au XVIIIème siècle. L\'autre affirme au contraire que de nombreux peuples vivaient déjà sur ces terres.',
      instructions: [
        '1. Dégage le problème historique soulevé par cette discussion.',
        '2. Nomme les tout premiers occupants du pays ainsi que les 4 groupes proto-historiques.',
        '3. Donne des arguments historiques et toponymiques pour prouver que le territoire était habité bien avant le XVIIIème siècle.'
      ],
      solutionGuide: '1. Le débat porte sur l\'ancienneté du peuplement de la Côte d\'Ivoire et la réalité de l\'autochtonie. 2. Les tout premiers occupants sont les Négrilles (Pygmées). Les 4 souches proto-historiques sont les Proto-Akan, Proto-Mandé, Proto-Sénoufo/Koulango et Proto-Krou. 3. Arguments : Les traditions orales de toutes les ethnies mentionnent les maîtres de la terre (Wocloni, Mandibélé, Assamangbé) ; des peuples comme les Ehotilé, les Magwé, les Gagou, les Falafala ou les Wè étaient déjà implantés depuis le premier millénaire avant Jésus-Christ ; les fouilles archéologiques ont mis au jour des haches et poteries néolithiques attestant d\'une occupation millénaire.'
    },
    examTraps: [
      'Affirmer que la Côte d\'Ivoire était une terre vierge avant les migrations du XVe siècle.',
      'Confondre autochtone (occupant originel du sol) et allochtone (venu d\'une autre région du même pays).',
      'Oublier les noms traditionnels donnés aux Pygmées par les ethnies ivoiriennes.'
    ],
    quickMemo: 'Pygmées/Négrilles (petits hommes rougeâtres : Wocloni, Kakatika, Mandibélé, Assamangbé) | Mythes : sortis de l\'eau (Ehotilé), du ciel (Agoua, Krobou), montagne (Séhinon) | 4 groupes : Proto-Akan (Ehotilé, Zéhiri), Proto-Mandé (Gagou, Toura), Proto-Sénoufo (Falafala), Proto-Krou (Magwé, Ega, Wè).',
    keywords: ['premiers habitants', 'pygmées', 'négrilles', 'mythes d\'autochtonie', 'proto-akan', 'proto-mandé', 'proto-krou', 'proto-sénoufo', 'Côte d\'Ivoire', '5e']
  },

  // ========================================================
  // 5ÈME - HISTOIRE : THÈME 1 - LEÇON 2
  // ========================================================
  {
    id: 'hist-5e-premiers-mouvements-migratoires-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Le Peuplement de la Côte d\'Ivoire',
    lessonTitle: 'Les premiers mouvements migratoires en Côte d\'Ivoire : Causes, flux et conséquences historiques',
    objectifs: [
      'Définir la migration comme le déplacement massif et durable d\'un groupe humain vers un nouveau territoire en vue de s\'y installer définitivement',
      'Identifier les causes politiques et militaires : déclin et dislocation des empires soudanais (Ghana, Mali, Songhaï, Sosso), guerres de conquête, querelles dynastiques de succession et insécurité causée par la traite négrière',
      'Identifier les causes économiques : ouverture de routes caravanières vers le Golfe de Guinée, recherche de l\'or, de la noix de cola, du sel, du gibier et de nouvelles terres agricoles fertiles',
      'Identifier les causes sociales et religieuses : famines, sécheresses, épidémies, pression démographique, expansion de l\'Islam et refus de conversion par les peuples animistes',
      'Dater et retracer les principaux flux migratoires : Sénoufo (Xè siècle), Mandé Sud [Yacouba, Gouro] (XIè-XIIIè siècle), Krou [du Libéria] (XIVè-XVè siècle), Mandé Nord [Malinké] (XVè-XVIè siècle), Akan [du Ghana] (XVIIè-XVIIIè siècle)',
      'Analyser les conséquences des migrations : politiques (royaumes de Kong, Kabadougou, Sanwi), économiques (centres commerciaux, métallurgie du fer, tissage, orpaillage en puits) et socio-culturelles (brassage, alliances interethniques / parentés à plaisanterie)'
    ],
    fullCourseContent: `1. Définition et Causes des Premiers Mouvements Migratoires :
- La migration est le déplacement collectif d'une communauté quittant sa région d'origine pour s'établir durablement dans une terre d'accueil.
- Le peuplement moderne de la Côte d'Ivoire résulte de vagues migratoires successives déclenchées par une conjonction de facteurs :
  * Causes Politiques et Militaires :
    - Déclin, démantèlement et effondrement des grands empires sahéliens et soudanais du Moyen Âge (Empire du Ghana, Empire du Mali, Empire Songhaï, Royaume de Sosso).
    - Guerres intestines sanglantes de conquête et luttes dynastiques de succession entre héritiers des trônes.
    - Représailles cruelles des souverains vainqueurs sur les populations vaincues.
    - Insécurité généralisée provoquée par les razzias esclavagistes de la traite négrière arabo-musulmane au Nord et européenne sur le littoral atlantique.
  * Causes Économiques :
    - Volonté d'ouvrir de nouvelles pistes commerciales vers la forêt et le Golfe de Guinée.
    - Recherche de denrées hautement prisées : la noix de cola, l'or, les épices, le sel marin et l'ivoire.
    - Quête de terres arables fertiles et humides pour cultiver et de forêts giboyeuses pour la chasse.
  * Causes Sociales et Religieuses :
    - Fléaux naturels dévastateurs : sécheresses prolongées, grandes famines sahéliennes et épidémies.
    - Pression démographique obligeant les cadets sociaux et clans subalternes à émigrer.
    - Expansion militaire et religieuse de l'Islam dans la boucle du Niger et fuite délibérée des populations animistes (Toura, Dan, Sénoufo) désireuses de préserver leurs croyances et cultes ancestraux.

2. Les Principaux Flux Migratoires et leur Chronologie :
Les vagues migratoires se sont déployées sur plusieurs siècles :
- Dans la Zone Nord :
  * Xème siècle : Les Sénoufo (Gur/Voltaïques), venant de l'actuel Mali et du Burkina Faso, s'établissent dans les savanes septentrionales entre Odienné, Korhogo et Bondoukou.
  * XIème - XIIIème siècle : Les Mandé Sud (Dan/Yacouba, Gouro, Toura, Wan), refoulés du Nord, pénètrent en Côte d'Ivoire et repoussent les Sénoufo vers le Nord et l'Est avant de s'établir dans le Centre-Ouest et l'Ouest montagneux.
  * XVème - XVIème siècle : Les Mandé Nord (Malinké, Dioula), issus de la désagrégation de l'Empire du Mali, pénètrent dans le Nord-Ouest ivoirien (Kabadougou, Worodougou) et repoussent à leur tour les Mandé Sud vers les forêts du Sud.
- Dans la Zone Ouest :
  * XIVème - XVème siècle : Les Krou (Bété, Dida, Guéré, Wobé, Neyo, Bakwé, Kroumen) quittent l'actuel Libéria par vagues successives. Sous la poussée conjointe des Mandé Sud, ils s'installent dans les forêts denses du Sud-Ouest et du Centre-Ouest.
- Dans la Zone Centre, Est et Sud :
  * XVIIème - XVIIIème siècle : Les Akan (Agni, Baoulé, Abron, Alladian, Ebrié, Attié, Nzima), fuyant les guerres de l'Empire Ashanti et de Denkyira en Gold Coast (actuel Ghana), franchissent la frontière orientale et s'établissent dans l'Est, le Centre et le cordon lagunaire du Sud.

3. Les Conséquences Historiques des Migrations :
- Conséquences Politiques :
  * Soumission ou assimilation des premiers occupants autochtones (Pygmées et Proto-ethnies).
  * Disparition des micro-organisations claniques primitives au profit de puissantes entités étatiques centralisées : l'Empire de Kong (fondé par Sékou Ouattara), le Royaume du Kabadougou (Odienné), le Royaume Abron de Bondoukou, le Royaume Baoulé du Sakassou et le Royaume du Sanwi (Krindjabo).
  * Fixation définitive des frontières coutumières des terroirs.
- Conséquences Économiques :
  * Émergence de florissants carrefours commerciaux de transit transsaharien : Kong, Bouna, Odienné, Bondoukou.
  * Transfert et diffusion de technologies artisanales remarquables : métallurgie et travail du fer à la forge, tissage traditionnel du coton (pagnes baoulé et sénoufo), travail du cuir, sculpture sur bois et ivoire.
  * Introduction de techniques sophistiquées d'extraction minière de l'or par puits profonds et galeries souterraines.
- Conséquences Sociales et Culturelles :
  * Brassage ethnique et interpénétration des populations créant la trame de la nation ivoirienne.
  * Naissance d'alliances sacrées interethniques et de parentés à plaisanterie (Toungan / Sinankouya) scellant des pactes de non-agression durables (ex : Gouro et Sénoufo, Yacouba et Baoulé, Dida et Attié).
  * Emprunts linguistiques réciproques, transferts de danses, de rituels et de coutumes.`,
    definitions: [
      {
        term: 'Migration',
        definition: 'Déplacement volontaire ou forcé d\'un peuple quittant son territoire d\'origine pour s\'implanter définitivement dans une nouvelle région.'
      },
      {
        term: 'Alliances interethniques (Parenté à plaisanterie)',
        definition: 'Pactes ancestraux sacrés de concorde et de non-agression conclus entre deux peuples pour désamorcer les conflits et interdire l\'effusion de sang.'
      },
      {
        term: 'Brassage culturel',
        definition: 'Processus d\'interpénétration, d\'échanges mutuels et de métissage linguistique et rituel entre communautés différentes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Chronologie des vagues migratoires en Côte d\'Ivoire',
        statement: 'Sénoufo (Xè s.) -> Mandé Sud (XIè s.) -> Krou (XIVè-XVè s.) -> Mandé Nord (XVè s.) -> Akan (XVIIè-XVIIIè s.).'
      },
      {
        name: 'Règle des alliances de paix',
        statement: 'Les alliances interethniques constituent un code d\'honneur traditionnel interdisant la guerre et obligeant l\'assistance mutuelle.'
      }
    ],
    formulas: [
      {
        name: 'Origines géographiques des grands groupes',
        formula: '\\text{Peuplement} = \\text{Nord (Mali/Burkina)} + \\text{Ouest (Libéria)} + \\text{Est (Ghana)}',
        explanation: 'Convergence des trois directions géographiques majeures ayant forgé la diversité ethnoculturelle ivoirienne.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Classer les causes d\'un mouvement migratoire historique',
        procedure: '1. Identifier les conflits armés, chutes d\'empires, traites négrières -> Causes politiques et militaires. 2. Identifier le commerce, l\'or, la cola, la recherche de terres -> Causes économiques. 3. Identifier les famines, sécheresses, épidémies, fuite face à l\'Islam -> Causes sociales et religieuses.',
        tip: 'La recherche de l\'or et de la cola était la principale motivation des marchands dioula.'
      }
    ],
    examples: [
      {
        statement: 'Classe les événements suivants selon leur nature de cause migratoire : déclin de l\'Empire du Mali, grande famine au Sahel, refus de l\'islamisation par les Dan, recherche de gisements d\'or.',
        solution: '- Cause politique : Déclin de l\'Empire du Mali.\n- Cause sociale : Grande famine au Sahel.\n- Cause religieuse : Refus de l\'islamisation par les Dan.\n- Cause économique : Recherche de gisements d\'or.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la période d\'arrivée des Akan en Côte d\'Ivoire et d\'où venaient-ils ?',
        correction: 'Les Akan sont arrivés entre le XVIIème et le XVIIIème siècle en provenance de la Gold Coast (actuel Ghana), fuyant les guerres contre l\'Empire Ashanti et Denkyira.'
      },
      {
        question: 'Cite trois conséquences économiques des migrations en Côte d\'Ivoire.',
        correction: '1. Le développement de grandes villes carrefours commerciaux comme Kong, Bouna et Odienné.\n2. L\'essor de l\'artisanat spécialisé (forge, tissage, sculpture du bois et du cuir).\n3. L\'introduction de techniques minières d\'extraction de l\'or par puits et galeries.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un rassemblement pour la fête de l\'indépendance, le Préfet déclare dans son discours : « La Côte d\'Ivoire est une terre de convergence, de paix et de brassage. Sa véritable richesse réside dans sa tradition d\'hospitalité héritée des multiples migrations qui ont fondé nos alliances interethniques ». Deux lycéens s\'interrogent sur le sens de ces paroles.',
      instructions: [
        '1. Dégage le sujet historique central abordé par le Préfet.',
        '2. Montre par des exemples précis que les peuples ivoiriens sont venus d\'horizons géographiques divers.',
        '3. Explique comment les migrations passées ont favorisé la cohésion nationale à travers la parenté à plaisanterie.'
      ],
      solutionGuide: '1. Le sujet porte sur la formation historique du peuple ivoirien par les migrations et la naissance des liens de solidarité intercommunautaires. 2. Horizons divers : Les Sénoufo et Mandé sont venus du Nord (Mali, Burkina Faso) ; les Krou sont venus de l\'Ouest (Libéria) ; les Akan sont venus de l\'Est (Ghana). 3. Cohésion nationale : Pour mettre fin aux guerres et rivalités de territoire, les peuples ont scellé des pactes sacrés appelés alliances à plaisanterie ou parentés à plaisanterie (ex : Sénoufo-Gouro, Baoulé-Yacouba, Attié-Dida). Ces pactes obligent à la solidarité mutuelle, désamorcent les colères par l\'humour et interdisent formellement de verser le sang de l\'allié.'
    },
    examTraps: [
      'Confondre la période d\'arrivée des Sénoufo (Xè s.) avec celle des Akan (XVIIè-XVIIIè s.).',
      'Penser que les Krou sont venus du Ghana (ils sont originaires de l\'actuel Libéria).',
      'Réduire les causes de migration aux seules guerres en oubliant le commerce de la cola et de l\'or.'
    ],
    quickMemo: 'Causes : politiques (chute empires Mali/Ghana, guerres), économiques (or, cola, terres), sociales (famines, sécheresses), religieuses (fuite islamisation) | Vagues : Sénoufo (Xè s.), Mandé Sud (XIè s.), Krou (XIVè s.), Mandé Nord (XVè s.), Akan (XVIIè-XVIIIè s.) | Conséquences : royaumes (Kong, Sanwi), villes, métallurgie, alliances à plaisanterie.',
    keywords: ['migrations', 'causes des migrations', 'flux migratoires', 'Sénoufo', 'Mandé', 'Krou', 'Akan', 'brassage culturel', 'alliances interethniques', '5e']
  },

  // ========================================================
  // 5ÈME - HISTOIRE : THÈME 2 - LEÇON 1
  // ========================================================
  {
    id: 'hist-5e-peuples-district-autonome-abidjan',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Évolution et traits de civilisation des peuples de ma région',
    lessonTitle: 'L\'origine et l\'installation des peuples des régions de Côte d\'Ivoire : Le cas du District Autonome d\'Abidjan',
    objectifs: [
      'Présenter le District Autonome d\'Abidjan : situation géographique au Sud, limites territoriales (Océan Atlantique au Sud, Sud-Comoé/La Mé à l\'Est, Agnéby-Tiassa au Nord, Grands Ponts à l\'Ouest) et ses 13 communes (Abobo, Adjamé, Anyama, Attécoubé, Bingerville, Cocody, Koumassi, Marcory, Plateau, Port-Bouët, Songon, Treichville, Yopougon)',
      'Identifier et localiser les trois peuples autochtones du District d\'Abidjan : les Akyé (Anyama, Abobo : Agnissankoi, Akéikoi), les Ebrié ou Tchaman (Bingerville, Anono, Blokhauss, M\'Badon, M\'Pouto, Anoumambo, Kouté, Songon) et les M\'Batto (Brofodoumé)',
      'Expliquer l\'origine et les circonstances de leur installation : migrations du XVIIème et XVIIIème siècle en provenance de la Gold Coast (actuel Ghana) fuyant les guerres fratricides et la traite négrière',
      'Analyser la recomposition et la diversification démographique : installation des peuples allochtones (Ivoiriens des autres régions : Baoulé, Malinké, Sénoufo, Bété...) et des peuples allogènes/étrangers (Burkinabé, Maliens, Guinéens, Nigériens, Nigérians, Libanais)',
      'Caractériser le District d\'Abidjan comme un espace cosmopolite et multiethnique'
    ],
    fullCourseContent: `1. Présentation Géographique et Administrative du District Autonome d'Abidjan :
- Statut : Le District Autonome d'Abidjan est l'une des 14 entités déconcentrées et décentralisées que compte la Côte d'Ivoire. Il est administré par un Ministre-Gouverneur.
- Localisation et Limites :
  * Situé au Sud du pays en bordure du Golfe de Guinée.
  * Limité au Sud par l'Océan Atlantique ;
  * À l'Est par la région du Sud-Comoé (Grand-Bassam) et la région de La Mé (Alépé) ;
  * Au Nord par la région de l'Agnéby-Tiassa (Sikensi, Agboville) ;
  * À l'Ouest par la région des Grands Ponts (Dabou, Jacqueville).
- Composition territoriale : Il regroupe 13 communes urbaines et périurbaines : Abobo, Adjamé, Anyama, Attécoubé, Bingerville, Cocody, Koumassi, Marcory, Plateau (centre des affaires et des ministères), Port-Bouët (aéroport et littoral), Songon, Treichville et Yopougon (la plus vaste et peuplée).

2. Les Peuples Autochtones du District : Identification et Localisation :
Trois peuples constituent le substrat autochtone historique de la région abidjanaise :
- Les Ebrié (ou Tchaman) :
  * Peuple lagunaire vivant traditionnellement de la pêche et de l'agriculture.
  * Localisés dans les villages historiques intégrés à la métropole : Blokhauss, Anono, M'Pouto, M'Badon (commune de Cocody), Kouté, Santé, Petit-Yopougon (commune de Yopougon), Anoumambo (commune de Marcory), Bingerville et toute la sous-préfecture de Songon (Songon-Agban, Songon-Kassemblé).
- Les Akyé (ou Attié) :
  * Peuple forestier du groupe Akan septentrional.
  * Localisés au Nord du district : sous-préfecture d'Anyama et quartiers historiques d'Abobo (Agnissankoi, Akéikoi, Abobo-Baoulé).
- Les M'Batto (ou Gwa) :
  * Petit groupe lagunaire apparenté, localisé dans la sous-préfecture de Brofodoumé.

3. Le Processus Historique de Peuplement Ancien :
- Les peuples autochtones du district d'Abidjan ne sont pas apparus spontanément sur le littoral : ils sont arrivés par des vagues migratoires successives entre la deuxième moitié du XVIIème siècle et le XVIIIème siècle.
- Origine : Ils sont originaires de la Gold Coast (actuel Ghana).
- Causes du départ : Les guerres dévastatrices au sein du monde Akan (expansion militaire des Ashanti, défaite d'Agnuangnuan, désagrégation du royaume Denkyira) et la crainte absolue d'être réduits en esclavage. Les Ebrié (Tchaman), fraction émigrée des Abron en provenance de Koumassi, ont marché vers l'Ouest le long du cordon lagunaire pour trouver refuge autour de la lagune qui porte aujourd'hui leur nom.

4. La Recomposition Récente : Une Métropole Cosmopolite :
Depuis l'époque coloniale et surtout après l'indépendance de 1960 avec le miracle économique ivoirien, la population du district d'Abidjan s'est métamorphosée :
- Les Peuples Allochtones :
  * Ivoiriens originaires des autres régions de l'intérieur du pays (Baoulé, Agni, Malinké, Sénoufo, Bété, Dida, Yacouba, Guéré...) attirés par l'école, l'université, l'emploi et le commerce.
- Les Peuples Allogènes (Communautés Étrangères) :
  * Ressortissants de la CEDEAO et d'ailleurs : Burkinabé, Maliens, Guinéens, Nigériens, Béninois, Togolais, Nigérians, Libanais, Européens.
- Conséquence : Aujourd'hui, les peuples autochtones (Ebrié, Akyé, M'Batto) sont devenus démographiquement minoritaires dans leur propre terroir d'origine. Le district autonome d'Abidjan est devenu une mégapole cosmopolite, multiculturelle et dynamique.`,
    definitions: [
      {
        term: 'District Autonome',
        definition: 'Entité territoriale administrative spéciale regroupant plusieurs communes sous l\'autorité d\'un Ministre-Gouverneur.'
      },
      {
        term: 'Autochtone du District',
        definition: 'Membre d\'une des trois ethnies originelles installées historiquement sur le site d\'Abidjan (Ebrié, Akyé, M\'Batto).'
      },
      {
        term: 'Allochtone',
        definition: 'Personne ivoirienne installée dans une région ou localité dont elle n\'est pas originaire.'
      },
      {
        term: 'Allogène',
        definition: 'Personne de nationalité étrangère établie dans le pays ou la région d\'accueil.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Triptyque autochtone d\'Abidjan',
        statement: 'Les trois peuples autochtones du District d\'Abidjan sont les Ebrié (Tchaman), les Akyé (Attié) et les M\'Batto.'
      },
      {
        name: 'Composition communale',
        statement: 'Le District Autonome d\'Abidjan compte exactement 13 communes administratives.'
      }
    ],
    formulas: [
      {
        name: 'Structure du peuplement d\'Abidjan',
        formula: '\\text{Population d\'Abidjan} = \\text{Autochtones (Ebrié, Akyé, M\'Batto)} + \\text{Allochtones (Ivoiriens de l\'intérieur)} + \\text{Allogènes (Étrangers)}',
        explanation: 'Reflète le caractère cosmopolite et multiethnique de la métropole économique.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier le statut démographique d\'un habitant d\'Abidjan',
        procedure: '1. S\'il appartient à la communauté Ebrié, Akyé d\'Anyama ou M\'Batto -> Autochtone. 2. S\'il est Ivoirien originaire de Bouaké, Korhogo, Daloa ou Man (Baoulé, Malinké, Sénoufo, Bété) -> Allochtone. 3. S\'il est étranger (Burkinabé, Guinéen, Libanais) -> Allogène.',
        tip: 'Les villages Ebrié comme Anono ou Blokhauss sont enclavés au cœur des communes urbanisées.'
      }
    ],
    examples: [
      {
        statement: 'Classe les résidents suivants d\'Abidjan : un pêcheur ébrié d\'Anono, un étudiant baoulé de Yamoussoukro, un commerçant burkinabé.',
        solution: '- Le pêcheur ébrié est un autochtone du district.\n- L\'étudiant baoulé est un allochtone.\n- Le commerçant burkinabé est un allogène (étranger).'
      }
    ],
    exercises: [
      {
        question: 'Cite les limites géographiques du District Autonome d\'Abidjan au Sud, à l\'Est, au Nord et à l\'Ouest.',
        correction: '- Sud : Océan Atlantique.\n- Est : Régions du Sud-Comoé (Grand-Bassam) et de La Mé (Alépé).\n- Nord : Région de l\'Agnéby-Tiassa (Agboville, Sikensi).\n- Ouest : Région des Grands Ponts (Dabou, Jacqueville).'
      },
      {
        question: 'Pourquoi les peuples autochtones d\'Abidjan sont-ils aujourd\'hui minoritaires en nombre dans leur région ?',
        correction: 'Parce que le développement économique extraordinaire de la capitale et ses opportunités (port, usines, universités, commerces) ont attiré des millions d\'Ivoiriens de l\'intérieur (allochtones) et d\'immigrants de la sous-région (allogènes).'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les audiences foraines d\'établissement de pièces d\'identité, M. Mobio, habitant du village de M\'Pouto, affirme être autochtone d\'Abidjan. Un citoyen né à Abobo conteste son propos en prétendant que tous les habitants d\'Abidjan sont des étrangers venus de l\'intérieur ou de l\'étranger.',
      instructions: [
        '1. Nomme le problème identitaire et historique soulevé.',
        '2. Donne raison ou tort à M. Mobio en justifiant ton point de vue historique.',
        '3. Décris l\'histoire migratoire des ancêtres de M. Mobio et cite les deux autres peuples autochtones du district.'
      ],
      solutionGuide: '1. Il s\'agit de la reconnaissance de l\'autochtonie des peuples originels du District d\'Abidjan. 2. M. Mobio a parfaitement raison : le village de M\'Pouto est un village historique Ebrié (Tchaman), et les Ebrié sont les maîtres originels du littoral abidjanais. 3. Les ancêtres Ebrié sont arrivés entre le XVIIe et le XVIIIe siècle depuis la Gold Coast (Ghana actuel) pour fuir les guerres Akan et l\'esclavage. Les deux autres peuples autochtones du district sont les Akyé (autour d\'Anyama et Abobo) et les M\'Batto (à Brofodoumé).'
    },
    examTraps: [
      'Penser qu\'Abidjan n\'a pas de peuples autochtones sous prétexte que c\'est une grande ville moderne.',
      'Confondre allochtone (ressortissant ivoirien d\'une autre région) et allogène (ressortissant étranger).',
      'Oublier de mentionner les Akyé et les M\'Batto aux côtés des Ebrié.'
    ],
    quickMemo: 'District Abidjan (13 communes, limité par Océan, Sud-Comoé, Mé, Agnéby-Tiassa, Grands Ponts) | 3 autochtones : Ebrié (Anono, Blokhauss, M\'Pouto, Songon), Akyé (Anyama, Abobo), M\'Batto (Brofodoumé) | Origine : Ghana (XVIIè-XVIIIè s.) | Cosmopolite avec allochtones et allogènes.',
    keywords: ['District d\'Abidjan', 'Ebrié', 'Tchaman', 'Akyé', 'M\'Batto', 'autochtones', 'allochtones', 'allogènes', 'cosmopolite', '5e']
  },

  // ========================================================
  // 5ÈME - HISTOIRE : THÈME 2 - LEÇON 2
  // ========================================================
  {
    id: 'hist-5e-traits-civilisation-regions-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Évolution et traits de civilisation des peuples de ma région',
    lessonTitle: 'Les traits de civilisation des peuples des différentes régions de Côte d\'Ivoire : Aires culturelles et patrimoine',
    objectifs: [
      'Définir la civilisation comme l\'ensemble des modes de vie, des croyances, des institutions, des mœurs, des us et coutumes d\'un peuple',
      'Définir une aire culturelle comme un espace géographique regroupant des peuples partageant les mêmes traditions, institutions et traits culturels',
      'Étudier en détail les traits culturels de l\'aire Mandé Nord (exemple de la région du Worodougou : départements de Séguéla et Kani, peuple Koyaka) : organisation politique monarchique villageoise (chef de village et conseil de notables), économie de commerce, agriculture et chasse, structure sociale patrilinéaire et domination de l\'Islam',
      'Comparer les traits des 4 grandes aires culturelles ivoiriennes : Akan (succession matrilinéaire de l\'oncle au neveu, royautés centralisées, fête des ignames), Lagunaires (démocratie des classes d\'âges : Fatchué chez les Ebrié avec Dougbo, Tchagba, Blessoué, Niando, fête de l\'Abissa), Krou (lignages patrilinéaires, culte des masques Gla), Voltaïques/Gur (initiation du Poro / Tchologo)',
      'Expliquer l\'importance de préserver et promouvoir le patrimoine culturel régional et national (rôle des musées du Plateau et des Costumes de Grand-Bassam, foires, transmission par les anciens et slogans valorisants)'
    ],
    fullCourseContent: `1. Civilisation et Aire Culturelle :
- La Civilisation est la manière d'être, de penser et d'agir propre à une communauté humaine. Elle englobe ses croyances religieuses, son organisation politique, sa langue, son art, sa gastronomie et ses coutumes.
- Une Aire Culturelle est un espace géographique sur lequel vivent des peuples unis par des affinités linguistiques, des valeurs spirituelles et des institutions sociales communes.
- La Côte d'Ivoire compte 4 grandes aires culturelles traditionnelles : l'aire Mandé (Nord et Sud), l'aire Gur/Voltaïque, l'aire Krou et l'aire Akan (comprenant les Lagunaires).

2. Étude de Cas : L'Aire Culturelle des Mandé Nord (Région du Worodougou) :
La région du Worodougou (départements de Séguéla et Kani), habitée notamment par les Koyaka :
- Au plan politique :
  * Organisation politique de type monarchique tempérée.
  * La société est structurée en villages autonomes dirigés par un Chef de village issu d'une lignée fondatrice, assisté d'un Conseil de notables représentant les grandes familles.
- Au plan économique :
  * Activité séculaire de commerce caravanier (marchands Dioula sillonnant les pistes de la kola et du bétail).
  * Agriculture vivrière (igname, maïs, mil) et de rente (anacarde/noix de cajou, coton) associée à la chasse traditionnelle par les Dozos.
- Au plan social et religieux :
  * Régime de filiation patrilinéaire : l'héritage, le nom patronymique et les droits coutumiers se transmettent exclusivement de père en fils.
  * Société hiérarchisée comprenant des hommes libres et des castes d'artisans professionnels (forgerons, cordonniers, griots).
  * Religion dominante : l'Islam sunnite, avec une persistance de pratiques animistes protectrices et une présence chrétienne.

3. Comparaison avec les Autres Aires Culturelles Ivoiriennes :
- L'Aire Culturelle Akan (Baoulé, Agni, Abron) :
  * Pouvoir politique fortement hiérarchisé et centralisé en chefferies et royaumes (Trône d'or / Bia).
  * Système de succession matrilinéaire : l'héritage et la succession royale passent de l'oncle au neveu maternel (fils de la sœur).
  * Attribution du prénom en fonction du jour de naissance (Kouassi = dimanche, Kodjo = lundi, Yao = jeudi, Koffi = vendredi...).
- L'Aire Culturelle des Lagunaires (Ebrié, Adjoukrou, Alladian, Attié) :
  * Organisation politique démocratique collégiale sans roi héréditaire.
  * Institution fondamentale des classes d'âges (Fatchué chez les Ebrié) : chaque génération accède collectivement à la gestion de la communauté. Chez les Ebrié, on compte 4 grandes classes : Dougbo, Tchagba, Blessoué et Niando, renouvelées tous les 16 ans.
  * Fêtes traditionnelles et danses rituelles : l'Abissa chez les Nzima de Grand-Bassam, le Fakwé, la fête de génération.
- L'Aire Culturelle Krou (Bété, Guéré, Dida, Kroumen) :
  * Société lignagère égalitaire et patrilinéaire.
  * Puissance mystique et artistique des masques sacrés (ex : masque Gla de l'Ouest) servant de régulateurs sociaux et de juges suprêmes.
- L'Aire Culturelle Voltaïque / Gur (Sénoufo, Lobi, Koulango) :
  * Initiation sacrée du Poro (chez les Sénoufo) ou Tchologo : cycle initiatique d'apprentissage de la vie, de la sagesse et des secrets du bois sacré pendant 21 ans (3 phases de 7 ans).

4. Préservation et Promotion du Patrimoine Culturel :
- Pourquoi préserver ? La modernité, l'exode et la mondialisation menacent de faire disparaître les langues maternelles et les traditions orales.
- Actions concrètes de préservation :
  * Encourager les anciens à raconter et transmettre leurs savoirs aux jeunes générations.
  * Participer assidûment aux cérémonies coutumières, fêtes de génération et festivals locaux.
  * Visiter les musées nationaux : le Musée des Civilisations de Côte d'Ivoire au Plateau et le Musée National du Costume à Grand-Bassam.
- Slogans de promotion citoyenne :
  * « Un homme sans culture est un homme perdu ! »
  * « Connaître ses us et coutumes, c'est faire preuve de patriotisme ! »
  * « Tu aimes ton pays ? Alors retourne à tes sources ! »`,
    definitions: [
      {
        term: 'Civilisation',
        definition: 'Ensemble des traits spirituels, matériels, intellectuels et affectifs caractérisant une société ou un groupe social.'
      },
      {
        term: 'Aire culturelle',
        definition: 'Espace géographique au sein duquel les populations partagent des traits culturels et des institutions sociales similaires.'
      },
      {
        term: 'Régime matrilinéaire',
        definition: 'Système de parenté où l\'héritage des biens et les titres se transmettent de l\'oncle maternel à ses neveux (côté de la mère).'
      },
      {
        term: 'Classes d\'âges (Fatchué)',
        definition: 'Institution démocratique des peuples lagunaires regroupant les individus nés dans un intervalle de temps donné pour assumer la gestion de la communauté.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distinction Matrilinéaire vs Patrilinéaire',
        statement: 'Les Akan transmettent traditionnellement l\'héritage par la lignée maternelle (oncle à neveu), tandis que les Mandé et Krou le font par la lignée paternelle (père à fils).'
      },
      {
        name: 'Gouvernance lagunaire par les générations',
        statement: 'Chez les peuples lagunaires, le pouvoir politique est exercé à tour de rôle par des classes d\'âge successives initiées.'
      }
    ],
    formulas: [
      {
        name: 'Composantes d\'une culture régionale',
        formula: '\\text{Identité culturelle} = \\text{Système politique} + \\text{Système de parenté} + \\text{Économie} + \\text{Rites & Rituels}',
        explanation: 'Ensemble cohérent définissant l\'originalité de chaque aire culturelle de Côte d\'Ivoire.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier l\'organisation sociale selon l\'aire culturelle',
        procedure: '1. Repérer le peuple. 2. Si c\'est Baoulé ou Agni -> Succession matrilinéaire, royauté. 3. Si c\'est Ebrié ou Adjoukrou -> Classes d\'âges (Fatchué), système démocratique. 4. Si c\'est Koyaka/Malinké -> Succession patrilinéaire, chefferie monarchique, Islam. 5. Si c\'est Sénoufo -> Bois sacré, Poro.',
        tip: 'Le mot "neveu héritier" renvoie immédiatement au système matrilinéaire Akan.'
      }
    ],
    examples: [
      {
        statement: 'Koffi Kouamé, un élève Akan, apprend que chez son ami Bété Zadi, c\'est le premier fils qui hérite des biens de son défunt père. Pourquoi cette différence ?',
        solution: 'Parce que les deux peuples appartiennent à des aires culturelles aux régimes de parenté opposés : les Bété (aire Krou) sont patrilinéaires (l\'héritage va de père en fils), tandis que les Baoulé (aire Akan) sont matrilinéaires (l\'héritage revient aux neveux par la mère).'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les 4 classes d\'âges fondamentales chez le peuple Ebrié (Tchaman) ?',
        correction: 'Les 4 classes d\'âges Ebrié sont : les Dougbo, les Tchagba, les Blessoué et les Niando.'
      },
      {
        question: 'Cite deux musées nationaux majeurs où l\'on peut découvrir le patrimoine culturel de la Côte d\'Ivoire.',
        correction: '1. Le Musée des Civilisations de Côte d\'Ivoire situé à Abidjan-Plateau.\n2. Le Musée National du Costume situé à Grand-Bassam.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une émission radiophonique à Séguéla, des auditeurs débattent de la disparition progressive des coutumes traditionnelles. Un intervenant affirme : « Connaître ses us et coutumes est dépassé, seule la culture moderne étrangère a de la valeur ». Des élèves de 5ème décident de lui répondre.',
      instructions: [
        '1. Nomme le problème culturel soulevé par cette intervention.',
        '2. Donne les caractéristiques culturelles majeures de la région du Worodougou.',
        '3. Justifie par des arguments solides la nécessité pour la jeunesse de préserver et valoriser le patrimoine culturel ivoirien.'
      ],
      solutionGuide: '1. Le problème est l\'acculturation et le mépris des valeurs culturelles traditionnelles au profit de modèles extérieurs. 2. Le Worodougou (Mandé Nord) se caractérise par une royauté villageoise avec chef et notables, une filiation patrilinéaire, une forte tradition de commerce et d\'artisanat, et des valeurs de solidarité islamiques et coutumières. 3. Importance de la préservation : La culture constitue l\'identité et la dignité d\'un peuple (« un homme sans culture est un homme perdu ») ; elle forge la cohésion sociale par les alliances de paix ; elle offre des valeurs morales de respect des aînés indispensables au développement harmonieux du pays.'
    },
    examTraps: [
      'Confondre matrilinéaire (succession par la mère et l\'oncle) et matriarcat (domination politique par les femmes).',
      'Attribuer l\'institution des classes d\'âges aux Mandé ou aux Sénoufo (elle est caractéristique des Lagunaires).',
      'Croire que toutes les ethnies ivoiriennes pratiquent la même règle d\'héritage.'
    ],
    quickMemo: 'Worodougou / Mandé Nord (monarchie villageoise, commerce, patrilinéaire, Islam) | Akan (matrilinéaire, rois, noms de jours) | Lagunaires (classes d\'âges Dougbo/Tchagba/Blessoué/Niando, Abissa) | Krou (patrilinéaire, masque Gla) | Sénoufo (Poro, bois sacré) | Préservation : musées Plateau et Bassam.',
    keywords: ['traits de civilisation', 'aire culturelle', 'Worodougou', 'Mandé Nord', 'classes d\'âges', 'matrilinéaire', 'patrilinéaire', 'patrimoine culturel', '5e']
  },

  // ========================================================
  // 5ÈME - HISTOIRE : THÈME 2 - LEÇON 3
  // ========================================================
  {
    id: 'hist-5e-conflits-regions-dih-droit-humanitaire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Évolution et traits de civilisation des peuples de ma région',
    lessonTitle: 'Les codes de réglementation des conflits dans les régions de Côte d\'Ivoire et le Droit International Humanitaire (DIH)',
    objectifs: [
      'Définir un conflit comme une situation de mésentente, d\'opposition ou d\'affrontement entre deux personnes ou groupes de personnes',
      'Identifier les types de conflits régionaux : conflits sociaux (vols, homicides, adultères, viols, sorcellerie, querelles de succession, bagarres de jeunesse) et conflits fonciers (terrains urbains, terres agricoles, tensions agriculteurs-éleveurs)',
      'Expliquer les dispositions et codes traditionnels de règlement : interdiction de se faire justice soi-même, médiation du chef de village et des notables sous l\'arbre à palabres, réparation par amendes coutumières en nature ou en espèces, usage passé du bannissement',
      'Mettre en lumière le rôle pacificateur sacré des alliances interethniques et de la parenté à plaisanterie (ex : Ebrié alliés aux Adjoukrou ; Akyé alliés aux Abbey et Dida)',
      'Définir le Droit International Humanitaire (DIH) comme l\'ensemble des règles conventionnelles (Conventions de Genève) visant à limiter les effets des conflits armés',
      'Énoncer les règles capitales du DIH concernant les non-combattants (protection absolue des civils, soignants, humanitaires, interdiction des enfants soldats de moins de 15 ans, protection des récoltes, écoles, hôpitaux et réserves d\'eau)',
      'Énoncer les devoirs et interdictions imposés aux combattants (interdiction de tuer ou torturer un soldat qui se rend ou est blessé, obligation de soigner les blessés ennemis, interdiction de la torture, du viol, des armes de destruction massive et des mines)',
      'Démontrer la parenté d\'esprit entre les codes traditionnels de concorde africains et les règles universelles du DIH'
    ],
    fullCourseContent: `1. Les Conflits dans nos Régions et leurs Causes :
Un conflit est un état de désaccord ou de confrontation violente entre individus ou communautés. Dans les régions ivoiriennes, on distingue deux grands types de conflits :
- Les Conflits Sociaux :
  * Délits et infractions : vols, agressions physiques, homicides, cas récurrents de sorcellerie.
  * Conflits matrimoniaux et familiaux : adultère, viol, non-paiement de dot, divorces, contestations de paternité, querelles de succession d'héritage.
  * Crises politiques locales : contestations de la légitimité des chefs de village.
  * Incivilités de jeunesse : bagarres lors de matchs de football, soirées dansantes ou bals de quartier.
- Les Conflits Fonciers :
  * Litiges relatifs aux limites de parcelles agricoles, empiètement de plantations de cacao ou d'hévéa.
  * Conflits fonciers urbains : doubles ventes de terrains à bâtir, faux titres coutumiers.
  * Conflits entre agriculteurs et éleveurs transhumants : dévastation des cultures vivrières par le bétail (bœufs) ou empoisonnement d'animaux.

2. Les Modes Traditionnels de Règlement des Conflits :
Pour maintenir l'ordre et la paix, les sociétés ivoiriennes ont édicté des codes coutumiers précis :
- Règle fondamentale : Interdiction formelle de se faire justice soi-même.
- La procédure de conciliation :
  * Porter l'affaire devant les autorités traditionnelles (chef de famille, chef de terre, chef de village assisté de son conseil de notables).
  * Réunion sous l'Arbre à palabres : écoute contradictoire des deux parties, recherche du consensus et de la vérité.
  * Prononcé de la sanction réparatrice : paiement d'une amende en nature (poulets, cabris, bœufs, vin de palme, liqueur) ou en espèces pour purifier la terre et indemniser la victime.
  * Autrefois, les crimes très graves (trahison, meurtre odieux, sorcellerie avérée) faisaient l'objet de châtiments corporels ou du bannissement définitif du village.
- Le rôle régulateur des alliances interethniques :
  * Des pactes sacrés de non-agression ont été scellés entre peuples : par exemple, dans le grand Sud, les Ebrié sont alliés aux Adjoukrou ; les Akyé sont alliés aux Abbey et aux Dida.
  * En cas d'affrontement, l'intervention d'un membre du peuple allié interrompt immédiatement les hostilités sans effusion de sang.

3. Le Droit International Humanitaire (DIH) :
- Définition : Le DIH (ou Droit des conflits armés, fondé sur les Conventions de Genève de 1949 et leurs protocoles additionnels) est l'ensemble des règles juridiques internationales qui protègent les personnes qui ne participent pas (ou plus) aux hostilités et limitent les méthodes de guerre.
- Protection absolue des Non-Combattants :
  * Les populations civiles ne doivent jamais être ciblées ni prises en otages (femmes, enfants, personnes âgées, personnes handicapées).
  * Les enfants de moins de 15 ans ne doivent sous aucun prétexte être enrôlés dans les forces armées (interdiction absolue des enfants soldats).
  * Protection du personnel soignant (médecins, infirmiers) et des organisations humanitaires neutres (Croix-Rouge, Croissant-Rouge, PAM, UNICEF) ainsi que des journalistes en mission.
  * Sanctuaire des biens de première nécessité : interdiction stricte de détruire les réserves d'eau potable (châteaux d'eau), les récoltes vivrières, les zones agricoles, les hôpitaux, les écoles, les lieux de culte et les œuvres d'art.
- Règles strictes applicables aux Combattants :
  * Interdiction d'ordonner « qu'il n'y ait pas de survivants » (refus de quartier).
  * Interdiction formelle de tuer ou de blesser un combattant ennemi qui dépose les armes, se rend ou est hors de combat (blessé, malade ou prisonnier).
  * Obligation de recueillir et soigner tous les blessés ennemis sans distinction.
  * Interdiction absolue de la torture, des traitements dégradants et des violences sexuelles (viols de guerre).
  * Interdiction d'employer des armes provoquant des maux superflus : armes de destruction massive (chimiques, bactériologiques, atomiques) et mines antipersonnel.

4. Parallèle entre Justice Coutumière et DIH :
- Il existe une remarquable convergence morale : tout comme nos coutumes interdisent les vengeances aveugles, protègent les femmes et les enfants et imposent le respect de la vie sous l'arbre à palabres, le DIH impose à l'échelle planétaire des règles d'humanité et de dignité même au cœur des batailles les plus rudes.`,
    definitions: [
      {
        term: 'Conflit',
        definition: 'Situation de contestation violente ou de rupture de paix entre personnes ou collectivités aux intérêts opposés.'
      },
      {
        term: 'Droit International Humanitaire (DIH)',
        definition: 'Ensemble de conventions internationales (Conventions de Genève) visant à limiter la barbarie des guerres et à protéger les non-combattants.'
      },
      {
        term: 'Hors de combat',
        definition: 'Statut d\'un soldat qui a déposé les armes, s\'est rendu ou est incapable de combattre en raison de blessures ou de maladie.'
      },
      {
        term: 'Bannissement',
        definition: 'Sanction coutumière suprême consistant à expulser définitivement un individu fautif hors du village et de sa communauté.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe d\'interdiction de justice privée',
        statement: 'Nul ne doit se faire justice soi-même : tout litige doit être soumis à l\'autorité coutumière ou aux juridictions étatiques.'
      },
      {
        name: 'Règle fondamentale du DIH',
        statement: 'Même en pleine guerre, la dignité humaine doit être préservée : les civils et les soldats désarmés ou blessés sont inviolables.'
      }
    ],
    formulas: [
      {
        name: 'Règles cardinales du DIH',
        formula: '\\text{DIH} = \\text{Protection des civils & biens vitaux} + \\text{Soins aux blessés ennemis} - \\text{Torture, viols & armes interdites}',
        explanation: 'Frontière juridique absolue entre combat militaire et crime de guerre.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre un litige coutumier selon les traditions ivoiriennes',
        procedure: '1. Refuser toute vengeance physique ou représailles violentes. 2. Convoquer les parties devant le chef de village et les notables sous l\'arbre à palabres. 3. Si un peuple allié à plaisanterie est présent, solliciter son arbitrage pacificateur. 4. Écouter les témoins, reconnaître les torts et fixer l\'amende réparatrice symbolique. 5. Partager un repas ou une boisson de réconciliation.',
        tip: 'Le respect de l\'alliance à plaisanterie désamorce instantanément les risques d\'affrontement armé.'
      }
    ],
    examples: [
      {
        statement: 'Dans un conflit armé, des soldats encerclent un village et découvrent des réservoirs d\'eau potable et un dispensaire soignant des ennemis blessés. Que prescrit le DIH ?',
        solution: 'Le DIH interdit formellement de détruire les réservoirs d\'eau et le dispensaire (biens civils vitaux). Il impose en outre de laisser le personnel soignant accomplir sa mission et interdit d\'achever les ennemis blessés, qui doivent être soignés et protégés.'
      }
    ],
    exercises: [
      {
        question: 'Distingue un conflit social d\'un conflit foncier en donnant un exemple pour chacun.',
        correction: '- Conflit social : désaccord portant sur les relations humaines et familiales (ex : querelle de succession d\'héritage ou adultère).\n- Conflit foncier : litige portant sur la propriété ou l\'usage d\'une terre (ex : contestation des limites d\'un champ de cacao ou dégâts causés par des bœufs d\'éleveurs dans les récoltes d\'un planteur).'
      },
      {
        question: 'Pourquoi le recrutement d\'enfants de moins de 15 ans est-il formellement interdit par le D.I.H ?',
        correction: 'Parce que les enfants sont des êtres vulnérables qui ont droit à l\'éducation et à la protection. Les transformer en "enfants soldats" constitue un crime de guerre qui détruit leur développement physique, moral et psychologique.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances dans le village de Miadzin près d\'Adzopé, un planteur accuse son voisin d\'avoir empiété sur sa parcelle de terre pour y semer du manioc et de lui avoir manqué de respect. Furieux, le fils aîné du plaignant s\'arme d\'un gourdin pour aller corriger le voisin. Les sages s\'interposent et les amènent chez le chef.',
      instructions: [
        '1. Identifie la nature du conflit dont il est question.',
        '2. Explique pourquoi les sages ont empêché le fils aîné d\'agir.',
        '3. Décris la démarche coutumière que le chef et les notables vont appliquer pour régler ce litige et rétablir la concorde.'
      ],
      solutionGuide: '1. Il s\'agit d\'un conflit foncier (empiètement sur une terre agricole) mêlé à un conflit social (offense verbale). 2. Les sages l\'ont arrêté car la tradition et la loi interdisent formellement de se faire justice soi-même, ce qui aurait conduit à des blessures ou un meurtre dévastateur pour la paix du village. 3. Démarche : Le chef convoquera les deux familles sous l\'arbre à palabres ; il écoutera les déclarations et fera borner la terre par les gardiens de la terre ; la partie en faute reconnaîtra son tort et versera une amende coutumière réparatrice (boisson rituelle ou volaille) pour sceller la réconciliation définitive.'
    },
    examTraps: [
      'Croire que le DIH s\'applique en période de paix (le DIH régit spécifiquement les situations de conflits armés et de guerres).',
      'Confondre DIH (droit humanitaire de la guerre) et droits de l\'homme généraux.',
      'Penser qu\'un soldat blessé ou capturé peut être éliminé sans enfreindre la loi internationale.'
    ],
    quickMemo: 'Conflits régionaux : sociaux (vols, adultères, querelles) et fonciers (terrains, bétail vs champs) | Règlement coutumier : arbre à palabres, chef et notables, amende, alliances interethniques de paix | DIH : Conventions de Genève protégeant civils, soignants, enfants (<15 ans pas de soldats), interdisant torture, viols, armes massives et soignant les blessés ennemis.',
    keywords: ['conflits', 'conflits fonciers', 'conflits sociaux', 'arbre à palabres', 'alliances interethniques', 'parenté à plaisanterie', 'DIH', 'Droit International Humanitaire', 'Conventions de Genève', '5e']
  }
];
