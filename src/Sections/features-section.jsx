import { Activity, AlignCenterHorizontalIcon, AppWindow, User } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {

    const mapfeature =  [
          {
            title: "Seamless Authentication",
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            icon: <User />
          },
          {
            title: "Portfolio Templates",
            description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
            icon: <AppWindow />
          },
          {
            title: "Modern Design",
            description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
            icon: <AlignCenterHorizontalIcon />
          },
          {
            title: "Modern Design",
            description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
            icon: <AlignCenterHorizontalIcon />
          },
          {
            title: "Modern Design",
            description: "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
            icon: <AlignCenterHorizontalIcon />
          },
        ]
      
      

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

        <div className="text-white">
            {mapfeature.slice(0, 3).map((item, index) => {
                return (
                    <div key={index}>
                        {item.title}
                        {item.description}
                        {item.icon}
                    </div>
                )
            })}
        </div>

    </div>
  );
};

export default Features;
