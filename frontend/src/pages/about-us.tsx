import { teamMembers } from "@/data/data";
import React from "react";

export default function AboutUs(): React.ReactNode {
  return (
    <div className="min-h-screen mt-7 bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-[100px]">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-400 z-20 mb-6">
            We bring a wealth of experience
            <br />
            from a wide range of backgrounds
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Our philosophy is simple: hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-gray-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full cursor-pointer h-full object-cover transform transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>
              <h3 className="text-xl cursor-pointer font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-purple-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
