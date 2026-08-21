"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="section-y relative w-full overflow-hidden bg-paper-deep"
    >
      <div className="site-wrap">
        <div className="mx-auto max-w-[820px] px-1 text-center sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-ui text-[10px] font-extrabold uppercase tracking-[0.35em] text-signal sm:mb-4">
              The Briefing
            </p>
            <h2 className="mb-5 font-display text-[clamp(2.2rem,6vw,4rem)] leading-none tracking-[0.04em] text-ink sm:mb-6">
              Start every morning informed
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-editorial text-base italic leading-relaxed text-ink-muted sm:mb-12 sm:text-lg md:text-xl">
              One curated email. The stories that matter, the context you need —
              no fluff, no filler.
            </p>

            <AnimatePresence mode="wait">
              {status === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border border-ink/10 bg-paper px-6 py-10 sm:px-10 sm:py-12"
                >
                  <p className="font-editorial text-xl font-semibold text-ink sm:text-2xl">
                    You&apos;re on the list.
                  </p>
                  <p className="mt-3 font-ui text-sm text-ink-muted">
                    Check your inbox for a confirmation from V News Network.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-signal"
                  >
                    Subscribe another address
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-3.5"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="min-h-[52px] flex-1 border border-ink/15 bg-paper px-5 py-4 font-ui text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-signal"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="min-h-[52px] bg-signal px-8 py-4 font-ui text-[11px] font-extrabold uppercase tracking-[0.22em] text-paper transition-colors hover:bg-signal-deep disabled:opacity-60 sm:shrink-0"
                  >
                    {status === "loading" ? "Sending…" : "Subscribe"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
