import type { MouseEvent } from 'react';
import { Heart, Brain, Zap, Shield, Wind, Lightbulb, ArrowRight } from 'lucide-react';

const treatments = [
  {
    icon: Heart,
    title: 'Ansiedade e Transtorno do Pânico',
    description: 'Tratamento especializado para crises de ansiedade e ataques de pânico, com foco em recuperação duradoura.',
  },
  {
    icon: Brain,
    title: 'Depressão e Transtornos de Humor',
    description: 'Acompanhamento integral para depressão, transtorno bipolar e outros transtornos de humor.',
  },
  {
    icon: Zap,
    title: 'TDAH',
    description: 'Diagnóstico e tratamento do Transtorno do Déficit de Atenção com Hiperatividade para adolescentes e adultos.',
  },
  {
    icon: Shield,
    title: 'TOC e Transtorno Bipolar',
    description: 'Gerenciamento do TOC e estabilização emocional no Transtorno Bipolar com abordagem personalizada.',
  },
  {
    icon: Wind,
    title: 'Burnout e Esgotamento',
    description: 'Recuperação do esgotamento profissional com estratégias práticas de bem-estar e qualidade de vida.',
  },
  {
    icon: Lightbulb,
    title: 'TEA e Neuromodulação',
    description: 'Avaliação especializada para TEA e tratamentos de neuromodulação (tDCS/TMS) de ponta.',
  },
];

export default function Treatments() {
  const scrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="treatments" className="py-20" style={{ background: '#ffffff' }}>
      <div className="container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
              ESPECIALIDADES
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
            >
              Apoio especializado para os desafios da vida real
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: '#52796f' }}>
              Da consulta inicial ao acompanhamento contínuo, oferecemos cuidado psiquiátrico
              completo e humanizado para cada condição que afeta sua saúde mental.
            </p>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 font-semibold mt-4 transition-all hover:gap-3"
              style={{ color: '#2d6a4f' }}
            >
              Ver todas as especialidades <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <a
                key={i}
                href="#contact"
                onClick={scrollToContact}
                className="group flex flex-col gap-4 rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                style={{ background: 'white', borderColor: '#b7e4c7' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: '#f0fdf4' }}
                >
                  <Icon size={24} style={{ color: '#2d6a4f' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 leading-tight" style={{ color: '#1b4332' }}>
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#52796f' }}>
                    {t.description}
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: '#2d6a4f' }}
                >
                  Saiba mais <ArrowRight size={16} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
