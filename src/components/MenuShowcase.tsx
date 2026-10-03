'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { featuredDishes, Dish } from '@/data/dishes';
import { Sparkles, Flame, CheckCircle2, MessageCircle, Phone, Info } from 'lucide-react';

export const MenuShowcase: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  const [activeCategory, setActiveCategory] = useState<'all' | 'mandi' | 'shawarma' | 'sweets'>('all');

  const filteredDishes = activeCategory === 'all'
    ? featuredDishes
    : featuredDishes.filter(d => d.category === activeCategory);

  const categories = [
    { id: 'all', label: t.menu.filterAll },
    { id: 'mandi', label: t.menu.filterMandi },
    { id: 'shawarma', label: t.menu.filterShawarma },
    { id: 'sweets', label: t.menu.filterSweets },
  ];

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FCFBF7] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A38755]" />
            <span>{t.menu.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">
            {t.menu.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>

          {/* Informational Disclaimer Banner as specified */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100/80 border border-neutral-200 text-xs sm:text-sm text-neutral-700 font-medium">
            <Info className="w-4 h-4 text-[#A38755] shrink-0" />
            <span>{t.menu.note}</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-neutral-900 text-[#EADDC9] shadow-md ring-1 ring-neutral-700 scale-105'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 border border-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Dish Image Container */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-neutral-100">
                <img
                  src={dish.image}
                  alt={dish.name[language]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Tag */}
                {dish.badge && (
                  <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#EADDC9] text-xs font-semibold border border-white/20 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-[#C5A880]" />
                      {dish.badge[language]}
                    </span>
                  </div>
                )}

                {/* Bottom title overlay on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow">
                    {dish.name[language]}
                  </h3>
                </div>
              </div>

              {/* Dish Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {dish.description[language]}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                    {dish.highlights[language].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A38755] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Inquiry Action Strip */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-500">
                    {language === 'ar' ? 'متوفر يومياً' : language === 'am' ? 'በየቀኑ ይገኛል' : 'Available Daily'}
                  </span>
                  <a
                    href={`https://wa.me/251977777747?text=${encodeURIComponent(
                      language === 'ar'
                        ? `السلام عليكم، أود الاستفسار عن طبق: ${dish.name.ar} في مطعم السدة`
                        : language === 'am'
                        ? `ሰላም፣ ስለ ${dish.name.am} መጠየቅ እፈልጋለሁ`
                        : `Hello Al-Saddah, I would like to inquire about: ${dish.name.en}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-black font-bold group-hover:translate-x-0.5 transition-transform"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'ar' ? 'استفسر عبر واتساب' : language === 'am' ? 'በዋትስአፕ ይጠይቁ' : 'Inquire via WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-neutral-950 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {language === 'ar' ? 'هل ترغب في تجربة هذه الأطباق اليوم؟' : language === 'am' ? 'እነዚህን ምግቦች ዛሬ መቅመስ ይፈልጋሉ?' : 'Craving Authentic Yemeni Flavors Today?'}
            </h3>
            <p className="text-sm text-neutral-300 max-w-xl">
              {language === 'ar'
                ? 'زورونا في صالاتنا الفاخرة متعددة الطوابق بشارع رواندا، أو تواصلوا معنا مباشرة عبر الهاتف أو واتساب.'
                : language === 'am'
                ? 'በሩዋንዳ ጎዳና አዲስ አበባ ባለብዙ ፎቅ አዳራሻችን ይጎብኙን፣ ወይም በቀጥታ በስልክ እና በዋትስአፕ ያግኙን።'
                : 'Visit our multi-floor dining destination on Rwanda Street or contact us directly on WhatsApp.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C5A880] hover:bg-[#D4B890] text-neutral-950 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callUs}</span>
            </a>

            <a
              href={t.brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
