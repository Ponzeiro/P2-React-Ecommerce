import { CartView } from "@/components/cart/CartView";

export default function CartPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-headline font-bold mb-8">Carrito de compra</h1>
            <CartView />
        </div>
    )
}
