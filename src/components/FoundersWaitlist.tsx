"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, Crown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FoundersWaitlist() {
  return (
    <section id="founders" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 skew-x-[15deg] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Oportunidad Limitada</span>
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Reserva tu lugar en la red de <span className="text-secondary underline decoration-secondary/30">Fundadores</span>.
            </h2>
            
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Solo abriremos 10 espacios con el 25% de descuento en la instalación de servidores físicos. Asegura tu prioridad y comienza a operar con LAU.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Crown className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Descuento del 25%</h4>
                  <p className="text-sm text-primary-foreground/70">En la instalación de infraestructura física propia.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Grupo VIP Beta</h4>
                  <p className="text-sm text-primary-foreground/70">Influencia directa en el desarrollo del sistema.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center">
               <Button 
                onClick={() => document.getElementById('form-iframe')?.scrollIntoView({ behavior: 'smooth' })}
                className="mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 text-xl font-bold rounded-xl shadow-lg animate-pulse"
              >
                Solicita tu acceso aquí
              </Button>
            </div>
            
            <Card className="bg-white text-foreground shadow-2xl overflow-hidden min-h-[600px] border-none">
              <CardHeader className="text-center bg-muted/30">
                <CardTitle className="text-2xl font-bold">Registro de Prioridad</CardTitle>
                <CardDescription>Nos pondremos en contacto contigo en menos de 48 horas.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  id="form-iframe"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfD_K_D_M_S_M_S_M_S_M/viewform?embedded=true" 
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="w-full"
                >
                  Cargando formulario…
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
