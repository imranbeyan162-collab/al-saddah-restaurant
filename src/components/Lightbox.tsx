'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') isRTL ? onNext() : onPrev();
      if (e.key === 'ArrowRight') isRTL ? onPrev() : onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext, isRTL]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="px-3 py-1 rounded-full bg-neutral-900/80 border border-white/20 text-xs font-semibold text-amber-400">
          {currentIndex + 1} / {items.length}
        </span>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-amber-500 hover:text-black border border-white/20 text-white transition-all"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div
        className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title[language]}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl border border-amber-500/30 shadow-2xl shadow-black"
        />

        <div className="mt-4 text-center max-w-xl">
          <h3 className="text-lg sm:text-xl font-bold text-amber-400">
            {item.title[language]}
          </h3>
          <p className="text-neutral-300 text-xs sm:text-sm mt-1">
            {item.caption[language]}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          isRTL ? onNext() : onPrev();
        }}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 transition-all z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          isRTL ? onPrev() : onNext();
        }}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 transition-all z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
