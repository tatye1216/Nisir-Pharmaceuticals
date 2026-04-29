import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const FAQS = [
  {
    question: "What are your standard delivery timelines?",
    answer: "For institutions within Gondar, we guarantee same-day or next-day delivery for in-stock items. For the broader Southwest Ethiopia region, deliveries typically take 2-4 business days depending on order volume and exact location."
  },
  {
    question: "How does your bulk pricing work?",
    answer: "We offer tiered pricing structures based on order volume and partnership level. Wholesale buyers and long-term hospital partners receive our most aggressive discounts. Contact our sales team for a custom quote sheet tailored to your regular inventory needs."
  },
  {
    question: "Where do you source your products?",
    answer: "We maintain a robust network of vetted manufacturers and primary importers in Addis Ababa and internationally. All our products are 100% authentic, fully certified, and strictly adhere to Ethiopian Food and Drug Authority (EFDA) regulations."
  },
  {
    question: "Do you offer payment grace periods?",
    answer: "Yes. For our established and trusted B2B partners, we offer a 1-week (7-day) payment grace period to help manage cash flow and ensure there is no disruption in your essential medical supply chain."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Answers to common questions from our partners and clients.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-white transition-colors shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-heading font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center transition-colors border",
                    openIndex === index ? "bg-primary-50 text-primary-700 border-primary-100" : "bg-white border-gray-200 text-gray-400"
                  )}>
                    <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", openIndex === index && "rotate-180")} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
