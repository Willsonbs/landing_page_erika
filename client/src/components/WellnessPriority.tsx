import { CheckCircle2 } from 'lucide-react';

const points = [
  'Profissionais Licenciados & Experientes',
  'Abordagem Baseada em Evidências Científicas',
  '100% Sigiloso e Seguro',
  'Atendimento Presencial em Caruaru e Online',
];

export default function WellnessPriority() {
  return (
    <section className="py-20" style={{ background: '#1b4332' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#74c69d' }}>
                SUA SAÚDE MENTAL
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sua Saúde é{' '}
                <span style={{ color: '#74c69d' }}>Nossa Prioridade</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Combinamos expertise clínica com empatia genuína para oferecer um cuidado
                psiquiátrico respeitoso, efetivo e empoderador — em cada etapa da sua jornada.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={20} style={{ color: '#74c69d', flexShrink: 0 }} />
                  <span className="text-white/85 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/5581982095424"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: '#2d6a4f', border: '2px solid #52b788' }}
              >
                💬 Sobre a Dra. Erika
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
              style={{ border: '3px solid rgba(116,198,157,0.3)' }}
            >
              <img
                src="/dra-erika-2.jpg"
                alt="Dra. Erika Gonçalves em consulta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge overlay */}
            <div
              className="absolute -bottom-4 -right-4 md:-right-6 rounded-2xl p-4 shadow-xl"
              style={{ background: '#2d6a4f', border: '2px solid #52b788' }}
            >
              <p className="text-white font-bold text-lg leading-tight">Ver como ajudamos</p>
              <p className="text-white/70 text-sm">→ Agende sua consulta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
