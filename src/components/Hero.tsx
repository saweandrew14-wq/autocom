import { motion } from 'motion/react';
import { ArrowRight, Shield, Cpu, Network } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
          alt="IT Infrastructure Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Nakuru's Leading IT Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white leading-[1.1] mb-6">
            Empowering <span className="text-secondary">Nakuru</span> with Expert IT Solutions
          </h1>
          
          <p className="text-lg text-slate-200 mb-10 max-w-lg leading-relaxed">
            From Biashara Street to the whole of Nakuru County, we provide world-class computer consultancy, networking, and security systems for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-primary/20"
            >
              Our Services <ArrowRight size={20} />
            </a>
            <a
              href="#shop"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              Browse Shop
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-white font-display text-3xl font-bold">15+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-bold">Years Experience</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white font-display text-3xl font-bold">500+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-bold">Happy Clients</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white font-display text-3xl font-bold">24/7</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-bold">Support Ready</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <Shield size={48} className="text-accent mb-4" />
              <h3 className="text-white text-xl mb-2">Security</h3>
              <p className="text-white/60 text-sm">Advanced CCTV & Cyber Security</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 transform translate-y-12 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Network size={48} className="text-secondary mb-4" />
              <h3 className="text-white text-xl mb-2">Networking</h3>
              <p className="text-white/60 text-sm">Reliable Infrastructure</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 transform -translate-y-4 rotate-2 hover:rotate-0 transition-transform duration-500">
              <Cpu size={48} className="text-blue-400 mb-4" />
              <h3 className="text-white text-xl mb-2">Hardware</h3>
              <p className="text-white/60 text-sm">Premium Laptops & Desktops</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
