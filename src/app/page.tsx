// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Gallery items with Unsplash images
  const galleryItems = [
    { 
      id: 1, 
      title: 'Manila', 
      image: 'https://images.unsplash.com/photo-1736122094944-da4deea774ab?q=80&w=1470&auto=format&fit=crop',
      category: 'Travel' 
    },
    { 
      id: 2, 
      title: 'Chicago', 
      image: 'https://images.unsplash.com/photo-1672713616626-53c21c1c5748?q=80&w=1473&auto=format&fit=crop',
      category: 'Travel' 
    },
    { 
      id: 3, 
      title: 'Mt.Fuji', 
      image: 'https://images.unsplash.com/photo-1672713616891-2036bb69a7a3?q=80&w=1374&auto=format&fit=crop',
      category: 'Travel' 
    },
    { 
      id: 4, 
      title: 'New York', 
      image: 'https://images.unsplash.com/photo-1672712459037-1cbaaeecd889?q=80&w=1470&auto=format&fit=crop',
      category: 'Travel' 
    },
    { 
      id: 5, 
      title: 'Seattle', 
      image: 'https://images.unsplash.com/photo-1673465179520-03ca24ed0891?q=80&w=1470&auto=format&fit=crop',
      category: 'Travel' 
    },
    { 
      id: 6, 
      title: 'Singapore', 
      image: 'https://images.unsplash.com/photo-1736122080596-f780d47eb1e9?q=80&w=1396&auto=format&fit=crop',
      category: 'Travel' 
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1631&auto=format&fit=crop" 
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
        <h2 className="font-playfair text-3xl font-normal text-center mb-12">Featured Galleries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Link href={`/gallery/${item.id}`} key={item.id} className="gallery-item group">
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="gallery-caption">
                  <div className="text-white">
                    <h3 className="font-playfair text-xl font-normal">{item.title}</h3>
                    <p className="font-montserrat text-sm font-light tracking-wider">{item.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/galleries" className="btn btn-outline">
            View All Galleries
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-normal mb-8">About Me</h2>
          <p className="font-montserrat text-lg font-light mb-8">
            I'm a passionate photographer who loves to capture the beauty of our world. 
            From bustling city streets to serene natural landscapes, I'm always on the lookout 
            for that perfect shot that tells a story.
          </p>
          <Link href="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>
      
      {/* Instagram Feed */}
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
      </section>
    </main>
  );
}