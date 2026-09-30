import { PhiloRelationEntry } from "../philoRelationsDatabase";

/**
 * RELATIONS PHILOSOPHIQUES : POLITIQUE, DROIT, JUSTICE & LIBERTÉ
 */
export const PHILO_RELATIONS_POLITIQUE_DROIT: PhiloRelationEntry[] = [
  // --------------------------------------------------------------------------
  // 1. OBÉIR & LIBERTÉ (Obéir, est-ce renoncer à sa liberté ?)
  // --------------------------------------------------------------------------
  {
    id: "obeir-liberte-loi",
    label: "Obéissance & Liberté (Servitude apparente vs Autonomie civique)",
    triggerRegex: /(?:ob[ée]ir|ob[ée]issance).*(?:renoncer.*libert|opposer.*libert|contraire.*libert|incompatible|esclav)|(?:renoncer.*libert|opposer.*libert|contraire.*libert|incompatible|esclav).*(?:ob[ée]ir|ob[ée]issance)/i,
    concept1: "Obéissance",
    concept2: "Liberté",
    lexiqueDefinitions: [
      {
        terme: "Obéir",
        definition: "Se soumettre à une règle, à un ordre ou à une autorité extérieure ou rationnelle en conformant sa conduite à ses prescriptions."
      },
      {
        terme: "Renoncer à sa liberté",
        definition: "Aliéner son pouvoir souverain d'autodétermination et abdiquer sa dignité d'être moral et conscient."
      },
      {
        terme: "Autonomie",
        definition: "Faculté de se donner à soi-même sa propre loi (autos-nomos), par opposition à l'hétéronomie subie."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si l'acte d'obéissance constitue inévitablement une capitulation de la volonté souveraine au profit d'un maître, ou si l'obéissance à des lois justes et légitimes représente le fondement véritable de la liberté civile.",
    tensionPhilosophique: "Obéir implique la subordination de nos désirs particuliers à une volonté extérieure ; pourtant, sans le respect consenti d'une règle commune, la liberté dégénère en loi du plus fort où nul n'est en sécurité.",
    problemeCourt: "L'obéissance détruit-elle nécessairement la liberté ?",
    aspect1: "dans quelle mesure obéir semble-t-il équivaloir à une servitude ?",
    aspect2: "toutefois, l'obéissance à la loi n'est-elle pas la condition de la liberté ?",
    axe1: {
      title: "L'obéissance passive et aveugle à une autorité extérieure constitue une dépossession de la volonté et le terreau de la servitude",
      significance: "la soumission non critiquée abdique la dignité humaine en remettant son jugement entre les mains d'un tiers",
      overview: "Affirmer qu'obéir revient à renoncer à sa liberté revient à dénoncer le mécanisme psychologique et politique de l'asservissement. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La servitude volontaire dévoile que les hommes cèdent leur liberté par habitude, lâcheté et fascination pour le maître.",
          author: "Étienne de La Boétie",
          work: "Discours de la servitude volontaire",
          quote: "Soyez résolus de ne servir plus, et vous voilà libres.",
          explanation: "La Boétie s'étonne qu'un peuple entier puisse obéir à un seul tyran qui ne possède que la puissance que le peuple lui concède. L'obéissance n'est pas toujours imposée par les armes : elle résulte souvent d'une démission morale où les hommes préfèrent la tranquillité servile aux exigences courageuses de la liberté.",
          analyseIllustration: "La Boétie prouve que l'obéissance coutumière détruit la dignité de la liberté dès lors qu'elle devient une habitude docile."
        },
        {
          statement: "Renoncer à sa liberté naturelle par un pacte de soumission aveugle est un acte nul, immoral et contradictoire.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social (Livre I, chapitre 4, « De l'esclavage »)",
          quote: "Renoncer à sa liberté, c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs. Il n'y a nulle compensation possible pour quiconque renonce à tout.",
          explanation: "Rousseau réfute la thèse absolutiste de Hobbes ou Grotius selon laquelle un peuple pourrait vendre sa souveraineté à un monarque pour assurer sa sécurité. Un tel contrat est absurde : ôter toute liberté à sa volonté, c'est ôter toute moralité à ses actions. Obéir à un maître absolu n'est pas un acte politique légitime, c'est une déchéance d'humanité.",
          analyseIllustration: "Rousseau établit qu'aucune autorité humaine ne possède le droit d'exiger une obéissance qui anéantirait la liberté."
        },
        {
          statement: "L'obéissance mécanique à des ordres hiérarchiques peut anesthésier la conscience morale et conduire à la banalité du mal.",
          author: "Hannah Arendt",
          work: "Eichmann à Jérusalem : Rapport sur la banalité du mal",
          quote: "Dans un système totalitaire, l'obéissance et le soutien sont une seule et même chose.",
          explanation: "Analysant le procès du criminel nazi Eichmann, Arendt montre que le pire des crimes n'a pas été commis par des monstres sadiques, mais par de zélés fonctionnaires incapables de penser par eux-mêmes, retranchés derrière le devoir d'obéissance passive aux ordres de l'État.",
          analyseIllustration: "Arendt démontre de manière tragique que renoncer à son jugement critique au nom de l'obéissance aveugle anéantit le sujet moral."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la soumission aveugle à un despote ou à des ordres injustes anéantit la liberté du sujet. Toutefois, refuser toute règle commune ne conduit-il pas au chaos de la guerre civile où le faible est écrasé par le fort ?",
    axe2: {
      title: "L'obéissance à la loi légitime et universelle, que le citoyen a lui-même contribué à édifier, est la seule garantie de la liberté véritable",
      significance: "la liberté authentique n'est pas la licence débridée de l'arbitraire mais l'autonomie sous l'égide du droit",
      overview: "Dire qu'obéir à la loi libère revient à distinguer l'hétéronomie de la soumission et l'autonomie républicaine. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'obéissance à la loi que le peuple s'est prescrite constitue la définition même de la liberté civile et morale.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social (Livre I, chapitre 8)",
          quote: "L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté.",
          explanation: "Dans la république fondée sur la volonté générale, le citoyen n'obéit à aucun individu particulier mais à la loi impersonnelle. Puisqu'il participe à la souveraineté en tant que législateur, en obéissant à la loi, il n'obéit qu'à sa propre raison universelle. L'obéissance civile dépasse les pulsions égoïstes pour faire advenir la liberté morale.",
          analyseIllustration: "Rousseau réconcilie magistralement l'ordre légal et l'affranchissement humain en fondant la liberté sur l'autonomie."
        },
        {
          statement: "Là où les lois ne règnent pas souverainement, il n'existe aucune liberté pour personne.",
          author: "John Locke",
          work: "Traité du gouvernement civil (chapitre 6)",
          quote: "La fin de la loi n'est pas d'abolir ou de restreindre la liberté, mais de la préserver et de l'élargir... car la liberté consiste à n'être exposé à aucune contrainte ni violence de la part d'autrui, ce qui ne saurait être où il n'y a point de lois.",
          explanation: "Locke montre que sans lois instituées et sanctionnées par un magistrat impartial, la liberté naturelle n'est qu'une illusion précaire exposée aux agressions continuelles des méchants. Obéir à des lois équitables protège les droits fondamentaux de chacun.",
          analyseIllustration: "Locke démontre que le cadre contraignant de la loi est la condition protectrice indispensable sans laquelle la liberté s'effondre."
        },
        {
          statement: "L'obéissance au devoir moral émane de l'impératif catégorique forgé par la raison pure pratique du sujet.",
          author: "Emmanuel Kant",
          work: "Métaphysique des mœurs",
          quote: "L'homme ne peut être soumis à aucune autre législation qu'à celle qu'il se donne à lui-même, et qui est pourtant universelle.",
          explanation: "Pour Kant, obéir à ses inclinations biologiques est une servitude (hétéronomie), tandis qu'obéir au devoir moral est la plus haute manifestation de la liberté transcendantale. Le sujet s'arrache à la causalité naturelle en décidant souverainement de faire le bien par respect pour la loi morale.",
          analyseIllustration: "Kant prouve que l'obéissance spirituelle à la raison constitue le sommet de l'autonomie humaine."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît clairement que l'obéissance passive à un maître ou à des décrets arbitraires constitue une aliénation inadmissible de la conscience humaine.",
      reponseDefinitive: "Toutefois, nous affirmons qu'obéir à des lois rationnelles et équitables, fondées sur le bien commun, ne détruit nullement la liberté mais lui confère sa réalité effective et protectrice.",
      elargissement: "En ce qui nous concerne, nous dirons que la maturité démocratique exige de distinguer toujours la servilité qui abdique la pensée de l'obéissance civique qui fortifie la République."
    }
  },

  // --------------------------------------------------------------------------
  // 2. LA LOI EST-ELLE TOUJOURS JUSTE ? / JUSTICE & DÉSOBÉISSANCE
  // --------------------------------------------------------------------------
  {
    id: "justice-loi-injustice",
    label: "Justice & Loi (Légalité positive vs Légitimité morale)",
    triggerRegex: /(?:loi).*(?:toujours\s+juste|injuste|d[ée]sob[ée]issance|d[ée]sob[ée]ir)|(?:toujours\s+juste|injuste|d[ée]sob[ée]issance|d[ée]sob[ée]ir).*(?:loi)/i,
    concept1: "Loi",
    concept2: "Justice",
    lexiqueDefinitions: [
      {
        terme: "Légalité (Droit positif)",
        definition: "Ensemble des lois écrites, promulguées et en vigueur dans un État donné à une époque déterminée."
      },
      {
        terme: "Légitimité (Droit naturel)",
        definition: "Conformité de la règle à un idéal moral universel de justice, de respect de la dignité et d'équité."
      },
      {
        terme: "Désobéissance civile",
        definition: "Refus public, collectif et non violent de se conformer à une loi jugée intolérablement injuste, dans le but d'éveiller la conscience civique."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si le fait d'être votée et promulguée par l'autorité légale garantit la rectitude morale d'une loi, ou si la justice constitue un idéal transcendant permettant de juger et, le cas échéant, de contester la loi positive.",
    tensionPhilosophique: "L'ordre social impose le respect scrupuleux des lois pour éviter l'anarchie ; pourtant, l'histoire a montré que des régimes ont pu édicter des lois tyranniques et criminelles au nom de la stricte légalité.",
    problemeCourt: "La légalité suffit-elle à définir la justice ?",
    aspect1: "dans quelle mesure la loi promulguée fixe-t-elle l'unique norme objective du juste au sein de la communauté ?",
    aspect2: "toutefois, n'existe-t-il pas des lois positives manifestement injustes qui heurtent la conscience morale universelle ?",
    axe1: {
      title: "La loi positive est l'institution souveraine qui définit publiquement le juste et préserve la paix contre l'arbitraire des opinions subjectives",
      significance: "sans critères légaux établis par l'autorité étatique, le juste demeure indécidable et abandonné à la force",
      overview: "Affirmer que la loi fait le juste revient à adopter la position du positivisme juridique garant de la concorde civile. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "C'est l'autorité souveraine de l'État, et non une prétendue vérité métaphysique, qui fait la loi et institue le juste.",
          author: "Thomas Hobbes",
          work: "Léviathan (chapitre 26)",
          quote: "L'autorité, et non la vérité, fait la loi (Auctoritas non veritas facit legem).",
          explanation: "Hobbes démontre qu'à l'état de nature, chacun a droit à tout et définit le bien selon son appétit personnel, ce qui conduit à la guerre perpétuelle. Ce n'est qu'avec la loi civile instituée par le souverain qu'apparaissent les notions objectives de propriété, de licite et d'injuste. Avant la loi, rien n'est juste ni injuste.",
          analyseIllustration: "Hobbes établit que la loi est le critère juridique exclusif sans lequel aucune société ordonnée ne peut subsister."
        },
        {
          statement: "La justice humaine est relative aux frontières et aux coutumes des peuples, faute d'une justice naturelle universelle observable.",
          author: "Blaise Pascal",
          work: "Pensées (Lafuma 60 / Brunschvicg 294)",
          quote: "Plaisante justice qu'une rivière borne ! Vérité au-deçà des Pyrénées, erreur au-delà.",
          explanation: "Pascal souligne la versatilité des mœurs : ce qui est crime à Paris est vertu ailleurs. Faute de pouvoir fortifier la justice pour que chacun s'y soumette, les hommes ont justement justifié la force en la nommant loi, afin que la paix civile, souverain bien terrestre, ne soit pas troublée par des rébellions continuelles.",
          analyseIllustration: "Pascal montre que la certitude de la paix par le respect de la loi en vigueur l'emporte sur l'incertitude des théories idéales de la justice."
        },
        {
          statement: "Le respect des lois de la cité doit prévaloir même lorsqu'on en subit une condamnation inique, pour ne pas détruire le corps social.",
          author: "Platon",
          work: "Criton (Dialogue de Socrate avec Criton)",
          quote: "Penses-tu qu'une cité puisse subsister et ne pas être renversée, où les jugements rendus sont sans force et brisés par des particuliers ?",
          explanation: "Dans le Criton, Socrate refuse de s'évader de prison malgré l'injustice de sa condamnation à mort par les juges athéniens. Il personnifie les Lois de la Cité qui lui rappellent qu'un citoyen ne saurait détruire le pacte politique dès lors qu'un verdict lui déplaît : la désobéissance individuelle sape le fondement de la république.",
          analyseIllustration: "Platon met en lumière le devoir sacré de loyauté envers la légalité instituée au prix même du sacrifice personnel."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la loi positive est le rempart indispensable contre l'anarchie et la discorde. Toutefois, que faire lorsque la loi en vigueur consacre l'esclavage, l'extermination ou la persécution d'innocents ?",
    axe2: {
      title: "La justice morale transcende la stricte légalité positive, conférant au citoyen un droit de résistance et de désobéissance face aux lois iniques",
      significance: "la conscience humaine puise dans le droit naturel un impératif supérieur qui condamne toute légalité oppressive",
      overview: "Dire que la loi n'est pas toujours juste revient à affirmer la primauté de la dignité morale sur les décrets du pouvoir. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "La tragédie d'Antigone incarne l'inviolabilité des lois divines non écrites face aux édits injustes du pouvoir d'État.",
          author: "Sophocle",
          work: "Antigone",
          quote: "Je ne croyais pas que tes décrets fussent assez puissants pour donner à un mortel le pouvoir de violer les lois non écrites et immuables des dieux.",
          explanation: "Créon, tyran de Thèbes, interdit sous peine de mort la sépulture de Polynice. Antigone désobéit courageusement au décret pour accomplir le devoir sacré envers son frère. Elle affirme qu'aucune loi humaine n'a la légitimité d'outrager les principes éternels d'humanité et de piété.",
          analyseIllustration: "Sophocle immortalise la supériorité de la justice morale sur l'autoritarisme légaliste."
        },
        {
          statement: "Une loi injuste et contraire au bien commun ne possède pas la nature d'une vraie loi mais d'un acte de violence.",
          author: "Thomas d'Aquin",
          work: "Somme théologique (Ia-IIae, question 95)",
          quote: "Une loi injuste ne semble pas être une loi (Lex injusta non est lex).",
          explanation: "Thomas d'Aquin enseigne que la loi humaine positive ne tire sa force obligatoire que de sa conformité avec la loi naturelle rationnelle. Lorsqu'un gouvernant édicte une mesure tyrannique au service de son intérêt personnel, ses sujets ne sont pas tenus en conscience d'y obéir, sauf pour éviter un scandale ou un plus grand péril public.",
          analyseIllustration: "Cette philosophie du droit naturel pose une limite absolue à l'arbitraire du législateur."
        },
        {
          statement: "La désobéissance civile est un devoir éthique impérieux dès lors que l'État contraint le citoyen à devenir l'agent de l'injustice.",
          author: "Henry David Thoreau",
          work: "La Désobéissance civile",
          quote: "Si la loi est de telle nature qu'elle exige de vous d'être l'agent de l'injustice envers un autre, alors, je vous le dis, enfreignez la loi.",
          explanation: "Thoreau refusa de payer ses impôts à l'État américain pour ne pas financer la guerre esclavagiste contre le Mexique. La dissidence civique, revendiquée publiquement et assumée pacifiquement jusqu'en prison, est la preuve que la loyauté envers la conscience et la justice prévaut sur la lâcheté légaliste.",
          analyseIllustration: "Thoreau prouve que la désobéissance réfléchie est un acte salutaire de courage civique pour faire progresser le droit."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît clairement que la loi positive est un instrument irremplaçable pour stabiliser la société et protéger l'égalité des droits des citoyens.",
      reponseDefinitive: "Toutefois, nous affirmons sans équivoque que la loi n'est pas toujours juste : la légalité n'est jamais la garantie absolue de la légitimité, et l'obéissance ne doit jamais être aveugle.",
      elargissement: "En ce qui nous concerne, nous dirons que la vitalité d'une démocratie authentique repose sur la vigilance morale de ses citoyens, capables d'éprouver la justice des lois à l'aune de la dignité imprescriptible de l'être humain."
    }
  },

  // --------------------------------------------------------------------------
  // 3. LA JUSTICE CONSISTE-T-ELLE À TRAITER TOUT LE MONDE DE FAÇON ÉGALE ?
  // --------------------------------------------------------------------------
  {
    id: "justice-egalite-equite",
    label: "Justice & Égalité (Égalitarisme arithmétique vs Équité proportionnelle)",
    triggerRegex: /(?:justice).*(?:traiter.*egal|egalit|equit)|(?:traiter.*egal|egalit|equit).*(?:justice)/i,
    concept1: "Justice",
    concept2: "Égalité",
    lexiqueDefinitions: [
      {
        terme: "Égalité arithmétique (stricte)",
        definition: "Attribution rigoureusement identique de droits, de biens ou de peines à tous les individus, sans considération de leurs différences."
      },
      {
        terme: "Équité (Égalité géométrique/proportionnelle)",
        definition: "Principe de justice distributive qui adapte l'application de la règle générale aux situations concrètes et aux besoins pour rétablir une juste proportion."
      },
      {
        terme: "Justice",
        definition: "Idéal moral et institutionnel garantissant à chacun ce qui lui revient légitimement (suum cuique tribuere)."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si la justice commande d'attribuer exactement la même chose à tous les individus indépendamment de leurs spécificités, ou si la véritable justice réside dans l'équité qui module le traitement selon les besoins et les mérites de chacun.",
    tensionPhilosophique: "L'égalité abstraite devant la loi protège contre les privilèges injustifiés ; pourtant, traiter de façon rigoureusement égale des personnes aux conditions de départ profondément inégales revient souvent à aggraver l'injustice.",
    problemeCourt: "La justice se réduit-elle à l'égalité arithmétique ?",
    aspect1: "dans quelle mesure la justice réside-t-elle dans une stricte égalité ?",
    aspect2: "toutefois, la véritable justice n'exige-t-elle pas l'équité ?",
    axe1: {
      title: "L'égalité stricte des droits et des personnes devant la loi est le fondement incontournable de la dignité démocratique et de la justice corrective",
      significance: "toute dérogation au principe d'égalité risque d'introduire des privilèges iniques et l'arbitraire du pouvoir",
      overview: "Affirmer que la justice exige l'égalité de tous revient à défendre l'universalité des droits fondamentaux. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La justice commutative impose l'égalité arithmétique rigoureuse dans les échanges et la réparation des torts.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre V, chapitre 4)",
          quote: "La justice corrective est celle qui intervient dans les transactions privées... et elle a pour principe l'égalité arithmétique.",
          explanation: "Aristote explique que face à un contrat ou à un délit (un vol, une blessure), le juge doit faire abstraction de la richesse, de la naissance ou du statut social des parties : il ne voit que deux égaux. Le tort commis doit être exactement compensé par la restitution de la valeur équivalente.",
          analyseIllustration: "Aristote démontre que la stricte égalité arithmétique est l'unique garantie de neutralité dans la régulation des délits."
        },
        {
          statement: "L'égalité devant la loi est le premier rempart républicain contre l'asservissement féodal et les privilèges de caste.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social (Livre II, chapitre 4)",
          quote: "Le pacte social établit entre les citoyens une telle égalité qu'ils s'engagent tous sous les mêmes conditions et doivent jouir tous des mêmes droits.",
          explanation: "Rousseau soutient que la loi doit être générale dans son objet comme dans son essence : elle ne peut nommer aucun individu ni créer d'exception. C'est parce que chaque citoyen est soumis aux mêmes charges et protégé par les mêmes lois que la liberté civile est préservée de la tyrannie corporatiste.",
          analyseIllustration: "Rousseau prouve que l'égalité politique absolue est la condition sine qua non de la cohésion citoyenne."
        },
        {
          statement: "Tous les êtres doués de raison possèdent une dignité inaliénable équivalente qui interdit toute hiérarchisation.",
          author: "Emmanuel Kant",
          work: "Fondements de la métaphysique des mœurs",
          quote: "Ce qui a un prix peut être remplacé par quelque chose d'équivalent ; ce qui est au-dessus de tout prix, ce qui par suite n'admet aucun équivalent, a une dignité.",
          explanation: "Pour Kant, chaque être humain doit être traité comme une fin en soi et jamais simplement comme un moyen. Aucune différence de talent, de fortune ou d'utilité sociale ne permet de violer cette égalité morale absolue entre les personnes.",
          analyseIllustration: "Kant ancre le principe d'égalité dans la valeur infinie de la personne morale."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que l'égalité juridique et morale est le rempart sacré contre l'arbitraire. Toutefois, traiter exactement de la même manière le fort et le vulnérable, le bien-portant et le malade, ne revient-il pas à entériner une monstrueuse injustice réelle ?",
    axe2: {
      title: "La justice accomplie exige l'équité et la proportionnalité, corrigeant les injustices de fait par une juste différenciation des situations",
      significance: "l'équité assouplit la rigidité abstraite de la loi pour prendre en compte la réalité singulière et la vulnérabilité humaine",
      overview: "Dire que la justice requiert l'équité revient à dépasser l'égalitarisme aveugle pour fonder la justice distributive. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "L'équité est le correctif indispensable de la loi lorsque l'universalité de la règle abstraite s'avère déficiente face à un cas particulier.",
          author: "Aristote",
          work: "Éthique à Nicomaque (Livre V, chapitre 10)",
          quote: "L'équitable, tout en étant juste, n'est pas le juste selon la loi, mais un correctif de la justice légale.",
          explanation: "Aristote compare l'équité à la règle de plomb des architectes de Lesbos, qui épouse les contours de la pierre au lieu de rester droite et rigide. Puisque la loi formule une règle générale pour la majorité des cas, elle commet des injustices si elle est appliquée aveuglément à des exceptions inattendues. L'équité rétablit l'esprit de la justice contre la lettre de la loi.",
          analyseIllustration: "Aristote démontre que la véritable justice sait faire preuve de discernement et d'adaptation humaine."
        },
        {
          statement: "La justice comme équité autorise des inégalités économiques et sociales si elles bénéficient aux membres les plus désavantagés de la société.",
          author: "John Rawls",
          work: "Théorie de la justice (Le principe de différence)",
          quote: "Les inégalités sociales et économiques doivent être organisées de façon à fonctionner au plus grand bénéfice des plus défavorisés.",
          explanation: "Sous le « voile d'ignorance », des individus rationnels s'accordent pour rejeter l'égalitarisme niveleur qui découragerait l'initiative, tout en refusant le laisser-faire cynique. La justice commande de traiter inégalement les situations de départ afin de compenser les injustices de la loterie génétique et sociale (allocations, accès prioritaire aux soins, bourses scolaires).",
          analyseIllustration: "Rawls prouve que la justice distributive exige des compensations équitables et non une égalité arithmétique aveugle."
        },
        {
          statement: "Distribuer selon les capacités et selon les besoins transcende l'étroit horizon du droit bourgeois formel.",
          author: "Karl Marx",
          work: "Critique du programme de Gotha",
          quote: "De chacun selon ses capacités, à chacun selon ses besoins !",
          explanation: "Marx critique le concept bourgeois de droit égal qui applique un étalon unique à des individus aux forces, familles et santés inégales. Un célibataire robuste et un père de famille souffrant ne peuvent être traités de la même façon sous prétexte d'égalité salariale abstraite sans pénaliser le second.",
          analyseIllustration: "Marx établit que la justice matérielle réelle ne saurait se satisfaire d'une égalité purement formelle."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est apparu que l'égalité des droits et la même soumission à la loi constituent la garantie indispensable contre le despotisme et la ségrégation.",
      reponseDefinitive: "Toutefois, nous affirmons que la justice ne consiste pas à traiter tout le monde de façon mécaniquement égale : la véritable justice s'incarne dans l'équité qui sait prendre soin des plus fragiles et corriger les handicaps réels.",
      elargissement: "En ce qui nous concerne, nous dirons que la plus haute forme de justice consiste à conjuguer l'égale dignité morale de tous avec la solidarité attentive et fraternelle envers chacun."
    }
  },

  // --------------------------------------------------------------------------
  // 4. PEUT-ON SE PASSER DE L'ÉTAT ?
  // --------------------------------------------------------------------------
  {
    id: "etat-societe-justice",
    label: "État & Société (Nécessité de l'autorité politique vs Utopie anarchiste)",
    triggerRegex: /(?:peut-on|est-il\s+possible).*(?:passer.*[eé]tat|vivre.*sans.*[eé]tat)|(?:passer.*[eé]tat|vivre.*sans.*[eé]tat).*(?:peut-on|est-il\s+possible)|(?:soci[eé]t[eé].*sans.*[eé]tat)/i,
    concept1: "État",
    concept2: "Société",
    lexiqueDefinitions: [
      {
        terme: "État",
        definition: "Institution politique détenant le monopole de la violence légitime et exerçant le pouvoir souverain sur une population et un territoire."
      },
      {
        terme: "Se passer de l'État",
        definition: "Organiser la vie collective sans gouvernement centralisé, sans police ni magistrature coercitive."
      },
      {
        terme: "Anarchie / État de nature",
        definition: "Absence de pouvoir imposé, qui peut désigner soit le chaos violent de la guerre de tous contre tous, soit l'auto-organisation harmonieuse des citoyens."
      }
    ],
    reformulationPattern: "Il s'agit d'examiner si l'institution étatique est une création tyrannique et superflue dont l'humanité pourrait s'émanciper, ou si l'État représente la condition rationnelle indispensable pour garantir la paix, le droit et la sécurité commune.",
    tensionPhilosophique: "L'État restreint notre indépendance par l'impôt, les lois et l'appareil policier ; pourtant, sa disparition menace d'abandonner les hommes à la violence déchaînée des factions.",
    problemeCourt: "L'homme peut-il vivre en paix sans l'État ?",
    aspect1: "dans quelle mesure l'État apparaît-il comme une autorité artificielle, oppressive et théoriquement dispensable ?",
    aspect2: "toutefois, l'État n'est-il pas l'organe indispensable sans lequel nulle paix durable ni justice ne sont possibles ?",
    axe1: {
      title: "L'État se manifeste souvent comme un appareil de domination, de confiscation de la liberté et d'oppression d'une classe sur une autre",
      significance: "l'institution étatique aliène l'autonomie spontanée des communautés humaines au profit d'une caste dominante",
      overview: "Affirmer que l'on peut ou doit se passer de l'État revient à porter la critique libertaire et marxiste de l'institution coercitive. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "Les sociétés premières sans État démontrent que l'humanité a pu vivre dans l'harmonie et la liberté sans appareil bureaucratique ni police.",
          author: "Pierre Clastres",
          work: "La Société contre l'État",
          quote: "L'histoire des peuples sans histoire, c'est l'histoire de leur lutte contre l'État.",
          explanation: "L'anthropologue montre que les tribus amérindiennes (comme les Guayaki) n'étaient pas des sociétés « sous-développées » en attente d'un État, mais des sociétés qui empêchaient activement l'émergence d'un pouvoir coercitif central en maintenant le chef sans pouvoir effectif de contrainte. L'absence d'État n'est pas le désordre, mais le choix de l'égalité.",
          analyseIllustration: "Clastres prouve empiriquement que l'État n'est pas une fatalité biologique universelle."
        },
        {
          statement: "Dans l'analyse matérialiste, l'État n'est que l'instrument de classe servant à maintenir l'exploitation économique des prolétaires.",
          author: "Karl Marx & Friedrich Engels",
          work: "L'Origine de la famille, de la propriété privée et de l'État & Manifeste du Parti communiste",
          quote: "L'État n'est rien d'autre qu'un instrument d'oppression d'une classe par une autre.",
          explanation: "Marx et Engels expliquent que l'État est né de la division de la société en classes antagonistes. Loin d'incarner l'intérêt général, il défend la propriété privée des nantis. L'avènement du communisme authentique doit conduire au dépérissement inéluctable de l'appareil d'État au profit d'une simple administration rationnelle des choses.",
          analyseIllustration: "Marx démontre que l'État est une structure historique transitoire appelée à disparaître."
        },
        {
          statement: "L'anarchisme philosophique pose que l'ordre véritable naît de la liberté, de l'association volontaire et du secours mutuel, non de l'obéissance.",
          author: "Mikhaïl Bakounine",
          work: "Étatisme et Anarchie",
          quote: "L'État, c'est l'autorité, c'est la force, c'est l'ostentation et l'infatuation de la force... Il est la négation la plus flagrante de l'humanité.",
          explanation: "Bakounine soutient que même un État démocratique ou socialiste reproduit inévitablement de nouveaux privilèges et de nouvelles bureaucraties despotiques. Les hommes peuvent et doivent organiser la production et la solidarité par des fédérations libres de communes et de syndicats.",
          analyseIllustration: "Bakounine pose l'autonomie solidaire comme l'alternative politique supérieure à la coercition étatique."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que la critique libertaire met en lumière les dérives coercitives et spoliatrices de l'appareil d'État. Toutefois, sans autorité souveraine pour faire respecter le droit, les rapports humains ne retombent-ils pas immédiatement dans la brutalité de la guerre civile ?",
    axe2: {
      title: "L'État est la condition rationnelle indispensable pour dépasser la violence primitive, pacifier les conflits et instituer le règne du droit",
      significance: "seul l'État détient la force légitime capable de protéger les citoyens les uns contre les autres et contre les agressions",
      overview: "Dire que l'on ne saurait se passer de l'État revient à reconnaître que la liberté civile a pour condition nécessaire l'ordre politique. Plusieurs arguments permettent de le démontrer.",
      arguments: [
        {
          statement: "Sans un pouvoir souverain commun qui tient les hommes en respect, la vie humaine n'est que solitude, misère et guerre permanente.",
          author: "Thomas Hobbes",
          work: "Léviathan (chapitre 13)",
          quote: "Sans l'épée, les conventions ne sont que des paroles, et n'ont pas la force de mettre les hommes en sécurité.",
          explanation: "Hobbes démontre que l'homme sans État est soumis à la peur constante de la mort violente (« homo homini lupus »). L'institution du Léviathan, auquel chacun délègue son droit de se faire justice lui-même, permet l'avènement du commerce, des sciences, de la justice et de la paix civile.",
          analyseIllustration: "Hobbes établit que l'État est le garant protecteur sans lequel la civilisation est impossible."
        },
        {
          statement: "L'État républicain est l'incarnation de la volonté générale qui élève l'homme de la bête pulsionnelle au citoyen moral.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social (Livre I, chapitre 8)",
          quote: "Ce passage de l'état de nature à l'état civil produit dans l'homme un changement très remarquable, en substituant dans sa conduite la justice à l'instinct.",
          explanation: "Pour Rousseau, l'État légitime né du pacte social n'est pas une confiscation mais la création de la liberté civile. C'est l'État qui garantit l'égalité devant la loi, protège les faibles contre l'avidité des puissants et élève la moralité des citoyens.",
          analyseIllustration: "Rousseau prouve que l'État de droit est le protecteur indispensable de la liberté authentique."
        },
        {
          statement: "L'État est la réalisation de l'Idée morale dans l'histoire, unissant l'intérêt individuel et la rationalité collective universelle.",
          author: "G.W.F. Hegel",
          work: "Principes de la philosophie du droit (§ 257-260)",
          quote: "L'État est la réalité de l'Idée éthique... la liberté concrète parvenue à sa pleine effectivité.",
          explanation: "Hegel montre que ni la famille (fondée sur le sentiment) ni la société civile (fondée sur la concurrence des intérêts égoïstes) ne suffisent à créer un ordre juste. C'est l'État qui apporte la conscience du bien commun universel et permet au citoyen de se dépasser en faisant corps avec la loi éthique.",
          analyseIllustration: "Hegel démontre la nécessité philosophique de l'État comme achèvement de la vie rationnelle et spirituelle de la communauté."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il est indéniable que l'État qui sombre dans la tyrannie, le totalitarisme ou la corruption constitue un fléau intolérable pour la liberté humaine.",
      reponseDefinitive: "Toutefois, nous affirmons qu'une société humaine complexe ne peut durablement se passer d'une autorité étatique démocratique et impartiale sans risquer de basculer dans la loi du plus fort.",
      elargissement: "En ce qui nous concerne, nous dirons que le défi suprême de la philosophie politique n'est pas d'abolir l'État, mais de le soumettre perpétuellement au contrôle critique, pacifique et vigilant de la conscience républicaine."
    }
  }
];
