import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ClipboardCheck,
  Droplets,
  Gauge,
  ListChecks,
  PackageSearch,
  PlugZap,
  RefreshCw,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function PreventiveMaintenance() {
  const plans = [
    {
      name: "Single Visit Plan",
      visits: "1 Visit Per Month",
      oneMonthPrice: "Rs. 16,500",
      threeMonthPrice: "Rs. 15,000",
    },
    {
      name: "Double Visit Plan",
      visits: "2 Visits Per Month",
      oneMonthPrice: "Rs. 31,900",
      threeMonthPrice: "Rs. 29,000",
      featured: true,
    },
    {
      name: "Triple Visit Plan",
      visits: "3 Visits Per Month",
      oneMonthPrice: "Rs. 47,300",
      threeMonthPrice: "Rs. 43,000",
    },
  ];

  const includedItems = [
    {
      title: "Pneumatic Leakage Testing",
      description: "Check air lines, valves, cylinders, fittings, and leakage points.",
      icon: Gauge,
    },
    {
      title: "Oil Leakage Checking",
      description: "Inspect oil leaks around gearboxes, drives, seals, and moving parts.",
      icon: Droplets,
    },
    {
      title: "Bearing Check",
      description: "Check bearing noise, heat, vibration, lubrication, and wear condition.",
      icon: RefreshCw,
    },
    {
      title: "Electrical Checking",
      description: "Inspect panels, motors, wiring, connections, overloads, and protection devices.",
      icon: PlugZap,
    },
    {
      title: "Sensor Checking",
      description: "Verify sensor operation, alignment, mounting, wiring, and response condition.",
      icon: Settings,
    },
    {
      title: "Lubrication Work",
      description: "Apply or recommend lubricant for required machine points during PM work.",
      icon: Wrench,
    },
    {
      title: "Spare Parts List Checking",
      description: "Check available spare parts and prepare a recommended spare parts list.",
      icon: PackageSearch,
    },
    {
      title: "Replacement Part Identification",
      description: "Identify worn or damaged parts that should be replaced before failure.",
      icon: ListChecks,
    },
    {
      title: "Machine Condition Report",
      description: "Record maintenance findings, completed work, risks, and future recommendations.",
      icon: ClipboardCheck,
    },
  ];

  const reportItems = [
    "Machine condition assessment",
    "Pneumatic leakage findings",
    "Oil leakage findings",
    "Bearing condition notes",
    "Electrical and sensor checking results",
    "Lubrication work completed",
    "Spare parts checked during PM",
    "Recommended replacement parts",
    "Future maintenance recommendations",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO */}
      <section className="relative h-[650px] overflow-hidden">
        <img
          src="/preventive-maintenance.webp"
          alt="Preventive Maintenance"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <div className="inline-flex bg-orange-600/95 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Preventive Maintenance Service
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Prevent Breakdowns
                <br />
                Before They Happen
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Reduce downtime, improve machine reliability, and extend
                equipment life with a professional preventive maintenance
                program.
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

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Preventive Maintenance Programs
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Before starting a PM plan, Kavinco prepares a maintenance
              approach based on machine type, machine quantity, production
              load, operating conditions, and critical machine components.
            </p>
          </div>
        </div>
      </section>

      {/* PM PLANS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Preventive Maintenance Plans
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4">
              Every plan includes preventive maintenance checking, spare parts
              checking, and a maintenance report. When you get a PM service,
              we consider you a registered customer for emergency service
              support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.featured ? "lg:scale-105" : ""
                }`}
              >
                <h3 className="text-3xl font-bold mb-3">
                  {plan.name}
                </h3>

                <p className="text-gray-600 text-lg mb-4">
                  {plan.visits}
                </p>

                <div className="bg-gray-100 rounded-2xl p-5 mb-5">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    One-month plan
                  </p>

                  <div className="text-4xl font-bold text-gray-900">
                    {plan.oneMonthPrice}
                  </div>

                  <p className="text-gray-600 mt-2">
                    Per month
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-5 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    3-month plan price
                  </p>

                  <div className="text-4xl font-bold text-orange-600">
                    {plan.threeMonthPrice}
                  </div>

                  <p className="text-gray-700 mt-2">
                    Per month when paid for 3 months
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Is Included In PM
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              During preventive maintenance, our team checks the machine
              condition, identifies replacement parts, performs required basic
              lubrication work, and prepares a report for your maintenance
              record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-orange-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Maintenance Report After Every Visit
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              After PM work, customers receive a report showing what we checked,
              what we did, what issues were identified, and which spare parts
              should be prepared or replaced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-600"
              >
                <div className="flex gap-3">
                  <ShieldCheck className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Important Information
          </h2>

          <div className="space-y-4 text-xl">
            <p>
              PM plan service range is within 50 km from Kavinco - Moratuwa.
            </p>

            <p>
              Plan prices are per technician and based on the selected monthly
              PM visit count.
            </p>

            <p>
              When you get a PM service, we consider you are registered customer
              for emergency services. Emergency labour and traveling charges
              are billed separately when emergency work is required.
            </p>

            <p>
              PM schedules are customized according to machine type,
              production load, and customer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Protect Your Production
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Contact Kavinco to develop a preventive maintenance plan tailored
            to your machinery and production requirements.
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
