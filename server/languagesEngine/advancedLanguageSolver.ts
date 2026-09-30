import { SupportedLanguage } from './types';

export interface AdvancedLanguageResult {
  handled: boolean;
  title: string;
  solution: string;
  rule: string;
  french?: string;
}

const EN_IRR: Record<string, {past:string; pp:string}> = {
  go:{past:'went',pp:'gone'}, come:{past:'came',pp:'come'}, see:{past:'saw',pp:'seen'}, take:{past:'took',pp:'taken'}, write:{past:'wrote',pp:'written'}, eat:{past:'ate',pp:'eaten'}, give:{past:'gave',pp:'given'}, make:{past:'made',pp:'made'}, do:{past:'did',pp:'done'}, have:{past:'had',pp:'had'}, buy:{past:'bought',pp:'bought'}, teach:{past:'taught',pp:'taught'}, think:{past:'thought',pp:'thought'}, speak:{past:'spoke',pp:'spoken'}, break:{past:'broke',pp:'broken'}, choose:{past:'chose',pp:'chosen'}, find:{past:'found',pp:'found'}, get:{past:'got',pp:'gotten'}, know:{past:'knew',pp:'known'}, read:{past:'read',pp:'read'}, run:{past:'ran',pp:'run'}, say:{past:'said',pp:'said'}, tell:{past:'told',pp:'told'}, understand:{past:'understood',pp:'understood'}
};

function enPast(v:string){const x=v.toLowerCase(); if(EN_IRR[x])return EN_IRR[x].past; if(x.endsWith('e'))return x+'d'; if(x.endsWith('y')&&!/[aeiou]y$/.test(x))return x.slice(0,-1)+'ied'; return x+'ed';}
function enPP(v:string){const x=v.toLowerCase(); if(EN_IRR[x])return EN_IRR[x].pp; return enPast(x);}
function en3sg(v:string){const x=v.toLowerCase(); if(x==='be')return 'is'; if(x==='have')return 'has'; if(x==='do')return 'does'; if(/[sxz]|(ch|sh)$/.test(x))return x+'es'; if(x.endsWith('y')&&!/[aeiou]y$/.test(x))return x.slice(0,-1)+'ies'; return x+'s';}

function englishTense(text:string): AdvancedLanguageResult {
  const m = text.match(/(?:put|use|conjugate|conjugue|mets?|conjuguer).*?(?:in|au|à|into)\s+(present simple|past simple|future simple|present continuous|past continuous|present perfect|past perfect|futur|prétérit|prétérite|présent simple|présent continu|past continuous|present perfect|past perfect)\s*:?\s*(?:the\s+)?([a-z]+)(?:\s+([a-z]+))?/i);
  if (!m) return {handled:false,title:'',solution:'',rule:''};
  const tense=m[1].toLowerCase(), v=m[2].toLowerCase(), subj=m[3] || 'I';
  const plural=/^(we|they|you)$/i.test(subj), third=/^(he|she|it)$/i.test(subj);
  let form='';
  if(/present simple|présent simple/.test(tense)) form=third?en3sg(v):v;
  else if(/past simple|prétérit|prétérite/.test(tense)) form=enPast(v);
  else if(/future simple|futur/.test(tense)) form=`will ${v}`;
  else if(/present continuous|présent continu/.test(tense)) form=`${third?'is':plural?'are':'am'} ${v.replace(/e$/,'')}ing`;
  else if(/past continuous/.test(tense)) form=`${plural||/^(you|we|they)$/i.test(subj)?'were':'was'} ${v.replace(/e$/,'')}ing`;
  else if(/present perfect/.test(tense)) form=`${plural||/^(I|you)$/i.test(subj)?'have':'has'} ${enPP(v)}`;
  else if(/past perfect/.test(tense)) form=`had ${enPP(v)}`;
  else return {handled:false,title:'',solution:'',rule:''};
  return {handled:true,title:'Conjugaison anglaise',solution:`**${subj} + ${v} → ${form}**`,rule:`Temps demandé : ${m[1]}. La forme est construite avec l'auxiliaire et/ou la terminaison correspondant au temps.`,french:`Forme obtenue : ${form}`};
}

