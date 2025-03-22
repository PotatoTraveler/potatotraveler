"use client";// pages/index.tsx
// pages/index.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for our photo data
interface Photo {
  id: string;
  src: string;
  alt: string;
  location: string;
  width: number;
  height: number;
}

export default function Gallery() {
  // Photo data using Unsplash images
  const [photos] = useState<Photo[]>([
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      alt: 'Mountain landscape',
      location: 'Dolomites, Italy',
      width: 1200,
      height: 800
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
      alt: 'Beach sunset',
      location: 'Bali, Indonesia',
      width: 800,
      height: 1200
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
      alt: 'Urban skyline',
      location: 'Tokyo, Japan',
      width: 1200,
      height: 900
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
      alt: 'Desert landscape',
      location: 'Sahara Desert, Morocco',
      width: 1200,
      height: 700
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1511497584788-876760111969',
      alt: 'Forest path',
      location: 'Redwood National Park, California',
      width: 800,
      height: 1000
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b',
      alt: 'Historical architecture',
      location: 'Rome, Italy',
      width: 1200,
      height: 800
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
      alt: 'Mountain lake',
      location: 'Banff National Park, Canada',
      width: 900,
      height: 1200
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1483168527879-c66136b56105',
      alt: 'Northern lights',
      location: 'Iceland',
      width: 1200,
      height: 800
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      alt: 'Rural landscape',
      location: 'Tuscany, Italy',
      width: 800,
      height: 1100
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
      alt: 'Sunset over water',
      location: 'Maldives',
      width: 1200,
      height: 800
    },
    {
      id: '11',
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      alt: 'Mountain range',
      location: 'Swiss Alps',
      width: 800,
      height: 1000
    },
    {
      id: '12',
      src: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a',
      alt: 'Ancient temple',
      location: 'Angkor Wat, Cambodia',
      width: 1200,
      height: 900
    }
  ]);

  // State for the selected photo when clicked
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handle clicking on a photo
  const handlePhotoClick = (photo: Photo) => {
    const index = photos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Navigate to next/previous photo
  const navigatePhoto = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % photos.length
      : (currentIndex - 1 + photos.length) % photos.length;

    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  // Listen for arrow keys and escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedPhoto) {
        if (event.key === 'Escape') {
          handleCloseModal();
        } else if (event.key === 'ArrowRight') {
          navigatePhoto('next');
        } else if (event.key === 'ArrowLeft') {
          navigatePhoto('prev');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, currentIndex]);

  return (
    <main className="min-h-screen">
      
      <div className="min-h-screen bg-white">
          {/* Gallery Title */}
          <h1 className="text-5xl font-extralight text-center mb-12 tracking-wide text-gray-800">Places</h1>

          {/* Masonry Photo Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid-column overflow-hidden cursor-pointer group relative mb-4"
                onClick={() => handlePhotoClick(photo)}
              >
                <div className="relative" style={{ paddingBottom: `${(photo.height / photo.width) * 100}%` }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={parseInt(photo.id) < 6}
                    className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-light">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>




          {/* Lightbox Modal */}
          {selectedPhoto && (
            <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center" onClick={handleCloseModal}>
              {/* Close button */}
              <button
                className="absolute top-4 right-6 text-white z-10 text-4xl font-light hover:text-gray-300"
                onClick={(e) => { e.stopPropagation(); handleCloseModal(); }}
              >
                ×
              </button>

              {/* Navigation arrows */}
              <button
                className="absolute left-4 text-white z-10 text-4xl font-light hover:text-gray-300"
                onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
              >
                ‹
              </button>

              <button
                className="absolute right-4 text-white z-10 text-4xl font-light hover:text-gray-300"
                onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
              >
                ›
              </button>

              {/* Photo container */}
              <div
                className="relative max-w-5xl max-h-screen p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative" style={{
                  width: '100%',
                  height: '70vh',
                  maxHeight: 'calc(100vh - 160px)'
                }}>
                  <Image
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].alt}
                    layout="fill"

                  />
                </div>

                {/* Photo info */}
                <div className="bg-transparent text-white p-4 text-center">
                  <p className="text-xl font-light">{photos[currentIndex].location}</p>
                </div>
              </div>

              {/* Navigation info */}
              <div className="absolute bottom-4 text-gray-400 text-sm">
                Use arrow keys to navigate • ESC to close
              </div>
            </div>
          )}

      </div>
    </main>

  );
}