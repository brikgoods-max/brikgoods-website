'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

type SortOption = 'default' | 'name-asc' | 'name-desc';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then((r) => r.json())
      .then((data: Product[]) => {
        setAllProducts(data);
        const cats = ['All', ...Array.from(new Set(data.map((p) => p.category)))];
        setCategories(cats);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = allProducts;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'name-asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }
    setProducts(filtered);
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('default');
  };

  const hasFilters = searchQuery || selectedCategory !== 'All';

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Page header */}
      <div className="border-b border-[#e8e5de]" style={{ background: 'rgba(10,10,10,0.97)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6">
            <Link href="/" className="luxury-label text-[#5a5a5a] hover:text-[#B8963E] transition-colors">Home</Link>
            <span className="text-[#3a3a3a]">/</span>
            <span className="luxury-label text-[#B8963E]">Products</span>
          </nav>

          <span className="luxury-label text-[#B8963E] block mb-3">BRik Goods Collection</span>
          <h1
            className="luxury-heading text-white"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
          >
            All Products
          </h1>
          <p className="text-[#a09890] mt-3 text-[1.0625rem]" style={{ fontFamily: 'var(--font-inter)' }}>
            {loading ? 'Loading…' : (
              <>
                <span className="text-white font-medium">{products.length}</span> product{products.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All' && <> in <span className="text-white font-medium">{selectedCategory}</span></>}
                {searchQuery && <> matching &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo;</>}
              </>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Controls row */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-[320px]">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a09890] pointer-events-none"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#e8e5de] bg-white text-sm placeholder-[#a09890] focus:outline-none focus:border-[#B8963E] transition-colors"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-[#e8e5de] bg-white py-3 px-4 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#B8963E] transition-colors appearance-none cursor-pointer pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%230A0A0A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            <option value="default">Sort: Default</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
          </select>
        </div>

        {/* Category pills — thin border style */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 luxury-label border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                  : 'bg-transparent text-[#6b6560] border-[#d8d5ce] hover:border-[#B8963E] hover:text-[#B8963E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-[#e8e5de]">
                <div className="aspect-square bg-[#FAF9F6] animate-pulse" />
                <div className="p-5 space-y-2">
                  <div className="h-2 bg-[#f0ede8] rounded w-1/3 animate-pulse" />
                  <div className="h-4 bg-[#f0ede8] rounded w-3/4 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-28 border border-[#e8e5de]">
            <p className="luxury-heading text-[#0A0A0A] text-xl mb-3">No products found</p>
            <p className="text-[#a09890] text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
              {hasFilters ? 'Try adjusting your search or filters.' : 'No products available.'}
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="luxury-label text-[#B8963E] hover:text-[#9e7e2e] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <p className="luxury-label text-[#a09890]">Loading…</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
