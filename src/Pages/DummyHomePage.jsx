import React, { useState } from "react";
import {
  ArrowRightCircle,
  Book,
  Code2,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import BackgroundGrid from "./Components/BGGrid";
import { AnimatedShinyText } from "./Components/ShinyText";
import { SparklesText } from "./Components/Sparkle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DummyHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <BackgroundGrid />

      <div className="flex justify-center">
        <motion.nav
          className="md:bg-[#1a1a1a]/70 bg-[#1a1a1a] md:backdrop-blur-sm fixed top-0 md:top-3 barlow w-full lg:w-[45rem] mx-auto py-4 rounded-lg shadow-lg z-[11]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex justify-between items-center px-8">
            <motion.div
              className="text-[#e0af0c] text-2xl font-bold flex items-center"
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
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#e0af0c] duration-200">
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#e0af0c] duration-200">
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#e0af0c] duration-200">
                <Link to="/dashboard">Dashboard</Link>
              </motion.li>
              <motion.li className="transition-all shadow-inner shadow-gray-300/20 px-2 w-full text-center py-1 rounded-lg hover:text-[#e0af0c] duration-200">
                <Link to="/contact">Contact</Link>
              </motion.li>
              <motion.button
                className="bg-white transition-all duration-200 hover:scale-95 text-black px-3 py-1 rounded-md font-semibold block md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Dashboard
              </motion.button>
            </motion.ul>

            <motion.button
              className="bg-white transition-all duration-200 hover:scale-95 text-black px-3 py-1 rounded-md font-semibold hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Dashboard
            </motion.button>
          </div>
        </motion.nav>
      </div>

      <div className="min-h-screen py-4 barlow bg-[#080808] flex items-center noise-container">
        <div className="container mt-20 flex flex-col items-center mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="shadow-inner shadow-[#e0af0c] w-48 items-center justify-center flex py-2 rounded-full mb-4"
          >
            <AnimatedShinyText
              className={"text-sm flex items-center gap-2 font-normal"}
            >
              Get Started <ArrowRightCircle className="w-6" />
            </AnimatedShinyText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight">
              <div className="flex justify-center items-center gap-x-3 gap-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Code2 className="w-12 h-12 text-[#e0af0c]" />
                </motion.div>
                <span className="flex lg:flex-row flex-col items-center justify-center">
                  Craft Your Dream <SparklesText text={"\u00A0Portfolio"} />
                </span>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Code2 className="w-12 h-12 text-[#e0af0c]" />
                </motion.div>
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#e0af0c] to-[#5f4902]"
                >
                  In Minutes
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-3xl md:text-5xl font-bold text-white"
                >
                  .With Ease.
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-xl text-gray-400 max-w-2xl mt-5 mx-auto mb-8"
            >
              Create a stunning portfolio in minutes with our easy-to-use
              templates. No coding required – fill form, drag image, and
              showcase your talent!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <button className="bg-gradient-to-b from-[#e0af0c] to-[#5f4902] text-white px-8 py-3 rounded-lg font-bold flex gap-2 items-center hover:opacity-90 transition-all duration-200">
                <UserCircle className="text-white w-6" />
                Sign In
              </button>
              <button className="border-[1px] border-white px-8 py-3 text-white font-bold rounded-lg hover:scale-95 flex items-center gap-2 transition-all duration-200">
                <Book className="w-6" />
                Docs
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
