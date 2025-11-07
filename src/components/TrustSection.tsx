import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => {
  const certifications = [
    "ISO 27001",
    "SOC 2",
    "GDPR",
    "HITRUST",
    "CCPA",
    "AICPA SOC",
    "PCI DSS"
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">
              RESPONSIBLE AI
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure by Design.
              <br />
              Trusted at Scale.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our LLM-first platform is designed with the highest commitment to transparency,
                trust, and compliance. We have protocols and certifications in place to ensure
                that every single interaction is private, secure, and auditable.
              </p>
              <p>
                We regularly undergo comprehensive third-party audits that examine every measure
                of security and privacy, continually re-evaluating our policies, procedures, and
                technical implementations over extended periods.
              </p>
              <p className="font-medium text-foreground">
                Our AI agents are built with:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strict guardrails throughout the entire process to minimize hallucinations and ensure your AI agents always stay on-topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>When AI agents access your CRM and other systems, they do so with necessary data minimization, field-level encryption, and access controls</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="grid grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full border-2 border-border flex items-center justify-center bg-background cursor-pointer"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="w-8 h-8 text-primary mx-auto mb-1" />
                    </motion.div>
                    <p className="text-xs font-semibold">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
