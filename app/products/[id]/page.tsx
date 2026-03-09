'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { useCart } from '@/lib/cart';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToInquiry, setAddedToInquiry] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then((r) => r.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === id);
        if (!found) {
          router.push('/products');
          return;
        }
        setProduct(found);
        setRelated(data.filter((p) => p.category === found.category && p.id !== found.id).slice(0, 4));
        setLoading(false);
      });
  }, [id, router]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddToInquiry = () => {
    setAddedToInquiry(true);
    setTimeout(() => setAddedToInquiry(false), 2000);
    // Store inquiry items in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('brikgoods-inquiry') || '[]');
      if (!existing.includes(id)) {
        existing.push(id);
        localStorage.setItem('brikgoods-inquiry', JSON.stringify(existing));
      }
    } catch {}
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center', color: '#9ca3af' }}>
        Loading...
      </div>
    );
  }

  if (!product) return null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Breadcrumb */}
      <nav style={{ marginBottom: '2rem', fontSize: '0.875rem', color: '#9ca3af' }}>
        <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <Link href="/products" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} style={{ color: '#9ca3af', textDecoration: 'none' }}>
          {product.category}
        </Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#1A1A1A' }}>{product.name}</span>
      </nav>

      {/* Main content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {/* Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
          <div style={{ position: 'relative', height: '460px' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <div style={{ display: 'inline-block', backgroundColor: '#f0fdff', color: '#2E6B73', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', borderRadius: '4px', marginBottom: '1rem' }}>
            {product.category}
          </div>

          <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            {product.name}
          </h1>

          <p style={{ fontSize: '0.9375rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            {product.description}
          </p>

          {/* Specs */}
          <div style={{ backgroundColor: '#f9fafb', borderRadius: '10px', padding: '1.25rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Specifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { label: 'Item No.', value: product.id },
                { label: 'Size', value: product.size },
                { label: 'Weight', value: product.weight },
                { label: 'Category', value: product.category },
              ].map((spec) => (
                <div key={spec.label}>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{spec.label}</p>
                  <p style={{ fontSize: '0.9375rem', color: '#1A1A1A', fontWeight: 600 }}>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px dashed #d1d5db', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Pricing</p>
            <p style={{ fontSize: '1.375rem', fontWeight: 700, color: '#2E6B73' }}>Contact for Price</p>
            <p style={{ fontSize: '0.8125rem', color: '#9ca3af', marginTop: '0.25rem' }}>
              Wholesale pricing available for bulk orders
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '0.875rem 1.5rem',
                backgroundColor: addedToCart ? '#22c55e' : '#1A1A1A',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                letterSpacing: '0.01em',
              }}
            >
              {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>

            <button
              onClick={handleAddToInquiry}
              style={{
                padding: '0.875rem 1.5rem',
                backgroundColor: 'transparent',
                color: addedToInquiry ? '#22c55e' : '#2E6B73',
                border: `2px solid ${addedToInquiry ? '#22c55e' : '#2E6B73'}`,
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {addedToInquiry ? '✓ Added to Inquiry!' : 'Add to Wholesale Inquiry'}
            </button>

            <Link href="/wholesale" style={{
              display: 'block',
              textAlign: 'center',
              padding: '0.625rem',
              color: '#2E6B73',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              Submit Wholesale Inquiry →
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem' }}>
            More in {product.category}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {related.map((rel) => (
              <div key={rel.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'white' }}>
                <div style={{ position: 'relative', height: '180px', backgroundColor: '#f9fafb' }}>
                  <Image src={rel.image} alt={rel.name} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                </div>
                <div style={{ padding: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.25rem' }}>#{rel.id}</p>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>{rel.name}</h3>
                  <Link href={`/products/${rel.id}`} style={{ color: '#2E6B73', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
