'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    address: '',
    city: '',
    country: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.75rem' }}>Cart is Empty</h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Add items to your cart before checking out.</p>
        <Link href="/products" className="btn-teal">Browse Products</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '0.75rem' }}>Order Submitted!</h1>
        <p style={{ color: '#6b7280', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          Thank you for your order. We&apos;ll review it and contact you at <strong>{form.email}</strong> to confirm pricing and payment details.
        </p>
        <Link href="/products" className="btn-teal">Continue Shopping</Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    clearCart();
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '2rem' }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2.5rem', alignItems: 'start' }}>
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* Contact info */}
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>
                Contact Information
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Jane Smith', required: true },
                  { key: 'email', label: 'Email Address', placeholder: 'jane@example.com', type: 'email', required: true },
                  { key: 'company', label: 'Company (optional)', placeholder: 'Acme Corp' },
                ].map((field) => (
                  <div key={field.key} style={field.key === 'email' || field.key === 'company' ? {} : {}}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#2E6B73')}
                      onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Shipping address */}
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>
                Shipping Address
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.9375rem', outline: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = '#2E6B73')}
                    onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>City</label>
                    <input
                      type="text" placeholder="San Francisco" required value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.9375rem', outline: 'none' }}
                      onFocus={(e) => (e.target.style.borderColor = '#2E6B73')}
                      onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>Country</label>
                    <input
                      type="text" placeholder="United States" required value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.9375rem', outline: 'none' }}
                      onFocus={(e) => (e.target.style.borderColor = '#2E6B73')}
                      onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment placeholder */}
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>
                Payment
              </h2>
              <div style={{ backgroundColor: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💳</div>
                <p style={{ fontSize: '0.9375rem', color: '#6b7280', fontWeight: 500 }}>
                  Stripe payment integration coming soon
                </p>
                <p style={{ fontSize: '0.8125rem', color: '#9ca3af', marginTop: '0.375rem' }}>
                  We&apos;ll contact you to confirm pricing and arrange payment.
                </p>
              </div>
            </section>

            {/* Notes */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.375rem' }}>
                Order Notes (optional)
              </label>
              <textarea
                placeholder="Any special requests or questions?"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = '#2E6B73')}
                onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: loading ? '#9ca3af' : '#1A1A1A',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.0625rem',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              {loading ? 'Submitting...' : 'Place Order'}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '1.5rem', position: 'sticky', top: '90px' }}>
          <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>Order Summary</h2>
          {items.map((item) => (
            <div key={item.product.id} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.875rem', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '4px', backgroundColor: '#e5e7eb', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontWeight: 700, flexShrink: 0 }}>
                ×{item.quantity}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#1A1A1A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.product.name}</p>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>#{item.product.id}</p>
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#6b7280', flexShrink: 0 }}>TBD</span>
            </div>
          ))}
          <div style={{ height: '1px', backgroundColor: '#d1d5db', margin: '1rem 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <span>Total</span>
            <span style={{ color: '#2E6B73' }}>To be confirmed</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 360px"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
