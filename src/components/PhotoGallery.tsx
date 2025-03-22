// pages/index.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// Define the type for our photo data
interface Photo {
  id: string;
  src: string;
  alt: string;
  location: string;
}

export default function Gallery() {
  // Sample photo data - you would replace this with your actual photos
  const [photos, setPhotos] = useState<Photo[]>([
    { id: '1', src: '/images/photo1.jpg', alt: 'Mountain landscape', location: 'Swiss Alps' },
    { id: '2', src: '/images/photo2.jpg', alt: 'Beach sunset', location: 'Bali, Indonesia' },
    { id: '3', src: '/images/photo3.jpg', alt: 'City skyline', location: 'Tokyo, Japan' },
    { id: '4', src: '/images/photo4.jpg', alt: 'Desert landscape', location: 'Sahara Desert' },
    { id: '5', src: '/images/photo5.jpg', alt: 'Forest path', location: 'Redwood National Park' },
    { id: '6', src: '/images/photo6.jpg', alt: 'Historical architecture', location: 'Rome, Italy' },
    { id: '7', src: '/images/photo7.jpg', alt: 'Waterfall', location: 'Iguazu Falls' },
    { id: '8', src: '/images/photo8.jpg', alt: 'Northern lights', location: 'Iceland' },
    { id: '9', src: '/images/photo9.jpg', alt: 'Cultural market', location: 'Marrakech, Morocco' },
  ]);

  // State for the selected photo when clicked
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Handle clicking on a photo
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  // Listen for escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Places Gallery</title>
        <meta name="description" content="Travel photography gallery" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Gallery Title */}
        <h1 className="text-4xl font-light text-center mb-8 tracking-wide">Places</h1>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                priority={parseInt(photo.id) < 4}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-light">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={handleCloseModal}>
            <div className="relative w-full max-w-4xl h-5/6 flex flex-col">
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-white z-10 text-2xl"
                onClick={handleCloseModal}
              >
                ×
              </button>
              
              {/* Photo container */}
              <div className="relative flex-grow overflow-hidden">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  layout="fill"
                  objectFit="contain"
                  className="select-none"
                />
              </div>
              
              {/* Photo info */}
              <div className="bg-transparent text-white p-4 text-center">
                <p className="text-xl font-light">{selectedPhoto.location}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}