import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-background via-secondary-light to-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Cuidar da mente é um ato de coragem e amor próprio.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Atendimento psiquiátrico humanizado, integrando ciência, empatia e cuidado.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              💬 Agendar Consulta via WhatsApp
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Conheça a Dra. Erika
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-foreground">CRM 29662</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-foreground">Psiquiatria</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-foreground">Atendimento Humanizado</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-border overflow-hidden">
              <img
                src="/dra-erika-1.jpg"
                alt="Dra. Erika Goncalves - Psiquiatra"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 hover:bg-muted rounded-full transition-colors"
        >
          <ChevronDown size={24} className="text-secondary" />
        </button>
      </div>
    </section>
  );
}
