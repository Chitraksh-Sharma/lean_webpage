import { Github, Twitter, Linkedin } from "lucide-react";

const companyLinks = [
  "Blogs",
  "Newsletters",
  "Use Cases",
  "Pricing",
  "Careers",
  "Book A Demo",
  "Contact Us",
];

const industries = [
  "Pharma & Healthcare",
  "Supply & Logistics",
  "E-commerce & Retail",
  "Finance & Fintech",
  "Talent & Hiring",
  "EdTech & Learning",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 px-6 pb-16 md:pb-24">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="rounded-[28px] bg-zinc-900 text-zinc-100 shadow-2xl border border-white/10 p-10 md:p-14 min-h-[320px]">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Brand + blurb + socials */}
            <div>
              <div className="flex items-center gap-1 mb-5">
                <div className="w-2 h-6 bg-white rounded" />
                <div className="w-2 h-6 bg-white/60 rounded" />
                <div className="w-2 h-6 bg-white/30 rounded" />
                <span className="text-xl font-bold ml-2">Lena AI</span>
              </div>
              <p className="text-sm text-zinc-300 max-w-md">
                Lena is a no-code platform that uses AI voice assistants to automate calls, capture leads, and boost business efficiency.
              </p>
              <div className="flex items-center gap-4 mt-5 text-zinc-200">
                <a aria-label="Twitter" href="#" className="hover:text-white/90 transition-colors"><Twitter className="h-5 w-5" /></a>
                <a aria-label="LinkedIn" href="#" className="hover:text-white/90 transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a aria-label="GitHub" href="#" className="hover:text-white/90 transition-colors"><Github className="h-5 w-5" /></a>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-zinc-100">Company</h3>
                <ul className="space-y-2">
                  {companyLinks.map((label) => (
                    <li key={label}><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-zinc-100">Industries We Serve</h3>
                <ul className="space-y-2">
                  {industries.map((label) => (
                    <li key={label}><a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-8 border-white/10" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-zinc-400">
            <p>© {year} Lena AI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-200 transition-colors">Privacy</a>
              <span className="text-zinc-600">•</span>
              <a href="#" className="hover:text-zinc-200 transition-colors">Terms</a>
              <span className="text-zinc-600">•</span>
              <a href="#" className="hover:text-zinc-200 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
