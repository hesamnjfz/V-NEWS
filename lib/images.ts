/**
 * All site images are local under /public/img.
 * Paths are root-relative so they work with Next static export (out/).
 */
export const images = {
  hero: "/img/hero-city-hq.jpg",
  politics: "/img/politics.jpg",
  markets: "/img/markets.jpg",
  tech: "/img/tech.jpg",
  climate: "/img/climate.jpg",
  diplomacy: "/img/diplomacy.jpg",
  world: "/img/world.jpg",
  crowd: "/img/crowd.jpg",
  policy: "/img/policy.jpg",
  parliament: "/img/parliament.jpg",
  investigate: "/img/investigate.jpg",
  media: "/img/media.jpg",
  studio: "/img/studio.jpg",
  skyline: "/img/skyline.jpg",
  press: "/img/press.jpg",
} as const;

/** Local slides for the hero background rotator (every 10s) */
export const heroBackgrounds = [
  { src: "/img/hero-city-hq.jpg", alt: "New York City skyline at dusk" },
  { src: "/img/hero-nyc.jpg", alt: "Manhattan skyline view" },
  { src: "/img/hero-skyline-hq.jpg", alt: "Urban skyline lights" },
  { src: "/img/skyline.jpg", alt: "City skyline panorama" },
  { src: "/img/hero-city.jpg", alt: "Cityscape at night" },
] as const;
