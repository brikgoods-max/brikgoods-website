'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#f9fafb', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '0.75rem' }}>
            Get in Touch
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Have a question about our products or want to discuss wholesale pricing? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Contact form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem', border: '1px solid #e5e7eb', borderRadius: '16px', backgroundColor: 'white' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✉️</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.75rem' }}>Message Sent!</h2>
                <p style={{ color: '#6b7280', lineHeight: 1.7 }}>
                  Thanks, <strong>{form.name}</strong>! We&apos;ll get back to you at <strong>{form.email}</strong> as soon as possible.
                </p>
                <button
                  onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setSubmitted(false); }}
                  style={{ marginTop: '1.5rem', color: '#2E6B73', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.25rem' }}>Send Us a Message</h2>

                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" style={inputStyle} onFocus={focusInput} onBlur={blurInput} />
                </div>

                <div>
                  <label style={labelStyle}>Subject *</label>
                  <select required name="subject" value={form.subject} onChange={handleChange} style={inputStyle}>
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Wholesale Pricing">Wholesale Pricing</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Returns & Exchanges">Returns & Exchanges</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={focusTextarea}
                    onBlur={blurTextarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '0.875rem',
                    backgroundColor: loading ? '#9ca3af' : '#2E6B73',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem' }}>Contact Information</h2>
            </div>

            {[
              {
                icon: '📧',
                title: 'Email',
                lines: ['info@brikgoods.com', 'wholesale@brikgoods.com'],
              },
              {
                icon: '📍',
                title: 'Location',
                lines: ['We serve customers worldwide', 'Wholesale inquiries from all regions welcome'],
              },
              {
                icon: '⏰',
                title: 'Business Hours',
                lines: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM'],
              },
              {
                icon: '⚡',
                title: 'Response Time',
                lines: ['General inquiries: within 24 hours', 'Wholesale inquiries: within 1–2 business days'],
              },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', border: '1px solid #e5e7eb', borderRadius: '10px', backgroundColor: 'white' }}>
                <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.25rem' }}>{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.5 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Wholesale CTA */}
            <div style={{ backgroundColor: '#2E6B73', borderRadius: '12px', padding: '1.5rem', color: 'white' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>Looking for wholesale pricing?</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', lineHeight: 1.5 }}>
                Use our dedicated wholesale inquiry form for faster processing.
              </p>
              <Link href="/wholesale" style={{ display: 'inline-block', backgroundColor: 'white', color: '#2E6B73', padding: '0.5rem 1.25rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                Wholesale Form →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '0.375rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  backgroundColor: 'white',
};

const focusInput = (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = '#2E6B73');
const blurInput = (e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = '#d1d5db');
const focusTextarea = (e: React.FocusEvent<HTMLTextAreaElement>) => (e.target.style.borderColor = '#2E6B73');
const blurTextarea = (e: React.FocusEvent<HTMLTextAreaElement>) => (e.target.style.borderColor = '#d1d5db');
