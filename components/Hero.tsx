"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center text-center overflow-hidden px-6 md:px-16 lg:px-24"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A84C]/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[100px]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-[2px] bg-[#C9A84C] mb-10"
        />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans font-black text-[11px] md:text-xs tracking-[0.5em] uppercase text-[#C9A84C] mb-8"
          style={{ padding: "10px" }}
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-display font-black text-[clamp(4rem,12vw,10rem)] text-[#1A1610] leading-[0.9] tracking-tight mb-10 w-full"
        >
          CRAFT
          <br />
          <span className="text-[#C9A84C]">BEYOND</span>
          <br />
          LIMITS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="font-serif font-bold text-xl md:text-2xl lg:text-3xl text-[#51442d] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I design and build digital experiences that feel{" "}
          <em className="not-italic text-[#a48632] font-black">
            extraordinary
          </em>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          style={{ marginBottom: "10px" }}
        >
          <a
            href="#about"
            className="bg-[#1A1610] text-[#F5F0E8] font-black text-xs tracking-[0.3em] uppercase px-14 py-5 hover:bg-[#C9A84C] hover:text-[#1A1610] transition-all duration-300 text-center whitespace-nowrap"
            style={{ padding: "10px" }}
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="border-2 border-[#1A1610] text-[#1A1610] font-black text-xs tracking-[0.3em] uppercase px-14 py-5 hover:bg-[#1A1610] hover:text-[#F5F0E8] transition-all duration-300 text-center whitespace-nowrap"
            style={{ padding: "10px" }}
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="w-20 h-[2px] bg-[#C9A84C] mt-16"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans font-black text-[9px] tracking-[0.4em] uppercase text-[#6B5F4A]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-[1.5px] h-10 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>
    </section>
  );
}
