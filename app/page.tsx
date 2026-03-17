"use client";

import React, { useState } from "react"; // 1. Tambahkan useState
import {
  ShieldCheck,
  Zap,
  MessageSquare,
  Gamepad2,
  TrendingUp,
  ArrowRight,
  X, // Tambahkan icon X untuk tutup modal
} from "lucide-react";

export default function HomePage() {
  // 2. State untuk mengontrol kemunculan kartu Price List
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* 1. NAVBAR */}
      <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <div className="glass bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 max-w-4xl w-full justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <img
                src="/flux-store.png"
                alt="Flux Store Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="font-bold tracking-tighter text-xl text-white uppercase">
              FLUX STORE
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#featured" className="hover:text-blue-400 transition">
              Featured Service
            </a>
            {/* <a href="/testimonials" className="hover:text-blue-400 transition">
              Testimonials
            </a> */}
          </div>

          <button 
      onClick={() => window.open('https://wa.me/6283878885958', '_blank')}
      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition shadow-[0_0_15px_rgba(37,99,235,0.4)] active:scale-95"
    >
      Contact
    </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6">
            <TrendingUp size={16} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Trusted Manual Farming Service
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
            FASTEST <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              IN-GAME CURRENCY
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dapatkan aset game impian Anda dengan aman di Flux Store. Kami
            bekerja secara manual tanpa script/bot.
          </p>
        </div>
      </section>

      {/* 3. TRUST INDICATORS */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          {[
            {
              icon: <ShieldCheck className="text-green-400" />,
              title: "100% Manual",
              desc: "No bot, no ban risk",
            },
            {
              icon: <Zap className="text-yellow-400" />,
              title: "Instant Process",
              desc: "Start in 5 minutes",
            },
            {
              icon: <MessageSquare className="text-blue-400" />,
              title: "Human Support",
              desc: "Direct to Admin",
            },
            {
              icon: <Gamepad2 className="text-purple-400" />,
              title: "Top Games",
              desc: "Most popular games",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest text-gray-200">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* 4. FEATURED CARD - UPGRADED DESIGN */}
<section id="featured" className="py-32 max-w-7xl mx-auto px-6">
  <div className="relative w-full max-w-4xl mx-auto group">
    
    {/* Background Decorative Glows */}
    <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

    {/* Main Card Container */}
    <div className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-[48px] p-2 md:p-3 overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row items-stretch">
        
        {/* SISI KIRI: Visual Area */}
        <div className="w-full md:w-[45%] relative min-h-[350px] md:min-h-full overflow-hidden rounded-[40px]">
          {/* Overlay Gradient untuk Gambar */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
          <img
            src="/cdid-logo.png"
            alt="Feature Game"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Badge Melayang di Atas Gambar */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/40 uppercase tracking-widest">
              Hot Service
            </div>
          </div>
        </div>

        {/* SISI KANAN: Content Area */}
        <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative">
          {/* Aksesoris Garis Estetik */}
          <div className="absolute top-12 right-12 opacity-10">
             <Zap size={100} className="text-white" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Manual Farming</span>
            </div>

            <h3 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter italic text-white">
              CDID <span className="text-blue-500">.</span>
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-sm">
              Tingkatkan aset kekayaan Anda di <span className="text-white font-bold">Car Driving Indonesia</span> dengan proses yang paling aman dan legal.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
               {["Anti-Ban", "Fast Delivery", "No Script"].map((tag) => (
                 <span key={tag} className="text-[9px] font-bold text-gray-400 border border-white/10 px-3 py-1 rounded-lg uppercase">
                    {tag}
                 </span>
               ))}
            </div>

            {/* Price & Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Starts From</span>
                <span className="text-3xl font-black text-white italic">Rp 10k</span>
              </div>
              
              <button
                onClick={() => setIsPriceListOpen(true)}
                className="group/btn relative w-full sm:w-auto overflow-hidden bg-white text-black px-10 py-5 rounded-2xl font-black transition-all hover:pr-14 active:scale-95 shadow-xl shadow-white/5"
              >
                <span className="relative z-10">VIEW PRICE LIST</span>
                <ArrowRight 
                  size={22} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" 
                />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* 5. MODAL / PRICE LIST CARD (GRID LAYOUT 3-3-1) */}
      {isPriceListOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          onClick={() => setIsPriceListOpen(false)}
        >
          <div
            className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  <Zap size={22} className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tighter text-white uppercase italic">
                  CDID Price List
                </h2>
              </div>
              <button
                onClick={() => setIsPriceListOpen(false)}
                className="p-2 text-gray-600 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body Modal */}
            <div className="p-6 md:p-10">
              {/* Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { label: "10M", price: "Rp 10.000", time: "2 Jam" },
                  { label: "25M", price: "Rp 25.000", time: "5 Jam" },
                  { label: "50M", price: "Rp 50.000", time: "10 Jam" },
                  { label: "75M", price: "Rp 75.000", time: "15 Jam" },
                  { label: "100M", price: "Rp 100.000", time: "20 Jam" },
                  { label: "200M", price: "Rp 200.000", time: "40 Jam" },
                  {
                    label: "250M",
                    price: "Rp 250.000",
                    time: "50 Jam",
                    hot: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-row justify-between items-center p-5 rounded-2xl border transition-all duration-300 ${
                      item.hot
                        ? "bg-blue-600/15 border-blue-500/50 md:col-span-2 md:mx-auto md:w-[60%] shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-white font-black text-xl tracking-tighter">
                        {item.label}{" "}
                        <span className="text-gray-500 text-[10px] font-bold uppercase">
                          Money
                        </span>
                      </span>
                      <span className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">
                        {item.time}
                      </span>
                    </div>

                    {item.hot && (
                      <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg animate-pulse">
                        Best Seller
                      </div>
                    )}

                    <div className="text-right">
                      <span
                        className={`text-xl font-black tracking-tight ${item.hot ? "text-blue-400" : "text-white"}`}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* INFO TAMBAHAN: CUSTOM AMOUNT */}
              <div className="flex flex-col items-center gap-3 mb-10 group">
                <div className="flex items-center gap-4 w-full">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent flex-grow"></div>
                  <span className="text-gray-500 text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                    Custom Amount?
                  </span>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent flex-grow"></div>
                </div>

                <p className="text-gray-400 text-sm font-medium italic text-center leading-relaxed">
                  "Punya budget khusus atau butuh nominal lain? <br />
                  <span className="text-blue-400 not-italic font-extrabold uppercase tracking-tight">
                    Tenang, harga bisa didiskusikan langsung dengan admin.
                  </span>
                  "
                </p>
              </div>

             {/* Action Button: Kembali ke WhatsApp */}
        <button 
          onClick={() => window.open('https://wa.me/6283878885958', '_blank')}
          className="w-full bg-white text-black py-4 rounded-2xl font-black transition transform active:scale-95 flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white group shadow-xl"
        >
          ORDER VIA WHATSAPP 
          <MessageSquare size={18} className="group-hover:animate-bounce" />
        </button>

        <p className="mt-6 text-[9px] text-center text-gray-600 font-bold uppercase tracking-[0.3em]">
          Secure Manual Farming • No Bot • No Script
        </p>
            </div>
          </div>
        </div>
      )}
      {/* 6. FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter">
            Ready to Boost?
          </h2>
          <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto">
            Klik tombol di atas untuk mulai mencari uang in-game hari ini juga
            di Flux Store.
          </p>
          <p className="text-[14px] text-gray-800 uppercase tracking-widest font-medium">
            &copy; 2026 Flux Store. Built for the Elite Players.
          </p>
        </div>
      </footer>
    </div>
  );
}
