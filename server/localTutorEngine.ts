/**
 * Local Academic Tutor Engine
 * Provides rich, instantaneous, highly structured and pedagocical answers
 * when AI API is busy, rate-limited, unavailable, or in high-concurrency mode.
 * Integrates all knowledge from the 125-page official CI guide (BAC & BEPC).
 */

import { solveFrancaisTle, searchLiteraryArguments } from "./francaisTleEngine/francaisTleEngine";
import { solvePhiloTle } from "./philoEngine/philoEngine";
import { solveHistoireGeoTle } from "./histoireGeoEngine/histoireGeoEngine";
import { solveMathsTleAExercise } from "./mathsEngine/mathsTleAEngine";
import { solveMathsTleCExercise } from "./mathsTleCEngine/mathsTleCEngine";
import { solveMathsTleD } from "./mathsTleDEngine/mathsTleDEngine";
import { solvePcTleCdeExercise } from "./pcEngine/pcTleCdeEngine";
import { solveSvtTleDExercise } from "./svtEngine/svtTleDEngine";
import { solveMaths6e } from "./maths6eEngine/maths6eEngine";
import { solvePc6e } from "./pc6eEngine/pc6eEngine";
import { solveGeo6e } from "./geo6eEngine/geo6eEngine";
import { solveLanguageChat, detectLanguage } from "./languagesEngine/languagesEngine";
import { canonicalDiscipline } from "./disciplineRouter";
import { getAcademicCourseResult } from "../src/utils/courseKnowledgeBase";
import { parseStatement } from "./exercisePipeline/statementParser";
import { solveAllExercisesWithPapaMethod } from "./exercisePipeline/universalPapaMethodSolver";
import { tryHybridDeterministicExerciseResolution } from "./exercisePipeline/hybridDeterministicSolver";
import { buildMethodologyResultFromSolvedExercises } from "./exercisePipeline/exerciseSolverPipeline";
import { francaisTleKnowledgeBase } from "../src/data/francaisTleKnowledgeBase";
import { philosophieTleKnowledgeBase } from "../src/data/philosophieTleKnowledgeBase";
import { histoireGeoTleKnowledgeBase } from "../src/data/histoireGeoTleKnowledgeBase";
import { parseConjugationRequest, conjugateVerb } from "../src/utils/conjugator/universalConjugator";
import { isFrenchGrammarQuery, solveFrenchGrammarExercise } from "./exercisePipeline/frenchGrammarExerciseSolver";
import { detectDissertationTask } from "./dissertationTaskRouter";

export interface LocalTutorParams {
  query: string;
  discipline?: string;
  level?: string;
  serie?: string;
  fasciculeContext?: any;
  subjectContext?: string;
}

