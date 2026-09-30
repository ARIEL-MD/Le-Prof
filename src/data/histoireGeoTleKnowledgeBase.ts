export interface HgThemeLesson {
  id: string;
  discipline: "Histoire" | "Géographie";
  themeTitle: string;
  lessonTitle: string;
  keyDatesOrStats: Record<string, string>;
  keyConcepts: Record<string, string>;
  causesOrFactors?: string[];
  manifestationsOrDevelopments?: string[];
  consequencesOrEvaluation?: string[];
  examDissertationPlan: {
    problemStatement: string;
    axes: { axeTitle: string; arguments: string[] }[];
  };
  textCommentaryGuide?: {
    typicalContext: string;
    mainIdeas: string[];
    keyExplanations: { passage: string; explanation: string }[];
    criticalAppreciation: string;
  };
  evaluationSituations?: {
    context: string;
    questions: string[];
    answers: string[];
  }[];
}

export const histoireGeoTleKnowledgeBase: {
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
  name: "Référentiel Officiel d'Histoire-Géographie — Terminale (École Numérique / MENETFP Côte d'Ivoire)",
  version: "2026.2",
  level: "Terminale (Toutes Séries)",
  country: "Côte d'Ivoire",
  methodologies: {
    dissertation: {
      definition: "La dissertation est un exercice d'argumentation ordonnée qui répond de façon claire et logique à un problème historique ou géographique posé par le sujet.",
      structure: [
        "1. INTRODUCTION (en un seul paragraphe continu) : Amorce générale du thème -> Définition des termes clés et délimitation du sujet -> Problématique (question centrale) -> Annonce claire des deux axes du plan.",
        "2. DÉVELOPPEMENT (2 grandes parties équilibrées) : Chaque partie s'ouvre par une idée générale, se décline en 2 ou 3 sous-parties argumentées avec des faits concrets, des dates exactes ou des chiffres réels, et se termine par une phrase de transition.",
        "3. CONCLUSION (en un seul paragraphe) : Bilan synthétique des deux axes -> Réponse nette et précise à la problématique -> Élargissement ou ouverture du sujet vers l'avenir."
      ],
      conseilsRedaction: [
        "Utiliser des phrases courtes, claires et bien rythmées, faciles à lire et à mémoriser.",
        "Éviter les mots compliqués et le jargon abstrait : la précision des faits et des dates prime sur la lourdeur du style.",
        "Chaque argument doit être illustré par un exemple précis du cours (date, chiffre, nom de traité, d'institution ou d'acteur).",
        "Assurer la liaison logique entre les paragraphes grâce à des connecteurs simples (D'abord, En effet, De plus, Toutefois, Dès lors, En somme)."
      ]
    },
    commentaireDeDocument: {
      definition: "Le commentaire de document consiste à expliquer, analyser et apprécier un texte, une carte ou un tableau statistique à la lumière des connaissances du cours.",
      etapesNODDACI: {
        N: "Nature du document : texte historique, extrait de discours, article de presse, traité, accord, carte thématique, tableau statistique.",
        O: "Origine / Source : auteur de l'ouvrage, titre, maison d'édition ou journal, date de parution.",
        D: "Date de l'événement ou de publication.",
        D_dest: "Destinataire : public visé, peuple, assemblée, communauté internationale.",
        A: "Auteur : identité, fonction officielle, rôle historique ou politique.",
        C: "Contexte historique : circonstances politiques et économiques dans lesquelles le document a été produit.",
        I: "Idée générale : idée maîtresse qui résume le message principal du document."
      },
      recommandations: [
        "Pour 'Dégager l'idée générale' : formuler une phrase synthétique indiquant le thème central et la position exprimée.",
        "Pour 'Expliquer un passage' : clarifier le sens littéral puis développer les causes et faits historiques ou géographiques associés avec des données précises du cours sans faire de paraphrase.",
        "Pour 'Apprécier / Donner son avis' : adopter une démarche nuancée (reconnaître la part de vérité du propos tout en soulignant les limites ou les facteurs complémentaires)."
      ]
    },
    situationEvaluation: {
      definition: "La situation d'évaluation est un exercice pratique composé d'un texte de mise en situation et de trois consignes précises à traiter.",
      criteres: {
        C1: "Identification correcte du problème posé dans la situation (1 point)",
        C2: "Explication pertinente du passage ou des faits mentionnés (2,5 points)",
        C3: "Appréciation critique, point de vue argumenté et cohérent (2,5 points)",
        C4: "Justesse des faits, dates et chiffres mobilisés (1 point)"
      },
      demarche: [
        "Consigne 1 : Nommer directement le problème central (ex: 'Il s'agit de la gestion des crises dans l'espace CEDEAO' ou 'Le problème posé est l'impact de la colonisation sur la civilisation africaine').",
        "Consigne 2 : Expliquer la citation ou le fait en mobilisant les notions et repères exacts du cours.",
        "Consigne 3 : Prendre position de manière claire, argumentée et mesurée avec deux ou trois arguments solides."
      ]
    }
  },

  // =========================================================================
  // LEÇONS D'HISTOIRE TERMINALE (PROGRAMME OFFICIEL COMPLET)
  // =========================================================================
  histoireLessons: [
    // 1. Thème 1 - Leçon 1 : L'ONU
    {
      id: "onu-creation-fonctionnement-bilan",
      discipline: "Histoire",
      themeTitle: "Thème 1 : Les Relations Internationales de 1945 à nos jours",
      lessonTitle: "L'Organisation des Nations Unies (ONU) : Création, Fonctionnement et Bilan",
      keyDatesOrStats: {
        "14 août 1941": "Charte de l'Atlantique (Roosevelt et Churchill posent l'idée d'un système mondial de sécurité)",
        "1er janvier 1942": "Déclaration des Nations Unies à Washington par 26 nations antifascistes",
        "19-30 octobre 1943": "Conférence de Moscou (affirmation de l'égalité souveraine de tous les États)",
        "Septembre-Octobre 1944": "Conférence de Dumbarton Oaks (définition des organes majeurs de la future organisation)",
        "4-11 février 1945": "Conférence de Yalta (accord sur le principe du droit de veto des Grands)",
        "26 juin 1945": "Adoption et signature de la Charte de l'ONU à San Francisco par 50 États fondateurs",
        "24 octobre 1945": "Entrée en vigueur officielle de la Charte et naissance légale de l'ONU",
        "10 décembre 1948": "Adoption de la Déclaration Universelle des Droits de l'Homme (DUDH)",
        "1988": "Attribution du Prix Nobel de la Paix aux Casques bleus de l'ONU",
        "193": "Nombre total d'États membres actuels (Sud-Soudan devenu le 193e membre le 9 juillet 2011)"
      },
      keyConcepts: {
        "Droit de veto": "Droit accordé exclusivement aux 5 membres permanents du Conseil de sécurité de bloquer toute résolution non procédurale.",
        "Conseil de sécurité": "Organe exécutif suprême de 15 membres (5 permanents : USA, France, Royaume-Uni, Russie, Chine + 10 membres non permanents élus pour 2 ans).",
        "Assemblée Générale": "Organe délibérant regroupant tous les 193 États membres selon le principe démocratique 'un État = une voix'.",
        "Secrétariat Général": "Organe administratif dirigé par le Secrétaire général, élu pour 5 ans renouvelable (Antonio Guterres en exercice depuis 2017).",
        "Casques bleus": "Forces internationales de maintien de la paix déployées pour séparer les belligérants ou rétablir l'ordre.",
        "Institutions spécialisées": "UNESCO (éducation/culture, Paris 1946), OMS (santé, Genève 1948), FAO (agriculture/faim, Rome 1945), PAM, HCR, FMI, Banque Mondiale, CPI."
      },
      causesOrFactors: [
        "Échec cuisant de la Société des Nations (SDN) qui n'a pas pu empêcher la Seconde Guerre mondiale.",
        "Volonté des puissances alliées victorieuses d'édifier un système de sécurité collective durable pour épargner aux générations futures le fléau de la guerre.",
        "Nécessité de bâtir un cadre mondial de coopération économique, sociale et humanitaire."
      ],
      manifestationsOrDevelopments: [
        "Processus d'élaboration diplomatique progressif de 1941 à 1945 (Terre-Neuve, Washington, Moscou, Téhéran, Dumbarton Oaks, Yalta, San Francisco).",
        "Mise en place de 6 organes principaux (Assemblée Générale, Conseil de Sécurité, Secrétariat Général, Conseil Économique et Social, Cour Internationale de Justice, Conseil de Tutelle).",
        "Règlement pacifique des crises, vote de résolutions contraignantes, sanctions et déploiement de missions de maintien de la paix (Corée 1950, Égypte 1956, Congo 1961, Koweït 1990, Côte d'Ivoire 2003-2011)."
      ],
      consequencesOrEvaluation: [
        "Succès réels : absence de troisième guerre mondiale, progrès dans la décolonisation, lutte contre les épidémies et la faim, diffusion du droit international humanitaire, justice pénale internationale (TPI, CPI).",
        "Limites et échecs majeurs : paralysie par l'usage abusif du droit de veto (plus de 279 veto pendant la guerre froide), retards de cotisations, impuissance face aux guerres récentes (Irak, Syrie, Proche-Orient), persistance de la pauvreté.",
        "Réformes indispensables : élargir le Conseil de sécurité à l'Afrique et aux puissances émergentes (Brésil, Inde, Allemagne, Japon, Nigéria, Afrique du Sud), encadrer le droit de veto et renforcer l'Assemblée Générale."
      ],
      examDissertationPlan: {
        problemStatement: "Quel bilan peut-on dresser de l'action de l'ONU dans le maintien de la paix et la coopération internationale depuis 1945 ?",
        axes: [
          {
            axeTitle: "I. Des réalisations remarquables pour la paix, les droits de l'homme et le progrès social",
            arguments: [
              "Prévention efficace des conflits majeurs et parrainage d'accords historiques de désarmement nucléaire avec l'AIEA.",
              "Déploiement salvateur des Casques bleus sur plusieurs théâtres de crise (prix Nobel de la paix 1988).",
              "Actions humanitaires et sanitaires mondiales décisives à travers les agences spécialisées (UNICEF, OMS, PAM, FAO)."
            ]
          },
          {
            axeTitle: "II. Des limites structurelles et des échecs qui appellent une réforme urgente",
            arguments: [
              "Paralysie chronique du Conseil de sécurité due au blocage du droit de veto des cinq membres permanents.",
              "Incapacité à empêcher des conflits sanglants et des interventions unilatérales bafouant la Charte.",
              "Impératif de démocratisation par l'intégration de nouveaux membres permanents issus du Sud (Afrique, Amérique latine, Asie)."
            ]
          }
        ]
      }
    },

    // 2. Thème 1 - Leçon 2 : L'Ère de la Bipolarisation
    {
      id: "bipolarisation-guerre-froide-1947-1991",
      discipline: "Histoire",
      themeTitle: "Thème 1 : Les Relations Internationales de 1945 à nos jours",
      lessonTitle: "L'Ère de la Bipolarisation de 1947 à 1991 (La Guerre Froide)",
      keyDatesOrStats: {
        "12 mars 1947": "Énonciation de la Doctrine Truman (politique de containment / endiguement face au communisme)",
        "5 juin 1947": "Discours de Harvard par George Marshall proposant le Plan Marshall d'aide économique",
        "22-27 septembre 1947": "Conférence de Szklarska Poreba et Doctrine Jdanov (division du monde en deux camps)",
        "5 octobre 1947": "Création du Kominform (bureau de liaison et de coordination des partis communistes)",
        "16 avril 1948": "Création de l'OECE pour gérer et répartir l'aide du plan Marshall",
        "23 juin 1948 - 12 mai 1949": "Première crise de Berlin : Blocus soviétique de Berlin-Ouest et pont aérien américain de 275 000 vols",
        "4 avril 1949": "Signature du Traité de Washington créant l'OTAN (Organisation du Traité de l'Atlantique Nord)",
        "23 mai 1949": "Proclamation de la République Fédérale d'Allemagne (RFA, capitale Bonn, chancelier Adenauer)",
        "7 octobre 1949": "Création de la République Démocratique Allemande (RDA, capitale Pankow / Berlin-Est)",
        "25 janvier 1949": "Création du CAEM / COMECON (Conseil d'Aide Économique Mutuelle du bloc soviétique)",
        "14 mai 1955": "Signature du Pacte de Varsovie (alliance militaire du bloc communiste sous commandement soviétique)",
        "Février 1956": "XXe Congrès du PCUS : Nikita Khrouchtchev officialise la doctrine de la Coexistence Pacifique",
        "12-13 août 1961": "Construction du Mur de Berlin ('Mur de protection antifasciste' / 'Mur de la honte')",
        "22-28 octobre 1962": "Crise des missiles de Cuba : blocus naval américain et retrait négocié des fusées soviétiques",
        "23 juin 1963": "Installation du 'Téléphone rouge' (ligne de téléscripteur direct entre le Kremlin et la Maison Blanche)",
        "1er juillet 1968": "Signature du Traité de Non-Prolifération nucléaire (TNP)",
        "Mai 1972": "Signature des accords SALT 1 à Moscou entre Nixon et Brejnev limitant les missiles stratégiques",
        "27 janvier 1973": "Signature des Accords de Paris mettant fin à l'engagement militaire américain au Vietnam",
        "30 avril 1975": "Prise de Saïgon par les forces communistes et réunification du Vietnam sous régime communiste",
        "8 décembre 1987": "Traité de Washington signé par Reagan et Gorbatchev (élimination des euromissiles FNI)",
        "9 novembre 1989": "Chute du Mur de Berlin",
        "3 octobre 1990": "Réunification officielle de l'Allemagne",
        "21 décembre 1991": "Création de la CEI (Communauté des États Indépendants) marquant la fin de l'URSS",
        "25 décembre 1991": "Démission de Mikhaïl Gorbatchev et disparition officielle de l'Union Soviétique"
      },
      keyConcepts: {
        "Bipolarisation": "Division géopolitique du monde en deux blocs idéologiquement opposés : le bloc occidental capitaliste et le bloc oriental socialiste.",
        "Guerre froide": "État de tension permanente et de rivalité globale sans affrontement militaire direct entre les deux superpuissances (USA et URSS).",
        "Containment (Endiguement)": "Stratégie américaine visant à freiner l'avancée du communisme par l'aide économique et les alliances militaires.",
        "Coexistence pacifique": "Principe diplomatique initié par Khrouchtchev où les deux blocs acceptent leur existence réciproque tout en poursuivant leur compétition.",
        "Équilibre de la terreur": "Dissuasion mutuelle fondée sur la capacité de destruction réciproque totale en cas d'emploi de l'arme nucléaire.",
        "Perestroïka & Glasnost": "Programmes de restructuration économique et de transparence politique lancés par Gorbatchev en 1986."
      },
      causesOrFactors: [
        "Divergences idéologiques profondes entre le capitalisme libéral et le marxisme-léninisme.",
        "Désaccords sur le sort de la Pologne et le statut de l'Allemagne occupée au sortir de la guerre.",
        "Mise en place de régimes communistes ('démocraties populaires') sous contrôle soviétique en Europe de l'Est."
      ],
      manifestationsOrDevelopments: [
        "Structuration en deux blocs rivaux : OTAN (1949) et OCDE à l'Ouest vs Pacte de Varsovie (1955) et CAEM à l'Est.",
        "Succession de crises aiguës : Blocus de Berlin (1948-1949), Mur de Berlin (1961), Crise des fusées de Cuba (1962).",
        "Périodes de dégel et de détente jalonnées de traités de désarmement (Moscou 1963, TNP 1968, SALT 1 1972, Washington 1987).",
        "Guerres par procuration dans le tiers-monde, notamment la terrible guerre du Vietnam (1964-1975)."
      ],
      consequencesOrEvaluation: [
        "Division durable de l'Europe matérialisée par le rideau de fer et le Mur de Berlin pendant près de 30 ans.",
        "Dépenses militaires colossales épuisant l'économie soviétique.",
        "Échec des réformes de Gorbatchev, effondrement du bloc de l'Est en 1989 et disparition de l'URSS en décembre 1991, ouvrant l'ère d'un monde unipolaire."
      ],
      examDissertationPlan: {
        problemStatement: "Quelles sont les causes de la bipolarisation du monde et comment les relations entre les deux blocs ont-elles évolué de 1947 à 1991 ?",
        axes: [
          {
            axeTitle: "I. La rupture de 1947 et la structuration idéologique et militaire des deux blocs",
            arguments: [
              "Les divergences issues de l'après-guerre et la confrontation doctrinale : Truman (endiguement) face à Jdanov (anti-impérialisme).",
              "La mise en place des réseaux d'alliances militaires et économiques : OTAN et plan Marshall contre Pacte de Varsovie et CAEM.",
              "Le partage de l'Allemagne et la première crise de Berlin consacrant la division en deux républiques rivales (RFA et RDA)."
            ]
          },
          {
            axeTitle: "II. L'alternance de crises aiguës, de détente et l'implosion finale de l'URSS",
            arguments: [
              "Les moments de tension maximale frôlant la guerre nucléaire : le Mur de Berlin (1961) et la crise des fusées de Cuba (1962).",
              "L'instauration de la coexistence pacifique et de la détente ponctuée par les accords de désarmement (SALT, TNP).",
              "L'épuisement économique du modèle communiste, l'impact de la Perestroïka et la dislocation de l'Union Soviétique en 1991."
            ]
          }
        ]
      }
    },

    // 3. Thème 1 - Leçon 3 : Monde multipolaire
    {
      id: "monde-multipolaire-apres-guerre-froide",
      discipline: "Histoire",
      themeTitle: "Thème 1 : Les Relations Internationales de 1945 à nos jours",
      lessonTitle: "De la Fin de la Guerre Froide vers un Monde Multipolaire",
      keyDatesOrStats: {
        "1991-2000": "Décennie de l'hyperpuissance et du monde unipolaire dominé par les États-Unis",
        "Janvier-Février 1991": "Guerre du Golfe (Opération Tempête du désert pour libérer le Koweït)",
        "1992-1994": "Opération Restore Hope des États-Unis en Somalie",
        "1994": "Opération Uphold Democracy en Haïti pour réinstaller le président Aristide",
        "21 novembre 1995": "Accords de Dayton mettant fin à la guerre en Bosnie-Herzégovine sous égide américaine",
        "1999": "Intervention militaire de l'OTAN au Kosovo contre la Serbie",
        "11 septembre 2001": "Attentats terroristes d'Al-Qaïda contre le World Trade Center et le Pentagone (+3000 morts)",
        "Octobre 2001": "Intervention militaire américaine en Afghanistan contre le régime des Talibans",
        "Mars 2003": "Invasion américaine de l'Irak sans l'aval de l'ONU pour renverser Saddam Hussein",
        "1992": "Traité de Maastricht créant l'Union Européenne",
        "2001": "Création de l'Organisation de Coopération de Shanghai (OCS) regroupant la Russie, la Chine et l'Asie centrale"
      },
      keyConcepts: {
        "Hyperpuissance": "Terme qualifiant la suprématie totale des États-Unis dans tous les domaines (militaire, économique, financier, technologique, culturel).",
        "Monde unipolaire": "Système international dominé par une seule superpuissance sans rival équivalent (USA de 1991 à 2001).",
        "Monde multipolaire": "Organisation géopolitique actuelle caractérisée par l'existence de plusieurs pôles de puissance (USA, UE, Chine, Russie, BRICS, puissances régionales).",
        "Soft Power": "Capacité d'influence et de séduction culturelle, technologique et diplomatique d'un pays sans recours à la force armée.",
        "BRICS": "Regroupement des grandes puissances émergentes : Brésil, Russie, Inde, Chine et Afrique du Sud.",
        "Gendarme du monde": "Posture des États-Unis intervenant militairement sur tous les continents pour imposer leur vision de la sécurité et de la démocratie."
      },
      causesOrFactors: [
        "Disparition de l'Union Soviétique en 1991 laissant les États-Unis sans adversaire à leur mesure.",
        "Vulnérabilité révélée par les attentats du 11 septembre 2001 et l'enlisement des guerres en Afghanistan et en Irak.",
        "Montée en puissance économique spectaculaire de la Chine et émergence des BRICS.",
        "Affirmation de l'Union Européenne et renouveau géopolitique de la Russie."
      ],
      manifestationsOrDevelopments: [
        "Interventions américaines multiformes sous mandat de l'ONU ou de l'OTAN dans les années 1990.",
        "Unilatéralisme américain contesté lors de la guerre d'Irak de 2003.",
        "Émergence de pôles d'influence concurrents : l'UE (1er espace économique), la Chine (2e puissance mondiale et investisseur majeur en Afrique), la Russie (énergie et armement), l'Inde et le Brésil."
      ],
      consequencesOrEvaluation: [
        "Fin de l'hégémonie absolue des États-Unis et fin du monde unipolaire.",
        "Nouvelle configuration géopolitique complexe, marquée par une rivalité accrue entre grandes puissances et des tensions régionales aiguës (Moyen-Orient, Sahel, Europe de l'Est)."
      ],
      examDissertationPlan: {
        problemStatement: "Comment est-on passé de l'hyperpuissance américaine des années 1990 à l'avènement d'un monde multipolaire après 2001 ?",
        axes: [
          {
            axeTitle: "I. L'hégémonie et le leadership sans partage des États-Unis de 1991 à 2001",
            arguments: [
              "Une suprématie incontestée sur les plans militaire (OTAN, bases mondiales), économique (dollar, Wall Street) et culturel (soft power).",
              "Le rôle de gendarme du monde à travers des interventions victorieuses (Guerre du Golfe 1991, Haïti, accords de Dayton 1995).",
              "La diffusion universelle du modèle libéral et démocratique au lendemain de la chute de l'URSS."
            ]
          },
          {
            axeTitle: "II. Le choc du 11 septembre 2001 et l'émergence des nouveaux pôles d'influence mondiaux",
            arguments: [
              "Les attentats de 2001 et l'enlisement américain en Afghanistan et en Irak qui ont révélé les failles de l'hyperpuissance.",
              "L'ascension fulgurante de la Chine et le dynamisme géopolitique des BRICS (Russie, Inde, Brésil).",
              "Le poids croissant de l'Union Européenne et l'affirmation des puissances régionales redessinant un monde multipolaire."
            ]
          }
        ]
      }
    },

    // 4. Thème 2 - Leçon 1 : Montée des nationalismes en Afrique
    {
      id: "montee-des-nationalismes-en-afrique",
      discipline: "Histoire",
      themeTitle: "Thème 2 : De la Décolonisation aux Efforts d'Organisation de l'Afrique",
      lessonTitle: "La Montée des Nationalismes en Afrique",
      keyDatesOrStats: {
        "1944": "Création du Syndicat Agricole Africain (SAA) par Félix Houphouët-Boigny en Côte d'Ivoire",
        "20 février 1946": "Abolition du code de l'indigénat dans les colonies françaises",
        "5 et 11 avril 1946": "Vote de la Loi Houphouët-Boigny supprimant définitivement le travail forcé dans les colonies",
        "11 et 16 avril 1946": "Lois accordant la liberté de réunion et la liberté d'association aux peuples colonisés",
        "7 mai 1946": "Loi Lamine Guèye accordant la citoyenneté française à tous les ressortissants d'outre-mer",
        "18 octobre 1946": "Congrès constitutif du Rassemblement Démocratique Africain (RDA) à Bamako",
        "Avril 1955": "Conférence de Bandung (affirmation de la solidarité afro-asiatique et condamnation du colonialisme)",
        "23 juin 1956": "Adoption de la Loi-Cadre Defferre accordant l'autonomie interne aux territoires d'outre-mer",
        "28 septembre 1958": "Référendum sur la Communauté Franco-Africaine (rejetée par la Guinée de Sékou Touré)",
        "1960": "L'année de l'Afrique : 17 pays africains accèdent à la souveraineté nationale"
      },
      keyConcepts: {
        "Nationalisme africain": "Prise de conscience collective des peuples colonisés exigeant la dignité, l'égalité des droits et l'indépendance nationale.",
        "Facteurs endogènes": "Causes internes à l'Afrique (bourgeoisie agricole, intellectuels formés à l'école, frustrations de l'indigénat et des corvées, anciens combattants).",
        "Facteurs exogènes": "Causes extérieures (affaiblissement des métropoles après 1945, anticolonialisme des USA et de l'URSS, Charte de l'ONU, conférence de Bandung).",
        "Négritude": "Mouvement littéraire et culturel fondé par Aimé Césaire, Léopold Sédar Senghor et Léon-Gontran Damas pour réhabiliter les valeurs du monde noir.",
        "Mouvements messianiques": "Courants religieux de contestation spirituelle annonçant la libération de l'homme noir (Harrisme de William Wade Harris, Kimbanguisme de Simon Kimbangu)."
      },
      causesOrFactors: [
        "Facteurs externes : soutien des USA et de l'URSS, impact de la Charte de l'ONU proclamant le droit des peuples à disposer d'eux-mêmes, esprit de Bandung 1955.",
        "Facteurs internes : exploitation coloniale (travaux forcés, spoliation des terres, fiscalité lourde), émergence d'élites instruites, démystification de l'homme blanc par les anciens combattants des deux guerres."
      ],
      manifestationsOrDevelopments: [
        "Mouvements politiques et syndicaux : RDA, PDCI, CPP de Kwame Nkrumah au Ghana, FLN en Algérie, SAA, UGTAN.",
        "Formes d'actions : meetings, grèves, boycotts des produits coloniaux, désobéissance civile, créations de journaux et négociations électorales.",
        "Mouvements culturels et religieux : la Négritude, la revue Présence Africaine, les syndicats étudiants (FEANF), le Harrisme et le Kimbanguisme."
      ],
      consequencesOrEvaluation: [
        "Acquis sociaux majeurs : abolition du travail forcé (Loi Houphouët-Boigny 1946), suppression de l'indigénat, libertés publiques reconnues.",
        "Acquis politiques décisifs : Loi-Cadre de 1956, autonomie de 1958 et vague historique des indépendances dès 1960."
      ],
      examDissertationPlan: {
        problemStatement: "Quels sont les facteurs de l'éveil du nationalisme en Afrique et comment ses mouvements ont-ils conduit aux indépendances ?",
        axes: [
          {
            axeTitle: "I. La conjonction favorable des facteurs internes et internationaux",
            arguments: [
              "Les facteurs endogènes : les souffrances du système colonial (travaux forcés, indigénat) et l'action des élites instruites et des anciens combattants.",
              "Les facteurs exogènes : l'affaiblissement des métropoles européennes après la Seconde Guerre mondiale et la pression anticoloniale des USA et de l'URSS.",
              "Le rôle d'accélérateur joué par la Charte de l'ONU et la conférence de Bandung (1955)."
            ]
          },
          {
            axeTitle: "II. Les diverses formes de luttes et les conquêtes vers la souveraineté",
            arguments: [
              "L'action politique et syndicale déterminante des partis de masse (RDA, CPP, FLN) et des syndicats (SAA, UGTAN).",
              "La mobilisation culturelle de la Négritude et l'impact spirituel des mouvements messianiques (Harrisme, Kimbanguisme).",
              "Les acquis progressifs : réformes sociales de 1946, autonomie politique (Loi-Cadre 1956) et couronnement par les indépendances de 1960."
            ]
          }
        ]
      }
    },

    // 5. Thème 2 - Leçon 2 : Accession de la Côte d'Ivoire à l'indépendance
    {
      id: "accession-cote-ivoire-independance",
      discipline: "Histoire",
      themeTitle: "Thème 2 : De la Décolonisation aux Efforts d'Organisation de l'Afrique",
      lessonTitle: "L'Accession de la Côte d'Ivoire à l'Indépendance (1944–1960)",
      keyDatesOrStats: {
        "30 janvier - 8 février 1944": "Conférence de Brazzaville ouvrant les premières réformes coloniales",
        "8 août 1944": "Création du Syndicat Agricole Africain (SAA) par Félix Houphouët-Boigny",
        "21 octobre 1945": "Élection de Félix Houphouët-Boigny comme député de Côte d'Ivoire à l'Assemblée constituante",
        "11 avril 1946": "Adoption de la Loi Houphouët-Boigny abolissant le travail forcé",
        "9 avril 1946": "Création du PDCI (Parti Démocratique de Côte d'Ivoire) à Abidjan (Étoile du Sud)",
        "18 octobre 1946": "Création du Rassemblement Démocratique Africain (RDA) à Bamako, présidé par Houphouët-Boigny",
        "27 octobre 1946": "Constitution de la IVe République créant l'Union Française",
        "30 décembre 1948": "Création du Bloc Démocratique Éburnéen (BDE) d'Étienne Djaument, soutenu par les colons contre le PDCI",
        "6 février 1949": "Incidents et arrestation de 8 membres du comité directeur du PDCI à Treichville (Mockey, Dadié, Ekra, etc.)",
        "22-24 décembre 1949": "Historique Marche des femmes sur la prison de Grand-Bassam pour exiger la libération des détenus",
        "Janvier 1950": "Répression sanglante coloniale à Bouaflé, Séguéla et Dimbokro (52 morts et près de 3000 blessés)",
        "7 octobre 1950": "Discours historique du stade Géo André à Abidjan : rupture avec le PCF (désapparentement) et ralliement à l'UDSR",
        "23 juin 1956": "Promulgation de la Loi-Cadre Defferre (instauration du suffrage universel et d'un Conseil de gouvernement)",
        "28 septembre 1958": "Référendum approuvant la Communauté franco-africaine (la Côte d'Ivoire devient république autonome)",
        "7 août 1960": "Proclamation solennelle de l'Indépendance de la République de Côte d'Ivoire par Félix Houphouët-Boigny"
      },
      keyConcepts: {
        "Apparentement": "Alliance parlementaire tactique conclue en 1946 entre le RDA et le Parti Communiste Français (PCF) pour faire voter les lois émancipatrices.",
        "Désapparentement": "Rupture stratégique du PDCI-RDA avec les communistes le 7 octobre 1950 sous l'impulsion de François Mitterrand (UDSR) pour sortir de la répression coloniale.",
        "Gouverneur Laurent Péchoux": "Administrateur colonial nommé pour combattre le PDCI-RDA par des arrestations et la violence de 1948 à 1951.",
        "Gouverneur André Latrille": "Gouverneur progressiste ayant soutenu les réformes de Brazzaville et la création du SAA.",
        "Loi-Cadre Defferre": "Loi fondamentale de 1956 instituant l'autonomie administrative, le collège unique et le Conseil de gouvernement local.",
        "Territorialistes vs Fédéralistes": "Débat opposant les partisans de l'autonomie par État (Houphouët-Boigny) aux partisans d'une fédération d'Afrique noire (Senghor)."
      },
      causesOrFactors: [
        "Injustices coloniales en Côte d'Ivoire (travaux forcés, spoliation des terres par les colons planteurs).",
        "Leadership visionnaire et pragmatique de Félix Houphouët-Boigny.",
        "Mobilisation populaire massive des planteurs, des femmes et des jeunes au sein du PDCI-RDA."
      ],
      manifestationsOrDevelopments: [
        "1. La phase de l'espoir (1944-1947) : création du SAA, suppression du travail forcé, naissance du PDCI et du RDA.",
        "2. La phase de la lutte et de la répression (1947-1950) : alliance PCF, persécutions de Péchoux, marche des femmes de Bassam, fusillade de Dimbokro (1950).",
        "3. La phase de la collaboration vers l'indépendance (1950-1960) : désapparentement au stade Géo André, Loi-Cadre de 1956, Communauté de 1958 et proclamation du 7 août 1960."
      ],
      consequencesOrEvaluation: [
        "Accession pacifique et négociée de la Côte d'Ivoire à la souveraineté nationale sans guerre ouverte.",
        "Maintien de relations étroites de coopération économique et d'amitié avec la France après 1960."
      ],
      examDissertationPlan: {
        problemStatement: "Comment la Côte d'Ivoire a-t-elle mené sa lutte politique de 1944 à 1960 pour accéder à la souveraineté nationale ?",
        axes: [
          {
            axeTitle: "I. De l'espoir initial à l'épreuve de la répression coloniale (1944–1950)",
            arguments: [
              "L'éveil corporatiste avec le SAA et la victoire parlementaire historique de la suppression du travail forcé (Loi Houphouët-Boigny 1946).",
              "La structuration du mouvement anticolonial à travers la fondation du PDCI et du RDA à Bamako.",
              "L'apparentement au PCF, le durcissement du gouverneur Péchoux et les actes héroïques de résistance (Marche des femmes de Bassam, Dimbokro 1950)."
            ]
          },
          {
            axeTitle: "II. Le virage stratégique de la collaboration et la marche vers l'indépendance (1950–1960)",
            arguments: [
              "Le désapparentement historique du 7 octobre 1950 et le choix du réalisme politique sous l'égide de François Mitterrand.",
              "La conquête des responsabilités locales grâce à la Loi-Cadre de 1956 et à l'entrée d'Houphouët-Boigny au gouvernement français.",
              "L'étape de la Communauté franco-africaine de 1958 et la proclamation solennelle de l'indépendance le 7 août 1960."
            ]
          }
        ]
      }
    },

    // 6. Thème 2 - Leçon 3 : Accession de l'Algérie à l'indépendance
    {
      id: "accession-algerie-independance",
      discipline: "Histoire",
      themeTitle: "Thème 2 : De la Décolonisation aux Efforts d'Organisation de l'Afrique",
      lessonTitle: "L'Accession de l'Algérie à l'Indépendance (1954–1962)",
      keyDatesOrStats: {
        "1830": "Début de la conquête et de l'occupation coloniale française en Algérie",
        "9 décembre 1848": "L'Algérie est déclarée partie intégrante de la France et divisée en 3 départements (Alger, Oran, Constantine)",
        "1927": "Création de l'Étoile Nord-Africaine par Messali Hadj (devenue PPA en 1939 puis MTLD en 1946)",
        "1931": "Création de l'Association des Oulémas par Abdelhamid Ben Badis ('L'Islam est ma religion, l'Arabe ma langue, l'Algérie ma patrie')",
        "10 février 1943": "Publication du Manifeste du peuple algérien par Ferhat Abbas réclamant liberté et égalité",
        "8 mai 1945": "Massacres de Sétif et Guelma (répression féroce faisant entre 8 000 et 15 000 morts algériens)",
        "20 septembre 1947": "Statut de l'Algérie instituant une assemblée à double collège (jamais appliqué équitablement)",
        "Mars 1954": "Création du CRUA (Comité Révolutionnaire d'Unité et d'Action) par Belkacem Krim, Ben Boulaïd et Ben M'Hidi",
        "Nuit du 31 oct au 1er nov 1954": "La 'Toussaint Rouge' : vague d'attentats coordonnés marquant le déclenchement de la guerre d'Algérie par le FLN",
        "1956": "Intensification de la guérilla urbaine et soutien des pays voisins (Maroc, Tunisie, Égypte)",
        "13 mai 1958": "Insurrection des colons et généraux à Alger, création du Comité de Salut Public et appel au Général De Gaulle",
        "1er juin 1958": "Retour au pouvoir du Général De Gaulle à Paris (naissance de la Ve République)",
        "4 juin 1958": "Discours de De Gaulle à Alger : « Algériens, je vous ai compris ! »",
        "Octobre 1958": "Création du GPRA (Gouvernement Provisoire de la République Algérienne)",
        "24-31 janvier 1960": "Semaine des barricades à Alger déclenchée par les colons hostiles à l'autodétermination",
        "22 avril 1961": "Putsch avorté des généraux de l'OAS à Paris contre la politique algérienne de De Gaulle",
        "18 mars 1962": "Signature des Accords d'Évian consacrant l'indépendance de l'Algérie et le cessez-le-feu",
        "8 avril 1962": "Référendum en France approuvant les Accords d'Évian",
        "1er juillet 1962": "Référendum d'autodétermination en Algérie (plus de 90 % de OUI)",
        "3 juillet 1962": "Proclamation officielle de l'indépendance de l'Algérie (Ahmed Ben Bella premier président)",
        "1 000 000": "Nombre approximatif de victimes algériennes au terme de 8 années de guerre"
      },
      keyConcepts: {
        "Colonie de peuplement": "Territoire où la métropole installe une importante population européenne (1 million de pieds-noirs) accaparant terres fertiles et pouvoir.",
        "FLN & ALN": "Front de Libération Nationale (bras politique) et Armée de Libération Nationale (bras armé) fondés en 1954 pour mener la lutte armée.",
        "OAS": "Organisation de l'Armée Secrète, organisation terroriste clandestine créée par des colons et des militaires français pour maintenir l'Algérie française.",
        "La Valise ou le Cercueil": "Slogan illustrant le dilemme tragique des Européens d'Algérie face à l'indépendance ('Partir ou Mourir').",
        "Accords d'Évian": "Traités historiques signés le 18 mars 1962 garantissant l'intégrité du territoire (Sahara inclus) et la souveraineté de l'Algérie."
      },
      causesOrFactors: [
        "Inégalités criantes entre 1 million d'Européens privilégiés et plus de 8 millions d'Algériens musulmans indigents et sans droits réels.",
        "Échec des voies pacifiques et assimilationnistes après la tragédie de Sétif (1945) et le blocage des colons.",
        "Volonté inébranlable du peuple algérien de reconquérir sa souveraineté par l'insurrection armée."
      ],
      manifestationsOrDevelopments: [
        "Déclenchement de la guerre lors de la Toussaint Rouge (1er novembre 1954) par le CRUA/FLN.",
        "Guerre totale marquée par la guérilla, le terrorisme urbain, le quadrillage, les regroupements et la torture.",
        "Chute de la IVe République le 13 mai 1958 et retour du Général De Gaulle.",
        "Négociations complexes entre le gouvernement français et le GPRA/FLN aboutissant aux accords d'Évian (18 mars 1962)."
      ],
      consequencesOrEvaluation: [
        "Indépendance chèrement conquise le 3 juillet 1962 au prix d'environ 1 million de morts.",
        "Exode massif des pieds-noirs vers la France.",
        "L'Algérie s'impose comme un modèle universel de libération nationale anticoloniale par la lutte armée."
      ],
      examDissertationPlan: {
        problemStatement: "Quelles sont les causes du conflit algérien et les grandes étapes ayant conduit à l'indépendance de 1954 à 1962 ?",
        axes: [
          {
            axeTitle: "I. Les origines de la révolte et l'embrasement de la lutte armée (1954–1958)",
            arguments: [
              "Le statut inégalitaire de l'Algérie française et la montée des trois courants nationalistes (Oulémas, Messali Hadj, Ferhat Abbas).",
              "La rupture de la Toussaint Rouge de 1954 sous l'égide du FLN après l'échec des réformes pacifiques et le drame de Sétif.",
              "L'escalade militaire, la guérilla, la répression coloniale et l'internationalisation du dossier algérien."
            ]
          },
          {
            axeTitle: "II. De la crise de la IVe République aux Accords d'Évian et à la proclamation (1958–1962)",
            arguments: [
              "La crise du 13 mai 1958, le retour du Général De Gaulle et la marche inéluctable vers l'autodétermination.",
              "La résistance désespérée et violente des partisans de l'Algérie française et de l'OAS.",
              "La signature des Accords d'Évian du 18 mars 1962, le référendum victorieux et la proclamation de l'indépendance en juillet 1962."
            ]
          }
        ]
      }
    },

    // 7. Thème 2 - Leçon 4 : L'Union Africaine (U.A.)
    {
      id: "union-africaine-creation-bilan",
      discipline: "Histoire",
      themeTitle: "Thème 2 : De la Décolonisation aux Efforts d'Organisation de l'Afrique",
      lessonTitle: "L'Union Africaine (U.A.) : Naissance, Fonctionnement et Bilan",
      keyDatesOrStats: {
        "25 mai 1963": "Création de l'Organisation de l'Unité Africaine (OUA) à Addis-Abeba en Éthiopie",
        "8-9 septembre 1999": "Session extraordinaire de Syrte I (Libye) décidant la transformation de l'OUA en Union Africaine (initiative de Kadhafi)",
        "Juillet 2000": "Sommet de Lomé (Togo) adoptant l'Acte constitutif de l'Union Africaine",
        "Juillet 2001": "Sommet de Lusaka (Zambie) établissant le programme de mise en place des organes",
        "9 juillet 2002": "Sommet de Durban (Afrique du Sud) : signature officielle et lancement opérationnel de l'Union Africaine (UA)",
        "Mars 2008": "Intervention des forces de l'UA aux Comores rétablissant la légalité constitutionnelle",
        "2012": "Condamnation du coup d'État du capitaine Sanogo au Mali",
        "2015": "Condamnation du coup d'État du général Diendéré au Burkina Faso",
        "55": "Nombre d'États membres de l'UA (la totalité des pays du continent africain)",
        "12 %": "Faiblesse persistante des échanges commerciaux intra-africains",
        "95 %": "Part excessive du budget des programmes de paix financée par des partenaires extérieurs"
      },
      keyConcepts: {
        "Conférence de l'Union": "Organe suprême de l'UA regroupant les chefs d'État et de gouvernement, se réunissant au moins une fois par an avec une présidence tournante annuelle.",
        "Commission de l'UA": "Secrétariat exécutif basé à Addis-Abeba, chargé de la gestion quotidienne (dirigé par le Président de la Commission, Moussa Faki Mahamat).",
        "Conseil de Paix et de Sécurité (CPS)": "Organe décisionnel permanent de 15 membres pour la prévention, la gestion et le règlement des conflits armés.",
        "Parlement Panafricain (PAP)": "Organe législatif et consultatif siégeant à Midrand (Afrique du Sud), composé de 5 députés par pays membre.",
        "Droit d'ingérence démocratique": "Principe novateur de l'UA lui donnant le droit d'intervenir dans les affaires internes d'un État membre en cas de coup d'État, de génocide ou de crimes contre l'humanité.",
        "Institutions financières de l'UA": "Banque Centrale Africaine (BCA), Fonds Monétaire Africain (FAM), Banque Africaine d'Investissement (BAI)."
      },
      causesOrFactors: [
        "Inadaptation et impuissance des structures de l'ancienne OUA face aux conflits postcoloniaux.",
        "Risque de marginalisation économique et géopolitique de l'Afrique dans le cadre de la mondialisation.",
        "Nécessité de promouvoir la démocratie, la bonne gouvernance et l'intégration économique réelle."
      ],
      manifestationsOrDevelopments: [
        "Processus institutionnel en 4 sommets historiques (Syrte 1999, Lomé 2000, Lusaka 2001, Durban 2002).",
        "Mise en place d'organes politiques, judiciaires (Cour Africaine des Droits de l'Homme), économiques et sécuritaires (CPS).",
        "Missions d'interposition et de médiation (Somalie, Darfour, Comores, Côte d'Ivoire)."
      ],
      consequencesOrEvaluation: [
        "Succès : rejet catégorique des coups d'État, actions du CPS, intégration du NEPAD et appui aux projets de développement via la BAD.",
        "Échecs et limites : lourde dépendance financière vis-à-vis des bailleurs étrangers (Union Européenne, Chine qui a construit le siège), retards de cotisations des États, terrorisme au Sahel, retard dans la monnaie unique et lenteur des décisions."
      ],
      examDissertationPlan: {
        problemStatement: "Quelles sont les raisons de la création de l'Union Africaine et quel bilan peut-on dresser de son fonctionnement depuis 2002 ?",
        axes: [
          {
            axeTitle: "I. Les fondements, objectifs et succès de l'Union Africaine",
            arguments: [
              "La volonté de dépasser les échecs de l'OUA pour accélérer l'intégration politique et économique de l'Afrique.",
              "Des principes démocratiques affirmés et le droit d'ingérence contre les prises de pouvoir inconstitutionnelles.",
              "Des interventions positives pour la paix (Comores 2008, Darfour, Somalie) et le soutien aux programmes de développement (NEPAD, BAD)."
            ]
          },
          {
            axeTitle: "II. Les lourdes pesanteurs structurelles et les défis à surmonter",
            arguments: [
              "La dépendance financière critique de l'organisation vis-à-vis de l'aide extérieure et les arriérés de cotisations.",
              "L'impuissance face à la résurgence des coups d'État et à l'expansion des mouvements terroristes au Sahel.",
              "Le retard d'intégration monétaire et la faiblesse criante du commerce intra-africain (environ 12 %)."
            ]
          }
        ]
      }
    },

    // 8. Thème 3 - Leçon 1 : Croyances et valeurs du monde occidental
    {
      id: "croyances-valeurs-monde-occidental",
      discipline: "Histoire",
      themeTitle: "Thème 3 : Croyances et Valeurs dans le Monde d'Aujourd'hui",
      lessonTitle: "Croyances et Valeurs Dominantes dans le Monde Occidental",
      keyDatesOrStats: {
        "Fin VIe siècle av. J.-C.": "Clisthène établit les bases de la démocratie athénienne (égalité de tous les citoyens devant la loi)",
        "1690": "John Locke publie le 'Traité du gouvernement civil' fondant le libéralisme politique et la souveraineté du peuple",
        "4 juillet 1776": "Déclaration d'indépendance des États-Unis affirmant les droits inaliénables à la liberté",
        "26 août 1789": "Déclaration des Droits de l'Homme et du Citoyen en France (liberté, égalité, souveraineté nationale)",
        "XIXe-XXe siècle": "Synthèse du libéralisme politique et de l'économie de marché capitaliste"
      },
      keyConcepts: {
        "Monde occidental": "Espace géopolitique et culturel comprenant l'Amérique du Nord, l'Europe de l'Ouest, l'Australie, le Japon et la Corée du Sud, unifié par des valeurs démocratiques et libérales.",
        "Démocratie libérale": "Régime politique fondé sur la primauté de l'individu, le suffrage universel, le multipartisme, la séparation des pouvoirs (exécutif, législatif, judiciaire) et la liberté d'expression.",
        "Libéralisme économique": "Système capitaliste fondé sur la propriété privée, la liberté d'entreprendre, la recherche du profit, la libre concurrence et la loi du marché (offre et demande).",
        "Héritage gréco-romain": "Démocratie athénienne et droit romain (notions d'État de droit, de justice et d'administration des personnes).",
        "Héritage judéo-chrétien": "Valeurs de dignité humaine, morale monothéiste, sens de la liberté et solidarité fraternelle.",
        "Société de consommation": "Mode de vie marqué par l'abondance matérielle, la production industrielle de masse, l'individualisme et la puissance des médias."
      },
      causesOrFactors: [
        "Héritage historique antique (démocratie grecque, droit romain, monothéisme judéo-chrétien).",
        "Philosophie des Lumières et révolutions anglaise (1689), américaine (1776) et française (1789).",
        "Révolution industrielle et triomphe du capitalisme de marché."
      ],
      manifestationsOrDevelopments: [
        "Politique : séparation stricte des pouvoirs, primauté de la Constitution, régimes présidentiels (USA) ou parlementaires (Grande-Bretagne, Allemagne).",
        "Économique : libre entreprise, mondialisation des firmes multinationales et puissance financière (Wall Street).",
        "Socio-culturel : sécularisation, liberté des mœurs, épanouissement individuel, créativité artistique et essor des technologies d'information."
      ],
      consequencesOrEvaluation: [
        "Attractivité mondiale de l'art de vivre occidental (American way of life, cinéma, musique, mode, libertés civiques).",
        "Limites et dérives : exclusion sociale et pauvreté des minorités, individualisme excessif, violences urbaines, lobbying financier et remise en cause par les valeurs traditionnelles d'autres civilisations."
      ],
      examDissertationPlan: {
        problemStatement: "Quels sont les fondements des croyances et valeurs du monde occidental et quelles sont les limites de leur rayonnement contemporain ?",
        axes: [
          {
            axeTitle: "I. Les fondements historiques et les piliers politiques et économiques de l'Occident",
            arguments: [
              "Un héritage séculaire gréco-romain et judéo-chrétien complété par la philosophie des droits de l'homme (1776, 1789).",
              "Les principes cardinaux de la démocratie libérale : libertés fondamentales, séparation des pouvoirs et suffrage universel.",
              "La puissance du libéralisme économique : libre entreprise, recherche du profit et société d'abondance."
            ]
          },
          {
            axeTitle: "II. Le rayonnement mondial et les contradictions internes du modèle occidental",
            arguments: [
              "La diffusion universelle de la culture occidentale par les médias et l'attrait pour le mode de vie démocratique.",
              "Les dérives internes : montée des inégalités, paupérisation des plus faibles, puissance des lobbys et montée des extrémismes.",
              "La contestation de l'hégémonie occidentale par l'émergence d'autres modèles culturels et de puissances alternatives."
            ]
          }
        ]
      }
    },

    // 9. Thème 3 - Leçon 2 : Mutations de la civilisation négro-africaine
    {
      id: "mutations-civilisation-negro-africaine",
      discipline: "Histoire",
      themeTitle: "Thème 3 : Croyances et Valeurs dans le Monde d'Aujourd'hui",
      lessonTitle: "Les Mutations Contemporaines de la Civilisation Négro-Africaine",
      keyDatesOrStats: {
        "Période précoloniale": "Sociétés traditionnelles communautaires et animistes structurées en royaumes/empires ou chefferies villageoises",
        "XVIIIe-XIXe siècle": "Intensification des contacts avec l'Occident et colonisation bouleversant les structures ancestrales",
        "1960 à nos jours": "Mondialisation, urbanisation galopante et émergence de la société africaine moderne métissée"
      },
      keyConcepts: {
        "Civilisation négro-africaine": "Ensemble des valeurs culturelles, politiques, économiques, sociales et religieuses propres aux peuples d'Afrique noire.",
        "Sociétés étatiques précoloniales": "Royaumes et empires centralisés (Mossi, Ashanti, Dahomey, Ghana, Mali, Samory, Émirat de Kano) où le pouvoir sacré du roi est tempéré par l'arbre à palabres, les chefs de terre et la Reine-Mère.",
        "Sociétés sans État (Chefferies)": "Démocraties villageoises et gestion collégiale par les générations et classes d'âge (Krou, Akan lagunaires : Ébrié, Attié, Adjoukrou).",
        "Animisme": "Religion ancestrale africaine croyant en un Dieu suprême créateur (Gnamien, Lagô, Kolotchôlô) vénéré à travers les ancêtres, les génies et une force vitale universelle.",
        "Gérontocratie & Poro": "Pouvoir et transmission du savoir détenus par les anciens et initiés (système initiatique du Poro chez les Sénoufo).",
        "Mutations contemporaines": "Transformations apportées par l'école occidentale, l'économie monétaire, les cultures d'exportation, l'urbanisation et les religions révélées (christianisme, islam, syncrétismes comme le Harrisme ou le Kimbanguisme)."
      },
      causesOrFactors: [
        "La colonisation européenne imposant l'administration directe et le modèle occidental.",
        "L'école moderne valorisant le savoir de la jeunesse au détriment du rôle sacré des vieillards.",
        "L'introduction de la monnaie et du salariat détruisant le troc et l'entraide communautaire.",
        "L'urbanisation favorisant le brassage ethnique, l'individualisme et l'éclatement de la grande famille."
      ],
      manifestationsOrDevelopments: [
        "Politique : création d'États aux frontières coloniales, institutions modernes (Présidence, Parlement), affaiblissement des chefs traditionnels.",
        "Économique : passage de la subsistance à l'économie de marché, propriété privée des terres, cultures d'exportation.",
        "Sociale : montée de la famille nucléaire, recul de la dot et du mariage traditionnel au profit du mariage civil, émancipation de la femme par les études et le travail, interdiction de l'excision et de la polygamie légale.",
        "Culturelle : adoption de la mode et des langues occidentales, diffusion du christianisme et de l'islam, syncrétismes religieux."
      ],
      consequencesOrEvaluation: [
        "Crise identitaire et acculturation face à la modernité occidentale.",
        "Résistance vivace des valeurs positives : solidarité africaine lors des funérailles et mariages, maintien des chefferies coutumières et respect des attaches communautaires."
      ],
      examDissertationPlan: {
        problemStatement: "Quels étaient les traits de la société négro-africaine traditionnelle et quelles sont les mutations majeures provoquées par son contact avec l'Occident ?",
        axes: [
          {
            axeTitle: "I. Les grands traits de la civilisation négro-africaine traditionnelle précoloniale",
            arguments: [
              "Une organisation politique variée : royautés sacrées tempérées par la palabre et démocraties villageoises fondées sur les classes d'âge.",
              "Une économie de subsistance solidaire basée sur la terre collective, l'agriculture vivrière, l'artisanat d'art et le troc.",
              "Une société communautaire et spirituelle unie par le culte d'un Dieu suprême, l'initiation (Poro) et la solidarité familiale."
            ]
          },
          {
            axeTitle: "II. Les facteurs de mutation et le visage de la société africaine contemporaine",
            arguments: [
              "L'impact transformateur de la colonisation, de l'école occidentale, de l'économie monétaire et de l'urbanisation.",
              "Les bouleversements modernes : émergence de l'État-nation, promotion de la famille nucléaire, émancipation féminine et nouvelles religions.",
              "La synthèse culturelle entre l'adoption de la modernité et la résilience tenace des valeurs de solidarité ancestrale."
            ]
          }
        ]
      }
    }
  ],

  // =========================================================================
  // LEÇONS DE GÉOGRAPHIE TERMINALE (PROGRAMME OFFICIEL COMPLET)
  // =========================================================================
  geographieLessons: [
    // 1. Thème 1 - Leçon 1 : Les Fondements du Développement de la Côte d'Ivoire
    {
      id: "fondements-developpement-cote-ivoire",
      discipline: "Géographie",
      themeTitle: "Thème 1 : La Côte d'Ivoire : Étude Économique",
      lessonTitle: "Les Fondements du Développement Économique de la Côte d'Ivoire",
      keyDatesOrStats: {
        "Superficie": "322 462 km² (soit 1 % du continent africain)",
        "Position": "Entre 4°30 et 10°30 de latitude Nord (Afrique occidentale humide)",
        "Population (2020)": "Estimée à plus de 26 millions d'habitants (contre 3,8M en 1960 et 22,6M au RGPH 2014)",
        "Moins de 15 ans": "45 % de la population totale (jeunesse dynamique et en régénération)",
        "Façade maritime": "520 km de côte sur l'océan Atlantique avec deux grands ports (Abidjan et San-Pédro)",
        "Mix électrique (2019)": "2 230 MW d'électricité produite (75 % assuré par le thermique Azito 35 % et Ciprel 40 %, complété par l'hydroélectricité)",
        "Barrages hydroélectriques": "6 grands barrages (Taabo et Kossou sur le Bandama ; Buyo et Soubré sur le Sassandra ; Ayamé 1 et 2 sur la Bia)",
        "Réserves minières & énergétiques": "Or (+600 t de réserves, 32,5 t produites en 2019 à Tongon, Bonikro, Ity), Nickel (660 000 t à Sipilou), Manganèse (1,2 t à Grand-Lahou), Fer (2,74 milliards de t à Man/San-Pédro), Pétrole (100 millions de barils) et Gaz (3 milliards m³)",
        "1960-1980": "Période du capitalisme d'État et des lois-plans (SOTRA, PALMINDUSTRIE, SIR, CAISTAB)",
        "1981": "Adoption des premiers Programmes d'Ajustement Structurel (PAS) avec le FMI et la Banque Mondiale",
        "1990": "Lancement du vaste programme de privatisation et désengagement de l'État régulateur",
        "PND": "Plans Nationaux de Développement (2012-2015, 2016-2020 et 2021-2025 pour l'émergence)"
      },
      keyConcepts: {
        "Relief tabulaire et monotone": "Composé de plaines au Sud, de plateaux au Centre/Nord et de montagnes à l'Ouest (Mont Nimba 1752m, monts du Man), facilitant l'agriculture et les routes.",
        "3 zones climatiques": "1. Subéquatorial/attiéen au Sud (1500-2300 mm/an, sols ferralitiques fertiles, forêt dense) ; 2. Tropical humide/baouléen au Centre (1100-1500 mm/an) ; 3. Soudanais au Nord (<=1000 mm/an, savane et cultures coton/anacarde).",
        "Capital humain": "Main-d'œuvre jeune, abondante et bon marché enrichie par l'immigration sous-régionale, constituant un vaste marché de consommation.",
        "Libéralisme économique ivoirien": "Option libérale garantissant la libre entreprise, la non-nationalisation, l'allègement fiscal et l'attraction des capitaux par le CEPICI."
      },
      causesOrFactors: [
        "Générosité du milieu naturel (climat pluvieux, terres arables, fleuves pérennes, richesses du sous-sol et façade maritime).",
        "Dynamisme démographique d'une population jeune et travailleuse.",
        "Politique économique claire alliant libéralisme, planification étatique et ouverture aux investissements étrangers."
      ],
      manifestationsOrDevelopments: [
        "Aménagement rapide des infrastructures routières et portuaires reliant les bassins agricoles aux marchés mondiaux.",
        "Mise en valeur simultanée des cultures de rente et des ressources minières.",
        "Évolution du rôle de l'État : entrepreneur bâtisseur de 1960 à 1980, puis régulateur et arbitre depuis les privatisations de 1990."
      ],
      consequencesOrEvaluation: [
        "La Côte d'Ivoire s'est hissée au rang de première puissance économique de l'UEMOA et locomotive de l'Afrique de l'Ouest.",
        "Nécessité de poursuivre les investissements pour consolider le statut de pays émergent."
      ],
      examDissertationPlan: {
        problemStatement: "Dans quelle mesure les atouts naturels, humains et les choix politiques fondent-ils la prospérité économique de la Côte d'Ivoire ?",
        axes: [
          {
            axeTitle: "I. Des atouts physiques et des ressources humaines d'une remarquable richesse",
            arguments: [
              "Un relief plat et monotone facilitant l'occupation humaine, les routes et la mise en valeur agricole.",
              "Une diversité climatique et des sols fertiles soutenus par un puissant réseau hydrographique et littoral.",
              "Une population jeune (45 % < 15 ans), abondante et entreprenante, formant un vaste marché de consommation."
            ]
          },
          {
            axeTitle: "II. Le rôle déterminant des choix historiques et de la politique économique",
            arguments: [
              "L'interventionnisme initial efficace de l'État par les sociétés d'État et les plans décennaux (1960-1980).",
              "L'option constante pour la libre entreprise, la fiscalité incitative et l'ouverture aux capitaux extérieurs.",
              "Les réformes structurelles modernes : privatisations des années 1990, action du CEPICI et grands chantiers des PND."
            ]
          }
        ]
      }
    },

    // 2. Thème 1 - Leçon 2 : Les Secteurs d'Activités Économiques de la Côte d'Ivoire
    {
      id: "secteurs-activites-economiques-cote-ivoire",
      discipline: "Géographie",
      themeTitle: "Thème 1 : La Côte d'Ivoire : Étude Économique",
      lessonTitle: "Les Secteurs d'Activités Économiques de la Côte d'Ivoire",
      keyDatesOrStats: {
        "Part de l'agriculture": "Occupe 66 % de la population active et fournit 70 % des recettes d'exportation",
        "Cacao": "1er producteur mondial avec 1,4 à 2 millions de tonnes (40 % de l'offre mondiale)",
        "Noix de cajou (Anacarde)": "1er producteur et exportateur mondial (715 000 tonnes en 2017)",
        "Noix de cola": "1er exportateur mondial (35 000 tonnes)",
        "Caoutchouc naturel (Hévéa)": "1er producteur africain (340 000 tonnes en 2015, en forte hausse)",
        "Coton": "3e producteur africain (450 000 tonnes)",
        "Igname": "4e producteur mondial avec 2,3 millions de tonnes",
        "Pêche (2019)": "Production totale de 101 000 tonnes (artisanale 59 590 t, industrielle 41 410 t ; déficit comblé par l'importation)",
        "Forêt": "Couvert passé de 16 millions d'hectares en 1960 à moins de 2 à 3 millions d'hectares aujourd'hui",
        "Secteur secondaire": "14 % de la population active, 30,8 % du PIB (taux de croissance de 15,2 % en 2018)",
        "Concentration industrielle": "70 % des usines concentrées dans le District Autonome d'Abidjan",
        "Commerce extérieur": "Représente environ 40 % du PIB avec une balance commerciale structurellement excédentaire",
        "Tourisme (2016)": "7,5 % du PIB (1 543,9 milliards de FCFA) et 62 % de l'économie des services",
        "Réseau routier": "68 000 km dont 6 000 km bitumés et autoroutes",
        "Chemin de fer": "Ligne Abidjan-Ouagadougou de 1 156 km (dont 638 km en Côte d'Ivoire) gérée par la SITARAIL",
        "Ports maritimes": "Port Autonome d'Abidjan (90 % du trafic maritime et 1er port thonier) et Port de San-Pédro"
      },
      keyConcepts: {
        "Secteur primaire prépondérant": "Dominé par l'agriculture de rente forestière au Sud (cacao, café, hévéa, palmier) et de savane au Nord (coton, anacarde, céréales), complété par le vivrier (riz, igname, manioc, banane plantain).",
        "Structures d'encadrement agricole": "ANADER (Agence Nationale d'Appui au Développement Rural), CNRA (recherche agronomique), régulation par le Conseil Café-Cacao.",
        "Secteur secondaire en essor": "4 phases historiques (1960-70 import-substitution, 1970-80 régionalisation, 1980-94 crise/dévaluation, 1994 à nos jours reprise/diversification). Dominé par l'agroalimentaire (Solibra, Brassivoire, conserveries thon), le textile (Uniwax, Filtisac, Gonfreville), la chimie/ciment (SOCIMAT, SOTACI) et l'énergie/raffinage (SIR).",
        "Secteur tertiaire dynamique": "Commerce intérieur (grandes surfaces, grossistes, marchés vivriers), commerce international d'exportation de matières premières, réseau de transport multimodal et essor touristique ('Sublime Côte d'Ivoire')."
      },
      causesOrFactors: [
        "Investissements massifs de l'État et du secteur privé dans l'encadrement rural, les zones industrielles et les ports.",
        "Position de carrefour sous-régional et dynamisme du commerce de distribution."
      ],
      manifestationsOrDevelopments: [
        "Records mondiaux de production agricole générant d'abondantes devises fiscales (DUS).",
        "Taux croissant de première transformation locale (cacao 35 %, huile de palme 100 %, caoutchouc 100 %).",
        "Modernisation continue des infrastructures aéroportuaires, ferroviaires, autoroutières et portuaires."
      ],
      consequencesOrEvaluation: [
        "Rôle de pilier de l'économie nationale mais persistance d'une forte dépendance agricole et d'une inégale répartition géographique des usines."
      ],
      examDissertationPlan: {
        problemStatement: "Comment les secteurs primaire, secondaire et tertiaire participent-ils au dynamisme économique de la Côte d'Ivoire ?",
        axes: [
          {
            axeTitle: "I. Un secteur primaire puissant et un secteur tertiaire en plein essor",
            arguments: [
              "L'agriculture, moteur absolu de l'économie grâce aux records du binôme café-cacao, de l'anacarde et du caoutchouc.",
              "Le dynamisme des cultures vivrières garantissant la subsistance des populations et animant le commerce intérieur.",
              "Le rôle stratégique du tertiaire porté par le commerce extérieur excédentaire, le tourisme et les plateformes portuaires d'Abidjan et San-Pédro."
            ]
          },
          {
            axeTitle: "II. Un secteur secondaire en expansion mais confronté au défi de la déconcentration",
            arguments: [
              "L'essor continu des industries agroalimentaires, chimiques et de raffinage pétrolier valorisant les matières locales.",
              "La progression sensible du taux de transformation industrielle sur place (cacao, huile de palme, coton).",
              "La limite majeure de l'inégale répartition territoriale, marquée par l'extrême concentration des usines à Abidjan (70 %)."
            ]
          }
        ]
      }
    },

    // 3. Thème 1 - Leçon 3 : Les Problèmes de Développement de la Côte d'Ivoire et Solutions
    {
      id: "problemes-developpement-cote-ivoire",
      discipline: "Géographie",
      themeTitle: "Thème 1 : La Côte d'Ivoire : Étude Économique",
      lessonTitle: "Les Problèmes de Développement Économique de la Côte d'Ivoire et les Tentatives de Solutions",
      keyDatesOrStats: {
        "Dette publique (septembre 2020)": "16 133 milliards de FCFA (dette extérieure 10 587,3 Mds, dette intérieure 5 546 Mds, service annuel de 2 132 Mds)",
        "Croissance démographique": "Taux d'accroissement supérieur à 2,5 % par an (population jeune à forte demande sociale)",
        "Déforestation": "Couvert forestier réduit à moins de 2 millions d'hectares contre 16 millions en 1960",
        "Secteur informel": "Représente 30 à 40 % du PIB et emploie plus de 90 % de la force de travail active",
        "Concentration spatiale": "80 % de l'activité économique et 75 % des usines concentrées dans la seule ville d'Abidjan",
        "Déficit halieutique": "La production nationale de poisson ne couvre que 30 % des besoins de consommation",
        "ADERIZ": "Création de l'Agence de Développement de la Riziculture pour atteindre l'autosuffisance alimentaire",
        "Sublime Côte d'Ivoire": "Programme stratégique de relance et d'investissement touristique de 3 200 milliards FCFA"
      },
      keyConcepts: {
        "Économie extravertie": "Économie dépendante des marchés extérieurs pour l'exportation de matières premières brutes et l'importation de produits manufacturés.",
        "Détérioration des termes de l'échange": "Baisse constante des prix des matières premières agricoles vendues par rapport à la hausse des prix des produits industriels importés.",
        "Pauvreté et fardeau démographique": "Décalage entre la rapide croissance de la population et les capacités de financement des écoles, hôpitaux, logements et emplois.",
        "Problèmes sectoriels": "Primaire (dépendance pluviométrique, vieillissement des vergers et planteurs, manque de stockage, pertes bord-champ) ; Secondaire (manque d'industrie lourde, dépendance des capitaux extérieurs à 60 %, concurrence et fraude) ; Tertiaire (tracasseries routières, coupeurs de route, hégémonie étrangère dans le grand commerce)."
      },
      causesOrFactors: [
        "Dépendance historique vis-à-vis des cours mondiaux des matières premières.",
        "Insuffisance de l'épargne nationale et incivisme fiscal obligeant au recours à l'endettement extérieur.",
        "Forte pression démographique et dégradation des équilibres écologiques."
      ],
      manifestationsOrDevelopments: [
        "Oscillation des revenus des paysans lors des chutes de cours du cacao.",
        "Insalubrité, bidonvilles et chômage urbain des jeunes.",
        "Politiques publiques de riposte : PND, PNIA, agence ADERIZ, civisme fiscal avec la DGI, création d'usines de transformation de cajou et cacao, grands projets de reboisement et d'infrastructures."
      ],
      consequencesOrEvaluation: [
        "Malgré des performances macroéconomiques solides, l'État ivoirien doit intensifier l'industrialisation locale et l'inclusion sociale pour éradiquer durablement la pauvreté."
      ],
      examDissertationPlan: {
        problemStatement: "Quels sont les freins majeurs au développement économique de la Côte d'Ivoire et quelles stratégies sont déployées pour les surmonter ?",
        axes: [
          {
            axeTitle: "I. Des obstacles généraux et sectoriels entravant la croissance",
            arguments: [
              "La vulnérabilité d'une économie extravertie soumise aux cours mondiaux et au poids de la dette publique.",
              "Le défi de la croissance démographique rapide et de la dégradation avancée de l'environnement forestier.",
              "Les blocages sectoriels : faible transformation industrielle, concentration spatiale à Abidjan et désorganisation des transports."
            ]
          },
          {
            axeTitle: "II. Les solutions étatiques pour bâtir un développement durable",
            arguments: [
              "La promotion de l'industrialisation locale (transformation du cacao et de l'anacarde) et le civisme fiscal.",
              "La modernisation agricole et la quête de l'autosuffisance vivrière à travers les programmes PNIA et ADERIZ.",
              "La déconcentration industrielle vers l'intérieur, le développement des infrastructures et le reboisement."
            ]
          }
        ]
      }
    },

    // 4. Thème 2 - Leçon 1 : Les Fondements du Développement de la Corée du Sud
    {
      id: "fondements-developpement-coree-du-sud",
      discipline: "Géographie",
      themeTitle: "Thème 2 : La Corée du Sud : Un Exemple de Pays Émergent",
      lessonTitle: "Les Fondements du Développement Économique de la Corée du Sud",
      keyDatesOrStats: {
        "Superficie": "98 480 km² (moitié sud de la péninsule coréenne, capitale Séoul)",
        "Population (2017)": "Plus de 51 millions d'habitants (forte densité sur les plaines côtières)",
        "Relief": "70 % du territoire est montagneux (massif du Taebaek, Mont Seorak, île volcanique de Jeju-do avec le Mont Hallasan à 1 950 m)",
        "Plaines": "Moins de 20 % du territoire le long des littoraux occidental et méridional",
        "Climat": "Continental contrasté (hiver froid et sec de -5° à 5°C, été chaud et très arrosé par la mousson de 20° à 26°C)",
        "Réseau hydrographique": "Fleuve Nakdong (521 km), fleuve Han (514 km traversant Séoul), Geum (401 km) et littoral de 2 413 km",
        "Ressources minières": "Quasi nulles (gisements négligeables de fer, houille, tungstène -> dépendance énergétique totale)",
        "Révolution éducative": "Dépenses d'éducation représentant 4,5 % du PIB ; taux d'alphabétisation passé de 22 % en 1945 à près de 88 % en 1970 et 100 % en 2020",
        "1948-1960": "Présidence de Syngman Rhee (reconstruction et phase primaire d'import-substitution des 'trois blancs')",
        "1963-1979": "Présidence du général Park Chung-Hee (décollage spectaculaire, promotion des exportations et industrie lourde)",
        "1961": "Création du Bureau de Planification Économique pour orienter les plans quinquennaux",
        "1971": "Fondation par loi spéciale du KAIST (institut d'élite pour la haute technologie et la recherche)",
        "Aide américaine (1953-1961)": "Représentait 8 % du PNB, 64 % des investissements et 70 % des importations",
        "Part des exportations": "Passée de 3,3 % du PNB en 1960 à 48 % en 1977 (96 % des produits manufacturés exportés)",
        "Indicateurs sociaux (2020)": "Espérance de vie 82 ans, chômage 4,9 %, croissance démographique négative (-0,24 %/an)"
      },
      keyConcepts: {
        "Chaebols": "Puissants conglomérats industriels et financiers privés étroitement soutenus par l'État (Samsung, Hyundai, LG, Daewoo, POSCO).",
        "3 phases d'industrialisation": "1. Substitution aux importations (1953-1961 : 'trois blancs' coton/sucre/farine, textile léger) ; 2. Promotion des exportations (1961-1973 : confection, chaussures, électronique de base) ; 3. Industries lourdes et chimiques (1973-1980 : sidérurgie POSCO, chantiers navals, automobile, semi-conducteurs).",
        "État développeur et stratège": "Modèle alliant liberté de marché et encadrement étatique autoritaire par des plans quinquennaux rigoureux.",
        "Éthique confucéenne": "Valeurs traditionnelles inculquant le culte de l'effort, le respect de la hiérarchie, la loyauté au groupe et la discipline au travail."
      },
      causesOrFactors: [
        "L'optimisation du capital humain par une politique d'éducation d'excellence devançant le développement économique.",
        "Le rôle visionnaire de l'État planificateur allié aux chaebols.",
        "L'aide financière et militaire stratégique des États-Unis dans le contexte de la guerre froide."
      ],
      manifestationsOrDevelopments: [
        "Progression fulgurante du PNB et conquête des marchés internationaux dans l'automobile, l'électronique et la construction navale.",
        "Reboisement massif du couvert végétal dégradé sous la colonisation japonaise."
      ],
      consequencesOrEvaluation: [
        "Transformation d'un pays ruiné en 1953 en l'une des dix premières puissances économiques de la planète.",
        "Défis actuels : vieillissement accéléré de la population, dépendance absolue aux importations d'hydrocarbures et tensions géopolitiques avec la Corée du Nord."
      ],
      examDissertationPlan: {
        problemStatement: "Comment la Corée du Sud a-t-elle surmonté un milieu naturel ingrat pour bâtir une puissance industrielle majeure grâce à son capital humain et à son modèle économique ?",
        axes: [
          {
            axeTitle: "I. Un milieu naturel contraignant surmonté par la valorisation du capital humain",
            arguments: [
              "Un territoire montagneux à 70 %, pauvre en matières premières et soumis à un climat rude.",
              "La révolution éducative précoce et l'éthique confucéenne du travail formant une main-d'œuvre qualifiée et disciplinée.",
              "L'appui financier et sécuritaire décisif des États-Unis au sortir de la guerre de Corée (1953)."
            ]
          },
          {
            axeTitle: "II. L'efficacité de l'État développeur et les étapes de la conquête industrielle",
            arguments: [
              "La planification étatique méthodique et l'essor des grands conglomérats industriels (Chaebols).",
              "La succession réussie des trois phases : substitution aux importations, promotion des exportations et industrie lourde de pointe.",
              "Le rayonnement technologique mondial (Samsung, Hyundai) face au nouveau défi du vieillissement démographique."
            ]
          }
        ]
      }
    },

    // 5. Thème 3 - Leçon 1 : La CEDEAO
    {
      id: "cedeao-organisation-regionale-economique",
      discipline: "Géographie",
      themeTitle: "Thème 3 : Regroupements et Coopération Économique",
      lessonTitle: "La CEDEAO : Une Organisation Régionale à Caractère Économique",
      keyDatesOrStats: {
        "1968": "Idée initiale d'une union ouest-africaine émise au Ghana par Williams Tolbert (président du Libéria)",
        "1972": "Relance de l'initiative par les chefs d'État du Nigéria (Yakubu Gowon) et du Togo (Gnassingbé Eyadéma)",
        "28 mai 1975": "Signature du Traité de Lagos créant la CEDEAO par 16 États de l'Afrique de l'Ouest",
        "1999": "Retrait de la Mauritanie de l'organisation",
        "15": "Nombre d'États membres actuels (8 francophones : Bénin, Burkina Faso, CI, Guinée, Mali, Niger, Sénégal, Togo ; 5 anglophones : Gambie, Ghana, Libéria, Nigéria, Sierra Leone ; 2 lusophones : Cap-Vert, Guinée-Bissau)",
        "Superficie & Population": "Superficie de 5,1 millions de km² et population de plus de 300 millions d'habitants",
        "Potentiel minier": "1ère région aurifère d'Afrique devant l'Afrique du Sud ; 10 % du manganèse, 8 % de la bauxite, 7 % de l'uranium mondial ; 30 % des réserves de pétrole et gaz du continent (2,3 millions de barils/jour par Nigéria, CI, Ghana)",
        "2006": "Création du Parlement de la CEDEAO (120 députés siégeant à Abuja)",
        "BIDC": "Banque d'Investissement et de Développement de la CEDEAO basée à Lomé",
        "Cour de Justice": "Siège à Abuja (Nigéria), compétente pour les traités et les droits de l'homme",
        "Échanges intra-communautaires": "Faiblesse structurelle des échanges ne dépassant pas 11 à 12 %"
      },
      keyConcepts: {
        "Objectif principal": "Réaliser l'intégration sous-régionale par la coopération et la création d'une union économique pour élever le niveau de vie des peuples.",
        "Objectifs spécifiques": "Libre circulation des personnes, biens et capitaux (carte/permis CEDEAO), suppression des barrières douanières, création d'une monnaie unique (projet ECO), interconnexion des réseaux routiers et énergétiques.",
        "Organes de direction": "Conférence des Chefs d'État et de Gouvernement (organe suprême), Conseil des ministres, Commission de la CEDEAO (exécutif à Abuja).",
        "ECOMOG": "Force militaire d'interposition de la CEDEAO intervenue pour rétablir la paix au Libéria, en Sierra Leone, en Guinée-Bissau et en Côte d'Ivoire.",
        "Atouts naturels et humains": "Richesses minières et pétrolières majeures, diversité climatique propice à l'agriculture (75 % de la population rurale), vaste marché de 300M de consommateurs."
      },
      causesOrFactors: [
        "Morcellement et fragilité des États ouest-africains au lendemain de leurs indépendances.",
        "Nécessité de mutualiser les potentialités naturelles pour faire face aux grands blocs économiques mondiaux."
      ],
      manifestationsOrDevelopments: [
        "Mise en place d'institutions bancaires régionales (BIDC, ECOBANK, BOAD) et de projets communs (cimenterie CIMAO au Togo, projet ADRAO pour le riz).",
        "Libre circulation des personnes sans visa et instauration du passeport CEDEAO.",
        "Actions de maintien de la paix par l'ECOMOG et sanctions contre les changements anticonstitutionnels."
      ],
      consequencesOrEvaluation: [
        "Acquis réels en matière de libre circulation et d'infrastructures communes.",
        "Faiblesses majeures : instabilité politique (plus de 25 coups d'État de 1990 à 2019), insécurité terroriste au Sahel, dépendance aux matières premières brutes, retard de la monnaie ECO, barrières linguistiques et rivalités de leadership."
      ],
      examDissertationPlan: {
        problemStatement: "Dans quelle mesure la CEDEAO constitue-t-elle un atout géostratégique majeur pour l'Afrique de l'Ouest tout en faisant face à de profondes faiblesses structurelles ?",
        axes: [
          {
            axeTitle: "I. Des potentialités exceptionnelles et des acquis tangibles d'intégration",
            arguments: [
              "D'immenses richesses minières (or, bauxite, uranium), pétrolières (Nigéria, CI) et un marché de 300 millions de consommateurs.",
              "Des réalisations concrètes : libre circulation des personnes (passeport CEDEAO), projets agricoles communs (ADRAO) et institutions financières (BIDC, Ecobank).",
              "Le rôle stabilisateur de l'ECOMOG et la défense des principes démocratiques face aux putschs militaires."
            ]
          },
          {
            axeTitle: "II. Les pesanteurs économiques, sécuritaires et institutionnelles à surmonter",
            arguments: [
              "La faiblesse des échanges intra-régionaux (environ 11 %) due à la non-complémentarité des économies et à la multiplicité des monnaies.",
              "L'instabilité politique récurrente (coups d'État, crises électorales) et l'insécurité terroriste au Sahel.",
              "Les rivalités nationalistes, le problème de leadership et la non-application effective de certaines décisions communautaires."
            ]
          }
        ]
      }
    },

    // 6. Thème 3 - Leçon 2 : Les Relations UE/ACP
    {
      id: "relations-ue-acp-cooperation-nord-sud",
      discipline: "Géographie",
      themeTitle: "Thème 3 : Regroupements et Coopération Économique",
      lessonTitle: "Les Relations UE/ACP : Un Exemple de Coopération Nord-Sud",
      keyDatesOrStats: {
        "25 mars 1957": "Traité de Rome créant la CEE et associant les Pays et Territoires d'Outre-Mer (PTOM)",
        "1958-1962": "1ère convention d'association CEE-PTOM créant le 1er FED (Fonds Européen de Développement de 581 millions d'écus)",
        "1963-1969": "Convention de Yaoundé I (6 pays CEE et 18 États Africains et Malgaches Associés - EAMA, création de la BEI)",
        "1969-1975": "Convention de Yaoundé II (6 pays CEE et 19 EAMA, 3e FED de 843 millions d'écus)",
        "1975": "Accord de Georgetown (Guyana) créant officiellement le groupe ACP",
        "28 février 1975": "Convention de Lomé I (9 pays CEE et 46 pays ACP, création du système STABEX)",
        "31 octobre 1979": "Convention de Lomé II (10 pays CEE et 58 pays ACP, création du système SYSMIN)",
        "8 décembre 1984": "Convention de Lomé III (10 pays CEE et 65 pays ACP, accent sur l'autosuffisance et les réfugiés)",
        "15 décembre 1989": "Convention de Lomé IV (12 pays CEE et 68 pays ACP pour 10 ans, dons non remboursables et soutien aux PAS)",
        "Octobre 1995": "Révision à mi-parcours de Lomé IV à l'Île Maurice (allègement de la dette et conditionnalités démocratiques)",
        "23 juin 2000": "Signature de l'Accord de Cotonou pour 20 ans entre l'UE et 77 puis 79 pays ACP",
        "Octobre 2003": "Lancement des négociations des Accords de Partenariat Économique (APE)",
        "Partenaires actuels": "Union Européenne (27 États, 446 millions d'habitants) et Groupe ACP (79 États : 48 Afrique, 16 Caraïbes, 15 Pacifique, 1,12 milliard d'habitants)",
        "Potentiel ACP": "Détient 21 % des réserves minières mondiales, 10,1 % du pétrole mondial, 50 % du maïs mondial, 33 % des haricots"
      },
      keyConcepts: {
        "Coopération Nord-Sud": "Partenariat économique et financier entre pays développés du Nord (UE) et pays en développement du Sud (ACP).",
        "STABEX": "Système de stabilisation des recettes d'exportation des produits agricoles pour compenser les pertes dues aux chutes des cours ou mauvaises récoltes.",
        "SYSMIN": "Système de stabilisation des recettes d'exportation des produits miniers des pays ACP.",
        "FED & BEI": "Fonds Européen de Développement (subventions et dons) et Banque Européenne d'Investissement (prêts avantageux).",
        "Accords de Cotonou": "Accord-cadre (2000-2020) axé sur l'éradication de la pauvreté, les droits de l'homme, la bonne gouvernance et la transition vers le libre-échange réciproque (APE).",
        "APE (Accords de Partenariat Économique)": "Nouveaux accords commerciaux prévoyant la suppression progressive des préférences non réciproques et l'ouverture mutuelle des marchés."
      },
      causesOrFactors: [
        "Liens historiques et coloniaux profonds entre les métropoles européennes et leurs anciennes colonies.",
        "Complémentarité économique : besoin vital de matières premières pour l'industrie européenne contre besoin de capitaux et biens manufacturés pour les ACP.",
        "Objectifs géopolitiques de stabilité et rayonnement culturel (Francophonie, Commonwealth)."
      ],
      manifestationsOrDevelopments: [
        "Succession continue de conventions : Yaoundé (I et II), Lomé (I à IV), Accord de Cotonou et négociation des APE.",
        "Création d'institutions conjointes : Conseil des ministres ACP-UE, Comité des ambassadeurs, Assemblée parlementaire paritaire (APP), CDE et CTA.",
        "Accès en franchise douanière des produits ACP sur le marché européen et transferts financiers réguliers."
      ],
      consequencesOrEvaluation: [
        "Points positifs pour les ACP : financement d'infrastructures de base (routes, écoles, hôpitaux), bourses d'études, aides humanitaires et amortissement des crises grâce au STABEX/SYSMIN.",
        "Points positifs pour l'UE : approvisionnement sécurisé en matières premières agricoles et minières à bas coût, débouchés commerciaux et influence géopolitique.",
        "Limites et critiques : maintien des ACP dans le statut vulnérable de fournisseurs de matières premières brutes, détérioration des termes de l'échange, endettement croissant, asymétrie néocoloniale et crainte de voir les produits industriels de l'UE étouffer les fragiles entreprises ACP avec les APE."
      ],
      examDissertationPlan: {
        problemStatement: "Dans quelle mesure les accords de coopération UE/ACP constituent-ils un modèle de partenariat Nord-Sud tout en révélant des déséquilibres persistants ?",
        axes: [
          {
            axeTitle: "I. Un partenariat historique fécond aux retombées positives multiples",
            arguments: [
              "Des fondements solides liés aux liens historiques, à la complémentarité économique et à la solidarité Nord-Sud.",
              "L'appui financier et technique substantiel via le FED, la BEI et les mécanismes stabilisateurs du STABEX et du SYSMIN.",
              "L'accès préférentiel garanti des produits ACP au vaste marché européen et le soutien aux programmes sociaux."
            ]
          },
          {
            axeTitle: "II. Les limites structurelles et le caractère asymétrique des relations",
            arguments: [
              "La persistance d'une économie de rente non industrialisée et la détérioration continue des termes de l'échange.",
              "Le lourd endettement des pays ACP et la dépendance néocoloniale vis-à-vis des financements européens.",
              "Les inquiétudes suscitées par les APE, menaçant la compétitivité des filières locales face à la concurrence des produits européens."
            ]
          }
        ]
      }
    }
  ]
};
