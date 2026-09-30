/**
 * Inventaire de couverture des programmes officiels.
 *
 * IMPORTANT : une source officielle configurée n'est PAS assimilée à un corpus
 * localement importé. Un pays ne peut être annoncé comme « programme officiel
 * intégré » que lorsque ses documents officiels ont été récupérés, versionnés,
 * parsés, indexés et testés.
 */
export type CurriculumIntegrationStatus =
  | 'INTEGRE_VERIFIE'
  | 'PARTIELLEMENT_INTEGRE'
  | 'SOURCE_OFFICIELLE_CONFIGUREE'
  | 'A_IMPORTER';

export interface OfficialCurriculumCoverage {
  countryCode: string;
  countryName: string;
  authority: string;
  officialPortal: string;
  currentSchoolYear: string;
  status: CurriculumIntegrationStatus;
  levelsCovered: string[];
  subjectsCovered: string[];
  officialDocuments: string[];
  verificationRule: string;
  lastChecked: string;
}

const CHECKED = '2026-09-29';
const ALL = ['toutes les matières'];

/**
 * État réel du corpus au 29/09/2026.
 * CI est le corpus local prioritaire. France/Burkina/Sénégal/Maroc disposent
 * de points d'entrée officiels vérifiés mais leur corpus complet n'est pas
 * encore prétendu comme embarqué ici.
 */
export const OFFICIAL_CURRICULUM_COVERAGE: OfficialCurriculumCoverage[] = [
  {
    countryCode: 'CI', countryName: "Côte d'Ivoire", authority: 'MENAET / DPFC',
    officialPortal: 'https://www.education.gouv.ci/index.php/Reseaux/enseignement',
    currentSchoolYear: '2026-2027', status: 'PARTIELLEMENT_INTEGRE',
    levelsCovered: ['préscolaire','primaire','collège','lycée'], subjectsCovered: ALL,
    officialDocuments: [
      'Programmes éducatifs MENAET/DPFC',
      'Manuels et supports didactiques retenus 2026-2027',
      'Textes officiels et circulaires MENAET'
    ],
    verificationRule: 'Ne pas répondre « officiel » hors corpus effectivement indexé; afficher la provenance.',
    lastChecked: CHECKED
  },
  {
    countryCode: 'FR', countryName: 'France', authority: 'Ministère de l’Éducation nationale / Éduscol',
    officialPortal: 'https://eduscol.education.gouv.fr/4332/niveaux',
    currentSchoolYear: '2026-2027', status: 'PARTIELLEMENT_INTEGRE',
    levelsCovered: ['maternelle','école élémentaire','collège','lycée général et technologique','lycée professionnel'], subjectsCovered: ALL,
    officialDocuments: ['Programmes et ressources Éduscol par niveau et discipline'],
    verificationRule: 'Conserver la date/version de chaque programme; distinguer programme en vigueur, ancien et projet.', lastChecked: CHECKED
  },
  {
    countryCode: 'BF', countryName: 'Burkina Faso', authority: 'MENAPLN',
    officialPortal: 'https://www.education.gov.bf/accueil', currentSchoolYear: '2026-2027', status: 'PARTIELLEMENT_INTEGRE',
    levelsCovered: ['préscolaire','primaire','post-primaire','secondaire'], subjectsCovered: ALL,
    officialDocuments: ['Guides pédagogiques et ressources enseignants publiés par le MENAPLN'],
    verificationRule: 'Associer chaque guide/programme à son cycle, sa classe et sa version réglementaire.', lastChecked: CHECKED
  },
  {
    countryCode: 'SN', countryName: 'Sénégal', authority: 'Ministère de l’Éducation nationale / INEADE',
    officialPortal: 'https://www.education.sn/', currentSchoolYear: '2026-2027', status: 'PARTIELLEMENT_INTEGRE',
    levelsCovered: ['préscolaire','élémentaire','moyen','secondaire général et technique'], subjectsCovered: ALL,
    officialDocuments: ['Curriculum de l’éducation de base (CEB)','Programmes du moyen et du secondaire','Référentiels d’évaluation'],
    verificationRule: 'Utiliser uniquement les versions publiées/arrêtées et conserver la référence réglementaire.', lastChecked: CHECKED
  },
  {
    countryCode: 'MA', countryName: 'Maroc', authority: 'Ministère de l’Éducation nationale, du Préscolaire et des Sports',
    officialPortal: 'https://www.men.gov.ma/fr/documents-officiels', currentSchoolYear: '2026-2027', status: 'SOURCE_OFFICIELLE_CONFIGUREE',
    levelsCovered: ['préscolaire','primaire','collège','secondaire qualifiant'], subjectsCovered: ALL,
    officialDocuments: ['Documents officiels et curricula du MENPS'],
    verificationRule: 'Ne jamais confondre document officiel, projet de curriculum et ressource pédagogique.', lastChecked: CHECKED
  },
];

