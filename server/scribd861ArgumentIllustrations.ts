/**
 * Extension littéraire issue du fascicule Scribd 861497276.
 * Les formulations sont reformulées localement : aucune phrase du document source
 * n'est recopiée. Base déterministe, sans IA ni API d'IA.
 */
import type { LiteraryWorkItem } from "./literatureWorkKnowledgeBase";

export interface ArgumentIllustrationItem {
  id: string;
  genre: "Théâtre" | "Poésie" | "Roman";
  functionType: "engagée" | "évasive" | "lyrique" | "didactique";
  argument: string;
  illustration: string;
  workTitle: string;
  author: string;
  themes: string[];
  aliases?: string[];
  confidence: "high" | "medium";
}

export const SCRIBD_861_ARGUMENT_ILLUSTRATIONS: ArgumentIllustrationItem[] = [
  { id:"t-eng-racisme", genre:"Théâtre", functionType:"engagée", argument:"Le théâtre peut dénoncer les discriminations raciales et la ségrégation.", illustration:"La lutte des élèves noirs de Soweto permet de représenter la résistance à une politique scolaire ségrégative.", workTitle:"L'Étudiant de Soweto", author:"Maoundoé Naindouba", themes:["racisme","ségrégation","résistance"], confidence:"high" },
  { id:"t-eng-pouvoir", genre:"Théâtre", functionType:"engagée", argument:"Le théâtre peut mettre en question l'exercice autoritaire du pouvoir.", illustration:"Le parcours de Christophe permet d'interroger les dérives d'un pouvoir devenu oppressif.", workTitle:"La Tragédie du roi Christophe", author:"Aimé Césaire", themes:["pouvoir","oppression","indépendance"], confidence:"high" },
  { id:"t-eng-cupidite", genre:"Théâtre", functionType:"engagée", argument:"Le théâtre peut dénoncer la domination de l'argent dans les relations familiales.", illustration:"Le conflit autour du choix amoureux de Juliette oppose sentiment et intérêt matériel.", workTitle:"Trois prétendants... un mari", author:"Guillaume Oyônô Mbia", themes:["mariage","argent","famille"], confidence:"high" },
  { id:"t-eng-corruption", genre:"Théâtre", functionType:"engagée", argument:"Le théâtre peut critiquer la corruption et les abus des élites.", illustration:"La satire du pouvoir économique et social permet de montrer les mécanismes de tromperie et d'exploitation.", workTitle:"Monsieur Tôgô-Gnini", author:"Bernard Binlin Dadié", themes:["corruption","satire sociale","exploitation"], confidence:"high" },
  { id:"t-eva-divertir", genre:"Théâtre", functionType:"évasive", argument:"Le théâtre peut divertir par le comique des situations et des personnages.", illustration:"L'avarice obsessionnelle d'Harpagon produit des situations comiques tout en permettant une satire des comportements humains.", workTitle:"L'Avare", author:"Molière", themes:["comique","avarice","satire"], confidence:"high" },
  { id:"t-eva-imaginaire", genre:"Théâtre", functionType:"évasive", argument:"Le théâtre peut faire entrer le spectateur dans un univers fantastique ou absurde.", illustration:"La transformation des habitants en rhinocéros crée un univers théâtral étrange et symbolique.", workTitle:"Rhinocéros", author:"Eugène Ionesco", themes:["absurde","imaginaire","conformisme"], confidence:"high" },
  { id:"t-lyr-amour", genre:"Théâtre", functionType:"lyrique", argument:"Le théâtre peut représenter les conflits et les élans amoureux.", illustration:"Le sentiment amoureux de Perdican et Camille se heurte à l'orgueil et aux jeux de parole.", workTitle:"On ne badine pas avec l'amour", author:"Alfred de Musset", themes:["amour","orgueil","lyrisme"], confidence:"high" },
  { id:"t-lyr-passion", genre:"Théâtre", functionType:"lyrique", argument:"Le théâtre peut faire ressentir la passion à travers les relations entre personnages.", illustration:"L'amour contrarié de deux jeunes gens est au cœur de l'action dramatique.", workTitle:"Roméo et Juliette", author:"William Shakespeare", themes:["amour","passion","conflit familial"], confidence:"high" },
  { id:"t-did-ethique", genre:"Théâtre", functionType:"didactique", argument:"Le théâtre peut mettre le spectateur face à un choix moral et à ses conséquences.", illustration:"Le dilemme de Rodrigue entre amour et honneur permet de réfléchir au devoir et à la responsabilité.", workTitle:"Le Cid", author:"Pierre Corneille", themes:["honneur","devoir","dilemme moral"], confidence:"high" },
  { id:"t-did-liberte", genre:"Théâtre", functionType:"didactique", argument:"Le théâtre peut transmettre une réflexion sur la liberté et la dignité collective.", illustration:"Le combat de Lumumba permet d'interroger la souveraineté et les conséquences politiques de l'indépendance.", workTitle:"Une saison au Congo", author:"Aimé Césaire", themes:["liberté","indépendance","dignité"], confidence:"high" },

  { id:"p-eng-enfants", genre:"Poésie", functionType:"engagée", argument:"La poésie peut dénoncer l'exploitation et la souffrance des enfants.", illustration:"La représentation du travail des enfants transforme la poésie en plaidoyer social.", workTitle:"Melancholia", author:"Victor Hugo", themes:["enfance","travail","injustice sociale"], confidence:"high" },
  { id:"p-eng-colonialisme", genre:"Poésie", functionType:"engagée", argument:"La poésie peut dénoncer la violence de la domination coloniale.", illustration:"Le poème construit une image accusatrice des rapports de domination entre colonisateurs et colonisés.", workTitle:"Les Vautours", author:"David Diop", themes:["colonisation","violence","révolte"], confidence:"high" },
  { id:"p-eng-guerre", genre:"Poésie", functionType:"engagée", argument:"La poésie peut dénoncer les violences produites par les conflits religieux et politiques.", illustration:"Le recueil évoque les ravages des guerres de religion et leur dimension tragique.", workTitle:"Les Tragiques", author:"Agrippa d'Aubigné", themes:["guerre","fanatisme","violence"], confidence:"high" },
  { id:"p-eva-reve", genre:"Poésie", functionType:"évasive", argument:"La poésie peut créer un espace de rêve et d'évasion.", illustration:"L'évocation d'un ailleurs exotique transforme le poème en espace de rêverie.", workTitle:"Parfum exotique", author:"Charles Baudelaire", themes:["rêve","exotisme","évasion"], confidence:"high" },
  { id:"p-eva-esthetique", genre:"Poésie", functionType:"évasive", argument:"La poésie peut privilégier la beauté des formes et des images.", illustration:"La disposition graphique des mots participe directement à la construction du sens et de la beauté visuelle.", workTitle:"Calligrammes", author:"Guillaume Apollinaire", themes:["esthétique","image","innovation poétique"], confidence:"high" },
  { id:"p-lyr-amour", genre:"Poésie", functionType:"lyrique", argument:"La poésie peut exprimer l'amour et l'admiration d'un être aimé.", illustration:"Le poème célèbre la beauté et l'attirance pour une femme aimée.", workTitle:"Femme noire", author:"Léopold Sédar Senghor", themes:["amour","femme","beauté"], confidence:"high" },
  { id:"p-lyr-deuil", genre:"Poésie", functionType:"lyrique", argument:"La poésie peut transformer une douleur intime en expression universelle.", illustration:"Le deuil de Léopoldine devient une méditation poétique sur l'absence et la douleur.", workTitle:"Demain, dès l'aube", author:"Victor Hugo", themes:["deuil","douleur","souvenir"], confidence:"high" },
  { id:"p-lyr-mere", genre:"Poésie", functionType:"lyrique", argument:"La poésie peut célébrer l'affection filiale et la figure maternelle.", illustration:"Le poème rend hommage à la mère en exprimant reconnaissance et admiration.", workTitle:"À ma mère", author:"Camara Laye", themes:["maternité","amour filial","souvenir"], confidence:"high" },
  { id:"p-did-travail", genre:"Poésie", functionType:"didactique", argument:"La poésie peut transmettre une leçon sur la valeur du travail.", illustration:"La fable oppose l'apparente recherche d'un trésor à la véritable richesse que constitue le travail.", workTitle:"Le Laboureur et ses enfants", author:"Jean de La Fontaine", themes:["travail","éducation","morale"], confidence:"high" },
  { id:"p-did-humilite", genre:"Poésie", functionType:"didactique", argument:"La poésie peut enseigner l'humilité en montrant les limites de l'orgueil.", illustration:"La course entre le lièvre et la tortue montre que la confiance excessive peut conduire à l'échec.", workTitle:"Le Lièvre et la Tortue", author:"Jean de La Fontaine", themes:["humilité","orgueil","morale"], confidence:"high" },
  { id:"p-did-tradition", genre:"Poésie", functionType:"didactique", argument:"La poésie peut valoriser un patrimoine culturel et les traditions d'une communauté.", illustration:"Le tam-tam est présenté comme un élément important de la mémoire et de la culture africaine.", workTitle:"Le Tam-tam des arènes", author:"Bernard Binlin Dadié", themes:["tradition","culture","patrimoine"], confidence:"medium" },

  { id:"r-eng-colonisation", genre:"Roman", functionType:"engagée", argument:"Le roman peut dévoiler les violences et les effets de la domination coloniale.", illustration:"La trajectoire de Fama permet de représenter la dépossession et la désorganisation sociale liées à la période coloniale et postcoloniale.", workTitle:"Les Soleils des indépendances", author:"Ahmadou Kourouma", themes:["colonisation","dépossession","indépendance"], confidence:"high" },
  { id:"r-eng-racisme", genre:"Roman", functionType:"engagée", argument:"Le roman peut mettre en scène les effets du racisme sur les relations humaines.", illustration:"La relation entre Élise et Arezki se heurte au contexte de la guerre d'Algérie et aux préjugés raciaux.", workTitle:"Élise ou la vraie vie", author:"Claire Etcherelli", themes:["racisme","amour","guerre d'Algérie"], confidence:"high" },
  { id:"r-eng-mariage", genre:"Roman", functionType:"engagée", argument:"Le roman peut critiquer certaines conceptions sociales du mariage et leurs conséquences.", illustration:"Le récit interroge les tensions conjugales, les attentes sociales et les rapports de pouvoir dans le couple.", workTitle:"Sous le voile de la mariée", author:"Mathurin Goli Bi Irié", themes:["mariage","rapports sociaux","société ivoirienne"], confidence:"high" },
  { id:"r-eng-classes", genre:"Roman", functionType:"engagée", argument:"Le roman peut représenter les rapports de domination entre groupes sociaux.", illustration:"La série met en scène les mécanismes de domination exercés par les élites et les petits bourgeois sur les populations moins favorisées.", workTitle:"Sous le pouvoir des Blakoros", author:"Amadou Koné", themes:["domination sociale","pouvoir","inégalités"], confidence:"high" },
  { id:"r-eva-aventure", genre:"Roman", functionType:"évasive", argument:"Le roman peut procurer l'évasion par le voyage et l'aventure.", illustration:"Les péripéties du voyage entraînent le lecteur dans des lieux et des situations éloignés de son quotidien.", workTitle:"Sindbad le voyageur", author:"Tradition des récits de Sindbad", themes:["voyage","aventure","évasion"], confidence:"medium" },
  { id:"r-eva-imaginaire", genre:"Roman", functionType:"évasive", argument:"Le roman peut créer un monde imaginaire qui éloigne momentanément le lecteur du réel.", illustration:"Les animaux anthropomorphisés et le monde merveilleux permettent une lecture fondée sur l'imaginaire.", workTitle:"Petit Bodiel", author:"Amadou Hampâté Bâ", themes:["imaginaire","conte","évasion"], confidence:"high" },
  { id:"r-eva-comique", genre:"Roman", functionType:"évasive", argument:"Le roman peut divertir grâce au comique des personnages et des situations.", illustration:"Les aventures de Tom Sawyer multiplient les situations de jeu, de transgression et de comédie.", workTitle:"Les Aventures de Tom Sawyer", author:"Mark Twain", themes:["comique","aventure","enfance"], confidence:"high" },
  { id:"r-did-jeunesse", genre:"Roman", functionType:"didactique", argument:"Le roman peut montrer les conséquences de choix imprudents et contribuer à la formation du lecteur.", illustration:"Le parcours d'Ebinto met en évidence les conséquences sociales et scolaires de décisions sentimentales et de responsabilités précoces.", workTitle:"Les Frasques d'Ebinto", author:"Amadou Koné", themes:["jeunesse","responsabilité","éducation"], confidence:"high" },
  { id:"r-did-autrui", genre:"Roman", functionType:"didactique", argument:"Le roman peut inviter le lecteur à réfléchir au respect d'autrui et à la solidarité.", illustration:"Le traitement des mendiants par Mour Ndiaye permet d'interroger l'exclusion et le rapport aux plus vulnérables.", workTitle:"La Grève des bàttu", author:"Aminata Sow Fall", themes:["exclusion","solidarité","dignité"], confidence:"high" },
  { id:"r-did-traditions", genre:"Roman", functionType:"didactique", argument:"Le roman peut interroger la place des traditions et les conséquences de leur rupture.", illustration:"Le récit met en tension les obligations familiales, les pratiques traditionnelles et les choix individuels.", workTitle:"Sous l'orage", author:"Seydou Badian", themes:["tradition","modernité","mariage"], confidence:"high" },
  { id:"r-did-bonheur", genre:"Roman", functionType:"didactique", argument:"Le roman peut proposer une réflexion sur la recherche du bonheur et sur les obstacles intérieurs.", illustration:"Le parcours de Julian conduit à une réflexion sur la manière dont les représentations personnelles influencent la quête du bonheur.", workTitle:"L'Homme qui voulait être heureux", author:"Laurent Gounelle", themes:["bonheur","développement personnel","choix"], confidence:"high" },
];

export function findArgumentIllustrations(query: string): ArgumentIllustrationItem[] {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return SCRIBD_861_ARGUMENT_ILLUSTRATIONS.filter(item => {
    const hay = [item.argument, item.illustration, item.workTitle, item.author, item.genre, item.functionType, ...item.themes, ...(item.aliases || [])]
      .join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return q.split(/\s+/).filter(Boolean).some(token => hay.includes(token));
  });
}

export function argumentIllustrationsAsWorks(): LiteraryWorkItem[] {
  return SCRIBD_861_ARGUMENT_ILLUSTRATIONS.map(item => ({
    id: `arg_${item.id}`,
    title: item.workTitle,
    author: item.author,
    genre: item.genre,
    periodAndMovement: "Corpus dissertation littéraire",
    aliases: [item.workTitle, item.author, ...(item.aliases || [])],
    themes: item.themes,
    summaryContext: item.illustration,
    characters: [], literaryDevices: [], keyScenes: [], comparisons: [],
    arguments: [{
      category: `${item.functionType} — ${item.genre}`,
      statement: item.argument,
      explanation: item.illustration,
      quote: "",
      alternateStatements: [], alternateExplanations: [], connector: "Ainsi"
    }],
    keyQuotes: []
  }));
}
