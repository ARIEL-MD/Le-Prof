import { OfficialIvorianCourse } from '../../types';

export const ANGLAIS_CURRICULUM_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. ANGLAIS - 3È & LYCÉE : TENSES IN ENGLISH
  // ==========================================
  {
    id: 'anglais-tenses-present-past-perfect',
    discipline: 'anglais',
    disciplineLabel: 'Anglais (Collège & Lycée)',
    level: '3e',
    levelLabel: 'Troisième (BEPC) & Secondaire',
    chapter: "Grammar Fundamentals: Tenses and Aspects",
    lessonTitle: "Mastery of Verb Tenses: Present Simple, Past Simple, Present Perfect and Future Forms",
    objectifs: [
      "Distinguish and accurately use the Present Simple (habits, general truths) vs Present Continuous (actions happening now)",
      "Form and use the Past Simple for completed past actions with definite time markers (yesterday, ago, in 2020)",
      "Master the Present Perfect (have/has + past participle) with markers : since, for, already, yet, just, ever, never",
      "Express future actions using 'will + verb' (spontaneous decisions, predictions) and 'be going to + verb' (planned intentions)"
    ],
    fullCourseContent: `1. Present Simple vs Present Continuous :
- Present Simple :
  * Form : Base verb (Add -s or -es with he / she / it). Negation : do not (don't) / does not (doesn't).
  * Use : Permanent facts, daily routines, habits, general truths.
  * Keywords : always, usually, often, sometimes, never, every day.
  * Example : "Kouassi lives in Yamoussoukro and attends school every morning."
- Present Continuous :
  * Form : Subject + am/is/are + verb-ING.
  * Use : Action in progress at the exact moment of speaking, or temporary situations.
  * Keywords : now, right now, at the moment, look!, listen!
  * Example : "Listen! The teacher is explaining the English exercise right now."

2. Past Simple vs Present Perfect :
- Past Simple :
  * Form : Regular verbs add -ed (played, walked) ; Irregular verbs use 2nd column (went, saw, wrote).
  * Use : Action completely finished in the past at a specific, known time.
  * Keywords : yesterday, last week, 3 days ago, in 1960.
  * Example : "Côte d'Ivoire gained its independence in 1960."
- Present Perfect :
  * Form : Subject + have / has + Past Participle (3rd column).
  * Use : Action started in the past with a direct consequence or continuation in the present.
  * Keywords & Prepositions :
    - 'SINCE' : starting point in time ("since 2015", "since Monday").
    - 'FOR' : duration of time ("for five years", "for two hours").
    - 'JUST' : action completed very recently ("I have just finished my homework").
    - 'ALREADY' : earlier than expected ("He has already eaten").
    - 'YET' (in questions and negatives) : "Have you seen the results yet? No, I haven't seen them yet."

3. Expressing the Future :
- WILL + base verb :
  * Spontaneous decision made at the moment of speaking : "The phone is ringing. I will answer it."
  * Objective predictions or promises : "Tomorrow will be sunny."
- BE GOING TO + base verb :
  * Premeditated intention, prior plan : "I am going to study medicine next year at university."
  * Inevitable prediction based on visible present evidence : "Look at those dark clouds! It is going to rain."`,
    definitions: [
      {
        term: 'Present Perfect',
        definition: "Tense formed with auxiliary have/has + past participle linking a past action with the present situation or measuring ongoing duration."
      },
      {
        term: 'Irregular Verb',
        definition: "Verb that does not form its simple past or past participle with -ed, but undergoes specific vowel changes (ex: write - wrote - written)."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Third person singular in Present Simple',
        statement: 'Always add -s or -es to the verb with He, She, It in affirmative sentences : He works, She goes, It rains.'
      },
      {
        name: 'The Since vs For rule',
        statement: 'Use SINCE for a precise date or starting point (since 8 AM). Use FOR for a measured length of duration (for 2 hours).'
      }
    ],
    formulas: [
      {
        name: 'Present Perfect formula',
        formula: '\\text{Subject} + \\text{have / has} + \\text{Past Participle (V3)}',
        explanation: 'has for 3rd person singular (he/she/it) ; have for all other subjects.',
        unitOrCondition: 'English grammar'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choose between Past Simple and Present Perfect in an exam question',
        procedure: '1. Scan the sentence for time markers.\n2. If you see a precise completed time marker (yesterday, in 2018, two years ago, last month) : use PAST SIMPLE immediately.\n3. If you see since, for, already, yet, ever, just, or no stated time linking to now : use PRESENT PERFECT.',
        tip: 'Never use the Present Perfect with a precise past date like "yesterday" or "in 1999".'
      }
    ],
    examples: [
      {
        statement: "Put the verb in brackets into the correct tense : 'Aya (live) in Abidjan since she was a child.'",
        solution: "Because of the marker 'since', the action started in the past and continues today. Answer : 'Aya has lived in Abidjan since she was a child.'"
      }
    ],
    exercises: [
      {
        question: "Fill in the blank with SINCE or FOR : 'Mr. Konan has been teaching English in this high school _______ ten years.'",
        correction: "Answer : FOR. 'Ten years' is a measured length of duration, so 'for' must be used."
      }
    ],
    evaluationSituation: {
      context: "In a BEPC English exam passage, a student is writing a presentation letter to a youth exchange program in London, describing her background and future plans.",
      instructions: [
        "1. Write one sentence in the Present Simple stating where you live and what you like.",
        "2. Write one sentence in the Present Perfect with 'for' indicating how long you have studied English.",
        "3. Write one sentence in the future using 'be going to' expressing your plan to visit the British Museum."
      ],
      solutionGuide: "1. I live in Bouaké and I enjoy reading African literature. 2. I have studied English for four years at Collège Moderne. 3. I am going to visit the British Museum when I arrive in London."
    },
    examTraps: [
      "Forgetting the final -s on the 3rd person singular in Present Simple (e.g. writing 'He work' instead of 'He works').",
      "Using Present Perfect with a past date (writing 'I have seen him yesterday' is a major grammatical mistake ; write 'I saw him yesterday')."
    ],
    quickMemo: "Present Simple = habits (-s with he/she/it). Past Simple = finished (yesterday, ago). Present Perfect = have/has + V3 (since, for, already). Future = will (decision) / going to (plan).",
    keywords: ["English tenses", "present simple", "past simple", "present perfect", "since", "for", "past participle", "will", "going to", "anglais"]
  },

  // ==========================================
  // 2. ANGLAIS - LYCÉE : PASSIVE VOICE & REPORTED SPEECH
  // ==========================================
  {
    id: 'anglais-passive-voice-reported-speech',
    discipline: 'anglais',
    disciplineLabel: 'Anglais (Lycée & Terminale)',
    level: 'terminale',
    levelLabel: 'Secondaire & Terminale',
    chapter: "Advanced Grammar: Syntactic Transformations",
    lessonTitle: "The Passive Voice and Reported Speech in Academic English",
    objectifs: [
      "Convert active sentences into passive constructions across various tenses (Present, Past, Future, Modals)",
      "Identify the appropriate use of the passive voice when the agent is unknown, obvious, or less important than the action",
      "Apply the tense backshift rules in Reported Speech when the introductory verb is in the past (said, told, asked)",
      "Transform personal pronouns, possessives, and time/place adverbs correctly (today ➔ that day, here ➔ there)"
    ],
    fullCourseContent: `1. The Passive Voice :
- When to use it : The passive voice is used when the focus is on the action or the receiver of the action, rather than who did it (common in scientific reports, journalism, formal essays).
- Standard transformation rule :
  Active : [Subject] + [Verb] + [Object]
  Passive : [Object] + [BE conjugated in the same tense] + [Past Participle of main verb] + (by [Agent]).
- Tense conjugations in Passive :
  * Present Simple : "Workers harvest cocoa." ➔ "Cocoa is harvested by workers."
  * Past Simple : "The president signed the decree." ➔ "The decree was signed by the president."
  * Present Continuous : "They are building a bridge." ➔ "A bridge is being built."
  * Present Perfect : "The company has launched a new product." ➔ "A new product has been launched."
  * Modals (can, must, should) : Modal + be + Past Participle. "Students must wear uniforms." ➔ "Uniforms must be worn by students."

2. Reported Speech (Indirect Speech) :
- When reporting what someone said in the past (e.g. He said that...), the verb in the reported clause shifts one tense back (Backshift) :
  * Present Simple ➔ Past Simple ("I want coffee" ➔ He said he wanted coffee)
  * Present Continuous ➔ Past Continuous ("I am studying" ➔ She said she was studying)
  * Past Simple ➔ Past Perfect ("I lost my bag" ➔ He said he had lost his bag)
  * Present Perfect ➔ Past Perfect ("I have finished" ➔ She said she had finished)
  * Will ➔ Would ("I will come" ➔ He said he would come)
  * Can ➔ Could ("I can help" ➔ She said she could help)
- Changes in Adverbs of Time and Place :
  * today ➔ that day
  * yesterday ➔ the day before / the previous day
  * tomorrow ➔ the next day / the following day
  * now ➔ then
  * here ➔ there
  * this / these ➔ that / those.`,
    definitions: [
      {
        term: 'Passive Voice',
        definition: "Grammatical voice where the grammatical subject undergoes the action expressed by the verb rather than performing it."
      },
      {
        term: 'Backshift',
        definition: "The systematic grammatical shift of tenses to an anterior past form in reported speech after a past reporting verb."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Rule for BE in passive',
        statement: 'In the passive voice, the auxiliary verb BE must always be in the exact same tense and aspect as the active verb.'
      },
      {
        name: 'Pronoun adjustments in reported speech',
        statement: 'Always adjust 1st and 2nd person pronouns (I, you, my, your) to match the perspective of the speaker (he, she, they, their).'
      }
    ],
    formulas: [
      {
        name: 'General Passive formula',
        formula: '\\text{Passive Subject} + [\\text{to BE in active tense}] + \\text{Past Participle} + (\\text{by} + \\text{agent})',
        explanation: 'Universal template for passive transformation in English.',
        unitOrCondition: 'Transitive verbs'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Turn an active sentence into passive step-by-step',
        procedure: '1. Locate the Direct Object of the active sentence and place it as the new Subject.\n2. Identify the tense of the active verb (ex: Past Simple).\n3. Conjugate "to be" in that tense and agree with new subject (was or were).\n4. Put the main verb in its Past Participle form.\n5. Add the agent with "by" only if it brings essential information.',
        tip: 'If the agent is "someone", "people", or "they", omit "by someone" completely.'
      }
    ],
    examples: [
      {
        statement: "Rewrite in the passive voice : 'The government built a new hospital in Korhogo.'",
        solution: "1. New subject : 'A new hospital'.\n2. Tense of 'built' = Past Simple.\n3. Conjugate BE : 'was'.\n4. Past Participle of build = 'built'.\n5. Agent : 'by the government'.\nResult : 'A new hospital was built by the government in Korhogo.'"
      }
    ],
    exercises: [
      {
        question: "Turn into Reported Speech : Amina said: « I have already submitted my application today. »",
        correction: "Amina said that she had already submitted her application that day. (have ➔ had ; today ➔ that day)."
      }
    ],
    evaluationSituation: {
      context: "A journalist in Yamoussoukro reports on a solar energy symposium. The keynote speaker stated : « We can produce clean electricity for thousands of rural villages. »",
      instructions: [
        "1. Report the speaker's statement using Reported Speech starting with : 'The keynote speaker declared that...'",
        "2. Transform the reported clause into the passive voice."
      ],
      solutionGuide: "1. The keynote speaker declared that they could produce clean electricity for thousands of rural villages. 2. In the passive voice : Clean electricity could be produced for thousands of rural villages (by them)."
    },
    examTraps: [
      "Leaving the verb BE out of the passive (e.g. writing 'The car washed' instead of 'The car was washed').",
      "Forgetting to backshift 'will' to 'would' and 'can' to 'could' in Reported Speech."
    ],
    quickMemo: "Passive = BE + Past Participle (by agent). Reported Speech = shift one tense into the past (Present ➔ Past, Past ➔ Past Perfect, Will ➔ Would, Today ➔ That day).",
    keywords: ["passive voice", "reported speech", "indirect speech", "backshift", "past participle", "grammar", "anglais lycée"]
  }
];
