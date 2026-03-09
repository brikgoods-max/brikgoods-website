'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🛒</div>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.75rem' }}>Your Cart is Empty</h1>
        <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '2rem' }}>
          Browse our products and add items to your cart.
        </p>
        <Link href="/products" className="btn-teal">
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A1A1A' }}>
          Shopping Cart <span style={{ color: '#9ca3af', fontWeight: 400, fontSize: '1.25rem' }}>({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
        </h1>
        <button
          onClick={clearCart}
          style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.875rem', cursor: 'pointer', fontWeight: 600 }}
        >
          Clear Cart
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'start' }}>
        {/* Cart items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map((item) => (
            <div key={item.product.id} style={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'center',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f9fafb', flexShrink: 0 }}>
                <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: 'cover' }} sizes="100px" />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <Link href={`/products/${item.product.id}`} style={{ textDecoration: 'none', color: '#1A1A1A' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{item.product.name}</h3>
                </Link>
                <p style={{ fontSize: '0.8125rem', color: '#9ca3af', marginBottom: '0.25rem' }}>#{item.product.id}</p>
                <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{item.product.size}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2E6B73', marginTop: '0.375rem' }}>Price TBD</p>
              </div>

              {/* Quantity + Remove */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    style={{ padding: '0.375rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#1A1A1A' }}
                  >−</button>
                  <span style={{ padding: '0.375rem 0.75rem', fontSize: '0.9375rem', fontWeight: 600, borderLeft: '1px solid #e5e7eb', borderRight: '1px solid #e5e7eb', minWidth: '40px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    style={{ padding: '0.375rem 0.75rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#1A1A1A' }}
                  >+</button>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '0.8125rem', fontWeight: 600 }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', position: 'sticky', top: '90px' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.25rem' }}>Order Summary</h2>

          {items.map((item) => (
            <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
              <span>{item.product.name} × {item.quantity}</span>
              <span>TBD</span>
            </div>
          ))}

          <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '1rem 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9375rem', fontWeight: 600 }}>
            <span>Subtotal</span>
            <span style={{ color: '#2E6B73' }}>Price TBD</span>
          </div>

          <p style={{ fontSize: '0.8125rem', color: '#9ca3af', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            Pricing is set by agreement. We&apos;ll confirm total before processing payment.
          </p>

          <Link href="/checkout" className="btn-teal" style={{ display: 'block', textAlign: 'center', padding: '0.875rem', fontSize: '1rem' }}>
            Proceed to Checkout
          </Link>

          <Link href="/wholesale" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem', color: '#2E6B73', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
            Submit Wholesale Inquiry Instead
          </Link>
        </div>
      </div>

      {/* Mobile layout note — responsive hint via inline style on grid */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 340px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
