'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import type { Product } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';

type AddToCartButtonProps = {
  product: Product;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
};

export function AddToCartButton({
  product,
  quantity = 1,
  className,
  children,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Button onClick={handleAddToCart} className={className}
      aria-label={`Add ${product.name} to cart`}
    >
      {children || (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </>
      )}
    </Button>
  );
}
