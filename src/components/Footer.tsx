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
            <li className="flex items-center gap-2">
              <Mail size={16} /> kavincoautomation@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +94 770414713
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 142/8 5th lane, kaldemulla road, kaldemulla, Moratuwa.
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
            <li><a href="/spareparts" className="hover:text-orange-400">Spare Parts</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">Facebook</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">LinkedIn</a></li>
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
