import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { AddToCartButton } from './AddToCartButton';
import { placeholderImages } from '@/lib/placeholder-images.json';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = placeholderImages.find(p => p.id === product.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 border-b">
        <Link href={`/products/${product.id}`} className="block">
          <div className="aspect-square relative">
            {productImage && (
                <Image
                src={productImage.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                data-ai-hint={productImage.imageHint}
                />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <h3 className="font-headline font-semibold text-lg mt-1">
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
              {product.name}
            </Link>
          </h3>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
          </div>
        </div>
        <p className="text-xl font-bold mt-4">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
