/**
 * BASE DE DONNÉES PÉDAGOGIQUE — DISSERTATION LITTÉRAIRE EN UNE MINUTE
 * Auteur : DIOMANDE SADIA NARCISSE (Côte d'Ivoire)
 * Établissements & Attaches : Lycée Moderne de Biankouma, Université Jean Lorougnon Guédé de Daloa,
 * Université Nangui Abrogoua d’Abobo Adjamé.
 * Niveau : Terminale A - C - D (Nouvelle édition)
 * Contient :
 * - Conseils et règles orthographiques / grammaticales pour la copie de Bac
 * - Tableau synthétique des 16 œuvres littéraires au programme
 * - Méthodologie en 4 mouvements de l'introduction + modèle passe-partout
 * - Structure rigoureuse du développement en paragraphes argumentatifs (Idée + Explication + Illustration)
 * - 4 Sujets types Bac rédigés in extenso (Genres littéraires, Dramaturge/Comique, Poète subjectif vs objectif, Les 2 sortes de roman)
 * - 10 Sujets d'exercices d'entraînement
 */

export interface OeuvreResumeEntry {
  titre: string;
  auteur: string;
  genre: 'Théâtre' | 'Roman' | 'Poème';
  resumeEtPortee: string;
  exemplesCitations?: string[];
}

export interface SujetRedigeDiomande {
  numero: number;
  libelle: string;
  consigne: string;
  introduction: string;
  developpement: {
    axe1: { titre: string; argumentsEtExemples: string[] };
    transition: string;
    axe2: { titre: string; argumentsEtExemples: string[] };
  };
  conclusion: string;
}

