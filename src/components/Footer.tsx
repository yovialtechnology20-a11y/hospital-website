import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Departments', href: '#departments' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Appointment', href: '#appointment' },
  { name: 'Health Packages', href: '#packages' },
  { name: 'Blog', href: '#blog' },
];

const departments = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
  'Gynecology', 'Oncology', 'ENT', 'General Medicine',
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-500 rounded-xl">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-xl font-bold">MediCare Plus</h2>
                <p className="text-xs text-gray-400">Multi-Speciality Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing world-class healthcare services with compassion, expertise, and advanced medical technology.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept}>
                  <a
                    href="#departments"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Healthcare Avenue, Medical District, City - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <a href="tel:+911800123456" className="text-gray-400 hover:text-white">1800-123-456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <a href="mailto:info@medicareplus.com" className="text-gray-400 hover:text-white">info@medicareplus.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">24/7 Emergency Services Available</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 outline-none"
                />
                <button className="px-4 py-2 bg-primary-500 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              2024 MediCare Plus Multi-Speciality Hospital. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed & Developed by{' '}
              <span className="text-primary-500 font-medium">Yovial Technologies</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-primary-600 transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
