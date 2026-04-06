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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {displayProducts.map((product, index) => {
            const IconComponent = product.icon ? iconMap[product.icon] : null;
            return (
              <div
                key={product.id}
                className={`group h-full flex flex-col relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Gradient background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E2A]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                {/* Card Container */}
                <div className="relative h-full flex flex-col bg-gradient-to-br from-[#1f1f1f] to-[#161616] border border-[#8B5E2A]/30 group-hover:border-[#8B5E2A]/70 p-8 rounded-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#8B5E2A]/20 group-hover:-translate-y-2">
                  {/* Icon Container with Background */}
                  {IconComponent && (
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        {/* Animated background circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E2A]/20 to-[#8B5E2A]/5 rounded-full blur-md group-hover:from-[#8B5E2A]/40 group-hover:to-[#8B5E2A]/15 transition-all duration-500" />
                        
                        {/* Icon with enhanced styling */}
                        <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-[#8B5E2A]/40 group-hover:border-[#8B5E2A] bg-[#8B5E2A]/5 group-hover:bg-[#8B5E2A]/15 transition-all duration-500">
                          <IconComponent
                            size={48}
                            strokeWidth={1.2}
                            className="text-[#8B5E2A] group-hover:text-[#c97a3a] group-hover:scale-125 transition-all duration-500 drop-shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-serif text-xl lg:text-2xl text-[#e8e0d0] mb-4 text-center leading-tight group-hover:text-white transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Decorative line separator */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#8B5E2A]/0 via-[#8B5E2A] to-[#8B5E2A]/0 mx-auto mb-6 group-hover:w-16 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[#e8e0d0]/70 text-sm mb-8 flex-grow group-hover:text-[#e8e0d0]/80 transition-colors duration-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Read More Link with animated underline */}
                  <a
                    href={product.link || '#contact'}
                    className="inline-flex items-center gap-2 text-[#8B5E2A] group-hover:text-[#c97a3a] transition-colors duration-300 font-light text-sm tracking-wide relative"
                  >
                    <span className="relative">
                      Demander Votre Devis Gratuit
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5E2A] to-[#c97a3a] group-hover:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
