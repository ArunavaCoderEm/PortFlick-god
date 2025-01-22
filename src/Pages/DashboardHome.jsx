import React from 'react';
import { useUser } from '@clerk/clerk-react'; 
import { useState, useEffect } from 'react';
import { FaSmile  } from 'react-icons/fa';

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
    <div className="p-6 space-y-6 min-h-screen">

    <div className="bg-gradient-to-r from-purple-600 to-purple-400 shadow-xl rounded-lg p-8 w-full mx-auto">
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


    </div>
  );
};

export default DashboardHome;
