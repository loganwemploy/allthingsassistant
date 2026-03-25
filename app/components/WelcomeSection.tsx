"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CTAButton } from "./CTAButton";
import styles from "./WelcomeSection.module.css";

const CALENDLY = "https://calendly.com/allthingsassistantllc";

const AKILAH_1 =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";
const AKILAH_2 =
  "https://dl4.pushbulletusercontent2.com/YVpmFJlIaS2MKM2pi6chgJk20XuTld0i/image.png";
const OFFICE_IMG =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80";

const SLIDES = [
  { src: AKILAH_1, alt: "Akilah Adams, founder of All Things Assistant LLC" },
  { src: AKILAH_2, alt: "Akilah Adams portrait" },
  { src: OFFICE_IMG, alt: "Professional executive support" },
];

export function WelcomeSection() {
  return (
    <div className={styles.welcomeSection}>
      <small className={styles.openHours}>
        Executive support · Virtual assistant services
      </small>

      <div className={styles.welcomeGrid}>
        <div className={styles.welcomeLeft}>
          <div className={styles.welcomeHeader}>
            <h2>Welcome to All Things Assistant</h2>
            <p className={styles.welcomeTagline}>
              Executive-level admin and virtual support so you can focus on
              growth.
            </p>
          </div>
          <div className={styles.welcomeCta}>
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
          </div>
        </div>

        <div className={styles.welcomeRight}>
          <Splide
            className={styles.featureSplide}
            options={{
              type: "loop",
              autoplay: true,
              interval: 4500,
              pauseOnHover: true,
              arrows: false,
              pagination: true,
              speed: 600,
              rewind: true,
            }}
            aria-label="Featured images"
          >
            {SLIDES.map((slide) => (
              <SplideSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
