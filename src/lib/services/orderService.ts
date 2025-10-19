import type { LoadEvent } from '@sveltejs/kit';
import { fetchJSON } from './dataClient';
import type { Order } from '$lib/entities/order';

const ORDERS_PATH = '/data/orders.json';

export async function listOrders(fetch?: LoadEvent['fetch']): Promise<Order[]> {
  return fetchJSON<Order[]>(ORDERS_PATH, fetch);
}

export async function getOrderById(id: string, fetch?: LoadEvent['fetch']): Promise<Order | null> {
  const orders = await listOrders(fetch);
  return orders.find(o => o.id === id) ?? null;
}
