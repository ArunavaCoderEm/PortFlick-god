import React, { useState, useEffect } from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import NavBar from './Components/Navbar'; 
import AddUser from "./Utils/AddUser";
import Sidebar from './Components/Sidebar';

const Dashboard = () => {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Set the breakpoint for large screen
    };
    
    window.addEventListener('resize', handleResize); // Add event listener for resize
    handleResize(); // Set initial state based on current window size

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <AddUser user={user} />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Main Content */}
        <div className="flex-grow p-6">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-full max-w-md text-center">
              <p className="text-gray-700">
                <strong>Name:</strong> {user?.fullName || "N/A"}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress || "N/A"}
              </p>
              <SignOutButton redirectUrl="/">
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg">
                  Logout
                </button>
              </SignOutButton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar toggle button for smaller screens */}
      {!isLargeScreen && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-12 left-4 z-20 p-2 bg-orange-500 text-white rounded-full shadow-md"
        >
          {isSidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default Dashboard;
