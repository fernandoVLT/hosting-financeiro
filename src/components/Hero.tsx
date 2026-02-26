import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-brand-navy overflow-hidden flex items-center justify-center text-brand-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold-light rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-brand-gold font-serif italic text-xl tracking-widest uppercase">
            Consultora Financeira
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8"
        >
          MARIA <br />
          <span className="font-bold text-brand-gold">EDUARDA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-lg md:text-xl font-light max-w-2xl text-brand-cream/80 mb-12"
        >
          Pessoal & Empresarial
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#about"
            className="group relative px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 rounded-full overflow-hidden"
          >
            <span className="relative z-10 font-medium tracking-wide">CONHEÇA MAIS</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-gold/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
