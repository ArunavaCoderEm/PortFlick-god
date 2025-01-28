import React from "react";
import { Code2, Rocket } from "lucide-react";
import BackgroundGrid from "./Components/BGGrid";

export default function DummyHomePage() {
  return (
    <>
      <BackgroundGrid />

      <nav className="bg-[#1a1a1a] barlow w-[40rem] mx-auto py-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-8">
          <div className="text-[#e0af0c] text-2xl font-bold">PriBaby</div>
          <ul className="flex gap-6 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Dashboard</li>
            <li>Contact</li>
          </ul>
        <button className="bg-white text-black px-3 py-1 rounded-md font-semibold">Dashboard</button>
        </div>
      </nav>
      <div className="min-h-screen py-4 barlow bg-[#080808] flex items-center noise-container">
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight">
              <div className="flex justify-center items-center gap-x-3 gap-y-3">
                <Code2 className="w-12 h-12 text-[#e0af0c]" />
                Craft Your Dream Portfolio
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
            <button className="bg-gradient-to-b from-[#e0af0c] to-[#5f4902] text-[#0E0E0E] px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
