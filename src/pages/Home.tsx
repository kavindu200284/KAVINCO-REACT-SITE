import Header from "../components/Header";
import Slider from "../components/Slider";
import { Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance for instant access to your data and operations.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your business information.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description:
        "Track your progress with detailed insights and reporting.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with your team in real-time.",
    },
  ];

  const services = [
    {
      title: "Industrial Machinery Repair & Maintenance,",
      type: "",
      description:
        "From downtime to uptime—we deliver expert care that keeps your industry moving.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/Industrial-machinery-repair-services.jpg",
    },
    {
      title: "Customized Machinery Manufacturing",
      type: "",
      description:
        "From idea to implementation—we design machines that drive unstoppable growth.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/pngtree-spotless-cleanroom-environment-with-transparent-protective-covers-over-precision-machinery-representing-image_19868372.webp",
    },
    {
      title: "Machinery Modification",
      type: "",
      description:
        "From old design to new power—we upgrade and modify machinery to match modern demands.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/filling.jpg",
    },
    {
      title: "Spare Parts Fabrication",
      type: "",
      description:
        "From wear to repair—we craft custom spare parts that keep your machines running strong.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/pngtree-cnc-machine-working-with-workpiece-on-smart-factory-image_15739298.jpg",
    },
    {
      title: "Machinery Relocation & Transport:",
      type: "",
      description:
        "Seamless relocation, secure transport—keeping your operations on track.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/trasport.jpg",
    },
    {
      title: "Machinery & Machinery Parts Import",
      type: "",
      description:
        "High-quality machinery and parts imported to keep your business moving.",
      image:
        "https://kavinco.s3.us-east-1.amazonaws.com/trasport+(2).jpg",
    },
  ];

  const youtubeVideos = [
  "https://www.youtube.com/embed/M6nwTW07PqA",
  "https://www.youtube.com/embed/eFhwDvz1VRk",
  "https://www.youtube.com/embed/2xO1Q94r-CA",
  "https://www.youtube.com/embed/8boBCozzrcE",
  "https://www.youtube.com/embed/sLtrQAMQHzA",
  "https://www.youtube.com/embed/5KHrMA0EzeM",
  "https://www.youtube.com/embed/ypB5tAqBWaI",
  "https://www.youtube.com/embed/To10oiPby9s"
];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Slider />

      {/* WHY CHOOSE SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kavinco?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
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
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col items-center border-t-4 border-orange-600 text-orange-600 px-5 py-2 text-center">
                  <span className="text-orange-600 font-semibold uppercase text-sm tracking-wide">
                    {service.type}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 mt-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                   <Link
                    to="/gallery"
                    className="inline-block border-2 border-orange-600 text-orange-600 bg-white 
                                hover:bg-orange-600 hover:text-white px-5 py-2 rounded-lg 
                               font-semibold transition-all duration-300"
>                       View Gallery
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO GRID */}
    {/* YOUTUBE VIDEO GRID */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Watch Our Work in Action
      </h2>
      <p className="text-lg text-gray-600">
        Discover what we build, how we do it, and the success stories we power.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {youtubeVideos.map((url, index) => (
        <div
          key={index}
          className="relative w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
        >
          {/* Maintain 16:9 ratio */}
          <div className="relative pb-[56.25%]">
            <iframe
              src={url}
              title={`YouTube video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
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
