import { motion } from 'motion/react';
import { Monitor, Shield, Network, Code, Settings, Users } from 'lucide-react';

const services = [
  {
    title: 'Computer Consultancy',
    description: 'Expert troubleshooting and strategic IT advice to keep your business running smoothly.',
    icon: Monitor,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Networking & Infrastructure',
    description: 'Robust LAN/WAN setup, server management, and reliable internet connectivity solutions.',
    icon: Network,
    color: 'bg-slate-100 text-slate-600',
  },
  {
    title: 'CCTV & Security Systems',
    description: 'Advanced surveillance and access control systems to protect your assets 24/7.',
    icon: Shield,
    color: 'bg-secondary/10 text-secondary',
  },
  {
    title: 'Software Solutions',
    description: 'Custom accounting, HR, and inventory management software tailored for your needs.',
    icon: Code,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Preventive Maintenance',
    description: 'Regular hardware servicing and software updates to prevent costly downtime.',
    icon: Settings,
    color: 'bg-slate-100 text-slate-600',
  },
  {
    title: 'IT Training',
    description: 'Empowering your staff with the technical skills needed to excel in a digital world.',
    icon: Users,
    color: 'bg-primary/10 text-primary',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Comprehensive IT Solutions
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of technical services designed to help Nakuru businesses thrive in the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rounded-[1.5rem] group-hover:rotate-6 ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-primary font-bold inline-flex items-center gap-2 group-hover:text-secondary transition-colors"
              >
                Request Quote <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
