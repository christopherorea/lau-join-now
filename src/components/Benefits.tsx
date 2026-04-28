import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Target, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Resultados Validados",
    description: "No somos una promesa. LAU utiliza matemáticas avanzadas para maximizar ganancias arriesgando lo mínimo, con un historial probado de consistencia.",
    icon: BarChart3,
    color: "text-accent"
  },
  {
    title: "Privacidad por Diseño",
    description: "Tu información financiera no es moneda de cambio. LAU mantiene tus datos y montos en tu propio entorno privado con reglas estrictas de seguridad.",
    icon: ShieldCheck,
    color: "text-primary"
  },
  {
    title: "Ejecución Inteligente",
    description: "La utilidad no solo analiza, actúa. Se conecta a tu cuenta de Bitso para realizar las operaciones necesarias, siempre bajo tu autorización previa.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Control Soberano",
    description: "Tú eres el único dueño de las llaves. LAU opera para ti, pero nunca tiene control total sobre el retiro de tus fondos.",
    icon: Target,
    color: "text-secondary"
  }
];

export function Benefits() {
  return (
    <section id="features" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            ¿Por qué elegir LAU?
          </h2>
          <p className="text-lg text-muted-foreground">
            La bridge perfecta entre la seguridad de tus datos y la optimización de tu capital.
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
