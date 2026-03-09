'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

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
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#F8F8F6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-[0.625rem] font-bold tracking-[0.2em] uppercase text-[#2E6B73] mb-3">BRik Goods</p>
          <h1 className="font-black text-[#1A1A1A] tracking-[-0.03em] leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
            All Products
          </h1>
          <p className="text-gray-500 mt-3 text-[1.0625rem]">
            {loading ? 'Loading…' : (
              <>
                <span className="text-[#1A1A1A] font-semibold">{products.length}</span> product{products.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All' && <> in <span className="text-[#1A1A1A] font-semibold">{selectedCategory}</span></>}
                {searchQuery && <> matching &ldquo;<span className="text-[#1A1A1A] font-semibold">{searchQuery}</span>&rdquo;</>}
              </>
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Controls row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-[340px]">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2E6B73] transition-colors"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-gray-200 py-3 px-4 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2E6B73] transition-colors appearance-none cursor-pointer bg-white pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%231A1A1A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            <option value="default">Sort: Default</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-[0.6875rem] font-bold tracking-[0.08em] uppercase border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white">
                <div className="aspect-square bg-[#F8F8F6] animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-2 bg-gray-100 rounded w-1/3 animate-pulse" />
                  <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 border border-gray-100">
            <p className="text-[#1A1A1A] font-semibold text-lg mb-2">No products found</p>
            <p className="text-gray-400 text-sm mb-6">
              {hasFilters ? 'Try adjusting your search or filters.' : 'No products available.'}
            </p>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#2E6B73] hover:text-[#245558] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">Loading…</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