// Les autres pays du routeur sont explicitement suivis comme « à importer ».
// Ils restent routables, mais leurs contenus nationaux ne sont jamais présentés
// comme des programmes officiels intégrés tant que le corpus n'a pas été importé.
const ROUTER_ONLY_COUNTRIES: Array<[string,string,string,string,string]> = [
  ['ML','Mali','Ministère de l’Éducation nationale','https://education.gouv.ml/','2026-2027'],
  ['GN','Guinée','Ministère de l’Enseignement pré-universitaire','https://education.gov.gn/','2026-2027'],
  ['CM','Cameroun','MINEDUB / MINESEC','https://www.minesec.gov.cm/','2026-2027'],
  ['CD','RDC','Ministère de l’Éducation nationale et Nouvelle citoyenneté','https://edu-nc.gouv.cd/','2026-2027'],
  ['CG','Congo','Ministère de l’Enseignement primaire, secondaire et de l’alphabétisation','https://www.enseignement.gouv.cg/','2026-2027'],
  ['BJ','Bénin','Ministères chargés des enseignements','https://www.gouv.bj/','2026-2027'],
  ['TG','Togo','Ministère des Enseignements primaire, secondaire et technique','https://education.gouv.tg/','2026-2027'],
  ['NE','Niger','Ministère de l’Éducation nationale','https://www.education.gouv.ne/','2026-2027'],
  ['TD','Tchad','Ministère de l’Éducation nationale','https://education.gouv.td/','2026-2027'],
  ['GA','Gabon','Ministère de l’Éducation nationale','https://www.education.gouv.ga/','2026-2027'],
  ['DZ','Algérie','Ministère de l’Éducation nationale','https://www.education.gov.dz/','2026-2027'],
  ['TN','Tunisie','Ministère de l’Éducation','http://www.education.gov.tn/','2026-2027'],
  ['BE','Belgique','Communautés éducatives','https://www.enseignement.be/','2026-2027'],
  ['CH','Suisse','CDIP / cantons','https://www.edk.ch/','2026-2027'],
  ['CA','Canada','Autorités provinciales','https://www.canada.ca/fr/services/education.html','2026-2027'],
  ['US','États-Unis','États / districts','https://www.ed.gov/','2026-2027'],
  ['GB','Royaume-Uni','Systèmes dévolus','https://www.gov.uk/browse/education','2026-2027'],
  ['IE','Irlande','Department of Education','https://www.gov.ie/en/organisation/department-of-education/','2026-2027'],
  ['DE','Allemagne','KMK / Länder','https://www.kmk.org/','2026-2027'],
  ['ES','Espagne','Ministerio de Educación','https://www.educacionfpydeportes.gob.es/','2026-2027'],
  ['PT','Portugal','Ministério da Educação','https://www.dge.mec.pt/','2026-2027'],
  ['IT','Italie','Ministero dell’Istruzione e del Merito','https://www.istruzione.gov.it/','2026-2027'],
  ['JP','Japon','MEXT','https://www.mext.go.jp/en/','2026-2027'],
  ['CN','Chine','Ministry of Education','http://en.moe.gov.cn/','2026-2027'],
  ['AU','Australie','ACARA','https://www.australiancurriculum.edu.au/','2026-2027'],
  ['IN','Inde','Ministry of Education / boards','https://www.education.gov.in/','2026-2027'],
  ['ZA','Afrique du Sud','Department of Basic Education','https://www.education.gov.za/','2026-2027'],
  ['BR','Brésil','Ministério da Educação','https://www.gov.br/mec/','2026-2027'],
  ['MX','Mexique','Secretaría de Educación Pública','https://www.gob.mx/sep','2026-2027'],
  ['AE','Émirats arabes unis','Ministry of Education','https://www.moe.gov.ae/','2026-2027'],
  ['SG','Singapour','Ministry of Education','https://www.moe.gov.sg/','2026-2027'],
  ['RW','Rwanda','Rwanda Basic Education Board','https://www.reb.rw/','2026-2027'],
  ['ET','Éthiopie','Ministry of Education','https://moe.gov.et/','2026-2027'],
];

for (const [countryCode,countryName,authority,officialPortal,currentSchoolYear] of ROUTER_ONLY_COUNTRIES) {
  OFFICIAL_CURRICULUM_COVERAGE.push({
    countryCode, countryName, authority, officialPortal, currentSchoolYear,
    status: 'A_IMPORTER', levelsCovered: [], subjectsCovered: [], officialDocuments: [],
    verificationRule: 'Importer et versionner les programmes officiels avant de les exposer comme savoir national.',
    lastChecked: CHECKED
  });
}

export function getOfficialCurriculumCoverage(countryCode: string): OfficialCurriculumCoverage | null {
  return OFFICIAL_CURRICULUM_COVERAGE.find(x => x.countryCode.toLowerCase() === String(countryCode || '').toLowerCase()) || null;
}

export function isOfficialCorpusIntegrated(countryCode: string): boolean {
  const item = getOfficialCurriculumCoverage(countryCode);
  return item?.status === 'INTEGRE_VERIFIE' || item?.status === 'PARTIELLEMENT_INTEGRE';
}
