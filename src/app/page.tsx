// app/page.tsx
import FeatureGalleries from '@/components/FeatureGalleries';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Full-screen Hero */}
      <div className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1672713615563-bd657947d9e9?q=80&w=1631&auto=format&fit=crop"
          alt="Hero photograph"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* Centered text */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <p className="font-montserrat text-xs uppercase tracking-[0.35em] text-white/70 mb-6">
            Street &nbsp;·&nbsp; Landscape &nbsp;·&nbsp; Portrait
          </p>
          <h1 className="font-montserrat text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-[0.12em] text-white uppercase mb-8">
            Potato Traveler
          </h1>
          <Link href="/galleries" className="btn-white btn">
            View Work
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-montserrat text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Genre Galleries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FeatureGalleries />
      </section>

      {/* About Section */}
      <section className="bg-[#f8f8f8] py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-3xl font-extralight tracking-wide mb-6">About Me</h2>
          <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-10">
            I&apos;m German Rivera De La Torre — a travel photographer from Puerto Rico, now based in
            St. Louis. I specialize in street, landscape, and portrait photography, having explored
            over 40 countries with a camera and an unlikely companion.
          </p>
          <Link href="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>

    </main>
  );
}
