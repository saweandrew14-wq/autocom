import { motion } from 'motion/react';
import { CheckCircle2, History, MapPin, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-24"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://lh3.googleusercontent.com/d/1wy6qB55xzxysxCgp-KiEoiTLzq6ZOJNs"
                  alt="Reliable Power Solutions"
                  className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl shadow-primary/10"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-primary p-6 rounded-3xl text-white">
                  <History size={32} className="mb-4 text-white/60" />
                  <h4 className="text-xl font-bold mb-2">Established Roots</h4>
                  <p className="text-white/80 text-sm">Serving Nakuru from Biashara Street since the beginning.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-secondary p-6 rounded-3xl text-white">
                  <Target size={32} className="mb-4 text-white/60" />
                  <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-white/80 text-sm">To bridge the digital divide in Nakuru through expert IT consultancy.</p>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/d/18iBvC7-4OE6FqhlzEehBPBadEKMO5lTJ"
                  alt="Premium Hardware Solutions"
                  className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl shadow-secondary/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">About Autocom Systems</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Your Trusted IT Partner in <span className="text-primary">Nakuru</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Autocom Systems was founded with a simple goal: to provide Nakuru businesses with the same level of IT expertise found in major global hubs. Based in the heart of Biashara Street, we've grown from a small troubleshooting shop to a full-service IT consultancy firm.
            </p>

            <div className="space-y-6 mb-10">
              {[
                'Deep local knowledge of Nakuru\'s business landscape',
                'Certified experts in networking and security',
                'Premium hardware partnerships with HP, Dell, and Epson',
                'Unmatched after-sales support and maintenance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-secondary shrink-0" size={24} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900">Visit Our Office</h5>
                <p className="text-slate-500 text-sm">Biashara Street, Nakuru City, Kenya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
