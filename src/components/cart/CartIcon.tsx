'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';

export function CartIcon() {
  const { cartCount } = useCart();
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
        <div className="relative">
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
    </Button>
  );
}
