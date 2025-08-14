import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links array
  const navLinks = [
    { id: 1, name: "Home", path: "" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm shadow-gray-300 top-0 z-50 sticky">
      <div className="px-4 sm:px-14">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="mr-36">
            <Link to="/" className="flex items-center py-4">
              <img src={logo1} alt="logo" className="h-[56px] w-[56px]" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path || "/"}
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-red-500 hover:text-red-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
            >
              Login Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `block py-2 px-4 text-sm ${
                isActive
                  ? "bg-green-50 text-green-500"
                  : "hover:bg-green-50 text-gray-700"
              }`
            }
            onClick={() => setIsMenuOpen(false)} // close menu on click
          >
            {link.name}
          </NavLink>
        ))}

        <Link
          to="/login"
          className="block py-2 px-4 text-sm bg-green-500 text-white font-semibold hover:bg-green-400"
          onClick={() => setIsMenuOpen(false)}
        >
          Login Portal
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
