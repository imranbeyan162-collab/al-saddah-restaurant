'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Logo } from '@/components/Logo';
import { UtensilsCrossed, MapPin, ChevronLeft, ChevronRight, Star, Clock, Sparkles, Award } from 'lucide-react';

interface Slide {
  id: string;
  image: string;
  tag: {
    ar: string;
    en: string;
    am: string;
  };
  title: {
    ar: string;
    en: string;
    am: string;
  };
  subtitle: {
    ar: string;
    en: string;
    am: string;
  };
}

const slides: Slide[] = [
  // 1st photo: The Al-Saddah Restaurant building
  {
    id: "slide-building",
    image: "/images/alsaddah_building.jpg",
    tag: {
      ar: "المبنى الرئيسي • شارع رواندا",
      en: "Main Building • Rwanda Street",
      am: "ዋናው ህንፃ • ሩዋንዳ ጎዳና"
    },
    title: {
      ar: "مبنى مطعم السدة - أديس أبابا",
      en: "Al-Saddah Restaurant Building",
      am: "አል ሰዳህ ሬስቶራንት ህንፃ - አዲስ አበባ"
    },
    subtitle: {
      ar: "صرح معماري راقٍ متعدد الطوابق في شارع رواندا، يجمع بين فخامة الديكور وعراقة الطهي اليمني الأصيل",
      en: "An upscale multi-floor architectural landmark on Rwanda Street, blending luxury dining with authentic Yemeni culinary heritage",
      am: "በሩዋንዳ ጎዳና ላይ የሚገኝ ውብ ባለብዙ ፎቅ ህንፃ፤ እውነተኛ የየመን የምግብ ባህል እና የላቀ መስተንግዶ"
    }
  },
  // 2nd photo: Interior dining hall with chandeliers from the first page
  {
    id: "slide-interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "صالات طعام متعددة الطوابق",
      en: "Multi-Floor Dining Experience",
      am: "ባለብዙ ፎቅ የመመገቢያ አዳራሽ"
    },
    title: {
      ar: "أجواء فندقية دافئة وثريات فاخرة",
      en: "Warm Ambience & Crystal Chandeliers",
      am: "ማራኪ ቻንደለሮች እና ሞቅ ያለ ድባብ"
    },
    subtitle: {
      ar: "إضاءات دافئة وطاولات رخامية مصممة بعناية لتمنح العائلات والضيوف أقصى درجات الراحة والخصوصية",
      en: "Gleaming chandeliers, marble tables, and intimate dining spaces tailored for families and private gatherings",
      am: "ለቤተሰብ እና ለወዳጅ ዘመድ ምቾት እና ግላዊነት የሚሰጡ ሰፋፊ የእብነበረድ ጠረጴዛዎች እና ማራኪ መብራቶች"
    }
  },
  // 3rd photo: Authentic Slow-Cooked Lamb Mandi
  {
    id: "slide-mandi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "الطبق الأشهر • طهي بطيء في الحفرة",
      en: "Signature Pit-Cooked Mandi",
      am: "ዋና ተወዳጅ የበግ ማንዲ"
    },
    title: {
      ar: "مندي اللحم البلدي على أصوله",
      en: "Authentic Slow-Cooked Lamb Mandi",
      am: "እውነተኛ የበግ ማንዲ"
    },
    subtitle: {
      ar: "قطع لحم ضأن طازجة تطهى لساعات في حفرة المندي التقليدية حتى تذوب عن العظم، فوق أرز بسمتي معطر بالزعفران",
      en: "Prime succulent lamb slow-roasted for hours in our traditional fire pit, served over aromatic saffron basmati rice",
      am: "በባህላዊ የእሳት ጉድጓድ ውስጥ ለሰዓታት በዝግታ የበሰለ ለስላሳ የበግ ስጋ ከጣፋጭ የዛፍራን ሩዝ ጋር"
    }
  },
  // 4th photo: Adeni Zurbian Feast
  {
    id: "slide-zurbian",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "نكهة عدنية ملكية",
      en: "Royal Adeni Specialty",
      am: "የአደን ልዩ ምግብ"
    },
    title: {
      ar: "زربيان اللحم العدني بالبهارات التراثية",
      en: "Royal Adeni Zurbian Feast",
      am: "ዙርቢያን የበግ ከዛፍራን ጋር"
    },
    subtitle: {
      ar: "توليفة ملكية غنية باللحم الطري المتبل بالزبادي والبصل المكرمل وبهارات الحوايج اليمنية المستوردة",
      en: "A festive royal Adeni dish layered with tender meat, caramelized golden onions, and fragrant heirloom spices",
      am: "በካራሜላይዝድ ሽንኩርት፣ ልዩ የአደን ቅመሞች እና ለስላሳ ስጋ የተዘጋጀ የበግ ዙርቢያን"
    }
  },
  // 5th photo: Traditional Tea & Yemeni Hospitality
  {
    id: "slide-tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "كرم الضيافة والحلويات",
      en: "Hospitality & Traditional Desserts",
      am: "የየመን መስተንግዶ እና ጣፋጮች"
    },
    title: {
      ar: "شاي عدني بالهيل وحلويات المعصوب",
      en: "Steeped Cardamom Tea & Pastries",
      am: "ባህላዊ የየመን ሻይ እና ፈጢራ"
    },
    subtitle: {
      ar: "شاي أسود معتق يغلى ببطء مع الهيل والقرفة، يقدم إلى جانب المعصوب بالقشطة والفطيرة بالعسل الطبيعي",
      en: "Full-bodied black tea simmered with cracked cardamom pods, perfectly paired with warm honey pastries and cream masoob",
      am: "በኮረሪማ እና ቀረፋ የተፈላ ባህላዊ ሻይ፣ ከጣፋጭ መዕሱብ እና ፈጢራ በማር ጋር"
    }
  }
];

