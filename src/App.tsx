/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCatalog from './components/ProductCatalog';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    document.title = "Autocom Systems - Nakuru IT Solutions";
    
    // Update favicon dynamically
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    // @ts-ignore
    link.rel = 'icon';
    // @ts-ignore
    link.href = 'https://lh3.googleusercontent.com/d/1m5UwAp1iCgrStla5FArOewNT_EnwzqHW';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProductCatalog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
