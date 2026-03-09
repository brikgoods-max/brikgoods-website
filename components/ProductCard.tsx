'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card bg-white group border border-[#e8e5de]" style={{ borderRadius: 0 }}>
      {/* Image container — ivory bg, 1:1 ratio */}
      <Link
        href={`/products/${product.id}`}
        className="block overflow-hidden"
        style={{ position: 'relative', paddingBottom: '100%', background: '#FAF9F6' }}
      >
        <div className="product-img-inner" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1.25rem' }}
          />
        </div>

        {/* Hover overlay with "View Details" */}
        <div
          className="view-details-btn"
          style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', right: '0.75rem' }}
        >
          <div style={{
            background: '#0A0A0A',
            color: 'white',
            fontSize: '0.5625rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: '0.625rem 1rem',
          }}>
            View Details →
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="px-5 py-4 border-t border-[#f0ede8]">
        <p className="luxury-label text-[#2E6B73] mb-1.5">
          {product.category}
        </p>
        <h3
          className="text-[#0A0A0A] font-medium leading-snug mb-3 line-clamp-2"
          style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-inter)' }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span style={{ color: '#B8963E', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.02em' }}>
            Contact for Price
          </span>
          <span className="luxury-label text-[#c8c4bc]">
            #{product.id}
          </span>
        </div>
      </div>
    </div>
  );
}
