import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

// Define types for our photography platforms
type PhotoPlatform = {
  name: string;
  url: string;
  icon: string;
  altText: string;
};

const PhotographyExternalLinks: React.FC = () => {
  // Array of photography platforms with their details
  const platforms: PhotoPlatform[] = [
    {
      name: 'GuruShots',
      url: 'https://gurushots.com/potatotraveler/photos', // Replace with your actual profile URL
      icon: '/icons/gurushot.png', // You'll need to create or acquire these SVG icons
      altText: 'GuruShots Profile'
    },
    {
      name: 'Pixieset',
      url: 'https://potatotraveler.pixieset.com/', // Replace with your actual profile URL
      icon: '/icons/pixieset.png',
      altText: 'Pixieset Portfolio'
    },
    {
      name: 'Unsplash',
      url: 'https://unsplash.com/@potato_traveler', // Replace with your actual profile URL
      icon: '/icons/unsplash-brands.svg',
      altText: 'Unsplash Collection'
    },
    // You can add more platforms here as needed
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Work Around the Web</h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore my photography across various platforms. Each site showcases different aspects of my work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Link 
              href={platform.url} 
              key={platform.name}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={platform.icon}
                    alt={platform.altText}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {platform.name}
                  <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-gray-500 text-center">View my work on {platform.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyExternalLinks;