import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
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
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Shivara Interior Company</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Designing spaces that feel like home. We blend contemporary aesthetics with timeless
              craftsmanship to create beautiful, functional interiors.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@shivarainteriors.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                  info@shivarainteriors.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Office 12, Design Hub<br />
                  City, State, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Shivara Interior Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
