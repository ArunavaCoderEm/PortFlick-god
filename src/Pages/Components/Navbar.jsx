import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleGetStarted = async () => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      await navigate("/login");
    }
  };

  return (
    <nav className="bg-transparent text-white sticky top-0 z-50">
      <div className="flex justify-center">
        <motion.nav
          className="md:bg-[#1a1a1a]/70 bg-[#1a1a1a] md:backdrop-blur-sm fixed top-0 md:top-3 barlow w-full lg:w-[50rem] mx-auto py-4 rounded-lg shadow-lg z-[11] mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex justify-between items-center px-8">
            <motion.div
              className="text-[#CE84CF] text-2xl font-bold flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <img
                src="./logo.jpg"
                alt="logo"
                className="w-7 object-cover rounded-full"
              />
              ortFlick
            </motion.div>

            <div className="lg:hidden flex items-center">
              <button className="text-white" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <motion.ul
              className={`lg:flex gap-3 z-50 items-center cursor-pointer text-white ${
                isMenuOpen
                  ? "flex flex-col absolute bg-[#1a1a1a] left-0 top-16 w-full px-4 py-4 rounded-md shadow-lg"
                  : "hidden lg:flex"
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#CE84CF] duration-200">
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#CE84CF] duration-200">
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#CE84CF] duration-200 cursor-pointer">
                <Link to="/about">Services</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#CE84CF] duration-200">
                <Link to="/contact">Contact</Link>
              </motion.li>
              <motion.button
                className="bg-white transition-all duration-200 hover:scale-95 text-black px-3 py-1 rounded-md font-semibold md:block lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                onClick={handleGetStarted}
              >
                {isSignedIn ? "Dashboard" : "Sign In"}
              </motion.button>
            </motion.ul>

            <motion.button
              className="bg-white transition-all duration-200 hover:scale-95 text-black px-3 py-1 rounded-md font-semibold hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              onClick={handleGetStarted}
            >
              {isSignedIn ? "Dashboard" : "Sign In"}
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </nav>
  );
};

export default Navbar;
