import { motion } from 'motion/react';
import { Store, Hospital, Stethoscope, Users } from 'lucide-react';

export function MarketClients() {
  const clients = [
    { name: 'Pharmacies', icon: Store, desc: 'We stock retail and wholesale pharmacies with fast-moving goods.' },
    { name: 'Hospitals', icon: Hospital, desc: 'Supplying bulk medical consumables and specialized equipment.' },
    { name: 'Clinics', icon: Stethoscope, desc: 'Tailored deliveries for private clinics and specialty centers.' },
    { name: 'Medical Professionals', icon: Users, desc: 'Direct access to high-end diagnostic and treatment tools.' },
  ];

  return (
    <section id="market" className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="bg-primary-900 rounded-3xl relative overflow-hidden text-white border border-primary-800 p-8 lg:p-12 mb-4">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800 rounded-full blur-[100px] opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-900/40 rounded-full blur-[100px] opacity-50 -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">
                Trusted by the Healthcare Community
              </h2>
              <p className="text-lg text-primary-200">
                We understand your supply challenges, and we systematically ensure consistent availability so you can focus on patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-300 mb-6 border border-primary-400/20">
                    <client.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{client.name}</h3>
                  <p className="text-primary-200 text-sm leading-relaxed">{client.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial / Trust banner inside */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-gray-900 md:w-2/3">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-heading leading-relaxed">
                "Nisir Pharmaceuticals completely transformed our supply chain. We no longer worry about stockouts for critical medications."
              </blockquote>
              <div className="font-bold text-gray-900 uppercase tracking-widest text-sm">— Dr. Bereket T., Head of Procurement</div>
              <div className="text-gray-500 text-sm mt-1">Gondar Regional Hospital</div>
            </div>
            
            <div className="md:w-1/3 flex justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
              <div className="text-center">
                <div className="text-6xl font-heading font-black text-primary-700 mb-2">98%</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">On-Time Delivery Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
