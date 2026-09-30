export interface CountryCurriculumProfile {
  code: string;
  name: string;
  aliases: string[];
  authority: string;
  officialDomains: string[];
  sourceUrl: string;
  schoolLevels: string[];
  note: string;
}

/**
 * Référentiel de routage : il identifie le système éducatif demandé sans
 * prétendre que le contenu de chaque pays est déjà embarqué localement.
 * Le moteur doit utiliser cette information pour éviter tout mélange de
 * programmes. Les contenus non encore intégrés sont traités comme externes
 * et ne sont jamais présentés comme officiels.
 */
export const COUNTRY_CURRICULA: CountryCurriculumProfile[] = [
  {code:'CI', name:"Côte d'Ivoire", aliases:['cote d ivoire','côte d ivoire','ivoire','ivoirien','ivoirienne'], authority:'MENAET / DPFC', officialDomains:['education.gouv.ci'], sourceUrl:'https://www.education.gouv.ci/index.php/Reseaux/enseignement', schoolLevels:['préscolaire','primaire','collège','lycée'], note:'Référentiel prioritaire local.'},
  {code:'FR', name:'France', aliases:['france','français','francaise','francais'], authority:'Ministère de l’Éducation nationale / Éduscol', officialDomains:['education.gouv.fr','eduscol.education.fr'], sourceUrl:'https://eduscol.education.fr/', schoolLevels:['école','collège','lycée'], note:'Programmes nationaux français.'},
  {code:'SN', name:'Sénégal', aliases:['senegal','sénégal','senegalais','sénégalais'], authority:'Ministère de l’Éducation nationale du Sénégal', officialDomains:['education.sn'], sourceUrl:'https://www.education.sn/', schoolLevels:['préscolaire','élémentaire','moyen','secondaire'], note:'Référentiel sénégalais distinct.'},
  {code:'BF', name:'Burkina Faso', aliases:['burkina','burkina faso','burkinabe'], authority:'Ministère de l’Éducation nationale du Burkina Faso', officialDomains:['education.gov.bf'], sourceUrl:'https://www.education.gov.bf/', schoolLevels:['préscolaire','primaire','post-primaire','secondaire'], note:'Référentiel burkinabè distinct.'},
  {code:'ML', name:'Mali', aliases:['mali','malien','malienne'], authority:'Ministère de l’Éducation nationale du Mali', officialDomains:['education.gouv.ml'], sourceUrl:'https://education.gouv.ml/', schoolLevels:['fondamental','secondaire'], note:'Référentiel malien distinct.'},
  {code:'GN', name:'Guinée', aliases:['guinee','guinée','guineen','guinéen'], authority:'Ministère de l’Enseignement pré-universitaire et de l’Alphabétisation', officialDomains:['education.gov.gn'], sourceUrl:'https://education.gov.gn/', schoolLevels:['préscolaire','primaire','secondaire'], note:'Référentiel guinéen distinct.'},
  {code:'CM', name:'Cameroun', aliases:['cameroun','camerounais','camerounaise'], authority:'Ministère de l’Éducation de base / MINESEC', officialDomains:['minebase.cm','minesec.gov.cm'], sourceUrl:'https://www.minesec.gov.cm/', schoolLevels:['primaire','secondaire'], note:'Programmes francophones et anglophones selon le sous-système.'},
  {code:'CD', name:'République démocratique du Congo', aliases:['rdc','rd congo','republique democratique du congo','congo kinshasa'], authority:'Ministère de l’Éducation nationale et Nouvelle citoyenneté', officialDomains:['edu-nc.gouv.cd'], sourceUrl:'https://edu-nc.gouv.cd/', schoolLevels:['primaire','secondaire'], note:'Référentiel congolais distinct.'},
  {code:'CG', name:'République du Congo', aliases:['congo brazzaville','republique du congo'], authority:'Ministère de l’Enseignement primaire, secondaire et de l’alphabétisation', officialDomains:['enseignement.gouv.cg'], sourceUrl:'https://www.enseignement.gouv.cg/', schoolLevels:['primaire','secondaire'], note:'À distinguer de la RDC.'},
  {code:'BJ', name:'Bénin', aliases:['benin','bénin','beninois','béninois'], authority:'Ministère des Enseignements maternel et primaire / secondaire', officialDomains:['enseignementsecondaire.gouv.bj','education.gouv.bj'], sourceUrl:'https://www.gouv.bj/', schoolLevels:['maternelle','primaire','secondaire'], note:'Référentiel béninois distinct.'},
  {code:'TG', name:'Togo', aliases:['togo','togolais','togolaise'], authority:'Ministère des Enseignements primaire, secondaire et technique', officialDomains:['education.gouv.tg'], sourceUrl:'https://education.gouv.tg/', schoolLevels:['préscolaire','primaire','secondaire'], note:'Référentiel togolais distinct.'},
  {code:'NE', name:'Niger', aliases:['niger','nigerien','nigérien'], authority:'Ministère de l’Éducation nationale du Niger', officialDomains:['education.gouv.ne'], sourceUrl:'https://www.education.gouv.ne/', schoolLevels:['préscolaire','primaire','secondaire'], note:'Référentiel nigérien distinct.'},
  {code:'TD', name:'Tchad', aliases:['tchad','tchadien','tchadienne'], authority:'Ministère de l’Éducation nationale et de la Promotion civique', officialDomains:['education.gouv.td'], sourceUrl:'https://education.gouv.td/', schoolLevels:['primaire','secondaire'], note:'Référentiel tchadien distinct.'},
  {code:'GA', name:'Gabon', aliases:['gabon','gabonais','gabonaise'], authority:'Ministère de l’Éducation nationale du Gabon', officialDomains:['education.gouv.ga'], sourceUrl:'https://www.education.gouv.ga/', schoolLevels:['préprimaire','primaire','secondaire'], note:'Référentiel gabonais distinct.'},
  {code:'MA', name:'Maroc', aliases:['maroc','marocain','marocaine'], authority:'Ministère de l’Éducation nationale du Maroc', officialDomains:['men.gov.ma'], sourceUrl:'https://www.men.gov.ma/', schoolLevels:['primaire','collège','lycée'], note:'Référentiel marocain distinct.'},
  {code:'DZ', name:'Algérie', aliases:['algerie','algérie','algerien','algérien'], authority:'Ministère de l’Éducation nationale d’Algérie', officialDomains:['education.gov.dz'], sourceUrl:'https://www.education.gov.dz/', schoolLevels:['primaire','moyen','secondaire'], note:'Référentiel algérien distinct.'},
  {code:'TN', name:'Tunisie', aliases:['tunisie','tunisien','tunisienne'], authority:'Ministère de l’Éducation tunisien', officialDomains:['education.gov.tn'], sourceUrl:'http://www.education.gov.tn/', schoolLevels:['primaire','collège','secondaire'], note:'Référentiel tunisien distinct.'},
  {code:'BE', name:'Belgique', aliases:['belgique','belge'], authority:'Communautés éducatives belges', officialDomains:['enseignement.be','enseignement.gouv.cfwb.be'], sourceUrl:'https://www.enseignement.be/', schoolLevels:['fondamental','secondaire'], note:'Attention : les programmes varient selon la communauté.'},
  {code:'CH', name:'Suisse', aliases:['suisse','suisse romande'], authority:'Conférence suisse des directeurs cantonaux de l’instruction publique', officialDomains:['edk.ch'], sourceUrl:'https://www.edk.ch/', schoolLevels:['primaire','secondaire'], note:'Les programmes relèvent largement des cantons.'},
  {code:'CA', name:'Canada', aliases:['canada','canadien','canadienne','quebec','québec'], authority:'Autorités éducatives provinciales', officialDomains:['canada.ca'], sourceUrl:'https://www.canada.ca/fr/services/education.html', schoolLevels:['primaire','secondaire'], note:'Il n’existe pas un programme scolaire national unique : la province doit être identifiée lorsque possible.'},
  {code:'US', name:'États-Unis', aliases:['etats unis','états unis','usa','us','amerique'], authority:'Autorités éducatives des États / districts', officialDomains:['ed.gov'], sourceUrl:'https://www.ed.gov/', schoolLevels:['elementary','middle school','high school'], note:'Pas de curriculum national unique.'},
  {code:'GB', name:'Royaume-Uni', aliases:['royaume uni','royaume-uni','angleterre','uk','united kingdom','britain'], authority:'Éducation dévolue ; Department for Education pour l’Angleterre', officialDomains:['gov.uk'], sourceUrl:'https://www.gov.uk/browse/education', schoolLevels:['primary','secondary','sixth form'], note:'Les systèmes diffèrent entre Angleterre, Écosse, Pays de Galles et Irlande du Nord.'},
  {code:'IE', name:'Irlande', aliases:['irlande','irlandais'], authority:'Department of Education', officialDomains:['gov.ie'], sourceUrl:'https://www.gov.ie/en/organisation/department-of-education/', schoolLevels:['primary','post-primary'], note:'Référentiel irlandais.'},
  {code:'DE', name:'Allemagne', aliases:['allemagne','allemand','allemande'], authority:'Kultusministerkonferenz / Länder', officialDomains:['kmk.org'], sourceUrl:'https://www.kmk.org/', schoolLevels:['grundschule','sekundarstufe'], note:'Les programmes sont largement définis par les Länder.'},
  {code:'ES', name:'Espagne', aliases:['espagne','espagnol','espagnole'], authority:'Ministerio de Educación, Formación Profesional y Deportes', officialDomains:['educacionfpydeportes.gob.es'], sourceUrl:'https://www.educacionfpydeportes.gob.es/', schoolLevels:['primaria','secundaria','bachillerato'], note:'Cadre national avec déclinaisons régionales.'},
  {code:'PT', name:'Portugal', aliases:['portugal','portugais','portugaise'], authority:'Ministério da Educação', officialDomains:['gov.pt','dge.mec.pt'], sourceUrl:'https://www.dge.mec.pt/', schoolLevels:['1.º ciclo','2.º ciclo','3.º ciclo','secundário'], note:'Référentiel portugais.'},
  {code:'IT', name:'Italie', aliases:['italie','italien','italienne'], authority:'Ministero dell’Istruzione e del Merito', officialDomains:['istruzione.gov.it'], sourceUrl:'https://www.istruzione.gov.it/', schoolLevels:['primaria','secondaria'], note:'Référentiel italien.'},
  {code:'JP', name:'Japon', aliases:['japon','japonais','japonaise'], authority:'Ministry of Education, Culture, Sports, Science and Technology', officialDomains:['mext.go.jp'], sourceUrl:'https://www.mext.go.jp/en/', schoolLevels:['elementary','junior high','senior high'], note:'National Course of Study japonais.'},
  {code:'CN', name:'Chine', aliases:['chine','chinois','chinoise'], authority:'Ministry of Education of the People’s Republic of China', officialDomains:['moe.gov.cn'], sourceUrl:'http://en.moe.gov.cn/', schoolLevels:['primary','junior secondary','senior secondary'], note:'Référentiel chinois.'},
  {code:'AU', name:'Australie', aliases:['australie','australien','australienne'], authority:'Australian Curriculum, Assessment and Reporting Authority', officialDomains:['australiancurriculum.edu.au'], sourceUrl:'https://www.australiancurriculum.edu.au/', schoolLevels:['foundation','primary','secondary'], note:'Australian Curriculum avec mise en œuvre locale.'},
  {code:'IN', name:'Inde', aliases:['inde','indien','indienne'], authority:'Ministry of Education / CBSE / State Boards', officialDomains:['education.gov.in','cbse.gov.in'], sourceUrl:'https://www.education.gov.in/', schoolLevels:['primary','secondary','senior secondary'], note:'Plusieurs boards et programmes.'},
  {code:'ZA', name:'Afrique du Sud', aliases:['afrique du sud','sud afrique','south africa'], authority:'Department of Basic Education', officialDomains:['education.gov.za'], sourceUrl:'https://www.education.gov.za/', schoolLevels:['foundation','intermediate','senior phase','further education'], note:'Curriculum CAPS notamment.'},
  {code:'BR', name:'Brésil', aliases:['bresil','brésil','bresilien','brésilien'], authority:'Ministério da Educação', officialDomains:['gov.br/mec'], sourceUrl:'https://www.gov.br/mec/', schoolLevels:['educação infantil','ensino fundamental','ensino médio'], note:'Base nationale commune avec mise en œuvre locale.'},
  {code:'MX', name:'Mexique', aliases:['mexique','mexicain','mexicaine'], authority:'Secretaría de Educación Pública', officialDomains:['sep.gob.mx'], sourceUrl:'https://www.gob.mx/sep', schoolLevels:['primaria','secundaria','media superior'], note:'Référentiel mexicain.'},
  {code:'AE', name:'Émirats arabes unis', aliases:['emirats','émirats','uae','dubai'], authority:'Ministry of Education', officialDomains:['moe.gov.ae'], sourceUrl:'https://www.moe.gov.ae/', schoolLevels:['cycle 1','cycle 2','cycle 3'], note:'Plusieurs curricula internationaux coexistent.'},
  {code:'SG', name:'Singapour', aliases:['singapour','singapore'], authority:'Ministry of Education Singapore', officialDomains:['moe.gov.sg'], sourceUrl:'https://www.moe.gov.sg/', schoolLevels:['primary','secondary','pre-university'], note:'Référentiel national singapourien.'},
  {code:'RW', name:'Rwanda', aliases:['rwanda','rwandais','rwandaise'], authority:'Rwanda Basic Education Board', officialDomains:['reb.rw'], sourceUrl:'https://www.reb.rw/', schoolLevels:['primary','lower secondary','upper secondary'], note:'Référentiel rwandais.'},
  {code:'ET', name:'Éthiopie', aliases:['ethiopie','éthiopie','ethiopien','éthiopien'], authority:'Ministry of Education Ethiopia', officialDomains:['moe.gov.et'], sourceUrl:'https://moe.gov.et/', schoolLevels:['primary','secondary'], note:'Référentiel éthiopien.'},
];

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s-]/g,' ').replace(/\s+/g,' ').trim();
}

export function detectCountryCurriculum(query: string): CountryCurriculumProfile | null {
  const q = normalize(query);
  const ordered = [...COUNTRY_CURRICULA].sort((a,b) => Math.max(...b.aliases.map(x=>normalize(x).length)) - Math.max(...a.aliases.map(x=>normalize(x).length)));
  for (const profile of ordered) {
    for (const alias of profile.aliases) {
      const a = normalize(alias);
      if (a && new RegExp(`(^|\\s)${a.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}(?=\\s|$)`).test(q)) return profile;
    }
  }
  return null;
}

export function getCountryByCode(code: string): CountryCurriculumProfile | null {
  return COUNTRY_CURRICULA.find(c => c.code.toLowerCase() === String(code||'').toLowerCase()) || null;
}
