import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { dressingConfig } from '../config';

const Dressing = () => {
  if (!dressingConfig.heading) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          // Start playing the first video when section is visible
          if (video1Ref.current) {
            video1Ref.current.play();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video playback sequence
  const handleVideo1End = () => {
    setCurrentPlayingVideo(2);
    if (video2Ref.current) {
      video2Ref.current.play();
    }
  };

  const handleVideo2End = () => {
    setCurrentPlayingVideo(1);
    if (video1Ref.current) {
      video1Ref.current.play();
    }
  };

  return (
    <section
      id="dressing"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111010 0%, #1a1a1a 50%, #111010 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5E2A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5E2A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.3em] text-[#8B5E2A] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {dressingConfig.tag}
          </span>
          <h2
            className={`font-serif text-5xl md:text-6xl text-[#e8e0d0] mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {dressingConfig.heading}
          </h2>
          <div
            className={`h-1 w-24 bg-gradient-to-r from-[#8B5E2A] to-[#8B5E2A]/50 mx-auto mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          />
          <p
            className={`text-[#e8e0d0]/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {dressingConfig.description}
          </p>
        </div>

        {/* Content with Videos and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Text Section - Enhanced */}
          <div
            className={`lg:col-span-1 flex flex-col justify-center gap-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="space-y-2">
              <div className="h-1 w-12 bg-[#8B5E2A]" />
              <p className="text-[#8B5E2A] text-sm uppercase tracking-[0.15em] font-medium">
                Nos Points Forts
              </p>
            </div>

            {dressingConfig.paragraphs.map((paragraph, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-2 w-1 h-10 bg-gradient-to-b from-[#8B5E2A] to-[#8B5E2A]/20" />
                <p className="text-[#e8e0d0]/85 text-base leading-relaxed font-light">
                  {paragraph}
                </p>
              </div>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8B5E2A] text-[#e8e0d0] font-light tracking-widest text-sm hover:bg-[#A67C3F] transition-all duration-300 rounded-sm w-fit shadow-lg hover:shadow-xl hover:shadow-[#8B5E2A]/20 transform hover:scale-105"
            >
              Demander un Devis
            </a>
          </div>

          {/* Videos Section - Premium Design */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div
              className={`group relative h-[450px] overflow-hidden rounded-xl transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '600ms' }}
              onMouseEnter={() => setHoveredVideo(1)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#8B5E2A]/30 group-hover:border-[#8B5E2A]/60 transition-all duration-500 z-10" />

              {/* Video */}
              <video
                ref={video1Ref}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                muted
                onEnded={handleVideo1End}
              >
                <source src={dressingConfig.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-5" />

              {/* Play Icon Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-15 transition-all duration-500 ${
                  hoveredVideo === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#8B5E2A] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Play size={32} className="text-[#e8e0d0] fill-[#e8e0d0] ml-1" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-[#e8e0d0] font-light text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Conception Intérieure
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-16 border-t-16 border-l-[#8B5E2A]/50 border-t-[#8B5E2A]/50 group-hover:border-l-[#8B5E2A] group-hover:border-t-[#8B5E2A] transition-colors duration-500 z-20" />
            </div>

            {/* Video 2 */}
            <div
              className={`group relative h-[450px] overflow-hidden rounded-xl transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '700ms' }}
              onMouseEnter={() => setHoveredVideo(2)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#8B5E2A]/30 group-hover:border-[#8B5E2A]/60 transition-all duration-500 z-10" />

              {/* Video */}
              <video
                ref={video2Ref}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                muted
                onEnded={handleVideo2End}
              >
                <source src={dressingConfig.video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-5" />

              {/* Play Icon Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-15 transition-all duration-500 ${
                  hoveredVideo === 2 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#8B5E2A] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Play size={32} className="text-[#e8e0d0] fill-[#e8e0d0] ml-1" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-[#e8e0d0] font-light text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Réalisation Qualité
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-16 border-t-16 border-l-[#8B5E2A]/50 border-t-[#8B5E2A]/50 group-hover:border-l-[#8B5E2A] group-hover:border-t-[#8B5E2A] transition-colors duration-500 z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dressing;
