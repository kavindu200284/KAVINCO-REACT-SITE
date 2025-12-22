import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

export default function GalleryCarousel({ images }: Props) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const visibleCount = 3;
  const half = Math.floor(visibleCount / 2);

  const prev = () => setActive((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setActive((prev) => (prev + 1) % images.length);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      next();
    }
    if (touchEnd - touchStart > 75) {
      // Swiped right
      prev();
    }
  };

  const addWatermark = (src: string) => src;

  return (
    <section className="relative w-full py-16 bg-white">
      {/* Desktop Horizontal Carousel */}
      <div className="hidden md:flex justify-center items-center relative w-full overflow-hidden" style={{ height: "500px" }}>
        {images.map((img, index) => {
          let offset = index - active;
          if (offset < -Math.floor(images.length / 2)) offset += images.length;
          if (offset > Math.floor(images.length / 2)) offset -= images.length;

          if (Math.abs(offset) > half) return null;

          const scale = offset === 0 ? 1 : 0.85;
          const zIndex = offset === 0 ? 20 : 10;
          const opacity = offset === 0 ? 1 : 0.5;
          const border = offset === 0 ? "6px solid #ff6600" : "none";

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 rounded-xl shadow-2xl overflow-hidden"
              style={{
                transform: `translateX(${offset * 380}px) scale(${scale})`,
                zIndex,
                opacity,
                width: "350px",
                height: "450px",
                border,
              }}
            >
              <img
                src={addWatermark(img)}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 text-white text-sm opacity-50 pointer-events-none">
                Kavinco
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel with 3 Images (center full, sides small) */}
      <div
        className="md:hidden relative w-full overflow-hidden"
        style={{ height: "450px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-full flex items-center justify-center">
          {images.map((img, index) => {
            const offset = index - active;
            if (Math.abs(offset) > half) return null;

            const scale = offset === 0 ? 1 : 0.65;
            const zIndex = offset === 0 ? 20 : 10;
            const opacity = offset === 0 ? 1 : 0.7;
            const border = offset === 0 ? "4px solid #ff6600" : "3px solid rgba(255, 255, 255, 0.5)";

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 rounded-lg overflow-hidden shadow-lg"
                style={{
                  transform: `translateX(${offset * 180}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  width: "280px",
                  height: "380px",
                  border,
                  boxShadow: offset === 0 
                    ? "0 10px 30px rgba(0, 0, 0, 0.3)" 
                    : "0 5px 15px rgba(255, 255, 255, 0.4)",
                }}
              >
                <img
                  src={addWatermark(img)}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 text-white text-xs opacity-50 pointer-events-none">
                  Kavinco
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons - Desktop */}
      <div className="hidden md:flex justify-center gap-6 mt-10">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Navigation Buttons - Mobile */}
      <div className="md:hidden flex justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}