"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trendingTopics } from "@/lib/data";

export default function Trending() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="trending"
      ref={ref}
      className="relative w-full border-y border-signal/30 bg-black py-8 text-paper sm:py-10 md:py-12"
    >
      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left"
        >
          <p className="shrink-0 font-ui text-[10px] font-extrabold uppercase tracking-[0.3em] text-signal">
            Trending Now
          </p>
          <div className="hidden h-6 w-px shrink-0 bg-signal/50 md:block" />
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-2.5">
            {trendingTopics.map((topic, i) => (
              <motion.a
                key={topic}
                href="#top-stories"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.04 * i }}
                className="border border-signal/40 bg-signal/15 font-ui text-[10px] font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-signal hover:bg-signal sm:text-[11px]"
                style={{ padding: "10px" }}
              >
                {topic}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