export const HeroSlider: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds (5000ms)
  useEffect(() => {
    if (isPaused) return;

    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [isPaused, slides.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Ken Burns Cinematic Zoom & Smooth Cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Ken Burns Slow Zoom */}
              <div
                className={`w-full h-full transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title[language]}
                  className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.15]"
                />
              </div>

              {/* Gradients & Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
              <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-black/90" />
            </div>
          );
        })}
      </div>

      {/* Golden Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Hero Content Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Brand Circular Emblem */}
        <div className="mb-5 transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_10px_30px_rgba(201,162,39,0.4)]">
          <Logo size={105} showText={false} />
        </div>

        {/* Dynamic Slide Badge Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-4 shadow-lg transition-all duration-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{currentSlide.tag[language]}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>{t.hero.badgeWomen}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-tight">
          <span className="gold-gradient-text drop-shadow-[0_4px_20px_rgba(201,162,39,0.35)]">
            {language === 'ar' ? 'مطعم السدة' : language === 'am' ? 'አል ሰዳህ ሬስቶራንት' : 'AL-SADDAH'}
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl font-extrabold text-neutral-100 mt-1">
            {currentSlide.title[language]}
          </span>
        </h1>

        {/* Dynamic Slide Subtitle */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-neutral-200 font-medium mb-8 leading-relaxed drop-shadow-md min-h-[3rem] transition-opacity duration-500">
          {currentSlide.subtitle[language]}
        </p>

        {/* Prominent CTAs: "View Menu" and "Get Directions" */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 font-extrabold text-base gold-glow-btn shadow-lg shadow-amber-900/40 hover:brightness-110 active:scale-95 transition-all"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>{t.hero.btnMenu}</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-neutral-900/85 hover:bg-neutral-800 text-neutral-100 border border-amber-400/40 hover:border-amber-400 font-bold text-base backdrop-blur-md hover:text-amber-300 transition-all active:scale-95"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>{t.hero.btnDirections}</span>
          </a>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-4xl text-neutral-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-950/70 border border-white/10 backdrop-blur-sm">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.badgeWomen}</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-950/70 border border-white/10 backdrop-blur-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>3.8 ★ (782+ Reviews)</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-950/70 border border-white/10 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.hero.badgeHours}</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-neutral-950/70 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">Rwanda Street</span>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={isRTL ? goToNext : goToPrev}
        className="hidden md:flex absolute left-4 lg:left-8 z-20 p-3.5 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 hover:border-amber-400 transition-all backdrop-blur-md shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={isRTL ? goToPrev : goToNext}
        className="hidden md:flex absolute right-4 lg:right-8 z-20 p-3.5 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 hover:border-amber-400 transition-all backdrop-blur-md shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Minimalist Elegant Slide Indicators (No Counter, No Numbers) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? 'w-8 bg-amber-400 shadow-[0_0_12px_#C9A227]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
