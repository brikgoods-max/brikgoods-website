'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="BRik Goods"
            width={130}
            height={40}
            className="h-[40px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.6875rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-[#2E6B73]'
                    : 'text-[#1A1A1A] hover:text-[#2E6B73]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Cart + hamburger */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-[#1A1A1A] hover:text-[#2E6B73] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#2E6B73] text-white rounded-full w-[18px] h-[18px] text-[10px] font-bold flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1 text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              {mobileOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-semibold tracking-[0.08em] uppercase text-[#1A1A1A] border-b border-gray-50 hover:text-[#2E6B73] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
