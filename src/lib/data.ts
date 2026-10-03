import { getCollection } from 'astro:content';

/** Talks, newest first. */
export async function getTalks() {
  const talks = await getCollection('talks');
  return talks.sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}

/** Teaching grouped by academic year, newest year first. */
export async function getTeachingByYear() {
  const rows = await getCollection('teaching');
  const byYear = new Map<string, typeof rows>();
  for (const row of rows) {
    byYear.set(row.data.year, [...(byYear.get(row.data.year) ?? []), row]);
  }
  return [...byYear.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, items]) => ({
      year,
      items,
      hours: items.reduce((sum, r) => sum + r.data.hours, 0),
    }));
}

/** Publications, newest first. */
export async function getPublications() {
  const pubs = await getCollection('publications');
  return pubs.sort((a, b) => b.data.year - a.data.year);
}

/** Projects, most recent end date first. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.end.valueOf() - a.data.end.valueOf());
}

export async function getVideos() {
  const videos = await getCollection('videos');
  return videos.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Groups items by calendar year of a date field, newest year first. */
export function groupByYear<T>(items: T[], date: (item: T) => Date) {
  const groups = new Map<number, T[]>();
  for (const item of items) {
    const year = date(item).getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), item]);
  }
  return [...groups.entries()].sort(([a], [b]) => b - a);
}
