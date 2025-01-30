import React, { useState, useEffect } from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar";
import AddUser from "./Utils/AddUser";
import Sidebar from "./Components/Sidebar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Set the breakpoint for large screen
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize
    handleResize(); // Set initial state based on current window size

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <AddUser user={user} />
      <div className="flex bg-gray-950 relative z-10">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isLargeScreen={isLargeScreen}
        />

        <motion.div
          className={`flex-1 mt-[10px] p-4 transition-all duration-300  ${
            isSidebarOpen || isLargeScreen ? "lg:ml-[15%]" : "ml-0"
          }`}
        >
          <Outlet />
        </motion.div>

        {/* Mobile sidebar*/}
        {!isLargeScreen && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-20 left-4 z-20 p-2 bg-purple-400  text-white rounded-full shadow-md"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
