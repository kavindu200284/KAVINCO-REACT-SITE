import { Link } from "react-router-dom";
import { LogIn, UserPlus, Menu, X } from "lucide-react"; // added X for close icon
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
  <header className="bg-[#ff6600] text-white shadow-md sticky top-0 z-50 border-b-[6px] border-black">
 <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="Kavinco Logo"
              className="h-12 w-auto sm:h-12 md:h-14 lg:h-16 object-contain transition-all duration-300"
            />
          </Link>

          {/* --- DESKTOP NAVIGATION (switches at lg) --- */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="font-semibold hover:text-gray-100 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/brandnew"
              className="font-semibold hover:text-gray-100 transition-colors font-medium"
            >
              Brand New
            </Link>
            <Link
              to="/used"
              className="font-semibold hover:text-gray-100 transition-colors font-medium"
            >
              Used
            </Link>
            
            <Link
              to="/Ecommerce"
              className="font-semibold hover:text-gray-100 transition-colors font-medium"
            >
              Nut & Bolts
            </Link>
            <Link
              to="/blog"
              className="font-semibold hover:text-gray-100 transition-colors font-medium"
            >
              Blog
            </Link>
            
            {/*
            <Link
              to="/login"
              className="flex items-center space-x-2 font-semibold hover:text-gray-100 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-2 font-semibold bg-white text-[#ff6600] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              <span>Sign Up</span>
            </Link>
            */}
            
          </nav>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* --- MOBILE MENU (SLIDE DOWN) --- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" space-y-3 border-t border-white/30 pt-3 text-center ">
            {[
              { path: "/", label: "Home" },
              { path: "/brandnew", label: "Brand New" },
              { path: "/used", label: "Used" },
              { path: "/shop", label: "Nut & Bolts" },
              { path: "/blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className=" block hover:text-gray-100 transition-colors font-medium "
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/*<Link
              to="/login"
              className="flex items-center space-x-2 hover:text-gray-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-2 font-semibold bg-white text-[#ff6600] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <UserPlus className="w-5 h-5" />
              <span>Sign Up</span>
            </Link>
            */}
          </div>
        </div>
      </div>
    </header>
  );
}
