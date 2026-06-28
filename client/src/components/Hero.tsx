import { Star, CheckCircle2, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center"
      style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)' }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">

        {/* ── Left ── */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 w-fit text-sm font-semibold"
            style={{ background: '#d8f3dc', color: '#1b4332', border: '1px solid #b7e4c7' }}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#2d6a4f' }} />
            PSIQUIATRIA &nbsp;•&nbsp; CARUARU, PE
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
            >
              Mente mais forte.{' '}
              <span style={{ color: '#2d6a4f' }}>Vida mais</span>{' '}
              <span style={{ color: '#52b788' }}>plena.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: '#52796f' }}>
              Cuidado psiquiátrico humanizado e baseado em ciência para te ajudar a superar
              ansiedade, depressão, TDAH, burnout e muito mais.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: '#2d6a4f' }}
            >
              💬 Agendar Consulta
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-bold text-base border-2 transition-all duration-300 hover:bg-green-50 group"
              style={{ borderColor: '#2d6a4f', color: '#2d6a4f' }}
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: '#2d6a4f', color: '#fff' }}
              >
                <Play size={14} fill="currentColor" />
              </span>
              Conheça a Dra. Erika
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex flex-col">
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#2d6a4f" style={{ color: '#2d6a4f' }} />
                ))}
              </div>
              <p className="text-sm font-semibold" style={{ color: '#1b4332' }}>
                +50 pacientes satisfeitos
              </p>
              <p className="text-xs" style={{ color: '#52796f' }}>Avaliações verificadas no Google</p>
            </div>
            <div className="w-px h-12 mx-2" style={{ background: '#b7e4c7' }} />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: '#22c55e' }} />
                <span className="text-sm font-semibold" style={{ color: '#1b4332' }}>
                  Agenda disponível
                </span>
              </div>
              <p className="text-xs" style={{ color: '#52796f' }}>Presencial & Online</p>
            </div>
          </div>
        </div>

        {/* ── Right — Photo + Floating Cards ── */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <div
              className="absolute -inset-6 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] opacity-20 blur-2xl -z-10"
              style={{ background: 'linear-gradient(135deg, #2d6a4f, #74c69d)' }}
            />
            <div
              className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl"
              style={{ border: '4px solid white' }}
            >
              <img
                src="/dra-erika-1.jpg"
                alt="Dra. Erika Gonçalves Leitão – Psiquiatra em Caruaru"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating card — top right */}
            <div
              className="absolute -top-4 -right-4 md:-right-8 rounded-2xl p-4 shadow-xl max-w-[180px]"
              style={{ background: '#1b4332', border: '1px solid rgba(74,198,157,0.3)' }}
            >
              <p className="text-white font-bold text-sm mb-2">Você merece se sentir bem</p>
              {['Acolhedora', 'Científica', 'Personalizada'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 mb-1">
                  <CheckCircle2 size={13} style={{ color: '#74c69d' }} />
                  <span className="text-white/80 text-xs">{item}</span>
                </div>
              ))}
            </div>

            {/* Floating card — bottom left */}
            <div
              className="absolute -bottom-4 -left-4 md:-left-8 rounded-2xl px-4 py-3 shadow-xl"
              style={{ background: 'white', border: '1px solid #b7e4c7' }}
            >
              <p className="text-xs mb-1" style={{ color: '#52796f' }}>Médica Psiquiatra</p>
              <p className="font-bold text-sm" style={{ color: '#1b4332' }}>CRM PE 29662</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
