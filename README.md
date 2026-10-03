# www.nramirez.es

Web académica de José Ignacio Ramírez-Fuentes (grupo EDANYA, Universidad de Málaga). Astro 7 + Tailwind CSS v4, bilingüe ES/EN, desplegada en GitHub Pages.

```bash
pnpm install   # descarga también Node 24 para el proyecto
pnpm dev       # servidor de desarrollo
pnpm build     # comprobación de tipos + build en dist/
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Datos personales, perfiles (ORCID, Scholar…), PDF del CV | `src/site.config.ts` |
| Comunicaciones (y estrellas del mapa, campo `coords`) | `src/data/talks.yaml` |
| Docencia | `src/data/teaching.yaml` |
| Publicaciones | `src/data/publications.ts` |
| Proyectos | `src/data/projects.yaml` |
| Formación, puestos, asistencia a congresos/cursos/seminarios, servicio | `src/data/cv.ts` |
| Textos de cada página | `src/views/*.astro` |

**Códigos:** aparecen automáticamente los repositorios de GitHub y GitLab (`@nramirez-f`) que tengan el topic `research`:
- GitHub: en la página del repositorio, icono ⚙ junto a *About* → *Topics*.
- GitLab: *Settings → General → Topics* del proyecto.

**Mapa de Comunicaciones:** el contorno de Europa (`src/data/europe-outline.ts`) se genera con `python3 scripts/europe-map.py ne_50m_land.geojson > src/data/europe-outline.ts` a partir de Natural Earth (dominio público, [ne_50m_land.geojson](https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson)). Los límites del mapa están al principio del script.

Basada en [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) (MIT, ver `LICENSE-template`). Tipografía Latin Modern (GUST Font License).
