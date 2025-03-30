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
  orientation: 'horizontal' | 'vertical';
}

// Add this utility function at the top of the file
const getImageOrientation = (width: number, height: number) => {
  return width > height ? 'horizontal' : 'vertical';
};

const generatePhotos = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    // Example dimensions - you should replace these with actual image dimensions
    const width = i % 2 === 0 ? 1200 : 800;
    const height = i % 2 === 0 ? 800 : 1200;
    
    return {
      id: String(i + 1).padStart(4, '0'),
      src: `/images/galleries/${String(i + 1).padStart(4, '0')}.jpeg`,
      alt: `Image ${i + 1}`,
      location: 'Location Name',
      width: width,
      height: height,
      orientation: getImageOrientation(width, height)
    };
  });
};

export default function Gallery() {
  // Photo data using Unsplash images
  const basePath = '/images/galleries/';
  const [photos] = useState<Photo[]>(generatePhotos(21));

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
            {photos.map((photo, id) => (
              <div
                key={id}
                className="break-inside-avoid-column overflow-hidden cursor-pointer group relative mb-4"
                
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
                {/*<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-light">{photo.location}</p>
                </div>*/}
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