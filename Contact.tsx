import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 flex flex-col gap-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 mb-4 text-center max-w-3xl mx-auto shadow-sm">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 font-bold tracking-widest uppercase text-xs mb-4 border border-primary-100">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
            Get a Bulk Supply Quote
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Tell us about your business and your inventory requirements. Our team aims to respond to all B2B inquiries within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Contact Info Bento */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center flex-1"
            >
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Office Location</h3>
              <p className="text-gray-500 leading-relaxed">Gondar, Amhara Region<br />Ethiopia</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center flex-1"
            >
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Phone Inquiries</h3>
              <p className="text-gray-500 leading-relaxed">+251 (XX) XXX-XXXX<br />+251 (XX) XXX-XXXX</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center flex-1"
            >
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 leading-relaxed">sales@nisirpharma.com<br />contact@nisirpharma.com</p>
            </motion.div>
          </div>

          {/* Form Bento */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col"
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 flex-1">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-100">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-heading font-black text-gray-900 mb-4 tracking-tight">Request Sent!</h3>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for your interest in Nisir Pharmaceuticals. A sales representative will contact you shortly to process your quote.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-primary-600 font-bold hover:text-primary-700 uppercase tracking-widest text-sm"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 font-medium"
                      placeholder="e.g. Dr. Abebe Kebede"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="businessType" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Business Type</label>
                    <select 
                      required
                      id="businessType"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 font-medium"
                    >
                      <option value="">Select option...</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="hospital">Hospital</option>
                      <option value="clinic">Clinic</option>
                      <option value="other">Other B2B Entity</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 font-medium"
                      placeholder="+251..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-gray-50 font-medium"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Order Inquiry / Comments</label>
                  <textarea 
                    required
                    id="message"
                    rows={4}
                    className="w-full flex-1 min-h-[120px] px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none bg-gray-50 font-medium"
                    placeholder="Tell us what products you are looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold tracking-wide py-5 rounded-2xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mt-6 shadow-sm"
                >
                  {formStatus === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs font-medium text-gray-400 text-center mt-4 uppercase tracking-widest">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
