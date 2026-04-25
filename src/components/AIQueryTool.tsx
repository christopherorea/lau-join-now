
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send, FileSearch, CheckCircle2 } from "lucide-react";

export function AIQueryTool() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleQuery = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    // Simulating AI Flow call as per prompt instructions regarding src/ai/flows
    setTimeout(() => {
      setResult(`Based on current market volatility indices and mathematical trend regression, your query suggests a cautious approach towards large-cap tech. 

Analysis:
1. Volatility (VIX) is trending 15% above 52-week averages.
2. Market liquidity metrics indicate a tightening cycle.
3. Suggested move: Maintain liquidity while waiting for consolidation.

(This is a simulated AI response based on ClarityVest's analytical models)`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="tools" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-primary">Financial Query Tool</h2>
            <p className="text-lg text-muted-foreground">
              Input your complex financial questions. Our AI analyzes historical patterns, current trends, and mathematical indicators to give you a clear, data-backed perspective.
            </p>
            <ul className="space-y-4">
              {[
                "Market trend analysis",
                "Risk assessment models",
                "Sector performance comparisons",
                "Macroeconomic impact forecasting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="shadow-2xl border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-primary" />
                Ask the Analyst
              </CardTitle>
              <CardDescription>
                Try: "What is the 5-year outlook for emerging market bonds given current inflation?"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Type your financial question here..."
                className="min-h-[150px] text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button 
                onClick={handleQuery} 
                disabled={isLoading || !query.trim()}
                className="w-full bg-primary h-12 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Market Data...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Get Market Insight
                  </>
                )}
              </Button>

              {result && (
                <div className="mt-8 p-6 bg-muted rounded-xl border animate-in fade-in slide-in-from-top-2">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Analysis Complete
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed italic">
                    {result}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
