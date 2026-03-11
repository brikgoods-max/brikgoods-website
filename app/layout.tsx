import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminLayoutGuard from '@/components/AdminLayoutGuard';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'BRik Goods — Curated for the Modern Home',
    template: '%s | BRik Goods',
  },
  description:
    'Premium storage solutions for the modern home. Shoe boxes, kitchen organizers, home storage — thoughtfully designed, built to last. Wholesale inquiries welcome.',
  keywords: 'shoe box, shoe storage, plastic storage, home organization, wholesale, BRik Goods',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <AdminLayoutGuard>
            {children}
          </AdminLayoutGuard>
        </CartProvider>
      </body>
    </html>
  );
}
