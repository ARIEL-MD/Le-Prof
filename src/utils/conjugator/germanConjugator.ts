import { VerbConjugationResult, PersonConjugation, TenseConjugation, MoodGroup } from './types';

interface GermanVerbData {
  infinitive: string;
  auxiliary: 'haben' | 'sein';
  type: string;
  praesens: [string, string, string, string, string, string];
  praeteritum: [string, string, string, string, string, string];
  partizip2: string;
  konjunktiv2?: [string, string, string, string, string, string];
  french: string;
}

const GERMAN_KNOWN_VERBS: Record<string, GermanVerbData> = {
  sein: {
    infinitive: 'sein',
    auxiliary: 'sein',
    type: 'Hilfsverb (Auxiliaire irrégulier)',
    praesens: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
    praeteritum: ['war', 'warst', 'war', 'waren', 'wart', 'waren'],
    partizip2: 'gewesen',
    konjunktiv2: ['wäre', 'wärest', 'wäre', 'wären', 'wäret', 'wären'],
    french: 'être'
  },
  haben: {
    infinitive: 'haben',
    auxiliary: 'haben',
    type: 'Hilfsverb (Auxiliaire)',
    praesens: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
    praeteritum: ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'],
    partizip2: 'gehabt',
    konjunktiv2: ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'],
    french: 'avoir'
  },
  werden: {
    infinitive: 'werden',
    auxiliary: 'sein',
    type: 'Hilfsverb (Auxiliaire du futur & passif)',
    praesens: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'],
    praeteritum: ['wurde', 'wurdest', 'wurde', 'wurden', 'wurdet', 'wurden'],
    partizip2: 'geworden',
    konjunktiv2: ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'],
    french: 'devenir, auxiliaire futur/passif'
  },
  können: {
    infinitive: 'können',
    auxiliary: 'haben',
    type: 'Modalverb (Pouvoir, capacité)',
    praesens: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
    praeteritum: ['konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten'],
    partizip2: 'gekonnt',
    konjunktiv2: ['könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten'],
    french: 'pouvoir, être capable de'
  },
  müssen: {
    infinitive: 'müssen',
    auxiliary: 'haben',
    type: 'Modalverb (Devoir, obligation absolue)',
    praesens: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    praeteritum: ['musste', 'musstest', 'musste', 'mussten', 'musstet', 'mussten'],
    partizip2: 'gemusst',
    konjunktiv2: ['müsste', 'müsstest', 'müsste', 'müssten', 'müsstet', 'müssten'],
    french: 'devoir, être obligé de'
  },
  wollen: {
    infinitive: 'wollen',
    auxiliary: 'haben',
    type: 'Modalverb (Vouloir, intention)',
    praesens: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    praeteritum: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'],
    partizip2: 'gewollt',
    konjunktiv2: ['wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'],
    french: 'vouloir'
  },
  dürfen: {
    infinitive: 'dürfen',
    auxiliary: 'haben',
    type: 'Modalverb (Avoir la permission)',
    praesens: ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    praeteritum: ['durfte', 'durftest', 'durfte', 'durften', 'durftet', 'durften'],
    partizip2: 'gedurft',
    konjunktiv2: ['dürfte', 'dürftest', 'dürfte', 'dürften', 'dürftet', 'dürften'],
    french: 'avoir le droit, la permission'
  },
  sollen: {
    infinitive: 'sollen',
    auxiliary: 'haben',
    type: 'Modalverb (Devoir moral, conseil)',
    praesens: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    praeteritum: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'],
    partizip2: 'gesollt',
    konjunktiv2: ['sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'],
    french: 'devoir (conseil, consigne)'
  },
  wissen: {
    infinitive: 'wissen',
    auxiliary: 'haben',
    type: 'Unregelmäßiges Verb',
    praesens: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
    praeteritum: ['wusste', 'wusstest', 'wusste', 'wussten', 'wusstet', 'wussten'],
    partizip2: 'gewusst',
    konjunktiv2: ['wüsste', 'wüsstest', 'wüsste', 'wüssten', 'wüsstet', 'wüssten'],
    french: 'savoir'
  },
  gehen: {
    infinitive: 'gehen',
    auxiliary: 'sein',
    type: 'Starkes Verb (Verbe fort)',
    praesens: ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'],
    praeteritum: ['ging', 'gingst', 'ging', 'gingen', 'gingt', 'gingen'],
    partizip2: 'gegangen',
    konjunktiv2: ['ginge', 'gingest', 'ginge', 'gingen', 'ginget', 'gingen'],
    french: 'aller (à pied)'
  },
  kommen: {
    infinitive: 'kommen',
    auxiliary: 'sein',
    type: 'Starkes Verb',
    praesens: ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'],
    praeteritum: ['kam', 'kamst', 'kam', 'kamen', 'kamt', 'kamen'],
    partizip2: 'gekommen',
    konjunktiv2: ['käme', 'kämest', 'käme', 'kämen', 'kämet', 'kämen'],
    french: 'venir'
  },
  bleiben: {
    infinitive: 'bleiben',
    auxiliary: 'sein',
    type: 'Starkes Verb',
    praesens: ['bleibe', 'bleibst', 'bleibt', 'bleiben', 'bleibt', 'bleiben'],
    praeteritum: ['blieb', 'bliebst', 'blieb', 'blieben', 'bliebt', 'blieben'],
    partizip2: 'geblieben',
    konjunktiv2: ['bliebe', 'bliebest', 'bliebe', 'blieben', 'bliebet', 'blieben'],
    french: 'rester'
  },
  sehen: {
    infinitive: 'sehen',
    auxiliary: 'haben',
    type: 'Starkes Verb (Changement vocalique e -> ie)',
    praesens: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'],
    praeteritum: ['sah', 'sahst', 'sah', 'sahen', 'saht', 'sahen'],
    partizip2: 'gesehen',
    konjunktiv2: ['sähe', 'sähest', 'sähe', 'sähen', 'sähet', 'sähen'],
    french: 'voir'
  },
  lesen: {
    infinitive: 'lesen',
    auxiliary: 'haben',
    type: 'Starkes Verb (e -> ie)',
    praesens: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'],
    praeteritum: ['las', 'lasest', 'las', 'lasen', 'last', 'lasen'],
    partizip2: 'gelesen',
    konjunktiv2: ['läse', 'läsest', 'läse', 'läsen', 'läset', 'läsen'],
    french: 'lire'
  },
  schreiben: {
    infinitive: 'schreiben',
    auxiliary: 'haben',
    type: 'Starkes Verb (ei -> ie)',
    praesens: ['schreibe', 'schreibst', 'schreibt', 'schreiben', 'schreibt', 'schreiben'],
    praeteritum: ['schrieb', 'schriebst', 'schrieb', 'schrieben', 'schriebt', 'schrieben'],
    partizip2: 'geschrieben',
    konjunktiv2: ['schriebe', 'schriebest', 'schriebe', 'schrieben', 'schriebet', 'schrieben'],
    french: 'écrire'
  },
  nehmen: {
    infinitive: 'nehmen',
    auxiliary: 'haben',
    type: 'Starkes Verb (e -> i)',
    praesens: ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'],
    praeteritum: ['nahm', 'nahmst', 'nahm', 'nahmen', 'nahmt', 'nahmen'],
    partizip2: 'genommen',
    konjunktiv2: ['nähme', 'nähmest', 'nähme', 'nähmen', 'nähmet', 'nähmen'],
    french: 'prendre'
  },
  geben: {
    infinitive: 'geben',
    auxiliary: 'haben',
    type: 'Starkes Verb (e -> i)',
    praesens: ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben'],
    praeteritum: ['gab', 'gabst', 'gab', 'gaben', 'gabt', 'gaben'],
    partizip2: 'gegeben',
    konjunktiv2: ['gäbe', 'gäbest', 'gäbe', 'gäben', 'gäbet', 'gäben'],
    french: 'donner'
  },
  fahren: {
    infinitive: 'fahren',
    auxiliary: 'sein',
    type: 'Starkes Verb (a -> ä)',
    praesens: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'],
    praeteritum: ['fuhr', 'fuhrst', 'fuhr', 'fuhren', 'fuhrt', 'fuhren'],
    partizip2: 'gefahren',
    konjunktiv2: ['führe', 'führest', 'führe', 'führen', 'führet', 'führen'],
    french: 'conduire, rouler, partir'
  }
};

