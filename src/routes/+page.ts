import type { PageLoad } from './$types';
import { listFeatured, listCategories } from '$lib/services/productService';

export const load: PageLoad = async ({ fetch }) => {
  const [featured, categories] = await Promise.all([
    listFeatured(fetch),
    listCategories(fetch)
  ]);
  return { featured, categories };
};
