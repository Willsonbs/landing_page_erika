import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Brain, Stethoscope } from 'lucide-react';

export default function About() {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Dra. Erika Gonçalves',
      subtitle: 'Médica – CRM 29662',
      icon: null,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Se você enfrenta transtornos como ansiedade, depressão, TDAH, TOC, transtorno do pânico, síndrome de burnout ou outras condições que afetam seu bem-estar emocional e mental, saiba que não está sozinho(a).
          </p>
          <p className="text-lg leading-relaxed">
            A consulta com a Dra. Erika Gonçalves pode ser o primeiro passo para restaurar o equilíbrio e reencontrar qualidade de vida.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-primary">
            Com uma abordagem acolhedora, científica e personalizada, a Dra. Erika oferece cuidado integral, considerando a singularidade de cada paciente.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Formação Acadêmica',
      subtitle: null,
      icon: GraduationCap,
      content: (
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-secondary text-xl mt-1">•</span>
            <span className="text-lg leading-relaxed">
              Graduação em Medicina pela Universidade Tiradentes (UNIT) – Maceió/AL, concluída em 2020.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-secondary text-xl mt-1">•</span>
            <span className="text-lg leading-relaxed">
              Pós-graduação em Psiquiatria Geral pela Universidade São Judas Tadeu – concluída em 2024.
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: 'Especializações',
      subtitle: null,
      icon: Brain,
      content: (
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-secondary text-xl mt-1">•</span>
            <span className="text-lg leading-relaxed">
              Formação em Neuromodulação e Primeiros Socorros em Neuromodulação pela UNIFESP – São Paulo (2025).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-secondary text-xl mt-1">•</span>
            <span className="text-lg leading-relaxed">
              Pós-graduanda em Neuromodulação pelo Instituto Ricardo Galhardoni (2025–2026).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-secondary text-xl mt-1">•</span>
            <span className="text-lg leading-relaxed">
              Pós-graduanda em Neurociências e Transtorno do Espectro Autista (TEA) pelo Dr. Thiago Castro – CTC (2025–2026).
            </span>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      title: 'Áreas de Atuação',
      subtitle: null,
      icon: Stethoscope,
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Atendimento clínico-psiquiátrico de adolescentes (a partir dos 12 anos), adultos e idosos, com foco no diagnóstico e tratamento de:
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              'Ansiedade e Transtorno do Pânico',
              'Depressão e Transtornos de Humor',
              'TDAH',
              'Transtorno Bipolar',
              'TOC (Transtorno Obsessivo-Compulsivo)',
              'Burnout',
              'Transtorno do Espectro Autista (TEA)',
            ].map((area, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1">•</span>
                <span className="text-lg leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto-play removido - usuário controla manualmente

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[446px]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-[595px] bg-gradient-to-br from-secondary/10 to-accent/5 rounded-2xl border border-border overflow-hidden">
                <img
                  src="/dra-erika-about.jpg"
                  alt="Dra. Erika Gonçalves - Psiquiatra"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right - Carousel Cards */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[720px] h-[595px]">
              {/* Card Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-background to-accent/5 rounded-2xl border border-border p-8 flex flex-col overflow-hidden">
                {/* Card Content */}
                <div className="flex-1 overflow-y-auto">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      {cards[currentCard].icon && 
                        React.createElement(cards[currentCard].icon, { className: "text-secondary", size: 32 })
                      }
                      <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        {cards[currentCard].title}
                      </h2>
                    </div>
                    {cards[currentCard].subtitle && (
                      <p className="text-lg text-secondary font-semibold">
                        {cards[currentCard].subtitle}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-foreground">
                    {cards[currentCard].content}
                  </div>


                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  {/* Dots Indicators */}
                  <div className="flex gap-2">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentCard
                            ? 'bg-secondary w-8'
                            : 'bg-border hover:bg-secondary/50'
                        }`}
                        aria-label={`Ir para card ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevCard}
                      className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
                      aria-label="Card anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextCard}
                      className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors"
                      aria-label="Próximo card"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
