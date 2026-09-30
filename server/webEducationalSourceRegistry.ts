/**
 * Registre de sources pédagogiques publiques repérées sur le web.
 * Usage : routage/contrôle en arrière-plan uniquement ; aucune source n'est affichée dans la réponse élève.
 * Sans IA ni API d'IA.
 */
export interface EducationalWebSource {
  id: string;
  country: string;
  scope: string;
  authority: string;
  domain: string;
  url: string;
  reliabilityRole: "official_curriculum" | "official_resources" | "international_reference";
}

export const EDUCATIONAL_WEB_SOURCES: EducationalWebSource[] = [
  { id: "ci_mena_programmes", country: "CI", scope: "programmes éducatifs nationaux", authority: "MENAET Côte d'Ivoire", domain: "education.gouv.ci", url: "https://www.education.gouv.ci/index.php/Reseaux/enseignement", reliabilityRole: "official_curriculum" },
  { id: "ci_mon_ecole_maison", country: "CI", scope: "cours, exercices, quiz et manuels", authority: "MENA Côte d'Ivoire", domain: "education.gouv.ci", url: "https://www.education.gouv.ci/index.php/Activite/details/382", reliabilityRole: "official_resources" },
  { id: "sn_programmes", country: "SN", scope: "programmes et curricula", authority: "Ministère de l'Éducation nationale du Sénégal", domain: "education.sn", url: "https://ialouga.education.sn/espace-enseignants", reliabilityRole: "official_curriculum" },
  { id: "sn_resources", country: "SN", scope: "ressources par niveau et matière", authority: "Ministère de l'Éducation nationale du Sénégal", domain: "education.sn", url: "https://iasedhiou.education.sn/espace-eleves", reliabilityRole: "official_resources" },
  { id: "fr_eduscol_francais", country: "FR", scope: "programmes et ressources de français", authority: "Ministère de l'Éducation nationale", domain: "eduscol.education.gouv.fr", url: "https://eduscol.education.gouv.fr/5793/programmes-et-ressources-en-francais-voie-gt", reliabilityRole: "official_curriculum" },
  { id: "fr_programmes_oeuvres_2026", country: "FR", scope: "programme national d'œuvres 2026-2027", authority: "Ministère de l'Éducation nationale", domain: "education.gouv.fr", url: "https://www.education.gouv.fr/bo/2025/Hebdo30/MENE2518792N", reliabilityRole: "official_curriculum" },
  { id: "fr_llcer", country: "FR", scope: "langues, littératures et cultures étrangères", authority: "Ministère de l'Éducation nationale", domain: "eduscol.education.gouv.fr", url: "https://eduscol.education.gouv.fr/5814/programmes-et-ressources-en-langues-litteratures-et-cultures-etrangeres-et-regionales-voie-g", reliabilityRole: "official_curriculum" },
  { id: "unesco_africa", country: "MULTI-AFRICA", scope: "ressources éducatives et politiques de l'éducation", authority: "UNESCO IICBA", domain: "unesco.org", url: "https://www.iicba.unesco.org/en/africa-education-knowledge-platform", reliabilityRole: "international_reference" },
];

export function getEducationalSourcesForCountry(countryCode: string): EducationalWebSource[] {
  const code = countryCode.toUpperCase();
  return EDUCATIONAL_WEB_SOURCES.filter(s => s.country === code || s.country === "MULTI-AFRICA");
}
