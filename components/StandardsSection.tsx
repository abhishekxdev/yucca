import ScrollAnimation from './ScrollAnimation';

export default function StandardsSection() {
  const leftStandards = [
    'FDA',
    'BRCGS',
    'GRS',
    'DIN CERTCO',
    'TÜV OK Compost Industrial',
    'ISO 14001',
    'ISO 45001',
  ];

  const rightStandards = [
    'EU 10/2011',
    'FSC',
    'BPI',
    'TÜV OK Compost Home',
    'ISO 9001',
    'ISO 22000',
    'FSSC 22000',
  ];

  return (
    <section id="standards" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Factory & Product Standards
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Our partners share our commitment to responsible practices, so you can trust that every product is held to the highest standards.
            </p>
          </div>
        </ScrollAnimation>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20">
          {/* Left Column */}
          <ScrollAnimation delay={0.1}>
            <div>
              {leftStandards.map((standard, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 py-6">
                    <span className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></span>
                    <span className="text-xl md:text-2xl font-light text-foreground">
                      {standard}
                    </span>
                  </div>
                  {index < leftStandards.length - 1 && (
                    <div className="border-t border-foreground/20" />
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Right Column */}
          <ScrollAnimation delay={0.2}>
            <div>
              {rightStandards.map((standard, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 py-6">
                    <span className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></span>
                    <span className="text-xl md:text-2xl font-light text-foreground">
                      {standard}
                    </span>
                  </div>
                  {index < rightStandards.length - 1 && (
                    <div className="border-t border-foreground/20" />
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
