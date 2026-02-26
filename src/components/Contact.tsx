import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-navy text-brand-cream relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Entre em <br />
            <span className="text-brand-gold italic">Contato!</span>
          </h2>
          
          <p className="font-sans text-xl font-light mb-12 opacity-80 max-w-md">
            Vamos construir juntos um plano financeiro prático e realizável para o seu futuro.
          </p>

          <div className="space-y-8">
            <a href="https://wa.me/5531988389847" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                <Phone size={24} />
              </div>
              <span className="font-sans text-lg tracking-wide group-hover:text-brand-gold transition-colors">
                (31) 9 8838-9847
              </span>
            </a>

            <a href="mailto:consultoria.mariaeduarda1@gmail.com" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="font-sans text-lg tracking-wide group-hover:text-brand-gold transition-colors break-all">
                consultoria.mariaeduarda1@gmail.com
              </span>
            </a>

            <a href="https://instagram.com/mariaeduardaconsultoria_" className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                <Instagram size={24} />
              </div>
              <span className="font-sans text-lg tracking-wide group-hover:text-brand-gold transition-colors">
                @mariaeduardaconsultoria_
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-cream p-8 md:p-12 rounded-3xl text-brand-navy shadow-2xl"
        >
          <h3 className="font-serif text-3xl mb-8">Envie uma mensagem</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-sans text-sm font-medium mb-2 uppercase tracking-wider opacity-70">Nome</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-brand-navy/20 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-brand-navy/30"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label className="block font-sans text-sm font-medium mb-2 uppercase tracking-wider opacity-70">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-brand-navy/20 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-brand-navy/30"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium mb-2 uppercase tracking-wider opacity-70">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-brand-navy/20 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder-brand-navy/30 resize-none"
                placeholder="Como posso te ajudar?"
              />
            </div>

            <button className="w-full bg-brand-navy text-brand-cream py-4 rounded-xl font-medium tracking-wide hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center justify-center gap-2 mt-4">
              <span>ENVIAR MENSAGEM</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
