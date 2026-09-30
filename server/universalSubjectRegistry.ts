export interface UniversalSubjectProfile {
  code: string;
  label: string;
  aliases: string[];
  family: string;
}

export const UNIVERSAL_SUBJECTS: UniversalSubjectProfile[] = [
  {code:'maths',label:'Mathématiques',aliases:['maths','math','mathematiques','mathématiques'],family:'sciences'},
  {code:'francais',label:'Français',aliases:['français','francais','lettres','littérature','litterature'],family:'langues'},
  {code:'anglais',label:'Anglais',aliases:['anglais','english'],family:'langues'},
  {code:'espagnol',label:'Espagnol',aliases:['espagnol','español','spanish'],family:'langues'},
  {code:'allemand',label:'Allemand',aliases:['allemand','deutsch','german'],family:'langues'},
  {code:'arabe',label:'Arabe',aliases:['arabe','arabic'],family:'langues'},
  {code:'histoire',label:'Histoire',aliases:['histoire','history'],family:'sciences_humaines'},
  {code:'geographie',label:'Géographie',aliases:['géographie','geographie','geography'],family:'sciences_humaines'},
  {code:'philosophie',label:'Philosophie',aliases:['philosophie','philo','philosophy'],family:'sciences_humaines'},
  {code:'emc_edhc',label:'Éducation civique / citoyenne',aliases:['edhc','éducation civique','education civique','emc','education morale et civique'],family:'sciences_humaines'},
  {code:'physique',label:'Physique',aliases:['physique','physics'],family:'sciences'},
  {code:'chimie',label:'Chimie',aliases:['chimie','chemistry'],family:'sciences'},
  {code:'svt',label:'SVT / Biologie',aliases:['svt','biologie','biology','sciences de la vie et de la terre'],family:'sciences'},
  {code:'informatique',label:'Informatique / Numérique',aliases:['informatique','computer science','numérique','numerique','nsI','nsi'],family:'sciences'},
  {code:'economie',label:'Économie',aliases:['économie','economie','economics'],family:'sciences_humaines'},
  {code:'sociologie',label:'Sociologie',aliases:['sociologie','sociology'],family:'sciences_humaines'},
  {code:'psychologie',label:'Psychologie',aliases:['psychologie','psychology'],family:'sciences_humaines'},
  {code:'droit',label:'Droit',aliases:['droit','law'],family:'sciences_humaines'},
  {code:'gestion',label:'Gestion / Management',aliases:['gestion','management','comptabilité','comptabilite'],family:'economie_gestion'},
  {code:'arts',label:'Arts plastiques / Histoire des arts',aliases:['arts plastiques','histoire des arts','arts','visual arts'],family:'arts'},
  {code:'musique',label:'Éducation musicale / Musique',aliases:['musique','éducation musicale','education musicale','music'],family:'arts'},
  {code:'theatre',label:'Théâtre',aliases:['théâtre','theatre','drama'],family:'arts'},
  {code:'eps',label:'Éducation physique et sportive',aliases:['eps','sport','éducation physique','education physique','physical education'],family:'pratiques'},
  {code:'technologie',label:'Technologie / Sciences de l’ingénieur',aliases:['technologie','technology','sciences de l ingénieur','sciences de l ingenieur','engineering'],family:'sciences'},
  {code:'geologie',label:'Géologie',aliases:['géologie','geologie','geology'],family:'sciences'},
  {code:'astronomie',label:'Astronomie',aliases:['astronomie','astronomy'],family:'sciences'},
  {code:'statistiques',label:'Statistiques / Probabilités',aliases:['statistiques','statistics','probabilités','probabilites','probability'],family:'sciences'},
  {code:'education_medias',label:'Éducation aux médias et à l’information',aliases:['emi','éducation aux médias','education aux medias','media literacy'],family:'transversal'},
  {code:'latin_grec',label:'Langues et cultures de l’Antiquité',aliases:['latin','grec ancien','grec','langues anciennes','classics'],family:'langues'},
  {code:'religion',label:'Enseignement religieux / Religions',aliases:['religion','religions','religious studies'],family:'sciences_humaines'},
  {code:'philosophie_sciences',label:'Épistémologie / Philosophie des sciences',aliases:['épistémologie','epistemologie','philosophie des sciences','philosophy of science'],family:'sciences_humaines'},
];

function norm(s:string){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
export function detectUniversalSubject(query:string): UniversalSubjectProfile|null {
  const q=norm(query);
  return [...UNIVERSAL_SUBJECTS].sort((a,b)=>Math.max(...b.aliases.map(x=>norm(x).length))-Math.max(...a.aliases.map(x=>norm(x).length))).find(s=>s.aliases.some(a=>new RegExp(`(^|\\s)${norm(a).replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}(?=\\s|$)`).test(q))) || null;
}
