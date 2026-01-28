"use client";
import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Twitter,
  Mail,
  Crown,
  ChevronRight,
  Leaf,
  MapPin,
  Globe
} from "lucide-react";

export default function RoyalChaiHeritage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d1a12] text-[#f1e5d1] selection:bg-[#d4af37] selection:text-[#0d1a12] overflow-x-hidden">
      {/* --- Elegant Font Injection --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Montserrat:wght@700;900&display=swap');

        .font-luxury {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-sharp {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
        }
      `}</style>

      {/* --- 1. HERO BACKGROUND IMAGE --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/tea.jpg')`,
            filter: "brightness(0.35) contrast(1.1) saturate(0.8)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a12]/80 via-transparent to-[#0d1a12]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a12]/90 via-transparent to-transparent" />
      </div>

      {/* --- 2. NAVIGATION --- */}
      <nav className="relative z-50 p-8 md:p-12 flex justify-between items-center max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-1 group cursor-default"
        >
          <Crown className="text-[#d4af37]" size={28} />
          <span className="font-sharp text-[9px] tracking-[0.8em]">
            Chai Culture
          </span>
        </motion.div>

        <div className="flex gap-6 items-center">
          <div className="hidden md:block h-[1px] w-12 bg-[#d4af37]/30" />
          <span className="font-sharp text-[9px] tracking-[0.4em] opacity-60 italic">
            Est. 2026
          </span>
        </div>
      </nav>

      {/* --- 3. MAIN CONTENT --- */}
      <main className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[75vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="text-[#d4af37]" size={16} />
                <p className="font-sharp text-[#d4af37] text-[9px] tracking-[0.6em] font-bold">
                  The Sovereign Premix Selection
                </p>
              </div>

              <h1 className="font-luxury text-[13vw] lg:text-[10vw] font-bold leading-[0.75] tracking-tighter uppercase mb-8">
                Royalty <br />
                <span className="italic font-light text-[#d4af37] lowercase">
                  in every
                </span>{" "}
                Gram<span className="text-[#d4af37]">.</span>
              </h1>

              <p className="font-luxury max-w-2xl text-xl md:text-3xl font-light text-[#f1e5d1]/70 leading-relaxed italic mb-12">
                "From the mist-shrouded hills of Munnar to your morning ritual.
                Experience a heritage tea blend once reserved for the sovereign
                estates of India."
              </p>

              <div className="max-w-md">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="relative flex items-center border-b border-[#d4af37]/30 focus-within:border-[#d4af37] transition-all duration-1000"
                    >
                      <input
                        type="email"
                        placeholder="REQUEST EARLY ACCESS"
                        className="font-sharp bg-transparent grow py-6 text-[10px] tracking-[0.5em] outline-none text-[#f1e5d1] placeholder:text-[#f1e5d1]/30"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="p-4 text-[#d4af37] hover:translate-x-3 transition-transform duration-500"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-luxury py-6 text-2xl italic text-[#d4af37] flex items-center gap-3"
                    >
                      <Globe size={20} className="animate-pulse" />
                      The Royal Circle Awaits Your Arrival.
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="font-sharp mt-4 text-[8px] tracking-[0.4em] opacity-20">
                  Launching Globally • Spring 2026
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-12 hidden lg:block">
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                  <MapPin size={18} />
                </div>
                <h4 className="font-sharp text-[9px] tracking-widest text-[#d4af37]">
                  Estate Grown
                </h4>
                <p className="font-luxury text-lg font-light text-[#f1e5d1]/40 italic">
                  Our leaves are hand-picked from century-old estates, ensuring a
                  profile that is both complex and timeless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-50 p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
        <div className="font-sharp text-[8px] tracking-[0.6em] text-white/20">
          © 2026 Chai Culture Global
        </div>
        <div className="flex gap-12 text-[#d4af37]/40">
          <Instagram size={18} />
          <Twitter size={18} />
          <Mail size={18} />
        </div>
        <div className="font-sharp text-[8px] tracking-[0.6em] text-white/20">
          Heritage • Authenticity
        </div>
      </footer>

      <div className="fixed -bottom-10 -right-20 font-sharp text-[22vw] font-black text-white/[0.02] pointer-events-none select-none">
        CHAI
      </div>
    </div>
  );
}
