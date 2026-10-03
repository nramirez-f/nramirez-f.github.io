// Single place for personal data shown across the site (header, footer,
// contact page, SEO). Never add private data here (ID number, phone, home
// address): everything in this file ends up in the public HTML.
export const SITE = {
  // Same form as on publications.
  name: 'José Ignacio Ramírez-Fuentes',
  email: 'nramirez@uma.es',
  university: { es: 'Universidad de Málaga', en: 'University of Málaga' },
  department: {
    es: 'Departamento de Análisis Matemático, Estadística e Investigación Operativa y Matemática Aplicada',
    en: 'Department of Mathematical Analysis, Statistics and Operations Research, and Applied Mathematics',
  },
  group: {
    name: 'EDANYA',
    code: 'FQM-216',
    fullName: {
      es: 'Ecuaciones Diferenciales, Análisis Numérico y Aplicaciones',
      en: 'Differential Equations, Numerical Analysis and Applications',
    },
    url: 'https://www.uma.es/edanya',
  },
  phd: {
    program: { es: 'Programa de Doctorado en Matemáticas', en: 'PhD Programme in Mathematics' },
    url: 'https://www.uma.es/doctorado-matematicas/',
    start: 2025,
  },
  advisors: [
    { name: 'María de la Luz Muñoz Ruiz', url: 'https://www.uma.es/edanya/info/108633/m-luz-munoz-ruiz/' },
    { name: 'Cipriano Escalante Sánchez', url: 'https://edanya.uma.es/escalante/' },
  ],
  tutor: { name: 'Tomás Morales de Luna', url: 'https://edanya.uma.es/tmorales/' },
  // Code page: repositories on GitHub and GitLab tagged with `codeTopic`
  // are listed automatically, newest activity first.
  github: 'nramirez-f',
  gitlab: 'nramirez-f',
  codeTopic: 'research',
  // Academic profiles: leave empty ('') to hide.
  orcid: '0009-0004-8971-847X',
  scholar: '',
  arxiv: '',
  cvPdf: '', // e.g. '/cv/cv-ramirez-fuentes.pdf' once the file is in public/cv/
} as const;

export const PROFILES = [
  { label: 'ORCID', href: SITE.orcid ? `https://orcid.org/${SITE.orcid}` : '' },
  { label: 'Google Scholar', href: SITE.scholar ? `https://scholar.google.com/citations?user=${SITE.scholar}` : '' },
  { label: 'arXiv', href: SITE.arxiv ? `https://arxiv.org/a/${SITE.arxiv}` : '' },
  { label: 'GitHub', href: `https://github.com/${SITE.github}` },
  { label: 'GitLab', href: `https://gitlab.com/${SITE.gitlab}` },
].filter((p) => p.href);
