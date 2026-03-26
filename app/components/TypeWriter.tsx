"use client";

import { createElement, useEffect, useId, useRef } from "react";
import { defineTypeWriterElement } from "./type-writer-element";

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * Speed level from 1..15.
   * 1 = very slow, 15 = very fast.
   */
  speed?: number;
  /** If true, start when component enters viewport. */
  startOnView?: boolean;
  /** Percent visible before starting. */
  threshold?: number;
  ariaLabel?: string;
};

export function TypeWriter({
  children,
  className,
  speed = 8,
  startOnView = true,
  threshold = 0.35,
  ariaLabel,
}: Props) {
  const id = useId();
  const ref = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    defineTypeWriterElement();
  }, []);

  useEffect(() => {
    const el = ref.current as any;
    if (!el) return;

    // Keep it deterministic if component remounts.
    startedRef.current = false;
    if (typeof el.reset === "function") el.reset();

    if (!startOnView) {
      if (typeof el.start === "function") el.start();
      startedRef.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (startedRef.current) return;
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (typeof el.start === "function") el.start();
          startedRef.current = true;
          io.disconnect();
        }
      },
      { threshold: [0, threshold, 1] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [startOnView, threshold]);

  // Map UX-friendly speed levels (1..15) to characters/sec for the custom element.
  const clampedLevel = Math.min(15, Math.max(1, Math.round(speed)));
  const charsPerSecond = Math.round(2 + ((clampedLevel - 1) / 14) * 58);

  return createElement(
    "type-writer",
    {
      id,
      ref,
      className,
      "aria-label": ariaLabel,
      autostart: "false",
      speed: String(charsPerSecond),
      "respect-motion-preference": "true",
    } as any,
    children,
  );
}

