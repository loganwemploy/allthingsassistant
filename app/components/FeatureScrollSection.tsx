"use client";

import { useEffect, useMemo, useRef } from "react";
import { CTAButton } from "./CTAButton";
import styles from "./FeatureScrollSection.module.css";

const CALENDLY = "https://calendly.com/allthingsassistantllc";

export function FeatureScrollSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const bg = useMemo(
    () =>
      `url("https://images.pexels.com/photos/5716002/pexels-photo-5716002.jpeg?auto=compress&cs=tinysrgb&w=2000")`,
    [],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 1;
        const total = rect.height + viewportH;
        const progress = Math.min(1, Math.max(0, (viewportH - rect.top) / total));

        // Gentle zoom-out + blur-in + fade as user scrolls through.
        const scale = 1.18 - progress * 0.12;
        const blur = progress * 5; // px
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
      style={{ ["--feature-bg" as any]: bg }}
      aria-label="What it feels like with support"
    >
      <div className={styles.frame}>
        <div className={styles.feature} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.card}>
            <h2 className="pinline">
              <span>
                On the <strong>possibility</strong> of ease
              </span>
            </h2>
            <p>
              When your calendar, inbox, and follow‑through are handled with executive
              precision, you stop thinking about logistics and start thinking about
              outcomes.
            </p>
            <p>
              Akilah’s role is to protect your attention, keep commitments moving, and
              make your day feel calm and controlled—without you micromanaging.
            </p>
            <div className={styles.ctaRow}>
              <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
              <a className="navLink" href="/cv">
                Download CV →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

