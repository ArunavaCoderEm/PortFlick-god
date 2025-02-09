import React from "react";
import { services } from "@/data/data";
import { MagicCard } from "@/components/magicui/magic-card";


export default function Services(): React.ReactNode {
  return (
    <div className="min-h-screen mt-10 bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-[100px]">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500 mb-6">
            Services We Provide
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Our philosophy is simple: Hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MagicCard
              className="cursor-pointer items-start justify-center whitespace-normal shadow-2xl flex p-6 flex-col w-full h-full"
              gradientColor={"#262626"}
              key={index}
            >
              <div className="mb-6">
                <service.icon
                  className="w-12 h-12 text-purple-500"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed break-words text-wrap balance w-full">
                {service.description}
              </p>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
}
