"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { opinionPieces } from "@/lib/data";

export default function Voices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="voices"
      ref={ref}
      className="section-y relative w-full overflow-hidden bg-paper"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-signal sm:w-2" />

      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-12 md:mb-16 md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal">
              Opinion
            </p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.25rem)] leading-none tracking-[0.04em] text-ink">
              Voices
            </h2>
          </div>
          <p className="max-w-md font-editorial text-base italic text-ink-muted sm:text-lg md:text-right">
            Analysis and argument from V News editors — not noise, not spin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          {opinionPieces.map((piece, i) => (
            <motion.article
              key={piece.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 * i }}
              className="group flex flex-col border-t-4 border-signal bg-paper-deep/60 px-6 py-8 sm:px-7 sm:py-9"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-signal font-display text-lg text-paper">
                  {piece.author.charAt(0)}
                </span>
                <div>
                  <p className="font-ui text-sm font-bold text-ink">
                    {piece.author}
                  </p>
                  <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-signal">
                    {piece.role}
                  </p>
                </div>
              </div>
              <h3 className="mb-4 font-editorial text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:text-[1.35rem]">
                {piece.title}
              </h3>
              <p className="mb-6 flex-1 font-ui text-sm leading-relaxed text-ink-muted">
                {piece.excerpt}
              </p>
              <span className="font-ui text-[11px] font-extrabold uppercase tracking-[0.2em] text-signal">
                Read column →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
