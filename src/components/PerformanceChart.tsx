"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { year: 'Inicio', lau: 100, mercado: 100 },
  { year: 'Año 1', lau: 120, mercado: 109.5 },
  { year: 'Año 2', lau: 144, mercado: 119.9 },
  { year: 'Año 3', lau: 172.8, mercado: 131.3 },
];

const chartConfig = {
  lau: {
    label: "LAU (20%)",
    color: "hsl(var(--accent))",
  },
  mercado: {
    label: "Mercado (9.5%)",
    color: "hsl(var(--muted-foreground))",
  },
};

export function PerformanceChart() {
  return (
    <section id="evidence" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            Rendimiento Histórico Real
          </h2>
          <p className="text-lg text-muted-foreground">
            Comparativa de crecimiento compuesto basado en resultados auditados de los últimos 3 años.
          </p>
        </div>

        <Card className="p-6 bg-white shadow-xl border-none">
          <CardHeader>
            <CardTitle>Crecimiento de Capital</CardTitle>
            <CardDescription>Visualización del interés compuesto anualizado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ChartContainer config={chartConfig}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value}`} 
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend verticalAlign="top" height={36}/>
                  <Line 
                    type="monotone" 
                    dataKey="lau" 
                    stroke="var(--color-lau)" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: "var(--color-lau)" }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mercado" 
                    stroke="var(--color-mercado)" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    dot={{ r: 4, fill: "var(--color-mercado)" }} 
                  />
                </LineChart>
              </ChartContainer>
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground italic">
              * Datos basados en el rendimiento promedio anualizado de 20% para LAU vs 9.5% del mercado tradicional.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
