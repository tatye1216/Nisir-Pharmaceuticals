import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-12 lg:pt-40 lg:pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Hero Box */}
          <motion.div 
            className="lg:col-span-8 bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            </div>
            
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-6 w-fit border border-green-100 uppercase tracking-wide">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Leading Medical Supplier in Ethiopia
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Reliable Pharmaceutical & Medical Supply Distribution <br className="hidden lg:block"/>
              <span className="text-primary-700">Across Ethiopia</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-xl mb-8 leading-relaxed">
              Fast, trusted bulk supply for hospitals, pharmacies & clinics. 
              Ensuring consistent availability and competitive pricing to meet your healthcare supply demands.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-bold text-base transition-colors"
              >
                Request Bulk Quote
              </a>
              <a 
                href="#about" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3 rounded-xl font-bold text-base transition-colors"
              >
                Become a Partner
              </a>
            </div>
          </motion.div>

          {/* Feature/Trust Cards Grid - right side col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div 
              className="bg-primary-900 text-white rounded-3xl p-8 flex flex-col border border-primary-800 flex-1 justify-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-2">High Quality</h3>
              <p className="text-primary-200 text-sm mb-6 leading-relaxed relative z-10">
                Strong supplier network with reliable sourcing. All products are fully approved and maintained via robust cold-chain logistics.
              </p>
              <a href="#products" className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-green-900/40 transition-all text-center">
                Explore Products
              </a>
            </motion.div>
          </div>

          {/* Bottom row of cards */}
          {[
            {
              icon: MapPin,
              title: "Serving Gondar",
              desc: "& Southwest Ethiopia",
              cols: "lg:col-span-4"
            },
            {
              icon: Users,
              title: "Professional Team",
              desc: "10+ Years Experience",
              cols: "lg:col-span-4"
            },
            {
              icon: ShieldCheck,
              title: "Reliable Supply Chain",
              desc: "High Quality & Approved",
              cols: "lg:col-span-4"
            }
          ].map((feat, i) => (
            <motion.div 
              key={i} 
              className={`${feat.cols} bg-white border border-gray-200 rounded-3xl p-6 flex items-center justify-between group hover:border-primary-200 transition-colors`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0 text-primary-700">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-900">{feat.title}</h4>
                  <p className="text-sm text-gray-500">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
