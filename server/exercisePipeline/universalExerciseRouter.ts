export type ExerciseFamily =
  | 'mathematiques'
  | 'physique_chimie'
  | 'svt'
  | 'francais'
  | 'philosophie'
  | 'histoire_geographie'
  | 'anglais'
  | 'espagnol'
  | 'allemand'
  | 'edhc'
  | 'informatique'
  | 'economie_gestion'
  | 'autre';

export type ExerciseTask =
  | 'calcul'
  | 'demonstration'
  | 'resolution'
  | 'correction'
  | 'analyse'
  | 'redaction'
  | 'traduction'
  | 'question_cours'
  | 'qcm'
  | 'vrai_faux'
  | 'graphique_tableau'
  | 'unknown';

export interface UniversalExerciseRoute {
  family: ExerciseFamily;
  task: ExerciseTask;
  confidence: 'high' | 'medium' | 'low';
  signals: string[];
  allowedFallbacks: ExerciseFamily[];
  dissertationType?: 'francais' | 'philosophie';
}

const EXPLICIT_DISCIPLINE_RULES: Array<[ExerciseFamily, RegExp]> = [
  ['mathematiques', /^(?:math(?:ématiques|ématiques)?|maths|mathematics)$/i],
  ['physique_chimie', /^(?:physique(?:-chimie| chimie)?|physique|chimie|pc)$/i],
  ['svt', /^(?:svt|s\.?v\.?t\.?|sciences? de la vie(?: et de la terre)?)$/i],
  ['francais', /^(?:français|francais|lettres)$/i],
  ['philosophie', /^philosophie$/i],
  ['histoire_geographie', /^(?:histoire(?:-géographie| géographie)?|histoire|géographie|geographie|hg)$/i],
  ['anglais', /^(?:anglais|english)$/i],
  ['espagnol', /^(?:espagnol|español|castillan|castellano)$/i],
  ['allemand', /^(?:allemand|deutsch)$/i],
  ['edhc', /^(?:edhc|éducation aux droits de l'homme et à la citoyenneté)$/i],
  ['informatique', /^(?:informatique|numérique|tic|technologies? de l'information(?: et de la communication)?)$/i],
  ['economie_gestion', /^(?:économie(?:-gestion| gestion)?|economie(?:-gestion| gestion)?|gestion|comptabilité|comptabilite)$/i],
];

const FAMILY_RULES: Array<[ExerciseFamily, RegExp, string]> = [
  ['physique_chimie', /physique|chimie|force|vitesse|acc[ée]l[ée]ration|[ée]nergie|tension|intensit[ée]|r[ée]sistance|ohm|r[ée]action|mole|concentration|\bpH\b|oxyd|r[ée]duct|cin[ée]matique|mouvement/i, 'vocabulaire scientifique physique-chimie'],
  ['svt', /svt|biologie|cellule|g[ée]n[ée]tique|adn|chromosome|mitose|m[ée]iose|immun|digestion|respiration|photosynth[èe]se|[ée]cosyst[èe]me|reproduction|hormone|sang|neurone/i, 'vocabulaire sciences de la vie'],
  ['francais', /fran[çc]ais|grammaire|conjugaison|orthographe|dict[ée]e|r[ée]sum[ée]|commentaire|dissertation|versification|po[ée]sie|roman|th[ée]âtre|figure de style|texte/i, 'vocabulaire français'],
  ['edhc', /edhc|droits de l'homme|citoyennet[ée]|constitution|d[ée]mocratie|civisme|devoir civique/i, 'éducation aux droits et à la citoyenneté'],
  ['philosophie', /philosoph|conscience|inconscient|libert[ée]|v[ée]rit[ée]|raison|bonheur|devoir|justice|autrui|d[ée]sir|travail|technique|nature|culture|morale|responsabilit[ée]|existence/i, 'notion philosophique'],
  ['histoire_geographie', /histoire|g[ée]ographie|guerre mondiale|guerre froide|colonisation|d[ée]colonisation|ind[ée]pendance|population|climat|relief|urbanisation|mondialisation|carte|croquis|dissertation historique/i, 'vocabulaire histoire-géographie'],
  ['anglais', /anglais|english|translate into english|traduire en anglais|present perfect|past simple|reported speech|conditional/i, 'marqueur anglais'],
  ['espagnol', /espagnol|espa[ñn]ol|castellano|traduire en espagnol|subjuntivo|pretérito/i, 'marqueur espagnol'],
  ['allemand', /allemand|deutsch|traduire en allemand|konjunktiv|akkusativ|dativ/i, 'marqueur allemand'],
  ['informatique', /informatique|algorithm|algorithme|python|javascript|programmation|base de donn[ée]es|r[ée]seau|codage|binaire/i, 'vocabulaire informatique'],
  ['economie_gestion', /[ée]conomie|gestion|comptabilit[ée]|march[ée]|offre et demande|co[uû]t|profit|bilan comptable|journal comptable/i, 'vocabulaire économie-gestion'],
  ['mathematiques', /math|math[ée]matiques|[ée]quation|fonction|d[ée]riv[ée]e|int[ée]grale|probabilit[ée]|statistique|matrice|suite|g[ée]om[ée]trie|triangle|vecteur|calculer|factoriser|discriminant|résoudre\s+.*(?:=|x²|x\^2|équation)|x²|x\^2/i, 'vocabulaire mathématique'],
];

const TASK_RULES: Array<[ExerciseTask, RegExp]> = [
  ['correction', /corrig[ée]r|correction|corrige cet exercice|corrige mon devoir/i],
  ['traduction', /traduire|traduction|translate|translation/i],
  ['qcm', /qcm|choisir la bonne r[ée]ponse|une seule r[ée]ponse|plusieurs r[ée]ponses/i],
  ['vrai_faux', /vrai\s*\/\s*faux|vrai ou faux|juste ou faux/i],
  ['demonstration' as ExerciseTask, /d[ée]montrer|d[ée]monstration|prouver|preuve|justifier que/i],
  ['resolution' as ExerciseTask, /r[ée]soudre|solution|trouver x|d[ée]terminer/i],
  ['calcul', /calculer|calcule|effectuer|d[ée]terminer la valeur|combien/i],
  ['redaction', /r[ée]diger|r[ée]daction|dissertation|commentaire|composition|synth[èe]se/i],
  ['graphique_tableau', /graphique|courbe|tableau|diagramme|histogramme|repr[ée]senter/i],
  ['analyse', /analys(?:er|e|ez)|interpr[ée]ter|expliqu(?:er|e|ez)|commenter|[ée]tudi(?:er|e|ez)/i],
  ['question_cours', /d[ée]finir|d[ée]finition|citer|donner les causes|donner les cons[ée]quences|caract[ée]ristiques|expliquer le cours|rappeler/i],
];

export function routeUniversalExercise(text: string, explicitDiscipline?: string): UniversalExerciseRoute {
  const q = String(text || '').trim();
  const signals: string[] = [];
  const explicit = String(explicitDiscipline || '').toLowerCase();

  // Sous-type dissertation : on le calcule avant la famille générique afin que
  // « devoir de philosophie/français » ne soit pas traité comme un simple
  // exercice de rédaction. Le détail du sujet reste géré par les moteurs spécialisés.
  const normalized = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const explicitPhilo = /\bphilosophie\b|\bphilo\b/.test(explicit) || /\b(?:devoir|sujet|dissertation)\s+(?:de\s+)?philosophie\b/.test(normalized);
  const explicitFrancais = /\bfrancais\b|\blettres\b/.test(explicit) || /\b(?:devoir|sujet|dissertation)\s+(?:de\s+)?(?:francais|litteraire|lettres?)\b/.test(normalized);
  const philoMarker = /\b(?:philosoph(?:ie|ique)?|conscience|inconscient|liberte|verite|justice|raison|bonheur|autrui|devoir|morale?|desir|travail|technique|nature|culture|religion|langage|existence|temps)\b/.test(normalized);
  const frMarker = /\b(?:francais|litterature|roman|romanesque|poesie|poeme|poete|theatre|dramaturge|piece|comedie|tragedie|vers|oeuvre|auteur|narrateur|personnage)\b/.test(normalized);
  const hasDissertation = /\b(?:dissertation|dissert(?:ation)?|devoir.*dissertation|sujet de dissertation)\b/.test(normalized);
  const questionLike = /\?|\b(?:peut[- ]on|doit[- ]on|faut[- ]il|est[- ]il|est[- ]elle|dans quelle mesure|en quoi|pensez[- ]vous|selon vous|discuter)\b/.test(normalized);
  let dissertationType: 'francais' | 'philosophie' | undefined;
  if (hasDissertation || (questionLike && (explicitPhilo || explicitFrancais || frMarker || philoMarker))) {
    const literaryGenre = /\b(?:roman|romanesque|poesie|poeme|poete|theatre|dramaturge|piece|comedie|tragedie|vers|lyrisme)\b/.test(normalized);
    if (explicitPhilo) dissertationType = 'philosophie';
    else if (explicitFrancais || literaryGenre) dissertationType = 'francais';
    else if (philoMarker) dissertationType = 'philosophie';
  }
  let family: ExerciseFamily = 'autre';
  let confidence: UniversalExerciseRoute['confidence'] = 'low';

  // Une discipline explicitement fournie est prioritaire sur tout indice lexical.
  // Cela évite qu'un mot présent dans le nom d'une matière (ex. "ph" dans
  // "philosophie" ou "géographie") déclenche une autre matière.
  const explicitRule = EXPLICIT_DISCIPLINE_RULES.find(([, re]) => re.test(explicit.trim()));
  if (explicitRule) {
    family = explicitRule[0];
    signals.push('discipline explicitement fournie');
    confidence = 'high';
  } else {
    for (const [candidate, re, signal] of FAMILY_RULES) {
      if (re.test(q)) {
        family = candidate;
        signals.push(signal);
        confidence = 'medium';
        break;
      }
    }
  }

  let task: ExerciseTask = 'unknown';
  for (const [candidate, re] of TASK_RULES) {
    if (re.test(q)) { task = candidate; break; }
  }

  const allowedFallbacks: ExerciseFamily[] = family === 'autre' ? [] : [family];
  if (dissertationType) {
    family = dissertationType === 'philosophie' ? 'philosophie' : 'francais';
    task = 'redaction';
    confidence = 'high';
    signals.push(`dissertation ${dissertationType}`);
  }

  return { family, task, confidence, signals, allowedFallbacks, dissertationType };
}
