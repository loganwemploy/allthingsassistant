"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";

const CALENDLY = "https://calendly.com/allthingsassistantllc";

const SCENES = [
  {
    heading: "Free your time, grow your business.",
    factSubtitle: "Busy professionals spend",
    factNumber: "20+ hrs",
    factDesc: "on admin each month—inbox, calendar, follow-ups.",
    rightHeading: "Your virtual office powerhouse.",
    rightParagraph:
      "All Things Assistant LLC helps you reclaim that time with executive-level support. One discovery call to clarify priorities, then we handle the rest.",
  },
  {
    heading: "Reclaim your time. Delegate with confidence.",
    factSubtitle: "Over",
    factNumber: "20 years",
    factDesc: "of elite executive support from Akilah Adams, MBA.",
    rightHeading: "Book → clarify → delegate.",
    rightParagraph:
      "We start with a short discovery call, identify what's slowing you down, agree on priorities, and put a sustainable plan in place.",
  },
  {
    heading: "Inbox, calendar, operations—handled.",
    factSubtitle: "One point of contact for",
    factNumber: "all of it",
    factDesc: "email, scheduling, travel, and follow-through.",
    rightHeading: "Relief from overwhelm.",
    rightParagraph:
      "Stop juggling details in your head. We triage, track, and execute so you can focus on the work only you can do.",
  },
  {
    heading: "Executive support without a full-time hire.",
    factSubtitle: "Custom support.",
    factNumber: "No one-size-fits-all.",
    factDesc: "Retainer, project-based, or hourly—we match your needs.",
    rightHeading: "Schedule appointment · virtual or 1v1.",
    rightParagraph:
      "Book a discovery call to see if we're a fit. We'll clarify scope, timeline, and next steps so you can start delegating with confidence.",
  },
];

export function SceneHero() {
  const [scene, setScene] = useState(0);
  const total = SCENES.length;
  const s = SCENES[scene];

  const goPrev = () => setScene((i) => (i === 0 ? total - 1 : i - 1));
  const goNext = () => setScene((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section className="sceneHero" aria-label="Hero slideshow">
      <div className="sceneHeroCard">
        <header className="sceneHeroHeader">
          <span className="sceneHeroBrand">All Things Assistant LLC</span>
          <span className="sceneHeroPager" aria-live="polite">
            {String(scene + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </header>

        <div className="sceneHeroBody">
          <div className="sceneHeroPrimary">
            <h2 className="sceneHeroTitle">{s.heading}</h2>
            <CTAButton href={CALENDLY}>Book a discovery call</CTAButton>
          </div>

          <div className="sceneHeroSecondary">
            <div className="sceneHeroFact">
              <span className="sceneHeroFactSub">{s.factSubtitle}</span>
              <span className="sceneHeroFactNum">{s.factNumber}</span>
              <span className="sceneHeroFactDesc">{s.factDesc}</span>
            </div>
            <h3 className="sceneHeroSubhead">{s.rightHeading}</h3>
            <p className="sceneHeroText">{s.rightParagraph}</p>
          </div>
        </div>

        <nav className="sceneHeroNav" aria-label="Slideshow">
          <button
            type="button"
            className="sceneHeroNavBtn"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            ‹ Prev
          </button>
          <div className="sceneHeroDots">
            {SCENES.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`sceneHeroDot ${i === scene ? "sceneHeroDotActive" : ""}`}
                onClick={() => setScene(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === scene ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            className="sceneHeroNavBtn"
            onClick={goNext}
            aria-label="Next slide"
          >
            Next ›
          </button>
        </nav>
      </div>
    </section>
  );
}
