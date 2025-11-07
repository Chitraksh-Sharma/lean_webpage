import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageSEO } from "@/lib/seo";

const Company = () => {
  usePageSEO({
  title: "About – Lena AI",
    description: "Meet the team building voice AI that actually feels helpful.",
    canonical: "https://example.com/company"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Company</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We’re building voice AI that actually feels helpful — not cold, not scripted, not frustrating.
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="rounded-2xl border border-border/40 bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              We’re a small team obsessed with making automated conversations kinder, clearer and faster. If it feels robotic, we fix it.
            </p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Values</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Start with the user’s ear</li>
              <li>• Privacy isn’t optional</li>
              <li>• Ship, learn, refine</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Company;
