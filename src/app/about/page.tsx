// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import PhotographyExternalLinks from '@/components/PhotographyExternalLinks';

export default function About() {
  return (
    <main className="min-h-screen pt-16">

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="md:w-2/5">
              <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/photographer-portrait.jpg"
                  alt="Portrait of German Rivera De La Torre"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-3/5 md:pt-4">
              <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-gray-400 mb-4">
                Street &nbsp;·&nbsp; Landscape &nbsp;·&nbsp; Portrait
              </p>
              <h1 className="font-montserrat text-4xl lg:text-5xl font-extralight tracking-tight mb-8">
                Potato<br />Traveler
              </h1>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-4">
                I am a travel photographer and visual storyteller dedicated to capturing the world
                through three distinct disciplines:
              </p>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-2">
                <span className="font-normal text-gray-700">Street Photography: </span> Finding the quiet, human moment within the pulse of urban chaos.
              </p>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-2">
                <span className="font-normal text-gray-700">Landscape Photography: </span>  Seeking solitude and scale in the earth&apos;s wide-open spaces.
              </p>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-4">
                <span className="font-normal text-gray-700">Portraiture: </span> Looking past the surface to find something authentic and true in a person&apos;s face.
              </p>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-6">
                My work is driven by the belief that every journey holds a story worth telling,
                whether it&apos;s found in the heart of a crowded city or the stillness of a remote horizon.
              </p>
              <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Inquiries &amp; Collaborations
              </p>
              <p className="font-montserrat text-base font-light text-gray-600 leading-relaxed mb-10">
                Available for commercial projects, global travel assignments, and photography
                workshops. Let&apos;s tell a story together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/galleries" className="btn">View Work</Link>
                <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-extralight tracking-wide text-center mb-16">
            Specializations
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Street',
                body: 'I photograph the unscripted — people mid-step, signs of a culture, the texture of a city at night. My street work is candid and close.',
              },
              {
                title: 'Landscape',
                body: 'From mountain passes to coastal cliffs, I look for light and scale. I\'m drawn to places that make you feel small in the best possible way.',
              },
              {
                title: 'Portrait',
                body: 'I work with natural light and minimal direction. A good portrait is a collaboration — I\'m trying to show who someone already is.',
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-gray-400 mb-3">
                  {title}
                </p>
                <p className="font-montserrat text-sm font-light text-gray-600 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-white">
        <PhotographyExternalLinks />
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-3xl font-extralight tracking-wide mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="font-montserrat text-base font-light text-gray-500 mb-10">
            Available for commercial projects, editorial assignments, and workshops.
          </p>
          <Link href="/contact" className="btn btn-outline">Get In Touch</Link>
        </div>
      </section>

    </main>
  );
}
