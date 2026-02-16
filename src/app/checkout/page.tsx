import { CheckoutView } from "@/components/checkout/CheckoutView";

export default function CheckoutPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="max-w-4xl mx-auto">
                 <h1 className="text-4xl font-headline font-bold mb-8 text-center">Checkout</h1>
                <CheckoutView />
            </div>
        </div>
    )
}
