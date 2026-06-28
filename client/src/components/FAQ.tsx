import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'A consulta é online ou presencial?',
    answer: 'A Dra. Erika oferece ambas as modalidades. Você pode escolher a forma mais confortável. As consultas online são por videochamada segura e as presenciais acontecem no consultório em Caruaru, PE.',
  },
  {
    question: 'Como funciona o tratamento?',
    answer: 'O tratamento é personalizado de acordo com suas necessidades. A Dra. Erika realiza uma avaliação completa e propõe um plano que pode incluir acompanhamento psiquiátrico, medicação quando necessária e orientações para o cuidado emocional.',
  },
  {
    question: 'Qual é a duração de uma consulta?',
    answer: 'A consulta inicial dura 50 minutos, permitindo uma avaliação completa. As consultas de retorno têm entre 40 e 50 minutos, conforme a necessidade.',
  },
  {
    question: 'Como agendar uma consulta?',
    answer: 'Você pode agendar via WhatsApp clicando no botão "Agendar Consulta" ou enviando uma mensagem para (81) 98209-5424. A resposta é rápida e sem burocracia.',
  },
  {
    question: 'Qual é o valor da consulta?',
    answer: 'Os valores variam conforme o tipo de atendimento (presencial ou online). Entre em contato via WhatsApp para conhecer os valores atuais e as formas de pagamento.',
  },
  {
    question: 'Vocês aceitam convênio?',
    answer: 'Não. A clínica realiza apenas atendimentos particulares, garantindo total dedicação e tempo de qualidade em cada consulta.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20" style={{ background: '#ffffff' }}>
      <div className="container max-w-3xl">

        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#2d6a4f' }}>
            FAQ
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
          >
            Perguntas Frequentes
          </h2>
          <p className="text-lg" style={{ color: '#52796f' }}>
            Respostas para as dúvidas mais comuns sobre o atendimento da Dra. Erika.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border"
              style={{ background: 'white', borderColor: openIndex === index ? '#2d6a4f' : '#b7e4c7' }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-green-50/50"
              >
                <h3 className="font-semibold text-base pr-4" style={{ color: '#1b4332' }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  size={22}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: '#2d6a4f',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t" style={{ borderColor: '#f0fdf4' }}>
                  <p className="pt-4 leading-relaxed text-base" style={{ color: '#52796f' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #1b4332, #2d6a4f)' }}
        >
          <h3
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ainda tem dúvidas?
          </h3>
          <p className="text-white/80 mb-6">
            Entre em contato com a Dra. Erika via WhatsApp. Ela ficará feliz em responder.
          </p>
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{ background: '#52b788' }}
          >
            💬 Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
