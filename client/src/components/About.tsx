import { GraduationCap, Brain, Stethoscope, CheckCircle2 } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'Graduação em Medicina – UNIT (2020)' },
  { icon: GraduationCap, label: 'Pós-graduação em Psiquiatria Geral – Univ. São Judas Tadeu (2024)' },
  { icon: Brain, label: 'Formação em Neuromodulação – UNIFESP (2025)' },
  { icon: Brain, label: 'Pós-graduanda em Neuromodulação – Inst. Ricardo Galhardoni' },
  { icon: Stethoscope, label: 'Pós-graduanda em Neurociências e TEA – CTC Dr. Thiago Castro' },
];

const specialties = [
  'Ansiedade & Pânico',
  'Depressão',
  'TDAH',
  'Transtorno Bipolar',
  'TOC',
  'Burnout',
  'TEA',
  'Neuromodulação',
];

const trustIndicators = [
  { label: 'Profissional Licenciada', sub: 'CRM PE 29662' },
  { label: '5+ Anos de Experiência', sub: 'Em Psiquiatria Clínica' },
  { label: 'Baseada em Evidências', sub: 'Científicas Atualizadas' },
  { label: 'Sigilo Garantido', sub: '100% Confidencial' },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: '#f0fdf4' }}>
      <div className="container">

        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
            NOSSA ESPECIALISTA
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
          >
            Conheça a Dra. Erika Gonçalves Leitão
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#52796f' }}>
            Profissional comprometida com o cuidado integral da saúde mental — combinando
            ciência de ponta com escuta ativa e empatia genuína.
          </p>
        </div>

        {/* Profile card */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2"
          style={{ background: 'white', border: '1px solid #b7e4c7' }}
        >
          {/* Photo */}
          <div className="relative h-80 lg:h-auto min-h-[420px]">
            <img
              src="/dra-erika-about.jpg"
              alt="Dra. Erika Gonçalves Leitão – Psiquiatra"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: 'linear-gradient(transparent, rgba(27,67,50,0.92))' }}
            >
              <p className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Dra. Erika Gonçalves Leitão
              </p>
              <p className="text-sm mt-0.5" style={{ color: '#74c69d' }}>
                Médica Psiquiatra • CRM PE 29662
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 lg:p-10 flex flex-col gap-7">
            <div>
              <p className="leading-relaxed text-base" style={{ color: '#52796f' }}>
                Se você enfrenta ansiedade, depressão, TDAH, TOC, transtorno do pânico, burnout ou
                outras condições que afetam seu bem-estar mental, saiba que{' '}
                <strong style={{ color: '#1b4332' }}>você não está sozinho(a)</strong>.
              </p>
              <p className="leading-relaxed text-base mt-3" style={{ color: '#52796f' }}>
                Com uma abordagem <strong style={{ color: '#1b4332' }}>acolhedora, científica e personalizada</strong>,
                a Dra. Erika atende adolescentes (a partir dos 12 anos), adultos e idosos,
                considerando a singularidade de cada pessoa.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <p className="font-bold text-sm mb-3 uppercase tracking-wide" style={{ color: '#2d6a4f' }}>
                Formação & Especializações
              </p>
              <div className="space-y-2.5">
                {credentials.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#2d6a4f' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#52796f' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialty tags */}
            <div>
              <p className="font-bold text-sm mb-3 uppercase tracking-wide" style={{ color: '#2d6a4f' }}>
                Especialidades
              </p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: '#f0fdf4', color: '#2d6a4f', border: '1px solid #b7e4c7' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg mt-auto"
              style={{ background: '#2d6a4f' }}
            >
              💬 Agendar com a Dra. Erika
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {trustIndicators.map(({ label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2 rounded-2xl p-5"
              style={{ background: 'white', border: '1px solid #b7e4c7' }}
            >
              <CheckCircle2 size={22} style={{ color: '#2d6a4f' }} />
              <p className="font-bold text-sm leading-tight" style={{ color: '#1b4332' }}>{label}</p>
              <p className="text-xs" style={{ color: '#52796f' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
