import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../config";

interface CarCleaningPageProps {
  onBack: () => void;
}

const products = [
  { name: "Micro Fiber Cloth", price: "₹120", imageUrl: "/Products/microfiber-cloth.jpg" },
  { name: "Micro Fiber Gloves", price: "₹110", imageUrl: "/Products/microfiber-gloves.jpg" },
  { name: "Cleaning Shampoo", price: "₹180", imageUrl: "/Products/car-wash-shampoo.jpg" },
  { name: "Tissue Paper Box", price: "₹90", imageUrl: "/Products/tissue-paper-box.jpg" },
  { name: "Wet Wipes", price: "₹60", imageUrl: "/Products/wet-wipes.jpg" },
  { name: "Odonil Spray", price: "₹85", imageUrl: "/Products/odonil-spray.jpg" },
  { name: "Microfiber Cleaning Duster", price: "₹70", imageUrl: "/Products/microfiber-duster.jpg" },
  { name: "Tyre Polish", price: "₹150", imageUrl: "/Products/tyre-polish.jpg" },
  { name: "Odonil AER Pocket Fragrance", price: "₹65", imageUrl: "/Products/odonil-aer.jpg" },
  { name: "Mobile Holder", price: "₹65", imageUrl: "/Products/phone-holder.jpg" },
];

export default function CarCleaningPage({ onBack }: CarCleaningPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* BANNER */}
        <div
          className="relative rounded-3xl shadow-2xl overflow-hidden mb-24"
          style={{
            backgroundImage: "url('/Products/carproduct.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center text-white pt-16 px-6">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Car Cleaning Products
            </h1>
            <p className="text-xl opacity-90 mt-3 drop-shadow">
              Trusted & high-quality car care essentials
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="absolute w-full px-10 -bottom-24 grid grid-cols-1 md:grid-cols-3 gap-6 z-20">
            {[
              ["Gentle & Effective", "Perfect for all car surfaces"],
              ["Fresh Fragrance", "Keeps your car smelling great"],
              ["Top Quality", "Premium-grade materials"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-6 rounded-2xl shadow-xl text-center"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SPACING */}
        <div className="mt-28" />

        {/* PRODUCT GRID */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            All Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-2xl p-7 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="h-56 mb-5 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {product.name}
                </h3>

                <p className="text-2xl font-bold text-green-600">
                  {product.price}
                </p>

                <a
                  href={getWhatsAppLink(`I want to order: ${product.name}`)}
                  target="_blank"
                  className="block text-center mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Need Car Cleaning Products?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us anytime for orders or delivery details.
          </p>

          <div className="flex justify-center gap-10">
            <a href="tel:+919515040101">
              <Phone className="w-10 h-10 text-green-600" />
            </a>
            <a href={getWhatsAppLink()} target="_blank">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </a>
          </div>
        </div>
      </div>

      {/* STICKY WHATSAPP BUTTON */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
