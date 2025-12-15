import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 relative">

      {/* Sticky WhatsApp Button */}
      <a
        href={getWhatsAppLink('Hi, I need more details about your service.')}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-xl transition z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We provide premium car services and top-quality cleaning products 
              for both vehicles and homes. Customer satisfaction is our priority.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">

              {/* Phone - Click to Call */}
              <a
                href="tel:+919515040101"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9515040101</span>
              </a>

              {/* WhatsApp - Click to Chat */}
              <a
                href={getWhatsAppLink('Hi, I want to know more about your services.')}
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+91 9515040101</span>
              </a>

              {/* Email - Click to Send Email */}
              <a
                href="mailto:neelisaikrishna11@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
                <span>neelisaikrishna11@gmail.com</span>
              </a>

              {/* Location - Opens Google Maps */}
              <a
                href="https://maps.app.goo.gl/cGGtT6Ygd2SPF2376?g_st=awb"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <MapPin className="w-5 h-5" />
                <span>Hyderabad, Telangana - Service Available</span>
              </a>

            </div>
          </div>

          {/* Services Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional car cleaning, maintenance, home cleaning 
              supplies, and doorstep service available across Hyderabad.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">
              We are committed to delivering exceptional service, 
              quality products, and full customer satisfaction.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Clean Service Solutions. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
