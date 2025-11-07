import { motion } from "framer-motion";
import { useMemo } from "react";

// Character assets
import char1 from "@/assets/characters/char1.png";
import char2 from "@/assets/characters/char2.png";
import char3 from "@/assets/characters/char3.png";
import char4 from "@/assets/characters/char4.png";
import char5 from "@/assets/characters/char5.png";
import char6 from "@/assets/characters/char6.png";
import char7 from "@/assets/characters/char7.png";
// Note: char8 has a trailing comma in filename (char8,.png). Skipping import to avoid build error.

type CharSpec = {
  src: string;
  alt: string;
  left: string;
  top: string;
  size: number; // px width
  rotate?: number;
  bg: string; // soft background color behind image
  duration: number;
  delay: number;
  hideOnMobile?: boolean;
};

const FloatingElements = () => {
  const chars: CharSpec[] = useMemo(
    () => [
      {
        src: char1,
        alt: "Character 1",
        left: "6%",
        top: "18%",
        size: 200,
        rotate: -6,
        bg: "#FFF1CC", // warm beige
        duration: 18,
        delay: 0,
        hideOnMobile: true,
      },
      {
        src: char2,
        alt: "Character 2",
        left: "76%",
        top: "24%",
        size: 220,
        rotate: 4,
        bg: "#E9DAFF", // soft lavender
        duration: 22,
        delay: 1.2,
        hideOnMobile: true,
      },
      {
        src: char3,
        alt: "Character 3",
        left: "12%",
        top: "68%",
        size: 190,
        rotate: 2,
        bg: "#D8F6EE", // mint
        duration: 20,
        delay: 0.8,
        hideOnMobile: false,
      },
      {
        src: char4,
        alt: "Character 4",
        left: "84%",
        top: "64%",
        size: 210,
        rotate: -8,
        bg: "#E9DAFF",
        duration: 24,
        delay: 1.8,
        hideOnMobile: true,
      },
      {
        src: char5,
        alt: "Character 5",
        left: "48%",
        top: "40%",
        size: 160,
        rotate: 0,
        bg: "#FFF1CC",
        duration: 21,
        delay: 0.5,
        hideOnMobile: false,
      },
      {
        src: char6,
        alt: "Character 6",
        left: "64%",
        top: "78%",
        size: 180,
        rotate: 6,
        bg: "#D8F6EE",
        duration: 19,
        delay: 1.6,
        hideOnMobile: true,
      },
      {
        src: char7,
        alt: "Character 7",
        left: "28%",
        top: "16%",
        size: 170,
        rotate: -2,
        bg: "#E9DAFF",
        duration: 23,
        delay: 2.1,
        hideOnMobile: true,
      },
    ],
    [],
  );

  const bgCycle = ["#FFF1CC", "#E9DAFF", "#D8F6EE", "#E9DAFF", "#FFF1CC"]; // cycles softly through palettes

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft cycling background to match character palettes */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundColor: bgCycle }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.35 }}
      />

      {/* Characters with soft radial backplates */}
      {chars.map((c, index) => (
        <motion.div
          key={index}
          className={`absolute ${c.hideOnMobile ? "hidden md:block" : "block"}`}
          style={{ left: c.left, top: c.top, width: c.size }}
          animate={{
            y: [0, -18, 0],
            x: [0, 14, 0],
            rotate: [c.rotate || 0, (c.rotate || 0) + 2, c.rotate || 0],
          }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.12))",
            }}
          >
            <div
              className="absolute -inset-6 rounded-full blur-2xl"
              style={{ background: `radial-gradient(60% 60% at 50% 40%, ${c.bg}, transparent)` }}
            />
            <img
              src={c.src}
              alt={c.alt}
              className="relative select-none"
              draggable={false}
              loading="lazy"
              decoding="async"
              style={{ width: c.size, height: "auto" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
