export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  quote: {
    ar: string;
    en: string;
    am: string;
  };
  highlight: {
    ar: string;
    en: string;
    am: string;
  };
}

export const customerReviews: Review[] = [
  {
    id: "r1",
    name: "Ahmed Al-Sharabi",
    rating: 5,
    date: "Google Review • 2 weeks ago",
    quote: {
      ar: "أفضل مندي لحم تذوقته في أديس أبابا بلا منازع! اللحم طري جداً يذوب بالفم والأرز مطبوخ بنكهة البهارات اليمنية الأصلية. المطعم راقٍ ونظيف للغاية والموظفون ودودون.",
      en: "Hands down the best lamb mandi in Addis Ababa! The meat is fall-off-the-bone tender and the saffron rice is seasoned with authentic Yemeni spices. Spotlessly clean and welcoming staff.",
      am: "በአዲስ አበባ ውስጥ ከቀመስኳቸው የበግ ማንዲ ሁሉ ምርጡ ነው! ስጋው እጅግ ልስልስ ያለ እና ሩዙ በልዩ የየመን ቅመም የተቀመመ ነው። ሬስቶራንቱ እጅግ ንጹህ እና ሰራተኞቹ ተወዳጅ ናቸው።"
    },
    highlight: {
      ar: "مندي لحم استثنائي",
      en: "Exceptional Lamb Mandi",
      am: "ምርጥ የበግ ማንዲ"
    }
  },
  {
    id: "r2",
    name: "Dr. Selamawit T.",
    rating: 5,
    date: "Google Review • 1 month ago",
    quote: {
      ar: "مكان رائع للعائلات! صعدنا للطابق العلوي والجلسات مريحة وواسعة وفيها خصوصية ممتازة. أحببنا الزربيان والمعصوب بالقشطة، وفخورون بأنه مشروع تقوده نساء متميزات.",
      en: "Wonderful place for families! We sat on the upper floor which offers generous space and great privacy. Loved the Zurbian and cream Masoob. Proud to support a women-led business!",
      am: "ለቤተሰብ በጣም ተመራጭ ቦታ ነው! ፎቅ ላይ ሰፊ እና የግል ምቾት ያለው መቀመጫ አለ። ዙርቢያኑን እና መዕሱቡን በጣም ወደድነው። በሴቶች የሚመራ በመሆኑም ኩራት ይሰማናል።"
    },
    highlight: {
      ar: "أجواء عائلية مريحة",
      en: "Great Family Atmosphere",
      am: "ምቹ የቤተሰብ ድባብ"
    }
  },
  {
    id: "r3",
    name: "Marcus Vance",
    rating: 4,
    date: "Google Review • 3 weeks ago",
    quote: {
      ar: "خدمة سريعة في شارع رواندا. جربت شاورما الدجاج ورولات الشاورما وكانت مقرمشة ولذيذة، والصلصة الثومية متقنة. الشاي العدني في ختام الوجبة كان مميزاً جداً.",
      en: "Fast service right on Rwanda Street. Tried the chicken shawarma and shawarma rolls—crisp, flavorful, with great garlic sauce. The Adeni tea at the end was the cherry on top.",
      am: "በሩዋንዳ ጎዳና ላይ ፈጣን መስተንግዶ። የዶሮ ሻዋርማውን እና ጥቅልሉን ሞክሬዋለሁ፤ እጅግ ጣፋጭ እና ጥርት ያለ ነጭ ሽንኩርት ሶስ አለው። ከምግብ በኋላ የሚሰጠው የየመን ሻይም ድንቅ ነው።"
    },
    highlight: {
      ar: "شاورما ممتازة وشاي عدني",
      en: "Crispy Shawarma & Tea",
      am: "ጣፋጭ ሻዋርማ እና ሻይ"
    }
  },
  {
    id: "r4",
    name: "Yohannes B.",
    rating: 4,
    date: "Google Review • 2 months ago",
    quote: {
      ar: "مطعم السدة يقدم تجربة أصيلة ومستوى نظافة عالي. طبق السدة الخاص كان كافياً لمجموعتنا وكان اللحم رطباً وغنياً بالنكهة. يفتح حتى وقت متأخر وهو ميزة كبيرة.",
      en: "Al-Saddah delivers authentic taste and high standards of cleanliness. The Special Alsaada platter was generous and the meat was rich and tender. Open till midnight which is super convenient.",
      am: "አል ሰዳህ እውነተኛ ጣዕም እና ከፍተኛ ንጽህና ያለው ሬስቶራንት ነው። የአልሰዳህ ልዩ ትልቅ ምግብ ለሁላችንም በቂ እና ጣፋጭ ነበር። እስከ እኩለ ሌሊት ክፍት መሆኑም ትልቅ ምቾት ነው።"
    },
    highlight: {
      ar: "أطباق وفيرة ونكهة أصيلة",
      en: "Generous Portions & Taste",
      am: "ጥሩ መጠን እና ምርጥ ጣዕም"
    }
  }
];
