import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_MIND_METAPHYSICS_VARIANTS: Record<string, ArgumentVariant[]> = {
  "temps": [
    {
      id: 0,
      label: "Perspectives de la Durée Intérieure : Temps Vécu contre Temps Spatialisé",
      perspective: "Durée bergsonienne, Conscience temporelle & Flot continu de la mémoire",
      pedagogicalAdvice: "Le grand classique de la philosophie du temps opposant l'horloge mécanique à l'intuition intérieure.",
      arguments: [
        {
          statement: "Le temps authentique n'est pas le temps abstrait mesuré par l'horloge mais la durée intérieure vécue par la conscience.",
          author: "Henri Bergson",
          work: "Essai sur les données immédiates de la conscience",
          quote: "La durée pure est la forme que prend la succession de nos états de conscience quand notre moi se laisse vivre, quand il s'abstient d'établir une séparation entre l'état présent et les états antérieurs.",
          explanation: "Bergson montre que la science physique spatialise le temps en le découpant en secondes identiques juxtaposées sur un cadran. Or, la vraie vie de l'esprit est un écoulement indivisible où le passé s'accumule sans cesse dans le présent pour créer de la nouveauté imprévisible.",
          category: "Thèse Phénoménologique (Durée Pure vs Espace)",
          connector: "De prime abord"
        },
        {
          statement: "Le temps physique est le nombre du mouvement selon l'antérieur et le postérieur.",
          author: "Aristote",
          work: "Physique (Livre IV)",
          quote: "Le temps est le nombre du mouvement selon l'avant et l'après.",
          explanation: "Aristote ancre le temps dans le mouvement des corps célestes et terrestres. Sans changement physique ni déplacement matériel dans le monde, il n'y aurait aucune conscience du passage du temps. Le temps est la mesure objective du devenir universel.",
          category: "Physique Classique (Le Temps comme Mesure du Mouvement)",
          connector: "En outre"
        },
        {
          statement: "Le temps n'est pas une propriété intrinsèque des choses en soi, mais la forme a priori de la sensibilité humaine.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pure",
          quote: "Le temps est la condition formelle a priori de tous les phénomènes en général.",
          explanation: "Kant démontre que nous ne pouvons faire l'expérience d'aucun objet ni d'aucun sentiment autrement que dans le cadre temporel. Le temps est les lunettes subjectives indispensables par lesquelles l'esprit humain structure et ordonne le chaos des sensations sensibles.",
          category: "Idéalisme Transcendantal (Forme a priori de la Sensibilité)",
          connector: "Par ailleurs"
        },
        {
          statement: "La mémoire pure retient le passé de manière intégrale et inconsciente pour éclairer l'action présente.",
          author: "Henri Bergson",
          work: "Matière et Mémoire",
          quote: "Le passé se conserve de lui-même, automatiquement. Tout entier, peut-être, il nous suit à tout instant.",
          explanation: "Bergson réfute l'idée que le passé s'anéantirait dans le néant. Notre cerveau est un filtre pratique qui ne laisse passer à la conscience que les souvenirs immédiatement utiles pour orienter nos gestes présents face aux nécessités de l'action.",
          category: "Mémoire & Conservation Intégrale",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Tragiques & Existentielle : Finitude, Angoisse & Être-pour-la-mort",
      perspective: "Finitude heideggérienne, Fugacité pascalienne & Avarice du temps",
      pedagogicalAdvice: "À mobiliser pour les sujets examinant l'angoisse de la mort, la fuite inexorable des heures et le sens de l'existence finie.",
      arguments: [
        {
          statement: "L'existence humaine est fondamentalement temporelle et ne prend son sens authentique que dans la lucidité de l'être-pour-la-mort.",
          author: "Martin Heidegger",
          work: "Être et Temps",
          quote: "Le Dasein existe comme être-pour-la-mort... L'angoisse devant la mort est la disposition fondamentale qui révèle la finitude irremplaçable de notre existence.",
          explanation: "Heidegger montre que l'homme dans la vie inauthentique (« le On ») banalise la mort comme un événement anonyme lointain. Dès lors que l'individu assume en première personne que sa mort est sa possibilité la plus propre et inévitable, chaque instant présent se charge d'une urgence absolue.",
          category: "Thèse Existentialiste (L'Être-pour-la-mort)",
          connector: "D'un autre côté"
        },
        {
          statement: "L'esprit humain est incapable d'habiter le seul instant qui lui appartient : le présent évanescent.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Nous ne nous tenons jamais au temps présent... Ainsi nous ne vivons jamais, mais nous espérons de vivre ; et, nous disposant toujours à être heureux, il est inévitable que nous ne le soyons jamais.",
          explanation: "Pascal observe la tragique dispersion de l'âme humaine : nous errons perpétuellement dans des temps qui ne sont pas nôtres, regrettant le passé disparu ou anticipant avec anxiété un avenir incertain. Cette incapacité d'être au présent nous rend incapables de vivre.",
          category: "Critique de la Fuite Temporelle (L'Inquiétude Pascalienne)",
          connector: "Cependant"
        },
        {
          statement: "La vie n'est pas trop courte mais nous en perdons une part immense en futilités et en distractions stériles.",
          author: "Sénèque",
          work: "De la brièveté de la vie",
          quote: "Ce n'est pas que nous ayons peu de temps, c'est que nous en perdons beaucoup.",
          explanation: "Sénèque exhorte le sage à devenir l'avare jaloux de son temps. Les hommes se plaignent de la brièveté de l'existence alors qu'ils dilapident leurs journées à flatter les puissants, accumuler des richesses superflues ou s'enivrer. La vie est assez longue pour qui sait l'employer à la sagesse.",
          category: "Sagesse Stoïcienne (La Maîtrise des Heures)",
          connector: "Qui plus est"
        },
        {
          statement: "Le paradoxe aporétique du temps réside dans l'inexistence conjointe du passé, de l'avenir et du présent insaisissable.",
          author: "Saint Augustin",
          work: "Confessions (Livre XI)",
          quote: "Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; mais si on me le demande et que je veuille l'expliquer, je ne le sais plus.",
          explanation: "Augustin analyse le mystère du temps : le passé n'est plus, l'avenir n'est pas encore, et le présent se réduit à un point infinitésimal sans durée qui meurt au moment où il naît. Le temps n'a de réalité que par la distension de l'esprit (distentio animi) qui se souvient, attend et est attentif.",
          category: "Aporie Augustinienne (La Distension de l'Âme)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives de la Conquête & du Projet : L'Avenir comme Liberté Responsable",
      perspective: "Projet existentialiste sartrien, Présent créateur & Dépassement",
      pedagogicalAdvice: "Indispensable pour affirmer que le temps n'est pas une prison destructrice mais l'espace ouvert de notre liberté créatrice.",
      arguments: [
        {
          statement: "L'homme n'est pas déterminé par son passé car son existence temporelle est un projet perpétuellement projeté vers l'avenir.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant",
          quote: "L'homme est un être qui se projette vers un avenir et qui a conscience de se projeter.",
          explanation: "Sartre démontre que la conscience humaine (le pour-soi) est un pouvoir de néantisation. Quels que soient les conditionnements passés ou les erreurs commises, le sujet libre est toujours en mesure de choisir le sens de sa vie future à travers ses actes présents.",
          category: "Thèse Existentialiste (Le Projet & La Liberté Temporelle)",
          connector: "En premier lieu"
        },
        {
          statement: "La mémoire vivante n'est pas la conservation figée des reliques mais le foyer ardent qui transmet la flamme créatrice.",
          author: "Jean Jaurès",
          work: "Discours à la jeunesse",
          quote: "Ce n'est pas en conservant les cendres du passé qu'on honore l'histoire, mais en en transmettant la flamme.",
          explanation: "Jaurès combat à la fois l'amnésie des déracinés et le culte nostalgique et réactionnaire de l'ordre ancien. Le passé ne doit pas être un fardeau qui paralyse, mais un réservoir d'énergie morale et révolutionnaire pour féconder les combats d'émancipation de demain.",
          category: "Philosophie de l'Histoire (La Flamme de l'Idéal)",
          connector: "Dans le même sens"
        },
        {
          statement: "La répétition héroïque du présent dans l'épreuve de l'éternel retour donne une gravité infinie à chacun de nos choix.",
          author: "Friedrich Nietzsche",
          work: "Le Gai Savoir",
          quote: "Cette vie, telle que tu la vis et l'as vécue, tu devras la revivre encore une fois et d'innombrables fois... Veux-tu cela encore une fois et d'innombrables fois ?",
          explanation: "L'hypothèse vertigineuse de l'éternel retour du même n'est pas une doctrine cosmologique littérale mais la plus haute épreuve éthique : vivre chaque seconde avec une intensité et une noblesse telles que l'on puisse en souhaiter la répétition éternelle sans regret.",
          category: "Épreuve Éthique (L'Éternel Retour Nietzschéen)",
          connector: "D'autre part"
        },
        {
          statement: "L'action humaine introduit dans l'irréversibilité destructrice du temps le miracle inattendu du nouveau commencement.",
          author: "Hannah Arendt",
          work: "Condition de l'homme moderne",
          quote: "Les hommes, bien qu'ils doivent mourir, ne sont pas nés pour mourir mais pour commencer.",
          explanation: "Arendt oppose à la fatalité biologique le concept lumineux de natalité : chaque nouvelle naissance apporte au monde un commencement imprévisible capable de briser le cours mécanique des événements grâce au pardon (qui délie du passé) et à la promesse (qui sécurise l'avenir).",
          category: "Politique du Commencement (La Natalité Arendtienne)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Cosmologiques & Rythmes Africains : Temps Cyclique & Mémoire des Ancêtres",
      perspective: "Temps circulaire, Vitalisme africain & Transmission intergénérationnelle",
      pedagogicalAdvice: "À mobiliser pour enrichir l'analyse du temps par les conceptions cycliques, communautaires et cosmologiques.",
      arguments: [
        {
          statement: "Dans les cosmologies traditionnelles africaines, le temps n'est pas une flèche linéaire anxiogène mais un rythme cyclique de renouvellement cosmique.",
          author: "Amadou Hampâté Bâ",
          work: "Aspects de la civilisation africaine",
          quote: "En Afrique, un vieillard qui meurt est une bibliothèque qui brûle.",
          explanation: "Hampâté Bâ montre que le temps s'incarne dans la parole vivante des anciens qui relient la chaîne ininterrompue des générations. Le temps n'est pas une marchandise que l'on économise mais une relation vivante avec la sagesse des ancêtres et les rythmes de la nature.",
          category: "Tradition Orale & Épaisseur du Temps",
          connector: "De prime abord"
        },
        {
          statement: "La présence invisible des morts au cœur du temps présent abolit la coupure tragique entre le passé et le devenir.",
          author: "Birago Diop",
          work: "Leurres et Lueurs (Souffles)",
          quote: "Ceux qui sont morts ne sont jamais partis : ils sont dans l'ombre qui s'éclaire et dans l'ombre qui s'épaissit. Les morts ne sont pas sous la terre.",
          explanation: "Cette vision poétique et philosophique enracine l'existence humaine dans une solidarité cosmique permanente. Le temps ne détruit pas les disparus : ils continuent d'animer le vent, l'eau et le feu pour guider les vivants dans la préservation de l'harmonie communautaire.",
          category: "Spiritualité Africaine (La Permanence des Ancêtres)",
          connector: "Aussi"
        },
        {
          statement: "L'expérience temporelle des sociétés africaines privilégie le temps relationnel partagé au détriment de l'obsession quantitative occidentale.",
          author: "John Mbiti",
          work: "Religions et philosophie africaines",
          quote: "Le temps doit être créé ou produit par l'homme ; l'homme n'est pas l'esclave du temps, il le façonne dans sa communauté.",
          explanation: "Mbiti distingue la conception du temps axée sur les événements relationnels vécus (le Sasa et le Zamani) de la comptabilité abstraite du chronomètre industriel. Le temps acquiert sa valeur par les rites, les palabres et la qualité de la présence mutuelle.",
          category: "Anthropologie Philosophique (Le Temps Relationnel)",
          connector: "Toutefois"
        },
        {
          statement: "L'Afrique contemporaine doit s'émanciper du temps différé de l'attente pour devenir le sujet souverain de sa propre accélération historique.",
          author: "Achille Mbembe",
          work: "Sortir de la grande nuit : Essai sur l'Afrique décolonisée",
          quote: "Il s'agit d'habiter le temps du monde de plein fouet, sans se laisser assigner à la salle d'attente de l'histoire.",
          explanation: "Mbembe dénonce l'idéologie occidentale qui relègue l'Afrique à un retard perpétuel sur le calendrier du développement. Les peuples du continent doivent affirmer leur contemporanéité absolue et inventer leurs propres rythmes d'émancipation politique et culturelle.",
          category: "Pensée Décoloniale (Contemporanéité & Maîtrise Historique)",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "religion": [
    {
      id: 0,
      label: "Perspectives de la Foi & de la Transcendance : Le Saut de la Foi & L'Expérience du Sacré",
      perspective: "Pari pascalien, Stade religieux kierkegaardien & Sentiment de transcendance",
      pedagogicalAdvice: "Le cadre classique pour montrer la noblesse de la quête spirituelle et l'irréductibilité de la foi à la seule raison calculatrice.",
      arguments: [
        {
          statement: "Face au silence infini de l'univers et à l'impossibilité de prouver Dieu par la raison, le pari de la foi est le choix le plus rationnel.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Pesons le gain et la perte, en prenant croix que Dieu est. Estimons ces deux cas : si vous gagnez, vous gagnez tout ; si vous perdez, vous ne perdez rien. Gagez donc qu'il est, sans hésiter.",
          explanation: "Pascal place l'homme devant l'obligation existentielle de choisir. Puisque la raison humaine ne peut trancher par des preuves géométriques, miser sur l'existence divine et la vie éternelle offre une espérance infinie pour une mise terrestre finie et dérisoire.",
          category: "Thèse du Pari (L'Engagement de la Foi)",
          connector: "De prime abord"
        },
        {
          statement: "La foi authentique est un saut vertigineux au-delà de la morale commune et de la logique rationnelle de l'entendement.",
          author: "Søren Kierkegaard",
          work: "Crainte et Tremblement",
          quote: "La foi est précisément ce paradoxe : que l'individu particulier est plus haut que le général.",
          explanation: "En analysant le sacrifice d'Abraham sur le mont Moriah, Kierkegaard montre que la vraie foi n'est pas une simple adhésion à des dogmes rassurants. Elle exige une suspension éthique de la raison universelle dans une angoisse solitaire absolue face à l'injonction divine.",
          category: "Existentialisme Chrétien (Le Saut dans l'Absurde)",
          connector: "En second lieu"
        },
        {
          statement: "La raison humaine éprouve le besoin métaphysique d'une espérance morale qui postule l'existence de Dieu et l'immortalité de l'âme.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pratique",
          quote: "Je devais donc abolir le savoir pour faire une place à la croyance.",
          explanation: "Kant démontre que si l'existence de Dieu ne peut faire l'objet d'aucune science théorique positive, elle constitue un postulat indispensable de la raison pratique. Pour que le souverain bien (l'union de la vertu morale et du bonheur) soit possible, il faut espérer une justice transcendante.",
          category: "Postulat Moral (La Foi Rationnelle Kantienne)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le sacré est une expérience primordiale du mystère fascinant et terrifiant qui dépasse l'entendement conceptuel.",
          author: "Rudolf Otto",
          work: "Le Sacré",
          quote: "Le numineux est à la fois mysterium tremendum (mystère terrifiant) et fascinans (puissance fascinante d'amour et de grâce).",
          explanation: "Otto montre que la religion ne se réduit pas à un ensemble de règles éthiques ou de doctrines intellectuelles. Elle prend racine dans un sentiment ineffable de dépendance absolue et d'émerveillement face à la transcendance divine.",
          category: "Phénoménologie du Sacré (Le Numineux)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives des Maîtres du Soupçon : Illusion, Aliénation & Généalogie",
      perspective: "Opium du peuple marxiste, Névrose obsessionnelle freudienne & Nihilisme nietzschéen",
      pedagogicalAdvice: "Indispensable pour examiner la critique matérialiste et psychologique de la religion comme illusion compensatrice.",
      arguments: [
        {
          statement: "La religion est le soupir de la créature accablée qui projette dans un ciel imaginaire les consolations refusées par la société réelle.",
          author: "Karl Marx",
          work: "Contribution à la critique de la philosophie du droit de Hegel",
          quote: "La religion est le soupir de la créature opprimée, l'âme d'un monde sans cœur... Elle est l'opium du peuple.",
          explanation: "Marx refuse de s'en tenir à une critique intellectuelle des dogmes : la croyance en un paradis céleste naît de la misère matérielle réelle sur terre. L'espérance religieuse engourdit la combativité révolutionnaire des prolétaires en justifiant la résignation face à l'exploitation.",
          category: "Critique Matérialiste (L'Opium du Peuple)",
          connector: "D'un autre côté"
        },
        {
          statement: "La croyance religieuse est une illusion psychologique née de la détresse infantile de l'homme face aux dangers du monde.",
          author: "Sigmund Freud",
          work: "L'Avenir d'une illusion",
          quote: "La religion serait la névrose obsessionnelle universelle de l'humanité.",
          explanation: "Freud explique que l'homme, terrorisé par les forces impitoyables de la nature et par l'angoisse de la mort, se fabrique un Dieu protecteur à l'image du père idéalisé de l'enfance. Grandir en lucidité exige de renoncer à ces béquilles consolatrices pour assumer la dure réalité.",
          category: "Psychanalyse (L'Illusion & Le Besoin de Protection)",
          connector: "Cependant"
        },
        {
          statement: "La morale chrétienne du renoncement procède du ressentiment des faibles et consacre la haine de la vie terrestre.",
          author: "Friedrich Nietzsche",
          work: "L'Antéchrist",
          quote: "Dieu est mort ! Dieu reste mort ! Et c'est nous qui l'avons tué !... Ce qui était le plus saint et le plus puissant a perdu son sang sous nos couteaux.",
          explanation: "Par la « mort de Dieu », Nietzsche constate l'effondrement historique des certitudes théologiques et morales occidentales. Les hommes ont inventé l'au-delà pour dévaloriser le seul monde qui existe : la terre avec ses pulsions, ses passions et sa joie créatrice.",
          category: "Généalogie Critique (La Mort de Dieu & Le Nihilisme)",
          connector: "Qui plus est"
        },
        {
          statement: "La théologie n'est qu'une anthropologie inversée où l'homme aliène ses propres perfections dans une divinité extérieure imaginaire.",
          author: "Ludwig Feuerbach",
          work: "L'Essence du christianisme",
          quote: "L'homme projette son être dans l'objectivité, puis fait à nouveau de lui-même l'objet de cet être projeté, métamorphosé en sujet.",
          explanation: "Feuerbach montre que toutes les vertus attribuées à Dieu (amour infini, sagesse, bonté) sont en réalité les qualités génériques de l'espèce humaine. Pour s'émanciper, l'homme doit se réapproprier les trésors spirituels qu'il a gaspillés dans le ciel théologique.",
          category: "Anthropologie Critique (L'Aliénation Feuerbachienne)",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Sociologiques & Séculières : Lien Social, Rite & Tolérance",
      perspective: "Cohésion durkheimienne, Tolérance spinoziste & Laïcité républicaine",
      pedagogicalAdvice: "À mobiliser pour analyser la fonction de cohésion sociale de la religion et la nécessité politique de la laïcité.",
      arguments: [
        {
          statement: "La religion a pour fonction fondamentale de resserrer le lien social et d'exprimer la conscience collective du groupe.",
          author: "Émile Durkheim",
          work: "Les Formes élémentaires de la vie religieuse",
          quote: "La société, en adorant ses dieux, ne fait que s'adorer elle-même sous une forme transfigurée.",
          explanation: "Durkheim démontre que les rites, les fêtes sacrées et les rassemblements religieux créent une effervescence collective indispensable pour souder les individus entre eux et leur inculquer le sens du devoir communautaire au-delà des égoïsmes particuliers.",
          category: "Thèse Sociologique (Cohésion Sociale & Sacré Collectif)",
          connector: "En premier lieu"
        },
        {
          statement: "Pour préserver la paix civile, l'État souverain doit garantir la liberté de philosopher et séparer le dogme religieux de la loi civile.",
          author: "Baruch Spinoza",
          work: "Traité théologico-politique",
          quote: "Dans une république libre, il est permis à chacun de penser ce qu'il veut et de dire ce qu'il pense.",
          explanation: "Spinoza démonte les prétentions des théologiens à imposer leurs croyances par le glaive de l'État. La foi sincère commande l'amour du prochain et la justice, mais la promulgation des lois publiques appartient exclusivement à la puissance civile pour empêcher les guerres de religion.",
          category: "Philosophie Politique (Liberté de Pensée & Tolérance)",
          connector: "Dans le même sens"
        },
        {
          statement: "La foi doit être éclairée par le tribunal de la raison critique pour ne pas dégénérer en fanatisme meurtrier et en superstition.",
          author: "Voltaire",
          work: "Traité sur la tolérance",
          quote: "Puissent tous les hommes se souvenir qu'ils sont frères !... Si vous voulez des prêtres tolérants, ayez des philosophes.",
          explanation: "Voltaire mène un combat implacable contre l'intolérance religieuse et les supplices inquisitoriaux (comme dans l'affaire Calas). Une religion authentique doit s'unir à la charité universelle et respecter la diversité des consciences d'autrui.",
          category: "Lumières & Tolérance (Refus du Fanatisme)",
          connector: "D'autre part"
        },
        {
          statement: "La foi personnelle peut s'allier à l'exigence intellectuelle sans sacrifier l'intégrité de la pensée rationnelle.",
          author: "Paul Ricœur",
          work: "Lectures 3 : Aux frontières de la philosophie",
          quote: "La critique est la condition nécessaire d'une foi adulte qui refuse les fausses consolations mythologiques.",
          explanation: "Ricœur plaide pour une « seconde naïveté » : après la traversée libératrice du soupçon marxiste, freudien et nietzschéen, la religion peut être réinvestie comme une source féconde de pardon, d'espérance et d'amour poétique du monde.",
          category: "Herméneutique Critique (La Seconde Naïveté)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Cosmogoniques & Spirituelles Africaines : Le Souffle Vital & L'Harmonie Cosmique",
      perspective: "Force vitale placidienne, Rites ancestraux & Dialogue des spiritualités",
      pedagogicalAdvice: "Indispensable pour aborder les religions africaines, le culte des ancêtres et la coexistence harmonieuse des croyances.",
      arguments: [
        {
          statement: "L'univers africain traditionnel est traversé par une ontologie des forces vitales en constante interaction où tout communique.",
          author: "Placide Tempels & Alexis Kagame",
          work: "La Philosophie bantoue",
          quote: "L'être est force, et la force est être. La vie spirituelle consiste à renforcer et accroître son énergie vitale en union avec les ancêtres.",
          explanation: "Kagame et Tempels mettent en lumière la métaphysique africaine : le monde n'est pas un agrégat de matière morte mais un réseau dynamique de forces vivantes allant de Dieu aux minéraux, en passant par les ancêtres, les humains et les animaux.",
          category: "Ontologie Africaine (La Dynamique des Forces Vitales)",
          connector: "De prime abord"
        },
        {
          statement: "Le culte des ancêtres n'est pas un polythéisme idolâtre mais une vénération des médiateurs de la vie et de la continuité morale du clan.",
          author: "Cheikh Anta Diop",
          work: "L'Unité culturelle de l'Afrique noire",
          quote: "L'idée d'un Dieu unique, créateur suprême de l'univers, est universellement attestée dans les cosmogonies africaines depuis l'Égypte antique.",
          explanation: "Diop rétablit la vérité historique contre les préjugés coloniaux qui qualifiaient les croyances africaines d'animisme fruste. Les rituels communautaires rendent hommage aux anciens qui ont incarné les valeurs sacrées de justice et de vérité (la Maât).",
          category: "Histoire des Religions (Monothéisme & Médiation Ancestrale)",
          connector: "Aussi"
        },
        {
          statement: "La spiritualité négro-africaine se caractérise par la communion affective avec la nature et la ferveur participative du rythme rituel.",
          author: "Léopold Sédar Senghor",
          work: "Liberté 1 : Négritude et Humanisme",
          quote: "L'émotion est nègre, comme la raison hellène... L'homme noir ne distingue pas son être de l'objet contemplé, il vibre à son unisson.",
          explanation: "Senghor met en valeur l'expérience religieuse africaine où le divin n'est pas une entité abstraite lointaine mais une présence incarnée dans la danse, le tambour sacré et la réconciliation poétique de l'homme avec les éléments terrestres.",
          category: "Sensibilité Spirituelle (Communion Cosmique & Rythme)",
          connector: "Toutefois"
        },
        {
          statement: "L'Afrique offre au monde un modèle exemplaire de tolérance religieuse où différentes confessions cohabitent en paix au sein des mêmes familles.",
          author: "Amadou Hampâté Bâ",
          work: "Jésus vu par un musulman",
          quote: "La beauté d'un tapis dépend de la variété de ses couleurs ; ainsi en va-t-il des religions qui toutes conduisent à la même source d'amour.",
          explanation: "Hampâté Bâ enseigne l'œcuménisme spirituel : l'islam, le christianisme et les sagesses traditionnelles convergent dans l'exigence sacrée d'hospitalité, de paix et de respect mutuel des différences.",
          category: "Dialogue Interreligieux & Humanisme Spirituel",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
