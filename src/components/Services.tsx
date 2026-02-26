import { motion } from 'motion/react';
import { User, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'pf',
    title: 'Consultoria Financeira Pessoal (PF)',
    icon: User,
    description: 'Para quem deseja organizar o orçamento, criar reserva de emergência e planejar metas financeiras.',
    features: [
      'Organizar o orçamento',
      'Criar reserva de emergência',
      'Planejar metas financeiras',
      'Ter mais controle e tranquilidade com o dinheiro',
      'Atendimento pontual ou acompanhamento contínuo'
    ]
  },
  {
    id: 'pj',
    title: 'Consultoria Financeira Empresarial (PJ)',
    icon: Briefcase,
    description: 'Para quem deseja organização financeira do negócio, controle de custos e definição de preços.',
    features: [
      'Organização financeira do negócio',
      'Controle de custos e despesas',
      'Definição de preços e análise de lucro',
      'Planejamento e tomada de decisões estratégicas',
      'Projetos específicos ou acompanhamento mensal'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-navy text-brand-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold rounded-full blur-[150px]" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-brand-gold mb-4">Serviços</h2>
          <p className="font-sans text-xl font-light max-w-2xl mx-auto opacity-80">
            Soluções personalizadas para sua vida financeira ou seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-brand-cream/5 backdrop-blur-sm border border-brand-gold/20 p-8 md:p-12 rounded-2xl hover:bg-brand-cream/10 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mb-8 text-brand-gold">
                  <service.icon size={32} />
                </div>
                
                <h3 className="font-serif text-3xl mb-6 text-brand-cream group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-sans text-lg font-light mb-8 opacity-80 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans font-light opacity-90">
                      <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
