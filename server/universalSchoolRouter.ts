import { detectCountryCurriculum, CountryCurriculumProfile, getCountryByCode } from './countryCurriculumRegistry';
import { getOfficialCurriculumCoverage } from './officialCurriculumCoverage';

export type SchoolIntent = 'definition'|'date'|'author'|'work'|'cause'|'consequence'|'characteristics'|'formula'|'theorem'|'method'|'course'|'summary'|'comparison'|'exercise'|'translation'|'argument'|'citation'|'example'|'role'|'objective'|'principle'|'organ'|'limit'|'advantage'|'manifestation'|'unknown';

const INTENTS: Array<[SchoolIntent, RegExp]> = [
 // Les demandes les plus précises passent avant les demandes génériques.
 ['translation', /\b(traduire|traduction|translate|translation)\b/i],
 ['exercise', /\b(exercice|exos?|problème|probleme|devoir|corrigé|corrige|résoudre|resoudre|solution)\b/i],
 ['definition', /\b(definition|définition|definir|définir|signification|sens de|qu'est[- ]ce que|c'est quoi)\b/i],
 ['date', /\b(date|dates|quand|année|annee|siècle|siecle|chronologie|repères?)\b/i],
 ['cause', /\b(cause|causes|pourquoi|origine|origines|facteurs?|raisons?)\b/i],
 ['consequence', /\b(conséquence|consequence|effet|résultat|resultat|impact|bilan)\b/i],
 ['formula', /\b(formule|formules|équation|equation|calcul|expression)\b/i],
 ['theorem', /\b(théorème|theoreme|propriété|propriete|réciproque|reciproque|loi|règle|regle)\b/i],
 ['method', /\b(méthode|methode|comment résoudre|comment resoudre|comment faire|démarche|demarche|procédure|procedure)\b/i],
 ['comparison', /\b(compare|comparaison|différence|difference|opposition|versus|\bvs\b|comparer)\b/i],
 ['summary', /\b(résumé|resume|synthèse|synthese|en bref|résumer|resumer)\b/i],
 ['author', /\b(qui est|auteur|autrice|écrivain|ecrivain|philosophe|scientifique|biographie|vie de)\b/i],
 ['work', /\b(oeuvre|œuvre|roman|poeme|poème|piece|pièce|livre)\b/i],
 ['argument', /\b(argument|arguments|thèse|these|antithèse|antithese|axes? de dissertation)\b/i],
 ['citation', /\b(citation|citations|phrase de|citation de)\b/i],
 ['example', /\b(exemple|exemples|illustration|illustrations|cas concret|application)\b/i],
 ['role', /\b(rôle|role|fonction|importance|utilité|utilite)\b/i],
 ['objective', /\b(objectif|objectifs|but|buts|mission|missions)\b/i],
 ['principle', /\b(principe|principes|fondement|fondements|règle|regle)\b/i],
 ['organ', /\b(organe|organes|structure|structures|institution|institutions)\b/i],
 ['limit', /\b(limite|limites|faiblesse|faiblesses|inconvénient|inconvenients|critique)\b/i],
 ['advantage', /\b(avantage|avantages|atout|atouts|force|forces|bénéfice|benefice)\b/i],
 ['manifestation', /\b(manifestation|manifestations|déroulement|deroulement|événement|evenement|étapes|etapes|phases)\b/i],
 ['characteristics', /\b(caractéristique|caracteristique|caractéristiques|propriété|proprietes|traits|particularités)\b/i],
 ['course', /\b(cours|chapitre|leçon|lecon|notion|programme|fiche de cours)\b/i],
];

export { getOfficialCurriculumCoverage };

export interface UniversalSchoolContext {
  country: CountryCurriculumProfile | null;
  countryExplicit: boolean;
  intent: SchoolIntent;
  strictCountryMode: boolean;
}

export function resolveUniversalSchoolContext(query: string, requestedCurriculum?: string): UniversalSchoolContext {
  const country = detectCountryCurriculum(query);
  const explicitCurriculum = String(requestedCurriculum || '').trim();
  const explicitCountry = country || getCountryByCode(explicitCurriculum);
  const intent = INTENTS.find(([, re]) => re.test(query))?.[0] || 'unknown';
  return { country: explicitCountry, countryExplicit: Boolean(explicitCountry), intent, strictCountryMode: Boolean(explicitCountry && explicitCountry.code !== 'CI') };
}
