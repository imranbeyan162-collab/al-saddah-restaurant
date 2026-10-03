'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Logo } from '@/components/Logo';
import { MapPin, Phone, MessageCircle, Clock, ArrowUp, Sparkles, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="mb-4">
              <Logo size={56} showText={true} />
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">{t.nav.menu}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t.nav.reviews}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                <span>{t.contact.addressVal}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{t.brand.hoursDetail}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${t.brand.phone.replace(/\s+/g, '')}`} className="hover:text-white font-mono" dir="ltr">
                  {t.brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={t.brand.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-mono"
                  dir="ltr"
                >
                  {t.brand.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Agency-Grade Showcase Callout: Encourages other restaurants to DM for custom builds */}
        <div className="mb-10 p-5 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#C5A880] shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {t.footer.agencyTagline}
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-400">
                {t.footer.agencyCta}
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/251977777747?text=Hello!%20I%20saw%20the%20Al-Saddah%20Restaurant%20website%20and%20I%20would%20like%20to%20inquire%20about%20building%20a%20similar%20custom%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5A880] hover:bg-[#D4B890] text-neutral-950 font-bold text-xs transition-all shrink-0 active:scale-95 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'تواصل معنا الآن' : language === 'am' ? 'አሁን ያናግሩን' : 'DM Us / Inquire Now'}</span>
          </a>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            {t.footer.rights} • Rwanda Street, Addis Ababa, Ethiopia
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
