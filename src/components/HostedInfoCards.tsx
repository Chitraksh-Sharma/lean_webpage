import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Phone, ArrowRight, Database } from "lucide-react";

const WavyTile = ({ id, bg }: { id: string; bg: string }) => (
  <div className="relative h-56 md:h-64 rounded-3xl p-4 sm:p-6 overflow-hidden text-[#DCCFA3]" style={{ backgroundColor: bg }}>
    <svg className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q 10 0 20 10 T 40 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
    {/* content slot */}
    <div className="relative z-10">{/* children go here via composition in caller */}</div>
  </div>
);

const HostedInfoCards = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Inbound call example */}
          <div className="relative">
            <WavyTile id="waves-a" bg="#F1E9C8" />
            {/* Info card */}
            <Card className="relative mt-16 bg-white/95 border border-black/10 shadow-xl rounded-2xl">
              <CardContent className="p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1">Inbound</div>
                <h3 className="mt-3 text-xl font-semibold">Beth from Byond Studio</h3>
                <p className="text-sm text-muted-foreground">Created on: 2 Jun, 25</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div>
                    <div className="text-muted-foreground">Type</div>
                    <div className="font-medium">Customer FAQs</div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">Calls made</div>
                    <div className="font-semibold">66</div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <Button variant="outline" className="col-span-1"><Phone className="w-4 h-4 mr-2" />Test Call</Button>
                  <Button variant="outline" className="col-span-1"><BarChart3 className="w-4 h-4 mr-2" />Analysis</Button>
                  <Button className="col-span-1 justify-between"><span>Open</span><ArrowRight className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: Analytics example */}
          <div className="relative">
            <WavyTile id="waves-b" bg="#EFE186" />
            <Card className="relative mt-16 bg-white/95 border border-black/10 shadow-xl rounded-2xl">
              <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold">Analytics</h3>
                {/* Faux bars to avoid heavy chart lib setup */}
                <div className="mt-4">
                  <div className="flex items-end gap-3 h-40">
                    {[30, 70, 80, 75, 78, 40].map((h, i) => (
                      <div key={i} className="w-8 bg-neutral-200 rounded-lg overflow-hidden">
                        <div style={{ height: `${h}%` }} className="w-full bg-neutral-400/70"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                    {['Jan','Mar','May','Jul','Sep','Nov'].map((m) => (<span key={m}>{m}</span>))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: Numbers table example */}
          <div className="relative">
            <WavyTile id="waves-c" bg="#F1E9C8" />
            <Card className="relative mt-16 bg-white/95 border border-black/10 shadow-xl rounded-2xl">
              <CardContent className="p-0">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center"><Database className="w-5 h-5 text-neutral-600"/></div><h3 className="text-xl font-semibold">Numbers</h3></div>
                </div>
                <div className="px-5 sm:px-6 pb-4">
                  <div className="grid grid-cols-5 text-xs text-muted-foreground">
                    <div>Number</div><div>Country</div><div>Bought On</div><div>Used By</div><div>Remove</div>
                  </div>
                </div>
                <div className="divide-y">
                  {[
                    { n: '98765-4321', c: 'IN', d: 'Jul 21, 2025 11:32 pm', u: 'Default Number' },
                    { n: '91234-5678', c: 'IN', d: 'Jul 16, 2025 4:45 pm', u: 'Default Number' },
                    { n: '99876-5432', c: 'US', d: 'Aug 4, 2025 7:14 am', u: 'Default Number' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-5 items-center px-5 sm:px-6 py-3 text-sm">
                      <div className="font-medium">{row.n}</div>
                      <div>{row.c}</div>
                      <div className="text-muted-foreground">{row.d}</div>
                      <div>{row.u}</div>
                      <div className="text-right text-rose-500">✕</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostedInfoCards;
