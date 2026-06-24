import { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Departments', href: '#departments' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Packages', href: '#packages' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <div className={`p-2 rounded-xl ${isScrolled ? 'bg-primary-500' : 'bg-white/20'}`}>
              <Heart className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} fill="currentColor" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                MediCare Plus
              </h1>
              <p className={`text-[10px] -mt-1 ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Multi-Speciality Hospital
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+911800123456"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                isScrolled
                  ? 'text-primary-600 hover:bg-primary-50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>1800-123-456</span>
            </a>
            <a
              href="#appointment"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:+911800123456"
                className="flex items-center justify-center gap-2 px-4 py-3 text-primary-600 border-2 border-primary-500 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>1800-123-456</span>
              </a>
              <a
                href="#appointment"
                className="block text-center px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
