import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
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
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="container flex items-center justify-between h-20 gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Dra. Erika Goncalves - Logo"
            className="h-14 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-primary leading-tight">Dra. Erika Goncalves</h1>
            <p className="text-xs text-muted-foreground">Psiquiatria</p>
          </div>
        </div>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-foreground hover:text-secondary transition-colors duration-300 font-medium whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button - Right */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="https://wa.me/5581982095424"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-5 py-2"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-secondary transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5581982095424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
