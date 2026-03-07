'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/content';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-nude-50 overflow-hidden"
    >
      {/* Piwonia — lewy górny róg */}
      <div
        className="absolute -top-8 -left-8 w-72 h-72 pointer-events-none select-none"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse at 30% 30%, black 30%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse at 30% 30%, black 30%, transparent 70%)',
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

      {/* Piwonia — prawy dolny róg */}
      <div
        className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none select-none"
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
          className="w-full h-full object-cover opacity-75"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-center font-sans text-sm tracking-widest uppercase text-burgundy-300 mb-3">
          Kontakt
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-burgundy-600 mb-4">
          Działamy? 🌸
        </h2>
        <p className="text-center text-stone-500 font-sans mb-12">
          Chętnie porozmawiam o współpracy. Napisz do mnie!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-sans text-stone-600 mb-1.5">
                Imię
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Twoje imię"
                className="w-full px-4 py-3 rounded-xl border border-nude-300 bg-white text-stone-700 font-sans placeholder-stone-300 focus:outline-none focus:border-burgundy-300 focus:ring-2 focus:ring-burgundy-100 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-sans text-stone-600 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="twoj@email.com"
                className="w-full px-4 py-3 rounded-xl border border-nude-300 bg-white text-stone-700 font-sans placeholder-stone-300 focus:outline-none focus:border-burgundy-300 focus:ring-2 focus:ring-burgundy-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-sans text-stone-600 mb-1.5">
              Wiadomość
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Opowiedz mi o swojej marce i czego szukasz..."
              className="w-full px-4 py-3 rounded-xl border border-nude-300 bg-white text-stone-700 font-sans placeholder-stone-300 focus:outline-none focus:border-burgundy-300 focus:ring-2 focus:ring-burgundy-100 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-burgundy-500 hover:bg-burgundy-600 text-white font-sans font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            {sent ? '✓ Wysłano! Odezwę się wkrótce 🌸' : 'Wyślij wiadomość 💌'}
          </button>
        </form>
      </div>
    </section>
  );
}
