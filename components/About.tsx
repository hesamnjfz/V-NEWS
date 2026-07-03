"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";

interface Stat {
  number: string;
  label: string;
}

interface SkillBar {
  label: string;
  pct: number;
}

const stats: Stat[] = [
  { number: "08+", label: "Years Experience" },
  { number: "120+", label: "Projects Done" },
  { number: "40+", label: "Happy Clients" },
  { number: "15+", label: "Awards Won" },
];

const skills: string[] = [
  "UI/UX Design",
  "React & Next.js",
  "TypeScript",
  "Motion Design",
  "Brand Identity",
  "Typography",
  "Node.js",
  "Creative Direction",
];

const skillBars: SkillBar[] = [
  { label: "Frontend Development", pct: 95 },
  { label: "Backend & APIs", pct: 88 },
  { label: "UI/UX Design", pct: 82 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const SECTION_LABEL =
  "font-sans font-black text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#C9A84C]";

export default function About() {
  const introRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, amount: 0.2 });
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const approachInView = useInView(approachRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative flex flex-col items-center w-full bg-[#000000] overflow-hidden selection:bg-[#C9A84C] selection:text-white"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#C9A84C]/4 blur-[140px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#C9A84C]/3 blur-[120px]" />
      </div>

      {/* ==================== INTRO ==================== */}
      <div
        ref={introRef}
        className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-24 md:pb-32 flex flex-col items-center text-center relative z-10"
      >
        <motion.p
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={fadeIn}
          className={SECTION_LABEL}
          style={{ padding: "10px" }}
        >
          About Me
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={introInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="w-12 md:w-16 h-[2px] bg-[#C9A84C] my-8 md:my-10"
        />

        <motion.h2
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          custom={1}
          variants={fadeIn}
          className="font-display font-black text-[clamp(2.8rem,8vw,7rem)] leading-[1.1] md:leading-[1] tracking-tight text-[#F5F0E8] mb-10 md:mb-14"
        >
          OBSESSED WITH
          <br />
          <span className="text-[#C9A84C]">PERFECTION</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          custom={2}
          variants={fadeIn}
          className="font-serif font-bold text-lg md:text-2xl lg:text-3xl text-[#F5F0E8]/70 max-w-4xl leading-relaxed md:leading-normal mb-8 md:mb-10"
          style={{ padding: "10px" }}
        >
          I&apos;m Mehrzad Talayifar — a full-stack developer who lives at the
          intersection of engineering and aesthetics.
        </motion.p>

        <motion.p
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          custom={3}
          variants={fadeIn}
          className="font-sans font-medium text-base md:text-xl text-[#F5F0E8]/50 max-w-3xl leading-loose"
          style={{ padding: "10px" }}
        >
          With over 8 years of crafting digital experiences across industries, I
          bring both technical depth and an obsessive eye for detail.
        </motion.p>
      </div>

      {/* ==================== HERO IMAGE ==================== */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-[90%] md:w-[85%] max-w-[1400px] mx-auto h-[50vh] sm:h-[60vh] md:h-[80vh] min-h-[450px] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl mb-24 md:mb-40 z-10"
      >
        <Image
          src="/img/phot-6.jpg"
          alt="Mehrzad Talaifar at work"
          fill
          sizes="(max-width: 768px) 90vw, 85vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/20 to-transparent" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center w-full px-6 flex flex-col items-center">
          <div className="w-10 h-[1px] bg-[#C9A84C] mb-6 opacity-70" />
          <p
            className="font-sans font-black text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#F5F0E8] opacity-90"
            style={{ paddingTop: "10px" }}
          >
            Crafting digital excellence
          </p>
        </div>
      </motion.div>

      {/* ==================== STATS ==================== */}
      <div
        ref={statsRef}
        className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-40 flex flex-col items-center relative z-10"
      >
        <motion.p
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={fadeIn}
          className={`${SECTION_LABEL} mb-16 md:mb-20 text-center`}
          style={{ padding: "10px" }}
        >
          By The Numbers
        </motion.p>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full"
          style={{ padding: "10px", marginBottom: "60px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="group bg-white/5 border border-white/10 py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center rounded-2xl md:rounded-3xl hover:bg-white/10 hover:border-[#C9A84C]/40 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)]"
              style={{ padding: "10px", marginBottom: "20px" }}
            >
              <span className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors duration-300 leading-none">
                {stat.number}
              </span>
              <span className="font-sans font-black text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#F5F0E8]/40 mt-6 md:mt-8">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ==================== APPROACH ==================== */}
      <div
        ref={approachRef}
        className="w-full max-w-[1000px] mx-auto px-6 md:px-12 py-24 md:py-40 flex flex-col items-center text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={approachInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center mb-24 md:mb-32 w-full"
        >
          <p className={`${SECTION_LABEL} mb-8`}>My Approach</p>
          <h3 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] md:leading-[1] tracking-tight text-[#F5F0E8] mb-12">
            BUILT FOR <span className="text-[#C9A84C]">IMPACT</span>
          </h3>

          <div className="space-y-8 md:space-y-10 text-[#F5F0E8]/60 max-w-3xl mx-auto">
            <p className="font-sans font-medium text-base md:text-xl leading-loose md:leading-[2.2]">
              I approach every project with three principles: clarity of
              purpose, relentless iteration, and an unwavering commitment to the
              end user&apos;s experience.
            </p>
            <p className="font-sans font-medium text-base md:text-xl leading-loose md:leading-[2.2]">
              Code is my craft, but results are my currency. The invisible
              details are what separate good from extraordinary.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={approachInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full max-w-md md:max-w-lg aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl group"
          style={{ marginBottom: "20px" }}
        >
          <Image
            src="/img/cof2.png"
            alt="Mehrzad Talaifar"
            fill
            sizes="(max-width: 768px) 90vw, 500px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute inset-0 border-[2px] border-[#C9A84C]/20 rounded-2xl md:rounded-[2.5rem] m-4 md:m-6 pointer-events-none" />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#000000]/90 backdrop-blur-md px-8 py-5 text-center rounded-2xl shadow-xl border border-white/10 w-[85%] md:w-[75%]">
            <p className="font-sans font-black text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              MEHRZAD TALAYIFAR
            </p>
            <p className="text-[#F5F0E8]/50 text-[10px] md:text-xs mt-3 uppercase tracking-widest">
              Full-Stack Engineer & Creative Designer
            </p>
          </div>
        </motion.div>
      </div>

      {/* ==================== SKILLS ==================== */}
      <div
        className="w-full border-t border-white/5 py-32 md:py-48 flex flex-col items-center relative z-10"
        style={{ padding: "10px" }}
      >
        <div
          ref={skillsRef}
          className="w-full max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center w-full"
            style={{ padding: "10px" }}
          >
            <p className={`${SECTION_LABEL} mb-8 !text-[#F5F0E8]/40`}>
              Core Skills
            </p>
            <h3 className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] md:leading-[1] tracking-tight text-[#F5F0E8] mb-16 md:mb-20">
              WHAT I <span className="text-[#C9A84C]">MASTER</span>
            </h3>

            <div
              style={{ marginTop: "20px" }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-24 max-w-4xl"
            >
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                  className="bg-white/5 border border-white/10 text-[#F5F0E8] font-bold text-xs tracking-[0.2em] uppercase px-6 py-4 md:px-8 md:py-5 rounded-full hover:bg-[#C9A84C] hover:text-[#000000] hover:border-[#C9A84C] transition-all duration-300 cursor-default"
                  style={{ padding: "12px", margin: "8px" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div
              className="w-full max-w-2xl space-y-12 md:space-y-16"
              style={{ padding: "10px", marginTop: "5px" }}
            >
              {skillBars.map((bar, i) => (
                <div key={bar.label} className="w-full">
                  <div className="flex justify-between items-end mb-5">
                    <span className="font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F0E8]/70">
                      {bar.label}
                    </span>
                    <span
                      className="font-mono font-bold text-base text-[#C9A84C]"
                      style={{ padding: "10px", margin: "7px" }}
                    >
                      {bar.pct}%
                    </span>
                  </div>
                  <div
                    className="h-[3px] bg-white/8 rounded-full overflow-hidden w-full relative"
                    style={{ margin: "5px" }}
                  >
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={
                        skillsInView
                          ? { width: `${bar.pct}%` }
                          : { width: "0%" }
                      }
                      transition={{
                        duration: 1.5,
                        delay: 0.4 + i * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C9A84C]/50 to-[#C9A84C] rounded-full"
                      style={{ boxShadow: "0 0 12px rgba(201,168,76,0.5)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
