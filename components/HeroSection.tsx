import CategoryCard from './CategoryCard';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection() {
  return (
    <section className="w-full min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Content */}
      <div className="w-full px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero headline */}
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground max-w-[650px] mb-12 lg:mb-16">
              Packaging that Performs. Innovated for Industry Leaders.
            </h1>
          </ScrollAnimation>

          {/* Category cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1100px]">
            <ScrollAnimation delay={0.1} className="h-full">
              <CategoryCard 
                title="Food Service"
                description="Your food service packaging is an extension of your brand experience. Have functional and on-brand items like cups, tubs, bowls, and more readily available for takeout, catering, and deli food. Choose standard containers, customised or designed from scratch."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.2} className="h-full">
              <CategoryCard 
                title="Food Processing"
                description="Ensure product safety and quality with packaging solutions designed for food processing. From vacuum-sealed pouches to industrial containers, we provide packaging that maintains freshness, extends shelf life, and meets regulatory standards for your food products."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.3} className="h-full">
              <CategoryCard 
                title="Agriculture"
                description="Protect your agricultural products with durable and reliable packaging. Our solutions are built to withstand the demands of farming and distribution, ensuring your produce, seeds, and agricultural supplies reach their destination in perfect condition."
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
