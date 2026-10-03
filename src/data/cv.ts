// CV data that does not fit the YAML collections (education, positions,
// training, service…). Talks, teaching, projects and publications are read
// from their own collections, so they are not repeated here.
import type { Localized } from '@/i18n';

export interface CvItem {
  when: Localized; // free text: "2025", "2024 – 2025", { es: '2025 – en curso', … }
  what: Localized;
  url?: string; // link on `what`
  where?: Localized;
  detail?: Localized;
}

export const EDUCATION: CvItem[] = [
  {
    when: { es: '2025 – en curso', en: '2025 – present' },
    what: { es: 'Doctorado en Matemáticas', en: 'PhD in Mathematics' },
    url: 'https://www.uma.es/doctorado-matematicas/',
    where: { es: 'Universidad de Málaga', en: 'University of Málaga' },
    detail: {
      es: 'Directores: María de la Luz Muñoz Ruiz y Cipriano Escalante Sánchez. Tutor: Tomás Morales de Luna.',
      en: 'Advisors: María de la Luz Muñoz Ruiz and Cipriano Escalante Sánchez. Tutor: Tomás Morales de Luna.',
    },
  },
  {
    when: '2025',
    what: { es: 'Máster Universitario en Matemáticas', en: 'MSc in Mathematics' },
    where: { es: 'Universidad de Málaga', en: 'University of Málaga' },
    detail: {
      es: 'TFM: «Las ecuaciones de Navier–Stokes. Teoría e implementación numérica» (Matrícula de Honor).',
      en: 'Master thesis: “Navier–Stokes equations. Theory and numerical implementation” (with Honours).',
    },
  },
  {
    when: '2023',
    what: {
      es: 'Máster Universitario en Profesorado de Educación Secundaria (especialidad Matemáticas)',
      en: 'MSc in Secondary Education Teacher Training (Mathematics)',
    },
    where: { es: 'Universidad de Málaga', en: 'University of Málaga' },
  },
  {
    when: '2022',
    what: { es: 'Grado en Matemáticas', en: 'BSc in Mathematics' },
    where: { es: 'Universidad de Málaga', en: 'University of Málaga' },
    detail: {
      es: 'TFG: «Transformada Z y sus aplicaciones a señales y sistemas».',
      en: 'Bachelor thesis: “Z-transform and applications to signals and systems”.',
    },
  },
];

export const POSITIONS: CvItem[] = [
  {
    when: { es: '2024 – actualidad', en: '2024 – present' },
    what: { es: 'Investigador contratado con cargo a proyectos', en: 'Research staff (project-funded)' },
    where: {
      es: 'Grupo EDANYA, Universidad de Málaga',
      en: 'EDANYA group, University of Málaga',
    },
  },
];

export const OTHER_EXPERIENCE: CvItem[] = [
  {
    when: '2023',
    what: {
      es: 'Profesor de Matemáticas y Programación (Bachillerato)',
      en: 'Mathematics and Programming teacher (upper secondary)',
    },
    where: 'Escuela de Formación Profesional Sta. M.ª de los Ángeles, Málaga',
  },
  {
    when: '2023 – 2024',
    what: { es: 'Desarrollador web full stack', en: 'Full-stack web developer' },
    where: 'Cloud Asesoría Recursos e Innovación',
  },
];

/** Schools, workshops and conferences attended without giving a talk. */
export const SCHOOLS: CvItem[] = [
  {
    when: '2026',
    what: 'SUN HYPE 2026 – A coding and modeling week on and beyond hyperbolic equations',
    where: { es: 'Chania, Grecia (21–26 jun)', en: 'Chania, Greece (21–26 Jun)' },
  },
  {
    when: '2025',
    what: 'Geo-INQUIRE Training Workshop: Onset, Dynamics, and Tsunami Genesis from Submarine Landslides',
    where: { es: 'ICM-CSIC, Barcelona (16–18 sep, 24 h)', en: 'ICM-CSIC, Barcelona (16–18 Sep, 24 h)' },
  },
  {
    when: '2025',
    what: {
      es: 'XXI Escuela Jacques-Louis Lions Hispano-Francesa sobre Simulación Numérica en Física e Ingeniería',
      en: 'XXI Jacques-Louis Lions Spanish-French School on Numerical Simulation in Physics and Engineering',
    },
    where: { es: 'Ciudad Real (7–11 jul)', en: 'Ciudad Real, Spain (7–11 Jul)' },
  },
];

export const CONFERENCES_ATTENDED: CvItem[] = [
  {
    when: '2025',
    what: 'NUMHYP25 – Numerical Methods for Hyperbolic Problems',
    where: { es: 'Darmstadt, Alemania (9–13 jun)', en: 'Darmstadt, Germany (9–13 Jun)' },
  },
  {
    when: '2025',
    what: '1st PICASSO Conference',
    where: { es: 'Málaga (24–26 mar)', en: 'Málaga, Spain (24–26 Mar)' },
  },
];

