import React, { useEffect } from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import NavBar from './Components/Navbar'; 
import AddUser from "./Utils/AddUser";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <NavBar />
      <AddUser user={user}/>
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
  );
};

export default Dashboard;
