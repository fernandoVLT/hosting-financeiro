import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rodolfo",
    type: "PF",
    text: "Antes da consultoria, eu tinha dificuldade em enxergar para onde meu dinheiro ia, mas sua orientação foi essencial para eu alinhar meus gastos. Você me ajudou a desenvolver uma mentalidade muito menos consumista e, hoje, me sinto muito mais organizado e consciente com cada decisão financeira."
  },
  {
    name: "Júlia",
    type: "PF",
    text: "Desde que comecei minha consultoria pessoal com a Maria Eduarda, tenho vivido uma transformação enorme na forma como lido com meu dinheiro. Em poucos meses já consegui começar a quitar minhas dívidas, entender de verdade para onde o meu dinheiro estava indo e ter uma visão muito mais clara dos meus gastos."
  },
  {
    name: "Viviane",
    type: "Empresária",
    text: "Tivemos uma excelente experiência com os serviços de consultoria, gestão e assessoria financeira. Todo o trabalho foi conduzido com clareza, planejamento e eficiência. As atividades foram bem executadas, sempre com foco em soluções práticas e alinhadas às nossas necessidades."
  },
  {
    name: "Lucas",
    type: "Empresário",
    text: "Obtivemos um ótimo suporte administrativo com a consultoria de forma geral, pesquisa de mercado, precificação, estruturação na gestão financeira da empresa de forma profissional e competente. Foi e está sendo de grande ajuda no desenvolvimento da empresa como um todo."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream text-brand-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4">Depoimentos</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-brand-navy/5 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-8 right-8 text-brand-gold/20" size={48} />
              
              <div className="relative z-10">
                <p className="font-sans text-lg font-light italic leading-relaxed mb-8 text-brand-navy/80">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold font-serif text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold">{testimonial.name}</h4>
                    <span className="font-sans text-sm text-brand-gold uppercase tracking-wider font-medium">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
