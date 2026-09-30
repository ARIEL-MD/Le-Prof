import type { ArgumentVariant } from "../argumentVariationEngine";

/**
 * Base structurée de la notion « Désir ».
 *
 * Chaque argument conserve un noyau factuel stable : idée, explication,
 * auteur et œuvre. Les formulations alternatives ne changent ni la thèse
 * ni la référence ; elles servent uniquement à produire des réponses
 * différentes sans génération de texte.
 */
export const PHILO_DESIR_VARIANTS: ArgumentVariant[] = [
  {
    id: 0,
    label: "Désir, manque et insatisfaction",
    perspective: "Le désir comme expérience du manque",
    pedagogicalAdvice: "Utile pour montrer que le désir peut éloigner l'homme d'une satisfaction durable.",
    arguments: [
      {
        statement: "Le désir peut être une source d'insatisfaction parce qu'il entretient une recherche perpétuelle.",
        author: "Arthur Schopenhauer",
        work: "Le Monde comme volonté et comme représentation",
        quote: "",
        explanation: "Chez Schopenhauer, la volonté se manifeste comme un vouloir-vivre et un effort incessant. L'objet désiré n'apporte pas une satisfaction durable : le vouloir renaît et l'existence reste marquée par le manque et la frustration.",
        category: "Désir et insatisfaction",
        connector: "En premier lieu",
        formulationVariants: [
          { statement: "Le désir peut maintenir l'homme dans une quête sans fin de satisfaction.", explanation: "Le désir pousse continuellement vers un nouvel objet, de sorte que la satisfaction obtenue ne suffit pas à interrompre durablement le mouvement du vouloir." },
          { statement: "La satisfaction d'un désir ne garantit pas une satisfaction durable de l'homme.", explanation: "Dans la perspective de Schopenhauer, le vouloir renaît après l'obtention de l'objet recherché, ce qui entretient le manque et l'insatisfaction." },
          { statement: "Parce qu'il se renouvelle sans cesse, le désir peut enfermer l'homme dans l'insatisfaction.", explanation: "Le désir ne met pas définitivement fin au manque : une fois l'objet obtenu, un nouveau vouloir peut apparaître." }
        ]
      },
      {
        statement: "Le désir peut faire souffrir lorsque l'homme est dominé par un vouloir qu'il ne parvient pas à satisfaire.",
        author: "Arthur Schopenhauer",
        work: "Le Monde comme volonté et comme représentation",
        quote: "",
        explanation: "Schopenhauer associe le vouloir à une tension permanente : tant que l'objet manque, l'individu éprouve une insatisfaction ; lorsqu'il l'obtient, le soulagement reste fragile et peut laisser place à un nouveau désir.",
        category: "Désir et souffrance",
        connector: "De plus",
        formulationVariants: [
          { statement: "Le désir devient douloureux lorsque l'absence de son objet est vécue comme un manque persistant.", explanation: "L'objet désiré n'étant pas encore possédé, l'individu reste tendu vers ce qu'il veut obtenir et peut éprouver la frustration du manque." },
          { statement: "Un désir non satisfait peut transformer le manque en souffrance.", explanation: "Chez Schopenhauer, le vouloir entretient une tension qui ne disparaît pas durablement avec la satisfaction d'un objet particulier." },
          { statement: "La puissance du vouloir peut soumettre l'homme à une insatisfaction continuelle.", explanation: "Le vouloir pousse sans cesse vers de nouveaux objets et empêche ainsi une tranquillité durable fondée sur la seule satisfaction des désirs." }
        ]
      }
    ]
  },
  {
    id: 1,
    label: "Désir, maîtrise et bonheur",
    perspective: "Examiner et hiérarchiser les désirs",
    pedagogicalAdvice: "Utile pour défendre l'idée que le bonheur suppose un rapport réfléchi aux désirs.",
    arguments: [
      {
        statement: "La maîtrise des désirs peut contribuer à la tranquillité et au bonheur.",
        author: "Épicure",
        work: "Lettre à Ménécée",
        quote: "",
        explanation: "Épicure ne demande pas de supprimer tout désir. Il invite à les examiner et à distinguer les désirs naturels et nécessaires des désirs vains. Réduire les désirs inutiles permet de limiter les inquiétudes et de rechercher une vie plus tranquille.",
        category: "Désir et bonheur",
        connector: "Toutefois",
        formulationVariants: [
          { statement: "Le bonheur exige de savoir quels désirs méritent réellement d'être poursuivis.", explanation: "Épicure propose un examen des désirs afin de privilégier ceux qui sont nécessaires à une existence sereine et d'écarter ceux qui multiplient inutilement les troubles." },
          { statement: "L'homme peut gagner en tranquillité en limitant les désirs qui ne sont pas nécessaires.", explanation: "Pour Épicure, tous les désirs ne possèdent pas la même valeur : certains sont naturels et nécessaires, tandis que d'autres sont vains et peuvent alimenter l'inquiétude." },
          { statement: "Une vie heureuse suppose une sélection réfléchie des désirs.", explanation: "Le sage ne cherche pas à satisfaire toutes ses envies ; il examine leur nature et leur nécessité afin de préserver la tranquillité de l'âme." }
        ]
      },
      {
        statement: "Tous les désirs ne doivent pas être satisfaits, car certains peuvent produire plus de troubles que de bienfaits.",
        author: "Épicure",
        work: "Lettre à Ménécée",
        quote: "",
        explanation: "Épicure distingue notamment les désirs naturels et nécessaires, les désirs naturels mais non nécessaires et les désirs vains. Cette distinction permet de ne pas confondre le plaisir durable avec la recherche illimitée de biens superflus.",
        category: "Désir et discernement",
        connector: "En ce sens",
        formulationVariants: [
          { statement: "La recherche de tous les plaisirs n'est pas une condition du bonheur.", explanation: "Épicure distingue les plaisirs et les désirs selon leur nécessité et leurs conséquences, plutôt que de recommander leur satisfaction sans limite." },
          { statement: "Le discernement permet de distinguer les désirs qui favorisent la sérénité de ceux qui la compromettent.", explanation: "La classification épicurienne des désirs sert à orienter la conduite vers ce qui est réellement nécessaire à une vie paisible." },
          { statement: "La sagesse consiste à ne pas traiter toutes les envies comme des besoins indispensables.", explanation: "Épicure montre qu'une partie des désirs est superflue et que leur poursuite peut éloigner l'homme de la tranquillité recherchée." }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "Désir, action et puissance de vivre",
    perspective: "Le désir comme dynamisme de l'existence",
    pedagogicalAdvice: "Utile pour nuancer une conception du désir réduit au manque ou à la souffrance.",
    arguments: [
      {
        statement: "Le désir est une force qui pousse l'homme à agir et à persévérer dans son existence.",
        author: "Baruch Spinoza",
        work: "Éthique",
        quote: "",
        explanation: "Pour Spinoza, chaque être tend à persévérer dans son être : c'est le conatus. Chez l'être humain, le désir correspond à cet effort lorsqu'il en prend conscience. Le désir exprime donc aussi une puissance d'agir.",
        category: "Désir et action",
        connector: "Sous un autre angle",
        formulationVariants: [
          { statement: "Le désir constitue un moteur de l'action humaine.", explanation: "Chez Spinoza, le désir exprime consciemment le conatus, c'est-à-dire l'effort par lequel chaque être cherche à persévérer dans son existence." },
          { statement: "Loin d'être seulement un manque, le désir peut manifester une puissance de vivre et d'agir.", explanation: "Spinoza rattache le désir au conatus : désirer, c'est aussi exprimer l'effort propre de l'être humain pour maintenir et accroître sa puissance d'agir." },
          { statement: "Le désir donne une orientation dynamique à l'existence humaine.", explanation: "Le désir est lié chez Spinoza à l'effort de persévérer dans l'être ; il participe donc directement à l'activité humaine." }
        ]
      },
      {
        statement: "Comprendre ses désirs permet de mieux comprendre les causes qui orientent nos actions.",
        author: "Baruch Spinoza",
        work: "Éthique",
        quote: "",
        explanation: "Spinoza analyse le désir comme un affect naturel soumis à des causes. Comprendre ces causes permet de passer d'une dépendance passive aux affects à une activité plus rationnelle et plus consciente.",
        category: "Désir et connaissance de soi",
        connector: "Ainsi",
        formulationVariants: [
          { statement: "L'analyse des désirs peut aider l'homme à comprendre ce qui détermine ses actions.", explanation: "Spinoza inscrit les désirs dans l'ordre naturel des causes : les comprendre permet donc de mieux saisir pourquoi nous agissons comme nous le faisons." },
          { statement: "La connaissance de nos désirs peut contribuer à une conduite plus rationnelle.", explanation: "En identifiant les causes de nos affects, nous pouvons moins subir passivement ce qui nous arrive et mieux orienter notre action." },
          { statement: "Comprendre le désir revient aussi à rechercher les causes qui gouvernent notre comportement.", explanation: "Chez Spinoza, les désirs ne surgissent pas sans causes ; leur compréhension participe donc à une connaissance plus rationnelle de l'homme." }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "Désir, liberté et tension philosophique",
    perspective: "Opposer maîtrise du désir et puissance de désirer",
    pedagogicalAdvice: "Utile pour construire une dissertation dialectique : le désir peut être source de trouble, mais aussi principe d'action.",
    arguments: [
      {
        statement: "Le désir présente une double dimension : il peut être une source d'insatisfaction tout en constituant une force d'action.",
        author: "Baruch Spinoza",
        work: "Éthique",
        quote: "",
        explanation: "Le désir peut être vécu comme manque lorsque l'individu poursuit un objet qu'il n'a pas, mais Spinoza permet aussi de le comprendre comme expression du conatus. Il ne faut donc pas réduire le désir à la seule souffrance.",
        category: "Nuance sur le désir",
        connector: "En définitive",
        formulationVariants: [
          { statement: "Le désir ne se réduit ni au manque ni à la souffrance : il peut aussi exprimer une puissance d'agir.", explanation: "Une analyse du désir doit distinguer l'expérience de l'insatisfaction de sa fonction dynamique dans l'existence humaine." },
          { statement: "Le désir peut être à la fois une tension vers ce qui manque et une énergie qui met l'homme en mouvement.", explanation: "Cette distinction permet d'éviter une conception unilatérale du désir : il peut troubler l'homme, mais aussi orienter son activité." },
          { statement: "Le désir possède une dimension problématique et une dimension créatrice de l'action.", explanation: "La réflexion philosophique peut montrer simultanément les risques d'une dépendance aux désirs et leur rôle dans la dynamique de l'existence." }
        ]
      },
      {
        statement: "Réfléchir sur le désir conduit à distinguer ce qui libère l'homme de ce qui le rend dépendant de ses envies.",
        author: "Épicure",
        work: "Lettre à Ménécée",
        quote: "",
        explanation: "La classification des désirs chez Épicure permet de réfléchir à une liberté pratique : il ne s'agit pas de supprimer tout désir, mais de ne pas devenir dépendant de désirs vains dont la satisfaction exige toujours davantage.",
        category: "Désir et liberté",
        connector: "Dès lors",
        formulationVariants: [
          { statement: "La maîtrise du désir peut être pensée comme une condition d'une plus grande autonomie.", explanation: "En limitant les désirs vains et en privilégiant les besoins essentiels, l'homme réduit sa dépendance à l'égard de biens superflus." },
          { statement: "L'homme devient plus autonome lorsqu'il cesse de considérer toutes ses envies comme des nécessités.", explanation: "La distinction épicurienne des désirs aide à comprendre qu'une vie libre peut reposer sur une réduction des besoins artificiellement multipliés." },
          { statement: "La liberté à l'égard du désir passe par un examen de ce que nous croyons nécessaire.", explanation: "Épicure invite à distinguer les besoins réels des désirs vains afin de préserver une vie plus simple et plus tranquille." }
        ]
      }
    ]
  }
];
