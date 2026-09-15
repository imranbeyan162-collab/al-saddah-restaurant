export interface GalleryItem {
  id: string;
  category: 'food' | 'interior' | 'experience';
  image: string;
  title: {
    ar: string;
    en: string;
    am: string;
  };
  caption: {
    ar: string;
    en: string;
    am: string;
  };
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "قاعة الطعام الفاخرة",
      en: "Upscale Main Dining Hall",
      am: "ዋናው የመመገቢያ አዳራሽ"
    },
    caption: {
      ar: "ثريات كريستالية وإضاءة دافئة وطاولات رخامية مصممة لأرقى تجارب الضيافة",
      en: "Gleaming chandeliers, ambient warm lighting, and luxury marble tables",
      am: "ማራኪ ቻንደለሮች፣ ሞቅ ያለ መብራት እና ውብ የእብነበረድ ጠረጴዛዎች"
    }
  },
  {
    id: "g2",
    category: "food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "مندي اللحم اليمني",
      en: "Authentic Yemeni Lamb Mandi",
      am: "እውነተኛ የበግ ማንዲ"
    },
    caption: {
      ar: "لحم الضأن المشوي في حفرة المندي مع الأرز البسمتي والمكسرات",
      en: "Pit-roasted lamb shoulder served with spiced basmati and sahawiq sauce",
      am: "በጉድጓድ ውስጥ የበሰለ ለስላሳ የበግ ስጋ ከሩዝ ጋር"
    }
  },
  {
    id: "g3",
    category: "interior",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "جلسات الطوابق المتعددة",
      en: "Multi-Floor Dining Spaces",
      am: "ባለብዙ ፎቅ አዳራሾች"
    },
    caption: {
      ar: "مساحات واسعة ومريحة للعائلات والمجموعات تمنح الخصوصية والراحة",
      en: "Thoughtfully configured multi-floor layout offering intimacy and warmth",
      am: "ለቤተሰብ እና ለወዳጅ ዘመድ ምቾት የሚሰጡ ሰፋፊ ክፍሎች"
    }
  },
  {
    id: "g4",
    category: "food",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "زربيان اللحم العدني",
      en: "Traditional Meat Zurbian",
      am: "ዙርቢያን የበግ"
    },
    caption: {
      ar: "أرز الزربيان المتبل بنكهات الزعفران والبهارات اليمنية العريقة",
      en: "Fragrant Adeni saffron rice infused with spices and tender meat",
      am: "በልዩ የአደን ቅመም እና ዛፍራን የተዘጋጀ ሩዝ"
    }
  },
  {
    id: "g5",
    category: "experience",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "جلسات عائلية خاصة",
      en: "Private Family Salons",
      am: "የቤተሰብ የግል ክፍሎች"
    },
    caption: {
      ar: "أقسام هادئة صممت خصيصاً لتناول وجبات العائلة بأريحية تامة",
      en: "Secluded dining spaces catering to private family dinners and celebrations",
      am: "ለቤተሰብ እራት እና ለልዩ ዝግጅት ምቹ የሆኑ ክፍሎች"
    }
  },
  {
    id: "g6",
    category: "food",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "شاورما السدة الطازجة",
      en: "Freshly Carved Shawarma",
      am: "ትኩስ የሻዋርማ ሳንድዊች"
    },
    caption: {
      ar: "مشوية على السيخ وملفوفة بخبز الصاج الطازج مع صوص الثوم اللذيذ",
      en: "Spit-carved meat wrapped in saj bread with creamy garlic toum",
      am: "በሲህ ተጠብሶ በሳጅ ዳቦ የተጠቀለለ ሻዋርማ"
    }
  },
  {
    id: "g7",
    category: "interior",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "الإضاءة والديكور الذهبي",
      en: "Gold & Black Ambience",
      am: "ወርቃማ እና ጥቁር ዲዛይን"
    },
    caption: {
      ar: "لمسات ذهبية أنيقة وأجواء مسائية ساحرة تعكس هوية مطعم السدة",
      en: "Warm amber lighting accents reflecting Al-Saddah's signature palette",
      am: "የአል ሰዳህን መለያ የሚያንፀባርቁ ውብ መብራቶች"
    }
  },
  {
    id: "g8",
    category: "experience",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    title: {
      ar: "كرم الشاي العدني والضيافة",
      en: "Yemeni Hospitality & Tea",
      am: "የየመን መስተንግዶ እና ሻይ"
    },
    caption: {
      ar: "ضيافة يمنية كريمة وشاي معتق بالهيل والنعناع يقدم بكل ترحاب",
      en: "Welcoming hospitality with cardamom-spiced black tea served hot",
      am: "በኮረሪማ እና ናና የተዘጋጀ ባህላዊ ሻይ እና ሞቅ ያለ መስተንግዶ"
    }
  }
];
