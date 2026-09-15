'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { customerReviews } from '@/data/reviews';
import { Star, CheckCircle, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-4">
            {t.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
            {t.reviews.subtitle}
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl bg-neutral-950 text-white shadow-xl border border-amber-500/30">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-amber-400">3.8</span>
              <div className="flex flex-col text-start">
                <div className="flex text-amber-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-4 h-4 text-amber-400/50" />
                </div>
                <span className="text-[11px] text-neutral-400">out of 5.0</span>
              </div>
            </div>

            <div className="h-6 w-px bg-neutral-800 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>782 {language === 'ar' ? 'مراجعة موثقة على Google' : language === 'am' ? 'የተረጋገጡ የGoogle ግምገማዎች' : 'Google Reviews'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#FCFBF7] border border-neutral-200 hover:border-amber-400/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                    {rev.highlight[language]}
                  </span>
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote[language]}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-neutral-900">{rev.name}</div>
                  <div className="text-[10px] text-neutral-500">{rev.date}</div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
