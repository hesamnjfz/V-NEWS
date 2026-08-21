import type { Metadata } from "next";
import { Bebas_Neue, Newsreader, Figtree } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "V News Network — Clarity in a noisy world",
  description:
    "Independent reporting across politics, markets, technology, and culture. Live coverage, investigations, and analysis from V News Network.",
  keywords: [
    "V News Network",
    "news",
    "breaking news",
    "investigations",
    "world news",
    "live TV",
  ],
  openGraph: {
    title: "V News Network",
    description: "Clarity in a noisy world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${newsreader.variable} ${figtree.variable}`}
    >
      <body className="font-ui antialiased">{children}</body>
    </html>
  );
}
