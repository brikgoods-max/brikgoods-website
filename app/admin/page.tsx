'use client';

import { useState, useEffect } from 'react';

const PASSWORD = 'brikgoods2025';
const STORAGE_KEY = 'brikgoods_admin_auth';
const PRODUCTS_STORAGE_KEY = 'brikgoods_admin_products';

const CATEGORIES = ['Disposables', 'Home Storage', 'Furniture', 'Travel'];

const HR_IMAGES = [
  'hr_4section-drawer-organizer.jpg',
  'hr_5section-drawer-organizer.jpg',
  'hr_chopsticks-bamboo-30pairs.jpg',
  'hr_chopsticks-bamboo-50pairs.jpg',
  'hr_drawstring-garbage-bag-45pcs.jpg',
  'hr_floral-basket-cream-with-lid-large.jpg',
  'hr_floral-basket-cream-with-lid-medium.jpg',
  'hr_floral-basket-cream-with-lid-small.jpg',
  'hr_food-bag-50pcs.jpg',
  'hr_food-bag-70pcs.jpg',
  'hr_food-bag-roll-90pcs.jpg',
  'hr_food-container-rectangular-set.jpg',
  'hr_food-container-with-lid-set.jpg',
  'hr_fresh-bag-blue-roll.jpg',
  'hr_fresh-bag-combo-300pcs.jpg',
  'hr_fresh-bag-large-250pcs.jpg',
  'hr_fresh-bag-medium-330pcs.jpg',
  'hr_fresh-bag-small-410pcs.jpg',
  'hr_fresh-bag-xl-150pcs.jpg',
  'hr_garbage-bag-2in1-yellow.jpg',
  'hr_garbage-bag-black-130pcs.jpg',
  'hr_garbage-bag-black-4rolls.jpg',
  'hr_garbage-bag-black-flat-100pcs.jpg',
  'hr_garbage-bag-harmful-pink-90pcs.jpg',
  'hr_garbage-bag-kitchen-green-90pcs.jpg',
  'hr_garbage-bag-other-waste-grey-90pcs.jpg',
  'hr_garbage-bag-recyclable-blue-90pcs.jpg',
  'hr_garbage-bag-sorting-6color-set.jpg',
  'hr_kangyi-coffee-paper-cup-280ml-20pcs.jpg',
  'hr_kangyi-coffee-paper-cup-300ml-50pcs.jpg',
  'hr_kangyi-juice-paper-cup-400ml-36pcs-cartoon.jpg',
  'hr_kangyi-paper-cup-180ml-100pcs-white.jpg',
  'hr_kangyi-paper-cup-220ml-18pcs-tube-assorted.jpg',
  'hr_kangyi-paper-cup-250ml-100pcs-multicolor.jpg',
  'hr_kangyi-paper-cup-330ml-100pcs-festive.jpg',
  'hr_kangyi-paper-cup-60ml-66pcs-kungfu-tea.jpg',
  'hr_kangyi-paper-cup-9oz-50pcs-handle.jpg',
  'hr_kangyi-plastic-cup-180ml-50pcs.jpg',
  'hr_kangyi-plastic-cup-200ml-88pcs.jpg',
  'hr_kangyi-plastic-cup-kungfu-tea-50pcs.jpg',
  'hr_kangyi-thick-paper-cup-400ml-50pcs.jpg',
  'hr_kangyi-thick-paper-cup-500ml-50pcs.jpg',
  'hr_large-heavy-duty-storage-teal.jpg',
  'hr_large-storage-box-teal-large.jpg',
  'hr_large-storage-box-teal-medium.jpg',
  'hr_large-storage-box-teal-wheels-single.jpg',
  'hr_large-storage-box-teal-xl.jpg',
  'hr_large-storage-box-yellow-wheels.jpg',
  'hr_large-storage-box-yellow-xl.jpg',
  'hr_large-wheeled-box-teal-single.jpg',
  'hr_large-wheeled-box-yellow-single.jpg',
  'hr_large-wheeled-box-yellow-teal-stacked.jpg',
  'hr_latch-storage-box-medium-colorful.jpg',
  'hr_latch-storage-box-small-colorful.jpg',
  'hr_open-bin-cup-white.jpg',
  'hr_open-bin-oval-white.jpg',
  'hr_open-bin-with-handles-white.jpg',
  'hr_paper-bowl-520ml-20pcs.jpg',
  'hr_paper-bowl-650ml-20pcs.jpg',
  'hr_paper-cup-180ml-100pcs.jpg',
  'hr_paper-cup-180ml-50pcs.jpg',
  'hr_paper-cup-210ml-100pcs-red.jpg',
  'hr_paper-cup-210ml-100pcs.jpg',
  'hr_paper-cup-210ml-50pcs.jpg',
  'hr_paper-cup-230ml-100pcs.jpg',
  'hr_paper-cup-230ml-52pcs.jpg',
  'hr_paper-cup-250ml-100pcs.jpg',
  'hr_paper-cup-250ml-50pcs.jpg',
  'hr_paper-cups-250ml.jpg',
  'hr_patterned-basket-geometric-cream.jpg',
  'hr_patterned-basket-geometric-grey.jpg',
  'hr_patterned-basket-set-3colors.jpg',
  'hr_plastic-bowl-400ml-20pcs.jpg',
  'hr_plastic-bowl-460ml-20pcs.jpg',
  'hr_plastic-cup-170ml-100pcs.jpg',
  'hr_plastic-cup-170ml-50pcs.jpg',
  'hr_plastic-cup-200ml-100pcs-teal-bag.jpg',
  'hr_plastic-cup-200ml-100pcs.jpg',
  'hr_plastic-cup-200ml-50pcs.jpg',
  'hr_plastic-cup-220ml-100pcs-bag.jpg',
  'hr_plastic-cup-230ml-100pcs.jpg',
  'hr_plastic-cup-230ml-50pcs.jpg',
  'hr_plastic-cup-240ml-100pcs.jpg',
  'hr_plastic-cup-240ml-50pcs.jpg',
  'hr_plastic-cup-250ml-45pcs.jpg',
  'hr_plastic-cup-250ml-58pcs.jpg',
  'hr_plastic-cup-250ml-60pcs-teal-bag.jpg',
  'hr_plastic-stool-red.jpg',
  'hr_rattan-basket-beige-lid-large.jpg',
  'hr_rattan-basket-beige-lid-medium.jpg',
  'hr_rattan-basket-white-lid-small.jpg',
  'hr_shishishun-paper-bowl-festive-red-20pcs.jpg',
  'hr_shishishun-paper-cup-210ml-100pcs-festive-red.jpg',
  'hr_shishishun-paper-cup-240ml-100pcs-festive-red.jpg',
  'hr_storage-box-beige-grey-lid-large.jpg',
  'hr_storage-box-beige-grey-lid-medium.jpg',
  'hr_storage-box-beige-grey-lid-small.jpg',
  'hr_storage-box-beige-stackable-large.jpg',
  'hr_storage-box-beige-stackable-medium.jpg',
  'hr_storage-box-beige-stackable-small.jpg',
  'hr_storage-box-grey-lid-set-3sizes.jpg',
  'hr_storage-box-grey-lid-stackable.jpg',
  'hr_storage-box-white-lid-medium.jpg',
  'hr_storage-box-white-lid-small.jpg',
  'hr_thick-plastic-bowl-large-700ml-15pcs.jpg',
  'hr_thick-plastic-bowl-medium-500ml-20pcs.jpg',
  'hr_thick-plastic-bowl-small-400ml-20pcs.jpg',
  'hr_travel-packing-cubes-3pc-green.jpg',
  'hr_vest-food-bag-200pcs-large.jpg',
  'hr_vest-food-bag-200pcs-medium.jpg',
  'hr_vest-garbage-bag-black-65pcs.jpg',
  'hr_vest-garbage-bag-yellow-105pcs.jpg',
  'hr_vest-garbage-bag-yellow-180pcs.jpg',
  'hr_wicker-basket-medium-cream.jpg',
  'hr_wicker-basket-set-3colors.jpg',
  'hr_wicker-basket-small-grey.jpg',
  'hr_zipper-bag-large.jpg',
  'hr_zipper-bag-medium.jpg',
  'hr_zipper-bag-small.jpg',
];

