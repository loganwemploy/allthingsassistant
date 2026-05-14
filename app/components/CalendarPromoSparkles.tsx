"use client";

import { useMemo } from "react";
import styles from "./CalendarPromoSparkles.module.css";

type Star = {
  left: string;
  top: string;
  scale: number;
  delay: number;
};

const STAR_COUNT = 40;

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function CalendarPromoSparkles() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(0x415441); // "ATA" seed; deterministic
    const next: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const y = rand() * 65;
      next.push({
        left: `${rand() * 100}%`,
        top: `${15 + y}%`,
        scale: 0.55 + rand() * 0.7,
        delay: rand() * 6,
      });
    }
    return next;
  }, []);

  return (
    <div className={styles.layer} aria-hidden>
      {stars.map((star, idx) => (
        <svg
          key={idx}
          className={`${styles.star} ${reducedMotion ? styles.starStatic : ""}`}
          viewBox="0 0 10 10"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: `${star.delay}s`,
            transform: `scale(${star.scale})`,
          }}
        >
          <polygon
            points="5,0 6.6,3.4 10,3.8 7.5,6.1 8.2,9.5 5,7.8 1.8,9.5 2.5,6.1 0,3.8 3.4,3.4"
            fill="rgba(63, 90, 58, 0.4)"
          />
          <polygon
            points="5,1.4 6,3.6 8.2,3.9 6.6,5.4 7.1,7.6 5,6.4 2.9,7.6 3.4,5.4 1.8,3.9 4,3.6"
            fill="rgba(255,255,255,0.9)"
          />
        </svg>
      ))}
    </div>
  );
}
