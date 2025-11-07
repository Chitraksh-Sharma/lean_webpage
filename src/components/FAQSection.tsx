import { motion } from "framer-motion";
import leftCharGif from "@/assets/charactors/charvideo3.gif";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Lena AI?",
    a: "Lena is a voice agent that sounds natural, handles routine calls for you, and hands off gracefully when a human should step in.",
  },
  {
    q: "Who owns Lena AI?",
    a: "Lena AI is built and maintained by the team at Development United.",
  },
  {
    q: "What languages does Lena AI support?",
    a: "More than 40 languages today — plus a growing list of regional accents and dialects.",
  },
  {
    q: "Is Lena AI available 24/7?",
    a: "Yes. It doesn't need shifts, breaks or coffee. Your line stays responsive around the clock.",
  },
  {
    q: "What makes Lena AI different from traditional IVR systems?",
    a: "No rigid press‑1‑for‑this menus. Lena listens, adapts mid‑sentence and keeps context without sounding canned.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Decorative animated character on the left */}
      <img
        src={leftCharGif}
  alt="Lena character"
        className="hidden md:block absolute left-8 md:left-16 lg:left-24 xl:left-28 top-36 md:top-44 lg:top-56 xl:top-64 w-56 md:w-72 lg:w-96 xl:w-[28rem] select-none pointer-events-none opacity-95 drop-shadow-xl"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <div className="container mx-auto max-w-7xl grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">FAQs</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Still curious how it all fits together? <br /> Here are quick answers.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="rounded-2xl divide-y overflow-hidden border border-border/40 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="px-8 py-6 text-left text-base md:text-lg font-medium data-[state=open]:bg-muted/40 transition-colors">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pt-0 pb-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
