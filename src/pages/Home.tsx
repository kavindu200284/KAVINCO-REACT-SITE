import Header from "../components/Header";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {

  // SERVICES LIST
  const services = [
    {
      title: "Industrial Machinery Repair & Maintenance",
      slug: "repair",
      description:
        "From downtime to uptime—we deliver expert care that keeps your industry moving.",
      image: "/Services-1.webp",
    },
    {
      title: "Customized Machinery Manufacturing",
      slug: "manufacturing",
      description:
        "From idea to implementation—we design machines that drive unstoppable growth.",
      image: "/Services-2.webp",
    },
    {
      title: "Machinery Modification",
      slug: "modification",
      description:
        "From old design to new power—we upgrade and modify machinery to match modern demands.",
      image: "/Services-3.webp",
    },
    {
      title: "Spare Parts Fabrication & Repair",
      slug: "spareparts",
      description:
        "From wear to repair—we craft custom spare parts that keep your machines running strong.",
      image: "/Services-4.webp",
    },
    {
      title: "Machinery Relocation & Transport",
      slug: "transport",
      description:
        "Seamless relocation, secure transport—keeping your operations on track.",
      image: "/Services-8.webp",
    },
    {
      title: "Machinery & Machinery Parts Import",
      slug: "import",
      description:
        "High-quality machinery and parts imported to keep your business moving.",
      image: "/Services-6.webp",
    },
  ];

  // YOUTUBE VIDEOS
  const youtubeVideos = [

    {
      url: "https://www.youtube.com/embed/M6nwTW07PqA",
      title: "Industrial Machinery installation",
      description:
        "Watch our Safe Trasportation and Machinery installation for factories and Industries.",
    },

    {
      url: "https://www.youtube.com/embed/eFhwDvz1VRk",
      title: "Industrial Machinery Repair",
      description:
        "From breakdown to breakthrough—watch us repair and restore industrial machinery to peak performance.",
    },

    {
      url: "https://www.youtube.com/embed/2xO1Q94r-CA",
      title: "Custom Machinery Manufacturing",
      description:
        "From concept to creation—watch us design and build custom machinery that powers industry success.",
    },

    {
      url: "https://www.youtube.com/embed/8boBCozzrcE",
      title: "Custom Size Mixing Tank Fabrication",
      description:
        "Custom fabricated mixing tanks and industrial vessels for chemical, food, and manufacturing processes.",
    },

    {
      url: "https://www.youtube.com/embed/sLtrQAMQHzA",
      title: "Custom Machinery Manufacturing",
      description:
        "Customized your machinery for own Industry and Business needs. ",
    },

    {
      url: "https://www.youtube.com/embed/5KHrMA0EzeM",
      title: "Safety System Installation for Machinery",
      description:
        "Industrial machinery safety system installation and integration for secure and compliant operations.",
   },

    {
      url: "https://www.youtube.com/embed/ypB5tAqBWaI",
      title: "Linior Cutter Fabrication",
      description:
        "Custom fabricated linior cutters for precise and efficient industrial cutting operations.",
    },

    {
      url: "https://www.youtube.com/embed/To10oiPby9s",
      title: "Safety System Installation for Machinery",
      description:
        "Industrial machinery safety system installation and integration for secure and compliant operations.",
    },

  ];

  return (

    <div className="min-h-screen bg-gray-100">

      <Header />

      <Slider />


{/* PREMIUM MAINTENANCE BOOKING SECTION */}
<section className="py-16 sm:py-24 bg-white overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
      className="
        group
        relative
        block
        overflow-hidden
        rounded-[28px]
        sm:rounded-[36px]
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >

      {/* Background Image */}
      <div className="relative h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden">

        <img
          src="/maintenance-banner.webp"
          alt="Industrial Machinery Maintenance"
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden"></div>

      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end sm:items-center">

        <div
          className="
            w-full
            px-5
            pb-8
            sm:px-12
            sm:pb-0
            lg:px-16
            max-w-3xl
          "
        >

          {/* Tag */}
          <div
            className="
              inline-flex
              items-center
              bg-orange-600/95
              backdrop-blur-md
              text-white
              px-4
              py-2
              rounded-full
              text-xs sm:text-sm
              font-semibold
              mb-4 sm:mb-6
              shadow-lg
            "
          >
            Industrial Machinery Maintenance
          </div>

          {/* Title */}
          <h2
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              mb-4 sm:mb-6
              drop-shadow-xl
            "
          >
            Book Your
            <br />
            Maintenance Service
          </h2>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-lg
              lg:text-xl
              text-gray-200
              leading-relaxed
              mb-6 sm:mb-8
              max-w-2xl
            "
          >
            Schedule preventive maintenance, emergency repairs,
            inspections and machinery servicing to keep your
            production running without costly downtime.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">

            {/* Book Button */}
            <button
              className="
                inline-flex
                items-center
                justify-center
                bg-orange-600
                hover:bg-orange-500
                text-white
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-2xl
                text-sm
                sm:text-lg
                font-semibold
                shadow-2xl
                transition-all
                duration-300
                w-full sm:w-auto
              "
            >
              Book Service →
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94770414713"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-white/15
                backdrop-blur-md
                border border-white/20
                hover:bg-white/25
                text-white
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-2xl
                text-sm
                sm:text-lg
                font-semibold
                transition-all
                duration-300
                shadow-xl
                w-full sm:w-auto
              "
            >
              Emergency Repair
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>



      {/* PREMIUM BRANDNEW MACHINERY SECTION */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/brandnew"
            className="
              group
              relative
              block
              overflow-hidden
              rounded-[28px]
              sm:rounded-[36px]
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >

            {/* Background Image */}
            <div className="relative h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden">

              <img
                src="/Machinery-01.webp"
                alt="Brand New Machinery"
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20"></div>

              {/* Mobile Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden"></div>

            </div>

            {/* Content */}
            <div
              className="
                absolute
                inset-0
                flex
                items-end sm:items-center
              "
            >

              <div
                className="
                  w-full
                  px-5
                  pb-8
                  sm:px-12
                  sm:pb-0
                  lg:px-16
                  max-w-3xl
                "
              >

                {/* Tag */}
                <div
                  className="
                    inline-flex
                    items-center
                    bg-orange-600/95
                    backdrop-blur-md
                    text-white
                    px-4
                    py-2
                    rounded-full
                    text-xs sm:text-sm
                    font-semibold
                    mb-4 sm:mb-6
                    shadow-lg
                  "
                >
                  Brand New Industrial Machinery
                </div>

                {/* Title */}
                <h2
                  className="
                    text-3xl
                    sm:text-5xl
                    lg:text-6xl
                    font-bold
                    text-white
                    leading-tight
                    mb-4 sm:mb-6
                    drop-shadow-xl
                  "
                >
                  Modern Machinery
                  <br />
                  For Smart Industries
                </h2>

                {/* Description */}
                <p
                  className="
                    text-sm
                    sm:text-lg
                    lg:text-xl
                    text-gray-200
                    leading-relaxed
                    mb-6 sm:mb-8
                    max-w-2xl
                  "
                >
                  Discover high-performance industrial machinery engineered
                  for production, automation, and manufacturing excellence.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">

                  {/* Explore Button */}
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      bg-orange-600
                      group-hover:bg-orange-500
                      text-white
                      px-6
                      sm:px-8
                      py-3
                      sm:py-4
                      rounded-2xl
                      text-sm
                      sm:text-lg
                      font-semibold
                      shadow-2xl
                      transition-all
                      duration-300
                      backdrop-blur-md
                      w-full sm:w-auto
                    "
                  >
                    Shop →
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/94770414713"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      bg-white/15
                      backdrop-blur-md
                      border border-white/20
                      hover:bg-white/25
                      text-white
                      px-6
                      sm:px-8
                      py-3
                      sm:py-4
                      rounded-2xl
                      text-sm
                      sm:text-lg
                      font-semibold
                      transition-all
                      duration-300
                      shadow-xl
                      w-full sm:w-auto
                    "
                  >
                    Contact Us
                  </a>

                </div>

              </div>

            </div>

          </Link>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>

            <p className="text-xl text-gray-600">
              Expert services that turn challenges into seamless operations.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                  group overflow-hidden rounded-xl shadow-lg
                  hover:shadow-2xl transition-all
                  transform hover:-translate-y-2 bg-white
                "
              >

                <div className="relative h-48 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition-transform duration-300
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                </div>

                <div className="p-6 flex flex-col items-center border-t-4 border-orange-600 text-center">

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 mt-1">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <Link
                    to={`/gallery/${service.slug}`}
                    className="
                      inline-flex items-center gap-2
                      border-2 border-orange-600
                      text-orange-600 bg-white
                      hover:bg-orange-600 hover:text-white
                      px-5 py-2 rounded-lg
                      font-semibold transition-all duration-300
                    "
                  >
                    View Gallery
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PREMIUM YOUTUBE VIDEO SECTION */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Watch Our Work in Action
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover real machinery projects, fabrication processes,
              industrial solutions, and innovation powered by Kavinco Automation.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {youtubeVideos.map((video, index) => (

              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  transform
                  hover:-translate-y-2
                  border-t-4 border-orange-600
                "
              >

                {/* VIDEO */}
                <div className="relative w-full overflow-hidden">

                  <div className="relative pb-[56.25%]">

                    <iframe
                      src={video.url}
                      title={`YouTube video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="
                        absolute
                        top-0
                        left-0
                        w-full
                        h-full
                      "
                    ></iframe>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[70px]">
                    {video.description}
                  </p>

                  <a
                    href={video.url.replace("/embed/", "/watch?v=")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      mt-5
                      border-2 border-orange-600
                      text-orange-600
                      hover:bg-orange-600
                      hover:text-white
                      px-5 py-2
                      rounded-lg
                      font-semibold
                      transition-all
                      duration-300
                    "
                  >
                    Watch Video
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}