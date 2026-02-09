import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
            Committed to Excellence, always Innovating
          </h2>

          {/* Right - Description and CTA */}
          <div className="space-y-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Remarkable packaging is our promise to you. What doesn’t meet Yucca standards is refined until it does.
            </p>
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 px-6 py-5 text-sm rounded-lg"
            >
              About us
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/20" />

        {/* Our Mission Section */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Title with bullet */}
          <div className="flex items-start gap-4">
            <span className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></span>
            <h3 className="text-3xl md:text-4xl font-light text-foreground">
              Our Mission
            </h3>
          </div>

          {/* Right - Description */}
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            We provide world-class, compliant packaging from trusted global partners to food service, food processing, and agricultural businesses across the globe.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/20" />

        {/* Our Vision Section */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Title with bullet */}
          <div className="flex items-start gap-4">
            <span className="w-2 h-2 bg-foreground rounded-full mt-3 flex-shrink-0"></span>
            <h3 className="text-3xl md:text-4xl font-light text-foreground">
              Our Vision
            </h3>
          </div>

          {/* Right - Description */}
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            To be the trusted, industry-leading packaging supplier, known for ethical practices, reliable supply and dedication to sustainable innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
