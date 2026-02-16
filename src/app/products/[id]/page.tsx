import { getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ProductDetailClient } from './ProductDetailClient';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const productImage = placeholderImages.find(p => p.id === product.imageId);

  return (
    <div className="container mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="aspect-square rounded-lg bg-card overflow-hidden shadow-lg">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-primary">{product.category}</p>
            <h1 className="text-4xl lg:text-5xl font-headline font-bold mt-1">
              {product.name}
            </h1>
            <div className="flex items-center mt-4">
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">({product.reviewCount} reviews)</span>
            </div>
          </div>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          <p className="text-foreground/80 leading-relaxed">{product.description}</p>
          
          <ProductDetailClient product={product} />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ingredients">
              <AccordionTrigger className="text-lg font-semibold">Ingredientes</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                  {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="usage">
              <AccordionTrigger className="text-lg font-semibold">Método de uso</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                {product.usage}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
