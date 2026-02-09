'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="w-full px-6 md:px-12 py-6 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Yucca Packaging" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Solutions
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('standards')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Standards
          </button>
          <button 
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <ShoppingCart className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <User className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </header>
  );
}
