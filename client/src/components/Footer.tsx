import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Clínica Dra. Erika Gonçalves</h3>
            <p className="text-white/80 leading-relaxed">
              Psiquiatria e saúde mental com foco em atendimento humanizado, integrando ciência, empatia e cuidado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="https://wa.me/5581982095424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  (81) 98209-5424
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/Fsmbn339n6CrVmcEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors text-sm"
                >
                  R. Artur Antônio da Silva, 481<br />
                  Salas 1006 e 1007, Caruaru - PE
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horário e Redes</h3>
            <p className="text-white/80 mb-4">
              Segunda a sexta<br />
              08h às 18h
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5581982095424"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/draerikagoncalves"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://maps.app.goo.gl/Fsmbn339n6CrVmcEA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>
              Cuidar da mente é o primeiro passo para uma vida plena. 🌿
            </p>
            <p>
              &copy; {new Date().getFullYear()} Clínica Dra. Erika Gonçalves. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
