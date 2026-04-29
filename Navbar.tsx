import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products & Services', href: '#products' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Market & Clients', href: '#market' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'top-4 max-w-7xl mx-4 sm:mx-8 xl:mx-auto bg-white/95 backdrop-blur-md shadow-sm border border-gray-200 rounded-2xl py-3 px-2'
          : 'bg-white py-5 border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <div className="font-sans font-bold text-xl tracking-tight text-primary-900 uppercase">
                Nisir
              </div>
              <div className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
                Pharmaceuticals
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors shadow-lg shadow-primary-200"
            >
              <Phone className="w-4 h-4" />
              Request Quote
            </a>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-900 py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-md font-medium"
              >
                <Phone className="w-5 h-5" />
                Request Bulk Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
