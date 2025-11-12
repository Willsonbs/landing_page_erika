import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'Joyce Figueira',
      rating: 5,
      text: 'Dra. Erika é muito humana e profissional! Está sempre atenta às nossas necessidades como pacientes, mas não exclui o nosso lado humano. Ouve os nossos sentimentos com atenção e prescreve somente o necessário.',
      date: '',
    },
    {
      id: 2,
      author: 'Leanne Valentim',
      rating: 5,
      text: 'Consulta impecável! Médica atenciosa, pontual, extremamente competente e com uma abordagem muito humana. Explicações claras, escuta ativa e um cuidado genuíno com o paciente. Recomendo de olhos fechados!',
      date: '',
    },
    {
      id: 3,
      author: 'Eduarda Palácio',
      rating: 5,
      text: 'Além de muito competente, humana e atenciosa! Recomendo demais.',
      date: '',
    },
    {
      id: 4,
      author: 'Yasmin Dias',
      rating: 5,
      text: 'Excelente psiquiatra! Me sinto segura em deixar meus pacientes com ela. Recomendo!',
      date: '',
    },
    {
      id: 5,
      author: 'Arthur Quércio',
      rating: 5,
      text: 'Profissional sem igual! Pra você que busca se manter saudável mentalmente, recomendo de olhos fechados.',
      date: '',
    },
    {
      id: 6,
      author: 'Luana S. Nascimento',
      rating: 5,
      text: 'Dra. Erika sempre é muito atenta, explicativa e cuidadosa. As consultas com ela são dinâmicas, alegres e atendem as demandas e expectativas.',
      date: '',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-20 bg-secondary-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O que dizem nossos pacientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as experiências reais de pacientes que confiaram no atendimento da Dra. Erika.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {visibleReviews.map((review) => (
              <Card key={review.id} className="card-elegant border border-border">
                <div className="flex flex-col gap-4 h-full">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed flex-1">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-primary">{review.author}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-border'
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=dra+erika+goncalves+caruaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 font-semibold transition-all duration-300"
            >
              <ExternalLink size={18} />
              Ver mais avaliações no Google
            </a>
            <a
              href="https://www.google.com/search?q=dra+erika+goncalves+caruaru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300"
            >
              ⭐ Deixe sua avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
