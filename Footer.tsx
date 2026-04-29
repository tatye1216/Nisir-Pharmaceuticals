import { Building2, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-white">
                <div className="font-heading font-bold text-xl leading-none">
                  Nisir
                </div>
                <div className="text-[10px] uppercase font-semibold text-primary-400 tracking-wider">
                  Pharmaceuticals
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable pharmaceutical and medical equipment distribution across Ethiopia. 
              Partnering with pharmacies, clinics, and hospitals for a healthier nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary-400 transition-colors">Products & Services</a></li>
              <li><a href="#why-us" className="hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#market" className="hover:text-primary-400 transition-colors">Our Market</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Pharmaceutical Supply</li>
              <li className="text-gray-400">Medical Equipment</li>
              <li className="text-gray-400">Bulk Distribution</li>
              <li className="text-gray-400">Institutional Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>Gondar, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+251" className="hover:text-white transition-colors">+251 (XX) XXX-XXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:contact@nisirpharma.com" className="hover:text-white transition-colors">contact@nisirpharma.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nisir Pharmaceuticals. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
