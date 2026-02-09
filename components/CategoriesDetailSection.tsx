'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type CategoryType = 'foodservice' | 'processing' | 'agriculture';

interface CategoryData {
  id: CategoryType;
  title: string;
  description: string;
  backgroundImage: string;
}

export default function CategoriesDetailSection() {
  const [hoveredCategory, setHoveredCategory] = useState<CategoryType>('foodservice');

  const categories: CategoryData[] = [
    {
      id: 'foodservice',
      title: 'Food Service',
      description: 'Deliver meals that look good, travel well and impress customers with attention to detail. We can help you customise packaging so it matches the quality of your food and reflects the image you want to exude.',
      backgroundImage: '/foodservice.png'
    },
    {
      id: 'processing',
      title: 'Food Processing',
      description: 'Ensure product safety and quality with packaging solutions designed for food processing. From vacuum-sealed pouches to industrial containers, we provide packaging that maintains freshness, extends shelf life, and meets regulatory standards for your food products.',
      backgroundImage: '/food processing.png'
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      description: 'Protect your agricultural products with durable and reliable packaging. Our solutions are built to withstand the demands of farming and distribution, ensuring your produce, seeds, and agricultural supplies reach their destination in perfect condition.',
      backgroundImage: '/agriculture.png'
    }
  ];

  const currentBackground = categories.find(cat => cat.id === hoveredCategory)?.backgroundImage || '/foodservice.png';

  return (
    <section id="solutions" className="relative w-full min-h-[700px] md:min-h-[800px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentBackground}
          alt={`${hoveredCategory} packaging`}
          fill
          className="object-cover object-center transition-opacity duration-500"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const isHovered = hoveredCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  className={`rounded-3xl p-8 md:p-10 min-h-[400px] cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? 'bg-white flex flex-col justify-between'
                      : 'bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-105'
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                >
                  {isHovered ? (
                    // Expanded view with details
                    <>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                          {category.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground">
                          {category.description}
                        </p>
                      </div>

                      {/* Divider and CTA */}
                      <div className="mt-8 space-y-5">
                        <div className="border-t border-foreground" />
                        <div className="flex items-center justify-between text-foreground">
                          <span className="text-sm font-normal">Tell me more</span>
                          <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Collapsed view - title only
                    <h3 className="text-3xl md:text-4xl font-light text-white text-center">
                      {category.title}
                    </h3>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
