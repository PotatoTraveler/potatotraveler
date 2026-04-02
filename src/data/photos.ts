// src/data/photos.ts
// Categories are determined by which folder the image lives in.
// To move a photo to a different category, change both the 'src' path and 'category' field.

export type PhotoCategory = 'street' | 'landscape' | 'portrait';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: PhotoCategory;
}

export const photos: Photo[] = [
  // ── Landscapes ──────────────────────────────────────────────────────────────
  { id: 'l-0002', src: '/images/galleries/landscapes/0002.jpeg', alt: '', width: 4000, height: 6000, category: 'landscape' },
  { id: 'l-0003', src: '/images/galleries/landscapes/0003.jpeg', alt: '', width: 6000, height: 4000, category: 'landscape' },
  { id: 'l-0004', src: '/images/galleries/landscapes/0004.jpeg', alt: '', width: 594,  height: 892,  category: 'landscape' },
  { id: 'l-0005', src: '/images/galleries/landscapes/0005.jpeg', alt: '', width: 1592, height: 1061, category: 'landscape' },
  { id: 'l-0009', src: '/images/galleries/landscapes/0009.jpeg', alt: '', width: 6000, height: 4000, category: 'landscape' },
  { id: 'l-0017', src: '/images/galleries/landscapes/0017.jpeg', alt: '', width: 4000, height: 6000, category: 'landscape' },
  { id: 'l-0021', src: '/images/galleries/landscapes/0021.jpeg', alt: '', width: 4032, height: 3024, category: 'landscape' },

  // ── Portraits ───────────────────────────────────────────────────────────────
  { id: 'p-0001',    src: '/images/galleries/portraits/0001.jpeg',    alt: '', width: 2667, height: 4000, category: 'portrait' },
  { id: 'p-0006',    src: '/images/galleries/portraits/0006.jpeg',    alt: '', width: 3385, height: 5078, category: 'portrait' },
  { id: 'p-0007',    src: '/images/galleries/portraits/0007.jpeg',    alt: '', width: 4000, height: 6000, category: 'portrait' },
  { id: 'p-0008',    src: '/images/galleries/portraits/0008.jpeg',    alt: '', width: 1765, height: 2647, category: 'portrait' },
  { id: 'p-0014',    src: '/images/galleries/portraits/0014.jpeg',    alt: '', width: 4000, height: 6000, category: 'portrait' },
  { id: 'p-0016',    src: '/images/galleries/portraits/0016.jpeg',    alt: '', width: 4000, height: 6000, category: 'portrait' },
  { id: 'p-0020',    src: '/images/galleries/portraits/0020.jpeg',    alt: '', width: 2611, height: 3916, category: 'portrait' },
  { id: 'p-dsc1045', src: '/images/galleries/portraits/DSC01045.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },
  { id: 'p-dsc1106', src: '/images/galleries/portraits/DSC01106.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },
  { id: 'p-dsc1119', src: '/images/galleries/portraits/DSC01119.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },
  { id: 'p-dsc1140', src: '/images/galleries/portraits/DSC01140.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },
  { id: 'p-dsc1309', src: '/images/galleries/portraits/DSC01309.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },
  { id: 'p-dsc1665', src: '/images/galleries/portraits/DSC01665.jpeg', alt: '', width: 4672, height: 7008, category: 'portrait' },

  // ── Streets ─────────────────────────────────────────────────────────────────
  { id: 's-0013', src: '/images/galleries/streets/0013.jpeg', alt: '', width: 4947, height: 3298, category: 'street' },
  { id: 's-0015', src: '/images/galleries/streets/0015.jpeg', alt: '', width: 5589, height: 3726, category: 'street' },
  { id: 's-0018', src: '/images/galleries/streets/0018.jpeg', alt: '', width: 4000, height: 6000, category: 'street' },
  { id: 's-0019', src: '/images/galleries/streets/0019.jpeg', alt: '', width: 6000, height: 4000, category: 'street' },
];

export function getPhotosByCategory(category: PhotoCategory): Photo[] {
  return photos.filter((p) => p.category === category);
}
