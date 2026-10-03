// Papers and preprints. A typed list instead of a content collection so an
// empty list does not trigger Astro's "collection is empty" warning.
// Entries mirror the { id, data } shape of the other collections.
//
// Example:
// {
//   id: 'ramirez-2026-allfroude',
//   data: {
//     title: 'A semi-implicit scheme for the 2D shallow-water system',
//     authors: ['J. I. Ramírez-Fuentes', 'M. L. Muñoz-Ruiz', 'C. Escalante', 'T. Morales de Luna'],
//     status: 'submitted',
//     year: 2026,
//     arxiv: '2610.00000',
//     bibtex: `@article{...}`,
//   },
// },

export interface Publication {
  id: string;
  data: {
    title: string;
    authors: string[];
    status: 'published' | 'accepted' | 'submitted' | 'preprint';
    journal?: string;
    year: number;
    doi?: string;
    arxiv?: string; // arXiv id, e.g. 2601.01234
    hal?: string;
    bibtex?: string;
  };
}

export const PUBLICATIONS: Publication[] = [];
