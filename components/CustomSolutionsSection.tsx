import { ArrowRight } from 'lucide-react';

export default function CustomSolutionsSection() {
  const marqueeText = "Not sure what's possible? Get in touch to find out.";
  
  return (
    <section className="relative w-full bg-[#1a3d2e] overflow-hidden">
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[900px] mx-auto">
          {/* Text Content */}
          <div className="space-y-8 text-center">
            <p className="text-sm md:text-base text-white/80 tracking-wide">
              Custom Solutions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              Brands that thrive invest in custom-designed packaging. Let us help bring your vision to life.
            </h2>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="border-t border-white/20 py-6 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 whitespace-nowrap">
              <span className="text-xl md:text-2xl font-light text-white">
                {marqueeText}
              </span>
              <ArrowRight className="w-6 h-6 text-white flex-shrink-0" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
