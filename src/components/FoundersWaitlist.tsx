
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Crown, Star } from "lucide-react";

export function FoundersWaitlist() {
  return (
    <section id="founders" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 skew-x-[15deg] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Limited Opportunity</span>
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Become one of the <span className="text-secondary underline decoration-secondary/30">10 Founders</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We are looking for 10 visionary investors to join our "10 Fundadores" program. Get exclusive early access, direct influence on the product roadmap, and lifetime special pricing.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Crown className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Lifetime Pro Access</h4>
                  <p className="text-sm text-primary-foreground/70">Never pay for a monthly subscription again.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Private Beta Group</h4>
                  <p className="text-sm text-primary-foreground/70">Collaborate directly with our engineers.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white text-foreground shadow-2xl overflow-hidden min-h-[600px]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Apply for the Waitlist</CardTitle>
              <CardDescription>Only 10 slots available. We'll contact you within 48 hours.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfD_K_D_M_S_M_S_M_S_M/viewform?embedded=true" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full h-[550px]"
              >
                Loading form...
              </iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
