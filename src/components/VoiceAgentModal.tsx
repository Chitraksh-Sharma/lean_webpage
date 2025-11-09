import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, PhoneOff, AlertCircle } from "lucide-react";
import VoiceVisualizer from "./VoiceVisualizer";
import { useLiveKit } from "@/hooks/useLiveKit";
import { useToast } from "@/hooks/use-toast";

interface VoiceAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAgentModal = ({ isOpen, onClose }: VoiceAgentModalProps) => {
  const [callDuration, setCallDuration] = useState(0);
  const { toast } = useToast();

  const {
    isConnecting,
    isConnected,
    error,
    isMuted,
    connect,
    disconnect,
    toggleMute,
  } = useLiveKit({
    tokenServerUrl: "http://localhost:3000/get-token",
    onError: (err) => {
      console.error("LiveKit error:", err);
      toast({
        title: "Connection Error",
        description: err.message || "Failed to connect to voice assistant",
        variant: "destructive",
      });
    },
    onConnected: () => {
      console.log("Successfully connected to Lena");
      toast({
        title: "Connected",
        description: "You're now talking to Lena",
      });
    },
    onDisconnected: () => {
      console.log("Disconnected from Lena");
    },
  });

  // Connect when modal opens
  useEffect(() => {
    if (isOpen) {
      setCallDuration(0);
      connect();
    } else {
      disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); // Only depend on isOpen, not connect/disconnect functions

  // Call duration timer
  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isConnected]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndCall = async () => {
    await disconnect();
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleToggleMute = async () => {
    await toggleMute();
  };

  const getCallState = () => {
    if (error) return "error";
    if (isConnecting) return "connecting";
    if (isConnected) return "connected";
    return "idle";
  };

  const callState = getCallState();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] border-border/50 bg-gradient-to-b from-background to-background/95 backdrop-blur-xl">
        <DialogHeader className="hidden">
          <DialogTitle>Voice Call with Lena</DialogTitle>
          <DialogDescription>
            You are now in a voice call with Lena AI Assistant
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-8 px-4">
          {/* Lena Character Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            {/* Pulsing rings when active */}
            <AnimatePresence>
              {callState === "connected" && !isMuted && (
                <>
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
                  />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-primary/40 blur-lg"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Avatar Container */}
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Placeholder for Character Image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/80">L</div>
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-background border border-border shadow-lg"
            >
              <div className="flex items-center gap-2">
                {callState === "connecting" && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-yellow-500 rounded-full"
                    />
                    <span className="text-xs text-muted-foreground">
                      Connecting...
                    </span>
                  </>
                )}
                {callState === "connected" && (
                  <>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                    <span className="text-xs font-medium text-foreground">
                      {formatDuration(callDuration)}
                    </span>
                  </>
                )}
                {callState === "error" && (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-xs text-muted-foreground">
                      Error
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-1">Lena</h2>
            <p className="text-sm text-muted-foreground">
              AI Voice Assistant
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3"
            >
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-destructive mb-1">
                  Connection Failed
                </p>
                <p className="text-xs text-destructive/80">{error.message}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Make sure your token server is running on http://localhost:3000
                </p>
              </div>
            </motion.div>
          )}

          {/* Voice Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full mb-8"
          >
            <VoiceVisualizer isActive={callState === "connected" && !isMuted} />
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            {/* Mute Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggleMute}
              disabled={callState !== "connected"}
              className={`w-16 h-16 rounded-full transition-all duration-300 ${
                isMuted
                  ? "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500/20"
                  : "hover:bg-accent"
              }`}
            >
              {isMuted ? (
                <MicOff className="h-6 w-6" />
              ) : (
                <Mic className="h-6 w-6" />
              )}
            </Button>

            {/* End Call Button */}
            <Button
              variant="destructive"
              size="lg"
              onClick={handleEndCall}
              disabled={callState === "error"}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PhoneOff className="h-6 w-6" />
            </Button>
          </motion.div>

          {/* Hint Text */}
          {callState === "connected" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-muted-foreground mt-6 text-center"
            >
              {isMuted
                ? "You are muted. Click the microphone to unmute."
                : "Lena is listening. Start speaking..."}
            </motion.p>
          )}

          {callState === "connecting" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground mt-6 text-center"
            >
              Connecting to Lena's voice assistant...
            </motion.p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VoiceAgentModal;
