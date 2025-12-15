import { useState, useEffect } from "react";

const promos = [
  {
    id: 1,
    title: "Customer Contact Support",
    description: "We are available 24/7 for customer assistance",
    image:
      "https://img.freepik.com/premium-vector/blue-customer-service-round-illustration-vector-customer-support-banner_104589-1634.jpg",
  },
  {
    id: 2,
    title: "Premium Quality Guaranteed",
    description: "All products backed by our quality assurance",
    image:
      "https://static.vecteezy.com/system/resources/previews/020/650/085/non_2x/number-one-100-percent-best-quality-golden-badge-vector.jpg",
  },
  {
    id: 3,
    title: "Fast Service",
    description: "Same-day service available for car maintenance",
    image:
      "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function PromoBanner() {
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const promo = promos[currentPromo];

  return (
    <div className="my-16 overflow-hidden">
      {/* Banner Container */}
      <div
        className="relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 bg-black"
        style={{ height: "420px" }}
      >
        {/* FULL Image – No Cropping */}
        <img
          src={promo.image}
          alt={promo.title}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* Text BELOW the banner */}
      <div className="mt-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800">{promo.title}</h3>
        <p className="text-lg text-gray-600 mt-2">{promo.description}</p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {promos.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentPromo === index ? "w-8 bg-orange-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
