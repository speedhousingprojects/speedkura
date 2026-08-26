import Script from 'next/script';
import type { Metadata } from 'next';
import { Figtree, Playfair_Display, Gloock } from 'next/font/google';
import './globals.css';

/* ============================================================
   Font Configuration — Kura Homes Brand Identity
   ============================================================
   • Gumani (Playfair Display / Gloock fallback): Bold, elegant
     serif for headlines & titles.
   • Figtree: Clean contemporary sans-serif for UI, subheadlines,
     and body text (Light, Regular, Medium, Semi-bold, Bold).
   ============================================================ */

const gloock = Gloock({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gloock',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-gumani', // maps to font-gumani utility class
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

/* ============================================================
   Metadata
   ============================================================ */
export const metadata: Metadata = {
  title: 'CODENAME HI FIVE | 2 BHK & Duplex Premium Homes | ORR Exit-5, Bowrampet, Hyderabad | Kura Homes',
  description:
    'Ready-to-move 2 BHK & Duplex apartments at ORR Exit-5, Bowrampet. Rate ₹4,999/sq.ft. 5.3 acres, 70% open space, 25,000 sq.ft clubhouse, 40+ amenities. Starting ₹59 Lakhs. HMDA & TG-RERA approved. By Kura Homes.',
  keywords: [
    'CODENAME HI FIVE', 'Kura Homes', 'Bowrampet apartments', 'ORR Exit 5',
    'Gandimaisamma', 'Hyderabad', '2 BHK', 'Duplex', 'ready to move', 'HMDA approved',
  ],
  openGraph: {
    title: 'CODENAME HI FIVE | Premium 2 BHK & Duplex Homes | Kura Homes',
    description: 'Ready-to-move gated community at ORR Exit-5, Gandimaisamma. Starting ₹59L at ₹4,999/sq.ft.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CODENAME HI FIVE',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
};

/* ============================================================
   Root Layout
   ============================================================ */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${gloock.variable} ${figtree.variable}`}
    >
      <body className="font-figtree text-noir bg-alabaster antialiased">
        {children}
      </body>
    </html>
  );
}
