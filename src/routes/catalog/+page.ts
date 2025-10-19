import type { PageLoad } from './$types';
import { listCategories, listProducts } from '$lib/services/productService';

export const load: PageLoad = async ({ fetch, url }) => {
  const [products, categories] = await Promise.all([
    listProducts(fetch),
    listCategories(fetch)
  ]);

  const q = url.searchParams.get('q')?.toLowerCase() ?? '';
  const category = url.searchParams.get('category');

  const filtered = products.filter(p => {
    const matchQ = q ? (p.title.toLowerCase().includes(q) || p.tags?.some(t => t.toLowerCase().includes(q))) : true;
    const matchC = category ? p.category === category : true;
    return matchQ && matchC;
  });

  return { products: filtered, categories, q, category };
};
