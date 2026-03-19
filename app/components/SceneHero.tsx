"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { CTAButton } from "./CTAButton";

const CALENDLY = "https://calendly.com/allthingsassistantllc";

const SCENES = [
  {
    heading: "You’ve mastered your craft—now it’s time your support reflects that level.",
    factSubtitle: "Unspoken cost",
    factNumber: "20+ hrs",
    factDesc: "lost each month to admin drag, follow-ups, and context switching.",
    rightHeading: "Leadership gets diluted by logistics.",
    rightParagraph:
      "You are not disorganized. You are overloaded by low-leverage coordination that steals focus from strategic work.",
  },
  {
    heading: "Delegate with confidence, not guesswork.",
    factSubtitle: "Credibility",
    factNumber: "20+ years",
    factDesc: "of executive support experience, strengthened by an MBA.",
    rightHeading: "Structure, discretion, calm execution.",
    rightParagraph:
      "Akilah built this company to remove friction, protect your attention, and keep execution moving in demanding environments.",
  },
  {
    heading: "From fragmented tasks to seamless execution.",
    factSubtitle: "Core outcomes",
    factNumber: "4",
    factDesc: "execution pillars: operations rhythm, projects, events, and follow-through.",
    rightHeading: "Your workflow becomes easier to scale.",
    rightParagraph:
      "Details are handled with precision so you can operate with clarity, confidence, and consistency.",
  },
  {
    heading: "Book once. Clarify priorities. Start moving forward.",
    factSubtitle: "Simple process",
    factNumber: "3 steps",
    factDesc: "discover, align, execute.",
    rightHeading: "No pressure - just fit and priorities.",
    rightParagraph:
      "Bring your bottlenecks to the call and leave with a clearer operating plan for what to delegate first.",
  },
];

export function SceneHero() {
  return (
    <section className="sceneHero" aria-label="Hero slideshow">
      <div className="sceneHeroCard">
        <Splide
          aria-label="All Things Assistant value slides"
          options={{
            type: "loop",
            autoplay: true,
            interval: 5500,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 650,
            arrows: false,
            pagination: true,
            drag: true,
            swipe: true,
            keyboard: "global",
          }}
        >
          {SCENES.map((s) => (
            <SplideSlide key={s.heading}>
              <header className="sceneHeroHeader">
                <span className="sceneHeroBrand">All Things Assistant LLC</span>
              </header>

              <div className="sceneHeroBody">
                <div className="sceneHeroPrimary">
                  <h2 className="sceneHeroTitle">{s.heading}</h2>
                  <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
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
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
