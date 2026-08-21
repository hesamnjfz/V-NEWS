import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F5F1",
          deep: "#EBE7DF",
        },
        ink: {
          DEFAULT: "#0E1116",
          soft: "#2A303A",
          muted: "#6A7380",
        },
        signal: {
          DEFAULT: "#C8102E",
          deep: "#9A0C22",
        },
        steel: "#3D4654",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        editorial: ["var(--font-newsreader)", "Georgia", "serif"],
        ui: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
