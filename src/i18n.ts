// Bilingual routing and UI strings. Spanish is the default locale and lives
// at the root; English lives under /en/. Every page is identified by a
// PageKey so the language switcher can jump to the same page in the other
// language even though the slugs differ.
export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** A plain string (same in both languages) or one value per language. */
export type Localized = string | { es: string; en: string };

export function l(value: Localized, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export const PAGES = ['home', 'research', 'talks', 'code', 'teaching', 'outreach', 'cv', 'contact'] as const;
export type PageKey = (typeof PAGES)[number];

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', en: '/en/' },
  research: { es: '/investigacion/', en: '/en/research/' },
  talks: { es: '/comunicaciones/', en: '/en/talks/' },
  code: { es: '/codigos/', en: '/en/code/' },
  teaching: { es: '/docencia/', en: '/en/teaching/' },
  outreach: { es: '/divulgacion/', en: '/en/outreach/' },
  cv: { es: '/cv/', en: '/en/cv/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
};

export const NAV_LABELS: Record<PageKey, Record<Lang, string>> = {
  home: { es: 'Inicio', en: 'Home' },
  research: { es: 'Investigación', en: 'Research' },
  talks: { es: 'Comunicaciones', en: 'Talks' },
  code: { es: 'Códigos', en: 'Code' },
  teaching: { es: 'Docencia', en: 'Teaching' },
  outreach: { es: 'Divulgación', en: 'Outreach' },
  cv: { es: 'CV', en: 'CV' },
  contact: { es: 'Contacto', en: 'Contact' },
};

/** Meta description of each page (what search engines show under the link). */
export const DESCRIPTIONS: Record<PageKey, Record<Lang, string>> = {
  home: {
    es: 'José Ignacio Ramírez-Fuentes, doctorando en Matemáticas en la Universidad de Málaga (grupo EDANYA). Métodos de volúmenes finitos bien equilibrados para sistemas hiperbólicos y aguas someras.',
    en: 'José Ignacio Ramírez-Fuentes, PhD student in Mathematics at the University of Málaga (EDANYA group). Well-balanced finite volume methods for hyperbolic systems and shallow-water flows.',
  },
  research: {
    es: 'Investigación de José Ignacio Ramírez-Fuentes: esquemas bien equilibrados y semi-implícitos para el sistema de aguas someras 2D, publicaciones, proyectos y grupo EDANYA.',
    en: 'Research of José Ignacio Ramírez-Fuentes: well-balanced and semi-implicit schemes for the 2D shallow-water system, publications, projects and the EDANYA group.',
  },
  talks: {
    es: 'Comunicaciones de José Ignacio Ramírez-Fuentes en congresos nacionales e internacionales (HYP2026, CEDYA, WCCM-ECCOMAS…) sobre métodos numéricos para aguas someras.',
    en: 'Talks by José Ignacio Ramírez-Fuentes at national and international conferences (HYP2026, CEDYA, WCCM-ECCOMAS…) on numerical methods for shallow-water flows.',
  },
  code: {
    es: 'Software científico en abierto de José Ignacio Ramírez-Fuentes en GitHub y GitLab: códigos en Python y C++ para métodos numéricos y dinámica de fluidos.',
    en: 'Open-source scientific software by José Ignacio Ramírez-Fuentes on GitHub and GitLab: Python and C++ codes for numerical methods and fluid dynamics.',
  },
  teaching: {
    es: 'Docencia universitaria de José Ignacio Ramírez-Fuentes en la Universidad de Málaga: asignaturas, titulaciones y horas por curso académico.',
    en: 'University teaching of José Ignacio Ramírez-Fuentes at the University of Málaga: subjects, degrees and hours per academic year.',
  },
  outreach: {
    es: 'Divulgación matemática de José Ignacio Ramírez-Fuentes, co-organizador de los Seminarios JEMA de la Sociedad Española de Matemática Aplicada (SEMA).',
    en: 'Mathematical outreach by José Ignacio Ramírez-Fuentes, co-organiser of the JEMA Seminars of the Spanish Society of Applied Mathematics (SEMA).',
  },
  cv: {
    es: 'CV académico de José Ignacio Ramírez-Fuentes: formación, experiencia investigadora, proyectos, comunicaciones, docencia y formación complementaria.',
    en: 'Academic CV of José Ignacio Ramírez-Fuentes: education, research experience, projects, talks, teaching and further training.',
  },
  contact: {
    es: 'Contacto de José Ignacio Ramírez-Fuentes: correo, afiliación en la Universidad de Málaga (grupo EDANYA) y perfiles académicos (ORCID, GitHub, GitLab).',
    en: 'Contact José Ignacio Ramírez-Fuentes: email, affiliation at the University of Málaga (EDANYA group) and academic profiles (ORCID, GitHub, GitLab).',
  },
};

export const UI = {
  es: {
    htmlLang: 'es',
    dateLocale: 'es-ES',
    description:
      'Web académica de José Ignacio Ramírez-Fuentes, doctorando en matemática aplicada (grupo EDANYA, Universidad de Málaga): sistemas hiperbólicos, leyes de balance y métodos de volúmenes finitos bien equilibrados.',
    role: 'Doctorando en Matemática Aplicada',
    switchTo: 'English',
    themeToggle: 'Cambiar entre tema claro y oscuro',
    skip: 'Saltar al contenido',
    news: 'Novedades',
    interests: 'Intereses de investigación',
    talkAt: 'Comunicación en',
    slides: 'Diapositivas',
    video: 'Vídeo',
    coauthors: 'con',
    international: 'Internacional',
    national: 'Nacional',
    hours: 'h',
    total: 'Total',
    copy: 'Copiar BibTeX',
    copied: 'Copiado',
    download: 'Descargar PDF',
    present: 'actualidad',
    notFound: 'Esta página no existe.',
    backHome: 'Volver al inicio',
  },
  en: {
    htmlLang: 'en',
    dateLocale: 'en-GB',
    description:
      'Academic homepage of José Ignacio Ramírez-Fuentes, PhD student in applied mathematics (EDANYA group, University of Málaga): hyperbolic systems, balance laws and well-balanced finite volume methods.',
    role: 'PhD student in Applied Mathematics',
    switchTo: 'Español',
    themeToggle: 'Switch between light and dark theme',
    skip: 'Skip to content',
    news: 'News',
    interests: 'Research interests',
    talkAt: 'Talk at',
    slides: 'Slides',
    video: 'Video',
    coauthors: 'with',
    international: 'International',
    national: 'National',
    hours: 'h',
    total: 'Total',
    copy: 'Copy BibTeX',
    copied: 'Copied',
    download: 'Download PDF',
    present: 'present',
    notFound: 'This page does not exist.',
    backHome: 'Back to home',
  },
} as const;

/** Formats a date (or a start–end range) in the reader's language. */
export function formatDate(date: Date, lang: Lang, opts: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }) {
  return new Intl.DateTimeFormat(UI[lang].dateLocale, { timeZone: 'UTC', ...opts }).format(date);
}

export function formatRange(start: Date, end: Date | undefined, lang: Lang) {
  const fmt = new Intl.DateTimeFormat(UI[lang].dateLocale, {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return end && end.getTime() !== start.getTime() ? fmt.formatRange(start, end) : fmt.format(start);
}
