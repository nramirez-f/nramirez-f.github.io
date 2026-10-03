# www.nramirez.es

Web académica de José Ignacio Ramírez Fuentes (grupo EDANYA, Universidad de Málaga). Astro 7 + Tailwind CSS v4, bilingüe ES/EN, desplegada en GitHub Pages.

```bash
pnpm install   # descarga también Node 24 para el proyecto
pnpm dev       # servidor de desarrollo
pnpm build     # comprobación de tipos + build en dist/
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Datos personales, perfiles (ORCID, Scholar…), PDF del CV | `src/site.config.ts` |
| Charlas impartidas | `src/data/talks.yaml` |
| Docencia | `src/data/teaching.yaml` |
| Publicaciones | `src/data/publications.yaml` |
| Proyectos | `src/data/projects.yaml` |
| Vídeos de divulgación | `src/data/videos.yaml` |
| Formación, puestos, asistencia a congresos/cursos/seminarios, servicio | `src/data/cv.ts` |
| Textos de cada página | `src/views/*.astro` |

**Códigos:** aparecen automáticamente los repositorios de GitHub y GitLab (`@nramirez-f`) que tengan el topic `research`.

Basada en [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) (MIT, ver `LICENSE-template`). Tipografía Latin Modern (GUST Font License).
