import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream text-brand-navy overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
             {/* Ideally replace with actual image from PDF if extracted, or placeholder */}
             <img 
               src="https://picsum.photos/seed/maria/800/1000" 
               alt="Maria Eduarda" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold rounded-2xl z-0" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl text-brand-navy mb-8">
            Apresentação
          </h2>
          
          <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-brand-navy/80">
            <p>
              <span className="font-serif italic text-2xl text-brand-gold mr-2">Olá, prazer!</span>
              Sou Maria Eduarda, consultora financeira, técnica em Administração e estudante de Bacharelado em Administração.
            </p>
            <p>
              Criei minha consultoria para apoiar pessoas físicas e pequenas empresas que desejam mais clareza, segurança e leveza na gestão do dinheiro.
            </p>
            <p>
              Acredito que finanças organizadas são o primeiro passo para tomar boas decisões, alcançar objetivos e crescer de forma sustentável sem improvisos e sem sobrecarga.
            </p>
            <p>
              Meu trabalho é guiado por organização, persistência, comunicação e estratégia, sempre respeitando a realidade e os objetivos de cada cliente.
            </p>
          </div>

          <div className="mt-12 p-8 bg-brand-navy/5 border-l-4 border-brand-gold italic font-serif text-2xl text-brand-navy">
            "Se organize hoje, para alcançar seus objetivos amanhã."
          </div>
        </motion.div>
      </div>
    </section>
  );
}
