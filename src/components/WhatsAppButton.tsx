'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language];
  const [showTooltip, setShowTooltip] = useState(true);

  const greetings = {
    ar: "السلام عليكم ورحمة الله وبركاته، أود الاستفسار بخصوص مطعم السدة (شارع رواندا، أديس أبابا)",
    en: "Hello Al-Saddah Restaurant! I would like to inquire about your dishes and dining at Rwanda Street, Addis Ababa.",
    am: "ሰላም አል ሰዳህ ሬስቶራንት! ሩዋንዳ ጎዳና ስለሚገኘው ቅርንጫፍ እና ምግቦች መረጃ ማግኘት እፈልጋለሁ።",
  };

  const whatsappUrl = `https://wa.me/251977777747?text=${encodeURIComponent(greetings[language])}`;

  return (
    <div
      className={`fixed bottom-6 ${
        isRTL ? 'left-6' : 'right-6'
      } z-40 flex items-center gap-3 select-none`}
    >
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/95 text-white text-xs border border-amber-500/30 shadow-xl shadow-black/60 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-medium">{t.whatsappWidget.tooltip}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/60 pulse-whatsapp flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp (+251 977 777 747)"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="sr-only">WhatsApp Chat</span>
      </a>
    </div>
  );
};
