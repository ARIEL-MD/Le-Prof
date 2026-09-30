export interface AnnaleItem {
  id: string;
  type: "commentaire_compose" | "dissertation";
  title: string;
  sessionOrReference: string;
  author: string;
  work?: string;
  level: string;
  subjectExcerpt: string;
  fullStatement: string;
  introduction: {
    presentation?: string;
    amorce?: string;
    themesOuCentresInteret?: string[];
    problematique?: string;
    annoncePlan: string;
    texteComplet: string;
  };
  developpement: {
    parties: {
      titre: string;
      contenu: string;
      citationsEtProcedes?: string[];
    }[];
    texteComplet: string;
  };
  conclusion: {
    bilan: string;
    ouverture: string;
    texteComplet: string;
  };
  keywords: string[];
}

export const ANNALES_FRANCAIS_MAHAMAT_BASE: AnnaleItem[] = [
  // =========================================================================
  // 1. COMMENTAIRES COMPOSÉS : LA TRAGÉDIE DU ROI CHRISTOPHE (AIMÉ CÉSAIRE)
  // =========================================================================
  {
    id: "annale-cesaire-christophe-sujet-1",
    type: "commentaire_compose",
    title: "Commentaire composé : La Tragédie du Roi Christophe — Appel à la conscience nationale",
    sessionOrReference: "Terminale A / Lycée Le Nouveau Prodige — Sujet 1",
    author: "Aimé Césaire",
    work: "La Tragédie du Roi Christophe (Acte 1, scène 2)",
    level: "Terminale A, C, D",
    subjectExcerpt: "« Assez ! Qu'est ce que ce peuple qui, pour conscience nationale, n'a qu'un conglomérat de ragots ! Peuple haïtien, Haïti a moins à craindre des français que d'elle-même ! »",
    fullStatement: `« Assez ! Qu’est ce que ce peuple qui, pour conscience nationale, n’a qu’un conglomérat de ragots ! Peuple haïtien, Haïti a moins à craindre des français que d’elle-même ! L’ennemi de ce peuple, c’est son indolence, son effronterie, sa haine de la discipline, l’esprit de jouissance et de torpeur. Messieurs, pour l’honneur et la survie de ce pays, je ne veux pas qu’il puisse jamais être dit, jamais être soupçonné dans le monde que dix ans de liberté nègre, dix ans de laisser-aller et de dimension nègre suffiront pour que soit dilapidé le trésor que le martyr de notre peuple a amassé en cent ans de labeur et de coups de fouet. Aussi bien, qu’on se le dise dès à présent, avec moi vous n’aurez pas le droit d’être fatigués. Allez, messieurs ! Dispersez-vous ! ».`,
    introduction: {
      presentation: "Extrait de la pièce théâtrale La Tragédie du Roi Christophe (Acte 1, scène 2), écrite par Aimé Césaire, écrivain martiniquais, militant anticolonialiste et l'un des fondateurs de la négritude, parue en 1963.",
      themesOuCentresInteret: [
        "L'appel véhément lancé par le roi Christophe pour une prise de conscience nationale",
        "Son souci inflexible de combattre l'indolence et la paresse pour préserver la liberté conquise"
      ],
      annoncePlan: "Notre analyse méthodique sera axée autour de ces deux centres d'intérêt : d'abord le cri d'alarme pour la conscience nationale, puis la lutte impitoyable contre la paresse.",
      texteComplet: `Le texte soumis à notre appréciation est extrait de la pièce théâtrale La Tragédie du Roi Christophe (Acte 1, scène 2), écrite par Aimé Césaire, écrivain martiniquais, militant anticolonialiste et l’un des pères fondateurs de la négritude. L’œuvre est parue en 1963 au lendemain des indépendances des pays africains. L’extrait est une violente tirade de colère du roi Christophe. À travers cette scène se dégagent deux centres d’intérêt majeurs : l’appel lancé par le roi Christophe pour une prise de conscience nationale et son souci impérieux de combattre la paresse et ses conséquences destructrices. Notre commentaire sera axé sur ces deux thèmes.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Le cri d'alarme et l'appel vibrant à la conscience nationale",
          contenu: `Le roi Christophe, indigné par l'attitude de son peuple, lance un appel solennel à la prise de conscience. Cet appel prend la forme d’un véritable cri d’alarme marqué par l’emploi successif de l'injonction et de l'interrogation rhétorique : « Assez ! Qu’est-ce que ce peuple qui... ». L’apostrophe directe « Peuple haïtien » et les impératifs « Allez, messieurs ! Dispersez-vous ! » traduisent l'urgence et la gravité de la situation. Le roi utilise les pronoms « Je », « moi » et « vous » pour dramatiser le face-à-face entre le chef visionnaire et la collectivité. Il dénonce l'illusion d'une indépendance qui se réduirait à des rumeurs : un simple « conglomérat de ragots ». Pour Christophe, l’ennemi mortel n’est plus extérieur mais intérieur : c'est le relâchement civique et moral.`,
          citationsEtProcedes: ["« Assez ! Qu'est ce que ce peuple... » (phrase exclamative et interrogative)", "« Peuple haïtien » (apostrophe solennelle)", "« Allez, messieurs ! Dispersez-vous ! » (mode impératif)"]
        },
        {
          titre: "2. La dénonciation de l'indolence et le devoir sacré du travail",
          contenu: `Dans le second mouvement de sa tirade, Christophe fustige la complaisance et le repos prématuré. L’accumulation des termes péjoratifs (« indolence, effronterie, haine de la discipline, l'esprit de jouissance et de torpeur ») dresse le réquisitoire implacable de la dérive qui menace la jeune nation. Par la répétition de l'adverbe négatif d'intensité « jamais » (« jamais être dit, jamais être soupçonné »), Christophe refuse catégoriquement que le sacrifice séculaire des esclaves (« cent ans de labeur et de coups de fouet ») soit anéanti par « dix ans de laisser-aller ». Pour lui, la liberté n'est pas une récréation mais une responsabilité héroïque, scellée par la sentence finale : « avec moi vous n’aurez pas le droit d’être fatigués ».`,
          citationsEtProcedes: ["Accumulation : « indolence, effronterie, haine de la discipline... »", "Antithèse : « cent ans de labeur » opposés à « dix ans de liberté nègre »", "Sentence prescriptive : « avec moi vous n'aurez pas le droit d'être fatigués »"]
        }
      ],
      texteComplet: `Nous voyons d'abord apparaître dans ce passage le roi Christophe en proie à une vive colère devant le comportement de ses concitoyens. Il lance un appel pressant à une prise de conscience nationale. L’appel du roi Christophe est un véritable cri d’alarme. On le sent par l’emploi combiné de l’impératif et de l’interrogatif : « Assez ! Qu’est-ce que ce peuple qui, pour conscience nationale, n’a qu’un conglomérat de ragots ! ». Il interpelle vivement ses auditeurs par l’apostrophe « Peuple haïtien » ; l'opposition entre les pronoms personnels « Je », « moi » et « vous » souligne l’autorité menaçante du souverain qui exige un sursaut immédiat. Christophe rappelle avec force qu'Haïti a moins à craindre de ses anciens maîtres que de ses propres démons intérieurs.

Dans le second temps de cette tirade, Christophe passe de la fureur aux avertissements stratégiques pour la survie de la patrie. L’accumulation des termes dépréciatifs (« indolence, effronterie, haine de la discipline, esprit de jouissance et de torpeur ») justifie son indignation. Christophe refuse de laisser le peuple retomber dans la misère morale. La répétition de la négation forte « jamais » témoigne de sa volonté inébranlable de hisser Haïti au rang des nations respectées. Il met en contraste le martyre de cent ans de travaux forcés sous le joug colonial et le risque de tout dilapider en dix ans d'incurie. Face aux citoyens qui croient que l'indépendance rime avec insouciance, Christophe impose une discipline d'acier : « avec moi vous n’aurez pas le droit d’être fatigués ».`
    },
    conclusion: {
      bilan: "En somme, Aimé Césaire met en scène dans cet extrait l'indignation tragique du roi Christophe face à l'insouciance de son peuple qui menace de conduire le pays à la dérive.",
      ouverture: "Cet appel dramatique à la mobilisation générale et à la rigueur civique sera-t-il compris par le peuple, ou mènera-t-il à la rupture tragique entre le souverain et ses sujets ?",
      texteComplet: `En somme, dans cet extrait, Aimé Césaire met en scène l’indignation du roi Christophe devant le comportement désolant de son peuple, attitude susceptible de faire sombrer la nation dans le néant. Ne pouvant tolérer un tel relâchement après tant de sacrifices, il lance un appel pathétique et autoritaire à la mobilisation générale. Cet appel impérieux sera-t-il entendu ou scellera-t-il la destinée tragique du bâtisseur de la Citadelle ?`
    },
    keywords: ["tragédie du roi christophe", "césaire", "haïti", "conscience nationale", "indolence", "fatigués", "liberté nègre", "commentaire composé"]
  },

  {
    id: "annale-cesaire-christophe-sujet-2",
    type: "commentaire_compose",
    title: "Commentaire composé : La Tragédie du Roi Christophe (BAC A4 2010 & BAC D 2012) — Magny & Christophe",
    sessionOrReference: "BAC A4 2010 / BAC D 2012 — Sujet 2",
    author: "Aimé Césaire",
    work: "La Tragédie du Roi Christophe (Acte 1, scène 6)",
    level: "Terminale A, C, D",
    subjectExcerpt: "MAGNY : « Sire, je m’excuse, mais nous attendons l’heure de l’assaut... » — CHRISTOPHE : « Il n'y aura pas d'assaut. J'abandonne toute idée de campagne... J'ai dépêché un émissaire à Pétion... »",
    fullStatement: `MAGNY : Sire, je m’excuse, mais nous attendons l’heure de l’assaut et l’impatience gagne les troupes.
CHRISTOPHE : Laissons cela, Magny.
MAGNY : Sire, jamais occasion n’a été plus belle. PÉTION est aux abois. Embrassez votre fortune.
CHRISTOPHE : Laissons cela, vous dis-je. Il n’y aura pas d’assaut. J’abandonne toute idée de campagne, et d’abord le siège de cette ville. J’ai dépêché un émissaire à PÉTION. J’espère qu’il comprendra que le moment est venu d’en finir avec nos querelles pour édifier ce pays et unir ce peuple contre un danger plus proche qu’on ne suppose et qui menacerait jusqu’à son existence même !`,
    introduction: {
      presentation: "Extrait de la pièce théâtrale La Tragédie du Roi Christophe (Acte 1, scène 6) d'Aimé Césaire, parue en 1963.",
      themesOuCentresInteret: [
        "La détermination belliqueuse du général Magny impatient de lancer l'assaut destructeur",
        "Le refus souverain de Christophe qui privilégie la négociation fraternelle et l'union sacrée"
      ],
      annoncePlan: "Nous étudierons d'une part l'ardeur guerrière de Magny, puis d'autre part la hauteur politique de Christophe qui choisit la conciliation.",
      texteComplet: `Le texte soumis à notre appréciation est extrait de la pièce théâtrale La Tragédie du Roi Christophe (Acte 1, scène 6), écrite par Aimé Césaire, écrivain martiniquais, militant anticolonialiste et figure de proue de la négritude. L’œuvre est parue en 1963 au lendemain des indépendances africaines. L’extrait rapporte le dialogue crucial entre le général Magny et le roi Christophe alors que Port-au-Prince est encerclée. Deux centres d’intérêt retiennent notre attention : l’insistance de Magny en faveur d’une offensive militaire immédiate et le refus catégorique du roi Christophe qui prône le rassemblement patriotique. Examinons ces deux aspects.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'impatience militaire de Magny et l'option de la force",
          contenu: `Magny incarne la logique du soldat conquérant pour qui la victoire s'obtient par l'anéantissement de l'adversaire. Il use d'une formule de déférence courtoise (« Sire, je m'excuse ») pour aussitôt presser le monarque : « nous attendons l'heure de l'assaut et l'impatience gagne les troupes ». Pour lui, la faiblesse passagère de Pétion (« Pétion est aux abois ») est une opportunité providentielle qu'il faut saisir sans scrupule (« Embrassez votre fortune »). Magny raisonne selon une logique binaire de guerre civile où la survie dépend de l'écrasement du rival politique.`,
          citationsEtProcedes: ["« L'impatience gagne les troupes » (métonymie de l'ardeur martiale)", "« Pétion est aux abois » (métaphore de la traque)", "« Embrassez votre fortune » (injonction ambitieuse)"]
        },
        {
          titre: "2. La stature de l'homme d'État : le choix de la paix et de l'unité nationale",
          contenu: `À l'ardeur destructrice de son général, Christophe oppose la lucidité supérieure du dirigeant responsable. Par la répétition de l'impératif « Laissons cela, vous dis-je », il balaie la tentation du carnage fratricide. Sa décision est sans appel : « Il n'y aura pas d'assaut ». En envoyant un émissaire à son rival Pétion, Christophe subordonne son orgueil personnel à l'intérêt supérieur de la nation. Il rappelle la gravité des enjeux : la guerre intestine fragilise le pays devant la menace coloniale permanente qui guette Haïti (« un danger plus proche qu'on ne suppose »). La véritable victoire consiste à bâtir ensemble (« édifier ce pays et unir ce peuple ») plutôt qu'à triompher sur des ruines.`,
          citationsEtProcedes: ["« Laissons cela » (phrase impérative répétée, autorité ferme)", "« Il n'y aura pas d'assaut » (phrase déclarative à valeur catégorique)", "« Édifier ce pays et unir ce peuple » (termes d'édification et de concorde)"]
        }
      ],
      texteComplet: `Dans un premier temps, le dialogue met en relief l’acharnement guerrier de Magny. Le chef d’état-major s'exprime avec une insistance fébrile, pressé de déclencher l'attaque décisive : « Sire, je m’excuse, mais nous attendons l’heure de l’assaut ». Voyant l’armée loyaliste en position de force, Magny considère Pétion comme acculé : « Pétion est aux abois. Embrassez votre fortune ». Pour le militaire, la politique est un rapport de force où il s'agit de vaincre ou de périr, illustrant la maxime tragique de la gloire acquise au combat.

Dans un second temps, Christophe révoque net ce plan de bataille sanglant. Par l’injonction répétée « Laissons cela, vous dis-je », il coupe court aux velléités guerrières de son officier. Conscient que son pays est épuisé par les luttes intestines, Christophe préfère tendre la main à son frère d'armes devenu rival : « J’ai dépêché un émissaire à Pétion ». Le souverain s'élève au rang de véritable homme d'État en discernant que la survie d'Haïti exige la réconciliation nationale face aux puissances coloniales toujours menaçantes (« un danger plus proche qu’on ne suppose et qui menacerait jusqu’à son existence même ! »).`
    },
    conclusion: {
      bilan: "Aimé Césaire illustre ici la confrontation entre la vengeance armée représentée par Magny et la sagesse politique unificatrice incarnée par Christophe.",
      ouverture: "Cette noble tentative de réconciliation fraternelle entre Christophe et Pétion parviendra-t-elle à surmonter les déchirements et les rancœurs de l'histoire haïtienne ?",
      texteComplet: `En somme, Aimé Césaire nous présente dans cette scène un conflit de doctrines politiques : la passion belliqueuse de Magny, prêt à ensanglanter Port-au-Prince, se heurte au patriotisme éclairé de Christophe qui privilégie le dialogue pour sauvegarder l'avenir de la jeune république noire. Cette main tendue suffira-t-elle à sceller l'union du peuple haïtien ?`
    },
    keywords: ["bac a4 2010", "bac d 2012", "magny", "pétion", "christophe", "tragédie du roi christophe", "assaut", "émissaire", "commentaire composé"]
  },

  {
    id: "annale-cesaire-christophe-sujet-3",
    type: "commentaire_compose",
    title: "Commentaire composé : La Tragédie du Roi Christophe (BAC D 2014) — Pauvre Afrique ! Pauvre Haïti !",
    sessionOrReference: "BAC D 2014 — Sujet 3",
    author: "Aimé Césaire",
    work: "La Tragédie du Roi Christophe (Acte 1, scène 6)",
    level: "Terminale A, C, D",
    subjectExcerpt: "CHRISTOPHE : « Pauvre Afrique ! Je veux dire pauvre Haïti ! C’est la même chose d’ailleurs. Là-bas la tribu, les langues les fleuves... Poussière ! Poussière ! Partout de la poussière ! Pas de pierre ! »",
    fullStatement: `Christophe : « Pauvre Afrique ! Je veux dire pauvre Haïti ! C’est la même chose d’ailleurs. Là-bas la tribu, les langues les fleuves, les castes, la forêt, village contre village, hameau contre hameau. Poussière ! Poussière ! Partout de la poussière ! Pas de pierre ! De la poussière ! De la merde et de la poussière ! Dites donc, MAGNY, donnez aux troupes l’ordre de marche. Vers le Cap ! Vers le Nord. En avant, route ! ».`,
    introduction: {
      presentation: "Extrait de La Tragédie du Roi Christophe (Acte 1, scène 6) d'Aimé Césaire, publié en 1963.",
      themesOuCentresInteret: [
        "L'amère comparaison historique et sociopolitique entre les déchirements de l'Afrique et ceux d'Haïti",
        "L'indignation révoltée de Christophe devant l'inconsistance ambiante et son ordre de mobilisation bâtisseuse"
      ],
      annoncePlan: "Nous analyserons en premier lieu le parallèle douloureux entre Afrique et Haïti, puis la volonté rageuse de Christophe de substituer la pierre solide à la poussière.",
      texteComplet: `Le texte proposé à notre étude est extrait de La Tragédie du Roi Christophe (Acte 1, scène 6), œuvre théâtrale d'Aimé Césaire parue en 1963. Au lendemain des indépendances, Césaire médite sur le destin des peuples noirs émancipés. Dans ce monologue fiévreux, Christophe associe le destin d’Haïti à celui du continent africain. Deux centres d’intérêt retiennent notre attention : la parenté tragique des maux qui frappent l’Afrique et Haïti (divisions intestines et instabilité), puis le cri de révolte de Christophe contre l'inconsistance du néant symbolisé par la poussière.`
    },
    developpement: {
      parties: [
        {
          titre: "1. La tragique gémellité des déchirements africains et antillais",
          contenu: `L'exclamation liminaire « Pauvre Afrique ! Je veux dire pauvre Haïti ! C'est la même chose d'ailleurs » abolit la frontière géographique pour dénoncer une condition commune d'aliénation. L'accumulation rythmée de substantifs (« la tribu, les langues, les fleuves, les castes, la forêt ») et le chiasme « village contre village, hameau contre hameau » dépeignent l'émiettement tribal et fratricide qui ruine les forces vives du monde noir. L'Afrique d'hier comme l'Haïti d'aujourd'hui sont menacées d'auto-destruction par l'esprit de faction et l'incapacité à s'unir autour d'un grand dessein national.`,
          citationsEtProcedes: ["« Pauvre Afrique ! Je veux dire pauvre Haïti ! » (anadiplose et glissement analogique)", "« Village contre village, hameau contre hameau » (parallélisme et anaphore de la discorde)", "Accumulation descriptive des divisions sociales et géographiques"]
        },
        {
          titre: "2. La métaphore de la poussière contre l'exigence de la pierre : l'ordre de marche",
          contenu: `Le second mouvement est marqué par une fureur verbale où le terme « poussière » est répété de façon obsessionnelle (« Poussière ! Poussière ! Partout de la poussière ! Pas de pierre ! »). La poussière est le symbole absolu de l'informe, de l'éparpillement, de la stérilité et de la disparition sans trace historique. À l'inverse, la « pierre » absente représente le monument durable, la structure politique, la citadelle inébranlable que Christophe veut ériger pour son peuple. Rompant avec la plainte passive, Christophe bascule dans l'action conquérante : les ordres brefs (« Donnez aux troupes l'ordre de marche. Vers le Cap ! Vers le Nord. En avant, route ! ») sonnent le départ vers la reconstruction méthodique.`,
          citationsEtProcedes: ["Répétition anaphorique : « Poussière ! Poussière ! Partout de la poussière ! »", "Antithèse métaphorique : « Poussière » (éparpillement stérile) vs « Pierre » (solidité souveraine)", "Phrases averbales et impératives marquant l'impulsion motrice (« En avant, route ! »)"]
        }
      ],
      texteComplet: `Dans la première partie, Césaire établit par la bouche de Christophe une analogie poignante entre l’Afrique et Haïti. Par le glissement significatif « Pauvre Afrique ! Je veux dire pauvre Haïti ! C’est la même chose d’ailleurs », le souverain unit les deux rives de l'Atlantique noir dans un même constat de vulnérabilité. Les adverbes et déictiques renvoient à un passé de déchirement : « Là-bas la tribu, les langues les fleuves, les castes, la forêt, village contre village, hameau contre hameau ». Cette énumération saccadée met en évidence la balkanisation, le repli clanique et les haines intestines qui perpétuent la faiblesse des peuples opprimés.

Dans la seconde partie, la tirade s’enflamme par le biais de la métaphore de la matière. La répétition convulsive du mot « poussière » traduit le dégoût du roi face à un peuple qui refuse de s'édifier : « Poussière ! Poussière ! Partout de la poussière ! Pas de pierre ! ». La poussière incarne l'évanescence, le vide et la fragilité qui s'envole au moindre vent, tandis que la « pierre » est l'emblème de la pérennité, de la force collective et de la souveraineté. Refusant de capituler devant cette inertie, Christophe tranche par l'action martiale : il ordonne à Magny la marche vers le Nord et le Cap, là où doit s'élever la Citadelle qui inscrira son peuple dans le granit de l'Histoire.`
    },
    conclusion: {
      bilan: "En définitive, cet extrait montre un Christophe lucide et tourmenté, refusant la fatalité de l'émiettement historique pour contraindre son peuple à bâtir un destin grandiose.",
      ouverture: "La volonté démiurgique de bâtir dans le roc suffira-t-elle à triompher de la précarité humaine sans écraser les bâtisseurs sous le faix de l'effort ?",
      texteComplet: `En somme, dans cet extrait puissant, Aimé Césaire dépeint le drame de la conscience noire aux prises avec ses propres divisions. Face à la poussière de l'incurie et du morcellement tribal, Christophe oppose la solidité de la pierre et l'exigence d'une marche inflexible vers l'édification nationale.`
    },
    keywords: ["bac d 2014", "pauvre afrique", "pauvre haiti", "poussière", "pierre", "citadelle", "césaire", "commentaire composé"]
  },

  // =========================================================================
  // 2. COMMENTAIRES COMPOSÉS : LES MAINS SALES (JEAN-PAUL SARTRE)
  // =========================================================================
  {
    id: "annale-sartre-mains-sales-sujet-1",
    type: "commentaire_compose",
    title: "Commentaire composé : Les Mains sales — Idéalisme d'Hugo & Réalisme politique d'Hoederer",
    sessionOrReference: "Terminale A / Lycée Le Nouveau Prodige — Sujet 1 (Tableau 5, scène 3)",
    author: "Jean-Paul Sartre",
    work: "Les Mains sales (5e tableau, scène 3)",
    level: "Terminale A, C, D",
    subjectExcerpt: "HUGO : « À quoi sert de lutter pour la libération des hommes, si on les méprise assez pour leur bourrer le crâne ? » — HOEDERER : « Tous les moyens sont bons quand ils sont efficaces. »",
    fullStatement: `HUGO : Je n’ai jamais menti. Je… À quoi sert de lutter pour la libération des hommes, si on les méprise assez pour leur bourrer le crâne ?
HOEDERER : Je mentirai quand il faudra et je ne méprise personne. Le mensonge, ce n’est pas moi qui l’ai inventé : il est né dans une société divisée en classes et chacun de nous l’a hérité en naissant. Ce n’est pas en refusant de mentir que nous abolirons le mensonge : c’est en usant de tous les moyens pour supprimer les classes.
HUGO : Tous les moyens ne sont pas bons.
HOEDERER : Tous les moyens sont bons quand ils sont efficaces.`,
    introduction: {
      presentation: "Extrait de la pièce Les Mains sales (5e tableau, scène 3) de Jean-Paul Sartre, écrivain, philosophe et chef de file de l'existentialisme, parue en 1948 en pleine Guerre froide.",
      themesOuCentresInteret: [
        "L'idéalisme moral intransigeant et la quête de pureté d'Hugo",
        "Le réalisme politique, le pragmatisme et le machiavélisme assumé d'Hoederer"
      ],
      annoncePlan: "Notre commentaire confrontera la posture éthique et désincarnée d'Hugo avec l'efficacité dialectique et engagée d'Hoederer.",
      texteComplet: `Le texte soumis à notre appréciation est extrait de la pièce dramatique Les Mains sales (5e tableau, scène 3), écrite en 1948 par Jean-Paul Sartre, philosophe existentialiste majeur du XXe siècle. L’extrait met en scène l’affrontement idéologique culminant entre le jeune intellectuel bourgeois Hugo et le dirigeant ouvrier Hoederer au sujet de la morale de l’action politique. Deux centres d’intérêt majeurs structurent ce dialogue : d’une part, l’idéalisme éthique et intransigeant d’Hugo, et d’autre part, le pragmatisme politique d’Hoederer pour qui la fin justifie l’emploi de moyens efficaces.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'idéalisme moral d'Hugo : le refus du compromis et la pureté des principes",
          contenu: `Hugo se réclame d’une pureté absolue, symbolisée par sa fière déclaration : « Je n’ai jamais menti ». Pour lui, la lutte révolutionnaire doit être exempte de toute tache et respecter scrupuleusement la dignité des prolétaires. Il dénonce le mensonge d'appareil comme une trahison et un mépris de classe : « À quoi sert de lutter pour la libération des hommes, si on les méprise assez pour leur bourrer le crâne ? ». Refusant toute compromission avec le parti régent ou la droite nationaliste, Hugo campe sur une morale kantienne où l’être humain ne doit jamais être traité comme un moyen mais comme une fin. Son refus du machiavélisme (« Tous les moyens ne sont pas bons ») trahit cependant son extraction bourgeoise et son impuissance à entrer dans le réel concret de la lutte politique.`,
          citationsEtProcedes: ["« Je n'ai jamais menti » (affirmation catégorique de pureté morale)", "Interrogation indignée : « À quoi sert de lutter... si on les méprise assez pour leur bourrer le crâne ? »", "Refus de la compromission : « Tous les moyens ne sont pas bons »"]
        },
        {
          titre: "2. Le réalisme politique d'Hoederer : l'efficacité historique et les « mains sales »",
          contenu: `À l'opposé, Hoederer incarne le militant d'action pour qui la politique n'est pas un exercice spéculatif mais la transformation concrète du monde. Il assume sereinement le recours au mensonge tactique (« Je mentirai quand il faudra ») sans pour autant mépriser les hommes. Selon une analyse matérialiste et marxiste, il rappelle que le mensonge est le produit historique de l'injustice sociale (« il est né dans une société divisée en classes »). Pour Hoederer, la pureté est une illusion d'esthète qui abandonne le peuple à son sort : la seule morale révolutionnaire réside dans la victoire sur la misère. Sa réplique finale claque comme un axiome machiavélien : « Tous les moyens sont bons quand ils sont efficaces ». Agir, c'est nécessairement accepter d'avoir « les mains sales » pour sauver des vies d'hommes réels.`,
          citationsEtProcedes: ["Sentence pragmatique : « Je mentirai quand il faudra et je ne méprise personne »", "Analyse sociologique matérialiste : « Le mensonge... est né dans une société divisée en classes »", "Axiome final d'efficacité : « Tous les moyens sont bons quand ils sont efficaces »"]
        }
      ],
      texteComplet: `Dans un premier temps, Sartre met en lumière la posture idéaliste d’Hugo. Le jeune bourgeois révolté proclame sa droiture morale par une formule absolue : « Je n’ai jamais menti ». Hugo conçoit l'engagement politique comme un sacerdoce immaculé où la fin ne peut être dissociée des moyens. Il refuse catégoriquement d'utiliser le mensonge pour manipuler les masses, interpellant Hoederer avec amertume : « À quoi sert de lutter pour la libération des hommes, si on les méprise assez pour leur bourrer le crâne ? ». Pour Hugo, la politique doit obéir à des impératifs catégoriques éthiques ; transiger avec la vérité revient à souiller la cause de la libération. Cette exigence de perfection le conduit à récuser le pragmatisme partisan : « Tous les moyens ne sont pas bons ».

Dans un second temps, Hoederer réplique avec l'autorité d'un stratège aguerri. Loin de s'offusquer, il replace le problème sur le terrain matérialiste de l'Histoire : « Le mensonge, ce n’est pas moi qui l’ai inventé : il est né dans une société divisée en classes ». Pour le chef révolutionnaire, refuser le mensonge tactique dans un monde corrompu relève de la lâcheté intellectuelle. On n'émancipe pas les prolétaires avec des scrupules de couvent, mais en renversant l'ordre capitaliste par tous les leviers disponibles. Hoederer assène alors la formule emblématique de sa philosophie politique : « Tous les moyens sont bons quand ils sont efficaces ». Pour lui, la pureté est une attitude stérile, et seul compte le résultat qui abrège la souffrance des exploités.`
    },
    conclusion: {
      bilan: "En somme, Sartre orchestre ici le duel éternel entre la morale déontologique (la pureté intransigeante d'Hugo) et l'éthique de la responsabilité politique (l'efficacité historique d'Hoederer).",
      ouverture: "Cette tension philosophique majeure pose la question universelle : peut-on gouverner ou faire la révolution sans jamais se salir les mains ?",
      texteComplet: `En définitive, cet affrontement magistral condense le dilemme central de l'existentialisme sartrien. En opposant l'angélisme inefficace d'Hugo à la lucidité tragique d'Hoederer, Sartre montre que l'action véritable exige le sacrifice de son innocence : pour transformer le monde, il faut accepter d'avoir les mains plongées dans la pâte humaine et les compromis du réel.`
    },
    keywords: ["les mains sales", "sartre", "hugo", "hoederer", "tous les moyens sont bons", "pureté", "mensonge", "commentaire composé"]
  },

  // =========================================================================
  // 3. COMMENTAIRES COMPOSÉS : L'ÉTUDIANT DE SOWETO (MAOUNDOUÉ NAÏNDOUBA)
  // =========================================================================
  {
    id: "annale-naindouba-soweto-sujet-2",
    type: "commentaire_compose",
    title: "Commentaire composé : L'Étudiant de Soweto — Le ras-le-bol de Mulube et la peur des oppresseurs",
    sessionOrReference: "Terminale A / Lycée Le Nouveau Prodige — Sujet 2 (Page 60)",
    author: "Maoundoué Naïndouba",
    work: "L'Étudiant de Soweto (5e tableau, scène 1)",
    level: "Terminale A, C, D",
    subjectExcerpt: "MULUBE : « Qui a peur de qui ? ... Mais les peureux, c'est vous. Nous, Nègres, constituons, pour vous, une force redoutable. Nous sommes dix-huit millions, vous, quatre seulement... »",
    fullStatement: `MULUBE : « Encore un des traits de votre naïveté métaphysique. Qui a peur de qui ? Vous pourriez avoir raison dans la mesure où vous avez des armes et nous, rien. Mais les peureux, c’est vous. Nous, Nègres, constituons, pour vous, une force redoutable. Nous sommes dix-huit millions, vous, quatre seulement. Nous vous inondons, vous avalez, vous obsédez, bien que vous soyez armés jusqu’aux dents. Vos moyens de répression physique vous semblent encore insuffisants, et vous avez trouvé quelque chose de plus subtil, de plus raffiné : le Broerderbond, sorte de Ku Klux Klan, pour terroriser le cafre… Il faut rabaisser le niveau intellectuel du nègre, empêcher coûte que coûte que des négrillons aient le même niveau intellectuel que les blancs tout en les massacrant par dizaines de milliers. Tous les moyens sont bons pour vous. Oui, c’est vous qui avez peur, messieurs les blancs ! Peur de nous, le géant noir croupissant dans la misère ».`,
    introduction: {
      presentation: "Extrait de la pièce L'Étudiant de Soweto (5e tableau, scène 1), écrite en 1978 par Maoundoué Naïndouba, dramaturge et diplomate tchadien engagé contre l'apartheid en Afrique du Sud.",
      themesOuCentresInteret: [
        "Le courage héroïque et la prise de parole démystificatrice de Mulube affirmant la supériorité du nombre noir",
        "La dénonciation de la terreur blanche, de l'apartheid intellectuel et de la lâcheté panique des oppresseurs"
      ],
      annoncePlan: "Nous examinerons d'abord le renversement psychologique opéré par Mulube qui proclame la force invincible de son peuple, puis la mise à nu de l'appareil oppressif raciste.",
      texteComplet: `Le passage proposé à notre commentaire est extrait de la pièce L’Étudiant de Soweto (5e tableau, scène 1), écrite en 1978 par Maoundoué Naïndouba, dramaturge tchadien militant contre la ségrégation raciale. L’œuvre a été publiée à la suite des massacres de la jeunesse scolaire de Soweto en 1976. L’extrait est la fière réplique du héros Mulube face à l’inspecteur de police blanche. Deux centres d’intérêt retiennent notre attention : d'une part, le courage indomptable de Mulube qui retourne le rapport de force par la puissance démographique des opprimés, et d'autre part, la dénonciation féroce des machinations d'abêtissement et de terreur déployées par le régime d'apartheid.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Le renversement du rapport de force : la prise de parole émancipatrice de Mulube",
          contenu: `Dès l'attaque de sa tirade, Mulube refuse la soumission psychologique. Par la question rhétorique « Qui a peur de qui ? », il contredit l'arrogance policière. Il admet la disparité matérielle (« vous avez des armes et nous, rien ») pour mieux exalter la force morale et humaine des colonisés. L'opposition numérique implacable (« Nous sommes dix-huit millions, vous, quatre seulement ») démonte le mythe de la suprématie afrikaner. L'accumulation des verbes à la première personne du pluriel (« Nous vous inondons, vous avalons, vous obsédons ») dépeint la marée humaine irrésistible des opprimés, qualifiée de « géant noir » capable de briser ses chaînes.`,
          citationsEtProcedes: ["Interrogation défiante : « Qui a peur de qui ? »", "Opposition statistique écrasante : « dix-huit millions contre quatre seulement »", "Accumulation rythmée de verbes d'invasion psychologique (« inondons, avalons, obsédons »)"]
        },
        {
          titre: "2. La dénonciation des instruments d'oppression et de l'apartheid scolaire",
          contenu: `Dans le second mouvement, Mulube dissèque les rouages du système d'apartheid. Constatant que la violence des fusils ne suffit pas à briser la résistance noire, il démasque les organisations secrètes (« le Broederbond, sorte de Ku Klux Klan ») et dévoile l'arme la plus pernicieuse des colons : le Bantu Education Act, conçu pour bloquer l'émancipation intellectuelle (« rabaisser le niveau intellectuel du nègre, empêcher coûte que coûte que des négrillons aient le même niveau intellectuel que les blancs »). Cette terreur culturelle et les massacres de masse (« massacrant par dizaines de milliers ») révèlent la panique existentielle des racistes. Le verdict de Mulube est sans appel : « Oui, c'est vous qui avez peur, messieurs les blancs ! ».`,
          citationsEtProcedes: ["Analogie historique : « le Broederbond, sorte de Ku Klux Klan »", "Dénonciation de la discrimination scolaire (« rabaisser le niveau intellectuel »)", "Apostrophe ironique et triomphale : « messieurs les blancs ! Peur de nous, le géant noir »"]
        }
      ],
      texteComplet: `Dans la première partie, la tirade de Mulube renverse avec éclat les stéréotypes de la domination coloniale. Interpellant l’inspecteur de police qui prétendait que les Noirs tremblaient devant le maître blanc, l’étudiant rétorque avec fierté : « Mais les peureux, c’est vous. Nous, Nègres, constituons, pour vous, une force redoutable ». Mulube ne nie pas le monopole de la violence d'État, mais il lui oppose l'écrasante réalité démographique : « Nous sommes dix-huit millions, vous, quatre seulement ». L’emploi des verbes dynamiques et englobants (« Nous vous inondons, vous avalons, vous obsédons ») illustre la puissance tellurique d’un peuple qui prend conscience de sa majorité historique.

Dans la deuxième partie, Mulube dévoile la stratégie machiavélique élaborée par le pouvoir blanc pour perpétuer sa domination. Face à l'échec de la simple terreur physique, les maîtres ont recours à des sociétés secrètes et à la violence institutionnelle. L'étudiant dénonce avec une lucidité chirurgicale l'organisation délibérée de l'ignorance : « Il faut rabaisser le niveau intellectuel du nègre... empêcher coûte que coûte que des négrillons aient le même niveau intellectuel que les blancs ». En imposant l'afrikaans et en limitant les programmes d'enseignement, le régime tente d'étouffer toute pensée critique. Mais cette cruauté extrême ne fait que trahir la terreur panique d'une minorité assiégée : « Peur de nous, le géant noir croupissant dans la misère ».`
    },
    conclusion: {
      bilan: "En somme, Maoundoué Naïndouba offre à travers Mulube le portrait lumineux d'une jeunesse africaine indomptable qui démasque la terreur de ses tortionnaires.",
      ouverture: "Ce sacrifice héroïque des écoliers et étudiants de Soweto allait sonner le glas historique de l'apartheid et ouvrir la voie à la libération de Nelson Mandela.",
      texteComplet: `En résumé, Maoundoué Naïndouba nous donne à voir dans cette scène magistrale l'héroïsme d'une jeunesse en révolte. Par sa parole percutante, Mulube désarme moralement l'appareil répressif blanc et démontre que la violence de l'oppresseur n'est que le masque de son angoisse face à la marée inéluctable de la justice humaine.`
    },
    keywords: ["l'étudiant de soweto", "mulube", "maoundoué naïndouba", "apartheid", "broederbond", "dix-huit millions", "peur des blancs", "commentaire composé"]
  },

  // =========================================================================
  // 4. COMMENTAIRE COMPOSÉ : COUPS DE PILON (DAVID DIOP)
  // =========================================================================
  {
    id: "annale-david-diop-afrique",
    type: "commentaire_compose",
    title: "Commentaire composé : « Afrique » dans Coups de pilon — David Diop",
    sessionOrReference: "Terminale A / Lycée Le Nouveau Prodige — Page 21",
    author: "David Diop",
    work: "Coups de pilon (Présence Africaine, 1957)",
    level: "Terminale A, C, D",
    subjectExcerpt: "« Afrique mon Afrique / Des fiers guerriers dans les savanes ancestrales... Ce dos tremblant à zébrures rouges / Qui dit oui au fouet sur les routes de midi... C’est l’Afrique ton Afrique qui repousse... L’amère saveur de la liberté. »",
    fullStatement: `Afrique mon Afrique
Afrique des fiers guerriers dans les savanes ancestrales
Afrique que chante ma grand-mère
Au bord de son fleuve lointain
Je ne t'ai jamais connue
Mais mon regard est plein de ton sang
Ton beau sang noir à travers les champs répandu
Le sang de ta sueur
La sueur de ton travail
Le travail de l'esclavage
L'esclavage de tes enfants
Afrique dis-moi Afrique
Est-ce donc toi ce dos qui se courbe
Et se couche sous le poids de l'humilité ?
Ce dos tremblant à zébrures rouges
Qui dit oui au fouet sur les routes de midi
Alors gravement une voix me répondit
Fils impétueux cet arbre robuste et jeune
Cet arbre là-bas
Splendidement seul au milieu de fleurs blanches et fanées
C'est l'Afrique ton Afrique qui repousse
Qui repousse patiemment obstinément
Et dont les fruits ont peu à peu
L'amère saveur de la liberté.`,
    introduction: {
      presentation: "Extrait du recueil poétique Coups de pilon, publié en 1957 par le poète sénégalais militant anticolonialiste David Diop.",
      themesOuCentresInteret: [
        "L'évocation douloureuse de la souffrance historique de l'Afrique humiliée par la traite et le fouet colonial",
        "La prophétie éclatante de la renaissance africaine et l'avènement inéluctable mais coûteux de la liberté"
      ],
      annoncePlan: "Nous analyserons d'abord le calvaire des humiliations ancestrales, puis l'élan vigoureux de renaissance métaphorisé par l'arbre qui repousse.",
      texteComplet: `Le texte soumis à notre appréciation est le poème emblématique « Afrique », extrait du recueil Coups de pilon publié en 1957 chez Présence Africaine par David Diop, poète sénégalais et voix ardente de la Négritude engagée. Écrit en pleine effervescence des luttes de décolonisation, ce poème est une adresse lyrique et filiale au continent d’origine. Deux centres d’intérêt retiennent notre attention : d'une part, l'évocation tragique du martyre africain marqué par la traite négrière et le fouet de l’esclavage, et d'autre part, la métaphore lumineuse de la renaissance africaine symbolisée par un arbre dressé vers la souveraineté.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Le chant de deuil et la mémoire du calvaire colonial",
          contenu: `David Diop s'adresse à l'Afrique par une anaphore affective (« Afrique mon Afrique »). Né en exil en France, il affirme son appartenance par la communauté de sang et de mémoire : « Je ne t'ai jamais connue / Mais mon regard est plein de ton sang ». Par une gradation ascendante et pathétique (« sang -> sueur -> travail -> esclavage »), le poète résume l'exploitation féroce des hommes noirs déportés. La métaphore du « dos tremblant à zébrures rouges / Qui dit oui au fouet sur les routes de midi » donne une vision charnelle et insoutenable de la violence exercée par le colonisateur. Le rythme heurté des vers libres traduit la douleur étouffée sous l'humiliation séculaire.`,
          citationsEtProcedes: ["Anaphore incantatoire : « Afrique mon Afrique »", "Gradation descendante vers la servitude : « sang -> sueur -> travail -> esclavage »", "Image poignante : « Ce dos tremblant à zébrures rouges qui dit oui au fouet »"]
        },
        {
          titre: "2. La réponse de la terre : la métaphore de l'arbre et l'amère saveur de la liberté",
          contenu: `Au milieu du poème, une rupture oraculaire intervient (« Alors gravement une voix me répondit »). La voix des ancêtres invite le poète à contempler l'horizon. La métaphore de « cet arbre robuste et jeune / Splendidement seul au milieu de fleurs blanches et fanées » illustre la vigueur intacte de l'Afrique face à une civilisation occidentale décadente (« fleurs fanées »). La répétition des adverbes d'acharnement (« patiemment, obstinément », « peu à peu ») souligne que la libération ne sera pas un don octroyé, mais une conquête laborieuse. L'oxymore final « l'amère saveur de la liberté » rappelle avec une lucidité prophétique que l'indépendance exigera encore des combats, des sacrifices et de la maturité civique.`,
          citationsEtProcedes: ["Intervention de la voix oraculaire ancestrale", "Allégorie végétale : « Cet arbre robuste et jeune... C'est l'Afrique ton Afrique qui repousse »", "Oxymore conclusif : « L'amère saveur de la liberté »"]
        }
      ],
      texteComplet: `Dans la première strophe, David Diop célèbre la mémoire de la terre ancestrale avant de plonger dans le souvenir des tortures subies par ses enfants. Bien qu'il n'ait pas vécu en Afrique durant son enfance (« Je ne t’ai jamais connue »), il porte en lui la blessure historique de son peuple. L’enchaînement en chiasme et gradation lexicale (« beau sang noir », « sueur de ton travail », « travail de l’esclavage ») restitue l'engrenage criminel du commerce triangulaire. L’image pathétique du « dos qui se courbe » sous « les zébrures rouges » du fouet témoigne de la déshumanisation du colonisé, contraint à courber l'échine sous l'arbitraire du maître.

Dans la seconde partie, le ton poétique s’élève en une vibrante prophétie d'émancipation. Interpellé par la voix grave de l'Afrique maternelle (« Fils impétueux »), le regard se tourne vers l'avenir. L’Afrique est assimilée à un « arbre robuste et jeune », symbole de fertilité et de résistance indestructible. Cet arbre s'élève « splendidement seul au milieu de fleurs blanches et fanées », suggérant le déclin inéluctable des empires coloniaux face au renouveau du monde noir. L'accession à la souveraineté est qualifiée avec gravité : ses fruits possèdent « l’amère saveur de la liberté », rappelant que l’émancipation véritable exige le courage politique, la lucidité et le labeur acharné.`
    },
    conclusion: {
      bilan: "David Diop transforme ici le chant de douleur de l'esclavage en un manifeste flamboyant d'espérance anticoloniale et de dignité retrouvée.",
      ouverture: "Ce poème reste l'un des sommets universels de la poésie de la Négritude, faisant écho aux œuvres d'Aimé Césaire et de Léon-Gontran Damas.",
      texteComplet: `En somme, David Diop brosse dans ce chef-d'œuvre un triptyque complet de l'Afrique : de l'évocation mythique des guerriers d'antan au calvaire de la colonisation, jusqu'à l'affirmation rayonnante d'une liberté chèrement acquise. L’arbre de David Diop continue de porter ses fruits amers et féconds dans les consciences de la jeunesse africaine contemporaine.`
    },
    keywords: ["david diop", "coups de pilon", "afrique mon afrique", "fiers guerriers", "zébrures rouges", "arbre robuste", "amère saveur de la liberté", "commentaire composé"]
  },

  // =========================================================================
  // 5. COMMENTAIRE COMPOSÉ : L'AVENTURE AMBIGUË (CHEIKH HAMIDOU KANE)
  // =========================================================================
  {
    id: "annale-kane-aventure-ambigue-bacd-2013",
    type: "commentaire_compose",
    title: "Commentaire composé : L'Aventure ambiguë (BAC D 2013) — Le discours de la Grande Royale",
    sessionOrReference: "BAC D 2013 — Sujet 1",
    author: "Cheikh Hamidou Kane",
    work: "L'Aventure ambiguë (1961)",
    level: "Terminale A, C, D",
    subjectExcerpt: "« L’école où je pousse nos enfants tuera en eux ce qu’aujourd’hui nous aimons et conservons avec soin... Mais gens des Diallobés, souvenez-vous de nos champs... Nos meilleures graines, ce sont nos enfants. »",
    fullStatement: `« L’école où je pousse nos enfants tuera en eux ce qu’aujourd’hui nous aimons et conservons avec soin, à juste titre. Peut-être notre souvenir lui-même mourra-t-il en eux. Quand ils reviendront de l’école, il en est qui ne nous reconnaîtront pas. Ce que je propose, c’est que nous acceptions de mourir en nos enfants et que les étrangers qui nous ont défaits prennent en eux toute la place que nous aurons laissée libre. Elle se tut encore, bien qu’aucun murmure ne l’eût interrompue. SAMBA DIALLO perçut qu’on reniflait près de lui. Il leva la tête et vit deux grosses larmes couler le long du rude visage du maître des forgerons. Mais gens des Diallobés, souvenez-vous de nos champs quand approche la saison des pluies. Nous aimons bien nos champs, mais que faisons-nous alors ? Nous y mettons le fer et le feu, nous les tuons. De même souvenez-vous : que faisons-nous de nos réserves de graines quand il a plu ? Nous voudrions bien les ménager, mais nous les enfouissons en terre. La tornade qui annonce le grand hivernage de notre peuple est arrivée avec les étrangers, gens des Diallobés. Mon avis à moi, Grande Royale, c’est que nos meilleures graines et nos champs les plus chers, ce sont nos enfants. Quelqu’un veut-il parler ? ».`,
    introduction: {
      presentation: "Extrait du roman philosophique L'Aventure ambiguë (1961) de Cheikh Hamidou Kane, écrivain sénégalais.",
      themesOuCentresInteret: [
        "La lucidité tragique et l'angoisse de la Grande Royale devant le risque d'acculturation et de mort spirituelle",
        "La décision sacrificielle et stratégique d'envoyer les enfants à l'école des Blancs assimilée à des graines enfouies pour germer"
      ],
      annoncePlan: "Nous étudierons dans un premier temps la conscience aiguë de la menace culturelle, puis la métaphore agraire du sacrifice indispensable à la survie des Diallobés.",
      texteComplet: `Le texte soumis à notre appréciation est extrait du roman classique L’Aventure ambiguë, publié en 1961 par Cheikh Hamidou Kane, écrivain et haut fonctionnaire sénégalais. Dans cette scène mémorable, la Grande Royale, cheffe politique respectée du pays des Diallobés, réunit les notables pour leur annoncer une décision historique. Deux centres d’intérêt majeurs retiennent notre attention : la crainte poignante de l’acculturation et de la mort spirituelle des enfants au contact de l’Occident, puis la justification impérieuse et sacrificielle de cette décision par la parabole agricole de la semence.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'angoisse de la perte d'identité et la tragédie de l'acculturation",
          contenu: `La Grande Royale parle avec une gravité sans illusion. Par l'emploi de verbes au futur à forte charge létale (« tuera », « mourra », « ne nous reconnaîtront pas »), elle mesure avec exactitude le prix de l'école occidentale : la destruction de l'héritage ancestral (« ce qu'aujourd'hui nous aimons et conservons avec soin »). Elle formule l'inconcevable : accepter de « mourir en nos enfants » pour que les envahisseurs coloniaux s'y installent. L'émotion bouleversante de l'assemblée, illustrée par les larmes du rude maître des forgerons, consacre la tragédie intime d'un peuple fier contraint de compromettre son âme.`,
          citationsEtProcedes: ["Futurs prophétiques : « tuera en eux », « notre souvenir lui-même mourra »", "Formule tragique : « accepter de mourir en nos enfants »", "Détail pathétique des larmes viriles du maître des forgerons"]
        },
        {
          titre: "2. La parabole agricole : le sacrifice fertile des graines pour renaître",
          contenu: `Pour emporter l'adhésion de son peuple stupéfait, la Grande Royale déploie une puissante métaphore paysanne enracinée dans le quotidien des auditeurs. Elle rappelle le traitement infligé aux champs avant la pluie (« Nous y mettons le fer et le feu, nous les tuons ») et le sort des précieuses réserves de semence (« nous les enfouissons en terre »). Les enfants diallobés sont ces « meilleures graines » qu'il faut enfouir dans l'école étrangère, non par reniement, mais pour y apprendre « l'art de vaincre sans avoir raison ». La tornade coloniale étant inéluctable, seule cette mort symbolique permettra aux générations futures de maîtriser la science des Blancs sans périr. L'apostrophe finale « Quelqu'un veut-il parler ? » scelle la victoire oratoire de la reine.`,
          citationsEtProcedes: ["Parabole du feu et du fer appliqué aux champs nourriciers", "Métaphore filée de la graine enfouie : « nos meilleures graines... ce sont nos enfants »", "Question oratoire conclusrice : « Quelqu'un veut-il parler ? » marquant une autorité sans réplique"]
        }
      ],
      texteComplet: `Dans la première partie, la Grande Royale énonce avec un courage lucide les dangers mortels de l'école des colonisateurs. Elle n'embellit rien de la situation : « L’école où je pousse nos enfants tuera en eux ce qu’aujourd’hui nous aimons et conservons avec soin ». Le recours récurrent aux verbes de destruction (« tuera », « mourra ») souligne l'effroi d'une rupture générationnelle où les enfants reviendront étrangers à leurs pères : « il en est qui ne nous reconnaîtront pas ». Ce sacrifice d'une civilisation contrainte d'abdiquer sa pureté suscite un silence poignant chez les notables et arrache des larmes au maître des forgerons, figure de la virilité et du travail de la terre.

Dans la seconde partie, la narratrice désamorce l'effroi en s'appuyant sur l'analogie de la culture paysanne. Par les questions rhétoriques adressées aux Diallobés, elle rappelle la loi immémoriale de la nature : pour récolter le mil, il faut d'abord brûler la terre et abandonner la semence à l'obscurité de l'humus. « La tornade qui annonce le grand hivernage de notre peuple est arrivée avec les étrangers », prévient-elle. Assimilant les enfants aux « meilleures graines », la reine démontre que l'envoi à l'école occidentale est un enfouissement nécessaire pour faire germer la résistance de demain. Sa péroraison magistrale (« Quelqu’un veut-il parler ? ») clôt le débat dans une souveraine certitude historique.`
    },
    conclusion: {
      bilan: "Cheikh Hamidou Kane met en scène dans ce plaidoyer le nœud gordien du choc des civilisations entre tradition spirituelle africaine et puissance matérielle occidentale.",
      ouverture: "Cette ambiguïté existentielle traversera le destin tourmenté de Samba Diallo, écartelé entre la rigueur coranique du maître des Diallobés et la rationalité de la Sorbonne.",
      texteComplet: `En somme, dans cette page d'anthologie de L'Aventure ambiguë, Cheikh Hamidou Kane illustre la grandeur politique d'une souveraine qui fait le choix douloureux de la mutation pour conjurer la disparition totale de son peuple. La métaphore féconde des graines sacrifiées pour assurer la moisson future demeure l'une des plus belles leçons de réalisme et de courage historique de la littérature négro-africaine.`
    },
    keywords: ["aventure ambiguë", "cheikh hamidou kane", "grande royale", "diallobés", "samba diallo", "graines", "école étrangère", "bac d 2013", "commentaire composé"]
  },

  // =========================================================================
  // 6. SUJETS DE DISSERTATION LITTÉRAIRE CORRIGÉS
  // =========================================================================
  {
    id: "annale-dissert-bettelheim-violence-baca4-2014",
    type: "dissertation",
    title: "Dissertation : La condamnation de la violence et ses causes réelles (BAC A4 2014) — Bruno Bettelheim",
    sessionOrReference: "BAC A4 2014 — Sujet 1",
    author: "Bruno Bettelheim",
    level: "Terminale A, C, D",
    subjectExcerpt: "« Au lieu de se borner à condamner la violence, on ferait mieux de penser à ce qui cause la violence, à ce qu’on devrait faire pour éliminer ses causes ou pour les empêcher d’aboutir à des actes violents ». Dans un développement organisé et illustré d’exemples précis, appréciez ce constat.",
    fullStatement: `Dissertation : Au sujet de la violence (armée) dans nos sociétés, de la couverture médiatique et d’autres débats sur ce phénomène, BRUNO BETTELHEIM écrit ceci : « Au lieu de se borner à condamner la violence, on ferait mieux de penser à ce qui cause la violence, à ce qu’on devrait faire pour éliminer ses causes ou pour les empêcher d’aboutir à des actes violents ». Dans un développement organisé et illustré d’exemples précis, appréciez ce constat.`,
    introduction: {
      amorce: "Notre monde contemporain demeure secoué par de multiples déflagrations armées, des rebellions récurrentes et des crises sociopolitiques meurtrières.",
      problematique: "Dans quelle mesure la simple réprobation morale de la violence s'avère-t-elle stérile, et par quels moyens politiques, sociaux et civiques peut-on tarir durablement les causes profondes des conflits armés ?",
      annoncePlan: "Dans une démarche méthodique, nous analyserons d'abord les ressorts et facteurs déclencheurs de la violence armée, puis nous mettrons en lumière les solutions concrètes fondées sur la justice, la bonne gouvernance et la réconciliation.",
      texteComplet: `Notre monde contemporain demeure secoué par des crises multiformes et des conflits armés dévastateurs. Face aux exactions sanglantes, l'opinion publique et la communauté internationale s'empressent souvent d'exprimer leur réprobation morale. Pourtant, le psychanalyste et essayiste Bruno Bettelheim nous invite à dépasser cette réaction émotionnelle en affirmant qu’au lieu de se borner à condamner la violence, il conviendrait de s’attaquer à ce qui la provoque et aux moyens d'éradiquer ses racines. Dès lors, nous sommes amenés à nous demander : dans quelle mesure la simple dénonciation verbale de la violence est-elle impuissante, et quelles voies pérennes permettent de neutraliser ses causes structurelles ? Nous examinerons d'abord les origines profondes de la violence armée, avant d'envisager les solutions véritables fondées sur la justice sociale, l'État de droit et le dialogue.`
    },
    developpement: {
      parties: [
        {
          titre: "Axe I : L'insuffisance des discours moraux et les causes réelles de la violence armée",
          contenu: `La condamnation verbale ou médiatique des actes barbares reste purement incantatoire tant qu'elle ignore les terreaux fertiles qui engendrent le recours aux armes. En premier lieu, c'est l'injustice sociale criante et la mauvaise répartition des richesses nationales qui jettent les populations démunies dans la sédition. Comme le montre l'histoire contemporaine du Nigeria ou du Soudan, la marginalisation de régions entières riches en hydrocarbures au profit d'élites corrompues engendre des insurrections armées. En second lieu, la privation institutionnelle de liberté et l'oppression étatique rendent inévitable l'explosion guerrière. Dans L’Étudiant de Soweto de Maoundoué Naïndouba, c'est le régime abject de l'apartheid privant les Noirs de leurs droits élémentaires qui pousse des étudiants pacifiques comme Mulube à affirmer que « seule la lutte libère ». Enfin, la confiscation du pouvoir par des régimes dictatoriaux engendre des révoltes armées : dans République à vendre d'Isaac Tédambé, la poigne tyrannique du commandant Mazou accule la population à constituer le mouvement insurrectionnel FRODIBEC.`,
          citationsEtProcedes: ["L'injustice sociale et la captation des ressources", "L'apartheid et la violence d'État dans L'Étudiant de Soweto", "La tyrannie politique dans République à vendre d'Isaac Tédambé"]
        },
        {
          titre: "Axe II : Les remèdes durables : justice équitable, bonne gouvernance et réconciliation nationale",
          contenu: `Puisque la violence est l'effet de déséquilibres structurels, son éradication durable passe par des mesures politiques courageuses et préventives. D'une part, la transparence dans la gestion des deniers publics et la lutte implacable contre la corruption restaurent la confiance entre gouvernants et gouvernés. Un État équitable garantit l'accès à l'école, à la santé et au travail, ôtant aux recruteurs de rébellions leur vivier de jeunes désoeuvrés. D'autre part, la culture du dialogue et de la tolérance civique offre une alternative civilisée à l'affrontement meurtrier. L'exemple historique de l'Afrique du Sud post-apartheid est ici magistral : sous l'impulsion de Nelson Mandela et de Desmond Tutu, la mise en place de la Commission Vérité et Réconciliation a permis de guérir les blessures et de désamorcer la guerre civile annoncée. La paix ne s'obtient pas par la force des baïonnettes, mais par l'édification d'un pacte républicain juste et inclusif.`,
          citationsEtProcedes: ["La bonne gouvernance et la justice sociale préventive", "La Commission Vérité et Réconciliation de Nelson Mandela", "La culture du dialogue républicain et de l'équité"]
        }
      ],
      texteComplet: `Dans un premier temps, force est de constater que la condamnation passive de la violence ne suffit aucunement à freiner son expansion. Devant les attentats terroristes, les coups d'État et les guerres civiles, les condamnations de principe de la communauté internationale sonnent souvent comme des déclarations d'impuissance. Pour éliminer la violence, il importe d'identifier ses racines matérielles. La violence armée est d'abord le produit de l'injustice économique et de la pauvreté endémique : lorsque des pans entiers de la jeunesse sont privés d'avenir tandis qu'une oligarchie pille les richesses nationales, les armes deviennent le refuge tragique de la désespérance. Par ailleurs, les régimes tyranniques qui interdisent toute alternance démocratique acculent les citoyens à la rébellion, comme le dépeint Isaac Tédambé dans République à vendre où l'arbitraire du commandant Mazou provoque la naissance d'un front armé. De même, la négation des libertés fondamentales en régime d'apartheid raciste, illustrée dans L’Étudiant de Soweto de Maoundoué Naïndouba, démontre que la violence d'État finit toujours par susciter la contre-violence légitime des opprimés.

Dans un second temps, le constat de Bruno Bettelheim nous invite à bâtir des alternatives pérennes en neutralisant ces foyers de conflit. Le premier antidote à la violence réside dans l'instauration d'une gouvernance vertueuse et équitable. L'accès équitable à l'éducation, aux soins et aux opportunités professionnelles assèche le recrutement des mouvements séditieux. De surcroît, la pacification des sociétés divisées exige la mise en œuvre de mécanismes de justice transitionnelle et de dialogue fraternel. L'expérience de l'Afrique du Sud sous la présidence de Nelson Mandela, grâce à la Commission Vérité et Réconciliation, a prouvé au monde entier que le pardon adossé à la vérité pouvait triompher de décennies de haine raciale. La prévention intelligente, la redistribution des richesses et le respect des droits humains sont les seuls véritables remparts capables d'empêcher les tensions d'aboutir au bain de sang.`
    },
    conclusion: {
      bilan: "Au terme de notre analyse, il apparaît clairement que la réprobation verbale de la violence reste une illusion stérile si l'on n'attaque pas les causes réelles que sont l'injustice, l'oppression et l'exclusion.",
      ouverture: "Comme l'enseignait Martin Luther King, la paix véritable n'est pas seulement l'absence de tension, mais la présence agissante de la justice dans la cité.",
      texteComplet: `En somme, Bruno Bettelheim pose un diagnostic d'une brûlante acuité. Se borner à maudire la violence ne fait que prolonger le cycle des massacres. C'est en s'attaquant avec courage aux causes structurelles de la misère, en promouvant l'État de droit et en privilégiant la vertu du dialogue sincère que l'humanité parviendra à conjurer la tentation destructrice des armes.`
    },
    keywords: ["bac a4 2014", "bruno bettelheim", "violence armée", "l'étudiant de soweto", "république à vendre", "mandela", "dissertation"]
  },

  {
    id: "annale-dissert-hugo-ecole-prison",
    type: "dissertation",
    title: "Dissertation : « Ouvrir une école c'est fermer une prison » — Victor Hugo",
    sessionOrReference: "Terminale A / Lycée Le Nouveau Prodige — Sujet 5",
    author: "Victor Hugo",
    level: "Terminale A, C, D",
    subjectExcerpt: "« À partir d’exemples précis ou de vos connaissances, discutez cette déclaration de VICTOR HUGO : « ouvrir une école c’est fermer la prison ». »",
    fullStatement: `Sujet 5 : À partir des exemples précis ou de vos connaissances, discutez cette déclaration de VICTOR HUGO : « ouvrir une école c’est fermer la prison ».`,
    introduction: {
      amorce: "L’institution scolaire est universellement reconnue comme le sanctuaire privilégié de l’émancipation humaine et de la socialisation civique.",
      problematique: "Dans quelle mesure l’accès aux lumières du savoir permet-il d’éradiquer la délinquance et la criminalité, et quelles sont néanmoins les limites d'un tel idéal face aux dérives des élites instruites ?",
      annoncePlan: "Nous montrerons en premier lieu le rôle libérateur et préventif de l'école dans l'éradication du vice, avant de souligner dans un second temps les paradoxes d'une instruction qui ne préserve pas toujours de la perversité morale et des crimes de pouvoir.",
      texteComplet: `L’institution scolaire est tenue pour le moteur fondamental de l’élévation morale et intellectuelle des nations. Convaincu de la puissance rédemptrice de l’instruction publique, le grand écrivain et humaniste Victor Hugo affirmait avec éclat qu’« ouvrir une école c'est fermer une prison ». Dès lors, l'interrogation s'impose : en quoi la diffusion du savoir constitue-t-elle le rempart le plus efficace contre la délinquance, et dans quelle mesure ce constat hugolien se heurte-t-il aux réalités complexes d'un monde où des esprits très instruits peuvent eux-mêmes concevoir les pires atrocités ? Nous examinerons d'abord les vertus pacificatrices de l'éducation, avant d'envisager les limites tragiques d'une formation intellectuelle dépourvue de conscience morale.`
    },
    developpement: {
      parties: [
        {
          titre: "Axe I : L'école comme sanctuaire de la liberté, du civisme et de la prévention du crime",
          contenu: `L'instruction publique arrache l'individu aux ténèbres de l'ignorance, qui constitue le terreau principal des actes répréhensibles. En inculquant la lecture, la raison critique et les règles de la vie en société, l'école dote l'enfant des outils nécessaires pour s'insérer professionnellement et échapper à la précarité qui pousse au larcin. De surcroît, elle transmet des valeurs civiques : le respect d'autrui, la tolérance et la conscience du bien commun. Comme le soulignait déjà Montaigne dans ses Essais, l'objectif est de former « une tête bien faite plutôt qu'une tête bien pleine », c'est-à-dire un citoyen autonome capable de distinguer le juste de l'injuste. En offrant à chacun la possibilité d'exercer un métier honorable et de contribuer au progrès collectif, l'école tarit la source même qui alimente les maisons d'arrêt.`,
          citationsEtProcedes: ["Le recul de l'ignorance et de la précarité criminogène", "Montaigne, Les Essais : « une tête bien faite plutôt que bien pleine »", "L'apprentissage de la citoyenneté et de la loi républicaine"]
        },
        {
          titre: "Axe II : Les limites du constat : la science sans conscience et les crimes des élites instruites",
          contenu: `Toutefois, l'expérience historique dément l'angélisme d'une correspondance automatique entre diplôme et vertu civique. La criminalité moderne et les fléaux planétaires ne sont pas l'apanage des ignorants : ils sont fréquemment conçus et orchestrés par des diplômés des plus hautes universités. La prolifération des armes de destruction massive, la planification industrielle des camps d'extermination nazis ou la sophistication des détournements financiers de cols blancs sont l'œuvre de savants et d'intellectuels raffinés. De même, les guerres fratricides, les tripatouillages constitutionnels et le pillage des ressources en Afrique sont menés par des élites formées dans les grandes métropoles occidentales. Comme le rappelait Rabelais, « science sans conscience n'est que ruine de l'âme » : l'école n'empêche pas la prison si elle oublie l'éducation du cœur et l'éthique de la responsabilité.`,
          citationsEtProcedes: ["Rabelais : « Science sans conscience n'est que ruine de l'âme »", "Les crimes de guerre, la criminalité financière et les armes sophistiquées nées de l'élite", "Les dérives des dirigeants instruits confisquant le pouvoir"]
        }
      ],
      texteComplet: `Dans un premier temps, l'affirmation de Victor Hugo garde une force prophétique incontestable. L'école est le premier lieu de socialisation où l'enfant apprend à discipliner ses pulsions, à respecter l'altérité et à intérioriser les exigences de la vie républicaine. En apportant aux démunis les clés de la qualification professionnelle, l'instruction permet de rompre le déterminisme de la misère matérielle qui conduit tant d'âmes égarées vers le vol et la délinquance. Une société qui investit massivement dans ses instituteurs prévient le désœuvrement, développe l'esprit critique et arme les consciences contre le fanatisme.

Dans un second temps, il convient de nuancer l'optimisme hugolien à la lumière des tragédies contemporaines. L'instruction intellectuelle ne garantit en rien la rectitude morale. L'histoire du XXe siècle a amplement démontré que les crimes contre l'humanité, les pillages de banques et les fraudes étatiques étaient orchestrés par des élites bardées de diplômes. Dans République à vendre d'Isaac Tédambé ou Les Soleils des indépendances d'Ahmadou Kourouma, les prévaricateurs et les technocrates qui appauvrissent la nation sont des lettrés qui détournent leur savoir au profit d'intérêts personnels égoïstes. Dès lors, ouvrir des écoles ne suffit pas à fermer les prisons si l'enseignement dispensé se borne à la technique sans former le sens de la justice et de l'intégrité.`
    },
    conclusion: {
      bilan: "En conclusion, si l'école demeure l'instrument indispensable de l'émancipation humaine et de la baisse de la criminalité commune, elle ne saurait à elle seule garantir la moralité publique.",
      ouverture: "Pour fermer véritablement les prisons, l'école doit conjuguer l'excellence du savoir académique avec une éducation morale et civique inébranlable.",
      texteComplet: `En somme, l'apologue de Victor Hugo conserve toute sa pertinence s'il est compris dans sa plénitude : l'école libère l'homme de la barbarie de l'ignorance. Cependant, le savoir technique sans repères éthiques peut devenir une arme redoutable entre les mains d'ambitieux sans scrupules. C'est pourquoi la véritable éducation doit allier la clarté de l'esprit à la droiture de l'âme pour édifier une société exempte de violence et de prisons.`
    },
    keywords: ["victor hugo", "ouvrir une école c'est fermer une prison", "éducation", "morale", "rabelais", "montaigne", "dissertation"]
  },

  {
    id: "annale-dissert-camus-grandeur-homme-baca4-2006",
    type: "dissertation",
    title: "Dissertation : La grandeur de l'homme face à sa condition (BAC A4 2006) — Albert Camus",
    sessionOrReference: "BAC A4 2006 — Sujet 6",
    author: "Albert Camus",
    level: "Terminale A, C, D",
    subjectExcerpt: "« La grandeur de l’homme est dans sa dimension d’être plus fort que sa condition et si sa condition est injuste, il n’y a qu’une seule mesure de la surmonter, c’est d’être juste lui-même ». Commentez cette réflexion d’Albert Camus.",
    fullStatement: `Dissertation : Commentez cette réflexion d’ALBERT CAMUS : « La grandeur de l’homme est dans sa dimension d’être plus fort que sa condition et si sa condition est injuste, il n’y a qu’une seule mesure de la surmonter, c’est d’être juste lui-même ».`,
    introduction: {
      amorce: "Tout au long de son existence terrestre, l’être humain est confronté à la tragédie de sa finitude, à la souffrance et aux injustices criantes du monde.",
      problematique: "Dans quelle mesure la dignité de l'homme réside-t-elle dans le refus de la résignation devant l'absurde, et comment l'exigence morale de justice personnelle permet-elle de transcender l'adversité ?",
      annoncePlan: "Nous analyserons d'une part la grandeur de la révolte camusienne contre l'injustice du sort, puis d'autre part l'exigence éthique d'incarner soi-même la justice pour surmonter la condition humaine.",
      texteComplet: `Tout au long de son existence terrestre, l’être humain se heurte aux affres de la souffrance, du malheur et de la mort. Devant ce constat tragique de la condition humaine, le philosophe et écrivain Albert Camus propose une morale d'action héroïque en déclarant que « la grandeur de l'homme est dans sa dimension d'être plus fort que sa condition et si sa condition est injuste, il n'y a qu'une seule mesure de la surmonter, c'est d'être juste lui-même ». Cette méditation invite à nous interroger : comment l’homme peut-il se montrer supérieur à une destinée écrasante sans céder au nihilisme ou à la résignation ? Nous étudierons d’abord la nécessité de la lutte et du courage lucide face à l'absurde, avant de montrer en quoi la pratique active de la justice morale constitue la réponse souveraine à la détresse existentielle.`
    },
    developpement: {
      parties: [
        {
          titre: "Axe I : Le refus de la résignation : la lutte courageuse contre l'injustice du sort",
          contenu: `Pour Albert Camus, l’homme ne doit jamais s'abandonner au fatalisme ni se réfugier dans des fuites lâches comme le suicide ou l'illusion passive. Face au fléau qui frappe aveuglément la cité dans La Peste, le docteur Bernard Rieux incarne cette posture de résistance lucide : il lutte jour et nuit contre la maladie mortelle sans espérer de salut divin, affirmant qu'il faut « être fou ou lâche pour se résigner à la peste ». De même, Victor Hugo écrivait dans Les Châtiments que « ceux qui vivent sont ceux qui luttent ». La grandeur humaine s'affirme précisément au moment où l'individu, conscient de la vulnérabilité de sa chair, se dresse contre l'oppression et l'iniquité du monde pour faire reculer la souffrance de ses frères.`,
          citationsEtProcedes: ["Albert Camus, La Peste : le combat obstiné du docteur Bernard Rieux", "Victor Hugo : « Ceux qui vivent sont ceux qui luttent »", "La révolte comme affirmation éclatante de la dignité humaine"]
        },
        {
          titre: "Axe II : Être juste soi-même : l'éthique exemplaire comme victoire sur l'absurde",
          contenu: `La seconde exigence de la pensée camusienne repose sur l'intégrité morale : si le monde est dépourvu de justice transcendante, il appartient à l'homme de ne point ajouter au malheur universel en devenant lui-même un bourreau. Dans Les Justes, Camus montre que les révolutionnaires russes refusent de jeter la bombe qui tuerait des enfants innocents, maintenant une limite morale absolue à l'action politique. Devenir juste soi-même, c'est refuser le mensonge, rejeter la corruption et pratiquer la solidarité agissante avec les opprimés. Comme le formulait Saint-Exupéry dans Terre des hommes, « la grandeur de l'homme se mesure devant l'obstacle ». En faisant preuve d'honnêteté et de droiture dans un monde déréglé, l'homme triomphe intérieurement du destin et donne un sens inestimable à son existence.`,
          citationsEtProcedes: ["Albert Camus, Les Justes : la pureté éthique refusant le meurtre d'innocents", "Antoine de Saint-Exupéry : « La grandeur de l'homme se mesure devant l'obstacle »", "La solidarité humaine comme dépassement victorieux de la fatalité"]
        }
      ],
      texteComplet: `Dans un premier temps, Albert Camus rejette avec force toute forme de capitulation devant la précarité de notre condition. La condition humaine est par nature marquée par la finitude et la souffrance imméritée. Mais la réponse d'honneur ne réside ni dans la complainte ni dans la résignation lâche. Dans La Peste, le personnage exemplaire du docteur Bernard Rieux combat l'épidémie avec une modestie tenace, démontrant que le devoir de l'homme est d'opposer une digue infranchissable à la douleur d'autrui. La grandeur réside dans ce refus héroïque du désespoir : l'homme devient plus grand que son tourment dès lors qu'il choisit la lutte obstinée pour préserver la vie.

Dans un second temps, Camus souligne que cette victoire sur le destin exige une stricte rectitude personnelle. Si les institutions humaines et l'ordre du monde apparaissent injustes, l'individu ne doit en aucun cas répondre à l'injustice par l'injustice. Surmonter sa condition impose d'adopter pour soi-même une discipline de vérité et de bienveillance. C'est l'enseignement lumineux des Justes où la révolte conserve sa noblesse en s'interdisant les méthodes scélérates des despotes. En incarnant la probité, le travail désintéressé et la fidélité à ses semblables, l'être humain illumine l'obscurité du monde et prouve que sa conscience est plus haute que la fatalité qui l'assaille.`
    },
    conclusion: {
      bilan: "En somme, Albert Camus énonce une philosophie lumineuse du courage et de l'honneur : face à l'absurdité du monde, l'homme conquiert sa véritable noblesse par la lutte solidaire et l'exigence de justice personnelle.",
      ouverture: "Cette éthique de la révolte mesurée demeure le guide le plus éclatant pour les générations confrontées aux crises écologiques, économiques et morales du XXIe siècle.",
      texteComplet: `En conclusion, la réflexion d'Albert Camus transcende les époques pour nous léguer une impérissable leçon d'espérance active. Ce n'est pas la bienveillance du sort qui fait la valeur d'une vie, mais l'inlassable énergie que l'homme déploie pour rester juste et fraternel au cœur même des tourments. En refusant de plier le genou devant la fatalité, l'homme affirme sa souveraineté morale sur l'univers.`
    },
    keywords: ["albert camus", "la peste", "la grandeur de l'homme", "bernard rieux", "les justes", "saint-exupéry", "bac a4 2006", "dissertation"]
  }
];

