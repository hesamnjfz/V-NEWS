"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { bureaus, networkStats, networkValues } from "@/lib/data";
import { images } from "@/lib/images";

export default function Network() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="network"
      ref={ref}
      className="section-y relative w-full overflow-hidden bg-ink text-paper"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,16,46,0.12),_transparent_55%)]" />

      <div className="site-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 sm:gap-10 lg:mb-24 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-6">
            <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-4">
              The Network
            </p>
            <h2 className="font-display text-[clamp(2.4rem,7vw,4.75rem)] leading-none tracking-[0.04em]">
              Built for truth at scale
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:col-span-6">
            <p className="font-editorial text-lg italic leading-relaxed text-paper/70 sm:text-xl md:text-2xl">
              V News Network is an independent news organization spanning
              continents — with one standard: report what happened, explain why
              it matters, and never confuse noise with news.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative mb-12 aspect-[16/10] overflow-hidden sm:mb-16 sm:aspect-[21/10] md:mb-20 md:aspect-[21/9]"
        >
          <Image
            src={images.skyline}
            alt="Global city skyline representing V News Network reach"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <p className="absolute bottom-5 left-5 font-ui text-[10px] font-bold uppercase tracking-[0.28em] text-paper/70 sm:bottom-7 sm:left-7 md:bottom-8 md:left-8">
            From field to screen — every hour
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mb-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-paper/10 py-10 sm:mb-16 sm:gap-x-8 sm:py-12 md:mb-20 md:grid-cols-4 md:gap-8 md:py-14"
        >
          {networkStats.map((stat) => (
            <div key={stat.label} className="px-1 text-center sm:text-left">
              <p className="font-display text-4xl tracking-[0.04em] text-paper sm:text-5xl md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-paper/45 sm:mt-4 sm:text-[10px] sm:tracking-[0.25em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mb-14 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-12 md:mb-20 md:grid-cols-3 md:gap-10 lg:gap-14">
          {networkValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.08 }}
              className="px-0.5"
            >
              <span className="mb-4 block font-display text-4xl text-signal/40 sm:mb-5">
                0{i + 1}
              </span>
              <h3 className="mb-3 font-editorial text-xl font-semibold sm:mb-4 sm:text-2xl">
                {value.title}
              </h3>
              <p className="font-ui text-sm leading-relaxed text-paper/60 md:text-base">
                {value.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.35 }}
        >
          <p className="mb-5 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-paper/40 sm:mb-6">
            Global bureaus
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-8 sm:gap-y-4 md:gap-x-10">
            {bureaus.map((city) => (
              <span
                key={city}
                className="font-editorial text-lg text-paper/85 sm:text-xl md:text-2xl"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