export function generateLocalTutorAnswer(params: LocalTutorParams): string {
  const query = (params.query || "").trim();
  const lower = query.toLowerCase();
  const context = (params.subjectContext || "").toLowerCase();
  const fullText = `${lower} ${context}`;
  const discipline = params.discipline || "";
  const level = params.level || "Terminale";

  // 0. CONJUGAISON UNIVERSELLE (Français, Anglais, Allemand, Espagnol)
  // Détecte les requêtes comme "conjugaison verbe être au present", "conjugue le verbe aller", etc.
  const parsedConj = parseConjugationRequest(query);
  if (parsedConj.isConjugationIntent) {
    const conjResult = conjugateVerb(parsedConj.infinitive, parsedConj.language);
    if (conjResult && conjResult.infinitive) {
      // Trouver le temps demandé si spécifié
      let targetTenseObj: { tenseName: string; tenseLabelFr: string; forms: Array<{ person: string; form: string }>; notes?: string } | null = null;
      if (parsedConj.requestedTenseId || parsedConj.requestedTenseLabel) {
        for (const mood of conjResult.moods) {
          for (const t of mood.tenses) {
            const matchByName = parsedConj.requestedTenseLabel && t.tenseName.toLowerCase().includes(parsedConj.requestedTenseLabel.toLowerCase());
            const matchByLabel = parsedConj.requestedTenseLabel && t.tenseLabelFr.toLowerCase().includes(parsedConj.requestedTenseLabel.toLowerCase());
            const matchById = parsedConj.requestedTenseId && (
              (parsedConj.requestedTenseId === 'present' && /pr[ée]sent/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'imparfait' && /imparfait/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'passe_compose' && /pass[ée][- ]compos[ée]/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'passe_simple' && /pass[ée][- ]simple/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'futur_simple' && /futur\s+simple/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'plus_que_parfait' && /plus[- ]que[- ]parfait/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'subjonctif_present' && /subjonctif\s+pr[ée]sent/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'conditionnel_present' && /conditionnel\s+pr[ée]sent/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'simple_present' && /simple\s+present/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'simple_past' && /simple\s+past/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'present_perfect' && /present\s+perfect/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'praesens' && /pr[äa]sens/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'praeteritum' && /pr[äa]teritum/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'presente' && /presente/i.test(t.tenseName)) ||
              (parsedConj.requestedTenseId === 'indefinido' && /indefinido/i.test(t.tenseName))
            );
            if (matchById || matchByName || matchByLabel) {
              targetTenseObj = t;
              break;
            }
          }
          if (targetTenseObj) break;
        }
      }

      let reply = `### Conjugaison officielle du verbe **${conjResult.infinitive.toUpperCase()}** (${conjResult.languageLabel})\n\n`;
      if (conjResult.translationFr) reply += `**Traduction / Sens :** *${conjResult.translationFr}*\n`;
      if (conjResult.groupOrType) reply += `**Classification :** ${conjResult.groupOrType}\n`;
      if (conjResult.auxiliary) reply += `**Auxiliaire :** ${conjResult.auxiliary}\n`;
      reply += `**Participe présent :** \`${conjResult.participles.present || '-'}\` | **Participe passé :** \`${conjResult.participles.past || '-'}\`\n\n`;

      if (targetTenseObj) {
        reply += `#### 🎯 ${targetTenseObj.tenseName.toUpperCase()}${targetTenseObj.tenseLabelFr && targetTenseObj.tenseLabelFr !== targetTenseObj.tenseName ? ` (${targetTenseObj.tenseLabelFr})` : ''} :\n`;
        targetTenseObj.forms.forEach((f) => {
          reply += `- **${f.person}** : \`${f.form}\`\n`;
        });
        if (targetTenseObj.notes) reply += `\n> *Règle :* ${targetTenseObj.notes}\n`;
        reply += `\n---\n\n#### Autres temps usuels importants :\n`;

        // Afficher 2 ou 3 autres temps clés
        const otherTenses = conjResult.moods[0]?.tenses.filter(t => t !== targetTenseObj).slice(0, 2) || [];
        otherTenses.forEach((ot) => {
          reply += `\n**${ot.tenseName} :**\n`;
          ot.forms.forEach(f => {
            reply += `- ${f.person} : \`${f.form}\`\n`;
          });
        });
      } else {
        // Pas de temps spécifique : afficher l'ensemble des temps du premier mode
        const mainMood = conjResult.moods[0];
        if (mainMood) {
          reply += `#### ${mainMood.moodName} :\n`;
          mainMood.tenses.forEach((t) => {
            reply += `\n**${t.tenseName}${t.tenseLabelFr && t.tenseLabelFr !== t.tenseName ? ` (${t.tenseLabelFr})` : ''} :**\n`;
            t.forms.forEach((f) => {
              reply += `- **${f.person}** : \`${f.form}\`\n`;
            });
          });
        }
      }

      if (conjResult.quickRules && conjResult.quickRules.length > 0) {
        reply += `\n---\n💡 **Règles & Pièges fréquents :**\n`;
        conjResult.quickRules.forEach(r => {
          reply += `- ${r}\n`;
        });
      }

      return reply;
    }
  }

  // 0.1 GRAMMAIRE, SYNTAXE & ORTHOGRAPHE DU FRANÇAIS
  if (isFrenchGrammarQuery(query)) {
    const grammarRes = solveFrenchGrammarExercise(query);
    return grammarRes.fullSynthesizedResponse || grammarRes.level5FullRedaction;
  }

  // 1. GREETINGS & CASUAL INTRODUCTIONS
  if (/^(bonjour|bonsoir|salut|hello|coucou|aide[- ]moi|qui es[- ]tu|présente[- ]toi)/i.test(query) && query.length < 35) {
    return `Bonjour ! Je suis Le Prof, ton mentor d'excellence scolaire, calibré sur les programmes officiels (Collège, Lycée, Baccalauréat toutes séries).

Je peux t'aider à :
1. **Rédiger ou structurer un devoir** : Dissertation littéraire, philosophique ou historique, commentaire composé, situation d'évaluation, résumé de texte.
2. **Résoudre un exercice étape par étape** : Mathématiques, Physique-Chimie, SVT (calculs détaillés, justifications, formules).
3. **Réviser un cours ou une notion** : Définitions officielles, théorèmes, repères historiques, citations d'auteurs et analyses.
4. **Appliquer les grilles officielles d'évaluation** (méthode NODDACI, barème officiel du BAC et BEPC).

Pose-moi ta question, donne-moi ton sujet d'exercice ou la notion que tu souhaites travailler !`;
  }

  // 2. QUESTIONS SUR LA MÉTHODOLOGIE DE DISSERTATION PHILOSOPHIQUE
  if (/m[ée]thod(e|ologie).*dissertation.*philo|dissertation philosophique|comment faire une dissertation en philo|probl[ée]matisation.*philo|paradoxe.*philo|hors[- ]sujet.*philo/i.test(fullText)) {
    return `**MÉTHODOLOGIE OFFICIELLE ET RIGOUREUSE DE LA DISSERTATION PHILOSOPHIQUE (BAC)**

La dissertation philosophique n'est ni un étalage d'opinions personnelles, ni une récitation de cours par mots-clés. C'est une **démonstration dialectique, ordonnée et critique** répondant à un problème précis.

---

### ⚠️ RÈGLE D'OR ABSOLUE : L'ÉTUDE SÉMANTIQUE ET LA POLYSÉMIE (ANTI-HORS-SUJET)
**Chaque mot a plusieurs sens dans une phrase : ne jamais réduire un sujet au sens le plus évident ou historique !**
* **La fonction grammaticale du mot oriente son sens** : Dans un sujet comme *« La philosophie est-elle un mythe ? »*, « un mythe » est l'attribut du sujet « la philosophie ». 
* **Ne pas confondre sens propre et sens figuré** :
  * *Sens 1 (littéral/historique)* : Récit fondateur sacré mettant en scène des dieux (*Muthos* opposé au *Logos*). Réciter le passage du mythe à la raison ici est un **hors-sujet fatal** (sanctionné 01 ou 02/20 au BAC).
  * *Sens 2 (figuré/critique en contexte)* : **Illusion trompeuse, chimère, bavardage stérile, promesse vaine sans utilité concrète ni efficacité pratique**.
* **Le véritable enjeu du sujet** : Ce sujet porte sur **l'UTILITÉ, la NÉCESSITÉ et la FÉCONDITÉ de la philosophie pour l'homme**, face aux reproches d'abstraction et d'inutilité matérielle. On ne veut donc pas parler d'opposition historique mythe/logos, mais de la valeur réelle de l'exercice philosophique !

---

### ÉTAPE 0 : LE TRAVAIL PRÉLIMINAIRE AU BROUILLON (1 heure impérative)
1. **L'analyse parcellaire des termes** : Définir chaque mot selon son acception précise dans la phrase.
2. **La mise au jour du présupposé** : Ce que la question sous-entend ou remet en cause.
3. **Le dégagement du paradoxe** : La contradiction interne entre deux évidences contraires.
4. **Le problème central** : Question **courte, directe, percutante** (ne jamais mettre de « ou » dans le problème !).
5. **Les deux aspects (Thèse / Antithèse)** : Poser les deux questions directrices qui constitueront vos deux grands axes.

---

### 1. L'INTRODUCTION (Rédigée en UN SEUL BLOC CONTINU, sans saut de ligne)
Elle comporte 4 composantes logiquement enchaînées :
1. **L'Amorce / Le Paradoxe** : Partir d'une définition, d'un constat universel ou d'une citation qui révèle la tension interne du thème.
2. **L'insertion du sujet** : Citer le sujet mot à mot entre guillemets.
3. **La reformulation conceptuelle** : Réécrire le sujet en termes simples, clairs et authentiques.
4. **La Problématisation canonique** :
   - Le problème court (Ex : *« La philosophie est-elle une vaine illusion ? »* ou *« L'essor de la technique est-il toujours bénéfique à l'homme ? »*).
   - La phrase de liaison obligatoire : *« Pour répondre à ce problème, d’autres questions s’ajoutent : »*
   - Aspect 1 (Thèse) : *« Dans quelle mesure [Axe 1 interrogatif] ? »*
   - Aspect 2 (Antithèse) : *« Toutefois, ne convient-il pas de reconnaître que [Axe 2 interrogatif] ? »*

---

### 2. LE DÉVELOPPEMENT (Deux grands axes équilibrés, séparés par une transition)
* **Axe I — Thèse (Examen de l'affirmation principale)** :
  - Démontrer le bien-fondé de la première thèse en 2 ou 3 sous-parties (A, B, C).
  - Chaque sous-partie respecte la règle **I-E-I** : **I**dée directrice $\\rightarrow$ **E**xplication rationnelle $\\rightarrow$ **I**llustration doctrinale (Auteur, Œuvre, Citation exacte et analyse critique de la citation).
* **La Transition dialectique charnière** :
  - Bilan synthétique de l'Axe I.
  - Mise en évidence de ses limites ou apories.
  - Question charnière ouvrant logiquement sur l'Axe II (*« De ce qui précède, nous retenons que... Toutefois, cette position suffit-elle à clore le débat ? Ne convient-il pas d'interroger... ? »*).
* **Axe II — Antithèse ou Dépassement critique** :
  - Démontrer les limites de l'Axe I et faire valoir la vérité supérieure ou complémentaire de la notion.
  - Mêmes exigences : 2 ou 3 arguments étayés par des auteurs majeurs (Platon, Descartes, Kant, Hegel, Marx, Freud, Towa, Hountondji).

---

### 3. LA CONCLUSION (Tripartite, séparée du corps par 2 lignes)
1. **Le Bilan** : Récapituler sans répéter les apports substantiels des deux axes.
2. **La Prise de position personnelle motivée** : Répondre nettement et sans faux-fuyant au problème posé, avec des arguments philosophiques solides.
3. **L'Ouverture prospective** : Élargir vers un problème éthique, existentiel ou sociétal d'envergure (sans jamais poser de question gadget ni citer un auteur nouveau).`;
  }

  // 3. QUESTIONS SUR LA MÉTHODOLOGIE DU COMMENTAIRE DE TEXTE PHILOSOPHIQUE
  if (/m[ée]thod(e|ologie).*commentaire.*philo|commentaire de texte philosophique|grille de lecture.*philo|critique interne.*externe/i.test(fullText)) {
    return `**MÉTHODOLOGIE DU COMMENTAIRE DE TEXTE PHILOSOPHIQUE (TERMINALE)**

Le commentaire de texte philosophique consiste à expliquer le texte et à en évaluer la portée philosophique.

**I. LA GRILLE DE LECTURE (Étude préliminaire)** :
- **Thème** : De quoi parle le texte ? (Champ lexical dominant).
- **Problème** : À quelle question philosophique implicite l'auteur répond-il ?
- **Thèse** : Quelle est la position ou la réponse centrale soutenue par l'auteur ?
- **Antithèse** : Quelles sont les limites ou objections possibles à cette position ?
- **Intention** : Quel est le but immédiat visé par l'auteur (dénoncer, prouver, éclairer) ?
- **Enjeu** : Quelle est la finalité humaine/universelle (le bonheur, la liberté, la vérité, la justice) ?
- **Structure logique** : Découpage du texte en 2 ou 3 mouvements argumentatifs.

**II. LA RÉDACTION** :
- **Introduction** : Présentation de l'auteur et de l'œuvre, exposé du thème, formulation du problème, annonce de la thèse et de la structure du texte.
- **Développement en deux temps majeurs** :
  1. *L'Étude ordonnée* : Explication fidèle et méthodique des mouvements du texte (démarche argumentative, concepts clés, sans paraphrase).
  2. *L'Intérêt philosophique* : 
     - *Critique interne* : Cohérence du raisonnement, rigueur de l'argumentation.
     - *Critique externe* : Discussion du fond en confrontant la thèse de l'auteur à d'autres doctrines philosophiques.
- **Conclusion** : Bilan critique du débat et prise de position finale sur la portée de la thèse de l'auteur.`;
  }

  // 4. QUESTIONS SUR LA MÉTHODOLOGIE EN FRANÇAIS (DISSERTATION LITTÉRAIRE, COMMENTAIRE COMPOSÉ, RÉSUMÉ)
  if (/m[ée]thod(e|ologie).*dissertation.*litt[ée]raire|dissertation en fran[çc]ais|plan dialectique.*litt[ée]raire/i.test(fullText)) {
    return `**MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION LITTÉRAIRE (BAC)**

**1. L'INTRODUCTION (3 éléments obligatoires)** :
- **Amener le sujet** : Contexte littéraire général ou historique autour du thème (fonction de la poésie, mission du roman, rôle du théâtre, engagement de l'écrivain).
- **Poser le problème** : Insérer la citation ou le sujet, reformuler la pensée de l'auteur et poser la problématique littéraire centrale.
- **Annoncer le plan** : Poser clairement les deux axes du développement (Thèse et Antithèse / Nuance).

**2. LE DÉVELOPPEMENT (Structure des paragraphes)** :
Chaque paragraphe d'argumentation doit respecter la chaîne :
**Idée / Argument $\\rightarrow$ Explication $\\rightarrow$ Exemple littéraire précis (Auteur, Titre de l'œuvre, Personnage / Extrait) $\\rightarrow$ Analyse de la portée**.
- *Axe 1 (Thèse)* : Démonstration de la fonction mise en avant par le sujet (ex : fonction engagée/satirique, fonction didactique).
- *Transition rédigée* : Synthèse de l'axe 1 et interrogation sur l'axe 2.
- *Axe 2 (Antithèse)* : Mise en lumière des autres vocations littéraires (fonction esthétique, lyrique, ludique, évasive/fictive).

**3. LA CONCLUSION (3 temps)** :
- **Bilan** : Rappel concis des deux axes étudiés.
- **Réponse à la problématique** : Synthèse affirmant la pluralité et la richesse de l'art littéraire.
- **Ouverture** : Élargissement vers un autre genre ou une perspective contemporaine.`;
  }

  if (/commentaire compos[ée]|m[ée]thod(e|ologie).*commentaire.*fran[çc]ais|centres d'int[ée]r[êe]t/i.test(fullText)) {
    return `**MÉTHODOLOGIE DU COMMENTAIRE COMPOSÉ EN FRANÇAIS (BAC)**

Le commentaire composé consiste à analyser un extrait littéraire pour dégager son sens à travers des outils d'analyse précis.

**Règle d'or de chaque paragraphe** :
**Idée secondaire $\\rightarrow$ Outil d'analyse linguistique/stylistique $\\rightarrow$ Relevé d'exemples précis $\\rightarrow$ Interprétation des effets de sens $\\rightarrow$ Transition**.

**Structure de la copie** :
- **Introduction** :
  1. Contexte & Paratexte (Auteur, titre de l'œuvre, date, genre, situation du passage).
  2. Idée générale du texte.
  3. Annonce des centres d'intérêt (2 ou 3 axes d'étude).
- **Développement** :
  * *Centre d'intérêt I* : Découpé en 2 sous-parties (Idée + figures de style + interprétation).
  * *Transition*.
  * *Centre d'intérêt II* : Découpé en 2 sous-parties.
- **Conclusion** :
  * Bilan des centres d'intérêt.
  * Intérêts du texte (au moins deux : stylistique, littéraire, didactique, social ou philosophique).
  * Ouverture facultative.

**Barème officiel (20 points)** : Organisation des idées (6 pts), Compréhension du sujet (6 pts), Langue et expression (6 pts), Présentation (2 pts).`;
  }

  if (/r[ée]sum[ée] de texte|production [ée]crite.*fran[çc]ais|11 conseils.*r[ée]sum[ée]/i.test(fullText)) {
    return `**MÉTHODOLOGIE DU RÉSUMÉ DE TEXTE & PRODUCTION ÉCRITE (BAC & BEPC)**

**Les 11 Conseils Fondamentaux pour réussir le Résumé** :
1. **À FAIRE** :
   - Suivre scrupuleusement l'ordre des idées de l'auteur.
   - Rédiger à la même personne que l'auteur (se glisser dans sa voix).
   - Conserver les mots-clés essentiels et trouver des synonymes pour les périphrases.
   - Condenser au **tiers ($1/3$) du volume initial** (avec marge tolérée de $\\pm 10\\%$).
   - Utiliser des connecteurs logiques pour assurer la fluidité du raisonnement.
2. **À NE PAS FAIRE** :
   - Ne jamais utiliser de formules comme « L'auteur dit que... » ou « Selon l'auteur ».
   - Ne jamais donner son avis personnel ni introduire d'exemples non présents.
   - Ne jamais recopier de phrases intégrales du texte initial (pas de paraphrase brute).

**La Production Écrite** :
- Étude parcellaire du sujet (Thème, Thèse, Consigne).
- Introduction en 3 étapes : Amorce du thème, insertion du sujet/reformulation, question directrice.
- Développement argumenté structuré avec des arguments de société et des exemples vécus.
- Conclusion : Bilan des arguments et prise de position finale.`;
  }

  // 5. QUESTIONS SUR LA MÉTHODOLOGIE HISTOIRE-GÉOGRAPHIE & GRILLE NODDACI
  if (/noddaci|m[ée]thod(e|ologie).*commentaire.*histoire|commentaire de document.*histoire|commentaire.*g[ée]o/i.test(fullText)) {
    return `**MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS EN HISTOIRE-GÉOGRAPHIE (BAC)**

Le commentaire de document repose sur les questions de présentation et les questions d'exploitation.

**1. Les Questions de Présentation (Grille Officielle NODDACI)** :
- **N - Nature du document** : Texte (discours, article, traité, extrait de mémoires), carte, graphique (courbe, histogramme), tableau statistique, photographie.
- **O - Origine / Source** : Titre de l'ouvrage ou du journal, maison d'édition, page.
- **D - Date** : Année ou jour précis de rédaction ou d'événement.
- **D - Destinataire** : Public visé, peuple, assemblée, communauté internationale.
- **A - Auteur** : Nom, prénom et fonction/qualité historique ou politique de l'auteur.
- **C - Contexte historique** : Période ou événements marquants ayant précédé ou provoqué les faits du document.
- **I - Idée générale** : Message central et signification globale du document.

**2. Les Questions d'Exploitation (Sens des consignes)** :
- **Expliquez** : Éclairer un passage en s'appuyant sur ses connaissances précises (dates, chiffres, causes).
- **Commentez** : Expliquer puis apporter une analyse critique ou une mise en perspective.
- **Analysez** : Décomposer les éléments, les évolutions ou les conséquences.
- **Discutez / Êtes-vous d'accord ?** : Montrer les aspects valables puis nuancer ou exposer les limites.
- **La Portée** : Montrer l'impact et les répercussions historiques futures du document.`;
  }

  if (/m[ée]thod(e|ologie).*dissertation.*histoire|dissertation.*g[ée]ographie|types de plan.*histoire/i.test(fullText)) {
    return `**LES TYPES DE PLANS EN DISSERTATION HISTOIRE-GÉOGRAPHIE (BAC)**

1. **Le Plan Chronologique / Évolutif** :
   - *Utilisation* : Sujets comportant deux bornes chronologiques précises (ex : *« La décolonisation de la Côte d'Ivoire de 1944 à 1960 »*).
   - *Structure* : Diviser la période en 2 ou 3 phases historiques logiques et successives.
2. **Le Plan Thématique / Tableau / Inventaire** :
   - *Utilisation* : Sujets portant sur un bilan ou une situation globale (ex : *« Les fondements de l'économie ivoirienne »*, *« Les succès et limites de l'ONU »*).
   - *Structure* : Regrouper par domaines (politique, économique, social, culturel).
3. **Le Plan Dialectique** :
   - *Utilisation* : Sujets sous forme d'interrogation ou opposant deux visions.
   - *Structure* : Thèse (affirmation / atouts) $\\rightarrow$ Antithèse (limites / freins / nuances).
4. **Le Plan Comparatif** :
   - *Utilisation* : Sujets mettant en parallèle deux entités (ex : *« L'agriculture en Côte d'Ivoire et en Corée du Sud »*).
   - *Structure* : I. Les ressemblances et points communs $\\rightarrow$ II. Les différences et spécificités.`;
  }

  // 4.9 COLLÈGE 4ÈME : FRANÇAIS (GRAMMAIRE, EXPRESSION ÉCRITE & ORTHOGRAPHE)
  if (/grammaire.*4[eè]me|expression [ée]crite.*4[eè]me|4[eè]me.*(grammaire|expression [ée]crite)|texte explicatif|r[ée]sum[ée].*texte.*informatif.*(tiers|1\/3)|compte[- ]rendu de r[ée]union|dialogue argumentatif|lettre officielle.*administrative|groupe nominal.*expansions?|d[ée]terminant z[ée]ro|pronominalisation.*(en|y|soi)|radicaux.*3e groupe|accord.*participe pass[ée].*avoir|subordonn[ée]e (relative|compl[ée]tive|circonstancielle)|apres que.*subjonctif|homophones?.*(quand|quant|plutot)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE FRANÇAIS EN CLASSE DE 4ÈME (GRAMMAIRE, EXPRESSION ÉCRITE & ORTHOGRAPHE)**

**I. EXPRESSION ÉCRITE (MÉTHODOLOGIE OFFICIELLE)** :
1. **Le Texte Explicatif (Phénomènes naturels & Faits socioculturels)** :
   - *Visée* : Répondre à *« Pourquoi ? »* et *« Comment ? »* de façon objective et rationnelle.
   - *Caractéristiques* : Présent de vérité générale, lexique technique adapté, locutions explicatives (*« c'est-à-dire »*, *« en d'autres termes »*), connecteurs de cause et conséquence, ponctuation explicative (deux-points, parenthèses).
   - *Structure* : Introduction (définition + questionnement) $\\rightarrow$ Développement (causes premières, mécanisme étape par étape, conséquences) $\\rightarrow$ Conclusion (bilan + ouverture citoyenne).
2. **Le Résumé de Texte Informatif au Tiers ($1/3 \\pm 10\\%$)** :
   - *Formule du volume* : $\\text{Nombre de mots cible} = \\frac{\\text{Nombre de mots du texte}}{3}$ avec marge de $\\pm 10\\%$.
   - *Règles d'or* : Éliminer impérativement les exemples particuliers, anecdotes, citations, énumérations (remplacées par un terme générique) et répétitions.
   - *Neutralité absolue* : Zéro commentaire personnel, interdiction d'écrire *« l'auteur dit que »*, respect scrupuleux du système d'énonciation et de l'ordre du texte. Décompte obligatoire des mots au bas de la copie.
3. **Le Compte Rendu de Réunion** :
   - *Mentions obligatoires de l'en-tête* : Structure/association, Date, Lieu précis, Heures de début et de fin, Intitulé centré.
   - *Acteurs clés* : Président de séance (police des débats), Secrétaire/Rapporteur (prise de notes et rédaction), Membres présents et excusés.
   - *Corps du document* : Ordre du jour numéroté, synthèse objective des débats et décisions adoptées (sans polémiques inutiles), formule rituelle de levée de séance et signature officielle du rapporteur.
4. **Le Dialogue Argumentatif** :
   - *Structure* : Récit-cadre introducteur (cadre spatio-temporel et sujet du litige) $\\rightarrow$ Échanges de répliques argumentées (Thèse + Argument + Exemple + Réfutation) $\\rightarrow$ Dénouement narratif.
   - *Typographie* : Guillemets (« ») en ouverture et fermeture, tiret cadratin (-) à chaque changement de parole, propositions incises variées avec inversion obligatoire du sujet (*« protesta le père »*, *« répliqua-t-elle »*).
5. **La Lettre Officielle (Administrative)** :
   - *Disposition spatiale* : Émetteur en haut à gauche ; Lieu et date en haut à droite ; Destinataire précédé de la mention *« À Monsieur le... »* à droite ; Objet et Pièces Jointes (P.J.) à gauche.
   - *Formule d'appel* : Titre de civilité seul sans nom de famille (*« Monsieur le Maire, »*).
   - *Formule d'entrée* : *« J'ai l'honneur de solliciter de votre haute bienveillance... »*.
   - *Formule de politesse finale* : Formule respectueuse (*« l'expression de ma considération distinguée »*), suivie de la signature manuscrite en bas à droite.

**II. GRAMMAIRE FONDAMENTALE (4ÈME)** :
1. **Le Groupe Nominal (GN) et ses Expansions** :
   - *Nom noyau* accompagné d'expansions : Adjectif qualificatif épithète (liée ou détachée), Complément du nom (introduit par préposition *de, à, en, sans*), Proposition subordonnée relative (introduite par pronom relatif).
   - *Le Déterminant Zéro ($\\varnothing$)* : Absence volontaire d'article dans les proverbes (*« $\\varnothing$ Pierre qui roule n'amasse pas mousse »*), noms propres (*« $\\varnothing$ Koffi vit à $\\varnothing$ Daloa »*), apostrophes (*« $\\varnothing$ Courage ! »*) et formules figées (*« avoir $\\varnothing$ faim »*).
2. **La Pronominalisation** :
   - *Pronoms personnels compléments* : COD (*le, la, les*), COI (*lui, leur* sans « s » !).
   - *Pronoms adverbiaux* : **EN** (remplace un complément prépositionnel introduit par *de* ou partitif) et **Y** (remplace un lieu où l'on va ou un complément en *à*).
   - *Pronom réfléchi « soi »* : S'emploie uniquement avec un sujet indéterminé (*on, chacun, tout le monde* : *« Chacun travaille pour soi »*).
3. **Le Verbe : Radicaux du 3e groupe & Semi-auxiliaires** :
   - *Radicaux multiples* : De 1 à 5 radicaux (*pouvoir : peu-, pouv-, peuv-, puiss-, pour-*), radicaux supplétifs (*aller : v-, all-, i-, aill-* ; *être, avoir*).
   - *Semi-auxiliaires* : *Aller + infinitif* (futur proche), *Venir de + infinitif* (passé récent), *Être en train de* (duratif), *Devoir* (obligation).
4. **Accord du Participe Passé** :
   - *Avec ÊTRE* : S'accorde toujours en genre et en nombre avec le SUJET (*« Elles sont venues »*).
   - *Avec AVOIR* : Invariable avec le sujet. S'accorde en genre et nombre avec le COD si et seulement si celui-ci est placé AVANT le verbe (*« Les mangues que j'ai mangées »*).
5. **Propositions Subordonnées Relatives et Complétives** :
   - *Relative* : Complète un NOM antécédent (Pronoms : *qui* = sujet, *que* = COD, *dont* = complément en de, *où* = lieu/temps).
   - *Complétive conjonctive* : Complète un VERBE pour en être le COD (*« Je sais qu'il réussira »*).
6. **Subordonnées Circonstancielles et Modes Verbaux** :
   - *Subjonctif obligatoire après* : *Pour que, afin que, de peur que* (but) ; *Bien que, quoique* (concession) ; *Avant que, jusqu'à ce que* (antériorité).
   - *Indicatif obligatoire après* : *Parce que, puisque* (cause) ; *Si bien que, tellement... que* (conséquence) ; *Après que* (postériorité : *« Après qu'il a mangé »* et jamais *ait mangé* !).

**III. ORTHOGRAPHE (4ÈME)** :
1. **Consonnes finales muettes** : Retrouvées par le féminin (*lourd $\\rightarrow$ lourde (d)*) ou mot dérivé (*plomb $\\rightarrow$ plombier (b)*, *galop $\\rightarrow$ galoper (p)*).
2. **Homophones** :
   - *Quand* (temps = lorsque) vs *Quant à* (en ce qui concerne) vs *Qu'en* (que + en).
   - *Plutôt* (de préférence) vs *Plus tôt* (contraire de plus tard).
   - *Aussitôt* (dès que, immédiatement) vs *Aussi tôt* (contraire de aussi tard).
3. **Accord avec adverbe de quantité** : Après *beaucoup, peu, trop, la plupart*, le verbe s'accorde toujours au **pluriel** (*« Beaucoup d'élèves sont arrivés »*).`;
  }

  // 4.10 COLLÈGE 4ÈME : PHYSIQUE-CHIMIE (PC)
  if (/(physique[- ]chimie|\bpc\b).*4[eè]me|4[eè]me.*(physique|chimie|\bpc\b)|sources? (primaires?|secondaires?).*lumi[èe]re|chambre noire.*st[ée]nop[ée]|phases? de la lune|eclipses?.*(soleil|lune)|d[ée]composition.*lumi[èe]re blanche|disque de newton|synth[èe]se (additive|soustractive)|bobine.*aimant|alternateur.*(rotor|stator)|tension alternative sinuso[ïi]dale.*(p[ée]riode|fr[ée]quence|ueff|umax)|danger.*secteur.*cie|disjoncteur diff[ée]rentiel.*30\s*ma|redressement.*pont de graetz|atomes? et ions?.*4[eè]me|tests?.*(soude|nitrate d'argent|chlorure de baryum)|cu2\+.*fe.*fe2\+|traitement.*eau.*sodeci|facture.*sodeci/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE PHYSIQUE-CHIMIE EN CLASSE DE 4ÈME (CÔTE D'IVOIRE)**

**I. OPTIQUE (PROPAGATION & LUMIÈRE)** :
1. **Sources et Récepteurs de Lumière** :
   - *Sources primaires* : Corps qui produisent et émettent la lumière qu'ils diffusent (Soleil, flamme, lampe allumée, ver luisant).
   - *Sources secondaires (objets diffusants)* : Corps qui renvoient une partie de la lumière reçue (Lune, miroir, mur éclairé, planète Vénus).
   - *Récepteurs de lumière* : Naturels (œil, chlorophylle des plantes vertes, peau humaine) ; Artificiels photochimiques (chlorure d'argent noircissant à la lumière) et photoélectriques (photorésistance LDR dont la résistance chute à la lumière).
2. **Propagation rectiligne de la lumière & Chambre noire** :
   - Dans un milieu homogène et transparent, la lumière se propage en ligne droite (expérience des 3 écrans perforés alignés).
   - *Chambre noire (sténopé)* : L'image obtenue sur l'écran translucide est **renversée** (haut en bas) et **inversée** (gauche à droite).
   - *Constantes* : Vitesse de la lumière dans le vide/air $c = 300\\,000\\text{ km/s} = 3 \\times 10^8\\text{ m/s}$. Année-lumière : $1\\text{ a.l} \\approx 9{,}46 \\times 10^{12}\\text{ km}$.
3. **Phases de la Lune & Éclipses** :
   - Cycle de lunaison : 29,5 jours. 8 phases (Nouvelle Lune, Premier Croissant, Premier Quartier, Lune Gibbeuse croissante, Pleine Lune, etc.).
   - *Éclipse de Soleil* : Alignement Soleil - Lune - Terre (à la Nouvelle Lune).
   - *Éclipse de Lune* : Alignement Soleil - Terre - Lune (à la Pleine Lune).
4. **Dispersion et Synthèse de la lumière blanche** :
   - *Décomposition (dispersion)* : Par prisme, réseau ou gouttes d'eau $\\rightarrow$ Spectre continu des 7 couleurs (Violet, Indigo, Bleu, Vert, Jaune, Orangé, Rouge).
   - *Synthèse additive* : Reconstitution de la lumière blanche par le disque de Newton ou mélange des 3 couleurs primaires fondamentales (Rouge, Vert, Bleu).

**II. COURANTS ET TENSIONS ALTERNATIFS** :
1. **Aimants et Induction électromagnétique** :
   - Mouvement relatif d'un aimant au voisinage d'une bobine de cuivre $\\rightarrow$ apparition d'une tension alternative induite aux bornes de la bobine.
   - *Alternateur* : Composé d'une partie tournante inductrice (Rotor = aimant ou électroaimant) et d'une partie fixe induite (Stator = bobines de cuivre). Présent dans les centrales hydroélectriques (Soubré, Taabo, Kossou) et thermiques (Azito).
2. **Caractéristiques de la Tension Alternative Sinusoïdale** :
   - *Période $T$* : Durée d'un motif élémentaire complet en secondes ($s$) : $T = X \\times b$ (avec $X$ = nombre de divisions horizontales, $b$ = sensibilité horizontale ou base de temps).
   - *Fréquence $N$ (ou $f$)* : Nombre de périodes par seconde en Hertz ($\\text{Hz}$) :
     $$N = \\frac{1}{T}$$
   - *Tension maximale de crête $U_{\\max}$* : $U_{\\max} = Y \\times S_v$ (avec $Y$ = déviation verticale maximale, $S_v$ = sensibilité verticale en $\\text{V/div}$).
   - *Tension efficace $U_{\\text{eff}}$* : Mesurée directement par un voltmètre en mode AC :
     $$U_{\\text{eff}} = \\frac{U_{\\max}}{\\sqrt{2}} \\approx \\frac{U_{\\max}}{1{,}41} \\quad \\Longleftrightarrow \\quad U_{\\max} \\approx 1{,}41 \\times U_{\\text{eff}}$$
3. **Sécurité et Dangers du courant du secteur CIE (220 V / 50 Hz)** :
   - *Prise secteur* : Borne Phase (conducteur actif dangereux), Borne Neutre ($0\\text{ V}$), Borne de Terre.
   - *Tension CIE* : $U_{\\text{eff}} = 220\\text{ V}$, $N = 50\\text{ Hz}$, $U_{\\max} = 220 \\times 1{,}414 \\approx 311\\text{ V}$.
   - *Dangers* : Électrisation (passage du courant causant brûlures/tétanisation) et Électrocution (décès de la victime).
   - *Dispositifs de protection* : Disjoncteur différentiel $30\\text{ mA}$ (détecte les fuites de courant vers la terre), prise de terre et fusibles calibrés sur la phase.
4. **Transformation, Redressement et Lissage** :
   - *Transformateur abaisseur* : Abaisse la tension alternative (ex : de $220\\text{ V}$ à $12\\text{ V}$) sans changer sa fréquence.
   - *Diode à jonction* : Ne laisse passer le courant que dans le sens passant (anode vers cathode).
   - *Pont de Graetz (4 diodes)* : Réalise un redressement double alternance.
   - *Condensateur de lissage* : Branché en dérivation, il stocke et restitue l'énergie pour fournir une tension quasi-continue aux appareils électroniques.

**III. CHIMIE : LES IONS ET TRAITEMENT DE L'EAU** :
1. **Constitution de l'Atome et Formation des Ions** :
   - Atome : Électriquement neutre, constitué d'un noyau central positif ($+Ze$) et d'électrons périphériques négatifs ($-Ze$).
   - *Cation (ion positif)* : Atome ayant perdu un ou plusieurs électrons ($Cu^{2+}, Fe^{2+}, Fe^{3+}, Zn^{2+}, Al^{3+}, Na^+, H^+$).
   - *Anion (ion négatif)* : Atome ou groupement ayant gagné un ou plusieurs électrons ($Cl^-, SO_4^{2-}, OH^-, NO_3^-$).
2. **Tests de Caractérisation des Ions en Solution** :
   - *Par la soude ($NaOH$)* :
     * $Cu^{2+}$ : Précipité bleu gélatineux d'hydroxyde de cuivre $Cu(OH)_2$.
     * $Fe^{2+}$ : Précipité vert d'hydroxyde de fer II $Fe(OH)_2$.
     * $Fe^{3+}$ : Précipité rouille d'hydroxyde de fer III $Fe(OH)_3$.
     * $Zn^{2+}$ et $Al^{3+}$ : Précipités blancs $Zn(OH)_2$ et $Al(OH)_3$.
   - *Ion chlorure ($Cl^-$)* : Ajout de nitrate d'argent ($Ag^+ + NO_3^-$) $\\rightarrow$ Précipité blanc de chlorure d'argent ($AgCl$) qui noircit à la lumière.
   - *Ion sulfate ($SO_4^{2-}$)* : Ajout de chlorure de baryum ($Ba^{2+} + 2Cl^-$) $\\rightarrow$ Précipité blanc de sulfate de baryum ($BaSO_4$) insoluble dans l'acide.
3. **Réaction d'oxydoréduction Cuivre / Fer** :
   - Attaque du cuivre par l'acide nitrique : Formation d'une solution bleue d'ions $Cu^{2+}$ et dégagement d'un gaz roux toxique ($NO_2$).
   - Dépôt de cuivre métallique sur clou en fer immergé dans du sulfate de cuivre :
     $$Fe + Cu^{2+} \\longrightarrow Fe^{2+} + Cu$$
4. **Traitement de l'Eau Potable (SODECI) & Qualité** :
   - Étapes en usine SODECI : Dégrillage $\\rightarrow$ Floculation/Coagulation au sulfate d'alumine $\\rightarrow$ Décantation $\\rightarrow$ Filtration sur lit de sable $\\rightarrow$ Désinfection (Chloration au chlore gazeux ou eau de Javel) $\\rightarrow$ Neutralisation $\\rightarrow$ Stockage en château d'eau.
   - *Facture SODECI* : $\\text{Volume consommé } (m^3) = \\text{Nouvel index} - \\text{Ancien index}$. $1\\text{ m}^3 = 1\\,000\\text{ litres}$.
   - *Dureté de l'eau* : Due à la présence excessive d'ions calcium $Ca^{2+}$ et magnésium $Mg^{2+}$ entartrant les canalisations et réduisant le moussage du savon.`;
  }

  // 4.11 COLLÈGE 3ÈME : MATHÉMATIQUES (PROGRAMME OFFICIEL MENA / ÉCOLE NUMÉRIQUE)
  if (/math.*3[eè]me|3[eè]me.*math|calcul litt[ée]ral.*3[eè]me|thales.*triangle|racines? carr[ée]es?.*3[eè]me|triangle rectangle.*trigonom[ée]trie|angles? inscrits?|calcul num[ée]rique.*intervalles|coordonn[ée]es? d'un vecteur|vecteurs?.*3[eè]me|equations? de droites?|statistique.*3[eè]me|classe modale.*m[ée]diane|diagramme circulaire.*360|applications? affines?|applications? lin[ée]aires?|pyramides? et c[ôo]nes?|section.*(pyramide|c[ôo]ne).*k|angle de d[ée]veloppement/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE MATHÉMATIQUES EN CLASSE DE 3ÈME (CÔTE D'IVOIRE - ÉCOLE NUMÉRIQUE)**

**I. CALCULS ALGÉBRIQUES & NUMÉRIQUES (3ÈME)** :
1. **Calcul Littéral & Fractions Rationnelles (Leçon 1)** :
   - *Quotients* : a/b = c/d <=> a*d = b*c (b ≠ 0, d ≠ 0).
   - *Puissances entières relatives* : a^(-n) = 1/a^n, a^n * a^m = a^(n+m), (a^m)^n = a^(mn), a^m / a^n = a^(m-n), (ab)^n = a^n * b^n.
   - *3 Égalités remarquables* : (a+b)² = a² + 2ab + b² ; (a-b)² = a² - 2ab + b² ; (a+b)(a-b) = a² - b².
   - *Règle du produit nul* : A * B = 0 <=> A = 0 ou B = 0.
   - *Équations de même carré* : a² = b² <=> a = b ou a = -b.
   - *Fractions rationnelles A/B* : Condition d'existence obligatoire B ≠ 0 avant simplification par factorisation.
2. **Racines Carrées (Leçon 3)** :
   - Pour tout a >= 0, √a >= 0 et (√a)² = a.
   - Propriété fondamentale : pour tout réel a dans R, √(a²) = |a|.
   - Opérations : √(ab) = √a * √b et √(a/b) = √a / √b (b > 0). Attention : √(a+b) ≠ √a + √b.
   - Élimination du radical au dénominateur : a / √b = (a√b) / b et par l'expression conjuguée a / (b + c√d) = a(b - c√d) / (b² - c²*d).
3. **Calcul Numérique & Intervalles (Leçon 5)** :
   - Intervalles [a; b], ]a; b[, [a; b[, ]a; b], [a; →[, ]←; b].
   - Amplitude = |a - b| = b - a ; Centre = (a+b)/2.
   - Réunion A U B (ou) et Intersection A inter B (et).
   - Encadrements : Pour la différence, a - b = a + (-b) (inverser l'encadrement de b puis additionner). Pour le quotient, a / b = a * (1/b).
4. **Équations et Inéquations dans R & R x R (Leçons 8 & 12)** :
   - x² = a : deux solutions ±√a si a > 0, 0 si a = 0, impossible dans R si a < 0.
   - Inéquations : la multiplication ou division par un nombre strictement négatif inverse le sens de l'inégalité.
   - Systèmes dans R x R : Résolution par substitution, combinaison linéaire, ou graphique (point d'intersection des deux droites).
   - Inéquations à deux inconnues ax + by + c > 0 : demi-plan solution déterminé par point test (généralement l'origine O(0; 0)).
5. **Applications Affines et Linéaires (Leçon 13)** :
   - *Affine* : f(x) = ax + b (droite d'équation y = ax + b, pente ou coefficient directeur a, ordonnée à l'origine b). Pente a = (f(x2) - f(x1)) / (x2 - x1).
   - *Linéaire* : f(x) = ax (passe toujours par l'origine O(0; 0)), traduit une situation de proportionnalité.
   - *Propriétés de linéarité* : f(m+n) = f(m) + f(n) et f(k*m) = k * f(m).
   - *Sens de variation* : a > 0 croissante (droite montante), a < 0 décroissante (droite descendante), a = 0 constante.

**II. GÉOMÉTRIE DU PLAN ET DE L'ESPACE (3ÈME)** :
1. **Propriétés de Thalès dans le triangle (Leçon 2)** :
   - *Directe & conséquence* : Si (MN) // (BC) dans ABC avec M sur [AB] et N sur [AC], alors AM/AB = AN/AC = MN/BC.
   - *Réciproque* : Si AM/AB = AN/AC et les points A, M, B d'une part et A, N, C d'autre part sont alignés dans le même ordre, alors (MN) // (BC).
   - *Partage d'un segment* [AB] en n parts égales à la règle non graduée et au compas par demi-droite graduée et faisceau de parallèles.
2. **Triangle Rectangle & Trigonométrie (Leçon 4)** :
   - *Pythagore* : BC² = AB² + AC² <=> ABC rectangle en A.
   - *Propriété métrique de l'aire* : AB * AC = BH * BC (H pied de la hauteur issue du sommet droit A).
   - *Trigonométrie* : sin = Côté Opposé / Hypoténuse, cos = Côté Adjacent / Hypoténuse, tan = Côté Opposé / Côté Adjacent = sin / cos.
   - sin²(a) + cos²(a) = 1 et pour deux angles complémentaires (A + B = 90°) : sin(A) = cos(B) et cos(A) = sin(B).
3. **Angles Inscrits (Leçon 6)** :
   - L'angle aigu inscrit a pour mesure la moitié de l'angle au centre associé : mes(AMB) = (1/2) * mes(AOB).
   - Deux angles inscrits interceptant le même arc ont la même mesure.
   - Triangle inscrit ayant un diamètre pour côté => triangle rectangle dont ce diamètre est l'hypoténuse.
4. **Vecteurs & Coordonnées (Leçons 7, 9 & 10)** :
   - AB + BC = AC (Relation de Chasles) ; AB - CD = AB + DC.
   - Coordonnées : AB(xB - xA ; yB - yA), milieu K((xA + xB)/2 ; (yA + yB)/2), distance en repère orthonormé AB = √((xB - xA)² + (yB - yA)²).
   - *Colinéarité* : x*y' - x'*y = 0 <=> vecteurs u et v sont colinéaires (droites parallèles).
   - *Orthogonalité* : x*x' + y*y' = 0 <=> vecteurs u et v sont orthogonaux (droites perpendiculaires dans un repère orthonormé).
   - *Droites* : Équation réduite y = ax + b, coefficient directeur a = (yB - yA) / (xB - xA). Droites parallèles <=> a = a'. Droites perpendiculaires <=> a * a' = -1.
5. **Pyramides et Cônes de Révolution (Leçon 14)** :
   - *Pyramide régulière* : Aire latérale = (Périmètre base * apothème) / 2, Volume = (Aire base * hauteur) / 3, Aire totale = Aire latérale + Aire base.
   - *Cône de révolution* : Génératrice g = √(h² + r²), Aire latérale = π * r * g, Volume = (π * r² * h) / 3, angle de développement du patron α = 360° * (r / g).
   - *Section par un plan parallèle à la base* (rapport de réduction k = h' / h) :
     * Longueurs : L' = k * L
     * Aires : Aire' = k² * Aire
     * Volumes : Volume' = k³ * Volume
     * Tronc : Volume(tronc) = Volume(grand) - Volume(petit) = Volume(grand) * (1 - k³).

**III. STATISTIQUE (LEÇON 11)** :
- *Mode / Classe modale* : modalité ou classe ayant le plus grand effectif.
- *Moyenne pondérée* : M = (somme des n_i * x_i) / N (ou somme des n_i * c_i / N pour classes de centre c_i).
- *Médiane* : partage la série ordonnée en deux groupes de même effectif (50%). Si N est impair : terme de rang (N+1)/2 ; si N est pair : demi-somme des termes de rangs N/2 et N/2 + 1.
- *Diagramme circulaire* : secteur angulaire α = (n_i / N) * 360°.
- *Polygone des effectifs cumulés croissants (PECC)* et lecture graphique de la médiane à l'ordonnée N/2.`;
  }

  // 4.12 COLLÈGE 3ÈME : FRANÇAIS (PROGRAMME OFFICIEL DU BEPC - 4 RUBRIQUES, 1 DIPLÔME)
  if (/fran[çc]ais.*3[eè]me|3[eè]me.*fran[çc]ais|bepc.*fran[çc]ais|texte argumentatif.*(3[eè]me|bepc)|r[ée]sum[ée] de texte.*(3[eè]me|bepc)|contraction de texte|fait divers.*(3[eè]me|bepc)|article de journal.*(3[eè]me|bepc)|dict[ée]e[- ]questions|maniement de la langue.*(3[eè]me|bepc)|[ée]tayer.*th[èe]se|r[ée]futer.*th[èe]se|5w.*journal|pronominalisation.*(3[eè]me|bepc)|voix passive.*(3[eè]me|bepc)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE FRANÇAIS EN CLASSE DE 3ÈME (PRÉPARATION AU BEPC - « 4 RUBRIQUES, 1 DIPLÔME »)**

**I. LE TEXTE ARGUMENTATIF / SUJET DE RÉFLEXION (RUBRIQUE 1)** :
1. **Visée & Outils linguistiques** :
   - *Visée* : Défendre ou réfuter une thèse sur un thème donné pour convaincre (par la logique) ou persuader (par les émotions).
   - *Outils* : Lexique thématique mélioratif ou péjoratif, connecteurs logiques (d'abord, ensuite, en effet, par conséquent, cependant, en guise d'exemple), modalisateurs (sans doute, manifestement, il est incontestable que).
2. **Structure canonique du devoir** :
   - *Introduction (3 étapes obligatoires)* :
     1. La Généralité / Amorce : définition, constat sociétal ou remarque générale sur le thème.
     2. L'Insertion ou Reformulation du sujet : énoncé fidèle de la citation ou de la thèse à traiter.
     3. L'Annonce du plan : précision de la démarche choisie (étayer ou réfuter).
   - *Développement (2 à 3 paragraphes argumentés)* :
     * Chaque paragraphe applique la cellule argumentative : **Thèse/Connecteur + Argument + Explication rationnelle + Exemple précis et concret** (références à la société ivoirienne ou aux œuvres littéraires : *Les Frasques d'Ebinto* d'Amadou Koné, *La voix de ma rue* de Sylvain Kéan Zoh, *Rebelle* de Fatou Kéita).
   - *Conclusion (2 étapes)* :
     1. Bilan / Synthèse des arguments développés.
     2. Ouverture : élargissement vers un débat plus vaste sans hors-sujet.
3. **Étayer vs Réfuter une thèse** :
   - *Étayer* : Apporter des arguments favorables pour soutenir, prouver et fortifier la thèse de l'auteur.
   - *Réfuter* : Développer la contre-thèse opposée pour démolir les arguments adverses et prouver l'insuffisance ou l'erreur du point de vue.

**II. LE RÉSUMÉ DE TEXTE ARGUMENTATIF / CONTRACTION DE TEXTE (RUBRIQUE 2)** :
1. **Règles d'or absolues au BEPC** :
   - *Réduction au tiers (1/3) ou au quart (1/4)* avec une tolérance stricte de **±10%** (ex: pour 279 mots au 1/3 = 93 mots, fourchette admise : 84 à 102 mots).
   - *Neutralité totale* : Pas de jugement personnel, interdiction absolue des formules d'observateur (« l'auteur dit que », « selon le texte »).
   - *Respect du système d'énonciation* : Conserver les mêmes personnes grammaticales que l'auteur original ("je", "nous" ou "il").
   - *Reformulation personnelle (« génie créateur »)* : Bannir le copié-collé et les citations textuelles ; condenser les idées maîtresses avec ses propres mots.
   - *Comptage précis des mots* : Décompte mot à mot obligatoire indiqué en fin de copie.

**III. L'ARTICLE DE JOURNAL OU LE FAIT DIVERS (RUBRIQUE 3)** :
1. **Silhouette graphique** :
   - Titre accrocheur et court (souvent nominal ou exclamatif), sous-titre explicatif, corps de texte structuré, et signature obligatoire à droite : « **Le rédacteur** ».
2. **Grille d'investigation des 5W + 1H + Suites** :
   - *Qui ?* (protagonistes/victimes) | *Quoi ?* (accident, intoxication, cambriolage, exploit) | *Quand ?* (date et heure précises) | *Où ?* (lieu exact) | *Comment ?* (déroulement chronologique) | *Pourquoi ?* (causes premières) | *Suites ?* (secours, CHR, morgue, enquête de police, appel civique).
3. **Outils stylistiques journalistiques** :
   - Attaque percutante (1ère phrase résumant l'événement), style indirect pour les témoignages, voix passive fréquente (« les blessés ont été évacués »), verbes au passé composé, imparfait et plus-que-parfait. Refus absolu de la vindicte populaire.

**IV. LA DICTÉE-QUESTIONS & MANIEMENT DE LA LANGUE (RUBRIQUE 4)** :
1. **Accords indispensables du participe passé** :
   - Avec *ÊTRE* : Accord systématique en genre et en nombre avec le Sujet.
   - Avec *AVOIR* : S'accorde uniquement avec le **COD antéposé** (placé avant le verbe). Ex: « La vie qu'il avait **eue** » ; « Les terres qu'elle avait **inondées** ». Invariable si le COD est après ou absent.
2. **Voix active <-> Voix passive** :
   - Le COD actif devient sujet passif. Le verbe actif se transforme en : *Auxiliaire ÊTRE au même temps que le verbe actif + Participe passé accordé + "par" + Complément d'agent*.
   - Ex: Passé simple : « Le maître punit l'élève » -> « L'élève fut puni par le maître ». Plus-que-parfait : « Le féticheur avait jeté le sort » -> « Le sort avait été jeté par le féticheur ».
3. **Pronominalisation** :
   - COD direct : *le, la, les*. COI de personne avec "à" : *lui, leur*. Complément introduit par "de" (quantité/origine) : *en*. Complément de lieu ou COI avec "à/dans/sur" (chose) : *y*.
   - Ex: « La rivière était sortie de son lit » -> « La rivière en était sortie ».
4. **Subordination & Coordination des rapports logiques** :
   - *Cause* : par coordination (*car, en effet*) ; par subordination (*parce que, puisque, comme, vu que*).
   - *Conséquence* : par coordination (*donc, par conséquent*) ; par subordination (*si bien que, de sorte que, tellement... que*).
   - *But* : *afin que, pour que (+ subjonctif)* ; *pour, afin de (+ infinitif)*.
   - *Opposition / Concession* : par coordination (*mais, or, cependant, pourtant*) ; par subordination (*bien que, quoique + subjonctif*). Ex: « Quoiqu'elle ait tous ces biens... ».`;
  }

  // 4.13 COLLÈGE 3ÈME : SVT (PROGRAMME OFFICIEL DU BEPC - NUTRITION, IMMUNITÉ/SANG, SOLS)
  if (/(svt|biologie).*3[eè]me|3[eè]me.*(svt|biologie)|bepc.*svt|kwashiorkor|marasme.*nutritionnel|ration alimentaire.*(3[eè]me|bepc)|r[ée]action.*(xanthoprot[ée]ique|biuret)|amylase.*salivaire|ptyaline|chyme.*chyle|villosité.*intestinale|chylif[èe]re|frottis sanguin.*3[eè]me|agglutinog[èe]ne|agglutinine|transfusion.*(bepc|3[eè]me)|facteur rh[ée]sus|r[ée]volution cardiaque|systole.*diastole|ath[ée]roscl[ée]rose|infarctus.*myocarde|infection.*vih|transcriptase inverse|lymphocyte.*t4|s[ée]ropositif.*(3[eè]me|bepc)|sarcome.*kaposi|sol.*ferralitique|sol.*ferrugineux|sol.*hydromorphe|appareil.*berl[èe]ze|d[ée]gradation.*sol.*(3[eè]me|bepc)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE SVT EN CLASSE DE 3ÈME (PRÉPARATION AU BEPC - RÉPERTOIRE OFFICIEL ÉCOLE NUMÉRIQUE)**

**I. LA NUTRITION CHEZ L'HOMME (ALIMENTS, DIGESTION, SANG & CIRCULATION)** :
1. **Les Aliments et l'Homme** :
   - *Caractérisation des aliments simples* :
     * Chlorures : Nitrate d'argent ($AgNO_3$) $\\to$ précipité blanc qui noircit à la lumière.
     * Calcium : Oxalate d'ammonium $\\to$ précipité blanc.
     * Sucres réducteurs (glucose, lactose) : Liqueur de Fehling **à chaud** $\\to$ précipité rouge brique.
     * Amidon : Eau iodée $\\to$ coloration bleu-violacée.
     * Protides : Réaction xanthoprotéique (acide nitrique chaud $\\to$ jaune, puis ammoniaque $\\to$ jaune-orangé) ; Réaction de Biuret (sulfate de cuivre + soude $\\to$ violet) ; Coagulation à chaud, à l'acide ou à l'alcool.
     * Lipides : Frottement sur papier $\\to$ tache translucide qui ne sèche pas à la chaleur ; solubles dans les solvants organiques (éther, acétone).
   - *Aliments simples vs composés* : Le pain et le lait sont des aliments composés (renfermant plusieurs aliments simples).
   - *Rôles physiologiques* :
     * Énergétiques : Glucides ($17\\text{ kJ/g}$ ou $4\\text{ kcal/g}$), Lipides ($38\\text{ kJ/g}$ ou $9\\text{ kcal/g}$).
     * Plastiques / de construction : Protides ($17\\text{ kJ/g}$ ou $4\\text{ kcal/g}$), calcium, phosphore.
     * Fonctionnels et protecteurs : Vitamines ($A, B, C, D, E, K$), eau et sels minéraux.
   - *Maladies de carence* :
     * **Kwashiorkor** : Carence grave en protides chez le jeune sevré. Symptômes : œdèmes (ventre et visage enflés), apathie (« enfant pleurnichard »), cheveux roux cassants, plaies cutanées.
     * **Marasme** : Carence totale énergétique et protidique. Symptômes : fonte musculaire extrême, aspect de « vieillard en miniature », yeux enfoncés, peau ridée sans œdème.

2. **La Digestion et l'Absorption intestinale** :
   - *Action mécanique* : Mastication buccale (dents) $\\to$ bol alimentaire $\\to$ déglutition $\\to$ malaxation stomacale $\\to$ chyme $\\to$ brassage intestinal $\\to$ chyle.
   - *Action chimique des enzymes* (biocatalyseurs actifs à $37^\\circ\\text{C}$, détruits par ébullition) :
     * Bouche : Amylase salivaire (ptyaline) hydrolyse l'amidon cuit en maltose.
     * Estomac : Suc gastrique ($HCl$ + pepsine) hydrolyse les protides en polypeptides.
     * Intestin grêle : Bile du foie (émulsionne les lipides sans enzyme), suc pancréatique (amylase, trypsine, lipase), suc intestinal (maltase, protéases, lipases).
   - *Nutriments finaux* : Glucides $\\to$ **Glucose** ; Protides $\\to$ **Acides aminés** ; Lipides $\\to$ **Acides gras + Glycérol**. Eau, minéraux et vitamines ne sont pas digérés.
   - *Absorption intestinale par les villosités* :
     * Voie sanguine (capillaires) : Eau, sels minéraux, glucose, acides aminés $\\to$ veine porte $\\to$ foie.
     * Voie lymphatique (chylifère central) : Acides gras, glycérol, vitamines liposolubles $\\to$ lymphe.

3. **Le Sang, la Coagulation et la Transfusion** :
   - *Constituants du sang* :
     * Hématies (globules rouges) : Disques biconcaves sans noyau, contiennent l'hémoglobine transportant $O_2$ et $CO_2$.
     * Leucocytes (globules blancs) : Monocytes (noyau réniforme en haricot), Lymphocytes (petit, gros noyau rond), Polynucléaires (noyau lobé).
     * Plaquettes sanguines (thrombocytes) : Fragments cellulaires intervenant dans la coagulation.
     * Plasma : Liquide jaune clair transportant nutriments, déchets et fibrinogène.
   - *Sang sédimenté vs Coagulé* :
     * Sang sédimenté (avec anticoagulant) = Éléments figurés + Plasma.
     * Sang coagulé = Caillot (cellules + fibrine) + Sérum (plasma sans fibrinogène).
     * Mécanisme de coagulation : Au contact de l'air, Plaquettes + Calcium + Vitamine K transforment le fibrinogène en réseau de fibrine formant le caillot obturateur.
   - *Groupes sanguins & Transfusion* :
     * Système ABO : Agglutinogènes A et B sur hématies, Agglutinines anti-A et anti-B dans le sérum. Groupe O = donneur universel (aucun agglutinogène) ; Groupe AB = receveur universel (aucune agglutinine).
     * Facteur Rhésus : Antigène D présent ($Rh^+$) ou absent ($Rh^-$). $Rh^-$ peut donner à $Rh^+$, mais $Rh^+$ ne peut jamais donner à $Rh^-$.
     * Règle d'or : Ne jamais injecter d'hématies dont l'antigène est détruit par les anticorps du receveur.

4. **La Circulation Sanguine et le Cœur** :
   - *Cœur* : 4 cavités (OD, VD, OG, VG), valvules auriculo-ventriculaires et sigmoïdes.
   - *Révolution cardiaque ($0{,}8\\text{ s}$)* : Systole auriculaire ($0{,}1\\text{ s}$) $\\to$ Systole ventriculaire ($0{,}3\\text{ s}$) $\\to$ Diastole générale ($0{,}4\\text{ s}$).
   - *Double circulation* :
     * Petite (pulmonaire) : VD $\\to$ Artère pulmonaire $\\to$ Poumons (hématose) $\\to$ Veines pulmonaires $\\to$ OG.
     * Grande (générale) : VG $\\to$ Artère aorte $\\to$ Organes $\\to$ Veines caves $\\to$ OD.
   - *Maladies cardio-vasculaires* : Athérosclérose (plaques de cholestérol), hypertension artérielle, infarctus du myocarde, AVC.

**II. REPRODUCTION ET INFECTION AU VIH / SIDA** :
- *Cycle d'infection du VIH (5 étapes sur lymphocyte T4)* :
  1. Fixation sur le lymphocyte T4.
  2. Injection du matériel génétique (ARN).
  3. Transformation par la transcriptase inverse (ARN viral $\\to$ ADN proviral).
  4. Intégration de l'ADN viral dans le noyau du lymphocyte T4.
  5. Multiplication virale et bourgeonnement / destruction du lymphocyte T4.
- *Stades* : Séropositivité asymptomatique (porteur sain transmetteur) $\\to$ Stade SIDA déclaré (effondrement des T4 et prolifération de maladies opportunistes : tuberculose, sarcome de Kaposi, candidoses).
- *Modes de transmission* : Voie sexuelle (rapports non protégés), voie sanguine (seringues, lames, transfusions non sécurisées), voie mère-enfant (grossesse, accouchement, allaitement).
- *Prévention* : Règle ABC (Abstinence, Bonne fidélité, Condom/préservatif), dépistage volontaire, traitement ARV / PTME.

**III. LES SOLS : PROPRIÉTÉS, RÉPARTITION ET PROTECTION** :
- *Propriétés physiques* : Perméabilité (vitesse d'infiltration), Porosité (\\% d'espaces vides), Capacité de rétention en eau, Capacité en air.
- *Types de sols en Côte d'Ivoire* :
  * Sols ferralitiques (Sud forestier, profonds, lessivés) : cacao, café, palmier à huile, hévéa (racines longues pivotantes).
  * Sols ferrugineux (Centre/Nord savane, moins profonds) : coton, maïs, arachide, igname (cycle court, racines courtes).
  * Sols hydromorphes (bas-fonds, alluvions) : riz irrigué, cultures maraîchères.
- *Dégradation et protection* :
  * Agents : Eau de pluie et vent. Facteurs : pente, absence de végétation, feux de brousse, brûlis.
  * Protection : Reboisement, engazonnement, paillage, terrasses en courbes de niveau, haies brise-vent, jachère, assolement (rotation céréales/légumineuses), amendements organiques.`;
  }

  // 4.14 COLLÈGE 3ÈME : PHYSIQUE-CHIMIE (PROGRAMME OFFICIEL DU BEPC)
  if (/(physique|chimie).*3[eè]me|3[eè]me.*(physique|chimie)|bepc.*(physique|chimie)|masse et poids.*(3[eè]me|bepc)|poussee.*archimede.*(3[eè]me|bepc)|poids apparent|flottaison.*(3[eè]me|bepc)|travail.*puissance.*(3[eè]me|bepc)|[ée]nergie cin[ée]tique.*(3[eè]me|bepc)|lentille.*convergente.*(3[eè]me|bepc)|vergence.*dioptrie|d[ée]fauts.*oeil.*(3[eè]me|bepc)|myopie.*hyperm[ée]tropie|conducteur ohmique.*(3[eè]me|bepc)|loi d'ohm.*3[eè]me|diviseur de tension|code des couleurs.*(3[eè]me|bepc)|[ée]lectrolyse de l'eau.*(3[eè]me|bepc)|alcanes.*(3[eè]me|bepc)|combustion.*butane.*(3[eè]me|bepc)|oxyde magn[ée]tique.*fer|oxydor[ée]duction.*(3[eè]me|bepc)|aluminothermie/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE PHYSIQUE-CHIMIE EN CLASSE DE 3ÈME (PRÉPARATION AU BEPC - RÉPERTOIRE OFFICIEL ÉCOLE NUMÉRIQUE)**

**I. MÉCANIQUE** :
1. **Masse et Poids d'un corps** :
   - *Masse $m$* : Quantité de matière invariable, mesurée avec une balance, unité SI : kilogramme ($kg$).
   - *Masse volumique* : $a = \\frac{m}{V}$ ($1\\text{ g/cm}^3 = 1\\text{ kg/dm}^3 = 1\\,000\\text{ kg/m}^3$). Densité : $d = \\frac{a}{a_{\\text{eau}}}$.
   - *Poids $P$* : Force d'attraction de la Terre sur un corps, mesurée au dynamomètre en newtons ($N$).
   - *Relation fondamentale* : $P = m \\times g$ avec $g$ l'intensité de la pesanteur ($g_{\\text{Abidjan}} = 9{,}78\\text{ N/kg}$, $g_{\\text{Lune}} = 1{,}6\\text{ N/kg}$).
   - *Courbe $P = f(m)$* : Droite passant par l'origine, pente $g = \\frac{\\Delta P}{\\Delta m}$.

2. **Les Forces et Poussée d'Archimède** :
   - *Force* : Action mécanique capable de déplacer, modifier le mouvement, déformer ou équilibrer un corps. 4 caractéristiques : point d'application, direction, sens, valeur ($N$).
   - *Poussée d'Archimède $\\vec{P}_A$* : Force verticale dirigée du bas vers le haut exercée par un liquide :
     $$P_A = P_{\\text{réel}} - P'_{\\text{apparent}} = a_{\\text{liq}} \\times V_{\\text{immergé}} \\times g$$
     Elle s'applique au centre de poussée (centre de gravité du fluide déplacé).

3. **Équilibre d'un solide sous 2 forces & Flottaison** :
   - *Conditions d'équilibre* : Deux forces $\\vec{F}_1$ et $\\vec{F}_2$ ont la même droite d'action, la même valeur ($F_1 = F_2$) et des sens opposés :
     $$\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$$
   - *Flottaison* : Un corps flotte si son poids est équilibré par la poussée d'Archimède : $P = P_A$. Condition : $a_{\\text{corps}} < a_{\\text{liquide}}$ ou densité $d < 1$.

4. **Travail et Puissance mécaniques** :
   - *Travail* : $W = F \\times L$ (en Joules, $J$). Travail moteur si force et mouvement de même sens ($W > 0$), travail résistant si de sens opposés ($W < 0$).
   - *Travail du poids* : $W(\\vec{P}) = m \\times g \\times h$ (moteur en descente, résistant en montée, nul sur l'horizontale).
   - *Puissance* : $\\mathcal{P} = \\frac{W}{t} = F \\times v$ (en Watts, $W$). Équivalence : $1\\text{ ch} = 736\\text{ W}$, $1\\text{ m/s} = 3{,}6\\text{ km/h}$.

5. **Énergie mécanique** :
   - *Énergie cinétique* : $E_c = \\frac{1}{2} m v^2$ ($J$).
   - *Énergie potentielle de pesanteur* : $E_p = m \\times g \\times h$ ($J$).
   - *Énergie mécanique* : $E_m = E_c + E_p$.
   - *Conservation* : Sans frottements, $E_m = \\text{constante}$. En chute libre : $E_p \\to E_c$ et $v = \\sqrt{2 g h}$.

**II. OPTIQUE** :
1. **Les Lentilles minces** :
   - *Types* : Convergentes (bords minces, $C > 0$, effet loupe) vs Divergentes (bords épais, $C < 0$).
   - *Grandeurs* : Distance focale $f = OF'$ (en mètres), Vergence $C = \\frac{1}{f}$ (en dioptries $\\delta$).
   - *Lentilles accolées* : $C = C_1 + C_2$.
   - *Rayons particuliers* : Par $O$ non dévié ; parallèle émerge par $F'$ ; par $F$ émerge parallèle.
   - *Grandissement* : $G = \\frac{A'B'}{AB} = \\frac{OA'}{OA}$.
   - *Appareil photographique* : Objectif (lentille convergente), diaphragme (iris), pellicule/capteur (écran d'image réelle renversée).

2. **Défauts de l'œil et corrections** :
   - *Œil normal (emmétrope)* : Cristallin (lentille convergente) projette l'image nette directement sur la rétine (écran).
   - *Myopie* : Œil trop convergent / trop long $\\to$ Image formée **en avant** de la rétine $\\to$ vision floue de loin $\\to$ Corrigée par une **lentille divergente** ($C < 0$).
   - *Hypermétropie* : Œil pas assez convergent / trop court $\\to$ Image formée **en arrière** de la rétine $\\to$ vision floue de près $\\to$ Corrigée par une **lentille convergente** ($C > 0$).

**III. ÉLECTRICITÉ : LE CONDUCTEUR OHMIQUE** :
1. *Rôle & Loi d'Ohm* : Dipôle passif diminuant le courant, caractérisé par sa résistance $R$ en ohms ($\\Omega$) :
   $$U = R \\times I \\quad \\Longleftrightarrow \\quad R = \\frac{U}{I} \\quad \\Longleftrightarrow \\quad I = \\frac{U}{R}$$
   Puissance dissipée par effet Joule : $P = R \\times I^2$.
2. *Détermination de $R$* :
   - Graphique : $R = \\frac{\\Delta U}{\\Delta I}$ (pente de la droite $U = f(I)$ passant par l'origine).
   - Ohmmètre : Mesure directe hors circuit.
   - Code des couleurs : « **N**e **M**anger **R**ien **O**u **J**eûner, **V**oilà **B**ien **V**otre **G**rosse **B**êtise » ($0$ à $9$). $R = ab \\times 10^c\\text{ }\\Omega$.
3. *Associations* :
   - Série : $R_{\\text{éq}} = R_1 + R_2$.
   - Parallèle : $R_{\\text{éq}} = \\frac{R_1 \\times R_2}{R_1 + R_2}$.
   - Diviseur de tension : $U_s = \\frac{R_2}{R_1 + R_2} \\times U_e$.

**IV. CHIMIE : RÉACTIONS CHIMIQUES** :
1. **Électrolyse et Synthèse de l'eau** :
   - *Électrolyse* : $2\\,\\text{H}_2\\text{O} \\longrightarrow 2\\,\\text{H}_2 + \\text{O}_2$. Cathode ($-$) = Dihydrogène $H_2$ (détonation à la flamme) ; Anode ($+$) = Dioxygène $O_2$ (rallume une bûchette). Relation : $V(H_2) = 2 \\times V(O_2)$.
   - *Synthèse* : $2\\,\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\,\\text{H}_2\\text{O}$ (détonation violente + buée d'eau).
2. **Les Alcanes ($C_n H_{2n+2}$)** :
   - Méthane $\\text{CH}_4$, Éthane $\\text{C}_2\\text{H}_6$, Propane $\\text{C}_3\\text{H}_8$, Butane $\\text{C}_4\\text{H}_{10}$ (isomères : $n$-butane linéaire et isobutane ramifié).
   - *Combustion complète* (excès d'air, flamme bleue) :
     $$2\\,\\text{C}_4\\text{H}_{10} + 13\\,\\text{O}_2 \\longrightarrow 8\\,\\text{CO}_2 + 10\\,\\text{H}_2\\text{O}$$
     Rapport des volumes : $\\frac{V(\\text{C}_4\\text{H}_{10})}{2} = \\frac{V(\\text{O}_2)}{13} = \\frac{V(\\text{CO}_2)}{8}$.
   - *Combustion incomplète* (manque d'air, flamme jaune) : Produit du noir de carbone (suie sur les casseroles) et du monoxyde de carbone ($CO$, gaz toxique asphyxiant mortel).
3. **Oxydation et Réduction des oxydes** :
   - *Oxydation vive* :
     * Fer : $3\\,\\text{Fe} + 2\\,\\text{O}_2 \\longrightarrow \\text{Fe}_3\\text{O}_4$ (oxyde magnétique attiré par l'aimant).
     * Cuivre : $2\\,\\text{Cu} + \\text{O}_2 \\longrightarrow 2\\,\\text{CuO}$ (oxyde de cuivre II noir).
     * Soufre : $\\text{S} + \\text{O}_2 \\longrightarrow \\text{SO}_2$ (gaz suffocant décolorant le permanganate).
     * Carbone : $\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2$.
   - *Oxydation lente (Rouille en milieu humide)* :
     $$4\\,\\text{Fe} + 3\\,\\text{O}_2 \\longrightarrow 2\\,\\text{Fe}_2\\text{O}_3$$
     (Oxyde ferrique poreux ; protection par peinture antirouille ou galvanisation au zinc).
   - *Réactions d'oxydoréduction* :
     * Avec le carbone : $2\\,\\text{CuO} + \\text{C} \\longrightarrow 2\\,\\text{Cu} + \\text{CO}_2$ ($\\text{CuO}$ = oxydant réduit, $C$ = réducteur oxydé).
     * Aluminothermie : $\\text{Fe}_2\\text{O}_3 + 2\\,\\text{Al} \\longrightarrow 2\\,\\text{Fe} + \\text{Al}_2\\text{O}_3$.
     * Haut fourneau sidérurgique : $\\text{Fe}_2\\text{O}_3 + 3\\,\\text{CO} \\longrightarrow 2\\,\\text{Fe} + 3\\,\\text{CO}_2$.`;
  }

  // 4.15 COLLÈGE 5ÈME : MATHÉMATIQUES (PROGRAMME OFFICIEL - ARITHMÉTIQUE, GÉOMÉTRIE, PROPORTIONNALITÉ & STATISTIQUES)
  if (/(maths?|math[ée]matiques?).*5[eè]me|5[eè]me.*(maths?|math[ée]matiques?)|nombres? premiers?.*5[eè]me|puissances?.*d[ée]cimales?|priorit[ée]s? op[ée]ratoires?.*5[eè]me|division euclidienne.*5[eè]me|sym[ée]trie axiale.*5[eè]me|angles? alternes?[- ]internes?|angles? correspondants?|angles? compl[ée]mentaires?|angles? suppl[ée]mentaires?|d[ée]cimaux relatifs?.*5[eè]me|m[ée]diatrice.*5[eè]me|fractions?.*5[eè]me|droites? remarquables?.*triangle|cercle.*disque.*5[eè]me|proportionnalit[ée].*5[eè]me|quatri[èe]me proportionnelle|prismes? droits?.*5[eè]me|statistiques?.*5[eè]me/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE MATHÉMATIQUES EN CLASSE DE 5ÈME (COLLÈGE ÉCOLE NUMÉRIQUE CI)**

**I. ARITHMÉTIQUE & CALCUL NUMÉRIQUE** :
1. **Nombres premiers, Puissances et Priorités opératoires** :
   - *Nombre premier* : Entier naturel ayant exactement deux diviseurs distincts : 1 et lui-même (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...). 1 n'est pas premier (un seul diviseur).
   - *Décomposition en facteurs premiers* : Tout entier n >= 2 s'écrit de façon unique sous forme de produit de nombres premiers (60 = 2^2 * 3 * 5).
   - *Puissances d'un nombre positif* : Pour a > 0, a^n = a * a * ... * a (n facteurs). Conventions : a^1 = a et a^0 = 1.
     * Propriétés : a^m * a^n = a^(m+n) ; (a^m)^n = a^(m*n) ; (a * b)^n = a^n * b^n ; a^m / a^n = a^(m-n) (m > n).
     * Puissances de 10 : 10^n = 1 suivi de n zéros.
   - *Priorités opératoires* :
     1. Calculs entre parenthèses (les plus intérieures d'abord).
     2. Puissances.
     3. Multiplications et divisions (de gauche à droite).
     4. Additions et soustractions (de gauche à droite).
   - *Division euclidienne* : a = b * q + r avec impérativement 0 <= r < b. a divisible par b <=> r = 0.

2. **Nombres décimaux relatifs** :
   - *Repérage sur une droite graduée* : Origine O(0), abscisses positives à droite, négatives à gauche.
   - *Distance à zéro* : Distance géométrique de l'origine au point image (|+3,5| = 3,5 ; |-4| = 4). Nombres opposés : même distance à zéro, signes contraires (a + (-a) = 0).
   - *Règles des signes* :
     * Addition : Même signe -> garder le signe et sommer les distances ; Signes différents -> prendre le signe de la plus grande distance et soustraire.
     * Soustraction : Ajouter l'opposé : a - b = a + (-b).
     * Multiplication et Division : Même signe -> résultat Positif (+) ; Signes différents -> résultat Négatif (-). « - par - donne + ».

3. **Écritures fractionnaires (Fractions)** :
   - *Fractions égales* : a/b = (a*k)/(b*k) et a/b = (a/k)/(b/k) (k != 0). Règle des produits en croix : a/b = c/d <=> a*d = b*c.
   - *Addition / Soustraction* :
     * Même dénominateur : a/b +- c/b = (a +- c)/b.
     * Dénominateurs différents : Trouver un dénominateur commun (PPCM) puis additionner.
   - *Multiplication* : a/b * c/d = (a*c)/(b*d) (simplifier avant de calculer).

**II. GÉOMÉTRIE DU PLAN & DE L'ESPACE** :
1. **Symétrie axiale** :
   - *Définition* : Le symétrique de M par rapport à (D) est M' tel que (D) soit la médiatrice de [MM'].
   - *Propriétés de conservation* : Conserve les longueurs, les mesures d'angles, les aires et le parallélisme.
2. **Angles et Droites remarquables** :
   - Angles complémentaires : somme = 90° ; Supplémentaires : somme = 180° ; Opposés par le sommet : toujours égaux.
   - Deux droites parallèles coupées par une sécante forment des angles alternes-internes de même mesure, et des angles correspondants de même mesure.
   - Triangle : Somme des angles intérieurs = 180°.
   - Droites remarquables :
     * Médiatrices -> concourent au centre du cercle circonscrit.
     * Hauteurs -> concourent à l'orthocentre.
     * Médianes -> concourent au centre de gravité (G situé aux 2/3 de chaque médiane à partir du sommet).
     * Bissectrices -> concourent au centre du cercle inscrit.
3. **Cercle, Disque et Prismes droits** :
   - Cercle : Périmètre P = 2 * pi * r = pi * D.
   - Disque : Aire A = pi * r^2.
   - Prisme droit : Aire latérale AL = Pbase * h ; Volume V = Abase * h.
   - Cylindre de révolution : AL = 2*pi*r*h ; V = pi * r^2 * h.

**III. GESTION DE DONNÉES & PROPORTIONNALITÉ** :
1. **Proportionnalité** :
   - Coefficient de proportionnalité k = y / x.
   - Quatrième proportionnelle : x = (b * c) / a.
   - Échelle : E = Distance carte / Distance réelle (mêmes unités).
   - Vitesse moyenne : v = d / t (1 m/s = 3,6 km/h).
   - Pourcentages : P = V * (p / 100).
2. **Statistiques** :
   - Effectif total N = somme des effectifs ni.
   - Fréquence fi = ni / N (en pourcentage : fi * 100).
   - Moyenne arithmétique : moyenne = (somme des ni * xi) / N.`;
  }

  // 4.16 COLLÈGE 5ÈME : FRANÇAIS (PROGRAMME OFFICIEL - PORTRAIT, POÈMES EN VERS LIBRES, ŒUVRE INTÉGRALE, GRAMMAIRE & OUTILS DE LA LANGUE)
  if (/(fran[çc]ais.*5[eè]me|5[eè]me.*fran[çc]ais|portrait simple.*5[eè]me|portrait complexe.*5[eè]me|po[èe]me en vers libres.*5[eè]me|vers libre.*5[eè]me|enfant soldat.*(fran[çc]ois d'assise|5[eè]me)|zango.*soukassa|meydjidah|zakobi.*milice|expansions? du nom.*5[eè]me|pluriel des noms compos[ée]s.*5[eè]me|adjectifs? de couleur.*(r[èe]gle|accords?|5[eè]me)|pronoms? adverbiaux.*(en|y)|tournure impersonnelle.*5[eè]me|verbes? pronominaux.*5[eè]me|adjectif verbal.*participe pr[ée]sent.*5[eè]me|adverbes? en [- ]ment.*5[eè]me|subordonn[ée]e compl[ée]tive.*5[eè]me)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE FRANÇAIS EN CLASSE DE 5ÈME (COLLÈGE ÉCOLE NUMÉRIQUE CI)**

**I. EXPRESSION ÉCRITE & PRODUCTION LITTÉRAIRE** :
1. **Le Portrait Simple (Sujet statique au repos)** :
   - *Définition* : Représentation fidèle d'un être humain ou animal immobile (assis, couché, au repos).
   - *Outils linguistiques* : Vocabulaire évaluatif (mélioratif pour valoriser, dépréciatif pour dévaloriser), comparaisons ("des yeux noirs comme le charbon"), verbes d'état (être, paraître, sembler, demeurer), adjectifs qualificatifs et temps de la description (imparfait et présent).
   - *Structure canonique* :
     * Introduction : Cadre de la rencontre, allure générale, âge apparent, stature et posture statique.
     * Développement : Portrait physique ordonné spatialement (de haut en bas : tête, regard, nez, bouche, buste, membres, vêtements), puis portrait moral (qualités, défauts, tempérament).
     * Conclusion : Sentiments et impressions ressentis par le narrateur.
2. **Le Portrait Complexe (Sujet en action / dynamique)** :
   - *Définition* : Représentation d'un personnage en mouvement ou accomplissant une activité (travail, sport, combat).
   - *Outils* : Verbes d'action et de mouvement, précision gestuelle des mains et du corps, morphologie transfigurée par l'effort (muscles contractés, sueur au front). L'action corporelle dévoile le caractère moral (courage, minutie, patience).
3. **Le Poème en vers libres & Figures de style** :
   - *Vers libre* : Ligne poétique sans compte fixe de syllabes ni schéma rigide de rimes ; versets amples rythmés par le souffle.
   - *Figures d'analogie et de rythme* :
     * Comparaison : Comparé + Outil explicite (comme, tel que, pareil à, semblable à) + Comparant.
     * Métaphore : Assimilation directe sans mot-outil (« La forêt est le poumon vert de la terre »).
     * Hyperbole : Exagération expressive (« Un torrent de larmes »).
     * Anaphore : Répétition d'un même mot en tête de vers successifs (« Eau source de vie / Eau miroir du ciel »).
   - *Thèmes citoyens* : Sauvegarde des forêts et des eaux, refus du travail des enfants, grossesses précoces.

**II. ÉTUDE D'ŒUVRE INTÉGRALE & PRATIQUE ORALE** :
1. **« Le retour de l'enfant soldat » (François d'Assise N'dah)** :
   - *Contexte* : Auteur ivoirien né à Bouaké ; récit ancré dans la crise militaro-politique en Côte d'Ivoire.
   - *Schéma actanciel de Soukassa* :
     * Héros / Sujet : Zango, jeune ex-combattant meurtri en quête de pardon.
     * Objet de la quête : Le pardon familial, la paix du cœur, la réinsertion scolaire et sociale.
     * Destinateur : Le remords et la soif de rédemption | Destinataire : Zango et sa communauté.
     * Adjuvants : Meydjidah (la mère protectrice), Ayablé (l'amie courageuse plaidant la réconciliation), Folki (l'ami fidèle), M. Boni (l'instituteur humaniste), Zépré.
     * Opposants : Gauzango (le père intransigeant), Zakobi et sa milice armée avide de vengeance, Kéfô.
   - *Portée civique* : Tolérance, justice réparatrice, pardon mutuel et réconciliation nationale.
2. **Le Compte-rendu de lecture & L'Exposé oral** :
   - *Compte-rendu* : En-tête bibliographique complet + Thème/Sujet + Résumé neutre sans jugement personnel + Intérêts majeurs et visées de l'auteur.
   - *Exposé oral* : Introduction captivante, développement ordonné avec posture droite et voix audible, conclusion dynamique et débat.

**III. GRAMMAIRE & OUTILS DE LA LANGUE** :
1. **Le Groupe nominal & Expansions** :
   - Nom noyau + 3 expansions : Adjectif qualificatif épithète, Proposition subordonnée relative (avec qui, que, dont, où, lequel - complément de l'antécédent), Complément du nom prépositionnel (de, à, en, sans - appartenance, matière, but).
2. **Pluriel des noms simples et composés** :
   - Noms simples : Généralement +s. Noms en -s, -x, -z invariables. Noms en -al -> -aux (sauf bals, carnavals, chacals, festivals, récitals, régals).
   - Noms composés avec trait d'union :
     * Nom + Nom ou Adjectif + Nom -> les deux s'accordent (des choux-fleurs, des coffres-forts).
     * Nom + Préposition + Nom -> seul le 1er s'accorde (des chefs-d'œuvre, des arcs-en-ciel).
     * Verbe + Nom -> verbe invariable, nom selon le sens (des tire-bouchons, des lave-vaisselle).
     * Noms composés soudés : s'accordent comme des noms simples (des gendarmes ; exceptions : des messieurs, des gentilshommes).
3. **Le Groupe adjectif & Adjectifs de couleur** :
   - 3 fonctions : Épithète (collé au nom), Attribut du sujet (relié par un verbe d'état), Apposé (détaché par une virgule).
   - Adjectifs de couleur :
     * Simple -> s'accorde (des jupes vertes).
     * Composé de 2 mots -> STRICTEMENT INVARIABLE (des yeux bleu clair, des robes vert pomme).
     * Noms employés comme adjectifs de couleur -> INVARIABLES (des chemises marron, orange, cerise, émeraude).
     * 5 exceptions qui s'accordent : rose, mauve, pourpre, écarlate, fauve (des rubans écarlates).
4. **Pronominalisation & Pronoms adverbiaux EN et Y** :
   - COD (le, la, les) ; COI (lui, leur - sans -s !).
   - « EN » : remplace un groupe introduit par « de » (provenance, quantité, partitif : il en vient, il en mange).
   - « Y » : remplace un lieu de destination ou un complément de chose avec « à » (nous y allons, j'y pense).
5. **Le Verbe, Tournures & Voix passive** :
   - Tournure pronominale (réfléchie, réciproque, essentiellement pronominale, passive).
   - Tournure impersonnelle : sujet apparent « Il » + sujet réel postposé (Il arrive des élèves).
   - Passé simple (action ponctuelle achevée de 1er plan) vs Imparfait (action durative, second plan, description).
   - Voix passive : Sujet passif + Auxiliaire ÊTRE au même temps que le verbe actif + Participe passé accordé + par + Complément d'agent.
6. **Orthographe & Adverbes en -ment** :
   - Homophones ON (pronom = il) vs ONT (verbe avoir = avaient).
   - Nu / demi devant le nom -> invariable avec trait d'union (nu-pieds, une demi-heure) ; après le nom -> accord (pieds nus, deux heures et demie).
   - Adverbes en -ment : féminin + -ment (doucement) ; voyelle + -ment (vraiment) ; adj en -ent -> -emment (prudemment) ; adj en -ant -> -amment (méchamment).
   - Comparatifs et superlatifs irréguliers : Bon -> Meilleur (pas de plus bon) ; Mauvais -> Pire ; Petit -> Moindre.`;
  }

  // 4.17 COLLÈGE 5ÈME : PHYSIQUE-CHIMIE (PROGRAMME OFFICIEL - ÉLECTRICITÉ, ÉLECTROMAGNÉTISME, PRESSION, DILATATION, MASSE VOLUMIQUE, MÉLANGES, ATOMES & COMBUSTIONS)
  if (/(physique[- ]chimie.*5[eè]me|5[eè]me.*physique[- ]chimie|tension nominale.*5[eè]me|adaptation.*g[ée]n[ée]rateur|surtension.*sous[- ]tension|association.*piles?.*(concordance|opposition)|lampes?.*(s[ée]rie|d[ée]rivation).*5[eè]me|aimants?.*[ée]lectroaimants?.*5[eè]me|ferromagn[ée]tique.*5[eè]me|alternateur.*5[eè]me|dynamo.*5[eè]me|pression atmosph[ée]rique.*5[eè]me|dilatation.*(solides?|gaz|liquides?).*5[eè]me|bilame.*thermostat.*5[eè]me|masse volumique.*5[eè]me|densit[ée].*5[eè]me|densim[èe]tre.*5[eè]me|m[ée]langes?.*(homog[èe]nes?|h[ée]t[ée]rog[èe]nes?).*5[eè]me|d[ée]cantation.*filtration.*5[eè]me|distillation.*5[eè]me|combustion.*(carbone|soufre).*5[eè]me|corps purs?.*(simples?|compos[ée]s?).*5[eè]me)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE PHYSIQUE-CHIMIE EN CLASSE DE 5ÈME (COLLÈGE ÉCOLE NUMÉRIQUE CI & LE DOJO)**

**I. ÉLECTRICITÉ & ÉLECTROMAGNÉTISME** :
1. **Adaptation d'un générateur à un récepteur** :
   - *Générateur* (fournit le courant : pile, batterie) vs *Récepteur* (consomme : lampe, moteur).
   - *Tension nominale* (sur le générateur) vs *Tension d'usage* (sur le récepteur en Volts V).
   - *Régimes* :
     * $U_{\\text{générateur}} \\approx U_{\\text{usage}}$ : Adaptation -> fonctionnement normal.
     * $U_{\\text{générateur}} < U_{\\text{usage}}$ : Sous-tension -> éclat faible.
     * $U_{\\text{générateur}} > U_{\\text{usage}}$ : Surtension -> éclat très vif puis destruction (filament grillé).
   - *Secteur domestique (CIE)* : $U = 220\\,\\text{V}$. Danger mortel (corps vulnérable dès $24\\,\\text{V}$ en milieu humide). Protection par stabilisateur.

2. **Associations de lampes électriques** :
   - *Montage en Série (1 boucle unique)* : Les lampes se partagent la tension ($U = U_1 + U_2$). Si une lampe est défectueuse/grillée, toutes s'éteignent. Si une lampe est court-circuitée, elle s'éteint et l'autre brille plus fort.
   - *Montage en Dérivation (plusieurs boucles)* : Même tension partout ($U = U_1 = U_2 = 220\\,\\text{V}$). Si une lampe tombe en panne, les autres continuent de fonctionner (éclairage domestique et public). Si une lampe est court-circuitée, tout s'éteint et le générateur s'échauffe dangereusement.

3. **Association de piles en série** :
   - *Série concordance* (bornes de signes contraires en contact : $+/-$) : Les tensions s'additionnent ($U_{\\text{totale}} = U_1 + U_2 + ...$). Ex : pile plate $4,5\\,\\text{V} = 3 \\times 1,5\\,\\text{V}$.
   - *Série opposition* (bornes de même signe en contact : $+/+$ ou $-/-$) : La tension de la pile opposée se retranche ($U_{\\text{totale}} = U_{\\text{concordance}} - U_{\\text{opposition}}$).

4. **Mesures électriques & Lois fondamentales** :
   - *Intensité $I$ (en Ampères A)* : Mesurée par un ampèremètre branché en SÉRIE.
     * En série : $I = I_1 = I_2$ (loi d'unicité).
     * En dérivation : $I_{\\text{principale}} = I_1 + I_2$ (loi d'additivité / des nœuds).
   - *Tension $U$ (en Volts V)* : Mesurée par un voltmètre branché en DÉRIVATION (borne COM vers le pôle $-$).
     * En série : $U = U_1 + U_2$ (loi d'additivité).
     * En dérivation : $U = U_1 = U_2$ (loi d'unicité).

5. **Aimants, Électroaimants & Production de courant** :
   - *Aimants* : Pôle Nord et Pôle Sud. Pôles de même nom se repoussent, contraires s'attirent. Attire les métaux ferromagnétiques (fer, acier, nickel), n'attire pas le cuivre ni l'aluminium.
   - *Électroaimant* : Bobine de cuivre entourant un noyau de fer doux. Aimant temporaire commandé par le courant. Utilisé dans les relais, haut-parleurs, moteurs et grues.
   - *Alternateur & Dynamo de vélo* : Le déplacement d'un aimant mobile (rotor) devant une bobine fixe (stator) produit un courant alternatif (change de sens). Énergie mécanique -> Énergie électrique.

**II. PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE** :
1. **Pression atmosphérique et pression des gaz** :
   - *Pression atmosphérique* : Force pressante exercée par l'air sur toute surface ($P_{\\text{normale}} = 1013\\,\\text{hPa} = 1013\\,\\text{mbar} = 760\\,\\text{mmHg}$). Mesurée au baromètre.
   - *Pression d'un gaz enfermé* : Mesurée au manomètre ($1\\,\\text{bar} = 1000\\,\\text{hPa} = 100\\,000\\,\\text{Pa}$). Surpression : $P = P_{\\text{atm}} + h$ ; Dépression : $P = P_{\\text{atm}} - h$.
   - *Météorologie* : Lignes isobares. Anticyclone A ($P > 1013\\,\\text{hPa}$) = beau temps ; Dépression D ($P < 1013\\,\\text{hPa}$) = mauvais temps/pluie. Le vent va de la haute vers la basse pression.

2. **Dilatation thermique** :
   - Chauffage = Dilatation (volume augmente, masse constante, masse volumique diminue) ; Refroidissement = Contraction.
   - *Échelle de dilatation* : $\\text{Gaz} \\gg \\text{Liquides} > \\text{Solides}$. Tous les gaz se dilatent de la même façon.
   - *Applications des solides* : Bilame (thermostat fer à repasser), joints de dilatation (ponts, rails), emmanchement forcé.
   - *Sécurité en vase clos* : La dilatation d'un gaz enfermé (bombe aérosol, bouteille de butane) provoque une montée en pression et un risque d'explosion si chauffé ($> 50\\,^\\circ\\text{C}$).

3. **Masse volumique & Densité** :
   - *Masse volumique* : $\\rho = m / V$ (en $\\text{kg/m}^3$ ou $\\text{g/cm}^3$). Eau pure : $\\rho = 1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$. Mesure de $V$ par déplacement de liquide ($V = V_2 - V_1$), masse par double pesée ($m = m_2 - m_1$).
   - *Densité* : $d = \\rho / \\rho_{\\text{eau}}$ (sans unité). Si $d < 1$ le corps flotte ; si $d > 1$ le corps coule. Mesure directe au densimètre. Pour les gaz : $d = M / 29$.

**III. CHIMIE : MÉLANGES, ATOMES & RÉACTIONS** :
1. **Les Mélanges et Séparations** :
   - *Mélange homogène* : 1 seul constituant visible (eau + sel, eau + alcool [miscibles]). Séparation par distillation (liquide-liquide) ou vaporisation (liquide-solide).
   - *Mélange hétérogène* : Plusieurs constituants visibles (suspension eau+sable, émulsion eau+huile [non-miscibles]). Séparation par décantation puis filtration (filtrat).
2. **Atomes, Molécules et Corps purs** :
   - *Atome* : Plus petite entité ($\sim 0,1\\,\\text{nm}$), symboles $\\text{C, H, O, N, S, Fe, Cu, Cl, Ca, Al, Na}$.
   - *Molécule* : Assemblage d'atomes ($\\text{H}_2\\text{O, CO}_2, \\text{O}_2, \\text{N}_2, \\text{CH}_4, \\text{SO}_2, \\text{HCl}$).
   - *Corps pur simple* (atomes identiques : $\\text{O}_2, \\text{N}_2, \\text{Fe}$) vs *Corps pur composé* (atomes différents : $\\text{H}_2\\text{O, CO}_2$).
3. **Combustions du Carbone et du Soufre** :
   - *Carbone* : $\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2$ (trouble l'eau de chaux). Combustion incomplète (manque d'$\\text{O}_2$) -> $\\text{CO}$ (monoxyde de carbone toxique inodore asphyxiant mortel).
   - *Soufre* : $\\text{S} + \\text{O}_2 \\longrightarrow \\text{SO}_2$ (flamme bleue, décolore le permanganate de potassium violet). Gaz suffocant responsable des pluies acides (forme $\\text{H}_2\\text{SO}_4$).
4. **Lois des Réactions chimiques & Stœchiométrie** :
   - *Loi de Lavoisier* : Conservation des atomes et de la masse ($m_{\\text{réactifs}} = m_{\\text{produits}}$).
   - *Mole et masse molaire* : $n = m / M = V / V_m$ ($N_A = 6,02 \\times 10^{23}$).
   - *Règle de proportion* : Pour $a\\,\\text{A} + b\\,\\text{B} \\longrightarrow c\\,\\text{C}$, $\\frac{n_A}{a} = \\frac{n_B}{b} = \\frac{n_C}{c}$.`;
  }

  // 4.18 COLLÈGE 5ÈME : HISTOIRE (PROGRAMME OFFICIEL - PREMIERS HABITANTS, NÉGRILLES, PROTO-ETHNIES, MIGRATIONS DU Xè AU XVIIIè SIÈCLE, DISTRICT D'ABIDJAN, AIRES CULTURELLES & DIH)
  if (/(histoire.*5[eè]me|5[eè]me.*histoire|premiers habitants.*c[oô]te d'ivoire|pygm[ée]es?.*(n[ée]grilles?|wocloni|kakatika|mandib[ée]l[ée]|assamangb[ée])|mythes? d'autochtonie.*5[eè]me|proto[- ](akan|mand[ée]|krou|s[ée]noufo).*5[eè]me|mouvements? migratoires?.*c[oô]te d'ivoire|migrations?.*(s[ée]noufo|mand[ée]|krou|akan).*5[eè]me|alliances? (interethniques?|[àa] plaisanterie)|district.*abidjan.*(autochtones?|[ée]bri[ée]|aky[ée]|m'batto)|traits? de civilisation.*5[eè]me|worodougou.*koyaka|classes? d'[âa]ges?.*(fatchu[ée]|dougbo|tchagba|blessou[ée]|niando)|droit international humanitaire.*5[eè]me|dih.*5[eè]me|r[èe]glement.*conflits?.*5[eè]me|arbre [àa] palabres.*5[eè]me)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL D'HISTOIRE EN CLASSE DE 5ÈME (COLLÈGE ÉCOLE NUMÉRIQUE CI)**

**I. LE PEUPLEMENT DE LA CÔTE D'IVOIRE** :
1. **Les Premiers Habitants de la Côte d'Ivoire** :
   - *Les Pygmées ou Négrilles* : Hommes de petite taille (environ 1,40 m à 1,50 m), peau rougeâtre, nomades des forêts denses vivant de chasse, pêche et cueillette.
   - *Appellations selon les traditions orales* :
     * **Wocloni** chez les Malinké
     * **Kakatika** ou **Angbè** chez les Baoulé et Agni
     * **Assamangbé** chez les Attié (Akyé) et Abbey
     * **Mandibélé** chez les Sénoufo
     * **Yincan** chez les Toura
   - *Mythes d'autochtonie* : Récits légendaires pour légitimer la possession de la terre :
     * Sortis de l'eau : les Ehotilé (lagune Aby).
     * Descendus du ciel avec une chaîne : les Agoua et Krobou.
     * Sortis des montagnes : les Séhinon (région de Man).
   - *Les 4 groupes proto-historiques* :
     * **Proto-Akan** (Sud-Est/Centre) : Asrin, Goli, Ehotilé, Zéhiri, Agoua, Aïzi, Krobou.
     * **Proto-Mandé** (Centre/Nord-Ouest) : Gagou (Gban), Toura (Wenmebo), Mona, N'guin.
     * **Proto-Sénoufo/Koulango** (Nord/Nord-Est) : Falafala (Kong), Myoro, Gouin, Lohoron, Nabé.
     * **Proto-Krou** (Sud-Ouest/Centre-Ouest) : Magwé, Ega (Dyès), Séhinon, Kotrowou, Wè.

2. **Les Premiers Mouvements Migratoires** :
   - *Causes des migrations* :
     * **Politiques & militaires** : Déclin et dislocation des grands empires (Ghana, Mali, Songhaï, Sosso), guerres dynastiques et razzias de la traite négrière.
     * **Économiques** : Recherche d'or, noix de cola, sel, épices et terres agricoles fertiles.
     * **Sociales & religieuses** : Sécheresses, famines sahéliennes et fuite de l'islamisation par les peuples animistes.
   - *Chronologie des flux migratoires* :
     * **Xè siècle** : Les Sénoufo s'installent au Nord (Mali/Burkina).
     * **XIè-XIIIè siècle** : Les Mandé Sud (Dan/Yacouba, Gouro) pénètrent dans le Centre-Ouest et l'Ouest.
     * **XIVè-XVè siècle** : Les Krou (Bété, Dida, Guéré, Wobé) arrivent du Libéria vers le Sud-Ouest.
     * **XVè-XVIè siècle** : Les Mandé Nord (Malinké) venus du Mali s'implantent au Nord-Ouest (Kabadougou, Worodougou).
     * **XVIIè-XVIIIè siècle** : Les Akan (Agni, Baoulé, Ebrié, Attié) fuyant le Ghana (Ashanti) s'installent à l'Est, au Centre et au Sud.
   - *Conséquences historiques* :
     * Création de royaumes (Kong, Kabadougou, Sanwi, Sakassou).
     * Émergence de carrefours marchands (Kong, Bouna, Odienné) et essor de l'artisanat (forge, tissage, orpaillage en puits).
     * Alliances interethniques / Parenté à plaisanterie (Toungan/Sinankouya) scellant la paix et interdisant de verser le sang.

**II. TRAITS DE CIVILISATION & SOCIÉTÉ** :
1. **Peuplement du District Autonome d'Abidjan** :
   - 13 communes (Abobo, Adjamé, Anyama, Attécoubé, Bingerville, Cocody, Koumassi, Marcory, Plateau, Port-Bouët, Songon, Treichville, Yopougon).
   - 3 peuples autochtones : **Ebrié (Tchaman)** (Anono, Blokhauss, M'Pouto, Songon), **Akyé** (Anyama, Abobo) et **M'Batto** (Brofodoumé). Arrivés du Ghana aux XVIIè-XVIIIè siècles.
   - Diversification : Allochtones (Ivoiriens de l'intérieur) et Allogènes (ressortissants étrangers).
2. **Aires Culturelles & Traditions** :
   - *Mandé Nord (Worodougou / Koyaka)* : Monarchie villageoise (chef et notables), commerce, patrilinéarité, Islam sunnite.
   - *Akan (Baoulé, Agni)* : Chefferies centralisées, succession matrilinéaire (oncle maternel au neveu), prénoms des jours de naissance.
   - *Lagunaires (Ebrié, Adjoukrou)* : Démocratie villageoise des classes d'âges (Fatchué chez les Ebrié : Dougbo, Tchagba, Blessoué, Niando - 16 ans de mandat), fête de l'Abissa.
   - *Krou (Bété, Guéré)* : Lignages patrilinéaires, culte des masques Gla.
   - *Gur/Voltaïques (Sénoufo)* : Initiation sacrée du Poro / Tchologo (cycle de 21 ans au bois sacré).
   - *Préservation du patrimoine* : Visites au Musée des Civilisations (Plateau) et Musée du Costume (Grand-Bassam).
3. **Règlement Coutumier des Conflits & Droit International Humanitaire (DIH)** :
   - *Conflits locaux* : Conflits sociaux (vols, adultères, querelles d'héritage) et fonciers (terrains, agriculteurs vs éleveurs).
   - *Règlement traditionnel* : Interdiction de se faire justice soi-même, palabre chez le chef et notables, amende réparatrice, arbitrage sacré par les peuples alliés à plaisanterie.
   - *Le DIH (Conventions de Genève)* :
     * Protection absolue des civils, soignants, journalistes et humanitaires (Croix-Rouge, PAM).
     * Interdiction absolue des enfants soldats (< 15 ans).
     * Interdiction de détruire les biens vitaux (eau, récoltes, hôpitaux, écoles).
     * Interdiction d'achever ou torturer un soldat désarmé ou blessé (devoir de soins médicaux).
     * Proscription des armes de destruction massive et mines antipersonnel.`;
  }

  // 4.19 COLLÈGE 5ÈME : GÉOGRAPHIE (PROGRAMME OFFICIEL - MILIEU PHYSIQUE, DÉMOGRAPHIE, EAU & DÉVELOPPEMENT, MÉTHODES AGRICOLES & IMPÔT DGI)
  if (/(g[ée]ographie.*5[eè]me|5[eè]me.*g[ée]ographie|milieu physique.*c[oô]te d'ivoire.*5[eè]me|relief.*climat.*hydrographie.*5[eè]me|croissance d[ée]mographique.*c[oô]te d'ivoire.*5[eè]me|taux d'accroissement naturel.*5[eè]me|population jeune.*c[oô]te d'ivoire.*5[eè]me|eau et d[ée]veloppement.*5[eè]me|barrages?.*(kossou|taabo|buyo|soubr[ée]).*5[eè]me|m[ée]thodes agricoles.*environnement.*5[eè]me|agriculture itin[ée]rante sur br[ûu]lis.*5[eè]me|imp[oô]ts?.*am[ée]nagement du territoire.*5[eè]me|civisme fiscal.*dgi.*tr[ée]sor.*5[eè]me)/i.test(fullText)) {
    return `**PROGRAMME OFFICIEL DE GÉOGRAPHIE EN CLASSE DE 5ÈME (COLLÈGE ÉCOLE NUMÉRIQUE CI)**

**I. LE MILIEU PHYSIQUE ET L'INSTALLATION DES POPULATIONS EN CÔTE D'IVOIRE** :
1. **Le Relief et son Influence** :
   - Relief généralement plat et peu accidenté :
     * *Plaines côtières & lagunaires* au Sud (inférieures ou égales à 200 m).
     * *Plateaux ondulés* étagés au Centre et au Nord (200 à 500 m).
     * *Massifs montagneux de l'Ouest* : Monts du Nimba, Mont Tonkpi (1189 m) près de Man.
   - Les plaines et plateaux favorisent l'installation humaine, l'agriculture et le tracé des voies de communication. Les zones marécageuses et les pentes abruptes constituent des zones de contrainte.
2. **Les Climats et la Végétation** :
   - *Au Sud (Zone forestière)* : Climat subéquatorial (atténué) à 4 saisons (2 saisons de pluies, 2 saisons sèches). Forêt dense sempervirente propice au café, cacao, palmier à huile, hévéa. Forte densité humaine.
   - *Au Nord (Zone soudanienne/savane)* : Climat tropical humide à 2 saisons (1 saison des pluies, 1 longue saison sèche avec Harmattan). Savane arborée propice au coton, anacarde (cajou), maïs, élevage bovin.
3. **Le Réseau Hydrographique** :
   - 4 grands fleuves côtiers orientés Nord-Sud : **Comoé** (1160 km), **Bandama** (1050 km, seul entièrement en territoire ivoirien), **Sassandra** (650 km) et **Cavally** (700 km, frontière avec le Libéria).

**II. LA CROISSANCE DÉMOGRAPHIQUE DE LA CÔTE D'IVOIRE** :
1. **Les Moteurs de la Croissance** :
   - Évolution rapide : d'environ 3 millions en 1960 à plus de 29 millions d'habitants aujourd'hui.
   - Taux d'accroissement naturel élevé (~2,6%) dû à une forte natalité/fécondité (~4,6 enfants/femme) et une baisse de la mortalité grâce aux progrès sanitaires et vaccins.
   - Apport d'un puissant solde migratoire international (pays carrefour de la CEDEAO).
2. **Structure par Âge & Conséquences** :
   - Population extrêmement jeune : plus de 60% a moins de 25 ans.
   - *Conséquences positives* : Dynamisme économique, main-d'œuvre abondante, renouvellement générationnel.
   - *Défis majeurs* : Forte charge de dépendance sur les actifs, saturation des infrastructures scolaires et universitaires, chômage des jeunes diplômés, pression sur les hôpitaux et développement de quartiers d'habitat précaire.

**III. L'EAU ET LE DÉVELOPPEMENT ÉCONOMIQUE** :
1. **Les Usages Économiques de l'Eau** :
   - *Énergie hydroélectrique* : Grands barrages de **Kossou** et **Taabo** (sur le Bandama), **Buyo** et **Soubré** (sur le Sassandra), fournissant une électricité propre au réseau national et sous-régional.
   - *Agriculture & Irrigation* : Riziculture irriguée, canne à sucre (Ferkessédougou, Borotou), maraîchage urbain et périurbain.
   - *Pêche continentale et pisciculture* : Pêche en lagune et sur les lacs de retenue assurant la sécurité alimentaire.
   - *Eau potable* : Captage dans les nappes phréatiques et traitement en usine (SODECI, ONEP) pour les ménages et les industries.
2. **Problématique de la Préservation** :
   - Menaces : Pollution industrielle, orpaillage clandestin (mercure, cyanure polluant les rivières), déchets plastiques lagunaires, gaspillage de l'eau potable.

**IV. MÉTHODES AGRICOLES ET ENVIRONNEMENT** :
1. **L'Agriculture Itinérante sur Brûlis (Traditionnelle)** :
   - Défrichage de la forêt, abattage, brûlis, mise en culture 2 à 3 ans, puis abandon en longue jachère.
   - *Impacts environnementaux négatifs* : Déforestation massive, feux de brousse incontrôlés, érosion et lessivage des sols arables, émission de gaz à effet de serre.
2. **L'Agriculture Sédentaire et Écologique (Moderne)** :
   - Utilisation raisonnée des engrais organiques et compost, rotation des cultures, jachère améliorée avec légumineuses fixatrices d'azote, agroforesterie (arbres d'ombrage dans les cacaoyères) pour préserver la biodiversité et restaurer la fertilité des sols.

**V. L'IMPÔT ET L'AMÉNAGEMENT DU TERRITOIRE** :
1. **Notion d'Impôt & Civisme Fiscal** :
   - L'impôt est une contribution financière obligatoire versée par chaque citoyen et chaque entreprise à l'État sans contrepartie directe.
   - Recouvré par la Direction Générale des Impôts (DGI) et centralisé au Trésor Public.
2. **Financement des Infrastructures & Aménagement du Territoire** :
   - Les impôts financent le budget de l'État :
     * Construction d'infrastructures routières (autoroutes, ponts comme le Pont Henri Konan Bédié et le 5ème Pont d'Abidjan, bitumage des axes régionaux).
     * Construction d'écoles, collèges de proximité, lycées et universités.
     * Équipement des hôpitaux, centres de santé ruraux et maternités.
     * Électrification rurale, adduction en eau potable et maintien de la sécurité nationale (police, gendarmerie, armée).
   - Payer ses impôts est un acte patriotique indispensable pour lutter contre les déséquilibres régionaux.`;
  }

  // 5.1 CHIMIE 1ÈRE C & D : ENGRAIS, ANALYSE ÉLÉMENTAIRE, TESTS D'IONS & REFORMAGE
  if (/engrais|complexe argilo.*humique|\bcah\b|pont calcique|npk|formule.*engrais|eutrophisation/i.test(fullText)) {
    return `**CHIMIE DES SOLS ET ENGRAIS N-P-K (1ÈRE C & D)**

**1. Le Complexe Argilo-Humique (CAH) & Rôle Régulateur** :
- **Nature** : Association colloïdale négative entre les feuillets d'argile (silicates $SiO_4^{4-}$) et l'humus (carboxylates $R-COO^-$).
- **Adsorption des cations** : Fixe les cations nutritifs ($Ca^{2+}, Mg^{2+}, K^+, NH_4^+, Fe^{2+}, Al^{3+}$) pour éviter leur lessivage par les pluies et les échange avec la solution du sol au niveau des racines.
- **Le Pont Calcique** : L'anion phosphate $PO_4^{3-}$ est le seul anion fixé sur le CAH grâce au pont électrostatique formé par le cation bivalent $Ca^{2+}$.
- **Lessivage des nitrates** : Les ions $NO_3^-$ sont repoussés par le CAH ; un excès entraîne la pollution de la nappe phréatique (méthémoglobinémie).

**2. Formule conventionnelle d'un engrais ternaire (X - Y - Z)** :
- **X** : Pourcentage massique en azote élémentaire $\\%N$ (croissance des feuilles et tiges).
- **Y** : Pourcentage massique en oxyde de phosphore $\\%P_2O_5$ (fructification, énergie cellulaire ATP).
- **Z** : Pourcentage massique en oxyde de potassium $\\%K_2O$ (résistance aux maladies et froid).

**3. Formule d'un mélange de deux engrais $E_1(m_A, X_A-Y_A-Z_A)$ et $E_2(m_B, X_B-Y_B-Z_B)$** :
$$X = \\frac{m_A X_A + m_B X_B}{m_A + m_B} \\quad ; \\quad Y = \\frac{m_A Y_A + m_B Y_B}{m_A + m_B} \\quad ; \\quad Z = \\frac{m_A Z_A + m_B Z_B}{m_A + m_B}$$

**4. Pollution environnementale** :
- *Eutrophisation* : Ruissellement des phosphates vers les eaux douces $\\rightarrow$ prolifération d'algues $\\rightarrow$ consommation d'oxygène dissous lors de leur décomposition $\\rightarrow$ asphyxie de la faune aquatique.`;
  }

  if (/analyse [ée]l[ée]mentaire|formule brute.*c\s*h\s*o|tube.*potasse|ponce sulfurique|pourcentage cent[ée]simal/i.test(fullText)) {
    return `**MÉTHODE DE L'ANALYSE ÉLÉMENTAIRE QUANTITATIVE & DÉTERMINATION DE FORMULE BRUTE**

**1. Combustion complète d'une masse $m$ de composé $C_x H_y O_z N_t$** :
- Le carbone se transforme en $CO_2$ absorbé dans des **tubes à potasse ($KOH$)** :
  $$m(C) = \\frac{12}{44} m(CO_2) = \\frac{3}{11} m(CO_2) \\quad \\Longrightarrow \\quad \\%C = \\frac{m(C)}{m} \\times 100$$
- L'hydrogène se transforme en $H_2O$ absorbée dans des **tubes à ponce sulfurique ($H_2SO_4$)** :
  $$m(H) = \\frac{2}{18} m(H_2O) = \\frac{m(H_2O)}{9} \\quad \\Longrightarrow \\quad \\%H = \\frac{m(H)}{m} \\times 100$$
- L'azote $N$ est dosé en $N_2$ (Dumas) ou $NH_3$ (Kjeldahl).
- L'oxygène $O$ est calculé par différence à $100\\%$ :
  $$\\%O = 100 - (\\%C + \\%H + \\%N)$$

**2. Masse molaire moléculaire $M$** :
- Pour une vapeur : $M = 29 \\cdot d$ ($d$ étant la densité par rapport à l'air).
- Gaz parfaits : $P V = \\frac{m}{M} R T \\Longrightarrow M = \\frac{m R T}{P V}$ (avec $T$ en Kelvin, $V$ en $m^3$, $P$ en Pa).

**3. Calcul des indices entiers $x, y, z, t$ de $C_x H_y O_z N_t$** :
$$\\frac{12x}{\\%C} = \\frac{y}{\\%H} = \\frac{16z}{\\%O} = \\frac{14t}{\\%N} = \\frac{M}{100}$$
$$x = \\frac{\\%C \\cdot M}{1200} \\quad ; \\quad y = \\frac{\\%H \\cdot M}{100} \\quad ; \\quad z = \\frac{\\%O \\cdot M}{1600} \\quad ; \\quad t = \\frac{\\%N \\cdot M}{1400}$$`;
  }

  if (/tests?.*(ions?|cations?).*m[ée]talliques?|identification.*(cu2\+|al3\+|zn2\+|fe2\+|fe3\+|ag\+)|amphot[èe]re.*hydroxyde/i.test(fullText)) {
    return `**TESTS D'IDENTIFICATION DES CATIONS MÉTALLIQUES (1ÈRE C & D)**

| Cation | Couleur initiale | Ajout de soude $NaOH$ goutte à goutte | Excès de soude $NaOH$ | En présence d'ammoniac $NH_3$ |
| :--- | :--- | :--- | :--- | :--- |
| **$Cu^{2+}$** | Bleue | Précipité bleu gélatineux $Cu(OH)_2$ | Insoluble | **Soluble** (complexe bleu céleste $[Cu(NH_3)_4]^{2+}$) |
| **$Al^{3+}$** | Incolore | Précipité blanc $Al(OH)_3$ | **Soluble** (amphotère, $[Al(OH)_4]^-$) | **Insoluble** |
| **$Zn^{2+}$** | Incolore | Précipité blanc $Zn(OH)_2$ | **Soluble** (amphotère, $[Zn(OH)_4]^{2-}$) | **Soluble** (complexe $[Zn(NH_3)_4]^{2+}$) |
| **$Fe^{2+}$** | Vert pâle | Précipité verdâtre $Fe(OH)_2$ | Insoluble | Rougit à l'air (oxydation en $Fe(OH)_3$) |
| **$Fe^{3+}$** | Jaune-orangé | Précipité rouille $Fe(OH)_3$ | Insoluble | Insoluble |
| **$Ag^+$** | Incolore | Précipité brun d'oxyde d'argent $Ag_2O$ | Insoluble | **Soluble** (complexe $[Ag(NH_3)_2]^+$) |

**Règle clé** : L'ammoniac $NH_3$ permet de distinguer avec certitude $Al^{3+}$ (insoluble) de $Zn^{2+}$ (soluble), alors que tous deux se dissolvent dans l'excès de soude !`;
  }

  if (/craquage|reformage.*catalytique|indice d'octane|isom[ée]risation|cyclisation|d[ée]shydrocyclisation/i.test(fullText)) {
    return `**RAFFINAGE DU PÉTROLE, CRAQUAGE ET REFORMAGE CATALYTIQUE (1ÈRE C & D)**

**1. Distillation fractionnée (Séparation physique)** :
- Réalisée en tour à plateaux : gaz ($<40^\\circ\\text{C}$), essences et naphtas ($40-180^\\circ\\text{C}$), kérosène ($180-230^\\circ\\text{C}$), gazole/diesel ($230-360^\\circ\\text{C}$), résidu lourd sous vide ($>360^\\circ\\text{C}$).

**2. Craquage (Diminution du nombre de carbones)** :
- Casse les grosses molécules lourdes en molécules plus courtes :
  * *Craquage catalytique* (~$500^\\circ\\text{C}$) : donne des essences antidétonantes et des alcènes.
  * *Vapocraquage* (~$800^\\circ\\text{C}$) : produit en masse des alcènes légers (éthylène, propène) pour l'industrie plastique.

**3. Reformage catalytique (Maintien du nombre de carbones)** :
- Réalisé sur catalyseur au platine ($Pt$) à $500^\\circ\\text{C}$ sous 20 bars pour élever l'indice d'octane :
  1. **Isomérisation** : Chaîne linéaire $\\rightarrow$ chaîne ramifiée (ex : heptane linéaire indice 0 $\\rightarrow$ 2,2,3-triméthylbutane indice 100).
  2. **Cyclisation** : Alcane linéaire $\\rightarrow$ cycloalcane $+ H_2$ (ex : hexane $\\rightarrow$ cyclohexane $+ H_2$).
  3. **Déshydrocyclisation (Aromatisation)** : Alcane linéaire $\\rightarrow$ arène $+ 4 H_2$ (ex : hexane linéaire $\\rightarrow$ benzène $+ 4 H_2$, l'indice d'octane passe de 25 à 107 !).

**4. Indice d'octane** :
- Mesure la résistance au cliquetis (auto-inflammation). Heptane = 0, Isooctane = 100. Les composés ramifiés et aromatiques ont les indices les plus élevés.`;
  }

  // 6. TENTATIVE VIA LES MOTEURS DÉTERMINISTES D'EXERCICES ET SUJETS
  const canonDiscipline = canonicalDiscipline(params.discipline || params.fasciculeContext?.disciplineLabel);
  const isExplicitNonPhilo = canonDiscipline && canonDiscipline !== "philosophie";
  const isExplicitLanguage = canonDiscipline === "anglais" || canonDiscipline === "allemand" || canonDiscipline === "espagnol";

  // 6.0 Langues Vivantes (Anglais, Allemand, Espagnol) - Zéro IA, 100% déterministe
  const detectedLang = detectLanguage(query, (params.discipline as any) || (params.fasciculeContext?.disciplineLabel as any));
  if (detectedLang) {
    try {
      const langAnswer = solveLanguageChat(query, detectedLang);
      if (langAnswer && langAnswer.length > 30) {
        return langAnswer;
      }
    } catch (langErr) {
      console.warn("[LocalTutorEngine] Error solving foreign language chat:", langErr);
    }
  }

  // 6.0.4 ROUTAGE PRIORITAIRE DES VRAIS DEVOIRS DE DISSERTATION
  // Une dissertation de Français ou de Philosophie doit être reconnue AVANT les
  // moteurs de notions, arguments, cours et sujets génériques. En revanche, une
  // simple « définition », « argument », « citation » ou « cours » reste documentaire.
  const dissertationRoute = detectDissertationTask(query, discipline || params.fasciculeContext?.disciplineLabel, params.subjectContext);
  if (dissertationRoute.isDissertation && dissertationRoute.kind === 'solve') {
    try {
      if (dissertationRoute.discipline === 'philosophie') {
        const philoDevoir = solvePhiloTle(query);
        if (philoDevoir.success) {
          const redaction = philoDevoir.methodologyAnalysis?.level5FullRedaction
            || ((philoDevoir.result as any)?.toFullRedaction ? (philoDevoir.result as any).toFullRedaction() : '');
          if (redaction && redaction.length > 200) return redaction;
        }
      }
      if (dissertationRoute.discipline === 'francais') {
        const francaisDevoir = solveFrancaisTle(query);
        if (francaisDevoir.success && francaisDevoir.result) {
          const redaction = (francaisDevoir.result as any).toFullRedaction
            ? (francaisDevoir.result as any).toFullRedaction()
            : francaisDevoir.methodologyAnalysis?.level5FullRedaction || '';
          if (redaction && redaction.length > 200) return redaction;
        }
      }
    } catch (e) {}
  }

  // 6.0.5 INTENTIONS COURTES : ne jamais transformer une définition simple ou une
  // recherche d'arguments littéraires en dissertation philosophique/littéraire.
  if (/\b(?:definition|définition|definir|définir|signification|sens de|qu['’]est[- ]ce que|c['’]est quoi)\b/i.test(query)) {
    const termMatch = query.match(/(?:definition|définition|definir|définir|signification|sens de|qu['’]est[- ]ce que|c['’]est quoi)\s+(?:de|du|des|d['’]|le|la|les)?\s*(.+?)\s*\??$/i);
    const term = termMatch?.[1]?.trim().replace(/[?!.]+$/, '') || '';
    const normalizedTerm = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const simpleDefinitions: Record<string, string> = {
      mythe: "Récit traditionnel, symbolique et imaginaire qui met en scène des dieux, des héros ou des forces surnaturelles pour expliquer le monde, les origines ou certains aspects de l’existence.",
      philosophie: "Réflexion rationnelle et critique qui cherche à comprendre les fondements du savoir, de l’action et de l’existence.",
      raison: "Faculté de penser, de juger et de démontrer selon des principes logiques.",
      liberte: "Pouvoir d’agir et de choisir par soi-même, dans les limites imposées par les contraintes et les droits d’autrui.",
      conscience: "Faculté par laquelle une personne prend connaissance d’elle-même, de ses actes et de ce qui l’entoure.",
    };
    if (simpleDefinitions[normalizedTerm]) return simpleDefinitions[normalizedTerm];
  }

  // Une recherche d'arguments littéraires est une demande documentaire ciblée, pas
  // un sujet de dissertation. Elle doit être traitée avant toute détection philosophique.
  if (/\b(?:argument|arguments)\b/i.test(fullText) && /\b(?:roman|poesie|poeme|poete|theatre|piece)\b/i.test(fullText)) {
    const directArgs = searchLiteraryArguments(query);
    if (directArgs) return directArgs;
  }

  // 6.0.7 RECHERCHE SIMPLE D'UNE NOTION / D'UN THÈME
  // Une requête courte comme « guerre froide » demande le savoir sur la notion,
  // pas une dissertation, un commentaire ou une méthodologie d'examen.
  const isSimpleTopicSearch = query.split(/\s+/).filter(Boolean).length <= 8
    && !/[?]/.test(query)
    && !/\b(?:argument|arguments|dissertation|dissert|commentaire|m[ée]thode|exercice|exos?|devoir|corrig[ée]|r[ée]soudre|explique(?:r)?|analyse(?:r)?|compare(?:r|aison)?|causes?|cons[ée]quences?|dates?|d[ée]finition|d[ée]finir|signification|citation|auteur|oeuvre|[ée]tapes?)\b/i.test(query);
  if (isSimpleTopicSearch && /\b(?:guerre froide|bipolarisation|premi[èe]re guerre mondiale|deuxi[èe]me guerre mondiale|guerre mondiale|colonisation|d[ée]colonisation|mondialisation|onu|ind[ée]pendance|r[ée]volution industrielle)\b/i.test(fullText)) {
    try {
      const topicResult = getAcademicCourseResult(query, level as any, canonicalDiscipline(params.discipline || params.fasciculeContext?.disciplineLabel) as any, params.serie as any);
      const direct = topicResult.definitionAndScope || topicResult.quickRevisionMemo || topicResult.fullCourseContent || '';
      if (direct && direct.trim().length > 40) {
        return direct.replace(/^#{1,6}\s+/gm, '').replace(/\*\*/g, '').trim();
      }
    } catch (e) {}
  }

  // 6.1 Philosophie (Uniquement si la discipline n'est PAS une langue vivante ni scientifique)
  if (
    !isExplicitNonPhilo &&
    !isExplicitLanguage &&
    !/anglais|english|englais|allemand|deutsch|espagnol|spanish|maths?|chimie|physique|svt|biologie/i.test(fullText) &&
    (/philo|philosophie/i.test(fullText) ||
      /\b(conscience|inconscient|cogito|libert[ée]|d[ée]sir|devoir\s+moral|notion\s+de\s+devoir|morale|justice|v[ée]rit[ée]|autrui|ali[ée]nation|m[ée]taphysique|impr[ée]visible|impr[ée]visibles|contingence|n[ée]cessit[ée]|sens\s+de\s+l['’]histoire|[ée]v[ée]nements?\s+historiques?)\b/i.test(fullText))
  ) {
    try {
      const philoRes = solvePhiloTle(query);
      if (philoRes.success) {
        const fullRed = philoRes.methodologyAnalysis?.level5FullRedaction || ((philoRes.result as any)?.toFullRedaction ? (philoRes.result as any).toFullRedaction() : "");
        if (fullRed && fullRed.length > 200) {
          return `**ANALYSE ET RÉSOLUTION PHILOSOPHIQUE CERTIFIÉE BAC (Notion : ${philoRes.classification.notionName})**\n\n${fullRed}`;
        }
      }
    } catch (e) {}
  }

  // 6.2 Français Littérature
  if (/fran[çc]ais|litt[ée]rature|po[ée]sie|po[èe]te|roman|th[ée]âtre|c[ée]saire|senghor|kourouma|dadi[ée]|trag[ée]die|com[ée]die/i.test(fullText)) {
    try {
      const frRes = solveFrancaisTle(query);
      if (frRes.success && frRes.result) {
        const fullRed = (frRes.result as any).toFullRedaction ? (frRes.result as any).toFullRedaction() : "";
        if (fullRed && fullRed.length > 200) {
          return `**ANALYSE ET DISSERTATION LITTÉRAIRE CERTIFIÉE BAC (Genre : ${frRes.classification.genreOrTopic})**\n\n${fullRed}`;
        }
      }
    } catch (e) {}
  }

  // 6.3 Histoire-Géographie (Terminale & Première)
  if (/histoire|g[ée]ographie|g[ée]o\b|onu|guerre froide|bipolarisation|d[ée]colonisation|cote d'ivoire|alg[ée]rie|cedeao|ue-acp|cor[ée]e du sud|capitalisme|r[ée]volution industrielle|taylorisme|berlin|samory|angoulvant|guerre mondiale|sarajevo|g[ée]nocide|shoah|d[ée]mographie|urbanisation|am[ée]nagement.*territoire|d[ée]concentration|d[ée]centralisation|mondialisation/i.test(fullText)) {
    try {
      const hgRes = solveHistoireGeoTle(query);
      if (hgRes.success && hgRes.result) {
        const fullRed = (hgRes.result as any).toFullRedaction ? (hgRes.result as any).toFullRedaction() : "";
        if (fullRed && fullRed.length > 200) {
          return `**ANALYSE ET DISSERTATION HISTOIRE-GÉOGRAPHIE BAC (Leçon : ${hgRes.classification.lessonTitle})**\n\n${fullRed}`;
        }
      }
    } catch (e) {}
  }

  // 6.4 Mathématiques & Calculs (Terminale D, C, A, 6e, et devoirs complets)
  if (/math|math[ée]matiques|calcul|fonction|d[ée]riv|primitive|int[ée]gral|complexe|probabilit|statist|moyenne|variance|suite|limite|g[ée]om[ée]tr|triangle|vecteur|trigonom|sin\(|cos\(|tan\(|matrice|d[ée]nombrement|combinaison|arrangement|\^|x\s*[\+\-\*=]|f\(x\)|u_n|ln\(|exp\(/i.test(fullText)) {
    // A. Priorité absolue : Résolution intégrale de TOUS les exercices et questions avec la Méthode Papa
    try {
      const parsed = parseStatement(query);
      if (parsed.exercises.length > 0 && (parsed.totalQuestionsCount > 0 || /r[ée]soud|calcul|d[ée]termin|montr|trouv|soit|exercice|f\(x\)|u_n|\^/i.test(query))) {
        // Résolution universelle déterministe question par question. Aucun
        // résultat générique n'est accepté si un solveur réel n'a pas réussi.
        const hybrid = tryHybridDeterministicExerciseResolution(parsed);
        if (hybrid?.success && hybrid.solvedExercises.length > 0) {
          const analysis = buildMethodologyResultFromSolvedExercises(parsed, hybrid.solvedExercises, 'Mathématiques', level || 'Terminale', 'Résolution Mathématiques — Résolution universelle');
          const sol = analysis.level5FullRedaction || '';
          if (sol) return sol;
        }
      }
    } catch (e) {}

    try {
      const mathD = solveMathsTleD(query);
      if (mathD.success && mathD.result) {
        const sol = mathD.methodologyAnalysis?.level5FullRedaction || "";
        if (sol) return `**RÉSOLUTION MATHÉMATIQUES TERMINALE D PAS-À-PAS**\n\n${sol}`;
      }
    } catch (e) {}

    try {
      const mathC = solveMathsTleCExercise(query, { serie: "C", level: "terminale" });
      if (mathC.handledLocally && mathC.result) {
        const sol = (mathC.result as any).toFullRedaction ? (mathC.result as any).toFullRedaction() : "";
        if (sol) return `**RÉSOLUTION MATHÉMATIQUES TERMINALE C PAS-À-PAS**\n\n${sol}`;
      }
    } catch (e) {}

    try {
      const mathA = solveMathsTleAExercise(query, { serie: "A", level: "terminale" });
      if (mathA.handledLocally && mathA.result) {
        const sol = (mathA.result as any).toFullRedaction ? (mathA.result as any).toFullRedaction() : "";
        if (sol) return `**RÉSOLUTION MATHÉMATIQUES TERMINALE A PAS-À-PAS**\n\n${sol}`;
      }
    } catch (e) {}

    try {
      const math6 = solveMaths6e(query);
      if (math6.success && math6.result) {
        const sol = math6.methodologyAnalysis?.level5FullRedaction || "";
        if (sol) return `**RÉSOLUTION MATHÉMATIQUES 6ÈME PAS-À-PAS**\n\n${sol}`;
      }
    } catch (e) {}
  }

  // 6.5 Sciences Physiques & SVT (Chimie, Cinématique, Électricité, Dosage, etc.)
  if (/physique|chimie|cin[ée]matique|newton|projectile|acide|base|dosage|organique|ester|concentration|vitesse|force/i.test(fullText)) {
    try {
      const parsed = parseStatement(query);
      if (parsed.exercises.length > 0 && (parsed.totalQuestionsCount > 0 || /calcul|r[ée]action|vitesse|force|concentration|quantit[ée]|pH|m/i.test(query))) {
        const solved = solveAllExercisesWithPapaMethod(parsed, 'Physique-Chimie', level || 'Terminale');
        if (solved.length > 0 && solved.some(ex => ex.questions.length > 0)) {
          const lines: string[] = [];
          lines.push(`### 👨‍🏫 RÉSOLUTION PHYSIQUE-CHIMIE — MÉTHODE PAPA BIEN EXPLIQUÉE\n`);
          for (const ex of solved) {
            lines.push(`---\n### 📌 ${ex.title.toUpperCase()} ${ex.points ? `(${ex.points})` : ''}\n`);
            if (ex.introContext) lines.push(`*${ex.introContext}*\n`);
            for (const q of ex.questions) {
              lines.push(`#### 🔹 Question ${q.numberLabel} : ${q.titleOrPrompt}\n`);
              lines.push(q.steps.join('\n\n'));
              lines.push(`\n\n> ➜ **Résultat final :** $${q.finalAnswer}$\n`);
            }
          }
          return lines.join('\n');
        }
      }
    } catch (e) {}

    try {
      const pcRes = solvePcTleCdeExercise(query, { serie: "D", level: "terminale" });
      if (pcRes.handledLocally && pcRes.result) {
        const sol = (pcRes.result as any).toFullRedaction ? (pcRes.result as any).toFullRedaction() : "";
        if (sol) return `**RÉSOLUTION PHYSIQUE-CHIMIE TERMINALE C/D/E**\n\n${sol}`;
      }
    } catch (e) {}
  }

  if (/svt|biologie|g[ée]n[ée]tique|croisement|drosophile|pedigree|pression art[ée]rielle|glyc[ée]mie|immunologie|sida|spermatogen[èe]se/i.test(fullText)) {
    try {
      const svtRes = solveSvtTleDExercise(query, { serie: "D", level: "terminale" });
      if (svtRes.handledLocally && svtRes.result) {
        const sol = (svtRes.result as any).toFullRedaction ? (svtRes.result as any).toFullRedaction() : "";
        if (sol) return `**RÉSOLUTION SVT TERMINALE D**\n\n${sol}`;
      }
    } catch (e) {}
  }

  // 7. RECHERCHE DE COURS SYNTHÉTISÉ PAR LE MOTEUR ACADÉMIQUE
  try {
    const courseRes = getAcademicCourseResult(query, params.level as any, params.discipline as any, params.serie as any);
    if (courseRes && courseRes.chapterTitle && courseRes.definitionAndScope) {
      let output = `**FICHE PÉDAGOGIQUE OFFICIELLE : ${courseRes.chapterTitle}**\n\n`;
      output += `**1. Définition et Champ d'Étude** :\n${courseRes.definitionAndScope}\n\n`;

      if (courseRes.coreConceptsAndFormulas && courseRes.coreConceptsAndFormulas.length > 0) {
        output += `**2. Notions Clés et Formules / Principes** :\n`;
        courseRes.coreConceptsAndFormulas.slice(0, 4).forEach((item, idx) => {
          const exp = (item.explanation || "").trim();
          const expLower = exp.toLowerCase();
          const fLower = (item.formulaOrRule || "").trim().toLowerCase();
          const isBoilerplate =
            !exp ||
            expLower.includes("définition officielle conforme") ||
            expLower.includes("definition officielle conforme") ||
            expLower.includes("mena / dpfc") ||
            expLower.includes("cadre conceptuel fondamental") ||
            expLower.includes("règle clé & propriété") ||
            expLower.includes("regle cle & propriete") ||
            expLower === "définition officielle." ||
            expLower === "definition officielle." ||
            fLower === expLower ||
            fLower.includes(expLower);

          if (!isBoilerplate) {
            output += `- **${item.name}** : ${item.formulaOrRule}\n  _${item.explanation}_\n`;
          } else {
            output += `- **${item.name}** : ${item.formulaOrRule}\n`;
          }
        });
        output += `\n`;
      }

      if (courseRes.stepByStepMethod && courseRes.stepByStepMethod.length > 0) {
        output += `**3. Démarche Méthodologique Pas-à-Pas** :\n`;
        courseRes.stepByStepMethod.slice(0, 4).forEach(step => {
          output += `${step.stepNumber}. **${step.title}** : ${step.whatToDo} (${step.reflexOrTip})\n`;
        });
        output += `\n`;
      }

      if (courseRes.solvedExample?.solutionStepByStep) {
        output += `**4. Exemple Résolu d'Application** :\n- *Énoncé* : ${courseRes.solvedExample.problemStatement}\n- *Résolution* : ${courseRes.solvedExample.solutionStepByStep}\n\n`;
      }

      if (courseRes.quickRevisionMemo) {
        output += `**Mémento de Révision Rapide** :\n${courseRes.quickRevisionMemo}`;
      }

      return output;
    }
  } catch (e) {}

  // 8. FALLBACK PÉDAGOGIQUE STRUCTURÉ GÉNÉRALE
  return `**GUIDE D'ACCOMPAGNEMENT PÉDAGOGIQUE SUR : « ${query} »**

Pour réussir l'analyse et le traitement de cette notion selon les exigences officielles :

1. **Analyse des concepts clés** : Définissez précisément chaque terme pour cerner le cadre théorique et éviter tout hors-sujet.
2. **Méthode d'argumentation** : Chaque paragraphe doit associer une **Idée directrice**, une **Explication rigoureuse** et un **Exemple ou Citation certifiée**.
3. **Vérification pas-à-pas** : Structurez votre réponse avec des transitions soignées et des connecteurs logiques adaptés.

Précisez-moi votre question (ex : *« donne-moi le plan détaillé »*, *« quelles sont les citations d'auteurs ? »*, ou *« résous ce calcul »*) pour un guidage ciblé !`;
}
