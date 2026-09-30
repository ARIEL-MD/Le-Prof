import { VerbConjugationResult, PersonConjugation, TenseConjugation, MoodGroup } from './types';

interface SpanishVerbData {
  infinitive: string;
  type: string;
  gerundio: string;
  participio: string;
  presente: [string, string, string, string, string, string];
  imperfecto: [string, string, string, string, string, string];
  indefinido: [string, string, string, string, string, string];
  futuroRadical?: string;
  subjuntivoPresente: [string, string, string, string, string, string];
  subjuntivoImperfecto?: [string, string, string, string, string, string];
  imperativoTu?: string;
  french: string;
}

const SPANISH_KNOWN_VERBS: Record<string, SpanishVerbData> = {
  ser: {
    infinitive: 'ser',
    type: 'Verbo irregular fundamental',
    gerundio: 'siendo',
    participio: 'sido',
    presente: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
    imperfecto: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
    indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    futuroRadical: 'ser',
    subjuntivoPresente: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
    subjuntivoImperfecto: ['fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran'],
    imperativoTu: 'sé',
    french: 'être (nature, identité, caractéristiques permanentes)'
  },
  estar: {
    infinitive: 'estar',
    type: 'Verbo irregular',
    gerundio: 'estando',
    participio: 'estado',
    presente: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
    imperfecto: ['estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban'],
    indefinido: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
    futuroRadical: 'estar',
    subjuntivoPresente: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
    subjuntivoImperfecto: ['estuviera', 'estuvieras', 'estuviera', 'estuviéramos', 'estuvierais', 'estuvieran'],
    imperativoTu: 'está',
    french: 'être (état passager, localisation spatiale)'
  },
  haber: {
    infinitive: 'haber',
    type: 'Verbo auxiliar',
    gerundio: 'habiendo',
    participio: 'habido',
    presente: ['he', 'has', 'ha (hay)', 'hemos', 'habéis', 'han'],
    imperfecto: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
    indefinido: ['hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron'],
    futuroRadical: 'habr',
    subjuntivoPresente: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
    subjuntivoImperfecto: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'],
    imperativoTu: 'he',
    french: 'avoir (auxiliaire) / y avoir (hay)'
  },
  tener: {
    infinitive: 'tener',
    type: 'Verbo irregular con cambio g/ie',
    gerundio: 'teniendo',
    participio: 'tenido',
    presente: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
    imperfecto: ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían'],
    indefinido: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
    futuroRadical: 'tendr',
    subjuntivoPresente: ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan'],
    subjuntivoImperfecto: ['tuviera', 'tuvieras', 'tuviera', 'tuviéramos', 'tuvierais', 'tuvieran'],
    imperativoTu: 'ten',
    french: 'avoir, posséder'
  },
  hacer: {
    infinitive: 'hacer',
    type: 'Verbo irregular',
    gerundio: 'haciendo',
    participio: 'hecho',
    presente: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
    imperfecto: ['hacía', 'hacías', 'hacía', 'hacíamos', 'hacíais', 'hacían'],
    indefinido: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
    futuroRadical: 'har',
    subjuntivoPresente: ['haga', 'hagas', 'haga', 'hagamos', 'hagáis', 'hagan'],
    subjuntivoImperfecto: ['hiciera', 'hicieras', 'hiciera', 'hiciéramos', 'hicierais', 'hicieran'],
    imperativoTu: 'haz',
    french: 'faire'
  },
  ir: {
    infinitive: 'ir',
    type: 'Verbo muy irregular',
    gerundio: 'yendo',
    participio: 'ido',
    presente: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
    imperfecto: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
    indefinido: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
    futuroRadical: 'ir',
    subjuntivoPresente: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
    subjuntivoImperfecto: ['fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran'],
    imperativoTu: 've',
    french: 'aller'
  },
  poder: {
    infinitive: 'poder',
    type: 'Verbo irregular (o -> ue)',
    gerundio: 'pudiendo',
    participio: 'podido',
    presente: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
    imperfecto: ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían'],
    indefinido: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
    futuroRadical: 'podr',
    subjuntivoPresente: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'],
    subjuntivoImperfecto: ['pudiera', 'pudieras', 'pudiera', 'pudiéramos', 'pudierais', 'pudieran'],
    french: 'pouvoir'
  },
  decir: {
    infinitive: 'decir',
    type: 'Verbo irregular',
    gerundio: 'diciendo',
    participio: 'dicho',
    presente: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
    imperfecto: ['decía', 'decías', 'decía', 'decíamos', 'decíais', 'decían'],
    indefinido: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'],
    futuroRadical: 'dir',
    subjuntivoPresente: ['diga', 'digas', 'diga', 'digamos', 'digáis', 'digan'],
    subjuntivoImperfecto: ['dijera', 'dijeras', 'dijera', 'dijéramos', 'dijerais', 'dijeran'],
    imperativoTu: 'di',
    french: 'dire'
  },
  poner: {
    infinitive: 'poner',
    type: 'Verbo irregular',
    gerundio: 'poniendo',
    participio: 'puesto',
    presente: ['pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'],
    imperfecto: ['ponía', 'ponías', 'ponía', 'poníamos', 'poníais', 'ponían'],
    indefinido: ['puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'],
    futuroRadical: 'pondr',
    subjuntivoPresente: ['ponga', 'pongas', 'ponga', 'pongamos', 'pongáis', 'pongan'],
    subjuntivoImperfecto: ['pusiera', 'pusieras', 'pusiera', 'pusiéramos', 'pusierais', 'pusieran'],
    imperativoTu: 'pon',
    french: 'mettre, poser'
  },
  querer: {
    infinitive: 'querer',
    type: 'Verbo irregular (e -> ie)',
    gerundio: 'queriendo',
    participio: 'querido',
    presente: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
    imperfecto: ['quería', 'querías', 'quería', 'queríamos', 'queríais', 'querían'],
    indefinido: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
    futuroRadical: 'querr',
    subjuntivoPresente: ['quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'],
    subjuntivoImperfecto: ['quisiera', 'quisieras', 'quisiera', 'quisiéramos', 'quisierais', 'quisieran'],
    imperativoTu: 'quiere',
    french: 'vouloir, aimer'
  },
  saber: {
    infinitive: 'saber',
    type: 'Verbo irregular',
    gerundio: 'sabiendo',
    participio: 'sabido',
    presente: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'],
    imperfecto: ['sabía', 'sabías', 'sabía', 'sabíamos', 'sabíais', 'sabían'],
    indefinido: ['supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'],
    futuroRadical: 'sabr',
    subjuntivoPresente: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
    subjuntivoImperfecto: ['supiera', 'supieras', 'supiera', 'supiéramos', 'supierais', 'supieran'],
    imperativoTu: 'sabe',
    french: 'savoir'
  },
  ver: {
    infinitive: 'ver',
    type: 'Verbo irregular',
    gerundio: 'viendo',
    participio: 'visto',
    presente: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'],
    imperfecto: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'],
    indefinido: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
    futuroRadical: 'ver',
    subjuntivoPresente: ['vea', 'veas', 'vea', 'veamos', 'veáis', 'vean'],
    subjuntivoImperfecto: ['viera', 'vieras', 'viera', 'viéramos', 'vierais', 'vieran'],
    imperativoTu: 've',
    french: 'voir'
  },
  dar: {
    infinitive: 'dar',
    type: 'Verbo irregular',
    gerundio: 'dando',
    participio: 'dado',
    presente: ['doy', 'das', 'da', 'damos', 'dais', 'dan'],
    imperfecto: ['daba', 'dabas', 'daba', 'dábamos', 'dabais', 'daban'],
    indefinido: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
    futuroRadical: 'dar',
    subjuntivoPresente: ['dé', 'des', 'dé', 'demos', 'deis', 'den'],
    subjuntivoImperfecto: ['diera', 'dieras', 'diera', 'diéramos', 'dierais', 'dieran'],
    imperativoTu: 'da',
    french: 'donner'
  },
  salir: {
    infinitive: 'salir',
    type: 'Verbo irregular (salgo, saldré)',
    gerundio: 'saliendo',
    participio: 'salido',
    presente: ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'],
    imperfecto: ['salía', 'salías', 'salía', 'salíamos', 'salíais', 'salían'],
    indefinido: ['salí', 'saliste', 'salió', 'salimos', 'salisteis', 'salieron'],
    futuroRadical: 'saldr',
    subjuntivoPresente: ['salga', 'salgas', 'salga', 'salgamos', 'salgáis', 'salgan'],
    subjuntivoImperfecto: ['saliera', 'salieras', 'saliera', 'saliéramos', 'salierais', 'salieran'],
    imperativoTu: 'sal',
    french: 'sortir'
  },
  venir: {
    infinitive: 'venir',
    type: 'Verbo irregular (vengo, vine, vendré)',
    gerundio: 'viniendo',
    participio: 'venido',
    presente: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'],
    imperfecto: ['venía', 'venías', 'venía', 'veníamos', 'veníais', 'venían'],
    indefinido: ['vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'],
    futuroRadical: 'vendr',
    subjuntivoPresente: ['venga', 'vengas', 'venga', 'vengamos', 'vengáis', 'vengan'],
    subjuntivoImperfecto: ['viniera', 'vinieras', 'viniera', 'viniéramos', 'vinierais', 'vinieran'],
    imperativoTu: 'ven',
    french: 'venir'
  }
};

