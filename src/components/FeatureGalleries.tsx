// components/FeatureGalleries.tsx
import Link from 'next/link';
import Image from 'next/image';

const genres = [
  {
    id: 1,
    title: 'Street',
    description: 'Life in motion — candid moments captured in the world\'s cities.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1344&auto=format&fit=crop',
    link: '/work/street',
  },
  {
    id: 2,
    title: 'Landscape',
    description: 'Vast horizons and quiet places across six continents.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop',
    link: '/work/landscape',
  },
  {
    id: 3,
    title: 'Portrait',
    description: 'Faces and stories — the people who make every place come alive.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop',
    link: '/work/portrait',
  },
];

export default function FeatureGalleries() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="font-montserrat text-3xl font-extralight tracking-wide mb-4">Work</h2>
        <p className="font-montserrat text-sm font-light text-gray-500 tracking-wider uppercase">
          Street &nbsp;·&nbsp; Landscape &nbsp;·&nbsp; Portrait
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <Link
            href={genre.link}
            key={genre.id}
            className="gallery-item group block"
            target={genre.link.startsWith('http') ? '_blank' : undefined}
            rel={genre.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src={genre.image}
                alt={genre.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Persistent dark base at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-montserrat text-xl font-light tracking-[0.15em] uppercase mb-1">
                  {genre.title}
                </h3>
                <p className="font-montserrat text-xs font-light text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  {genre.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/galleries" className="btn btn-outline">
          View All Work
        </Link>
      </div>
    </div>
  );
}
