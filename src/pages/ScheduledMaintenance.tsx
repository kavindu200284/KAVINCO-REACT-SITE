import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Activity,
  Cog,
  Factory,
  Gauge,
  Hammer,
  RefreshCw,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function ScheduledMaintenance() {
  const travelCharges = [
    {
      distance: "Within 10 km",
      charge: "Rs. 1,500",
    },
    {
      distance: "Within 20 km",
      charge: "Rs. 2,500",
    },
    {
      distance: "Within 30 km",
      charge: "Rs. 3,400",
    },
    {
      distance: "Within 40 km",
      charge: "Rs. 4,500",
    },
    {
      distance: "Within 50 km",
      charge: "Rs. 5,000",
    },
  ];

  const activities = [
    {
      title: "Machine Repairs",
      description: "Troubleshooting and repair support for industrial machinery.",
      icon: Wrench,
    },
    {
      title: "Machine Modifications",
      description: "Mechanical and control improvements for existing machines.",
      icon: Settings,
    },
    {
      title: "Bearing Replacement",
      description: "Bearing inspection, replacement, and running condition checks.",
      icon: RefreshCw,
    },
    {
      title: "Electrical Repairs",
      description: "Wiring, sensors, motors, panels, and electrical fault repairs.",
      icon: Activity,
    },
    {
      title: "Motor Installation",
      description: "Motor fitting, alignment, connection, and operational testing.",
      icon: Gauge,
    },
    {
      title: "Gearbox Repairs",
      description: "Inspection, servicing, and repair support for gearbox systems.",
      icon: Cog,
    },
    {
      title: "Machine Alignment",
      description: "Alignment correction to reduce vibration and machine wear.",
      icon: ShieldCheck,
    },
    {
      title: "Production Line Improvements",
      description: "Support for smoother workflow and better production reliability.",
      icon: Factory,
    },
    {
      title: "General Machinery Servicing",
      description: "Planned servicing for mechanical and production equipment.",
      icon: Hammer,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/scheduled-maintenance.webp"
          alt="Scheduled Maintenance"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex bg-orange-600/95 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Scheduled Maintenance Service
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Plan Your
                <br />
                Maintenance & Save
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Schedule maintenance work in advance and benefit from lower
                rates compared to emergency breakdown services.
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Planned Maintenance Support
            </h2>

            <p className="text-xl text-gray-600">
              If your machine requires repairs, modifications, inspections, or
              maintenance that can be planned in advance, Scheduled Maintenance
              is the most cost-effective option.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE OPTIONS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Service Options
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Hourly and daily scheduled maintenance charges are calculated as
              the labour rate plus the traveling charge for your distance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <h3 className="text-3xl font-bold mb-4">
                Hourly Service
              </h3>

              <div className="text-4xl font-bold text-orange-600 mb-4">
                Rs. 1,500
              </div>

              <p className="text-lg text-gray-700 font-semibold mb-2">
                Per hour / Per technician + traveling charges
              </p>

              <p className="text-gray-600 mb-6">
                Best for short troubleshooting, inspections, minor repairs, and
                technical support.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>Troubleshooting</li>
                <li>Inspections</li>
                <li>Minor repairs</li>
                <li>Technical support</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-orange-600">
              <h3 className="text-3xl font-bold mb-4">
                Daily Service
              </h3>

              <div className="text-4xl font-bold text-orange-600 mb-4">
                Rs. 8,750
              </div>

              <p className="text-lg text-gray-700 font-semibold mb-4">
                Per day / Per technician + traveling charges
              </p>

              <div className="bg-gray-100 p-4 rounded-xl mb-6">
                <p className="font-semibold text-gray-900">
                  Working Hours
                </p>

                <p className="text-gray-700">
                  8:00 AM - 5:30 PM
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl mb-6">
                <p className="font-semibold text-gray-900">
                  Overtime for Daily Service
                </p>

                <p className="text-gray-700">
                  Rs. 1,650 per additional hour after 5:30 PM
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li>Full day maintenance</li>
                <li>Factory shutdowns</li>
                <li>Major repairs</li>
                <li>Production line support</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <h3 className="text-3xl font-bold mb-4">
                Quotation Based
              </h3>

              <div className="text-4xl font-bold text-orange-600 mb-4">
                Fixed Cost
              </div>

              <p className="text-gray-600 mb-6">
                Pay only the approved quotation amount for large jobs, machine
                overhauls, upgrades, or project-based maintenance.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>Machine overhauls</li>
                <li>Large projects</li>
                <li>Factory upgrades</li>
                <li>Production improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL CHARGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Traveling Charges
              </h2>

              <p className="text-xl text-gray-600">
                Traveling charges are added to hourly and daily scheduled
                maintenance visits based on the distance from Kavinco -
                Moratuwa to the customer's production facility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <div className="space-y-4">
                {travelCharges.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4 border-b pb-3"
                  >
                    <span>{item.distance}</span>
                    <span className="font-semibold">
                      {item.charge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED SERVICES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Scheduled Maintenance Activities
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planned maintenance can include mechanical, electrical, and
              production-line support depending on the machine condition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item, index) => (
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

      {/* NOTICE */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Important Information
          </h2>

          <div className="space-y-4 text-xl">
            <p>
              All labour prices are per technician.
            </p>

            <p>
              Traveling charges apply for hourly and daily scheduled
              maintenance visits.
            </p>

            <p>
              Overtime charges apply only when a customer books daily service
              and work continues after 5:30 PM.
            </p>

            <p>
              Additional technicians can be assigned depending on project
              requirements.
            </p>

            <p>
              Kavinco reserves the right to recommend quotation-based service
              for large projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Book Your Maintenance Visit
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Contact Kavinco to schedule maintenance and keep your production
            running efficiently.
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
