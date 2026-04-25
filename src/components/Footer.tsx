
import { TrendingUp, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary tracking-tight">Asistente Soberano</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empoderando a inversores con infraestructura privada e inteligencia financiera de grado profesional.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">Beneficios</Link></li>
              <li><Link href="#evidence" className="hover:text-primary transition-colors">Evidencia</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Planes</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Documentación</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Carreras</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Riesgos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
          <p>© 2024 Asistente Soberano. Todos los derechos reservados.</p>
          <p>Creado para el inversor libre y soberano.</p>
        </div>
      </div>
    </footer>
  );
}
