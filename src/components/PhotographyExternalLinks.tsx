// components/PhotographyExternalLinks.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

type PhotoPlatform = {
  name: string;
  url: string;
  icon: string;
  description: string;
};

const platforms: PhotoPlatform[] = [
  {
    name: 'Pixieset',
    url: 'https://potatotraveler.pixieset.com/',
    icon: '/icons/unsplash-brands.svg',
    description: 'Full portfolio galleries',
  },
  {
    name: 'Unsplash',
    url: 'https://unsplash.com/@potato_traveler',
    icon: '/icons/unsplash-brands.svg',
    description: 'Free downloads on Unsplash',
  },
];

export default function PhotographyExternalLinks() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="font-montserrat text-xs uppercase tracking-[0.25em] text-gray-400 text-center mb-10">
        Also on
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-gray-100 p-6 hover:border-gray-300 transition-colors duration-300"
          >
            <div className="relative w-8 h-8 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
              <Image src={platform.icon} alt={platform.name} fill className="object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-montserrat text-sm font-light">{platform.name}</p>
              <p className="font-montserrat text-xs text-gray-400">{platform.description}</p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
