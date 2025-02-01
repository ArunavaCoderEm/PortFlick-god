import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const handleCopyToClipboard = () => {};

const DashboardHome = () => {
  const { user } = useUser();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 18) {
      setGreeting("Good Evening");
    } else if (hour >= 12) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Morning");
    }
  }, []);

  return (
    <div className="relative p-6 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 shadow-xl rounded-lg p-8 w-full mx-auto z-10 relative">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {greeting}, {user?.fullName || "Guest"}!
          </h1>
        </div>
        <p className="text-gray-300 sm:text-base md:text-lg">
          Welcome to your dashboard. Here's a summary of your activities and
          insights.
        </p>
      </div>

      <div className="h-auto mt-10 mb-6 lg:mb-12 bg-center grid grid-cols-1  gap-2 items-center justify-center text-center  rounded-md w-full lg:w-[100%]">
        <div className="bg-[#0a0a0a] shadow-lg rounded-xl overflow-hidden transition duration-300 w-[100%] mx-auto flex flex-col lg:flex-row border border-slate-700">
          <div className="w-full lg:w-[40%] h-full m-8 rounded-lg border-[1px] border-gray-800">
            <img
              src="https://priyanshudutta.vercel.app/assets/imgs/project/repx.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex-1 p-6 flex flex-col  text-left">
            <p className="text-gray-400 mt-2 text-lg">
              <strong>Deployment</strong>
            </p>
            <p className="text-white mt-2 text-md flex items-center">
              www.abc.com
              <ClipboardDocumentIcon
                className="ml-2 w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-200"
                onClick={handleCopyToClipboard}
              />
            </p>

            <p className="text-gray-400 mt-2 text-lg">
              <strong>Views</strong>
            </p>
            <p className="text-white mt-2 text-md">100</p>
            <p className="text-gray-400 mt-2 text-lg">
              <strong>Status</strong>
            </p>
            <p className="text-white mt-2 text-md flex items-center">
              Ready
              <span className="ml-2 w-3 h-3 rounded-full bg-green-700"></span>
            </p>
            <p className="text-gray-400 mt-2 text-lg">
              <strong>Created</strong>
            </p>
            <p className="text-white mt-2 text-md">
              1 Feb 2025 5:04 by userName
            </p>
          </div>
        </div>
      </div>

      {/* Stars Background */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <Stars radius={100} count={1000} factor={4} fade speed={3} />
        </Canvas>
      </div> */}
    </div>
  );
};

export default DashboardHome;
