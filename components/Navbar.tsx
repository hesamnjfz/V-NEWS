"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { brand, navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const goTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const menu =
    menuOpen && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-[#0e1116] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex h-16 shrink-0 items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center bg-[#c8102e] font-display text-2xl text-white">
                  {brand.mark}
                </span>
                <span className="font-display text-xl tracking-[0.1em] text-white">
                  NEWS
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => goTo(link.href)}
                  className="font-display text-3xl tracking-[0.08em] text-white transition-colors hover:text-[#c8102e] sm:text-4xl"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo("#contact")}
                className="mt-2 bg-[#c8102e] px-10 py-3.5 font-ui text-xs font-bold uppercase tracking-[0.25em] text-white"
              >
                Contact
              </button>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] w-full transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0e1116]/95 text-white shadow-lg backdrop-blur-md"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white"
        }`}
      >
        <div className="site-wrap flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] md:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              goTo("#hero");
            }}
            className="flex shrink-0 items-center gap-2 sm:gap-2.5"
            aria-label={brand.name}
          >
            <span className="flex h-9 w-9 items-center justify-center bg-[#c8102e] font-display text-2xl leading-none text-white sm:h-10 sm:w-10 sm:text-3xl">
              {brand.mark}
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-[0.08em] sm:text-xl">
                NEWS
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/55 sm:text-[9px]">
                Network
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-4 xl:gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                }}
                className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white xl:text-[11px] xl:tracking-[0.16em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#live"
              onClick={(e) => {
                e.preventDefault();
                goTo("#live");
              }}
              className="hidden items-center gap-2 border border-[#c8102e]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#c8102e] md:inline-flex"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              Live
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
