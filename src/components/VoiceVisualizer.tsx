import { motion } from "framer-motion";
import { useState } from "react";

interface VoiceVisualizerProps {
  isActive?: boolean;
}

const VoiceVisualizer = ({ isActive = true }: VoiceVisualizerProps) => {
  const [bars] = useState(Array.from({ length: 40 }, (_, i) => i));

  return (
    <div className="flex items-center justify-center gap-1 h-32">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-gradient-to-t from-primary/80 to-primary rounded-full"
          initial={{ height: 8 }}
          animate={{
            height: isActive
              ? [
                  Math.random() * 60 + 20,
                  Math.random() * 80 + 30,
                  Math.random() * 60 + 20,
                ]
              : 8,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: bar * 0.02,
          }}
        />
      ))}
    </div>
  );
};

export default VoiceVisualizer;
