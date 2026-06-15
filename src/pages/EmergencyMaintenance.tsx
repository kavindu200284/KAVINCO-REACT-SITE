import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EmergencyMaintenance() {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/emergency-breakdown.webp"
          alt="Emergency Breakdown Service"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex bg-orange-600/95 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Emergency Breakdown Service
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Production Stopped?
                <br />
                We Are Ready To Help.
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Fast-response industrial machinery troubleshooting and repair
                service designed to restore production as quickly as possible.
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
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Service Pricing
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your bill is calculated clearly using labour hours and the
              traveling charge for your distance.
            </p>
          </div>

          <div className="bg-white border-t-4 border-orange-600 rounded-2xl p-8 text-center mb-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Billing Formula
            </h3>

            <p className="text-2xl lg:text-4xl font-bold text-gray-900">
              Labour hours x Rs. 1,750 + Traveling charge = Your bill
            </p>

            <p className="text-gray-700 mt-4">
              Labour hours are counted from the actual time used for
              troubleshooting, diagnosis, and repair work at your facility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-6">
                Labour Rate
              </h3>

              <div className="text-5xl font-bold text-orange-600 mb-4">
                Rs. 1,750
              </div>

              <p className="text-lg text-gray-600">
                Per hour / Per technician
              </p>

              <p className="text-gray-600 mt-4">
                Labour is charged for the actual time spent identifying faults,
                troubleshooting, and repairing the machine.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-6">
                Traveling Charge Range
              </h3>

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

      {/* SERVICE DETAILS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What This Service Includes
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              This service is used to identify machine faults, troubleshoot the
              issue, and repair the machine quickly so production can restart
              with minimum downtime.
            </p>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              If you do not have an in-house engineering team and you are facing
              an emergency breakdown, you do not need to spend time searching
              for separate repair support. Kavinco  is ready to visit,
              identify the problem, and solve it as soon as possible. You do
              not need to manage emergency repair work alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600">
              <h3 className="font-bold text-xl mb-3">
                Fast Response
              </h3>
              <p>
                Emergency support when production stops or a machine fault
                affects your factory operation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600">
              <h3 className="font-bold text-xl mb-3">
                Troubleshooting
              </h3>
              <p>
                Fault finding, machine diagnosis, sensor checks, control
                system inspection, and root-cause identification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600">
              <h3 className="font-bold text-xl mb-3">
                Mechanical Repair
              </h3>
              <p>
                Bearings, gearboxes, conveyors, machine alignment,
                fabrication support, and general mechanical repairs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-600">
              <h3 className="font-bold text-xl mb-3">
                Electrical & Electronic Repair
              </h3>
              <p>
                Motors, control panels, sensors, wiring faults, electronic
                controls, PLC-related issues, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TYPES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Registered & Unregistered Customers
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 shadow-lg border-t-4 border-green-600">
              <h3 className="text-3xl font-bold mb-4">
                Registered Customers
              </h3>

              <ul className="space-y-3">
                <li>Priority support</li>
                <li>Registration valid for 3 months</li>
                <li>24h/7 Day support </li>
                <li> Maintenance records</li>
                <li> Zero Deposit Needed</li>
              </ul>

              <div className="mt-6 text-3xl font-bold text-green-700">
                Registration Fee: Rs. 3,600
              </div>

              <a
                href="https://wa.me/94770414713?text=Hi%2C%20I%20need%20to%20register%20my%20company%20for%20emergency%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl transition-all duration-300"
              >
                Register Customer
              </a>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 shadow-lg border-t-4 border-red-600">
              <h3 className="text-3xl font-bold mb-4">
                Unregistered Customers
              </h3>

              <ul className="space-y-3">
                <li>Weekdays only</li>
                <li>Advance payment required</li>
                <li>Team departs after deposit confirmation</li>
                <li>Advance payment is deducted from the final invoice</li>
              </ul>

              <div className="mt-6 text-3xl font-bold text-red-700">
                Advance Payment: Rs. 2,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Important Notice
          </h2>

          <p className="text-xl mb-4">
            Emergency Breakdown Service is available only within a 50km radius
            from Kavinco- Moratuwa.
          </p>

          <p className="text-xl mb-4">
            Distance is calculated from Kavinco premises to the customer's
            production facility.
          </p>

          <p className="text-xl mb-4">
            Use this service when you need fast troubleshooting to identify the
            machine fault and restart production as soon as possible.
          </p>

          <p className="text-xl font-bold">
            Labour charges are per technician. Traveling charges are added once
            per emergency visit based on distance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Contact Kavinco  now for emergency breakdown support.
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
