import type { PageLoad } from './$types';
import { listOrders } from '$lib/services/orderService';

export const load: PageLoad = async ({ fetch }) => {
  const orders = await listOrders(fetch);
  return { orders };
};
