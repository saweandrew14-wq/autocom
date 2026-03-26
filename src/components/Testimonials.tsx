import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Kamau',
    role: 'CEO, Nakuru Logistics',
    content: 'Autocom Systems transformed our office networking. Their team is professional, fast, and always available when we need support.',
    image: 'https://i.pravatar.cc/150?u=john',
  },
  {
    name: 'Sarah Wanjiku',
    role: 'Principal, Biashara Academy',
    content: 'We bought all our school computers from them. The after-sales service is what sets them apart from other shops in Nakuru.',
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'David Omondi',
    role: 'Manager, Rift Valley Hotel',
    content: 'The CCTV installation was seamless. I can now monitor my business from anywhere. Highly recommended for security solutions.',
    image: 'https://i.pravatar.cc/150?u=david',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Trusted by Nakuru's Finest
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what local business leaders have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative group border border-slate-100"
            >
              <Quote className="absolute top-6 right-8 text-slate-100 group-hover:text-primary/10 transition-colors" size={64} />
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
