import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zeniula · UGC Creator',
  description:
    'Tworzę treści UGC, które zatrzymają uwagę i sprzedają produkty. Skupiam się na naturalnym storytellingu dla marek z branży beauty, lifestyle i fashion.',
  metadataBase: new URL('https://zeniula.pl'),
  openGraph: {
    title: 'Zeniula · UGC Creator',
    description:
      'Tworzę treści UGC, które zatrzymają uwagę i sprzedają produkty.',
    url: 'https://zeniula.pl',
    siteName: 'Zeniula UGC Creator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zeniula — UGC Creator',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeniula · UGC Creator',
    description:
      'Tworzę treści UGC, które zatrzymają uwagę i sprzedają produkty.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
