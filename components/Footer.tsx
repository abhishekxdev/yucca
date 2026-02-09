'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

interface CategoryData {
  title: string;
  image: string;
}

export default function Footer() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories: CategoryData[] = [
    {
      title: 'Food Service',
      image: '/foodservice.png'
    },
    {
      title: 'Food Processing',
      image: '/food processing.png'
    },
    {
      title: 'Agriculture',
      image: '/agriculture.png'
    }
  ];

  return (
    <footer className="w-full bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="py-16 md:py-20">
          {/* Heading and Scroll to Top */}
          <div className="flex items-start justify-between mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground max-w-[600px]">
              Innovated for Industry Leaders.
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-foreground hover:bg-foreground hover:text-background rounded-2xl w-16 h-16 flex-shrink-0"
            >
              <ArrowUp className="w-6 h-6" strokeWidth={1.5} />
            </Button>
          </div>

          {/* Logo and Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Yucca Logo */}
            <div className="flex items-center justify-start">
              <Image 
                src="/logo.png" 
                alt="Yucca Packaging" 
                width={320} 
                height={320}
                className="w-64 h-auto md:w-80"
              />
            </div>

            {/* Right - Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative border border-foreground/30 rounded-3xl overflow-hidden aspect-square cursor-pointer group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image - shown on hover */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Overlay gradient for text readability on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />

                  {/* Text */}
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <span className={`text-xl md:text-2xl font-light text-center transition-colors duration-300 ${
                      hoveredCard === index ? 'text-white' : 'text-foreground'
                    }`}>
                      {category.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Copyright and Social Icons */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span className="flex items-center justify-center w-5 h-5 border border-foreground rounded-full text-xs">
                  ©
                </span>
                <span>Yucca 2026. All Rights Reserved</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors">
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-foreground hover:text-foreground/70 transition-colors">
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Right - Footer Links */}
            <div className="flex items-center gap-6">
              <Link href="/contact" className="text-sm text-foreground hover:text-foreground/70 transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy" className="text-sm text-foreground hover:text-foreground/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-foreground hover:text-foreground/70 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
