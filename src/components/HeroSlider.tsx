'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Logo } from '@/components/Logo';
import { UtensilsCrossed, MapPin, ChevronLeft, ChevronRight, Star, Clock, Sparkles } from 'lucide-react';

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
  // 1st photo: The authentic luxury dining hall from the user's first page (crystal chandeliers, marble tables, intimate lighting)
  {
    id: "slide-interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "صالات طعام متعددة الطوابق • شارع رواندا",
      en: "Multi-Floor Dining • Rwanda Street",
      am: "ባለብዙ ፎቅ የመመገቢያ አዳራሽ • ሩዋንዳ ጎዳና"
    },
    title: {
      ar: "أجواء فندقية دافئة وثريات كريستالية",
      en: "Warm Ambience & Crystal Chandeliers",
      am: "ማራኪ ቻንደለሮች እና ሞቅ ያለ ድባብ"
    },
    subtitle: {
      ar: "صالات رحبة تمتد عبر طوابق متعددة، مجهزة بطاولات رخامية وإضاءات هادئة تمنحكم أقصى درجات الراحة والخصوصية",
      en: "Thoughtfully configured multi-floor dining featuring warm crystal chandeliers, marble seating, and secluded family salons",
      am: "ለቤተሰብ እና ለልዩ እንግዶች ምቾት እና ግላዊነት የሚሰጡ ሰፋፊ የእብነበረድ ጠረጴዛዎች እና ማራኪ መብራቶች"
    }
  },
  // 2nd photo: Authentic Slow-Cooked Lamb Mandi in fire pit
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
  // 3rd photo: Royal Adeni Zurbian Feast
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
  // 4th photo: Authentic Charcoal Mixed Grills & Shawarma
  {
    id: "slide-grill",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=85",
    tag: {
      ar: "مشويات وشاورما على الفحم",
      en: "Charcoal Grills & Shawarma",
      am: "ከሰል ላይ የተጠበሰ ስጋ እና ሻዋርማ"
    },
    title: {
      ar: "مشويات السدة والشاورما الطازجة",
      en: "Artisanal Charcoal Grills & Shawarma",
      am: "ትኩስ የተጠበሱ ስጋዎች እና ሻዋርማ"
    },
    subtitle: {
      ar: "تشكيلة من أسياخ المشاوي الطازجة والشاورما المحضرة يومياً بتتبيلات السدة الخاصة وخبز التنور الساخن",
      en: "Fresh skewered meats and artisanal shawarma seasoned with proprietary spices and served with hot tandoor bread",
      am: "በትኩስ የተመረጡ ስጋዎች እና ልዩ ቅመሞች የተዘጋጀ የተጠበሰ ስጋ ከትኩስ ዳቦ ጋር"
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

  // Auto-slide every 5 seconds (5000ms) with smooth cross-fade
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
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with subtle Ken Burns zoom and clear, non-glaring lighting */}
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
              {/* Ken Burns Subtle Zoom */}
              <div
                className={`w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                {/* Natural, clear brightness - allows people to clearly see the restaurant interior and dishes */}
                <img
                  src={slide.image}
                  alt={slide.title[language]}
                  className="w-full h-full object-cover object-center brightness-[0.62] contrast-[1.04]"
                />
              </div>

              {/* Clean, neutral dark gradients for perfect text readability without harsh yellow glare */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          );
        })}
      </div>

      {/* Foreground Hero Content Overlay */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Brand Circular Emblem */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
          <Logo size={96} showText={false} />
        </div>

        {/* Dynamic Slide Badge Tag - Clean, subtle frosted glass */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 text-neutral-200 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md mb-4 shadow-md transition-all duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{currentSlide.tag[language]}</span>
        </div>

        {/* Main Heading with Muted, Sophisticated Champagne/White Contrast */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 leading-tight drop-shadow-lg">
          <span className="text-[#EADDC9] block sm:inline">
            {language === 'ar' ? 'مطعم السدة' : language === 'am' ? 'አል ሰዳህ ሬስቶራንት' : 'AL-SADDAH RESTAURANT'}
          </span>
          <span className="block text-lg sm:text-2xl md:text-3xl font-bold text-neutral-100 mt-1 drop-shadow">
            {currentSlide.title[language]}
          </span>
        </h1>

        {/* Dynamic Slide Subtitle - Clear, highly legible, calm font */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-neutral-300 font-normal mb-8 leading-relaxed drop-shadow min-h-[2.5rem] transition-opacity duration-500">
          {currentSlide.subtitle[language]}
        </p>

        {/* Prominent CTAs: Tasteful, muted luxury buttons without bright neon yellow */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B890] text-neutral-950 font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>{t.hero.btnMenu}</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-black/55 hover:bg-neutral-800/80 text-neutral-100 border border-white/20 hover:border-white/40 font-semibold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
          >
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>{t.hero.btnDirections}</span>
          </a>
        </div>

        {/* Highlights Bar - Refined dark frosted glass, calm bronze icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-2xl text-neutral-300 text-xs">
          <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/55 border border-white/10 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="font-medium text-neutral-200">Rwanda Street • Addis Ababa</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/55 border border-white/10 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-[#C5A880] fill-[#C5A880] shrink-0" />
            <span className="font-medium text-neutral-200">3.8 ★ (782+ Google Reviews)</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/55 border border-white/10 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="font-medium text-neutral-200">{t.hero.badgeHours}</span>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={isRTL ? goToNext : goToPrev}
        className="hidden md:flex absolute left-4 lg:left-8 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/15 transition-all backdrop-blur-md shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={isRTL ? goToPrev : goToNext}
        className="hidden md:flex absolute right-4 lg:right-8 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/15 transition-all backdrop-blur-md shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Minimalist Elegant Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? 'w-6 bg-[#C5A880]'
                : 'w-1.5 bg-white/35 hover:bg-white/60'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
