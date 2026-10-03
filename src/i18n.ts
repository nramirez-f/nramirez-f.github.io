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
  talks: { es: '/charlas/', en: '/en/talks/' },
  code: { es: '/codigos/', en: '/en/code/' },
  teaching: { es: '/docencia/', en: '/en/teaching/' },
  outreach: { es: '/divulgacion/', en: '/en/outreach/' },
  cv: { es: '/cv/', en: '/en/cv/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
};

export const NAV_LABELS: Record<PageKey, Record<Lang, string>> = {
  home: { es: 'Inicio', en: 'Home' },
  research: { es: 'Investigación', en: 'Research' },
  talks: { es: 'Charlas', en: 'Talks' },
  code: { es: 'Códigos', en: 'Code' },
  teaching: { es: 'Docencia', en: 'Teaching' },
  outreach: { es: 'Divulgación', en: 'Outreach' },
  cv: { es: 'CV', en: 'CV' },
  contact: { es: 'Contacto', en: 'Contact' },
};

export const UI = {
  es: {
    htmlLang: 'es',
    dateLocale: 'es-ES',
    description:
      'Web académica de José Ignacio Ramírez Fuentes, doctorando en matemática aplicada (grupo EDANYA, Universidad de Málaga): leyes de balance hiperbólicas, aguas someras y métodos numéricos.',
    role: 'Doctorando en Matemática Aplicada',
    switchTo: 'English',
    themeToggle: 'Cambiar entre tema claro y oscuro',
    skip: 'Saltar al contenido',
    news: 'Novedades',
    interests: 'Intereses de investigación',
    advisors: 'Directores de tesis',
    allTalks: 'Todas las charlas',
    talkAt: 'Charla en',
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
      'Academic homepage of José Ignacio Ramírez Fuentes, PhD student in applied mathematics (EDANYA group, University of Málaga): hyperbolic balance laws, shallow water flows and numerical methods.',
    role: 'PhD student in Applied Mathematics',
    switchTo: 'Español',
    themeToggle: 'Switch between light and dark theme',
    skip: 'Skip to content',
    news: 'News',
    interests: 'Research interests',
    advisors: 'PhD advisors',
    allTalks: 'All talks',
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
