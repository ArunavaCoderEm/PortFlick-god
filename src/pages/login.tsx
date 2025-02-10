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
      <div className="flex flex-col items-center justify-center min-h-screen mt-7">
        <SignIn />
      </div>
    </motion.div>
  );
};

export default Login;
