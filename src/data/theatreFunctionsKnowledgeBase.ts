/**
 * Base pédagogique déterministe — Fonctions du théâtre
 * Niveau lycée / Terminale — Côte d'Ivoire.
 *
 * Les faits littéraires sont fixes. Les variantes ne modifient que la formulation.
 * Aucune citation textuelle n'est stockée afin d'éviter les citations non vérifiées.
 */

export type TheatreFunctionKey =
  | 'lyrique'
  | 'esthetique'
  | 'evasive_fictive'
  | 'ludique'
  | 'didactique'
  | 'engagee'
  | 'satirique';

export interface TheatreLiteraryExample {
  author: string;
  work: string;
  detail: string;
  verification: string;
}

export interface TheatreArgument {
  id: string;
  argument: string;
  explanation: string;
  example: TheatreLiteraryExample;
  phraseToRemember: string;
  variants: {
    argument: string[];
    explanation: string[];
    phraseToRemember: string[];
  };
}

export interface TheatreFunction {
  key: TheatreFunctionKey;
  title: string;
  definition: string;
  arguments: TheatreArgument[];
}

const v = (argument: string[], explanation: string[], phraseToRemember: string[]) => ({ argument, explanation, phraseToRemember });

export const THEATRE_FUNCTIONS_KNOWLEDGE_BASE: TheatreFunction[] = [
  {
    key: 'lyrique',
    title: 'Fonction lyrique',
    definition: 'Le théâtre fait entendre les émotions humaines à travers les paroles, les silences, les gestes et les conflits des personnages.',
    arguments: [
      {
        id: 'lyrique-emotions',
        argument: 'Le théâtre met en lumière les émotions humaines.',
        explanation: 'Les dialogues, les monologues et les réactions des personnages permettent de faire entendre l’amour, la peur, la colère ou la souffrance. Le spectateur découvre ainsi les sentiments au cœur de l’action.',
        example: { author: 'Jean Racine', work: 'Phèdre', detail: 'Phèdre révèle une passion interdite qui provoque chez elle culpabilité, peur et souffrance.', verification: 'Pièce tragique de Racine centrée sur la passion de Phèdre pour Hippolyte et ses conséquences.' },
        phraseToRemember: 'Le théâtre rend les émotions visibles et audibles sur scène.',
        variants: v(['Le théâtre donne une voix aux sentiments humains.', 'Les personnages font entendre leurs émotions par leurs paroles et leurs réactions.', 'La scène permet de rendre les passions humaines particulièrement sensibles.'], ['Les personnages ne racontent pas seulement des événements : ils expriment ce qu’ils ressentent face aux situations qu’ils vivent.', 'Le dialogue et le jeu scénique rendent les émotions directement perceptibles par le public.', 'La souffrance, l’amour ou la peur deviennent ainsi des éléments de l’action dramatique.'], ['Sur scène, les sentiments deviennent vivants.', 'Le théâtre fait entendre les émotions.', 'Les passions humaines prennent vie dans le jeu des personnages.'])
      },
      {
        id: 'lyrique-amour',
        argument: 'Le théâtre permet de mettre en scène l’amour et les liens affectifs.',
        explanation: 'Les dialogues et les actions des personnages montrent la naissance, la force ou les difficultés d’un amour. Le sentiment amoureux peut alors devenir le moteur de l’intrigue.',
        example: { author: 'William Shakespeare', work: 'Roméo et Juliette', detail: 'L’amour de Roméo et Juliette se heurte à l’hostilité de leurs familles et devient le centre du conflit tragique.', verification: 'Tragédie de Shakespeare fondée sur l’amour des deux jeunes personnages et le conflit entre les Montaigu et les Capulet.' },
        phraseToRemember: 'Le théâtre transforme l’amour en action et en conflit dramatique.',
        variants: v(['La scène permet de montrer la force de l’amour.', 'Le théâtre fait de l’amour une force qui agit sur les personnages.', 'Les relations amoureuses peuvent devenir le moteur d’une pièce.'], ['Les sentiments sont exprimés dans les échanges et influencent directement les décisions des personnages.', 'L’amour peut rapprocher les personnages mais aussi provoquer des conflits.', 'Le spectateur suit donc l’évolution du sentiment à travers l’action dramatique.'], ['L’amour devient une force dramatique.', 'Le théâtre fait vivre les relations affectives sur scène.', 'Le sentiment amoureux peut construire toute l’intrigue.'])
      },
      {
        id: 'lyrique-conflit-interieur',
        argument: 'Le théâtre permet de montrer les conflits intérieurs des personnages.',
        explanation: 'Un personnage peut être partagé entre plusieurs choix, valeurs ou désirs. Les monologues et les dialogues rendent visibles ces hésitations et ces combats intérieurs.',
        example: { author: 'Pierre Corneille', work: 'Le Cid', detail: 'Rodrigue doit choisir entre son amour pour Chimène et son devoir d’honneur après l’affront fait à son père.', verification: 'Le conflit entre amour, devoir et honneur structure l’intrigue de la pièce.' },
        phraseToRemember: 'Le théâtre rend visibles les choix difficiles qui déchirent les personnages.',
        variants: v(['La scène révèle les hésitations et les déchirements intérieurs.', 'Le personnage théâtral peut exposer son conflit entre désir et devoir.', 'Le théâtre transforme le dilemme intérieur en action dramatique.'], ['Les choix des personnages sont souvent difficiles parce que plusieurs valeurs s’opposent.', 'Les paroles permettent au public de comprendre ce qui se passe dans leur conscience.', 'Le conflit intérieur devient ainsi une partie essentielle de l’action.'], ['Le dilemme intérieur devient un conflit dramatique.', 'Le théâtre montre les personnages face à des choix difficiles.', 'Les conflits de conscience nourrissent l’action théâtrale.'])
      }
    ]
  },
  {
    key: 'esthetique',
    title: 'Fonction esthétique',
    definition: 'Le théâtre recherche un effet artistique par le langage dramatique et par tous les éléments de la représentation.',
    arguments: [
      {
        id: 'esthetique-langage',
        argument: 'Le théâtre valorise la beauté et la force du langage.',
        explanation: 'Les dialogues et les tirades peuvent être construits avec des images, des rythmes et des figures de style. Le texte dramatique devient alors une véritable œuvre littéraire.',
        example: { author: 'Pierre Corneille', work: 'Le Cid', detail: 'La pièce utilise des alexandrins et des tirades fortement structurées qui donnent de la force aux affrontements entre les personnages.', verification: 'Le Cid est une tragi-comédie en vers ; sa langue dramatique est notamment portée par ses tirades.' },
        phraseToRemember: 'Le théâtre peut transformer la parole en œuvre d’art.',
        variants: v(['Les répliques théâtrales peuvent atteindre une grande beauté littéraire.', 'Le dramaturge travaille la langue pour donner de la force aux paroles.', 'Les tirades montrent que le théâtre est aussi un art du langage.'], ['Le choix des mots, le rythme et les figures de style donnent aux paroles une dimension artistique.', 'Une réplique peut donc avoir une valeur littéraire même avant sa représentation.', 'La beauté du texte participe au plaisir du spectateur et du lecteur.'], ['La parole théâtrale peut devenir un art.', 'Le style donne une force particulière aux répliques.', 'Le théâtre est aussi une littérature du langage.'])
      },
      {
        id: 'esthetique-virtuosite',
        argument: 'La virtuosité verbale peut produire le plaisir esthétique du spectacle.',
        explanation: 'Certains dramaturges construisent des répliques très travaillées, où l’humour, les images et le rythme attirent l’attention du public. La parole devient alors un spectacle en elle-même.',
        example: { author: 'Edmond Rostand', work: 'Cyrano de Bergerac', detail: 'La pièce est célèbre pour ses tirades et ses jeux de langage, qui donnent une place centrale à la virtuosité verbale de Cyrano.', verification: 'Comédie héroïque d’Edmond Rostand construite notamment autour de la personnalité et de l’éloquence de Cyrano.' },
        phraseToRemember: 'La virtuosité des répliques peut faire du langage un spectacle.',
        variants: v(['Le théâtre peut séduire par l’inventivité de ses répliques.', 'La parole dramatique peut devenir un véritable jeu artistique.', 'La richesse du langage contribue au plaisir de la représentation.'], ['Les jeux de mots, les images et le rythme rendent certaines scènes particulièrement marquantes.', 'Le public peut prendre plaisir à écouter la construction même des répliques.', 'L’esthétique théâtrale passe donc aussi par la maîtrise de la parole.'], ['La beauté du théâtre passe aussi par les mots.', 'Une réplique brillante peut devenir un moment de spectacle.', 'Le langage peut être une source de plaisir esthétique.'])
      },
      {
        id: 'esthetique-mise-en-scene',
        argument: 'La mise en scène participe à la beauté du théâtre.',
        explanation: 'Le décor, les costumes, les lumières, les gestes et les déplacements donnent une dimension visuelle et corporelle à l’œuvre. La représentation ajoute donc une création artistique au texte.',
        example: { author: 'Aimé Césaire', work: 'La Tragédie du roi Christophe', detail: 'La pièce est destinée à la représentation et associe parole dramatique, personnages, espace scénique et rythme du spectacle pour représenter les tensions politiques et historiques.', verification: 'Œuvre théâtrale publiée par Présence africaine et régulièrement représentée ; la dimension scénique fait partie de sa nature dramatique.' },
        phraseToRemember: 'Au théâtre, la beauté vient aussi de la représentation.',
        variants: v(['Le spectacle théâtral associe le texte à une création visuelle.', 'Les éléments de la scène peuvent renforcer la beauté d’une pièce.', 'Le théâtre produit une esthétique grâce au jeu des acteurs et à la mise en scène.'], ['Le public ne reçoit pas seulement des mots : il voit des corps, des espaces et des mouvements.', 'Les choix de mise en scène peuvent modifier la manière dont une scène est ressentie.', 'La dimension esthétique du théâtre est donc à la fois verbale et scénique.'], ['La scène ajoute une dimension artistique au texte.', 'Le théâtre est un art du texte et de la représentation.', 'La mise en scène participe à la beauté du spectacle.'])
      }
    ]
  },
  {
    key: 'evasive_fictive',
    title: 'Fonction évasive / fictive',
    definition: 'Le théâtre invente des personnages et des situations qui permettent au public d’entrer dans un univers différent du quotidien.',
    arguments: [
      {
        id: 'evasive-personnages',
        argument: 'Le théâtre donne vie à des personnages fictifs.',
        explanation: 'Le dramaturge imagine des personnages avec leur histoire, leurs relations et leurs conflits. Les acteurs leur donnent ensuite une présence concrète devant le public.',
        example: { author: 'Bernard Binlin Dadié', work: 'Les Voix dans le vent', detail: 'La pièce met notamment en scène Nahoubou et Bacoulou dans une intrigue dramatique construite autour du pouvoir et de la violence.', verification: 'La BnF classe Les Voix dans le vent comme une tragédie de Bernard Binlin Dadié.' },
        phraseToRemember: 'Le théâtre fait vivre des personnages imaginés par le dramaturge.',
        variants: v(['Le dramaturge crée des personnages que les acteurs rendent vivants.', 'La scène donne un corps aux personnages de fiction.', 'Le théâtre transforme des personnages écrits en présences visibles.'], ['Les personnages n’existent pas comme personnes réelles : ils sont construits par l’écriture dramatique.', 'La représentation permet cependant au public de les percevoir comme des êtres présents devant lui.', 'Cette rencontre entre fiction et présence scénique fait la particularité du théâtre.'], ['La fiction devient présence sur scène.', 'Les acteurs donnent vie aux personnages imaginés.', 'Le théâtre rend visibles les êtres de fiction.'])
      },
      {
        id: 'evasive-imaginaire',
        argument: 'Le théâtre stimule l’imagination en inventant des situations extraordinaires.',
        explanation: 'Le dramaturge peut créer des événements impossibles dans la vie ordinaire. Le spectateur accepte alors les règles d’un univers fictif et entre dans une expérience imaginative.',
        example: { author: 'Eugène Ionesco', work: 'Rhinocéros', detail: 'Dans une ville ordinaire, les habitants se transforment progressivement en rhinocéros, créant une situation absurde et imaginaire.', verification: 'Rhinocéros est une pièce d’Ionesco dans laquelle la transformation des habitants en rhinocéros constitue le dispositif fantastique et absurde central.' },
        phraseToRemember: 'Le théâtre peut éloigner le spectateur du réel par la fiction.',
        variants: v(['Le théâtre peut inventer des situations impossibles pour faire travailler l’imagination.', 'Une pièce peut transporter le public dans un univers qui n’obéit pas aux règles ordinaires.', 'La fiction dramatique permet de sortir momentanément du quotidien.'], ['L’imaginaire théâtral peut surprendre en faisant arriver des événements impossibles.', 'Le spectateur accepte provisoirement les règles de cet univers fictif.', 'Cette liberté de création ouvre un espace de rêve et de réflexion.'], ['La fiction théâtrale stimule l’imagination.', 'Le théâtre peut créer l’impossible.', 'La scène ouvre un espace différent du quotidien.'])
      },
      {
        id: 'evasive-magie',
        argument: 'Le théâtre peut faire voyager le public dans un univers merveilleux.',
        explanation: 'Le dramaturge peut introduire des êtres surnaturels, des rêves ou des événements magiques. Le spectateur est ainsi invité à imaginer un monde plus vaste que la réalité quotidienne.',
        example: { author: 'William Shakespeare', work: 'Le Songe d’une nuit d’été', detail: 'La pièce mêle humains, fées, enchantements et métamorphoses dans un univers où la magie perturbe les relations entre les personnages.', verification: 'Comédie de Shakespeare connue pour son univers féerique et ses interventions surnaturelles.' },
        phraseToRemember: 'Le théâtre peut ouvrir les portes du merveilleux.',
        variants: v(['La scène peut créer un monde peuplé de magie et de merveilleux.', 'Le théâtre permet parfois de voyager dans un univers surnaturel.', 'L’imaginaire dramatique peut dépasser les limites du monde réel.'], ['Les êtres fantastiques et les événements magiques élargissent les possibilités du récit.', 'Le spectateur entre dans un univers régi par d’autres règles.', 'Le merveilleux devient ainsi un moyen d’évasion et de création.'], ['Le merveilleux fait voyager le spectateur.', 'La scène peut créer un univers magique.', 'Le théâtre peut dépasser les limites du réel.'])
      }
    ]
  },
  {
    key: 'ludique',
    title: 'Fonction ludique',
    definition: 'Le théâtre procure du plaisir par le rire, les jeux de langage, les quiproquos, les surprises et les situations comiques.',
    arguments: [
      {
        id: 'ludique-rire',
        argument: 'Le théâtre divertit grâce aux situations comiques.',
        explanation: 'Les malentendus, les comportements ridicules et les oppositions entre personnages peuvent provoquer le rire. Le public prend alors plaisir à suivre l’action.',
        example: { author: 'Molière', work: 'Le Malade imaginaire', detail: 'Les obsessions d’Argan, les réactions des autres personnages et les situations comiques produisent un divertissement tout en soutenant la critique de la crédulité et de certaines pratiques médicales.', verification: 'Comédie de Molière fondée sur le personnage d’Argan et sur de nombreux procédés comiques.' },
        phraseToRemember: 'Le théâtre peut faire rire tout en racontant une histoire.',
        variants: v(['Le comique permet au théâtre de divertir le public.', 'Les situations théâtrales peuvent transformer les défauts humains en source de rire.', 'Le spectacle comique procure un plaisir immédiat au public.'], ['Le rire naît de situations, de paroles ou de comportements construits pour provoquer un effet comique.', 'Le public suit donc une intrigue tout en profitant du plaisir du spectacle.', 'Le divertissement peut cependant accompagner une critique plus sérieuse.'], ['Le rire est une source de plaisir théâtral.', 'Le comique divertit le public.', 'Le théâtre peut faire rire en montrant les défauts humains.'])
      },
      {
        id: 'ludique-quiproquo',
        argument: 'Les quiproquos et les ruses rendent l’action théâtrale amusante.',
        explanation: 'Lorsque les personnages se trompent sur une situation ou cachent la vérité, l’action peut se multiplier en surprises. Le public prend plaisir à voir les personnages se sortir de leurs difficultés.',
        example: { author: 'Molière', work: 'Les Fourberies de Scapin', detail: 'Scapin utilise des ruses et des mensonges pour aider les jeunes personnages, ce qui provoque une succession de situations comiques.', verification: 'Comédie de Molière construite autour des ruses de Scapin et de nombreux procédés de comique de situation.' },
        phraseToRemember: 'Les ruses et les quiproquos donnent du mouvement au spectacle.',
        variants: v(['Les malentendus peuvent rendre l’action théâtrale très amusante.', 'Les ruses des personnages créent des surprises qui divertissent le public.', 'Le théâtre utilise les quiproquos pour maintenir le plaisir du spectacle.'], ['Le public comprend souvent une situation avant certains personnages, ce qui crée un effet comique.', 'Les mensonges et les ruses provoquent de nouvelles situations.', 'L’action avance ainsi grâce à une succession de surprises.'], ['Le quiproquo nourrit le comique.', 'Les ruses rendent l’action vivante.', 'Les surprises entretiennent le plaisir du public.'])
      },
      {
        id: 'ludique-langage',
        argument: 'Le jeu sur les mots peut divertir le public.',
        explanation: 'Le dramaturge peut jouer avec les expressions, les répétitions, les contrastes ou les formulations inattendues. Le langage devient alors lui-même une source de plaisir.',
        example: { author: 'Edmond Rostand', work: 'Cyrano de Bergerac', detail: 'Les jeux de langage et la virtuosité des tirades participent au plaisir du spectateur, notamment dans les scènes où Cyrano impose son esprit et son éloquence.', verification: 'La pièce est reconnue pour sa richesse verbale et ses tirades.' },
        phraseToRemember: 'Au théâtre, les mots peuvent aussi devenir un jeu.',
        variants: v(['Le théâtre peut divertir par l’invention verbale.', 'Les jeux de langage donnent au public un plaisir particulier.', 'Une réplique peut faire rire ou surprendre par sa construction.'], ['Le dramaturge exploite les possibilités de la langue pour créer des effets comiques ou surprenants.', 'Le public écoute alors autant la manière de dire que ce qui est dit.', 'Le langage devient une partie du jeu théâtral.'], ['Les mots peuvent devenir un jeu scénique.', 'L’invention verbale participe au divertissement.', 'Le langage peut provoquer le plaisir du public.'])
      }
    ]
  },
  {
    key: 'didactique',
    title: 'Fonction didactique',
    definition: 'Le théâtre peut instruire et faire réfléchir en mettant les comportements humains, les valeurs et les problèmes de société à l’épreuve de la scène.',
    arguments: [
      {
        id: 'didactique-morale',
        argument: 'Le théâtre fait réfléchir sur les défauts humains.',
        explanation: 'En présentant des personnages dominés par un défaut, le dramaturge permet au public d’en observer les conséquences. Le spectateur peut ainsi prendre du recul sur certains comportements.',
        example: { author: 'Molière', work: 'L’Avare', detail: 'Harpagon est dominé par son obsession de l’argent, ce qui déforme ses relations avec ses proches et produit une critique de l’avarice.', verification: 'Comédie de Molière centrée sur Harpagon et son avarice.' },
        phraseToRemember: 'Le théâtre peut faire réfléchir en mettant les défauts humains en scène.',
        variants: v(['La scène permet d’observer les conséquences des défauts humains.', 'Le théâtre transforme certains vices en objets de réflexion.', 'Les personnages peuvent servir à faire réfléchir sur les comportements humains.'], ['Le public voit concrètement comment un défaut agit sur les relations et sur les décisions.', 'Le rire ou l’émotion peuvent aider le spectateur à prendre du recul.', 'La pièce instruit donc sans avoir nécessairement besoin de donner une morale directe.'], ['Le théâtre instruit en montrant les conséquences des comportements.', 'Les défauts des personnages peuvent devenir des leçons.', 'Le spectacle peut faire réfléchir sur soi-même et sur les autres.'])
      },
      {
        id: 'didactique-valeurs',
        argument: 'Le théâtre permet de réfléchir aux valeurs et aux choix humains.',
        explanation: 'Une pièce peut opposer plusieurs valeurs et obliger les personnages à choisir. Le public est alors amené à réfléchir au devoir, à l’honneur, à la liberté ou à la responsabilité.',
        example: { author: 'Pierre Corneille', work: 'Le Cid', detail: 'Le conflit entre l’amour de Rodrigue et son devoir d’honneur met en jeu des valeurs contradictoires et invite à réfléchir au choix moral.', verification: 'Le dilemme de Rodrigue entre amour et honneur constitue un ressort majeur de la pièce.' },
        phraseToRemember: 'Le théâtre fait réfléchir en confrontant les personnages à des choix de valeurs.',
        variants: v(['Le théâtre met les valeurs humaines à l’épreuve de l’action.', 'Une pièce peut obliger le spectateur à réfléchir aux choix moraux des personnages.', 'Les conflits dramatiques permettent d’interroger le devoir et la responsabilité.'], ['Les personnages doivent souvent choisir entre deux exigences difficiles à concilier.', 'Le spectateur observe les conséquences de ces choix sans recevoir forcément une réponse unique.', 'La pièce devient ainsi un espace de réflexion sur les valeurs humaines.'], ['Le conflit dramatique peut devenir un problème moral.', 'La scène confronte les valeurs aux choix.', 'Le théâtre fait réfléchir sur les responsabilités humaines.'])
      },
      {
        id: 'didactique-societe',
        argument: 'Le théâtre aide à comprendre certains problèmes de société.',
        explanation: 'En représentant des conflits sociaux, politiques ou familiaux, la pièce permet au public de regarder une situation sous plusieurs angles. Elle peut ainsi développer l’esprit critique.',
        example: { author: 'Aimé Césaire', work: 'Une Saison au Congo', detail: 'La pièce représente la crise congolaise autour de Patrice Lumumba et permet de réfléchir aux rapports de pouvoir, aux tensions politiques et au contexte de la décolonisation.', verification: 'Drame d’Aimé Césaire consacré à la période de la crise congolaise ; la BnF en conserve les notices de texte et de représentation.' },
        phraseToRemember: 'Le théâtre peut aider le public à comprendre les problèmes de son époque.',
        variants: v(['Une pièce peut devenir un moyen de réfléchir à la société.', 'Le théâtre permet de regarder certains problèmes collectifs à travers des personnages.', 'La scène peut développer l’esprit critique du spectateur.'], ['Le conflit dramatique rend les problèmes sociaux concrets et visibles.', 'Le public peut comparer les points de vue des différents personnages.', 'La représentation invite ainsi à réfléchir aux causes et aux conséquences des situations montrées.'], ['Le théâtre transforme les problèmes sociaux en matière de réflexion.', 'La scène peut développer l’esprit critique.', 'Le spectacle aide à regarder la société autrement.'])
      }
    ]
  },
  {
    key: 'engagee',
    title: 'Fonction engagée',
    definition: 'Le théâtre peut prendre position face aux injustices, aux abus de pouvoir, aux discriminations et aux formes d’oppression.',
    arguments: [
      {
        id: 'engagee-pouvoir',
        argument: 'Le théâtre peut critiquer les abus de pouvoir.',
        explanation: 'Le dramaturge peut représenter un pouvoir injuste ou des dirigeants qui utilisent leur autorité contre les autres. La scène rend alors visibles les dangers de la domination.',
        example: { author: 'Bernard Binlin Dadié', work: 'Les Voix dans le vent', detail: 'La pièce met en scène Nahoubou et Bacoulou dans une intrigue qui permet de construire une satire du pouvoir et de montrer les dérives liées à la recherche de puissance.', verification: 'La pièce est classée comme tragédie par la BnF ; des études pédagogiques ivoiriennes identifient explicitement la satire du pouvoir dans « Nahoubou chez Bacoulou ».' },
        phraseToRemember: 'Le théâtre peut dénoncer les dérives du pouvoir.',
        variants: v(['La scène peut montrer les dangers d’un pouvoir sans limites.', 'Le dramaturge peut utiliser ses personnages pour critiquer la domination.', 'Le théâtre rend visibles les abus commis au nom du pouvoir.'], ['Un personnage puissant peut être présenté dans ses décisions, ses violences ou ses contradictions.', 'Le public observe alors les effets de la domination sur les autres personnages.', 'La critique politique passe ainsi par l’action dramatique.'], ['Le théâtre peut mettre le pouvoir face à ses dérives.', 'La domination peut devenir un objet de critique dramatique.', 'La scène peut dénoncer les abus d’autorité.'])
      },
      {
        id: 'engagee-colonialisme',
        argument: 'Le théâtre peut interroger la domination coloniale et ses héritages.',
        explanation: 'Certains dramaturges représentent les conséquences politiques et humaines de la colonisation et des périodes qui suivent les indépendances. Le spectacle permet alors de questionner la domination et la construction de la liberté.',
        example: { author: 'Aimé Césaire', work: 'La Tragédie du roi Christophe', detail: 'La pièce met en scène Christophe dans l’Haïti issue de l’indépendance et interroge les difficultés de la construction politique après la rupture avec la domination coloniale.', verification: 'Pièce de Césaire publiée par Présence africaine en 1963 ; elle appartient aux œuvres dramatiques liées aux questions de décolonisation.' },
        phraseToRemember: 'Le théâtre peut interroger les conséquences de la domination et de la décolonisation.',
        variants: v(['La scène peut réfléchir aux difficultés qui suivent une libération politique.', 'Le théâtre peut interroger les héritages de la domination coloniale.', 'Le dramaturge peut représenter les tensions de la construction d’un État après l’indépendance.'], ['La fin d’une domination ne supprime pas automatiquement les difficultés politiques et sociales.', 'Le théâtre permet de représenter ces tensions à travers des personnages et des conflits.', 'Le spectateur est ainsi conduit à réfléchir au prix et aux défis de la liberté politique.'], ['La décolonisation peut devenir un sujet dramatique.', 'Le théâtre interroge les défis de l’indépendance.', 'La liberté politique n’efface pas toutes les difficultés.'])
      },
      {
        id: 'engagee-femmes',
        argument: 'Le théâtre peut remettre en question certaines pratiques qui limitent la liberté des femmes.',
        explanation: 'Une pièce peut montrer les pressions familiales et sociales exercées sur une jeune femme et donner une place à sa volonté. Le conflit dramatique permet alors de réfléchir au choix individuel et aux normes sociales.',
        example: { author: 'Guillaume Oyono Mbia', work: 'Trois prétendants, un mari', detail: 'Juliette cherche à défendre son choix amoureux face aux projets matrimoniaux de sa famille et aux mécanismes liés à la dot.', verification: 'La BnF décrit l’œuvre comme une comédie en cinq actes de Guillaume Oyono Mbia ; son intrigue porte notamment sur le mariage et les prétendants de Juliette.' },
        phraseToRemember: 'Le théâtre peut défendre la liberté de choisir sa vie.',
        variants: v(['La scène peut donner une voix à celles qui refusent une décision imposée.', 'Le théâtre peut questionner les pressions exercées sur les jeunes femmes.', 'Les conflits familiaux peuvent servir à réfléchir à la liberté de choix.'], ['Le personnage féminin n’est pas seulement soumis aux décisions des autres : il peut agir et chercher une solution.', 'Le public observe ainsi le conflit entre les normes familiales et la volonté individuelle.', 'La pièce ouvre une réflexion sur le droit de choisir son avenir.'], ['Le théâtre peut défendre le droit au choix.', 'La scène peut faire entendre la voix des femmes.', 'Le conflit familial peut révéler une question de liberté.'])
      },
      {
        id: 'engagee-racisme',
        argument: 'Le théâtre peut dénoncer le racisme et les rapports de domination.',
        explanation: 'La scène peut représenter des rapports de pouvoir fondés sur la couleur de peau ou l’identité. Elle peut ainsi provoquer une réflexion sur les préjugés et la domination.',
        example: { author: 'Jean Genet', work: 'Les Nègres', detail: 'La pièce met en jeu des rapports de domination raciale et utilise une forme théâtrale provocante pour interroger les préjugés et le regard porté sur les personnes noires.', verification: 'Pièce de Jean Genet publiée en 1958 ; elle est couramment étudiée pour sa confrontation avec la question du racisme et de la domination.' },
        phraseToRemember: 'Le théâtre peut combattre les préjugés en les mettant en scène.',
        variants: v(['La scène peut dénoncer les préjugés raciaux.', 'Le théâtre peut interroger les rapports de domination liés au racisme.', 'Une pièce peut utiliser le spectacle pour faire réfléchir sur les discriminations.'], ['Le public est placé devant des rapports de pouvoir qui l’obligent à regarder les préjugés autrement.', 'La représentation peut provoquer une réaction et ouvrir un débat.', 'L’engagement théâtral passe ainsi par la confrontation directe avec le public.'], ['La scène peut mettre les préjugés en question.', 'Le théâtre peut dénoncer la domination raciale.', 'Représenter l’injustice peut provoquer une prise de conscience.'])
      }
    ]
  },
  {
    key: 'satirique',
    title: 'Fonction satirique',
    definition: 'Le théâtre utilise le rire, l’ironie, l’exagération ou la caricature pour ridiculiser des comportements et critiquer certains aspects de la société.',
    arguments: [
      {
        id: 'satirique-pouvoir',
        argument: 'Le théâtre peut ridiculiser les comportements des détenteurs du pouvoir.',
        explanation: 'La satire grossit les défauts et les contradictions des personnages puissants afin de les rendre visibles. Le rire devient alors un moyen de critique sociale et politique.',
        example: { author: 'Hyacinthe Kakou', work: 'On se chamaille pour un siège', detail: 'La pièce utilise le rire et les conflits autour du pouvoir pour construire une satire sociale et politique de la vie publique.', verification: 'Bibliographie Google Books/WorldCat et travaux de l’INSAAC identifient Hyacinthe Kakou comme auteur de la pièce et soulignent sa dimension satirique sociale et politique.' },
        phraseToRemember: 'Le rire peut servir à critiquer le pouvoir et la société.',
        variants: v(['La satire théâtrale ridiculise certains comportements politiques.', 'Le théâtre peut faire rire pour mieux montrer les défauts du pouvoir.', 'La caricature transforme les dérives sociales en spectacle critique.'], ['L’exagération rend les comportements plus visibles et plus faciles à juger par le public.', 'Le rire attire l’attention sur un problème qui pourrait être moins frappant s’il était présenté directement.', 'La satire associe donc divertissement et critique.'], ['Le rire peut devenir une arme critique.', 'La caricature révèle les défauts du pouvoir.', 'La satire fait réfléchir en faisant rire.'])
      },
      {
        id: 'satirique-defauts',
        argument: 'Le théâtre peut se moquer des défauts humains pour les rendre visibles.',
        explanation: 'La comédie grossit un défaut comme l’avarice, la vanité ou la crédulité. Le public rit du personnage tout en reconnaissant un comportement qui existe dans la société.',
        example: { author: 'Molière', work: 'L’Avare', detail: 'Harpagon est construit comme un personnage dominé par l’avarice, ce qui rend son obsession comique et permet d’en montrer les conséquences.', verification: 'Comédie de Molière centrée sur le personnage d’Harpagon et son avarice.' },
        phraseToRemember: 'La satire fait rire des défauts pour mieux les dénoncer.',
        variants: v(['La comédie grossit les défauts humains pour les rendre ridicules.', 'Le théâtre peut utiliser le rire pour critiquer les vices.', 'En caricaturant un défaut, la scène permet au public de prendre du recul.'], ['Le personnage comique devient une image exagérée d’un comportement réel.', 'Le rire crée une distance qui aide à observer ce comportement.', 'La critique reste donc liée au plaisir du spectacle.'], ['Le rire rend les défauts visibles.', 'La caricature aide à critiquer les vices.', 'La comédie peut corriger en faisant rire.'])
      },
      {
        id: 'satirique-societe',
        argument: 'La satire théâtrale peut dénoncer les travers d’une société.',
        explanation: 'Le dramaturge met en scène des situations exagérées ou absurdes pour attirer l’attention sur des pratiques sociales et politiques. Le public rit, mais il est aussi invité à réfléchir.',
        example: { author: 'Bernard Binlin Dadié', work: 'Les Voix dans le vent', detail: 'Dans la partie « Nahoubou chez Bacoulou », la satire du pouvoir passe par une scène caricaturale et des situations qui mettent en évidence la tyrannie et ses dérives.', verification: 'Des supports pédagogiques ivoiriens identifient explicitement cette partie comme une satire du pouvoir.' },
        phraseToRemember: 'La satire utilise le rire et l’exagération pour révéler les travers de la société.',
        variants: v(['Le théâtre peut grossir les défauts sociaux pour mieux les dénoncer.', 'L’exagération permet à la satire de rendre une injustice plus visible.', 'Le spectacle comique peut cacher une critique sérieuse de la société.'], ['La caricature attire l’attention sur des comportements qui pourraient sembler ordinaires.', 'Le public comprend alors que le rire sert aussi à porter un jugement critique.', 'La satire donne ainsi une portée sociale au divertissement.'], ['La satire révèle les travers de la société.', 'L’exagération rend la critique plus visible.', 'Le rire peut porter une critique sérieuse.'])
      }
    ]
  }
];

export function getTheatreFunctionByKey(key: TheatreFunctionKey): TheatreFunction | undefined {
  return THEATRE_FUNCTIONS_KNOWLEDGE_BASE.find(item => item.key === key);
}
