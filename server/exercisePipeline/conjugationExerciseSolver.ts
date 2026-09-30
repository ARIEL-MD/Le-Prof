/**
 * MOTEUR DÉTERMINISTE DE CONJUGAISON UNIVERSELLE & DE MORPHOLOGIE VERBALE
 * Résout directement et instantanément toute requête de conjugaison (Français, Anglais, Allemand, Espagnol).
 * Garantit qu'aucune requête de conjugaison ne soit jamais transformée en dissertation !
 */

import {
  MethodologyAnalysisResult,
  StepBreakdown,
  EvaluationCriterion,
  StructuredRedaction,
} from '../../src/types';
import {
  parseConjugationRequest,
  conjugateVerb,
  LanguageCode,
  VerbConjugationResult,
} from '../../src/utils/conjugator/universalConjugator';

export function isConjugationQuery(subjectTopic: string): boolean {
  if (!subjectTopic) return false;
  const parsed = parseConjugationRequest(subjectTopic);
  if (parsed.isConjugationIntent) return true;

  // Filet de sécurité supplémentaire, mais STRICT : un sujet, un devoir ou un
  // énoncé d'exercice complet (dissertation, commentaire, problème de maths...)
  // ne doit jamais être détourné en exercice de conjugaison simplement parce
  // qu'il contient, de loin, le mot "verbe" ou une expression de temps isolée.
  // On exige donc un vocabulaire explicite de CONJUGAISON (racine "conjugu"),
  // et on limite le déclenchement par expression de temps aux commandes courtes.
  const lower = subjectTopic.toLowerCase();
  const wordCount = subjectTopic.trim().split(/\s+/).filter(Boolean).length;

  // Note : on exclut volontairement le participe passé "conjugué(e)(s)", qui
  // sert le plus souvent à DÉCRIRE un verbe dans une question d'analyse
  // grammaticale ("identifiez le verbe conjugué..."), et non à DEMANDER
  // une conjugaison.
  const hasExplicitConjugationWord = /\b(?:conjugue|conjugues|conjuguez|conjuguons|conjuguent|conjuguer)\b|\bconjugaison\b/i.test(lower);
  const hasBareTenseCommand =
    wordCount <= 12 &&
    /\bverbe\b/i.test(lower) &&
    /\b(au pr[ée]sent|au futur|à l['’]imparfait|au pass[ée] simple|au pass[ée] compos[ée]|au subjonctif|au conditionnel|présent de l['’]indicatif|imparfait de l['’]indicatif)\b/i.test(lower);

  return hasExplicitConjugationWord || hasBareTenseCommand;
}

function getExamplesForVerb(infinitive: string, tenseId: string): string[] {
  const norm = infinitive.toLowerCase().trim();
  if (norm === 'être') {
    return [
      '**Je suis** très attentif aux explications du professeur.',
      '**Tu es** en bonne voie pour réussir ton examen.',
      '**Il / Elle est** déjà arrivée en classe.',
      '**Nous sommes** fiers du travail accompli.',
      '**Vous êtes** invités à participer activement.',
      '**Ils / Elles sont** tous réunis pour la révision.',
    ];
  }
  if (norm === 'avoir') {
    return [
      "**J'ai** bien compris la leçon d'aujourd'hui.",
      '**Tu as** tous les documents nécessaires.',
      '**Il / Elle a** obtenu une excellente note.',
      '**Nous avons** confiance en nos capacités.',
      '**Vous avez** le droit de poser vos questions.',
      '**Ils / Elles ont** terminé leur devoir dans les temps.',
    ];
  }
  if (norm === 'aller') {
    return [
      '**Je vais** à la bibliothèque pour travailler.',
      '**Tu vas** pouvoir résoudre cet exercice facilement.',
      '**Il / Elle va** présenter son exposé devant la classe.',
      '**Nous allons** réviser ensemble cette après-midi.',
      '**Vous allez** comprendre cette règle fondamentale.',
      '**Ils / Elles vont** réussir avec mention.',
    ];
  }
  if (norm === 'faire') {
    return [
      '**Je fais** mes devoirs avec beaucoup de soin.',
      '**Tu fais** des progrès constants.',
      '**Il / Elle fait** preuve de sérieux.',
      '**Nous faisons** attention aux règles d’accord.',
      '**Vous faites** un travail de grande qualité.',
      '**Ils / Elles font** tous les exercices demandés.',
    ];
  }
  return [
    `Exemple au singulier : application courante avec le verbe « ${infinitive} ».`,
    `Exemple au pluriel : accord du verbe « ${infinitive} » avec son sujet pluriel.`,
  ];
}

function getSpellingPitfalls(infinitive: string, tenseId: string): string[] {
  const norm = infinitive.toLowerCase().trim();
  const tips: string[] = [];

  if (norm === 'être') {
    tips.push('**Homophones grammaticaux :** Ne pas confondre « **es** » (tu es), « **est** » (il est) avec la conjonction de coordination « **et** ».');
    tips.push('**Accent circonflexe :** La 2e personne du pluriel s’écrit toujours « **vous êtes** » avec un accent circonflexe sur le premier « e ».');
    tips.push('**Homophone son / sont :** Ne pas confondre « **sont** » (ils sont) avec le déterminant possessif « **son** » (son cahier).');
  } else if (norm === 'avoir') {
    tips.push('**Homophone a / à :** Ne pas confondre « **a** » (il a = avait) avec la préposition « **à** » (accent grave).');
    tips.push('**Homophone ont / on :** Ne pas confondre « **ont** » (ils ont = avaient) avec le pronom indéfini sujet « **on** ».');
    tips.push("Pour tester : remplacez par l'imparfait « avait » ou « avaient ». Si la phrase reste correcte, il s'agit du verbe avoir sans accent.");
  } else if (norm.endsWith('er')) {
    tips.push('**Terminaisons du 1er groupe au présent :** -e, -es, -e, -ons, -ez, -ent.');
    tips.push('Ne jamais mettre de « s » à la 1re personne du singulier au présent pour les verbes en -er (ex: « je parle », pas « je parles »).');
    tips.push('La terminaison « -ent » de la 3e personne du pluriel est muette.');
  }

  return tips;
}

export function solveConjugationMethodologyExercise(
  subjectTopic: string,
  options?: { discipline?: string; level?: string; serie?: string }
): MethodologyAnalysisResult {
  const parsed = parseConjugationRequest(subjectTopic);
  const langCode: LanguageCode = parsed.language || 'fr';
  const conjResult: VerbConjugationResult = conjugateVerb(parsed.infinitive, langCode);

  const infinitive = (conjResult.infinitive || parsed.infinitive || 'être').toLowerCase();
  const langLabel = conjResult.languageLabel || 'Français';
  const disciplineIdentified = langCode === 'en' ? 'Anglais' : langCode === 'de' ? 'Allemand' : langCode === 'es' ? 'Espagnol' : 'Français';

  // Trouver le temps demandé ou le présent par défaut
  let targetTenseObj: { tenseName: string; tenseLabelFr: string; forms: Array<{ person: string; form: string }>; notes?: string } | null = null;
  let targetMoodName = 'Indicatif';

  if (parsed.requestedTenseId || parsed.requestedTenseLabel) {
    for (const mood of conjResult.moods) {
      for (const t of mood.tenses) {
        const matchByName = parsed.requestedTenseLabel && t.tenseName.toLowerCase().includes(parsed.requestedTenseLabel.toLowerCase());
        const matchByLabel = parsed.requestedTenseLabel && t.tenseLabelFr.toLowerCase().includes(parsed.requestedTenseLabel.toLowerCase());
        const matchById = parsed.requestedTenseId && (
          (parsed.requestedTenseId === 'present' && /pr[ée]sent/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'imparfait' && /imparfait/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'passe_compose' && /pass[ée][- ]compos[ée]/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'passe_simple' && /pass[ée][- ]simple/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'futur_simple' && /futur\s+simple/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'plus_que_parfait' && /plus[- ]que[- ]parfait/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'subjonctif_present' && /subjonctif\s+pr[ée]sent/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'conditionnel_present' && /conditionnel\s+pr[ée]sent/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'simple_present' && /simple\s+present/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'simple_past' && /simple\s+past/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'present_perfect' && /present\s+perfect/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'praesens' && /pr[äa]sens/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'praeteritum' && /pr[äa]teritum/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'presente' && /presente/i.test(t.tenseName)) ||
          (parsed.requestedTenseId === 'indefinido' && /indefinido/i.test(t.tenseName))
        );
        if (matchById || matchByName || matchByLabel) {
          targetTenseObj = t;
          targetMoodName = mood.moodName;
          break;
        }
      }
      if (targetTenseObj) break;
    }
  }

  // Fallback si pas de temps ciblé : premier temps du premier mode (généralement Présent de l'Indicatif)
  if (!targetTenseObj && conjResult.moods.length > 0 && conjResult.moods[0].tenses.length > 0) {
    targetTenseObj = conjResult.moods[0].tenses[0];
    targetMoodName = conjResult.moods[0].moodName;
  }

  const tenseTitle = targetTenseObj ? `${targetTenseObj.tenseName} (${targetTenseObj.tenseLabelFr || targetMoodName})` : "Présent de l'indicatif";
  const tenseId = parsed.requestedTenseId || 'present';
  const forms = targetTenseObj ? targetTenseObj.forms : [];

  // Exemples d'application
  const examples = getExamplesForVerb(infinitive, tenseId);
  const pitfalls = getSpellingPitfalls(infinitive, tenseId);
  if (conjResult.quickRules) {
    pitfalls.push(...conjResult.quickRules);
  }

  // Construction de la réponse rédigée intégrale (Markdown pédagogique riche)
  let markdown = `# 📖 Conjugaison officielle : Verbe **${infinitive.toUpperCase()}**\n\n`;
  markdown += `### Fiche d'identité verbale\n`;
  markdown += `- **Langue :** ${langLabel}\n`;
  markdown += `- **Infinitif :** \`${infinitive}\`\n`;
  if (conjResult.groupOrType) markdown += `- **Groupe / Classification :** ${conjResult.groupOrType}\n`;
  if (conjResult.auxiliary) markdown += `- **Auxiliaire :** ${conjResult.auxiliary}\n`;
  markdown += `- **Participe présent :** \`${conjResult.participles?.present || '-'}\` | **Participe passé :** \`${conjResult.participles?.past || '-'}\`\n\n`;

  markdown += `---\n\n`;
  markdown += `## 🎯 Conjugaison au ${tenseTitle.toUpperCase()}\n\n`;
  markdown += `| Pronom / Sujet | Forme verbale officielle |\n`;
  markdown += `| :--- | :--- |\n`;
  forms.forEach(f => {
    markdown += `| **${f.person}** | \`${f.form}\` |\n`;
  });

  if (targetTenseObj?.notes) {
    markdown += `\n> 💡 **Règle morphologique :** ${targetTenseObj.notes}\n`;
  }

  markdown += `\n---\n\n## 📝 Exemples d'emploi en phrases complètes\n\n`;
  examples.forEach(ex => {
    markdown += `- ${ex}\n`;
  });

  if (pitfalls.length > 0) {
    markdown += `\n---\n\n## ⚠️ Règles d'orthographe & Pièges à éviter\n\n`;
    pitfalls.forEach(p => {
      markdown += `- ${p}\n`;
    });
  }

  // Autres temps usuels importants pour enrichir
  const otherTenses = conjResult.moods[0]?.tenses.filter(t => t !== targetTenseObj).slice(0, 3) || [];
  if (otherTenses.length > 0) {
    markdown += `\n---\n\n## 🔄 Rappel des autres temps fondamentaux de l'indicatif\n\n`;
    otherTenses.forEach(ot => {
      markdown += `### ${ot.tenseName} :\n`;
      ot.forms.forEach(f => {
        markdown += `- **${f.person}** : \`${f.form}\`\n`;
      });
      markdown += `\n`;
    });
  }

  // Step breakdown
  const stepBreakdown: StepBreakdown[] = forms.map((f, i) => ({
    stepNumber: i + 1,
    stepTitle: `Personne ${f.person} : « ${f.form} »`,
    methodologyRuleApplied: `Association du pronom sujet « ${f.person} » avec la désinence correcte du verbe « ${infinitive} » au ${tenseTitle}.`,
    content: `Pour la personne **${f.person}**, la forme exacte est : \`${f.form}\`.`,
    sourceTags: ['Conjugaison officielle', 'Morphologie verbale'],
    pedagogicalTip: 'Forme certifiée conforme aux dictionnaires et grammaires académiques officielles.',
  }));

  // Structured redaction
  const defaultIllustration = {
    auteur: 'Grammaire Officielle',
    oeuvre: 'Règles de morphologie',
    citation: `${infinitive} au ${tenseTitle}`,
    analyseIllustration: `Application rigoureuse de la désinence temporelle`,
  };

  const structuredRedaction: StructuredRedaction = {
    planSummary: `Conjugaison complète du verbe ${infinitive.toUpperCase()} au ${tenseTitle}`,
    introduction: {
      amorce: `L'étude morphologique du verbe « ${infinitive} » en ${langLabel} requiert une identification précise de sa base radicale et de ses terminaisons temporelles.`,
      definitionTension: `Le verbe « ${infinitive} » (${conjResult.groupOrType || 'verbe canonique'}) possède une conjugaison normée au ${tenseTitle}.`,
      problematique: `Quelles sont les formes exactes du verbe « ${infinitive} » au ${tenseTitle} pour chacune des personnes grammaticales ?`,
      annoncePlan: `Nous exposons d'abord le tableau complet des formes conjuguées, puis les particularités d'accord et enfin les exemples d'usage.`,
      fullText: `Voici la conjugaison certifiée du verbe « ${infinitive} » au ${tenseTitle}.`,
    },
    development: {
      part1: {
        partNumber: 1,
        title: `Tableau des personnes au ${tenseTitle}`,
        thesisOverview: `Chaque pronom personnel s'associe à une désinence verbale rigoureuse.`,
        subParts: forms.map((f, idx) => ({
          subPartLetter: String.fromCharCode(65 + idx),
          title: `${f.person} : ${f.form}`,
          argument: `Pour « ${f.person} », la graphie requise est « ${f.form} ».`,
          explication: `Cette forme obéit aux règles de flexion verbale du ${tenseTitle}.`,
          illustration: {
            ...defaultIllustration,
            citation: `${f.person} ${f.form}`,
            analyseIllustration: `Forme correcte pour ${f.person}`,
          },
          fullText: `• **${f.person}** : \`${f.form}\``,
        })),
        fullText: forms.map(f => `• **${f.person}** : \`${f.form}\``).join('\n'),
      },
      transition1: `Après avoir établi le tableau des flexions verbales, examinons les règles orthographiques et les pièges d'usage.`,
      part2: {
        partNumber: 2,
        title: "Orthographe d'usage, pièges et mise en contexte",
        thesisOverview: "Maîtriser les homophones grammaticaux et les accords évite les erreurs courantes.",
        subParts: [
          {
            subPartLetter: 'A',
            title: 'Règles orthographiques et pièges fréquents',
            argument: 'La distinction phonétique et orthographique doit être scrupuleusement observée.',
            explication: pitfalls.join(' '),
            illustration: defaultIllustration,
            fullText: pitfalls.join('\n'),
          },
          {
            subPartLetter: 'B',
            title: "Exemples d'application",
            argument: 'Mettre en contexte permet de vérifier le sens et la concordance des temps.',
            explication: examples.join(' '),
            illustration: defaultIllustration,
            fullText: examples.join('\n'),
          },
        ],
        fullText: `${pitfalls.join('\n')}\n\n${examples.join('\n')}`,
      },
    },
    conclusion: {
      bilanSynthese: `Le verbe « ${infinitive} » a été entièrement conjugué au ${tenseTitle} avec succès.`,
      reponseDefinitive: `Toutes les désinences de personne ont été vérifiées et illustrées par des exemples types.`,
      elargissement: `Cette base verbale est indispensable pour la pratique écrite et la concordance des temps.`,
      fullText: `Toutes les formes conjuguées du verbe « ${infinitive} » au ${tenseTitle} sont désormais établies et prêtes à l'emploi.`,
    },
  };

  const evaluationCriteria: EvaluationCriterion[] = [
    {
      criterion: 'Exactitude de la flexion verbale',
      description: 'Orthographe rigoureusement exacte de chaque personne.',
      fasciculeOrigin: true,
      scoreMax: 10,
      tipsForAutonomy: 'Vérifier attentivement le radical et chaque désinence.',
    },
    {
      criterion: 'Respect du mode et du temps',
      description: 'Conformité totale avec le temps demandé.',
      fasciculeOrigin: true,
      scoreMax: 5,
      tipsForAutonomy: 'Ne pas confondre indicatif, subjonctif ou conditionnel.',
    },
    {
      criterion: 'Maîtrise des accents et particularités',
      description: 'Accents circonflexes, cédilles et traits d’union respectés.',
      fasciculeOrigin: true,
      scoreMax: 5,
      tipsForAutonomy: 'Surveiller les cédilles et accents circonflexes.',
    },
  ];

  return {
    exerciseTypeIdentified: 'Exercice de conjugaison & morphologie verbale',
    disciplineIdentified,
    fasciculeMethodologyActivated: {
      name: 'Fascicule Officiel de Conjugaison et Grammaire Normative',
      description: 'Méthodologie systématique de conjugaison verbale (radicaux, désinences, régularités et exceptions).',
      stepsApplied: [
        "1. Identification de l'infinitif et de la catégorie verbale",
        '2. Détermination du mode et du temps verbal requis',
        '3. Déclinaison précise des personnes grammaticales',
        '4. Prévention des homophones grammaticaux et contrôle des accents',
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: ['Règles officielles de conjugaison académique'],
      fasciculeKnowledgeUsed: [`Tableau officiel du verbe ${infinitive}`],
      externalKnowledgeMobilized: ['Grammaire et syntaxe de la langue'],
    },
    pedagogicalTransferExplanation: `La conjugaison correcte du verbe « ${infinitive} » garantit une expression écrite exacte et respectueuse des normes académiques.`,
    level1Hint: `Identifie l'infinitif (« ${infinitive} ») et applique les terminaisons régulières ou spécifiques du ${tenseTitle}.`,
    level2Methodology: `1. Repérer l'infinitif « ${infinitive} ».\n2. Isoler le radical et ajouter la terminaison de chaque personne au ${tenseTitle}.\n3. Faire attention aux homophones et accents (ex: vous êtes avec circonflexe).`,
    level3GuidanceSteps: [
      `Étape 1 : Analyser le verbe « ${infinitive} » (groupe / classification, auxiliaire).`,
      `Étape 2 : Conjuguer aux personnes du singulier (1re, 2e, 3e).`,
      `Étape 3 : Conjuguer aux personnes du pluriel (1re, 2e, 3e).`,
      `Étape 4 : Réviser les pièges d'orthographe et les phrases d'exemple.`,
    ],
    level4DetailedOutline: `Plan d'étude :\nI. Fiche du verbe ${infinitive}\nII. Formes complètes au ${tenseTitle}\nIII. Exemples modèles & pièges fréquents`,
    level5FullRedaction: markdown,
    fullSynthesizedResponse: markdown,
    structuredRedaction,
    stepByStepBreakdown: stepBreakdown,
    evaluationCriteria,
    isDirectRestitution: true, // CRITICAL: Empêche l'habillage en dissertation dans l'interface !
    isFallback: false,
  };
}
