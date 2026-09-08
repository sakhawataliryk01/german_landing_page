export const navItems = [
  { hash: "#arbeitsschutz", label: "Arbeitsschutz" },
  { hash: "#versprechen", label: "Unser Versprechen" },
  { hash: "#leistungen", label: "Unsere Leistungen" },
  { hash: "#referenzen", label: "Referenzen" },
  { hash: "#faq", label: "FAQ" },
  { hash: "#kontakt", label: "Kontakt" },
];

export function heroBullets(city: string) {
  return [
    `In ${city}, deutschlandweit oder digital`,
    "Prävention durch Sicherheitsingenieur",
    "Teilnahme an ASA-Sitzungen",
    "Betreuung gemäß Arbeitssicherheitsgesetz (ASiG)",
  ];
}

export function promisePoints(city: string) {
  return [
    "Alles aus einer Hand",
    "Individuelle und langfristige Betreuung",
    `Digital oder vor Ort im Raum ${city}`,
  ];
}

export const steps = [
  {
    number: "1",
    label: "Bestellung",
    title: "Arbeitsschutz",
    text: "Sicherheit am Arbeitsplatz ist Vertrauenssache. Sie erhalten eine feste Fachkraft für Arbeitssicherheit – lokal und bei Bedarf bundesweit.",
  },
  {
    number: "2",
    label: "Beurteilung",
    title: "Gefährdungsbeurteilungen (GBU)",
    text: "Wir analysieren relevante Bereiche Ihres Betriebs, identifizieren Risiken frühzeitig und leiten daraus konkrete Schutzmaßnahmen ab.",
  },
  {
    number: "3",
    label: "Maßnahmen",
    title: "Unfallverhütung",
    text: "Ziel ist der Schutz Ihrer Mitarbeitenden: Unfälle vermeiden, Gesundheitsgefahren abwenden und Arbeitsplätze sicher gestalten.",
  },
  {
    number: "4",
    label: "Resultate",
    title: "Entlastung",
    text: "Arbeitssicherheit umfasst physischen Schutz und psychische Entlastung. Wir helfen Ihnen, Gesundheit nachhaltig im Betrieb zu verankern.",
  },
];


export const trustItems = [
  "Stellung der Fachkraft für Arbeitssicherheit nach ASiG",
  "Ganzheitlich – digital und direkt vor Ort",
  "Einschätzung und Beurteilung von Arbeitsbedingungen",
  "Teilnahme an ASA-Sitzungen",
  "Betriebsanweisungen",
  "Unterweisungen und Schulungen",
  "Ausbildung von Fachkräften für Schutz und Sicherheit",
];

export const testimonials = [
  {
    quote:
      "Wir fühlen uns sehr gut betreut. Die Beratungsqualität ist hoch, und wir haben einen direkten Ansprechpartner. In Summe: total zufrieden.",
    name: "Hendrik Zimmermann",
    role: "Geschäftsführer – Nordkopp GmbH",
  },
  {
    quote:
      "Psychische Gesundheit ist Grundlage für ein gelingendes Leben und ein zentraler Faktor für Qualität am Arbeitsplatz. Deshalb arbeite ich mit CT-Arbeitsschutz.",
    name: "Sonja Hinrichs",
    role: "Inhaberin – Coaching & Image",
  },
  {
    quote:
      "Ich freue mich über die Zusammenarbeit. Besonders wichtig sind mir das Vertrauen zu den Fachkollegen und die fachliche Kompetenz.",
    name: "Dr. Detlef Comberg",
    role: "Geschäftsführender Direktor – Institut für Flug- und Arbeitsmedizin",
  },
];

export const faqs = [
  {
    question: "Ist eine Fachkraft für Arbeitssicherheit weisungsbefugt?",
    answer:
      "Nein. Die Fachkraft für Arbeitssicherheit (FaSi) ist in der Regel nicht weisungsbefugt und darf Mitarbeitenden keine Anweisungen zur Ausübung ihrer Tätigkeit erteilen – außer dies wurde vertraglich anders vereinbart.",
  },
  {
    question: "Sicherheitsbeauftragter oder Fachkraft für Arbeitssicherheit?",
    answer:
      "Die FaSi ist unabhängige fachkundige Beratung und dafür verantwortlich. Ein Sicherheitsbeauftragter wird ab 20 Mitarbeitenden benötigt und unterstützt das Management bei der Umsetzung. Für diese Rolle sind keine bestimmten Qualifikationen vorgeschrieben.",
  },
  {
    question: "Brauche ich eine Fachkraft für Arbeitssicherheit?",
    answer:
      "Ab dem ersten Angestellten benötigen Unternehmen in Deutschland eine Fachkraft für Arbeitssicherheit. Umfang und Intensität der Betreuung hängen von Gefährdungslage und Beschäftigtenzahl ab.",
  },
  {
    question: "Was heißt FaSi?",
    answer:
      "Fachkräfte für Arbeitssicherheit sind Ingenieurinnen und Ingenieure, Technikerinnen und Techniker oder Meisterinnen und Meister mit einer besonderen Ausbildung in Sicherheitstechnik.",
  },
  {
    question: "Was gehört zur Sicherheit am Arbeitsplatz?",
    answer:
      "Unfälle und Gesundheitsgefahren vermeiden sowie Arbeit menschengerecht gestalten. Dazu zählen unter anderem Brandschutz, Lärmschutz, Unfallschutz und Arbeitsorganisation.",
  },
  {
    question: "Was ist die Regelbetreuung?",
    answer:
      "In der Regelbetreuung vereinbart das Unternehmen vertraglich, dass eine Fachkraft für Arbeitssicherheit regelmäßig in allen Bereichen der Arbeitssicherheit und des Gesundheitsschutzes unterstützt und berät.",
  },
];

export const footerServices = [
  "Arbeitssicherheit",
  "Arbeitsmedizin",
  "SiGeKo",
  "Brandschutz",
  "Datenschutz",
  "E-Learning",
];

export const clients = [
  "cofenster",
  "Faktor Mensch",
  "Sonja Hinrichs",
  "Collective Brain",
  "HABER",
];
