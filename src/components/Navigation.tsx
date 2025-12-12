import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-amber-900">Shivara</h1>
              <p className="text-xs text-amber-700">Interior Company</p>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-amber-900 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 bg-amber-900 text-white px-6 py-2.5 rounded-lg hover:bg-amber-800 transition-colors"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-amber-900 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-24">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-lg text-gray-700 hover:text-amber-900 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center space-x-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors mt-6"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
