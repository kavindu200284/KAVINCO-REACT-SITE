import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  watermarkUrl?: string;
  watermarkOpacity?: number; // Control opacity via prop only (0 - 1)
}

export default function GalleryCarousel({
  images,
  watermarkUrl,
  watermarkOpacity,
}: Props) {
  const [active, setActive] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 375
  );

  // default watermark
  const watermark = watermarkUrl ?? "/logo.png";
  const wmOpacity = typeof watermarkOpacity === "number"
    ? Math.max(0, Math.min(1, watermarkOpacity))
    : 0.18;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setActive((s) => (s - 1 + images.length) % images.length);
  const next = () => setActive((s) => (s + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = touchStartX - endX;
    if (delta > 50) next();
    else if (delta < -50) prev();
    setTouchStartX(null);
  };

  const getIndexFromOffset = (offset: number) =>
    (active + offset + images.length) % images.length;

  const mobileCenterWidth = Math.min(420, Math.max(260, windowWidth - 48));
  const mobileCenterHeight = 380;
  const mobileSideScale = 0.6;
  const mobileSideHeight = Math.round(mobileCenterHeight * mobileSideScale);
  const mobileDistance = Math.max(140, Math.round(mobileCenterWidth * 0.6));

  const desktopItemWidth = 350;
  const desktopDistance = 380;

  const watermarkStyle = (containerHeight: number) => ({
    position: "absolute" as const,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    height: `${Math.round(containerHeight / 3)}px`,
    width: "auto",
    opacity: wmOpacity,
    pointerEvents: "none" as const,
    mixBlendMode: "normal" as const,
  });

  return (
    <section className="relative w-full py-10 bg-white">
      {/* Desktop: Horizontal carousel (3 visible, center big) */}
      <div
        className="hidden md:flex justify-center items-center relative w-full overflow-hidden"
        style={{ height: 520 }}
      >
        {[-1, 0, 1].map((offset) => {
          const index = getIndexFromOffset(offset);
          const isCenter = offset === 0;
          const scale = isCenter ? 1 : 0.85;
          const zIndex = isCenter ? 30 : 10;
          const opacity = isCenter ? 1 : 0.6;
          const border = isCenter ? "6px solid #ff6600" : "none";
          const containerHeight = 440;

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 rounded-xl overflow-hidden shadow-2xl"
              style={{
                left: "50%",
                transform: `translateX(calc(-50% + ${offset * desktopDistance}px)) scale(${scale})`,
                zIndex,
                opacity,
                width: `${desktopItemWidth}px`,
                height: containerHeight,
                border,
                background: "#fff",
              }}
            >
              <img
                src={images[index]}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover"
              />
              <img
                src={watermark}
                alt="Kavinco watermark"
                style={watermarkStyle(containerHeight)}
                aria-hidden
              />
            </div>
          );
        })}
      </div>

      {/* Mobile: Always show 3 items (left small, center full, right small), overflow clipped */}
      <div
        className="md:hidden relative w-full overflow-hidden"
        style={{ height: mobileCenterHeight + 40 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-full">
          {[-1, 0, 1].map((offset) => {
            const index = getIndexFromOffset(offset);
            const isCenter = offset === 0;

            const width = isCenter
              ? mobileCenterWidth
              : Math.round(mobileCenterWidth * mobileSideScale);
            const height = isCenter ? mobileCenterHeight : mobileSideHeight;

            const zIndex = isCenter ? 30 : 10;
            const opacity = isCenter ? 1 : 0.95;
            const border = isCenter ? "5px solid #ff6600" : "2px solid rgba(255,255,255,0.9)";
            const boxShadow = isCenter ? "0 12px 40px rgba(0,0,0,0.25)" : "0 6px 12px rgba(255,255,255,0.7)";

            return (
              <div
                key={index}
                className="absolute transition-all duration-400 rounded-lg overflow-hidden"
                style={{
                  top: "50%",
                  left: `calc(50% + ${offset * mobileDistance}px)`,
                  transform: "translate(-50%, -50%)",
                  zIndex,
                  opacity,
                  width: `${width}px`,
                  height,
                  border,
                  boxShadow,
                  background: "#fff",
                }}
              >
                <img src={images[index]} alt={`gallery-${index}`} className="w-full h-full object-cover" />
                <img src={watermark} alt="Kavinco watermark" style={watermarkStyle(height)} aria-hidden />
                {!isCenter && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.18))",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls - Desktop */}
      <div className="hidden md:flex justify-center gap-6 mt-6">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          aria-label="previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          aria-label="next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Controls - Mobile */}
      <div className="md:hidden flex justify-center gap-6 mt-4">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          aria-label="previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          aria-label="next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}