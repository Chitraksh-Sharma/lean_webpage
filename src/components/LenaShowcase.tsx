import { motion } from "framer-motion";
import { Mic, Brain, Globe, Zap, Shield, MessageSquare } from "lucide-react";
import char9 from "@/assets/charactors/char9.png";

const LenaShowcase = () => {
  const capabilities = [
    {
      icon: Mic,
      title: "Natural Speech",
  description: "Sounds natural and expressive — not robotic — in 40+ languages",
      delay: 0.1
    },
    {
      icon: Brain,
      title: "Contextual Intelligence",
  description: "Keeps track of context so people don’t have to repeat themselves",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Global Reach",
  description: "Comfortable with different accents and regional phrasing",
      delay: 0.3
    },
    {
      icon: Zap,
      title: "Lightning Fast",
  description: "Replies fast enough that it feels like a real back‑and‑forth",
      delay: 0.4
    },
    {
      icon: Shield,
      title: "Enterprise Security",
  description: "Built with SOC 2, GDPR & HIPAA standards in mind — data stays protected",
      delay: 0.5
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Ready",
  description: "Plug her into phone, web chat or messaging — same experience",
      delay: 0.6
    }
  ];

  return (
    <section className="pt-24 pb-12 px-6 relative bg-white dark:bg-background">
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Lena is <span className="text-primary">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lena isn't a script tree. It listens, adapts and speaks like a helpful teammate — even when conversations wander.
          </p>
        </motion.div>
        {/* Left decorative character beside the grid */}
        <div className="relative">
          <img
            src={char9}
            alt="Lena character"
            className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-56 xl:w-64 select-none pointer-events-none drop-shadow-2xl opacity-95"
            draggable={false}
            loading="lazy"
            decoding="async"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 lg:pl-40 xl:pl-48">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: capability.delay, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-card border border-border/40 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <capability.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LenaShowcase;
