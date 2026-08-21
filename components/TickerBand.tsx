"use client";

import {
  breakingHeadlines,
  deskHeadlines,
  wireInterstitials,
  wirePulseBars,
  worldHeadlines,
} from "@/lib/data";

type WireRow = {
  id: string;
  label: string;
  sub: string;
  badge: string;
  headlines: string[];
  speedClass: string;
  interstitialOffset: number;
};

const rows: WireRow[] = [
  {
    id: "breaking",
    label: "BREAKING",
    sub: "V Wire · Live",
    badge: "24/7",
    headlines: breakingHeadlines,
    speedClass: "ticker-band__track",
    interstitialOffset: 0,
  },
  {
    id: "world",
    label: "WORLD",
    sub: "Global Desk",
    badge: "48",
    headlines: worldHeadlines,
    speedClass: "ticker-band__track ticker-band__track--slow",
    interstitialOffset: 4,
  },
  {
    id: "desks",
    label: "DESKS",
    sub: "Bureau Feed",
    badge: "NOW",
    headlines: deskHeadlines,
    speedClass: "ticker-band__track ticker-band__track--mid",
    interstitialOffset: 8,
  },
];

function InterstitialChip({
  text,
  kind,
  isDark,
}: {
  text: string;
  kind: string;
  isDark: boolean;
}) {
  const base =
    "inline-flex shrink-0 items-center whitespace-nowrap border px-2.5 py-1 font-ui text-[9px] font-extrabold uppercase tracking-[0.16em] sm:px-3 sm:text-[10px]";

  if (kind === "tag") {
    return (
      <span className={`${base} border-signal bg-signal text-paper`}>{text}</span>
    );
  }

  if (kind === "stat") {
    return (
      <span
        className={`${base} ${
          isDark
            ? "border-paper/25 bg-paper/10 text-paper"
            : "border-ink/20 bg-ink/5 text-ink"
        }`}
      >
        {text}
      </span>
    );
  }

  if (kind === "desk") {
    return (
      <span
        className={`${base} ${
          isDark
            ? "border-signal/50 text-signal"
            : "border-signal/60 text-signal-deep"
        }`}
      >
        {text}
      </span>
    );
  }

  // time
  return (
    <span
      className={`${base} ${
        isDark
          ? "border-paper/20 text-paper/70"
          : "border-ink/15 text-ink-muted"
      }`}
    >
      {text}
    </span>
  );
}

function PulseBar({
  items,
  isDark,
}: {
  items: readonly { label: string; value: string }[];
  isDark: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-3 sm:justify-between sm:gap-x-6 sm:px-5 md:px-6 ${
        isDark ? "bg-signal text-paper" : "bg-ink text-paper"
      }`}
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8">
        {items.map((item) => (
          <div key={`${item.label}-${item.value}`} className="flex items-baseline gap-2">
            <span className="font-ui text-[8px] font-bold uppercase tracking-[0.22em] text-paper/65 sm:text-[9px]">
              {item.label}
            </span>
            <span className="font-editorial text-[13px] font-medium leading-none sm:text-sm">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <span className="hidden font-ui text-[9px] font-extrabold uppercase tracking-[0.28em] text-paper/80 md:inline">
        Scroll for more →
      </span>
    </div>
  );
}

export default function TickerBand({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={`ticker-band relative w-full overflow-hidden border-y-2 border-signal ${
        isDark ? "ticker-band--dark bg-ink text-paper" : "ticker-band--light bg-paper text-ink"
      }`}
      aria-label="Breaking news wire"
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-[0.07] ${
          isDark ? "ticker-band__stripes-dark" : "ticker-band__stripes-light"
        }`}
        aria-hidden
      />

      <div className="relative flex flex-col">
        {rows.map((row, rowIndex) => {
          const items = [...row.headlines, ...row.headlines];
          const isLast = rowIndex === rows.length - 1;
          const pulse = wirePulseBars[rowIndex];

          return (
            <div key={row.id} className="flex flex-col">
              <div
                className={`relative flex min-h-[3.25rem] items-stretch sm:min-h-[3.75rem] md:min-h-[4.25rem] ${
                  !isLast || pulse
                    ? isDark
                      ? "border-b border-paper/10"
                      : "border-b border-ink/10"
                    : ""
                }`}
              >
                {/* Identity rail */}
                <div className="relative z-10 flex shrink-0 items-stretch">
                  <div className="flex min-w-[7.5rem] items-center bg-signal px-3 sm:min-w-[9rem] sm:px-4 md:min-w-[10rem] md:px-5">
                    <span className="live-dot mr-2 h-2 w-2 shrink-0 rounded-full bg-paper sm:mr-2.5" />
                    <div className="flex flex-col leading-none">
                      <span className="font-display text-[1.35rem] tracking-[0.04em] text-paper sm:text-[1.55rem] md:text-[1.75rem]">
                        {row.label}
                      </span>
                      <span className="mt-0.5 font-ui text-[8px] font-bold uppercase tracking-[0.28em] text-paper/75 sm:text-[9px]">
                        {row.sub}
                      </span>
                    </div>
                  </div>
                  <div
                    className="hidden w-3 shrink-0 bg-signal sm:block"
                    style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                    aria-hidden
                  />
                  <div
                    className={`hidden items-center border-r px-3 font-ui text-[9px] font-extrabold uppercase tracking-[0.22em] sm:flex md:px-4 md:text-[10px] ${
                      isDark
                        ? "border-paper/15 bg-ink text-signal"
                        : "border-ink/10 bg-paper-deep text-signal"
                    }`}
                  >
                    {row.badge}
                  </div>
                </div>

                {/* Marquee */}
                <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
                  <div
                    className={`pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r to-transparent sm:w-12 ${
                      isDark ? "from-ink" : "from-paper"
                    }`}
                    aria-hidden
                  />
                  <div
                    className={`pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l to-transparent sm:w-14 ${
                      isDark ? "from-ink" : "from-paper"
                    }`}
                    aria-hidden
                  />

                  <div className={`${row.speedClass} flex w-max items-center gap-0`}>
                    {items.map((line, i) => {
                      const bit =
                        wireInterstitials[
                          (i + row.interstitialOffset) % wireInterstitials.length
                        ];

                      return (
                        <span
                          key={`${row.id}-${line}-${i}`}
                          className="flex items-center whitespace-nowrap px-3 sm:px-4 md:px-5"
                        >
                          <span
                            className="mr-3 font-display text-lg leading-none text-signal sm:mr-3.5 sm:text-xl"
                            aria-hidden
                          >
                            ◆
                          </span>
                          <span
                            className={`font-editorial text-[0.95rem] font-medium leading-none tracking-[-0.01em] sm:text-[1.05rem] md:text-[1.15rem] ${
                              isDark ? "text-paper" : "text-ink"
                            }`}
                          >
                            {line}
                          </span>
                          <span className="mx-3 inline-flex sm:mx-4">
                            <InterstitialChip
                              kind={bit.kind}
                              text={bit.text}
                              isDark={isDark}
                            />
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* End mark */}
                <div
                  className={`relative z-10 hidden shrink-0 items-center border-l px-3 font-display text-2xl tracking-wide text-signal md:flex md:px-4 ${
                    isDark ? "border-paper/15 bg-ink" : "border-ink/10 bg-paper-deep"
                  }`}
                  aria-hidden
                >
                  V
                </div>
              </div>

              {pulse ? <PulseBar items={pulse.items} isDark={isDark} /> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
