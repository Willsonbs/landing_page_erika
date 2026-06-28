import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, Brain, Target, Heart, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Ebooks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<typeof ebooks[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const ebooks = [
    {
      id: 1,
      title: 'Guia da Ansiedade',
      subtitle: '5 Estratégias para Gerenciar a Ansiedade',
      description: 'Identifique gatilhos, pratique respiração e mindfulness, e saiba quando buscar ajuda profissional.',
      icon: Brain,
      file: '/ebooks/ebook_ansiedade.pdf',
    },
    {
      id: 2,
      title: 'Guia do TDAH',
      subtitle: 'Como manter foco e produtividade na rotina',
      description: 'Estratégias práticas para melhorar a concentração e organização no dia a dia.',
      icon: Target,
      file: '/ebooks/ebook_tdah.pdf',
    },
    {
      id: 3,
      title: 'Guia da Depressão',
      subtitle: 'Sinais, sintomas e caminhos para o tratamento',
      description: 'Compreenda os sinais da depressão e conheça as opções de tratamento disponíveis.',
      icon: Heart,
      file: '/ebooks/ebook_depressao.pdf',
    },
    {
      id: 4,
      title: 'Guia da Neuromodulação (tDCS)',
      subtitle: 'Tecnologia e ciência no cuidado da mente',
      description: 'Descubra como a Estimulação Transcraniana por Corrente Contínua pode ajudar no tratamento de transtornos mentais.',
      icon: Zap,
      file: '/ebooks/ebook_tdcs.pdf',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ebooks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ebooks.length) % ebooks.length);
  };

  const handleDownload = (ebook: typeof ebooks[0]) => {
    setSelectedEbook(ebook);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedEbook?.file) {
      // Create a temporary link to download the PDF
      const link = document.createElement('a');
      link.href = selectedEbook.file;
      link.download = selectedEbook.file.split('/').pop() || 'ebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Log for analytics (optional)
      console.log('E-book downloaded:', { 
        name: formData.name,
        email: formData.email,
        ebook: selectedEbook.title 
      });
    }
    
    setFormData({ name: '', email: '' });
    setIsDialogOpen(false);
  };

  const visibleEbooks = [
    ebooks[currentIndex],
    ebooks[(currentIndex + 1) % ebooks.length],
    ebooks[(currentIndex + 2) % ebooks.length],
  ];

  return (
    <section id="ebooks" className="py-20" style={{ background: '#f0fdf4' }}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
            RECURSOS GRATUITOS
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
          >
            Conteúdos Gratuitos
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#52796f' }}>
            Guias especializados para te ajudar no cuidado emocional. Baixe gratuitamente e comece sua jornada de bem-estar.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleEbooks.map((ebook, idx) => (
              <Card
                key={ebook.id}
                className={`card-elegant border transition-all duration-300 ${
                  idx === 0 ? 'md:scale-105 md:shadow-lg' : 'opacity-75 md:opacity-100'
                }`}
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                      <ebook.icon className="text-secondary" size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{ebook.title}</h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{ebook.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{ebook.description}</p>
                  </div>
                  <button
                    onClick={() => handleDownload(ebook)}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download size={18} />
                    Baixar E-book
                  </button>
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
          <div className="flex justify-center gap-2">
            {ebooks.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-secondary' : 'w-2 bg-border'
                }`}
                aria-label={`Ir para e-book ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Download Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary">Baixar E-book Gratuito</DialogTitle>
            <DialogDescription>
              Preencha seus dados para receber o e-book "{selectedEbook?.title}" no seu email.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nome
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 btn-secondary"
              >
                Baixar Agora
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
