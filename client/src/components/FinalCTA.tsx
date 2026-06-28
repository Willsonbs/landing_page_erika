export default function FinalCTA() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: '#74c69d' }}
            >
              O PRIMEIRO PASSO
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Você não precisa enfrentar isso{' '}
              <span style={{ color: '#74c69d' }}>sozinho(a).</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Seja você está passando por um momento difícil ou simplesmente quer cuidar melhor
              da sua saúde mental — a Dra. Erika está aqui para te acompanhar.
            </p>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ background: '#52b788' }}
            >
              💬 Agendar via WhatsApp
            </a>
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white border-2 transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.35)' }}
            >
              💬 Converse Conosco
            </a>
            <p className="text-center text-white/40 text-sm mt-2">
              Sem julgamentos. Sem burocracia. Só cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
