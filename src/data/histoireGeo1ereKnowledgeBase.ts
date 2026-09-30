import { HgThemeLesson } from "./histoireGeoTleKnowledgeBase";

export const histoireGeo1ereKnowledgeBase: {
  name: string;
  version: string;
  level: string;
  country: string;
  methodologies: {
    dissertation: {
      definition: string;
      structure: string[];
      conseilsRedaction: string[];
    };
    commentaireDeDocument: {
      definition: string;
      etapesNODDACI: Record<string, string>;
      recommandations: string[];
    };
    situationEvaluation: {
      definition: string;
      criteres: Record<string, string>;
      demarche: string[];
    };
  };
  geographieLessons: HgThemeLesson[];
  histoireLessons: HgThemeLesson[];
} = {
  name: "Référentiel Officiel d'Histoire-Géographie — Classe de Première (A, C, D) — Côte d'Ivoire",
  version: "2026.1",
  level: "Premières A, C & D",
  country: "Côte d'Ivoire",
  methodologies: {
    dissertation: {
      definition: "La dissertation en classe de Première est un exercice intellectuel d'argumentation ordonnée qui répond à un problème historique ou géographique posé par le sujet selon un plan dialectique ou thématique.",
      structure: [
        "1. INTRODUCTION (en un seul bloc) : Amorce contextuelle / Paradoxe, Définition des termes clés, Problématique (question centrale), Annonce rigoureuse des axes du plan.",
        "2. DÉVELOPPEMENT (2 ou 3 axes équilibrés) : Chaque axe est structuré en paragraphes (Idée directrice -> Argumentation historique/géographique -> Données précises, dates, chiffres, faits concrets -> Transition logique).",
        "3. CONCLUSION (en un seul bloc) : Bilan synthétique des axes examinés, Réponse nette à la problématique, Point de vue personnel objectif, Ouverture vers une perspective historique ou spatiale connexe."
      ],
      conseilsRedaction: [
        "Séparer impérativement l'introduction, le développement et la conclusion par 2 à 3 lignes d'espacement.",
        "Régler la ponctuation et bannir les puces/tirets dans la rédaction finale.",
        "Toujours fonder chaque argument sur des repères historiques précis (dates, traités, personnages) ou statistiques géographiques avérées."
      ]
    },
    commentaireDeDocument: {
      definition: "Le commentaire de documents en Histoire-Géographie repose sur la grille méthodologique officielle NODDACI pour analyser et contextualiser les textes, tableaux statistiques ou cartes.",
      etapesNODDACI: {
        N: "Nature du document (texte de loi, discours, traité diplomatique, article de presse, tableau statistique, carte thématique).",
        O: "Origine ou Source (auteur, fonction, titre de l'ouvrage, date et lieu de parution).",
        D1: "Destinataire (à qui s'adresse le document : peuple, assemblée, communauté internationale).",
        D2: "Date et Contexte historique ou géographique (situer l'événement précis dans le temps et l'espace).",
        A: "Analyse interne (idées principales et secondaires dégagées du document sans paraphrase).",
        C: "Commentaire externe / Portée historique ou spatiale (mise en relation avec le cours, vérification de la véracité, limites ou prolongements).",
        I: "Intérêt historique ou géographique (en quoi ce document aide-t-il à comprendre une rupture, une crise ou une dynamique)."
      },
      recommandations: [
        "Éviter la paraphrase en confrontant systématiquement les extraits cités aux connaissances du cours.",
        "Expliquer les notions clés contenues dans le texte (ex: capitalisme, taylorisme, impérialisme, indirect rule, Diktat, entonnoir renversé, déconcentration)."
      ]
    },
    situationEvaluation: {
      definition: "L'épreuve de situation d'évaluation contextualisée permet d'évaluer la compétence de l'élève face à un problème concret de société à travers 3 consignes hiérarchisées.",
      criteres: {
        CM1: "Pertinence de la production (compréhension du problème posé et respect strict de la consigne).",
        CM2: "Utilisation correcte des outils de la discipline (vocabulaire historique/géographique approprié, exactitude des faits et chiffres).",
        CM3: "Cohérence interne (organisation logique, transitions, absence de contradictions).",
        CP: "Critère de perfectionnement (qualité de la langue, écriture soignée, originalité de la réflexion personnelle)."
      },
      demarche: [
        "Consigne 1 : Identifier le problème ou définir la notion centrale à partir du texte.",
        "Consigne 2 : Expliquer les causes, facteurs ou manifestations à l'aide du document et des acquis du cours.",
        "Consigne 3 : Prendre position de manière critique, proposer des solutions durables ou apprécier la portée du phénomène."
      ]
    }
  },

  // =========================================================================
  // HISTOIRE — PREMIÈRE A, C & D
  // =========================================================================
  histoireLessons: [
    // --- THÈME 1 : LE DÉVELOPPEMENT DU CAPITALISME ET L'INDUSTRIALISATION DE L'EUROPE ---
    {
      id: "hg-1ere-h1-essor-capitalisme",
      discipline: "Histoire",
      themeTitle: "Thème 1 : Le développement du capitalisme et l'industrialisation de l'Europe du XVIIIe au XIXe siècle",
      lessonTitle: "Leçon 1 : L'essor du capitalisme et ses conséquences",
      keyDatesOrStats: {
        "Moyen Âge": "Naissance du capitalisme commercial et maritime (Gênes, Venise)",
        "Fin XVIIIe siècle": "Naissance du capitalisme industriel impulsé par la révolution industrielle en Angleterre",
        "1850-1860": "Essor des banques de dépôt et d'affaires modernes drainant l'épargne populaire",
        "1850-1870": "Période ascendante de prospérité économique, hausse des salaires et plein essor industriel",
        "1870-1896": "Grande dépression et crises cycliques de surproduction (faillites, chômage)",
        "1804 (Angleterre) / 1864 (France)": "Reconnaissance légale du droit de grève ouvrier",
        "1825 (Angleterre) / 1884 (France)": "Légalisation des syndicats ouvriers (Loi Waldeck-Rousseau en France)",
        "1875": "Fondation du Parti Ouvrier Social-Démocrate Allemand (SPD)",
        "1898": "Création du Parti Social-Démocrate Russe (POSDR)",
        "1905": "Création de la SFIO (Section Française de l'Internationale Ouvrière)",
        "1906": "Création du Labour Party (Parti Travailliste britannique)"
      },
      keyConcepts: {
        "Capitalisme": "Système économique et social fondé sur la propriété privée des moyens de production, la libre entreprise, la recherche du profit maximum et le salariat.",
        "Capital": "Ensemble des moyens financiers, matériels et techniques rassemblés pour créer et développer une entreprise.",
        "Action": "Part égale du capital d'une entreprise (société par actions). Son propriétaire est l'actionnaire, rémunéré par des dividendes proportionnels aux bénéfices.",
        "Obligation": "Titre d'emprunt à revenu fixe émis par une entreprise ou l'État. Son propriétaire est l'obligataire, remboursé avec des intérêts.",
        "Bourse des valeurs": "Marché financier réglementé où s'échangent les valeurs mobilières (actions et obligations) selon la loi de l'offre et de la demande (spéculation boursière).",
        "Libre entreprise": "Droit reconnu à tout individu disposant de capitaux de créer une activité économique guidée par la propriété privée.",
        "Libre concurrence": "Régulation du marché par la confrontation ouverte de l'offre et de la demande sans entrave monopolistique de l'État.",
        "Prolétariat": "Classe sociale des ouvriers qui ne possèdent que leur force de travail manuelle, vendue en échange d'un salaire souvent précaire.",
        "Bourgeoisie": "Classe sociale dominante possédant les capitaux, usines, banques et moyens de production."
      },
      causesOrFactors: [
        "Accumulation préalable de capitaux par le commerce maritime triangulaire et colonial.",
        "Développement des banques d'affaires et de dépôt permettant l'investissement lourd.",
        "Émergence de la théorie du libéralisme économique d'Adam Smith (laisser-faire, laisser-passer, État arbitre)."
      ],
      manifestationsOrDevelopments: [
        "Mutation des formes du capitalisme : mercantile (marchands de Venise), industriel (usines), financier et bancaire (bourses des valeurs).",
        "Cycles économiques contrastés : phase d'expansion (1850-1870) suivie d'une phase de crise de surproduction (1870-1896).",
        "Structuration de la société en classes inégales : Bourgeoisie dominante, Classes moyennes, Prolétariat exploité."
      ],
      consequencesOrEvaluation: [
        "Naissance de la question sociale et luttes ouvrières (pétitions, bris de machines/luddisme, grèves).",
        "Conquêtes sociales majeures : droit de grève, syndicalisme, réduction des journées de travail, congés payés, retraite ouvrière, interdiction du travail des enfants.",
        "Polarisation politique mondiale : essor de la démocratie libérale multipartiste face aux idéologies socialistes et communistes (Karl Marx dénonçant l'exploitation de l'homme par l'homme).",
        "Poussée vers l'impérialisme colonial pour chercher des débouchés et écouler la surproduction."
      ],
      examDissertationPlan: {
        problemStatement: "Dans quelle mesure l'essor du capitalisme au XIXe siècle a-t-il bouleversé les structures économiques et sociales de l'Europe ?",
        axes: [
          {
            axeTitle: "Axe 1 : Un système économique révolutionnaire fondé sur les valeurs libérales et les nouveaux instruments financiers",
            arguments: [
              "Les principes cardinaux du libéralisme : libre entreprise, propriété privée, recherche du profit et régulation par l'offre et la demande.",
              "Les instruments modernes de financement : sociétés anonymes par actions, obligations, rôle prépondérant des banques et spéculation boursière.",
              "Une dynamique d'expansion sans précédent stimulée par l'industrialisation et l'accumulation de capitaux."
            ]
          },
          {
            axeTitle: "Axe 2 : Des crises cycliques aiguës et des bouleversements sociaux aux conséquences politiques durables",
            arguments: [
              "L'instabilité inhérente au capitalisme : cycles d'expansion (1850-1870) alternant avec de graves crises de surproduction (1870-1896).",
              "La fracture sociale entre bourgeoisie opulente et prolétariat précarisé vivant dans l'extrême misère.",
              "L'émergence des luttes syndicales, des partis socialistes (SPD, SFIO, Labour) et la ruée vers la colonisation pour écouler les stocks."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-h2-revolutions-industrielles",
      discipline: "Histoire",
      themeTitle: "Thème 1 : Le développement du capitalisme et l'industrialisation de l'Europe du XVIIIe au XIXe siècle",
      lessonTitle: "Leçon 2 : Les révolutions industrielles",
      keyDatesOrStats: {
        "1700-1800": "Explosion démographique européenne : la population passe de 70 à 130 millions d'habitants",
        "1780-1810": "Première Révolution Industrielle (Grande-Bretagne, charbon/houille, textile, sidérurgie)",
        "1782": "Machine à vapeur perfectionnée par l'Écossais James Watt",
        "1854": "Procédé Bessemer pour la fabrication industrielle de l'acier et moteur thermique",
        "1867": "Invention de la dynamite par Alfred Nobel",
        "1869": "Invention de la dynamo industrielle par Zénobe Gramme",
        "1876": "Alternateur électrique breveté par Nikola Tesla",
        "1879": "Première locomotive électrique par Werner von Siemens",
        "1880-1900": "Deuxième Révolution Industrielle (Allemagne, USA, pétrole, électricité, chimie, acier)",
        "1883": "Moteur à explosion de Gottlieb Daimler",
        "1885": "Vaccin contre la rage (Pasteur) et premier téléphone (Graham Bell et Thomas Edison)",
        "1887": "Découverte des ondes électromagnétiques par Heinrich Hertz"
      },
      keyConcepts: {
        "Révolution industrielle": "Transition historique fondamentale des méthodes de production artisanales manuelles vers la production industrielle mécanisée en usine.",
        "Taylorisme": "Organisation scientifique du travail (OST) théorisée par Frederick Taylor, fondée sur la parcellisation des tâches et le travail à la chaîne.",
        "Standardisation": "Fabrication standardisée en série d'objets ou pièces identiques interchangeables pour abaisser le coût unitaire.",
        "Cartel (Concentration horizontale)": "Accord ou entente entre entreprises indépendantes fabriquant le même produit afin de fixer les prix et se partager les marchés.",
        "Trust (Concentration verticale)": "Fusion financière d'entreprises assurant les étapes successives d'une filière (matière première, transformation, distribution) sous une direction unique."
      },
      causesOrFactors: [
        "Ressources minières et énergétiques abondantes : fer, charbon (houille), pétrole, force hydraulique.",
        "Capitaux considérables accumulés par le commerce colonial et maritime.",
        "Explosion démographique fournissant une main-d'œuvre abondante à bon marché et un marché de consommation en constante expansion.",
        "Vague sans précédent d'inventions scientifiques et techniques appliquées à la production."
      ],
      manifestationsOrDevelopments: [
        "1ère Révolution (1780-1810) : Charbon, machine à vapeur, textile, rails, sidérurgie en Angleterre.",
        "2ème Révolution (1880-1900) : Électricité, pétrole, moteur à explosion, acier, chimie organique en Allemagne et aux États-Unis.",
        "Nouveaux modes de production : mécanisation systématique, travail à la chaîne (taylorisme), standardisation, trusts et cartels, recours massif à la publicité."
      ],
      consequencesOrEvaluation: [
        "Essor fulgurant de la productivité et baisse des coûts de production.",
        "Urbanisation galopante et exode rural massif vers les bassins miniers et industriels.",
        "Triomphe de la bourgeoisie d'affaires et expansion du prolétariat ouvrier.",
        "Déclin de l'artisanat traditionnel, surproduction cyclique et rivalités économiques conduisant aux conquêtes coloniales."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi les révolutions industrielles ont-elles transformé l'économie mondiale et la société européenne au XIXe siècle ?",
        axes: [
          {
            axeTitle: "Axe 1 : Deux vagues d'innovations scientifiques et techniques bouleversant les modes de production",
            arguments: [
              "La première révolution industrielle anglaise basée sur la houille, le textile et la machine à vapeur de James Watt.",
              "La seconde révolution industrielle multipolaire (Allemagne, USA) propulsée par le pétrole, l'électricité, la chimie et l'acier.",
              "La rationalisation du travail : taylorisme, travail à la chaîne, standardisation et concentrations d'entreprises (cartels et trusts)."
            ]
          },
          {
            axeTitle: "Axe 2 : Des retombées économiques et sociales ambivalentes",
            arguments: [
              "L'essor de la production de masse, l'urbanisation rapide et l'hégémonie économique européenne.",
              "Les revers sociaux : déclin de l'artisanat, exploitation ouvrière, crises de surproduction et dépendance en matières premières poussant à l'impérialisme."
            ]
          }
        ]
      }
    },

    // --- THÈME 2 : L'IMPÉRIALISME EN AFRIQUE DU XIXe À LA PREMIÈRE MOITIÉ DU XXe SIÈCLE ---
    {
      id: "hg-1ere-h3-imperialisme-berlin",
      discipline: "Histoire",
      themeTitle: "Thème 2 : L'impérialisme en Afrique du XIXe à la première moitié du XXe siècle",
      lessonTitle: "Leçon 1 : Le mouvement impérialiste et le congrès de Berlin",
      keyDatesOrStats: {
        "1876-1882": "Expéditions de Henry Morton Stanley financées par Léopold II de Belgique dans le bassin du Congo",
        "1880": "Traité entre Savorgnan de Brazza et le roi Makoko plaçant la rive droite du Congo sous protectorat français",
        "15 nov 1884 - 26 fév 1885": "Tenue de la Conférence de Berlin convoquée par le chancelier allemand Otto von Bismarck",
        "28 juillet 1885": "Discours célèbre de Jules Ferry à la Chambre des députés justifiant l'impérialisme colonial français",
        "14 puissances": "Participants à Berlin (13 États européens dont France, GB, Allemagne, Portugal, Belgique, et les États-Unis)"
      },
      keyConcepts: {
        "Impérialisme": "Politique d'expansion et de domination politique, militaire, économique et culturelle exercée par des puissances sur d'autres peuples et territoires.",
        "Congrès de Berlin": "Conférence internationale diplomatique réunie à Berlin sous l'égide de Bismarck pour régler l'affaire du Congo et codifier le partage colonial de l'Afrique.",
        "Principe de l'occupation effective": "Règle (Articles 34 et 35 de l'Acte de Berlin) imposant à toute puissance coloniale occupant une côte africaine d'y établir une autorité suffisante et de la notifier officiellement aux autres signataires.",
        "Scramble for Africa": "Course effrénée et ruée des puissances européennes pour la conquête et le partage territorial du continent africain consécutives à la conférence de Berlin."
      },
      causesOrFactors: [
        "Causes économiques profondes : besoin urgent de débouchés pour la surproduction industrielle, quête de matières premières et d'énergies, placement avantageux de capitaux.",
        "Causes politiques et stratégiques : prestige national, recherche de bases navales de ravitaillement, démonstration de puissance impériale.",
        "Causes démographiques : forte croissance démographique européenne cherchant des terres d'émigration.",
        "Prétextes idéologiques et moraux (raisons avouées) : mission civilisatrice envers les peuples d'Afrique prétendument 'sans civilisation', évangélisation chrétienne, explorations scientifiques."
      ],
      manifestationsOrDevelopments: [
        "Tensions coloniales aiguës avant 1884 : rivalité tripartite au Congo entre la Belgique (Stanley), la France (Brazza) et le Portugal (droits historiques).",
        "L'Acte final de Berlin : liberté de navigation et de commerce sur le Congo et le Niger, interdiction de la traite négrière, création de l'État Indépendant du Congo sous tutelle personnelle de Léopold II.",
        "Adoption de la règle d'occupation effective obligeant les puissances à envoyer des colonnes militaires à l'intérieur des terres."
      ],
      consequencesOrEvaluation: [
        "Déclenchement officiel de la conquête militaire et du démembrement des royaumes africains.",
        "Tracé arbitraire des frontières balkanisant les ethnies et les peuples africains.",
        "Réglementation temporaire des rivalités inter-européennes au détriment absolu de la souveraineté africaine."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi la conférence de Berlin (1884-1885) constitue-t-elle l'aboutissement des rivalités impérialistes et le tournant du destin africain ?",
        axes: [
          {
            axeTitle: "Axe 1 : Des motivations impérialistes multiples sous couvert d'une mission humanitaire",
            arguments: [
              "Les causes profondes : impératifs économiques (débouchés, matières premières) et rivalités géopolitiques de prestige.",
              "Les justifications morales et scientifiques : mission civilisatrice, prosélytisme chrétien et explorations géographiques.",
              "La crise du Congo et la convocation de la conférence par Bismarck pour éviter un conflit armé généralisé en Europe."
            ]
          },
          {
            axeTitle: "Axe 2 : Les résolutions de Berlin et leurs conséquences fatidiques pour le continent africain",
            arguments: [
              "L'Acte final : liberté fluviale, abolition formelle de la traite et clause d'occupation effective (art. 34-35).",
              "Le signal de la ruée coloniale ('Scramble') : démantèlement des États traditionnels africains et frontières artificielles porteuses de conflits futurs."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-h4-resistances-afrique-ci",
      discipline: "Histoire",
      themeTitle: "Thème 2 : L'impérialisme en Afrique du XIXe à la première moitié du XXe siècle",
      lessonTitle: "Leçon 2 : Les résistances aux conquêtes territoriales en Afrique : exemple de la Côte d'Ivoire",
      keyDatesOrStats: {
        "1895": "Création de la fédération de l'AOF (Afrique Occidentale Française) avec Dakar pour capitale",
        "1897": "Installation de Samory Touré à Kong après avoir été chassé de Guinée",
        "1898": "Capture de Samory Touré à Guélémou (Guéoulé) par le capitaine Gouraud",
        "1900": "Mort de Samory Touré en déportation au Gabon (Ndjoelé)",
        "1893-1912": "Résistance armée et farouche des N'gban (Baoulé)",
        "1898-1920": "Résistance prolongée du peuple Lobi dans le Nord-Est ivoirien",
        "1906": "Résistance armée des Bété à Daloa sous la conduite du chef de guerre Zokou Gbeuli",
        "1907-1914": "Résistance héroïque du peuple Gouro"
      },
      keyConcepts: {
        "Indirect Rule (Administration indirecte)": "Système colonial britannique (Lord Lugard) conservant et utilisant les autorités et structures coutumières locales pour gouverner et collecter l'impôt.",
        "Direct Rule (Administration directe)": "Système colonial français centralisé, pyramidal et coercitif, où l'administration est dirigée directement par des fonctionnaires français depuis la métropole jusqu'aux cercles.",
        "Commandant de cercle": "Véritable pivot de l'administration coloniale française, cumulant les pouvoirs de juge, administrateur, chef de police, receveur et percepteur.",
        "Guerre de terre brûlée": "Tactique militaire consistant à détruire récoltes, villages et puits pour priver l'armée ennemie de toute ressource de ravitaillement.",
        "Guérilla": "Stratégie de harcèlement militaire par petites unités mobiles procédant par embuscades, attaques surprises et retraites rapides."
      },
      causesOrFactors: [
        "Causes économiques : rejet brutal de l'impôt de capitation en numéraire, corvées obligatoires, pillage des récoltes et terres fertiles.",
        "Causes politiques et stratégiques : refus catégorique de la perte d'indépendance, déchéance des chefs traditionnels, confiscation forcée des fusils.",
        "Causes socioculturelles : rejet de l'assimilationnisme culturel et de la religion chrétienne, protection des coutumes ancestrales."
      ],
      manifestationsOrDevelopments: [
        "Résistances organisées (États et chefs de guerre à armée régulière) : Samory Touré dans le Nord, Kassi Dihyé (roi du N'Dénié), Zokou Gbeuli à Daloa.",
        "Résistances spontanées et lignagères (sociétés segmentaires sans armée permanente) : Baoulé N'gban (1893-1912), Gouro (1907-1914), Lobi (1898-1920).",
        "Utilisation remarquable des tactiques d'embuscades en forêt dense, sièges de postes coloniaux et terre brûlée."
      ],
      consequencesOrEvaluation: [
        "Échec militaire des résistances face à la supériorité numérique, à la puissance de feu et à la discipline des troupes coloniales.",
        "Bilan humain très lourd : déportations (Samory, Zokou Gbeuli), exécutions de chefs, famine et désolation.",
        "Mise sous tutelle administrative rigide des populations et triomphe de l'ordre colonial."
      ],
      examDissertationPlan: {
        problemStatement: "Quelles furent les causes, les modalités et les raisons de l'échec des résistances à la conquête coloniale en Côte d'Ivoire ?",
        axes: [
          {
            axeTitle: "Axe 1 : Un soulèvement motivé par les abus coloniaux et diversifié dans ses formes d'expression",
            arguments: [
              "Les origines de la révolte : pillage économique (impôt, corvée), spoliation foncière et atteinte à la souveraineté et aux croyances ancestrales.",
              "Les résistances organisées menées par des chefs militaires illustres (Samory Touré, Zokou Gbeuli, Kassi Dihyé).",
              "Les résistances populaires spontanées en milieu forestier et savanicole (Baoulé, Gouro, Lobi) recourant à la guérilla et à la terre brûlée."
            ]
          },
          {
            axeTitle: "Axe 2 : L'écrasement des résistances et le triomphe de l'administration coloniale directe",
            arguments: [
              "Les causes de la défaite : déséquilibre technologique flagrant (mitrailleuses, canons), manque de cohésion entre peuples ivoiriens et trahisons locales.",
              "Le bilan dramatique : pertes humaines colossales, déportation des chefs et assujettissement au système de l'administration directe de l'AOF."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-h5-colonisation-cote-ivoire",
      discipline: "Histoire",
      themeTitle: "Thème 2 : L'impérialisme en Afrique du XIXe à la première moitié du XXe siècle",
      lessonTitle: "Leçon 3 : La colonisation et les résistances en Côte d'Ivoire",
      keyDatesOrStats: {
        "1881": "Création de la 1ère plantation de café à Elima (Aboisso) par Arthur Verdier",
        "1882": "Création de la 1ère plantation de cacao à Assinie par Amédée de Brétignière",
        "10 mars 1893": "Décret proclamant la création officielle de la colonie de Côte d'Ivoire (Capitale : Grand-Bassam, Gouverneur : Louis Gustave Binger)",
        "1893-1908": "Phase de la 'pénétration pacifique' (Binger, Clozel) basée sur les traités d'amitié",
        "1908-1920": "Phase de la 'politique de la manière forte' ou pacification brutale par Gabriel Angoulvant",
        "1910": "Révolte des Abbey et assassinat du lieutenant Rubino à Agboville",
        "1908-1910": "Répression sanguinaire des Baoulé : la population chute tragiquement de 1 500 000 à 260 000 âmes",
        "1916-1917": "Exode passif massif : plus de 12 000 Ivoiriens fuient vers la Gold Coast britannique"
      },
      keyConcepts: {
        "Économie de traite": "Système économique colonial basé sur le prélèvement et l'exportation brute de matières premières agricoles/minières vers la métropole et l'importation de produits manufacturés.",
        "Pénétration pacifique": "Stratégie initiale de colonisation préconisée par Binger et Clozel privilégiant la négociation de traités de protectorat et la collaboration locale sans recours systématique aux armes.",
        "Politique de la manière forte": "Doctrine de soumission militaire brutale appliquée par le gouverneur Gabriel Angoulvant (désarmement forcé, amendes de guerre écrasantes, déportations, destructions de villages).",
        "Impôt de capitation": "Contribution financière uniforme obligatoire prélevée sur chaque individu âgé de 10 ans et plus dans la colonie (2,5 à 6 francs par personne).",
        "Résistances passives": "Formes non violentes de refus de l'ordre colonial : fuite dans les pays voisins (Gold Coast, Liberia), désertion des villages, boycott des cultures obligatoires et de la monnaie coloniale."
      },
      causesOrFactors: [
        "Volonté de la France de rentabiliser sa colonie en lui imposant le principe d'autofinancement.",
        "Nécessité d'approvisionner l'industrie métropolitaine en produits tropicaux (café, cacao, bois, huile de palme, caoutchouc).",
        "Échec de la méthode douce de Binger qui laissait la majorité du pays insoumise à l'autorité coloniale."
      ],
      manifestationsOrDevelopments: [
        "Transition vers la manière forte d'Angoulvant (1908-1920) : opérations combinées de ratissage militaire, incendies de campements et internements.",
        "Mise en place de l'appareil d'exploitation : impôts de capitation, travaux forcés (prestations gratuites de 12 jours par an), corvées (2 à 6 semaines par an sur les voies ferrées et routes).",
        "Monopole des firmes de négoce européennes (CFAO, CFCI, SCOA, Unilever) contrôlant les prix d'achat au détriment des planteurs indigènes.",
        "Résistances armées résolues : révolte des Abbey (1910), résistance des Baoulé, Gouro et Dan ; couplée aux résistances passives (exode massif vers le Ghana)."
      ],
      consequencesOrEvaluation: [
        "Soumission militaire totale du territoire ivoirien achevée vers 1920.",
        "Désastre démographique dans les régions rebelles (les Baoulé perdent plus de 80% de leurs effectifs).",
        "Désarticulation des structures socio-économiques traditionnelles au profit d'une économie monétaire dépendante et extravertie."
      ],
      examDissertationPlan: {
        problemStatement: "Comment la conquête et l'exploitation coloniale en Côte d'Ivoire ont-elles conduit aux résistances des populations locales ?",
        axes: [
          {
            axeTitle: "Axe 1 : Deux étapes de conquête et l'instauration d'un appareil d'exploitation économique coercitif",
            arguments: [
              "De la pénétration pacifique inefficace de Binger (1893-1908) à la politique brutale de la manière forte d'Angoulvant (1908-1920).",
              "Les mécanismes de l'économie de traite : impôt de capitation, réquisition de main-d'œuvre, travail forcé, monopoles des comptoirs (CFAO, SCOA).",
              "Le développement forcé des cultures de rente (café d'Arthur Verdier, cacao de Brétignière) au détriment de l'agriculture vivrière."
            ]
          },
          {
            axeTitle: "Axe 2 : L'expression plurielle des résistances ivoiriennes et leur lourd tribut",
            arguments: [
              "Les résistances actives et armées face à la brutalité coloniale (Abbey en 1910, Baoulé, Gouro, Dan).",
              "Les résistances passives quotidiennes : désertion des corvées, refus des monnaies coloniales et exode massif vers la Gold Coast.",
              "Le bilan dramatique : saignées démographiques, déstructuration des royautés et soumission définitive en 1920."
            ]
          }
        ]
      }
    },

    // --- THÈME 3 : LES GUERRES ET LES VIOLENCES DE MASSE DU XXe SIÈCLE À NOS JOURS ---
    {
      id: "hg-1ere-h6-premiere-guerre-mondiale",
      discipline: "Histoire",
      themeTitle: "Thème 3 : Les guerres et les violences de masse du XXème siècle à nos jours",
      lessonTitle: "Leçon 1 : La Première Guerre mondiale : causes et conséquences",
      keyDatesOrStats: {
        "1879 / 1882 / 1883": "Formation de la Triple Alliance (Triplice) : Allemagne, Autriche-Hongrie, Italie",
        "1893 / 1904 / 1907": "Formation de la Triple Entente : France, Russie, Royaume-Uni",
        "28 juin 1914": "Attentat de Sarajevo : assassinat de l'archiduc François-Ferdinand d'Autriche par Gavrilo Princip",
        "28 juillet - 4 août 1914": "Engrenage des déclarations de guerre et début du conflit généralisé",
        "6 avril 1917": "Entrée en guerre des États-Unis aux côtés des Alliés",
        "11 novembre 1918": "Signature de l'armistice de Rethondes mettant fin aux combats",
        "28 juin 1919": "Signature du Traité de Versailles sanctionnant l'Allemagne et créant la SDN",
        "8,5 à 9 millions": "Nombre de soldats morts au combat pendant la Grande Guerre",
        "20 millions": "Nombre de blessés et mutilés de guerre ('Gueules cassées')",
        "132 milliards Mark-or": "Montant des réparations imposées à l'Allemagne par le Traité de Versailles"
      },
      keyConcepts: {
        "Triple Alliance (Triplice)": "Bloc défensif unissant l'Empire allemand, l'Autriche-Hongrie et l'Italie (l'Italie se déclarera neutre en 1914 puis rejoindra les Alliés en 1915).",
        "Triple Entente": "Alliance diplomatique et militaire défensive liant la France, la Russie tsariste et le Royaume-Uni.",
        "Course aux armements": "Compétition militaire acharnée entre grandes puissances avant 1914 pour accroître les effectifs d'armée et perfectionner l'armement (artillerie, flottes de guerre).",
        "Attentat de Sarajevo": "Événement déclencheur de la guerre où l'héritier du trône austro-hongrois est abattu en Bosnie par un nationaliste serbe de la 'Main Noire'.",
        "Diktat de Versailles": "Terme allemand désignant le Traité de Versailles du 28 juin 1919, perçu comme une paix punitive imposée par la force et sans négociation.",
        "Société des Nations (SDN)": "Organisation internationale créée en 1919 (siège à Genève) pour préserver la paix collective et la sécurité mondiale, issue des 14 points de Woodrow Wilson."
      },
      causesOrFactors: [
        "Tensions politiques et territoriales : contentieux franco-allemand sur l'Alsace-Lorraine (perdue en 1871) ; rivalité austro-russe pour le contrôle des Balkans.",
        "Rivalités économiques et coloniales : concurrence commerciale agressive de l'Allemagne (dumping), crises marocaines de 1905 et 1911 opposant Paris et Berlin.",
        "Course effrénée aux armements et exaltation exacerbée des nationalismes patriotiques.",
        "L'engrenage fatal du système d'alliances automatiques après l'ultimatum austro-hongrois à la Serbie en juillet 1914."
      ],
      manifestationsOrDevelopments: [
        "Guerre de mouvement (1914), suivie de l'enlisement dans une effroyable guerre de position et de tranchées (1915-1917 : Verdun, Somme).",
        "Mondialisation du conflit avec l'engagement des troupes coloniales (Tirailleurs sénégalais) et l'intervention décisive des USA en 1917.",
        "Retrait russe consécutif aux révolutions bolcheviques de 1917 et offensive alliée victorieuse de 1918."
      ],
      consequencesOrEvaluation: [
        "Désastre humain sans précédent : près de 9 millions de morts, traumatisme psychologique, déficit des naissances et vieillissement accéléré.",
        "Catastrophe matérielle et financière : ruine de l'Europe belligérante (dettes colossales) au profit de l'enrichissement des USA et du Japon.",
        "Bouleversement géopolitique : disparition de 4 empires (Allemand, Austro-Hongrois, Russe, Ottoman), naissance de nouveaux États en Europe centrale.",
        "Germes du conflit suivant : humiliations territoriales et militaires du Traité de Versailles ('Diktat') et faiblesses congénitales de la SDN."
      ],
      examDissertationPlan: {
        problemStatement: "Comment les rivalités européennes ont-elles conduit au premier conflit mondial et en quoi ses conséquences ont-elles bouleversé le monde ?",
        axes: [
          {
            axeTitle: "Axe 1 : L'accumulation des tensions géopolitiques et l'embrasement par le jeu des alliances",
            arguments: [
              "Les litiges territoriaux (Alsace-Lorraine, Balkans) et les rivalités économiques et coloniales (Maroc).",
              "La polarisation en deux blocs armés (Triplice et Triple Entente) et la course intensive aux armements.",
              "L'attentat de Sarajevo et la mécanique irréversible des déclarations de guerre en été 1914."
            ]
          },
          {
            axeTitle: "Axe 2 : Un bilan cataclysmique et une réorganisation fragile de l'ordre international",
            arguments: [
              "Le choc démographique, la ruine matérielle et le déclassement financier de l'Europe au profit des États-Unis.",
              "Le redécoupage territorial et les clauses punitives du traité de Versailles contre l'Allemagne.",
              "La création de la Société des Nations (SDN) et les germes d'une instabilité future."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-h7-deuxieme-guerre-mondiale",
      discipline: "Histoire",
      themeTitle: "Thème 3 : Les guerres et les violences de masse du XXème siècle à nos jours",
      lessonTitle: "Leçon 2 : La Deuxième Guerre mondiale : causes et conséquences",
      keyDatesOrStats: {
        "24 octobre 1929": "Krach de Wall Street déclenchant la Grande Dépression économique mondiale",
        "30 janvier 1933": "Adolf Hitler accède légalement au pouvoir comme chancelier du Reich allemand",
        "1935-1936": "Violation du Traité de Versailles par Hitler (rétablissement du service militaire, remilitarisation de la Rhénanie)",
        "Octobre 1936": "Création de l'Axe Rome-Berlin (accord d'amitié entre Hitler et Mussolini)",
        "Mars 1938": "L'Anschluss : annexion militaire de l'Autriche par l'Allemagne nazie",
        "Septembre 1938": "Accords de Munich capitulant face aux exigences hitlériennes sur les Sudètes",
        "Août 1939": "Pacte de non-agression germano-soviétique signé par Ribbentrop et Molotov",
        "1er septembre 1939": "Invasion de la Pologne par la Wehrmacht déclenchant la Deuxième Guerre mondiale",
        "8 mai 1945 / 2 sept 1945": "Capitulation sans condition de l'Allemagne nazie puis du Japon",
        "26 juin 1945": "Signature de la Charte de San Francisco créant l'Organisation des Nations Unies (ONU)",
        "50 à 60 millions": "Nombre effroyable de victimes de la guerre (dont plus de 30 millions en Europe et 20 millions en URSS)",
        "6 millions": "Nombre de Juifs d'Europe exterminés dans les camps nazis (la Shoah)"
      },
      keyConcepts: {
        "Régime totalitaire": "Régime politique à parti unique exerçant un contrôle absolu sur la société, l'économie, la culture et les consciences (nazisme, fascisme, stalinisme).",
        "Espace vital (Lebensraum)": "Doctrine géopolitique nazie théorisant la nécessité pour l'Allemagne d'annexer de vastes territoires à l'Est pour assurer la subsistance de la prétendue race aryenne.",
        "Axe Rome-Berlin-Tokyo": "Alliance militaire des puissances dictatoriales et impérialistes (Allemagne, Italie fasciste, Japon militariste) opposée aux Alliés.",
        "Shoah": "Génocide et extermination industrielle systématique de 6 millions de Juifs orchestrés par le Troisième Reich nazi.",
        "Accords de Yalta (février 1945)": "Conférence entre Roosevelt, Churchill et Staline préparant la dénazification, le partage de l'Allemagne en zones d'occupation et la création de l'ONU."
      },
      causesOrFactors: [
        "Les rancœurs explosives nées des traités de 1919 et l'inefficacité notoire de la Société des Nations.",
        "La crise économique mondiale de 1929 provoquant chômage massif, faillites et triomphe des régimes totalitaires fascistes et nazis.",
        "Les coups de force successifs d'Hitler encouragés par l'aveuglement et la politique d'apaisement des démocraties occidentales.",
        "Les pactes d'agression (Axe Rome-Berlin, Pacte antikomintern, Pacte germano-soviétique de partage de la Pologne)."
      ],
      manifestationsOrDevelopments: [
        "Victoires foudroyantes de l'Axe (Blitzkrieg 1939-1941 : Pologne, France, Balkans, invasion de l'URSS, attaque de Pearl Harbor).",
        "Tournant de la guerre (1942-1943) : batailles décisives de Stalingrad, El-Alamein et Midway.",
        "Victoire totale des Alliés (1944-1945) : débarquements de Normandie et de Provence, écrasement de Berlin et bombes atomiques sur Hiroshima et Nagasaki."
      ],
      consequencesOrEvaluation: [
        "Bilan humain apocalyptique (50 à 60 millions de morts, génocide de 6 millions de Juifs et de Tsiganes, traumatisme moral universel).",
        "Dévastation économique et matérielle intégrale du continent européen.",
        "Règlements de paix et procès de Nuremberg pour crimes contre l'humanité.",
        "Naissance de l'ONU à San Francisco et émergence d'un monde bipolaire dominé par les deux superpuissances (USA et URSS)."
      ],
      examDissertationPlan: {
        problemStatement: "Comment les dérives totalitaires ont-elles provoqué la Seconde Guerre mondiale et en quoi son issue a-t-elle refondé l'ordre mondial ?",
        axes: [
          {
            axeTitle: "Axe 1 : Des faiblesses de l'entre-deux-guerres à l'engrenage des agressions totalitaires",
            arguments: [
              "Le ressentiment du traité de Versailles et la crise de 1929 favorisant l'arrivée d'Hitler au pouvoir.",
              "L'expansionnisme forcené de l'Axe (invasion de l'Éthiopie, guerre d'Espagne, Anschluss, Sudètes) face à la passivité des démocraties.",
              "Le pacte germano-soviétique et l'agression de la Pologne scellant le début des hostilités."
            ]
          },
          {
            axeTitle: "Axe 2 : Un désastre humain sans égal et la refondation géopolitique du monde",
            arguments: [
              "L'horreur des camps d'extermination, les génocides (Shoah, Tsiganes) et le bilan de plus de 50 millions de morts.",
              "Les conférences de paix (Yalta, Potsdam), la fondation de l'ONU et le procès historique de Nuremberg.",
              "Le déclin irréversible de l'Europe et l'avènement de la bipolarisation planétaire (USA / URSS)."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-h8-violences-masse-genocides",
      discipline: "Histoire",
      themeTitle: "Thème 3 : Les guerres et les violences de masse du XXème siècle à nos jours",
      lessonTitle: "Leçon 3 : Les violences de masse : les génocides du XXème siècle à nos jours",
      keyDatesOrStats: {
        "1915-1916": "Génocide des Arméniens par l'Empire ottoman (1,5 à 1,8 million de victimes)",
        "1932-1933": "Holodomor en Ukraine : extermination de 2,5 à 3 millions d'Ukrainiens par la famine organisée sous Staline",
        "1939-1945": "La Shoah (extermination de 6 millions de Juifs) et le Samudaripen des Tsiganes par le régime nazi",
        "9 décembre 1948": "Adoption par l'Assemblée générale de l'ONU de la Convention pour la prévention et la répression du crime de génocide",
        "1975-1979": "Génocide cambodgien par les Khmers rouges de Pol Pot (environ 2 millions de morts, 25% de la population)",
        "Février-septembre 1988": "Opération Anfal contre les Kurdes en Irak par Saddam Hussein (180 000 morts, bombardement chimique d'Halabja)",
        "Avril - Juillet 1994": "Génocide des Tutsis au Rwanda (500 000 à 1 million de morts en 100 jours)",
        "Depuis 2003": "Massacres et crimes de masse au Darfour (Soudan) sous le régime d'Omar el-Béchir (plus de 300 000 morts)"
      },
      keyConcepts: {
        "Génocide": "Destruction méthodique, préméditée et planifiée, en tout ou en partie, d'un groupe national, ethnique, racial ou religieux par l'État ou des milices (notion définie par Raphael Lemkin et consacrée par l'ONU en 1948).",
        "Violences de masse": "Ensemble d'agressions collectives physiques et psychologiques de grande ampleur perpétrées contre des populations civiles non combattantes.",
        "Crime contre l'humanité": "Violation délibérée et généralisée des droits fondamentaux d'une population civile (assassinat, extermination, asservissement, déportation, torture).",
        "Holocauste / Shoah": "Extermination systématique industrielle d'environ 6 millions de Juifs par gazage, fusillades et famine par l'Allemagne nazie.",
        "Samudaripen": "Terme romani désignant le génocide des populations tsiganes (Roms, Sintés, Gitans) par le régime nazi (200 000 à 500 000 morts)."
      },
      causesOrFactors: [
        "Idéologies fanatiques, racistes, eugénistes ou suprémacistes (antisémitisme nazi, ethnisme hutu, fanatisme rouge de Pol Pot).",
        "Crises sociopolitiques et guerres civiles utilisées par les régimes autoritaires pour désigner un bouc émissaire intérieur.",
        "Appareil étatique totalitaire instrumentalisant l'armée, la police, les milices et les canaux de propagande de masse.",
        "Faillite ou passivité coupable de la communauté internationale tardant à intervenir pour stopper les massacres."
      ],
      manifestationsOrDevelopments: [
        "Les génocides reconnus : Arméniens (1915-1916), Shoah et Tsiganes (1939-1945), Tutsis au Rwanda (1994).",
        "Violences de masse idéologiques et politiques : goulags et déportations en URSS stalinienne (20 millions), famines et répressions en Chine maoïste (45-70 millions), massacre du peuple tibétain (1959-1970).",
        "Massacres des Khmers rouges au Cambodge (1975-1979), famine organisée du Holodomor ukrainien (1932-1933), massacres chimiques de Kurdes à Halabja (1988), atrocités du Darfour (depuis 2003)."
      ],
      consequencesOrEvaluation: [
        "Hécatombe humaine indicible et anéantissement de communautés humaines entières.",
        "Traumatismes psychologiques transgénérationnels et destruction des patrimoines culturels.",
        "Institution d'une justice pénale internationale permanente (Cour Pénale Internationale - CPI, Tribunaux pénaux internationaux pour l'ex-Yougoslavie et le Rwanda).",
        "Nécessité vitale du devoir de mémoire et de l'éducation civique aux droits de l'Homme."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi les violences de masse et les génocides du XXe siècle traduisent-ils la barbarie politique et comment l'humanité tente-t-elle d'y faire face ?",
        axes: [
          {
            axeTitle: "Axe 1 : Une mécanique meurtrière d'extermination planifiée à travers les grands génocides du siècle",
            arguments: [
              "Les origines idéologiques : racisme d'État, exclusion identitaire et recherche d'un bouc émissaire en temps de crise.",
              "L'industrialisation de la mort : de la déportation des Arméniens en 1915 aux usines d'extermination nazies (Shoah).",
              "Le génocide contemporain des Tutsis au Rwanda en 1994 et les violences de masse idéologiques (Khmers rouges, Staline, Mao, Darfour)."
            ]
          },
          {
            axeTitle: "Axe 2 : Le sursaut juridique et moral de la communauté internationale",
            arguments: [
              "La définition juridique du génocide (Convention de 1948) et l'imprescriptibilité des crimes contre l'humanité.",
              "La mise en place de juridictions internationales (procès de Nuremberg, TPIR, CPI).",
              "L'impératif du devoir de mémoire pour éradiquer le négationnisme et préserver la paix."
            ]
          }
        ]
      }
    }
  ],

  // =========================================================================
  // GÉOGRAPHIE — PREMIÈRE A, C & D
  // =========================================================================
  geographieLessons: [
    // --- THÈME 1 : DYNAMISME DÉMOGRAPHIQUE DE LA CÔTE D'IVOIRE ET DANS LE MONDE ---
    {
      id: "hg-1ere-g1-dynamisme-demographique-ci",
      discipline: "Géographie",
      themeTitle: "Thème 1 : Dynamisme démographique de la Côte d'Ivoire et dans le monde",
      lessonTitle: "Leçon 1 : Dynamisme démographique et qualité de la vie en Côte d'Ivoire",
      keyDatesOrStats: {
        "1920": "Population ivoirienne de 1 825 000 habitants",
        "1960": "Population de 3 865 000 habitants à l'indépendance",
        "1998": "Recensement Général (RGPH) : 15 797 985 habitants (base large des jeunes 0-25 ans)",
        "2014": "Population estimée à 22 600 000 habitants (doublement tous les 20 ans)",
        "76 hab/km²": "Densité moyenne de la Côte d'Ivoire",
        "57%": "Part de la population active travaillant dans le secteur primaire (agriculture)",
        "14%": "Part de la population active dans le secteur secondaire (industrie)",
        "29%": "Part de la population active dans le secteur tertiaire (services et secteur informel)",
        "28%": "Proportion remarquable d'immigrés étrangers résidant en Côte d'Ivoire",
        "60 à 65 ans": "Espérance de vie moyenne des Ivoiriens"
      },
      keyConcepts: {
        "Dynamisme démographique": "Évolution quantitative, structurelle et spatiale d'une population sous l'effet de la natalité, de la mortalité et des migrations.",
        "Pyramide des âges en entonnoir renversé": "Graphique démographique à base très élargie (surreprésentation des jeunes), flancs rentrants concaves (forte mortalité adulte) et sommet effilé (faible proportion de personnes âgées), typique des pays en développement.",
        "Exode rural": "Départ définitif des populations des campagnes vers les agglomérations urbaines à la recherche d'un emploi et de meilleures conditions de vie.",
        "Migrations interrégionales": "Déplacements de population au sein du territoire national, dominés en Côte d'Ivoire par le flux séculaire du Nord savanicole vers le Sud forestier.",
        "Macrocéphalie urbaine": "Développement démesuré d'une seule ville géante (Abidjan) concentrant la majorité des richesses, des activités et des fonctions du pays.",
        "Politique antinataliste": "Ensemble des mesures étatiques visant à freiner le taux de natalité et à encourager la planification familiale."
      },
      causesOrFactors: [
        "Maintien d'un niveau de fécondité et de natalité très élevé lié au poids des traditions et à la jeunesse de la population.",
        "Chute continue de la mortalité grâce aux campagnes de vaccination, aux progrès médicaux et à l'assainissement.",
        "Forte attractivité migratoire internationale accueillant d'importantes communautés ouest-africaines (Burkinabè, Maliens, Guinéens)."
      ],
      manifestationsOrDevelopments: [
        "Deux phases historiques : croissance lente avant 1960 puis explosion démographique galopante post-indépendance.",
        "Pyramide à dominance jeune : les moins de 25 ans représentent plus de 60% de la population.",
        "Répartition géographique très inégale : fortes densités au Sud forestier et à Abidjan, densités moyennes au Centre, faibles densités au Nord et dans le Sud-Ouest (< 5 hab/km²).",
        "Prédominance écrasante du secteur primaire (57%) et gonflement du tertiaire informel peu productif."
      ],
      consequencesOrEvaluation: [
        "Pression insoutenable sur les infrastructures éducatives, sanitaires et de transport.",
        "Dégradation sévère de l'environnement : déforestation galopante, savanisation, surpêche, pollution urbaine et prolifération de bidonvilles.",
        "Chômage massif des jeunes, paupérisation et insécurité.",
        "Riposte de l'État : sensibilisation au planning familial, politiques de décentralisation et de déconcentration pour fixer les populations en région."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi l'explosion démographique ivoirienne constitue-t-elle un défi majeur pour la qualité de la vie et l'aménagement du territoire ?",
        axes: [
          {
            axeTitle: "Axe 1 : Les manifestations d'une croissance démographique rapide et structurellement jeune",
            arguments: [
              "Une transition démographique marquée par une natalité vigoureuse et une baisse de la mortalité faisant doubler la population en vingt ans.",
              "Une pyramide des âges en entonnoir renversé dominée par les moins de 25 ans et amplifiée par une forte immigration régionale (28%).",
              "Une répartition spatiale déséquilibrée favorisant le littoral et le Sud forestier aux dépens des savanes septentrionales."
            ]
          },
          {
            axeTitle: "Axe 2 : Les lourds impacts sur la qualité de vie et les politiques étatiques d'atténuation",
            arguments: [
              "La saturation des services publics (écoles, hôpitaux), le sous-emploi et la multiplication des quartiers précaires insalubres.",
              "La dégradation des écosystèmes ruraux (déforestation, pression foncière) et urbains (déchets, pollutions).",
              "Les solutions publiques : politique antinataliste incitative, éducation sexuelle, décentralisation et promotion du développement rural intégré."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-g2-croissance-demographique-mondiale",
      discipline: "Géographie",
      themeTitle: "Thème 1 : Dynamisme démographique de la Côte d'Ivoire et dans le monde",
      lessonTitle: "Leçon 2 : La croissance démographique mondiale et ses problèmes",
      keyDatesOrStats: {
        "1600": "580 millions d'habitants sur Terre",
        "1800": "968 millions d'habitants (phase de croissance lente)",
        "1900": "1,613 milliard d'habitants",
        "1950": "2,519 milliards d'habitants",
        "2000": "6,071 milliards d'habitants (boom démographique mondial)",
        "2014": "7,243 milliards d'habitants (Asie 59,9%, Afrique 15,7%, Europe 10,3%)",
        "0,2% à 0,6%": "Taux d'accroissement naturel très faible des pays développés",
        "17,3% vs 82,7%": "Les pays riches représentent 17,3% de la population mais concentrent 70% des richesses",
        "1974 / 1984 / 2004": "Grandes Conférences mondiales sur la population (Bucarest, Mexico, Pékin)"
      },
      keyConcepts: {
        "Transition démographique": "Modèle décrivant le passage d'un régime traditionnel (forte natalité et forte mortalité) à un régime moderne (faible natalité et faible mortalité).",
        "Malthusianisme (Antinatalisme)": "Théorie économique de Thomas Malthus préconisant la restriction impérative des naissances pour éviter que la population ne surpasse les ressources alimentaires.",
        "Natalisme": "Doctrine optimiste soutenant que l'accroissement démographique est source de force productive, de créativité humaine et de prospérité économique.",
        "Pyramide en parasol / ogive": "Profil démographique des pays riches à base rétrécie et sommet renflé, illustrant le déclin de la fécondité et le vieillissement prononcé.",
        "Secteur quaternaire": "Secteur de pointe regroupant les activités hautement intellectuelles, la recherche scientifique, les TIC et la haute finance."
      },
      causesOrFactors: [
        "Différenciation mondiale des régimes démographiques : fin de transition et dénatalité au Nord, phase d'explosion au Sud.",
        "Facteurs de la baisse de natalité au Nord : niveau d'instruction des femmes, travail féminin, coût élevé de l'enfant, recours universel à la contraception.",
        "Facteurs de la forte fécondité au Sud : pesanteurs culturelles et religieuses, manque d'éducation sexuelle, enfant perçu comme assurance-vie et force de travail."
      ],
      manifestationsOrDevelopments: [
        "Contraste frappant entre pays riches vieillissants (croissance lente, crise des retraites, manque de main-d'œuvre) et pays pauvres jeunes (foyer d'explosion).",
        "Répartition géographique asymétrique : l'Asie concentre 60% de l'humanité, l'Afrique est en plein bond démographique, l'Europe décline.",
        "Contrastes sectoriels : prédominance des services et du quaternaire dans les pays développés contre prédominance de l'agriculture vivrière au Sud."
      ],
      consequencesOrEvaluation: [
        "Pays du Sud : insécurité alimentaire, sous-équipement criant, chômage endémique, pressions migratoires vers le Nord.",
        "Pays du Nord : charges massives pour la prise en charge des personnes âgées dépendantes, besoin d'immigration compensatoire provoquant des tensions xénophobes.",
        "Débats internationaux lors des conférences de Bucarest, Mexico et Pékin opposant pro- et anti-malthusiens."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi la croissance démographique mondiale actuelle reflète-t-elle une profonde fracture entre pays développés et pays en développement ?",
        axes: [
          {
            axeTitle: "Axe 1 : Deux trajectoires démographiques opposées aux profils structurels contrastés",
            arguments: [
              "L'explosion démographique des pays du Sud : maintien d'une natalité élevée, transition inachevée et pyramides en entonnoir renversé.",
              "L'hiver démographique des pays industrialisés : fécondité inférieure au seuil de remplacement (2,1 enfants), vieillissement rapide et pyramides en ogive ou parasol.",
              "Une répartition spatiale déséquilibrée concentrant près des deux tiers de la population en Asie."
            ]
          },
          {
            axeTitle: "Axe 2 : Des défis économiques divergents et la confrontation des doctrines démographiques",
            arguments: [
              "Au Sud, le défi du nombre : pénurie d'emplois, sous-développement et dégradation des milieux naturels.",
              "Au Nord, le défi du vieillissement : crise de financement des retraites, pénurie de main-d'œuvre et dépendance migratoire.",
              "Le choc des politiques : antinatalisme malthusien (planning familial) contre natalisme incitatif."
            ]
          }
        ]
      }
    },

    // --- THÈME 2 : L'URBANISATION DANS LE MONDE ---
    {
      id: "hg-1ere-g3-urbanisation-pvd-cote-ivoire",
      discipline: "Géographie",
      themeTitle: "Thème 2 : L'urbanisation dans le monde",
      lessonTitle: "Leçon 1 : L'urbanisation dans les pays en voie de développement : exemple de la Côte d'Ivoire",
      keyDatesOrStats: {
        "1902": "Début de la construction du chemin de fer Abidjan-Niger stimulant la naissance d'Abidjan",
        "1934": "Transfert officiel de la capitale de la Côte d'Ivoire de Bingerville à Abidjan",
        "1951": "Inauguration du canal de Vridi ouvrant le port en eau profonde d'Abidjan",
        "1950-1975": "Vague d'urbanisation accélérée en Côte d'Ivoire",
        "6 millions": "Population d'Abidjan (ville millionnaire et macrocéphale)",
        "20%": "Part de la population totale ivoirienne résidant dans la seule agglomération d'Abidjan",
        "40%": "Taux d'urbanisation global de la Côte d'Ivoire",
        "16% à 50%": "Pourcentage de ménages urbains ivoiriens vivant dans des quartiers sous-équipés ou précaires"
      },
      keyConcepts: {
        "Urbanisation": "Processus d'accroissement de la population urbaine et de transformation de l'espace par l'extension physique des villes.",
        "Ville millionnaire": "Agglomération urbaine dont la population dépasse un million d'habitants (Abidjan, Lagos, Kinshasa, Mexico).",
        "Bidonville (Habitat précaire / Favela)": "Zone d'habitat spontané, anarchique et insalubre, construite sans titre de propriété avec des matériaux de récupération et privée d'infrastructures de base.",
        "Macrocéphalie urbaine": "Hypertrophie d'une capitale qui concentre l'essentiel de la population urbaine, des investissements et des fonctions politiques et financières.",
        "Ségrégation spatiale": "Séparation géographique et sociale nette entre quartiers résidentiels aisés et quartiers populaires déshérités."
      },
      causesOrFactors: [
        "Exode rural massif provoqué par la pauvreté des campagnes et le mirage de la réussite citadine.",
        "Croissance naturelle urbaine très élevée due à la jeunesse des populations urbaines.",
        "Concentration disproportionnée des investissements publics, emplois, industries et services à Abidjan."
      ],
      manifestationsOrDevelopments: [
        "Processus récent : trois générations de villes (précoloniales marchandes : Kong, Bouna ; coloniales portuaires : Bassam, Bingerville ; postcoloniales administratives).",
        "Paysages urbains ultra-contrastés : quartier central des affaires (Plateau avec gratte-ciel), quartiers résidentiels cossus (Cocody), quartiers populaires (Adjamé, Abobo, Yopougon) et bidonvilles précaires.",
        "Fonctions urbaines multiples mais déséquilibrées : primauté absolue d'Abidjan comme métropole nationale sur les métropoles régionales (Bouaké, Daloa, San Pedro)."
      ],
      consequencesOrEvaluation: [
        "Déficit criant en voirie, eau potable, électricité et assainissement (inondations, glissements de terrain mortels à chaque saison des pluies).",
        "Prolifération d'activités informelles de survie, sous-emploi, délinquance et paupérisation urbaine.",
        "Solutions préconisées : plans directeurs d'urbanisme, rénovation des quartiers précaires, valorisation économique des villes secondaires de l'intérieur."
      ],
      examDissertationPlan: {
        problemStatement: "Quelles sont les spécificités, les dysfonctionnements et les perspectives de gestion de l'urbanisation en Côte d'Ivoire ?",
        axes: [
          {
            axeTitle: "Axe 1 : Une urbanisation récente, explosive et fortement polarisée autour d'Abidjan",
            arguments: [
              "Le passage des cités précoloniales et coloniales à la poussée urbaine contemporaine tirée par l'exode rural et la natalité.",
              "Le phénomène de macrocéphalie : le poids démesuré d'Abidjan concentrant 20% de la population nationale et l'essentiel des fonctions stratégiques.",
              "Des paysages urbains juxtaposant vitrines modernes (buildings du Plateau, villas de Cocody) et zones d'habitat précaire sous-équipées."
            ]
          },
          {
            axeTitle: "Axe 2 : L'ampleur de la crise urbaine et la quête de politiques d'aménagement durables",
            arguments: [
              "Les maux urbains : faillite de l'assainissement, congestion routière, prolifération de l'habitat spontané et chômage des jeunes.",
              "Les stratégies publiques d'aménagement : respect des schémas directeurs, restructuration des bidonvilles, et renforcement des métropoles régionales (Bouaké, Korhogo, San Pedro)."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-g4-urbanisation-pays-developpes-france",
      discipline: "Géographie",
      themeTitle: "Thème 2 : L'urbanisation dans le monde",
      lessonTitle: "Leçon 2 : L'urbanisation dans les pays développés : l'exemple de la France",
      keyDatesOrStats: {
        "Antiquité": "Première grande phase d'urbanisation autour du bassin méditerranéen (Athènes, Rome, Marseille)",
        "X-XIIIe siècles": "Deuxième phase : essor des foires et des villes marchandes médiévales (Hambourg, Bruges, Lyon)",
        "XIXe siècle": "Troisième phase : explosion urbaine portée par la révolution industrielle en Europe",
        "79% (2004)": "Taux d'urbanisation moyen de l'Europe occidentale",
        "Mégalopole européenne": "Dorsale dorsale urbaine continue s'étendant du Sud de l'Angleterre à l'Italie du Nord",
        "Agglomération parisienne": "Plus de 12 millions d'habitants, métropole de rang mondial concentrant les fonctions de commandement"
      },
      keyConcepts: {
        "Conurbation": "Ensemble urbain continu formé par la jonction spatiale de plusieurs agglomérations dont les banlieues finissent par se toucher sans fusionner administrativement.",
        "Mégalopole (Megalopolis)": "Région urbaine géante multipolaire comprenant plusieurs grandes métropoles interconnectées sur des centaines de kilomètres.",
        "Migrations pendulaires": "Déplacements quotidiens rythmés et alternants effectués par les travailleurs entre leur domicile en banlieue/périphérie et leur lieu de travail au centre-ville.",
        "Périurbanisation": "Processus d'extension continue de l'habitat urbain et des activités au-delà de la banlieue, empiétant sur les espaces ruraux environnants.",
        "Ville nouvelle": "Agglomération planifiée et créée de toutes pièces à la périphérie d'une grande métropole pour désengorger le centre-ville (ex: Cergy-Pontoise, Évry, Marne-la-Vallée en région parisienne)."
      },
      causesOrFactors: [
        "Processus historique pluri-séculaire consolidé par les révolutions industrielles successives.",
        "Concentration irrésistible des emplois du secteur tertiaire supérieur, des sièges sociaux et des centres universitaires dans les métropoles.",
        "Aménagement d'infrastructures de transport ultra-rapides (lignes de TGV, autoroutes, réseaux de métro et RER)."
      ],
      manifestationsOrDevelopments: [
        "Taux d'urbanisation massif approchant les 80% de la population totale.",
        "Paysage urbain extrêmement hiérarchisé : centre historique valorisé, quartier central des affaires (CBD - ex: La Défense à Paris), couronnes de banlieues et cités-dortoirs, franges périurbaines pavillonnaires.",
        "Aménagement tridimensionnel poussé des sous-sols (réseaux ferrés souterrains, parkings, galeries commerciales, tunnels techniques)."
      ],
      consequencesOrEvaluation: [
        "Engorgement récurrent des réseaux de transport aux heures de pointe (bouchons, saturation des métros).",
        "Prix prohibitifs du foncier et de l'immobilier repoussant les ménages modestes vers les périphéries lointaines.",
        "Pollution de l'air, nuisances sonores et dégradation de la biodiversité périurbaine.",
        "Stratégies appliquées : création de villes nouvelles, promotion des mobilités douces (tramways, vélos), réhabilitation des friches industrielles et trames vertes."
      ],
      examDissertationPlan: {
        problemStatement: "En quoi l'urbanisation des pays industrialisés comme la France conjugue-t-elle puissance spatiale et contraintes de gestion urbaine ?",
        axes: [
          {
            axeTitle: "Axe 1 : Un paysage urbain géant, hautement structuré et multi-fonctionnel",
            arguments: [
              "Une trajectoire ancienne culminant dans des conurbations et mégalopoles intégrant la majorité de la population (taux d'urbanisation de 79%).",
              "Une armature urbaine tridimensionnelle articulant quartiers d'affaires mondiaux (La Défense), banlieues et sous-sols aménagés.",
              "Le rayonnement de métropoles complètes concentrant pouvoir politique, tertiaire supérieur, recherche et culture."
            ]
          },
          {
            axeTitle: "Axe 2 : Les dysfonctionnements urbains et les réponses d'un aménagement raisonné",
            arguments: [
              "Les pesanteurs du quotidien : saturation des transports (migrations pendulaires), crise du logement cher et ségrégation socioterritoriale.",
              "Les atteintes environnementales : pollutions atmosphériques et acoustiques, artificialisation des sols agricoles.",
              "Les solutions innovantes : planification des villes nouvelles, tramways propres, éco-quartiers et valorisation du patrimoine ancien."
            ]
          }
        ]
      }
    },

    // --- THÈME 3 : L'ADMINISTRATION ET L'AMÉNAGEMENT DU TERRITOIRE IVOIRIEN ---
    {
      id: "hg-1ere-g5-organisation-administrative-ci",
      discipline: "Géographie",
      themeTitle: "Thème 3 : L'administration et l'aménagement du territoire ivoirien",
      lessonTitle: "Leçon 1 : L'organisation administrative de la Côte d'Ivoire",
      keyDatesOrStats: {
        "Loi N°2014-451 du 5 août 2014": "Texte fondamental portant orientation de l'organisation générale de l'Administration Territoriale",
        "31": "Nombre de Régions administratives (circonscriptions déconcentrées) et de Régions collectivités (décentralisées)",
        "108": "Nombre de Départements en Côte d'Ivoire",
        "426": "Nombre de Sous-préfectures",
        "8 722": "Nombre de Villages officiellement reconnus",
        "187": "Nombre de Communes constituant les collectivités territoriales de base",
        "2": "Nombre de Districts Autonomes particuliers : Abidjan et Yamoussoukro"
      },
      keyConcepts: {
        "Déconcentration administrative": "Technique d'organisation administrative par laquelle l'État central délègue une partie de ses compétences décisionnelles à des représentants nommés (Préfets, Sous-préfets) agissant dans des circonscriptions hiérarchisées sans autonomie financière.",
        "Décentralisation administrative": "Technique d'administration transférant des compétences à des collectivités territoriales dotées de la personnalité morale, de l'autonomie financière et administrées par des conseils élus par la population.",
        "Circonscription administrative": "Division géographique de l'État déconcentré : Région (Préfet de région), Département (Préfet), Sous-préfecture (Sous-préfet), Village (Chef de village assisté d'une notabilité).",
        "Collectivité territoriale": "Entité administrative décentralisée dotée d'un budget propre et d'organes délibérants élus : la Région (Conseil régional et son Président) et la Commune (Conseil municipal et le Maire).",
        "District Autonome": "Entité territoriale particulière regroupant plusieurs régions ou départements, régie à la fois par les règles de la déconcentration et de la décentralisation, dirigée par un Gouverneur nommé par le Président de la République."
      },
      causesOrFactors: [
        "Nécessité de rapprocher l'administration des administrés pour satisfaire leurs besoins de base.",
        "Volonté de démocratiser la vie publique locale en associant les citoyens à la gestion de leur terroir.",
        "Impératif de renforcer l'unité nationale, la cohésion sociale et la paix sur toute l'étendue du territoire."
      ],
      manifestationsOrDevelopments: [
        "Architecture déconcentrée : Présidence de la République et Ministères à Abidjan/Yamoussoukro, relayés en région par les Préfets de région, de département et les Sous-préfets.",
        "Architecture décentralisée : 31 Conseils régionaux et 187 Communes exerçant des missions de développement local, voirie, santé de proximité et éducation.",
        "Cas spécifique des 2 Districts autonomes d'Abidjan et Yamoussoukro alliant les deux régimes."
      ],
      consequencesOrEvaluation: [
        "Meilleur encadrement administratif et sécuritaire des populations ivoiriennes.",
        "Faiblesses majeures : lourde dépendance financière vis-à-vis des dotations de l'État central, lenteur des transferts effectifs de ressources, manque de cadres techniques dans les petites communes de l'intérieur.",
        "Défis de rentabilité fiscale locale pour garantir une réelle autonomie de développement."
      ],
      examDissertationPlan: {
        problemStatement: "Comment s'articulent la déconcentration et la décentralisation dans l'organisation administrative de la Côte d'Ivoire et quelles en sont les limites ?",
        axes: [
          {
            axeTitle: "Axe 1 : Une double armature institutionnelle complémentaire régie par la loi de 2014",
            arguments: [
              "L'administration déconcentrée : une chaîne hiérarchique pyramidale assurée par des représentants nommés (Régions, Départements, Sous-préfectures, Villages).",
              "L'administration décentralisée : l'autonomie locale confiée à des organes élus (31 Conseils régionaux et 187 Communes) pour promouvoir le développement de proximité.",
              "Le statut original des Districts autonomes (Abidjan et Yamoussoukro) conciliant autorité de l'État et impératifs urbains."
            ]
          },
          {
            axeTitle: "Axe 2 : Les objectifs de modernisation territoriale et les pesanteurs persistantes",
            arguments: [
              "Les avancées : encadrement citoyen, maintien de l'ordre républicain, réalisation d'infrastructures locales de base.",
              "Les contraintes structurelles : faiblesse de la fiscalité locale, tutelle financière écrasante de l'État et disparités de moyens entre Abidjan et les communes rurales."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-g6-amenagement-territoire-ci",
      discipline: "Géographie",
      themeTitle: "Thème 3 : L'administration et l'aménagement du territoire ivoirien",
      lessonTitle: "Leçon 2 : L'aménagement du territoire ivoirien",
      keyDatesOrStats: {
        "1960-1980": "Période des plans quinquennaux de développement et des grandes opérations agro-industrielles d'État",
        "1969": "Création de l'AVB (Autorité pour l'Aménagement de la Vallée du Bandama) et de l'ARSO (Autorité pour la Région du Sud-Ouest)",
        "1972": "Inauguration officielle du port de San Pedro pour désenclaver le Sud-Ouest",
        "1983": "Loi érigeant Yamoussoukro en capitale politique et administrative de la Côte d'Ivoire",
        "Fêtes tournantes": "Programme des fêtes tournantes de l'indépendance pour doter chaque grande ville de préfecture d'infrastructures modernes (Bouaké, Korhogo, Man, Daloa)",
        "FRAR": "Fonds Régionaux d'Aménagement Rural pour financer les micro-projets de développement villageois"
      },
      keyConcepts: {
        "Aménagement du territoire": "Action concertée et volontaire de l'État et des collectivités visant à organiser l'espace, implanter des équipements structurants et valoriser les ressources pour assurer un développement harmonieux et réduire les déséquilibres régionaux.",
        "Plans quinquennaux": "Programmes économiques prévisionnels de 5 ans élaborés par le Ministère du Plan pour orienter les investissements publics majeurs.",
        "AVB": "Autorité pour l'Aménagement de la Vallée du Bandama créée pour encadrer la mise en eau du barrage de Kossou, reloger les populations déguerpies et développer l'agriculture irriguée et l'élevage dans le Centre.",
        "ARSO": "Autorité pour la Région du Sud-Ouest chargée de construire le second port ivoirien (San Pedro), de créer des axes routiers et d'exploiter les richesses sylvicoles et agricoles du Sud-Ouest.",
        "Sociétés de développement agro-industriel": "Structures étatiques spécialisées : SODEPALM (palmier/cocotier au Sud-Ouest), CIDT (coton au Nord), SODESUCRE (complexes sucriers au Nord), SATMACI (café/cacao au Sud-Centre)."
      },
      causesOrFactors: [
        "Héritage colonial déséquilibré privilégiant outrageusement la zone côtière et le Sud forestier au détriment du Nord sahélien.",
        "Macro-croissance d'Abidjan saturant l'espace national et drainant tous les flux migratoires.",
        "Volonté d'exploiter rationnellement toutes les matières premières du terroir (coton, sucre, bois, caoutchouc, café, cacao, hydroélectricité)."
      ],
      manifestationsOrDevelopments: [
        "Les grands équipements d'infrastructure : barrage hydroélectrique de Kossou, création ex nihilo de la ville et du port de San Pedro, réseau ferré.",
        "Implantation de pôles industriels régionaux : complexes textiles (UTEXI à Dimbokro, COTIVO à Agboville, Gonfreville à Bouaké), usines de sucre au Nord (Ferkessédougou, Borotou, Zuénoula).",
        "La décision stratégique de faire de Yamoussoukro la capitale politique en 1983 pour désengorger Abidjan.",
        "Modernisation des villages via les programmes FRAR et l'électrification rurale."
      ],
      consequencesOrEvaluation: [
        "Désenclavement décisif de l'Ouest et du Sud-Ouest grâce au port de San Pedro.",
        "Création de dizaines de milliers d'emplois dans les filières coton, sucre et textile de l'intérieur.",
        "Limites : la crise économique de 1980 a ralenti les investissements d'État ; persistance de disparités régionales et poursuite de la macrocéphalie d'Abidjan.",
        "Orientation moderne : passage d'un aménagement centralisé d'État à un aménagement territorialisé et participatif appuyé par la décentralisation."
      ],
      examDissertationPlan: {
        problemStatement: "Quels furent les fondements, les réalisations et les limites de la politique d'aménagement du territoire menée en Côte d'Ivoire depuis l'indépendance ?",
        axes: [
          {
            axeTitle: "Axe 1 : Une politique volontariste d'État fondée sur de grands programmes structurants",
            arguments: [
              "L'impératif de corriger les disparités régionales léguées par la colonisation entre le Nord et le Sud.",
              "Les grandes opérations d'aménagement régional : les missions de l'AVB (barrage de Kossou) et de l'ARSO (port et désenclavement de San Pedro).",
              "La diffusion agro-industrielle : SODESUCRE et CIDT au Nord, SODEPALM au Sud-Ouest, usines textiles le long de la voie ferrée (Bouaké, Dimbokro, Agboville) et transfert de la capitale à Yamoussoukro."
            ]
          },
          {
            axeTitle: "Axe 2 : Un bilan contrasté entre modernisation indéniable et déséquilibres persistants",
            arguments: [
              "Les réussites concrètes : émergence d'un réseau de villes secondaires, valorisation des terroirs et amélioration relative des conditions de vie rurales.",
              "Les revers : impact brutal de la crise économique des années 1980, abandon de certains complexes agro-industriels et maintien de la prépondérance écrasante d'Abidjan.",
              "Le renouveau par la décentralisation et les projets locaux cofinancés."
            ]
          }
        ]
      }
    },

    // --- THÈME 4 : LE PROCESSUS DE LA MONDIALISATION ---
    {
      id: "hg-1ere-g7-facteurs-acteurs-mondialisation",
      discipline: "Géographie",
      themeTitle: "Thème 4 : Le processus de la mondialisation",
      lessonTitle: "Leçon 1 : Les facteurs et les acteurs de la mondialisation",
      keyDatesOrStats: {
        "1944": "Accords de Bretton Woods instituant le Fonds Monétaire International (FMI) et la Banque Mondiale",
        "1947 / 1995": "Accords du GATT (1947) devenant l'Organisation Mondiale du Commerce (OMC) en 1995",
        "64 000+": "Nombre de firmes transnationales (FMN) recensées dans le monde",
        "820 000+": "Nombre de filiales de multinationales implantées sur les cinq continents",
        "2/3 et 1/3": "Les FMN contrôlent 2/3 des échanges commerciaux et 1/3 du PIB mondial",
        "70%": "Part des échanges extérieurs des pays de l'Union Européenne réalisés entre eux (commerce intra-communautaire)"
      },
      keyConcepts: {
        "Mondialisation (Globalisation)": "Processus historique et continu d'ouverture, d'intégration et d'interdépendance des économies, des sociétés et des cultures à l'échelle planétaire formant un marché unique.",
        "Village planétaire": "Formule célèbre (Marshall McLuhan) décrivant le rétrécissement virtuel de l'espace terrestre grâce à la vitesse instantanée des TIC et des transports modernes.",
        "Firme Multinationale (FMN) / Transnationale": "Entreprise de grande taille dont la maison-mère est implantée dans un pays d'origine et qui possède de multiples filiales de production et de distribution dans plusieurs pays étrangers.",
        "Déréglementation / Libéralisation": "Suppression ou allègement progressif des barrières douanières, des quotas et des contrôles étatiques pour faciliter la libre circulation des marchandises et capitaux.",
        "Technologies de l'Information et de la Communication (TIC)": "Ensemble des outils numériques (internet, satellites, fibre optique, téléphones, ordinateurs) assurant la transmission instantanée des données."
      },
      causesOrFactors: [
        "Facteurs historiques séculaires : grandes découvertes maritimes, traite atlantique, conquêtes coloniales et révolutions industrielles ayant mis en contact les continents.",
        "Révolution spectaculaire des transports (porte-conteneurs géants, aviation gros porteurs, réseaux ferroviaires à grande vitesse) et des TIC (Internet, télécommunications).",
        "Politiques de libéralisation des échanges coordonnées par les institutions financières mondiales (FMI, Banque Mondiale, OMC)."
      ],
      manifestationsOrDevelopments: [
        "Mobilité colossale des flux : flux commerciaux, flux financiers (mouvements spéculatifs de capitaux), flux d'informations et flux migratoires humains.",
        "Omniprésence des Firmes Multinationales imposant leurs stratégies de production et de marketing à l'échelle du globe.",
        "Rôle actif des États (création d'infrastructures, accords fiscaux, sommets du G20) et des blocs régionaux (Union Européenne, ALENA, ASEAN, MERCOSUR, CEDEAO)."
      ],
      consequencesOrEvaluation: [
        "Unification progressive des marchés et compression spectaculaire de l'espace et du temps.",
        "Dépendance accrue des économies nationales vis-à-vis des fluctuations du marché boursier mondial.",
        "Multiplication des acteurs non étatiques (banques, agences de notation, ONG internationales)."
      ],
      examDissertationPlan: {
        problemStatement: "Quels sont les facteurs déterminants de la mondialisation contemporaine et qui en sont les acteurs moteurs ?",
        axes: [
          {
            axeTitle: "Axe 1 : Les facteurs propulseurs : de l'histoire aux révolutions techniques et institutionnelles",
            arguments: [
              "Les jalons historiques : la mise en réseau du monde par le commerce triangulaire, la colonisation et les révolutions industrielles.",
              "Le rôle moteur des technologies : compression de l'espace-temps grâce aux TIC (internet) et à la conteneurisation des transports.",
              "Le cadre politique international : démantèlement des barrières douanières sous l'impulsion de l'OMC, du FMI et des unions régionales."
            ]
          },
          {
            axeTitle: "Axe 2 : Les acteurs majeurs orchestrant la dynamique planétaire",
            arguments: [
              "La toute-puissance des Firmes Multinationales (FMN) dictant les flux de production et d'investissement (2/3 du commerce mondial).",
              "Les États souverains et leurs alliances régionales (UE, CEDEAO, G20) garantissant le cadre juridique et sécuritaire des échanges.",
              "Le rôle croissant des marchés financiers, des banques et de la société civile globale."
            ]
          }
        ]
      }
    },

    {
      id: "hg-1ere-g8-consequences-mondialisation",
      discipline: "Géographie",
      themeTitle: "Thème 4 : Le processus de la mondialisation",
      lessonTitle: "Leçon 2 : Les conséquences de la mondialisation",
      keyDatesOrStats: {
        "Triade (USA, UE, Japon/Asie orientale)": "Concentration de plus de 80 à 85% du commerce, des flux financiers et de la recherche scientifique mondiale",
        "NPI (Nouveaux Pays Industrialisés)": "Émergence spectaculaire des NPI d'Asie (Taïwan, Corée du Sud, Singapour) puis des BRICS (Chine, Inde, Brésil)",
        "< 3%": "Part marginale de l'Afrique subsaharienne dans le commerce maritime et les exportations mondiales",
        "2008": "Crise financière mondiale des subprimes démontrant la contagion systémique instantanée des économies interdépendantes"
      },
      keyConcepts: {
        "Triade": "Ensemble des trois pôles économiques dominants de l'économie mondiale : l'Amérique du Nord (USA, Canada), l'Union Européenne et l'Asie-Pacifique (Japon, Corée du Sud, littoral chinois).",
        "Division Internationale du Travail (DIT)": "Spécialisation des pays dans des productions déterminées : conception, R&D et services à haute valeur ajoutée au Nord ; industrie manufacturière et matières premières au Sud.",
        "Délocalisation": "Transfert d'activités productives ou d'usines d'un pays développé vers un pays à bas salaires pour réduire les coûts de main-d'œuvre.",
        "Homogénéisation culturelle": "Diffusion universelle et standardisée de modèles de consommation, musiques, films, vêtements et usages linguistiques (américanisation / hégémonie de l'anglais).",
        "Marginalisation économique": "Situation d'exclusion des pays les moins avancés (PMA) qui demeurent à la périphérie des grands courants d'échanges mondiaux."
      },
      causesOrFactors: [
        "Recherche effrénée de compétitivité et de marges bénéficiaires par les grands groupes industriels.",
        "Ouverture généralisée des frontières nationales aux produits et aux flux immatériels.",
        "Domination technologique et financière écrasante des pays de la Triade."
      ],
      manifestationsOrDevelopments: [
        "Progression continue des flux de marchandises et délocalisation massive d'unités de production vers l'Asie et le Tiers-Monde.",
        "Émergence fulgurante des NPI et des pays émergents profitant de leur attractivité salariale et de réformes industrielles.",
        "Uniformisation des modes de vie et des pratiques culturelles de la jeunesse mondiale via internet et les médias.",
        "Domination sans partage de la Triade captant 85% des investissements directs à l'étranger (IDE)."
      ],
      consequencesOrEvaluation: [
        "Conséquences positives : stimulation de la croissance globale, création d'emplois dans les pays émergents, baisse des prix des biens de consommation, accès facilité aux connaissances scientifiques.",
        "Conséquences négatives et déséquilibres : rapports de force profondément inégaux entre le Nord et le Sud, pillage des ressources du Tiers-Monde sans transfert technologique suffisant.",
        "Marginalisation tragique de l'Afrique cantonnée au rôle de simple réservoir de matières premières brutes.",
        "Désindustrialisation et montée du chômage ouvrier dans les pays industrialisés.",
        "Vulnérabilité accrue : transmission foudroyante des crises financières (krachs boursiers) et crises sanitaires à l'ensemble du globe."
      ],
      examDissertationPlan: {
        problemStatement: "Dans quelle mesure la mondialisation génère-t-elle à la fois prospérité économique et fractures socio-territoriales à l'échelle du globe ?",
        axes: [
          {
            axeTitle: "Axe 1 : Les opportunités de la mondialisation : croissance des échanges et émergence de nouveaux pôles",
            arguments: [
              "L'expansion spectaculaire du commerce mondial et la formidable diffusion des innovations technologiques.",
              "Le rattrapage industriel spectaculaire des Nouveaux Pays Industrialisés (Corée du Sud, Taïwan, Chine, Inde) stimulant l'emploi local.",
              "L'accès des consommateurs à des produits diversifiés et bon marché et le rapprochement culturel mondial."
            ]
          },
          {
            axeTitle: "Axe 2 : Les dérives et asymétries : domination de la Triade, précarisation et marginalisation du Sud",
            arguments: [
              "L'hégémonie outrageuse de la Triade concentrant 85% des richesses et accentuant la dépendance des pays pauvres.",
              "La marginalisation de l'Afrique subsaharienne cantonnée à l'exportation brute de matières premières sans valeur ajoutée.",
              "Les fractures sociales : désindustrialisation au Nord, précarité ouvrière au Sud et vulnérabilité systémique face aux crises mondiales."
            ]
          }
        ]
      }
    }
  ]
};
