// app/work/street/page.tsx
import Link from 'next/link';
import WorkGallery from '@/components/WorkGallery';
import { getPhotosByCategory } from '@/data/photos';

export const metadata = {
  title: 'Street Photography — Potato Traveler',
  description: 'Candid moments captured in the world\'s cities and streets.',
};

export default function StreetPage() {
  const photos = getPhotosByCategory('street');

  return (
    <main className="min-h-screen pt-16">

      {/* Page Header */}
      <header className="py-20 text-center">
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
          Work
        </p>
        <h1 className="font-montserrat text-5xl sm:text-6xl font-extralight tracking-wide mb-6">
          Street
        </h1>
        <p className="font-montserrat text-sm font-light text-gray-500 max-w-md mx-auto leading-relaxed">
          Life in motion — candid moments captured in the world&apos;s cities and streets.
        </p>
      </header>

      {/* Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <WorkGallery photos={photos} />
      </section>

      {/* Other Genres */}
      <nav className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-gray-400 text-center mb-10">
            More Work
          </p>
          <div className="flex justify-center gap-12 sm:gap-20">
            <Link
              href="/work/landscape"
              className="group text-center"
            >
              <span className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300">
                Landscape
              </span>
              <span className="block mt-1 h-px w-full bg-gray-200 group-hover:bg-black transition-colors duration-300" />
            </Link>
            <Link
              href="/work/portrait"
              className="group text-center"
            >
              <span className="block font-montserrat text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300">
                Portrait
              </span>
              <span className="block mt-1 h-px w-full bg-gray-200 group-hover:bg-black transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </nav>

    </main>
  );
}
