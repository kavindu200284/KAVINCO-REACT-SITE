import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Empower Your Business",
      description:
        "Upgrade your workflow with next-gen automation tools designed to boost efficiency and reduce downtime.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
      button1: { text: "Explore", link: "/brandnew" },
      button2: { text: "Learn More", link: "/blog" },
    },
    {
      id: 2,
      title: "Industrial Solutions for the Future",
      description:
        "From spare parts to full systems — discover the best equipment for your manufacturing needs.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
      button1: { text: "Shop Now", link: "/shop" },
      button2: { text: "Contact Us", link: "/contact" },
    },
    {
      id: 3,
      title: "Power Up Your Operations",
      description:
        "Stay ahead with reliable, high-performance machines built for long-term performance and innovation.",
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02ec?auto=format&fit=crop&w=1600&q=80",
      button1: { text: "Get Started", link: "/signup" },
      button2: { text: "Sign In", link: "/login" },
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[85vh] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          {/* Top gradient overlay (darker at top, fades to transparent) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-30 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-md transition-all">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed transition-all">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to={slide.button1.link}
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-md"
              >
                {slide.button1.text}
                <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <Link
                to={slide.button2.link}
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all border border-gray-700"
              >
                {slide.button2.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-orange-500 w-6" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