export const DIOMANDE_OEUVRES_PROGRAMME: OeuvreResumeEntry[] = [
  {
    titre: "On se chamaille pour un siège",
    auteur: "Hyacinthe Kakou",
    genre: "Théâtre",
    resumeEtPortee: "Enseigne le pardon, la tolérance et la réconciliation nationale après les élections à travers la course au pouvoir de Djinan et sa fille.",
    exemplesCitations: ["Représentation scénique composée en tableaux", "Satire de la cupidité électorale"]
  },
  {
    titre: "Les soleils des indépendances",
    auteur: "Ahmadou Kourouma",
    genre: "Roman",
    resumeEtPortee: "Dénonce la mauvaise gouvernance politique, la stérilité sociale et les abus de pouvoir des nouveaux dirigeants africains postcoloniaux.",
    exemplesCitations: ["Fama et la déchéance de la lignée des Doumbouya", "Critique du parti unique"]
  },
  {
    titre: "Sous le voile de la mariée",
    auteur: "Mathurin Goli Bi Irié",
    genre: "Roman",
    resumeEtPortee: "Évoque le mariage civil dans la société africaine et enrichit le vocabulaire littéraire tout en posant la condition de la femme.",
    exemplesCitations: ["« besoins libidinaux »", "« vieillards grabataires »", "« calvities bourgeonnantes »"]
  },
  {
    titre: "Rebelle",
    auteur: "Fatou Keïta",
    genre: "Roman",
    resumeEtPortee: "Dénonce vigoureusement les mutilations génitales féminines (excision), les mariages forcés et l'asservissement patriarcal.",
    exemplesCitations: ["Combat héroïque et émancipateur de Malimouna"]
  },
  {
    titre: "Le Médecin malgré lui",
    auteur: "Molière",
    genre: "Théâtre",
    resumeEtPortee: "Œuvre comique par excellence qui porte le rire à son plus haut niveau de divertissement et de satire sociale.",
    exemplesCitations: ["Sganarelle et la farce médicale", "Rire pour châtier les mœurs"]
  },
  {
    titre: "La Planète des singes",
    auteur: "Pierre Boulle",
    genre: "Roman",
    resumeEtPortee: "Transporte le lecteur dans une pure illusion de science-fiction où les singes dominent l'espèce humaine, offrant une évasion philosophique.",
    exemplesCitations: ["Inversion des rôles biologiques", "Miroir critique de l'orgueil humain"]
  },
  {
    titre: "Les enfants de Soweto",
    auteur: "Gerum Carlos",
    genre: "Théâtre",
    resumeEtPortee: "Représentation dramatique et cathartique soulageant les spectateurs des traumatismes de l'apartheid.",
    exemplesCitations: ["Théâtre cathartique et mémoire de la révolte étudiante"]
  },
  {
    titre: "Assemien Déhilé, roi de Sanwi",
    auteur: "Bernard Dadié",
    genre: "Théâtre",
    resumeEtPortee: "Expose l'excès d'autorité de Naodou I et reproduit les scènes traditionnelles du milieu rural pour valoriser la culture ancestrale.",
    exemplesCitations: ["Miroir des mœurs royales agni", "Leçons de gouvernance coutumière"]
  },
  {
    titre: "Petit Bodiel",
    auteur: "Amadou Hampâté Bâ",
    genre: "Roman",
    resumeEtPortee: "Conte initiatique animalier où le lecteur s'identifie au personnage du lièvre rusé qui désarme les hommes de leurs maux.",
    exemplesCitations: ["Humour satirique et sagesse peule"]
  },
  {
    titre: "Les Rayons et les Ombres",
    auteur: "Victor Hugo",
    genre: "Poème",
    resumeEtPortee: "Poésie politique et engagée fustigeant la tyrannie de Napoléon III qualifié avec ironie de 'petit Napo'.",
    exemplesCitations: ["La poésie arme politique contre l'usurpation"]
  },
  {
    titre: "Chants d'ombre (« Joal »)",
    auteur: "Léopold Sédar Senghor",
    genre: "Poème",
    resumeEtPortee: "Évocation nostalgique des festins funèbres d'enfance à Joal, célébration culturelle des racines sérères et africaines.",
    exemplesCitations: ["« Je me rappelle les festins funèbres fumant du sang des troupeaux égorgés »"]
  },
  {
    titre: "Demain dès l'aube",
    auteur: "Victor Hugo",
    genre: "Poème",
    resumeEtPortee: "Poésie lyrique intime exprimant le deuil déchirant du poète après la perte tragique de sa fille Léopoldine.",
    exemplesCitations: ["« Vois-tu, je sais que tu m'attends »", "Lyrisme de la douleur paternelle"]
  },
  {
    titre: "Le monde s'effondre",
    auteur: "Chinua Achebe",
    genre: "Roman",
    resumeEtPortee: "Expose les méfaits et limites des sacrifices humains et des traditions rigides chez les Ibo au Nigéria avant la colonisation.",
    exemplesCitations: ["Tragédie d'Okonkwo", "Conflit de valeurs tradition / mutation"]
  },
  {
    titre: "Émaux et Camées",
    auteur: "Théophile Gautier",
    genre: "Poème",
    resumeEtPortee: "Culte parnassien exclusif de la beauté plastique et des rimes ciselées ('L'art pour l'art').",
    exemplesCitations: ["« L'art robuste seul a l'éternité / Le buste survit à la cité »"]
  },
  {
    titre: "Soleils fusillés",
    auteur: "David Diop",
    genre: "Poème",
    resumeEtPortee: "Découverte de la puissance du langage poétique et des métaphores frappantes pour peindre la douleur des peuples noirs.",
    exemplesCitations: ["« Quel triste désert nous assiège »"]
  }
];

