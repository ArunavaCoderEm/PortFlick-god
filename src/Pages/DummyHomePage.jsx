import React from "react";
import { Code2, Terminal, Cpu, Database, Network, Shield } from "lucide-react";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="double-border p-6 rounded-lg transition-transform hover:scale-105">
      <Icon className="w-8 h-8 text-[#CB9D06] mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function DummyHomePage() {
  return (
    <>
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
            <button className="bg-gradient-to-b from-[#e0af0c] to-[#5f4902] text-[#0E0E0E] px-8 py-3 rounded-lg font-bold hover:bg-[#CB9D06]/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
