import { siteConfig } from '@/lib/content';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-nude-50 overflow-hidden"
    >
      {/* Piwonia — prawy dolny róg */}
      <div
        className="absolute -bottom-8 -right-8 w-80 h-80 pointer-events-none select-none"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 70%, black 30%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse at 70% 70%, black 30%, transparent 70%)',
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

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-center font-sans text-sm tracking-widest uppercase text-burgundy-300 mb-3">
          O mnie
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-burgundy-600 mb-16">
          Kim jestem?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* KOLUMNA 1 — video wycentrowane */}
          <div className="flex items-center justify-center">
            <div
              className="w-full rounded-2xl overflow-hidden shadow-lg border border-nude-300"
              style={{ aspectRatio: '9/16' }}
            >
              {siteConfig.aboutVideoUrl ? (
                <iframe
                  src={siteConfig.aboutVideoUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-nude-200 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 rounded-full bg-burgundy-500 flex items-center justify-center mx-auto shadow-lg">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-stone-500 text-sm font-sans">
                      Prezentacja wideo
                    </p>
                    <p className="text-stone-400 text-xs font-sans">
                      — wkrótce —
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KOLUMNA 2 — opis + statystyki + usługi + tagi */}
          <div className="flex flex-col justify-center gap-6">
            <p className="font-sans text-base leading-relaxed text-stone-600">
              {siteConfig.about}
            </p>

            <div className="grid grid-cols-3 gap-3 py-4 border-y border-nude-200">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl text-burgundy-500 font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-400 font-sans mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-sans text-sm font-medium text-stone-500 uppercase tracking-widest">
                Co oferuję
              </p>
              {siteConfig.services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <span className="text-burgundy-400">✦</span>
                  <span className="font-sans text-sm text-stone-600">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {siteConfig.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rose-soft text-burgundy-500 rounded-full text-sm font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* KOLUMNA 3 — zdjęcie na pełną wysokość */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[500px]">
            <img
              src={siteConfig.profileImage}
              alt={siteConfig.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-burgundy-500/20 rounded-2xl" />
            {siteConfig.availability && (
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full flex items-center gap-2 shadow">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-sans text-burgundy-600 font-medium">
                  Dostępna do współpracy
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
