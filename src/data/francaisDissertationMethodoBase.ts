import { LITERARY_VOCATIONS, francaisTleDissertationKnowledgeBase } from '../../francaisTleDissertationKnowledgeBase';
import { POETRY_FUNCTIONS_KNOWLEDGE_BASE, POETRY_FUNCTIONS_BY_KEY, getPoetryFunction, getAllPoetryArguments } from './poetryFunctionsKnowledgeBase';

export { LITERARY_VOCATIONS, francaisTleDissertationKnowledgeBase, POETRY_FUNCTIONS_KNOWLEDGE_BASE, POETRY_FUNCTIONS_BY_KEY, getPoetryFunction, getAllPoetryArguments };

export const CONNECTEURS_DISSERTATION_LITTERAIRE = {
  amorceEtPosition: [
    "D'abord,",
    "Tout d'abord,",
    "En premier lieu,",
    "Pour commencer,",
    "Il faut d'abord remarquer que",
    "On constate d'abord que"
  ],
  transitionEtNuance: [
    "Cependant,",
    "Toutefois,",
    "Mais,",
    "Pourtant,",
    "Cette première explication est importante, mais elle ne dit pas tout :",
    "Mais peut-on limiter l'œuvre à ce seul rôle ?",
    "Loin de se limiter à cela,"
  ],
  amplificationEtApprofondissement: [
    "De plus,",
    "Ensuite,",
    "Par ailleurs,",
    "De même,",
    "Aussi,",
    "Dans le même sens,"
  ],
  analyseCitationEtExemple: [
    "Comme le montre clairement",
    "Par exemple, avec",
    "C'est ce que prouve l'exemple de",
    "C'est ce que met en lumière",
    "À travers cette situation, l'auteur montre que",
    "Cette phrase montre bien que"
  ],
  conclusionEtBilan: [
    "En conclusion,",
    "Pour conclure,",
    "En résumé,",
    "Finalement,",
    "En définitive,"
  ]
};

export const REGLES_INSPECTEUR_DISSERTATION = {
  regleConsigne: {
    numero: 1,
    titre: "INTERDICTION FORMELLE DE LA CONSIGNE DANS L'INTRODUCTION",
    detail: "La consigne d'action (ex: 'Expliquez et discutez cette affirmation', 'Commentez cette pensée', etc.) est une consigne de travail pour guider l'élève au brouillon. Elle ne doit JAMAIS figurer dans le texte de l'introduction rédigée. L'élève cite fidèlement la pensée de l'auteur, mais supprime la consigne d'action.",
    bonExemple: "« Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. »",
    mauvaisExemple: "« Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. » On nous demande donc d'expliquer et de discuter cette affirmation..."
  },
  regleProblemeSansOu: {
    numero: 2,
    titre: "AUCUN MOT « OU » DANS LA PROBLÉMATISATION",
    detail: "Le problème central doit être posé sans le mot 'ou'. Il s'agit d'une seule question claire et ouverte qui interroge la portée et les limites du sujet.",
    bonExemple: "Dans quelle mesure le théâtre dépasse-t-il le simple divertissement pour devenir un moyen important de réflexion sur la vie des hommes ?",
    mauvaisExemple: "Le théâtre est-il un lieu de rire OU de réflexion ?"
  },
  regleQuintupleParagraphe: {
    numero: 3,
    titre: "LA STRUCTURE EN 5 ÉTAPES DU PARAGRAPHE ARGUMENTATIF",
    detail: "Chaque paragraphe du développement suit 5 étapes claires : Idée directrice -> Explication simple -> Exemple précis d'une œuvre littéraire -> Citation exacte -> Analyse courte montrant le lien avec l'idée."
  }
};
