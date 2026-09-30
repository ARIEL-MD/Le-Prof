import type { MethodologyAnalysisResult } from '../../src/types';

type Discipline = 'SES' | 'Informatique' | 'Droit-Gestion' | 'Sciences de l’ingénieur';

function norm(s: string) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
function num(s: string): number | null { const m = s.replace(/\s/g,'').match(/[-+]?\d+(?:[.,]\d+)?/); return m ? Number(m[0].replace(',','.')) : null; }
function nums(s: string): number[] { return [...s.matchAll(/[-+]?\d+(?:[.,]\d+)?/g)].map(m=>Number(m[0].replace(',','.'))).filter(Number.isFinite); }
function pct(x:number){ return `${Number(x.toFixed(2))}\%`; }
function methodResult(discipline: Discipline, type:string, statement:string, steps:string[], answer:string, verification='Contrôle des données et du résultat effectué.') : MethodologyAnalysisResult {
  const short = steps.length ? steps[0] : 'Analyse de l’énoncé.';
  return {
    exerciseTypeIdentified:type, disciplineIdentified:discipline,
    fasciculeMethodologyActivated:{name:`Méthode déterministe — ${discipline}`,description:`Analyse locale de l’énoncé sans IA générative.`,stepsApplied:steps},
    sourceDecomposition:{fasciculeMethodologies:[`Règles disciplinaires ${discipline}`],fasciculeKnowledgeUsed:[],externalKnowledgeMobilized:[]},
    pedagogicalTransferExplanation:`La résolution utilise uniquement les données présentes dans l’énoncé et une règle explicitement identifiée.`,
    level1Hint:`Repère la grandeur ou la notion demandée.`, level2Methodology:short, level3GuidanceSteps:steps,
    level4DetailedOutline:steps.map((s,i)=>`${i+1}. ${s}`).join('\n'), level5FullRedaction:`${steps.join('\n')}\n\nRéponse : ${answer}\nVérification : ${verification}`,
    structuredRedaction:{introduction:'',part1:{partNumber:1,title:'Résolution',thesisOverview:'',subParts:[],fullText:steps.join('\n')},transition1:'',part2:{partNumber:2,title:'Vérification',thesisOverview:'',subParts:[],fullText:verification},conclusion:{bilanSynthese:'',reponseDefinitive:answer,elargissement:'',fullText:answer}},
    stepByStepBreakdown:steps.map((s,i)=>({stepNumber:i+1,stepTitle:`Étape ${i+1}`,description:s,content:s})),
    fullSynthesizedResponse:`${steps.join('\n')}\n\n**Réponse :** ${answer}\n\n**Vérification :** ${verification}`,
    evaluationCriteria:[{criterion:'Exactitude',expected:'Calculs et règles cohérents',weight:1},{criterion:'Méthode',expected:'Méthode adaptée à la question',weight:1}],
    isDirectRestitution:true,isFallback:false
  } as any;
}

