
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary tracking-tight">LAU: Local Agentic Utility</span>
          </div>

          <nav className="flex gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Beneficios</Link>
            <Link href="#evidence" className="hover:text-primary transition-colors">Evidencia</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Planes</Link>
          </nav>

          <div className="flex gap-6 text-xs text-muted-foreground font-medium uppercase tracking-widest">
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-50">
          <p>© 2024 LAU. Tu patrimonio, bajo tu propio control.</p>
        </div>
      </div>
    </footer>
  );
}
