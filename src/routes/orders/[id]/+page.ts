import type { PageLoad } from './$types';
import { getOrderById } from '$lib/services/orderService';

export const load: PageLoad = async ({ fetch, params }) => {
  const order = await getOrderById(params.id, fetch);
  if (!order) {
    return { status: 404 } as any;
  }
  return { order };
};
