export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number; // in minor units? we use decimal for simplicity
  currency: 'USD' | 'EUR' | 'RUB';
  image: string;
  category: string; // category slug
  rating: number; // 0..5
  featured?: boolean;
  tags?: string[];
};
