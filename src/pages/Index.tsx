import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LenaShowcase from "@/components/LenaShowcase";
import ConversationDemo from "@/components/ConversationDemo";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import TrustSection from "@/components/TrustSection";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import UseCases from "@/components/UseCases";
import AgentDemoSection from "@/components/AgentDemoSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      <Hero />
      <UseCases />
  <AgentDemoSection />
      <IntegrationsSection />
      <ParallaxSection speed={-0.3}>
  <LenaShowcase />
      </ParallaxSection>
      <ConversationDemo />
      <ParallaxSection speed={0.2}>
        <StatsSection />
      </ParallaxSection>
    <Features />
      <ParallaxSection speed={-0.2}>
        <TrustSection />
      </ParallaxSection>
      <FAQSection />
  {/* CTASection intentionally removed per request */}
      <Footer />
    </div>
  );
};

export default Index;
