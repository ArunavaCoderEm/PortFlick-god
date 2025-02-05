import {
  Activity,
  AlignCenterHorizontalIcon,
  AppWindow,
  User,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const mapfeature = [
    {
      title: "Seamless Authentication",
      description:
        "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
      icon: (
        <User className="w-10 h-10 fill-purple-500 rounded-full text-white" />
      ),
    },
    {
      title: "Portfolio Templates",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: (
        <AppWindow className="w-10 h-10 fill-purple-500 rounded-full text-white" />
      ),
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: (
        <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />
      ),
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: (
        <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />
      ),
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: (
        <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />
      ),
    },
  ];

  return (
    <div className="barlow px-2 py-1 -mt-3">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="text-2xl md:text-4xl font-extrabold flex items-center justify-center gap-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight"
      >
        <Activity size={24} className="text-white" />
        Features We Provide
        <Activity size={24} className="text-white" />
      </motion.h1>

      <div className="text-white gap-4 grid md:grid-cols-1 grid-cols-1 lg:grid-cols-3 p-3">
        {mapfeature.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-lg border-[1px] border-pink-500/40 bg-black/90 p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <span className="mb-3 text-purple-500 text-2xl">{item.icon}</span>
              <h1 className="text-white font-semibold text-xl md:text-2xl">
                {item.title}
              </h1>
              <p className="text-gray-300 font-normal text-md md:text-lg mt-2">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-white gap-4 flex md:flex-row flex-col justify-center p-3">
        {mapfeature.slice(3, 5).map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-lg border-[0.2px] border-pink-500/40 bg-black/90 p-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <span className="mb-1 text-purple-500 text-2xl">{item.icon}</span>
              <div>
                <h1 className="text-white mt-5 font-semibold text-xl md:text-2xl">
                  {item.title}
                </h1>
                <p className="text-gray-300 font-normal text-md md:text-lg mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
