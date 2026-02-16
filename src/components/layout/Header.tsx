import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Search } from 'lucide-react';
import { CartIcon } from '@/components/cart/CartIcon';
import { Logo } from '@/components/Logo';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '#', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
