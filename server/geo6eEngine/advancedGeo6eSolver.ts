export interface Geo6eAdvancedResult {
  handled: boolean;
  title: string;
  solution: string;
  rule: string;
}

function num(s:string): number { return Number(s.replace(/\s/g,'').replace(',','.')); }
function fmt(n:number):string { return Number.isInteger(n)?String(n):n.toFixed(2).replace(/0+$/,'').replace(/\.$/,''); }

export function solveGeo6eQuantitative(statement:string): Geo6eAdvancedResult {
  const t=statement.toLowerCase();
  // Échelle numérique : 1 cm sur la carte représente X km dans la réalité.
  let m=t.match(/(?:échelle|echelle)\s*(?:=|:)?\s*1\s*(?:cm|centimètre)\s*(?:représente|represente|correspond à|correspond a|pour)\s*([\d\s.,]+)\s*(km|m)\b[\s\S]*?(?:distance|longueur)[^\d]*([\d\s.,]+)\s*(cm|centimètre|mm|m)?/i);
  if(m){
    const realityPerCm=num(m[1])*(m[2].toLowerCase()==='m'?1/1000:1);
    const mapDist=num(m[3]); const unit=(m[4]||'cm').toLowerCase();
    const mapCm=unit.startsWith('mm')?mapDist/10:unit.startsWith('m')?mapDist*100:mapDist;
    return {handled:true,title:'Calcul d’échelle',solution:`Distance réelle = ${fmt(mapCm)} × ${fmt(realityPerCm)} km = **${fmt(mapCm*realityPerCm)} km**.`,rule:'À l’échelle 1 cm → X km, une distance mesurée de d cm correspond à d × X km dans la réalité.'};
  }
  // Amplitude thermique.
  m=t.match(/(?:température|temperature)[\s\S]{0,100}?(?:max(?:imum)?|plus chaude|plus élevée)[^\d-]*(-?[\d\s.,]+)\s*°?c[\s\S]{0,100}?(?:min(?:imum)?|plus froide|moins élevée)[^\d-]*(-?[\d\s.,]+)\s*°?c/i);
  if(m){const a=num(m[1]),b=num(m[2]);return {handled:true,title:'Amplitude thermique',solution:`Amplitude = Tmax − Tmin = ${a} − (${b}) = **${fmt(a-b)} °C**.`,rule:'L’amplitude thermique est la différence entre la température maximale et la température minimale.'};}
  // Densité de population.
  m=t.match(/(?:population|habitants)[^\d]{0,80}([\d\s.,]+)\s*(?:habitants|personnes)[\s\S]{0,80}?(?:superficie|surface)[^\d]{0,30}([\d\s.,]+)\s*km(?:²|2)/i);
  if(m){const p=num(m[1]),s=num(m[2]); if(s>0)return {handled:true,title:'Densité de population',solution:`Densité = Population ÷ Superficie = ${fmt(p)} ÷ ${fmt(s)} = **${fmt(p/s)} hab./km²**.`,rule:'La densité mesure le nombre moyen d’habitants par kilomètre carré.'};}
  // Déterminer une latitude/longitude simple.
  m=t.match(/(?:latitude|longitude)[^\d-]*(-?[\d\s.,]+)\s*°?\s*(nord|sud|est|ouest)/i);
  if(m){return {handled:true,title:'Coordonnée géographique',solution:`**${fmt(num(m[1]))}° ${m[2]}**.`,rule:'La latitude se mesure au nord/sud de l’équateur ; la longitude à l’est/ouest du méridien de Greenwich.'};}
  // Conversion simple de durée liée à rotation/fuseaux.
  m=t.match(/(?:rotation|jour|24\s*heures)[\s\S]{0,100}?(\d+)\s*(?:heure|heures)[\s\S]{0,60}?(?:tour|rotation)/i);
  if(m){const h=num(m[1]);return {handled:true,title:'Rotation de la Terre',solution:`La Terre effectue une rotation complète en **24 heures** ; donc ${h} heure(s) correspond(ent) à ${fmt(h/24)} tour(s).`,rule:'Une rotation complète de la Terre correspond à 24 heures.'};}
  return {handled:false,title:'',solution:'',rule:''};
}
