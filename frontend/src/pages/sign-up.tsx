import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const Signup = (): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 1 }}
      className="barlow"
    >
      <div className="flex flex-col items-center justify-center min-h-screen mt-16">
        <SignUp />
      </div>
    </motion.div>
  );
};

export default Signup;
