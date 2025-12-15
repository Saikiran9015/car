import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../config";

interface CarCleaningPageProps {
  onBack: () => void;
}

const products = [
  { name: "Micro Fiber Cloth", price: "₹120", imageUrl: "/Products/MicroFiber Clothes.jpg" },
  { name: "Micro Fiber Gloves", price: "₹110", imageUrl: "/Products/Microfiber hand  gloves mit.jpg" },
  { name: "Cleaning Shampoo", price: "₹180", imageUrl: "/Products/Car Wash Shampoo.jpg" },
  { name: "Tissue Paper Box", price: "₹90", imageUrl: "/Products/Tissue paper box.jpg" },
  { name: "Wet Wipes", price: "₹60", imageUrl: "/Products/wet.jpg" },
  { name: "Odonil Spray", price: "₹85", imageUrl: "/Products/Odonil air fresheners spray.jpg" },
  { name: "Microfiber Cleaning Duster", price: "₹70", imageUrl: "/Products/Microfiber cleaning duster.jpg" },
  { name: "Tyre Polish", price: "₹150", imageUrl: "/Products/Tyre polish.jpg" },
  { name: "Odonil AER Pocket Fragrance", price: "₹65", imageUrl: "/Products/Odonil aer pocket.jpg" },
  { name : "Mobile Holder", Price:"₹65", imageUrl:"/Products/Phone Holder.jpg" }
];

export default function CarCleaningPage({ onBack }: CarCleaningPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* =================== COMBINED BANNER =================== */}
        <div
          className="relative rounded-3xl shadow-2xl overflow-hidden mb-24"
          style={{
            backgroundImage: "url('/Products/carproduct.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
          }}

        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center text-white pt-16 px-6">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Car Cleaning Products
            </h1>
            <p className="text-xl opacity-90 mt-3 drop-shadow">
              Trusted & high-quality car care essentials
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-10 -bottom-24 absolute w-full">

            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Gentle & Effective</h3>
              <p className="text-gray-600">Perfect for all car surfaces</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Fresh Fragrance</h3>
              <p className="text-gray-600">Keeps your car smelling great</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Top Quality</h3>
              <p className="text-gray-600">Premium-grade materials</p>
            </div>

          </div>
        </div>

        {/* SPACING */}
        <div className="mt-28"></div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">All Products</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-2xl p-7 hover:shadow-xl transition transform hover:-translate-y-1 bg-white"
                style={{ minHeight: "380px" }}
              >
                {/* FULL IMAGE */}
                <div className="h-56 rounded-xl mb-5 overflow-hidden bg-white shadow-sm flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>

                <p className="text-2xl font-bold text-green-600">{product.price}</p>

                {/* ORDER NOW BUTTON */}
                <a
                  href={getWhatsAppLink(
                    `I want to order: ${product.name}`
                  )}
                  target="_blank"
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition block text-center"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need Car Cleaning Products?
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Contact us anytime for orders or delivery details.
          </p>

          <div className="flex justify-center gap-10 mt-6">

            <a
              href="tel:+919515040101"
              className="flex flex-col items-center text-green-600 hover:scale-110 transition"
            >
              <div className="bg-green-100 p-5 rounded-full shadow-md">
                <Phone className="w-10 h-10 text-green-600" />
              </div>
              <span className="mt-2 font-semibold">Call Us</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              className="flex flex-col items-center text-green-600 hover:scale-110 transition"
            >
              <div className="bg-green-100 p-5 rounded-full shadow-md">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <span className="mt-2 font-semibold">WhatsApp</span>
            </a>

          </div>
        </div>

      </div>

      {/* ⭐ STICKY WHATSAPP BUTTON */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl hover:bg-green-700 transition z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
