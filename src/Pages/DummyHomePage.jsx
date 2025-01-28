import React from "react";
import { ArrowRightCircle, Code2, UserCircle } from "lucide-react";
import BackgroundGrid from "./Components/BGGrid";
import { AnimatedShinyText } from "./Components/ShinyText";
import { SparklesText } from "./Components/Sparkle";

export default function DummyHomePage() {
  return (
    <>
      <BackgroundGrid />

      <div className="flex justify-center">
        <nav className="bg-[#1a1a1a] fixed top-3 barlow w-[45rem] mx-auto py-4 rounded-lg shadow-lg z-[11]">
          <div className="flex justify-between items-center px-8">
            <div className="text-[#e0af0c] text-2xl font-bold flex items-center">
              <img
                src="./logo.jpg"
                alt="logo"
                className="w-7 object-cover rounded-full"
              />
              ortFlick
            </div>
            <ul className="flex gap-6 cursor-pointer text-white">
              <li>Home</li>
              <li>About</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
            <button className="bg-white transition-all duration-200 hover:scale-95 text-black px-3 py-1 rounded-md font-semibold">
              Dashboard
            </button>
          </div>
        </nav>
      </div>

      <div className="min-h-screen py-4 barlow bg-[#080808] flex items-center noise-container">
        <div className="container mt-20 flex flex-col items-center mx-auto px-4 py-16 relative">
          <div className="shadow-inner shadow-[#e0af0c] w-48 items-center justify-center flex py-2 rounded-full mb-4">
            <AnimatedShinyText
              className={"z-40 text-sm flex items-center gap-2 font-normal"}
            >
              Get Started <ArrowRightCircle className="w-6" />
            </AnimatedShinyText>
          </div>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight">
              <div className="flex justify-center items-center gap-x-3 gap-y-3">
                <Code2 className="w-12 h-12 text-[#e0af0c]" />
                Craft Your Dream <SparklesText text={"Portfolio"} />
                <Code2 className="w-12 h-12 text-[#e0af0c]" />
              </div>
              <div className="flex items-center justify-center flex-col gap-2">
                <span className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#e0af0c] to-[#5f4902]">
                  In Minutes
                </span>
                <span className="text-3xl md:text-5xl font-bold text-white">
                  .With Ease.
                </span>
              </div>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Create a stunning portfolio in minutes with our easy-to-use
              templates. No coding required – fill form, drag image, and
              showcase your talent!
            </p>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-gradient-to-b from-[#e0af0c] to-[#5f4902] text-white px-8 py-3 rounded-lg font-bold flex gap-2 items-center hover:opacity-90 transition-all duration-200">
                <UserCircle className="text-white w-6" />
                Sign In
              </button>
              <button className="border-[1px] border-white px-8 py-3 text-white font-bold rounded-lg hover:scale-95 transition-all duration-200">
                Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
