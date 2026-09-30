import { OfficialIvorianCourse } from '../../types';

export const LYCEE_EXTRA_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 1ÈRE TOUTES SÉRIES - PHILOSOPHIE (DPFC / MENA-CI)
  // ========================================================
  {
    id: 'philo-1ere-initiation-mythe-raison-methode',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Première)',
    level: '1ere',
    levelLabel: 'Première (1re A, C, D)',
    serie: '1ere_a',
    serieLabel: '1ère Toutes Séries (A, C, D)',
    chapter: 'Initiation à la Philosophie : Qu\'est-ce que philosopher ? Mythe, Raison et Connaissance',
    lessonTitle: 'Origine historique de la philosophie, passage du Mythe (Muthos) à la Raison (Logos) et méthodologie de la problématisation',
    objectifs: [
      'Définir l\'étymologie et la spécificité de la démarche philosophique (Philein = aimer, Sophia = sagesse)',
      'Expliquer la rupture épistémologique du VIe siècle av. J.-C. en Grèce : le passage du Muthos au Logos',
      'Distinguer la philosophie du sens commun, des sciences expérimentales et des croyances religieuses',
      'Maîtriser l\'exercice fondamental de l\'initiation en 1re : l\'art du questionnement philosophique et la structure du paragraphe argumentatif'
    ],
    fullCourseContent: `1. Qu'est-ce que la Philosophie ?
- Étymologie : Du grec *Philein* (aimer, désirer, rechercher) et *Sophia* (sagesse, savoir absolu). Le philosophe n'est pas le possesseur du savoir, mais l'amoureux et le chercheur infatigable de la vérité.
- La Naissance de la Philosophie : Née au VIe siècle avant J.-C. à Milet en Ionie (Grèce antique) avec Thalès, Anaximandre et Pythagore (qui s'attribue le mot *philosophos*).
- Rupture fondatrice : Le passage du *Muthos* (explications surnaturelles, récits poétiques fabuleux faisant intervenir les dieux de l'Olympe) au *Logos* (discours rationnel, fondé sur la démonstration, la logique, le principe de causalité naturelle et la preuve).

2. Les Caractéristiques de la Pensée Philosophique :
- L'Étonnement philosophique : Selon Platon et Aristote, "C'est l'étonnement qui pousse l'homme à philosopher". S'étonner devant ce qui paraît évident au vulgaire.
- L'Esprit Critique et le Doute : Refus des préjugés, des dogmes, des opinions toutes faites (*doxa*) et des arguments d'autorité.
- L'Universalité : La philosophie s'interroge sur les questions fondamentales de la condition humaine (Que puis-je savoir ? Que dois-je faire ? Que m'est-il permis d'espérer ? Qu'est-ce que l'homme ? - Emmanuel Kant).

3. Philosophie, Science et Religion :
- Philosophie et Religion : Toutes deux cherchent le sens de l'existence, mais la religion repose sur la Foi et la Révélation divine reçue d'un Texte Sacré, tandis que la philosophie s'appuie exclusivement sur la Raison autonome et le débat contradictoire.
- Philosophie et Science : La science s'intéresse au "Comment" des phénomènes matériels observables par la méthode expérimentale et mathématique, tandis que la philosophie s'interroge sur le "Pourquoi", sur les valeurs, la morale, la justice et la finalité de l'existence.

4. Méthodologie Initiatique en Classe de Première :
- Poser un Problème Philosophique : Un sujet n'est pas une simple question d'information, c'est une contradiction fondamentale entre deux thèses également défendables.
- Le Paragraphe Philosophique (La Règle A-E-I) :
  * Argument : Énoncé d'une idée directrice claire.
  * Explication : Justification conceptuelle rigoureuse par la raison.
  * Illustration : Référence philosophique (Socrate, Platon, Descartes, Alain) ou citation commentée.`,
    definitions: [
      {
        term: 'Philosophie',
        definition: 'Démarche réflexive et critique de la raison humaine qui s\'interroge sur les fondements du savoir, de l\'action morale et du sens de la vie.'
      },
      {
        term: 'Logos',
        definition: 'Terme grec désignant la raison, la parole ordonnée, le discours logique et démonstratif par opposition au mythe.'
      },
      {
        term: 'Doxa (Opinion)',
        definition: 'Croyance collective non examinée, ensemble d\'idées reçues et d\'illusions partagées par le sens commun sans vérification rationnelle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe socratique du non-savoir',
        statement: '« Tout ce que je sais, c\'est que je ne sais rien » (Socrate) : La conscience de sa propre ignorance est le point de départ incontournable de la vraie sagesse.'
      },
      {
        name: 'Règle du doute méthodique cartésien',
        statement: 'Il faut rejeter comme absolument faux tout ce en quoi on peut imaginer le moindre doute afin de parvenir à des certitudes inébranlables.'
      }
    ],
    formulas: [
      {
        name: 'Structure du problème philosophique',
        formula: 'Problème = [Thèse A rationnelle] CONTRE [Thèse B contradictoire]',
        explanation: 'Mise en tension dialectique de deux vérités apparentes.',
        unitOrCondition: 'Dissertation de 1re et Tle'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Formuler la problématique d\'un sujet en 1re',
        procedure: '1. Repérer le concept central et son enjeu humain.\n2. Identifier la thèse spontanée du sens commun.\n3. Révéler le paradoxe ou la contradiction : en quoi cette thèse pose-t-elle problème ?\n4. Rédiger la question centrale formulée sous forme alternative (« ... ou bien ... ? »).',
        tip: 'Éviter les réponses simplistes par "Oui" ou "Non" : la philosophie cherche la nuance et l\'esprit critique.'
      }
    ],
    examples: [
      {
        statement: 'Sujet : « La philosophie éloigne-t-elle l\'homme de la réalité ? » Dégage le problème philosophique.',
        solution: 'D\'un côté, la philosophie se présente comme une spéculation abstraite et théorique qui semble détourner l\'homme de ses préoccupations matérielles concrètes quotidiennes. Mais d\'un autre côté, en libérant l\'esprit des illusions, des préjugés et des fausses apparences, la philosophie permet au contraire à l\'homme de comprendre lucidement la véritable nature de la réalité humaine et sociale.\nProblème : La réflexion philosophique est-elle une rêverie stérile qui déconnecte du monde, ou constitue-t-elle l\'instrument par excellence de la lucidité et de l\'action éclairée ?'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi la formule de Socrate « Connais-toi toi-même » est-elle le fondement de la philosophie morale ?',
        correction: 'La maxime socratique « Connais-toi toi-même » invite l\'homme à faire un retour critique sur sa propre conscience pour examiner ses désirs, ses valeurs et ses limites. Elle signifie que la sagesse ne commence pas par la conquête du monde extérieur, mais par la maîtrise de soi et la recherche de la justice intérieure.'
      }
    ],
    evaluationSituation: {
      context: 'Deux élèves du Lycée Classique d\'Abidjan discutent. L\'un affirme : « La philosophie ne sert à rien car elle ne fabrique ni médicaments ni téléphones ». L\'élève de 1re décide de lui expliquer la véritable utilité de la philosophie pour la liberté de pensée.',
      instructions: [
        '1. Définis la différence fondamentale entre l\'utilité matérielle d\'un objet technique et la valeur intellectuelle de la philosophie.',
        '2. Donne deux arguments solides démontrant comment la philosophie protège le citoyen contre la manipulation et les fausses informations.',
        '3. Rédige un paragraphe de synthèse structuré.'
      ],
      solutionGuide: '1. L\'objet technique procure une utilité matérielle immédiate et pratique, tandis que la philosophie offre une valeur spirituelle, éthique et intellectuelle en donnant du sens aux actions humaines et en guidant l\'usage des techniques.\n2. Arguments : La philosophie développe l\'esprit critique contre la doxa (opinions sans preuve) et apprend à déconstruire les discours démagogiques ou fanatiques par l\'analyse rigoureuse du Logos.\n3. Synthèse : La philosophie n\'a pas pour but de produire des richesses marchandes, mais de former des esprits libres, autonomes et lucides, capables de discerner le vrai du faux et de bâtir une société démocratique et juste.'
    },
    examTraps: [
      'Réduire la philosophie à un étalage de citations d\'auteurs sans argument personnel.',
      'Confondre la philosophie avec la religion (croire sans preuve) ou avec la science pure (mesure physique).'
    ],
    quickMemo: 'Philosophie = Amitié pour la Sagesse. Rupture : du Muthos (mythe) au Logos (raison critique). Socrate : « Tout ce que je sais, c\'est que je ne sais rien ».',
    keywords: ['philosophie', '1ere', 'mythe', 'raison', 'logos', 'muthos', 'Socrate', 'Descartes', 'esprit critique', 'doxa']
  },

  // ========================================================
  // 1ÈRE SÉRIE G1 - TECHNIQUE TERTIAIRE (DPFC / MENA-CI)
  // ========================================================
  {
    id: 'g1-1ere-communication-administrative-courrier',
    discipline: 'francais',
    disciplineLabel: 'Communication Administrative & Secrétariat (1re G1)',
    level: '1ere',
    levelLabel: '1ère G1 (Technique Tertiaire)',
    serie: '1ere_g1',
    serieLabel: '1ère G1 (Secrétariat / Bureautique)',
    chapter: 'Techniques d\'Expression & Correspondance Administrative Officielle',
    lessonTitle: 'Normes de rédaction de la lettre administrative, note de service, compte rendu et procès-verbal',
    objectifs: [
      'Maîtriser les mentions obligatoires de la lettre administrative en forme administrative et en forme personnelle',
      'Appliquer le style administratif officiel : neutralité, courtoisie, précision, clarté, prudence et sens de la hiérarchie',
      'Rédiger une Note de service descendante claire et sans ambiguïté',
      'Distinguer et rédiger un Compte rendu de réunion et un Procès-verbal (PV) normé'
    ],
    fullCourseContent: `1. Les Caractéristiques du Style Administratif :
- Principes fondamentaux :
  * Dignité et respect de la hiérarchie.
  * Prudence et objectivité (bannir l'emportement, les jugements affectifs et le style familier).
  * Précision, concision et clarté (phrases courtes, vocabulaire juridique et administratif exact).
  * Responsabilité : L'auteur engage l'institution ou l'entreprise.

2. La Lettre Administrative en Forme Administrative :
- Mentions obligatoires de présentation :
  * En-tête / Timbre (en haut à gauche) : Dénomination du ministère, direction, service.
  * Date et lieu (en haut à droite) : Ex : "Abidjan, le 24 octobre 2025".
  * Références / Vos réf. / Nos réf. (sous le timbre).
  * Sceau / Devise de la République : "Union - Discipline - Travail".
  * Suscription ou Réclame : "Le Directeur Régional de l'Éducation Nationale... À Monsieur le Proviseur du Lycée Moderne...".
  * Objet : Résumé très court en une ligne du motif de la lettre.
  * Pièces Jointes (PJ) : Nombre et nature des documents annexés.
- Structure du Corps de la Lettre (Plan en 3 étapes) :
  1. Introduction / Rappel des faits ou du texte de référence (« J'ai l'honneur de vous informer... », « En référence à votre lettre n°... »).
  2. Développement / Exposé des motifs et arguments administratifs.
  3. Conclusion / Décision prise ou instructions données (« En conséquence, je vous prie de bien vouloir... »).
- Formule de politesse administrative consacrée (sans sentimentalité) : « Veuillez agréer, Monsieur le Proviseur, l'assurance de ma considération distinguée ».

3. La Note de Service et la Note d'Information :
- Document interne d'entreprise ou d'administration destiné à transmettre des instructions obligatoires du supérieur aux subordonnés (communication descendante).
- Ne comporte jamais de formule de politesse finale ni d'apostrophe (« Cher collègue » est interdit).

4. Le Compte Rendu (CR) vs le Procès-Verbal (PV) :
- Le Compte Rendu : Document informatif neutre relatant fidèlement les débats et décisions d'une réunion. Rédigé au présent ou au passé composé.
- Le Procès-Verbal (PV) : Document authentique à valeur juridique qui constate officiellement des faits, des décisions votées ou des incidents (ex : PV d'assemblée générale, PV de délibération d'examen, PV de constat). Signé obligatoirement par le président de séance et le secrétaire.`,
    definitions: [
      {
        term: 'Suscription (Réclame)',
        definition: 'Mention administrative obligatoire indiquant la qualité officielle de l\'expéditeur et celle du destinataire (Ex: Le Ministre à Monsieur le Préfet).'
      },
      {
        term: 'Note de service',
        definition: 'Document de communication interne hiérarchique et impersonnel par lequel une autorité transmet des ordres, consignes ou directives à son personnel.'
      },
      {
        term: 'Procès-verbal (PV)',
        definition: 'Acte officiel écrit ayant une force probante légale, consignant exactement les déclarations, délibérations ou constatations effectuées lors d\'une séance.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de courtoisie administrative',
        statement: 'Un subordonné ne "demande" pas à son supérieur, il "a l\'honneur de solliciter" ; un supérieur "prie" ou "enjoint" son subordonné de faire.'
      },
      {
        name: 'Absence de politesse dans la note de service',
        statement: 'Une note de service interne ne contient jamais d\'apostrophe initiale (Monsieur) ni de formule de courtoisie finale, mais se termine directement par la signature.'
      }
    ],
    formulas: [
      {
        name: 'Structure de suscription administrative',
        formula: '[Titre émetteur] À [Titre destinataire]',
        explanation: 'Indication solennelle de l\'axe de communication hiérarchique.',
        unitOrCondition: 'Courrier administratif ivoirien'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Présenter une lettre administrative selon la norme AFNOR / ivoirienne',
        procedure: '1. Placer le Timbre en haut à gauche et la Date en haut à droite sur la même ligne.\n2. Inscrire l\'Objet souligné en dessous des références.\n3. Rédiger le corps en respectant l\'alinéa au début de chaque paragraphe.\n4. Conclure par la formule de politesse adaptée au rang hiérarchique.\n5. Apposer la signature précédée de la qualité officielle du signataire.',
        tip: 'Veiller à ce que la lettre tienne idéalement sur une seule page propre et aérée.'
      }
    ],
    examples: [
      {
        statement: 'Rédige l\'objet et la phrase d\'attaque d\'une demande d\'autorisation d\'absence formulée par une secrétaire administrative adressée à son Directeur Général.',
        solution: '- Objet : Demande d\'autorisation exceptionnelle d\'absence pour raison familiale.\n- Suscription : Madame la Secrétaire de Direction À Monsieur le Directeur Général de la SODECI.\n- Phrase d\'attaque : « Monsieur le Directeur Général, j\'ai l\'honneur de solliciter de votre haute bienveillance une autorisation exceptionnelle d\'absence pour la journée du vendredi 15 novembre 2025, motivée par un événement familial majeur. »'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les trois différences fondamentales entre une lettre administrative et une note de service ?',
        correction: '1. Destinataire : La lettre s\'adresse à une personne identifiée (externe ou interne), tandis que la note s\'adresse collectivement à tout ou partie du personnel interne.\n2. Formule de politesse : La lettre contient une formule de politesse soignée en fin de document ; la note de service n\'en contient aucune.\n3. Portée : La note de service a un caractère d\'ordre ou de consigne organisationnelle d\'application immédiate dans le service.'
      }
    ],
    evaluationSituation: {
      context: 'Dans une entreprise agroalimentaire à San-Pédro, la Direction Générale constate des retards répétés du personnel le matin. En tant que secrétaire de direction stagiaire en 1re G1, on vous demande de rédiger la Note de Service n° 12/DG rappelant les horaires officiels de travail (07h30 - 16h30) et annonçant des sanctions disciplinaires en cas de récidive.',
      instructions: [
        '1. Dresse l\'en-tête complet avec les mentions obligatoires de la Note de Service.',
        '2. Rédige le texte de la note dans un style direct, clair et ferme.',
        '3. Positionne l\'emplacement de la signature et des destinataires.'
      ],
      solutionGuide: '1. En-tête : \n   ENTREPRISE AGRO-SAN-PEDRO\n   DIRECTION GÉNÉRALE\n   San-Pédro, le 12 octobre 2025\n   NOTE DE SERVICE N° 12/DG/2025\n   OBJET : Rappel des horaires de travail et discipline professionnelle.\n2. Corps du texte :\n   « Il a été constaté avec regret des retards récurrents à la prise de service le matin.\n   La Direction Générale rappelle à l\'ensemble du personnel que les horaires officiels sont fixés de 07h30 à 16h30 précises.\n   Tout retard non justifié fera l\'objet d\'une déduction sur salaire et de sanctions disciplinaires conformément au règlement intérieur.\n   La présente note prend effet dès sa diffusion. »\n3. Clôture : Diffusion : Tout le personnel / Affichage / DRH. Signature : Le Directeur Général.'
    },
    examTraps: [
      'Mettre une formule de politesse (« Cordialement » ou « Veuillez agréer ») dans une note de service.',
      'Employer un ton agressif ou familier dans un écrit administratif.'
    ],
    quickMemo: 'Lettre administrative = Timbre + Date + Suscription + Objet + Formule de politesse. Note de service = Document interne hiérarchique sans politesse.',
    keywords: ['1ere G1', 'secrétariat', 'lettre administrative', 'note de service', 'procès-verbal', 'compte rendu', 'style administratif']
  },

  // ========================================================
  // 1ÈRE SÉRIE G2 - GESTION & COMPTABILITÉ (DPFC / MENA-CI)
  // ========================================================
  {
    id: 'g2-1ere-comptabilite-syscohada-bilan-journal',
    discipline: 'mathematiques',
    disciplineLabel: 'Comptabilité Générale & Gestion (1re G2)',
    level: '1ere',
    levelLabel: '1ère G2 (Gestion / Comptabilité)',
    serie: '1ere_g2',
    serieLabel: '1ère G2 (Comptabilité & Gestion)',
    chapter: 'Comptabilité SYSCOHADA Révisé : Le Bilan, le Compte de Résultat et le Journal',
    lessonTitle: 'Principes comptables de base, structure du Bilan (Actif / Passif), partie double et enregistrement des opérations au Journal',
    objectifs: [
      'Comprendre le principe fondamental de la partie double (Débit = Crédit) du Plan Comptable SYSCOHADA Révisé',
      'Structurer le Bilan comptable : Actif immobilisé, Actif circulant, Trésorerie-Actif vs Capitaux propres, Dettes financières, Passif circulant, Trésorerie-Passif',
      'Calculer le Résultat de l\'exercice (Bénéfice ou Perte) par la formule du Bilan et par le Compte de Résultat (Produits - Charges)',
      'Enregistrer les opérations courantes (achats, ventes, règlements par banque/caisse) dans le livre-journal avec les numéros de comptes officiels'
    ],
    fullCourseContent: `1. Les Notions Fondamentales du SYSCOHADA Révisé :
- L'Entreprise et son Patrimoine :
  * Le Bilan est le tableau photographique de la situation patrimoniale de l'entreprise à une date donnée (généralement au 31 décembre).
  * L'ACTIF (à gauche) : Ce que possède l'entreprise (Emplois : Terrains, Bâtiments, Matériel, Stocks, Créances clients, Banque, Caisse).
  * Le PASSIF (à droite) : L'origine des ressources financières (Ressources : Capital social, Réserves, Résultat, Emprunts bancaires, Dettes fournisseurs).
  * Égalité comptable absolue : TOTAL ACTIF = TOTAL PASSIF.

2. Les Classes de Comptes du Système Comptable OHADA (SYSCOHADA) :
- Classe 1 : Comptes de ressources durables (Capitaux propres et dettes financières à long terme).
- Classe 2 : Comptes de l'actif immobilisé (Immobilisations incorporelles, corporelles et financières).
- Classe 3 : Comptes de stocks (Matières premières, Marchandises, Produits finis).
- Classe 4 : Comptes de tiers (Fournisseurs 401, Clients 411, Personnel, État).
- Classe 5 : Comptes de trésorerie (Banque 521, Caisse 571).
- Classe 6 : Comptes de charges (Achats de marchandises 601, Services extérieurs 62/63, Charges de personnel 66).
- Classe 7 : Comptes de produits (Ventes de marchandises 701, Production vendue).
- Classe 8 : Comptes des autres charges et autres produits (Hors Activités Ordinaires - HAO).

3. Le Principe de la Partie Double :
- Toute opération comptable donne lieu à une inscription d'égal montant au DÉBIT d'un ou plusieurs comptes et au CRÉDIT d'un ou plusieurs autres comptes :
  ∑ Montants Débités = ∑ Montants Crédités.
- Règle de fonctionnement des comptes :
  * Comptes d'Actif et de Charges (Classes 2, 3, 5, 6) : Augmentent au DÉBIT (+), diminuent au CRÉDIT (-).
  * Comptes de Passif et de Produits (Classes 1, 4, 7) : Augmentent au CRÉDIT (+), diminuent au DÉBIT (-).

4. L'Enregistrement au Journal Général :
- Pour chaque écriture : Date, N° de compte débité, N° de compte crédité, Intitulés des comptes, Montant au débit, Montant au crédit, et Libellé justificatif (Facture n°, Chèque n°).`,
    definitions: [
      {
        term: 'Bilan comptable',
        definition: 'État financier de synthèse normalisé représentant la situation patrimoniale de l\'entreprise à la clôture de l\'exercice, divisé en Actif et Passif.'
      },
      {
        term: 'Partie double',
        definition: 'Principe fondamental selon lequel chaque écriture comptable mobilise au moins deux comptes avec une égalité stricte entre le total débité et le total crédité.'
      },
      {
        term: 'SYSCOHADA Révisé',
        definition: 'Cadre comptable légal harmonisé commun aux 17 États membres de l\'Organisation pour l\'Harmonisation en Afrique du Droit des Affaires (OHADA).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Équilibre fondamental du Bilan',
        statement: 'À toute date de clôture, Total Actif = Total Passif.'
      },
      {
        name: 'Calcul du résultat de l\'exercice',
        statement: 'Résultat = Total des Produits (Classe 7) - Total des Charges (Classe 6). Si Résultat > 0 : Bénéfice (au Passif avec signe +) ; si Résultat < 0 : Perte (au Passif avec signe -).'
      }
    ],
    formulas: [
      {
        name: 'Équation comptable du Bilan',
        formula: 'Actif = Passif = Capitaux Propres + Dettes',
        explanation: 'Toutes les possessions de l\'entreprise sont financées soit par les associés, soit par des créanciers tiers.',
        unitOrCondition: 'FCFA'
      },
      {
        name: 'Résultat comptable',
        formula: 'Résultat = ∑ Produits (Cl 7) - ∑ Charges (Cl 6)',
        explanation: 'Différence entre le chiffre d\'affaires et les coûts engagés.',
        unitOrCondition: 'FCFA'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Passer une écriture comptable d\'achat de marchandises',
        procedure: '1. Identifier la nature de l\'opération : Achat de marchandises -> Compte de charges 601 débité.\n2. Identifier le mode de règlement : \n   - Si à crédit -> Compte tiers 401 Fournisseurs crédité.\n   - Si par banque -> Compte de trésorerie 521 Banque crédité.\n   - Si en espèces -> Compte de trésorerie 571 Caisse crédité.\n3. Vérifier que Montant Débit = Montant Crédit.\n4. Mentionner le numéro de la facture en libellé.',
        tip: 'Le compte Fournisseurs (401) est une dette au Passif, donc il augmente toujours au Crédit.'
      }
    ],
    examples: [
      {
        statement: 'L\'entreprise "KOUAMÉ & FILS" achète le 5 mars 2025 des marchandises pour 500 000 FCFA payées par chèque bancaire n° 441. Présente l\'écriture au journal.',
        solution: 'Date : 05/03/2025\n- Débit : Compte 601 "Achats de marchandises" pour 500 000 FCFA.\n- Crédit : Compte 521 "Banque" pour 500 000 FCFA.\n- Libellé : Achat marchandises, Chèque n° 441.\nL\'égalité Débit = Crédit = 500 000 FCFA est respectée.'
      }
    ],
    exercises: [
      {
        question: 'Au 31 décembre, une entreprise de Treichville totalise 18 000 000 FCFA d\'Actif. Ses capitaux propres sont de 10 000 000 FCFA et ses dettes financières et d\'exploitation s\'élèvent à 6 500 000 FCFA. Calcule le résultat net de l\'exercice et précise sa nature.',
        correction: '1. Équation du Bilan : Total Actif = Total Passif = Capitaux Propres + Résultat + Dettes\n18 000 000 = 10 000 000 + Résultat + 6 500 000\n18 000 000 = 16 500 000 + Résultat\nRésultat = 18 000 000 - 16 500 000 = + 1 500 000 FCFA.\n2. Conclusion : Le résultat est positif, il s\'agit d\'un Bénéfice net de 1 500 000 FCFA.'
      }
    ],
    evaluationSituation: {
      context: 'Un jeune diplômé crée un magasin de vente de matériel informatique à Bouaké avec un apport personnel de 5 000 000 FCFA déposé en banque (521) et un emprunt bancaire (162) de 3 000 000 FCFA. Il achète un ordinateur de bureau (244) pour 800 000 FCFA et un stock initial de marchandises (311) pour 4 000 000 FCFA réglés par virement bancaire.',
      instructions: [
        '1. Dresse le Bilan d\'ouverture équilibré de l\'entreprise.',
        '2. Calcule le solde restant sur le compte en Banque à l\'Actif.',
        '3. Vérifie l\'égalité stricte Actif = Passif.'
      ],
      solutionGuide: '1. Passif : Capital social (Compte 101) = 5 000 000 FCFA ; Emprunt (Compte 162) = 3 000 000 FCFA -> Total Passif = 8 000 000 FCFA.\n2. Trésorerie en Banque : 5 000 000 + 3 000 000 - 800 000 - 4 000 000 = 3 200 000 FCFA.\n3. Actif : Matériel informatique = 800 000 FCFA ; Stocks de marchandises = 4 000 000 FCFA ; Banque = 3 200 000 FCFA -> Total Actif = 8 000 000 FCFA.\nConclusion : Total Actif (8 000 000 FCFA) = Total Passif (8 000 000 FCFA). Bilan parfaitement équilibré.'
    },
    examTraps: [
      'Inverser le Débit et le Crédit (se souvenir : Débit = Emploi/Ce qui entre ou augmente à l\'actif ; Crédit = Ressource/Ce qui sort ou finance).',
      'Confondre un achat de matériel immobilisé (Compte 24) avec un achat de marchandises destinées à la revente (Compte 601).'
    ],
    quickMemo: 'SYSCOHADA : Total Actif = Total Passif. Débit = Crédit. Classe 1 (Capitaux), 2 (Immos), 3 (Stocks), 4 (Tiers), 5 (Trésorerie), 6 (Charges), 7 (Produits).',
    keywords: ['1ere G2', 'comptabilité', 'SYSCOHADA', 'bilan', 'passif', 'actif', 'partie double', 'journal', 'résultat']
  }
];
