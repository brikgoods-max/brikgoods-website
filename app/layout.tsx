import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'BRik Goods — Organize with Intention',
    template: '%s | BRik Goods',
  },
  description:
    'Premium storage solutions for the modern home. Shoe boxes, kitchen organizers, home storage — thoughtfully designed, built to last. Wholesale inquiries welcome.',
  keywords: 'shoe box, shoe storage, plastic storage, home organization, wholesale, BRik Goods',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
