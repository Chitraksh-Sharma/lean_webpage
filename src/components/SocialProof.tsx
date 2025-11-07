import { motion } from "framer-motion";

const SocialProof = () => {
  const companies = ["DASH", "Accolade", "JG WENTWORTH", "Central Bank", "TechCorp", "GlobalCo"];
  
  return (
    <section className="py-16 px-6 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-12 font-medium"
        >
          No sales pitch, just AI that's surprisingly <span className="italic">human</span>
        </motion.p>
        
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={index}
                className="text-2xl font-bold tracking-tight opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
