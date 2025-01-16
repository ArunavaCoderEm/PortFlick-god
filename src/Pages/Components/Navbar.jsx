import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">StarSite</div>


        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            onClick={() => {
              const menu = document.getElementById("mobileMenu");
              menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden md:hidden flex flex-col space-y-4 mt-3 px-4"
      >
        <a href="#home" className="hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#services" className="hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
