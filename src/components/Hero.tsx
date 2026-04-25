
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, LineChart, Sparkles } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-finance")!;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
              <Sparkles className="h-4 w-4" />
              <span>Investment Intelligence Reimagined</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Clarity in Every <span className="text-accent">Investment</span> Decision.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Navigate the complex world of finance with AI-driven market analysis and mathematically-backed insights. Transparent, professional, and built for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-lg bg-primary">Start Analyzing Now</Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/5">View Sample Insights</Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span>Private & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LineChart className="h-5 w-5 text-accent" />
                <span>Data-Driven Growth</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] w-full animate-in fade-in zoom-in duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-2 scale-105" />
            <div className="relative bg-card border rounded-3xl shadow-2xl overflow-hidden h-full aspect-video lg:aspect-auto">
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
