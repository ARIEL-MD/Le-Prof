import { VerbConjugationResult, PersonConjugation, TenseConjugation, MoodGroup } from './types';

interface EnglishIrregular {
  base: string;
  past: string;
  pastParticiple: string;
  french: string;
}

const ENGLISH_IRREGULARS: Record<string, EnglishIrregular> = {
  be: { base: 'be', past: 'was/were', pastParticiple: 'been', french: 'être' },
  have: { base: 'have', past: 'had', pastParticiple: 'had', french: 'avoir' },
  do: { base: 'do', past: 'did', pastParticiple: 'done', french: 'faire' },
  go: { base: 'go', past: 'went', pastParticiple: 'gone', french: 'aller' },
  say: { base: 'say', past: 'said', pastParticiple: 'said', french: 'dire' },
  get: { base: 'get', past: 'got', pastParticiple: 'got / gotten', french: 'obtenir, devenir' },
  make: { base: 'make', past: 'made', pastParticiple: 'made', french: 'fabriquer, faire' },
  know: { base: 'know', past: 'knew', pastParticiple: 'known', french: 'savoir, connaître' },
  think: { base: 'think', past: 'thought', pastParticiple: 'thought', french: 'penser' },
  take: { base: 'take', past: 'took', pastParticiple: 'taken', french: 'prendre' },
  see: { base: 'see', past: 'saw', pastParticiple: 'seen', french: 'voir' },
  come: { base: 'come', past: 'came', pastParticiple: 'come', french: 'venir' },
  want: { base: 'want', past: 'wanted', pastParticiple: 'wanted', french: 'vouloir' },
  give: { base: 'give', past: 'gave', pastParticiple: 'given', french: 'donner' },
  find: { base: 'find', past: 'found', pastParticiple: 'found', french: 'trouver' },
  tell: { base: 'tell', past: 'told', pastParticiple: 'told', french: 'raconter, dire' },
  speak: { base: 'speak', past: 'spoke', pastParticiple: 'spoken', french: 'parler' },
  write: { base: 'write', past: 'wrote', pastParticiple: 'written', french: 'écrire' },
  read: { base: 'read', past: 'read', pastParticiple: 'read', french: 'lire' },
  break: { base: 'break', past: 'broke', pastParticiple: 'broken', french: 'casser, briser' },
  choose: { base: 'choose', past: 'chose', pastParticiple: 'chosen', french: 'choisir' },
  drive: { base: 'drive', past: 'drove', pastParticiple: 'driven', french: 'conduire' },
  eat: { base: 'eat', past: 'ate', pastParticiple: 'eaten', french: 'manger' },
  fall: { base: 'fall', past: 'fell', pastParticiple: 'fallen', french: 'tomber' },
  feel: { base: 'feel', past: 'felt', pastParticiple: 'felt', french: 'ressentir, éprouver' },
  fly: { base: 'fly', past: 'flew', pastParticiple: 'flown', french: 'voler (air)' },
  forget: { base: 'forget', past: 'forgot', pastParticiple: 'forgotten', french: 'oublier' },
  hear: { base: 'hear', past: 'heard', pastParticiple: 'heard', french: 'entendre' },
  keep: { base: 'keep', past: 'kept', pastParticiple: 'kept', french: 'garder' },
  leave: { base: 'leave', past: 'left', pastParticiple: 'left', french: 'quitter, partir' },
  lose: { base: 'lose', past: 'lost', pastParticiple: 'lost', french: 'perdre' },
  meet: { base: 'meet', past: 'met', pastParticiple: 'met', french: 'rencontrer' },
  pay: { base: 'pay', past: 'paid', pastParticiple: 'paid', french: 'payer' },
  run: { base: 'run', past: 'ran', pastParticiple: 'run', french: 'courir' },
  send: { base: 'send', past: 'sent', pastParticiple: 'sent', french: 'envoyer' },
  sing: { base: 'sing', past: 'sang', pastParticiple: 'sung', french: 'chanter' },
  sleep: { base: 'sleep', past: 'slept', pastParticiple: 'slept', french: 'dormir' },
  stand: { base: 'stand', past: 'stood', pastParticiple: 'stood', french: 'être debout' },
  swim: { base: 'swim', past: 'swam', pastParticiple: 'swum', french: 'nager' },
  teach: { base: 'teach', past: 'taught', pastParticiple: 'taught', french: 'enseigner' },
  understand: { base: 'understand', past: 'understood', pastParticiple: 'understood', french: 'comprendre' },
  wear: { base: 'wear', past: 'wore', pastParticiple: 'worn', french: 'porter (vêtements)' },
  win: { base: 'win', past: 'won', pastParticiple: 'won', french: 'gagner' },
  buy: { base: 'buy', past: 'bought', pastParticiple: 'bought', french: 'acheter' },
  bring: { base: 'bring', past: 'brought', pastParticiple: 'brought', french: 'apporter' },
  catch: { base: 'catch', past: 'caught', pastParticiple: 'caught', french: 'attraper' },
  build: { base: 'build', past: 'built', pastParticiple: 'built', french: 'construire' },
  begin: { base: 'begin', past: 'began', pastParticiple: 'begun', french: 'commencer' }
};

