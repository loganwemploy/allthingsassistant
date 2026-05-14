"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef } from "react";
import styles from "./FeatureScrollSection.module.css";

export function FeatureScrollSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const bg = useMemo(
    () => `url("/feature-bg.jpg")`,
    [],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const isMobile = window.matchMedia("(max-width: 40rem)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReducedMotion) {
      el.style.setProperty("--bg-scale", "1.1");
      el.style.setProperty("--bg-blur", "0px");
      el.style.setProperty("--bg-opacity", "0.5");
      return;
    }

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const total = rect.height + viewportH;
        const progress = Math.min(1, Math.max(0, (viewportH - rect.top) / total));

        const scale = 1.18 - progress * 0.12;
        const blur = progress * 5;
        const opacity = 1 - progress * 0.55;

        el.style.setProperty("--bg-scale", String(scale));
        el.style.setProperty("--bg-blur", `${blur.toFixed(2)}px`);
        el.style.setProperty("--bg-opacity", String(opacity));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ "--feature-bg": bg } as CSSProperties}
      aria-label="What it feels like with support"
    >
      <div className={styles.frame}>
        <div className={styles.feature} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.card}>
            <p className={styles.eyebrow}>On the Possibility of Support</p>
            <h2 className={`pinline gradient-text-card`}>
              <span>
                Executive support for high-stakes leadership
              </span>
            </h2>
            <p>
              High-profile leadership should not be spent in inbox triage and fragmented
              follow-up. Akilah provides quiet, senior-level execution that keeps every
              moving part aligned so your calendar, communication, and commitments stay
              sharp under pressure.
            </p>
            <p>
              Operate with clarity, confidence, and ease. If you are ready to stop
              managing friction and start leading at your highest level, let&apos;s map your
              priorities and build your support rhythm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
