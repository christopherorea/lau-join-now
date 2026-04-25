
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PerformanceChart } from "@/components/PerformanceChart";
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
        <PerformanceChart />
        <Pricing />
        <FoundersWaitlist />
      </main>
      <Footer />
    </div>
  );
}
