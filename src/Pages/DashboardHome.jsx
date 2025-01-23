import React from 'react';
import { useUser } from '@clerk/clerk-react'; 
import { useState, useEffect } from 'react';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Footer from './Components/Footer'; 

const DashboardHome = () => {
  const { user } = useUser(); 
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 18) {
      setGreeting('Good Evening');
    } else if (hour >= 12) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Morning');
    }
  }, []);

  return (
    <div className="relative p-6  min-h-screen">

      {/* Content Container */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 shadow-xl rounded-lg p-8 w-full mx-auto z-10 relative">
        <div className="flex items-center gap-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
            {greeting}, {user?.fullName || "Guest"}!
            </h1>
            {/* <FaSmile className="text-4xl text-white" /> */}
        </div>

        <p className="text-gray-300 sm:text-base md:text-lg">
            Welcome to your dashboard. Here's a summary of your activities and insights.
        </p>
      </div>


      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <Stars radius={100} count={1000} factor={4} fade speed={3} />
        </Canvas>
      </div>

    </div>
    
  );
};

export default DashboardHome;