export const DIOMANDE_SUJETS_REDIGES: SujetRedigeDiomande[] = [
  {
    numero: 1,
    libelle: "« La poésie est un ornement, le roman un ailleurs, le théâtre un jeu, confondre ces trois genres serait une méprise dommageable. »",
    consigne: "Expliquez et discutez cette affirmation.",
    introduction: "Joindre l'utile à l'agréable a sans doute été l'une des vocations majeures de la littérature, cet ensemble de productions écrites composé de la poésie, du roman et du théâtre. C'est dans l'optique de distinguer rigoureusement ces formes d'expression qu'une affirmation soutient qu'assimiler ces trois genres constituerait une méprise dommageable. En quoi confondre la poésie, le théâtre et le roman serait-il une erreur grave ? Toutefois, ces genres littéraires ne partagent-ils pas d'incontestables similitudes thématiques et fonctionnelles ?",
    developpement: {
      axe1: {
        titre: "Une spécificité originelle, formelle et esthétique irréductible",
        argumentsEtExemples: [
          "Différence définitionnelle : La poésie (poesis) est art du langage rythmé et ornemental ; le roman (romanus) est narration fictionnelle étalée en chapitres ; le théâtre (theatrum) est représentation scénique dramatique en tableaux.",
          "Différence formelle : La poésie s'appuie sur la versification et les rimes (Théophile Gautier, Émaux et Camées) ; le roman sur la prose narrative structurée (Fatou Keïta, Rebelle) ; le théâtre sur le dialogue, la didascalie et le jeu d'acteurs (Hyacinthe Kakou, On se chamaille pour un siège)."
        ]
      },
      transition: "Si les genres littéraires se distinguent nettement par leurs formes et leurs règles de composition, ils n'en demeurent pas moins convergents dans leurs visées sociétales et éthiques.",
      axe2: {
        titre: "Une convergence fondamentale dans les thèmes et la mission didactique",
        argumentsEtExemples: [
          "Dénonciation commune de la mauvaise gouvernance politique : En poésie avec Les Rayons et les Ombres de Victor Hugo contre Napoléon III ; au théâtre avec On se chamaille pour un siège de Kakou ; dans le roman avec Les soleils des indépendances d'Amadou Kourouma.",
          "Vocation didactique et élévation morale du lecteur : Enrichissement du vocabulaire et critique sociale dans Sous le voile de la mariée de Mathurin Goli Bi Irié ; appel au pardon chez Kakou ; métaphores révélatrices chez David Diop."
        ]
      }
    },
    conclusion: "En définitive, poésie, théâtre et roman possèdent des structures stylistiques singulières, mais ils partagent la même mission de porte-voix de l'humanité. Dans un siècle où la jeunesse s'éloigne du livre, ces trois genres sauront-ils conserver leur force d'éveil ?"
  },
  {
    numero: 2,
    libelle: "« Le dramaturge a des objectifs envers le spectateur : amuser la galerie et lui faire prendre conscience. »",
    consigne: "Expliquez et discutez les propos de ce critique contemporain à l'aide des œuvres théâtrales lues ou étudiées.",
    introduction: "Né du cri du cœur, le dramaturge a de tout temps répondu aux besoins de l'humanité dans la joie comme dans l'adversité. C'est ce qui amène un critique à affirmer que le créateur dramatique doit à la fois amuser le public et réveiller sa conscience. Dans notre analyse, nous montrerons d'abord en quoi le théâtre distrait et libère le spectateur par le comique, avant de souligner sa mission décisive d'éveilleur de conscience.",
    developpement: {
      axe1: {
        titre: "La fonction ludique et cathartique du théâtre",
        argumentsEtExemples: [
          "Divertissement par la farce et le rire : Le comique de geste, de mots et de situation permet d'évacuer les tensions du quotidien (Molière, Le Médecin malgré lui).",
          "Fonction cathartique de purification des passions : Représenter les souffrances sur scène soulage le spectateur de son propre mal intérieur (Gerum Carlos, Les enfants de Soweto)."
        ]
      },
      transition: "Toutefois, le rire de scène n'est souvent qu'un moyen subtil pour aborder des vérités bien plus graves.",
      axe2: {
        titre: "L'éveil de conscience et la satire des dérives politiques et morales",
        argumentsEtExemples: [
          "Dénonciation des abus de pouvoir et de la tyrannie politique : La scène met à nu l'arbitraire des dirigeants autocrates (Bernard Dadié, La voix dans le vent avec la mégalomanie de Naodou I).",
          "Miroir du vécu quotidien et valorisation de l'identité : Reproduction des scènes traditionnelles rurales pour conscientiser la communauté (Bernard Dadié, Assemien Déhilé, roi de Sanwi)."
        ]
      }
    },
    conclusion: "Au terme de cette réflexion, le dramaturge apparaît à la fois comme un artisan du rire et un éclaireur de conscience morale. Alors que les écrans concurrencent les salles de spectacle, le théâtre parviendra-t-il à maintenir son rôle de sentinelle civique ?"
  },
  {
    numero: 3,
    libelle: "« Sans se soucier des autres, sans penser à l'atmosphère tendue, le poète est subjectif. »",
    consigne: "Qu'en pensez-vous ?",
    introduction: "La poésie est l'art d'exprimer les faits et les sentiments à travers une mélodie rayonnante. Cette intimité affective pousse certains observateurs à soutenir que le poète ne traduirait que ses émotions intérieures. Dans quelle mesure la poésie est-elle le sanctuaire de la subjectivité personnelle ? Mais le poète ne sait-il pas aussi tourner son regard vers le monde extérieur et porter les luttes de son siècle ?",
    developpement: {
      axe1: {
        titre: "Le sanctuaire lyrique de la subjectivité personnelle",
        argumentsEtExemples: [
          "Confession de la douleur et du deuil intime : Le poète expose ses plaies secrètes sans fard (Victor Hugo, « Demain dès l'aube » pleurant la mort de sa fille Léopoldine).",
          "Autobiographie poétique et contemplation solitaire : Peinture des souvenirs personnels et refuge au sein de la nature (Victor Hugo, Les Contemplations, « La vie aux champs »)."
        ]
      },
      transition: "Cependant, cette sensibilité exacerbée n'empêche nullement le poète de devenir la voix de son peuple.",
      axe2: {
        titre: "L'engagement objectif et le regard tourné vers la cité",
        argumentsEtExemples: [
          "Dénonciation ardente de l'injustice politique : Le poète se fait sentinelle et fustige la dictature (Victor Hugo, Les Rayons et les Ombres, Les Châtiments).",
          "Témoignage culturel et célébration des traditions collectives : Reconstitution des rites immémoriaux et mémoire ancestrale (Léopold Sédar Senghor, Chants d'ombre, poème « Joal »)."
        ]
      }
    },
    conclusion: "En définitive, le poète conjugue le chant intime du cœur et l'interpellation du monde extérieur. En parlant de soi, il parle universellement de nous tous."
  },
  {
    numero: 4,
    libelle: "« Il y a deux sortes de roman : le roman qui nous fait oublier notre vie et le roman qui nous explique notre vie. »",
    consigne: "Justifiez cette affirmation à la lumière des œuvres littéraires lues ou étudiées.",
    introduction: "La question de la finalité de la fiction romanesque est au cœur des débats critiques. C'est dans ce cadre qu'un critique contemporain distingue le roman d'évasion, qui nous fait oublier notre condition, du roman réaliste, qui nous l'explique et l'éclaire. En quoi le roman opère-t-il un décrochage libérateur face au réel ? Et comment parvient-il, par ailleurs, à décrypter les mécanismes de notre société ?",
    developpement: {
      axe1: {
        titre: "Le roman d'évasion : fuite du quotidien et plaisir ludique",
        argumentsEtExemples: [
          "Plongée dans l'imaginaire et la science-fiction : Oublier les tracas terrestres au contact d'un univers inversé ou merveilleux (Pierre Boulle, La Planète des singes).",
          "Divertissement par le conte picaresque et comique : Rire des péripéties et soulager les soucis personnels (Amadou Hampâté Bâ, Petit Bodiel).",
          "Consolation et fierté romanesque : Vivre par procuration des victoires sentimentales (Mathurin Goli Bi Irié, Sous le voile de la mariée avec le triomphe de Dian Kirala)."
        ]
      },
      transition: "Néanmoins, la grandeur du genre réside également dans son pouvoir analytique et éducatif.",
      axe2: {
        titre: "Le roman d'explication : miroir critique et éveilleur de conscience",
        argumentsEtExemples: [
          "Instruction intellectuelle et enrichissement de la langue : Le roman éclaire le réel par un vocabulaire précis et une réflexion philosophique (Sous le voile de la mariée).",
          "Exposition des tares sociales et des coutumes destructrices : Révéler la cruauté de pratiques anachroniques pour instruire (Chinua Achebe, Le monde s'effondre avec la critique des sacrifices humains chez les Ibo).",
          "Dénonciation de la prédation politique et des désillusions : Comprendre les racines de la misère postcoloniale (Ahmadou Kourouma, Les soleils des indépendances)."
        ]
      }
    },
    conclusion: "En somme, le roman accomplit une double prouesse : il est à la fois refuge réconfortant contre l'angoisse et boussole lucide pour affronter l'existence."
  }
];
