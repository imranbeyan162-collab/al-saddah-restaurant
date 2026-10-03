'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.658700201944!2d38.7750!3d9.0016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aaf6236b2f%3A0x6b4c107297eef9b4!2sRwanda%20St%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Al-Saddah+Restaurant+Rwanda+Street+Addis+Ababa";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#111215] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-neutral-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#C5A880] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#C5A880] mb-1">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-base font-semibold text-white mb-1">
                    {t.contact.addressVal}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono">
                    {t.contact.plusCodeVal}
                  </p>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A880] hover:text-white mt-3"
                  >
                    <span>{t.contact.btnMap}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#C5A880] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#C5A880] mb-1">
                    {t.contact.phoneTitle}
                  </h3>
                  <p className="text-lg font-bold text-white tracking-wide" dir="ltr">
                    {t.brand.phone}
                  </p>
                  <p className="text-xs text-neutral-400 mb-3" dir="ltr">
                    {t.brand.phoneFormatted}
                  </p>
                  <a
                    href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5A880] hover:bg-[#D4B890] text-neutral-950 font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{t.contact.btnCall}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-1">
                    {t.contact.whatsappTitle}
                  </h3>
                  <p className="text-lg font-bold text-white tracking-wide mb-3" dir="ltr">
                    {t.brand.whatsapp}
                  </p>
                  <a
                    href={t.brand.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-950"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.contact.btnWhatsApp}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#C5A880] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#C5A880] mb-1">
                    {t.contact.hoursTitle}
                  </h3>
                  <p className="text-base font-semibold text-white">
                    {t.brand.hoursDetail}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {t.contact.servicesVal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <iframe
                title="Al-Saddah Restaurant Google Map Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.02) saturate(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-neutral-950/95 backdrop-blur-md border border-white/20 text-xs shadow-xl">
                <div className="font-bold text-[#EADDC9] mb-0.5">
                  {language === 'ar' ? 'مطعم السدة - أديس أبابا' : language === 'am' ? 'አል ሰዳህ ሬስቶራንት - አዲስ አበባ' : 'Al-Saddah Restaurant'}
                </div>
                <div className="text-neutral-300 text-[11px] mb-2">
                  Rwanda Street, Addis Ababa (XQPF+7J)
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C5A880] hover:underline"
                >
                  <span>{language === 'ar' ? 'الاتجاهات عبر GPS' : language === 'am' ? 'አቅጣጫዎች' : 'Get Driving Directions'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>{t.contact.notice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
