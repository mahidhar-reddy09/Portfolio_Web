"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const CardFlip: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="relative w-64 h-96"
        onClick={handleFlip}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className={`absolute w-full h-full backface-hidden ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden cursor-pointer">
            <img src="/profilepic.jpg" alt="Front" className="w-full h-full object-cover" />
          </div>
          <div className="absolute w-full h-full bg-purple-500 text-white flex items-center justify-center backface-hidden rotate-y-180">
            <p>About Me</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
