import Link from 'next/link';
import Image from 'next/image';

const shopLinks = [
  { href: '/products', label: 'All Products' },
  { href: '/products?category=Shoe+Storage', label: 'Shoe Storage' },
  { href: '/products?category=Kitchen+%26+Pantry', label: 'Kitchen & Pantry' },
  { href: '/products?category=Home+Organization', label: 'Home Organization' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      {/* Teal accent line */}
      <div className="h-[3px] bg-[#2E6B73]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="BRik Goods"
              width={120}
              height={40}
              className="h-[38px] w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Premium storage and organization products designed for modern living.
            </p>
            <p className="text-gray-600 text-xs mt-5 tracking-[0.08em] uppercase">Wholesale inquiries welcome</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[0.625rem] font-bold tracking-[0.15em] uppercase text-[#2E6B73] mb-5">
              Navigation
            </h3>
            <div className="space-y-3">
              {shopLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
              {companyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.625rem] font-bold tracking-[0.15em] uppercase text-[#2E6B73] mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">info@brikgoods.com</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                For wholesale pricing and bulk orders, submit an inquiry through our wholesale page.
              </p>
              <Link
                href="/wholesale"
                className="inline-block mt-2 text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-[#2E6B73] hover:text-[#3a8a94] transition-colors"
              >
                Wholesale Inquiry →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs tracking-wide">
            © {new Date().getFullYear()} BRik Goods. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-[0.06em] uppercase">
            Quality · Design · Value
          </p>
        </div>
      </div>
    </footer>
  );
}
