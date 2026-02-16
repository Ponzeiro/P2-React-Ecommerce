'use client';

import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { CreditCard, Lock } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";


export function CheckoutView() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { toast } = useToast();
    const router = useRouter();

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="mt-2 text-muted-foreground">You can't checkout with an empty cart.</p>
                <Button asChild className="mt-6">
                    <Link href="/products">Go Shopping</Link>
                </Button>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a placeholder for actual payment processing
        toast({
            title: "Order Placed!",
            description: "Thank you for your purchase. Your order is being processed.",
        });
        clearCart();
        router.push('/');
    };

    return (
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Shipping Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="you@example.com" />
                            </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" placeholder="123 Main St" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" placeholder="Anytown" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="zip">ZIP Code</Label>
                                    <Input id="zip" placeholder="12345" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="font-headline">Payment Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-4">
                            <div className="relative">
                                <Input id="cardNumber" placeholder="Card Number" className="pl-10" />
                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Input id="expiry" placeholder="MM / YY" />
                                <Input id="cvc" placeholder="CVC" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-headline font-semibold">Order Summary</h2>
                <div className="space-y-4">
                    {cartItems.map(item => {
                        const productImage = placeholderImages.find(p => p.id === item.imageId);
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                        {productImage && <Image src={productImage.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint={productImage.imageHint} />}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        )
                    })}
                </div>
                <Separator />
                <div className="space-y-2">
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>$0.00</span>
                    </div>
                     <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>
                <Button onClick={handleSubmit} size="lg" className="w-full">
                    <Lock className="mr-2 h-4 w-4" /> Place Order
                </Button>
            </div>
        </div>
    )
}
