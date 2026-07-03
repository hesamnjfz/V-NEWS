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
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#EDE7D9",
          deeper: "#E4DCC8",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          dark: "#A07830",
        },
        ink: {
          DEFAULT: "#1A1610",
          soft: "#3D3528",
          muted: "#6B5F4A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontWeight: {
        black: "900",
      },
    },
  },
  plugins: [],
};

export default config;
