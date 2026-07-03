"use client";

import { motion, type Variants } from "framer-motion";

// ==============================
// TYPES & DATA
// ==============================

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "100M+", label: "Requests Handled" },
  { value: "99.99%", label: "System Uptime" },
  { value: "O(1)", label: "Algorithm Efficiency" },
];

const services: Service[] = [
  {
    number: "01",
    title: "Front-End Architecture",
    description:
      "Crafting fluid, responsive, and accessible user interfaces. I engineer highly interactive web applications using modern frameworks, ensuring pixel-perfect layouts, state-of-the-art performance, and exceptional Core Web Vitals.",
    features: [
      "Next.js & React",
      "TypeScript",
      "Framer Motion",
      "WebGL / Three.js",
    ],
  },
  {
    number: "02",
    title: "Back-End & APIs",
    description:
      "Building robust, scalable, and secure server-side architectures. From RESTful and GraphQL APIs to complex microservices, I ensure optimal data flow, security, and algorithmic efficiency for enterprise-level demands.",
    features: ["Node.js & NestJS", "Go / Python", "GraphQL", "Microservices"],
  },
  {
    number: "03",
    title: "Database Engineering",
    description:
      "Designing resilient data models and optimizing complex queries. I focus on reducing latency and achieving $O(\\log n)$ or even $O(1)$ time complexity in data retrieval, ensuring your application scales effortlessly.",
    features: ["PostgreSQL", "MongoDB", "Redis", "Prisma / ORMs"],
  },
  {
    number: "04",
    title: "UI/UX & Design Systems",
    description:
      "Bridging the gap between aesthetics and usability. I develop comprehensive design systems and intuitive user flows that not only look breathtaking but also drive conversions and maximize user retention.",
    features: ["Figma", "Tailwind CSS", "Storybook", "Accessibility (a11y)"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Automating deployments and managing cloud infrastructure. I implement robust CI/CD pipelines and containerized environments to ensure zero-downtime deployments and highly available systems.",
    features: ["AWS / Vercel", "Docker", "CI/CD Pipelines", "Linux"],
  },
  {
    number: "06",
    title: "AI & LLM Integration",
    description:
      "Empowering applications with cutting-edge artificial intelligence. I integrate Large Language Models (LLMs) and build RAG (Retrieval-Augmented Generation) pipelines to create smart, context-aware digital products.",
    features: [
      "OpenAI API",
      "LangChain",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
];

// ==============================
// ANIMATION VARIANTS
// ==============================

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const SECTION_LABEL =
  "font-sans font-black text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#C9A84C]";

// ==============================
// COMPONENT
// ==============================

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative flex flex-col items-center w-full bg-[#000000] text-[#F5F0E8] overflow-hidden selection:bg-[#C9A84C] selection:text-white py-24 md:py-32 lg:py-48"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* نور طلایی بالا سمت راست */}
        <div className="absolute -top-[10%] -right-[20%] w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] rounded-full bg-[#C9A84C]/5 blur-[100px] md:blur-[150px]" />

        {/* نور طلایی وسط سمت چپ */}
        <div className="absolute top-[40%] -left-[20%] w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px]" />

        {/* نور سفید پایین سمت راست کاملاً حذف شد تا پس‌زمینه سیاه بماند */}
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 relative z-10 flex flex-col items-center">
        {/* ==================== HEADER ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center w-full mb-16 md:mb-24 lg:mb-32"
        >
          <p
            className={`${SECTION_LABEL} mb-6 md:mb-8 !text-[#F5F0E8]/50`}
            style={{ padding: "10px", margin: "7px" }}
          >
            Comprehensive Capabilities
          </p>
          <h2
            className="font-display font-black text-[clamp(2.5rem,6vw,6rem)] leading-[1.1] md:leading-[1] tracking-tight mb-8 max-w-4xl mx-auto"
            style={{ paddingBottom: "10px" }}
          >
            ENGINEERING EXCELLENCE <br className="hidden md:block" />
            <span className="text-[#C9A84C]">BEYOND THE SURFACE</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
          />
        </motion.div>

        {/* ==================== STATS METRICS ==================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mb-24 md:mb-32"
          style={{ padding: "10px", margin: "7px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex flex-col items-center text-center border-l border-white/10 first:border-l-0"
            >
              <span className="font-display font-black text-3xl md:text-5xl text-white mb-2">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-widest text-[#C9A84C] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ==================== CARDS GRID ==================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full"
          style={{ marginBottom: "5px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeUp}
              className="group relative flex flex-col bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 md:p-10 lg:p-12 rounded-[2rem] hover:bg-white/[0.04] hover:border-[#C9A84C]/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{ padding: "20px", margin: "10px" }}
            >
              {/* Dynamic Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Row: Number & Icon/Decoration */}
              <div className="flex justify-between items-start mb-8">
                <div className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white/5 group-hover:text-[#C9A84C]/20 transition-colors duration-500 leading-none">
                  {service.number}
                </div>
                <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#C9A84C] transition-colors duration-500 shadow-[0_0_15px_rgba(201,168,76,0)] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.5)]" />
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4 leading-tight group-hover:text-[#F5F0E8] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-[#F5F0E8]/60 group-hover:text-[#F5F0E8]/80 leading-relaxed mb-10 flex-grow transition-colors duration-300 text-justify">
                {service.description}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto relative z-10">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="font-sans font-semibold text-[9px] md:text-[10px] tracking-[0.1em] px-3 py-1.5 md:px-4 md:py-2 bg-black/30 border border-white/5 rounded-full text-[#F5F0E8]/70 group-hover:border-[#C9A84C]/40 group-hover:text-[#C9A84C] group-hover:bg-[#C9A84C]/5 transition-all duration-300"
                    style={{ padding: "5px", marginTop: "5px" }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ==================== BOTTOM CTA / CONCLUSION ==================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ marginBottom: "40px" }}
          className="mt-20 md:mt-32 flex flex-col items-center text-center"
        >
          <p
            className="text-white/60 text-sm md:text-base max-w-2xl mb-8"
            style={{ padding: "30px" }}
          >
            Ready to transform your vision into a high-performance digital
            reality? Let's discuss your project architecture.
          </p>
          <button
            style={{ padding: "20px", marginBottom: "20" }}
            className="relative overflow-hidden group bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            <span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 uppercase tracking-widest text-xs md:text-sm">
              Start a Project
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
