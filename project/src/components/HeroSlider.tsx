import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  category: 'car-service' | 'car-cleaning' | 'house-cleaning';
  imageUrl: string;
  imagePosition?: string;
}

interface HeroSliderProps {
  onSlideClick: (category: string) => void;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Professional Car Service",
    description: "Expert maintenance and repair for your vehicle",
    category: "car-service",
    imageUrl:
      "/Products/car1.jpg",
    imagePosition: "center 30%",
  },
  {
    id: 2,
    title: "Premium Car Cleaning Products",
    description: "Top-quality products for a spotless shine",
    category: "car-cleaning",
    imageUrl:
      "/Products/car2.avif",
    imagePosition: "center 50%",
  },
  {
    id: 3,
    title: "House Cleaning Products",
    description: "Keep your home sparkling clean",
    category: "house-cleaning",
    imageUrl:
      "/Products/car3.webp",
    imagePosition: "center 60%",
  },
];

export default function HeroSlider({ onSlideClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSlideClick = () => {
    onSlideClick(slides[currentSlide].category);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center cursor-pointer"
            onClick={handleSlideClick}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundPosition: slide.imagePosition || "center",
                backgroundSize: "cover",
              }}
            />

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-8 max-w-4xl drop-shadow-2xl">
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl opacity-95">{slide.description}</p>
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* LEFT button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* RIGHT button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* DOT Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

