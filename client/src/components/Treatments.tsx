import { Card } from '@/components/ui/card';
import { Heart, Brain, Zap, Shield, Wind, Lightbulb } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      icon: Heart,
      title: 'Ansiedade e Pânico',
      description: 'Tratamento especializado para transtornos de ansiedade e ataques de pânico com abordagem humanizada.',
    },
    {
      icon: Brain,
      title: 'Depressão',
      description: 'Acompanhamento integral para depressão com foco em recuperação e qualidade de vida.',
    },
    {
      icon: Zap,
      title: 'TDAH',
      description: 'Diagnóstico e tratamento do Transtorno do Déficit de Atenção com Hiperatividade.',
    },
    {
      icon: Shield,
      title: 'Transtorno Bipolar',
      description: 'Gerenciamento completo do transtorno bipolar com estabilidade emocional.',
    },
    {
      icon: Wind,
      title: 'Burnout',
      description: 'Recuperação de esgotamento profissional com estratégias de bem-estar.',
    },
    {
      icon: Lightbulb,
      title: 'Transtorno do Espectro Autista',
      description: 'Avaliação e acompanhamento especializado para TEA com certificação CTC.',
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-secondary-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tratamentos Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos atendimento especializado em diversas áreas da psiquiatria, sempre com foco no cuidado humanizado e personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card key={index} className="card-elegant border border-border hover:border-secondary transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center">
                    <Icon size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{treatment.title}</h3>
                    <p className="text-foreground leading-relaxed">{treatment.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar seu tratamento?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Agende sua consulta e converse com a Dra. Erika sobre as melhores opções para você.
          </p>
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            💬 Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
