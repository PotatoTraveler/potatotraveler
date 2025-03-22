// app/page.tsx
import FeatureGalleries from '@/components/FeatureGalleries';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Gallery items with Unsplash images
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1742597548273-d913136bd5cb?q=80&w=1631&auto=format&fit=crop" 
            alt="Hero Image" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-normal mb-4 tracking-wide">POTATO TRAVELER</h1>
            <p className="font-montserrat text-xl md:text-2xl font-light tracking-wider">Capturing Moments Around the World</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <FeatureGalleries />
      </section>

      {/* About Section */}
      <section className="bg-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-normal mb-8">About Me</h2>
          <p className="font-montserrat text-lg font-light mb-8">
            I&apos;m a passionate photographer who loves to capture the beauty of our world. 
            From bustling city streets to serene natural landscapes, I&apos;m always on the lookout 
            for that perfect shot that tells a story.
          </p>
          <Link href="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>
      
      {/* Instagram Feed 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-normal text-center mb-12">Follow My Journey</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" key={item} className="block aspect-square overflow-hidden group">
                <div className="relative h-full w-full">
                  <Image 
                    src={`https://source.unsplash.com/random/300x300?travel,${item}`} 
                    alt={`Instagram Post ${item}`} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-montserrat text-sm uppercase tracking-wider hover:text-secondary">
              @potatotraveler
            </a>
          </div>
        </div>
      </section>*/}
    </main>
  );
}