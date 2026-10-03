import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// All academic data lives in YAML files under src/data/. Each file is a map
// whose keys are the entry ids. Text that differs between languages is
// written either as a plain string (same in both) or as { es: …, en: … }.
const localized = z.union([z.string(), z.object({ es: z.string(), en: z.string() })]);

/** Talks given by me at conferences, workshops and seminars. */
const talks = defineCollection({
  loader: file('src/data/talks.yaml'),
  schema: z.object({
    title: z.string(),
    event: localized,
    eventUrl: z.url().optional(),
    city: localized,
    country: localized,
    coords: z.tuple([z.number(), z.number()]), // [lat, lon] for the map
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    scope: z.enum(['national', 'international']),
    // Full author list in publication order; the presenter is marked in `presenter`.
    authors: z.array(z.string()).default([]),
    presenter: z.string().default('J. I. Ramírez-Fuentes'),
    slides: z.string().optional(), // path under public/, e.g. /talks/hyp2026.pdf
    video: z.url().optional(),
  }),
});

/** Teaching, one entry per course taught in an academic year. */
const teaching = defineCollection({
  loader: file('src/data/teaching.yaml'),
  schema: z.object({
    year: z.string(), // academic year, e.g. "2025/26"
    semester: z.number().int().min(1).max(2).optional(),
    subject: localized,
    degree: localized,
    kind: z.enum(['theory', 'practice']),
    hours: z.number(),
    university: localized.default({ es: 'Universidad de Málaga', en: 'University of Málaga' }),
  }),
});

/** Funded research projects I take part in. */
const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    title: localized,
    acronym: z.string().optional(),
    funder: localized,
    reference: z.string().optional(),
    pis: z.array(z.string()),
    start: z.coerce.date(),
    end: z.coerce.date(),
    url: z.url().optional(),
    summary: localized.optional(),
  }),
});

export const collections = { talks, teaching, projects };
