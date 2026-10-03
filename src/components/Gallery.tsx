'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { Lightbox } from '@/components/Lightbox';
import { Camera, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'experience'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const filterOptions = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'food', label: t.gallery.filterFood },
    { id: 'interior', label: t.gallery.filterInterior },
    { id: 'experience', label: t.gallery.filterExperience },
  ];

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F5F3EB] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-neutral-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#A38755]" />
            <span>{t.gallery.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            {t.gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4">
            {t.gallery.subtitle}
          </p>

          <p className="text-xs text-neutral-500 italic">
            🔍 {t.gallery.clickPrompt}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm ${
                filter === opt.id
                  ? 'bg-neutral-900 text-[#EADDC9] shadow-md ring-1 ring-neutral-700'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 border border-neutral-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-neutral-200 border border-neutral-300 hover:border-neutral-400 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="self-end p-2 rounded-full bg-black/60 backdrop-blur-sm text-neutral-200 border border-white/20">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-100">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                    {item.caption[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItemIndex !== null && (
        <Lightbox
          item={filteredItems[selectedItemIndex]}
          items={filteredItems}
          currentIndex={selectedItemIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};