/**
 * Recherche une annale officielle par mot-clé, citation, extrait ou titre
 */
export function findOfficialAnnale(query: string): AnnaleItem | null {
  if (!query || !query.trim()) return null;
  const cleanQ = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // 1. Recherche par titre ou ID exact
  for (const item of ANNALES_FRANCAIS_MAHAMAT_BASE) {
    const cleanTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (cleanTitle.includes(cleanQ) || cleanQ.includes(cleanTitle)) {
      return item;
    }
  }

  // 2. Recherche par citation / extrait de texte
  for (const item of ANNALES_FRANCAIS_MAHAMAT_BASE) {
    const cleanStmt = (item.fullStatement + " " + item.subjectExcerpt).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Si une portion significative de la requête figure dans l'énoncé de l'annale
    if (cleanStmt.includes(cleanQ) || cleanQ.includes(cleanStmt.slice(0, 40))) {
      return item;
    }
  }

  // 3. Recherche par mots-clés spécifiques
  let bestItem: AnnaleItem | null = null;
  let maxScore = 0;

  for (const item of ANNALES_FRANCAIS_MAHAMAT_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      const cleanKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (cleanQ.includes(cleanKw)) {
        score += 3;
      }
    }
    if (item.work) {
      const cleanWork = item.work.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (cleanQ.includes(cleanWork)) score += 4;
    }
    const cleanAuthor = item.author.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (cleanQ.includes(cleanAuthor)) score += 3;

    if (score > maxScore) {
      maxScore = score;
      bestItem = item;
    }
  }

  return maxScore >= 5 ? bestItem : null;
}
