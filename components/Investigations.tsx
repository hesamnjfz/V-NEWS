"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { investigations } from "@/lib/data";

export default function Investigations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="investigations"
      ref={ref}
      className="section-y relative w-full overflow-hidden bg-ink text-paper"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] rounded-full bg-signal/5 blur-[100px]" />

      <div className="site-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-14 md:mb-20"
        >
          <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-4">
            Special Projects
          </p>
          <h2 className="mb-5 font-display text-[clamp(2.4rem,7vw,4.75rem)] leading-none tracking-[0.04em] sm:mb-6">
            Investigations
          </h2>
          <p className="font-editorial text-lg italic leading-relaxed text-paper/65 sm:text-xl md:text-2xl">
            Deep reporting that takes months — not minutes. Documents, sources,
            and the stories power wants buried.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-9 lg:grid-cols-2 lg:gap-10">
          {investigations.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 * i }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8 lg:p-9">
                  <div className="mb-3.5 flex flex-wrap gap-2.5 sm:mb-4 sm:gap-3">
                    <span
                      className="border border-paper/30 font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-paper/80"
                      style={{ padding: "10px" }}
                    >
                      {item.chapters} chapters
                    </span>
                    <span
                      className="border border-paper/30 font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-paper/80"
                      style={{ padding: "10px" }}
                    >
                      {item.documents}+ documents
                    </span>
                  </div>
                  <h3 className="mb-3 font-editorial text-xl font-semibold leading-snug sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mb-5 max-w-lg font-ui text-sm leading-relaxed text-paper/65 sm:mb-6 md:text-base">
                    {item.dek}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper/15 pt-4">
                    <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/45">
                      {item.time} · {item.readTime}
                    </span>
                    <span className="font-ui text-[11px] font-extrabold uppercase tracking-[0.2em] text-signal transition-transform group-hover:translate-x-1">
                      Open series →
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
