import { VerbConjugationResult, PersonConjugation, TenseConjugation, MoodGroup } from './types';

interface IrregularFrenchVerb {
  infinitive: string;
  auxiliary: 'avoir' | 'être';
  group: string;
  participePresent: string;
  participePasse: string;
  present: [string, string, string, string, string, string];
  imparfaitRadical?: string;
  passeSimple: [string, string, string, string, string, string];
  futurRadical?: string;
  subjonctifPresent: [string, string, string, string, string, string];
  conditionnelRadical?: string;
  imperatif?: [string, string, string]; // tu, nous, vous
}

const ETRE_VERBS = new Set([
  'aller', 'venir', 'partir', 'arriver', 'entrer', 'sortir', 'monter', 'descendre',
  'naître', 'naitre', 'mourir', 'tomber', 'rester', 'retourner', 'devenir', 'revenir'
]);

const FRENCH_IRREGULARS: Record<string, IrregularFrenchVerb> = {
  être: {
    infinitive: 'être',
    auxiliary: 'avoir',
    group: 'Auxiliaire / 3e groupe',
    participePresent: 'étant',
    participePasse: 'été',
    present: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
    imparfaitRadical: 'ét',
    passeSimple: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
    futurRadical: 'ser',
    subjonctifPresent: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
    conditionnelRadical: 'ser',
    imperatif: ['sois', 'soyons', 'soyez']
  },
  avoir: {
    infinitive: 'avoir',
    auxiliary: 'avoir',
    group: 'Auxiliaire / 3e groupe',
    participePresent: 'ayant',
    participePasse: 'eu',
    present: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    imparfaitRadical: 'av',
    passeSimple: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
    futurRadical: 'aur',
    subjonctifPresent: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
    conditionnelRadical: 'aur',
    imperatif: ['aie', 'ayons', 'ayez']
  },
  aller: {
    infinitive: 'aller',
    auxiliary: 'être',
    group: '3e groupe (irrégulier)',
    participePresent: 'allant',
    participePasse: 'allé',
    present: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'],
    imparfaitRadical: 'all',
    passeSimple: ['allai', 'allas', 'alla', 'allâmes', 'allâtes', 'allèrent'],
    futurRadical: 'ir',
    subjonctifPresent: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
    conditionnelRadical: 'ir',
    imperatif: ['va', 'allons', 'allez']
  },
  faire: {
    infinitive: 'faire',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'faisant',
    participePasse: 'fait',
    present: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'],
    imparfaitRadical: 'fais',
    passeSimple: ['fis', 'fis', 'fit', 'fîmes', 'fîtes', 'firent'],
    futurRadical: 'fer',
    subjonctifPresent: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
    conditionnelRadical: 'fer',
    imperatif: ['fais', 'faisons', 'faites']
  },
  dire: {
    infinitive: 'dire',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'disant',
    participePasse: 'dit',
    present: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'],
    imparfaitRadical: 'dis',
    passeSimple: ['dis', 'dis', 'dit', 'dîmes', 'dîtes', 'dirent'],
    futurRadical: 'dir',
    subjonctifPresent: ['dise', 'dises', 'dise', 'disions', 'disiez', 'disent'],
    conditionnelRadical: 'dir',
    imperatif: ['dis', 'disons', 'dites']
  },
  pouvoir: {
    infinitive: 'pouvoir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'pouvant',
    participePasse: 'pu',
    present: ['peux (ou puis)', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
    imparfaitRadical: 'pouv',
    passeSimple: ['pus', 'pus', 'put', 'pûmes', 'pûtes', 'purent'],
    futurRadical: 'pourr',
    subjonctifPresent: ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'],
    conditionnelRadical: 'pourr'
  },
  vouloir: {
    infinitive: 'vouloir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'voulant',
    participePasse: 'voulu',
    present: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'],
    imparfaitRadical: 'voul',
    passeSimple: ['voulus', 'voulus', 'voulut', 'voulûmes', 'voulûtes', 'voulurent'],
    futurRadical: 'voudr',
    subjonctifPresent: ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent'],
    conditionnelRadical: 'voudr',
    imperatif: ['veuille', 'veuillons', 'veuillez']
  },
  savoir: {
    infinitive: 'savoir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'sachant',
    participePasse: 'su',
    present: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'],
    imparfaitRadical: 'sav',
    passeSimple: ['sus', 'sus', 'sut', 'sûmes', 'sûtes', 'surent'],
    futurRadical: 'saur',
    subjonctifPresent: ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'],
    conditionnelRadical: 'saur',
    imperatif: ['sache', 'sachons', 'sachez']
  },
  devoir: {
    infinitive: 'devoir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'devant',
    participePasse: 'dû',
    present: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
    imparfaitRadical: 'dev',
    passeSimple: ['dus', 'dus', 'dut', 'dûmes', 'dûtes', 'durent'],
    futurRadical: 'devr',
    subjonctifPresent: ['doive', 'doives', 'doive', 'devions', 'deviez', 'doivent'],
    conditionnelRadical: 'devr'
  },
  voir: {
    infinitive: 'voir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'voyant',
    participePasse: 'vu',
    present: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'],
    imparfaitRadical: 'voy',
    passeSimple: ['vis', 'vis', 'vit', 'vîmes', 'vîtes', 'virent'],
    futurRadical: 'verr',
    subjonctifPresent: ['voie', 'voies', 'voie', 'voyions', 'voyiez', 'voient'],
    conditionnelRadical: 'verr',
    imperatif: ['vois', 'voyons', 'voyez']
  },
  venir: {
    infinitive: 'venir',
    auxiliary: 'être',
    group: '3e groupe',
    participePresent: 'venant',
    participePasse: 'venu',
    present: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'],
    imparfaitRadical: 'ven',
    passeSimple: ['vins', 'vins', 'vint', 'vînmes', 'vîntes', 'vinrent'],
    futurRadical: 'viendr',
    subjonctifPresent: ['vienne', 'viennes', 'vienne', 'venions', 'veniez', 'viennent'],
    conditionnelRadical: 'viendr',
    imperatif: ['viens', 'venons', 'venez']
  },
  prendre: {
    infinitive: 'prendre',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'prenant',
    participePasse: 'pris',
    present: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'],
    imparfaitRadical: 'pren',
    passeSimple: ['pris', 'pris', 'prit', 'prîmes', 'prîtes', 'prirent'],
    futurRadical: 'prendr',
    subjonctifPresent: ['prenne', 'prennes', 'prenne', 'prenions', 'preniez', 'prennent'],
    conditionnelRadical: 'prendr',
    imperatif: ['prends', 'prenons', 'prenez']
  },
  mettre: {
    infinitive: 'mettre',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'mettant',
    participePasse: 'mis',
    present: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'],
    imparfaitRadical: 'mett',
    passeSimple: ['mis', 'mis', 'mit', 'mîmes', 'mîtes', 'mirent'],
    futurRadical: 'mettr',
    subjonctifPresent: ['mette', 'mettes', 'mette', 'mettions', 'mettiez', 'mettent'],
    conditionnelRadical: 'mettr',
    imperatif: ['mets', 'mettons', 'mettez']
  },
  partir: {
    infinitive: 'partir',
    auxiliary: 'être',
    group: '3e groupe',
    participePresent: 'partant',
    participePasse: 'parti',
    present: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'],
    imparfaitRadical: 'part',
    passeSimple: ['partis', 'partis', 'partit', 'partîmes', 'partîtes', 'partirent'],
    futurRadical: 'partir',
    subjonctifPresent: ['parte', 'partes', 'parte', 'partions', 'partiez', 'partent'],
    conditionnelRadical: 'partir',
    imperatif: ['pars', 'partons', 'partez']
  },
  tenir: {
    infinitive: 'tenir',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'tenant',
    participePasse: 'tenu',
    present: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'],
    imparfaitRadical: 'ten',
    passeSimple: ['tins', 'tins', 'tint', 'tînmes', 'tîntes', 'tinrent'],
    futurRadical: 'tiendr',
    subjonctifPresent: ['tienne', 'tiennes', 'tienne', 'tenions', 'teniez', 'tiennent'],
    conditionnelRadical: 'tiendr',
    imperatif: ['tiens', 'tenons', 'tenez']
  },
  écrire: {
    infinitive: 'écrire',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'écrivant',
    participePasse: 'écrit',
    present: ['écris', 'écris', 'écrit', 'écrivons', 'écrivez', 'écrivent'],
    imparfaitRadical: 'écriv',
    passeSimple: ['écrivis', 'écrivis', 'écrivit', 'écrivîmes', 'écrivîtes', 'écrivirent'],
    futurRadical: 'écrir',
    subjonctifPresent: ['écrive', 'écrives', 'écrive', 'écrivions', 'écriviez', 'écrivent'],
    conditionnelRadical: 'écrir',
    imperatif: ['écris', 'écrivons', 'écrivez']
  },
  lire: {
    infinitive: 'lire',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'lisant',
    participePasse: 'lu',
    present: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'],
    imparfaitRadical: 'lis',
    passeSimple: ['lus', 'lus', 'lut', 'lûmes', 'lûtes', 'lurent'],
    futurRadical: 'lir',
    subjonctifPresent: ['lise', 'lises', 'lise', 'lisions', 'lisiez', 'lisent'],
    conditionnelRadical: 'lir',
    imperatif: ['lis', 'lisons', 'lisez']
  },
  croire: {
    infinitive: 'croire',
    auxiliary: 'avoir',
    group: '3e groupe',
    participePresent: 'croyant',
    participePasse: 'cru',
    present: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'],
    imparfaitRadical: 'croy',
    passeSimple: ['crus', 'crus', 'crut', 'crûmes', 'crûtes', 'crurent'],
    futurRadical: 'croir',
    subjonctifPresent: ['croie', 'croies', 'croie', 'croyions', 'croyiez', 'croient'],
    conditionnelRadical: 'croir',
    imperatif: ['crois', 'croyons', 'croyez']
  },
  falloir: {
    infinitive: 'falloir',
    auxiliary: 'avoir',
    group: '3e groupe (défectif)',
    participePresent: '',
    participePasse: 'fallu',
    present: ['', '', 'faut', '', '', ''],
    imparfaitRadical: 'fall',
    passeSimple: ['', '', 'fallut', '', '', ''],
    futurRadical: 'faudr',
    subjonctifPresent: ['', '', 'faille', '', '', ''],
    conditionnelRadical: 'faudr'
  }
};

const PERSONS_FR = ['je', 'tu', 'il / elle / on', 'nous', 'vous', 'ils / elles'];
const SUBJ_PERSONS_FR = ['que je', 'que tu', "qu'il / elle / on", 'que nous', 'que vous', "qu'ils / elles"];

function formatPerson(person: string, form: string): string {
  if (!form) return '-';
  if (person === 'je' && /^[aeiouyhéèêë]/i.test(form)) {
    return `j'${form}`;
  }
  if (person === 'que je' && /^[aeiouyhéèêë]/i.test(form)) {
    return `que j'${form}`;
  }
  return `${person} ${form}`;
}

export function conjugateFrenchVerb(rawVerb: string): VerbConjugationResult {
  const clean = rawVerb.trim().toLowerCase().replace(/^se\s+|^s'/, '');
  const isPronominal = rawVerb.trim().toLowerCase().startsWith('se ') || rawVerb.trim().toLowerCase().startsWith("s'");

  // Check known irregulars first
  const irregular = FRENCH_IRREGULARS[clean];
  const auxiliary: 'avoir' | 'être' = isPronominal ? 'être' : (irregular?.auxiliary || (ETRE_VERBS.has(clean) ? 'être' : 'avoir'));

  let group = irregular?.group || '1er groupe (-er)';
  let ppres = irregular?.participePresent || '';
  let ppasse = irregular?.participePasse || '';

  let pres: string[] = [];
  let imp: string[] = [];
  let psim: string[] = [];
  let fut: string[] = [];
  let subjPres: string[] = [];
  let condPres: string[] = [];
  let imperatifForms: string[] = [];

  if (irregular) {
    pres = [...irregular.present];
    const impRad = irregular.imparfaitRadical || clean.slice(0, -2);
    imp = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${impRad}${t}`);
    psim = [...irregular.passeSimple];
    const futRad = irregular.futurRadical || clean;
    fut = ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map(t => `${futRad}${t}`);
    subjPres = [...irregular.subjonctifPresent];
    const condRad = irregular.conditionnelRadical || futRad;
    condPres = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${condRad}${t}`);
    imperatifForms = irregular.imperatif ? [...irregular.imperatif] : [pres[1], pres[3], pres[4]];
  } else if (clean.endsWith('er')) {
    // 1er groupe
    group = '1er groupe (-er)';
    const rad = clean.slice(0, -2);
    ppres = clean === 'manger' ? 'mangeant' : `${rad}ant`;
    ppasse = `${rad}é`;

    // Gestion des particularités orthographiques (ex: manger, lancer)
    const isGer = clean.endsWith('ger');
    const isCer = clean.endsWith('cer');

    pres = [
      `${rad}e`,
      `${rad}es`,
      `${rad}e`,
      isGer ? `${rad}eons` : (isCer ? `${rad.slice(0, -1)}çons` : `${rad}ons`),
      `${rad}ez`,
      `${rad}ent`
    ];

    imp = [
      isGer ? `${rad}eais` : (isCer ? `${rad.slice(0, -1)}çais` : `${rad}ais`),
      isGer ? `${rad}eais` : (isCer ? `${rad.slice(0, -1)}çais` : `${rad}ais`),
      isGer ? `${rad}eait` : (isCer ? `${rad.slice(0, -1)}çait` : `${rad}ait`),
      `${rad}ions`,
      `${rad}iez`,
      isGer ? `${rad}eaient` : (isCer ? `${rad.slice(0, -1)}çaient` : `${rad}aient`)
    ];

    psim = [
      isGer ? `${rad}eai` : (isCer ? `${rad.slice(0, -1)}çai` : `${rad}ai`),
      isGer ? `${rad}eas` : (isCer ? `${rad.slice(0, -1)}ças` : `${rad}as`),
      isGer ? `${rad}ea` : (isCer ? `${rad.slice(0, -1)}ça` : `${rad}a`),
      isGer ? `${rad}eâmes` : (isCer ? `${rad.slice(0, -1)}çâmes` : `${rad}âmes`),
      isGer ? `${rad}eâtes` : (isCer ? `${rad.slice(0, -1)}çâtes` : `${rad}âtes`),
      `${rad}èrent`
    ];

    fut = ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map(t => `${clean}${t}`);
    subjPres = [`${rad}e`, `${rad}es`, `${rad}e`, `${rad}ions`, `${rad}iez`, `${rad}ent`];
    condPres = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${clean}${t}`);
    imperatifForms = [`${rad}e`, pres[3], pres[4]];
  } else if (clean.endsWith('ir') && !clean.endsWith('oir')) {
    // 2e groupe (ex: finir, choisir, réussir)
    group = '2e groupe (-ir en -issant)';
    const rad = clean.slice(0, -2);
    ppres = `${rad}issant`;
    ppasse = `${rad}i`;

    pres = [`${rad}is`, `${rad}is`, `${rad}it`, `${rad}issons`, `${rad}issez`, `${rad}issent`];
    imp = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${rad}iss${t}`);
    psim = [`${rad}is`, `${rad}is`, `${rad}it`, `${rad}îmes`, `${rad}îtes`, `${rad}irent`];
    fut = ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map(t => `${clean}${t}`);
    subjPres = ['e', 'es', 'e', 'ions', 'iez', 'ent'].map(t => `${rad}iss${t}`);
    condPres = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${clean}${t}`);
    imperatifForms = [`${rad}is`, `${rad}issons`, `${rad}issez`];
  } else {
    // 3e groupe général
    group = '3e groupe (-re, -oir, -ir)';
    const rad = clean.replace(/(re|oir|ir)$/, '');
    ppres = `${rad}ant`;
    ppasse = `${rad}u`;

    pres = [`${rad}s`, `${rad}s`, `${rad}t`, `${rad}ons`, `${rad}ez`, `${rad}ent`];
    imp = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${rad}${t}`);
    psim = [`${rad}is`, `${rad}is`, `${rad}it`, `${rad}îmes`, `${rad}îtes`, `${rad}irent`];
    fut = ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map(t => `${clean.replace(/e$/, '')}${t}`);
    subjPres = ['e', 'es', 'e', 'ions', 'iez', 'ent'].map(t => `${rad}${t}`);
    condPres = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(t => `${clean.replace(/e$/, '')}${t}`);
    imperatifForms = [`${rad}s`, `${rad}ons`, `${rad}ez`];
  }

  // Auxiliaires pour les temps composés
  const auxPresent = auxiliary === 'avoir'
    ? ['ai', 'as', 'a', 'avons', 'avez', 'ont']
    : ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];

  const auxImparfait = auxiliary === 'avoir'
    ? ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient']
    : ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'];

  const auxPasseSimple = auxiliary === 'avoir'
    ? ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent']
    : ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'];

  const auxFutur = auxiliary === 'avoir'
    ? ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront']
    : ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'];

  const auxSubjPres = auxiliary === 'avoir'
    ? ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient']
    : ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'];

  const auxCondPres = auxiliary === 'avoir'
    ? ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient']
    : ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'];

  const toCompound = (auxForms: string[], pPasse: string, agreementWithEtre = false) => {
    return auxForms.map((aux, idx) => {
      let ending = pPasse;
      if (auxiliary === 'être') {
        if (idx === 3) ending = `${pPasse}(e)s`;
        else if (idx === 4) ending = `${pPasse}(e)s`;
        else if (idx === 5) ending = `${pPasse}s / ${pPasse}es`;
      }
      return `${aux} ${ending}`;
    });
  };

  const passeCompose = toCompound(auxPresent, ppasse);
  const plusQueParfait = toCompound(auxImparfait, ppasse);
  const passeAnterieur = toCompound(auxPasseSimple, ppasse);
  const futurAnterieur = toCompound(auxFutur, ppasse);
  const subjPasse = toCompound(auxSubjPres, ppasse);
  const condPasse = toCompound(auxCondPres, ppasse);

  const makeForms = (rawList: string[], persons = PERSONS_FR): PersonConjugation[] => {
    return persons.map((p, i) => ({
      person: p,
      form: formatPerson(p, rawList[i] || '')
    }));
  };

  const moods: MoodGroup[] = [
    {
      moodName: 'Indicatif',
      tenses: [
        { tenseName: 'Présent', tenseLabelFr: 'Présent', forms: makeForms(pres) },
        { tenseName: 'Imparfait', tenseLabelFr: 'Imparfait', forms: makeForms(imp) },
        { tenseName: 'Passé simple', tenseLabelFr: 'Passé simple', forms: makeForms(psim) },
        { tenseName: 'Futur simple', tenseLabelFr: 'Futur simple', forms: makeForms(fut) },
        { tenseName: 'Passé composé', tenseLabelFr: 'Passé composé', forms: makeForms(passeCompose) },
        { tenseName: 'Plus-que-parfait', tenseLabelFr: 'Plus-que-parfait', forms: makeForms(plusQueParfait) },
        { tenseName: 'Passé antérieur', tenseLabelFr: 'Passé antérieur', forms: makeForms(passeAnterieur) },
        { tenseName: 'Futur antérieur', tenseLabelFr: 'Futur antérieur', forms: makeForms(futurAnterieur) }
      ]
    },
    {
      moodName: 'Subjonctif',
      tenses: [
        { tenseName: 'Subjonctif Présent', tenseLabelFr: 'Subjonctif Présent', forms: makeForms(subjPres, SUBJ_PERSONS_FR) },
        { tenseName: 'Subjonctif Passé', tenseLabelFr: 'Subjonctif Passé', forms: makeForms(subjPasse, SUBJ_PERSONS_FR) }
      ]
    },
    {
      moodName: 'Conditionnel',
      tenses: [
        { tenseName: 'Conditionnel Présent', tenseLabelFr: 'Conditionnel Présent', forms: makeForms(condPres) },
        { tenseName: 'Conditionnel Passé', tenseLabelFr: 'Conditionnel Passé (1ère forme)', forms: makeForms(condPasse) }
      ]
    },
    {
      moodName: 'Impératif',
      tenses: [
        {
          tenseName: 'Impératif Présent',
          tenseLabelFr: 'Impératif Présent',
          forms: [
            { person: '(tu)', form: imperatifForms[0] || '-' },
            { person: '(nous)', form: imperatifForms[1] || '-' },
            { person: '(vous)', form: imperatifForms[2] || '-' }
          ]
        }
      ]
    }
  ];

  return {
    verb: clean,
    language: 'fr',
    languageLabel: 'Français',
    infinitive: clean,
    auxiliary: auxiliary === 'avoir' ? 'Avoir' : 'Être',
    groupOrType: group,
    participles: {
      present: ppres,
      past: ppasse
    },
    moods,
    quickRules: [
      `Auxiliaire employé pour les temps composés : ${auxiliary.toUpperCase()}`,
      `Règle d'accord du participe passé : avec ${auxiliary === 'être' ? "ÊTRE, accord obligatoire avec le sujet en genre et en nombre." : "AVOIR, accord uniquement si le COD est placé AVANT le verbe."}`
    ]
  };
}
