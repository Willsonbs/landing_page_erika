import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Tratamentos', id: 'treatments' },
  { label: 'Avaliações', id: 'reviews' },
];

const services = [
  'Terapia Individual',
  'Saúde Mental Online',
  'TDAH em Adultos',
  'Ansiedade & Depressão',
  'Burnout & Estresse',
  'Saúde Mental no Trabalho',
  'Neuromodulação (tDCS)',
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: '#1b4332' }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo Dra. Erika" className="h-10 w-auto" />
              <div>
                <h3 className="font-bold text-white leading-tight text-sm">Dra. Erika Gonçalves</h3>
                <p className="text-xs" style={{ color: '#74c69d' }}>CRM PE 29662 | Psiquiatria</p>
              </div>
            </div>
            <p className="text-white/65 leading-relaxed text-sm mb-4">
              Psiquiatria humanizada e baseada em ciência — cuidado integral para uma vida
              mais saudável e plena em Caruaru, PE.
            </p>
            <p className="text-white/40 text-xs">
              R. Artur Antônio da Silva, 481<br />
              Salas 1006 e 1007 — Caruaru, PE
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: '#74c69d' }}>
              Essencial
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('ebooks')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  E-books Gratuitos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: '#74c69d' }}>
              Nossos Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: '#74c69d' }}>
              Suporte
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#74c69d' }} />
                <a
                  href="https://wa.me/5581982095424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm"
                >
                  (81) 98209-5424
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#74c69d' }} />
                <a
                  href="https://maps.app.goo.gl/Fsmbn339n6CrVmcEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white transition-colors text-sm"
                >
                  R. Artur Antônio da Silva, 481<br />
                  Salas 1006 e 1007 — Caruaru, PE
                </a>
              </div>
            </div>
            <p className="text-white/50 text-xs mb-3">Segunda a sexta — 08h às 18h</p>
            <div className="flex gap-3">
              {[
                { href: 'https://wa.me/5581982095424', icon: MessageCircle, label: 'WhatsApp' },
                { href: 'https://instagram.com/draerikagoncalves', icon: Instagram, label: 'Instagram' },
                { href: 'https://maps.app.goo.gl/Fsmbn339n6CrVmcEA', icon: MapPin, label: 'Google Maps' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
                  style={{ background: 'rgba(116,198,157,0.15)', border: '1px solid rgba(116,198,157,0.3)' }}
                  aria-label={label}
                >
                  <Icon size={16} style={{ color: '#74c69d' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.40)' }}
        >
          <p>Cuidar da mente é o primeiro passo para uma vida plena.</p>
          <p>&copy; {new Date().getFullYear()} Dra. Erika Gonçalves Leitão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
