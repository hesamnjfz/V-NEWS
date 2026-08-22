"use client";

import { breakingHeadlines } from "@/lib/data";
import { useTickerPause } from "@/lib/useTickerPause";

type BreakingTickerProps = {
  className?: string;
  compact?: boolean;
};

export default function BreakingTicker({
  className = "",
  compact = false,
}: BreakingTickerProps) {
  const rootRef = useTickerPause<HTMLDivElement>();
  const items = [...breakingHeadlines, ...breakingHeadlines];

  return (
    <div
      ref={rootRef}
      className={`flex w-full min-h-[2.75rem] items-stretch overflow-hidden border border-signal/40 bg-ink text-paper sm:min-h-[3.25rem] ${
        compact ? "" : "md:min-h-[3.5rem]"
      } ${className}`}
      aria-label="Breaking news ticker"
    >
      {/* Label rail */}
      <div
        className={`flex shrink-0 items-center gap-2 bg-signal font-ui font-extrabold uppercase text-paper ${
          compact
            ? "px-3 text-[9px] tracking-[0.2em]"
            : "px-3.5 text-[9px] tracking-[0.22em] sm:px-4 sm:text-[10px] sm:tracking-[0.28em]"
        }`}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-paper" />
        Breaking
      </div>

      {/* Marquee */}
      <div className="ticker-viewport relative flex min-w-0 flex-1 items-center overflow-hidden bg-ink/90">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-6 bg-gradient-to-r from-ink/90 to-transparent sm:w-10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-6 bg-gradient-to-l from-ink/90 to-transparent sm:w-10"
          aria-hidden
        />

        <div
          className={`ticker-track flex w-max items-center ${
            compact ? "gap-8 pl-3" : "gap-10 pl-4 sm:gap-12 sm:pl-5"
          }`}
        >
          {items.map((line, i) => (
            <span
              key={`${line}-${i}`}
              className={`flex items-center whitespace-nowrap font-ui font-bold tracking-wide text-paper ${
                compact
                  ? "text-[11px]"
                  : "text-[12px] sm:text-[13px] md:text-sm"
              }`}
            >
              <span className="mr-3 text-signal" aria-hidden>
                ●
              </span>
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
