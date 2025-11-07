import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        {/* CTA Card with wavy background pattern */}
        <div className="relative mx-auto rounded-3xl bg-[#AEB7FF] border border-border/40 shadow-2xl overflow-hidden px-6 sm:px-10 md:px-16 py-12 md:py-16">
          {/* Wavy pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
            <defs>
              <pattern id="waves" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 10 0 20 10 T 40 10" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            We don't pitch AI hype.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            We deliver business outcomes.
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 md:mb-12">
            See Lena in action and explore how voice automation can impact your KPIs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-base px-8 py-6 bg-white text-foreground hover:bg-white/90 border border-black/10 shadow-sm">
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
