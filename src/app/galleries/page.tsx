// app/galleries/page.tsx
import WorkGallery from '@/components/WorkGallery';
import { photos } from '@/data/photos';

export const metadata = {
  title: 'All Work — Potato Traveler',
  description: 'Street, landscape, and portrait photography by German Rivera De La Torre.',
};

export default function GalleriesPage() {
  return (
    <main className="min-h-screen pt-16">

      <header className="py-20 text-center">
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
          Portfolio
        </p>
        <h1 className="font-montserrat text-5xl sm:text-6xl font-extralight tracking-wide mb-6">
          All Work
        </h1>
        <p className="font-montserrat text-sm font-light text-gray-500 max-w-md mx-auto leading-relaxed">
          Street, landscape, and portrait photography from around the world.
        </p>
      </header>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <WorkGallery photos={photos} />
      </section>

    </main>
  );
}
