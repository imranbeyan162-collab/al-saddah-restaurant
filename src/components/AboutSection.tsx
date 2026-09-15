'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Award, Layers, Flame, Utensils, Car, Truck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: t.about.highlight1Title,
      desc: t.about.highlight1Desc,
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      title: t.about.highlight2Title,
      desc: t.about.highlight2Desc,
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-500" />,
      title: t.about.highlight3Title,
      desc: t.about.highlight3Desc,
    },
  ];

  const services = [
    {
      icon: <Utensils className="w-5 h-5 text-amber-400" />,
      title: t.about.serviceDineIn,
      desc: language === 'ar' ? 'صالات متعددة الطوابق مريحة' : language === 'am' ? 'ባለብዙ ፎቅ የመመገቢያ አዳራሽ' : 'Multi-floor comfortable dining',
    },
    {
      icon: <Car className="w-5 h-5 text-amber-400" />,
      title: t.about.serviceDriveThru,
      desc: language === 'ar' ? 'استلام سريع من السيارة' : language === 'am' ? 'የመኪና ፈጣን ማዘዣ' : 'Quick drive-up takeaway',
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-400" />,
      title: t.about.serviceNoContact,
      desc: language === 'ar' ? 'توصيل معقم وبدون تلامس' : language === 'am' ? 'ያለ ንክኪ ማድረስ' : 'Safe doorstep delivery',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 w-fit">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/50 transition-colors"
                >
                  <div className="p-2 w-fit rounded-lg bg-amber-500/10 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Services Offered Section */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                {t.about.servicesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.map((srv, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/15 shrink-0">
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
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-black/80 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Al-Saddah dining atmosphere"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-amber-400/30 text-xs">
                  <span className="font-bold text-amber-300 block mb-0.5">
                    {language === 'ar' ? 'جلسات عائلية متعددة الطوابق' : language === 'am' ? 'ባለብዙ ፎቅ የቤተሰብ አዳራሽ' : 'Multi-Floor Family & Private Dining'}
                  </span>
                  <span className="text-neutral-300 text-[11px]">
                    {language === 'ar' ? 'ثريات فاخرة، إضاءات دافئة، وأجواء مريحة' : language === 'am' ? 'ማራኪ ቻንደለሮች እና ምቹ ድባብ' : 'Chandeliers, marble tables, and welcoming hospitality'}
                  </span>
                </div>
              </div>

              <div className={`absolute -bottom-8 ${isRTL ? '-left-8' : '-right-8'} w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl hidden sm:block`}>
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                  alt="Yemeni Lamb Mandi dish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-amber-300 bg-black/70 py-1 rounded">
                  {language === 'ar' ? 'طهي المندي التقليدي' : language === 'am' ? 'ባህላዊ ማንዲ' : 'Traditional Pit Cooking'}
                </div>
              </div>

              <div className={`absolute -top-5 ${isRTL ? '-right-5' : '-left-5'} p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-neutral-950 font-black text-xs shadow-xl flex items-center gap-1.5 border border-white/20`}>
                <Award className="w-4 h-4" />
                <span>{language === 'ar' ? 'مشروع نسائي رائد' : language === 'am' ? 'በሴቶች የሚመራ' : 'Women-Owned'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
