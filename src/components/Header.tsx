'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { content } from '@/data/translations';
import { Logo } from '@/components/Logo';
import { Phone, Globe, Menu, X, ChevronDown, MapPin, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = content[language];

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'ar', label: 'العربية', native: 'Arabic' },
    { code: 'en', label: 'English', native: 'English' },
    { code: 'am', label: 'አማርኛ', native: 'Amharic' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for phone & hours */}
      <div className="bg-neutral-950 text-neutral-300 text-xs border-b border-amber-900/20 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.brand.locationName}</span>
              <span className="sm:hidden">Rwanda St. Addis</span>
            </span>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              {t.brand.hours}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-neutral-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span dir="ltr">{t.brand.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-amber-500/20 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/85 via-black/60 to-transparent py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group">
            <div className="flex items-center gap-3">
              <Logo size={46} showText={false} />
              <div className="flex flex-col text-start">
                <span className="text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  {language === 'ar' ? 'مطعم السدة' : language === 'am' ? 'አል ሰዳህ ሬስቶራንት' : 'AL-SADDAH'}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-amber-400/90 uppercase">
                  {t.brand.tagline}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-200 hover:text-amber-400 transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action: Language Switcher & Call Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher Button & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-neutral-900/80 border border-amber-500/30 text-neutral-200 hover:text-amber-300 hover:border-amber-400/70 transition-all text-xs font-medium"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold">{currentLangObj.label}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {langDropdownOpen && (
                <div
                  className={`absolute mt-2 py-1.5 w-36 bg-neutral-950 border border-amber-500/30 rounded-xl shadow-xl shadow-black/80 z-50 ${
                    isRTL ? 'left-0' : 'right-0'
                  }`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-start px-3 py-2 text-xs flex items-center justify-between hover:bg-amber-950/40 transition-colors ${
                        language === lang.code
                          ? 'text-amber-400 font-bold bg-amber-500/10'
                          : 'text-neutral-300'
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[10px] text-neutral-500 uppercase">{lang.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Call Button (Desktop) */}
            <a
              href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-xs hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-900/30 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callUs}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-neutral-900/90 border border-amber-500/30 text-amber-400 hover:bg-neutral-800 transition-colors"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950/98 border-b border-amber-500/30 px-6 py-6 transition-all duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-800/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Selector Row */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  Language:
                </span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${
                        language === lang.code
                          ? 'bg-amber-500 text-neutral-950'
                          : 'bg-neutral-800 text-neutral-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Call CTA */}
              <a
                href={`tel:${t.brand.phone.replace(/\s+/g, '')}`}
                className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.callUs}: {t.brand.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
