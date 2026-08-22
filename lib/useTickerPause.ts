"use client";

import { useEffect, useRef } from "react";

/** Pause marquee CSS animations when off-screen or tab is hidden. */
export function useTickerPause<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const tracks = () =>
      root.querySelectorAll<HTMLElement>(".ticker-track, .ticker-band__track");

    const setPaused = (paused: boolean) => {
      tracks().forEach((track) => {
        track.classList.toggle("ticker-paused", paused);
      });
    };

    const checkInView = () => {
      const rect = root.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const sync = () => {
      setPaused(document.hidden || !checkInView());
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPaused(document.hidden || !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "32px" },
    );

    observer.observe(root);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("scroll", sync, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("scroll", sync);
    };
  }, []);

  return ref;
}
