import { siteConfig } from '@/lib/content';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Tło */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.heroBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-nude-50/20 via-nude-50/60 to-nude-50/95" />

      {/* Piwonia prawy górny róg */}
      <div
        className="absolute -top-6 -right-6 w-48 h-48 md:w-72 md:h-72 pointer-events-none select-none"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 30%, black 30%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse at 70% 30%, black 30%, transparent 70%)',
        }}
      >
        <img
          src="/peony.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      {/* Treść */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-16">
        {/* Mobile: wycentrowane | Desktop: wyrównane do prawej */}
        <div className="flex flex-col items-center md:items-end">
          {/* Grafika tekstowa — na mobile pełna szerokość, na desktop ograniczona */}
          <img
            src="/hero-text.png"
            alt="Zeniula — UGC content creator"
            className="
              w-full max-w-xs        
              sm:max-w-sm            
              md:max-w-xl            
              mb-6 md:mb-8
            "
            draggable={false}
          />

          {/* Przyciski — na mobile wycentrowane i pełna szerokość, na desktop inline */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-end">
            <a
              href="#contact"
              className="px-8 py-4 bg-burgundy-500 hover:bg-burgundy-600 text-white font-sans font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              {siteConfig.heroCTAPrimary}
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-burgundy-500 text-burgundy-500 hover:bg-burgundy-50 font-sans font-medium rounded-full transition-all duration-300 text-center"
            >
              {siteConfig.heroCTASecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
        <span className="text-xs tracking-widest uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-stone-300 animate-pulse" />
      </div>
    </section>
  );
}
