import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import hostChar from "@/assets/charactors/char2.png";

const ConversationDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const STEP_MS = 700; // Fast playback speed per message

  const conversation = [
    {
      speaker: "user",
      text: "Hi, I'd like to book an appointment for next Tuesday.",
      delay: 0
    },
    {
      speaker: "lena",
      text: "Of course! I'd be happy to help you book an appointment. What time works best for you on Tuesday?",
      delay: 2000
    },
    {
      speaker: "user",
      text: "Around 2 PM would be perfect.",
      delay: 4000
    },
    {
      speaker: "lena",
      text: "Great! I have a 2:00 PM slot available. May I have your name and contact number to confirm?",
      delay: 6000
    },
    {
      speaker: "user",
      text: "Sure, it's John Smith, and my number is 555-0123.",
      delay: 8000
    },
    {
      speaker: "lena",
      text: "Perfect! I've booked your appointment for Tuesday at 2:00 PM. You'll receive a confirmation text shortly. Is there anything else I can help you with?",
      delay: 10000
    }
  ];

  // Fast, repeated loop through the conversation messages
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % conversation.length);
    }, STEP_MS);
    return () => clearInterval(interval);
  }, [isPlaying, conversation.length]);

  // Only render recent messages to avoid scrollbars
  const MAX_VISIBLE = 4;
  const startIndex = Math.max(0, currentMessage - (MAX_VISIBLE - 1));
  const visibleMessages = conversation.slice(startIndex, currentMessage + 1);

  return (
    <section className="pt-10 pb-28 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Watch Lena in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how Lena handles real customer conversations with natural flow and intelligence
          </p>
          <Button
            onClick={() => {
              setIsPlaying((p) => {
                const next = !p;
                if (next) setCurrentMessage(0);
                return next;
              });
            }}
            variant="outline"
            className="mb-8"
          >
            {isPlaying ? "Pause Demo" : "Play Demo"}
          </Button>
        </motion.div>

  {/* Layout: character absolutely positioned on the right so it doesn't affect height */}
  <div className="relative md:pr-[360px]">
          {/* Mobile character above */}
          <div className="md:hidden flex justify-center mb-6">
            <img src={hostChar} alt="Agent" className="w-48 drop-shadow-2xl select-none pointer-events-none" />
          </div>
          {/* Desktop character on the right margin */}
          <img
            src={hostChar}
            alt="Agent"
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-72 lg:w-80 xl:w-96 select-none pointer-events-none drop-shadow-2xl"
          />

          <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 md:max-w-[760px] mr-auto">
          <div className="space-y-6 h-[420px] md:h-[460px] overflow-hidden">
            <AnimatePresence mode="sync">
              {visibleMessages.map((message, index) => (
                <motion.div
                  key={`${startIndex + index}`}
                  initial={{ opacity: 0, x: message.speaker === "user" ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex gap-4 ${message.speaker === "user" ? "justify-start" : "justify-end"}`}
                >
                  {message.speaker === "user" && (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.speaker === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">
                      {message.speaker === "user" ? "Customer" : "Lena"}
                    </p>
                    <p className="leading-relaxed">{message.text}</p>
                  </div>
                  {message.speaker === "lena" && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                    >
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;
