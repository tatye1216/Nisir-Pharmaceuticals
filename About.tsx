import { motion } from 'motion/react';
import { Target, TrendingUp, Award, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <motion.div
            className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
              About Nisir <br/>Pharmaceuticals
            </h2>
            <div className="space-y-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              <p>
                Founded by experienced healthcare professionals, Nisir Pharmaceuticals & Medical Equipment Distribution was built to solve the supply availability and price instability challenges in Ethiopia's healthcare sector.
              </p>
              <p>
                Operating primarily in Gondar and the broader Southwest Ethiopia region, we leverage a strong network of suppliers from Addis Ababa and beyond to ensure our partners never run out of critical inventory.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats Grids within Bento */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl lg:text-5xl font-black text-primary-700 font-heading mb-1">10+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Years Experience</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl lg:text-5xl font-black text-gray-900 font-heading mb-1">17+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Professional Team</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl lg:text-5xl font-black text-green-600 font-heading mb-1">20%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Target Market</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-3xl lg:text-4xl font-black text-primary-700 font-heading mb-1 overflow-hidden text-ellipsis">72M+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Projected ETB</div>
            </div>
          </motion.div>

        </div>

        {/* Mission and Vision Bento Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-stretch">
          <motion.div
            className="bg-primary-900 text-white border border-primary-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-48 h-48" />
            </div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-300 mb-6 backdrop-blur-sm relative z-10">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-primary-200 text-lg leading-relaxed relative z-10">
              To deliver quality pharmaceuticals and medical equipment efficiently and reliably to healthcare providers.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-600 text-white border border-green-500 rounded-3xl p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-48 h-48" />
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm relative z-10">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-green-100 text-lg leading-relaxed relative z-10">
              To become a top 100 pharmaceutical distributor nationally, recognized for scale, trust, and excellence.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
