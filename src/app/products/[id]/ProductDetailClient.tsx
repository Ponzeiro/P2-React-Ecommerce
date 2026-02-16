'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/lib/cart-context';
import type { Product } from '@/lib/types';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

export function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded-md">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleQuantityChange(-1)}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-16 h-10 text-center border-0 focus-visible:ring-0"
          aria-label="Product quantity"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleQuantityChange(1)}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        size="lg"
        className="flex-grow"
        onClick={() => addToCart(product, quantity)}
        aria-label={`Add ${quantity} ${product.name} to cart`}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Añadir al carrito
      </Button>
    </div>
  );
}
