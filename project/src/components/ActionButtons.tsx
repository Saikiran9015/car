import { Phone, MessageCircle } from 'lucide-react';

export default function ActionButtons() {
  const handleBookCall = () => {
    // Initiates a phone call on supported devices instead of hitting a missing backend route
    window.location.href = 'tel:+919515040101';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919515040101', '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
      <button
        onClick={handleBookCall}
        className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Phone className="w-6 h-6" />
        Book a Call
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        Connect on WhatsApp
      </button>
    </div>
  );
}
