
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Landmark, BarChart4, Zap } from "lucide-react";

const features = [
  {
    title: "AI-Generated Market Analysis",
    description: "Receive deep dives into market trends powered by advanced LLMs trained on financial data.",
    icon: BrainCircuit,
    color: "text-secondary"
  },
  {
    title: "Mathematically-Backed Responses",
    description: "Every insight is cross-referenced with quantitative models to ensure analytical rigor.",
    icon: Landmark,
    color: "text-primary"
  },
  {
    title: "Diversified Asset Allocation",
    description: "Get high-level suggestions for balanced portfolios tailored to your specific goals.",
    icon: BarChart4,
    color: "text-accent"
  },
  {
    title: "Instant Financial Clarity",
    description: "Ditch the jargon. We translate complex market noise into actionable insights in seconds.",
    icon: Zap,
    color: "text-yellow-500"
  }
];

export function Benefits() {
  return (
    <section id="features" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need for disciplined investing
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide the bridge between complex financial data and informed decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-background">
              <CardHeader>
                <div className={`p-3 rounded-xl bg-muted w-fit mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
