import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: '🏆',
    title: 'Quality First',
    desc: 'Every product is made from premium, BPA-free materials. We test our products rigorously to ensure they meet the highest standards.',
  },
  {
    icon: '💡',
    title: 'Thoughtful Design',
    desc: 'We believe storage should be beautiful and functional. Our clear designs let you see contents at a glance — no more digging around.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    desc: 'We aim to produce durable goods that last for years, reducing waste. Our products are designed to be repaired and reused.',
  },
  {
    icon: '🤝',
    title: 'Partnerships',
    desc: 'We build long-term relationships with our wholesale partners, offering dedicated support and consistent supply.',
  },
];

const stats = [
  { number: '50+', label: 'Products in Catalog' },
  { number: '10+', label: 'Countries Served' },
  { number: '1000+', label: 'Wholesale Partners' },
  { number: '5★', label: 'Customer Rating' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#f9fafb', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#f0fdff', color: '#2E6B73', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.375rem 1rem', borderRadius: '999px', marginBottom: '1.5rem' }}>
            About BRik Goods
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Organizing Homes,<br />
            <span style={{ color: '#2E6B73' }}>One Product at a Time</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.75 }}>
            BRik Goods was founded on a simple belief: quality storage products shouldn&apos;t be expensive or ugly. We set out to create a range of premium, transparent storage solutions that are as beautiful as they are practical.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '1.25rem' }}>Our Mission</h2>
            <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: '1rem', fontSize: '1rem' }}>
              We design storage products that bring clarity and calm to cluttered spaces. Whether it&apos;s a sneaker collector needing the perfect display boxes, a family wanting to organize the kitchen refrigerator, or a retailer looking for quality wholesale goods — BRik Goods has a solution.
            </p>
            <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Our product range spans shoe storage, kitchen organizers, bathroom caddies, and multifunctional storage boxes — all made from durable, crystal-clear plastic that showcases your belongings while keeping them safe.
            </p>
            <Link href="/products" className="btn-teal">
              Explore Our Products
            </Link>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ position: 'relative', height: '360px', backgroundColor: '#f9fafb' }}>
              <Image
                src="/images/catalog/page-1.png"
                alt="BRik Goods Products"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2E6B73', marginBottom: '0.375rem' }}>{s.number}</div>
              <div style={{ fontSize: '0.9375rem', color: '#9ca3af', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '0.75rem' }}>What We Stand For</h2>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>The values that guide every product we make</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {values.map((v) => (
            <div key={v.title} style={{ padding: '1.75rem', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: 'white', transition: 'box-shadow 0.2s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.625rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#2E6B73', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Ready to Work Together?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Whether you&apos;re buying for your home or looking for wholesale pricing for your business, we&apos;d love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: 'white', color: '#2E6B73', padding: '0.875rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}>
              Contact Us
            </Link>
            <Link href="/wholesale" style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.5)', padding: '0.875rem 2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}>
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
