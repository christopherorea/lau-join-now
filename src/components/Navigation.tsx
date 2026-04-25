
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-primary">Asistente Soberano</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Beneficios</Link>
            <Link href="#evidence" className="hover:text-primary transition-colors">Evidencia</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Planes</Link>
            <Link href="#founders" className="hover:text-primary transition-colors">Fundadores</Link>
            <Button size="sm" className="bg-primary text-primary-foreground" asChild>
              <a href="#founders">Solicitar Acceso</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 p-4 text-sm font-medium">
            <Link href="#features" onClick={() => setIsOpen(false)}>Beneficios</Link>
            <Link href="#evidence" onClick={() => setIsOpen(false)}>Evidencia</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)}>Planes</Link>
            <Link href="#founders" onClick={() => setIsOpen(false)}>Fundadores</Link>
            <Button className="w-full" asChild>
              <a href="#founders">Solicitar Acceso</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