interface Product {
  id: string;
  name: string;
  category: string;
  size?: string | null;
  weight?: string | null;
  price: number | null;
  image: string;
  description: string;
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F5F0E8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: '#fff',
        border: '1px solid #e0d9cc',
        borderRadius: '12px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        animation: shake ? 'shake 0.4s ease' : undefined,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '0.08em', color: '#1a1a1a' }}>
            BRik Goods
          </div>
          <div style={{ color: '#888', marginTop: '0.4rem', fontSize: '0.9rem' }}>
            Admin Panel
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#444', marginBottom: '0.4rem' }}>
              Password
            </label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setError(false); }}
              placeholder="Enter admin password"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: error ? '1.5px solid #c0392b' : '1.5px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                background: '#fafaf8',
              }}
              autoFocus
            />
            {error && (
              <div style={{ color: '#c0392b', fontSize: '0.82rem', marginTop: '0.4rem' }}>
                Incorrect password. Try again.
              </div>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.85rem',
              background: '#C9A84C',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}

// ─── Image Picker Modal ────────────────────────────────────────────────────────

function ImagePickerModal({
  current,
  onSelect,
  onClose,
}: {
  current: string;
  onSelect: (img: string) => void;
  onClose: () => void;
}) {
  const [search, setSearch] = useState('');
  const filtered = HR_IMAGES.filter(img =>
    img.toLowerCase().includes(search.toLowerCase())
  );
  const currentFilename = current.split('/').pop() || '';

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: '1rem',
    }}>
      <div style={{
        background: '#fff', borderRadius: '12px', width: '100%', maxWidth: '700px',
        maxHeight: '85vh', display: 'flex', flexDirection: 'column',
        boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
      }}>
        {/* Header */}
        <div style={{
          padding: '1.2rem 1.5rem', borderBottom: '1px solid #eee',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Select Image</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#888' }}>✕</button>
        </div>
        {/* Search */}
        <div style={{ padding: '0.8rem 1.5rem', borderBottom: '1px solid #eee' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search images…"
            style={{
              width: '100%', padding: '0.6rem 0.9rem',
              border: '1.5px solid #ddd', borderRadius: '8px', fontSize: '0.9rem',
              boxSizing: 'border-box',
            }}
            autoFocus
          />
        </div>
        {/* Grid */}
        <div style={{
          overflowY: 'auto', padding: '1rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '0.75rem',
        }}>
          {filtered.map(img => {
            const isSelected = img === currentFilename;
            return (
              <button
                key={img}
                onClick={() => { onSelect(`/images/products/${img}`); onClose(); }}
                style={{
                  border: isSelected ? '2.5px solid #C9A84C' : '2px solid #eee',
                  borderRadius: '8px',
                  background: isSelected ? '#fdf6e3' : '#fafaf8',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  textAlign: 'center',
                  transition: 'border-color 0.15s',
                }}
                title={img}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/products/${img}`}
                  alt={img}
                  style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '4px', display: 'block' }}
                />
                <div style={{ fontSize: '0.62rem', color: '#666', marginTop: '0.3rem', wordBreak: 'break-all', lineHeight: 1.3 }}>
                  {img.replace('hr_', '').replace('.jpg', '').replace(/-/g, ' ')}
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#999', padding: '2rem' }}>
              No images match &quot;{search}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Edit Modal ────────────────────────────────────────────────────────────────

function EditModal({
  product,
  onSave,
  onClose,
}: {
  product: Product;
  onSave: (p: Product) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Product>({ ...product });
  const [priceInput, setPriceInput] = useState(product.price !== null ? String(product.price) : '');
  const [showImagePicker, setShowImagePicker] = useState(false);

  function handleSave() {
    const updated: Product = {
      ...form,
      price: priceInput.trim() === '' ? null : parseFloat(priceInput),
    };
    onSave(updated);
    onClose();
  }

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.9rem',
    border: '1.5px solid #ddd',
    borderRadius: '8px',
    fontSize: '0.95rem',
    boxSizing: 'border-box' as const,
    background: '#fafaf8',
  };

  const labelStyle = {
    display: 'block' as const,
    fontSize: '0.82rem',
    fontWeight: '600' as const,
    color: '#555',
    marginBottom: '0.35rem',
  };

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 500, padding: '1rem',
      }}>
        <div style={{
          background: '#fff', borderRadius: '12px', width: '100%', maxWidth: '560px',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
        }}>
          {/* Header */}
          <div style={{
            padding: '1.2rem 1.5rem', borderBottom: '1px solid #eee',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'sticky', top: 0, background: '#fff', zIndex: 1,
          }}>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.05rem' }}>Edit Product</div>
              <div style={{ fontSize: '0.78rem', color: '#999', marginTop: '0.1rem' }}>ID: {product.id}</div>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#888' }}>✕</button>
          </div>

          {/* Body */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Image preview + picker */}
            <div>
              <label style={labelStyle}>Product Image</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.image}
                  alt={form.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1.5px solid #eee' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', color: '#888', marginBottom: '0.5rem', wordBreak: 'break-all' }}>
                    {form.image.split('/').pop()}
                  </div>
                  <button
                    onClick={() => setShowImagePicker(true)}
                    style={{
                      padding: '0.5rem 1rem',
                      border: '1.5px solid #C9A84C',
                      borderRadius: '6px',
                      background: 'transparent',
                      color: '#C9A84C',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                    }}
                  >
                    Change Image
                  </button>
                </div>
              </div>
            </div>

            {/* Name */}
            <div>
              <label style={labelStyle}>Product Name</label>
              <input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
              />
            </div>

            {/* Category */}
            <div>
              <label style={labelStyle}>Category</label>
              <select
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                style={{ ...inputStyle, appearance: 'auto' }}
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label style={labelStyle}>
                Price (CAD) — <span style={{ fontWeight: '400', color: '#999' }}>leave blank for &quot;Contact for Price&quot;</span>
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={priceInput}
                onChange={e => setPriceInput(e.target.value)}
                placeholder="e.g. 3.50"
                style={inputStyle}
              />
            </div>

            {/* Description */}
            <div>
              <label style={labelStyle}>Description</label>
              <textarea
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <button
                onClick={onClose}
                style={{
                  flex: 1, padding: '0.75rem',
                  border: '1.5px solid #ddd', borderRadius: '8px',
                  background: 'transparent', color: '#666',
                  fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  flex: 2, padding: '0.75rem',
                  border: 'none', borderRadius: '8px',
                  background: '#C9A84C', color: '#fff',
                  fontWeight: '700', cursor: 'pointer', fontSize: '0.95rem',
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {showImagePicker && (
        <ImagePickerModal
          current={form.image}
          onSelect={(img) => setForm(f => ({ ...f, image: img }))}
          onClose={() => setShowImagePicker(false)}
        />
      )}
    </>
  );
}

// ─── Main Admin Dashboard ──────────────────────────────────────────────────────

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [hasUnsaved, setHasUnsaved] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    // Try localStorage first (draft changes), then fetch fresh
    const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProducts(parsed);
        setLoading(false);
        setHasUnsaved(true);
        return;
      } catch {
        // fall through to fetch
      }
    }
    fetch('/products.json')
      .then(r => r.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function handleSave(updated: Product) {
    const newProducts = products.map(p => p.id === updated.id ? updated : p);
    setProducts(newProducts);
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(newProducts));
    setHasUnsaved(true);
  }

  function handleExport() {
    const json = JSON.stringify(products, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.json';
    a.click();
    URL.revokeObjectURL(url);
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 4000);
  }

  function handleDiscardDraft() {
    if (!confirm('Discard all unsaved changes and reload from live data?')) return;
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    setLoading(true);
    fetch('/products.json')
      .then(r => r.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
        setHasUnsaved(false);
      });
  }

  const withPrices = products.filter(p => p.price !== null).length;
  const contactOnly = products.length - withPrices;

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = filterCategory === 'All' || p.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#888', fontSize: '1.1rem' }}>Loading products…</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F0E8' }}>
      {/* Top bar */}
      <div style={{
        background: '#1a1a1a', color: '#fff', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '56px', position: 'sticky', top: 0, zIndex: 200,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontWeight: '800', letterSpacing: '0.08em', fontSize: '1.1rem' }}>BRik Goods</span>
          <span style={{ color: '#C9A84C', fontSize: '0.8rem', fontWeight: '600', padding: '0.15rem 0.5rem', border: '1px solid #C9A84C', borderRadius: '4px' }}>
            Admin
          </span>
        </div>
        <button
          onClick={onLogout}
          style={{ background: 'none', border: '1px solid #555', color: '#ccc', padding: '0.35rem 0.9rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
        >
          Sign Out
        </button>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem 1rem' }}>
        {/* Draft banner */}
        {hasUnsaved && (
          <div style={{
            background: '#fdf6e3', border: '1.5px solid #C9A84C', borderRadius: '8px',
            padding: '0.8rem 1.2rem', marginBottom: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '0.5rem',
          }}>
            <div style={{ fontSize: '0.9rem', color: '#7a5c00' }}>
              ⚠️ You have <strong>unsaved draft changes</strong> stored locally. Export to apply them to the live site.
            </div>
            <button
              onClick={handleDiscardDraft}
              style={{ background: 'none', border: '1px solid #C9A84C', color: '#7a5c00', padding: '0.3rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.82rem' }}
            >
              Discard Draft
            </button>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Total Products', value: products.length, accent: '#C9A84C' },
            { label: 'Have Price', value: withPrices, accent: '#2ecc71' },
            { label: '"Contact for Price"', value: contactOnly, accent: '#e67e22' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: '#fff', border: '1px solid #e0d9cc', borderRadius: '10px',
              padding: '1rem 1.4rem', flex: '1', minWidth: '130px',
              borderLeft: `4px solid ${stat.accent}`,
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1a1a1a' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.15rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={{
          display: 'flex', gap: '0.75rem', marginBottom: '1.2rem', flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products or ID…"
            style={{
              flex: 1, minWidth: '180px', padding: '0.65rem 1rem',
              border: '1.5px solid #ddd', borderRadius: '8px', fontSize: '0.9rem',
              background: '#fff',
            }}
          />
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            style={{
              padding: '0.65rem 0.9rem', border: '1.5px solid #ddd',
              borderRadius: '8px', fontSize: '0.9rem', background: '#fff', minWidth: '150px',
            }}
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button
            onClick={handleExport}
            style={{
              padding: '0.65rem 1.3rem',
              background: '#1a1a1a', color: '#fff',
              border: 'none', borderRadius: '8px',
              fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem',
              whiteSpace: 'nowrap',
            }}
          >
            ⬇ Export JSON
          </button>
        </div>

        {/* Export success */}
        {exportSuccess && (
          <div style={{
            background: '#e8f5e9', border: '1.5px solid #2ecc71', borderRadius: '8px',
            padding: '0.9rem 1.2rem', marginBottom: '1.2rem',
          }}>
            <strong>✅ products.json downloaded!</strong>
            <div style={{ fontSize: '0.88rem', marginTop: '0.3rem', color: '#1a5e2a' }}>
              After exporting, send the file to <strong>Jing Jing</strong> to update the live website.
            </div>
          </div>
        )}

        {/* Products table */}
        <div style={{ background: '#fff', border: '1px solid #e0d9cc', borderRadius: '12px', overflow: 'hidden' }}>
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr 120px 100px 80px',
            padding: '0.75rem 1rem',
            background: '#f7f3eb',
            borderBottom: '1px solid #e0d9cc',
            fontSize: '0.78rem',
            fontWeight: '700',
            color: '#888',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            gap: '0.75rem',
          }}>
            <div>Image</div>
            <div>Name / ID</div>
            <div>Category</div>
            <div>Price</div>
            <div>Edit</div>
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#999' }}>
              No products match your search.
            </div>
          )}

          {filtered.map((product, i) => (
            <div
              key={product.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 120px 100px 80px',
                padding: '0.75rem 1rem',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: i < filtered.length - 1 ? '1px solid #f0ebe0' : 'none',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fdf6e3')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Thumbnail */}
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '52px', height: '52px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #eee' }}
                />
              </div>

              {/* Name / ID */}
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#1a1a1a', lineHeight: 1.3 }}>
                  {product.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '0.15rem' }}>
                  {product.id}
                </div>
              </div>

              {/* Category */}
              <div>
                <span style={{
                  fontSize: '0.78rem', padding: '0.2rem 0.6rem',
                  background: '#f5f0e8', borderRadius: '20px', color: '#666',
                  fontWeight: '500',
                }}>
                  {product.category}
                </span>
              </div>

              {/* Price */}
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: product.price !== null ? '#1a1a1a' : '#e67e22' }}>
                {product.price !== null ? `$${product.price.toFixed(2)}` : 'Contact'}
              </div>

              {/* Edit button */}
              <div>
                <button
                  onClick={() => setEditingProduct(product)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: '1.5px solid #C9A84C',
                    borderRadius: '6px',
                    background: 'transparent',
                    color: '#C9A84C',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div style={{ textAlign: 'center', marginTop: '2rem', color: '#aaa', fontSize: '0.82rem' }}>
          Click <strong style={{ color: '#666' }}>Edit</strong> on any product to change its details, then{' '}
          <strong style={{ color: '#666' }}>Export JSON</strong> and send to Jing Jing to publish.
        </div>
      </div>

      {editingProduct && (
        <EditModal
          product={editingProduct}
          onSave={handleSave}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setAuthed(stored === 'true');
  }, []);

  function handleLogin() {
    setAuthed(true);
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
  }

  // Avoid hydration mismatch — render nothing until we know auth state
  if (authed === null) {
    return (
      <div style={{ minHeight: '100vh', background: '#F5F0E8' }} />
    );
  }

  if (!authed) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
