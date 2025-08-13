"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FramerHeartbeat({
  children,
  speed = 1,
  intensity = 0.15,
  isActive = true
}) {
  const [key, setKey] = useState(0);

  // Restart animation when speed changes
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [speed]);

  const heartbeatVariants = {
    beat: {
      scale: [1, 1 + intensity, 1, 1 + (intensity * 1.2), 1],
      transition: {
        duration: 2 / speed, // Adjust duration based on speed
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.14, 0.28, 0.42, 1], // Heartbeat timing
      }
    },
    idle: {
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      key={key} // Force re-mount when speed changes
      variants={heartbeatVariants}
      animate={isActive ? "beat" : "idle"}
      className="heartbeat-container"
    >
      {children}
    </motion.div>
  );
}
