// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URLs of the previous version of the site (still indexed by search engines),
// sent to their closest equivalent. On static hosting Astro emits a small HTML
// page with a meta refresh and a canonical link to the destination.
const LEGACY_REDIRECTS = {
  '/about': '/cv/',
  '/projects': '/codigos/',
  '/projects/Lid-Driven-Cavity': '/investigacion/',
  '/projects/Libft': '/codigos/',
  '/posts': '/divulgacion/',
};

export default defineConfig({
  // Custom domain served by GitHub Pages (see public/CNAME).
  site: 'https://www.nramirez.es',

  redirects: LEGACY_REDIRECTS,

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      // Redirect stubs are not real pages.
      filter: (url) => !Object.keys(LEGACY_REDIRECTS).some((from) => new URL(url).pathname.replace(/\/$/, '') === from),
    }),
  ],

  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  // Self-hosted LaTeX-like typography. Latin Modern Roman (GUST Font License)
  // comes from src/assets/fonts; the monospace face is KaTeX's Computer Modern
  // Typewriter, shipped by the katex package.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Latin Modern Roman',
      cssVariable: '--ff-serif',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/LM-regular.woff2'], weight: '400', style: 'normal' },
          { src: ['./src/assets/fonts/LM-italic.woff2'], weight: '400', style: 'italic' },
          { src: ['./src/assets/fonts/LM-bold.woff2'], weight: '700', style: 'normal' },
          { src: ['./src/assets/fonts/LM-bold-italic.woff2'], weight: '700', style: 'italic' },
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
