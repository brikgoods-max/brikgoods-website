import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Shoe Storage',
    count: '20+ Products',
    image: '/images/catalog/page-1.png',
    href: '/products?category=Shoe+Storage',
  },
  {
    name: 'Kitchen & Pantry',
    count: '18+ Products',
    image: '/images/catalog/page-9.png',
    href: '/products?category=Kitchen+%26+Pantry',
  },
  {
    name: 'Home Organization',
    count: '25+ Products',
    image: '/images/catalog/page-11.png',
    href: '/products?category=Home+Organization',
  },
  {
    name: 'Bathroom',
    count: '6+ Products',
    image: '/images/catalog/page-11.png',
    href: '/products?category=Bathroom',
  },
];

const stats = [
  { value: '79+', label: 'Products' },
  { value: '6', label: 'Categories' },
  { value: 'Global', label: 'Shipping' },
  { value: 'Wholesale', label: 'Available' },
];

const marqueeText = 'PREMIUM HOUSEHOLD SOLUTIONS · EST. 2025 · WHOLESALE AVAILABLE · SHIPS WORLDWIDE · CURATED FOR THE MODERN HOME · ';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO — SPLIT LAYOUT ──────────────────────────── */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Deep black with serif headline */}
        <div className="bg-[#0A0A0A] flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-24 relative overflow-hidden">
          {/* Gold vertical accent line */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#B8963E] opacity-30 hidden lg:block" />
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B8963E 0, #B8963E 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />

          <div className="relative z-10 max-w-lg">
            {/* Eyebrow */}
            <div className="fade-up flex items-center gap-3 mb-8">
              <span className="gold-line" />
              <span className="luxury-label text-[#B8963E]">BRik Goods</span>
            </div>

            {/* Main headline */}
            <h1
              className="fade-up fade-up-delay-1 luxury-heading text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}
            >
              Curated for<br />
              <em className="text-[#B8963E]">the Modern</em><br />
              Home.
            </h1>

            {/* Sub */}
            <p className="fade-up fade-up-delay-2 text-[#a09890] leading-relaxed mb-10 text-[1.0625rem]" style={{ fontFamily: 'var(--font-inter)' }}>
              Premium storage solutions that disappear beautifully into your space — clean lines, lasting materials, intentional design.
            </p>

            {/* CTAs */}
            <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4">
              <Link href="/products" className="btn-gold">
                View Collection
              </Link>
              <Link href="/wholesale" className="btn-outline">
                Wholesale
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Large lifestyle image */}
        <div className="relative min-h-[50vh] lg:min-h-0 overflow-hidden bg-[#1a1a1a]">
          <Image
            src="/images/products/page06_img14.png"
            alt="BRik Goods — Premium Storage"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ filter: 'brightness(0.88) saturate(0.95)' }}
          />
          {/* Elegant overlay with bottom text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </section>

      {/* ─── TAGLINE STRIP ─────────────────────────────────── */}
      <div className="bg-[#0A0A0A] border-y border-[#1e1e1e] overflow-hidden py-4">
        <div className="marquee-track">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="luxury-tagline text-[#B8963E] px-0">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ─── CATEGORY EDITORIAL GRID ──────────────────────── */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="luxury-label text-[#B8963E] block mb-3">Collections</span>
              <h2
                className="luxury-heading text-[#0A0A0A]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Shop by Category
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-2 luxury-label text-[#0A0A0A] hover:text-[#B8963E] transition-colors group"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[560px]">
            {/* Large card — left 2/3 */}
            <Link href={categories[0].href} className="cat-card relative col-span-1 md:col-span-2 overflow-hidden block min-h-[320px] md:min-h-0 group">
              <div className="cat-img absolute inset-0">
                <Image
                  src={categories[0].image}
                  alt={categories[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="cat-overlay absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.15) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="luxury-label text-[#B8963E] block mb-2">{categories[0].count}</span>
                <h3
                  className="luxury-heading text-white"
                  style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)' }}
                >
                  {categories[0].name}
                </h3>
                <p className="mt-3 luxury-label text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </p>
              </div>
            </Link>

            {/* Two stacked small cards — right 1/3 */}
            <div className="flex flex-col gap-4">
              {categories.slice(1, 3).map((cat) => (
                <Link key={cat.name} href={cat.href} className="cat-card relative flex-1 overflow-hidden block min-h-[240px] md:min-h-0 group">
                  <div className="cat-img absolute inset-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="cat-overlay absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)' }} />
                  <div className="absolute bottom-0 left-0 p-7">
                    <span className="luxury-label text-[#B8963E] block mb-1">{cat.count}</span>
                    <h3 className="luxury-heading text-white text-xl">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND MANIFESTO ──────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          {/* Decorative rule */}
          <div className="flex items-center gap-5 mb-10 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-[#B8963E] opacity-50" />
            <span className="luxury-label text-[#B8963E]">Our Philosophy</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#B8963E] opacity-50" />
          </div>

          <blockquote
            className="luxury-heading text-white mb-8 italic"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.25 }}
          >
            &ldquo;We believe every home deserves beautiful, functional storage.&rdquo;
          </blockquote>

          <p className="text-[#a09890] leading-relaxed text-[1.0625rem] mb-10 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            Good storage doesn&apos;t shout — it works quietly, blends beautifully, and makes your space feel more like itself. That&apos;s the BRik Goods standard.
          </p>

          {/* Decorative rule */}
          <div className="flex items-center gap-5 justify-center">
            <div className="h-px flex-1 max-w-[80px] bg-[#B8963E] opacity-50" />
            <span className="text-[#B8963E]" style={{ fontSize: '1.25rem' }}>✦</span>
            <div className="h-px flex-1 max-w-[80px] bg-[#B8963E] opacity-50" />
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────── */}
      <section className="bg-[#FAF9F6] py-20 border-y border-[#e8e5de]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e5de]">
            {stats.map((stat, i) => (
              <div key={stat.value} className="text-center py-10 px-6">
                <div
                  className="luxury-heading text-[#0A0A0A] mb-2"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  {stat.value}
                </div>
                <div className="luxury-label text-[#B8963E]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHOLESALE CTA ─────────────────────────────────── */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="border border-[#e8e5de] p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            style={{ background: 'rgba(10,10,10,0.97)' }}
          >
            {/* Left */}
            <div>
              <span className="luxury-label text-[#B8963E] block mb-4">For Retailers & Businesses</span>
              <h2
                className="luxury-heading text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
              >
                Buy at scale.<br />
                <em>Price accordingly.</em>
              </h2>
              <p className="text-[#a09890] leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
                We partner with retailers, interior designers, and businesses worldwide. Competitive bulk pricing, ready inventory, and a dedicated account manager every time.
              </p>
              <ul className="space-y-3">
                {['Bulk pricing from 50+ units', 'Ships to retailers worldwide', 'Full catalog for wholesale', 'Response within 1–2 business days'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#a09890] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="lg:border-l lg:border-[#2a2a2a] lg:pl-14">
              <p className="luxury-heading text-white text-xl mb-4">
                Ready to partner with BRik Goods?
              </p>
              <p className="text-[#a09890] text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
                Fill out our wholesale inquiry form. Tell us what you need, your estimated quantities, and we&apos;ll respond with pricing.
              </p>
              <Link href="/wholesale" className="btn-gold block text-center">
                Submit Inquiry
              </Link>
              <p className="text-[#5a5a5a] text-xs text-center mt-4 tracking-wide" style={{ fontFamily: 'var(--font-inter)' }}>
                Typically responds within 1–2 business days
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
