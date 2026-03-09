export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  weight: string;
  image: string;
  price: number | null;
  description: string;
}

let cachedProducts: Product[] | null = null;

export async function getAllProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts;
  
  // In server context, read from file system
  if (typeof window === 'undefined') {
    const { readFileSync } = await import('fs');
    const { join } = await import('path');
    const filePath = join(process.cwd(), 'public', 'products.json');
    const data = readFileSync(filePath, 'utf-8');
    cachedProducts = JSON.parse(data);
    return cachedProducts!;
  }
  
  // In client context, fetch from public URL
  const res = await fetch('/products.json');
  cachedProducts = await res.json();
  return cachedProducts!;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((p) => p.id === id);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.category === category);
}

export async function getCategories(): Promise<string[]> {
  const products = await getAllProducts();
  const cats = new Set(products.map((p) => p.category));
  return ['All', ...Array.from(cats)];
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getAllProducts();
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export async function getFeaturedProducts(count = 6): Promise<Product[]> {
  const products = await getAllProducts();
  return products.slice(0, count);
}
