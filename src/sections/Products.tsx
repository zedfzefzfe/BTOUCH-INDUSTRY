import { useEffect, useRef, useState } from 'react';
import { 
  HardHat, 
  Sofa, 
  Ruler, 
  Trophy, 
  CheckCircle, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { productsConfig } from '../config';
import type { Product } from '../config';

interface ProductsProps {
  onAddToCart?: (product: Product) => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  HardHat,
  Sofa,
  Ruler,
  Trophy,
  CheckCircle,
  MessageCircle,
};

const Products = ({ onAddToCart: _ }: ProductsProps) => {
  if (!productsConfig.heading && productsConfig.products.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show only first 4 items for the main grid (matching the image)
  const displayProducts = productsConfig.products.slice(0, 4);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#111010]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#8B5E2A] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {productsConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-[#e8e0d0] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {productsConfig.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[#e8e0d0]/70 text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {productsConfig.description}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms`, minHeight: '420px' }}
              >
                {/* Background image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transform: 'scale(1)', transitionTimingFunction: 'ease-out' }}
                />

                {/* Subtle dark vignette — very light so image shows clearly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30" />

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#8B5E2A]/30 group-hover:ring-[#8B5E2A]/80 transition-all duration-500" />

                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col">
                  {/* Gold divider */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#8B5E2A] to-[#c97a3a] mb-4 group-hover:w-14 transition-all duration-500" />

                  {/* Title */}
                  <h3 className="font-serif text-xl lg:text-[22px] text-white leading-snug mb-3 drop-shadow-lg group-hover:text-[#f5ede0] transition-colors duration-300" style={{ minHeight: '3rem' }}>
                    {product.name}
                  </h3>

                  {/* Description — fades in on hover */}
                  <p className="text-white/75 text-sm leading-relaxed mb-5 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-28 transition-all duration-500 ease-in-out drop-shadow">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={product.link || '#contact'}
                    className="inline-flex items-center gap-2 text-[#c97a3a] group-hover:text-white font-medium text-sm tracking-widest uppercase transition-colors duration-300"
                  >
                    <span className="relative">
                      Devis Gratuit
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        {productsConfig.viewAllText && displayProducts.length < productsConfig.products.length && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <a href="#contact" className="inline-block px-12 py-4 border-2 border-[#8B5E2A] text-[#8B5E2A] font-light tracking-widest text-sm hover:bg-[#8B5E2A] hover:text-[#e8e0d0] transition-all duration-300">
              {productsConfig.viewAllText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
