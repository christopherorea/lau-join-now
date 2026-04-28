
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, LineChart, Sparkles } from "lucide-react";

export function Hero() {
  // Buscamos la imagen específica para el Hero de LAU
  const heroImage = (PlaceHolderImages && PlaceHolderImages.length > 0) 
    ? PlaceHolderImages.find((img) => img.id === "lau-hero-main") || PlaceHolderImages[0]
    : {
        id: "lau-hero-main",
        description: "LAU Financial Dashboard",
        imageUrl: "https://picsum.photos/seed/lau-hero/1200/600",
        imageHint: "finance dashboard"
      };

  const scrollToWaitlist = () => {
    document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>LAU: Local Agentic Utility</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Tu Patrimonio, Bajo tu <span className="text-accent">Propio Control</span>.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Activa a tu experto financiero digital. Una infraestructura privada que ha generado un 20% de retorno anual durante los últimos 3 años, optimizando tus inversiones con matemáticas avanzadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 text-lg bg-primary" onClick={scrollToWaitlist}>
                Solicitar Acceso Founder
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/5" asChild>
                <a href="#evidence">Ver Rendimiento Histórico</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span>Privacidad Total</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LineChart className="h-5 w-5 text-accent" />
                <span>Retorno del 20% Anual</span>
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
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
