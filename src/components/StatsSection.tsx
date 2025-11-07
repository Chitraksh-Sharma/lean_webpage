import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const stats = [
    { value: 40, suffix: "+", label: "Languages Supported", duration: 2 },
    { value: 800, suffix: "ms", label: "Average Response Time", duration: 2.5 },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee", duration: 2 },
    { value: 10, suffix: "M+", label: "Conversations Handled", duration: 3 }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lena by the <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powering millions of conversations across the globe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
              />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, suffix, duration }: { value: number; suffix: string; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-bold text-primary"
    >
      {count}{suffix}
    </motion.div>
  );
};

export default StatsSection;
