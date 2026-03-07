import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import GearSection from '@/components/GearSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
