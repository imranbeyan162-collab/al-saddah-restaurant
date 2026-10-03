import React from 'react';
import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { MenuShowcase } from '@/components/MenuShowcase';
import { AboutSection } from '@/components/AboutSection';
import { Gallery } from '@/components/Gallery';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-amber-400 selection:text-neutral-950">
      {/* Sticky Glassmorphic Header with Language Switcher */}
      <Header />

      {/* Hero Slider with 4s auto-advance and 3rd photo first shuffle order */}
      <HeroSlider />

      {/* Featured Dishes Curated Showcase (Informational, No Cart) */}
      <MenuShowcase />

      {/* About Al-Saddah: Authentic Yemeni Culinary Heritage, Royal Hospitality, Multi-Floor Experience */}
      <AboutSection />

      {/* Interactive Photo Gallery with Lightbox */}
      <Gallery />

      {/* Verified Google Reviews & Testimonials (3.8? / 782 Reviews) */}
      <ReviewsSection />

      {/* Location, Rwanda Street Google Map & Direct Contact */}
      <ContactSection />

      {/* Brand Footer */}
      <Footer />

      {/* Fixed WhatsApp Action Widget with Friendly Greeting */}
      <WhatsAppButton />
    </main>
  );
}
