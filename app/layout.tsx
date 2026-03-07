import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zeniula | UGC Creator Polska - Beauty Lifestyle Fashion',
  description: 'Autentyczne treści UGC dla marek beauty, lifestyle, fashion. Unboxing, recenzje, TikTok/Instagram Reels. Polska UGC Creator.',
  keywords: 'UGC creator Polska, content creator beauty, UGC fashion Polska, unboxing kosmetyki, recenzje produktów',
  metadataBase: new URL('https://www.zeniula.pl'),
  // Dodane: Hreflang dla Polski
  alternates: {
    languages: {
      'pl-PL': 'https://www.zeniula.pl',
    },
  },
  openGraph: {
    title: 'Zeniula · UGC Creator Polska',
    description: 'Tworzę treści UGC, które sprzedają. Beauty, lifestyle, fashion. Polska.',
    url: 'https://www.zeniula.pl',
    siteName: 'Zeniula UGC Creator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zeniula UGC Creator - Beauty Lifestyle Fashion Polska',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeniula · UGC Creator Polska',
    description: 'Autentyczne treści UGC dla marek. Beauty & lifestyle.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification=[TU_WKLEJ_PO_GSC]',  // Później!
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
