"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // مدیریت اسکرول برای تغییر استایل هدر
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // هندلر حرفه‌ای برای اسکرول نرم و بستن منو
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // بستن منوی موبایل پس از شروع اسکرول
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F0E8]/90 backdrop-blur-md shadow-sm border-b border-[#C9A84C]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleScrollToSection(e, "#home")}
          className="font-display font-black text-lg md:text-xl tracking-[0.2em] text-[#1A1610] uppercase select-none group"
          style={{ paddingLeft: "10px" }}
        >
          <span className="text-[#C9A84C] inline-block transition-transform duration-300 group-hover:scale-110">
            M
          </span>
          EHRZAD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="relative font-sans font-black text-xs tracking-[0.3em] uppercase text-[#3D3528] hover:text-[#C9A84C] transition-colors duration-300 group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A84C] group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          onClick={(e) => handleScrollToSection(e, "#contact")}
          className="hidden md:inline-flex items-center justify-center bg-[#1A1610] text-[#F5F0E8] font-black text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-[#C9A84C] hover:text-[#1A1610] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
          style={{
            padding: "4px",
          }}
        >
          Hire Me
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-end focus:outline-none z-50"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{ paddingRight: "8px" }}
        >
          <span
            className={`block h-[2px] bg-[#1A1610] transition-all duration-300 origin-right ${
              menuOpen ? "w-6 -rotate-45 -translate-y-[1px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-[#1A1610] transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-5"
            }`}
          />
          <span
            className={`block h-[2px] bg-[#1A1610] transition-all duration-300 origin-right ${
              menuOpen ? "w-6 rotate-45 translate-y-[1px]" : "w-4"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full overflow-hidden bg-[#F5F0E8]/98 backdrop-blur-xl border-t border-[#C9A84C]/20 shadow-xl"
          >
            <div className="flex flex-col items-center justify-center gap-8 h-[calc(100vh-80px)] px-8 pb-20">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="font-display font-black text-3xl tracking-widest uppercase text-[#1A1610] hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="bg-[#1A1610] text-[#F5F0E8] font-black text-sm tracking-[0.3em] uppercase px-12 py-4 hover:bg-[#C9A84C] hover:text-[#1A1610] transition-all duration-300 rounded-sm"
                  style={{ padding: "8px" }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
