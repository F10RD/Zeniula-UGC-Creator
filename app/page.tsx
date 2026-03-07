import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import GearSection from '@/components/GearSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zeniula | UGC Creator Portfolio - Beauty & Lifestyle Polska',
  description: 'Moje realizacje UGC: unboxing kosmetyki, recenzje produktów, TikTok Reels dla marek beauty i fashion. Skontaktuj się!',
  keywords: 'UGC portfolio Polska, UGC beauty creator, content creator fashion, unboxing Polska, TikTok UGC',
  // Canonical dla głównej strony
  alternates: {
    canonical: 'https://www.zeniula.pl',
  },
  openGraph: {
    title: 'Zeniula UGC Portfolio',
    description: 'Przykłady moich realizacji UGC dla marek beauty i lifestyle.',
    url: 'https://www.zeniula.pl',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-nude-50 font-sans">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <GearSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