const PERSONS_ES = ['yo', 'tú', 'él / ella / usted', 'nosotros / nosotras', 'vosotros / vosotras', 'ellos / ellas / ustedes'];

export function conjugateSpanishVerb(rawVerb: string): VerbConjugationResult {
  const clean = rawVerb.trim().toLowerCase();
  const known = SPANISH_KNOWN_VERBS[clean];

  let type = known?.type || '';
  let gerundio = known?.gerundio || '';
  let participio = known?.participio || '';

  let pres: string[] = [];
  let imp: string[] = [];
  let indef: string[] = [];
  let futRad = known?.futuroRadical || clean;
  let subjPres: string[] = [];
  let subjImp: string[] = [];
  let tuImperativo = known?.imperativoTu || '';

  const rad = clean.slice(0, -2);
  const ending = clean.slice(-2); // 'ar', 'er', 'ir'

  if (known) {
    pres = [...known.presente];
    imp = [...known.imperfecto];
    indef = [...known.indefinido];
    subjPres = [...known.subjuntivoPresente];
    subjImp = known.subjuntivoImperfecto ? [...known.subjuntivoImperfecto] : indef.map(v => v);
  } else if (ending === 'ar') {
    type = '1ª conjugación (-AR regular)';
    gerundio = `${rad}ando`;
    participio = `${rad}ado`;
    pres = [`${rad}o`, `${rad}as`, `${rad}a`, `${rad}amos`, `${rad}áis`, `${rad}an`];
    imp = [`${rad}aba`, `${rad}abas`, `${rad}aba`, `${rad}ábamos`, `${rad}abais`, `${rad}aban`];
    indef = [`${rad}é`, `${rad}aste`, `${rad}ó`, `${rad}amos`, `${rad}asteis`, `${rad}aron`];
    subjPres = [`${rad}e`, `${rad}es`, `${rad}e`, `${rad}emos`, `${rad}éis`, `${rad}en`];
    subjImp = [`${rad}ara`, `${rad}aras`, `${rad}ara`, `${rad}áramos`, `${rad}arais`, `${rad}aran`];
    tuImperativo = `${rad}a`;
  } else if (ending === 'er') {
    type = '2ª conjugación (-ER regular)';
    gerundio = `${rad}iendo`;
    participio = `${rad}ido`;
    pres = [`${rad}o`, `${rad}es`, `${rad}e`, `${rad}emos`, `${rad}éis`, `${rad}en`];
    imp = [`${rad}ía`, `${rad}ías`, `${rad}ía`, `${rad}íamos`, `${rad}íais`, `${rad}ían`];
    indef = [`${rad}í`, `${rad}iste`, `${rad}ió`, `${rad}imos`, `${rad}isteis`, `${rad}ieron`];
    subjPres = [`${rad}a`, `${rad}as`, `${rad}a`, `${rad}amos`, `${rad}áis`, `${rad}an`];
    subjImp = [`${rad}iera`, `${rad}ieras`, `${rad}iera`, `${rad}iéramos`, `${rad}ierais`, `${rad}ieran`];
    tuImperativo = `${rad}e`;
  } else {
    // -ir
    type = '3ª conjugación (-IR regular)';
    gerundio = `${rad}iendo`;
    participio = `${rad}ido`;
    pres = [`${rad}o`, `${rad}es`, `${rad}e`, `${rad}imos`, `${rad}ís`, `${rad}en`];
    imp = [`${rad}ía`, `${rad}ías`, `${rad}ía`, `${rad}íamos`, `${rad}íais`, `${rad}ían`];
    indef = [`${rad}í`, `${rad}iste`, `${rad}ió`, `${rad}imos`, `${rad}isteis`, `${rad}ieron`];
    subjPres = [`${rad}a`, `${rad}as`, `${rad}a`, `${rad}amos`, `${rad}áis`, `${rad}an`];
    subjImp = [`${rad}iera`, `${rad}ieras`, `${rad}iera`, `${rad}iéramos`, `${rad}ierais`, `${rad}ieran`];
    tuImperativo = `${rad}e`;
  }

  // Futuro simple et Condicional simple
  const futTerm = ['é', 'ás', 'á', 'emos', 'éis', 'án'];
  const condTerm = ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'];
  const futuro = futTerm.map(t => `${futRad}${t}`);
  const condicional = condTerm.map(t => `${futRad}${t}`);

  // Temps composés (haber + participio)
  const haberPres = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  const haberImp = ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'];
  const haberFut = ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'];
  const haberSubjPres = ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'];

  const perfectoCompuesto = haberPres.map(h => `${h} ${participio}`);
  const pluscuamperfecto = haberImp.map(h => `${h} ${participio}`);
  const futuroPerfecto = haberFut.map(h => `${h} ${participio}`);
  const subjPerfecto = haberSubjPres.map(h => `${h} ${participio}`);

  // Impératif (tu, vosotros, usted, ustedes)
  const imperativoForms: PersonConjugation[] = [
    { person: '¡Tú!', form: `¡${tuImperativo || pres[2]}!` },
    { person: '¡Usted!', form: `¡${subjPres[2]}!` },
    { person: '¡Nosotros!', form: `¡${subjPres[3]}!` },
    { person: '¡Vosotros!', form: `¡${rad}${ending === 'ar' ? 'ad' : (ending === 'er' ? 'ed' : 'id')}!` },
    { person: '¡Ustedes!', form: `¡${subjPres[5]}!` },
    { person: '¡No (défense tú)!', form: `¡No ${subjPres[1]}!` }
  ];

  const makeForms = (list: string[]): PersonConjugation[] => {
    return PERSONS_ES.map((p, idx) => ({
      person: p,
      form: `${p} ${list[idx] || ''}`
    }));
  };

  const moods: MoodGroup[] = [
    {
      moodName: 'Indicativo (Tiempos simples)',
      tenses: [
        { tenseName: 'Presente', tenseLabelFr: 'Présent de l\'indicatif', forms: makeForms(pres) },
        { tenseName: 'Pretérito imperfecto', tenseLabelFr: 'Imparfait (actions habituelles, descriptions)', forms: makeForms(imp) },
        { tenseName: 'Pretérito indefinido', tenseLabelFr: 'Passé simple / Prétérit (action ponctuelle achevée)', forms: makeForms(indef) },
        { tenseName: 'Futuro simple', tenseLabelFr: 'Futur simple', forms: makeForms(futuro) },
        { tenseName: 'Condicional simple', tenseLabelFr: 'Conditionnel présent', forms: makeForms(condicional) }
      ]
    },
    {
      moodName: 'Indicativo (Tiempos compuestos con HABER)',
      tenses: [
        { tenseName: 'Pretérito perfecto compuesto', tenseLabelFr: 'Passé composé (haber au présent + participe)', forms: makeForms(perfectoCompuesto) },
        { tenseName: 'Pretérito pluscuamperfecto', tenseLabelFr: 'Plus-que-parfait (haber à l\'imparfait + participe)', forms: makeForms(pluscuamperfecto) },
        { tenseName: 'Futuro perfecto', tenseLabelFr: 'Futur antérieur (haber au futur + participe)', forms: makeForms(futuroPerfecto) }
      ]
    },
    {
      moodName: 'Subjuntivo',
      tenses: [
        { tenseName: 'Presente de subjuntivo', tenseLabelFr: 'Présent du subjonctif (doute, ordre, souhait, es necesario que)', forms: makeForms(subjPres) },
        { tenseName: 'Pretérito imperfecto de subjuntivo', tenseLabelFr: 'Imparfait du subjonctif (forme en -ra)', forms: makeForms(subjImp) },
        { tenseName: 'Pretérito perfecto de subjuntivo', tenseLabelFr: 'Passé du subjonctif (haya + participe)', forms: makeForms(subjPerfecto) }
      ]
    },
    {
      moodName: 'Imperativo & Formas no personales',
      tenses: [
        { tenseName: 'Imperativo', tenseLabelFr: 'Impératif affirmatif & négatif (défense avec No + subjonctif)', forms: imperativoForms }
      ]
    }
  ];

  return {
    verb: clean,
    language: 'es',
    languageLabel: 'Espagnol (Español)',
    infinitive: clean,
    translationFr: known?.french,
    groupOrType: type,
    participles: {
      present: gerundio,
      past: participio
    },
    moods,
    quickRules: [
      `Gerundio : ${gerundio} | Participio : ${participio}`,
      `Formation des temps composés : uniquement avec l'auxiliaire HABER invariable (jamais ser ou estar comme auxiliaire composé).`
    ]
  };
}
