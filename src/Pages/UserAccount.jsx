import React from "react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const Account = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-gray-900 text-white">
      <div className="bg-white text-gray-900 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Account Details</h1>
        <div className="space-y-4">
          {/* User's Name */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Name:</span>
            <span>{user?.fullName || "N/A"}</span>
          </div>

          {/* User's Email */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Email:</span>
            <span>{user?.emailAddresses[0]?.emailAddress || "N/A"}</span>
          </div>

          {/* User's Username */}
          {user?.username && (
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium">Username:</span>
              <span>{user.username}</span>
            </div>
          )}

          {/* Created At */}
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium">Account Created:</span>
            <span>
              {new Date(user?.createdAt).toLocaleDateString() || "N/A"}
            </span>
          </div>
        </div>

        {/* Sign Out Button */}
        <SignOutButton redirectUrl="/">
          <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition">
            Logout
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default Account;
