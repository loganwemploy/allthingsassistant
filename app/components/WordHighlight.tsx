"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface WordHighlightProps {
  children: ReactNode;
  light?: boolean;
}

export function WordHighlight({ children, light }: WordHighlightProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={visible ? (light ? "word-highlight-light" : "word-highlight") : ""}
      style={{ display: "inline" }}
    >
      {children}
    </span>
  );
}
