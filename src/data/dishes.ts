export interface Dish {
  id: string;
  category: 'mandi' | 'shawarma' | 'sweets';
  image: string;
  badge?: {
    ar: string;
    en: string;
    am: string;
  };
  name: {
    ar: string;
    en: string;
    am: string;
  };
  description: {
    ar: string;
    en: string;
    am: string;
  };
  highlights: {
    ar: string[];
    en: string[];
    am: string[];
  };
}

export const featuredDishes: Dish[] = [
  {
    id: "meat-mandi",
    category: "mandi",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "الطبق الأشهر",
      en: "Signature Dish",
      am: "ዋና ተወዳጅ"
    },
    name: {
      ar: "مندي لحم بلدي",
      en: "Meat Mandi",
      am: "የበግ ማንዲ"
    },
    description: {
      ar: "قطع لحم ضأن طازجة ومتبلة تطهى في حفرة المندي التقليدية على نار هادئة، تقدم فوق أرز بسمتي معطر بالهيل والزعفران والمكسرات الذهبية.",
      en: "Tender fresh lamb slow-cooked to perfection in our traditional underground pit, served over fragrant saffron basmati rice with toasted nuts.",
      am: "በልዩ የየመን ባህላዊ የእሳት ጉድጓድ ውስጥ በዝግታ የበሰለ ለስላሳ የበግ ስጋ፣ ከጣፋጭ የባስማቲ ሩዝ እና የተቆሉ ለውዞች ጋር የሚቀርብ።"
    },
    highlights: {
      ar: ["طهي بطيء في الحفرة", "لحم طازج يومياً", "يقدم مع السحاوق"],
      en: ["Slow Pit-Cooked", "Fresh Daily Lamb", "Served with Sahawiq"],
      am: ["በጉድጓድ የበሰለ", "ትኩስ ስጋ", "ከሰሃዊቅ ሳልሳ ጋር"]
    }
  },
  {
    id: "meat-zurbian",
    category: "mandi",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "نكهة عدنية أصيلة",
      en: "Adeni Specialty",
      am: "የአደን ልዩ ምግብ"
    },
    name: {
      ar: "زربيان لحم",
      en: "Meat Zurbian",
      am: "ዙርቢያን የበግ"
    },
    description: {
      ar: "طبق عدني ملكي عريق يجمع بين قطع اللحم المتبلة باللبن الرائب والبصل المكرمل وبهارات الزربيان الغنية، مع أرز مبهر بلونين.",
      en: "A festive royal Adeni dish layered with marinated spiced meat, caramelized golden onions, yogurt, and aromatic two-tone saffron rice.",
      am: "በካራሜላይዝድ ሽንኩርት፣ እርጎ እና ልዩ የአደን ቅመሞች የተዘጋጀ የበግ ስጋ ከባለ ሁለት ቀለም የሩዝ አይነቶች ጋር።"
    },
    highlights: {
      ar: ["تتبيلة عدنية خاصة", "بصل مكرمل فاخر", "أرز بالزعفران"],
      en: ["Adeni Spices", "Caramelized Onions", "Saffron Basmati"],
      am: ["ልዩ የአደን ቅመም", "የተጠበሰ ሽንኩርት", "የዛፍራን ሩዝ"]
    }
  },
  {
    id: "special-alsaada",
    category: "mandi",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "طبق الشيف الحصري",
      en: "Chef's Special",
      am: "የሼፉ ምርጥ ምርጫ"
    },
    name: {
      ar: "طبق السدة الخاص",
      en: "Special Alsaada",
      am: "አልሰዳህ ልዩ ምግብ"
    },
    description: {
      ar: "وليمة فاخرة تجمع تشكيلة مختارة من لحم المندي والكتف المشوي مع أرز السدة الخاص والمكسرات المحمصة ومرق اللحم العطري وصلصة السحاوق.",
      en: "Our grand feast platter featuring a celebratory selection of pit-cooked meats, seasoned rice, toasted pine nuts, rich broth, and fresh house chutneys.",
      am: "የተለያዩ ምርጥ የስጋ አይነቶችን፣ ልዩ የተዘጋጀ ሩዝ፣ የተቆሉ ፍሬዎችን እና መረቅን በአንድ ላይ የያዘ የክብር ድግስ ሰሃን።"
    },
    highlights: {
      ar: ["وليمة عائلية فاخرة", "تشكيلة لحوم مميزة", "مرق السدة المركز"],
      en: ["Grand Royal Platter", "Assorted Prime Cuts", "Rich Spiced Broth"],
      am: ["የቤተሰብ ትልቅ ሰሃን", "የተመረጡ ስጋዎች", "ልዩ መረቅ"]
    }
  },
  {
    id: "mandy-shoulder",
    category: "mandi",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "طراوة فائقة",
      en: "Fall-Off-The-Bone",
      am: "እጅግ ለስላሳ"
    },
    name: {
      ar: "كتف مندي مع الأرز",
      en: "Mandy Shoulder with Rice",
      am: "የማንዲ ትከሻ ከሩዝ ጋር"
    },
    description: {
      ar: "كتف ضأن كامل يطهى لساعات حتى يذوب اللحم عن العظم بنكهة التدخين الطبيعية، يقدم فوق تلة من أرز المندي الأصيل.",
      en: "Whole prime lamb shoulder slow-roasted until tender and juicy, served over a bed of smoky fragrant long-grain mandi rice.",
      am: "ሙሉ የበግ ትከሻ ስጋ አጥንቱ ድረስ ልስልስ ብሎ በጢስ መዓዛ የበሰለ፣ ከማንዲ ሩዝ ጋር የሚቀርብ ልዩ ምግብ።"
    },
    highlights: {
      ar: ["كتف ضأن كامل", "نكهة تدخين طبيعية", "حجم مثالي للمشاركة"],
      en: ["Whole Lamb Shoulder", "Smoky Pit Aroma", "Great for Sharing"],
      am: ["ሙሉ የበግ ትከሻ", "የጢስ መዓዛ", "ለጋራ መመገቢያ"]
    }
  },
  {
    id: "shawarma-sandwich",
    category: "shawarma",
    image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "مذاق الشارع المحبوب",
      en: "Street Food Favorite",
      am: "ተወዳጅ ሳንድዊች"
    },
    name: {
      ar: "ساندوتش شاورما",
      en: "Shawarma Sandwich",
      am: "የሻዋርማ ሳንድዊች"
    },
    description: {
      ar: "شرائح لحم أو دجاج طازجة مشوية على السيخ العمودي، ملفوفة في خبز الصاج الطازج مع صلصة الثومية اللذيذة ومخللات الخيار المقرمشة.",
      en: "Freshly carved spit-roasted marinated meat or chicken, wrapped in warm saj flatbread with velvety garlic toum and crisp pickles.",
      am: "በጥንቃቄ የተቀመመ እና የተጠበሰ ስጋ ወይም ዶሮ፣ ትኩስ ሳጅ ዳቦ ውስጥ በነጭ ሽንኩርት ክሬም እና ፒክልስ ተጠቅልሎ የሚቀርብ።"
    },
    highlights: {
      ar: ["شواء على السيخ", "خبز صاج طازج", "صلصة ثومية أصلية"],
      en: ["Spit-Roasted", "Fresh Saj Bread", "Authentic Garlic Toum"],
      am: ["በሲህ የተጠበሰ", "ትኩስ ሳጅ ዳቦ", "ልዩ የነጭ ሽንኩርት ክሬም"]
    }
  },
  {
    id: "shawarma-rolls",
    category: "shawarma",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "مقرمش ولذيذ",
      en: "Crispy Bites",
      am: "የተቆራረጠ ጥቅልል"
    },
    name: {
      ar: "رولات شاورما السدة",
      en: "Shawarma Rolls",
      am: "የሻዋርማ ጥቅልል"
    },
    description: {
      ar: "رولات شاورما صاج محمصة ومقطعة إلى قطع شهية، تقدم مع بطاطا مقلية متبلة وصوصات التغميس الشهية ومخلل اللفت.",
      en: "Toasted sliced shawarma rolls served bite-sized alongside seasoned golden fries, signature garlic dip, and pickled turnip.",
      am: "በመጥበሻ የተጠበሰ እና በጣፋጭ ቅርፅ የተቆረጠ የሻዋርማ ጥቅልል ከድንች ጥብስ እና መጥመቂያ ሶስ ጋር።"
    },
    highlights: {
      ar: ["قطع سهلة للمشاركة", "بطاطا مقرمشة", "صلصات تغميس مميزة"],
      en: ["Bite-Sized Slices", "Seasoned Fries", "Dipping Sauces"],
      am: ["ለመብላት ምቹ", "የድንች ጥብስ", "ጣፋጭ ሶስ"]
    }
  },
  {
    id: "fatira-honey-ginger",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "حلى تراثي دافئ",
      en: "Traditional Pastry",
      am: "ባህላዊ ፈጢራ"
    },
    name: {
      ar: "فطيرة بالعسل والزنجبيل",
      en: "Fatira with Honey & Ginger",
      am: "ፈጢራ በማር እና ዝንጅብል"
    },
    description: {
      ar: "فطيرة يمنية مورقة هشة مخبوزة على الصاج حتى تكتسب اللون الذهبي، مغطاة بسخاء بالعسل الطبيعي ورشة من بهار الزنجبيل الدافئ وحبة البركة.",
      en: "Flaky golden layered Yemeni flatbread fresh off the griddle, lavishly drizzled with pure amber honey, warm ground ginger, and nigella seeds.",
      am: "በቀጭኑ ተለጥጦ የተጋገረ እና በንብርብሮች የተዘጋጀ የየመን ፈጢራ፣ በንጹህ ማር እና በሞቀ የዝንጅብል ቅመም የተዋበ።"
    },
    highlights: {
      ar: ["طبقات مورقة ومقرمشة", "عسل طبيعي نقي", "دفء الزنجبيل"],
      en: ["Crisp Flaky Layers", "Pure Natural Honey", "Warming Ginger"],
      am: ["ቀጭን ንብርብሮች", "ንጹህ ማር", "የዝንጅብል መዓዛ"]
    }
  },
  {
    id: "cream-masoob",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "أيقونة الحلويات اليمنية",
      en: "Yemeni Icon",
      am: "የየመን ምርጥ ጣፋጭ"
    },
    name: {
      ar: "معصوب بالقشطة والعسل",
      en: "Cream Masoob",
      am: "መዕሱብ በክሬም እና ማር"
    },
    description: {
      ar: "المعصوب اليمني الكلاسيكي المحضر من الموز المهروس مع خبز البر الأسمر والسمن البلدي، تعلوه طبقة غنية من القشطة الفاخرة والعسل والمكسرات.",
      en: "The legendary Yemeni comfort dessert: whole-wheat bread mash with ripe bananas and clarified butter, layered with thick clotted cream, honey, and nuts.",
      am: "ከሙዝ፣ ከስንዴ ዳቦ እና ከቅቤ የተዘጋጀ ባህላዊ የየመን ጣፋጭ፣ በክሬም፣ በማር እና በተፈጩ ለውዞች ያሸበረቀ።"
    },
    highlights: {
      ar: ["موز طازج وخبز بر", "قشطة بلدي فاخرة", "عسل نقي وسمن"],
      en: ["Ripe Banana & Wheat", "Thick Clotted Cream", "Pure Honey & Ghee"],
      am: ["ትኩስ ሙዝ እና ስንዴ", "ወፍራም ክሬም", "ንጹህ ማር እና ቅቤ"]
    }
  },
  {
    id: "black-tea",
    category: "sweets",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
    badge: {
      ar: "شاي عدني مخدر",
      en: "Traditional Brew",
      am: "ባህላዊ የየመን ሻይ"
    },
    name: {
      ar: "شاي يمني أسود / شاي عدني",
      en: "Traditional Yemeni Black Tea",
      am: "የየመን ጥቁር ሻይ"
    },
    description: {
      ar: "شاي أسود معتق يغلى ببطء مع حبات الهيل الأخضر وعيدان القرفة والقرنفل وأوراق النعناع الطازجة، لختام مثالي لوجبة يمنية لا تُنسى.",
      en: "Steeped full-bodied black tea simmered with cracked green cardamom pods, cinnamon bark, cloves, and fresh mint sprigs.",
      am: "በጥቁር ሻይ ቅጠል፣ በኮረሪማ፣ ቀረፋ፣ ቅርንፉድ እና ትኩስ ናና ተፈልቶ የሚቀርብ ማራኪ ባህላዊ ሻይ።"
    },
    highlights: {
      ar: ["بهارات الهيل والقرفة", "نعناع طازج", "يقدم ساخناً بعد الوجبة"],
      en: ["Cardamom & Cinnamon", "Fresh Mint Leaves", "Aromatic Digestif"],
      am: ["ኮረሪማ እና ቀረፋ", "ትኩስ ናና", "ከምግብ በኋላ የሚጠጣ"]
    }
  }
];
