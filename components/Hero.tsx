"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { heroBackgrounds } from "@/lib/images";
import BreakingTicker from "@/components/BreakingTicker";
import { brand, featuredStory, flashAlerts } from "@/lib/data";

export default function Hero() {
  const [clock, setClock] = useState("");
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZoneName: "short",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBgIndex((i) => (i + 1) % heroBackgrounds.length);
    }, 10_000);
    return () => window.clearInterval(id);
  }, []);

  const currentBg = heroBackgrounds[bgIndex];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#0e1116] text-paper"
    >
      {/* Rotating local backgrounds — every 10s */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentBg.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-[-3%]"
              animate={{ scale: [1, 1.05] }}
              transition={{
                duration: 10,
                ease: "linear",
              }}
            >
              <Image
                src={currentBg.src}
                alt={currentBg.alt}
                fill
                priority={bgIndex === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-[center_30%]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_100%)]" />
        <div className="hero-grain absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-signal/20 to-transparent" />
      </div>

      <div
        className="relative z-[1] shrink-0"
        style={{ height: "var(--header-h)" }}
        aria-hidden
      />

      <div className="site-wrap relative z-[1] flex flex-1 flex-col items-center justify-center py-8 text-center sm:py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-3xl flex-col items-center px-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-5 font-ui text-[9px] font-bold uppercase tracking-[0.28em] text-paper/50 sm:mb-6 sm:text-[10px]"
          >
            {clock || "—"}
            <span className="mx-2 text-signal">·</span>
            <span className="text-signal">Edition · Global</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4"
            aria-hidden
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-signal sm:w-12" />
            <span className="h-1.5 w-1.5 rotate-45 bg-signal" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-signal sm:w-12" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.65 }}
            className="font-display text-[clamp(5rem,20vw,11rem)] leading-none tracking-[0.02em]"
          >
            <span className="text-signal drop-shadow-[0_0_40px_rgba(200,16,46,0.35)]">
              {brand.mark}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-3 flex flex-col items-center gap-1.5 sm:mt-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="font-display text-[clamp(1.5rem,5.5vw,3rem)] leading-none tracking-[0.22em]">
              NEWS
            </span>
            <span className="hidden h-5 w-px bg-signal/80 sm:block" />
            <span className="font-ui text-[10px] font-extrabold uppercase tracking-[0.42em] text-signal sm:text-xs">
              Network
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4"
            aria-hidden
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-paper/35 sm:w-14" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-paper/35 sm:w-14" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-6 max-w-md font-editorial text-lg italic leading-relaxed text-paper/95 sm:mt-7 sm:text-xl md:text-2xl"
          >
            {brand.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-9 sm:max-w-md sm:flex-row sm:justify-center sm:gap-4"
          >
            <a
              href="#top-stories"
              className="inline-flex items-center justify-center bg-signal px-8 py-3.5 font-ui text-[11px] font-extrabold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal-deep sm:px-9 sm:py-4"
            >
              Top Stories
            </a>
            <a
              href="#live"
              className="inline-flex items-center justify-center gap-2 border border-paper/40 bg-black/30 px-8 py-3.5 font-ui text-[11px] font-extrabold uppercase tracking-[0.2em] text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-black/50 sm:px-9 sm:py-4"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
              Watch Live
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-y border-white/15 py-3.5 sm:mt-10 sm:gap-x-8 sm:py-4"
          >
            {[
              ["2.4M", "readers"],
              ["48", "bureaus"],
              ["24/7", "live"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-display text-xl tracking-wide text-paper sm:text-2xl md:text-3xl">
                  {value}
                </span>
                <span className="font-ui text-[8px] font-bold uppercase tracking-[0.18em] text-paper/50 sm:text-[9px]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-[1] shrink-0 pb-0">
        <div className="site-wrap pb-5 sm:pb-6 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.75 }}
            className="mx-auto grid max-w-5xl gap-3 lg:grid-cols-[1.45fr_1fr] lg:gap-4"
          >
            <a
              href="#top-stories"
              className="group border border-white/15 bg-black/60 p-5 backdrop-blur-md transition-colors hover:border-signal/50 sm:p-6 md:p-7"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2.5 sm:mb-4">
                <span className="bg-signal px-2.5 py-1 font-ui text-[9px] font-extrabold uppercase tracking-[0.2em] text-paper">
                  Lead
                </span>
                <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/55">
                  {featuredStory.category} · {featuredStory.time}
                </span>
              </div>
              <p className="text-left font-display text-[clamp(1.65rem,4.2vw,2.75rem)] font-normal leading-[1.05] tracking-[0.02em] text-paper transition-colors group-hover:text-signal">
                {featuredStory.title}
              </p>
            </a>

            <div className="flex flex-col gap-3">
              {flashAlerts.slice(0, 2).map((alert, i) => (
                <a
                  key={alert.id}
                  href="#top-stories"
                  className="group relative flex min-h-[5.5rem] overflow-hidden border border-white/10 bg-gradient-to-r from-signal/25 via-black/70 to-black/50 transition-all hover:border-signal hover:from-signal/40 hover:shadow-[0_0_28px_rgba(200,16,46,0.25)] sm:min-h-[6.25rem]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-signal" />
                  <div className="flex w-full items-stretch gap-3 px-4 py-4 pl-5 sm:gap-4 sm:px-5 sm:py-5 sm:pl-6">
                    <span className="font-display text-3xl leading-none text-signal/50 transition-colors group-hover:text-signal sm:text-4xl" style={{ padding: "10px" }}>
                      0{i + 1}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="bg-signal px-2 py-0.5 font-ui text-[9px] font-extrabold uppercase tracking-[0.18em] text-paper">
                          {alert.tag}
                        </span>
                        <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.14em] text-paper/45">
                          {alert.time}
                        </span>
                      </div>
                      <span className="font-display text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug tracking-[0.01em] text-paper transition-colors group-hover:text-signal">
                        {alert.text}
                      </span>
                    </div>
                    <span className="hidden shrink-0 self-center font-ui text-xs font-bold text-signal opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:block">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-full border-t border-signal/30 bg-black/85">
          <BreakingTicker />
        </div>
      </div>
    </section>
  );
}
