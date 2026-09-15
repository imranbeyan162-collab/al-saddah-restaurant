'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { featuredDishes, Dish } from '@/data/dishes';
import { Utensils, Sparkles, Flame, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.menu.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            {t.menu.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {t.menu.subtitle}
          </p>

          {/* Informational Disclaimer Banner as specified */}
          <div className="mt-4 inline-block px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 font-medium">
            ℹ️ {t.menu.note}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-neutral-950 text-amber-400 shadow-md ring-2 ring-amber-500/40 scale-105'
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
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Dish Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-100">
                <img
                  src={dish.image}
                  alt={dish.name[language]}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Tag */}
                {dish.badge && (
                  <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/40 shadow">
                      <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
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
                  <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                    {dish.highlights[language].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
                        ? `السلام عليكم، أود الاستفسار عن طبق: ${dish.name.ar}`
                        : language === 'am'
                        ? `ሰላም፣ ስለ ${dish.name.am} መጠየቅ እፈልጋለሁ`
                        : `Hello Al-Saddah, I would like to inquire about: ${dish.name.en}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-600 font-bold group-hover:translate-x-0.5 transition-transform"
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
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              {language === 'ar' ? 'هل ترغب في تجربة هذه الأطباق اليوم؟' : language === 'am' ? 'እነዚህን ምግቦች ዛሬ መቅመስ ይፈልጋሉ?' : 'Craving Authentic Yemeni Flavors Today?'}
            </h3>
            <p className="text-sm text-neutral-300">
              {language === 'ar'
                ? 'زورونا في شارع رواندا بأديس أبابا، أو تواصلوا معنا مباشرة عبر الهاتف أو واتساب.'
                : language === 'am'
                ? 'በሩዋንዳ ጎዳና አዲስ አበባ ይጎብኙን፣ ወይም በቀጥታ በስልክ እና በዋትስአፕ ያግኙን።'
                : 'Visit our multi-floor dining destination on Rwanda Street or contact us directly.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callUs}</span>
            </a>

            <a
              href={t.brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
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