function solveSES(s:string): MethodologyAnalysisResult | null {
  const n=norm(s); const a=nums(s);
  if (/taux de chomage|chomage/.test(n) && a.length>=2) {
    const [chomeurs,popActive]=a; if(popActive!==0){ const r=100*chomeurs/popActive; return methodResult('SES','Taux de chômage',s,[`Taux de chômage = (nombre de chômeurs / population active) × 100.`,`= (${chomeurs} / ${popActive}) × 100 = ${pct(r)}.`],`Taux de chômage = ${pct(r)}`); }
  }
  if (/taux d emploi|taux d'emploi/.test(n) && a.length>=2) { const r=100*a[0]/a[1]; return methodResult('SES',"Taux d’emploi",s,[`Taux d’emploi = (actifs occupés / population en âge de travailler) × 100.`,`= (${a[0]} / ${a[1]}) × 100 = ${pct(r)}.`],`Taux d’emploi = ${pct(r)}`); }
  if (/inflation|indice des prix|ipc/.test(n) && a.length>=2 && a[0]!==0) { const r=100*(a[1]-a[0])/a[0]; return methodResult('SES','Taux d’inflation',s,[`Taux d’inflation = ((indice final − indice initial) / indice initial) × 100.`,`= ((${a[1]} − ${a[0]}) / ${a[0]}) × 100 = ${pct(r)}.`],`Taux d’inflation = ${pct(r)}`); }
  if (/croissance.*pib|taux de croissance|croissance economique/.test(n) && a.length>=2 && a[0]!==0) { const r=100*(a[1]-a[0])/a[0]; return methodResult('SES','Taux de croissance',s,[`Taux de croissance = ((valeur finale − valeur initiale) / valeur initiale) × 100.`,`= ((${a[1]} − ${a[0]}) / ${a[0]}) × 100 = ${pct(r)}.`],`Croissance = ${pct(r)}`); }
  if (/elasticite|élasticite/.test(n) && a.length>=2 && a[1]!==0) { const r=a[0]/a[1]; return methodResult('SES','Élasticité',s,[`Élasticité = variation relative de la demande / variation relative du prix.`,`Données interprétées : ${a[0]} / ${a[1]} = ${Number(r.toFixed(4))}.`],`Élasticité = ${Number(r.toFixed(4))}`); }
  if (/productivite/.test(n) && a.length>=2 && a[1]!==0) { const r=a[0]/a[1]; return methodResult('SES','Productivité',s,[`Productivité = quantité produite / quantité de facteurs utilisés.`,`= ${a[0]} / ${a[1]} = ${Number(r.toFixed(4))}.`],`Productivité = ${Number(r.toFixed(4))} unités par facteur`); }
  if (/part de marche|part de marché/.test(n) && a.length>=2 && a[1]!==0) { const r=100*a[0]/a[1]; return methodResult('SES','Part de marché',s,[`Part de marché = ventes de l’entreprise / ventes totales × 100.`,`= ${a[0]} / ${a[1]} × 100 = ${pct(r)}.`],`Part de marché = ${pct(r)}`); }
  if (/revenu disponible|epargne|épargne/.test(n) && a.length>=2) { const r=a[0]-a[1]; return methodResult('SES','Revenu disponible / épargne',s,[`Épargne = revenu disponible − consommation.`,`= ${a[0]} − ${a[1]} = ${r}.`],`Épargne = ${r}`); }
  if (/definir|definition|que signifie|explique/.test(n)) return methodResult('SES','Notion / définition',s,['Identifier la notion économique ou sociologique demandée.','Donner une définition courte, précise et directement liée au programme.','Ajouter un exemple concret si l’énoncé le demande.'],'Définition à formuler à partir de la notion explicitement demandée.');
  return null;
}

function solveInfo(s:string): MethodologyAnalysisResult | null {
  const n=norm(s), a=nums(s);
  if (/binaire.*decimal|decimal.*binaire/.test(n) && a.length) {
    const x=Math.trunc(a[0]); if(x>=0 && x<1024){ const bin=x.toString(2); return methodResult('Informatique','Conversion binaire / décimal',s,[`On décompose le nombre selon les puissances de 2.`,`${x}_{10} = ${bin}_{2}.`,`Vérification : ${parseInt(bin,2)} = ${x}.`],`${x}_{10} = ${bin}_{2}`); }
  }
  if (/decimal.*binaire/.test(n) && a.length) { const x=Math.trunc(a[0]); if(x>=0){const b=x.toString(2);return methodResult('Informatique','Décimal vers binaire',s,[`Divisions successives par 2 et lecture des restes de bas en haut.`,`${x}_{10} = ${b}_{2}.`],`${b}_{2}`);}}
  if (/and|et logique|conjonction/.test(n) && /or|ou logique|disjonction/.test(n)) return null;
  if (/complexite|complexité/.test(n)) { const m=n.match(/o\s*\(\s*(1|n|n\s*log\s*n|n\^?2|n\^?3|2\^n)\s*\)/); return methodResult('Informatique','Complexité algorithmique',s,[m?`La complexité indiquée est ${m[0].toUpperCase()}.`:'Compter les opérations en fonction de la taille n de l’entrée.','Retenir le terme dominant pour obtenir la complexité asymptotique.'],m?`Complexité : ${m[0].toUpperCase()}`:'Complexité déterminée par l’analyse du nombre d’opérations.'); }
  if (/vrai|faux|true|false/.test(n) && /(and|or|not|et|ou|non)/.test(n) && /0|1/.test(n)) { return methodResult('Informatique','Logique booléenne',s,['Rappeler : AND vaut 1 seulement si les deux entrées valent 1.','OR vaut 1 si au moins une entrée vaut 1.','NOT inverse 0 et 1.'],'Table de vérité à appliquer aux valeurs fournies.'); }
  if (/python|programme|algorithme|boucle|for|while|fonction/.test(n)) {
    return methodResult('Informatique','Analyse d’algorithme / programme',s,['Identifier les variables initiales.','Suivre l’ordre d’exécution instruction par instruction.','Pour chaque boucle, déterminer le nombre d’itérations et la valeur des variables.','Comparer la sortie obtenue avec la sortie demandée.'],'Exécution déterministe du programme selon l’ordre des instructions.');
  }
  if (/sql|select|requete|requête|base de donnees|base de données/.test(n)) return methodResult('Informatique','Base de données / SQL',s,['Identifier les tables et colonnes nécessaires.','Repérer les conditions WHERE, les regroupements GROUP BY et les tris ORDER BY.','Construire ou analyser la requête sans modifier les données.'],'Requête déterminée à partir des tables, colonnes et conditions présentes.');
  return null;
}

function solveDroit(s:string): MethodologyAnalysisResult | null {
  const n=norm(s);
  if (/cas pratique|responsabilite|responsabilité|dommage|prejudice|préjudice/.test(n)) return methodResult('Droit-Gestion','Cas pratique / responsabilité',s,['Qualifier juridiquement les faits.','Identifier les parties, le dommage, le fait générateur et le lien de causalité.','Rechercher la règle juridique applicable dans le référentiel fourni.','Appliquer la règle aux faits.','Conclure sans ajouter de fait absent de l’énoncé.'],'Conclusion juridique fondée uniquement sur les faits et la règle identifiés.');
  if (/contrat|obligation|engagement|offre|acceptation/.test(n)) return methodResult('Droit-Gestion','Contrat / obligations',s,['Identifier les parties et leurs obligations.','Vérifier les conditions de formation du contrat.','Qualifier le problème : consentement, capacité, contenu, exécution ou inexécution.','Appliquer la règle aux faits et conclure.'],'Qualification et conclusion selon les conditions et faits de l’énoncé.');
  if (/tva|taxe sur la valeur ajoutee|taxe sur la valeur ajoutée/.test(n)) { const a=nums(s); if(a.length>=2){const r=a[0]*(1+a[1]/100);return methodResult('Droit-Gestion','TVA / prix TTC',s,[`Prix TTC = prix HT × (1 + taux de TVA).`,`= ${a[0]} × (1 + ${a[1]}/100) = ${Number(r.toFixed(2))}.`],`Prix TTC = ${Number(r.toFixed(2))}`);} }
  if (/marge commerciale/.test(n)) { const a=nums(s); if(a.length>=2){const r=a[0]-a[1];return methodResult('Droit-Gestion','Marge commerciale',s,[`Marge = prix de vente − coût d’achat.`,`= ${a[0]} − ${a[1]} = ${r}.`],`Marge = ${r}`);} }
  if (/chiffre d affaires|chiffre d'affaire|resultat|résultat|benefice|bénéfice/.test(n)) { const a=nums(s); if(a.length>=2){const r=a[0]-a[1];return methodResult('Droit-Gestion','Calcul de gestion',s,[`Résultat = produits − charges.`,`= ${a[0]} − ${a[1]} = ${r}.`],`Résultat = ${r}`);} }
  if (/bilan|actif|passif/.test(n)) return methodResult('Droit-Gestion','Bilan comptable',s,['Classer chaque élément dans l’actif ou le passif.','Additionner les postes de chaque côté.','Vérifier l’égalité : Total Actif = Total Passif.'],'Bilan équilibré lorsque Total Actif = Total Passif.');
  return null;
}

function solveSI(s:string): MethodologyAnalysisResult | null {
  const n=norm(s), a=nums(s);
  if (/loi d ohm|loi d'ohm|tension.*courant|courant.*tension/.test(n) && a.length>=2) { const [u,r]=a; if(r!==0){const i=u/r;return methodResult('Sciences de l’ingénieur','Loi d’Ohm',s,[`Loi d’Ohm : U = R × I.`,`Donc I = U/R = ${u}/${r} = ${Number(i.toFixed(4))} A.`],`I = ${Number(i.toFixed(4))} A`);} }
  if (/puissance electrique|puissance électrique/.test(n) && a.length>=2) { const p=a[0]*a[1]; return methodResult('Sciences de l’ingénieur','Puissance électrique',s,['Formule : P = U × I.',`P = ${a[0]} × ${a[1]} = ${Number(p.toFixed(4))} W.`],`P = ${Number(p.toFixed(4))} W`); }
  if (/energie.*electrique|énergie.*électrique/.test(n) && a.length>=2) { const e=a[0]*a[1]; return methodResult('Sciences de l’ingénieur','Énergie électrique',s,['Formule : E = P × t.',`E = ${a[0]} × ${a[1]} = ${Number(e.toFixed(4))}.`],`E = ${Number(e.toFixed(4))}`); }
  if (/rendement/.test(n) && a.length>=2 && a[1]!==0) { const r=100*a[0]/a[1];return methodResult('Sciences de l’ingénieur','Rendement',s,['Rendement = puissance utile / puissance absorbée × 100.',`= ${a[0]} / ${a[1]} × 100 = ${pct(r)}.`],`Rendement = ${pct(r)}`); }
  if (/couple|moment/.test(n) && a.length>=2) { const c=a[0]*a[1];return methodResult('Sciences de l’ingénieur','Couple / moment',s,['Moment d’une force : M = F × d.',`M = ${a[0]} × ${a[1]} = ${Number(c.toFixed(4))} N·m.`],`M = ${Number(c.toFixed(4))} N·m`); }
  if (/vitesse de rotation|vitesse angulaire|frequence|fréquence/.test(n) && a.length>=1) return methodResult('Sciences de l’ingénieur','Cinématique / rotation',s,['Identifier la grandeur demandée et les unités.','Pour une rotation, relier fréquence, période et vitesse angulaire avec les relations adaptées.'],'Relation cinématique déterminée à partir des données disponibles.');
  if (/chaine d energie|chaîne d'énergie|chaine d information|chaîne d'information|systeme automatise|système automatisé/.test(n)) return methodResult('Sciences de l’ingénieur','Analyse fonctionnelle d’un système',s,['Identifier la fonction de service.','Décomposer la chaîne d’information : acquérir → traiter → communiquer.','Décomposer la chaîne d’énergie : alimenter → distribuer → convertir → transmettre → agir.','Relier chaque bloc aux éléments techniques de l’énoncé.'],'Chaîne fonctionnelle établie à partir des éléments du système.');
  return null;
}

export function solveAcademicDeterministic(statement:string, discipline:string): MethodologyAnalysisResult | null {
  if (!statement?.trim()) return null;
  const n=norm(discipline);
  if (/ses|economie|sociologie/.test(n)) return solveSES(statement);
  if (/informatique|nsi|snt|algorithmique|programmation/.test(n)) return solveInfo(statement);
  if (/droit|gestion|management|comptabilite/.test(n)) return solveDroit(statement);
  if (/sciences de l ingenieur|ingenieur|technologie/.test(n)) return solveSI(statement);
  return null;
}
