import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white px-4 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">StarSite</div>


        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400">
            About
          </Link>
          <Link to="/artRoom" className="hover:text-purple-400">
            Services
          </Link>
          <Link to="/" className="hover:text-purple-400">
            Contact
          </Link>
        </div>

        {/* Sign In Button for Desktop */}
        <div className="hidden md:block">
          <Link
            to="/"
            className="bg-gray-950 hover:bg-gray-950 text-white px-8 py-2 rounded-lg border border-purple-400 shadow-[0px_0px_14px_rgba(207,147,217,0.5)] hover:shadow-[0px_0px_24px_rgba(207,147,217,0.9)] hover:border-purple-300"
          >
            Sign In
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
        className="hidden md:hidden flex flex-col items-center space-y-4 mt-3 px-4"
      >
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

        {/* Sign In Button for Mobile */}
        <Link
          to="/signin"
          className="bg-gray-950 hover:bg-gray-950 text-white px-8 py-2 rounded-lg border border-purple-400 shadow-[0px_0px_14px_rgba(207,147,217,0.5)] hover:shadow-[0px_0px_24px_rgba(207,147,217,0.9)] hover:border-purple-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
