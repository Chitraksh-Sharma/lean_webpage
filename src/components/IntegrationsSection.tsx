import { motion } from "framer-motion";
import calendlyLogo from "@/assets/logos/calendly.svg";
import driveLogo from "@/assets/logos/google-drive.svg";
import freshworksLogo from "@/assets/logos/freshworks.svg";
import zoomLogo from "@/assets/logos/zoom.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import shopifyLogo from "@/assets/logos/shopify.svg";
import twilioLogo from "@/assets/logos/twilio.svg";
import zendeskLogo from "@/assets/logos/zendesk.svg";
import sendbirdLogo from "@/assets/logos/sendbird.svg";
import apiLogo from "@/assets/logos/api.svg";
import odooLogo from "@/assets/logos/odoo.svg";
import gcalLogo from "@/assets/logos/google-calendar-icon-2020-.svg";
import gmeetLogo from "@/assets/logos/google-meet-icon-2020-.svg";
import gmailLogo from "@/assets/logos/official-gmail-icon-2020-.svg";
import char11 from "@/assets/charactors/char11.png";

type Integration = {
  name: string;
  description: string;
  logo: string;
  tint: string;
};


const integrations: Integration[] = [
  { name: "Calendly", description: "Schedule meetings right from a call", logo: calendlyLogo, tint: "bg-sky-500/5" },
  { name: "Google Calendar", description: "Create events hands‑free", logo: gcalLogo, tint: "bg-indigo-500/5" },
  { name: "Google Meet", description: "Spin up meetings instantly", logo: gmeetLogo, tint: "bg-blue-500/5" },
  { name: "Zoom", description: "Trigger or join live meetings", logo: zoomLogo, tint: "bg-cyan-500/5" },
  { name: "Google Drive", description: "Store recordings + notes", logo: driveLogo, tint: "bg-emerald-500/5" },
  { name: "Gmail", description: "Draft follow‑up emails automatically", logo: gmailLogo, tint: "bg-red-500/5" },
  { name: "HubSpot", description: "Capture & sync new leads", logo: hubspotLogo, tint: "bg-orange-500/5" },
  { name: "Twilio", description: "Programmable voice backbone", logo: twilioLogo, tint: "bg-rose-500/5" },
  { name: "Shopify", description: "Check orders & assist buyers", logo: shopifyLogo, tint: "bg-emerald-500/5" },
  { name: "Odoo", description: "Update CRM / ERP records", logo: odooLogo, tint: "bg-violet-500/5" },
  { name: "API", description: "Build custom voice workflows", logo: apiLogo, tint: "bg-muted" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Works With Everything You Already Use.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrates into your stack. Extends your superpowers.
          </p>
        </motion.div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 relative xl:pr-72 2xl:pr-80">
          <img
            src={char11}
            alt="Lena character"
            className="hidden xl:block absolute -right-20 2xl:-right-12 top-1/2 -translate-y-1/2 w-72 2xl:w-[22rem] pointer-events-none select-none opacity-95"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="group"
            >
              <div className="flex h-full rounded-2xl border border-border/40 bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
                <div className={`flex items-center justify-center w-24 shrink-0 ${item.tint}`}> 
                  <img src={item.logo} alt={`${item.name} logo`} className="h-10 w-10 object-contain" loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-col justify-center px-6 py-5 pr-7">
                  <h3 className="font-semibold text-base md:text-lg mb-1 tracking-tight">{item.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-snug">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">…and more.</p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
