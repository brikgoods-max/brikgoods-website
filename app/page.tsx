import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Shoe Storage',
    count: '20+ products',
    image: '/images/catalog/page-1.png',
    href: '/products?category=Shoe+Storage',
    span: 'large',
  },
  {
    name: 'Kitchen & Pantry',
    count: '15+ products',
    image: '/images/catalog/page-9.png',
    href: '/products?category=Kitchen+%26+Pantry',
    span: 'small',
  },
  {
    name: 'Home Organization',
    count: '25+ products',
    image: '/images/catalog/page-11.png',
    href: '/products?category=Home+Organization',
    span: 'small',
  },
];

const stats = [
  { value: '69+', label: 'Products' },
  { value: '10+', label: 'Categories' },
  { value: 'Wholesale', label: 'Available' },
  { value: 'Fast', label: 'Shipping' },
];

const reasons = [
  {
    number: '01',
    title: 'Premium Materials',
    body: 'BPA-free, crystal-clear plastic built to withstand daily use without yellowing or warping over time.',
  },
  {
    number: '02',
    title: 'Thoughtful Design',
    body: 'Stackable, foldable, and space-efficient — every product is engineered to work with your space, not against it.',
  },
  {
    number: '03',
    title: 'Wholesale Ready',
    body: 'Competitive bulk pricing for retailers, designers, and businesses of every size. We ship globally.',
  },
  {
    number: '04',
    title: 'Wide Selection',
    body: 'From drop-front shoe boxes to refrigerator bins, over 69 products covering every corner of your home.',
  },
];

const marqueeText = 'FREE SHIPPING ON ORDERS OVER $100 · WHOLESALE PRICING AVAILABLE · 69+ PRODUCTS IN CATALOG · QUALITY GUARANTEED · SHIPS WORLDWIDE · ';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#1A1A1A] flex items-center overflow-hidden">
        {/* Geometric teal accent */}
        <div className="absolute right-0 top-0 w-[45vw] h-full opacity-[0.07] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #2E6B73 0%, transparent 65%)',
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          />
        </div>
        <div className="absolute right-[8vw] top-[20%] w-[1px] h-[60vh] bg-[#2E6B73] opacity-20 hidden lg:block" />
        <div className="absolute right-[12vw] top-[30%] w-[1px] h-[40vh] bg-[#2E6B73] opacity-10 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="fade-up mb-8 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#2E6B73]" />
              <span className="text-[#2E6B73] text-[0.625rem] font-bold tracking-[0.2em] uppercase">
                Premium Storage Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-up fade-up-delay-1 text-white font-black leading-[0.95] tracking-[-0.03em] mb-8"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
              Organize<br />
              <span className="text-[#2E6B73]">with</span><br />
              Intention.
            </h1>

            {/* Subheadline */}
            <p className="fade-up fade-up-delay-2 text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              Premium storage solutions for the modern home. Clean lines, durable materials, designs that last.
            </p>

            {/* CTAs */}
            <div className="fade-up fade-up-delay-3 flex flex-wrap gap-4">
              <Link href="/products" className="btn-teal">
                Shop Collection
              </Link>
              <Link href="/wholesale" className="btn-outline">
                Wholesale Inquiries
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </section>

      {/* ─── MARQUEE STRIP ─────────────────────────────────────────── */}
      <div className="bg-[#111] border-y border-gray-800 overflow-hidden py-3">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[#2E6B73] text-[0.625rem] font-bold tracking-[0.18em] uppercase px-0">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ─── CATEGORY SHOWCASE ─────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-3">Collections</p>
            <h2 className="text-[#1A1A1A] font-black tracking-[-0.03em] leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Shop by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-[#1A1A1A] hover:text-[#2E6B73] transition-colors group"
          >
            View All
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-auto md:h-[520px]">
          {/* Large card — left 2/3 */}
          <Link href={categories[0].href} className="cat-card relative col-span-1 md:col-span-2 rounded-sm overflow-hidden block min-h-[300px] md:min-h-0">
            <div className="cat-img absolute inset-0">
              <Image
                src={categories[0].image}
                alt={categories[0].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="cat-overlay absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.80) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-[#2E6B73] text-[0.625rem] font-bold tracking-[0.15em] uppercase mb-2">{categories[0].count}</p>
              <h3 className="text-white font-black tracking-[-0.02em] leading-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                {categories[0].name}
              </h3>
              <p className="mt-3 text-gray-300 text-sm tracking-[0.08em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Shop now →
              </p>
            </div>
          </Link>

          {/* Two stacked small cards — right 1/3 */}
          <div className="flex flex-col gap-3">
            {categories.slice(1).map((cat) => (
              <Link key={cat.name} href={cat.href} className="cat-card relative flex-1 rounded-sm overflow-hidden block min-h-[220px] md:min-h-0">
                <div className="cat-img absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="cat-overlay absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.80) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[#2E6B73] text-[0.5625rem] font-bold tracking-[0.15em] uppercase mb-1">{cat.count}</p>
                  <h3 className="text-white font-bold text-lg tracking-[-0.01em]">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND STORY / WHY BRIK ────────────────────────────────── */}
      <section className="py-24 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: editorial copy */}
            <div>
              <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-4">Our Philosophy</p>
              <h2 className="font-black tracking-[-0.03em] leading-tight text-[#1A1A1A] mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                Storage that<br />disappears into<br />your home.
              </h2>
              <p className="text-gray-500 leading-relaxed text-[1.0625rem] mb-4">
                Good storage shouldn&apos;t be an eyesore. It should blend in, work quietly, and make your space feel bigger — not more cluttered.
              </p>
              <p className="text-gray-500 leading-relaxed text-[1.0625rem] mb-8">
                At BRik Goods, every product starts with a simple question: does this make life easier? If yes, we build it to last.
              </p>
              <Link href="/about" className="btn-outline-dark">
                Our Story
              </Link>
            </div>

            {/* Right: numbered reasons */}
            <div className="space-y-0">
              {reasons.map((r, i) => (
                <div key={r.number} className={`flex gap-6 py-7 ${i < reasons.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <span className="text-[0.75rem] font-bold text-gray-300 tracking-widest mt-0.5 shrink-0 w-6">{r.number}</span>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1.5 tracking-[-0.01em]">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`text-center py-8 px-4 ${i < stats.length - 1 ? 'border-r border-gray-800' : ''}`}
              >
                <div className="font-black text-white tracking-[-0.03em] leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-[0.625rem] font-bold tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHOLESALE CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-gray-800 p-12 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: editorial headline */}
            <div>
              <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-4">For Retailers & Businesses</p>
              <h2 className="font-black text-white tracking-[-0.03em] leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                Buy at scale.<br />Price accordingly.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We work with retailers, interior designers, and businesses worldwide. Competitive bulk pricing, ready-to-ship inventory, and a dedicated account manager — every time.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Bulk pricing from 50+ units', 'Ships to retailers worldwide', 'Full catalog available for wholesale', 'Response within 1–2 business days'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#2E6B73] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: quick inquiry nudge */}
            <div className="border-l-0 lg:border-l border-gray-800 lg:pl-12">
              <p className="text-white font-semibold text-lg mb-6 leading-snug">
                Ready to partner with BRik Goods?
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Fill out our short wholesale inquiry form. Tell us what you need, your estimated quantities, and we&apos;ll be back with pricing.
              </p>
              <Link href="/wholesale" className="btn-teal block text-center">
                Submit Inquiry
              </Link>
              <p className="text-gray-600 text-xs text-center mt-4 tracking-wide">
                Typically responds within 1–2 business days
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
