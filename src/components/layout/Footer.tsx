import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">Elegancia en cada gota.</p>
            <div className="flex space-x-4">
              <Link href="#" passHref>
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Tienda</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary transition-colors">Todos los productos</Link></li>
              <li><Link href="/products?category=skincare" className="hover:text-primary transition-colors">Skincare</Link></li>
              <li><Link href="/products?category=makeup" className="hover:text-primary transition-colors">Makeup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Sobre nosotros</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Nuestra historia</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Carreras</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Hoja informativa</h3>
            <p className="text-sm mb-4">
              Suscríbete para recibir ofertas especiales, obsequios gratuitos y ofertas únicas en la vida.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit" variant="default">Subscríbete</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BeauteSphere. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
