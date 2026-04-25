
import { Button } from "@/components/ui/button";
import { Check, Shield, TrendingUp, Laptop } from "lucide-react";

const plans = [
  {
    name: "Plan Lite",
    price: "$775",
    suffix: "MXN",
    description: "Para usuarios que quieren el asistente en nuestra nube segura, disponible 24/7.",
    features: ["Costo por uso o $1,500 MXN Intensivo", "Acceso en cualquier dispositivo", "Soporte estándar", "Nube privada dedicada"],
    cta: "Comenzar Lite",
    icon: Shield,
    featured: false
  },
  {
    name: "Plan Pro",
    price: "Gestión",
    suffix: "por Resultados",
    description: "Modelo autosustentable. Solo cobramos honorarios si superas el 6% anual.",
    features: ["Capital mínimo $150k MXN", "Gestión activa automatizada", "Honorarios basados en éxito", "Reportes semanales detallados"],
    cta: "Solicitar Gestión Pro",
    icon: TrendingUp,
    featured: true
  },
  {
    name: "Plan Elite",
    price: "Propia",
    suffix: "Infraestructura",
    description: "Instalamos tu propia inteligencia en un servidor físico en tu hogar u oficina.",
    features: ["25% de descuento a fundadores", "Soporte técnico prioritario", "Actualizaciones vitalicias", "Soberanía total de datos"],
    cta: "Instalar Servidor Elite",
    icon: Laptop,
    featured: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Planes y Membresías
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige el nivel de soberanía y acompañamiento que tu patrimonio merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border flex flex-col ${plan.featured ? 'border-primary ring-1 ring-primary shadow-xl bg-white' : 'border-border bg-background'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-widest">
                  Más Popular
                </div>
              )}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <plan.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.suffix}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
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
                asChild
              >
                <a href="#founders">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
