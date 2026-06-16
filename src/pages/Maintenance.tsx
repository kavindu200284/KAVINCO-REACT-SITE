import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Activity,
  CalendarCheck,
  ClipboardCheck,
  Gauge,
  Settings,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export default function Maintenance() {
  const services = [
    {
      title: "Emergency Breakdown Service",
      icon: Zap,
      description:
        "Machine stopped unexpectedly? Our team can visit, troubleshoot, identify the fault, and support repairs to restart production quickly.",
      route: "/maintenance/emergency",
      buttonText: "Emergency Support",
    },
    {
      title: "Maintenance Appointment Service",
      icon: CalendarCheck,
      description:
        "Book maintenance work in advance for repairs, inspections, modifications, and machinery servicing at planned service rates.",
      route: "/maintenance/scheduled",
      buttonText: "Book Maintenance",
    },
    {
      title: "Preventive Maintenance",
      icon: ClipboardCheck,
      description:
        "Reduce breakdowns, improve reliability, check spare parts, and extend machinery life with monthly PM plans.",
      route: "/maintenance/preventive",
      buttonText: "View PM Plans",
    },
  ];

  const benefits = [
    {
      title: "Industrial Experience",
      description: "Maintenance support for factory and production machinery.",
      icon: Settings,
    },
    {
      title: "Mechanical Support",
      description: "Repairs for bearings, gearboxes, conveyors, alignment, and more.",
      icon: Wrench,
    },
    {
      title: "Electrical Support",
      description: "Support for motors, panels, wiring, sensors, and control faults.",
      icon: Activity,
    },
    {
      title: "Reliable Response",
      description: "Practical support for urgent faults and planned maintenance work.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO */}
      <section className="relative h-[650px] overflow-hidden">
        <img
          src="/maintenance-banner.webp"
          alt="Industrial Maintenance"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex bg-orange-600/95 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Kavinco Maintenance Services
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Keep Your
                <br />
                Production Running
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Professional industrial maintenance solutions including
                emergency repairs, scheduled maintenance, and preventive
                maintenance plans.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+94770414713"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/94770414713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Select Your Maintenance Service
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service that best matches your machine condition,
              production schedule, and maintenance requirement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.route}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border-t-4 border-orange-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center justify-center bg-orange-600 group-hover:bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl transition-all duration-300">
                    {service.buttonText}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kavinco
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical industrial maintenance support for production machines,
              mechanical systems, and electrical faults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl border-t-4 border-orange-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <benefit.icon className="w-8 h-8" />
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE FLOW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Maintenance Support For Real Production Needs
              </h2>

              <p className="text-xl text-gray-600 mb-6">
                Whether your machine has stopped, needs planned repair work, or
                requires a monthly PM plan, we help you choose the right service
                before work begins.
              </p>

              <p className="text-xl text-gray-600">
                Our support can include troubleshooting, mechanical repair,
                electrical checking, sensor checking, lubrication, spare parts
                checking, and maintenance reporting.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <div className="space-y-5">
                {[
                  "Identify the machine condition",
                  "Select emergency, scheduled, or PM service",
                  "Confirm pricing and travel range",
                  "Carry out the maintenance work",
                  "Share findings and recommendations",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-gray-900">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Gauge className="w-14 h-14 mx-auto text-orange-500 mb-6" />

          <h2 className="text-5xl font-bold mb-6">
            Need Technical Support?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Contact Kavinco for industrial maintenance, machinery repairs, and
            preventive maintenance solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+94770414713"
              className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/94770414713"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
