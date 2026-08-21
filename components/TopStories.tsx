"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { featuredStory, topStories } from "@/lib/data";

export default function TopStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="top-stories"
      ref={ref}
      className="section-y relative w-full bg-paper"
    >
      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-center gap-5 border-b-2 border-signal/25 pb-8 text-center sm:mb-12 sm:gap-6 md:mb-16 md:flex-row md:items-end md:justify-between md:pb-10 md:text-left"
        >
          <div className="pr-2">
            <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-4">
              The Desk
            </p>
            <h2 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-none tracking-[0.04em] text-ink">
              Top Stories
            </h2>
          </div>
          <p className="max-w-md font-editorial text-base italic leading-relaxed text-ink-muted sm:text-lg md:text-right md:text-xl">
            Essential reporting, verified and prioritized by our editors.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group mb-12 grid grid-cols-1 gap-7 sm:mb-14 sm:gap-8 lg:mb-20 lg:grid-cols-12 lg:gap-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[440px]">
            <Image
              src={featuredStory.image}
              alt={featuredStory.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 bg-signal px-2.5 py-1.5 font-ui text-[9px] font-extrabold uppercase tracking-[0.2em] text-paper sm:left-5 sm:top-5">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-paper" />
              Breaking
            </div>
          </div>

          <div className="flex flex-col justify-center px-0.5 sm:px-1 lg:col-span-5 lg:py-4 lg:pl-2">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:mb-5 sm:tracking-[0.22em]">
              <span className="text-signal">{featuredStory.category}</span>
              <span className="hidden h-3 w-px bg-ink/15 sm:block" />
              <span>{featuredStory.location}</span>
              <span className="hidden h-3 w-px bg-ink/15 sm:block" />
              <span>{featuredStory.time}</span>
            </div>
            <h3 className="mb-4 font-editorial text-[clamp(1.55rem,4vw,2.75rem)] font-semibold leading-[1.18] text-ink transition-colors group-hover:text-signal sm:mb-5">
              {featuredStory.title}
            </h3>
            <p className="mb-7 max-w-lg font-ui text-[0.95rem] leading-relaxed text-ink-soft/80 sm:mb-8 sm:text-base md:text-lg">
              {featuredStory.dek}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5">
              <span className="font-ui text-xs font-semibold text-ink-muted">
                By {featuredStory.author} · {featuredStory.readTime}
              </span>
              <span className="font-ui text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink transition-transform group-hover:translate-x-1">
                Read →
              </span>
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          {topStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.08 }}
              className="group flex flex-col"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden sm:mb-6">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mb-2.5 font-ui text-[10px] font-extrabold uppercase tracking-[0.25em] text-signal">
                {story.category}
              </span>
              <h3 className="mb-3 font-editorial text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:text-[1.35rem]">
                {story.title}
              </h3>
              <p className="mb-5 flex-1 font-ui text-sm leading-relaxed text-ink-muted sm:mb-6">
                {story.dek}
              </p>
              <div className="flex items-center justify-between border-t border-ink/10 pt-4 font-ui text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
                <span>{story.time}</span>
                <span>{story.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
