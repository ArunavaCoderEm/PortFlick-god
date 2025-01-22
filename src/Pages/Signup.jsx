import React from "react";
import NavBar from './Components/Navbar'; 
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
          <h1 className="text-4xl font-bold text-gray-200 mb-10">SignUp Page</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <SignUp afterSignUpUrl="/dashboard" />
            </div>
            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-purple-400 hover:underline font-medium"
                >
                Login
              </button>
            </p>
        </div>
    </div>
    
  );
};

export default Signup;
