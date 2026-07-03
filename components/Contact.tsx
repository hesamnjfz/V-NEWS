"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// ==============================
// ANIMATION VARIANTS
// ==============================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const fadeTransition: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" },
  },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.3 } },
};

// ==============================
// COMPONENT
// ==============================

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // شبیه‌سازی درخواست API (در پروژه واقعی اینجا fetch/axios قرار می‌گیرد)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormStatus("success");
    // پاک کردن فرم پس از ارسال موفق
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[600px] h-[70vw] max-h-[600px] bg-[#C9A84C] opacity-[0.03] blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-black text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-[#C9A84C] mb-6"
          style={{ padding: "10PX" }}
        >
          Get In Touch
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 1, ease: "easeInOut" },
            },
          }}
          className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-12 origin-center"
        />

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-display font-black text-[clamp(2.5rem,8vw,7.5rem)] text-[#F5F0E8] leading-[0.9] tracking-tighter mb-8"
          style={{ padding: "10PX" }}
        >
          LET'S{" "}
          <span className="text-[#C9A84C] drop-shadow-[0_0_20px_rgba(201,168,76,0.3)]">
            CREATE
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="font-serif font-medium text-lg md:text-2xl text-[#EDE7D9]/70 max-w-2xl mx-auto leading-relaxed mb-16 md:mb-24 px-4"
        >
          Have a project in mind? Let's build something remarkable together.
        </motion.p>

        {/* Form & Success Message Container */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {formStatus === "success" ? (
              <motion.div
                key="success-message"
                variants={fadeTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-[#C9A84C]/20 py-20 px-8 flex flex-col items-center gap-6 rounded-2xl shadow-[0_0_40px_rgba(201,168,76,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />
                <span className="text-[#C9A84C] text-6xl select-none drop-shadow-[0_0_15px_rgba(201,168,76,0.4)] animate-pulse">
                  ✦
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-[#F5F0E8] tracking-tight">
                  Message Sent!
                </h3>
                <p className="font-sans font-medium text-[#EDE7D9]/60 text-sm md:text-base tracking-widest uppercase text-center">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-[#C9A84C] text-xs tracking-widest uppercase border-b border-transparent hover:border-[#C9A84C] transition-colors pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                variants={fadeTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 text-left w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input - Floating & Animated */}
                  <div className="relative group z-0 w-full">
                    <input
                      type="text"
                      id="user_name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      placeholder=" "
                      className="peer block w-full rounded-xl border border-white/[0.05] bg-gradient-to-br from-white/[0.04] to-transparent px-12 pb-3 pt-8 text-base text-[#F5F0E8] shadow-inner focus:border-[#C9A84C]/50 focus:outline-none focus:ring-0 transition-all duration-300 backdrop-blur-md"
                    />
                    {/* Floating Label */}
                    <label
                      htmlFor="user_name"
                      className="absolute left-12 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white/40 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#C9A84C] cursor-text"
                    >
                      Name
                    </label>
                    {/* Icon */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 peer-focus:text-[#C9A84C] transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    {/* Animated Focus Line */}
                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A84C] transition-all duration-500 peer-focus:w-full rounded-b-xl shadow-[0_0_15px_rgba(201,168,76,0.6)]" />
                  </div>

                  {/* Email Input - Floating & Animated */}
                  <div className="relative group z-0 w-full">
                    <input
                      type="email"
                      id="user_email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      placeholder=" "
                      className="peer block w-full rounded-xl border border-white/[0.05] bg-gradient-to-br from-white/[0.04] to-transparent px-12 pb-3 pt-8 text-base text-[#F5F0E8] shadow-inner focus:border-[#C9A84C]/50 focus:outline-none focus:ring-0 transition-all duration-300 backdrop-blur-md"
                    />
                    <label
                      htmlFor="user_email"
                      className="absolute left-12 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white/40 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#C9A84C] cursor-text"
                    >
                      Email Address
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 peer-focus:text-[#C9A84C] transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A84C] transition-all duration-500 peer-focus:w-full rounded-b-xl shadow-[0_0_15px_rgba(201,168,76,0.6)]" />
                  </div>
                </div>

                {/* Message Textarea - Floating & Animated */}
                <div className="relative group z-0 w-full">
                  <textarea
                    id="user_message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder=" "
                    className="peer block w-full rounded-xl border border-white/[0.05] bg-gradient-to-br from-white/[0.04] to-transparent px-12 pb-4 pt-8 text-base text-[#F5F0E8] shadow-inner focus:border-[#C9A84C]/50 focus:outline-none focus:ring-0 transition-all duration-300 resize-none backdrop-blur-md custom-scrollbar"
                  />
                  <label
                    htmlFor="user_message"
                    className="absolute left-12 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A84C] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white/40 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#C9A84C] cursor-text"
                  >
                    Project Details
                  </label>
                  <div className="absolute left-4 top-7 text-white/20 peer-focus:text-[#C9A84C] transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                  </div>
                  <div className=" absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A84C] transition-all duration-500 peer-focus:w-[99%] rounded-b-xl shadow-[0_0_15px_rgba(201,168,76,0.6)]" />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] text-[#110E0A] font-black text-xs md:text-sm tracking-[0.4em] uppercase py-6 mt-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group rounded-xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                    {formStatus !== "submitting" && (
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    )}
                  </span>
                  {/* Button Hover Inner Glow */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="w-full mt-24 md:mt-32 pt-8 border-t border-[#C9A84C]/10 text-center"
        >
          <p className="font-sans font-bold text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-[#F5F0E8]/30">
            © 2026 Mehrzad Talayifar — All Rights Reserved
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
