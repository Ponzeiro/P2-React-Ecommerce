export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string[];
  usage: string;
  imageId: string;
  rating: number;
  reviewCount: number;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  quantity: number;
};
