
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { month: 'Ene', sistema: 100, mercado: 100 },
  { month: 'Feb', sistema: 105, mercado: 102 },
  { month: 'Mar', sistema: 112, mercado: 101 },
  { month: 'Abr', sistema: 118, mercado: 104 },
  { month: 'May', sistema: 125, mercado: 106 },
  { month: 'Jun', sistema: 132, mercado: 105 },
  { month: 'Jul', sistema: 140, mercado: 108 },
  { month: 'Ago', sistema: 148, mercado: 110 },
  { month: 'Sep', sistema: 155, mercado: 107 },
  { month: 'Oct', sistema: 165, mercado: 111 },
  { month: 'Nov', sistema: 175, mercado: 113 },
  { month: 'Dic', sistema: 185, mercado: 115 },
];

const chartConfig = {
  sistema: {
    label: "Asistente Soberano",
    color: "hsl(var(--accent))",
  },
  mercado: {
    label: "Mercados Tradicionales",
    color: "hsl(var(--muted-foreground))",
  },
};

export function PerformanceChart() {
  return (
    <section id="evidence" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            Evidencia Visual de Rendimiento
          </h2>
          <p className="text-lg text-muted-foreground">
            Comparativa del rendimiento histórico acumulado del 20% anual frente a los índices tradicionales.
          </p>
        </div>

        <Card className="p-6 bg-white shadow-xl">
          <CardHeader>
            <CardTitle>Rendimiento Acumulado (Simulado)</CardTitle>
            <CardDescription>Visualización del crecimiento basado en modelos matemáticos avanzados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ChartContainer config={chartConfig}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend verticalAlign="top" height={36}/>
                  <Line 
                    type="monotone" 
                    dataKey="sistema" 
                    stroke="var(--color-sistema)" 
                    strokeWidth={3} 
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mercado" 
                    stroke="var(--color-mercado)" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    dot={false} 
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
