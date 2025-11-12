import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'A consulta é online ou presencial?',
      answer: 'A Dra. Erika oferece ambas as modalidades. Você pode escolher a forma mais confortável para você. As consultas online são realizadas por videochamada segura, e as presenciais acontecem no consultório em Caruaru.',
    },
    {
      question: 'Como funciona o tratamento?',
      answer: 'O tratamento é personalizado de acordo com suas necessidades. A Dra. Erika realiza uma avaliação completa e propõe um plano de tratamento que pode incluir acompanhamento psiquiátrico, medicação quando necessária, e orientações para o cuidado emocional.',
    },
    {
      question: 'Qual é a duração de uma consulta?',
      answer: 'A consulta geralmente tem duração de 50 minutos, permitindo uma avaliação bem aprofundada e completa. As consultas subsequentes podem ter duração de 40 a 50 minutos, dependendo da necessidade.',
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar sua consulta através do WhatsApp clicando no botão "Agendar Consulta" ou enviando uma mensagem para (81) 98209-5424. A Dra. Erika responderá com os horários disponíveis.',
    },
    {
      question: 'Qual é o valor da consulta?',
      answer: 'Os valores das consultas variam de acordo com o tipo de atendimento (presencial ou online). Entre em contato via WhatsApp para conhecer os valores atuais e as formas de pagamento disponíveis.',
    },
    {
      question: 'Vocês aceitam convênio?',
      answer: 'Não, a clínica trabalha apenas com atendimentos particulares.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nosso atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="card-elegant border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border pt-4">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Entre em contato com a Dra. Erika via WhatsApp. Ela ficará feliz em responder todas as suas perguntas.
          </p>
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            💬 Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
