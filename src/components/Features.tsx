import { Card, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Analysis",
      description: "Monitor and analyze every conversation as it happens with AI-powered insights."
    },
    {
      icon: Users,
      title: "Agent Assist",
      description: "Provide your team with real-time guidance and suggestions during customer interactions."
    },
    {
      icon: FileText,
      title: "Quality Assurance",
      description: "Automate QA processes and ensure consistent, high-quality customer experiences."
    }
  ];


  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Lena Can Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative h-full">
                <Card className="border border-border/40 bg-card hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
