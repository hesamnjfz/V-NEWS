"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

interface Post {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    tag: "Design",
    title: "The Art of Negative Space in Modern UI",
    excerpt:
      "How silence in design speaks louder than noise — a deep dive into intentional emptiness and why restraint is the ultimate power move.",
    date: "June 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    tag: "Typography",
    title: "Bold Type as Visual Architecture",
    excerpt:
      "Typography isn't decoration. It's structure, emotion, and brand voice captured in a single stroke of intentional weight.",
    date: "May 2026",
    readTime: "4 min",
  },
  {
    id: 3,
    tag: "Motion",
    title: "When Animation Earns Its Place",
    excerpt:
      "Motion design done wrong is noise. Done right, it's the difference between a product that's good and one that's unforgettable.",
    date: "April 2026",
    readTime: "6 min",
  },
  {
    id: 4,
    tag: "Branding",
    title: "Luxury Identity in the Digital Age",
    excerpt:
      "What makes a brand feel expensive? The invisible details most designers overlook — and how to engineer that feeling deliberately.",
    date: "March 2026",
    readTime: "7 min",
  },
];

// انیمیشن‌های هماهنگ برای کل بخش
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

export default function Blog() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-10%" });
  const [featured, ...rest] = posts;

  return (
    <section
      id="blog"
      ref={containerRef}
      // تراز وسط کامل و ارتفاع پویا
      className="relative w-full min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full max-w-[1200px] mx-auto flex flex-col items-center"
      >
        {/* ─── Header ─── */}
        <div className="flex flex-col items-center text-center w-full mb-16 md:mb-24">
          <motion.p
            variants={itemVariants}
            className="font-sans font-black text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#C9A84C] mb-6"
            style={{ padding: "10px" }}
          >
            Thoughts & Insights
          </motion.p>

          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-20 origin-center"
            style={{ marginBottom: "5px" }}
          />

          <motion.h2
            variants={itemVariants}
            className="font-display font-black text-[clamp(2.5rem,8vw,6rem)] text-[#1A1610] leading-[0.9] tracking-tighter"
            style={{ marginBottom: "15px" }}
          >
            THE{" "}
            <span className="text-[#C9A84C] relative inline-block">
              JOURNAL
              {/* افکت نوری ظریف زیر کلمه */}
              <span className="absolute bottom-0 left-0 w-full h-[30%] bg-[#C9A84C]/10 blur-md -z-10" />
            </span>
          </motion.h2>
        </div>

        {/* ─── Featured Post ─── */}
        <motion.article
          variants={itemVariants}
          className="group w-full bg-white/50 backdrop-blur-sm border border-[#1A1610]/5 hover:border-[#C9A84C]/40 rounded-sm shadow-[0_20px_40px_rgba(26,22,16,0.03)] hover:shadow-[0_30px_60px_rgba(201,168,76,0.08)] transition-all duration-500 mb-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-hidden"
        >
          {/* Image Section */}
          <div
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] overflow-hidden bg-[#E5DFD3]"
            style={{ padding: "15px" }}
          >
            <Image
              src="/img/phot20.jpg"
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* گرادیانت روی عکس برای ترکیب بهتر */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content Section */}
          <div
            className="flex flex-col justify-center text-left p-8 sm:p-12 md:p-14"
            style={{ padding: "15px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#C9A84C] text-[#1A1610] font-black text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-xs">
                {featured.tag}
              </span>
              <span className="font-sans font-bold text-[10px] sm:text-xs text-[#1A1610]/50 tracking-widest uppercase">
                Featured Article
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1610] leading-tight mb-5 group-hover:text-[#C9A84C] transition-colors duration-300">
              {featured.title}
            </h3>

            <p className="font-sans font-medium text-sm md:text-base text-[#1A1610]/70 leading-relaxed mb-10 max-w-lg">
              {featured.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#1A1610]/10 mt-auto">
              <span className="font-sans font-bold text-[10px] sm:text-xs text-[#1A1610]/50 tracking-widest uppercase">
                {featured.date} · {featured.readTime}
              </span>
              <span className="font-sans font-black text-xs tracking-widest uppercase text-[#1A1610] group-hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2">
                Read More
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </div>
          </div>
        </motion.article>

        {/* ─── Grid Posts ─── */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ padding: "15px" }}
        >
          {rest.map((post) => (
            <article
              key={post.id}
              className="group h-full flex flex-col bg-white/40 backdrop-blur-sm border border-[#1A1610]/5 hover:border-[#C9A84C]/30 p-8 sm:p-10 rounded-sm shadow-[0_10px_30px_rgba(26,22,16,0.02)] hover:shadow-[0_20px_40px_rgba(201,168,76,0.06)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#C9A84C] font-black text-[10px] tracking-[0.3em] uppercase">
                  {post.tag}
                </span>
                <span className="font-sans font-bold text-[10px] text-[#1A1610]/40 tracking-widest uppercase">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-black text-xl md:text-2xl text-[#1A1610] leading-[1.2] mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-sans font-medium text-sm text-[#1A1610]/60 leading-relaxed mb-10 flex-1">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-[#1A1610]/10">
                <span className="font-sans font-bold text-[10px] text-[#1A1610]/40 tracking-widest uppercase">
                  {post.date}
                </span>
                <span className="text-[#1A1610] group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all duration-300 text-lg">
                  →
                </span>
              </div>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
