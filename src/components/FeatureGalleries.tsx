// components/FeatureGallery.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function FeatureGalleries() {
    const galleryItems = [
        { 
          id: 1, 
          title: 'Manila', 
          image: 'https://images.unsplash.com/photo-1736122094944-da4deea774ab?q=80&w=1470&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/philippines/",
          category: 'Travel' 
        },
        { 
          id: 2, 
          title: 'Puerto Rico', 
          image: 'https://images.unsplash.com/photo-1672713616626-53c21c1c5748?q=80&w=1473&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/puertorico/",
          category: 'Travel' 
        },
        { 
          id: 3, 
          title: 'Japan', 
          image: 'https://images.unsplash.com/photo-1672713616891-2036bb69a7a3?q=80&w=1374&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/japan/",
          category: 'Travel' 
        },
        { 
          id: 4, 
          title: 'New York', 
          image: 'https://images.unsplash.com/photo-1672712459037-1cbaaeecd889?q=80&w=1470&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/newyork/",
          category: 'Travel' 
        },
        { 
          id: 5, 
          title: 'Seattle', 
          image: 'https://images.unsplash.com/photo-1673465179520-03ca24ed0891?q=80&w=1470&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/newyork/",
          category: 'Travel' 
        },
        { 
          id: 6, 
          title: 'Singapore', 
          image: 'https://images.unsplash.com/photo-1736122080596-f780d47eb1e9?q=80&w=1396&auto=format&fit=crop',
          link: "https://potatotraveler.pixieset.com/places/singapore/",
          category: 'Travel' 
        },
      ];

    return (

        <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-playfair text-3xl font-normal text-center mb-12">Featured Galleries</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item) => (
                    <Link href={item.link} key={item.id} className="gallery-item group">
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
                {/* <Link href="/galleries" className="btn btn-outline">
                    View All Galleries
                </Link> */}
            </div>
        </div>

    );
}