import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import hostChar1 from "@/assets/charactors/cahr1.png";
import hostChar3 from "@/assets/charactors/char3.png";
import hostChar4 from "@/assets/charactors/char4.png";
import hostChar2 from "@/assets/charactors/char2.png";
import hostChar5 from "@/assets/charactors/char5.png";
import hostChar6 from "@/assets/charactors/char6.png";
import hostChar7 from "@/assets/charactors/char7.png";
import hostChar8 from "@/assets/charactors/char8.png";
import {
  Truck,
  Stethoscope,
  Landmark,
  GraduationCap,
  BriefcaseBusiness,
  ShoppingBag,
  Phone,
} from "lucide-react";

type CategoryKey = "logistics" | "health" | "financial" | "education" | "hr" | "ecommerce";

const categories: { key: CategoryKey; label: string; icon: any }[] = [
  { key: "logistics", label: "Logistics", icon: Truck },
  { key: "health", label: "Health Care", icon: Stethoscope },
  { key: "financial", label: "Financial", icon: Landmark },
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "hr", label: "HR & Recruitment", icon: BriefcaseBusiness },
  { key: "ecommerce", label: "Ecommerce", icon: ShoppingBag },
];

const AgentDemoSection = () => {
  // Preload agent images to prevent lag
  useEffect(() => {
    const images = [hostChar1, hostChar2, hostChar3, hostChar4, hostChar5, hostChar6, hostChar7, hostChar8];
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);
  const [selected, setSelected] = useState<CategoryKey>("health");
  const [company, setCompany] = useState("");

  const SelectedIcon = categories.find((c) => c.key === selected)?.icon ?? Stethoscope;
  // Mapping by category
  // logistics -> char3, health -> char4, financial -> char5, education -> cahr6, hr -> char7, ecommerce -> char8, default -> char1
  const currentHost =
    selected === "logistics"
      ? hostChar3
      : selected === "health"
      ? hostChar4
      : selected === "financial"
      ? hostChar5
      : selected === "education"
      ? hostChar6
      : selected === "hr"
      ? hostChar7
      : selected === "ecommerce"
      ? hostChar8
      : hostChar1;

  // Slightly larger character for HR & Education
  const hostSize = selected === "hr" || selected === "education" ? "w-32 md:w-44" : "w-28 md:w-36";

  function handleStart(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: integrate call start here
    console.log("Start call for", selected, company || "(company not provided)");
  }

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">Use your Agent.</h2>
          <p className="mt-3 text-muted-foreground">Select a category and talk with your agent.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Category tiles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map(({ key, label, icon: Icon }) => {
              const active = key === selected;
              return (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`group text-left rounded-2xl border transition-all duration-200 p-5 bg-card hover:bg-accent/30 ${
                    active ? "bg-muted/70 border-primary/40 ring-2 ring-primary/30" : "border-border"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${active ? "bg-primary/10 text-primary" : "bg-muted text-foreground/70"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-medium">{label}</div>
                </button>
              );
            })}
          </div>

          {/* Right: Try and input */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className={`relative ${hostSize}`}>
                <img
                  src={currentHost}
                  alt="agent"
                  className="w-full select-none pointer-events-none"
                />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold">
                  Try <span className="text-primary">'{categories.find((c) => c.key === selected)?.label}'</span> Agents
                </div>
                <p className="text-sm text-muted-foreground mt-1">Agent call is available for 2 minutes</p>
              </div>
            </div>

            <form onSubmit={handleStart} className="mt-4">
              <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur px-3 py-3 shadow-[0_15px_45px_-12px_rgba(72,64,255,0.35)]">
                <div className="flex items-center gap-3">
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter company name"
                    className="h-12 text-base flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button type="submit" className="h-12 px-5 text-base">
                    <Phone className="w-5 h-5 mr-2" /> Start Call
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentDemoSection;
