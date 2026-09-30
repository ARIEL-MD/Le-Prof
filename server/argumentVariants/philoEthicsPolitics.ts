import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_ETHICS_POLITICS_VARIANTS: Record<string, ArgumentVariant[]> = {
  "justice": [
    {
      id: 0,
      label: "Perspectives Fondatrices : Droit Naturel, Idéal Moral & Équité",
      perspective: "Droit naturel, Équité & Vertu cardinale",
      pedagogicalAdvice: "Idéal pour fonder l'exigence morale de justice au-delà de la seule lettre de la loi positive.",
      arguments: [
        {
          statement: "La justice véritable consiste dans l'équité, qui rectifie la rigidité de la loi écrite pour l'adapter aux situations concrètes.",
          author: "Aristote",
          work: "Éthique à Nicomaque",
          quote: "L'équitable, tout en étant juste, n'est pas le juste selon la loi, mais un correctif de la justice légale.",
          explanation: "Aristote montre que la loi est nécessairement universelle et abstraite, ce qui peut engendrer des injustices lorsqu'elle est appliquée aveuglément à des cas particuliers imprévus. L'équité est cette sagesse pratique qui corrige la loi pour rester fidèle à son esprit initial de justice.",
          category: "Thèse (Équité & Rectitude)",
          connector: "De prime abord"
        },
        {
          statement: "La justice dans la cité repose sur l'harmonie des parties où chacun accomplit la fonction correspondant à sa vertu propre.",
          author: "Platon",
          work: "La République",
          quote: "La justice consiste pour chacun à faire ce qui lui est propre et à ne point s'immiscer dans les affaires d'autrui.",
          explanation: "Pour Platon, la justice n'est pas une simple convention juridique mais l'ordre idéal de l'âme et de la cité. De même que la raison doit gouverner le courage et les désirs dans l'âme, les philosophes doivent guider la cité pour préserver le bien commun.",
          category: "Thèse (Harmonie & Bien Commun)",
          connector: "En outre"
        },
        {
          statement: "Il existe une loi naturelle universelle, gravée dans la raison humaine, antérieure et supérieure à toutes les lois positives humaines.",
          author: "Cicéron",
          work: "Des Lois (De Legibus)",
          quote: "Il est une loi véritable, la droite raison, conforme à la nature, répandue dans tous les êtres, immuable et éternelle.",
          explanation: "Cicéron défend l'existence d'un étalon transcendant de justice. Si la volonté des tyrans ou le suffrage d'un peuple pouvait rendre juste le crime, la justice ne serait qu'un vain mot. Une loi humaine n'a de valeur que si elle dérive de cette raison universelle.",
          category: "Fondement (Droit Naturel Universel)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le sentiment intérieur de justice est inné à la conscience humaine et précède les conventions sociales.",
          author: "Jean-Jacques Rousseau",
          work: "Émile ou De l'éducation",
          quote: "Conscience ! Conscience ! Instinct divin, immortelle et céleste voix ; guide assuré d'un être ignorant et borné.",
          explanation: "Rousseau refuse de réduire la justice au calcul d'intérêt utilitaire. C'est dans le cœur de l'homme, par le sentiment spontané de la pitié et l'indignation face au mal, que s'enracine l'obligation sacrée de respecter la dignité d'autrui.",
          category: "Portée Éthique (Conscience Morale)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques & Positivistes : Force, Intérêt & Conventions",
      perspective: "Positivisme juridique, Réalisme politique & Illusion du droit absolu",
      pedagogicalAdvice: "À mobiliser pour déconstruire l'angélisme juridique et montrer le rôle de la contrainte institutionnelle.",
      arguments: [
        {
          statement: "Sans le glaive du souverain pour contraindre, la justice n'est qu'un vain mot impuissant face aux passions humaines.",
          author: "Thomas Hobbes",
          work: "Léviathan",
          quote: "Les conventions sans le glaive ne sont que des paroles, et sont dénuées de toute force pour sécuriser un homme.",
          explanation: "Hobbes démontre que dans l'état de nature, où règnent la défiance et la guerre de tous contre tous, le juste et l'injuste n'ont aucun sens. Seule l'institution d'un pouvoir souverain absolu, doté du monopole de la force légitime, crée les règles positives du droit.",
          category: "Antithèse (Loi Souveraine & Sécurité)",
          connector: "D'un autre côté"
        },
        {
          statement: "Faute de pouvoir rendre fort ce qui est juste, les sociétés humaines ont rendu juste ce qui est fort.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "La justice sans la force est impuissante ; la force sans la justice est tyrannique. Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste.",
          explanation: "Pascal livre une critique lucide des fondements de l'ordre politique. La justice absolue est introuvable sur terre en raison de la corruption humaine. Pour éviter la guerre civile, pire des maux, les hommes consacrent les coutumes et la force établie comme règles légitimes.",
          category: "Critique Réaliste (Force & Coutume)",
          connector: "Cependant"
        },
        {
          statement: "Le droit positif se définit exclusivement par sa validité formelle et non par sa conformité à une prétendue morale idéale.",
          author: "Hans Kelsen",
          work: "Théorie pure du droit",
          quote: "Le droit ne doit être justifié par aucune considération morale ou politique pour être juridiquement valide.",
          explanation: "Kelsen fonde le positivisme juridique moderne : une norme est juridique parce qu'elle est issue d'une norme supérieure dans la pyramide législative, indépendamment des jugements subjectifs de valeur. Confondre le droit et la morale dissout la certitude juridique.",
          category: "Positivisme Juridique (Pyramide des Normes)",
          connector: "Qui plus est"
        },
        {
          statement: "La justice institutionnelle dissimule souvent les intérêts économiques de la classe dominante.",
          author: "Karl Marx",
          work: "Sur la question juive",
          quote: "Votre droit n'est que la volonté de votre classe érigée en loi.",
          explanation: "Marx dénonce l'égalité juridique formelle comme une illusion qui consacre l'inégalité réelle. Proclamer le droit de propriété sans garantir les moyens de subsistance revient à faire de l'appareil judiciaire le garant de la domination bourgeoise.",
          category: "Critique Matérialiste (Domination de Classe)",
          connector: "Pour clore cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Contemporaines : Équité Sociale, Capacités & Reconnaissance",
      perspective: "Justice redistributive, Voile d'ignorance & Capabilités",
      pedagogicalAdvice: "Indispensable pour aborder les débats actuels sur la justice sociale, l'égalité des chances et la redistribution.",
      arguments: [
        {
          statement: "Une société juste admet les inégalités économiques si et seulement si elles profitent aux membres les plus désavantagés.",
          author: "John Rawls",
          work: "Théorie de la justice",
          quote: "Les inégalités économiques et sociales doivent être organisées de façon à ce qu'elles soient à l'avantage des plus défavorisés.",
          explanation: "Sous le « voile d'ignorance », des individus rationnels ignorent leur position future dans la société. Ils choisiraient deux principes fondamentaux : l'égalité stricte des libertés de base et le principe de différence, conciliant liberté démocratique et justice sociale équitable.",
          category: "Thèse Contemporaine (Équité & Voile d'Ignorance)",
          connector: "En premier lieu"
        },
        {
          statement: "La justice réelle ne réside pas dans l'égalité abstraite des revenus mais dans l'égal accès aux libertés substantielles d'agir.",
          author: "Amartya Sen",
          work: "L'Idée de justice",
          quote: "La justice exige de s'intéresser aux capabilités réelles des personnes, c'est-à-dire à leur liberté effective de choisir la vie qu'elles ont des raisons de valoriser.",
          explanation: "Sen dépasse les théories purement institutionnelles. Deux individus dotés du même revenu formel n'ont pas les mêmes capacités si l'un souffre d'un handicap ou d'une discrimination. La justice s'évalue à la capacité concrète de convertir des ressources en liberté vécue.",
          category: "Théorie des Capabilités (Justice Concrète)",
          connector: "Dans le même sens"
        },
        {
          statement: "La passion de l'égalité démocratique doit être équilibrée par la sauvegarde vigilante de la liberté politique.",
          author: "Alexis de Tocqueville",
          work: "De la démocratie en Amérique",
          quote: "Les nations de nos jours ne sauraient faire que dans leur sein les conditions ne soient pas égales ; mais il dépend d'elles que l'égalité les conduise à la servitude ou à la liberté.",
          explanation: "Tocqueville avertit que l'égalitarisme aveugle peut pousser les citoyens à abandonner leur indépendance à un État tutélaire bienveillant mais tyrannique. La véritable justice préserve la responsabilité citoyenne contre le repli individualiste.",
          category: "Analyse Politique (Égalité & Liberté)",
          connector: "D'autre part"
        },
        {
          statement: "La justice est une tâche inachevée qui s'exprime avant tout par la contestation des injustices réelles vécues.",
          author: "Paul Ricœur",
          work: "Le Juste",
          quote: "Le sens de la justice est d'abord le sens de l'injustice : c'est l'indignation qui nous éveille au droit.",
          explanation: "Ricœur souligne que l'homme fait d'abord l'expérience de la blessure causée par l'arbitraire ou l'exclusion. La justice institutionnelle doit sans cesse réentendre la voix des victimes pour adapter ses jugements et ne pas se figer en violence légale.",
          category: "Dépassement Éthique (Sens de l'Injustice)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives de Libération : Désobéissance Civile & Critique Décoloniale",
      perspective: "Résistance à la loi inique, Antiracisme & Souveraineté des Peuples",
      pedagogicalAdvice: "À employer pour les sujets liant justice, désobéissance légitime, révolte morale et luttes historiques d'émancipation.",
      arguments: [
        {
          statement: "Lorsque la loi viole la morale fondamentale, la désobéissance civile devient un devoir sacré pour le citoyen lucide.",
          author: "Henry David Thoreau",
          work: "La Désobéissance civile",
          quote: "Si la loi est de telle nature qu'elle exige de vous d'être l'agent de l'injustice envers un autre, alors, je vous le dis, enfreignez la loi.",
          explanation: "Thoreau affirme la primauté de la conscience individuelle sur les décisions de l'État. Financer ou obéir passivement à une législation esclavagiste ou belliqueuse rend le citoyen complice de l'injustice. Refuser d'obéir rétablit l'exigence morale supérieure du droit.",
          category: "Thèse (Désobéissance Civile Légitime)",
          connector: "De prime abord"
        },
        {
          statement: "Une loi injuste n'a aucune légitimité morale et la justice exige la non-coopération active avec le mal.",
          author: "Martin Luther King",
          work: "Lettre de la prison de Birmingham",
          quote: "Une loi injuste n'est pas une loi du tout. Quiconque enfreint une loi injuste doit le faire ouvertement, avec amour, et avec la volonté d'en accepter la sanction.",
          explanation: "Reprenant la pensée augustinienne, King montre qu'une ordonnance qui dégrade la personnalité humaine viole la loi divine et naturelle. La désobéissance non-violente n'est pas un refus de l'ordre légal, mais un appel public suprême à réveiller la conscience morale de la communauté.",
          category: "Éthique Civique (Résistance Non-Violente)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le système colonial constituait une négation institutionnelle de la justice où la violence tenait lieu de droit.",
          author: "Frantz Fanon",
          work: "Les Damnés de la terre",
          quote: "Le monde colonial est un monde compartimenté, manichéiste, où la loi du colonisateur consacre la déshumanisation de l'indigène.",
          explanation: "Fanon démasque la prétention pacificatrice du droit colonial. Loin d'incarner une justice universelle, les codes d'exception n'étaient que l'instrument juridique de la spoliation territoriale et de l'oppression raciale, légitimant la résistance révolutionnaire.",
          category: "Critique Décoloniale & Internationale",
          connector: "Toutefois"
        },
        {
          statement: "La restauration d'une justice globale exige de réparer les spoliations matérielles et symboliques héritées de l'histoire.",
          author: "Achille Mbembe",
          work: "Politiques de l'inimitié",
          quote: "Faire justice au monde blessé suppose d'assumer la mémoire partagée et d'abolir les frontières de l'indifférence.",
          explanation: "Mbembe montre que la justice du XXIe siècle ne peut se confiner à l'intérieur des États-nations occidentaux. Elle impose un horizon planétaire de restitution, de respect mutuel et de réhabilitation de la part d'humanité confisquée aux peuples du Sud.",
          category: "Justice Globale & Réparation Historique",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Délibératives, Éthique des Capabilités & Justice Réparatrice",
      perspective: "Délibération démocratique, Capabilités réelles & Ubuntu",
      pedagogicalAdvice: "À mobiliser pour dépasser les modèles abstraits du contrat social et penser la justice concrète, l'éthique de la discussion et la justice restaurative.",
      arguments: [
        {
          statement: "La justice concrète s'évalue non par des institutions parfaites et abstraites, mais par l'élimination des injustices réelles et l'élargissement des capabilités humaines.",
          author: "Amartya Sen",
          work: "L'Idée de justice",
          quote: "Ce qui nous émeut n'est pas tant la réalisation d'un monde parfaitement juste que l'éradication des injustices intolérables et manifestes autour de nous.",
          explanation: "Sen rompt avec les théories transcendantales et contractualistes de la justice parfaite. Il propose une approche comparative attentive aux libertés substantielles dont disposent effectivement les individus pour mener la vie qu'ils ont raison de valoriser.",
          category: "Thèse des Capabilités & Justice Concrète",
          connector: "De prime abord"
        },
        {
          statement: "Une norme de droit n'est légitime et juste que si elle reçoit l'assentiment de tous les citoyens concernés au terme d'une discussion publique exempte de violence.",
          author: "Jürgen Habermas",
          work: "Droit et Démocratie",
          quote: "Sont valides les normes d'action auxquelles tous les partenaires susceptibles d'être affectés pourraient donner leur accord dans un dialogue rationnel.",
          explanation: "Habermas fonde la justice dans l'éthique de la discussion démocratique. Ce n'est ni la tradition ni l'autorité arbitraire du prince qui crée le juste, mais la force du meilleur argument échangé entre citoyens libres et égaux dans l'espace public.",
          category: "Éthique de la Discussion & Légitimité Démocratique",
          connector: "Aussi"
        },
        {
          statement: "La justice primordiale (Maât) est le socle de l'ordre cosmique et politique, garantissant que la vérité et la droiture triomphent de la violence aveugle.",
          author: "Ptahhotep",
          work: "Les Maximes de Ptahhotep",
          quote: "Grande est la justice, durable en son efficacité ; elle n'a pas été troublée depuis l'époque des dieux.",
          explanation: "Dans la pensée de l'Égypte antique, la justice (Maât) n'est pas un artifice humain ou une convention réversible mais l'ordonnancement harmonieux du monde. Le gouvernant a pour devoir sacré d'équilibrer les forces et de protéger les faibles contre l'arbitraire des puissants.",
          category: "Philosophie Antique Africaine (Principe de Maât)",
          connector: "Par ailleurs"
        },
        {
          statement: "La justice réparatrice et réconciliatrice surpasse la seule punition rétributive en régénérant les liens de la communauté humaine brisée.",
          author: "Desmond Tutu",
          work: "Il n'y a pas d'avenir sans pardon",
          quote: "La justice restaurative vise la guérison des blessures, le rétablissement des équilibres rompus et la réconciliation des protagonistes.",
          explanation: "Inspirée de la sagesse africaine de l'Ubuntu, la justice transitionnelle refuse de réduire le droit au châtiment vindicatif. En favorisant l'aveu de la vérité et la réparation mutuelle, elle permet de bâtir une paix durable par-delà les atrocités du passé.",
          category: "Justice Réparatrice & Sagesse de l'Ubuntu",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "devoir": [
    {
      id: 0,
      label: "Perspectives Déontologiques : L'Impératif Moral & L'Autonomie Rationnelle",
      perspective: "Impératif catégorique, Agir par devoir & Pureté de l'intention",
      pedagogicalAdvice: "Le socle incontournable de la morale kantienne opposant le devoir désintéressé à l'intérêt égoïste.",
      arguments: [
        {
          statement: "Le devoir moral s'impose à la raison comme un impératif catégorique inconditionnel excluant tout calcul d'intérêt.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle.",
          explanation: "Kant distingue agir « par devoir » et agir simplement « conformément au devoir » par intérêt ou compassion. La vraie valeur morale réside dans la pureté de la bonne volonté : une action n'est bonne que si son principe peut être érigé sans contradiction en loi pour toute l'humanité.",
          category: "Thèse (Impératif Catégorique & Universalité)",
          connector: "De prime abord"
        },
        {
          statement: "Le devoir authentique n'est pas une contrainte extérieure subie mais l'expression souveraine de l'autonomie rationnelle.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pratique",
          quote: "Tu dois, donc tu peux.",
          explanation: "Kant démontre que le devoir révèle à l'homme sa liberté suprême. Même sous la pression des passions sensibles les plus violentes, la conscience morale atteste que l'être raisonnable a le pouvoir de choisir le bien et de résister aux inclinations égoïstes.",
          category: "Fondement (Autonomie & Pouvoir Moral)",
          connector: "En second lieu"
        },
        {
          statement: "L'impératif moral exige de ne jamais traiter une personne humaine comme un simple moyen, mais toujours comme une fin en soi.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans la personne de tout autre, toujours en même temps comme une fin, et jamais simplement comme un moyen.",
          explanation: "Les objets ont un prix marchand et sont échangeables, mais la personne humaine possède une dignité inestimable. Le devoir suprême interdit d'instrumentaliser, d'exploiter ou de manipuler autrui pour parvenir à ses propres fins.",
          category: "Dignité Humaine & Fin en Soi",
          connector: "Par ailleurs"
        },
        {
          statement: "Le devoir moral s'enracine dans la voix infaillible de la conscience qui juge spontanément le bien et le mal.",
          author: "Jean-Jacques Rousseau",
          work: "Profession de foi du vicaire savoyard",
          quote: "Il est au fond des âmes un principe inné de justice et de vertu, sur lequel, malgré nos propres maximes, nous jugeons nos actions et celles d'autrui comme bonnes ou mauvaises.",
          explanation: "Rousseau refuse de faire du devoir une construction cérébrale abstraite réservée aux érudits. Tout être humain éprouve dans son cœur le sentiment spontané de l'obligation morale, qui le pousse à secourir son semblable.",
          category: "Sensibilité Morale (Innéisme Conscient)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Généalogiques & Critiques : Soupçon, Dressage & Morale du Ressentiment",
      perspective: "Maîtres du soupçon, Inconscient culpabilisant & Déconstruction sociale",
      pedagogicalAdvice: "À mobiliser pour contester l'illusion d'une morale désintéressée et dévoiler les mécanismes de culpabilisation.",
      arguments: [
        {
          statement: "La voix de la conscience morale n'est pas divine mais constitue l'intériorisation sociale des interdits parentaux et civils.",
          author: "Sigmund Freud",
          work: "Le Malaise dans la culture",
          quote: "Ce qui est mauvais est à l'origine ce pour quoi on est menacé de la perte de l'amour.",
          explanation: "Freud explique que le Surmoi naît de l'intériorisation de l'autorité extérieure. Le sentiment de culpabilité morale n'est rien d'autre que l'angoisse de perdre l'approbation sociale, transformée en auto-surveillance psychique impitoyable de l'individu contre ses propres pulsions.",
          category: "Antithèse (Surmoi & Culpabilité Inconsciente)",
          connector: "D'un autre côté"
        },
        {
          statement: "La morale du devoir sacrificiel est une invention du ressentiment pour affaiblir les instincts vitaux créateurs.",
          author: "Friedrich Nietzsche",
          work: "Généalogie de la morale",
          quote: "La mauvaise conscience est la maladie la plus grave que l'homme ait contractée sous la pression de la métamorphose sociale.",
          explanation: "Nietzsche montre que l'injonction du devoir désintéressé relève de la morale des esclaves. Incapables d'affirmer la force et la joie terrestre, les faibles érigent leur impuissance en vertu morale et culpabilisent les esprits libres au nom d'un devoir transcendant imaginaire.",
          category: "Critique Généalogique (Ressentiment & Vitalisme)",
          connector: "Cependant"
        },
        {
          statement: "Les devoirs moraux officiels ne sont que les impératifs idéologiques au service de la reproduction de l'ordre bourgeois.",
          author: "Karl Marx",
          work: "Manifeste du Parti communiste",
          quote: "La morale, la religion, le droit sont pour le prolétariat autant de préjugés bourgeois derrière lesquels se cachent autant d'intérêts bourgeois.",
          explanation: "Pour Marx, prêcher le devoir de patience, de docilité et d'amour du travail aux ouvriers exploités sert à désamorcer la contestation révolutionnaire. La vraie morale commence par le renversement concret des structures d'aliénation économique.",
          category: "Critique Idéologique (Conditionnement de Classe)",
          connector: "En outre"
        },
        {
          statement: "L'obéissance aveugle au devoir militaire ou administratif peut engendrer la banalité monstrueuse du mal.",
          author: "Hannah Arendt",
          work: "Eichmann à Jérusalem",
          quote: "Le mal le plus terrible est perpétré par des zéros, par des hommes qui refusent d'être des personnes et de penser.",
          explanation: "Arendt observe lors du procès de Nuremberg et d'Eichmann que les exécutants des pires atrocités invoquaient le sens scrupuleux du devoir et de l'obéissance aux ordres. Le devoir sans pensée critique ni discernement éthique personnel engendre la barbarie bureaucratique.",
          category: "Mise en Garde (Banalité du Mal & Obéissance)",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives de l'Altérité : Responsabilité pour Autrui & Éthique du Soin",
      perspective: "Visage d'autrui, Responsabilité asymétrique & Sollicitude",
      pedagogicalAdvice: "Indispensable pour traiter le devoir comme une obligation vivante envers l'être vulnérable.",
      arguments: [
        {
          statement: "Le devoir moral originel naît de la rencontre avec le visage désarmé d'autrui qui m'ordonne de ne pas le tuer.",
          author: "Emmanuel Levinas",
          work: "Éthique et Infini",
          quote: "Le visage d'autrui signifie : tu ne tueras point. C'est l'exigence morale première avant tout accord délibéré.",
          explanation: "Levinas renverse l'égologie occidentale : le sujet moral ne décide pas souverainement de ses devoirs. C'est la vulnérabilité absolue du visage de l'autre qui m'assigne à une responsabilité inconditionnelle dont je ne peux me décharger sur quiconque.",
          category: "Thèse Éthique (Visage & Assignation Morale)",
          connector: "En premier lieu"
        },
        {
          statement: "Le devoir authentique s'articule à la sollicitude pour les autres au sein d'institutions justes.",
          author: "Paul Ricœur",
          work: "Soi-même comme un autre",
          quote: "Viser la vie bonne avec et pour les autres dans des institutions justes.",
          explanation: "Ricœur réconcilie l'éthique aristotélicienne du bonheur et la morale kantienne de l'obligation. Le devoir formel doit s'incarner dans la bienveillance vécue et l'attention concrète à la fragilité de nos relations humaines.",
          category: "Sollicitude Éthique (Sagesse Pratique)",
          connector: "Aussi"
        },
        {
          statement: "Le devoir envers les plus faibles exige une attention méticuleuse et le renoncement au prestige personnel.",
          author: "Simone Weil",
          work: "L'Enracinement",
          quote: "La notion d'obligation prime celle de droit, qui lui est subordonnée et relative. Un homme qui serait seul dans l'univers n'aurait aucun droit, mais il aurait des obligations.",
          explanation: "Weil affirme que proclamer des droits sans imposer d'obligations concrètes d'assistance reste stérile. L'obligation de respecter les besoins fondamentaux de l'âme et du corps d'autrui est éternelle et ne dépend d'aucune contrepartie.",
          category: "Primauté de l'Obligation (Enracinement Éthique)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'éthique du devoir envers les vivants implique la responsabilité inconditionnelle envers les générations futures.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre.",
          explanation: "Face à la puissance technologique moderne capable de détruire l'habitat terrestre, Jonas forge un nouvel impératif catégorique : nous avons un devoir sacré envers des êtres qui n'existent pas encore et ne peuvent faire valoir aucun droit présent.",
          category: "Éthique Prospective (Responsabilité Planétaire)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Politiques, Civiques & Décoloniales : Devoir et Résistance",
      perspective: "Devoir civique, Solidarité collective & Libération des opprimés",
      pedagogicalAdvice: "À privilégier pour les sujets croisant le devoir avec l'État, la patrie, la résistance et les luttes de dignité.",
      arguments: [
        {
          statement: "Dans la république, le citoyen a le devoir d'obéir aux lois communes parce qu'il en est lui-même l'auteur souverain.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "Renoncer à sa liberté, c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs.",
          explanation: "Pour Rousseau, on ne saurait avoir de devoirs envers un tyran : un devoir envers une puissance arbitraire est nul et sans valeur. Le devoir d'obéissance civique n'a de sens que dans une démocratie où la volonté générale protège la liberté de tous.",
          category: "Thèse Politique (Devoir Civique & Souveraineté)",
          connector: "De prime abord"
        },
        {
          statement: "L'intellectuel et l'écrivain ont le devoir impérieux d'engager leur parole au service de la vérité et des opprimés.",
          author: "Jean-Paul Sartre",
          work: "Qu'est-ce que la littérature ?",
          quote: "L'écrivain engagé sait que la parole est action ; il sait que dévoiler, c'est changer et qu'on ne peut dévoiler qu'en projetant de changer.",
          explanation: "Sartre refuse la neutralité complaisante de l'esprit pur. Vivre dans une société traversée par l'injustice confère à chaque conscience le devoir de prendre parti et d'agir pour libérer l'humanité de la domination matérielle.",
          category: "Engagement Intellectuel (Responsabilité Historique)",
          connector: "Dans cette perspective"
        },
        {
          statement: "Chaque génération a le devoir historique de découvrir sa mission d'émancipation et de la remplir sans trahison.",
          author: "Frantz Fanon",
          work: "Les Damnés de la terre",
          quote: "Chaque génération doit, dans une relative opacité, découvrir sa mission, la remplir ou la trahir.",
          explanation: "Fanon rappelle aux peuples en lutte que le devoir ne se réduit pas à une docilité morale abstraite. Face aux séquelles de la colonisation, le devoir suprême est de refonder l'ordre politique sur la justice, l'autonomie et la souveraineté collective.",
          category: "Devoir Révolutionnaire (Pensée Décoloniale)",
          connector: "Cependant"
        },
        {
          statement: "La philosophie en Afrique a le devoir d'exercer une critique sans concession des dogmes passés et des idéologies aliénantes.",
          author: "Marcien Towa",
          work: "L'Idée d'une philosophie négro-africaine",
          quote: "Notre devoir est d'oser penser par nous-mêmes pour briser les chaînes de la sujétion et construire notre propre avenir.",
          explanation: "Towa affirme que le devoir de l'intellectuel africain n'est pas de glorifier passivement les traditions anachroniques, mais de mobiliser la rigueur philosophique et scientifique pour libérer les consciences et moderniser les sociétés.",
          category: "Pensée Critique Africaine (Émancipation Intellectuelle)",
          connector: "Pour conclure"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Existentielles, Éthique de la Responsabilité & Vulnérabilité",
      perspective: "Responsabilité universelle, Visage d'autrui & Devoir envers les générations futures",
      pedagogicalAdvice: "À mobiliser pour penser le devoir moral au-delà du formalisme abstrait, dans le souci concret de la fragilité humaine et planétaire.",
      arguments: [
        {
          statement: "Le devoir moral moderne commande d'anticiper la vulnérabilité de la Terre et de préserver les conditions d'existence des générations futures.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre.",
          explanation: "Face aux pouvoirs technologiques destructeurs de la civilisation industrielle, Jonas refonde l'impératif catégorique : notre premier devoir éthique n'est plus seulement synchronique envers nos contemporains, mais diachronique envers ceux qui ne sont pas encore nés.",
          category: "Thèse (Éthique du Futur & Responsabilité Planétaire)",
          connector: "De prime abord"
        },
        {
          statement: "Le devoir suprême surgit sans médiation conceptuelle face à l'infinie vulnérabilité du visage d'autrui qui m'interdit le meurtre.",
          author: "Emmanuel Lévinas",
          work: "Totalité et Infini",
          quote: "Le visage d'autrui s'impose à moi sans que je puisse rester sourd à son appel : il m'ordonne « Tu ne tueras point ».",
          explanation: "Lévinas situe l'origine de l'éthique dans la transcendance du visage d'autrui, dénué et sans défense. Le devoir n'est pas une loi générale que je me donne à moi-même, mais une assignation passive où je réponds d'autrui avant tout choix délibéré.",
          category: "Éthique de l'Altérité & Primauté du Visage",
          connector: "En second lieu"
        },
        {
          statement: "L'obligation envers autrui et le respect des besoins vitaux de l'âme humaine constituent des devoirs universels antérieurs à tout droit positif.",
          author: "Simone Weil",
          work: "L'Enracinement",
          quote: "L'obligation seule est éternelle. Elle est située au-dessus de ce monde. Les droits sont toujours subordonnés aux obligations qui les réalisent.",
          explanation: "Weil soutient que la notion d'obligation précède celle de droit. Un droit n'a aucune réalité pratique si personne ne se sent le devoir strict de le respecter ; le devoir d'offrir vérité, justice, liberté et nourriture spirituelle incombe imprescriptiblement à chaque communauté humaine.",
          category: "Fondement (Primauté de l'Obligation Sacrée)",
          connector: "Par ailleurs"
        },
        {
          statement: "Chaque être humain porte la responsabilité totale de ses actes et engage par son choix moral l'image de l'humanité tout entière.",
          author: "Jean-Paul Sartre",
          work: "L'existentialisme est un humanisme",
          quote: "En me choisissant, je choisis l'homme. Rien ne peut être bon pour nous sans l'être pour tous.",
          explanation: "Pour Sartre, l'absence de déterminisme divin ou naturel ne supprime pas le devoir : elle le décuple dans l'angoisse de la responsabilité. Nul ne peut s'abriter derrière des excuses ou des fatalités ; chacun est responsable de la valeur morale du monde qu'il contribue à forger.",
          category: "Portée Éthique (Responsabilité Universelle)",
          connector: "Enfin"
        }
      ]
    }
  ],

  "autrui": [
    {
      id: 0,
      label: "Perspectives de la Conscience de Soi : Médiation & Reconnaissance Réciproque",
      perspective: "Médiateur vers soi-même, Dialectique du Maître et de l'Esclave & Altérité fondatrice",
      pedagogicalAdvice: "Essentiel pour montrer qu'on ne peut accéder à la pleine conscience de soi sans le détour par autrui.",
      arguments: [
        {
          statement: "Autrui est le médiateur indispensable sans lequel la conscience de soi demeure une pure certitude abstraite et vide.",
          author: "G.W.F. Hegel",
          work: "Phénoménologie de l'esprit",
          quote: "La conscience de soi n'atteint sa satisfaction que dans une autre conscience de soi.",
          explanation: "Dans la dialectique de la reconnaissance, Hegel montre que l'homme ne peut prouver sa liberté et sa valeur que s'il est reconnu par une autre conscience libre. La confrontation avec autrui arrache le sujet à l'animalité pour l'élever à l'existence spirituelle et historique.",
          category: "Thèse (Médiation & Reconnaissance Dialectique)",
          connector: "De prime abord"
        },
        {
          statement: "Autrui est le médiateur indispensable entre moi et moi-même qui me révèle à ma propre subjectivité.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant",
          quote: "Autrui est le médiateur indispensable entre moi et moi-même : j'ai honte de moi tel que j'apparais à autrui.",
          explanation: "Sartre explique que dans l'expérience intime de la honte, je découvre une dimension de mon être que je n'ai pas choisie : mon être-pour-autrui. Le regard d'autrui m'objective et me fait prendre conscience que je suis exposé au monde comme un objet intelligible.",
          category: "Thèse Phénoménologique (Le Regard & L'Être-pour-autrui)",
          connector: "En outre"
        },
        {
          statement: "La sympathie et la pitié naturelle envers autrui précèdent toute réflexion rationnelle et fondent la sociabilité humaine.",
          author: "Jean-Jacques Rousseau",
          work: "Discours sur l'origine et les fondements de l'inégalité parmi les hommes",
          quote: "La pitié est un sentiment naturel qui, modérant dans chaque individu l'amour de soi-même, concourt à la conservation mutuelle de toute l'espèce.",
          explanation: "Avant même d'apprendre à philosopher ou de conclure des pactes juridiques, l'être humain éprouve une répugnance innée à voir souffrir son semblable. Ce mouvement affectif d'identification à autrui constitue la source originelle de toutes les vertus sociales.",
          category: "Sensibilité Morale (Pitié & Bienveillance)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'amitié véritable est le sommet de la relation à autrui où l'on aime l'ami pour ce qu'il est en lui-même.",
          author: "Aristote",
          work: "Éthique à Nicomaque",
          quote: "L'ami est un autre soi-même (alter ego).",
          explanation: "Aristote distingue l'amitié par intérêt ou par plaisir de l'amitié vertueuse. Dans cette dernière, deux âmes nobles se contemplent mutuellement dans l'exercice du bien. La présence de l'ami bienveillant rend l'activité de la vie et la pensée plus intenses et plus heureuses.",
          category: "Accomplissement Éthique (L'Alter Ego Aristotélicien)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives du Conflit & de la Menace : Regard Chosifiant & Solipsisme",
      perspective: "Huis clos, Aliénation par le regard & Hostilité originelle",
      pedagogicalAdvice: "À utiliser pour examiner les écueils de la relation intersubjective, la rivalité et la peur de l'autre.",
      arguments: [
        {
          statement: "La présence d'autrui aliène ma liberté originelle en me figeant sous son regard en objet manipulable.",
          author: "Jean-Paul Sartre",
          work: "Huis clos",
          quote: "L'enfer, c'est les autres.",
          explanation: "Cette formule célèbre ne désigne pas la méchanceté banale du voisin, mais le supplice ontologique de dépendre irrémédiablement du jugement d'autrui. Sous le regard extérieur, je suis dépouillé de ma subjectivité fluide pour être réduit à une essence pétrifiée.",
          category: "Antithèse (Chosification & Aliénation Existentialiste)",
          connector: "D'un autre côté"
        },
        {
          statement: "Dans l'état de nature livré aux passions égoïstes, autrui apparaît d'abord comme une menace mortelle permanente.",
          author: "Thomas Hobbes",
          work: "De Cive (Le Citoyen)",
          quote: "L'homme est un loup pour l'homme (Homo homini lupus).",
          explanation: "Hobbes rappelle que la rivalité pour les mêmes ressources, la vanité et la défiance mutuelle conduisent spontanément les hommes au conflit destructeur. Loin d'être naturellement bienveillant, autrui est un rival potentiel que seul l'ordre étatique peut pacifier.",
          category: "Réalisme Politique (Rivalité & Insécurité Originelle)",
          connector: "Cependant"
        },
        {
          statement: "Le désir de reconnaissance conduit inévitablement à une lutte à mort des consciences pour asseoir leur suprématie.",
          author: "G.W.F. Hegel",
          work: "Propédeutique philosophique",
          quote: "Le combat pour la reconnaissance est une lutte où chacune des consciences risque sa propre vie pour prouver sa liberté.",
          explanation: "Hegel démontre que la relation à autrui ne débute jamais dans la concorde pacifique mais dans l'affrontement tragique. Pour qu'une conscience s'impose comme supérieure au règne animal du corps, elle doit défier la mort et contraindre l'autre conscience à se soumettre.",
          category: "Lutte Dialectique (Maîtrise & Servitude)",
          connector: "Qui plus est"
        },
        {
          statement: "La conscience d'autrui demeure une forteresse impénétrable menaçant la certitude de ma propre subjectivité.",
          author: "René Descartes",
          work: "Méditations métaphysiques",
          quote: "Que vois-je de cette fenêtre, sinon des chapeaux et des manteaux, qui peuvent couvrir des spectres ou des hommes feints qui ne se remuent que par ressorts ?",
          explanation: "Descartes pointe le problème épistémologique du solipsisme. Par mes yeux seuls, je n'observe que des corps matériels en mouvement. C'est uniquement par un jugement de l'entendement et par analogie avec mon for intérieur que j'infère qu'autrui pense comme moi.",
          category: "Doute Épistémologique (Le Problème des Autres Esprits)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives de l'Éthique Inconditionnelle : Le Visage & La Vulnérabilité",
      perspective: "Asymétrie éthique, Otage d'autrui & Hospitalité absolue",
      pedagogicalAdvice: "À mobiliser pour donner la plus haute portée morale au devoir d'accueil et d'amour d'autrui.",
      arguments: [
        {
          statement: "L'épiphanie du visage d'autrui paralyse ma puissance égoïste et m'impose une responsabilité infinie et sans retour.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini",
          quote: "Le visage me parle et par là m'invite à une relation sans commune mesure avec un pouvoir que j'exercerais.",
          explanation: "Chez Levinas, autrui n'est pas un concept théorique ni un objet de curiosité. Sa vulnérabilité nue, désarmée devant moi, brise mon égoïsme spontané et m'interdit la violence. Je suis responsable d'autrui avant même de savoir s'il me rendra la pareille.",
          category: "Thèse Éthique (Visage & Transcendance)",
          connector: "En premier lieu"
        },
        {
          statement: "La relation authentique à autrui est un dialogue de présence « Je-Tu » irréductible à l'utilisation utilitaire « Je-Cela ».",
          author: "Martin Buber",
          work: "Je et Tu",
          quote: "Toute vie véritable est rencontre.",
          explanation: "Buber distingue deux manières d'être au monde : traiter les êtres comme des objets à analyser et exploiter (« Je-Cela »), ou entrer dans une communion spirituelle réciproque avec l'autre (« Je-Tu ») où chacun s'engage de tout son être dans l'écoute mutuelle.",
          category: "Philosophie du Dialogue (La Rencontre Intersubjective)",
          connector: "Dans le même sens"
        },
        {
          statement: "L'attention bienveillante et désintéressée est la forme la plus pure et la plus rare de générosité envers autrui.",
          author: "Simone Weil",
          work: "Attente de Dieu",
          quote: "La plénitude de l'amour du prochain, c'est simplement d'être capable de lui demander : « Quel est ton tourment ? »",
          explanation: "Pour Simone Weil, aimer autrui ne consiste pas à lui imposer ses propres bienfaits ou conseils indiscrets, mais à faire le vide en soi pour accueillir pleinement sa détresse et lui accorder une attention véritable et respectueuse.",
          category: "Éthique de la Sollicitude (L'Attention Pure)",
          connector: "D'un autre côté"
        },
        {
          statement: "L'hospitalité inconditionnelle envers l'étranger est l'épreuve de vérité de toute civilisation morale et démocratique.",
          author: "Jacques Derrida",
          work: "De l'hospitalité",
          quote: "L'hospitalité absolue exige que j'ouvre mon logis non seulement à l'invité identifié, mais à l'étranger absolu sans lui demander ni son nom ni ses papiers.",
          explanation: "Derrida oppose les lois restreintes de l'hospitalité conditionnelle (qui exigent des contrôles et des garanties) à la loi pure de l'hospitalité. Bien qu'inaccessible dans sa pureté absolue, cet idéal d'accueil sans condition doit guider nos politiques pour humaniser le monde.",
          category: "Dépassement Éthique (Hospitalité Inconditionnelle)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Décoloniales & Cosmopolitiques : L'Autre Culturel & Le Tout-Monde",
      perspective: "Diversité des peuples, Relation, Antiracisme & Créolisation",
      pedagogicalAdvice: "Indispensable pour aborder les sujets d'altérité culturelle, d'ethnocentrisme, de métissage et de fraternité mondiale.",
      arguments: [
        {
          statement: "Le barbare est d'abord celui qui rejette les coutumes d'autrui hors de l'humanité sous le coup de l'ethnocentrisme.",
          author: "Claude Lévi-Strauss",
          work: "Race et Histoire",
          quote: "Le barbare, c'est d'abord l'homme qui croit à la barbarie.",
          explanation: "L'anthropologue français démontre que le réflexe spontané consistant à juger les mœurs d'autrui comme sauvages ou monstrueuses n'est que la projection de nos propres préjugés culturels. Aucune culture ne détient le monopole exclusif de la perfection humaine.",
          category: "Thèse Anthropologique (Critique de l'Ethnocentrisme)",
          connector: "De prime abord"
        },
        {
          statement: "La découverte de soi s'enrichit de la rencontre créatrice et imprévisible de toutes les humanités du monde.",
          author: "Édouard Glissant",
          work: "Poétique de la Relation",
          quote: "Je peux changer en échangeant avec l'autre, sans pourtant me perdre ni me dénaturer.",
          explanation: "Glissant dépasse l'angoisse de l'identité-racine close et exclusive. Dans la « Relation » planétaire, les identités deviennent des rhizomes ouverts au métissage et aux cultures du monde entier, fondant une fraternité solidaire et plurielle.",
          category: "Poétique de la Relation & Tout-Monde",
          connector: "Aussi"
        },
        {
          statement: "La réhabilitation de l'homme opprimé exige d'arracher le colonisé au regard méprisant et réificateur du colonisateur.",
          author: "Frantz Fanon",
          work: "Peau noire, masques blancs",
          quote: "Je suis mon propre fondement. Et c'est en me dépassant que je commence à toucher l'autre, à sentir l'autre, à me dévoiler à l'autre.",
          explanation: "Fanon analyse les traumatismes psychologiques de l'aliénation raciale où le Noir est prisonnier de son épiderme sous le regard blanc. L'émancipation consiste à briser ce miroir trompeur pour construire une relation d'égal à égal exempte de complexes de supériorité ou d'infériorité.",
          category: "Pensée Décoloniale (Désaliénation & Reconnaissance)",
          connector: "Toutefois"
        },
        {
          statement: "La solidarité cosmopolitique commande de reconnaître en tout homme un membre à part entière de la communauté républicaine universelle.",
          author: "Emmanuel Kant",
          work: "Projet de paix perpétuelle",
          quote: "Le droit cosmopolitique doit être restreint aux conditions de l'hospitalité universelle.",
          explanation: "Puisque la surface de la terre est sphérique et finie, les hommes ne peuvent se disperser à l'infini et doivent apprendre à coexister pacifiquement. Le devoir d'hospitalité confère à chaque voyageur le droit de ne pas être traité en ennemi lorsqu'il arrive sur un territoire étranger.",
          category: "Droit Cosmopolitique (Hospitalité Universelle)",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
