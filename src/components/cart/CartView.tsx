'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Separator } from '@/components/ui/separator';

export function CartView() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 border-2 border-dashed rounded-lg">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map(item => {
          const productImage = placeholderImages.find(p => p.id === item.imageId);
          return (
            <Card key={item.id} className="flex items-center p-4">
              <div className="relative h-24 w-24 rounded-md overflow-hidden">
                {productImage && (
                    <Image
                    src={productImage.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    data-ai-hint={productImage.imageHint}
                  />
                )}
              </div>
              <div className="ml-4 flex-grow">
                <Link href={`/products/${item.id}`} className="font-semibold hover:text-primary">{item.name}</Link>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                  <Input type="number" value={item.quantity} className="h-8 w-12 border-0 text-center" readOnly />
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </Card>
          );
        })}
      </div>
      <Card className="lg:col-span-1 sticky top-24">
        <CardHeader>
          <CardTitle className="font-headline">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex justify-between">
                <span>Subtotal ({cartCount} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
            </div>
        </CardContent>
        <CardFooter>
            <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
