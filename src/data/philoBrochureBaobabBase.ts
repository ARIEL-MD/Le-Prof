/**
 * BASE DE DONNÉES PÉDAGOGIQUE — BROCHURE DE PHILOSOPHIE & FRANÇAIS TERMINALE (LE BAOBAB)
 * Auteur / Direction : Mr Augustin Soukouya Sevadouno ("MR SEVA")
 * Éditeur / Collectif : Collection de professeurs réunis autour du « BAOBAB » (1ère Édition)
 * Programme : Terminales Sciences Sociales, Maths et Expérimentales — République de Guinée
 * 
 * Contenu :
 * - Chapitre I : L'Esthétique (L'art, le beau, réalisme vs surréalisme, classification des arts, l'Art Africain traditionnel et ses 7 fonctions sacrées)
 * - Chapitre II : L'Épistémologie (Sciences formelles, sciences humaines/sociales, sciences expérimentales, méthode de Claude Bernard, vérités formelle/objective/utilitaire)
 * - Chapitre III : La Philosophie Politique et Morale (L'État absolutiste/anarchiste/démocratique, le droit positif/naturel/objectif/subjectif, la morale, la liberté, la justice)
 * - Sujets du Baccalauréat Guinéen et Panafricain intégralement traités :
 *    * Sujet Bac Unique 2007 : « L'homme montre mieux son habileté dans les productions surgissant de l'esprit qu'en imitant la nature » (Hegel)
 *    * Sujet : « L'artiste contrairement au savant ne voit pas la nature comme elle est, mais comme il est »
 *    * Sujet Bac 2008 : « S'il est vrai que la beauté d'un objet n'est pas manifestée pour chaque spectateur... » (Alain)
 *    * Sujet Bac Blanc Coyah 2012 : « En Afrique traditionnelle, n'est beau que tout ce qui sert »
 *    * Sujet Bac 2001 : « Quel que soit le point de départ de l'activité scientifique... » (Gaston Bachelard)
 *    * Sujet : « C'est en cherchant l'impossible que le scientifique a toujours réalisé le possible » (Lavoisier, Claude Bernard, Newton)
 *    * Sujet : « La vérité est une conquête progressive et elle est fille du temps »
 *    * Sujet Bac 2003 & 2011 : « Sans État, c'est la guerre de tous contre tous... » (Bossuet, Hobbes, Spinoza)
 *    * Sujet : « Être libre dans la société... » (Liberté vs lois de l'État, dérives anarchiques en Afrique : Somalie, Tchad, Côte d'Ivoire)
 *    * Sujet Bac 2012 : « La justice sans la force est impuissante, la force sans la justice est tyrannique » (Pascal, cohésion et émergence africaine)
 *    * Sujet Bac 2008 : « Le droit à l'expression autorise-t-il à soutenir n'importe quelle opinion ? » (Spinoza, Jefferson, Norbert Zongo)
 *    * Sujets résumés et expliqués : Jean Rostand, Kant, Rousseau, Plotin, Confucius, Fénelon, J.S. Mill, Bac Blanc Guéckédou 2012, Bac II 1995 (Voltaire).
 */

export interface SujetBaobab {
  id: string;
  titre: string;
  sourceExam: string;
  chapitre: "esthetique" | "epistemologie" | "politique_et_morale";
  citationOuTheme: string;
  probleme: string;
  argumentsEtAuteurs: { axe: string; contenu: string; citations: string[] }[];
  conclusion: string;
}

