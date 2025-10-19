export type OrderStatus = 'processing' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export type OrderItem = {
  productId: string;
  slug: string;
  title: string;
  price: number;
  currency: 'RUB';
  qty: number;
  image: string;
};

export type Order = {
  id: string;
  number: string; // human-friendly order number
  createdAt: string; // ISO date string
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  currency: 'RUB';
};
