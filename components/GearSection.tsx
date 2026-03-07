'use client';

import { siteConfig } from '@/lib/content';

export default function GearSection() {
  // Duplikujemy 3x dla pełnej ciągłości
  const items = [...siteConfig.gear, ...siteConfig.gear, ...siteConfig.gear];

  return (
    <section id="gear" className="py-24 bg-nude-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <p className="text-center font-sans text-sm tracking-widest uppercase text-burgundy-300 mb-3">
          Sprzęt
        </p>
        <h2
          className="text-center text-burgundy-600"
          style={{
            fontFamily: 'Charm, cursive',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          Mój sprzęt
        </h2>
      </div>

      {/* Wrapper z fade po bokach */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-nude-100 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-nude-100 to-transparent pointer-events-none" />

        {/* Track — animowany czystym CSS */}
        <div className="flex gap-6 w-max animate-carousel hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group flex flex-col items-center gap-3 flex-shrink-0"
              style={{ width: '180px' }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-nude-50 border border-nude-200 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-contain p-5 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="font-sans text-sm text-center text-stone-500 group-hover:text-burgundy-500 transition-colors duration-300 px-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-stone-400 font-sans mt-8 tracking-wide">
        Najedź aby zatrzymać ✦
      </p>
    </section>
  );
}
