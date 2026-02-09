import { Button } from './ui/button';
import ScrollAnimation from './ScrollAnimation';

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        {/* Headline */}
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground max-w-[900px] mx-auto mb-8">
            Set the standard for packaging excellence in your industry. Let us help you make your products memorable.
          </h2>
        </ScrollAnimation>

        {/* CTA Button */}
        <ScrollAnimation delay={0.2}>
          <Button 
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base rounded-lg"
          >
            See products
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
