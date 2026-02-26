import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Instagram, Mail, Twitter, ArrowUpRight, X } from 'lucide-react';
import { portfolioImages, PortfolioImage } from './data';

export default function App() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const categories = ['All', ...Array.from(new Set(portfolioImages.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="p-6 md:p-10 flex justify-between items-center z-10 relative">
        <div className="font-serif text-2xl md:text-3xl font-bold tracking-tighter">
          YASU<br/>PHOTOGRAPHER.
        </div>
        <nav className="hidden md:flex gap-8 font-sans text-sm font-semibold uppercase tracking-widest">
          <a href="#work" className="hover:text-pastel-pink transition-colors">Work</a>
          <a href="#about" className="hover:text-pastel-mint transition-colors">About</a>
          <a href="#contact" className="hover:text-pastel-blue transition-colors">Contact</a>
        </nav>
        <button className="md:hidden">
          <div className="w-8 h-1 bg-matte-ink mb-1.5 rounded-full"></div>
          <div className="w-8 h-1 bg-matte-ink mb-1.5 rounded-full"></div>
          <div className="w-6 h-1 bg-matte-ink rounded-full ml-auto"></div>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border-2 border-matte-ink bg-pastel-yellow text-xs font-bold uppercase tracking-widest matte-shadow transform -rotate-2">
            Available for booking
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-6">
            CAPTURING<br/>
            <span className="italic text-transparent" style={{ WebkitTextStroke: '2px var(--color-matte-ink)', textShadow: '6px 6px 0px var(--color-pastel-pink)' }}>MOMENTS</span>
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-xl mx-auto opacity-80 mb-10">
            University student based in Shiga, Japan. Capturing moments from travels and daily life.
Available for casual shoots in the Kansai area.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pastel-mint matte-border matte-shadow -z-10 hidden md:block animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-pastel-blue matte-border matte-shadow -z-10 hidden md:block transform rotate-12"></div>
      </section>

      {/* Marquee */}
      <div className="w-full overflow-hidden border-y-2 border-matte-ink bg-pastel-pink py-3 flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 font-sans font-bold uppercase tracking-widest text-sm">
          <span>PORTRAIT PHOTOGRAPHY</span>
          <span>✦</span>
          <span>EDITORIAL</span>
          <span>✦</span>
          <span>FASHION</span>
          <span>✦</span>
          <span>STREET</span>
          <span>✦</span>
          <span>PORTRAIT PHOTOGRAPHY</span>
          <span>✦</span>
          <span>EDITORIAL</span>
          <span>✦</span>
          <span>FASHION</span>
          <span>✦</span>
          <span>STREET</span>
          <span>✦</span>
          <span>PORTRAIT PHOTOGRAPHY</span>
          <span>✦</span>
          <span>EDITORIAL</span>
          <span>✦</span>
          <span>FASHION</span>
          <span>✦</span>
          <span>STREET</span>
          <span>✦</span>
        </div>
      </div>

      {/* Gallery Section */}
      <section id="work" className="py-20 px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter">SELECTED<br/>WORKS</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-bold uppercase tracking-wider transition-all matte-border ${
                  filter === cat 
                    ? 'bg-matte-ink text-matte-bg matte-shadow transform -translate-y-1' 
                    : 'bg-transparent hover:bg-pastel-mint'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 grid-flow-row-dense">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative bg-white p-4 md:p-5 matte-border matte-shadow cursor-pointer flex flex-col ${
                  img.aspectRatio === 'landscape' ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div className={`relative overflow-hidden matte-border bg-matte-bg w-full ${
                  img.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                  img.aspectRatio === 'landscape' ? 'aspect-[16/9]' :
                  'aspect-square'
                }`}>
                  <div className={`absolute inset-0 ${img.color} opacity-20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0`}></div>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-5 pb-2 flex justify-between items-end flex-grow">
                  <div>
                    <p className="text-pastel-pink font-sans text-xs font-bold uppercase tracking-widest mb-1">{img.category}</p>
                    <h3 className="text-matte-ink font-serif text-2xl md:text-3xl font-bold leading-none">{img.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pastel-yellow flex items-center justify-center matte-border transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right">
                    <ArrowUpRight size={18} className="text-matte-ink" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-matte-ink/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-matte-bg matte-border matte-shadow flex flex-col md:flex-row overflow-hidden"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center matte-border hover:bg-pastel-yellow transition-colors"
              >
                <X size={20} className="text-matte-ink" />
              </button>
              
              <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] bg-matte-bg flex items-center justify-center p-4 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-matte-ink">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full object-contain matte-border matte-shadow bg-white p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-matte-bg overflow-y-auto">
                <p className="text-pastel-pink font-sans text-sm font-bold uppercase tracking-widest mb-2">{selectedImage.category}</p>
                <h3 className="text-matte-ink font-serif text-4xl md:text-5xl font-bold mb-6">{selectedImage.title}</h3>
                <p className="font-sans text-matte-ink/70 leading-relaxed mb-8">
                  Captured with a focus on light and shadow. This piece represents the essence of {selectedImage.category.toLowerCase()} photography, bringing out the natural beauty of the subject.
                </p>
                <div className="mt-auto pt-6 border-t-2 border-matte-ink/10 flex justify-between items-center">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-matte-ink/50">ID: {selectedImage.id}</span>
                  <a href={selectedImage.src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-pastel-pink transition-colors">
                    View Original <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / CTA */}
      <footer id="contact" className="mt-auto border-t-2 border-matte-ink bg-pastel-blue pt-20 pb-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-8">LET'S CREATE<br/>SOMETHING BEAUTIFUL</h2>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-matte-ink text-matte-bg rounded-full font-sans font-bold uppercase tracking-widest hover:bg-pastel-yellow hover:text-matte-ink transition-colors matte-border matte-shadow mb-16">
            <Mail size={20} />
            Get in touch
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-matte-ink/20">
            <div className="font-serif text-xl font-bold">YASU PHOTOGRAPHER.</div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/yasu_photography_0319?igsh=MTF6bTNxa2NnNzNvbA%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-white transition-colors"><Camera /></a>
            </div>
            <div className="font-sans text-sm font-semibold uppercase tracking-widest opacity-70">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
