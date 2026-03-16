"use client";

import React, { useState } from 'react';
import { 
  ArrowRight,
  TrendingUp,
  ZoomIn,
  X
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const chatScreenshots = [
    { id: 1, src: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80" },
    { id: 2, src: "https://images.unsplash.com/photo-1580234811497-9bd7fd0f5600?w=800&q=80" },
    { id: 3, src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" },
    { id: 4, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
    { id: 5, src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80" },
    { id: 6, src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80" },
    { id: 7, src: "https://picsum.photos/id/20/800/1000" },
    { id: 8, src: "https://picsum.photos/id/26/800/1000" },
    { id: 9, src: "https://picsum.photos/id/30/800/1000" },
    { id: 10, src: "https://picsum.photos/id/37/800/1000" },
    { id: 11, src: "https://picsum.photos/id/42/800/1000" },
    { id: 12, src: "https://picsum.photos/id/48/800/1000" },
    { id: 13, src: "https://picsum.photos/id/54/800/1000" },
    { id: 14, src: "https://picsum.photos/id/60/800/1000" },
    { id: 15, src: "https://picsum.photos/id/65/800/1000" },
    { id: 16, src: "https://picsum.photos/id/72/800/1000" },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 max-w-4xl w-full justify-between shadow-2xl">
         <div className="flex items-center gap-3">
      <div className="flex items-center justify-center">
        <img 
          src="/flux-store.png" 
          alt="Flux Store Logo" 
          className="h-8 w-auto object-contain" 
        />
      </div>
      <span className="font-bold tracking-tighter text-xl text-white uppercase">FLUX STORE</span>
    </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition">Featured Service</Link>
            <Link href="/testimonials" className="text-white font-bold transition">Testimonials</Link>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition">
            Contact
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden text-center">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6 text-blue-400">
            <TrendingUp size={16} />
            <span className="text-xs font-bold uppercase tracking-wider leading-none">Proof of Legitimacy</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
            WALL OF <br />
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic text-6xl md:text-9xl px-4">
                TRUST
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* 3. GRID HIGHLIGHT CARDS */}
      <section className="py-12 px-6 w-full flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {chatScreenshots.map((chat) => (
              <motion.div
                key={chat.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImg(chat.src)}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[30px] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[24px] md:rounded-[28px] p-2 md:p-3 transition-all duration-500 overflow-hidden shadow-2xl h-full">
                  <div className="w-full aspect-[3/4] rounded-[18px] md:rounded-[20px] overflow-hidden bg-gray-900 border border-white/5 relative">
                    <img 
                      src={chat.src} 
                      alt={`Testimonial ${chat.id}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-white/10 p-3 rounded-full border border-white/20">
                        <ZoomIn size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-all hover:rotate-90">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg} 
              className="max-w-full max-h-[85vh] rounded-[32px] shadow-[0_0_50px_rgba(37,99,235,0.2)] border border-white/10 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. FOOTER - Minimalist Style */}
      <footer className="py-20 px-6 border-t border-white/5 text-center mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 tracking-tighter uppercase italic">Ready to Boost?</h2>
          
          <Link 
            href="/#featured"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all transform hover:scale-[1.05] active:scale-95 shadow-xl mb-10"
          >
            ORDER NOW <ArrowRight size={20} />
          </Link>

          <p className="text-[14px] text-gray-800 uppercase tracking-widest font-medium">
            &copy; 2026 Flux Store. Built for the Elite Players.
          </p>
        </div>
      </footer>
    </div>
  );
}