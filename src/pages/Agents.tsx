import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentDemoSection from "@/components/AgentDemoSection";
import { usePageSEO } from "@/lib/seo";

const Agents = () => {
  usePageSEO({
  title: "Agents – Lena AI",
    description: "Explore ready-to-use voice agent templates for logistics, finance, healthcare and more.",
    canonical: "https://example.com/agents"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-7xl px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Agents</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Explore industry-ready voice agents you can deploy today.
        </p>
        <AgentDemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Agents;