export const COURSES: CvItem[] = [
  {
    when: '2026',
    what: { es: 'Iniciación al podcasting para la docencia (6 h)', en: 'Introduction to podcasting for teaching (6 h)' },
    where: { es: 'Plan de Formación del PDI, Universidad de Málaga', en: 'Faculty training plan, University of Málaga' },
  },
  {
    when: '2026',
    what: {
      es: 'Introducción práctica a la IA en la docencia (1,5 h)',
      en: 'Practical introduction to AI in teaching (1.5 h)',
    },
    where: { es: 'Plan de Formación del PDI, Universidad de Málaga', en: 'Faculty training plan, University of Málaga' },
  },
  {
    when: '2024',
    what: {
      es: 'Curso de Extensión Universitaria Deep Learning y CUDA (125 h)',
      en: 'University extension course on Deep Learning and CUDA (125 h)',
    },
    where: { es: 'Universidad de Málaga', en: 'University of Málaga' },
  },
  {
    when: '2024',
    what: 'Fundamentals of Accelerated Computing with CUDA C/C++ (8 h)',
    where: 'NVIDIA Deep Learning Institute',
  },
];

/** EDANYA research seminars attended (shown collapsed). */
export const SEMINARS: { date: string; speaker: string; title: string }[] = [
  { date: '2026-04-07', speaker: 'Isabel Cordero Carrión (U. Valencia)', title: 'Ondas gravitatorias: física, matemáticas, simulaciones y divulgación' },
  { date: '2026-03-20', speaker: 'Nicholas Cogan (Florida State University)', title: 'Biofilm Rheology: Properties, Applications, and Uncertainty' },
  { date: '2026-03-13', speaker: 'León Miguel Ávila León (UMA)', title: 'Well-balanced Explicit and Implicit Kinetic Relaxation Schemes for Hyperbolic Systems of Balance Laws' },
  { date: '2026-02-27', speaker: "Nicola Guglielmi (GSSI L'Aquila)", title: 'Solving distributed delay differential equations in pharmacodynamics' },
  { date: '2026-01-20', speaker: 'Mats G. Larson (Umeå University)', title: 'Introduction to CutFEM: Concepts, Analysis, and Applications' },
  { date: '2025-09-25', speaker: 'Tomás Morales de Luna (UMA)', title: 'Curso «Geometría Aplicada» (25/09–09/10/2025)' },
  { date: '2025-07-24', speaker: 'Hugo Alfredo Carrillo Serrano (TecNM Región Carbonífera)', title: 'Métodos de alto orden tipo Lax-Wendroff con aproximaciones de Taylor para esquemas de volumen finito' },
  { date: '2025-02-12', speaker: 'Alice Abbate (INGV)', title: 'Modelling tsunami initial conditions due to rapid coseismic seafloor displacement: efficient numerical integration and a tool to build unit source databases' },
  { date: '2025-02-03', speaker: 'José María Gallardo (UMA)', title: 'An introduction to the active flux method' },
  { date: '2025-01-22', speaker: 'Alejandro Ramos Lora (UMA)', title: 'Long-time behavior of the Nonlinear Noisy Leaky Integrate-and-fire neuron model' },
  { date: '2025-01-20', speaker: 'Irene Gómez Bueno (UMA)', title: 'Well-balanced POD-based reduced-order models for finite volume approximation of hyperbolic balance laws' },
  { date: '2024-11-20', speaker: 'Sebastian Götschel (Hamburg University of Technology)', title: 'Parallel-in-time methods for PDE-constrained optimization' },
  { date: '2024-10-31', speaker: 'Mihály András Vághy (PPKE)', title: 'Neumann–Neumann type domain decomposition of elliptic problems on metric graphs' },
  { date: '2024-10-24', speaker: 'Emanuele Macca (UNICT)', title: 'Semi-implicit strategy: from stiff source terms to sediment evolution' },
  { date: '2024-10-11', speaker: 'Juan Pablo Quiroga Quezada (UCSC)', title: 'Tsunamis en lagos de Chile desde una mirada resiliente' },
  { date: '2024-07-22', speaker: 'Baifen Ren (OUC–UMA)', title: 'High-order WENO finite-difference methods for hyperbolic nonconservative systems of PDEs' },
  { date: '2024-04-11', speaker: 'León Miguel Ávila León (UMA)', title: 'Introducción al uso de PINNs (Physics Informed Neural Networks) para la aproximación de soluciones de sistemas de EDP' },
];

export const SERVICE: CvItem[] = [
  {
    when: '2026 –',
    what: {
      es: 'Co-organizador de los Seminarios JEMA',
      en: 'Co-organiser of the JEMA Seminars',
    },
    where: { es: 'Sociedad Española de Matemática Aplicada (SEMA)', en: 'Spanish Society of Applied Mathematics (SEMA)' },
  },
];

export const LANGUAGES: CvItem[] = [
  { when: '', what: { es: 'Español', en: 'Spanish' }, detail: { es: 'nativo', en: 'native' } },
  { when: '', what: { es: 'Inglés', en: 'English' }, detail: 'B1' },
];

export const JEMA_URL = 'https://www.sema.org.es/es/pagina/ver/3155-seminarios-jema.html';
