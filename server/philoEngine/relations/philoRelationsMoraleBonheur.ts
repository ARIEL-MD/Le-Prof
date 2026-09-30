import { PhiloRelationEntry } from "../philoRelationsDatabase";

/**
 * RELATIONS PHILOSOPHIQUES : MORALE, BONHEUR, DÉSIR & VOLONTÉ
 */
export const PHILO_RELATIONS_MORALE_BONHEUR: PhiloRelationEntry[] = [
  // --------------------------------------------------------------------------
  // 1. BONHEUR & VOLONTÉ / DÉPENDANCE (Le bonheur dépend-il de nous ?)
  // --------------------------------------------------------------------------
  {
    id: "bonheur-volonte-dependance",
    label: "Bonheur & Volonté (Dépendance intérieure vs Aléas extérieurs)",
    triggerRegex: /(?:bonheur|heureu\w*).*(?:depend.*(?:nous|moi|soi|volont|homme)|ma[iî]tre.*bonheur|decider.*heureu)|(?:depend.*(?:nous|moi|soi|volont|homme)|ma[iî]tre.*bonheur|decider.*heureu).*(?:bonheur|heureu\w*)/i,
    concept1: "Bonheur",
    concept2: "Volonté",
    lexiqueDefinitions: [
      {
        terme: "Bonheur",
        definition: "État durable de plénitude, de satisfaction globale et de sérénité de l'esprit, distinct du plaisir éphémère."
      },
      {
        terme: "Dépendre de nous",
        definition: "Relever de notre libre arbitre, de notre volonté délibérée et de nos jugements intérieurs, sans être assujetti aux circonstances fortuites."
      },
      {
        terme: "Fortune / Déterminisme",
        definition: "Ensemble des facteurs extérieurs, biologiques, sociaux ou contingents que l'individu ne contrôle pas."
      }
    ],
    reformulationPattern: "Il s'agit de déterminer si l'accès à la félicité relève exclusivement de la maîtrise de soi et de la liberté intérieure, ou si le bonheur demeure tributaire de conditions extérieures et de hasards qui échappent à notre contrôle.",
    tensionPhilosophique: "L'aspiration au bonheur semble exiger un pouvoir d'autonomie et de décision morale ; or, l'homme est incarné dans un corps fragile et un monde imprévisible où la maladie, le deuil et l'injustice peuvent anéantir ses efforts.",
    problemeCourt: "L'homme est-il le souverain artisan de son propre bonheur ?",
    aspect1: "dans quelle mesure le bonheur dépend-il de notre volonté et de notre maîtrise intérieure ?",
    aspect2: "toutefois, notre félicité n'est-elle pas tributaire de conditions extérieures qui nous échappent ?",
    axe1: {
      title: "Le bonheur dépend souverainement de notre disposition intérieure, de notre jugement et de notre vertu morale",
      significance: "la véritable félicité réside dans l'autonomie spirituelle que nul événement extérieur ne peut confisquer",
      overview: "Affirmer que le bonheur dépend de nous implique que la paix de l'âme se conquiert par la maîtrise rationnelle des désirs et des jugements. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La distinction fondamentale entre ce qui dépend de nous et ce qui n'en dépend pas garantit l'invulnérabilité du sage.",
          author: "Épictète",
          work: "Manuel d'Épictète (Enchiridion)",
          quote: "Il y a des choses qui dépendent de nous, et d'autres qui ne dépendent pas de nous. Ce qui dépend de nous, ce sont nos jugements, nos tendances, nos désirs, nos aversions... Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.",
          explanation: "Épictète fonde la liberté stoïcienne sur une rigoureuse dichotomie : le corps, la richesse, la réputation et la mort échappent à notre volonté absolue. En revanche, la manière dont nous réagissons et interprétons les événements dépend entièrement de notre esprit. Si l'homme cesse de vouloir changer l'ordre du monde pour ordonner sa propre âme, il atteint l'ataraxie inaltérable.",
          analyseIllustration: "Cette leçon stoïcienne établit que le malheur ne provient jamais des événements eux-mêmes, mais de notre attachement illusoire à ce que nous ne pouvons maîtriser."
        },
        {
          statement: "Le bonheur authentique est la béatitude née de la connaissance rationnelle de soi et de l'adéquation au réel.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre V, De la liberté de l'homme)",
          quote: "La béatitude n'est pas le prix de la vertu, mais la vertu elle-même.",
          explanation: "Spinoza montre que l'homme n'est pas une puissance isolée (« un empire dans un empire »), mais qu'il peut transformer les passions tristes et subies en joies actives dès lors qu'il comprend par la raison les causes réelles qui le meuvent. La félicité n'est pas une récompense accordée de l'extérieur, mais l'état d'esprit de celui qui s'affranchit de l'angoisse par l'intelligence de la nature.",
          analyseIllustration: "Spinoza démontre que la conquête de la joie intérieure est une libération intellectuelle accessible à quiconque cultive la raison."
        },
        {
          statement: "La sagesse consiste à discipliner ses désirs pour ne désirer que ce qui est accessible et conforme à la nature.",
          author: "Épicure",
          work: "Lettre à Ménécée",
          quote: "Quand nous disons que le plaisir est la fin, nous ne parlons pas des plaisirs des débauchés... mais de l'absence de souffrance dans le corps (aponie) et de trouble dans l'âme (ataraxie).",
          explanation: "En établissant une classification lucide des désirs (naturels et nécessaires, naturels et non nécessaires, vains et chimériques), Épicure prouve que le bonheur exige très peu de biens matériels. Il suffit de satisfaire la faim, la soif et l'amitié pour éprouver la plénitude de l'existence.",
          analyseIllustration: "Cette ascèse hédoniste confirme que le bonheur est à portée de main dès lors que l'on renonce aux ambitions démesurées imposées par l'opinion sociale."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la maîtrise intérieure et la sagesse philosophique permettent à l'homme de forger son équilibre mental. Toutefois, une volonté lucide suffit-elle à préserver le bonheur face à l'effondrement des conditions matérielles, à la souffrance physique et aux drames imprévisibles de l'existence ?",
    axe2: {
      title: "Le bonheur demeure vulnérable et tributaire de contingences matérielles, physiologiques et sociales que la seule volonté ne saurait surmonter",
      significance: "l'être humain est un être incarné et relationnel dont la félicité est menacée par la fortune et la précarité du monde",
      overview: "Dire que le bonheur ne dépend pas entièrement de nous revient à reconnaître la finitude humaine et l'impact décisif des conditions réelles de vie. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La vertu morale ne suffit pas à elle seule pour être heureux : la félicité exige un minimum de prospérité extérieure et de santé corporelle.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre I)",
          quote: "Il est manifestement impossible, ou du moins malaisé, d'accomplir de belles actions quand on est dépourvu de ressources... Le bonheur semble avoir besoin de cette sorte de prospérité.",
          explanation: "Réfutant l'orgueil stoïcien qui prétend que le sage demeurerait heureux même sur le bûcher de torture de Phalaris, Aristote rappelle que l'homme a besoin d'amis, de santé, de sécurité et d'une durée de vie décente. De grands malheurs ou une misère extrême brisent inévitablement la joie d'exister.",
          analyseIllustration: "Aristote ancre le bonheur dans la réalité empirique : la volonté morale est une condition nécessaire, mais elle ne saurait tenir lieu de condition suffisante sans la faveur de la fortune."
        },
        {
          statement: "La condition humaine est structurellement travaillée par l'inquiétude et l'insatisfaction tragique du vouloir-vivre.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "La vie oscille comme un pendule, de droite à gauche, de la souffrance à l'ennui.",
          explanation: "Pour Schopenhauer, notre être est dominé par une pulsion vitale aveugle et incessante. Dès qu'un désir est comblé, la satiété engendre l'ennui ; dès qu'il est contrarié, il provoque la souffrance. Le bonheur parfait n'est qu'un mirage inaccessible que notre volonté impuissante poursuit vainement.",
          analyseIllustration: "Cette vision métaphysique dévoile que prétendre fabriquer son bonheur par la seule volonté méconnaît la nature profondément tragique du désir humain."
        },
        {
          statement: "Le principe de réalité et l'hostilité du monde naturel et social limitent radicalement l'accomplissement du programme du principe de plaisir.",
          author: "Sigmund Freud",
          work: "Malaise dans la civilisation",
          quote: "Le dessein d'être heureux n'entre pas dans le plan de la Création.",
          explanation: "Freud souligne que la souffrance menace l'homme de trois côtés : de son propre corps voué au déclin, du monde extérieur aux forces destructrices, et des relations avec autrui dans la vie sociale. La civilisation impose des renoncements pulsionnels permanents qui rendent tout bonheur absolu et continu impossible.",
          analyseIllustration: "Freud démontre que le bonheur total ne saurait dépendre d'un simple décret de la volonté, l'inconscient et la civilisation imposant des compromis perpétuels."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît indéniable que la discipline de l'esprit et la sagesse éthique confèrent à l'homme un pouvoir réel d'affranchissement face aux passions désordonnées.",
      reponseDefinitive: "Toutefois, nous affirmons qu'il serait présomptueux de soutenir que le bonheur dépend exclusivement de nous : l'être humain est incarné, fragile et tributaire des aléas du destin et de la solidarité d'autrui.",
      elargissement: "En ce qui nous concerne, nous dirons que la grandeur de la liberté ne consiste pas à feindre l'invulnérabilité, mais à faire fructifier avec courage ce qui dépend de nous tout en acceptant avec lucidité les limites imposées par la condition humaine."
    }
  },

  // --------------------------------------------------------------------------
  // 2. PEUT-ON ÊTRE HEUREUX SANS AUTRUI ?
  // --------------------------------------------------------------------------
  {
    id: "bonheur-autrui-solitude",
    label: "Bonheur & Autrui (Autarcie solitaire vs Nécessité de l'altérité)",
    triggerRegex: /(?:peut-on|homme\s+peut-il|est-il\s+possible).*(?:heureu\w*|bonheur).*(?:sans\s+autrui|solitaire|seul|solitude)|(?:sans\s+autrui|solitaire|seul|solitude).*(?:heureu\w*|bonheur)/i,
    concept1: "Bonheur",
    concept2: "Autrui",
    lexiqueDefinitions: [
      {
        terme: "Bonheur",
        definition: "État durable et complet de satisfaction intérieure et de réalisation de ses potentialités."
      },
      {
        terme: "Sans autrui / Solitude",
        definition: "Situation d'isolement social ou d'autonomie affective et intellectuelle où le sujet se soustrait au commerce et au regard de ses semblables."
      },
      {
        terme: "Altérité / Inter呔subjectivité",
        definition: "Relation constitutive avec un autre que soi, reconnu comme un sujet doué de conscience et de liberté."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si l'homme peut atteindre la félicité dans l'isolement et l'indépendance souveraine de son âme, ou si la relation à autrui constitue une condition indispensable et structurelle de tout bonheur authentique.",
    tensionPhilosophique: "Autrui est souvent source de conflits, de jugements blessants et de compromis qui troublent notre tranquillité ; pourtant, l'isolement absolu plonge l'homme dans la stérilité affective et le vide existentiel.",
    problemeCourt: "L'homme peut-il trouver le bonheur dans la solitude ?",
    aspect1: "dans quelle mesure peut-on concevoir le bonheur dans la solitude ?",
    aspect2: "toutefois, ne requiert-il pas nécessairement la présence d'autrui ?",
    axe1: {
      title: "L'autarcie, la paix intérieure et la solitude choisie permettent d'échapper aux tourments suscités par autrui et de goûter au sentiment pur de l'existence",
      significance: "la distance prise avec le regard et les rivalités d'autrui préserve l'âme des passions aliénantes",
      overview: "Affirmer que l'on peut être heureux sans autrui revient à valoriser la liberté souveraine du sage et la plénitude du recueillement intérieur. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La plénitude du bonheur se trouve dans le sentiment pur de sa propre existence éprouvé dans la solitude contemplative.",
          author: "Jean-Jacques Rousseau",
          work: "Les Rêveries du promeneur solitaire (Cinquième Promenade)",
          quote: "De quoi jouit-on dans une pareille situation ? De rien d'extérieur à soi, de rien sinon de soi-même et de sa propre existence.",
          explanation: "Rousseau décrit son séjour sur l'île Saint-Pierre : loin du tumulte, des jugements hypocrites et de la méchanceté sociale des hommes, le promeneur solitaire fait l'expérience d'un bonheur extatique où l'âme se suffit pleinement à elle-même, semblable à Dieu dans sa félicité autonome.",
          analyseIllustration: "Rousseau prouve que la solitude n'est pas un manque, mais le retour salvateur à l'harmonie avec soi-même et la nature."
        },
        {
          statement: "La fréquentation d'autrui expose l'individu à l'hypocrisie, à la jalousie et à la dégradation de son indépendance intellectuelle.",
          author: "Arthur Schopenhauer",
          work: "Aphorismes sur la sagesse dans la vie",
          quote: "Un homme ne peut être véritablement lui-même que tant qu'il est seul ; donc qui n'aime pas la solitude n'aime pas la liberté, car on n'est libre que lorsqu'on est seul.",
          explanation: "Schopenhauer soutient que la sociabilité repose le plus souvent sur la médiocrité, le bavardage et des concessions perpétuelles. Le génie et l'homme d'esprit trouvent en eux-mêmes une source inépuisable de richesses, tandis que le besoin d'autrui n'est que l'aveu d'un vide intérieur.",
          analyseIllustration: "Ce constat montre que l'autarcie intellectuelle est le rempart le plus sûr contre les déceptions et les dépendances affectives."
        },
        {
          statement: "Le sage doit savoir se réserver une arrière-boutique pour préserver sa liberté de penser et sa tranquillité.",
          author: "Michel de Montaigne",
          work: "Essais (Livre I, chapitre 39, « De la solitude »)",
          quote: "Il se faut réserver une arrière-boutique toute nôtre, toute franche, en laquelle nous établissions notre vraie liberté et principale retraite et solitude.",
          explanation: "Montaigne n'invite pas à une fuite sauvage hors du monde, mais à un détachement intérieur : même au milieu de ses proches ou de ses charges publiques, l'homme doit posséder un sanctuaire où il n'est le vassal de personne et où son âme se suffit à elle-même.",
          analyseIllustration: "Montaigne établit que la maîtrise de la solitude intérieure est la condition fondamentale pour ne pas être détruit par les vicissitudes des relations humaines."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la solitude permet d'éviter l'aliénation sociale et de cultiver l'autonomie spirituelle. Toutefois, un bonheur vécu dans l'isolement total ne risque-t-il pas de se muer en égoïsme stérile et d'ignorer la nature fondamentalement relationnelle de l'homme ?",
    axe2: {
      title: "L'homme étant un être social et politique, le bonheur véritable exige le partage, la réciprocité de l'amitié et la reconnaissance d'autrui",
      significance: "la conscience humaine ne peut s'épanouir dans le solipsisme et requiert l'altérité comme miroir et accomplissement éthique",
      overview: "Dire que l'on ne saurait être heureux sans autrui revient à poser l'interdépendance comme la condition de notre humanisation. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'amitié véritable est le plus grand des biens extérieurs, sans lequel nul homme ne voudrait vivre même doté de toutes les richesses.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre VIII)",
          quote: "Sans amis, personne ne choisirait de vivre, eût-il tous les autres biens.",
          explanation: "Aristote démontre que l'homme est par essence un « animal politique » (zoon politikon). L'amitié par excellence (fondée sur la vertu et non sur le seul intérêt ou plaisir) permet à l'homme de contempler le bien chez son semblable, qui devient un autre lui-même (« alter ego »). Le bonheur isolé demeure mutilé et incomplet.",
          analyseIllustration: "Aristote prouve rigoureusement que la félicité humaine est inséparable de la communauté bienveillante et du partage des vertus."
        },
        {
          statement: "La conscience de soi et l'estime de soi ne peuvent advenir sans le regard et la reconnaissance mutuelle d'autrui.",
          author: "G.W.F. Hegel",
          work: "Phénoménologie de l'esprit",
          quote: "La conscience de soi n'est en soi et pour soi que parce qu'elle est en soi et pour soi pour une autre conscience de soi ; c'est-à-dire qu'elle n'est qu'en tant qu'être reconnu.",
          explanation: "Hegel met en évidence l'impossibilité d'une subjectivité solitaire : un individu enfermé en lui-même ne possède qu'une certitude abstraite de son existence. C'est à travers l'épreuve de l'intersubjectivité et la validation par autrui que l'homme prend conscience de sa propre dignité et de sa valeur.",
          analyseIllustration: "Hegel démontre que le bonheur authentique, fondé sur l'estime de soi, exige la médiation d'autrui."
        },
        {
          statement: "Le visage d'autrui et la responsabilité éthique ouvrent le sujet à la générosité et à la transcendance sans lesquelles la joie reste superficielle.",
          author: "Emmanuel Levinas",
          work: "Totalité et Infini",
          quote: "La relation avec autrui me met en question, me vide de moi-même et ne cesse de me vider en me découvrant des ressources toujours nouvelles.",
          explanation: "Levinas enseigne que le repli égoïste sur sa propre satisfaction enferme l'homme dans une jouissance solitaire précaire. C'est en répondant de l'autre et en se consacrant à sa vulnérabilité que le sujet accède à une signification morale qui transcende le simple confort individuel.",
          analyseIllustration: "Cette éthique de l'altérité montre que le bonheur ne consiste pas à s'isoler d'autrui, mais à s'élever par le souci de l'autre."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est apparu que la solitude choisie et la maîtrise de soi constituent un bouclier précieux contre les hypocrisies et les dépendances aliénantes du monde social.",
      reponseDefinitive: "Toutefois, nous affirmons qu'un bonheur entièrement dépourvu d'autrui demeure une illusion ou une mutilation : l'être humain n'accomplit sa pleine stature que dans la réciprocité de l'amitié, de l'amour et de la solidarité collective.",
      elargissement: "En ce qui nous concerne, nous dirons que le véritable art de vivre ne réside ni dans la dépendance servile ni dans le rejet misanthrope, mais dans la capacité à cultiver une paix intérieure capable d'enrichir le lien avec autrui."
    }
  },

  // --------------------------------------------------------------------------
  // 3. LE BONHEUR EST-IL UN DEVOIR ? / BONHEUR & MORALE
  // --------------------------------------------------------------------------
  {
    id: "bonheur-devoir-morale",
    label: "Bonheur & Devoir (Eudémonisme vs Impératif Déontologique)",
    triggerRegex: /(?:bonheur).*(?:devoir|moral|obligatoire|faut-il\s+renoncer)|(?:devoir|moral|obligatoire|faut-il\s+renoncer).*(?:bonheur)/i,
    concept1: "Bonheur",
    concept2: "Devoir",
    lexiqueDefinitions: [
      {
        terme: "Bonheur",
        definition: "Aspiration universelle à la satisfaction totale et durable de l'ensemble de nos désirs et besoins."
      },
      {
        terme: "Devoir moral",
        definition: "Obligation inconditionnelle dictée par la raison pratique, qui s'impose à la volonté indépendamment de tout intérêt personnel."
      },
      {
        terme: "Eudémonisme",
        definition: "Doctrine philosophique affirmant que le souverain bien et la fin ultime de la vie morale est le bonheur."
      }
    ],
    reformulationPattern: "Il s'agit de savoir si la recherche du bonheur peut être érigée en obligation morale impérative, ou si l'exigence du devoir transcende la satisfaction personnelle jusqu'à pouvoir exiger le renoncement au bonheur terrestre.",
    tensionPhilosophique: "Chacun désire spontanément être heureux, rendant absurde l'idée d'un « commandement » à faire ce que la nature nous incline déjà à vouloir ; pourtant, le devoir moral s'oppose souvent à nos penchants hédonistes immédiats.",
    problemeCourt: "L'exigence du devoir a-t-elle pour fin suprême le bonheur de l'homme ?",
    aspect1: "dans quelle mesure le bonheur est-il conciliable avec le devoir moral ?",
    aspect2: "toutefois, le devoir moral n'exige-t-il pas le sacrifice du bonheur ?",
    axe1: {
      title: "L'accomplissement moral et le bonheur authentique sont inséparables, la vertu étant la condition et le couronnement de la félicité",
      significance: "l'ordre moral n'est pas conçu pour punir l'homme mais pour lui permettre de réaliser sa perfection rationnelle",
      overview: "Affirmer la convergence du devoir et du bonheur revient à inscrire la morale dans la tradition eudémoniste de l'excellence humaine. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La vie vertueuse conforme à la droite raison constitue l'activité propre de l'homme qui produit la véritable félicité.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre I & X)",
          quote: "Le souverain bien pour l'homme est l'activité de l'âme selon la vertu.",
          explanation: "Pour Aristote, il n'y a nulle contradiction entre morale et bonheur. Le devoir ne s'oppose pas au désir, il l'éduque. En réalisant sa nature d'être rationnel par la vertu morale (prudence, courage, justice), l'homme atteint l'eudaimonia, c'est-à-dire le bonheur le plus haut et le plus stable.",
          analyseIllustration: "Aristote montre que le devoir n'est pas un sacrifice tyrannique mais la voie naturelle de l'accomplissement humain."
        },
        {
          statement: "La recherche du bonheur pour le plus grand nombre est le critère objectif et moral de la justice et de l'utilité.",
          author: "John Stuart Mill",
          work: "L'Utilitarisme",
          quote: "Les actions sont bonnes dans la mesure où elles tendent à promouvoir le bonheur, mauvaises dans la mesure où elles tendent à produire le contraire du bonheur.",
          explanation: "Mill soutient que la morale ne saurait être une ascèse stérile : le devoir suprême de chaque individu et du législateur est d'optimiser le bien-être collectif et de réduire la souffrance dans le monde. Le devoir de faire le bien coïncide rigoureusement avec la promotion du bonheur.",
          analyseIllustration: "Cette doctrine utilitariste établit que le devoir moral a pour finalité concrète et mesurable le bonheur des hommes."
        },
        {
          statement: "Être heureux est un devoir indirect, car l'accablement et la tristesse affaiblissent notre capacité à accomplir nos devoirs moraux.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs (Première section)",
          quote: "Assurer son propre bonheur est un devoir (au moins indirect), car le mécontentement de son état... pourrait facilement devenir une grande tentation de transgresser ses devoirs.",
          explanation: "Bien que Kant sépare la morale du désir de bonheur, il admet que l'homme rongé par la détresse, la misère et l'angoisse cède beaucoup plus aisément à l'égoïsme et au crime. Veiller raisonnablement à sa propre sérénité est donc une condition favorable pour conserver la force d'agir par pur devoir.",
          analyseIllustration: "Kant reconnaît ainsi la valeur instrumentale du bonheur au service de la rectitude morale."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la vertu morale vise harmonieusement la félicité de l'individu et de la cité. Toutefois, la voix sacrée du devoir moral ne commande-t-elle pas parfois le sacrifice inconditionnel de nos intérêts et de notre confort personnel ?",
    axe2: {
      title: "Le devoir moral s'impose de façon catégorique et désintéressée, exigeant de se rendre digne du bonheur plutôt que de rechercher la satisfaction immédiate",
      significance: "la valeur morale d'une action réside dans l'obéissance au devoir pour le devoir, indépendamment de toute récompense terrestre",
      overview: "Dire que le devoir transcende le bonheur revient à poser la dignité de la loi morale au-dessus des penchants empiriques. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'impératif catégorique commande inconditionnellement, sans égard pour le bonheur personnel ou les conséquences sensibles.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pratique & Fondements de la métaphysique des mœurs",
          quote: "Agis de telle sorte que la maxime de ta volonté puisse toujours valoir en même temps comme principe d'une législation universelle.",
          explanation: "Kant démontre que si l'action morale était motivée par la quête du bonheur, elle perdrait toute valeur morale pour n'être qu'un calcul d'intérêt égoïste. La morale ne promet pas d'être heureux, elle exige d'être pur et de « se rendre digne du bonheur ». L'homme moral doit être capable de dire la vérité ou de sauver autrui même au péril de sa vie.",
          analyseIllustration: "Kant dissocie radicalement la sainteté du devoir moral de l'hédonisme psychologique."
        },
        {
          statement: "La voix de la conscience morale s'oppose souvent aux désirs égoïstes du corps et refuse de transiger avec l'injustice.",
          author: "Platon",
          work: "Gorgias (Dialogue de Socrate avec Calliclès et Polos)",
          quote: "Mieux vaut subir l'injustice que la commettre.",
          explanation: "Face à Calliclès qui affirme que le bonheur consiste à déchaîner toutes ses passions par la puissance et l'injustice impunie, Socrate réplique que le tyran criminel est le plus malheureux des hommes, car son âme est déchirée par le vice. Le devoir de justice prévaut absolument sur les jouissances matérielles.",
          analyseIllustration: "Platon prouve que l'intégrité de la conscience morale est un impératif supérieur aux tentations du succès mondain."
        },
        {
          statement: "Le sens du tragique et de la responsabilité humaine exige parfois de risquer son existence pour défendre la dignité d'autrui.",
          author: "Albert Camus",
          work: "L'Homme révolté & Lettres à un ami allemand",
          quote: "Je refuse de croire que la fin justifie les moyens... La grandeur de l'homme est dans sa décision d'être plus fort que sa condition.",
          explanation: "Face aux totalitarismes et aux violences de l'histoire, la morale de la révolte ne promet aucun paradis ni aucun bonheur garanti. L'engagement pour la justice s'impose parce que l'humanité ne peut tolérer la dégradation de l'innocent, dût-on y perdre sa quiétude.",
          analyseIllustration: "Camus démontre avec force que l'honneur du devoir refuse de se laisser acheter par le confort d'un bonheur complice."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il est indéniable que la recherche de la félicité est l'aspiration la plus universelle et que la vertu favorise l'équilibre authentique de l'âme.",
      reponseDefinitive: "Toutefois, nous affirmons que le bonheur ne saurait être érigé en devoir moral absolu : la loi morale s'impose par sa pureté propre, exigeant d'abord que nous méritions l'estime de nous-mêmes avant de prétendre à la satisfaction.",
      elargissement: "En ce qui nous concerne, nous dirons que le souverain bien réside dans l'espérance rationnelle que la fidélité au devoir moral finira par réconcilier l'homme avec la paix de son cœur et la dignité de son existence."
    }
  },

  // --------------------------------------------------------------------------
  // 4. LE BONHEUR EST-IL UN MYTHE ? / UNE ILLUSION ?
  // --------------------------------------------------------------------------
  {
    id: "bonheur-mythe-illusion",
    label: "Bonheur & Illusion (Le bonheur est-il un mythe ou une réalité accessible ?)",
    triggerRegex: /(?:bonheur).*(?:mythe|illusion|chim[èe]re|inaccessible)|(?:mythe|illusion|chim[èe]re|inaccessible).*(?:bonheur)/i,
    concept1: "Bonheur",
    concept2: "Illusion",
    lexiqueDefinitions: [
      {
        terme: "Bonheur",
        definition: "État durable et complet de satisfaction, plénitude où tous les désirs de l'homme seraient apaisés."
      },
      {
        terme: "Mythe / Illusion",
        definition: "Croyance imaginaire séduisante, idéal inaccessible pris à tort pour une réalité réalisable."
      },
      {
        terme: "Finitude humaine",
        definition: "Condition bornée de l'être humain, soumis au temps, au désir perpétuel et au manque."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si le bonheur absolu et permanent ne constitue qu'un idéal chimérique forgé par l'imagination pour fuir la souffrance, ou s'il représente un état réel que la sagesse permet effectivement d'atteindre.",
    tensionPhilosophique: "L'aspiration au bonheur est inscrite dans toute action humaine ; pourtant, l'insatisfaction renaissante et la fuite du temps semblent interdire toute félicité inaltérable.",
    problemeCourt: "Le bonheur est-il une vaine illusion ?",
    aspect1: "dans quelle mesure le bonheur absolu apparaît-il comme un idéal chimérique et inaccessible à la finitude humaine ?",
    aspect2: "toutefois, l'homme ne peut-il pas atteindre un bonheur réel et durable par la mesure et la sagesse philosophique ?",
    axe1: {
      title: "Le bonheur conçu comme satisfaction totale et définitive de tous les désirs est une fiction impossible engendrée par l'imagination",
      significance: "la structure même de la conscience temporelle et du désir condamne l'homme à l'incomplétude permanente",
      overview: "Affirmer que le bonheur est un mythe revient à dévoiler l'illusion psychologique et métaphysique qui sous-tend ce concept. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Le bonheur est un idéal non de la raison, mais de l'imagination, incapable de fournir un concept déterminé applicable au réel.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Le concept du bonheur est un concept si indéterminé que, malgré le désir qu'a tout homme d'arriver à être heureux, personne ne peut jamais dire en termes précis et cohérents ce qu'il désire véritablement et ce qu'il veut.",
          explanation: "Kant démontre que pour être pleinement heureux, l'homme devrait être omniscient : s'il souhaite la richesse, il attire les soucis ; s'il veut le savoir, il découvre son ignorance ; s'il veut une longue vie, il subit la déchéance physique. Le bonheur total exige un infini qu'un être fini ne peut ni concevoir ni réaliser.",
          analyseIllustration: "Kant démontre que le bonheur parfait relève du fantasme et non d'une règle pratique réalisable."
        },
        {
          statement: "Le désir étant par essence un manque douloureux, sa satisfaction n'est jamais que la cessation passagère d'une souffrance.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "Tout bonheur n'est que négatif et non positif, c'est-à-dire qu'il consiste simplement dans l'affranchissement d'une douleur ou d'un besoin.",
          explanation: "Schopenhauer compare le bonheur au mirage du désert : tant que nous désirons, nous souffrons ; dès que nous obtenons l'objet, l'ennui nous accable ou un nouveau désir surgit. Croire à un bonheur permanent et positif est l'illusion suprême par laquelle le Vouloir-vivre piège les individus.",
          analyseIllustration: "Cette vision dénonce le bonheur comme une fable qui masque la tragique oscillation de l'existence."
        },
        {
          statement: "L'homme fuit le vide de sa condition dans le divertissement perpétuel, incapable de trouver le repos dans le présent.",
          author: "Blaise Pascal",
          work: "Pensées (Lafuma 136 / Brunschvicg 139)",
          quote: "Nous ne vivons jamais, mais nous espérons de vivre ; et, nous disposant toujours à être heureux, il est inévitable que nous ne le soyons jamais.",
          explanation: "Pascal observe que l'homme ne peut supporter de demeurer seul dans une chambre sans être confronté à son néant, à sa mortalité et à son impuissance. Il s'étourdit dans le jeu, la guerre ou les affaires. Le bonheur terrestre promis n'est qu'un leurre pour ne pas regarder sa misère sans Dieu.",
          analyseIllustration: "Pascal prouve que l'attente perpétuelle d'un bonheur futur empêche à jamais de goûter à la plénitude du présent."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que le bonheur parfait et absolu relève d'une illusion métaphysique. Toutefois, le rejet d'un idéal démesuré condamne-t-il l'homme au désespoir, ou la sagesse ne permet-elle pas de construire un bonheur modeste, réel et éprouvé ?",
    axe2: {
      title: "Dégagé des chimères d'une perfection absolue, un bonheur lucide, terrestre et durable demeure accessible par la maîtrise de soi et la gratitude",
      significance: "le bonheur réel ne réside pas dans l'absence de toute limite mais dans l'accord harmonieux de l'homme avec la réalité",
      overview: "Dire que le bonheur n'est pas un mythe revient à redéfinir la félicité à l'échelle de la condition humaine. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La philosophie est une médecine de l'âme capable de délivrer l'homme des peurs imaginaires pour goûter à l'ataraxie présente.",
          author: "Épicure",
          work: "Lettre à Ménécée & Sentences vaticanes",
          quote: "Il n'y a rien de redoutable dans le fait de vivre pour qui a vraiment compris qu'il n'y a rien de redoutable dans le fait de ne pas vivre.",
          explanation: "Le quadruple remède épicurien (tétrapharmakos) guérit l'homme des fausses angoisses (les dieux, la mort, la douleur) et lui apprend à se contenter des plaisirs simples et naturels. L'homme délivré du superflu découvre que le bonheur n'est nullement un mythe, mais une réalité quotidienne facile à conserver.",
          analyseIllustration: "Épicure prouve que le bonheur devient possible dès lors qu'on le libère de la démesure et des fictions sociales."
        },
        {
          statement: "L'ataraxie stoïcienne et la citadelle intérieure confèrent une souveraineté sereine que nulle tempête ne peut entamer.",
          author: "Marc Aurèle",
          work: "Pensées pour moi-même",
          quote: "Sois semblable au promontoire contre lequel les flots se brisent sans cesse ; lui reste debout, et autour de lui s'endort la fureur de l'eau.",
          explanation: "L'empereur philosophe enseigne que l'âme peut se retirer en elle-même à tout instant. En acceptant le cours nécessaire de l'univers et en concentrant son énergie sur l'honnêteté de ses intentions, l'homme expérimente un contentement de soi inébranlable.",
          analyseIllustration: "Marc Aurèle démontre que le bonheur n'est pas un mythe abstrait, mais une pratique rigoureuse de paix intérieure."
        },
        {
          statement: "La joie supérieure naît de l'affirmation tragique de la vie et de l'amour du destin (Amor fati).",
          author: "Friedrich Nietzsche",
          work: "Le Crépuscule des idoles & Le Gai Savoir",
          quote: "Ma formule pour la grandeur de l'homme est amor fati : ne rien vouloir d'autre, ni dans le passé, ni dans l'avenir, ni dans tous les siècles des siècles.",
          explanation: "Rejetant le bonheur petit-bourgeois du confort paresseux, Nietzsche enseigne la grande santé : aimer la vie avec ses douleurs et ses élans créateurs, sans regret ni ressentiment. Ce bonheur de l'affirmation héroïque du réel pulvérise l'illusion idéaliste pour s'incarner dans l'intensité de l'instant.",
          analyseIllustration: "Nietzsche montre que le véritable bonheur s'éprouve dans la force vitale capable d'embrasser l'existence entière."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il est indéniable que le bonheur absolu et immobile promis par les fictions de l'imagination relève d'une vaine chimère inaccessible à l'homme.",
      reponseDefinitive: "Toutefois, nous affirmons que le bonheur n'est pas pour autant un mythe néant : dépouillé de sa perfection imaginaire, il s'éprouve authentiquement comme une joie lucide, une conquête éthique et une harmonie avec soi-même.",
      elargissement: "En ce qui nous concerne, nous dirons que la maturité philosophique consiste à renoncer au mythe du paradis perdu pour habiter avec dignité, gratitude et courage la beauté imparfaite du présent."
    }
  },

  // --------------------------------------------------------------------------
  // 5. LE DÉSIR EST-IL PAR NATURE INSATIABLE ?
  // --------------------------------------------------------------------------
  {
    id: "desir-insatiabilite-bonheur",
    label: "Désir & Insatiabilité (Manque douloureux vs Puissance d'exister)",
    triggerRegex: /(?:desir).*(?:insatiable|sans\s+fin|illimit|souffrance|tonneau|apaiser)|(?:insatiable|sans\s+fin|illimit|souffrance|tonneau|apaiser).*(?:desir)/i,
    concept1: "Désir",
    concept2: "Insatiabilité",
    lexiqueDefinitions: [
      {
        terme: "Désir",
        definition: "Tendance consciente vers un objet connu ou imaginé, éprouvée comme une aspiration à combler un manque ou à accroître sa puissance."
      },
      {
        terme: "Insatiabilité",
        definition: "Propriété de ce qui ne peut jamais être rassasié ou définitivement apaisé, se renouvelant sans cesse."
      },
      {
        terme: "Conatus",
        definition: "Effort vital par lequel chaque être persévère dans son être et affirme sa puissance de vivre et d'agir."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si le désir condamne nécessairement l'homme à une souffrance perpétuelle en raison de son incomplétude intrinsèque, ou s'il constitue la dynamique vitale et créatrice par laquelle le sujet s'accomplit.",
    tensionPhilosophique: "Chaque désir comblé renaît presque aussitôt, enfermant l'homme dans une quête stérile ; pourtant, sans désir, l'existence humaine s'éteindrait dans l'inertie et la mort.",
    problemeCourt: "Le désir condamne-t-il l'homme à une insatisfaction permanente ?",
    aspect1: "dans quelle mesure le désir engendre-t-il une insatisfaction permanente ?",
    aspect2: "toutefois, le désir n'est-il pas la puissance motrice de l'existence ?",
    axe1: {
      title: "Le désir est structurellement marqué par le manque, la démesure et l'impossibilité d'atteindre un apaisement définitif",
      significance: "l'infinité du désir confronte la finitude corporelle à une soif inaltérable qui engendre la souffrance",
      overview: "Affirmer l'insatiabilité du désir revient à dévoiler sa racine de manque et son mécanisme d'éternel recommencement. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Le mythe du tonneau des Danaïdes illustre l'impasse d'une vie soumise à la tyrannie de désirs incessants.",
          author: "Platon",
          work: "Gorgias (493a-494a)",
          quote: "La partie de l'âme où résident les désirs est comme un tonneau percé, et ceux qui passent leur vie à les assouvir sont condamnés à verser sans cesse de l'eau avec un crible.",
          explanation: "Socrate réfute la thèse de Calliclès selon laquelle il faudrait laisser croître en soi les plus grands désirs : une telle existence n'est pas libre, elle est celle d'un esclave perpétuellement tenaillé par la faim et la soif. Le désir sans frein n'enrichit pas l'homme, il le condamne au supplice de la privation continue.",
          analyseIllustration: "Platon montre avec éclat que l'insatiabilité du désir transforme l'homme en prisonnier de ses propres appétits."
        },
        {
          statement: "L'oscillation mécanique entre le manque douloureux et l'ennui désabusé résume le malheur universel du désir.",
          author: "Arthur Schopenhauer",
          work: "Le Monde comme volonté et comme représentation",
          quote: "Tout vouloir procède d'un besoin, d'un manque, donc d'une souffrance. La satisfaction y met fin ; mais pour un désir satisfait, il en reste au moins dix d'insatisfaits.",
          explanation: "Schopenhauer analyse le désir comme la manifestation d'une force aveugle et universelle qui transcende l'individu. L'assouvissement n'apporte qu'un répit éphémère avant que ne surgisse le vide de l'ennui, qui force à désirer de nouveau. L'insatiabilité est l'essence même de notre condition.",
          analyseIllustration: "Cette métaphysique pessimiste établit que le désir est la source structurelle de la douleur existentielle."
        },
        {
          statement: "Le désir humain n'est pas un besoin naturel borné, mais un désir mimétique infini né de la rivalité avec autrui.",
          author: "René Girard",
          work: "Mensonge romantique et vérité romanesque",
          quote: "L'homme désire toujours selon le désir de l'autre ; tout désir est mimétique.",
          explanation: "Girard montre que le désir humain ne porte pas sur la valeur intrinsèque de l'objet, mais sur ce qu'autrui semble valoriser. Cette dynamique triangulaire engendre une surenchère infinie, des rivalités jalouses et une frustration permanente, puisque le modèle devient un obstacle infranchissable.",
          analyseIllustration: "Girard dévoile que la nature sociale du désir l'empêche à jamais de trouver un terme naturel."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que le désir non maîtrisé plonge l'homme dans un cycle infernal de manque et de frustration. Toutefois, le désir se réduit-il à une infirmité passive, ou ne représente-t-il pas l'énergie créatrice fondamentale de la subjectivité ?",
    axe2: {
      title: "Loin d'être un manque stérile, le désir est l'affirmation joyeuse de la puissance d'agir et le principe même de l'accomplissement humain",
      significance: "le désir arrache le sujet à l'inertie pour inventer la culture, l'amour et la transformation du monde",
      overview: "Dire que le désir est la vie même revient à dépasser la morale de la privation pour célébrer la dynamique de l'existence. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Le désir est l'essence même de l'homme en tant qu'effort constant pour accroître sa puissance d'exister.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre III, Définition des affects)",
          quote: "Le désir est l'essence même de l'homme en tant qu'elle est conçue comme déterminée à faire quelque chose par une affection quelconque d'elle-même.",
          explanation: "Spinoza renverse la conception platonicienne du manque : ce n'est pas parce qu'une chose est bonne que nous la désirons, mais c'est parce que nous la désirons que nous la jugeons bonne. Le conatus est une force d'affirmation joyeuse qui pousse l'homme à développer son corps et son esprit.",
          analyseIllustration: "Spinoza libère le désir de la culpabilité pour en faire le moteur de la liberté et de la joie active."
        },
        {
          statement: "L'amour et le désir philosophique élèvent l'âme de la beauté sensible vers la contemplation des vérités éternelles.",
          author: "Platon",
          work: "Le Banquet (Discours de Diotime)",
          quote: "Éros est le fils de Poros (l'Expédient) et de Pénia (la Pauvreté) ; il n'est ni tout à fait mortel ni tout à fait immortel, mais philosophe tout au long de sa vie.",
          explanation: "Dans le Banquet, Platon révèle la face lumineuse du désir : si Éros est pauvre par sa mère, il est ingénieux et vaillant par son père. Le désir amoureux s'élève d'un beau corps à tous les beaux corps, puis aux belles actions, aux belles sciences, pour atteindre enfin la Beauté absolue en soi. Le désir est le médiateur divin qui arrache l'homme à la terre.",
          analyseIllustration: "Platon montre que le désir sublime l'existence et nourrit la soif immortelle de savoir et de beauté."
        },
        {
          statement: "Le désir de reconnaissance est la matrice de l'histoire humaine et de l'émancipation de la conscience de soi.",
          author: "G.W.F. Hegel",
          work: "Phénoménologie de l'esprit (Dialectique du maître et de l'esclave)",
          quote: "Le désir humain est fondamentalement désir du désir d'autrui, désir d'être reconnu comme valeur absolue.",
          explanation: "Tandis que l'animal désire des objets naturels pour les consommer, l'homme désire qu'une autre liberté reconnaisse sa propre liberté. Ce désir spirituel de reconnaissance engendre la lutte pour l'honneur, le travail transformateur et l'avènement du droit et des institutions politiques.",
          analyseIllustration: "Hegel établit que sans l'audace du désir, l'humanité ne serait jamais sortie de l'animalité silencieuse."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît indéniable que le désir aveugle et abandonné à la frénésie de la consommation condamne l'homme à une quête insatiable et angoissée.",
      reponseDefinitive: "Toutefois, nous affirmons qu'il serait absurde de vouloir éteindre le désir : il constitue la sève même de la liberté, l'aiguillon de la pensée et l'énergie créatrice de toute œuvre humaine.",
      elargissement: "En ce qui nous concerne, nous dirons que la sagesse ne réside pas dans la mutilation ascétique du désir, mais dans son éducation patiente et sa sublimation au service de l'amour, de l'art et de la justice."
    }
  }
];
