// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URLs of earlier versions of the site (still indexed by search engines),
// sent to their closest equivalent. The section pages were merged into the
// home page, so they point to its anchors (ids in SECTIONS, src/i18n.ts). On
// static hosting Astro emits a small HTML page with a meta refresh.
const REDIRECTS = {
  '/investigacion': '/#investigacion',
  '/comunicaciones': '/#congresos',
  '/codigos': '/#codigo',
  '/docencia': '/#docencia',
  '/divulgacion': '/#divulgacion',
  '/contacto': '/#contacto',
  '/en/research': '/en/#research',
  '/en/talks': '/en/#talks',
  '/en/code': '/en/#code',
  '/en/teaching': '/en/#teaching',
  '/en/outreach': '/en/#outreach',
  '/en/contact': '/en/#contact',
  // First version of the site.
  '/about': '/cv/',
  '/projects': '/#codigo',
  '/projects/Lid-Driven-Cavity': '/#publicaciones',
  '/projects/Libft': '/#codigo',
  '/posts': '/#divulgacion',
};

export default defineConfig({
  // Custom domain served by GitHub Pages (see public/CNAME).
  site: 'https://www.nramirez.es',

  redirects: REDIRECTS,

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      // Redirect stubs are not real pages.
      filter: (url) => !Object.keys(REDIRECTS).some((from) => new URL(url).pathname.replace(/\/$/, '') === from),
    }),
  ],

  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  // Libertinus (the Linux Libertine family of many LaTeX papers): Serif for
  // headings, Sans for text, both from Fontsource at build time and
  // self-hosted. Latin Modern Roman (GUST Font License, from
  // src/assets/fonts) is kept for figure labels; the monospace face is
  // KaTeX's Computer Modern Typewriter.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Libertinus Serif',
      cssVariable: '--ff-display',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    // Libertinus Sans has no bold italic: request the italic in 400 only.
    {
      provider: fontProviders.fontsource(),
      name: 'Libertinus Sans',
      cssVariable: '--ff-sans',
      weights: [400, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Libertinus Sans',
      cssVariable: '--ff-sans',
      weights: [400],
      styles: ['italic'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.local(),
      name: 'Latin Modern Roman',
      cssVariable: '--ff-serif',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/LM-regular.woff2'], weight: '400', style: 'normal' },
          { src: ['./src/assets/fonts/LM-italic.woff2'], weight: '400', style: 'italic' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'CM Typewriter',
      cssVariable: '--ff-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [
          {
            src: ['./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2'],
            weight: '400',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
