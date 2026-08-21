"use client";

import { brand, footerColumns, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-signal/25 bg-ink text-paper">
      <div className="h-1 w-full bg-signal" />
      <div className="site-wrap py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-12 grid grid-cols-1 gap-12 sm:mb-14 sm:gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-11 w-11 items-center justify-center bg-signal font-display text-3xl leading-none text-paper">
                {brand.mark}
              </span>
              <div className="leading-none">
                <p className="font-display text-2xl tracking-[0.1em]">NEWS</p>
                <p className="font-ui text-[9px] font-bold uppercase tracking-[0.35em] text-paper/45">
                  Network
                </p>
              </div>
            </div>
            <p className="mb-5 max-w-sm font-editorial text-lg italic text-paper/55 sm:mb-6">
              {brand.tagline}
            </p>
            <p className="mb-6 max-w-sm font-ui text-sm leading-relaxed text-paper/40">
              {brand.description}
            </p>
            <div className="space-y-2.5">
              <a
                href={`mailto:${brand.email}`}
                className="block break-all font-ui text-sm text-signal transition-colors hover:text-signal-soft"
              >
                {brand.email}
              </a>
              <a
                href={brand.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-ui text-sm text-signal transition-colors hover:text-signal-soft"
              >
                Telegram {brand.telegramHandle}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:col-span-5 lg:col-start-6">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 font-ui text-[10px] font-extrabold uppercase tracking-[0.28em] text-signal/70 sm:mb-5">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-ui text-sm text-paper/70 transition-colors hover:text-signal"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2 lg:col-start-11">
            <p className="mb-4 font-ui text-[10px] font-extrabold uppercase tracking-[0.28em] text-signal/70 sm:mb-5">
              Connect
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-3 sm:flex-col sm:gap-0 sm:space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-ui text-sm text-paper/70 transition-colors hover:text-signal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-paper/10 pt-8 text-center sm:gap-6 md:flex-row md:items-center md:text-left md:pt-10">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/35 sm:tracking-[0.22em]">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/35 md:justify-end">
            <a href="#" className="hover:text-signal">
              Privacy
            </a>
            <a href="#" className="hover:text-signal">
              Terms
            </a>
            <a href="#" className="hover:text-signal">
              Cookies
            </a>
            <a href="#" className="hover:text-signal">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