const PERSONS_DE = ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'];

export function conjugateGermanVerb(rawVerb: string): VerbConjugationResult {
  const clean = rawVerb.trim().toLowerCase();
  const known = GERMAN_KNOWN_VERBS[clean];

  let auxiliary: 'haben' | 'sein' = known?.auxiliary || 'haben';
  let type = known?.type || 'Regelmäßiges Verb (Verbe faible régulier)';
  let p2 = known?.partizip2 || '';
  let praes: string[] = [];
  let praet: string[] = [];
  let konj2: string[] = [];

  const rad = clean.replace(/(en|n)$/, '');

  if (known) {
    praes = [...known.praesens];
    praet = [...known.praeteritum];
    konj2 = known.konjunktiv2 ? [...known.konjunktiv2] : ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'].map(w => `${w} ${clean}`);
  } else {
    // Verbe faible régulier par défaut
    // Terminaison -d ou -t -> insertion d'un 'e' euphonique (ex: arbeiten -> arbeitest)
    const dental = /[dt]$/.test(rad);
    const e = dental ? 'e' : '';

    praes = [
      `${rad}e`,
      `${rad}${e}st`,
      `${rad}${e}t`,
      `${rad}en`,
      `${rad}${e}t`,
      `${rad}en`
    ];

    praet = [
      `${rad}${dental ? 'ete' : 'te'}`,
      `${rad}${dental ? 'etest' : 'test'}`,
      `${rad}${dental ? 'ete' : 'te'}`,
      `${rad}${dental ? 'eten' : 'ten'}`,
      `${rad}${dental ? 'etet' : 'tet'}`,
      `${rad}${dental ? 'eten' : 'ten'}`
    ];

    p2 = `ge${rad}${dental ? 'et' : 't'}`;
    konj2 = ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'].map(w => `${w} ${clean}`);
  }

  const p1 = `${clean}d`; // Partizip I (Infinitiv + d)

  // Auxiliaires pour le Perfekt & Plusquamperfekt
  const habenPres = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];
  const seinPres = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
  const habenPraet = ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'];
  const seinPraet = ['war', 'warst', 'war', 'waren', 'wart', 'waren'];

  const auxPres = auxiliary === 'sein' ? seinPres : habenPres;
  const auxPraet = auxiliary === 'sein' ? seinPraet : habenPraet;

  const perfekt = auxPres.map(a => `${a} ... ${p2}`);
  const plusquamperfekt = auxPraet.map(a => `${a} ... ${p2}`);

  // Futur I (werden + Infinitiv)
  const werdenPres = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'];
  const futur1 = werdenPres.map(w => `${w} ... ${clean}`);

  // Futur II (werden + Partizip II + haben/sein)
  const futur2 = werdenPres.map(w => `${w} ... ${p2} ${auxiliary}`);

  // Impératif
  const imperativForms: PersonConjugation[] = [
    { person: 'du', form: known?.infinitive === 'sein' ? 'Sei!' : `${rad}!` },
    { person: 'ihr', form: known?.infinitive === 'sein' ? 'Seid!' : `${rad}t!` },
    { person: 'Sie (höflich)', form: `${clean} Sie!` }
  ];

  const makeForms = (list: string[]): PersonConjugation[] => {
    return PERSONS_DE.map((p, idx) => ({
      person: p,
      form: `${p} ${list[idx] || ''}`
    }));
  };

  const moods: MoodGroup[] = [
    {
      moodName: 'Indikativ (Temps simples)',
      tenses: [
        { tenseName: 'Präsens', tenseLabelFr: 'Présent (Präsens)', forms: makeForms(praes) },
        { tenseName: 'Präteritum', tenseLabelFr: 'Prétérit / Imparfait (récit écrit)', forms: makeForms(praet) }
      ]
    },
    {
      moodName: 'Indikativ (Temps composés)',
      tenses: [
        { tenseName: 'Perfekt', tenseLabelFr: `Parfait / Passé composé (avec ${auxiliary.toUpperCase()})`, forms: makeForms(perfekt) },
        { tenseName: 'Plusquamperfekt', tenseLabelFr: `Plus-que-parfait (avec ${auxiliary === 'sein' ? 'WAR' : 'HATTE'})`, forms: makeForms(plusquamperfekt) },
        { tenseName: 'Futur I', tenseLabelFr: 'Futur I (werden + Infinitif)', forms: makeForms(futur1) },
        { tenseName: 'Futur II', tenseLabelFr: 'Futur II (werden + PII + haben/sein)', forms: makeForms(futur2) }
      ]
    },
    {
      moodName: 'Konjunktiv & Konditional',
      tenses: [
        { tenseName: 'Konjunktiv II', tenseLabelFr: 'Subjonctif II / Conditionnel (hypothèse, irréel)', forms: makeForms(konj2) }
      ]
    },
    {
      moodName: 'Imperativ & Partizipien',
      tenses: [
        { tenseName: 'Imperativ', tenseLabelFr: 'Impératif (Ordre)', forms: imperativForms }
      ]
    }
  ];

  return {
    verb: clean,
    language: 'de',
    languageLabel: 'Allemand (Deutsch)',
    infinitive: clean,
    translationFr: known?.french,
    auxiliary: auxiliary === 'sein' ? 'Sein (verbe de déplacement / changement d\'état)' : 'Haben',
    groupOrType: type,
    participles: {
      present: p1,
      past: p2
    },
    moods,
    quickRules: [
      `Hilfsverb im Perfekt : ${auxiliary.toUpperCase()} (ex: ${auxiliary === 'sein' ? 'Ich bin gegangen / gefahren' : 'Ich habe gemacht / gelesen'})`,
      `Partizip II : ${p2} (se place en dernière position dans la proposition indépendante)`
    ]
  };
}
