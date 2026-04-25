
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, ListChecks, Coins, TrendingUp } from "lucide-react";

export function InvestmentInsightsTool() {
  const [risk, setRisk] = useState([50]);
  const [showInsight, setShowInsight] = useState(false);

  const getRiskLabel = (val: number) => {
    if (val < 33) return "Conservative";
    if (val < 66) return "Moderate";
    return "Aggressive";
  };

  const getAllocation = (val: number) => {
    if (val < 33) return { stocks: "30%", bonds: "60%", cash: "10%" };
    if (val < 66) return { stocks: "60%", bonds: "30%", cash: "10%" };
    return { stocks: "85%", bonds: "10%", cash: "5%" };
  };

  const alloc = getAllocation(risk[0]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            AI Investment Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Diversification is the only free lunch in finance. Get a high-level suggestion of how to balance your assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-8">
            <CardHeader className="px-0">
              <CardTitle className="text-2xl flex items-center gap-2">
                <ListChecks className="h-6 w-6 text-primary" />
                Risk Profile Selection
              </CardTitle>
              <CardDescription>Adjust the slider to your comfort level</CardDescription>
            </CardHeader>
            <CardContent className="px-0 space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-primary">{getRiskLabel(risk[0])}</span>
                  <span className="text-accent">{risk[0]}%</span>
                </div>
                <Slider 
                  defaultValue={[50]} 
                  max={100} 
                  step={1} 
                  onValueChange={setRisk}
                  className="py-4"
                />
              </div>

              <Button 
                onClick={() => setShowInsight(true)}
                className="w-full bg-primary h-12 text-lg"
              >
                Generate Allocation Suggestion
              </Button>
            </CardContent>
          </Card>

          <div className={`transition-all duration-500 ${showInsight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Equity Allocation</p>
                    <p className="text-2xl font-bold text-primary">{alloc.stocks}</p>
                  </div>
                </div>
                <div className="h-12 w-1 bg-accent rounded-full" />
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fixed Income</p>
                    <p className="text-2xl font-bold text-primary">{alloc.bonds}</p>
                  </div>
                </div>
                <div className="h-12 w-1 bg-primary rounded-full" />
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <PieChart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cash & Liquidity</p>
                    <p className="text-2xl font-bold text-primary">{alloc.cash}</p>
                  </div>
                </div>
                <div className="h-12 w-1 bg-secondary rounded-full" />
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center italic">
              *Allocations are generated by ClarityVest AI based on historical risk premiums. 
              Always consult with a human financial advisor before major moves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
