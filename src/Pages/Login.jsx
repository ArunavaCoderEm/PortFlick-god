import React from "react";
import NavBar from './Components/Navbar'; 
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
         <NavBar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Login Page</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <SignIn afterSignInUrl="/dashboard" />
            </div>
            <p className="mt-4 text-gray-600">
                Don't have an account?{" "}
                <button
                onClick={() => navigate("/signup")}
                className="text-blue-500 hover:underline font-medium"
                >
                Sign Up
                </button>
            </p>
        </div>
    </div>
    
  );
};

export default Login;
