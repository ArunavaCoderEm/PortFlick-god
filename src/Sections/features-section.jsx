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
      icon: <User className="w-10 h-10 fill-purple-500 rounded-full text-white" />,
    },
    {
      title: "Portfolio Templates",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: <AppWindow className="w-10 h-10 fill-purple-500 rounded-full text-white" />,
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />,
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />,
    },
    {
      title: "Modern Design",
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
      icon: <AlignCenterHorizontalIcon className="w-10 h-10 fill-purple-500 rounded-full text-white" />,
    },
  ];

  return (
    <div className="barlow px-2 py-1">
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
            <div key={index} className="rounded-lg px-4 py-3 bg-gradient-to-b from-pink-700 shadow shadow-purple-900 to-pink-900">
              <span className="mb-1 rounded-full">
                {item.icon}
              </span>
              <div>
                <h1 className="text-white mt-5 font-semibold text-xl md:text-2xl">
                  {item.title}
                </h1>
                <p className="text-white font-normal text-md md:text-lg mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-white gap-4 flex md:flex-row flex-col justify-center p-3">
        {mapfeature.slice(3, 5).map((item, index) => {
          return (
            <div key={index} className="rounded-lg md:max-w-[50vw] w-full lg:max-w-[33.3vw] px-4 py-3 bg-gradient-to-b from-pink-700 shadow shadow-purple-900 to-pink-900">
              <span className="mb-1 rounded-full">{item.icon}</span>
              <div>
                <h1 className="text-white mt-5 font-semibold text-xl md:text-2xl">
                  {item.title}
                </h1>
                <p className="text-white font-normal text-md md:text-lg mt-2">
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
