import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zeniula.pl'),
  
  // ✅ BAZOWE METADANE (już miałeś)
  title: {
    default: 'Zeniula UGC Creator - Beauty, lifestyle, fashion',
    template: '%s | Zeniula UGC Creator' // dla podstron
  },
  description: 'Tworzę treści UGC, które sprzedają. Beauty, lifestyle, fashion.',
  keywords: 'UGC creator Polska, content creator beauty, UGC fashion Polska, unboxing kosmetyki, recenzje produktów',
  
  // ✅ FAVICON + PWA (już miałeś - OK!)
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  
  // ✅ HREFLANG (już miałeś - OK!)
  alternates: {
    languages: {
      'pl-PL': 'https://www.zeniula.pl',
    },
  },
  
  // ✅ OPEN GRAPH - ZMIENIONE TYTUŁY NA TWOJE ŻYCZENIE [web:128]
  openGraph: {
    title: 'Zeniula UGC Creator - Beauty, lifestyle, fashion',
    description: 'Tworzę treści UGC, które sprzedają. Beauty, lifestyle, fashion.',
    url: 'https://www.zeniula.pl',
    siteName: 'Zeniula UGC Creator',
    images: [
      {
        url: '/og-image.jpg', // ← MUSI BYĆ W public/
        width: 1200,
        height: 630,
        alt: 'Zeniula UGC Creator - Beauty Lifestyle Fashion Polska',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  
  // ✅ TWITTER - ZMIENIONE TYTUŁY [web:130]
  twitter: {
    card: 'summary_large_image',
    title: 'Zeniula UGC Creator - Beauty, lifestyle, fashion',
    description: 'Tworzę treści UGC, które sprzedają. Beauty, lifestyle, fashion.',
    images: ['/og-image.jpg'],
  },
  
  // ✅ GOOGLE VERIFY (już miałeś)
  verification: {
    google: 'google-site-verification=[TU_WKLEJ_PO_GSC]',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zeniula",
    "jobTitle": "UGC Content Creator",
    "url": "https://www.zeniula.pl",
    "sameAs": [
      "https://tiktok.com/@zeniula",
      "https://instagram.com/zeeniula"
    ],
    "description": "Tworzę autentyczne treści UGC dla marek beauty, lifestyle i fashion w Polsce. Unboxing, recenzje, storytelling TikTok/Instagram.",
    "addressCountry": "PL",
    "areaServed": "Polska"
  };

  return (
    <html lang="pl">
      <body className={inter.className}>
        {/* Schema.org Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
