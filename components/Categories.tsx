"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { categorySections } from "@/lib/data";

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const world = categorySections[0];
  const politics = categorySections[1];

  return (
    <section
      id="world"
      ref={ref}
      className="section-y relative w-full bg-paper-deep"
    >
      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <div className="mb-8 flex flex-col gap-4 border-b border-ink/10 pb-7 sm:mb-10 sm:gap-5 sm:pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2.5 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-3">
                {world.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(2.3rem,6vw,4rem)] leading-none tracking-[0.04em] text-ink">
                {world.label}
              </h2>
            </div>
            <p className="max-w-sm font-ui text-sm leading-relaxed text-ink-muted md:text-right">
              {world.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-12">
            <article className="group lg:col-span-7">
              <div className="relative mb-5 aspect-[16/10] overflow-hidden sm:mb-6 sm:aspect-[16/9]">
                <Image
                  src={world.stories[0].image}
                  alt={world.stories[0].imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-0.5">
                <span className="mb-2.5 block font-ui text-[10px] font-extrabold uppercase tracking-[0.22em] text-signal">
                  {world.stories[0].location} · {world.stories[0].time}
                </span>
                <h3 className="mb-3 font-editorial text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:text-2xl md:text-3xl">
                  {world.stories[0].title}
                </h3>
                <p className="font-ui text-sm leading-relaxed text-ink-muted sm:text-base">
                  {world.stories[0].dek}
                </p>
              </div>
            </article>

            <div className="flex flex-col divide-y divide-ink/10 lg:col-span-5 lg:pt-1">
              {world.stories.slice(1).map((story) => (
                <article
                  key={story.id}
                  className="group flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-5 sm:py-7"
                >
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden sm:h-28 sm:w-36 md:h-32 md:w-40">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center py-0.5">
                    <span className="mb-1.5 font-ui text-[9px] font-bold uppercase tracking-[0.2em] text-ink-muted">
                      {story.time}
                    </span>
                    <h3 className="font-editorial text-base font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:text-lg md:text-xl">
                      {story.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          id="politics"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="scroll-mt-28"
        >
          <div className="mb-8 flex flex-col gap-4 border-b border-ink/10 pb-7 sm:mb-10 sm:gap-5 sm:pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2.5 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-3">
                {politics.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(2.3rem,6vw,4rem)] leading-none tracking-[0.04em] text-ink">
                {politics.label}
              </h2>
            </div>
            <p className="max-w-sm font-ui text-sm leading-relaxed text-ink-muted md:text-right">
              {politics.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:gap-12">
            {politics.stories.map((story, i) => (
              <article
                key={story.id}
                className="group grid grid-cols-1 gap-5 sm:grid-cols-5 sm:gap-6"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-[200px] ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center px-0.5 sm:col-span-3 sm:py-2">
                  <span className="mb-2.5 font-ui text-[10px] font-extrabold uppercase tracking-[0.22em] text-signal">
                    {story.author} · {story.readTime}
                  </span>
                  <h3 className="mb-3 font-editorial text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:text-xl md:text-2xl">
                    {story.title}
                  </h3>
                  <p className="font-ui text-sm leading-relaxed text-ink-muted md:text-base">
                    {story.dek}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
