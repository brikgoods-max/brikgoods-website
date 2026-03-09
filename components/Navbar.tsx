'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#FAF9F6] border-b border-[#e8e5de] transition-shadow duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[108px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="BRik Goods"
            width={300}
            height={92}
            className="h-[80px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav — centered in SMALL CAPS wide tracking */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`luxury-label transition-colors duration-200 ${
                  isActive
                    ? 'text-[#B8963E]'
                    : 'text-[#0A0A0A] hover:text-[#B8963E]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Inquiry + hamburger */}
        <div className="flex items-center gap-5">
          <Link
            href="/wholesale"
            className="hidden md:inline-block luxury-label text-[#0A0A0A] border-b border-[#B8963E] pb-px hover:text-[#B8963E] transition-colors"
          >
            Wholesale Inquiry
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1 text-[#0A0A0A]"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
        <div className="md:hidden border-t border-[#e8e5de] bg-[#FAF9F6] px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3.5 luxury-label text-[#0A0A0A] border-b border-[#e8e5de] hover:text-[#B8963E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/wholesale"
            onClick={() => setMobileOpen(false)}
            className="block mt-5 text-center btn-gold"
          >
            Wholesale Inquiry
          </Link>
        </div>
      )}
    </nav>
  );
}
