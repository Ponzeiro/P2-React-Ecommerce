import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/data';
import { ProductCard } from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function Home() {
  const products = getProducts().slice(0, 4); // show 4 featured products

  const heroImage = placeholderImages.find(p => p.id === 'hero-image');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-gradient-to-t from-background via-transparent to-transparent">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center -z-10"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto flex h-full items-center justify-center text-center">
          <div className="flex flex-col items-center space-y-6 bg-background/50 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground">
              Elegancia en cada gota
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-foreground/80">
              Descubre nuestra cuidada colección de cosméticos de alta gama, diseñados para realzar tu belleza natural e inspirar confianza.
            </p>
            <Button asChild size="lg" className="font-bold text-lg py-7 px-8">
              <Link href="#featured-products">
                Compra ahora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Productos destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Explora nuestros productos más vendidos y novedades, adorados por los amantes de la belleza de todo el mundo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
