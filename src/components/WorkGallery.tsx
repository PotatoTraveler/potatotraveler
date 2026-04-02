// components/WorkGallery.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { Photo } from '@/data/photos';

interface WorkGalleryProps {
  photos: Photo[];
}

export default function WorkGallery({ photos }: WorkGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + dir + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, navigate]);

  if (photos.length === 0) {
    return (
      <p className="font-montserrat text-sm text-gray-400 text-center py-20">
        No photos in this category yet.
      </p>
    );
  }

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-3 cursor-pointer group overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt || ''}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl font-extralight z-10 transition-colors leading-none"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl font-thin z-10 px-3 py-6 transition-colors leading-none"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Photo — constrained to viewport, preserves aspect ratio */}
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt || ''}
              width={photos[lightboxIndex].width}
              height={photos[lightboxIndex].height}
              style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto' }}
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl font-thin z-10 px-3 py-6 transition-colors leading-none"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-montserrat text-xs text-white/30 tracking-[0.2em] uppercase">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
