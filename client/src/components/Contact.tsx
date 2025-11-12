import { useState, useRef } from 'react';
import { MapPin, Phone, Clock, Instagram, Mail, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      
      // Web3Forms configuration
      formData.append("access_key", "e94a798f-23f9-4def-abc1-d7cd4af0ba2c");
      formData.append("subject", `Nova mensagem de ${formData.get('name')} - Site Dra. Erika Gonçalves`);
      formData.append("from_name", "Site Dra. Erika Gonçalves");
      formData.append("redirect", "false");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log('Email enviado com sucesso:', data);
        toast.success('Mensagem enviada com sucesso! A Dra. Erika Gonçalves entrará em contato em breve.');
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(data.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Agende sua consulta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Dra. Erika realiza atendimentos presenciais e online. Escolha a forma mais confortável para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <Card className="card-elegant border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5581982095424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    (81) 98209-5424
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Clique para conversar com a Dra. Erika
                  </p>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="card-elegant border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Localização</h3>
                  <a
                    href="https://maps.app.goo.gl/Fsmbn339n6CrVmcEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    Empresarial Nordeste Corporate
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    R. Artur Antônio da Silva, 481 - Salas 1006 e 1007
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Universitário, Caruaru - PE, 55016-445
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="card-elegant border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Horário de Atendimento</h3>
                  <p className="text-foreground font-semibold">08h às 18h</p>
                  <p className="text-sm text-muted-foreground">Segunda a sexta</p>
                </div>
              </div>
            </Card>

            {/* Instagram */}
            <Card className="card-elegant border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/draerikagoncalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 font-semibold transition-colors"
                  >
                    @draerikagoncalves
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Acompanhe conteúdos sobre saúde mental
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant border border-border">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={24} className="text-secondary" />
                  <h3 className="text-2xl font-bold text-primary">Envie uma Mensagem</h3>
                </div>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e a Dra. Erika entrará em contato em breve.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(81) 98209-5424"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Descreva sua dúvida ou solicitação..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Responderemos em breve.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para cuidar da sua saúde mental?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Entre em contato com a Dra. Erika e agende sua consulta hoje mesmo.
          </p>
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Agendar Consulta via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
