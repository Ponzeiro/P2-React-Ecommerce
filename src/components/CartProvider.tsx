'use client';

import { CartContextProvider } from '@/lib/cart-context';

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
