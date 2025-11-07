import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Magnet,
  PhoneCall,
  MessageSquare,
  Play,
  Truck,
  CalendarCheck,
  Pause,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import appointmentAudio from "@/assets/audio/appointment-booking-demo.mp3";
import customerCareAudio from "@/assets/audio/Customer care demo.mp3";
import lastMileAudio from "@/assets/audio/Last-mile Delivery demo.mp3";
import leadGenAudio from "@/assets/audio/Lead Generation Demo.mp3";
import loanAgentAudio from "@/assets/audio/Loan agent demo.mp3";

type Metric = { value: string; label: string };
type UseCase = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
  bg: string;
  metrics: Metric[];
  brands: string[];
  audioFile?: string;
};

const useCases: UseCase[] = [
  {
    id: "customer-support",
    title: "Customer Support",
    description:
      "Spot issues early, answer questions and give customers a smooth, human-feeling experience — without long waits.",
    icon: <MessageSquare className="w-5 h-5" />,
    iconBg: "bg-muted text-foreground",
    bg: "bg-card",
    metrics: [
      { value: "2M+", label: "Support calls done" },
      { value: "8", label: "Live projects" },
    ],
    brands: ["Zeno", "Practo"],
    audioFile: customerCareAudio,
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Qualify inbound leads, follow up automatically and keep reps focused on real opportunities.",
    icon: <Magnet className="w-5 h-5" />,
    iconBg: "bg-muted text-foreground",
    bg: "bg-card",
    metrics: [
      { value: "3M+", label: "Total calls done" },
      { value: "5", label: "Ongoing projects" },
    ],
    brands: ["Shiprocket", "GrowthSchool"],
    audioFile: leadGenAudio,
  },
  {
    id: "loan-collection",
    title: "Loan Collection",
    description:
      "Reach overdue accounts respectfully, confirm intent to pay and schedule smart follow-ups.",
    icon: <PhoneCall className="w-5 h-5" />,
    iconBg: "bg-muted text-foreground",
    bg: "bg-card",
    metrics: [
      { value: "150K+", label: "Collection calls completed" },
      { value: "12", label: "Active recovery campaigns" },
    ],
    brands: ["CRED", "Aavas Financiers", "Lorien Finance"],
    audioFile: loanAgentAudio,
  },
  {
    id: "last-mile-delivery",
    title: "Last-mile Delivery Call",
    description:
      "Confirm delivery windows, clear up confusion and cut repeat attempts before they cost you.",
    icon: <Truck className="w-5 h-5" />,
    iconBg: "bg-muted text-foreground",
    bg: "bg-card",
    metrics: [
      { value: "95%", label: "On-time confirmations" },
      { value: "-28%", label: "Failed attempts" },
    ],
    brands: ["Delhivery", "EcomExpress"],
    audioFile: lastMileAudio,
  },
  {
    id: "appointment-booking",
    title: "Appointment Booking Call",
    description:
      "Offer times, book slots, send gentle nudges and reduce no-shows without manual chasing.",
    icon: <CalendarCheck className="w-5 h-5" />,
    iconBg: "bg-muted text-foreground",
    bg: "bg-card",
    metrics: [
      { value: "40%", label: "Faster booking" },
      { value: "-20%", label: "No-shows" },
    ],
    brands: ["Apollo", "Practo"],
    audioFile: appointmentAudio,
  },
];

