import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Login = (): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 1 }}
      className="barlow"
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold flex items-center gap-3 text-gray-200 mb-10">
          Login To
          <img
            src="/assets/logo.jpg"
            alt="logo"
            className="w-7 object-cover rounded-full"
          />
        </h1>
        <SignIn />
      </div>
    </motion.div>
  );
};

export default Login;
