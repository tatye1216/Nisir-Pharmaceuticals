import { motion } from 'motion/react';
import { Network, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Network,
      title: 'Strong Supplier Network',
      description: 'We connect directly with top manufacturers in Addis Ababa and globally, ensuring a steady stream of authentic products without intermediary delays.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'By purchasing in bulk and managing efficient logistics, we pass significant cost savings directly to our B2B partners.'
    },
    {
      icon: Handshake,
      title: 'Customer-First Approach',
      description: 'We prioritize long-term partnerships. Our dedicated support team works closely with you to understand your specific inventory needs.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Logistics',
      description: 'Our robust distribution fleet ensures that your critical medical supplies arrive safely, maintaining cold-chain integrity where necessary.'
    }
  ];

  return (
    <section id="why-us" className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <motion.div
            className="lg:col-span-6 bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Partner <br/>With Us?
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              In a critical industry like healthcare, you need a distributor that acts as an extension of your own business. We mitigate risk, absorb logistical headaches, and guarantee the standard of excellence your patients demand.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={reason.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center shrink-0 border border-primary-100 mt-1">
                    <reason.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 flex flex-col min-h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe668cd67f9?q=80&w=2069&auto=format&fit=crop" 
                alt="Pharmaceutical wholesale warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            </div>
            
            <div className="mt-auto p-8 relative z-10">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
                <div className="font-heading font-bold text-2xl text-gray-900 mb-3">Proven Market Demand</div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Operating in one of the fastest-growing healthcare sectors, we bridge the gap between quality manufacturers and the institutions that need them most.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
