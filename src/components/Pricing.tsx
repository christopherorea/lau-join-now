
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Clarity Starter",
    price: "$0",
    description: "Explore AI financial insights at no cost.",
    features: ["5 AI queries per month", "Standard market analysis", "Portfolio basic insights", "Community support"],
    cta: "Start Free",
    featured: false
  },
  {
    name: "Vest Pro",
    price: "$29",
    description: "For active investors seeking a data edge.",
    features: ["Unlimited AI queries", "Advanced math-backed analysis", "Real-time sector alerts", "Priority AI processing", "Exportable reports"],
    cta: "Get Pro Access",
    featured: true
  },
  {
    name: "Institutional",
    price: "Custom",
    description: "Dedicated resources for large-scale analysis.",
    features: ["API Access", "Custom risk modeling", "Dedicated strategist", "SLA guarantees"],
    cta: "Contact Sales",
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Invest in clarity. Choose a plan that fits your analysis needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border ${plan.featured ? 'border-primary ring-1 ring-primary shadow-xl bg-white' : 'border-border bg-background'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.featured ? "default" : "outline"} 
                className={`w-full h-11 ${plan.featured ? 'bg-primary' : 'border-primary text-primary hover:bg-primary/5'}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
