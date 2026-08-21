"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { livePrograms } from "@/lib/data";
import { images } from "@/lib/images";

export default function LiveBroadcast() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="live" ref={ref} className="section-y relative w-full bg-paper">
      <div className="site-wrap">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="mb-5 inline-flex items-center gap-2 bg-signal px-3.5 py-2 font-ui text-[10px] font-extrabold uppercase tracking-[0.25em] text-paper sm:mb-6">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-paper" />
              On air
            </div>
            <h2 className="mb-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none tracking-[0.04em] text-ink sm:mb-6">
              Watch V Live
            </h2>
            <p className="mb-8 max-w-md font-editorial text-base italic leading-relaxed text-ink-muted sm:mb-10 sm:text-lg md:text-xl">
              Continuous coverage from our studios and field teams — mornings,
              markets, and the world after dark.
            </p>

            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {livePrograms.map((show) => (
                <li
                  key={show.id}
                  className="flex items-start justify-between gap-4 py-5 sm:gap-6 sm:py-6"
                >
                  <div className="min-w-0 pr-2">
                    <p className="font-editorial text-lg font-semibold text-ink sm:text-xl">
                      {show.title}
                    </p>
                    <p className="mt-1.5 font-ui text-xs text-ink-muted sm:mt-2">
                      {show.hosts}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      {show.time}
                    </p>
                    <p
                      className={`mt-1.5 font-ui text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                        show.status === "On air"
                          ? "text-signal"
                          : "text-ink-muted"
                      }`}
                    >
                      {show.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative order-1 lg:order-2 lg:col-span-7"
          >
            <div className="relative aspect-video overflow-hidden bg-ink">
              <Image
                src={images.studio}
                alt="V News live studio broadcast"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 bg-signal px-5 py-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.2em] text-paper transition-transform hover:scale-105 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.22em]"
                aria-label="Play live stream"
              >
                <span className="flex h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-paper" />
                Watch Now
              </button>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5 md:p-6">
                <div className="min-w-0" style={{ padding: "10px" }}>
                  <p className="font-ui text-[9px] font-bold uppercase tracking-[0.22em] text-signal sm:text-[10px] sm:tracking-[0.25em]">
                    Live · Studio A
                  </p>
                  <p className="mt-1 font-editorial text-base text-paper sm:mt-1.5 sm:text-lg md:text-xl">
                    V Morning Brief
                  </p>
                </div>
                <span
                  className="hidden shrink-0 font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/50 sm:block"
                  style={{ padding: "10px" }}
                >
                  HD · Multilingual
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
