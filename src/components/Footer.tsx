'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Logo } from '@/components/Logo';
import { MapPin, Phone, MessageCircle, Clock, Award, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="mb-4">
              <Logo size={60} showText={true} />
            </a>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
              {t.footer.aboutText}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{t.footer.womenOwnedNote}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">{t.nav.menu}</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">{t.nav.reviews}</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{t.contact.addressVal}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.brand.hoursDetail}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${t.brand.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-mono" dir="ltr">
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

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            {t.footer.rights} • Rwanda Street, Addis Ababa, Ethiopia
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
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
