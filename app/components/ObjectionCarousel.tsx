"use client";

import { useState } from "react";

export type ObjectionItem = {
  objection: string;
  headline: string;
  body: string;
};

const DEPTH_STEP = 140;
const SCALE_STEP = 0.09;
const TILT_DEG = 9;
const Y_STEP = 70;

function getCardStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  const z = -abs * DEPTH_STEP;
  const scale = Math.max(0.4, 1 - abs * SCALE_STEP);
  const rotateX = offset * TILT_DEG;
  const y = offset * Y_STEP;
  const opacity = Math.max(0.35, 1 - abs * 0.2);
  return {
    transform: `translate(-50%, -50%) translateY(${y}px) translateZ(${z}px) rotateX(${rotateX}deg) scale(${scale})`,
    opacity,
    zIndex: 10 - abs,
    pointerEvents: offset === 0 ? "auto" : "none",
  };
}

export function ObjectionCarousel({ objections }: { objections: ObjectionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = objections.length;

  const goPrev = () => setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="objectionCarousel">
      <div className="objectionCarousel_viewport">
        <div className="objectionCarousel_stack" style={{ perspectiveOrigin: "50% 50%" }}>
          {objections.map((item, i) => {
            const offset = i - activeIndex;
            return (
              <article
                key={i}
                className="objectionCarousel_card"
                style={getCardStyle(offset)}
                onClick={() => offset !== 0 && setActiveIndex(i)}
                aria-hidden={offset !== 0}
                aria-current={offset === 0 ? "true" : undefined}
              >
                <p className="objectionCarousel_label">
                  Objection: {item.objection}
                </p>
                <h3 className="objectionCarousel_headline">{item.headline}</h3>
                <p className="objectionCarousel_body">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <nav className="objectionCarousel_nav" aria-label="Objection carousel">
        <button
          type="button"
          className="objectionCarousel_btn"
          onClick={goPrev}
          aria-label="Previous objection"
        >
          ‹ Prev
        </button>
        <span className="objectionCarousel_counter" aria-live="polite">
          {activeIndex + 1} / {total}
        </span>
        <button
          type="button"
          className="objectionCarousel_btn"
          onClick={goNext}
          aria-label="Next objection"
        >
          Next ›
        </button>
      </nav>
    </div>
  );
}
