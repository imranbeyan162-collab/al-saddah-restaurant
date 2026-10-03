'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Award, Layers, Flame, Utensils, Car, Truck, HeartHandshake, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
      title: t.about.highlight1Title,
      desc: t.about.highlight1Desc,
    },
    {
      icon: <Layers className="w-5 h-5 text-[#C5A880]" />,
      title: t.about.highlight2Title,
      desc: t.about.highlight2Desc,
    },
    {
      icon: <Flame className="w-5 h-5 text-[#C5A880]" />,
      title: t.about.highlight3Title,
      desc: t.about.highlight3Desc,
    },
  ];

  const services = [
    {
      icon: <Utensils className="w-4 h-4 text-[#C5A880]" />,
      title: t.about.serviceDineIn,
      desc: language === 'ar' ? 'صالات متعددة الطوابق مريحة' : language === 'am' ? 'ባለብዙ ፎቅ የመመገቢያ አዳራሽ' : 'Multi-floor comfortable dining',
    },
    {
      icon: <Car className="w-4 h-4 text-[#C5A880]" />,
      title: t.about.serviceDriveThru,
      desc: language === 'ar' ? 'استلام سريع من السيارة' : language === 'am' ? 'የመኪና ፈጣን ማዘዣ' : 'Quick drive-up takeaway',
    },
    {
      icon: <Truck className="w-4 h-4 text-[#C5A880]" />,
      title: t.about.serviceNoContact,
      desc: language === 'ar' ? 'توصيل معقم وبدون تلامس' : language === 'am' ? 'ያለ ንክኪ ማድረስ' : 'Safe doorstep delivery',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D0E11] text-white relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-neutral-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="text-neutral-200 font-medium leading-relaxed">{t.about.p1}</p>
              <p className="leading-relaxed">{t.about.p2}</p>
              <p className="leading-relaxed">{t.about.p3}</p>
            </div>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/70 border border-white/10 hover:border-[#C5A880]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/5 mb-3 border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Services Offered Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-3 flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{t.about.servicesTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white/5 shrink-0">
                      {srv.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{srv.title}</div>
                      <div className="text-[11px] text-neutral-400">{srv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Photo: Luxury Dining Atmosphere */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Al-Saddah luxury dining atmosphere"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-xs shadow-xl">
                  <span className="font-bold text-neutral-100 block mb-0.5 text-sm">
                    {language === 'ar' ? 'صالات طعام راقية متعددة الطوابق' : language === 'am' ? 'ባለብዙ ፎቅ የቤተሰብ አዳራሽ' : 'Multi-Floor Family & Private Dining'}
                  </span>
                  <span className="text-neutral-300 text-[11px] leading-relaxed block">
                    {language === 'ar' ? 'ثريات فاخرة، إضاءات هادئة، وأجواء ضيافة عربية' : language === 'am' ? 'ማራኪ ቻንደለሮች እና ምቹ ድባብ' : 'Chandeliers, marble tables, and welcoming Arabian hospitality'}
                  </span>
                </div>
              </div>

              {/* Inset Photo: Authentic Slow Pit Cooking */}
              <div className={`absolute -bottom-8 ${isRTL ? '-left-8' : '-right-8'} w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/90 hidden sm:block`}>
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Traditional Yemeni slow pit cooking"
                  className="w-full h-full object-cover brightness-[0.80]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-semibold text-neutral-200 bg-black/80 backdrop-blur-sm py-1 rounded border border-white/10">
                  {language === 'ar' ? 'طهي المندي في الحفرة' : language === 'am' ? 'ባህላዊ ማንዲ' : 'Traditional Pit Cooking'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
