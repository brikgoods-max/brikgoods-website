'use client';

import { useState } from 'react';
import Link from 'next/link';

const benefits = [
  {
    title: 'Competitive Pricing',
    body: 'Tiered bulk discounts starting at 50 units. The more you order, the better the price.',
  },
  {
    title: 'Ready Inventory',
    body: 'Our full catalog is stocked and ready to ship. No waiting on production runs.',
  },
  {
    title: 'Ships Worldwide',
    body: 'We work with international retailers and businesses across North America, Europe, and Asia.',
  },
  {
    title: 'Dedicated Support',
    body: 'Every wholesale account gets a personal contact. Questions get answered fast.',
  },
];

export default function WholesalePage() {
  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productsInterested: '',
    estimatedQuantity: '',
    additionalNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full bg-[#2E6B73] flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-4">Inquiry Received</p>
          <h1 className="font-black text-[#1A1A1A] tracking-[-0.03em] mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            We&apos;ll be in touch shortly.
          </h1>
          <p className="text-gray-500 leading-relaxed mb-10">
            Thank you, <strong className="text-[#1A1A1A]">{form.contactName}</strong>. We&apos;ve received your inquiry from{' '}
            <strong className="text-[#1A1A1A]">{form.companyName}</strong> and will reach out to{' '}
            <strong className="text-[#1A1A1A]">{form.email}</strong> within 1–2 business days.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="btn-teal">Browse Products</Link>
            <Link href="/" className="btn-outline-dark">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#1A1A1A] overflow-hidden py-28 px-6">
        {/* Geometric accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #2E6B73 0%, transparent 70%)', clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-5">
              For Retailers & Businesses
            </p>
            <h1 className="font-black text-white tracking-[-0.03em] leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Partner with<br />BRik Goods.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Wholesale pricing, global shipping, and ready inventory. Fill out the form below and we&apos;ll get back to you within 1–2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: benefits + copy */}
          <div className="lg:col-span-2">
            <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-4">Why Wholesale with Us</p>
            <h2 className="font-black text-[#1A1A1A] tracking-[-0.02em] leading-tight mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Everything you need<br />to scale.
            </h2>

            <div className="space-y-0">
              {benefits.map((b, i) => (
                <div key={b.title} className={`py-6 ${i < benefits.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm tracking-wide">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-3" id="inquiry-form">
            <div className="bg-[#F8F8F6] p-8 md:p-12">
              <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-2">Inquiry Form</p>
              <h2 className="font-black text-[#1A1A1A] tracking-[-0.02em] mb-8 text-2xl">Tell us about your business</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row: company + contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                      Company Name <span className="text-[#2E6B73]">*</span>
                    </label>
                    <input
                      required
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Acme Retail Co."
                      className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                      Contact Name <span className="text-[#2E6B73]">*</span>
                    </label>
                    <input
                      required
                      name="contactName"
                      value={form.contactName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors"
                    />
                  </div>
                </div>

                {/* Row: email + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                      Email <span className="text-[#2E6B73]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors"
                    />
                  </div>
                </div>

                {/* Products interested */}
                <div>
                  <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                    Products Interested In <span className="text-[#2E6B73]">*</span>
                  </label>
                  <textarea
                    required
                    name="productsInterested"
                    value={form.productsInterested}
                    onChange={handleChange}
                    placeholder="e.g. Plastic shoe boxes (SA0701), kitchen organizers, home storage…"
                    rows={3}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors resize-none"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                    Estimated Quantity <span className="text-[#2E6B73]">*</span>
                  </label>
                  <select
                    required
                    name="estimatedQuantity"
                    value={form.estimatedQuantity}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2E6B73] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select estimated quantity</option>
                    <option value="50-100 units">50–100 units</option>
                    <option value="100-500 units">100–500 units</option>
                    <option value="500-1000 units">500–1,000 units</option>
                    <option value="1000-5000 units">1,000–5,000 units</option>
                    <option value="5000+ units">5,000+ units</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={form.additionalNotes}
                    onChange={handleChange}
                    placeholder="Shipping destination, timeline, special requirements…"
                    rows={3}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 text-white text-[0.75rem] font-bold tracking-[0.1em] uppercase transition-all duration-200 ${
                      loading
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-[#1A1A1A] hover:bg-[#2E6B73] cursor-pointer'
                    }`}
                  >
                    {loading ? 'Submitting…' : 'Submit Wholesale Inquiry'}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-4 tracking-wide">
                    We typically respond within 1–2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
