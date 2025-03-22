// app/page.tsx
import FeatureGalleries from '@/components/FeatureGalleries';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Gallery items with Unsplash images
  return (
    <main className="min-h-screen">

      {/* Hero Header */}
      <div className="relative h-150 w-full">
        <div className="absolute inset-0 ">
          <Image 
            src="https://images.unsplash.com/photo-1672713615563-bd657947d9e9??q=80&w=1631&auto=format&fit=crop" 
            alt="Hero Image" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-white mb-4">
          POTATO TRAVELER
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-xl">
          Capturing Moments Around the World
          </p>
        </div>
      </div>
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