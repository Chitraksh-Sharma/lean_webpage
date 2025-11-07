import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/lib/seo";
import charVideo4 from "@/assets/charactors/charvideo4.gif";

const Pricing = () => {
  usePageSEO({
    title: "Pricing – Lena AI",
    description:
      "Compare free and paid plans. Start free and upgrade when Lena saves your team time.",
    canonical: "https://example.com/pricing",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3">Pricing</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Start free. Scale when you're sure Lena saves your team real time.
        </p>

        {/* Cards grid: 1 column on xs, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Starter", "Pro", "Enterprise"].map((tier, idx) => (
            <div
              key={tier}
              className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-sm font-medium text-muted-foreground">{tier}</div>

              <div className="mt-3 text-2xl sm:text-3xl font-bold">
                {idx === 0 && "$0"}
                {idx === 1 && "$99"}
                {idx === 2 && "Custom"}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground flex-1">
                <li>• Unlimited conversations</li>
                <li>• 40+ languages included</li>
                <li>• API + webhooks</li>
                <li>• Enterprise security baked in</li>
              </ul>

              <div className="w-full flex justify-center">
                <button
                  className="mt-6 inline-flex w-full max-w-[280px] items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={idx === 2 ? "Contact Sales" : "Get Started"}
                >
                  {idx === 2 ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Decorative character image - hidden on small screens and positioned responsively */}
      <div className="pointer-events-none fixed left-0 bottom-0 -z-10 hidden md:block lg:pl-24">
        <img src={charVideo4} alt="Running character animation" className="w-64 max-w-xs h-auto" />
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;