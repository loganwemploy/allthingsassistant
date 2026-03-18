"use client";

import { useEffect, useState } from "react";
import styles from "./CalendarPromoSparkles.module.css";

type Star = {
  left: string;
  top: string;
  scale: number;
  delay: number;
};

const STAR_COUNT = 40;

export function CalendarPromoSparkles() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const next: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      // bias slightly toward upper half of the band
      const y = Math.random() * 65;
      next.push({
        left: `${Math.random() * 100}%`,
        top: `${15 + y}%`,
        scale: 0.55 + Math.random() * 0.7,
        delay: Math.random() * 6,
      });
    }
    setStars(next);
  }, []);

  if (!stars.length) return null;

  return (
    <div className={styles.layer} aria-hidden>
      {stars.map((star, idx) => (
        <svg
          key={idx}
          className={styles.star}
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
            fill="rgba(146,124,103,0.35)"
          />
          <polygon
            points="5,1.4 6,3.6 8.2,3.9 6.6,5.4 7.1,7.6 5,6.4 2.9,7.6 3.4,5.4 1.8,3.9 4,3.6"
            fill="rgba(255,252,248,0.6)"
          />
        </svg>
      ))}
    </div>
  );
}
