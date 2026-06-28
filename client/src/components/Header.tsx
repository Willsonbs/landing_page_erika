import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Tratamentos', id: 'treatments' },
    { label: 'E-books', id: 'ebooks' },
    { label: 'Avaliações', id: 'reviews' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.97)',
        boxShadow: scrolled ? '0 2px 20px rgba(27,67,50,0.1)' : '0 1px 0 rgba(27,67,50,0.06)',
      }}
    >
      <div className="container flex items-center justify-between h-20 gap-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/logo.png"
            alt="Dra. Erika Gonçalves – Logo"
            className="h-11 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight" style={{ color: '#1b4332' }}>
              Dra. Erika Gonçalves
            </p>
            <p className="text-xs font-medium" style={{ color: '#2d6a4f' }}>
              Psiquiatria • CRM PE 29662
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-60"
              style={{ color: '#1b4332' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{ background: '#2d6a4f' }}
          >
            Iniciar Jornada
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors flex-shrink-0"
          style={{ color: '#1b4332' }}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: '#ffffff', borderColor: '#b7e4c7' }}
        >
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-left font-medium py-3 px-3 rounded-lg transition-colors"
                style={{ color: '#1b4332' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full text-center px-5 py-3 rounded-full font-bold text-sm text-white transition-all"
              style={{ background: '#2d6a4f' }}
            >
              Iniciar Jornada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
