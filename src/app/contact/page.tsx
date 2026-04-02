// app/contact/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Contact — Potato Traveler',
  description: 'Get in touch with German Rivera De La Torre for collaborations, licensing, and commissions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">

      {/* Header */}
      <header className="py-20 text-center">
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
          Get in Touch
        </p>
        <h1 className="font-montserrat text-5xl sm:text-6xl font-extralight tracking-wide mb-6">
          Contact
        </h1>
        <p className="font-montserrat text-sm font-light text-gray-500 max-w-md mx-auto leading-relaxed">
          Available for commercial projects, editorial assignments, licensing, and workshops.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Location */}
          <div className="border border-gray-100 p-8">
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
              Location
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider mb-1">Based in</p>
                <p className="font-montserrat text-base font-light">St. Louis, Missouri</p>
              </div>
              <div>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider mb-1">Originally from</p>
                <p className="font-montserrat text-base font-light">San Juan, Puerto Rico</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border border-gray-100 p-8">
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
              Direct
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:potatotraveler@gmail.com"
                  className="font-montserrat text-base font-light hover:text-gray-500 transition-colors"
                >
                  potatotraveler@gmail.com
                </a>
              </div>
              <div>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/potato.traveler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-base font-light hover:text-gray-500 transition-colors"
                >
                  @potato.traveler
                </a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="border border-gray-100 p-8 md:col-span-2">
            <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
              Support
            </p>
            <p className="font-montserrat text-sm font-light text-gray-500 leading-relaxed mb-6">
              If you enjoy following the work, you can support future projects and travels via Ko-fi.
            </p>
            <a
              href="https://ko-fi.com/potatotraveler"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Buy me a coffee
            </a>
          </div>

        </div>

        <div className="mt-16 pt-16 border-t border-gray-100 text-center">
          <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
            View Work
          </p>
          <div className="flex justify-center gap-8">
            <Link href="/work/street" className="font-montserrat text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Street</Link>
            <Link href="/work/landscape" className="font-montserrat text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Landscape</Link>
            <Link href="/work/portrait" className="font-montserrat text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Portrait</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
