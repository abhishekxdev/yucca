import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description?: string;
}

export default function CategoryCard({ title, description }: CategoryCardProps) {
  return (
    <button className="group relative bg-white/20 backdrop-blur-md rounded-3xl p-8 hover:bg-white transition-all duration-300 border border-white/40 hover:border-transparent aspect-square overflow-hidden">
      {/* Default state - Title centered */}
      <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-normal text-foreground text-center">
          {title}
        </h3>
      </div>

      {/* Hover state - Description and CTA */}
      {description && (
        <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between text-left h-full">
          {/* Description text */}
          <p className="text-sm leading-relaxed text-foreground mb-6">
            {description}
          </p>

          {/* Divider and CTA */}
          <div className="space-y-4 flex-shrink-0">
            <div className="border-t border-foreground" />
            <div className="flex items-center justify-between text-foreground">
              <span className="text-sm font-normal">Tell me more</span>
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
