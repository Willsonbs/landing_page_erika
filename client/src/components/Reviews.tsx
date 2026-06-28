import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Joyce Figueira',
    initials: 'JF',
    text: 'Dra. Erika é muito humana e profissional! Está sempre atenta às nossas necessidades como pacientes. Ouve os nossos sentimentos com atenção e prescreve somente o necessário.',
    rating: 5,
    role: 'Paciente',
  },
  {
    id: 2,
    author: 'Leanne Valentim',
    initials: 'LV',
    text: 'Consulta impecável! Médica atenciosa, pontual, extremamente competente e com uma abordagem muito humana. Explicações claras, escuta ativa e um cuidado genuíno. Recomendo de olhos fechados!',
    rating: 5,
    role: 'Paciente',
  },
  {
    id: 3,
    author: 'Eduarda Palácio',
    initials: 'EP',
    text: 'Além de muito competente, humana e atenciosa! Recomendo demais.',
    rating: 5,
    role: 'Paciente',
  },
  {
    id: 4,
    author: 'Yasmin Dias',
    initials: 'YD',
    text: 'Excelente psiquiatra! Me sinto segura em deixar meus pacientes com ela. Recomendo!',
    rating: 5,
    role: 'Profissional de Saúde',
  },
  {
    id: 5,
    author: 'Arthur Quércio',
    initials: 'AQ',
    text: 'Profissional sem igual! Para você que busca se manter saudável mentalmente, recomendo de olhos fechados.',
    rating: 5,
    role: 'Paciente',
  },
  {
    id: 6,
    author: 'Luana S. Nascimento',
    initials: 'LN',
    text: 'Dra. Erika sempre é muito atenta, explicativa e cuidadosa. As consultas com ela são dinâmicas, alegres e atendem as demandas e expectativas.',
    rating: 5,
    role: 'Paciente',
  },
];

export default function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews" className="py-20" style={{ background: '#ffffff' }}>
      <div className="container">

        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
            HISTÓRIAS DE SUCESSO
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
          >
            Histórias Reais. Cuidado Real.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#52796f' }}>
            Conheça experiências de pacientes que deram o primeiro passo em direção
            à saúde mental e encontraram suporte, clareza e uma vida mais plena.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl p-7 flex flex-col gap-5 border"
              style={{ background: 'white', borderColor: '#b7e4c7' }}
            >
              {/* Large quote mark */}
              <p
                className="text-6xl font-serif leading-none select-none"
                style={{ color: '#d8f3dc', lineHeight: 1 }}
              >
                "
              </p>

              <p className="leading-relaxed flex-1 text-base" style={{ color: '#1b4332' }}>
                {review.text}
              </p>

              <div className="flex flex-col gap-3 border-t pt-4" style={{ borderColor: '#f0fdf4' }}>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="#2d6a4f" style={{ color: '#2d6a4f' }} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1b4332, #2d6a4f)' }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1b4332' }}>{review.author}</p>
                    <p className="text-xs" style={{ color: '#52796f' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2.5 rounded-full border transition-all disabled:opacity-30"
              style={{ borderColor: '#b7e4c7', color: '#2d6a4f' }}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm" style={{ color: '#52796f' }}>
              {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2.5 rounded-full border transition-all disabled:opacity-30"
              style={{ borderColor: '#b7e4c7', color: '#2d6a4f' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.google.com/search?q=dra+erika+goncalves+caruaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: '#2d6a4f' }}
            >
              <ExternalLink size={16} />
              Ver no Google
            </a>
            <a
              href="https://www.google.com/search?q=dra+erika+goncalves+caruaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:bg-green-50"
              style={{ borderColor: '#2d6a4f', color: '#2d6a4f' }}
            >
              ⭐ Deixar avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
