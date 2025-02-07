import Feedbacks from "@/components/my-component/feedbacks";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React from "react";

export default function UserReviews(): React.ReactNode {
  return (
    <div>
      <div className="w-full mt-10 flex flex-col items-center overflow-hidden justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-2xl md:text-4xl font-extrabold flex items-center justify-center gap-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight"
        >
          <Star size={24} className="text-white fill-purple-600" />
          User Reviews
          <Star size={24} className="text-white fill-purple-600" />
        </motion.h1>
        <Feedbacks />
      </div>
    </div>
  );
}
