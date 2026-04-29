import { motion } from 'motion/react';
import { Pill, Stethoscope, BriefcaseMedical, Truck, Check, Wallet } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Pharmaceutical Products',
    icon: Pill,
    description: 'A comprehensive inventory of high-quality prescription drugs, over-the-counter medicines, and specialty pharmaceuticals from trusted manufacturers.',
    items: ['Prescription Drugs', 'OTC Medicines', 'Specialty Pharma', 'Vitamins & Supplements']
  },
  {
    title: 'Medical Equipment',
    icon: Stethoscope,
    description: 'Durable, reliable medical equipment and instruments designed for hospitals, clinics, and professional healthcare environments.',
    items: ['Diagnostic Tools', 'Surgical Instruments', 'Patient Care Devices', 'Consumables & PPE']
  }
];

export function Products() {
  return (
    <section id="products" className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 mb-4 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
            Products & Services
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We provide an end-to-end supply solution tailored to the distinct needs of pharmacies, clinics, and large-scale hospitals.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-700 mb-8 border border-primary-100">
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{cat.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed flex-1">{cat.description}</p>
              
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-bold text-sm tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: BriefcaseMedical,
              title: "Bulk Supply Options",
              desc: "Scalable purchasing volumes for major healthcare institutions with significant bulk discounts."
            },
            {
              icon: Truck,
              title: "Reliable Delivery Services",
              desc: "Fast, secure logistics network ensuring your supplies arrive on time and in perfect condition."
            },
            {
              icon: Wallet,
              title: "Flexible Financing",
              desc: "We offer a 1-week payment grace period for trusted partners to ease cash-flow constraints."
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-start shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 text-green-600 mb-6 border border-green-100">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
