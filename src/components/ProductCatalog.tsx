import { motion } from 'motion/react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'HP Desktop',
    category: 'Desktops',
    price: 'KSh 85,000',
    image: 'https://lh3.googleusercontent.com/d/1ddLOfFE1BU19S7sh8SuqdGf1P3Hf87wj',
    specs: 'Core i7, 16GB RAM, 512GB SSD',
  },
  {
    id: 2,
    name: 'Pods',
    category: 'Accessories',
    price: 'KSh 15,000',
    image: 'https://lh3.googleusercontent.com/d/15oinbMNqK7MKcClwTesLHmNKvZKEfize',
    specs: 'Wireless Earbuds, Noise Cancelling',
  },
  {
    id: 3,
    name: 'External Hard Disk',
    category: 'Storage',
    price: 'KSh 9,000',
    image: 'https://lh3.googleusercontent.com/d/1Vn_EloMAGQkvJYXaZyfYAj1OG2dubBAT',
    specs: '1TB Portable USB 3.0',
  },
  {
    id: 4,
    name: 'Tablet',
    category: 'Tablets',
    price: 'KSh 25,000',
    image: 'https://lh3.googleusercontent.com/d/1vQpA9QA5AXhJt3AxXooo9bXGKvF0nXNc',
    specs: '10-inch Display, 64GB Storage',
  },
  {
    id: 5,
    name: 'HP Laptop',
    category: 'Laptops',
    price: 'KSh 65,000',
    image: 'https://lh3.googleusercontent.com/d/18iBvC7-4OE6FqhlzEehBPBadEKMO5lTJ',
    specs: 'Core i5, 8GB RAM, 256GB SSD',
  },
  {
    id: 6,
    name: 'Desktop PC Tower',
    category: 'Desktops',
    price: 'KSh 55,000',
    image: 'https://lh3.googleusercontent.com/d/1reraHO4c9nVtA1Ac_NBJnkuRgGhGu_rh',
    specs: 'Core i5, 8GB RAM, 1TB HDD',
  },
  {
    id: 7,
    name: 'RAMs',
    category: 'Components',
    price: 'KSh 5,500',
    image: 'https://lh3.googleusercontent.com/d/1_xtTRLxKVj_Ji_21KaDIy2xew9hP5x3m',
    specs: '8GB DDR4 Desktop RAM',
  },
  {
    id: 8,
    name: 'Wireless Mouse',
    category: 'Accessories',
    price: 'KSh 2,500',
    image: 'https://lh3.googleusercontent.com/d/14J9vbNL-9V-iUQw--C07rc50o1cD7SUg',
    specs: '2.4GHz Wireless, Ergonomic Design',
  },
  {
    id: 9,
    name: 'Robot Speaker',
    category: 'Accessories',
    price: 'KSh 4,500',
    image: 'https://lh3.googleusercontent.com/d/1Bx-8VgL3lL044WidoztPKpxpUHSPQ8BU',
    specs: 'Bluetooth 5.0, AI Voice Control',
  },
  {
    id: 10,
    name: 'USB Adapter',
    category: 'Accessories',
    price: 'KSh 1,500',
    image: 'https://lh3.googleusercontent.com/d/1gYiad-slXXgk_7VRhmasmsOXSWvdvG93',
    specs: 'USB-C to HDMI/USB 3.0',
  },
  {
    id: 11,
    name: 'Printer',
    category: 'Printers',
    price: 'KSh 35,000',
    image: 'https://lh3.googleusercontent.com/d/1wy6qB55xzxysxCgp-KiEoiTLzq6ZOJNs',
    specs: 'All-in-One, Wireless Printing',
  },
  {
    id: 12,
    name: 'HP CPU',
    category: 'Components',
    price: 'KSh 25,000',
    image: 'https://lh3.googleusercontent.com/d/1GbQeD6pWRpPHZT6-No274dFaqn8Z9mun',
    specs: 'Intel Core i7 Processor',
  },
];

export default function ProductCatalog() {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Our Shop</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Quality Hardware & Software
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We supply genuine computer hardware and software from world-leading brands to ensure reliability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="aspect-square bg-slate-50 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-xs text-slate-500 mb-4">{product.specs}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-secondary font-display font-bold text-xl">
                    {product.price}
                  </span>
                  <button className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
