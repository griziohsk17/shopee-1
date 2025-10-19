import type { LoadEvent } from '@sveltejs/kit';
import type { Category, Product } from '$lib/entities/product';
import { fetchJSON } from './dataClient';

const PRODUCTS_PATH = '/data/products.json';
const CATEGORIES_PATH = '/data/categories.json';

export async function listProducts(fetch?: LoadEvent['fetch']): Promise<Product[]> {
  return fetchJSON<Product[]>(PRODUCTS_PATH, fetch);
}

export async function listCategories(fetch?: LoadEvent['fetch']): Promise<Category[]> {
  return fetchJSON<Category[]>(CATEGORIES_PATH, fetch);
}

export async function listFeatured(fetch?: LoadEvent['fetch']): Promise<Product[]> {
  const all = await listProducts(fetch);
  return all.filter((p) => p.featured).slice(0, 8);
}

export async function getProductBySlug(slug: string, fetch?: LoadEvent['fetch']): Promise<Product | null> {
  const all = await listProducts(fetch);
  return all.find((p) => p.slug === slug) ?? null;
}

export async function listByCategory(slug: string, fetch?: LoadEvent['fetch']): Promise<Product[]> {
  const all = await listProducts(fetch);
  return all.filter((p) => p.category === slug);
}
