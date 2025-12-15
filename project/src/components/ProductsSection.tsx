import { Star, MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  category: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Car Wax",
    price: "₹599",
    rating: 5,
    category: "Car Cleaning",
    imageUrl: "https://wavex.in/cdn/shop/files/PPWSecondaryimage06.jpg?v=1758345487",
  },
  {
    id: 2,
    name: "Engine Oil Premium",
    price: "₹1299",
    rating: 5,
    category: "Car Service",
    imageUrl: "https://m.media-amazon.com/images/I/51u8batK-XL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Multi-Surface Cleaner",
    price: "₹299",
    rating: 4,
    category: "House Cleaning",
    imageUrl: "https://m.media-amazon.com/images/I/819OwXBK9TL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 4,
    name: "Car Polish Kit",
    price: "₹799",
    rating: 5,
    category: "Car Cleaning",
    imageUrl: "https://m.media-amazon.com/images/I/91m3JlmpL6L.jpg",
  },
  {
    id: 5,
    name: "Brake Fluid",
    price: "₹449",
    rating: 4,
    category: "Car Service",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOV4yGJpsBcnhqtmMaO8ypvq2wVnWG2e2MQ&s",
  },
  {
    id: 6,
    name: "Glass Cleaner Pro",
    price: "₹199",
    rating: 5,
    category: "House Cleaning",
    imageUrl: "https://shinexpro.in/cdn/shop/files/3_79e90bd7-3e7a-438f-8acb-f07a38b3f41c_2048x.jpg?v=1717768266",
  },
];

export default function ProductsSection() {
  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-[430px] flex flex-col"
          >
            {/* Product Image */}
            <div className="h-48 overflow-hidden bg-black flex items-center justify-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content (fills remaining space) */}
            <div className="p-6 flex flex-col justify-between flex-1">
              {/* Category */}
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {product.category}
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating}.0)
                </span>
              </div>

              {/* Price + WhatsApp Button */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gray-800">
                  {product.price}
                </span>

                <a
                  href={`https://api.whatsapp.com/send?phone=919515040101&text=Hi, I'm interested in buying: ${product.name}`}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
