"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-y relative w-full overflow-hidden bg-ink text-paper"
    >
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-signal/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-signal/10 blur-[90px]" />

      <div className="site-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16"
        >
          <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal">
            Get in touch
          </p>
          <h2 className="mb-5 font-display text-[clamp(2.4rem,6vw,4.25rem)] leading-none tracking-[0.04em]">
            Contact V News
          </h2>
          <p className="font-editorial text-lg italic text-paper/65 sm:text-xl">
            Tips, partnerships, press — reach the network directly.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          <motion.a
            href={`mailto:${brand.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col items-center border border-signal/30 bg-signal/10 px-6 py-10 text-center transition-colors hover:border-signal hover:bg-signal/20 sm:px-8 sm:py-12"
          >
            <span className="mb-4 font-ui text-[10px] font-extrabold uppercase tracking-[0.3em] text-signal">
              Email
            </span>
            <span className="break-all font-editorial text-lg font-semibold text-paper transition-colors group-hover:text-signal sm:text-xl md:text-2xl">
              {brand.email}
            </span>
            <span className="mt-6 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50 group-hover:text-paper/80">
              Send message →
            </span>
          </motion.a>

          <motion.a
            href={brand.telegram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="group flex flex-col items-center border border-signal/30 bg-signal/10 px-6 py-10 text-center transition-colors hover:border-signal hover:bg-signal/20 sm:px-8 sm:py-12"
          >
            <span className="mb-4 font-ui text-[10px] font-extrabold uppercase tracking-[0.3em] text-signal">
              Telegram
            </span>
            <span className="font-editorial text-lg font-semibold text-paper transition-colors group-hover:text-signal sm:text-xl md:text-2xl">
              {brand.telegramHandle}
            </span>
            <span className="mt-6 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50 group-hover:text-paper/80">
              Open chat →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