function englishReported(text:string): AdvancedLanguageResult {
  const m=text.match(/(?:reported speech|indirect speech|discours indirect).*?:?\s*["“]?(.+?)["”]?$/i);
  if(!m)return {handled:false,title:'',solution:'',rule:''};
  let s=m[1].trim().replace(/[.!?]+$/,'');
  s=s.replace(/\b(I am|I'm)\b/gi,'he was').replace(/\bI have\b/gi,'he had').replace(/\bI will\b/gi,'he would').replace(/\bI can\b/gi,'he could').replace(/\bI\b/gi,'he').replace(/\bmy\b/gi,'his').replace(/\btoday\b/gi,'that day').replace(/\btomorrow\b/gi,'the next day').replace(/\byesterday\b/gi,'the day before');
  s=s.replace(/\bis\b/gi,'was').replace(/\bare\b/gi,'were').replace(/\bhas\b/gi,'had').replace(/\bwill\b/gi,'would');
  return {handled:true,title:'Reported speech',solution:`**Reported speech :** ${s}.`,rule:'Après un verbe introducteur au passé, les temps et certains repères de personne/temps sont généralement décalés.',french:'Transformation déterministe selon les changements de temps et de repères les plus courants.'};
}

function englishComparative(text:string): AdvancedLanguageResult {
  const m=text.match(/(?:comparative|comparatif).*?:?\s*([a-z]+)\s+and\s+([a-z]+)|(?:compare)\s+([a-z]+)\s+and\s+([a-z]+)/i);
  if(!m)return {handled:false,title:'',solution:'',rule:''};
  const a=(m[1]||m[3]).toLowerCase(), b=(m[2]||m[4]).toLowerCase();
  const cmp=(x:string)=>x.length<=5?`${x}er than`:`more ${x} than`;
  return {handled:true,title:'Comparatif anglais',solution:`**${a} → ${cmp(a)}**\n**${b} → ${cmp(b)}**`,rule:'Adjectif court : -er + than. Adjectif plus long : more + adjectif + than.',french:'Comparatif : plus … que.'};
}

function germanAdvanced(text:string): AdvancedLanguageResult {
  const low=text.toLowerCase();
  const perf=text.match(/(?:pr[äa]teritum|präteritum|pass[ée] au pr[ée]t[ée]rit).*?:?\s*(?:ich|du|er|sie|wir|ihr|sie)?\s*([a-zäöüß]+)/i);
  if(perf){
    const v=perf[1].toLowerCase(); const map:Record<string,string>={gehen:'ging',kommen:'kam',sein:'war',haben:'hatte',werden:'wurde',sehen:'sah',geben:'gab',nehmen:'nahm',sprechen:'sprach',schreiben:'schrieb',lesen:'las',essen:'aß',fahren:'fuhr'};
    const form=map[v]||`${v}te`; return {handled:true,title:'Präteritum allemand',solution:`**${v} → ${form}**`,rule:'Le Präteritum emploie une forme simple ; de nombreux verbes forts ont une forme irrégulière.',french:`Forme au Präteritum : ${form}`};
  }
  const wordOrder=low.match(/(?:\bweil|\bdass|\bobwohl|\bwenn)\s*:?\s*(.+)/i);
  if(wordOrder){
    const connector=(low.match(/^(weil|dass|obwohl|wenn)/i)?.[1] || 'weil');
    const parts=wordOrder[1].replace(/[.!?]+$/,'').trim().split(/\s+/);
    if(parts.length>=2){
      // Forme pédagogique robuste pour une proposition simple : Sujet + verbe + compléments -> Sujet + compléments + verbe.
      const verb=parts[1]; const reordered=[parts[0], ...parts.slice(2), verb];
      return {handled:true,title:'Ordre des mots en allemand',solution:`**${connector} ${reordered.join(' ')}.**`,rule:'Dans une subordonnée introduite par weil, dass, obwohl ou wenn, le verbe conjugué se place en fin de proposition.',french:'Le verbe conjugué est placé à la fin de la subordonnée.'};
    }
  }
  const modal=text.match(/(?:modal|verbe de modalit[ée]).*?:?\s*(müssen|können|dürfen|sollen|wollen|möchten|müssen)/i);
  if(modal){return {handled:true,title:'Verbes de modalité allemands',solution:`**${modal[1]}** : le verbe modal est conjugué et l'infinitif lexical est rejeté en fin de proposition.`,rule:'Structure : sujet + modal conjugué + compléments + infinitif.',french:'Le verbe modal porte la conjugaison.'};}
  return {handled:false,title:'',solution:'',rule:''};
}

function spanishAdvanced(text:string): AdvancedLanguageResult {
  const low=text.toLowerCase();
  const m=low.match(/(?:indefinido|pretérito indefinido|imperfecto|futuro simple|condicional).*?\b(yo|tú|él|ella|nosotros|vosotros|ellos)\b.*?\b([a-záéíóúñ]+)\b/i);
  if(m){
    const tense=low.includes('imperfecto')?'imperfecto':low.includes('futuro')?'futuro simple':low.includes('condicional')?'condicional':'pretérito indefinido'; const s=m[1],v=m[2];
    const stems={hablar:['hablé','hablaste','habló','hablamos','hablasteis','hablaron'],comer:['comí','comiste','comió','comimos','comisteis','comieron'],vivir:['viví','viviste','vivió','vivimos','vivisteis','vivieron']} as Record<string,string[]>;
    const idx:Record<string,number>={yo:0,'tú':1,él:2,ella:2,nosotros:3,vosotros:4,ellos:5}; const arr=stems[v];
    if(tense==='pretérito indefinido'&&arr){return {handled:true,title:'Pretérito indefinido',solution:`**${s} ${arr[idx[s]]}**`,rule:'Pour les verbes réguliers : -ar et -er/-ir suivent des terminaisons spécifiques au prétérit.',french:'Action achevée dans le passé.'};}
  }
  if(/ser\s*(?:o|y|\/?)\s*estar|ser y estar/.test(low)){
    return {handled:true,title:'Ser / Estar',solution:'**SER** : identité, caractéristique, origine, profession, heure.\n**ESTAR** : état/situation, localisation, résultat temporaire.',rule:'Choisir selon la nature de l’information exprimée.',french:'Ser correspond généralement à ce qui définit ; estar à un état ou une localisation.'};
  }
  if(/por\s*(?:o|y)\s*para/.test(low)){
    return {handled:true,title:'Por / Para',solution:'**PARA** : but, destination, destinataire, échéance.\n**POR** : cause, moyen, durée, passage, échange.',rule:'La valeur logique du complément détermine la préposition.',french:'Para indique notamment le but ou la destination ; por la cause, le moyen ou la durée.'};
  }
  return {handled:false,title:'',solution:'',rule:''};
}

export function solveAdvancedLanguageTask(text:string, language:SupportedLanguage): AdvancedLanguageResult {
  if(language==='anglais') return englishTense(text).handled?englishTense(text):englishReported(text).handled?englishReported(text):englishComparative(text);
  if(language==='allemand') return germanAdvanced(text);
  return spanishAdvanced(text);
}
