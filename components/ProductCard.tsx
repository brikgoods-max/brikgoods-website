'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card bg-white group border border-gray-100 rounded-sm">
      {/* Image container */}
      <Link href={`/products/${product.id}`} className="block overflow-hidden" style={{ position: 'relative', paddingBottom: '100%', background: '#F8F8F6' }}>
        <div className="product-img-inner" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }}
          />
        </div>

        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,26,26,0)', transition: 'background 0.3s' }} className="group-hover:!bg-black/5" />
        <div className="view-details-btn" style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem' }}>
          <div style={{ background: '#1A1A1A', color: 'white', fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', padding: '0.625rem 1rem' }}>
            View Details →
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 border-t border-gray-100">
        <p style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2E6B73', marginBottom: '0.375rem' }}>
          {product.category}
        </p>
        <h3 style={{ color: '#1A1A1A', fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.3, marginBottom: '0.5rem' }} className="line-clamp-2">
          {product.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
          <span>#{product.id}</span>
          {product.size && <><span style={{ color: '#d1d5db' }}>·</span><span>{product.size}</span></>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#2E6B73', fontSize: '0.875rem', fontWeight: 600 }}>Contact for Price</span>
          <Link href={`/products/${product.id}`} style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', textDecoration: 'none' }}>
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
