import { ArrowLeft, Home, Leaf, Award, Star, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../config";

interface HouseCleaningPageProps {
  onBack: () => void;
}

// ===================== PRODUCT LIST =====================
const products = [
  { name: "Dettol Handwash (S/M/L)", price: "₹120", imageUrl: "/Products/dettol hand wash.webp" },
  { name: "Glass Cleaner", price: "₹90", imageUrl: "/Products/Glass & multipurpose.jpg" },
  { name: "Stove Cleaner", price: "₹110", imageUrl: "/Products/Stove cleaner.webp" },
  { name: "Kitchen Cleaner", price: "₹150", imageUrl: "/Products/Kithchen Cleaner.jpg" },
  { name: "Bathroom Cleaner", price: "₹160", imageUrl: "/Products/Bathroom cleaner.jpg" },
  { name: "Multipurpose Cleaner", price: "₹140", imageUrl: "/Products/Multipurpose cleaner.jpg" },
  { name: "Wet Wipes", price: "₹60", imageUrl: "/Products/wet.jpg" },
  { name: "Dettol Antiseptic Liquid", price: "₹180", imageUrl: "/Products/detol.webp" },
  { name: "Paper Towels", price: "₹75", imageUrl: "/Products/Paper Towels.jpg" },
  { name: "Mops", price: "₹250", imageUrl: "/Products/Mops.webp" },
  { name: "Garbage Bags", price: "₹120", imageUrl: "/Products/garbage bag.jpg" },
  { name: "Glass Cleaning Cloth", price: "₹50", imageUrl: "/Products/Glass Cleaning Cloths.jpg" },
  { name: "Mop Cloth", price: "₹40", imageUrl: "/Products/Mop cloth.jpg" },
  { name: "Check Cloth", price: "₹30", imageUrl: "/Products/Check cloth.jpg" },
  { name: "Dry Mop Refill", price: "₹90", imageUrl: "/Products/Dry Mop Refill.jpg" },
  { name: "Wet Mop Refill", price: "₹95", imageUrl: "/Products/Wet Mop Refill.jpg" },
  { name: "Yellow Cleaning Cloth", price: "₹45", imageUrl: "/Products/yellow.jpg" },
  { name: "Wet Mop Refill (Looped)", price: "₹110", imageUrl: "/Products/Wet Mop Refill (Looped).jpg" },
  { name: "Wet Mop Refill (Unlooped)", price: "₹100", imageUrl: "/Products/Wet Mop Refill (Unlooped).jpg" },
  { name: "Mop Clip", price: "₹40", imageUrl: "/Products/Mop clip.jpg" },
  { name: "Aluminium Pole", price: "₹180", imageUrl: "/Products/Aluminium Pole.jpg" },
  { name: "Metal Stick", price: "₹140", imageUrl: "/Products/Metal Stick.jpg" },
  { name: "Wooden Stick", price: "₹60", imageUrl: "/Products/Wooden Stick.jpg" },
  { name: "SS Metal Rod", price: "₹200", imageUrl: "/Products/SS Metal Rod.jpg" },
  { name: "Dust Pan with Brush", price: "₹80", imageUrl: "/Products/Dust Pan with Brush.jpg" },
  { name: "Toilet Brushes", price: "₹70", imageUrl: "/Products/Toilet Brushes.jpg" },
  { name: "Sink Brush", price: "₹50", imageUrl: "/Products/Sink Brush.jpg" },
  { name: "Cloth Brush", price: "₹45", imageUrl: "/Products/Cloth Brush.jpg" },
  { name: "Bottle Cleaning Brush", price: "₹55", imageUrl: "/Products/Bottle Cleaning Brush.jpg" },
  { name: "Feather Duster", price: "₹90", imageUrl: "/Products/Feather Duster.jpg" },
  { name: "Hand Scrubber", price: "₹30", imageUrl: "/Products/Hand Scrubber.jpg" },
  { name: "Hand Gloves (Microfiber)", price: "₹60", imageUrl: "/Products/Hand Gloves (Microfiber).webp" },
  { name: "Rubber Holder Squeeze", price: "₹110", imageUrl: "/Products/Rubber Holder Squeeze.avif" },
  { name: "Wiper", price: "₹120", imageUrl: "/Products/Wiper.jpg" },
  { name: "Sponge Car", price: "₹40", imageUrl: "/Products/Sponge Car.jpg" },
  { name: "Kitchen Wiper", price: "₹70", imageUrl: "/Products/Kitchen Wiper.webp" },
  { name: "Scotch Brite", price: "₹25", imageUrl: "/Products/Scotch Brite.jpeg" },
  { name: "Soap Dispenser", price: "₹150", imageUrl: "/Products/Soap Dispenser.webp" },
  { name: "Dust Bins", price: "₹250", imageUrl: "/Products/Dust Bin.webp" },
  { name: "Pedal Dust Bin", price: "₹350", imageUrl: "/Products/Pedal Dust Bin.jpeg" },
  { name: "Latex Gloves", price: "₹80", imageUrl: "/Products/Latex Gloves.jpg" },
  { name: "Door Mats", price: "₹180", imageUrl: "/Products/Door Mats.jpg"},
  { name: "Odonil Air Fresheners", price: "₹60", imageUrl: "/Products/Odonil air fresheners spray.jpg" },
  { name: "Naphthalene Balls", price: "₹40", imageUrl: "/Products/Naphthalene balls.jpg" },
  { name: "Wooden Tissue Holder", price: "₹220", imageUrl: "/Products/wooden_tissue Holder.webp" },
  { name: "Files", price: "₹20", imageUrl: "/Products/Files.jpeg" },
  { name: "File Folders", price: "₹30", imageUrl: "/Products/file-holder.jpg" },
  { name: "Notebooks", price: "₹40", imageUrl: "/Products/Note books.jpg" },
  { name: "A4 Size Papers", price: "₹40", imageUrl: "/Products/A4 Size.jpg" }
];

export default function HouseCleaningPage({ onBack }: HouseCleaningPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* 🔥 Banner + Highlights */}
        <div
          className="rounded-2xl p-12 text-white mb-12 relative overflow-hidden shadow-xl"
         style={{
         backgroundImage: "url('/Products/House Cleaning.jpg')",
         backgroundSize: "cover",
         backgroundPosition: "center",
}}

        >
          <div className="flex items-center gap-4 mb-6">
            <Home className="w-16 h-16" />
            <h1 className="text-5xl font-bold">House Cleaning Products & Stationery</h1>
          </div>

          <p className="text-xl opacity-90 mb-10">
            Premium quality housekeeping & cleaning essentials
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-800">
              <Leaf className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Natural</h3>
              <p className="text-gray-600">Safe Ingredients</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-800">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Trusted</h3>
              <p className="text-gray-600">Quality Cleaning Materials</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-800">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Affordable</h3>
              <p className="text-gray-600">Best Prices Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">All Products</h2>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-xl transition">

                {/* Full image display */}
                <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-xl font-bold text-orange-600 mb-3">{product.price}</p>

                {/* ORDER NOW BUTTON */}
                <a
                  href={getWhatsAppLink(`Hi, I want to order: ${product.name}`)}
                  target="_blank"
                  className="w-full block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need These Cleaning Products?
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Contact us anytime for orders, delivery or enquiries.
          </p>

          <div className="flex justify-center gap-10 mt-6">
            <a
              href="tel:+919515040101"
              className="flex flex-col items-center text-orange-600 hover:scale-110 transition"
            >
              <div className="bg-orange-100 p-5 rounded-full shadow-md">
                <Phone className="w-10 h-10 text-orange-600" />
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

        {/* Sticky WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl hover:bg-green-700 transition z-50"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </a>

      </div>
    </div>
  );
}
