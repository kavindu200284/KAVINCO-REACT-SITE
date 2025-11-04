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
      title: "Product Management",
      type: "Software Service",
      description:
        "Manage your entire product catalog efficiently with our all-in-one platform.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Inventory Tracking",
      type: "Warehouse Solution",
      description:
        "Track your inventory and receive smart alerts when stock runs low.",
      image:
        "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Analytics & Reports",
      type: "Business Intelligence",
      description:
        "Make smart decisions with real-time analytics and advanced reporting tools.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Machine Maintenance",
      type: "Industrial Service",
      description:
        "Get your machines running smoothly with our expert maintenance services.",
      image:
        "https://images.pexels.com/photos/3856623/pexels-photo-3856623.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Custom Fabrication",
      type: "Manufacturing Service",
      description:
        "We design and build customized parts to fit your exact industrial needs.",
      image:
        "https://images.pexels.com/photos/3861851/pexels-photo-3861851.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Automation & PLC Systems",
      type: "Engineering Service",
      description:
        "Implement automation and control systems for better efficiency and accuracy.",
      image:
        "https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const youtubeVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3fumBcKC6RE",
    "https://www.youtube.com/embed/ZH2DGS3sJ6Y",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3fumBcKC6RE",
    "https://www.youtube.com/embed/ZH2DGS3sJ6Y",
    "https://www.youtube.com/embed/aqz-KE-bpKQ",
    "https://www.youtube.com/embed/ZH2DGS3sJ6Y",
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
              Explore our range of business and industrial solutions
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
                <div className="p-6">
                  <span className="text-orange-600 font-semibold uppercase text-sm tracking-wide">
                    {service.type}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 mt-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/gallery"
                    className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold transition-all"
                  >
                    View Gallery
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
        See our products, services, and customer stories
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
