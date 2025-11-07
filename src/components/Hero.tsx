import { Button } from "@/components/ui/button";
import hostChar from "@/assets/charactors/cahr1.png";
import { motion } from "framer-motion";
import { useState } from "react";
import WaveAnimation from "./WaveAnimation";
import { PhoneCall, ChevronDown, Phone, Target, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  const countries = [
    { code: "+1", flag: "🇺🇸", label: "United States" },
    { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
    { code: "+91", flag: "🇮🇳", label: "India" },
    { code: "+61", flag: "🇦🇺", label: "Australia" },
    { code: "+81", flag: "🇯🇵", label: "Japan" },
    { code: "+49", flag: "🇩🇪", label: "Germany" },
    { code: "+971", flag: "🇦🇪", label: "UAE" },
    { code: "+65", flag: "🇸🇬", label: "Singapore" },
    { code: "+34", flag: "🇪🇸", label: "Spain" },
    { code: "+33", flag: "🇫🇷", label: "France" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[2]); // default India

  return (
    <section className="pt-10 pb-6 px-3 md:pt-32 md:pb-20 md:px-8 overflow-hidden relative bg-white">
      <WaveAnimation />
      
      {/* Decorative image - only visible on md+ */}
      <img
        src={hostChar}
        alt="AI assistant illustration"
        className="hidden sm:block absolute -right-2 md:right-8 top-16 md:top-20 w-44 md:w-80 lg:w-[26rem] select-none pointer-events-none drop-shadow-2xl opacity-95"
        draggable={false}
        loading="eager"
        decoding="async"
      />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base font-medium tracking-wide text-primary/80 mb-3 mt-2 uppercase"
        >
          Meet Lena — Your AI Voice Agent
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight text-foreground mb-3 font-sans"
        >
          Real Conversations,
          <br />
          <span className="text-primary font-extrabold italic">Handled for You</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mt-2 mb-5"
        >
          Appointment Bookings & Customer Calls, Automated.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Lena joins your team as a voice agent. It speaks 40+ languages, remembers what people just said, and replies naturally — without sounding like a script.
        </motion.p>

        {/* Demo Badge */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-foreground/80 text-sm sm:text-base font-medium shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(139,92,246,0.8)]" />
            <span className="text-primary font-semibold">Online</span>
            <span className="text-muted-foreground">Try the demo — hear Lena in action.</span>
          </div>
        </div>

        {/* Input Bar */}
        <div className="relative mx-auto mt-4 w-full max-w-md sm:max-w-lg px-2">
          <div className="flex items-center rounded-full bg-white shadow-lg px-3 py-2 border border-border/30 overflow-hidden">
            <div className="flex items-center gap-2 w-full min-w-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex-none inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm sm:text-base text-foreground/90 hover:bg-muted/80 focus:outline-none"
                    aria-label="Select country code"
                  >
                    <span className="text-lg leading-none">{selectedCountry.flag}</span>
                    <span className="ml-1">{selectedCountry.code}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {countries.map((c) => (
                    <DropdownMenuItem
                      key={c.code}
                      onSelect={() => setSelectedCountry(c)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-lg leading-none">{c.flag}</span>
                      <span className="text-xs font-medium">{c.code}</span>
                      <span className="ml-auto text-xs text-muted-foreground truncate max-w-[6rem]">
                        {c.label}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <input
                type="tel"
                inputMode="tel"
                placeholder="Enter number"
                className="flex-1 min-w-0 bg-transparent px-2 py-1 text-sm sm:text-base outline-none placeholder:text-muted-foreground border-none"
              />

              <div className="flex-none ml-2">
                <Button className="w-10 h-9 sm:w-12 sm:h-10 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-none flex items-center justify-center">
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-8 md:mt-10 max-w-xl w-full">
          <div className="grid grid-cols-3 gap-2 md:gap-6 text-center w-full">
            <div className="flex flex-col items-center gap-1">
              <Phone className="h-5 w-5 text-primary/80" />
              <div className="text-lg sm:text-xl font-semibold">10,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Concurrent Calls</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Target className="h-5 w-5 text-primary/80" />
              <div className="text-lg sm:text-xl font-semibold">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Adherence</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Languages className="h-5 w-5 text-primary/80" />
              <div className="text-lg sm:text-xl font-semibold">20+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
