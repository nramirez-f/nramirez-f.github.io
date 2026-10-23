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

export const PAGES = ['home', 'cv'] as const;
export type PageKey = (typeof PAGES)[number];

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { es: '/', en: '/en/' },
  cv: { es: '/cv/', en: '/en/cv/' },
};

/**
 * Sections of the home page, in order. The id is the anchor in each
 * language; the old section pages redirect to them (astro.config.mjs).
 */
export const SECTIONS = ['research', 'publications', 'talks', 'projects', 'teaching', 'outreach', 'code', 'contact'] as const;
export type SectionKey = (typeof SECTIONS)[number];

export const SECTION_IDS: Record<SectionKey, Record<Lang, string>> = {
  research: { es: 'investigacion', en: 'research' },
  publications: { es: 'publicaciones', en: 'publications' },
  talks: { es: 'congresos', en: 'talks' },
  projects: { es: 'proyectos', en: 'projects' },
  teaching: { es: 'docencia', en: 'teaching' },
  outreach: { es: 'divulgacion', en: 'outreach' },
  code: { es: 'codigo', en: 'code' },
  contact: { es: 'contacto', en: 'contact' },
};

export const SECTION_LABELS: Record<SectionKey, Record<Lang, string>> = {
  research: { es: 'Investigación', en: 'Research' },
  publications: { es: 'Publicaciones', en: 'Publications' },
  talks: { es: 'Congresos', en: 'Talks' },
  projects: { es: 'Proyectos', en: 'Projects' },
  teaching: { es: 'Docencia', en: 'Teaching' },
  outreach: { es: 'Divulgación', en: 'Outreach' },
  code: { es: 'Código', en: 'Code' },
  contact: { es: 'Contacto', en: 'Contact' },
};

/** Link to a section of the home page, e.g. /#docencia or /en/#teaching. */
export function sectionHref(key: SectionKey, lang: Lang) {
  return `${ROUTES.home[lang]}#${SECTION_IDS[key][lang]}`;
}

export const NAV_LABELS: Record<PageKey, Record<Lang, string>> = {
  home: { es: 'Inicio', en: 'Home' },
  cv: { es: 'CV', en: 'CV' },
};

/** Meta description of each page (what search engines show under the link). */
export const DESCRIPTIONS: Record<PageKey, Record<Lang, string>> = {
  home: {
    es: 'Doctorando en Matemáticas en la Universidad de Málaga (EDANYA): volúmenes finitos bien equilibrados y esquemas semi-implícitos para aguas someras.',
    en: 'PhD student in Mathematics at the University of Málaga (EDANYA): well-balanced finite volumes and semi-implicit schemes for shallow-water flows.',
  },
  cv: {
    es: 'CV académico de José Ignacio Ramírez-Fuentes: formación, experiencia investigadora, proyectos, comunicaciones, docencia y formación complementaria.',
    en: 'Academic CV of José Ignacio Ramírez-Fuentes: education, research experience, projects, talks, teaching and further training.',
  },
};

export const UI = {
  es: {
    htmlLang: 'es',
    dateLocale: 'es-ES',
    description:
      'Web académica de José Ignacio Ramírez-Fuentes, doctorando en matemática aplicada (grupo EDANYA, Universidad de Málaga): sistemas hiperbólicos, leyes de balance y métodos de volúmenes finitos bien equilibrados.',
    role: 'Doctorando en Matemática Aplicada',
    titleTagline: 'Matemática Aplicada, UMA',
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
    mainNav: 'Principal',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    external: '(abre otro sitio)',
    updated: 'Actualizado en',
  },
  en: {
    htmlLang: 'en',
    dateLocale: 'en-GB',
    description:
      'Academic homepage of José Ignacio Ramírez-Fuentes, PhD student in applied mathematics (EDANYA group, University of Málaga): hyperbolic systems, balance laws and well-balanced finite volume methods.',
    role: 'PhD student in Applied Mathematics',
    titleTagline: 'Applied Mathematics, Málaga',
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
    mainNav: 'Main',
    menu: 'Menu',
    closeMenu: 'Close menu',
    external: '(opens another site)',
    updated: 'Updated',
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