export const FONCTIONS_ART_AFRICAIN_BAOBAB = [
  {
    nom: "Fonction politico-sociale",
    definition: "En Afrique traditionnelle, à l'absence de l'État central, les œuvres d'art sacrées (masques, statues) incarnent une force mythique servant de levain du pouvoir et mobilisent ardemment les populations."
  },
  {
    nom: "Fonction thérapeutique",
    definition: "L'art soigne et guérit en s'appuyant sur la connaissance profonde du monde des esprits et des forces invisibles. Exemple : la musique guérit le Tarassi chez les Touaregs."
  },
  {
    nom: "Fonction magico-religieuse",
    definition: "L'art traduit les religions traditionnelles, les mythes fondateurs et symbolise les êtres surnaturels auxquels obéit la communauté."
  },
  {
    nom: "Fonction ludique et pédagogique",
    definition: "À travers les contes, devinettes et proverbes de la littérature orale, l'art assure l'éducation civique, éthique et intellectuelle des enfants et du groupe."
  },
  {
    nom: "Fonction symbolique et rituelle",
    definition: "Objets de culte incarnant l'esprit des ancêtres et des génies protecteurs (ex: masques des jumeaux au Nigéria, peaux de panthères pour le pouvoir royal)."
  },
  {
    nom: "Fonction commémorative et de communication",
    definition: "Trait d'union sacré entre le monde des vivants et celui des ancêtres morts ; transmet des messages spirituels sans parole à travers les symboles."
  },
  {
    nom: "Fonction esthétique subordonnée à l'utile",
    definition: "L'artiste déploie son génie pour produire des formes harmonieuses et admirables, mais cette beauté sert toujours de réceptacle à une puissance sacrée utile à la communauté."
  }
];

