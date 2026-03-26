import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
              Let's Solve Your <span className="text-secondary">IT Challenges</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Our Location</h5>
                  <p className="text-slate-600">Biashara Street, Nakuru City, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Call Us</h5>
                  <p className="text-slate-600">+254 700 000 000 / +254 711 111 111</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Email Us</h5>
                  <p className="text-slate-600">info@autocomsystems.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">Business Hours</h5>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 5:30 PM<br />Sat: 8:30 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="w-full h-64 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 p-8 text-center">
                <MapPin size={48} className="text-slate-300" />
                <p className="text-slate-400 font-medium">Interactive Map of Biashara Street, Nakuru would be embedded here.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <h4 className="text-2xl font-display font-bold text-slate-900 mb-6">Request a Free Quote</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+254 7..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none">
                  <option>Computer Consultancy</option>
                  <option>Networking Setup</option>
                  <option>CCTV Installation</option>
                  <option>Software Solution</option>
                  <option>Hardware Purchase</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your IT needs..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
