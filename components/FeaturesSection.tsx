import Image from 'next/image';

export default function FeaturesSection() {
  const topRowFeatures = [
    'Yucca Rewards',
    'Yucca Direct (B2B)',
    'Quality',
    'Branding',
    'Yucca Rewards',
    'Yucca Direct (B2B)',
    'Quality',
    'Branding',
  ];

  const bottomRowFeatures = [
    'Sustainable',
    'Innovation',
    'Partnerships',
    'Custom Packaging',
    'Sustainable',
    'Innovation',
    'Partnerships',
    'Custom Packaging',
  ];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section2.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Animated text rows */}
        <div className="space-y-8">
          {/* Top row - scrolling right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...topRowFeatures, ...topRowFeatures].map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground whitespace-nowrap px-4 md:px-6"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom row - scrolling left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...bottomRowFeatures, ...bottomRowFeatures].map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground whitespace-nowrap px-4 md:px-6"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
