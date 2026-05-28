import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Slider() {

  const slides = [

    {
      id: 1,

      title: "Build Smarter. Perform Better.",

      description:
        "Take your operations to the next level with custom machinery solutions tailored to your workflow.",

      image: "/Slider-01.webp",

      button1: {
        text: "Contact Us",
        link: "tel:+94770414713"
      },

      button2: {
        text: "Learn More",
        link: "/brandnew"
      },
    },

    {
      id: 2,

      title: "Smart Machinery. Stronger Performance.",

      description:
        "Upgrade your operations with reliable and high-performance industrial machinery.",

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
        "Preventive servicing and emergency machinery repair solutions for uninterrupted production.",

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

  // AUTO SLIDER
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 6000);

    return () => clearInterval(interval);

  }, [slides.length]);

  return (

    <div className="relative w-full overflow-hidden bg-black">

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`relative transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >

          {/* BACKGROUND IMAGE */}
          <img
            src={slide.image}
            alt={slide.title}
            className="
              w-full

              h-[520px]
              sm:h-[620px]
              md:h-[720px]

              object-cover
              object-center
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25"></div>

          {/* CONTENT */}
          <div
            className="
              absolute inset-0 z-30

              flex items-center

              overflow-hidden
            "
          >

            <div
              className="
                w-full
                max-w-7xl
                mx-auto

                px-5
                sm:px-8
                md:px-12
                lg:px-16

                py-10
                sm:py-16
              "
            >

              <div
                className="
                  max-w-[320px]
                  sm:max-w-xl
                  md:max-w-2xl
                "
              >

                {/* TITLE */}
                <h1
                  className="
                    text-[18px]
                    leading-[1.15]

                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl

                    font-bold
                    text-white

                    mb-3
                    sm:mb-6

                    drop-shadow-xl
                  "
                >
                  {slide.title}
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[11px]
                    leading-relaxed

                    sm:text-base
                    md:text-lg
                    lg:text-xl

                    text-gray-200

                    mb-5
                    sm:mb-8

                    max-w-full
                    sm:max-w-xl
                    md:max-w-2xl
                  "
                >
                  {slide.description}
                </p>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-wrap

                    gap-2
                    sm:gap-4

                    mt-2
                  "
                >

                  {/* BUTTON 1 */}
                  <Link
                    to={slide.button1.link}
                    className="
                      inline-flex
                      items-center
                      justify-center

                      bg-orange-600
                      hover:bg-orange-500

                      text-white

                      px-4
                      sm:px-8

                      py-2.5
                      sm:py-4

                      rounded-xl

                      text-xs
                      sm:text-base
                      lg:text-lg

                      font-semibold

                      transition-all
                      duration-300

                      shadow-xl

                      hover:scale-105
                    "
                  >

                    {slide.button1.text}

                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />

                  </Link>

                  {/* BUTTON 2 */}
                  <Link
                    to={slide.button2.link}
                    className="
                      inline-flex
                      items-center
                      justify-center

                      bg-white/10
                      backdrop-blur-md

                      hover:bg-white/20

                      text-white

                      px-4
                      sm:px-8

                      py-2.5
                      sm:py-4

                      rounded-xl

                      text-xs
                      sm:text-base
                      lg:text-lg

                      font-semibold

                      border
                      border-white/20

                      transition-all
                      duration-300
                    "
                  >

                    {slide.button2.text}

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

      {/* DOTS */}
      <div
        className="
          absolute

          bottom-5
          sm:bottom-7

          left-0
          right-0

          flex
          justify-center

          gap-3

          z-40
        "
      >

        {slides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "bg-orange-500 w-8 h-3"
                  : "bg-white/50 w-3 h-3"
              }
            `}
          ></button>

        ))}

      </div>

    </div>

  );

}