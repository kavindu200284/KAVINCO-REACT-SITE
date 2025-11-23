import React from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-gray-300 py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-orange-600 pb-6">
        {/* Contact Us */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {/* Email */}
              <li className="flex items-center gap-2">
                <Mail size={16} /> 
                <a href="mailto:kavincoautomation@gmail.com" className="hover:underline text-white">
                  kavincoautomation@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <Phone size={16} /> 
                <a href="tel:+94770414713" className="hover:underline text-white">
                  +94 770414713
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-2">
                <MessageCircle size={16} /> 
                <a
                  href="https://wa.me/94770414713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  WhatsApp
                </a>
              </li>

              {/* Address / Map */}
              <li className="flex items-center gap-2">
                <MapPin size={16} /> 
                <a
                  href="https://share.google/4qyFCMKoHqwUCbojS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  142/8 5th lane, Kaldemulla Road, Kaldemulla, Moratuwa
                </a>
              </li>
            </ul>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/brandnew" className="hover:text-orange-400">Brand New</a></li>
            <li><a href="/used" className="hover:text-orange-400">Used</a></li>
            <li><a href="/Shop" className="hover:text-orange-400">Shop</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.facebook.com/share/1CU1rcAv3p/" target="_blank" rel="noreferrer" className="hover:text-orange-400">Facebook</a></li>
            <li><a href="www.youtube.com/@kavinco4761" target="_blank" rel="noreferrer" className="hover:text-orange-400">YouTube</a></li>
            <li><a href="https://www.linkedin.com/company/kavinco/" target="_blank" rel="noreferrer" className="hover:text-orange-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        © {year} Kavinco. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
