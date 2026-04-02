// app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalyticsScript from '@/components/GoogleAnalytics';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Potato Traveler - Photography Portfolio',
  description: 'Street, landscape, and portrait photography by German Rivera De La Torre',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <Navigation />
        {children}
        <GoogleAnalyticsScript gaId="G-NWBMVJZW8N" />
        <Footer />
      </body>
    </html>
  );
}