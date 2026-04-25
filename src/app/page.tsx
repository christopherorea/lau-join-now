
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { AIQueryTool } from "@/components/AIQueryTool";
import { InvestmentInsightsTool } from "@/components/InvestmentInsightsTool";
import { Pricing } from "@/components/Pricing";
import { FoundersWaitlist } from "@/components/FoundersWaitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <AIQueryTool />
        <InvestmentInsightsTool />
        <Pricing />
        <FoundersWaitlist />
      </main>
      <Footer />
    </div>
  );
}
