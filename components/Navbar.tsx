"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { brand, navLinks } from "@/lib/data";

const menuEase = [0.22, 1, 0.36, 1] as const;

function MenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-11 w-11 items-center justify-center lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="relative block h-[14px] w-[22px]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-0 block h-[2.2px] w-full origin-center rounded-full bg-current"
            initial={false}
            animate={
              open
                ? i === 0
                  ? { top: 6, rotate: 45, opacity: 1 }
                  : i === 1
                    ? { top: 6, rotate: 0, opacity: 0, scaleX: 0.4 }
                    : { top: 6, rotate: -45, opacity: 1 }
                : { top: i * 6, rotate: 0, opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.26, ease: menuEase }}
          />
        ))}
      </span>
    </button>
  );
}

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const goTo = (href: string, waitForMenu = false) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const scroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (waitForMenu) window.setTimeout(scroll, 280);
    else scroll();
  };

  const menu =
    mounted &&
    createPortal(
      <AnimatePresence mode="wait">
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: menuEase }}
              className="fixed inset-0 z-[99] bg-black/70 lg:hidden"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: menuEase }}
              className="fixed inset-y-0 right-0 z-[100] flex w-[min(100%,340px)] flex-col border-l border-white/10 bg-[#0e1116] shadow-[-12px_0_40px_rgba(0,0,0,0.45)] lg:hidden"
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 sm:h-[4.5rem]">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center bg-[#c8102e] font-display text-2xl text-white">
                    {brand.mark}
                  </span>
                  <span className="font-display text-xl tracking-[0.1em] text-white">
                    NEWS
                  </span>
                </div>
                <MenuToggle open onClick={() => setMenuOpen(false)} />
              </div>

              <div className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-10">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.26,
                      delay: 0.06 + i * 0.045,
                      ease: menuEase,
                    }}
                    onClick={() => goTo(link.href, true)}
                    className="group flex items-center justify-between border-b border-white/8 py-4 text-left"
                  >
                    <span className="font-display text-[1.65rem] tracking-[0.08em] text-white transition-colors group-hover:text-[#c8102e] sm:text-[1.85rem]">
                      {link.label}
                    </span>
                    <span className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#c8102e]">
                      →
                    </span>
                  </motion.button>
                ))}

                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.26, delay: 0.34, ease: menuEase }}
                  onClick={() => goTo("#contact", true)}
                  className="mt-6 bg-[#c8102e] px-10 py-3.5 font-ui text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#9a0c22]"
                >
                  Contact
                </motion.button>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.38, duration: 0.22 }}
                className="shrink-0 border-t border-white/10 px-6 py-4 font-ui text-[9px] font-bold uppercase tracking-[0.28em] text-white/40"
              >
                V News Network · Live worldwide
              </motion.p>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] w-full transition-[background-color,box-shadow] duration-200 ${
          scrolled || menuOpen
            ? "bg-[#0e1116]/97 text-white shadow-lg"
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

          <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
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
              className="hidden items-center gap-2 border border-[#c8102e]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c8102e] md:inline-flex"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              Live
            </a>

            <MenuToggle open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
