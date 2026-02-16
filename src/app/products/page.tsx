import { getCategories, getProducts } from '@/lib/data';
import { ProductCard } from '@/components/products/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category;
  const products = getProducts(selectedCategory);
  const categories = getCategories();

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-headline font-bold">
          {selectedCategory ? selectedCategory : 'All Products'}
        </h1>
        <div className="flex items-center gap-4">
            <Link href="/products" passHref>
                <Button variant={!selectedCategory ? 'default' : 'outline'}>All</Button>
            </Link>
            {categories.map(category => (
                <Link href={`/products?category=${category.toLowerCase()}`} key={category} passHref>
                    <Button variant={selectedCategory === category.toLowerCase() ? 'default' : 'outline'}>{category}</Button>
                </Link>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