const PERSONS_EN = ['I', 'You', 'He / She / It', 'We', 'They'];

export function conjugateEnglishVerb(rawVerb: string): VerbConjugationResult {
  const base = rawVerb.trim().toLowerCase().replace(/^to\s+/, '');
  const isBe = base === 'be';
  const irregular = ENGLISH_IRREGULARS[base];

  // Déterminer les 3 formes principales (Base, Past simple, Past participle)
  let pastSimple = '';
  let pastParticiple = '';
  let isIrregular = false;

  if (irregular) {
    pastSimple = irregular.past;
    pastParticiple = irregular.pastParticiple;
    isIrregular = true;
  } else {
    // Règle régulière pour le passé en -ed
    if (base.endsWith('e')) {
      pastSimple = `${base}d`;
      pastParticiple = `${base}d`;
    } else if (base.endsWith('y') && !/[aeiou]y$/.test(base)) {
      pastSimple = `${base.slice(0, -1)}ied`;
      pastParticiple = `${base.slice(0, -1)}ied`;
    } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bcdfghjklmnpqrstvz]$/.test(base) && base.length <= 4) {
      const lastChar = base.slice(-1);
      pastSimple = `${base}${lastChar}ed`;
      pastParticiple = `${base}${lastChar}ed`;
    } else {
      pastSimple = `${base}ed`;
      pastParticiple = `${base}ed`;
    }
  }

  // Gérondif / Participe présent (-ing)
  let presentParticiple = `${base}ing`;
  if (base.endsWith('ie')) {
    presentParticiple = `${base.slice(0, -2)}ying`;
  } else if (base.endsWith('e') && !base.endsWith('ee') && base !== 'be') {
    presentParticiple = `${base.slice(0, -1)}ing`;
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bcdfghjklmnpqrstvz]$/.test(base) && base.length <= 4) {
    const lastChar = base.slice(-1);
    presentParticiple = `${base}${lastChar}ing`;
  }

  // 3e personne du singulier au Présent Simple (he / she / it)
  let thirdPersonPres = `${base}s`;
  if (isBe) {
    thirdPersonPres = 'is';
  } else if (base === 'have') {
    thirdPersonPres = 'has';
  } else if (base === 'do') {
    thirdPersonPres = 'does';
  } else if (base === 'go') {
    thirdPersonPres = 'goes';
  } else if (/(s|ss|sh|ch|x|z|o)$/.test(base)) {
    thirdPersonPres = `${base}es`;
  } else if (base.endsWith('y') && !/[aeiou]y$/.test(base)) {
    thirdPersonPres = `${base.slice(0, -1)}ies`;
  }

  // 1. Present Simple
  const presForms: PersonConjugation[] = isBe
    ? [
        { person: 'I', form: 'am' },
        { person: 'You', form: 'are' },
        { person: 'He / She / It', form: 'is' },
        { person: 'We', form: 'are' },
        { person: 'They', form: 'are' }
      ]
    : [
        { person: 'I', form: base },
        { person: 'You', form: base },
        { person: 'He / She / It', form: thirdPersonPres },
        { person: 'We', form: base },
        { person: 'They', form: base }
      ];

  // 2. Present Continuous (am/is/are + -ing)
  const presContForms: PersonConjugation[] = [
    { person: 'I', form: `am ${presentParticiple}` },
    { person: 'You', form: `are ${presentParticiple}` },
    { person: 'He / She / It', form: `is ${presentParticiple}` },
    { person: 'We', form: `are ${presentParticiple}` },
    { person: 'They', form: `are ${presentParticiple}` }
  ];

  // 3. Past Simple
  const pastForms: PersonConjugation[] = isBe
    ? [
        { person: 'I', form: 'was' },
        { person: 'You', form: 'were' },
        { person: 'He / She / It', form: 'was' },
        { person: 'We', form: 'were' },
        { person: 'They', form: 'were' }
      ]
    : PERSONS_EN.map(p => ({ person: p, form: pastSimple }));

  // 4. Past Continuous (was/were + -ing)
  const pastContForms: PersonConjugation[] = [
    { person: 'I', form: `was ${presentParticiple}` },
    { person: 'You', form: `were ${presentParticiple}` },
    { person: 'He / She / It', form: `was ${presentParticiple}` },
    { person: 'We', form: `were ${presentParticiple}` },
    { person: 'They', form: `were ${presentParticiple}` }
  ];

  // 5. Present Perfect Simple (have/has + past participle)
  const presPerfForms: PersonConjugation[] = [
    { person: 'I', form: `have ${pastParticiple}` },
    { person: 'You', form: `have ${pastParticiple}` },
    { person: 'He / She / It', form: `has ${pastParticiple}` },
    { person: 'We', form: `have ${pastParticiple}` },
    { person: 'They', form: `have ${pastParticiple}` }
  ];

  // 6. Present Perfect Continuous (have/has been + -ing)
  const presPerfContForms: PersonConjugation[] = [
    { person: 'I', form: `have been ${presentParticiple}` },
    { person: 'You', form: `have been ${presentParticiple}` },
    { person: 'He / She / It', form: `has been ${presentParticiple}` },
    { person: 'We', form: `have been ${presentParticiple}` },
    { person: 'They', form: `have been ${presentParticiple}` }
  ];

  // 7. Past Perfect Simple (had + past participle)
  const pastPerfForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `had ${pastParticiple}`
  }));

  // 8. Future Simple (will + base)
  const futSimpleForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `will ${base}`
  }));

  // 9. Future Continuous (will be + -ing)
  const futContForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `will be ${presentParticiple}`
  }));

  // 10. Future Perfect (will have + past participle)
  const futPerfForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `will have ${pastParticiple}`
  }));

  // 11. Conditional Simple (would + base)
  const condSimpleForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `would ${base}`
  }));

  // 12. Conditional Perfect (would have + past participle)
  const condPerfForms: PersonConjugation[] = PERSONS_EN.map(p => ({
    person: p,
    form: `would have ${pastParticiple}`
  }));

  const moods: MoodGroup[] = [
    {
      moodName: 'Present Tenses',
      tenses: [
        { tenseName: 'Present Simple', tenseLabelFr: 'Présent simple (habitudes, vérités)', forms: presForms },
        { tenseName: 'Present Continuous', tenseLabelFr: 'Présent continu (action en cours)', forms: presContForms },
        { tenseName: 'Present Perfect Simple', tenseLabelFr: 'Present Perfect simple (bilan / depuis)', forms: presPerfForms },
        { tenseName: 'Present Perfect Continuous', tenseLabelFr: 'Present Perfect continu (durée active)', forms: presPerfContForms }
      ]
    },
    {
      moodName: 'Past Tenses',
      tenses: [
        { tenseName: 'Past Simple', tenseLabelFr: 'Prétérit / Passé simple (action révolue et datée)', forms: pastForms },
        { tenseName: 'Past Continuous', tenseLabelFr: 'Passé continu (action en cours dans le passé)', forms: pastContForms },
        { tenseName: 'Past Perfect Simple', tenseLabelFr: 'Pluperfect / Plus-que-parfait (antériorité dans le passé)', forms: pastPerfForms }
      ]
    },
    {
      moodName: 'Future & Conditional',
      tenses: [
        { tenseName: 'Future Simple (will)', tenseLabelFr: 'Futur simple (décision spontanée, prédiction)', forms: futSimpleForms },
        { tenseName: 'Future Continuous', tenseLabelFr: 'Futur continu (action en cours dans le futur)', forms: futContForms },
        { tenseName: 'Future Perfect', tenseLabelFr: 'Futur antérieur (action achevée avant une date)', forms: futPerfForms },
        { tenseName: 'Conditional Simple (would)', tenseLabelFr: 'Conditionnel présent (hypothèse)', forms: condSimpleForms },
        { tenseName: 'Conditional Perfect (would have)', tenseLabelFr: 'Conditionnel passé (regret / hypothèse passée)', forms: condPerfForms }
      ]
    },
    {
      moodName: 'Imperative & Non-Finite Forms',
      tenses: [
        {
          tenseName: 'Imperative',
          tenseLabelFr: 'Impératif (Ordre & Défense)',
          forms: [
            { person: 'Affirmative', form: `${base.charAt(0).toUpperCase() + base.slice(1)}!` },
            { person: 'Negative', form: `Don't ${base}!` }
          ]
        }
      ]
    }
  ];

  return {
    verb: base,
    language: 'en',
    languageLabel: 'Anglais (English)',
    infinitive: `to ${base}`,
    translationFr: irregular?.french,
    groupOrType: isIrregular ? 'Verbe irrégulier (Irregular verb)' : 'Verbe régulier (Regular verb, terminaison en -ed)',
    participles: {
      present: presentParticiple,
      past: pastParticiple
    },
    moods,
    quickRules: [
      `Base Form : ${base} | Past Simple : ${pastSimple} | Past Participle : ${pastParticiple}`,
      isIrregular
        ? `Attention : verbe irrégulier essentiel. Les 3 formes doivent être mémorisées sans faute.`
        : `Verbe régulier : ajout de -ed au Past Simple et au Past Participle.`
    ]
  };
}
