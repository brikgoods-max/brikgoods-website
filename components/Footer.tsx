import Link from 'next/link';
import Image from 'next/image';

const shopLinks = [
  { href: '/products', label: 'All Products' },
  { href: '/products?category=Shoe+Storage', label: 'Shoe Storage' },
  { href: '/products?category=Kitchen+%26+Pantry', label: 'Kitchen & Pantry' },
  { href: '/products?category=Home+Organization', label: 'Home Organization' },
  { href: '/products?category=Bathroom', label: 'Bathroom' },
  { href: '/products?category=Clothing+Storage', label: 'Clothing Storage' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] text-[#0A0A0A] mt-auto" style={{ borderTop: '2px solid #B8963E' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">

          {/* Brand story */}
          <div>
            <Image
              src="/images/logo.png"
              alt="BRik Goods"
              width={120}
              height={40}
              className="h-[34px] w-auto object-contain mb-6"
            />
            <p className="text-[#6b6560] text-sm leading-relaxed max-w-[260px] mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
              We believe every home deserves beautiful, functional storage. Designed for modern living — built to last.
            </p>
            <p className="luxury-label text-[#B8963E]">Wholesale inquiries welcome</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="luxury-label text-[#0A0A0A] mb-6">
              Shop
            </h3>
            <div className="space-y-3.5">
              {shopLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-[#6b6560] text-sm hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-[#e8e5de]">
                {companyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block text-[#6b6560] text-sm hover:text-[#0A0A0A] transition-colors duration-200 mt-3.5"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="luxury-label text-[#0A0A0A] mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-[#6b6560] text-sm">info@brikgoods.com</p>
              <p className="text-[#6b6560] text-sm leading-relaxed">
                For wholesale pricing and bulk orders, submit an inquiry through our wholesale page.
              </p>
              <Link
                href="/wholesale"
                className="inline-flex items-center gap-2 luxury-label text-[#B8963E] hover:text-[#9e7e2e] transition-colors mt-2"
              >
                Submit Wholesale Inquiry
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e8e5de] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#9e9890] text-xs tracking-wide">
            © {new Date().getFullYear()} BRik Goods. All rights reserved.
          </p>
          <p className="luxury-label text-[#c8c4bc]" style={{ letterSpacing: '0.18em' }}>
            Premium · Design · Quality
          </p>
        </div>
      </div>
    </footer>
  );
}
