/**
 * Utilitaire académique de formatage et de typographie
 * Assure notamment la mise en gras systématique des titres numérotés
 * (ex: "1. CRÉATION ET SIÈGE :", "2. OBJECTIFS FONDAMENTAUX :", etc.)
 */

/**
 * Détecte et formate en gras Markdown (**...**) tout titre ou sous-section
 * numéroté de type "1. ... :", "2. OBJECTIFS FONDAMENTAUX :", etc.
 */
export function ensureNumberedTitlesBold(text: string): string {
  if (!text) return '';

  return text
    .split('\n')
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return line;

      // Si la ligne est déjà entièrement entre balises de gras
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return line;
      }

      const indent = line.match(/^\s*/)?.[0] || '';

      // Cas 1 : Ligne avec puce (ex: "• 2. OBJECTIFS FONDAMENTAUX :")
      const bulletMatch = line.match(/^(\s*[•\-\*]\s*)([0-9]+\.\s+[^\n]+)$/);
      if (bulletMatch) {
        const bulletPrefix = bulletMatch[1];
        const rest = bulletMatch[2].trim();

        // Déjà en gras
        if (rest.startsWith('**') && rest.endsWith('**')) {
          return line;
        }

        // Titre tout en majuscules (ex: "• 2. OBJECTIFS FONDAMENTAUX :")
        if (/^[0-9]+\.\s+[A-ZÀ-Ÿ\d\s'’()\-–&/,:]{3,90}$/.test(rest)) {
          return `${bulletPrefix}**${rest}**`;
        }

        // Titre avec deux-points (ex: "• 1. Structure cellulaire : contenu...")
        const colonMatch = rest.match(/^([0-9]+\.\s+[^\n:]{2,80}\s*:)/);
        if (colonMatch) {
          const titlePart = colonMatch[1];
          if (rest.startsWith(`**${titlePart}**`)) return line;
          const after = rest.slice(titlePart.length).trim();
          return `${bulletPrefix}**${titlePart}**${after ? ` ${after}` : ''}`;
        }
        return line;
      }

      // Cas 2 : Titre numéroté tout en majuscules (ex: "2. OBJECTIFS FONDAMENTAUX :", "1. PREMIÈRE LOI : LE PRINCIPE D'INERTIE")
      if (/^[0-9]+\.\s+[A-ZÀ-Ÿ\d\s'’()\-–&/,:]{3,90}$/.test(trimmed)) {
        return `${indent}**${trimmed}**`;
      }

      // Cas 3 : Titre numéroté se terminant par deux-points ou contenant un intitulé suivi de ":"
      const colonMatch = trimmed.match(/^([0-9]+\.\s+[^\n:]{2,80}\s*:)/);
      if (colonMatch) {
        const titlePart = colonMatch[1];
        if (trimmed.startsWith(`**${titlePart}**`)) return line;
        const after = trimmed.slice(titlePart.length).trim();
        return `${indent}**${titlePart}**${after ? ` ${after}` : ''}`;
      }

      return line;
    })
    .join('\n');
}
