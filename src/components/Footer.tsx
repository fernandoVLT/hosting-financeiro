import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream py-12 border-t border-brand-cream/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-serif text-2xl tracking-widest">ME</h2>
          <span className="font-sans text-xs opacity-50 tracking-widest uppercase mt-1">Maria Eduarda</span>
        </div>
        
        <div className="text-center md:text-right font-sans text-sm font-light opacity-60">
          <p>&copy; {new Date().getFullYear()} Maria Eduarda Consultoria.</p>
          <p className="mt-1">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