const UseCases = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // track which id is playing (so UI can show / toggle)
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // single audio ref reused for different demos
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Clean up audio on unmount
  useEffect(() => {
    return (): void => {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
        } catch {
          /* ignore */
        }
        audioRef.current = null;
      }
    };
  }, []);

  // Helper to stop & cleanup current audio
  const stopCurrentAudio = (): void => {
    if (!audioRef.current) return;
    try {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } catch {
      /* ignore */
    }
    // remove event listeners if any (we add inline ones below so remove isn't necessary here,
    // but keeping ref clearing is useful)
    audioRef.current = null;
    setIsPlaying(false);
    setPlayingId(null);
  };

  // Play or toggle an audio file for given useCase id
  const handleLiveCall = (id: string): void => {
    const uc = useCases.find((u) => u.id === id);
    if (!uc || !uc.audioFile) return;

    // If same id is currently playing -> toggle (pause)
    if (playingId === id && isPlaying && audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch {
        /* ignore */
      }
      setIsPlaying(false);
      setPlayingId(null);
      audioRef.current = null;
      return;
    }

    // Otherwise, stop any existing audio and start new
    stopCurrentAudio();

    // create new audio element and play
    const audio = new Audio(uc.audioFile);
    audio.preload = "auto";

    const handleEnded = (): void => {
      setIsPlaying(false);
      setPlayingId(null);
      // cleanup listener
      try {
        audio.removeEventListener("ended", handleEnded);
      } catch {
        /* ignore */
      }
      audioRef.current = null;
    };

    audio.addEventListener("ended", handleEnded);
    audioRef.current = audio;

    try {
      void audio.play();
      setIsPlaying(true);
      setPlayingId(id);
    } catch {
      // play blocked or error — still keep state consistent
      setIsPlaying(false);
      setPlayingId(null);
    }
  };

  // Auto-scroll effect (same as before)
  useEffect(() => {
    if (!api || isHovered) return;
    const intervalId = setInterval(() => api?.scrollNext(), 2500);
    return () => clearInterval(intervalId);
  }, [api, isHovered]);

  // Track active slide
  useEffect(() => {
    if (!api) return;
    const update = (): void => setSelectedIndex(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return (): void => {
      api.off("select", update as any);
    };
  }, [api]);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Use Cases</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Put Lena to work where calls pile up — support, follow-ups, payments and more.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel opts={{ align: "center", loop: true }} setApi={setApi}>
            <CarouselContent className="pl-6 sm:pl-10 lg:pl-16 pb-10 sm:pb-12">
              {useCases.map((uc, idx) => {
                const isActive = idx === selectedIndex;
                const playingThis = playingId === uc.id && isPlaying;

                return (
                  <CarouselItem key={uc.id} className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 px-3">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className={`transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "opacity-70"}`}
                    >
                      <Card className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full md:min-h-[520px] bg-card border border-border/30">
                        <CardHeader className="px-6 py-6">
                          <div className="flex items-start gap-4 min-w-0">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${uc.iconBg} flex-shrink-0`}>
                              {uc.icon}
                            </div>
                            <CardTitle className="text-lg sm:text-xl leading-tight truncate">{uc.title}</CardTitle>
                          </div>
                        </CardHeader>

                        <CardContent className="px-6 flex-1 min-h-0">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{uc.description}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {uc.metrics.map((m) => (
                              <div key={m.label} className="min-w-0">
                                <div className="text-lg sm:text-2xl font-semibold tracking-tight">{m.value}</div>
                                <div className="text-xs text-muted-foreground">{m.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6">
                            <Button
                              className="w-full sm:w-auto justify-center rounded-md h-10 px-4 bg-foreground text-background hover:bg-foreground/90"
                              onClick={() => handleLiveCall(uc.id)}
                            >
                              {playingThis ? (
                                <>
                                  <Pause className="w-4 h-4 mr-2" /> Playing…
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4 mr-2" /> Live Call
                                </>
                              )}
                            </Button>
                          </div>
                        </CardContent>

                        <CardFooter className="px-6 pt-4 pb-6 flex flex-wrap items-center gap-3 text-muted-foreground text-sm font-medium">
                          {uc.brands.map((b) => (
                            <span key={b} className="truncate max-w-full">
                              {b}
                            </span>
                          ))}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Arrows properly spaced away from cards */}
            <CarouselPrevious className="hidden lg:flex absolute -left-14 xl:-left-20 top-1/2 -translate-y-1/2 z-20 scale-110 shadow-md bg-white hover:bg-muted" />
            <CarouselNext className="hidden lg:flex absolute -right-14 xl:-right-20 top-1/2 -translate-y-1/2 z-20 scale-110 shadow-md bg-white hover:bg-muted" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
