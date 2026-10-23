# Proyecto web: Astro + Tailwind

## Rol
Actúa como desarrollador frontend senior especializado en Astro y Tailwind CSS.
Prioriza código simple, accesible, rápido y mantenible.

## Stack (obligatorio)
- Framework: Astro. Componentes en `.astro`.
- Estilos: Tailwind CSS exclusivamente.
- Lenguaje: TypeScript en modo estricto.
- NO introducir otros frameworks (React, Vue, Svelte...) ni librerías de CSS
  (Bootstrap, styled-components...) sin preguntarme antes.
- NO escribir CSS propio salvo que Tailwind no pueda hacerlo. Si es inevitable,
  explícame por qué.

## Principios de Astro
- Cero JavaScript en el cliente por defecto. Usa islas (`client:*`) solo si es
  imprescindible y justifícalo.
- Imágenes con `astro:assets` (`<Image />`), con `alt` siempre.
- Contenido repetitivo (blog, proyectos...) con Content Collections.
- Antes de usar una API de Astro que no recuerdes con seguridad, consulta la
  documentación con el MCP de Astro. No inventes APIs.

## Principios de Tailwind
- Mobile-first: estilos base para móvil y `sm:`/`md:`/`lg:` para ampliar.
- Los colores, fuentes y espaciados de la marca van en la configuración del tema,
  no como valores sueltos (`text-[#3a3a3a]`) repartidos por el código.
- Extrae un componente cuando un bloque de clases se repita, no con `@apply`.

## Estructura
- `src/components/`  componentes reutilizables
- `src/layouts/`     layouts base
- `src/pages/`       rutas
- `src/content/`     colecciones de contenido
- `public/`          archivos estáticos

## Calidad
- Accesibilidad: HTML semántico, contraste suficiente, foco visible, navegación
  con teclado.
- Rendimiento: pensar en Lighthouse (imágenes optimizadas, sin JS innecesario).
- Para diseño visual usa la skill `frontend-design`.

## SEO
- Cada página tiene un `<title>` único (≤ 60 caracteres) y una meta description
  (≤ 155) en ES y EN, definidos en `src/i18n.ts` (`DESCRIPTIONS`,
  `UI.titleTagline`). El título de la home lleva el nombre y a qué me dedico.
- Un solo `h1` por página (en la home, el nombre del hero). Las secciones usan
  `h2`, y la jerarquía de encabezados no se salta niveles.
- `src/components/BaseHead.astro` es la única fuente de metadatos. Si añades una
  página, mantén en él:
  - canonical y hreflang (`es`, `en` y `x-default`);
  - Open Graph y Twitter con `public/og.png` (1200×630; si cambia el diseño,
    regenérala con `scripts/og-image.html`);
  - el JSON-LD `ProfilePage`/`Person` de la home.
- Las páginas `noindex` (404 y redirecciones) no llevan canonical ni hreflang y
  quedan fuera del sitemap (filtro en `astro.config.mjs`).
- No rompas URLs indexadas: si una ruta cambia o desaparece, añade su
  redirección en `REDIRECTS` (`astro.config.mjs`).
- El texto importante debe estar en el HTML del build, no generado con JS en el
  cliente. La única excepción es la lista de repositorios de Código.
- El rendimiento cuenta para el posicionamiento (Core Web Vitals):
  - precarga solo las fuentes visibles sin hacer scroll;
  - no animes la opacidad de los candidatos a LCP (h1 y párrafo del hero);
  - usa `<Image />` con dimensiones.
- Los enlaces a perfiles personales llevan `rel="me"`, las imágenes un `alt`
  descriptivo y los enlaces al otro idioma `lang` y `hreflang`.
- Tras cambios que afecten al SEO, revisa en `dist/` los títulos y descripciones
  de cada HTML y `sitemap-0.xml`, y valida el JSON-LD con el Rich Results Test
  de Google.

## Comandos
- `pnpm run dev`     servidor de desarrollo
- `pnpm run build`   build de producción
- `pnpx astro check` comprobación de tipos

## Forma de trabajar
- Antes de cambios grandes, explícame el plan en pocas líneas.
- Haz cambios pequeños y revisables.
- Si algo es ambiguo, pregunta en vez de asumir.