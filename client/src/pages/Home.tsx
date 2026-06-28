import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Treatments from '@/components/Treatments';
import About from '@/components/About';
import WellnessPriority from '@/components/WellnessPriority';
import HowItWorks from '@/components/HowItWorks';
import StatsNumbers from '@/components/StatsNumbers';
import Reviews from '@/components/Reviews';
import Ebooks from '@/components/Ebooks';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* 1. Hero — heading + foto + CTA */}
        <Hero />
        {/* 2. Barra de formação acadêmica */}
        <TrustBar />
        {/* 3. Serviços / especialidades */}
        <Treatments />
        {/* 4. Perfil da médica */}
        <About />
        {/* 5. Seção escura — Sua Saúde é Nossa Prioridade */}
        <WellnessPriority />
        {/* 6. Como funciona o atendimento */}
        <HowItWorks />
        {/* 7. Números de credibilidade */}
        <StatsNumbers />
        {/* 8. Depoimentos reais */}
        <Reviews />
        {/* 9. E-books gratuitos */}
        <Ebooks />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. Formulário de contato */}
        <Contact />
        {/* 12. CTA final */}
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
