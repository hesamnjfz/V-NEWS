"use client";

import { breakingHeadlines } from "@/lib/data";

type BreakingTickerProps = {
  className?: string;
  compact?: boolean;
};

export default function BreakingTicker({
  className = "",
  compact = false,
}: BreakingTickerProps) {
  const ticker = [...breakingHeadlines, ...breakingHeadlines];

  return (
    <div
      className={`flex w-full items-stretch overflow-hidden border border-signal/40 bg-ink text-paper ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-2 bg-signal font-ui font-extrabold uppercase text-paper ${
          compact
            ? "px-3 py-2 text-[9px] tracking-[0.2em]"
            : "px-3.5 py-2.5 text-[9px] tracking-[0.22em] sm:px-4 sm:text-[10px] sm:tracking-[0.28em]"
        }`}
      >
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-paper" />
        Breaking
      </div>
      <div className="relative min-w-0 flex-1 overflow-hidden bg-ink/90">
        <div
          className={`ticker-track flex w-max ${
            compact ? "gap-8 py-2 pl-3" : "gap-10 py-2.5 pl-4 sm:gap-12 sm:pl-5"
          }`}
        >
          {ticker.map((line, i) => (
            <span
              key={`${line}-${i}`}
              className={`whitespace-nowrap font-ui font-bold tracking-wide text-paper ${
                compact
                  ? "text-[11px]"
                  : "text-[12px] sm:text-[13px] md:text-sm"
              }`}
            >
              <span className="mr-3 text-signal">●</span>
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
