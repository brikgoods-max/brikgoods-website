'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
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

  const handleAddToInquiry = () => {
    setAddedToInquiry(true);
    setTimeout(() => setAddedToInquiry(false), 2500);
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
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <p className="luxury-label text-[#a09890]">Loading…</p>
      </div>
    );
  }

  if (!product) return null;

  const specs = [
    { label: 'Item No.', value: product.id },
    { label: 'Size', value: product.size },
    { label: 'Weight', value: product.weight },
    { label: 'Category', value: product.category },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-[#e8e5de] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <nav className="flex items-center gap-2">
            <Link href="/" className="luxury-label text-[#a09890] hover:text-[#B8963E] transition-colors">Home</Link>
            <span className="text-[#d8d5ce]">/</span>
            <Link href="/products" className="luxury-label text-[#a09890] hover:text-[#B8963E] transition-colors">Products</Link>
            <span className="text-[#d8d5ce]">/</span>
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="luxury-label text-[#a09890] hover:text-[#B8963E] transition-colors"
            >
              {product.category}
            </Link>
            <span className="text-[#d8d5ce]">/</span>
            <span className="luxury-label text-[#0A0A0A]">{product.id}</span>
          </nav>
        </div>
      </div>

      {/* Main product layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-start">

          {/* LEFT: Large product image */}
          <div className="bg-white border border-[#e8e5de] overflow-hidden">
            <div style={{ position: 'relative', paddingBottom: '80%' }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'contain', padding: '2.5rem' }}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Product details */}
          <div className="lg:pt-4">
            {/* Category tag */}
            <span className="luxury-label text-[#2E6B73] block mb-4">
              {product.category}
            </span>

            {/* Product name — large serif */}
            <h1
              className="luxury-heading text-[#0A0A0A] mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-[#6b6560] leading-relaxed mb-10 text-[1.0625rem]" style={{ fontFamily: 'var(--font-inter)' }}>
              {product.description}
            </p>

            {/* Specs as clean labeled rows */}
            <div className="border-t border-[#e8e5de] mb-8">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-4 border-b border-[#e8e5de]">
                  <span className="luxury-label text-[#a09890]">{spec.label}</span>
                  <span className="text-[#0A0A0A] text-sm font-medium" style={{ fontFamily: 'var(--font-inter)' }}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Price — prominent gold */}
            <div className="mb-8 py-5 border border-[#e8c86e] bg-[#fffbf0] text-center">
              <p className="luxury-label text-[#a09890] mb-1">Pricing</p>
              <p className="luxury-heading text-[#B8963E] text-2xl">Contact for Price</p>
              <p className="text-[#a09890] text-sm mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                Wholesale pricing available for bulk orders
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToInquiry}
                className="btn-primary w-full text-center"
                style={{
                  background: addedToInquiry ? '#2E6B73' : '#0A0A0A',
                  borderColor: addedToInquiry ? '#2E6B73' : '#0A0A0A',
                }}
              >
                {addedToInquiry ? '✓ Added to Inquiry List' : 'Add to Wholesale Inquiry'}
              </button>
              <Link href="/wholesale" className="btn-outline-gold w-full text-center block">
                Submit Wholesale Inquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* ─── RELATED PRODUCTS ──────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-24">
            {/* Section header */}
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px flex-1 bg-[#e8e5de]" />
              <h2 className="luxury-heading text-[#0A0A0A] text-2xl whitespace-nowrap">
                More in {product.category}
              </h2>
              <div className="h-px flex-1 bg-[#e8e5de]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="group bg-white border border-[#e8e5de] hover:border-[#B8963E] transition-colors duration-300 overflow-hidden"
                >
                  <div style={{ position: 'relative', paddingBottom: '100%', background: '#FAF9F6' }}>
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      style={{ objectFit: 'contain', padding: '1rem' }}
                      sizes="25vw"
                    />
                  </div>
                  <div className="p-4 border-t border-[#f0ede8]">
                    <p className="luxury-label text-[#a09890] mb-1">#{rel.id}</p>
                    <h3
                      className="text-[#0A0A0A] font-medium text-sm leading-snug line-clamp-2 mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {rel.name}
                    </h3>
                    <span className="luxury-label text-[#B8963E] group-hover:text-[#9e7e2e] transition-colors">
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