export const SUJETS_TRAITES_LE_BAOBAB: SujetBaobab[] = [
  {
    id: "baobab-art-hegel-2007",
    titre: "L'art et l'artiste : La supériorité des créations de l'esprit sur l'imitation de la nature",
    sourceExam: "Baccalauréat Unique 2007 (Guinée)",
    chapitre: "esthetique",
    citationOuTheme: "« L'homme montre mieux son habileté dans les productions surgissant de l'esprit qu'en imitant la nature » (Hegel)",
    probleme: "L'art doit-il être réduit à une servile reproduction de la nature extérieure ou constitue-t-il une transfiguration spirituelle supérieure créée par le génie de l'homme ?",
    argumentsEtAuteurs: [
      {
        axe: "1. Les limites du réalisme et de l'imitation servile de la nature",
        contenu: "L'art réaliste (Bacon, Zeuxis avec ses raisins trompant les oiseaux) se borne à copier les apparences sensibles. Mais pour Hegel, reproduire la nature est une 'occupation oiseuse et superflue', car le peintre ne fera jamais marcher l'animal peint.",
        citations: ["Hegel : « L'imitation de la nature est une occupation oiseuse et superflue »", "Zeuxis et les oiseaux"]
      },
      {
        axe: "2. La création artistique comme triomphe de l'esprit humain",
        contenu: "L'art surréaliste et idéaliste affirme la souveraineté du moi créateur. L'artiste ajoute son âme à la matière. Pour Kant, l'art n'est pas la représentation d'une belle chose mais la belle représentation d'une chose. La mauvaise idée de l'homme est supérieure à la plus belle fleur car elle participe de l'esprit.",
        citations: ["Kant : « L'art n'est pas la représentation d'une belle chose, mais la belle représentation d'une chose »", "Aristote : « L'art est la forme imposée à la matière par le génie créateur de l'homme »"]
      }
    ],
    conclusion: "L'art dépasse l'imitation mécanique pour s'ériger en recréation du monde où l'esprit humain s'affranchit de la pesanteur naturelle."
  },
  {
    id: "baobab-art-africain-coyah-2012",
    titre: "L'Art Africain traditionnel : La primauté du fonctionnel et de l'utile",
    sourceExam: "Bac Blanc 2012 Coyah (Guinée)",
    chapitre: "esthetique",
    citationOuTheme: "« En Afrique traditionnelle, n'est beau que tout ce qui sert »",
    probleme: "L'art négro-africain traditionnel relève-t-il de la théorie occidentale du désintéressement esthétique ('l'art pour l'art') ou tire-t-il sa véritable valeur de son utilité sociale, spirituelle et communautaire ?",
    argumentsEtAuteurs: [
      {
        axe: "1. Spécificité de l'art africain : un art anonyme, collectif et sacré",
        contenu: "Contrairement aux conceptions parnassiennes (Gautier : 'tout ce qui est utile est laid') et kantiennes du beau désintéressé, l'art africain est indissociable de la vie communautaire. Les masques et statues incarnent des forces protectrices et mobilisent l'organisation sociale précoloniale.",
        citations: ["Aimé Césaire : « Ma bouche sera la bouche des malheureux qui n'ont point de bouche »", "Théophile Gautier : « Tout ce qui est utile est laid » (rejeté en Afrique)"]
      },
      {
        axe: "2. Les multiples fonctions thérapeutiques, religieuses et éducatives",
        contenu: "L'art guérit (thérapie musicale touarègue du Tarassi), commémore les ancêtres, initie la jeunesse par les contes oraux et relie le monde visible au monde invisible. La beauté n'est jamais gratuite, elle est l'efficacité d'un symbole.",
        citations: ["Franz Kafka : « Si les livres que nous lisons ne nous réveillent pas d'un coup de poing sur le crâne, à quoi bon les lire ? »"]
      }
    ],
    conclusion: "En Afrique traditionnelle, le beau est la perfection d'un service rendu à la vie, aux dieux et à la cohésion sociale."
  },
  {
    id: "baobab-science-bachelard-2001",
    titre: "La démarche expérimentale et la rupture épistémologique",
    sourceExam: "Baccalauréat 2001 (Guinée)",
    chapitre: "epistemologie",
    citationOuTheme: "« Quel que soit le point de départ de l’activité scientifique, elle ne peut convaincre pleinement qu’en quittant le domaine de base, si elle expérimente, il faut raisonner, si elle raisonne, il faut l’expérimenter. Toute explication est transcendante » (Gaston Bachelard)",
    probleme: "La science repose-t-elle sur la simple observation passive des faits ou sur un dialogue dialectique rigoureux entre la théorie rationnelle et le contrôle expérimental instrumenté ?",
    argumentsEtAuteurs: [
      {
        axe: "1. Le dépassement des apparences sensibles premières",
        contenu: "L'observation immédiate par les organes des sens est trompeuse. Le savant doit rompre avec l'opinion commune. Rien ne va de soi, rien n'est donné, tout est construit par la raison.",
        citations: ["Bachelard : « Rien ne va de soi, rien n'est donné, tout est construit »", "François Bacon : « On ne commande la nature qu'en lui obéissant »"]
      },
      {
        axe: "2. La dialectique expérimentale de Claude Bernard",
        contenu: "Les trois étapes indissociables : observation du fait -> formulation de l'idée-hypothèse provisoire -> expérimentation par des instruments appropriés (ex: expérience de Claude Bernard sur les lapins devenus carnivores à jeun).",
        citations: ["Claude Bernard : « Le fait suggère l'idée, l'idée dirige l'expérience, l'expérience juge l'idée »"]
      }
    ],
    conclusion: "L'activité scientifique est une conquête permanente qui s'élève au-dessus du sensible par une rationalisation vérifiée dans le réel."
  },
  {
    id: "baobab-etat-bossuet-2003-2011",
    titre: "La nécessité vitale de l'État contre le chaos et l'anarchie",
    sourceExam: "Baccalauréat 2003 et 2011 (Guinée)",
    chapitre: "politique_et_morale",
    citationOuTheme: "« Sans État, c'est la guerre de tous contre tous, les hommes s'entredéchirent au gré de leurs passions désordonnées » (Bossuet)",
    probleme: "L'État est-il une puissance oppressive à abolir ou la seule digue institutionnelle garantissant la paix civile et empêchant la destruction mutuelle des hommes ?",
    argumentsEtAuteurs: [
      {
        axe: "1. L'état de nature comme jungle sauvage et anarchie destructrice",
        contenu: "En l'absence d'autorité politique souveraine, les passions égoïstes font régner la loi du plus fort. Chacun a autant de droit qu'il a de force physique (Hobbes, Bossuet). Les conflits sanglants observés dans certains pays en crise (Somalie, Tchad, Côte d'Ivoire) témoignent de ce chaos lorsque l'État s'effondre.",
        citations: ["Bossuet : « Sans État, c'est la guerre de tous contre tous »", "Thomas Hobbes : « Dans l'État de nature, tout est juste car chacun lutte pour sa propre conservation »"]
      },
      {
        axe: "2. L'État de droit comme garant des libertés civiles",
        contenu: "Par le contrat social, les hommes renoncent à leur violence primitive pour recevoir la sécurité juridique. L'État gendarme assure l'ordre, l'État providence la protection sociale. Selon Spinoza, la fin véritable de l'État n'est pas la tyrannie mais la liberté.",
        citations: ["Spinoza : « La fin de l'État est en réalité la liberté »", "Pascal : « L'État ne doit pas être trop faible sinon nous périssons, ni trop fort sinon il nous écrase »"]
      }
    ],
    conclusion: "L'État est une nécessité absolue pour soustraire l'humanité à la barbarie ; la démocratie constitutionnelle permet d'encadrer sa puissance sans étouffer la justice."
  },
  {
    id: "baobab-justice-force-pascal-2012",
    titre: "La complémentarité de la justice et de la force pour l'émergence africaine",
    sourceExam: "Baccalauréat 2012 (Guinée)",
    chapitre: "politique_et_morale",
    citationOuTheme: "« La justice sans la force est impuissante, la force sans la justice est tyrannique » (Blaise Pascal)",
    probleme: "Comment équilibrer le respect absolu du droit et le pouvoir coercitif de l'État afin d'assurer la stabilité et le développement durable des nations africaines ?",
    argumentsEtAuteurs: [
      {
        axe: "1. L'impuissance de la justice désarmée face aux passions déréglées",
        contenu: "Sans appareil répressif (police, armée, tribunaux souverains), les lois ne sont que des vœux pieux sur papier. Qui commet impunément commet légitimement. L'impunité mine la confiance des citoyens et des investisseurs.",
        citations: ["Blaise Pascal : « Qui commet impunément commet légitimement »", "Paul Valéry : « Si l'État est faible, nous périssons »"]
      },
      {
        axe: "2. La dérive tyrannique de la force brute sans légitimité juridique",
        contenu: "Une force qui n'obéit pas à la justice engendre des dictatures sanguinaires qui étouffent le peuple (exemples historiques en Afrique : Idi Amin Dada en Ouganda, Charles Taylor au Libéria). L'Afrique a un besoin vital d'une justice indépendante pour consolider la démocratie et attirer les partenaires au développement.",
        citations: ["Montesquieu : « Il faut que par la disposition des choses, le pouvoir arrête le pouvoir »"]
      }
    ],
    conclusion: "L'émergence africaine du 21e siècle exige un État républicain fort où la force sert loyalement le triomphe du droit et de l'équité."
  },
  {
    id: "baobab-expression-opinion-2008",
    titre: "Le droit à la liberté d'expression et ses limites éthiques",
    sourceExam: "Baccalauréat 2008 (Guinée)",
    chapitre: "politique_et_morale",
    citationOuTheme: "« Le droit à l’expression autorise-t-il à soutenir n’importe quelle opinion ? »",
    probleme: "La liberté d'expression est-elle un droit absolu et illimité ou doit-elle être régulée par la raison et la loi pour éviter la haine ethnocentriste et la diffamation ?",
    argumentsEtAuteurs: [
      {
        axe: "1. La liberté d'expression comme pilier inaliénable de la démocratie",
        contenu: "Le droit de penser et de parler librement est le moteur de la vérité et le rempart contre l'oppression (Spinoza, Thomas Jefferson). Le journaliste Norbert Zongo a payé de sa vie le devoir d'informer le public.",
        citations: ["Spinoza : « Le citoyen ne peut renoncer à son droit de parler »", "Thomas Jefferson : « La liberté d'expression est le sang même de la démocratie »"]
      },
      {
        axe: "2. Les dérives de la haine et la responsabilité légale du citoyen",
        contenu: "Exprimer n'importe quelle opinion peut détruire la concorde civile (discours de haine, ethnocentrisme virulent en Guinée, diffamation de la vie privée). La liberté des uns s'arrête là où commence celle des autres.",
        citations: ["Voltaire : « Je déteste vos idées mais je suis prêt à mourir pour que vous puissiez les exprimer »"]
      }
    ],
    conclusion: "La liberté d'expression n'est pas le libertinage verbal ; elle grandit lorsqu'elle s'exerce avec maturité civique au service de l'intérêt général."
  }
];
