import { MessageCircle, ClipboardList, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Escolha seu Atendimento',
    description:
      'Selecione entre consulta presencial em Caruaru ou atendimento online por videochamada segura. Entre em contato via WhatsApp para agendar rapidamente.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Agende sua Sessão',
    description:
      'Consulta de 50 minutos com a Dra. Erika para escuta ativa, avaliação clínica completa e diagnóstico preciso. Sem julgamentos, só cuidado.',
  },
  {
    number: '03',
    icon: HeartHandshake,
    title: 'Inicie sua Cura',
    description:
      'Receba um plano de tratamento 100% personalizado — medicação quando necessária, acompanhamento contínuo e suporte em cada etapa da sua jornada.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20" style={{ background: '#ffffff' }}>
      <div className="container">

        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
            COMO FUNCIONA
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
          >
            Sua Jornada de Cuidado é Simples
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#52796f' }}>
            Começar a cuidar da sua saúde mental é mais fácil do que você imagina. Siga os
            três passos e dê início à sua transformação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #b7e4c7, transparent)' }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center gap-5">
                {/* Number + Icon */}
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #1b4332, #2d6a4f)' }}
                  >
                    <Icon size={32} style={{ color: '#74c69d' }} />
                  </div>
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: '#52b788' }}
                  >
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
                  >
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-base" style={{ color: '#52796f' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
