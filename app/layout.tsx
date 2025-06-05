import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://terrapurun.com'),
  title: {
    default: 'terrapurun - Sustainable Peatland Conservation Products',
    template: '%s | terrapurun'
  },
  description: 'Eco-friendly purun products supporting peatland conservation and local communities. Shop sustainable alternatives to plastic plant containers.',
  keywords: ['peatland conservation', 'sustainable products', 'eco-friendly', 'purun crafts', 'biodegradable planters', 'environmental conservation', 'community empowerment'],
  authors: [{ name: 'terrapurun Team' }],
  creator: 'terrapurun',
  publisher: 'terrapurun',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://terrapurun.com',
    siteName: 'terrapurun',
    title: 'terrapurun - Sustainable Peatland Conservation Products',
    description: 'Eco-friendly purun products supporting peatland conservation and local communities. Shop sustainable alternatives to plastic plant containers.',
    images: [
      {
        url: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg',
        width: 1200,
        height: 630,
        alt: 'terrapurun - Sustainable Peatland Conservation Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'terrapurun - Sustainable Peatland Conservation Products',
    description: 'Eco-friendly purun products supporting peatland conservation and local communities. Shop sustainable alternatives to plastic plant containers.',
    images: ['https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg'],
    creator: '@terrapurun',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://terrapurun.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}