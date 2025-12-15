import {
  ArrowLeft,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  MessageCircle,
  Car,
  Battery,
  CircleDot,
  Hammer,
  Sparkles,
  ClipboardCheck,
  Settings,
  Disc,
} from "lucide-react";

interface CarServicePageProps {
  onBack: () => void;
}

const serviceCategories = [
  { name: "Car Services", icon: Car },
  { name: "Batteries", icon: Battery },
  { name: "Tyres & Wheel Care", icon: CircleDot },
  { name: "Denting & Painting", icon: Hammer },
  { name: "Detailing Services", icon: Sparkles },
  { name: "Car Spa & Cleaning", icon: CheckCircle },
  { name: "Car Inspections", icon: ClipboardCheck },
  { name: "Suspension & Fitments", icon: Settings },
  { name: "Clutch & Body Parts", icon: Disc },
];

export default function CarServicePage({ onBack }: CarServicePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>

        {/* =================== COMBINED BANNER =================== */}
        <div
          className="rounded-2xl p-12 text-white mb-20 relative overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/Products/Car service1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Wrench className="w-16 h-16" />
            <h1 className="text-5xl font-bold">Professional Car Service</h1>
          </div>
          <p className="text-xl opacity-90 mb-10">
            Premium & doorstep car service solutions
          </p>

          {/* Highlight Cards Inside Banner */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quick Service", icon: Clock },
              { title: "Quality Guaranteed", icon: Shield },
              { title: "Trusted Professionals", icon: CheckCircle },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md text-center text-gray-800 hover:scale-105 transition"
                >
                  <Icon className="w-10 h-10 mx-auto mb-2 text-blue-600" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================== MAIN SERVICE SECTION =================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            All Services Are Available
          </h2>

          {/* Full Image */}
          <div className="w-full h-[450px] rounded-xl overflow-hidden mb-8 bg-white flex items-center justify-center">
  <img
    src="/Products/Car service.jpg"
    className="max-w-full max-h-full object-contain"
  />
</div>



          {/* Service Icons */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceCategories.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 border rounded-xl shadow-sm p-6 flex flex-col items-center text-center transition hover:scale-110 hover:shadow-xl"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================== SERVICE PACKAGES =================== */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Service Packages</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic Car Cleaning",
                details: "Exterior wash + Vacuum + Tyre shine",
                time: "45 Minutes",
              },
              {
                name: "Premium Interior Detailing",
                details: "Dashboard, seats, carpet shampoo",
                time: "1.5 Hours",
              },
              {
                name: "Full Car Polish",
                details: "Rubbing + Polishing + Wax coating",
                time: "2 Hours",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="border p-6 rounded-xl shadow hover:shadow-xl transition hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-3">{pkg.details}</p>
                <p className="font-semibold text-blue-600">⏱ {pkg.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =================== BOOK NOW BUTTON =================== */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Service</h2>
          <p className="text-gray-600 mb-6">Instant doorstep booking available!</p>

          {/* Book Button → WhatsApp */}
          <a
            href="https://wa.me/919515040101?text=I want to book a car service"
            target="_blank"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-700 transition text-lg"
          >
            Book Now
          </a>
        </div>

        {/* =================== CONTACT SECTION =================== */}
        <div className="text-center bg-white p-10 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Need Car Service?</h2>
          <p className="text-gray-600 mb-6">We are available anytime to assist you.</p>

          <div className="flex justify-center gap-10">
            <a
              href="tel:+919515040101"
              className="text-blue-600 flex flex-col items-center hover:scale-110 transition"
            >
              <Phone className="w-12 h-12" />
              <span>Call</span>
            </a>

            <a
              href="https://wa.me/919515040101"
              target="_blank"
              className="text-green-600 flex flex-col items-center hover:scale-110 transition"
            >
              <MessageCircle className="w-12 h-12" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-gray-500 mt-6">
            Our team will respond instantly and assist with any service you need.
          </p>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919515040101"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}

