import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Slider() {

  const slides = [

    {
      id: 1,
      title: "Build Smarter. Perform Better.",

      description:
        "Take your operations to the next level with custom machinery solutions tailored to your unique workflow.",

      image: "/Slider-01.webp",

      button1: {
        text: "Contact us",
        link: "tel:+94770414713"
      },

      button2: {
        text: "Learn More",
        link: ""
      },
    },

    {
      id: 2,
      title: "Smart Machinery. Stronger Performance.",

      description:
        "Upgrade your operations with modern, reliable, and high-performance machinery built for tomorrow’s industry.",

      image: "/Slider-03.webp",

      button1: {
        text: "Shop Now",
        link: "/brandnew"
      },

      button2: {
        text: "Contact Us",
        link: "tel:+94770414713"
      },
    },

    {
      id: 3,
      title: "Maintenance That Powers Your Production",

      description:
        "From preventive servicing to emergency breakdown repairs — we keep your machinery reliable, efficient, and ready for every shift.",

      image: "/Slider-02.webp",

      button1: {
        text: "Book Now",
        link: "https://wa.me/94770414713"
      },

      button2: {
        text: "Contact Us",
        link: "tel:+94770414713"
      },
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

    <div className="relative w-full overflow-hidden bg-gray-900">

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`relative transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >

          {/* Full Responsive Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-auto object-contain"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/20"></div>

          {/* Content */}
          <div
            className="
              absolute inset-0 z-30
              flex flex-col justify-center
              px-4 sm:px-8 lg:px-12
              max-w-6xl mx-auto
            "
          >

            <h1
              className="
                text-xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                text-white
                mb-3 sm:mb-6
                leading-tight
                drop-shadow-lg
                max-w-full sm:max-w-3xl
              "
            >
              {slide.title}
            </h1>

            <p
              className="
                text-xs
                sm:text-lg
                md:text-xl
                text-gray-200
                mb-4 sm:mb-8
                max-w-full sm:max-w-2xl
                leading-relaxed
              "
            >
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

              <Link
                to={slide.button1.link}
                className="
                  inline-flex items-center justify-center
                  bg-orange-600 hover:bg-orange-500
                  text-white
                  px-4 sm:px-8
                  py-2 sm:py-4
                  rounded-lg
                  text-sm sm:text-lg
                  font-semibold
                  transition-all
                  transform hover:scale-105
                  shadow-md
                  w-fit
                "
              >
                {slide.button1.text}

                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />

              </Link>

              <Link
                to={slide.button2.link}
                className="
                  inline-flex items-center justify-center
                  bg-gray-800 hover:bg-gray-700
                  text-white
                  px-4 sm:px-8
                  py-2 sm:py-4
                  rounded-lg
                  text-sm sm:text-lg
                  font-semibold
                  transition-all
                  border border-gray-700
                  w-fit
                "
              >
                {slide.button2.text}
              </Link>

            </div>

          </div>

        </div>

      ))}

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center space-x-3 z-40">

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-orange-500 w-6"
                : "bg-gray-400"
            }`}
          ></button>

        ))}

      </div>

    </div>

  );

}